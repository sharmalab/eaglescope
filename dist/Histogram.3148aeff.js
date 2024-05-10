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
})({"components/VisualTools/Chart/Histogram.js":[function(require,module,exports) {
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @function Histogram
 * @description Creates an interactive histogram chart
 *              User can select specific range of x by brushing
 * @param {Object} data - total data without filtering
 * @param {Array} fields - contains filed to create histogram on
 * @param {String} id - HTML id for the chart
 * @param {Integer} binsCount - number of bins to split data on
 * @param {Object} filterData - data after applying filters
 * @param {Array} filters - current filters
 * @param {Function} filterAdded - handler for adding new filter
 * @returns {Component}
 */

function Histogram(_ref) {
  var data = _ref.data,
    fields = _ref.fields,
    id = _ref.id,
    _ref$binsCount = _ref.binsCount,
    binsCount = _ref$binsCount === void 0 ? 10 : _ref$binsCount,
    filterData = _ref.filterData,
    filters = _ref.filters,
    filterAdded = _ref.filterAdded,
    layout = _ref.layout;
  var svgRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)({
      x: d3.scaleLinear(),
      y: d3.scaleLinear()
    }),
    _useState2 = _slicedToArray(_useState, 1),
    Scales = _useState2[0];
  var _useState3 = (0, _react.useState)({
      hist: d3.histogram(),
      bins: null
    }),
    _useState4 = _slicedToArray(_useState3, 1),
    histogram = _useState4[0];
  var margin = {
    top: 10,
    right: 10,
    bottom: 30,
    left: 40
  };

  // initialize svg and draw base histogram
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      d3.select(svgRef.current).selectAll('svg').remove('svg');
      var rect = svgRef.current.getBoundingClientRect();
      var innerWidth = rect.width - margin.left - margin.right;
      var innerHeight = rect.height - margin.top - margin.bottom;
      var svg = d3.select(svgRef.current).append('svg').attr('width', rect.width).attr('height', rect.height).append('g').attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")"));
      Scales.x.domain([0, d3.max(data, function (d) {
        return d[fields.x];
      })]).range([0, innerWidth]);
      histogram.hist.value(function (d) {
        return d[fields.x];
      }).domain(Scales.x.domain()).thresholds(Scales.x.ticks(binsCount));
      histogram.bins = histogram.hist(data);
      Scales.y = d3.scaleLinear().range([innerHeight, 0]).domain([0, d3.max(histogram.bins, function (d) {
        return d.length;
      })]);

      // brush
      var brush = d3.brushX().extent([[0, 0], [innerWidth, innerHeight]]).on('end', function () {
        if (d3.event.selection) {
          var _ref2 = [d3.event.selection[0], d3.event.selection[1]],
            x0 = _ref2[0],
            x1 = _ref2[1];
          filterAdded([{
            id: id,
            field: fields.x,
            operation: 'range',
            values: [(0, _utils.numFixed)(Scales.x.invert(x0)), (0, _utils.numFixed)(Scales.x.invert(x1))]
          }]);
        }
      });
      svg.append('g').call(brush);

      // draw x-axis
      svg.append('g').attr('transform', "translate(0,".concat(innerHeight, ")")).call(d3.axisBottom(Scales.x));

      // draw y-axis
      var view = svg.append('g').call(d3.axisLeft(Scales.y)).append('g').attr('class', 'hist-area');

      // draw histogram rectangles
      view.selectAll('.bar').data(histogram.bins).join('rect').attr('class', 'bar').attr('x', 1).attr('transform', function (d) {
        return "translate(".concat(Scales.x(d.x0), ",").concat(Scales.y(d.length), ")");
      }).attr('width', function (d) {
        return Math.max(Scales.x(d.x1) - Scales.x(d.x0) - 1, 0);
      }).attr('height', function (d) {
        return innerHeight - Scales.y(d.length);
      }).style('fill', '#87CEFA');
    }, 100);
  }, [layout]);

  // draw filtered histogram
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      var rect = svgRef.current.getBoundingClientRect();
      var innerHeight = rect.height - margin.top - margin.bottom;
      var bins = histogram.bins;
      if (filters.length !== 0) {
        bins = histogram.hist(filterData);
      }
      d3.select(svgRef.current).selectAll('.hist-area').selectAll('.bar-f').data(bins).join('rect').attr('class', 'bar-f').style('transform', 'scale(1, -1)').attr('x', function (d) {
        return Scales.x(d.x0);
      }).attr('y', function () {
        return -innerHeight;
      }).transition().duration(1000).attr('width', function (d) {
        return Math.max(Scales.x(d.x1) - Scales.x(d.x0) - 1, 0);
      }).attr('height', function (d) {
        return innerHeight - Scales.y(d.length);
      }).style('fill', '#4682B4');
    }, 100);
  }, [filters, filterData, layout]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    ref: svgRef,
    style: {
      width: '100%',
      height: '100%'
    }
  });
}
var _default = exports.default = Histogram;
Histogram.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.shape({
    x: _propTypes.default.string.isRequired
  }).isRequired,
  id: _propTypes.default.string.isRequired,
  binsCount: _propTypes.default.number,
  filterData: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterAdded: _propTypes.default.func.isRequired,
  layout: _propTypes.default.shape({
    width: _propTypes.default.number.isRequired,
    currentCols: _propTypes.default.number.isRequired
  }).isRequired
};
Histogram.defaultProps = {
  binsCount: 10
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
//# sourceMappingURL=/Histogram.3148aeff.js.map