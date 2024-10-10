import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import VisGridView from './VisGridView';
import { ConfigContext } from '../../../contexts/ConfigContext';
import './VisGridSplitter.css';

const VisGridSplitter = ({ layout, size, fullVisScreenHandler, fullScreened }) => {
  const { config } = useContext(ConfigContext);

  const renderSingleView = () => (
    <div className="vis-grid-splitter single">
      <VisGridView fullVisScreenHandler={fullVisScreenHandler} designation="*" fullScreened={fullScreened} />
    </div>
  );

  const renderLeftRightSplit = () => (
    <div className="vis-grid-splitter split-horizontal">
      <div className="left-column" style={{ width: size }}>
        <VisGridView fullVisScreenHandler={fullVisScreenHandler} designation="left" fullScreened={fullScreened} />
      </div>
      <div className="right-column">
        <VisGridView fullVisScreenHandler={fullVisScreenHandler} designation="default" fullScreened={fullScreened} />
      </div>
    </div>
  );

  const renderTopBottomSplit = () => (
    <div className="vis-grid-splitter split-vertical">
      <div className="top-row" style={{ height: size }}>
        <VisGridView fullVisScreenHandler={fullVisScreenHandler} designation="top" fullScreened={fullScreened} />
      </div>
      <div className="bottom-row">
        <VisGridView fullVisScreenHandler={fullVisScreenHandler} designation="default" fullScreened={fullScreened} />
      </div>
    </div>
  );

  switch (layout) {
    case 'left':
    case 'right':
      return renderLeftRightSplit();
    case 'top':
      return renderTopBottomSplit();
    case 'default':
    default:
      return renderSingleView();
  }
};

VisGridSplitter.propTypes = {
  layout: PropTypes.oneOf(['default', 'left', 'right', 'top']).isRequired,
  size: PropTypes.string.isRequired, // Size should include units, e.g., '300px'
  fullVisScreenHandler: PropTypes.func.isRequired,
  fullScreened: PropTypes.bool.isRequired,
};

export default VisGridSplitter;