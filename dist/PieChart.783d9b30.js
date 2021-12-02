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
})({"component/VisualTools/Chart/PieChart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var PieChart =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PieChart, _PureComponent);

  function PieChart(props) {
    var _this;

    _classCallCheck(this, PieChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PieChart).call(this, props));
    _this.self = _react.default.createRef();
    _this.tooltip = _react.default.createRef();
    _this.state = {
      margin: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
      },
      loading: true,
      error: null
    };
    var data = d3.nest().key(function (d) {
      return d[props.fields.x];
    }).rollup(function (v) {
      return v.length;
    }).entries(props.data);
    data.forEach(function (d) {
      d.selected = false;
    });
    _this.state.data = data;
    _this.sum = d3.sum(_this.state.data, function (d) {
      return d.value;
    });
    return _this;
  }

  _createClass(PieChart, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      // console.log('pie did update')
      var filters = this.props.filters.filter(function (f) {
        return f.id == _this2.props.id;
      });

      if (filters.length > 0) {
        // has filters
        this.pies.attr("fill", function (d) {
          return d.data.selected ? _this2.color(d.data.key) : '#C0C0C0';
        }).attr('fill-opacity', function (d) {
          return d.data.selected ? 1 : .5;
        }).attr('stroke', '#CCCCCC').attr('stroke-width', function (d) {
          return d.data.selected ? 3 : 0;
        });
      } else {
        this.state.data.forEach(function (d) {
          return d.selected = false;
        });
        this.pies.attr("fill", function (d) {
          return _this2.color(d.data.key);
        }).attr('fill-opacity', 1).attr('stroke', 'none');
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      setTimeout(function () {
        var rect = _this3.self.current.getBoundingClientRect();

        var innerWidth = rect.width - _this3.state.margin.left - _this3.state.margin.right;
        var innerHeight = rect.height - _this3.state.margin.top - _this3.state.margin.bottom;
        var radius = Math.min(innerWidth, innerHeight) / 2;
        var pie = d3.pie().sortValues(function (a, b) {
          return b - a;
        }).value(function (d) {
          return d.value;
        });
        var arcs = pie(_this3.state.data);
        var arc = d3.arc().innerRadius(0).outerRadius(radius);
        var arcLabel = d3.arc().innerRadius(radius).outerRadius(radius);
        _this3.color = d3.scaleOrdinal().domain(_this3.state.data.map(function (d) {
          return d.key;
        })).range(d3.quantize(function (t) {
          return d3.interpolateSpectral(t);
        }, _this3.state.data.length));
        var svg = d3.select(_this3.self.current).append("svg").attr("width", rect.width).attr("height", rect.height);
        var viewer = svg.append("g") //.attr("stroke", "white")
        .attr("transform", "translate(".concat(innerWidth / 2 + _this3.state.margin.left, ",").concat(innerHeight / 2 + _this3.state.margin.top, ")"));
        _this3.pies = viewer.selectAll("path").data(arcs).join("path").attr("class", "slide") // .attr("id",(d,i)=>i)
        .attr("fill", function (d) {
          return _this3.color(d.data.key);
        }).attr("d", arc).on('click', function (d, i) {
          // viewer.selectAll(".slide").attr('opacity',0.2)
          // const selected = this.pies.filter(function(d){
          //   return d === data
          // })
          console.log('click');
          d.data.selected = !d.data.selected;

          var values = _this3.state.data.reduce(function (values, d) {
            if (d.selected) values.push(d.key);
            return values;
          }, []);

          if (values.length > 0) {
            // has filters
            _this3.pies.attr("fill", function (d) {
              return d.data.selected ? _this3.color(d.data.key) : '#C0C0C0';
            }).attr('fill-opacity', function (d) {
              return d.data.selected ? 1 : .5;
            }).attr('stroke', '#CCCCCC').attr('stroke-width', function (d) {
              return d.data.selected ? 3 : 0;
            });

            var filter = {
              id: _this3.props.id,
              title: _this3.props.title,
              field: _this3.props.fields.x,
              operation: 'in',
              values: values
            };

            _this3.props.filterAdded([filter]);
          } else {
            _this3.pies.attr("fill", function (d) {
              return _this3.color(d.data.key);
            }).attr('fill-opacity', 1).attr('stroke', 'none');

            _this3.props.filterRemove(_this3.props.id);
          }
        });

        _this3.pies.append('title').text(function (d) {
          return "".concat(d.data.key, ":").concat(d.data.value, ":").concat(d3.format(".0%")(d.data.value / _this3.sum));
        }); //this.componentDidUpdate();

      }, 500); //   .on("mousemove", function(d){
      //     console.log(this)
      //     d3.select(this.tooltip.current)
      //       .style("left", 0 + "px")
      //       .style("top", 0 + "px")
      //       .style("display", "inline-block")
      //       .style("position", "absolute")
      //       .style("color","grey")
      //       .style("background","white")
      //       .style("z-index",999)
      //       .html( (d.data[this.state.fields.x]) + "<br>" +(d.value));
      // }.bind(this))
      // .on("mouseout", function(d){ d3.select(this.tooltip.current).style("display", "none");}.bind(this));
      // svg.append("g")
      //     .attr("font-family", "sans-serif")
      //     .attr("font-size", 12)
      //     .attr("text-anchor", "middle")
      //   .selectAll("text")
      //   .data(arcs)
      //   .join("text")
      //     .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      //     .call(text => text.append("tspan")
      //         .attr("y", "-0.4em")
      //         .attr("font-weight", "bold")
      //         .text(d => d.data[this.state.fields.x]))
      //     .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
      //         .attr("x", 0)
      //         .attr("y", "0.7em")
      //         .attr("fill-opacity", 0.7)
      //         .text(d => d.data[this.state.fields.y].toLocaleString()));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: {
          width: "100%",
          height: "100%"
        }
      }, _react.default.createElement("div", {
        id: this.props.id,
        ref: this.self,
        style: {
          width: "100%",
          height: "100%"
        }
      }), _react.default.createElement("div", {
        ref: this.tooltip,
        className: "tooltip"
      }));
    }
  }]);

  return PieChart;
}(_react.PureComponent);

exports.default = PieChart;
},{"react":"../node_modules/react/index.js","d3":"../node_modules/d3/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37059" + '/');

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
//# sourceMappingURL=/PieChart.783d9b30.js.map