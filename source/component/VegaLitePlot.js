import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import {View as vegaView, parse as vegaParse} from 'vega'
import { compile as vlCompile } from 'vega-lite'

// should only have to worry about rendering
class VegaLitePlot extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  componentDidMount(){
    if (this.state.ready){
      let spec = JSON.parse(this.props.spec)
      spec.data = {"values": this.state.filteredData}
      spec.height = this.props.h || 100
      spec.width = this.props.w || 100
      let vl_view = new vegaView(vegaParse(vlCompile(spec).spec))
      vl_view.initialize(document.querySelector("#" + this.id))
      vl_view.renderer("svg")
      vl_view.hover()
      vl_view.run();
    }
  }
  componentDidUpdate(){
    if (this.state.ready){
      let spec = JSON.parse(this.props.spec)
      spec.data = {"values": this.state.filteredData}
      spec.height = this.props.h || 100
      spec.width = this.props.w || 100
      let vl_view = new vegaView(vegaParse(vlCompile(spec).spec))
      vl_view.initialize(document.querySelector("#" + this.id))
      vl_view.renderer("svg")
      vl_view.hover()
      vl_view.run();
    }
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
