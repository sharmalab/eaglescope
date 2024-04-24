import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VisGridItemContent from './VisGridItemContent/VisGridItemContent';
import VisGridItemHeader from './VisGridItemHeader/VisGridItemHeader';
import { DataContext } from '../../../../contexts/DataContext';
// css class
import './VisGridItem.css';

function VisGridItem(props) {
  const [hover, setHover] = useState(false);
  const onMouseEnterHandle = () => {
    setHover(true);
  };
  const onMouseLeaveHandle = () => {
    setHover(false);
  };
  const {
    data, filteredData, filters, addFiltersHandler, removeFiltersHandler,
  } = useContext(DataContext);

  useEffect(() => {
    if (props.fullScreened) setHover(true);
  }, [props.fullScreened]);
  useEffect(() => {}, [props.isResizing]);
  return (
    <div
      className="vis-grid-item"
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}

    >
      <VisGridItemHeader
        id={props.operation.id}
        title={props.operation.title}
        description={props.operation.description}
        toggleFullScreen={props.toggleFullScreen}
        fullScreened={props.fullScreened}
        hover={hover}
        setHover={setHover}
        filters={filters}
        filterRemove={removeFiltersHandler}
      />

      {props.isResizing ? (
        <div className="place-holder">
          <FontAwesomeIcon icon="chart-area" className="chart-area" />
        </div>
      ) : (
        <VisGridItemContent
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
        />
      )}
    </div>
  );
}

export default VisGridItem;

VisGridItem.propTypes = {
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
};

VisGridItem.defaultProps = {
  layout: null,
};
