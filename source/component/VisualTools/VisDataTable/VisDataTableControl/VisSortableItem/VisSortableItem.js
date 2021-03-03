import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import {
    sortableElement,
    sortableHandle,
  } from 'react-sortable-hoc';
import './VisSortableItem.css';

const DragHandle = sortableHandle(() => <div className="drag-handle"><FontAwesomeIcon icon={faGripLines} /></div>);

export const VisSortableItem = sortableElement((props) => (
  <div className="vis-sortable-item ">
    <DragHandle />
    <div className="truncated-text" title={props.label} >{props.label}</div>

    <div className="input-box"><input type="checkbox" checked={props.isShow} onChange={props.onCheckChanged} value={props.dataKey} /></div>
    
  </div>
));

