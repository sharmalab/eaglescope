import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as d3 from 'd3';

class UploadButton extends PureComponent {
  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      showModal: false, // modal visibility
      file: null, // selected file
      fileContent: null, // file content
      isLoading: false,
      name: '', // name input field
      url: '', // URL input field
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSampleAnalysis = this.handleSampleAnalysis.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
      alert('Please select a CSV file or provide a URL');
      return;
    }

    this.setState({ isLoading: true });

    const fileUrl = url || (file && URL.createObjectURL(file));

    // Use d3.csv to parse the uploaded file or the URL
    d3.csv(fileUrl)
      .then((data) => {
        // Save the file and parsed content in local storage
        localStorage.setItem('uploadedCSV', JSON.stringify(data));
        this.setState({ fileContent: data, isLoading: false });

        // Trigger sample analysis
        this.handleSampleAnalysis(data, name, url);
        this.toggleModal(); // Close the modal after successful upload
      })
      .catch((error) => {
        alert('Error parsing the CSV file.');
        console.error(error);
        this.setState({ isLoading: false });
      });
  }

  handleSampleAnalysis(data) {
    console.log('TODO!!', data, this.state.name);
    if (this.state.url) {
      console.log('I actually got a url source', this.state.url);
    }
  }

  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  }

  render() {
    const {
      showModal, file, isLoading, name, url,
    } = this.state;

    return (
      <div>
        <Button
          size="lg"
          style={{
            background: 'none',
            border: '2px solid #ccc', // Adding a subtle border
            borderRadius: '12px', // Rounded corners
            position: 'relative', // Position relative for absolute positioning of icons
            width: '50px', // Set width to fit icon size
            height: '50px', // Set height to fit icon size
            padding: 0, // Remove padding
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
            )}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UploadButton;
