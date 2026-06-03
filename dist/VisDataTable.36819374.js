
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire06c0"];
var parcelRegister = parcelRequire.register;
parcelRegister("lgRKc", function(module, exports) {

$parcel$export(module.exports, "AutoSizer", () => (parcelRequire("2OVZ4")).default);
$parcel$export(module.exports, "CellMeasurer", () => (parcelRequire("amyyn")).default);
$parcel$export(module.exports, "CellMeasurerCache", () => (parcelRequire("5nNCU")).default);
$parcel$export(module.exports, "createMasonryCellPositioner", () => (parcelRequire("hmDqc")).default);
$parcel$export(module.exports, "Masonry", () => (parcelRequire("g2pSD")).default);
$parcel$export(module.exports, "Table", () => (parcelRequire("kQwfX")).default);
$parcel$export(module.exports, "Column", () => (parcelRequire("lmYCA")).default);
$parcel$export(module.exports, "SortDirection", () => (parcelRequire("6K0av")).default);
parcelRequire("lq23y");
var $l8rtU = parcelRequire("l8rtU");
parcelRequire("gUMHy");
var $2OVZ4 = parcelRequire("2OVZ4");
parcelRequire("fFHlk");
var $amyyn = parcelRequire("amyyn");
var $5nNCU = parcelRequire("5nNCU");
parcelRequire("8gDC2");
var $6tGPm = parcelRequire("6tGPm");
parcelRequire("sGStf");
var $iWlp8 = parcelRequire("iWlp8");
parcelRequire("fzHd5");
var $fjyHm = parcelRequire("fjyHm");
var $iU4qn = parcelRequire("iU4qn");
var $93Bew = parcelRequire("93Bew");
var $l9w6Y = parcelRequire("l9w6Y");
parcelRequire("wqh8z");
var $9dO0O = parcelRequire("9dO0O");
parcelRequire("KTBsG");
var $1Jemm = parcelRequire("1Jemm");
parcelRequire("7J12H");
var $hmDqc = parcelRequire("hmDqc");
var $g2pSD = parcelRequire("g2pSD");
parcelRequire("6TwRY");
var $iQcoM = parcelRequire("iQcoM");
parcelRequire("6feUC");
var $aXJyw = parcelRequire("aXJyw");
parcelRequire("390oa");
var $lmYCA = parcelRequire("lmYCA");
var $6K0av = parcelRequire("6K0av");
var $kQwfX = parcelRequire("kQwfX");
parcelRequire("azXEi");
var $6nY0j = parcelRequire("6nY0j");

});
parcelRegister("lq23y", function(module, exports) {

var $l8rtU = parcelRequire("l8rtU");

var $9xosw = parcelRequire("9xosw");

});
parcelRegister("l8rtU", function(module, exports) {

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");

var $d4J5n = parcelRequire("d4J5n");

var $32PuH = parcelRequire("32PuH");
parcelRequire("fzHd5");
parcelRequire("9xosw");

var $f62fa992e857c09c$var$_class, $f62fa992e857c09c$var$_temp;
function $f62fa992e857c09c$var$ownKeys(object, enumerableOnly) {
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
function $f62fa992e857c09c$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $f62fa992e857c09c$var$ownKeys(source, true).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $f62fa992e857c09c$var$ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */ var $f62fa992e857c09c$var$ArrowKeyStepper = ($f62fa992e857c09c$var$_temp = $f62fa992e857c09c$var$_class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(ArrowKeyStepper, _React$PureComponent);
    function ArrowKeyStepper() {
        var _getPrototypeOf2;
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, ArrowKeyStepper);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (_getPrototypeOf2 = (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(ArrowKeyStepper)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "state", {
            scrollToColumn: 0,
            scrollToRow: 0,
            instanceProps: {
                prevScrollToColumn: 0,
                prevScrollToRow: 0
            }
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_columnStartIndex", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_columnStopIndex", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_rowStartIndex", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_rowStopIndex", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onKeyDown", function(event) {
            var _this$props = _this.props, columnCount = _this$props.columnCount, disabled = _this$props.disabled, mode = _this$props.mode, rowCount = _this$props.rowCount;
            if (disabled) return;
            var _this$_getScrollState = _this._getScrollState(), scrollToColumnPrevious = _this$_getScrollState.scrollToColumn, scrollToRowPrevious = _this$_getScrollState.scrollToRow;
            var _this$_getScrollState2 = _this._getScrollState(), scrollToColumn = _this$_getScrollState2.scrollToColumn, scrollToRow = _this$_getScrollState2.scrollToRow; // The above cases all prevent default event event behavior.
            // This is to keep the grid from scrolling after the snap-to update.
            switch(event.key){
                case 'ArrowDown':
                    scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
                    break;
                case 'ArrowLeft':
                    scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
                    break;
                case 'ArrowRight':
                    scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
                    break;
                case 'ArrowUp':
                    scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
                    break;
            }
            if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
                event.preventDefault();
                _this._updateScrollState({
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow
                });
            }
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onSectionRendered", function(_ref) {
            var columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex;
            _this._columnStartIndex = columnStartIndex;
            _this._columnStopIndex = columnStopIndex;
            _this._rowStartIndex = rowStartIndex;
            _this._rowStopIndex = rowStopIndex;
        });
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(ArrowKeyStepper, [
        {
            key: "setScrollIndexes",
            value: function setScrollIndexes(_ref2) {
                var scrollToColumn = _ref2.scrollToColumn, scrollToRow = _ref2.scrollToRow;
                this.setState({
                    scrollToRow: scrollToRow,
                    scrollToColumn: scrollToColumn
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, className = _this$props2.className, children = _this$props2.children;
                var _this$_getScrollState3 = this._getScrollState(), scrollToColumn = _this$_getScrollState3.scrollToColumn, scrollToRow = _this$_getScrollState3.scrollToRow;
                return $d4J5n.createElement("div", {
                    className: className,
                    onKeyDown: this._onKeyDown
                }, children({
                    onSectionRendered: this._onSectionRendered,
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow
                }));
            }
        },
        {
            key: "_getScrollState",
            value: function _getScrollState() {
                return this.props.isControlled ? this.props : this.state;
            }
        },
        {
            key: "_updateScrollState",
            value: function _updateScrollState(_ref3) {
                var scrollToColumn = _ref3.scrollToColumn, scrollToRow = _ref3.scrollToRow;
                var _this$props3 = this.props, isControlled = _this$props3.isControlled, onScrollToChange = _this$props3.onScrollToChange;
                if (typeof onScrollToChange === 'function') onScrollToChange({
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow
                });
                if (!isControlled) this.setState({
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow
                });
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.isControlled) return {};
                if (nextProps.scrollToColumn !== prevState.instanceProps.prevScrollToColumn || nextProps.scrollToRow !== prevState.instanceProps.prevScrollToRow) return $f62fa992e857c09c$var$_objectSpread({}, prevState, {
                    scrollToColumn: nextProps.scrollToColumn,
                    scrollToRow: nextProps.scrollToRow,
                    instanceProps: {
                        prevScrollToColumn: nextProps.scrollToColumn,
                        prevScrollToRow: nextProps.scrollToRow
                    }
                });
                return {};
            }
        }
    ]);
    return ArrowKeyStepper;
}($d4J5n.PureComponent), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($f62fa992e857c09c$var$_class, "propTypes", null), $f62fa992e857c09c$var$_temp);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($f62fa992e857c09c$var$ArrowKeyStepper, "defaultProps", {
    disabled: false,
    isControlled: false,
    mode: 'edges',
    scrollToColumn: 0,
    scrollToRow: 0
});
(0, $32PuH.polyfill)($f62fa992e857c09c$var$ArrowKeyStepper);
var $f62fa992e857c09c$export$2e2bcd8739ae039 = $f62fa992e857c09c$var$ArrowKeyStepper;

});
parcelRegister("p8WsB", function(module, exports) {
function $04b945975a593e7e$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
module.exports = $04b945975a593e7e$var$_classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRegister("dHNFa", function(module, exports) {

var $5l7tU = parcelRequire("5l7tU");
function $9fa5d08e8c1c8151$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, $5l7tU(descriptor.key), descriptor);
    }
}
function $9fa5d08e8c1c8151$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $9fa5d08e8c1c8151$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $9fa5d08e8c1c8151$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
module.exports = $9fa5d08e8c1c8151$var$_createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

});
parcelRegister("5l7tU", function(module, exports) {

var $dD6CP = parcelRequire("dD6CP");
var $3e34b78bc01ed472$var$_typeof = $dD6CP.default;

var $45X3M = parcelRequire("45X3M");
function $3e34b78bc01ed472$var$_toPropertyKey(arg) {
    var key = $45X3M(arg, "string");
    return $3e34b78bc01ed472$var$_typeof(key) === "symbol" ? key : String(key);
}
module.exports = $3e34b78bc01ed472$var$_toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

});
parcelRegister("dD6CP", function(module, exports) {
function $9ec40e8a6809e691$var$_typeof(o) {
    "@babel/helpers - typeof";
    return module.exports = $9ec40e8a6809e691$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, $9ec40e8a6809e691$var$_typeof(o);
}
module.exports = $9ec40e8a6809e691$var$_typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRegister("45X3M", function(module, exports) {

var $dD6CP = parcelRequire("dD6CP");
var $2fb571279d2dddba$var$_typeof = $dD6CP.default;
function $2fb571279d2dddba$var$_toPrimitive(input, hint) {
    if ($2fb571279d2dddba$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($2fb571279d2dddba$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
module.exports = $2fb571279d2dddba$var$_toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

});



parcelRegister("kAPye", function(module, exports) {

var $dD6CP = parcelRequire("dD6CP");
var $efdf286c590dcd25$var$_typeof = $dD6CP.default;

var $8HIaN = parcelRequire("8HIaN");
function $efdf286c590dcd25$var$_possibleConstructorReturn(self, call) {
    if (call && ($efdf286c590dcd25$var$_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $8HIaN(self);
}
module.exports = $efdf286c590dcd25$var$_possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

});
parcelRegister("8HIaN", function(module, exports) {
function $65649ac2fa976e7f$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
module.exports = $65649ac2fa976e7f$var$_assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

});


parcelRegister("6741x", function(module, exports) {
function $4736848dcace13e2$var$_getPrototypeOf(o) {
    module.exports = $4736848dcace13e2$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return $4736848dcace13e2$var$_getPrototypeOf(o);
}
module.exports = $4736848dcace13e2$var$_getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRegister("7oXxh", function(module, exports) {

var $4EmYx = parcelRequire("4EmYx");
function $5638f4d98792fb07$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) $4EmYx(subClass, superClass);
}
module.exports = $5638f4d98792fb07$var$_inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

});
parcelRegister("4EmYx", function(module, exports) {
function $362cb84889ee368b$var$_setPrototypeOf(o, p) {
    module.exports = $362cb84889ee368b$var$_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return $362cb84889ee368b$var$_setPrototypeOf(o, p);
}
module.exports = $362cb84889ee368b$var$_setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

});


parcelRegister("6nVSY", function(module, exports) {

var $5l7tU = parcelRequire("5l7tU");
function $4a61caf6b5e96a59$var$_defineProperty(obj, key, value) {
    key = $5l7tU(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
module.exports = $4a61caf6b5e96a59$var$_defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRegister("fzHd5", function(module, exports) {

$parcel$export(module.exports, "default", () => (parcelRequire("l9w6Y")).default);
$parcel$export(module.exports, "accessibilityOverscanIndicesGetter", () => (parcelRequire("fjyHm")).default);

var $l9w6Y = parcelRequire("l9w6Y");

var $fjyHm = parcelRequire("fjyHm");

var $iU4qn = parcelRequire("iU4qn");

var $93Bew = parcelRequire("93Bew");

var $j3R7B = parcelRequire("j3R7B");

});
parcelRegister("l9w6Y", function(module, exports) {

$parcel$export(module.exports, "default", () => $f66358e916d75c07$export$2e2bcd8739ae039);

var $e5Cx7 = parcelRequire("e5Cx7");

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");

var $d4J5n = parcelRequire("d4J5n");

var $h0TGs = parcelRequire("h0TGs");

var $2q55U = parcelRequire("2q55U");

var $7lKYN = parcelRequire("7lKYN");

var $2MlNe = parcelRequire("2MlNe");

var $93Bew = parcelRequire("93Bew");

var $dJjFm = parcelRequire("dJjFm");

var $iU4qn = parcelRequire("iU4qn");

var $4YdJF = parcelRequire("4YdJF");

var $32PuH = parcelRequire("32PuH");

var $j2sdi = parcelRequire("j2sdi");
parcelRequire("j3R7B");

var $f66358e916d75c07$var$_class, $f66358e916d75c07$var$_temp;
function $f66358e916d75c07$var$ownKeys(object, enumerableOnly) {
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
function $f66358e916d75c07$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $f66358e916d75c07$var$ownKeys(source, true).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $f66358e916d75c07$var$ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var $f66358e916d75c07$export$c51e03d5b92ea76f = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */ var $f66358e916d75c07$var$SCROLL_POSITION_CHANGE_REASONS = {
    OBSERVED: 'observed',
    REQUESTED: 'requested'
};
var $f66358e916d75c07$var$renderNull = function renderNull() {
    return null;
};
/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */ var $f66358e916d75c07$var$Grid = ($f66358e916d75c07$var$_temp = $f66358e916d75c07$var$_class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(Grid, _React$PureComponent);
    // Invokes onSectionRendered callback only when start/stop row or column indices change
    function Grid(props) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, Grid);
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(Grid).call(this, props));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onGridRenderedMemoizer", (0, $2MlNe.default)());
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScrollMemoizer", (0, $2MlNe.default)(false));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_deferredInvalidateColumnIndex", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_deferredInvalidateRowIndex", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_recomputeScrollLeftFlag", false);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_recomputeScrollTopFlag", false);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_horizontalScrollBarSize", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_verticalScrollBarSize", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_scrollbarPresenceChanged", false);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_scrollingContainer", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_childrenToDisplay", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_columnStartIndex", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_columnStopIndex", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_rowStartIndex", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_rowStopIndex", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_renderedColumnStartIndex", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_renderedColumnStopIndex", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_renderedRowStartIndex", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_renderedRowStopIndex", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_initialScrollTop", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_initialScrollLeft", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_disablePointerEventsTimeoutId", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_styleCache", {});
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_cellCache", {});
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_debounceScrollEndedCallback", function() {
            _this._disablePointerEventsTimeoutId = null; // isScrolling is used to determine if we reset styleCache
            _this.setState({
                isScrolling: false,
                needToResetStyleCache: false
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_invokeOnGridRenderedHelper", function() {
            var onSectionRendered = _this.props.onSectionRendered;
            _this._onGridRenderedMemoizer({
                callback: onSectionRendered,
                indices: {
                    columnOverscanStartIndex: _this._columnStartIndex,
                    columnOverscanStopIndex: _this._columnStopIndex,
                    columnStartIndex: _this._renderedColumnStartIndex,
                    columnStopIndex: _this._renderedColumnStopIndex,
                    rowOverscanStartIndex: _this._rowStartIndex,
                    rowOverscanStopIndex: _this._rowStopIndex,
                    rowStartIndex: _this._renderedRowStartIndex,
                    rowStopIndex: _this._renderedRowStopIndex
                }
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_setScrollingContainerRef", function(ref) {
            _this._scrollingContainer = ref;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScroll", function(event) {
            // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
            // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
            // See issue #404 for more information.
            if (event.target === _this._scrollingContainer) _this.handleScrollEvent(event.target);
        });
        var columnSizeAndPositionManager = new (0, $7lKYN.default)({
            cellCount: props.columnCount,
            cellSizeGetter: function cellSizeGetter(params) {
                return Grid._wrapSizeGetter(props.columnWidth)(params);
            },
            estimatedCellSize: Grid._getEstimatedColumnSize(props)
        });
        var rowSizeAndPositionManager = new (0, $7lKYN.default)({
            cellCount: props.rowCount,
            cellSizeGetter: function cellSizeGetter(params) {
                return Grid._wrapSizeGetter(props.rowHeight)(params);
            },
            estimatedCellSize: Grid._getEstimatedRowSize(props)
        });
        _this.state = {
            instanceProps: {
                columnSizeAndPositionManager: columnSizeAndPositionManager,
                rowSizeAndPositionManager: rowSizeAndPositionManager,
                prevColumnWidth: props.columnWidth,
                prevRowHeight: props.rowHeight,
                prevColumnCount: props.columnCount,
                prevRowCount: props.rowCount,
                prevIsScrolling: props.isScrolling === true,
                prevScrollToColumn: props.scrollToColumn,
                prevScrollToRow: props.scrollToRow,
                scrollbarSize: 0,
                scrollbarSizeMeasured: false
            },
            isScrolling: false,
            scrollDirectionHorizontal: (0, $93Bew.SCROLL_DIRECTION_FORWARD),
            scrollDirectionVertical: (0, $93Bew.SCROLL_DIRECTION_FORWARD),
            scrollLeft: 0,
            scrollTop: 0,
            scrollPositionChangeReason: null,
            needToResetStyleCache: false
        };
        if (props.scrollToRow > 0) _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
        if (props.scrollToColumn > 0) _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
        return _this;
    }
    /**
   * Gets offsets for a given cell and alignment.
   */ (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(Grid, [
        {
            key: "getOffsetForCell",
            value: function getOffsetForCell() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$alignment = _ref.alignment, alignment = _ref$alignment === void 0 ? this.props.scrollToAlignment : _ref$alignment, _ref$columnIndex = _ref.columnIndex, columnIndex = _ref$columnIndex === void 0 ? this.props.scrollToColumn : _ref$columnIndex, _ref$rowIndex = _ref.rowIndex, rowIndex = _ref$rowIndex === void 0 ? this.props.scrollToRow : _ref$rowIndex;
                var offsetProps = $f66358e916d75c07$var$_objectSpread({}, this.props, {
                    scrollToAlignment: alignment,
                    scrollToColumn: columnIndex,
                    scrollToRow: rowIndex
                });
                return {
                    scrollLeft: this._getCalculatedScrollLeft(offsetProps),
                    scrollTop: this._getCalculatedScrollTop(offsetProps)
                };
            }
        },
        {
            key: "getTotalRowsHeight",
            value: function getTotalRowsHeight() {
                return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
            }
        },
        {
            key: "getTotalColumnsWidth",
            value: function getTotalColumnsWidth() {
                return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
            }
        },
        {
            key: "handleScrollEvent",
            value: function handleScrollEvent(_ref2) {
                var _ref2$scrollLeft = _ref2.scrollLeft, scrollLeftParam = _ref2$scrollLeft === void 0 ? 0 : _ref2$scrollLeft, _ref2$scrollTop = _ref2.scrollTop, scrollTopParam = _ref2$scrollTop === void 0 ? 0 : _ref2$scrollTop;
                // On iOS, we can arrive at negative offsets by swiping past the start.
                // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
                if (scrollTopParam < 0) return;
                 // Prevent pointer events from interrupting a smooth scroll
                this._debounceScrollEnded();
                var _this$props = this.props, autoHeight = _this$props.autoHeight, autoWidth = _this$props.autoWidth, height = _this$props.height, width = _this$props.width;
                var instanceProps = this.state.instanceProps; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
                // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
                // This causes a series of rapid renders that is slow for long lists.
                // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.
                var scrollbarSize = instanceProps.scrollbarSize;
                var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
                var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
                var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
                // Don't force a re-render if this is the case.
                // The mouse may move faster then the animation frame does.
                // Use requestAnimationFrame to avoid over-updating.
                if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
                    // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
                    // Don't change direction for an axis unless scroll offset has changed.
                    var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? (0, $93Bew.SCROLL_DIRECTION_FORWARD) : (0, $93Bew.SCROLL_DIRECTION_BACKWARD) : this.state.scrollDirectionHorizontal;
                    var scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? (0, $93Bew.SCROLL_DIRECTION_FORWARD) : (0, $93Bew.SCROLL_DIRECTION_BACKWARD) : this.state.scrollDirectionVertical;
                    var newState = {
                        isScrolling: true,
                        scrollDirectionHorizontal: scrollDirectionHorizontal,
                        scrollDirectionVertical: scrollDirectionVertical,
                        scrollPositionChangeReason: $f66358e916d75c07$var$SCROLL_POSITION_CHANGE_REASONS.OBSERVED
                    };
                    if (!autoHeight) newState.scrollTop = scrollTop;
                    if (!autoWidth) newState.scrollLeft = scrollLeft;
                    newState.needToResetStyleCache = false;
                    this.setState(newState);
                }
                this._invokeOnScrollMemoizer({
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    totalColumnsWidth: totalColumnsWidth,
                    totalRowsHeight: totalRowsHeight
                });
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender(_ref3) {
                var columnIndex = _ref3.columnIndex, rowIndex = _ref3.rowIndex;
                this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
                this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
            }
        },
        {
            key: "measureAllCells",
            value: function measureAllCells() {
                var _this$props2 = this.props, columnCount = _this$props2.columnCount, rowCount = _this$props2.rowCount;
                var instanceProps = this.state.instanceProps;
                instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
                instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
            }
        },
        {
            key: "recomputeGridSize",
            value: function recomputeGridSize() {
                var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref4$columnIndex = _ref4.columnIndex, columnIndex = _ref4$columnIndex === void 0 ? 0 : _ref4$columnIndex, _ref4$rowIndex = _ref4.rowIndex, rowIndex = _ref4$rowIndex === void 0 ? 0 : _ref4$rowIndex;
                var _this$props3 = this.props, scrollToColumn = _this$props3.scrollToColumn, scrollToRow = _this$props3.scrollToRow;
                var instanceProps = this.state.instanceProps;
                instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
                instanceProps.rowSizeAndPositionManager.resetCell(rowIndex); // Cell sizes may be determined by a function property.
                // In this case the cDU handler can't know if they changed.
                // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
                this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === (0, $93Bew.SCROLL_DIRECTION_FORWARD) ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
                this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === (0, $93Bew.SCROLL_DIRECTION_FORWARD) ? rowIndex <= scrollToRow : rowIndex >= scrollToRow); // Clear cell cache in case we are scrolling;
                // Invalid row heights likely mean invalid cached content as well.
                this._styleCache = {};
                this._cellCache = {};
                this.forceUpdate();
            }
        },
        {
            key: "scrollToCell",
            value: function scrollToCell(_ref5) {
                var columnIndex = _ref5.columnIndex, rowIndex = _ref5.rowIndex;
                var columnCount = this.props.columnCount;
                var props = this.props; // Don't adjust scroll offset for single-column grids (eg List, Table).
                // This can cause a funky scroll offset because of the vertical scrollbar width.
                if (columnCount > 1 && columnIndex !== undefined) this._updateScrollLeftForScrollToColumn($f66358e916d75c07$var$_objectSpread({}, props, {
                    scrollToColumn: columnIndex
                }));
                if (rowIndex !== undefined) this._updateScrollTopForScrollToRow($f66358e916d75c07$var$_objectSpread({}, props, {
                    scrollToRow: rowIndex
                }));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this$props4 = this.props, getScrollbarSize = _this$props4.getScrollbarSize, height = _this$props4.height, scrollLeft = _this$props4.scrollLeft, scrollToColumn = _this$props4.scrollToColumn, scrollTop = _this$props4.scrollTop, scrollToRow = _this$props4.scrollToRow, width = _this$props4.width;
                var instanceProps = this.state.instanceProps; // Reset initial offsets to be ignored in browser
                this._initialScrollTop = 0;
                this._initialScrollLeft = 0; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
                // We must do this at the start of the method as we may calculate and update scroll position below.
                this._handleInvalidatedGridSize(); // If this component was first rendered server-side, scrollbar size will be undefined.
                // In that event we need to remeasure.
                if (!instanceProps.scrollbarSizeMeasured) this.setState(function(prevState) {
                    var stateUpdate = $f66358e916d75c07$var$_objectSpread({}, prevState, {
                        needToResetStyleCache: false
                    });
                    stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
                    stateUpdate.instanceProps.scrollbarSizeMeasured = true;
                    return stateUpdate;
                });
                if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
                    var stateUpdate = Grid._getScrollToPositionStateUpdate({
                        prevState: this.state,
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop
                    });
                    if (stateUpdate) {
                        stateUpdate.needToResetStyleCache = false;
                        this.setState(stateUpdate);
                    }
                } // refs don't work in `react-test-renderer`
                if (this._scrollingContainer) {
                    // setting the ref's scrollLeft and scrollTop.
                    // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
                    if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) this._scrollingContainer.scrollLeft = this.state.scrollLeft;
                    if (this._scrollingContainer.scrollTop !== this.state.scrollTop) this._scrollingContainer.scrollTop = this.state.scrollTop;
                } // Don't update scroll offset if the size is 0; we don't render any cells in this case.
                // Setting a state may cause us to later thing we've updated the offce when we haven't.
                var sizeIsBiggerThanZero = height > 0 && width > 0;
                if (scrollToColumn >= 0 && sizeIsBiggerThanZero) this._updateScrollLeftForScrollToColumn();
                if (scrollToRow >= 0 && sizeIsBiggerThanZero) this._updateScrollTopForScrollToRow();
                 // Update onRowsRendered callback
                this._invokeOnGridRenderedHelper(); // Initialize onScroll callback
                this._invokeOnScrollMemoizer({
                    scrollLeft: scrollLeft || 0,
                    scrollTop: scrollTop || 0,
                    totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
                    totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
                });
                this._maybeCallOnScrollbarPresenceChange();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                var _this2 = this;
                var _this$props5 = this.props, autoHeight = _this$props5.autoHeight, autoWidth = _this$props5.autoWidth, columnCount = _this$props5.columnCount, height = _this$props5.height, rowCount = _this$props5.rowCount, scrollToAlignment = _this$props5.scrollToAlignment, scrollToColumn = _this$props5.scrollToColumn, scrollToRow = _this$props5.scrollToRow, width = _this$props5.width;
                var _this$state = this.state, scrollLeft = _this$state.scrollLeft, scrollPositionChangeReason = _this$state.scrollPositionChangeReason, scrollTop = _this$state.scrollTop, instanceProps = _this$state.instanceProps; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
                // We must do this at the start of the method as we may calculate and update scroll position below.
                this._handleInvalidatedGridSize(); // Handle edge case where column or row count has only just increased over 0.
                // In this case we may have to restore a previously-specified scroll offset.
                // For more info see bvaughn/react-virtualized/issues/218
                var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
                // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
                // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
                // So we only set these when we require an adjustment of the scroll position.
                // See issue #2 for more information.
                if (scrollPositionChangeReason === $f66358e916d75c07$var$SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
                    // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
                    // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
                    if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) this._scrollingContainer.scrollLeft = scrollLeft;
                    if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) this._scrollingContainer.scrollTop = scrollTop;
                } // Special case where the previous size was 0:
                // In this case we don't show any windowed cells at all.
                // So we should always recalculate offset afterwards.
                var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0; // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
                // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
                if (this._recomputeScrollLeftFlag) {
                    this._recomputeScrollLeftFlag = false;
                    this._updateScrollLeftForScrollToColumn(this.props);
                } else (0, $dJjFm.default)({
                    cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                    previousCellsCount: prevProps.columnCount,
                    previousCellSize: prevProps.columnWidth,
                    previousScrollToAlignment: prevProps.scrollToAlignment,
                    previousScrollToIndex: prevProps.scrollToColumn,
                    previousSize: prevProps.width,
                    scrollOffset: scrollLeft,
                    scrollToAlignment: scrollToAlignment,
                    scrollToIndex: scrollToColumn,
                    size: width,
                    sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
                    updateScrollIndexCallback: function updateScrollIndexCallback() {
                        return _this2._updateScrollLeftForScrollToColumn(_this2.props);
                    }
                });
                if (this._recomputeScrollTopFlag) {
                    this._recomputeScrollTopFlag = false;
                    this._updateScrollTopForScrollToRow(this.props);
                } else (0, $dJjFm.default)({
                    cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                    previousCellsCount: prevProps.rowCount,
                    previousCellSize: prevProps.rowHeight,
                    previousScrollToAlignment: prevProps.scrollToAlignment,
                    previousScrollToIndex: prevProps.scrollToRow,
                    previousSize: prevProps.height,
                    scrollOffset: scrollTop,
                    scrollToAlignment: scrollToAlignment,
                    scrollToIndex: scrollToRow,
                    size: height,
                    sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
                    updateScrollIndexCallback: function updateScrollIndexCallback() {
                        return _this2._updateScrollTopForScrollToRow(_this2.props);
                    }
                });
                 // Update onRowsRendered callback if start/stop indices have changed
                this._invokeOnGridRenderedHelper(); // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
                if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
                    var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
                    var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                    this._invokeOnScrollMemoizer({
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop,
                        totalColumnsWidth: totalColumnsWidth,
                        totalRowsHeight: totalRowsHeight
                    });
                }
                this._maybeCallOnScrollbarPresenceChange();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this._disablePointerEventsTimeoutId) (0, $j2sdi.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props6 = this.props, autoContainerWidth = _this$props6.autoContainerWidth, autoHeight = _this$props6.autoHeight, autoWidth = _this$props6.autoWidth, className = _this$props6.className, containerProps = _this$props6.containerProps, containerRole = _this$props6.containerRole, containerStyle = _this$props6.containerStyle, height = _this$props6.height, id = _this$props6.id, noContentRenderer = _this$props6.noContentRenderer, role = _this$props6.role, style = _this$props6.style, tabIndex = _this$props6.tabIndex, width = _this$props6.width;
                var _this$state2 = this.state, instanceProps = _this$state2.instanceProps, needToResetStyleCache = _this$state2.needToResetStyleCache;
                var isScrolling = this._isScrolling();
                var gridStyle = {
                    boxSizing: 'border-box',
                    direction: 'ltr',
                    height: autoHeight ? 'auto' : height,
                    position: 'relative',
                    width: autoWidth ? 'auto' : width,
                    WebkitOverflowScrolling: 'touch',
                    willChange: 'transform'
                };
                if (needToResetStyleCache) this._styleCache = {};
                 // calculate _styleCache here
                // if state.isScrolling (not from _isScrolling) then reset
                if (!this.state.isScrolling) this._resetStyleCache();
                 // calculate children to render here
                this._calculateChildrenToRender(this.props, this.state);
                var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(); // Force browser to hide scrollbars when we know they aren't necessary.
                // Otherwise once scrollbars appear they may not disappear again.
                // For more info see issue #116
                var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
                var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
                if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
                    this._horizontalScrollBarSize = horizontalScrollBarSize;
                    this._verticalScrollBarSize = verticalScrollBarSize;
                    this._scrollbarPresenceChanged = true;
                } // Also explicitly init styles to 'auto' if scrollbars are required.
                // This works around an obscure edge case where external CSS styles have not yet been loaded,
                // But an initial scroll index of offset is set as an external prop.
                // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
                // This was originally reported via clauderic/react-infinite-calendar/issues/23
                gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
                gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
                var childrenToDisplay = this._childrenToDisplay;
                var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
                return $d4J5n.createElement("div", (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({
                    ref: this._setScrollingContainerRef
                }, containerProps, {
                    "aria-label": this.props['aria-label'],
                    "aria-readonly": this.props['aria-readonly'],
                    className: (0, $h0TGs.default)('ReactVirtualized__Grid', className),
                    id: id,
                    onScroll: this._onScroll,
                    role: role,
                    style: $f66358e916d75c07$var$_objectSpread({}, gridStyle, {}, style),
                    tabIndex: tabIndex
                }), childrenToDisplay.length > 0 && $d4J5n.createElement("div", {
                    className: "ReactVirtualized__Grid__innerScrollContainer",
                    role: containerRole,
                    style: $f66358e916d75c07$var$_objectSpread({
                        width: autoContainerWidth ? 'auto' : totalColumnsWidth,
                        height: totalRowsHeight,
                        maxWidth: totalColumnsWidth,
                        maxHeight: totalRowsHeight,
                        overflow: 'hidden',
                        pointerEvents: isScrolling ? 'none' : '',
                        position: 'relative'
                    }, containerStyle)
                }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
            }
        },
        {
            key: "_calculateChildrenToRender",
            value: function _calculateChildrenToRender() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                var cellRenderer = props.cellRenderer, cellRangeRenderer = props.cellRangeRenderer, columnCount = props.columnCount, deferredMeasurementCache = props.deferredMeasurementCache, height = props.height, overscanColumnCount = props.overscanColumnCount, overscanIndicesGetter = props.overscanIndicesGetter, overscanRowCount = props.overscanRowCount, rowCount = props.rowCount, width = props.width, isScrollingOptOut = props.isScrollingOptOut;
                var scrollDirectionHorizontal = state.scrollDirectionHorizontal, scrollDirectionVertical = state.scrollDirectionVertical, instanceProps = state.instanceProps;
                var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
                var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;
                var isScrolling = this._isScrolling(props, state);
                this._childrenToDisplay = []; // Render only enough columns and rows to cover the visible area of the grid.
                if (height > 0 && width > 0) {
                    var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
                        containerSize: width,
                        offset: scrollLeft
                    });
                    var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
                        containerSize: height,
                        offset: scrollTop
                    });
                    var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
                        containerSize: width,
                        offset: scrollLeft
                    });
                    var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
                        containerSize: height,
                        offset: scrollTop
                    }); // Store for _invokeOnGridRenderedHelper()
                    this._renderedColumnStartIndex = visibleColumnIndices.start;
                    this._renderedColumnStopIndex = visibleColumnIndices.stop;
                    this._renderedRowStartIndex = visibleRowIndices.start;
                    this._renderedRowStopIndex = visibleRowIndices.stop;
                    var overscanColumnIndices = overscanIndicesGetter({
                        direction: 'horizontal',
                        cellCount: columnCount,
                        overscanCellsCount: overscanColumnCount,
                        scrollDirection: scrollDirectionHorizontal,
                        startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
                        stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
                    });
                    var overscanRowIndices = overscanIndicesGetter({
                        direction: 'vertical',
                        cellCount: rowCount,
                        overscanCellsCount: overscanRowCount,
                        scrollDirection: scrollDirectionVertical,
                        startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
                        stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
                    }); // Store for _invokeOnGridRenderedHelper()
                    var columnStartIndex = overscanColumnIndices.overscanStartIndex;
                    var columnStopIndex = overscanColumnIndices.overscanStopIndex;
                    var rowStartIndex = overscanRowIndices.overscanStartIndex;
                    var rowStopIndex = overscanRowIndices.overscanStopIndex; // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
                    if (deferredMeasurementCache) {
                        // If rows have a dynamic height, scan the rows we are about to render.
                        // If any have not yet been measured, then we need to render all columns initially,
                        // Because the height of the row is equal to the tallest cell within that row,
                        // (And so we can't know the height without measuring all column-cells first).
                        if (!deferredMeasurementCache.hasFixedHeight()) {
                            for(var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++)if (!deferredMeasurementCache.has(rowIndex, 0)) {
                                columnStartIndex = 0;
                                columnStopIndex = columnCount - 1;
                                break;
                            }
                        } // If columns have a dynamic width, scan the columns we are about to render.
                        // If any have not yet been measured, then we need to render all rows initially,
                        // Because the width of the column is equal to the widest cell within that column,
                        // (And so we can't know the width without measuring all row-cells first).
                        if (!deferredMeasurementCache.hasFixedWidth()) {
                            for(var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++)if (!deferredMeasurementCache.has(0, columnIndex)) {
                                rowStartIndex = 0;
                                rowStopIndex = rowCount - 1;
                                break;
                            }
                        }
                    }
                    this._childrenToDisplay = cellRangeRenderer({
                        cellCache: this._cellCache,
                        cellRenderer: cellRenderer,
                        columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                        columnStartIndex: columnStartIndex,
                        columnStopIndex: columnStopIndex,
                        deferredMeasurementCache: deferredMeasurementCache,
                        horizontalOffsetAdjustment: horizontalOffsetAdjustment,
                        isScrolling: isScrolling,
                        isScrollingOptOut: isScrollingOptOut,
                        parent: this,
                        rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                        rowStartIndex: rowStartIndex,
                        rowStopIndex: rowStopIndex,
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop,
                        styleCache: this._styleCache,
                        verticalOffsetAdjustment: verticalOffsetAdjustment,
                        visibleColumnIndices: visibleColumnIndices,
                        visibleRowIndices: visibleRowIndices
                    }); // update the indices
                    this._columnStartIndex = columnStartIndex;
                    this._columnStopIndex = columnStopIndex;
                    this._rowStartIndex = rowStartIndex;
                    this._rowStopIndex = rowStopIndex;
                }
            }
        },
        {
            key: "_debounceScrollEnded",
            value: function _debounceScrollEnded() {
                var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
                if (this._disablePointerEventsTimeoutId) (0, $j2sdi.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
                this._disablePointerEventsTimeoutId = (0, $j2sdi.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
            }
        },
        {
            key: "_handleInvalidatedGridSize",
            /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */ value: function _handleInvalidatedGridSize() {
                if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
                    var columnIndex = this._deferredInvalidateColumnIndex;
                    var rowIndex = this._deferredInvalidateRowIndex;
                    this._deferredInvalidateColumnIndex = null;
                    this._deferredInvalidateRowIndex = null;
                    this.recomputeGridSize({
                        columnIndex: columnIndex,
                        rowIndex: rowIndex
                    });
                }
            }
        },
        {
            key: "_invokeOnScrollMemoizer",
            value: function _invokeOnScrollMemoizer(_ref6) {
                var _this3 = this;
                var scrollLeft = _ref6.scrollLeft, scrollTop = _ref6.scrollTop, totalColumnsWidth = _ref6.totalColumnsWidth, totalRowsHeight = _ref6.totalRowsHeight;
                this._onScrollMemoizer({
                    callback: function callback(_ref7) {
                        var scrollLeft = _ref7.scrollLeft, scrollTop = _ref7.scrollTop;
                        var _this3$props = _this3.props, height = _this3$props.height, onScroll = _this3$props.onScroll, width = _this3$props.width;
                        onScroll({
                            clientHeight: height,
                            clientWidth: width,
                            scrollHeight: totalRowsHeight,
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            scrollWidth: totalColumnsWidth
                        });
                    },
                    indices: {
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop
                    }
                });
            }
        },
        {
            key: "_isScrolling",
            value: function _isScrolling() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                // If isScrolling is defined in props, use it to override the value in state
                // This is a performance optimization for WindowScroller + Grid
                return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
            }
        },
        {
            key: "_maybeCallOnScrollbarPresenceChange",
            value: function _maybeCallOnScrollbarPresenceChange() {
                if (this._scrollbarPresenceChanged) {
                    var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;
                    this._scrollbarPresenceChanged = false;
                    onScrollbarPresenceChange({
                        horizontal: this._horizontalScrollBarSize > 0,
                        size: this.state.instanceProps.scrollbarSize,
                        vertical: this._verticalScrollBarSize > 0
                    });
                }
            }
        },
        {
            key: "scrollToPosition",
            /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */ value: function scrollToPosition(_ref8) {
                var scrollLeft = _ref8.scrollLeft, scrollTop = _ref8.scrollTop;
                var stateUpdate = Grid._getScrollToPositionStateUpdate({
                    prevState: this.state,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                });
                if (stateUpdate) {
                    stateUpdate.needToResetStyleCache = false;
                    this.setState(stateUpdate);
                }
            }
        },
        {
            key: "_getCalculatedScrollLeft",
            value: function _getCalculatedScrollLeft() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                return Grid._getCalculatedScrollLeft(props, state);
            }
        },
        {
            key: "_updateScrollLeftForScrollToColumn",
            value: function _updateScrollLeftForScrollToColumn() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);
                if (stateUpdate) {
                    stateUpdate.needToResetStyleCache = false;
                    this.setState(stateUpdate);
                }
            }
        },
        {
            key: "_getCalculatedScrollTop",
            value: function _getCalculatedScrollTop() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                return Grid._getCalculatedScrollTop(props, state);
            }
        },
        {
            key: "_resetStyleCache",
            value: function _resetStyleCache() {
                var styleCache = this._styleCache;
                var cellCache = this._cellCache;
                var isScrollingOptOut = this.props.isScrollingOptOut; // Reset cell and style caches once scrolling stops.
                // This makes Grid simpler to use (since cells commonly change).
                // And it keeps the caches from growing too large.
                // Performance is most sensitive when a user is scrolling.
                // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
                // This keeps the cellCache to a resonable size.
                this._cellCache = {};
                this._styleCache = {}; // Copy over the visible cell styles so avoid unnecessary re-render.
                for(var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++)for(var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++){
                    var key = "".concat(rowIndex, "-").concat(columnIndex);
                    this._styleCache[key] = styleCache[key];
                    if (isScrollingOptOut) this._cellCache[key] = cellCache[key];
                }
            }
        },
        {
            key: "_updateScrollTopForScrollToRow",
            value: function _updateScrollTopForScrollToRow() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);
                if (stateUpdate) {
                    stateUpdate.needToResetStyleCache = false;
                    this.setState(stateUpdate);
                }
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                var newState = {};
                if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
                    newState.scrollLeft = 0;
                    newState.scrollTop = 0; // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
                // scrollTo{Column,Row} should override scroll{Left,Top}
                } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) Object.assign(newState, Grid._getScrollToPositionStateUpdate({
                    prevState: prevState,
                    scrollLeft: nextProps.scrollLeft,
                    scrollTop: nextProps.scrollTop
                }));
                var instanceProps = prevState.instanceProps; // Initially we should not clearStyleCache
                newState.needToResetStyleCache = false;
                if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) // Reset cache. set it to {} in render
                newState.needToResetStyleCache = true;
                instanceProps.columnSizeAndPositionManager.configure({
                    cellCount: nextProps.columnCount,
                    estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
                    cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
                });
                instanceProps.rowSizeAndPositionManager.configure({
                    cellCount: nextProps.rowCount,
                    estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
                    cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
                });
                if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
                    instanceProps.prevColumnCount = 0;
                    instanceProps.prevRowCount = 0;
                } // If scrolling is controlled outside this component, clear cache when scrolling stops
                if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) Object.assign(newState, {
                    isScrolling: false
                });
                var maybeStateA;
                var maybeStateB;
                (0, $2q55U.default)({
                    cellCount: instanceProps.prevColumnCount,
                    cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
                    computeMetadataCallback: function computeMetadataCallback() {
                        return instanceProps.columnSizeAndPositionManager.resetCell(0);
                    },
                    computeMetadataCallbackProps: nextProps,
                    nextCellsCount: nextProps.columnCount,
                    nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
                    nextScrollToIndex: nextProps.scrollToColumn,
                    scrollToIndex: instanceProps.prevScrollToColumn,
                    updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
                        maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
                    }
                });
                (0, $2q55U.default)({
                    cellCount: instanceProps.prevRowCount,
                    cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
                    computeMetadataCallback: function computeMetadataCallback() {
                        return instanceProps.rowSizeAndPositionManager.resetCell(0);
                    },
                    computeMetadataCallbackProps: nextProps,
                    nextCellsCount: nextProps.rowCount,
                    nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
                    nextScrollToIndex: nextProps.scrollToRow,
                    scrollToIndex: instanceProps.prevScrollToRow,
                    updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
                        maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
                    }
                });
                instanceProps.prevColumnCount = nextProps.columnCount;
                instanceProps.prevColumnWidth = nextProps.columnWidth;
                instanceProps.prevIsScrolling = nextProps.isScrolling === true;
                instanceProps.prevRowCount = nextProps.rowCount;
                instanceProps.prevRowHeight = nextProps.rowHeight;
                instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
                instanceProps.prevScrollToRow = nextProps.scrollToRow; // getting scrollBarSize (moved from componentWillMount)
                instanceProps.scrollbarSize = nextProps.getScrollbarSize();
                if (instanceProps.scrollbarSize === undefined) {
                    instanceProps.scrollbarSizeMeasured = false;
                    instanceProps.scrollbarSize = 0;
                } else instanceProps.scrollbarSizeMeasured = true;
                newState.instanceProps = instanceProps;
                return $f66358e916d75c07$var$_objectSpread({}, newState, {}, maybeStateA, {}, maybeStateB);
            }
        },
        {
            key: "_getEstimatedColumnSize",
            value: function _getEstimatedColumnSize(props) {
                return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
            }
        },
        {
            key: "_getEstimatedRowSize",
            value: function _getEstimatedRowSize(props) {
                return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
            }
        },
        {
            key: "_getScrollToPositionStateUpdate",
            /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */ value: function _getScrollToPositionStateUpdate(_ref9) {
                var prevState = _ref9.prevState, scrollLeft = _ref9.scrollLeft, scrollTop = _ref9.scrollTop;
                var newState = {
                    scrollPositionChangeReason: $f66358e916d75c07$var$SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                };
                if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
                    newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? (0, $93Bew.SCROLL_DIRECTION_FORWARD) : (0, $93Bew.SCROLL_DIRECTION_BACKWARD);
                    newState.scrollLeft = scrollLeft;
                }
                if (typeof scrollTop === 'number' && scrollTop >= 0) {
                    newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? (0, $93Bew.SCROLL_DIRECTION_FORWARD) : (0, $93Bew.SCROLL_DIRECTION_BACKWARD);
                    newState.scrollTop = scrollTop;
                }
                if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) return newState;
                return {};
            }
        },
        {
            key: "_wrapSizeGetter",
            value: function _wrapSizeGetter(value) {
                return typeof value === 'function' ? value : function() {
                    return value;
                };
            }
        },
        {
            key: "_getCalculatedScrollLeft",
            value: function _getCalculatedScrollLeft(nextProps, prevState) {
                var columnCount = nextProps.columnCount, height = nextProps.height, scrollToAlignment = nextProps.scrollToAlignment, scrollToColumn = nextProps.scrollToColumn, width = nextProps.width;
                var scrollLeft = prevState.scrollLeft, instanceProps = prevState.instanceProps;
                if (columnCount > 0) {
                    var finalColumn = columnCount - 1;
                    var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
                    var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
                    var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
                    return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
                        align: scrollToAlignment,
                        containerSize: width - scrollBarSize,
                        currentOffset: scrollLeft,
                        targetIndex: targetIndex
                    });
                }
                return 0;
            }
        },
        {
            key: "_getScrollLeftForScrollToColumnStateUpdate",
            value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
                var scrollLeft = prevState.scrollLeft;
                var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);
                if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) return Grid._getScrollToPositionStateUpdate({
                    prevState: prevState,
                    scrollLeft: calculatedScrollLeft,
                    scrollTop: -1
                });
                return {};
            }
        },
        {
            key: "_getCalculatedScrollTop",
            value: function _getCalculatedScrollTop(nextProps, prevState) {
                var height = nextProps.height, rowCount = nextProps.rowCount, scrollToAlignment = nextProps.scrollToAlignment, scrollToRow = nextProps.scrollToRow, width = nextProps.width;
                var scrollTop = prevState.scrollTop, instanceProps = prevState.instanceProps;
                if (rowCount > 0) {
                    var finalRow = rowCount - 1;
                    var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
                    var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                    var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
                    return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
                        align: scrollToAlignment,
                        containerSize: height - scrollBarSize,
                        currentOffset: scrollTop,
                        targetIndex: targetIndex
                    });
                }
                return 0;
            }
        },
        {
            key: "_getScrollTopForScrollToRowStateUpdate",
            value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
                var scrollTop = prevState.scrollTop;
                var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);
                if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) return Grid._getScrollToPositionStateUpdate({
                    prevState: prevState,
                    scrollLeft: -1,
                    scrollTop: calculatedScrollTop
                });
                return {};
            }
        }
    ]);
    return Grid;
}($d4J5n.PureComponent), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($f66358e916d75c07$var$_class, "propTypes", null), $f66358e916d75c07$var$_temp);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($f66358e916d75c07$var$Grid, "defaultProps", {
    'aria-label': 'grid',
    'aria-readonly': true,
    autoContainerWidth: false,
    autoHeight: false,
    autoWidth: false,
    cellRangeRenderer: (0, $iU4qn.default),
    containerRole: 'rowgroup',
    containerStyle: {},
    estimatedColumnSize: 100,
    estimatedRowSize: 30,
    getScrollbarSize: (0, $4YdJF.default),
    noContentRenderer: $f66358e916d75c07$var$renderNull,
    onScroll: function onScroll() {},
    onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
    onSectionRendered: function onSectionRendered() {},
    overscanColumnCount: 0,
    overscanIndicesGetter: (0, $93Bew.default),
    overscanRowCount: 10,
    role: 'grid',
    scrollingResetTimeInterval: $f66358e916d75c07$export$c51e03d5b92ea76f,
    scrollToAlignment: 'auto',
    scrollToColumn: -1,
    scrollToRow: -1,
    style: {},
    tabIndex: 0,
    isScrollingOptOut: false
});
(0, $32PuH.polyfill)($f66358e916d75c07$var$Grid);
var $f66358e916d75c07$export$2e2bcd8739ae039 = $f66358e916d75c07$var$Grid;

});
parcelRegister("e5Cx7", function(module, exports) {
function $a41f6c2ef6e36772$var$_extends() {
    module.exports = $a41f6c2ef6e36772$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return $a41f6c2ef6e36772$var$_extends.apply(this, arguments);
}
module.exports = $a41f6c2ef6e36772$var$_extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRegister("2q55U", function(module, exports) {

$parcel$export(module.exports, "default", () => $1c31f618b5efebe6$export$2e2bcd8739ae039);
/**
 * Helper method that determines when to recalculate row or column metadata.
 */ function $1c31f618b5efebe6$export$2e2bcd8739ae039(_ref) {
    var cellCount = _ref.cellCount, cellSize = _ref.cellSize, computeMetadataCallback = _ref.computeMetadataCallback, computeMetadataCallbackProps = _ref.computeMetadataCallbackProps, nextCellsCount = _ref.nextCellsCount, nextCellSize = _ref.nextCellSize, nextScrollToIndex = _ref.nextScrollToIndex, scrollToIndex = _ref.scrollToIndex, updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;
    // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
    // In that event users should use the manual recompute methods to inform of changes.
    if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
        computeMetadataCallback(computeMetadataCallbackProps); // Updated cell metadata may have hidden the previous scrolled-to item.
        // In this case we should also update the scrollTop to ensure it stays visible.
        if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) updateScrollOffsetForScrollToIndex();
    }
}

});

