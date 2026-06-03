
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire06c0"];
var parcelRegister = parcelRequire.register;
parcelRegister("3MKTV", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $2c1a3c5c3a7da5d3$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $9qn50 = parcelRequire("9qn50");

var $3RiQf = parcelRequire("3RiQf");

var $264yM = parcelRequire("264yM");
function $2c1a3c5c3a7da5d3$var$PieChart(props) {
    const self = (0, $d4J5n.useRef)();
    const margin = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    };
    const data = $9qn50.nest().key((d)=>d[props.fields.x]).rollup((v)=>v.length).entries(props.data);
    const sum = $9qn50.sum(data, (d)=>d.value);
    const pie = $9qn50.pie().sortValues((a, b)=>b - a).value((d)=>d.value);
    const arcs = pie(data);
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            // Remove old svg if any
            $9qn50.select(self.current).select('.tooltip').remove('.tooltip');
            $9qn50.select(self.current).selectAll('svg').remove('svg');
            // calculate chart dimensions
            const rect = self.current.getBoundingClientRect();
            const innerWidth = rect.width - margin.left - margin.right;
            const innerHeight = rect.height - margin.top - margin.bottom;
            const radius = Math.min(innerWidth, innerHeight) / 2;
            const arc = $9qn50.arc().innerRadius(0).outerRadius(radius);
            const color = $9qn50.scaleOrdinal().domain(data.map((d)=>d.key)).range($9qn50.quantize((t)=>$9qn50.interpolateSpectral(t), data.length));
            const svg = $9qn50.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height);
            const viewer = svg.append('g').attr('transform', `translate(${innerWidth / 2 + margin.left},${innerHeight / 2 + margin.top})`);
            if (innerWidth > 500) {
                const legendG = svg.selectAll('.legend').data(arcs).enter().append('g').attr('transform', (d, i)=>`translate(${innerWidth - 110},${i * 15 + 20})`).attr('class', 'legend');
                legendG.append('rect') // make a matching color rect
                .attr('width', 13).attr('height', 13).attr('fill', (d, i)=>color(i)).attr('stroke', 'grey').style('stroke-width', '1px');
                legendG.append('text') // add the text
                .text((d)=>`${d.value}  ${d.data.key}`).style('font-size', 15).attr('y', 13).attr('x', 15);
            }
            // create a tooltip
            const addLabel = (d)=>`Class: ${d.data.key} Count: ${d.data.value} 
      Percentage: ${$9qn50.format('.0%')(d.data.value / sum)}`;
            const offset = {
                x: rect.width / 2 + 20,
                y: rect.height / 2
            };
            const tooltipHandlers = (0, $264yM.default)(self.current, addLabel, offset);
            const onClick = (d)=>{
                d.data.selected = !d.data.selected;
                const values = data.reduce((value, point)=>{
                    if (point.selected) value.push(point.key);
                    return value;
                }, []);
                if (values.length > 0) {
                    const filter = {
                        id: props.id,
                        title: props.title,
                        field: props.fields.x,
                        operation: 'in',
                        values: values
                    };
                    props.filterAdded([
                        filter
                    ]);
                } else props.filterRemove(props.id);
            };
            const pies = viewer.selectAll('path').data(arcs).join('path').attr('class', 'slide').attr('fill', (d)=>color(d.data.key)).attr('d', arc).on('mousemove', tooltipHandlers.mousemove).on('mouseleave', tooltipHandlers.mouseleave).on('click', onClick);
            const filters = props.filters.filter((f)=>f.id === props.id);
            if (filters.length > 0) filters[0].values.forEach((value)=>{
                data.forEach((d)=>{
                    if (d.key === value) d.selected = true;
                });
            });
            if (filters.length > 0) pies.attr('fill', (d)=>d.data.selected ? color(d.data.key) : '#C0C0C0').attr('fill-opacity', (d)=>d.data.selected ? 1 : 0.5).attr('stroke', '#CCCCCC').attr('stroke-width', (d)=>d.data.selected ? 3 : 0);
            else {
                data.forEach((d)=>{
                    d.selected = false;
                });
                pies.attr('fill', (d)=>color(d.data.key)).attr('fill-opacity', 1).attr('stroke', 'none');
            }
        }, 100);
    }, [
        props.layout,
        props.filters
    ]);
    return /*#__PURE__*/ (0, $228IU.jsx)("div", {
        style: {
            width: '100%',
            height: '100%'
        },
        children: /*#__PURE__*/ (0, $228IU.jsx)("div", {
            id: props.id,
            ref: self,
            style: {
                width: '100%',
                height: '100%'
            }
        })
    });
}
var $2c1a3c5c3a7da5d3$export$2e2bcd8739ae039 = $2c1a3c5c3a7da5d3$var$PieChart;
$2c1a3c5c3a7da5d3$var$PieChart.propTypes = {
    data: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    fields: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        x: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired
    }).isRequired,
    id: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    title: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    filters: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filterAdded: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired,
    filterRemove: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired,
    layout: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        width: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired,
        currentCols: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired
    }).isRequired
};

});
parcelRegister("264yM", function(module, exports) {

$parcel$export(module.exports, "default", () => $186fadd35887d42a$export$2e2bcd8739ae039);

var $9qn50 = parcelRequire("9qn50");
/**
 * @function createTooltip
 * @description creates a tooltip dev and mount it to
 * the chart
 * @param {*} mount reference to the chart to mount tooltip on
 * @param {Function} addLabel function to generate text inside tooltip
 * @param {Object} offset the x and y offset from mouse position to position tooltip
 * @returns {Object} contains to function mousemove and mouseleave handlers
 */ function $186fadd35887d42a$var$createTooltip(mount, addLabel, offset) {
    const tooltip = $9qn50.select(mount).append('div').style('opacity', 1).attr('class', 'tooltip').style('display', 'none').style('background-color', 'white').style('border', 'solid').style('border-width', '2px').style('border-radius', '5px').style('padding', '5px');
    const mousemove = function move(d) {
        tooltip.html(addLabel(d)).style('display', '').style('left', `${offset.x + $9qn50.mouse(this)[0]}px`).style('top', `${offset.y + $9qn50.mouse(this)[1]}px`);
    };
    const mouseleave = function leave() {
        tooltip.style('display', 'none');
    };
    return {
        mousemove: mousemove,
        mouseleave: mouseleave
    };
}
var $186fadd35887d42a$export$2e2bcd8739ae039 = $186fadd35887d42a$var$createTooltip;

});



//# sourceMappingURL=PieChart.36246cca.js.map
