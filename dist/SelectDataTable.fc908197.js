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
})({"CEqU":[function(require,module,exports) {
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
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
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
    // urlElt = d.cellData;
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
var SelectDataTable = exports.default = /*#__PURE__*/function (_PureComponent) {
  _inherits(SelectDataTable, _PureComponent);
  var _super = _createSuper(SelectDataTable);
  function SelectDataTable(props) {
    var _this;
    _classCallCheck(this, SelectDataTable);
    console.log("constructed, showing props");
    console.log(props);
    _this = _super.call(this, props);
    var fWidth = 1 / _this.props.fields.length;
    var fields = _this.props.fields.map(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, {
        width: fWidth,
        isShow: true
      });
    });
    //fields = fields.unshift({width: 50, isShow: true})
    _this.state = {
      fields: fields,
      width: null,
      sortBy: null,
      sortDirection: null,
      selected: []
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
  _createClass(SelectDataTable, [{
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
    key: "downloadSelected",
    value: function downloadSelected() {
      var downloadLimit = this.props.configProps.downloadLimit || 15;
      var data = this.state.selected;
      if (data.length > downloadLimit) {
        data = data.slice(0, downloadLimit);
        alert("Limiting download to first " + downloadLimit);
      }
      console.log(data);
      console.log("about to try?");
      console.log(this.props.configProps);
      // trigger downloads from pathdb
      var _iterator = _createForOfIteratorHelper(data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var record = _step.value;
          console.log("inside loop");
          console.log("trying to get metadata for slide with pathdb id", record);
          fetch("/node/" + record + "?_format=json", {
            mode: "cors"
          }).then(function (x) {
            return x.json();
          }).then(function (x) {
            console.log("looking at wsi url: ", x['field_wsiimage'][0]['url']);
            var slide_url = x['field_wsiimage'][0]['url'];
            if (window.location.protocol === "https:") {
              slide_url = slide_url.replace(/^http:\/\//i, 'https://');
            }
            var problematicExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp', '.svg', '.pdf'];
            function hasProblematicExtension(url) {
              return problematicExtensions.some(function (ext) {
                return url.toLowerCase().endsWith(ext);
              });
            }
            if (hasProblematicExtension(slide_url)) {
              console.log("using anchor method");
              var filename = slide_url.substring(slide_url.lastIndexOf('/') + 1);
              var a = document.createElement('a');
              a.href = slide_url;
              a.download = filename;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            } else {
              console.log("using iframe method");
              var iframe = document.createElement("iframe");
              iframe.setAttribute("sandbox", "allow-downloads allow-scripts");
              iframe.src = slide_url;
              iframe.setAttribute("style", "display: none");
              document.body.appendChild(iframe);
            }
          }).catch(console.error);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
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
    key: "selectionHandler",
    value: function selectionHandler(isChecked, rowData) {
      var downloadLimit = this.props.configProps.downloadLimit || 15;
      console.log("chexmix", isChecked, rowData);
      var selected = this.state.selected;
      console.log("state selected before change", selected);
      var item = rowData[this.props.configProps.downloadField];
      var existingIndex = selected.indexOf(item);
      // if check is true, add to state
      if (isChecked && existingIndex === -1) {
        this.setState(function (prevState) {
          return {
            selected: [].concat(_toConsumableArray(prevState.selected), [item])
          };
        });
      }
      // if check is false, remove from state
      if (!isChecked && existingIndex !== -1) {
        this.setState(function (prevState) {
          return {
            selected: prevState.selected.filter(function (x) {
              return x !== item;
            })
          };
        });
      }
      if (this.state.selected.length > downloadLimit - 2) {
        alert("Warning: We limit to at most " + downloadLimit + " concurrent downloads.");
      }
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
        sortDirection = _this$state2.sortDirection,
        selected = _this$state2.selected;
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
        }, /*#__PURE__*/_react.default.createElement(_reactVirtualized.Column, {
          key: "checkbox",
          dataKey: "checkbox",
          width: 50 // Adjust width as needed
          ,
          label: "\u2193",
          headerRenderer: function headerRenderer() {
            return /*#__PURE__*/_react.default.createElement("div", {
              title: "Download Selected Files",
              onClick: function onClick(e) {
                _this3.downloadSelected();
              }
            }, " ", /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faFileArrowDown,
              style: {
                height: '1.8em',
                color: '#1b7d00'
              }
            }));
          },
          cellRenderer: function cellRenderer(_ref15) {
            var rowData = _ref15.rowData;
            return /*#__PURE__*/_react.default.createElement("input", {
              type: "checkbox",
              checked: selected.includes(rowData[_this3.props.configProps.downloadField]),
              onChange: function onChange(e) {
                return _this3.selectionHandler(e.target.checked, rowData);
              }
            });
          }
        }), fields.map(function (f) {
          return /*#__PURE__*/_react.default.createElement(_reactVirtualized.Column, {
            key: f.dataKey,
            cellDataGetter: function cellDataGetter(_ref16) {
              var rowData = _ref16.rowData;
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
  return SelectDataTable;
}(_react.PureComponent);
SelectDataTable.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterData: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired
};
},{"react":"n8MK","react-virtualized":"lFyZ","react-draggable":"QupQ","@fortawesome/react-fontawesome":"O6gX","@fortawesome/free-solid-svg-icons":"elKX","array-move":"gDXE","prop-types":"D9Od","./VisDataTableControl/VisDataTableControl":"ppWr","./VisDataTable.css":"TTAr"}]},{},[], null)
//# sourceMappingURL=SelectDataTable.fc908197.js.map