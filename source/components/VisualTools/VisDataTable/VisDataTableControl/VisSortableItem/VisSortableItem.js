import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import './VisSortableItem.css';

const VisSortableItem = (props) => (
  <div className="vis-sortable-item ">
    <div className="drag-handle">
      <FontAwesomeIcon icon={faGripLines} />
    </div>
    <div className="truncated-text" title={props.label}>
      {props.label}
    </div>

    <div className="input-box">
      <input
        type="checkbox"
        checked={props.isShow}
        onChange={props.onCheckChanged}
        value={props.dataKey}
      />
    </div>
  </div>
);

export default VisSortableItem;
