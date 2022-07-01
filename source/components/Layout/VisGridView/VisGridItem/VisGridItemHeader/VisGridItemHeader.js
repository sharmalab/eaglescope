import React from 'react';
import PropTypes from 'prop-types';
import VisGridItemControl from '../VisGridItemControl/VisGridItemControl';
// css class
import './VisGridItemHeader.css';

function VisGridItemHeader(props) {
  return (
    <div className="vis-grid-item-header bg-primary text-light" title={props.description}>
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
