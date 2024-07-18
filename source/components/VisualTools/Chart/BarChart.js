import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
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

const transform = (data, field, isList = false) => {
  if (isList) {
    return transformList(data, field);
  }
  return d3.nest().key((d) => d[field])
    .sortKeys(d3.ascending)
    .rollup((v) => v.length)
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

function BarChart(props) {
  const margin = {
    top: 10,
    right: 10,
    bottom: 35,
    left: 35,
  };

  const fields = { x: 'key', y: 'value' };
  const fullData = transform(props.data, props.fields.x, props.fields.isList);
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

  useEffect(() => {
    setTimeout(() => {
      d3.select(self.current).selectAll('svg').remove('svg');
      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;
      hightRef.current = innerHeight;

      // create svg
      const svg = d3
        .select(self.current)
        .append('svg')
        .attr('width', rect.width)
        .attr('height', rect.height)
        .attr('role', 'img');
      // create viewer
      viewerRef.current = svg
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
      const xScale = createXScale(fields.x, innerWidth);
      const yScale = createYScale(fields.y, innerHeight);
      scaleRef.current = { x: xScale, y: yScale };

      const xAxis = d3.axisBottom(xScale);
      viewerRef.current
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis)
        .selectAll('.tick text')
        .call(wrap, xScale.bandwidth());

      // add the y Axis
      const yAxis = d3.axisLeft(yScale).tickSize(-innerWidth);
      viewerRef.current.append('g').call(yAxis);

      drawBar(viewerRef.current, fullData, 'og');
    }, 100);
  }, [props.layout]);

  useEffect(() => {
    setTimeout(() => {
      let data = [];
      if (props.filters.length > 0) {
        data = transform(props.filterData, props.fields.x, props.fields.isList);
      } else {
        data = fullData;
      }
      drawBar(viewerRef.current, data, 'ft');
    }, 100);
  }, [props.filters, props.filterData, props.layout]);

  return <div id={props.id} ref={self} role="figure" style={{ width: '100%', height: '100%' }} />;
}

export default BarChart;

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.shape({ x: PropTypes.string.isRequired, isList: PropTypes.bool }).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterAdded: PropTypes.func.isRequired,
  layout: PropTypes.shape({
    width: PropTypes.number.isRequired,
    currentCols: PropTypes.number.isRequired,
  }).isRequired,
};
