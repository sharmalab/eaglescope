import React, { Component } from 'react'
import {AutoSizer, Column, Table} from 'react-virtualized';
import './VisDataTable.css';
export default class VisDataTable extends Component {
  _rowClassName({index}) {
    if (index < 0) {
      return 'headerRow';
    } else {
      return index % 2 === 0 ? 'evenRow' : 'oddRow';
    }
  }  
  
  render() {
        const {data, fields, filterData, filters} = this.props;
        const final_data = filters.length>0?filterData:data;

        return <div style={{ width: "100%", height: "100%" }}>
          <AutoSizer>
            {({width, height}) => (
              <Table
                width={width}
                height={height}
                headerHeight={25}
                rowHeight={20}
                rowClassName={this._rowClassName}
                rowCount={final_data.length}
                rowGetter={({index}) => final_data[index]}>
                {fields.map((f, id)=><Column
                  key={id} dataKey={f.dataKey}
                  label={f.label}
                  width={width*f.width}
                />)}
              </Table>
            )}
          </AutoSizer>
          </div>
    }
}
