import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { numFixed } from '../../../common/utils';

function DensityChart(props) {
  let startPosition = [0, 0];
  let endPosition = [0, 0];
  const self = useRef();
  const svg = useRef();
  const scales = useRef({
    x: d3.scaleLinear(),
    y: d3.scaleLinear(),
  });
  const margin = {
    top: 10,
    right: 30,
    bottom: 20,
    left: 40,
  };

  const end = () => {
    if (!d3.event.selection) return;
    const [x0, y0] = [Math.min(startPosition[0], endPosition[0]),
      Math.min(startPosition[1], endPosition[1])];
    const [x1, y1] = [Math.max(startPosition[0], endPosition[0]),
      Math.max(startPosition[1], endPosition[1])];
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
      d3.select(self.current).selectAll('svg').remove('svg');
      const rect = self.current.getBoundingClientRect();
      const innerWidth = rect.width - margin.left - margin.right;
      const innerHeight = rect.height - margin.top - margin.bottom;

      svg.current = d3
        .select(self.current)
        .append('svg')
        .attr('width', rect.width)
        .attr('height', rect.height)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
      const paddingPercent = 0.1; // Adjust the percentage of padding as needed
      const domainExtentX = d3.extent(props.data, (d) => d[props.fields.x]);
      const domainPaddingX = (domainExtentX[1] - domainExtentX[0]) * paddingPercent;
      const domainExtentY = d3.extent(props.data, (d) => d[props.fields.y]);
      const domainPaddingY = (domainExtentY[1] - domainExtentY[0]) * paddingPercent;
      scales.current.x
        .domain([domainExtentX[0] - domainPaddingX,
          domainExtentX[1] + domainPaddingX])
        .range([0, innerWidth]);

      scales.current.y
        .domain([domainExtentY[0] - domainPaddingY,
          domainExtentY[1] + domainPaddingY])
        .range([innerHeight, 0]);

      svg.current
        .append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(scales.current.x));
      svg.current.append('g').call(d3.axisLeft(scales.current.y));

      const getCurrentMouseClickPosition = () => {
        const rec = svg.current.select('.overlay').node();
        const mouseX = d3.event.sourceEvent.clientX - rec.getBoundingClientRect().x;
        const mouseY = d3.event.sourceEvent.clientY - rec.getBoundingClientRect().y;
        return [mouseX, mouseY];
      };

      const brush = d3
        .brush()
        .extent([
          [0, 0],
          [innerWidth, innerHeight],
        ]).on('start', () => {
          startPosition = getCurrentMouseClickPosition();
          svg.current.selectAll('.selection').remove('rect');
        }).on('brush', () => {
          endPosition = getCurrentMouseClickPosition();
          svg.current.selectAll('.selected-area').remove('.selected-area');
          svg.current.selectAll('.selection').remove('rect');
          const startX = Math.min(startPosition[0], endPosition[0]);
          const startY = Math.min(startPosition[1], endPosition[1]);
          const selectArea = svg.current.append('rect')
            .attr('class', 'selected-area')
            .attr('position', 'absolute')
            .attr('x', startX)
            .attr('y', startY)
            .attr('width', Math.abs(endPosition[0] - startPosition[0]))
            .attr('height', Math.abs(endPosition[1] - startPosition[1]))
            .attr('fill', 'rgba(130, 130, 130, 0.5)');
        })
        .on('end', () => {
          endPosition = getCurrentMouseClickPosition();
          svg.current.selectAll('.selected-area').remove('.selected-area');
          svg.current.selectAll('.selection').remove('rect');
          const startX = Math.min(startPosition[0], endPosition[0]);
          const startY = Math.min(startPosition[1], endPosition[1]);
          const selectedArea = svg.current.append('rect')
            .attr('class', 'selected-area')
            .attr('position', 'absolute')
            .attr('x', startX)
            .attr('y', startY)
            .attr('width', Math.abs(endPosition[0] - startPosition[0]))
            .attr('height', Math.abs(endPosition[1] - startPosition[1]))
            .attr('fill', 'rgba(140, 140, 140, 0.5)');
          end();
          setTimeout(
            () => {
              selectedArea.remove();
            },
            20,
          );
        });

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
  return <div id={props.id} ref={self} role="figure" style={{ width: '100%', height: '100%' }} />;
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
