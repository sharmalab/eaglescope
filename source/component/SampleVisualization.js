import React from 'react';
import BaseVisualization from './BaseVisualization.js'

// should only have to worry about rendering
class SampleVisualization extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  render() {
    if(this.state.ready){
      return <div id={this.id}><p> Records: {this.state.filteredData.length} of {this.state.baseData.length} </p></div>
    } else {
      return <div id={this.id}><p> waiting...</p></div>
    }

  }
}

export default SampleVisualization
