import React, { PureComponent } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

function isUndefined(d) {
  return d === undefined || d == null || (typeof d === 'string' && d.toLowerCase() === 'na');
}
export default class KMCurve extends PureComponent {
  constructor(props) {
    super(props);
    this.self = React.createRef();
    this.maxTime = Number.NEGATIVE_INFINITY;
    this.state = {
      margin: {
        top: 35,
        right: 20,
        bottom: 45,
        left: 45,
      },
    };
    if (this.props.filter) {
      this.state.data = this.transform(
        this.props.data.filter((d) => d[this.props.filter.field] === this.props.filter.value),
        this.props.fields,
      );
    } else {
      this.state.data = this.transform(this.props.data, this.props.fields);
    }
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
      this.xScale = d3.scaleLinear().domain([0, this.maxTime]).range([0, innerWidth]);

      this.yScale = d3.scaleLinear().domain([0, 1]).range([innerHeight, 0]);

      this.color = d3
        .scaleOrdinal()
        .domain(this.state.data.map((d) => d.key))
        .range(d3.quantize((t) => d3.interpolateSpectral(t), this.state.data.length));

      const xaxisGroup = viewer
        .append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(this.xScale).ticks(4)); // .tickSize(-innerWidth));
      xaxisGroup
        .append('text')
        .attr('y', 30)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .attr('font-size', 13)
        .text(`Time ${this.props.fields.time.unit ? `(${this.props.fields.time.unit})` : ''}`);

      // add the y Axis
      const yaxisGroup = viewer.append('g').call(d3.axisLeft(this.yScale).ticks(4)); // .tickSize(-innerWidth)
      yaxisGroup
        .append('text')
        .attr('y', -30)
        .attr('x', -innerHeight / 3)
        .attr('fill', 'black')
        .attr('font-size', 13)
        .attr('transform', 'rotate(-90)')
        .text('Survival Probability');

      this.state.data.forEach((d) => this.drawKMCurve(viewer, d));

      const height = 0;
      const nodeWidth = (d) => d.getBBox().width;
      const legend = svg
        .append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(${this.state.margin.left + innerWidth / 2},0)`);

      const lg = legend
        .selectAll('g')
        .data(this.state.data)
        .enter()
        .append('g')
        .attr('transform', (d, i) => `translate(${i * 100},${height + 15})`);

      lg.append('rect')
        .style('fill', (d) => this.color(d.key))
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 10)
        .attr('height', 10);

      lg.append('text')
        .style('font-family', 'Georgia')
        .style('font-size', '13px')
        .attr('x', 17.5)
        .attr('y', 10)
        .text((d) => d.key);

      let offset = 0;
      lg.attr('transform', function transform() {
        const x = offset;
        offset += nodeWidth(this) + 10;
        return `translate(${x},${height + 10})`;
      });
    }, 500);
  }

  transform(data, field) {
    const { eventValue } = field;
    const { censoredValue } = field;
    const group = field.group.field;
    const time = field.time.field;
    const event = field.event.field;

    const filteredData = data.filter(
      (d) => d.collapsed_stage !== 'stage_x/NR'
        && !isUndefined(d[time])
        && !isUndefined(d[event])
        && !isUndefined(d[group]),
    );
    this.maxTime = Math.max(...filteredData.map((d) => d[time]));
    const groups = d3
      .nest()
      .key((d) => d[group])
      .entries(filteredData);
    const rs = [];
    groups.forEach((g) => {
      const { key } = g;
      let risk = g.values.length;
      const values = d3
        .nest()
        .key((d) => +d[time])
        .sortKeys((a, b) => +a - +b)
        .rollup((v) => ({
          event: v.filter((d) => d[event] === eventValue).length,
          censor: v.filter((d) => d[event] === censoredValue).length,
        }))
        .entries(g.values);
      let p = 1;
      const points = [];
      values.forEach((d) => {
        const currentTime = +d.key;
        const e = d.value.event;
        const c = d.value.censor;
        if (currentTime < 0) return;
        if (e > 0) {
          p *= 1 - e / risk;
          const censored = false;
          points.push({ p, currentTime, censored });
        }
        if (c > 0) {
          const censored = true;
          points.push({ p, currentTime, censored });
        }
        risk -= e + c;
      });
      rs.push({ key, points });
    });

    return rs;
  }

  drawLine(viewer, points, color) {
    const line = d3
      .line()
      .curve(d3.curveStepAfter)
      .x((d) => this.xScale(d.time))
      .y((d) => this.yScale(d.p));
    viewer
      .append('path')
      .datum(points)
      .attr('class', 'line')
      .style('stroke', color)
      .attr('d', line);

    points.forEach((point) => {
      if (point.censored) {
        const p = [
          {
            p: point.p - 0.015,
            time: point.time,
          },
          {
            p: point.p + 0.015,
            time: point.time,
          },
        ];
        viewer.append('path').datum(p).attr('class', 'mark').style('stroke', color)
          .attr('d', line);
      }
    });
  }

  drawKMCurve(viewer, d) {
    // draw lines
    this.drawLine(viewer, d.points, this.color(d.key));
    // draw marks
  }

  render() {
    return <div id={this.props.id} ref={this.self} role="figure" style={{ width: '100%', height: '100%' }} />;
  }
}

KMCurve.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fields: PropTypes.shape({ x: PropTypes.string.isRequired, time: PropTypes.shape() }).isRequired,
  filter: PropTypes.shape({ field: PropTypes.string, value: PropTypes.string }),
  id: PropTypes.string.isRequired,
};

KMCurve.defaultProps = {
  filter: {},
};
