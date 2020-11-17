import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import {View as vegaView, parse as vegaParse} from 'vega'
import { compile as vlCompile } from 'vega-lite'

// should only have to worry about rendering
class Histogram extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  componentDidMount(){
    let vlspec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {"values": this.state.filteredData},
      "mark": "bar",
      "selection":{
        "brush": {
          "encodings": ['x'],
          "type": "interval"
        }
      },
      "encoding": {
        "x": {
          "bin": true,
          "field": this.props.x,
          "type": "quantitative"
        },
        "y": {
          "aggregate": "count",
          "type": "quantitative"
        }
      }
    }
    // set up pre-existing filter state
    vlspec.height = this.props.h*100 || 100
    vlspec.width = this.props.w*100 || 100
    let vl_view = new vegaView(vegaParse(vlCompile(vlspec, {logger: console}).spec))
    vl_view.initialize(document.querySelector("#" + this.id))
    vl_view.renderer("svg")
    vl_view.hover();
    vl_view.addDataListener('brush_store', (t,e)=> {
      if (e.length >0 && e[0].fields.length > 0){
        window.clearTimeout(this.lastEvent)
        this.lastEvent = window.setTimeout(x=>{

        },this.bufferTime)
      }
    })
    vl_view.run();
  }

  componentDidUpdate(){
    let vlspec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {"values": this.state.filteredData},
      "mark": "bar",
      "selection":{
        "brush": {
          "encodings": ['x'],
          "type": "interval"
        }
      },
      "encoding": {
        "x": {
          "bin": true,
          "field": this.props.x,
          "type": "quantitative"
        },
        "y": {
          "aggregate": "count",
          "type": "quantitative"
        }
      }
    }
    // IF filter state for this comopnent, set it to selection.brush.init
    if (this.state.filter[this.props.x] && this.state.filter[this.props.x].less && this.state.filter[this.props.x].greater){
      vlspec.selection.brush.init = {"x": [this.state.filter[this.props.x].greater,this.state.filter[this.props.x].less]}
    }
    vlspec.height = this.props.h*100 || 100
    vlspec.width = this.props.w*100 || 100
    let vl_view = new vegaView(vegaParse(vlCompile(vlspec, {logger: console}).spec))
    vl_view.initialize(document.querySelector("#" + this.id))
    vl_view.renderer("svg")
    vl_view.hover()
    vl_view.addDataListener('brush_store', (t,e)=> {
      if (e.length >0 && e[0].fields.length > 0){
        window.clearTimeout(this.lastEvent)
        this.lastEvent = window.setTimeout(x=>{

          let new_filter = {}
          this.filterIn(new_filter)
        },this.bufferTime)
      }
    })
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

export default Histogram
