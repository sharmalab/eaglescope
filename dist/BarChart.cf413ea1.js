
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
parcelRegister("cGKaX", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $93cd39d620efafce$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $9qn50 = parcelRequire("9qn50");

var $3RiQf = parcelRequire("3RiQf");

var $264yM = parcelRequire("264yM");
const $93cd39d620efafce$var$transformList = (data, f)=>{
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
const $93cd39d620efafce$var$transform = (data, field, isList = false)=>{
    if (isList) return $93cd39d620efafce$var$transformList(data, field);
    const collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });
    function collSort(a, b) {
        return collator.compare(b, a);
    }
    return $9qn50.nest().key((d)=>d[field]).sortKeys(collSort).rollup((v)=>v.length).entries(data);
};
const $93cd39d620efafce$var$wrap = (text, width)=>{
    text.each(function updateBars() {
        const currentText = $9qn50.select(this);
        const words = currentText.text().split(/\s+/).reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 1.1; // ems
        const y = currentText.attr('y');
        const dy = parseFloat(currentText.attr('dy'));
        let tspan = currentText.text(null).append('tspan').attr('x', 0).attr('y', y).attr('dy', `${dy}em`);
        word = words.pop();
        while(word){
            line.push(word);
            tspan.text(line.join(' '));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(' '));
                line = [
                    word
                ];
                tspan = currentText.append('tspan').attr('x', 0).attr('y', y).attr('dy', `${++lineNumber * lineHeight + dy}em`).text(word);
            }
            word = words.pop();
        }
    });
};
function $93cd39d620efafce$var$BarChart(props) {
    const margin = {
        top: 10,
        right: 10,
        bottom: 35,
        left: 35
    };
    const fields = {
        x: 'key',
        y: 'value'
    };
    const fullData = $93cd39d620efafce$var$transform(props.data, props.fields.x, props.fields.isList);
    const self = (0, $d4J5n.useRef)();
    const scaleRef = (0, $d4J5n.useRef)();
    const hightRef = (0, $d4J5n.useRef)();
    const viewerRef = (0, $d4J5n.useRef)();
    const createXScale = (f, width)=>{
        // set the ranges
        const xScale = $9qn50.scaleBand().domain(fullData.map((d)=>d[f]).flat()).range([
            0,
            width
        ]).padding(0.1);
        return xScale;
    };
    const createYScale = (f, height)=>{
        const yScale = $9qn50.scaleLinear().domain([
            0,
            $9qn50.max(fullData, (d)=>d[f])
        ]).range([
            height,
            0
        ]);
        return yScale;
    };
    const createLogYScale = (f, height)=>{
        const yScale = $9qn50.scaleLog().domain([
            1,
            $9qn50.max(fullData, (d)=>d[f])
        ]).range([
            height,
            0
        ]);
        return yScale;
    };
    const formatTick = (d)=>d.toLocaleString();
    const drawBar = (selection, data, className = 'og')=>{
        const addLabel = (d)=>`${d.key}: ${d.value}`;
        const offset = {
            x: 60,
            y: 0
        };
        const tooltipHandlers = (0, $264yM.default)(self.current, addLabel, offset);
        const updateBars = selection.selectAll(`rect.${className}`).data(data, (d)=>d[fields.x]);
        const enterBars = updateBars.enter().append('rect');
        enterBars.attr('class', `${className}`).attr('x', (d)=>scaleRef.current.x(d[fields.x])).attr('width', scaleRef.current.x.bandwidth()).attr('y', hightRef.current);
        enterBars.on('mousemove', tooltipHandlers.mousemove).on('mouseleave', tooltipHandlers.mouseleave).on('click', (currentData)=>{
            const selected = enterBars.filter((d)=>d === currentData);
            const value = selected.data()[0].key;
            const filter = props?.fields?.isList ? {
                id: props.id,
                title: props.title,
                field: props.fields.x,
                operation: 'has',
                values: value
            } : {
                id: props.id,
                title: props.title,
                field: props.fields.x,
                operation: 'eq',
                values: value
            };
            props.filterAdded([
                filter
            ]);
        });
        updateBars.merge(enterBars).transition().duration(1000).attr('y', (d)=>scaleRef.current.y(d[fields.y])).attr('height', (d)=>hightRef.current - scaleRef.current.y(d[fields.y]));
        // update_bars
        updateBars.exit().transition().duration(1000).attr('y', hightRef.current).attr('height', 0).remove();
        return updateBars;
    };
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            $9qn50.select(self.current).selectAll('svg').remove('svg');
            const rect = self.current.getBoundingClientRect();
            const innerWidth = rect.width - margin.left - margin.right;
            const innerHeight = rect.height - margin.top - margin.bottom;
            hightRef.current = innerHeight;
            // create svg
            const svg = $9qn50.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height);
            // create viewer
            viewerRef.current = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
            const xScale = createXScale(fields.x, innerWidth);
            let yTickCount = 4;
            let yScale = createYScale(fields.y, innerHeight);
            if (props.logScale) {
                yScale = createLogYScale(fields.y, innerHeight);
                yTickCount = 2;
            }
            scaleRef.current = {
                x: xScale,
                y: yScale
            };
            const xAxis = $9qn50.axisBottom(xScale);
            viewerRef.current.append('g').attr('class', 'x axis').attr('transform', `translate(0,${innerHeight})`).call(xAxis).selectAll('.tick text').call($93cd39d620efafce$var$wrap, xScale.bandwidth());
            // add the y Axis
            const yAxis = $9qn50.axisLeft(yScale).tickSize(-innerWidth).tickFormat(formatTick).tickValues(yScale.ticks(yTickCount));
            viewerRef.current.append('g').call(yAxis);
            drawBar(viewerRef.current, fullData, 'og');
        }, 100);
    }, [
        props.layout
    ]);
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            let data = [];
            if (props.filters.length > 0) data = $93cd39d620efafce$var$transform(props.filterData, props.fields.x, props.fields.isList);
            else data = fullData;
            drawBar(viewerRef.current, data, 'ft');
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
var $93cd39d620efafce$export$2e2bcd8739ae039 = $93cd39d620efafce$var$BarChart;
$93cd39d620efafce$var$BarChart.propTypes = {
    data: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    fields: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        x: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired,
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



//# sourceMappingURL=BarChart.cf413ea1.js.map
