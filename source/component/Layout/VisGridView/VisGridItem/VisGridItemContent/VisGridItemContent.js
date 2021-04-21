import React, { PureComponent, Suspense } from "react";
import PropTypes from "prop-types";

// css class
import "./VisGridItemContent.css";

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

const VisGridCard = React.lazy(() =>
  import("../../../../VisualTools/VisGridCard/VisGridCard")
);

export default class VisGridItemContent extends PureComponent {
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
      case "VisGridCard":
        component = <VisGridCard {...this.props} data={this.props.data} filterData={this.props.filterData}
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
