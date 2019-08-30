import React from 'react';

// should only have to worry about rendering
class Placeholder extends  React.Component {
  constructor(props, ctx) {
    super(props, ctx);
    this.id = props.id || '_' + Math.random().toString(36).substr(2, 9);
  }
  render() {
    return <div id={this.id}></div>

  }
}

export default DetailButton
