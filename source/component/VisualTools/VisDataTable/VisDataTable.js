import React, { PureComponent } from 'react'
import { AutoSizer, Column, Table, SortDirection } from 'react-virtualized';
import Draggable from "react-draggable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp, faSort } from '@fortawesome/free-solid-svg-icons';
import VisDataTableControl from './VisDataTableControl/VisDataTableControl';
import arrayMove from 'array-move';
import './VisDataTable.css';
export default class VisDataTable extends PureComponent {
  constructor(props) {
    super(props);
    const fWidth = 1 / this.props.fields.length;
    const fields = this.props.fields.map(f => { return { ...f, width: fWidth, isShow: true } })
    this.state = {
      fields: fields,
      width: null,
      sortBy :null,
      sortDirection: null
    }

    this.autoSizer = React.createRef();
    this.headerRenderer = this.headerRenderer.bind(this)
    this.cellRenderer = this.cellRenderer.bind(this)
    this.resizeRow = this.resizeRow.bind(this)
    this.onResize = this.onResize.bind(this)
    this.onSortEnd = this.onSortEnd.bind(this)
    this.onCheckChangedHandler = this.onCheckChangedHandler.bind(this)
    this.onAllCheckHandler = this.onAllCheckHandler.bind(this)
    this.sortHandler = this.sortHandler.bind(this);
    this.getSortData = this.getSortData.bind(this);
  }
  sortHandler({ sortBy, sortDirection }) {
    this.setState({ sortBy, sortDirection });
  }
  _rowClassName({ index }) {
    if (index < 0) {
      return 'headerRow';
    } else {
      return index % 2 === 0 ? 'evenRow' : 'oddRow';
    }
  }
  cellRenderer(d, f) {
    let urlElt;
    if(f.link&&f.link.url&&f.link.field){
      let urlbase = f.link.url || "";
      urlElt = <a target="_parent" href={urlbase + d.rowData[f.link.field]}>{d.cellData}</a>
    }else if(f.link&&f.link.url){
      urlElt = <a target="_parent" href={f.link.url}>{d.cellData}</a>
    } else{
      urlElt = d.cellData
    }
    return (<React.Fragment key={f.dataKey}>

      <div className="ReactVirtualized__Table__headerTruncatedText" title={d.cellData}>
        {urlElt}
      </div>
    </React.Fragment>)
  }

  headerRenderer({
    columnData,
    dataKey,
    disableSort,
    label,
    sortBy,
    sortDirection
  }) {
    const filteredFields = this.state.fields.filter(f => f.isShow);

    return (
      <React.Fragment key={dataKey}>
        <div className="ReactVirtualized__Table__headerTruncatedText" title={label}>{label}</div>
        {}
        <div>{sortBy==dataKey?(<FontAwesomeIcon icon={sortDirection==SortDirection.DESC?faSortDown:faSortUp} />):<FontAwesomeIcon icon={faSort} />}</div>
        <Draggable
          axis="x"
          defaultClassName="DragHandle"
          defaultClassNameDragging="DragHandleActive"
          onDrag={(event, { deltaX }) => { this.resizeRow({ dataKey, deltaX }) }}
          position={{ x: 0 }}
          zIndex={999}
        ><span className="DragHandleIcon">⋮</span>
        </Draggable>

      </React.Fragment>
    );
  }

  resizeRow({ dataKey, deltaX }) {
    const prevFields = this.state.fields;
    const idx = prevFields.findIndex(f => f.dataKey == dataKey);

    const percentDelta = deltaX / this.state.width;
    prevFields[idx].width = prevFields[idx].width + percentDelta;

    if (idx < prevFields.length - 1) {
      prevFields[idx + 1].width = prevFields[idx + 1].width - percentDelta;
    }

    this.setState({ field: [...prevFields] })
  }

  onResize({ height, width }) {
    this.setState({ width: width })
  }
  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ fields }) => ({
      fields: arrayMove(fields, oldIndex, newIndex),
    }));
  }
  onCheckChangedHandler(e) {

    const value = e.target.value;
    const checked = e.target.checked;
    this.setState(({ fields }) => ({
      fields: fields.map(f => {
        f.isShow = f.dataKey == value ? checked : f.isShow;
        return { ...f }
      }),
    }));
  }
  onAllCheckHandler() {
    this.setState(({ fields }) => ({
      fields: fields.map(f => {
        f.isShow = true;
        return { ...f }
      }),
    }));
  }

  getSortData(){
    const { data, filterData, filters } = this.props;
    const { sortBy, sortDirection   } = this.state;
    const __data = filters.length > 0 ? filterData : data;
    return sortBy&&sortDirection?__data.sort((a,b)=>{
      const first = sortDirection==SortDirection.ASC?a:b;
      const second = sortDirection==SortDirection.ASC?b:a;
      return first[sortBy]>second[sortBy]?1:-1
    }):__data;
  }

  render() {
    const { fields, sortBy, sortDirection } = this.state;
    const final_data = this.getSortData();

    return <div style={{ width: "100%", height: "100%" }}>
      <VisDataTableControl list={fields} onSortEnd={this.onSortEnd} onCheckChanged={this.onCheckChangedHandler} onAllCheck={this.onAllCheckHandler} />
      <AutoSizer
        ref={this.autoSizer}
        onResize={this.onResize}
      >
        {({ width, height }) => (
          <Table
            width={width}
            height={height}
            headerHeight={25}
            rowHeight={20}
            rowClassName={this._rowClassName}
            rowCount={final_data.length}
            rowGetter={({ index }) => final_data[index]}
            sort={this.sortHandler}
            sortBy={sortBy}
            sortDirection={sortDirection}
          >
            {fields.filter(f => f.isShow).map((f, id) => <Column
              key={id}
              cellDataGetter={({ rowData }) => rowData[f.dataKey]}
              dataKey={f.dataKey}
              label={f.label}
              width={width * f.width}
              headerRenderer={this.headerRenderer}
              cellRenderer={(d) => { return this.cellRenderer(d, f) }}

            />)}
          </Table>
        )}
      </AutoSizer>
    </div>
  }
}
