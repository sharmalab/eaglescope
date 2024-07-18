import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { numFixed } from '../../../common/utils';

function ParallelCoordinates(props) {
  const self = useRef();
  const foregroundRef = useRef();
  const backgroundRef = useRef();
  const dimensions = props.fields.y;
  const scales = useRef({
    x: d3.scalePoint(),
    y: {},
  });
  const margin = {
    top: 25,
    right: 40,
    bottom: 20,
    left: 40,
  };

  function path(d, ctx) {
    ctx.beginPath();
    dimensions.forEach((p, i) => {
      if (i === 0) {
        ctx.moveTo(scales.current.x(p), scales.current.y[p](d[p]));
      } else {
        ctx.lineTo(scales.current.x(p), scales.current.y[p](d[p]));
      }
    });
    ctx.stroke();
  }

  function brush() {
    if (!d3.event.selection) return;
    const field = dimensions.filter((d) => scales.current.y[d].brush === d3.event.target)[0];
    const [x1, x0] = [d3.event.selection[0], d3.event.selection[1]];
    props.filterAdded([
      {
        id: props.id,
        title: props.title,
        field,
        operation: 'range',
        values: [
          numFixed(scales.current.y[field].invert(x0)),
          numFixed(scales.current.y[field].invert(x1)),
        ],
      },
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      d3.select(self.current).selectAll('canvas').remove('canvas');
      d3.select(self.current).selectAll('svg').remove('svg');

      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;

      backgroundRef.current = d3
        .select(self.current)
        .append('canvas')
        .attr('width', innerWidth)
        .attr('height', innerHeight)
        .style('transform', `translate(${margin.left}px,${margin.top}px)`);

      foregroundRef.current = d3
        .select(self.current)
        .append('canvas')
        .attr('width', innerWidth)
        .attr('height', innerHeight)
        .style('transform', `translate(${margin.left}px,${margin.top - innerHeight - 5}px)`);

      backgroundRef.current = backgroundRef.current.node().getContext('2d');
      foregroundRef.current = foregroundRef.current.node().getContext('2d');

      foregroundRef.current.strokeStyle = 'rgba(0,100,160,0.24)';
      backgroundRef.current.strokeStyle = 'rgba(0,0,0,0.1)';

      const svg = d3
        .select(self.current)
        .append('svg')
        .attr('width', rect.width)
        .attr('height', rect.height)
        .style('transform', `translate(${0}px,${-2 * innerHeight - margin.top / 2}px)`)
        .append('g')
        .style('transform', `translate(${margin.left}px,${margin.top}px)`);

      scales.current.x.domain(dimensions);
      scales.current.x.range([0, innerWidth], 1);

      dimensions.forEach((d) => {
        scales.current.y[d] = d3
          .scaleLinear()
          .domain(d3.extent(props.data, (p) => +p[d]))
          .range([innerHeight, 0]);
      });

      const g = svg
        .selectAll('.dimension')
        .data(dimensions)
        .enter()
        .append('g')
        .attr('class', 'dimension')
        .attr('transform', (d) => `translate(${scales.current.x(d)})`);

      // Add an axis and title.
      g.append('g')
        .attr('class', 'axis')
        .each(function addAxis(d) {
          d3.select(this).call(d3.axisLeft(scales.current.y[d]));
        })
        .append('text')
        .style('text-anchor', 'middle')
        .attr('y', -9)
        .text((d) => d);

      g.append('g')
        .attr('class', 'brush')
        .each(function addBrush(d) {
          d3.select(this).call(
            (scales.current.y[d].brush = d3
              .brushY()
              .extent([
                [-10, 0],
                [10, innerHeight],
              ])
              .on('end', brush)),
          );
        })
        .selectAll('rect')
        .attr('x', -8)
        .attr('width', 16);
    }, 100);
  }, [props.layout]);

  useEffect(() => {
    setTimeout(() => {
      if (!props.filterData) return;
      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;

      // Render selected lines
      foregroundRef.current.clearRect(0, 0, innerWidth + 1, innerHeight + 1);
      backgroundRef.current.clearRect(0, 0, innerWidth + 1, innerHeight + 1);
      if (props.filters.length === 0) {
        props.data.forEach((d) => {
          path(d, foregroundRef.current);
        });
      } else {
        props.data.forEach((d) => {
          if (props.filterData.includes(d)) {
            path(d, foregroundRef.current);
          } else {
            path(d, backgroundRef.current);
          }
        });
      }
    }, 100);
  }, [props.filters, props.filterData, props.layout]);

  return <div id={props.id} ref={self} role="figure" style={{ width: '100%', height: '100%' }} />;
}

export default ParallelCoordinates;

ParallelCoordinates.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.shape({
    y: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterAdded: PropTypes.func.isRequired,
  layout: PropTypes.shape({
    width: PropTypes.number.isRequired,
    currentCols: PropTypes.number.isRequired,
  }).isRequired,
};
