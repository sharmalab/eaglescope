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

const config_url = ""
var default_config = {
  data_url: "http://localhost:8181/?t=5&s=2&u=3&i=10&f=3&c=2&co=5&l=2000",
  bar:
  [
    {"id":"b1", "type":"Sample"},
    {"id":"b2", "type":"VegaLitePlot", "allData": "true", "h":2, "w":2, "spec":vegaSpecs.scatterSpec}
  ],
  body:
  [
    {"id":"v1", "type":"DataTable"},
    {"id":"v2", "type":"ImageGrid", "urlField":"u0", "labelField":"s1"}
  ]
}
// see https://github.com/birm/loadsy/
// REMEMBER TO ADD JSONIFY WHEN SWITCHING FROM DEFAULT
fetch(config_url).then(config=>{
  config = default_config
  let data_url = config.data_url
  var __DM = new DataManager()
  var __DS = new RestDataSource(data_url)
  var BarItems = []
  var BodyItems = []
  for (let x in config.bar){
    let y = config.bar[x]
    let ThisType = VisTypes[y.type] || VisTypes.Sample
    BarItems.push(<ThisType {...y}/>)
  }
  for (let x in config.body){
    let y = config.body[x]
    let ThisType = VisTypes[y.type] || VisTypes.Sample
    BodyItems.push(<ThisType {...y}/>)
  }


  const App = () => {
    return(
      <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">DataScope the Second</span>
      </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-3 viscol">
              {BarItems}
            </div>
            <div className="col col-sm-12 col-lg-9 viscol">
              {BodyItems}
            </div>
          </div>
        </div>

      </div>
    )
  }

  render(<App/>, document.getElementById('root'));
})
