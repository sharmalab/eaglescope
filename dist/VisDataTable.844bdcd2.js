
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire06c0"];
var parcelRegister = parcelRequire.register;
parcelRegister("b1VxU", function(module, exports) {
'use strict';
const $807c6d215e761a3c$var$arrayMoveMutate = (array, from, to)=>{
    const startIndex = from < 0 ? array.length + from : from;
    if (startIndex >= 0 && startIndex < array.length) {
        const endIndex = to < 0 ? array.length + to : to;
        const [item] = array.splice(from, 1);
        array.splice(endIndex, 0, item);
    }
};
const $807c6d215e761a3c$var$arrayMove = (array, from, to)=>{
    array = [
        ...array
    ];
    $807c6d215e761a3c$var$arrayMoveMutate(array, from, to);
    return array;
};
module.exports = $807c6d215e761a3c$var$arrayMove;
module.exports.mutate = $807c6d215e761a3c$var$arrayMoveMutate;

});

parcelRegister("lNjmz", function(module, exports) {

$parcel$export(module.exports, "default", () => $fddd31a77b8c36be$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");

var $d4J5n = parcelRequire("d4J5n");

var $3RiQf = parcelRequire("3RiQf");

var $lg1bb = parcelRequire("lg1bb");

var $fLoiC = parcelRequire("fLoiC");

var $6s6up = parcelRequire("6s6up");

var $3Cj5L = parcelRequire("3Cj5L");

var $8PPKb = parcelRequire("8PPKb");

var $3w3I8 = parcelRequire("3w3I8");

var $72myY = parcelRequire("72myY");

class $fddd31a77b8c36be$export$2e2bcd8739ae039 extends (0, $d4J5n.PureComponent) {
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.renderPopOver = this.renderPopOver.bind(this);
    }
    onClickHandler() {
        this.setState((prevState)=>({
                show: !prevState.show
            }));
    }
    renderPopOver(props) {
        return /*#__PURE__*/ (0, $228IU.jsxs)((0, $fLoiC.default), {
            ...props,
            children: [
                /*#__PURE__*/ (0, $228IU.jsxs)((0, $fLoiC.default).Header, {
                    as: "div",
                    children: [
                        /*#__PURE__*/ (0, $228IU.jsx)("div", {
                            className: "text-primary",
                            style: {
                                padding: '0 .5rem'
                            },
                            children: /*#__PURE__*/ (0, $228IU.jsx)((0, $3Cj5L.FontAwesomeIcon), {
                                icon: (0, $8PPKb.faArrowsAltV)
                            })
                        }),
                        /*#__PURE__*/ (0, $228IU.jsx)("div", {
                            className: "text-primary",
                            children: "Fields"
                        }),
                        /*#__PURE__*/ (0, $228IU.jsx)((0, $3w3I8.default), {
                            variant: "light text-primary",
                            size: "sm",
                            onClick: this.props.onAllCheck,
                            style: {
                                fontSize: '.85rem'
                            },
                            className: "py-0 px-1 border-gray",
                            children: /*#__PURE__*/ (0, $228IU.jsx)((0, $3Cj5L.FontAwesomeIcon), {
                                icon: (0, $8PPKb.faCheckSquare)
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $228IU.jsx)((0, $fLoiC.default).Body, {
                    children: /*#__PURE__*/ (0, $228IU.jsx)((0, $lg1bb.ReactSortable), {
                        list: this.props.list.map((item)=>({
                                ...item,
                                id: item.dataKey
                            })),
                        setList: ()=>{},
                        onEnd: ({ oldIndex: oldIndex, newIndex: newIndex })=>{
                            document.body.style.cursor = 'default';
                            this.props.onSortEnd({
                                oldIndex: oldIndex,
                                newIndex: newIndex
                            });
                        },
                        onStart: ()=>{
                            document.body.style.cursor = 'grabbing';
                        },
                        handle: ".drag-handle",
                        children: this.props.list.map((item, index)=>/*#__PURE__*/ (0, $228IU.jsx)((0, $72myY.default), {
                                ...item,
                                index: index,
                                onCheckChanged: this.props.onCheckChanged
                            }, `item-${item.dataKey}`))
                    })
                })
            ]
        });
    }
    render() {
        const style = {
            position: 'absolute',
            right: 0,
            color: 'var(--gray)'
        };
        return /*#__PURE__*/ (0, $228IU.jsx)((0, $6s6up.default), {
            trigger: "click",
            placement: "bottom-end",
            overlay: this.renderPopOver,
            children: /*#__PURE__*/ (0, $228IU.jsx)((0, $3w3I8.default), {
                variant: "light",
                style: style,
                className: "py-0 px-1 border-gray",
                onClick: this.onClickHandler,
                active: this.state.show,
                children: /*#__PURE__*/ (0, $228IU.jsx)((0, $3Cj5L.FontAwesomeIcon), {
                    icon: (0, $8PPKb.faCog)
                })
            })
        });
    }
}
$fddd31a77b8c36be$export$2e2bcd8739ae039.propTypes = {
    onAllCheck: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired,
    onCheckChanged: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired,
    onSortEnd: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).func.isRequired,
    list: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).arrayOf((0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).shape({
        dataKey: (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).string.isRequired
    })).isRequired
};

});
parcelRegister("lg1bb", function(module, exports) {

var $5qoop = parcelRequire("5qoop");

var $bAWpm = parcelRequire("bAWpm");

var $d4J5n = parcelRequire("d4J5n");

var $4PZmT = parcelRequire("4PZmT");
function $f79c01c9962a1583$var$$parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $f79c01c9962a1583$var$$parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $f79c01c9962a1583$var$$parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
$f79c01c9962a1583$var$$parcel$export(module.exports, "Sortable", ()=>$882b6d93070905b3$re_export$Sortable);
$f79c01c9962a1583$var$$parcel$export(module.exports, "Direction", ()=>$882b6d93070905b3$re_export$Direction);
$f79c01c9962a1583$var$$parcel$export(module.exports, "DOMRect", ()=>$882b6d93070905b3$re_export$DOMRect);
$f79c01c9962a1583$var$$parcel$export(module.exports, "GroupOptions", ()=>$882b6d93070905b3$re_export$GroupOptions);
$f79c01c9962a1583$var$$parcel$export(module.exports, "MoveEvent", ()=>$882b6d93070905b3$re_export$MoveEvent);
$f79c01c9962a1583$var$$parcel$export(module.exports, "Options", ()=>$882b6d93070905b3$re_export$Options);
$f79c01c9962a1583$var$$parcel$export(module.exports, "PullResult", ()=>$882b6d93070905b3$re_export$PullResult);
$f79c01c9962a1583$var$$parcel$export(module.exports, "PutResult", ()=>$882b6d93070905b3$re_export$PutResult);
$f79c01c9962a1583$var$$parcel$export(module.exports, "SortableEvent", ()=>$882b6d93070905b3$re_export$SortableEvent);
$f79c01c9962a1583$var$$parcel$export(module.exports, "SortableOptions", ()=>$882b6d93070905b3$re_export$SortableOptions);
$f79c01c9962a1583$var$$parcel$export(module.exports, "Utils", ()=>$882b6d93070905b3$re_export$Utils);
$f79c01c9962a1583$var$$parcel$export(module.exports, "ReactSortable", ()=>$f79c01c9962a1583$var$$7fe8e3ea572bda7a$export$11bbed9ee0012c13);
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$1d0aa160432dfea5(node) {
    if (node.parentElement !== null) node.parentElement.removeChild(node);
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$6d240faa51aa562f(parent, newChild, index) {
    const refChild = parent.children[index] || null;
    parent.insertBefore(newChild, refChild);
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$d7d742816c28cf91(customs) {
    $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$77f49a256021c8de(customs);
    $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs);
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$77f49a256021c8de(customs) {
    customs.forEach((curr)=>$f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$1d0aa160432dfea5(curr.element));
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs) {
    customs.forEach((curr)=>{
        $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$6d240faa51aa562f(curr.parentElement, curr.element, curr.oldIndex);
    });
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$4655efe700f887a(evt, list) {
    const mode = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$1fc0f6205829e19c(evt);
    const parentElement = {
        parentElement: evt.from
    };
    let custom = [];
    switch(mode){
        case "normal":
            /* eslint-disable */ const item = {
                element: evt.item,
                newIndex: evt.newIndex,
                oldIndex: evt.oldIndex,
                parentElement: evt.from
            };
            custom = [
                item
            ];
            break;
        case "swap":
            const drag = {
                element: evt.item,
                oldIndex: evt.oldIndex,
                newIndex: evt.newIndex,
                ...parentElement
            };
            const swap = {
                element: evt.swapItem,
                oldIndex: evt.newIndex,
                newIndex: evt.oldIndex,
                ...parentElement
            };
            custom = [
                drag,
                swap
            ];
            break;
        case "multidrag":
            custom = evt.oldIndicies.map((curr, index)=>({
                    element: curr.multiDragElement,
                    oldIndex: curr.index,
                    newIndex: evt.newIndicies[index].index,
                    ...parentElement
                }));
            break;
    }
    /* eslint-enable */ const customs = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$bc06a3af7dc65f53(custom, list);
    return customs;
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$c25cf8080bd305ec(normalized, list) {
    const a = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$be2da95e6167b0bd(normalized, list);
    const b = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$eca851ee65ae17e4(normalized, a);
    return b;
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$be2da95e6167b0bd(normalized, list) {
    const newList = [
        ...list
    ];
    normalized.concat().reverse().forEach((curr)=>newList.splice(curr.oldIndex, 1));
    return newList;
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$eca851ee65ae17e4(normalized, list, evt, clone) {
    const newList = [
        ...list
    ];
    normalized.forEach((curr)=>{
        const newItem = clone && evt && clone(curr.item, evt);
        newList.splice(curr.newIndex, 0, newItem || curr.item);
    });
    return newList;
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$1fc0f6205829e19c(evt) {
    if (evt.oldIndicies && evt.oldIndicies.length > 0) return "multidrag";
    if (evt.swapItem) return "swap";
    return "normal";
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$bc06a3af7dc65f53(inputs, list) {
    const normalized = inputs.map((curr)=>({
            ...curr,
            item: list[curr.oldIndex]
        })).sort((a, b)=>a.oldIndex - b.oldIndex);
    return normalized;
}
function $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$7553c81e62e31b7e(props) {
    /* eslint-disable */ const { list: list, setList: setList, children: children, tag: tag, style: style, className: className, clone: clone, onAdd: onAdd, onChange: onChange, onChoose: onChoose, onClone: onClone, onEnd: onEnd, onFilter: onFilter, onRemove: onRemove, onSort: onSort, onStart: onStart, onUnchoose: onUnchoose, onUpdate: onUpdate, onMove: onMove, onSpill: onSpill, onSelect: onSelect, onDeselect: onDeselect, ...options } = props;
    /* eslint-enable */ return options;
}
/** Holds a global reference for which react element is being dragged */ // @todo - use context to manage this. How does one use 2 different providers?
const $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store = {
    dragging: null
};
class $f79c01c9962a1583$var$$7fe8e3ea572bda7a$export$11bbed9ee0012c13 extends $d4J5n.Component {
    /* eslint-disable-next-line */ static defaultProps = {
        clone: (item)=>item
    };
    constructor(props){
        super(props);
        // @todo forward ref this component
        this.ref = /*#__PURE__*/ (0, $d4J5n.createRef)();
        // make all state false because we can't change sortable unless a mouse gesture is made.
        const newList = [
            ...props.list
        ].map((item)=>Object.assign(item, {
                chosen: false,
                selected: false
            }));
        props.setList(newList, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
        $f79c01c9962a1583$var$$parcel$interopDefault($4PZmT)(!props.plugins, `
Plugins prop is no longer supported.
Instead, mount it with "Sortable.mount(new MultiDrag())"
Please read the updated README.md at https://github.com/SortableJS/react-sortablejs.
      `);
    }
    componentDidMount() {
        if (this.ref.current === null) return;
        const newOptions = this.makeOptions();
        $f79c01c9962a1583$var$$parcel$interopDefault($5qoop).create(this.ref.current, newOptions);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.disabled !== this.props.disabled && this.sortable) this.sortable.option("disabled", this.props.disabled);
    }
    render() {
        const { tag: tag, style: style, className: className, id: id } = this.props;
        const classicProps = {
            style: style,
            className: className,
            id: id
        };
        // if no tag, default to a `div` element.
        const newTag = !tag || tag === null ? "div" : tag;
        return /*#__PURE__*/ (0, $d4J5n.createElement)(newTag, {
            // @todo - find a way (perhaps with the callback) to allow AntD components to work
            ref: this.ref,
            ...classicProps
        }, this.getChildren());
    }
    getChildren() {
        const { children: children, dataIdAttr: dataIdAttr, selectedClass: selectedClass = "sortable-selected", chosenClass: chosenClass = "sortable-chosen", dragClass: /* eslint-disable */ dragClass = "sortable-drag", fallbackClass: fallbackClass = "sortable-falback", ghostClass: ghostClass = "sortable-ghost", swapClass: swapClass = "sortable-swap-highlight", filter: /* eslint-enable */ filter = "sortable-filter", list: list } = this.props;
        // if no children, don't do anything.
        if (!children || children == null) return null;
        const dataid = dataIdAttr || "data-id";
        /* eslint-disable-next-line */ return (0, $d4J5n.Children).map(children, (child, index)=>{
            if (child === undefined) return undefined;
            const item = list[index] || {};
            const { className: prevClassName } = child.props;
            // @todo - handle the function if avalable. I don't think anyone will be doing this soon.
            const filtered = typeof filter === "string" && {
                [filter.replace(".", "")]: !!item.filtered
            };
            const className = $f79c01c9962a1583$var$$parcel$interopDefault($bAWpm)(prevClassName, {
                [selectedClass]: item.selected,
                [chosenClass]: item.chosen,
                ...filtered
            });
            return /*#__PURE__*/ (0, $d4J5n.cloneElement)(child, {
                [dataid]: child.key,
                className: className
            });
        });
    }
    /** Appends the `sortable` property to this component */ get sortable() {
        const el = this.ref.current;
        if (el === null) return null;
        const key = Object.keys(el).find((k)=>k.includes("Sortable"));
        if (!key) return null;
        //@ts-expect-error: fix me.
        return el[key];
    }
    /** Converts all the props from `ReactSortable` into the `options` object that `Sortable.create(el, [options])` can use. */ makeOptions() {
        const DOMHandlers = [
            "onAdd",
            "onChoose",
            "onDeselect",
            "onEnd",
            "onRemove",
            "onSelect",
            "onSpill",
            "onStart",
            "onUnchoose",
            "onUpdate"
        ];
        const NonDOMHandlers = [
            "onChange",
            "onClone",
            "onFilter",
            "onSort"
        ];
        const newOptions = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$7553c81e62e31b7e(this.props);
        DOMHandlers.forEach((name)=>newOptions[name] = this.prepareOnHandlerPropAndDOM(name));
        NonDOMHandlers.forEach((name)=>newOptions[name] = this.prepareOnHandlerProp(name));
        /** onMove has 2 arguments and needs to be handled seperately. */ const onMove1 = (evt, originalEvt)=>{
            const { onMove: onMove } = this.props;
            const defaultValue = evt.willInsertAfter || -1;
            if (!onMove) return defaultValue;
            const result = onMove(evt, originalEvt, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
            if (typeof result === "undefined") return false;
            return result;
        };
        return {
            ...newOptions,
            onMove: onMove1
        };
    }
    /** Prepares a method that will be used in the sortable options to call an `on[Handler]` prop & an `on[Handler]` ReactSortable method.  */ prepareOnHandlerPropAndDOM(evtName) {
        return (evt)=>{
            // call the component prop
            this.callOnHandlerProp(evt, evtName);
            // calls state change
            //@ts-expect-error: until @types multidrag item is in
            this[evtName](evt);
        };
    }
    /** Prepares a method that will be used in the sortable options to call an `on[Handler]` prop */ prepareOnHandlerProp(evtName) {
        return (evt)=>{
            // call the component prop
            this.callOnHandlerProp(evt, evtName);
        };
    }
    /** Calls the `props.on[Handler]` function */ callOnHandlerProp(evt, evtName) {
        const propEvent = this.props[evtName];
        if (propEvent) propEvent(evt, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
    }
    // SORTABLE DOM HANDLING
    onAdd(evt) {
        const { list: list, setList: setList, clone: clone } = this.props;
        /* eslint-disable-next-line */ const otherList = [
            ...$f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store.dragging.props.list
        ];
        const customs = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$4655efe700f887a(evt, otherList);
        $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$77f49a256021c8de(customs);
        const newList = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$eca851ee65ae17e4(customs, list, evt, clone).map((item)=>Object.assign(item, {
                selected: false
            }));
        setList(newList, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
    }
    onRemove(evt) {
        const { list: list, setList: setList } = this.props;
        const mode = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$1fc0f6205829e19c(evt);
        const customs = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$4655efe700f887a(evt, list);
        $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs);
        let newList = [
            ...list
        ];
        // remove state if not in clone mode. otherwise, keep.
        if (evt.pullMode !== "clone") newList = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$be2da95e6167b0bd(customs, newList);
        else {
            // switch used to get the clone
            let customClones = customs;
            switch(mode){
                case "multidrag":
                    customClones = customs.map((item, index)=>({
                            ...item,
                            element: evt.clones[index]
                        }));
                    break;
                case "normal":
                    customClones = customs.map((item)=>({
                            ...item,
                            element: evt.clone
                        }));
                    break;
                case "swap":
                default:
                    $f79c01c9962a1583$var$$parcel$interopDefault($4PZmT)(true, `mode "${mode}" cannot clone. Please remove "props.clone" from <ReactSortable/> when using the "${mode}" plugin`);
            }
            $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$77f49a256021c8de(customClones);
            // replace selected items with cloned items
            customs.forEach((curr)=>{
                const index = curr.oldIndex;
                /* eslint-disable-next-line */ const newItem = this.props.clone(curr.item, evt);
                newList.splice(index, 1, newItem);
            });
        }
        // remove item.selected from list
        newList = newList.map((item)=>Object.assign(item, {
                selected: false
            }));
        setList(newList, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
    }
    onUpdate(evt) {
        const { list: list, setList: setList } = this.props;
        const customs = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$4655efe700f887a(evt, list);
        $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$77f49a256021c8de(customs);
        $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs);
        const newList = $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$c25cf8080bd305ec(customs, list);
        return setList(newList, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
    }
    onStart() {
        $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store.dragging = this;
    }
    onEnd() {
        $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store.dragging = null;
    }
    onChoose(evt) {
        const { list: list, setList: setList } = this.props;
        const newList = list.map((item, index)=>{
            let newItem = item;
            if (index === evt.oldIndex) newItem = Object.assign(item, {
                chosen: true
            });
            return newItem;
        });
        setList(newList, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
    }
    onUnchoose(evt) {
        const { list: list, setList: setList } = this.props;
        const newList = list.map((item, index)=>{
            let newItem = item;
            if (index === evt.oldIndex) newItem = Object.assign(newItem, {
                chosen: false
            });
            return newItem;
        });
        setList(newList, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
    }
    onSpill(evt) {
        const { removeOnSpill: removeOnSpill, revertOnSpill: revertOnSpill } = this.props;
        if (removeOnSpill && !revertOnSpill) $f79c01c9962a1583$var$$eb03e74f8f7db1f3$export$1d0aa160432dfea5(evt.item);
    }
    onSelect(evt) {
        const { list: list, setList: setList } = this.props;
        const newList = list.map((item)=>Object.assign(item, {
                selected: false
            }));
        evt.newIndicies.forEach((curr)=>{
            const index = curr.index;
            if (index === -1) {
                console.log(`"${evt.type}" had indice of "${curr.index}", which is probably -1 and doesn't usually happen here.`);
                console.log(evt);
                return;
            }
            newList[index].selected = true;
        });
        setList(newList, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
    }
    onDeselect(evt) {
        const { list: list, setList: setList } = this.props;
        const newList = list.map((item)=>Object.assign(item, {
                selected: false
            }));
        evt.newIndicies.forEach((curr)=>{
            const index = curr.index;
            if (index === -1) return;
            newList[index].selected = true;
        });
        setList(newList, this.sortable, $f79c01c9962a1583$var$$7fe8e3ea572bda7a$var$store);
    }
}
var $f79c01c9962a1583$var$$faefaad95e5fcca0$exports = {};
$f79c01c9962a1583$var$$parcel$exportWildcard(module.exports, $f79c01c9962a1583$var$$faefaad95e5fcca0$exports);

});
parcelRegister("5qoop", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "Sortable", () => $3f324d5cc0e59868$export$31b3ca70d8f57423);
$parcel$export(module.exports, "Swap", () => $3f324d5cc0e59868$export$bdb5f0a1b77546f4);
$parcel$export(module.exports, "MultiDrag", () => $3f324d5cc0e59868$export$18e5d2a5d1df842d);
$parcel$export(module.exports, "default", () => $3f324d5cc0e59868$export$2e2bcd8739ae039);
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function $3f324d5cc0e59868$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $3f324d5cc0e59868$var$_objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $3f324d5cc0e59868$var$ownKeys(Object(source), true).forEach(function(key) {
            $3f324d5cc0e59868$var$_defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $3f324d5cc0e59868$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $3f324d5cc0e59868$var$_typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $3f324d5cc0e59868$var$_typeof = function(obj) {
        return typeof obj;
    };
    else $3f324d5cc0e59868$var$_typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $3f324d5cc0e59868$var$_typeof(obj);
}
function $3f324d5cc0e59868$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $3f324d5cc0e59868$var$_extends() {
    $3f324d5cc0e59868$var$_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $3f324d5cc0e59868$var$_extends.apply(this, arguments);
}
function $3f324d5cc0e59868$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $3f324d5cc0e59868$var$_objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = $3f324d5cc0e59868$var$_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function $3f324d5cc0e59868$var$_toConsumableArray(arr) {
    return $3f324d5cc0e59868$var$_arrayWithoutHoles(arr) || $3f324d5cc0e59868$var$_iterableToArray(arr) || $3f324d5cc0e59868$var$_unsupportedIterableToArray(arr) || $3f324d5cc0e59868$var$_nonIterableSpread();
}
function $3f324d5cc0e59868$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $3f324d5cc0e59868$var$_arrayLikeToArray(arr);
}
function $3f324d5cc0e59868$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function $3f324d5cc0e59868$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $3f324d5cc0e59868$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $3f324d5cc0e59868$var$_arrayLikeToArray(o, minLen);
}
function $3f324d5cc0e59868$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $3f324d5cc0e59868$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var $3f324d5cc0e59868$var$version = "1.15.0";
function $3f324d5cc0e59868$var$userAgent(pattern) {
    if (typeof window !== 'undefined' && window.navigator) return !!/*@__PURE__*/ navigator.userAgent.match(pattern);
}
var $3f324d5cc0e59868$var$IE11OrLess = $3f324d5cc0e59868$var$userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var $3f324d5cc0e59868$var$Edge = $3f324d5cc0e59868$var$userAgent(/Edge/i);
var $3f324d5cc0e59868$var$FireFox = $3f324d5cc0e59868$var$userAgent(/firefox/i);
var $3f324d5cc0e59868$var$Safari = $3f324d5cc0e59868$var$userAgent(/safari/i) && !$3f324d5cc0e59868$var$userAgent(/chrome/i) && !$3f324d5cc0e59868$var$userAgent(/android/i);
var $3f324d5cc0e59868$var$IOS = $3f324d5cc0e59868$var$userAgent(/iP(ad|od|hone)/i);
var $3f324d5cc0e59868$var$ChromeForAndroid = $3f324d5cc0e59868$var$userAgent(/chrome/i) && $3f324d5cc0e59868$var$userAgent(/android/i);
var $3f324d5cc0e59868$var$captureMode = {
    capture: false,
    passive: false
};
function $3f324d5cc0e59868$var$on(el, event, fn) {
    el.addEventListener(event, fn, !$3f324d5cc0e59868$var$IE11OrLess && $3f324d5cc0e59868$var$captureMode);
}
function $3f324d5cc0e59868$var$off(el, event, fn) {
    el.removeEventListener(event, fn, !$3f324d5cc0e59868$var$IE11OrLess && $3f324d5cc0e59868$var$captureMode);
}
function $3f324d5cc0e59868$var$matches(/**HTMLElement*/ el, /**String*/ selector) {
    if (!selector) return;
    selector[0] === '>' && (selector = selector.substring(1));
    if (el) try {
        if (el.matches) return el.matches(selector);
        else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    } catch (_) {
        return false;
    }
    return false;
}
function $3f324d5cc0e59868$var$getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function $3f324d5cc0e59868$var$closest(/**HTMLElement*/ el, /**String*/ selector, /**HTMLElement*/ ctx, includeCTX) {
    if (el) {
        ctx = ctx || document;
        do {
            if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && $3f324d5cc0e59868$var$matches(el, selector) : $3f324d5cc0e59868$var$matches(el, selector)) || includeCTX && el === ctx) return el;
            if (el === ctx) break;
        /* jshint boss:true */ }while (el = $3f324d5cc0e59868$var$getParentOrHost(el));
    }
    return null;
}
var $3f324d5cc0e59868$var$R_SPACE = /\s+/g;
function $3f324d5cc0e59868$var$toggleClass(el, name, state) {
    if (el && name) {
        if (el.classList) el.classList[state ? 'add' : 'remove'](name);
        else {
            var className = (' ' + el.className + ' ').replace($3f324d5cc0e59868$var$R_SPACE, ' ').replace(' ' + name + ' ', ' ');
            el.className = (className + (state ? ' ' + name : '')).replace($3f324d5cc0e59868$var$R_SPACE, ' ');
        }
    }
}
function $3f324d5cc0e59868$var$css(el, prop, val) {
    var style = el && el.style;
    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, '');
            else if (el.currentStyle) val = el.currentStyle;
            return prop === void 0 ? val : val[prop];
        } else {
            if (!(prop in style) && prop.indexOf('webkit') === -1) prop = '-webkit-' + prop;
            style[prop] = val + (typeof val === 'string' ? '' : 'px');
        }
    }
}
function $3f324d5cc0e59868$var$matrix(el, selfOnly) {
    var appliedTransforms = '';
    if (typeof el === 'string') appliedTransforms = el;
    else do {
        var transform = $3f324d5cc0e59868$var$css(el, 'transform');
        if (transform && transform !== 'none') appliedTransforms = transform + ' ' + appliedTransforms;
    /* jshint boss:true */ }while (!selfOnly && (el = el.parentNode));
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */ return matrixFn && new matrixFn(appliedTransforms);
}
function $3f324d5cc0e59868$var$find(ctx, tagName, iterator) {
    if (ctx) {
        var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
        if (iterator) for(; i < n; i++)iterator(list[i], i);
        return list;
    }
    return [];
}
function $3f324d5cc0e59868$var$getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) return scrollingElement;
    else return document.documentElement;
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */ function $3f324d5cc0e59868$var$getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el.parentNode && el !== $3f324d5cc0e59868$var$getWindowScrollingElement()) {
        elRect = el.getBoundingClientRect();
        top = elRect.top;
        left = elRect.left;
        bottom = elRect.bottom;
        right = elRect.right;
        height = elRect.height;
        width = elRect.width;
    } else {
        top = 0;
        left = 0;
        bottom = window.innerHeight;
        right = window.innerWidth;
        height = window.innerHeight;
        width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
        // Adjust for translate()
        container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
        // Not needed on <= IE11
        if (!$3f324d5cc0e59868$var$IE11OrLess) {
            do if (container && container.getBoundingClientRect && ($3f324d5cc0e59868$var$css(container, 'transform') !== 'none' || relativeToNonStaticParent && $3f324d5cc0e59868$var$css(container, 'position') !== 'static')) {
                var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container
                top -= containerRect.top + parseInt($3f324d5cc0e59868$var$css(container, 'border-top-width'));
                left -= containerRect.left + parseInt($3f324d5cc0e59868$var$css(container, 'border-left-width'));
                bottom = top + elRect.height;
                right = left + elRect.width;
                break;
            }
            while (container = container.parentNode);
        }
    }
    if (undoScale && el !== window) {
        // Adjust for scale()
        var elMatrix = $3f324d5cc0e59868$var$matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
        if (elMatrix) {
            top /= scaleY;
            left /= scaleX;
            width /= scaleX;
            height /= scaleY;
            bottom = top + height;
            right = left + width;
        }
    }
    return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height
    };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */ function $3f324d5cc0e59868$var$isScrolledPast(el, elSide, parentSide) {
    var parent = $3f324d5cc0e59868$var$getParentAutoScrollElement(el, true), elSideVal = $3f324d5cc0e59868$var$getRect(el)[elSide];
    /* jshint boss:true */ while(parent){
        var parentSideVal = $3f324d5cc0e59868$var$getRect(parent)[parentSide], visible = void 0;
        if (parentSide === 'top' || parentSide === 'left') visible = elSideVal >= parentSideVal;
        else visible = elSideVal <= parentSideVal;
        if (!visible) return parent;
        if (parent === $3f324d5cc0e59868$var$getWindowScrollingElement()) break;
        parent = $3f324d5cc0e59868$var$getParentAutoScrollElement(parent, false);
    }
    return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */ function $3f324d5cc0e59868$var$getChild(el, childNum, options, includeDragEl) {
    var currentChild = 0, i = 0, children = el.children;
    while(i < children.length){
        if (children[i].style.display !== 'none' && children[i] !== $3f324d5cc0e59868$export$31b3ca70d8f57423.ghost && (includeDragEl || children[i] !== $3f324d5cc0e59868$export$31b3ca70d8f57423.dragged) && $3f324d5cc0e59868$var$closest(children[i], options.draggable, el, false)) {
            if (currentChild === childNum) return children[i];
            currentChild++;
        }
        i++;
    }
    return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */ function $3f324d5cc0e59868$var$lastChild(el, selector) {
    var last = el.lastElementChild;
    while(last && (last === $3f324d5cc0e59868$export$31b3ca70d8f57423.ghost || $3f324d5cc0e59868$var$css(last, 'display') === 'none' || selector && !$3f324d5cc0e59868$var$matches(last, selector)))last = last.previousElementSibling;
    return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */ function $3f324d5cc0e59868$var$index(el, selector) {
    var index = 0;
    if (!el || !el.parentNode) return -1;
    /* jshint boss:true */ while(el = el.previousElementSibling)if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== $3f324d5cc0e59868$export$31b3ca70d8f57423.clone && (!selector || $3f324d5cc0e59868$var$matches(el, selector))) index++;
    return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */ function $3f324d5cc0e59868$var$getRelativeScrollOffset(el) {
    var offsetLeft = 0, offsetTop = 0, winScroller = $3f324d5cc0e59868$var$getWindowScrollingElement();
    if (el) do {
        var elMatrix = $3f324d5cc0e59868$var$matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
    }while (el !== winScroller && (el = el.parentNode));
    return [
        offsetLeft,
        offsetTop
    ];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */ function $3f324d5cc0e59868$var$indexOfObject(arr, obj) {
    for(var i in arr){
        if (!arr.hasOwnProperty(i)) continue;
        for(var key in obj){
            if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
    }
    return -1;
}
function $3f324d5cc0e59868$var$getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return $3f324d5cc0e59868$var$getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = $3f324d5cc0e59868$var$css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
            if (!elem.getBoundingClientRect || elem === document.body) return $3f324d5cc0e59868$var$getWindowScrollingElement();
            if (gotSelf || includeSelf) return elem;
            gotSelf = true;
        }
    }
    while (elem = elem.parentNode);
    return $3f324d5cc0e59868$var$getWindowScrollingElement();
}
function $3f324d5cc0e59868$var$extend(dst, src) {
    if (dst && src) {
        for(var key in src)if (src.hasOwnProperty(key)) dst[key] = src[key];
    }
    return dst;
}
function $3f324d5cc0e59868$var$isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var $3f324d5cc0e59868$var$_throttleTimeout;
function $3f324d5cc0e59868$var$throttle(callback, ms) {
    return function() {
        if (!$3f324d5cc0e59868$var$_throttleTimeout) {
            var args = arguments, _this = this;
            if (args.length === 1) callback.call(_this, args[0]);
            else callback.apply(_this, args);
            $3f324d5cc0e59868$var$_throttleTimeout = setTimeout(function() {
                $3f324d5cc0e59868$var$_throttleTimeout = void 0;
            }, ms);
        }
    };
}
function $3f324d5cc0e59868$var$cancelThrottle() {
    clearTimeout($3f324d5cc0e59868$var$_throttleTimeout);
    $3f324d5cc0e59868$var$_throttleTimeout = void 0;
}
function $3f324d5cc0e59868$var$scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
}
function $3f324d5cc0e59868$var$clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
    else if ($) return $(el).clone(true)[0];
    else return el.cloneNode(true);
}
function $3f324d5cc0e59868$var$setRect(el, rect) {
    $3f324d5cc0e59868$var$css(el, 'position', 'absolute');
    $3f324d5cc0e59868$var$css(el, 'top', rect.top);
    $3f324d5cc0e59868$var$css(el, 'left', rect.left);
    $3f324d5cc0e59868$var$css(el, 'width', rect.width);
    $3f324d5cc0e59868$var$css(el, 'height', rect.height);
}
function $3f324d5cc0e59868$var$unsetRect(el) {
    $3f324d5cc0e59868$var$css(el, 'position', '');
    $3f324d5cc0e59868$var$css(el, 'top', '');
    $3f324d5cc0e59868$var$css(el, 'left', '');
    $3f324d5cc0e59868$var$css(el, 'width', '');
    $3f324d5cc0e59868$var$css(el, 'height', '');
}
var $3f324d5cc0e59868$var$expando = 'Sortable' + new Date().getTime();
function $3f324d5cc0e59868$var$AnimationStateManager() {
    var animationStates = [], animationCallbackId;
    return {
        captureAnimationState: function captureAnimationState() {
            animationStates = [];
            if (!this.options.animation) return;
            var children = [].slice.call(this.el.children);
            children.forEach(function(child) {
                if ($3f324d5cc0e59868$var$css(child, 'display') === 'none' || child === $3f324d5cc0e59868$export$31b3ca70d8f57423.ghost) return;
                animationStates.push({
                    target: child,
                    rect: $3f324d5cc0e59868$var$getRect(child)
                });
                var fromRect = $3f324d5cc0e59868$var$_objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation
                if (child.thisAnimationDuration) {
                    var childMatrix = $3f324d5cc0e59868$var$matrix(child, true);
                    if (childMatrix) {
                        fromRect.top -= childMatrix.f;
                        fromRect.left -= childMatrix.e;
                    }
                }
                child.fromRect = fromRect;
            });
        },
        addAnimationState: function addAnimationState(state) {
            animationStates.push(state);
        },
        removeAnimationState: function removeAnimationState(target) {
            animationStates.splice($3f324d5cc0e59868$var$indexOfObject(animationStates, {
                target: target
            }), 1);
        },
        animateAll: function animateAll(callback) {
            var _this = this;
            if (!this.options.animation) {
                clearTimeout(animationCallbackId);
                if (typeof callback === 'function') callback();
                return;
            }
            var animating = false, animationTime = 0;
            animationStates.forEach(function(state) {
                var time = 0, target = state.target, fromRect = target.fromRect, toRect = $3f324d5cc0e59868$var$getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = $3f324d5cc0e59868$var$matrix(target, true);
                if (targetMatrix) {
                    // Compensate for current animation
                    toRect.top -= targetMatrix.f;
                    toRect.left -= targetMatrix.e;
                }
                target.toRect = toRect;
                if (target.thisAnimationDuration) // Could also check if animatingRect is between fromRect and toRect
                {
                    if ($3f324d5cc0e59868$var$isRectEqual(prevFromRect, toRect) && !$3f324d5cc0e59868$var$isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
                    (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) // If returning to same place as started from animation and on same axis
                    time = $3f324d5cc0e59868$var$calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
                } // if fromRect != toRect: animate
                if (!$3f324d5cc0e59868$var$isRectEqual(toRect, fromRect)) {
                    target.prevFromRect = fromRect;
                    target.prevToRect = toRect;
                    if (!time) time = _this.options.animation;
                    _this.animate(target, animatingRect, toRect, time);
                }
                if (time) {
                    animating = true;
                    animationTime = Math.max(animationTime, time);
                    clearTimeout(target.animationResetTimer);
                    target.animationResetTimer = setTimeout(function() {
                        target.animationTime = 0;
                        target.prevFromRect = null;
                        target.fromRect = null;
                        target.prevToRect = null;
                        target.thisAnimationDuration = null;
                    }, time);
                    target.thisAnimationDuration = time;
                }
            });
            clearTimeout(animationCallbackId);
            if (!animating) {
                if (typeof callback === 'function') callback();
            } else animationCallbackId = setTimeout(function() {
                if (typeof callback === 'function') callback();
            }, animationTime);
            animationStates = [];
        },
        animate: function animate(target, currentRect, toRect, duration) {
            if (duration) {
                $3f324d5cc0e59868$var$css(target, 'transition', '');
                $3f324d5cc0e59868$var$css(target, 'transform', '');
                var elMatrix = $3f324d5cc0e59868$var$matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
                target.animatingX = !!translateX;
                target.animatingY = !!translateY;
                $3f324d5cc0e59868$var$css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
                this.forRepaintDummy = $3f324d5cc0e59868$var$repaint(target); // repaint
                $3f324d5cc0e59868$var$css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
                $3f324d5cc0e59868$var$css(target, 'transform', 'translate3d(0,0,0)');
                typeof target.animated === 'number' && clearTimeout(target.animated);
                target.animated = setTimeout(function() {
                    $3f324d5cc0e59868$var$css(target, 'transition', '');
                    $3f324d5cc0e59868$var$css(target, 'transform', '');
                    target.animated = false;
                    target.animatingX = false;
                    target.animatingY = false;
                }, duration);
            }
        }
    };
}
function $3f324d5cc0e59868$var$repaint(target) {
    return target.offsetWidth;
}
function $3f324d5cc0e59868$var$calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var $3f324d5cc0e59868$var$plugins = [];
var $3f324d5cc0e59868$var$defaults = {
    initializeByDefault: true
};
var $3f324d5cc0e59868$var$PluginManager = {
    mount: function mount(plugin) {
        // Set default static properties
        for(var option in $3f324d5cc0e59868$var$defaults)if ($3f324d5cc0e59868$var$defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = $3f324d5cc0e59868$var$defaults[option];
        $3f324d5cc0e59868$var$plugins.forEach(function(p) {
            if (p.pluginName === plugin.pluginName) throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
        });
        $3f324d5cc0e59868$var$plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
        var _this = this;
        this.eventCanceled = false;
        evt.cancel = function() {
            _this.eventCanceled = true;
        };
        var eventNameGlobal = eventName + 'Global';
        $3f324d5cc0e59868$var$plugins.forEach(function(plugin) {
            if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable
            if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal]($3f324d5cc0e59868$var$_objectSpread2({
                sortable: sortable
            }, evt));
             // Only fire plugin event if plugin is enabled in this sortable,
            // and plugin has event defined
            if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName]($3f324d5cc0e59868$var$_objectSpread2({
                sortable: sortable
            }, evt));
        });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
        $3f324d5cc0e59868$var$plugins.forEach(function(plugin) {
            var pluginName = plugin.pluginName;
            if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
            var initialized = new plugin(sortable, el, sortable.options);
            initialized.sortable = sortable;
            initialized.options = sortable.options;
            sortable[pluginName] = initialized; // Add default options from plugin
            $3f324d5cc0e59868$var$_extends(defaults, initialized.defaults);
        });
        for(var option in sortable.options){
            if (!sortable.options.hasOwnProperty(option)) continue;
            var modified = this.modifyOption(sortable, option, sortable.options[option]);
            if (typeof modified !== 'undefined') sortable.options[option] = modified;
        }
    },
    getEventProperties: function getEventProperties(name, sortable) {
        var eventProperties = {};
        $3f324d5cc0e59868$var$plugins.forEach(function(plugin) {
            if (typeof plugin.eventProperties !== 'function') return;
            $3f324d5cc0e59868$var$_extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
        });
        return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
        var modifiedValue;
        $3f324d5cc0e59868$var$plugins.forEach(function(plugin) {
            // Plugin must exist on the Sortable
            if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
            if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        });
        return modifiedValue;
    }
};
function $3f324d5cc0e59868$var$dispatchEvent(_ref) {
    var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[$3f324d5cc0e59868$var$expando];
    if (!sortable) return;
    var evt, options = sortable.options, onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature
    if (window.CustomEvent && !$3f324d5cc0e59868$var$IE11OrLess && !$3f324d5cc0e59868$var$Edge) evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent('Event');
        evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
    var allEventProperties = $3f324d5cc0e59868$var$_objectSpread2($3f324d5cc0e59868$var$_objectSpread2({}, extraEventProperties), $3f324d5cc0e59868$var$PluginManager.getEventProperties(name, sortable));
    for(var option in allEventProperties)evt[option] = allEventProperties[option];
    if (rootEl) rootEl.dispatchEvent(evt);
    if (options[onName]) options[onName].call(sortable, evt);
}
var $3f324d5cc0e59868$var$_excluded = [
    "evt"
];
var $3f324d5cc0e59868$var$pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, originalEvent = _ref.evt, data = $3f324d5cc0e59868$var$_objectWithoutProperties(_ref, $3f324d5cc0e59868$var$_excluded);
    $3f324d5cc0e59868$var$PluginManager.pluginEvent.bind($3f324d5cc0e59868$export$31b3ca70d8f57423)(eventName, sortable, $3f324d5cc0e59868$var$_objectSpread2({
        dragEl: $3f324d5cc0e59868$var$dragEl,
        parentEl: $3f324d5cc0e59868$var$parentEl,
        ghostEl: $3f324d5cc0e59868$var$ghostEl,
        rootEl: $3f324d5cc0e59868$var$rootEl,
        nextEl: $3f324d5cc0e59868$var$nextEl,
        lastDownEl: $3f324d5cc0e59868$var$lastDownEl,
        cloneEl: $3f324d5cc0e59868$var$cloneEl,
        cloneHidden: $3f324d5cc0e59868$var$cloneHidden,
        dragStarted: $3f324d5cc0e59868$var$moved,
        putSortable: $3f324d5cc0e59868$var$putSortable,
        activeSortable: $3f324d5cc0e59868$export$31b3ca70d8f57423.active,
        originalEvent: originalEvent,
        oldIndex: $3f324d5cc0e59868$var$oldIndex,
        oldDraggableIndex: $3f324d5cc0e59868$var$oldDraggableIndex,
        newIndex: $3f324d5cc0e59868$var$newIndex,
        newDraggableIndex: $3f324d5cc0e59868$var$newDraggableIndex,
        hideGhostForTarget: $3f324d5cc0e59868$var$_hideGhostForTarget,
        unhideGhostForTarget: $3f324d5cc0e59868$var$_unhideGhostForTarget,
        cloneNowHidden: function cloneNowHidden() {
            $3f324d5cc0e59868$var$cloneHidden = true;
        },
        cloneNowShown: function cloneNowShown() {
            $3f324d5cc0e59868$var$cloneHidden = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(name) {
            $3f324d5cc0e59868$var$_dispatchEvent({
                sortable: sortable,
                name: name,
                originalEvent: originalEvent
            });
        }
    }, data));
};
function $3f324d5cc0e59868$var$_dispatchEvent(info) {
    $3f324d5cc0e59868$var$dispatchEvent($3f324d5cc0e59868$var$_objectSpread2({
        putSortable: $3f324d5cc0e59868$var$putSortable,
        cloneEl: $3f324d5cc0e59868$var$cloneEl,
        targetEl: $3f324d5cc0e59868$var$dragEl,
        rootEl: $3f324d5cc0e59868$var$rootEl,
        oldIndex: $3f324d5cc0e59868$var$oldIndex,
        oldDraggableIndex: $3f324d5cc0e59868$var$oldDraggableIndex,
        newIndex: $3f324d5cc0e59868$var$newIndex,
        newDraggableIndex: $3f324d5cc0e59868$var$newDraggableIndex
    }, info));
}
var $3f324d5cc0e59868$var$dragEl, $3f324d5cc0e59868$var$parentEl, $3f324d5cc0e59868$var$ghostEl, $3f324d5cc0e59868$var$rootEl, $3f324d5cc0e59868$var$nextEl, $3f324d5cc0e59868$var$lastDownEl, $3f324d5cc0e59868$var$cloneEl, $3f324d5cc0e59868$var$cloneHidden, $3f324d5cc0e59868$var$oldIndex, $3f324d5cc0e59868$var$newIndex, $3f324d5cc0e59868$var$oldDraggableIndex, $3f324d5cc0e59868$var$newDraggableIndex, $3f324d5cc0e59868$var$activeGroup, $3f324d5cc0e59868$var$putSortable, $3f324d5cc0e59868$var$awaitingDragStarted = false, $3f324d5cc0e59868$var$ignoreNextClick = false, $3f324d5cc0e59868$var$sortables = [], $3f324d5cc0e59868$var$tapEvt, $3f324d5cc0e59868$var$touchEvt, $3f324d5cc0e59868$var$lastDx, $3f324d5cc0e59868$var$lastDy, $3f324d5cc0e59868$var$tapDistanceLeft, $3f324d5cc0e59868$var$tapDistanceTop, $3f324d5cc0e59868$var$moved, $3f324d5cc0e59868$var$lastTarget, $3f324d5cc0e59868$var$lastDirection, $3f324d5cc0e59868$var$pastFirstInvertThresh = false, $3f324d5cc0e59868$var$isCircumstantialInvert = false, $3f324d5cc0e59868$var$targetMoveDistance, // For positioning ghost absolutely
$3f324d5cc0e59868$var$ghostRelativeParent, $3f324d5cc0e59868$var$ghostRelativeParentInitialScroll = [], // (left, top)
$3f324d5cc0e59868$var$_silent = false, $3f324d5cc0e59868$var$savedInputChecked = [];
/** @const */ var $3f324d5cc0e59868$var$documentExists = typeof document !== 'undefined', $3f324d5cc0e59868$var$PositionGhostAbsolutely = $3f324d5cc0e59868$var$IOS, $3f324d5cc0e59868$var$CSSFloatProperty = $3f324d5cc0e59868$var$Edge || $3f324d5cc0e59868$var$IE11OrLess ? 'cssFloat' : 'float', // This will not pass for IE9, because IE9 DnD only works on anchors
$3f324d5cc0e59868$var$supportDraggable = $3f324d5cc0e59868$var$documentExists && !$3f324d5cc0e59868$var$ChromeForAndroid && !$3f324d5cc0e59868$var$IOS && 'draggable' in document.createElement('div'), $3f324d5cc0e59868$var$supportCssPointerEvents = function() {
    if (!$3f324d5cc0e59868$var$documentExists) return; // false when <= IE11
    if ($3f324d5cc0e59868$var$IE11OrLess) return false;
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
}(), $3f324d5cc0e59868$var$_detectDirection = function _detectDirection(el, options) {
    var elCSS = $3f324d5cc0e59868$var$css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = $3f324d5cc0e59868$var$getChild(el, 0, options), child2 = $3f324d5cc0e59868$var$getChild(el, 1, options), firstChildCSS = child1 && $3f324d5cc0e59868$var$css(child1), secondChildCSS = child2 && $3f324d5cc0e59868$var$css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + $3f324d5cc0e59868$var$getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + $3f324d5cc0e59868$var$getRect(child2).width;
    if (elCSS.display === 'flex') return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    if (elCSS.display === 'grid') return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
        var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
        return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[$3f324d5cc0e59868$var$CSSFloatProperty] === 'none' || child2 && elCSS[$3f324d5cc0e59868$var$CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
}, $3f324d5cc0e59868$var$_dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, /**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */ $3f324d5cc0e59868$var$_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    $3f324d5cc0e59868$var$sortables.some(function(sortable) {
        var threshold = sortable[$3f324d5cc0e59868$var$expando].options.emptyInsertThreshold;
        if (!threshold || $3f324d5cc0e59868$var$lastChild(sortable)) return;
        var rect = $3f324d5cc0e59868$var$getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
        if (insideHorizontally && insideVertically) return ret = sortable;
    });
    return ret;
}, $3f324d5cc0e59868$var$_prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
        return function(to, from, dragEl, evt) {
            var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
            if (value == null && (pull || sameGroup)) // Default pull value
            // Default pull and put value if same group
            return true;
            else if (value == null || value === false) return false;
            else if (pull && value === 'clone') return value;
            else if (typeof value === 'function') return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
            else {
                var otherGroup = (pull ? to : from).options.group.name;
                return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
            }
        };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || $3f324d5cc0e59868$var$_typeof(originalGroup) != 'object') originalGroup = {
        name: originalGroup
    };
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
}, $3f324d5cc0e59868$var$_hideGhostForTarget = function _hideGhostForTarget() {
    if (!$3f324d5cc0e59868$var$supportCssPointerEvents && $3f324d5cc0e59868$var$ghostEl) $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'display', 'none');
}, $3f324d5cc0e59868$var$_unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!$3f324d5cc0e59868$var$supportCssPointerEvents && $3f324d5cc0e59868$var$ghostEl) $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'display', '');
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position
if ($3f324d5cc0e59868$var$documentExists && !$3f324d5cc0e59868$var$ChromeForAndroid) document.addEventListener('click', function(evt) {
    if ($3f324d5cc0e59868$var$ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        $3f324d5cc0e59868$var$ignoreNextClick = false;
        return false;
    }
}, true);
var $3f324d5cc0e59868$var$nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if ($3f324d5cc0e59868$var$dragEl) {
        evt = evt.touches ? evt.touches[0] : evt;
        var nearest = $3f324d5cc0e59868$var$_detectNearestEmptySortable(evt.clientX, evt.clientY);
        if (nearest) {
            // Create imitation event
            var event = {};
            for(var i in evt)if (evt.hasOwnProperty(i)) event[i] = evt[i];
            event.target = event.rootEl = nearest;
            event.preventDefault = void 0;
            event.stopPropagation = void 0;
            nearest[$3f324d5cc0e59868$var$expando]._onDragOver(event);
        }
    }
};
var $3f324d5cc0e59868$var$_checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if ($3f324d5cc0e59868$var$dragEl) $3f324d5cc0e59868$var$dragEl.parentNode[$3f324d5cc0e59868$var$expando]._isOutsideThisEl(evt.target);
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */ function $3f324d5cc0e59868$export$31b3ca70d8f57423(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(el));
    this.el = el; // root element
    this.options = options = $3f324d5cc0e59868$var$_extends({}, options); // Export instance
    el[$3f324d5cc0e59868$var$expando] = this;
    var defaults = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
        swapThreshold: 1,
        // percentage; 0 <= x <= 1
        invertSwap: false,
        // invert always
        invertedSwapThreshold: null,
        // will be set to same as swapThreshold if default
        removeCloneOnHide: true,
        direction: function direction() {
            return $3f324d5cc0e59868$var$_detectDirection(el, this.options);
        },
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        ignore: 'a, img',
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function setData(dataTransfer, dragEl) {
            dataTransfer.setData('Text', dragEl.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: 'data-id',
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: 'sortable-fallback',
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: $3f324d5cc0e59868$export$31b3ca70d8f57423.supportPointer !== false && 'PointerEvent' in window && !$3f324d5cc0e59868$var$Safari,
        emptyInsertThreshold: 5
    };
    $3f324d5cc0e59868$var$PluginManager.initializePlugins(this, el, defaults); // Set default options
    for(var name in defaults)!(name in options) && (options[name] = defaults[name]);
    $3f324d5cc0e59868$var$_prepareGroup(options); // Bind all private methods
    for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
     // Setup drag mode
    this.nativeDraggable = options.forceFallback ? false : $3f324d5cc0e59868$var$supportDraggable;
    if (this.nativeDraggable) // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
     // Bind events
    if (options.supportPointer) $3f324d5cc0e59868$var$on(el, 'pointerdown', this._onTapStart);
    else {
        $3f324d5cc0e59868$var$on(el, 'mousedown', this._onTapStart);
        $3f324d5cc0e59868$var$on(el, 'touchstart', this._onTapStart);
    }
    if (this.nativeDraggable) {
        $3f324d5cc0e59868$var$on(el, 'dragover', this);
        $3f324d5cc0e59868$var$on(el, 'dragenter', this);
    }
    $3f324d5cc0e59868$var$sortables.push(this.el); // Restore sorting
    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager
    $3f324d5cc0e59868$var$_extends(this, $3f324d5cc0e59868$var$AnimationStateManager());
}
$3f324d5cc0e59868$export$31b3ca70d8f57423.prototype = /** @lends Sortable.prototype */ {
    constructor: $3f324d5cc0e59868$export$31b3ca70d8f57423,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
        if (!this.el.contains(target) && target !== this.el) $3f324d5cc0e59868$var$lastTarget = null;
    },
    _getDirection: function _getDirection(evt, target) {
        return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, $3f324d5cc0e59868$var$dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(/** Event|TouchEvent */ evt) {
        if (!evt.cancelable) return;
        var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
        $3f324d5cc0e59868$var$_saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
        if ($3f324d5cc0e59868$var$dragEl) return;
        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return; // only left button and enabled
         // cancel dnd if original target is content editable
        if (originalTarget.isContentEditable) return;
         // Safari ignores further event handling after mousedown
        if (!this.nativeDraggable && $3f324d5cc0e59868$var$Safari && target && target.tagName.toUpperCase() === 'SELECT') return;
        target = $3f324d5cc0e59868$var$closest(target, options.draggable, el, false);
        if (target && target.animated) return;
        if ($3f324d5cc0e59868$var$lastDownEl === target) // Ignoring duplicate `down`
        return;
         // Get the index of the dragged element within its parent
        $3f324d5cc0e59868$var$oldIndex = $3f324d5cc0e59868$var$index(target);
        $3f324d5cc0e59868$var$oldDraggableIndex = $3f324d5cc0e59868$var$index(target, options.draggable); // Check filter
        if (typeof filter === 'function') {
            if (filter.call(this, evt, target, this)) {
                $3f324d5cc0e59868$var$_dispatchEvent({
                    sortable: _this,
                    rootEl: originalTarget,
                    name: 'filter',
                    targetEl: target,
                    toEl: el,
                    fromEl: el
                });
                $3f324d5cc0e59868$var$pluginEvent('filter', _this, {
                    evt: evt
                });
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        } else if (filter) {
            filter = filter.split(',').some(function(criteria) {
                criteria = $3f324d5cc0e59868$var$closest(originalTarget, criteria.trim(), el, false);
                if (criteria) {
                    $3f324d5cc0e59868$var$_dispatchEvent({
                        sortable: _this,
                        rootEl: criteria,
                        name: 'filter',
                        targetEl: target,
                        fromEl: el,
                        toEl: el
                    });
                    $3f324d5cc0e59868$var$pluginEvent('filter', _this, {
                        evt: evt
                    });
                    return true;
                }
            });
            if (filter) {
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        }
        if (options.handle && !$3f324d5cc0e59868$var$closest(originalTarget, options.handle, el, false)) return;
         // Prepare `dragstart`
        this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(/** Event */ evt, /** Touch */ touch, /** HTMLElement */ target) {
        var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
        if (target && !$3f324d5cc0e59868$var$dragEl && target.parentNode === el) {
            var dragRect = $3f324d5cc0e59868$var$getRect(target);
            $3f324d5cc0e59868$var$rootEl = el;
            $3f324d5cc0e59868$var$dragEl = target;
            $3f324d5cc0e59868$var$parentEl = $3f324d5cc0e59868$var$dragEl.parentNode;
            $3f324d5cc0e59868$var$nextEl = $3f324d5cc0e59868$var$dragEl.nextSibling;
            $3f324d5cc0e59868$var$lastDownEl = target;
            $3f324d5cc0e59868$var$activeGroup = options.group;
            $3f324d5cc0e59868$export$31b3ca70d8f57423.dragged = $3f324d5cc0e59868$var$dragEl;
            $3f324d5cc0e59868$var$tapEvt = {
                target: $3f324d5cc0e59868$var$dragEl,
                clientX: (touch || evt).clientX,
                clientY: (touch || evt).clientY
            };
            $3f324d5cc0e59868$var$tapDistanceLeft = $3f324d5cc0e59868$var$tapEvt.clientX - dragRect.left;
            $3f324d5cc0e59868$var$tapDistanceTop = $3f324d5cc0e59868$var$tapEvt.clientY - dragRect.top;
            this._lastX = (touch || evt).clientX;
            this._lastY = (touch || evt).clientY;
            $3f324d5cc0e59868$var$dragEl.style['will-change'] = 'all';
            dragStartFn = function dragStartFn() {
                $3f324d5cc0e59868$var$pluginEvent('delayEnded', _this, {
                    evt: evt
                });
                if ($3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) {
                    _this._onDrop();
                    return;
                } // Delayed drag has been triggered
                // we can re-enable the events: touchmove/mousemove
                _this._disableDelayedDragEvents();
                if (!$3f324d5cc0e59868$var$FireFox && _this.nativeDraggable) $3f324d5cc0e59868$var$dragEl.draggable = true;
                 // Bind the events: dragstart/dragend
                _this._triggerDragStart(evt, touch); // Drag start event
                $3f324d5cc0e59868$var$_dispatchEvent({
                    sortable: _this,
                    name: 'choose',
                    originalEvent: evt
                }); // Chosen item
                $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$dragEl, options.chosenClass, true);
            }; // Disable "draggable"
            options.ignore.split(',').forEach(function(criteria) {
                $3f324d5cc0e59868$var$find($3f324d5cc0e59868$var$dragEl, criteria.trim(), $3f324d5cc0e59868$var$_disableDraggable);
            });
            $3f324d5cc0e59868$var$on(ownerDocument, 'dragover', $3f324d5cc0e59868$var$nearestEmptyInsertDetectEvent);
            $3f324d5cc0e59868$var$on(ownerDocument, 'mousemove', $3f324d5cc0e59868$var$nearestEmptyInsertDetectEvent);
            $3f324d5cc0e59868$var$on(ownerDocument, 'touchmove', $3f324d5cc0e59868$var$nearestEmptyInsertDetectEvent);
            $3f324d5cc0e59868$var$on(ownerDocument, 'mouseup', _this._onDrop);
            $3f324d5cc0e59868$var$on(ownerDocument, 'touchend', _this._onDrop);
            $3f324d5cc0e59868$var$on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)
            if ($3f324d5cc0e59868$var$FireFox && this.nativeDraggable) {
                this.options.touchStartThreshold = 4;
                $3f324d5cc0e59868$var$dragEl.draggable = true;
            }
            $3f324d5cc0e59868$var$pluginEvent('delayStart', this, {
                evt: evt
            }); // Delay is impossible for native DnD in Edge or IE
            if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !($3f324d5cc0e59868$var$Edge || $3f324d5cc0e59868$var$IE11OrLess))) {
                if ($3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) {
                    this._onDrop();
                    return;
                } // If the user moves the pointer or let go the click or touch
                // before the delay has been reached:
                // disable the delayed drag
                $3f324d5cc0e59868$var$on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
                $3f324d5cc0e59868$var$on(ownerDocument, 'touchend', _this._disableDelayedDrag);
                $3f324d5cc0e59868$var$on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
                $3f324d5cc0e59868$var$on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
                $3f324d5cc0e59868$var$on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
                options.supportPointer && $3f324d5cc0e59868$var$on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
                _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
            } else dragStartFn();
        }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(/** TouchEvent|PointerEvent **/ e) {
        var touch = e.touches ? e.touches[0] : e;
        if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
        $3f324d5cc0e59868$var$dragEl && $3f324d5cc0e59868$var$_disableDraggable($3f324d5cc0e59868$var$dragEl);
        clearTimeout(this._dragStartTimer);
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
        var ownerDocument = this.el.ownerDocument;
        $3f324d5cc0e59868$var$off(ownerDocument, 'mouseup', this._disableDelayedDrag);
        $3f324d5cc0e59868$var$off(ownerDocument, 'touchend', this._disableDelayedDrag);
        $3f324d5cc0e59868$var$off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
        $3f324d5cc0e59868$var$off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
        $3f324d5cc0e59868$var$off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
        $3f324d5cc0e59868$var$off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(/** Event */ evt, /** Touch */ touch) {
        touch = touch || evt.pointerType == 'touch' && evt;
        if (!this.nativeDraggable || touch) {
            if (this.options.supportPointer) $3f324d5cc0e59868$var$on(document, 'pointermove', this._onTouchMove);
            else if (touch) $3f324d5cc0e59868$var$on(document, 'touchmove', this._onTouchMove);
            else $3f324d5cc0e59868$var$on(document, 'mousemove', this._onTouchMove);
        } else {
            $3f324d5cc0e59868$var$on($3f324d5cc0e59868$var$dragEl, 'dragend', this);
            $3f324d5cc0e59868$var$on($3f324d5cc0e59868$var$rootEl, 'dragstart', this._onDragStart);
        }
        try {
            if (document.selection) // Timeout neccessary for IE9
            $3f324d5cc0e59868$var$_nextTick(function() {
                document.selection.empty();
            });
            else window.getSelection().removeAllRanges();
        } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
        $3f324d5cc0e59868$var$awaitingDragStarted = false;
        if ($3f324d5cc0e59868$var$rootEl && $3f324d5cc0e59868$var$dragEl) {
            $3f324d5cc0e59868$var$pluginEvent('dragStarted', this, {
                evt: evt
            });
            if (this.nativeDraggable) $3f324d5cc0e59868$var$on(document, 'dragover', $3f324d5cc0e59868$var$_checkOutsideTargetEl);
            var options = this.options; // Apply effect
            !fallback && $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$dragEl, options.dragClass, false);
            $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$dragEl, options.ghostClass, true);
            $3f324d5cc0e59868$export$31b3ca70d8f57423.active = this;
            fallback && this._appendGhost(); // Drag start event
            $3f324d5cc0e59868$var$_dispatchEvent({
                sortable: this,
                name: 'start',
                originalEvent: evt
            });
        } else this._nulling();
    },
    _emulateDragOver: function _emulateDragOver() {
        if ($3f324d5cc0e59868$var$touchEvt) {
            this._lastX = $3f324d5cc0e59868$var$touchEvt.clientX;
            this._lastY = $3f324d5cc0e59868$var$touchEvt.clientY;
            $3f324d5cc0e59868$var$_hideGhostForTarget();
            var target = document.elementFromPoint($3f324d5cc0e59868$var$touchEvt.clientX, $3f324d5cc0e59868$var$touchEvt.clientY);
            var parent = target;
            while(target && target.shadowRoot){
                target = target.shadowRoot.elementFromPoint($3f324d5cc0e59868$var$touchEvt.clientX, $3f324d5cc0e59868$var$touchEvt.clientY);
                if (target === parent) break;
                parent = target;
            }
            $3f324d5cc0e59868$var$dragEl.parentNode[$3f324d5cc0e59868$var$expando]._isOutsideThisEl(target);
            if (parent) do {
                if (parent[$3f324d5cc0e59868$var$expando]) {
                    var inserted = void 0;
                    inserted = parent[$3f324d5cc0e59868$var$expando]._onDragOver({
                        clientX: $3f324d5cc0e59868$var$touchEvt.clientX,
                        clientY: $3f324d5cc0e59868$var$touchEvt.clientY,
                        target: target,
                        rootEl: parent
                    });
                    if (inserted && !this.options.dragoverBubble) break;
                }
                target = parent; // store last element
            }while (parent = parent.parentNode);
            $3f324d5cc0e59868$var$_unhideGhostForTarget();
        }
    },
    _onTouchMove: function _onTouchMove(/**TouchEvent*/ evt) {
        if ($3f324d5cc0e59868$var$tapEvt) {
            var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = $3f324d5cc0e59868$var$ghostEl && $3f324d5cc0e59868$var$matrix($3f324d5cc0e59868$var$ghostEl, true), scaleX = $3f324d5cc0e59868$var$ghostEl && ghostMatrix && ghostMatrix.a, scaleY = $3f324d5cc0e59868$var$ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = $3f324d5cc0e59868$var$PositionGhostAbsolutely && $3f324d5cc0e59868$var$ghostRelativeParent && $3f324d5cc0e59868$var$getRelativeScrollOffset($3f324d5cc0e59868$var$ghostRelativeParent), dx = (touch.clientX - $3f324d5cc0e59868$var$tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - $3f324d5cc0e59868$var$ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - $3f324d5cc0e59868$var$tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - $3f324d5cc0e59868$var$ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging
            if (!$3f324d5cc0e59868$export$31b3ca70d8f57423.active && !$3f324d5cc0e59868$var$awaitingDragStarted) {
                if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
                this._onDragStart(evt, true);
            }
            if ($3f324d5cc0e59868$var$ghostEl) {
                if (ghostMatrix) {
                    ghostMatrix.e += dx - ($3f324d5cc0e59868$var$lastDx || 0);
                    ghostMatrix.f += dy - ($3f324d5cc0e59868$var$lastDy || 0);
                } else ghostMatrix = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: dx,
                    f: dy
                };
                var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
                $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'webkitTransform', cssMatrix);
                $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'mozTransform', cssMatrix);
                $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'msTransform', cssMatrix);
                $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'transform', cssMatrix);
                $3f324d5cc0e59868$var$lastDx = dx;
                $3f324d5cc0e59868$var$lastDy = dy;
                $3f324d5cc0e59868$var$touchEvt = touch;
            }
            evt.cancelable && evt.preventDefault();
        }
    },
    _appendGhost: function _appendGhost() {
        // Bug if using scale(): https://stackoverflow.com/questions/2637058
        // Not being adjusted for
        if (!$3f324d5cc0e59868$var$ghostEl) {
            var container = this.options.fallbackOnBody ? document.body : $3f324d5cc0e59868$var$rootEl, rect = $3f324d5cc0e59868$var$getRect($3f324d5cc0e59868$var$dragEl, true, $3f324d5cc0e59868$var$PositionGhostAbsolutely, true, container), options = this.options; // Position absolutely
            if ($3f324d5cc0e59868$var$PositionGhostAbsolutely) {
                // Get relatively positioned parent
                $3f324d5cc0e59868$var$ghostRelativeParent = container;
                while($3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostRelativeParent, 'position') === 'static' && $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostRelativeParent, 'transform') === 'none' && $3f324d5cc0e59868$var$ghostRelativeParent !== document)$3f324d5cc0e59868$var$ghostRelativeParent = $3f324d5cc0e59868$var$ghostRelativeParent.parentNode;
                if ($3f324d5cc0e59868$var$ghostRelativeParent !== document.body && $3f324d5cc0e59868$var$ghostRelativeParent !== document.documentElement) {
                    if ($3f324d5cc0e59868$var$ghostRelativeParent === document) $3f324d5cc0e59868$var$ghostRelativeParent = $3f324d5cc0e59868$var$getWindowScrollingElement();
                    rect.top += $3f324d5cc0e59868$var$ghostRelativeParent.scrollTop;
                    rect.left += $3f324d5cc0e59868$var$ghostRelativeParent.scrollLeft;
                } else $3f324d5cc0e59868$var$ghostRelativeParent = $3f324d5cc0e59868$var$getWindowScrollingElement();
                $3f324d5cc0e59868$var$ghostRelativeParentInitialScroll = $3f324d5cc0e59868$var$getRelativeScrollOffset($3f324d5cc0e59868$var$ghostRelativeParent);
            }
            $3f324d5cc0e59868$var$ghostEl = $3f324d5cc0e59868$var$dragEl.cloneNode(true);
            $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$ghostEl, options.ghostClass, false);
            $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$ghostEl, options.fallbackClass, true);
            $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$ghostEl, options.dragClass, true);
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'transition', '');
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'transform', '');
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'box-sizing', 'border-box');
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'margin', 0);
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'top', rect.top);
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'left', rect.left);
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'width', rect.width);
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'height', rect.height);
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'opacity', '0.8');
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'position', $3f324d5cc0e59868$var$PositionGhostAbsolutely ? 'absolute' : 'fixed');
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'zIndex', '100000');
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'pointerEvents', 'none');
            $3f324d5cc0e59868$export$31b3ca70d8f57423.ghost = $3f324d5cc0e59868$var$ghostEl;
            container.appendChild($3f324d5cc0e59868$var$ghostEl); // Set transform-origin
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$ghostEl, 'transform-origin', $3f324d5cc0e59868$var$tapDistanceLeft / parseInt($3f324d5cc0e59868$var$ghostEl.style.width) * 100 + '% ' + $3f324d5cc0e59868$var$tapDistanceTop / parseInt($3f324d5cc0e59868$var$ghostEl.style.height) * 100 + '%');
        }
    },
    _onDragStart: function _onDragStart(/**Event*/ evt, /**boolean*/ fallback) {
        var _this = this;
        var dataTransfer = evt.dataTransfer;
        var options = _this.options;
        $3f324d5cc0e59868$var$pluginEvent('dragStart', this, {
            evt: evt
        });
        if ($3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) {
            this._onDrop();
            return;
        }
        $3f324d5cc0e59868$var$pluginEvent('setupClone', this);
        if (!$3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) {
            $3f324d5cc0e59868$var$cloneEl = $3f324d5cc0e59868$var$clone($3f324d5cc0e59868$var$dragEl);
            $3f324d5cc0e59868$var$cloneEl.removeAttribute("id");
            $3f324d5cc0e59868$var$cloneEl.draggable = false;
            $3f324d5cc0e59868$var$cloneEl.style['will-change'] = '';
            this._hideClone();
            $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$cloneEl, this.options.chosenClass, false);
            $3f324d5cc0e59868$export$31b3ca70d8f57423.clone = $3f324d5cc0e59868$var$cloneEl;
        } // #1143: IFrame support workaround
        _this.cloneId = $3f324d5cc0e59868$var$_nextTick(function() {
            $3f324d5cc0e59868$var$pluginEvent('clone', _this);
            if ($3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) return;
            if (!_this.options.removeCloneOnHide) $3f324d5cc0e59868$var$rootEl.insertBefore($3f324d5cc0e59868$var$cloneEl, $3f324d5cc0e59868$var$dragEl);
            _this._hideClone();
            $3f324d5cc0e59868$var$_dispatchEvent({
                sortable: _this,
                name: 'clone'
            });
        });
        !fallback && $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$dragEl, options.dragClass, true); // Set proper drop events
        if (fallback) {
            $3f324d5cc0e59868$var$ignoreNextClick = true;
            _this._loopId = setInterval(_this._emulateDragOver, 50);
        } else {
            // Undo what was set in _prepareDragStart before drag started
            $3f324d5cc0e59868$var$off(document, 'mouseup', _this._onDrop);
            $3f324d5cc0e59868$var$off(document, 'touchend', _this._onDrop);
            $3f324d5cc0e59868$var$off(document, 'touchcancel', _this._onDrop);
            if (dataTransfer) {
                dataTransfer.effectAllowed = 'move';
                options.setData && options.setData.call(_this, dataTransfer, $3f324d5cc0e59868$var$dragEl);
            }
            $3f324d5cc0e59868$var$on(document, 'drop', _this); // #1276 fix:
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$dragEl, 'transform', 'translateZ(0)');
        }
        $3f324d5cc0e59868$var$awaitingDragStarted = true;
        _this._dragStartId = $3f324d5cc0e59868$var$_nextTick(_this._dragStarted.bind(_this, fallback, evt));
        $3f324d5cc0e59868$var$on(document, 'selectstart', _this);
        $3f324d5cc0e59868$var$moved = true;
        if ($3f324d5cc0e59868$var$Safari) $3f324d5cc0e59868$var$css(document.body, 'user-select', 'none');
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(/**Event*/ evt) {
        var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = $3f324d5cc0e59868$export$31b3ca70d8f57423.active, isOwner = $3f324d5cc0e59868$var$activeGroup === group, canSort = options.sort, fromSortable = $3f324d5cc0e59868$var$putSortable || activeSortable, vertical, _this = this, completedFired = false;
        if ($3f324d5cc0e59868$var$_silent) return;
        function dragOverEvent(name, extra) {
            $3f324d5cc0e59868$var$pluginEvent(name, _this, $3f324d5cc0e59868$var$_objectSpread2({
                evt: evt,
                isOwner: isOwner,
                axis: vertical ? 'vertical' : 'horizontal',
                revert: revert,
                dragRect: dragRect,
                targetRect: targetRect,
                canSort: canSort,
                fromSortable: fromSortable,
                target: target,
                completed: completed,
                onMove: function onMove(target, after) {
                    return $3f324d5cc0e59868$var$_onMove($3f324d5cc0e59868$var$rootEl, el, $3f324d5cc0e59868$var$dragEl, dragRect, target, $3f324d5cc0e59868$var$getRect(target), evt, after);
                },
                changed: changed
            }, extra));
        } // Capture animation state
        function capture() {
            dragOverEvent('dragOverAnimationCapture');
            _this.captureAnimationState();
            if (_this !== fromSortable) fromSortable.captureAnimationState();
        } // Return invocation when dragEl is inserted (or completed)
        function completed(insertion) {
            dragOverEvent('dragOverCompleted', {
                insertion: insertion
            });
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                else activeSortable._showClone(_this);
                if (_this !== fromSortable) {
                    // Set ghost class to new sortable's ghost class
                    $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$dragEl, $3f324d5cc0e59868$var$putSortable ? $3f324d5cc0e59868$var$putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                    $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$dragEl, options.ghostClass, true);
                }
                if ($3f324d5cc0e59868$var$putSortable !== _this && _this !== $3f324d5cc0e59868$export$31b3ca70d8f57423.active) $3f324d5cc0e59868$var$putSortable = _this;
                else if (_this === $3f324d5cc0e59868$export$31b3ca70d8f57423.active && $3f324d5cc0e59868$var$putSortable) $3f324d5cc0e59868$var$putSortable = null;
                 // Animation
                if (fromSortable === _this) _this._ignoreWhileAnimating = target;
                _this.animateAll(function() {
                    dragOverEvent('dragOverAnimationComplete');
                    _this._ignoreWhileAnimating = null;
                });
                if (_this !== fromSortable) {
                    fromSortable.animateAll();
                    fromSortable._ignoreWhileAnimating = null;
                }
            } // Null lastTarget if it is not inside a previously swapped element
            if (target === $3f324d5cc0e59868$var$dragEl && !$3f324d5cc0e59868$var$dragEl.animated || target === el && !target.animated) $3f324d5cc0e59868$var$lastTarget = null;
             // no bubbling and not fallback
            if (!options.dragoverBubble && !evt.rootEl && target !== document) {
                $3f324d5cc0e59868$var$dragEl.parentNode[$3f324d5cc0e59868$var$expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted
                !insertion && $3f324d5cc0e59868$var$nearestEmptyInsertDetectEvent(evt);
            }
            !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
            return completedFired = true;
        } // Call when dragEl has been inserted
        function changed() {
            $3f324d5cc0e59868$var$newIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl);
            $3f324d5cc0e59868$var$newDraggableIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl, options.draggable);
            $3f324d5cc0e59868$var$_dispatchEvent({
                sortable: _this,
                name: 'change',
                toEl: el,
                newIndex: $3f324d5cc0e59868$var$newIndex,
                newDraggableIndex: $3f324d5cc0e59868$var$newDraggableIndex,
                originalEvent: evt
            });
        }
        if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
        target = $3f324d5cc0e59868$var$closest(target, options.draggable, el, true);
        dragOverEvent('dragOver');
        if ($3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) return completedFired;
        if ($3f324d5cc0e59868$var$dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) return completed(false);
        $3f324d5cc0e59868$var$ignoreNextClick = false;
        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = $3f324d5cc0e59868$var$parentEl !== $3f324d5cc0e59868$var$rootEl // Reverting item into the original list
        ) : $3f324d5cc0e59868$var$putSortable === this || (this.lastPutMode = $3f324d5cc0e59868$var$activeGroup.checkPull(this, activeSortable, $3f324d5cc0e59868$var$dragEl, evt)) && group.checkPut(this, activeSortable, $3f324d5cc0e59868$var$dragEl, evt))) {
            vertical = this._getDirection(evt, target) === 'vertical';
            dragRect = $3f324d5cc0e59868$var$getRect($3f324d5cc0e59868$var$dragEl);
            dragOverEvent('dragOverValid');
            if ($3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) return completedFired;
            if (revert) {
                $3f324d5cc0e59868$var$parentEl = $3f324d5cc0e59868$var$rootEl; // actualization
                capture();
                this._hideClone();
                dragOverEvent('revert');
                if (!$3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) {
                    if ($3f324d5cc0e59868$var$nextEl) $3f324d5cc0e59868$var$rootEl.insertBefore($3f324d5cc0e59868$var$dragEl, $3f324d5cc0e59868$var$nextEl);
                    else $3f324d5cc0e59868$var$rootEl.appendChild($3f324d5cc0e59868$var$dragEl);
                }
                return completed(true);
            }
            var elLastChild = $3f324d5cc0e59868$var$lastChild(el, options.draggable);
            if (!elLastChild || $3f324d5cc0e59868$var$_ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
                // Insert to end of list
                // If already at end of list: Do not insert
                if (elLastChild === $3f324d5cc0e59868$var$dragEl) return completed(false);
                 // if there is a last element, it is the target
                if (elLastChild && el === evt.target) target = elLastChild;
                if (target) targetRect = $3f324d5cc0e59868$var$getRect(target);
                if ($3f324d5cc0e59868$var$_onMove($3f324d5cc0e59868$var$rootEl, el, $3f324d5cc0e59868$var$dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
                    capture();
                    if (elLastChild && elLastChild.nextSibling) // the last draggable element is not the last node
                    el.insertBefore($3f324d5cc0e59868$var$dragEl, elLastChild.nextSibling);
                    else el.appendChild($3f324d5cc0e59868$var$dragEl);
                    $3f324d5cc0e59868$var$parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (elLastChild && $3f324d5cc0e59868$var$_ghostIsFirst(evt, vertical, this)) {
                // Insert to start of list
                var firstChild = $3f324d5cc0e59868$var$getChild(el, 0, options, true);
                if (firstChild === $3f324d5cc0e59868$var$dragEl) return completed(false);
                target = firstChild;
                targetRect = $3f324d5cc0e59868$var$getRect(target);
                if ($3f324d5cc0e59868$var$_onMove($3f324d5cc0e59868$var$rootEl, el, $3f324d5cc0e59868$var$dragEl, dragRect, target, targetRect, evt, false) !== false) {
                    capture();
                    el.insertBefore($3f324d5cc0e59868$var$dragEl, firstChild);
                    $3f324d5cc0e59868$var$parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (target.parentNode === el) {
                targetRect = $3f324d5cc0e59868$var$getRect(target);
                var direction = 0, targetBeforeFirstSwap, differentLevel = $3f324d5cc0e59868$var$dragEl.parentNode !== el, differentRowCol = !$3f324d5cc0e59868$var$_dragElInRowColumn($3f324d5cc0e59868$var$dragEl.animated && $3f324d5cc0e59868$var$dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? 'top' : 'left', scrolledPastTop = $3f324d5cc0e59868$var$isScrolledPast(target, 'top', 'top') || $3f324d5cc0e59868$var$isScrolledPast($3f324d5cc0e59868$var$dragEl, 'top', 'top'), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
                if ($3f324d5cc0e59868$var$lastTarget !== target) {
                    targetBeforeFirstSwap = targetRect[side1];
                    $3f324d5cc0e59868$var$pastFirstInvertThresh = false;
                    $3f324d5cc0e59868$var$isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
                }
                direction = $3f324d5cc0e59868$var$_getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, $3f324d5cc0e59868$var$isCircumstantialInvert, $3f324d5cc0e59868$var$lastTarget === target);
                var sibling;
                if (direction !== 0) {
                    // Check if target is beside dragEl in respective direction (ignoring hidden elements)
                    var dragIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl);
                    do {
                        dragIndex -= direction;
                        sibling = $3f324d5cc0e59868$var$parentEl.children[dragIndex];
                    }while (sibling && ($3f324d5cc0e59868$var$css(sibling, 'display') === 'none' || sibling === $3f324d5cc0e59868$var$ghostEl));
                } // If dragEl is already beside target: Do not insert
                if (direction === 0 || sibling === target) return completed(false);
                $3f324d5cc0e59868$var$lastTarget = target;
                $3f324d5cc0e59868$var$lastDirection = direction;
                var nextSibling = target.nextElementSibling, after = false;
                after = direction === 1;
                var moveVector = $3f324d5cc0e59868$var$_onMove($3f324d5cc0e59868$var$rootEl, el, $3f324d5cc0e59868$var$dragEl, dragRect, target, targetRect, evt, after);
                if (moveVector !== false) {
                    if (moveVector === 1 || moveVector === -1) after = moveVector === 1;
                    $3f324d5cc0e59868$var$_silent = true;
                    setTimeout($3f324d5cc0e59868$var$_unsilent, 30);
                    capture();
                    if (after && !nextSibling) el.appendChild($3f324d5cc0e59868$var$dragEl);
                    else target.parentNode.insertBefore($3f324d5cc0e59868$var$dragEl, after ? nextSibling : target);
                     // Undo chrome's scroll adjustment (has no effect on other browsers)
                    if (scrolledPastTop) $3f324d5cc0e59868$var$scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                    $3f324d5cc0e59868$var$parentEl = $3f324d5cc0e59868$var$dragEl.parentNode; // actualization
                    // must be done before animation
                    if (targetBeforeFirstSwap !== undefined && !$3f324d5cc0e59868$var$isCircumstantialInvert) $3f324d5cc0e59868$var$targetMoveDistance = Math.abs(targetBeforeFirstSwap - $3f324d5cc0e59868$var$getRect(target)[side1]);
                    changed();
                    return completed(true);
                }
            }
            if (el.contains($3f324d5cc0e59868$var$dragEl)) return completed(false);
        }
        return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
        $3f324d5cc0e59868$var$off(document, 'mousemove', this._onTouchMove);
        $3f324d5cc0e59868$var$off(document, 'touchmove', this._onTouchMove);
        $3f324d5cc0e59868$var$off(document, 'pointermove', this._onTouchMove);
        $3f324d5cc0e59868$var$off(document, 'dragover', $3f324d5cc0e59868$var$nearestEmptyInsertDetectEvent);
        $3f324d5cc0e59868$var$off(document, 'mousemove', $3f324d5cc0e59868$var$nearestEmptyInsertDetectEvent);
        $3f324d5cc0e59868$var$off(document, 'touchmove', $3f324d5cc0e59868$var$nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
        var ownerDocument = this.el.ownerDocument;
        $3f324d5cc0e59868$var$off(ownerDocument, 'mouseup', this._onDrop);
        $3f324d5cc0e59868$var$off(ownerDocument, 'touchend', this._onDrop);
        $3f324d5cc0e59868$var$off(ownerDocument, 'pointerup', this._onDrop);
        $3f324d5cc0e59868$var$off(ownerDocument, 'touchcancel', this._onDrop);
        $3f324d5cc0e59868$var$off(document, 'selectstart', this);
    },
    _onDrop: function _onDrop(/**Event*/ evt) {
        var el = this.el, options = this.options; // Get the index of the dragged element within its parent
        $3f324d5cc0e59868$var$newIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl);
        $3f324d5cc0e59868$var$newDraggableIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl, options.draggable);
        $3f324d5cc0e59868$var$pluginEvent('drop', this, {
            evt: evt
        });
        $3f324d5cc0e59868$var$parentEl = $3f324d5cc0e59868$var$dragEl && $3f324d5cc0e59868$var$dragEl.parentNode; // Get again after plugin event
        $3f324d5cc0e59868$var$newIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl);
        $3f324d5cc0e59868$var$newDraggableIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl, options.draggable);
        if ($3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) {
            this._nulling();
            return;
        }
        $3f324d5cc0e59868$var$awaitingDragStarted = false;
        $3f324d5cc0e59868$var$isCircumstantialInvert = false;
        $3f324d5cc0e59868$var$pastFirstInvertThresh = false;
        clearInterval(this._loopId);
        clearTimeout(this._dragStartTimer);
        $3f324d5cc0e59868$var$_cancelNextTick(this.cloneId);
        $3f324d5cc0e59868$var$_cancelNextTick(this._dragStartId); // Unbind events
        if (this.nativeDraggable) {
            $3f324d5cc0e59868$var$off(document, 'drop', this);
            $3f324d5cc0e59868$var$off(el, 'dragstart', this._onDragStart);
        }
        this._offMoveEvents();
        this._offUpEvents();
        if ($3f324d5cc0e59868$var$Safari) $3f324d5cc0e59868$var$css(document.body, 'user-select', '');
        $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$dragEl, 'transform', '');
        if (evt) {
            if ($3f324d5cc0e59868$var$moved) {
                evt.cancelable && evt.preventDefault();
                !options.dropBubble && evt.stopPropagation();
            }
            $3f324d5cc0e59868$var$ghostEl && $3f324d5cc0e59868$var$ghostEl.parentNode && $3f324d5cc0e59868$var$ghostEl.parentNode.removeChild($3f324d5cc0e59868$var$ghostEl);
            if ($3f324d5cc0e59868$var$rootEl === $3f324d5cc0e59868$var$parentEl || $3f324d5cc0e59868$var$putSortable && $3f324d5cc0e59868$var$putSortable.lastPutMode !== 'clone') // Remove clone(s)
            $3f324d5cc0e59868$var$cloneEl && $3f324d5cc0e59868$var$cloneEl.parentNode && $3f324d5cc0e59868$var$cloneEl.parentNode.removeChild($3f324d5cc0e59868$var$cloneEl);
            if ($3f324d5cc0e59868$var$dragEl) {
                if (this.nativeDraggable) $3f324d5cc0e59868$var$off($3f324d5cc0e59868$var$dragEl, 'dragend', this);
                $3f324d5cc0e59868$var$_disableDraggable($3f324d5cc0e59868$var$dragEl);
                $3f324d5cc0e59868$var$dragEl.style['will-change'] = ''; // Remove classes
                // ghostClass is added in dragStarted
                if ($3f324d5cc0e59868$var$moved && !$3f324d5cc0e59868$var$awaitingDragStarted) $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$dragEl, $3f324d5cc0e59868$var$putSortable ? $3f324d5cc0e59868$var$putSortable.options.ghostClass : this.options.ghostClass, false);
                $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$dragEl, this.options.chosenClass, false); // Drag stop event
                $3f324d5cc0e59868$var$_dispatchEvent({
                    sortable: this,
                    name: 'unchoose',
                    toEl: $3f324d5cc0e59868$var$parentEl,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: evt
                });
                if ($3f324d5cc0e59868$var$rootEl !== $3f324d5cc0e59868$var$parentEl) {
                    if ($3f324d5cc0e59868$var$newIndex >= 0) {
                        // Add event
                        $3f324d5cc0e59868$var$_dispatchEvent({
                            rootEl: $3f324d5cc0e59868$var$parentEl,
                            name: 'add',
                            toEl: $3f324d5cc0e59868$var$parentEl,
                            fromEl: $3f324d5cc0e59868$var$rootEl,
                            originalEvent: evt
                        }); // Remove event
                        $3f324d5cc0e59868$var$_dispatchEvent({
                            sortable: this,
                            name: 'remove',
                            toEl: $3f324d5cc0e59868$var$parentEl,
                            originalEvent: evt
                        }); // drag from one list and drop into another
                        $3f324d5cc0e59868$var$_dispatchEvent({
                            rootEl: $3f324d5cc0e59868$var$parentEl,
                            name: 'sort',
                            toEl: $3f324d5cc0e59868$var$parentEl,
                            fromEl: $3f324d5cc0e59868$var$rootEl,
                            originalEvent: evt
                        });
                        $3f324d5cc0e59868$var$_dispatchEvent({
                            sortable: this,
                            name: 'sort',
                            toEl: $3f324d5cc0e59868$var$parentEl,
                            originalEvent: evt
                        });
                    }
                    $3f324d5cc0e59868$var$putSortable && $3f324d5cc0e59868$var$putSortable.save();
                } else {
                    if ($3f324d5cc0e59868$var$newIndex !== $3f324d5cc0e59868$var$oldIndex) {
                        if ($3f324d5cc0e59868$var$newIndex >= 0) {
                            // drag & drop within the same list
                            $3f324d5cc0e59868$var$_dispatchEvent({
                                sortable: this,
                                name: 'update',
                                toEl: $3f324d5cc0e59868$var$parentEl,
                                originalEvent: evt
                            });
                            $3f324d5cc0e59868$var$_dispatchEvent({
                                sortable: this,
                                name: 'sort',
                                toEl: $3f324d5cc0e59868$var$parentEl,
                                originalEvent: evt
                            });
                        }
                    }
                }
                if ($3f324d5cc0e59868$export$31b3ca70d8f57423.active) {
                    /* jshint eqnull:true */ if ($3f324d5cc0e59868$var$newIndex == null || $3f324d5cc0e59868$var$newIndex === -1) {
                        $3f324d5cc0e59868$var$newIndex = $3f324d5cc0e59868$var$oldIndex;
                        $3f324d5cc0e59868$var$newDraggableIndex = $3f324d5cc0e59868$var$oldDraggableIndex;
                    }
                    $3f324d5cc0e59868$var$_dispatchEvent({
                        sortable: this,
                        name: 'end',
                        toEl: $3f324d5cc0e59868$var$parentEl,
                        originalEvent: evt
                    }); // Save sorting
                    this.save();
                }
            }
        }
        this._nulling();
    },
    _nulling: function _nulling() {
        $3f324d5cc0e59868$var$pluginEvent('nulling', this);
        $3f324d5cc0e59868$var$rootEl = $3f324d5cc0e59868$var$dragEl = $3f324d5cc0e59868$var$parentEl = $3f324d5cc0e59868$var$ghostEl = $3f324d5cc0e59868$var$nextEl = $3f324d5cc0e59868$var$cloneEl = $3f324d5cc0e59868$var$lastDownEl = $3f324d5cc0e59868$var$cloneHidden = $3f324d5cc0e59868$var$tapEvt = $3f324d5cc0e59868$var$touchEvt = $3f324d5cc0e59868$var$moved = $3f324d5cc0e59868$var$newIndex = $3f324d5cc0e59868$var$newDraggableIndex = $3f324d5cc0e59868$var$oldIndex = $3f324d5cc0e59868$var$oldDraggableIndex = $3f324d5cc0e59868$var$lastTarget = $3f324d5cc0e59868$var$lastDirection = $3f324d5cc0e59868$var$putSortable = $3f324d5cc0e59868$var$activeGroup = $3f324d5cc0e59868$export$31b3ca70d8f57423.dragged = $3f324d5cc0e59868$export$31b3ca70d8f57423.ghost = $3f324d5cc0e59868$export$31b3ca70d8f57423.clone = $3f324d5cc0e59868$export$31b3ca70d8f57423.active = null;
        $3f324d5cc0e59868$var$savedInputChecked.forEach(function(el) {
            el.checked = true;
        });
        $3f324d5cc0e59868$var$savedInputChecked.length = $3f324d5cc0e59868$var$lastDx = $3f324d5cc0e59868$var$lastDy = 0;
    },
    handleEvent: function handleEvent(/**Event*/ evt) {
        switch(evt.type){
            case 'drop':
            case 'dragend':
                this._onDrop(evt);
                break;
            case 'dragenter':
            case 'dragover':
                if ($3f324d5cc0e59868$var$dragEl) {
                    this._onDragOver(evt);
                    $3f324d5cc0e59868$var$_globalDragOver(evt);
                }
                break;
            case 'selectstart':
                evt.preventDefault();
                break;
        }
    },
    /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */ toArray: function toArray() {
        var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
        for(; i < n; i++){
            el = children[i];
            if ($3f324d5cc0e59868$var$closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || $3f324d5cc0e59868$var$_generateId(el));
        }
        return order;
    },
    /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */ sort: function sort(order, useAnimation) {
        var items = {}, rootEl = this.el;
        this.toArray().forEach(function(id, i) {
            var el = rootEl.children[i];
            if ($3f324d5cc0e59868$var$closest(el, this.options.draggable, rootEl, false)) items[id] = el;
        }, this);
        useAnimation && this.captureAnimationState();
        order.forEach(function(id) {
            if (items[id]) {
                rootEl.removeChild(items[id]);
                rootEl.appendChild(items[id]);
            }
        });
        useAnimation && this.animateAll();
    },
    /**
   * Save the current sorting
   */ save: function save() {
        var store = this.options.store;
        store && store.set && store.set(this);
    },
    /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */ closest: function closest$1(el, selector) {
        return $3f324d5cc0e59868$var$closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */ option: function option(name, value) {
        var options = this.options;
        if (value === void 0) return options[name];
        else {
            var modifiedValue = $3f324d5cc0e59868$var$PluginManager.modifyOption(this, name, value);
            if (typeof modifiedValue !== 'undefined') options[name] = modifiedValue;
            else options[name] = value;
            if (name === 'group') $3f324d5cc0e59868$var$_prepareGroup(options);
        }
    },
    /**
   * Destroy
   */ destroy: function destroy() {
        $3f324d5cc0e59868$var$pluginEvent('destroy', this);
        var el = this.el;
        el[$3f324d5cc0e59868$var$expando] = null;
        $3f324d5cc0e59868$var$off(el, 'mousedown', this._onTapStart);
        $3f324d5cc0e59868$var$off(el, 'touchstart', this._onTapStart);
        $3f324d5cc0e59868$var$off(el, 'pointerdown', this._onTapStart);
        if (this.nativeDraggable) {
            $3f324d5cc0e59868$var$off(el, 'dragover', this);
            $3f324d5cc0e59868$var$off(el, 'dragenter', this);
        } // Remove draggable attributes
        Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function(el) {
            el.removeAttribute('draggable');
        });
        this._onDrop();
        this._disableDelayedDragEvents();
        $3f324d5cc0e59868$var$sortables.splice($3f324d5cc0e59868$var$sortables.indexOf(this.el), 1);
        this.el = el = null;
    },
    _hideClone: function _hideClone() {
        if (!$3f324d5cc0e59868$var$cloneHidden) {
            $3f324d5cc0e59868$var$pluginEvent('hideClone', this);
            if ($3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) return;
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$cloneEl, 'display', 'none');
            if (this.options.removeCloneOnHide && $3f324d5cc0e59868$var$cloneEl.parentNode) $3f324d5cc0e59868$var$cloneEl.parentNode.removeChild($3f324d5cc0e59868$var$cloneEl);
            $3f324d5cc0e59868$var$cloneHidden = true;
        }
    },
    _showClone: function _showClone(putSortable) {
        if (putSortable.lastPutMode !== 'clone') {
            this._hideClone();
            return;
        }
        if ($3f324d5cc0e59868$var$cloneHidden) {
            $3f324d5cc0e59868$var$pluginEvent('showClone', this);
            if ($3f324d5cc0e59868$export$31b3ca70d8f57423.eventCanceled) return; // show clone at dragEl or original position
            if ($3f324d5cc0e59868$var$dragEl.parentNode == $3f324d5cc0e59868$var$rootEl && !this.options.group.revertClone) $3f324d5cc0e59868$var$rootEl.insertBefore($3f324d5cc0e59868$var$cloneEl, $3f324d5cc0e59868$var$dragEl);
            else if ($3f324d5cc0e59868$var$nextEl) $3f324d5cc0e59868$var$rootEl.insertBefore($3f324d5cc0e59868$var$cloneEl, $3f324d5cc0e59868$var$nextEl);
            else $3f324d5cc0e59868$var$rootEl.appendChild($3f324d5cc0e59868$var$cloneEl);
            if (this.options.group.revertClone) this.animate($3f324d5cc0e59868$var$dragEl, $3f324d5cc0e59868$var$cloneEl);
            $3f324d5cc0e59868$var$css($3f324d5cc0e59868$var$cloneEl, 'display', '');
            $3f324d5cc0e59868$var$cloneHidden = false;
        }
    }
};
function $3f324d5cc0e59868$var$_globalDragOver(/**Event*/ evt) {
    if (evt.dataTransfer) evt.dataTransfer.dropEffect = 'move';
    evt.cancelable && evt.preventDefault();
}
function $3f324d5cc0e59868$var$_onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt, sortable = fromEl[$3f324d5cc0e59868$var$expando], onMoveFn = sortable.options.onMove, retVal; // Support for new CustomEvent feature
    if (window.CustomEvent && !$3f324d5cc0e59868$var$IE11OrLess && !$3f324d5cc0e59868$var$Edge) evt = new CustomEvent('move', {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent('Event');
        evt.initEvent('move', true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || $3f324d5cc0e59868$var$getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
    return retVal;
}
function $3f324d5cc0e59868$var$_disableDraggable(el) {
    el.draggable = false;
}
function $3f324d5cc0e59868$var$_unsilent() {
    $3f324d5cc0e59868$var$_silent = false;
}
function $3f324d5cc0e59868$var$_ghostIsFirst(evt, vertical, sortable) {
    var rect = $3f324d5cc0e59868$var$getRect($3f324d5cc0e59868$var$getChild(sortable.el, 0, sortable.options, true));
    var spacer = 10;
    return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function $3f324d5cc0e59868$var$_ghostIsLast(evt, vertical, sortable) {
    var rect = $3f324d5cc0e59868$var$getRect($3f324d5cc0e59868$var$lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function $3f324d5cc0e59868$var$_getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
    if (!invertSwap) {
        // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
        if (isLastTarget && $3f324d5cc0e59868$var$targetMoveDistance < targetLength * swapThreshold) {
            // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
            // check if past first invert threshold on side opposite of lastDirection
            if (!$3f324d5cc0e59868$var$pastFirstInvertThresh && ($3f324d5cc0e59868$var$lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) // past first invert threshold, do not restrict inverted threshold to dragEl shadow
            $3f324d5cc0e59868$var$pastFirstInvertThresh = true;
            if (!$3f324d5cc0e59868$var$pastFirstInvertThresh) {
                // dragEl shadow (target move distance shadow)
                if ($3f324d5cc0e59868$var$lastDirection === 1 ? mouseOnAxis < targetS1 + $3f324d5cc0e59868$var$targetMoveDistance // over dragEl shadow
                 : mouseOnAxis > targetS2 - $3f324d5cc0e59868$var$targetMoveDistance) return -$3f324d5cc0e59868$var$lastDirection;
            } else invert = true;
        } else {
            // Regular
            if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return $3f324d5cc0e59868$var$_getInsertDirection(target);
        }
    }
    invert = invert || invertSwap;
    if (invert) {
        // Invert of regular
        if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
    return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */ function $3f324d5cc0e59868$var$_getInsertDirection(target) {
    if ($3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl) < $3f324d5cc0e59868$var$index(target)) return 1;
    else return -1;
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */ function $3f324d5cc0e59868$var$_generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
    while(i--)sum += str.charCodeAt(i);
    return sum.toString(36);
}
function $3f324d5cc0e59868$var$_saveInputCheckedState(root) {
    $3f324d5cc0e59868$var$savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName('input');
    var idx = inputs.length;
    while(idx--){
        var el = inputs[idx];
        el.checked && $3f324d5cc0e59868$var$savedInputChecked.push(el);
    }
}
function $3f324d5cc0e59868$var$_nextTick(fn) {
    return setTimeout(fn, 0);
}
function $3f324d5cc0e59868$var$_cancelNextTick(id) {
    return clearTimeout(id);
} // Fixed #973:
if ($3f324d5cc0e59868$var$documentExists) $3f324d5cc0e59868$var$on(document, 'touchmove', function(evt) {
    if (($3f324d5cc0e59868$export$31b3ca70d8f57423.active || $3f324d5cc0e59868$var$awaitingDragStarted) && evt.cancelable) evt.preventDefault();
});
 // Export utils
$3f324d5cc0e59868$export$31b3ca70d8f57423.utils = {
    on: $3f324d5cc0e59868$var$on,
    off: $3f324d5cc0e59868$var$off,
    css: $3f324d5cc0e59868$var$css,
    find: $3f324d5cc0e59868$var$find,
    is: function is(el, selector) {
        return !!$3f324d5cc0e59868$var$closest(el, selector, el, false);
    },
    extend: $3f324d5cc0e59868$var$extend,
    throttle: $3f324d5cc0e59868$var$throttle,
    closest: $3f324d5cc0e59868$var$closest,
    toggleClass: $3f324d5cc0e59868$var$toggleClass,
    clone: $3f324d5cc0e59868$var$clone,
    index: $3f324d5cc0e59868$var$index,
    nextTick: $3f324d5cc0e59868$var$_nextTick,
    cancelNextTick: $3f324d5cc0e59868$var$_cancelNextTick,
    detectDirection: $3f324d5cc0e59868$var$_detectDirection,
    getChild: $3f324d5cc0e59868$var$getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */ $3f324d5cc0e59868$export$31b3ca70d8f57423.get = function(element) {
    return element[$3f324d5cc0e59868$var$expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */ $3f324d5cc0e59868$export$31b3ca70d8f57423.mount = function() {
    for(var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++)plugins[_key] = arguments[_key];
    if (plugins[0].constructor === Array) plugins = plugins[0];
    plugins.forEach(function(plugin) {
        if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(plugin));
        if (plugin.utils) $3f324d5cc0e59868$export$31b3ca70d8f57423.utils = $3f324d5cc0e59868$var$_objectSpread2($3f324d5cc0e59868$var$_objectSpread2({}, $3f324d5cc0e59868$export$31b3ca70d8f57423.utils), plugin.utils);
        $3f324d5cc0e59868$var$PluginManager.mount(plugin);
    });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */ $3f324d5cc0e59868$export$31b3ca70d8f57423.create = function(el, options) {
    return new $3f324d5cc0e59868$export$31b3ca70d8f57423(el, options);
}; // Export
$3f324d5cc0e59868$export$31b3ca70d8f57423.version = $3f324d5cc0e59868$var$version;
var $3f324d5cc0e59868$var$autoScrolls = [], $3f324d5cc0e59868$var$scrollEl, $3f324d5cc0e59868$var$scrollRootEl, $3f324d5cc0e59868$var$scrolling = false, $3f324d5cc0e59868$var$lastAutoScrollX, $3f324d5cc0e59868$var$lastAutoScrollY, $3f324d5cc0e59868$var$touchEvt$1, $3f324d5cc0e59868$var$pointerElemChangedInterval;
function $3f324d5cc0e59868$var$AutoScrollPlugin() {
    function AutoScroll() {
        this.defaults = {
            scroll: true,
            forceAutoScrollFallback: false,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
        }; // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
    }
    AutoScroll.prototype = {
        dragStarted: function dragStarted(_ref) {
            var originalEvent = _ref.originalEvent;
            if (this.sortable.nativeDraggable) $3f324d5cc0e59868$var$on(document, 'dragover', this._handleAutoScroll);
            else {
                if (this.options.supportPointer) $3f324d5cc0e59868$var$on(document, 'pointermove', this._handleFallbackAutoScroll);
                else if (originalEvent.touches) $3f324d5cc0e59868$var$on(document, 'touchmove', this._handleFallbackAutoScroll);
                else $3f324d5cc0e59868$var$on(document, 'mousemove', this._handleFallbackAutoScroll);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref2) {
            var originalEvent = _ref2.originalEvent;
            // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
            if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
        },
        drop: function drop() {
            if (this.sortable.nativeDraggable) $3f324d5cc0e59868$var$off(document, 'dragover', this._handleAutoScroll);
            else {
                $3f324d5cc0e59868$var$off(document, 'pointermove', this._handleFallbackAutoScroll);
                $3f324d5cc0e59868$var$off(document, 'touchmove', this._handleFallbackAutoScroll);
                $3f324d5cc0e59868$var$off(document, 'mousemove', this._handleFallbackAutoScroll);
            }
            $3f324d5cc0e59868$var$clearPointerElemChangedInterval();
            $3f324d5cc0e59868$var$clearAutoScrolls();
            $3f324d5cc0e59868$var$cancelThrottle();
        },
        nulling: function nulling() {
            $3f324d5cc0e59868$var$touchEvt$1 = $3f324d5cc0e59868$var$scrollRootEl = $3f324d5cc0e59868$var$scrollEl = $3f324d5cc0e59868$var$scrolling = $3f324d5cc0e59868$var$pointerElemChangedInterval = $3f324d5cc0e59868$var$lastAutoScrollX = $3f324d5cc0e59868$var$lastAutoScrollY = null;
            $3f324d5cc0e59868$var$autoScrolls.length = 0;
        },
        _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
            this._handleAutoScroll(evt, true);
        },
        _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
            var _this = this;
            var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
            $3f324d5cc0e59868$var$touchEvt$1 = evt; // IE does not seem to have native autoscroll,
            // Edge's autoscroll seems too conditional,
            // MACOS Safari does not have autoscroll,
            // Firefox and Chrome are good
            if (fallback || this.options.forceAutoScrollFallback || $3f324d5cc0e59868$var$Edge || $3f324d5cc0e59868$var$IE11OrLess || $3f324d5cc0e59868$var$Safari) {
                $3f324d5cc0e59868$var$autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change
                var ogElemScroller = $3f324d5cc0e59868$var$getParentAutoScrollElement(elem, true);
                if ($3f324d5cc0e59868$var$scrolling && (!$3f324d5cc0e59868$var$pointerElemChangedInterval || x !== $3f324d5cc0e59868$var$lastAutoScrollX || y !== $3f324d5cc0e59868$var$lastAutoScrollY)) {
                    $3f324d5cc0e59868$var$pointerElemChangedInterval && $3f324d5cc0e59868$var$clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour
                    $3f324d5cc0e59868$var$pointerElemChangedInterval = setInterval(function() {
                        var newElem = $3f324d5cc0e59868$var$getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                        if (newElem !== ogElemScroller) {
                            ogElemScroller = newElem;
                            $3f324d5cc0e59868$var$clearAutoScrolls();
                        }
                        $3f324d5cc0e59868$var$autoScroll(evt, _this.options, newElem, fallback);
                    }, 10);
                    $3f324d5cc0e59868$var$lastAutoScrollX = x;
                    $3f324d5cc0e59868$var$lastAutoScrollY = y;
                }
            } else {
                // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                if (!this.options.bubbleScroll || $3f324d5cc0e59868$var$getParentAutoScrollElement(elem, true) === $3f324d5cc0e59868$var$getWindowScrollingElement()) {
                    $3f324d5cc0e59868$var$clearAutoScrolls();
                    return;
                }
                $3f324d5cc0e59868$var$autoScroll(evt, this.options, $3f324d5cc0e59868$var$getParentAutoScrollElement(elem, false), false);
            }
        }
    };
    return $3f324d5cc0e59868$var$_extends(AutoScroll, {
        pluginName: 'scroll',
        initializeByDefault: true
    });
}
function $3f324d5cc0e59868$var$clearAutoScrolls() {
    $3f324d5cc0e59868$var$autoScrolls.forEach(function(autoScroll) {
        clearInterval(autoScroll.pid);
    });
    $3f324d5cc0e59868$var$autoScrolls = [];
}
function $3f324d5cc0e59868$var$clearPointerElemChangedInterval() {
    clearInterval($3f324d5cc0e59868$var$pointerElemChangedInterval);
}
var $3f324d5cc0e59868$var$autoScroll = $3f324d5cc0e59868$var$throttle(function(evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = $3f324d5cc0e59868$var$getWindowScrollingElement();
    var scrollThisInstance = false, scrollCustomFn; // New scroll root, set scrollEl
    if ($3f324d5cc0e59868$var$scrollRootEl !== rootEl) {
        $3f324d5cc0e59868$var$scrollRootEl = rootEl;
        $3f324d5cc0e59868$var$clearAutoScrolls();
        $3f324d5cc0e59868$var$scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;
        if ($3f324d5cc0e59868$var$scrollEl === true) $3f324d5cc0e59868$var$scrollEl = $3f324d5cc0e59868$var$getParentAutoScrollElement(rootEl, true);
    }
    var layersOut = 0;
    var currentParent = $3f324d5cc0e59868$var$scrollEl;
    do {
        var el = currentParent, rect = $3f324d5cc0e59868$var$getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = $3f324d5cc0e59868$var$css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
        if (el === winScroller) {
            canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
            canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
        } else {
            canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
            canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
        }
        var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
        var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
        if (!$3f324d5cc0e59868$var$autoScrolls[layersOut]) {
            for(var i = 0; i <= layersOut; i++)if (!$3f324d5cc0e59868$var$autoScrolls[i]) $3f324d5cc0e59868$var$autoScrolls[i] = {};
        }
        if ($3f324d5cc0e59868$var$autoScrolls[layersOut].vx != vx || $3f324d5cc0e59868$var$autoScrolls[layersOut].vy != vy || $3f324d5cc0e59868$var$autoScrolls[layersOut].el !== el) {
            $3f324d5cc0e59868$var$autoScrolls[layersOut].el = el;
            $3f324d5cc0e59868$var$autoScrolls[layersOut].vx = vx;
            $3f324d5cc0e59868$var$autoScrolls[layersOut].vy = vy;
            clearInterval($3f324d5cc0e59868$var$autoScrolls[layersOut].pid);
            if (vx != 0 || vy != 0) {
                scrollThisInstance = true;
                /* jshint loopfunc:true */ $3f324d5cc0e59868$var$autoScrolls[layersOut].pid = setInterval((function() {
                    // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                    if (isFallback && this.layer === 0) $3f324d5cc0e59868$export$31b3ca70d8f57423.active._onTouchMove($3f324d5cc0e59868$var$touchEvt$1); // To move ghost if it is positioned absolutely
                    var scrollOffsetY = $3f324d5cc0e59868$var$autoScrolls[this.layer].vy ? $3f324d5cc0e59868$var$autoScrolls[this.layer].vy * speed : 0;
                    var scrollOffsetX = $3f324d5cc0e59868$var$autoScrolls[this.layer].vx ? $3f324d5cc0e59868$var$autoScrolls[this.layer].vx * speed : 0;
                    if (typeof scrollCustomFn === 'function') {
                        if (scrollCustomFn.call($3f324d5cc0e59868$export$31b3ca70d8f57423.dragged.parentNode[$3f324d5cc0e59868$var$expando], scrollOffsetX, scrollOffsetY, evt, $3f324d5cc0e59868$var$touchEvt$1, $3f324d5cc0e59868$var$autoScrolls[this.layer].el) !== 'continue') return;
                    }
                    $3f324d5cc0e59868$var$scrollBy($3f324d5cc0e59868$var$autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                }).bind({
                    layer: layersOut
                }), 24);
            }
        }
        layersOut++;
    }while (options.bubbleScroll && currentParent !== winScroller && (currentParent = $3f324d5cc0e59868$var$getParentAutoScrollElement(currentParent, false)));
    $3f324d5cc0e59868$var$scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var $3f324d5cc0e59868$var$drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
        dispatchSortableEvent('spill');
        this.onSpill({
            dragEl: dragEl,
            putSortable: putSortable
        });
    }
};
function $3f324d5cc0e59868$var$Revert() {}
$3f324d5cc0e59868$var$Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
        var oldDraggableIndex = _ref2.oldDraggableIndex;
        this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
        var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
        this.sortable.captureAnimationState();
        if (putSortable) putSortable.captureAnimationState();
        var nextSibling = $3f324d5cc0e59868$var$getChild(this.sortable.el, this.startIndex, this.options);
        if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling);
        else this.sortable.el.appendChild(dragEl);
        this.sortable.animateAll();
        if (putSortable) putSortable.animateAll();
    },
    drop: $3f324d5cc0e59868$var$drop
};
$3f324d5cc0e59868$var$_extends($3f324d5cc0e59868$var$Revert, {
    pluginName: 'revertOnSpill'
});
function $3f324d5cc0e59868$var$Remove() {}
$3f324d5cc0e59868$var$Remove.prototype = {
    onSpill: function onSpill(_ref4) {
        var dragEl = _ref4.dragEl, putSortable = _ref4.putSortable;
        var parentSortable = putSortable || this.sortable;
        parentSortable.captureAnimationState();
        dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
        parentSortable.animateAll();
    },
    drop: $3f324d5cc0e59868$var$drop
};
$3f324d5cc0e59868$var$_extends($3f324d5cc0e59868$var$Remove, {
    pluginName: 'removeOnSpill'
});
var $3f324d5cc0e59868$var$lastSwapEl;
function $3f324d5cc0e59868$export$bdb5f0a1b77546f4() {
    function Swap() {
        this.defaults = {
            swapClass: 'sortable-swap-highlight'
        };
    }
    Swap.prototype = {
        dragStart: function dragStart(_ref) {
            var dragEl = _ref.dragEl;
            $3f324d5cc0e59868$var$lastSwapEl = dragEl;
        },
        dragOverValid: function dragOverValid(_ref2) {
            var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
            if (!activeSortable.options.swap) return;
            var el = this.sortable.el, options = this.options;
            if (target && target !== el) {
                var prevSwapEl = $3f324d5cc0e59868$var$lastSwapEl;
                if (onMove(target) !== false) {
                    $3f324d5cc0e59868$var$toggleClass(target, options.swapClass, true);
                    $3f324d5cc0e59868$var$lastSwapEl = target;
                } else $3f324d5cc0e59868$var$lastSwapEl = null;
                if (prevSwapEl && prevSwapEl !== $3f324d5cc0e59868$var$lastSwapEl) $3f324d5cc0e59868$var$toggleClass(prevSwapEl, options.swapClass, false);
            }
            changed();
            completed(true);
            cancel();
        },
        drop: function drop(_ref3) {
            var activeSortable = _ref3.activeSortable, putSortable = _ref3.putSortable, dragEl = _ref3.dragEl;
            var toSortable = putSortable || this.sortable;
            var options = this.options;
            $3f324d5cc0e59868$var$lastSwapEl && $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$lastSwapEl, options.swapClass, false);
            if ($3f324d5cc0e59868$var$lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
                if (dragEl !== $3f324d5cc0e59868$var$lastSwapEl) {
                    toSortable.captureAnimationState();
                    if (toSortable !== activeSortable) activeSortable.captureAnimationState();
                    $3f324d5cc0e59868$var$swapNodes(dragEl, $3f324d5cc0e59868$var$lastSwapEl);
                    toSortable.animateAll();
                    if (toSortable !== activeSortable) activeSortable.animateAll();
                }
            }
        },
        nulling: function nulling() {
            $3f324d5cc0e59868$var$lastSwapEl = null;
        }
    };
    return $3f324d5cc0e59868$var$_extends(Swap, {
        pluginName: 'swap',
        eventProperties: function eventProperties() {
            return {
                swapItem: $3f324d5cc0e59868$var$lastSwapEl
            };
        }
    });
}
function $3f324d5cc0e59868$var$swapNodes(n1, n2) {
    var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = $3f324d5cc0e59868$var$index(n1);
    i2 = $3f324d5cc0e59868$var$index(n2);
    if (p1.isEqualNode(p2) && i1 < i2) i2++;
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
var $3f324d5cc0e59868$var$multiDragElements = [], $3f324d5cc0e59868$var$multiDragClones = [], $3f324d5cc0e59868$var$lastMultiDragSelect, // for selection with modifier key down (SHIFT)
$3f324d5cc0e59868$var$multiDragSortable, $3f324d5cc0e59868$var$initialFolding = false, // Initial multi-drag fold when drag started
$3f324d5cc0e59868$var$folding = false, // Folding any other time
$3f324d5cc0e59868$var$dragStarted = false, $3f324d5cc0e59868$var$dragEl$1, $3f324d5cc0e59868$var$clonesFromRect, $3f324d5cc0e59868$var$clonesHidden;
function $3f324d5cc0e59868$export$18e5d2a5d1df842d() {
    function MultiDrag(sortable) {
        // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
        if (!sortable.options.avoidImplicitDeselect) {
            if (sortable.options.supportPointer) $3f324d5cc0e59868$var$on(document, 'pointerup', this._deselectMultiDrag);
            else {
                $3f324d5cc0e59868$var$on(document, 'mouseup', this._deselectMultiDrag);
                $3f324d5cc0e59868$var$on(document, 'touchend', this._deselectMultiDrag);
            }
        }
        $3f324d5cc0e59868$var$on(document, 'keydown', this._checkKeyDown);
        $3f324d5cc0e59868$var$on(document, 'keyup', this._checkKeyUp);
        this.defaults = {
            selectedClass: 'sortable-selected',
            multiDragKey: null,
            avoidImplicitDeselect: false,
            setData: function setData(dataTransfer, dragEl) {
                var data = '';
                if ($3f324d5cc0e59868$var$multiDragElements.length && $3f324d5cc0e59868$var$multiDragSortable === sortable) $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement, i) {
                    data += (!i ? '' : ', ') + multiDragElement.textContent;
                });
                else data = dragEl.textContent;
                dataTransfer.setData('Text', data);
            }
        };
    }
    MultiDrag.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function delayStartGlobal(_ref) {
            var dragged = _ref.dragEl;
            $3f324d5cc0e59868$var$dragEl$1 = dragged;
        },
        delayEnded: function delayEnded() {
            this.isMultiDrag = ~$3f324d5cc0e59868$var$multiDragElements.indexOf($3f324d5cc0e59868$var$dragEl$1);
        },
        setupClone: function setupClone(_ref2) {
            var sortable = _ref2.sortable, cancel = _ref2.cancel;
            if (!this.isMultiDrag) return;
            for(var i = 0; i < $3f324d5cc0e59868$var$multiDragElements.length; i++){
                $3f324d5cc0e59868$var$multiDragClones.push($3f324d5cc0e59868$var$clone($3f324d5cc0e59868$var$multiDragElements[i]));
                $3f324d5cc0e59868$var$multiDragClones[i].sortableIndex = $3f324d5cc0e59868$var$multiDragElements[i].sortableIndex;
                $3f324d5cc0e59868$var$multiDragClones[i].draggable = false;
                $3f324d5cc0e59868$var$multiDragClones[i].style['will-change'] = '';
                $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$multiDragClones[i], this.options.selectedClass, false);
                $3f324d5cc0e59868$var$multiDragElements[i] === $3f324d5cc0e59868$var$dragEl$1 && $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$multiDragClones[i], this.options.chosenClass, false);
            }
            sortable._hideClone();
            cancel();
        },
        clone: function clone(_ref3) {
            var sortable = _ref3.sortable, rootEl = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
            if (!this.isMultiDrag) return;
            if (!this.options.removeCloneOnHide) {
                if ($3f324d5cc0e59868$var$multiDragElements.length && $3f324d5cc0e59868$var$multiDragSortable === sortable) {
                    $3f324d5cc0e59868$var$insertMultiDragClones(true, rootEl);
                    dispatchSortableEvent('clone');
                    cancel();
                }
            }
        },
        showClone: function showClone(_ref4) {
            var cloneNowShown = _ref4.cloneNowShown, rootEl = _ref4.rootEl, cancel = _ref4.cancel;
            if (!this.isMultiDrag) return;
            $3f324d5cc0e59868$var$insertMultiDragClones(false, rootEl);
            $3f324d5cc0e59868$var$multiDragClones.forEach(function(clone) {
                $3f324d5cc0e59868$var$css(clone, 'display', '');
            });
            cloneNowShown();
            $3f324d5cc0e59868$var$clonesHidden = false;
            cancel();
        },
        hideClone: function hideClone(_ref5) {
            var _this = this;
            var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
            if (!this.isMultiDrag) return;
            $3f324d5cc0e59868$var$multiDragClones.forEach(function(clone) {
                $3f324d5cc0e59868$var$css(clone, 'display', 'none');
                if (_this.options.removeCloneOnHide && clone.parentNode) clone.parentNode.removeChild(clone);
            });
            cloneNowHidden();
            $3f324d5cc0e59868$var$clonesHidden = true;
            cancel();
        },
        dragStartGlobal: function dragStartGlobal(_ref6) {
            var sortable = _ref6.sortable;
            if (!this.isMultiDrag && $3f324d5cc0e59868$var$multiDragSortable) $3f324d5cc0e59868$var$multiDragSortable.multiDrag._deselectMultiDrag();
            $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.sortableIndex = $3f324d5cc0e59868$var$index(multiDragElement);
            }); // Sort multi-drag elements
            $3f324d5cc0e59868$var$multiDragElements = $3f324d5cc0e59868$var$multiDragElements.sort(function(a, b) {
                return a.sortableIndex - b.sortableIndex;
            });
            $3f324d5cc0e59868$var$dragStarted = true;
        },
        dragStarted: function dragStarted(_ref7) {
            var _this2 = this;
            var sortable = _ref7.sortable;
            if (!this.isMultiDrag) return;
            if (this.options.sort) {
                // Capture rects,
                // hide multi drag elements (by positioning them absolute),
                // set multi drag elements rects to dragRect,
                // show multi drag elements,
                // animate to rects,
                // unset rects & remove from DOM
                sortable.captureAnimationState();
                if (this.options.animation) {
                    $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === $3f324d5cc0e59868$var$dragEl$1) return;
                        $3f324d5cc0e59868$var$css(multiDragElement, 'position', 'absolute');
                    });
                    var dragRect = $3f324d5cc0e59868$var$getRect($3f324d5cc0e59868$var$dragEl$1, false, true, true);
                    $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === $3f324d5cc0e59868$var$dragEl$1) return;
                        $3f324d5cc0e59868$var$setRect(multiDragElement, dragRect);
                    });
                    $3f324d5cc0e59868$var$folding = true;
                    $3f324d5cc0e59868$var$initialFolding = true;
                }
            }
            sortable.animateAll(function() {
                $3f324d5cc0e59868$var$folding = false;
                $3f324d5cc0e59868$var$initialFolding = false;
                if (_this2.options.animation) $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                    $3f324d5cc0e59868$var$unsetRect(multiDragElement);
                });
                 // Remove all auxiliary multidrag items from el, if sorting enabled
                if (_this2.options.sort) $3f324d5cc0e59868$var$removeMultiDragElements();
            });
        },
        dragOver: function dragOver(_ref8) {
            var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
            if ($3f324d5cc0e59868$var$folding && ~$3f324d5cc0e59868$var$multiDragElements.indexOf(target)) {
                completed(false);
                cancel();
            }
        },
        revert: function revert(_ref9) {
            var fromSortable = _ref9.fromSortable, rootEl = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
            if ($3f324d5cc0e59868$var$multiDragElements.length > 1) {
                // Setup unfold animation
                $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                    sortable.addAnimationState({
                        target: multiDragElement,
                        rect: $3f324d5cc0e59868$var$folding ? $3f324d5cc0e59868$var$getRect(multiDragElement) : dragRect
                    });
                    $3f324d5cc0e59868$var$unsetRect(multiDragElement);
                    multiDragElement.fromRect = dragRect;
                    fromSortable.removeAnimationState(multiDragElement);
                });
                $3f324d5cc0e59868$var$folding = false;
                $3f324d5cc0e59868$var$insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref10) {
            var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl = _ref10.parentEl, putSortable = _ref10.putSortable;
            var options = this.options;
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                $3f324d5cc0e59868$var$initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location
                if (options.animation && $3f324d5cc0e59868$var$multiDragElements.length > 1 && ($3f324d5cc0e59868$var$folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
                    // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
                    var dragRectAbsolute = $3f324d5cc0e59868$var$getRect($3f324d5cc0e59868$var$dragEl$1, false, true, true);
                    $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === $3f324d5cc0e59868$var$dragEl$1) return;
                        $3f324d5cc0e59868$var$setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                        // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
                        parentEl.appendChild(multiDragElement);
                    });
                    $3f324d5cc0e59868$var$folding = true;
                } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
                if (!isOwner) {
                    // Only remove if not folding (folding will remove them anyways)
                    if (!$3f324d5cc0e59868$var$folding) $3f324d5cc0e59868$var$removeMultiDragElements();
                    if ($3f324d5cc0e59868$var$multiDragElements.length > 1) {
                        var clonesHiddenBefore = $3f324d5cc0e59868$var$clonesHidden;
                        activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden
                        if (activeSortable.options.animation && !$3f324d5cc0e59868$var$clonesHidden && clonesHiddenBefore) $3f324d5cc0e59868$var$multiDragClones.forEach(function(clone) {
                            activeSortable.addAnimationState({
                                target: clone,
                                rect: $3f324d5cc0e59868$var$clonesFromRect
                            });
                            clone.fromRect = $3f324d5cc0e59868$var$clonesFromRect;
                            clone.thisAnimationDuration = null;
                        });
                    } else activeSortable._showClone(sortable);
                }
            }
        },
        dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
            var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
            $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
            });
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                $3f324d5cc0e59868$var$clonesFromRect = $3f324d5cc0e59868$var$_extends({}, dragRect);
                var dragMatrix = $3f324d5cc0e59868$var$matrix($3f324d5cc0e59868$var$dragEl$1, true);
                $3f324d5cc0e59868$var$clonesFromRect.top -= dragMatrix.f;
                $3f324d5cc0e59868$var$clonesFromRect.left -= dragMatrix.e;
            }
        },
        dragOverAnimationComplete: function dragOverAnimationComplete() {
            if ($3f324d5cc0e59868$var$folding) {
                $3f324d5cc0e59868$var$folding = false;
                $3f324d5cc0e59868$var$removeMultiDragElements();
            }
        },
        drop: function drop(_ref12) {
            var evt = _ref12.originalEvent, rootEl = _ref12.rootEl, parentEl = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex = _ref12.oldIndex, putSortable = _ref12.putSortable;
            var toSortable = putSortable || this.sortable;
            if (!evt) return;
            var options = this.options, children = parentEl.children; // Multi-drag selection
            if (!$3f324d5cc0e59868$var$dragStarted) {
                if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
                $3f324d5cc0e59868$var$toggleClass($3f324d5cc0e59868$var$dragEl$1, options.selectedClass, !~$3f324d5cc0e59868$var$multiDragElements.indexOf($3f324d5cc0e59868$var$dragEl$1));
                if (!~$3f324d5cc0e59868$var$multiDragElements.indexOf($3f324d5cc0e59868$var$dragEl$1)) {
                    $3f324d5cc0e59868$var$multiDragElements.push($3f324d5cc0e59868$var$dragEl$1);
                    $3f324d5cc0e59868$var$dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: 'select',
                        targetEl: $3f324d5cc0e59868$var$dragEl$1,
                        originalEvent: evt
                    }); // Modifier activated, select from last to dragEl
                    if (evt.shiftKey && $3f324d5cc0e59868$var$lastMultiDragSelect && sortable.el.contains($3f324d5cc0e59868$var$lastMultiDragSelect)) {
                        var lastIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$lastMultiDragSelect), currentIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl$1);
                        if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                            // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                            // (but previous selection existed)
                            var n, i;
                            if (currentIndex > lastIndex) {
                                i = lastIndex;
                                n = currentIndex;
                            } else {
                                i = currentIndex;
                                n = lastIndex + 1;
                            }
                            for(; i < n; i++){
                                if (~$3f324d5cc0e59868$var$multiDragElements.indexOf(children[i])) continue;
                                $3f324d5cc0e59868$var$toggleClass(children[i], options.selectedClass, true);
                                $3f324d5cc0e59868$var$multiDragElements.push(children[i]);
                                $3f324d5cc0e59868$var$dispatchEvent({
                                    sortable: sortable,
                                    rootEl: rootEl,
                                    name: 'select',
                                    targetEl: children[i],
                                    originalEvent: evt
                                });
                            }
                        }
                    } else $3f324d5cc0e59868$var$lastMultiDragSelect = $3f324d5cc0e59868$var$dragEl$1;
                    $3f324d5cc0e59868$var$multiDragSortable = toSortable;
                } else {
                    $3f324d5cc0e59868$var$multiDragElements.splice($3f324d5cc0e59868$var$multiDragElements.indexOf($3f324d5cc0e59868$var$dragEl$1), 1);
                    $3f324d5cc0e59868$var$lastMultiDragSelect = null;
                    $3f324d5cc0e59868$var$dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: 'deselect',
                        targetEl: $3f324d5cc0e59868$var$dragEl$1,
                        originalEvent: evt
                    });
                }
            } // Multi-drag drop
            if ($3f324d5cc0e59868$var$dragStarted && this.isMultiDrag) {
                $3f324d5cc0e59868$var$folding = false; // Do not "unfold" after around dragEl if reverted
                if ((parentEl[$3f324d5cc0e59868$var$expando].options.sort || parentEl !== rootEl) && $3f324d5cc0e59868$var$multiDragElements.length > 1) {
                    var dragRect = $3f324d5cc0e59868$var$getRect($3f324d5cc0e59868$var$dragEl$1), multiDragIndex = $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl$1, ':not(.' + this.options.selectedClass + ')');
                    if (!$3f324d5cc0e59868$var$initialFolding && options.animation) $3f324d5cc0e59868$var$dragEl$1.thisAnimationDuration = null;
                    toSortable.captureAnimationState();
                    if (!$3f324d5cc0e59868$var$initialFolding) {
                        if (options.animation) {
                            $3f324d5cc0e59868$var$dragEl$1.fromRect = dragRect;
                            $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                                multiDragElement.thisAnimationDuration = null;
                                if (multiDragElement !== $3f324d5cc0e59868$var$dragEl$1) {
                                    var rect = $3f324d5cc0e59868$var$folding ? $3f324d5cc0e59868$var$getRect(multiDragElement) : dragRect;
                                    multiDragElement.fromRect = rect; // Prepare unfold animation
                                    toSortable.addAnimationState({
                                        target: multiDragElement,
                                        rect: rect
                                    });
                                }
                            });
                        } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                        // properly they must all be removed
                        $3f324d5cc0e59868$var$removeMultiDragElements();
                        $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                            if (children[multiDragIndex]) parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                            else parentEl.appendChild(multiDragElement);
                            multiDragIndex++;
                        }); // If initial folding is done, the elements may have changed position because they are now
                        // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                        // must be fired here as Sortable will not.
                        if (oldIndex === $3f324d5cc0e59868$var$index($3f324d5cc0e59868$var$dragEl$1)) {
                            var update = false;
                            $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                                if (multiDragElement.sortableIndex !== $3f324d5cc0e59868$var$index(multiDragElement)) {
                                    update = true;
                                    return;
                                }
                            });
                            if (update) dispatchSortableEvent('update');
                        }
                    } // Must be done after capturing individual rects (scroll bar)
                    $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                        $3f324d5cc0e59868$var$unsetRect(multiDragElement);
                    });
                    toSortable.animateAll();
                }
                $3f324d5cc0e59868$var$multiDragSortable = toSortable;
            } // Remove clones if necessary
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') $3f324d5cc0e59868$var$multiDragClones.forEach(function(clone) {
                clone.parentNode && clone.parentNode.removeChild(clone);
            });
        },
        nullingGlobal: function nullingGlobal() {
            this.isMultiDrag = $3f324d5cc0e59868$var$dragStarted = false;
            $3f324d5cc0e59868$var$multiDragClones.length = 0;
        },
        destroyGlobal: function destroyGlobal() {
            this._deselectMultiDrag();
            $3f324d5cc0e59868$var$off(document, 'pointerup', this._deselectMultiDrag);
            $3f324d5cc0e59868$var$off(document, 'mouseup', this._deselectMultiDrag);
            $3f324d5cc0e59868$var$off(document, 'touchend', this._deselectMultiDrag);
            $3f324d5cc0e59868$var$off(document, 'keydown', this._checkKeyDown);
            $3f324d5cc0e59868$var$off(document, 'keyup', this._checkKeyUp);
        },
        _deselectMultiDrag: function _deselectMultiDrag(evt) {
            if (typeof $3f324d5cc0e59868$var$dragStarted !== "undefined" && $3f324d5cc0e59868$var$dragStarted) return; // Only deselect if selection is in this sortable
            if ($3f324d5cc0e59868$var$multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable
            if (evt && $3f324d5cc0e59868$var$closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click
            if (evt && evt.button !== 0) return;
            while($3f324d5cc0e59868$var$multiDragElements.length){
                var el = $3f324d5cc0e59868$var$multiDragElements[0];
                $3f324d5cc0e59868$var$toggleClass(el, this.options.selectedClass, false);
                $3f324d5cc0e59868$var$multiDragElements.shift();
                $3f324d5cc0e59868$var$dispatchEvent({
                    sortable: this.sortable,
                    rootEl: this.sortable.el,
                    name: 'deselect',
                    targetEl: el,
                    originalEvent: evt
                });
            }
        },
        _checkKeyDown: function _checkKeyDown(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
        },
        _checkKeyUp: function _checkKeyUp(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
        }
    };
    return $3f324d5cc0e59868$var$_extends(MultiDrag, {
        // Static methods & properties
        pluginName: 'multiDrag',
        utils: {
            /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */ select: function select(el) {
                var sortable = el.parentNode[$3f324d5cc0e59868$var$expando];
                if (!sortable || !sortable.options.multiDrag || ~$3f324d5cc0e59868$var$multiDragElements.indexOf(el)) return;
                if ($3f324d5cc0e59868$var$multiDragSortable && $3f324d5cc0e59868$var$multiDragSortable !== sortable) {
                    $3f324d5cc0e59868$var$multiDragSortable.multiDrag._deselectMultiDrag();
                    $3f324d5cc0e59868$var$multiDragSortable = sortable;
                }
                $3f324d5cc0e59868$var$toggleClass(el, sortable.options.selectedClass, true);
                $3f324d5cc0e59868$var$multiDragElements.push(el);
            },
            /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */ deselect: function deselect(el) {
                var sortable = el.parentNode[$3f324d5cc0e59868$var$expando], index = $3f324d5cc0e59868$var$multiDragElements.indexOf(el);
                if (!sortable || !sortable.options.multiDrag || !~index) return;
                $3f324d5cc0e59868$var$toggleClass(el, sortable.options.selectedClass, false);
                $3f324d5cc0e59868$var$multiDragElements.splice(index, 1);
            }
        },
        eventProperties: function eventProperties() {
            var _this3 = this;
            var oldIndicies = [], newIndicies = [];
            $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
                oldIndicies.push({
                    multiDragElement: multiDragElement,
                    index: multiDragElement.sortableIndex
                }); // multiDragElements will already be sorted if folding
                var newIndex;
                if ($3f324d5cc0e59868$var$folding && multiDragElement !== $3f324d5cc0e59868$var$dragEl$1) newIndex = -1;
                else if ($3f324d5cc0e59868$var$folding) newIndex = $3f324d5cc0e59868$var$index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
                else newIndex = $3f324d5cc0e59868$var$index(multiDragElement);
                newIndicies.push({
                    multiDragElement: multiDragElement,
                    index: newIndex
                });
            });
            return {
                items: $3f324d5cc0e59868$var$_toConsumableArray($3f324d5cc0e59868$var$multiDragElements),
                clones: [].concat($3f324d5cc0e59868$var$multiDragClones),
                oldIndicies: oldIndicies,
                newIndicies: newIndicies
            };
        },
        optionListeners: {
            multiDragKey: function multiDragKey(key) {
                key = key.toLowerCase();
                if (key === 'ctrl') key = 'Control';
                else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
                return key;
            }
        }
    });
}
function $3f324d5cc0e59868$var$insertMultiDragElements(clonesInserted, rootEl) {
    $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement, i) {
        var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(multiDragElement, target);
        else rootEl.appendChild(multiDragElement);
    });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */ function $3f324d5cc0e59868$var$insertMultiDragClones(elementsInserted, rootEl) {
    $3f324d5cc0e59868$var$multiDragClones.forEach(function(clone, i) {
        var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(clone, target);
        else rootEl.appendChild(clone);
    });
}
function $3f324d5cc0e59868$var$removeMultiDragElements() {
    $3f324d5cc0e59868$var$multiDragElements.forEach(function(multiDragElement) {
        if (multiDragElement === $3f324d5cc0e59868$var$dragEl$1) return;
        multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
}
$3f324d5cc0e59868$export$31b3ca70d8f57423.mount(new $3f324d5cc0e59868$var$AutoScrollPlugin());
$3f324d5cc0e59868$export$31b3ca70d8f57423.mount($3f324d5cc0e59868$var$Remove, $3f324d5cc0e59868$var$Revert);
var $3f324d5cc0e59868$export$2e2bcd8739ae039 = $3f324d5cc0e59868$export$31b3ca70d8f57423;

});

