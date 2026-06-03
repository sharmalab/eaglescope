
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
parcelRegister("5dgYS", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $3cbb56b59f3c16ce$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $9qn50 = parcelRequire("9qn50");

var $3RiQf = parcelRequire("3RiQf");

var $hbAn2 = parcelRequire("hbAn2");
function $3cbb56b59f3c16ce$var$DensityChart(props) {
    let startPosition = [
        0,
        0
    ];
    let endPosition = [
        0,
        0
    ];
    const self = (0, $d4J5n.useRef)();
    const svg = (0, $d4J5n.useRef)();
    const scales = (0, $d4J5n.useRef)({
        x: $9qn50.scaleLinear(),
        y: $9qn50.scaleLinear()
    });
    const margin = {
        top: 10,
        right: 30,
        bottom: 20,
        left: 40
    };
    const end = ()=>{
        if (!$9qn50.event.selection) return;
        const [x0, y0] = [
            Math.min(startPosition[0], endPosition[0]),
            Math.min(startPosition[1], endPosition[1])
        ];
        const [x1, y1] = [
            Math.max(startPosition[0], endPosition[0]),
            Math.max(startPosition[1], endPosition[1])
        ];
        const filters = [
            {
                id: `${props.id}_x`,
                title: props.title,
                field: props.fields.x,
                operation: 'range',
                values: [
                    (0, $hbAn2.numFixed)(scales.current.x.invert(x0)),
                    (0, $hbAn2.numFixed)(scales.current.x.invert(x1))
                ]
            },
            {
                id: `${props.id}_y`,
                title: props.title,
                field: props.fields.y,
                operation: 'range',
                values: [
                    (0, $hbAn2.numFixed)(scales.current.y.invert(y1)),
                    (0, $hbAn2.numFixed)(scales.current.y.invert(y0))
                ]
            }
        ];
        props.filterAdded(filters);
    };
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            $9qn50.select(self.current).selectAll('svg').remove('svg');
            const rect = self.current.getBoundingClientRect();
            const innerWidth = rect.width - margin.left - margin.right;
            const innerHeight = rect.height - margin.top - margin.bottom;
            svg.current = $9qn50.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height).append('g').attr('transform', `translate(${margin.left},${margin.top})`);
            const paddingPercent = 0.1; // Adjust the percentage of padding as needed
            const domainExtentX = $9qn50.extent(props.data, (d)=>d[props.fields.x]);
            const domainPaddingX = (domainExtentX[1] - domainExtentX[0]) * paddingPercent;
            const domainExtentY = $9qn50.extent(props.data, (d)=>d[props.fields.y]);
            const domainPaddingY = (domainExtentY[1] - domainExtentY[0]) * paddingPercent;
            scales.current.x.domain([
                domainExtentX[0] - domainPaddingX,
                domainExtentX[1] + domainPaddingX
            ]).range([
                0,
                innerWidth
            ]);
            scales.current.y.domain([
                domainExtentY[0] - domainPaddingY,
                domainExtentY[1] + domainPaddingY
            ]).range([
                innerHeight,
                0
            ]);
            svg.current.append('g').attr('transform', `translate(0,${innerHeight})`).call($9qn50.axisBottom(scales.current.x));
            svg.current.append('g').call($9qn50.axisLeft(scales.current.y));
            const getCurrentMouseClickPosition = ()=>{
                const rec = svg.current.select('.overlay').node();
                const mouseX = $9qn50.event.sourceEvent.clientX - rec.getBoundingClientRect().x;
                const mouseY = $9qn50.event.sourceEvent.clientY - rec.getBoundingClientRect().y;
                return [
                    mouseX,
                    mouseY
                ];
            };
            const brush = $9qn50.brush().extent([
                [
                    0,
                    0
                ],
                [
                    innerWidth,
                    innerHeight
                ]
            ]).on('start', ()=>{
                startPosition = getCurrentMouseClickPosition();
                svg.current.selectAll('.selection').remove('rect');
            }).on('brush', ()=>{
                endPosition = getCurrentMouseClickPosition();
                svg.current.selectAll('.selected-area').remove('.selected-area');
                svg.current.selectAll('.selection').remove('rect');
                const startX = Math.min(startPosition[0], endPosition[0]);
                const startY = Math.min(startPosition[1], endPosition[1]);
                const selectArea = svg.current.append('rect').attr('class', 'selected-area').attr('position', 'absolute').attr('x', startX).attr('y', startY).attr('width', Math.abs(endPosition[0] - startPosition[0])).attr('height', Math.abs(endPosition[1] - startPosition[1])).attr('fill', 'rgba(130, 130, 130, 0.5)');
            }).on('end', ()=>{
                endPosition = getCurrentMouseClickPosition();
                svg.current.selectAll('.selected-area').remove('.selected-area');
                svg.current.selectAll('.selection').remove('rect');
                const startX = Math.min(startPosition[0], endPosition[0]);
                const startY = Math.min(startPosition[1], endPosition[1]);
                const selectedArea = svg.current.append('rect').attr('class', 'selected-area').attr('position', 'absolute').attr('x', startX).attr('y', startY).attr('width', Math.abs(endPosition[0] - startPosition[0])).attr('height', Math.abs(endPosition[1] - startPosition[1])).attr('fill', 'rgba(140, 140, 140, 0.5)');
                end();
                setTimeout(()=>{
                    selectedArea.remove();
                }, 20);
            });
            svg.current.append('g').call(brush);
        }, 100);
    }, [
        props.layout
    ]);
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            const rect = self.current.getBoundingClientRect();
            const innerWidth = rect.width - margin.left - margin.right;
            const innerHeight = rect.height - margin.top - margin.bottom;
            let { data: data } = props;
            if (props.filters.length !== 0) data = props.filterData;
            const k = 10 ** (-4 + Math.round(Math.log10(data.length)));
            const color = $9qn50.scaleLinear().domain([
                0,
                k
            ]).range([
                'white',
                '#4682b4'
            ]);
            const densityData = $9qn50.contourDensity().x((d)=>scales.current.x(d[props.fields.x])).y((d)=>scales.current.y(d[props.fields.y])).size([
                innerWidth,
                innerHeight
            ]).bandwidth(20)(data);
            svg.current.select('#draw_area').remove('g');
            svg.current.insert('g', 'g').attr('id', 'draw_area').selectAll('path').data(densityData).enter().append('path').attr('d', $9qn50.geoPath()).attr('fill', (d)=>color(d.value));
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
var $3cbb56b59f3c16ce$export$2e2bcd8739ae039 = $3cbb56b59f3c16ce$var$DensityChart;
$3cbb56b59f3c16ce$var$DensityChart.propTypes = {
    data: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    fields: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        x: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
        y: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired
    }).isRequired,
    id: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    filterData: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filters: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    layout: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        width: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired,
        currentCols: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired
    }).isRequired,
    filterAdded: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired,
    title: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired
};

});


//# sourceMappingURL=DensityChart.101252aa.js.map
