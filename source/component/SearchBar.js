import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import { MDBDataTable } from 'mdbreact';

// should only have to worry about rendering
class SearchBar extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.table_data = {}
    this.width = this.props.w * 100 || 100
    this.height = this.props.h * 100 || 100
    this.style = {width: this.width, height: this.height}
    this.field = this.props.field || "__ALL"
    this.field_text = "Search"
    if (this.props.field){
      this.field_text = this.props.field
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e){
    if (e.target && e.target.value){
      var new_val = e.target.value
      this.setState(x=>{x.value = new_val})
      let new_filter = {}
      new_filter[this.field] = {"regex":new_val}
      this.filterIn(new_filter)
    } else {
      this.setState(x=>{x.value = ""})
      let new_filter = {}
      new_filter[this.field] = {"regex":""}
      this.filterIn(new_filter)
    }
  }

  render() {
    if(this.state.ready){
      return(<div id={this.id} key={this.id} style={this.style}>
        <span>{this.field_text}:</span> <input type="text" value={this.state.value} id={this.id} onChange={this.handleSearch}></input>
        </div>)
    } else {
      return <div id={this.id} key={this.id} className="vis-loading"><p> waiting...</p></div>
    }

  }
}

export default SearchBar
