import React from "react";
import VisSelect from "./component/VisSelect.js"
//import SampleVisualization from "./component/SampleVisualization.js"
import DataManager from "./DataManager.js"
import RestDataSource from "./RestDataSource.js"
import VisTypes from "./component/VisTypes.js"
import vegaSpecs from "./vegaSpecs.js"
import { render } from "react-dom";

//style
import "./style/main.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const data_url = "http://localhost:8181/?t=5&s=2&u=3&i=10&f=3&l=1000"

var __DM = new DataManager()
var __DS = new RestDataSource(data_url)


const App = () => {
  return(
    <div>
      <h1>Built</h1>
      <div className="container sml-container">
        <VisTypes.Sample/>
        <VisTypes.SearchBar h="2" w="2"/>
        <VisTypes.VegaLitePlot spec={vegaSpecs.histSpec} h="2" w="2"/>
        <VisTypes.VegaLitePlot spec={vegaSpecs.barChartSpec} h="2" w="2"/>
        <VisTypes.VegaLitePlot spec={vegaSpecs.scatterSpec} h="2" w="2" allData/>
        <VisTypes.VegaLitePlot spec={vegaSpecs.dotPlotSpec} h="2" w="2" allData/>
        <VisTypes.VegaLitePlot spec={vegaSpecs.parallelCoordSpec} h="2" w="4"/>
      </div>
      <div className="container lg-container">
        <VisTypes.DataTable columns={["s0","t0","t1","f0","i0"]}/>
        <VisTypes.ImageGrid urlField="u0" labelField="s1"/>
      </div>

    </div>
  )
}

render(<App/>, document.getElementById('root'));
