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

const App = () => {
  return(
    <div>
      <h1>Built</h1>
      <VisTypes.Sample/>
      <VisTypes.Histogram x="userId"/>
    </div>
  )
}

render(<App/>, document.getElementById('root'));
