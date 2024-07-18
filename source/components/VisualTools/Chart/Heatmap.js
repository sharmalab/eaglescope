import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { numFixed } from '../../../common/utils';
import createTooltip from '../../partials/tooltip';

function Heatmap(props) {
  const self = useRef();
  const scales = {
    x: d3.scaleBand(),
    y: d3.scaleBand(),
    color: d3.scaleSequential(),
  };

  const margin = {
    top: 10,
    right: 10,
    bottom: 30,
    left: 60,
  };

  const myGroups = d3.map(props.data, (d) => d[props.fields.x]).keys();
  const myVars = d3.map(props.data, (d) => d[props.fields.y]).keys();

  useEffect(() => {
    setTimeout(() => {
      // Remove old svg if any
      d3.select(self.current).select('.tooltip').remove('div');
      d3.select(self.current).selectAll('svg').remove('svg');

      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;

      let { data } = props;
      if (props.filters.length !== 0) data = props.filterData;

      const svg = d3
        .select(self.current)
        .append('svg')
        .attr('width', rect.width)
        .attr('height', rect.height)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      // Create and draw x-axis
      scales.x.range([0, innerWidth]).domain(myGroups).padding(0.05);
      svg
        .append('g')
        .style('font-size', 13)
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(scales.x).tickSize(0))
        .select('.domain')
        .remove();

      // Create and draw y-axis
      scales.y.range([innerHeight, 0]).domain(myVars).padding(0.05);
      svg
        .append('g')
        .style('font-size', 13)
        .call(d3.axisLeft(scales.y).tickSize(0))
        .select('.domain')
        .remove();

      // Create color scale
      scales.color
        .interpolator(d3.interpolateInferno)
        .domain(d3.extent(props.data, (d) => d[props.fields.z]));

      // create a tooltip
      const addLabel = (d) => `The ${props.fields.z} of this 
      cell is: ${numFixed(d.z ? d.z : 0)}`;
      const offset = {
        x: 80,
        y: 0,
      };
      const tooltipHandlers = createTooltip(self.current, addLabel, offset);

      // Group data by the values of x and y
      // then aggregate to one value using mean
      // @TODO add option to choose different function such as: count, max, ..
      const visData = [];
      myGroups.forEach((g) => myVars.forEach((v) => {
        const currentData = data.filter(
          (d) => d[props.fields.x] === g && d[props.fields.y] === v,
        );
        visData.push({
          g,
          v,
          z: d3.mean(currentData, (d) => d[props.fields.z]),
        });
      }));

      // Draw each cell
      svg
        .selectAll()
        .data(visData, (d) => `${d.g}:${d.v}`)
        .enter()
        .append('rect')
        .attr('x', (d) => scales.x(d.g))
        .attr('y', (d) => scales.y(d.v))
        .attr('rx', 4)
        .attr('ry', 4)
        .attr('width', scales.x.bandwidth())
        .attr('height', scales.y.bandwidth())
        .style('fill', (d) => scales.color(d.z))
        .style('stroke-width', 4)
        .style('stroke', 'none')
        .style('opacity', 0.8)
        .on('mousemove', tooltipHandlers.mousemove)
        .on('mouseleave', tooltipHandlers.mouseleave)
        .on('click', (d) => {
          const filters = [
            {
              id: `${props.id}_x`,
              title: props.title,
              field: props.fields.x,
              operation: 'in',
              values: [d.g],
            },
            {
              id: `${props.id}_y`,
              title: props.title,
              field: props.fields.y,
              operation: 'in',
              values: [d.v],
            },
          ];
          props.filterAdded(filters);
        });
    }, 100);
  }, [props.layout, props.filters, props.filterData]);

  return <div id={props.id} ref={self} role="figure" style={{ width: '100%', height: '100%' }} />;
}

export default Heatmap;

Heatmap.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.shape({
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    z: PropTypes.string.isRequired,
  }).isRequired,
  filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  layout: PropTypes.shape({
    width: PropTypes.number.isRequired,
    currentCols: PropTypes.number.isRequired,
  }).isRequired,
  filterAdded: PropTypes.func.isRequired,
};
