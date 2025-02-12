import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload , faChartBar} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as d3 from 'd3';

class UploadButton extends PureComponent {
  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      showModal: false,      // modal visibility
      file: null,            // selected file
      fileContent: null,     // file content
      isLoading: false,
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSampleAnalysis = this.handleSampleAnalysis.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  }

  handleFileChange(event) {
    const file = event.target.files[0];
    this.setState({ file });
  }

  handleUpload() {
    const { file } = this.state;

    if (!file) {
      alert('Please select a CSV file to upload');
      return;
    }

    this.setState({ isLoading: true });

    // Use d3.csv to parse the uploaded file
    d3.csv(URL.createObjectURL(file))
      .then((data) => {
        // Save the file and parsed content in local storage
        localStorage.setItem('uploadedCSV', JSON.stringify(data));
        this.setState({ fileContent: data, isLoading: false });

        // Trigger sample analysis
        this.handleSampleAnalysis(data);
        this.toggleModal(); // Close the modal after successful upload
      })
      .catch((error) => {
        alert('Error parsing the CSV file.');
        console.error(error);
        this.setState({ isLoading: false });
      });
  }

  handleSampleAnalysis(data) {
    console.error("TODO!!", data);
  }

  render() {
    const { showModal, isLoading } = this.state;

    return (
      <div>
        <Button
          size="lg"
          style={{
            background: 'none',
            border: '2px solid #ccc',  // Adding a subtle border
            borderRadius: '12px',      // Rounded corners
            position: 'relative',      // Position relative for absolute positioning of icons
            width: '50px',             // Set width to fit icon size
            height: '50px',            // Set height to fit icon size
            padding: 0,                // Remove padding
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={this.toggleModal}
        >
          <FontAwesomeIcon
            size="sm"
            icon={faUpload}
            style={{
              position: 'absolute',
              top: '5px',
              left: '5px',
            }}
          />

          <FontAwesomeIcon
            size="sm"
            icon={faChartBar}
            style={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
            }}
          />
        </Button>

        {/* Modal for file upload */}
        <Modal show={showModal} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Upload CSV Data File</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isLoading ? (
              <p>Processing your file...</p>
            ) : (
              <div>
                <input
                  type="file"
                  accept=".csv"
                  onChange={this.handleFileChange}
                />
                <Button
                  variant="primary"
                  onClick={this.handleUpload}
                  disabled={!this.state.file}
                >
                  Upload
                </Button>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UploadButton;
