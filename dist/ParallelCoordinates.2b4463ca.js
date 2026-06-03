
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
parcelRegister("33x20", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $239b4642bd9930e2$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $9qn50 = parcelRequire("9qn50");

var $3RiQf = parcelRequire("3RiQf");

var $hbAn2 = parcelRequire("hbAn2");
function $239b4642bd9930e2$var$ParallelCoordinates(props) {
    const self = (0, $d4J5n.useRef)();
    const foregroundRef = (0, $d4J5n.useRef)();
    const backgroundRef = (0, $d4J5n.useRef)();
    const dimensions = props.fields.y;
    const scales = (0, $d4J5n.useRef)({
        x: $9qn50.scalePoint(),
        y: {}
    });
    const margin = {
        top: 25,
        right: 40,
        bottom: 20,
        left: 40
    };
    function path(d, ctx) {
        ctx.beginPath();
        dimensions.forEach((p, i)=>{
            if (i === 0) ctx.moveTo(scales.current.x(p), scales.current.y[p](d[p]));
            else ctx.lineTo(scales.current.x(p), scales.current.y[p](d[p]));
        });
        ctx.stroke();
    }
    function brush() {
        if (!$9qn50.event.selection) return;
        const field = dimensions.filter((d)=>scales.current.y[d].brush === $9qn50.event.target)[0];
        const [x1, x0] = [
            $9qn50.event.selection[0],
            $9qn50.event.selection[1]
        ];
        props.filterAdded([
            {
                id: props.id,
                title: props.title,
                field: field,
                operation: 'range',
                values: [
                    (0, $hbAn2.numFixed)(scales.current.y[field].invert(x0)),
                    (0, $hbAn2.numFixed)(scales.current.y[field].invert(x1))
                ]
            }
        ]);
    }
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            $9qn50.select(self.current).selectAll('canvas').remove('canvas');
            $9qn50.select(self.current).selectAll('svg').remove('svg');
            const rect = self.current.getBoundingClientRect();
            const innerWidth = rect.width - margin.left - margin.right;
            const innerHeight = rect.height - margin.top - margin.bottom;
            backgroundRef.current = $9qn50.select(self.current).append('canvas').attr('width', innerWidth).attr('height', innerHeight).style('transform', `translate(${margin.left}px,${margin.top}px)`);
            foregroundRef.current = $9qn50.select(self.current).append('canvas').attr('width', innerWidth).attr('height', innerHeight).style('transform', `translate(${margin.left}px,${margin.top - innerHeight - 5}px)`);
            backgroundRef.current = backgroundRef.current.node().getContext('2d');
            foregroundRef.current = foregroundRef.current.node().getContext('2d');
            foregroundRef.current.strokeStyle = 'rgba(0,100,160,0.24)';
            backgroundRef.current.strokeStyle = 'rgba(0,0,0,0.1)';
            const svg = $9qn50.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height).style('transform', `translate(${0}px,${-2 * innerHeight - margin.top / 2}px)`).append('g').style('transform', `translate(${margin.left}px,${margin.top}px)`);
            scales.current.x.domain(dimensions);
            scales.current.x.range([
                0,
                innerWidth
            ], 1);
            dimensions.forEach((d)=>{
                scales.current.y[d] = $9qn50.scaleLinear().domain($9qn50.extent(props.data, (p)=>+p[d])).range([
                    innerHeight,
                    0
                ]);
            });
            const g = svg.selectAll('.dimension').data(dimensions).enter().append('g').attr('class', 'dimension').attr('transform', (d)=>`translate(${scales.current.x(d)})`);
            // Add an axis and title.
            g.append('g').attr('class', 'axis').each(function addAxis(d) {
                $9qn50.select(this).call($9qn50.axisLeft(scales.current.y[d]));
            }).append('text').style('text-anchor', 'middle').attr('y', -9).text((d)=>d);
            g.append('g').attr('class', 'brush').each(function addBrush(d) {
                $9qn50.select(this).call(scales.current.y[d].brush = $9qn50.brushY().extent([
                    [
                        -10,
                        0
                    ],
                    [
                        10,
                        innerHeight
                    ]
                ]).on('end', brush));
            }).selectAll('rect').attr('x', -8).attr('width', 16);
        }, 100);
    }, [
        props.layout
    ]);
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            if (!props.filterData) return;
            const rect = self.current.getBoundingClientRect();
            const innerWidth = rect.width - margin.left - margin.right;
            const innerHeight = rect.height - margin.top - margin.bottom;
            // Render selected lines
            foregroundRef.current.clearRect(0, 0, innerWidth + 1, innerHeight + 1);
            backgroundRef.current.clearRect(0, 0, innerWidth + 1, innerHeight + 1);
            if (props.filters.length === 0) props.data.forEach((d)=>{
                path(d, foregroundRef.current);
            });
            else props.data.forEach((d)=>{
                if (props.filterData.includes(d)) path(d, foregroundRef.current);
                else path(d, backgroundRef.current);
            });
        }, 100);
    }, [
        props.filters,
        props.filterData,
        props.layout
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
var $239b4642bd9930e2$export$2e2bcd8739ae039 = $239b4642bd9930e2$var$ParallelCoordinates;
$239b4642bd9930e2$var$ParallelCoordinates.propTypes = {
    title: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    data: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filterData: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    fields: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        y: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string).isRequired
    }).isRequired,
    id: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    filters: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filterAdded: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired,
    layout: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        width: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired,
        currentCols: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired
    }).isRequired
};

});


//# sourceMappingURL=ParallelCoordinates.2b4463ca.js.map
