import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressArrowsAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import VisSettings from '../../../../VisSettings/VisSettings';

// css class
import './VisGridItemControl.css';

function VisGridItemControl(props) {
  const [show, setShow] = useState(false);
  let btnFilterRemove;
  if (props.filters.length > 0 && props.filters.find((f) => f.id === props.id)) {
    btnFilterRemove = (
      <Button
        style={{
          background: 'none',
          border: 'none',
        }}
        onClick={() => props.filterRemove(props.id)}
      >
        <FontAwesomeIcon icon="undo-alt" />
      </Button>
    );
  }
  return (
    <div>
      {(props.hover || show) && (
        <div className="vis-grid-item-control">
          {btnFilterRemove}
          <VisSettings id={props.id} show={show} setShow={setShow} setHover={props.setHover} />
          <Button
            style={{
              background: 'none',
              border: 'none',
            }}
            onClick={() => props.toggleFullScreen(props.id, !props.fullScreened)}
          >
            <FontAwesomeIcon icon={props.fullScreened ? faCompressArrowsAlt : faExpandArrowsAlt} />
          </Button>
        </div>
      )}
    </div>
  );
}

export default VisGridItemControl;

VisGridItemControl.propTypes = {
  id: PropTypes.string.isRequired,
  hover: PropTypes.bool.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterRemove: PropTypes.func.isRequired,
  fullScreened: PropTypes.bool.isRequired,
  toggleFullScreen: PropTypes.func.isRequired,
  setHover: PropTypes.func.isRequired,
};
