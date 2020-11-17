import React, { Component, Suspense } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTimes } from '@fortawesome/fontawesome-free-solid'

// import PropTypes from "prop-types";


// css class
import "./VisGridItemControl.css";

export default class VisGridItemControl extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let btnFilterRemove;
    if(this.props.filters.length > 0&&this.props.filters.find(f=>f.id==this.props.id)) 
      btnFilterRemove = <Button size="sm" variant="info" onClick={()=>this.props.filterRemove(this.props.id)}><FontAwesomeIcon icon='undo-alt' size='sm' /></Button> 
    //if(this.props.hover) btnGroup = <ButtonGroup>{btnFilterRemove}<Button variant="secondary">X</Button></ButtonGroup>
    if(!this.props.hover) return null;
    return (
      <div className="vis-grid-item-control">
        <ButtonGroup >
          {btnFilterRemove}
          <Button size='sm'><FontAwesomeIcon icon='info-circle' size='sm' /></Button>
          <Button size='sm'><FontAwesomeIcon icon='times' size='sm'/></Button>
        </ButtonGroup>
      </div>
    );
  }
}
