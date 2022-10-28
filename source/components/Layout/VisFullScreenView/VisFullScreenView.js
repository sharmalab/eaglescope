import React from 'react';
import VisGridItem from '../VisGridView/VisGridItem/VisGridItem';
import './VisFullScreenView.css';

function VisFullScreenView(props) {
  const navHeight = 65;
  const viewHeight = window.innerHeight - navHeight - 65;

  return (
    <div className="full-screen" style={{ height: viewHeight }}>
      <div className="item react-grid-item border border-primary react-draggable cssTransforms">
        <VisGridItem {...props} />
      </div>
    </div>
  );
}

export default VisFullScreenView;
