// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aQL8O":[function(require,module,exports,__globalThis) {
var Refresh = require("f11b6b8f6a1f6f0b");
var ErrorOverlay = require("f490fb404efab291");
window.__REACT_REFRESH_VERSION_RUNTIME = '0.14.2';
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener('parcelhmraccept', ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"fu95G":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fea5bec485cdd732";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"1gr42":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$f07b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$f07b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactVirtualized = require("react-virtualized");
var _reactDraggable = require("react-draggable");
var _reactDraggableDefault = parcelHelpers.interopDefault(_reactDraggable);
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _arrayMove = require("array-move");
var _arrayMoveDefault = parcelHelpers.interopDefault(_arrayMove);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _visDataTableControl = require("./VisDataTableControl/VisDataTableControl");
var _visDataTableControlDefault = parcelHelpers.interopDefault(_visDataTableControl);
var _visDataTableCss = require("./VisDataTable.css");
const cellRenderer = (d, f)=>{
    let urlElt;
    if (f.link && f.link.url && f.link.field) {
        const urlbase = f.link.url || '';
        urlElt = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
            target: "_parent",
            href: urlbase + d.rowData[f.link.field],
            children: d.cellData
        }, void 0, false, {
            fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
            lineNumber: 18,
            columnNumber: 7
        }, undefined);
    } else if (f.link && f.link.url) urlElt = /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
        target: "_parent",
        href: f.link.url,
        children: d.cellData
    }, void 0, false, {
        fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
        lineNumber: 24,
        columnNumber: 7
    }, undefined);
    else // urlElt = d.cellData;
    urlElt = Array.isArray(d.cellData) ? d.cellData.join(', ') : d.cellData;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).Fragment, {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "ReactVirtualized__Table__headerTruncatedText",
            title: d.cellData,
            children: urlElt
        }, void 0, false, {
            fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
            lineNumber: 34,
            columnNumber: 7
        }, undefined)
    }, f.dataKey, false, {
        fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
        lineNumber: 33,
        columnNumber: 5
    }, undefined);
};
const rowClassName = ({ index })=>{
    if (index < 0) return 'headerRow';
    return index % 2 === 0 ? 'evenRow' : 'oddRow';
};
class VisDataTable extends (0, _react.PureComponent) {
    constructor(props){
        super(props);
        const fWidth = 1 / this.props.fields.length;
        const fields = this.props.fields.map((f)=>({
                ...f,
                width: fWidth,
                isShow: true
            }));
        this.state = {
            fields,
            width: null,
            sortBy: null,
            sortDirection: null
        };
        this.autoSizer = /*#__PURE__*/ (0, _reactDefault.default).createRef();
        this.headerRenderer = this.headerRenderer.bind(this);
        this.resizeRow = this.resizeRow.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
        this.onCheckChangedHandler = this.onCheckChangedHandler.bind(this);
        this.onAllCheckHandler = this.onAllCheckHandler.bind(this);
        this.sortHandler = this.sortHandler.bind(this);
        this.getSortData = this.getSortData.bind(this);
    }
    onResize({ width }) {
        this.setState({
            width
        });
    }
    onSortEnd({ oldIndex, newIndex }) {
        this.setState(({ fields })=>({
                fields: (0, _arrayMoveDefault.default)(fields, oldIndex, newIndex)
            }));
    }
    onCheckChangedHandler(e) {
        const { value } = e.target;
        const { checked } = e.target;
        this.setState(({ fields })=>({
                fields: fields.map((f)=>{
                    f.isShow = f.dataKey === value ? checked : f.isShow;
                    return {
                        ...f
                    };
                })
            }));
    }
    onAllCheckHandler() {
        this.setState(({ fields })=>({
                fields: fields.map((f)=>{
                    f.isShow = true;
                    return {
                        ...f
                    };
                })
            }));
    }
    getSortData() {
        const { data, filterData, filters } = this.props;
        const { sortBy, sortDirection } = this.state;
        const currentData = filters.length > 0 ? filterData : data;
        // filter TODO
        return sortBy && sortDirection ? currentData.sort((a, b)=>{
            const first = sortDirection === (0, _reactVirtualized.SortDirection).ASC ? a : b;
            const second = sortDirection === (0, _reactVirtualized.SortDirection).ASC ? b : a;
            return first[sortBy] > second[sortBy] ? 1 : -1;
        }) : currentData;
    }
    resizeRow({ dataKey, deltaX }) {
        const prevFields = this.state.fields;
        const idx = prevFields.findIndex((f)=>f.dataKey === dataKey);
        const percentDelta = deltaX / this.state.width;
        prevFields[idx].width += percentDelta;
        if (idx < prevFields.length - 1) prevFields[idx + 1].width = prevFields[idx + 1].width - percentDelta;
        this.setState({
            fields: [
                ...prevFields
            ]
        });
    }
    headerRenderer({ dataKey, label, sortBy, sortDirection }) {
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "ReactVirtualized__Table__headerTruncatedText",
                    title: label,
                    children: label
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    children: sortBy === dataKey ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactFontawesome.FontAwesomeIcon), {
                        icon: sortDirection === (0, _reactVirtualized.SortDirection).DESC ? (0, _freeSolidSvgIcons.faSortDown) : (0, _freeSolidSvgIcons.faSortUp)
                    }, void 0, false, {
                        fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactFontawesome.FontAwesomeIcon), {
                        icon: (0, _freeSolidSvgIcons.faSort)
                    }, void 0, false, {
                        fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDraggableDefault.default), {
                    axis: "x",
                    defaultClassName: "DragHandle",
                    defaultClassNameDragging: "DragHandleActive",
                    onDrag: (event, { deltaX })=>{
                        this.resizeRow({
                            dataKey,
                            deltaX
                        });
                    },
                    position: {
                        x: 0
                    },
                    zIndex: 999,
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                        className: "DragHandleIcon",
                        children: "\u22EE"
                    }, void 0, false, {
                        fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            ]
        }, dataKey, true, {
            fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    sortHandler({ sortBy, sortDirection }) {
        this.setState({
            sortBy,
            sortDirection
        });
    }
    render() {
        const { fields, sortBy, sortDirection } = this.state;
        const finalData = this.getSortData();
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            style: {
                width: '100%',
                height: '100%'
            },
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _visDataTableControlDefault.default), {
                    list: fields,
                    onSortEnd: this.onSortEnd,
                    onCheckChanged: this.onCheckChangedHandler,
                    onAllCheck: this.onAllCheckHandler
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                    lineNumber: 171,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactVirtualized.AutoSizer), {
                    ref: this.autoSizer,
                    onResize: this.onResize,
                    children: ({ width, height })=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactVirtualized.Table), {
                            width: width,
                            height: height,
                            headerHeight: 25,
                            rowHeight: 20,
                            rowClassName: rowClassName,
                            rowCount: finalData.length,
                            rowGetter: ({ index })=>finalData[index],
                            sort: this.sortHandler,
                            sortBy: sortBy,
                            sortDirection: sortDirection,
                            children: fields.map((f)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactVirtualized.Column), {
                                    cellDataGetter: ({ rowData })=>rowData[f.dataKey],
                                    dataKey: f.dataKey,
                                    label: f.label,
                                    width: width * f.width,
                                    headerRenderer: this.headerRenderer,
                                    cellRenderer: (d)=>cellRenderer(d, f)
                                }, f.dataKey, false, {
                                    fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                                    lineNumber: 193,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "source/components/VisualTools/VisDataTable/VisDataTable.js",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
}
exports.default = VisDataTable;
VisDataTable.propTypes = {
    data: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).shape({})).isRequired,
    filterData: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).shape({})).isRequired,
    fields: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).shape()).isRequired,
    filters: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).shape({})).isRequired
};

  $parcel$ReactRefreshHelpers$f07b.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-virtualized":"8wJcL","react-draggable":"873Tn","@fortawesome/react-fontawesome":"clIT3","@fortawesome/free-solid-svg-icons":"5lkdy","array-move":"gFOXu","prop-types":"7wKI2","./VisDataTableControl/VisDataTableControl":"gqhUM","./VisDataTable.css":"OUByR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gFOXu":[function(require,module,exports,__globalThis) {
'use strict';
const arrayMoveMutate = (array, from, to)=>{
    const startIndex = from < 0 ? array.length + from : from;
    if (startIndex >= 0 && startIndex < array.length) {
        const endIndex = to < 0 ? array.length + to : to;
        const [item] = array.splice(from, 1);
        array.splice(endIndex, 0, item);
    }
};
const arrayMove = (array, from, to)=>{
    array = [
        ...array
    ];
    arrayMoveMutate(array, from, to);
    return array;
};
module.exports = arrayMove;
module.exports.mutate = arrayMoveMutate;

},{}],"gqhUM":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$c840 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$c840.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _reactDnd = require("react-dnd");
var _popover = require("react-bootstrap/Popover");
var _popoverDefault = parcelHelpers.interopDefault(_popover);
var _overlayTrigger = require("react-bootstrap/OverlayTrigger");
var _overlayTriggerDefault = parcelHelpers.interopDefault(_overlayTrigger);
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _button = require("react-bootstrap/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _visSortableItem = require("./VisSortableItem/VisSortableItem");
var _visSortableItemDefault = parcelHelpers.interopDefault(_visSortableItem);
var _visDataTableControlCss = require("./VisDataTableControl.css");
function SortableContainer({ children }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: children
    }, void 0, false, {
        fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c = SortableContainer;
class VisDataTableControl extends (0, _react.PureComponent) {
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.renderPopOver = this.renderPopOver.bind(this);
    }
    onClickHandler() {
        this.setState((prevState)=>({
                show: !prevState.show
            }));
    }
    renderPopOver(props) {
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _popoverDefault.default), {
            ...props,
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _popoverDefault.default).Header, {
                    as: "div",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "text-primary",
                            style: {
                                padding: '0 .5rem'
                            },
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactFontawesome.FontAwesomeIcon), {
                                icon: (0, _freeSolidSvgIcons.faArrowsAltV)
                            }, void 0, false, {
                                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "text-primary",
                            children: "Fields"
                        }, void 0, false, {
                            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                            variant: "light text-primary",
                            size: "sm",
                            onClick: this.props.onAllCheck,
                            style: {
                                fontSize: '.85rem'
                            },
                            className: "py-0 px-1 border-gray",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactFontawesome.FontAwesomeIcon), {
                                icon: (0, _freeSolidSvgIcons.faCheckSquare)
                            }, void 0, false, {
                                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _popoverDefault.default).Body, {
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(SortableContainer, {
                        children: this.props.list.map((item, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _visSortableItemDefault.default), {
                                ...item,
                                index: index,
                                onCheckChanged: this.props.onCheckChanged
                            }, `item-${item.dataKey}`, false, {
                                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    render() {
        const style = {
            position: 'absolute',
            right: 0,
            color: 'var(--gray)'
        };
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _overlayTriggerDefault.default), {
            trigger: "click",
            placement: "bottom-end",
            overlay: this.renderPopOver,
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _buttonDefault.default), {
                variant: "light",
                style: style,
                className: "py-0 px-1 border-gray",
                onClick: this.onClickHandler,
                active: this.state.show,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactFontawesome.FontAwesomeIcon), {
                    icon: (0, _freeSolidSvgIcons.faCog)
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
            lineNumber: 68,
            columnNumber: 7
        }, this);
    }
}
exports.default = VisDataTableControl;
VisDataTableControl.propTypes = {
    onAllCheck: (0, _propTypesDefault.default).func.isRequired,
    onCheckChanged: (0, _propTypesDefault.default).func.isRequired,
    list: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).shape({
        dataKey: (0, _propTypesDefault.default).string.isRequired
    })).isRequired
};
var _c;
$RefreshReg$(_c, "SortableContainer");

  $parcel$ReactRefreshHelpers$c840.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","prop-types":"7wKI2","react-dnd":"cak3X","react-bootstrap/Popover":"afWr1","react-bootstrap/OverlayTrigger":"acOnV","@fortawesome/react-fontawesome":"clIT3","@fortawesome/free-solid-svg-icons":"5lkdy","react-bootstrap/Button":"aPzUt","./VisSortableItem/VisSortableItem":"4Sf6T","./VisDataTableControl.css":"bv6av","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"cak3X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./core/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _indexJs1 = require("./hooks/index.js");
parcelHelpers.exportAll(_indexJs1, exports);
var _indexJs2 = require("./types/index.js");
parcelHelpers.exportAll(_indexJs2, exports);

},{"./core/index.js":"f8zaY","./hooks/index.js":"2XP1w","./types/index.js":"nEtPH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8zaY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dndContextJs = require("./DndContext.js");
parcelHelpers.exportAll(_dndContextJs, exports);
var _dndProviderJs = require("./DndProvider.js");
parcelHelpers.exportAll(_dndProviderJs, exports);
var _dragPreviewImageJs = require("./DragPreviewImage.js");
parcelHelpers.exportAll(_dragPreviewImageJs, exports);

},{"./DndContext.js":"59xow","./DndProvider.js":"iHyie","./DragPreviewImage.js":"4SG0K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59xow":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DndContext", ()=>DndContext);
var _react = require("react");
const DndContext = (0, _react.createContext)({
    dragDropManager: undefined
});

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHyie":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A React component that provides the React-DnD context
 */ parcelHelpers.export(exports, "DndProvider", ()=>DndProvider);
var _jsxRuntime = require("react/jsx-runtime");
var _dndCore = require("dnd-core");
var _react = require("react");
var _dndContextJs = require("./DndContext.js");
var global = arguments[3];
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
var DndProvider = /*#__PURE__*/ (0, _react.memo)(function DndProvider(_param) {
    var { children } = _param, props = _objectWithoutProperties(_param, [
        "children"
    ]);
    const [manager, isGlobalInstance] = getDndContextValue(props) // memoized from props
    ;
    /**
		 * If the global context was used to store the DND context
		 * then where theres no more references to it we should
		 * clean it up to avoid memory leaks
		 */ (0, _react.useEffect)(()=>{
        if (isGlobalInstance) {
            const context = getGlobalContext();
            ++refCount;
            return ()=>{
                if (--refCount === 0) context[INSTANCE_SYM] = null;
            };
        }
        return;
    }, []);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dndContextJs.DndContext).Provider, {
        value: manager,
        children: children
    });
});
function getDndContextValue(props) {
    if ('manager' in props) {
        const manager = {
            dragDropManager: props.manager
        };
        return [
            manager,
            false
        ];
    }
    const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
    const isGlobalInstance = !props.context;
    return [
        manager,
        isGlobalInstance
    ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
    const ctx = context;
    if (!ctx[INSTANCE_SYM]) ctx[INSTANCE_SYM] = {
        dragDropManager: (0, _dndCore.createDragDropManager)(backend, context, options, debugMode)
    };
    return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
    return typeof global !== 'undefined' ? global : window;
}

},{"react/jsx-runtime":"6AEwr","dnd-core":"3pix3","react":"21dqq","./DndContext.js":"59xow","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3pix3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createDragDropManagerJs = require("./createDragDropManager.js");
parcelHelpers.exportAll(_createDragDropManagerJs, exports);
var _interfacesJs = require("./interfaces.js");
parcelHelpers.exportAll(_interfacesJs, exports);

},{"./createDragDropManager.js":"gOEb5","./interfaces.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOEb5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDragDropManager", ()=>createDragDropManager);
var _redux = require("redux");
var _dragDropManagerImplJs = require("./classes/DragDropManagerImpl.js");
var _dragDropMonitorImplJs = require("./classes/DragDropMonitorImpl.js");
var _handlerRegistryImplJs = require("./classes/HandlerRegistryImpl.js");
var _indexJs = require("./reducers/index.js");
function createDragDropManager(backendFactory, globalContext, backendOptions = {}, debugMode = false) {
    const store = makeStoreInstance(debugMode);
    const monitor = new (0, _dragDropMonitorImplJs.DragDropMonitorImpl)(store, new (0, _handlerRegistryImplJs.HandlerRegistryImpl)(store));
    const manager = new (0, _dragDropManagerImplJs.DragDropManagerImpl)(store, monitor);
    const backend = backendFactory(manager, globalContext, backendOptions);
    manager.receiveBackend(backend);
    return manager;
}
function makeStoreInstance(debugMode) {
    // TODO: if we ever make a react-native version of this,
    // we'll need to consider how to pull off dev-tooling
    const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    return (0, _redux.createStore)((0, _indexJs.reduce), debugMode && reduxDevTools && reduxDevTools({
        name: 'dnd-core',
        instanceId: 'dnd-core'
    }));
}

},{"redux":"cDNB3","./classes/DragDropManagerImpl.js":"95OC0","./classes/DragDropMonitorImpl.js":"gKgRM","./classes/HandlerRegistryImpl.js":"1UVkw","./reducers/index.js":"6A3sW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDNB3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__DO_NOT_USE__ActionTypes", ()=>ActionTypes);
parcelHelpers.export(exports, "applyMiddleware", ()=>applyMiddleware);
parcelHelpers.export(exports, "bindActionCreators", ()=>bindActionCreators);
parcelHelpers.export(exports, "combineReducers", ()=>combineReducers);
parcelHelpers.export(exports, "compose", ()=>compose);
parcelHelpers.export(exports, "createStore", ()=>createStore);
parcelHelpers.export(exports, "legacy_createStore", ()=>legacy_createStore);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}
// Inlined version of the `symbol-observable` polyfill
var $$observable = function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
};
var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    var proto = obj;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(obj) === proto;
}
// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
    if (val === void 0) return 'undefined';
    if (val === null) return 'null';
    var type = typeof val;
    switch(type){
        case 'boolean':
        case 'string':
        case 'number':
        case 'symbol':
        case 'function':
            return type;
    }
    if (Array.isArray(val)) return 'array';
    if (isDate(val)) return 'date';
    if (isError(val)) return 'error';
    var constructorName = ctorName(val);
    switch(constructorName){
        case 'Symbol':
        case 'Promise':
        case 'WeakMap':
        case 'WeakSet':
        case 'Map':
        case 'Set':
            return constructorName;
    } // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}