parcelRegister("7lKYN", function(module, exports) {

$parcel$export(module.exports, "default", () => $559eefbddf256005$export$2e2bcd8739ae039);

var $6g3Xx = parcelRequire("6g3Xx");

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $6nVSY = parcelRequire("6nVSY");

var $6xjwV = parcelRequire("6xjwV");

var $6BxKY = parcelRequire("6BxKY");
parcelRequire("j3R7B");
/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */ var $559eefbddf256005$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    function ScalingCellSizeAndPositionManager(_ref) {
        var _ref$maxScrollSize = _ref.maxScrollSize, maxScrollSize = _ref$maxScrollSize === void 0 ? (0, $6BxKY.getMaxElementSize)() : _ref$maxScrollSize, params = (0, (/*@__PURE__*/$parcel$interopDefault($6g3Xx)))(_ref, [
            "maxScrollSize"
        ]);
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, ScalingCellSizeAndPositionManager);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_cellSizeAndPositionManager", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_maxScrollSize", void 0);
        // Favor composition over inheritance to simplify IE10 support
        this._cellSizeAndPositionManager = new (0, $6xjwV.default)(params);
        this._maxScrollSize = maxScrollSize;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(ScalingCellSizeAndPositionManager, [
        {
            key: "areOffsetsAdjusted",
            value: function areOffsetsAdjusted() {
                return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
            }
        },
        {
            key: "configure",
            value: function configure(params) {
                this._cellSizeAndPositionManager.configure(params);
            }
        },
        {
            key: "getCellCount",
            value: function getCellCount() {
                return this._cellSizeAndPositionManager.getCellCount();
            }
        },
        {
            key: "getEstimatedCellSize",
            value: function getEstimatedCellSize() {
                return this._cellSizeAndPositionManager.getEstimatedCellSize();
            }
        },
        {
            key: "getLastMeasuredIndex",
            value: function getLastMeasuredIndex() {
                return this._cellSizeAndPositionManager.getLastMeasuredIndex();
            }
        },
        {
            key: "getOffsetAdjustment",
            value: function getOffsetAdjustment(_ref2) {
                var containerSize = _ref2.containerSize, offset = _ref2.offset;
                var totalSize = this._cellSizeAndPositionManager.getTotalSize();
                var safeTotalSize = this.getTotalSize();
                var offsetPercentage = this._getOffsetPercentage({
                    containerSize: containerSize,
                    offset: offset,
                    totalSize: safeTotalSize
                });
                return Math.round(offsetPercentage * (safeTotalSize - totalSize));
            }
        },
        {
            key: "getSizeAndPositionOfCell",
            value: function getSizeAndPositionOfCell(index) {
                return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
            }
        },
        {
            key: "getSizeAndPositionOfLastMeasuredCell",
            value: function getSizeAndPositionOfLastMeasuredCell() {
                return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
            }
        },
        {
            key: "getTotalSize",
            value: function getTotalSize() {
                return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
            }
        },
        {
            key: "getUpdatedOffsetForIndex",
            value: function getUpdatedOffsetForIndex(_ref3) {
                var _ref3$align = _ref3.align, align = _ref3$align === void 0 ? 'auto' : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex;
                currentOffset = this._safeOffsetToOffset({
                    containerSize: containerSize,
                    offset: currentOffset
                });
                var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
                    align: align,
                    containerSize: containerSize,
                    currentOffset: currentOffset,
                    targetIndex: targetIndex
                });
                return this._offsetToSafeOffset({
                    containerSize: containerSize,
                    offset: offset
                });
            }
        },
        {
            key: "getVisibleCellRange",
            value: function getVisibleCellRange(_ref4) {
                var containerSize = _ref4.containerSize, offset = _ref4.offset;
                offset = this._safeOffsetToOffset({
                    containerSize: containerSize,
                    offset: offset
                });
                return this._cellSizeAndPositionManager.getVisibleCellRange({
                    containerSize: containerSize,
                    offset: offset
                });
            }
        },
        {
            key: "resetCell",
            value: function resetCell(index) {
                this._cellSizeAndPositionManager.resetCell(index);
            }
        },
        {
            key: "_getOffsetPercentage",
            value: function _getOffsetPercentage(_ref5) {
                var containerSize = _ref5.containerSize, offset = _ref5.offset, totalSize = _ref5.totalSize;
                return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
            }
        },
        {
            key: "_offsetToSafeOffset",
            value: function _offsetToSafeOffset(_ref6) {
                var containerSize = _ref6.containerSize, offset = _ref6.offset;
                var totalSize = this._cellSizeAndPositionManager.getTotalSize();
                var safeTotalSize = this.getTotalSize();
                if (totalSize === safeTotalSize) return offset;
                else {
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: totalSize
                    });
                    return Math.round(offsetPercentage * (safeTotalSize - containerSize));
                }
            }
        },
        {
            key: "_safeOffsetToOffset",
            value: function _safeOffsetToOffset(_ref7) {
                var containerSize = _ref7.containerSize, offset = _ref7.offset;
                var totalSize = this._cellSizeAndPositionManager.getTotalSize();
                var safeTotalSize = this.getTotalSize();
                if (totalSize === safeTotalSize) return offset;
                else {
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: safeTotalSize
                    });
                    return Math.round(offsetPercentage * (totalSize - containerSize));
                }
            }
        }
    ]);
    return ScalingCellSizeAndPositionManager;
}();

});
parcelRegister("6g3Xx", function(module, exports) {

var $hT3zX = parcelRequire("hT3zX");
function $48e74eeab74aa55d$var$_objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = $hT3zX(source, excluded);
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
module.exports = $48e74eeab74aa55d$var$_objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

});
parcelRegister("hT3zX", function(module, exports) {
function $d05a596b225962a3$var$_objectWithoutPropertiesLoose(source, excluded) {
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
module.exports = $d05a596b225962a3$var$_objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

});


parcelRegister("6xjwV", function(module, exports) {

$parcel$export(module.exports, "default", () => $4c24f96b4914f0df$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $6nVSY = parcelRequire("6nVSY");
parcelRequire("j3R7B");
/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */ var $4c24f96b4914f0df$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    // Cache of size and position data for cells, mapped by cell index.
    // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
    // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
    // Used in deferred mode to track which cells have been queued for measurement.
    function CellSizeAndPositionManager(_ref) {
        var cellCount = _ref.cellCount, cellSizeGetter = _ref.cellSizeGetter, estimatedCellSize = _ref.estimatedCellSize;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, CellSizeAndPositionManager);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_cellSizeAndPositionData", {});
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_lastMeasuredIndex", -1);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_lastBatchedIndex", -1);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_cellCount", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_cellSizeGetter", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_estimatedCellSize", void 0);
        this._cellSizeGetter = cellSizeGetter;
        this._cellCount = cellCount;
        this._estimatedCellSize = estimatedCellSize;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(CellSizeAndPositionManager, [
        {
            key: "areOffsetsAdjusted",
            value: function areOffsetsAdjusted() {
                return false;
            }
        },
        {
            key: "configure",
            value: function configure(_ref2) {
                var cellCount = _ref2.cellCount, estimatedCellSize = _ref2.estimatedCellSize, cellSizeGetter = _ref2.cellSizeGetter;
                this._cellCount = cellCount;
                this._estimatedCellSize = estimatedCellSize;
                this._cellSizeGetter = cellSizeGetter;
            }
        },
        {
            key: "getCellCount",
            value: function getCellCount() {
                return this._cellCount;
            }
        },
        {
            key: "getEstimatedCellSize",
            value: function getEstimatedCellSize() {
                return this._estimatedCellSize;
            }
        },
        {
            key: "getLastMeasuredIndex",
            value: function getLastMeasuredIndex() {
                return this._lastMeasuredIndex;
            }
        },
        {
            key: "getOffsetAdjustment",
            value: function getOffsetAdjustment() {
                return 0;
            }
        },
        {
            key: "getSizeAndPositionOfCell",
            value: function getSizeAndPositionOfCell(index) {
                if (index < 0 || index >= this._cellCount) throw Error("Requested index ".concat(index, " is outside of range 0..").concat(this._cellCount));
                if (index > this._lastMeasuredIndex) {
                    var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
                    var offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
                    for(var i = this._lastMeasuredIndex + 1; i <= index; i++){
                        var size = this._cellSizeGetter({
                            index: i
                        }); // undefined or NaN probably means a logic error in the size getter.
                        // null means we're using CellMeasurer and haven't yet measured a given index.
                        if (size === undefined || isNaN(size)) throw Error("Invalid size returned for cell ".concat(i, " of value ").concat(size));
                        else if (size === null) {
                            this._cellSizeAndPositionData[i] = {
                                offset: offset,
                                size: 0
                            };
                            this._lastBatchedIndex = index;
                        } else {
                            this._cellSizeAndPositionData[i] = {
                                offset: offset,
                                size: size
                            };
                            offset += size;
                            this._lastMeasuredIndex = index;
                        }
                    }
                }
                return this._cellSizeAndPositionData[index];
            }
        },
        {
            key: "getSizeAndPositionOfLastMeasuredCell",
            value: function getSizeAndPositionOfLastMeasuredCell() {
                return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
                    offset: 0,
                    size: 0
                };
            }
        },
        {
            key: "getTotalSize",
            value: function getTotalSize() {
                var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
                var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
                var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
                var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
                return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
            }
        },
        {
            key: "getUpdatedOffsetForIndex",
            value: function getUpdatedOffsetForIndex(_ref3) {
                var _ref3$align = _ref3.align, align = _ref3$align === void 0 ? 'auto' : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex;
                if (containerSize <= 0) return 0;
                var datum = this.getSizeAndPositionOfCell(targetIndex);
                var maxOffset = datum.offset;
                var minOffset = maxOffset - containerSize + datum.size;
                var idealOffset;
                switch(align){
                    case 'start':
                        idealOffset = maxOffset;
                        break;
                    case 'end':
                        idealOffset = minOffset;
                        break;
                    case 'center':
                        idealOffset = maxOffset - (containerSize - datum.size) / 2;
                        break;
                    default:
                        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
                        break;
                }
                var totalSize = this.getTotalSize();
                return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
            }
        },
        {
            key: "getVisibleCellRange",
            value: function getVisibleCellRange(params) {
                var containerSize = params.containerSize, offset = params.offset;
                var totalSize = this.getTotalSize();
                if (totalSize === 0) return {};
                var maxOffset = offset + containerSize;
                var start = this._findNearestCell(offset);
                var datum = this.getSizeAndPositionOfCell(start);
                offset = datum.offset + datum.size;
                var stop = start;
                while(offset < maxOffset && stop < this._cellCount - 1){
                    stop++;
                    offset += this.getSizeAndPositionOfCell(stop).size;
                }
                return {
                    start: start,
                    stop: stop
                };
            }
        },
        {
            key: "resetCell",
            value: function resetCell(index) {
                this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
            }
        },
        {
            key: "_binarySearch",
            value: function _binarySearch(high, low, offset) {
                while(low <= high){
                    var middle = low + Math.floor((high - low) / 2);
                    var currentOffset = this.getSizeAndPositionOfCell(middle).offset;
                    if (currentOffset === offset) return middle;
                    else if (currentOffset < offset) low = middle + 1;
                    else if (currentOffset > offset) high = middle - 1;
                }
                if (low > 0) return low - 1;
                else return 0;
            }
        },
        {
            key: "_exponentialSearch",
            value: function _exponentialSearch(index, offset) {
                var interval = 1;
                while(index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset){
                    index += interval;
                    interval *= 2;
                }
                return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
            }
        },
        {
            key: "_findNearestCell",
            value: function _findNearestCell(offset) {
                if (isNaN(offset)) throw Error("Invalid offset ".concat(offset, " specified"));
                 // Our search algorithms find the nearest match at or below the specified offset.
                // So make sure the offset is at least 0 or no match will be found.
                offset = Math.max(0, offset);
                var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
                var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);
                if (lastMeasuredCellSizeAndPosition.offset >= offset) // If we've already measured cells within this range just use a binary search as it's faster.
                return this._binarySearch(lastMeasuredIndex, 0, offset);
                else // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
                // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
                // The overall complexity for this approach is O(log n).
                return this._exponentialSearch(lastMeasuredIndex, offset);
            }
        }
    ]);
    return CellSizeAndPositionManager;
}();

});
parcelRegister("j3R7B", function(module, exports) {
parcelRequire("d4J5n");
parcelRequire("7lKYN");

var $de0780f4da19a93d$export$c6672e3011d1ba14 = null;
var $de0780f4da19a93d$export$629e389fcb95c4cb = null;
var $de0780f4da19a93d$export$dfc898c43d6b42e2 = null;
var $de0780f4da19a93d$export$f43ca98f92747835 = null;
var $de0780f4da19a93d$export$4b96dfc4e581b95e = null;
var $de0780f4da19a93d$export$e59512b25f53b1de = null;
var $de0780f4da19a93d$export$2eac0c8356154c53 = null;
var $de0780f4da19a93d$export$6032bf9d66579eb8 = null;
var $de0780f4da19a93d$export$881fa5755aa5a532 = null;
var $de0780f4da19a93d$export$fe7633a03acdcfd1 = null;
var $de0780f4da19a93d$export$bf6962873c294da8 = null;
var $de0780f4da19a93d$export$52184174be905dd4 = null;
var $de0780f4da19a93d$export$9534019005791a3c = null;
var $de0780f4da19a93d$export$7cb061b68d6f54bb = null;
var $de0780f4da19a93d$export$b27813263ea8fb17 = null;
var $de0780f4da19a93d$export$6fd1d8de91170d0e = null;
var $de0780f4da19a93d$export$1f814ddae3c3a0a1 = null;
var $de0780f4da19a93d$export$33ac8a0817160c66 = null;

});


