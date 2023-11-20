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
})({"../node_modules/array-move/index.js":[function(require,module,exports) {
'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var arrayMoveMutate = function arrayMoveMutate(array, from, to) {
  var startIndex = from < 0 ? array.length + from : from;
  if (startIndex >= 0 && startIndex < array.length) {
    var endIndex = to < 0 ? array.length + to : to;
    var _array$splice = array.splice(from, 1),
      _array$splice2 = _slicedToArray(_array$splice, 1),
      item = _array$splice2[0];
    array.splice(endIndex, 0, item);
  }
};
var arrayMove = function arrayMove(array, from, to) {
  array = _toConsumableArray(array);
  arrayMoveMutate(array, from, to);
  return array;
};
module.exports = arrayMove;
module.exports.mutate = arrayMoveMutate;
},{}],"../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _arrayWithHoles;
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
},{}],"../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _iterableToArrayLimit;
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
},{}],"../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _arrayLikeToArray;
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
},{}],"../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _unsupportedIterableToArray;
var _arrayLikeToArray = _interopRequireDefault(require("./arrayLikeToArray.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0, _arrayLikeToArray.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, _arrayLikeToArray.default)(o, minLen);
}
},{"./arrayLikeToArray.js":"../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _nonIterableRest;
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
},{}],"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _slicedToArray;
var _arrayWithHoles = _interopRequireDefault(require("./arrayWithHoles.js"));
var _iterableToArrayLimit = _interopRequireDefault(require("./iterableToArrayLimit.js"));
var _unsupportedIterableToArray = _interopRequireDefault(require("./unsupportedIterableToArray.js"));
var _nonIterableRest = _interopRequireDefault(require("./nonIterableRest.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) {
  return (0, _arrayWithHoles.default)(arr) || (0, _iterableToArrayLimit.default)(arr, i) || (0, _unsupportedIterableToArray.default)(arr, i) || (0, _nonIterableRest.default)();
}
},{"./arrayWithHoles.js":"../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js","./iterableToArrayLimit.js":"../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js","./unsupportedIterableToArray.js":"../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js","./nonIterableRest.js":"../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js"}],"../node_modules/@babel/runtime/helpers/esm/typeof.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _typeof;
function _typeof(o) {
  "@babel/helpers - typeof";

  return exports.default = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
},{}],"../node_modules/@babel/runtime/helpers/esm/toPrimitive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toPrimitive;
var _typeof2 = _interopRequireDefault(require("./typeof.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toPrimitive(input, hint) {
  if ((0, _typeof2.default)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0, _typeof2.default)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
},{"./typeof.js":"../node_modules/@babel/runtime/helpers/esm/typeof.js"}],"../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toPropertyKey;
var _typeof2 = _interopRequireDefault(require("./typeof.js"));
var _toPrimitive = _interopRequireDefault(require("./toPrimitive.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toPropertyKey(arg) {
  var key = (0, _toPrimitive.default)(arg, "string");
  return (0, _typeof2.default)(key) === "symbol" ? key : String(key);
}
},{"./typeof.js":"../node_modules/@babel/runtime/helpers/esm/typeof.js","./toPrimitive.js":"../node_modules/@babel/runtime/helpers/esm/toPrimitive.js"}],"../node_modules/@babel/runtime/helpers/esm/defineProperty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _defineProperty;
var _toPropertyKey = _interopRequireDefault(require("./toPropertyKey.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) {
  key = (0, _toPropertyKey.default)(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
},{"./toPropertyKey.js":"../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"}],"../node_modules/@babel/runtime/helpers/esm/objectSpread.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _objectSpread;
var _defineProperty = _interopRequireDefault(require("./defineProperty.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      (0, _defineProperty.default)(target, key, source[key]);
    });
  }
  return target;
}
},{"./defineProperty.js":"../node_modules/@babel/runtime/helpers/esm/defineProperty.js"}],"../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _classCallCheck;
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
},{}],"../node_modules/@babel/runtime/helpers/esm/createClass.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _createClass;
var _toPropertyKey = _interopRequireDefault(require("./toPropertyKey.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0, _toPropertyKey.default)(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
},{"./toPropertyKey.js":"../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"}],"../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
},{}],"../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _possibleConstructorReturn;
var _typeof2 = _interopRequireDefault(require("./typeof.js"));
var _assertThisInitialized = _interopRequireDefault(require("./assertThisInitialized.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _possibleConstructorReturn(self, call) {
  if (call && ((0, _typeof2.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0, _assertThisInitialized.default)(self);
}
},{"./typeof.js":"../node_modules/@babel/runtime/helpers/esm/typeof.js","./assertThisInitialized.js":"../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"}],"../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getPrototypeOf;
function _getPrototypeOf(o) {
  exports.default = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
},{}],"../node_modules/@babel/runtime/helpers/esm/inherits.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _inherits;
var _setPrototypeOf = _interopRequireDefault(require("./setPrototypeOf.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0, _setPrototypeOf.default)(subClass, superClass);
}
},{"./setPrototypeOf.js":"../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"}],"../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _arrayWithoutHoles;
var _arrayLikeToArray = _interopRequireDefault(require("./arrayLikeToArray.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0, _arrayLikeToArray.default)(arr);
}
},{"./arrayLikeToArray.js":"../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _iterableToArray;
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
},{}],"../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _nonIterableSpread;
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
},{}],"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _toConsumableArray;
var _arrayWithoutHoles = _interopRequireDefault(require("./arrayWithoutHoles.js"));
var _iterableToArray = _interopRequireDefault(require("./iterableToArray.js"));
var _unsupportedIterableToArray = _interopRequireDefault(require("./unsupportedIterableToArray.js"));
var _nonIterableSpread = _interopRequireDefault(require("./nonIterableSpread.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) {
  return (0, _arrayWithoutHoles.default)(arr) || (0, _iterableToArray.default)(arr) || (0, _unsupportedIterableToArray.default)(arr) || (0, _nonIterableSpread.default)();
}
},{"./arrayWithoutHoles.js":"../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js","./iterableToArray.js":"../node_modules/@babel/runtime/helpers/esm/iterableToArray.js","./unsupportedIterableToArray.js":"../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js","./nonIterableSpread.js":"../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js"}],"../node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortableContainer = exports.SortableContainer = sortableContainer;
exports.sortableElement = exports.SortableElement = sortableElement;
exports.sortableHandle = exports.SortableHandle = sortableHandle;
exports.arrayMove = arrayMove;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = require("react-dom");
var _invariant = _interopRequireDefault(require("invariant"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Manager = function () {
  function Manager() {
    (0, _classCallCheck2.default)(this, Manager);
    (0, _defineProperty2.default)(this, "refs", {});
  }
  (0, _createClass2.default)(Manager, [{
    key: "add",
    value: function add(collection, ref) {
      if (!this.refs[collection]) {
        this.refs[collection] = [];
      }
      this.refs[collection].push(ref);
    }
  }, {
    key: "remove",
    value: function remove(collection, ref) {
      var index = this.getIndex(collection, ref);
      if (index !== -1) {
        this.refs[collection].splice(index, 1);
      }
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      var _this = this;
      return this.refs[this.active.collection].find(function (_ref) {
        var node = _ref.node;
        return node.sortableInfo.index == _this.active.index;
      });
    }
  }, {
    key: "getIndex",
    value: function getIndex(collection, ref) {
      return this.refs[collection].indexOf(ref);
    }
  }, {
    key: "getOrderedRefs",
    value: function getOrderedRefs() {
      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;
      return this.refs[collection].sort(sortByIndex);
    }
  }]);
  return Manager;
}();
function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}
function arrayMove(array, from, to) {
  if ("development" !== 'production') {
    if (typeof console !== 'undefined') {
      console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move");
    }
  }
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
function omit(obj, keysToOmit) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
var events = {
  end: ['touchend', 'touchcancel', 'mouseup'],
  move: ['touchmove', 'mousemove'],
  start: ['touchstart', 'mousedown']
};
var vendorPrefix = function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }
  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];
  switch (pre) {
    case 'ms':
      return 'ms';
    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
}();
function setInlineStyles(node, styles) {
  Object.keys(styles).forEach(function (key) {
    node.style[key] = styles[key];
  });
}
function setTranslate3d(node, translate) {
  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? '' : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
}
function setTransitionDuration(node, duration) {
  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? '' : "".concat(duration, "ms");
}
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}
function limit(min, max, value) {
  return Math.max(min, Math.min(value, max));
}
function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }
  return 0;
}
function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
    right: getPixelValue(style.marginRight),
    top: getPixelValue(style.marginTop)
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
}
function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
  var boundingClientRect = node.getBoundingClientRect();
  return {
    top: boundingClientRect.top + scrollDelta.top,
    left: boundingClientRect.left + scrollDelta.left
  };
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    };
  }
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function getEdgeOffset(node, parent) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    left: 0,
    top: 0
  };
  if (!node) {
    return undefined;
  }
  var nodeOffset = {
    left: offset.left + node.offsetLeft,
    top: offset.top + node.offsetTop
  };
  if (node.parentNode === parent) {
    return nodeOffset;
  }
  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getTargetIndex(newIndex, prevIndex, oldIndex) {
  if (newIndex < oldIndex && newIndex > prevIndex) {
    return newIndex - 1;
  } else if (newIndex > oldIndex && newIndex < prevIndex) {
    return newIndex + 1;
  } else {
    return newIndex;
  }
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
    width = _ref.width,
    height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';
  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    (0, _invariant.default)(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }
  (0, _invariant.default)(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);
  if (unit === '%') {
    offsetX = offsetX * width / 100;
    offsetY = offsetY * height / 100;
  }
  return {
    x: offsetX,
    y: offsetY
  };
}
function getLockPixelOffsets(_ref2) {
  var height = _ref2.height,
    width = _ref2.width,
    lockOffset = _ref2.lockOffset;
  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
  (0, _invariant.default)(offsets.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);
  var _offsets = (0, _slicedToArray2.default)(offsets, 2),
    minLockOffset = _offsets[0],
    maxLockOffset = _offsets[1];
  return [getLockPixelOffset({
    height: height,
    lockOffset: minLockOffset,
    width: width
  }), getLockPixelOffset({
    height: height,
    lockOffset: maxLockOffset,
    width: width
  })];
}
function isScrollable(el) {
  var computedStyle = window.getComputedStyle(el);
  var overflowRegex = /(auto|scroll)/;
  var properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(function (property) {
    return overflowRegex.test(computedStyle[property]);
  });
}
function getScrollingParent(el) {
  if (!(el instanceof HTMLElement)) {
    return null;
  } else if (isScrollable(el)) {
    return el;
  } else {
    return getScrollingParent(el.parentNode);
  }
}
function getContainerGridGap(element) {
  var style = window.getComputedStyle(element);
  if (style.display === 'grid') {
    return {
      x: getPixelValue(style.gridColumnGap),
      y: getPixelValue(style.gridRowGap)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var KEYCODE = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var NodeType = {
  Anchor: 'A',
  Button: 'BUTTON',
  Canvas: 'CANVAS',
  Input: 'INPUT',
  Option: 'OPTION',
  Textarea: 'TEXTAREA',
  Select: 'SELECT'
};
function cloneNode(node) {
  var selector = 'input, textarea, select, canvas, [contenteditable]';
  var fields = node.querySelectorAll(selector);
  var clonedNode = node.cloneNode(true);
  var clonedFields = (0, _toConsumableArray2.default)(clonedNode.querySelectorAll(selector));
  clonedFields.forEach(function (field, i) {
    if (field.type !== 'file') {
      field.value = fields[i].value;
    }
    if (field.type === 'radio' && field.name) {
      field.name = "__sortableClone__".concat(field.name);
    }
    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
      var destCtx = field.getContext('2d');
      destCtx.drawImage(fields[i], 0, 0);
    }
  });
  return clonedNode;
}
function sortableHandle(WrappedComponent) {
  var _class, _temp;
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    (0, _inherits2.default)(WithSortableHandle, _React$Component);
    function WithSortableHandle() {
      (0, _classCallCheck2.default)(this, WithSortableHandle);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithSortableHandle).apply(this, arguments));
    }
    (0, _createClass2.default)(WithSortableHandle, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var node = (0, _reactDom.findDOMNode)(this);
        node.sortableHandle = true;
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        (0, _invariant.default)(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return (0, _react.createElement)(WrappedComponent, (0, _extends2.default)({
          ref: ref
        }, this.props));
      }
    }]);
    return WithSortableHandle;
  }(_react.Component), (0, _defineProperty2.default)(_class, "displayName", provideDisplayName('sortableHandle', WrappedComponent)), _temp;
}
function isSortableHandle(node) {
  return node.sortableHandle != null;
}
var AutoScroller = function () {
  function AutoScroller(container, onScrollCallback) {
    (0, _classCallCheck2.default)(this, AutoScroller);
    this.container = container;
    this.onScrollCallback = onScrollCallback;
  }
  (0, _createClass2.default)(AutoScroller, [{
    key: "clear",
    value: function clear() {
      if (this.interval == null) {
        return;
      }
      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var _this = this;
      var translate = _ref.translate,
        minTranslate = _ref.minTranslate,
        maxTranslate = _ref.maxTranslate,
        width = _ref.width,
        height = _ref.height;
      var direction = {
        x: 0,
        y: 0
      };
      var speed = {
        x: 1,
        y: 1
      };
      var acceleration = {
        x: 10,
        y: 10
      };
      var _this$container = this.container,
        scrollTop = _this$container.scrollTop,
        scrollLeft = _this$container.scrollLeft,
        scrollHeight = _this$container.scrollHeight,
        scrollWidth = _this$container.scrollWidth,
        clientHeight = _this$container.clientHeight,
        clientWidth = _this$container.clientWidth;
      var isTop = scrollTop === 0;
      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
      var isLeft = scrollLeft === 0;
      var isRight = scrollWidth - scrollLeft - clientWidth === 0;
      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
        direction.y = 1;
        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
        direction.x = 1;
        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
        direction.y = -1;
        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
        direction.x = -1;
        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
      }
      if (this.interval) {
        this.clear();
        this.isAutoScrolling = false;
      }
      if (direction.x !== 0 || direction.y !== 0) {
        this.interval = setInterval(function () {
          _this.isAutoScrolling = true;
          var offset = {
            left: speed.x * direction.x,
            top: speed.y * direction.y
          };
          _this.container.scrollTop += offset.top;
          _this.container.scrollLeft += offset.left;
          _this.onScrollCallback(offset);
        }, 5);
      }
    }
  }]);
  return AutoScroller;
}();
function defaultGetHelperDimensions(_ref) {
  var node = _ref.node;
  return {
    height: node.offsetHeight,
    width: node.offsetWidth
  };
}
function defaultShouldCancelStart(event) {
  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];
  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
    return true;
  }
  if (closest(event.target, function (el) {
    return el.contentEditable === 'true';
  })) {
    return true;
  }
  return false;
}
var propTypes = {
  axis: _propTypes.default.oneOf(['x', 'y', 'xy']),
  contentWindow: _propTypes.default.any,
  disableAutoscroll: _propTypes.default.bool,
  distance: _propTypes.default.number,
  getContainer: _propTypes.default.func,
  getHelperDimensions: _propTypes.default.func,
  helperClass: _propTypes.default.string,
  helperContainer: _propTypes.default.oneOfType([_propTypes.default.func, typeof HTMLElement === 'undefined' ? _propTypes.default.any : _propTypes.default.instanceOf(HTMLElement)]),
  hideSortableGhost: _propTypes.default.bool,
  keyboardSortingTransitionDuration: _propTypes.default.number,
  lockAxis: _propTypes.default.string,
  lockOffset: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]))]),
  lockToContainerEdges: _propTypes.default.bool,
  onSortEnd: _propTypes.default.func,
  onSortMove: _propTypes.default.func,
  onSortOver: _propTypes.default.func,
  onSortStart: _propTypes.default.func,
  pressDelay: _propTypes.default.number,
  pressThreshold: _propTypes.default.number,
  keyCodes: _propTypes.default.shape({
    lift: _propTypes.default.arrayOf(_propTypes.default.number),
    drop: _propTypes.default.arrayOf(_propTypes.default.number),
    cancel: _propTypes.default.arrayOf(_propTypes.default.number),
    up: _propTypes.default.arrayOf(_propTypes.default.number),
    down: _propTypes.default.arrayOf(_propTypes.default.number)
  }),
  shouldCancelStart: _propTypes.default.func,
  transitionDuration: _propTypes.default.number,
  updateBeforeSortStart: _propTypes.default.func,
  useDragHandle: _propTypes.default.bool,
  useWindowAsScrollContainer: _propTypes.default.bool
};
var defaultKeyCodes = {
  lift: [KEYCODE.SPACE],
  drop: [KEYCODE.SPACE],
  cancel: [KEYCODE.ESC],
  up: [KEYCODE.UP, KEYCODE.LEFT],
  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
};
var defaultProps = {
  axis: 'y',
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: defaultGetHelperDimensions,
  hideSortableGhost: true,
  lockOffset: '50%',
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: defaultKeyCodes,
  shouldCancelStart: defaultShouldCancelStart,
  transitionDuration: 300,
  useWindowAsScrollContainer: false
};
var omittedProps = Object.keys(propTypes);
function validateProps(props) {
  (0, _invariant.default)(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');
}
function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }
  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }
  return finalizer(false, value);
}
function sortableContainer(WrappedComponent) {
  var _class, _temp;
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    (0, _inherits2.default)(WithSortableContainer, _React$Component);
    function WithSortableContainer(props) {
      var _this;
      (0, _classCallCheck2.default)(this, WithSortableContainer);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithSortableContainer).call(this, props));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {});
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleStart", function (event) {
        var _this$props = _this.props,
          distance = _this$props.distance,
          shouldCancelStart = _this$props.shouldCancelStart;
        if (event.button === 2 || shouldCancelStart(event)) {
          return;
        }
        _this.touched = true;
        _this.position = getPosition(event);
        var node = closest(event.target, function (el) {
          return el.sortableInfo != null;
        });
        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
          var useDragHandle = _this.props.useDragHandle;
          var _node$sortableInfo = node.sortableInfo,
            index = _node$sortableInfo.index,
            collection = _node$sortableInfo.collection,
            disabled = _node$sortableInfo.disabled;
          if (disabled) {
            return;
          }
          if (useDragHandle && !closest(event.target, isSortableHandle)) {
            return;
          }
          _this.manager.active = {
            collection: collection,
            index: index
          };
          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
            event.preventDefault();
          }
          if (!distance) {
            if (_this.props.pressDelay === 0) {
              _this.handlePress(event);
            } else {
              _this.pressTimer = setTimeout(function () {
                return _this.handlePress(event);
              }, _this.props.pressDelay);
            }
          }
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "nodeIsChild", function (node) {
        return node.sortableInfo.manager === _this.manager;
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleMove", function (event) {
        var _this$props2 = _this.props,
          distance = _this$props2.distance,
          pressThreshold = _this$props2.pressThreshold;
        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
          var position = getPosition(event);
          var delta = {
            x: _this.position.x - position.x,
            y: _this.position.y - position.y
          };
          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
          _this.delta = delta;
          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
            clearTimeout(_this.cancelTimer);
            _this.cancelTimer = setTimeout(_this.cancel, 0);
          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
            _this.handlePress(event);
          }
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleEnd", function () {
        _this.touched = false;
        _this.cancel();
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "cancel", function () {
        var distance = _this.props.distance;
        var sorting = _this.state.sorting;
        if (!sorting) {
          if (!distance) {
            clearTimeout(_this.pressTimer);
          }
          _this.manager.active = null;
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handlePress", function (event) {
        try {
          var active = _this.manager.getActive();
          var _temp6 = function () {
            if (active) {
              var _temp7 = function _temp7() {
                var index = _node.sortableInfo.index;
                var margin = getElementMargin(_node);
                var gridGap = getContainerGridGap(_this.container);
                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();
                var dimensions = _getHelperDimensions({
                  index: index,
                  node: _node,
                  collection: _collection
                });
                _this.node = _node;
                _this.margin = margin;
                _this.gridGap = gridGap;
                _this.width = dimensions.width;
                _this.height = dimensions.height;
                _this.marginOffset = {
                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
                };
                _this.boundingClientRect = _node.getBoundingClientRect();
                _this.containerBoundingRect = containerBoundingRect;
                _this.index = index;
                _this.newIndex = index;
                _this.axis = {
                  x: _axis.indexOf('x') >= 0,
                  y: _axis.indexOf('y') >= 0
                };
                _this.offsetEdge = getEdgeOffset(_node, _this.container);
                if (_isKeySorting) {
                  _this.initialOffset = getPosition((0, _objectSpread2.default)({}, event, {
                    pageX: _this.boundingClientRect.left,
                    pageY: _this.boundingClientRect.top
                  }));
                } else {
                  _this.initialOffset = getPosition(event);
                }
                _this.initialScroll = {
                  left: _this.scrollContainer.scrollLeft,
                  top: _this.scrollContainer.scrollTop
                };
                _this.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                };
                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
                setInlineStyles(_this.helper, {
                  boxSizing: 'border-box',
                  height: "".concat(_this.height, "px"),
                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
                  pointerEvents: 'none',
                  position: 'fixed',
                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
                  width: "".concat(_this.width, "px")
                });
                if (_isKeySorting) {
                  _this.helper.focus();
                }
                if (_hideSortableGhost) {
                  _this.sortableGhost = _node;
                  setInlineStyles(_node, {
                    opacity: 0,
                    visibility: 'hidden'
                  });
                }
                _this.minTranslate = {};
                _this.maxTranslate = {};
                if (_isKeySorting) {
                  var _ref = _useWindowAsScrollContainer ? {
                      top: 0,
                      left: 0,
                      width: _this.contentWindow.innerWidth,
                      height: _this.contentWindow.innerHeight
                    } : _this.containerBoundingRect,
                    containerTop = _ref.top,
                    containerLeft = _ref.left,
                    containerWidth = _ref.width,
                    containerHeight = _ref.height;
                  var containerBottom = containerTop + containerHeight;
                  var containerRight = containerLeft + containerWidth;
                  if (_this.axis.x) {
                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
                  }
                  if (_this.axis.y) {
                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
                  }
                } else {
                  if (_this.axis.x) {
                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
                  }
                  if (_this.axis.y) {
                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
                  }
                }
                if (_helperClass) {
                  _helperClass.split(' ').forEach(function (className) {
                    return _this.helper.classList.add(className);
                  });
                }
                _this.listenerNode = event.touches ? _node : _this.contentWindow;
                if (_isKeySorting) {
                  _this.listenerNode.addEventListener('wheel', _this.handleKeyEnd, true);
                  _this.listenerNode.addEventListener('mousedown', _this.handleKeyEnd, true);
                  _this.listenerNode.addEventListener('keydown', _this.handleKeyDown);
                } else {
                  events.move.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
                  });
                  events.end.forEach(function (eventName) {
                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
                  });
                }
                _this.setState({
                  sorting: true,
                  sortingIndex: index
                });
                if (_onSortStart) {
                  _onSortStart({
                    node: _node,
                    index: index,
                    collection: _collection,
                    isKeySorting: _isKeySorting,
                    nodes: _this.manager.getOrderedRefs(),
                    helper: _this.helper
                  }, event);
                }
                if (_isKeySorting) {
                  _this.keyMove(0);
                }
              };
              var _this$props3 = _this.props,
                _axis = _this$props3.axis,
                _getHelperDimensions = _this$props3.getHelperDimensions,
                _helperClass = _this$props3.helperClass,
                _hideSortableGhost = _this$props3.hideSortableGhost,
                updateBeforeSortStart = _this$props3.updateBeforeSortStart,
                _onSortStart = _this$props3.onSortStart,
                _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
              var _node = active.node,
                _collection = active.collection;
              var _isKeySorting = _this.manager.isKeySorting;
              var _temp8 = function () {
                if (typeof updateBeforeSortStart === 'function') {
                  _this._awaitingUpdateBeforeSortStart = true;
                  var _temp9 = _finallyRethrows(function () {
                    var index = _node.sortableInfo.index;
                    return Promise.resolve(updateBeforeSortStart({
                      collection: _collection,
                      index: index,
                      node: _node,
                      isKeySorting: _isKeySorting
                    }, event)).then(function () {});
                  }, function (_wasThrown, _result) {
                    _this._awaitingUpdateBeforeSortStart = false;
                    if (_wasThrown) throw _result;
                    return _result;
                  });
                  if (_temp9 && _temp9.then) return _temp9.then(function () {});
                }
              }();
              return _temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8);
            }
          }();
          return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSortMove", function (event) {
        var onSortMove = _this.props.onSortMove;
        if (typeof event.preventDefault === 'function') {
          event.preventDefault();
        }
        _this.updateHelperPosition(event);
        _this.animateNodes();
        _this.autoscroll();
        if (onSortMove) {
          onSortMove(event);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleSortEnd", function (event) {
        var _this$props4 = _this.props,
          hideSortableGhost = _this$props4.hideSortableGhost,
          onSortEnd = _this$props4.onSortEnd;
        var _this$manager = _this.manager,
          collection = _this$manager.active.collection,
          isKeySorting = _this$manager.isKeySorting;
        var nodes = _this.manager.getOrderedRefs();
        if (_this.listenerNode) {
          if (isKeySorting) {
            _this.listenerNode.removeEventListener('wheel', _this.handleKeyEnd, true);
            _this.listenerNode.removeEventListener('mousedown', _this.handleKeyEnd, true);
            _this.listenerNode.removeEventListener('keydown', _this.handleKeyDown);
          } else {
            events.move.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
            });
            events.end.forEach(function (eventName) {
              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
            });
          }
        }
        _this.helper.parentNode.removeChild(_this.helper);
        if (hideSortableGhost && _this.sortableGhost) {
          setInlineStyles(_this.sortableGhost, {
            opacity: '',
            visibility: ''
          });
        }
        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node2 = nodes[i];
          var el = _node2.node;
          _node2.edgeOffset = null;
          _node2.boundingClientRect = null;
          setTranslate3d(el, null);
          setTransitionDuration(el, null);
          _node2.translate = null;
        }
        _this.autoScroller.clear();
        _this.manager.active = null;
        _this.manager.isKeySorting = false;
        _this.setState({
          sorting: false,
          sortingIndex: null
        });
        if (typeof onSortEnd === 'function') {
          onSortEnd({
            collection: collection,
            newIndex: _this.newIndex,
            oldIndex: _this.index,
            isKeySorting: isKeySorting,
            nodes: nodes
          }, event);
        }
        _this.touched = false;
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "autoscroll", function () {
        var disableAutoscroll = _this.props.disableAutoscroll;
        var isKeySorting = _this.manager.isKeySorting;
        if (disableAutoscroll) {
          _this.autoScroller.clear();
          return;
        }
        if (isKeySorting) {
          var translate = (0, _objectSpread2.default)({}, _this.translate);
          var scrollX = 0;
          var scrollY = 0;
          if (_this.axis.x) {
            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
            scrollX = _this.translate.x - translate.x;
          }
          if (_this.axis.y) {
            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
            scrollY = _this.translate.y - translate.y;
          }
          _this.translate = translate;
          setTranslate3d(_this.helper, _this.translate);
          _this.scrollContainer.scrollLeft += scrollX;
          _this.scrollContainer.scrollTop += scrollY;
          return;
        }
        _this.autoScroller.update({
          height: _this.height,
          maxTranslate: _this.maxTranslate,
          minTranslate: _this.minTranslate,
          translate: _this.translate,
          width: _this.width
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "onAutoScroll", function (offset) {
        _this.translate.x += offset.left;
        _this.translate.y += offset.top;
        _this.animateNodes();
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleKeyDown", function (event) {
        var keyCode = event.keyCode;
        var _this$props5 = _this.props,
          shouldCancelStart = _this$props5.shouldCancelStart,
          _this$props5$keyCodes = _this$props5.keyCodes,
          customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;
        var keyCodes = (0, _objectSpread2.default)({}, defaultKeyCodes, customKeyCodes);
        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
          return;
        }
        event.stopPropagation();
        event.preventDefault();
        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
          _this.keyLift(event);
        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
          _this.keyDrop(event);
        } else if (keyCodes.cancel.includes(keyCode)) {
          _this.newIndex = _this.manager.active.index;
          _this.keyDrop(event);
        } else if (keyCodes.up.includes(keyCode)) {
          _this.keyMove(-1);
        } else if (keyCodes.down.includes(keyCode)) {
          _this.keyMove(1);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "keyLift", function (event) {
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        var _node$sortableInfo2 = node.sortableInfo,
          index = _node$sortableInfo2.index,
          collection = _node$sortableInfo2.collection;
        _this.initialFocusedNode = target;
        _this.manager.isKeySorting = true;
        _this.manager.active = {
          index: index,
          collection: collection
        };
        _this.handlePress(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "keyMove", function (shift) {
        var nodes = _this.manager.getOrderedRefs();
        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
        var newIndex = _this.newIndex + shift;
        var prevIndex = _this.newIndex;
        if (newIndex < 0 || newIndex > lastIndex) {
          return;
        }
        _this.prevIndex = prevIndex;
        _this.newIndex = newIndex;
        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
        var target = nodes.find(function (_ref2) {
          var node = _ref2.node;
          return node.sortableInfo.index === targetIndex;
        });
        var targetNode = target.node;
        var scrollDelta = _this.containerScrollDelta;
        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
        var targetTranslate = target.translate || {
          x: 0,
          y: 0
        };
        var targetPosition = {
          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
        };
        var shouldAdjustForSize = prevIndex < newIndex;
        var sizeAdjustment = {
          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
        };
        _this.handleSortMove({
          pageX: targetPosition.left + sizeAdjustment.x,
          pageY: targetPosition.top + sizeAdjustment.y,
          ignoreTransition: shift === 0
        });
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "keyDrop", function (event) {
        _this.handleSortEnd(event);
        if (_this.initialFocusedNode) {
          _this.initialFocusedNode.focus();
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleKeyEnd", function (event) {
        if (_this.manager.active) {
          _this.keyDrop(event);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "isValidSortingTarget", function (event) {
        var useDragHandle = _this.props.useDragHandle;
        var target = event.target;
        var node = closest(target, function (el) {
          return el.sortableInfo != null;
        });
        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
      });
      validateProps(props);
      _this.manager = new Manager();
      _this.events = {
        end: _this.handleEnd,
        move: _this.handleMove,
        start: _this.handleStart
      };
      return _this;
    }
    (0, _createClass2.default)(WithSortableContainer, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          manager: this.manager
        };
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        var container = this.getContainer();
        Promise.resolve(container).then(function (containerNode) {
          _this2.container = containerNode;
          _this2.document = _this2.container.ownerDocument || document;
          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
          _this2.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;
          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
          Object.keys(_this2.events).forEach(function (key) {
            return events[key].forEach(function (eventName) {
              return _this2.container.addEventListener(eventName, _this2.events[key], false);
            });
          });
          _this2.container.addEventListener('keydown', _this2.handleKeyDown);
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;
        if (this.helper && this.helper.parentNode) {
          this.helper.parentNode.removeChild(this.helper);
        }
        if (!this.container) {
          return;
        }
        Object.keys(this.events).forEach(function (key) {
          return events[key].forEach(function (eventName) {
            return _this3.container.removeEventListener(eventName, _this3.events[key]);
          });
        });
        this.container.removeEventListener('keydown', this.handleKeyDown);
      }
    }, {
      key: "updateHelperPosition",
      value: function updateHelperPosition(event) {
        var _this$props6 = this.props,
          lockAxis = _this$props6.lockAxis,
          lockOffset = _this$props6.lockOffset,
          lockToContainerEdges = _this$props6.lockToContainerEdges,
          transitionDuration = _this$props6.transitionDuration,
          _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration,
          keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
        var isKeySorting = this.manager.isKeySorting;
        var ignoreTransition = event.ignoreTransition;
        var offset = getPosition(event);
        var translate = {
          x: offset.x - this.initialOffset.x,
          y: offset.y - this.initialOffset.y
        };
        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
        this.translate = translate;
        if (lockToContainerEdges) {
          var _getLockPixelOffsets = getLockPixelOffsets({
              height: this.height,
              lockOffset: lockOffset,
              width: this.width
            }),
            _getLockPixelOffsets2 = (0, _slicedToArray2.default)(_getLockPixelOffsets, 2),
            minLockOffset = _getLockPixelOffsets2[0],
            maxLockOffset = _getLockPixelOffsets2[1];
          var minOffset = {
            x: this.width / 2 - minLockOffset.x,
            y: this.height / 2 - minLockOffset.y
          };
          var maxOffset = {
            x: this.width / 2 - maxLockOffset.x,
            y: this.height / 2 - maxLockOffset.y
          };
          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
        }
        if (lockAxis === 'x') {
          translate.y = 0;
        } else if (lockAxis === 'y') {
          translate.x = 0;
        }
        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
        }
        setTranslate3d(this.helper, translate);
      }
    }, {
      key: "animateNodes",
      value: function animateNodes() {
        var _this$props7 = this.props,
          transitionDuration = _this$props7.transitionDuration,
          hideSortableGhost = _this$props7.hideSortableGhost,
          onSortOver = _this$props7.onSortOver;
        var containerScrollDelta = this.containerScrollDelta,
          windowScrollDelta = this.windowScrollDelta;
        var nodes = this.manager.getOrderedRefs();
        var sortingOffset = {
          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
        };
        var isKeySorting = this.manager.isKeySorting;
        var prevIndex = this.newIndex;
        this.newIndex = null;
        for (var i = 0, len = nodes.length; i < len; i++) {
          var _node3 = nodes[i].node;
          var index = _node3.sortableInfo.index;
          var width = _node3.offsetWidth;
          var height = _node3.offsetHeight;
          var offset = {
            height: this.height > height ? height / 2 : this.height / 2,
            width: this.width > width ? width / 2 : this.width / 2
          };
          var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
          var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
          var translate = {
            x: 0,
            y: 0
          };
          var edgeOffset = nodes[i].edgeOffset;
          if (!edgeOffset) {
            edgeOffset = getEdgeOffset(_node3, this.container);
            nodes[i].edgeOffset = edgeOffset;
            if (isKeySorting) {
              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
            }
          }
          var nextNode = i < nodes.length - 1 && nodes[i + 1];
          var prevNode = i > 0 && nodes[i - 1];
          if (nextNode && !nextNode.edgeOffset) {
            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);
            if (isKeySorting) {
              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
            }
          }
          if (index === this.index) {
            if (hideSortableGhost) {
              this.sortableGhost = _node3;
              setInlineStyles(_node3, {
                opacity: 0,
                visibility: 'hidden'
              });
            }
            continue;
          }
          if (transitionDuration) {
            setTransitionDuration(_node3, transitionDuration);
          }
          if (this.axis.x) {
            if (this.axis.y) {
              if (mustShiftForward || index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
                translate.x = this.width + this.marginOffset.x;
                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width) {
                  if (nextNode) {
                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                  }
                }
                if (this.newIndex === null) {
                  this.newIndex = index;
                }
              } else if (mustShiftBackward || index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
                translate.x = -(this.width + this.marginOffset.x);
                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
                  if (prevNode) {
                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                  }
                }
                this.newIndex = index;
              }
            } else {
              if (mustShiftBackward || index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
                translate.x = -(this.width + this.marginOffset.x);
                this.newIndex = index;
              } else if (mustShiftForward || index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
                translate.x = this.width + this.marginOffset.x;
                if (this.newIndex == null) {
                  this.newIndex = index;
                }
              }
            }
          } else if (this.axis.y) {
            if (mustShiftBackward || index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
              translate.y = -(this.height + this.marginOffset.y);
              this.newIndex = index;
            } else if (mustShiftForward || index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
              translate.y = this.height + this.marginOffset.y;
              if (this.newIndex == null) {
                this.newIndex = index;
              }
            }
          }
          setTranslate3d(_node3, translate);
          nodes[i].translate = translate;
        }
        if (this.newIndex == null) {
          this.newIndex = this.index;
        }
        if (isKeySorting) {
          this.newIndex = prevIndex;
        }
        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;
        if (onSortOver && this.newIndex !== oldIndex) {
          onSortOver({
            collection: this.manager.active.collection,
            index: this.index,
            newIndex: this.newIndex,
            oldIndex: oldIndex,
            isKeySorting: isKeySorting,
            nodes: nodes,
            helper: this.helper
          });
        }
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        (0, _invariant.default)(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var getContainer = this.props.getContainer;
        if (typeof getContainer !== 'function') {
          return (0, _reactDom.findDOMNode)(this);
        }
        return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return (0, _react.createElement)(WrappedComponent, (0, _extends2.default)({
          ref: ref
        }, omit(this.props, omittedProps)));
      }
    }, {
      key: "helperContainer",
      get: function get() {
        var helperContainer = this.props.helperContainer;
        if (typeof helperContainer === 'function') {
          return helperContainer();
        }
        return this.props.helperContainer || this.document.body;
      }
    }, {
      key: "containerScrollDelta",
      get: function get() {
        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
        if (useWindowAsScrollContainer) {
          return {
            left: 0,
            top: 0
          };
        }
        return {
          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
          top: this.scrollContainer.scrollTop - this.initialScroll.top
        };
      }
    }, {
      key: "windowScrollDelta",
      get: function get() {
        return {
          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
        };
      }
    }]);
    return WithSortableContainer;
  }(_react.Component), (0, _defineProperty2.default)(_class, "displayName", provideDisplayName('sortableList', WrappedComponent)), (0, _defineProperty2.default)(_class, "defaultProps", defaultProps), (0, _defineProperty2.default)(_class, "propTypes", propTypes), (0, _defineProperty2.default)(_class, "childContextTypes", {
    manager: _propTypes.default.object.isRequired
  }), _temp;
}
var propTypes$1 = {
  index: _propTypes.default.number.isRequired,
  collection: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  disabled: _propTypes.default.bool
};
var omittedProps$1 = Object.keys(propTypes$1);
function sortableElement(WrappedComponent) {
  var _class, _temp;
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    withRef: false
  };
  return _temp = _class = function (_React$Component) {
    (0, _inherits2.default)(WithSortableElement, _React$Component);
    function WithSortableElement() {
      (0, _classCallCheck2.default)(this, WithSortableElement);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithSortableElement).apply(this, arguments));
    }
    (0, _createClass2.default)(WithSortableElement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.register();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.node) {
          if (prevProps.index !== this.props.index) {
            this.node.sortableInfo.index = this.props.index;
          }
          if (prevProps.disabled !== this.props.disabled) {
            this.node.sortableInfo.disabled = this.props.disabled;
          }
        }
        if (prevProps.collection !== this.props.collection) {
          this.unregister(prevProps.collection);
          this.register();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unregister();
      }
    }, {
      key: "register",
      value: function register() {
        var _this$props = this.props,
          collection = _this$props.collection,
          disabled = _this$props.disabled,
          index = _this$props.index;
        var node = (0, _reactDom.findDOMNode)(this);
        node.sortableInfo = {
          collection: collection,
          disabled: disabled,
          index: index,
          manager: this.context.manager
        };
        this.node = node;
        this.ref = {
          node: node
        };
        this.context.manager.add(collection, this.ref);
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.collection;
        this.context.manager.remove(collection, this.ref);
      }
    }, {
      key: "getWrappedInstance",
      value: function getWrappedInstance() {
        (0, _invariant.default)(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
        return this.refs.wrappedInstance;
      }
    }, {
      key: "render",
      value: function render() {
        var ref = config.withRef ? 'wrappedInstance' : null;
        return (0, _react.createElement)(WrappedComponent, (0, _extends2.default)({
          ref: ref
        }, omit(this.props, omittedProps$1)));
      }
    }]);
    return WithSortableElement;
  }(_react.Component), (0, _defineProperty2.default)(_class, "displayName", provideDisplayName('sortableElement', WrappedComponent)), (0, _defineProperty2.default)(_class, "contextTypes", {
    manager: _propTypes.default.object.isRequired
  }), (0, _defineProperty2.default)(_class, "propTypes", propTypes$1), (0, _defineProperty2.default)(_class, "defaultProps", {
    collection: 0
  }), _temp;
}
},{"@babel/runtime/helpers/esm/extends":"../node_modules/@babel/runtime/helpers/esm/extends.js","@babel/runtime/helpers/esm/slicedToArray":"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js","@babel/runtime/helpers/esm/objectSpread":"../node_modules/@babel/runtime/helpers/esm/objectSpread.js","@babel/runtime/helpers/esm/classCallCheck":"../node_modules/@babel/runtime/helpers/esm/classCallCheck.js","@babel/runtime/helpers/esm/createClass":"../node_modules/@babel/runtime/helpers/esm/createClass.js","@babel/runtime/helpers/esm/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js","@babel/runtime/helpers/esm/getPrototypeOf":"../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js","@babel/runtime/helpers/esm/inherits":"../node_modules/@babel/runtime/helpers/esm/inherits.js","@babel/runtime/helpers/esm/assertThisInitialized":"../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js","@babel/runtime/helpers/esm/defineProperty":"../node_modules/@babel/runtime/helpers/esm/defineProperty.js","react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","react-dom":"../node_modules/react-dom/index.js","invariant":"../node_modules/invariant/browser.js","@babel/runtime/helpers/esm/toConsumableArray":"../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"}],"../node_modules/react-bootstrap/esm/PopoverHeader.js":[function(require,module,exports) {
"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ThemeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PopoverHeader = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover-header');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix),
    ...props
  });
});
PopoverHeader.displayName = 'PopoverHeader';
var _default = exports.default = PopoverHeader;
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/react-bootstrap/node_modules/classnames/index.js","./ThemeProvider":"../node_modules/react-bootstrap/esm/ThemeProvider.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"../node_modules/react-bootstrap/esm/PopoverBody.js":[function(require,module,exports) {
"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ThemeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PopoverBody = /*#__PURE__*/React.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover-body');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix),
    ...props
  });
});
PopoverBody.displayName = 'PopoverBody';
var _default = exports.default = PopoverBody;
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/react-bootstrap/node_modules/classnames/index.js","./ThemeProvider":"../node_modules/react-bootstrap/esm/ThemeProvider.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"../node_modules/react-bootstrap/esm/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BsPrefixComponent = void 0;
exports.getOverlayDirection = getOverlayDirection;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class BsPrefixComponent extends React.Component {}

