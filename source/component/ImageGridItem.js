import React from 'react';

// should only have to worry about rendering
class ImageGridItem extends React.Component {
  constructor(props, ctx) {
    super(props,ctx)
    this.width = this.props.w * 10 || 10
    this.height = this.props.h * 10 || 10
    this.style = {width: this.width, height: this.height}
    // this.props.img is the url
    // this.props.label is the label text
  }

  render() {
    return <div id={this.props.id}><img src={this.props.url} style={this.style}/><span>{this.props.label}</span></div>
  }
}

export default ImageGridItem