parcelRegister("bAWpm", function(module, exports) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === 'object') {
                if (arg.toString === Object.prototype.toString) {
                    for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
                } else classes.push(arg.toString());
            }
        }
        return classes.join(' ');
    }
    if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) // register as 'classnames', consistent with npm package name
    define('classnames', [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

});

parcelRegister("4PZmT", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $385b8748ec9ad07a$export$2e2bcd8739ae039);
var $385b8748ec9ad07a$var$isProduction = true;
var $385b8748ec9ad07a$var$prefix = 'Invariant failed';
function $385b8748ec9ad07a$export$2e2bcd8739ae039(condition, message) {
    if (condition) return;
    if ($385b8748ec9ad07a$var$isProduction) throw new Error($385b8748ec9ad07a$var$prefix);
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? $385b8748ec9ad07a$var$prefix + ": " + provided : $385b8748ec9ad07a$var$prefix;
    throw new Error(value);
}

});


parcelRegister("fLoiC", function(module, exports) {

$parcel$export(module.exports, "default", () => $b79e182280964547$export$2e2bcd8739ae039);

var $8Rc8S = parcelRequire("8Rc8S");

var $d4J5n = parcelRequire("d4J5n");

var $i4X0D = parcelRequire("i4X0D");

var $bAO4g = parcelRequire("bAO4g");

var $84IWE = parcelRequire("84IWE");

var $iJsSV = parcelRequire("iJsSV");

var $kRY1J = parcelRequire("kRY1J");

var $228IU = parcelRequire("228IU");
"use client";
const $b79e182280964547$var$Popover = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, placement: placement = 'right', className: className, style: style, children: children, body: body, arrowProps: arrowProps, hasDoneInitialMeasure: hasDoneInitialMeasure, popper: popper, show: show, ...props }, ref)=>{
    const decoratedBsPrefix = (0, $i4X0D.useBootstrapPrefix)(bsPrefix, 'popover');
    const isRTL = (0, $i4X0D.useIsRTL)();
    const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
    const bsDirection = (0, $iJsSV.getOverlayDirection)(primaryPlacement, isRTL);
    let computedStyle = style;
    if (show && !hasDoneInitialMeasure) computedStyle = {
        ...style,
        ...(0, $kRY1J.default)(popper == null ? void 0 : popper.strategy)
    };
    return /*#__PURE__*/ (0, $228IU.jsxs)("div", {
        ref: ref,
        role: "tooltip",
        style: computedStyle,
        "x-placement": primaryPlacement,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($8Rc8S)))(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
        ...props,
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("div", {
                className: "popover-arrow",
                ...arrowProps
            }),
            body ? /*#__PURE__*/ (0, $228IU.jsx)((0, $84IWE.default), {
                children: children
            }) : children
        ]
    });
});
var $b79e182280964547$export$2e2bcd8739ae039 = Object.assign($b79e182280964547$var$Popover, {
    Header: (0, $bAO4g.default),
    Body: (0, $84IWE.default),
    // Default popover offset.
    // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
    POPPER_OFFSET: [
        0,
        8
    ]
});

});
parcelRegister("bAO4g", function(module, exports) {

$parcel$export(module.exports, "default", () => $8709e4f0ed54bfc5$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");

var $8Rc8S = parcelRequire("8Rc8S");

var $i4X0D = parcelRequire("i4X0D");

var $228IU = parcelRequire("228IU");
"use client";
const $8709e4f0ed54bfc5$var$PopoverHeader = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, $i4X0D.useBootstrapPrefix)(bsPrefix, 'popover-header');
    return /*#__PURE__*/ (0, $228IU.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($8Rc8S)))(className, bsPrefix),
        ...props
    });
});
$8709e4f0ed54bfc5$var$PopoverHeader.displayName = 'PopoverHeader';
var $8709e4f0ed54bfc5$export$2e2bcd8739ae039 = $8709e4f0ed54bfc5$var$PopoverHeader;

});

