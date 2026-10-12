// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"2qvSm":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "e1f31a632becdd6e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
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
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
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
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
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
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
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
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    if (cssTimeout || typeof document === 'undefined') return;
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
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
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

},{}],"kzq3I":[function(require,module,exports,__globalThis) {
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

},{}],"9nCY5":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$cd03 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$cd03.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$cd03.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _reactSortablejs = require("react-sortablejs");
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
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "text-primary",
                            children: "Fields"
                        }, void 0, false, {
                            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                            lineNumber: 35,
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
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _popoverDefault.default).Body, {
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactSortablejs.ReactSortable), {
                        list: this.props.list.map((item)=>({
                                ...item,
                                id: item.dataKey
                            })),
                        setList: ()=>{},
                        onEnd: ({ oldIndex, newIndex })=>{
                            document.body.style.cursor = 'default';
                            this.props.onSortEnd({
                                oldIndex,
                                newIndex
                            });
                        },
                        onStart: ()=>{
                            document.body.style.cursor = 'grabbing';
                        },
                        handle: ".drag-handle",
                        children: this.props.list.map((item, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _visSortableItemDefault.default), {
                                ...item,
                                index: index,
                                onCheckChanged: this.props.onCheckChanged
                            }, `item-${item.dataKey}`, false, {
                                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
            lineNumber: 30,
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
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisDataTableControl.js",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
}
exports.default = VisDataTableControl;
VisDataTableControl.propTypes = {
    onAllCheck: (0, _propTypesDefault.default).func.isRequired,
    onCheckChanged: (0, _propTypesDefault.default).func.isRequired,
    onSortEnd: (0, _propTypesDefault.default).func.isRequired,
    list: (0, _propTypesDefault.default).arrayOf((0, _propTypesDefault.default).shape({
        dataKey: (0, _propTypesDefault.default).string.isRequired
    })).isRequired
};

  $parcel$ReactRefreshHelpers$cd03.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","prop-types":"GNqOQ","react-sortablejs":"aONdg","react-bootstrap/Popover":"80uOz","react-bootstrap/OverlayTrigger":"9WzZV","@fortawesome/react-fontawesome":"iVKob","@fortawesome/free-solid-svg-icons":"gQz28","react-bootstrap/Button":"kNKIo","./VisSortableItem/VisSortableItem":"1Ikwu","./VisDataTableControl.css":"bv6av","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"aONdg":[function(require,module,exports,__globalThis) {
var $8zHUo$sortablejs = require("1b14611f323145a0");
var $8zHUo$classnames = require("dacd5e2783597059");
var $8zHUo$react = require("6233dd54d324d685");
var $8zHUo$tinyinvariant = require("5616c767518557da");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
$parcel$export(module.exports, "Sortable", ()=>$882b6d93070905b3$re_export$Sortable);
$parcel$export(module.exports, "Direction", ()=>$882b6d93070905b3$re_export$Direction);
$parcel$export(module.exports, "DOMRect", ()=>$882b6d93070905b3$re_export$DOMRect);
$parcel$export(module.exports, "GroupOptions", ()=>$882b6d93070905b3$re_export$GroupOptions);
$parcel$export(module.exports, "MoveEvent", ()=>$882b6d93070905b3$re_export$MoveEvent);
$parcel$export(module.exports, "Options", ()=>$882b6d93070905b3$re_export$Options);
$parcel$export(module.exports, "PullResult", ()=>$882b6d93070905b3$re_export$PullResult);
$parcel$export(module.exports, "PutResult", ()=>$882b6d93070905b3$re_export$PutResult);
$parcel$export(module.exports, "SortableEvent", ()=>$882b6d93070905b3$re_export$SortableEvent);
$parcel$export(module.exports, "SortableOptions", ()=>$882b6d93070905b3$re_export$SortableOptions);
$parcel$export(module.exports, "Utils", ()=>$882b6d93070905b3$re_export$Utils);
$parcel$export(module.exports, "ReactSortable", ()=>$7fe8e3ea572bda7a$export$11bbed9ee0012c13);
function $eb03e74f8f7db1f3$export$1d0aa160432dfea5(node) {
    if (node.parentElement !== null) node.parentElement.removeChild(node);
}
function $eb03e74f8f7db1f3$export$6d240faa51aa562f(parent, newChild, index) {
    const refChild = parent.children[index] || null;
    parent.insertBefore(newChild, refChild);
}
function $eb03e74f8f7db1f3$export$d7d742816c28cf91(customs) {
    $eb03e74f8f7db1f3$export$77f49a256021c8de(customs);
    $eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs);
}
function $eb03e74f8f7db1f3$export$77f49a256021c8de(customs) {
    customs.forEach((curr)=>$eb03e74f8f7db1f3$export$1d0aa160432dfea5(curr.element));
}
function $eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs) {
    customs.forEach((curr)=>{
        $eb03e74f8f7db1f3$export$6d240faa51aa562f(curr.parentElement, curr.element, curr.oldIndex);
    });
}
function $eb03e74f8f7db1f3$export$4655efe700f887a(evt, list) {
    const mode = $eb03e74f8f7db1f3$export$1fc0f6205829e19c(evt);
    const parentElement = {
        parentElement: evt.from
    };
    let custom = [];
    switch(mode){
        case "normal":
            /* eslint-disable */ const item = {
                element: evt.item,
                newIndex: evt.newIndex,
                oldIndex: evt.oldIndex,
                parentElement: evt.from
            };
            custom = [
                item
            ];
            break;
        case "swap":
            const drag = {
                element: evt.item,
                oldIndex: evt.oldIndex,
                newIndex: evt.newIndex,
                ...parentElement
            };
            const swap = {
                element: evt.swapItem,
                oldIndex: evt.newIndex,
                newIndex: evt.oldIndex,
                ...parentElement
            };
            custom = [
                drag,
                swap
            ];
            break;
        case "multidrag":
            custom = evt.oldIndicies.map((curr, index)=>({
                    element: curr.multiDragElement,
                    oldIndex: curr.index,
                    newIndex: evt.newIndicies[index].index,
                    ...parentElement
                }));
            break;
    }
    /* eslint-enable */ const customs = $eb03e74f8f7db1f3$export$bc06a3af7dc65f53(custom, list);
    return customs;
}
function $eb03e74f8f7db1f3$export$c25cf8080bd305ec(normalized, list) {
    const a = $eb03e74f8f7db1f3$export$be2da95e6167b0bd(normalized, list);
    const b = $eb03e74f8f7db1f3$export$eca851ee65ae17e4(normalized, a);
    return b;
}
function $eb03e74f8f7db1f3$export$be2da95e6167b0bd(normalized, list) {
    const newList = [
        ...list
    ];
    normalized.concat().reverse().forEach((curr)=>newList.splice(curr.oldIndex, 1));
    return newList;
}
function $eb03e74f8f7db1f3$export$eca851ee65ae17e4(normalized, list, evt, clone) {
    const newList = [
        ...list
    ];
    normalized.forEach((curr)=>{
        const newItem = clone && evt && clone(curr.item, evt);
        newList.splice(curr.newIndex, 0, newItem || curr.item);
    });
    return newList;
}
function $eb03e74f8f7db1f3$export$1fc0f6205829e19c(evt) {
    if (evt.oldIndicies && evt.oldIndicies.length > 0) return "multidrag";
    if (evt.swapItem) return "swap";
    return "normal";
}
function $eb03e74f8f7db1f3$export$bc06a3af7dc65f53(inputs, list) {
    const normalized = inputs.map((curr)=>({
            ...curr,
            item: list[curr.oldIndex]
        })).sort((a, b)=>a.oldIndex - b.oldIndex);
    return normalized;
}
function $eb03e74f8f7db1f3$export$7553c81e62e31b7e(props) {
    /* eslint-disable */ const { list: list, setList: setList, children: children, tag: tag, style: style, className: className, clone: clone, onAdd: onAdd, onChange: onChange, onChoose: onChoose, onClone: onClone, onEnd: onEnd, onFilter: onFilter, onRemove: onRemove, onSort: onSort, onStart: onStart, onUnchoose: onUnchoose, onUpdate: onUpdate, onMove: onMove, onSpill: onSpill, onSelect: onSelect, onDeselect: onDeselect, ...options } = props;
    /* eslint-enable */ return options;
}
/** Holds a global reference for which react element is being dragged */ // @todo - use context to manage this. How does one use 2 different providers?
const $7fe8e3ea572bda7a$var$store = {
    dragging: null
};
class $7fe8e3ea572bda7a$export$11bbed9ee0012c13 extends $8zHUo$react.Component {
    /* eslint-disable-next-line */ static defaultProps = {
        clone: (item)=>item
    };
    constructor(props){
        super(props);
        // @todo forward ref this component
        this.ref = /*#__PURE__*/ (0, $8zHUo$react.createRef)();
        // make all state false because we can't change sortable unless a mouse gesture is made.
        const newList = [
            ...props.list
        ].map((item)=>Object.assign(item, {
                chosen: false,
                selected: false
            }));
        props.setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
        $parcel$interopDefault($8zHUo$tinyinvariant)(!props.plugins, `
Plugins prop is no longer supported.
Instead, mount it with "Sortable.mount(new MultiDrag())"
Please read the updated README.md at https://github.com/SortableJS/react-sortablejs.
      `);
    }
    componentDidMount() {
        if (this.ref.current === null) return;
        const newOptions = this.makeOptions();
        $parcel$interopDefault($8zHUo$sortablejs).create(this.ref.current, newOptions);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.disabled !== this.props.disabled && this.sortable) this.sortable.option("disabled", this.props.disabled);
    }
    render() {
        const { tag: tag, style: style, className: className, id: id } = this.props;
        const classicProps = {
            style: style,
            className: className,
            id: id
        };
        // if no tag, default to a `div` element.
        const newTag = !tag || tag === null ? "div" : tag;
        return /*#__PURE__*/ (0, $8zHUo$react.createElement)(newTag, {
            // @todo - find a way (perhaps with the callback) to allow AntD components to work
            ref: this.ref,
            ...classicProps
        }, this.getChildren());
    }
    getChildren() {
        const { children: children, dataIdAttr: dataIdAttr, selectedClass: selectedClass = "sortable-selected", chosenClass: chosenClass = "sortable-chosen", dragClass: /* eslint-disable */ dragClass = "sortable-drag", fallbackClass: fallbackClass = "sortable-falback", ghostClass: ghostClass = "sortable-ghost", swapClass: swapClass = "sortable-swap-highlight", filter: /* eslint-enable */ filter = "sortable-filter", list: list } = this.props;
        // if no children, don't do anything.
        if (!children || children == null) return null;
        const dataid = dataIdAttr || "data-id";
        /* eslint-disable-next-line */ return (0, $8zHUo$react.Children).map(children, (child, index)=>{
            if (child === undefined) return undefined;
            const item = list[index] || {};
            const { className: prevClassName } = child.props;
            // @todo - handle the function if avalable. I don't think anyone will be doing this soon.
            const filtered = typeof filter === "string" && {
                [filter.replace(".", "")]: !!item.filtered
            };
            const className = $parcel$interopDefault($8zHUo$classnames)(prevClassName, {
                [selectedClass]: item.selected,
                [chosenClass]: item.chosen,
                ...filtered
            });
            return /*#__PURE__*/ (0, $8zHUo$react.cloneElement)(child, {
                [dataid]: child.key,
                className: className
            });
        });
    }
    /** Appends the `sortable` property to this component */ get sortable() {
        const el = this.ref.current;
        if (el === null) return null;
        const key = Object.keys(el).find((k)=>k.includes("Sortable"));
        if (!key) return null;
        //@ts-expect-error: fix me.
        return el[key];
    }
    /** Converts all the props from `ReactSortable` into the `options` object that `Sortable.create(el, [options])` can use. */ makeOptions() {
        const DOMHandlers = [
            "onAdd",
            "onChoose",
            "onDeselect",
            "onEnd",
            "onRemove",
            "onSelect",
            "onSpill",
            "onStart",
            "onUnchoose",
            "onUpdate"
        ];
        const NonDOMHandlers = [
            "onChange",
            "onClone",
            "onFilter",
            "onSort"
        ];
        const newOptions = $eb03e74f8f7db1f3$export$7553c81e62e31b7e(this.props);
        DOMHandlers.forEach((name)=>newOptions[name] = this.prepareOnHandlerPropAndDOM(name));
        NonDOMHandlers.forEach((name)=>newOptions[name] = this.prepareOnHandlerProp(name));
        /** onMove has 2 arguments and needs to be handled seperately. */ const onMove1 = (evt, originalEvt)=>{
            const { onMove: onMove } = this.props;
            const defaultValue = evt.willInsertAfter || -1;
            if (!onMove) return defaultValue;
            const result = onMove(evt, originalEvt, this.sortable, $7fe8e3ea572bda7a$var$store);
            if (typeof result === "undefined") return false;
            return result;
        };
        return {
            ...newOptions,
            onMove: onMove1
        };
    }
    /** Prepares a method that will be used in the sortable options to call an `on[Handler]` prop & an `on[Handler]` ReactSortable method.  */ prepareOnHandlerPropAndDOM(evtName) {
        return (evt)=>{
            // call the component prop
            this.callOnHandlerProp(evt, evtName);
            // calls state change
            //@ts-expect-error: until @types multidrag item is in
            this[evtName](evt);
        };
    }
    /** Prepares a method that will be used in the sortable options to call an `on[Handler]` prop */ prepareOnHandlerProp(evtName) {
        return (evt)=>{
            // call the component prop
            this.callOnHandlerProp(evt, evtName);
        };
    }
    /** Calls the `props.on[Handler]` function */ callOnHandlerProp(evt, evtName) {
        const propEvent = this.props[evtName];
        if (propEvent) propEvent(evt, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    // SORTABLE DOM HANDLING
    onAdd(evt) {
        const { list: list, setList: setList, clone: clone } = this.props;
        /* eslint-disable-next-line */ const otherList = [
            ...$7fe8e3ea572bda7a$var$store.dragging.props.list
        ];
        const customs = $eb03e74f8f7db1f3$export$4655efe700f887a(evt, otherList);
        $eb03e74f8f7db1f3$export$77f49a256021c8de(customs);
        const newList = $eb03e74f8f7db1f3$export$eca851ee65ae17e4(customs, list, evt, clone).map((item)=>Object.assign(item, {
                selected: false
            }));
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onRemove(evt) {
        const { list: list, setList: setList } = this.props;
        const mode = $eb03e74f8f7db1f3$export$1fc0f6205829e19c(evt);
        const customs = $eb03e74f8f7db1f3$export$4655efe700f887a(evt, list);
        $eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs);
        let newList = [
            ...list
        ];
        // remove state if not in clone mode. otherwise, keep.
        if (evt.pullMode !== "clone") newList = $eb03e74f8f7db1f3$export$be2da95e6167b0bd(customs, newList);
        else {
            // switch used to get the clone
            let customClones = customs;
            switch(mode){
                case "multidrag":
                    customClones = customs.map((item, index)=>({
                            ...item,
                            element: evt.clones[index]
                        }));
                    break;
                case "normal":
                    customClones = customs.map((item)=>({
                            ...item,
                            element: evt.clone
                        }));
                    break;
                case "swap":
                default:
                    $parcel$interopDefault($8zHUo$tinyinvariant)(true, `mode "${mode}" cannot clone. Please remove "props.clone" from <ReactSortable/> when using the "${mode}" plugin`);
            }
            $eb03e74f8f7db1f3$export$77f49a256021c8de(customClones);
            // replace selected items with cloned items
            customs.forEach((curr)=>{
                const index = curr.oldIndex;
                /* eslint-disable-next-line */ const newItem = this.props.clone(curr.item, evt);
                newList.splice(index, 1, newItem);
            });
        }
        // remove item.selected from list
        newList = newList.map((item)=>Object.assign(item, {
                selected: false
            }));
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onUpdate(evt) {
        const { list: list, setList: setList } = this.props;
        const customs = $eb03e74f8f7db1f3$export$4655efe700f887a(evt, list);
        $eb03e74f8f7db1f3$export$77f49a256021c8de(customs);
        $eb03e74f8f7db1f3$export$a6177d5829f70ebc(customs);
        const newList = $eb03e74f8f7db1f3$export$c25cf8080bd305ec(customs, list);
        return setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onStart() {
        $7fe8e3ea572bda7a$var$store.dragging = this;
    }
    onEnd() {
        $7fe8e3ea572bda7a$var$store.dragging = null;
    }
    onChoose(evt) {
        const { list: list, setList: setList } = this.props;
        const newList = list.map((item, index)=>{
            let newItem = item;
            if (index === evt.oldIndex) newItem = Object.assign(item, {
                chosen: true
            });
            return newItem;
        });
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onUnchoose(evt) {
        const { list: list, setList: setList } = this.props;
        const newList = list.map((item, index)=>{
            let newItem = item;
            if (index === evt.oldIndex) newItem = Object.assign(newItem, {
                chosen: false
            });
            return newItem;
        });
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onSpill(evt) {
        const { removeOnSpill: removeOnSpill, revertOnSpill: revertOnSpill } = this.props;
        if (removeOnSpill && !revertOnSpill) $eb03e74f8f7db1f3$export$1d0aa160432dfea5(evt.item);
    }
    onSelect(evt) {
        const { list: list, setList: setList } = this.props;
        const newList = list.map((item)=>Object.assign(item, {
                selected: false
            }));
        evt.newIndicies.forEach((curr)=>{
            const index = curr.index;
            if (index === -1) {
                console.log(`"${evt.type}" had indice of "${curr.index}", which is probably -1 and doesn't usually happen here.`);
                console.log(evt);
                return;
            }
            newList[index].selected = true;
        });
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
    onDeselect(evt) {
        const { list: list, setList: setList } = this.props;
        const newList = list.map((item)=>Object.assign(item, {
                selected: false
            }));
        evt.newIndicies.forEach((curr)=>{
            const index = curr.index;
            if (index === -1) return;
            newList[index].selected = true;
        });
        setList(newList, this.sortable, $7fe8e3ea572bda7a$var$store);
    }
}
var $faefaad95e5fcca0$exports = {};
$parcel$exportWildcard(module.exports, $faefaad95e5fcca0$exports);

},{"1b14611f323145a0":"hJ8D9","dacd5e2783597059":"1FN45","6233dd54d324d685":"jMk1U","5616c767518557da":"2LIHJ"}],"hJ8D9":[function(require,module,exports,__globalThis) {
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiDrag", ()=>MultiDragPlugin);
parcelHelpers.export(exports, "Sortable", ()=>Sortable);
parcelHelpers.export(exports, "Swap", ()=>SwapPlugin);
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
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var version = "1.15.0";
function userAgent(pattern) {
    if (typeof window !== 'undefined' && window.navigator) return !!/*@__PURE__*/ navigator.userAgent.match(pattern);
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
    capture: false,
    passive: false
};
function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(/**HTMLElement*/ el, /**String*/ selector) {
    if (!selector) return;
    selector[0] === '>' && (selector = selector.substring(1));
    if (el) try {
        if (el.matches) return el.matches(selector);
        else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    } catch (_) {
        return false;
    }
    return false;
}
function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(/**HTMLElement*/ el, /**String*/ selector, /**HTMLElement*/ ctx, includeCTX) {
    if (el) {
        ctx = ctx || document;
        do {
            if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) return el;
            if (el === ctx) break;
        /* jshint boss:true */ }while (el = getParentOrHost(el));
    }
    return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
    if (el && name) {
        if (el.classList) el.classList[state ? 'add' : 'remove'](name);
        else {
            var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
            el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
        }
    }
}
function css(el, prop, val) {
    var style = el && el.style;
    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, '');
            else if (el.currentStyle) val = el.currentStyle;
            return prop === void 0 ? val : val[prop];
        } else {
            if (!(prop in style) && prop.indexOf('webkit') === -1) prop = '-webkit-' + prop;
            style[prop] = val + (typeof val === 'string' ? '' : 'px');
        }
    }
}
function matrix(el, selfOnly) {
    var appliedTransforms = '';
    if (typeof el === 'string') appliedTransforms = el;
    else do {
        var transform = css(el, 'transform');
        if (transform && transform !== 'none') appliedTransforms = transform + ' ' + appliedTransforms;
    /* jshint boss:true */ }while (!selfOnly && (el = el.parentNode));
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */ return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
    if (ctx) {
        var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
        if (iterator) for(; i < n; i++)iterator(list[i], i);
        return list;
    }
    return [];
}
function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) return scrollingElement;
    else return document.documentElement;
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */ function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
        elRect = el.getBoundingClientRect();
        top = elRect.top;
        left = elRect.left;
        bottom = elRect.bottom;
        right = elRect.right;
        height = elRect.height;
        width = elRect.width;
    } else {
        top = 0;
        left = 0;
        bottom = window.innerHeight;
        right = window.innerWidth;
        height = window.innerHeight;
        width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
        // Adjust for translate()
        container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
        // Not needed on <= IE11
        if (!IE11OrLess) {
            do if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
                var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container
                top -= containerRect.top + parseInt(css(container, 'border-top-width'));
                left -= containerRect.left + parseInt(css(container, 'border-left-width'));
                bottom = top + elRect.height;
                right = left + elRect.width;
                break;
            }
            while (container = container.parentNode);
        }
    }
    if (undoScale && el !== window) {
        // Adjust for scale()
        var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
        if (elMatrix) {
            top /= scaleY;
            left /= scaleX;
            width /= scaleX;
            height /= scaleY;
            bottom = top + height;
            right = left + width;
        }
    }
    return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height
    };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */ function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
    /* jshint boss:true */ while(parent){
        var parentSideVal = getRect(parent)[parentSide], visible = void 0;
        if (parentSide === 'top' || parentSide === 'left') visible = elSideVal >= parentSideVal;
        else visible = elSideVal <= parentSideVal;
        if (!visible) return parent;
        if (parent === getWindowScrollingElement()) break;
        parent = getParentAutoScrollElement(parent, false);
    }
    return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */ function getChild(el, childNum, options, includeDragEl) {
    var currentChild = 0, i = 0, children = el.children;
    while(i < children.length){
        if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
            if (currentChild === childNum) return children[i];
            currentChild++;
        }
        i++;
    }
    return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */ function lastChild(el, selector) {
    var last = el.lastElementChild;
    while(last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector)))last = last.previousElementSibling;
    return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */ function index(el, selector) {
    var index = 0;
    if (!el || !el.parentNode) return -1;
    /* jshint boss:true */ while(el = el.previousElementSibling)if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) index++;
    return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */ function getRelativeScrollOffset(el) {
    var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
    if (el) do {
        var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
    }while (el !== winScroller && (el = el.parentNode));
    return [
        offsetLeft,
        offsetTop
    ];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */ function indexOfObject(arr, obj) {
    for(var i in arr){
        if (!arr.hasOwnProperty(i)) continue;
        for(var key in obj){
            if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
    }
    return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
            if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
            if (gotSelf || includeSelf) return elem;
            gotSelf = true;
        }
    }
    while (elem = elem.parentNode);
    return getWindowScrollingElement();
}
function extend(dst, src) {
    if (dst && src) {
        for(var key in src)if (src.hasOwnProperty(key)) dst[key] = src[key];
    }
    return dst;
}
function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
    return function() {
        if (!_throttleTimeout) {
            var args = arguments, _this = this;
            if (args.length === 1) callback.call(_this, args[0]);
            else callback.apply(_this, args);
            _throttleTimeout = setTimeout(function() {
                _throttleTimeout = void 0;
            }, ms);
        }
    };
}
function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
}
function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
    else if ($) return $(el).clone(true)[0];
    else return el.cloneNode(true);
}
function setRect(el, rect) {
    css(el, 'position', 'absolute');
    css(el, 'top', rect.top);
    css(el, 'left', rect.left);
    css(el, 'width', rect.width);
    css(el, 'height', rect.height);
}
function unsetRect(el) {
    css(el, 'position', '');
    css(el, 'top', '');
    css(el, 'left', '');
    css(el, 'width', '');
    css(el, 'height', '');
}
var expando = 'Sortable' + new Date().getTime();
function AnimationStateManager() {
    var animationStates = [], animationCallbackId;
    return {
        captureAnimationState: function captureAnimationState() {
            animationStates = [];
            if (!this.options.animation) return;
            var children = [].slice.call(this.el.children);
            children.forEach(function(child) {
                if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
                animationStates.push({
                    target: child,
                    rect: getRect(child)
                });
                var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation
                if (child.thisAnimationDuration) {
                    var childMatrix = matrix(child, true);
                    if (childMatrix) {
                        fromRect.top -= childMatrix.f;
                        fromRect.left -= childMatrix.e;
                    }
                }
                child.fromRect = fromRect;
            });
        },
        addAnimationState: function addAnimationState(state) {
            animationStates.push(state);
        },
        removeAnimationState: function removeAnimationState(target) {
            animationStates.splice(indexOfObject(animationStates, {
                target: target
            }), 1);
        },
        animateAll: function animateAll(callback) {
            var _this = this;
            if (!this.options.animation) {
                clearTimeout(animationCallbackId);
                if (typeof callback === 'function') callback();
                return;
            }
            var animating = false, animationTime = 0;
            animationStates.forEach(function(state) {
                var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
                if (targetMatrix) {
                    // Compensate for current animation
                    toRect.top -= targetMatrix.f;
                    toRect.left -= targetMatrix.e;
                }
                target.toRect = toRect;
                if (target.thisAnimationDuration) // Could also check if animatingRect is between fromRect and toRect
                {
                    if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
                    (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) // If returning to same place as started from animation and on same axis
                    time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
                } // if fromRect != toRect: animate
                if (!isRectEqual(toRect, fromRect)) {
                    target.prevFromRect = fromRect;
                    target.prevToRect = toRect;
                    if (!time) time = _this.options.animation;
                    _this.animate(target, animatingRect, toRect, time);
                }
                if (time) {
                    animating = true;
                    animationTime = Math.max(animationTime, time);
                    clearTimeout(target.animationResetTimer);
                    target.animationResetTimer = setTimeout(function() {
                        target.animationTime = 0;
                        target.prevFromRect = null;
                        target.fromRect = null;
                        target.prevToRect = null;
                        target.thisAnimationDuration = null;
                    }, time);
                    target.thisAnimationDuration = time;
                }
            });
            clearTimeout(animationCallbackId);
            if (!animating) {
                if (typeof callback === 'function') callback();
            } else animationCallbackId = setTimeout(function() {
                if (typeof callback === 'function') callback();
            }, animationTime);
            animationStates = [];
        },
        animate: function animate(target, currentRect, toRect, duration) {
            if (duration) {
                css(target, 'transition', '');
                css(target, 'transform', '');
                var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
                target.animatingX = !!translateX;
                target.animatingY = !!translateY;
                css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
                this.forRepaintDummy = repaint(target); // repaint
                css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
                css(target, 'transform', 'translate3d(0,0,0)');
                typeof target.animated === 'number' && clearTimeout(target.animated);
                target.animated = setTimeout(function() {
                    css(target, 'transition', '');
                    css(target, 'transform', '');
                    target.animated = false;
                    target.animatingX = false;
                    target.animatingY = false;
                }, duration);
            }
        }
    };
}
function repaint(target) {
    return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
    initializeByDefault: true
};
var PluginManager = {
    mount: function mount(plugin) {
        // Set default static properties
        for(var option in defaults)if (defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = defaults[option];
        plugins.forEach(function(p) {
            if (p.pluginName === plugin.pluginName) throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
        });
        plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
        var _this = this;
        this.eventCanceled = false;
        evt.cancel = function() {
            _this.eventCanceled = true;
        };
        var eventNameGlobal = eventName + 'Global';
        plugins.forEach(function(plugin) {
            if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable
            if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
                sortable: sortable
            }, evt));
             // Only fire plugin event if plugin is enabled in this sortable,
            // and plugin has event defined
            if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName](_objectSpread2({
                sortable: sortable
            }, evt));
        });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
        plugins.forEach(function(plugin) {
            var pluginName = plugin.pluginName;
            if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
            var initialized = new plugin(sortable, el, sortable.options);
            initialized.sortable = sortable;
            initialized.options = sortable.options;
            sortable[pluginName] = initialized; // Add default options from plugin
            _extends(defaults, initialized.defaults);
        });
        for(var option in sortable.options){
            if (!sortable.options.hasOwnProperty(option)) continue;
            var modified = this.modifyOption(sortable, option, sortable.options[option]);
            if (typeof modified !== 'undefined') sortable.options[option] = modified;
        }
    },
    getEventProperties: function getEventProperties(name, sortable) {
        var eventProperties = {};
        plugins.forEach(function(plugin) {
            if (typeof plugin.eventProperties !== 'function') return;
            _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
        });
        return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
        var modifiedValue;
        plugins.forEach(function(plugin) {
            // Plugin must exist on the Sortable
            if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
            if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        });
        return modifiedValue;
    }
};
function dispatchEvent(_ref) {
    var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[expando];
    if (!sortable) return;
    var evt, options = sortable.options, onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent('Event');
        evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
    var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
    for(var option in allEventProperties)evt[option] = allEventProperties[option];
    if (rootEl) rootEl.dispatchEvent(evt);
    if (options[onName]) options[onName].call(sortable, evt);
}
var _excluded = [
    "evt"
];
var pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
        dragEl: dragEl,
        parentEl: parentEl,
        ghostEl: ghostEl,
        rootEl: rootEl,
        nextEl: nextEl,
        lastDownEl: lastDownEl,
        cloneEl: cloneEl,
        cloneHidden: cloneHidden,
        dragStarted: moved,
        putSortable: putSortable,
        activeSortable: Sortable.active,
        originalEvent: originalEvent,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        hideGhostForTarget: _hideGhostForTarget,
        unhideGhostForTarget: _unhideGhostForTarget,
        cloneNowHidden: function cloneNowHidden() {
            cloneHidden = true;
        },
        cloneNowShown: function cloneNowShown() {
            cloneHidden = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(name) {
            _dispatchEvent({
                sortable: sortable,
                name: name,
                originalEvent: originalEvent
            });
        }
    }, data));
};
function _dispatchEvent(info) {
    dispatchEvent(_objectSpread2({
        putSortable: putSortable,
        cloneEl: cloneEl,
        targetEl: dragEl,
        rootEl: rootEl,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex
    }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, // For positioning ghost absolutely
ghostRelativeParent, ghostRelativeParentInitialScroll = [], // (left, top)
_silent = false, savedInputChecked = [];
/** @const */ var documentExists = typeof document !== 'undefined', PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float', // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'), supportCssPointerEvents = function() {
    if (!documentExists) return; // false when <= IE11
    if (IE11OrLess) return false;
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
}(), _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === 'flex') return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    if (elCSS.display === 'grid') return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
        var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
        return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
}, _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, /**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */ _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function(sortable) {
        var threshold = sortable[expando].options.emptyInsertThreshold;
        if (!threshold || lastChild(sortable)) return;
        var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
        if (insideHorizontally && insideVertically) return ret = sortable;
    });
    return ret;
}, _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
        return function(to, from, dragEl, evt) {
            var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
            if (value == null && (pull || sameGroup)) // Default pull value
            // Default pull and put value if same group
            return true;
            else if (value == null || value === false) return false;
            else if (pull && value === 'clone') return value;
            else if (typeof value === 'function') return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
            else {
                var otherGroup = (pull ? to : from).options.group.name;
                return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
            }
        };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != 'object') originalGroup = {
        name: originalGroup
    };
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, 'display', 'none');
}, _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, 'display', '');
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) document.addEventListener('click', function(evt) {
    if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
    }
}, true);
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
        evt = evt.touches ? evt.touches[0] : evt;
        var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
        if (nearest) {
            // Create imitation event
            var event = {};
            for(var i in evt)if (evt.hasOwnProperty(i)) event[i] = evt[i];
            event.target = event.rootEl = nearest;
            event.preventDefault = void 0;
            event.stopPropagation = void 0;
            nearest[expando]._onDragOver(event);
        }
    }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if (dragEl) dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */ function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(el));
    this.el = el; // root element
    this.options = options = _extends({}, options); // Export instance
    el[expando] = this;
    var defaults = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
        swapThreshold: 1,
        // percentage; 0 <= x <= 1
        invertSwap: false,
        // invert always
        invertedSwapThreshold: null,
        // will be set to same as swapThreshold if default
        removeCloneOnHide: true,
        direction: function direction() {
            return _detectDirection(el, this.options);
        },
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        ignore: 'a, img',
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function setData(dataTransfer, dragEl) {
            dataTransfer.setData('Text', dragEl.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: 'data-id',
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: 'sortable-fallback',
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
        emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults); // Set default options
    for(var name in defaults)!(name in options) && (options[name] = defaults[name]);
    _prepareGroup(options); // Bind all private methods
    for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
     // Setup drag mode
    this.nativeDraggable = options.forceFallback ? false : supportDraggable;
    if (this.nativeDraggable) // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
     // Bind events
    if (options.supportPointer) on(el, 'pointerdown', this._onTapStart);
    else {
        on(el, 'mousedown', this._onTapStart);
        on(el, 'touchstart', this._onTapStart);
    }
    if (this.nativeDraggable) {
        on(el, 'dragover', this);
        on(el, 'dragenter', this);
    }
    sortables.push(this.el); // Restore sorting
    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager
    _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */ {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
        if (!this.el.contains(target) && target !== this.el) lastTarget = null;
    },
    _getDirection: function _getDirection(evt, target) {
        return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(/** Event|TouchEvent */ evt) {
        if (!evt.cancelable) return;
        var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
        _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
        if (dragEl) return;
        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return; // only left button and enabled
         // cancel dnd if original target is content editable
        if (originalTarget.isContentEditable) return;
         // Safari ignores further event handling after mousedown
        if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') return;
        target = closest(target, options.draggable, el, false);
        if (target && target.animated) return;
        if (lastDownEl === target) // Ignoring duplicate `down`
        return;
         // Get the index of the dragged element within its parent
        oldIndex = index(target);
        oldDraggableIndex = index(target, options.draggable); // Check filter
        if (typeof filter === 'function') {
            if (filter.call(this, evt, target, this)) {
                _dispatchEvent({
                    sortable: _this,
                    rootEl: originalTarget,
                    name: 'filter',
                    targetEl: target,
                    toEl: el,
                    fromEl: el
                });
                pluginEvent('filter', _this, {
                    evt: evt
                });
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        } else if (filter) {
            filter = filter.split(',').some(function(criteria) {
                criteria = closest(originalTarget, criteria.trim(), el, false);
                if (criteria) {
                    _dispatchEvent({
                        sortable: _this,
                        rootEl: criteria,
                        name: 'filter',
                        targetEl: target,
                        fromEl: el,
                        toEl: el
                    });
                    pluginEvent('filter', _this, {
                        evt: evt
                    });
                    return true;
                }
            });
            if (filter) {
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        }
        if (options.handle && !closest(originalTarget, options.handle, el, false)) return;
         // Prepare `dragstart`
        this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(/** Event */ evt, /** Touch */ touch, /** HTMLElement */ target) {
        var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
        if (target && !dragEl && target.parentNode === el) {
            var dragRect = getRect(target);
            rootEl = el;
            dragEl = target;
            parentEl = dragEl.parentNode;
            nextEl = dragEl.nextSibling;
            lastDownEl = target;
            activeGroup = options.group;
            Sortable.dragged = dragEl;
            tapEvt = {
                target: dragEl,
                clientX: (touch || evt).clientX,
                clientY: (touch || evt).clientY
            };
            tapDistanceLeft = tapEvt.clientX - dragRect.left;
            tapDistanceTop = tapEvt.clientY - dragRect.top;
            this._lastX = (touch || evt).clientX;
            this._lastY = (touch || evt).clientY;
            dragEl.style['will-change'] = 'all';
            dragStartFn = function dragStartFn() {
                pluginEvent('delayEnded', _this, {
                    evt: evt
                });
                if (Sortable.eventCanceled) {
                    _this._onDrop();
                    return;
                } // Delayed drag has been triggered
                // we can re-enable the events: touchmove/mousemove
                _this._disableDelayedDragEvents();
                if (!FireFox && _this.nativeDraggable) dragEl.draggable = true;
                 // Bind the events: dragstart/dragend
                _this._triggerDragStart(evt, touch); // Drag start event
                _dispatchEvent({
                    sortable: _this,
                    name: 'choose',
                    originalEvent: evt
                }); // Chosen item
                toggleClass(dragEl, options.chosenClass, true);
            }; // Disable "draggable"
            options.ignore.split(',').forEach(function(criteria) {
                find(dragEl, criteria.trim(), _disableDraggable);
            });
            on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
            on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
            on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
            on(ownerDocument, 'mouseup', _this._onDrop);
            on(ownerDocument, 'touchend', _this._onDrop);
            on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)
            if (FireFox && this.nativeDraggable) {
                this.options.touchStartThreshold = 4;
                dragEl.draggable = true;
            }
            pluginEvent('delayStart', this, {
                evt: evt
            }); // Delay is impossible for native DnD in Edge or IE
            if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
                if (Sortable.eventCanceled) {
                    this._onDrop();
                    return;
                } // If the user moves the pointer or let go the click or touch
                // before the delay has been reached:
                // disable the delayed drag
                on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
                on(ownerDocument, 'touchend', _this._disableDelayedDrag);
                on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
                on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
                on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
                options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
                _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
            } else dragStartFn();
        }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(/** TouchEvent|PointerEvent **/ e) {
        var touch = e.touches ? e.touches[0] : e;
        if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
        dragEl && _disableDraggable(dragEl);
        clearTimeout(this._dragStartTimer);
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, 'mouseup', this._disableDelayedDrag);
        off(ownerDocument, 'touchend', this._disableDelayedDrag);
        off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
        off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
        off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
        off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(/** Event */ evt, /** Touch */ touch) {
        touch = touch || evt.pointerType == 'touch' && evt;
        if (!this.nativeDraggable || touch) {
            if (this.options.supportPointer) on(document, 'pointermove', this._onTouchMove);
            else if (touch) on(document, 'touchmove', this._onTouchMove);
            else on(document, 'mousemove', this._onTouchMove);
        } else {
            on(dragEl, 'dragend', this);
            on(rootEl, 'dragstart', this._onDragStart);
        }
        try {
            if (document.selection) // Timeout neccessary for IE9
            _nextTick(function() {
                document.selection.empty();
            });
            else window.getSelection().removeAllRanges();
        } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
        awaitingDragStarted = false;
        if (rootEl && dragEl) {
            pluginEvent('dragStarted', this, {
                evt: evt
            });
            if (this.nativeDraggable) on(document, 'dragover', _checkOutsideTargetEl);
            var options = this.options; // Apply effect
            !fallback && toggleClass(dragEl, options.dragClass, false);
            toggleClass(dragEl, options.ghostClass, true);
            Sortable.active = this;
            fallback && this._appendGhost(); // Drag start event
            _dispatchEvent({
                sortable: this,
                name: 'start',
                originalEvent: evt
            });
        } else this._nulling();
    },
    _emulateDragOver: function _emulateDragOver() {
        if (touchEvt) {
            this._lastX = touchEvt.clientX;
            this._lastY = touchEvt.clientY;
            _hideGhostForTarget();
            var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
            var parent = target;
            while(target && target.shadowRoot){
                target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                if (target === parent) break;
                parent = target;
            }
            dragEl.parentNode[expando]._isOutsideThisEl(target);
            if (parent) do {
                if (parent[expando]) {
                    var inserted = void 0;
                    inserted = parent[expando]._onDragOver({
                        clientX: touchEvt.clientX,
                        clientY: touchEvt.clientY,
                        target: target,
                        rootEl: parent
                    });
                    if (inserted && !this.options.dragoverBubble) break;
                }
                target = parent; // store last element
            }while (parent = parent.parentNode);
            _unhideGhostForTarget();
        }
    },
    _onTouchMove: function _onTouchMove(/**TouchEvent*/ evt) {
        if (tapEvt) {
            var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging
            if (!Sortable.active && !awaitingDragStarted) {
                if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
                this._onDragStart(evt, true);
            }
            if (ghostEl) {
                if (ghostMatrix) {
                    ghostMatrix.e += dx - (lastDx || 0);
                    ghostMatrix.f += dy - (lastDy || 0);
                } else ghostMatrix = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: dx,
                    f: dy
                };
                var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
                css(ghostEl, 'webkitTransform', cssMatrix);
                css(ghostEl, 'mozTransform', cssMatrix);
                css(ghostEl, 'msTransform', cssMatrix);
                css(ghostEl, 'transform', cssMatrix);
                lastDx = dx;
                lastDy = dy;
                touchEvt = touch;
            }
            evt.cancelable && evt.preventDefault();
        }
    },
    _appendGhost: function _appendGhost() {
        // Bug if using scale(): https://stackoverflow.com/questions/2637058
        // Not being adjusted for
        if (!ghostEl) {
            var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options; // Position absolutely
            if (PositionGhostAbsolutely) {
                // Get relatively positioned parent
                ghostRelativeParent = container;
                while(css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document)ghostRelativeParent = ghostRelativeParent.parentNode;
                if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
                    if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
                    rect.top += ghostRelativeParent.scrollTop;
                    rect.left += ghostRelativeParent.scrollLeft;
                } else ghostRelativeParent = getWindowScrollingElement();
                ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
            }
            ghostEl = dragEl.cloneNode(true);
            toggleClass(ghostEl, options.ghostClass, false);
            toggleClass(ghostEl, options.fallbackClass, true);
            toggleClass(ghostEl, options.dragClass, true);
            css(ghostEl, 'transition', '');
            css(ghostEl, 'transform', '');
            css(ghostEl, 'box-sizing', 'border-box');
            css(ghostEl, 'margin', 0);
            css(ghostEl, 'top', rect.top);
            css(ghostEl, 'left', rect.left);
            css(ghostEl, 'width', rect.width);
            css(ghostEl, 'height', rect.height);
            css(ghostEl, 'opacity', '0.8');
            css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
            css(ghostEl, 'zIndex', '100000');
            css(ghostEl, 'pointerEvents', 'none');
            Sortable.ghost = ghostEl;
            container.appendChild(ghostEl); // Set transform-origin
            css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
        }
    },
    _onDragStart: function _onDragStart(/**Event*/ evt, /**boolean*/ fallback) {
        var _this = this;
        var dataTransfer = evt.dataTransfer;
        var options = _this.options;
        pluginEvent('dragStart', this, {
            evt: evt
        });
        if (Sortable.eventCanceled) {
            this._onDrop();
            return;
        }
        pluginEvent('setupClone', this);
        if (!Sortable.eventCanceled) {
            cloneEl = clone(dragEl);
            cloneEl.removeAttribute("id");
            cloneEl.draggable = false;
            cloneEl.style['will-change'] = '';
            this._hideClone();
            toggleClass(cloneEl, this.options.chosenClass, false);
            Sortable.clone = cloneEl;
        } // #1143: IFrame support workaround
        _this.cloneId = _nextTick(function() {
            pluginEvent('clone', _this);
            if (Sortable.eventCanceled) return;
            if (!_this.options.removeCloneOnHide) rootEl.insertBefore(cloneEl, dragEl);
            _this._hideClone();
            _dispatchEvent({
                sortable: _this,
                name: 'clone'
            });
        });
        !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events
        if (fallback) {
            ignoreNextClick = true;
            _this._loopId = setInterval(_this._emulateDragOver, 50);
        } else {
            // Undo what was set in _prepareDragStart before drag started
            off(document, 'mouseup', _this._onDrop);
            off(document, 'touchend', _this._onDrop);
            off(document, 'touchcancel', _this._onDrop);
            if (dataTransfer) {
                dataTransfer.effectAllowed = 'move';
                options.setData && options.setData.call(_this, dataTransfer, dragEl);
            }
            on(document, 'drop', _this); // #1276 fix:
            css(dragEl, 'transform', 'translateZ(0)');
        }
        awaitingDragStarted = true;
        _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
        on(document, 'selectstart', _this);
        moved = true;
        if (Safari) css(document.body, 'user-select', 'none');
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(/**Event*/ evt) {
        var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
        if (_silent) return;
        function dragOverEvent(name, extra) {
            pluginEvent(name, _this, _objectSpread2({
                evt: evt,
                isOwner: isOwner,
                axis: vertical ? 'vertical' : 'horizontal',
                revert: revert,
                dragRect: dragRect,
                targetRect: targetRect,
                canSort: canSort,
                fromSortable: fromSortable,
                target: target,
                completed: completed,
                onMove: function onMove(target, after) {
                    return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
                },
                changed: changed
            }, extra));
        } // Capture animation state
        function capture() {
            dragOverEvent('dragOverAnimationCapture');
            _this.captureAnimationState();
            if (_this !== fromSortable) fromSortable.captureAnimationState();
        } // Return invocation when dragEl is inserted (or completed)
        function completed(insertion) {
            dragOverEvent('dragOverCompleted', {
                insertion: insertion
            });
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                else activeSortable._showClone(_this);
                if (_this !== fromSortable) {
                    // Set ghost class to new sortable's ghost class
                    toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                    toggleClass(dragEl, options.ghostClass, true);
                }
                if (putSortable !== _this && _this !== Sortable.active) putSortable = _this;
                else if (_this === Sortable.active && putSortable) putSortable = null;
                 // Animation
                if (fromSortable === _this) _this._ignoreWhileAnimating = target;
                _this.animateAll(function() {
                    dragOverEvent('dragOverAnimationComplete');
                    _this._ignoreWhileAnimating = null;
                });
                if (_this !== fromSortable) {
                    fromSortable.animateAll();
                    fromSortable._ignoreWhileAnimating = null;
                }
            } // Null lastTarget if it is not inside a previously swapped element
            if (target === dragEl && !dragEl.animated || target === el && !target.animated) lastTarget = null;
             // no bubbling and not fallback
            if (!options.dragoverBubble && !evt.rootEl && target !== document) {
                dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted
                !insertion && nearestEmptyInsertDetectEvent(evt);
            }
            !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
            return completedFired = true;
        } // Call when dragEl has been inserted
        function changed() {
            newIndex = index(dragEl);
            newDraggableIndex = index(dragEl, options.draggable);
            _dispatchEvent({
                sortable: _this,
                name: 'change',
                toEl: el,
                newIndex: newIndex,
                newDraggableIndex: newDraggableIndex,
                originalEvent: evt
            });
        }
        if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
        target = closest(target, options.draggable, el, true);
        dragOverEvent('dragOver');
        if (Sortable.eventCanceled) return completedFired;
        if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) return completed(false);
        ignoreNextClick = false;
        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl // Reverting item into the original list
        ) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
            vertical = this._getDirection(evt, target) === 'vertical';
            dragRect = getRect(dragEl);
            dragOverEvent('dragOverValid');
            if (Sortable.eventCanceled) return completedFired;
            if (revert) {
                parentEl = rootEl; // actualization
                capture();
                this._hideClone();
                dragOverEvent('revert');
                if (!Sortable.eventCanceled) {
                    if (nextEl) rootEl.insertBefore(dragEl, nextEl);
                    else rootEl.appendChild(dragEl);
                }
                return completed(true);
            }
            var elLastChild = lastChild(el, options.draggable);
            if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
                // Insert to end of list
                // If already at end of list: Do not insert
                if (elLastChild === dragEl) return completed(false);
                 // if there is a last element, it is the target
                if (elLastChild && el === evt.target) target = elLastChild;
                if (target) targetRect = getRect(target);
                if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
                    capture();
                    if (elLastChild && elLastChild.nextSibling) // the last draggable element is not the last node
                    el.insertBefore(dragEl, elLastChild.nextSibling);
                    else el.appendChild(dragEl);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
                // Insert to start of list
                var firstChild = getChild(el, 0, options, true);
                if (firstChild === dragEl) return completed(false);
                target = firstChild;
                targetRect = getRect(target);
                if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
                    capture();
                    el.insertBefore(dragEl, firstChild);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (target.parentNode === el) {
                targetRect = getRect(target);
                var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? 'top' : 'left', scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
                if (lastTarget !== target) {
                    targetBeforeFirstSwap = targetRect[side1];
                    pastFirstInvertThresh = false;
                    isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
                }
                direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
                var sibling;
                if (direction !== 0) {
                    // Check if target is beside dragEl in respective direction (ignoring hidden elements)
                    var dragIndex = index(dragEl);
                    do {
                        dragIndex -= direction;
                        sibling = parentEl.children[dragIndex];
                    }while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
                } // If dragEl is already beside target: Do not insert
                if (direction === 0 || sibling === target) return completed(false);
                lastTarget = target;
                lastDirection = direction;
                var nextSibling = target.nextElementSibling, after = false;
                after = direction === 1;
                var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
                if (moveVector !== false) {
                    if (moveVector === 1 || moveVector === -1) after = moveVector === 1;
                    _silent = true;
                    setTimeout(_unsilent, 30);
                    capture();
                    if (after && !nextSibling) el.appendChild(dragEl);
                    else target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                     // Undo chrome's scroll adjustment (has no effect on other browsers)
                    if (scrolledPastTop) scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                    parentEl = dragEl.parentNode; // actualization
                    // must be done before animation
                    if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
                    changed();
                    return completed(true);
                }
            }
            if (el.contains(dragEl)) return completed(false);
        }
        return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
        off(document, 'mousemove', this._onTouchMove);
        off(document, 'touchmove', this._onTouchMove);
        off(document, 'pointermove', this._onTouchMove);
        off(document, 'dragover', nearestEmptyInsertDetectEvent);
        off(document, 'mousemove', nearestEmptyInsertDetectEvent);
        off(document, 'touchmove', nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, 'mouseup', this._onDrop);
        off(ownerDocument, 'touchend', this._onDrop);
        off(ownerDocument, 'pointerup', this._onDrop);
        off(ownerDocument, 'touchcancel', this._onDrop);
        off(document, 'selectstart', this);
    },
    _onDrop: function _onDrop(/**Event*/ evt) {
        var el = this.el, options = this.options; // Get the index of the dragged element within its parent
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        pluginEvent('drop', this, {
            evt: evt
        });
        parentEl = dragEl && dragEl.parentNode; // Get again after plugin event
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        if (Sortable.eventCanceled) {
            this._nulling();
            return;
        }
        awaitingDragStarted = false;
        isCircumstantialInvert = false;
        pastFirstInvertThresh = false;
        clearInterval(this._loopId);
        clearTimeout(this._dragStartTimer);
        _cancelNextTick(this.cloneId);
        _cancelNextTick(this._dragStartId); // Unbind events
        if (this.nativeDraggable) {
            off(document, 'drop', this);
            off(el, 'dragstart', this._onDragStart);
        }
        this._offMoveEvents();
        this._offUpEvents();
        if (Safari) css(document.body, 'user-select', '');
        css(dragEl, 'transform', '');
        if (evt) {
            if (moved) {
                evt.cancelable && evt.preventDefault();
                !options.dropBubble && evt.stopPropagation();
            }
            ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') // Remove clone(s)
            cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
            if (dragEl) {
                if (this.nativeDraggable) off(dragEl, 'dragend', this);
                _disableDraggable(dragEl);
                dragEl.style['will-change'] = ''; // Remove classes
                // ghostClass is added in dragStarted
                if (moved && !awaitingDragStarted) toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
                toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event
                _dispatchEvent({
                    sortable: this,
                    name: 'unchoose',
                    toEl: parentEl,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: evt
                });
                if (rootEl !== parentEl) {
                    if (newIndex >= 0) {
                        // Add event
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: 'add',
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        }); // Remove event
                        _dispatchEvent({
                            sortable: this,
                            name: 'remove',
                            toEl: parentEl,
                            originalEvent: evt
                        }); // drag from one list and drop into another
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: 'sort',
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        });
                        _dispatchEvent({
                            sortable: this,
                            name: 'sort',
                            toEl: parentEl,
                            originalEvent: evt
                        });
                    }
                    putSortable && putSortable.save();
                } else {
                    if (newIndex !== oldIndex) {
                        if (newIndex >= 0) {
                            // drag & drop within the same list
                            _dispatchEvent({
                                sortable: this,
                                name: 'update',
                                toEl: parentEl,
                                originalEvent: evt
                            });
                            _dispatchEvent({
                                sortable: this,
                                name: 'sort',
                                toEl: parentEl,
                                originalEvent: evt
                            });
                        }
                    }
                }
                if (Sortable.active) {
                    /* jshint eqnull:true */ if (newIndex == null || newIndex === -1) {
                        newIndex = oldIndex;
                        newDraggableIndex = oldDraggableIndex;
                    }
                    _dispatchEvent({
                        sortable: this,
                        name: 'end',
                        toEl: parentEl,
                        originalEvent: evt
                    }); // Save sorting
                    this.save();
                }
            }
        }
        this._nulling();
    },
    _nulling: function _nulling() {
        pluginEvent('nulling', this);
        rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
        savedInputChecked.forEach(function(el) {
            el.checked = true;
        });
        savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent(/**Event*/ evt) {
        switch(evt.type){
            case 'drop':
            case 'dragend':
                this._onDrop(evt);
                break;
            case 'dragenter':
            case 'dragover':
                if (dragEl) {
                    this._onDragOver(evt);
                    _globalDragOver(evt);
                }
                break;
            case 'selectstart':
                evt.preventDefault();
                break;
        }
    },
    /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */ toArray: function toArray() {
        var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
        for(; i < n; i++){
            el = children[i];
            if (closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
        return order;
    },
    /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */ sort: function sort(order, useAnimation) {
        var items = {}, rootEl = this.el;
        this.toArray().forEach(function(id, i) {
            var el = rootEl.children[i];
            if (closest(el, this.options.draggable, rootEl, false)) items[id] = el;
        }, this);
        useAnimation && this.captureAnimationState();
        order.forEach(function(id) {
            if (items[id]) {
                rootEl.removeChild(items[id]);
                rootEl.appendChild(items[id]);
            }
        });
        useAnimation && this.animateAll();
    },
    /**
   * Save the current sorting
   */ save: function save() {
        var store = this.options.store;
        store && store.set && store.set(this);
    },
    /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */ closest: function closest$1(el, selector) {
        return closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */ option: function option(name, value) {
        var options = this.options;
        if (value === void 0) return options[name];
        else {
            var modifiedValue = PluginManager.modifyOption(this, name, value);
            if (typeof modifiedValue !== 'undefined') options[name] = modifiedValue;
            else options[name] = value;
            if (name === 'group') _prepareGroup(options);
        }
    },
    /**
   * Destroy
   */ destroy: function destroy() {
        pluginEvent('destroy', this);
        var el = this.el;
        el[expando] = null;
        off(el, 'mousedown', this._onTapStart);
        off(el, 'touchstart', this._onTapStart);
        off(el, 'pointerdown', this._onTapStart);
        if (this.nativeDraggable) {
            off(el, 'dragover', this);
            off(el, 'dragenter', this);
        } // Remove draggable attributes
        Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function(el) {
            el.removeAttribute('draggable');
        });
        this._onDrop();
        this._disableDelayedDragEvents();
        sortables.splice(sortables.indexOf(this.el), 1);
        this.el = el = null;
    },
    _hideClone: function _hideClone() {
        if (!cloneHidden) {
            pluginEvent('hideClone', this);
            if (Sortable.eventCanceled) return;
            css(cloneEl, 'display', 'none');
            if (this.options.removeCloneOnHide && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
            cloneHidden = true;
        }
    },
    _showClone: function _showClone(putSortable) {
        if (putSortable.lastPutMode !== 'clone') {
            this._hideClone();
            return;
        }
        if (cloneHidden) {
            pluginEvent('showClone', this);
            if (Sortable.eventCanceled) return; // show clone at dragEl or original position
            if (dragEl.parentNode == rootEl && !this.options.group.revertClone) rootEl.insertBefore(cloneEl, dragEl);
            else if (nextEl) rootEl.insertBefore(cloneEl, nextEl);
            else rootEl.appendChild(cloneEl);
            if (this.options.group.revertClone) this.animate(dragEl, cloneEl);
            css(cloneEl, 'display', '');
            cloneHidden = false;
        }
    }
};
function _globalDragOver(/**Event*/ evt) {
    if (evt.dataTransfer) evt.dataTransfer.dropEffect = 'move';
    evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal; // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent('move', {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent('Event');
        evt.initEvent('move', true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
    return retVal;
}
function _disableDraggable(el) {
    el.draggable = false;
}
function _unsilent() {
    _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
    var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
    var spacer = 10;
    return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
    var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
    if (!invertSwap) {
        // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
        if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
            // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
            // check if past first invert threshold on side opposite of lastDirection
            if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) // past first invert threshold, do not restrict inverted threshold to dragEl shadow
            pastFirstInvertThresh = true;
            if (!pastFirstInvertThresh) {
                // dragEl shadow (target move distance shadow)
                if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
                 : mouseOnAxis > targetS2 - targetMoveDistance) return -lastDirection;
            } else invert = true;
        } else {
            // Regular
            if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return _getInsertDirection(target);
        }
    }
    invert = invert || invertSwap;
    if (invert) {
        // Invert of regular
        if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
    return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */ function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) return 1;
    else return -1;
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */ function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
    while(i--)sum += str.charCodeAt(i);
    return sum.toString(36);
}
function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName('input');
    var idx = inputs.length;
    while(idx--){
        var el = inputs[idx];
        el.checked && savedInputChecked.push(el);
    }
}
function _nextTick(fn) {
    return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
    return clearTimeout(id);
} // Fixed #973:
if (documentExists) on(document, 'touchmove', function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) evt.preventDefault();
});
 // Export utils
