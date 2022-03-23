import React, { PureComponent } from 'react'
import {numFixed} from '../../../common/utils.js'; 
import * as d3 from "d3";
export default class ScatterChart extends PureComponent {
    constructor(props) {
        super(props);
        this.self = React.createRef();
        this.state = {
            margin: {top: 10, right: 10, bottom: 25, left: 40},
            loading:true,
            error:null
        }
        this.state.data = this.props.data.filter(d=> d[this.props.fields.x]!='N/A'&&d[this.props.fields.y]!='N/A'&&d[this.props.fields.z]!='N/A' )
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

    createScaleLiner(f, range) {
        const scaleLiner = d3.scaleLinear()
        .domain(d3.extent(this.state.data, d=>d[f]))
        .range(range)
        .nice();
        return scaleLiner;
    }

    componentDidUpdate(){

        if(this.props.filters.length > 0){
            this.circles.attr('class', d=> this.props.filterData.includes(d)?'brushed':'non_brushed')
        }else{
            this.circles.attr('class','brushed')
        }
    }

    componentDidMount() {
        setTimeout(() => {
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
            this.xScale = this.createScaleLiner(this.props.fields.x, [0, innerWidth]);
            this.yScale = this.createScaleLiner(this.props.fields.y, [innerHeight, 0]);
    
            this.radiusScale = this.createScaleLiner(this.props.fields.z, [3, 10]);
    
            viewer.append("g")
            .attr("transform", "translate(0," + innerHeight + ")")
            .call(d3.axisBottom(this.xScale).tickSize(-innerHeight));
            
            // add the y Axis
            viewer.append("g")
                .call(d3.axisLeft(this.yScale).tickSize(-innerWidth));
    
    
    
            this.circles = viewer.selectAll("circle").data(this.state.data)
            .enter().append("circle")
            .attr("r", d => this.props.fields.z ? this.radiusScale(d[this.props.fields.z]) : 3)
            .attr("cx", d => this.xScale(d[this.props.fields.x]))
            .attr("cy", d => this.yScale(d[this.props.fields.y]))
            .attr("class", "brushed");
    
    
    
            this.brush = d3.brush().extent([[0,0],[innerWidth, innerHeight]])
                //.on("brush", this.brushed.bind(this))
                .on("end", this.end.bind(this)); 
    
            this.brush_area = viewer.append("g")
            
            .call(this.brush);
            
            this.componentDidUpdate()        
        }, 500);
        
        
    }
    brushed(){
        if (d3.event.selection != null) {
            // revert circles to initial style
            this.circles.attr("class", "non_brushed");
            // d3.event.selection
            var brush_coords = d3.event.selection
            // // style brushed circles
            this.circles.filter(function(d,i,nodes){
                      const node = nodes[i]
                       var cx = d3.select(node).attr("cx"),
                           cy = d3.select(node).attr("cy");
                       return this.isBrushed(brush_coords, cx, cy);
                   }.bind(this))
                   .attr("class", "brushed");
        }
    }
    end(){
        
        if (!d3.event.selection) return;
        var [x0, y0] = d3.event.selection[0],
        [x1, y1] = d3.event.selection[1];
        console.log('end', d3.event.selection)
        const filters = [
            {
                id:this.props.id,
                title:this.props.title,
                field:this.props.fields.x,
                operation:'range',
                values:[numFixed(this.xScale.invert(x0)),numFixed(this.xScale.invert(x1))]
            },
            {
                id:this.props.id,
                title:this.props.title,
                field:this.props.fields.y,
                operation:'range',
                values:[numFixed(this.yScale.invert(y1)),numFixed(this.yScale.invert(y0))]
            }
        ]
        console.log(filters)
        this.props.filterAdded(filters)
        this.brush_area.call(this.brush.move, null);



    }
    createBrush(){
    }

    isBrushed(brush_coords, cx, cy) {
        var [x0, y0] = brush_coords[0],
            [x1, y1] = brush_coords[1];
       return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1;
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
