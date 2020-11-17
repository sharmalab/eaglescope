import React, { Component, Suspense } from "react";
// import PropTypes from "prop-types";

// css class
import "./VisGridItemContent.css";

// config for view grid and vis compoments
import _CONFIG_ from "../../../../../../config/vis-config.json";

import VisTypeComponents from "../../../../VisualTools/VisTypeComponents.js";

const PieChart = React.lazy(() =>
  import("../../../../VisualTools/Chart/PieChart")
);
const BarChart = React.lazy(() =>
  import("../../../../VisualTools/Chart/BarChart")
);
const KMCurve = React.lazy(() =>
  import("../../../../VisualTools/Chart/KMCurve")
);
const HorizontalBarChart = React.lazy(() =>
  import("../../../../VisualTools/Chart/HorizontalBarChart")
);
const ScatterChart = React.lazy(() =>
  import("../../../../VisualTools/Chart/ScatterChart")
);

const VisDataTable = React.lazy(() =>
  import("../../../../VisualTools/VisDataTable/VisDataTable")
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
  }
  render() {

    // switch content
    const TagName = VisTypeComponents[this.props.chartType];
    let component;
    switch (TagName) {
      case "PieChart":
        component = <PieChart {...this.props} data={this.props.data} filterData={this.props.filterData}
        filters={this.props.filters} filterAdded={this.props.filterAdded}/>;
        break;
      case "ScatterChart":
        component = <ScatterChart {...this.props} data={this.props.data} filterData={this.props.filterData}
        filters={this.props.filters} filterAdded={this.props.filterAdded}/>;
        break;
      case "BarChart":
        component = <BarChart {...this.props} data={this.props.data} filterData={this.props.filterData}
        filters={this.props.filters} filterAdded={this.props.filterAdded}/>;
        break;
      case "KMCurve":
          component = <KMCurve {...this.props} data={this.props.data} filterData={this.props.filterData}
          filters={this.props.filters} filterAdded={this.props.filterAdded}/>;
          break;
      case "HorizontalBarChart":
        component = <HorizontalBarChart {...this.props} data={this.props.data} filterData={this.props.filterData}
        filters={this.props.filters} filterAdded={this.props.filterAdded}/>;
        break;
      case "VisDataTable":
        component = <VisDataTable {...this.props} data={this.props.data} filterData={this.props.filterData}
        filters={this.props.filters} filterAdded={this.props.filterAdded}/>;
        break;
      case "VegaLitePlot":
        component = <VegaLitePlot {...this.props} data={this.props.data} filterData={this.props.filterData}
        filters={this.props.filters} filterAdded={this.props.filterAdded}/>;
        break;
      default:
        component = <div>I'm Sorry. There Is No {TagName} Component...</div>;
    }

    return (
      <div className="vis-grid-item-content">
        <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
      </div>
    );
  }
}
