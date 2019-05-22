import React from "react";
import VisSelect from "./component/VisSelect.js"
//import SampleVisualization from "./component/SampleVisualization.js"
import DataManager from "./DataManager.js"
import RestDataSource from "./RestDataSource.js"
import VisTypes from "./component/VisTypes.js"
import vegaSpecs from "./vegaSpecs.js"
import { render } from "react-dom";

const data_url = "https://jsonplaceholder.typicode.com/todos/"

var __DM = new DataManager()
var __DS = new RestDataSource(data_url)


const App = () => {
  return(
    <div>
      <h1>Built</h1>
      <VisTypes.Sample/>
      <VisTypes.VegaLitePlot spec={vegaSpecs.histSpec} h="2" w="2"/>
      <VisTypes.VegaLitePlot spec={vegaSpecs.barChartSpec} h="2" w="2"/>
      <VisTypes.VegaLitePlot spec={vegaSpecs.scatterSpec} h="2" w="2"/>
      <VisTypes.VegaLitePlot spec={vegaSpecs.dotPlotSpec} h="2" w="2" allData/>
      <VisTypes.VegaLitePlot spec={vegaSpecs.parallelCoordSpec} h="2" w="4"/>
    </div>
  )
}

render(<App/>, document.getElementById('root'));
