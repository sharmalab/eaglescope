import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import VisGridItemControl from "../VisGridItemControl/VisGridItemControl";
// css class
import "./VisGridItemHeader.css";
const style = {

};
export default class VisGridItemHeader extends PureComponent {
  constructor(props) {
    super(props);
    
  }

  render() {
    
      return (
      <div className="vis-grid-item-header bg-primary text-light" title={this.props.description}>
        <div className="name-header draggable" >
          <div className="chartTitle" >{this.props.title}</div>
        </div>
        
        <VisGridItemControl
          id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          fullScreened={this.props.fullScreened}
          toggleFullScreen={this.props.toggleFullScreen}
          hover={this.props.hover}
          filters={this.props.filters}
          filterRemove={this.props.filterRemove}/>
      </div>
    );
  }
}
