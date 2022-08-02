import React from 'react';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressArrowsAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

// css class
import './VisGridItemControl.css';

function VisGridItemControl(props) {
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
      {props.hover && (
        <div className="vis-grid-item-control">
          {btnFilterRemove}

          <Button
            style={{
              background: 'none',
              border: 'none',
            }}
          >
            <FontAwesomeIcon icon="info-circle" />
          </Button>
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
};
