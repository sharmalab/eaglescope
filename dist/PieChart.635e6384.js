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
})({"j1BH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var d3 = _interopRequireWildcard(require("d3"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _tooltip = _interopRequireDefault(require("../../partials/tooltip"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function PieChart(props) {
  var self = (0, _react.useRef)();
  var margin = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  };
  var data = d3.nest().key(function (d) {
    return d[props.fields.x];
  }).rollup(function (v) {
    return v.length;
  }).entries(props.data);
  var sum = d3.sum(data, function (d) {
    return d.value;
  });
  var pie = d3.pie().sortValues(function (a, b) {
    return b - a;
  }).value(function (d) {
    return d.value;
  });
  var arcs = pie(data);
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      // Remove old svg if any
      d3.select(self.current).select('.tooltip').remove('.tooltip');
      d3.select(self.current).selectAll('svg').remove('svg');

      // calculate chart dimensions
      var rect = self.current.getBoundingClientRect();
      var innerWidth = rect.width - margin.left - margin.right;
      var innerHeight = rect.height - margin.top - margin.bottom;
      var radius = Math.min(innerWidth, innerHeight) / 2;
      var arc = d3.arc().innerRadius(0).outerRadius(radius);
      var color = d3.scaleOrdinal().domain(data.map(function (d) {
        return d.key;
      })).range(d3.quantize(function (t) {
        return d3.interpolateSpectral(t);
      }, data.length));
      var svg = d3.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height);
      var viewer = svg.append('g').attr('transform', "translate(".concat(innerWidth / 2 + margin.left, ",").concat(innerHeight / 2 + margin.top, ")"));
      if (innerWidth > 500) {
        var legendG = svg.selectAll('.legend').data(arcs).enter().append('g').attr('transform', function (d, i) {
          return "translate(".concat(innerWidth - 110, ",").concat(i * 15 + 20, ")");
        }).attr('class', 'legend');
        legendG.append('rect') // make a matching color rect
        .attr('width', 13).attr('height', 13).attr('fill', function (d, i) {
          return color(i);
        }).attr('stroke', 'grey').style('stroke-width', '1px');
        legendG.append('text') // add the text
        .text(function (d) {
          return "".concat(d.value, "  ").concat(d.data.key);
        }).style('font-size', 15).attr('y', 13).attr('x', 15);
      }

      // create a tooltip
      var addLabel = function addLabel(d) {
        return "Class: ".concat(d.data.key, " Count: ").concat(d.data.value, " \n      Percentage: ").concat(d3.format('.0%')(d.data.value / sum));
      };
      var offset = {
        x: rect.width / 2 + 20,
        y: rect.height / 2
      };
      var tooltipHandlers = (0, _tooltip.default)(self.current, addLabel, offset);
      var onClick = function onClick(d) {
        d.data.selected = !d.data.selected;
        var values = data.reduce(function (value, point) {
          if (point.selected) value.push(point.key);
          return value;
        }, []);
        if (values.length > 0) {
          var filter = {
            id: props.id,
            title: props.title,
            field: props.fields.x,
            operation: 'in',
            values: values
          };
          props.filterAdded([filter]);
        } else {
          props.filterRemove(props.id);
        }
      };
      var pies = viewer.selectAll('path').data(arcs).join('path').attr('class', 'slide').attr('fill', function (d) {
        return color(d.data.key);
      }).attr('d', arc).on('mousemove', tooltipHandlers.mousemove).on('mouseleave', tooltipHandlers.mouseleave).on('click', onClick);
      var filters = props.filters.filter(function (f) {
        return f.id === props.id;
      });
      if (filters.length > 0) {
        filters[0].values.forEach(function (value) {
          data.forEach(function (d) {
            if (d.key === value) d.selected = true;
          });
        });
      }
      if (filters.length > 0) {
        pies.attr('fill', function (d) {
          return d.data.selected ? color(d.data.key) : '#C0C0C0';
        }).attr('fill-opacity', function (d) {
          return d.data.selected ? 1 : 0.5;
        }).attr('stroke', '#CCCCCC').attr('stroke-width', function (d) {
          return d.data.selected ? 3 : 0;
        });
      } else {
        data.forEach(function (d) {
          d.selected = false;
        });
        pies.attr('fill', function (d) {
          return color(d.data.key);
        }).attr('fill-opacity', 1).attr('stroke', 'none');
      }
    }, 100);
  }, [props.layout, props.filters]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: props.id,
    ref: self,
    style: {
      width: '100%',
      height: '100%'
    }
  }));
}
var _default = exports.default = PieChart;
PieChart.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.shape({
    x: _propTypes.default.string.isRequired
  }).isRequired,
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterAdded: _propTypes.default.func.isRequired,
  filterRemove: _propTypes.default.func.isRequired,
  layout: _propTypes.default.shape({
    width: _propTypes.default.number.isRequired,
    currentCols: _propTypes.default.number.isRequired
  }).isRequired
};
},{"react":"n8MK","d3":"UzF0","prop-types":"D9Od","../../partials/tooltip":"nEAV"}]},{},[], null)
//# sourceMappingURL=PieChart.635e6384.js.map