// Need to use this instead of typeof Component to get proper type checking.
exports.BsPrefixComponent = BsPrefixComponent;
function getOverlayDirection(placement, isRTL) {
  let bsDirection = placement;
  if (placement === 'left') {
    bsDirection = isRTL ? 'end' : 'start';
  } else if (placement === 'right') {
    bsDirection = isRTL ? 'start' : 'end';
  }
  return bsDirection;
}
},{"react":"../node_modules/react/index.js"}],"../node_modules/react-bootstrap/esm/getInitialPopperStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInitialPopperStyles;
function getInitialPopperStyles(position = 'absolute') {
  return {
    position,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none'
  };
}
},{}],"../node_modules/react-bootstrap/esm/Popover.js":[function(require,module,exports) {
"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _ThemeProvider = require("./ThemeProvider");
var _PopoverHeader = _interopRequireDefault(require("./PopoverHeader"));
var _PopoverBody = _interopRequireDefault(require("./PopoverBody"));
var _helpers = require("./helpers");
var _getInitialPopperStyles = _interopRequireDefault(require("./getInitialPopperStyles"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Popover = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  placement = 'right',
  className,
  style,
  children,
  body,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  const decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover');
  const isRTL = (0, _ThemeProvider.useIsRTL)();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = (0, _helpers.getOverlayDirection)(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...(0, _getInitialPopperStyles.default)(popper == null ? void 0 : popper.strategy)
    };
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: ref,
    role: "tooltip",
    style: computedStyle,
    "x-placement": primaryPlacement,
    className: (0, _classnames.default)(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "popover-arrow",
      ...arrowProps
    }), body ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopoverBody.default, {
      children: children
    }) : children]
  });
});
var _default = exports.default = Object.assign(Popover, {
  Header: _PopoverHeader.default,
  Body: _PopoverBody.default,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
});
},{"classnames":"../node_modules/react-bootstrap/node_modules/classnames/index.js","react":"../node_modules/react/index.js","./ThemeProvider":"../node_modules/react-bootstrap/esm/ThemeProvider.js","./PopoverHeader":"../node_modules/react-bootstrap/esm/PopoverHeader.js","./PopoverBody":"../node_modules/react-bootstrap/esm/PopoverBody.js","./helpers":"../node_modules/react-bootstrap/esm/helpers.js","./getInitialPopperStyles":"../node_modules/react-bootstrap/esm/getInitialPopperStyles.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"../node_modules/react-bootstrap/node_modules/dom-helpers/esm/contains.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;
/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
},{}],"../node_modules/@restart/hooks/esm/useTimeout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTimeout;
var _react = require("react");
var _useMounted = _interopRequireDefault(require("./useMounted"));
var _useWillUnmount = _interopRequireDefault(require("./useWillUnmount"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */
const MAX_DELAY_MS = 2 ** 31 - 1;
function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  const delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(() => setChainedTimeout(handleRef, fn, timeoutAtMs), MAX_DELAY_MS);
}

/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */
function useTimeout() {
  const isMounted = (0, _useMounted.default)();

  // types are confused between node and web here IDK
  const handleRef = (0, _react.useRef)();
  (0, _useWillUnmount.default)(() => clearTimeout(handleRef.current));
  return (0, _react.useMemo)(() => {
    const clear = () => clearTimeout(handleRef.current);
    function set(fn, delayMs = 0) {
      if (!isMounted()) return;
      clear();
      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }
    return {
      set,
      clear
    };
  }, []);
}
},{"react":"../node_modules/react/index.js","./useMounted":"../node_modules/@restart/hooks/esm/useMounted.js","./useWillUnmount":"../node_modules/@restart/hooks/esm/useWillUnmount.js"}],"../node_modules/dequal/dist/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dequal = dequal;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
  for (key of iter.keys()) {
    if (dequal(key, tar)) return key;
  }
}
function dequal(foo, bar) {
  var ctor, len, tmp;
  if (foo === bar) return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len]));
      }
      return len === -1;
    }
    if (ctor === Set) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len;
        if (tmp && _typeof(tmp) === 'object') {
          tmp = find(bar, tmp);
          if (!tmp) return false;
        }
        if (!bar.has(tmp)) return false;
      }
      return true;
    }
    if (ctor === Map) {
      if (foo.size !== bar.size) {
        return false;
      }
      for (len of foo) {
        tmp = len[0];
        if (tmp && _typeof(tmp) === 'object') {
          tmp = find(bar, tmp);
          if (!tmp) return false;
        }
        if (!dequal(len[1], bar.get(tmp))) {
          return false;
        }
      }
      return true;
    }
    if (ctor === ArrayBuffer) {
      foo = new Uint8Array(foo);
      bar = new Uint8Array(bar);
    } else if (ctor === DataView) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo.getInt8(len) === bar.getInt8(len));
      }
      return len === -1;
    }
    if (ArrayBuffer.isView(foo)) {
      if ((len = foo.byteLength) === bar.byteLength) {
        while (len-- && foo[len] === bar[len]);
      }
      return len === -1;
    }
    if (!ctor || _typeof(foo) === 'object') {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}
},{}],"../node_modules/@restart/hooks/esm/useSafeState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useMounted = _interopRequireDefault(require("./useMounted"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * `useSafeState` takes the return value of a `useState` hook and wraps the
 * setter to prevent updates onces the component has unmounted. Can used
 * with `useMergeState` and `useStateAsync` as well
 *
 * @param state The return value of a useStateHook
 *
 * ```ts
 * const [show, setShow] = useSafeState(useState(true));
 * ```
 */

