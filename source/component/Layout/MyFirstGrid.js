import React from "react";
//import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { Responsive, WidthProvider, GridItem } from "react-grid-layout";

// import GridLayout from 'react-grid-layout';

class ChartGridView extends React.Component {
  
  render() {
    // {lg: layout1, md: layout2, ...}
    var layouts = { lg: this.getLayoutsFromSomewhere() };
    return (
      <ResponsiveGridLayout
        draggableHandle=".draggable-handle"
        className="layout"
        isResizable={false}
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div className="view" key="a">
          <div className="draggable-handle">xxxx A</div>
          <div className="view-content">VIEW test 1</div>
        </div>
        <div className="view" key="b">
          <div className="draggable-handle">xxxx B</div>
          <div className="view-content">VIEW test 2</div>
        </div>
        <div className="view" key="c">
          <div className="draggable-handle">xxxx C</div>
          <div className="view-content">VIEW test 3</div>
        </div>
        <div className="view" key="d">
          <div className="draggable-handle">xxxx D</div>
          <div className="view-content">VIEW test 4</div>
        </div>
        <div className="view" key="e">
          <div className="draggable-handle">xxxx E</div>
          <div className="view-content">VIEW test 5</div>
        </div>
        <GridItem />
      </ResponsiveGridLayout>
    );

    // layout is an array of objects, see the demo for more complete usage
    // var layout = [
    //   {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    //   {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    //   {i: 'c', x: 4, y: 0, w: 1, h: 2}
    // ];

    // return (
    //   <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
    //     <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
    //     <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
    //     <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
    //   </GridLayout>
    // )
  }
}

export default ChartGridView;
