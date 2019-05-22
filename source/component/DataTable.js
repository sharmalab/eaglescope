import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import { MDBDataTable } from 'mdbreact';

// should only have to worry about rendering
class DataTable extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.table_data = {}
  }

  render() {
    if(this.state.ready){
      this.table_data = {}
      this.table_data.columns = []
      let columns = this.props.columns || []
      for (let i = 0; i<this.props.columns.length; i++){
        this.table_data.columns.push({label: this.props.columns[i], field: this.props.columns[i]})
      }
      this.table_data.rows = this.state.filteredData
      return(<MDBDataTable striped   bordered hover data={this.table_data}/>)
    } else {
      return <p> waiting...</p>
    }

  }
}

export default DataTable