function useSafeState(state) {
  const isMounted = (0, _useMounted.default)();
  return [state[0], (0, _react.useCallback)(nextState => {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
var _default = exports.default = useSafeState;
},{"react":"../node_modules/react/index.js","./useMounted":"../node_modules/@restart/hooks/esm/useMounted.js"}],"../node_modules/@popperjs/core/lib/popper-base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createPopper", {
  enumerable: true,
  get: function () {
    return _createPopper.createPopper;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
var _createPopper = require("./createPopper.js");
},{"./createPopper.js":"../node_modules/@popperjs/core/lib/createPopper.js"}],"../node_modules/@restart/ui/esm/popper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPopper = void 0;
Object.defineProperty(exports, "placements", {
  enumerable: true,
  get: function () {
    return _enums.placements;
  }
});
var _arrow = _interopRequireDefault(require("@popperjs/core/lib/modifiers/arrow"));
var _computeStyles = _interopRequireDefault(require("@popperjs/core/lib/modifiers/computeStyles"));
var _eventListeners = _interopRequireDefault(require("@popperjs/core/lib/modifiers/eventListeners"));
var _flip = _interopRequireDefault(require("@popperjs/core/lib/modifiers/flip"));
var _hide = _interopRequireDefault(require("@popperjs/core/lib/modifiers/hide"));
var _offset = _interopRequireDefault(require("@popperjs/core/lib/modifiers/offset"));
var _popperOffsets = _interopRequireDefault(require("@popperjs/core/lib/modifiers/popperOffsets"));
var _preventOverflow = _interopRequireDefault(require("@popperjs/core/lib/modifiers/preventOverflow"));
var _enums = require("@popperjs/core/lib/enums");
var _popperBase = require("@popperjs/core/lib/popper-base");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment
const createPopper = exports.createPopper = (0, _popperBase.popperGenerator)({
  defaultModifiers: [_hide.default, _popperOffsets.default, _computeStyles.default, _eventListeners.default, _offset.default, _flip.default, _preventOverflow.default, _arrow.default]
});
},{"@popperjs/core/lib/modifiers/arrow":"../node_modules/@popperjs/core/lib/modifiers/arrow.js","@popperjs/core/lib/modifiers/computeStyles":"../node_modules/@popperjs/core/lib/modifiers/computeStyles.js","@popperjs/core/lib/modifiers/eventListeners":"../node_modules/@popperjs/core/lib/modifiers/eventListeners.js","@popperjs/core/lib/modifiers/flip":"../node_modules/@popperjs/core/lib/modifiers/flip.js","@popperjs/core/lib/modifiers/hide":"../node_modules/@popperjs/core/lib/modifiers/hide.js","@popperjs/core/lib/modifiers/offset":"../node_modules/@popperjs/core/lib/modifiers/offset.js","@popperjs/core/lib/modifiers/popperOffsets":"../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","@popperjs/core/lib/modifiers/preventOverflow":"../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js","@popperjs/core/lib/enums":"../node_modules/@popperjs/core/lib/enums.js","@popperjs/core/lib/popper-base":"../node_modules/@popperjs/core/lib/popper-base.js"}],"../node_modules/@restart/ui/esm/usePopper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _dequal = require("dequal");
var _useSafeState = _interopRequireDefault(require("@restart/hooks/useSafeState"));
var _popper = require("./popper");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _excluded = ["enabled", "placement", "strategy", "modifiers"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
const disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false,
  phase: 'afterWrite',
  fn: () => undefined
};

