
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
parcelRegister("lAO8R", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $fb83dae46de2bc2c$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $9qn50 = parcelRequire("9qn50");

var $3RiQf = parcelRequire("3RiQf");

var $hbAn2 = parcelRequire("hbAn2");

var $264yM = parcelRequire("264yM");
function $fb83dae46de2bc2c$var$Heatmap(props) {
    const self = (0, $d4J5n.useRef)();
    const scales = {
        x: $9qn50.scaleBand(),
        y: $9qn50.scaleBand(),
        color: $9qn50.scaleSequential()
    };
    const margin = {
        top: 10,
        right: 10,
        bottom: 30,
        left: 60
    };
    const myGroups = $9qn50.map(props.data, (d)=>d[props.fields.x]).keys();
    const myVars = $9qn50.map(props.data, (d)=>d[props.fields.y]).keys();
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            // Remove old svg if any
            $9qn50.select(self.current).select('.tooltip').remove('div');
            $9qn50.select(self.current).selectAll('svg').remove('svg');
            const rect = self.current.getBoundingClientRect();
            const innerWidth = rect.width - margin.left - margin.right;
            const innerHeight = rect.height - margin.top - margin.bottom;
            let { data: data } = props;
            if (props.filters.length !== 0) data = props.filterData;
            const svg = $9qn50.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height).append('g').attr('transform', `translate(${margin.left},${margin.top})`);
            // Create and draw x-axis
            scales.x.range([
                0,
                innerWidth
            ]).domain(myGroups).padding(0.05);
            svg.append('g').style('font-size', 13).attr('transform', `translate(0,${innerHeight})`).call($9qn50.axisBottom(scales.x).tickSize(0)).select('.domain').remove();
            // Create and draw y-axis
            scales.y.range([
                innerHeight,
                0
            ]).domain(myVars).padding(0.05);
            svg.append('g').style('font-size', 13).call($9qn50.axisLeft(scales.y).tickSize(0)).select('.domain').remove();
            // Create color scale
            scales.color.interpolator($9qn50.interpolateInferno).domain($9qn50.extent(props.data, (d)=>d[props.fields.z]));
            // create a tooltip
            const addLabel = (d)=>`The ${props.fields.z} of this 
      cell is: ${(0, $hbAn2.numFixed)(d.z ? d.z : 0)}`;
            const offset = {
                x: 80,
                y: 0
            };
            const tooltipHandlers = (0, $264yM.default)(self.current, addLabel, offset);
            // Group data by the values of x and y
            // then aggregate to one value using mean
            // @TODO add option to choose different function such as: count, max, ..
            const visData = [];
            myGroups.forEach((g)=>myVars.forEach((v)=>{
                    const currentData = data.filter((d)=>d[props.fields.x] === g && d[props.fields.y] === v);
                    visData.push({
                        g: g,
                        v: v,
                        z: $9qn50.mean(currentData, (d)=>d[props.fields.z])
                    });
                }));
            // Draw each cell
            svg.selectAll().data(visData, (d)=>`${d.g}:${d.v}`).enter().append('rect').attr('x', (d)=>scales.x(d.g)).attr('y', (d)=>scales.y(d.v)).attr('rx', 4).attr('ry', 4).attr('width', scales.x.bandwidth()).attr('height', scales.y.bandwidth()).style('fill', (d)=>scales.color(d.z)).style('stroke-width', 4).style('stroke', 'none').style('opacity', 0.8).on('mousemove', tooltipHandlers.mousemove).on('mouseleave', tooltipHandlers.mouseleave).on('click', (d)=>{
                const filters = [
                    {
                        id: `${props.id}_x`,
                        title: props.title,
                        field: props.fields.x,
                        operation: 'in',
                        values: [
                            d.g
                        ]
                    },
                    {
                        id: `${props.id}_y`,
                        title: props.title,
                        field: props.fields.y,
                        operation: 'in',
                        values: [
                            d.v
                        ]
                    }
                ];
                props.filterAdded(filters);
            });
        }, 100);
    }, [
        props.layout,
        props.filters,
        props.filterData
    ]);
    return /*#__PURE__*/ (0, $228IU.jsx)("div", {
        id: props.id,
        ref: self,
        style: {
            width: '100%',
            height: '100%'
        }
    });
}
var $fb83dae46de2bc2c$export$2e2bcd8739ae039 = $fb83dae46de2bc2c$var$Heatmap;
$fb83dae46de2bc2c$var$Heatmap.propTypes = {
    id: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    title: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    data: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    fields: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        x: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
        y: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
        z: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired
    }).isRequired,
    filterData: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filters: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    layout: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        width: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired,
        currentCols: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired
    }).isRequired,
    filterAdded: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired
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



//# sourceMappingURL=Heatmap.7aa86810.js.map
