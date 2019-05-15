import React from 'react';
import BaseVisualization from './BaseVisualization.js'

// should only have to worry about rendering
class SampleVisualization extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  render() {
    return <p> Sample Vis </p>
  }
}

export default SampleVisualization
