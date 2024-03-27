import React, { PureComponent } from 'react';
import {
  AutoSizer, Column, Table, SortDirection,
} from 'react-virtualized';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp, faSort } from '@fortawesome/free-solid-svg-icons';
import arrayMove from 'array-move';
import PropTypes from 'prop-types';
import VisDataTableControl from './VisDataTableControl/VisDataTableControl';
import './VisDataTable.css';

const cellRenderer = (d, f) => {
  let urlElt;
  if (f.link && f.link.url && f.link.field) {
    const urlbase = f.link.url || '';
    urlElt = (
      <a target="_parent" href={urlbase + d.rowData[f.link.field]}>
        {d.cellData}
      </a>
    );
  } else if (f.link && f.link.url) {
    urlElt = (
      <a target="_parent" href={f.link.url}>
        {d.cellData}
      </a>
    );
  } else {
    // urlElt = d.cellData;
    urlElt = Array.isArray(d.cellData) ? d.cellData.join(', ') : d.cellData;
  }
  return (
    <React.Fragment key={f.dataKey}>
      <div className="ReactVirtualized__Table__headerTruncatedText" title={d.cellData}>
        {urlElt}
      </div>
    </React.Fragment>
  );
};

const rowClassName = ({ index }) => {
  if (index < 0) {
    return 'headerRow';
  }
  return index % 2 === 0 ? 'evenRow' : 'oddRow';
};

export default class VisDataTable extends PureComponent {
  constructor(props) {
    super(props);
    const fWidth = 1 / this.props.fields.length;
    const fields = this.props.fields.map((f) => ({ ...f, width: fWidth, isShow: true }));
    this.state = {
      fields,
      width: null,
      sortBy: null,
      sortDirection: null,
    };

    this.autoSizer = React.createRef();
    this.headerRenderer = this.headerRenderer.bind(this);
    this.resizeRow = this.resizeRow.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.onCheckChangedHandler = this.onCheckChangedHandler.bind(this);
    this.onAllCheckHandler = this.onAllCheckHandler.bind(this);
    this.sortHandler = this.sortHandler.bind(this);
    this.getSortData = this.getSortData.bind(this);
  }

  onResize({ width }) {
    this.setState({ width });
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ fields }) => ({
      fields: arrayMove(fields, oldIndex, newIndex),
    }));
  }

  onCheckChangedHandler(e) {
    const { value } = e.target;
    const { checked } = e.target;
    this.setState(({ fields }) => ({
      fields: fields.map((f) => {
        f.isShow = f.dataKey === value ? checked : f.isShow;
        return { ...f };
      }),
    }));
  }

  onAllCheckHandler() {
    this.setState(({ fields }) => ({
      fields: fields.map((f) => {
        f.isShow = true;
        return { ...f };
      }),
    }));
  }

  getSortData() {
    const { data, filterData, filters } = this.props;
    const { sortBy, sortDirection } = this.state;
    const currentData = filters.length > 0 ? filterData : data;
    // filter TODO
    return sortBy && sortDirection
      ? currentData.sort((a, b) => {
        const first = sortDirection === SortDirection.ASC ? a : b;
        const second = sortDirection === SortDirection.ASC ? b : a;
        return first[sortBy] > second[sortBy] ? 1 : -1;
      })
      : currentData;
  }

  resizeRow({ dataKey, deltaX }) {
    const prevFields = this.state.fields;
    const idx = prevFields.findIndex((f) => f.dataKey === dataKey);

    const percentDelta = deltaX / this.state.width;
    prevFields[idx].width += percentDelta;

    if (idx < prevFields.length - 1) {
      prevFields[idx + 1].width = prevFields[idx + 1].width - percentDelta;
    }

    this.setState({ fields: [...prevFields] });
  }

  headerRenderer({
    dataKey, label, sortBy, sortDirection,
  }) {
    return (
      <React.Fragment key={dataKey}>
        <div className="ReactVirtualized__Table__headerTruncatedText" title={label}>
          {label}
        </div>
        {}
        <div>
          {sortBy === dataKey ? (
            <FontAwesomeIcon icon={sortDirection === SortDirection.DESC ? faSortDown : faSortUp} />
          ) : (
            <FontAwesomeIcon icon={faSort} />
          )}
        </div>
        <Draggable
          axis="x"
          defaultClassName="DragHandle"
          defaultClassNameDragging="DragHandleActive"
          onDrag={(event, { deltaX }) => {
            this.resizeRow({ dataKey, deltaX });
          }}
          position={{ x: 0 }}
          zIndex={999}
        >
          <span className="DragHandleIcon">⋮</span>
        </Draggable>
      </React.Fragment>
    );
  }

  sortHandler({ sortBy, sortDirection }) {
    this.setState({ sortBy, sortDirection });
  }

  render() {
    const { fields, sortBy, sortDirection } = this.state;
    const finalData = this.getSortData();

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <VisDataTableControl
          list={fields}
          onSortEnd={this.onSortEnd}
          onCheckChanged={this.onCheckChangedHandler}
          onAllCheck={this.onAllCheckHandler}
        />
        <AutoSizer ref={this.autoSizer} onResize={this.onResize}>
          {({ width, height }) => (
            <Table
              width={width}
              height={height}
              headerHeight={25}
              rowHeight={20}
              rowClassName={rowClassName}
              rowCount={finalData.length}
              rowGetter={({ index }) => finalData[index]}
              sort={this.sortHandler}
              sortBy={sortBy}
              sortDirection={sortDirection}
            >
              {fields
                .map((f) => (
                  <Column
                    key={f.dataKey}
                    cellDataGetter={({ rowData }) => rowData[f.dataKey]}
                    dataKey={f.dataKey}
                    label={f.label}
                    width={width * f.width}
                    headerRenderer={this.headerRenderer}
                    cellRenderer={(d) => cellRenderer(d, f)}
                  />
                ))}
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }
}

VisDataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
