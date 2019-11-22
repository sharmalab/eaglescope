import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import ImageGridItem from './ImageGridItem.js';

// should only have to worry about rendering
class ImageGrid extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.onPageButton = this.onPageButton.bind(this)
    this.state.currentData = {}
    this.state.page = 0;
    this.state.perPage = props.perPage || 10
    this.width = this.props.w * 100 || 100
    this.height = this.props.h * 100 || 100
    this.imSize = this.props.imSize || 4
    this.style = {width: this.width, height: this.height}
  }

  onPageButton(e){
    
    if(e.target && e.target.innerText){
      var next_page = parseInt(e.target.innerText)
      this.setState((prevState, props) => {
        prevState.page = next_page
      })
      this.forceUpdate()
    }

  }


  render() {
    var images = []
    let thispage = this.state.filteredData.slice(this.state.page*this.state.perPage,(this.state.page+1)*this.state.perPage)
    for (let i in thispage){
      let v= thispage[i]
      let im_url = v[this.props.urlField] || "https://ppaas.herokuapp.com/partyparrot"
      let im_label = v[this.props.labelField] || ""
      if(im_url){
        images.push(<ImageGridItem url={im_url} label={im_label} id={this.id+"-im-"+i} key={this.id+"-im-"+i} w={this.imSize} h={this.imSize}/>)
      }
    }

    var pageBtns = []
    // min page
    let _minp=Math.max(this.state.page-5,0)
    let _maxp=Math.min(this.state.page+5,this.state.filteredData.length/this.state.perPage)
    for (let j=_minp; j<_maxp; j++){
      if(j==this.state.page){
            pageBtns.push(<li className="page-item" key={this.id+"-pg-"+j} id={this.id+"-pg-"+j}> <a className="page-link" value={j} onClick={this.onPageButton}><b>{j}</b></a></li>)
      }else{
            pageBtns.push(<li className="page-item" key={this.id+"-pg-"+j} id={this.id+"-pg-"+j}> <a className="page-link" value={j} onClick={this.onPageButton}>{j}</a></li>)
      }

    }
    if(this.state.ready){
      return <div id={this.id} key={this.id} style={this.style}>{images}<ul className="pagination" id={this.id+"-pages"}>{pageBtns}</ul></div>
    } else {
      return <div id={this.id} key={this.id} className="vis-loading" style={this.style}><p> waiting...</p></div>
    }

  }
}

export default ImageGrid