parcelRegister("84IWE", function(module, exports) {

$parcel$export(module.exports, "default", () => $5e118f991616421c$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");

var $8Rc8S = parcelRequire("8Rc8S");

var $i4X0D = parcelRequire("i4X0D");

var $228IU = parcelRequire("228IU");
"use client";
const $5e118f991616421c$var$PopoverBody = /*#__PURE__*/ $d4J5n.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, $i4X0D.useBootstrapPrefix)(bsPrefix, 'popover-body');
    return /*#__PURE__*/ (0, $228IU.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($8Rc8S)))(className, bsPrefix),
        ...props
    });
});
$5e118f991616421c$var$PopoverBody.displayName = 'PopoverBody';
var $5e118f991616421c$export$2e2bcd8739ae039 = $5e118f991616421c$var$PopoverBody;

});

parcelRegister("iJsSV", function(module, exports) {

$parcel$export(module.exports, "getOverlayDirection", () => $da32d5e11e2011b2$export$c15856915a9b3464);

var $d4J5n = parcelRequire("d4J5n");
class $da32d5e11e2011b2$export$34582a676b91ff07 extends $d4J5n.Component {
}
function $da32d5e11e2011b2$export$c15856915a9b3464(placement, isRTL) {
    let bsDirection = placement;
    if (placement === 'left') bsDirection = isRTL ? 'end' : 'start';
    else if (placement === 'right') bsDirection = isRTL ? 'start' : 'end';
    return bsDirection;
}

});

