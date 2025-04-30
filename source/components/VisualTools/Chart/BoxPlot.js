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
    bottom: 35,
    left: 35,
  };
  console.log('Box Plot', props)
  const { fields } = props;


  // const fullData = transform(props.data, props.fields.x,props.fields.y, props.method, props.fields.isList);
  const self = useRef();
  const scaleRef = useRef();
  const hightRef = useRef();
  const viewerRef = useRef();

  const createXScale = (f, width) => {
    // set the ranges
    const xScale = d3
      .scaleBand()
      .domain(fullData.map((d) => d[f]).flat())
      .range([0, width])
      .padding(0.1);
    return xScale;
  };

  const createYScale = (f, height) => {
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(fullData, (d) => d[f])])
      .range([height, 0]);
    return yScale;
  };

  const drawBar = (selection, data, className = 'og') => {
    const addLabel = (d) => `${d.key}: ${d.value}`;
    const offset = {
      x: 60,
      y: 0,
    };
    const tooltipHandlers = createTooltip(self.current, addLabel, offset);
    const updateBars = selection.selectAll(`rect.${className}`).data(data, (d) => d[fields.x]);

    const enterBars = updateBars.enter().append('rect');
    enterBars
      .attr('class', `${className}`)
      .attr('x', (d) => scaleRef.current.x(d[fields.x]))
      .attr('width', scaleRef.current.x.bandwidth())
      .attr('y', hightRef.current)
      .attr('role', 'graphics-symbol');
    enterBars
      .on('mousemove', tooltipHandlers.mousemove)
      .on('mouseleave', tooltipHandlers.mouseleave)
      .on('click', (currentData) => {
        const selected = enterBars.filter((d) => d === currentData);
        const value = selected.data()[0].key;
        const filter = props?.fields?.isList ? {
          id: props.id,
          title: props.title,
          field: props.fields.x,
          operation: 'has',
          values: value,
        } : {
          id: props.id,
          title: props.title,
          field: props.fields.x,
          operation: 'eq',
          values: value,
        };
        props.filterAdded([filter]);
      });

    updateBars
      .merge(enterBars)
      .transition()
      .duration(1000)
      .attr('y', (d) => scaleRef.current.y(d[fields.y]))
      .attr('height', (d) => hightRef.current - scaleRef.current.y(d[fields.y]));

    // update_bars
    updateBars
      .exit()
      .transition()
      .duration(1000)
      .attr('y', hightRef.current)
      .attr('height', 0)
      .remove();

    return updateBars;
  };


  const drawBoxPlot = (data, width, height, parent, field) => {
    console.log('drawBoxPlot', data)
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
    var q1 = d3.quantile(data_sorted, .25)
    var median = d3.quantile(data_sorted, .5)
    var mean = d3.mean(data)
    var q3 = d3.quantile(data_sorted, .75)
    var interQuantileRange = q3 - q1
    var min = q1 - 1.5 * interQuantileRange
    var max = q3 + 1.5 * interQuantileRange
    console.log(q1, median, q3, min, max)

    // Show the Y scale

    // add the y Axis
    const yScale = d3.scaleLinear().domain([d3.min([min,...data]), d3.max(data)]).range([innerHeight, 0]);
    const yAxis = d3.axisLeft(yScale);
    viewer.append('g').call(yAxis);

    // // a few features for the box
    var center =  (innerWidth)/2

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
      .attr("x", margin.left)
      .attr("y", yScale(q3))
      .attr("height", (yScale(q1) - yScale(q3)))
      .attr("width", innerWidth-margin.left*2)
      .attr("stroke", "black")
      .style("fill", "#4682b4")

    // show mean, median, min and max horizontal lines
    viewer
      .selectAll("toto")
      .data([min, mean, median, max])
      .enter()
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerWidth-margin.left*2)
      .attr("y1", d =>yScale(d))
      .attr("y2", d =>yScale(d))
      .attr("stroke", "black")
      .attr('class', (d, idx)=> idx==2?"dashed":"solid")
      

    // text label
    const textWrapper = viewer.append("g")
    .attr("transform", `translate(${innerWidth / 2}, ${innerHeight + margin.top})`);
    textWrapper.append("text")
    .attr("text-anchor", "middle") // Center the text horizontally
    .text(field) // Replace with your desired text
    .attr("dy", "0.35em"); // Adjust vertical position (baseline)

  }
  useEffect(() => {
    setTimeout(() => {
      d3.select(self.current).selectAll('svg').remove('svg');
      d3.select(self.current).selectAll('div').remove('div');
      const rect = self.current.getBoundingClientRect();

      const svgContainerWidth = 200; //innerHeight * .8;

      const divWidth = svgContainerWidth * fields.length
      const container = d3.select(self.current)
        .append('div')
        .style('width', `${divWidth}px`)
        .style('height', `${rect.height}px`)
        

      // drawBoxPlot(data, svgContainerWidth, rect.height, container)
      fields.forEach((field)=>{
        const data = props.filterData.map(d => d[field]).filter((d)=> !isNaN(d) && typeof d === 'number')
        drawBoxPlot(data, svgContainerWidth, rect.height, container, field)
      })
    }, 100);
  }, [props.layout]);

  useEffect(() => {
    setTimeout(() => {
      d3.select(self.current).selectAll('svg').remove('svg');
      d3.select(self.current).selectAll('div').remove('div');
      const rect = self.current.getBoundingClientRect();

      const svgContainerWidth = 200;

      const divWidth = svgContainerWidth * fields.length
      const container = d3.select(self.current)
        .append('div')
        .style('width', `${divWidth}px`)
        .style('height', `${rect.height}px`)
      let currentData = props.data;

      if (props.filters.length > 0) {
        currentData = props.filterData;
      }
      fields.forEach((field)=>{
        const data = currentData.map(d => d[field]).filter((d)=> !isNaN(d) && typeof d === 'number')
        drawBoxPlot(data, svgContainerWidth, rect.height, container, field)
      })
    }, 100);
  }, [props.filters, props.filterData, props.layout]);

  return <div id={props.id} ref={self} role="figure" className="box-plot-wrapper" style={{ width: '100%', height: '100%' }}></div>;
}

export default BoxPlot;
