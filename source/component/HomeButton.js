import React from 'react';
import BaseVisualization from './BaseVisualization.js'

class HomeButton extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  goHome(){
    alert("this will go to a home link")
  }
  render() {
    return <div id={this.id} onClick={()=>{this.goHome()}>HOME</div>

  }
}

export default HomeButton