function ctorName(val) {
    return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function kindOf(val) {
    var typeOfVal = typeof val;
    typeOfVal = miniKindOf(val);
    return typeOfVal;
}
/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */ function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
        return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
    }
    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
        if (isDispatching) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return currentState;
    }
    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
        if (typeof listener !== 'function') throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
        if (isDispatching) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) return;
            if (isDispatching) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
        if (!isPlainObject(action)) throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
        if (typeof action.type === 'undefined') throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        if (isDispatching) throw new Error('Reducers may not dispatch actions.');
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        dispatch({
            type: ActionTypes.REPLACE
        });
    }
    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                if (typeof observer !== 'object' || observer === null) throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                function observeState() {
                    if (observer.next) observer.next(getState());
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe: unsubscribe
                };
            }
        }, _ref[$$observable] = function() {
            return this;
        }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
        type: ActionTypes.INIT
    });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ var legacy_createStore = createStore;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
    /* eslint-disable no-console */ if (typeof console !== 'undefined' && typeof console.error === 'function') console.error(message);
    /* eslint-enable no-console */ try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
    } catch (e) {} // eslint-disable-line no-empty
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
    if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    if (!isPlainObject(inputState)) return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function(key) {
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes.REPLACE) return;
    if (unexpectedKeys.length > 0) return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function(key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
            type: ActionTypes.INIT
        });
        if (typeof initialState === 'undefined') throw new Error("The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        if (typeof reducer(undefined, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === 'undefined') throw new Error("The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for(var i = 0; i < reducerKeys.length; i++){
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'undefined') warning("No reducer provided for key \"" + key + "\"");
        if (typeof reducers[key] === 'function') finalReducers[key] = reducers[key];
    }
    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
    // keys multiple times.
    var unexpectedKeyCache;
    unexpectedKeyCache = {};
    var shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state, action) {
        if (state === void 0) state = {};
        if (shapeAssertionError) throw shapeAssertionError;
        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
        if (warningMessage) warning(warningMessage);
        var hasChanged = false;
        var nextState = {};
        for(var _i = 0; _i < finalReducerKeys.length; _i++){
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                var actionType = action && action.type;
                throw new Error("When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(this, arguments));
    };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') return bindActionCreator(actionCreators, dispatch);
    if (typeof actionCreators !== 'object' || actionCreators === null) throw new Error("bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    var boundActionCreators = {};
    for(var key in actionCreators){
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === 'function') boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
    return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++)funcs[_key] = arguments[_key];
    if (funcs.length === 0) return function(arg) {
        return arg;
    };
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce(function(a, b) {
        return function() {
            return a(b.apply(void 0, arguments));
        };
    });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++)middlewares[_key] = arguments[_key];
    return function(createStore) {
        return function() {
            var store = createStore.apply(void 0, arguments);
            var _dispatch = function dispatch() {
                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                }
            };
            var chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, store), {}, {
                dispatch: _dispatch
            });
        };
    };
}

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bS0uk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_objectSpread2);
var _definePropertyJs = require("./defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            (0, _definePropertyJsDefault.default)(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}

},{"./defineProperty.js":"hbmCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbmCA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_defineProperty);
var _toPropertyKeyJs = require("./toPropertyKey.js");
var _toPropertyKeyJsDefault = parcelHelpers.interopDefault(_toPropertyKeyJs);
function _defineProperty(e, r, t) {
    return (r = (0, _toPropertyKeyJsDefault.default)(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

},{"./toPropertyKey.js":"cviYI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cviYI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toPropertyKey);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
var _toPrimitiveJs = require("./toPrimitive.js");
var _toPrimitiveJsDefault = parcelHelpers.interopDefault(_toPrimitiveJs);
function toPropertyKey(t) {
    var i = (0, _toPrimitiveJsDefault.default)(t, "string");
    return "symbol" == (0, _typeofJsDefault.default)(i) ? i : i + "";
}

},{"./typeof.js":"i7HWY","./toPrimitive.js":"497Dv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7HWY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_typeof);
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"497Dv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toPrimitive);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
function toPrimitive(t, r) {
    if ("object" != (0, _typeofJsDefault.default)(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (0, _typeofJsDefault.default)(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}

},{"./typeof.js":"i7HWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"95OC0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragDropManagerImpl", ()=>DragDropManagerImpl);
var _indexJs = require("../actions/dragDrop/index.js");
class DragDropManagerImpl {
    receiveBackend(backend) {
        this.backend = backend;
    }
    getMonitor() {
        return this.monitor;
    }
    getBackend() {
        return this.backend;
    }
    getRegistry() {
        return this.monitor.registry;
    }
    getActions() {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */ const manager = this;
        const { dispatch } = this.store;
        function bindActionCreator(actionCreator) {
            return (...args)=>{
                const action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') dispatch(action);
            };
        }
        const actions = (0, _indexJs.createDragDropActions)(this);
        return Object.keys(actions).reduce((boundActions, key)=>{
            const action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
    constructor(store, monitor){
        this.isSetUp = false;
        this.handleRefCountChange = ()=>{
            const shouldSetUp = this.store.getState().refCount > 0;
            if (this.backend) {
                if (shouldSetUp && !this.isSetUp) {
                    this.backend.setup();
                    this.isSetUp = true;
                } else if (!shouldSetUp && this.isSetUp) {
                    this.backend.teardown();
                    this.isSetUp = false;
                }
            }
        };
        this.store = store;
        this.monitor = monitor;
        store.subscribe(this.handleRefCountChange);
    }
}

},{"../actions/dragDrop/index.js":"fOioQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fOioQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDragDropActions", ()=>createDragDropActions);
var _beginDragJs = require("./beginDrag.js");
var _dropJs = require("./drop.js");
var _endDragJs = require("./endDrag.js");
var _hoverJs = require("./hover.js");
var _publishDragSourceJs = require("./publishDragSource.js");
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);
function createDragDropActions(manager) {
    return {
        beginDrag: (0, _beginDragJs.createBeginDrag)(manager),
        publishDragSource: (0, _publishDragSourceJs.createPublishDragSource)(manager),
        hover: (0, _hoverJs.createHover)(manager),
        drop: (0, _dropJs.createDrop)(manager),
        endDrag: (0, _endDragJs.createEndDrag)(manager)
    };
}

},{"./beginDrag.js":"a2NBA","./drop.js":"a2v8h","./endDrag.js":"GiWfG","./hover.js":"dphzf","./publishDragSource.js":"eJnu5","./types.js":"5SyvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2NBA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBeginDrag", ()=>createBeginDrag);
var _invariant = require("@react-dnd/invariant");
var _jsUtilsJs = require("../../utils/js_utils.js");
var _setClientOffsetJs = require("./local/setClientOffset.js");
var _typesJs = require("./types.js");
const ResetCoordinatesAction = {
    type: (0, _typesJs.INIT_COORDS),
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};
function createBeginDrag(manager) {
    return function beginDrag(sourceIds = [], options = {
        publishSource: true
    }) {
        const { publishSource = true, clientOffset, getSourceClientOffset } = options;
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        // Initialize the coordinates using the client offset
        manager.dispatch((0, _setClientOffsetJs.setClientOffset)(clientOffset));
        verifyInvariants(sourceIds, monitor, registry);
        // Get the draggable source
        const sourceId = getDraggableSource(sourceIds, monitor);
        if (sourceId == null) {
            manager.dispatch(ResetCoordinatesAction);
            return;
        }
        // Get the source client offset
        let sourceClientOffset = null;
        if (clientOffset) {
            if (!getSourceClientOffset) throw new Error('getSourceClientOffset must be defined');
            verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
            sourceClientOffset = getSourceClientOffset(sourceId);
        }
        // Initialize the full coordinates
        manager.dispatch((0, _setClientOffsetJs.setClientOffset)(clientOffset, sourceClientOffset));
        const source = registry.getSource(sourceId);
        const item = source.beginDrag(monitor, sourceId);
        // If source.beginDrag returns null, this is an indicator to cancel the drag
        if (item == null) return undefined;
        verifyItemIsObject(item);
        registry.pinSource(sourceId);
        const itemType = registry.getSourceType(sourceId);
        return {
            type: (0, _typesJs.BEGIN_DRAG),
            payload: {
                itemType,
                item,
                sourceId,
                clientOffset: clientOffset || null,
                sourceClientOffset: sourceClientOffset || null,
                isSourcePublic: !!publishSource
            }
        };
    };
}
function verifyInvariants(sourceIds, monitor, registry) {
    (0, _invariant.invariant)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
    sourceIds.forEach(function(sourceId) {
        (0, _invariant.invariant)(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
    });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
    (0, _invariant.invariant)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
    (0, _invariant.invariant)((0, _jsUtilsJs.isObject)(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
    let sourceId = null;
    for(let i = sourceIds.length - 1; i >= 0; i--)if (monitor.canDragSource(sourceIds[i])) {
        sourceId = sourceIds[i];
        break;
    }
    return sourceId;
}

},{"@react-dnd/invariant":"jx77H","../../utils/js_utils.js":"b53Tm","./local/setClientOffset.js":"14m4D","./types.js":"5SyvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jx77H":[function(require,module,exports,__globalThis) {
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
var process = require("5a3903f93be82c8e");
function invariant(condition, format, ...args) {
    if (isProduction()) {
        if (format === undefined) throw new Error('invariant requires an error message argument');
    }
    if (!condition) {
        let error;
        if (format === undefined) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            let argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1 // we don't care about invariant's own frame
        ;
        throw error;
    }
}
function isProduction() {
    return typeof process !== 'undefined' && false;
}

},{"5a3903f93be82c8e":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports,__globalThis) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"b53Tm":[function(require,module,exports,__globalThis) {
// cheap lodash replacements
/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
/**
 * drop-in replacement for _.without
 */ parcelHelpers.export(exports, "without", ()=>without);
/**
 * drop-in replacement for _.isString
 * @param input
 */ parcelHelpers.export(exports, "isString", ()=>isString);
/**
 * drop-in replacement for _.isString
 * @param input
 */ parcelHelpers.export(exports, "isObject", ()=>isObject);
/**
 * replacement for _.xor
 * @param itemsA
 * @param itemsB
 */ parcelHelpers.export(exports, "xor", ()=>xor);
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */ parcelHelpers.export(exports, "intersection", ()=>intersection);
function get(obj, path, defaultValue) {
    return path.split('.').reduce((a, c)=>a && a[c] ? a[c] : defaultValue || null, obj);
}
function without(items, item) {
    return items.filter((i)=>i !== item);
}
function isString(input) {
    return typeof input === 'string';
}
function isObject(input) {
    return typeof input === 'object';
}
function xor(itemsA, itemsB) {
    const map = new Map();
    const insertItem = (item)=>{
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    map.forEach((count, key)=>{
        if (count === 1) result.push(key);
    });
    return result;
}
function intersection(itemsA, itemsB) {
    return itemsA.filter((t)=>itemsB.indexOf(t) > -1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14m4D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setClientOffset", ()=>setClientOffset);
var _typesJs = require("../types.js");
function setClientOffset(clientOffset, sourceClientOffset) {
    return {
        type: (0, _typesJs.INIT_COORDS),
        payload: {
            sourceClientOffset: sourceClientOffset || null,
            clientOffset: clientOffset || null
        }
    };
}

},{"../types.js":"5SyvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5SyvE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "INIT_COORDS", ()=>INIT_COORDS);
parcelHelpers.export(exports, "BEGIN_DRAG", ()=>BEGIN_DRAG);
parcelHelpers.export(exports, "PUBLISH_DRAG_SOURCE", ()=>PUBLISH_DRAG_SOURCE);
parcelHelpers.export(exports, "HOVER", ()=>HOVER);
parcelHelpers.export(exports, "DROP", ()=>DROP);
parcelHelpers.export(exports, "END_DRAG", ()=>END_DRAG);
const INIT_COORDS = 'dnd-core/INIT_COORDS';
const BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
const PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
const HOVER = 'dnd-core/HOVER';
const DROP = 'dnd-core/DROP';
const END_DRAG = 'dnd-core/END_DRAG';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a2v8h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDrop", ()=>createDrop);
var _invariant = require("@react-dnd/invariant");
var _jsUtilsJs = require("../../utils/js_utils.js");
var _typesJs = require("./types.js");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function createDrop(manager) {
    return function drop(options = {}) {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyInvariants(monitor);
        const targetIds = getDroppableTargets(monitor);
        // Multiple actions are dispatched here, which is why this doesn't return an action
        targetIds.forEach((targetId, index)=>{
            const dropResult = determineDropResult(targetId, index, registry, monitor);
            const action = {
                type: (0, _typesJs.DROP),
                payload: {
                    dropResult: _objectSpread({}, options, dropResult)
                }
            };
            manager.dispatch(action);
        });
    };
}
function verifyInvariants(monitor) {
    (0, _invariant.invariant)(monitor.isDragging(), 'Cannot call drop while not dragging.');
    (0, _invariant.invariant)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
    const target = registry.getTarget(targetId);
    let dropResult = target ? target.drop(monitor, targetId) : undefined;
    verifyDropResultType(dropResult);
    if (typeof dropResult === 'undefined') dropResult = index === 0 ? {} : monitor.getDropResult();
    return dropResult;
}
function verifyDropResultType(dropResult) {
    (0, _invariant.invariant)(typeof dropResult === 'undefined' || (0, _jsUtilsJs.isObject)(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
    const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
}

},{"@react-dnd/invariant":"jx77H","../../utils/js_utils.js":"b53Tm","./types.js":"5SyvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GiWfG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEndDrag", ()=>createEndDrag);
var _invariant = require("@react-dnd/invariant");
var _typesJs = require("./types.js");
function createEndDrag(manager) {
    return function endDrag() {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyIsDragging(monitor);
        const sourceId = monitor.getSourceId();
        if (sourceId != null) {
            const source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
        }
        return {
            type: (0, _typesJs.END_DRAG)
        };
    };
}
function verifyIsDragging(monitor) {
    (0, _invariant.invariant)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

},{"@react-dnd/invariant":"jx77H","./types.js":"5SyvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dphzf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHover", ()=>createHover);
var _invariant = require("@react-dnd/invariant");
var _matchesTypeJs = require("../../utils/matchesType.js");
var _typesJs = require("./types.js");
function createHover(manager) {
    return function hover(targetIdsArg, { clientOffset } = {}) {
        verifyTargetIdsIsArray(targetIdsArg);
        const targetIds = targetIdsArg.slice(0);
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        const draggedItemType = monitor.getItemType();
        removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
        checkInvariants(targetIds, monitor, registry);
        hoverAllTargets(targetIds, monitor, registry);
        return {
            type: (0, _typesJs.HOVER),
            payload: {
                targetIds,
                clientOffset: clientOffset || null
            }
        };
    };
}
function verifyTargetIdsIsArray(targetIdsArg) {
    (0, _invariant.invariant)(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
    (0, _invariant.invariant)(monitor.isDragging(), 'Cannot call hover while not dragging.');
    (0, _invariant.invariant)(!monitor.didDrop(), 'Cannot call hover after drop.');
    for(let i = 0; i < targetIds.length; i++){
        const targetId = targetIds[i];
        (0, _invariant.invariant)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
        const target = registry.getTarget(targetId);
        (0, _invariant.invariant)(target, 'Expected targetIds to be registered.');
    }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
    // Remove those targetIds that don't match the targetType.  This
    // fixes shallow isOver which would only be non-shallow because of
    // non-matching targets.
    for(let i = targetIds.length - 1; i >= 0; i--){
        const targetId = targetIds[i];
        const targetType = registry.getTargetType(targetId);
        if (!(0, _matchesTypeJs.matchesType)(targetType, draggedItemType)) targetIds.splice(i, 1);
    }
}
function hoverAllTargets(targetIds, monitor, registry) {
    // Finally call hover on all matching targets.
    targetIds.forEach(function(targetId) {
        const target = registry.getTarget(targetId);
        target.hover(monitor, targetId);
    });
}

},{"@react-dnd/invariant":"jx77H","../../utils/matchesType.js":"2UUP0","./types.js":"5SyvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2UUP0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "matchesType", ()=>matchesType);
function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) return targetType === null;
    return Array.isArray(targetType) ? targetType.some((t)=>t === draggedItemType) : targetType === draggedItemType;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJnu5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPublishDragSource", ()=>createPublishDragSource);
var _typesJs = require("./types.js");
function createPublishDragSource(manager) {
    return function publishDragSource() {
        const monitor = manager.getMonitor();
        if (monitor.isDragging()) return {
            type: (0, _typesJs.PUBLISH_DRAG_SOURCE)
        };
        return;
    };
}

},{"./types.js":"5SyvE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKgRM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragDropMonitorImpl", ()=>DragDropMonitorImpl);
var _invariant = require("@react-dnd/invariant");
var _coordsJs = require("../utils/coords.js");
var _dirtinessJs = require("../utils/dirtiness.js");
var _matchesTypeJs = require("../utils/matchesType.js");
class DragDropMonitorImpl {
    subscribeToStateChange(listener, options = {}) {
        const { handlerIds } = options;
        (0, _invariant.invariant)(typeof listener === 'function', 'listener must be a function.');
        (0, _invariant.invariant)(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        let prevStateId = this.store.getState().stateId;
        const handleChange = ()=>{
            const state = this.store.getState();
            const currentStateId = state.stateId;
            try {
                const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, _dirtinessJs.areDirty)(state.dirtyHandlerIds, handlerIds);
                if (!canSkipListener) listener();
            } finally{
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    }
    subscribeToOffsetChange(listener) {
        (0, _invariant.invariant)(typeof listener === 'function', 'listener must be a function.');
        let previousState = this.store.getState().dragOffset;
        const handleChange = ()=>{
            const nextState = this.store.getState().dragOffset;
            if (nextState === previousState) return;
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    }
    canDragSource(sourceId) {
        if (!sourceId) return false;
        const source = this.registry.getSource(sourceId);
        (0, _invariant.invariant)(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (this.isDragging()) return false;
        return source.canDrag(this, sourceId);
    }
    canDropOnTarget(targetId) {
        // undefined on initial render
        if (!targetId) return false;
        const target = this.registry.getTarget(targetId);
        (0, _invariant.invariant)(target, `Expected to find a valid target. targetId=${targetId}`);
        if (!this.isDragging() || this.didDrop()) return false;
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        return (0, _matchesTypeJs.matchesType)(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
    isDragging() {
        return Boolean(this.getItemType());
    }
    isDraggingSource(sourceId) {
        // undefined on initial render
        if (!sourceId) return false;
        const source = this.registry.getSource(sourceId, true);
        (0, _invariant.invariant)(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (!this.isDragging() || !this.isSourcePublic()) return false;
        const sourceType = this.registry.getSourceType(sourceId);
        const draggedItemType = this.getItemType();
        if (sourceType !== draggedItemType) return false;
        return source.isDragging(this, sourceId);
    }
    isOverTarget(targetId, options = {
        shallow: false
    }) {
        // undefined on initial render
        if (!targetId) return false;
        const { shallow } = options;
        if (!this.isDragging()) return false;
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        if (draggedItemType && !(0, _matchesTypeJs.matchesType)(targetType, draggedItemType)) return false;
        const targetIds = this.getTargetIds();
        if (!targetIds.length) return false;
        const index = targetIds.indexOf(targetId);
        if (shallow) return index === targetIds.length - 1;
        else return index > -1;
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType;
    }
    getItem() {
        return this.store.getState().dragOperation.item;
    }
    getSourceId() {
        return this.store.getState().dragOperation.sourceId;
    }
    getTargetIds() {
        return this.store.getState().dragOperation.targetIds;
    }
    getDropResult() {
        return this.store.getState().dragOperation.dropResult;
    }
    didDrop() {
        return this.store.getState().dragOperation.didDrop;
    }
    isSourcePublic() {
        return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
    getInitialClientOffset() {
        return this.store.getState().dragOffset.initialClientOffset;
    }
    getInitialSourceClientOffset() {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset;
    }
    getSourceClientOffset() {
        return (0, _coordsJs.getSourceClientOffset)(this.store.getState().dragOffset);
    }
    getDifferenceFromInitialOffset() {
        return (0, _coordsJs.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
    }
    constructor(store, registry){
        this.store = store;
        this.registry = registry;
    }
}

},{"@react-dnd/invariant":"jx77H","../utils/coords.js":"9g8WI","../utils/dirtiness.js":"i43yM","../utils/matchesType.js":"2UUP0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9g8WI":[function(require,module,exports,__globalThis) {
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add);
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */ parcelHelpers.export(exports, "subtract", ()=>subtract);
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */ parcelHelpers.export(exports, "getSourceClientOffset", ()=>getSourceClientOffset);
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */ parcelHelpers.export(exports, "getDifferenceFromInitialOffset", ()=>getDifferenceFromInitialOffset);
function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}
function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
function getSourceClientOffset(state) {
    const { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) return null;
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
    const { clientOffset, initialClientOffset } = state;
    if (!clientOffset || !initialClientOffset) return null;
    return subtract(clientOffset, initialClientOffset);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i43yM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NONE", ()=>NONE);
parcelHelpers.export(exports, "ALL", ()=>ALL);
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */ parcelHelpers.export(exports, "areDirty", ()=>areDirty);
var _jsUtilsJs = require("./js_utils.js");
const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === NONE) return false;
    if (dirtyIds === ALL || typeof handlerIds === 'undefined') return true;
    const commonIds = (0, _jsUtilsJs.intersection)(handlerIds, dirtyIds);
    return commonIds.length > 0;
}

},{"./js_utils.js":"b53Tm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1UVkw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HandlerRegistryImpl", ()=>HandlerRegistryImpl);
var _asap = require("@react-dnd/asap");
var _invariant = require("@react-dnd/invariant");
var _registryJs = require("../actions/registry.js");
var _contractsJs = require("../contracts.js");
var _interfacesJs = require("../interfaces.js");
var _getNextUniqueIdJs = require("../utils/getNextUniqueId.js");
function getNextHandlerId(role) {
    const id = (0, _getNextUniqueIdJs.getNextUniqueId)().toString();
    switch(role){
        case (0, _interfacesJs.HandlerRole).SOURCE:
            return `S${id}`;
        case (0, _interfacesJs.HandlerRole).TARGET:
            return `T${id}`;
        default:
            throw new Error(`Unknown Handler Role: ${role}`);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch(handlerId[0]){
        case 'S':
            return (0, _interfacesJs.HandlerRole).SOURCE;
        case 'T':
            return (0, _interfacesJs.HandlerRole).TARGET;
        default:
            throw new Error(`Cannot parse handler ID: ${handlerId}`);
    }
}
function mapContainsValue(map, searchValue) {
    const entries = map.entries();
    let isDone = false;
    do {
        const { done, value: [, value] } = entries.next();
        if (value === searchValue) return true;
        isDone = !!done;
    }while (!isDone);
    return false;
}
class HandlerRegistryImpl {
    addSource(type, source) {
        (0, _contractsJs.validateType)(type);
        (0, _contractsJs.validateSourceContract)(source);
        const sourceId = this.addHandler((0, _interfacesJs.HandlerRole).SOURCE, type, source);
        this.store.dispatch((0, _registryJs.addSource)(sourceId));
        return sourceId;
    }
    addTarget(type, target) {
        (0, _contractsJs.validateType)(type, true);
        (0, _contractsJs.validateTargetContract)(target);
        const targetId = this.addHandler((0, _interfacesJs.HandlerRole).TARGET, type, target);
        this.store.dispatch((0, _registryJs.addTarget)(targetId));
        return targetId;
    }
    containsHandler(handler) {
        return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
    getSource(sourceId, includePinned = false) {
        (0, _invariant.invariant)(this.isSourceId(sourceId), 'Expected a valid source ID.');
        const isPinned = includePinned && sourceId === this.pinnedSourceId;
        const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    }
    getTarget(targetId) {
        (0, _invariant.invariant)(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    }
    getSourceType(sourceId) {
        (0, _invariant.invariant)(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    }
    getTargetType(targetId) {
        (0, _invariant.invariant)(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    }
    isSourceId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === (0, _interfacesJs.HandlerRole).SOURCE;
    }
    isTargetId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === (0, _interfacesJs.HandlerRole).TARGET;
    }
    removeSource(sourceId) {
        (0, _invariant.invariant)(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch((0, _registryJs.removeSource)(sourceId));
        (0, _asap.asap)(()=>{
            this.dragSources.delete(sourceId);
            this.types.delete(sourceId);
        });
    }
    removeTarget(targetId) {
        (0, _invariant.invariant)(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch((0, _registryJs.removeTarget)(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    }
    pinSource(sourceId) {
        const source = this.getSource(sourceId);
        (0, _invariant.invariant)(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    }
    unpinSource() {
        (0, _invariant.invariant)(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    addHandler(role, type, handler) {
        const id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === (0, _interfacesJs.HandlerRole).SOURCE) this.dragSources.set(id, handler);
        else if (role === (0, _interfacesJs.HandlerRole).TARGET) this.dropTargets.set(id, handler);
        return id;
    }
    constructor(store){
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
        this.store = store;
    }
}

},{"@react-dnd/asap":"kJ5i7","@react-dnd/invariant":"jx77H","../actions/registry.js":"7KHMF","../contracts.js":"jjkan","../interfaces.js":"a0xuZ","../utils/getNextUniqueId.js":"dFc10","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kJ5i7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asapJs = require("./asap.js");
parcelHelpers.exportAll(_asapJs, exports);
var _asapQueueJs = require("./AsapQueue.js");
parcelHelpers.exportAll(_asapQueueJs, exports);
var _taskFactoryJs = require("./TaskFactory.js");
parcelHelpers.exportAll(_taskFactoryJs, exports);
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);

},{"./asap.js":"4mFi1","./AsapQueue.js":"PUtFx","./TaskFactory.js":"heFlf","./types.js":"in2uS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mFi1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */ parcelHelpers.export(exports, "asap", ()=>asap);
var _asapQueueJs = require("./AsapQueue.js");
var _taskFactoryJs = require("./TaskFactory.js");
const asapQueue = new (0, _asapQueueJs.AsapQueue)();
const taskFactory = new (0, _taskFactoryJs.TaskFactory)(asapQueue.registerPendingError);
function asap(task) {
    asapQueue.enqueueTask(taskFactory.create(task));
}

},{"./AsapQueue.js":"PUtFx","./TaskFactory.js":"heFlf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"PUtFx":[function(require,module,exports,__globalThis) {
/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, @typescript-eslint/no-non-null-assertion */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsapQueue", ()=>AsapQueue) // The message channel technique was discovered by Malte Ubl and was the
 // original foundation for this library.
 // http://www.nonblocking.io/2011/06/windownexttick.html
 // Safari 6.0.5 (at least) intermittently fails to create message ports on a
 // page's first load. Thankfully, this version of Safari supports
 // MutationObservers, so we don't need to fall back in that case.
 // function makeRequestCallFromMessageChannel(callback) {
 //     var channel = new MessageChannel();
 //     channel.port1.onmessage = callback;
 //     return function requestCall() {
 //         channel.port2.postMessage(0);
 //     };
 // }
 // For reasons explained above, we are also unable to use `setImmediate`
 // under any circumstances.
 // Even if we were, there is another bug in Internet Explorer 10.
 // It is not sufficient to assign `setImmediate` to `requestFlush` because
 // `setImmediate` must be called *by name* and therefore must be wrapped in a
 // closure.
 // Never forget.
 // function makeRequestCallFromSetImmediate(callback) {
 //     return function requestCall() {
 //         setImmediate(callback);
 //     };
 // }
 // Safari 6.0 has a problem where timers will get lost while the user is
 // scrolling. This problem does not impact ASAP because Safari 6.0 supports
 // mutation observers, so that implementation is used instead.
 // However, if we ever elect to use timers in Safari, the prevalent work-around
 // is to add a scroll event listener that calls for a flush.
 // `setTimeout` does not call the passed callback if the delay is less than
 // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
 // even then.
 // This is for `asap.js` only.
 // Its name will be periodically randomized to break any code that depends on
 // // its existence.
 // rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
 // ASAP was originally a nextTick shim included in Q. This was factored out
 // into this ASAP package. It was later adapted to RSVP which made further
 // amendments. These decisions, particularly to marginalize MessageChannel and
 // to capture the MutationObserver implementation in a closure, were integrated
 // back into ASAP proper.
 // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
;
var _makeRequestCallJs = require("./makeRequestCall.js");
class AsapQueue {
    // Use the fastest means possible to execute a task in its own turn, with
    // priority over other events including IO, animation, reflow, and redraw
    // events in browsers.
    //
    // An exception thrown by a task will permanently interrupt the processing of
    // subsequent tasks. The higher level `asap` function ensures that if an
    // exception is thrown by a task, that the task queue will continue flushing as
    // soon as possible, but if you use `rawAsap` directly, you are responsible to
    // either ensure that no exceptions are thrown from your task, or to manually
    // call `rawAsap.requestFlush` if an exception is thrown.
    enqueueTask(task) {
        const { queue: q, requestFlush } = this;
        if (!q.length) {
            requestFlush();
            this.flushing = true;
        }
        // Equivalent to push, but avoids a function call.
        q[q.length] = task;
    }
    constructor(){
        this.queue = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        this.pendingErrors = [];
        // Once a flush has been requested, no further calls to `requestFlush` are
        // necessary until the next `flush` completes.
        // @ts-ignore
        this.flushing = false;
        // The position of the next task to execute in the task queue. This is
        // preserved between calls to `flush` so that it can be resumed if
        // a task throws an exception.
        this.index = 0;
        // If a task schedules additional tasks recursively, the task queue can grow
        // unbounded. To prevent memory exhaustion, the task queue will periodically
        // truncate already-completed tasks.
        this.capacity = 1024;
        // The flush function processes all tasks that have been scheduled with
        // `rawAsap` unless and until one of those tasks throws an exception.
        // If a task throws an exception, `flush` ensures that its state will remain
        // consistent and will resume where it left off when called again.
        // However, `flush` does not make any arrangements to be called again if an
        // exception is thrown.
        this.flush = ()=>{
            const { queue: q } = this;
            while(this.index < q.length){
                const currentIndex = this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (this.index > this.capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for(let scan = 0, newLength = q.length - this.index; scan < newLength; scan++)q[scan] = q[scan + this.index];
                    q.length -= this.index;
                    this.index = 0;
                }
            }
            q.length = 0;
            this.index = 0;
            this.flushing = false;
        };
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        this.registerPendingError = (err)=>{
            this.pendingErrors.push(err);
            this.requestErrorThrow();
        };
        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
        this.requestFlush = (0, _makeRequestCallJs.makeRequestCall)(this.flush);
        this.requestErrorThrow = (0, _makeRequestCallJs.makeRequestCallFromTimer)(()=>{
            // Throw first error
            if (this.pendingErrors.length) throw this.pendingErrors.shift();
        });
    }
}

},{"./makeRequestCall.js":"hRpJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRpJ9":[function(require,module,exports,__globalThis) {
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeRequestCallFromTimer", ()=>makeRequestCallFromTimer);
// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
parcelHelpers.export(exports, "makeRequestCallFromMutationObserver", ()=>makeRequestCallFromMutationObserver);
parcelHelpers.export(exports, "makeRequestCall", ()=>makeRequestCall);
var global = arguments[3];
const scope = typeof global !== 'undefined' ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        const timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        const intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}
function makeRequestCallFromMutationObserver(callback) {
    let toggle = 1;
    const observer = new BrowserMutationObserver(callback);
    const node = document.createTextNode('');
    observer.observe(node, {
        characterData: true
    });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}
const makeRequestCall = typeof BrowserMutationObserver === 'function' ? // They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver : // 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"heFlf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TaskFactory", ()=>TaskFactory);
var _rawTaskJs = require("./RawTask.js");
class TaskFactory {
    create(task) {
        const tasks = this.freeTasks;
        const t1 = tasks.length ? tasks.pop() : new (0, _rawTaskJs.RawTask)(this.onError, (t)=>tasks[tasks.length] = t);
        t1.task = task;
        return t1;
    }
    constructor(onError){
        this.onError = onError;
        this.freeTasks = [];
    }
}

},{"./RawTask.js":"kX4uJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kX4uJ":[function(require,module,exports,__globalThis) {
// `call`, just like a function.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RawTask", ()=>RawTask);
class RawTask {
    call() {
        try {
            this.task && this.task();
        } catch (error) {
            this.onError(error);
        } finally{
            this.task = null;
            this.release(this);
        }
    }
    constructor(onError, release){
        this.onError = onError;
        this.release = release;
        this.task = null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"in2uS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KHMF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ADD_SOURCE", ()=>ADD_SOURCE);
parcelHelpers.export(exports, "ADD_TARGET", ()=>ADD_TARGET);
parcelHelpers.export(exports, "REMOVE_SOURCE", ()=>REMOVE_SOURCE);
parcelHelpers.export(exports, "REMOVE_TARGET", ()=>REMOVE_TARGET);
parcelHelpers.export(exports, "addSource", ()=>addSource);
parcelHelpers.export(exports, "addTarget", ()=>addTarget);
parcelHelpers.export(exports, "removeSource", ()=>removeSource);
parcelHelpers.export(exports, "removeTarget", ()=>removeTarget);
const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
const ADD_TARGET = 'dnd-core/ADD_TARGET';
const REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
const REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: ADD_SOURCE,
        payload: {
            sourceId
        }
    };
}
function addTarget(targetId) {
    return {
        type: ADD_TARGET,
        payload: {
            targetId
        }
    };
}
function removeSource(sourceId) {
    return {
        type: REMOVE_SOURCE,
        payload: {
            sourceId
        }
    };
}
function removeTarget(targetId) {
    return {
        type: REMOVE_TARGET,
        payload: {
            targetId
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jjkan":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateSourceContract", ()=>validateSourceContract);
parcelHelpers.export(exports, "validateTargetContract", ()=>validateTargetContract);
parcelHelpers.export(exports, "validateType", ()=>validateType);
var _invariant = require("@react-dnd/invariant");
function validateSourceContract(source) {
    (0, _invariant.invariant)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    (0, _invariant.invariant)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    (0, _invariant.invariant)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
    (0, _invariant.invariant)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    (0, _invariant.invariant)(typeof target.hover === 'function', 'Expected hover to be a function.');
    (0, _invariant.invariant)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach((t)=>validateType(t, false));
        return;
    }
    (0, _invariant.invariant)(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

},{"@react-dnd/invariant":"jx77H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0xuZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HandlerRole", ()=>HandlerRole);
var HandlerRole;
(function(HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFc10":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNextUniqueId", ()=>getNextUniqueId);
let nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6A3sW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce);
var _jsUtilsJs = require("../utils/js_utils.js");
var _dirtyHandlerIdsJs = require("./dirtyHandlerIds.js");
var _dragOffsetJs = require("./dragOffset.js");
var _dragOperationJs = require("./dragOperation.js");
var _refCountJs = require("./refCount.js");
var _stateIdJs = require("./stateId.js");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function reduce(state = {}, action) {
    return {
        dirtyHandlerIds: (0, _dirtyHandlerIdsJs.reduce)(state.dirtyHandlerIds, {
            type: action.type,
            payload: _objectSpread({}, action.payload, {
                prevTargetIds: (0, _jsUtilsJs.get)(state, 'dragOperation.targetIds', [])
            })
        }),
        dragOffset: (0, _dragOffsetJs.reduce)(state.dragOffset, action),
        refCount: (0, _refCountJs.reduce)(state.refCount, action),
        dragOperation: (0, _dragOperationJs.reduce)(state.dragOperation, action),
        stateId: (0, _stateIdJs.reduce)(state.stateId)
    };
}

},{"../utils/js_utils.js":"b53Tm","./dirtyHandlerIds.js":"3U6G1","./dragOffset.js":"eVDuu","./dragOperation.js":"Kr2Ip","./refCount.js":"ipqTz","./stateId.js":"80gbA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3U6G1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce);
var _indexJs = require("../actions/dragDrop/index.js");
var _registryJs = require("../actions/registry.js");
var _dirtinessJs = require("../utils/dirtiness.js");
var _equalityJs = require("../utils/equality.js");
var _jsUtilsJs = require("../utils/js_utils.js");
function reduce(_state = (0, _dirtinessJs.NONE), action) {
    switch(action.type){
        case 0, _indexJs.HOVER:
            break;
        case 0, _registryJs.ADD_SOURCE:
        case 0, _registryJs.ADD_TARGET:
        case 0, _registryJs.REMOVE_TARGET:
        case 0, _registryJs.REMOVE_SOURCE:
            return 0, _dirtinessJs.NONE;
        case 0, _indexJs.BEGIN_DRAG:
        case 0, _indexJs.PUBLISH_DRAG_SOURCE:
        case 0, _indexJs.END_DRAG:
        case 0, _indexJs.DROP:
        default:
            return 0, _dirtinessJs.ALL;
    }
    const { targetIds = [], prevTargetIds = [] } = action.payload;
    const result = (0, _jsUtilsJs.xor)(targetIds, prevTargetIds);
    const didChange = result.length > 0 || !(0, _equalityJs.areArraysEqual)(targetIds, prevTargetIds);
    if (!didChange) return 0, _dirtinessJs.NONE;
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    const innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
        if (prevInnermostTargetId) result.push(prevInnermostTargetId);
        if (innermostTargetId) result.push(innermostTargetId);
    }
    return result;
}

},{"../actions/dragDrop/index.js":"fOioQ","../actions/registry.js":"7KHMF","../utils/dirtiness.js":"i43yM","../utils/equality.js":"9VS1g","../utils/js_utils.js":"b53Tm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9VS1g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "strictEquality", ()=>strictEquality);
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */ parcelHelpers.export(exports, "areCoordsEqual", ()=>areCoordsEqual);
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */ parcelHelpers.export(exports, "areArraysEqual", ()=>areArraysEqual);
const strictEquality = (a, b)=>a === b;
function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) return true;
    else if (!offsetA || !offsetB) return false;
    else return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
}
function areArraysEqual(a, b, isEqual = strictEquality) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; ++i){
        if (!isEqual(a[i], b[i])) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eVDuu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce);
var _indexJs = require("../actions/dragDrop/index.js");
var _equalityJs = require("../utils/equality.js");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
const initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function reduce(state = initialState, action) {
    const { payload } = action;
    switch(action.type){
        case 0, _indexJs.INIT_COORDS:
        case 0, _indexJs.BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
            };
        case 0, _indexJs.HOVER:
            if ((0, _equalityJs.areCoordsEqual)(state.clientOffset, payload.clientOffset)) return state;
            return _objectSpread({}, state, {
                clientOffset: payload.clientOffset
            });
        case 0, _indexJs.END_DRAG:
        case 0, _indexJs.DROP:
            return initialState;
        default:
            return state;
    }
}

},{"../actions/dragDrop/index.js":"fOioQ","../utils/equality.js":"9VS1g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Kr2Ip":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce);
var _indexJs = require("../actions/dragDrop/index.js");
var _registryJs = require("../actions/registry.js");
var _jsUtilsJs = require("../utils/js_utils.js");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
const initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
};
function reduce(state = initialState, action) {
    const { payload } = action;
    switch(action.type){
        case 0, _indexJs.BEGIN_DRAG:
            return _objectSpread({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
            });
        case 0, _indexJs.PUBLISH_DRAG_SOURCE:
            return _objectSpread({}, state, {
                isSourcePublic: true
            });
        case 0, _indexJs.HOVER:
            return _objectSpread({}, state, {
                targetIds: payload.targetIds
            });
        case 0, _registryJs.REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) return state;
            return _objectSpread({}, state, {
                targetIds: (0, _jsUtilsJs.without)(state.targetIds, payload.targetId)
            });
        case 0, _indexJs.DROP:
            return _objectSpread({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
            });
        case 0, _indexJs.END_DRAG:
            return _objectSpread({}, state, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: false,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return state;
    }
}

},{"../actions/dragDrop/index.js":"fOioQ","../actions/registry.js":"7KHMF","../utils/js_utils.js":"b53Tm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipqTz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce);
var _registryJs = require("../actions/registry.js");
function reduce(state = 0, action) {
    switch(action.type){
        case 0, _registryJs.ADD_SOURCE:
        case 0, _registryJs.ADD_TARGET:
            return state + 1;
        case 0, _registryJs.REMOVE_SOURCE:
        case 0, _registryJs.REMOVE_TARGET:
            return state - 1;
        default:
            return state;
    }
}

},{"../actions/registry.js":"7KHMF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80gbA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce);
function reduce(state = 0) {
    return state + 1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SG0K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragPreviewImage", ()=>DragPreviewImage);
var _react = require("react");
const DragPreviewImage = (0, _react.memo)(function DragPreviewImage({ connect, src }) {
    (0, _react.useEffect)(()=>{
        if (typeof Image === 'undefined') return;
        let connected = false;
        const img = new Image();
        img.src = src;
        img.onload = ()=>{
            connect(img);
            connected = true;
        };
        return ()=>{
            if (connected) connect(null);
        };
    });
    return null;
});

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XP1w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);
var _indexJs = require("./useDrag/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _useDragDropManagerJs = require("./useDragDropManager.js");
parcelHelpers.exportAll(_useDragDropManagerJs, exports);
var _useDragLayerJs = require("./useDragLayer.js");
parcelHelpers.exportAll(_useDragLayerJs, exports);
var _indexJs1 = require("./useDrop/index.js");
parcelHelpers.exportAll(_indexJs1, exports);

},{"./types.js":"eWNh1","./useDrag/index.js":"jXNJ4","./useDragDropManager.js":"6pSvk","./useDragLayer.js":"lHjiZ","./useDrop/index.js":"7X5xh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eWNh1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXNJ4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _useDragJs = require("./useDrag.js");
parcelHelpers.exportAll(_useDragJs, exports);

},{"./useDrag.js":"jqps4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqps4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * useDragSource hook
 * @param sourceSpec The drag source specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ parcelHelpers.export(exports, "useDrag", ()=>useDrag);
var _invariant = require("@react-dnd/invariant");
var _useCollectedPropsJs = require("../useCollectedProps.js");
var _useOptionalFactoryJs = require("../useOptionalFactory.js");
var _connectorsJs = require("./connectors.js");
var _useDragSourceConnectorJs = require("./useDragSourceConnector.js");
var _useDragSourceMonitorJs = require("./useDragSourceMonitor.js");
var _useRegisteredDragSourceJs = require("./useRegisteredDragSource.js");
function useDrag(specArg, deps) {
    const spec = (0, _useOptionalFactoryJs.useOptionalFactory)(specArg, deps);
    (0, _invariant.invariant)(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
    const monitor = (0, _useDragSourceMonitorJs.useDragSourceMonitor)();
    const connector = (0, _useDragSourceConnectorJs.useDragSourceConnector)(spec.options, spec.previewOptions);
    (0, _useRegisteredDragSourceJs.useRegisteredDragSource)(spec, monitor, connector);
    return [
        (0, _useCollectedPropsJs.useCollectedProps)(spec.collect, monitor, connector),
        (0, _connectorsJs.useConnectDragSource)(connector),
        (0, _connectorsJs.useConnectDragPreview)(connector)
    ];
}

},{"@react-dnd/invariant":"jx77H","../useCollectedProps.js":"a3H9u","../useOptionalFactory.js":"f5wK9","./connectors.js":"5TvAa","./useDragSourceConnector.js":"iUvr0","./useDragSourceMonitor.js":"a8O9l","./useRegisteredDragSource.js":"jzCVV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a3H9u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCollectedProps", ()=>useCollectedProps);
var _useMonitorOutputJs = require("./useMonitorOutput.js");
function useCollectedProps(collector, monitor, connector) {
    return (0, _useMonitorOutputJs.useMonitorOutput)(monitor, collector || (()=>({})), ()=>connector.reconnect());
}

},{"./useMonitorOutput.js":"j8CZv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8CZv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useMonitorOutput", ()=>useMonitorOutput);
var _useCollectorJs = require("./useCollector.js");
var _useIsomorphicLayoutEffectJs = require("./useIsomorphicLayoutEffect.js");
function useMonitorOutput(monitor, collect, onCollect) {
    const [collected, updateCollected] = (0, _useCollectorJs.useCollector)(monitor, collect, onCollect);
    (0, _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect)(function subscribeToMonitorStateChange() {
        const handlerId = monitor.getHandlerId();
        if (handlerId == null) return;
        return monitor.subscribeToStateChange(updateCollected, {
            handlerIds: [
                handlerId
            ]
        });
    }, [
        monitor,
        updateCollected
    ]);
    return collected;
}

},{"./useCollector.js":"cqg63","./useIsomorphicLayoutEffect.js":"2Ams9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqg63":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */ parcelHelpers.export(exports, "useCollector", ()=>useCollector);
var _fastDeepEqual = require("fast-deep-equal");
var _fastDeepEqualDefault = parcelHelpers.interopDefault(_fastDeepEqual);
var _react = require("react");
var _useIsomorphicLayoutEffectJs = require("./useIsomorphicLayoutEffect.js");
function useCollector(monitor, collect, onUpdate) {
    const [collected, setCollected] = (0, _react.useState)(()=>collect(monitor));
    const updateCollected = (0, _react.useCallback)(()=>{
        const nextValue = collect(monitor);
        // This needs to be a deep-equality check because some monitor-collected values
        // include XYCoord objects that may be equivalent, but do not have instance equality.
        if (!(0, _fastDeepEqualDefault.default)(collected, nextValue)) {
            setCollected(nextValue);
            if (onUpdate) onUpdate();
        }
    }, [
        collected,
        monitor,
        onUpdate
    ]);
    // update the collected properties after react renders.
    // Note that the "Dustbin Stress Test" fails if this is not
    // done when the component updates
    (0, _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect)(updateCollected);
    return [
        collected,
        updateCollected
    ];
}

},{"fast-deep-equal":"ixZYU","react":"21dqq","./useIsomorphicLayoutEffect.js":"2Ams9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixZYU":[function(require,module,exports,__globalThis) {
'use strict';
// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};

},{}],"2Ams9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useIsomorphicLayoutEffect", ()=>useIsomorphicLayoutEffect);
var _react = require("react");
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? (0, _react.useLayoutEffect) : (0, _react.useEffect);

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f5wK9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useOptionalFactory", ()=>useOptionalFactory);
var _react = require("react");
function useOptionalFactory(arg, deps) {
    const memoDeps = [
        ...deps || []
    ];
    if (deps == null && typeof arg !== 'function') memoDeps.push(arg);
    return (0, _react.useMemo)(()=>{
        return typeof arg === 'function' ? arg() : arg;
    }, memoDeps);
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5TvAa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useConnectDragSource", ()=>useConnectDragSource);
parcelHelpers.export(exports, "useConnectDragPreview", ()=>useConnectDragPreview);
var _react = require("react");
function useConnectDragSource(connector) {
    return (0, _react.useMemo)(()=>connector.hooks.dragSource(), [
        connector
    ]);
}
function useConnectDragPreview(connector) {
    return (0, _react.useMemo)(()=>connector.hooks.dragPreview(), [
        connector
    ]);
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUvr0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useDragSourceConnector", ()=>useDragSourceConnector);
var _react = require("react");
var _indexJs = require("../../internals/index.js");
var _useDragDropManagerJs = require("../useDragDropManager.js");
var _useIsomorphicLayoutEffectJs = require("../useIsomorphicLayoutEffect.js");
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
    const manager = (0, _useDragDropManagerJs.useDragDropManager)();
    const connector = (0, _react.useMemo)(()=>new (0, _indexJs.SourceConnector)(manager.getBackend()), [
        manager
    ]);
    (0, _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect)(()=>{
        connector.dragSourceOptions = dragSourceOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragSource();
    }, [
        connector,
        dragSourceOptions
    ]);
    (0, _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect)(()=>{
        connector.dragPreviewOptions = dragPreviewOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragPreview();
    }, [
        connector,
        dragPreviewOptions
    ]);
    return connector;
}

},{"react":"21dqq","../../internals/index.js":"bkMoJ","../useDragDropManager.js":"6pSvk","../useIsomorphicLayoutEffect.js":"2Ams9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkMoJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dragSourceMonitorImplJs = require("./DragSourceMonitorImpl.js");
parcelHelpers.exportAll(_dragSourceMonitorImplJs, exports);
var _dropTargetMonitorImplJs = require("./DropTargetMonitorImpl.js");
parcelHelpers.exportAll(_dropTargetMonitorImplJs, exports);
var _registrationJs = require("./registration.js");
parcelHelpers.exportAll(_registrationJs, exports);
var _sourceConnectorJs = require("./SourceConnector.js");
parcelHelpers.exportAll(_sourceConnectorJs, exports);
var _targetConnectorJs = require("./TargetConnector.js");
parcelHelpers.exportAll(_targetConnectorJs, exports);

},{"./DragSourceMonitorImpl.js":"eMEBG","./DropTargetMonitorImpl.js":"gDC6F","./registration.js":"dw5Rr","./SourceConnector.js":"ghSH3","./TargetConnector.js":"fMnCl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eMEBG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragSourceMonitorImpl", ()=>DragSourceMonitorImpl);
var _invariant = require("@react-dnd/invariant");
let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
    receiveHandlerId(sourceId) {
        this.sourceId = sourceId;
    }
    getHandlerId() {
        return this.sourceId;
    }
    canDrag() {
        (0, _invariant.invariant)(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        } finally{
            isCallingCanDrag = false;
        }
    }
    isDragging() {
        if (!this.sourceId) return false;
        (0, _invariant.invariant)(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        } finally{
            isCallingIsDragging = false;
        }
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    isDraggingSource(sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    }
    isOverTarget(targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    }
    getTargetIds() {
        return this.internalMonitor.getTargetIds();
    }
    isSourcePublic() {
        return this.internalMonitor.isSourcePublic();
    }
    getSourceId() {
        return this.internalMonitor.getSourceId();
    }
    subscribeToOffsetChange(listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    }
    canDragSource(sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    }
    canDropOnTarget(targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.sourceId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

},{"@react-dnd/invariant":"jx77H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDC6F":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DropTargetMonitorImpl", ()=>DropTargetMonitorImpl);
var _invariant = require("@react-dnd/invariant");
let isCallingCanDrop = false;
class DropTargetMonitorImpl {
    receiveHandlerId(targetId) {
        this.targetId = targetId;
    }
    getHandlerId() {
        return this.targetId;
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    canDrop() {
        // Cut out early if the target id has not been set. This should prevent errors
        // where the user has an older version of dnd-core like in
        // https://github.com/react-dnd/react-dnd/issues/1310
        if (!this.targetId) return false;
        (0, _invariant.invariant)(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        } finally{
            isCallingCanDrop = false;
        }
    }
    isOver(options) {
        if (!this.targetId) return false;
        return this.internalMonitor.isOverTarget(this.targetId, options);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.targetId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

},{"@react-dnd/invariant":"jx77H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dw5Rr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerTarget", ()=>registerTarget);
parcelHelpers.export(exports, "registerSource", ()=>registerSource);
function registerTarget(type, target, manager) {
    const registry = manager.getRegistry();
    const targetId = registry.addTarget(type, target);
    return [
        targetId,
        ()=>registry.removeTarget(targetId)
    ];
}
function registerSource(type, source, manager) {
    const registry = manager.getRegistry();
    const sourceId = registry.addSource(type, source);
    return [
        sourceId,
        ()=>registry.removeSource(sourceId)
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ghSH3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SourceConnector", ()=>SourceConnector);
var _shallowequal = require("@react-dnd/shallowequal");
var _isRefJs = require("./isRef.js");
var _wrapConnectorHooksJs = require("./wrapConnectorHooks.js");
class SourceConnector {
    receiveHandlerId(newHandlerId) {
        if (this.handlerId === newHandlerId) return;
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get connectTarget() {
        return this.dragSource;
    }
    get dragSourceOptions() {
        return this.dragSourceOptionsInternal;
    }
    set dragSourceOptions(options) {
        this.dragSourceOptionsInternal = options;
    }
    get dragPreviewOptions() {
        return this.dragPreviewOptionsInternal;
    }
    set dragPreviewOptions(options) {
        this.dragPreviewOptionsInternal = options;
    }
    reconnect() {
        const didChange = this.reconnectDragSource();
        this.reconnectDragPreview(didChange);
    }
    reconnectDragSource() {
        const dragSource = this.dragSource;
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        if (didChange) this.disconnectDragSource();
        if (!this.handlerId) return didChange;
        if (!dragSource) {
            this.lastConnectedDragSource = dragSource;
            return didChange;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragSource = dragSource;
            this.lastConnectedDragSourceOptions = this.dragSourceOptions;
            this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
        }
        return didChange;
    }
    reconnectDragPreview(forceDidChange = false) {
        const dragPreview = this.dragPreview;
        // if nothing has changed then don't resubscribe
        const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (didChange) this.disconnectDragPreview();
        if (!this.handlerId) return;
        if (!dragPreview) {
            this.lastConnectedDragPreview = dragPreview;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragPreview = dragPreview;
            this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
            this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
        }
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didConnectedDragSourceChange() {
        return this.lastConnectedDragSource !== this.dragSource;
    }
    didConnectedDragPreviewChange() {
        return this.lastConnectedDragPreview !== this.dragPreview;
    }
    didDragSourceOptionsChange() {
        return !(0, _shallowequal.shallowEqual)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
        return !(0, _shallowequal.shallowEqual)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
    disconnectDragSource() {
        if (this.dragSourceUnsubscribe) {
            this.dragSourceUnsubscribe();
            this.dragSourceUnsubscribe = undefined;
        }
    }
    disconnectDragPreview() {
        if (this.dragPreviewUnsubscribe) {
            this.dragPreviewUnsubscribe();
            this.dragPreviewUnsubscribe = undefined;
            this.dragPreviewNode = null;
            this.dragPreviewRef = null;
        }
    }
    get dragSource() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
    get dragPreview() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
    clearDragSource() {
        this.dragSourceNode = null;
        this.dragSourceRef = null;
    }
    clearDragPreview() {
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
    }
    constructor(backend){
        this.hooks = (0, _wrapConnectorHooksJs.wrapConnectorHooks)({
            dragSource: (node, options)=>{
                this.clearDragSource();
                this.dragSourceOptions = options || null;
                if ((0, _isRefJs.isRef)(node)) this.dragSourceRef = node;
                else this.dragSourceNode = node;
                this.reconnectDragSource();
            },
            dragPreview: (node, options)=>{
                this.clearDragPreview();
                this.dragPreviewOptions = options || null;
                if ((0, _isRefJs.isRef)(node)) this.dragPreviewRef = node;
                else this.dragPreviewNode = node;
                this.reconnectDragPreview();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dragSourceRef = null;
        this.dragSourceOptionsInternal = null;
        // The drag preview may either be attached via ref or connect function
        this.dragPreviewRef = null;
        this.dragPreviewOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDragSource = null;
        this.lastConnectedDragSourceOptions = null;
        this.lastConnectedDragPreview = null;
        this.lastConnectedDragPreviewOptions = null;
        this.backend = backend;
    }
}

},{"@react-dnd/shallowequal":"2TPtw","./isRef.js":"gUH5x","./wrapConnectorHooks.js":"fdI3R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2TPtw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shallowEqual", ()=>shallowEqual);
function shallowEqual(objA, objB, compare, compareContext) {
    let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (compareResult !== void 0) return !!compareResult;
    if (objA === objB) return true;
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) return false;
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(let idx = 0; idx < keysA.length; idx++){
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) return false;
        const valueA = objA[key];
        const valueB = objB[key];
        compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (compareResult === false || compareResult === void 0 && valueA !== valueB) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gUH5x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isRef", ()=>isRef);
function isRef(obj) {
    return obj !== null && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdI3R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wrapConnectorHooks", ()=>wrapConnectorHooks);
var _invariant = require("@react-dnd/invariant");
var _react = require("react");
function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') return;
    const displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' + `You can either wrap ${displayName} into a <div>, or turn it into a ` + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return (elementOrNode = null, options = null)=>{
        // When passed a node, call the hook straight away.
        if (!(0, _react.isValidElement)(elementOrNode)) {
            const node = elementOrNode;
            hook(node, options);
            // return the node so it can be chained (e.g. when within callback refs
            // <div ref={node => connectDragSource(connectDropTarget(node))}/>
            return node;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        const element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        const ref = options ? (node)=>hook(node, options) : hook;
        return cloneWithRef(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    const wrappedHooks = {};
    Object.keys(hooks).forEach((key)=>{
        const hook = hooks[key];
        // ref objects should be passed straight through without wrapping
        if (key.endsWith('Ref')) wrappedHooks[key] = hooks[key];
        else {
            const wrappedHook = wrapHookToRecognizeElement(hook);
            wrappedHooks[key] = ()=>wrappedHook;
        }
    });
    return wrappedHooks;
}
function setRef(ref, node) {
    if (typeof ref === 'function') ref(node);
    else ref.current = node;
}
function cloneWithRef(element, newRef) {
    const previousRef = element.ref;
    (0, _invariant.invariant)(typeof previousRef !== 'string', "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
    if (!previousRef) // When there is no ref on the element, use the new ref directly
    return (0, _react.cloneElement)(element, {
        ref: newRef
    });
    else return (0, _react.cloneElement)(element, {
        ref: (node)=>{
            setRef(previousRef, node);
            setRef(newRef, node);
        }
    });
}

},{"@react-dnd/invariant":"jx77H","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fMnCl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TargetConnector", ()=>TargetConnector);
var _shallowequal = require("@react-dnd/shallowequal");
var _isRefJs = require("./isRef.js");
var _wrapConnectorHooksJs = require("./wrapConnectorHooks.js");
class TargetConnector {
    get connectTarget() {
        return this.dropTarget;
    }
    reconnect() {
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        if (didChange) this.disconnectDropTarget();
        const dropTarget = this.dropTarget;
        if (!this.handlerId) return;
        if (!dropTarget) {
            this.lastConnectedDropTarget = dropTarget;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDropTarget = dropTarget;
            this.lastConnectedDropTargetOptions = this.dropTargetOptions;
            this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
        }
    }
    receiveHandlerId(newHandlerId) {
        if (newHandlerId === this.handlerId) return;
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get dropTargetOptions() {
        return this.dropTargetOptionsInternal;
    }
    set dropTargetOptions(options) {
        this.dropTargetOptionsInternal = options;
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didDropTargetChange() {
        return this.lastConnectedDropTarget !== this.dropTarget;
    }
    didOptionsChange() {
        return !(0, _shallowequal.shallowEqual)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
    disconnectDropTarget() {
        if (this.unsubscribeDropTarget) {
            this.unsubscribeDropTarget();
            this.unsubscribeDropTarget = undefined;
        }
    }
    get dropTarget() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
    clearDropTarget() {
        this.dropTargetRef = null;
        this.dropTargetNode = null;
    }
    constructor(backend){
        this.hooks = (0, _wrapConnectorHooksJs.wrapConnectorHooks)({
            dropTarget: (node, options)=>{
                this.clearDropTarget();
                this.dropTargetOptions = options;
                if ((0, _isRefJs.isRef)(node)) this.dropTargetRef = node;
                else this.dropTargetNode = node;
                this.reconnect();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dropTargetRef = null;
        this.dropTargetOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDropTarget = null;
        this.lastConnectedDropTargetOptions = null;
        this.backend = backend;
    }
}

},{"@react-dnd/shallowequal":"2TPtw","./isRef.js":"gUH5x","./wrapConnectorHooks.js":"fdI3R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pSvk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A hook to retrieve the DragDropManager from Context
 */ parcelHelpers.export(exports, "useDragDropManager", ()=>useDragDropManager);
var _invariant = require("@react-dnd/invariant");
var _react = require("react");
var _indexJs = require("../core/index.js");
function useDragDropManager() {
    const { dragDropManager } = (0, _react.useContext)((0, _indexJs.DndContext));
    (0, _invariant.invariant)(dragDropManager != null, 'Expected drag drop context');
    return dragDropManager;
}

},{"@react-dnd/invariant":"jx77H","react":"21dqq","../core/index.js":"f8zaY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8O9l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useDragSourceMonitor", ()=>useDragSourceMonitor);
var _react = require("react");
var _indexJs = require("../../internals/index.js");
var _useDragDropManagerJs = require("../useDragDropManager.js");
function useDragSourceMonitor() {
    const manager = (0, _useDragDropManagerJs.useDragDropManager)();
    return (0, _react.useMemo)(()=>new (0, _indexJs.DragSourceMonitorImpl)(manager), [
        manager
    ]);
}

},{"react":"21dqq","../../internals/index.js":"bkMoJ","../useDragDropManager.js":"6pSvk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jzCVV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useRegisteredDragSource", ()=>useRegisteredDragSource);
var _indexJs = require("../../internals/index.js");
var _useDragDropManagerJs = require("../useDragDropManager.js");
var _useIsomorphicLayoutEffectJs = require("../useIsomorphicLayoutEffect.js");
var _useDragSourceJs = require("./useDragSource.js");
var _useDragTypeJs = require("./useDragType.js");
function useRegisteredDragSource(spec, monitor, connector) {
    const manager = (0, _useDragDropManagerJs.useDragDropManager)();
    const handler = (0, _useDragSourceJs.useDragSource)(spec, monitor, connector);
    const itemType = (0, _useDragTypeJs.useDragType)(spec);
    (0, _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect)(function registerDragSource() {
        if (itemType != null) {
            const [handlerId, unregister] = (0, _indexJs.registerSource)(itemType, handler, manager);
            monitor.receiveHandlerId(handlerId);
            connector.receiveHandlerId(handlerId);
            return unregister;
        }
        return;
    }, [
        manager,
        monitor,
        connector,
        handler,
        itemType
    ]);
}

},{"../../internals/index.js":"bkMoJ","../useDragDropManager.js":"6pSvk","../useIsomorphicLayoutEffect.js":"2Ams9","./useDragSource.js":"6uCtZ","./useDragType.js":"77K9L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uCtZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useDragSource", ()=>useDragSource);
var _react = require("react");
var _dragSourceImplJs = require("./DragSourceImpl.js");
function useDragSource(spec, monitor, connector) {
    const handler = (0, _react.useMemo)(()=>new (0, _dragSourceImplJs.DragSourceImpl)(spec, monitor, connector), [
        monitor,
        connector
    ]);
    (0, _react.useEffect)(()=>{
        handler.spec = spec;
    }, [
        spec
    ]);
    return handler;
}

},{"react":"21dqq","./DragSourceImpl.js":"fS5eW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fS5eW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragSourceImpl", ()=>DragSourceImpl);
class DragSourceImpl {
    beginDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        let result = null;
        if (typeof spec.item === 'object') result = spec.item;
        else if (typeof spec.item === 'function') result = spec.item(monitor);
        else result = {};
        return result !== null && result !== void 0 ? result : null;
    }
    canDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (typeof spec.canDrag === 'boolean') return spec.canDrag;
        else if (typeof spec.canDrag === 'function') return spec.canDrag(monitor);
        else return true;
    }
    isDragging(globalMonitor, target) {
        const spec = this.spec;
        const monitor = this.monitor;
        const { isDragging } = spec;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
    }
    endDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        const connector = this.connector;
        const { end } = spec;
        if (end) end(monitor.getItem(), monitor);
        connector.reconnect();
    }
    constructor(spec, monitor, connector){
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77K9L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useDragType", ()=>useDragType);
var _invariant = require("@react-dnd/invariant");
var _react = require("react");
function useDragType(spec) {
    return (0, _react.useMemo)(()=>{
        const result = spec.type;
        (0, _invariant.invariant)(result != null, 'spec.type must be defined');
        return result;
    }, [
        spec
    ]);
}

},{"@react-dnd/invariant":"jx77H","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHjiZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * useDragLayer Hook
 * @param collector The property collector
 */ parcelHelpers.export(exports, "useDragLayer", ()=>useDragLayer);
var _react = require("react");
var _useCollectorJs = require("./useCollector.js");
var _useDragDropManagerJs = require("./useDragDropManager.js");
function useDragLayer(collect) {
    const dragDropManager = (0, _useDragDropManagerJs.useDragDropManager)();
    const monitor = dragDropManager.getMonitor();
    const [collected, updateCollected] = (0, _useCollectorJs.useCollector)(monitor, collect);
    (0, _react.useEffect)(()=>monitor.subscribeToOffsetChange(updateCollected));
    (0, _react.useEffect)(()=>monitor.subscribeToStateChange(updateCollected));
    return collected;
}

},{"react":"21dqq","./useCollector.js":"cqg63","./useDragDropManager.js":"6pSvk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7X5xh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _useDropJs = require("./useDrop.js");
parcelHelpers.exportAll(_useDropJs, exports);

},{"./useDrop.js":"4n9rG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4n9rG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * useDropTarget Hook
 * @param spec The drop target specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ parcelHelpers.export(exports, "useDrop", ()=>useDrop);
var _useCollectedPropsJs = require("../useCollectedProps.js");
var _useOptionalFactoryJs = require("../useOptionalFactory.js");
var _connectorsJs = require("./connectors.js");
var _useDropTargetConnectorJs = require("./useDropTargetConnector.js");
var _useDropTargetMonitorJs = require("./useDropTargetMonitor.js");
var _useRegisteredDropTargetJs = require("./useRegisteredDropTarget.js");
function useDrop(specArg, deps) {
    const spec = (0, _useOptionalFactoryJs.useOptionalFactory)(specArg, deps);
    const monitor = (0, _useDropTargetMonitorJs.useDropTargetMonitor)();
    const connector = (0, _useDropTargetConnectorJs.useDropTargetConnector)(spec.options);
    (0, _useRegisteredDropTargetJs.useRegisteredDropTarget)(spec, monitor, connector);
    return [
        (0, _useCollectedPropsJs.useCollectedProps)(spec.collect, monitor, connector),
        (0, _connectorsJs.useConnectDropTarget)(connector)
    ];
}

},{"../useCollectedProps.js":"a3H9u","../useOptionalFactory.js":"f5wK9","./connectors.js":"3z67A","./useDropTargetConnector.js":"ib4ca","./useDropTargetMonitor.js":"9BFSz","./useRegisteredDropTarget.js":"47HWX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3z67A":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useConnectDropTarget", ()=>useConnectDropTarget);
var _react = require("react");
function useConnectDropTarget(connector) {
    return (0, _react.useMemo)(()=>connector.hooks.dropTarget(), [
        connector
    ]);
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ib4ca":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useDropTargetConnector", ()=>useDropTargetConnector);
var _react = require("react");
var _indexJs = require("../../internals/index.js");
var _useDragDropManagerJs = require("../useDragDropManager.js");
var _useIsomorphicLayoutEffectJs = require("../useIsomorphicLayoutEffect.js");
function useDropTargetConnector(options) {
    const manager = (0, _useDragDropManagerJs.useDragDropManager)();
    const connector = (0, _react.useMemo)(()=>new (0, _indexJs.TargetConnector)(manager.getBackend()), [
        manager
    ]);
    (0, _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect)(()=>{
        connector.dropTargetOptions = options || null;
        connector.reconnect();
        return ()=>connector.disconnectDropTarget();
    }, [
        options
    ]);
    return connector;
}

},{"react":"21dqq","../../internals/index.js":"bkMoJ","../useDragDropManager.js":"6pSvk","../useIsomorphicLayoutEffect.js":"2Ams9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9BFSz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useDropTargetMonitor", ()=>useDropTargetMonitor);
var _react = require("react");
var _indexJs = require("../../internals/index.js");
var _useDragDropManagerJs = require("../useDragDropManager.js");
function useDropTargetMonitor() {
    const manager = (0, _useDragDropManagerJs.useDragDropManager)();
    return (0, _react.useMemo)(()=>new (0, _indexJs.DropTargetMonitorImpl)(manager), [
        manager
    ]);
}

},{"react":"21dqq","../../internals/index.js":"bkMoJ","../useDragDropManager.js":"6pSvk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47HWX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useRegisteredDropTarget", ()=>useRegisteredDropTarget);
var _indexJs = require("../../internals/index.js");
var _useDragDropManagerJs = require("../useDragDropManager.js");
var _useIsomorphicLayoutEffectJs = require("../useIsomorphicLayoutEffect.js");
var _useAcceptJs = require("./useAccept.js");
var _useDropTargetJs = require("./useDropTarget.js");
function useRegisteredDropTarget(spec, monitor, connector) {
    const manager = (0, _useDragDropManagerJs.useDragDropManager)();
    const dropTarget = (0, _useDropTargetJs.useDropTarget)(spec, monitor);
    const accept = (0, _useAcceptJs.useAccept)(spec);
    (0, _useIsomorphicLayoutEffectJs.useIsomorphicLayoutEffect)(function registerDropTarget() {
        const [handlerId, unregister] = (0, _indexJs.registerTarget)(accept, dropTarget, manager);
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
        return unregister;
    }, [
        manager,
        monitor,
        dropTarget,
        connector,
        accept.map((a)=>a.toString()).join('|')
    ]);
}

},{"../../internals/index.js":"bkMoJ","../useDragDropManager.js":"6pSvk","../useIsomorphicLayoutEffect.js":"2Ams9","./useAccept.js":"6m68k","./useDropTarget.js":"4jl0o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6m68k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Internal utility hook to get an array-version of spec.accept.
 * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
 * @param spec
 */ parcelHelpers.export(exports, "useAccept", ()=>useAccept);
var _invariant = require("@react-dnd/invariant");
var _react = require("react");
function useAccept(spec) {
    const { accept } = spec;
    return (0, _react.useMemo)(()=>{
        (0, _invariant.invariant)(spec.accept != null, 'accept must be defined');
        return Array.isArray(accept) ? accept : [
            accept
        ];
    }, [
        accept
    ]);
}

},{"@react-dnd/invariant":"jx77H","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4jl0o":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useDropTarget", ()=>useDropTarget);
var _react = require("react");
var _dropTargetImplJs = require("./DropTargetImpl.js");
function useDropTarget(spec, monitor) {
    const dropTarget = (0, _react.useMemo)(()=>new (0, _dropTargetImplJs.DropTargetImpl)(spec, monitor), [
        monitor
    ]);
    (0, _react.useEffect)(()=>{
        dropTarget.spec = spec;
    }, [
        spec
    ]);
    return dropTarget;
}

},{"react":"21dqq","./DropTargetImpl.js":"bouag","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bouag":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DropTargetImpl", ()=>DropTargetImpl);
class DropTargetImpl {
    canDrop() {
        const spec = this.spec;
        const monitor = this.monitor;
        return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
    hover() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.hover) spec.hover(monitor.getItem(), monitor);
    }
    drop() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.drop) return spec.drop(monitor.getItem(), monitor);
        return;
    }
    constructor(spec, monitor){
        this.spec = spec;
        this.monitor = monitor;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"nEtPH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _connectorsJs = require("./connectors.js");
parcelHelpers.exportAll(_connectorsJs, exports);
var _monitorsJs = require("./monitors.js");
parcelHelpers.exportAll(_monitorsJs, exports);
var _optionsJs = require("./options.js");
parcelHelpers.exportAll(_optionsJs, exports);

},{"./connectors.js":"hD6K2","./monitors.js":"kdWsE","./options.js":"eZs50","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hD6K2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kdWsE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZs50":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"afWr1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _popoverHeader = require("./PopoverHeader");
var _popoverHeaderDefault = parcelHelpers.interopDefault(_popoverHeader);
var _popoverBody = require("./PopoverBody");
var _popoverBodyDefault = parcelHelpers.interopDefault(_popoverBody);
var _helpers = require("./helpers");
var _getInitialPopperStyles = require("./getInitialPopperStyles");
var _getInitialPopperStylesDefault = parcelHelpers.interopDefault(_getInitialPopperStyles);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Popover = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, placement = 'right', className, style, children, body, arrowProps, hasDoneInitialMeasure, popper, show, ...props }, ref)=>{
    const decoratedBsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, 'popover');
    const isRTL = (0, _themeProvider.useIsRTL)();
    const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
    const bsDirection = (0, _helpers.getOverlayDirection)(primaryPlacement, isRTL);
    let computedStyle = style;
    if (show && !hasDoneInitialMeasure) computedStyle = {
        ...style,
        ...(0, _getInitialPopperStylesDefault.default)(popper == null ? void 0 : popper.strategy)
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        ref: ref,
        role: "tooltip",
        style: computedStyle,
        "x-placement": primaryPlacement,
        className: (0, _classnamesDefault.default)(className, decoratedBsPrefix, primaryPlacement && `bs-popover-${bsDirection}`),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                className: "popover-arrow",
                ...arrowProps
            }),
            body ? /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _popoverBodyDefault.default), {
                children: children
            }) : children
        ]
    });
});
exports.default = Object.assign(Popover, {
    Header: (0, _popoverHeaderDefault.default),
    Body: (0, _popoverBodyDefault.default),
    // Default popover offset.
    // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
    POPPER_OFFSET: [
        0,
        8
    ]
});

},{"classnames":"UFMkK","react":"21dqq","./ThemeProvider":"dVixI","./PopoverHeader":"1rLXn","./PopoverBody":"amJTZ","./helpers":"gotcT","./getInitialPopperStyles":"c8j3Q","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rLXn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const PopoverHeader = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, 'popover-header');
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
PopoverHeader.displayName = 'PopoverHeader';
exports.default = PopoverHeader;

},{"react":"21dqq","classnames":"UFMkK","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"amJTZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _themeProvider = require("./ThemeProvider");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const PopoverBody = /*#__PURE__*/ _react.forwardRef(({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, 'popover-body');
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)(Component, {
        ref: ref,
        className: (0, _classnamesDefault.default)(className, bsPrefix),
        ...props
    });
});
PopoverBody.displayName = 'PopoverBody';
exports.default = PopoverBody;

},{"react":"21dqq","classnames":"UFMkK","./ThemeProvider":"dVixI","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gotcT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BsPrefixComponent", ()=>BsPrefixComponent);
// Need to use this instead of typeof Component to get proper type checking.
parcelHelpers.export(exports, "getOverlayDirection", ()=>getOverlayDirection);
var _react = require("react");
class BsPrefixComponent extends _react.Component {
}
function getOverlayDirection(placement, isRTL) {
    let bsDirection = placement;
    if (placement === 'left') bsDirection = isRTL ? 'end' : 'start';
    else if (placement === 'right') bsDirection = isRTL ? 'start' : 'end';
    return bsDirection;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8j3Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getInitialPopperStyles);
function getInitialPopperStyles(position = 'absolute') {
    return {
        position,
        top: '0',
        left: '0',
        opacity: '0',
        pointerEvents: 'none'
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acOnV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _contains = require("dom-helpers/contains");
var _containsDefault = parcelHelpers.interopDefault(_contains);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _useTimeout = require("@restart/hooks/useTimeout");
var _useTimeoutDefault = parcelHelpers.interopDefault(_useTimeout);
var _warning = require("warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
var _uncontrollable = require("uncontrollable");
var _useMergedRefs = require("@restart/hooks/useMergedRefs");
var _useMergedRefsDefault = parcelHelpers.interopDefault(_useMergedRefs);
var _utils = require("@restart/ui/utils");
var _overlay = require("./Overlay");
var _overlayDefault = parcelHelpers.interopDefault(_overlay);
var _safeFindDOMNode = require("./safeFindDOMNode");
var _safeFindDOMNodeDefault = parcelHelpers.interopDefault(_safeFindDOMNode);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
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
function handleMouseOverOut(// eslint-disable-next-line @typescript-eslint/no-shadow
handler, args, relatedNative) {
    const [e] = args;
    const target = e.currentTarget;
    const related = e.relatedTarget || e.nativeEvent[relatedNative];
    if ((!related || related !== target) && !(0, _containsDefault.default)(target, related)) handler(...args);
}
const triggerType = (0, _propTypesDefault.default).oneOf([
    'click',
    'hover',
    'focus'
]);
const OverlayTrigger = ({ trigger = [
    'hover',
    'focus'
], overlay, children, popperConfig = {}, show: propsShow, defaultShow = false, onToggle, delay: propsDelay, placement, flip = placement && placement.indexOf('auto') !== -1, ...props })=>{
    const triggerNodeRef = (0, _react.useRef)(null);
    const mergedRef = (0, _useMergedRefsDefault.default)(triggerNodeRef, (0, _utils.getChildRef)(children));
    const timeout = (0, _useTimeoutDefault.default)();
    const hoverStateRef = (0, _react.useRef)('');
    const [show, setShow] = (0, _uncontrollable.useUncontrolledProp)(propsShow, defaultShow, onToggle);
    const delay = normalizeDelay(propsDelay);
    const { onFocus, onBlur, onClick } = typeof children !== 'function' ? _react.Children.only(children).props : {};
    const attachRef = (r)=>{
        mergedRef((0, _safeFindDOMNodeDefault.default)(r));
    };
    const handleShow = (0, _react.useCallback)(()=>{
        timeout.clear();
        hoverStateRef.current = 'show';
        if (!delay.show) {
            setShow(true);
            return;
        }
        timeout.set(()=>{
            if (hoverStateRef.current === 'show') setShow(true);
        }, delay.show);
    }, [
        delay.show,
        setShow,
        timeout
    ]);
    const handleHide = (0, _react.useCallback)(()=>{
        timeout.clear();
        hoverStateRef.current = 'hide';
        if (!delay.hide) {
            setShow(false);
            return;
        }
        timeout.set(()=>{
            if (hoverStateRef.current === 'hide') setShow(false);
        }, delay.hide);
    }, [
        delay.hide,
        setShow,
        timeout
    ]);
    const handleFocus = (0, _react.useCallback)((...args)=>{
        handleShow();
        onFocus == null || onFocus(...args);
    }, [
        handleShow,
        onFocus
    ]);
    const handleBlur = (0, _react.useCallback)((...args)=>{
        handleHide();
        onBlur == null || onBlur(...args);
    }, [
        handleHide,
        onBlur
    ]);
    const handleClick = (0, _react.useCallback)((...args)=>{
        setShow(!show);
        onClick == null || onClick(...args);
    }, [
        onClick,
        setShow,
        show
    ]);
    const handleMouseOver = (0, _react.useCallback)((...args)=>{
        handleMouseOverOut(handleShow, args, 'fromElement');
    }, [
        handleShow
    ]);
    const handleMouseOut = (0, _react.useCallback)((...args)=>{
        handleMouseOverOut(handleHide, args, 'toElement');
    }, [
        handleHide
    ]);
    const triggers = trigger == null ? [] : [].concat(trigger);
    const triggerProps = {
        ref: attachRef
    };
    if (triggers.indexOf('click') !== -1) triggerProps.onClick = handleClick;
    if (triggers.indexOf('focus') !== -1) {
        triggerProps.onFocus = handleFocus;
        triggerProps.onBlur = handleBlur;
    }
    if (triggers.indexOf('hover') !== -1) {
        (0, _warningDefault.default)(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.');
        triggerProps.onMouseOver = handleMouseOver;
        triggerProps.onMouseOut = handleMouseOut;
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _jsxRuntime.Fragment), {
        children: [
            typeof children === 'function' ? children(triggerProps) : /*#__PURE__*/ (0, _react.cloneElement)(children, triggerProps),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayDefault.default), {
                ...props,
                show: show,
                onHide: handleHide,
                flip: flip,
                placement: placement,
                popperConfig: popperConfig,
                target: triggerNodeRef.current,
                children: overlay
            })
        ]
    });
};
exports.default = OverlayTrigger;

},{"dom-helpers/contains":"KpRFS","prop-types":"7wKI2","react":"21dqq","@restart/hooks/useTimeout":"63wsP","warning":"eUVzU","uncontrollable":"b3yWY","@restart/hooks/useMergedRefs":"6hhuo","@restart/ui/utils":"2Fmci","./Overlay":"bHdwO","./safeFindDOMNode":"XsXw9","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63wsP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useTimeout);
var _react = require("react");
var _useMounted = require("./useMounted");
var _useMountedDefault = parcelHelpers.interopDefault(_useMounted);
var _useWillUnmount = require("./useWillUnmount");
var _useWillUnmountDefault = parcelHelpers.interopDefault(_useWillUnmount);
/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */ const MAX_DELAY_MS = 2 ** 31 - 1;
function setChainedTimeout(handleRef, fn, timeoutAtMs) {
    const delayMs = timeoutAtMs - Date.now();
    handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(()=>setChainedTimeout(handleRef, fn, timeoutAtMs), MAX_DELAY_MS);
}
function useTimeout() {
    const isMounted = (0, _useMountedDefault.default)();
    // types are confused between node and web here IDK
    const handleRef = (0, _react.useRef)();
    (0, _useWillUnmountDefault.default)(()=>clearTimeout(handleRef.current));
    return (0, _react.useMemo)(()=>{
        const clear = ()=>clearTimeout(handleRef.current);
        function set(fn, delayMs = 0) {
            if (!isMounted()) return;
            clear();
            if (delayMs <= MAX_DELAY_MS) // For simplicity, if the timeout is short, just set a normal timeout.
            handleRef.current = setTimeout(fn, delayMs);
            else setChainedTimeout(handleRef, fn, Date.now() + delayMs);
        }
        return {
            set,
            clear,
            handleRef
        };
    }, []);
}

},{"react":"21dqq","./useMounted":"iK6A1","./useWillUnmount":"2OOXI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iK6A1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useMounted);
var _react = require("react");
function useMounted() {
    const mounted = (0, _react.useRef)(true);
    const isMounted = (0, _react.useRef)(()=>mounted.current);
    (0, _react.useEffect)(()=>{
        mounted.current = true;
        return ()=>{
            mounted.current = false;
        };
    }, []);
    return isMounted.current;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2OOXI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useWillUnmount);
var _useUpdatedRef = require("./useUpdatedRef");
var _useUpdatedRefDefault = parcelHelpers.interopDefault(_useUpdatedRef);
var _react = require("react");
function useWillUnmount(fn) {
    const onUnmount = (0, _useUpdatedRefDefault.default)(fn);
    (0, _react.useEffect)(()=>()=>onUnmount.current(), []);
}

},{"./useUpdatedRef":"cfaLu","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cfaLu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useUpdatedRef);
var _react = require("react");
function useUpdatedRef(value) {
    const valueRef = (0, _react.useRef)(value);
    valueRef.current = value;
    return valueRef;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHdwO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _overlay = require("@restart/ui/Overlay");
var _overlayDefault = parcelHelpers.interopDefault(_overlay);
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _useIsomorphicEffect = require("@restart/hooks/useIsomorphicEffect");
var _useIsomorphicEffectDefault = parcelHelpers.interopDefault(_useIsomorphicEffect);
var _useMergedRefs = require("@restart/hooks/useMergedRefs");
var _useMergedRefsDefault = parcelHelpers.interopDefault(_useMergedRefs);
var _useOverlayOffset = require("./useOverlayOffset");
var _useOverlayOffsetDefault = parcelHelpers.interopDefault(_useOverlayOffset);
var _fade = require("./Fade");
var _fadeDefault = parcelHelpers.interopDefault(_fade);
var _safeFindDOMNode = require("./safeFindDOMNode");
var _safeFindDOMNodeDefault = parcelHelpers.interopDefault(_safeFindDOMNode);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
function wrapRefs(props, arrowProps) {
    const { ref } = props;
    const { ref: aRef } = arrowProps;
    props.ref = ref.__wrapped || (ref.__wrapped = (r)=>ref((0, _safeFindDOMNodeDefault.default)(r)));
    arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = (r)=>aRef((0, _safeFindDOMNodeDefault.default)(r)));
}
const Overlay = /*#__PURE__*/ _react.forwardRef(({ children: overlay, transition = (0, _fadeDefault.default), popperConfig = {}, rootClose = false, placement = 'top', show: outerShow = false, ...outerProps }, outerRef)=>{
    const popperRef = (0, _react.useRef)({});
    const [firstRenderedState, setFirstRenderedState] = (0, _react.useState)(null);
    const [ref, modifiers] = (0, _useOverlayOffsetDefault.default)(outerProps.offset);
    const mergedRef = (0, _useMergedRefsDefault.default)(outerRef, ref);
    const actualTransition = transition === true ? (0, _fadeDefault.default) : transition || undefined;
    const handleFirstUpdate = (0, _useEventCallbackDefault.default)((state)=>{
        setFirstRenderedState(state);
        popperConfig == null || popperConfig.onFirstUpdate == null || popperConfig.onFirstUpdate(state);
    });
    (0, _useIsomorphicEffectDefault.default)(()=>{
        if (firstRenderedState && outerProps.target) // Must wait for target element to resolve before updating popper.
        popperRef.current.scheduleUpdate == null || popperRef.current.scheduleUpdate();
    }, [
        firstRenderedState,
        outerProps.target
    ]);
    (0, _react.useEffect)(()=>{
        if (!outerShow) setFirstRenderedState(null);
    }, [
        outerShow
    ]);
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _overlayDefault.default), {
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
        children: (overlayProps, { arrowProps, popper: popperObj, show })=>{
            var _popperObj$state;
            wrapRefs(overlayProps, arrowProps);
            // Need to get placement from popper object, handling case when overlay is flipped using 'flip' prop
            const updatedPlacement = popperObj == null ? void 0 : popperObj.placement;
            const popper = Object.assign(popperRef.current, {
                state: popperObj == null ? void 0 : popperObj.state,
                scheduleUpdate: popperObj == null ? void 0 : popperObj.update,
                placement: updatedPlacement,
                outOfBoundaries: (popperObj == null || (_popperObj$state = popperObj.state) == null || (_popperObj$state = _popperObj$state.modifiersData.hide) == null ? void 0 : _popperObj$state.isReferenceHidden) || false,
                strategy: popperConfig.strategy
            });
            const hasDoneInitialMeasure = !!firstRenderedState;
            if (typeof overlay === 'function') return overlay({
                ...overlayProps,
                placement: updatedPlacement,
                show,
                ...!transition && show && {
                    className: 'show'
                },
                popper,
                arrowProps,
                hasDoneInitialMeasure
            });
            return /*#__PURE__*/ _react.cloneElement(overlay, {
                ...overlayProps,
                placement: updatedPlacement,
                arrowProps,
                popper,
                hasDoneInitialMeasure,
                className: (0, _classnamesDefault.default)(overlay.props.className, !transition && show && 'show'),
                style: {
                    ...overlay.props.style,
                    ...overlayProps.style
                }
            });
        }
    });
});
Overlay.displayName = 'Overlay';
exports.default = Overlay;

},{"react":"21dqq","classnames":"UFMkK","@restart/ui/Overlay":"Ivi01","@restart/hooks/useEventCallback":"7ONdq","@restart/hooks/useIsomorphicEffect":"e8blq","@restart/hooks/useMergedRefs":"6hhuo","./useOverlayOffset":"iHgTL","./Fade":"aH18S","./safeFindDOMNode":"XsXw9","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Ivi01":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _useCallbackRef = require("@restart/hooks/useCallbackRef");
var _useCallbackRefDefault = parcelHelpers.interopDefault(_useCallbackRef);
var _useMergedRefs = require("@restart/hooks/useMergedRefs");
var _useMergedRefsDefault = parcelHelpers.interopDefault(_useMergedRefs);
var _usePopper = require("./usePopper");
var _usePopperDefault = parcelHelpers.interopDefault(_usePopper);
var _useRootClose = require("./useRootClose");
var _useRootCloseDefault = parcelHelpers.interopDefault(_useRootClose);
var _useWaitForDOMRef = require("./useWaitForDOMRef");
var _useWaitForDOMRefDefault = parcelHelpers.interopDefault(_useWaitForDOMRef);
var _mergeOptionsWithPopperConfig = require("./mergeOptionsWithPopperConfig");
var _mergeOptionsWithPopperConfigDefault = parcelHelpers.interopDefault(_mergeOptionsWithPopperConfig);
var _imperativeTransition = require("./ImperativeTransition");
/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */ const Overlay = /*#__PURE__*/ _react.forwardRef((props, outerRef)=>{
    const { flip, offset, placement, containerPadding, popperConfig = {}, transition: Transition, runTransition } = props;
    const [rootElement, attachRef] = (0, _useCallbackRefDefault.default)();
    const [arrowElement, attachArrowRef] = (0, _useCallbackRefDefault.default)();
    const mergedRef = (0, _useMergedRefsDefault.default)(attachRef, outerRef);
    const container = (0, _useWaitForDOMRefDefault.default)(props.container);
    const target = (0, _useWaitForDOMRefDefault.default)(props.target);
    const [exited, setExited] = (0, _react.useState)(!props.show);
    const popper = (0, _usePopperDefault.default)(target, rootElement, (0, _mergeOptionsWithPopperConfigDefault.default)({
        placement,
        enableEvents: !!props.show,
        containerPadding: containerPadding || 5,
        flip,
        offset,
        arrowElement,
        popperConfig
    }));
    // TODO: I think this needs to be in an effect
    if (props.show && exited) setExited(false);
    const handleHidden = (...args)=>{
        setExited(true);
        if (props.onExited) props.onExited(...args);
    };
    // Don't un-render the overlay while it's transitioning out.
    const mountOverlay = props.show || !exited;
    (0, _useRootCloseDefault.default)(rootElement, props.onHide, {
        disabled: !props.rootClose || props.rootCloseDisabled,
        clickTrigger: props.rootCloseEvent
    });
    if (!mountOverlay) // Don't bother showing anything if we don't have to.
    return null;
    const { onExit, onExiting, onEnter, onEntering, onEntered } = props;
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
    child = (0, _imperativeTransition.renderTransition)(Transition, runTransition, {
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
    return container ? /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
exports.default = Overlay;

},{"react":"21dqq","react-dom":"j6uA9","@restart/hooks/useCallbackRef":"apXCo","@restart/hooks/useMergedRefs":"1Tfc6","./usePopper":"7aqz6","./useRootClose":"6bSYP","./useWaitForDOMRef":"83lRQ","./mergeOptionsWithPopperConfig":"8jWN8","./ImperativeTransition":"j0Jao","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7aqz6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _dequal = require("dequal");
var _useSafeState = require("@restart/hooks/useSafeState");
var _useSafeStateDefault = parcelHelpers.interopDefault(_useSafeState);
var _popper = require("./popper");
const _excluded = [
    "enabled",
    "placement",
    "strategy",
    "modifiers"
];
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.indexOf(n) >= 0) continue;
        t[n] = r[n];
    }
    return t;
}
const disabledApplyStylesModifier = {
    name: 'applyStyles',
    enabled: false,
    phase: 'afterWrite',
    fn: ()=>undefined
};
// until docjs supports type exports...
const ariaDescribedByModifier = {
    name: 'ariaDescribedBy',
    enabled: true,
    phase: 'afterWrite',
    effect: ({ state })=>()=>{
            const { reference, popper } = state.elements;
            if ('removeAttribute' in reference) {
                const ids = (reference.getAttribute('aria-describedby') || '').split(',').filter((id)=>id.trim() !== popper.id);
                if (!ids.length) reference.removeAttribute('aria-describedby');
                else reference.setAttribute('aria-describedby', ids.join(','));
            }
        },
    fn: ({ state })=>{
        var _popper$getAttribute;
        const { popper, reference } = state.elements;
        const role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();
        if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
            const ids = reference.getAttribute('aria-describedby');
            if (ids && ids.split(',').indexOf(popper.id) !== -1) return;
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
 */ function usePopper(referenceElement, popperElement, _ref = {}) {
    let { enabled = true, placement = 'bottom', strategy = 'absolute', modifiers = EMPTY_MODIFIERS } = _ref, config = _objectWithoutPropertiesLoose(_ref, _excluded);
    const prevModifiers = (0, _react.useRef)(modifiers);
    const popperInstanceRef = (0, _react.useRef)();
    const update = (0, _react.useCallback)(()=>{
        var _popperInstanceRef$cu;
        (_popperInstanceRef$cu = popperInstanceRef.current) == null || _popperInstanceRef$cu.update();
    }, []);
    const forceUpdate = (0, _react.useCallback)(()=>{
        var _popperInstanceRef$cu2;
        (_popperInstanceRef$cu2 = popperInstanceRef.current) == null || _popperInstanceRef$cu2.forceUpdate();
    }, []);
    const [popperState, setState] = (0, _useSafeStateDefault.default)((0, _react.useState)({
        placement,
        update,
        forceUpdate,
        attributes: {},
        styles: {
            popper: {},
            arrow: {}
        }
    }));
    const updateModifier = (0, _react.useMemo)(()=>({
            name: 'updateStateModifier',
            enabled: true,
            phase: 'write',
            requires: [
                'computeStyles'
            ],
            fn: ({ state })=>{
                const styles = {};
                const attributes = {};
                Object.keys(state.elements).forEach((element)=>{
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
        }), [
        update,
        forceUpdate,
        setState
    ]);
    const nextModifiers = (0, _react.useMemo)(()=>{
        if (!(0, _dequal.dequal)(prevModifiers.current, modifiers)) prevModifiers.current = modifiers;
        return prevModifiers.current;
    }, [
        modifiers
    ]);
    (0, _react.useEffect)(()=>{
        if (!popperInstanceRef.current || !enabled) return;
        popperInstanceRef.current.setOptions({
            placement,
            strategy,
            modifiers: [
                ...nextModifiers,
                updateModifier,
                disabledApplyStylesModifier
            ]
        });
    }, [
        strategy,
        placement,
        updateModifier,
        enabled,
        nextModifiers
    ]);
    (0, _react.useEffect)(()=>{
        if (!enabled || referenceElement == null || popperElement == null) return undefined;
        popperInstanceRef.current = (0, _popper.createPopper)(referenceElement, popperElement, Object.assign({}, config, {
            placement,
            strategy,
            modifiers: [
                ...nextModifiers,
                ariaDescribedByModifier,
                updateModifier
            ]
        }));
        return ()=>{
            if (popperInstanceRef.current != null) {
                popperInstanceRef.current.destroy();
                popperInstanceRef.current = undefined;
                setState((s)=>Object.assign({}, s, {
                        attributes: {},
                        styles: {
                            popper: {}
                        }
                    }));
            }
        };
    // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        enabled,
        referenceElement,
        popperElement
    ]);
    return popperState;
}
exports.default = usePopper;

},{"react":"21dqq","dequal":"ceyyc","@restart/hooks/useSafeState":"km3Um","./popper":"fMLGS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ceyyc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dequal", ()=>dequal);
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
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
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) return false;
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) return false;
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) return false;
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"km3Um":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useMounted = require("./useMounted");
var _useMountedDefault = parcelHelpers.interopDefault(_useMounted);
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
 */ function useSafeState(state) {
    const isMounted = (0, _useMountedDefault.default)();
    return [
        state[0],
        (0, _react.useCallback)((nextState)=>{
            if (!isMounted()) return;
            return state[1](nextState);
        }, [
            isMounted,
            state[1]
        ])
    ];
}
exports.default = useSafeState;

},{"react":"21dqq","./useMounted":"19pt2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fMLGS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper);
parcelHelpers.export(exports, "placements", ()=>(0, _enums.placements));
var _arrow = require("@popperjs/core/lib/modifiers/arrow");
var _arrowDefault = parcelHelpers.interopDefault(_arrow);
var _computeStyles = require("@popperjs/core/lib/modifiers/computeStyles");
var _computeStylesDefault = parcelHelpers.interopDefault(_computeStyles);
var _eventListeners = require("@popperjs/core/lib/modifiers/eventListeners");
var _eventListenersDefault = parcelHelpers.interopDefault(_eventListeners);
var _flip = require("@popperjs/core/lib/modifiers/flip");
var _flipDefault = parcelHelpers.interopDefault(_flip);
var _hide = require("@popperjs/core/lib/modifiers/hide");
var _hideDefault = parcelHelpers.interopDefault(_hide);
var _offset = require("@popperjs/core/lib/modifiers/offset");
var _offsetDefault = parcelHelpers.interopDefault(_offset);
var _popperOffsets = require("@popperjs/core/lib/modifiers/popperOffsets");
var _popperOffsetsDefault = parcelHelpers.interopDefault(_popperOffsets);
var _preventOverflow = require("@popperjs/core/lib/modifiers/preventOverflow");
var _preventOverflowDefault = parcelHelpers.interopDefault(_preventOverflow);
var _enums = require("@popperjs/core/lib/enums");
var _popperBase = require("@popperjs/core/lib/popper-base");
const createPopper = (0, _popperBase.popperGenerator)({
    defaultModifiers: [
        (0, _hideDefault.default),
        (0, _popperOffsetsDefault.default),
        (0, _computeStylesDefault.default),
        (0, _eventListenersDefault.default),
        (0, _offsetDefault.default),
        (0, _flipDefault.default),
        (0, _preventOverflowDefault.default),
        (0, _arrowDefault.default)
    ]
});

},{"@popperjs/core/lib/modifiers/arrow":"31HFW","@popperjs/core/lib/modifiers/computeStyles":"gDlm2","@popperjs/core/lib/modifiers/eventListeners":"hBKsL","@popperjs/core/lib/modifiers/flip":"fv5wq","@popperjs/core/lib/modifiers/hide":"2g4OF","@popperjs/core/lib/modifiers/offset":"3GKVY","@popperjs/core/lib/modifiers/popperOffsets":"6I679","@popperjs/core/lib/modifiers/preventOverflow":"1AMhb","@popperjs/core/lib/enums":false,"@popperjs/core/lib/popper-base":"9X7Du","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9X7Du":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// eslint-disable-next-line import/no-unused-modules
parcelHelpers.export(exports, "createPopper", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");

},{"./createPopper.js":"cHuNp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6bSYP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listen = require("dom-helpers/listen");
var _listenDefault = parcelHelpers.interopDefault(_listen);
var _ownerDocument = require("dom-helpers/ownerDocument");
var _ownerDocumentDefault = parcelHelpers.interopDefault(_ownerDocument);
var _react = require("react");
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _useClickOutside = require("./useClickOutside");
var _useClickOutsideDefault = parcelHelpers.interopDefault(_useClickOutside);
var _utils = require("./utils");
const noop = ()=>{};
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
 */ function useRootClose(ref, onRootClose, { disabled, clickTrigger } = {}) {
    const onClose = onRootClose || noop;
    (0, _useClickOutsideDefault.default)(ref, onClose, {
        disabled,
        clickTrigger
    });
    const handleKeyUp = (0, _useEventCallbackDefault.default)((e)=>{
        if ((0, _utils.isEscKey)(e)) onClose(e);
    });
    (0, _react.useEffect)(()=>{
        if (disabled || ref == null) return undefined;
        const doc = (0, _ownerDocumentDefault.default)((0, _useClickOutside.getRefTarget)(ref));
        // Store the current event to avoid triggering handlers immediately
        // https://github.com/facebook/react/issues/20074
        let currentEvent = (doc.defaultView || window).event;
        const removeKeyupListener = (0, _listenDefault.default)(doc, 'keyup', (e)=>{
            // skip if this event is the same as the one running when we added the handlers
            if (e === currentEvent) {
                currentEvent = undefined;
                return;
            }
            handleKeyUp(e);
        });
        return ()=>{
            removeKeyupListener();
        };
    }, [
        ref,
        disabled,
        handleKeyUp
    ]);
}
exports.default = useRootClose;

},{"dom-helpers/listen":"1i4e7","dom-helpers/ownerDocument":"2WpOk","react":"21dqq","@restart/hooks/useEventCallback":"62akH","./useClickOutside":"ed4Oi","./utils":"2Fmci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ed4Oi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRefTarget", ()=>getRefTarget);
var _contains = require("dom-helpers/contains");
var _containsDefault = parcelHelpers.interopDefault(_contains);
var _listen = require("dom-helpers/listen");
var _listenDefault = parcelHelpers.interopDefault(_listen);
var _ownerDocument = require("dom-helpers/ownerDocument");
var _ownerDocumentDefault = parcelHelpers.interopDefault(_ownerDocument);
var _react = require("react");
var _useEventCallback = require("@restart/hooks/useEventCallback");
var _useEventCallbackDefault = parcelHelpers.interopDefault(_useEventCallback);
var _warning = require("warning");
var _warningDefault = parcelHelpers.interopDefault(_warning);
const noop = ()=>{};
function isLeftClickEvent(event) {
    return event.button === 0;
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
const getRefTarget = (ref)=>ref && ('current' in ref ? ref.current : ref);
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
 */ function useClickOutside(ref, onClickOutside = noop, { disabled, clickTrigger = 'click' } = {}) {
    const preventMouseClickOutsideRef = (0, _react.useRef)(false);
    const waitingForTrigger = (0, _react.useRef)(false);
    const handleMouseCapture = (0, _react.useCallback)((e)=>{
        const currentTarget = getRefTarget(ref);
        (0, _warningDefault.default)(!!currentTarget, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node");
        preventMouseClickOutsideRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!(0, _containsDefault.default)(currentTarget, e.target) || waitingForTrigger.current;
        waitingForTrigger.current = false;
    }, [
        ref
    ]);
    const handleInitialMouse = (0, _useEventCallbackDefault.default)((e)=>{
        const currentTarget = getRefTarget(ref);
        if (currentTarget && (0, _containsDefault.default)(currentTarget, e.target)) waitingForTrigger.current = true;
        else // When clicking on scrollbars within current target, click events are not triggered, so this ref
        // is never reset inside `handleMouseCapture`. This would cause a bug where it requires 2 clicks
        // to close the overlay.
        waitingForTrigger.current = false;
    });
    const handleMouse = (0, _useEventCallbackDefault.default)((e)=>{
        if (!preventMouseClickOutsideRef.current) onClickOutside(e);
    });
    (0, _react.useEffect)(()=>{
        var _ownerWindow$event, _ownerWindow$parent;
        if (disabled || ref == null) return undefined;
        const doc = (0, _ownerDocumentDefault.default)(getRefTarget(ref));
        const ownerWindow = doc.defaultView || window;
        // Store the current event to avoid triggering handlers immediately
        // For things rendered in an iframe, the event might originate on the parent window
        // so we should fall back to that global event if the local one doesn't exist
        // https://github.com/facebook/react/issues/20074
        let currentEvent = (_ownerWindow$event = ownerWindow.event) != null ? _ownerWindow$event : (_ownerWindow$parent = ownerWindow.parent) == null ? void 0 : _ownerWindow$parent.event;
        let removeInitialTriggerListener = null;
        if (InitialTriggerEvents[clickTrigger]) removeInitialTriggerListener = (0, _listenDefault.default)(doc, InitialTriggerEvents[clickTrigger], handleInitialMouse, true);
        // Use capture for this listener so it fires before React's listener, to
        // avoid false positives in the contains() check below if the target DOM
        // element is removed in the React mouse callback.
        const removeMouseCaptureListener = (0, _listenDefault.default)(doc, clickTrigger, handleMouseCapture, true);
        const removeMouseListener = (0, _listenDefault.default)(doc, clickTrigger, (e)=>{
            // skip if this event is the same as the one running when we added the handlers
            if (e === currentEvent) {
                currentEvent = undefined;
                return;
            }
            handleMouse(e);
        });
        let mobileSafariHackListeners = [];
        if ('ontouchstart' in doc.documentElement) mobileSafariHackListeners = [].slice.call(doc.body.children).map((el)=>(0, _listenDefault.default)(el, 'mousemove', noop));
        return ()=>{
            removeInitialTriggerListener == null || removeInitialTriggerListener();
            removeMouseCaptureListener();
            removeMouseListener();
            mobileSafariHackListeners.forEach((remove)=>remove());
        };
    }, [
        ref,
        disabled,
        clickTrigger,
        handleMouseCapture,
        handleInitialMouse,
        handleMouse
    ]);
}
exports.default = useClickOutside;

},{"dom-helpers/contains":"KpRFS","dom-helpers/listen":"1i4e7","dom-helpers/ownerDocument":"2WpOk","react":"21dqq","@restart/hooks/useEventCallback":"62akH","warning":"eUVzU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jWN8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toModifierMap", ()=>toModifierMap);
parcelHelpers.export(exports, "toModifierArray", ()=>toModifierArray);
parcelHelpers.export(exports, "default", ()=>mergeOptionsWithPopperConfig);
function toModifierMap(modifiers) {
    const result = {};
    if (!Array.isArray(modifiers)) return modifiers || result;
    // eslint-disable-next-line no-unused-expressions
    modifiers == null || modifiers.forEach((m)=>{
        result[m.name] = m;
    });
    return result;
}
function toModifierArray(map = {}) {
    if (Array.isArray(map)) return map;
    return Object.keys(map).map((k)=>{
        map[k].name = k;
        return map[k];
    });
}
function mergeOptionsWithPopperConfig({ enabled, enableEvents, placement, flip, offset, fixed, containerPadding, arrowElement, popperConfig = {} }) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHgTL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useOverlayOffset);
var _react = require("react");
var _hasClass = require("dom-helpers/hasClass");
var _hasClassDefault = parcelHelpers.interopDefault(_hasClass);
var _themeProvider = require("./ThemeProvider");
var _popover = require("./Popover");
var _popoverDefault = parcelHelpers.interopDefault(_popover);
var _tooltip = require("./Tooltip");
var _tooltipDefault = parcelHelpers.interopDefault(_tooltip);
"use client";
function useOverlayOffset(customOffset) {
    const overlayRef = (0, _react.useRef)(null);
    const popoverClass = (0, _themeProvider.useBootstrapPrefix)(undefined, 'popover');
    const tooltipClass = (0, _themeProvider.useBootstrapPrefix)(undefined, 'tooltip');
    const offset = (0, _react.useMemo)(()=>({
            name: 'offset',
            options: {
                offset: ()=>{
                    if (customOffset) return customOffset;
                    if (overlayRef.current) {
                        if ((0, _hasClassDefault.default)(overlayRef.current, popoverClass)) return (0, _popoverDefault.default).POPPER_OFFSET;
                        if ((0, _hasClassDefault.default)(overlayRef.current, tooltipClass)) return (0, _tooltipDefault.default).TOOLTIP_OFFSET;
                    }
                    return [
                        0,
                        0
                    ];
                }
            }
        }), [
        customOffset,
        popoverClass,
        tooltipClass
    ]);
    return [
        overlayRef,
        [
            offset
        ]
    ];
}

},{"react":"21dqq","dom-helpers/hasClass":"6sJz4","./ThemeProvider":"dVixI","./Popover":"afWr1","./Tooltip":"ajjgB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajjgB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _react = require("react");
var _themeProvider = require("./ThemeProvider");
var _helpers = require("./helpers");
var _getInitialPopperStyles = require("./getInitialPopperStyles");
var _getInitialPopperStylesDefault = parcelHelpers.interopDefault(_getInitialPopperStyles);
var _jsxRuntime = require("react/jsx-runtime");
"use client";
const Tooltip = /*#__PURE__*/ _react.forwardRef(({ bsPrefix, placement = 'right', className, style, children, arrowProps, hasDoneInitialMeasure, popper, show, ...props }, ref)=>{
    bsPrefix = (0, _themeProvider.useBootstrapPrefix)(bsPrefix, 'tooltip');
    const isRTL = (0, _themeProvider.useIsRTL)();
    const [primaryPlacement] = (placement == null ? void 0 : placement.split('-')) || [];
    const bsDirection = (0, _helpers.getOverlayDirection)(primaryPlacement, isRTL);
    let computedStyle = style;
    if (show && !hasDoneInitialMeasure) computedStyle = {
        ...style,
        ...(0, _getInitialPopperStylesDefault.default)(popper == null ? void 0 : popper.strategy)
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        ref: ref,
        style: computedStyle,
        role: "tooltip",
        "x-placement": primaryPlacement,
        className: (0, _classnamesDefault.default)(className, bsPrefix, `bs-tooltip-${bsDirection}`),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                className: "tooltip-arrow",
                ...arrowProps
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                className: `${bsPrefix}-inner`,
                children: children
            })
        ]
    });
});
Tooltip.displayName = 'Tooltip';
exports.default = Object.assign(Tooltip, {
    // Default tooltip offset.
    // https://github.com/twbs/bootstrap/blob/beca2a6c7f6bc88b6449339fc76edcda832c59e5/js/src/tooltip.js#L65
    TOOLTIP_OFFSET: [
        0,
        6
    ]
});

},{"classnames":"UFMkK","react":"21dqq","./ThemeProvider":"dVixI","./helpers":"gotcT","./getInitialPopperStyles":"c8j3Q","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Sf6T":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4055 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4055.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactDnd = require("react-dnd");
var _visSortableItemCss = require("./VisSortableItem.css");
var _s = $RefreshSig$();
function DragHandle() {
    _s();
    const [{ isDragging }, drag] = (0, _reactDnd.useDrag)({
        collect: (monitor)=>({
                isDragging: !!monitor.isDragging()
            })
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "drag-handle",
        ref: drag,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactFontawesome.FontAwesomeIcon), {
            icon: (0, _freeSolidSvgIcons.faGripLines),
            style: {
                opacity: isDragging ? 0.4 : 1
            }
        }, void 0, false, {
            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(DragHandle, "wuumsFp4qAni9XRJfRhQAZjuD/k=", false, function() {
    return [
        (0, _reactDnd.useDrag)
    ];
});
_c = DragHandle;
function VisSortableItem(props) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "vis-sortable-item",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(DragHandle, {}, void 0, false, {
                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "truncated-text",
                title: props.label,
                children: props.label
            }, void 0, false, {
                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "input-box",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                    type: "checkbox",
                    checked: props.isShow,
                    onChange: props.onCheckChanged,
                    value: props.dataKey
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = VisSortableItem;
exports.default = VisSortableItem;
var _c, _c1;
$RefreshReg$(_c, "DragHandle");
$RefreshReg$(_c1, "VisSortableItem");

  $parcel$ReactRefreshHelpers$4055.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@fortawesome/react-fontawesome":"clIT3","@fortawesome/free-solid-svg-icons":"5lkdy","react-dnd":"cak3X","./VisSortableItem.css":"8t17o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"8t17o":[function() {},{}],"bv6av":[function() {},{}],"OUByR":[function() {},{}]},["aQL8O","fu95G"], null, "parcelRequire94c2")

//# sourceMappingURL=VisDataTable.85cdd732.js.map
