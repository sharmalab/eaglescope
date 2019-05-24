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
    console.log(e.target, e.target.value, e.target.innerText)
    console.log(this.state.page)
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
    for (let j=0; j<this.state.filteredData.length/this.state.perPage; j++){
      if(j==this.state.page){
            pageBtns.push(<span key={this.id+"-pg-"+j} id={this.id+"-pg-"+j} value={j} onClick={this.onPageButton}><b> {j} </b></span> )
      }else{
            pageBtns.push(<span key={this.id+"-pg-"+j} id={this.id+"-pg-"+j} value={j} onClick={this.onPageButton}> {j} </span>)
      }

    }
    if(this.state.ready){
      return <div id={this.id} style={this.style}>{images}<div id={this.id+"-pages"}>{pageBtns}</div></div>
    } else {
      return <div id={this.id} style={this.style}><p> waiting...</p></div>
    }

  }
}

export default ImageGrid
