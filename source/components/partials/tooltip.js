import * as d3 from 'd3';

/**
 * @function createTooltip
 * @description creates a tooltip div and mounts it to
 * the chart
 * @param {*} mount reference to the chart to mount tooltip on
 * @param {Function} addLabel function to generate text inside tooltip
 * @param {Object} offset the x and y offset from mouse position to position tooltip
 * @returns {Object} contains two functions: mousemove and mouseleave handlers
 */
function createTooltip(mount, addLabel, offset) {
  const tooltip = d3
    .select(mount)
    .append('div')
    .style('opacity', 1)
    .attr('class', 'tooltip')
    .style('display', 'none')
    .style('background-color', 'white')
    .style('border', 'solid')
    .style('border-width', '2px')
    .style('border-radius', '5px')
    .style('padding', '5px');

  const mousemove = function move(event, d) {
    const [x, y] = d3.pointer(event, this); // Use d3.pointer for mouse position
    tooltip
      .html(addLabel(d))
      .style('display', '')
      .style('left', `${offset.x + x}px`) // Position tooltip based on mouse position
      .style('top', `${offset.y + y}px`);
  };

  const mouseleave = function leave() {
    tooltip.style('display', 'none');
  };

  return { mousemove, mouseleave };
}

export default createTooltip;
