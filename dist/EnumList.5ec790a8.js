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
})({"dMEv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var d3 = _interopRequireWildcard(require("d3"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  return d3.nest().key(function (d) {
    return d[field];
  }).sortKeys(d3.ascending).rollup(function (v) {
    return v.length;
  }).entries(data);
};
function EnumList(props) {
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
  var addList = function addList(data) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'og';
    var container = self.current;
    container.innerHTML = ''; // Clear previous content
    fullData.forEach(function (d) {
      var _data$find;
      var filteredCount = ((_data$find = data.find(function (item) {
        return item.key === d.key;
      })) === null || _data$find === void 0 ? void 0 : _data$find.value) || 0;
      var listItem = document.createElement('div');
      listItem.id = d.key;
      listItem.className = 'list-item';
      listItem.innerText = d.key;
      var listBadge = document.createElement("span");
      listBadge.innerText = filteredCount + "/" + d.value;
      listBadge.classList.add('badge');
      listBadge.classList.add('badge-secondary');
      listBadge.style.margin = "2px";
      listItem.appendChild(listBadge);
      listItem.onclick = onSelect;
      listItem.style.padding = "3px";
      container.appendChild(listItem);
    });
  };

  // Handle checkbox selection
  var onSelect = function onSelect(e) {
    var value = e.target.id;
    var filter = props.fields.isList ? {
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
  };
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      var data = [];
      if (props.filters.length > 0) {
        data = transform(props.filterData, props.fields.x, props.fields.isList);
      } else {
        data = fullData;
      }
      addList(data, 'ft');
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
EnumList.propTypes = {
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
var _default = exports.default = EnumList;
},{"react":"n8MK","prop-types":"D9Od","d3":"UzF0"}]},{},[], null)
//# sourceMappingURL=EnumList.5ec790a8.js.map