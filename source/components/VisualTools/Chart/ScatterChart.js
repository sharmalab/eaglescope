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
        top: 10,
        right: 10,
        bottom: 25,
        left: 40,
      },
    };
    this.state.data = this.props.data.filter(
      (d) => d[this.props.fields.x] !== 'N/A'
        && d[this.props.fields.y] !== 'N/A'
        && d[this.props.fields.z] !== 'N/A',
    );
  }

  componentDidMount() {
    setTimeout(() => {
      const rect = this.self.current.getBoundingClientRect();
      const innerWidth = rect.width - this.state.margin.left - this.state.margin.right;
      const innerHeight = rect.height - this.state.margin.top - this.state.margin.bottom;
      // create svg
      const svg = d3
        .select(this.self.current)
        .append('svg')
        .attr('width', rect.width)
        .attr('height', rect.height);
      // create viewer
      const viewer = svg
        .append('g')
        .attr('transform', `translate(${this.state.margin.left},${this.state.margin.top})`);
      //
      this.xScale = this.createScaleLiner(this.props.fields.x, [0, innerWidth]);
      this.yScale = this.createScaleLiner(this.props.fields.y, [innerHeight, 0]);

      this.radiusScale = this.createScaleLiner(this.props.fields.z, [3, 10]);

      viewer
        .append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(this.xScale).tickSize(-innerHeight));

      // add the y Axis
      viewer.append('g').call(d3.axisLeft(this.yScale).tickSize(-innerWidth));

      this.circles = viewer
        .selectAll('circle')
        .data(this.state.data)
        .enter()
        .append('circle')
        .attr('r', (d) => (this.props.fields.z ? this.radiusScale(d[this.props.fields.z]) : 3))
        .attr('cx', (d) => this.xScale(d[this.props.fields.x]))
        .attr('cy', (d) => this.yScale(d[this.props.fields.y]))
        .attr('class', 'brushed');

      this.brush = d3
        .brush()
        .extent([
          [0, 0],
          [innerWidth, innerHeight],
        ])
        .on('end', this.end.bind(this));

      this.brush_area = viewer
        .append('g')

        .call(this.brush);

      this.componentDidUpdate();
    }, 100);
  }

  componentDidUpdate() {
    if (this.props.filters.length > 0) {
      this.circles.attr('class', (d) => (this.props.filterData.includes(d) ? 'brushed' : 'non_brushed'));
    } else {
      this.circles.attr('class', 'brushed');
    }
  }

  createScaleLiner(f, range) {
    const scaleLiner = d3
      .scaleLinear()
      .domain(d3.extent(this.state.data, (d) => d[f]))
      .range(range)
      .nice();
    return scaleLiner;
  }

  end() {
    if (!d3.event.selection) return;
    const [x0, y0] = d3.event.selection[0];
    const [x1, y1] = d3.event.selection[1];
    const filters = [
      {
        id: this.props.id,
        title: this.props.title,
        field: this.props.fields.x,
        operation: 'range',
        values: [numFixed(this.xScale.invert(x0)), numFixed(this.xScale.invert(x1))],
      },
      {
        id: this.props.id,
        title: this.props.title,
        field: this.props.fields.y,
        operation: 'range',
        values: [numFixed(this.yScale.invert(y1)), numFixed(this.yScale.invert(y0))],
      },
    ];
    this.props.filterAdded(filters);
    this.brush_area.call(this.brush.move, null);
  }

  render() {
    return <div id={this.props.id} ref={this.self} style={{ width: '100%', height: '100%' }} />;
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
