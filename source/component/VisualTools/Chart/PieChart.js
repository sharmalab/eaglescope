import React, { PureComponent } from "react";
import * as d3 from "d3";

export default class PieChart extends PureComponent {
  constructor(props) {
    super(props);
    this.self = React.createRef();
    this.tooltip = React.createRef();
    this.state = {
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      loading: true,
      error: null
    };

    const data = d3.nest()
      .key(function (d) { return d[props.fields.x]; })

      .rollup(function (v) { return v.length; })
      .entries(props.data)
    data.forEach(d => {
      d.selected = false;
    })
    this.state.data = data;
    this.sum = d3.sum(this.state.data, d => d.value)

  }

  componentDidUpdate() {
    // console.log('pie did update')
    const filters = this.props.filters.filter(f => f.id == this.props.id)
    if (filters.length > 0) { // has filters
      this.pies
        .attr("fill", d => d.data.selected ? this.color(d.data.key) : '#C0C0C0')
        .attr('fill-opacity', d => d.data.selected ? 1 : .5)
        .attr('stroke', '#CCCCCC')
        .attr('stroke-width', d => d.data.selected ? 3 : 0)
    } else {
      this.state.data.forEach(d => d.selected = false)
      this.pies.attr("fill", d => this.color(d.data.key))
        .attr('fill-opacity', 1)
        .attr('stroke', 'none')
    }
  }

  componentDidMount() {
    setTimeout(() => {


      const rect = this.self.current.getBoundingClientRect();
      const innerWidth = rect.width - this.state.margin.left - this.state.margin.right;
      const innerHeight = rect.height - this.state.margin.top - this.state.margin.bottom;
      const radius = Math.min(innerWidth, innerHeight) / 2
      const pie = d3.pie().sortValues((a, b) => b - a).value(d => d.value)

      const arcs = pie(this.state.data);

      const arc = d3.arc().innerRadius(0).outerRadius(radius)

      const arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);

      this.color = d3.scaleOrdinal()
        .domain(this.state.data.map(d => d.key))
        .range(d3.quantize(t => d3.interpolateSpectral(t), this.state.data.length))

      const svg = d3.select(this.self.current)
        .append("svg")
        .attr("width", rect.width)
        .attr("height", rect.height)

      const viewer = svg.append("g")
        //.attr("stroke", "white")
        .attr("transform", `translate(${(innerWidth / 2 + this.state.margin.left)},${innerHeight / 2 + this.state.margin.top})`)

      this.pies = viewer.selectAll("path")
        .data(arcs)
        .join("path")
        .attr("class", "slide")
        // .attr("id",(d,i)=>i)
        .attr("fill", d => this.color(d.data.key))
        .attr("d", arc)
        .on('click', (d, i) => {
          // viewer.selectAll(".slide").attr('opacity',0.2)
          // const selected = this.pies.filter(function(d){
          //   return d === data
          // })
          console.log('click')
          d.data.selected = !d.data.selected;
          const values = this.state.data.reduce((values, d) => {
            if (d.selected) values.push(d.key)
            return values;
          }, [])


          if (values.length > 0) { // has filters
            this.pies
              .attr("fill", d => d.data.selected ? this.color(d.data.key) : '#C0C0C0')
              .attr('fill-opacity', d => d.data.selected ? 1 : .5)
              .attr('stroke', '#CCCCCC')
              .attr('stroke-width', d => d.data.selected ? 3 : 0)
            const filter = {
              id: this.props.id,
              title: this.props.title,
              field: this.props.fields.x,
              operation: 'in',
              values: values
            }
            this.props.filterAdded([filter])
          } else {
            this.pies.attr("fill", d => this.color(d.data.key))
              .attr('fill-opacity', 1)
              .attr('stroke', 'none')

            this.props.filterRemove(this.props.id)
          }

        })
      this.pies.append('title').text(d => `${d.data.key}:${d.data.value}:${d3.format(".0%")(d.data.value / this.sum)}`)

      //this.componentDidUpdate();
    }, 500)
    //   .on("mousemove", function(d){
    //     console.log(this)
    //     d3.select(this.tooltip.current)
    //       .style("left", 0 + "px")
    //       .style("top", 0 + "px")
    //       .style("display", "inline-block")
    //       .style("position", "absolute")
    //       .style("color","grey")
    //       .style("background","white")
    //       .style("z-index",999)
    //       .html( (d.data[this.state.fields.x]) + "<br>" +(d.value));
    // }.bind(this))
    // .on("mouseout", function(d){ d3.select(this.tooltip.current).style("display", "none");}.bind(this));

    // svg.append("g")
    //     .attr("font-family", "sans-serif")
    //     .attr("font-size", 12)
    //     .attr("text-anchor", "middle")
    //   .selectAll("text")
    //   .data(arcs)
    //   .join("text")
    //     .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
    //     .call(text => text.append("tspan")
    //         .attr("y", "-0.4em")
    //         .attr("font-weight", "bold")
    //         .text(d => d.data[this.state.fields.x]))
    //     .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
    //         .attr("x", 0)
    //         .attr("y", "0.7em")
    //         .attr("fill-opacity", 0.7)
    //         .text(d => d.data[this.state.fields.y].toLocaleString()));

  }

  render() {

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div
          id={this.props.id}
          ref={this.self}
          style={{ width: "100%", height: "100%" }}
        ></div>
        <div ref={this.tooltip} className="tooltip" ></div>
      </div>
    );
  }
}
