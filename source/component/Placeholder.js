import React from 'react';
import BaseVisualization from './BaseVisualization.js'

// should only have to worry about rendering
class Placeholder extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  render() {
    return <div id={this.id}></div>

  }
}

export default Placeholder
