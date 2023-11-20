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
})({"components/VisualTools/Chart/HorizontalBarChart.js":[function(require,module,exports) {
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
var transform = function transform(data, field) {
  var newData = d3.nest().key(function (d) {
    return d[field];
  }).sortKeys(d3.ascending).rollup(function (v) {
    return v.length;
  }).entries(data);
  return newData;
};
function HorizontalBarChart(props) {
  var margin = {
    top: 10,
    right: 10,
    bottom: 35,
    left: 10
  };
  var fields = {
    y: 'key',
    x: 'value'
  };
  var fullData = transform(props.data, props.fields.y);
  var self = (0, _react.useRef)();
  var scaleRef = (0, _react.useRef)();
  var hightRef = (0, _react.useRef)();
  var viewerRef = (0, _react.useRef)();
  var createXScale = function createXScale(f, width) {
    var xScale = d3.scaleLinear().domain([0, d3.max(fullData, function (d) {
      return d[f];
    })]).range([0, width]);
    return xScale;
  };
  var createYScale = function createYScale(f, height) {
    // set the ranges
    var yScale = d3.scaleBand().domain(fullData.map(function (d) {
      return d[f];
    })).range([height, 0]).padding(0.1);
    return yScale;
  };
  var createTextLabel = function createTextLabel() {
    viewerRef.current.selectAll('.label').remove();
    viewerRef.current.selectAll('.label').data(fullData, function (d) {
      return d[fields.y];
    }).enter().append('text').attr('class', 'label').attr('x', 5).attr('y', function (d) {
      return scaleRef.current.y(d[fields.y]) + scaleRef.current.y.bandwidth() / 2 + 4;
    }).text(function (d) {
      return d.key;
    }).on('click', function (x) {
      var filter = {
        id: props.id,
        title: props.title,
        field: props.fields.y,
        operation: 'eq',
        values: x.key
      };
      props.filterAdded([filter]);
    });
  };
  var drawBar = function drawBar(selection, data) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'og';
    var addLabel = function addLabel(d) {
      return "".concat(d.key, ": ").concat(d.value);
    };
    var offset = {
      x: 30,
      y: 10
    };
    var tooltipHandlers = (0, _tooltip.default)(self.current, addLabel, offset);
    var updateBars = selection.selectAll("rect.".concat(className)).data(data, function (d) {
      return d[fields.y];
    });
    var enterBars = updateBars.enter().append('rect');
    enterBars.attr('class', "".concat(className)).attr('x', 0).attr('height', scaleRef.current.y.bandwidth()).attr('y', function (d) {
      return scaleRef.current.y(d[fields.y]);
    });
    enterBars.on('mousemove', tooltipHandlers.mousemove).on('mouseleave', tooltipHandlers.mouseleave).on('click', function (enterData) {
      var selected = enterBars.filter(function (d) {
        return d === enterData;
      });
      var value = selected.data()[0].key;
      var filter = {
        id: props.id,
        title: props.title,
        field: props.fields.y,
        operation: 'eq',
        values: value
      };
      props.filterAdded([filter]);
    });
    updateBars.merge(enterBars).transition().duration(1000).attr('width', function (d) {
      return scaleRef.current.x(d[fields.x]);
    }).selectAll('.label').text(function (d) {
      return d.key;
    });
    // update_bars

    updateBars.exit().transition().duration(1000).attr('width', 0).remove();
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
      //
      var xScale = createXScale(fields.x, innerWidth);
      var yScale = createYScale(fields.y, innerHeight);
      scaleRef.current = {
        x: xScale,
        y: yScale
      };
      viewerRef.current.append('g').attr('transform', "translate(0,".concat(innerHeight, ")")).call(d3.axisBottom(xScale).tickSize(-innerHeight));
      drawBar(viewerRef.current, fullData, 'og');
      createTextLabel();
    }, 100);
  }, [props.layout]);
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      var data = [];
      if (props.filters.length > 0) {
        data = transform(props.filterData, props.fields.y);
      } else {
        data = fullData;
      }
      drawBar(viewerRef.current, data, 'ft');
      createTextLabel();
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
var _default = exports.default = HorizontalBarChart;
HorizontalBarChart.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.shape({
    y: _propTypes.default.string.isRequired
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
},{"react":"../node_modules/react/index.js","d3":"../node_modules/d3/index.js","prop-types":"../node_modules/prop-types/index.js","../../partials/tooltip":"components/partials/tooltip.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62781" + '/');
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
//# sourceMappingURL=/HorizontalBarChart.fcfb2c72.js.map