import React, { Component } from "react";
import PropTypes from "prop-types";

// css class
import "./VisGridItemHeader.css";
const style = {

};
export default class VisGridItemHeader extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }

  render() {

      return (
      <div className="vis-grid-item-header" title={this.props.description}>
        <div className="name-header draggable" >
          <span className="chartTitle" >{this.props.title}</span>
        </div>
      </div>
    );
  }
}