parcelRegister("6BxKY", function(module, exports) {

$parcel$export(module.exports, "getMaxElementSize", () => $4cf06228f54b1d3f$export$d0dd9fc28a7917e7);
var $4cf06228f54b1d3f$var$DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var $4cf06228f54b1d3f$var$CHROME_MAX_ELEMENT_SIZE = 1.67771e7;
var $4cf06228f54b1d3f$var$isBrowser = function isBrowser() {
    return typeof window !== 'undefined';
};
var $4cf06228f54b1d3f$var$isChrome = function isChrome() {
    return !!window.chrome;
};
var $4cf06228f54b1d3f$export$d0dd9fc28a7917e7 = function getMaxElementSize() {
    if ($4cf06228f54b1d3f$var$isBrowser()) {
        if ($4cf06228f54b1d3f$var$isChrome()) return $4cf06228f54b1d3f$var$CHROME_MAX_ELEMENT_SIZE;
    }
    return $4cf06228f54b1d3f$var$DEFAULT_MAX_ELEMENT_SIZE;
};

});


parcelRegister("2MlNe", function(module, exports) {

$parcel$export(module.exports, "default", () => $2060f8194e5881ef$export$2e2bcd8739ae039);
/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */ function $2060f8194e5881ef$export$2e2bcd8739ae039() {
    var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var cachedIndices = {};
    return function(_ref) {
        var callback = _ref.callback, indices = _ref.indices;
        var keys = Object.keys(indices);
        var allInitialized = !requireAllKeys || keys.every(function(key) {
            var value = indices[key];
            return Array.isArray(value) ? value.length > 0 : value >= 0;
        });
        var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function(key) {
            var cachedValue = cachedIndices[key];
            var value = indices[key];
            return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
        });
        cachedIndices = indices;
        if (allInitialized && indexChanged) callback(indices);
    };
}

});

parcelRegister("93Bew", function(module, exports) {

$parcel$export(module.exports, "SCROLL_DIRECTION_BACKWARD", () => $6981469664768b56$export$4a9c12fc9cd91d00);
$parcel$export(module.exports, "SCROLL_DIRECTION_FORWARD", () => $6981469664768b56$export$f30397fa35598134);
$parcel$export(module.exports, "default", () => $6981469664768b56$export$2e2bcd8739ae039);
parcelRequire("j3R7B");
var $6981469664768b56$export$4a9c12fc9cd91d00 = -1;
var $6981469664768b56$export$f30397fa35598134 = 1;
var $6981469664768b56$export$bd8d94980b275a2d = 'horizontal';
var $6981469664768b56$export$11bc73ef6d36df46 = 'vertical';
function $6981469664768b56$export$2e2bcd8739ae039(_ref) {
    var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, scrollDirection = _ref.scrollDirection, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
    if (scrollDirection === $6981469664768b56$export$f30397fa35598134) return {
        overscanStartIndex: Math.max(0, startIndex),
        overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
    else return {
        overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
        overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
}

});

parcelRegister("dJjFm", function(module, exports) {

$parcel$export(module.exports, "default", () => $9feebb9c33188618$export$2e2bcd8739ae039);
parcelRequire("7lKYN");
parcelRequire("j3R7B");
function $9feebb9c33188618$export$2e2bcd8739ae039(_ref) {
    var cellSize = _ref.cellSize, cellSizeAndPositionManager = _ref.cellSizeAndPositionManager, previousCellsCount = _ref.previousCellsCount, previousCellSize = _ref.previousCellSize, previousScrollToAlignment = _ref.previousScrollToAlignment, previousScrollToIndex = _ref.previousScrollToIndex, previousSize = _ref.previousSize, scrollOffset = _ref.scrollOffset, scrollToAlignment = _ref.scrollToAlignment, scrollToIndex = _ref.scrollToIndex, size = _ref.size, sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero, updateScrollIndexCallback = _ref.updateScrollIndexCallback;
    var cellCount = cellSizeAndPositionManager.getCellCount();
    var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
    var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize; // If we have a new scroll target OR if height/row-height has changed,
    // We should ensure that the scroll target is visible.
    if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) updateScrollIndexCallback(scrollToIndex); // If we don't have a selected item but list size or number of children have decreased,
    else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    {
        if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) updateScrollIndexCallback(cellCount - 1);
    }
}

});

parcelRegister("iU4qn", function(module, exports) {

$parcel$export(module.exports, "default", () => $dc30e38e46841c79$export$2e2bcd8739ae039);
/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */ parcelRequire("j3R7B");
function $dc30e38e46841c79$export$2e2bcd8739ae039(_ref) {
    var cellCache = _ref.cellCache, cellRenderer = _ref.cellRenderer, columnSizeAndPositionManager = _ref.columnSizeAndPositionManager, columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, deferredMeasurementCache = _ref.deferredMeasurementCache, horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment, isScrolling = _ref.isScrolling, isScrollingOptOut = _ref.isScrollingOptOut, parent = _ref.parent, rowSizeAndPositionManager = _ref.rowSizeAndPositionManager, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex, styleCache = _ref.styleCache, verticalOffsetAdjustment = _ref.verticalOffsetAdjustment, visibleColumnIndices = _ref.visibleColumnIndices, visibleRowIndices = _ref.visibleRowIndices;
    var renderedCells = []; // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
    // User cannot scroll beyond these size limitations.
    // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
    // We should never cache styles for compressed offsets though as this can lead to bugs.
    // See issue #576 for more.
    var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();
    var canCacheStyle = !isScrolling && !areOffsetsAdjusted;
    for(var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++){
        var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);
        for(var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++){
            var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
            var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
            var key = "".concat(rowIndex, "-").concat(columnIndex);
            var style = void 0; // Cache style objects so shallow-compare doesn't re-render unnecessarily.
            if (canCacheStyle && styleCache[key]) style = styleCache[key];
            else // In deferred mode, cells will be initially rendered before we know their size.
            // Don't interfere with CellMeasurer's measurements by setting an invalid size.
            if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) // Position not-yet-measured cells at top/left 0,0,
            // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
            // Positioning them further to the right/bottom influences their measured size.
            style = {
                height: 'auto',
                left: 0,
                position: 'absolute',
                top: 0,
                width: 'auto'
            };
            else {
                style = {
                    height: rowDatum.size,
                    left: columnDatum.offset + horizontalOffsetAdjustment,
                    position: 'absolute',
                    top: rowDatum.offset + verticalOffsetAdjustment,
                    width: columnDatum.size
                };
                styleCache[key] = style;
            }
            var cellRendererParams = {
                columnIndex: columnIndex,
                isScrolling: isScrolling,
                isVisible: isVisible,
                key: key,
                parent: parent,
                rowIndex: rowIndex,
                style: style
            };
            var renderedCell = void 0; // Avoid re-creating cells while scrolling.
            // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
            // If a scroll is in progress- cache and reuse cells.
            // This cache will be thrown away once scrolling completes.
            // However if we are scaling scroll positions and sizes, we should also avoid caching.
            // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
            // For more info refer to issue #395
            //
            // If isScrollingOptOut is specified, we always cache cells.
            // For more info refer to issue #1028
            if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
                if (!cellCache[key]) cellCache[key] = cellRenderer(cellRendererParams);
                renderedCell = cellCache[key]; // If the user is no longer scrolling, don't cache cells.
            // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
            } else renderedCell = cellRenderer(cellRendererParams);
            if (renderedCell == null || renderedCell === false) continue;
            renderedCells.push(renderedCell);
        }
    }
    return renderedCells;
}
function $dc30e38e46841c79$var$warnAboutMissingStyle(parent, renderedCell) {}

});

parcelRegister("4YdJF", function(module, exports) {

$parcel$export(module.exports, "default", () => $39e76b9ff72b018f$export$2e2bcd8739ae039);

var $8dpbL = parcelRequire("8dpbL");
var $39e76b9ff72b018f$var$size;
function $39e76b9ff72b018f$export$2e2bcd8739ae039(recalc) {
    if (!$39e76b9ff72b018f$var$size && $39e76b9ff72b018f$var$size !== 0 || recalc) {
        if (0, $8dpbL.default) {
            var scrollDiv = document.createElement('div');
            scrollDiv.style.position = 'absolute';
            scrollDiv.style.top = '-9999px';
            scrollDiv.style.width = '50px';
            scrollDiv.style.height = '50px';
            scrollDiv.style.overflow = 'scroll';
            document.body.appendChild(scrollDiv);
            $39e76b9ff72b018f$var$size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
        }
    }
    return $39e76b9ff72b018f$var$size;
}

});
parcelRegister("8dpbL", function(module, exports) {

$parcel$export(module.exports, "default", () => $5fb313936c26ea22$export$2e2bcd8739ae039);
var $5fb313936c26ea22$export$2e2bcd8739ae039 = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

});


parcelRegister("j2sdi", function(module, exports) {

$parcel$export(module.exports, "cancelAnimationTimeout", () => $ddc416da791d71d5$export$3b976196c7d0d7a6);
$parcel$export(module.exports, "requestAnimationTimeout", () => $ddc416da791d71d5$export$62c6fa81f9943047);

var $1YjCs = parcelRequire("1YjCs");

var $ddc416da791d71d5$export$4bc1eeb5a78bb6df = null;
var $ddc416da791d71d5$export$3b976196c7d0d7a6 = function cancelAnimationTimeout(frame) {
    return (0, $1YjCs.caf)(frame.id);
};
var $ddc416da791d71d5$export$62c6fa81f9943047 = function requestAnimationTimeout(callback, delay) {
    var start; // wait for end of processing current event handler, because event handler may be long
    Promise.resolve().then(function() {
        start = Date.now();
    });
    var timeout = function timeout() {
        if (Date.now() - start >= delay) callback.call();
        else frame.id = (0, $1YjCs.raf)(timeout);
    };
    var frame = {
        id: (0, $1YjCs.raf)(timeout)
    };
    return frame;
};

});
parcelRegister("1YjCs", function(module, exports) {

$parcel$export(module.exports, "raf", () => $16fa9d045e5d5ed4$export$27f233d61a9e2fa4);
$parcel$export(module.exports, "caf", () => $16fa9d045e5d5ed4$export$75aab3dbee8deceb);
// Properly handle server-side rendering.
var $16fa9d045e5d5ed4$var$win;
if (typeof window !== 'undefined') $16fa9d045e5d5ed4$var$win = window;
else if (typeof self !== 'undefined') $16fa9d045e5d5ed4$var$win = self;
else $16fa9d045e5d5ed4$var$win = {};
 // requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
var $16fa9d045e5d5ed4$var$request = $16fa9d045e5d5ed4$var$win.requestAnimationFrame || $16fa9d045e5d5ed4$var$win.webkitRequestAnimationFrame || $16fa9d045e5d5ed4$var$win.mozRequestAnimationFrame || $16fa9d045e5d5ed4$var$win.oRequestAnimationFrame || $16fa9d045e5d5ed4$var$win.msRequestAnimationFrame || function(callback) {
    return $16fa9d045e5d5ed4$var$win.setTimeout(callback, 1000 / 60);
};
var $16fa9d045e5d5ed4$var$cancel = $16fa9d045e5d5ed4$var$win.cancelAnimationFrame || $16fa9d045e5d5ed4$var$win.webkitCancelAnimationFrame || $16fa9d045e5d5ed4$var$win.mozCancelAnimationFrame || $16fa9d045e5d5ed4$var$win.oCancelAnimationFrame || $16fa9d045e5d5ed4$var$win.msCancelAnimationFrame || function(id) {
    $16fa9d045e5d5ed4$var$win.clearTimeout(id);
};
var $16fa9d045e5d5ed4$export$27f233d61a9e2fa4 = $16fa9d045e5d5ed4$var$request;
var $16fa9d045e5d5ed4$export$75aab3dbee8deceb = $16fa9d045e5d5ed4$var$cancel;

});



parcelRegister("fjyHm", function(module, exports) {

$parcel$export(module.exports, "default", () => $b2638bc11343daf5$export$2e2bcd8739ae039);
parcelRequire("j3R7B");
var $b2638bc11343daf5$export$4a9c12fc9cd91d00 = -1;
var $b2638bc11343daf5$export$f30397fa35598134 = 1;
var $b2638bc11343daf5$export$bd8d94980b275a2d = 'horizontal';
var $b2638bc11343daf5$export$11bc73ef6d36df46 = 'vertical';
function $b2638bc11343daf5$export$2e2bcd8739ae039(_ref) {
    var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, scrollDirection = _ref.scrollDirection, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
    // Make sure we render at least 1 cell extra before and after (except near boundaries)
    // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
    // For more info see issues #625
    overscanCellsCount = Math.max(1, overscanCellsCount);
    if (scrollDirection === $b2638bc11343daf5$export$f30397fa35598134) return {
        overscanStartIndex: Math.max(0, startIndex - 1),
        overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
    else return {
        overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
        overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
}

});


parcelRegister("9xosw", function(module, exports) {

var $6f1a2b2dfc94e04a$export$e470e6595e6bd76b = null;

});



parcelRegister("gUMHy", function(module, exports) {

$parcel$export(module.exports, "AutoSizer", () => (parcelRequire("2OVZ4")).default);

var $2OVZ4 = parcelRequire("2OVZ4");

});
parcelRegister("2OVZ4", function(module, exports) {

$parcel$export(module.exports, "default", () => $20dd3aacb69e4ac0$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");

var $d4J5n = parcelRequire("d4J5n");

var $jY1Bw = parcelRequire("jY1Bw");

var $20dd3aacb69e4ac0$var$_class, $20dd3aacb69e4ac0$var$_temp;
function $20dd3aacb69e4ac0$var$ownKeys(object, enumerableOnly) {
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
function $20dd3aacb69e4ac0$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $20dd3aacb69e4ac0$var$ownKeys(source, true).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $20dd3aacb69e4ac0$var$ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var $20dd3aacb69e4ac0$export$2e2bcd8739ae039 = ($20dd3aacb69e4ac0$var$_temp = $20dd3aacb69e4ac0$var$_class = /*#__PURE__*/ function(_React$Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(AutoSizer, _React$Component);
    function AutoSizer() {
        var _getPrototypeOf2;
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, AutoSizer);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (_getPrototypeOf2 = (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(AutoSizer)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "state", {
            height: _this.props.defaultHeight || 0,
            width: _this.props.defaultWidth || 0
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_parentNode", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_autoSizer", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_window", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_detectElementResize", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onResize", function() {
            var _this$props = _this.props, disableHeight = _this$props.disableHeight, disableWidth = _this$props.disableWidth, onResize = _this$props.onResize;
            if (_this._parentNode) {
                // Guard against AutoSizer component being removed from the DOM immediately after being added.
                // This can result in invalid style values which can result in NaN values if we don't handle them.
                // See issue #150 for more context.
                var height = _this._parentNode.offsetHeight || 0;
                var width = _this._parentNode.offsetWidth || 0;
                var win = _this._window || window;
                var style = win.getComputedStyle(_this._parentNode) || {};
                var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
                var paddingRight = parseInt(style.paddingRight, 10) || 0;
                var paddingTop = parseInt(style.paddingTop, 10) || 0;
                var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
                var newHeight = height - paddingTop - paddingBottom;
                var newWidth = width - paddingLeft - paddingRight;
                if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
                    _this.setState({
                        height: height - paddingTop - paddingBottom,
                        width: width - paddingLeft - paddingRight
                    });
                    onResize({
                        height: height,
                        width: width
                    });
                }
            }
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_setRef", function(autoSizer) {
            _this._autoSizer = autoSizer;
        });
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(AutoSizer, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var nonce = this.props.nonce;
                if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
                    // Delay access of parentNode until mount.
                    // This handles edge-cases where the component has already been unmounted before its ref has been set,
                    // As well as libraries like react-lite which have a slightly different lifecycle.
                    this._parentNode = this._autoSizer.parentNode;
                    this._window = this._autoSizer.parentNode.ownerDocument.defaultView; // Defer requiring resize handler in order to support server-side rendering.
                    // See issue #41
                    this._detectElementResize = (0, $jY1Bw.default)(nonce, this._window);
                    this._detectElementResize.addResizeListener(this._parentNode, this._onResize);
                    this._onResize();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this._detectElementResize && this._parentNode) this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, children = _this$props2.children, className = _this$props2.className, disableHeight = _this$props2.disableHeight, disableWidth = _this$props2.disableWidth, style = _this$props2.style;
                var _this$state = this.state, height = _this$state.height, width = _this$state.width; // Outer div should not force width/height since that may prevent containers from shrinking.
                // Inner component should overflow and use calculated width/height.
                // See issue #68 for more information.
                var outerStyle = {
                    overflow: 'visible'
                };
                var childParams = {};
                if (!disableHeight) {
                    outerStyle.height = 0;
                    childParams.height = height;
                }
                if (!disableWidth) {
                    outerStyle.width = 0;
                    childParams.width = width;
                }
                /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */ return $d4J5n.createElement("div", {
                    className: className,
                    ref: this._setRef,
                    style: $20dd3aacb69e4ac0$var$_objectSpread({}, outerStyle, {}, style)
                }, children(childParams));
            }
        }
    ]);
    return AutoSizer;
}($d4J5n.Component), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($20dd3aacb69e4ac0$var$_class, "propTypes", null), $20dd3aacb69e4ac0$var$_temp);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($20dd3aacb69e4ac0$export$2e2bcd8739ae039, "defaultProps", {
    onResize: function onResize() {},
    disableHeight: false,
    disableWidth: false,
    style: {}
});

});
parcelRegister("jY1Bw", function(module, exports) {

$parcel$export(module.exports, "default", () => $e894dd7dbc073968$export$2e2bcd8739ae039);
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 * 5) Added support for injecting custom window object
 **/ function $e894dd7dbc073968$export$2e2bcd8739ae039(nonce, hostWindow) {
    // Check `document` and `window` in case of server-side rendering
    var _window;
    if (typeof hostWindow !== 'undefined') _window = hostWindow;
    else if (typeof window !== 'undefined') _window = window;
    else if (typeof self !== 'undefined') _window = self;
    else _window = $parcel$global;
    var attachEvent = typeof _window.document !== 'undefined' && _window.document.attachEvent;
    if (!attachEvent) {
        var requestFrame = function() {
            var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function(fn) {
                return _window.setTimeout(fn, 20);
            };
            return function(fn) {
                return raf(fn);
            };
        }();
        var cancelFrame = function() {
            var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
            return function(id) {
                return cancel(id);
            };
        }();
        var resetTriggers = function resetTriggers(element) {
            var triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
            contract.scrollLeft = contract.scrollWidth;
            contract.scrollTop = contract.scrollHeight;
            expandChild.style.width = expand.offsetWidth + 1 + 'px';
            expandChild.style.height = expand.offsetHeight + 1 + 'px';
            expand.scrollLeft = expand.scrollWidth;
            expand.scrollTop = expand.scrollHeight;
        };
        var checkTriggers = function checkTriggers(element) {
            return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
        };
        var scrollListener = function scrollListener(e) {
            // Don't measure (which forces) reflow for scrolls that happen inside of children!
            if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) return;
            var element = this;
            resetTriggers(this);
            if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
            this.__resizeRAF__ = requestFrame(function() {
                if (checkTriggers(element)) {
                    element.__resizeLast__.width = element.offsetWidth;
                    element.__resizeLast__.height = element.offsetHeight;
                    element.__resizeListeners__.forEach(function(fn) {
                        fn.call(element, e);
                    });
                }
            });
        };
        /* Detect CSS Animations support to detect element display/re-attach */ var animation = false, keyframeprefix = '', animationstartevent = 'animationstart', domPrefixes = 'Webkit Moz O ms'.split(' '), startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '), pfx = '';
        var elm = _window.document.createElement('fakeelement');
        if (elm.style.animationName !== undefined) animation = true;
        if (animation === false) {
            for(var i = 0; i < domPrefixes.length; i++)if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                pfx = domPrefixes[i];
                keyframeprefix = '-' + pfx.toLowerCase() + '-';
                animationstartevent = startEvents[i];
                animation = true;
                break;
            }
        }
        var animationName = 'resizeanim';
        var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
        var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
    }
    var createStyles = function createStyles(doc) {
        if (!doc.getElementById('detectElementResize')) {
            //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
            var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName('head')[0], style = doc.createElement('style');
            style.id = 'detectElementResize';
            style.type = 'text/css';
            if (nonce != null) style.setAttribute('nonce', nonce);
            if (style.styleSheet) style.styleSheet.cssText = css;
            else style.appendChild(doc.createTextNode(css));
            head.appendChild(style);
        }
    };
    var addResizeListener = function addResizeListener(element, fn) {
        if (attachEvent) element.attachEvent('onresize', fn);
        else {
            if (!element.__resizeTriggers__) {
                var doc = element.ownerDocument;
                var elementStyle = _window.getComputedStyle(element);
                if (elementStyle && elementStyle.position == 'static') element.style.position = 'relative';
                createStyles(doc);
                element.__resizeLast__ = {};
                element.__resizeListeners__ = [];
                (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
                var resizeTriggersHtml = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
                if (window.trustedTypes) {
                    var staticPolicy = trustedTypes.createPolicy('react-virtualized-auto-sizer', {
                        createHTML: function createHTML() {
                            return resizeTriggersHtml;
                        }
                    });
                    element.__resizeTriggers__.innerHTML = staticPolicy.createHTML('');
                } else element.__resizeTriggers__.innerHTML = resizeTriggersHtml;
                element.appendChild(element.__resizeTriggers__);
                resetTriggers(element);
                element.addEventListener('scroll', scrollListener, true);
                /* Listen for a css animation to detect element display/re-attach */ if (animationstartevent) {
                    element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
                        if (e.animationName == animationName) resetTriggers(element);
                    };
                    element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
                }
            }
            element.__resizeListeners__.push(fn);
        }
    };
    var removeResizeListener = function removeResizeListener(element, fn) {
        if (attachEvent) element.detachEvent('onresize', fn);
        else {
            element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
            if (!element.__resizeListeners__.length) {
                element.removeEventListener('scroll', scrollListener, true);
                if (element.__resizeTriggers__.__animationListener__) {
                    element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
                    element.__resizeTriggers__.__animationListener__ = null;
                }
                try {
                    element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
                } catch (e) {}
            }
        }
    };
    return {
        addResizeListener: addResizeListener,
        removeResizeListener: removeResizeListener
    };
}

});



parcelRegister("fFHlk", function(module, exports) {

$parcel$export(module.exports, "CellMeasurer", () => (parcelRequire("amyyn")).default);
$parcel$export(module.exports, "CellMeasurerCache", () => (parcelRequire("5nNCU")).default);

var $amyyn = parcelRequire("amyyn");

var $5nNCU = parcelRequire("5nNCU");
var $b68c4e64e5c179d0$export$2e2bcd8739ae039 = (0, $amyyn.default);

});
parcelRegister("amyyn", function(module, exports) {

$parcel$export(module.exports, "default", () => $78b6c309c451e230$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");

var $d4J5n = parcelRequire("d4J5n");

var $66G66 = parcelRequire("66G66");
parcelRequire("6NwPp");

var $78b6c309c451e230$var$_class, $78b6c309c451e230$var$_temp;
/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */ var $78b6c309c451e230$export$2e2bcd8739ae039 = ($78b6c309c451e230$var$_temp = $78b6c309c451e230$var$_class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(CellMeasurer, _React$PureComponent);
    function CellMeasurer() {
        var _getPrototypeOf2;
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, CellMeasurer);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (_getPrototypeOf2 = (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(CellMeasurer)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_child", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_measure", function() {
            var _this$props = _this.props, cache = _this$props.cache, _this$props$columnInd = _this$props.columnIndex, columnIndex = _this$props$columnInd === void 0 ? 0 : _this$props$columnInd, parent = _this$props.parent, _this$props$rowIndex = _this$props.rowIndex, rowIndex = _this$props$rowIndex === void 0 ? _this.props.index || 0 : _this$props$rowIndex;
            var _this$_getCellMeasure = _this._getCellMeasurements(), height = _this$_getCellMeasure.height, width = _this$_getCellMeasure.width;
            if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
                cache.set(rowIndex, columnIndex, width, height);
                if (parent && typeof parent.recomputeGridSize === 'function') parent.recomputeGridSize({
                    columnIndex: columnIndex,
                    rowIndex: rowIndex
                });
            }
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_registerChild", function(element) {
            if (element && !(element instanceof Element)) console.warn('CellMeasurer registerChild expects to be passed Element or null');
            _this._child = element;
            if (element) _this._maybeMeasureCell();
        });
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(CellMeasurer, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._maybeMeasureCell();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this._maybeMeasureCell();
            }
        },
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                return typeof children === 'function' ? children({
                    measure: this._measure,
                    registerChild: this._registerChild
                }) : children;
            }
        },
        {
            key: "_getCellMeasurements",
            value: function _getCellMeasurements() {
                var cache = this.props.cache;
                var node = this._child || (0, $66G66.findDOMNode)(this); // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height
                if (node && node.ownerDocument && node.ownerDocument.defaultView && node instanceof node.ownerDocument.defaultView.HTMLElement) {
                    var styleWidth = node.style.width;
                    var styleHeight = node.style.height; // If we are re-measuring a cell that has already been measured,
                    // It will have a hard-coded width/height from the previous measurement.
                    // The fact that we are measuring indicates this measurement is probably stale,
                    // So explicitly clear it out (eg set to "auto") so we can recalculate.
                    // See issue #593 for more info.
                    // Even if we are measuring initially- if we're inside of a MultiGrid component,
                    // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
                    // eg top/left Grid renders before bottom/right Grid
                    // Since the CellMeasurerCache is shared between them this taints derived cell size values.
                    if (!cache.hasFixedWidth()) node.style.width = 'auto';
                    if (!cache.hasFixedHeight()) node.style.height = 'auto';
                    var height = Math.ceil(node.offsetHeight);
                    var width = Math.ceil(node.offsetWidth); // Reset after measuring to avoid breaking styles; see #660
                    if (styleWidth) node.style.width = styleWidth;
                    if (styleHeight) node.style.height = styleHeight;
                    return {
                        height: height,
                        width: width
                    };
                } else return {
                    height: 0,
                    width: 0
                };
            }
        },
        {
            key: "_maybeMeasureCell",
            value: function _maybeMeasureCell() {
                var _this$props2 = this.props, cache = _this$props2.cache, _this$props2$columnIn = _this$props2.columnIndex, columnIndex = _this$props2$columnIn === void 0 ? 0 : _this$props2$columnIn, parent = _this$props2.parent, _this$props2$rowIndex = _this$props2.rowIndex, rowIndex = _this$props2$rowIndex === void 0 ? this.props.index || 0 : _this$props2$rowIndex;
                if (!cache.has(rowIndex, columnIndex)) {
                    var _this$_getCellMeasure2 = this._getCellMeasurements(), height = _this$_getCellMeasure2.height, width = _this$_getCellMeasure2.width;
                    cache.set(rowIndex, columnIndex, width, height); // If size has changed, let Grid know to re-render.
                    if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') parent.invalidateCellSizeAfterRender({
                        columnIndex: columnIndex,
                        rowIndex: rowIndex
                    });
                }
            }
        }
    ]);
    return CellMeasurer;
}($d4J5n.PureComponent), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($78b6c309c451e230$var$_class, "propTypes", null), $78b6c309c451e230$var$_temp); // Used for DEV mode warning check
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($78b6c309c451e230$export$2e2bcd8739ae039, "__internalCellMeasurerFlag", false);

});
parcelRegister("6NwPp", function(module, exports) {

var $0146fafa6bcffd35$export$d013910bd650a87f = null;

});


