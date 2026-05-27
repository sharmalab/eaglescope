import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import * as d3 from 'd3';
import { ConfigContext } from '../contexts/ConfigContext';
import {
  covertRaw,
  analyzeDataset,
  recommendVisualizations,
  RECOMMEND_THRESHOLD,
} from '../common/dataAnalysis';
import {
  getRegistry,
  updateRegistry,
  saveVisConfigs,
  loadVisConfigs,
  setLocalDataParam,
} from '../common/localDataRegistry';
import VisRecommendations from './VisRecommendations/VisRecommendations';

class UploadButton extends PureComponent {
  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      showModal: false,
      file: null,
      fileContent: null,
      isLoading: false,
      name: '',
      url: '',
      step: 1,
      recommendations: [],
      selectedRecs: new Set(),
      storageKey: null,
      registry: getRegistry(),
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleApplyRecommendations = this.handleApplyRecommendations.bind(this);
    this.handleSkipRecommendations = this.handleSkipRecommendations.bind(this);
    this.handleToggleRec = this.handleToggleRec.bind(this);
    this.handleToggleAllRecs = this.handleToggleAllRecs.bind(this);
    this.handleLoadPrevious = this.handleLoadPrevious.bind(this);
  }

  handleFileChange(event) {
    const file = event.target.files[0];
    this.setState({ file });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleUpload() {
    const { file, url, name } = this.state;

    if (!file && !url) {
      // eslint-disable-next-line no-alert
      alert('Please select a CSV file or provide a URL');
      return;
    }

    this.setState({ isLoading: true });

    const fileUrl = url || (file && URL.createObjectURL(file));
    const storageKey = name.trim() || 'uploaded';

    d3.csv(fileUrl, covertRaw)
      .then((data) => {
        localStorage.setItem(`es-${storageKey}`, JSON.stringify(data));

        updateRegistry({
          name: name.trim() || storageKey,
          storageKey,
          rowCount: data.length,
          uploadedAt: new Date().toISOString(),
        });
        setLocalDataParam(storageKey);

        const dataInfo = analyzeDataset(data);
        const recommendations = recommendVisualizations(dataInfo);
        const selectedRecs = new Set(
          recommendations
            .filter((r) => r.score >= RECOMMEND_THRESHOLD)
            .map((r) => r.config.id),
        );

        this.setState({
          fileContent: data,
          isLoading: false,
          step: 2,
          recommendations,
          selectedRecs,
          storageKey,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert('Error parsing the CSV file.');
        console.error(error);
        this.setState({ isLoading: false });
      });
  }

  handleLoadPrevious(entry) {
    const { storageKey } = entry;
    const visConfigs = loadVisConfigs(storageKey);

    setLocalDataParam(storageKey);
    this.context.setConfig((prev) => {
      const next = { ...prev, DATA_RESOURCE_URL: `local://${storageKey}` };
      if (visConfigs?.length > 0) {
        next.VISUALIZATION_VIEW_CONFIGURATION = [
          ...(prev.VISUALIZATION_VIEW_CONFIGURATION || []).filter((v) => !v.id.startsWith('rec-')),
          ...visConfigs,
        ];
      }
      return next;
    });
    this.toggleModal();
  }

  handleToggleRec(id) {
    this.setState((prev) => {
      const selectedRecs = new Set(prev.selectedRecs);
      if (selectedRecs.has(id)) selectedRecs.delete(id);
      else selectedRecs.add(id);
      return { selectedRecs };
    });
  }

  handleToggleAllRecs() {
    const { recommendations, selectedRecs } = this.state;
    const allSelected = recommendations.every((r) => selectedRecs.has(r.config.id));
    const next = allSelected
      ? new Set()
      : new Set(recommendations.map((r) => r.config.id));
    this.setState({ selectedRecs: next });
  }

  handleApplyRecommendations() {
    const { recommendations, selectedRecs, storageKey } = this.state;
    const toAdd = recommendations
      .filter((r) => selectedRecs.has(r.config.id))
      .map((r) => r.config);

    if (storageKey) {
      saveVisConfigs(storageKey, toAdd);
    }

    const { setConfig } = this.context;
    if (setConfig && toAdd.length > 0) {
      setConfig((prev) => ({
        ...prev,
        VISUALIZATION_VIEW_CONFIGURATION: [
          ...(prev.VISUALIZATION_VIEW_CONFIGURATION || []).filter(
            (v) => !v.id.startsWith('rec-'),
          ),
          ...toAdd,
        ],
      }));
    }

    this.toggleModal();
  }

  handleSkipRecommendations() {
    this.toggleModal();
  }

  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      step: 1,
      recommendations: [],
      selectedRecs: new Set(),
      file: null,
      name: '',
      url: '',
      fileContent: null,
      storageKey: null,
      registry: !prevState.showModal ? getRegistry() : prevState.registry,
    }));
  }

  render() {
    const {
      showModal, file, isLoading, name, url, step, recommendations, selectedRecs, registry,
    } = this.state;

    const selectedCount = selectedRecs.size;

    return (
      <div>
        <Button
          size="lg"
          style={{
            background: 'none',
            border: '2px solid #ccc',
            borderRadius: '12px',
            position: 'relative',
            width: '50px',
            height: '50px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={this.toggleModal}
        >
          <FontAwesomeIcon
            size="sm"
            icon={faUpload}
            style={{ position: 'absolute', top: '5px', left: '5px' }}
          />
          <FontAwesomeIcon
            size="sm"
            icon={faChartBar}
            style={{ position: 'absolute', bottom: '5px', right: '5px' }}
          />
        </Button>

        <Modal show={showModal} onHide={this.toggleModal} size={step === 2 ? 'lg' : undefined}>
          <Modal.Header closeButton>
            <Modal.Title>
              {step === 1 ? 'Upload CSV Data File' : 'Recommended Visualizations'}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {step === 1 && (
              isLoading ? (
                <p>Processing your file...</p>
              ) : (
                <div>
                  {registry.length > 0 && (
                    <div className="mb-3">
                      <p className="mb-1 fw-semibold">Previously uploaded</p>
                      <ListGroup>
                        {registry.map((entry) => (
                          <ListGroup.Item
                            key={entry.storageKey}
                            action
                            onClick={() => this.handleLoadPrevious(entry)}
                            className="d-flex justify-content-between align-items-center"
                          >
                            <span>{entry.name}</span>
                            <small className="text-muted">
                              {entry.rowCount.toLocaleString()}
                              {' '}
                              rows
                              {' · '}
                              {new Date(entry.uploadedAt).toLocaleDateString()}
                            </small>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                      <hr />
                    </div>
                  )}

                  <p className="mb-1 fw-semibold">Upload new</p>
                  <input
                    type="file"
                    accept=".csv"
                    onChange={this.handleFileChange}
                  />
                  <div>
                    <label>
                      Name (optional):
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                        placeholder="local dashboard name"
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      URL (optional):
                      <input
                        type="text"
                        name="url"
                        value={url}
                        onChange={this.handleInputChange}
                        placeholder="Enter CSV file URL"
                      />
                    </label>
                  </div>
                  <Button
                    variant="primary"
                    onClick={this.handleUpload}
                    disabled={!file && !url}
                  >
                    Upload
                  </Button>
                </div>
              )
            )}

            {step === 2 && (
              <VisRecommendations
                recommendations={recommendations}
                selected={selectedRecs}
                onToggle={this.handleToggleRec}
                onToggleAll={this.handleToggleAllRecs}
              />
            )}
          </Modal.Body>

          {step === 2 && (
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleSkipRecommendations}>
                Skip
              </Button>
              <Button
                variant="primary"
                onClick={this.handleApplyRecommendations}
                disabled={selectedCount === 0}
              >
                Add to Dashboard (
                {selectedCount}
                )
              </Button>
            </Modal.Footer>
          )}
        </Modal>
      </div>
    );
  }
}

UploadButton.contextType = ConfigContext;

export default UploadButton;
