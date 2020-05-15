import React, { Component } from "react";
import VisGridItemContent from "./VisGridItemContent/VisGridItemContent";
import VisGridItemHeader from "./VisGridItemHeader/VisGridItemHeader";
import VisGridItemControl from "./VisGridItemControl/VisGridItemControl";
import PropTypes from "prop-types";

// css class
import "./VisGridItem.css";

export default class VisGridItem extends Component {
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

  render() {
    return (
      <div
        className="vis-grid-item"
        onMouseEnter={this.onMouseEnterHandle}
        onMouseLeave={this.onMouseLeaveHeadle}
      >
        <VisGridItemHeader id={this.props.operation.id} title={this.props.operation.title} description={this.props.operation.description} hover={this.state.hover} filters={this.props.filters} filterRemove={this.props.filterRemove}/>
        <VisGridItemControl id={this.props.operation.id} title={this.props.operation.title} description={this.props.operation.description} hover={this.state.hover} filters={this.props.filters} filterRemove={this.props.filterRemove}/>
        <VisGridItemContent
          {...this.props.operation}
          data={this.props.data}
          filterData={this.props.filterData}
          filters={this.props.filters}
          filterAdded={this.props.filterAdded}
          filterRemove={this.props.filterRemove}
        />
      </div>
    );
  }
}
