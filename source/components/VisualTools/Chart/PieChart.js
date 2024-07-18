import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import createTooltip from '../../partials/tooltip';

function PieChart(props) {
  const self = useRef();
  const margin = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  };
  const data = d3
    .nest()
    .key((d) => d[props.fields.x])

    .rollup((v) => v.length)
    .entries(props.data);

  const sum = d3.sum(data, (d) => d.value);
  const pie = d3
    .pie()
    .sortValues((a, b) => b - a)
    .value((d) => d.value);

  const arcs = pie(data);

  useEffect(() => {
    setTimeout(() => {
      // Remove old svg if any
      d3.select(self.current).select('.tooltip').remove('.tooltip');
      d3.select(self.current).selectAll('svg').remove('svg');

      // calculate chart dimensions
      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;
      const radius = Math.min(innerWidth, innerHeight) / 2;

      const arc = d3.arc().innerRadius(0).outerRadius(radius);

      const color = d3
        .scaleOrdinal()
        .domain(data.map((d) => d.key))
        .range(d3.quantize((t) => d3.interpolateSpectral(t), data.length));

      const svg = d3
        .select(self.current)
        .append('svg')
        .attr('width', rect.width)
        .attr('height', rect.height);

      const viewer = svg
        .append('g')
        .attr(
          'transform',
          `translate(${innerWidth / 2 + margin.left},${innerHeight / 2 + margin.top})`,
        );

      if (innerWidth > 500) {
        const legendG = svg
          .selectAll('.legend')
          .data(arcs)
          .enter()
          .append('g')
          .attr('transform', (d, i) => `translate(${innerWidth - 110},${i * 15 + 20})`)
          .attr('class', 'legend');

        legendG
          .append('rect') // make a matching color rect
          .attr('width', 13)
          .attr('height', 13)
          .attr('fill', (d, i) => color(i))
          .attr('stroke', 'grey')
          .style('stroke-width', '1px');

        legendG
          .append('text') // add the text
          .text((d) => `${d.value}  ${d.data.key}`)
          .style('font-size', 15)
          .attr('y', 13)
          .attr('x', 15);
      }

      // create a tooltip
      const addLabel = (d) => `Class: ${d.data.key} Count: ${d.data.value} 
      Percentage: ${d3.format('.0%')(d.data.value / sum)}`;
      const offset = {
        x: rect.width / 2 + 20,
        y: rect.height / 2,
      };
      const tooltipHandlers = createTooltip(self.current, addLabel, offset);

      const onClick = (d) => {
        d.data.selected = !d.data.selected;
        const values = data.reduce((value, point) => {
          if (point.selected) value.push(point.key);
          return value;
        }, []);
        if (values.length > 0) {
          const filter = {
            id: props.id,
            title: props.title,
            field: props.fields.x,
            operation: 'in',
            values,
          };
          props.filterAdded([filter]);
        } else {
          props.filterRemove(props.id);
        }
      };

      const pies = viewer
        .selectAll('path')
        .data(arcs)
        .join('path')
        .attr('class', 'slide')
        .attr('fill', (d) => color(d.data.key))
        .attr('d', arc)
        .on('mousemove', tooltipHandlers.mousemove)
        .on('mouseleave', tooltipHandlers.mouseleave)
        .on('click', onClick);

      const filters = props.filters.filter((f) => f.id === props.id);
      if (filters.length > 0) {
        filters[0].values.forEach((value) => {
          data.forEach((d) => {
            if (d.key === value) d.selected = true;
          });
        });
      }
      if (filters.length > 0) {
        pies
          .attr('fill', (d) => (d.data.selected ? color(d.data.key) : '#C0C0C0'))
          .attr('fill-opacity', (d) => (d.data.selected ? 1 : 0.5))
          .attr('stroke', '#CCCCCC')
          .attr('stroke-width', (d) => (d.data.selected ? 3 : 0));
      } else {
        data.forEach((d) => {
          d.selected = false;
        });
        pies
          .attr('fill', (d) => color(d.data.key))
          .attr('fill-opacity', 1)
          .attr('stroke', 'none');
      }
    }, 100);
  }, [props.layout, props.filters]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div role="figure" id={props.id} ref={self} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default PieChart;

PieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.shape({ x: PropTypes.string.isRequired }).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterAdded: PropTypes.func.isRequired,
  filterRemove: PropTypes.func.isRequired,
  layout: PropTypes.shape({
    width: PropTypes.number.isRequired,
    currentCols: PropTypes.number.isRequired,
  }).isRequired,
};
