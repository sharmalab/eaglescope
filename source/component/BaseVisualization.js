import React from 'react';
import Events from '../Events.js'

class BaseVisualization extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.props = props;
    this.ctx = ctx;
    this.id = props.id || '_' + Math.random().toString(36).substr(2, 9);
    // h and w, grid units(?)
    this.height = this.props.h || this.props.height || 1
    this.width = this.props.w || this.props.width || 1
    this.state = {};
    // initial empty filter
    this.state.filter = {};
    //not ready until initialized
    this.state.ready = false;
    // base data is data without any filters
    this.state.baseData = [];
    // filteredData is data with all active filters
    this.state.filteredData = [];
    // does the visualization support...
    this.supportsContext = true;
    this.supportsInteraction = true
    // bind methods
    this.filterIn = this.filterIn.bind(this)
    this.filterOut = this.filterOut.bind(this)
    this.initData = this.initData.bind(this)
    // REGISTER self to filter event
    window.addEventListener("filterOut", this.filterOut, false)
    window.addEventListener("initData", this.initData, false)
  }
  // to be fired when a filter is selected in the component
  filterIn(f) {
    this.setState(prevState => {
      prevState.filter = f
    })
    let ev = new CustomEvent("filterIn", {detail:{id:this.id, filter:f}})
    Events.dispatchEvent(ev)
  }
  // to be fired when data
  filterOut(e) {
    d = e.detail.data
    this.setState(prevState => {
      prevState.filteredData = d
    })
  }
  initData(e) {
    d = e.detail.data
    this.setState(prevState => {
      prevState.baseData = d;
      prevState.filteredData = d
    })
  }
  // TODO include other react lifecycle methods
  render() {
    console.warn("Not meant to render BaseVis itself...")
    return <p> BaseVisualization </p>;
  }
}

export default BaseVisualization
