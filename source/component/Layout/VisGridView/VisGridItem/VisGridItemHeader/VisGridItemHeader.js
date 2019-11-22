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
      let btnGroup;
      if(this.props.hover) btnGroup = <div style={{position:"absolute",top:0,right:0,}}>X</div>;
    return (
      <div className="vis-grid-item-header">
        <div className="name-header draggable">
          <span className="chartTitle">{this.props.title}</span>
          {btnGroup}
        </div>
      </div>
    );
  }
}
