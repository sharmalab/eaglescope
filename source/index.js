import React from "react";
import DataManager from "./DataManager.js";
import RestDataSource from "./xfRestDataSource.js";
import VisTypes from "./component/VisTypes.js";
import vegaSpecs from "./vegaSpecs.js";
import ResetButton from "./component/ResetButton.js";
import { render } from "react-dom";


import MyFirstGrid from "./component/Layout/MyFirstGrid.js";
import {
  GridLayout,
  Responsive,
  WidthProvider,
  GridItem
} from "react-grid-layout";

// import GridLayout from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

//style
import "./style/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

const config_url = "http://localhost:3000/config";
var default_config = {
  data_url: "http://localhost:8181/?t=5&s=2&u=3&i=10&f=3&c=2&co=5&l=2000",
  grid: [
    {
      id: "g2",
      type: "VegaLitePlot",
      allData: "true",
      h: 1,
      spec: vegaSpecs.scatterSpec
    }
  ],
  detail: [
    { id: "d1", type: "DataTable" },
    { id: "d2", type: "ImageGrid", urlField: "u0", labelField: "s1" }
  ]
};

fetch(config_url)
  .then(x => x.json())
  .then(config => {
    //config = default_config
    let data_url = config.data_url;
    var __DM = new DataManager();
    var __DS = new RestDataSource(data_url);
    var GridItems = [];
    var DetailItems = [];
    for (let x in config.grid) {
      let y = config.grid[x];
      console.log(y)
      let ThisType = VisTypes[y.type] || VisTypes.Sample;
      GridItems.push(
        <div className="view" key={y.key}>
          <div className="draggable-handle">{y.key +" --- "+ y.type}</div>
          <div className="view-content"><ThisType {...y} /></div>
        </div>
      );
    }
    
    for (let x in config.detail) {
      let y = config.detail[x];
      let ThisType = VisTypes[y.type] || VisTypes.Sample;
      DetailItems.push(<ThisType {...y} />);
    }

    function getLayoutsFromSomewhere() {
      return [
        { i: "g0", x: 0, y: 0, w: 4, h: 3 },
        { i: "g1", x: 4, y: 0, w: 4, h: 3 },
        { i: "g2", x: 8, y: 0, w: 4, h: 3 },
        { i: "g3", x: 0, y: 3, w: 4, h: 3 },
        { i: "g4", x: 4, y: 3, w: 4, h: 3 },
        { i: "g5", x: 8, y: 3, w: 4, h: 3 }
      ];
    }

    function _resize() {
      console.log("test");
    }
    const App = () => {
      var layouts = { lg: getLayoutsFromSomewhere() };
      return (
        <div>
          <nav className="navbar blue-bar">
            <span className="navbar-brand mb-0 h1 whitetext">
              TCIA Clinical Data Explorer
            </span>
            <button
              id="gogo"
              className="clear-btn"
              title="Exploration"
              onClick={() => {
                window.location.href =
                  "./treemap/treemaps.html?referrer=detail";
              }}
            >
              <span className="fa fa-long-arrow-alt-left"></span> Back to Search
              Portal
            </button>
            <ResetButton id="rb1" />
            <VisTypes.Sample id="count1" />
          </nav>
          <ResponsiveGridLayout
        draggableHandle=".draggable-handle"
        className="layout"
        isResizable={false}
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {GridItems}
      </ResponsiveGridLayout>          
        </div>
      );
    };

    render(<App />, document.getElementById("root"));
  })
  .catch(console.log);



//   <div>
//   <nav className="navbar blue-bar">
//     <span className="navbar-brand mb-0 h1 whitetext">
//       TCIA Clinical Data Explorer
//     </span>
//     <button
//       id="gogo"
//       className="clear-btn"
//       title="Exploration"
//       onClick={() => {
//         window.location.href =
//           "./treemap/treemaps.html?referrer=detail";
//       }}
//     >
//       <span className="fa fa-long-arrow-alt-left"></span> Back to Search
//       Portal
//     </button>
//     <ResetButton id="rb1" />
//     <VisTypes.Sample id="count1" />
//   </nav>
//   <div className="container-fluid">
//     <div className="">
//       <div className="grid">{GridItems}</div>
//       <div className="body nodisplay">{DetailItems}</div>
//     </div>
//   </div>
// </div>  