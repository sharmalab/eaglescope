import React, { PureComponent } from 'react'
import {isEquivalent} from '../../../common/utils.js'
import * as d3 from "d3";

export default class BarChart extends PureComponent {
    constructor(props) {
        super(props);
        this.self = React.createRef();
        this.state = {
            margin: {top: 10, right: 10, bottom: 35, left: 35},
            loading:true,
            error:null,
            fields:{x:'key',y:'value'}
        }
        this.state.data = this.transform(this.props.data, this.props.fields.x);
        this.state.horizontal = true;
    }
    transform(data,field){
        const new_data =  d3.nest()
            .key(function(d) { return d[field]; })
            .sortKeys(d3.ascending)
            .rollup(function(v) { return v.length; })
            .entries(data);
        return new_data;

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

    drawBar(selection, data, className='og') {
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
                    values:value
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
        // console.log('bar update',this.props)
        let data = [];
        if(this.props.filters.length > 0){
            data = this.transform(this.props.filterData, this.props.fields.x)
        }else{
            data = this.transform(this.props.data, this.props.fields.x)
        }
        this.filterbars= this.drawBar(this.viewer,data,'ft');
    }
    componentDidMount() {
        setTimeout(()=>{
            const rect = this.self.current.getBoundingClientRect();
            this.innerWidth = rect.width - this.state.margin.left - this.state.margin.right;
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
            this.xScale = this.createXScale(this.state.fields.x, this.innerWidth);
            this.yScale = this.createYScale(this.state.fields.y, this.innerHeight);

            this.xAxis = d3.axisBottom(this.xScale)
            //.tickSize(this.innerWidth)
            this.viewer.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0,${this.innerHeight})`)
            .call(this.xAxis)
            .selectAll(".tick text")
            .call(this.wrap, this.xScale.bandwidth());

            // add the y Axis
            this.yAxis = d3.axisLeft(this.yScale)
            .tickSize(-this.innerWidth)
            this.viewer.append("g")
                .call(this.yAxis);

            this.bars = this.drawBar(this.viewer, this.state.data,'og')
            this.filterbars = this.drawBar(this.viewer, this.state.data,'ft')

            this.componentDidUpdate()

        }, 500)

    }
    wrap(text, width) {
        text.each(function() {
          var text = d3.select(this),
              words = text.text().split(/\s+/).reverse(),
              word,
              line = [],
              lineNumber = 0,
              lineHeight = 1.1, // ems
              y = text.attr("y"),
              dy = parseFloat(text.attr("dy")),
              tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
          while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
          }
        });
    }

    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);
    }

    static getDerivedStateFromError(error) {
      return {hasError: true, error: error};
    }

    render() {
      if (this.state.hasError){
        return (<div>ERROR</div>);
      } else {
        return (
            <div
              id={this.props.id}
              ref={this.self}
              style={{ width: "100%", height: "100%" }}
            ></div>
        );
      }
    }
}
