import React from 'react';
import BaseVisualization from './BaseVisualization.js'

class HomeButton extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  goHome(){
    const query = new URLSearchParams(window.location.search);
    const homeUrl = query.get("homeurl") || "../"
    console.log(homeUrl)
    window.location.href = homeUrl;
  }
  render() {
    return <button id={this.id} onClick={()=>{this.goHome()}}>HOME</button>

  }
}

export default HomeButton