parcelRegister("5nNCU", function(module, exports) {

$parcel$export(module.exports, "default", () => $3eb5988fa374be59$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $6nVSY = parcelRequire("6nVSY");
parcelRequire("6NwPp");
var $3eb5988fa374be59$export$611c894df53833b0 = 30;
var $3eb5988fa374be59$export$aa4eace044cdfdbf = 100; // Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.
/**
 * Caches measurements for a given cell.
 */ var $3eb5988fa374be59$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    function CellMeasurerCache() {
        var _this = this;
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, CellMeasurerCache);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_cellHeightCache", {});
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_cellWidthCache", {});
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_columnWidthCache", {});
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_rowHeightCache", {});
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_defaultHeight", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_defaultWidth", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_minHeight", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_minWidth", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_keyMapper", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_hasFixedHeight", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_hasFixedWidth", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_columnCount", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_rowCount", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "columnWidth", function(_ref) {
            var index = _ref.index;
            var key = _this._keyMapper(0, index);
            return _this._columnWidthCache[key] !== undefined ? _this._columnWidthCache[key] : _this._defaultWidth;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "rowHeight", function(_ref2) {
            var index = _ref2.index;
            var key = _this._keyMapper(index, 0);
            return _this._rowHeightCache[key] !== undefined ? _this._rowHeightCache[key] : _this._defaultHeight;
        });
        var defaultHeight = params.defaultHeight, defaultWidth = params.defaultWidth, fixedHeight = params.fixedHeight, fixedWidth = params.fixedWidth, keyMapper = params.keyMapper, minHeight = params.minHeight, minWidth = params.minWidth;
        this._hasFixedHeight = fixedHeight === true;
        this._hasFixedWidth = fixedWidth === true;
        this._minHeight = minHeight || 0;
        this._minWidth = minWidth || 0;
        this._keyMapper = keyMapper || $3eb5988fa374be59$var$defaultKeyMapper;
        this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : $3eb5988fa374be59$export$611c894df53833b0);
        this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : $3eb5988fa374be59$export$aa4eace044cdfdbf);
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(CellMeasurerCache, [
        {
            key: "clear",
            value: function clear(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var key = this._keyMapper(rowIndex, columnIndex);
                delete this._cellHeightCache[key];
                delete this._cellWidthCache[key];
                this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
            }
        },
        {
            key: "clearAll",
            value: function clearAll() {
                this._cellHeightCache = {};
                this._cellWidthCache = {};
                this._columnWidthCache = {};
                this._rowHeightCache = {};
                this._rowCount = 0;
                this._columnCount = 0;
            }
        },
        {
            key: "hasFixedHeight",
            value: function hasFixedHeight() {
                return this._hasFixedHeight;
            }
        },
        {
            key: "hasFixedWidth",
            value: function hasFixedWidth() {
                return this._hasFixedWidth;
            }
        },
        {
            key: "getHeight",
            value: function getHeight(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (this._hasFixedHeight) return this._defaultHeight;
                else {
                    var _key = this._keyMapper(rowIndex, columnIndex);
                    return this._cellHeightCache[_key] !== undefined ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
                }
            }
        },
        {
            key: "getWidth",
            value: function getWidth(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (this._hasFixedWidth) return this._defaultWidth;
                else {
                    var _key2 = this._keyMapper(rowIndex, columnIndex);
                    return this._cellWidthCache[_key2] !== undefined ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
                }
            }
        },
        {
            key: "has",
            value: function has(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var key = this._keyMapper(rowIndex, columnIndex);
                return this._cellHeightCache[key] !== undefined;
            }
        },
        {
            key: "set",
            value: function set(rowIndex, columnIndex, width, height) {
                var key = this._keyMapper(rowIndex, columnIndex);
                if (columnIndex >= this._columnCount) this._columnCount = columnIndex + 1;
                if (rowIndex >= this._rowCount) this._rowCount = rowIndex + 1;
                 // Size is cached per cell so we don't have to re-measure if cells are re-ordered.
                this._cellHeightCache[key] = height;
                this._cellWidthCache[key] = width;
                this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
            }
        },
        {
            key: "_updateCachedColumnAndRowSizes",
            value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
                // :columnWidth and :rowHeight are derived based on all cells in a column/row.
                // Pre-cache these derived values for faster lookup later.
                // Reads are expected to occur more frequently than writes in this case.
                // Only update non-fixed dimensions though to avoid doing unnecessary work.
                if (!this._hasFixedWidth) {
                    var columnWidth = 0;
                    for(var i = 0; i < this._rowCount; i++)columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
                    var columnKey = this._keyMapper(0, columnIndex);
                    this._columnWidthCache[columnKey] = columnWidth;
                }
                if (!this._hasFixedHeight) {
                    var rowHeight = 0;
                    for(var _i = 0; _i < this._columnCount; _i++)rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
                    var rowKey = this._keyMapper(rowIndex, 0);
                    this._rowHeightCache[rowKey] = rowHeight;
                }
            }
        },
        {
            key: "defaultHeight",
            get: function get() {
                return this._defaultHeight;
            }
        },
        {
            key: "defaultWidth",
            get: function get() {
                return this._defaultWidth;
            }
        }
    ]);
    return CellMeasurerCache;
}();
function $3eb5988fa374be59$var$defaultKeyMapper(rowIndex, columnIndex) {
    return "".concat(rowIndex, "-").concat(columnIndex);
}

});


parcelRegister("8gDC2", function(module, exports) {

var $6tGPm = parcelRequire("6tGPm");
var $604e8b98daebf43b$export$2e2bcd8739ae039 = (0, $6tGPm.default);

});
parcelRegister("6tGPm", function(module, exports) {

$parcel$export(module.exports, "default", () => $4b76ac29a33537bd$export$2e2bcd8739ae039);

var $e5Cx7 = parcelRequire("e5Cx7");

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");


var $d4J5n = parcelRequire("d4J5n");

var $5sDuG = parcelRequire("5sDuG");

var $M38JQ = parcelRequire("M38JQ");

var $a6qK4 = parcelRequire("a6qK4");
parcelRequire("5qKWI");
/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */ var $4b76ac29a33537bd$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(Collection, _React$PureComponent);
    function Collection(props, context) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, Collection);
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(Collection).call(this, props, context));
        _this._cellMetadata = [];
        _this._lastRenderedCellIndices = []; // Cell cache during scroll (for performance)
        _this._cellCache = [];
        _this._isScrollingChange = _this._isScrollingChange.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        _this._setCollectionViewRef = _this._setCollectionViewRef.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(Collection, [
        {
            key: "forceUpdate",
            value: function forceUpdate() {
                if (this._collectionView !== undefined) this._collectionView.forceUpdate();
            }
        },
        {
            key: "recomputeCellSizesAndPositions",
            value: function recomputeCellSizesAndPositions() {
                this._cellCache = [];
                this._collectionView.recomputeCellSizesAndPositions();
            }
        },
        {
            key: "render",
            value: function render() {
                var props = (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({}, this.props);
                return $d4J5n.createElement((0, $5sDuG.default), (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({
                    cellLayoutManager: this,
                    isScrollingChange: this._isScrollingChange,
                    ref: this._setCollectionViewRef
                }, props));
            }
        },
        {
            key: "calculateSizeAndPositionData",
            value: function calculateSizeAndPositionData() {
                var _this$props = this.props, cellCount = _this$props.cellCount, cellSizeAndPositionGetter = _this$props.cellSizeAndPositionGetter, sectionSize = _this$props.sectionSize;
                var data = (0, $M38JQ.default)({
                    cellCount: cellCount,
                    cellSizeAndPositionGetter: cellSizeAndPositionGetter,
                    sectionSize: sectionSize
                });
                this._cellMetadata = data.cellMetadata;
                this._sectionManager = data.sectionManager;
                this._height = data.height;
                this._width = data.width;
            }
        },
        {
            key: "getLastRenderedIndices",
            value: function getLastRenderedIndices() {
                return this._lastRenderedCellIndices;
            }
        },
        {
            key: "getScrollPositionForCell",
            value: function getScrollPositionForCell(_ref) {
                var align = _ref.align, cellIndex = _ref.cellIndex, height = _ref.height, scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, width = _ref.width;
                var cellCount = this.props.cellCount;
                if (cellIndex >= 0 && cellIndex < cellCount) {
                    var cellMetadata = this._cellMetadata[cellIndex];
                    scrollLeft = (0, $a6qK4.default)({
                        align: align,
                        cellOffset: cellMetadata.x,
                        cellSize: cellMetadata.width,
                        containerSize: width,
                        currentOffset: scrollLeft,
                        targetIndex: cellIndex
                    });
                    scrollTop = (0, $a6qK4.default)({
                        align: align,
                        cellOffset: cellMetadata.y,
                        cellSize: cellMetadata.height,
                        containerSize: height,
                        currentOffset: scrollTop,
                        targetIndex: cellIndex
                    });
                }
                return {
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                };
            }
        },
        {
            key: "getTotalSize",
            value: function getTotalSize() {
                return {
                    height: this._height,
                    width: this._width
                };
            }
        },
        {
            key: "cellRenderers",
            value: function cellRenderers(_ref2) {
                var _this2 = this;
                var height = _ref2.height, isScrolling = _ref2.isScrolling, width = _ref2.width, x = _ref2.x, y = _ref2.y;
                var _this$props2 = this.props, cellGroupRenderer = _this$props2.cellGroupRenderer, cellRenderer = _this$props2.cellRenderer; // Store for later calls to getLastRenderedIndices()
                this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
                    height: height,
                    width: width,
                    x: x,
                    y: y
                });
                return cellGroupRenderer({
                    cellCache: this._cellCache,
                    cellRenderer: cellRenderer,
                    cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
                        var index = _ref3.index;
                        return _this2._sectionManager.getCellMetadata({
                            index: index
                        });
                    },
                    indices: this._lastRenderedCellIndices,
                    isScrolling: isScrolling
                });
            }
        },
        {
            key: "_isScrollingChange",
            value: function _isScrollingChange(isScrolling) {
                if (!isScrolling) this._cellCache = [];
            }
        },
        {
            key: "_setCollectionViewRef",
            value: function _setCollectionViewRef(ref) {
                this._collectionView = ref;
            }
        }
    ]);
    return Collection;
}($d4J5n.PureComponent);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($4b76ac29a33537bd$export$2e2bcd8739ae039, "defaultProps", {
    'aria-label': 'grid',
    cellGroupRenderer: $4b76ac29a33537bd$var$defaultCellGroupRenderer
});
$4b76ac29a33537bd$export$2e2bcd8739ae039.propTypes = {};
function $4b76ac29a33537bd$var$defaultCellGroupRenderer(_ref4) {
    var cellCache = _ref4.cellCache, cellRenderer = _ref4.cellRenderer, cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter, indices = _ref4.indices, isScrolling = _ref4.isScrolling;
    return indices.map(function(index) {
        var cellMetadata = cellSizeAndPositionGetter({
            index: index
        });
        var cellRendererProps = {
            index: index,
            isScrolling: isScrolling,
            key: index,
            style: {
                height: cellMetadata.height,
                left: cellMetadata.x,
                position: 'absolute',
                top: cellMetadata.y,
                width: cellMetadata.width
            }
        }; // Avoid re-creating cells while scrolling.
        // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
        // If a scroll is in progress- cache and reuse cells.
        // This cache will be thrown away once scrolling complets.
        if (isScrolling) {
            if (!(index in cellCache)) cellCache[index] = cellRenderer(cellRendererProps);
            return cellCache[index];
        } else return cellRenderer(cellRendererProps);
    }).filter(function(renderedCell) {
        return !!renderedCell;
    });
}

});
parcelRegister("5sDuG", function(module, exports) {

$parcel$export(module.exports, "default", () => $3f9e33ef1ad25961$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");

var $h0TGs = parcelRequire("h0TGs");


var $d4J5n = parcelRequire("d4J5n");

var $32PuH = parcelRequire("32PuH");

var $2MlNe = parcelRequire("2MlNe");

var $4YdJF = parcelRequire("4YdJF");
function $3f9e33ef1ad25961$var$ownKeys(object, enumerableOnly) {
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
function $3f9e33ef1ad25961$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $3f9e33ef1ad25961$var$ownKeys(source, true).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $3f9e33ef1ad25961$var$ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */ var $3f9e33ef1ad25961$var$IS_SCROLLING_TIMEOUT = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */ var $3f9e33ef1ad25961$var$SCROLL_POSITION_CHANGE_REASONS = {
    OBSERVED: 'observed',
    REQUESTED: 'requested'
};
/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */ var $3f9e33ef1ad25961$var$CollectionView = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(CollectionView, _React$PureComponent);
    // Invokes callbacks only when their values have changed.
    function CollectionView() {
        var _getPrototypeOf2;
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, CollectionView);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (_getPrototypeOf2 = (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(CollectionView)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args))); // If this component is being rendered server-side, getScrollbarSize() will return undefined.
        // We handle this case in componentDidMount()
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "state", {
            isScrolling: false,
            scrollLeft: 0,
            scrollTop: 0
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_calculateSizeAndPositionDataOnNextUpdate", false);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onSectionRenderedMemoizer", (0, $2MlNe.default)());
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScrollMemoizer", (0, $2MlNe.default)(false));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_invokeOnSectionRenderedHelper", function() {
            var _this$props = _this.props, cellLayoutManager = _this$props.cellLayoutManager, onSectionRendered = _this$props.onSectionRendered;
            _this._onSectionRenderedMemoizer({
                callback: onSectionRendered,
                indices: {
                    indices: cellLayoutManager.getLastRenderedIndices()
                }
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_setScrollingContainerRef", function(ref) {
            _this._scrollingContainer = ref;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_updateScrollPositionForScrollToCell", function() {
            var _this$props2 = _this.props, cellLayoutManager = _this$props2.cellLayoutManager, height = _this$props2.height, scrollToAlignment = _this$props2.scrollToAlignment, scrollToCell = _this$props2.scrollToCell, width = _this$props2.width;
            var _this$state = _this.state, scrollLeft = _this$state.scrollLeft, scrollTop = _this$state.scrollTop;
            if (scrollToCell >= 0) {
                var scrollPosition = cellLayoutManager.getScrollPositionForCell({
                    align: scrollToAlignment,
                    cellIndex: scrollToCell,
                    height: height,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    width: width
                });
                if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) _this._setScrollPosition(scrollPosition);
            }
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScroll", function(event) {
            // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
            // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
            // See issue #404 for more information.
            if (event.target !== _this._scrollingContainer) return;
             // Prevent pointer events from interrupting a smooth scroll
            _this._enablePointerEventsAfterDelay(); // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
            // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
            // This causes a series of rapid renders that is slow for long lists.
            // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
            var _this$props3 = _this.props, cellLayoutManager = _this$props3.cellLayoutManager, height = _this$props3.height, isScrollingChange = _this$props3.isScrollingChange, width = _this$props3.width;
            var scrollbarSize = _this._scrollbarSize;
            var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge.height, totalWidth = _cellLayoutManager$ge.width;
            var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
            var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop)); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
            // Don't force a re-render if this is the case.
            // The mouse may move faster then the animation frame does.
            // Use requestAnimationFrame to avoid over-updating.
            if (_this.state.scrollLeft !== scrollLeft || _this.state.scrollTop !== scrollTop) {
                // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
                // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
                // All things considered, this seems to be the best current work around that I'm aware of.
                // For more information see https://github.com/bvaughn/react-virtualized/pull/124
                var scrollPositionChangeReason = event.cancelable ? $3f9e33ef1ad25961$var$SCROLL_POSITION_CHANGE_REASONS.OBSERVED : $3f9e33ef1ad25961$var$SCROLL_POSITION_CHANGE_REASONS.REQUESTED; // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
                if (!_this.state.isScrolling) isScrollingChange(true);
                _this.setState({
                    isScrolling: true,
                    scrollLeft: scrollLeft,
                    scrollPositionChangeReason: scrollPositionChangeReason,
                    scrollTop: scrollTop
                });
            }
            _this._invokeOnScrollMemoizer({
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                totalWidth: totalWidth,
                totalHeight: totalHeight
            });
        });
        _this._scrollbarSize = (0, $4YdJF.default)();
        if (_this._scrollbarSize === undefined) {
            _this._scrollbarSizeMeasured = false;
            _this._scrollbarSize = 0;
        } else _this._scrollbarSizeMeasured = true;
        return _this;
    }
    /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */ (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(CollectionView, [
        {
            key: "recomputeCellSizesAndPositions",
            value: function recomputeCellSizesAndPositions() {
                this._calculateSizeAndPositionDataOnNextUpdate = true;
                this.forceUpdate();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this$props4 = this.props, cellLayoutManager = _this$props4.cellLayoutManager, scrollLeft = _this$props4.scrollLeft, scrollToCell = _this$props4.scrollToCell, scrollTop = _this$props4.scrollTop; // If this component was first rendered server-side, scrollbar size will be undefined.
                // In that event we need to remeasure.
                if (!this._scrollbarSizeMeasured) {
                    this._scrollbarSize = (0, $4YdJF.default)();
                    this._scrollbarSizeMeasured = true;
                    this.setState({});
                }
                if (scrollToCell >= 0) this._updateScrollPositionForScrollToCell();
                else if (scrollLeft >= 0 || scrollTop >= 0) this._setScrollPosition({
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                });
                 // Update onSectionRendered callback.
                this._invokeOnSectionRenderedHelper();
                var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge2.height, totalWidth = _cellLayoutManager$ge2.width; // Initialize onScroll callback.
                this._invokeOnScrollMemoizer({
                    scrollLeft: scrollLeft || 0,
                    scrollTop: scrollTop || 0,
                    totalHeight: totalHeight,
                    totalWidth: totalWidth
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                var _this$props5 = this.props, height = _this$props5.height, scrollToAlignment = _this$props5.scrollToAlignment, scrollToCell = _this$props5.scrollToCell, width = _this$props5.width;
                var _this$state2 = this.state, scrollLeft = _this$state2.scrollLeft, scrollPositionChangeReason = _this$state2.scrollPositionChangeReason, scrollTop = _this$state2.scrollTop; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
                // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
                // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
                // So we only set these when we require an adjustment of the scroll position.
                // See issue #2 for more information.
                if (scrollPositionChangeReason === $3f9e33ef1ad25961$var$SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
                    if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) this._scrollingContainer.scrollLeft = scrollLeft;
                    if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) this._scrollingContainer.scrollTop = scrollTop;
                } // Update scroll offsets if the current :scrollToCell values requires it
                if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) this._updateScrollPositionForScrollToCell();
                 // Update onRowsRendered callback if start/stop indices have changed
                this._invokeOnSectionRenderedHelper();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this._disablePointerEventsTimeoutId) clearTimeout(this._disablePointerEventsTimeoutId);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props6 = this.props, autoHeight = _this$props6.autoHeight, cellCount = _this$props6.cellCount, cellLayoutManager = _this$props6.cellLayoutManager, className = _this$props6.className, height = _this$props6.height, horizontalOverscanSize = _this$props6.horizontalOverscanSize, id = _this$props6.id, noContentRenderer = _this$props6.noContentRenderer, style = _this$props6.style, verticalOverscanSize = _this$props6.verticalOverscanSize, width = _this$props6.width;
                var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollLeft = _this$state3.scrollLeft, scrollTop = _this$state3.scrollTop; // Memoization reset
                if (this._lastRenderedCellCount !== cellCount || this._lastRenderedCellLayoutManager !== cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
                    this._lastRenderedCellCount = cellCount;
                    this._lastRenderedCellLayoutManager = cellLayoutManager;
                    this._calculateSizeAndPositionDataOnNextUpdate = false;
                    cellLayoutManager.calculateSizeAndPositionData();
                }
                var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge3.height, totalWidth = _cellLayoutManager$ge3.width; // Safely expand the rendered area by the specified overscan amount
                var left = Math.max(0, scrollLeft - horizontalOverscanSize);
                var top = Math.max(0, scrollTop - verticalOverscanSize);
                var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
                var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);
                var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
                    height: bottom - top,
                    isScrolling: isScrolling,
                    width: right - left,
                    x: left,
                    y: top
                }) : [];
                var collectionStyle = {
                    boxSizing: 'border-box',
                    direction: 'ltr',
                    height: autoHeight ? 'auto' : height,
                    position: 'relative',
                    WebkitOverflowScrolling: 'touch',
                    width: width,
                    willChange: 'transform'
                }; // Force browser to hide scrollbars when we know they aren't necessary.
                // Otherwise once scrollbars appear they may not disappear again.
                // For more info see issue #116
                var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
                var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0; // Also explicitly init styles to 'auto' if scrollbars are required.
                // This works around an obscure edge case where external CSS styles have not yet been loaded,
                // But an initial scroll index of offset is set as an external prop.
                // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
                // This was originally reported via clauderic/react-infinite-calendar/issues/23
                collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
                collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
                return $d4J5n.createElement("div", {
                    ref: this._setScrollingContainerRef,
                    "aria-label": this.props['aria-label'],
                    className: (0, $h0TGs.default)('ReactVirtualized__Collection', className),
                    id: id,
                    onScroll: this._onScroll,
                    role: "grid",
                    style: $3f9e33ef1ad25961$var$_objectSpread({}, collectionStyle, {}, style),
                    tabIndex: 0
                }, cellCount > 0 && $d4J5n.createElement("div", {
                    className: "ReactVirtualized__Collection__innerScrollContainer",
                    style: {
                        height: totalHeight,
                        maxHeight: totalHeight,
                        maxWidth: totalWidth,
                        overflow: 'hidden',
                        pointerEvents: isScrolling ? 'none' : '',
                        width: totalWidth
                    }
                }, childrenToDisplay), cellCount === 0 && noContentRenderer());
            }
        },
        {
            key: "_enablePointerEventsAfterDelay",
            value: function _enablePointerEventsAfterDelay() {
                var _this2 = this;
                if (this._disablePointerEventsTimeoutId) clearTimeout(this._disablePointerEventsTimeoutId);
                this._disablePointerEventsTimeoutId = setTimeout(function() {
                    var isScrollingChange = _this2.props.isScrollingChange;
                    isScrollingChange(false);
                    _this2._disablePointerEventsTimeoutId = null;
                    _this2.setState({
                        isScrolling: false
                    });
                }, $3f9e33ef1ad25961$var$IS_SCROLLING_TIMEOUT);
            }
        },
        {
            key: "_invokeOnScrollMemoizer",
            value: function _invokeOnScrollMemoizer(_ref) {
                var _this3 = this;
                var scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, totalHeight = _ref.totalHeight, totalWidth = _ref.totalWidth;
                this._onScrollMemoizer({
                    callback: function callback(_ref2) {
                        var scrollLeft = _ref2.scrollLeft, scrollTop = _ref2.scrollTop;
                        var _this3$props = _this3.props, height = _this3$props.height, onScroll = _this3$props.onScroll, width = _this3$props.width;
                        onScroll({
                            clientHeight: height,
                            clientWidth: width,
                            scrollHeight: totalHeight,
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            scrollWidth: totalWidth
                        });
                    },
                    indices: {
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop
                    }
                });
            }
        },
        {
            key: "_setScrollPosition",
            value: function _setScrollPosition(_ref3) {
                var scrollLeft = _ref3.scrollLeft, scrollTop = _ref3.scrollTop;
                var newState = {
                    scrollPositionChangeReason: $3f9e33ef1ad25961$var$SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                };
                if (scrollLeft >= 0) newState.scrollLeft = scrollLeft;
                if (scrollTop >= 0) newState.scrollTop = scrollTop;
                if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) this.setState(newState);
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.cellCount === 0 && (prevState.scrollLeft !== 0 || prevState.scrollTop !== 0)) return {
                    scrollLeft: 0,
                    scrollTop: 0,
                    scrollPositionChangeReason: $3f9e33ef1ad25961$var$SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                };
                else if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) return {
                    scrollLeft: nextProps.scrollLeft != null ? nextProps.scrollLeft : prevState.scrollLeft,
                    scrollTop: nextProps.scrollTop != null ? nextProps.scrollTop : prevState.scrollTop,
                    scrollPositionChangeReason: $3f9e33ef1ad25961$var$SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                };
                return null;
            }
        }
    ]);
    return CollectionView;
}($d4J5n.PureComponent);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($3f9e33ef1ad25961$var$CollectionView, "defaultProps", {
    'aria-label': 'grid',
    horizontalOverscanSize: 0,
    noContentRenderer: function noContentRenderer() {
        return null;
    },
    onScroll: function onScroll() {
        return null;
    },
    onSectionRendered: function onSectionRendered() {
        return null;
    },
    scrollToAlignment: 'auto',
    scrollToCell: -1,
    style: {},
    verticalOverscanSize: 0
});
$3f9e33ef1ad25961$var$CollectionView.propTypes = {};
(0, $32PuH.polyfill)($3f9e33ef1ad25961$var$CollectionView);
var $3f9e33ef1ad25961$export$2e2bcd8739ae039 = $3f9e33ef1ad25961$var$CollectionView;

});

parcelRegister("M38JQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $0906eb562730b80e$export$2e2bcd8739ae039);

var $c5tLP = parcelRequire("c5tLP");
function $0906eb562730b80e$export$2e2bcd8739ae039(_ref) {
    var cellCount = _ref.cellCount, cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter, sectionSize = _ref.sectionSize;
    var cellMetadata = [];
    var sectionManager = new (0, $c5tLP.default)(sectionSize);
    var height = 0;
    var width = 0;
    for(var index = 0; index < cellCount; index++){
        var cellMetadatum = cellSizeAndPositionGetter({
            index: index
        });
        if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) throw Error("Invalid metadata returned for cell ".concat(index, ":\n        x:").concat(cellMetadatum.x, ", y:").concat(cellMetadatum.y, ", width:").concat(cellMetadatum.width, ", height:").concat(cellMetadatum.height));
        height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
        width = Math.max(width, cellMetadatum.x + cellMetadatum.width);
        cellMetadata[index] = cellMetadatum;
        sectionManager.registerCell({
            cellMetadatum: cellMetadatum,
            index: index
        });
    }
    return {
        cellMetadata: cellMetadata,
        height: height,
        sectionManager: sectionManager,
        width: width
    };
}

});
parcelRegister("c5tLP", function(module, exports) {

$parcel$export(module.exports, "default", () => $8ccd0b76c070a0e8$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $grMH8 = parcelRequire("grMH8");
parcelRequire("5qKWI");
var $8ccd0b76c070a0e8$var$SECTION_SIZE = 100;
/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */ var $8ccd0b76c070a0e8$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    function SectionManager() {
        var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $8ccd0b76c070a0e8$var$SECTION_SIZE;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, SectionManager);
        this._sectionSize = sectionSize;
        this._cellMetadata = [];
        this._sections = {};
    }
    /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */ (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(SectionManager, [
        {
            key: "getCellIndices",
            value: function getCellIndices(_ref) {
                var height = _ref.height, width = _ref.width, x = _ref.x, y = _ref.y;
                var indices = {};
                this.getSections({
                    height: height,
                    width: width,
                    x: x,
                    y: y
                }).forEach(function(section) {
                    return section.getCellIndices().forEach(function(index) {
                        indices[index] = index;
                    });
                }); // Object keys are strings; this function returns numbers
                return Object.keys(indices).map(function(index) {
                    return indices[index];
                });
            }
        },
        {
            key: "getCellMetadata",
            value: function getCellMetadata(_ref2) {
                var index = _ref2.index;
                return this._cellMetadata[index];
            }
        },
        {
            key: "getSections",
            value: function getSections(_ref3) {
                var height = _ref3.height, width = _ref3.width, x = _ref3.x, y = _ref3.y;
                var sectionXStart = Math.floor(x / this._sectionSize);
                var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
                var sectionYStart = Math.floor(y / this._sectionSize);
                var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);
                var sections = [];
                for(var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++)for(var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++){
                    var key = "".concat(sectionX, ".").concat(sectionY);
                    if (!this._sections[key]) this._sections[key] = new (0, $grMH8.default)({
                        height: this._sectionSize,
                        width: this._sectionSize,
                        x: sectionX * this._sectionSize,
                        y: sectionY * this._sectionSize
                    });
                    sections.push(this._sections[key]);
                }
                return sections;
            }
        },
        {
            key: "getTotalSectionCount",
            value: function getTotalSectionCount() {
                return Object.keys(this._sections).length;
            }
        },
        {
            key: "toString",
            value: function toString() {
                var _this = this;
                return Object.keys(this._sections).map(function(index) {
                    return _this._sections[index].toString();
                });
            }
        },
        {
            key: "registerCell",
            value: function registerCell(_ref4) {
                var cellMetadatum = _ref4.cellMetadatum, index = _ref4.index;
                this._cellMetadata[index] = cellMetadatum;
                this.getSections(cellMetadatum).forEach(function(section) {
                    return section.addCellIndex({
                        index: index
                    });
                });
            }
        }
    ]);
    return SectionManager;
}();

});
parcelRegister("grMH8", function(module, exports) {

$parcel$export(module.exports, "default", () => $bf94f0b71912815c$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");
parcelRequire("5qKWI");
/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */ var $bf94f0b71912815c$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    function Section(_ref) {
        var height = _ref.height, width = _ref.width, x = _ref.x, y = _ref.y;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, Section);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this._indexMap = {};
        this._indices = [];
    }
    /** Add a cell to this section. */ (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(Section, [
        {
            key: "addCellIndex",
            value: function addCellIndex(_ref2) {
                var index = _ref2.index;
                if (!this._indexMap[index]) {
                    this._indexMap[index] = true;
                    this._indices.push(index);
                }
            }
        },
        {
            key: "getCellIndices",
            value: function getCellIndices() {
                return this._indices;
            }
        },
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.x, ",").concat(this.y, " ").concat(this.width, "x").concat(this.height);
            }
        }
    ]);
    return Section;
}();

});
parcelRegister("5qKWI", function(module, exports) {

var $3f43cbf6cb91a705$export$31d28c97eb4f2d9d = null;
var $3f43cbf6cb91a705$export$c4831bf543ed2595 = null;
var $3f43cbf6cb91a705$export$6e2f347511b90f58 = null;
var $3f43cbf6cb91a705$export$aaccbd51d1a42a1f = null;
var $3f43cbf6cb91a705$export$4bbb48243c242eb8 = null;

});




