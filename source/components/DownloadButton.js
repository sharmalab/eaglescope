import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class DownloadButton extends PureComponent {
  download() {
    let data = this.props.data[0];
    if (data.length === 0) {
      data = this.props.data[1];
    }
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

  render() {
    return (
      <Button
        size="lg"
        style={{
          background: 'none',
          border: 'none',
        }}
        id={this.id}
        onClick={() => {
          this.download();
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
