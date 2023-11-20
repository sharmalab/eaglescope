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
})({"qYZb":[function(require,module,exports) {
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
function DensityChart(props) {
  var startPosition = [0, 0];
  var endPosition = [0, 0];
  var self = (0, _react.useRef)();
  var svg = (0, _react.useRef)();
  var scales = (0, _react.useRef)({
    x: d3.scaleLinear(),
    y: d3.scaleLinear()
  });
  var margin = {
    top: 10,
    right: 30,
    bottom: 20,
    left: 40
  };
  var end = function end() {
    if (!d3.event.selection) return;
    var _ref = [Math.min(startPosition[0], endPosition[0]), Math.min(startPosition[1], endPosition[1])],
      x0 = _ref[0],
      y0 = _ref[1];
    var _ref2 = [Math.max(startPosition[0], endPosition[0]), Math.max(startPosition[1], endPosition[1])],
      x1 = _ref2[0],
      y1 = _ref2[1];
    var filters = [{
      id: "".concat(props.id, "_x"),
      title: props.title,
      field: props.fields.x,
      operation: 'range',
      values: [(0, _utils.numFixed)(scales.current.x.invert(x0)), (0, _utils.numFixed)(scales.current.x.invert(x1))]
    }, {
      id: "".concat(props.id, "_y"),
      title: props.title,
      field: props.fields.y,
      operation: 'range',
      values: [(0, _utils.numFixed)(scales.current.y.invert(y1)), (0, _utils.numFixed)(scales.current.y.invert(y0))]
    }];
    props.filterAdded(filters);
  };
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      d3.select(self.current).selectAll('svg').remove('svg');
      var rect = self.current.getBoundingClientRect();
      var innerWidth = rect.width - margin.left - margin.right;
      var innerHeight = rect.height - margin.top - margin.bottom;
      svg.current = d3.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height).append('g').attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")"));
      var paddingPercent = 0.1; // Adjust the percentage of padding as needed
      var domainExtentX = d3.extent(props.data, function (d) {
        return d[props.fields.x];
      });
      var domainPaddingX = (domainExtentX[1] - domainExtentX[0]) * paddingPercent;
      var domainExtentY = d3.extent(props.data, function (d) {
        return d[props.fields.y];
      });
      var domainPaddingY = (domainExtentY[1] - domainExtentY[0]) * paddingPercent;
      scales.current.x.domain([domainExtentX[0] - domainPaddingX, domainExtentX[1] + domainPaddingX]).range([0, innerWidth]);
      scales.current.y.domain([domainExtentY[0] - domainPaddingY, domainExtentY[1] + domainPaddingY]).range([innerHeight, 0]);
      svg.current.append('g').attr('transform', "translate(0,".concat(innerHeight, ")")).call(d3.axisBottom(scales.current.x));
      svg.current.append('g').call(d3.axisLeft(scales.current.y));
      var getCurrentMouseClickPosition = function getCurrentMouseClickPosition() {
        var mouseX = d3.event.sourceEvent.clientX - svg.current.node().getBoundingClientRect().x - 2 * margin.left;
        var mouseY = d3.event.sourceEvent.clientY - svg.current.node().getBoundingClientRect().y;
        return [mouseX, mouseY];
      };
      var brush = d3.brush().extent([[0, 0], [innerWidth, innerHeight]]).on('start', function () {
        startPosition = getCurrentMouseClickPosition();
        svg.current.selectAll('.selection').remove('rect');
      }).on('brush', function () {
        endPosition = getCurrentMouseClickPosition();
        svg.current.selectAll('.selected-area').remove('.selected-area');
        svg.current.selectAll('.selection').remove('rect');
        var startX = Math.min(startPosition[0], endPosition[0]);
        var startY = Math.min(startPosition[1], endPosition[1]);
        var selectArea = svg.current.append('rect').attr('class', 'selected-area').attr('position', 'absolute').attr('x', startX + margin.left).attr('y', startY).attr('width', Math.abs(endPosition[0] - startPosition[0])).attr('height', Math.abs(endPosition[1] - startPosition[1])).attr('fill', 'rgba(130, 130, 130, 0.5)');
      }).on('end', function () {
        endPosition = getCurrentMouseClickPosition();
        svg.current.selectAll('.selected-area').remove('.selected-area');
        svg.current.selectAll('.selection').remove('rect');
        var startX = Math.min(startPosition[0], endPosition[0]);
        var startY = Math.min(startPosition[1], endPosition[1]);
        var selectedArea = svg.current.append('rect').attr('class', 'selected-area').attr('position', 'absolute').attr('x', startX + margin.left).attr('y', startY).attr('width', Math.abs(endPosition[0] - startPosition[0])).attr('height', Math.abs(endPosition[1] - startPosition[1])).attr('fill', 'rgba(140, 140, 140, 0.5)');
        end();
      });
      svg.current.append('g').call(brush);
    }, 100);
  }, [props.layout]);
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      var rect = self.current.getBoundingClientRect();
      var innerWidth = rect.width - margin.left - margin.right;
      var innerHeight = rect.height - margin.top - margin.bottom;
      var data = props.data;
      if (props.filters.length !== 0) data = props.filterData;
      var k = Math.pow(10, -4 + Math.round(Math.log10(data.length)));
      var color = d3.scaleLinear().domain([0, k]).range(['white', '#4682b4']);
      var densityData = d3.contourDensity().x(function (d) {
        return scales.current.x(d[props.fields.x]);
      }).y(function (d) {
        return scales.current.y(d[props.fields.y]);
      }).size([innerWidth, innerHeight]).bandwidth(20)(data);
      svg.current.select('#draw_area').remove('g');
      svg.current.insert('g', 'g').attr('id', 'draw_area').selectAll('path').data(densityData).enter().append('path').attr('d', d3.geoPath()).attr('fill', function (d) {
        return color(d.value);
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
var _default = exports.default = DensityChart;
DensityChart.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.shape({
    x: _propTypes.default.string.isRequired,
    y: _propTypes.default.string.isRequired
  }).isRequired,
  id: _propTypes.default.string.isRequired,
  filterData: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  layout: _propTypes.default.shape({
    width: _propTypes.default.number.isRequired,
    currentCols: _propTypes.default.number.isRequired
  }).isRequired,
  filterAdded: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired
};
},{"react":"n8MK","d3":"UzF0","prop-types":"D9Od","../../../common/utils":"by1F"}]},{},[], null)
//# sourceMappingURL=DensityChart.e704e241.js.map