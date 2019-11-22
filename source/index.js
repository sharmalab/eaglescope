import React from "react";
import DataManager from "./DataManager.js";
import RestDataSource from "./xfRestDataSource.js";
import VisTypes from "./component/VisTypes.js";
import vegaSpecs from "./vegaSpecs.js";
import ResetButton from "./component/ResetButton.js";
import { render } from "react-dom";

import Config from "../data/config.json";

import VisGridView from "./component/Layout/VisGridView/VisGridView.js";

import {
  GridLayout,
  Responsive,
  WidthProvider,
  GridItem
} from "react-grid-layout";

// import GridLayout from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

//style

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import "./style/main.scss";

var __DM = new DataManager();
var __DS = new RestDataSource("http://localhost:3000/data");

const App = () => {
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
            window.location.href = "./treemap/treemaps.html?referrer=detail";
          }}
        >
          <span className="fa fa-long-arrow-alt-left"></span> Back to Search
          Portal
        </button>
        <ResetButton id="rb1" />
        <VisTypes.Sample id="count1" />
      </nav>

      <VisGridView />
    </div>
  );
};
render(<App />, document.getElementById("root"));
