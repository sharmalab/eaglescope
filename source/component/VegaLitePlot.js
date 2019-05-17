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
      let spec2 = vlCompile(spec, {logger: console}).spec
      spec2.signals = [
        {
          "name": "filter",
          "value": {"x": 0, "y": 0},
          "on": [
            {"events": "rect:mouseover", "update": "datum"},
            {"events": "rect:mouseout", "update": "{x:0, y:0}"}
          ]
        }
      ]
      var x = new vegaView(vegaParse(spec2))
      x.initialize(document.querySelector("#" + this.id))
      x.hover()
      x.run();
      x.addSignalListener("filter", console.info)
    }
  }
  componentDidUpdate(){
    if (this.state.ready){
      let spec = JSON.parse(this.props.spec)
      spec.data = {"values": this.state.filteredData}
      let spec2 = vlCompile(spec, {logger: console}).spec
      spec2.signals = [
        {
          "name": "filter",
          "value": {},
          "on": [
            {"events": "rect:mouseover", "update": "datum"}
          ]
        }
      ]
      var x = new vegaView(vegaParse(spec2))
      x.initialize(document.querySelector("#" + this.id))
      x.hover()
      x.run();
      x.addSignalListener("filter", console.info)
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
