import * as d3 from 'd3';

/**
 * @function createTooltip
 * @description creates a tooltip dev and mount it to
 * the chart
 * @param {*} mount reference to the chart to mount tooltip on
 * @param {Function} addLabel function to generate text inside tooltip
 * @param {Object} offset the x and y offset from mouse position to position tooltip
 * @returns {Object} contains to function mousemove and mouseleave handlers
 */

function createTooltip(mount, addLabel, offset) {
  const tooltip = d3
    .select(mount)
    .append('div')
    .style('opacity', 0)
    .attr('class', 'tooltip')
    .style('background-color', 'white')
    .style('border', 'solid')
    .style('border-width', '2px')
    .style('border-radius', '5px')
    .style('padding', '5px');

  const mousemove = function move(d) {
    tooltip
      .html(addLabel(d))
      .style('opacity', 0.9)
      .style('left', `${offset.x + d3.mouse(mount)[0]}px`)
      .style('top', `${offset.y  + d3.mouse(mount)[1]}px`);
  };

  const mouseleave = function leave() {
    tooltip.style('opacity', 0);
  };

  return { mousemove, mouseleave };
}

export default createTooltip;