parcelRegister("a6qK4", function(module, exports) {

$parcel$export(module.exports, "default", () => $75af355bbe66d390$export$2e2bcd8739ae039);
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */ function $75af355bbe66d390$export$2e2bcd8739ae039(_ref) {
    var _ref$align = _ref.align, align = _ref$align === void 0 ? 'auto' : _ref$align, cellOffset = _ref.cellOffset, cellSize = _ref.cellSize, containerSize = _ref.containerSize, currentOffset = _ref.currentOffset;
    var maxOffset = cellOffset;
    var minOffset = maxOffset - containerSize + cellSize;
    switch(align){
        case 'start':
            return maxOffset;
        case 'end':
            return minOffset;
        case 'center':
            return maxOffset - (containerSize - cellSize) / 2;
        default:
            return Math.max(minOffset, Math.min(maxOffset, currentOffset));
    }
}

});



parcelRegister("sGStf", function(module, exports) {

var $iWlp8 = parcelRequire("iWlp8");
var $0563e03aeefe48a9$export$2e2bcd8739ae039 = (0, $iWlp8.default);

});
parcelRegister("iWlp8", function(module, exports) {

$parcel$export(module.exports, "default", () => $dc9e3f43aa5556af$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");


var $d4J5n = parcelRequire("d4J5n");
/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */ var $dc9e3f43aa5556af$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(ColumnSizer, _React$PureComponent);
    function ColumnSizer(props, context) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, ColumnSizer);
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(ColumnSizer).call(this, props, context));
        _this._registerChild = _this._registerChild.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(ColumnSizer, [
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var _this$props = this.props, columnMaxWidth = _this$props.columnMaxWidth, columnMinWidth = _this$props.columnMinWidth, columnCount = _this$props.columnCount, width = _this$props.width;
                if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
                    if (this._registeredChild) this._registeredChild.recomputeGridSize();
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, children = _this$props2.children, columnMaxWidth = _this$props2.columnMaxWidth, columnMinWidth = _this$props2.columnMinWidth, columnCount = _this$props2.columnCount, width = _this$props2.width;
                var safeColumnMinWidth = columnMinWidth || 1;
                var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;
                var columnWidth = width / columnCount;
                columnWidth = Math.max(safeColumnMinWidth, columnWidth);
                columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
                columnWidth = Math.floor(columnWidth);
                var adjustedWidth = Math.min(width, columnWidth * columnCount);
                return children({
                    adjustedWidth: adjustedWidth,
                    columnWidth: columnWidth,
                    getColumnWidth: function getColumnWidth() {
                        return columnWidth;
                    },
                    registerChild: this._registerChild
                });
            }
        },
        {
            key: "_registerChild",
            value: function _registerChild(child) {
                if (child && typeof child.recomputeGridSize !== 'function') throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
                this._registeredChild = child;
                if (this._registeredChild) this._registeredChild.recomputeGridSize();
            }
        }
    ]);
    return ColumnSizer;
}($d4J5n.PureComponent);
$dc9e3f43aa5556af$export$2e2bcd8739ae039.propTypes = {};

});


parcelRegister("wqh8z", function(module, exports) {

var $9dO0O = parcelRequire("9dO0O");
var $06175f05935e6e22$export$2e2bcd8739ae039 = (0, $9dO0O.default);

});
parcelRegister("9dO0O", function(module, exports) {

$parcel$export(module.exports, "default", () => $6b6c1f509227eb39$export$2e2bcd8739ae039);

var $k4DFs = parcelRequire("k4DFs");

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");

var $d4J5n = parcelRequire("d4J5n");


var $2MlNe = parcelRequire("2MlNe");
/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */ var $6b6c1f509227eb39$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(InfiniteLoader, _React$PureComponent);
    function InfiniteLoader(props, context) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, InfiniteLoader);
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(InfiniteLoader).call(this, props, context));
        _this._loadMoreRowsMemoizer = (0, $2MlNe.default)();
        _this._onRowsRendered = _this._onRowsRendered.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        _this._registerChild = _this._registerChild.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(InfiniteLoader, [
        {
            key: "resetLoadMoreRowsCache",
            value: function resetLoadMoreRowsCache(autoReload) {
                this._loadMoreRowsMemoizer = (0, $2MlNe.default)();
                if (autoReload) this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
            }
        },
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                return children({
                    onRowsRendered: this._onRowsRendered,
                    registerChild: this._registerChild
                });
            }
        },
        {
            key: "_loadUnloadedRanges",
            value: function _loadUnloadedRanges(unloadedRanges) {
                var _this2 = this;
                var loadMoreRows = this.props.loadMoreRows;
                unloadedRanges.forEach(function(unloadedRange) {
                    var promise = loadMoreRows(unloadedRange);
                    if (promise) promise.then(function() {
                        // Refresh the visible rows if any of them have just been loaded.
                        // Otherwise they will remain in their unloaded visual state.
                        if ($6b6c1f509227eb39$export$f5bcfb715736e8f2({
                            lastRenderedStartIndex: _this2._lastRenderedStartIndex,
                            lastRenderedStopIndex: _this2._lastRenderedStopIndex,
                            startIndex: unloadedRange.startIndex,
                            stopIndex: unloadedRange.stopIndex
                        })) {
                            if (_this2._registeredChild) $6b6c1f509227eb39$export$2d6239c612aaa6dd(_this2._registeredChild, _this2._lastRenderedStartIndex);
                        }
                    });
                });
            }
        },
        {
            key: "_onRowsRendered",
            value: function _onRowsRendered(_ref) {
                var startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
                this._lastRenderedStartIndex = startIndex;
                this._lastRenderedStopIndex = stopIndex;
                this._doStuff(startIndex, stopIndex);
            }
        },
        {
            key: "_doStuff",
            value: function _doStuff(startIndex, stopIndex) {
                var _ref2, _this3 = this;
                var _this$props = this.props, isRowLoaded = _this$props.isRowLoaded, minimumBatchSize = _this$props.minimumBatchSize, rowCount = _this$props.rowCount, threshold = _this$props.threshold;
                var unloadedRanges = $6b6c1f509227eb39$export$2e183c7e20fa8fbf({
                    isRowLoaded: isRowLoaded,
                    minimumBatchSize: minimumBatchSize,
                    rowCount: rowCount,
                    startIndex: Math.max(0, startIndex - threshold),
                    stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
                }); // For memoize comparison
                var squashedUnloadedRanges = (_ref2 = []).concat.apply(_ref2, (0, (/*@__PURE__*/$parcel$interopDefault($k4DFs)))(unloadedRanges.map(function(_ref3) {
                    var startIndex = _ref3.startIndex, stopIndex = _ref3.stopIndex;
                    return [
                        startIndex,
                        stopIndex
                    ];
                })));
                this._loadMoreRowsMemoizer({
                    callback: function callback() {
                        _this3._loadUnloadedRanges(unloadedRanges);
                    },
                    indices: {
                        squashedUnloadedRanges: squashedUnloadedRanges
                    }
                });
            }
        },
        {
            key: "_registerChild",
            value: function _registerChild(registeredChild) {
                this._registeredChild = registeredChild;
            }
        }
    ]);
    return InfiniteLoader;
}($d4J5n.PureComponent);
/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */ (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($6b6c1f509227eb39$export$2e2bcd8739ae039, "defaultProps", {
    minimumBatchSize: 10,
    rowCount: 0,
    threshold: 15
});
$6b6c1f509227eb39$export$2e2bcd8739ae039.propTypes = {};
function $6b6c1f509227eb39$export$f5bcfb715736e8f2(_ref4) {
    var lastRenderedStartIndex = _ref4.lastRenderedStartIndex, lastRenderedStopIndex = _ref4.lastRenderedStopIndex, startIndex = _ref4.startIndex, stopIndex = _ref4.stopIndex;
    return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}
function $6b6c1f509227eb39$export$2e183c7e20fa8fbf(_ref5) {
    var isRowLoaded = _ref5.isRowLoaded, minimumBatchSize = _ref5.minimumBatchSize, rowCount = _ref5.rowCount, startIndex = _ref5.startIndex, stopIndex = _ref5.stopIndex;
    var unloadedRanges = [];
    var rangeStartIndex = null;
    var rangeStopIndex = null;
    for(var index = startIndex; index <= stopIndex; index++){
        var loaded = isRowLoaded({
            index: index
        });
        if (!loaded) {
            rangeStopIndex = index;
            if (rangeStartIndex === null) rangeStartIndex = index;
        } else if (rangeStopIndex !== null) {
            unloadedRanges.push({
                startIndex: rangeStartIndex,
                stopIndex: rangeStopIndex
            });
            rangeStartIndex = rangeStopIndex = null;
        }
    } // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
    // Scan forward to try filling our :minimumBatchSize.
    if (rangeStopIndex !== null) {
        var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);
        for(var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++){
            if (!isRowLoaded({
                index: _index
            })) rangeStopIndex = _index;
            else break;
        }
        unloadedRanges.push({
            startIndex: rangeStartIndex,
            stopIndex: rangeStopIndex
        });
    } // Check to see if our first range ended prematurely.
    // In this case we should scan backwards to try filling our :minimumBatchSize.
    if (unloadedRanges.length) {
        var firstUnloadedRange = unloadedRanges[0];
        while(firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0){
            var _index2 = firstUnloadedRange.startIndex - 1;
            if (!isRowLoaded({
                index: _index2
            })) firstUnloadedRange.startIndex = _index2;
            else break;
        }
    }
    return unloadedRanges;
}
function $6b6c1f509227eb39$export$2d6239c612aaa6dd(component) {
    var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;
    if (recomputeSize) recomputeSize.call(component, currentIndex);
    else component.forceUpdate();
}

});
parcelRegister("k4DFs", function(module, exports) {

var $7I96i = parcelRequire("7I96i");

var $dZtOm = parcelRequire("dZtOm");

var $7lhXX = parcelRequire("7lhXX");

var $iOtwA = parcelRequire("iOtwA");
function $e9d2f38dac81cfa2$var$_toConsumableArray(arr) {
    return $7I96i(arr) || $dZtOm(arr) || $7lhXX(arr) || $iOtwA();
}
module.exports = $e9d2f38dac81cfa2$var$_toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

});
parcelRegister("7I96i", function(module, exports) {

var $1oKsW = parcelRequire("1oKsW");
function $59d3b3a6123322b5$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $1oKsW(arr);
}
module.exports = $59d3b3a6123322b5$var$_arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

});
parcelRegister("1oKsW", function(module, exports) {
function $104c137489531923$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
module.exports = $104c137489531923$var$_arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

});


parcelRegister("dZtOm", function(module, exports) {
function $a2f818c4fb379339$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = $a2f818c4fb379339$var$_iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRegister("7lhXX", function(module, exports) {

var $1oKsW = parcelRequire("1oKsW");
function $55886e3fa2956fa5$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $1oKsW(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $1oKsW(o, minLen);
}
module.exports = $55886e3fa2956fa5$var$_unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRegister("iOtwA", function(module, exports) {
function $db23cc752e4e89b2$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = $db23cc752e4e89b2$var$_nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

});




parcelRegister("KTBsG", function(module, exports) {

var $1Jemm = parcelRequire("1Jemm");

var $jkTVQ = parcelRequire("jkTVQ");

});
parcelRegister("1Jemm", function(module, exports) {

var $e5Cx7 = parcelRequire("e5Cx7");

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");
parcelRequire("fzHd5");
var $fjyHm = parcelRequire("fjyHm");
var $l9w6Y = parcelRequire("l9w6Y");

var $d4J5n = parcelRequire("d4J5n");

var $h0TGs = parcelRequire("h0TGs");
parcelRequire("jkTVQ");

var $142521f6bdd44d7d$var$_class, $142521f6bdd44d7d$var$_temp;
/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */ var $142521f6bdd44d7d$export$2e2bcd8739ae039 = ($142521f6bdd44d7d$var$_temp = $142521f6bdd44d7d$var$_class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(List, _React$PureComponent);
    function List() {
        var _getPrototypeOf2;
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, List);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (_getPrototypeOf2 = (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(List)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "Grid", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_cellRenderer", function(_ref) {
            var parent = _ref.parent, rowIndex = _ref.rowIndex, style = _ref.style, isScrolling = _ref.isScrolling, isVisible = _ref.isVisible, key = _ref.key;
            var rowRenderer = _this.props.rowRenderer; // TRICKY The style object is sometimes cached by Grid.
            // This prevents new style objects from bypassing shallowCompare().
            // However as of React 16, style props are auto-frozen (at least in dev mode)
            // Check to make sure we can still modify the style before proceeding.
            // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713
            var widthDescriptor = Object.getOwnPropertyDescriptor(style, 'width');
            if (widthDescriptor && widthDescriptor.writable) // By default, List cells should be 100% width.
            // This prevents them from flowing under a scrollbar (if present).
            style.width = '100%';
            return rowRenderer({
                index: rowIndex,
                style: style,
                isScrolling: isScrolling,
                isVisible: isVisible,
                key: key,
                parent: parent
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_setRef", function(ref) {
            _this.Grid = ref;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScroll", function(_ref2) {
            var clientHeight = _ref2.clientHeight, scrollHeight = _ref2.scrollHeight, scrollTop = _ref2.scrollTop;
            var onScroll = _this.props.onScroll;
            onScroll({
                clientHeight: clientHeight,
                scrollHeight: scrollHeight,
                scrollTop: scrollTop
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onSectionRendered", function(_ref3) {
            var rowOverscanStartIndex = _ref3.rowOverscanStartIndex, rowOverscanStopIndex = _ref3.rowOverscanStopIndex, rowStartIndex = _ref3.rowStartIndex, rowStopIndex = _ref3.rowStopIndex;
            var onRowsRendered = _this.props.onRowsRendered;
            onRowsRendered({
                overscanStartIndex: rowOverscanStartIndex,
                overscanStopIndex: rowOverscanStopIndex,
                startIndex: rowStartIndex,
                stopIndex: rowStopIndex
            });
        });
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(List, [
        {
            key: "forceUpdateGrid",
            value: function forceUpdateGrid() {
                if (this.Grid) this.Grid.forceUpdate();
            }
        },
        {
            key: "getOffsetForRow",
            value: function getOffsetForRow(_ref4) {
                var alignment = _ref4.alignment, index = _ref4.index;
                if (this.Grid) {
                    var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
                        alignment: alignment,
                        rowIndex: index,
                        columnIndex: 0
                    }), scrollTop = _this$Grid$getOffsetF.scrollTop;
                    return scrollTop;
                }
                return 0;
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender(_ref5) {
                var columnIndex = _ref5.columnIndex, rowIndex = _ref5.rowIndex;
                if (this.Grid) this.Grid.invalidateCellSizeAfterRender({
                    rowIndex: rowIndex,
                    columnIndex: columnIndex
                });
            }
        },
        {
            key: "measureAllRows",
            value: function measureAllRows() {
                if (this.Grid) this.Grid.measureAllCells();
            }
        },
        {
            key: "recomputeGridSize",
            value: function recomputeGridSize() {
                var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref6$columnIndex = _ref6.columnIndex, columnIndex = _ref6$columnIndex === void 0 ? 0 : _ref6$columnIndex, _ref6$rowIndex = _ref6.rowIndex, rowIndex = _ref6$rowIndex === void 0 ? 0 : _ref6$rowIndex;
                if (this.Grid) this.Grid.recomputeGridSize({
                    rowIndex: rowIndex,
                    columnIndex: columnIndex
                });
            }
        },
        {
            key: "recomputeRowHeights",
            value: function recomputeRowHeights() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.recomputeGridSize({
                    rowIndex: index,
                    columnIndex: 0
                });
            }
        },
        {
            key: "scrollToPosition",
            value: function scrollToPosition() {
                var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.scrollToPosition({
                    scrollTop: scrollTop
                });
            }
        },
        {
            key: "scrollToRow",
            value: function scrollToRow() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.scrollToCell({
                    columnIndex: 0,
                    rowIndex: index
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, className = _this$props.className, noRowsRenderer = _this$props.noRowsRenderer, scrollToIndex = _this$props.scrollToIndex, width = _this$props.width;
                var classNames = (0, $h0TGs.default)('ReactVirtualized__List', className);
                return $d4J5n.createElement((0, $l9w6Y.default), (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({}, this.props, {
                    autoContainerWidth: true,
                    cellRenderer: this._cellRenderer,
                    className: classNames,
                    columnWidth: width,
                    columnCount: 1,
                    noContentRenderer: noRowsRenderer,
                    onScroll: this._onScroll,
                    onSectionRendered: this._onSectionRendered,
                    ref: this._setRef,
                    scrollToRow: scrollToIndex
                }));
            }
        }
    ]);
    return List;
}($d4J5n.PureComponent), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($142521f6bdd44d7d$var$_class, "propTypes", null), $142521f6bdd44d7d$var$_temp);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($142521f6bdd44d7d$export$2e2bcd8739ae039, "defaultProps", {
    autoHeight: false,
    estimatedRowSize: 30,
    onScroll: function onScroll() {},
    noRowsRenderer: function noRowsRenderer() {
        return null;
    },
    onRowsRendered: function onRowsRendered() {},
    overscanIndicesGetter: (0, $fjyHm.default),
    overscanRowCount: 10,
    scrollToAlignment: 'auto',
    scrollToIndex: -1,
    style: {}
});

});
parcelRegister("jkTVQ", function(module, exports) {
parcelRequire("d4J5n");

var $e13b45841264b263$export$3a716df7746a4f4e = null;
var $e13b45841264b263$export$ca2ef1a3c9fad673 = null;
var $e13b45841264b263$export$99ebbe0230797f72 = null;
var $e13b45841264b263$export$bf6962873c294da8 = null;

});



parcelRegister("7J12H", function(module, exports) {

$parcel$export(module.exports, "createCellPositioner", () => (parcelRequire("hmDqc")).default);
$parcel$export(module.exports, "Masonry", () => (parcelRequire("g2pSD")).default);

var $hmDqc = parcelRequire("hmDqc");

var $g2pSD = parcelRequire("g2pSD");
var $59fd8b6c18b2909f$export$2e2bcd8739ae039 = (0, $g2pSD.default);

});
parcelRegister("hmDqc", function(module, exports) {

$parcel$export(module.exports, "default", () => $ca4312055144c905$export$2e2bcd8739ae039);
parcelRequire("g2pSD");
function $ca4312055144c905$export$2e2bcd8739ae039(_ref) {
    var cellMeasurerCache = _ref.cellMeasurerCache, columnCount = _ref.columnCount, columnWidth = _ref.columnWidth, _ref$spacer = _ref.spacer, spacer = _ref$spacer === void 0 ? 0 : _ref$spacer;
    var columnHeights;
    initOrResetDerivedValues();
    function cellPositioner(index) {
        // Find the shortest column and use it.
        var columnIndex = 0;
        for(var i = 1; i < columnHeights.length; i++)if (columnHeights[i] < columnHeights[columnIndex]) columnIndex = i;
        var left = columnIndex * (columnWidth + spacer);
        var top = columnHeights[columnIndex] || 0;
        columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;
        return {
            left: left,
            top: top
        };
    }
    function initOrResetDerivedValues() {
        // Track the height of each column.
        // Layout algorithm below always inserts into the shortest column.
        columnHeights = [];
        for(var i = 0; i < columnCount; i++)columnHeights[i] = 0;
    }
    function reset(params) {
        columnCount = params.columnCount;
        columnWidth = params.columnWidth;
        spacer = params.spacer;
        initOrResetDerivedValues();
    }
    cellPositioner.reset = reset;
    return cellPositioner;
}

});
parcelRegister("g2pSD", function(module, exports) {

$parcel$export(module.exports, "default", () => $bad0e87d877a330c$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");

var $h0TGs = parcelRequire("h0TGs");

var $d4J5n = parcelRequire("d4J5n");

var $32PuH = parcelRequire("32PuH");

var $28uqc = parcelRequire("28uqc");

var $j2sdi = parcelRequire("j2sdi");

var $bad0e87d877a330c$var$_class, $bad0e87d877a330c$var$_temp;
function $bad0e87d877a330c$var$ownKeys(object, enumerableOnly) {
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
function $bad0e87d877a330c$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $bad0e87d877a330c$var$ownKeys(source, true).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $bad0e87d877a330c$var$ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var $bad0e87d877a330c$var$emptyObject = {};
var $bad0e87d877a330c$export$c51e03d5b92ea76f = 150;
/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */ var $bad0e87d877a330c$var$Masonry = ($bad0e87d877a330c$var$_temp = $bad0e87d877a330c$var$_class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(Masonry, _React$PureComponent);
    function Masonry() {
        var _getPrototypeOf2;
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, Masonry);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (_getPrototypeOf2 = (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(Masonry)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "state", {
            isScrolling: false,
            scrollTop: 0
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_debounceResetIsScrollingId", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_invalidateOnUpdateStartIndex", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_invalidateOnUpdateStopIndex", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_positionCache", new (0, $28uqc.default)());
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_startIndex", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_startIndexMemoized", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_stopIndex", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_stopIndexMemoized", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_debounceResetIsScrollingCallback", function() {
            _this.setState({
                isScrolling: false
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_setScrollingContainerRef", function(ref) {
            _this._scrollingContainer = ref;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScroll", function(event) {
            var height = _this.props.height;
            var eventScrollTop = event.currentTarget.scrollTop; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
            // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
            // This causes a series of rapid renders that is slow for long lists.
            // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.
            var scrollTop = Math.min(Math.max(0, _this._getEstimatedTotalHeight() - height), eventScrollTop); // On iOS, we can arrive at negative offsets by swiping past the start or end.
            // Avoid re-rendering in this case as it can cause problems; see #532 for more.
            if (eventScrollTop !== scrollTop) return;
             // Prevent pointer events from interrupting a smooth scroll
            _this._debounceResetIsScrolling(); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
            // Don't force a re-render if this is the case.
            // The mouse may move faster then the animation frame does.
            // Use requestAnimationFrame to avoid over-updating.
            if (_this.state.scrollTop !== scrollTop) _this.setState({
                isScrolling: true,
                scrollTop: scrollTop
            });
        });
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(Masonry, [
        {
            key: "clearCellPositions",
            value: function clearCellPositions() {
                this._positionCache = new (0, $28uqc.default)();
                this.forceUpdate();
            } // HACK This method signature was intended for Grid
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender(_ref) {
                var index = _ref.rowIndex;
                if (this._invalidateOnUpdateStartIndex === null) {
                    this._invalidateOnUpdateStartIndex = index;
                    this._invalidateOnUpdateStopIndex = index;
                } else {
                    this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
                    this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
                }
            }
        },
        {
            key: "recomputeCellPositions",
            value: function recomputeCellPositions() {
                var stopIndex = this._positionCache.count - 1;
                this._positionCache = new (0, $28uqc.default)();
                this._populatePositionCache(0, stopIndex);
                this.forceUpdate();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._checkInvalidateOnUpdate();
                this._invokeOnScrollCallback();
                this._invokeOnCellsRenderedCallback();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                this._checkInvalidateOnUpdate();
                this._invokeOnScrollCallback();
                this._invokeOnCellsRenderedCallback();
                if (this.props.scrollTop !== prevProps.scrollTop) this._debounceResetIsScrolling();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this._debounceResetIsScrollingId) (0, $j2sdi.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, autoHeight = _this$props.autoHeight, cellCount = _this$props.cellCount, cellMeasurerCache = _this$props.cellMeasurerCache, cellRenderer = _this$props.cellRenderer, className = _this$props.className, height = _this$props.height, id = _this$props.id, keyMapper = _this$props.keyMapper, overscanByPixels = _this$props.overscanByPixels, role = _this$props.role, style = _this$props.style, tabIndex = _this$props.tabIndex, width = _this$props.width, rowDirection = _this$props.rowDirection;
                var _this$state = this.state, isScrolling = _this$state.isScrolling, scrollTop = _this$state.scrollTop;
                var children = [];
                var estimateTotalHeight = this._getEstimatedTotalHeight();
                var shortestColumnSize = this._positionCache.shortestColumnSize;
                var measuredCellCount = this._positionCache.count;
                var startIndex = 0;
                var stopIndex;
                this._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height + overscanByPixels * 2, function(index, left, top) {
                    var _style;
                    if (typeof stopIndex === 'undefined') {
                        startIndex = index;
                        stopIndex = index;
                    } else {
                        startIndex = Math.min(startIndex, index);
                        stopIndex = Math.max(stopIndex, index);
                    }
                    children.push(cellRenderer({
                        index: index,
                        isScrolling: isScrolling,
                        key: keyMapper(index),
                        parent: _this2,
                        style: (_style = {
                            height: cellMeasurerCache.getHeight(index)
                        }, (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(_style, rowDirection === 'ltr' ? 'left' : 'right', left), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(_style, "position", 'absolute'), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(_style, "top", top), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(_style, "width", cellMeasurerCache.getWidth(index)), _style)
                    }));
                }); // We need to measure additional cells for this layout
                if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
                    var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));
                    for(var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++){
                        stopIndex = _index;
                        children.push(cellRenderer({
                            index: _index,
                            isScrolling: isScrolling,
                            key: keyMapper(_index),
                            parent: this,
                            style: {
                                width: cellMeasurerCache.getWidth(_index)
                            }
                        }));
                    }
                }
                this._startIndex = startIndex;
                this._stopIndex = stopIndex;
                return $d4J5n.createElement("div", {
                    ref: this._setScrollingContainerRef,
                    "aria-label": this.props['aria-label'],
                    className: (0, $h0TGs.default)('ReactVirtualized__Masonry', className),
                    id: id,
                    onScroll: this._onScroll,
                    role: role,
                    style: $bad0e87d877a330c$var$_objectSpread({
                        boxSizing: 'border-box',
                        direction: 'ltr',
                        height: autoHeight ? 'auto' : height,
                        overflowX: 'hidden',
                        overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
                        position: 'relative',
                        width: width,
                        WebkitOverflowScrolling: 'touch',
                        willChange: 'transform'
                    }, style),
                    tabIndex: tabIndex
                }, $d4J5n.createElement("div", {
                    className: "ReactVirtualized__Masonry__innerScrollContainer",
                    style: {
                        width: '100%',
                        height: estimateTotalHeight,
                        maxWidth: '100%',
                        maxHeight: estimateTotalHeight,
                        overflow: 'hidden',
                        pointerEvents: isScrolling ? 'none' : '',
                        position: 'relative'
                    }
                }, children));
            }
        },
        {
            key: "_checkInvalidateOnUpdate",
            value: function _checkInvalidateOnUpdate() {
                if (typeof this._invalidateOnUpdateStartIndex === 'number') {
                    var startIndex = this._invalidateOnUpdateStartIndex;
                    var stopIndex = this._invalidateOnUpdateStopIndex;
                    this._invalidateOnUpdateStartIndex = null;
                    this._invalidateOnUpdateStopIndex = null; // Query external layout logic for position of newly-measured cells
                    this._populatePositionCache(startIndex, stopIndex);
                    this.forceUpdate();
                }
            }
        },
        {
            key: "_debounceResetIsScrolling",
            value: function _debounceResetIsScrolling() {
                var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
                if (this._debounceResetIsScrollingId) (0, $j2sdi.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
                this._debounceResetIsScrollingId = (0, $j2sdi.requestAnimationTimeout)(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
            }
        },
        {
            key: "_getEstimatedTotalHeight",
            value: function _getEstimatedTotalHeight() {
                var _this$props2 = this.props, cellCount = _this$props2.cellCount, cellMeasurerCache = _this$props2.cellMeasurerCache, width = _this$props2.width;
                var estimatedColumnCount = Math.max(1, Math.floor(width / cellMeasurerCache.defaultWidth));
                return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
            }
        },
        {
            key: "_invokeOnScrollCallback",
            value: function _invokeOnScrollCallback() {
                var _this$props3 = this.props, height = _this$props3.height, onScroll = _this$props3.onScroll;
                var scrollTop = this.state.scrollTop;
                if (this._onScrollMemoized !== scrollTop) {
                    onScroll({
                        clientHeight: height,
                        scrollHeight: this._getEstimatedTotalHeight(),
                        scrollTop: scrollTop
                    });
                    this._onScrollMemoized = scrollTop;
                }
            }
        },
        {
            key: "_invokeOnCellsRenderedCallback",
            value: function _invokeOnCellsRenderedCallback() {
                if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
                    var onCellsRendered = this.props.onCellsRendered;
                    onCellsRendered({
                        startIndex: this._startIndex,
                        stopIndex: this._stopIndex
                    });
                    this._startIndexMemoized = this._startIndex;
                    this._stopIndexMemoized = this._stopIndex;
                }
            }
        },
        {
            key: "_populatePositionCache",
            value: function _populatePositionCache(startIndex, stopIndex) {
                var _this$props4 = this.props, cellMeasurerCache = _this$props4.cellMeasurerCache, cellPositioner = _this$props4.cellPositioner;
                for(var _index2 = startIndex; _index2 <= stopIndex; _index2++){
                    var _cellPositioner = cellPositioner(_index2), left = _cellPositioner.left, top = _cellPositioner.top;
                    this._positionCache.setPosition(_index2, left, top, cellMeasurerCache.getHeight(_index2));
                }
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.scrollTop !== undefined && prevState.scrollTop !== nextProps.scrollTop) return {
                    isScrolling: true,
                    scrollTop: nextProps.scrollTop
                };
                return null;
            }
        }
    ]);
    return Masonry;
}($d4J5n.PureComponent), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($bad0e87d877a330c$var$_class, "propTypes", null), $bad0e87d877a330c$var$_temp);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($bad0e87d877a330c$var$Masonry, "defaultProps", {
    autoHeight: false,
    keyMapper: $bad0e87d877a330c$var$identity,
    onCellsRendered: $bad0e87d877a330c$var$noop,
    onScroll: $bad0e87d877a330c$var$noop,
    overscanByPixels: 20,
    role: 'grid',
    scrollingResetTimeInterval: $bad0e87d877a330c$export$c51e03d5b92ea76f,
    style: $bad0e87d877a330c$var$emptyObject,
    tabIndex: 0,
    rowDirection: 'ltr'
});
function $bad0e87d877a330c$var$identity(value) {
    return value;
}
function $bad0e87d877a330c$var$noop() {}
var $bad0e87d877a330c$export$d0ff04c4baca3470 = null;
(0, $32PuH.polyfill)($bad0e87d877a330c$var$Masonry);
var $bad0e87d877a330c$export$2e2bcd8739ae039 = $bad0e87d877a330c$var$Masonry;
var $bad0e87d877a330c$export$8eb93bb8d3be3940 = null;

});
parcelRegister("28uqc", function(module, exports) {

$parcel$export(module.exports, "default", () => $18e3ed39142b7c8b$export$2e2bcd8739ae039);

var $i0pky = parcelRequire("i0pky");

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $6nVSY = parcelRequire("6nVSY");

var $g4dlV = parcelRequire("g4dlV");
// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var $18e3ed39142b7c8b$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    function PositionCache() {
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, PositionCache);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_columnSizeMap", {});
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_intervalTree", (0, $g4dlV.default)());
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_leftMap", {});
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(PositionCache, [
        {
            key: "estimateTotalHeight",
            value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
                var unmeasuredCellCount = cellCount - this.count;
                return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
            } // Render all cells visible within the viewport range defined.
        },
        {
            key: "range",
            value: function range(scrollTop, clientHeight, renderCallback) {
                var _this = this;
                this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function(_ref) {
                    var _ref2 = (0, (/*@__PURE__*/$parcel$interopDefault($i0pky)))(_ref, 3), top = _ref2[0], _ = _ref2[1], index = _ref2[2];
                    return renderCallback(index, _this._leftMap[index], top);
                });
            }
        },
        {
            key: "setPosition",
            value: function setPosition(index, left, top, height) {
                this._intervalTree.insert([
                    top,
                    top + height,
                    index
                ]);
                this._leftMap[index] = left;
                var columnSizeMap = this._columnSizeMap;
                var columnHeight = columnSizeMap[left];
                if (columnHeight === undefined) columnSizeMap[left] = top + height;
                else columnSizeMap[left] = Math.max(columnHeight, top + height);
            }
        },
        {
            key: "count",
            get: function get() {
                return this._intervalTree.count;
            }
        },
        {
            key: "shortestColumnSize",
            get: function get() {
                var columnSizeMap = this._columnSizeMap;
                var size = 0;
                for(var i in columnSizeMap){
                    var height = columnSizeMap[i];
                    size = size === 0 ? height : Math.min(size, height);
                }
                return size;
            }
        },
        {
            key: "tallestColumnSize",
            get: function get() {
                var columnSizeMap = this._columnSizeMap;
                var size = 0;
                for(var i in columnSizeMap){
                    var height = columnSizeMap[i];
                    size = Math.max(size, height);
                }
                return size;
            }
        }
    ]);
    return PositionCache;
}();

});
parcelRegister("i0pky", function(module, exports) {

var $6reDF = parcelRequire("6reDF");

var $7suZV = parcelRequire("7suZV");

var $7lhXX = parcelRequire("7lhXX");

var $2LReO = parcelRequire("2LReO");
function $d1bbe0384b1522f9$var$_slicedToArray(arr, i) {
    return $6reDF(arr) || $7suZV(arr, i) || $7lhXX(arr, i) || $2LReO();
}
module.exports = $d1bbe0384b1522f9$var$_slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

});
parcelRegister("6reDF", function(module, exports) {
function $4b009ea918308abb$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
module.exports = $4b009ea918308abb$var$_arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRegister("7suZV", function(module, exports) {
function $0166c2dcb2d79635$var$_iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
module.exports = $0166c2dcb2d79635$var$_iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

});

parcelRegister("2LReO", function(module, exports) {
function $20494484b0e15606$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = $20494484b0e15606$var$_nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

});


parcelRegister("g4dlV", function(module, exports) {

$parcel$export(module.exports, "default", () => $bb2760a14c8c8d30$export$2e2bcd8739ae039);
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/ 
var $e5svh = parcelRequire("e5svh");
var $bb2760a14c8c8d30$var$NOT_FOUND = 0;
var $bb2760a14c8c8d30$var$SUCCESS = 1;
var $bb2760a14c8c8d30$var$EMPTY = 2;
function $bb2760a14c8c8d30$var$IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
    this.mid = mid;
    this.left = left;
    this.right = right;
    this.leftPoints = leftPoints;
    this.rightPoints = rightPoints;
    this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}
var $bb2760a14c8c8d30$var$proto = $bb2760a14c8c8d30$var$IntervalTreeNode.prototype;
function $bb2760a14c8c8d30$var$copy(a, b) {
    a.mid = b.mid;
    a.left = b.left;
    a.right = b.right;
    a.leftPoints = b.leftPoints;
    a.rightPoints = b.rightPoints;
    a.count = b.count;
}
function $bb2760a14c8c8d30$var$rebuild(node, intervals) {
    var ntree = $bb2760a14c8c8d30$var$createIntervalTree(intervals);
    node.mid = ntree.mid;
    node.left = ntree.left;
    node.right = ntree.right;
    node.leftPoints = ntree.leftPoints;
    node.rightPoints = ntree.rightPoints;
    node.count = ntree.count;
}
function $bb2760a14c8c8d30$var$rebuildWithInterval(node, interval) {
    var intervals = node.intervals([]);
    intervals.push(interval);
    $bb2760a14c8c8d30$var$rebuild(node, intervals);
}
function $bb2760a14c8c8d30$var$rebuildWithoutInterval(node, interval) {
    var intervals = node.intervals([]);
    var idx = intervals.indexOf(interval);
    if (idx < 0) return $bb2760a14c8c8d30$var$NOT_FOUND;
    intervals.splice(idx, 1);
    $bb2760a14c8c8d30$var$rebuild(node, intervals);
    return $bb2760a14c8c8d30$var$SUCCESS;
}
$bb2760a14c8c8d30$var$proto.intervals = function(result) {
    result.push.apply(result, this.leftPoints);
    if (this.left) this.left.intervals(result);
    if (this.right) this.right.intervals(result);
    return result;
};
$bb2760a14c8c8d30$var$proto.insert = function(interval) {
    var weight = this.count - this.leftPoints.length;
    this.count += 1;
    if (interval[1] < this.mid) {
        if (this.left) {
            if (4 * (this.left.count + 1) > 3 * (weight + 1)) $bb2760a14c8c8d30$var$rebuildWithInterval(this, interval);
            else this.left.insert(interval);
        } else this.left = $bb2760a14c8c8d30$var$createIntervalTree([
            interval
        ]);
    } else if (interval[0] > this.mid) {
        if (this.right) {
            if (4 * (this.right.count + 1) > 3 * (weight + 1)) $bb2760a14c8c8d30$var$rebuildWithInterval(this, interval);
            else this.right.insert(interval);
        } else this.right = $bb2760a14c8c8d30$var$createIntervalTree([
            interval
        ]);
    } else {
        var l = (0, $e5svh.default).ge(this.leftPoints, interval, $bb2760a14c8c8d30$var$compareBegin);
        var r = (0, $e5svh.default).ge(this.rightPoints, interval, $bb2760a14c8c8d30$var$compareEnd);
        this.leftPoints.splice(l, 0, interval);
        this.rightPoints.splice(r, 0, interval);
    }
};
$bb2760a14c8c8d30$var$proto.remove = function(interval) {
    var weight = this.count - this.leftPoints;
    if (interval[1] < this.mid) {
        if (!this.left) return $bb2760a14c8c8d30$var$NOT_FOUND;
        var rw = this.right ? this.right.count : 0;
        if (4 * rw > 3 * (weight - 1)) return $bb2760a14c8c8d30$var$rebuildWithoutInterval(this, interval);
        var r = this.left.remove(interval);
        if (r === $bb2760a14c8c8d30$var$EMPTY) {
            this.left = null;
            this.count -= 1;
            return $bb2760a14c8c8d30$var$SUCCESS;
        } else if (r === $bb2760a14c8c8d30$var$SUCCESS) this.count -= 1;
        return r;
    } else if (interval[0] > this.mid) {
        if (!this.right) return $bb2760a14c8c8d30$var$NOT_FOUND;
        var lw = this.left ? this.left.count : 0;
        if (4 * lw > 3 * (weight - 1)) return $bb2760a14c8c8d30$var$rebuildWithoutInterval(this, interval);
        var r = this.right.remove(interval);
        if (r === $bb2760a14c8c8d30$var$EMPTY) {
            this.right = null;
            this.count -= 1;
            return $bb2760a14c8c8d30$var$SUCCESS;
        } else if (r === $bb2760a14c8c8d30$var$SUCCESS) this.count -= 1;
        return r;
    } else {
        if (this.count === 1) {
            if (this.leftPoints[0] === interval) return $bb2760a14c8c8d30$var$EMPTY;
            else return $bb2760a14c8c8d30$var$NOT_FOUND;
        }
        if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
            if (this.left && this.right) {
                var p = this;
                var n = this.left;
                while(n.right){
                    p = n;
                    n = n.right;
                }
                if (p === this) n.right = this.right;
                else {
                    var l = this.left;
                    var r = this.right;
                    p.count -= n.count;
                    p.right = n.left;
                    n.left = l;
                    n.right = r;
                }
                $bb2760a14c8c8d30$var$copy(this, n);
                this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
            } else if (this.left) $bb2760a14c8c8d30$var$copy(this, this.left);
            else $bb2760a14c8c8d30$var$copy(this, this.right);
            return $bb2760a14c8c8d30$var$SUCCESS;
        }
        for(var l = (0, $e5svh.default).ge(this.leftPoints, interval, $bb2760a14c8c8d30$var$compareBegin); l < this.leftPoints.length; ++l){
            if (this.leftPoints[l][0] !== interval[0]) break;
            if (this.leftPoints[l] === interval) {
                this.count -= 1;
                this.leftPoints.splice(l, 1);
                for(var r = (0, $e5svh.default).ge(this.rightPoints, interval, $bb2760a14c8c8d30$var$compareEnd); r < this.rightPoints.length; ++r){
                    if (this.rightPoints[r][1] !== interval[1]) break;
                    else if (this.rightPoints[r] === interval) {
                        this.rightPoints.splice(r, 1);
                        return $bb2760a14c8c8d30$var$SUCCESS;
                    }
                }
            }
        }
        return $bb2760a14c8c8d30$var$NOT_FOUND;
    }
};
function $bb2760a14c8c8d30$var$reportLeftRange(arr, hi, cb) {
    for(var i = 0; i < arr.length && arr[i][0] <= hi; ++i){
        var r = cb(arr[i]);
        if (r) return r;
    }
}
function $bb2760a14c8c8d30$var$reportRightRange(arr, lo, cb) {
    for(var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i){
        var r = cb(arr[i]);
        if (r) return r;
    }
}
function $bb2760a14c8c8d30$var$reportRange(arr, cb) {
    for(var i = 0; i < arr.length; ++i){
        var r = cb(arr[i]);
        if (r) return r;
    }
}
$bb2760a14c8c8d30$var$proto.queryPoint = function(x, cb) {
    if (x < this.mid) {
        if (this.left) {
            var r = this.left.queryPoint(x, cb);
            if (r) return r;
        }
        return $bb2760a14c8c8d30$var$reportLeftRange(this.leftPoints, x, cb);
    } else if (x > this.mid) {
        if (this.right) {
            var r = this.right.queryPoint(x, cb);
            if (r) return r;
        }
        return $bb2760a14c8c8d30$var$reportRightRange(this.rightPoints, x, cb);
    } else return $bb2760a14c8c8d30$var$reportRange(this.leftPoints, cb);
};
$bb2760a14c8c8d30$var$proto.queryInterval = function(lo, hi, cb) {
    if (lo < this.mid && this.left) {
        var r = this.left.queryInterval(lo, hi, cb);
        if (r) return r;
    }
    if (hi > this.mid && this.right) {
        var r = this.right.queryInterval(lo, hi, cb);
        if (r) return r;
    }
    if (hi < this.mid) return $bb2760a14c8c8d30$var$reportLeftRange(this.leftPoints, hi, cb);
    else if (lo > this.mid) return $bb2760a14c8c8d30$var$reportRightRange(this.rightPoints, lo, cb);
    else return $bb2760a14c8c8d30$var$reportRange(this.leftPoints, cb);
};
function $bb2760a14c8c8d30$var$compareNumbers(a, b) {
    return a - b;
}
function $bb2760a14c8c8d30$var$compareBegin(a, b) {
    var d = a[0] - b[0];
    if (d) return d;
    return a[1] - b[1];
}
function $bb2760a14c8c8d30$var$compareEnd(a, b) {
    var d = a[1] - b[1];
    if (d) return d;
    return a[0] - b[0];
}
function $bb2760a14c8c8d30$var$createIntervalTree(intervals) {
    if (intervals.length === 0) return null;
    var pts = [];
    for(var i = 0; i < intervals.length; ++i)pts.push(intervals[i][0], intervals[i][1]);
    pts.sort($bb2760a14c8c8d30$var$compareNumbers);
    var mid = pts[pts.length >> 1];
    var leftIntervals = [];
    var rightIntervals = [];
    var centerIntervals = [];
    for(var i = 0; i < intervals.length; ++i){
        var s = intervals[i];
        if (s[1] < mid) leftIntervals.push(s);
        else if (mid < s[0]) rightIntervals.push(s);
        else centerIntervals.push(s);
    } //Split center intervals
    var leftPoints = centerIntervals;
    var rightPoints = centerIntervals.slice();
    leftPoints.sort($bb2760a14c8c8d30$var$compareBegin);
    rightPoints.sort($bb2760a14c8c8d30$var$compareEnd);
    return new $bb2760a14c8c8d30$var$IntervalTreeNode(mid, $bb2760a14c8c8d30$var$createIntervalTree(leftIntervals), $bb2760a14c8c8d30$var$createIntervalTree(rightIntervals), leftPoints, rightPoints);
} //User friendly wrapper that makes it possible to support empty trees
function $bb2760a14c8c8d30$var$IntervalTree(root) {
    this.root = root;
}
var $bb2760a14c8c8d30$var$tproto = $bb2760a14c8c8d30$var$IntervalTree.prototype;
$bb2760a14c8c8d30$var$tproto.insert = function(interval) {
    if (this.root) this.root.insert(interval);
    else this.root = new $bb2760a14c8c8d30$var$IntervalTreeNode(interval[0], null, null, [
        interval
    ], [
        interval
    ]);
};
$bb2760a14c8c8d30$var$tproto.remove = function(interval) {
    if (this.root) {
        var r = this.root.remove(interval);
        if (r === $bb2760a14c8c8d30$var$EMPTY) this.root = null;
        return r !== $bb2760a14c8c8d30$var$NOT_FOUND;
    }
    return false;
};
$bb2760a14c8c8d30$var$tproto.queryPoint = function(p, cb) {
    if (this.root) return this.root.queryPoint(p, cb);
};
$bb2760a14c8c8d30$var$tproto.queryInterval = function(lo, hi, cb) {
    if (lo <= hi && this.root) return this.root.queryInterval(lo, hi, cb);
};
Object.defineProperty($bb2760a14c8c8d30$var$tproto, 'count', {
    get: function get() {
        if (this.root) return this.root.count;
        return 0;
    }
});
Object.defineProperty($bb2760a14c8c8d30$var$tproto, 'intervals', {
    get: function get() {
        if (this.root) return this.root.intervals([]);
        return [];
    }
});
function $bb2760a14c8c8d30$export$2e2bcd8739ae039(intervals) {
    if (!intervals || intervals.length === 0) return new $bb2760a14c8c8d30$var$IntervalTree(null);
    return new $bb2760a14c8c8d30$var$IntervalTree($bb2760a14c8c8d30$var$createIntervalTree(intervals));
}

});
parcelRegister("e5svh", function(module, exports) {

$parcel$export(module.exports, "default", () => $a417a48261ea2523$export$2e2bcd8739ae039);
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/ function $a417a48261ea2523$var$_GEA(a, l, h, y) {
    var i = h + 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x >= y) {
            i = m;
            h = m - 1;
        } else l = m + 1;
    }
    return i;
}
function $a417a48261ea2523$var$_GEP(a, l, h, y, c) {
    var i = h + 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (c(x, y) >= 0) {
            i = m;
            h = m - 1;
        } else l = m + 1;
    }
    return i;
}
function $a417a48261ea2523$var$dispatchBsearchGE(a, y, c, l, h) {
    if (typeof c === 'function') return $a417a48261ea2523$var$_GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return $a417a48261ea2523$var$_GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
function $a417a48261ea2523$var$_GTA(a, l, h, y) {
    var i = h + 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x > y) {
            i = m;
            h = m - 1;
        } else l = m + 1;
    }
    return i;
}
function $a417a48261ea2523$var$_GTP(a, l, h, y, c) {
    var i = h + 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (c(x, y) > 0) {
            i = m;
            h = m - 1;
        } else l = m + 1;
    }
    return i;
}
function $a417a48261ea2523$var$dispatchBsearchGT(a, y, c, l, h) {
    if (typeof c === 'function') return $a417a48261ea2523$var$_GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return $a417a48261ea2523$var$_GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
function $a417a48261ea2523$var$_LTA(a, l, h, y) {
    var i = l - 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x < y) {
            i = m;
            l = m + 1;
        } else h = m - 1;
    }
    return i;
}
function $a417a48261ea2523$var$_LTP(a, l, h, y, c) {
    var i = l - 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (c(x, y) < 0) {
            i = m;
            l = m + 1;
        } else h = m - 1;
    }
    return i;
}
function $a417a48261ea2523$var$dispatchBsearchLT(a, y, c, l, h) {
    if (typeof c === 'function') return $a417a48261ea2523$var$_LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return $a417a48261ea2523$var$_LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
function $a417a48261ea2523$var$_LEA(a, l, h, y) {
    var i = l - 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x <= y) {
            i = m;
            l = m + 1;
        } else h = m - 1;
    }
    return i;
}
function $a417a48261ea2523$var$_LEP(a, l, h, y, c) {
    var i = l - 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (c(x, y) <= 0) {
            i = m;
            l = m + 1;
        } else h = m - 1;
    }
    return i;
}
function $a417a48261ea2523$var$dispatchBsearchLE(a, y, c, l, h) {
    if (typeof c === 'function') return $a417a48261ea2523$var$_LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return $a417a48261ea2523$var$_LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
function $a417a48261ea2523$var$_EQA(a, l, h, y) {
    l;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x === y) return m;
        else if (x <= y) l = m + 1;
        else h = m - 1;
    }
    return -1;
}
function $a417a48261ea2523$var$_EQP(a, l, h, y, c) {
    l;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        var p = c(x, y);
        if (p === 0) return m;
        else if (p <= 0) l = m + 1;
        else h = m - 1;
    }
    return -1;
}
function $a417a48261ea2523$var$dispatchBsearchEQ(a, y, c, l, h) {
    if (typeof c === 'function') return $a417a48261ea2523$var$_EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return $a417a48261ea2523$var$_EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
var $a417a48261ea2523$export$2e2bcd8739ae039 = {
    ge: $a417a48261ea2523$var$dispatchBsearchGE,
    gt: $a417a48261ea2523$var$dispatchBsearchGT,
    lt: $a417a48261ea2523$var$dispatchBsearchLT,
    le: $a417a48261ea2523$var$dispatchBsearchLE,
    eq: $a417a48261ea2523$var$dispatchBsearchEQ
};

});






