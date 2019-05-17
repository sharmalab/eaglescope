import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import vegaEmbed from 'vega-embed'

// should only have to worry about rendering
class VegaLitePlot extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  componentDidMount(){
    console.log(this)
    let spec = JSON.parse(this.props.spec)
    spec.data = {"values": this.state.filteredData}
    vegaEmbed('#'+this.id, spec);
  }
  componentDidUpdate(){
    let spec = JSON.parse(this.props.spec)
    spec.data = {"values": this.state.filteredData}
    vegaEmbed('#'+this.id, spec);
  }
  render() {
    console.log(this)
    if(this.state.ready){
      return <div id={this.id}></div>
    } else {
      return <p> waiting...</p>
    }

  }
}

export default VegaLitePlot
