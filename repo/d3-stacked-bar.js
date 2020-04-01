// d3-stacked-bar.js

function d3_render(data, id, categoricalField, comparingField, quantityField){
	const container = d3.select(`#${id}`);
	container.text('');
	container.append('svg')
		.attr('width',900).attr('height',600)

	var svg = d3.select("svg"),
	    margin = {top: 30, right: 120, bottom: 30, left: 120},
	    width = +svg.attr("width") - margin.left - margin.right,
	    height = +svg.attr("height") - margin.top - margin.bottom,
	    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// const colors = ["#762a83", "#af8dc3", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#7fbf7b", "#1b7837"]
	const colors = ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]
	// const colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]
	var y = d3.scaleBand()			// x = d3.scaleBand()	
	    .range([0, height])	// .rangeRound([0, width])
	    .paddingInner(0.05)
	    //.paddingOuter(0.5)
	    .align(0.1);

	var x = d3.scaleLinear()		// y = d3.scaleLinear()
	    .range([0, width]);	// .rangeRound([height, 0]);

	var z = d3.scaleOrdinal()
	    .range(colors);




  
  // if (error) throw error;
  // the fields' name
  var keys = data.columns;
  
  // sort by total -> data
  data.sort(function(a, b) { return b.total - a.total; });
  y.domain(data.map(function(d) { return d[categoricalField]; }));
  
  x.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
  
  z.domain(keys);	

  g.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,0)")
      .call(d3.axisLeft(y));

  g.append("g")
      .attr("class", "axis")
	  .attr("transform", "translate(0,"+height+")")
      .call(d3.axisBottom(x).ticks(null, "s").tickSize(-height))
    .append("text")
      .attr("y", 2)
      .attr("x", x(x.ticks().pop()) + 0.5)
      .attr("dy", "0.32em")
      .attr("fill", "#000")
      .attr("font-weight", "bold")
      .attr("text-anchor", "start")
      //.text(comparingField)
	  //.attr("transform", "translate("+ (-width) +",-10)");   	// Newline

  g.append("g")
    .selectAll("g")
    .data(d3.stack().keys(keys)(data))
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("y", function(d) { return y(d.data[categoricalField]); })
      .attr("x", function(d) { return x(d[0]); })
      .attr("width", function(d) { return x(d[1]) - x(d[0]); })
      .attr("height", y.bandwidth())
    .on("mouseover", function() { tooltip.style("display", null); })
    .on("mouseout", function() { tooltip.style("display", "none"); })
    .on("mousemove", function(d) {
      const data = d3.select(this.parentNode).datum();
      // console.log(d, data)
      tooltip.style("left", `${d3.event.pageX + 20}px`);
      tooltip.style("top", `${d3.event.pageY }px`);
      tooltip.style("display", "block");
      tooltip.html(`<div><label>${categoricalField}:</label> ${d.data[categoricalField]}</div>
      	<div><label>${comparingField}:</label> ${data.key}</div>
      	<div><label>${quantityField}:</label> ${d[1]-d[0]}</div>`)
      
    });


   var lll = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
      .attr("transform","translate(150, 30)")
   lll.append('g').append('text')
      .attr("text-anchor", "start")
      .attr("x", width)
      .attr("dy", "0.32em")
      .attr("transform","translate(-25,10)")
      .attr("font-size",14).attr("font-weight", "bold")
    .text(comparingField)
    
    var legend = lll.selectAll("g")
    .data(keys.slice().reverse())
    .enter().append("g")
	 .attr("transform", function(d, i) { return `translate(0, ${(i * 20)})`; });
  

  
  legend.append("rect")
      .attr("x", width - 25)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", z);

  legend.append("text")
      .attr("x", width)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .attr("text-anchor", "start")
      .text(function(d) { return d; });

    // Prep the tooltip bits, initial display is hidden
    var tooltip = d3.select('body').append("div")
    .attr("class", "toolTip")
    .style("display", "none");


  // tooltip.append("rect")
  //   .attr("width", 140)
  //   .attr("height", 20)
  //   .attr("fill", "#cdcdcd")
  //   .style("opacity", 1);

  // tooltip.append("text")
  //   .attr("x", 0)
  //   .attr("dy", "1.2em")
  //   .style("text-anchor", "start")
  //   .attr("font-size", "12px")
  //   .attr("font-weight", "bold"); 
}