// until docjs supports type exports...

const ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: ({
    state
  }) => () => {
    const {
      reference,
      popper
    } = state.elements;
    if ('removeAttribute' in reference) {
      const ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(id => id.trim() !== popper.id);
      if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
    }
  },
  fn: ({
    state
  }) => {
    var _popper$getAttribute;
    const {
      popper,
      reference
    } = state.elements;
    const role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      const ids = reference.getAttribute('aria-describedby');
      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }
      reference.setAttribute('aria-describedby', ids ? `${ids},${popper.id}` : popper.id);
    }
  }
};
const EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */
function usePopper(referenceElement, popperElement, _ref = {}) {
  let {
      enabled = true,
      placement = 'bottom',
      strategy = 'absolute',
      modifiers = EMPTY_MODIFIERS
    } = _ref,
    config = _objectWithoutPropertiesLoose(_ref, _excluded);
  const prevModifiers = (0, _react.useRef)(modifiers);
  const popperInstanceRef = (0, _react.useRef)();
  const update = (0, _react.useCallback)(() => {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  const forceUpdate = (0, _react.useCallback)(() => {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  const [popperState, setState] = (0, _useSafeState.default)((0, _react.useState)({
    placement,
    update,
    forceUpdate,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  }));
  const updateModifier = (0, _react.useMemo)(() => ({
    name: 'updateStateModifier',
    enabled: true,
    phase: 'write',
    requires: ['computeStyles'],
    fn: ({
      state
    }) => {
      const styles = {};
      const attributes = {};
      Object.keys(state.elements).forEach(element => {
        styles[element] = state.styles[element];
        attributes[element] = state.attributes[element];
      });
      setState({
        state,
        styles,
        attributes,
        update,
        forceUpdate,
        placement: state.placement
      });
    }
  }), [update, forceUpdate, setState]);
  const nextModifiers = (0, _react.useMemo)(() => {
    if (!(0, _dequal.dequal)(prevModifiers.current, modifiers)) {
      prevModifiers.current = modifiers;
    }
    return prevModifiers.current;
  }, [modifiers]);
  (0, _react.useEffect)(() => {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement,
      strategy,
      modifiers: [...nextModifiers, updateModifier, disabledApplyStylesModifier]
    });
  }, [strategy, placement, updateModifier, enabled, nextModifiers]);
  (0, _react.useEffect)(() => {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }
    popperInstanceRef.current = (0, _popper.createPopper)(referenceElement, popperElement, Object.assign({}, config, {
      placement,
      strategy,
      modifiers: [...nextModifiers, ariaDescribedByModifier, updateModifier]
    }));
    return () => {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(s => Object.assign({}, s, {
          attributes: {},
          styles: {
            popper: {}
          }
        }));
      }
    };
    // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
var _default = exports.default = usePopper;
},{"react":"../node_modules/react/index.js","dequal":"../node_modules/dequal/dist/index.mjs","@restart/hooks/useSafeState":"../node_modules/@restart/hooks/esm/useSafeState.js","./popper":"../node_modules/@restart/ui/esm/popper.js"}],"../node_modules/@restart/ui/esm/useClickOutside.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRefTarget = exports.default = void 0;
var _contains = _interopRequireDefault(require("dom-helpers/contains"));
var _listen = _interopRequireDefault(require("dom-helpers/listen"));
var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));
var _react = require("react");
var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));
var _warning = _interopRequireDefault(require("warning"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const noop = () => {};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
const getRefTarget = ref => ref && ('current' in ref ? ref.current : ref);
exports.getRefTarget = getRefTarget;
const InitialTriggerEvents = {
  click: 'mousedown',
  mouseup: 'mousedown',
  pointerup: 'pointerdown'
};

/**
 * The `useClickOutside` hook registers your callback on the document that fires
 * when a pointer event is registered outside of the provided ref or element.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onClickOutside
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useClickOutside(ref, onClickOutside = noop, {
  disabled,
  clickTrigger = 'click'
} = {}) {
  const preventMouseClickOutsideRef = (0, _react.useRef)(false);
  const waitingForTrigger = (0, _react.useRef)(false);
  const handleMouseCapture = (0, _react.useCallback)(e => {
    const currentTarget = getRefTarget(ref);
    (0, _warning.default)(!!currentTarget, 'ClickOutside captured a close event but does not have a ref to compare it to. ' + 'useClickOutside(), should be passed a ref that resolves to a DOM node');
    preventMouseClickOutsideRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!(0, _contains.default)(currentTarget, e.target) || waitingForTrigger.current;
    waitingForTrigger.current = false;
  }, [ref]);
  const handleInitialMouse = (0, _useEventCallback.default)(e => {
    const currentTarget = getRefTarget(ref);
    if (currentTarget && (0, _contains.default)(currentTarget, e.target)) {
      waitingForTrigger.current = true;
    }
  });
  const handleMouse = (0, _useEventCallback.default)(e => {
    if (!preventMouseClickOutsideRef.current) {
      onClickOutside(e);
    }
  });
  (0, _react.useEffect)(() => {
    var _ownerWindow$event, _ownerWindow$parent;
    if (disabled || ref == null) return undefined;
    const doc = (0, _ownerDocument.default)(getRefTarget(ref));
    const ownerWindow = doc.defaultView || window;

    // Store the current event to avoid triggering handlers immediately
    // For things rendered in an iframe, the event might originate on the parent window
    // so we should fall back to that global event if the local one doesn't exist
    // https://github.com/facebook/react/issues/20074
    let currentEvent = (_ownerWindow$event = ownerWindow.event) != null ? _ownerWindow$event : (_ownerWindow$parent = ownerWindow.parent) == null ? void 0 : _ownerWindow$parent.event;
    let removeInitialTriggerListener = null;
    if (InitialTriggerEvents[clickTrigger]) {
      removeInitialTriggerListener = (0, _listen.default)(doc, InitialTriggerEvents[clickTrigger], handleInitialMouse, true);
    }

    // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.
    const removeMouseCaptureListener = (0, _listen.default)(doc, clickTrigger, handleMouseCapture, true);
    const removeMouseListener = (0, _listen.default)(doc, clickTrigger, e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleMouse(e);
    });
    let mobileSafariHackListeners = [];
    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(el => (0, _listen.default)(el, 'mousemove', noop));
    }
    return () => {
      removeInitialTriggerListener == null ? void 0 : removeInitialTriggerListener();
      removeMouseCaptureListener();
      removeMouseListener();
      mobileSafariHackListeners.forEach(remove => remove());
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleInitialMouse, handleMouse]);
}
var _default = exports.default = useClickOutside;
},{"dom-helpers/contains":"../node_modules/@restart/ui/node_modules/dom-helpers/esm/contains.js","dom-helpers/listen":"../node_modules/@restart/ui/node_modules/dom-helpers/esm/listen.js","dom-helpers/ownerDocument":"../node_modules/@restart/ui/node_modules/dom-helpers/esm/ownerDocument.js","react":"../node_modules/react/index.js","@restart/hooks/useEventCallback":"../node_modules/@restart/hooks/esm/useEventCallback.js","warning":"../node_modules/warning/warning.js"}],"../node_modules/@restart/ui/esm/useRootClose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _listen = _interopRequireDefault(require("dom-helpers/listen"));
var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));
var _react = require("react");
var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));
var _useClickOutside = _interopRequireWildcard(require("./useClickOutside"));
var _utils = require("./utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const noop = () => {};
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, {
  disabled,
  clickTrigger
} = {}) {
  const onClose = onRootClose || noop;
  (0, _useClickOutside.default)(ref, onClose, {
    disabled,
    clickTrigger
  });
  const handleKeyUp = (0, _useEventCallback.default)(e => {
    if ((0, _utils.isEscKey)(e)) {
      onClose(e);
    }
  });
  (0, _react.useEffect)(() => {
    if (disabled || ref == null) return undefined;
    const doc = (0, _ownerDocument.default)((0, _useClickOutside.getRefTarget)(ref));

    // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074
    let currentEvent = (doc.defaultView || window).event;
    const removeKeyupListener = (0, _listen.default)(doc, 'keyup', e => {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleKeyUp(e);
    });
    return () => {
      removeKeyupListener();
    };
  }, [ref, disabled, handleKeyUp]);
}
var _default = exports.default = useRootClose;
},{"dom-helpers/listen":"../node_modules/@restart/ui/node_modules/dom-helpers/esm/listen.js","dom-helpers/ownerDocument":"../node_modules/@restart/ui/node_modules/dom-helpers/esm/ownerDocument.js","react":"../node_modules/react/index.js","@restart/hooks/useEventCallback":"../node_modules/@restart/hooks/esm/useEventCallback.js","./useClickOutside":"../node_modules/@restart/ui/esm/useClickOutside.js","./utils":"../node_modules/@restart/ui/esm/utils.js"}],"../node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeOptionsWithPopperConfig;
exports.toModifierArray = toModifierArray;
exports.toModifierMap = toModifierMap;
function toModifierMap(modifiers) {
  const result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  }

  // eslint-disable-next-line no-unused-expressions
  modifiers == null ? void 0 : modifiers.forEach(m => {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map = {}) {
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(k => {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig({
  enabled,
  enableEvents,
  placement,
  flip,
  offset,
  fixed,
  containerPadding,
  arrowElement,
  popperConfig = {}
}) {
  var _modifiers$eventListe, _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  const modifiers = toModifierMap(popperConfig.modifiers);
  return Object.assign({}, popperConfig, {
    placement,
    enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray(Object.assign({}, modifiers, {
      eventListeners: {
        enabled: enableEvents,
        options: (_modifiers$eventListe = modifiers.eventListeners) == null ? void 0 : _modifiers$eventListe.options
      },
      preventOverflow: Object.assign({}, modifiers.preventOverflow, {
        options: containerPadding ? Object.assign({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object.assign({
          offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object.assign({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object.assign({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object.assign({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}
},{}],"../node_modules/@restart/ui/esm/Overlay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactDom = _interopRequireDefault(require("react-dom"));
var _useCallbackRef = _interopRequireDefault(require("@restart/hooks/useCallbackRef"));
var _useMergedRefs = _interopRequireDefault(require("@restart/hooks/useMergedRefs"));
var _usePopper = _interopRequireDefault(require("./usePopper"));
var _useRootClose = _interopRequireDefault(require("./useRootClose"));
var _useWaitForDOMRef = _interopRequireDefault(require("./useWaitForDOMRef"));
var _mergeOptionsWithPopperConfig = _interopRequireDefault(require("./mergeOptionsWithPopperConfig"));
var _ImperativeTransition = require("./ImperativeTransition");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
const Overlay = /*#__PURE__*/React.forwardRef((props, outerRef) => {
  const {
    flip,
    offset,
    placement,
    containerPadding,
    popperConfig = {},
    transition: Transition,
    runTransition
  } = props;
  const [rootElement, attachRef] = (0, _useCallbackRef.default)();
  const [arrowElement, attachArrowRef] = (0, _useCallbackRef.default)();
  const mergedRef = (0, _useMergedRefs.default)(attachRef, outerRef);
  const container = (0, _useWaitForDOMRef.default)(props.container);
  const target = (0, _useWaitForDOMRef.default)(props.target);
  const [exited, setExited] = (0, _react.useState)(!props.show);
  const popper = (0, _usePopper.default)(target, rootElement, (0, _mergeOptionsWithPopperConfig.default)({
    placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip,
    offset,
    arrowElement,
    popperConfig
  }));

  // TODO: I think this needs to be in an effect
  if (props.show && exited) {
    setExited(false);
  }
  const handleHidden = (...args) => {
    setExited(true);
    if (props.onExited) {
      props.onExited(...args);
    }
  };

  // Don't un-render the overlay while it's transitioning out.
  const mountOverlay = props.show || !exited;
  (0, _useRootClose.default)(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }
  const {
    onExit,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = props;
  let child = props.children(Object.assign({}, popper.attributes.popper, {
    style: popper.styles.popper,
    ref: mergedRef
  }), {
    popper,
    placement,
    show: !!props.show,
    arrowProps: Object.assign({}, popper.attributes.arrow, {
      style: popper.styles.arrow,
      ref: attachArrowRef
    })
  });
  child = (0, _ImperativeTransition.renderTransition)(Transition, runTransition, {
    in: !!props.show,
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    children: child,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered
  });
  return container ? /*#__PURE__*/_reactDom.default.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
var _default = exports.default = Overlay;
},{"react":"../node_modules/react/index.js","react-dom":"../node_modules/react-dom/index.js","@restart/hooks/useCallbackRef":"../node_modules/@restart/hooks/esm/useCallbackRef.js","@restart/hooks/useMergedRefs":"../node_modules/@restart/hooks/esm/useMergedRefs.js","./usePopper":"../node_modules/@restart/ui/esm/usePopper.js","./useRootClose":"../node_modules/@restart/ui/esm/useRootClose.js","./useWaitForDOMRef":"../node_modules/@restart/ui/esm/useWaitForDOMRef.js","./mergeOptionsWithPopperConfig":"../node_modules/@restart/ui/esm/mergeOptionsWithPopperConfig.js","./ImperativeTransition":"../node_modules/@restart/ui/esm/ImperativeTransition.js"}],"../node_modules/react-bootstrap/esm/Tooltip.js":[function(require,module,exports) {
"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _ThemeProvider = require("./ThemeProvider");
var _helpers = require("./helpers");
var _getInitialPopperStyles = _interopRequireDefault(require("./getInitialPopperStyles"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Tooltip = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  placement = 'right',
  className,
  style,
  children,
  arrowProps,
  hasDoneInitialMeasure,
  popper,
  show,
  ...props
}, ref) => {
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tooltip');
  const isRTL = (0, _ThemeProvider.useIsRTL)();
  const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
  const bsDirection = (0, _helpers.getOverlayDirection)(primaryPlacement, isRTL);
  let computedStyle = style;
  if (show && !hasDoneInitialMeasure) {
    computedStyle = {
      ...style,
      ...(0, _getInitialPopperStyles.default)(popper == null ? void 0 : popper.strategy)
    };
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: ref,
    style: computedStyle,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: (0, _classnames.default)(className, bsPrefix, `bs-tooltip-${bsDirection}`),
    ...props,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "tooltip-arrow",
      ...arrowProps
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: `${bsPrefix}-inner`,
      children: children
    })]
  });
});
Tooltip.displayName = 'Tooltip';
var _default = exports.default = Object.assign(Tooltip, {
  // Default tooltip offset.
  // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
  TOOLTIP_OFFSET: [0, 6]
});
},{"classnames":"../node_modules/react-bootstrap/node_modules/classnames/index.js","react":"../node_modules/react/index.js","./ThemeProvider":"../node_modules/react-bootstrap/esm/ThemeProvider.js","./helpers":"../node_modules/react-bootstrap/esm/helpers.js","./getInitialPopperStyles":"../node_modules/react-bootstrap/esm/getInitialPopperStyles.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"../node_modules/react-bootstrap/esm/useOverlayOffset.js":[function(require,module,exports) {
"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOverlayOffset;
var _react = require("react");
var _hasClass = _interopRequireDefault(require("dom-helpers/hasClass"));
var _ThemeProvider = require("./ThemeProvider");
var _Popover = _interopRequireDefault(require("./Popover"));
var _Tooltip = _interopRequireDefault(require("./Tooltip"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// This is meant for internal use.
// This applies a custom offset to the overlay if it's a popover or tooltip.
function useOverlayOffset(customOffset) {
  const overlayRef = (0, _react.useRef)(null);
  const popoverClass = (0, _ThemeProvider.useBootstrapPrefix)(undefined, 'popover');
  const tooltipClass = (0, _ThemeProvider.useBootstrapPrefix)(undefined, 'tooltip');
  const offset = (0, _react.useMemo)(() => ({
    name: 'offset',
    options: {
      offset: () => {
        if (customOffset) {
          return customOffset;
        }
        if (overlayRef.current) {
          if ((0, _hasClass.default)(overlayRef.current, popoverClass)) {
            return _Popover.default.POPPER_OFFSET;
          }
          if ((0, _hasClass.default)(overlayRef.current, tooltipClass)) {
            return _Tooltip.default.TOOLTIP_OFFSET;
          }
        }
        return [0, 0];
      }
    }
  }), [customOffset, popoverClass, tooltipClass]);
  return [overlayRef, [offset]];
}
},{"react":"../node_modules/react/index.js","dom-helpers/hasClass":"../node_modules/react-bootstrap/node_modules/dom-helpers/esm/hasClass.js","./ThemeProvider":"../node_modules/react-bootstrap/esm/ThemeProvider.js","./Popover":"../node_modules/react-bootstrap/esm/Popover.js","./Tooltip":"../node_modules/react-bootstrap/esm/Tooltip.js"}],"../node_modules/react-bootstrap/esm/Overlay.js":[function(require,module,exports) {
"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _classnames = _interopRequireDefault(require("classnames"));
var _Overlay = _interopRequireDefault(require("@restart/ui/Overlay"));
var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));
var _useIsomorphicEffect = _interopRequireDefault(require("@restart/hooks/useIsomorphicEffect"));
var _useMergedRefs = _interopRequireDefault(require("@restart/hooks/useMergedRefs"));
var _useOverlayOffset = _interopRequireDefault(require("./useOverlayOffset"));
var _Fade = _interopRequireDefault(require("./Fade"));
var _safeFindDOMNode = _interopRequireDefault(require("./safeFindDOMNode"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function wrapRefs(props, arrowProps) {
  const {
    ref
  } = props;
  const {
    ref: aRef
  } = arrowProps;
  props.ref = ref.__wrapped || (ref.__wrapped = r => ref((0, _safeFindDOMNode.default)(r)));
  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = r => aRef((0, _safeFindDOMNode.default)(r)));
}
const Overlay = /*#__PURE__*/React.forwardRef(({
  children: overlay,
  transition = _Fade.default,
  popperConfig = {},
  rootClose = false,
  placement = 'top',
  show: outerShow = false,
  ...outerProps
}, outerRef) => {
  const popperRef = (0, _react.useRef)({});
  const [firstRenderedState, setFirstRenderedState] = (0, _react.useState)(null);
  const [ref, modifiers] = (0, _useOverlayOffset.default)(outerProps.offset);
  const mergedRef = (0, _useMergedRefs.default)(outerRef, ref);
  const actualTransition = transition === true ? _Fade.default : transition || undefined;
  const handleFirstUpdate = (0, _useEventCallback.default)(state => {
    setFirstRenderedState(state);
    popperConfig == null ? void 0 : popperConfig.onFirstUpdate == null ? void 0 : popperConfig.onFirstUpdate(state);
  });
  (0, _useIsomorphicEffect.default)(() => {
    if (firstRenderedState && outerProps.target) {
      // Must wait for target element to resolve before updating popper.
      popperRef.current.scheduleUpdate == null ? void 0 : popperRef.current.scheduleUpdate();
    }
  }, [firstRenderedState, outerProps.target]);
  (0, _react.useEffect)(() => {
    if (!outerShow) {
      setFirstRenderedState(null);
    }
  }, [outerShow]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Overlay.default, {
    ...outerProps,
    ref: mergedRef,
    popperConfig: {
      ...popperConfig,
      modifiers: modifiers.concat(popperConfig.modifiers || []),
      onFirstUpdate: handleFirstUpdate
    },
    transition: actualTransition,
    rootClose: rootClose,
    placement: placement,
    show: outerShow,
    children: (overlayProps, {
      arrowProps,
      popper: popperObj,
      show
    }) => {
      var _popperObj$state, _popperObj$state$modi;
      wrapRefs(overlayProps, arrowProps);
      // Need to get placement from popper object, handling case when overlay is flipped using 'flip' prop
      const updatedPlacement = popperObj == null ? void 0 : popperObj.placement;
      const popper = Object.assign(popperRef.current, {
        state: popperObj == null ? void 0 : popperObj.state,
        scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
        placement: updatedPlacement,
        outOfBoundaries: (popperObj == null ? void 0 : (_popperObj$state = popperObj.state) == null ? void 0 : (_popperObj$state$modi = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state$modi.isReferenceHidden) || false,
        strategy: popperConfig.strategy
      });
      const hasDoneInitialMeasure = !!firstRenderedState;
      if (typeof overlay === 'function') return overlay({
        ...overlayProps,
        placement: updatedPlacement,
        show,
        ...(!transition && show && {
          className: 'show'
        }),
        popper,
        arrowProps,
        hasDoneInitialMeasure
      });
      return /*#__PURE__*/React.cloneElement(overlay, {
        ...overlayProps,
        placement: updatedPlacement,
        arrowProps,
        popper,
        hasDoneInitialMeasure,
        className: (0, _classnames.default)(overlay.props.className, !transition && show && 'show'),
        style: {
          ...overlay.props.style,
          ...overlayProps.style
        }
      });
    }
  });
});
Overlay.displayName = 'Overlay';
var _default = exports.default = Overlay;
},{"react":"../node_modules/react/index.js","classnames":"../node_modules/react-bootstrap/node_modules/classnames/index.js","@restart/ui/Overlay":"../node_modules/@restart/ui/esm/Overlay.js","@restart/hooks/useEventCallback":"../node_modules/@restart/hooks/esm/useEventCallback.js","@restart/hooks/useIsomorphicEffect":"../node_modules/@restart/hooks/esm/useIsomorphicEffect.js","@restart/hooks/useMergedRefs":"../node_modules/@restart/hooks/esm/useMergedRefs.js","./useOverlayOffset":"../node_modules/react-bootstrap/esm/useOverlayOffset.js","./Fade":"../node_modules/react-bootstrap/esm/Fade.js","./safeFindDOMNode":"../node_modules/react-bootstrap/esm/safeFindDOMNode.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"../node_modules/react-bootstrap/esm/OverlayTrigger.js":[function(require,module,exports) {
"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _contains = _interopRequireDefault(require("dom-helpers/contains"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _useTimeout = _interopRequireDefault(require("@restart/hooks/useTimeout"));
var _warning = _interopRequireDefault(require("warning"));
var _uncontrollable = require("uncontrollable");
var _useMergedRefs = _interopRequireDefault(require("@restart/hooks/useMergedRefs"));
var _Overlay = _interopRequireDefault(require("./Overlay"));
var _safeFindDOMNode = _interopRequireDefault(require("./safeFindDOMNode"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
}

// Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.
function handleMouseOverOut(
// eslint-disable-next-line @typescript-eslint/no-shadow
handler, args, relatedNative) {
  const [e] = args;
  const target = e.currentTarget;
  const related = e.relatedTarget || e.nativeEvent[relatedNative];
  if ((!related || related !== target) && !(0, _contains.default)(target, related)) {
    handler(...args);
  }
}
const triggerType = _propTypes.default.oneOf(['click', 'hover', 'focus']);
const OverlayTrigger = ({
  trigger = ['hover', 'focus'],
  overlay,
  children,
  popperConfig = {},
  show: propsShow,
  defaultShow = false,
  onToggle,
  delay: propsDelay,
  placement,
  flip = placement && placement.indexOf('auto') !== -1,
  ...props
}) => {
  const triggerNodeRef = (0, _react.useRef)(null);
  const mergedRef = (0, _useMergedRefs.default)(triggerNodeRef, children.ref);
  const timeout = (0, _useTimeout.default)();
  const hoverStateRef = (0, _react.useRef)('');
  const [show, setShow] = (0, _uncontrollable.useUncontrolledProp)(propsShow, defaultShow, onToggle);
  const delay = normalizeDelay(propsDelay);
  const {
    onFocus,
    onBlur,
    onClick
  } = typeof children !== 'function' ? React.Children.only(children).props : {};
  const attachRef = r => {
    mergedRef((0, _safeFindDOMNode.default)(r));
  };
  const handleShow = (0, _react.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = 'show';
    if (!delay.show) {
      setShow(true);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === 'show') setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  const handleHide = (0, _react.useCallback)(() => {
    timeout.clear();
    hoverStateRef.current = 'hide';
    if (!delay.hide) {
      setShow(false);
      return;
    }
    timeout.set(() => {
      if (hoverStateRef.current === 'hide') setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  const handleFocus = (0, _react.useCallback)((...args) => {
    handleShow();
    onFocus == null ? void 0 : onFocus(...args);
  }, [handleShow, onFocus]);
  const handleBlur = (0, _react.useCallback)((...args) => {
    handleHide();
    onBlur == null ? void 0 : onBlur(...args);
  }, [handleHide, onBlur]);
  const handleClick = (0, _react.useCallback)((...args) => {
    setShow(!show);
    onClick == null ? void 0 : onClick(...args);
  }, [onClick, setShow, show]);
  const handleMouseOver = (0, _react.useCallback)((...args) => {
    handleMouseOverOut(handleShow, args, 'fromElement');
  }, [handleShow]);
  const handleMouseOut = (0, _react.useCallback)((...args) => {
    handleMouseOverOut(handleHide, args, 'toElement');
  }, [handleHide]);
  const triggers = trigger == null ? [] : [].concat(trigger);
  const triggerProps = {
    ref: attachRef
  };
  if (triggers.indexOf('click') !== -1) {
    triggerProps.onClick = handleClick;
  }
  if (triggers.indexOf('focus') !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }
  if (triggers.indexOf('hover') !== -1) {
    "development" !== "production" ? (0, _warning.default)(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : void 0;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [typeof children === 'function' ? children(triggerProps) : /*#__PURE__*/(0, _react.cloneElement)(children, triggerProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Overlay.default, {
      ...props,
      show: show,
      onHide: handleHide,
      flip: flip,
      placement: placement,
      popperConfig: popperConfig,
      target: triggerNodeRef.current,
      children: overlay
    })]
  });
};
var _default = exports.default = OverlayTrigger;
},{"dom-helpers/contains":"../node_modules/react-bootstrap/node_modules/dom-helpers/esm/contains.js","prop-types":"../node_modules/prop-types/index.js","react":"../node_modules/react/index.js","@restart/hooks/useTimeout":"../node_modules/@restart/hooks/esm/useTimeout.js","warning":"../node_modules/warning/warning.js","uncontrollable":"../node_modules/uncontrollable/lib/esm/index.js","@restart/hooks/useMergedRefs":"../node_modules/@restart/hooks/esm/useMergedRefs.js","./Overlay":"../node_modules/react-bootstrap/esm/Overlay.js","./safeFindDOMNode":"../node_modules/react-bootstrap/esm/safeFindDOMNode.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactSortableHoc = require("react-sortable-hoc");
require("./VisSortableItem.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DragHandle = (0, _reactSortableHoc.sortableHandle)(function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "drag-handle"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faGripLines
  }));
});
var VisSortableItem = (0, _reactSortableHoc.sortableElement)(function (props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "vis-sortable-item "
  }, /*#__PURE__*/_react.default.createElement(DragHandle, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "truncated-text",
    title: props.label
  }, props.label), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-box"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: props.isShow,
    onChange: props.onCheckChanged,
    value: props.dataKey
  })));
});
var _default = exports.default = VisSortableItem;
},{"react":"../node_modules/react/index.js","@fortawesome/react-fontawesome":"../node_modules/@fortawesome/react-fontawesome/index.es.js","@fortawesome/free-solid-svg-icons":"../node_modules/@fortawesome/free-solid-svg-icons/index.mjs","react-sortable-hoc":"../node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js","./VisSortableItem.css":"components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.css"}],"components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactSortableHoc = require("react-sortable-hoc");
var _Popover = _interopRequireDefault(require("react-bootstrap/Popover"));
var _OverlayTrigger = _interopRequireDefault(require("react-bootstrap/OverlayTrigger"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _Button = _interopRequireDefault(require("react-bootstrap/Button"));
var _VisSortableItem = _interopRequireDefault(require("./VisSortableItem/VisSortableItem"));
require("./VisDataTableControl.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", null, children);
});
var VisDataTableControl = exports.default = /*#__PURE__*/function (_PureComponent) {
  _inherits(VisDataTableControl, _PureComponent);
  var _super = _createSuper(VisDataTableControl);
  function VisDataTableControl(props) {
    var _this;
    _classCallCheck(this, VisDataTableControl);
    _this = _super.call(this, props);
    _this.state = {
      show: false
    };
    _this.onClickHandler = _this.onClickHandler.bind(_assertThisInitialized(_this));
    _this.renderPopOver = _this.renderPopOver.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(VisDataTableControl, [{
    key: "onClickHandler",
    value: function onClickHandler() {
      this.setState(function (prevState) {
        return {
          show: !prevState.show
        };
      });
    }
  }, {
    key: "renderPopOver",
    value: function renderPopOver(props) {
      var _this2 = this;
      return /*#__PURE__*/_react.default.createElement(_Popover.default, props, /*#__PURE__*/_react.default.createElement(_Popover.default.Header, {
        as: "div"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "text-primary",
        style: {
          padding: '0 .5rem'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faArrowsAltV
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "text-primary"
      }, "Fields"), /*#__PURE__*/_react.default.createElement(_Button.default, {
        variant: "light text-primary",
        size: "sm",
        onClick: this.props.onAllCheck,
        style: {
          fontSize: '.85rem'
        },
        className: "py-0 px-1 border-gray"
      }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCheckSquare
      }))), /*#__PURE__*/_react.default.createElement(_Popover.default.Body, null, /*#__PURE__*/_react.default.createElement(SortableContainer, {
        onSortEnd: function onSortEnd(_ref2) {
          var oldIndex = _ref2.oldIndex,
            newIndex = _ref2.newIndex;
          document.body.style.cursor = 'default';
          _this2.props.onSortEnd({
            oldIndex: oldIndex,
            newIndex: newIndex
          });
        },
        onSortStart: function onSortStart() {
          document.body.style.cursor = 'grabbing';
        },
        useDragHandle: true
      }, this.props.list.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(_VisSortableItem.default, _extends({
          key: "item-".concat(item.dataKey)
        }, item, {
          index: index,
          onCheckChanged: _this2.props.onCheckChanged
        }));
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        position: 'absolute',
        right: 0,
        color: 'var(--gray)'
      };
      return /*#__PURE__*/_react.default.createElement(_OverlayTrigger.default, {
        trigger: "click",
        placement: "bottom-end",
        overlay: this.renderPopOver
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        variant: "light",
        style: style,
        className: "py-0 px-1 border-gray",
        onClick: this.onClickHandler,
        active: this.state.show
      }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCog
      })));
    }
  }]);
  return VisDataTableControl;
}(_react.PureComponent);
VisDataTableControl.propTypes = {
  onAllCheck: _propTypes.default.func.isRequired,
  onCheckChanged: _propTypes.default.func.isRequired,
  onSortEnd: _propTypes.default.func.isRequired,
  list: _propTypes.default.arrayOf(_propTypes.default.shape({
    dataKey: _propTypes.default.string.isRequired
  })).isRequired
};
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","react-sortable-hoc":"../node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js","react-bootstrap/Popover":"../node_modules/react-bootstrap/esm/Popover.js","react-bootstrap/OverlayTrigger":"../node_modules/react-bootstrap/esm/OverlayTrigger.js","@fortawesome/react-fontawesome":"../node_modules/@fortawesome/react-fontawesome/index.es.js","@fortawesome/free-solid-svg-icons":"../node_modules/@fortawesome/free-solid-svg-icons/index.mjs","react-bootstrap/Button":"../node_modules/react-bootstrap/esm/Button.js","./VisSortableItem/VisSortableItem":"components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js","./VisDataTableControl.css":"components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.css"}],"components/VisualTools/VisDataTable/VisDataTable.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/VisualTools/VisDataTable/VisDataTable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactVirtualized = require("react-virtualized");
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _arrayMove = _interopRequireDefault(require("array-move"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _VisDataTableControl = _interopRequireDefault(require("./VisDataTableControl/VisDataTableControl"));
require("./VisDataTable.css");
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
var _cellRenderer = function cellRenderer(d, f) {
  var urlElt;
  if (f.link && f.link.url && f.link.field) {
    var urlbase = f.link.url || '';
    urlElt = /*#__PURE__*/_react.default.createElement("a", {
      target: "_parent",
      href: urlbase + d.rowData[f.link.field]
    }, d.cellData);
  } else if (f.link && f.link.url) {
    urlElt = /*#__PURE__*/_react.default.createElement("a", {
      target: "_parent",
      href: f.link.url
    }, d.cellData);
  } else {
    // urlElt = d.cellData;
    urlElt = Array.isArray(d.cellData) ? d.cellData.join(', ') : d.cellData;
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: f.dataKey
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ReactVirtualized__Table__headerTruncatedText",
    title: d.cellData
  }, urlElt));
};
var rowClassName = function rowClassName(_ref) {
  var index = _ref.index;
  if (index < 0) {
    return 'headerRow';
  }
  return index % 2 === 0 ? 'evenRow' : 'oddRow';
};
var VisDataTable = exports.default = /*#__PURE__*/function (_PureComponent) {
  _inherits(VisDataTable, _PureComponent);
  var _super = _createSuper(VisDataTable);
  function VisDataTable(props) {
    var _this;
    _classCallCheck(this, VisDataTable);
    _this = _super.call(this, props);
    var fWidth = 1 / _this.props.fields.length;
    var fields = _this.props.fields.map(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, {
        width: fWidth,
        isShow: true
      });
    });
    _this.state = {
      fields: fields,
      width: null,
      sortBy: null,
      sortDirection: null
    };
    _this.autoSizer = _react.default.createRef();
    _this.headerRenderer = _this.headerRenderer.bind(_assertThisInitialized(_this));
    _this.resizeRow = _this.resizeRow.bind(_assertThisInitialized(_this));
    _this.onResize = _this.onResize.bind(_assertThisInitialized(_this));
    _this.onSortEnd = _this.onSortEnd.bind(_assertThisInitialized(_this));
    _this.onCheckChangedHandler = _this.onCheckChangedHandler.bind(_assertThisInitialized(_this));
    _this.onAllCheckHandler = _this.onAllCheckHandler.bind(_assertThisInitialized(_this));
    _this.sortHandler = _this.sortHandler.bind(_assertThisInitialized(_this));
    _this.getSortData = _this.getSortData.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(VisDataTable, [{
    key: "onResize",
    value: function onResize(_ref2) {
      var width = _ref2.width;
      this.setState({
        width: width
      });
    }
  }, {
    key: "onSortEnd",
    value: function onSortEnd(_ref3) {
      var oldIndex = _ref3.oldIndex,
        newIndex = _ref3.newIndex;
      this.setState(function (_ref4) {
        var fields = _ref4.fields;
        return {
          fields: (0, _arrayMove.default)(fields, oldIndex, newIndex)
        };
      });
    }
  }, {
    key: "onCheckChangedHandler",
    value: function onCheckChangedHandler(e) {
      var value = e.target.value;
      var checked = e.target.checked;
      this.setState(function (_ref5) {
        var fields = _ref5.fields;
        return {
          fields: fields.map(function (f) {
            f.isShow = f.dataKey === value ? checked : f.isShow;
            return _objectSpread({}, f);
          })
        };
      });
    }
  }, {
    key: "onAllCheckHandler",
    value: function onAllCheckHandler() {
      this.setState(function (_ref6) {
        var fields = _ref6.fields;
        return {
          fields: fields.map(function (f) {
            f.isShow = true;
            return _objectSpread({}, f);
          })
        };
      });
    }
  }, {
    key: "getSortData",
    value: function getSortData() {
      var _this$props = this.props,
        data = _this$props.data,
        filterData = _this$props.filterData,
        filters = _this$props.filters;
      var _this$state = this.state,
        sortBy = _this$state.sortBy,
        sortDirection = _this$state.sortDirection;
      var currentData = filters.length > 0 ? filterData : data;
      // filter TODO
      return sortBy && sortDirection ? currentData.sort(function (a, b) {
        var first = sortDirection === _reactVirtualized.SortDirection.ASC ? a : b;
        var second = sortDirection === _reactVirtualized.SortDirection.ASC ? b : a;
        return first[sortBy] > second[sortBy] ? 1 : -1;
      }) : currentData;
    }
  }, {
    key: "resizeRow",
    value: function resizeRow(_ref7) {
      var dataKey = _ref7.dataKey,
        deltaX = _ref7.deltaX;
      var prevFields = this.state.fields;
      var idx = prevFields.findIndex(function (f) {
        return f.dataKey === dataKey;
      });
      var percentDelta = deltaX / this.state.width;
      prevFields[idx].width += percentDelta;
      if (idx < prevFields.length - 1) {
        prevFields[idx + 1].width = prevFields[idx + 1].width - percentDelta;
      }
      this.setState({
        fields: _toConsumableArray(prevFields)
      });
    }
  }, {
    key: "headerRenderer",
    value: function headerRenderer(_ref8) {
      var _this2 = this;
      var dataKey = _ref8.dataKey,
        label = _ref8.label,
        sortBy = _ref8.sortBy,
        sortDirection = _ref8.sortDirection;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: dataKey
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "ReactVirtualized__Table__headerTruncatedText",
        title: label
      }, label), /*#__PURE__*/_react.default.createElement("div", null, sortBy === dataKey ? /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: sortDirection === _reactVirtualized.SortDirection.DESC ? _freeSolidSvgIcons.faSortDown : _freeSolidSvgIcons.faSortUp
      }) : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSort
      })), /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
        axis: "x",
        defaultClassName: "DragHandle",
        defaultClassNameDragging: "DragHandleActive",
        onDrag: function onDrag(event, _ref9) {
          var deltaX = _ref9.deltaX;
          _this2.resizeRow({
            dataKey: dataKey,
            deltaX: deltaX
          });
        },
        position: {
          x: 0
        },
        zIndex: 999
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "DragHandleIcon"
      }, "\u22EE")));
    }
  }, {
    key: "sortHandler",
    value: function sortHandler(_ref10) {
      var sortBy = _ref10.sortBy,
        sortDirection = _ref10.sortDirection;
      this.setState({
        sortBy: sortBy,
        sortDirection: sortDirection
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state2 = this.state,
        fields = _this$state2.fields,
        sortBy = _this$state2.sortBy,
        sortDirection = _this$state2.sortDirection;
      var finalData = this.getSortData();
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_VisDataTableControl.default, {
        list: fields,
        onSortEnd: this.onSortEnd,
        onCheckChanged: this.onCheckChangedHandler,
        onAllCheck: this.onAllCheckHandler
      }), /*#__PURE__*/_react.default.createElement(_reactVirtualized.AutoSizer, {
        ref: this.autoSizer,
        onResize: this.onResize
      }, function (_ref11) {
        var width = _ref11.width,
          height = _ref11.height;
        return /*#__PURE__*/_react.default.createElement(_reactVirtualized.Table, {
          width: width,
          height: height,
          headerHeight: 25,
          rowHeight: 20,
          rowClassName: rowClassName,
          rowCount: finalData.length,
          rowGetter: function rowGetter(_ref12) {
            var index = _ref12.index;
            return finalData[index];
          },
          sort: _this3.sortHandler,
          sortBy: sortBy,
          sortDirection: sortDirection
        }, fields.filter(function (f) {
          return f.isShow;
        }).map(function (f) {
          return /*#__PURE__*/_react.default.createElement(_reactVirtualized.Column, {
            key: f.dataKey,
            cellDataGetter: function cellDataGetter(_ref13) {
              var rowData = _ref13.rowData;
              return rowData[f.dataKey];
            },
            dataKey: f.dataKey,
            label: f.label,
            width: width * f.width,
            headerRenderer: _this3.headerRenderer,
            cellRenderer: function cellRenderer(d) {
              return _cellRenderer(d, f);
            }
          });
        }));
      }));
    }
  }]);
  return VisDataTable;
}(_react.PureComponent);
VisDataTable.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  filterData: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  fields: _propTypes.default.arrayOf(_propTypes.default.shape()).isRequired,
  filters: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired
};
},{"react":"../node_modules/react/index.js","react-virtualized":"../node_modules/react-virtualized/dist/es/index.js","react-draggable":"../node_modules/react-draggable/build/cjs/cjs.js","@fortawesome/react-fontawesome":"../node_modules/@fortawesome/react-fontawesome/index.es.js","@fortawesome/free-solid-svg-icons":"../node_modules/@fortawesome/free-solid-svg-icons/index.mjs","array-move":"../node_modules/array-move/index.js","prop-types":"../node_modules/prop-types/index.js","./VisDataTableControl/VisDataTableControl":"components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js","./VisDataTable.css":"components/VisualTools/VisDataTable/VisDataTable.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57885" + '/');
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
//# sourceMappingURL=/VisDataTable.c1822ccd.js.map