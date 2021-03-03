import React, { PureComponent, Suspense } from "react";
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressArrowsAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
// import PropTypes from "prop-types";


// css class
import "./VisGridItemControl.css";

export default class VisGridItemControl extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    let btnFilterRemove;
    if(this.props.filters.length > 0&&this.props.filters.find(f=>f.id==this.props.id)) 
      btnFilterRemove = <Button  onClick={()=>this.props.filterRemove(this.props.id)}><FontAwesomeIcon icon='undo-alt'/></Button> 
    //if(this.props.hover) btnGroup = <ButtonGroup>{btnFilterRemove}<Button variant="secondary">X</Button></ButtonGroup>
    if(!this.props.hover) return null;
    return (
      <div className="vis-grid-item-control">
       
          {btnFilterRemove}
          
          <Button ><FontAwesomeIcon icon='info-circle'/></Button>
          <Button
            onClick={()=>this.props.toggleFullScreen(this.props.id, !this.props.fullScreened)}>
              <FontAwesomeIcon
                icon={this.props.fullScreened?faCompressArrowsAlt:faExpandArrowsAlt}
                />
          </Button>
      </div>
    );
  }
}
