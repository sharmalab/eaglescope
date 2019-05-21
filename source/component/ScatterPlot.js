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
      "selection": {
        "brush": {
          "encodings": ["x","y"],
          "type": "interval"
        }
      },
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
    vlspec.height = this.props.h*100 || 100
    vlspec.width = this.props.w*100 || 100
    let vl_view = new vegaView(vegaParse(vlCompile(vlspec, {logger: console}).spec))
    vl_view.initialize(document.querySelector("#" + this.id))
    vl_view.renderer("svg")
    vl_view.addDataListener('brush_store', (t,e)=> {
      if (e.length >0 && e[0].fields.length >1){
        vl_view.addEventListener("mouseup", v=>{
          console.log("FIELD", e[0].fields[0].field, e[0].fields[1].field)
          console.log("VALUE", e[0].values[0], e[0].values[1])
        })
      }
    })
    vl_view.hover()
    vl_view.run();
  }
  componentDidUpdate(){
    let vlspec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {"values": this.state.filteredData},
      "selection": {
        "brush": {
          "encodings": ["x","y"],
          "type": "interval"
        }
      },
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
    vlspec.height = this.props.h*100 || 100
    vlspec.width = this.props.w*100 || 100
    let vl_view = new vegaView(vegaParse(vlCompile(vlspec, {logger: console}).spec))
    vl_view.initialize(document.querySelector("#" + this.id))
    vl_view.renderer("svg")
    vl_view.addDataListener('brush_store', (t,e)=> {
      if (e.length >0 && e[0].fields.length >1){
        console.log("FIELD", e[0].fields[0].field, e[0].fields[1].field)
        console.log("VALUE", e[0].values[0], e[0].values[1])
      }
    })
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
