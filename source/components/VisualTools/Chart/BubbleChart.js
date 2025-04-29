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
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  function collSort(a, b) {
    return collator.compare(a, b);
  }
  return d3.nest().key((d) => d[field])
    .sortKeys(collSort)
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


const format = d3.format(",d");
const names = d => d.split(/(?=[A-Z][a-z])|\s+/g);
function BubbleChart(props) {
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
  const heightRef = useRef();
  const widthRef = useRef();
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

  const drawBubble = (selection, data, className = 'og') => {


    var bubble = d3.pack().size([widthRef.current, heightRef.current]).padding(0);
    
    var nodes = d3.hierarchy({ children: data }).sum(d => d.value)
      .sort((a, b) => b.value - a.value);

    // var  = d3.min([widthRef.current, heightRef.current])
    var bubble_data = bubble(nodes).descendants();
    var no_root_bubble = bubble_data.filter(d => d.parent);
    var max_val = d3.max(no_root_bubble, function (d) { return d.r; });
    var min_val = d3.min(no_root_bubble, function (d) { return d.r; });

    var color_scale = d3.scaleLinear().domain([min_val, max_val]).range(d3.schemeCategory10);
    // Create a categorical color scale.
    const color = d3.scaleOrdinal(d3.schemeTableau10);
    var color_scale_num = d3.scaleLinear().domain([min_val, max_val]).range([0, 9]);
    var font_scale = d3.scaleLinear().domain([min_val, max_val]).range([8, 20]);
    
    
        // create a tooltip
        const addLabel = (d) => `<div>${d.data.key}</div><div>${d.data.value}</div>` 
        // Percentage: ${d3.format('.0%')(d.data.value / sum)}`;
        const tooltipHandlers = createTooltip(self.current, addLabel, null, true);
    
    
    
    var bubbles = selection.selectAll(".bubble").data(no_root_bubble)
      .enter()
      .append("g")
      .attr("class", "bubble")
      .attr("transform", d => "translate(" + d.x + "," + d.y + ")");


    // Add a title.
    // bubbles.append("title")
    // .text(d => `${d.data.key}\n${format(d.data.value)}`);

    bubbles.append("circle")
      .attr("r", d => d.r)
      .style("fill", d => d3.schemeTableau10[Math.round(color_scale_num(d.r))])
      .attr("fill-opacity", 0.8)
      .on('mousemove', tooltipHandlers.mousemove)
      .on('mouseleave', tooltipHandlers.mouseleave);
    function trimText(text, threshold) {
        if (text.length <= threshold) return text;
        return text.substr(0, threshold).concat("...");
    }
    // cate name
    bubbles.append("text")
      .attr("dy", ".2em")
      .style("text-anchor", "middle")
      .text(function (d) {
        if (d.r < 30) return ''
        return trimText(d.data.key, 6);
        return d.data.key;
      })
      .attr("font-size", function (d) {
        const sf = font_scale(d.r)
        return sf > 5 ? sf : 5;
      })
      .style('fill', '#323232');
    // count num
    bubbles.append("text")
      .attr("dy", "1.3em")
      .style("text-anchor", "middle")
      // ,style(text-overflow: ellipsis)
      .text(function (d) {
        if (d.r < 30) return ''
        return d.data.value;
      })
      .attr("font-size", function (d) {
        const sf = font_scale(d.r * 0.6)
        return sf > 5 ? sf : 5;
      })
      .style('fill', '#666666');
  }


  useEffect(() => {
    setTimeout(() => {
      // Remove old svg if any
      d3.select(self.current).select('.tooltip').remove('.tooltip');
      d3.select(self.current).selectAll('svg').remove('svg');

      // calculate chart dimensions
      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;

      heightRef.current = innerHeight;
      widthRef.current = innerWidth;
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

      drawBubble(viewerRef.current, fullData, 'og')
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
      drawBubble(viewerRef.current, data, 'og');
    }, 100);
  }, [props.filters, props.filterData, props.layout]);

  return <div id={props.id} ref={self} role="figure" style={{ width: '100%', height: '100%' }} />;
}

export default BubbleChart;

// BubbleChart.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   fields: PropTypes.shape({ x: PropTypes.string.isRequired, isList: PropTypes.bool }).isRequired,
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   filterAdded: PropTypes.func.isRequired,
//   layout: PropTypes.shape({
//     width: PropTypes.number.isRequired,
//     currentCols: PropTypes.number.isRequired,
//   }).isRequired,
// };
