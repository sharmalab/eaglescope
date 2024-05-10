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
})({"components/VisualTools/Chart/ScatterChart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var d3 = _interopRequireWildcard(require("d3"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../../common/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var ScatterChart = exports.default = /*#__PURE__*/function (_PureComponent) {
  _inherits(ScatterChart, _PureComponent);
  var _super = _createSuper(ScatterChart);
  function ScatterChart(props) {
    var _this;
    _classCallCheck(this, ScatterChart);
    _this = _super.call(this, props);
    _this.self = _react.default.createRef();
    _this.state = {
      margin: {
        top: 5,
        right: 10,
        bottom: 25,
        left: 25
      }
    };
    _this.state.data = _this.props.data.filter(function (d) {
      return d[_this.props.fields.x] !== 'N/A' && d[_this.props.fields.y] !== 'N/A' && d[_this.props.fields.z] !== 'N/A';
    });
    return _this;
  }
  _createClass(ScatterChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;
      setTimeout(function () {
        d3.select(_this2.self.current).selectAll('canvas').remove('canvas');
        d3.select(_this2.self.current).selectAll('svg').remove('svg');
        _this2.rect = _this2.self.current.getBoundingClientRect();
        var innerWidth = _this2.rect.width - _this2.state.margin.left - _this2.state.margin.right;
        var innerHeight = _this2.rect.height - _this2.state.margin.top - _this2.state.margin.bottom;
        _this2.canvas = d3.select(_this2.self.current).append('canvas').attr('width', innerWidth).attr('height', innerHeight).style('transform', "translate(".concat(_this2.state.margin.left, "px,").concat(_this2.state.margin.top, "px)"));

        // create svg
        var svg = d3.select(_this2.self.current).append('svg').attr('width', _this2.rect.width).attr('height', _this2.rect.height).attr('transform', "translate(".concat(0, ",", -innerHeight, ")"));

        // create viewer
        var viewer = svg.append('g').attr('transform', "translate(".concat(_this2.state.margin.left, ",0)"));

        //
        _this2.xScale = _this2.createScaleLiner(_this2.props.fields.x, [0, innerWidth]);
        _this2.yScale = _this2.createScaleLiner(_this2.props.fields.y, [innerHeight, 0]);
        _this2.radiusScale = _this2.createScaleLiner(_this2.props.fields.z, [3, 10]);
        var getCurrentMouseClickPosition = function getCurrentMouseClickPosition() {
          console.log(svg);
          var mouseX = d3.event.sourceEvent.clientX - svg.node().getBoundingClientRect().x - _this2.state.margin.left;
          var mouseY = d3.event.sourceEvent.clientY - svg.node().getBoundingClientRect().y;
          return [mouseX, mouseY];
        };
        viewer.append('g').attr('transform', "translate(0,".concat(innerHeight, ")")).call(d3.axisBottom(_this2.xScale).tickSize(-innerHeight));

        // add the y Axis
        viewer.append('g').call(d3.axisLeft(_this2.yScale).tickSize(-innerWidth));
        _this2.brush = d3.brush().extent([[0, 0], [innerWidth, innerHeight]]).on('start', function () {
          _this2.startPosition = getCurrentMouseClickPosition();
        }).on('brush', function () {
          _this2.endPosition = getCurrentMouseClickPosition();
          svg.selectAll('rect').remove('rect');
          var startX = Math.min(_this2.startPosition[0], _this2.endPosition[0]);
          var startY = Math.min(_this2.startPosition[1], _this2.endPosition[1]);
          var selectedArea = svg.append('rect').attr('position', 'absolute').attr('x', startX + _this2.state.margin.left).attr('y', startY).attr('width', Math.abs(_this2.endPosition[0] - _this2.startPosition[0])).attr('height', Math.abs(_this2.endPosition[1] - _this2.startPosition[1])).attr('fill', 'rgba(211, 211, 211, 0.5)');
        }).on('end', function () {
          _this2.endPosition = getCurrentMouseClickPosition();
          svg.selectAll('rect').remove('rect');
          var startX = Math.min(_this2.startPosition[0], _this2.endPosition[0]);
          var startY = Math.min(_this2.startPosition[1], _this2.endPosition[1]);
          var selectedArea = svg.append('rect').attr('position', 'absolute').attr('x', startX + _this2.state.margin.left).attr('y', startY).attr('width', Math.abs(_this2.endPosition[0] - _this2.startPosition[0])).attr('height', Math.abs(_this2.endPosition[1] - _this2.startPosition[1])).attr('fill', 'rgba(211, 211, 211, 0.5)');
          _this2.end();
        });
        viewer.append('g').call(_this2.brush);
        _this2.draw();
      }, 100);
    }
  }, {
    key: "drawPoint",
    value: function drawPoint(point) {
      var cx = this.xScale(point[this.props.fields.x]);
      var cy = this.yScale(point[this.props.fields.y]);
      var r = this.props.fields.z ? this.radiusScale(point[this.props.fields.z]) : 3;
      this.context.beginPath();
      this.context.arc(cx, cy, r, 0, 2 * Math.PI);
      this.context.closePath();
      this.context.fill();
      this.context.stroke();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this3 = this;
      this.context = this.canvas.node().getContext('2d');
      this.context.clearRect(0, 0, this.rect.width, this.rect.height);
      this.context.fillStyle = '#87CEEB';
      this.context.strokeWidth = 1;
      this.context.strokeStyle = '#4682B4';
      this.context.globalAlpha = 1;
      if (this.props.filters.length === 0) {
        this.state.data.forEach(function (point) {
          _this3.drawPoint(point);
        });
      } else {
        this.state.data.forEach(function (point) {
          if (_this3.props.filterData.includes(point)) {
            _this3.context.fillStyle = '#87CEEB';
            _this3.context.strokeWidth = 1;
            _this3.context.strokeStyle = '#4682B4';
            _this3.context.globalAlpha = 1;
          } else {
            _this3.context.fillStyle = '#c0c0c0c0';
            _this3.context.strokeWidth = 1;
            _this3.context.strokeStyle = '#000000';
            _this3.context.globalAlpha = 0.2;
          }
          _this3.drawPoint(point);
        });
      }
    }
  }, {
    key: "createScaleLiner",
    value: function createScaleLiner(f, range) {
      var paddingPercent = 0.1; // Adjust the percentage of padding as needed
      var domainExtent = d3.extent(this.state.data, function (d) {
        return d[f];
      });
      var domainPadding = (domainExtent[1] - domainExtent[0]) * paddingPercent;
      var scaleLiner = d3.scaleLinear().domain([domainExtent[0] - domainPadding, domainExtent[1] + domainPadding]).range(range).nice();
      return scaleLiner;
    }
  }, {
    key: "end",
    value: function end() {
      if (!d3.event.selection) return;
      var _ref = [Math.min(this.startPosition[0], this.endPosition[0]), Math.min(this.startPosition[1], this.endPosition[1])],
        x0 = _ref[0],
        y0 = _ref[1];
      var _ref2 = [Math.max(this.startPosition[0], this.endPosition[0]), Math.max(this.startPosition[1], this.endPosition[1])],
        x1 = _ref2[0],
        y1 = _ref2[1];
      var filters = [{
        id: "".concat(this.props.id, "_x"),
        title: this.props.title,
        field: this.props.fields.x,
        operation: 'range',
        values: [(0, _utils.numFixed)(this.xScale.invert(x0)), (0, _utils.numFixed)(this.xScale.invert(x1))]
      }, {
        id: "".concat(this.props.id, "_y"),
        title: this.props.title,
        field: this.props.fields.y,
        operation: 'range',
        values: [(0, _utils.numFixed)(this.yScale.invert(y1)), (0, _utils.numFixed)(this.yScale.invert(y0))]
      }];
      this.props.filterAdded(filters);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        id: this.props.id,
        ref: this.self,
        style: {
          width: '100%',
          height: '100%'
        }
      });
    }
  }]);
  return ScatterChart;
}(_react.PureComponent);
ScatterChart.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterData: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.shape({
    x: _propTypes.default.string.isRequired,
    y: _propTypes.default.string.isRequired,
    z: _propTypes.default.string
  }).isRequired,
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterAdded: _propTypes.default.func.isRequired
};
},{"react":"../node_modules/react/index.js","d3":"../node_modules/d3/index.js","prop-types":"../node_modules/prop-types/index.js","../../../common/utils":"common/utils.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60621" + '/');
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
//# sourceMappingURL=/ScatterChart.9b7d43a5.js.map