import React from 'react';
import BaseVisualization from './BaseVisualization.js'

// should only have to worry about rendering
class ResetButton extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  render() {
    if(this.state.ready){
      return <div id={this.id}><button className="clear-btn" title="Exploration" onClick={()=>{this.filterReset()}}><span className="fa fa-snowplow"></span> Reset Filters</button></div>
    } else {
      return <div id={this.id}><p> waiting...</p></div>
    }

  }
}

export default ResetButton
