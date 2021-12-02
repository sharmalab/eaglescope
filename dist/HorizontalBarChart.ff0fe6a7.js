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
})({"component/VisualTools/Chart/HorizontalBarChart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../../common/utils.js");

var d3 = _interopRequireWildcard(require("d3"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HorizontalBarChart =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(HorizontalBarChart, _PureComponent);

  function HorizontalBarChart(props) {
    var _this;

    _classCallCheck(this, HorizontalBarChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HorizontalBarChart).call(this, props));
    _this.self = _react.default.createRef();
    _this.state = {
      margin: {
        top: 10,
        right: 10,
        bottom: 35,
        left: 10
      },
      loading: true,
      error: null,
      fields: {
        y: 'key',
        x: 'value'
      }
    };
    _this.state.data = _this.transform(_this.props.data, _this.props.fields.y);
    return _this;
  }

  _createClass(HorizontalBarChart, [{
    key: "transform",
    value: function transform(data, field) {
      var new_data = d3.nest().key(function (d) {
        return d[field];
      }).sortKeys(d3.ascending).rollup(function (v) {
        return v.length;
      }).entries(data);
      return new_data;
    }
  }, {
    key: "createXAixs",
    value: function createXAixs(svg) {}
  }, {
    key: "createYAixs",
    value: function createYAixs(svg) {}
  }, {
    key: "createYScale",
    value: function createYScale(f, height) {
      // set the ranges
      var yScale = d3.scaleBand().domain(this.state.data.map(function (d) {
        return d[f];
      })).range([height, 0]).padding(0.1);
      return yScale;
    }
  }, {
    key: "createXScale",
    value: function createXScale(f, width) {
      var xScale = d3.scaleLinear().domain([0, d3.max(this.state.data, function (d) {
        return d[f];
      })]).range([0, width]);
      return xScale;
    }
  }, {
    key: "drawBar",
    value: function drawBar(selection, data) {
      var _this2 = this;

      var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'og';
      var update_bars = selection.selectAll("rect.".concat(className)).data(data, function (d) {
        return d[_this2.state.fields.y];
      });
      var enter_bars = update_bars.enter().append('rect');
      enter_bars.attr('class', "".concat(className)).attr("x", 0).attr("height", this.yScale.bandwidth()).attr("y", function (d) {
        return this.yScale(d[this.state.fields.y]);
      }.bind(this));
      enter_bars.on('click', function (data, i) {
        //enter_bars.attr('opacity',0.2)
        var selected = enter_bars.filter(function (d) {
          return d === data;
        }); //selected.attr('opacity',1)

        var value = selected.data()[0].key;
        var filter = {
          id: _this2.props.id,
          title: _this2.props.title,
          field: _this2.props.fields.y,
          operation: 'eq',
          values: value
        };

        _this2.props.filterAdded([filter]);
      });
      enter_bars.append('title').text(function (d) {
        return "".concat(d.key, ":").concat(d.value);
      });
      update_bars.merge(enter_bars).transition().duration(1000).attr("width", function (d) {
        return this.xScale(d[this.state.fields.x]);
      }.bind(this)).selectAll('.label').text(function (d) {
        return d.key;
      }); // update_bars

      update_bars.exit().transition().duration(1000).attr('width', 0).remove();
      return update_bars;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // console.log('bar update',this.props)
      var data = [];

      if (this.props.filters.length > 0) {
        data = this.transform(this.props.filterData, this.props.fields.y);
      } else {
        data = this.transform(this.props.data, this.props.fields.y);
      }

      this.filterbars = this.drawBar(this.viewer, data, 'ft');
      this.createTextLabel();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      setTimeout(function () {
        var rect = _this3.self.current.getBoundingClientRect();

        var innerWidth = rect.width - _this3.state.margin.left - _this3.state.margin.right;
        _this3.innerHeight = rect.height - _this3.state.margin.top - _this3.state.margin.bottom; // create svg 

        var svg = d3.select(_this3.self.current).append("svg").attr("width", rect.width).attr("height", rect.height); // create viewer

        _this3.viewer = svg.append("g").attr("transform", "translate(" + _this3.state.margin.left + "," + _this3.state.margin.top + ")"); //

        _this3.xScale = _this3.createXScale(_this3.state.fields.x, innerWidth);
        _this3.yScale = _this3.createYScale(_this3.state.fields.y, _this3.innerHeight);

        _this3.viewer.append("g").attr("transform", "translate(0,".concat(_this3.innerHeight, ")")).call(d3.axisBottom(_this3.xScale).tickSize(-_this3.innerHeight));

        _this3.bars = _this3.drawBar(_this3.viewer, _this3.state.data, 'og');
        _this3.filterbars = _this3.drawBar(_this3.viewer, _this3.state.data, 'ft');

        _this3.createTextLabel();

        _this3.componentDidUpdate();
      }, 500); // add the y Axis
      // this.viewer.append("g")
      //     .call(d3.axisLeft(this.yScale));
    }
  }, {
    key: "createTextLabel",
    value: function createTextLabel() {
      var _this4 = this;

      this.viewer.selectAll('.label').remove();
      this.viewer.selectAll('.label').data(this.state.data, function (d) {
        return d[_this4.state.fields.y];
      }).enter().append('text').attr('class', 'label').attr('x', 5).attr('y', function (d) {
        return this.yScale(d[this.state.fields.y]) + this.yScale.bandwidth() / 2 + 4;
      }.bind(this)).text(function (d) {
        return d.key;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: this.props.id,
        ref: this.self,
        style: {
          width: "100%",
          height: "100%"
        }
      });
      return _react.default.createElement("div", null, _react.default.createElement("svg", {
        width: this.props.width,
        height: this.props.height
      }, this.state.bars.map(function (d, i) {
        return _react.default.createElement("rect", {
          key: i,
          x: d.x,
          y: d.y,
          width: "2",
          height: d.height,
          fill: d.fill
        });
      }), _react.default.createElement("g", null, _react.default.createElement("g", {
        ref: "xAxis",
        transform: "translate(0, ".concat(height - margin.bottom, ")")
      }), _react.default.createElement("g", {
        ref: "yAxis",
        transform: "translate(".concat(margin.left, ", 0)")
      }), _react.default.createElement("g", {
        ref: "brush"
      }))));
    }
  }]);

  return HorizontalBarChart;
}(_react.PureComponent);

exports.default = HorizontalBarChart;
},{"react":"../node_modules/react/index.js","../../../common/utils.js":"common/utils.js","d3":"../node_modules/d3/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46493" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
//# sourceMappingURL=/HorizontalBarChart.ff0fe6a7.js.map