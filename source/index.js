import React from "react";
import VisSelect from "./component/VisSelect.js"
//import SampleVisualization from "./component/SampleVisualization.js"
import DataManager from "./DataManager.js"
import RestDataSource from "./RestDataSource.js"
import VisTypes from "./component/VisTypes.js"
import vegaSpecs from "./vegaSpecs.js"
import GridLayout from 'react-grid-layout'
import { render } from "react-dom"

//style
import "./style/main.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const data_url = "http://localhost:8181/?t=5&s=2&u=3&i=10&f=3&c=2&co=5&l=1000"
// see https://github.com/birm/loadsy/

var __DM = new DataManager()
var __DS = new RestDataSource(data_url)


const App = () => {
  var layout = [
    {i:"v1", x:0, y:0, w:2, h:2},
    {i:"v2", x:0, y:2, w:2, h:2},
    {i:"v3", x:0, y:4, w:2, h:2},
    {i:"v4", x:0, y:6, w:2, h:2},
    {i:"v5", x:0, y:8, w:2, h:2},
    {i:"v6", x:2, y:0, w:8, h:10},
    {i:"v7", x:2, y:8, w:8, h:4},
  ]
  return(
    <div>
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">DataScope the Second</span>
    </nav>
      <div className="container-fluid">
      <VisTypes.Sample/>
      <VisTypes.SearchBar h="1" w="2"/>
        <GridLayout className="layout" layout={layout} cols={10} rowHeight={100} width={1000}>
            <div id="v1" key="v1"><VisTypes.VegaLitePlot spec={vegaSpecs.histSpec} h="2" w="2"/></div>
            <div id="v2" key="v2"><VisTypes.VegaLitePlot spec={vegaSpecs.barChartSpec} h="2" w="2"/></div>
            <div id="v3" key="v3"><VisTypes.VegaLitePlot spec={vegaSpecs.scatterSpec} h="2" w="2" allData/></div>
            <div id="v4" key="v4"><VisTypes.VegaLitePlot spec={vegaSpecs.dotPlotSpec} h="2" w="2" allData/></div>
            <div id="v5" key="v5"><VisTypes.VegaLitePlot spec={vegaSpecs.parallelCoordSpec} h="2" w="4"/></div>
            <div id="v6" key="v6"><VisTypes.DataTable /></div>
            <div id="v7" key="v7"><VisTypes.ImageGrid urlField="u0" labelField="s1"/></div>
        </GridLayout>
      </div>

    </div>
  )
}

render(<App/>, document.getElementById('root'));
