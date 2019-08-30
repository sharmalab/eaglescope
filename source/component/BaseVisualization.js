import React from 'react';

class BaseVisualization extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.props = props;
    this.ctx = ctx;
    this.id = props.id || '_' + Math.random().toString(36).substr(2, 9);
    // TODO cauculate suitible h and w defaults
    this.width = 400
    this.height = this.props.h * 400 || this.props.height * 400 || 400
    this.state = {};
    // buffer time between event and draw, for debounce
    this.bufferTime = 500;
    // initial empty filter
    this.state.filter = {};
    this.state.globalFilter = {};
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
    this.filterReset = this.filterReset.bind(this)
    this.filterIn = this.filterIn.bind(this)
    this.filterOut = this.filterOut.bind(this)
    this.initData = this.initData.bind(this)
    // REGISTER self to filter event
    window.addEventListener("filterOut", this.filterOut, false)
    window.addEventListener("initData", this.initData, false)
  }
  filterReset(){
    this.setState((prevState, props) => {
      console.log(prevState)
      prevState.filter = {}
      let ev = new CustomEvent("filterIn", {detail:{id:this.id, filter:{"__RESET":"true"}}})
      window.dispatchEvent(ev)
      console.info("filterReset event: ", ev)
    })
  }
  // to be fired when a filter is selected in the component
  filterIn(f) {
    if ((JSON.stringify(f)==JSON.stringify(this.state.filter))){
      console.log("no change")
    } else {
      this.setState((prevState, props) => {
        console.log(prevState)
        prevState.filter = f
        let ev = new CustomEvent("filterIn", {detail:{id:this.id, filter:f}})
        window.dispatchEvent(ev)
        console.info("filterIn event: ", ev)
      })
    }
  }
  // to be fired when data
  filterOut(e) {
    let d = e.detail.data
      this.setState((prevState, props) => {
      prevState.filteredData = d
      prevState.globalFilter = e.detail.filter
      if (e.detail.filter == {}){
        prevState.filter = {}
      }
    })
    this.forceUpdate()
  }
  initData(e) {
    let d = e.detail.data
    this.setState((prevState, props) => {
      prevState.baseData = d;
      prevState.filteredData = d
      prevState.ready = true;
    })
    this.forceUpdate()
  }
  // TODO include other react lifecycle methods
  render() {
    console.warn("Not meant to render BaseVis itself...")
    return <p> BaseVisualization </p>;
  }
}

export default BaseVisualization
