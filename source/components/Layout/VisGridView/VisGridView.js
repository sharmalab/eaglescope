import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import { debounce } from 'lodash';
import GridLayout from 'react-grid-layout';
import PropTypes from 'prop-types';
import VisGridItem from './VisGridItem/VisGridItem';
import { getLayoutConfig } from '../../../common/utils';
import { ConfigContext } from '../../../contexts/ConfigContext';

// component style
import './VisGridView.css';
/**
 * This Component is Responsible for Handling Layout
 * Calculations and Resize Handler
 * @param {Function} fullVisScreenHandler Handler to set
 * @param {Boolean} fullScreened
 */

function VisGridView({ fullVisScreenHandler, fullScreened }) {
  const { config } = useContext(ConfigContext);
  const grid = config.UNIT_OF_GRID_VIEW;
  const margins = config.MARGIN_OF_GRID_VIEW;
  const visConfig = config.VISUALIZATION_VIEW_CONFIGURATION;
  const draggableHandle = config.GRAGGABLE ? '.draggable' : '';
  const isDraggable = config.DRAGGABLE || false;
  const isResizable = config.RESIZABLE || false;

  const [isResizing, SetIsResizing] = useState(false);
  const [resizingItemId, SetResizingItemId] = useState(null);
  const [appLayout, setAppLayout] = useState({
    width: 0,
    currentCols: 0,
    layout: [],
    margin: 0,
    grid,
  });
  const self = useRef();

  const updateViewSize = () => {
    const rect = self.current.getBoundingClientRect();
    const cols = parseInt((rect.width - margins[0]) / (grid[0] + margins[0]), 10);
    if (
      cols === appLayout.currentCols
      && grid[0] === appLayout.grid[0]
      && grid[1] === appLayout.grid[1]
      && margins[0] === appLayout.margins[0]
      && margins[1] === appLayout.margins[1]
    ) return;
    const gridLayoutWidth = cols * grid[0] + (cols + 1) * margins[0];
    const updatedLayout = getLayoutConfig(visConfig, cols, isResizable);

    setAppLayout({
      width: gridLayoutWidth,
      currentCols: cols,
      layout: updatedLayout.layout,
      margins,
      grid,
    });
  };

  const debouncedUpdateViewSize = debounce(updateViewSize, 100);

  const onResizeStartHandle = (layout, oldItem) => {
    SetIsResizing(true);
    SetResizingItemId(oldItem.i);
  };
  const onResizeStopHandle = () => {
    SetIsResizing(false);
    SetResizingItemId(null);
  };
  useEffect(() => {
    updateViewSize();
    window.addEventListener('resize', debouncedUpdateViewSize);
    return () => {
      window.removeEventListener('resize', debouncedUpdateViewSize);
    };
  }, [appLayout.currentCols, config.UNIT_OF_GRID_VIEW, config.UNIT_OF_GRID_VIEW, visConfig]);

  useEffect(() => {
    const rect = self.current.getBoundingClientRect();
    const cols = parseInt((rect.width - margins[0]) / (grid[0] + margins[0]), 10);
    const gridLayoutWidth = cols * grid[0] + (cols + 1) * margins[0];
    const updatedLayout = getLayoutConfig(visConfig, cols, isResizable);

    setAppLayout({
      width: gridLayoutWidth,
      currentCols: cols,
      layout: updatedLayout.layout,
      margins,
      grid,
    });
  }, [visConfig]);
  useEffect(() => {}, [isResizing, resizingItemId]);
  return (
    <div className="vis-grid-view" ref={self}>
      {appLayout.layout.length > 0 && (
        <GridLayout
          cols={appLayout.currentCols}
          rowHeight={grid[1]}
          width={appLayout.width}
          margin={margins}
          layout={appLayout.layout}
          isDraggable={isDraggable}
          isResizable={isResizable}
          draggableHandle={draggableHandle}
          onResizeStart={onResizeStartHandle}
          onResizeStop={onResizeStopHandle}
        >
          {appLayout.layout.map((item) => (
            <div
              key={item.i}
              style={{
                border: config?.HIDE_BORDER
                  ? ''
                  : `1px solid ${config?.THEME_COLOR ? config?.THEME_COLOR : '#007bff'}`,
                borderRadius: config?.BORDER_RADIUS ? `${config.BORDER_RADIUS}px` : '0px',
              }}
            >
              {visConfig.find((vis) => vis.id === item.i) && (
                <VisGridItem
                  isResizing={item.i === resizingItemId && isResizing}
                  layout={appLayout}
                  operation={visConfig.find((vis) => vis.id === item.i)}
                  toggleFullScreen={fullVisScreenHandler}
                  fullScreened={fullScreened}
                />
              )}
            </div>
          ))}
        </GridLayout>
      )}
    </div>
  );
}

export default VisGridView;

VisGridView.propTypes = {
  fullVisScreenHandler: PropTypes.func.isRequired,
  fullScreened: PropTypes.bool.isRequired,
};
