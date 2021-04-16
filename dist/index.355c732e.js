// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) ***REMOVED***
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
      : ***REMOVED******REMOVED***
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || ***REMOVED******REMOVED***
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) ***REMOVED***
    if (!cache[name]) ***REMOVED***
      if (!modules[name]) ***REMOVED***
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) ***REMOVED***
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) ***REMOVED***
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') ***REMOVED***
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = ***REMOVED******REMOVED***

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) ***REMOVED***
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) ***REMOVED***
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) ***REMOVED***
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = ***REMOVED******REMOVED***
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) ***REMOVED***
    modules[id] = [
      function(require, module) ***REMOVED***
        module.exports = exports;
      },
      ***REMOVED***},
    ];
  ***REMOVED***

  Object.defineProperty(newRequire, 'root', ***REMOVED***
    get: function() ***REMOVED***
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) ***REMOVED***
    newRequire(entry[i]);
  }

  if (mainEntry) ***REMOVED***
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') ***REMOVED***
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) ***REMOVED***
      define(function() ***REMOVED***
        return mainExports;
      });

      // <script>
    } else if (globalName) ***REMOVED***
      this[globalName] = mainExports;
    }
  }
})(***REMOVED***"1vSbZ":[function(require,module,exports) ***REMOVED***
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "6c289700c20eac7e3f164c94355c732e";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type ***REMOVED***
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire ***REMOVED***
(string): mixed;
cache: ***REMOVED***|[string]: ParcelModule|***REMOVED***
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: ***REMOVED***|[string]: [Function, ***REMOVED***|[string]: string|}]|***REMOVED***
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule ***REMOVED***
hot: ***REMOVED***|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|***REMOVED***
}
declare var module: ***REMOVED***bundle: ParcelRequire, ...***REMOVED***
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) ***REMOVED***
  OldModule.call(this, moduleName);
  this.hot = ***REMOVED***
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) ***REMOVED***
      this._acceptCallbacks.push(fn || (function () ***REMOVED***}));
    },
    dispose: function (fn) ***REMOVED***
      this._disposeCallbacks.push(fn);
    }
  ***REMOVED***
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: ***REMOVED***|[string]: boolean|}*/
acceptedAssets, /*: ***REMOVED***|[string]: boolean|}*/
/*: ***REMOVED***|[string]: boolean|}*/
assetsToAccept;
function getHostname() ***REMOVED***
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() ***REMOVED***
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') ***REMOVED***
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: ***REMOVED***data: string, ...}*/
  ***REMOVED***
    checkedAssets = ***REMOVED***
      /*: ***REMOVED***|[string]: boolean|}*/
    ***REMOVED***
    acceptedAssets = ***REMOVED***
      /*: ***REMOVED***|[string]: boolean|}*/
    ***REMOVED***
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') ***REMOVED***
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => ***REMOVED***
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) ***REMOVED***
          handled = true;
        }
      });
      if (handled) ***REMOVED***
        console.clear();
        assets.forEach(function (asset) ***REMOVED***
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) ***REMOVED***
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) ***REMOVED***
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else ***REMOVED***
        window.location.reload();
      }
    }
    if (data.type === 'error') ***REMOVED***
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) ***REMOVED***
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  ***REMOVED***
  ws.onerror = function (e) ***REMOVED***
    console.error(e.message);
  ***REMOVED***
  ws.onclose = function (e) ***REMOVED***
    if (undefined !== 'test') ***REMOVED***
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  ***REMOVED***
}
function removeErrorOverlay() ***REMOVED***
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) ***REMOVED***
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) ***REMOVED***
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) ***REMOVED***
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 $***REMOVED***diagnostic.message}
        </div>
        <pre>
          $***REMOVED***stack}
        </pre>
        <div>
          $***REMOVED***diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
***REMOVED***
  var modules = bundle.modules;
  if (!modules) ***REMOVED***
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) ***REMOVED***
    for (d in modules[k][1]) ***REMOVED***
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) ***REMOVED***
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) ***REMOVED***
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) ***REMOVED***
  var newLink = link.cloneNode();
  newLink.onload = function () ***REMOVED***
    if (link.parentNode !== null) ***REMOVED***
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  ***REMOVED***
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() ***REMOVED***
  if (cssTimeout) ***REMOVED***
    return;
  }
  cssTimeout = setTimeout(function () ***REMOVED***
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) ***REMOVED***
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) ***REMOVED***
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
***REMOVED***
  var modules = bundle.modules;
  if (!modules) ***REMOVED***
    return;
  }
  if (asset.type === 'css') ***REMOVED***
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) ***REMOVED***
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) ***REMOVED***
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?***REMOVED*** [string]: ***REMOVED*** [string]: string } }*/
***REMOVED***
  var modules = bundle.modules;
  if (!modules) ***REMOVED***
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) ***REMOVED***
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) ***REMOVED***
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) ***REMOVED***
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) ***REMOVED***
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) ***REMOVED***
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
***REMOVED***
  var cached = bundle.cache[id];
  bundle.hotData = ***REMOVED******REMOVED***
  if (cached && cached.hot) ***REMOVED***
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) ***REMOVED***
    cached.hot._disposeCallbacks.forEach(function (cb) ***REMOVED***
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) ***REMOVED***
    cached.hot._acceptCallbacks.forEach(function (cb) ***REMOVED***
      var assetsToAlsoAccept = cb(function () ***REMOVED***
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) ***REMOVED***
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},***REMOVED***}],"3GZMZ":[function(require,module,exports) ***REMOVED***
let URL =
  "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";

const getProducts = async (url) => ***REMOVED***
  try ***REMOVED***
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data;
  } catch (error) ***REMOVED***
    console.error(error);
  }
***REMOVED***

const listProducts = async () => ***REMOVED***
  try ***REMOVED***
    const data = await getProducts(URL);

    const ***REMOVED*** products } = data;

    const productsList = document.querySelector(".products");

    products.forEach(
      (***REMOVED*** description, id, image, installments, name, oldPrice, price }) =>
        productsList.insertAdjacentHTML(
          "beforeend",
          `
  <div class="product">
  <img src="$***REMOVED***image}" alt="$***REMOVED***name}">
    <div>
      <span class="product-name">$***REMOVED***name}</span>
      <span class="product-description">$***REMOVED***description}</span>
      <span class="product-old-price">De: R$$***REMOVED***oldPrice}</span>
      <span class="product-price">Por: R$$***REMOVED***price}</span>
      <span class="product-obs">Ou $***REMOVED***installments.count}x de Rs$$***REMOVED***installments.value}</span>
    </div>
</div>`
        )
    );

    URL = `https://$***REMOVED***data.nextPage}`;
  } catch (error) ***REMOVED***
    console.error(error.message);
  }
***REMOVED***

listProducts();

const listProductsButton = document.querySelector("#productsList");
listProductsButton.addEventListener("click", listProducts);

},***REMOVED***}]},["1vSbZ","3GZMZ"], "3GZMZ", "parcelRequire4351")

//# sourceMappingURL=index.355c732e.js.map
