import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import VisItemControl from '../VisItemControl/VisItemControl';
import { ConfigContext } from '../../../../../../contexts/ConfigContext';
// css class
import './VisItemHeader.css';

function VisItemHeader(props) {
  const { config } = useContext(ConfigContext);
  const { THEME_COLOR: color } = config;

  return (
    <div
      className="vis-grid-item-header text-light"
      title={props.description}
      style={{
        backgroundColor: color || '#007bff',
        borderRadius: config?.BORDER_RADIUS ? `${config.BORDER_RADIUS}px` : '0px',
      }}
    >
      <div className='name-header'>
        <div className="chartTitle">{props.title}</div>
      </div>

      <VisItemControl
        id={props.id}
        title={props.title}
        description={props.description}
        fullScreened={props.fullScreened}
        toggleFullScreen={props.toggleFullScreen}
        hover={props.hover}
        setHover={props.setHover}
        filters={props.filters}
        filterRemove={props.filterRemove}
        toggleCollapse={props.toggleCollapse}
        isCollapsed={props.isCollapsed}
      />

    </div>
  );
}

export default VisItemHeader;

VisItemHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hover: PropTypes.bool.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterRemove: PropTypes.func.isRequired,
  fullScreened: PropTypes.bool.isRequired,
  toggleFullScreen: PropTypes.func.isRequired,
  setHover: PropTypes.func.isRequired,
  toggleCollapse: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};
