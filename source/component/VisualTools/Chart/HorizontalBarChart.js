import React, { PureComponent } from 'react'
import {isEquivalent} from '../../../common/utils.js'
import * as d3 from "d3";

export default class HorizontalBarChart extends PureComponent {
    constructor(props) {
        super(props);
        this.self = React.createRef();
        this.state = {
            margin: {top: 10, right: 10, bottom: 35, left: 10},
            loading:true,
            error:null,
            fields:{y:'key',x:'value'}
        }
        this.state.data = this.transform(this.props.data, this.props.fields.y);

    }
    transform(data,field){
        const new_data =  d3.nest()
            .key(function(d) { return d[field]; })
            .sortKeys(d3.ascending)
            .rollup(function(v) { return v.length; })
            .entries(data);
        return new_data;

    }
    createXAixs(svg) {

    }

    createYAixs(svg) {

    }

    createYScale(f,height) {
        // set the ranges
        const yScale = d3.scaleBand()
            .domain(this.state.data.map(function(d) { return d[f]; }))
            .range([height, 0])
            .padding(0.1);
        return yScale;
    }

    createXScale(f, width) {
        const xScale = d3.scaleLinear()
        .domain([0, d3.max(this.state.data, function(d) { return d[f]; })])
        .range([0, width]);
        return xScale;
    }

    drawBar(selection, data, className='og') {
        const update_bars = selection.selectAll(`rect.${className}`).data(data,d=> d[this.state.fields.y])

        const enter_bars = update_bars.enter().append('rect')
        enter_bars.attr('class', `${className}`)
            .attr("x", 0)
            .attr("height", this.yScale.bandwidth())
            .attr("y",function(d) { return this.yScale(d[this.state.fields.y])}.bind(this))
            enter_bars.on('click', (data,i) =>{
                //enter_bars.attr('opacity',0.2)
                const selected = enter_bars.filter(function(d){
                  return d === data
                })
                //selected.attr('opacity',1)
                const value = selected.data()[0].key
                const filter = {
                    id:this.props.id,
                    title:this.props.title,
                    field:this.props.fields.y,
                    operation:'eq',
                    values:value
                }
                this.props.filterAdded([filter])
            })

        enter_bars.append('title').text(d=> `${d.key}:${d.value}`)

        update_bars.merge(enter_bars)
            .transition().duration(1000)
            .attr("width", function(d) { return this.xScale(d[this.state.fields.x]); }.bind(this))
            .selectAll('.label').text(d=>d.key)
        // update_bars

        update_bars.exit()
            .transition().duration(1000)
            .attr('width',0).remove()

        return update_bars;

    }

    componentDidUpdate() {
        // console.log('bar update',this.props)
        let data = [];
        if(this.props.filters.length > 0){
            data = this.transform(this.props.filterData, this.props.fields.y)
        }else{
            data = this.transform(this.props.data, this.props.fields.y)
        }
        this.filterbars= this.drawBar(this.viewer,data,'ft');
        this.createTextLabel();
    }

    componentDidMount() {
        setTimeout(()=>{
            const rect = this.self.current.getBoundingClientRect();
            const innerWidth = rect.width - this.state.margin.left - this.state.margin.right;
            this.innerHeight = rect.height - this.state.margin.top - this.state.margin.bottom;
            // create svg
            const svg = d3.select(this.self.current)
            .append("svg")
                .attr("width", rect.width)
                .attr("height", rect.height)
            // create viewer
            this.viewer = svg.append("g")
                .attr("transform", "translate(" + this.state.margin.left + "," + this.state.margin.top + ")");
            //
            this.xScale = this.createXScale(this.state.fields.x, innerWidth);
            this.yScale = this.createYScale(this.state.fields.y, this.innerHeight);

            this.viewer.append("g")
            .attr("transform", `translate(0,${this.innerHeight})`)
            .call(d3.axisBottom(this.xScale).tickSize(-this.innerHeight))

            this.bars = this.drawBar(this.viewer, this.state.data,'og')
            this.filterbars = this.drawBar(this.viewer, this.state.data,'ft')
            this.createTextLabel();

            this.componentDidUpdate()
        }, 500);




        // add the y Axis
        // this.viewer.append("g")
        //     .call(d3.axisLeft(this.yScale));

    }
    createTextLabel(){
        this.viewer.selectAll('.label').remove();
        this.viewer.selectAll('.label').data(this.state.data,d=>d[this.state.fields.y]).enter()
        .append('text')
        .attr('class','label')
        .attr('x', 5)
        .attr('y', function(d) { return this.yScale(d[this.state.fields.y])+this.yScale.bandwidth()/2+4}.bind(this))
        .text(d=>d.key)
    }
    render() {
        return (
            <div
              id={this.props.id}
              ref={this.self}
              style={{ width: "100%", height: "100%" }}
            ></div>
        );
        return (
        <div >
          <svg width={this.props.width} height={this.props.height}>
            {this.state.bars.map((d, i) => (
              <rect
                key={i}
                x={d.x}
                y={d.y}
                width="2"
                height={d.height}
                fill={d.fill}
              />
            ))}
            <g>
              <g
                ref="xAxis"
                transform={`translate(0, ${height - margin.bottom})`}
              />
              <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
              <g ref="brush" />
            </g>
          </svg>
          </div>
        );
      }
}
