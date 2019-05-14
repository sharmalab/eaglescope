import React

class BaseVisualization extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.props = props;
    this.ctx = ctx;
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
    // REGISTER itself
    // TODO
  }
  // to be fired when a filter is selected in the component
  filterIn(f) {
    this.setState(prevState => {
      prevState.filter = f
    })
  }
  // to be fired when data
  filterOut(d) {
    // we got new data
  }
  initData(d) {
    this.state.baseData = d;
    this.state.filteredData = d;
  }
  // TODO include other react lifecycle methods
  render() {
    console.warn("Not meant to render BaseVis itself...")
    return <p> BaseVisualization </p>;
  }
}

export default BaseVisualization
