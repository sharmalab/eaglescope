import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

function PieChart(props) {
  const self = useRef();
  const tooltip = useRef();
  const margin = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  };
  const pies = useRef();
  const color = useRef();
  const data = d3
    .nest()
    .key((d) => d[props.fields.x])

    .rollup((v) => v.length)
    .entries(props.data);

  const sum = d3.sum(data, (d) => d.value);

  useEffect(() => {
    setTimeout(() => {
      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;
      const radius = Math.min(innerWidth, innerHeight) / 2;
      const pie = d3
        .pie()
        .sortValues((a, b) => b - a)
        .value((d) => d.value);

      const arcs = pie(data);
      const arc = d3.arc().innerRadius(0).outerRadius(radius);

      color.current = d3
        .scaleOrdinal()
        .domain(data.map((d) => d.key))
        .range(d3.quantize((t) => d3.interpolateSpectral(t), data.length));

      d3.select(self.current).selectAll('svg').remove('svg');

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

      pies.current = viewer
        .selectAll('path')
        .data(arcs)
        .join('path')
        .attr('class', 'slide')
        .attr('fill', (d) => color.current(d.data.key))
        .attr('d', arc)
        .on('click', (d) => {
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
        });

      pies.current
        .append('title')
        .text((d) => `${d.data.key}:${d.data.value}:${d3.format('.0%')(d.data.value / sum)}`);

      const filters = props.filters.filter((f) => f.id === props.id);
      if (filters.length > 0) {
        filters[0].values.forEach((value) => {
          data.forEach((d) => {
            if (d.key === value) d.selected = true;
          });
        });
      }
    }, 100);
  }, [props.layout]);

  useEffect(() => {
    setTimeout(() => {
      const filters = props.filters.filter((f) => f.id === props.id);
      if (filters.length > 0) {
        pies.current
          .attr('fill', (d) => (d.data.selected ? color.current(d.data.key) : '#C0C0C0'))
          .attr('fill-opacity', (d) => (d.data.selected ? 1 : 0.5))
          .attr('stroke', '#CCCCCC')
          .attr('stroke-width', (d) => (d.data.selected ? 3 : 0));
      } else {
        data.forEach((d) => {
          d.selected = false;
        });
        pies.current
          .attr('fill', (d) => color.current(d.data.key))
          .attr('fill-opacity', 1)
          .attr('stroke', 'none');
      }
    }, 100);
  }, [props.filters, props.layout]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div id={props.id} ref={self} style={{ width: '100%', height: '100%' }} />
      <div ref={tooltip} className="tooltip" />
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
