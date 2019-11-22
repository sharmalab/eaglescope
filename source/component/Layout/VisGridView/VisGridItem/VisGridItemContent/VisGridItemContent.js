import React, { Component, Suspense } from "react";
// import PropTypes from "prop-types";

// css class
import "./VisGridItemContent.css";

// config for view grid and vis compoments
import _CONFIG_ from "../../../../../../config/vis-config.json";

import VisTypeComponents from "../../../../VisualTools/VisTypeComponents.js";

const PieChart = React.lazy(() =>
  import("../../../../VisualTools/Chart/BarChart")
);
const BarChart = React.lazy(() =>
  import("../../../../VisualTools/Chart/PieChart")
);
const Table = React.lazy(() =>
  import("../../../../VisualTools/Table/Table")
);
const VegaLitePlot = React.lazy(() =>
  import("../../../../VegaLitePlot")
);
//import BarChart from '../../../../VisualTools/Chart/BarChart';
//import PieChart from '../../../../VisualTools/Chart/PieChart';
//import Table from '../../../../VisualTools/Table/Table';

const _style = {
  display: "flex",
  flexGrow: 1,
  margin: "auto",
  alignItems: "center"
};

const _style1 = {
  display: "flex",
  visibility: "visible"
};

export default class VisGridItemContent extends Component {
  constructor(props) {
    super(props);
    //console.log("VisGridItemContent", props, VisTypeComponents,this.props.chartType);
  }
  render() {

    // switch content
    const TagName = VisTypeComponents[this.props.chartType];
    console.log(TagName);
    let component;
    switch (TagName) {
      case "PieChart":
        component = <PieChart {...this.props} />;
        break;
      case "BarChart":
        component = <BarChart {...this.props} />;
        break;
      case "Table":
        component = <Table {...this.props} />;
        break;
      case "VegaLitePlot":
        component = <VegaLitePlot {...this.props} />;
        break;
      default:
        component = <div>No {TagName} Component...</div>;
    }

    return (
      <div className="vis-grid-item-content">
        <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
      </div>
    );
  }
}