parcelRegister("6TwRY", function(module, exports) {

var $iQcoM = parcelRequire("iQcoM");
var $5051605acdb8aaa9$export$2e2bcd8739ae039 = (0, $iQcoM.default);

});
parcelRegister("iQcoM", function(module, exports) {

$parcel$export(module.exports, "default", () => $db76b36c2d03eec2$export$2e2bcd8739ae039);

var $e5Cx7 = parcelRequire("e5Cx7");

var $6g3Xx = parcelRequire("6g3Xx");

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");


var $d4J5n = parcelRequire("d4J5n");

var $32PuH = parcelRequire("32PuH");

var $lhSsn = parcelRequire("lhSsn");
parcelRequire("fzHd5");
var $l9w6Y = parcelRequire("l9w6Y");
function $db76b36c2d03eec2$var$ownKeys(object, enumerableOnly) {
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
function $db76b36c2d03eec2$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $db76b36c2d03eec2$var$ownKeys(source, true).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $db76b36c2d03eec2$var$ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var $db76b36c2d03eec2$var$SCROLLBAR_SIZE_BUFFER = 20;
/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */ var $db76b36c2d03eec2$var$MultiGrid = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(MultiGrid, _React$PureComponent);
    function MultiGrid(props, context) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, MultiGrid);
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(MultiGrid).call(this, props, context));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "state", {
            scrollLeft: 0,
            scrollTop: 0,
            scrollbarSize: 0,
            showHorizontalScrollbar: false,
            showVerticalScrollbar: false
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_deferredInvalidateColumnIndex", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_deferredInvalidateRowIndex", null);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_bottomLeftGridRef", function(ref) {
            _this._bottomLeftGrid = ref;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_bottomRightGridRef", function(ref) {
            _this._bottomRightGrid = ref;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_cellRendererBottomLeftGrid", function(_ref) {
            var rowIndex = _ref.rowIndex, rest = (0, (/*@__PURE__*/$parcel$interopDefault($6g3Xx)))(_ref, [
                "rowIndex"
            ]);
            var _this$props = _this.props, cellRenderer = _this$props.cellRenderer, fixedRowCount = _this$props.fixedRowCount, rowCount = _this$props.rowCount;
            if (rowIndex === rowCount - fixedRowCount) return $d4J5n.createElement("div", {
                key: rest.key,
                style: $db76b36c2d03eec2$var$_objectSpread({}, rest.style, {
                    height: $db76b36c2d03eec2$var$SCROLLBAR_SIZE_BUFFER
                })
            });
            else return cellRenderer($db76b36c2d03eec2$var$_objectSpread({}, rest, {
                parent: (0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this),
                rowIndex: rowIndex + fixedRowCount
            }));
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_cellRendererBottomRightGrid", function(_ref2) {
            var columnIndex = _ref2.columnIndex, rowIndex = _ref2.rowIndex, rest = (0, (/*@__PURE__*/$parcel$interopDefault($6g3Xx)))(_ref2, [
                "columnIndex",
                "rowIndex"
            ]);
            var _this$props2 = _this.props, cellRenderer = _this$props2.cellRenderer, fixedColumnCount = _this$props2.fixedColumnCount, fixedRowCount = _this$props2.fixedRowCount;
            return cellRenderer($db76b36c2d03eec2$var$_objectSpread({}, rest, {
                columnIndex: columnIndex + fixedColumnCount,
                parent: (0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this),
                rowIndex: rowIndex + fixedRowCount
            }));
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_cellRendererTopRightGrid", function(_ref3) {
            var columnIndex = _ref3.columnIndex, rest = (0, (/*@__PURE__*/$parcel$interopDefault($6g3Xx)))(_ref3, [
                "columnIndex"
            ]);
            var _this$props3 = _this.props, cellRenderer = _this$props3.cellRenderer, columnCount = _this$props3.columnCount, fixedColumnCount = _this$props3.fixedColumnCount;
            if (columnIndex === columnCount - fixedColumnCount) return $d4J5n.createElement("div", {
                key: rest.key,
                style: $db76b36c2d03eec2$var$_objectSpread({}, rest.style, {
                    width: $db76b36c2d03eec2$var$SCROLLBAR_SIZE_BUFFER
                })
            });
            else return cellRenderer($db76b36c2d03eec2$var$_objectSpread({}, rest, {
                columnIndex: columnIndex + fixedColumnCount,
                parent: (0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this)
            }));
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_columnWidthRightGrid", function(_ref4) {
            var index = _ref4.index;
            var _this$props4 = _this.props, columnCount = _this$props4.columnCount, fixedColumnCount = _this$props4.fixedColumnCount, columnWidth = _this$props4.columnWidth;
            var _this$state = _this.state, scrollbarSize = _this$state.scrollbarSize, showHorizontalScrollbar = _this$state.showHorizontalScrollbar; // An extra cell is added to the count
            // This gives the smaller Grid extra room for offset,
            // In case the main (bottom right) Grid has a scrollbar
            // If no scrollbar, the extra space is overflow:hidden anyway
            if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) return scrollbarSize;
            return typeof columnWidth === 'function' ? columnWidth({
                index: index + fixedColumnCount
            }) : columnWidth;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScroll", function(scrollInfo) {
            var scrollLeft = scrollInfo.scrollLeft, scrollTop = scrollInfo.scrollTop;
            _this.setState({
                scrollLeft: scrollLeft,
                scrollTop: scrollTop
            });
            var onScroll = _this.props.onScroll;
            if (onScroll) onScroll(scrollInfo);
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScrollbarPresenceChange", function(_ref5) {
            var horizontal = _ref5.horizontal, size = _ref5.size, vertical = _ref5.vertical;
            var _this$state2 = _this.state, showHorizontalScrollbar = _this$state2.showHorizontalScrollbar, showVerticalScrollbar = _this$state2.showVerticalScrollbar;
            if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
                _this.setState({
                    scrollbarSize: size,
                    showHorizontalScrollbar: horizontal,
                    showVerticalScrollbar: vertical
                });
                var onScrollbarPresenceChange = _this.props.onScrollbarPresenceChange;
                if (typeof onScrollbarPresenceChange === 'function') onScrollbarPresenceChange({
                    horizontal: horizontal,
                    size: size,
                    vertical: vertical
                });
            }
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScrollLeft", function(scrollInfo) {
            var scrollLeft = scrollInfo.scrollLeft;
            _this._onScroll({
                scrollLeft: scrollLeft,
                scrollTop: _this.state.scrollTop
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onScrollTop", function(scrollInfo) {
            var scrollTop = scrollInfo.scrollTop;
            _this._onScroll({
                scrollTop: scrollTop,
                scrollLeft: _this.state.scrollLeft
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_rowHeightBottomGrid", function(_ref6) {
            var index = _ref6.index;
            var _this$props5 = _this.props, fixedRowCount = _this$props5.fixedRowCount, rowCount = _this$props5.rowCount, rowHeight = _this$props5.rowHeight;
            var _this$state3 = _this.state, scrollbarSize = _this$state3.scrollbarSize, showVerticalScrollbar = _this$state3.showVerticalScrollbar; // An extra cell is added to the count
            // This gives the smaller Grid extra room for offset,
            // In case the main (bottom right) Grid has a scrollbar
            // If no scrollbar, the extra space is overflow:hidden anyway
            if (showVerticalScrollbar && index === rowCount - fixedRowCount) return scrollbarSize;
            return typeof rowHeight === 'function' ? rowHeight({
                index: index + fixedRowCount
            }) : rowHeight;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_topLeftGridRef", function(ref) {
            _this._topLeftGrid = ref;
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_topRightGridRef", function(ref) {
            _this._topRightGrid = ref;
        });
        var deferredMeasurementCache = props.deferredMeasurementCache, _fixedColumnCount = props.fixedColumnCount, _fixedRowCount = props.fixedRowCount;
        _this._maybeCalculateCachedStyles(true);
        if (deferredMeasurementCache) {
            _this._deferredMeasurementCacheBottomLeftGrid = _fixedRowCount > 0 ? new (0, $lhSsn.default)({
                cellMeasurerCache: deferredMeasurementCache,
                columnIndexOffset: 0,
                rowIndexOffset: _fixedRowCount
            }) : deferredMeasurementCache;
            _this._deferredMeasurementCacheBottomRightGrid = _fixedColumnCount > 0 || _fixedRowCount > 0 ? new (0, $lhSsn.default)({
                cellMeasurerCache: deferredMeasurementCache,
                columnIndexOffset: _fixedColumnCount,
                rowIndexOffset: _fixedRowCount
            }) : deferredMeasurementCache;
            _this._deferredMeasurementCacheTopRightGrid = _fixedColumnCount > 0 ? new (0, $lhSsn.default)({
                cellMeasurerCache: deferredMeasurementCache,
                columnIndexOffset: _fixedColumnCount,
                rowIndexOffset: 0
            }) : deferredMeasurementCache;
        }
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(MultiGrid, [
        {
            key: "forceUpdateGrids",
            value: function forceUpdateGrids() {
                this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
                this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
                this._topLeftGrid && this._topLeftGrid.forceUpdate();
                this._topRightGrid && this._topRightGrid.forceUpdate();
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender() {
                var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref7$columnIndex = _ref7.columnIndex, columnIndex = _ref7$columnIndex === void 0 ? 0 : _ref7$columnIndex, _ref7$rowIndex = _ref7.rowIndex, rowIndex = _ref7$rowIndex === void 0 ? 0 : _ref7$rowIndex;
                this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
                this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
            }
        },
        {
            key: "measureAllCells",
            value: function measureAllCells() {
                this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
                this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
                this._topLeftGrid && this._topLeftGrid.measureAllCells();
                this._topRightGrid && this._topRightGrid.measureAllCells();
            }
        },
        {
            key: "recomputeGridSize",
            value: function recomputeGridSize() {
                var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref8$columnIndex = _ref8.columnIndex, columnIndex = _ref8$columnIndex === void 0 ? 0 : _ref8$columnIndex, _ref8$rowIndex = _ref8.rowIndex, rowIndex = _ref8$rowIndex === void 0 ? 0 : _ref8$rowIndex;
                var _this$props6 = this.props, fixedColumnCount = _this$props6.fixedColumnCount, fixedRowCount = _this$props6.fixedRowCount;
                var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
                var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);
                this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
                    columnIndex: columnIndex,
                    rowIndex: adjustedRowIndex
                });
                this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
                    columnIndex: adjustedColumnIndex,
                    rowIndex: adjustedRowIndex
                });
                this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
                    columnIndex: columnIndex,
                    rowIndex: rowIndex
                });
                this._topRightGrid && this._topRightGrid.recomputeGridSize({
                    columnIndex: adjustedColumnIndex,
                    rowIndex: rowIndex
                });
                this._leftGridWidth = null;
                this._topGridHeight = null;
                this._maybeCalculateCachedStyles(true);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this$props7 = this.props, scrollLeft = _this$props7.scrollLeft, scrollTop = _this$props7.scrollTop;
                if (scrollLeft > 0 || scrollTop > 0) {
                    var newState = {};
                    if (scrollLeft > 0) newState.scrollLeft = scrollLeft;
                    if (scrollTop > 0) newState.scrollTop = scrollTop;
                    this.setState(newState);
                }
                this._handleInvalidatedGridSize();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this._handleInvalidatedGridSize();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props8 = this.props, onScroll = _this$props8.onScroll, onSectionRendered = _this$props8.onSectionRendered, onScrollbarPresenceChange = _this$props8.onScrollbarPresenceChange, scrollLeftProp = _this$props8.scrollLeft, scrollToColumn = _this$props8.scrollToColumn, scrollTopProp = _this$props8.scrollTop, scrollToRow = _this$props8.scrollToRow, rest = (0, (/*@__PURE__*/$parcel$interopDefault($6g3Xx)))(_this$props8, [
                    "onScroll",
                    "onSectionRendered",
                    "onScrollbarPresenceChange",
                    "scrollLeft",
                    "scrollToColumn",
                    "scrollTop",
                    "scrollToRow"
                ]);
                this._prepareForRender(); // Don't render any of our Grids if there are no cells.
                // This mirrors what Grid does,
                // And prevents us from recording inaccurage measurements when used with CellMeasurer.
                if (this.props.width === 0 || this.props.height === 0) return null;
                 // scrollTop and scrollLeft props are explicitly filtered out and ignored
                var _this$state4 = this.state, scrollLeft = _this$state4.scrollLeft, scrollTop = _this$state4.scrollTop;
                return $d4J5n.createElement("div", {
                    style: this._containerOuterStyle
                }, $d4J5n.createElement("div", {
                    style: this._containerTopStyle
                }, this._renderTopLeftGrid(rest), this._renderTopRightGrid($db76b36c2d03eec2$var$_objectSpread({}, rest, {
                    onScroll: onScroll,
                    scrollLeft: scrollLeft
                }))), $d4J5n.createElement("div", {
                    style: this._containerBottomStyle
                }, this._renderBottomLeftGrid($db76b36c2d03eec2$var$_objectSpread({}, rest, {
                    onScroll: onScroll,
                    scrollTop: scrollTop
                })), this._renderBottomRightGrid($db76b36c2d03eec2$var$_objectSpread({}, rest, {
                    onScroll: onScroll,
                    onSectionRendered: onSectionRendered,
                    scrollLeft: scrollLeft,
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow,
                    scrollTop: scrollTop
                }))));
            }
        },
        {
            key: "_getBottomGridHeight",
            value: function _getBottomGridHeight(props) {
                var height = props.height;
                var topGridHeight = this._getTopGridHeight(props);
                return height - topGridHeight;
            }
        },
        {
            key: "_getLeftGridWidth",
            value: function _getLeftGridWidth(props) {
                var fixedColumnCount = props.fixedColumnCount, columnWidth = props.columnWidth;
                if (this._leftGridWidth == null) {
                    if (typeof columnWidth === 'function') {
                        var leftGridWidth = 0;
                        for(var index = 0; index < fixedColumnCount; index++)leftGridWidth += columnWidth({
                            index: index
                        });
                        this._leftGridWidth = leftGridWidth;
                    } else this._leftGridWidth = columnWidth * fixedColumnCount;
                }
                return this._leftGridWidth;
            }
        },
        {
            key: "_getRightGridWidth",
            value: function _getRightGridWidth(props) {
                var width = props.width;
                var leftGridWidth = this._getLeftGridWidth(props);
                return width - leftGridWidth;
            }
        },
        {
            key: "_getTopGridHeight",
            value: function _getTopGridHeight(props) {
                var fixedRowCount = props.fixedRowCount, rowHeight = props.rowHeight;
                if (this._topGridHeight == null) {
                    if (typeof rowHeight === 'function') {
                        var topGridHeight = 0;
                        for(var index = 0; index < fixedRowCount; index++)topGridHeight += rowHeight({
                            index: index
                        });
                        this._topGridHeight = topGridHeight;
                    } else this._topGridHeight = rowHeight * fixedRowCount;
                }
                return this._topGridHeight;
            }
        },
        {
            key: "_handleInvalidatedGridSize",
            value: function _handleInvalidatedGridSize() {
                if (typeof this._deferredInvalidateColumnIndex === 'number') {
                    var columnIndex = this._deferredInvalidateColumnIndex;
                    var rowIndex = this._deferredInvalidateRowIndex;
                    this._deferredInvalidateColumnIndex = null;
                    this._deferredInvalidateRowIndex = null;
                    this.recomputeGridSize({
                        columnIndex: columnIndex,
                        rowIndex: rowIndex
                    });
                    this.forceUpdate();
                }
            }
        },
        {
            key: "_maybeCalculateCachedStyles",
            value: function _maybeCalculateCachedStyles(resetAll) {
                var _this$props9 = this.props, columnWidth = _this$props9.columnWidth, enableFixedColumnScroll = _this$props9.enableFixedColumnScroll, enableFixedRowScroll = _this$props9.enableFixedRowScroll, height = _this$props9.height, fixedColumnCount = _this$props9.fixedColumnCount, fixedRowCount = _this$props9.fixedRowCount, rowHeight = _this$props9.rowHeight, style = _this$props9.style, styleBottomLeftGrid = _this$props9.styleBottomLeftGrid, styleBottomRightGrid = _this$props9.styleBottomRightGrid, styleTopLeftGrid = _this$props9.styleTopLeftGrid, styleTopRightGrid = _this$props9.styleTopRightGrid, width = _this$props9.width;
                var sizeChange = resetAll || height !== this._lastRenderedHeight || width !== this._lastRenderedWidth;
                var leftSizeChange = resetAll || columnWidth !== this._lastRenderedColumnWidth || fixedColumnCount !== this._lastRenderedFixedColumnCount;
                var topSizeChange = resetAll || fixedRowCount !== this._lastRenderedFixedRowCount || rowHeight !== this._lastRenderedRowHeight;
                if (resetAll || sizeChange || style !== this._lastRenderedStyle) this._containerOuterStyle = $db76b36c2d03eec2$var$_objectSpread({
                    height: height,
                    overflow: 'visible',
                    // Let :focus outline show through
                    width: width
                }, style);
                if (resetAll || sizeChange || topSizeChange) {
                    this._containerTopStyle = {
                        height: this._getTopGridHeight(this.props),
                        position: 'relative',
                        width: width
                    };
                    this._containerBottomStyle = {
                        height: height - this._getTopGridHeight(this.props),
                        overflow: 'visible',
                        // Let :focus outline show through
                        position: 'relative',
                        width: width
                    };
                }
                if (resetAll || styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid) this._bottomLeftGridStyle = $db76b36c2d03eec2$var$_objectSpread({
                    left: 0,
                    overflowX: 'hidden',
                    overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
                    position: 'absolute'
                }, styleBottomLeftGrid);
                if (resetAll || leftSizeChange || styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid) this._bottomRightGridStyle = $db76b36c2d03eec2$var$_objectSpread({
                    left: this._getLeftGridWidth(this.props),
                    position: 'absolute'
                }, styleBottomRightGrid);
                if (resetAll || styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) this._topLeftGridStyle = $db76b36c2d03eec2$var$_objectSpread({
                    left: 0,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    position: 'absolute',
                    top: 0
                }, styleTopLeftGrid);
                if (resetAll || leftSizeChange || styleTopRightGrid !== this._lastRenderedStyleTopRightGrid) this._topRightGridStyle = $db76b36c2d03eec2$var$_objectSpread({
                    left: this._getLeftGridWidth(this.props),
                    overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
                    overflowY: 'hidden',
                    position: 'absolute',
                    top: 0
                }, styleTopRightGrid);
                this._lastRenderedColumnWidth = columnWidth;
                this._lastRenderedFixedColumnCount = fixedColumnCount;
                this._lastRenderedFixedRowCount = fixedRowCount;
                this._lastRenderedHeight = height;
                this._lastRenderedRowHeight = rowHeight;
                this._lastRenderedStyle = style;
                this._lastRenderedStyleBottomLeftGrid = styleBottomLeftGrid;
                this._lastRenderedStyleBottomRightGrid = styleBottomRightGrid;
                this._lastRenderedStyleTopLeftGrid = styleTopLeftGrid;
                this._lastRenderedStyleTopRightGrid = styleTopRightGrid;
                this._lastRenderedWidth = width;
            }
        },
        {
            key: "_prepareForRender",
            value: function _prepareForRender() {
                if (this._lastRenderedColumnWidth !== this.props.columnWidth || this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount) this._leftGridWidth = null;
                if (this._lastRenderedFixedRowCount !== this.props.fixedRowCount || this._lastRenderedRowHeight !== this.props.rowHeight) this._topGridHeight = null;
                this._maybeCalculateCachedStyles();
                this._lastRenderedColumnWidth = this.props.columnWidth;
                this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
                this._lastRenderedFixedRowCount = this.props.fixedRowCount;
                this._lastRenderedRowHeight = this.props.rowHeight;
            }
        },
        {
            key: "_renderBottomLeftGrid",
            value: function _renderBottomLeftGrid(props) {
                var enableFixedColumnScroll = props.enableFixedColumnScroll, fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount, rowCount = props.rowCount, hideBottomLeftGridScrollbar = props.hideBottomLeftGridScrollbar;
                var showVerticalScrollbar = this.state.showVerticalScrollbar;
                if (!fixedColumnCount) return null;
                var additionalRowCount = showVerticalScrollbar ? 1 : 0, height = this._getBottomGridHeight(props), width = this._getLeftGridWidth(props), scrollbarSize = this.state.showVerticalScrollbar ? this.state.scrollbarSize : 0, gridWidth = hideBottomLeftGridScrollbar ? width + scrollbarSize : width;
                var bottomLeftGrid = $d4J5n.createElement((0, $l9w6Y.default), (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({}, props, {
                    cellRenderer: this._cellRendererBottomLeftGrid,
                    className: this.props.classNameBottomLeftGrid,
                    columnCount: fixedColumnCount,
                    deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
                    height: height,
                    onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
                    ref: this._bottomLeftGridRef,
                    rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
                    rowHeight: this._rowHeightBottomGrid,
                    style: this._bottomLeftGridStyle,
                    tabIndex: null,
                    width: gridWidth
                }));
                if (hideBottomLeftGridScrollbar) return $d4J5n.createElement("div", {
                    className: "BottomLeftGrid_ScrollWrapper",
                    style: $db76b36c2d03eec2$var$_objectSpread({}, this._bottomLeftGridStyle, {
                        height: height,
                        width: width,
                        overflowY: 'hidden'
                    })
                }, bottomLeftGrid);
                return bottomLeftGrid;
            }
        },
        {
            key: "_renderBottomRightGrid",
            value: function _renderBottomRightGrid(props) {
                var columnCount = props.columnCount, fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount, rowCount = props.rowCount, scrollToColumn = props.scrollToColumn, scrollToRow = props.scrollToRow;
                return $d4J5n.createElement((0, $l9w6Y.default), (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({}, props, {
                    cellRenderer: this._cellRendererBottomRightGrid,
                    className: this.props.classNameBottomRightGrid,
                    columnCount: Math.max(0, columnCount - fixedColumnCount),
                    columnWidth: this._columnWidthRightGrid,
                    deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
                    height: this._getBottomGridHeight(props),
                    onScroll: this._onScroll,
                    onScrollbarPresenceChange: this._onScrollbarPresenceChange,
                    ref: this._bottomRightGridRef,
                    rowCount: Math.max(0, rowCount - fixedRowCount),
                    rowHeight: this._rowHeightBottomGrid,
                    scrollToColumn: scrollToColumn - fixedColumnCount,
                    scrollToRow: scrollToRow - fixedRowCount,
                    style: this._bottomRightGridStyle,
                    width: this._getRightGridWidth(props)
                }));
            }
        },
        {
            key: "_renderTopLeftGrid",
            value: function _renderTopLeftGrid(props) {
                var fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount;
                if (!fixedColumnCount || !fixedRowCount) return null;
                return $d4J5n.createElement((0, $l9w6Y.default), (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({}, props, {
                    className: this.props.classNameTopLeftGrid,
                    columnCount: fixedColumnCount,
                    height: this._getTopGridHeight(props),
                    ref: this._topLeftGridRef,
                    rowCount: fixedRowCount,
                    style: this._topLeftGridStyle,
                    tabIndex: null,
                    width: this._getLeftGridWidth(props)
                }));
            }
        },
        {
            key: "_renderTopRightGrid",
            value: function _renderTopRightGrid(props) {
                var columnCount = props.columnCount, enableFixedRowScroll = props.enableFixedRowScroll, fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount, scrollLeft = props.scrollLeft, hideTopRightGridScrollbar = props.hideTopRightGridScrollbar;
                var _this$state5 = this.state, showHorizontalScrollbar = _this$state5.showHorizontalScrollbar, scrollbarSize = _this$state5.scrollbarSize;
                if (!fixedRowCount) return null;
                var additionalColumnCount = showHorizontalScrollbar ? 1 : 0, height = this._getTopGridHeight(props), width = this._getRightGridWidth(props), additionalHeight = showHorizontalScrollbar ? scrollbarSize : 0;
                var gridHeight = height, style = this._topRightGridStyle;
                if (hideTopRightGridScrollbar) {
                    gridHeight = height + additionalHeight;
                    style = $db76b36c2d03eec2$var$_objectSpread({}, this._topRightGridStyle, {
                        left: 0
                    });
                }
                var topRightGrid = $d4J5n.createElement((0, $l9w6Y.default), (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({}, props, {
                    cellRenderer: this._cellRendererTopRightGrid,
                    className: this.props.classNameTopRightGrid,
                    columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
                    columnWidth: this._columnWidthRightGrid,
                    deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
                    height: gridHeight,
                    onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
                    ref: this._topRightGridRef,
                    rowCount: fixedRowCount,
                    scrollLeft: scrollLeft,
                    style: style,
                    tabIndex: null,
                    width: width
                }));
                if (hideTopRightGridScrollbar) return $d4J5n.createElement("div", {
                    className: "TopRightGrid_ScrollWrapper",
                    style: $db76b36c2d03eec2$var$_objectSpread({}, this._topRightGridStyle, {
                        height: height,
                        width: width,
                        overflowX: 'hidden'
                    })
                }, topRightGrid);
                return topRightGrid;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) return {
                    scrollLeft: nextProps.scrollLeft != null && nextProps.scrollLeft >= 0 ? nextProps.scrollLeft : prevState.scrollLeft,
                    scrollTop: nextProps.scrollTop != null && nextProps.scrollTop >= 0 ? nextProps.scrollTop : prevState.scrollTop
                };
                return null;
            }
        }
    ]);
    return MultiGrid;
}($d4J5n.PureComponent);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($db76b36c2d03eec2$var$MultiGrid, "defaultProps", {
    classNameBottomLeftGrid: '',
    classNameBottomRightGrid: '',
    classNameTopLeftGrid: '',
    classNameTopRightGrid: '',
    enableFixedColumnScroll: false,
    enableFixedRowScroll: false,
    fixedColumnCount: 0,
    fixedRowCount: 0,
    scrollToColumn: -1,
    scrollToRow: -1,
    style: {},
    styleBottomLeftGrid: {},
    styleBottomRightGrid: {},
    styleTopLeftGrid: {},
    styleTopRightGrid: {},
    hideTopRightGridScrollbar: false,
    hideBottomLeftGridScrollbar: false
});
$db76b36c2d03eec2$var$MultiGrid.propTypes = {};
(0, $32PuH.polyfill)($db76b36c2d03eec2$var$MultiGrid);
var $db76b36c2d03eec2$export$2e2bcd8739ae039 = $db76b36c2d03eec2$var$MultiGrid;

});
parcelRegister("lhSsn", function(module, exports) {

$parcel$export(module.exports, "default", () => $f7f56d75e1002e3d$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $6nVSY = parcelRequire("6nVSY");
parcelRequire("fFHlk");
/**
 * Caches measurements for a given cell.
 */ var $f7f56d75e1002e3d$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    function CellMeasurerCacheDecorator() {
        var _this = this;
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, CellMeasurerCacheDecorator);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_cellMeasurerCache", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_columnIndexOffset", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "_rowIndexOffset", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "columnWidth", function(_ref) {
            var index = _ref.index;
            _this._cellMeasurerCache.columnWidth({
                index: index + _this._columnIndexOffset
            });
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(this, "rowHeight", function(_ref2) {
            var index = _ref2.index;
            _this._cellMeasurerCache.rowHeight({
                index: index + _this._rowIndexOffset
            });
        });
        var cellMeasurerCache = params.cellMeasurerCache, _params$columnIndexOf = params.columnIndexOffset, columnIndexOffset = _params$columnIndexOf === void 0 ? 0 : _params$columnIndexOf, _params$rowIndexOffse = params.rowIndexOffset, rowIndexOffset = _params$rowIndexOffse === void 0 ? 0 : _params$rowIndexOffse;
        this._cellMeasurerCache = cellMeasurerCache;
        this._columnIndexOffset = columnIndexOffset;
        this._rowIndexOffset = rowIndexOffset;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(CellMeasurerCacheDecorator, [
        {
            key: "clear",
            value: function clear(rowIndex, columnIndex) {
                this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
            }
        },
        {
            key: "clearAll",
            value: function clearAll() {
                this._cellMeasurerCache.clearAll();
            }
        },
        {
            key: "hasFixedHeight",
            value: function hasFixedHeight() {
                return this._cellMeasurerCache.hasFixedHeight();
            }
        },
        {
            key: "hasFixedWidth",
            value: function hasFixedWidth() {
                return this._cellMeasurerCache.hasFixedWidth();
            }
        },
        {
            key: "getHeight",
            value: function getHeight(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
            }
        },
        {
            key: "getWidth",
            value: function getWidth(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
            }
        },
        {
            key: "has",
            value: function has(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
            }
        },
        {
            key: "set",
            value: function set(rowIndex, columnIndex, width, height) {
                this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
            }
        },
        {
            key: "defaultHeight",
            get: function get() {
                return this._cellMeasurerCache.defaultHeight;
            }
        },
        {
            key: "defaultWidth",
            get: function get() {
                return this._cellMeasurerCache.defaultWidth;
            }
        }
    ]);
    return CellMeasurerCacheDecorator;
}();

});



parcelRegister("6feUC", function(module, exports) {

var $aXJyw = parcelRequire("aXJyw");
var $48bfb6063eb725db$export$2e2bcd8739ae039 = (0, $aXJyw.default);

});
parcelRegister("aXJyw", function(module, exports) {

$parcel$export(module.exports, "default", () => $7fb2c086986c87da$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");


var $d4J5n = parcelRequire("d4J5n");
/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */ var $7fb2c086986c87da$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(ScrollSync, _React$PureComponent);
    function ScrollSync(props, context) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, ScrollSync);
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(ScrollSync).call(this, props, context));
        _this.state = {
            clientHeight: 0,
            clientWidth: 0,
            scrollHeight: 0,
            scrollLeft: 0,
            scrollTop: 0,
            scrollWidth: 0
        };
        _this._onScroll = _this._onScroll.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(ScrollSync, [
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                var _this$state = this.state, clientHeight = _this$state.clientHeight, clientWidth = _this$state.clientWidth, scrollHeight = _this$state.scrollHeight, scrollLeft = _this$state.scrollLeft, scrollTop = _this$state.scrollTop, scrollWidth = _this$state.scrollWidth;
                return children({
                    clientHeight: clientHeight,
                    clientWidth: clientWidth,
                    onScroll: this._onScroll,
                    scrollHeight: scrollHeight,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    scrollWidth: scrollWidth
                });
            }
        },
        {
            key: "_onScroll",
            value: function _onScroll(_ref) {
                var clientHeight = _ref.clientHeight, clientWidth = _ref.clientWidth, scrollHeight = _ref.scrollHeight, scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, scrollWidth = _ref.scrollWidth;
                this.setState({
                    clientHeight: clientHeight,
                    clientWidth: clientWidth,
                    scrollHeight: scrollHeight,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    scrollWidth: scrollWidth
                });
            }
        }
    ]);
    return ScrollSync;
}($d4J5n.PureComponent);
$7fb2c086986c87da$export$2e2bcd8739ae039.propTypes = {};

});


