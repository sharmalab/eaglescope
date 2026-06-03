
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
parcelRegister("kXDSm", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $f4283fd1f55e9fbe$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $3RiQf = parcelRequire("3RiQf");

var $9qn50 = parcelRequire("9qn50");
const $f4283fd1f55e9fbe$var$transformList = (data, f)=>{
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
const $f4283fd1f55e9fbe$var$transform = (data, field, isList = false)=>{
    if (isList) return $f4283fd1f55e9fbe$var$transformList(data, field);
    return $9qn50.nest().key((d)=>d[field]).sortKeys($9qn50.ascending).rollup((v)=>v.length).entries(data);
};
function $f4283fd1f55e9fbe$var$EnumList(props) {
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
    const fullData = $f4283fd1f55e9fbe$var$transform(props.data, props.fields.x, props.fields.isList);
    const self = (0, $d4J5n.useRef)();
    const scaleRef = (0, $d4J5n.useRef)();
    const hightRef = (0, $d4J5n.useRef)();
    const viewerRef = (0, $d4J5n.useRef)();
    const addList = (data, className = 'og')=>{
        const container = self.current;
        container.innerHTML = ''; // Clear previous content
        fullData.forEach((d)=>{
            const filteredCount = data.find((item)=>item.key === d.key)?.value || 0;
            let listItem = document.createElement('div');
            listItem.id = d.key;
            listItem.className = 'list-item';
            listItem.innerText = d.key;
            let listBadge = document.createElement("span");
            listBadge.innerText = filteredCount + "/" + d.value;
            listBadge.classList.add('badge');
            listBadge.classList.add('badge-secondary');
            listBadge.style.margin = "2px";
            listItem.appendChild(listBadge);
            listItem.onclick = onSelect;
            listItem.style.padding = "3px";
            container.appendChild(listItem);
        });
    };
    // Handle checkbox selection
    const onSelect = (e)=>{
        const value = e.target.id;
        const filter = props.fields.isList ? {
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
    };
    (0, $d4J5n.useEffect)(()=>{
        setTimeout(()=>{
            let data = [];
            if (props.filters.length > 0) data = $f4283fd1f55e9fbe$var$transform(props.filterData, props.fields.x, props.fields.isList);
            else data = fullData;
            addList(data, 'ft');
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
$f4283fd1f55e9fbe$var$EnumList.propTypes = {
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
    layout: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        width: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired,
        currentCols: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).number.isRequired
    }).isRequired
};
var $f4283fd1f55e9fbe$export$2e2bcd8739ae039 = $f4283fd1f55e9fbe$var$EnumList;

});


//# sourceMappingURL=EnumList.7ee2f4cb.js.map
