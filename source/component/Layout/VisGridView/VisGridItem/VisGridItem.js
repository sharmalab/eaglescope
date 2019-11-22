import React, { Component } from "react";
import VisGridItemContent from "./VisGridItemContent/VisGridItemContent";
import VisGridItemHeader from "./VisGridItemHeader/VisGridItemHeader";
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
        <VisGridItemHeader title={this.props.operation.title} hover={this.state.hover} />
        <VisGridItemContent
          {...this.props.operation}
        />
      </div>
    );
  }
}
