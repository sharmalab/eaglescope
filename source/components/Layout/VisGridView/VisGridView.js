import React, {
  useState, useRef, useEffect, useContext, useMemo,
} from 'react';
import { debounce } from 'lodash';
import GridLayout from 'react-grid-layout';
import PropTypes from 'prop-types';
import VisGridItem from './VisGridItem/VisGridItem';
import { getLayoutConfig } from '../../../common/utils';
import { ConfigContext } from '../../../contexts/ConfigContext';
import './VisGridView.css';

function VisGridView({ fullVisScreenHandler, fullScreened, designation }) {
  const { config } = useContext(ConfigContext);
  const grid = config.UNIT_OF_GRID_VIEW;
  const margins = config.MARGIN_OF_GRID_VIEW;
  const AllVisConfig = config.VISUALIZATION_VIEW_CONFIGURATION;
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

  const resolveGridSize = (gridValue, containerSize) => {
    console.log("resolveGridSize", gridValue, containerSize, (parseFloat(gridValue) / 100) * containerSize)
    return typeof gridValue === 'string' && gridValue.endsWith('%')
      ? (parseFloat(gridValue) / 100) * containerSize
      : gridValue;
  };
  
  const visConfig = useMemo(() => {
    console.log("designation", designation)
    if (designation == "*"){
      return AllVisConfig // for * don't filter, just show all
    } else {
      return AllVisConfig.filter((x) => x.designation === designation || (!x.designation && designation === "default"));
    }
  }, [AllVisConfig, designation]);

  console.log("grid", grid)
  const updateViewSize = () => {
    const rect = self.current.getBoundingClientRect();

    const containerWidth = rect.width;

    const containerHeight = typeof grid[1] === 'string' && grid[1].endsWith('%')
    ? window.innerHeight
    : rect.height;
  
    const gridWidth = resolveGridSize(grid[0], containerWidth);
    const gridHeight = resolveGridSize(grid[1], containerHeight);

    console.log(gridWidth, gridHeight)
    const cols = parseInt((rect.width - margins[0]) / (gridWidth + margins[0]), 10);
  
    if (
      cols === appLayout.currentCols &&
      gridWidth === appLayout.grid[0] &&
      gridHeight === appLayout.grid[1] &&
      margins[0] === appLayout.margins[0] &&
      margins[1] === appLayout.margins[1]
    ) return;
  
    const gridLayoutWidth = cols * gridWidth + (cols + 1) * margins[0];
    const updatedLayout = getLayoutConfig(visConfig, cols, isResizable);
  
    setAppLayout({
      width: gridLayoutWidth,
      currentCols: cols,
      layout: updatedLayout.layout,
      margins,
      grid: [gridWidth, gridHeight],
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
  }, [appLayout.currentCols, config.UNIT_OF_GRID_VIEW, visConfig]);

  useEffect(() => {
    const rect = self.current.getBoundingClientRect();
  
    const gridWidth = resolveGridSize(grid[0], rect.width);
    const gridHeight = resolveGridSize(grid[1], rect.height);
  
    const cols = parseInt((rect.width - margins[0]) / (gridWidth + margins[0]), 10);
    const gridLayoutWidth = cols * gridWidth + (cols + 1) * margins[0];
    const updatedLayout = getLayoutConfig(visConfig, cols, isResizable);
  
    setAppLayout({
      width: gridLayoutWidth,
      currentCols: cols,
      layout: updatedLayout.layout,
      margins,
      grid: [gridWidth, gridHeight],
    });
  }, [visConfig]);
  
  useEffect(() => {}, [isResizing, resizingItemId]);
  return (
    <div className="vis-grid-view" ref={self}>
      {appLayout.layout.length > 0 && (
        <GridLayout
          cols={appLayout.currentCols}
          rowHeight={appLayout.grid[1]}
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
  designation: PropTypes.string,
};

VisGridView.defaultProps = {
  designation: "*",
};

