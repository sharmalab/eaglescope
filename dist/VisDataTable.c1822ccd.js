// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/VisualTools/VisDataTable/VisDataTable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactVirtualized = require("react-virtualized");
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _arrayMove = _interopRequireDefault(require("array-move"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VisDataTableControl = _interopRequireDefault(require("./VisDataTableControl/VisDataTableControl"));
require("./VisDataTable.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var _cellRenderer = function cellRenderer(d, f) {
  var urlElt;
  if (f.link && (f.link.url || f.link.field)) {
    var urlbase = f.link.url || '';
    urlElt = /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      href: urlbase + d.rowData[f.link.field]
    }, d.cellData);
  } else if (f.link && f.link.url) {
    urlElt = /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      href: f.link.url
    }, d.cellData);
  } else {
    urlElt = Array.isArray(d.cellData) ? d.cellData.join(', ') : d.cellData;
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: f.dataKey
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ReactVirtualized__Table__headerTruncatedText",
    title: d.cellData
  }, urlElt));
};
var rowClassName = function rowClassName(_ref) {
  var index = _ref.index;
  if (index < 0) {
    return 'headerRow';
  }
  return index % 2 === 0 ? 'evenRow' : 'oddRow';
};
var VisDataTable = exports.default = /*#__PURE__*/function (_PureComponent) {
  _inherits(VisDataTable, _PureComponent);
  var _super = _createSuper(VisDataTable);
  function VisDataTable(props) {
    var _this;
    _classCallCheck(this, VisDataTable);
    _this = _super.call(this, props);
    var fWidth = 1 / _this.props.fields.length;
    var fields = _this.props.fields.map(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, {
        width: fWidth,
        isShow: true
      });
    });
    _this.state = {
      fields: fields,
      width: null,
      sortBy: null,
      sortDirection: null
    };
    _this.autoSizer = _react.default.createRef();
    _this.headerRenderer = _this.headerRenderer.bind(_assertThisInitialized(_this));
    _this.resizeRow = _this.resizeRow.bind(_assertThisInitialized(_this));
    _this.onResize = _this.onResize.bind(_assertThisInitialized(_this));
    _this.onSortEnd = _this.onSortEnd.bind(_assertThisInitialized(_this));
    _this.onCheckChangedHandler = _this.onCheckChangedHandler.bind(_assertThisInitialized(_this));
    _this.onAllCheckHandler = _this.onAllCheckHandler.bind(_assertThisInitialized(_this));
    _this.sortHandler = _this.sortHandler.bind(_assertThisInitialized(_this));
    _this.getSortData = _this.getSortData.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(VisDataTable, [{
    key: "onResize",
    value: function onResize(_ref2) {
      var width = _ref2.width;
      this.setState({
        width: width
      });
    }
  }, {
    key: "onSortEnd",
    value: function onSortEnd(_ref3) {
      var oldIndex = _ref3.oldIndex,
        newIndex = _ref3.newIndex;
      this.setState(function (_ref4) {
        var fields = _ref4.fields;
        return {
          fields: (0, _arrayMove.default)(fields, oldIndex, newIndex)
        };
      });
    }
  }, {
    key: "onCheckChangedHandler",
    value: function onCheckChangedHandler(e) {
      var value = e.target.value;
      var checked = e.target.checked;
      this.setState(function (_ref5) {
        var fields = _ref5.fields;
        return {
          fields: fields.map(function (f) {
            f.isShow = f.dataKey === value ? checked : f.isShow;
            return _objectSpread({}, f);
          })
        };
      });
    }
  }, {
    key: "onAllCheckHandler",
    value: function onAllCheckHandler() {
      this.setState(function (_ref6) {
        var fields = _ref6.fields;
        return {
          fields: fields.map(function (f) {
            f.isShow = true;
            return _objectSpread({}, f);
          })
        };
      });
    }
  }, {
    key: "getSortData",
    value: function getSortData() {
      var collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
      });
      var _this$props = this.props,
        data = _this$props.data,
        filterData = _this$props.filterData,
        filters = _this$props.filters;
      var _this$state = this.state,
        sortBy = _this$state.sortBy,
        sortDirection = _this$state.sortDirection;
      var currentData = filters.length > 0 ? filterData : data;
      return sortBy && sortDirection ? currentData.sort(function (a, b) {
        var first = sortDirection === _reactVirtualized.SortDirection.ASC ? a : b;
        var second = sortDirection === _reactVirtualized.SortDirection.ASC ? b : a;
        return collator.compare(first[sortBy], second[sortBy]);
      }) : currentData;
    }
  }, {
    key: "resizeRow",
    value: function resizeRow(_ref7) {
      var dataKey = _ref7.dataKey,
        deltaX = _ref7.deltaX;
      var prevFields = this.state.fields;
      var idx = prevFields.findIndex(function (f) {
        return f.dataKey === dataKey;
      });
      var percentDelta = deltaX / this.state.width;
      prevFields[idx].width += percentDelta;
      if (idx < prevFields.length - 1) {
        prevFields[idx + 1].width = prevFields[idx + 1].width - percentDelta;
      }
      this.setState({
        fields: _toConsumableArray(prevFields)
      });
    }
  }, {
    key: "headerRenderer",
    value: function headerRenderer(_ref8) {
      var _this2 = this;
      var dataKey = _ref8.dataKey,
        label = _ref8.label,
        sortBy = _ref8.sortBy,
        sortDirection = _ref8.sortDirection;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: dataKey
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ReactVirtualized__Table__headerTruncatedText",
        title: label
      }, label), /*#__PURE__*/_react.default.createElement("div", null, sortBy === dataKey ? /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: sortDirection === _reactVirtualized.SortDirection.DESC ? _freeSolidSvgIcons.faSortDown : _freeSolidSvgIcons.faSortUp
      }) : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSort
      })), /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
        axis: "x",
        defaultClassName: "DragHandle",
        defaultClassNameDragging: "DragHandleActive",
        onDrag: function onDrag(event, _ref9) {
          var deltaX = _ref9.deltaX;
          _this2.resizeRow({
            dataKey: dataKey,
            deltaX: deltaX
          });
        },
        onStart: function onStart(event, _ref10) {
          var deltaX = _ref10.deltaX;
          _this2.setState({
            "isResize": true
          });
        },
        onStop: function onStop(event, _ref11) {
          var deltaX = _ref11.deltaX;
          setTimeout(function () {
            _this2.setState({
              "isResize": false
            });
          }, 300); // 300 milliseconds delay
        },

        position: {
          x: 0
        },
        zIndex: 999
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "DragHandleIcon",
        onMouseDown: function onMouseDown(event) {
          return event.stopPropagation();
        }
      }, "\u22EE")));
    }
  }, {
    key: "sortHandler",
    value: function sortHandler(_ref12) {
      var sortBy = _ref12.sortBy,
        sortDirection = _ref12.sortDirection;
      if (!this.state.isResize) {
        this.setState({
          sortBy: sortBy,
          sortDirection: sortDirection
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state2 = this.state,
        fields = _this$state2.fields,
        sortBy = _this$state2.sortBy,
        sortDirection = _this$state2.sortDirection;
      var finalData = this.getSortData();
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_VisDataTableControl.default, {
        list: fields,
        onSortEnd: this.onSortEnd,
        onCheckChanged: this.onCheckChangedHandler,
        onAllCheck: this.onAllCheckHandler
      }), /*#__PURE__*/_react.default.createElement(_reactVirtualized.AutoSizer, {
        ref: this.autoSizer,
        onResize: this.onResize
      }, function (_ref13) {
        var width = _ref13.width,
          height = _ref13.height;
        return /*#__PURE__*/_react.default.createElement(_reactVirtualized.Table, {
          width: width,
          height: height,
          headerHeight: 25,
          rowHeight: 20,
          rowClassName: rowClassName,
          rowCount: finalData.length,
          rowGetter: function rowGetter(_ref14) {
            var index = _ref14.index;
            return finalData[index];
          },
          sort: _this3.sortHandler,
          sortBy: sortBy,
          sortDirection: sortDirection
        }, fields.map(function (f) {
          return /*#__PURE__*/_react.default.createElement(_reactVirtualized.Column, {
            key: f.dataKey,
            cellDataGetter: function cellDataGetter(_ref15) {
              var rowData = _ref15.rowData;
              return rowData[f.dataKey];
            },
            dataKey: f.dataKey,
            label: f.label,
            width: width * f.width,
            headerRenderer: _this3.headerRenderer,
            cellRenderer: function cellRenderer(d) {
              return _cellRenderer(d, f);
            }
          });
        }));
      }));
    }
  }]);
  return VisDataTable;
}(_react.PureComponent);
VisDataTable.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterData: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired
};
},{"react":"../node_modules/react/index.js","react-virtualized":"../node_modules/react-virtualized/dist/es/index.js","react-draggable":"../node_modules/react-draggable/build/cjs/cjs.js","@fortawesome/react-fontawesome":"../node_modules/@fortawesome/react-fontawesome/index.es.js","@fortawesome/free-solid-svg-icons":"../node_modules/@fortawesome/free-solid-svg-icons/index.mjs","array-move":"../node_modules/array-move/index.js","prop-types":"../node_modules/prop-types/index.js","./VisDataTableControl/VisDataTableControl":"components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js","./VisDataTable.css":"components/VisualTools/VisDataTable/VisDataTable.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55508" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/VisDataTable.c1822ccd.js.map