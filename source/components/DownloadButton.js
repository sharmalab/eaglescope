import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class DownloadButton extends PureComponent {
  downloadJson() {
    let data = this.props.data[0];
    if (data.length === 0) {
      data = this.props.data[1];
    }
    // CSV
    // let csvContent = 'data:text/csv;charset=utf-8,';
    // data.forEach((rowArray) => {
    //   const row = rowArray.join(',');
    //   csvContent += `${row}\r\n`;
    // });
    // const encodedUri = encodeURI(csvContent);
    // const link = document.createElement('a');
    // link.href = encodedUri;
    // link.download = this.props.title || 'download.csv';
    // document.body.appendChild(link); // Required for FF
    // link.click(); // This will download the data file named "my_data.csv".
    // document.body.removeChild(link);

    // JSON
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = this.props.title || 'download.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }

  downloadCsv() {
    let data = this.props.data[0];
    if (data.length === 0) {
      data = this.props.data[1];
    }
    // Convert data to CSV format
    const csvRows = [];
    
    // Get the headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(',')); // Join headers with commas

    // Add rows
    for (const row of data) {
        const values = headers.map(header => {
            const value = row[header];
            // Handle potential commas and newlines in values by escaping them
            return `"${String(value).replace(/"/g, '""')}"`; // Double quotes for escape
        });
        csvRows.push(values.join(',')); // Join values with commas
    }

    // Create CSV content
    const csvContent = csvRows.join('\n');

    // Create a Blob for the CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const href = URL.createObjectURL(blob);
    
    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = href;
    link.download = this.props.title || 'download.csv'; // Set filename to 'download.csv' or custom title
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }


  render() {
    return (
      <Button
        title="Download Currently Selected Data"
        size="lg"
        style={{
          background: 'none',
          border: 'none',
        }}
        id={this.id}
        onClick={() => {
          this.downloadCsv();
        }}
      >
        <FontAwesomeIcon size="1x" icon="download" />
      </Button>
    );
  }
}

export default DownloadButton;

DownloadButton.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
};
