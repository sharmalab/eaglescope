import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import ImageGridItem from './ImageGridItem.js';

// should only have to worry about rendering
class ImageGrid extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.state.currentData = {}
    this.state.page = 0;
    this.state.perPage = props.perPage || 10
    this.width = this.props.w * 100 || 100
    this.height = this.props.h * 100 || 100
    this.style = {width: this.width, height: this.height}
  }

  render() {
    var images = []
    let thispage = this.state.filteredData.slice(this.state.page*this.state.perPage,(this.state.page+1)*this.state.perPage)
    for (let i in thispage){
      let v= thispage[i]
      let im_url = v[this.props.urlField] || "https://ppaas.herokuapp.com/partyparrot"
      let im_label = v[this.props.labelField] || ""
      if(im_url){
        images.push(<ImageGridItem url={im_url} label={im_label} id={this.id+"-im-"+i}/>)
      }
    }
    if(this.state.ready){
      return <div id={this.id} style={this.style}>{images}</div>
    } else {
      return <p> <div id={this.id} style={this.style}>waiting...</div></p>
    }

  }
}

export default ImageGrid
