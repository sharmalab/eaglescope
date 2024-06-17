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
})({"KFlv":[function(require,module,exports) {
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
var transformList = function transformList(data, f) {
  var map = new Map();
  data.forEach(function (d) {
    var items = d[f];
    if (Array.isArray(items)) {
      items.forEach(function (i) {
        if (!map.has(i)) {
          map.set(i, 0);
        }
        map.set(i, map.get(i) + 1);
      });
    } else {
      if (!map.has(items)) {
        map.set(items, 0);
      }
      map.set(items, map.get(items) + 1);
    }
  });
  return Array.from(map).map(function (d) {
    return {
      key: d[0],
      value: d[1]
    };
  });
};
var transform = function transform(data, field) {
  var isList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (isList) {
    return transformList(data, field);
  }
  var collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base'
  });
  function collSort(a, b) {
    return collator.compare(a, b);
  }
  return d3.nest().key(function (d) {
    return d[field];
  }).sortKeys(collSort).rollup(function (v) {
    return v.length;
  }).entries(data);
};
var wrap = function wrap(text, width) {
  text.each(function updateBars() {
    var currentText = d3.select(this);
    var words = currentText.text().split(/\s+/).reverse();
    var word;
    var line = [];
    var lineNumber = 0;
    var lineHeight = 1.1; // ems
    var y = currentText.attr('y');
    var dy = parseFloat(currentText.attr('dy'));
    var tspan = currentText.text(null).append('tspan').attr('x', 0).attr('y', y).attr('dy', "".concat(dy, "em"));
    word = words.pop();
    while (word) {
      line.push(word);
      tspan.text(line.join(' '));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(' '));
        line = [word];
        tspan = currentText.append('tspan').attr('x', 0).attr('y', y).attr('dy', "".concat(++lineNumber * lineHeight + dy, "em")).text(word);
      }
      word = words.pop();
    }
  });
};
function BarChart(props) {
  var margin = {
    top: 10,
    right: 10,
    bottom: 35,
    left: 35
  };
  var fields = {
    x: 'key',
    y: 'value'
  };
  var fullData = transform(props.data, props.fields.x, props.fields.isList);
  var self = (0, _react.useRef)();
  var scaleRef = (0, _react.useRef)();
  var hightRef = (0, _react.useRef)();
  var viewerRef = (0, _react.useRef)();
  var createXScale = function createXScale(f, width) {
    // set the ranges
    var xScale = d3.scaleBand().domain(fullData.map(function (d) {
      return d[f];
    }).flat()).range([0, width]).padding(0.1);
    return xScale;
  };
  var createYScale = function createYScale(f, height) {
    var yScale = d3.scaleLinear().domain([0, d3.max(fullData, function (d) {
      return d[f];
    })]).range([height, 0]);
    return yScale;
  };
  var drawBar = function drawBar(selection, data) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'og';
    var addLabel = function addLabel(d) {
      return "".concat(d.key, ": ").concat(d.value);
    };
    var offset = {
      x: 60,
      y: 0
    };
    var tooltipHandlers = (0, _tooltip.default)(self.current, addLabel, offset);
    var updateBars = selection.selectAll("rect.".concat(className)).data(data, function (d) {
      return d[fields.x];
    });
    var enterBars = updateBars.enter().append('rect');
    enterBars.attr('class', "".concat(className)).attr('x', function (d) {
      return scaleRef.current.x(d[fields.x]);
    }).attr('width', scaleRef.current.x.bandwidth()).attr('y', hightRef.current);
    enterBars.on('mousemove', tooltipHandlers.mousemove).on('mouseleave', tooltipHandlers.mouseleave).on('click', function (currentData) {
      var _props$fields;
      var selected = enterBars.filter(function (d) {
        return d === currentData;
      });
      var value = selected.data()[0].key;
      var filter = props !== null && props !== void 0 && (_props$fields = props.fields) !== null && _props$fields !== void 0 && _props$fields.isList ? {
        id: props.id,
        title: props.title,
        field: props.fields.x,
        operation: 'has',
        values: value
      } : {
        id: props.id,
        title: props.title,
        field: props.fields.x,
        operation: 'eq',
        values: value
      };
      props.filterAdded([filter]);
    });
    updateBars.merge(enterBars).transition().duration(1000).attr('y', function (d) {
      return scaleRef.current.y(d[fields.y]);
    }).attr('height', function (d) {
      return hightRef.current - scaleRef.current.y(d[fields.y]);
    });

    // update_bars
    updateBars.exit().transition().duration(1000).attr('y', hightRef.current).attr('height', 0).remove();
    return updateBars;
  };
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      d3.select(self.current).selectAll('svg').remove('svg');
      var rect = self.current.getBoundingClientRect();
      var innerWidth = rect.width - margin.left - margin.right;
      var innerHeight = rect.height - margin.top - margin.bottom;
      hightRef.current = innerHeight;

      // create svg
      var svg = d3.select(self.current).append('svg').attr('width', rect.width).attr('height', rect.height);
      // create viewer
      viewerRef.current = svg.append('g').attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")"));
      var xScale = createXScale(fields.x, innerWidth);
      var yScale = createYScale(fields.y, innerHeight);
      scaleRef.current = {
        x: xScale,
        y: yScale
      };
      var xAxis = d3.axisBottom(xScale);
      viewerRef.current.append('g').attr('class', 'x axis').attr('transform', "translate(0,".concat(innerHeight, ")")).call(xAxis).selectAll('.tick text').call(wrap, xScale.bandwidth());

      // add the y Axis
      var yAxis = d3.axisLeft(yScale).tickSize(-innerWidth);
      viewerRef.current.append('g').call(yAxis);
      drawBar(viewerRef.current, fullData, 'og');
    }, 100);
  }, [props.layout]);
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      var data = [];
      if (props.filters.length > 0) {
        data = transform(props.filterData, props.fields.x, props.fields.isList);
      } else {
        data = fullData;
      }
      drawBar(viewerRef.current, data, 'ft');
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
var _default = exports.default = BarChart;
BarChart.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.shape({
    x: _propTypes.default.string.isRequired,
    isList: _propTypes.default.bool
  }).isRequired,
  id: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  filterData: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterAdded: _propTypes.default.func.isRequired,
  layout: _propTypes.default.shape({
    width: _propTypes.default.number.isRequired,
    currentCols: _propTypes.default.number.isRequired
  }).isRequired
};
},{"react":"n8MK","d3":"UzF0","prop-types":"D9Od","../../partials/tooltip":"nEAV"}]},{},[], null)
//# sourceMappingURL=BarChart.740ea7bd.js.map