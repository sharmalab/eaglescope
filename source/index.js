import React from "react";
import DataManager from "./DataManager.js"
import RestDataSource from "./xfRestDataSource.js"
import VisTypes from "./component/VisTypes.js"
import vegaSpecs from "./vegaSpecs.js"
import lungVegaSpecs from "./lungVegaSpecs.js"
import { render } from "react-dom";

//style
import "./style/main.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";


const config_url = ""
var default_config = {
  data_url: "http://localhost:8181/?t=5&s=2&u=3&i=10&f=3&c=2&co=5&l=2000",
  grid:
  [
    {"id":"g2", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":vegaSpecs.scatterSpec}
  ],
  detail:
  [
    {"id":"d1", "type":"DataTable"},
    {"id":"d2", "type":"ImageGrid", "urlField":"u0", "labelField":"s1"}
  ]
}
var lung_config = {
  data_url: "./data/demo.json",
  grid:
  [
    {"id":"g1", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":lungVegaSpecs.ScatterSpec},
    {"id":"g2", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":lungVegaSpecs.HistSpec},
    {"id":"g3", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":lungVegaSpecs.BarSpec},
    {"id":"g4", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":lungVegaSpecs.ScatterSpec},
    {"id":"g5", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":lungVegaSpecs.HistSpec},
    {"id":"g6", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":lungVegaSpecs.BarSpec},
    {"id":"g7", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":lungVegaSpecs.ScatterSpec},
    {"id":"g8", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":lungVegaSpecs.HistSpec},
    {"id":"g9", "type":"VegaLitePlot", "allData": "true", "h":1, "spec":lungVegaSpecs.BarSpec}
  ],
  body:
  [
    {"id":"d1", "type":"DataTable"}
  ]
}

// see https://github.com/birm/loadsy/
// REMEMBER TO ADD JSONIFY WHEN SWITCHING FROM DEFAULT
fetch(config_url).then(config=>{
  config = default_config
  config = lung_config
  let data_url = config.data_url
  var __DM = new DataManager()
  var __DS = new RestDataSource(data_url)
  var GridItems = []
  var DetailItems = []
  for (let x in config.grid){
    let y = config.grid[x]
    let ThisType = VisTypes[y.type] || VisTypes.Sample
    GridItems.push(<ThisType {...y}/>)
  }
  for (let x in config.detail){
    let y = config.detail[x]
    let ThisType = VisTypes[y.type] || VisTypes.Sample
    DetailItems.push(<ThisType {...y}/>)
  }


  const App = () => {
    return(
      <div>
      <nav className="navbar blue-bar">
        <span className="navbar-brand mb-0 h1">TCIA Clinical Data Explorer</span>
        <button id="gogo" className="clear-btn" title="Exploration" onClick={()=>{window.location.href="./treemap/treemaps.html?referrer=detail"}}><span className="fa fa-long-arrow-alt-left"></span> Back to Search Portal</button>
        <VisTypes.Sample id="count1"/>
      </nav>
        <div className="container-fluid">
          <div className="">
            <div className="grid">
              {GridItems}
            </div>
            <div className="body nodisplay">
              {DetailItems}
            </div>
          </div>
        </div>

      </div>
    )
  }

  render(<App/>, document.getElementById('root'));
})
