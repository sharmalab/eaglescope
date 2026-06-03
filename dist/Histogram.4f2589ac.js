
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
parcelRegister("co29Q", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9049666f465908b4$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $9qn50 = parcelRequire("9qn50");

var $3RiQf = parcelRequire("3RiQf");

var $hbAn2 = parcelRequire("hbAn2");
/**
 * @function Histogram
 * @description Creates an interactive histogram chart
 *              User can select specific range of x by brushing
 * @param {Object} data - total data without filtering
 * @param {Array} fields - contains filed to create histogram on
 * @param {String} id - HTML id for the chart
 * @param {Integer} binsCount - number of bins to split data on
 * @param {Object} filterData - data after applying filters
 * @param {Array} filters - current filters
 * @param {Function} filterAdded - handler for adding new filter
 * @returns {Component}
 */ function $9049666f465908b4$var$Histogram({ data: data, fields: fields, id: id, binsCount: binsCount = 10, filterData: filterData, filters: filters, filterAdded: filterAdded, layout: layout }) {
    const svgRef = (0, $d4J5n.useRef)();
    const [Scales] = (0, $d4J5n.useState)({
        x: $9qn50.scaleLinear(),
        y: $9qn50.scaleLinear()
    });
    const [histogram] = (0, $d4J5n.useState)({
        hist: $9qn50.histogram(),
        bins: null
    });
    const margin = {
        top: 10,
        right: 10,
        bottom: 30,
        left: 40
    };
    // initialize svg and draw base histogram
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            $9qn50.select(svgRef.current).selectAll('svg').remove('svg');
            const rect = svgRef.current.getBoundingClientRect();
            const innerWidth = rect.width - margin.left - margin.right;
            const innerHeight = rect.height - margin.top - margin.bottom;
            const svg = $9qn50.select(svgRef.current).append('svg').attr('width', rect.width).attr('height', rect.height).append('g').attr('transform', `translate(${margin.left},${margin.top})`);
            Scales.x.domain([
                0,
                $9qn50.max(data, (d)=>d[fields.x])
            ]).range([
                0,
                innerWidth
            ]);
            histogram.hist.value((d)=>d[fields.x]).domain(Scales.x.domain()).thresholds(Scales.x.ticks(binsCount));
            histogram.bins = histogram.hist(data);
            Scales.y = $9qn50.scaleLinear().range([
                innerHeight,
                0
            ]).domain([
                0,
                $9qn50.max(histogram.bins, (d)=>d.length)
            ]);
            // brush
            const brush = $9qn50.brushX().extent([
                [
                    0,
                    0
                ],
                [
                    innerWidth,
                    innerHeight
                ]
            ]).on('end', ()=>{
                if ($9qn50.event.selection) {
                    const [x0, x1] = [
                        $9qn50.event.selection[0],
                        $9qn50.event.selection[1]
                    ];
                    filterAdded([
                        {
                            id: id,
                            field: fields.x,
                            operation: 'range',
                            values: [
                                (0, $hbAn2.numFixed)(Scales.x.invert(x0)),
                                (0, $hbAn2.numFixed)(Scales.x.invert(x1))
                            ]
                        }
                    ]);
                }
            });
            svg.append('g').call(brush);
            // draw x-axis
            svg.append('g').attr('transform', `translate(0,${innerHeight})`).call($9qn50.axisBottom(Scales.x));
            // draw y-axis
            const view = svg.append('g').call($9qn50.axisLeft(Scales.y)).append('g').attr('class', 'hist-area');
            // draw histogram rectangles
            view.selectAll('.bar').data(histogram.bins).join('rect').attr('class', 'bar').attr('x', 1).attr('transform', (d)=>`translate(${Scales.x(d.x0)},${Scales.y(d.length)})`).attr('width', (d)=>Math.max(Scales.x(d.x1) - Scales.x(d.x0) - 1, 0)).attr('height', (d)=>innerHeight - Scales.y(d.length)).style('fill', '#87CEFA');
        }, 100);
    }, [
        layout
    ]);
    // draw filtered histogram
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            const rect = svgRef.current.getBoundingClientRect();
            const innerHeight = rect.height - margin.top - margin.bottom;
            let { bins: bins } = histogram;
            if (filters.length !== 0) bins = histogram.hist(filterData);
            $9qn50.select(svgRef.current).selectAll('.hist-area').selectAll('.bar-f').data(bins).join('rect').attr('class', 'bar-f').style('transform', 'scale(1, -1)').attr('x', (d)=>Scales.x(d.x0)).attr('y', ()=>-innerHeight).transition().duration(1000).attr('width', (d)=>Math.max(Scales.x(d.x1) - Scales.x(d.x0) - 1, 0)).attr('height', (d)=>innerHeight - Scales.y(d.length)).style('fill', '#4682B4');
        }, 100);
    }, [
        filters,
        filterData,
        layout
    ]);
    return /*#__PURE__*/ (0, $228IU.jsx)("div", {
        id: id,
        ref: svgRef,
        style: {
            width: '100%',
            height: '100%'
        }
    });
}
var $9049666f465908b4$export$2e2bcd8739ae039 = $9049666f465908b4$var$Histogram;
$9049666f465908b4$var$Histogram.propTypes = {
    data: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    fields: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        x: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired
    }).isRequired,
    id: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    binsCount: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number,
    filterData: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filters: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filterAdded: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired,
    layout: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        width: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired,
        currentCols: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired
    }).isRequired
};
$9049666f465908b4$var$Histogram.defaultProps = {
    binsCount: 10
};

});


//# sourceMappingURL=Histogram.4f2589ac.js.map
