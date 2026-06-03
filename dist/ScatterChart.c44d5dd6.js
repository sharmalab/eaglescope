
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
parcelRegister("jedut", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $dff9ca1381532fcd$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $9qn50 = parcelRequire("9qn50");

var $3RiQf = parcelRequire("3RiQf");

var $hbAn2 = parcelRequire("hbAn2");
class $dff9ca1381532fcd$export$2e2bcd8739ae039 extends (0, $d4J5n.PureComponent) {
    constructor(props){
        super(props);
        this.self = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).createRef();
        this.state = {
            margin: {
                top: 5,
                right: 10,
                bottom: 25,
                left: 25
            }
        };
        this.state.data = this.props.data.filter((d)=>d[this.props.fields.x] !== 'N/A' && d[this.props.fields.y] !== 'N/A' && d[this.props.fields.z] !== 'N/A');
    }
    componentDidMount() {
        this.componentDidUpdate();
    }
    componentDidUpdate() {
        setTimeout(()=>{
            $9qn50.select(this.self.current).selectAll('canvas').remove('canvas');
            $9qn50.select(this.self.current).selectAll('svg').remove('svg');
            this.rect = this.self.current.getBoundingClientRect();
            const innerWidth = this.rect.width - this.state.margin.left - this.state.margin.right;
            const innerHeight = this.rect.height - this.state.margin.top - this.state.margin.bottom;
            this.canvas = $9qn50.select(this.self.current).append('canvas').attr('width', innerWidth).attr('height', innerHeight).style('transform', `translate(${this.state.margin.left}px,${this.state.margin.top}px)`);
            // create svg
            const svg = $9qn50.select(this.self.current).append('svg').attr('width', this.rect.width).attr('height', this.rect.height).attr('transform', `translate(${0},${-innerHeight})`);
            // create viewer
            const viewer = svg.append('g').attr('transform', `translate(${this.state.margin.left},0)`);
            //
            this.xScale = this.createScaleLiner(this.props.fields.x, [
                0,
                innerWidth
            ]);
            this.yScale = this.createScaleLiner(this.props.fields.y, [
                innerHeight,
                0
            ]);
            this.radiusScale = this.createScaleLiner(this.props.fields.z, [
                3,
                10
            ]);
            const getCurrentMouseClickPosition = ()=>{
                console.log(svg);
                const mouseX = $9qn50.event.sourceEvent.clientX - svg.node().getBoundingClientRect().x - this.state.margin.left;
                const mouseY = $9qn50.event.sourceEvent.clientY - svg.node().getBoundingClientRect().y;
                return [
                    mouseX,
                    mouseY
                ];
            };
            viewer.append('g').attr('transform', `translate(0,${innerHeight})`).call($9qn50.axisBottom(this.xScale).tickSize(-innerHeight));
            // add the y Axis
            viewer.append('g').call($9qn50.axisLeft(this.yScale).tickSize(-innerWidth));
            this.brush = $9qn50.brush().extent([
                [
                    0,
                    0
                ],
                [
                    innerWidth,
                    innerHeight
                ]
            ]).on('start', ()=>{
                this.startPosition = getCurrentMouseClickPosition();
            }).on('brush', ()=>{
                this.endPosition = getCurrentMouseClickPosition();
                svg.selectAll('rect').remove('rect');
                const startX = Math.min(this.startPosition[0], this.endPosition[0]);
                const startY = Math.min(this.startPosition[1], this.endPosition[1]);
                const selectedArea = svg.append('rect').attr('position', 'absolute').attr('x', startX + this.state.margin.left).attr('y', startY).attr('width', Math.abs(this.endPosition[0] - this.startPosition[0])).attr('height', Math.abs(this.endPosition[1] - this.startPosition[1])).attr('fill', 'rgba(211, 211, 211, 0.5)');
            }).on('end', ()=>{
                this.endPosition = getCurrentMouseClickPosition();
                svg.selectAll('rect').remove('rect');
                const startX = Math.min(this.startPosition[0], this.endPosition[0]);
                const startY = Math.min(this.startPosition[1], this.endPosition[1]);
                const selectedArea = svg.append('rect').attr('position', 'absolute').attr('x', startX + this.state.margin.left).attr('y', startY).attr('width', Math.abs(this.endPosition[0] - this.startPosition[0])).attr('height', Math.abs(this.endPosition[1] - this.startPosition[1])).attr('fill', 'rgba(211, 211, 211, 0.5)');
                this.end();
            });
            viewer.append('g').call(this.brush);
            this.draw();
        }, 100);
    }
    drawPoint(point) {
        const cx = this.xScale(point[this.props.fields.x]);
        const cy = this.yScale(point[this.props.fields.y]);
        const r = this.props.fields.z ? this.radiusScale(point[this.props.fields.z]) : 3;
        this.context.beginPath();
        this.context.arc(cx, cy, r, 0, 2 * Math.PI);
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
    }
    draw() {
        this.context = this.canvas.node().getContext('2d');
        this.context.clearRect(0, 0, this.rect.width, this.rect.height);
        this.context.fillStyle = '#87CEEB';
        this.context.strokeWidth = 1;
        this.context.strokeStyle = '#4682B4';
        this.context.globalAlpha = 1;
        if (this.props.filters.length === 0) this.state.data.forEach((point)=>{
            this.drawPoint(point);
        });
        else this.state.data.forEach((point)=>{
            if (this.props.filterData.includes(point)) {
                this.context.fillStyle = '#87CEEB';
                this.context.strokeWidth = 1;
                this.context.strokeStyle = '#4682B4';
                this.context.globalAlpha = 1;
            } else {
                this.context.fillStyle = '#c0c0c0c0';
                this.context.strokeWidth = 1;
                this.context.strokeStyle = '#000000';
                this.context.globalAlpha = 0.2;
            }
            this.drawPoint(point);
        });
    }
    createScaleLiner(f, range) {
        const paddingPercent = 0.1; // Adjust the percentage of padding as needed
        const domainExtent = $9qn50.extent(this.state.data, (d)=>d[f]);
        const domainPadding = (domainExtent[1] - domainExtent[0]) * paddingPercent;
        const scaleLiner = $9qn50.scaleLinear().domain([
            domainExtent[0] - domainPadding,
            domainExtent[1] + domainPadding
        ]).range(range).nice();
        return scaleLiner;
    }
    end() {
        if (!$9qn50.event.selection) return;
        const [x0, y0] = [
            Math.min(this.startPosition[0], this.endPosition[0]),
            Math.min(this.startPosition[1], this.endPosition[1])
        ];
        const [x1, y1] = [
            Math.max(this.startPosition[0], this.endPosition[0]),
            Math.max(this.startPosition[1], this.endPosition[1])
        ];
        const filters = [
            {
                id: `${this.props.id}_x`,
                title: this.props.title,
                field: this.props.fields.x,
                operation: 'range',
                values: [
                    (0, $hbAn2.numFixed)(this.xScale.invert(x0)),
                    (0, $hbAn2.numFixed)(this.xScale.invert(x1))
                ]
            },
            {
                id: `${this.props.id}_y`,
                title: this.props.title,
                field: this.props.fields.y,
                operation: 'range',
                values: [
                    (0, $hbAn2.numFixed)(this.yScale.invert(y1)),
                    (0, $hbAn2.numFixed)(this.yScale.invert(y0))
                ]
            }
        ];
        this.props.filterAdded(filters);
    }
    render() {
        return /*#__PURE__*/ (0, $228IU.jsx)("div", {
            id: this.props.id,
            ref: this.self,
            style: {
                width: '100%',
                height: '100%'
            }
        });
    }
}
$dff9ca1381532fcd$export$2e2bcd8739ae039.propTypes = {
    data: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filterData: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    fields: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        x: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
        y: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
        z: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string
    }).isRequired,
    id: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    title: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    filters: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filterAdded: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired
};

});


//# sourceMappingURL=ScatterChart.c44d5dd6.js.map