parcelRegister("kRY1J", function(module, exports) {

$parcel$export(module.exports, "default", () => $f31751fc4315d0c6$export$2e2bcd8739ae039);
function $f31751fc4315d0c6$export$2e2bcd8739ae039(position = 'absolute') {
    return {
        position: position,
        top: '0',
        left: '0',
        opacity: '0',
        pointerEvents: 'none'
    };
}

});


parcelRegister("6s6up", function(module, exports) {

$parcel$export(module.exports, "default", () => $4b2a64446159b068$export$2e2bcd8739ae039);

var $50pa7 = parcelRequire("50pa7");

var $3RiQf = parcelRequire("3RiQf");

var $d4J5n = parcelRequire("d4J5n");

var $gswp2 = parcelRequire("gswp2");
parcelRequire("k5vEI");

var $c52cb = parcelRequire("c52cb");

var $eyr7g = parcelRequire("eyr7g");

var $cyRiG = parcelRequire("cyRiG");

var $aVzl6 = parcelRequire("aVzl6");

var $228IU = parcelRequire("228IU");
"use client";
function $4b2a64446159b068$var$normalizeDelay(delay) {
    return delay && typeof delay === 'object' ? delay : {
        show: delay,
        hide: delay
    };
}
// Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.
function $4b2a64446159b068$var$handleMouseOverOut(// eslint-disable-next-line @typescript-eslint/no-shadow
handler, args, relatedNative) {
    const [e] = args;
    const target = e.currentTarget;
    const related = e.relatedTarget || e.nativeEvent[relatedNative];
    if ((!related || related !== target) && !(0, $50pa7.default)(target, related)) handler(...args);
}
const $4b2a64446159b068$var$triggerType = (0, (/*@__PURE__*/$parcel$interopDefault($3RiQf))).oneOf([
    'click',
    'hover',
    'focus'
]);
const $4b2a64446159b068$var$OverlayTrigger = ({ trigger: trigger = [
    'hover',
    'focus'
], overlay: overlay, children: children, popperConfig: popperConfig = {}, show: propsShow, defaultShow: defaultShow = false, onToggle: onToggle, delay: propsDelay, placement: placement, flip: flip = placement && placement.indexOf('auto') !== -1, ...props })=>{
    const triggerNodeRef = (0, $d4J5n.useRef)(null);
    const mergedRef = (0, $eyr7g.default)(triggerNodeRef, children.ref);
    const timeout = (0, $gswp2.default)();
    const hoverStateRef = (0, $d4J5n.useRef)('');
    const [show, setShow] = (0, $c52cb.useUncontrolledProp)(propsShow, defaultShow, onToggle);
    const delay = $4b2a64446159b068$var$normalizeDelay(propsDelay);
    const { onFocus: onFocus, onBlur: onBlur, onClick: onClick } = typeof children !== 'function' ? $d4J5n.Children.only(children).props : {};
    const attachRef = (r)=>{
        mergedRef((0, $aVzl6.default)(r));
    };
    const handleShow = (0, $d4J5n.useCallback)(()=>{
        timeout.clear();
        hoverStateRef.current = 'show';
        if (!delay.show) {
            setShow(true);
            return;
        }
        timeout.set(()=>{
            if (hoverStateRef.current === 'show') setShow(true);
        }, delay.show);
    }, [
        delay.show,
        setShow,
        timeout
    ]);
    const handleHide = (0, $d4J5n.useCallback)(()=>{
        timeout.clear();
        hoverStateRef.current = 'hide';
        if (!delay.hide) {
            setShow(false);
            return;
        }
        timeout.set(()=>{
            if (hoverStateRef.current === 'hide') setShow(false);
        }, delay.hide);
    }, [
        delay.hide,
        setShow,
        timeout
    ]);
    const handleFocus = (0, $d4J5n.useCallback)((...args)=>{
        handleShow();
        onFocus == null || onFocus(...args);
    }, [
        handleShow,
        onFocus
    ]);
    const handleBlur = (0, $d4J5n.useCallback)((...args)=>{
        handleHide();
        onBlur == null || onBlur(...args);
    }, [
        handleHide,
        onBlur
    ]);
    const handleClick = (0, $d4J5n.useCallback)((...args)=>{
        setShow(!show);
        onClick == null || onClick(...args);
    }, [
        onClick,
        setShow,
        show
    ]);
    const handleMouseOver = (0, $d4J5n.useCallback)((...args)=>{
        $4b2a64446159b068$var$handleMouseOverOut(handleShow, args, 'fromElement');
    }, [
        handleShow
    ]);
    const handleMouseOut = (0, $d4J5n.useCallback)((...args)=>{
        $4b2a64446159b068$var$handleMouseOverOut(handleHide, args, 'toElement');
    }, [
        handleHide
    ]);
    const triggers = trigger == null ? [] : [].concat(trigger);
    const triggerProps = {
        ref: attachRef
    };
    if (triggers.indexOf('click') !== -1) triggerProps.onClick = handleClick;
    if (triggers.indexOf('focus') !== -1) {
        triggerProps.onFocus = handleFocus;
        triggerProps.onBlur = handleBlur;
    }
    if (triggers.indexOf('hover') !== -1) {
        triggerProps.onMouseOver = handleMouseOver;
        triggerProps.onMouseOut = handleMouseOut;
    }
    return /*#__PURE__*/ (0, $228IU.jsxs)((0, $228IU.Fragment), {
        children: [
            typeof children === 'function' ? children(triggerProps) : /*#__PURE__*/ (0, $d4J5n.cloneElement)(children, triggerProps),
            /*#__PURE__*/ (0, $228IU.jsx)((0, $cyRiG.default), {
                ...props,
                show: show,
                onHide: handleHide,
                flip: flip,
                placement: placement,
                popperConfig: popperConfig,
                target: triggerNodeRef.current,
                children: overlay
            })
        ]
    });
};
var $4b2a64446159b068$export$2e2bcd8739ae039 = $4b2a64446159b068$var$OverlayTrigger;

});
parcelRegister("50pa7", function(module, exports) {

$parcel$export(module.exports, "default", () => $3a5078845f5baf5c$export$2e2bcd8739ae039);
/* eslint-disable no-bitwise, no-cond-assign */ /**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */ function $3a5078845f5baf5c$export$2e2bcd8739ae039(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node);
    if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

});

