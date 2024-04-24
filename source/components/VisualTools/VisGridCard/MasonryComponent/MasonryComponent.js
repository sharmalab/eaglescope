import React, { Component } from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from 'react-virtualized';
import './MasonryComponent.css';

export default class MasonryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.height,
      width: this.props.width,
      itemsWithSizes: this.props.itemsWithSizes,
      columnWidth: this.props.columnWidth || 200,
      defaultHeight: this.props.defaultHeight || 150,
      defaultWidth: this.props.defaultWidth || 200,
    };

    this.cellMeasurerCache = new CellMeasurerCache({
      defaultHeight: this.props.defaultHeight,
      defaultWidth: this.props.defaultWidth,
      fixedWidth: true,
    });
    this.cellPositionerConfig = {
      cellMeasurerCache: this.cellMeasurerCache,
      columnCount: 4,
      columnWidth: this.props.columnWidth,
      spacer: 10,
    };
    this.cellPositioner = createMasonryCellPositioner(this.cellPositionerConfig);
    this.cellRenderer = this.cellRenderer.bind(this);
  }

  cellRenderer({
    index, key, parent, style,
  }) {
    const {
      itemsWithSizes, columnWidth, defaultWidth, defaultHeight, fields,
    } = this.props;
    const { item, size } = itemsWithSizes[index];

    const height = columnWidth * (size.height / size.width) || defaultHeight;
    if (style.top !== undefined && Number.isInteger(style.top)) style.top += 10;
    if (style.left !== undefined && Number.isInteger(style.left)) style.left += 10;
    return (
      <CellMeasurer
        cache={this.cellMeasurerCache}
        index={index}
        key={item[fields.key]}
        parent={parent}
      >
        <div style={style} className="img-wrap">
          {item[fields.image] && (
          <img
            className="image"
            src={item[fields.image]}
            alt={item[fields.title]}
            style={{
              height,
              width: columnWidth,
            }}
          />
          )}
          <div className="text-wrap"><div className="text-content">{item[fields.title]}</div></div>
        </div>
      </CellMeasurer>
    );
  }

  render() {
    const {
      height, width, itemsWithSizes, defaultHeight, defaultWidth,
    } = this.props;

    return (
      <Masonry
        cellCount={itemsWithSizes.length}
        cellMeasurerCache={this.cellMeasurerCache}
        cellPositioner={this.cellPositioner}
        cellRenderer={this.cellRenderer}
        height={height}
        width={width}
      />
    );
  }
}
