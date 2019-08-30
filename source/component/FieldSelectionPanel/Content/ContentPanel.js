import React, { Component } from "react";
import Item from "./Item";
import Footer from "./Footer";

class ContentPanel extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const items = this.props.itemsExpanded?this.props.items:this.props.items.slice(0,4);
    
    let __content = items.map((item, key) => (
      <Item key={key} name={item.name} sum={item.sum} changed={this.props.changed} checked={item.checked}/>
    ))
    
    if(items.length==0) __content = <span className="tip">No Matching Items</span>
    return (
      <div className="terms-aggregation">
        {__content}
        <Footer
          num={this.props.items.length}
          expanded={this.props.itemsExpanded}
          clicked={this.props.footerClicked}
        />
      </div>
    );
  }
}
export default ContentPanel;
