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
})({"6kfLa":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "82cf667d66fdb13f";
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

},{}],"8wJcL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ArrowKeyStepper", ()=>(0, _arrowKeyStepper.ArrowKeyStepper));
parcelHelpers.export(exports, "AutoSizer", ()=>(0, _autoSizer.AutoSizer));
parcelHelpers.export(exports, "CellMeasurer", ()=>(0, _cellMeasurer.CellMeasurer));
parcelHelpers.export(exports, "CellMeasurerCache", ()=>(0, _cellMeasurer.CellMeasurerCache));
parcelHelpers.export(exports, "Collection", ()=>(0, _collection.Collection));
parcelHelpers.export(exports, "ColumnSizer", ()=>(0, _columnSizer.ColumnSizer));
parcelHelpers.export(exports, "accessibilityOverscanIndicesGetter", ()=>(0, _grid.accessibilityOverscanIndicesGetter));
parcelHelpers.export(exports, "defaultCellRangeRenderer", ()=>(0, _grid.defaultCellRangeRenderer));
parcelHelpers.export(exports, "defaultOverscanIndicesGetter", ()=>(0, _grid.defaultOverscanIndicesGetter));
parcelHelpers.export(exports, "Grid", ()=>(0, _grid.Grid));
parcelHelpers.export(exports, "InfiniteLoader", ()=>(0, _infiniteLoader.InfiniteLoader));
parcelHelpers.export(exports, "List", ()=>(0, _list.List));
parcelHelpers.export(exports, "createMasonryCellPositioner", ()=>(0, _masonry.createCellPositioner));
parcelHelpers.export(exports, "Masonry", ()=>(0, _masonry.Masonry));
parcelHelpers.export(exports, "MultiGrid", ()=>(0, _multiGrid.MultiGrid));
parcelHelpers.export(exports, "ScrollSync", ()=>(0, _scrollSync.ScrollSync));
parcelHelpers.export(exports, "createTableMultiSort", ()=>(0, _table.createMultiSort));
parcelHelpers.export(exports, "defaultTableCellDataGetter", ()=>(0, _table.defaultCellDataGetter));
parcelHelpers.export(exports, "defaultTableCellRenderer", ()=>(0, _table.defaultCellRenderer));
parcelHelpers.export(exports, "defaultTableHeaderRenderer", ()=>(0, _table.defaultHeaderRenderer));
parcelHelpers.export(exports, "defaultTableHeaderRowRenderer", ()=>(0, _table.defaultHeaderRowRenderer));
parcelHelpers.export(exports, "defaultTableRowRenderer", ()=>(0, _table.defaultRowRenderer));
parcelHelpers.export(exports, "Table", ()=>(0, _table.Table));
parcelHelpers.export(exports, "Column", ()=>(0, _table.Column));
parcelHelpers.export(exports, "SortDirection", ()=>(0, _table.SortDirection));
parcelHelpers.export(exports, "SortIndicator", ()=>(0, _table.SortIndicator));
parcelHelpers.export(exports, "WindowScroller", ()=>(0, _windowScroller.WindowScroller));
var _arrowKeyStepper = require("./ArrowKeyStepper");
var _autoSizer = require("./AutoSizer");
var _cellMeasurer = require("./CellMeasurer");
var _collection = require("./Collection");
var _columnSizer = require("./ColumnSizer");
var _grid = require("./Grid");
var _infiniteLoader = require("./InfiniteLoader");
var _list = require("./List");
var _masonry = require("./Masonry");
var _multiGrid = require("./MultiGrid");
var _scrollSync = require("./ScrollSync");
var _table = require("./Table");
var _windowScroller = require("./WindowScroller");

},{"./ArrowKeyStepper":"i9Ltb","./AutoSizer":"47gGK","./CellMeasurer":"cVyUo","./Collection":"21lLg","./ColumnSizer":"jk17G","./Grid":"6STYe","./InfiniteLoader":"72OMm","./List":"g5yvl","./Masonry":"eRwQI","./MultiGrid":"gqq0S","./ScrollSync":"ky63q","./Table":"kwSH4","./WindowScroller":"5UXl6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9Ltb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _arrowKeyStepperDefault.default));
parcelHelpers.export(exports, "ArrowKeyStepper", ()=>(0, _arrowKeyStepperDefault.default));
parcelHelpers.export(exports, "bpfrpt_proptype_ScrollIndices", ()=>(0, _types.bpfrpt_proptype_ScrollIndices));
var _arrowKeyStepper = require("./ArrowKeyStepper");
var _arrowKeyStepperDefault = parcelHelpers.interopDefault(_arrowKeyStepper);
var _types = require("./types");

},{"./ArrowKeyStepper":"d0gFQ","./types":"ho5QP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0gFQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _react = require("react");
var _reactLifecyclesCompat = require("react-lifecycles-compat");
var _grid = require("../Grid");
var _types = require("./types");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _class, _temp;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */ var ArrowKeyStepper = (_temp = _class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(ArrowKeyStepper, _React$PureComponent);
    function ArrowKeyStepper() {
        var _getPrototypeOf2;
        var _this;
        (0, _classCallCheckDefault.default)(this, ArrowKeyStepper);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, _possibleConstructorReturnDefault.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOfDefault.default)(ArrowKeyStepper)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "state", {
            scrollToColumn: 0,
            scrollToRow: 0,
            instanceProps: {
                prevScrollToColumn: 0,
                prevScrollToRow: 0
            }
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_columnStartIndex", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_columnStopIndex", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_rowStartIndex", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_rowStopIndex", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onKeyDown", function(event) {
            var _this$props = _this.props, columnCount = _this$props.columnCount, disabled = _this$props.disabled, mode = _this$props.mode, rowCount = _this$props.rowCount;
            if (disabled) return;
            var _this$_getScrollState = _this._getScrollState(), scrollToColumnPrevious = _this$_getScrollState.scrollToColumn, scrollToRowPrevious = _this$_getScrollState.scrollToRow;
            var _this$_getScrollState2 = _this._getScrollState(), scrollToColumn = _this$_getScrollState2.scrollToColumn, scrollToRow = _this$_getScrollState2.scrollToRow; // The above cases all prevent default event event behavior.
            // This is to keep the grid from scrolling after the snap-to update.
            switch(event.key){
                case 'ArrowDown':
                    scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
                    break;
                case 'ArrowLeft':
                    scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
                    break;
                case 'ArrowRight':
                    scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
                    break;
                case 'ArrowUp':
                    scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
                    break;
            }
            if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
                event.preventDefault();
                _this._updateScrollState({
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow
                });
            }
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onSectionRendered", function(_ref) {
            var columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex;
            _this._columnStartIndex = columnStartIndex;
            _this._columnStopIndex = columnStopIndex;
            _this._rowStartIndex = rowStartIndex;
            _this._rowStopIndex = rowStopIndex;
        });
        return _this;
    }
    (0, _createClassDefault.default)(ArrowKeyStepper, [
        {
            key: "setScrollIndexes",
            value: function setScrollIndexes(_ref2) {
                var scrollToColumn = _ref2.scrollToColumn, scrollToRow = _ref2.scrollToRow;
                this.setState({
                    scrollToRow: scrollToRow,
                    scrollToColumn: scrollToColumn
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, className = _this$props2.className, children = _this$props2.children;
                var _this$_getScrollState3 = this._getScrollState(), scrollToColumn = _this$_getScrollState3.scrollToColumn, scrollToRow = _this$_getScrollState3.scrollToRow;
                return _react.createElement("div", {
                    className: className,
                    onKeyDown: this._onKeyDown
                }, children({
                    onSectionRendered: this._onSectionRendered,
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow
                }));
            }
        },
        {
            key: "_getScrollState",
            value: function _getScrollState() {
                return this.props.isControlled ? this.props : this.state;
            }
        },
        {
            key: "_updateScrollState",
            value: function _updateScrollState(_ref3) {
                var scrollToColumn = _ref3.scrollToColumn, scrollToRow = _ref3.scrollToRow;
                var _this$props3 = this.props, isControlled = _this$props3.isControlled, onScrollToChange = _this$props3.onScrollToChange;
                if (typeof onScrollToChange === 'function') onScrollToChange({
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow
                });
                if (!isControlled) this.setState({
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow
                });
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.isControlled) return {};
                if (nextProps.scrollToColumn !== prevState.instanceProps.prevScrollToColumn || nextProps.scrollToRow !== prevState.instanceProps.prevScrollToRow) return _objectSpread({}, prevState, {
                    scrollToColumn: nextProps.scrollToColumn,
                    scrollToRow: nextProps.scrollToRow,
                    instanceProps: {
                        prevScrollToColumn: nextProps.scrollToColumn,
                        prevScrollToRow: nextProps.scrollToRow
                    }
                });
                return {};
            }
        }
    ]);
    return ArrowKeyStepper;
}(_react.PureComponent), (0, _definePropertyDefault.default)(_class, "propTypes", {
    "children": (0, _propTypesDefault.default).func.isRequired,
    "className": (0, _propTypesDefault.default).string,
    "columnCount": (0, _propTypesDefault.default).number.isRequired,
    "disabled": (0, _propTypesDefault.default).bool.isRequired,
    "isControlled": (0, _propTypesDefault.default).bool.isRequired,
    "mode": (0, _propTypesDefault.default).oneOf([
        "cells",
        "edges"
    ]).isRequired,
    "onScrollToChange": (0, _propTypesDefault.default).func,
    "rowCount": (0, _propTypesDefault.default).number.isRequired,
    "scrollToColumn": (0, _propTypesDefault.default).number.isRequired,
    "scrollToRow": (0, _propTypesDefault.default).number.isRequired
}), _temp);
(0, _definePropertyDefault.default)(ArrowKeyStepper, "defaultProps", {
    disabled: false,
    isControlled: false,
    mode: 'edges',
    scrollToColumn: 0,
    scrollToRow: 0
});
(0, _reactLifecyclesCompat.polyfill)(ArrowKeyStepper);
exports.default = ArrowKeyStepper;

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","react":"21dqq","react-lifecycles-compat":"3f3fU","../Grid":"6STYe","./types":"ho5QP","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3nRml":[function(require,module,exports,__globalThis) {
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"2yzPp":[function(require,module,exports,__globalThis) {
var toPropertyKey = require("b03a9e1e96a7e901");
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"b03a9e1e96a7e901":"5P3X5"}],"5P3X5":[function(require,module,exports,__globalThis) {
var _typeof = require("a14bd529aa4ac1cd")["default"];
var toPrimitive = require("2713647ce51d8c75");
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"a14bd529aa4ac1cd":"jgQjt","2713647ce51d8c75":"eJCHQ"}],"jgQjt":[function(require,module,exports,__globalThis) {
function _typeof(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"eJCHQ":[function(require,module,exports,__globalThis) {
var _typeof = require("e0211298897b2d31")["default"];
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"e0211298897b2d31":"jgQjt"}],"cW3L5":[function(require,module,exports,__globalThis) {
var _typeof = require("52fa942c15a57b36")["default"];
var assertThisInitialized = require("ca3744a9acc8b6f9");
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"52fa942c15a57b36":"jgQjt","ca3744a9acc8b6f9":"1mVba"}],"1mVba":[function(require,module,exports,__globalThis) {
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"gWrBy":[function(require,module,exports,__globalThis) {
function _getPrototypeOf(t) {
    return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"bYd1U":[function(require,module,exports,__globalThis) {
var setPrototypeOf = require("f41396146170672b");
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"f41396146170672b":"bblYu"}],"bblYu":[function(require,module,exports,__globalThis) {
function _setPrototypeOf(t, e) {
    return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"4x6r7":[function(require,module,exports,__globalThis) {
var toPropertyKey = require("29ac19868e7f119");
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"29ac19868e7f119":"5P3X5"}],"6STYe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _gridDefault.default));
parcelHelpers.export(exports, "Grid", ()=>(0, _gridDefault.default));
parcelHelpers.export(exports, "accessibilityOverscanIndicesGetter", ()=>(0, _accessibilityOverscanIndicesGetterDefault.default));
parcelHelpers.export(exports, "defaultCellRangeRenderer", ()=>(0, _defaultCellRangeRendererDefault.default));
parcelHelpers.export(exports, "defaultOverscanIndicesGetter", ()=>(0, _defaultOverscanIndicesGetterDefault.default));
parcelHelpers.export(exports, "bpfrpt_proptype_NoContentRenderer", ()=>(0, _types.bpfrpt_proptype_NoContentRenderer));
parcelHelpers.export(exports, "bpfrpt_proptype_Alignment", ()=>(0, _types.bpfrpt_proptype_Alignment));
parcelHelpers.export(exports, "bpfrpt_proptype_CellPosition", ()=>(0, _types.bpfrpt_proptype_CellPosition));
parcelHelpers.export(exports, "bpfrpt_proptype_CellSize", ()=>(0, _types.bpfrpt_proptype_CellSize));
parcelHelpers.export(exports, "bpfrpt_proptype_OverscanIndicesGetter", ()=>(0, _types.bpfrpt_proptype_OverscanIndicesGetter));
parcelHelpers.export(exports, "bpfrpt_proptype_RenderedSection", ()=>(0, _types.bpfrpt_proptype_RenderedSection));
parcelHelpers.export(exports, "bpfrpt_proptype_CellRendererParams", ()=>(0, _types.bpfrpt_proptype_CellRendererParams));
parcelHelpers.export(exports, "bpfrpt_proptype_Scroll", ()=>(0, _types.bpfrpt_proptype_Scroll));
var _grid = require("./Grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _accessibilityOverscanIndicesGetter = require("./accessibilityOverscanIndicesGetter");
var _accessibilityOverscanIndicesGetterDefault = parcelHelpers.interopDefault(_accessibilityOverscanIndicesGetter);
var _defaultCellRangeRenderer = require("./defaultCellRangeRenderer");
var _defaultCellRangeRendererDefault = parcelHelpers.interopDefault(_defaultCellRangeRenderer);
var _defaultOverscanIndicesGetter = require("./defaultOverscanIndicesGetter");
var _defaultOverscanIndicesGetterDefault = parcelHelpers.interopDefault(_defaultOverscanIndicesGetter);
var _types = require("./types");

},{"./Grid":"7rv0z","./accessibilityOverscanIndicesGetter":"gZ8kM","./defaultCellRangeRenderer":"iBxuE","./defaultOverscanIndicesGetter":"b3Qy9","./types":"1plCX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rv0z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_SCROLLING_RESET_TIME_INTERVAL", ()=>DEFAULT_SCROLLING_RESET_TIME_INTERVAL);
var _extends = require("@babel/runtime/helpers/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _react = require("react");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _calculateSizeAndPositionDataAndUpdateScrollOffset = require("./utils/calculateSizeAndPositionDataAndUpdateScrollOffset");
var _calculateSizeAndPositionDataAndUpdateScrollOffsetDefault = parcelHelpers.interopDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset);
var _scalingCellSizeAndPositionManager = require("./utils/ScalingCellSizeAndPositionManager");
var _scalingCellSizeAndPositionManagerDefault = parcelHelpers.interopDefault(_scalingCellSizeAndPositionManager);
var _createCallbackMemoizer = require("../utils/createCallbackMemoizer");
var _createCallbackMemoizerDefault = parcelHelpers.interopDefault(_createCallbackMemoizer);
var _defaultOverscanIndicesGetter = require("./defaultOverscanIndicesGetter");
var _defaultOverscanIndicesGetterDefault = parcelHelpers.interopDefault(_defaultOverscanIndicesGetter);
var _updateScrollIndexHelper = require("./utils/updateScrollIndexHelper");
var _updateScrollIndexHelperDefault = parcelHelpers.interopDefault(_updateScrollIndexHelper);
var _defaultCellRangeRenderer = require("./defaultCellRangeRenderer");
var _defaultCellRangeRendererDefault = parcelHelpers.interopDefault(_defaultCellRangeRenderer);
var _scrollbarSize = require("dom-helpers/scrollbarSize");
var _scrollbarSizeDefault = parcelHelpers.interopDefault(_scrollbarSize);
var _reactLifecyclesCompat = require("react-lifecycles-compat");
var _requestAnimationTimeout = require("../utils/requestAnimationTimeout");
var _types = require("./types");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _class, _temp;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */ var SCROLL_POSITION_CHANGE_REASONS = {
    OBSERVED: 'observed',
    REQUESTED: 'requested'
};
var renderNull = function renderNull() {
    return null;
};
/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */ var Grid = (_temp = _class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(Grid, _React$PureComponent);
    // Invokes onSectionRendered callback only when start/stop row or column indices change
    function Grid(props) {
        var _this;
        (0, _classCallCheckDefault.default)(this, Grid);
        _this = (0, _possibleConstructorReturnDefault.default)(this, (0, _getPrototypeOfDefault.default)(Grid).call(this, props));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onGridRenderedMemoizer", (0, _createCallbackMemoizerDefault.default)());
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScrollMemoizer", (0, _createCallbackMemoizerDefault.default)(false));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_deferredInvalidateColumnIndex", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_deferredInvalidateRowIndex", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_recomputeScrollLeftFlag", false);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_recomputeScrollTopFlag", false);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_horizontalScrollBarSize", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_verticalScrollBarSize", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_scrollbarPresenceChanged", false);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_scrollingContainer", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_childrenToDisplay", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_columnStartIndex", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_columnStopIndex", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_rowStartIndex", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_rowStopIndex", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_renderedColumnStartIndex", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_renderedColumnStopIndex", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_renderedRowStartIndex", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_renderedRowStopIndex", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_initialScrollTop", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_initialScrollLeft", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_disablePointerEventsTimeoutId", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_styleCache", {});
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_cellCache", {});
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_debounceScrollEndedCallback", function() {
            _this._disablePointerEventsTimeoutId = null; // isScrolling is used to determine if we reset styleCache
            _this.setState({
                isScrolling: false,
                needToResetStyleCache: false
            });
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_invokeOnGridRenderedHelper", function() {
            var onSectionRendered = _this.props.onSectionRendered;
            _this._onGridRenderedMemoizer({
                callback: onSectionRendered,
                indices: {
                    columnOverscanStartIndex: _this._columnStartIndex,
                    columnOverscanStopIndex: _this._columnStopIndex,
                    columnStartIndex: _this._renderedColumnStartIndex,
                    columnStopIndex: _this._renderedColumnStopIndex,
                    rowOverscanStartIndex: _this._rowStartIndex,
                    rowOverscanStopIndex: _this._rowStopIndex,
                    rowStartIndex: _this._renderedRowStartIndex,
                    rowStopIndex: _this._renderedRowStopIndex
                }
            });
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_setScrollingContainerRef", function(ref) {
            _this._scrollingContainer = ref;
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScroll", function(event) {
            // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
            // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
            // See issue #404 for more information.
            if (event.target === _this._scrollingContainer) _this.handleScrollEvent(event.target);
        });
        var columnSizeAndPositionManager = new (0, _scalingCellSizeAndPositionManagerDefault.default)({
            cellCount: props.columnCount,
            cellSizeGetter: function cellSizeGetter(params) {
                return Grid._wrapSizeGetter(props.columnWidth)(params);
            },
            estimatedCellSize: Grid._getEstimatedColumnSize(props)
        });
        var rowSizeAndPositionManager = new (0, _scalingCellSizeAndPositionManagerDefault.default)({
            cellCount: props.rowCount,
            cellSizeGetter: function cellSizeGetter(params) {
                return Grid._wrapSizeGetter(props.rowHeight)(params);
            },
            estimatedCellSize: Grid._getEstimatedRowSize(props)
        });
        _this.state = {
            instanceProps: {
                columnSizeAndPositionManager: columnSizeAndPositionManager,
                rowSizeAndPositionManager: rowSizeAndPositionManager,
                prevColumnWidth: props.columnWidth,
                prevRowHeight: props.rowHeight,
                prevColumnCount: props.columnCount,
                prevRowCount: props.rowCount,
                prevIsScrolling: props.isScrolling === true,
                prevScrollToColumn: props.scrollToColumn,
                prevScrollToRow: props.scrollToRow,
                scrollbarSize: 0,
                scrollbarSizeMeasured: false
            },
            isScrolling: false,
            scrollDirectionHorizontal: (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD),
            scrollDirectionVertical: (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD),
            scrollLeft: 0,
            scrollTop: 0,
            scrollPositionChangeReason: null,
            needToResetStyleCache: false
        };
        if (props.scrollToRow > 0) _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
        if (props.scrollToColumn > 0) _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
        return _this;
    }
    /**
   * Gets offsets for a given cell and alignment.
   */ (0, _createClassDefault.default)(Grid, [
        {
            key: "getOffsetForCell",
            value: function getOffsetForCell() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$alignment = _ref.alignment, alignment = _ref$alignment === void 0 ? this.props.scrollToAlignment : _ref$alignment, _ref$columnIndex = _ref.columnIndex, columnIndex = _ref$columnIndex === void 0 ? this.props.scrollToColumn : _ref$columnIndex, _ref$rowIndex = _ref.rowIndex, rowIndex = _ref$rowIndex === void 0 ? this.props.scrollToRow : _ref$rowIndex;
                var offsetProps = _objectSpread({}, this.props, {
                    scrollToAlignment: alignment,
                    scrollToColumn: columnIndex,
                    scrollToRow: rowIndex
                });
                return {
                    scrollLeft: this._getCalculatedScrollLeft(offsetProps),
                    scrollTop: this._getCalculatedScrollTop(offsetProps)
                };
            }
        },
        {
            key: "getTotalRowsHeight",
            value: function getTotalRowsHeight() {
                return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
            }
        },
        {
            key: "getTotalColumnsWidth",
            value: function getTotalColumnsWidth() {
                return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
            }
        },
        {
            key: "handleScrollEvent",
            value: function handleScrollEvent(_ref2) {
                var _ref2$scrollLeft = _ref2.scrollLeft, scrollLeftParam = _ref2$scrollLeft === void 0 ? 0 : _ref2$scrollLeft, _ref2$scrollTop = _ref2.scrollTop, scrollTopParam = _ref2$scrollTop === void 0 ? 0 : _ref2$scrollTop;
                // On iOS, we can arrive at negative offsets by swiping past the start.
                // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
                if (scrollTopParam < 0) return;
                 // Prevent pointer events from interrupting a smooth scroll
                this._debounceScrollEnded();
                var _this$props = this.props, autoHeight = _this$props.autoHeight, autoWidth = _this$props.autoWidth, height = _this$props.height, width = _this$props.width;
                var instanceProps = this.state.instanceProps; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
                // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
                // This causes a series of rapid renders that is slow for long lists.
                // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.
                var scrollbarSize = instanceProps.scrollbarSize;
                var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
                var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
                var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
                // Don't force a re-render if this is the case.
                // The mouse may move faster then the animation frame does.
                // Use requestAnimationFrame to avoid over-updating.
                if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
                    // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
                    // Don't change direction for an axis unless scroll offset has changed.
                    var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD) : (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD) : this.state.scrollDirectionHorizontal;
                    var scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD) : (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD) : this.state.scrollDirectionVertical;
                    var newState = {
                        isScrolling: true,
                        scrollDirectionHorizontal: scrollDirectionHorizontal,
                        scrollDirectionVertical: scrollDirectionVertical,
                        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
                    };
                    if (!autoHeight) newState.scrollTop = scrollTop;
                    if (!autoWidth) newState.scrollLeft = scrollLeft;
                    newState.needToResetStyleCache = false;
                    this.setState(newState);
                }
                this._invokeOnScrollMemoizer({
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    totalColumnsWidth: totalColumnsWidth,
                    totalRowsHeight: totalRowsHeight
                });
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender(_ref3) {
                var columnIndex = _ref3.columnIndex, rowIndex = _ref3.rowIndex;
                this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
                this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
            }
        },
        {
            key: "measureAllCells",
            value: function measureAllCells() {
                var _this$props2 = this.props, columnCount = _this$props2.columnCount, rowCount = _this$props2.rowCount;
                var instanceProps = this.state.instanceProps;
                instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
                instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
            }
        },
        {
            key: "recomputeGridSize",
            value: function recomputeGridSize() {
                var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref4$columnIndex = _ref4.columnIndex, columnIndex = _ref4$columnIndex === void 0 ? 0 : _ref4$columnIndex, _ref4$rowIndex = _ref4.rowIndex, rowIndex = _ref4$rowIndex === void 0 ? 0 : _ref4$rowIndex;
                var _this$props3 = this.props, scrollToColumn = _this$props3.scrollToColumn, scrollToRow = _this$props3.scrollToRow;
                var instanceProps = this.state.instanceProps;
                instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
                instanceProps.rowSizeAndPositionManager.resetCell(rowIndex); // Cell sizes may be determined by a function property.
                // In this case the cDU handler can't know if they changed.
                // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
                this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD) ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
                this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD) ? rowIndex <= scrollToRow : rowIndex >= scrollToRow); // Clear cell cache in case we are scrolling;
                // Invalid row heights likely mean invalid cached content as well.
                this._styleCache = {};
                this._cellCache = {};
                this.forceUpdate();
            }
        },
        {
            key: "scrollToCell",
            value: function scrollToCell(_ref5) {
                var columnIndex = _ref5.columnIndex, rowIndex = _ref5.rowIndex;
                var columnCount = this.props.columnCount;
                var props = this.props; // Don't adjust scroll offset for single-column grids (eg List, Table).
                // This can cause a funky scroll offset because of the vertical scrollbar width.
                if (columnCount > 1 && columnIndex !== undefined) this._updateScrollLeftForScrollToColumn(_objectSpread({}, props, {
                    scrollToColumn: columnIndex
                }));
                if (rowIndex !== undefined) this._updateScrollTopForScrollToRow(_objectSpread({}, props, {
                    scrollToRow: rowIndex
                }));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this$props4 = this.props, getScrollbarSize = _this$props4.getScrollbarSize, height = _this$props4.height, scrollLeft = _this$props4.scrollLeft, scrollToColumn = _this$props4.scrollToColumn, scrollTop = _this$props4.scrollTop, scrollToRow = _this$props4.scrollToRow, width = _this$props4.width;
                var instanceProps = this.state.instanceProps; // Reset initial offsets to be ignored in browser
                this._initialScrollTop = 0;
                this._initialScrollLeft = 0; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
                // We must do this at the start of the method as we may calculate and update scroll position below.
                this._handleInvalidatedGridSize(); // If this component was first rendered server-side, scrollbar size will be undefined.
                // In that event we need to remeasure.
                if (!instanceProps.scrollbarSizeMeasured) this.setState(function(prevState) {
                    var stateUpdate = _objectSpread({}, prevState, {
                        needToResetStyleCache: false
                    });
                    stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
                    stateUpdate.instanceProps.scrollbarSizeMeasured = true;
                    return stateUpdate;
                });
                if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
                    var stateUpdate = Grid._getScrollToPositionStateUpdate({
                        prevState: this.state,
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop
                    });
                    if (stateUpdate) {
                        stateUpdate.needToResetStyleCache = false;
                        this.setState(stateUpdate);
                    }
                } // refs don't work in `react-test-renderer`
                if (this._scrollingContainer) {
                    // setting the ref's scrollLeft and scrollTop.
                    // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
                    if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) this._scrollingContainer.scrollLeft = this.state.scrollLeft;
                    if (this._scrollingContainer.scrollTop !== this.state.scrollTop) this._scrollingContainer.scrollTop = this.state.scrollTop;
                } // Don't update scroll offset if the size is 0; we don't render any cells in this case.
                // Setting a state may cause us to later thing we've updated the offce when we haven't.
                var sizeIsBiggerThanZero = height > 0 && width > 0;
                if (scrollToColumn >= 0 && sizeIsBiggerThanZero) this._updateScrollLeftForScrollToColumn();
                if (scrollToRow >= 0 && sizeIsBiggerThanZero) this._updateScrollTopForScrollToRow();
                 // Update onRowsRendered callback
                this._invokeOnGridRenderedHelper(); // Initialize onScroll callback
                this._invokeOnScrollMemoizer({
                    scrollLeft: scrollLeft || 0,
                    scrollTop: scrollTop || 0,
                    totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
                    totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
                });
                this._maybeCallOnScrollbarPresenceChange();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                var _this2 = this;
                var _this$props5 = this.props, autoHeight = _this$props5.autoHeight, autoWidth = _this$props5.autoWidth, columnCount = _this$props5.columnCount, height = _this$props5.height, rowCount = _this$props5.rowCount, scrollToAlignment = _this$props5.scrollToAlignment, scrollToColumn = _this$props5.scrollToColumn, scrollToRow = _this$props5.scrollToRow, width = _this$props5.width;
                var _this$state = this.state, scrollLeft = _this$state.scrollLeft, scrollPositionChangeReason = _this$state.scrollPositionChangeReason, scrollTop = _this$state.scrollTop, instanceProps = _this$state.instanceProps; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
                // We must do this at the start of the method as we may calculate and update scroll position below.
                this._handleInvalidatedGridSize(); // Handle edge case where column or row count has only just increased over 0.
                // In this case we may have to restore a previously-specified scroll offset.
                // For more info see bvaughn/react-virtualized/issues/218
                var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
                // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
                // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
                // So we only set these when we require an adjustment of the scroll position.
                // See issue #2 for more information.
                if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
                    // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
                    // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
                    if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) this._scrollingContainer.scrollLeft = scrollLeft;
                    if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) this._scrollingContainer.scrollTop = scrollTop;
                } // Special case where the previous size was 0:
                // In this case we don't show any windowed cells at all.
                // So we should always recalculate offset afterwards.
                var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0; // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
                // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
                if (this._recomputeScrollLeftFlag) {
                    this._recomputeScrollLeftFlag = false;
                    this._updateScrollLeftForScrollToColumn(this.props);
                } else (0, _updateScrollIndexHelperDefault.default)({
                    cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                    previousCellsCount: prevProps.columnCount,
                    previousCellSize: prevProps.columnWidth,
                    previousScrollToAlignment: prevProps.scrollToAlignment,
                    previousScrollToIndex: prevProps.scrollToColumn,
                    previousSize: prevProps.width,
                    scrollOffset: scrollLeft,
                    scrollToAlignment: scrollToAlignment,
                    scrollToIndex: scrollToColumn,
                    size: width,
                    sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
                    updateScrollIndexCallback: function updateScrollIndexCallback() {
                        return _this2._updateScrollLeftForScrollToColumn(_this2.props);
                    }
                });
                if (this._recomputeScrollTopFlag) {
                    this._recomputeScrollTopFlag = false;
                    this._updateScrollTopForScrollToRow(this.props);
                } else (0, _updateScrollIndexHelperDefault.default)({
                    cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                    previousCellsCount: prevProps.rowCount,
                    previousCellSize: prevProps.rowHeight,
                    previousScrollToAlignment: prevProps.scrollToAlignment,
                    previousScrollToIndex: prevProps.scrollToRow,
                    previousSize: prevProps.height,
                    scrollOffset: scrollTop,
                    scrollToAlignment: scrollToAlignment,
                    scrollToIndex: scrollToRow,
                    size: height,
                    sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
                    updateScrollIndexCallback: function updateScrollIndexCallback() {
                        return _this2._updateScrollTopForScrollToRow(_this2.props);
                    }
                });
                 // Update onRowsRendered callback if start/stop indices have changed
                this._invokeOnGridRenderedHelper(); // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
                if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
                    var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
                    var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                    this._invokeOnScrollMemoizer({
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop,
                        totalColumnsWidth: totalColumnsWidth,
                        totalRowsHeight: totalRowsHeight
                    });
                }
                this._maybeCallOnScrollbarPresenceChange();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this._disablePointerEventsTimeoutId) (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props6 = this.props, autoContainerWidth = _this$props6.autoContainerWidth, autoHeight = _this$props6.autoHeight, autoWidth = _this$props6.autoWidth, className = _this$props6.className, containerProps = _this$props6.containerProps, containerRole = _this$props6.containerRole, containerStyle = _this$props6.containerStyle, height = _this$props6.height, id = _this$props6.id, noContentRenderer = _this$props6.noContentRenderer, role = _this$props6.role, style = _this$props6.style, tabIndex = _this$props6.tabIndex, width = _this$props6.width;
                var _this$state2 = this.state, instanceProps = _this$state2.instanceProps, needToResetStyleCache = _this$state2.needToResetStyleCache;
                var isScrolling = this._isScrolling();
                var gridStyle = {
                    boxSizing: 'border-box',
                    direction: 'ltr',
                    height: autoHeight ? 'auto' : height,
                    position: 'relative',
                    width: autoWidth ? 'auto' : width,
                    WebkitOverflowScrolling: 'touch',
                    willChange: 'transform'
                };
                if (needToResetStyleCache) this._styleCache = {};
                 // calculate _styleCache here
                // if state.isScrolling (not from _isScrolling) then reset
                if (!this.state.isScrolling) this._resetStyleCache();
                 // calculate children to render here
                this._calculateChildrenToRender(this.props, this.state);
                var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(); // Force browser to hide scrollbars when we know they aren't necessary.
                // Otherwise once scrollbars appear they may not disappear again.
                // For more info see issue #116
                var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
                var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
                if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
                    this._horizontalScrollBarSize = horizontalScrollBarSize;
                    this._verticalScrollBarSize = verticalScrollBarSize;
                    this._scrollbarPresenceChanged = true;
                } // Also explicitly init styles to 'auto' if scrollbars are required.
                // This works around an obscure edge case where external CSS styles have not yet been loaded,
                // But an initial scroll index of offset is set as an external prop.
                // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
                // This was originally reported via clauderic/react-infinite-calendar/issues/23
                gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
                gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
                var childrenToDisplay = this._childrenToDisplay;
                var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
                return _react.createElement("div", (0, _extendsDefault.default)({
                    ref: this._setScrollingContainerRef
                }, containerProps, {
                    "aria-label": this.props['aria-label'],
                    "aria-readonly": this.props['aria-readonly'],
                    className: (0, _clsxDefault.default)('ReactVirtualized__Grid', className),
                    id: id,
                    onScroll: this._onScroll,
                    role: role,
                    style: _objectSpread({}, gridStyle, {}, style),
                    tabIndex: tabIndex
                }), childrenToDisplay.length > 0 && _react.createElement("div", {
                    className: "ReactVirtualized__Grid__innerScrollContainer",
                    role: containerRole,
                    style: _objectSpread({
                        width: autoContainerWidth ? 'auto' : totalColumnsWidth,
                        height: totalRowsHeight,
                        maxWidth: totalColumnsWidth,
                        maxHeight: totalRowsHeight,
                        overflow: 'hidden',
                        pointerEvents: isScrolling ? 'none' : '',
                        position: 'relative'
                    }, containerStyle)
                }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
            }
        },
        {
            key: "_calculateChildrenToRender",
            value: function _calculateChildrenToRender() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                var cellRenderer = props.cellRenderer, cellRangeRenderer = props.cellRangeRenderer, columnCount = props.columnCount, deferredMeasurementCache = props.deferredMeasurementCache, height = props.height, overscanColumnCount = props.overscanColumnCount, overscanIndicesGetter = props.overscanIndicesGetter, overscanRowCount = props.overscanRowCount, rowCount = props.rowCount, width = props.width, isScrollingOptOut = props.isScrollingOptOut;
                var scrollDirectionHorizontal = state.scrollDirectionHorizontal, scrollDirectionVertical = state.scrollDirectionVertical, instanceProps = state.instanceProps;
                var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
                var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;
                var isScrolling = this._isScrolling(props, state);
                this._childrenToDisplay = []; // Render only enough columns and rows to cover the visible area of the grid.
                if (height > 0 && width > 0) {
                    var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
                        containerSize: width,
                        offset: scrollLeft
                    });
                    var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
                        containerSize: height,
                        offset: scrollTop
                    });
                    var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
                        containerSize: width,
                        offset: scrollLeft
                    });
                    var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
                        containerSize: height,
                        offset: scrollTop
                    }); // Store for _invokeOnGridRenderedHelper()
                    this._renderedColumnStartIndex = visibleColumnIndices.start;
                    this._renderedColumnStopIndex = visibleColumnIndices.stop;
                    this._renderedRowStartIndex = visibleRowIndices.start;
                    this._renderedRowStopIndex = visibleRowIndices.stop;
                    var overscanColumnIndices = overscanIndicesGetter({
                        direction: 'horizontal',
                        cellCount: columnCount,
                        overscanCellsCount: overscanColumnCount,
                        scrollDirection: scrollDirectionHorizontal,
                        startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
                        stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
                    });
                    var overscanRowIndices = overscanIndicesGetter({
                        direction: 'vertical',
                        cellCount: rowCount,
                        overscanCellsCount: overscanRowCount,
                        scrollDirection: scrollDirectionVertical,
                        startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
                        stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
                    }); // Store for _invokeOnGridRenderedHelper()
                    var columnStartIndex = overscanColumnIndices.overscanStartIndex;
                    var columnStopIndex = overscanColumnIndices.overscanStopIndex;
                    var rowStartIndex = overscanRowIndices.overscanStartIndex;
                    var rowStopIndex = overscanRowIndices.overscanStopIndex; // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
                    if (deferredMeasurementCache) {
                        // If rows have a dynamic height, scan the rows we are about to render.
                        // If any have not yet been measured, then we need to render all columns initially,
                        // Because the height of the row is equal to the tallest cell within that row,
                        // (And so we can't know the height without measuring all column-cells first).
                        if (!deferredMeasurementCache.hasFixedHeight()) {
                            for(var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++)if (!deferredMeasurementCache.has(rowIndex, 0)) {
                                columnStartIndex = 0;
                                columnStopIndex = columnCount - 1;
                                break;
                            }
                        } // If columns have a dynamic width, scan the columns we are about to render.
                        // If any have not yet been measured, then we need to render all rows initially,
                        // Because the width of the column is equal to the widest cell within that column,
                        // (And so we can't know the width without measuring all row-cells first).
                        if (!deferredMeasurementCache.hasFixedWidth()) {
                            for(var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++)if (!deferredMeasurementCache.has(0, columnIndex)) {
                                rowStartIndex = 0;
                                rowStopIndex = rowCount - 1;
                                break;
                            }
                        }
                    }
                    this._childrenToDisplay = cellRangeRenderer({
                        cellCache: this._cellCache,
                        cellRenderer: cellRenderer,
                        columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                        columnStartIndex: columnStartIndex,
                        columnStopIndex: columnStopIndex,
                        deferredMeasurementCache: deferredMeasurementCache,
                        horizontalOffsetAdjustment: horizontalOffsetAdjustment,
                        isScrolling: isScrolling,
                        isScrollingOptOut: isScrollingOptOut,
                        parent: this,
                        rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                        rowStartIndex: rowStartIndex,
                        rowStopIndex: rowStopIndex,
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop,
                        styleCache: this._styleCache,
                        verticalOffsetAdjustment: verticalOffsetAdjustment,
                        visibleColumnIndices: visibleColumnIndices,
                        visibleRowIndices: visibleRowIndices
                    }); // update the indices
                    this._columnStartIndex = columnStartIndex;
                    this._columnStopIndex = columnStopIndex;
                    this._rowStartIndex = rowStartIndex;
                    this._rowStopIndex = rowStopIndex;
                }
            }
        },
        {
            key: "_debounceScrollEnded",
            value: function _debounceScrollEnded() {
                var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
                if (this._disablePointerEventsTimeoutId) (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
                this._disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
            }
        },
        {
            key: "_handleInvalidatedGridSize",
            /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */ value: function _handleInvalidatedGridSize() {
                if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
                    var columnIndex = this._deferredInvalidateColumnIndex;
                    var rowIndex = this._deferredInvalidateRowIndex;
                    this._deferredInvalidateColumnIndex = null;
                    this._deferredInvalidateRowIndex = null;
                    this.recomputeGridSize({
                        columnIndex: columnIndex,
                        rowIndex: rowIndex
                    });
                }
            }
        },
        {
            key: "_invokeOnScrollMemoizer",
            value: function _invokeOnScrollMemoizer(_ref6) {
                var _this3 = this;
                var scrollLeft = _ref6.scrollLeft, scrollTop = _ref6.scrollTop, totalColumnsWidth = _ref6.totalColumnsWidth, totalRowsHeight = _ref6.totalRowsHeight;
                this._onScrollMemoizer({
                    callback: function callback(_ref7) {
                        var scrollLeft = _ref7.scrollLeft, scrollTop = _ref7.scrollTop;
                        var _this3$props = _this3.props, height = _this3$props.height, onScroll = _this3$props.onScroll, width = _this3$props.width;
                        onScroll({
                            clientHeight: height,
                            clientWidth: width,
                            scrollHeight: totalRowsHeight,
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            scrollWidth: totalColumnsWidth
                        });
                    },
                    indices: {
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop
                    }
                });
            }
        },
        {
            key: "_isScrolling",
            value: function _isScrolling() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                // If isScrolling is defined in props, use it to override the value in state
                // This is a performance optimization for WindowScroller + Grid
                return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
            }
        },
        {
            key: "_maybeCallOnScrollbarPresenceChange",
            value: function _maybeCallOnScrollbarPresenceChange() {
                if (this._scrollbarPresenceChanged) {
                    var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;
                    this._scrollbarPresenceChanged = false;
                    onScrollbarPresenceChange({
                        horizontal: this._horizontalScrollBarSize > 0,
                        size: this.state.instanceProps.scrollbarSize,
                        vertical: this._verticalScrollBarSize > 0
                    });
                }
            }
        },
        {
            key: "scrollToPosition",
            /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */ value: function scrollToPosition(_ref8) {
                var scrollLeft = _ref8.scrollLeft, scrollTop = _ref8.scrollTop;
                var stateUpdate = Grid._getScrollToPositionStateUpdate({
                    prevState: this.state,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                });
                if (stateUpdate) {
                    stateUpdate.needToResetStyleCache = false;
                    this.setState(stateUpdate);
                }
            }
        },
        {
            key: "_getCalculatedScrollLeft",
            value: function _getCalculatedScrollLeft() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                return Grid._getCalculatedScrollLeft(props, state);
            }
        },
        {
            key: "_updateScrollLeftForScrollToColumn",
            value: function _updateScrollLeftForScrollToColumn() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);
                if (stateUpdate) {
                    stateUpdate.needToResetStyleCache = false;
                    this.setState(stateUpdate);
                }
            }
        },
        {
            key: "_getCalculatedScrollTop",
            value: function _getCalculatedScrollTop() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                return Grid._getCalculatedScrollTop(props, state);
            }
        },
        {
            key: "_resetStyleCache",
            value: function _resetStyleCache() {
                var styleCache = this._styleCache;
                var cellCache = this._cellCache;
                var isScrollingOptOut = this.props.isScrollingOptOut; // Reset cell and style caches once scrolling stops.
                // This makes Grid simpler to use (since cells commonly change).
                // And it keeps the caches from growing too large.
                // Performance is most sensitive when a user is scrolling.
                // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
                // This keeps the cellCache to a resonable size.
                this._cellCache = {};
                this._styleCache = {}; // Copy over the visible cell styles so avoid unnecessary re-render.
                for(var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++)for(var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++){
                    var key = "".concat(rowIndex, "-").concat(columnIndex);
                    this._styleCache[key] = styleCache[key];
                    if (isScrollingOptOut) this._cellCache[key] = cellCache[key];
                }
            }
        },
        {
            key: "_updateScrollTopForScrollToRow",
            value: function _updateScrollTopForScrollToRow() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
                var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
                var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);
                if (stateUpdate) {
                    stateUpdate.needToResetStyleCache = false;
                    this.setState(stateUpdate);
                }
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                var newState = {};
                if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
                    newState.scrollLeft = 0;
                    newState.scrollTop = 0; // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
                // scrollTo{Column,Row} should override scroll{Left,Top}
                } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) Object.assign(newState, Grid._getScrollToPositionStateUpdate({
                    prevState: prevState,
                    scrollLeft: nextProps.scrollLeft,
                    scrollTop: nextProps.scrollTop
                }));
                var instanceProps = prevState.instanceProps; // Initially we should not clearStyleCache
                newState.needToResetStyleCache = false;
                if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) // Reset cache. set it to {} in render
                newState.needToResetStyleCache = true;
                instanceProps.columnSizeAndPositionManager.configure({
                    cellCount: nextProps.columnCount,
                    estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
                    cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
                });
                instanceProps.rowSizeAndPositionManager.configure({
                    cellCount: nextProps.rowCount,
                    estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
                    cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
                });
                if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
                    instanceProps.prevColumnCount = 0;
                    instanceProps.prevRowCount = 0;
                } // If scrolling is controlled outside this component, clear cache when scrolling stops
                if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) Object.assign(newState, {
                    isScrolling: false
                });
                var maybeStateA;
                var maybeStateB;
                (0, _calculateSizeAndPositionDataAndUpdateScrollOffsetDefault.default)({
                    cellCount: instanceProps.prevColumnCount,
                    cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
                    computeMetadataCallback: function computeMetadataCallback() {
                        return instanceProps.columnSizeAndPositionManager.resetCell(0);
                    },
                    computeMetadataCallbackProps: nextProps,
                    nextCellsCount: nextProps.columnCount,
                    nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
                    nextScrollToIndex: nextProps.scrollToColumn,
                    scrollToIndex: instanceProps.prevScrollToColumn,
                    updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
                        maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
                    }
                });
                (0, _calculateSizeAndPositionDataAndUpdateScrollOffsetDefault.default)({
                    cellCount: instanceProps.prevRowCount,
                    cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
                    computeMetadataCallback: function computeMetadataCallback() {
                        return instanceProps.rowSizeAndPositionManager.resetCell(0);
                    },
                    computeMetadataCallbackProps: nextProps,
                    nextCellsCount: nextProps.rowCount,
                    nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
                    nextScrollToIndex: nextProps.scrollToRow,
                    scrollToIndex: instanceProps.prevScrollToRow,
                    updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
                        maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
                    }
                });
                instanceProps.prevColumnCount = nextProps.columnCount;
                instanceProps.prevColumnWidth = nextProps.columnWidth;
                instanceProps.prevIsScrolling = nextProps.isScrolling === true;
                instanceProps.prevRowCount = nextProps.rowCount;
                instanceProps.prevRowHeight = nextProps.rowHeight;
                instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
                instanceProps.prevScrollToRow = nextProps.scrollToRow; // getting scrollBarSize (moved from componentWillMount)
                instanceProps.scrollbarSize = nextProps.getScrollbarSize();
                if (instanceProps.scrollbarSize === undefined) {
                    instanceProps.scrollbarSizeMeasured = false;
                    instanceProps.scrollbarSize = 0;
                } else instanceProps.scrollbarSizeMeasured = true;
                newState.instanceProps = instanceProps;
                return _objectSpread({}, newState, {}, maybeStateA, {}, maybeStateB);
            }
        },
        {
            key: "_getEstimatedColumnSize",
            value: function _getEstimatedColumnSize(props) {
                return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
            }
        },
        {
            key: "_getEstimatedRowSize",
            value: function _getEstimatedRowSize(props) {
                return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
            }
        },
        {
            key: "_getScrollToPositionStateUpdate",
            /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */ value: function _getScrollToPositionStateUpdate(_ref9) {
                var prevState = _ref9.prevState, scrollLeft = _ref9.scrollLeft, scrollTop = _ref9.scrollTop;
                var newState = {
                    scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                };
                if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
                    newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD) : (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD);
                    newState.scrollLeft = scrollLeft;
                }
                if (typeof scrollTop === 'number' && scrollTop >= 0) {
                    newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD) : (0, _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD);
                    newState.scrollTop = scrollTop;
                }
                if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) return newState;
                return {};
            }
        },
        {
            key: "_wrapSizeGetter",
            value: function _wrapSizeGetter(value) {
                return typeof value === 'function' ? value : function() {
                    return value;
                };
            }
        },
        {
            key: "_getCalculatedScrollLeft",
            value: function _getCalculatedScrollLeft(nextProps, prevState) {
                var columnCount = nextProps.columnCount, height = nextProps.height, scrollToAlignment = nextProps.scrollToAlignment, scrollToColumn = nextProps.scrollToColumn, width = nextProps.width;
                var scrollLeft = prevState.scrollLeft, instanceProps = prevState.instanceProps;
                if (columnCount > 0) {
                    var finalColumn = columnCount - 1;
                    var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
                    var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
                    var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
                    return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
                        align: scrollToAlignment,
                        containerSize: width - scrollBarSize,
                        currentOffset: scrollLeft,
                        targetIndex: targetIndex
                    });
                }
                return 0;
            }
        },
        {
            key: "_getScrollLeftForScrollToColumnStateUpdate",
            value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
                var scrollLeft = prevState.scrollLeft;
                var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);
                if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) return Grid._getScrollToPositionStateUpdate({
                    prevState: prevState,
                    scrollLeft: calculatedScrollLeft,
                    scrollTop: -1
                });
                return {};
            }
        },
        {
            key: "_getCalculatedScrollTop",
            value: function _getCalculatedScrollTop(nextProps, prevState) {
                var height = nextProps.height, rowCount = nextProps.rowCount, scrollToAlignment = nextProps.scrollToAlignment, scrollToRow = nextProps.scrollToRow, width = nextProps.width;
                var scrollTop = prevState.scrollTop, instanceProps = prevState.instanceProps;
                if (rowCount > 0) {
                    var finalRow = rowCount - 1;
                    var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
                    var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                    var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
                    return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
                        align: scrollToAlignment,
                        containerSize: height - scrollBarSize,
                        currentOffset: scrollTop,
                        targetIndex: targetIndex
                    });
                }
                return 0;
            }
        },
        {
            key: "_getScrollTopForScrollToRowStateUpdate",
            value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
                var scrollTop = prevState.scrollTop;
                var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);
                if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) return Grid._getScrollToPositionStateUpdate({
                    prevState: prevState,
                    scrollLeft: -1,
                    scrollTop: calculatedScrollTop
                });
                return {};
            }
        }
    ]);
    return Grid;
}(_react.PureComponent), (0, _definePropertyDefault.default)(_class, "propTypes", {
    "aria-label": (0, _propTypesDefault.default).string.isRequired,
    "aria-readonly": (0, _propTypesDefault.default).bool,
    /**
   * Set the width of the inner scrollable container to 'auto'.
   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
   */ "autoContainerWidth": (0, _propTypesDefault.default).bool.isRequired,
    /**
   * Removes fixed height from the scrollingContainer so that the total height of rows can stretch the window.
   * Intended for use with WindowScroller
   */ "autoHeight": (0, _propTypesDefault.default).bool.isRequired,
    /**
   * Removes fixed width from the scrollingContainer so that the total width of rows can stretch the window.
   * Intended for use with WindowScroller
   */ "autoWidth": (0, _propTypesDefault.default).bool.isRequired,
    /** Responsible for rendering a cell given an row and column index.  */ "cellRenderer": function cellRenderer() {
        return (typeof (0, _types.bpfrpt_proptype_CellRenderer) === "function" ? (0, _types.bpfrpt_proptype_CellRenderer).isRequired ? (0, _types.bpfrpt_proptype_CellRenderer).isRequired : (0, _types.bpfrpt_proptype_CellRenderer) : (0, _propTypesDefault.default).shape((0, _types.bpfrpt_proptype_CellRenderer)).isRequired).apply(this, arguments);
    },
    /** Responsible for rendering a group of cells given their index ranges.  */ "cellRangeRenderer": function cellRangeRenderer() {
        return (typeof (0, _types.bpfrpt_proptype_CellRangeRenderer) === "function" ? (0, _types.bpfrpt_proptype_CellRangeRenderer).isRequired ? (0, _types.bpfrpt_proptype_CellRangeRenderer).isRequired : (0, _types.bpfrpt_proptype_CellRangeRenderer) : (0, _propTypesDefault.default).shape((0, _types.bpfrpt_proptype_CellRangeRenderer)).isRequired).apply(this, arguments);
    },
    /** Optional custom CSS class name to attach to root Grid element.  */ "className": (0, _propTypesDefault.default).string,
    /** Number of columns in grid.  */ "columnCount": (0, _propTypesDefault.default).number.isRequired,
    /** Either a fixed column width (number) or a function that returns the width of a column given its index.  */ "columnWidth": function columnWidth() {
        return (typeof (0, _types.bpfrpt_proptype_CellSize) === "function" ? (0, _types.bpfrpt_proptype_CellSize).isRequired ? (0, _types.bpfrpt_proptype_CellSize).isRequired : (0, _types.bpfrpt_proptype_CellSize) : (0, _propTypesDefault.default).shape((0, _types.bpfrpt_proptype_CellSize)).isRequired).apply(this, arguments);
    },
    /** Unfiltered props for the Grid container. */ "containerProps": (0, _propTypesDefault.default).object,
    /** ARIA role for the cell-container.  */ "containerRole": (0, _propTypesDefault.default).string.isRequired,
    /** Optional inline style applied to inner cell-container */ "containerStyle": (0, _propTypesDefault.default).object.isRequired,
    /**
   * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
   * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
   */ "deferredMeasurementCache": (0, _propTypesDefault.default).object,
    /**
   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
   * The estimated total width is adjusted as columns are rendered.
   */ "estimatedColumnSize": (0, _propTypesDefault.default).number.isRequired,
    /**
   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */ "estimatedRowSize": (0, _propTypesDefault.default).number.isRequired,
    /** Exposed for testing purposes only.  */ "getScrollbarSize": (0, _propTypesDefault.default).func.isRequired,
    /** Height of Grid; this property determines the number of visible (vs virtualized) rows.  */ "height": (0, _propTypesDefault.default).number.isRequired,
    /** Optional custom id to attach to root Grid element.  */ "id": (0, _propTypesDefault.default).string,
    /**
   * Override internal is-scrolling state tracking.
   * This property is primarily intended for use with the WindowScroller component.
   */ "isScrolling": (0, _propTypesDefault.default).bool,
    /**
   * Opt-out of isScrolling param passed to cellRangeRenderer.
   * To avoid the extra render when scroll stops.
   */ "isScrollingOptOut": (0, _propTypesDefault.default).bool.isRequired,
    /** Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.  */ "noContentRenderer": function noContentRenderer() {
        return (typeof (0, _types.bpfrpt_proptype_NoContentRenderer) === "function" ? (0, _types.bpfrpt_proptype_NoContentRenderer).isRequired ? (0, _types.bpfrpt_proptype_NoContentRenderer).isRequired : (0, _types.bpfrpt_proptype_NoContentRenderer) : (0, _propTypesDefault.default).shape((0, _types.bpfrpt_proptype_NoContentRenderer)).isRequired).apply(this, arguments);
    },
    /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */ "onScroll": (0, _propTypesDefault.default).func.isRequired,
    /**
   * Called whenever a horizontal or vertical scrollbar is added or removed.
   * This prop is not intended for end-user use;
   * It is used by MultiGrid to support fixed-row/fixed-column scroll syncing.
   */ "onScrollbarPresenceChange": (0, _propTypesDefault.default).func.isRequired,
    /** Callback invoked with information about the section of the Grid that was just rendered.  */ "onSectionRendered": (0, _propTypesDefault.default).func.isRequired,
    /**
   * Number of columns to render before/after the visible section of the grid.
   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */ "overscanColumnCount": (0, _propTypesDefault.default).number.isRequired,
    /**
   * Calculates the number of cells to overscan before and after a specified range.
   * This function ensures that overscanning doesn't exceed the available cells.
   */ "overscanIndicesGetter": function overscanIndicesGetter() {
        return (typeof (0, _types.bpfrpt_proptype_OverscanIndicesGetter) === "function" ? (0, _types.bpfrpt_proptype_OverscanIndicesGetter).isRequired ? (0, _types.bpfrpt_proptype_OverscanIndicesGetter).isRequired : (0, _types.bpfrpt_proptype_OverscanIndicesGetter) : (0, _propTypesDefault.default).shape((0, _types.bpfrpt_proptype_OverscanIndicesGetter)).isRequired).apply(this, arguments);
    },
    /**
   * Number of rows to render above/below the visible section of the grid.
   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */ "overscanRowCount": (0, _propTypesDefault.default).number.isRequired,
    /** ARIA role for the grid element.  */ "role": (0, _propTypesDefault.default).string.isRequired,
    /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * Should implement the following interface: ({ index: number }): number
   */ "rowHeight": function rowHeight() {
        return (typeof (0, _types.bpfrpt_proptype_CellSize) === "function" ? (0, _types.bpfrpt_proptype_CellSize).isRequired ? (0, _types.bpfrpt_proptype_CellSize).isRequired : (0, _types.bpfrpt_proptype_CellSize) : (0, _propTypesDefault.default).shape((0, _types.bpfrpt_proptype_CellSize)).isRequired).apply(this, arguments);
    },
    /** Number of rows in grid.  */ "rowCount": (0, _propTypesDefault.default).number.isRequired,
    /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */ "scrollingResetTimeInterval": (0, _propTypesDefault.default).number.isRequired,
    /** Horizontal offset. */ "scrollLeft": (0, _propTypesDefault.default).number,
    /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */ "scrollToAlignment": function scrollToAlignment() {
        return (typeof (0, _types.bpfrpt_proptype_Alignment) === "function" ? (0, _types.bpfrpt_proptype_Alignment).isRequired ? (0, _types.bpfrpt_proptype_Alignment).isRequired : (0, _types.bpfrpt_proptype_Alignment) : (0, _propTypesDefault.default).shape((0, _types.bpfrpt_proptype_Alignment)).isRequired).apply(this, arguments);
    },
    /** Column index to ensure visible (by forcefully scrolling if necessary) */ "scrollToColumn": (0, _propTypesDefault.default).number.isRequired,
    /** Vertical offset. */ "scrollTop": (0, _propTypesDefault.default).number,
    /** Row index to ensure visible (by forcefully scrolling if necessary) */ "scrollToRow": (0, _propTypesDefault.default).number.isRequired,
    /** Optional inline style */ "style": (0, _propTypesDefault.default).object.isRequired,
    /** Tab index for focus */ "tabIndex": (0, _propTypesDefault.default).number,
    /** Width of Grid; this property determines the number of visible (vs virtualized) columns.  */ "width": (0, _propTypesDefault.default).number.isRequired
}), _temp);
(0, _definePropertyDefault.default)(Grid, "defaultProps", {
    'aria-label': 'grid',
    'aria-readonly': true,
    autoContainerWidth: false,
    autoHeight: false,
    autoWidth: false,
    cellRangeRenderer: (0, _defaultCellRangeRendererDefault.default),
    containerRole: 'rowgroup',
    containerStyle: {},
    estimatedColumnSize: 100,
    estimatedRowSize: 30,
    getScrollbarSize: (0, _scrollbarSizeDefault.default),
    noContentRenderer: renderNull,
    onScroll: function onScroll() {},
    onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
    onSectionRendered: function onSectionRendered() {},
    overscanColumnCount: 0,
    overscanIndicesGetter: (0, _defaultOverscanIndicesGetterDefault.default),
    overscanRowCount: 10,
    role: 'grid',
    scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
    scrollToAlignment: 'auto',
    scrollToColumn: -1,
    scrollToRow: -1,
    style: {},
    tabIndex: 0,
    isScrollingOptOut: false
});
(0, _reactLifecyclesCompat.polyfill)(Grid);
exports.default = Grid;

},{"@babel/runtime/helpers/extends":"vw3vn","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","react":"21dqq","clsx":"83C22","./utils/calculateSizeAndPositionDataAndUpdateScrollOffset":"i4PVQ","./utils/ScalingCellSizeAndPositionManager":"eyS48","../utils/createCallbackMemoizer":"kgXut","./defaultOverscanIndicesGetter":"b3Qy9","./utils/updateScrollIndexHelper":"bHipG","./defaultCellRangeRenderer":"iBxuE","dom-helpers/scrollbarSize":"lhsUa","react-lifecycles-compat":"3f3fU","../utils/requestAnimationTimeout":"fMoXC","./types":"1plCX","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vw3vn":[function(require,module,exports,__globalThis) {
function _extends() {
    return module.exports = _extends = Object.assign ? Object.assign.bind() : function(n) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"i4PVQ":[function(require,module,exports,__globalThis) {
/**
 * Helper method that determines when to recalculate row or column metadata.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>calculateSizeAndPositionDataAndUpdateScrollOffset);
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
    var cellCount = _ref.cellCount, cellSize = _ref.cellSize, computeMetadataCallback = _ref.computeMetadataCallback, computeMetadataCallbackProps = _ref.computeMetadataCallbackProps, nextCellsCount = _ref.nextCellsCount, nextCellSize = _ref.nextCellSize, nextScrollToIndex = _ref.nextScrollToIndex, scrollToIndex = _ref.scrollToIndex, updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;
    // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
    // In that event users should use the manual recompute methods to inform of changes.
    if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
        computeMetadataCallback(computeMetadataCallbackProps); // Updated cell metadata may have hidden the previous scrolled-to item.
        // In this case we should also update the scrollTop to ensure it stays visible.
        if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) updateScrollOffsetForScrollToIndex();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyS48":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ScalingCellSizeAndPositionManager);
var _objectWithoutProperties = require("@babel/runtime/helpers/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _cellSizeAndPositionManager = require("./CellSizeAndPositionManager");
var _cellSizeAndPositionManagerDefault = parcelHelpers.interopDefault(_cellSizeAndPositionManager);
var _maxElementSizeJs = require("./maxElementSize.js");
var _types = require("../types");
/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */ var ScalingCellSizeAndPositionManager = /*#__PURE__*/ function() {
    function ScalingCellSizeAndPositionManager(_ref) {
        var _ref$maxScrollSize = _ref.maxScrollSize, maxScrollSize = _ref$maxScrollSize === void 0 ? (0, _maxElementSizeJs.getMaxElementSize)() : _ref$maxScrollSize, params = (0, _objectWithoutPropertiesDefault.default)(_ref, [
            "maxScrollSize"
        ]);
        (0, _classCallCheckDefault.default)(this, ScalingCellSizeAndPositionManager);
        (0, _definePropertyDefault.default)(this, "_cellSizeAndPositionManager", void 0);
        (0, _definePropertyDefault.default)(this, "_maxScrollSize", void 0);
        // Favor composition over inheritance to simplify IE10 support
        this._cellSizeAndPositionManager = new (0, _cellSizeAndPositionManagerDefault.default)(params);
        this._maxScrollSize = maxScrollSize;
    }
    (0, _createClassDefault.default)(ScalingCellSizeAndPositionManager, [
        {
            key: "areOffsetsAdjusted",
            value: function areOffsetsAdjusted() {
                return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
            }
        },
        {
            key: "configure",
            value: function configure(params) {
                this._cellSizeAndPositionManager.configure(params);
            }
        },
        {
            key: "getCellCount",
            value: function getCellCount() {
                return this._cellSizeAndPositionManager.getCellCount();
            }
        },
        {
            key: "getEstimatedCellSize",
            value: function getEstimatedCellSize() {
                return this._cellSizeAndPositionManager.getEstimatedCellSize();
            }
        },
        {
            key: "getLastMeasuredIndex",
            value: function getLastMeasuredIndex() {
                return this._cellSizeAndPositionManager.getLastMeasuredIndex();
            }
        },
        {
            key: "getOffsetAdjustment",
            value: function getOffsetAdjustment(_ref2) {
                var containerSize = _ref2.containerSize, offset = _ref2.offset;
                var totalSize = this._cellSizeAndPositionManager.getTotalSize();
                var safeTotalSize = this.getTotalSize();
                var offsetPercentage = this._getOffsetPercentage({
                    containerSize: containerSize,
                    offset: offset,
                    totalSize: safeTotalSize
                });
                return Math.round(offsetPercentage * (safeTotalSize - totalSize));
            }
        },
        {
            key: "getSizeAndPositionOfCell",
            value: function getSizeAndPositionOfCell(index) {
                return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
            }
        },
        {
            key: "getSizeAndPositionOfLastMeasuredCell",
            value: function getSizeAndPositionOfLastMeasuredCell() {
                return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
            }
        },
        {
            key: "getTotalSize",
            value: function getTotalSize() {
                return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
            }
        },
        {
            key: "getUpdatedOffsetForIndex",
            value: function getUpdatedOffsetForIndex(_ref3) {
                var _ref3$align = _ref3.align, align = _ref3$align === void 0 ? 'auto' : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex;
                currentOffset = this._safeOffsetToOffset({
                    containerSize: containerSize,
                    offset: currentOffset
                });
                var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
                    align: align,
                    containerSize: containerSize,
                    currentOffset: currentOffset,
                    targetIndex: targetIndex
                });
                return this._offsetToSafeOffset({
                    containerSize: containerSize,
                    offset: offset
                });
            }
        },
        {
            key: "getVisibleCellRange",
            value: function getVisibleCellRange(_ref4) {
                var containerSize = _ref4.containerSize, offset = _ref4.offset;
                offset = this._safeOffsetToOffset({
                    containerSize: containerSize,
                    offset: offset
                });
                return this._cellSizeAndPositionManager.getVisibleCellRange({
                    containerSize: containerSize,
                    offset: offset
                });
            }
        },
        {
            key: "resetCell",
            value: function resetCell(index) {
                this._cellSizeAndPositionManager.resetCell(index);
            }
        },
        {
            key: "_getOffsetPercentage",
            value: function _getOffsetPercentage(_ref5) {
                var containerSize = _ref5.containerSize, offset = _ref5.offset, totalSize = _ref5.totalSize;
                return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
            }
        },
        {
            key: "_offsetToSafeOffset",
            value: function _offsetToSafeOffset(_ref6) {
                var containerSize = _ref6.containerSize, offset = _ref6.offset;
                var totalSize = this._cellSizeAndPositionManager.getTotalSize();
                var safeTotalSize = this.getTotalSize();
                if (totalSize === safeTotalSize) return offset;
                else {
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: totalSize
                    });
                    return Math.round(offsetPercentage * (safeTotalSize - containerSize));
                }
            }
        },
        {
            key: "_safeOffsetToOffset",
            value: function _safeOffsetToOffset(_ref7) {
                var containerSize = _ref7.containerSize, offset = _ref7.offset;
                var totalSize = this._cellSizeAndPositionManager.getTotalSize();
                var safeTotalSize = this.getTotalSize();
                if (totalSize === safeTotalSize) return offset;
                else {
                    var offsetPercentage = this._getOffsetPercentage({
                        containerSize: containerSize,
                        offset: offset,
                        totalSize: safeTotalSize
                    });
                    return Math.round(offsetPercentage * (totalSize - containerSize));
                }
            }
        }
    ]);
    return ScalingCellSizeAndPositionManager;
}();

},{"@babel/runtime/helpers/objectWithoutProperties":"lte4p","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/defineProperty":"4x6r7","./CellSizeAndPositionManager":"7ECof","./maxElementSize.js":"a1uSw","../types":"1plCX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lte4p":[function(require,module,exports,__globalThis) {
var objectWithoutPropertiesLoose = require("424c8dc91f0a14f9");
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for(r = 0; r < s.length; r++)o = s[r], t.includes(o) || ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"424c8dc91f0a14f9":"hvCCX"}],"hvCCX":[function(require,module,exports,__globalThis) {
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
    }
    return t;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"7ECof":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CellSizeAndPositionManager);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _types = require("../types");
/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */ var CellSizeAndPositionManager = /*#__PURE__*/ function() {
    // Cache of size and position data for cells, mapped by cell index.
    // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
    // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
    // Used in deferred mode to track which cells have been queued for measurement.
    function CellSizeAndPositionManager(_ref) {
        var cellCount = _ref.cellCount, cellSizeGetter = _ref.cellSizeGetter, estimatedCellSize = _ref.estimatedCellSize;
        (0, _classCallCheckDefault.default)(this, CellSizeAndPositionManager);
        (0, _definePropertyDefault.default)(this, "_cellSizeAndPositionData", {});
        (0, _definePropertyDefault.default)(this, "_lastMeasuredIndex", -1);
        (0, _definePropertyDefault.default)(this, "_lastBatchedIndex", -1);
        (0, _definePropertyDefault.default)(this, "_cellCount", void 0);
        (0, _definePropertyDefault.default)(this, "_cellSizeGetter", void 0);
        (0, _definePropertyDefault.default)(this, "_estimatedCellSize", void 0);
        this._cellSizeGetter = cellSizeGetter;
        this._cellCount = cellCount;
        this._estimatedCellSize = estimatedCellSize;
    }
    (0, _createClassDefault.default)(CellSizeAndPositionManager, [
        {
            key: "areOffsetsAdjusted",
            value: function areOffsetsAdjusted() {
                return false;
            }
        },
        {
            key: "configure",
            value: function configure(_ref2) {
                var cellCount = _ref2.cellCount, estimatedCellSize = _ref2.estimatedCellSize, cellSizeGetter = _ref2.cellSizeGetter;
                this._cellCount = cellCount;
                this._estimatedCellSize = estimatedCellSize;
                this._cellSizeGetter = cellSizeGetter;
            }
        },
        {
            key: "getCellCount",
            value: function getCellCount() {
                return this._cellCount;
            }
        },
        {
            key: "getEstimatedCellSize",
            value: function getEstimatedCellSize() {
                return this._estimatedCellSize;
            }
        },
        {
            key: "getLastMeasuredIndex",
            value: function getLastMeasuredIndex() {
                return this._lastMeasuredIndex;
            }
        },
        {
            key: "getOffsetAdjustment",
            value: function getOffsetAdjustment() {
                return 0;
            }
        },
        {
            key: "getSizeAndPositionOfCell",
            value: function getSizeAndPositionOfCell(index) {
                if (index < 0 || index >= this._cellCount) throw Error("Requested index ".concat(index, " is outside of range 0..").concat(this._cellCount));
                if (index > this._lastMeasuredIndex) {
                    var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
                    var offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
                    for(var i = this._lastMeasuredIndex + 1; i <= index; i++){
                        var size = this._cellSizeGetter({
                            index: i
                        }); // undefined or NaN probably means a logic error in the size getter.
                        // null means we're using CellMeasurer and haven't yet measured a given index.
                        if (size === undefined || isNaN(size)) throw Error("Invalid size returned for cell ".concat(i, " of value ").concat(size));
                        else if (size === null) {
                            this._cellSizeAndPositionData[i] = {
                                offset: offset,
                                size: 0
                            };
                            this._lastBatchedIndex = index;
                        } else {
                            this._cellSizeAndPositionData[i] = {
                                offset: offset,
                                size: size
                            };
                            offset += size;
                            this._lastMeasuredIndex = index;
                        }
                    }
                }
                return this._cellSizeAndPositionData[index];
            }
        },
        {
            key: "getSizeAndPositionOfLastMeasuredCell",
            value: function getSizeAndPositionOfLastMeasuredCell() {
                return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
                    offset: 0,
                    size: 0
                };
            }
        },
        {
            key: "getTotalSize",
            value: function getTotalSize() {
                var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
                var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
                var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
                var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
                return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
            }
        },
        {
            key: "getUpdatedOffsetForIndex",
            value: function getUpdatedOffsetForIndex(_ref3) {
                var _ref3$align = _ref3.align, align = _ref3$align === void 0 ? 'auto' : _ref3$align, containerSize = _ref3.containerSize, currentOffset = _ref3.currentOffset, targetIndex = _ref3.targetIndex;
                if (containerSize <= 0) return 0;
                var datum = this.getSizeAndPositionOfCell(targetIndex);
                var maxOffset = datum.offset;
                var minOffset = maxOffset - containerSize + datum.size;
                var idealOffset;
                switch(align){
                    case 'start':
                        idealOffset = maxOffset;
                        break;
                    case 'end':
                        idealOffset = minOffset;
                        break;
                    case 'center':
                        idealOffset = maxOffset - (containerSize - datum.size) / 2;
                        break;
                    default:
                        idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
                        break;
                }
                var totalSize = this.getTotalSize();
                return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
            }
        },
        {
            key: "getVisibleCellRange",
            value: function getVisibleCellRange(params) {
                var containerSize = params.containerSize, offset = params.offset;
                var totalSize = this.getTotalSize();
                if (totalSize === 0) return {};
                var maxOffset = offset + containerSize;
                var start = this._findNearestCell(offset);
                var datum = this.getSizeAndPositionOfCell(start);
                offset = datum.offset + datum.size;
                var stop = start;
                while(offset < maxOffset && stop < this._cellCount - 1){
                    stop++;
                    offset += this.getSizeAndPositionOfCell(stop).size;
                }
                return {
                    start: start,
                    stop: stop
                };
            }
        },
        {
            key: "resetCell",
            value: function resetCell(index) {
                this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
            }
        },
        {
            key: "_binarySearch",
            value: function _binarySearch(high, low, offset) {
                while(low <= high){
                    var middle = low + Math.floor((high - low) / 2);
                    var currentOffset = this.getSizeAndPositionOfCell(middle).offset;
                    if (currentOffset === offset) return middle;
                    else if (currentOffset < offset) low = middle + 1;
                    else if (currentOffset > offset) high = middle - 1;
                }
                if (low > 0) return low - 1;
                else return 0;
            }
        },
        {
            key: "_exponentialSearch",
            value: function _exponentialSearch(index, offset) {
                var interval = 1;
                while(index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset){
                    index += interval;
                    interval *= 2;
                }
                return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
            }
        },
        {
            key: "_findNearestCell",
            value: function _findNearestCell(offset) {
                if (isNaN(offset)) throw Error("Invalid offset ".concat(offset, " specified"));
                 // Our search algorithms find the nearest match at or below the specified offset.
                // So make sure the offset is at least 0 or no match will be found.
                offset = Math.max(0, offset);
                var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
                var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);
                if (lastMeasuredCellSizeAndPosition.offset >= offset) // If we've already measured cells within this range just use a binary search as it's faster.
                return this._binarySearch(lastMeasuredIndex, 0, offset);
                else // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
                // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
                // The overall complexity for this approach is O(log n).
                return this._exponentialSearch(lastMeasuredIndex, offset);
            }
        }
    ]);
    return CellSizeAndPositionManager;
}();

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/defineProperty":"4x6r7","../types":"1plCX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1plCX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bpfrpt_proptype_CellPosition", ()=>bpfrpt_proptype_CellPosition);
parcelHelpers.export(exports, "bpfrpt_proptype_CellRendererParams", ()=>bpfrpt_proptype_CellRendererParams);
parcelHelpers.export(exports, "bpfrpt_proptype_CellRenderer", ()=>bpfrpt_proptype_CellRenderer);
parcelHelpers.export(exports, "bpfrpt_proptype_CellCache", ()=>bpfrpt_proptype_CellCache);
parcelHelpers.export(exports, "bpfrpt_proptype_StyleCache", ()=>bpfrpt_proptype_StyleCache);
parcelHelpers.export(exports, "bpfrpt_proptype_CellRangeRendererParams", ()=>bpfrpt_proptype_CellRangeRendererParams);
parcelHelpers.export(exports, "bpfrpt_proptype_CellRangeRenderer", ()=>bpfrpt_proptype_CellRangeRenderer);
parcelHelpers.export(exports, "bpfrpt_proptype_CellSizeGetter", ()=>bpfrpt_proptype_CellSizeGetter);
parcelHelpers.export(exports, "bpfrpt_proptype_CellSize", ()=>bpfrpt_proptype_CellSize);
parcelHelpers.export(exports, "bpfrpt_proptype_NoContentRenderer", ()=>bpfrpt_proptype_NoContentRenderer);
parcelHelpers.export(exports, "bpfrpt_proptype_Scroll", ()=>bpfrpt_proptype_Scroll);
parcelHelpers.export(exports, "bpfrpt_proptype_ScrollbarPresenceChange", ()=>bpfrpt_proptype_ScrollbarPresenceChange);
parcelHelpers.export(exports, "bpfrpt_proptype_RenderedSection", ()=>bpfrpt_proptype_RenderedSection);
parcelHelpers.export(exports, "bpfrpt_proptype_OverscanIndicesGetterParams", ()=>bpfrpt_proptype_OverscanIndicesGetterParams);
parcelHelpers.export(exports, "bpfrpt_proptype_OverscanIndices", ()=>bpfrpt_proptype_OverscanIndices);
parcelHelpers.export(exports, "bpfrpt_proptype_OverscanIndicesGetter", ()=>bpfrpt_proptype_OverscanIndicesGetter);
parcelHelpers.export(exports, "bpfrpt_proptype_Alignment", ()=>bpfrpt_proptype_Alignment);
parcelHelpers.export(exports, "bpfrpt_proptype_VisibleCellRange", ()=>bpfrpt_proptype_VisibleCellRange);
var _react = require("react");
var _scalingCellSizeAndPositionManager = require("./utils/ScalingCellSizeAndPositionManager");
var _scalingCellSizeAndPositionManagerDefault = parcelHelpers.interopDefault(_scalingCellSizeAndPositionManager);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var bpfrpt_proptype_CellPosition = {
    "columnIndex": (0, _propTypesDefault.default).number.isRequired,
    "rowIndex": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_CellRendererParams = {
    "columnIndex": (0, _propTypesDefault.default).number.isRequired,
    "isScrolling": (0, _propTypesDefault.default).bool.isRequired,
    "isVisible": (0, _propTypesDefault.default).bool.isRequired,
    "key": (0, _propTypesDefault.default).string.isRequired,
    "parent": (0, _propTypesDefault.default).object.isRequired,
    "rowIndex": (0, _propTypesDefault.default).number.isRequired,
    "style": (0, _propTypesDefault.default).object.isRequired
};
var bpfrpt_proptype_CellRenderer = (0, (0, _propTypesDefault.default).func);
var bpfrpt_proptype_CellCache = (0, _propTypesDefault.default).objectOf((0, _propTypesDefault.default).node.isRequired);
var bpfrpt_proptype_StyleCache = (0, _propTypesDefault.default).objectOf((0, _propTypesDefault.default).object.isRequired);
var bpfrpt_proptype_CellRangeRendererParams = {
    "cellCache": (0, _propTypesDefault.default).objectOf((0, _propTypesDefault.default).node.isRequired).isRequired,
    "cellRenderer": (0, _propTypesDefault.default).func.isRequired,
    "columnSizeAndPositionManager": function columnSizeAndPositionManager() {
        return (typeof (0, _scalingCellSizeAndPositionManagerDefault.default) === "function" ? (0, _propTypesDefault.default).instanceOf((0, _scalingCellSizeAndPositionManagerDefault.default)).isRequired : (0, _propTypesDefault.default).any.isRequired).apply(this, arguments);
    },
    "columnStartIndex": (0, _propTypesDefault.default).number.isRequired,
    "columnStopIndex": (0, _propTypesDefault.default).number.isRequired,
    "deferredMeasurementCache": (0, _propTypesDefault.default).object,
    "horizontalOffsetAdjustment": (0, _propTypesDefault.default).number.isRequired,
    "isScrolling": (0, _propTypesDefault.default).bool.isRequired,
    "isScrollingOptOut": (0, _propTypesDefault.default).bool.isRequired,
    "parent": (0, _propTypesDefault.default).object.isRequired,
    "rowSizeAndPositionManager": function rowSizeAndPositionManager() {
        return (typeof (0, _scalingCellSizeAndPositionManagerDefault.default) === "function" ? (0, _propTypesDefault.default).instanceOf((0, _scalingCellSizeAndPositionManagerDefault.default)).isRequired : (0, _propTypesDefault.default).any.isRequired).apply(this, arguments);
    },
    "rowStartIndex": (0, _propTypesDefault.default).number.isRequired,
    "rowStopIndex": (0, _propTypesDefault.default).number.isRequired,
    "scrollLeft": (0, _propTypesDefault.default).number.isRequired,
    "scrollTop": (0, _propTypesDefault.default).number.isRequired,
    "styleCache": (0, _propTypesDefault.default).objectOf((0, _propTypesDefault.default).object.isRequired).isRequired,
    "verticalOffsetAdjustment": (0, _propTypesDefault.default).number.isRequired,
    "visibleColumnIndices": (0, _propTypesDefault.default).object.isRequired,
    "visibleRowIndices": (0, _propTypesDefault.default).object.isRequired
};
var bpfrpt_proptype_CellRangeRenderer = (0, (0, _propTypesDefault.default).func);
var bpfrpt_proptype_CellSizeGetter = (0, (0, _propTypesDefault.default).func);
var bpfrpt_proptype_CellSize = (0, _propTypesDefault.default).oneOfType([
    (0, _propTypesDefault.default).func,
    (0, _propTypesDefault.default).number
]);
var bpfrpt_proptype_NoContentRenderer = (0, (0, _propTypesDefault.default).func);
var bpfrpt_proptype_Scroll = {
    "clientHeight": (0, _propTypesDefault.default).number.isRequired,
    "clientWidth": (0, _propTypesDefault.default).number.isRequired,
    "scrollHeight": (0, _propTypesDefault.default).number.isRequired,
    "scrollLeft": (0, _propTypesDefault.default).number.isRequired,
    "scrollTop": (0, _propTypesDefault.default).number.isRequired,
    "scrollWidth": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_ScrollbarPresenceChange = {
    "horizontal": (0, _propTypesDefault.default).bool.isRequired,
    "vertical": (0, _propTypesDefault.default).bool.isRequired,
    "size": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_RenderedSection = {
    "columnOverscanStartIndex": (0, _propTypesDefault.default).number.isRequired,
    "columnOverscanStopIndex": (0, _propTypesDefault.default).number.isRequired,
    "columnStartIndex": (0, _propTypesDefault.default).number.isRequired,
    "columnStopIndex": (0, _propTypesDefault.default).number.isRequired,
    "rowOverscanStartIndex": (0, _propTypesDefault.default).number.isRequired,
    "rowOverscanStopIndex": (0, _propTypesDefault.default).number.isRequired,
    "rowStartIndex": (0, _propTypesDefault.default).number.isRequired,
    "rowStopIndex": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_OverscanIndicesGetterParams = {
    // One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
    "direction": (0, _propTypesDefault.default).oneOf([
        "horizontal",
        "vertical"
    ]).isRequired,
    // One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
    "scrollDirection": (0, _propTypesDefault.default).oneOf([
        -1,
        1
    ]).isRequired,
    // Number of rows or columns in the current axis
    "cellCount": (0, _propTypesDefault.default).number.isRequired,
    // Maximum number of cells to over-render in either direction
    "overscanCellsCount": (0, _propTypesDefault.default).number.isRequired,
    // Begin of range of visible cells
    "startIndex": (0, _propTypesDefault.default).number.isRequired,
    // End of range of visible cells
    "stopIndex": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_OverscanIndices = {
    "overscanStartIndex": (0, _propTypesDefault.default).number.isRequired,
    "overscanStopIndex": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_OverscanIndicesGetter = (0, (0, _propTypesDefault.default).func);
var bpfrpt_proptype_Alignment = (0, _propTypesDefault.default).oneOf([
    "auto",
    "end",
    "start",
    "center"
]);
var bpfrpt_proptype_VisibleCellRange = {
    "start": (0, _propTypesDefault.default).number,
    "stop": (0, _propTypesDefault.default).number
};

},{"react":"21dqq","./utils/ScalingCellSizeAndPositionManager":"eyS48","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a1uSw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMaxElementSize", ()=>getMaxElementSize);
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;
var isBrowser = function isBrowser() {
    return typeof window !== 'undefined';
};
var isChrome = function isChrome() {
    return !!window.chrome;
};
var getMaxElementSize = function getMaxElementSize() {
    if (isBrowser()) {
        if (isChrome()) return CHROME_MAX_ELEMENT_SIZE;
    }
    return DEFAULT_MAX_ELEMENT_SIZE;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kgXut":[function(require,module,exports,__globalThis) {
/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createCallbackMemoizer);
function createCallbackMemoizer() {
    var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var cachedIndices = {};
    return function(_ref) {
        var callback = _ref.callback, indices = _ref.indices;
        var keys = Object.keys(indices);
        var allInitialized = !requireAllKeys || keys.every(function(key) {
            var value = indices[key];
            return Array.isArray(value) ? value.length > 0 : value >= 0;
        });
        var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function(key) {
            var cachedValue = cachedIndices[key];
            var value = indices[key];
            return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
        });
        cachedIndices = indices;
        if (allInitialized && indexChanged) callback(indices);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3Qy9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SCROLL_DIRECTION_BACKWARD", ()=>SCROLL_DIRECTION_BACKWARD);
parcelHelpers.export(exports, "SCROLL_DIRECTION_FORWARD", ()=>SCROLL_DIRECTION_FORWARD);
parcelHelpers.export(exports, "SCROLL_DIRECTION_HORIZONTAL", ()=>SCROLL_DIRECTION_HORIZONTAL);
parcelHelpers.export(exports, "SCROLL_DIRECTION_VERTICAL", ()=>SCROLL_DIRECTION_VERTICAL);
parcelHelpers.export(exports, "default", ()=>defaultOverscanIndicesGetter);
var _types = require("./types");
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';
function defaultOverscanIndicesGetter(_ref) {
    var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, scrollDirection = _ref.scrollDirection, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
    if (scrollDirection === SCROLL_DIRECTION_FORWARD) return {
        overscanStartIndex: Math.max(0, startIndex),
        overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
    else return {
        overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
        overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
}

},{"./types":"1plCX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHipG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateScrollIndexHelper);
var _scalingCellSizeAndPositionManagerJs = require("./ScalingCellSizeAndPositionManager.js");
var _scalingCellSizeAndPositionManagerJsDefault = parcelHelpers.interopDefault(_scalingCellSizeAndPositionManagerJs);
var _types = require("../types");
function updateScrollIndexHelper(_ref) {
    var cellSize = _ref.cellSize, cellSizeAndPositionManager = _ref.cellSizeAndPositionManager, previousCellsCount = _ref.previousCellsCount, previousCellSize = _ref.previousCellSize, previousScrollToAlignment = _ref.previousScrollToAlignment, previousScrollToIndex = _ref.previousScrollToIndex, previousSize = _ref.previousSize, scrollOffset = _ref.scrollOffset, scrollToAlignment = _ref.scrollToAlignment, scrollToIndex = _ref.scrollToIndex, size = _ref.size, sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero, updateScrollIndexCallback = _ref.updateScrollIndexCallback;
    var cellCount = cellSizeAndPositionManager.getCellCount();
    var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
    var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize; // If we have a new scroll target OR if height/row-height has changed,
    // We should ensure that the scroll target is visible.
    if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) updateScrollIndexCallback(scrollToIndex); // If we don't have a selected item but list size or number of children have decreased,
    else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    {
        if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) updateScrollIndexCallback(cellCount - 1);
    }
}

},{"./ScalingCellSizeAndPositionManager.js":"eyS48","../types":"1plCX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBxuE":[function(require,module,exports,__globalThis) {
/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>defaultCellRangeRenderer);
var _types = require("./types");
function defaultCellRangeRenderer(_ref) {
    var cellCache = _ref.cellCache, cellRenderer = _ref.cellRenderer, columnSizeAndPositionManager = _ref.columnSizeAndPositionManager, columnStartIndex = _ref.columnStartIndex, columnStopIndex = _ref.columnStopIndex, deferredMeasurementCache = _ref.deferredMeasurementCache, horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment, isScrolling = _ref.isScrolling, isScrollingOptOut = _ref.isScrollingOptOut, parent = _ref.parent, rowSizeAndPositionManager = _ref.rowSizeAndPositionManager, rowStartIndex = _ref.rowStartIndex, rowStopIndex = _ref.rowStopIndex, styleCache = _ref.styleCache, verticalOffsetAdjustment = _ref.verticalOffsetAdjustment, visibleColumnIndices = _ref.visibleColumnIndices, visibleRowIndices = _ref.visibleRowIndices;
    var renderedCells = []; // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
    // User cannot scroll beyond these size limitations.
    // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
    // We should never cache styles for compressed offsets though as this can lead to bugs.
    // See issue #576 for more.
    var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();
    var canCacheStyle = !isScrolling && !areOffsetsAdjusted;
    for(var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++){
        var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);
        for(var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++){
            var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
            var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
            var key = "".concat(rowIndex, "-").concat(columnIndex);
            var style = void 0; // Cache style objects so shallow-compare doesn't re-render unnecessarily.
            if (canCacheStyle && styleCache[key]) style = styleCache[key];
            else // In deferred mode, cells will be initially rendered before we know their size.
            // Don't interfere with CellMeasurer's measurements by setting an invalid size.
            if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) // Position not-yet-measured cells at top/left 0,0,
            // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
            // Positioning them further to the right/bottom influences their measured size.
            style = {
                height: 'auto',
                left: 0,
                position: 'absolute',
                top: 0,
                width: 'auto'
            };
            else {
                style = {
                    height: rowDatum.size,
                    left: columnDatum.offset + horizontalOffsetAdjustment,
                    position: 'absolute',
                    top: rowDatum.offset + verticalOffsetAdjustment,
                    width: columnDatum.size
                };
                styleCache[key] = style;
            }
            var cellRendererParams = {
                columnIndex: columnIndex,
                isScrolling: isScrolling,
                isVisible: isVisible,
                key: key,
                parent: parent,
                rowIndex: rowIndex,
                style: style
            };
            var renderedCell = void 0; // Avoid re-creating cells while scrolling.
            // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
            // If a scroll is in progress- cache and reuse cells.
            // This cache will be thrown away once scrolling completes.
            // However if we are scaling scroll positions and sizes, we should also avoid caching.
            // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
            // For more info refer to issue #395
            //
            // If isScrollingOptOut is specified, we always cache cells.
            // For more info refer to issue #1028
            if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
                if (!cellCache[key]) cellCache[key] = cellRenderer(cellRendererParams);
                renderedCell = cellCache[key]; // If the user is no longer scrolling, don't cache cells.
            // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
            } else renderedCell = cellRenderer(cellRendererParams);
            if (renderedCell == null || renderedCell === false) continue;
            warnAboutMissingStyle(parent, renderedCell);
            renderedCells.push(renderedCell);
        }
    }
    return renderedCells;
}
function warnAboutMissingStyle(parent, renderedCell) {
    if (renderedCell) {
        // If the direct child is a CellMeasurer, then we should check its child
        // See issue #611
        if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) renderedCell = renderedCell.props.children;
        if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
            parent.__warnedAboutMissingStyle = true;
            console.warn('Rendered cell should include style property for positioning.');
        }
    }
}

},{"./types":"1plCX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fMoXC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelAnimationTimeout", ()=>cancelAnimationTimeout);
parcelHelpers.export(exports, "requestAnimationTimeout", ()=>requestAnimationTimeout);
parcelHelpers.export(exports, "bpfrpt_proptype_AnimationTimeoutId", ()=>bpfrpt_proptype_AnimationTimeoutId);
var _animationFrame = require("./animationFrame");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var bpfrpt_proptype_AnimationTimeoutId = {
    "id": (0, _propTypesDefault.default).number.isRequired
};
var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
    return (0, _animationFrame.caf)(frame.id);
};
var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
    var start; // wait for end of processing current event handler, because event handler may be long
    Promise.resolve().then(function() {
        start = Date.now();
    });
    var timeout = function timeout() {
        if (Date.now() - start >= delay) callback.call();
        else frame.id = (0, _animationFrame.raf)(timeout);
    };
    var frame = {
        id: (0, _animationFrame.raf)(timeout)
    };
    return frame;
};

},{"./animationFrame":"1hqpo","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hqpo":[function(require,module,exports,__globalThis) {
// Properly handle server-side rendering.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "raf", ()=>raf);
parcelHelpers.export(exports, "caf", ()=>caf);
var win;
if (typeof window !== 'undefined') win = window;
else if (typeof self !== 'undefined') win = self;
else win = {};
 // requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function(callback) {
    return win.setTimeout(callback, 1000 / 60);
};
var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function(id) {
    win.clearTimeout(id);
};
var raf = request;
var caf = cancel;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZ8kM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SCROLL_DIRECTION_BACKWARD", ()=>SCROLL_DIRECTION_BACKWARD);
parcelHelpers.export(exports, "SCROLL_DIRECTION_FORWARD", ()=>SCROLL_DIRECTION_FORWARD);
parcelHelpers.export(exports, "SCROLL_DIRECTION_HORIZONTAL", ()=>SCROLL_DIRECTION_HORIZONTAL);
parcelHelpers.export(exports, "SCROLL_DIRECTION_VERTICAL", ()=>SCROLL_DIRECTION_VERTICAL);
parcelHelpers.export(exports, "default", ()=>defaultOverscanIndicesGetter);
var _types = require("./types");
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';
function defaultOverscanIndicesGetter(_ref) {
    var cellCount = _ref.cellCount, overscanCellsCount = _ref.overscanCellsCount, scrollDirection = _ref.scrollDirection, startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
    // Make sure we render at least 1 cell extra before and after (except near boundaries)
    // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
    // For more info see issues #625
    overscanCellsCount = Math.max(1, overscanCellsCount);
    if (scrollDirection === SCROLL_DIRECTION_FORWARD) return {
        overscanStartIndex: Math.max(0, startIndex - 1),
        overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
    else return {
        overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
        overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
}

},{"./types":"1plCX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ho5QP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bpfrpt_proptype_ScrollIndices", ()=>bpfrpt_proptype_ScrollIndices);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var bpfrpt_proptype_ScrollIndices = {
    "scrollToColumn": (0, _propTypesDefault.default).number.isRequired,
    "scrollToRow": (0, _propTypesDefault.default).number.isRequired
};

},{"prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47gGK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _autoSizerDefault.default));
parcelHelpers.export(exports, "AutoSizer", ()=>(0, _autoSizerDefault.default));
var _autoSizer = require("./AutoSizer");
var _autoSizerDefault = parcelHelpers.interopDefault(_autoSizer);

},{"./AutoSizer":"eBmnD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eBmnD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>AutoSizer);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _react = require("react");
var _detectElementResize = require("../vendor/detectElementResize");
var _detectElementResizeDefault = parcelHelpers.interopDefault(_detectElementResize);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _class, _temp;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var AutoSizer = (_temp = _class = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(AutoSizer, _React$Component);
    function AutoSizer() {
        var _getPrototypeOf2;
        var _this;
        (0, _classCallCheckDefault.default)(this, AutoSizer);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, _possibleConstructorReturnDefault.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOfDefault.default)(AutoSizer)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "state", {
            height: _this.props.defaultHeight || 0,
            width: _this.props.defaultWidth || 0
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_parentNode", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_autoSizer", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_window", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_detectElementResize", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onResize", function() {
            var _this$props = _this.props, disableHeight = _this$props.disableHeight, disableWidth = _this$props.disableWidth, onResize = _this$props.onResize;
            if (_this._parentNode) {
                // Guard against AutoSizer component being removed from the DOM immediately after being added.
                // This can result in invalid style values which can result in NaN values if we don't handle them.
                // See issue #150 for more context.
                var height = _this._parentNode.offsetHeight || 0;
                var width = _this._parentNode.offsetWidth || 0;
                var win = _this._window || window;
                var style = win.getComputedStyle(_this._parentNode) || {};
                var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
                var paddingRight = parseInt(style.paddingRight, 10) || 0;
                var paddingTop = parseInt(style.paddingTop, 10) || 0;
                var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
                var newHeight = height - paddingTop - paddingBottom;
                var newWidth = width - paddingLeft - paddingRight;
                if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
                    _this.setState({
                        height: height - paddingTop - paddingBottom,
                        width: width - paddingLeft - paddingRight
                    });
                    onResize({
                        height: height,
                        width: width
                    });
                }
            }
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_setRef", function(autoSizer) {
            _this._autoSizer = autoSizer;
        });
        return _this;
    }
    (0, _createClassDefault.default)(AutoSizer, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var nonce = this.props.nonce;
                if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
                    // Delay access of parentNode until mount.
                    // This handles edge-cases where the component has already been unmounted before its ref has been set,
                    // As well as libraries like react-lite which have a slightly different lifecycle.
                    this._parentNode = this._autoSizer.parentNode;
                    this._window = this._autoSizer.parentNode.ownerDocument.defaultView; // Defer requiring resize handler in order to support server-side rendering.
                    // See issue #41
                    this._detectElementResize = (0, _detectElementResizeDefault.default)(nonce, this._window);
                    this._detectElementResize.addResizeListener(this._parentNode, this._onResize);
                    this._onResize();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this._detectElementResize && this._parentNode) this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, children = _this$props2.children, className = _this$props2.className, disableHeight = _this$props2.disableHeight, disableWidth = _this$props2.disableWidth, style = _this$props2.style;
                var _this$state = this.state, height = _this$state.height, width = _this$state.width; // Outer div should not force width/height since that may prevent containers from shrinking.
                // Inner component should overflow and use calculated width/height.
                // See issue #68 for more information.
                var outerStyle = {
                    overflow: 'visible'
                };
                var childParams = {};
                if (!disableHeight) {
                    outerStyle.height = 0;
                    childParams.height = height;
                }
                if (!disableWidth) {
                    outerStyle.width = 0;
                    childParams.width = width;
                }
                /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */ return _react.createElement("div", {
                    className: className,
                    ref: this._setRef,
                    style: _objectSpread({}, outerStyle, {}, style)
                }, children(childParams));
            }
        }
    ]);
    return AutoSizer;
}(_react.Component), (0, _definePropertyDefault.default)(_class, "propTypes", {
    /** Function responsible for rendering children.*/ "children": (0, _propTypesDefault.default).func.isRequired,
    /** Optional custom CSS class name to attach to root AutoSizer element.  */ "className": (0, _propTypesDefault.default).string,
    /** Default height to use for initial render; useful for SSR */ "defaultHeight": (0, _propTypesDefault.default).number,
    /** Default width to use for initial render; useful for SSR */ "defaultWidth": (0, _propTypesDefault.default).number,
    /** Disable dynamic :height property */ "disableHeight": (0, _propTypesDefault.default).bool.isRequired,
    /** Disable dynamic :width property */ "disableWidth": (0, _propTypesDefault.default).bool.isRequired,
    /** Nonce of the inlined stylesheet for Content Security Policy */ "nonce": (0, _propTypesDefault.default).string,
    /** Callback to be invoked on-resize */ "onResize": (0, _propTypesDefault.default).func.isRequired,
    /** Optional inline style */ "style": (0, _propTypesDefault.default).object
}), _temp);
(0, _definePropertyDefault.default)(AutoSizer, "defaultProps", {
    onResize: function onResize() {},
    disableHeight: false,
    disableWidth: false,
    style: {}
});

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","react":"21dqq","../vendor/detectElementResize":"g3FrH","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g3FrH":[function(require,module,exports,__globalThis) {
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 * 5) Added support for injecting custom window object
 **/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createDetectElementResize);
