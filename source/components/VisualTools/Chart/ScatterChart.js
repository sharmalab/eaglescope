import React, { PureComponent } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import { numFixed } from '../../../common/utils';

export default class ScatterChart extends PureComponent {
  constructor(props) {
    super(props);

    this.self = React.createRef();
    this.state = {
      margin: {
        top: 5,
        right: 10,
        bottom: 25,
        left: 25,
      },
    };
    this.state.data = this.props.data.filter(
      (d) => d[this.props.fields.x] !== 'N/A'
        && d[this.props.fields.y] !== 'N/A'
        && d[this.props.fields.z] !== 'N/A',
    );
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    setTimeout(() => {
      d3.select(this.self.current).selectAll('canvas').remove('canvas');
      d3.select(this.self.current).selectAll('svg').remove('svg');
      this.rect = this.self.current.getBoundingClientRect();
      const innerWidth = this.rect.width - this.state.margin.left - this.state.margin.right;
      const innerHeight = this.rect.height - this.state.margin.top - this.state.margin.bottom;

      this.canvas = d3
        .select(this.self.current)
        .append('canvas')
        .attr('width', innerWidth)
        .attr('height', innerHeight)
        .style('transform', `translate(${this.state.margin.left}px,${this.state.margin.top}px)`);

      // create svg
      const svg = d3
        .select(this.self.current)
        .append('svg')
        .attr('width', this.rect.width)
        .attr('height', this.rect.height)
        .attr('transform', `translate(${0},${-innerHeight})`);

      // create viewer
      const viewer = svg
        .append('g')
        .attr('transform', `translate(${this.state.margin.left},0)`);

      //
      this.xScale = this.createScaleLiner(this.props.fields.x, [0, innerWidth]);
      this.yScale = this.createScaleLiner(this.props.fields.y, [innerHeight, 0]);
      this.radiusScale = this.createScaleLiner(this.props.fields.z, [3, 10]);
      const getCurrentMouseClickPosition = () => {
        console.log(svg);
        const mouseX = d3.event.sourceEvent.clientX - svg.node().getBoundingClientRect().x
        - this.state.margin.left;
        const mouseY = d3.event.sourceEvent.clientY - svg.node().getBoundingClientRect().y;
        return [mouseX, mouseY];
      };
      viewer
        .append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(this.xScale).tickSize(-innerHeight));

      // add the y Axis
      viewer.append('g').call(d3.axisLeft(this.yScale).tickSize(-innerWidth));

      this.brush = d3
        .brush()
        .extent([
          [0, 0],
          [innerWidth, innerHeight],
        ]).on('start', () => {
          this.startPosition = getCurrentMouseClickPosition();
        }).on('brush', () => {
          this.endPosition = getCurrentMouseClickPosition();
          svg.selectAll('rect').remove('rect');
          const startX = Math.min(this.startPosition[0], this.endPosition[0]);
          const startY = Math.min(this.startPosition[1], this.endPosition[1]);
          const selectedArea = svg.append('rect')
            .attr('position', 'absolute')
            .attr('x', startX + this.state.margin.left)
            .attr('y', startY)
            .attr('width', Math.abs(this.endPosition[0] - this.startPosition[0]))
            .attr('height', Math.abs(this.endPosition[1] - this.startPosition[1]))
            .attr('fill', 'rgba(211, 211, 211, 0.5)');
        })
        .on('end', () => {
          this.endPosition = getCurrentMouseClickPosition();
          svg.selectAll('rect').remove('rect');
          const startX = Math.min(this.startPosition[0], this.endPosition[0]);
          const startY = Math.min(this.startPosition[1], this.endPosition[1]);
          const selectedArea = svg.append('rect')
            .attr('position', 'absolute')
            .attr('x', startX + this.state.margin.left)
            .attr('y', startY)
            .attr('width', Math.abs(this.endPosition[0] - this.startPosition[0]))
            .attr('height', Math.abs(this.endPosition[1] - this.startPosition[1]))
            .attr('fill', 'rgba(211, 211, 211, 0.5)');
          this.end();
        });

      viewer.append('g').call(this.brush);

      this.draw();
    }, 100);
  }

  drawPoint(point) {
    const cx = this.xScale(point[this.props.fields.x]);
    const cy = this.yScale(point[this.props.fields.y]);
    const r = this.props.fields.z ? this.radiusScale(point[this.props.fields.z]) : 3;

    this.context.beginPath();
    this.context.arc(cx, cy, r, 0, 2 * Math.PI);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();
  }

  draw() {
    this.context = this.canvas.node().getContext('2d');
    this.context.clearRect(0, 0, this.rect.width, this.rect.height);
    this.context.fillStyle = '#87CEEB';
    this.context.strokeWidth = 1;
    this.context.strokeStyle = '#4682B4';
    this.context.globalAlpha = 1;

    if (this.props.filters.length === 0) {
      this.state.data.forEach((point) => {
        this.drawPoint(point);
      });
    } else {
      this.state.data.forEach((point) => {
        if (this.props.filterData.includes(point)) {
          this.context.fillStyle = '#87CEEB';
          this.context.strokeWidth = 1;
          this.context.strokeStyle = '#4682B4';
          this.context.globalAlpha = 1;
        } else {
          this.context.fillStyle = '#c0c0c0c0';
          this.context.strokeWidth = 1;
          this.context.strokeStyle = '#000000';
          this.context.globalAlpha = 0.2;
        }
        this.drawPoint(point);
      });
    }
  }

  createScaleLiner(f, range) {
    const paddingPercent = 0.1; // Adjust the percentage of padding as needed
    const domainExtent = d3.extent(this.state.data, (d) => d[f]);
    const domainPadding = (domainExtent[1] - domainExtent[0]) * paddingPercent;
    const scaleLiner = d3
      .scaleLinear()
      .domain([domainExtent[0] - domainPadding,
        domainExtent[1] + domainPadding])
      .range(range)
      .nice();
    return scaleLiner;
  }

  end() {
    if (!d3.event.selection) return;

    const [x0, y0] = [Math.min(this.startPosition[0], this.endPosition[0]),
      Math.min(this.startPosition[1], this.endPosition[1])];
    const [x1, y1] = [Math.max(this.startPosition[0], this.endPosition[0]),
      Math.max(this.startPosition[1], this.endPosition[1])];

    const filters = [
      {
        id: `${this.props.id}_x`,
        title: this.props.title,
        field: this.props.fields.x,
        operation: 'range',
        values: [numFixed(this.xScale.invert(x0)), numFixed(this.xScale.invert(x1))],
      },
      {
        id: `${this.props.id}_y`,
        title: this.props.title,
        field: this.props.fields.y,
        operation: 'range',
        values: [numFixed(this.yScale.invert(y1)), numFixed(this.yScale.invert(y0))],
      },
    ];
    this.props.filterAdded(filters);
  }

  render() {
    return (
      <div id={this.props.id} ref={this.self} role="figure" style={{ width: '100%', height: '100%' }} />
    );
  }
}

ScatterChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.shape({
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    z: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filterAdded: PropTypes.func.isRequired,
};
