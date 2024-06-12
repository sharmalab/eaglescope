import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressArrowsAlt, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { ConfigContext } from '../../../../../contexts/ConfigContext';
import VisSettings from '../../../../VisSettings/VisSettings';

// css class
import './VisGridItemControl.css';

function VisGridItemControl(props) {
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

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', stopPropagation, true);
      document.addEventListener('mousemove', stopPropagation, true);
      document.addEventListener('mouseup', stopPropagation, true);
    } else {
      document.removeEventListener('mousedown', stopPropagation, true);
      document.removeEventListener('mousemove', stopPropagation, true);
      document.removeEventListener('mouseup', stopPropagation, true);
    }
    return () => {
      document.removeEventListener('mousedown', stopPropagation, true);
      document.removeEventListener('mousemove', stopPropagation, true);
      document.removeEventListener('mouseup', stopPropagation, true);
    };
  }, [show]);

  return (
    <div>
      {(props.hover || show) && (
        <div className="vis-grid-item-control">
          {btnFilterRemove}
          <VisSettings
            show={show}
            setShow={setShow}
            setHover={props.setHover}
            chartConfig={config.VISUALIZATION_VIEW_CONFIGURATION.find((f) => f.id === props.id)}
          />
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