parcelRegister("390oa", function(module, exports) {

$parcel$export(module.exports, "Column", () => (parcelRequire("lmYCA")).default);
$parcel$export(module.exports, "SortDirection", () => (parcelRequire("6K0av")).default);
$parcel$export(module.exports, "Table", () => (parcelRequire("kQwfX")).default);

var $1OAlH = parcelRequire("1OAlH");

var $61sFO = parcelRequire("61sFO");

var $kmnov = parcelRequire("kmnov");

var $3QxE2 = parcelRequire("3QxE2");

var $7YnMY = parcelRequire("7YnMY");

var $10QKb = parcelRequire("10QKb");

var $lmYCA = parcelRequire("lmYCA");

var $6K0av = parcelRequire("6K0av");

var $aX8bo = parcelRequire("aX8bo");

var $kQwfX = parcelRequire("kQwfX");
var $24a283933fb5f446$export$2e2bcd8739ae039 = (0, $kQwfX.default);

});
parcelRegister("1OAlH", function(module, exports) {
function $1526a819c61defc6$export$2e2bcd8739ae039(sortCallback) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, defaultSortBy = _ref.defaultSortBy, _ref$defaultSortDirec = _ref.defaultSortDirection, defaultSortDirection = _ref$defaultSortDirec === void 0 ? {} : _ref$defaultSortDirec;
    if (!sortCallback) throw Error("Required parameter \"sortCallback\" not specified");
    var sortBy = defaultSortBy || [];
    var sortDirection = {};
    sortBy.forEach(function(dataKey) {
        sortDirection[dataKey] = defaultSortDirection[dataKey] !== undefined ? defaultSortDirection[dataKey] : 'ASC';
    });
    function sort(_ref2) {
        var defaultSortDirection = _ref2.defaultSortDirection, event = _ref2.event, dataKey = _ref2.sortBy;
        if (event.shiftKey) {
            // Shift + click appends a column to existing criteria
            if (sortDirection[dataKey] !== undefined) sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
            else {
                sortDirection[dataKey] = defaultSortDirection;
                sortBy.push(dataKey);
            }
        } else if (event.ctrlKey || event.metaKey) {
            // Control + click removes column from sort (if pressent)
            var index = sortBy.indexOf(dataKey);
            if (index >= 0) {
                sortBy.splice(index, 1);
                delete sortDirection[dataKey];
            }
        } else {
            // Clear sortBy array of all non-selected keys
            sortBy.length = 0;
            sortBy.push(dataKey); // Clear sortDirection object of all non-selected keys
            var sortDirectionKeys = Object.keys(sortDirection);
            sortDirectionKeys.forEach(function(key) {
                if (key !== dataKey) delete sortDirection[key];
            }); // If key is already selected, reverse sort direction.
            // Else, set sort direction to default direction.
            if (sortDirection[dataKey] !== undefined) sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
            else sortDirection[dataKey] = defaultSortDirection;
        } // Notify application code
        sortCallback({
            sortBy: sortBy,
            sortDirection: sortDirection
        });
    }
    return {
        sort: sort,
        sortBy: sortBy,
        sortDirection: sortDirection
    };
}

});

parcelRegister("61sFO", function(module, exports) {

$parcel$export(module.exports, "default", () => $462913ff790d3757$export$2e2bcd8739ae039);
/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */ parcelRequire("afbCU");
function $462913ff790d3757$export$2e2bcd8739ae039(_ref) {
    var dataKey = _ref.dataKey, rowData = _ref.rowData;
    if (typeof rowData.get === 'function') return rowData.get(dataKey);
    else return rowData[dataKey];
}

});
parcelRegister("afbCU", function(module, exports) {

var $775452e142d94446$export$6c06e2d2e5625b4a = null;
var $775452e142d94446$export$629e389fcb95c4cb = null;
var $775452e142d94446$export$175128f55a6cb4f9 = null;
var $775452e142d94446$export$4012a7792a488b95 = null;
var $775452e142d94446$export$3a716df7746a4f4e = null;

});


parcelRegister("kmnov", function(module, exports) {

$parcel$export(module.exports, "default", () => $ed2802594c9bbf38$export$2e2bcd8739ae039);
/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */ parcelRequire("afbCU");
function $ed2802594c9bbf38$export$2e2bcd8739ae039(_ref) {
    var cellData = _ref.cellData;
    if (cellData == null) return '';
    else return String(cellData);
}

});

parcelRegister("3QxE2", function(module, exports) {

$parcel$export(module.exports, "default", () => $2cd053946a2f507e$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");
parcelRequire("afbCU");

function $2cd053946a2f507e$export$2e2bcd8739ae039(_ref) {
    var className = _ref.className, columns = _ref.columns, style = _ref.style;
    return $d4J5n.createElement("div", {
        className: className,
        role: "row",
        style: style
    }, columns);
}
$2cd053946a2f507e$export$2e2bcd8739ae039.propTypes = null;

});

parcelRegister("7YnMY", function(module, exports) {

$parcel$export(module.exports, "default", () => $5ce096ff32a82508$export$2e2bcd8739ae039);

var $d4J5n = parcelRequire("d4J5n");

var $aX8bo = parcelRequire("aX8bo");
parcelRequire("afbCU");

function $5ce096ff32a82508$export$2e2bcd8739ae039(_ref) {
    var dataKey = _ref.dataKey, label = _ref.label, sortBy = _ref.sortBy, sortDirection = _ref.sortDirection;
    var showSortIndicator = sortBy === dataKey;
    var children = [
        $d4J5n.createElement("span", {
            className: "ReactVirtualized__Table__headerTruncatedText",
            key: "label",
            title: typeof label === 'string' ? label : null
        }, label)
    ];
    if (showSortIndicator) children.push($d4J5n.createElement((0, $aX8bo.default), {
        key: "SortIndicator",
        sortDirection: sortDirection
    }));
    return children;
}
$5ce096ff32a82508$export$2e2bcd8739ae039.propTypes = null;

});
parcelRegister("aX8bo", function(module, exports) {

$parcel$export(module.exports, "default", () => $7f95c2fc329930ca$export$2e2bcd8739ae039);

var $h0TGs = parcelRequire("h0TGs");


var $d4J5n = parcelRequire("d4J5n");

var $6K0av = parcelRequire("6K0av");
function $7f95c2fc329930ca$export$2e2bcd8739ae039(_ref) {
    var sortDirection = _ref.sortDirection;
    var classNames = (0, $h0TGs.default)('ReactVirtualized__Table__sortableHeaderIcon', {
        'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === (0, $6K0av.default).ASC,
        'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === (0, $6K0av.default).DESC
    });
    return $d4J5n.createElement("svg", {
        className: classNames,
        width: 18,
        height: 18,
        viewBox: "0 0 24 24"
    }, sortDirection === (0, $6K0av.default).ASC ? $d4J5n.createElement("path", {
        d: "M7 14l5-5 5 5z"
    }) : $d4J5n.createElement("path", {
        d: "M7 10l5 5 5-5z"
    }), $d4J5n.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
    }));
}
$7f95c2fc329930ca$export$2e2bcd8739ae039.propTypes = {};

});
parcelRegister("6K0av", function(module, exports) {

$parcel$export(module.exports, "default", () => $4e872b62bf78d3b7$export$2e2bcd8739ae039);
var $4e872b62bf78d3b7$var$SortDirection = {
    /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */ ASC: 'ASC',
    /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */ DESC: 'DESC'
};
var $4e872b62bf78d3b7$export$2e2bcd8739ae039 = $4e872b62bf78d3b7$var$SortDirection;

});



parcelRegister("10QKb", function(module, exports) {

$parcel$export(module.exports, "default", () => $0bceb4642ca95f38$export$2e2bcd8739ae039);

var $e5Cx7 = parcelRequire("e5Cx7");

var $d4J5n = parcelRequire("d4J5n");
parcelRequire("afbCU");

function $0bceb4642ca95f38$export$2e2bcd8739ae039(_ref) {
    var className = _ref.className, columns = _ref.columns, index = _ref.index, key = _ref.key, onRowClick = _ref.onRowClick, onRowDoubleClick = _ref.onRowDoubleClick, onRowMouseOut = _ref.onRowMouseOut, onRowMouseOver = _ref.onRowMouseOver, onRowRightClick = _ref.onRowRightClick, rowData = _ref.rowData, style = _ref.style;
    var a11yProps = {
        'aria-rowindex': index + 1
    };
    if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
        a11yProps['aria-label'] = 'row';
        a11yProps.tabIndex = 0;
        if (onRowClick) a11yProps.onClick = function(event) {
            return onRowClick({
                event: event,
                index: index,
                rowData: rowData
            });
        };
        if (onRowDoubleClick) a11yProps.onDoubleClick = function(event) {
            return onRowDoubleClick({
                event: event,
                index: index,
                rowData: rowData
            });
        };
        if (onRowMouseOut) a11yProps.onMouseOut = function(event) {
            return onRowMouseOut({
                event: event,
                index: index,
                rowData: rowData
            });
        };
        if (onRowMouseOver) a11yProps.onMouseOver = function(event) {
            return onRowMouseOver({
                event: event,
                index: index,
                rowData: rowData
            });
        };
        if (onRowRightClick) a11yProps.onContextMenu = function(event) {
            return onRowRightClick({
                event: event,
                index: index,
                rowData: rowData
            });
        };
    }
    return $d4J5n.createElement("div", (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({}, a11yProps, {
        className: className,
        key: key,
        role: "row",
        style: style
    }), columns);
}
$0bceb4642ca95f38$export$2e2bcd8739ae039.propTypes = null;

});

parcelRegister("lmYCA", function(module, exports) {

$parcel$export(module.exports, "default", () => $f8eaad35a44e6b8c$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");


var $d4J5n = parcelRequire("d4J5n");

var $7YnMY = parcelRequire("7YnMY");

var $kmnov = parcelRequire("kmnov");

var $61sFO = parcelRequire("61sFO");

var $6K0av = parcelRequire("6K0av");
/**
 * Describes the header and cell contents of a table column.
 */ var $f8eaad35a44e6b8c$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_React$Component) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(Column, _React$Component);
    function Column() {
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, Column);
        return (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(Column).apply(this, arguments));
    }
    return Column;
}($d4J5n.Component);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($f8eaad35a44e6b8c$export$2e2bcd8739ae039, "defaultProps", {
    cellDataGetter: (0, $61sFO.default),
    cellRenderer: (0, $kmnov.default),
    defaultSortDirection: (0, $6K0av.default).ASC,
    flexGrow: 0,
    flexShrink: 1,
    headerRenderer: (0, $7YnMY.default),
    style: {}
});
$f8eaad35a44e6b8c$export$2e2bcd8739ae039.propTypes = {};

});

