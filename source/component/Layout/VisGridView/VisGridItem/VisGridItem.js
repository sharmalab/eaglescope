import React, { PureComponent } from "react";
import VisGridItemContent from "./VisGridItemContent/VisGridItemContent";
import VisGridItemHeader from "./VisGridItemHeader/VisGridItemHeader";

// css class
import "./VisGridItem.css";

export default class VisGridItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hover: false };

    //this.state.name = props.i;
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this);
    this.onMouseLeaveHeadle = this.onMouseLeaveHeadle.bind(this);
  }

  onMouseEnterHandle() {
    this.setState({ hover: true });
  }

  onMouseLeaveHeadle() {
    this.setState({ hover: false });
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  static getDerivedStateFromError(error) {
    return {hasError: true, error: error};
  }

  render() {
    if(this.state.hasError){
      return(<div>ERROR</div>)
    } else {
      return (
        <div
          className={`vis-grid-item bg-light`}
          onMouseEnter={this.onMouseEnterHandle}
          onMouseLeave={this.onMouseLeaveHeadle}
        >
          <VisGridItemHeader
            id={this.props.operation.id}
            title={this.props.operation.title}
            description={this.props.operation.description}
            toggleFullScreen={this.props.toggleFullScreen}
            fullScreened={this.props.operation.fullScreened}
            hover={this.state.hover}
            filters={this.props.filters}
            filterRemove={this.props.filterRemove} />

          <VisGridItemContent
            {...this.props.operation}
            data={this.props.data}
            filterData={this.props.filterData}
            filters={this.props.filters}
            filterAdded={this.props.filterAdded}
            filterRemove={this.props.filterRemove}
            config={this.props.config}
          />
        </div>
      );
    }
  }
}
