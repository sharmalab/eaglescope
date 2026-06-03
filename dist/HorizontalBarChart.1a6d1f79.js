
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
parcelRegister("5ENP6", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $41e7560ba8d6dae0$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $9qn50 = parcelRequire("9qn50");

var $3RiQf = parcelRequire("3RiQf");

var $264yM = parcelRequire("264yM");
const $41e7560ba8d6dae0$var$transformList = (data, f)=>{
    const map = new Map();
    data.forEach((d)=>{
        const items = d[f];
        if (Array.isArray(items)) items.forEach((i)=>{
            if (!map.has(i)) map.set(i, 0);
            map.set(i, map.get(i) + 1);
        });
        else {
            if (!map.has(items)) map.set(items, 0);
            map.set(items, map.get(items) + 1);
        }
    });
    return Array.from(map).map((d)=>({
            key: d[0],
            value: d[1]
        }));
};
const $41e7560ba8d6dae0$var$transform = (data, field, isList = false)=>{
    if (isList) return $41e7560ba8d6dae0$var$transformList(data, field);
    const collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });
    function collSort(a, b) {
        return collator.compare(b, a);
    }
    return $9qn50.nest().key((d)=>d[field]).sortKeys(collSort).rollup((v)=>v.length).entries(data);
};
function $41e7560ba8d6dae0$var$HorizontalBarChart(props) {
    const margin = {
        top: 10,
        right: 10,
        bottom: 35,
        left: 10
    };
    const fields = {
        y: 'key',
        x: 'value'
    };
    const fullData = $41e7560ba8d6dae0$var$transform(props.data, props.fields.y, props.fields.isList);
    const self = (0, $d4J5n.useRef)();
    const scaleRef = (0, $d4J5n.useRef)();
    const hightRef = (0, $d4J5n.useRef)();
    const viewerRef = (0, $d4J5n.useRef)();
    const createLogXScale = (f, width)=>{
        const maxValue = $9qn50.max(fullData, (d)=>d[f]);
        // for now, starting domain at 1 always.
        const xScale = $9qn50.scaleLog().domain([
            1,
            maxValue
        ]).range([
            0,
            width
        ]);
        return xScale;
    };
    const createXScale = (f, width)=>{
        const xScale = $9qn50.scaleLinear().domain([
            0,
            $9qn50.max(fullData, (d)=>d[f])
        ]).range([
            0,
            width
        ]);
        return xScale;
    };
    const createYScale = (f, height)=>{
        // set the ranges
        const yScale = $9qn50.scaleBand().domain(fullData.map((d)=>d[f])).range([
            height,
            0
        ]).padding(0.1);
        return yScale;
    };
    const formatTick = (d)=>d.toLocaleString();
    const createTextLabel = ()=>{
        viewerRef.current.selectAll('.label').remove();
        viewerRef.current.selectAll('.label').data(fullData, (d)=>d[fields.y]).enter().append('text').attr('class', 'label').attr('x', 5).attr('y', (d)=>scaleRef.current.y(d[fields.y]) + scaleRef.current.y.bandwidth() / 2 + 4).text((d)=>d.key).on('click', (x)=>{
            const filter = {
                id: props.id,
                title: props.title,
                field: props.fields.y,
                operation: 'eq',
                values: x.key
            };
            props.filterAdded([
                filter
            ]);
        });
    };
    const drawBar = (selection, data, className = 'og')=>{
        const addLabel = (d)=>`${d.key}: ${d.value}`;
        const offset = {
            x: 30,
            y: 10
        };
        const tooltipHandlers = (0, $264yM.default)(self.current, addLabel, offset);
        const updateBars = selection.selectAll(`rect.${className}`).data(data, (d)=>d[fields.y]);
        const enterBars = updateBars.enter().append('rect');
        enterBars.attr('class', `${className}`).attr('x', 0).attr('height', scaleRef.current.y.bandwidth()).attr('y', (d)=>scaleRef.current.y(d[fields.y]));
        enterBars.on('mousemove', tooltipHandlers.mousemove).on('mouseleave', tooltipHandlers.mouseleave).on('click', (enterData)=>{
            const selected = enterBars.filter((d)=>d === enterData);
            const value = selected.data()[0].key;
            const filter = props?.fields?.isList ? {
                id: props.id,
                title: props.title,
                field: props.fields.y,
                operation: 'has',
                values: value
            } : {
                id: props.id,
                title: props.title,
                field: props.fields.y,
                operation: 'eq',
                values: value
            };
            props.filterAdded([
                filter
            ]);
        });
        updateBars.merge(enterBars).transition().duration(1000).attr('width', (d)=>scaleRef.current.x(d[fields.x])).selectAll('.label').text((d)=>d.key);
        // update_bars
        updateBars.exit().transition().duration(1000).attr('width', 0).remove();
        return updateBars;
    };
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            $9qn50.select(self.current).selectAll('svg').remove('svg');
            const rect = self.current.getBoundingClientRect();
            const innerWidth = rect.width - margin.left - margin.right;
            const innerHeight = rect.height - margin.top - margin.bottom;
            hightRef.current = innerHeight;
            let tickCount = 4;
            // create svg
            const svg = $9qn50.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height);
            // create viewer
            viewerRef.current = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
            //
            let xScale = createXScale(fields.x, innerWidth);
            console.log(props);
            if (props.logScale) {
                xScale = createLogXScale(fields.x, innerWidth);
                tickCount = 2;
            }
            const yScale = createYScale(fields.y, innerHeight);
            scaleRef.current = {
                x: xScale,
                y: yScale
            };
            viewerRef.current.append('g').attr('transform', `translate(0,${innerHeight})`).call($9qn50.axisBottom(xScale).tickSize(-innerHeight).tickValues(xScale.ticks(tickCount)).tickFormat(formatTick));
            drawBar(viewerRef.current, fullData, 'og');
            createTextLabel();
        }, 100);
    }, [
        props.layout
    ]);
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            let data = [];
            if (props.filters.length > 0) data = $41e7560ba8d6dae0$var$transform(props.filterData, props.fields.y, props.fields.isList);
            else data = fullData;
            drawBar(viewerRef.current, data, 'ft');
            createTextLabel();
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
var $41e7560ba8d6dae0$export$2e2bcd8739ae039 = $41e7560ba8d6dae0$var$HorizontalBarChart;
$41e7560ba8d6dae0$var$HorizontalBarChart.propTypes = {
    data: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    fields: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        y: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
        isList: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).bool
    }).isRequired,
    id: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    title: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
    filterData: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filters: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filterAdded: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired,
    logScale: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).bool,
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



//# sourceMappingURL=HorizontalBarChart.1a6d1f79.js.map
