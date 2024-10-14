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
})({"jonM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var d3 = _interopRequireWildcard(require("d3"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../../../common/utils");
var _tooltip = _interopRequireDefault(require("../../partials/tooltip"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Heatmap(props) {
  var self = (0, _react.useRef)();
  var scales = {
    x: d3.scaleBand(),
    y: d3.scaleBand(),
    color: d3.scaleSequential()
  };
  var margin = {
    top: 10,
    right: 10,
    bottom: 30,
    left: 60
  };
  var myGroups = d3.map(props.data, function (d) {
    return d[props.fields.x];
  }).keys();
  var myVars = d3.map(props.data, function (d) {
    return d[props.fields.y];
  }).keys();
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      // Remove old svg if any
      d3.select(self.current).select('.tooltip').remove('div');
      d3.select(self.current).selectAll('svg').remove('svg');
      var rect = self.current.getBoundingClientRect();
      var innerWidth = rect.width - margin.left - margin.right;
      var innerHeight = rect.height - margin.top - margin.bottom;
      var data = props.data;
      if (props.filters.length !== 0) data = props.filterData;
      var svg = d3.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height).append('g').attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")"));

      // Create and draw x-axis
      scales.x.range([0, innerWidth]).domain(myGroups).padding(0.05);
      svg.append('g').style('font-size', 13).attr('transform', "translate(0,".concat(innerHeight, ")")).call(d3.axisBottom(scales.x).tickSize(0)).select('.domain').remove();

      // Create and draw y-axis
      scales.y.range([innerHeight, 0]).domain(myVars).padding(0.05);
      svg.append('g').style('font-size', 13).call(d3.axisLeft(scales.y).tickSize(0)).select('.domain').remove();

      // Create color scale
      scales.color.interpolator(d3.interpolateInferno).domain(d3.extent(props.data, function (d) {
        return d[props.fields.z];
      }));

      // create a tooltip
      var addLabel = function addLabel(d) {
        return "The ".concat(props.fields.z, " of this \n      cell is: ").concat((0, _utils.numFixed)(d.z ? d.z : 0));
      };
      var offset = {
        x: 80,
        y: 0
      };
      var tooltipHandlers = (0, _tooltip.default)(self.current, addLabel, offset);

      // Group data by the values of x and y
      // then aggregate to one value using mean
      // @TODO add option to choose different function such as: count, max, ..
      var visData = [];
      myGroups.forEach(function (g) {
        return myVars.forEach(function (v) {
          var currentData = data.filter(function (d) {
            return d[props.fields.x] === g && d[props.fields.y] === v;
          });
          visData.push({
            g: g,
            v: v,
            z: d3.mean(currentData, function (d) {
              return d[props.fields.z];
            })
          });
        });
      });

      // Draw each cell
      svg.selectAll().data(visData, function (d) {
        return "".concat(d.g, ":").concat(d.v);
      }).enter().append('rect').attr('x', function (d) {
        return scales.x(d.g);
      }).attr('y', function (d) {
        return scales.y(d.v);
      }).attr('rx', 4).attr('ry', 4).attr('width', scales.x.bandwidth()).attr('height', scales.y.bandwidth()).style('fill', function (d) {
        return scales.color(d.z);
      }).style('stroke-width', 4).style('stroke', 'none').style('opacity', 0.8).on('mousemove', tooltipHandlers.mousemove).on('mouseleave', tooltipHandlers.mouseleave).on('click', function (d) {
        var filters = [{
          id: "".concat(props.id, "_x"),
          title: props.title,
          field: props.fields.x,
          operation: 'in',
          values: [d.g]
        }, {
          id: "".concat(props.id, "_y"),
          title: props.title,
          field: props.fields.y,
          operation: 'in',
          values: [d.v]
        }];
        props.filterAdded(filters);
      });
    }, 100);
  }, [props.layout, props.filters, props.filterData]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: props.id,
    ref: self,
    style: {
      width: '100%',
      height: '100%'
    }
  });
}
var _default = exports.default = Heatmap;
Heatmap.propTypes = {
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.shape({
    x: _propTypes.default.string.isRequired,
    y: _propTypes.default.string.isRequired,
    z: _propTypes.default.string.isRequired
  }).isRequired,
  filterData: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  layout: _propTypes.default.shape({
    width: _propTypes.default.number.isRequired,
    currentCols: _propTypes.default.number.isRequired
  }).isRequired,
  filterAdded: _propTypes.default.func.isRequired
};
},{"react":"n8MK","d3":"UzF0","prop-types":"D9Od","../../../common/utils":"by1F","../../partials/tooltip":"nEAV"}]},{},[], null)
//# sourceMappingURL=Heatmap.82573c94.js.map