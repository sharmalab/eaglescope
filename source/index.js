import React from "react";
import DataManager from "./DataManager.js"
import RestDataSource from "./xfRestDataSource.js"
import VisTypes from "./component/VisTypes.js"
import vegaSpecs from "./vegaSpecs.js"
import { render } from "react-dom";

//style
import "./style/main.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const data_url = "http://localhost:8181/?t=5&s=2&u=3&i=10&f=3&c=2&co=5&l=1000"
const config_url = ""
// see https://github.com/birm/loadsy/

fetch(config_url).then(x=>x.json).then(config=>{
  var __DM = new DataManager()
  var __DS = new RestDataSource(data_url)


  const App = () => {
    return(
      <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">DataScope the Second</span>
      </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-3 viscol">
              <VisTypes.Sample/>
              <VisTypes.SearchBar h="1" w="2"/>
              <VisTypes.VegaLitePlot spec={vegaSpecs.histSpec} h="2" w="2"/>
              <VisTypes.VegaLitePlot spec={vegaSpecs.barChartSpec} h="2" w="2"/>
              <VisTypes.VegaLitePlot spec={vegaSpecs.scatterSpec} h="2" w="2" allData/>
              <VisTypes.VegaLitePlot spec={vegaSpecs.dotPlotSpec} h="2" w="2" allData/>
              <VisTypes.VegaLitePlot spec={vegaSpecs.parallelCoordSpec} h="2" w="4"/>
            </div>
            <div className="col col-sm-12 col-lg-9 viscol">
              <VisTypes.DataTable/>
              <VisTypes.ImageGrid urlField="u0" labelField="s1"/>
            </div>
          </div>
        </div>

      </div>
    )
  }

  render(<App/>, document.getElementById('root'));
})