var global = arguments[3];
function createDetectElementResize(nonce, hostWindow) {
    // Check `document` and `window` in case of server-side rendering
    var _window;
    if (typeof hostWindow !== 'undefined') _window = hostWindow;
    else if (typeof window !== 'undefined') _window = window;
    else if (typeof self !== 'undefined') _window = self;
    else _window = global;
    var attachEvent = typeof _window.document !== 'undefined' && _window.document.attachEvent;
    if (!attachEvent) {
        var requestFrame = function() {
            var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function(fn) {
                return _window.setTimeout(fn, 20);
            };
            return function(fn) {
                return raf(fn);
            };
        }();
        var cancelFrame = function() {
            var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
            return function(id) {
                return cancel(id);
            };
        }();
        var resetTriggers = function resetTriggers(element) {
            var triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
            contract.scrollLeft = contract.scrollWidth;
            contract.scrollTop = contract.scrollHeight;
            expandChild.style.width = expand.offsetWidth + 1 + 'px';
            expandChild.style.height = expand.offsetHeight + 1 + 'px';
            expand.scrollLeft = expand.scrollWidth;
            expand.scrollTop = expand.scrollHeight;
        };
        var checkTriggers = function checkTriggers(element) {
            return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
        };
        var scrollListener = function scrollListener(e) {
            // Don't measure (which forces) reflow for scrolls that happen inside of children!
            if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) return;
            var element = this;
            resetTriggers(this);
            if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
            this.__resizeRAF__ = requestFrame(function() {
                if (checkTriggers(element)) {
                    element.__resizeLast__.width = element.offsetWidth;
                    element.__resizeLast__.height = element.offsetHeight;
                    element.__resizeListeners__.forEach(function(fn) {
                        fn.call(element, e);
                    });
                }
            });
        };
        /* Detect CSS Animations support to detect element display/re-attach */ var animation = false, keyframeprefix = '', animationstartevent = 'animationstart', domPrefixes = 'Webkit Moz O ms'.split(' '), startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '), pfx = '';
        var elm = _window.document.createElement('fakeelement');
        if (elm.style.animationName !== undefined) animation = true;
        if (animation === false) {
            for(var i = 0; i < domPrefixes.length; i++)if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                pfx = domPrefixes[i];
                keyframeprefix = '-' + pfx.toLowerCase() + '-';
                animationstartevent = startEvents[i];
                animation = true;
                break;
            }
        }
        var animationName = 'resizeanim';
        var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
        var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
    }
    var createStyles = function createStyles(doc) {
        if (!doc.getElementById('detectElementResize')) {
            //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
            var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName('head')[0], style = doc.createElement('style');
            style.id = 'detectElementResize';
            style.type = 'text/css';
            if (nonce != null) style.setAttribute('nonce', nonce);
            if (style.styleSheet) style.styleSheet.cssText = css;
            else style.appendChild(doc.createTextNode(css));
            head.appendChild(style);
        }
    };
    var addResizeListener = function addResizeListener(element, fn) {
        if (attachEvent) element.attachEvent('onresize', fn);
        else {
            if (!element.__resizeTriggers__) {
                var doc = element.ownerDocument;
                var elementStyle = _window.getComputedStyle(element);
                if (elementStyle && elementStyle.position == 'static') element.style.position = 'relative';
                createStyles(doc);
                element.__resizeLast__ = {};
                element.__resizeListeners__ = [];
                (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
                var resizeTriggersHtml = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
                if (window.trustedTypes) {
                    var staticPolicy = trustedTypes.createPolicy('react-virtualized-auto-sizer', {
                        createHTML: function createHTML() {
                            return resizeTriggersHtml;
                        }
                    });
                    element.__resizeTriggers__.innerHTML = staticPolicy.createHTML('');
                } else element.__resizeTriggers__.innerHTML = resizeTriggersHtml;
                element.appendChild(element.__resizeTriggers__);
                resetTriggers(element);
                element.addEventListener('scroll', scrollListener, true);
                /* Listen for a css animation to detect element display/re-attach */ if (animationstartevent) {
                    element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
                        if (e.animationName == animationName) resetTriggers(element);
                    };
                    element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
                }
            }
            element.__resizeListeners__.push(fn);
        }
    };
    var removeResizeListener = function removeResizeListener(element, fn) {
        if (attachEvent) element.detachEvent('onresize', fn);
        else {
            element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
            if (!element.__resizeListeners__.length) {
                element.removeEventListener('scroll', scrollListener, true);
                if (element.__resizeTriggers__.__animationListener__) {
                    element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
                    element.__resizeTriggers__.__animationListener__ = null;
                }
                try {
                    element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
                } catch (e) {}
            }
        }
    };
    return {
        addResizeListener: addResizeListener,
        removeResizeListener: removeResizeListener
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVyUo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CellMeasurer", ()=>(0, _cellMeasurerDefault.default));
parcelHelpers.export(exports, "CellMeasurerCache", ()=>(0, _cellMeasurerCacheDefault.default));
var _cellMeasurer = require("./CellMeasurer");
var _cellMeasurerDefault = parcelHelpers.interopDefault(_cellMeasurer);
var _cellMeasurerCache = require("./CellMeasurerCache");
var _cellMeasurerCacheDefault = parcelHelpers.interopDefault(_cellMeasurerCache);
exports.default = (0, _cellMeasurerDefault.default);

},{"./CellMeasurer":"lF9gF","./CellMeasurerCache":"aFDQR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lF9gF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CellMeasurer);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _react = require("react");
var _reactDom = require("react-dom");
var _types = require("./types");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _class, _temp;
/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */ var CellMeasurer = (_temp = _class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(CellMeasurer, _React$PureComponent);
    function CellMeasurer() {
        var _getPrototypeOf2;
        var _this;
        (0, _classCallCheckDefault.default)(this, CellMeasurer);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, _possibleConstructorReturnDefault.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOfDefault.default)(CellMeasurer)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_child", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_measure", function() {
            var _this$props = _this.props, cache = _this$props.cache, _this$props$columnInd = _this$props.columnIndex, columnIndex = _this$props$columnInd === void 0 ? 0 : _this$props$columnInd, parent = _this$props.parent, _this$props$rowIndex = _this$props.rowIndex, rowIndex = _this$props$rowIndex === void 0 ? _this.props.index || 0 : _this$props$rowIndex;
            var _this$_getCellMeasure = _this._getCellMeasurements(), height = _this$_getCellMeasure.height, width = _this$_getCellMeasure.width;
            if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
                cache.set(rowIndex, columnIndex, width, height);
                if (parent && typeof parent.recomputeGridSize === 'function') parent.recomputeGridSize({
                    columnIndex: columnIndex,
                    rowIndex: rowIndex
                });
            }
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_registerChild", function(element) {
            if (element && !(element instanceof Element)) console.warn('CellMeasurer registerChild expects to be passed Element or null');
            _this._child = element;
            if (element) _this._maybeMeasureCell();
        });
        return _this;
    }
    (0, _createClassDefault.default)(CellMeasurer, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._maybeMeasureCell();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this._maybeMeasureCell();
            }
        },
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                return typeof children === 'function' ? children({
                    measure: this._measure,
                    registerChild: this._registerChild
                }) : children;
            }
        },
        {
            key: "_getCellMeasurements",
            value: function _getCellMeasurements() {
                var cache = this.props.cache;
                var node = this._child || (0, _reactDom.findDOMNode)(this); // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height
                if (node && node.ownerDocument && node.ownerDocument.defaultView && node instanceof node.ownerDocument.defaultView.HTMLElement) {
                    var styleWidth = node.style.width;
                    var styleHeight = node.style.height; // If we are re-measuring a cell that has already been measured,
                    // It will have a hard-coded width/height from the previous measurement.
                    // The fact that we are measuring indicates this measurement is probably stale,
                    // So explicitly clear it out (eg set to "auto") so we can recalculate.
                    // See issue #593 for more info.
                    // Even if we are measuring initially- if we're inside of a MultiGrid component,
                    // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
                    // eg top/left Grid renders before bottom/right Grid
                    // Since the CellMeasurerCache is shared between them this taints derived cell size values.
                    if (!cache.hasFixedWidth()) node.style.width = 'auto';
                    if (!cache.hasFixedHeight()) node.style.height = 'auto';
                    var height = Math.ceil(node.offsetHeight);
                    var width = Math.ceil(node.offsetWidth); // Reset after measuring to avoid breaking styles; see #660
                    if (styleWidth) node.style.width = styleWidth;
                    if (styleHeight) node.style.height = styleHeight;
                    return {
                        height: height,
                        width: width
                    };
                } else return {
                    height: 0,
                    width: 0
                };
            }
        },
        {
            key: "_maybeMeasureCell",
            value: function _maybeMeasureCell() {
                var _this$props2 = this.props, cache = _this$props2.cache, _this$props2$columnIn = _this$props2.columnIndex, columnIndex = _this$props2$columnIn === void 0 ? 0 : _this$props2$columnIn, parent = _this$props2.parent, _this$props2$rowIndex = _this$props2.rowIndex, rowIndex = _this$props2$rowIndex === void 0 ? this.props.index || 0 : _this$props2$rowIndex;
                if (!cache.has(rowIndex, columnIndex)) {
                    var _this$_getCellMeasure2 = this._getCellMeasurements(), height = _this$_getCellMeasure2.height, width = _this$_getCellMeasure2.width;
                    cache.set(rowIndex, columnIndex, width, height); // If size has changed, let Grid know to re-render.
                    if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') parent.invalidateCellSizeAfterRender({
                        columnIndex: columnIndex,
                        rowIndex: rowIndex
                    });
                }
            }
        }
    ]);
    return CellMeasurer;
}(_react.PureComponent), (0, _definePropertyDefault.default)(_class, "propTypes", {
    "cache": function cache() {
        return (typeof (0, _types.bpfrpt_proptype_CellMeasureCache) === "function" ? (0, _types.bpfrpt_proptype_CellMeasureCache).isRequired ? (0, _types.bpfrpt_proptype_CellMeasureCache).isRequired : (0, _types.bpfrpt_proptype_CellMeasureCache) : (0, _propTypesDefault.default).shape((0, _types.bpfrpt_proptype_CellMeasureCache)).isRequired).apply(this, arguments);
    },
    "children": (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).func,
        (0, _propTypesDefault.default).node
    ]).isRequired,
    "columnIndex": (0, _propTypesDefault.default).number,
    "index": (0, _propTypesDefault.default).number,
    "parent": (0, _propTypesDefault.default).shape({
        invalidateCellSizeAfterRender: (0, _propTypesDefault.default).func,
        recomputeGridSize: (0, _propTypesDefault.default).func
    }).isRequired,
    "rowIndex": (0, _propTypesDefault.default).number
}), _temp); // Used for DEV mode warning check
(0, _definePropertyDefault.default)(CellMeasurer, "__internalCellMeasurerFlag", false);
CellMeasurer.__internalCellMeasurerFlag = true;

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","react":"21dqq","react-dom":"j6uA9","./types":"iBqXr","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBqXr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bpfrpt_proptype_CellMeasureCache", ()=>bpfrpt_proptype_CellMeasureCache);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var bpfrpt_proptype_CellMeasureCache = {
    "hasFixedWidth": (0, _propTypesDefault.default).func.isRequired,
    "hasFixedHeight": (0, _propTypesDefault.default).func.isRequired,
    "has": (0, _propTypesDefault.default).func.isRequired,
    "set": (0, _propTypesDefault.default).func.isRequired,
    "getHeight": (0, _propTypesDefault.default).func.isRequired,
    "getWidth": (0, _propTypesDefault.default).func.isRequired
};

},{"prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFDQR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_HEIGHT", ()=>DEFAULT_HEIGHT);
parcelHelpers.export(exports, "DEFAULT_WIDTH", ()=>DEFAULT_WIDTH);
parcelHelpers.export(exports, "default", ()=>CellMeasurerCache);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _types = require("./types");
var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 100; // Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.
/**
 * Caches measurements for a given cell.
 */ var CellMeasurerCache = /*#__PURE__*/ function() {
    function CellMeasurerCache() {
        var _this = this;
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheckDefault.default)(this, CellMeasurerCache);
        (0, _definePropertyDefault.default)(this, "_cellHeightCache", {});
        (0, _definePropertyDefault.default)(this, "_cellWidthCache", {});
        (0, _definePropertyDefault.default)(this, "_columnWidthCache", {});
        (0, _definePropertyDefault.default)(this, "_rowHeightCache", {});
        (0, _definePropertyDefault.default)(this, "_defaultHeight", void 0);
        (0, _definePropertyDefault.default)(this, "_defaultWidth", void 0);
        (0, _definePropertyDefault.default)(this, "_minHeight", void 0);
        (0, _definePropertyDefault.default)(this, "_minWidth", void 0);
        (0, _definePropertyDefault.default)(this, "_keyMapper", void 0);
        (0, _definePropertyDefault.default)(this, "_hasFixedHeight", void 0);
        (0, _definePropertyDefault.default)(this, "_hasFixedWidth", void 0);
        (0, _definePropertyDefault.default)(this, "_columnCount", 0);
        (0, _definePropertyDefault.default)(this, "_rowCount", 0);
        (0, _definePropertyDefault.default)(this, "columnWidth", function(_ref) {
            var index = _ref.index;
            var key = _this._keyMapper(0, index);
            return _this._columnWidthCache[key] !== undefined ? _this._columnWidthCache[key] : _this._defaultWidth;
        });
        (0, _definePropertyDefault.default)(this, "rowHeight", function(_ref2) {
            var index = _ref2.index;
            var key = _this._keyMapper(index, 0);
            return _this._rowHeightCache[key] !== undefined ? _this._rowHeightCache[key] : _this._defaultHeight;
        });
        var defaultHeight = params.defaultHeight, defaultWidth = params.defaultWidth, fixedHeight = params.fixedHeight, fixedWidth = params.fixedWidth, keyMapper = params.keyMapper, minHeight = params.minHeight, minWidth = params.minWidth;
        this._hasFixedHeight = fixedHeight === true;
        this._hasFixedWidth = fixedWidth === true;
        this._minHeight = minHeight || 0;
        this._minWidth = minWidth || 0;
        this._keyMapper = keyMapper || defaultKeyMapper;
        this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
        this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);
        if (this._hasFixedHeight === false && this._hasFixedWidth === false) console.warn("CellMeasurerCache should only measure a cell's width or height. You have configured CellMeasurerCache to measure both. This will result in poor performance.");
        if (this._hasFixedHeight === false && this._defaultHeight === 0) console.warn("Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. Failing to do so will lead to unnecessary layout and poor performance.");
        if (this._hasFixedWidth === false && this._defaultWidth === 0) console.warn("Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. Failing to do so will lead to unnecessary layout and poor performance.");
    }
    (0, _createClassDefault.default)(CellMeasurerCache, [
        {
            key: "clear",
            value: function clear(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var key = this._keyMapper(rowIndex, columnIndex);
                delete this._cellHeightCache[key];
                delete this._cellWidthCache[key];
                this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
            }
        },
        {
            key: "clearAll",
            value: function clearAll() {
                this._cellHeightCache = {};
                this._cellWidthCache = {};
                this._columnWidthCache = {};
                this._rowHeightCache = {};
                this._rowCount = 0;
                this._columnCount = 0;
            }
        },
        {
            key: "hasFixedHeight",
            value: function hasFixedHeight() {
                return this._hasFixedHeight;
            }
        },
        {
            key: "hasFixedWidth",
            value: function hasFixedWidth() {
                return this._hasFixedWidth;
            }
        },
        {
            key: "getHeight",
            value: function getHeight(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (this._hasFixedHeight) return this._defaultHeight;
                else {
                    var _key = this._keyMapper(rowIndex, columnIndex);
                    return this._cellHeightCache[_key] !== undefined ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
                }
            }
        },
        {
            key: "getWidth",
            value: function getWidth(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (this._hasFixedWidth) return this._defaultWidth;
                else {
                    var _key2 = this._keyMapper(rowIndex, columnIndex);
                    return this._cellWidthCache[_key2] !== undefined ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
                }
            }
        },
        {
            key: "has",
            value: function has(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var key = this._keyMapper(rowIndex, columnIndex);
                return this._cellHeightCache[key] !== undefined;
            }
        },
        {
            key: "set",
            value: function set(rowIndex, columnIndex, width, height) {
                var key = this._keyMapper(rowIndex, columnIndex);
                if (columnIndex >= this._columnCount) this._columnCount = columnIndex + 1;
                if (rowIndex >= this._rowCount) this._rowCount = rowIndex + 1;
                 // Size is cached per cell so we don't have to re-measure if cells are re-ordered.
                this._cellHeightCache[key] = height;
                this._cellWidthCache[key] = width;
                this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
            }
        },
        {
            key: "_updateCachedColumnAndRowSizes",
            value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
                // :columnWidth and :rowHeight are derived based on all cells in a column/row.
                // Pre-cache these derived values for faster lookup later.
                // Reads are expected to occur more frequently than writes in this case.
                // Only update non-fixed dimensions though to avoid doing unnecessary work.
                if (!this._hasFixedWidth) {
                    var columnWidth = 0;
                    for(var i = 0; i < this._rowCount; i++)columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
                    var columnKey = this._keyMapper(0, columnIndex);
                    this._columnWidthCache[columnKey] = columnWidth;
                }
                if (!this._hasFixedHeight) {
                    var rowHeight = 0;
                    for(var _i = 0; _i < this._columnCount; _i++)rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
                    var rowKey = this._keyMapper(rowIndex, 0);
                    this._rowHeightCache[rowKey] = rowHeight;
                }
            }
        },
        {
            key: "defaultHeight",
            get: function get() {
                return this._defaultHeight;
            }
        },
        {
            key: "defaultWidth",
            get: function get() {
                return this._defaultWidth;
            }
        }
    ]);
    return CellMeasurerCache;
}();
function defaultKeyMapper(rowIndex, columnIndex) {
    return "".concat(rowIndex, "-").concat(columnIndex);
}

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/defineProperty":"4x6r7","./types":"iBqXr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21lLg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Collection", ()=>(0, _collectionDefault.default));
var _collection = require("./Collection");
var _collectionDefault = parcelHelpers.interopDefault(_collection);
exports.default = (0, _collectionDefault.default);

},{"./Collection":"btCQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btCQV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Collection);
var _extends = require("@babel/runtime/helpers/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _collectionView = require("./CollectionView");
var _collectionViewDefault = parcelHelpers.interopDefault(_collectionView);
var _calculateSizeAndPositionData = require("./utils/calculateSizeAndPositionData");
var _calculateSizeAndPositionDataDefault = parcelHelpers.interopDefault(_calculateSizeAndPositionData);
var _getUpdatedOffsetForIndex = require("../utils/getUpdatedOffsetForIndex");
var _getUpdatedOffsetForIndexDefault = parcelHelpers.interopDefault(_getUpdatedOffsetForIndex);
var _types = require("./types");
/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */ var Collection = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(Collection, _React$PureComponent);
    function Collection(props, context) {
        var _this;
        (0, _classCallCheckDefault.default)(this, Collection);
        _this = (0, _possibleConstructorReturnDefault.default)(this, (0, _getPrototypeOfDefault.default)(Collection).call(this, props, context));
        _this._cellMetadata = [];
        _this._lastRenderedCellIndices = []; // Cell cache during scroll (for performance)
        _this._cellCache = [];
        _this._isScrollingChange = _this._isScrollingChange.bind((0, _assertThisInitializedDefault.default)(_this));
        _this._setCollectionViewRef = _this._setCollectionViewRef.bind((0, _assertThisInitializedDefault.default)(_this));
        return _this;
    }
    (0, _createClassDefault.default)(Collection, [
        {
            key: "forceUpdate",
            value: function forceUpdate() {
                if (this._collectionView !== undefined) this._collectionView.forceUpdate();
            }
        },
        {
            key: "recomputeCellSizesAndPositions",
            value: function recomputeCellSizesAndPositions() {
                this._cellCache = [];
                this._collectionView.recomputeCellSizesAndPositions();
            }
        },
        {
            key: "render",
            value: function render() {
                var props = (0, _extendsDefault.default)({}, this.props);
                return _react.createElement((0, _collectionViewDefault.default), (0, _extendsDefault.default)({
                    cellLayoutManager: this,
                    isScrollingChange: this._isScrollingChange,
                    ref: this._setCollectionViewRef
                }, props));
            }
        },
        {
            key: "calculateSizeAndPositionData",
            value: function calculateSizeAndPositionData() {
                var _this$props = this.props, cellCount = _this$props.cellCount, cellSizeAndPositionGetter = _this$props.cellSizeAndPositionGetter, sectionSize = _this$props.sectionSize;
                var data = (0, _calculateSizeAndPositionDataDefault.default)({
                    cellCount: cellCount,
                    cellSizeAndPositionGetter: cellSizeAndPositionGetter,
                    sectionSize: sectionSize
                });
                this._cellMetadata = data.cellMetadata;
                this._sectionManager = data.sectionManager;
                this._height = data.height;
                this._width = data.width;
            }
        },
        {
            key: "getLastRenderedIndices",
            value: function getLastRenderedIndices() {
                return this._lastRenderedCellIndices;
            }
        },
        {
            key: "getScrollPositionForCell",
            value: function getScrollPositionForCell(_ref) {
                var align = _ref.align, cellIndex = _ref.cellIndex, height = _ref.height, scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, width = _ref.width;
                var cellCount = this.props.cellCount;
                if (cellIndex >= 0 && cellIndex < cellCount) {
                    var cellMetadata = this._cellMetadata[cellIndex];
                    scrollLeft = (0, _getUpdatedOffsetForIndexDefault.default)({
                        align: align,
                        cellOffset: cellMetadata.x,
                        cellSize: cellMetadata.width,
                        containerSize: width,
                        currentOffset: scrollLeft,
                        targetIndex: cellIndex
                    });
                    scrollTop = (0, _getUpdatedOffsetForIndexDefault.default)({
                        align: align,
                        cellOffset: cellMetadata.y,
                        cellSize: cellMetadata.height,
                        containerSize: height,
                        currentOffset: scrollTop,
                        targetIndex: cellIndex
                    });
                }
                return {
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                };
            }
        },
        {
            key: "getTotalSize",
            value: function getTotalSize() {
                return {
                    height: this._height,
                    width: this._width
                };
            }
        },
        {
            key: "cellRenderers",
            value: function cellRenderers(_ref2) {
                var _this2 = this;
                var height = _ref2.height, isScrolling = _ref2.isScrolling, width = _ref2.width, x = _ref2.x, y = _ref2.y;
                var _this$props2 = this.props, cellGroupRenderer = _this$props2.cellGroupRenderer, cellRenderer = _this$props2.cellRenderer; // Store for later calls to getLastRenderedIndices()
                this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
                    height: height,
                    width: width,
                    x: x,
                    y: y
                });
                return cellGroupRenderer({
                    cellCache: this._cellCache,
                    cellRenderer: cellRenderer,
                    cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
                        var index = _ref3.index;
                        return _this2._sectionManager.getCellMetadata({
                            index: index
                        });
                    },
                    indices: this._lastRenderedCellIndices,
                    isScrolling: isScrolling
                });
            }
        },
        {
            key: "_isScrollingChange",
            value: function _isScrollingChange(isScrolling) {
                if (!isScrolling) this._cellCache = [];
            }
        },
        {
            key: "_setCollectionViewRef",
            value: function _setCollectionViewRef(ref) {
                this._collectionView = ref;
            }
        }
    ]);
    return Collection;
}(_react.PureComponent);
(0, _definePropertyDefault.default)(Collection, "defaultProps", {
    'aria-label': 'grid',
    cellGroupRenderer: defaultCellGroupRenderer
});
Collection.propTypes = {
    'aria-label': (0, _propTypesDefault.default).string,
    /**
   * Number of cells in Collection.
   */ cellCount: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Responsible for rendering a group of cells given their indices.
   * Should implement the following interface: ({
   *   cellSizeAndPositionGetter:Function,
   *   indices: Array<number>,
   *   cellRenderer: Function
   * }): Array<PropTypes.node>
   */ cellGroupRenderer: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Responsible for rendering a cell given an row and column index.
   * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
   */ cellRenderer: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Callback responsible for returning size and offset/position information for a given cell (index).
   * ({ index: number }): { height: number, width: number, x: number, y: number }
   */ cellSizeAndPositionGetter: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Optionally override the size of the sections a Collection's cells are split into.
   */ sectionSize: (0, _propTypesDefault.default).number
};
function defaultCellGroupRenderer(_ref4) {
    var cellCache = _ref4.cellCache, cellRenderer = _ref4.cellRenderer, cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter, indices = _ref4.indices, isScrolling = _ref4.isScrolling;
    return indices.map(function(index) {
        var cellMetadata = cellSizeAndPositionGetter({
            index: index
        });
        var cellRendererProps = {
            index: index,
            isScrolling: isScrolling,
            key: index,
            style: {
                height: cellMetadata.height,
                left: cellMetadata.x,
                position: 'absolute',
                top: cellMetadata.y,
                width: cellMetadata.width
            }
        }; // Avoid re-creating cells while scrolling.
        // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
        // If a scroll is in progress- cache and reuse cells.
        // This cache will be thrown away once scrolling complets.
        if (isScrolling) {
            if (!(index in cellCache)) cellCache[index] = cellRenderer(cellRendererProps);
            return cellCache[index];
        } else return cellRenderer(cellRendererProps);
    }).filter(function(renderedCell) {
        return !!renderedCell;
    });
}

},{"@babel/runtime/helpers/extends":"vw3vn","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","prop-types":"7wKI2","react":"21dqq","./CollectionView":"aAraJ","./utils/calculateSizeAndPositionData":"cCtnR","../utils/getUpdatedOffsetForIndex":"b0M10","./types":"226Ys","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAraJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _reactLifecyclesCompat = require("react-lifecycles-compat");
var _createCallbackMemoizer = require("../utils/createCallbackMemoizer");
var _createCallbackMemoizerDefault = parcelHelpers.interopDefault(_createCallbackMemoizer);
var _scrollbarSize = require("dom-helpers/scrollbarSize"); // @TODO Merge Collection and CollectionView
var _scrollbarSizeDefault = parcelHelpers.interopDefault(_scrollbarSize);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */ var IS_SCROLLING_TIMEOUT = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */ var SCROLL_POSITION_CHANGE_REASONS = {
    OBSERVED: 'observed',
    REQUESTED: 'requested'
};
/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */ var CollectionView = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(CollectionView, _React$PureComponent);
    // Invokes callbacks only when their values have changed.
    function CollectionView() {
        var _getPrototypeOf2;
        var _this;
        (0, _classCallCheckDefault.default)(this, CollectionView);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, _possibleConstructorReturnDefault.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOfDefault.default)(CollectionView)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args))); // If this component is being rendered server-side, getScrollbarSize() will return undefined.
        // We handle this case in componentDidMount()
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "state", {
            isScrolling: false,
            scrollLeft: 0,
            scrollTop: 0
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_calculateSizeAndPositionDataOnNextUpdate", false);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onSectionRenderedMemoizer", (0, _createCallbackMemoizerDefault.default)());
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScrollMemoizer", (0, _createCallbackMemoizerDefault.default)(false));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_invokeOnSectionRenderedHelper", function() {
            var _this$props = _this.props, cellLayoutManager = _this$props.cellLayoutManager, onSectionRendered = _this$props.onSectionRendered;
            _this._onSectionRenderedMemoizer({
                callback: onSectionRendered,
                indices: {
                    indices: cellLayoutManager.getLastRenderedIndices()
                }
            });
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_setScrollingContainerRef", function(ref) {
            _this._scrollingContainer = ref;
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_updateScrollPositionForScrollToCell", function() {
            var _this$props2 = _this.props, cellLayoutManager = _this$props2.cellLayoutManager, height = _this$props2.height, scrollToAlignment = _this$props2.scrollToAlignment, scrollToCell = _this$props2.scrollToCell, width = _this$props2.width;
            var _this$state = _this.state, scrollLeft = _this$state.scrollLeft, scrollTop = _this$state.scrollTop;
            if (scrollToCell >= 0) {
                var scrollPosition = cellLayoutManager.getScrollPositionForCell({
                    align: scrollToAlignment,
                    cellIndex: scrollToCell,
                    height: height,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    width: width
                });
                if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) _this._setScrollPosition(scrollPosition);
            }
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScroll", function(event) {
            // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
            // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
            // See issue #404 for more information.
            if (event.target !== _this._scrollingContainer) return;
             // Prevent pointer events from interrupting a smooth scroll
            _this._enablePointerEventsAfterDelay(); // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
            // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
            // This causes a series of rapid renders that is slow for long lists.
            // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
            var _this$props3 = _this.props, cellLayoutManager = _this$props3.cellLayoutManager, height = _this$props3.height, isScrollingChange = _this$props3.isScrollingChange, width = _this$props3.width;
            var scrollbarSize = _this._scrollbarSize;
            var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge.height, totalWidth = _cellLayoutManager$ge.width;
            var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
            var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop)); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
            // Don't force a re-render if this is the case.
            // The mouse may move faster then the animation frame does.
            // Use requestAnimationFrame to avoid over-updating.
            if (_this.state.scrollLeft !== scrollLeft || _this.state.scrollTop !== scrollTop) {
                // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
                // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
                // All things considered, this seems to be the best current work around that I'm aware of.
                // For more information see https://github.com/bvaughn/react-virtualized/pull/124
                var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED; // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
                if (!_this.state.isScrolling) isScrollingChange(true);
                _this.setState({
                    isScrolling: true,
                    scrollLeft: scrollLeft,
                    scrollPositionChangeReason: scrollPositionChangeReason,
                    scrollTop: scrollTop
                });
            }
            _this._invokeOnScrollMemoizer({
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                totalWidth: totalWidth,
                totalHeight: totalHeight
            });
        });
        _this._scrollbarSize = (0, _scrollbarSizeDefault.default)();
        if (_this._scrollbarSize === undefined) {
            _this._scrollbarSizeMeasured = false;
            _this._scrollbarSize = 0;
        } else _this._scrollbarSizeMeasured = true;
        return _this;
    }
    /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */ (0, _createClassDefault.default)(CollectionView, [
        {
            key: "recomputeCellSizesAndPositions",
            value: function recomputeCellSizesAndPositions() {
                this._calculateSizeAndPositionDataOnNextUpdate = true;
                this.forceUpdate();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this$props4 = this.props, cellLayoutManager = _this$props4.cellLayoutManager, scrollLeft = _this$props4.scrollLeft, scrollToCell = _this$props4.scrollToCell, scrollTop = _this$props4.scrollTop; // If this component was first rendered server-side, scrollbar size will be undefined.
                // In that event we need to remeasure.
                if (!this._scrollbarSizeMeasured) {
                    this._scrollbarSize = (0, _scrollbarSizeDefault.default)();
                    this._scrollbarSizeMeasured = true;
                    this.setState({});
                }
                if (scrollToCell >= 0) this._updateScrollPositionForScrollToCell();
                else if (scrollLeft >= 0 || scrollTop >= 0) this._setScrollPosition({
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                });
                 // Update onSectionRendered callback.
                this._invokeOnSectionRenderedHelper();
                var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge2.height, totalWidth = _cellLayoutManager$ge2.width; // Initialize onScroll callback.
                this._invokeOnScrollMemoizer({
                    scrollLeft: scrollLeft || 0,
                    scrollTop: scrollTop || 0,
                    totalHeight: totalHeight,
                    totalWidth: totalWidth
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                var _this$props5 = this.props, height = _this$props5.height, scrollToAlignment = _this$props5.scrollToAlignment, scrollToCell = _this$props5.scrollToCell, width = _this$props5.width;
                var _this$state2 = this.state, scrollLeft = _this$state2.scrollLeft, scrollPositionChangeReason = _this$state2.scrollPositionChangeReason, scrollTop = _this$state2.scrollTop; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
                // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
                // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
                // So we only set these when we require an adjustment of the scroll position.
                // See issue #2 for more information.
                if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
                    if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) this._scrollingContainer.scrollLeft = scrollLeft;
                    if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) this._scrollingContainer.scrollTop = scrollTop;
                } // Update scroll offsets if the current :scrollToCell values requires it
                if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) this._updateScrollPositionForScrollToCell();
                 // Update onRowsRendered callback if start/stop indices have changed
                this._invokeOnSectionRenderedHelper();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this._disablePointerEventsTimeoutId) clearTimeout(this._disablePointerEventsTimeoutId);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props6 = this.props, autoHeight = _this$props6.autoHeight, cellCount = _this$props6.cellCount, cellLayoutManager = _this$props6.cellLayoutManager, className = _this$props6.className, height = _this$props6.height, horizontalOverscanSize = _this$props6.horizontalOverscanSize, id = _this$props6.id, noContentRenderer = _this$props6.noContentRenderer, style = _this$props6.style, verticalOverscanSize = _this$props6.verticalOverscanSize, width = _this$props6.width;
                var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollLeft = _this$state3.scrollLeft, scrollTop = _this$state3.scrollTop; // Memoization reset
                if (this._lastRenderedCellCount !== cellCount || this._lastRenderedCellLayoutManager !== cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
                    this._lastRenderedCellCount = cellCount;
                    this._lastRenderedCellLayoutManager = cellLayoutManager;
                    this._calculateSizeAndPositionDataOnNextUpdate = false;
                    cellLayoutManager.calculateSizeAndPositionData();
                }
                var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(), totalHeight = _cellLayoutManager$ge3.height, totalWidth = _cellLayoutManager$ge3.width; // Safely expand the rendered area by the specified overscan amount
                var left = Math.max(0, scrollLeft - horizontalOverscanSize);
                var top = Math.max(0, scrollTop - verticalOverscanSize);
                var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
                var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);
                var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
                    height: bottom - top,
                    isScrolling: isScrolling,
                    width: right - left,
                    x: left,
                    y: top
                }) : [];
                var collectionStyle = {
                    boxSizing: 'border-box',
                    direction: 'ltr',
                    height: autoHeight ? 'auto' : height,
                    position: 'relative',
                    WebkitOverflowScrolling: 'touch',
                    width: width,
                    willChange: 'transform'
                }; // Force browser to hide scrollbars when we know they aren't necessary.
                // Otherwise once scrollbars appear they may not disappear again.
                // For more info see issue #116
                var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
                var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0; // Also explicitly init styles to 'auto' if scrollbars are required.
                // This works around an obscure edge case where external CSS styles have not yet been loaded,
                // But an initial scroll index of offset is set as an external prop.
                // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
                // This was originally reported via clauderic/react-infinite-calendar/issues/23
                collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
                collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
                return _react.createElement("div", {
                    ref: this._setScrollingContainerRef,
                    "aria-label": this.props['aria-label'],
                    className: (0, _clsxDefault.default)('ReactVirtualized__Collection', className),
                    id: id,
                    onScroll: this._onScroll,
                    role: "grid",
                    style: _objectSpread({}, collectionStyle, {}, style),
                    tabIndex: 0
                }, cellCount > 0 && _react.createElement("div", {
                    className: "ReactVirtualized__Collection__innerScrollContainer",
                    style: {
                        height: totalHeight,
                        maxHeight: totalHeight,
                        maxWidth: totalWidth,
                        overflow: 'hidden',
                        pointerEvents: isScrolling ? 'none' : '',
                        width: totalWidth
                    }
                }, childrenToDisplay), cellCount === 0 && noContentRenderer());
            }
        },
        {
            key: "_enablePointerEventsAfterDelay",
            value: function _enablePointerEventsAfterDelay() {
                var _this2 = this;
                if (this._disablePointerEventsTimeoutId) clearTimeout(this._disablePointerEventsTimeoutId);
                this._disablePointerEventsTimeoutId = setTimeout(function() {
                    var isScrollingChange = _this2.props.isScrollingChange;
                    isScrollingChange(false);
                    _this2._disablePointerEventsTimeoutId = null;
                    _this2.setState({
                        isScrolling: false
                    });
                }, IS_SCROLLING_TIMEOUT);
            }
        },
        {
            key: "_invokeOnScrollMemoizer",
            value: function _invokeOnScrollMemoizer(_ref) {
                var _this3 = this;
                var scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, totalHeight = _ref.totalHeight, totalWidth = _ref.totalWidth;
                this._onScrollMemoizer({
                    callback: function callback(_ref2) {
                        var scrollLeft = _ref2.scrollLeft, scrollTop = _ref2.scrollTop;
                        var _this3$props = _this3.props, height = _this3$props.height, onScroll = _this3$props.onScroll, width = _this3$props.width;
                        onScroll({
                            clientHeight: height,
                            clientWidth: width,
                            scrollHeight: totalHeight,
                            scrollLeft: scrollLeft,
                            scrollTop: scrollTop,
                            scrollWidth: totalWidth
                        });
                    },
                    indices: {
                        scrollLeft: scrollLeft,
                        scrollTop: scrollTop
                    }
                });
            }
        },
        {
            key: "_setScrollPosition",
            value: function _setScrollPosition(_ref3) {
                var scrollLeft = _ref3.scrollLeft, scrollTop = _ref3.scrollTop;
                var newState = {
                    scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                };
                if (scrollLeft >= 0) newState.scrollLeft = scrollLeft;
                if (scrollTop >= 0) newState.scrollTop = scrollTop;
                if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) this.setState(newState);
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.cellCount === 0 && (prevState.scrollLeft !== 0 || prevState.scrollTop !== 0)) return {
                    scrollLeft: 0,
                    scrollTop: 0,
                    scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                };
                else if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) return {
                    scrollLeft: nextProps.scrollLeft != null ? nextProps.scrollLeft : prevState.scrollLeft,
                    scrollTop: nextProps.scrollTop != null ? nextProps.scrollTop : prevState.scrollTop,
                    scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
                };
                return null;
            }
        }
    ]);
    return CollectionView;
}(_react.PureComponent);
(0, _definePropertyDefault.default)(CollectionView, "defaultProps", {
    'aria-label': 'grid',
    horizontalOverscanSize: 0,
    noContentRenderer: function noContentRenderer() {
        return null;
    },
    onScroll: function onScroll() {
        return null;
    },
    onSectionRendered: function onSectionRendered() {
        return null;
    },
    scrollToAlignment: 'auto',
    scrollToCell: -1,
    style: {},
    verticalOverscanSize: 0
});
CollectionView.propTypes = {
    'aria-label': (0, _propTypesDefault.default).string,
    /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */ autoHeight: (0, _propTypesDefault.default).bool,
    /**
   * Number of cells in collection.
   */ cellCount: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
   */ cellLayoutManager: (0, _propTypesDefault.default).object.isRequired,
    /**
   * Optional custom CSS class name to attach to root Collection element.
   */ className: (0, _propTypesDefault.default).string,
    /**
   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
   */ height: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Optional custom id to attach to root Collection element.
   */ id: (0, _propTypesDefault.default).string,
    /**
   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */ horizontalOverscanSize: (0, _propTypesDefault.default).number.isRequired,
    isScrollingChange: (0, _propTypesDefault.default).func,
    /**
   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
   */ noContentRenderer: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */ onScroll: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Callback invoked with information about the section of the Collection that was just rendered.
   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
   */ onSectionRendered: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Horizontal offset.
   */ scrollLeft: (0, _propTypesDefault.default).number,
    /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */ scrollToAlignment: (0, _propTypesDefault.default).oneOf([
        'auto',
        'end',
        'start',
        'center'
    ]).isRequired,
    /**
   * Cell index to ensure visible (by forcefully scrolling if necessary).
   */ scrollToCell: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Vertical offset.
   */ scrollTop: (0, _propTypesDefault.default).number,
    /**
   * Optional custom inline style to attach to root Collection element.
   */ style: (0, _propTypesDefault.default).object,
    /**
   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
   * This can reduce flicker around the edges when a user scrolls quickly.
   */ verticalOverscanSize: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
   */ width: (0, _propTypesDefault.default).number.isRequired
};
(0, _reactLifecyclesCompat.polyfill)(CollectionView);
exports.default = CollectionView;

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","clsx":"83C22","prop-types":"7wKI2","react":"21dqq","react-lifecycles-compat":"3f3fU","../utils/createCallbackMemoizer":"kgXut","dom-helpers/scrollbarSize":"lhsUa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCtnR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>calculateSizeAndPositionData);
var _sectionManager = require("../SectionManager");
var _sectionManagerDefault = parcelHelpers.interopDefault(_sectionManager);
function calculateSizeAndPositionData(_ref) {
    var cellCount = _ref.cellCount, cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter, sectionSize = _ref.sectionSize;
    var cellMetadata = [];
    var sectionManager = new (0, _sectionManagerDefault.default)(sectionSize);
    var height = 0;
    var width = 0;
    for(var index = 0; index < cellCount; index++){
        var cellMetadatum = cellSizeAndPositionGetter({
            index: index
        });
        if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) throw Error("Invalid metadata returned for cell ".concat(index, ":\n        x:").concat(cellMetadatum.x, ", y:").concat(cellMetadatum.y, ", width:").concat(cellMetadatum.width, ", height:").concat(cellMetadatum.height));
        height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
        width = Math.max(width, cellMetadatum.x + cellMetadatum.width);
        cellMetadata[index] = cellMetadatum;
        sectionManager.registerCell({
            cellMetadatum: cellMetadatum,
            index: index
        });
    }
    return {
        cellMetadata: cellMetadata,
        height: height,
        sectionManager: sectionManager,
        width: width
    };
}

},{"../SectionManager":"98RFR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98RFR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SectionManager);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */ var _section = require("./Section");
var _sectionDefault = parcelHelpers.interopDefault(_section);
var _types = require("./types");
var SECTION_SIZE = 100;
/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */ var SectionManager = /*#__PURE__*/ function() {
    function SectionManager() {
        var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;
        (0, _classCallCheckDefault.default)(this, SectionManager);
        this._sectionSize = sectionSize;
        this._cellMetadata = [];
        this._sections = {};
    }
    /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */ (0, _createClassDefault.default)(SectionManager, [
        {
            key: "getCellIndices",
            value: function getCellIndices(_ref) {
                var height = _ref.height, width = _ref.width, x = _ref.x, y = _ref.y;
                var indices = {};
                this.getSections({
                    height: height,
                    width: width,
                    x: x,
                    y: y
                }).forEach(function(section) {
                    return section.getCellIndices().forEach(function(index) {
                        indices[index] = index;
                    });
                }); // Object keys are strings; this function returns numbers
                return Object.keys(indices).map(function(index) {
                    return indices[index];
                });
            }
        },
        {
            key: "getCellMetadata",
            value: function getCellMetadata(_ref2) {
                var index = _ref2.index;
                return this._cellMetadata[index];
            }
        },
        {
            key: "getSections",
            value: function getSections(_ref3) {
                var height = _ref3.height, width = _ref3.width, x = _ref3.x, y = _ref3.y;
                var sectionXStart = Math.floor(x / this._sectionSize);
                var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
                var sectionYStart = Math.floor(y / this._sectionSize);
                var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);
                var sections = [];
                for(var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++)for(var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++){
                    var key = "".concat(sectionX, ".").concat(sectionY);
                    if (!this._sections[key]) this._sections[key] = new (0, _sectionDefault.default)({
                        height: this._sectionSize,
                        width: this._sectionSize,
                        x: sectionX * this._sectionSize,
                        y: sectionY * this._sectionSize
                    });
                    sections.push(this._sections[key]);
                }
                return sections;
            }
        },
        {
            key: "getTotalSectionCount",
            value: function getTotalSectionCount() {
                return Object.keys(this._sections).length;
            }
        },
        {
            key: "toString",
            value: function toString() {
                var _this = this;
                return Object.keys(this._sections).map(function(index) {
                    return _this._sections[index].toString();
                });
            }
        },
        {
            key: "registerCell",
            value: function registerCell(_ref4) {
                var cellMetadatum = _ref4.cellMetadatum, index = _ref4.index;
                this._cellMetadata[index] = cellMetadatum;
                this.getSections(cellMetadatum).forEach(function(section) {
                    return section.addCellIndex({
                        index: index
                    });
                });
            }
        }
    ]);
    return SectionManager;
}();

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","./Section":"bzQ2a","./types":"226Ys","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzQ2a":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Section);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _types = require("./types");
/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */ var Section = /*#__PURE__*/ function() {
    function Section(_ref) {
        var height = _ref.height, width = _ref.width, x = _ref.x, y = _ref.y;
        (0, _classCallCheckDefault.default)(this, Section);
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this._indexMap = {};
        this._indices = [];
    }
    /** Add a cell to this section. */ (0, _createClassDefault.default)(Section, [
        {
            key: "addCellIndex",
            value: function addCellIndex(_ref2) {
                var index = _ref2.index;
                if (!this._indexMap[index]) {
                    this._indexMap[index] = true;
                    this._indices.push(index);
                }
            }
        },
        {
            key: "getCellIndices",
            value: function getCellIndices() {
                return this._indices;
            }
        },
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.x, ",").concat(this.y, " ").concat(this.width, "x").concat(this.height);
            }
        }
    ]);
    return Section;
}();

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","./types":"226Ys","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"226Ys":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bpfrpt_proptype_Index", ()=>bpfrpt_proptype_Index);
parcelHelpers.export(exports, "bpfrpt_proptype_PositionInfo", ()=>bpfrpt_proptype_PositionInfo);
parcelHelpers.export(exports, "bpfrpt_proptype_ScrollPosition", ()=>bpfrpt_proptype_ScrollPosition);
parcelHelpers.export(exports, "bpfrpt_proptype_SizeAndPositionInfo", ()=>bpfrpt_proptype_SizeAndPositionInfo);
parcelHelpers.export(exports, "bpfrpt_proptype_SizeInfo", ()=>bpfrpt_proptype_SizeInfo);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var bpfrpt_proptype_Index = {
    "index": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_PositionInfo = {
    "x": (0, _propTypesDefault.default).number.isRequired,
    "y": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_ScrollPosition = {
    "scrollLeft": (0, _propTypesDefault.default).number.isRequired,
    "scrollTop": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_SizeAndPositionInfo = {
    "height": (0, _propTypesDefault.default).number.isRequired,
    "width": (0, _propTypesDefault.default).number.isRequired,
    "x": (0, _propTypesDefault.default).number.isRequired,
    "y": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_SizeInfo = {
    "height": (0, _propTypesDefault.default).number.isRequired,
    "width": (0, _propTypesDefault.default).number.isRequired
};

},{"prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b0M10":[function(require,module,exports,__globalThis) {
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getUpdatedOffsetForIndex);
function getUpdatedOffsetForIndex(_ref) {
    var _ref$align = _ref.align, align = _ref$align === void 0 ? 'auto' : _ref$align, cellOffset = _ref.cellOffset, cellSize = _ref.cellSize, containerSize = _ref.containerSize, currentOffset = _ref.currentOffset;
    var maxOffset = cellOffset;
    var minOffset = maxOffset - containerSize + cellSize;
    switch(align){
        case 'start':
            return maxOffset;
        case 'end':
            return minOffset;
        case 'center':
            return maxOffset - (containerSize - cellSize) / 2;
        default:
            return Math.max(minOffset, Math.min(maxOffset, currentOffset));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jk17G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColumnSizer", ()=>(0, _columnSizerDefault.default));
var _columnSizer = require("./ColumnSizer");
var _columnSizerDefault = parcelHelpers.interopDefault(_columnSizer);
exports.default = (0, _columnSizerDefault.default);

},{"./ColumnSizer":"dZf31","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZf31":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ColumnSizer);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */ var ColumnSizer = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(ColumnSizer, _React$PureComponent);
    function ColumnSizer(props, context) {
        var _this;
        (0, _classCallCheckDefault.default)(this, ColumnSizer);
        _this = (0, _possibleConstructorReturnDefault.default)(this, (0, _getPrototypeOfDefault.default)(ColumnSizer).call(this, props, context));
        _this._registerChild = _this._registerChild.bind((0, _assertThisInitializedDefault.default)(_this));
        return _this;
    }
    (0, _createClassDefault.default)(ColumnSizer, [
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var _this$props = this.props, columnMaxWidth = _this$props.columnMaxWidth, columnMinWidth = _this$props.columnMinWidth, columnCount = _this$props.columnCount, width = _this$props.width;
                if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
                    if (this._registeredChild) this._registeredChild.recomputeGridSize();
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, children = _this$props2.children, columnMaxWidth = _this$props2.columnMaxWidth, columnMinWidth = _this$props2.columnMinWidth, columnCount = _this$props2.columnCount, width = _this$props2.width;
                var safeColumnMinWidth = columnMinWidth || 1;
                var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;
                var columnWidth = width / columnCount;
                columnWidth = Math.max(safeColumnMinWidth, columnWidth);
                columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
                columnWidth = Math.floor(columnWidth);
                var adjustedWidth = Math.min(width, columnWidth * columnCount);
                return children({
                    adjustedWidth: adjustedWidth,
                    columnWidth: columnWidth,
                    getColumnWidth: function getColumnWidth() {
                        return columnWidth;
                    },
                    registerChild: this._registerChild
                });
            }
        },
        {
            key: "_registerChild",
            value: function _registerChild(child) {
                if (child && typeof child.recomputeGridSize !== 'function') throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
                this._registeredChild = child;
                if (this._registeredChild) this._registeredChild.recomputeGridSize();
            }
        }
    ]);
    return ColumnSizer;
}(_react.PureComponent);
ColumnSizer.propTypes = {
    /**
   * Function responsible for rendering a virtualized Grid.
   * This function should implement the following signature:
   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
   *
   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
   * The :registerChild should be passed to the Grid's :ref property.
   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
   */ children: (0, _propTypesDefault.default).func.isRequired,
    /** Optional maximum allowed column width */ columnMaxWidth: (0, _propTypesDefault.default).number,
    /** Optional minimum allowed column width */ columnMinWidth: (0, _propTypesDefault.default).number,
    /** Number of columns in Grid or Table child */ columnCount: (0, _propTypesDefault.default).number.isRequired,
    /** Width of Grid or Table child */ width: (0, _propTypesDefault.default).number.isRequired
};

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","prop-types":"7wKI2","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72OMm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InfiniteLoader", ()=>(0, _infiniteLoaderDefault.default));
var _infiniteLoader = require("./InfiniteLoader");
var _infiniteLoaderDefault = parcelHelpers.interopDefault(_infiniteLoader);
exports.default = (0, _infiniteLoaderDefault.default);

},{"./InfiniteLoader":"dwkOJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwkOJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InfiniteLoader);
parcelHelpers.export(exports, "isRangeVisible", ()=>isRangeVisible);
/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */ parcelHelpers.export(exports, "scanForUnloadedRanges", ()=>scanForUnloadedRanges);
/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */ parcelHelpers.export(exports, "forceUpdateReactVirtualizedComponent", ()=>forceUpdateReactVirtualizedComponent);
var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _react = require("react");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _createCallbackMemoizer = require("../utils/createCallbackMemoizer");
var _createCallbackMemoizerDefault = parcelHelpers.interopDefault(_createCallbackMemoizer);
/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */ var InfiniteLoader = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(InfiniteLoader, _React$PureComponent);
    function InfiniteLoader(props, context) {
        var _this;
        (0, _classCallCheckDefault.default)(this, InfiniteLoader);
        _this = (0, _possibleConstructorReturnDefault.default)(this, (0, _getPrototypeOfDefault.default)(InfiniteLoader).call(this, props, context));
        _this._loadMoreRowsMemoizer = (0, _createCallbackMemoizerDefault.default)();
        _this._onRowsRendered = _this._onRowsRendered.bind((0, _assertThisInitializedDefault.default)(_this));
        _this._registerChild = _this._registerChild.bind((0, _assertThisInitializedDefault.default)(_this));
        return _this;
    }
    (0, _createClassDefault.default)(InfiniteLoader, [
        {
            key: "resetLoadMoreRowsCache",
            value: function resetLoadMoreRowsCache(autoReload) {
                this._loadMoreRowsMemoizer = (0, _createCallbackMemoizerDefault.default)();
                if (autoReload) this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
            }
        },
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                return children({
                    onRowsRendered: this._onRowsRendered,
                    registerChild: this._registerChild
                });
            }
        },
        {
            key: "_loadUnloadedRanges",
            value: function _loadUnloadedRanges(unloadedRanges) {
                var _this2 = this;
                var loadMoreRows = this.props.loadMoreRows;
                unloadedRanges.forEach(function(unloadedRange) {
                    var promise = loadMoreRows(unloadedRange);
                    if (promise) promise.then(function() {
                        // Refresh the visible rows if any of them have just been loaded.
                        // Otherwise they will remain in their unloaded visual state.
                        if (isRangeVisible({
                            lastRenderedStartIndex: _this2._lastRenderedStartIndex,
                            lastRenderedStopIndex: _this2._lastRenderedStopIndex,
                            startIndex: unloadedRange.startIndex,
                            stopIndex: unloadedRange.stopIndex
                        })) {
                            if (_this2._registeredChild) forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
                        }
                    });
                });
            }
        },
        {
            key: "_onRowsRendered",
            value: function _onRowsRendered(_ref) {
                var startIndex = _ref.startIndex, stopIndex = _ref.stopIndex;
                this._lastRenderedStartIndex = startIndex;
                this._lastRenderedStopIndex = stopIndex;
                this._doStuff(startIndex, stopIndex);
            }
        },
        {
            key: "_doStuff",
            value: function _doStuff(startIndex, stopIndex) {
                var _ref2, _this3 = this;
                var _this$props = this.props, isRowLoaded = _this$props.isRowLoaded, minimumBatchSize = _this$props.minimumBatchSize, rowCount = _this$props.rowCount, threshold = _this$props.threshold;
                var unloadedRanges = scanForUnloadedRanges({
                    isRowLoaded: isRowLoaded,
                    minimumBatchSize: minimumBatchSize,
                    rowCount: rowCount,
                    startIndex: Math.max(0, startIndex - threshold),
                    stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
                }); // For memoize comparison
                var squashedUnloadedRanges = (_ref2 = []).concat.apply(_ref2, (0, _toConsumableArrayDefault.default)(unloadedRanges.map(function(_ref3) {
                    var startIndex = _ref3.startIndex, stopIndex = _ref3.stopIndex;
                    return [
                        startIndex,
                        stopIndex
                    ];
                })));
                this._loadMoreRowsMemoizer({
                    callback: function callback() {
                        _this3._loadUnloadedRanges(unloadedRanges);
                    },
                    indices: {
                        squashedUnloadedRanges: squashedUnloadedRanges
                    }
                });
            }
        },
        {
            key: "_registerChild",
            value: function _registerChild(registeredChild) {
                this._registeredChild = registeredChild;
            }
        }
    ]);
    return InfiniteLoader;
}(_react.PureComponent);
/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */ (0, _definePropertyDefault.default)(InfiniteLoader, "defaultProps", {
    minimumBatchSize: 10,
    rowCount: 0,
    threshold: 15
});
InfiniteLoader.propTypes = {
    /**
   * Function responsible for rendering a virtualized component.
   * This function should implement the following signature:
   * ({ onRowsRendered, registerChild }) => PropTypes.element
   *
   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
   * The :registerChild callback should be set as the virtualized component's :ref.
   */ children: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Function responsible for tracking the loaded state of each row.
   * It should implement the following signature: ({ index: number }): boolean
   */ isRowLoaded: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Callback to be invoked when more rows must be loaded.
   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
   * The returned Promise should be resolved once row data has finished loading.
   * It will be used to determine when to refresh the list with the newly-loaded data.
   * This callback may be called multiple times in reaction to a single scroll event.
   */ loadMoreRows: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Minimum number of rows to be loaded at a time.
   * This property can be used to batch requests to reduce HTTP requests.
   */ minimumBatchSize: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Number of rows in list; can be arbitrary high number if actual number is unknown.
   */ rowCount: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Threshold at which to pre-fetch data.
   * A threshold X means that data will start loading when a user scrolls within X rows.
   * This value defaults to 15.
   */ threshold: (0, _propTypesDefault.default).number.isRequired
};
function isRangeVisible(_ref4) {
    var lastRenderedStartIndex = _ref4.lastRenderedStartIndex, lastRenderedStopIndex = _ref4.lastRenderedStopIndex, startIndex = _ref4.startIndex, stopIndex = _ref4.stopIndex;
    return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}
