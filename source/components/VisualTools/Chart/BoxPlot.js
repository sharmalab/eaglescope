import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import createTooltip from '../../partials/tooltip';

const transformList = (data, f) => {
  const map = new Map();
  data.forEach((d) => {
    const items = d[f];
    if (Array.isArray(items)) {
      items.forEach((i) => {
        if (!map.has(i)) { map.set(i, 0); }
        map.set(i, map.get(i) + 1);
      });
    } else {
      if (!map.has(items)) { map.set(items, 0); }
      map.set(items, map.get(items) + 1);
    }
  });
  return Array.from(map).map((d) => ({ key: d[0], value: d[1] }));
};

const transform = (data, field, value, method = 'mean', isList = false) => {
  if (isList) {
    return transformList(data, field);
  }

  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  function collSort(a, b) {
    return collator.compare(a, b);
  }

  // calculate mean, sd, TODO
  return value ?
    d3.nest().key((d) => d[field])
      .sortKeys(collSort)
      .rollup((d) => d3[method](d, v => v[value]))
      .entries(data)
    :
    d3.nest().key((d) => d[field])
      .sortKeys(collSort)
      .rollup((d) => d.length)
      .entries(data);
};

const wrap = (text, width) => {
  text.each(function updateBars() {
    const currentText = d3.select(this);
    const words = currentText.text().split(/\s+/).reverse();
    let word;
    let line = [];
    let lineNumber = 0;
    const lineHeight = 1.1; // ems
    const y = currentText.attr('y');
    const dy = parseFloat(currentText.attr('dy'));
    let tspan = currentText
      .text(null)
      .append('tspan')
      .attr('x', 0)
      .attr('y', y)
      .attr('dy', `${dy}em`);
    word = words.pop();
    while (word) {
      line.push(word);
      tspan.text(line.join(' '));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(' '));
        line = [word];
        tspan = currentText
          .append('tspan')
          .attr('x', 0)
          .attr('y', y)
          .attr('dy', `${++lineNumber * lineHeight + dy}em`)
          .text(word);
      }
      word = words.pop();
    }
  });
};

function BoxPlot(props) {
  const margin = {
    top: 10,
    right: 10,
    bottom: 25,
    left: 40,
  };
  const { fields } = props;


  // const fullData = transform(props.data, props.fields.x,props.fields.y, props.method, props.fields.isList);
  const self = useRef();
  const scaleRef = useRef();
  const hightRef = useRef();
  const viewerRef = useRef();




  const drawBoxPlot = (data, width, height, parent, field) => {
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const svg = parent.append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('role', 'img');

    // create viewer
    const viewer = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    // Compute summary statistics used for the box:
    var data_sorted = data.sort(d3.ascending)
    // var min_point = data_sorted[0]
    // var max_point = data_sorted[data_sorted.length - 1]
    var q1 = d3.quantile(data_sorted, .25)
    var median = d3.quantile(data_sorted, .5)
    var mean = d3.mean(data)
    var q3 = d3.quantile(data_sorted, .75)
    var interQuantileRange = q3 - q1
    var min = q1 - 1.5 * interQuantileRange
    var max = q3 + 1.5 * interQuantileRange
    // var value_range = [d3.min([min, min_point]),d3.max([max, max_point])]
    var value_range = [d3.min([min, ...data]), d3.max([max, ...data])]

    // console.log(min, max, min_point, max_point)
    // Show the Y scale

    // add the y Axis
    const yScale = d3.scaleLinear().domain(value_range).range([innerHeight, 0]);
    const yAxis = d3.axisLeft(yScale);
    viewer.append('g').call(yAxis);

    // // a few features for the box
    const margin_left = 10
    var center = innerWidth / 2 + margin_left

    // Show the main vertical line
    viewer.append("line")
      .attr("x1", center)
      .attr("x2", center)
      .attr("y1", yScale(min))
      .attr("y2", yScale(max))
      .attr("stroke", "black")


    // Show the box

    viewer
      .append("rect")
      .attr("x", margin_left)
      .attr("y", yScale(q3))
      .attr("height", (yScale(q1) - yScale(q3)))
      .attr("width", innerWidth)
      .attr("stroke", "black")
      .style("fill", "#4682b4")

    // show mean, median, min and max horizontal lines
    viewer
      .selectAll("toto")
      .data([min, mean, median, max])
      .enter()
      .append("line")
      .attr("x1", margin_left)
      .attr("x2", innerWidth + margin_left)
      .attr("y1", d => yScale(d))
      .attr("y2", d => yScale(d))
      .attr("stroke", "black")
      .attr('class', (d, idx) => idx == 2 ? "dashed" : "solid")

    // max and min point - outliers
    // viewer
    //   .selectAll("point")
    //   .data([min_point, max_point])
    //   .enter()
    //   .append("circle")
    //   .attr("cx", center)
    //   .attr("cy", d => yScale(d))
    //   .attr("r", 4)
    //   .style("fill", "white")
    //   .attr("stroke", "black")

    // text label
    const textWrapper = viewer.append("g")
      .attr("transform", `translate(${innerWidth / 2}, ${innerHeight + margin.top})`);
    textWrapper.append("text")
      .attr("text-anchor", "middle") // Center the text horizontally
      .text(field) // Replace with your desired text
      .attr("dy", "0.35em"); // Adjust vertical position (baseline)

  }
  const svgContainerWidth = 80;
  useEffect(() => {
    setTimeout(() => {
      d3.select(self.current).selectAll('svg').remove('svg');
      d3.select(self.current).selectAll('div').remove('div');
      const rect = self.current.getBoundingClientRect();
      const divWidth = svgContainerWidth * fields.length
      const container = d3.select(self.current)
        .append('div')
        .style('width', `${divWidth}px`)
        .style('height', `${rect.height}px`)


      // drawBoxPlot(data, svgContainerWidth, rect.height, container)
      fields.forEach((field) => {
        const data = props.filterData.map(d => d[field]).filter((d) => !isNaN(d) && typeof d === 'number')
        drawBoxPlot(data, svgContainerWidth, rect.height, container, field)
      })
    }, 100);
  }, [props.layout]);

  useEffect(() => {
    setTimeout(() => {
      d3.select(self.current).selectAll('svg').remove('svg');
      d3.select(self.current).selectAll('div').remove('div');
      const rect = self.current.getBoundingClientRect();
      const divWidth = svgContainerWidth * fields.length
      const container = d3.select(self.current)
        .append('div')
        .style('width', `${divWidth}px`)
        .style('height', `${rect.height}px`)
      let currentData = props.data;

      if (props.filters.length > 0) {
        currentData = props.filterData;
      }
      fields.forEach((field) => {
        const data = currentData.map(d => d[field]).filter((d) => !isNaN(d) && typeof d === 'number')
        drawBoxPlot(data, svgContainerWidth, rect.height, container, field)
      })
    }, 100);
  }, [props.filters, props.filterData, props.layout]);

  return <div id={props.id} ref={self} role="figure" className="box-plot-wrapper" style={{ width: '100%', height: '100%' }}></div>;
}

export default BoxPlot;
