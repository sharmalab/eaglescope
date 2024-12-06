import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressArrowsAlt, faExpandArrowsAlt, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { ConfigContext } from '../../../../../../contexts/ConfigContext';
import VisSettings from '../../../../../VisSettings/VisSettings';

// css class
import './VisItemControl.css';
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons/faUpRightAndDownLeftFromCenter';

function VisItemControl(props) {
  const { config } = useContext(ConfigContext);
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
      {(props.hover || show || true) && (
        <div className="vis-grid-item-control">
          {btnFilterRemove}
          <Button
            style={{
              background: 'none',
              border: 'none',
            }}
            aria-label={props.isCollapsed ? 'Expand' : 'Collapse'}
            onClick={props.toggleCollapse}
          >
            <FontAwesomeIcon icon={props.isCollapsed ? faUpRightAndDownLeftFromCenter : faSquareMinus} />
          </Button>
        </div>
      )}
    </div>
  );
}

export default VisItemControl;

VisItemControl.propTypes = {
  id: PropTypes.string.isRequired,
  hover: PropTypes.bool.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterRemove: PropTypes.func.isRequired,
  fullScreened: PropTypes.bool.isRequired,
  toggleFullScreen: PropTypes.func.isRequired,
  setHover: PropTypes.func.isRequired,
};
