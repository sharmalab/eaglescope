import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
class DownloadButton extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.goHome = this.download.bind(this)
  }
  download(){
    console.log("downloading", this.props.data, this);
    const blob = new Blob([JSON.stringify(this.props.data)],{type:'application/json'});
    const href =  URL.createObjectURL(blob)
    const link = document.createElement('a');
    link.href = href;
    link.download = this.title || "download" + ".json";
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
