import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import {View as vegaView, parse as vegaParse} from 'vega'
import { compile as vlCompile } from 'vega-lite'

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
    vlspec.height = this.props.h || 100
    vlspec.width = this.props.w || 100
    let vl_view = new vegaView(vegaParse(vlCompile(vlspec, {logger: console}).spec))
    vl_view.initialize(document.querySelector("#" + this.id))
    vl_view.renderer("svg")
    vl_view.hover()
    vl_view.run();
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
    vlspec.height = this.props.h || 100
    vlspec.width = this.props.w || 100
    let vl_view = new vegaView(vegaParse(vlCompile(vlspec, {logger: console}).spec))
    vl_view.initialize(document.querySelector("#" + this.id))
    vl_view.renderer("svg")
    vl_view.hover()
    vl_view.run();
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
