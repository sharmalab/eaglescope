import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import vegaEmbed from 'vega-embed'

// should only have to worry about rendering
class BarChart extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
  }
  componentDidMount(){
    let vlspec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {"values": this.state.filteredData},
      "mark": "bar",
      "encoding": {
        "y": {
          "field": this.props.x,
          "type": "ordinal"
        },
        "x": {
          "aggregate": "sum",
          "field": this.props.y,
          "type": "quantitative"
        }
      }
    }
    vegaEmbed('#'+this.id, vlspec);
  }
  componentDidUpdate(){
    let vlspec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
      "data": {"values": this.state.filteredData},
      "mark": "bar",
      "encoding": {
        "y": {
          "field": this.props.x,
          "type": "ordinal"
        },
        "x": {
          "aggregate": "sum",
          "field": this.props.y,
          "type": "quantitative"
        }
      }
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

export default BarChart
