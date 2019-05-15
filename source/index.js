import React from "react";
import VisSelect from "./component/VisSelect.js"
import SampleVisualization from "./component/SampleVisualization.js"
import { render } from "react-dom";

const App = () => {
  return(
    <div>
      <h1>Built</h1>
      <SampleVisualization/>
    </div>
  )
}

render(<App/>, document.getElementById('root'));
