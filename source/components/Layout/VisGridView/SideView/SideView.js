import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import VisItem from './VisItem/VisItem';
import { getLayoutConfig } from '../../../../common/utils';
import { ConfigContext } from '../../../../contexts/ConfigContext';
import './SideView.css';

function SideView({ fullVisScreenHandler, fullScreened, designation }) {
  const { config } = useContext(ConfigContext);
  const grid = config.UNIT_OF_GRID_VIEW;
  const margins = config.MARGIN_OF_GRID_VIEW;
  const AllVisConfig = config.VISUALIZATION_VIEW_CONFIGURATION;
  const isDraggable = config.DRAGGABLE || false;
  const isResizable = config.RESIZABLE || false;

  const [isResizing, setIsResizing] = useState(false);
  const [resizingItemId, setResizingItemId] = useState(null);
  const [appLayout, setAppLayout] = useState({
    width: 0,
    layout: [],
    grid,
  });
  const self = useRef();

  const visConfig = useMemo(() => {
    if (designation === "*") {
      return AllVisConfig; // For '*' don't filter, just show all
    } else {
      return AllVisConfig.filter(
        (x) => x.designation === designation || (!x.designation && designation === "default")
      );
    }
  }, [AllVisConfig, designation]);

  const updateViewSize = () => {
    const rect = self.current.getBoundingClientRect();
    const updatedLayout = getLayoutConfig(visConfig, 1, isResizable); // We don't need to calculate columns for vertical stack

    setAppLayout({
      width: rect.width,
      layout: updatedLayout.layout,
      grid,
    });
  };

  const debouncedUpdateViewSize = debounce(updateViewSize, 100);

  const onResizeStartHandle = (layout, oldItem) => {
    setIsResizing(true);
    setResizingItemId(oldItem.i);
  };

  const onResizeStopHandle = () => {
    setIsResizing(false);
    setResizingItemId(null);
  };

  useEffect(() => {
    updateViewSize();
    window.addEventListener('resize', debouncedUpdateViewSize);
    return () => {
      window.removeEventListener('resize', debouncedUpdateViewSize);
    };
  }, [config.UNIT_OF_GRID_VIEW, visConfig]);

  useEffect(() => {}, [isResizing, resizingItemId]);

  return (
    <div className="side-view" ref={self}>
      <div className="vertical-stack-container" style={{ width: '100%' }}>
        {visConfig.map((item, index) => (
          <div
            key={item.id}
            style={{
              marginBottom: margins[1], // Add margin between items
              border: config?.HIDE_BORDER
                ? ''
                : `1px solid ${config?.THEME_COLOR ? config?.THEME_COLOR : '#007bff'}`,
              borderRadius: config?.BORDER_RADIUS ? `${config.BORDER_RADIUS}px` : '0px',
            }}
          >
            <VisItem
              height={item.size[1] * config.UNIT_OF_GRID_VIEW[1]}
              isResizing={item.id === resizingItemId && isResizing}
              layout={appLayout}
              operation={item}
              toggleFullScreen={fullVisScreenHandler}
              fullScreened={fullScreened}
              isCollapsed={1} // only first is expanded at first
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideView;

SideView.propTypes = {
  fullVisScreenHandler: PropTypes.func.isRequired,
  fullScreened: PropTypes.bool.isRequired,
  designation: PropTypes.string,
};

SideView.defaultProps = {
  designation: "*",
};
