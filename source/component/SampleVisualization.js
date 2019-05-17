import React from 'react';
import BaseVisualization from './BaseVisualization.js'

// should only have to worry about rendering
class SampleVisualization extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  render() {
    if(this.state.ready){
      return <p> Records: {this.state.filteredData.length} of {this.state.baseData.length} </p>
    } else {
      return <p> waiting...</p>
    }

  }
}

export default SampleVisualization
