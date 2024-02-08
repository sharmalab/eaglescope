import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class PathdbDownloadButton extends PureComponent {
  download() {
    let data = this.props.data[0];
    if (data.length === 0) {
      data = this.props.data[1];
    }
    let limitedData = data.slice(0, 10);
    // trigger downloads from pathdb
    for (let record of limitedData){
      if (record[this.props.field]){
        console.log("trying to get metadata for slide with pathdb id", record[this.props.field])
        fetch("/node/" + record[this.props.field] + "?_format=json", {mode: "cors"}).then(x=>x.json()).then(x=>{
          console.log("got something for pathdb id", x['field_wsiimage'][0]['url'])
          let slide_url = x['field_wsiimage'][0]['url']
          if (window.location.protocol === "https:") {
            slide_url = slide_url.replace(/^http:\/\//i, 'https://');
          }
          const iframe = document.createElement("iframe");
          iframe.setAttribute("sandbox", "allow-downloads allow-scripts");
          iframe.src = slide_url;
          iframe.setAttribute("style", "display: none");
          document.body.appendChild(iframe);
        }).catch(console.error)
      }
    }
  }

  render() {
    if (this.props.field){
      return (
        <Button
          title="Download WSI Files"
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
          <FontAwesomeIcon size="1x" icon="images" />
        </Button>
      );
    } 
    }
}

export default PathdbDownloadButton;

PathdbDownloadButton.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
  field:  PropTypes.string.isRequired,
};
