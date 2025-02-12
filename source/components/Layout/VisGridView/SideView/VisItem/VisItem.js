import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import VisItemContent from './VisItemContent/VisItemContent';
import VisItemHeader from './VisItemHeader/VisItemHeader';
import { DataContext } from '../../../../../contexts/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// css class
import './VisItem.css';

function VisItem(props) {
  const [hover, setHover] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // Manage collapse state

  const onMouseEnterHandle = () => {
    setHover(true);
  };
  const onMouseLeaveHandle = () => {
    setHover(false);
  };

  const toggleCollapse = () => {
    setIsCollapsed(prevState => !prevState); // Toggle collapse state
  };

  const {
    data, filteredData, filters, addFiltersHandler, removeFiltersHandler,
  } = useContext(DataContext);

  useEffect(() => {
    if (props.isCollapsed) setIsCollapsed(true);
  }, [props.isCollapsed]);

  useEffect(() => {
    if (props.fullScreened) setHover(true);
  }, [props.fullScreened]);

  return (
    <div
      className="vis-grid-item"
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
      style={{
        height: isCollapsed ? '25px' : props.height, // Adjust height based on collapsed state
        //transition: 'height 0.3s ease', // Smooth transition for height change
      }}
    >
      <VisItemHeader
        id={props.operation.id}
        title={props.operation.title}
        description={props.operation.description}
        toggleFullScreen={props.toggleFullScreen}
        fullScreened={props.fullScreened}
        hover={hover}
        setHover={setHover}
        filters={filters}
        filterRemove={removeFiltersHandler}
        toggleCollapse={toggleCollapse} // Pass toggleCollapse to header
        isCollapsed={isCollapsed} // Pass isCollapsed state to header
      />
      {/* Render content based on isCollapsed */}
      {isCollapsed ? (
        <div className="collapsed-state">
          <p></p>
        </div>
      ) : (
        props.isResizing ? (
          <div className="place-holder">
            <FontAwesomeIcon icon="chart-area" className="chart-area" />
          </div>
        ) : (
          <VisItemContent
            fields={props.operation.fields}
            chartType={props.operation.chartType}
            data={data}
            filterData={filteredData}
            filters={filters}
            filterAdded={addFiltersHandler}
            filterRemove={removeFiltersHandler}
            id={props.operation.id}
            title={props.operation.title}
            layout={props.layout}
            configProps={props.operation}
            logScale={props.operation.logScale}
          />
        )
      )}
    </div>
  );
}

VisItem.propTypes = {
  operation: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    chartType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fields: PropTypes.oneOfType([
      PropTypes.shape({
        x: PropTypes.string,
        y: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        z: PropTypes.string,
      }),
      PropTypes.array,
    ]).isRequired,
  }).isRequired,

  layout: PropTypes.shape({
    width: PropTypes.number.isRequired,
    currentCols: PropTypes.number.isRequired,
  }),
  fullScreened: PropTypes.bool.isRequired,
  toggleFullScreen: PropTypes.func.isRequired,
  isResizing: PropTypes.bool,  // Ensuring isResizing is also considered
  logScale: PropTypes.bool,
  isCollapsed: PropTypes.bool,
};

VisItem.defaultProps = {
  layout: null,
  isResizing: false, // Default to false
};

export default VisItem;