function scanForUnloadedRanges(_ref5) {
    var isRowLoaded = _ref5.isRowLoaded, minimumBatchSize = _ref5.minimumBatchSize, rowCount = _ref5.rowCount, startIndex = _ref5.startIndex, stopIndex = _ref5.stopIndex;
    var unloadedRanges = [];
    var rangeStartIndex = null;
    var rangeStopIndex = null;
    for(var index = startIndex; index <= stopIndex; index++){
        var loaded = isRowLoaded({
            index: index
        });
        if (!loaded) {
            rangeStopIndex = index;
            if (rangeStartIndex === null) rangeStartIndex = index;
        } else if (rangeStopIndex !== null) {
            unloadedRanges.push({
                startIndex: rangeStartIndex,
                stopIndex: rangeStopIndex
            });
            rangeStartIndex = rangeStopIndex = null;
        }
    } // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
    // Scan forward to try filling our :minimumBatchSize.
    if (rangeStopIndex !== null) {
        var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);
        for(var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++){
            if (!isRowLoaded({
                index: _index
            })) rangeStopIndex = _index;
            else break;
        }
        unloadedRanges.push({
            startIndex: rangeStartIndex,
            stopIndex: rangeStopIndex
        });
    } // Check to see if our first range ended prematurely.
    // In this case we should scan backwards to try filling our :minimumBatchSize.
    if (unloadedRanges.length) {
        var firstUnloadedRange = unloadedRanges[0];
        while(firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0){
            var _index2 = firstUnloadedRange.startIndex - 1;
            if (!isRowLoaded({
                index: _index2
            })) firstUnloadedRange.startIndex = _index2;
            else break;
        }
    }
    return unloadedRanges;
}
function forceUpdateReactVirtualizedComponent(component) {
    var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;
    if (recomputeSize) recomputeSize.call(component, currentIndex);
    else component.forceUpdate();
}

},{"@babel/runtime/helpers/toConsumableArray":"bCb5n","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","react":"21dqq","prop-types":"7wKI2","../utils/createCallbackMemoizer":"kgXut","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCb5n":[function(require,module,exports,__globalThis) {
var arrayWithoutHoles = require("80b438c8f11ca70e");
var iterableToArray = require("4f1268a27b81f1fd");
var unsupportedIterableToArray = require("bfa7725fe5f724b");
var nonIterableSpread = require("24ae2b6222a85da6");
function _toConsumableArray(r) {
    return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"80b438c8f11ca70e":"3Xl6v","4f1268a27b81f1fd":"02b3Z","bfa7725fe5f724b":"cFxnT","24ae2b6222a85da6":"aejXd"}],"3Xl6v":[function(require,module,exports,__globalThis) {
var arrayLikeToArray = require("d3a23041cb0f1512");
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"d3a23041cb0f1512":"2QyYi"}],"2QyYi":[function(require,module,exports,__globalThis) {
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"02b3Z":[function(require,module,exports,__globalThis) {
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"cFxnT":[function(require,module,exports,__globalThis) {
var arrayLikeToArray = require("f8ccc0353f5f3746");
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
    }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"f8ccc0353f5f3746":"2QyYi"}],"aejXd":[function(require,module,exports,__globalThis) {
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"g5yvl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _listDefault.default));
parcelHelpers.export(exports, "List", ()=>(0, _listDefault.default));
parcelHelpers.export(exports, "bpfrpt_proptype_RowRendererParams", ()=>(0, _types.bpfrpt_proptype_RowRendererParams));
var _list = require("./List");
var _listDefault = parcelHelpers.interopDefault(_list);
var _types = require("./types");

},{"./List":"3jdRL","./types":"fiTXx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jdRL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>List);
var _extends = require("@babel/runtime/helpers/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _grid = require("../Grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _react = require("react");
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _types = require("./types");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _class, _temp;
/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */ var List = (_temp = _class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(List, _React$PureComponent);
    function List() {
        var _getPrototypeOf2;
        var _this;
        (0, _classCallCheckDefault.default)(this, List);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, _possibleConstructorReturnDefault.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOfDefault.default)(List)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "Grid", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_cellRenderer", function(_ref) {
            var parent = _ref.parent, rowIndex = _ref.rowIndex, style = _ref.style, isScrolling = _ref.isScrolling, isVisible = _ref.isVisible, key = _ref.key;
            var rowRenderer = _this.props.rowRenderer; // TRICKY The style object is sometimes cached by Grid.
            // This prevents new style objects from bypassing shallowCompare().
            // However as of React 16, style props are auto-frozen (at least in dev mode)
            // Check to make sure we can still modify the style before proceeding.
            // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713
            var widthDescriptor = Object.getOwnPropertyDescriptor(style, 'width');
            if (widthDescriptor && widthDescriptor.writable) // By default, List cells should be 100% width.
            // This prevents them from flowing under a scrollbar (if present).
            style.width = '100%';
            return rowRenderer({
                index: rowIndex,
                style: style,
                isScrolling: isScrolling,
                isVisible: isVisible,
                key: key,
                parent: parent
            });
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_setRef", function(ref) {
            _this.Grid = ref;
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScroll", function(_ref2) {
            var clientHeight = _ref2.clientHeight, scrollHeight = _ref2.scrollHeight, scrollTop = _ref2.scrollTop;
            var onScroll = _this.props.onScroll;
            onScroll({
                clientHeight: clientHeight,
                scrollHeight: scrollHeight,
                scrollTop: scrollTop
            });
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onSectionRendered", function(_ref3) {
            var rowOverscanStartIndex = _ref3.rowOverscanStartIndex, rowOverscanStopIndex = _ref3.rowOverscanStopIndex, rowStartIndex = _ref3.rowStartIndex, rowStopIndex = _ref3.rowStopIndex;
            var onRowsRendered = _this.props.onRowsRendered;
            onRowsRendered({
                overscanStartIndex: rowOverscanStartIndex,
                overscanStopIndex: rowOverscanStopIndex,
                startIndex: rowStartIndex,
                stopIndex: rowStopIndex
            });
        });
        return _this;
    }
    (0, _createClassDefault.default)(List, [
        {
            key: "forceUpdateGrid",
            value: function forceUpdateGrid() {
                if (this.Grid) this.Grid.forceUpdate();
            }
        },
        {
            key: "getOffsetForRow",
            value: function getOffsetForRow(_ref4) {
                var alignment = _ref4.alignment, index = _ref4.index;
                if (this.Grid) {
                    var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
                        alignment: alignment,
                        rowIndex: index,
                        columnIndex: 0
                    }), scrollTop = _this$Grid$getOffsetF.scrollTop;
                    return scrollTop;
                }
                return 0;
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender(_ref5) {
                var columnIndex = _ref5.columnIndex, rowIndex = _ref5.rowIndex;
                if (this.Grid) this.Grid.invalidateCellSizeAfterRender({
                    rowIndex: rowIndex,
                    columnIndex: columnIndex
                });
            }
        },
        {
            key: "measureAllRows",
            value: function measureAllRows() {
                if (this.Grid) this.Grid.measureAllCells();
            }
        },
        {
            key: "recomputeGridSize",
            value: function recomputeGridSize() {
                var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref6$columnIndex = _ref6.columnIndex, columnIndex = _ref6$columnIndex === void 0 ? 0 : _ref6$columnIndex, _ref6$rowIndex = _ref6.rowIndex, rowIndex = _ref6$rowIndex === void 0 ? 0 : _ref6$rowIndex;
                if (this.Grid) this.Grid.recomputeGridSize({
                    rowIndex: rowIndex,
                    columnIndex: columnIndex
                });
            }
        },
        {
            key: "recomputeRowHeights",
            value: function recomputeRowHeights() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.recomputeGridSize({
                    rowIndex: index,
                    columnIndex: 0
                });
            }
        },
        {
            key: "scrollToPosition",
            value: function scrollToPosition() {
                var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.scrollToPosition({
                    scrollTop: scrollTop
                });
            }
        },
        {
            key: "scrollToRow",
            value: function scrollToRow() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.scrollToCell({
                    columnIndex: 0,
                    rowIndex: index
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, className = _this$props.className, noRowsRenderer = _this$props.noRowsRenderer, scrollToIndex = _this$props.scrollToIndex, width = _this$props.width;
                var classNames = (0, _clsxDefault.default)('ReactVirtualized__List', className);
                return _react.createElement((0, _gridDefault.default), (0, _extendsDefault.default)({}, this.props, {
                    autoContainerWidth: true,
                    cellRenderer: this._cellRenderer,
                    className: classNames,
                    columnWidth: width,
                    columnCount: 1,
                    noContentRenderer: noRowsRenderer,
                    onScroll: this._onScroll,
                    onSectionRendered: this._onSectionRendered,
                    ref: this._setRef,
                    scrollToRow: scrollToIndex
                }));
            }
        }
    ]);
    return List;
}(_react.PureComponent), (0, _definePropertyDefault.default)(_class, "propTypes", {
    "aria-label": (0, _propTypesDefault.default).string,
    /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */ "autoHeight": (0, _propTypesDefault.default).bool.isRequired,
    /** Optional CSS class name */ "className": (0, _propTypesDefault.default).string,
    /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */ "estimatedRowSize": (0, _propTypesDefault.default).number.isRequired,
    /** Height constraint for list (determines how many actual rows are rendered) */ "height": (0, _propTypesDefault.default).number.isRequired,
    /** Optional renderer to be used in place of rows when rowCount is 0 */ "noRowsRenderer": function noRowsRenderer() {
        return (typeof (0, _grid.bpfrpt_proptype_NoContentRenderer) === "function" ? (0, _grid.bpfrpt_proptype_NoContentRenderer).isRequired ? (0, _grid.bpfrpt_proptype_NoContentRenderer).isRequired : (0, _grid.bpfrpt_proptype_NoContentRenderer) : (0, _propTypesDefault.default).shape((0, _grid.bpfrpt_proptype_NoContentRenderer)).isRequired).apply(this, arguments);
    },
    /** Callback invoked with information about the slice of rows that were just rendered.  */ "onRowsRendered": (0, _propTypesDefault.default).func.isRequired,
    /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */ "onScroll": (0, _propTypesDefault.default).func.isRequired,
    /** See Grid#overscanIndicesGetter */ "overscanIndicesGetter": function overscanIndicesGetter() {
        return (typeof (0, _grid.bpfrpt_proptype_OverscanIndicesGetter) === "function" ? (0, _grid.bpfrpt_proptype_OverscanIndicesGetter).isRequired ? (0, _grid.bpfrpt_proptype_OverscanIndicesGetter).isRequired : (0, _grid.bpfrpt_proptype_OverscanIndicesGetter) : (0, _propTypesDefault.default).shape((0, _grid.bpfrpt_proptype_OverscanIndicesGetter)).isRequired).apply(this, arguments);
    },
    /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */ "overscanRowCount": (0, _propTypesDefault.default).number.isRequired,
    /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */ "rowHeight": function rowHeight() {
        return (typeof (0, _grid.bpfrpt_proptype_CellSize) === "function" ? (0, _grid.bpfrpt_proptype_CellSize).isRequired ? (0, _grid.bpfrpt_proptype_CellSize).isRequired : (0, _grid.bpfrpt_proptype_CellSize) : (0, _propTypesDefault.default).shape((0, _grid.bpfrpt_proptype_CellSize)).isRequired).apply(this, arguments);
    },
    /** Responsible for rendering a row given an index; ({ index: number }): node */ "rowRenderer": function rowRenderer() {
        return (typeof (0, _types.bpfrpt_proptype_RowRenderer) === "function" ? (0, _types.bpfrpt_proptype_RowRenderer).isRequired ? (0, _types.bpfrpt_proptype_RowRenderer).isRequired : (0, _types.bpfrpt_proptype_RowRenderer) : (0, _propTypesDefault.default).shape((0, _types.bpfrpt_proptype_RowRenderer)).isRequired).apply(this, arguments);
    },
    /** Number of rows in list. */ "rowCount": (0, _propTypesDefault.default).number.isRequired,
    /** See Grid#scrollToAlignment */ "scrollToAlignment": function scrollToAlignment() {
        return (typeof (0, _grid.bpfrpt_proptype_Alignment) === "function" ? (0, _grid.bpfrpt_proptype_Alignment).isRequired ? (0, _grid.bpfrpt_proptype_Alignment).isRequired : (0, _grid.bpfrpt_proptype_Alignment) : (0, _propTypesDefault.default).shape((0, _grid.bpfrpt_proptype_Alignment)).isRequired).apply(this, arguments);
    },
    /** Row index to ensure visible (by forcefully scrolling if necessary) */ "scrollToIndex": (0, _propTypesDefault.default).number.isRequired,
    /** Vertical offset. */ "scrollTop": (0, _propTypesDefault.default).number,
    /** Optional inline style */ "style": (0, _propTypesDefault.default).object.isRequired,
    /** Tab index for focus */ "tabIndex": (0, _propTypesDefault.default).number,
    /** Width of list */ "width": (0, _propTypesDefault.default).number.isRequired
}), _temp);
(0, _definePropertyDefault.default)(List, "defaultProps", {
    autoHeight: false,
    estimatedRowSize: 30,
    onScroll: function onScroll() {},
    noRowsRenderer: function noRowsRenderer() {
        return null;
    },
    onRowsRendered: function onRowsRendered() {},
    overscanIndicesGetter: (0, _grid.accessibilityOverscanIndicesGetter),
    overscanRowCount: 10,
    scrollToAlignment: 'auto',
    scrollToIndex: -1,
    style: {}
});

},{"@babel/runtime/helpers/extends":"vw3vn","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","../Grid":"6STYe","react":"21dqq","clsx":"83C22","./types":"fiTXx","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fiTXx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bpfrpt_proptype_RowRendererParams", ()=>bpfrpt_proptype_RowRendererParams);
parcelHelpers.export(exports, "bpfrpt_proptype_RowRenderer", ()=>bpfrpt_proptype_RowRenderer);
parcelHelpers.export(exports, "bpfrpt_proptype_RenderedRows", ()=>bpfrpt_proptype_RenderedRows);
parcelHelpers.export(exports, "bpfrpt_proptype_Scroll", ()=>bpfrpt_proptype_Scroll);
var _react = require("react");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var bpfrpt_proptype_RowRendererParams = {
    "index": (0, _propTypesDefault.default).number.isRequired,
    "isScrolling": (0, _propTypesDefault.default).bool.isRequired,
    "isVisible": (0, _propTypesDefault.default).bool.isRequired,
    "key": (0, _propTypesDefault.default).string.isRequired,
    "parent": (0, _propTypesDefault.default).object.isRequired,
    "style": (0, _propTypesDefault.default).object.isRequired
};
var bpfrpt_proptype_RowRenderer = (0, (0, _propTypesDefault.default).func);
var bpfrpt_proptype_RenderedRows = {
    "overscanStartIndex": (0, _propTypesDefault.default).number.isRequired,
    "overscanStopIndex": (0, _propTypesDefault.default).number.isRequired,
    "startIndex": (0, _propTypesDefault.default).number.isRequired,
    "stopIndex": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_Scroll = {
    "clientHeight": (0, _propTypesDefault.default).number.isRequired,
    "scrollHeight": (0, _propTypesDefault.default).number.isRequired,
    "scrollTop": (0, _propTypesDefault.default).number.isRequired
};

},{"react":"21dqq","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRwQI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCellPositioner", ()=>(0, _createCellPositionerDefault.default));
parcelHelpers.export(exports, "Masonry", ()=>(0, _masonryDefault.default));
var _createCellPositioner = require("./createCellPositioner");
var _createCellPositionerDefault = parcelHelpers.interopDefault(_createCellPositioner);
var _masonry = require("./Masonry");
var _masonryDefault = parcelHelpers.interopDefault(_masonry);
exports.default = (0, _masonryDefault.default);

},{"./createCellPositioner":"0vOgK","./Masonry":"c6SDN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0vOgK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createCellPositioner);
var _masonry = require("./Masonry");
function createCellPositioner(_ref) {
    var cellMeasurerCache = _ref.cellMeasurerCache, columnCount = _ref.columnCount, columnWidth = _ref.columnWidth, _ref$spacer = _ref.spacer, spacer = _ref$spacer === void 0 ? 0 : _ref$spacer;
    var columnHeights;
    initOrResetDerivedValues();
    function cellPositioner(index) {
        // Find the shortest column and use it.
        var columnIndex = 0;
        for(var i = 1; i < columnHeights.length; i++)if (columnHeights[i] < columnHeights[columnIndex]) columnIndex = i;
        var left = columnIndex * (columnWidth + spacer);
        var top = columnHeights[columnIndex] || 0;
        columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;
        return {
            left: left,
            top: top
        };
    }
    function initOrResetDerivedValues() {
        // Track the height of each column.
        // Layout algorithm below always inserts into the shortest column.
        columnHeights = [];
        for(var i = 0; i < columnCount; i++)columnHeights[i] = 0;
    }
    function reset(params) {
        columnCount = params.columnCount;
        columnWidth = params.columnWidth;
        spacer = params.spacer;
        initOrResetDerivedValues();
    }
    cellPositioner.reset = reset;
    return cellPositioner;
}

},{"./Masonry":"c6SDN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6SDN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_SCROLLING_RESET_TIME_INTERVAL", ()=>DEFAULT_SCROLLING_RESET_TIME_INTERVAL);
parcelHelpers.export(exports, "bpfrpt_proptype_CellMeasurerCache", ()=>bpfrpt_proptype_CellMeasurerCache);
parcelHelpers.export(exports, "bpfrpt_proptype_Positioner", ()=>bpfrpt_proptype_Positioner);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _react = require("react");
var _reactLifecyclesCompat = require("react-lifecycles-compat");
var _positionCache = require("./PositionCache");
var _positionCacheDefault = parcelHelpers.interopDefault(_positionCache);
var _requestAnimationTimeout = require("../utils/requestAnimationTimeout");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _class, _temp;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var emptyObject = {};
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */ var Masonry = (_temp = _class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(Masonry, _React$PureComponent);
    function Masonry() {
        var _getPrototypeOf2;
        var _this;
        (0, _classCallCheckDefault.default)(this, Masonry);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, _possibleConstructorReturnDefault.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOfDefault.default)(Masonry)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "state", {
            isScrolling: false,
            scrollTop: 0
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_debounceResetIsScrollingId", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_invalidateOnUpdateStartIndex", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_invalidateOnUpdateStopIndex", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_positionCache", new (0, _positionCacheDefault.default)());
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_startIndex", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_startIndexMemoized", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_stopIndex", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_stopIndexMemoized", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_debounceResetIsScrollingCallback", function() {
            _this.setState({
                isScrolling: false
            });
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_setScrollingContainerRef", function(ref) {
            _this._scrollingContainer = ref;
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScroll", function(event) {
            var height = _this.props.height;
            var eventScrollTop = event.currentTarget.scrollTop; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
            // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
            // This causes a series of rapid renders that is slow for long lists.
            // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.
            var scrollTop = Math.min(Math.max(0, _this._getEstimatedTotalHeight() - height), eventScrollTop); // On iOS, we can arrive at negative offsets by swiping past the start or end.
            // Avoid re-rendering in this case as it can cause problems; see #532 for more.
            if (eventScrollTop !== scrollTop) return;
             // Prevent pointer events from interrupting a smooth scroll
            _this._debounceResetIsScrolling(); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
            // Don't force a re-render if this is the case.
            // The mouse may move faster then the animation frame does.
            // Use requestAnimationFrame to avoid over-updating.
            if (_this.state.scrollTop !== scrollTop) _this.setState({
                isScrolling: true,
                scrollTop: scrollTop
            });
        });
        return _this;
    }
    (0, _createClassDefault.default)(Masonry, [
        {
            key: "clearCellPositions",
            value: function clearCellPositions() {
                this._positionCache = new (0, _positionCacheDefault.default)();
                this.forceUpdate();
            } // HACK This method signature was intended for Grid
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender(_ref) {
                var index = _ref.rowIndex;
                if (this._invalidateOnUpdateStartIndex === null) {
                    this._invalidateOnUpdateStartIndex = index;
                    this._invalidateOnUpdateStopIndex = index;
                } else {
                    this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
                    this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
                }
            }
        },
        {
            key: "recomputeCellPositions",
            value: function recomputeCellPositions() {
                var stopIndex = this._positionCache.count - 1;
                this._positionCache = new (0, _positionCacheDefault.default)();
                this._populatePositionCache(0, stopIndex);
                this.forceUpdate();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._checkInvalidateOnUpdate();
                this._invokeOnScrollCallback();
                this._invokeOnCellsRenderedCallback();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                this._checkInvalidateOnUpdate();
                this._invokeOnScrollCallback();
                this._invokeOnCellsRenderedCallback();
                if (this.props.scrollTop !== prevProps.scrollTop) this._debounceResetIsScrolling();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this._debounceResetIsScrollingId) (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, autoHeight = _this$props.autoHeight, cellCount = _this$props.cellCount, cellMeasurerCache = _this$props.cellMeasurerCache, cellRenderer = _this$props.cellRenderer, className = _this$props.className, height = _this$props.height, id = _this$props.id, keyMapper = _this$props.keyMapper, overscanByPixels = _this$props.overscanByPixels, role = _this$props.role, style = _this$props.style, tabIndex = _this$props.tabIndex, width = _this$props.width, rowDirection = _this$props.rowDirection;
                var _this$state = this.state, isScrolling = _this$state.isScrolling, scrollTop = _this$state.scrollTop;
                var children = [];
                var estimateTotalHeight = this._getEstimatedTotalHeight();
                var shortestColumnSize = this._positionCache.shortestColumnSize;
                var measuredCellCount = this._positionCache.count;
                var startIndex = 0;
                var stopIndex;
                this._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height + overscanByPixels * 2, function(index, left, top) {
                    var _style;
                    if (typeof stopIndex === 'undefined') {
                        startIndex = index;
                        stopIndex = index;
                    } else {
                        startIndex = Math.min(startIndex, index);
                        stopIndex = Math.max(stopIndex, index);
                    }
                    children.push(cellRenderer({
                        index: index,
                        isScrolling: isScrolling,
                        key: keyMapper(index),
                        parent: _this2,
                        style: (_style = {
                            height: cellMeasurerCache.getHeight(index)
                        }, (0, _definePropertyDefault.default)(_style, rowDirection === 'ltr' ? 'left' : 'right', left), (0, _definePropertyDefault.default)(_style, "position", 'absolute'), (0, _definePropertyDefault.default)(_style, "top", top), (0, _definePropertyDefault.default)(_style, "width", cellMeasurerCache.getWidth(index)), _style)
                    }));
                }); // We need to measure additional cells for this layout
                if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
                    var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));
                    for(var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++){
                        stopIndex = _index;
                        children.push(cellRenderer({
                            index: _index,
                            isScrolling: isScrolling,
                            key: keyMapper(_index),
                            parent: this,
                            style: {
                                width: cellMeasurerCache.getWidth(_index)
                            }
                        }));
                    }
                }
                this._startIndex = startIndex;
                this._stopIndex = stopIndex;
                return _react.createElement("div", {
                    ref: this._setScrollingContainerRef,
                    "aria-label": this.props['aria-label'],
                    className: (0, _clsxDefault.default)('ReactVirtualized__Masonry', className),
                    id: id,
                    onScroll: this._onScroll,
                    role: role,
                    style: _objectSpread({
                        boxSizing: 'border-box',
                        direction: 'ltr',
                        height: autoHeight ? 'auto' : height,
                        overflowX: 'hidden',
                        overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
                        position: 'relative',
                        width: width,
                        WebkitOverflowScrolling: 'touch',
                        willChange: 'transform'
                    }, style),
                    tabIndex: tabIndex
                }, _react.createElement("div", {
                    className: "ReactVirtualized__Masonry__innerScrollContainer",
                    style: {
                        width: '100%',
                        height: estimateTotalHeight,
                        maxWidth: '100%',
                        maxHeight: estimateTotalHeight,
                        overflow: 'hidden',
                        pointerEvents: isScrolling ? 'none' : '',
                        position: 'relative'
                    }
                }, children));
            }
        },
        {
            key: "_checkInvalidateOnUpdate",
            value: function _checkInvalidateOnUpdate() {
                if (typeof this._invalidateOnUpdateStartIndex === 'number') {
                    var startIndex = this._invalidateOnUpdateStartIndex;
                    var stopIndex = this._invalidateOnUpdateStopIndex;
                    this._invalidateOnUpdateStartIndex = null;
                    this._invalidateOnUpdateStopIndex = null; // Query external layout logic for position of newly-measured cells
                    this._populatePositionCache(startIndex, stopIndex);
                    this.forceUpdate();
                }
            }
        },
        {
            key: "_debounceResetIsScrolling",
            value: function _debounceResetIsScrolling() {
                var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
                if (this._debounceResetIsScrollingId) (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
                this._debounceResetIsScrollingId = (0, _requestAnimationTimeout.requestAnimationTimeout)(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
            }
        },
        {
            key: "_getEstimatedTotalHeight",
            value: function _getEstimatedTotalHeight() {
                var _this$props2 = this.props, cellCount = _this$props2.cellCount, cellMeasurerCache = _this$props2.cellMeasurerCache, width = _this$props2.width;
                var estimatedColumnCount = Math.max(1, Math.floor(width / cellMeasurerCache.defaultWidth));
                return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
            }
        },
        {
            key: "_invokeOnScrollCallback",
            value: function _invokeOnScrollCallback() {
                var _this$props3 = this.props, height = _this$props3.height, onScroll = _this$props3.onScroll;
                var scrollTop = this.state.scrollTop;
                if (this._onScrollMemoized !== scrollTop) {
                    onScroll({
                        clientHeight: height,
                        scrollHeight: this._getEstimatedTotalHeight(),
                        scrollTop: scrollTop
                    });
                    this._onScrollMemoized = scrollTop;
                }
            }
        },
        {
            key: "_invokeOnCellsRenderedCallback",
            value: function _invokeOnCellsRenderedCallback() {
                if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
                    var onCellsRendered = this.props.onCellsRendered;
                    onCellsRendered({
                        startIndex: this._startIndex,
                        stopIndex: this._stopIndex
                    });
                    this._startIndexMemoized = this._startIndex;
                    this._stopIndexMemoized = this._stopIndex;
                }
            }
        },
        {
            key: "_populatePositionCache",
            value: function _populatePositionCache(startIndex, stopIndex) {
                var _this$props4 = this.props, cellMeasurerCache = _this$props4.cellMeasurerCache, cellPositioner = _this$props4.cellPositioner;
                for(var _index2 = startIndex; _index2 <= stopIndex; _index2++){
                    var _cellPositioner = cellPositioner(_index2), left = _cellPositioner.left, top = _cellPositioner.top;
                    this._positionCache.setPosition(_index2, left, top, cellMeasurerCache.getHeight(_index2));
                }
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.scrollTop !== undefined && prevState.scrollTop !== nextProps.scrollTop) return {
                    isScrolling: true,
                    scrollTop: nextProps.scrollTop
                };
                return null;
            }
        }
    ]);
    return Masonry;
}(_react.PureComponent), (0, _definePropertyDefault.default)(_class, "propTypes", {
    "autoHeight": (0, _propTypesDefault.default).bool.isRequired,
    "cellCount": (0, _propTypesDefault.default).number.isRequired,
    "cellMeasurerCache": function cellMeasurerCache() {
        return (typeof CellMeasurerCache === "function" ? (0, _propTypesDefault.default).instanceOf(CellMeasurerCache).isRequired : (0, _propTypesDefault.default).any.isRequired).apply(this, arguments);
    },
    "cellPositioner": function cellPositioner() {
        return (typeof Positioner === "function" ? (0, _propTypesDefault.default).instanceOf(Positioner).isRequired : (0, _propTypesDefault.default).any.isRequired).apply(this, arguments);
    },
    "cellRenderer": function cellRenderer() {
        return (typeof CellRenderer === "function" ? (0, _propTypesDefault.default).instanceOf(CellRenderer).isRequired : (0, _propTypesDefault.default).any.isRequired).apply(this, arguments);
    },
    "className": (0, _propTypesDefault.default).string,
    "height": (0, _propTypesDefault.default).number.isRequired,
    "id": (0, _propTypesDefault.default).string,
    "keyMapper": function keyMapper() {
        return (typeof KeyMapper === "function" ? (0, _propTypesDefault.default).instanceOf(KeyMapper).isRequired : (0, _propTypesDefault.default).any.isRequired).apply(this, arguments);
    },
    "onCellsRendered": function onCellsRendered() {
        return (typeof OnCellsRenderedCallback === "function" ? (0, _propTypesDefault.default).instanceOf(OnCellsRenderedCallback) : (0, _propTypesDefault.default).any).apply(this, arguments);
    },
    "onScroll": function onScroll() {
        return (typeof OnScrollCallback === "function" ? (0, _propTypesDefault.default).instanceOf(OnScrollCallback) : (0, _propTypesDefault.default).any).apply(this, arguments);
    },
    "overscanByPixels": (0, _propTypesDefault.default).number.isRequired,
    "role": (0, _propTypesDefault.default).string.isRequired,
    "scrollingResetTimeInterval": (0, _propTypesDefault.default).number.isRequired,
    "style": function style(props, propName, componentName) {
        if (!Object.prototype.hasOwnProperty.call(props, propName)) throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    },
    "tabIndex": (0, _propTypesDefault.default).number.isRequired,
    "width": (0, _propTypesDefault.default).number.isRequired,
    "rowDirection": (0, _propTypesDefault.default).string.isRequired,
    "scrollTop": (0, _propTypesDefault.default).number
}), _temp);
(0, _definePropertyDefault.default)(Masonry, "defaultProps", {
    autoHeight: false,
    keyMapper: identity,
    onCellsRendered: noop,
    onScroll: noop,
    overscanByPixels: 20,
    role: 'grid',
    scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
    style: emptyObject,
    tabIndex: 0,
    rowDirection: 'ltr'
});
function identity(value) {
    return value;
}
function noop() {}
var bpfrpt_proptype_CellMeasurerCache = {
    "defaultHeight": (0, _propTypesDefault.default).number.isRequired,
    "defaultWidth": (0, _propTypesDefault.default).number.isRequired,
    "getHeight": (0, _propTypesDefault.default).func.isRequired,
    "getWidth": (0, _propTypesDefault.default).func.isRequired
};
(0, _reactLifecyclesCompat.polyfill)(Masonry);
exports.default = Masonry;
var bpfrpt_proptype_Positioner = (0, (0, _propTypesDefault.default).func);

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","clsx":"83C22","react":"21dqq","react-lifecycles-compat":"3f3fU","./PositionCache":"kmU9h","../utils/requestAnimationTimeout":"fMoXC","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmU9h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PositionCache);
var _slicedToArray = require("@babel/runtime/helpers/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _intervalTree = require("../vendor/intervalTree");
var _intervalTreeDefault = parcelHelpers.interopDefault(_intervalTree);
// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var PositionCache = /*#__PURE__*/ function() {
    function PositionCache() {
        (0, _classCallCheckDefault.default)(this, PositionCache);
        (0, _definePropertyDefault.default)(this, "_columnSizeMap", {});
        (0, _definePropertyDefault.default)(this, "_intervalTree", (0, _intervalTreeDefault.default)());
        (0, _definePropertyDefault.default)(this, "_leftMap", {});
    }
    (0, _createClassDefault.default)(PositionCache, [
        {
            key: "estimateTotalHeight",
            value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
                var unmeasuredCellCount = cellCount - this.count;
                return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
            } // Render all cells visible within the viewport range defined.
        },
        {
            key: "range",
            value: function range(scrollTop, clientHeight, renderCallback) {
                var _this = this;
                this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function(_ref) {
                    var _ref2 = (0, _slicedToArrayDefault.default)(_ref, 3), top = _ref2[0], _ = _ref2[1], index = _ref2[2];
                    return renderCallback(index, _this._leftMap[index], top);
                });
            }
        },
        {
            key: "setPosition",
            value: function setPosition(index, left, top, height) {
                this._intervalTree.insert([
                    top,
                    top + height,
                    index
                ]);
                this._leftMap[index] = left;
                var columnSizeMap = this._columnSizeMap;
                var columnHeight = columnSizeMap[left];
                if (columnHeight === undefined) columnSizeMap[left] = top + height;
                else columnSizeMap[left] = Math.max(columnHeight, top + height);
            }
        },
        {
            key: "count",
            get: function get() {
                return this._intervalTree.count;
            }
        },
        {
            key: "shortestColumnSize",
            get: function get() {
                var columnSizeMap = this._columnSizeMap;
                var size = 0;
                for(var i in columnSizeMap){
                    var height = columnSizeMap[i];
                    size = size === 0 ? height : Math.min(size, height);
                }
                return size;
            }
        },
        {
            key: "tallestColumnSize",
            get: function get() {
                var columnSizeMap = this._columnSizeMap;
                var size = 0;
                for(var i in columnSizeMap){
                    var height = columnSizeMap[i];
                    size = Math.max(size, height);
                }
                return size;
            }
        }
    ]);
    return PositionCache;
}();

},{"@babel/runtime/helpers/slicedToArray":"6AJmz","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/defineProperty":"4x6r7","../vendor/intervalTree":"53ZZk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6AJmz":[function(require,module,exports,__globalThis) {
var arrayWithHoles = require("a3af206dbd14b1b5");
var iterableToArrayLimit = require("c109e0e3b1a7ef05");
var unsupportedIterableToArray = require("6782568c4383bd49");
var nonIterableRest = require("1e06d43f4bd6e532");
function _slicedToArray(r, e) {
    return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"a3af206dbd14b1b5":"5CPOx","c109e0e3b1a7ef05":"2B9nq","6782568c4383bd49":"cFxnT","1e06d43f4bd6e532":"9O5RF"}],"5CPOx":[function(require,module,exports,__globalThis) {
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"2B9nq":[function(require,module,exports,__globalThis) {
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"9O5RF":[function(require,module,exports,__globalThis) {
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"53ZZk":[function(require,module,exports,__globalThis) {
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createWrapper);
var _binarySearchBounds = require("./binarySearchBounds");
var _binarySearchBoundsDefault = parcelHelpers.interopDefault(_binarySearchBounds);
var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;
function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
    this.mid = mid;
    this.left = left;
    this.right = right;
    this.leftPoints = leftPoints;
    this.rightPoints = rightPoints;
    this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}
var proto = IntervalTreeNode.prototype;
function copy(a, b) {
    a.mid = b.mid;
    a.left = b.left;
    a.right = b.right;
    a.leftPoints = b.leftPoints;
    a.rightPoints = b.rightPoints;
    a.count = b.count;
}
function rebuild(node, intervals) {
    var ntree = createIntervalTree(intervals);
    node.mid = ntree.mid;
    node.left = ntree.left;
    node.right = ntree.right;
    node.leftPoints = ntree.leftPoints;
    node.rightPoints = ntree.rightPoints;
    node.count = ntree.count;
}
function rebuildWithInterval(node, interval) {
    var intervals = node.intervals([]);
    intervals.push(interval);
    rebuild(node, intervals);
}
function rebuildWithoutInterval(node, interval) {
    var intervals = node.intervals([]);
    var idx = intervals.indexOf(interval);
    if (idx < 0) return NOT_FOUND;
    intervals.splice(idx, 1);
    rebuild(node, intervals);
    return SUCCESS;
}
proto.intervals = function(result) {
    result.push.apply(result, this.leftPoints);
    if (this.left) this.left.intervals(result);
    if (this.right) this.right.intervals(result);
    return result;
};
proto.insert = function(interval) {
    var weight = this.count - this.leftPoints.length;
    this.count += 1;
    if (interval[1] < this.mid) {
        if (this.left) {
            if (4 * (this.left.count + 1) > 3 * (weight + 1)) rebuildWithInterval(this, interval);
            else this.left.insert(interval);
        } else this.left = createIntervalTree([
            interval
        ]);
    } else if (interval[0] > this.mid) {
        if (this.right) {
            if (4 * (this.right.count + 1) > 3 * (weight + 1)) rebuildWithInterval(this, interval);
            else this.right.insert(interval);
        } else this.right = createIntervalTree([
            interval
        ]);
    } else {
        var l = (0, _binarySearchBoundsDefault.default).ge(this.leftPoints, interval, compareBegin);
        var r = (0, _binarySearchBoundsDefault.default).ge(this.rightPoints, interval, compareEnd);
        this.leftPoints.splice(l, 0, interval);
        this.rightPoints.splice(r, 0, interval);
    }
};
proto.remove = function(interval) {
    var weight = this.count - this.leftPoints;
    if (interval[1] < this.mid) {
        if (!this.left) return NOT_FOUND;
        var rw = this.right ? this.right.count : 0;
        if (4 * rw > 3 * (weight - 1)) return rebuildWithoutInterval(this, interval);
        var r = this.left.remove(interval);
        if (r === EMPTY) {
            this.left = null;
            this.count -= 1;
            return SUCCESS;
        } else if (r === SUCCESS) this.count -= 1;
        return r;
    } else if (interval[0] > this.mid) {
        if (!this.right) return NOT_FOUND;
        var lw = this.left ? this.left.count : 0;
        if (4 * lw > 3 * (weight - 1)) return rebuildWithoutInterval(this, interval);
        var r = this.right.remove(interval);
        if (r === EMPTY) {
            this.right = null;
            this.count -= 1;
            return SUCCESS;
        } else if (r === SUCCESS) this.count -= 1;
        return r;
    } else {
        if (this.count === 1) {
            if (this.leftPoints[0] === interval) return EMPTY;
            else return NOT_FOUND;
        }
        if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
            if (this.left && this.right) {
                var p = this;
                var n = this.left;
                while(n.right){
                    p = n;
                    n = n.right;
                }
                if (p === this) n.right = this.right;
                else {
                    var l = this.left;
                    var r = this.right;
                    p.count -= n.count;
                    p.right = n.left;
                    n.left = l;
                    n.right = r;
                }
                copy(this, n);
                this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
            } else if (this.left) copy(this, this.left);
            else copy(this, this.right);
            return SUCCESS;
        }
        for(var l = (0, _binarySearchBoundsDefault.default).ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l){
            if (this.leftPoints[l][0] !== interval[0]) break;
            if (this.leftPoints[l] === interval) {
                this.count -= 1;
                this.leftPoints.splice(l, 1);
                for(var r = (0, _binarySearchBoundsDefault.default).ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r){
                    if (this.rightPoints[r][1] !== interval[1]) break;
                    else if (this.rightPoints[r] === interval) {
                        this.rightPoints.splice(r, 1);
                        return SUCCESS;
                    }
                }
            }
        }
        return NOT_FOUND;
    }
};
function reportLeftRange(arr, hi, cb) {
    for(var i = 0; i < arr.length && arr[i][0] <= hi; ++i){
        var r = cb(arr[i]);
        if (r) return r;
    }
}
function reportRightRange(arr, lo, cb) {
    for(var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i){
        var r = cb(arr[i]);
        if (r) return r;
    }
}
function reportRange(arr, cb) {
    for(var i = 0; i < arr.length; ++i){
        var r = cb(arr[i]);
        if (r) return r;
    }
}
proto.queryPoint = function(x, cb) {
    if (x < this.mid) {
        if (this.left) {
            var r = this.left.queryPoint(x, cb);
            if (r) return r;
        }
        return reportLeftRange(this.leftPoints, x, cb);
    } else if (x > this.mid) {
        if (this.right) {
            var r = this.right.queryPoint(x, cb);
            if (r) return r;
        }
        return reportRightRange(this.rightPoints, x, cb);
    } else return reportRange(this.leftPoints, cb);
};
proto.queryInterval = function(lo, hi, cb) {
    if (lo < this.mid && this.left) {
        var r = this.left.queryInterval(lo, hi, cb);
        if (r) return r;
    }
    if (hi > this.mid && this.right) {
        var r = this.right.queryInterval(lo, hi, cb);
        if (r) return r;
    }
    if (hi < this.mid) return reportLeftRange(this.leftPoints, hi, cb);
    else if (lo > this.mid) return reportRightRange(this.rightPoints, lo, cb);
    else return reportRange(this.leftPoints, cb);
};
function compareNumbers(a, b) {
    return a - b;
}
function compareBegin(a, b) {
    var d = a[0] - b[0];
    if (d) return d;
    return a[1] - b[1];
}
function compareEnd(a, b) {
    var d = a[1] - b[1];
    if (d) return d;
    return a[0] - b[0];
}
function createIntervalTree(intervals) {
    if (intervals.length === 0) return null;
    var pts = [];
    for(var i = 0; i < intervals.length; ++i)pts.push(intervals[i][0], intervals[i][1]);
    pts.sort(compareNumbers);
    var mid = pts[pts.length >> 1];
    var leftIntervals = [];
    var rightIntervals = [];
    var centerIntervals = [];
    for(var i = 0; i < intervals.length; ++i){
        var s = intervals[i];
        if (s[1] < mid) leftIntervals.push(s);
        else if (mid < s[0]) rightIntervals.push(s);
        else centerIntervals.push(s);
    } //Split center intervals
    var leftPoints = centerIntervals;
    var rightPoints = centerIntervals.slice();
    leftPoints.sort(compareBegin);
    rightPoints.sort(compareEnd);
    return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
} //User friendly wrapper that makes it possible to support empty trees
function IntervalTree(root) {
    this.root = root;
}
var tproto = IntervalTree.prototype;
tproto.insert = function(interval) {
    if (this.root) this.root.insert(interval);
    else this.root = new IntervalTreeNode(interval[0], null, null, [
        interval
    ], [
        interval
    ]);
};
tproto.remove = function(interval) {
    if (this.root) {
        var r = this.root.remove(interval);
        if (r === EMPTY) this.root = null;
        return r !== NOT_FOUND;
    }
    return false;
};
tproto.queryPoint = function(p, cb) {
    if (this.root) return this.root.queryPoint(p, cb);
};
tproto.queryInterval = function(lo, hi, cb) {
    if (lo <= hi && this.root) return this.root.queryInterval(lo, hi, cb);
};
Object.defineProperty(tproto, 'count', {
    get: function get() {
        if (this.root) return this.root.count;
        return 0;
    }
});
Object.defineProperty(tproto, 'intervals', {
    get: function get() {
        if (this.root) return this.root.intervals([]);
        return [];
    }
});
function createWrapper(intervals) {
    if (!intervals || intervals.length === 0) return new IntervalTree(null);
    return new IntervalTree(createIntervalTree(intervals));
}

},{"./binarySearchBounds":"hDee1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDee1":[function(require,module,exports,__globalThis) {
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _GEA(a, l, h, y) {
    var i = h + 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x >= y) {
            i = m;
            h = m - 1;
        } else l = m + 1;
    }
    return i;
}
function _GEP(a, l, h, y, c) {
    var i = h + 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (c(x, y) >= 0) {
            i = m;
            h = m - 1;
        } else l = m + 1;
    }
    return i;
}
function dispatchBsearchGE(a, y, c, l, h) {
    if (typeof c === 'function') return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
function _GTA(a, l, h, y) {
    var i = h + 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x > y) {
            i = m;
            h = m - 1;
        } else l = m + 1;
    }
    return i;
}
function _GTP(a, l, h, y, c) {
    var i = h + 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (c(x, y) > 0) {
            i = m;
            h = m - 1;
        } else l = m + 1;
    }
    return i;
}
function dispatchBsearchGT(a, y, c, l, h) {
    if (typeof c === 'function') return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
function _LTA(a, l, h, y) {
    var i = l - 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x < y) {
            i = m;
            l = m + 1;
        } else h = m - 1;
    }
    return i;
}
function _LTP(a, l, h, y, c) {
    var i = l - 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (c(x, y) < 0) {
            i = m;
            l = m + 1;
        } else h = m - 1;
    }
    return i;
}
function dispatchBsearchLT(a, y, c, l, h) {
    if (typeof c === 'function') return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
function _LEA(a, l, h, y) {
    var i = l - 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x <= y) {
            i = m;
            l = m + 1;
        } else h = m - 1;
    }
    return i;
}
function _LEP(a, l, h, y, c) {
    var i = l - 1;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (c(x, y) <= 0) {
            i = m;
            l = m + 1;
        } else h = m - 1;
    }
    return i;
}
function dispatchBsearchLE(a, y, c, l, h) {
    if (typeof c === 'function') return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
function _EQA(a, l, h, y) {
    l;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        if (x === y) return m;
        else if (x <= y) l = m + 1;
        else h = m - 1;
    }
    return -1;
}
function _EQP(a, l, h, y, c) {
    l;
    while(l <= h){
        var m = l + h >>> 1, x = a[m];
        var p = c(x, y);
        if (p === 0) return m;
        else if (p <= 0) l = m + 1;
        else h = m - 1;
    }
    return -1;
}
function dispatchBsearchEQ(a, y, c, l, h) {
    if (typeof c === 'function') return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
    else return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
}
exports.default = {
    ge: dispatchBsearchGE,
    gt: dispatchBsearchGT,
    lt: dispatchBsearchLT,
    le: dispatchBsearchLE,
    eq: dispatchBsearchEQ
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gqq0S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiGrid", ()=>(0, _multiGridDefault.default));
var _multiGrid = require("./MultiGrid");
var _multiGridDefault = parcelHelpers.interopDefault(_multiGrid);
exports.default = (0, _multiGridDefault.default);

},{"./MultiGrid":"7Ofj1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ofj1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _extends = require("@babel/runtime/helpers/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _objectWithoutProperties = require("@babel/runtime/helpers/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _reactLifecyclesCompat = require("react-lifecycles-compat");
var _cellMeasurerCacheDecorator = require("./CellMeasurerCacheDecorator");
var _cellMeasurerCacheDecoratorDefault = parcelHelpers.interopDefault(_cellMeasurerCacheDecorator);
var _grid = require("../Grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var SCROLLBAR_SIZE_BUFFER = 20;
/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */ var MultiGrid = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(MultiGrid, _React$PureComponent);
    function MultiGrid(props, context) {
        var _this;
        (0, _classCallCheckDefault.default)(this, MultiGrid);
        _this = (0, _possibleConstructorReturnDefault.default)(this, (0, _getPrototypeOfDefault.default)(MultiGrid).call(this, props, context));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "state", {
            scrollLeft: 0,
            scrollTop: 0,
            scrollbarSize: 0,
            showHorizontalScrollbar: false,
            showVerticalScrollbar: false
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_deferredInvalidateColumnIndex", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_deferredInvalidateRowIndex", null);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_bottomLeftGridRef", function(ref) {
            _this._bottomLeftGrid = ref;
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_bottomRightGridRef", function(ref) {
            _this._bottomRightGrid = ref;
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_cellRendererBottomLeftGrid", function(_ref) {
            var rowIndex = _ref.rowIndex, rest = (0, _objectWithoutPropertiesDefault.default)(_ref, [
                "rowIndex"
            ]);
            var _this$props = _this.props, cellRenderer = _this$props.cellRenderer, fixedRowCount = _this$props.fixedRowCount, rowCount = _this$props.rowCount;
            if (rowIndex === rowCount - fixedRowCount) return _react.createElement("div", {
                key: rest.key,
                style: _objectSpread({}, rest.style, {
                    height: SCROLLBAR_SIZE_BUFFER
                })
            });
            else return cellRenderer(_objectSpread({}, rest, {
                parent: (0, _assertThisInitializedDefault.default)(_this),
                rowIndex: rowIndex + fixedRowCount
            }));
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_cellRendererBottomRightGrid", function(_ref2) {
            var columnIndex = _ref2.columnIndex, rowIndex = _ref2.rowIndex, rest = (0, _objectWithoutPropertiesDefault.default)(_ref2, [
                "columnIndex",
                "rowIndex"
            ]);
            var _this$props2 = _this.props, cellRenderer = _this$props2.cellRenderer, fixedColumnCount = _this$props2.fixedColumnCount, fixedRowCount = _this$props2.fixedRowCount;
            return cellRenderer(_objectSpread({}, rest, {
                columnIndex: columnIndex + fixedColumnCount,
                parent: (0, _assertThisInitializedDefault.default)(_this),
                rowIndex: rowIndex + fixedRowCount
            }));
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_cellRendererTopRightGrid", function(_ref3) {
            var columnIndex = _ref3.columnIndex, rest = (0, _objectWithoutPropertiesDefault.default)(_ref3, [
                "columnIndex"
            ]);
            var _this$props3 = _this.props, cellRenderer = _this$props3.cellRenderer, columnCount = _this$props3.columnCount, fixedColumnCount = _this$props3.fixedColumnCount;
            if (columnIndex === columnCount - fixedColumnCount) return _react.createElement("div", {
                key: rest.key,
                style: _objectSpread({}, rest.style, {
                    width: SCROLLBAR_SIZE_BUFFER
                })
            });
            else return cellRenderer(_objectSpread({}, rest, {
                columnIndex: columnIndex + fixedColumnCount,
                parent: (0, _assertThisInitializedDefault.default)(_this)
            }));
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_columnWidthRightGrid", function(_ref4) {
            var index = _ref4.index;
            var _this$props4 = _this.props, columnCount = _this$props4.columnCount, fixedColumnCount = _this$props4.fixedColumnCount, columnWidth = _this$props4.columnWidth;
            var _this$state = _this.state, scrollbarSize = _this$state.scrollbarSize, showHorizontalScrollbar = _this$state.showHorizontalScrollbar; // An extra cell is added to the count
            // This gives the smaller Grid extra room for offset,
            // In case the main (bottom right) Grid has a scrollbar
            // If no scrollbar, the extra space is overflow:hidden anyway
            if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) return scrollbarSize;
            return typeof columnWidth === 'function' ? columnWidth({
                index: index + fixedColumnCount
            }) : columnWidth;
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScroll", function(scrollInfo) {
            var scrollLeft = scrollInfo.scrollLeft, scrollTop = scrollInfo.scrollTop;
            _this.setState({
                scrollLeft: scrollLeft,
                scrollTop: scrollTop
            });
            var onScroll = _this.props.onScroll;
            if (onScroll) onScroll(scrollInfo);
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScrollbarPresenceChange", function(_ref5) {
            var horizontal = _ref5.horizontal, size = _ref5.size, vertical = _ref5.vertical;
            var _this$state2 = _this.state, showHorizontalScrollbar = _this$state2.showHorizontalScrollbar, showVerticalScrollbar = _this$state2.showVerticalScrollbar;
            if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
                _this.setState({
                    scrollbarSize: size,
                    showHorizontalScrollbar: horizontal,
                    showVerticalScrollbar: vertical
                });
                var onScrollbarPresenceChange = _this.props.onScrollbarPresenceChange;
                if (typeof onScrollbarPresenceChange === 'function') onScrollbarPresenceChange({
                    horizontal: horizontal,
                    size: size,
                    vertical: vertical
                });
            }
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScrollLeft", function(scrollInfo) {
            var scrollLeft = scrollInfo.scrollLeft;
            _this._onScroll({
                scrollLeft: scrollLeft,
                scrollTop: _this.state.scrollTop
            });
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onScrollTop", function(scrollInfo) {
            var scrollTop = scrollInfo.scrollTop;
            _this._onScroll({
                scrollTop: scrollTop,
                scrollLeft: _this.state.scrollLeft
            });
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_rowHeightBottomGrid", function(_ref6) {
            var index = _ref6.index;
            var _this$props5 = _this.props, fixedRowCount = _this$props5.fixedRowCount, rowCount = _this$props5.rowCount, rowHeight = _this$props5.rowHeight;
            var _this$state3 = _this.state, scrollbarSize = _this$state3.scrollbarSize, showVerticalScrollbar = _this$state3.showVerticalScrollbar; // An extra cell is added to the count
            // This gives the smaller Grid extra room for offset,
            // In case the main (bottom right) Grid has a scrollbar
            // If no scrollbar, the extra space is overflow:hidden anyway
            if (showVerticalScrollbar && index === rowCount - fixedRowCount) return scrollbarSize;
            return typeof rowHeight === 'function' ? rowHeight({
                index: index + fixedRowCount
            }) : rowHeight;
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_topLeftGridRef", function(ref) {
            _this._topLeftGrid = ref;
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_topRightGridRef", function(ref) {
            _this._topRightGrid = ref;
        });
        var deferredMeasurementCache = props.deferredMeasurementCache, _fixedColumnCount = props.fixedColumnCount, _fixedRowCount = props.fixedRowCount;
        _this._maybeCalculateCachedStyles(true);
        if (deferredMeasurementCache) {
            _this._deferredMeasurementCacheBottomLeftGrid = _fixedRowCount > 0 ? new (0, _cellMeasurerCacheDecoratorDefault.default)({
                cellMeasurerCache: deferredMeasurementCache,
                columnIndexOffset: 0,
                rowIndexOffset: _fixedRowCount
            }) : deferredMeasurementCache;
            _this._deferredMeasurementCacheBottomRightGrid = _fixedColumnCount > 0 || _fixedRowCount > 0 ? new (0, _cellMeasurerCacheDecoratorDefault.default)({
                cellMeasurerCache: deferredMeasurementCache,
                columnIndexOffset: _fixedColumnCount,
                rowIndexOffset: _fixedRowCount
            }) : deferredMeasurementCache;
            _this._deferredMeasurementCacheTopRightGrid = _fixedColumnCount > 0 ? new (0, _cellMeasurerCacheDecoratorDefault.default)({
                cellMeasurerCache: deferredMeasurementCache,
                columnIndexOffset: _fixedColumnCount,
                rowIndexOffset: 0
            }) : deferredMeasurementCache;
        }
        return _this;
    }
    (0, _createClassDefault.default)(MultiGrid, [
        {
            key: "forceUpdateGrids",
            value: function forceUpdateGrids() {
                this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
                this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
                this._topLeftGrid && this._topLeftGrid.forceUpdate();
                this._topRightGrid && this._topRightGrid.forceUpdate();
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender() {
                var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref7$columnIndex = _ref7.columnIndex, columnIndex = _ref7$columnIndex === void 0 ? 0 : _ref7$columnIndex, _ref7$rowIndex = _ref7.rowIndex, rowIndex = _ref7$rowIndex === void 0 ? 0 : _ref7$rowIndex;
                this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
                this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
            }
        },
        {
            key: "measureAllCells",
            value: function measureAllCells() {
                this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
                this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
                this._topLeftGrid && this._topLeftGrid.measureAllCells();
                this._topRightGrid && this._topRightGrid.measureAllCells();
            }
        },
        {
            key: "recomputeGridSize",
            value: function recomputeGridSize() {
                var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref8$columnIndex = _ref8.columnIndex, columnIndex = _ref8$columnIndex === void 0 ? 0 : _ref8$columnIndex, _ref8$rowIndex = _ref8.rowIndex, rowIndex = _ref8$rowIndex === void 0 ? 0 : _ref8$rowIndex;
                var _this$props6 = this.props, fixedColumnCount = _this$props6.fixedColumnCount, fixedRowCount = _this$props6.fixedRowCount;
                var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
                var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);
                this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
                    columnIndex: columnIndex,
                    rowIndex: adjustedRowIndex
                });
                this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
                    columnIndex: adjustedColumnIndex,
                    rowIndex: adjustedRowIndex
                });
                this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
                    columnIndex: columnIndex,
                    rowIndex: rowIndex
                });
                this._topRightGrid && this._topRightGrid.recomputeGridSize({
                    columnIndex: adjustedColumnIndex,
                    rowIndex: rowIndex
                });
                this._leftGridWidth = null;
                this._topGridHeight = null;
                this._maybeCalculateCachedStyles(true);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this$props7 = this.props, scrollLeft = _this$props7.scrollLeft, scrollTop = _this$props7.scrollTop;
                if (scrollLeft > 0 || scrollTop > 0) {
                    var newState = {};
                    if (scrollLeft > 0) newState.scrollLeft = scrollLeft;
                    if (scrollTop > 0) newState.scrollTop = scrollTop;
                    this.setState(newState);
                }
                this._handleInvalidatedGridSize();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this._handleInvalidatedGridSize();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props8 = this.props, onScroll = _this$props8.onScroll, onSectionRendered = _this$props8.onSectionRendered, onScrollbarPresenceChange = _this$props8.onScrollbarPresenceChange, scrollLeftProp = _this$props8.scrollLeft, scrollToColumn = _this$props8.scrollToColumn, scrollTopProp = _this$props8.scrollTop, scrollToRow = _this$props8.scrollToRow, rest = (0, _objectWithoutPropertiesDefault.default)(_this$props8, [
                    "onScroll",
                    "onSectionRendered",
                    "onScrollbarPresenceChange",
                    "scrollLeft",
                    "scrollToColumn",
                    "scrollTop",
                    "scrollToRow"
                ]);
                this._prepareForRender(); // Don't render any of our Grids if there are no cells.
                // This mirrors what Grid does,
                // And prevents us from recording inaccurage measurements when used with CellMeasurer.
                if (this.props.width === 0 || this.props.height === 0) return null;
                 // scrollTop and scrollLeft props are explicitly filtered out and ignored
                var _this$state4 = this.state, scrollLeft = _this$state4.scrollLeft, scrollTop = _this$state4.scrollTop;
                return _react.createElement("div", {
                    style: this._containerOuterStyle
                }, _react.createElement("div", {
                    style: this._containerTopStyle
                }, this._renderTopLeftGrid(rest), this._renderTopRightGrid(_objectSpread({}, rest, {
                    onScroll: onScroll,
                    scrollLeft: scrollLeft
                }))), _react.createElement("div", {
                    style: this._containerBottomStyle
                }, this._renderBottomLeftGrid(_objectSpread({}, rest, {
                    onScroll: onScroll,
                    scrollTop: scrollTop
                })), this._renderBottomRightGrid(_objectSpread({}, rest, {
                    onScroll: onScroll,
                    onSectionRendered: onSectionRendered,
                    scrollLeft: scrollLeft,
                    scrollToColumn: scrollToColumn,
                    scrollToRow: scrollToRow,
                    scrollTop: scrollTop
                }))));
            }
        },
        {
            key: "_getBottomGridHeight",
            value: function _getBottomGridHeight(props) {
                var height = props.height;
                var topGridHeight = this._getTopGridHeight(props);
                return height - topGridHeight;
            }
        },
        {
            key: "_getLeftGridWidth",
            value: function _getLeftGridWidth(props) {
                var fixedColumnCount = props.fixedColumnCount, columnWidth = props.columnWidth;
                if (this._leftGridWidth == null) {
                    if (typeof columnWidth === 'function') {
                        var leftGridWidth = 0;
                        for(var index = 0; index < fixedColumnCount; index++)leftGridWidth += columnWidth({
                            index: index
                        });
                        this._leftGridWidth = leftGridWidth;
                    } else this._leftGridWidth = columnWidth * fixedColumnCount;
                }
                return this._leftGridWidth;
            }
        },
        {
            key: "_getRightGridWidth",
            value: function _getRightGridWidth(props) {
                var width = props.width;
                var leftGridWidth = this._getLeftGridWidth(props);
                return width - leftGridWidth;
            }
        },
        {
            key: "_getTopGridHeight",
            value: function _getTopGridHeight(props) {
                var fixedRowCount = props.fixedRowCount, rowHeight = props.rowHeight;
                if (this._topGridHeight == null) {
                    if (typeof rowHeight === 'function') {
                        var topGridHeight = 0;
                        for(var index = 0; index < fixedRowCount; index++)topGridHeight += rowHeight({
                            index: index
                        });
                        this._topGridHeight = topGridHeight;
                    } else this._topGridHeight = rowHeight * fixedRowCount;
                }
                return this._topGridHeight;
            }
        },
        {
            key: "_handleInvalidatedGridSize",
            value: function _handleInvalidatedGridSize() {
                if (typeof this._deferredInvalidateColumnIndex === 'number') {
                    var columnIndex = this._deferredInvalidateColumnIndex;
                    var rowIndex = this._deferredInvalidateRowIndex;
                    this._deferredInvalidateColumnIndex = null;
                    this._deferredInvalidateRowIndex = null;
                    this.recomputeGridSize({
                        columnIndex: columnIndex,
                        rowIndex: rowIndex
                    });
                    this.forceUpdate();
                }
            }
        },
        {
            key: "_maybeCalculateCachedStyles",
            value: function _maybeCalculateCachedStyles(resetAll) {
                var _this$props9 = this.props, columnWidth = _this$props9.columnWidth, enableFixedColumnScroll = _this$props9.enableFixedColumnScroll, enableFixedRowScroll = _this$props9.enableFixedRowScroll, height = _this$props9.height, fixedColumnCount = _this$props9.fixedColumnCount, fixedRowCount = _this$props9.fixedRowCount, rowHeight = _this$props9.rowHeight, style = _this$props9.style, styleBottomLeftGrid = _this$props9.styleBottomLeftGrid, styleBottomRightGrid = _this$props9.styleBottomRightGrid, styleTopLeftGrid = _this$props9.styleTopLeftGrid, styleTopRightGrid = _this$props9.styleTopRightGrid, width = _this$props9.width;
                var sizeChange = resetAll || height !== this._lastRenderedHeight || width !== this._lastRenderedWidth;
                var leftSizeChange = resetAll || columnWidth !== this._lastRenderedColumnWidth || fixedColumnCount !== this._lastRenderedFixedColumnCount;
                var topSizeChange = resetAll || fixedRowCount !== this._lastRenderedFixedRowCount || rowHeight !== this._lastRenderedRowHeight;
                if (resetAll || sizeChange || style !== this._lastRenderedStyle) this._containerOuterStyle = _objectSpread({
                    height: height,
                    overflow: 'visible',
                    // Let :focus outline show through
                    width: width
                }, style);
                if (resetAll || sizeChange || topSizeChange) {
                    this._containerTopStyle = {
                        height: this._getTopGridHeight(this.props),
                        position: 'relative',
                        width: width
                    };
                    this._containerBottomStyle = {
                        height: height - this._getTopGridHeight(this.props),
                        overflow: 'visible',
                        // Let :focus outline show through
                        position: 'relative',
                        width: width
                    };
                }
                if (resetAll || styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid) this._bottomLeftGridStyle = _objectSpread({
                    left: 0,
                    overflowX: 'hidden',
                    overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
                    position: 'absolute'
                }, styleBottomLeftGrid);
                if (resetAll || leftSizeChange || styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid) this._bottomRightGridStyle = _objectSpread({
                    left: this._getLeftGridWidth(this.props),
                    position: 'absolute'
                }, styleBottomRightGrid);
                if (resetAll || styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) this._topLeftGridStyle = _objectSpread({
                    left: 0,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    position: 'absolute',
                    top: 0
                }, styleTopLeftGrid);
                if (resetAll || leftSizeChange || styleTopRightGrid !== this._lastRenderedStyleTopRightGrid) this._topRightGridStyle = _objectSpread({
                    left: this._getLeftGridWidth(this.props),
                    overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
                    overflowY: 'hidden',
                    position: 'absolute',
                    top: 0
                }, styleTopRightGrid);
                this._lastRenderedColumnWidth = columnWidth;
                this._lastRenderedFixedColumnCount = fixedColumnCount;
                this._lastRenderedFixedRowCount = fixedRowCount;
                this._lastRenderedHeight = height;
                this._lastRenderedRowHeight = rowHeight;
                this._lastRenderedStyle = style;
                this._lastRenderedStyleBottomLeftGrid = styleBottomLeftGrid;
                this._lastRenderedStyleBottomRightGrid = styleBottomRightGrid;
                this._lastRenderedStyleTopLeftGrid = styleTopLeftGrid;
                this._lastRenderedStyleTopRightGrid = styleTopRightGrid;
                this._lastRenderedWidth = width;
            }
        },
        {
            key: "_prepareForRender",
            value: function _prepareForRender() {
                if (this._lastRenderedColumnWidth !== this.props.columnWidth || this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount) this._leftGridWidth = null;
                if (this._lastRenderedFixedRowCount !== this.props.fixedRowCount || this._lastRenderedRowHeight !== this.props.rowHeight) this._topGridHeight = null;
                this._maybeCalculateCachedStyles();
                this._lastRenderedColumnWidth = this.props.columnWidth;
                this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
                this._lastRenderedFixedRowCount = this.props.fixedRowCount;
                this._lastRenderedRowHeight = this.props.rowHeight;
            }
        },
        {
            key: "_renderBottomLeftGrid",
            value: function _renderBottomLeftGrid(props) {
                var enableFixedColumnScroll = props.enableFixedColumnScroll, fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount, rowCount = props.rowCount, hideBottomLeftGridScrollbar = props.hideBottomLeftGridScrollbar;
                var showVerticalScrollbar = this.state.showVerticalScrollbar;
                if (!fixedColumnCount) return null;
                var additionalRowCount = showVerticalScrollbar ? 1 : 0, height = this._getBottomGridHeight(props), width = this._getLeftGridWidth(props), scrollbarSize = this.state.showVerticalScrollbar ? this.state.scrollbarSize : 0, gridWidth = hideBottomLeftGridScrollbar ? width + scrollbarSize : width;
                var bottomLeftGrid = _react.createElement((0, _gridDefault.default), (0, _extendsDefault.default)({}, props, {
                    cellRenderer: this._cellRendererBottomLeftGrid,
                    className: this.props.classNameBottomLeftGrid,
                    columnCount: fixedColumnCount,
                    deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
                    height: height,
                    onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
                    ref: this._bottomLeftGridRef,
                    rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
                    rowHeight: this._rowHeightBottomGrid,
                    style: this._bottomLeftGridStyle,
                    tabIndex: null,
                    width: gridWidth
                }));
                if (hideBottomLeftGridScrollbar) return _react.createElement("div", {
                    className: "BottomLeftGrid_ScrollWrapper",
                    style: _objectSpread({}, this._bottomLeftGridStyle, {
                        height: height,
                        width: width,
                        overflowY: 'hidden'
                    })
                }, bottomLeftGrid);
                return bottomLeftGrid;
            }
        },
        {
            key: "_renderBottomRightGrid",
            value: function _renderBottomRightGrid(props) {
                var columnCount = props.columnCount, fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount, rowCount = props.rowCount, scrollToColumn = props.scrollToColumn, scrollToRow = props.scrollToRow;
                return _react.createElement((0, _gridDefault.default), (0, _extendsDefault.default)({}, props, {
                    cellRenderer: this._cellRendererBottomRightGrid,
                    className: this.props.classNameBottomRightGrid,
                    columnCount: Math.max(0, columnCount - fixedColumnCount),
                    columnWidth: this._columnWidthRightGrid,
                    deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
                    height: this._getBottomGridHeight(props),
                    onScroll: this._onScroll,
                    onScrollbarPresenceChange: this._onScrollbarPresenceChange,
                    ref: this._bottomRightGridRef,
                    rowCount: Math.max(0, rowCount - fixedRowCount),
                    rowHeight: this._rowHeightBottomGrid,
                    scrollToColumn: scrollToColumn - fixedColumnCount,
                    scrollToRow: scrollToRow - fixedRowCount,
                    style: this._bottomRightGridStyle,
                    width: this._getRightGridWidth(props)
                }));
            }
        },
        {
            key: "_renderTopLeftGrid",
            value: function _renderTopLeftGrid(props) {
                var fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount;
                if (!fixedColumnCount || !fixedRowCount) return null;
                return _react.createElement((0, _gridDefault.default), (0, _extendsDefault.default)({}, props, {
                    className: this.props.classNameTopLeftGrid,
                    columnCount: fixedColumnCount,
                    height: this._getTopGridHeight(props),
                    ref: this._topLeftGridRef,
                    rowCount: fixedRowCount,
                    style: this._topLeftGridStyle,
                    tabIndex: null,
                    width: this._getLeftGridWidth(props)
                }));
            }
        },
        {
            key: "_renderTopRightGrid",
            value: function _renderTopRightGrid(props) {
                var columnCount = props.columnCount, enableFixedRowScroll = props.enableFixedRowScroll, fixedColumnCount = props.fixedColumnCount, fixedRowCount = props.fixedRowCount, scrollLeft = props.scrollLeft, hideTopRightGridScrollbar = props.hideTopRightGridScrollbar;
                var _this$state5 = this.state, showHorizontalScrollbar = _this$state5.showHorizontalScrollbar, scrollbarSize = _this$state5.scrollbarSize;
                if (!fixedRowCount) return null;
                var additionalColumnCount = showHorizontalScrollbar ? 1 : 0, height = this._getTopGridHeight(props), width = this._getRightGridWidth(props), additionalHeight = showHorizontalScrollbar ? scrollbarSize : 0;
                var gridHeight = height, style = this._topRightGridStyle;
                if (hideTopRightGridScrollbar) {
                    gridHeight = height + additionalHeight;
                    style = _objectSpread({}, this._topRightGridStyle, {
                        left: 0
                    });
                }
                var topRightGrid = _react.createElement((0, _gridDefault.default), (0, _extendsDefault.default)({}, props, {
                    cellRenderer: this._cellRendererTopRightGrid,
                    className: this.props.classNameTopRightGrid,
                    columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
                    columnWidth: this._columnWidthRightGrid,
                    deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
                    height: gridHeight,
                    onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
                    ref: this._topRightGridRef,
                    rowCount: fixedRowCount,
                    scrollLeft: scrollLeft,
                    style: style,
                    tabIndex: null,
                    width: width
                }));
                if (hideTopRightGridScrollbar) return _react.createElement("div", {
                    className: "TopRightGrid_ScrollWrapper",
                    style: _objectSpread({}, this._topRightGridStyle, {
                        height: height,
                        width: width,
                        overflowX: 'hidden'
                    })
                }, topRightGrid);
                return topRightGrid;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) return {
                    scrollLeft: nextProps.scrollLeft != null && nextProps.scrollLeft >= 0 ? nextProps.scrollLeft : prevState.scrollLeft,
                    scrollTop: nextProps.scrollTop != null && nextProps.scrollTop >= 0 ? nextProps.scrollTop : prevState.scrollTop
                };
                return null;
            }
        }
    ]);
    return MultiGrid;
}(_react.PureComponent);
(0, _definePropertyDefault.default)(MultiGrid, "defaultProps", {
    classNameBottomLeftGrid: '',
    classNameBottomRightGrid: '',
    classNameTopLeftGrid: '',
    classNameTopRightGrid: '',
    enableFixedColumnScroll: false,
    enableFixedRowScroll: false,
    fixedColumnCount: 0,
    fixedRowCount: 0,
    scrollToColumn: -1,
    scrollToRow: -1,
    style: {},
    styleBottomLeftGrid: {},
    styleBottomRightGrid: {},
    styleTopLeftGrid: {},
    styleTopRightGrid: {},
    hideTopRightGridScrollbar: false,
    hideBottomLeftGridScrollbar: false
});
MultiGrid.propTypes = {
    classNameBottomLeftGrid: (0, _propTypesDefault.default).string.isRequired,
    classNameBottomRightGrid: (0, _propTypesDefault.default).string.isRequired,
    classNameTopLeftGrid: (0, _propTypesDefault.default).string.isRequired,
    classNameTopRightGrid: (0, _propTypesDefault.default).string.isRequired,
    enableFixedColumnScroll: (0, _propTypesDefault.default).bool.isRequired,
    enableFixedRowScroll: (0, _propTypesDefault.default).bool.isRequired,
    fixedColumnCount: (0, _propTypesDefault.default).number.isRequired,
    fixedRowCount: (0, _propTypesDefault.default).number.isRequired,
    onScrollbarPresenceChange: (0, _propTypesDefault.default).func,
    style: (0, _propTypesDefault.default).object.isRequired,
    styleBottomLeftGrid: (0, _propTypesDefault.default).object.isRequired,
    styleBottomRightGrid: (0, _propTypesDefault.default).object.isRequired,
    styleTopLeftGrid: (0, _propTypesDefault.default).object.isRequired,
    styleTopRightGrid: (0, _propTypesDefault.default).object.isRequired,
    hideTopRightGridScrollbar: (0, _propTypesDefault.default).bool,
    hideBottomLeftGridScrollbar: (0, _propTypesDefault.default).bool
};
(0, _reactLifecyclesCompat.polyfill)(MultiGrid);
exports.default = MultiGrid;

},{"@babel/runtime/helpers/extends":"vw3vn","@babel/runtime/helpers/objectWithoutProperties":"lte4p","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","prop-types":"7wKI2","react":"21dqq","react-lifecycles-compat":"3f3fU","./CellMeasurerCacheDecorator":"61u2M","../Grid":"6STYe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61u2M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CellMeasurerCacheDecorator);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _cellMeasurer = require("../CellMeasurer");
/**
 * Caches measurements for a given cell.
 */ var CellMeasurerCacheDecorator = /*#__PURE__*/ function() {
    function CellMeasurerCacheDecorator() {
        var _this = this;
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheckDefault.default)(this, CellMeasurerCacheDecorator);
        (0, _definePropertyDefault.default)(this, "_cellMeasurerCache", void 0);
        (0, _definePropertyDefault.default)(this, "_columnIndexOffset", void 0);
        (0, _definePropertyDefault.default)(this, "_rowIndexOffset", void 0);
        (0, _definePropertyDefault.default)(this, "columnWidth", function(_ref) {
            var index = _ref.index;
            _this._cellMeasurerCache.columnWidth({
                index: index + _this._columnIndexOffset
            });
        });
        (0, _definePropertyDefault.default)(this, "rowHeight", function(_ref2) {
            var index = _ref2.index;
            _this._cellMeasurerCache.rowHeight({
                index: index + _this._rowIndexOffset
            });
        });
        var cellMeasurerCache = params.cellMeasurerCache, _params$columnIndexOf = params.columnIndexOffset, columnIndexOffset = _params$columnIndexOf === void 0 ? 0 : _params$columnIndexOf, _params$rowIndexOffse = params.rowIndexOffset, rowIndexOffset = _params$rowIndexOffse === void 0 ? 0 : _params$rowIndexOffse;
        this._cellMeasurerCache = cellMeasurerCache;
        this._columnIndexOffset = columnIndexOffset;
        this._rowIndexOffset = rowIndexOffset;
    }
    (0, _createClassDefault.default)(CellMeasurerCacheDecorator, [
        {
            key: "clear",
            value: function clear(rowIndex, columnIndex) {
                this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
            }
        },
        {
            key: "clearAll",
            value: function clearAll() {
                this._cellMeasurerCache.clearAll();
            }
        },
        {
            key: "hasFixedHeight",
            value: function hasFixedHeight() {
                return this._cellMeasurerCache.hasFixedHeight();
            }
        },
        {
            key: "hasFixedWidth",
            value: function hasFixedWidth() {
                return this._cellMeasurerCache.hasFixedWidth();
            }
        },
        {
            key: "getHeight",
            value: function getHeight(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
            }
        },
        {
            key: "getWidth",
            value: function getWidth(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
            }
        },
        {
            key: "has",
            value: function has(rowIndex) {
                var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
            }
        },
        {
            key: "set",
            value: function set(rowIndex, columnIndex, width, height) {
                this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
            }
        },
        {
            key: "defaultHeight",
            get: function get() {
                return this._cellMeasurerCache.defaultHeight;
            }
        },
        {
            key: "defaultWidth",
            get: function get() {
                return this._cellMeasurerCache.defaultWidth;
            }
        }
    ]);
    return CellMeasurerCacheDecorator;
}();

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/defineProperty":"4x6r7","../CellMeasurer":"cVyUo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ky63q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollSync", ()=>(0, _scrollSyncDefault.default));
var _scrollSync = require("./ScrollSync");
var _scrollSyncDefault = parcelHelpers.interopDefault(_scrollSync);
exports.default = (0, _scrollSyncDefault.default);

},{"./ScrollSync":"MgyGq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"MgyGq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ScrollSync);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */ var ScrollSync = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(ScrollSync, _React$PureComponent);
    function ScrollSync(props, context) {
        var _this;
        (0, _classCallCheckDefault.default)(this, ScrollSync);
        _this = (0, _possibleConstructorReturnDefault.default)(this, (0, _getPrototypeOfDefault.default)(ScrollSync).call(this, props, context));
        _this.state = {
            clientHeight: 0,
            clientWidth: 0,
            scrollHeight: 0,
            scrollLeft: 0,
            scrollTop: 0,
            scrollWidth: 0
        };
        _this._onScroll = _this._onScroll.bind((0, _assertThisInitializedDefault.default)(_this));
        return _this;
    }
    (0, _createClassDefault.default)(ScrollSync, [
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                var _this$state = this.state, clientHeight = _this$state.clientHeight, clientWidth = _this$state.clientWidth, scrollHeight = _this$state.scrollHeight, scrollLeft = _this$state.scrollLeft, scrollTop = _this$state.scrollTop, scrollWidth = _this$state.scrollWidth;
                return children({
                    clientHeight: clientHeight,
                    clientWidth: clientWidth,
                    onScroll: this._onScroll,
                    scrollHeight: scrollHeight,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    scrollWidth: scrollWidth
                });
            }
        },
        {
            key: "_onScroll",
            value: function _onScroll(_ref) {
                var clientHeight = _ref.clientHeight, clientWidth = _ref.clientWidth, scrollHeight = _ref.scrollHeight, scrollLeft = _ref.scrollLeft, scrollTop = _ref.scrollTop, scrollWidth = _ref.scrollWidth;
                this.setState({
                    clientHeight: clientHeight,
                    clientWidth: clientWidth,
                    scrollHeight: scrollHeight,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    scrollWidth: scrollWidth
                });
            }
        }
    ]);
    return ScrollSync;
}(_react.PureComponent);
ScrollSync.propTypes = {
    /**
   * Function responsible for rendering 2 or more virtualized components.
   * This function should implement the following signature:
   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
   */ children: (0, _propTypesDefault.default).func.isRequired
};

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","prop-types":"7wKI2","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwSH4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMultiSort", ()=>(0, _createMultiSortDefault.default));
parcelHelpers.export(exports, "defaultCellDataGetter", ()=>(0, _defaultCellDataGetterDefault.default));
parcelHelpers.export(exports, "defaultCellRenderer", ()=>(0, _defaultCellRendererDefault.default));
parcelHelpers.export(exports, "defaultHeaderRowRenderer", ()=>(0, _defaultHeaderRowRendererJsDefault.default));
parcelHelpers.export(exports, "defaultHeaderRenderer", ()=>(0, _defaultHeaderRendererDefault.default));
parcelHelpers.export(exports, "defaultRowRenderer", ()=>(0, _defaultRowRendererDefault.default));
parcelHelpers.export(exports, "Column", ()=>(0, _columnDefault.default));
parcelHelpers.export(exports, "SortDirection", ()=>(0, _sortDirectionDefault.default));
parcelHelpers.export(exports, "SortIndicator", ()=>(0, _sortIndicatorDefault.default));
parcelHelpers.export(exports, "Table", ()=>(0, _tableDefault.default));
var _createMultiSort = require("./createMultiSort");
var _createMultiSortDefault = parcelHelpers.interopDefault(_createMultiSort);
var _defaultCellDataGetter = require("./defaultCellDataGetter");
var _defaultCellDataGetterDefault = parcelHelpers.interopDefault(_defaultCellDataGetter);
var _defaultCellRenderer = require("./defaultCellRenderer");
var _defaultCellRendererDefault = parcelHelpers.interopDefault(_defaultCellRenderer);
var _defaultHeaderRowRendererJs = require("./defaultHeaderRowRenderer.js");
var _defaultHeaderRowRendererJsDefault = parcelHelpers.interopDefault(_defaultHeaderRowRendererJs);
var _defaultHeaderRenderer = require("./defaultHeaderRenderer");
var _defaultHeaderRendererDefault = parcelHelpers.interopDefault(_defaultHeaderRenderer);
var _defaultRowRenderer = require("./defaultRowRenderer");
var _defaultRowRendererDefault = parcelHelpers.interopDefault(_defaultRowRenderer);
var _column = require("./Column");
var _columnDefault = parcelHelpers.interopDefault(_column);
var _sortDirection = require("./SortDirection");
var _sortDirectionDefault = parcelHelpers.interopDefault(_sortDirection);
var _sortIndicator = require("./SortIndicator");
var _sortIndicatorDefault = parcelHelpers.interopDefault(_sortIndicator);
var _table = require("./Table");
var _tableDefault = parcelHelpers.interopDefault(_table);
exports.default = (0, _tableDefault.default);

},{"./createMultiSort":"8j9Dd","./defaultCellDataGetter":"2t027","./defaultCellRenderer":"8Q2ZF","./defaultHeaderRowRenderer.js":"aq47q","./defaultHeaderRenderer":"lWvjn","./defaultRowRenderer":"dgAwI","./Column":"7oeBh","./SortDirection":"ldrzV","./SortIndicator":"hPMUC","./Table":"90rDx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8j9Dd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createMultiSort);
function createMultiSort(sortCallback) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, defaultSortBy = _ref.defaultSortBy, _ref$defaultSortDirec = _ref.defaultSortDirection, defaultSortDirection = _ref$defaultSortDirec === void 0 ? {} : _ref$defaultSortDirec;
    if (!sortCallback) throw Error("Required parameter \"sortCallback\" not specified");
    var sortBy = defaultSortBy || [];
    var sortDirection = {};
    sortBy.forEach(function(dataKey) {
        sortDirection[dataKey] = defaultSortDirection[dataKey] !== undefined ? defaultSortDirection[dataKey] : 'ASC';
    });
    function sort(_ref2) {
        var defaultSortDirection = _ref2.defaultSortDirection, event = _ref2.event, dataKey = _ref2.sortBy;
        if (event.shiftKey) {
            // Shift + click appends a column to existing criteria
            if (sortDirection[dataKey] !== undefined) sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
            else {
                sortDirection[dataKey] = defaultSortDirection;
                sortBy.push(dataKey);
            }
        } else if (event.ctrlKey || event.metaKey) {
            // Control + click removes column from sort (if pressent)
            var index = sortBy.indexOf(dataKey);
            if (index >= 0) {
                sortBy.splice(index, 1);
                delete sortDirection[dataKey];
            }
        } else {
            // Clear sortBy array of all non-selected keys
            sortBy.length = 0;
            sortBy.push(dataKey); // Clear sortDirection object of all non-selected keys
            var sortDirectionKeys = Object.keys(sortDirection);
            sortDirectionKeys.forEach(function(key) {
                if (key !== dataKey) delete sortDirection[key];
            }); // If key is already selected, reverse sort direction.
            // Else, set sort direction to default direction.
            if (sortDirection[dataKey] !== undefined) sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
            else sortDirection[dataKey] = defaultSortDirection;
        } // Notify application code
        sortCallback({
            sortBy: sortBy,
            sortDirection: sortDirection
        });
    }
    return {
        sort: sort,
        sortBy: sortBy,
        sortDirection: sortDirection
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2t027":[function(require,module,exports,__globalThis) {
/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>defaultCellDataGetter);
var _types = require("./types");
function defaultCellDataGetter(_ref) {
    var dataKey = _ref.dataKey, rowData = _ref.rowData;
    if (typeof rowData.get === 'function') return rowData.get(dataKey);
    else return rowData[dataKey];
}

},{"./types":"lIB3O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lIB3O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bpfrpt_proptype_CellDataGetterParams", ()=>bpfrpt_proptype_CellDataGetterParams);
parcelHelpers.export(exports, "bpfrpt_proptype_CellRendererParams", ()=>bpfrpt_proptype_CellRendererParams);
parcelHelpers.export(exports, "bpfrpt_proptype_HeaderRowRendererParams", ()=>bpfrpt_proptype_HeaderRowRendererParams);
parcelHelpers.export(exports, "bpfrpt_proptype_HeaderRendererParams", ()=>bpfrpt_proptype_HeaderRendererParams);
parcelHelpers.export(exports, "bpfrpt_proptype_RowRendererParams", ()=>bpfrpt_proptype_RowRendererParams);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var bpfrpt_proptype_CellDataGetterParams = {
    "columnData": (0, _propTypesDefault.default).any,
    "dataKey": (0, _propTypesDefault.default).string.isRequired,
    "rowData": function rowData(props, propName, componentName) {
        if (!Object.prototype.hasOwnProperty.call(props, propName)) throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
};
var bpfrpt_proptype_CellRendererParams = {
    "cellData": (0, _propTypesDefault.default).any,
    "columnData": (0, _propTypesDefault.default).any,
    "dataKey": (0, _propTypesDefault.default).string.isRequired,
    "rowData": function rowData(props, propName, componentName) {
        if (!Object.prototype.hasOwnProperty.call(props, propName)) throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    },
    "rowIndex": (0, _propTypesDefault.default).number.isRequired
};
var bpfrpt_proptype_HeaderRowRendererParams = {
    "className": (0, _propTypesDefault.default).string.isRequired,
    "columns": (0, _propTypesDefault.default).arrayOf(function(props, propName, componentName) {
        if (!Object.prototype.hasOwnProperty.call(props, propName)) throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }).isRequired,
    "style": function style(props, propName, componentName) {
        if (!Object.prototype.hasOwnProperty.call(props, propName)) throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
};
var bpfrpt_proptype_HeaderRendererParams = {
    "columnData": (0, _propTypesDefault.default).any,
    "dataKey": (0, _propTypesDefault.default).string.isRequired,
    "disableSort": (0, _propTypesDefault.default).bool,
    "label": (0, _propTypesDefault.default).any,
    "sortBy": (0, _propTypesDefault.default).string,
    "sortDirection": (0, _propTypesDefault.default).string
};
var bpfrpt_proptype_RowRendererParams = {
    "className": (0, _propTypesDefault.default).string.isRequired,
    "columns": (0, _propTypesDefault.default).arrayOf(function(props, propName, componentName) {
        if (!Object.prototype.hasOwnProperty.call(props, propName)) throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }).isRequired,
    "index": (0, _propTypesDefault.default).number.isRequired,
    "isScrolling": (0, _propTypesDefault.default).bool.isRequired,
    "onRowClick": (0, _propTypesDefault.default).func,
    "onRowDoubleClick": (0, _propTypesDefault.default).func,
    "onRowMouseOver": (0, _propTypesDefault.default).func,
    "onRowMouseOut": (0, _propTypesDefault.default).func,
    "rowData": function rowData(props, propName, componentName) {
        if (!Object.prototype.hasOwnProperty.call(props, propName)) throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    },
    "style": function style(props, propName, componentName) {
        if (!Object.prototype.hasOwnProperty.call(props, propName)) throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    },
    "key": (0, _propTypesDefault.default).string.isRequired
};

},{"prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Q2ZF":[function(require,module,exports,__globalThis) {
/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>defaultCellRenderer);
var _types = require("./types");
function defaultCellRenderer(_ref) {
    var cellData = _ref.cellData;
    if (cellData == null) return '';
    else return String(cellData);
}

},{"./types":"lIB3O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aq47q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>defaultHeaderRowRenderer);
var _react = require("react");
var _types = require("./types");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
function defaultHeaderRowRenderer(_ref) {
    var className = _ref.className, columns = _ref.columns, style = _ref.style;
    return _react.createElement("div", {
        className: className,
        role: "row",
        style: style
    }, columns);
}
defaultHeaderRowRenderer.propTypes = (0, _types.bpfrpt_proptype_HeaderRowRendererParams) === (0, _propTypesDefault.default).any ? {} : (0, _types.bpfrpt_proptype_HeaderRowRendererParams);

},{"react":"21dqq","./types":"lIB3O","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lWvjn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>defaultHeaderRenderer);
var _react = require("react");
var _sortIndicator = require("./SortIndicator");
var _sortIndicatorDefault = parcelHelpers.interopDefault(_sortIndicator);
var _types = require("./types");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
function defaultHeaderRenderer(_ref) {
    var dataKey = _ref.dataKey, label = _ref.label, sortBy = _ref.sortBy, sortDirection = _ref.sortDirection;
    var showSortIndicator = sortBy === dataKey;
    var children = [
        _react.createElement("span", {
            className: "ReactVirtualized__Table__headerTruncatedText",
            key: "label",
            title: typeof label === 'string' ? label : null
        }, label)
    ];
    if (showSortIndicator) children.push(_react.createElement((0, _sortIndicatorDefault.default), {
        key: "SortIndicator",
        sortDirection: sortDirection
    }));
    return children;
}
defaultHeaderRenderer.propTypes = (0, _types.bpfrpt_proptype_HeaderRendererParams) === (0, _propTypesDefault.default).any ? {} : (0, _types.bpfrpt_proptype_HeaderRendererParams);

},{"react":"21dqq","./SortIndicator":"hPMUC","./types":"lIB3O","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hPMUC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SortIndicator);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _sortDirection = require("./SortDirection");
var _sortDirectionDefault = parcelHelpers.interopDefault(_sortDirection);
function SortIndicator(_ref) {
    var sortDirection = _ref.sortDirection;
    var classNames = (0, _clsxDefault.default)('ReactVirtualized__Table__sortableHeaderIcon', {
        'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === (0, _sortDirectionDefault.default).ASC,
        'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === (0, _sortDirectionDefault.default).DESC
    });
    return _react.createElement("svg", {
        className: classNames,
        width: 18,
        height: 18,
        viewBox: "0 0 24 24"
    }, sortDirection === (0, _sortDirectionDefault.default).ASC ? _react.createElement("path", {
        d: "M7 14l5-5 5 5z"
    }) : _react.createElement("path", {
        d: "M7 10l5 5 5-5z"
    }), _react.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
    }));
}
SortIndicator.propTypes = {
    sortDirection: (0, _propTypesDefault.default).oneOf([
        (0, _sortDirectionDefault.default).ASC,
        (0, _sortDirectionDefault.default).DESC
    ])
};

},{"clsx":"83C22","prop-types":"7wKI2","react":"21dqq","./SortDirection":"ldrzV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldrzV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var SortDirection = {
    /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */ ASC: 'ASC',
    /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */ DESC: 'DESC'
};
exports.default = SortDirection;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dgAwI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>defaultRowRenderer);
var _extends = require("@babel/runtime/helpers/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _react = require("react");
var _types = require("./types");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
function defaultRowRenderer(_ref) {
    var className = _ref.className, columns = _ref.columns, index = _ref.index, key = _ref.key, onRowClick = _ref.onRowClick, onRowDoubleClick = _ref.onRowDoubleClick, onRowMouseOut = _ref.onRowMouseOut, onRowMouseOver = _ref.onRowMouseOver, onRowRightClick = _ref.onRowRightClick, rowData = _ref.rowData, style = _ref.style;
    var a11yProps = {
        'aria-rowindex': index + 1
    };
    if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
        a11yProps['aria-label'] = 'row';
        a11yProps.tabIndex = 0;
        if (onRowClick) a11yProps.onClick = function(event) {
            return onRowClick({
                event: event,
                index: index,
                rowData: rowData
            });
        };
        if (onRowDoubleClick) a11yProps.onDoubleClick = function(event) {
            return onRowDoubleClick({
                event: event,
                index: index,
                rowData: rowData
            });
        };
        if (onRowMouseOut) a11yProps.onMouseOut = function(event) {
            return onRowMouseOut({
                event: event,
                index: index,
                rowData: rowData
            });
        };
        if (onRowMouseOver) a11yProps.onMouseOver = function(event) {
            return onRowMouseOver({
                event: event,
                index: index,
                rowData: rowData
            });
        };
        if (onRowRightClick) a11yProps.onContextMenu = function(event) {
            return onRowRightClick({
                event: event,
                index: index,
                rowData: rowData
            });
        };
    }
    return _react.createElement("div", (0, _extendsDefault.default)({}, a11yProps, {
        className: className,
        key: key,
        role: "row",
        style: style
    }), columns);
}
defaultRowRenderer.propTypes = (0, _types.bpfrpt_proptype_RowRendererParams) === (0, _propTypesDefault.default).any ? {} : (0, _types.bpfrpt_proptype_RowRendererParams);

},{"@babel/runtime/helpers/extends":"vw3vn","react":"21dqq","./types":"lIB3O","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oeBh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Column);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _defaultHeaderRenderer = require("./defaultHeaderRenderer");
var _defaultHeaderRendererDefault = parcelHelpers.interopDefault(_defaultHeaderRenderer);
var _defaultCellRenderer = require("./defaultCellRenderer");
var _defaultCellRendererDefault = parcelHelpers.interopDefault(_defaultCellRenderer);
var _defaultCellDataGetter = require("./defaultCellDataGetter");
var _defaultCellDataGetterDefault = parcelHelpers.interopDefault(_defaultCellDataGetter);
var _sortDirection = require("./SortDirection");
var _sortDirectionDefault = parcelHelpers.interopDefault(_sortDirection);
/**
 * Describes the header and cell contents of a table column.
 */ var Column = /*#__PURE__*/ function(_React$Component) {
    (0, _inheritsDefault.default)(Column, _React$Component);
    function Column() {
        (0, _classCallCheckDefault.default)(this, Column);
        return (0, _possibleConstructorReturnDefault.default)(this, (0, _getPrototypeOfDefault.default)(Column).apply(this, arguments));
    }
    return Column;
}(_react.Component);
(0, _definePropertyDefault.default)(Column, "defaultProps", {
    cellDataGetter: (0, _defaultCellDataGetterDefault.default),
    cellRenderer: (0, _defaultCellRendererDefault.default),
    defaultSortDirection: (0, _sortDirectionDefault.default).ASC,
    flexGrow: 0,
    flexShrink: 1,
    headerRenderer: (0, _defaultHeaderRendererDefault.default),
    style: {}
});
Column.propTypes = {
    /** Optional aria-label value to set on the column header */ 'aria-label': (0, _propTypesDefault.default).string,
    /**
   * Callback responsible for returning a cell's data, given its :dataKey
   * ({ columnData: any, dataKey: string, rowData: any }): any
   */ cellDataGetter: (0, _propTypesDefault.default).func,
    /**
   * Callback responsible for rendering a cell's contents.
   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
   */ cellRenderer: (0, _propTypesDefault.default).func,
    /** Optional CSS class to apply to cell */ className: (0, _propTypesDefault.default).string,
    /** Optional additional data passed to this column's :cellDataGetter */ columnData: (0, _propTypesDefault.default).object,
    /** Uniquely identifies the row-data attribute corresponding to this cell */ dataKey: (0, _propTypesDefault.default).any.isRequired,
    /** Optional direction to be used when clicked the first time */ defaultSortDirection: (0, _propTypesDefault.default).oneOf([
        (0, _sortDirectionDefault.default).ASC,
        (0, _sortDirectionDefault.default).DESC
    ]),
    /** If sort is enabled for the table at large, disable it for this column */ disableSort: (0, _propTypesDefault.default).bool,
    /** Flex grow style; defaults to 0 */ flexGrow: (0, _propTypesDefault.default).number,
    /** Flex shrink style; defaults to 1 */ flexShrink: (0, _propTypesDefault.default).number,
    /** Optional CSS class to apply to this column's header */ headerClassName: (0, _propTypesDefault.default).string,
    /**
   * Optional callback responsible for rendering a column header contents.
   * ({ columnData: object, dataKey: string, disableSort: boolean, label: node, sortBy: string, sortDirection: string }): PropTypes.node
   */ headerRenderer: (0, _propTypesDefault.default).func.isRequired,
    /** Optional inline style to apply to this column's header */ headerStyle: (0, _propTypesDefault.default).object,
    /** Optional id to set on the column header */ id: (0, _propTypesDefault.default).string,
    /** Header label for this column */ label: (0, _propTypesDefault.default).node,
    /** Maximum width of column; this property will only be used if :flexGrow is > 0. */ maxWidth: (0, _propTypesDefault.default).number,
    /** Minimum width of column. */ minWidth: (0, _propTypesDefault.default).number,
    /** Optional inline style to apply to cell */ style: (0, _propTypesDefault.default).object,
    /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */ width: (0, _propTypesDefault.default).number.isRequired
};

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","prop-types":"7wKI2","react":"21dqq","./defaultHeaderRenderer":"lWvjn","./defaultCellRenderer":"8Q2ZF","./defaultCellDataGetter":"2t027","./SortDirection":"ldrzV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"90rDx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Table);
var _extends = require("@babel/runtime/helpers/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _column = require("./Column");
var _columnDefault = parcelHelpers.interopDefault(_column);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _react = require("react");
var _reactDom = require("react-dom");
var _grid = require("../Grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _defaultRowRenderer = require("./defaultRowRenderer");
var _defaultRowRendererDefault = parcelHelpers.interopDefault(_defaultRowRenderer);
var _defaultHeaderRowRenderer = require("./defaultHeaderRowRenderer");
var _defaultHeaderRowRendererDefault = parcelHelpers.interopDefault(_defaultHeaderRowRenderer);
var _sortDirection = require("./SortDirection");
var _sortDirectionDefault = parcelHelpers.interopDefault(_sortDirection);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */ var Table = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(Table, _React$PureComponent);
    function Table(props) {
        var _this;
        (0, _classCallCheckDefault.default)(this, Table);
        _this = (0, _possibleConstructorReturnDefault.default)(this, (0, _getPrototypeOfDefault.default)(Table).call(this, props));
        _this.state = {
            scrollbarWidth: 0
        };
        _this._createColumn = _this._createColumn.bind((0, _assertThisInitializedDefault.default)(_this));
        _this._createRow = _this._createRow.bind((0, _assertThisInitializedDefault.default)(_this));
        _this._onScroll = _this._onScroll.bind((0, _assertThisInitializedDefault.default)(_this));
        _this._onSectionRendered = _this._onSectionRendered.bind((0, _assertThisInitializedDefault.default)(_this));
        _this._setRef = _this._setRef.bind((0, _assertThisInitializedDefault.default)(_this));
        return _this;
    }
    (0, _createClassDefault.default)(Table, [
        {
            key: "forceUpdateGrid",
            value: function forceUpdateGrid() {
                if (this.Grid) this.Grid.forceUpdate();
            }
        },
        {
            key: "getOffsetForRow",
            value: function getOffsetForRow(_ref) {
                var alignment = _ref.alignment, index = _ref.index;
                if (this.Grid) {
                    var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
                        alignment: alignment,
                        rowIndex: index
                    }), scrollTop = _this$Grid$getOffsetF.scrollTop;
                    return scrollTop;
                }
                return 0;
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function invalidateCellSizeAfterRender(_ref2) {
                var columnIndex = _ref2.columnIndex, rowIndex = _ref2.rowIndex;
                if (this.Grid) this.Grid.invalidateCellSizeAfterRender({
                    rowIndex: rowIndex,
                    columnIndex: columnIndex
                });
            }
        },
        {
            key: "measureAllRows",
            value: function measureAllRows() {
                if (this.Grid) this.Grid.measureAllCells();
            }
        },
        {
            key: "recomputeGridSize",
            value: function recomputeGridSize() {
                var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref3$columnIndex = _ref3.columnIndex, columnIndex = _ref3$columnIndex === void 0 ? 0 : _ref3$columnIndex, _ref3$rowIndex = _ref3.rowIndex, rowIndex = _ref3$rowIndex === void 0 ? 0 : _ref3$rowIndex;
                if (this.Grid) this.Grid.recomputeGridSize({
                    rowIndex: rowIndex,
                    columnIndex: columnIndex
                });
            }
        },
        {
            key: "recomputeRowHeights",
            value: function recomputeRowHeights() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.recomputeGridSize({
                    rowIndex: index
                });
            }
        },
        {
            key: "scrollToPosition",
            value: function scrollToPosition() {
                var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.scrollToPosition({
                    scrollTop: scrollTop
                });
            }
        },
        {
            key: "scrollToRow",
            value: function scrollToRow() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (this.Grid) this.Grid.scrollToCell({
                    columnIndex: 0,
                    rowIndex: index
                });
            }
        },
        {
            key: "getScrollbarWidth",
            value: function getScrollbarWidth() {
                if (this.Grid) {
                    var _Grid = (0, _reactDom.findDOMNode)(this.Grid);
                    var clientWidth = _Grid.clientWidth || 0;
                    var offsetWidth = _Grid.offsetWidth || 0;
                    return offsetWidth - clientWidth;
                }
                return 0;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._setScrollbarWidth();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this._setScrollbarWidth();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, children = _this$props.children, className = _this$props.className, disableHeader = _this$props.disableHeader, gridClassName = _this$props.gridClassName, gridStyle = _this$props.gridStyle, headerHeight = _this$props.headerHeight, headerRowRenderer = _this$props.headerRowRenderer, height = _this$props.height, id = _this$props.id, noRowsRenderer = _this$props.noRowsRenderer, rowClassName = _this$props.rowClassName, rowStyle = _this$props.rowStyle, scrollToIndex = _this$props.scrollToIndex, style = _this$props.style, width = _this$props.width;
                var scrollbarWidth = this.state.scrollbarWidth;
                var availableRowsHeight = disableHeader ? height : height - headerHeight;
                var rowClass = typeof rowClassName === 'function' ? rowClassName({
                    index: -1
                }) : rowClassName;
                var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
                    index: -1
                }) : rowStyle; // Precompute and cache column styles before rendering rows and columns to speed things up
                this._cachedColumnStyles = [];
                _react.Children.toArray(children).forEach(function(column, index) {
                    var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);
                    _this2._cachedColumnStyles[index] = _objectSpread({
                        overflow: 'hidden'
                    }, flexStyles);
                }); // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
                // This is done because Grid is a pure component and won't update unless its properties or state has changed.
                // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
                return _react.createElement("div", {
                    "aria-label": this.props['aria-label'],
                    "aria-labelledby": this.props['aria-labelledby'],
                    "aria-colcount": _react.Children.toArray(children).length,
                    "aria-rowcount": this.props.rowCount,
                    className: (0, _clsxDefault.default)('ReactVirtualized__Table', className),
                    id: id,
                    role: "grid",
                    style: style
                }, !disableHeader && headerRowRenderer({
                    className: (0, _clsxDefault.default)('ReactVirtualized__Table__headerRow', rowClass),
                    columns: this._getHeaderColumns(),
                    style: _objectSpread({
                        height: headerHeight,
                        overflow: 'hidden',
                        paddingRight: scrollbarWidth,
                        width: width
                    }, rowStyleObject)
                }), _react.createElement((0, _gridDefault.default), (0, _extendsDefault.default)({}, this.props, {
                    "aria-readonly": null,
                    autoContainerWidth: true,
                    className: (0, _clsxDefault.default)('ReactVirtualized__Table__Grid', gridClassName),
                    cellRenderer: this._createRow,
                    columnWidth: width,
                    columnCount: 1,
                    height: availableRowsHeight,
                    id: undefined,
                    noContentRenderer: noRowsRenderer,
                    onScroll: this._onScroll,
                    onSectionRendered: this._onSectionRendered,
                    ref: this._setRef,
                    role: "rowgroup",
                    scrollbarWidth: scrollbarWidth,
                    scrollToRow: scrollToIndex,
                    style: _objectSpread({}, gridStyle, {
                        overflowX: 'hidden'
                    })
                })));
            }
        },
        {
            key: "_createColumn",
            value: function _createColumn(_ref4) {
                var column = _ref4.column, columnIndex = _ref4.columnIndex, isScrolling = _ref4.isScrolling, parent = _ref4.parent, rowData = _ref4.rowData, rowIndex = _ref4.rowIndex;
                var onColumnClick = this.props.onColumnClick;
                var _column$props = column.props, cellDataGetter = _column$props.cellDataGetter, cellRenderer = _column$props.cellRenderer, className = _column$props.className, columnData = _column$props.columnData, dataKey = _column$props.dataKey, id = _column$props.id;
                var cellData = cellDataGetter({
                    columnData: columnData,
                    dataKey: dataKey,
                    rowData: rowData
                });
                var renderedCell = cellRenderer({
                    cellData: cellData,
                    columnData: columnData,
                    columnIndex: columnIndex,
                    dataKey: dataKey,
                    isScrolling: isScrolling,
                    parent: parent,
                    rowData: rowData,
                    rowIndex: rowIndex
                });
                var onClick = function onClick(event) {
                    onColumnClick && onColumnClick({
                        columnData: columnData,
                        dataKey: dataKey,
                        event: event
                    });
                };
                var style = this._cachedColumnStyles[columnIndex];
                var title = typeof renderedCell === 'string' ? renderedCell : null; // Avoid using object-spread syntax with multiple objects here,
                // Since it results in an extra method call to 'babel-runtime/helpers/extends'
                // See PR https://github.com/bvaughn/react-virtualized/pull/942
                return _react.createElement("div", {
                    "aria-colindex": columnIndex + 1,
                    "aria-describedby": id,
                    className: (0, _clsxDefault.default)('ReactVirtualized__Table__rowColumn', className),
                    key: 'Row' + rowIndex + '-' + 'Col' + columnIndex,
                    onClick: onClick,
                    role: "gridcell",
                    style: style,
                    title: title
                }, renderedCell);
            }
        },
        {
            key: "_createHeader",
            value: function _createHeader(_ref5) {
                var column = _ref5.column, index = _ref5.index;
                var _this$props2 = this.props, headerClassName = _this$props2.headerClassName, headerStyle = _this$props2.headerStyle, onHeaderClick = _this$props2.onHeaderClick, sort = _this$props2.sort, sortBy = _this$props2.sortBy, sortDirection = _this$props2.sortDirection;
                var _column$props2 = column.props, columnData = _column$props2.columnData, dataKey = _column$props2.dataKey, defaultSortDirection = _column$props2.defaultSortDirection, disableSort = _column$props2.disableSort, headerRenderer = _column$props2.headerRenderer, id = _column$props2.id, label = _column$props2.label;
                var sortEnabled = !disableSort && sort;
                var classNames = (0, _clsxDefault.default)('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
                    ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
                });
                var style = this._getFlexStyleForColumn(column, _objectSpread({}, headerStyle, {}, column.props.headerStyle));
                var renderedHeader = headerRenderer({
                    columnData: columnData,
                    dataKey: dataKey,
                    disableSort: disableSort,
                    label: label,
                    sortBy: sortBy,
                    sortDirection: sortDirection
                });
                var headerOnClick, headerOnKeyDown, headerTabIndex, headerAriaSort, headerAriaLabel;
                if (sortEnabled || onHeaderClick) {
                    // If this is a sortable header, clicking it should update the table data's sorting.
                    var isFirstTimeSort = sortBy !== dataKey; // If this is the firstTime sort of this column, use the column default sort order.
                    // Otherwise, invert the direction of the sort.
                    var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === (0, _sortDirectionDefault.default).DESC ? (0, _sortDirectionDefault.default).ASC : (0, _sortDirectionDefault.default).DESC;
                    var onClick = function onClick(event) {
                        sortEnabled && sort({
                            defaultSortDirection: defaultSortDirection,
                            event: event,
                            sortBy: dataKey,
                            sortDirection: newSortDirection
                        });
                        onHeaderClick && onHeaderClick({
                            columnData: columnData,
                            dataKey: dataKey,
                            event: event
                        });
                    };
                    var onKeyDown = function onKeyDown(event) {
                        if (event.key === 'Enter' || event.key === ' ') onClick(event);
                    };
                    headerAriaLabel = column.props['aria-label'] || label || dataKey;
                    headerAriaSort = 'none';
                    headerTabIndex = 0;
                    headerOnClick = onClick;
                    headerOnKeyDown = onKeyDown;
                }
                if (sortBy === dataKey) headerAriaSort = sortDirection === (0, _sortDirectionDefault.default).ASC ? 'ascending' : 'descending';
                 // Avoid using object-spread syntax with multiple objects here,
                // Since it results in an extra method call to 'babel-runtime/helpers/extends'
                // See PR https://github.com/bvaughn/react-virtualized/pull/942
                return _react.createElement("div", {
                    "aria-label": headerAriaLabel,
                    "aria-sort": headerAriaSort,
                    className: classNames,
                    id: id,
                    key: 'Header-Col' + index,
                    onClick: headerOnClick,
                    onKeyDown: headerOnKeyDown,
                    role: "columnheader",
                    style: style,
                    tabIndex: headerTabIndex
                }, renderedHeader);
            }
        },
        {
            key: "_createRow",
            value: function _createRow(_ref6) {
                var _this3 = this;
                var index = _ref6.rowIndex, isScrolling = _ref6.isScrolling, key = _ref6.key, parent = _ref6.parent, style = _ref6.style;
                var _this$props3 = this.props, children = _this$props3.children, onRowClick = _this$props3.onRowClick, onRowDoubleClick = _this$props3.onRowDoubleClick, onRowRightClick = _this$props3.onRowRightClick, onRowMouseOver = _this$props3.onRowMouseOver, onRowMouseOut = _this$props3.onRowMouseOut, rowClassName = _this$props3.rowClassName, rowGetter = _this$props3.rowGetter, rowRenderer = _this$props3.rowRenderer, rowStyle = _this$props3.rowStyle;
                var scrollbarWidth = this.state.scrollbarWidth;
                var rowClass = typeof rowClassName === 'function' ? rowClassName({
                    index: index
                }) : rowClassName;
                var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
                    index: index
                }) : rowStyle;
                var rowData = rowGetter({
                    index: index
                });
                var columns = _react.Children.toArray(children).map(function(column, columnIndex) {
                    return _this3._createColumn({
                        column: column,
                        columnIndex: columnIndex,
                        isScrolling: isScrolling,
                        parent: parent,
                        rowData: rowData,
                        rowIndex: index,
                        scrollbarWidth: scrollbarWidth
                    });
                });
                var className = (0, _clsxDefault.default)('ReactVirtualized__Table__row', rowClass);
                var flattenedStyle = _objectSpread({}, style, {
                    height: this._getRowHeight(index),
                    overflow: 'hidden',
                    paddingRight: scrollbarWidth
                }, rowStyleObject);
                return rowRenderer({
                    className: className,
                    columns: columns,
                    index: index,
                    isScrolling: isScrolling,
                    key: key,
                    onRowClick: onRowClick,
                    onRowDoubleClick: onRowDoubleClick,
                    onRowRightClick: onRowRightClick,
                    onRowMouseOver: onRowMouseOver,
                    onRowMouseOut: onRowMouseOut,
                    rowData: rowData,
                    style: flattenedStyle
                });
            }
        },
        {
            key: "_getFlexStyleForColumn",
            value: function _getFlexStyleForColumn(column) {
                var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var flexValue = "".concat(column.props.flexGrow, " ").concat(column.props.flexShrink, " ").concat(column.props.width, "px");
                var style = _objectSpread({}, customStyle, {
                    flex: flexValue,
                    msFlex: flexValue,
                    WebkitFlex: flexValue
                });
                if (column.props.maxWidth) style.maxWidth = column.props.maxWidth;
                if (column.props.minWidth) style.minWidth = column.props.minWidth;
                return style;
            }
        },
        {
            key: "_getHeaderColumns",
            value: function _getHeaderColumns() {
                var _this4 = this;
                var _this$props4 = this.props, children = _this$props4.children, disableHeader = _this$props4.disableHeader;
                var items = disableHeader ? [] : _react.Children.toArray(children);
                return items.map(function(column, index) {
                    return _this4._createHeader({
                        column: column,
                        index: index
                    });
                });
            }
        },
        {
            key: "_getRowHeight",
            value: function _getRowHeight(rowIndex) {
                var rowHeight = this.props.rowHeight;
                return typeof rowHeight === 'function' ? rowHeight({
                    index: rowIndex
                }) : rowHeight;
            }
        },
        {
            key: "_onScroll",
            value: function _onScroll(_ref7) {
                var clientHeight = _ref7.clientHeight, scrollHeight = _ref7.scrollHeight, scrollTop = _ref7.scrollTop;
                var onScroll = this.props.onScroll;
                onScroll({
                    clientHeight: clientHeight,
                    scrollHeight: scrollHeight,
                    scrollTop: scrollTop
                });
            }
        },
        {
            key: "_onSectionRendered",
            value: function _onSectionRendered(_ref8) {
                var rowOverscanStartIndex = _ref8.rowOverscanStartIndex, rowOverscanStopIndex = _ref8.rowOverscanStopIndex, rowStartIndex = _ref8.rowStartIndex, rowStopIndex = _ref8.rowStopIndex;
                var onRowsRendered = this.props.onRowsRendered;
                onRowsRendered({
                    overscanStartIndex: rowOverscanStartIndex,
                    overscanStopIndex: rowOverscanStopIndex,
                    startIndex: rowStartIndex,
                    stopIndex: rowStopIndex
                });
            }
        },
        {
            key: "_setRef",
            value: function _setRef(ref) {
                this.Grid = ref;
            }
        },
        {
            key: "_setScrollbarWidth",
            value: function _setScrollbarWidth() {
                var scrollbarWidth = this.getScrollbarWidth();
                this.setState({
                    scrollbarWidth: scrollbarWidth
                });
            }
        }
    ]);
    return Table;
}(_react.PureComponent);
(0, _definePropertyDefault.default)(Table, "defaultProps", {
    disableHeader: false,
    estimatedRowSize: 30,
    headerHeight: 0,
    headerStyle: {},
    noRowsRenderer: function noRowsRenderer() {
        return null;
    },
    onRowsRendered: function onRowsRendered() {
        return null;
    },
    onScroll: function onScroll() {
        return null;
    },
    overscanIndicesGetter: (0, _grid.accessibilityOverscanIndicesGetter),
    overscanRowCount: 10,
    rowRenderer: (0, _defaultRowRendererDefault.default),
    headerRowRenderer: (0, _defaultHeaderRowRendererDefault.default),
    rowStyle: {},
    scrollToAlignment: 'auto',
    scrollToIndex: -1,
    style: {}
});
Table.propTypes = {
    /** This is just set on the grid top element. */ 'aria-label': (0, _propTypesDefault.default).string,
    /** This is just set on the grid top element. */ 'aria-labelledby': (0, _propTypesDefault.default).string,
    /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */ autoHeight: (0, _propTypesDefault.default).bool,
    /** One or more Columns describing the data displayed in this row */ children: function children(props) {
        var children = _react.Children.toArray(props.children);
        for(var i = 0; i < children.length; i++){
            var childType = children[i].type;
            if (childType !== (0, _columnDefault.default) && !(childType.prototype instanceof (0, _columnDefault.default))) return new Error('Table only accepts children of type Column');
        }
    },
    /** Optional CSS class name */ className: (0, _propTypesDefault.default).string,
    /** Disable rendering the header at all */ disableHeader: (0, _propTypesDefault.default).bool,
    /**
   * Used to estimate the total height of a Table before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */ estimatedRowSize: (0, _propTypesDefault.default).number.isRequired,
    /** Optional custom CSS class name to attach to inner Grid element. */ gridClassName: (0, _propTypesDefault.default).string,
    /** Optional inline style to attach to inner Grid element. */ gridStyle: (0, _propTypesDefault.default).object,
    /** Optional CSS class to apply to all column headers */ headerClassName: (0, _propTypesDefault.default).string,
    /** Fixed height of header row */ headerHeight: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: any[],
   *   style: any
   * }): PropTypes.node
   */ headerRowRenderer: (0, _propTypesDefault.default).func,
    /** Optional custom inline style to attach to table header columns. */ headerStyle: (0, _propTypesDefault.default).object,
    /** Fixed/available height for out DOM element */ height: (0, _propTypesDefault.default).number.isRequired,
    /** Optional id */ id: (0, _propTypesDefault.default).string,
    /** Optional renderer to be used in place of table body rows when rowCount is 0 */ noRowsRenderer: (0, _propTypesDefault.default).func,
    /**
   * Optional callback when a column is clicked.
   * ({ columnData: any, dataKey: string }): void
   */ onColumnClick: (0, _propTypesDefault.default).func,
    /**
   * Optional callback when a column's header is clicked.
   * ({ columnData: any, dataKey: string }): void
   */ onHeaderClick: (0, _propTypesDefault.default).func,
    /**
   * Callback invoked when a user clicks on a table row.
   * ({ index: number }): void
   */ onRowClick: (0, _propTypesDefault.default).func,
    /**
   * Callback invoked when a user double-clicks on a table row.
   * ({ index: number }): void
   */ onRowDoubleClick: (0, _propTypesDefault.default).func,
    /**
   * Callback invoked when the mouse leaves a table row.
   * ({ index: number }): void
   */ onRowMouseOut: (0, _propTypesDefault.default).func,
    /**
   * Callback invoked when a user moves the mouse over a table row.
   * ({ index: number }): void
   */ onRowMouseOver: (0, _propTypesDefault.default).func,
    /**
   * Callback invoked when a user right-clicks on a table row.
   * ({ index: number }): void
   */ onRowRightClick: (0, _propTypesDefault.default).func,
    /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */ onRowsRendered: (0, _propTypesDefault.default).func,
    /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */ onScroll: (0, _propTypesDefault.default).func.isRequired,
    /** See Grid#overscanIndicesGetter */ overscanIndicesGetter: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */ overscanRowCount: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Optional CSS class to apply to all table rows (including the header row).
   * This property can be a CSS class name (string) or a function that returns a class name.
   * If a function is provided its signature should be: ({ index: number }): string
   */ rowClassName: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).string,
        (0, _propTypesDefault.default).func
    ]),
    /**
   * Callback responsible for returning a data row given an index.
   * ({ index: number }): any
   */ rowGetter: (0, _propTypesDefault.default).func.isRequired,
    /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */ rowHeight: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).number,
        (0, _propTypesDefault.default).func
    ]).isRequired,
    /** Number of rows in table. */ rowCount: (0, _propTypesDefault.default).number.isRequired,
    /**
   * Responsible for rendering a table row given an array of columns:
   * Should implement the following interface: ({
   *   className: string,
   *   columns: Array,
   *   index: number,
   *   isScrolling: boolean,
   *   onRowClick: ?Function,
   *   onRowDoubleClick: ?Function,
   *   onRowMouseOver: ?Function,
   *   onRowMouseOut: ?Function,
   *   rowData: any,
   *   style: any
   * }): PropTypes.node
   */ rowRenderer: (0, _propTypesDefault.default).func,
    /** Optional custom inline style to attach to table rows. */ rowStyle: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).object,
        (0, _propTypesDefault.default).func
    ]).isRequired,
    /** See Grid#scrollToAlignment */ scrollToAlignment: (0, _propTypesDefault.default).oneOf([
        'auto',
        'end',
        'start',
        'center'
    ]).isRequired,
    /** Row index to ensure visible (by forcefully scrolling if necessary) */ scrollToIndex: (0, _propTypesDefault.default).number.isRequired,
    /** Vertical offset. */ scrollTop: (0, _propTypesDefault.default).number,
    /**
   * Sort function to be called if a sortable header is clicked.
   * Should implement the following interface: ({
   *   defaultSortDirection: 'ASC' | 'DESC',
   *   event: MouseEvent,
   *   sortBy: string,
   *   sortDirection: SortDirection
   * }): void
   */ sort: (0, _propTypesDefault.default).func,
    /** Table data is currently sorted by this :dataKey (if it is sorted at all) */ sortBy: (0, _propTypesDefault.default).string,
    /** Table data is currently sorted in this direction (if it is sorted at all) */ sortDirection: (0, _propTypesDefault.default).oneOf([
        (0, _sortDirectionDefault.default).ASC,
        (0, _sortDirectionDefault.default).DESC
    ]),
    /** Optional inline style */ style: (0, _propTypesDefault.default).object,
    /** Tab index for focus */ tabIndex: (0, _propTypesDefault.default).number,
    /** Width of list */ width: (0, _propTypesDefault.default).number.isRequired
};

},{"@babel/runtime/helpers/extends":"vw3vn","@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","clsx":"83C22","./Column":"7oeBh","prop-types":"7wKI2","react":"21dqq","react-dom":"j6uA9","../Grid":"6STYe","./defaultRowRenderer":"dgAwI","./defaultHeaderRowRenderer":"aq47q","./SortDirection":"ldrzV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UXl6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WindowScroller", ()=>(0, _windowScrollerDefault.default));
parcelHelpers.export(exports, "IS_SCROLLING_TIMEOUT", ()=>(0, _windowScroller.IS_SCROLLING_TIMEOUT));
var _windowScroller = require("./WindowScroller");
var _windowScrollerDefault = parcelHelpers.interopDefault(_windowScroller);
exports.default = (0, _windowScrollerDefault.default);

},{"./WindowScroller":"55S6G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"55S6G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IS_SCROLLING_TIMEOUT", ()=>IS_SCROLLING_TIMEOUT);
parcelHelpers.export(exports, "default", ()=>WindowScroller);
var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _createClass = require("@babel/runtime/helpers/createClass");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _assertThisInitialized = require("@babel/runtime/helpers/assertThisInitialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _inherits = require("@babel/runtime/helpers/inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _defineProperty = require("@babel/runtime/helpers/defineProperty");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _react = require("react");
var _reactDom = require("react-dom");
var _onScroll = require("./utils/onScroll");
var _dimensions = require("./utils/dimensions");
var _detectElementResize = require("../vendor/detectElementResize");
var _detectElementResizeDefault = parcelHelpers.interopDefault(_detectElementResize);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _class, _temp;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            (0, _definePropertyDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var IS_SCROLLING_TIMEOUT = 150;
var getWindow = function getWindow() {
    return typeof window !== 'undefined' ? window : undefined;
};
var WindowScroller = (_temp = _class = /*#__PURE__*/ function(_React$PureComponent) {
    (0, _inheritsDefault.default)(WindowScroller, _React$PureComponent);
    function WindowScroller() {
        var _getPrototypeOf2;
        var _this;
        (0, _classCallCheckDefault.default)(this, WindowScroller);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = (0, _possibleConstructorReturnDefault.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOfDefault.default)(WindowScroller)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_window", getWindow());
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_isMounted", false);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_positionFromTop", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_positionFromLeft", 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_detectElementResize", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_child", void 0);
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "state", _objectSpread({}, (0, _dimensions.getDimensions)(_this.props.scrollElement, _this.props), {
            isScrolling: false,
            scrollLeft: 0,
            scrollTop: 0
        }));
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_registerChild", function(element) {
            if (element && !(element instanceof Element)) console.warn('WindowScroller registerChild expects to be passed Element or null');
            _this._child = element;
            _this.updatePosition();
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onChildScroll", function(_ref) {
            var scrollTop = _ref.scrollTop;
            if (_this.state.scrollTop === scrollTop) return;
            var scrollElement = _this.props.scrollElement;
            if (scrollElement) {
                if (typeof scrollElement.scrollTo === 'function') scrollElement.scrollTo(0, scrollTop + _this._positionFromTop);
                else scrollElement.scrollTop = scrollTop + _this._positionFromTop;
            }
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_registerResizeListener", function(element) {
            if (element === window) window.addEventListener('resize', _this._onResize, false);
            else _this._detectElementResize.addResizeListener(element, _this._onResize);
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_unregisterResizeListener", function(element) {
            if (element === window) window.removeEventListener('resize', _this._onResize, false);
            else if (element) _this._detectElementResize.removeResizeListener(element, _this._onResize);
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "_onResize", function() {
            _this.updatePosition();
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "__handleWindowScrollEvent", function() {
            if (!_this._isMounted) return;
            var onScroll = _this.props.onScroll;
            var scrollElement = _this.props.scrollElement;
            if (scrollElement) {
                var scrollOffset = (0, _dimensions.getScrollOffset)(scrollElement);
                var scrollLeft = Math.max(0, scrollOffset.left - _this._positionFromLeft);
                var scrollTop = Math.max(0, scrollOffset.top - _this._positionFromTop);
                _this.setState({
                    isScrolling: true,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                });
                onScroll({
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                });
            }
        });
        (0, _definePropertyDefault.default)((0, _assertThisInitializedDefault.default)(_this), "__resetIsScrolling", function() {
            _this.setState({
                isScrolling: false
            });
        });
        return _this;
    }
    (0, _createClassDefault.default)(WindowScroller, [
        {
            key: "updatePosition",
            value: function updatePosition() {
                var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollElement;
                var onResize = this.props.onResize;
                var _this$state = this.state, height = _this$state.height, width = _this$state.width;
                var thisNode = this._child || _reactDom.findDOMNode(this);
                if (thisNode instanceof Element && scrollElement) {
                    var offset = (0, _dimensions.getPositionOffset)(thisNode, scrollElement);
                    this._positionFromTop = offset.top;
                    this._positionFromLeft = offset.left;
                }
                var dimensions = (0, _dimensions.getDimensions)(scrollElement, this.props);
                if (height !== dimensions.height || width !== dimensions.width) {
                    this.setState({
                        height: dimensions.height,
                        width: dimensions.width
                    });
                    onResize({
                        height: dimensions.height,
                        width: dimensions.width
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var scrollElement = this.props.scrollElement;
                this._detectElementResize = (0, _detectElementResizeDefault.default)();
                this.updatePosition(scrollElement);
                if (scrollElement) {
                    (0, _onScroll.registerScrollListener)(this, scrollElement);
                    this._registerResizeListener(scrollElement);
                }
                this._isMounted = true;
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                var scrollElement = this.props.scrollElement;
                var prevScrollElement = prevProps.scrollElement;
                if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
                    this.updatePosition(scrollElement);
                    (0, _onScroll.unregisterScrollListener)(this, prevScrollElement);
                    (0, _onScroll.registerScrollListener)(this, scrollElement);
                    this._unregisterResizeListener(prevScrollElement);
                    this._registerResizeListener(scrollElement);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                var scrollElement = this.props.scrollElement;
                if (scrollElement) {
                    (0, _onScroll.unregisterScrollListener)(this, scrollElement);
                    this._unregisterResizeListener(scrollElement);
                }
                this._isMounted = false;
            }
        },
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                var _this$state2 = this.state, isScrolling = _this$state2.isScrolling, scrollTop = _this$state2.scrollTop, scrollLeft = _this$state2.scrollLeft, height = _this$state2.height, width = _this$state2.width;
                return children({
                    onChildScroll: this._onChildScroll,
                    registerChild: this._registerChild,
                    height: height,
                    isScrolling: isScrolling,
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop,
                    width: width
                });
            }
        }
    ]);
    return WindowScroller;
}(_react.PureComponent), (0, _definePropertyDefault.default)(_class, "propTypes", {
    /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollLeft, scrollTop, width }) => PropTypes.element
   */ "children": (0, _propTypesDefault.default).func.isRequired,
    /** Callback to be invoked on-resize: ({ height, width }) */ "onResize": (0, _propTypesDefault.default).func.isRequired,
    /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */ "onScroll": (0, _propTypesDefault.default).func.isRequired,
    /** Element to attach scroll event listeners. Defaults to window. */ "scrollElement": (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).any,
        function() {
            return (typeof Element === "function" ? (0, _propTypesDefault.default).instanceOf(Element) : (0, _propTypesDefault.default).any).apply(this, arguments);
        }
    ]),
    /**
   * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
   */ "scrollingResetTimeInterval": (0, _propTypesDefault.default).number.isRequired,
    /** Height used for server-side rendering */ "serverHeight": (0, _propTypesDefault.default).number.isRequired,
    /** Width used for server-side rendering */ "serverWidth": (0, _propTypesDefault.default).number.isRequired
}), _temp);
(0, _definePropertyDefault.default)(WindowScroller, "defaultProps", {
    onResize: function onResize() {},
    onScroll: function onScroll() {},
    scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT,
    scrollElement: getWindow(),
    serverHeight: 0,
    serverWidth: 0
});

},{"@babel/runtime/helpers/classCallCheck":"3nRml","@babel/runtime/helpers/createClass":"2yzPp","@babel/runtime/helpers/possibleConstructorReturn":"cW3L5","@babel/runtime/helpers/getPrototypeOf":"gWrBy","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inherits":"bYd1U","@babel/runtime/helpers/defineProperty":"4x6r7","react":"21dqq","react-dom":"j6uA9","./utils/onScroll":"3zK7A","./utils/dimensions":"cXFTE","../vendor/detectElementResize":"g3FrH","prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zK7A":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerScrollListener", ()=>registerScrollListener);
parcelHelpers.export(exports, "unregisterScrollListener", ()=>unregisterScrollListener);
var _requestAnimationTimeout = require("../../utils/requestAnimationTimeout");
var _windowScrollerJs = require("../WindowScroller.js");
var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;
function enablePointerEventsIfDisabled() {
    if (disablePointerEventsTimeoutId) {
        disablePointerEventsTimeoutId = null;
        if (document.body && originalBodyPointerEvents != null) document.body.style.pointerEvents = originalBodyPointerEvents;
        originalBodyPointerEvents = null;
    }
}
function enablePointerEventsAfterDelayCallback() {
    enablePointerEventsIfDisabled();
    mountedInstances.forEach(function(instance) {
        return instance.__resetIsScrolling();
    });
}
function enablePointerEventsAfterDelay() {
    if (disablePointerEventsTimeoutId) (0, _requestAnimationTimeout.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
    var maximumTimeout = 0;
    mountedInstances.forEach(function(instance) {
        maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
    });
    disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(enablePointerEventsAfterDelayCallback, maximumTimeout);
}
function onScrollWindow(event) {
    if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
        originalBodyPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = 'none';
    }
    enablePointerEventsAfterDelay();
    mountedInstances.forEach(function(instance) {
        if (instance.props.scrollElement === event.currentTarget) instance.__handleWindowScrollEvent();
    });
}
function registerScrollListener(component, element) {
    if (!mountedInstances.some(function(instance) {
        return instance.props.scrollElement === element;
    })) element.addEventListener('scroll', onScrollWindow);
    mountedInstances.push(component);
}
function unregisterScrollListener(component, element) {
    mountedInstances = mountedInstances.filter(function(instance) {
        return instance !== component;
    });
    if (!mountedInstances.length) {
        element.removeEventListener('scroll', onScrollWindow);
        if (disablePointerEventsTimeoutId) {
            (0, _requestAnimationTimeout.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
            enablePointerEventsIfDisabled();
        }
    }
}

},{"../../utils/requestAnimationTimeout":"fMoXC","../WindowScroller.js":"55S6G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXFTE":[function(require,module,exports,__globalThis) {
/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */ // TODO Move this into WindowScroller and import from there
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDimensions", ()=>getDimensions);
/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */ parcelHelpers.export(exports, "getPositionOffset", ()=>getPositionOffset);
/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */ parcelHelpers.export(exports, "getScrollOffset", ()=>getScrollOffset);
var isWindow = function isWindow(element) {
    return element === window;
};
var getBoundingBox = function getBoundingBox(element) {
    return element.getBoundingClientRect();
};
function getDimensions(scrollElement, props) {
    if (!scrollElement) return {
        height: props.serverHeight,
        width: props.serverWidth
    };
    else if (isWindow(scrollElement)) {
        var _window = window, innerHeight = _window.innerHeight, innerWidth = _window.innerWidth;
        return {
            height: typeof innerHeight === 'number' ? innerHeight : 0,
            width: typeof innerWidth === 'number' ? innerWidth : 0
        };
    } else return getBoundingBox(scrollElement);
}
function getPositionOffset(element, container) {
    if (isWindow(container) && document.documentElement) {
        var containerElement = document.documentElement;
        var elementRect = getBoundingBox(element);
        var containerRect = getBoundingBox(containerElement);
        return {
            top: elementRect.top - containerRect.top,
            left: elementRect.left - containerRect.left
        };
    } else {
        var scrollOffset = getScrollOffset(container);
        var _elementRect = getBoundingBox(element);
        var _containerRect = getBoundingBox(container);
        return {
            top: _elementRect.top + scrollOffset.top - _containerRect.top,
            left: _elementRect.left + scrollOffset.left - _containerRect.left
        };
    }
}
function getScrollOffset(element) {
    if (isWindow(element) && document.documentElement) return {
        top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
        left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
    else return {
        top: element.scrollTop,
        left: element.scrollLeft
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6kfLa"], null, "parcelRequire94c2")

//# sourceMappingURL=VisDataTable.66fdb13f.js.map
