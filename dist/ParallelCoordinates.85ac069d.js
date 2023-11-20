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
})({"Q4bD":[function(require,module,exports) {
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
function ParallelCoordinates(props) {
  var self = (0, _react.useRef)();
  var foregroundRef = (0, _react.useRef)();
  var backgroundRef = (0, _react.useRef)();
  var dimensions = props.fields.y;
  var scales = (0, _react.useRef)({
    x: d3.scalePoint(),
    y: {}
  });
  var margin = {
    top: 25,
    right: 40,
    bottom: 20,
    left: 40
  };
  function path(d, ctx) {
    ctx.beginPath();
    dimensions.forEach(function (p, i) {
      if (i === 0) {
        ctx.moveTo(scales.current.x(p), scales.current.y[p](d[p]));
      } else {
        ctx.lineTo(scales.current.x(p), scales.current.y[p](d[p]));
      }
    });
    ctx.stroke();
  }
  function brush() {
    if (!d3.event.selection) return;
    var field = dimensions.filter(function (d) {
      return scales.current.y[d].brush === d3.event.target;
    })[0];
    var _ref = [d3.event.selection[0], d3.event.selection[1]],
      x1 = _ref[0],
      x0 = _ref[1];
    props.filterAdded([{
      id: props.id,
      title: props.title,
      field: field,
      operation: 'range',
      values: [(0, _utils.numFixed)(scales.current.y[field].invert(x0)), (0, _utils.numFixed)(scales.current.y[field].invert(x1))]
    }]);
  }
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      d3.select(self.current).selectAll('canvas').remove('canvas');
      d3.select(self.current).selectAll('svg').remove('svg');
      var rect = self.current.getBoundingClientRect();
      var innerWidth = rect.width - margin.left - margin.right;
      var innerHeight = rect.height - margin.top - margin.bottom;
      backgroundRef.current = d3.select(self.current).append('canvas').attr('width', innerWidth).attr('height', innerHeight).style('transform', "translate(".concat(margin.left, "px,").concat(margin.top, "px)"));
      foregroundRef.current = d3.select(self.current).append('canvas').attr('width', innerWidth).attr('height', innerHeight).style('transform', "translate(".concat(margin.left, "px,").concat(margin.top - innerHeight - 5, "px)"));
      backgroundRef.current = backgroundRef.current.node().getContext('2d');
      foregroundRef.current = foregroundRef.current.node().getContext('2d');
      foregroundRef.current.strokeStyle = 'rgba(0,100,160,0.24)';
      backgroundRef.current.strokeStyle = 'rgba(0,0,0,0.1)';
      var svg = d3.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height).style('transform', "translate(".concat(0, "px,", -2 * innerHeight - margin.top / 2, "px)")).append('g').style('transform', "translate(".concat(margin.left, "px,").concat(margin.top, "px)"));
      scales.current.x.domain(dimensions);
      scales.current.x.range([0, innerWidth], 1);
      dimensions.forEach(function (d) {
        scales.current.y[d] = d3.scaleLinear().domain(d3.extent(props.data, function (p) {
          return +p[d];
        })).range([innerHeight, 0]);
      });
      var g = svg.selectAll('.dimension').data(dimensions).enter().append('g').attr('class', 'dimension').attr('transform', function (d) {
        return "translate(".concat(scales.current.x(d), ")");
      });

      // Add an axis and title.
      g.append('g').attr('class', 'axis').each(function addAxis(d) {
        d3.select(this).call(d3.axisLeft(scales.current.y[d]));
      }).append('text').style('text-anchor', 'middle').attr('y', -9).text(function (d) {
        return d;
      });
      g.append('g').attr('class', 'brush').each(function addBrush(d) {
        d3.select(this).call(scales.current.y[d].brush = d3.brushY().extent([[-10, 0], [10, innerHeight]]).on('end', brush));
      }).selectAll('rect').attr('x', -8).attr('width', 16);
    }, 100);
  }, [props.layout]);
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      if (!props.filterData) return;
      var rect = self.current.getBoundingClientRect();
      var innerWidth = rect.width - margin.left - margin.right;
      var innerHeight = rect.height - margin.top - margin.bottom;

      // Render selected lines
      foregroundRef.current.clearRect(0, 0, innerWidth + 1, innerHeight + 1);
      backgroundRef.current.clearRect(0, 0, innerWidth + 1, innerHeight + 1);
      if (props.filters.length === 0) {
        props.data.forEach(function (d) {
          path(d, foregroundRef.current);
        });
      } else {
        props.data.forEach(function (d) {
          if (props.filterData.includes(d)) {
            path(d, foregroundRef.current);
          } else {
            path(d, backgroundRef.current);
          }
        });
      }
    }, 100);
  }, [props.filters, props.filterData, props.layout]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: props.id,
    ref: self,
    style: {
      width: '100%',
      height: '100%'
    }
  });
}
var _default = exports.default = ParallelCoordinates;
ParallelCoordinates.propTypes = {
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterData: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.shape({
    y: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
  }).isRequired,
  id: _propTypes.default.string.isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterAdded: _propTypes.default.func.isRequired,
  layout: _propTypes.default.shape({
    width: _propTypes.default.number.isRequired,
    currentCols: _propTypes.default.number.isRequired
  }).isRequired
};
},{"react":"n8MK","d3":"UzF0","prop-types":"D9Od","../../../common/utils":"by1F"}]},{},[], null)
//# sourceMappingURL=ParallelCoordinates.85ac069d.js.map