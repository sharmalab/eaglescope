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
  const draggableHandle = '.draggable';

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

    const updatedLayout = getLayoutConfig(visConfig, cols);

    setAppLayout({
      width: gridLayoutWidth,
      currentCols: cols,
      layout: updatedLayout.layout,
      margins,
      grid,
    });
  };

  const debouncedUpdateViewSize = debounce(updateViewSize, 100);

  useEffect(() => {
    // console.log('kaak');
    // if (!appLayout.currentCols) updateViewSize();
    updateViewSize();
    window.addEventListener('resize', debouncedUpdateViewSize);
    return () => {
      window.removeEventListener('resize', debouncedUpdateViewSize);
    };
  }, [appLayout.currentCols, config.UNIT_OF_GRID_VIEW, config.UNIT_OF_GRID_VIEW]);

  return (
    <div className="vis-grid-view" ref={self}>
      {appLayout.layout.length > 0 && (
        <GridLayout
          cols={appLayout.currentCols}
          rowHeight={grid[1]}
          width={appLayout.width}
          margin={margins}
          layout={appLayout.layout}
          draggableHandle={draggableHandle}
        >
          {appLayout.layout.map((item, index) => (
            <div
              key={item.i}
              style={{
                border: config?.HIDE_BORDER
                  ? ''
                  : `1px solid ${config?.THEME_COLOR ? config?.THEME_COLOR : '#007bff'}`,
              }}
            >
              <VisGridItem
                layout={appLayout}
                operation={visConfig[index]}
                toggleFullScreen={fullVisScreenHandler}
                fullScreened={fullScreened}
              />
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
