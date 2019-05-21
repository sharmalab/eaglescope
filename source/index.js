import React from "react";
import VisSelect from "./component/VisSelect.js"
//import SampleVisualization from "./component/SampleVisualization.js"
import DataManager from "./DataManager.js"
import RestDataSource from "./RestDataSource.js"
import VisTypes from "./component/VisTypes.js"
import { render } from "react-dom";

const data_url = "https://jsonplaceholder.typicode.com/todos/"

var __DM = new DataManager()
var __DS = new RestDataSource(data_url)

var dotPlotSpec = JSON.stringify({
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "mark": "tick",
  "selection":{
    "brush": {
      "encodings": ['x'],
      "type": "interval"
    }
  },
  "encoding": {
    "x": {"field": "userId", "type": "quantitative"}
  }
})

const App = () => {
  return(
    <div>
      <h1>Built</h1>
      <VisTypes.Sample/>
      <VisTypes.Histogram x="userId" h="2" w="2"/>
      <VisTypes.BarChart x="userId" y="id" h="2" w="2"/>
      <VisTypes.ScatterPlot x="userId" y="id" z="completed" h="2" w="2"/>
      <VisTypes.VegaLitePlot spec={dotPlotSpec} h="2" w="2"/>
      <VisTypes.VegaLitePlot spec={dotPlotSpec} h="1" w="1"/>
    </div>
  )
}

render(<App/>, document.getElementById('root'));