parcelRegister("gswp2", function(module, exports) {

$parcel$export(module.exports, "default", () => $bfb86566a67d62e9$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");

var $gzmzq = parcelRequire("gzmzq");

var $6yRC3 = parcelRequire("6yRC3");
/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */ const $bfb86566a67d62e9$var$MAX_DELAY_MS = 2 ** 31 - 1;
function $bfb86566a67d62e9$var$setChainedTimeout(handleRef, fn, timeoutAtMs) {
    const delayMs = timeoutAtMs - Date.now();
    handleRef.current = delayMs <= $bfb86566a67d62e9$var$MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(()=>$bfb86566a67d62e9$var$setChainedTimeout(handleRef, fn, timeoutAtMs), $bfb86566a67d62e9$var$MAX_DELAY_MS);
}
function $bfb86566a67d62e9$export$2e2bcd8739ae039() {
    const isMounted = (0, $gzmzq.default)();
    // types are confused between node and web here IDK
    const handleRef = (0, $d4J5n.useRef)();
    (0, $6yRC3.default)(()=>clearTimeout(handleRef.current));
    return (0, $d4J5n.useMemo)(()=>{
        const clear = ()=>clearTimeout(handleRef.current);
        function set(fn, delayMs = 0) {
            if (!isMounted()) return;
            clear();
            if (delayMs <= $bfb86566a67d62e9$var$MAX_DELAY_MS) // For simplicity, if the timeout is short, just set a normal timeout.
            handleRef.current = setTimeout(fn, delayMs);
            else $bfb86566a67d62e9$var$setChainedTimeout(handleRef, fn, Date.now() + delayMs);
        }
        return {
            set: set,
            clear: clear
        };
    }, []);
}

});

parcelRegister("cyRiG", function(module, exports) {

$parcel$export(module.exports, "default", () => $9252015cac8500e6$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");

var $8Rc8S = parcelRequire("8Rc8S");

var $e7EqU = parcelRequire("e7EqU");

var $8Zfen = parcelRequire("8Zfen");

var $3hoD3 = parcelRequire("3hoD3");

var $eyr7g = parcelRequire("eyr7g");

var $3qKRF = parcelRequire("3qKRF");

var $aYZMw = parcelRequire("aYZMw");

var $aVzl6 = parcelRequire("aVzl6");

var $228IU = parcelRequire("228IU");
"use client";
function $9252015cac8500e6$var$wrapRefs(props, arrowProps) {
    const { ref: ref } = props;
    const { ref: aRef } = arrowProps;
    props.ref = ref.__wrapped || (ref.__wrapped = (r)=>ref((0, $aVzl6.default)(r)));
    arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = (r)=>aRef((0, $aVzl6.default)(r)));
}
const $9252015cac8500e6$var$Overlay = /*#__PURE__*/ $d4J5n.forwardRef(({ children: overlay, transition: transition = (0, $aYZMw.default), popperConfig: popperConfig = {}, rootClose: rootClose = false, placement: placement = 'top', show: outerShow = false, ...outerProps }, outerRef)=>{
    const popperRef = (0, $d4J5n.useRef)({});
    const [firstRenderedState, setFirstRenderedState] = (0, $d4J5n.useState)(null);
    const [ref, modifiers] = (0, $3qKRF.default)(outerProps.offset);
    const mergedRef = (0, $eyr7g.default)(outerRef, ref);
    const actualTransition = transition === true ? (0, $aYZMw.default) : transition || undefined;
    const handleFirstUpdate = (0, $8Zfen.default)((state)=>{
        setFirstRenderedState(state);
        popperConfig == null || popperConfig.onFirstUpdate == null || popperConfig.onFirstUpdate(state);
    });
    (0, $3hoD3.default)(()=>{
        if (firstRenderedState && outerProps.target) // Must wait for target element to resolve before updating popper.
        popperRef.current.scheduleUpdate == null || popperRef.current.scheduleUpdate();
    }, [
        firstRenderedState,
        outerProps.target
    ]);
    (0, $d4J5n.useEffect)(()=>{
        if (!outerShow) setFirstRenderedState(null);
    }, [
        outerShow
    ]);
    return /*#__PURE__*/ (0, $228IU.jsx)((0, $e7EqU.default), {
        ...outerProps,
        ref: mergedRef,
        popperConfig: {
            ...popperConfig,
            modifiers: modifiers.concat(popperConfig.modifiers || []),
            onFirstUpdate: handleFirstUpdate
        },
        transition: actualTransition,
        rootClose: rootClose,
        placement: placement,
        show: outerShow,
        children: (overlayProps, { arrowProps: arrowProps, popper: popperObj, show: show })=>{
            var _popperObj$state, _popperObj$state$modi;
            $9252015cac8500e6$var$wrapRefs(overlayProps, arrowProps);
            // Need to get placement from popper object, handling case when overlay is flipped using 'flip' prop
            const updatedPlacement = popperObj == null ? void 0 : popperObj.placement;
            const popper = Object.assign(popperRef.current, {
                state: popperObj == null ? void 0 : popperObj.state,
                scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
                placement: updatedPlacement,
                outOfBoundaries: (popperObj == null ? void 0 : (_popperObj$state = popperObj.state) == null ? void 0 : (_popperObj$state$modi = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state$modi.isReferenceHidden) || false,
                strategy: popperConfig.strategy
            });
            const hasDoneInitialMeasure = !!firstRenderedState;
            if (typeof overlay === 'function') return overlay({
                ...overlayProps,
                placement: updatedPlacement,
                show: show,
                ...!transition && show && {
                    className: 'show'
                },
                popper: popper,
                arrowProps: arrowProps,
                hasDoneInitialMeasure: hasDoneInitialMeasure
            });
            return /*#__PURE__*/ $d4J5n.cloneElement(overlay, {
                ...overlayProps,
                placement: updatedPlacement,
                arrowProps: arrowProps,
                popper: popper,
                hasDoneInitialMeasure: hasDoneInitialMeasure,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($8Rc8S)))(overlay.props.className, !transition && show && 'show'),
                style: {
                    ...overlay.props.style,
                    ...overlayProps.style
                }
            });
        }
    });
});
$9252015cac8500e6$var$Overlay.displayName = 'Overlay';
var $9252015cac8500e6$export$2e2bcd8739ae039 = $9252015cac8500e6$var$Overlay;

});
parcelRegister("e7EqU", function(module, exports) {

$parcel$export(module.exports, "default", () => $a481154fe15a682b$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");

var $66G66 = parcelRequire("66G66");

var $4w9YL = parcelRequire("4w9YL");

var $eyr7g = parcelRequire("eyr7g");

var $5dn5v = parcelRequire("5dn5v");

var $64ybW = parcelRequire("64ybW");

var $dr1hJ = parcelRequire("dr1hJ");

var $lgpTv = parcelRequire("lgpTv");

var $jmRDp = parcelRequire("jmRDp");
/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */ const $a481154fe15a682b$var$Overlay = /*#__PURE__*/ $d4J5n.forwardRef((props, outerRef)=>{
    const { flip: flip, offset: offset, placement: placement, containerPadding: containerPadding, popperConfig: popperConfig = {}, transition: Transition, runTransition: runTransition } = props;
    const [rootElement, attachRef] = (0, $4w9YL.default)();
    const [arrowElement, attachArrowRef] = (0, $4w9YL.default)();
    const mergedRef = (0, $eyr7g.default)(attachRef, outerRef);
    const container = (0, $dr1hJ.default)(props.container);
    const target = (0, $dr1hJ.default)(props.target);
    const [exited, setExited] = (0, $d4J5n.useState)(!props.show);
    const popper = (0, $5dn5v.default)(target, rootElement, (0, $lgpTv.default)({
        placement: placement,
        enableEvents: !!props.show,
        containerPadding: containerPadding || 5,
        flip: flip,
        offset: offset,
        arrowElement: arrowElement,
        popperConfig: popperConfig
    }));
    // TODO: I think this needs to be in an effect
    if (props.show && exited) setExited(false);
    const handleHidden = (...args)=>{
        setExited(true);
        if (props.onExited) props.onExited(...args);
    };
    // Don't un-render the overlay while it's transitioning out.
    const mountOverlay = props.show || !exited;
    (0, $64ybW.default)(rootElement, props.onHide, {
        disabled: !props.rootClose || props.rootCloseDisabled,
        clickTrigger: props.rootCloseEvent
    });
    if (!mountOverlay) // Don't bother showing anything if we don't have to.
    return null;
    const { onExit: onExit, onExiting: onExiting, onEnter: onEnter, onEntering: onEntering, onEntered: onEntered } = props;
    let child = props.children(Object.assign({}, popper.attributes.popper, {
        style: popper.styles.popper,
        ref: mergedRef
    }), {
        popper: popper,
        placement: placement,
        show: !!props.show,
        arrowProps: Object.assign({}, popper.attributes.arrow, {
            style: popper.styles.arrow,
            ref: attachArrowRef
        })
    });
    child = (0, $jmRDp.renderTransition)(Transition, runTransition, {
        in: !!props.show,
        appear: true,
        mountOnEnter: true,
        unmountOnExit: true,
        children: child,
        onExit: onExit,
        onExiting: onExiting,
        onExited: handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
    });
    return container ? /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($66G66))).createPortal(child, container) : null;
});
$a481154fe15a682b$var$Overlay.displayName = 'Overlay';
var $a481154fe15a682b$export$2e2bcd8739ae039 = $a481154fe15a682b$var$Overlay;

});
parcelRegister("5dn5v", function(module, exports) {

$parcel$export(module.exports, "default", () => $3cc0136c6b0543df$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");

var $g1CdK = parcelRequire("g1CdK");

var $1NCL4 = parcelRequire("1NCL4");

var $wo1bv = parcelRequire("wo1bv");
const $3cc0136c6b0543df$var$_excluded = [
    "enabled",
    "placement",
    "strategy",
    "modifiers"
];
function $3cc0136c6b0543df$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const $3cc0136c6b0543df$var$disabledApplyStylesModifier = {
    name: 'applyStyles',
    enabled: false,
    phase: 'afterWrite',
    fn: ()=>undefined
};
// until docjs supports type exports...
const $3cc0136c6b0543df$var$ariaDescribedByModifier = {
    name: 'ariaDescribedBy',
    enabled: true,
    phase: 'afterWrite',
    effect: ({ state: state })=>()=>{
            const { reference: reference, popper: popper } = state.elements;
            if ('removeAttribute' in reference) {
                const ids = (reference.getAttribute('aria-describedby') || '').split(',').filter((id)=>id.trim() !== popper.id);
                if (!ids.length) reference.removeAttribute('aria-describedby');
                else reference.setAttribute('aria-describedby', ids.join(','));
            }
        },
    fn: ({ state: state })=>{
        var _popper$getAttribute;
        const { popper: popper, reference: reference } = state.elements;
        const role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();
        if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
            const ids = reference.getAttribute('aria-describedby');
            if (ids && ids.split(',').indexOf(popper.id) !== -1) return;
            reference.setAttribute('aria-describedby', ids ? `${ids},${popper.id}` : popper.id);
        }
    }
};
const $3cc0136c6b0543df$var$EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */ function $3cc0136c6b0543df$var$usePopper(referenceElement, popperElement, _ref = {}) {
    let { enabled: enabled = true, placement: placement = 'bottom', strategy: strategy = 'absolute', modifiers: modifiers = $3cc0136c6b0543df$var$EMPTY_MODIFIERS } = _ref, config = $3cc0136c6b0543df$var$_objectWithoutPropertiesLoose(_ref, $3cc0136c6b0543df$var$_excluded);
    const prevModifiers = (0, $d4J5n.useRef)(modifiers);
    const popperInstanceRef = (0, $d4J5n.useRef)();
    const update = (0, $d4J5n.useCallback)(()=>{
        var _popperInstanceRef$cu;
        (_popperInstanceRef$cu = popperInstanceRef.current) == null || _popperInstanceRef$cu.update();
    }, []);
    const forceUpdate = (0, $d4J5n.useCallback)(()=>{
        var _popperInstanceRef$cu2;
        (_popperInstanceRef$cu2 = popperInstanceRef.current) == null || _popperInstanceRef$cu2.forceUpdate();
    }, []);
    const [popperState, setState] = (0, $1NCL4.default)((0, $d4J5n.useState)({
        placement: placement,
        update: update,
        forceUpdate: forceUpdate,
        attributes: {},
        styles: {
            popper: {},
            arrow: {}
        }
    }));
    const updateModifier = (0, $d4J5n.useMemo)(()=>({
            name: 'updateStateModifier',
            enabled: true,
            phase: 'write',
            requires: [
                'computeStyles'
            ],
            fn: ({ state: state })=>{
                const styles = {};
                const attributes = {};
                Object.keys(state.elements).forEach((element)=>{
                    styles[element] = state.styles[element];
                    attributes[element] = state.attributes[element];
                });
                setState({
                    state: state,
                    styles: styles,
                    attributes: attributes,
                    update: update,
                    forceUpdate: forceUpdate,
                    placement: state.placement
                });
            }
        }), [
        update,
        forceUpdate,
        setState
    ]);
    const nextModifiers = (0, $d4J5n.useMemo)(()=>{
        if (!(0, $g1CdK.dequal)(prevModifiers.current, modifiers)) prevModifiers.current = modifiers;
        return prevModifiers.current;
    }, [
        modifiers
    ]);
    (0, $d4J5n.useEffect)(()=>{
        if (!popperInstanceRef.current || !enabled) return;
        popperInstanceRef.current.setOptions({
            placement: placement,
            strategy: strategy,
            modifiers: [
                ...nextModifiers,
                updateModifier,
                $3cc0136c6b0543df$var$disabledApplyStylesModifier
            ]
        });
    }, [
        strategy,
        placement,
        updateModifier,
        enabled,
        nextModifiers
    ]);
    (0, $d4J5n.useEffect)(()=>{
        if (!enabled || referenceElement == null || popperElement == null) return undefined;
        popperInstanceRef.current = (0, $wo1bv.createPopper)(referenceElement, popperElement, Object.assign({}, config, {
            placement: placement,
            strategy: strategy,
            modifiers: [
                ...nextModifiers,
                $3cc0136c6b0543df$var$ariaDescribedByModifier,
                updateModifier
            ]
        }));
        return ()=>{
            if (popperInstanceRef.current != null) {
                popperInstanceRef.current.destroy();
                popperInstanceRef.current = undefined;
                setState((s)=>Object.assign({}, s, {
                        attributes: {},
                        styles: {
                            popper: {}
                        }
                    }));
            }
        };
    // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        enabled,
        referenceElement,
        popperElement
    ]);
    return popperState;
}
var $3cc0136c6b0543df$export$2e2bcd8739ae039 = $3cc0136c6b0543df$var$usePopper;

});
parcelRegister("g1CdK", function(module, exports) {

$parcel$export(module.exports, "dequal", () => $e7269e9ac8c5e2e2$export$de8294bb3be0322f);
var $e7269e9ac8c5e2e2$var$has = Object.prototype.hasOwnProperty;
function $e7269e9ac8c5e2e2$var$find(iter, tar, key) {
    for (key of iter.keys()){
        if ($e7269e9ac8c5e2e2$export$de8294bb3be0322f(key, tar)) return key;
    }
}
function $e7269e9ac8c5e2e2$export$de8294bb3be0322f(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && $e7269e9ac8c5e2e2$export$de8294bb3be0322f(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) return false;
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = $e7269e9ac8c5e2e2$var$find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) return false;
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = $e7269e9ac8c5e2e2$var$find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!$e7269e9ac8c5e2e2$export$de8294bb3be0322f(len[1], bar.get(tmp))) return false;
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if ($e7269e9ac8c5e2e2$var$has.call(foo, ctor) && ++len && !$e7269e9ac8c5e2e2$var$has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !$e7269e9ac8c5e2e2$export$de8294bb3be0322f(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}

});

