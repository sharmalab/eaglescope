import React, { Component } from 'react'
import {AutoSizer, Column, Table} from 'react-virtualized';
import Draggable from "react-draggable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faGripLinesVertical, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import VisDataTableControl from './VisDataTableControl/VisDataTableControl';
import arrayMove from 'array-move';
import './VisDataTable.css';
export default class VisDataTable extends Component {
  constructor(props) {
    super(props);
    const fWidth = 1/this.props.fields.length;
    const fields = this.props.fields.map(f=>{return {...f,width:fWidth,isShow:true}})

    this.state = {
      fields: fields,
      width:null,
      isCtrlShow:false
    }
    this.autoSizer = React.createRef();
    this.headerRenderer = this.headerRenderer.bind(this)
    this.cellRenderer = this.cellRenderer.bind(this)
    this.resizeRow = this.resizeRow.bind(this)
    this.onResize = this.onResize.bind(this)
    this.onSortEnd = this.onSortEnd.bind(this)
    this.onCheckChangedHandler = this.onCheckChangedHandler.bind(this)
    this.onAllCheckHandler = this.onAllCheckHandler.bind(this)
  }
  _rowClassName({index}) {
    if (index < 0) {
      return 'headerRow';
    } else {
      return index % 2 === 0 ? 'evenRow' : 'oddRow';
    }
  }
  cellRenderer(d, f){
    return (<React.Fragment key={f.dataKey}>
      <OverlayTrigger
         placement="bottom"
         delay={{ show: 500, hide: 500 }}
         overlay={<Tooltip>{d.cellData}</Tooltip>}
       >
        <div className="ReactVirtualized__Table__headerTruncatedText">
          {f.link?<a href={f.link.url+d.rowData[f.link.field]}>{d.cellData}</a>:d.cellData}
        </div>
       </OverlayTrigger>
       
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
    const filteredFields = this.state.fields.filter(f=>f.isShow);
   
    return (
      <React.Fragment key={dataKey}>
         <OverlayTrigger
            placement="top-start"
            delay={{ show: 500, hide: 500 }}
            overlay={<Tooltip>{label}</Tooltip>}
          >
            <div className="ReactVirtualized__Table__headerTruncatedText">
              {label}
            </div>
          </OverlayTrigger>
        <Draggable
          axis="x"
          defaultClassName="DragHandle"
          defaultClassNameDragging="DragHandleActive"
          onDrag={(event, { deltaX }) =>{
            this.resizeRow({
              dataKey,
              deltaX
            })}
          }
          position={{ x: 0 }}
          zIndex={999}
        ><span className="DragHandleIcon">⋮</span>
        </Draggable>
          
      </React.Fragment>
    );
  }


  resizeRow({ dataKey, deltaX }){
    const prevFields = this.state.fields;
    const idx = prevFields.findIndex(f=>f.dataKey==dataKey);
    
    const percentDelta = deltaX / this.state.width;
    prevFields[idx].width = prevFields[idx].width + percentDelta;
    
    if(idx<prevFields.length-1){
      prevFields[idx+1].width =prevFields[idx+1].width - percentDelta;
    }
    
    this.setState({field:[...prevFields]})
  }
  componentDidMount() {
    console.log(this.autoSizer)
  }

  onResize({height, width}){
    this.setState({width:width})
  }
  onSortEnd({oldIndex, newIndex}){
    this.setState(({fields}) => ({
      fields: arrayMove(fields, oldIndex, newIndex),
    }));
  }
  onCheckChangedHandler(e){
    
    const value = e.target.value; 
    const checked = e.target.checked;
    this.setState(({fields}) => ({
      fields: fields.map(f=>{
        f.isShow = f.dataKey == value?checked:f.isShow;
        return {...f}
      }),
    }));
    // <VisDataTableControl list={fields} onSortEnd={this.onSortEnd} />
  }
  onAllCheckHandler() {
    console.log('onAllCheckHandler')
    this.setState(({fields})=>({
      fields: fields.map(f=>{
        f.isShow = true;
        return {...f}
      }),
    }));
  }
  render() {
        const {data, filterData, filters} = this.props;
        const fields = this.state.fields;
        const final_data = filters.length>0?filterData:data;

        return <div  style={{ width: "100%", height: "100%" }}>
          <VisDataTableControl list={fields} onSortEnd={this.onSortEnd} onCheckChanged={this.onCheckChangedHandler} onAllCheck={this.onAllCheckHandler}/>
          <AutoSizer 
            ref={this.autoSizer}
            onResize={this.onResize}
          >
            {({width, height}) => (
              <Table
                width={width}
                height={height}
                headerHeight={25}
                rowHeight={20}
                rowClassName={this._rowClassName}
                rowCount={final_data.length}
                rowGetter={({index}) => final_data[index]}>
                {fields.filter(f=>f.isShow).map((f, id)=><Column
                  key={id}
                  dataKey={f.dataKey}
                  label={f.label}
                  width={width*f.width}
                  headerRenderer={this.headerRenderer}
                  cellRenderer={(d)=>{return this.cellRenderer(d,f)}}
                  
                />)}
              </Table>
            )}
          </AutoSizer>
          </div>
    }
}
