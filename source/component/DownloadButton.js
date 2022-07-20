import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
class DownloadButton extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.download = this.download.bind(this)
  }
  download(){
    console.log("downloading", this.props.data, this);
    let data = this.props.data[0];
    if (data.length == 0){
      data = this.props.data[1]
    }
    const blob = new Blob([JSON.stringify(data)],{type:'application/json'});
    const href =  URL.createObjectURL(blob)
    const link = document.createElement('a');
    link.href = href;
    link.download = this.props.title || "download" + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }
  render() {
    return <Button size="lg" id={this.id} onClick={()=>{this.download()}}><FontAwesomeIcon icon="download"/></Button>
  }
}

export default DownloadButton