parcelRegister("1NCL4", function(module, exports) {

$parcel$export(module.exports, "default", () => $14f86ea22d484015$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");

var $gzmzq = parcelRequire("gzmzq");
/**
 * `useSafeState` takes the return value of a `useState` hook and wraps the
 * setter to prevent updates onces the component has unmounted. Can used
 * with `useMergeState` and `useStateAsync` as well
 *
 * @param state The return value of a useStateHook
 *
 * ```ts
 * const [show, setShow] = useSafeState(useState(true));
 * ```
 */ function $14f86ea22d484015$var$useSafeState(state) {
    const isMounted = (0, $gzmzq.default)();
    return [
        state[0],
        (0, $d4J5n.useCallback)((nextState)=>{
            if (!isMounted()) return;
            return state[1](nextState);
        }, [
            isMounted,
            state[1]
        ])
    ];
}
var $14f86ea22d484015$export$2e2bcd8739ae039 = $14f86ea22d484015$var$useSafeState;

});

parcelRegister("wo1bv", function(module, exports) {

$parcel$export(module.exports, "createPopper", () => $06159ec4e6ead7b5$export$8f7491d57c8f97a9);

var $7b3sC = parcelRequire("7b3sC");

var $3daoF = parcelRequire("3daoF");

var $jZBtg = parcelRequire("jZBtg");

var $45jb7 = parcelRequire("45jb7");

var $iZmmk = parcelRequire("iZmmk");

var $e0EP7 = parcelRequire("e0EP7");

var $i4AAK = parcelRequire("i4AAK");

var $lDwp4 = parcelRequire("lDwp4");


var $8yRgr = parcelRequire("8yRgr");
const $06159ec4e6ead7b5$export$8f7491d57c8f97a9 = (0, $8yRgr.popperGenerator)({
    defaultModifiers: [
        (0, $iZmmk.default),
        (0, $i4AAK.default),
        (0, $3daoF.default),
        (0, $jZBtg.default),
        (0, $e0EP7.default),
        (0, $45jb7.default),
        (0, $lDwp4.default),
        (0, $7b3sC.default)
    ]
});

});


parcelRegister("64ybW", function(module, exports) {

$parcel$export(module.exports, "default", () => $46bda38b88092bab$export$2e2bcd8739ae039);

var $lbFiD = parcelRequire("lbFiD");

var $5yh88 = parcelRequire("5yh88");

var $d4J5n = parcelRequire("d4J5n");

var $8Zfen = parcelRequire("8Zfen");

var $ktIYu = parcelRequire("ktIYu");

var $E7xNK = parcelRequire("E7xNK");
const $46bda38b88092bab$var$noop = ()=>{};
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */ function $46bda38b88092bab$var$useRootClose(ref, onRootClose, { disabled: disabled, clickTrigger: clickTrigger } = {}) {
    const onClose = onRootClose || $46bda38b88092bab$var$noop;
    (0, $ktIYu.default)(ref, onClose, {
        disabled: disabled,
        clickTrigger: clickTrigger
    });
    const handleKeyUp = (0, $8Zfen.default)((e)=>{
        if ((0, $E7xNK.isEscKey)(e)) onClose(e);
    });
    (0, $d4J5n.useEffect)(()=>{
        if (disabled || ref == null) return undefined;
        const doc = (0, $5yh88.default)((0, $ktIYu.getRefTarget)(ref));
        // Store the current event to avoid triggering handlers immediately
        // https://github.com/facebook/react/issues/20074
        let currentEvent = (doc.defaultView || window).event;
        const removeKeyupListener = (0, $lbFiD.default)(doc, 'keyup', (e)=>{
            // skip if this event is the same as the one running when we added the handlers
            if (e === currentEvent) {
                currentEvent = undefined;
                return;
            }
            handleKeyUp(e);
        });
        return ()=>{
            removeKeyupListener();
        };
    }, [
        ref,
        disabled,
        handleKeyUp
    ]);
}
var $46bda38b88092bab$export$2e2bcd8739ae039 = $46bda38b88092bab$var$useRootClose;

});
parcelRegister("ktIYu", function(module, exports) {

$parcel$export(module.exports, "getRefTarget", () => $ee89671f7de8825f$export$347601c75fcd4732);
$parcel$export(module.exports, "default", () => $ee89671f7de8825f$export$2e2bcd8739ae039);

var $1EIup = parcelRequire("1EIup");

var $lbFiD = parcelRequire("lbFiD");

var $5yh88 = parcelRequire("5yh88");

var $d4J5n = parcelRequire("d4J5n");

var $8Zfen = parcelRequire("8Zfen");

var $k5vEI = parcelRequire("k5vEI");
const $ee89671f7de8825f$var$noop = ()=>{};
function $ee89671f7de8825f$var$isLeftClickEvent(event) {
    return event.button === 0;
}
function $ee89671f7de8825f$var$isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
const $ee89671f7de8825f$export$347601c75fcd4732 = (ref)=>ref && ('current' in ref ? ref.current : ref);
const $ee89671f7de8825f$var$InitialTriggerEvents = {
    click: 'mousedown',
    mouseup: 'mousedown',
    pointerup: 'pointerdown'
};
/**
 * The `useClickOutside` hook registers your callback on the document that fires
 * when a pointer event is registered outside of the provided ref or element.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onClickOutside
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */ function $ee89671f7de8825f$var$useClickOutside(ref, onClickOutside = $ee89671f7de8825f$var$noop, { disabled: disabled, clickTrigger: clickTrigger = 'click' } = {}) {
    const preventMouseClickOutsideRef = (0, $d4J5n.useRef)(false);
    const waitingForTrigger = (0, $d4J5n.useRef)(false);
    const handleMouseCapture = (0, $d4J5n.useCallback)((e)=>{
        const currentTarget = $ee89671f7de8825f$export$347601c75fcd4732(ref);
        (0, (/*@__PURE__*/$parcel$interopDefault($k5vEI)))(!!currentTarget, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node");
        preventMouseClickOutsideRef.current = !currentTarget || $ee89671f7de8825f$var$isModifiedEvent(e) || !$ee89671f7de8825f$var$isLeftClickEvent(e) || !!(0, $1EIup.default)(currentTarget, e.target) || waitingForTrigger.current;
        waitingForTrigger.current = false;
    }, [
        ref
    ]);
    const handleInitialMouse = (0, $8Zfen.default)((e)=>{
        const currentTarget = $ee89671f7de8825f$export$347601c75fcd4732(ref);
        if (currentTarget && (0, $1EIup.default)(currentTarget, e.target)) waitingForTrigger.current = true;
    });
    const handleMouse = (0, $8Zfen.default)((e)=>{
        if (!preventMouseClickOutsideRef.current) onClickOutside(e);
    });
    (0, $d4J5n.useEffect)(()=>{
        var _ownerWindow$event, _ownerWindow$parent;
        if (disabled || ref == null) return undefined;
        const doc = (0, $5yh88.default)($ee89671f7de8825f$export$347601c75fcd4732(ref));
        const ownerWindow = doc.defaultView || window;
        // Store the current event to avoid triggering handlers immediately
        // For things rendered in an iframe, the event might originate on the parent window
        // so we should fall back to that global event if the local one doesn't exist
        // https://github.com/facebook/react/issues/20074
        let currentEvent = (_ownerWindow$event = ownerWindow.event) != null ? _ownerWindow$event : (_ownerWindow$parent = ownerWindow.parent) == null ? void 0 : _ownerWindow$parent.event;
        let removeInitialTriggerListener = null;
        if ($ee89671f7de8825f$var$InitialTriggerEvents[clickTrigger]) removeInitialTriggerListener = (0, $lbFiD.default)(doc, $ee89671f7de8825f$var$InitialTriggerEvents[clickTrigger], handleInitialMouse, true);
        // Use capture for this listener so it fires before React's listener, to
        // avoid false positives in the contains() check below if the target DOM
        // element is removed in the React mouse callback.
        const removeMouseCaptureListener = (0, $lbFiD.default)(doc, clickTrigger, handleMouseCapture, true);
        const removeMouseListener = (0, $lbFiD.default)(doc, clickTrigger, (e)=>{
            // skip if this event is the same as the one running when we added the handlers
            if (e === currentEvent) {
                currentEvent = undefined;
                return;
            }
            handleMouse(e);
        });
        let mobileSafariHackListeners = [];
        if ('ontouchstart' in doc.documentElement) mobileSafariHackListeners = [].slice.call(doc.body.children).map((el)=>(0, $lbFiD.default)(el, 'mousemove', $ee89671f7de8825f$var$noop));
        return ()=>{
            removeInitialTriggerListener == null || removeInitialTriggerListener();
            removeMouseCaptureListener();
            removeMouseListener();
            mobileSafariHackListeners.forEach((remove)=>remove());
        };
    }, [
        ref,
        disabled,
        clickTrigger,
        handleMouseCapture,
        handleInitialMouse,
        handleMouse
    ]);
}
var $ee89671f7de8825f$export$2e2bcd8739ae039 = $ee89671f7de8825f$var$useClickOutside;

});


parcelRegister("lgpTv", function(module, exports) {

$parcel$export(module.exports, "default", () => $f7af2da609773d4f$export$2e2bcd8739ae039);
function $f7af2da609773d4f$export$ba6dad097c8f5c38(modifiers) {
    const result = {};
    if (!Array.isArray(modifiers)) return modifiers || result;
    // eslint-disable-next-line no-unused-expressions
    modifiers == null || modifiers.forEach((m)=>{
        result[m.name] = m;
    });
    return result;
}
function $f7af2da609773d4f$export$af3a999d4a134c86(map = {}) {
    if (Array.isArray(map)) return map;
    return Object.keys(map).map((k)=>{
        map[k].name = k;
        return map[k];
    });
}
function $f7af2da609773d4f$export$2e2bcd8739ae039({ enabled: enabled, enableEvents: enableEvents, placement: placement, flip: flip, offset: offset, fixed: fixed, containerPadding: containerPadding, arrowElement: arrowElement, popperConfig: popperConfig = {} }) {
    var _modifiers$eventListe, _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
    const modifiers = $f7af2da609773d4f$export$ba6dad097c8f5c38(popperConfig.modifiers);
    return Object.assign({}, popperConfig, {
        placement: placement,
        enabled: enabled,
        strategy: fixed ? 'fixed' : popperConfig.strategy,
        modifiers: $f7af2da609773d4f$export$af3a999d4a134c86(Object.assign({}, modifiers, {
            eventListeners: {
                enabled: enableEvents,
                options: (_modifiers$eventListe = modifiers.eventListeners) == null ? void 0 : _modifiers$eventListe.options
            },
            preventOverflow: Object.assign({}, modifiers.preventOverflow, {
                options: containerPadding ? Object.assign({
                    padding: containerPadding
                }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
            }),
            offset: {
                options: Object.assign({
                    offset: offset
                }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
            },
            arrow: Object.assign({}, modifiers.arrow, {
                enabled: !!arrowElement,
                options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
                    element: arrowElement
                })
            }),
            flip: Object.assign({
                enabled: !!flip
            }, modifiers.flip)
        }))
    });
}

});


parcelRegister("3qKRF", function(module, exports) {

$parcel$export(module.exports, "default", () => $27f82728a40ca9a1$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");

var $3ZumA = parcelRequire("3ZumA");

var $i4X0D = parcelRequire("i4X0D");

var $fLoiC = parcelRequire("fLoiC");

var $2OpNd = parcelRequire("2OpNd");
"use client";
function $27f82728a40ca9a1$export$2e2bcd8739ae039(customOffset) {
    const overlayRef = (0, $d4J5n.useRef)(null);
    const popoverClass = (0, $i4X0D.useBootstrapPrefix)(undefined, 'popover');
    const tooltipClass = (0, $i4X0D.useBootstrapPrefix)(undefined, 'tooltip');
    const offset = (0, $d4J5n.useMemo)(()=>({
            name: 'offset',
            options: {
                offset: ()=>{
                    if (customOffset) return customOffset;
                    if (overlayRef.current) {
                        if ((0, $3ZumA.default)(overlayRef.current, popoverClass)) return (0, $fLoiC.default).POPPER_OFFSET;
                        if ((0, $3ZumA.default)(overlayRef.current, tooltipClass)) return (0, $2OpNd.default).TOOLTIP_OFFSET;
                    }
                    return [
                        0,
                        0
                    ];
                }
            }
        }), [
        customOffset,
        popoverClass,
        tooltipClass
    ]);
    return [
        overlayRef,
        [
            offset
        ]
    ];
}

});
parcelRegister("2OpNd", function(module, exports) {

$parcel$export(module.exports, "default", () => $20c44236e506def2$export$2e2bcd8739ae039);

var $8Rc8S = parcelRequire("8Rc8S");

var $d4J5n = parcelRequire("d4J5n");

var $i4X0D = parcelRequire("i4X0D");

var $iJsSV = parcelRequire("iJsSV");

var $kRY1J = parcelRequire("kRY1J");

var $228IU = parcelRequire("228IU");
"use client";
const $20c44236e506def2$var$Tooltip = /*#__PURE__*/ $d4J5n.forwardRef(({ bsPrefix: bsPrefix, placement: placement = 'right', className: className, style: style, children: children, arrowProps: arrowProps, hasDoneInitialMeasure: hasDoneInitialMeasure, popper: popper, show: show, ...props }, ref)=>{
    bsPrefix = (0, $i4X0D.useBootstrapPrefix)(bsPrefix, 'tooltip');
    const isRTL = (0, $i4X0D.useIsRTL)();
    const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
    const bsDirection = (0, $iJsSV.getOverlayDirection)(primaryPlacement, isRTL);
    let computedStyle = style;
    if (show && !hasDoneInitialMeasure) computedStyle = {
        ...style,
        ...(0, $kRY1J.default)(popper == null ? void 0 : popper.strategy)
    };
    return /*#__PURE__*/ (0, $228IU.jsxs)("div", {
        ref: ref,
        style: computedStyle,
        role: "tooltip",
        "x-placement": primaryPlacement,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($8Rc8S)))(className, bsPrefix, `bs-tooltip-${bsDirection}`),
        ...props,
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("div", {
                className: "tooltip-arrow",
                ...arrowProps
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("div", {
                className: `${bsPrefix}-inner`,
                children: children
            })
        ]
    });
});
$20c44236e506def2$var$Tooltip.displayName = 'Tooltip';
var $20c44236e506def2$export$2e2bcd8739ae039 = Object.assign($20c44236e506def2$var$Tooltip, {
    // Default tooltip offset.
    // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
    TOOLTIP_OFFSET: [
        0,
        6
    ]
});

});




parcelRegister("72myY", function(module, exports) {

$parcel$export(module.exports, "default", () => $51fa38e0e296d07b$export$2e2bcd8739ae039);

var $228IU = parcelRequire("228IU");
parcelRequire("d4J5n");

var $3Cj5L = parcelRequire("3Cj5L");

var $8PPKb = parcelRequire("8PPKb");

const $51fa38e0e296d07b$var$VisSortableItem = (props)=>/*#__PURE__*/ (0, $228IU.jsxs)("div", {
        className: "vis-sortable-item ",
        children: [
            /*#__PURE__*/ (0, $228IU.jsx)("div", {
                className: "drag-handle",
                children: /*#__PURE__*/ (0, $228IU.jsx)((0, $3Cj5L.FontAwesomeIcon), {
                    icon: (0, $8PPKb.faGripLines)
                })
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("div", {
                className: "truncated-text",
                title: props.label,
                children: props.label
            }),
            /*#__PURE__*/ (0, $228IU.jsx)("div", {
                className: "input-box",
                children: /*#__PURE__*/ (0, $228IU.jsx)("input", {
                    type: "checkbox",
                    checked: props.isShow,
                    onChange: props.onCheckChanged,
                    value: props.dataKey
                })
            })
        ]
    });
var $51fa38e0e296d07b$export$2e2bcd8739ae039 = $51fa38e0e296d07b$var$VisSortableItem;

});



//# sourceMappingURL=VisDataTable.844bdcd2.js.map
