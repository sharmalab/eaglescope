import React, {Component} from "react";
import { Responsive, WidthProvider, GridItem } from "react-grid-layout";

import GridLayout from "react-grid-layout";
import VisGridItem from "./VisGridItem/VisGridItem";
import { getLayoutConfig } from "../../../common/utils";
// component style
import "./VisGridView.css";

// config for view grid and vis compoments
import _CONFIG_ from "../../../../config/vis-config.json";

// enumeration for 
import VisTypeEnum from "../../VisualTools/VisTypeEnum.json";

// import 
const _config = {
  layout: []
};

class VisGridView extends Component {
  constructor(props) {
    super(props);
    this.self = React.createRef();
    this.state = {
      draggableHandle: ".draggable",
      width: 0, // -> cols
      cols: 0,
      config: {
        layout: [], // calculate layout based on view's width and vis charts.
        grid: [..._CONFIG_.UNIT_OF_GRID_VIEW], // a size of grid [width, height] in pixel
        margins: [..._CONFIG_.MARGIN_OF_GRID_VIEW],
        visConfig: [..._CONFIG_.VISUALIZATION_VIEW_CONFIGURATION]
      },
      error: null,
      isLoad: false
    };
  }
  /**
   * Calculate & Update state of new dimensions
   */
  updateViewSize() {
    const rect = this.self.current.getBoundingClientRect();
    const cols = parseInt((rect.width - this.state.config.margins[0] ) / (this.state.config.grid[0]+this.state.config.margins[0]));
    if(cols===this.state.cols) return;
    const gridLayoutWidth =
      cols * this.state.config.grid[0] +
      (cols + 1) * this.state.config.margins[0];
    const updatedLayout = getLayoutConfig(this.state.config.visConfig, cols);
    const updatedState = { ...this.state };
    updatedState.cols = cols;
    updatedState.width = gridLayoutWidth;
    updatedState.config.layout = [...updatedLayout.layout];
    // calculate width and height
    this.setState(updatedState);
  }
  componentDidMount() {
    // TODO loading config


    //
    this.updateViewSize();
    // TODO debouce
    window.addEventListener("resize", this.updateViewSize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewSize.bind(this));
  }
  render() {
    if (this.state.config.layout.length > 0) {
      console.log('view',this.props)
      let __vis = this.state.config.layout.map((item, index) => (
        
        <div key={item.i}>
          <VisGridItem 
            {...item}
            operation={this.state.config.visConfig[index]}
            data={this.props.data}
            filterData={this.props.filterData}
            filters={this.props.filters}
            filterAdded = {this.props.filterAdded}
            filterRemove = {this.props.filterRemove}
          />
        </div>
      ));
      // <VisGridItem key={item.i} {...item}> {item.i}></VisGridItem>

      return (
        <div className="vis-grid-view" ref={this.self}>
          <GridLayout
            cols={this.state.cols}
            rowHeight={this.state.config.grid[1]}
            width={this.state.width}
            margin={this.state.config.margins}
            layout= {this.state.config.layout}
            draggableHandle={this.state.draggableHandle}
          >
            {__vis}
          </GridLayout>
        </div>
      );
    } else {
      return (
        <div className="vis-grid-view" ref={this.self}>
          None VIS config
        </div>
      );
    }
  }
}

export default VisGridView;

//   {controls.map(ctrl => (
//     <BuildControl
//         key={ctrl.label}
//         label={ctrl.label}
//         type={ctrl.type}
//         added={()=>props.ingredientAdded(ctrl.type)}
//         removed={()=>props.ingredientRemoved(ctrl.type)}
//         disabled={props.disabled[ctrl.type]}
//     />))}
