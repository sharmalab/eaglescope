import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { useDrag } from 'react-dnd';

import './VisSortableItem.css';

function DragHandle() {
  const [{ isDragging }, drag] = useDrag({
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="drag-handle" ref={drag}>
      <FontAwesomeIcon icon={faGripLines} style={{ opacity: isDragging ? 0.4 : 1 }} />
    </div>
  );
}

function VisSortableItem(props) {
  return (
    <div className="vis-sortable-item">
      <DragHandle />
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
}

export default VisSortableItem;
