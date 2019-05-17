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
  "width": 400,
  "height": 200,
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "mark": "tick",
  "encoding": {
    "x": {"field": "userId", "type": "quantitative"}
  }
})

const App = () => {
  return(
    <div>
      <h1>Built</h1>
      <VisTypes.VegaLitePlot spec={dotPlotSpec}/>
    </div>
  )
}

render(<App/>, document.getElementById('root'));