Sortable.utils = {
    on: on,
    off: off,
    css: css,
    find: find,
    is: function is(el, selector) {
        return !!closest(el, selector, el, false);
    },
    extend: extend,
    throttle: throttle,
    closest: closest,
    toggleClass: toggleClass,
    clone: clone,
    index: index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */ Sortable.get = function(element) {
    return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */ Sortable.mount = function() {
    for(var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++)plugins[_key] = arguments[_key];
    if (plugins[0].constructor === Array) plugins = plugins[0];
    plugins.forEach(function(plugin) {
        if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(plugin));
        if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
        PluginManager.mount(plugin);
    });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */ Sortable.create = function(el, options) {
    return new Sortable(el, options);
}; // Export
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
    function AutoScroll() {
        this.defaults = {
            scroll: true,
            forceAutoScrollFallback: false,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
        }; // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
    }
    AutoScroll.prototype = {
        dragStarted: function dragStarted(_ref) {
            var originalEvent = _ref.originalEvent;
            if (this.sortable.nativeDraggable) on(document, 'dragover', this._handleAutoScroll);
            else {
                if (this.options.supportPointer) on(document, 'pointermove', this._handleFallbackAutoScroll);
                else if (originalEvent.touches) on(document, 'touchmove', this._handleFallbackAutoScroll);
                else on(document, 'mousemove', this._handleFallbackAutoScroll);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref2) {
            var originalEvent = _ref2.originalEvent;
            // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
            if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
        },
        drop: function drop() {
            if (this.sortable.nativeDraggable) off(document, 'dragover', this._handleAutoScroll);
            else {
                off(document, 'pointermove', this._handleFallbackAutoScroll);
                off(document, 'touchmove', this._handleFallbackAutoScroll);
                off(document, 'mousemove', this._handleFallbackAutoScroll);
            }
            clearPointerElemChangedInterval();
            clearAutoScrolls();
            cancelThrottle();
        },
        nulling: function nulling() {
            touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
            autoScrolls.length = 0;
        },
        _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
            this._handleAutoScroll(evt, true);
        },
        _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
            var _this = this;
            var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
            touchEvt$1 = evt; // IE does not seem to have native autoscroll,
            // Edge's autoscroll seems too conditional,
            // MACOS Safari does not have autoscroll,
            // Firefox and Chrome are good
            if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
                autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change
                var ogElemScroller = getParentAutoScrollElement(elem, true);
                if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
                    pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour
                    pointerElemChangedInterval = setInterval(function() {
                        var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                        if (newElem !== ogElemScroller) {
                            ogElemScroller = newElem;
                            clearAutoScrolls();
                        }
                        autoScroll(evt, _this.options, newElem, fallback);
                    }, 10);
                    lastAutoScrollX = x;
                    lastAutoScrollY = y;
                }
            } else {
                // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
                    clearAutoScrolls();
                    return;
                }
                autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
            }
        }
    };
    return _extends(AutoScroll, {
        pluginName: 'scroll',
        initializeByDefault: true
    });
}
function clearAutoScrolls() {
    autoScrolls.forEach(function(autoScroll) {
        clearInterval(autoScroll.pid);
    });
    autoScrolls = [];
}
function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
    var scrollThisInstance = false, scrollCustomFn; // New scroll root, set scrollEl
    if (scrollRootEl !== rootEl) {
        scrollRootEl = rootEl;
        clearAutoScrolls();
        scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;
        if (scrollEl === true) scrollEl = getParentAutoScrollElement(rootEl, true);
    }
    var layersOut = 0;
    var currentParent = scrollEl;
    do {
        var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
        if (el === winScroller) {
            canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
            canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
        } else {
            canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
            canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
        }
        var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
        var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
        if (!autoScrolls[layersOut]) {
            for(var i = 0; i <= layersOut; i++)if (!autoScrolls[i]) autoScrolls[i] = {};
        }
        if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
            autoScrolls[layersOut].el = el;
            autoScrolls[layersOut].vx = vx;
            autoScrolls[layersOut].vy = vy;
            clearInterval(autoScrolls[layersOut].pid);
            if (vx != 0 || vy != 0) {
                scrollThisInstance = true;
                /* jshint loopfunc:true */ autoScrolls[layersOut].pid = setInterval((function() {
                    // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                    if (isFallback && this.layer === 0) Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
                    var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
                    var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
                    if (typeof scrollCustomFn === 'function') {
                        if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') return;
                    }
                    scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                }).bind({
                    layer: layersOut
                }), 24);
            }
        }
        layersOut++;
    }while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
    scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
        dispatchSortableEvent('spill');
        this.onSpill({
            dragEl: dragEl,
            putSortable: putSortable
        });
    }
};
function Revert() {}
Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
        var oldDraggableIndex = _ref2.oldDraggableIndex;
        this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
        var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
        this.sortable.captureAnimationState();
        if (putSortable) putSortable.captureAnimationState();
        var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
        if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling);
        else this.sortable.el.appendChild(dragEl);
        this.sortable.animateAll();
        if (putSortable) putSortable.animateAll();
    },
    drop: drop
};
_extends(Revert, {
    pluginName: 'revertOnSpill'
});
function Remove() {}
Remove.prototype = {
    onSpill: function onSpill(_ref4) {
        var dragEl = _ref4.dragEl, putSortable = _ref4.putSortable;
        var parentSortable = putSortable || this.sortable;
        parentSortable.captureAnimationState();
        dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
        parentSortable.animateAll();
    },
    drop: drop
};
_extends(Remove, {
    pluginName: 'removeOnSpill'
});
var lastSwapEl;
function SwapPlugin() {
    function Swap() {
        this.defaults = {
            swapClass: 'sortable-swap-highlight'
        };
    }
    Swap.prototype = {
        dragStart: function dragStart(_ref) {
            var dragEl = _ref.dragEl;
            lastSwapEl = dragEl;
        },
        dragOverValid: function dragOverValid(_ref2) {
            var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
            if (!activeSortable.options.swap) return;
            var el = this.sortable.el, options = this.options;
            if (target && target !== el) {
                var prevSwapEl = lastSwapEl;
                if (onMove(target) !== false) {
                    toggleClass(target, options.swapClass, true);
                    lastSwapEl = target;
                } else lastSwapEl = null;
                if (prevSwapEl && prevSwapEl !== lastSwapEl) toggleClass(prevSwapEl, options.swapClass, false);
            }
            changed();
            completed(true);
            cancel();
        },
        drop: function drop(_ref3) {
            var activeSortable = _ref3.activeSortable, putSortable = _ref3.putSortable, dragEl = _ref3.dragEl;
            var toSortable = putSortable || this.sortable;
            var options = this.options;
            lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
            if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
                if (dragEl !== lastSwapEl) {
                    toSortable.captureAnimationState();
                    if (toSortable !== activeSortable) activeSortable.captureAnimationState();
                    swapNodes(dragEl, lastSwapEl);
                    toSortable.animateAll();
                    if (toSortable !== activeSortable) activeSortable.animateAll();
                }
            }
        },
        nulling: function nulling() {
            lastSwapEl = null;
        }
    };
    return _extends(Swap, {
        pluginName: 'swap',
        eventProperties: function eventProperties() {
            return {
                swapItem: lastSwapEl
            };
        }
    });
}
function swapNodes(n1, n2) {
    var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = index(n1);
    i2 = index(n2);
    if (p1.isEqualNode(p2) && i1 < i2) i2++;
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [], multiDragClones = [], lastMultiDragSelect, // for selection with modifier key down (SHIFT)
multiDragSortable, initialFolding = false, // Initial multi-drag fold when drag started
folding = false, // Folding any other time
dragStarted = false, dragEl$1, clonesFromRect, clonesHidden;
function MultiDragPlugin() {
    function MultiDrag(sortable) {
        // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
        if (!sortable.options.avoidImplicitDeselect) {
            if (sortable.options.supportPointer) on(document, 'pointerup', this._deselectMultiDrag);
            else {
                on(document, 'mouseup', this._deselectMultiDrag);
                on(document, 'touchend', this._deselectMultiDrag);
            }
        }
        on(document, 'keydown', this._checkKeyDown);
        on(document, 'keyup', this._checkKeyUp);
        this.defaults = {
            selectedClass: 'sortable-selected',
            multiDragKey: null,
            avoidImplicitDeselect: false,
            setData: function setData(dataTransfer, dragEl) {
                var data = '';
                if (multiDragElements.length && multiDragSortable === sortable) multiDragElements.forEach(function(multiDragElement, i) {
                    data += (!i ? '' : ', ') + multiDragElement.textContent;
                });
                else data = dragEl.textContent;
                dataTransfer.setData('Text', data);
            }
        };
    }
    MultiDrag.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function delayStartGlobal(_ref) {
            var dragged = _ref.dragEl;
            dragEl$1 = dragged;
        },
        delayEnded: function delayEnded() {
            this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
        },
        setupClone: function setupClone(_ref2) {
            var sortable = _ref2.sortable, cancel = _ref2.cancel;
            if (!this.isMultiDrag) return;
            for(var i = 0; i < multiDragElements.length; i++){
                multiDragClones.push(clone(multiDragElements[i]));
                multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
                multiDragClones[i].draggable = false;
                multiDragClones[i].style['will-change'] = '';
                toggleClass(multiDragClones[i], this.options.selectedClass, false);
                multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
            }
            sortable._hideClone();
            cancel();
        },
        clone: function clone(_ref3) {
            var sortable = _ref3.sortable, rootEl = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
            if (!this.isMultiDrag) return;
            if (!this.options.removeCloneOnHide) {
                if (multiDragElements.length && multiDragSortable === sortable) {
                    insertMultiDragClones(true, rootEl);
                    dispatchSortableEvent('clone');
                    cancel();
                }
            }
        },
        showClone: function showClone(_ref4) {
            var cloneNowShown = _ref4.cloneNowShown, rootEl = _ref4.rootEl, cancel = _ref4.cancel;
            if (!this.isMultiDrag) return;
            insertMultiDragClones(false, rootEl);
            multiDragClones.forEach(function(clone) {
                css(clone, 'display', '');
            });
            cloneNowShown();
            clonesHidden = false;
            cancel();
        },
        hideClone: function hideClone(_ref5) {
            var _this = this;
            var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
            if (!this.isMultiDrag) return;
            multiDragClones.forEach(function(clone) {
                css(clone, 'display', 'none');
                if (_this.options.removeCloneOnHide && clone.parentNode) clone.parentNode.removeChild(clone);
            });
            cloneNowHidden();
            clonesHidden = true;
            cancel();
        },
        dragStartGlobal: function dragStartGlobal(_ref6) {
            var sortable = _ref6.sortable;
            if (!this.isMultiDrag && multiDragSortable) multiDragSortable.multiDrag._deselectMultiDrag();
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.sortableIndex = index(multiDragElement);
            }); // Sort multi-drag elements
            multiDragElements = multiDragElements.sort(function(a, b) {
                return a.sortableIndex - b.sortableIndex;
            });
            dragStarted = true;
        },
        dragStarted: function dragStarted(_ref7) {
            var _this2 = this;
            var sortable = _ref7.sortable;
            if (!this.isMultiDrag) return;
            if (this.options.sort) {
                // Capture rects,
                // hide multi drag elements (by positioning them absolute),
                // set multi drag elements rects to dragRect,
                // show multi drag elements,
                // animate to rects,
                // unset rects & remove from DOM
                sortable.captureAnimationState();
                if (this.options.animation) {
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        css(multiDragElement, 'position', 'absolute');
                    });
                    var dragRect = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRect);
                    });
                    folding = true;
                    initialFolding = true;
                }
            }
            sortable.animateAll(function() {
                folding = false;
                initialFolding = false;
                if (_this2.options.animation) multiDragElements.forEach(function(multiDragElement) {
                    unsetRect(multiDragElement);
                });
                 // Remove all auxiliary multidrag items from el, if sorting enabled
                if (_this2.options.sort) removeMultiDragElements();
            });
        },
        dragOver: function dragOver(_ref8) {
            var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
            if (folding && ~multiDragElements.indexOf(target)) {
                completed(false);
                cancel();
            }
        },
        revert: function revert(_ref9) {
            var fromSortable = _ref9.fromSortable, rootEl = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
            if (multiDragElements.length > 1) {
                // Setup unfold animation
                multiDragElements.forEach(function(multiDragElement) {
                    sortable.addAnimationState({
                        target: multiDragElement,
                        rect: folding ? getRect(multiDragElement) : dragRect
                    });
                    unsetRect(multiDragElement);
                    multiDragElement.fromRect = dragRect;
                    fromSortable.removeAnimationState(multiDragElement);
                });
                folding = false;
                insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref10) {
            var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl = _ref10.parentEl, putSortable = _ref10.putSortable;
            var options = this.options;
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location
                if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
                    // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
                    var dragRectAbsolute = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                        // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
                        parentEl.appendChild(multiDragElement);
                    });
                    folding = true;
                } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
                if (!isOwner) {
                    // Only remove if not folding (folding will remove them anyways)
                    if (!folding) removeMultiDragElements();
                    if (multiDragElements.length > 1) {
                        var clonesHiddenBefore = clonesHidden;
                        activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden
                        if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) multiDragClones.forEach(function(clone) {
                            activeSortable.addAnimationState({
                                target: clone,
                                rect: clonesFromRect
                            });
                            clone.fromRect = clonesFromRect;
                            clone.thisAnimationDuration = null;
                        });
                    } else activeSortable._showClone(sortable);
                }
            }
        },
        dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
            var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
            });
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                clonesFromRect = _extends({}, dragRect);
                var dragMatrix = matrix(dragEl$1, true);
                clonesFromRect.top -= dragMatrix.f;
                clonesFromRect.left -= dragMatrix.e;
            }
        },
        dragOverAnimationComplete: function dragOverAnimationComplete() {
            if (folding) {
                folding = false;
                removeMultiDragElements();
            }
        },
        drop: function drop(_ref12) {
            var evt = _ref12.originalEvent, rootEl = _ref12.rootEl, parentEl = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex = _ref12.oldIndex, putSortable = _ref12.putSortable;
            var toSortable = putSortable || this.sortable;
            if (!evt) return;
            var options = this.options, children = parentEl.children; // Multi-drag selection
            if (!dragStarted) {
                if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
                toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
                if (!~multiDragElements.indexOf(dragEl$1)) {
                    multiDragElements.push(dragEl$1);
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: 'select',
                        targetEl: dragEl$1,
                        originalEvent: evt
                    }); // Modifier activated, select from last to dragEl
                    if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
                        var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
                        if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                            // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                            // (but previous selection existed)
                            var n, i;
                            if (currentIndex > lastIndex) {
                                i = lastIndex;
                                n = currentIndex;
                            } else {
                                i = currentIndex;
                                n = lastIndex + 1;
                            }
                            for(; i < n; i++){
                                if (~multiDragElements.indexOf(children[i])) continue;
                                toggleClass(children[i], options.selectedClass, true);
                                multiDragElements.push(children[i]);
                                dispatchEvent({
                                    sortable: sortable,
                                    rootEl: rootEl,
                                    name: 'select',
                                    targetEl: children[i],
                                    originalEvent: evt
                                });
                            }
                        }
                    } else lastMultiDragSelect = dragEl$1;
                    multiDragSortable = toSortable;
                } else {
                    multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
                    lastMultiDragSelect = null;
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: 'deselect',
                        targetEl: dragEl$1,
                        originalEvent: evt
                    });
                }
            } // Multi-drag drop
            if (dragStarted && this.isMultiDrag) {
                folding = false; // Do not "unfold" after around dragEl if reverted
                if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
                    var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
                    if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
                    toSortable.captureAnimationState();
                    if (!initialFolding) {
                        if (options.animation) {
                            dragEl$1.fromRect = dragRect;
                            multiDragElements.forEach(function(multiDragElement) {
                                multiDragElement.thisAnimationDuration = null;
                                if (multiDragElement !== dragEl$1) {
                                    var rect = folding ? getRect(multiDragElement) : dragRect;
                                    multiDragElement.fromRect = rect; // Prepare unfold animation
                                    toSortable.addAnimationState({
                                        target: multiDragElement,
                                        rect: rect
                                    });
                                }
                            });
                        } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                        // properly they must all be removed
                        removeMultiDragElements();
                        multiDragElements.forEach(function(multiDragElement) {
                            if (children[multiDragIndex]) parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                            else parentEl.appendChild(multiDragElement);
                            multiDragIndex++;
                        }); // If initial folding is done, the elements may have changed position because they are now
                        // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                        // must be fired here as Sortable will not.
                        if (oldIndex === index(dragEl$1)) {
                            var update = false;
                            multiDragElements.forEach(function(multiDragElement) {
                                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                                    update = true;
                                    return;
                                }
                            });
                            if (update) dispatchSortableEvent('update');
                        }
                    } // Must be done after capturing individual rects (scroll bar)
                    multiDragElements.forEach(function(multiDragElement) {
                        unsetRect(multiDragElement);
                    });
                    toSortable.animateAll();
                }
                multiDragSortable = toSortable;
            } // Remove clones if necessary
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') multiDragClones.forEach(function(clone) {
                clone.parentNode && clone.parentNode.removeChild(clone);
            });
        },
        nullingGlobal: function nullingGlobal() {
            this.isMultiDrag = dragStarted = false;
            multiDragClones.length = 0;
        },
        destroyGlobal: function destroyGlobal() {
            this._deselectMultiDrag();
            off(document, 'pointerup', this._deselectMultiDrag);
            off(document, 'mouseup', this._deselectMultiDrag);
            off(document, 'touchend', this._deselectMultiDrag);
            off(document, 'keydown', this._checkKeyDown);
            off(document, 'keyup', this._checkKeyUp);
        },
        _deselectMultiDrag: function _deselectMultiDrag(evt) {
            if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable
            if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable
            if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click
            if (evt && evt.button !== 0) return;
            while(multiDragElements.length){
                var el = multiDragElements[0];
                toggleClass(el, this.options.selectedClass, false);
                multiDragElements.shift();
                dispatchEvent({
                    sortable: this.sortable,
                    rootEl: this.sortable.el,
                    name: 'deselect',
                    targetEl: el,
                    originalEvent: evt
                });
            }
        },
        _checkKeyDown: function _checkKeyDown(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
        },
        _checkKeyUp: function _checkKeyUp(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
        }
    };
    return _extends(MultiDrag, {
        // Static methods & properties
        pluginName: 'multiDrag',
        utils: {
            /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */ select: function select(el) {
                var sortable = el.parentNode[expando];
                if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
                if (multiDragSortable && multiDragSortable !== sortable) {
                    multiDragSortable.multiDrag._deselectMultiDrag();
                    multiDragSortable = sortable;
                }
                toggleClass(el, sortable.options.selectedClass, true);
                multiDragElements.push(el);
            },
            /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */ deselect: function deselect(el) {
                var sortable = el.parentNode[expando], index = multiDragElements.indexOf(el);
                if (!sortable || !sortable.options.multiDrag || !~index) return;
                toggleClass(el, sortable.options.selectedClass, false);
                multiDragElements.splice(index, 1);
            }
        },
        eventProperties: function eventProperties() {
            var _this3 = this;
            var oldIndicies = [], newIndicies = [];
            multiDragElements.forEach(function(multiDragElement) {
                oldIndicies.push({
                    multiDragElement: multiDragElement,
                    index: multiDragElement.sortableIndex
                }); // multiDragElements will already be sorted if folding
                var newIndex;
                if (folding && multiDragElement !== dragEl$1) newIndex = -1;
                else if (folding) newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
                else newIndex = index(multiDragElement);
                newIndicies.push({
                    multiDragElement: multiDragElement,
                    index: newIndex
                });
            });
            return {
                items: _toConsumableArray(multiDragElements),
                clones: [].concat(multiDragClones),
                oldIndicies: oldIndicies,
                newIndicies: newIndicies
            };
        },
        optionListeners: {
            multiDragKey: function multiDragKey(key) {
                key = key.toLowerCase();
                if (key === 'ctrl') key = 'Control';
                else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
                return key;
            }
        }
    });
}
function insertMultiDragElements(clonesInserted, rootEl) {
    multiDragElements.forEach(function(multiDragElement, i) {
        var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(multiDragElement, target);
        else rootEl.appendChild(multiDragElement);
    });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */ function insertMultiDragClones(elementsInserted, rootEl) {
    multiDragClones.forEach(function(clone, i) {
        var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(clone, target);
        else rootEl.appendChild(clone);
    });
}
function removeMultiDragElements() {
    multiDragElements.forEach(function(multiDragElement) {
        if (multiDragElement === dragEl$1) return;
        multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
exports.default = Sortable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1FN45":[function(require,module,exports,__globalThis) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') classes.push(arg);
            else if (Array.isArray(arg)) {
                if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) classes.push(inner);
                }
            } else if (argType === 'object') {
                if (arg.toString === Object.prototype.toString) {
                    for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
                } else classes.push(arg.toString());
            }
        }
        return classes.join(' ');
    }
    if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) // register as 'classnames', consistent with npm package name
    define('classnames', [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"2LIHJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>invariant);
var isProduction = false;
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) return;
    if (isProduction) throw new Error(prefix);
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? prefix + ": " + provided : prefix;
    throw new Error(value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"80uOz":[function(require,module,exports,__globalThis) {
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

},{"classnames":"gSUdL","react":"jMk1U","./ThemeProvider":"gulxC","./PopoverHeader":"9PVXL","./PopoverBody":"5xs4B","./helpers":"eySV1","./getInitialPopperStyles":"dhXT7","react/jsx-runtime":"05iiF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9PVXL":[function(require,module,exports,__globalThis) {
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

},{"react":"jMk1U","classnames":"gSUdL","./ThemeProvider":"gulxC","react/jsx-runtime":"05iiF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5xs4B":[function(require,module,exports,__globalThis) {
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

},{"react":"jMk1U","classnames":"gSUdL","./ThemeProvider":"gulxC","react/jsx-runtime":"05iiF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eySV1":[function(require,module,exports,__globalThis) {
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

},{"react":"jMk1U","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dhXT7":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9WzZV":[function(require,module,exports,__globalThis) {
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
    const mergedRef = (0, _useMergedRefsDefault.default)(triggerNodeRef, children.ref);
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

},{"dom-helpers/contains":"vu0jN","prop-types":"GNqOQ","react":"jMk1U","@restart/hooks/useTimeout":"hjviq","warning":"k76Xo","uncontrollable":"eKG0k","@restart/hooks/useMergedRefs":"jojtD","./Overlay":"j6Meq","./safeFindDOMNode":"9XLXL","react/jsx-runtime":"05iiF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"vu0jN":[function(require,module,exports,__globalThis) {
/* eslint-disable no-bitwise, no-cond-assign */ /**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
function contains(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node);
    if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hjviq":[function(require,module,exports,__globalThis) {
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
            clear
        };
    }, []);
}

},{"react":"jMk1U","./useMounted":"bG4H1","./useWillUnmount":"WJkBK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j6Meq":[function(require,module,exports,__globalThis) {
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

},{"react":"jMk1U","classnames":"gSUdL","@restart/ui/Overlay":"jzcQV","@restart/hooks/useEventCallback":"2uLwi","@restart/hooks/useIsomorphicEffect":"63utT","@restart/hooks/useMergedRefs":"jojtD","./useOverlayOffset":"d5Woz","./Fade":"kNoMh","./safeFindDOMNode":"9XLXL","react/jsx-runtime":"05iiF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jzcQV":[function(require,module,exports,__globalThis) {
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

},{"react":"jMk1U","react-dom":"i4X7T","@restart/hooks/useCallbackRef":"k6f5l","@restart/hooks/useMergedRefs":"jojtD","./usePopper":"93bhj","./useRootClose":"4Ldhn","./useWaitForDOMRef":"hstLK","./mergeOptionsWithPopperConfig":"1gzOF","./ImperativeTransition":"bumCS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"93bhj":[function(require,module,exports,__globalThis) {
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

},{"react":"jMk1U","dequal":"dJTyy","@restart/hooks/useSafeState":"fQu6O","./popper":"a8dPW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dJTyy":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fQu6O":[function(require,module,exports,__globalThis) {
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

},{"react":"jMk1U","./useMounted":"bG4H1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a8dPW":[function(require,module,exports,__globalThis) {
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

},{"@popperjs/core/lib/modifiers/arrow":"5tq5K","@popperjs/core/lib/modifiers/computeStyles":"cU0Y8","@popperjs/core/lib/modifiers/eventListeners":"b3l2h","@popperjs/core/lib/modifiers/flip":"8TrBc","@popperjs/core/lib/modifiers/hide":"1DgVf","@popperjs/core/lib/modifiers/offset":"fv6qu","@popperjs/core/lib/modifiers/popperOffsets":"iQIBA","@popperjs/core/lib/modifiers/preventOverflow":"hksGy","@popperjs/core/lib/enums":false,"@popperjs/core/lib/popper-base":"a0Zzy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a0Zzy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// eslint-disable-next-line import/no-unused-modules
parcelHelpers.export(exports, "createPopper", ()=>(0, _createPopperJs.createPopper));
parcelHelpers.export(exports, "popperGenerator", ()=>(0, _createPopperJs.popperGenerator));
parcelHelpers.export(exports, "detectOverflow", ()=>(0, _createPopperJs.detectOverflow));
var _createPopperJs = require("./createPopper.js");

},{"./createPopper.js":"3NuA9","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4Ldhn":[function(require,module,exports,__globalThis) {
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

},{"dom-helpers/listen":"9XV3O","dom-helpers/ownerDocument":"3rxBi","react":"jMk1U","@restart/hooks/useEventCallback":"2uLwi","./useClickOutside":"2VpM4","./utils":"9WvAD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2VpM4":[function(require,module,exports,__globalThis) {
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

},{"dom-helpers/contains":"hhNgS","dom-helpers/listen":"9XV3O","dom-helpers/ownerDocument":"3rxBi","react":"jMk1U","@restart/hooks/useEventCallback":"2uLwi","warning":"k76Xo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1gzOF":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d5Woz":[function(require,module,exports,__globalThis) {
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

},{"react":"jMk1U","dom-helpers/hasClass":"lWW0L","./ThemeProvider":"gulxC","./Popover":"80uOz","./Tooltip":"91N5M","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"91N5M":[function(require,module,exports,__globalThis) {
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

},{"classnames":"gSUdL","react":"jMk1U","./ThemeProvider":"gulxC","./helpers":"eySV1","./getInitialPopperStyles":"dhXT7","react/jsx-runtime":"05iiF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1Ikwu":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$8b0e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$8b0e.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$8b0e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _visSortableItemCss = require("./VisSortableItem.css");
const VisSortableItem = (props)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "vis-sortable-item ",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "drag-handle",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactFontawesome.FontAwesomeIcon), {
                    icon: (0, _freeSolidSvgIcons.faGripLines)
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
                    lineNumber: 9,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
                lineNumber: 8,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "truncated-text",
                title: props.label,
                children: props.label
            }, void 0, false, {
                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
                lineNumber: 11,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "input-box",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                    type: "checkbox",
                    checked: props.isShow,
                    onChange: props.onCheckChanged,
                    value: props.dataKey
                }, void 0, false, {
                    fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
                    lineNumber: 16,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
                lineNumber: 15,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "source/components/VisualTools/VisDataTable/VisDataTableControl/VisSortableItem/VisSortableItem.js",
        lineNumber: 7,
        columnNumber: 3
    }, undefined);
_c = VisSortableItem;
exports.default = VisSortableItem;
var _c;
$RefreshReg$(_c, "VisSortableItem");

  $parcel$ReactRefreshHelpers$8b0e.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","@fortawesome/react-fontawesome":"iVKob","@fortawesome/free-solid-svg-icons":"gQz28","./VisSortableItem.css":"8t17o","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"8t17o":[function() {},{}],"bv6av":[function() {},{}]},["2qvSm"], null, "parcelRequire06c0", {})

//# sourceMappingURL=VisDataTable.2becdd6e.js.map
