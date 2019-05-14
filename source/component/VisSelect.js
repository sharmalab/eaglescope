import React
import VisTypes from ./VisTypes.js

// if we want a user to select their visualization

class VisSelect extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.height = props.h || props.height || 1
    this.width = props.w || props.width || 1
    this.state = {selected: null};
    this.selectVis = this.selectVis.bind(this);
  }
  selectVis(selection){
    this.setState(x=>{x.selection=selection});
    Vistypes[this.state.selection]  || 'errorVis'
    this.vis =
  }
  render() {
    if (this.state.selection){
      const SelectedVis = this.vis
      return <SelectedVis h="{this.height}" w="{this.width}"/>
    } else {
      // todo make interactive
      return <p>{JSON.stringify(VisTypes.keys())}</p>;
    }

  }
}

export default VisSelect
