import React, { Component } from 'react'
import {isEquivalent} from '../../../common/utils.js'
import * as d3 from "d3";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
function isUndefined(d){
    return d==undefined||d==null||(typeof d === 'string' && d.toLowerCase()==`na`)
}
export default class KMCurve extends Component {
    constructor(props) {
        super(props);
        this.self = React.createRef();
        this.maxTime = Number.NEGATIVE_INFINITY;
        this.state = {
            margin: {top: 35, right: 20, bottom: 45, left: 45},
            loading:true,
            error:null
        }
        if(this.props.filter) {
            this.state.data = this.transform(this.props.data.filter(d=>d[this.props.filter.field]==this.props.filter.value), this.props.fields);
        }else{
            this.state.data = this.transform(this.props.data, this.props.fields);
        }
        

        console.log(this.state.data)
        console.log(this.maxTime)
        // this.state.data = {
        //     l1:generateData(),
        //     l2:generateData()
        // }
        // console.log("KM Data",this.state.data);
        // //this.state.horizontal = true;
    }
    transform(data,field){
        const event_value = field.eventValue;
        const censored_value = field.censoredValue;
        const group =  field.group.field;
        const time = field.time.field;
        const event = field.event.field;
        
        
        data = data.filter(d=>d.collapsed_stage!='stage_x/NR'&&!isUndefined(d[time])&&!isUndefined(d[event])&&!isUndefined(d[group]))
        this.maxTime = Math.max(...data.map(d=>d[time]));
        const groups = d3.nest().key(d=>d[group]).entries(data)
        const rs = []
        groups.forEach(g=>{
            const key = g.key;
            let risk = g.values.length;
            const values = d3.nest()
            .key(d=> +d[time])
            .sortKeys((a,b)=>(+a)-(+b))
            .rollup(function(v) {
                return {
                    event:v.filter(d=>d[event]==event_value).length,
                    censor:v.filter(d=>d[event]==censored_value).length
                };
            })
            .entries(g.values);
            let p = 1;
            const points = [];
            values.forEach(d=>{
                const time = +d.key;
                const e = d.value.event;
                const c = d.value.censor;
                if(time<0) return;
                if(e > 0){
                    p *= (1 - e/risk)
                    const censored = false;
                    points.push({p, time, censored})
                }
                if(c > 0){
                    const censored = true;
                    points.push({p, time, censored})
                }
                risk -= (e + c);
            })
            rs.push({key,points})
            
        })
        
        return rs;
        
    }    
    shouldComponentUpdate ( nextProps, nextState ) {
        // TODO LIST
        console.log('KMCurve shouldComponentUpdate')
        //console.log(nextProps.filters, this.props.filters)
        // const flag = isEquivalent(nextProps.filters, this.props.filters);
        // console.log(flag)
        return true;
    }
    drawLine(viewer, points, color){
        const line = d3.line()
        .curve(d3.curveStepAfter)
        .x(d=> this.xScale(d.time))
        .y(d=> this.yScale(d.p));       
        viewer.append("path")
            .datum(points)
            .attr("class", "line")
            .style("stroke", color)
            .attr("d", line);
        
        
        points.forEach(point=>{
            if(point.censored){
                const p = [{
                    p:point.p-0.015,
                    time:point.time,
                },{
                    p:point.p+0.015,
                    time:point.time,
                }] 
                viewer.append("path")
                .datum(p)
                .attr("class", "mark")
                .style("stroke", color)
                .attr("d", line);
            }
        })
        
        
    }

    drawCensoredMark(viewer , point, color){

    }

    drawKMCurve(viewer, d) {
        
        // draw lines
        this.drawLine(viewer, d.points, this.color(d.key))
        // draw marks
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentDidMount() {
        console.log('KM Curve')
        const rect = this.self.current.getBoundingClientRect();
        const innerWidth = rect.width - this.state.margin.left - this.state.margin.right;
        const innerHeight = rect.height - this.state.margin.top - this.state.margin.bottom;
        // create svg 
        const svg = d3.select(this.self.current)
        .append("svg")
            .attr("width", rect.width)
            .attr("height", rect.height)
        // create viewer
        const viewer = svg.append("g")
            .attr("transform", "translate(" + this.state.margin.left + "," + this.state.margin.top + ")");
        //
        this.xScale = d3.scaleLinear()
        .domain([0, this.maxTime])
        .range([0, innerWidth])
        
        this.yScale = d3.scaleLinear()
        .domain([0, 1])
        .range([innerHeight, 0])

        this.color = d3.scaleOrdinal()
        .domain(this.state.data.map(d => d.key))
        .range(d3.quantize(t => d3.interpolateSpectral(t), this.state.data.length))
        
        


        const xaxisGroup = viewer.append("g")
        .attr("transform", "translate(0," + innerHeight + ")")
        .call(d3.axisBottom(this.xScale).ticks(4)); //.tickSize(-innerWidth));
        xaxisGroup.append('text')
        .attr('y', 30)
        .attr('x', innerWidth/2)
        .attr('fill','black')
        .attr('font-size',13)
        .text(`Time ${this.props.fields.time.unit?`(${this.props.fields.time.unit})`:''}`)
        
        // add the y Axis
        const yaxisGroup = viewer.append("g")
            .call(d3.axisLeft(this.yScale).ticks(4)); // .tickSize(-innerWidth)
            yaxisGroup.append('text')
            .attr('y', -30)
            .attr('x', -innerHeight/3)
            .attr('fill','black')
            .attr('font-size',13)
            .attr("transform", "rotate(-90)")
            .text(`Survival Probability`)

        this.state.data.forEach(d=>this.drawKMCurve(viewer,d))


        const height = 0;
        const width = 15;
        var nodeWidth = (d) => d.getBBox().width;
        const legend = svg.append('g')
          .attr('class', 'legend')
          .attr('transform', `translate(${this.state.margin.left+innerWidth/2},0)`);

        const lg = legend.selectAll('g')
          .data(this.state.data)
          .enter()
        .append('g')
          .attr('transform', (d,i) => `translate(${i * 100},${height + 15})`);

        lg.append('rect')
          .style('fill', d => this.color(d.key))
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', 10)
          .attr('height', 10);

        lg.append('text')
          .style('font-family', 'Georgia')
          .style('font-size', '13px')
          .attr('x', 17.5)
          .attr('y', 10)
          .text(d => d.key);

        let offset = 0;
        lg.attr('transform', function(d, i) {
            let x = offset;
            offset += nodeWidth(this) + 10;
            return `translate(${x},${height + 10})`;
        });        
    }
    
    render() {
        return (
            <div
              id={this.props.id}
              ref={this.self}
              style={{ width: "100%", height: "100%" }}
            ></div>
        );
    }
}
