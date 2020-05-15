import React, { Component } from 'react'
import {isEquivalent} from '../../../common/utils.js'
import * as d3 from "d3";

export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.self = React.createRef();
        this.state = {
            margin: {top: 5, right: 5, bottom: 25, left: 25},
            loading:true,
            error:null,
            fields:{x:'key',y:'value'}
        }
        // const data = d3.nest()
	    // .key(function(d) { return d[this.props.fields.x]; }).sortKeys(d3.ascending)
	    // .rollup(function(v) { return v.length; })
	    // .entries(this.props.data);
        // data.forEach(d=>d.key = d.key=='-1'?'N/A':d.key)
        // console.log('111')
        this.state.data = this.transform(this.props.data, this.props.fields.x);
        this.state.horizontal = true;
    }
    transform(data,field){
        console.log('test',this.props,data)
        const new_data =  d3.nest()
            .key(function(d) { return d[field]; })
            .sortKeys(d3.ascending)
            .rollup(function(v) { return v.length; })
            .entries(data);
            console.log('test1')
        new_data.forEach(d=>d.key = d.key=='-1'?'N/A':d.key)
         // console.log('test2')
        return new_data;
        
    }
    createXAixs(svg) {

    }

    createYAixs(svg) {

    }

    createXScale(f,width) {
        // set the ranges
        const xScale = d3.scaleBand()
            .domain(this.state.data.map(function(d) { return d[f]; }))
            .range([0, width])
            .padding(0.1);

        // xScale.invert = function(x) {
        //     var domain = this.domain();
        //     var range = this.range()
        //     var scale = d3.scaleQuantize().domain(range).range(domain)
        //     return scale(x)
        // }
        return xScale;
    }

    createYScale(f, height) {
        const yScale = d3.scaleLinear()
        .domain([0, d3.max(this.state.data, function(d) { return d[f]; })])
        .range([height, 0]);
        return yScale;
    }
    shouldComponentUpdate ( nextProps, nextState ) {
        // TODO LIST
        console.log('bar shouldComponentUpdate')
        //console.log(nextProps.filters, this.props.filters)
        // const flag = isEquivalent(nextProps.filters, this.props.filters);
        // console.log(flag)
        return true;
    }

    drawBar(selection, data, className='og') {
        console.log( selection, data, className)
        const update_bars = selection.selectAll(`rect.${className}`).data(data,d=> d[this.state.fields.x])
        
        const enter_bars = update_bars.enter().append('rect')
        enter_bars.attr('class', `${className}`)
            .attr("x", function(d) { return this.xScale(d[this.state.fields.x])}.bind(this))
            .attr("width", this.xScale.bandwidth())
            .attr("y",this.innerHeight)
            //console.log(enter_bars)
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
                    field:this.props.fields.x,
                    operation:'eq',
                    values:value=='N/A'?-1:value
                }
                this.props.filterAdded([filter])
            })

        enter_bars.append('title').text(d=> `${d.key}:${d.value}`)   
        
        update_bars.merge(enter_bars)
            .transition().duration(1000)
            .attr("y", function(d) { return this.yScale(d[this.state.fields.y])}.bind(this))
            .attr("height", function(d) { return this.innerHeight - this.yScale(d[this.state.fields.y]); }.bind(this))
        
        // update_bars
        
        update_bars.exit()
            .transition().duration(1000)
            .attr('y',this.innerHeight)
            .attr('height',0).remove()
        
        return update_bars;

    }

    componentDidUpdate() {
        console.log('bar update',this.props)
        let data = [];
        if(this.props.filters.length > 0){
            data = this.transform(this.props.filterData, this.props.fields.x)
        }else{
            data = this.transform(this.props.data, this.props.fields.x)
        }
        this.filterbars= this.drawBar(this.viewer,data,'ft');
    }
    componentDidMount() {

        console.log('bar',this.props)
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


        this.bars = this.drawBar(this.viewer, this.state.data,'og')
        this.filterbars = this.drawBar(this.viewer, this.state.data,'ft')
        //this.filterbars = this.drawBar(this.viewer, this.state.data,'ft')
        // this.bars = this.viewer.selectAll(".bar").data(this.state.data)
        // .enter().append("rect")
        // .attr("class", "bar")
        // .attr('fill','steelblue')
        // .attr("x", function(d) { return this.xScale(d[this.state.fields.x])}.bind(this))
        // .attr("width", this.xScale.bandwidth())
        // .attr("y", function(d) { return this.yScale(d[this.state.fields.y])}.bind(this))
        // .attr("height", function(d) { return this.innerHeight - this.yScale(d[this.state.fields.y]); }.bind(this))
        // .on('click', (data,i) =>{
        //     this.bars.attr('opacity',0.2)
        //     const selected = this.bars.filter(function(d){
        //       return d === data
        //     })
        //     selected.attr('opacity',1)
        //     const value = selected.data()[0].key
        //     const filter = {
        //         id:this.props.id,
        //         field:this.props.fields.x,
        //         operation:'eq',
        //         values:value
        //     }
        //     this.props.filterAdded([filter])
        // })
        // this.bars.append('title').text(d=> `${d.key}:${d.value}`)




        this.viewer.append("g")
        .attr("transform", "translate(0," + this.innerHeight + ")")
        .call(d3.axisBottom(this.xScale));
  
        // add the y Axis
        this.viewer.append("g")
            .call(d3.axisLeft(this.yScale));
        
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