parcelRegister("kQwfX", function(module, exports) {

$parcel$export(module.exports, "default", () => $f2d1af7146ffd407$export$2e2bcd8739ae039);

var $e5Cx7 = parcelRequire("e5Cx7");

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");

var $h0TGs = parcelRequire("h0TGs");
parcelRequire("lmYCA");


var $d4J5n = parcelRequire("d4J5n");

var $66G66 = parcelRequire("66G66");
parcelRequire("fzHd5");
var $fjyHm = parcelRequire("fjyHm");
var $l9w6Y = parcelRequire("l9w6Y");

var $10QKb = parcelRequire("10QKb");

var $3QxE2 = parcelRequire("3QxE2");

var $6K0av = parcelRequire("6K0av");
function $f2d1af7146ffd407$var$ownKeys(object, enumerableOnly) {
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
function $f2d1af7146ffd407$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $f2d1af7146ffd407$var$ownKeys(source, true).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $f2d1af7146ffd407$var$ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */ var $f2d1af7146ffd407$export$2e2bcd8739ae039 = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(Table, _React$PureComponent);
    function Table(props) {
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, Table);
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(Table).call(this, props));
        _this.state = {
            scrollbarWidth: 0
        };
        _this._createColumn = _this._createColumn.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        _this._createRow = _this._createRow.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        _this._onScroll = _this._onScroll.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        _this._onSectionRendered = _this._onSectionRendered.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        _this._setRef = _this._setRef.bind((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this));
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(Table, [
        {
            key: "forceUpdateGrid",
            value: function forceUpdateGrid() {
                if (this.Grid) this.Grid.forceUpdate();
            }
        },
        {
            key: "getOffsetForRow",
            value: function getOffsetForRow(_ref) {
                var alignment = _ref.alignment, index = _ref.index;
                if (this.Grid) {
                    var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
                        alignment: alignment,
                        rowIndex: index
                    }), scrollTop = _this$Grid$getOffsetF.scrollTop;
                    return scrollTop;
                }
                return 0;
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender(_ref2) {
                var columnIndex = _ref2.columnIndex, rowIndex = _ref2.rowIndex;
                if (this.Grid) this.Grid.invalidateCellSizeAfterRender({
                    rowIndex: rowIndex,
                    columnIndex: columnIndex
                });
            }
        },
        {
            key: "measureAllRows",
            value: function measureAllRows() {
                if (this.Grid) this.Grid.measureAllCells();
            }
        },
        {
            key: "recomputeGridSize",
            value: function recomputeGridSize() {
                var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref3$columnIndex = _ref3.columnIndex, columnIndex = _ref3$columnIndex === void 0 ? 0 : _ref3$columnIndex, _ref3$rowIndex = _ref3.rowIndex, rowIndex = _ref3$rowIndex === void 0 ? 0 : _ref3$rowIndex;
                if (this.Grid) this.Grid.recomputeGridSize({
                    rowIndex: rowIndex,
                    columnIndex: columnIndex
                });
            }
        },
        {
            key: "recomputeRowHeights",
            value: function recomputeRowHeights() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.recomputeGridSize({
                    rowIndex: index
                });
            }
        },
        {
            key: "scrollToPosition",
            value: function scrollToPosition() {
                var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.scrollToPosition({
                    scrollTop: scrollTop
                });
            }
        },
        {
            key: "scrollToRow",
            value: function scrollToRow() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.scrollToCell({
                    columnIndex: 0,
                    rowIndex: index
                });
            }
        },
        {
            key: "getScrollbarWidth",
            value: function getScrollbarWidth() {
                if (this.Grid) {
                    var _Grid = (0, $66G66.findDOMNode)(this.Grid);
                    var clientWidth = _Grid.clientWidth || 0;
                    var offsetWidth = _Grid.offsetWidth || 0;
                    return offsetWidth - clientWidth;
                }
                return 0;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._setScrollbarWidth();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this._setScrollbarWidth();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, children = _this$props.children, className = _this$props.className, disableHeader = _this$props.disableHeader, gridClassName = _this$props.gridClassName, gridStyle = _this$props.gridStyle, headerHeight = _this$props.headerHeight, headerRowRenderer = _this$props.headerRowRenderer, height = _this$props.height, id = _this$props.id, noRowsRenderer = _this$props.noRowsRenderer, rowClassName = _this$props.rowClassName, rowStyle = _this$props.rowStyle, scrollToIndex = _this$props.scrollToIndex, style = _this$props.style, width = _this$props.width;
                var scrollbarWidth = this.state.scrollbarWidth;
                var availableRowsHeight = disableHeader ? height : height - headerHeight;
                var rowClass = typeof rowClassName === 'function' ? rowClassName({
                    index: -1
                }) : rowClassName;
                var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
                    index: -1
                }) : rowStyle; // Precompute and cache column styles before rendering rows and columns to speed things up
                this._cachedColumnStyles = [];
                $d4J5n.Children.toArray(children).forEach(function(column, index) {
                    var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);
                    _this2._cachedColumnStyles[index] = $f2d1af7146ffd407$var$_objectSpread({
                        overflow: 'hidden'
                    }, flexStyles);
                }); // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
                // This is done because Grid is a pure component and won't update unless its properties or state has changed.
                // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
                return $d4J5n.createElement("div", {
                    "aria-label": this.props['aria-label'],
                    "aria-labelledby": this.props['aria-labelledby'],
                    "aria-colcount": $d4J5n.Children.toArray(children).length,
                    "aria-rowcount": this.props.rowCount,
                    className: (0, $h0TGs.default)('ReactVirtualized__Table', className),
                    id: id,
                    role: "grid",
                    style: style
                }, !disableHeader && headerRowRenderer({
                    className: (0, $h0TGs.default)('ReactVirtualized__Table__headerRow', rowClass),
                    columns: this._getHeaderColumns(),
                    style: $f2d1af7146ffd407$var$_objectSpread({
                        height: headerHeight,
                        overflow: 'hidden',
                        paddingRight: scrollbarWidth,
                        width: width
                    }, rowStyleObject)
                }), $d4J5n.createElement((0, $l9w6Y.default), (0, (/*@__PURE__*/$parcel$interopDefault($e5Cx7)))({}, this.props, {
                    "aria-readonly": null,
                    autoContainerWidth: true,
                    className: (0, $h0TGs.default)('ReactVirtualized__Table__Grid', gridClassName),
                    cellRenderer: this._createRow,
                    columnWidth: width,
                    columnCount: 1,
                    height: availableRowsHeight,
                    id: undefined,
                    noContentRenderer: noRowsRenderer,
                    onScroll: this._onScroll,
                    onSectionRendered: this._onSectionRendered,
                    ref: this._setRef,
                    role: "rowgroup",
                    scrollbarWidth: scrollbarWidth,
                    scrollToRow: scrollToIndex,
                    style: $f2d1af7146ffd407$var$_objectSpread({}, gridStyle, {
                        overflowX: 'hidden'
                    })
                })));
            }
        },
        {
            key: "_createColumn",
            value: function _createColumn(_ref4) {
                var column = _ref4.column, columnIndex = _ref4.columnIndex, isScrolling = _ref4.isScrolling, parent = _ref4.parent, rowData = _ref4.rowData, rowIndex = _ref4.rowIndex;
                var onColumnClick = this.props.onColumnClick;
                var _column$props = column.props, cellDataGetter = _column$props.cellDataGetter, cellRenderer = _column$props.cellRenderer, className = _column$props.className, columnData = _column$props.columnData, dataKey = _column$props.dataKey, id = _column$props.id;
                var cellData = cellDataGetter({
                    columnData: columnData,
                    dataKey: dataKey,
                    rowData: rowData
                });
                var renderedCell = cellRenderer({
                    cellData: cellData,
                    columnData: columnData,
                    columnIndex: columnIndex,
                    dataKey: dataKey,
                    isScrolling: isScrolling,
                    parent: parent,
                    rowData: rowData,
                    rowIndex: rowIndex
                });
                var onClick = function onClick(event) {
                    onColumnClick && onColumnClick({
                        columnData: columnData,
                        dataKey: dataKey,
                        event: event
                    });
                };
                var style = this._cachedColumnStyles[columnIndex];
                var title = typeof renderedCell === 'string' ? renderedCell : null; // Avoid using object-spread syntax with multiple objects here,
                // Since it results in an extra method call to 'babel-runtime/helpers/extends'
                // See PR https://github.com/bvaughn/react-virtualized/pull/942
                return $d4J5n.createElement("div", {
                    "aria-colindex": columnIndex + 1,
                    "aria-describedby": id,
                    className: (0, $h0TGs.default)('ReactVirtualized__Table__rowColumn', className),
                    key: 'Row' + rowIndex + '-' + 'Col' + columnIndex,
                    onClick: onClick,
                    role: "gridcell",
                    style: style,
                    title: title
                }, renderedCell);
            }
        },
        {
            key: "_createHeader",
            value: function _createHeader(_ref5) {
                var column = _ref5.column, index = _ref5.index;
                var _this$props2 = this.props, headerClassName = _this$props2.headerClassName, headerStyle = _this$props2.headerStyle, onHeaderClick = _this$props2.onHeaderClick, sort = _this$props2.sort, sortBy = _this$props2.sortBy, sortDirection = _this$props2.sortDirection;
                var _column$props2 = column.props, columnData = _column$props2.columnData, dataKey = _column$props2.dataKey, defaultSortDirection = _column$props2.defaultSortDirection, disableSort = _column$props2.disableSort, headerRenderer = _column$props2.headerRenderer, id = _column$props2.id, label = _column$props2.label;
                var sortEnabled = !disableSort && sort;
                var classNames = (0, $h0TGs.default)('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
                    ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
                });
                var style = this._getFlexStyleForColumn(column, $f2d1af7146ffd407$var$_objectSpread({}, headerStyle, {}, column.props.headerStyle));
                var renderedHeader = headerRenderer({
                    columnData: columnData,
                    dataKey: dataKey,
                    disableSort: disableSort,
                    label: label,
                    sortBy: sortBy,
                    sortDirection: sortDirection
                });
                var headerOnClick, headerOnKeyDown, headerTabIndex, headerAriaSort, headerAriaLabel;
                if (sortEnabled || onHeaderClick) {
                    // If this is a sortable header, clicking it should update the table data's sorting.
                    var isFirstTimeSort = sortBy !== dataKey; // If this is the firstTime sort of this column, use the column default sort order.
                    // Otherwise, invert the direction of the sort.
                    var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === (0, $6K0av.default).DESC ? (0, $6K0av.default).ASC : (0, $6K0av.default).DESC;
                    var onClick = function onClick(event) {
                        sortEnabled && sort({
                            defaultSortDirection: defaultSortDirection,
                            event: event,
                            sortBy: dataKey,
                            sortDirection: newSortDirection
                        });
                        onHeaderClick && onHeaderClick({
                            columnData: columnData,
                            dataKey: dataKey,
                            event: event
                        });
                    };
                    var onKeyDown = function onKeyDown(event) {
                        if (event.key === 'Enter' || event.key === ' ') onClick(event);
                    };
                    headerAriaLabel = column.props['aria-label'] || label || dataKey;
                    headerAriaSort = 'none';
                    headerTabIndex = 0;
                    headerOnClick = onClick;
                    headerOnKeyDown = onKeyDown;
                }
                if (sortBy === dataKey) headerAriaSort = sortDirection === (0, $6K0av.default).ASC ? 'ascending' : 'descending';
                 // Avoid using object-spread syntax with multiple objects here,
                // Since it results in an extra method call to 'babel-runtime/helpers/extends'
                // See PR https://github.com/bvaughn/react-virtualized/pull/942
                return $d4J5n.createElement("div", {
                    "aria-label": headerAriaLabel,
                    "aria-sort": headerAriaSort,
                    className: classNames,
                    id: id,
                    key: 'Header-Col' + index,
                    onClick: headerOnClick,
                    onKeyDown: headerOnKeyDown,
                    role: "columnheader",
                    style: style,
                    tabIndex: headerTabIndex
                }, renderedHeader);
            }
        },
        {
            key: "_createRow",
            value: function _createRow(_ref6) {
                var _this3 = this;
                var index = _ref6.rowIndex, isScrolling = _ref6.isScrolling, key = _ref6.key, parent = _ref6.parent, style = _ref6.style;
                var _this$props3 = this.props, children = _this$props3.children, onRowClick = _this$props3.onRowClick, onRowDoubleClick = _this$props3.onRowDoubleClick, onRowRightClick = _this$props3.onRowRightClick, onRowMouseOver = _this$props3.onRowMouseOver, onRowMouseOut = _this$props3.onRowMouseOut, rowClassName = _this$props3.rowClassName, rowGetter = _this$props3.rowGetter, rowRenderer = _this$props3.rowRenderer, rowStyle = _this$props3.rowStyle;
                var scrollbarWidth = this.state.scrollbarWidth;
                var rowClass = typeof rowClassName === 'function' ? rowClassName({
                    index: index
                }) : rowClassName;
                var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
                    index: index
                }) : rowStyle;
                var rowData = rowGetter({
                    index: index
                });
                var columns = $d4J5n.Children.toArray(children).map(function(column, columnIndex) {
                    return _this3._createColumn({
                        column: column,
                        columnIndex: columnIndex,
                        isScrolling: isScrolling,
                        parent: parent,
                        rowData: rowData,
                        rowIndex: index,
                        scrollbarWidth: scrollbarWidth
                    });
                });
                var className = (0, $h0TGs.default)('ReactVirtualized__Table__row', rowClass);
                var flattenedStyle = $f2d1af7146ffd407$var$_objectSpread({}, style, {
                    height: this._getRowHeight(index),
                    overflow: 'hidden',
                    paddingRight: scrollbarWidth
                }, rowStyleObject);
                return rowRenderer({
                    className: className,
                    columns: columns,
                    index: index,
                    isScrolling: isScrolling,
                    key: key,
                    onRowClick: onRowClick,
                    onRowDoubleClick: onRowDoubleClick,
                    onRowRightClick: onRowRightClick,
                    onRowMouseOver: onRowMouseOver,
                    onRowMouseOut: onRowMouseOut,
                    rowData: rowData,
                    style: flattenedStyle
                });
            }
        },
        {
            key: "_getFlexStyleForColumn",
            value: function _getFlexStyleForColumn(column) {
                var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var flexValue = "".concat(column.props.flexGrow, " ").concat(column.props.flexShrink, " ").concat(column.props.width, "px");
                var style = $f2d1af7146ffd407$var$_objectSpread({}, customStyle, {
                    flex: flexValue,
                    msFlex: flexValue,
                    WebkitFlex: flexValue
                });
                if (column.props.maxWidth) style.maxWidth = column.props.maxWidth;
                if (column.props.minWidth) style.minWidth = column.props.minWidth;
                return style;
            }
        },
        {
            key: "_getHeaderColumns",
            value: function _getHeaderColumns() {
                var _this4 = this;
                var _this$props4 = this.props, children = _this$props4.children, disableHeader = _this$props4.disableHeader;
                var items = disableHeader ? [] : $d4J5n.Children.toArray(children);
                return items.map(function(column, index) {
                    return _this4._createHeader({
                        column: column,
                        index: index
                    });
                });
            }
        },
        {
            key: "_getRowHeight",
            value: function _getRowHeight(rowIndex) {
                var rowHeight = this.props.rowHeight;
                return typeof rowHeight === 'function' ? rowHeight({
                    index: rowIndex
                }) : rowHeight;
            }
        },
        {
            key: "_onScroll",
            value: function _onScroll(_ref7) {
                var clientHeight = _ref7.clientHeight, scrollHeight = _ref7.scrollHeight, scrollTop = _ref7.scrollTop;
                var onScroll = this.props.onScroll;
                onScroll({
                    clientHeight: clientHeight,
                    scrollHeight: scrollHeight,
                    scrollTop: scrollTop
                });
            }
        },
        {
            key: "_onSectionRendered",
            value: function _onSectionRendered(_ref8) {
                var rowOverscanStartIndex = _ref8.rowOverscanStartIndex, rowOverscanStopIndex = _ref8.rowOverscanStopIndex, rowStartIndex = _ref8.rowStartIndex, rowStopIndex = _ref8.rowStopIndex;
                var onRowsRendered = this.props.onRowsRendered;
                onRowsRendered({
                    overscanStartIndex: rowOverscanStartIndex,
                    overscanStopIndex: rowOverscanStopIndex,
                    startIndex: rowStartIndex,
                    stopIndex: rowStopIndex
                });
            }
        },
        {
            key: "_setRef",
            value: function _setRef(ref) {
                this.Grid = ref;
            }
        },
        {
            key: "_setScrollbarWidth",
            value: function _setScrollbarWidth() {
                var scrollbarWidth = this.getScrollbarWidth();
                this.setState({
                    scrollbarWidth: scrollbarWidth
                });
            }
        }
    ]);
    return Table;
}($d4J5n.PureComponent);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($f2d1af7146ffd407$export$2e2bcd8739ae039, "defaultProps", {
    disableHeader: false,
    estimatedRowSize: 30,
    headerHeight: 0,
    headerStyle: {},
    noRowsRenderer: function noRowsRenderer() {
        return null;
    },
    onRowsRendered: function onRowsRendered() {
        return null;
    },
    onScroll: function onScroll() {
        return null;
    },
    overscanIndicesGetter: (0, $fjyHm.default),
    overscanRowCount: 10,
    rowRenderer: (0, $10QKb.default),
    headerRowRenderer: (0, $3QxE2.default),
    rowStyle: {},
    scrollToAlignment: 'auto',
    scrollToIndex: -1,
    style: {}
});
$f2d1af7146ffd407$export$2e2bcd8739ae039.propTypes = {};

});


parcelRegister("azXEi", function(module, exports) {

var $6nY0j = parcelRequire("6nY0j");
var $7b3b714f50822e08$export$2e2bcd8739ae039 = (0, $6nY0j.default);

});
parcelRegister("6nY0j", function(module, exports) {

$parcel$export(module.exports, "default", () => $4a636f984dcb8077$export$2e2bcd8739ae039);

var $p8WsB = parcelRequire("p8WsB");

var $dHNFa = parcelRequire("dHNFa");

var $kAPye = parcelRequire("kAPye");

var $6741x = parcelRequire("6741x");

var $8HIaN = parcelRequire("8HIaN");

var $7oXxh = parcelRequire("7oXxh");

var $6nVSY = parcelRequire("6nVSY");

var $d4J5n = parcelRequire("d4J5n");

var $66G66 = parcelRequire("66G66");

var $f6GJI = parcelRequire("f6GJI");

var $eDRfc = parcelRequire("eDRfc");

var $jY1Bw = parcelRequire("jY1Bw");

var $4a636f984dcb8077$var$_class, $4a636f984dcb8077$var$_temp;
function $4a636f984dcb8077$var$ownKeys(object, enumerableOnly) {
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
function $4a636f984dcb8077$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $4a636f984dcb8077$var$ownKeys(source, true).forEach(function(key) {
            (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $4a636f984dcb8077$var$ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var $4a636f984dcb8077$export$4c2e2096c8dd4c46 = 150;
var $4a636f984dcb8077$var$getWindow = function getWindow() {
    return typeof window !== 'undefined' ? window : undefined;
};
var $4a636f984dcb8077$export$2e2bcd8739ae039 = ($4a636f984dcb8077$var$_temp = $4a636f984dcb8077$var$_class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, (/*@__PURE__*/$parcel$interopDefault($7oXxh)))(WindowScroller, _React$PureComponent);
    function WindowScroller() {
        var _getPrototypeOf2;
        var _this;
        (0, (/*@__PURE__*/$parcel$interopDefault($p8WsB)))(this, WindowScroller);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, (/*@__PURE__*/$parcel$interopDefault($kAPye)))(this, (_getPrototypeOf2 = (0, (/*@__PURE__*/$parcel$interopDefault($6741x)))(WindowScroller)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_window", $4a636f984dcb8077$var$getWindow());
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_isMounted", false);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_positionFromTop", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_positionFromLeft", 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_detectElementResize", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_child", void 0);
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "state", $4a636f984dcb8077$var$_objectSpread({}, (0, $eDRfc.getDimensions)(_this.props.scrollElement, _this.props), {
            isScrolling: false,
            scrollLeft: 0,
            scrollTop: 0
        }));
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_registerChild", function(element) {
            if (element && !(element instanceof Element)) console.warn('WindowScroller registerChild expects to be passed Element or null');
            _this._child = element;
            _this.updatePosition();
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onChildScroll", function(_ref) {
            var scrollTop = _ref.scrollTop;
            if (_this.state.scrollTop === scrollTop) return;
            var scrollElement = _this.props.scrollElement;
            if (scrollElement) {
                if (typeof scrollElement.scrollTo === 'function') scrollElement.scrollTo(0, scrollTop + _this._positionFromTop);
                else scrollElement.scrollTop = scrollTop + _this._positionFromTop;
            }
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_registerResizeListener", function(element) {
            if (element === window) window.addEventListener('resize', _this._onResize, false);
            else _this._detectElementResize.addResizeListener(element, _this._onResize);
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_unregisterResizeListener", function(element) {
            if (element === window) window.removeEventListener('resize', _this._onResize, false);
            else if (element) _this._detectElementResize.removeResizeListener(element, _this._onResize);
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "_onResize", function() {
            _this.updatePosition();
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "__handleWindowScrollEvent", function() {
            if (!_this._isMounted) return;
            var onScroll = _this.props.onScroll;
            var scrollElement = _this.props.scrollElement;
            if (scrollElement) {
                var scrollOffset = (0, $eDRfc.getScrollOffset)(scrollElement);
                var scrollLeft = Math.max(0, scrollOffset.left - _this._positionFromLeft);
                var scrollTop = Math.max(0, scrollOffset.top - _this._positionFromTop);
                _this.setState({
                    isScrolling: true,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                });
                onScroll({
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                });
            }
        });
        (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))((0, (/*@__PURE__*/$parcel$interopDefault($8HIaN)))(_this), "__resetIsScrolling", function() {
            _this.setState({
                isScrolling: false
            });
        });
        return _this;
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($dHNFa)))(WindowScroller, [
        {
            key: "updatePosition",
            value: function updatePosition() {
                var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollElement;
                var onResize = this.props.onResize;
                var _this$state = this.state, height = _this$state.height, width = _this$state.width;
                var thisNode = this._child || $66G66.findDOMNode(this);
                if (thisNode instanceof Element && scrollElement) {
                    var offset = (0, $eDRfc.getPositionOffset)(thisNode, scrollElement);
                    this._positionFromTop = offset.top;
                    this._positionFromLeft = offset.left;
                }
                var dimensions = (0, $eDRfc.getDimensions)(scrollElement, this.props);
                if (height !== dimensions.height || width !== dimensions.width) {
                    this.setState({
                        height: dimensions.height,
                        width: dimensions.width
                    });
                    onResize({
                        height: dimensions.height,
                        width: dimensions.width
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var scrollElement = this.props.scrollElement;
                this._detectElementResize = (0, $jY1Bw.default)();
                this.updatePosition(scrollElement);
                if (scrollElement) {
                    (0, $f6GJI.registerScrollListener)(this, scrollElement);
                    this._registerResizeListener(scrollElement);
                }
                this._isMounted = true;
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                var scrollElement = this.props.scrollElement;
                var prevScrollElement = prevProps.scrollElement;
                if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
                    this.updatePosition(scrollElement);
                    (0, $f6GJI.unregisterScrollListener)(this, prevScrollElement);
                    (0, $f6GJI.registerScrollListener)(this, scrollElement);
                    this._unregisterResizeListener(prevScrollElement);
                    this._registerResizeListener(scrollElement);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                var scrollElement = this.props.scrollElement;
                if (scrollElement) {
                    (0, $f6GJI.unregisterScrollListener)(this, scrollElement);
                    this._unregisterResizeListener(scrollElement);
                }
                this._isMounted = false;
            }
        },
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                var _this$state2 = this.state, isScrolling = _this$state2.isScrolling, scrollTop = _this$state2.scrollTop, scrollLeft = _this$state2.scrollLeft, height = _this$state2.height, width = _this$state2.width;
                return children({
                    onChildScroll: this._onChildScroll,
                    registerChild: this._registerChild,
                    height: height,
                    isScrolling: isScrolling,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    width: width
                });
            }
        }
    ]);
    return WindowScroller;
}($d4J5n.PureComponent), (0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($4a636f984dcb8077$var$_class, "propTypes", null), $4a636f984dcb8077$var$_temp);
(0, (/*@__PURE__*/$parcel$interopDefault($6nVSY)))($4a636f984dcb8077$export$2e2bcd8739ae039, "defaultProps", {
    onResize: function onResize() {},
    onScroll: function onScroll() {},
    scrollingResetTimeInterval: $4a636f984dcb8077$export$4c2e2096c8dd4c46,
    scrollElement: $4a636f984dcb8077$var$getWindow(),
    serverHeight: 0,
    serverWidth: 0
});

});
parcelRegister("f6GJI", function(module, exports) {

$parcel$export(module.exports, "registerScrollListener", () => $aff8911f4e7e2dc0$export$2ae59a3a1c144a62);
$parcel$export(module.exports, "unregisterScrollListener", () => $aff8911f4e7e2dc0$export$9eab03f1e587e004);

var $j2sdi = parcelRequire("j2sdi");
parcelRequire("6nY0j");
var $aff8911f4e7e2dc0$var$mountedInstances = [];
var $aff8911f4e7e2dc0$var$originalBodyPointerEvents = null;
var $aff8911f4e7e2dc0$var$disablePointerEventsTimeoutId = null;
function $aff8911f4e7e2dc0$var$enablePointerEventsIfDisabled() {
    if ($aff8911f4e7e2dc0$var$disablePointerEventsTimeoutId) {
        $aff8911f4e7e2dc0$var$disablePointerEventsTimeoutId = null;
        if (document.body && $aff8911f4e7e2dc0$var$originalBodyPointerEvents != null) document.body.style.pointerEvents = $aff8911f4e7e2dc0$var$originalBodyPointerEvents;
        $aff8911f4e7e2dc0$var$originalBodyPointerEvents = null;
    }
}
function $aff8911f4e7e2dc0$var$enablePointerEventsAfterDelayCallback() {
    $aff8911f4e7e2dc0$var$enablePointerEventsIfDisabled();
    $aff8911f4e7e2dc0$var$mountedInstances.forEach(function(instance) {
        return instance.__resetIsScrolling();
    });
}
function $aff8911f4e7e2dc0$var$enablePointerEventsAfterDelay() {
    if ($aff8911f4e7e2dc0$var$disablePointerEventsTimeoutId) (0, $j2sdi.cancelAnimationTimeout)($aff8911f4e7e2dc0$var$disablePointerEventsTimeoutId);
    var maximumTimeout = 0;
    $aff8911f4e7e2dc0$var$mountedInstances.forEach(function(instance) {
        maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
    });
    $aff8911f4e7e2dc0$var$disablePointerEventsTimeoutId = (0, $j2sdi.requestAnimationTimeout)($aff8911f4e7e2dc0$var$enablePointerEventsAfterDelayCallback, maximumTimeout);
}
function $aff8911f4e7e2dc0$var$onScrollWindow(event) {
    if (event.currentTarget === window && $aff8911f4e7e2dc0$var$originalBodyPointerEvents == null && document.body) {
        $aff8911f4e7e2dc0$var$originalBodyPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = 'none';
    }
    $aff8911f4e7e2dc0$var$enablePointerEventsAfterDelay();
    $aff8911f4e7e2dc0$var$mountedInstances.forEach(function(instance) {
        if (instance.props.scrollElement === event.currentTarget) instance.__handleWindowScrollEvent();
    });
}
function $aff8911f4e7e2dc0$export$2ae59a3a1c144a62(component, element) {
    if (!$aff8911f4e7e2dc0$var$mountedInstances.some(function(instance) {
        return instance.props.scrollElement === element;
    })) element.addEventListener('scroll', $aff8911f4e7e2dc0$var$onScrollWindow);
    $aff8911f4e7e2dc0$var$mountedInstances.push(component);
}
function $aff8911f4e7e2dc0$export$9eab03f1e587e004(component, element) {
    $aff8911f4e7e2dc0$var$mountedInstances = $aff8911f4e7e2dc0$var$mountedInstances.filter(function(instance) {
        return instance !== component;
    });
    if (!$aff8911f4e7e2dc0$var$mountedInstances.length) {
        element.removeEventListener('scroll', $aff8911f4e7e2dc0$var$onScrollWindow);
        if ($aff8911f4e7e2dc0$var$disablePointerEventsTimeoutId) {
            (0, $j2sdi.cancelAnimationTimeout)($aff8911f4e7e2dc0$var$disablePointerEventsTimeoutId);
            $aff8911f4e7e2dc0$var$enablePointerEventsIfDisabled();
        }
    }
}

});

parcelRegister("eDRfc", function(module, exports) {

$parcel$export(module.exports, "getDimensions", () => $aa8e0263efba931e$export$d1aa971bf69c7e87);
$parcel$export(module.exports, "getPositionOffset", () => $aa8e0263efba931e$export$49c9ca06677d64ad);
$parcel$export(module.exports, "getScrollOffset", () => $aa8e0263efba931e$export$760208e927c198fa);
/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */ // TODO Move this into WindowScroller and import from there
var $aa8e0263efba931e$var$isWindow = function isWindow(element) {
    return element === window;
};
var $aa8e0263efba931e$var$getBoundingBox = function getBoundingBox(element) {
    return element.getBoundingClientRect();
};
function $aa8e0263efba931e$export$d1aa971bf69c7e87(scrollElement, props) {
    if (!scrollElement) return {
        height: props.serverHeight,
        width: props.serverWidth
    };
    else if ($aa8e0263efba931e$var$isWindow(scrollElement)) {
        var _window = window, innerHeight = _window.innerHeight, innerWidth = _window.innerWidth;
        return {
            height: typeof innerHeight === 'number' ? innerHeight : 0,
            width: typeof innerWidth === 'number' ? innerWidth : 0
        };
    } else return $aa8e0263efba931e$var$getBoundingBox(scrollElement);
}
function $aa8e0263efba931e$export$49c9ca06677d64ad(element, container) {
    if ($aa8e0263efba931e$var$isWindow(container) && document.documentElement) {
        var containerElement = document.documentElement;
        var elementRect = $aa8e0263efba931e$var$getBoundingBox(element);
        var containerRect = $aa8e0263efba931e$var$getBoundingBox(containerElement);
        return {
            top: elementRect.top - containerRect.top,
            left: elementRect.left - containerRect.left
        };
    } else {
        var scrollOffset = $aa8e0263efba931e$export$760208e927c198fa(container);
        var _elementRect = $aa8e0263efba931e$var$getBoundingBox(element);
        var _containerRect = $aa8e0263efba931e$var$getBoundingBox(container);
        return {
            top: _elementRect.top + scrollOffset.top - _containerRect.top,
            left: _elementRect.left + scrollOffset.left - _containerRect.left
        };
    }
}
function $aa8e0263efba931e$export$760208e927c198fa(element) {
    if ($aa8e0263efba931e$var$isWindow(element) && document.documentElement) return {
        top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
        left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
    else return {
        top: element.scrollTop,
        left: element.scrollLeft
    };
}

});





//# sourceMappingURL=VisDataTable.36819374.js.map
