import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { numFixed } from '../../../common/utils';

function DensityChart(props) {
  const self = useRef();
  const svg = useRef();
  const scales = useRef({
    x: d3.scaleLinear(),
    y: d3.scaleLinear(),
  });
  const margin = {
    top: 10,
    right: 30,
    bottom: 30,
    left: 40,
  };

  const end = () => {
    if (!d3.event.selection) return;
    const [x0, y0] = d3.event.selection[0];
    const [x1, y1] = d3.event.selection[1];
    const filters = [
      {
        id: `${props.id}_x`,
        title: props.title,
        field: props.fields.x,
        operation: 'range',
        values: [numFixed(scales.current.x.invert(x0)), numFixed(scales.current.x.invert(x1))],
      },
      {
        id: `${props.id}_y`,
        title: props.title,
        field: props.fields.y,
        operation: 'range',
        values: [numFixed(scales.current.y.invert(y1)), numFixed(scales.current.y.invert(y0))],
      },
    ];
    props.filterAdded(filters);
  };

  useEffect(() => {
    setTimeout(() => {
      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;

      d3.select(self.current).selectAll('svg').remove('svg');
      svg.current = d3
        .select(self.current)
        .append('svg')
        .attr('width', rect.width)
        .attr('height', rect.height)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      scales.current.x
        .domain(d3.extent(props.data, (d) => d[props.fields.x]))
        .range([margin.left, innerWidth - margin.right]);

      scales.current.y
        .domain(d3.extent(props.data, (d) => d[props.fields.y]))
        .range([innerHeight - margin.bottom, margin.bottom]);

      svg.current
        .append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(scales.current.x));
      svg.current.append('g').call(d3.axisLeft(scales.current.y));

      const brush = d3
        .brush()
        .extent([
          [0, 0],
          [innerWidth, innerHeight],
        ])
        .on('end', end);

      svg.current.append('g').call(brush);
    }, 100);
  }, [props.layout]);

  useEffect(() => {
    setTimeout(() => {
      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;

      let { data } = props;
      if (props.filters.length !== 0) data = props.filterData;

      const k = 10 ** (-4 + Math.round(Math.log10(data.length)));
      const color = d3.scaleLinear().domain([0, k]).range(['white', '#4682b4']);

      const densityData = d3
        .contourDensity()
        .x((d) => scales.current.x(d[props.fields.x]))
        .y((d) => scales.current.y(d[props.fields.y]))
        .size([innerWidth, innerHeight])
        .bandwidth(20)(data);

      svg.current.select('#draw_area').remove('g');
      svg.current
        .insert('g', 'g')
        .attr('id', 'draw_area')
        .selectAll('path')
        .data(densityData)
        .enter()
        .append('path')
        .attr('d', d3.geoPath())
        .attr('fill', (d) => color(d.value));
    }, 100);
  }, [props.layout, props.filters, props.filterData]);
  return <div id={props.id} ref={self} style={{ width: '100%', height: '100%' }} />;
}

export default DensityChart;

DensityChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.shape({ x: PropTypes.string.isRequired, y: PropTypes.string.isRequired })
    .isRequired,
  id: PropTypes.string.isRequired,
  filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  layout: PropTypes.shape({
    width: PropTypes.number.isRequired,
    currentCols: PropTypes.number.isRequired,
  }).isRequired,
  filterAdded: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
