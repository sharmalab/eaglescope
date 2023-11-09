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
})({"components/VisualTools/Chart/KMCurve.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var d3 = _interopRequireWildcard(require("d3"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
function isUndefined(d) {
  return d === undefined || d == null || typeof d === 'string' && d.toLowerCase() === 'na';
}
var KMCurve = exports.default = /*#__PURE__*/function (_PureComponent) {
  _inherits(KMCurve, _PureComponent);
  var _super = _createSuper(KMCurve);
  function KMCurve(props) {
    var _this;
    _classCallCheck(this, KMCurve);
    _this = _super.call(this, props);
    _this.self = _react.default.createRef();
    _this.maxTime = Number.NEGATIVE_INFINITY;
    _this.state = {
      margin: {
        top: 35,
        right: 20,
        bottom: 45,
        left: 45
      }
    };
    if (_this.props.filter) {
      _this.state.data = _this.transform(_this.props.data.filter(function (d) {
        return d[_this.props.filter.field] === _this.props.filter.value;
      }), _this.props.fields);
    } else {
      _this.state.data = _this.transform(_this.props.data, _this.props.fields);
    }
    return _this;
  }
  _createClass(KMCurve, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      setTimeout(function () {
        var rect = _this2.self.current.getBoundingClientRect();
        var innerWidth = rect.width - _this2.state.margin.left - _this2.state.margin.right;
        var innerHeight = rect.height - _this2.state.margin.top - _this2.state.margin.bottom;
        // create svg
        var svg = d3.select(_this2.self.current).append('svg').attr('width', rect.width).attr('height', rect.height);
        // create viewer
        var viewer = svg.append('g').attr('transform', "translate(".concat(_this2.state.margin.left, ",").concat(_this2.state.margin.top, ")"));
        //
        _this2.xScale = d3.scaleLinear().domain([0, _this2.maxTime]).range([0, innerWidth]);
        _this2.yScale = d3.scaleLinear().domain([0, 1]).range([innerHeight, 0]);
        _this2.color = d3.scaleOrdinal().domain(_this2.state.data.map(function (d) {
          return d.key;
        })).range(d3.quantize(function (t) {
          return d3.interpolateSpectral(t);
        }, _this2.state.data.length));
        var xaxisGroup = viewer.append('g').attr('transform', "translate(0,".concat(innerHeight, ")")).call(d3.axisBottom(_this2.xScale).ticks(4)); // .tickSize(-innerWidth));
        xaxisGroup.append('text').attr('y', 30).attr('x', innerWidth / 2).attr('fill', 'black').attr('font-size', 13).text("Time ".concat(_this2.props.fields.time.unit ? "(".concat(_this2.props.fields.time.unit, ")") : ''));

        // add the y Axis
        var yaxisGroup = viewer.append('g').call(d3.axisLeft(_this2.yScale).ticks(4)); // .tickSize(-innerWidth)
        yaxisGroup.append('text').attr('y', -30).attr('x', -innerHeight / 3).attr('fill', 'black').attr('font-size', 13).attr('transform', 'rotate(-90)').text('Survival Probability');
        _this2.state.data.forEach(function (d) {
          return _this2.drawKMCurve(viewer, d);
        });
        var height = 0;
        var nodeWidth = function nodeWidth(d) {
          return d.getBBox().width;
        };
        var legend = svg.append('g').attr('class', 'legend').attr('transform', "translate(".concat(_this2.state.margin.left + innerWidth / 2, ",0)"));
        var lg = legend.selectAll('g').data(_this2.state.data).enter().append('g').attr('transform', function (d, i) {
          return "translate(".concat(i * 100, ",").concat(height + 15, ")");
        });
        lg.append('rect').style('fill', function (d) {
          return _this2.color(d.key);
        }).attr('x', 0).attr('y', 0).attr('width', 10).attr('height', 10);
        lg.append('text').style('font-family', 'Georgia').style('font-size', '13px').attr('x', 17.5).attr('y', 10).text(function (d) {
          return d.key;
        });
        var offset = 0;
        lg.attr('transform', function transform() {
          var x = offset;
          offset += nodeWidth(this) + 10;
          return "translate(".concat(x, ",").concat(height + 10, ")");
        });
      }, 500);
    }
  }, {
    key: "transform",
    value: function transform(data, field) {
      var eventValue = field.eventValue;
      var censoredValue = field.censoredValue;
      var group = field.group.field;
      var time = field.time.field;
      var event = field.event.field;
      var filteredData = data.filter(function (d) {
        return d.collapsed_stage !== 'stage_x/NR' && !isUndefined(d[time]) && !isUndefined(d[event]) && !isUndefined(d[group]);
      });
      this.maxTime = Math.max.apply(Math, _toConsumableArray(filteredData.map(function (d) {
        return d[time];
      })));
      var groups = d3.nest().key(function (d) {
        return d[group];
      }).entries(filteredData);
      var rs = [];
      groups.forEach(function (g) {
        var key = g.key;
        var risk = g.values.length;
        var values = d3.nest().key(function (d) {
          return +d[time];
        }).sortKeys(function (a, b) {
          return +a - +b;
        }).rollup(function (v) {
          return {
            event: v.filter(function (d) {
              return d[event] === eventValue;
            }).length,
            censor: v.filter(function (d) {
              return d[event] === censoredValue;
            }).length
          };
        }).entries(g.values);
        var p = 1;
        var points = [];
        values.forEach(function (d) {
          var currentTime = +d.key;
          var e = d.value.event;
          var c = d.value.censor;
          if (currentTime < 0) return;
          if (e > 0) {
            p *= 1 - e / risk;
            var censored = false;
            points.push({
              p: p,
              currentTime: currentTime,
              censored: censored
            });
          }
          if (c > 0) {
            var _censored = true;
            points.push({
              p: p,
              currentTime: currentTime,
              censored: _censored
            });
          }
          risk -= e + c;
        });
        rs.push({
          key: key,
          points: points
        });
      });
      return rs;
    }
  }, {
    key: "drawLine",
    value: function drawLine(viewer, points, color) {
      var _this3 = this;
      var line = d3.line().curve(d3.curveStepAfter).x(function (d) {
        return _this3.xScale(d.time);
      }).y(function (d) {
        return _this3.yScale(d.p);
      });
      viewer.append('path').datum(points).attr('class', 'line').style('stroke', color).attr('d', line);
      points.forEach(function (point) {
        if (point.censored) {
          var p = [{
            p: point.p - 0.015,
            time: point.time
          }, {
            p: point.p + 0.015,
            time: point.time
          }];
          viewer.append('path').datum(p).attr('class', 'mark').style('stroke', color).attr('d', line);
        }
      });
    }
  }, {
    key: "drawKMCurve",
    value: function drawKMCurve(viewer, d) {
      // draw lines
      this.drawLine(viewer, d.points, this.color(d.key));
      // draw marks
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
  return KMCurve;
}(_react.PureComponent);
KMCurve.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.shape({
    x: _propTypes.default.string.isRequired,
    time: _propTypes.default.shape()
  }).isRequired,
  filter: _propTypes.default.shape({
    field: _propTypes.default.string,
    value: _propTypes.default.string
  }),
  id: _propTypes.default.string.isRequired
};
KMCurve.defaultProps = {
  filter: {}
};
},{"react":"../node_modules/react/index.js","d3":"../node_modules/d3/index.js","prop-types":"../node_modules/prop-types/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64865" + '/');
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
//# sourceMappingURL=/KMCurve.b8405d3d.js.map