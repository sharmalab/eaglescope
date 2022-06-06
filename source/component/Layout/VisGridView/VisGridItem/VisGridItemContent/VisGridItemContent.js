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

const Histogram = React.lazy(() =>
  import("../../../../VisualTools/Chart/Histogram")
);


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

export default class VisGridItemContent extends PureComponent {
  componentDidCatch(error, errorInfo) {
    console.error("VC", error, errorInfo);
  }

  static getDerivedStateFromError(error) {
    return {hasError: true, error: error};
  }
  constructor(props) {
    super(props);
  }
  render() {
    // switch content
    console.log(this.props.chartType)
    const TagName = VisTypeComponents[this.props.chartType];
    console.log(TagName)
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
      case "Histogram":
        component = <Histogram {...this.props} />;
        break;
      default:
        component = <div>I'm Sorry. There Is No {TagName} Component...</div>;
    }
    if (this.state && this.state.hasError){
      return(<div>ERROR</div>)
    } else {
      console.log("XX", component)
      return (
        <div className="vis-grid-item-content">
          <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
        </div>
      );
    }
  }
}
