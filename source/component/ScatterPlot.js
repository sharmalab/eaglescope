import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import vegaEmbed from 'vega-embed'

// should only have to worry about rendering
class ScatterPlot extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  componentDidMount(){
    let vlspec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {"values": this.state.filteredData},
      "mark": "bar",
      "mark": "point",
      "encoding": {
        "x": {"field": this.props.x, "type": "quantitative"},
        "y": {"field": this.props.y, "type": "quantitative"}
        }
      }
    if (this.props.z){
      vlspec.encoding.color = {"field": this.props.z, "type": "nominal"}
      vlspec.encoding.shape = {"field": this.props.z, "type": "nominal"}
    }
    vegaEmbed('#'+this.id, vlspec);
  }
  componentDidUpdate(){
    let vlspec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {"values": this.state.filteredData},
      "mark": "bar",
      "mark": "point",
      "encoding": {
        "x": {"field": this.props.x, "type": "quantitative"},
        "y": {"field": this.props.y, "type": "quantitative"}
        }
      }
    if (this.props.z){
      vlspec.encoding.color = {"field": this.props.z, "type": "nominal"}
      vlspec.encoding.shape = {"field": this.props.z, "type": "nominal"}
    }
    vegaEmbed('#'+this.id, vlspec);
  }
  render() {
    if(this.state.ready){
      return <div id={this.id}></div>
    } else {
      return <p> waiting...</p>
    }

  }
}

export default ScatterPlot
