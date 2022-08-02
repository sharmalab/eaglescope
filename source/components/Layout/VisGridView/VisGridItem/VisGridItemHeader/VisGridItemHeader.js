import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import VisGridItemControl from '../VisGridItemControl/VisGridItemControl';
import { ConfigContext } from '../../../../../contexts/ConfigContext';
// css class
import './VisGridItemHeader.css';

function VisGridItemHeader(props) {
  const { config } = useContext(ConfigContext);
  const { THEME_COLOR: color } = config;
  return (
    <div
      className="vis-grid-item-header text-light"
      title={props.description}
      style={{
        backgroundColor: color || '#007bff',
      }}
    >
      <div className="name-header draggable">
        <div className="chartTitle">{props.title}</div>
      </div>

      <VisGridItemControl
        id={props.id}
        title={props.title}
        description={props.description}
        fullScreened={props.fullScreened}
        toggleFullScreen={props.toggleFullScreen}
        hover={props.hover}
        filters={props.filters}
        filterRemove={props.filterRemove}
      />
    </div>
  );
}

export default VisGridItemHeader;

VisGridItemHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hover: PropTypes.bool.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterRemove: PropTypes.func.isRequired,
  fullScreened: PropTypes.bool.isRequired,
  toggleFullScreen: PropTypes.func.isRequired,
};
