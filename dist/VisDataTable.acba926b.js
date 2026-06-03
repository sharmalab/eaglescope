
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
parcelRegister("14YEZ", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $0c95380664496742$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $lgRKc = parcelRequire("lgRKc");

var $85h6F = parcelRequire("85h6F");

var $3Cj5L = parcelRequire("3Cj5L");

var $8PPKb = parcelRequire("8PPKb");

var $b1VxU = parcelRequire("b1VxU");

var $3RiQf = parcelRequire("3RiQf");

var $lNjmz = parcelRequire("lNjmz");

const $0c95380664496742$var$cellRenderer = (d, f)=>{
    let urlElt;
    if (f.link && (f.link.url || f.link.field)) {
        const urlbase = f.link.url || '';
        urlElt = /*#__PURE__*/ (0, $228IU.jsx)("a", {
            target: "_blank",
            href: urlbase + d.rowData[f.link.field],
            children: d.cellData
        });
    } else if (f.link && f.link.url) urlElt = /*#__PURE__*/ (0, $228IU.jsx)("a", {
        target: "_blank",
        href: f.link.url,
        children: d.cellData
    });
    else urlElt = Array.isArray(d.cellData) ? d.cellData.join(', ') : d.cellData;
    return /*#__PURE__*/ (0, $228IU.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).Fragment, {
        children: /*#__PURE__*/ (0, $228IU.jsx)("div", {
            className: "ReactVirtualized__Table__headerTruncatedText",
            title: d.cellData,
            children: urlElt
        })
    }, f.dataKey);
};
const $0c95380664496742$var$rowClassName = ({ index: index })=>{
    if (index < 0) return 'headerRow';
    return index % 2 === 0 ? 'evenRow' : 'oddRow';
};
class $0c95380664496742$export$2e2bcd8739ae039 extends (0, $d4J5n.PureComponent) {
    constructor(props){
        super(props);
        const fWidth = 1 / this.props.fields.length;
        const fields = this.props.fields.map((f)=>({
                ...f,
                width: fWidth,
                isShow: true
            }));
        this.state = {
            fields: fields,
            width: null,
            sortBy: null,
            sortDirection: null
        };
        this.autoSizer = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).createRef();
        this.headerRenderer = this.headerRenderer.bind(this);
        this.resizeRow = this.resizeRow.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
        this.onCheckChangedHandler = this.onCheckChangedHandler.bind(this);
        this.onAllCheckHandler = this.onAllCheckHandler.bind(this);
        this.sortHandler = this.sortHandler.bind(this);
        this.getSortData = this.getSortData.bind(this);
    }
    onResize({ width: width }) {
        this.setState({
            width: width
        });
    }
    onSortEnd({ oldIndex: oldIndex, newIndex: newIndex }) {
        this.setState(({ fields: fields })=>({
                fields: (0, (/*@__PURE__*/$parcel$interopDefault($b1VxU)))(fields, oldIndex, newIndex)
            }));
    }
    onCheckChangedHandler(e) {
        const { value: value } = e.target;
        const { checked: checked } = e.target;
        this.setState(({ fields: fields })=>({
                fields: fields.map((f)=>{
                    f.isShow = f.dataKey === value ? checked : f.isShow;
                    return {
                        ...f
                    };
                })
            }));
    }
    onAllCheckHandler() {
        this.setState(({ fields: fields })=>({
                fields: fields.map((f)=>{
                    f.isShow = true;
                    return {
                        ...f
                    };
                })
            }));
    }
    getSortData() {
        const collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: 'base'
        });
        const { data: data, filterData: filterData, filters: filters } = this.props;
        const { sortBy: sortBy, sortDirection: sortDirection } = this.state;
        const currentData = filters.length > 0 ? filterData : data;
        return sortBy && sortDirection ? currentData.sort((a, b)=>{
            const first = sortDirection === (0, $lgRKc.SortDirection).ASC ? a : b;
            const second = sortDirection === (0, $lgRKc.SortDirection).ASC ? b : a;
            return collator.compare(first[sortBy], second[sortBy]);
        }) : currentData;
    }
    resizeRow({ dataKey: dataKey, deltaX: deltaX }) {
        const prevFields = this.state.fields;
        const idx = prevFields.findIndex((f)=>f.dataKey === dataKey);
        const percentDelta = deltaX / this.state.width;
        prevFields[idx].width += percentDelta;
        if (idx < prevFields.length - 1) prevFields[idx + 1].width = prevFields[idx + 1].width - percentDelta;
        this.setState({
            fields: [
                ...prevFields
            ]
        });
    }
    headerRenderer({ dataKey: dataKey, label: label, sortBy: sortBy, sortDirection: sortDirection }) {
        return /*#__PURE__*/ (0, $228IU.jsxs)((0, (/*@__PURE__*/$parcel$interopDefault($d4J5n))).Fragment, {
            children: [
                /*#__PURE__*/ (0, $228IU.jsx)("div", {
                    className: "ReactVirtualized__Table__headerTruncatedText",
                    title: label,
                    children: label
                }),
                /*#__PURE__*/ (0, $228IU.jsx)("div", {
                    children: sortBy === dataKey ? /*#__PURE__*/ (0, $228IU.jsx)((0, $3Cj5L.FontAwesomeIcon), {
                        icon: sortDirection === (0, $lgRKc.SortDirection).DESC ? (0, $8PPKb.faSortDown) : (0, $8PPKb.faSortUp)
                    }) : /*#__PURE__*/ (0, $228IU.jsx)((0, $3Cj5L.FontAwesomeIcon), {
                        icon: (0, $8PPKb.faSort)
                    })
                }),
                /*#__PURE__*/ (0, $228IU.jsx)((0, (/*@__PURE__*/$parcel$interopDefault($85h6F))), {
                    axis: "x",
                    defaultClassName: "DragHandle",
                    defaultClassNameDragging: "DragHandleActive",
                    onDrag: (event, { deltaX: deltaX })=>{
                        this.resizeRow({
                            dataKey: dataKey,
                            deltaX: deltaX
                        });
                    },
                    onStart: (event, { deltaX: deltaX })=>{
                        this.setState({
                            "isResize": true
                        });
                    },
                    onStop: (event, { deltaX: deltaX })=>{
                        setTimeout(()=>{
                            this.setState({
                                "isResize": false
                            });
                        }, 300); // 300 milliseconds delay
                    },
                    position: {
                        x: 0
                    },
                    zIndex: 999,
                    children: /*#__PURE__*/ (0, $228IU.jsx)("span", {
                        className: "DragHandleIcon",
                        onMouseDown: (event)=>event.stopPropagation(),
                        children: "\u22EE"
                    })
                })
            ]
        }, dataKey);
    }
    sortHandler({ sortBy: sortBy, sortDirection: sortDirection }) {
        if (!this.state.isResize) this.setState({
            sortBy: sortBy,
            sortDirection: sortDirection
        });
    }
    render() {
        const { fields: fields, sortBy: sortBy, sortDirection: sortDirection } = this.state;
        const finalData = this.getSortData();
        return /*#__PURE__*/ (0, $228IU.jsxs)("div", {
            style: {
                width: '100%',
                height: '100%'
            },
            children: [
                /*#__PURE__*/ (0, $228IU.jsx)((0, $lNjmz.default), {
                    list: fields,
                    onSortEnd: this.onSortEnd,
                    onCheckChanged: this.onCheckChangedHandler,
                    onAllCheck: this.onAllCheckHandler
                }),
                /*#__PURE__*/ (0, $228IU.jsx)((0, $lgRKc.AutoSizer), {
                    ref: this.autoSizer,
                    onResize: this.onResize,
                    children: ({ width: width, height: height })=>/*#__PURE__*/ (0, $228IU.jsx)((0, $lgRKc.Table), {
                            width: width,
                            height: height,
                            headerHeight: 25,
                            rowHeight: 20,
                            rowClassName: $0c95380664496742$var$rowClassName,
                            rowCount: finalData.length,
                            rowGetter: ({ index: index })=>finalData[index],
                            sort: this.sortHandler,
                            sortBy: sortBy,
                            sortDirection: sortDirection,
                            children: fields.map((f)=>/*#__PURE__*/ (0, $228IU.jsx)((0, $lgRKc.Column), {
                                    cellDataGetter: ({ rowData: rowData })=>rowData[f.dataKey],
                                    dataKey: f.dataKey,
                                    label: f.label,
                                    width: width * f.width,
                                    headerRenderer: this.headerRenderer,
                                    cellRenderer: (d)=>$0c95380664496742$var$cellRenderer(d, f)
                                }, f.dataKey))
                        })
                })
            ]
        });
    }
}
$0c95380664496742$export$2e2bcd8739ae039.propTypes = {
    data: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    filterData: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired,
    fields: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape()).isRequired,
    filters: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({})).isRequired
};

});


//# sourceMappingURL=VisDataTable.acba926b.js.map
