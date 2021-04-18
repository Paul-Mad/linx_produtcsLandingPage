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
var _firebase = require("./firebase");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _firebaseDefault = _parcelHelpers.interopDefault(_firebase);
let URL = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";
// ---------------LOAD PRODUCTS FROM THE API ---------------------
const getProducts = async url => ***REMOVED***
  try ***REMOVED***
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error) ***REMOVED***
    console.error(error);
  }
***REMOVED***
// ----------------------------SHOW PRODUCTS-----------------------
const listProducts = async () => ***REMOVED***
  try ***REMOVED***
    const data = await getProducts(URL);
    const ***REMOVED***products} = data;
    const productsList = document.querySelector(".products");
    products.forEach((***REMOVED***description, id, image, installments, name, oldPrice, price}) => productsList.insertAdjacentHTML("beforeend", `
  <div class="product">
    <img class='product-image' src="$***REMOVED***image}" alt="$***REMOVED***name}">
    <div class='product-block'>
      <span class="product-name">$***REMOVED***name}</span>
      <span class="product-description">$***REMOVED***description}</span>
      <span class="product-oldprice">De: R$$***REMOVED***oldPrice}</span>
      <span class="product-price">Por: R$$***REMOVED***price}</span>
      <span class="product-obs">Ou $***REMOVED***installments.count}x de Rs$$***REMOVED***installments.value}</span>
      <button class='btn product-button'>Comprar</button>
    </div>
</div>`));
    URL = `https://$***REMOVED***data.nextPage}`;
  } catch (error) ***REMOVED***
    console.error(error.message);
  }
***REMOVED***
// Call the function to be listed for the first time when the page loads
listProducts();
// listen to the "mais produtos" button click event
const listProductsButton = document.querySelector("#productsList");
listProductsButton.addEventListener("click", listProducts);
// ----------------TOGGLE ACCORDION--------------------------
// Select accordion and text panel
const accordion = document.querySelector(".accordion-button");
const panel = document.querySelector(".panel");
// Listen to the accordion- button click event
accordion.addEventListener("click", e => ***REMOVED***
  if (panel.style.display === "block") ***REMOVED***
    panel.style.display = "none";
  } else ***REMOVED***
    panel.style.display = "block";
  }
});
// ----------------- SUBSCRIBER FROM ------------
// Store form data in firebase database
const addSubscriber = subscriber => ***REMOVED***
  // validate cpf-input
  const validCpf = testaCPF(subscriber[2].value);
  if (!validCpf) ***REMOVED***
    document.getElementById("invalidCpf").style.display = "flex";
    return;
  } else ***REMOVED***
    document.getElementById("invalidCpf").style.display = "none";
  }
  const newSubscriber = ***REMOVED***
    name: subscriber[0].value,
    email: subscriber[1].value,
    cpf: validCpf,
    gender: subscriber[3].value
  ***REMOVED***
  // get the collection reference from firestore
  const ref = _firebaseDefault.default.collection("subscribers");
  const batch = _firebaseDefault.default.batch();
  const newRef = ref.doc();
  // Store new subscriber
  batch.set(newRef, newSubscriber);
  batch.commit();
***REMOVED***
// get the data from form inputs in an array and call the addSubscribers function
const formSubmit = e => ***REMOVED***
  e.preventDefault();
  const subscribeFormInputs = Array.from(document.querySelectorAll(".subscribe-form input"));
  addSubscriber(subscribeFormInputs);
***REMOVED***
// ------------- CPF VALIDATION-----------------
// code from Receita Federal
function testaCPF(strCPF) ***REMOVED***
  let Soma;
  let Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;
  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = Soma * 10 % 11;
  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;
  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = Soma * 10 % 11;
  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return strCPF;
}
// Select subscribe-form and add the event listener onsubmit
const subscribeForm = document.querySelector(".subscribe-form ");
subscribeForm.addEventListener("submit", formSubmit);

},***REMOVED***"./firebase":"6lkjF","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6lkjF":[function(require,module,exports) ***REMOVED***
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _firebaseApp = require("firebase/app");
var _firebaseAppDefault = _parcelHelpers.interopDefault(_firebaseApp);
require("firebase/firestore");
const config = ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
// Initialize Firebase
_firebaseAppDefault.default.initializeApp(config);
const firestore = _firebaseAppDefault.default.firestore();
exports.default = firestore;

},***REMOVED***"firebase/app":"6wFrx","firebase/firestore":"5Eq2v","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6wFrx":[function(require,module,exports) ***REMOVED***
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "default", function () ***REMOVED***
  return _firebaseAppDefault.default;
});
var _firebaseApp = require('@firebase/app');
var _firebaseAppDefault = _parcelHelpers.interopDefault(_firebaseApp);
var _firebaseAppDefault = _parcelHelpers.interopDefault(_firebaseApp);
var name = "firebase";
var version = "8.4.1";
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
_firebaseAppDefault.default.registerVersion(name, version, 'app');

},***REMOVED***"@firebase/app":"6IUA5","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6IUA5":[function(require,module,exports) ***REMOVED***
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "firebase", function () ***REMOVED***
  return firebase$1;
});
var _tslib = require('tslib');
var _firebaseUtil = require('@firebase/util');
var _firebaseComponent = require('@firebase/component');
var _firebaseLogger = require('@firebase/logger');
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _a;
var ERRORS = (_a = ***REMOVED***}, _a["no-app"] = "No Firebase App '***REMOVED***$appName}' has been created - " + 'call Firebase App.initializeApp()', _a["bad-app-name"] = "Illegal App name: '***REMOVED***$appName}", _a["duplicate-app"] = "Firebase App named '***REMOVED***$appName}' already exists", _a["app-deleted"] = "Firebase App named '***REMOVED***$appName}' already deleted", _a["invalid-app-argument"] = 'firebase.***REMOVED***$appName}() takes either no argument or a ' + 'Firebase App instance.', _a["invalid-log-argument"] = 'First argument to `onLog` must be null or a function.', _a);
var ERROR_FACTORY = new _firebaseUtil.ErrorFactory('app', 'Firebase', ERRORS);
var name = "@firebase/app";
var version = "0.6.20";
var name$1 = "@firebase/analytics";
var name$2 = "@firebase/auth";
var name$3 = "@firebase/database";
var name$4 = "@firebase/functions";
var name$5 = "@firebase/installations";
var name$6 = "@firebase/messaging";
var name$7 = "@firebase/performance";
var name$8 = "@firebase/remote-config";
var name$9 = "@firebase/storage";
var name$a = "@firebase/firestore";
var name$b = "firebase-wrapper";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = ***REMOVED***}, _a$1[name] = 'fire-core', _a$1[name$1] = 'fire-analytics', _a$1[name$2] = 'fire-auth', _a$1[name$3] = 'fire-rtdb', _a$1[name$4] = 'fire-fn', _a$1[name$5] = 'fire-iid', _a$1[name$6] = 'fire-fcm', _a$1[name$7] = 'fire-perf', _a$1[name$8] = 'fire-rc', _a$1[name$9] = 'fire-gcs', _a$1[name$a] = 'fire-fst', _a$1['fire-js'] = 'fire-js', _a$1[name$b] = 'fire-js-all', _a$1);
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var logger = new _firebaseLogger.Logger('@firebase/app');
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Global context object for a collection of services using
* a shared authentication state.
*/
var FirebaseAppImpl = /** @class*/
(function () ***REMOVED***
  function FirebaseAppImpl(options, config, firebase_) ***REMOVED***
    var _this = this;
    this.firebase_ = firebase_;
    this.isDeleted_ = false;
    this.name_ = config.name;
    this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
    this.options_ = _firebaseUtil.deepCopy(options);
    this.container = new _firebaseComponent.ComponentContainer(config.name);
    // add itself to container
    this._addComponent(new _firebaseComponent.Component('app', function () ***REMOVED***
      return _this;
    }, "PUBLIC"));
    // populate ComponentContainer with existing components
    this.firebase_.INTERNAL.components.forEach(function (component) ***REMOVED***
      return _this._addComponent(component);
    });
  }
  Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", ***REMOVED***
    get: function () ***REMOVED***
      this.checkDestroyed_();
      return this.automaticDataCollectionEnabled_;
    },
    set: function (val) ***REMOVED***
      this.checkDestroyed_();
      this.automaticDataCollectionEnabled_ = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "name", ***REMOVED***
    get: function () ***REMOVED***
      this.checkDestroyed_();
      return this.name_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "options", ***REMOVED***
    get: function () ***REMOVED***
      this.checkDestroyed_();
      return this.options_;
    },
    enumerable: false,
    configurable: true
  });
  FirebaseAppImpl.prototype.delete = function () ***REMOVED***
    var _this = this;
    return new Promise(function (resolve) ***REMOVED***
      _this.checkDestroyed_();
      resolve();
    }).then(function () ***REMOVED***
      _this.firebase_.INTERNAL.removeApp(_this.name_);
      return Promise.all(_this.container.getProviders().map(function (provider) ***REMOVED***
        return provider.delete();
      }));
    }).then(function () ***REMOVED***
      _this.isDeleted_ = true;
    });
  ***REMOVED***
  /**
  * Return a service instance associated with this app (creating it
  * on demand), identified by the passed instanceIdentifier.
  *
  * NOTE: Currently storage and functions are the only ones that are leveraging this
  * functionality. They invoke it by calling:
  *
  * ```javascript
  * firebase.app().storage('STORAGE BUCKET ID')
  * ```
  *
  * The service name is passed to this already
  * @internal
  */
  FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) ***REMOVED***
    if (instanceIdentifier === void 0) ***REMOVED***
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }
    this.checkDestroyed_();
    // getImmediate will always succeed because _getService is only called for registered components.
    return this.container.getProvider(name).getImmediate(***REMOVED***
      identifier: instanceIdentifier
    });
  ***REMOVED***
  /**
  * Remove a service instance from the cache, so we will create a new instance for this service
  * when people try to get this service again.
  *
  * NOTE: currently only firestore is using this functionality to support firestore shutdown.
  *
  * @param name The service name
  * @param instanceIdentifier instance identifier in case multiple instances are allowed
  * @internal
  */
  FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) ***REMOVED***
    if (instanceIdentifier === void 0) ***REMOVED***
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.container.getProvider(name).clearInstance(instanceIdentifier);
  ***REMOVED***
  /**
  * @param component the component being added to this app's container
  */
  FirebaseAppImpl.prototype._addComponent = function (component) ***REMOVED***
    try ***REMOVED***
      this.container.addComponent(component);
    } catch (e) ***REMOVED***
      logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
    }
  ***REMOVED***
  FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) ***REMOVED***
    this.container.addOrOverwriteComponent(component);
  ***REMOVED***
  FirebaseAppImpl.prototype.toJSON = function () ***REMOVED***
    return ***REMOVED***
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    ***REMOVED***
  ***REMOVED***
  /**
  * This function will throw an Error if the App has already been deleted -
  * use before performing API actions on the App.
  */
  FirebaseAppImpl.prototype.checkDestroyed_ = function () ***REMOVED***
    if (this.isDeleted_) ***REMOVED***
      throw ERROR_FACTORY.create("app-deleted", /*APP_DELETED*/
      ***REMOVED***
        appName: this.name_
      });
    }
  ***REMOVED***
  return FirebaseAppImpl;
})();
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log('dc');
var version$1 = "8.4.0";
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Because auth can't share code with other components, we attach the utility functions
* in an internal namespace to share code.
* This function return a firebase namespace object without
* any utility functions, so it can be shared between the regular firebaseNamespace and
* the lite version.
*/
function createFirebaseNamespaceCore(firebaseAppImpl) ***REMOVED***
  var apps = ***REMOVED******REMOVED***
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var components = new Map();
  // A namespace is a plain JavaScript Object.
  var namespace = ***REMOVED***
    // Hack to prevent Babel from modifying the object returned
    // as the firebase namespace.
    // @ts-ignore
    __esModule: true,
    initializeApp: initializeApp,
    // @ts-ignore
    app: app,
    registerVersion: registerVersion,
    setLogLevel: _firebaseLogger.setLogLevel,
    onLog: onLog,
    // @ts-ignore
    apps: null,
    SDK_VERSION: version$1,
    INTERNAL: ***REMOVED***
      registerComponent: registerComponent,
      removeApp: removeApp,
      components: components,
      useAsService: useAsService
    }
  ***REMOVED***
  // Inject a circular default export to allow Babel users who were previously
  // using:
  // 
  // import firebase from 'firebase';
  // which becomes: var firebase = require('firebase').default;
  // 
  // instead of
  // 
  // import * as firebase from 'firebase';
  // which becomes: var firebase = require('firebase');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  namespace['default'] = namespace;
  // firebase.apps is a read-only getter.
  Object.defineProperty(namespace, 'apps', ***REMOVED***
    get: getApps
  });
  /**
  * Called by App.delete() - but before any services associated with the App
  * are deleted.
  */
  function removeApp(name) ***REMOVED***
    delete apps[name];
  }
  /**
  * Get the App object for a given name (or DEFAULT).
  */
  function app(name) ***REMOVED***
    name = name || DEFAULT_ENTRY_NAME;
    if (!_firebaseUtil.contains(apps, name)) ***REMOVED***
      throw ERROR_FACTORY.create("no-app", /*NO_APP*/
      ***REMOVED***
        appName: name
      });
    }
    return apps[name];
  }
  // @ts-ignore
  app['App'] = firebaseAppImpl;
  function initializeApp(options, rawConfig) ***REMOVED***
    if (rawConfig === void 0) ***REMOVED***
      rawConfig = ***REMOVED******REMOVED***
    }
    if (typeof rawConfig !== 'object' || rawConfig === null) ***REMOVED***
      var name_1 = rawConfig;
      rawConfig = ***REMOVED***
        name: name_1
      ***REMOVED***
    }
    var config = rawConfig;
    if (config.name === undefined) ***REMOVED***
      config.name = DEFAULT_ENTRY_NAME;
    }
    var name = config.name;
    if (typeof name !== 'string' || !name) ***REMOVED***
      throw ERROR_FACTORY.create("bad-app-name", /*BAD_APP_NAME*/
      ***REMOVED***
        appName: String(name)
      });
    }
    if (_firebaseUtil.contains(apps, name)) ***REMOVED***
      throw ERROR_FACTORY.create("duplicate-app", /*DUPLICATE_APP*/
      ***REMOVED***
        appName: name
      });
    }
    var app = new firebaseAppImpl(options, config, namespace);
    apps[name] = app;
    return app;
  }
  /*
  * Return an array of all the non-deleted FirebaseApps.
  */
  function getApps() ***REMOVED***
    // Make a copy so caller cannot mutate the apps list.
    return Object.keys(apps).map(function (name) ***REMOVED***
      return apps[name];
    });
  }
  function registerComponent(component) ***REMOVED***
    var componentName = component.name;
    if (components.has(componentName)) ***REMOVED***
      logger.debug("There were multiple attempts to register component " + componentName + ".");
      return component.type === "PUBLIC" ? /*PUBLIC*/
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      namespace[componentName] : null;
    }
    components.set(componentName, component);
    // create service namespace for public components
    if (component.type === "PUBLIC") /*PUBLIC*/
    ***REMOVED***
      // The Service namespace is an accessor function ...
      var serviceNamespace = function (appArg) ***REMOVED***
        if (appArg === void 0) ***REMOVED***
          appArg = app();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof appArg[componentName] !== 'function') ***REMOVED***
          // Invalid argument.
          // This happens in the following case: firebase.storage('gs:/')
          throw ERROR_FACTORY.create("invalid-app-argument", /*INVALID_APP_ARGUMENT*/
          ***REMOVED***
            appName: componentName
          });
        }
        // Forward service instance lookup to the FirebaseApp.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return appArg[componentName]();
      ***REMOVED***
      // ... and a container for service-level properties.
      if (component.serviceProps !== undefined) ***REMOVED***
        _firebaseUtil.deepExtend(serviceNamespace, component.serviceProps);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      namespace[componentName] = serviceNamespace;
      // Patch the FirebaseAppImpl prototype
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
      // option added to the no-explicit-any rule when ESlint releases it.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function () ***REMOVED***
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) ***REMOVED***
          args[_i] = arguments[_i];
        }
        var serviceFxn = this._getService.bind(this, componentName);
        return serviceFxn.apply(this, component.multipleInstances ? args : []);
      ***REMOVED***
    }
    // add the component to existing app instances
    for (var _i = 0, _a = Object.keys(apps); _i < _a.length; _i++) ***REMOVED***
      var appName = _a[_i];
      apps[appName]._addComponent(component);
    }
    return component.type === "PUBLIC" ? /*PUBLIC*/
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace[componentName] : null;
  }
  function registerVersion(libraryKeyOrName, version, variant) ***REMOVED***
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) ***REMOVED***
      library += "-" + variant;
    }
    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) ***REMOVED***
      var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];
      if (libraryMismatch) ***REMOVED***
        warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
      }
      if (libraryMismatch && versionMismatch) ***REMOVED***
        warning.push('and');
      }
      if (versionMismatch) ***REMOVED***
        warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
      }
      logger.warn(warning.join(' '));
      return;
    }
    registerComponent(new _firebaseComponent.Component(library + "-version", function () ***REMOVED***
      return ***REMOVED***
        library: library,
        version: version
      ***REMOVED***
    }, "VERSION"));
  }
  function onLog(logCallback, options) ***REMOVED***
    if (logCallback !== null && typeof logCallback !== 'function') ***REMOVED***
      throw ERROR_FACTORY.create("invalid-log-argument");
    }
    _firebaseLogger.setUserLogHandler(logCallback, options);
  }
  // Map the requested service to a registered service name
  // (used to map auth to serverAuth service when needed).
  function useAsService(app, name) ***REMOVED***
    if (name === 'serverAuth') ***REMOVED***
      return null;
    }
    var useService = name;
    return useService;
  }
  return namespace;
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Return a firebase namespace object.
*
* In production, this will be called exactly once and the result
* assigned to the 'firebase' global.  It may be called multiple times
* in unit tests.
*/
function createFirebaseNamespace() ***REMOVED***
  var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = _tslib.__assign(_tslib.__assign(***REMOVED***}, namespace.INTERNAL), ***REMOVED***
    createFirebaseNamespace: createFirebaseNamespace,
    extendNamespace: extendNamespace,
    createSubscribe: _firebaseUtil.createSubscribe,
    ErrorFactory: _firebaseUtil.ErrorFactory,
    deepExtend: _firebaseUtil.deepExtend
  });
  /**
  * Patch the top-level firebase namespace with additional properties.
  *
  * firebase.INTERNAL.extendNamespace()
  */
  function extendNamespace(props) ***REMOVED***
    _firebaseUtil.deepExtend(namespace, props);
  }
  return namespace;
}
var firebase = createFirebaseNamespace();
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PlatformLoggerService = /** @class*/
(function () ***REMOVED***
  function PlatformLoggerService(container) ***REMOVED***
    this.container = container;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  PlatformLoggerService.prototype.getPlatformInfoString = function () ***REMOVED***
    var providers = this.container.getProviders();
    // Loop through providers and get library/version pairs from any that are
    // version components.
    return providers.map(function (provider) ***REMOVED***
      if (isVersionServiceProvider(provider)) ***REMOVED***
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else ***REMOVED***
        return null;
      }
    }).filter(function (logString) ***REMOVED***
      return logString;
    }).join(' ');
  ***REMOVED***
  return PlatformLoggerService;
})();
/**
*
* @param provider check if this provider provides a VersionService
*
* NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
* provides VersionService. The provider is not necessarily a 'app-version'
* provider.
*/
function isVersionServiceProvider(provider) ***REMOVED***
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function registerCoreComponents(firebase, variant) ***REMOVED***
  firebase.INTERNAL.registerComponent(new _firebaseComponent.Component('platform-logger', function (container) ***REMOVED***
    return new PlatformLoggerService(container);
  }, "PRIVATE"));
  // Register `app` package.
  firebase.registerVersion(name, version, variant);
  // Register platform SDK identifier (no version).
  firebase.registerVersion('fire-js', '');
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (_firebaseUtil.isBrowser() && self.firebase !== undefined) ***REMOVED***
  logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
  // eslint-disable-next-line
  var sdkVersion = self.firebase.SDK_VERSION;
  if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) ***REMOVED***
    logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () ***REMOVED***
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) ***REMOVED***
    args[_i] = arguments[_i];
  }
  // Environment check before initializing app
  // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
  // in @firebase/logger
  if (_firebaseUtil.isNode()) ***REMOVED***
    logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
  }
  return initializeApp.apply(undefined, args);
***REMOVED***
var firebase$1 = firebase;
registerCoreComponents(firebase$1);
exports.default = firebase$1;

},***REMOVED***"tslib":"4rd38","@firebase/util":"3bR6t","@firebase/component":"5qT0x","@firebase/logger":"5PuYX","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4rd38":[function(require,module,exports) ***REMOVED***
var global = arguments[3];
var define;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
******************************************************************************/
/*global global, define, System, Reflect, Promise*/
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) ***REMOVED***
  var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : ***REMOVED******REMOVED***
  if (typeof define === "function" && define.amd) ***REMOVED***
    define("tslib", ["exports"], function (exports) ***REMOVED***
      factory(createExporter(root, createExporter(exports)));
    });
  } else if (typeof module === "object" && typeof module.exports === "object") ***REMOVED***
    factory(createExporter(root, createExporter(module.exports)));
  } else ***REMOVED***
    factory(createExporter(root));
  }
  function createExporter(exports, previous) ***REMOVED***
    if (exports !== root) ***REMOVED***
      if (typeof Object.create === "function") ***REMOVED***
        Object.defineProperty(exports, "__esModule", ***REMOVED***
          value: true
        });
      } else ***REMOVED***
        exports.__esModule = true;
      }
    }
    return function (id, v) ***REMOVED***
      return exports[id] = previous ? previous(id, v) : v;
    ***REMOVED***
  }
})(function (exporter) ***REMOVED***
  var extendStatics = Object.setPrototypeOf || (***REMOVED***
    __proto__: []
  }) instanceof Array && (function (d, b) ***REMOVED***
    d.__proto__ = b;
  }) || (function (d, b) ***REMOVED***
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  });
  __extends = function (d, b) ***REMOVED***
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() ***REMOVED***
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  ***REMOVED***
  __assign = Object.assign || (function (t) ***REMOVED***
    for (var s, i = 1, n = arguments.length; i < n; i++) ***REMOVED***
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  });
  __rest = function (s, e) ***REMOVED***
    var t = ***REMOVED******REMOVED***
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) ***REMOVED***
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  ***REMOVED***
  __decorate = function (decorators, target, key, desc) ***REMOVED***
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return (c > 3 && r && Object.defineProperty(target, key, r), r);
  ***REMOVED***
  __param = function (paramIndex, decorator) ***REMOVED***
    return function (target, key) ***REMOVED***
      decorator(target, key, paramIndex);
    ***REMOVED***
  ***REMOVED***
  __metadata = function (metadataKey, metadataValue) ***REMOVED***
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  ***REMOVED***
  __awaiter = function (thisArg, _arguments, P, generator) ***REMOVED***
    function adopt(value) ***REMOVED***
      return value instanceof P ? value : new P(function (resolve) ***REMOVED***
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function (resolve, reject) ***REMOVED***
      function fulfilled(value) ***REMOVED***
        try ***REMOVED***
          step(generator.next(value));
        } catch (e) ***REMOVED***
          reject(e);
        }
      }
      function rejected(value) ***REMOVED***
        try ***REMOVED***
          step(generator["throw"](value));
        } catch (e) ***REMOVED***
          reject(e);
        }
      }
      function step(result) ***REMOVED***
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  ***REMOVED***
  __generator = function (thisArg, body) ***REMOVED***
    var _ = ***REMOVED***
      label: 0,
      sent: function () ***REMOVED***
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, f, y, t, g;
    return (g = ***REMOVED***
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () ***REMOVED***
      return this;
    }), g);
    function verb(n) ***REMOVED***
      return function (v) ***REMOVED***
        return step([n, v]);
      ***REMOVED***
    }
    function step(op) ***REMOVED***
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try ***REMOVED***
        if ((f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
        if ((y = 0, t)) op = [op[0] & 2, t.value];
        switch (op[0]) ***REMOVED***
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return ***REMOVED***
              value: op[1],
              done: false
            ***REMOVED***
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) ***REMOVED***
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) ***REMOVED***
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) ***REMOVED***
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) ***REMOVED***
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) ***REMOVED***
        op = [6, e];
        y = 0;
      } finally ***REMOVED***
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return ***REMOVED***
        value: op[0] ? op[1] : void 0,
        done: true
      ***REMOVED***
    }
  ***REMOVED***
  __exportStar = function (m, o) ***REMOVED***
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  ***REMOVED***
  __createBinding = Object.create ? function (o, m, k, k2) ***REMOVED***
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, ***REMOVED***
      enumerable: true,
      get: function () ***REMOVED***
        return m[k];
      }
    });
  } : function (o, m, k, k2) ***REMOVED***
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  ***REMOVED***
  __values = function (o) ***REMOVED***
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return ***REMOVED***
      next: function () ***REMOVED***
        if (o && i >= o.length) o = void 0;
        return ***REMOVED***
          value: o && o[i++],
          done: !o
        ***REMOVED***
      }
    ***REMOVED***
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  ***REMOVED***
  __read = function (o, n) ***REMOVED***
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try ***REMOVED***
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) ***REMOVED***
      e = ***REMOVED***
        error: error
      ***REMOVED***
    } finally ***REMOVED***
      try ***REMOVED***
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally ***REMOVED***
        if (e) throw e.error;
      }
    }
    return ar;
  ***REMOVED***
  /** @deprecated*/
  __spread = function () ***REMOVED***
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  ***REMOVED***
  /** @deprecated*/
  __spreadArrays = function () ***REMOVED***
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; (j++, k++)) r[k] = a[j];
    return r;
  ***REMOVED***
  __spreadArray = function (to, from) ***REMOVED***
    for (var i = 0, il = from.length, j = to.length; i < il; (i++, j++)) to[j] = from[i];
    return to;
  ***REMOVED***
  __await = function (v) ***REMOVED***
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  ***REMOVED***
  __asyncGenerator = function (thisArg, _arguments, generator) ***REMOVED***
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return (i = ***REMOVED***}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () ***REMOVED***
      return this;
    }, i);
    function verb(n) ***REMOVED***
      if (g[n]) i[n] = function (v) ***REMOVED***
        return new Promise(function (a, b) ***REMOVED***
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      ***REMOVED***
    }
    function resume(n, v) ***REMOVED***
      try ***REMOVED***
        step(g[n](v));
      } catch (e) ***REMOVED***
        settle(q[0][3], e);
      }
    }
    function step(r) ***REMOVED***
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) ***REMOVED***
      resume("next", value);
    }
    function reject(value) ***REMOVED***
      resume("throw", value);
    }
    function settle(f, v) ***REMOVED***
      if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
    }
  ***REMOVED***
  __asyncDelegator = function (o) ***REMOVED***
    var i, p;
    return (i = ***REMOVED***}, verb("next"), verb("throw", function (e) ***REMOVED***
      throw e;
    }), verb("return"), i[Symbol.iterator] = function () ***REMOVED***
      return this;
    }, i);
    function verb(n, f) ***REMOVED***
      i[n] = o[n] ? function (v) ***REMOVED***
        return (p = !p) ? ***REMOVED***
          value: __await(o[n](v)),
          done: n === "return"
        } : f ? f(v) : v;
      } : f;
    }
  ***REMOVED***
  __asyncValues = function (o) ***REMOVED***
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = ***REMOVED***}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () ***REMOVED***
      return this;
    }, i);
    function verb(n) ***REMOVED***
      i[n] = o[n] && (function (v) ***REMOVED***
        return new Promise(function (resolve, reject) ***REMOVED***
          (v = o[n](v), settle(resolve, reject, v.done, v.value));
        });
      });
    }
    function settle(resolve, reject, d, v) ***REMOVED***
      Promise.resolve(v).then(function (v) ***REMOVED***
        resolve(***REMOVED***
          value: v,
          done: d
        });
      }, reject);
    }
  ***REMOVED***
  __makeTemplateObject = function (cooked, raw) ***REMOVED***
    if (Object.defineProperty) ***REMOVED***
      Object.defineProperty(cooked, "raw", ***REMOVED***
        value: raw
      });
    } else ***REMOVED***
      cooked.raw = raw;
    }
    return cooked;
  ***REMOVED***
  var __setModuleDefault = Object.create ? function (o, v) ***REMOVED***
    Object.defineProperty(o, "default", ***REMOVED***
      enumerable: true,
      value: v
    });
  } : function (o, v) ***REMOVED***
    o["default"] = v;
  ***REMOVED***
  __importStar = function (mod) ***REMOVED***
    if (mod && mod.__esModule) return mod;
    var result = ***REMOVED******REMOVED***
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  ***REMOVED***
  __importDefault = function (mod) ***REMOVED***
    return mod && mod.__esModule ? mod : ***REMOVED***
      "default": mod
    ***REMOVED***
  ***REMOVED***
  __classPrivateFieldGet = function (receiver, state, kind, f) ***REMOVED***
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  ***REMOVED***
  __classPrivateFieldSet = function (receiver, state, value, kind, f) ***REMOVED***
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value);
  ***REMOVED***
  exporter("__extends", __extends);
  exporter("__assign", __assign);
  exporter("__rest", __rest);
  exporter("__decorate", __decorate);
  exporter("__param", __param);
  exporter("__metadata", __metadata);
  exporter("__awaiter", __awaiter);
  exporter("__generator", __generator);
  exporter("__exportStar", __exportStar);
  exporter("__createBinding", __createBinding);
  exporter("__values", __values);
  exporter("__read", __read);
  exporter("__spread", __spread);
  exporter("__spreadArrays", __spreadArrays);
  exporter("__spreadArray", __spreadArray);
  exporter("__await", __await);
  exporter("__asyncGenerator", __asyncGenerator);
  exporter("__asyncDelegator", __asyncDelegator);
  exporter("__asyncValues", __asyncValues);
  exporter("__makeTemplateObject", __makeTemplateObject);
  exporter("__importStar", __importStar);
  exporter("__importDefault", __importDefault);
  exporter("__classPrivateFieldGet", __classPrivateFieldGet);
  exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});

},***REMOVED***}],"3bR6t":[function(require,module,exports) ***REMOVED***
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "CONSTANTS", function () ***REMOVED***
  return CONSTANTS;
});
_parcelHelpers.export(exports, "Deferred", function () ***REMOVED***
  return Deferred;
});
_parcelHelpers.export(exports, "ErrorFactory", function () ***REMOVED***
  return ErrorFactory;
});
_parcelHelpers.export(exports, "FirebaseError", function () ***REMOVED***
  return FirebaseError;
});
_parcelHelpers.export(exports, "MAX_VALUE_MILLIS", function () ***REMOVED***
  return MAX_VALUE_MILLIS;
});
_parcelHelpers.export(exports, "RANDOM_FACTOR", function () ***REMOVED***
  return RANDOM_FACTOR;
});
_parcelHelpers.export(exports, "Sha1", function () ***REMOVED***
  return Sha1;
});
_parcelHelpers.export(exports, "areCookiesEnabled", function () ***REMOVED***
  return areCookiesEnabled;
});
_parcelHelpers.export(exports, "assert", function () ***REMOVED***
  return assert;
});
_parcelHelpers.export(exports, "assertionError", function () ***REMOVED***
  return assertionError;
});
_parcelHelpers.export(exports, "async", function () ***REMOVED***
  return async;
});
_parcelHelpers.export(exports, "base64", function () ***REMOVED***
  return base64;
});
_parcelHelpers.export(exports, "base64Decode", function () ***REMOVED***
  return base64Decode;
});
_parcelHelpers.export(exports, "base64Encode", function () ***REMOVED***
  return base64Encode;
});
_parcelHelpers.export(exports, "calculateBackoffMillis", function () ***REMOVED***
  return calculateBackoffMillis;
});
_parcelHelpers.export(exports, "contains", function () ***REMOVED***
  return contains;
});
_parcelHelpers.export(exports, "createSubscribe", function () ***REMOVED***
  return createSubscribe;
});
_parcelHelpers.export(exports, "decode", function () ***REMOVED***
  return decode;
});
_parcelHelpers.export(exports, "deepCopy", function () ***REMOVED***
  return deepCopy;
});
_parcelHelpers.export(exports, "deepExtend", function () ***REMOVED***
  return deepExtend;
});
_parcelHelpers.export(exports, "errorPrefix", function () ***REMOVED***
  return errorPrefix;
});
_parcelHelpers.export(exports, "extractQuerystring", function () ***REMOVED***
  return extractQuerystring;
});
_parcelHelpers.export(exports, "getModularInstance", function () ***REMOVED***
  return getModularInstance;
});
_parcelHelpers.export(exports, "getUA", function () ***REMOVED***
  return getUA;
});
_parcelHelpers.export(exports, "isAdmin", function () ***REMOVED***
  return isAdmin;
});
_parcelHelpers.export(exports, "isBrowser", function () ***REMOVED***
  return isBrowser;
});
_parcelHelpers.export(exports, "isBrowserExtension", function () ***REMOVED***
  return isBrowserExtension;
});
_parcelHelpers.export(exports, "isElectron", function () ***REMOVED***
  return isElectron;
});
_parcelHelpers.export(exports, "isEmpty", function () ***REMOVED***
  return isEmpty;
});
_parcelHelpers.export(exports, "isIE", function () ***REMOVED***
  return isIE;
});
_parcelHelpers.export(exports, "isIndexedDBAvailable", function () ***REMOVED***
  return isIndexedDBAvailable;
});
_parcelHelpers.export(exports, "isMobileCordova", function () ***REMOVED***
  return isMobileCordova;
});
_parcelHelpers.export(exports, "isNode", function () ***REMOVED***
  return isNode;
});
_parcelHelpers.export(exports, "isNodeSdk", function () ***REMOVED***
  return isNodeSdk;
});
_parcelHelpers.export(exports, "isReactNative", function () ***REMOVED***
  return isReactNative;
});
_parcelHelpers.export(exports, "isSafari", function () ***REMOVED***
  return isSafari;
});
_parcelHelpers.export(exports, "isUWP", function () ***REMOVED***
  return isUWP;
});
_parcelHelpers.export(exports, "isValidFormat", function () ***REMOVED***
  return isValidFormat;
});
_parcelHelpers.export(exports, "isValidTimestamp", function () ***REMOVED***
  return isValidTimestamp;
});
_parcelHelpers.export(exports, "issuedAtTime", function () ***REMOVED***
  return issuedAtTime;
});
_parcelHelpers.export(exports, "jsonEval", function () ***REMOVED***
  return jsonEval;
});
_parcelHelpers.export(exports, "map", function () ***REMOVED***
  return map;
});
_parcelHelpers.export(exports, "ordinal", function () ***REMOVED***
  return ordinal;
});
_parcelHelpers.export(exports, "querystring", function () ***REMOVED***
  return querystring;
});
_parcelHelpers.export(exports, "querystringDecode", function () ***REMOVED***
  return querystringDecode;
});
_parcelHelpers.export(exports, "safeGet", function () ***REMOVED***
  return safeGet;
});
_parcelHelpers.export(exports, "stringLength", function () ***REMOVED***
  return stringLength;
});
_parcelHelpers.export(exports, "stringToByteArray", function () ***REMOVED***
  return stringToByteArray$1;
});
_parcelHelpers.export(exports, "stringify", function () ***REMOVED***
  return stringify;
});
_parcelHelpers.export(exports, "validateArgCount", function () ***REMOVED***
  return validateArgCount;
});
_parcelHelpers.export(exports, "validateCallback", function () ***REMOVED***
  return validateCallback;
});
_parcelHelpers.export(exports, "validateContextObject", function () ***REMOVED***
  return validateContextObject;
});
_parcelHelpers.export(exports, "validateIndexedDBOpenable", function () ***REMOVED***
  return validateIndexedDBOpenable;
});
_parcelHelpers.export(exports, "validateNamespace", function () ***REMOVED***
  return validateNamespace;
});
var _tslib = require('tslib');
var global = arguments[3];
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
*/
var CONSTANTS = ***REMOVED***
  /**
  * @define ***REMOVED***boolean} Whether this is the client Node.js SDK.
  */
  NODE_CLIENT: false,
  /**
  * @define ***REMOVED***boolean} Whether this is the Admin Node.js SDK.
  */
  NODE_ADMIN: false,
  /**
  * Firebase SDK Version
  */
  SDK_VERSION: '$***REMOVED***JSCORE_VERSION}'
***REMOVED***
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Throws an error if the provided assertion is falsy
*/
var assert = function (assertion, message) ***REMOVED***
  if (!assertion) ***REMOVED***
    throw assertionError(message);
  }
***REMOVED***
/**
* Returns an Error object suitable for throwing.
*/
var assertionError = function (message) ***REMOVED***
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
***REMOVED***
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var stringToByteArray = function (str) ***REMOVED***
  // TODO(user): Use native implementations if/when available
  var out = [];
  var p = 0;
  for (var i = 0; i < str.length; i++) ***REMOVED***
    var c = str.charCodeAt(i);
    if (c < 128) ***REMOVED***
      out[p++] = c;
    } else if (c < 2048) ***REMOVED***
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) ***REMOVED***
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else ***REMOVED***
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
***REMOVED***
/**
* Turns an array of numbers into the string given by the concatenation of the
* characters to which the numbers correspond.
* @param bytes Array of numbers representing characters.
* @return Stringification of the array.
*/
var byteArrayToString = function (bytes) ***REMOVED***
  // TODO(user): Use native implementations if/when available
  var out = [];
  var pos = 0, c = 0;
  while (pos < bytes.length) ***REMOVED***
    var c1 = bytes[pos++];
    if (c1 < 128) ***REMOVED***
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) ***REMOVED***
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) ***REMOVED***
      // Surrogate Pair
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else ***REMOVED***
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }
  return out.join('');
***REMOVED***
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = ***REMOVED***
  /**
  * Maps bytes to characters.
  */
  byteToCharMap_: null,
  /**
  * Maps characters to bytes.
  */
  charToByteMap_: null,
  /**
  * Maps bytes to websafe characters.
  * @private
  */
  byteToCharMapWebSafe_: null,
  /**
  * Maps websafe characters to bytes.
  * @private
  */
  charToByteMapWebSafe_: null,
  /**
  * Our default alphabet, shared between
  * ENCODED_VALS and ENCODED_VALS_WEBSAFE
  */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
  /**
  * Our default alphabet. Value 64 (=) is special; it means "nothing."
  */
  /**
  * Our default alphabet. Value 64 (=) is special; it means "nothing."
  */
  get ENCODED_VALS() ***REMOVED***
    return this.ENCODED_VALS_BASE + '+/=';
  },
  /**
  * Our websafe alphabet.
  */
  /**
  * Our websafe alphabet.
  */
  get ENCODED_VALS_WEBSAFE() ***REMOVED***
    return this.ENCODED_VALS_BASE + '-_.';
  },
  /**
  * Whether this browser supports the atob and btoa functions. This extension
  * started at Mozilla but is now implemented by many browsers. We use the
  * ASSUME_* variables to avoid pulling in the full useragent detection library
  * but still allowing the standard per-browser compilations.
  *
  */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',
  /**
  * Base64-encode an array of bytes.
  *
  * @param input An array of bytes (numbers with
  *     value in [0, 255]) to encode.
  * @param webSafe Boolean indicating we should use the
  *     alternative alphabet.
  * @return The base64 encoded string.
  */
  encodeByteArray: function (input, webSafe) ***REMOVED***
    if (!Array.isArray(input)) ***REMOVED***
      throw Error('encodeByteArray takes an array as a parameter');
    }
    this.init_();
    var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    var output = [];
    for (var i = 0; i < input.length; i += 3) ***REMOVED***
      var byte1 = input[i];
      var haveByte2 = i + 1 < input.length;
      var byte2 = haveByte2 ? input[i + 1] : 0;
      var haveByte3 = i + 2 < input.length;
      var byte3 = haveByte3 ? input[i + 2] : 0;
      var outByte1 = byte1 >> 2;
      var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      var outByte4 = byte3 & 0x3f;
      if (!haveByte3) ***REMOVED***
        outByte4 = 64;
        if (!haveByte2) ***REMOVED***
          outByte3 = 64;
        }
      }
      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }
    return output.join('');
  },
  /**
  * Base64-encode a string.
  *
  * @param input A string to encode.
  * @param webSafe If true, we should use the
  *     alternative alphabet.
  * @return The base64 encoded string.
  */
  encodeString: function (input, webSafe) ***REMOVED***
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) ***REMOVED***
      return btoa(input);
    }
    return this.encodeByteArray(stringToByteArray(input), webSafe);
  },
  /**
  * Base64-decode a string.
  *
  * @param input to decode.
  * @param webSafe True if we should use the
  *     alternative alphabet.
  * @return string representing the decoded value.
  */
  decodeString: function (input, webSafe) ***REMOVED***
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) ***REMOVED***
      return atob(input);
    }
    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },
  /**
  * Base64-decode a string.
  *
  * In base-64 decoding, groups of four characters are converted into three
  * bytes.  If the encoder did not apply padding, the input length may not
  * be a multiple of 4.
  *
  * In this case, the last group will have fewer than 4 characters, and
  * padding will be inferred.  If the group has one or two characters, it decodes
  * to one byte.  If the group has three characters, it decodes to two bytes.
  *
  * @param input Input to decode.
  * @param webSafe True if we should use the web-safe alphabet.
  * @return bytes representing the decoded value.
  */
  decodeStringToByteArray: function (input, webSafe) ***REMOVED***
    this.init_();
    var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    var output = [];
    for (var i = 0; i < input.length; ) ***REMOVED***
      var byte1 = charToByteMap[input.charAt(i++)];
      var haveByte2 = i < input.length;
      var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      var haveByte3 = i < input.length;
      var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      var haveByte4 = i < input.length;
      var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) ***REMOVED***
        throw Error();
      }
      var outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);
      if (byte3 !== 64) ***REMOVED***
        var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);
        if (byte4 !== 64) ***REMOVED***
          var outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }
    return output;
  },
  /**
  * Lazy static initialization function. Called before
  * accessing any of the static map variables.
  * @private
  */
  init_: function () ***REMOVED***
    if (!this.byteToCharMap_) ***REMOVED***
      this.byteToCharMap_ = ***REMOVED******REMOVED***
      this.charToByteMap_ = ***REMOVED******REMOVED***
      this.byteToCharMapWebSafe_ = ***REMOVED******REMOVED***
      this.charToByteMapWebSafe_ = ***REMOVED******REMOVED***
      // We want quick mappings back and forth, so we precompute two maps.
      for (var i = 0; i < this.ENCODED_VALS.length; i++) ***REMOVED***
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
        // Be forgiving when decoding and correctly decode both encodings.
        if (i >= this.ENCODED_VALS_BASE.length) ***REMOVED***
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
***REMOVED***
/**
* URL-safe base64 encoding
*/
var base64Encode = function (str) ***REMOVED***
  var utf8Bytes = stringToByteArray(str);
  return base64.encodeByteArray(utf8Bytes, true);
***REMOVED***
/**
* URL-safe base64 decoding
*
* NOTE: DO NOT use the global atob() function - it does NOT support the
* base64Url variant encoding.
*
* @param str To be decoded
* @return Decoded result, if possible
*/
var base64Decode = function (str) ***REMOVED***
  try ***REMOVED***
    return base64.decodeString(str, true);
  } catch (e) ***REMOVED***
    console.error('base64Decode failed: ', e);
  }
  return null;
***REMOVED***
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Do a deep-copy of basic JavaScript Objects or Arrays.
*/
function deepCopy(value) ***REMOVED***
  return deepExtend(undefined, value);
}
/**
* Copy properties from source to target (recursively allows extension
* of Objects and Arrays).  Scalar values in the target are over-written.
* If target is undefined, an object of the appropriate type will be created
* (and returned).
*
* We recursively copy all child properties of plain Objects in the source- so
* that namespace- like dictionaries are merged.
*
* Note that the target can be a function, in which case the properties in
* the source Object are copied onto it as static properties of the Function.
*
* Note: we don't merge __proto__ to prevent prototype pollution
*/
function deepExtend(target, source) ***REMOVED***
  if (!(source instanceof Object)) ***REMOVED***
    return source;
  }
  switch (source.constructor) ***REMOVED***
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      var dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === undefined) ***REMOVED***
        target = ***REMOVED******REMOVED***
      }
      break;
    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;
    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }
  for (var prop in source) ***REMOVED***
    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) ***REMOVED***
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
function isValidKey(key) ***REMOVED***
  return key !== '__proto__';
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Deferred = /** @class*/
(function () ***REMOVED***
  function Deferred() ***REMOVED***
    var _this = this;
    this.reject = function () ***REMOVED******REMOVED***
    this.resolve = function () ***REMOVED******REMOVED***
    this.promise = new Promise(function (resolve, reject) ***REMOVED***
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  /**
  * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
  * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
  * and returns a node-style callback which will resolve or reject the Deferred's promise.
  */
  Deferred.prototype.wrapCallback = function (callback) ***REMOVED***
    var _this = this;
    return function (error, value) ***REMOVED***
      if (error) ***REMOVED***
        _this.reject(error);
      } else ***REMOVED***
        _this.resolve(value);
      }
      if (typeof callback === 'function') ***REMOVED***
        // Attaching noop handler just in case developer wasn't expecting
        // promises
        _this.promise.catch(function () ***REMOVED***});
        // Some of our callbacks don't expect a value and our own tests
        // assert that the parameter length is 1
        if (callback.length === 1) ***REMOVED***
          callback(error);
        } else ***REMOVED***
          callback(error, value);
        }
      }
    ***REMOVED***
  ***REMOVED***
  return Deferred;
})();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns navigator.userAgent string or '' if it's not defined.
* @return user agent string
*/
function getUA() ***REMOVED***
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') ***REMOVED***
    return navigator['userAgent'];
  } else ***REMOVED***
    return '';
  }
}
/**
* Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
*
* Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
* in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
* wait for a callback.
*/
function isMobileCordova() ***REMOVED***
  return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && (/ios|iphone|ipod|ipad|android|blackberry|iemobile/i).test(getUA());
}
/**
* Detect Node.js.
*
* @return true if Node.js environment is detected.
*/
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() ***REMOVED***
  try ***REMOVED***
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) ***REMOVED***
    return false;
  }
}
/**
* Detect Browser Environment
*/
function isBrowser() ***REMOVED***
  return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() ***REMOVED***
  var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
  return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
* Detect React Native.
*
* @return true if ReactNative environment is detected.
*/
function isReactNative() ***REMOVED***
  return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps.*/
function isElectron() ***REMOVED***
  return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer.*/
function isIE() ***REMOVED***
  var ua = getUA();
  return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps.*/
function isUWP() ***REMOVED***
  return getUA().indexOf('MSAppHost/') >= 0;
}
/**
* Detect whether the current SDK build is the Node version.
*
* @return true if it's the Node SDK build.
*/
function isNodeSdk() ***REMOVED***
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari.*/
function isSafari() ***REMOVED***
  return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
* This method checks if indexedDB is supported by current browser/service worker context
* @return true if indexedDB is supported by current browser/service worker context
*/
function isIndexedDBAvailable() ***REMOVED***
  return ('indexedDB' in self) && indexedDB != null;
}
/**
* This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
* if errors occur during the database open operation.
*
* @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
* private browsing)
*/
function validateIndexedDBOpenable() ***REMOVED***
  return new Promise(function (resolve, reject) ***REMOVED***
    try ***REMOVED***
      var preExist_1 = true;
      var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
      var request_1 = self.indexedDB.open(DB_CHECK_NAME_1);
      request_1.onsuccess = function () ***REMOVED***
        request_1.result.close();
        // delete database only when it doesn't pre-exist
        if (!preExist_1) ***REMOVED***
          self.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
        }
        resolve(true);
      ***REMOVED***
      request_1.onupgradeneeded = function () ***REMOVED***
        preExist_1 = false;
      ***REMOVED***
      request_1.onerror = function () ***REMOVED***
        var _a;
        reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
      ***REMOVED***
    } catch (error) ***REMOVED***
      reject(error);
    }
  });
}
/**
*
* This method checks whether cookie is enabled within current browser
* @return true if cookie is enabled within current browser
*/
function areCookiesEnabled() ***REMOVED***
  if (!navigator || !navigator.cookieEnabled) ***REMOVED***
    return false;
  }
  return true;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class*/
(function (_super) ***REMOVED***
  _tslib.__extends(FirebaseError, _super);
  function FirebaseError(code, message, customData) ***REMOVED***
    var _this = _super.call(this, message) || this;
    _this.code = code;
    _this.customData = customData;
    _this.name = ERROR_NAME;
    // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(_this, FirebaseError.prototype);
    // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.
    if (Error.captureStackTrace) ***REMOVED***
      Error.captureStackTrace(_this, ErrorFactory.prototype.create);
    }
    return _this;
  }
  return FirebaseError;
})(Error);
var ErrorFactory = /** @class*/
(function () ***REMOVED***
  function ErrorFactory(service, serviceName, errors) ***REMOVED***
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  ErrorFactory.prototype.create = function (code) ***REMOVED***
    var data = [];
    for (var _i = 1; _i < arguments.length; _i++) ***REMOVED***
      data[_i - 1] = arguments[_i];
    }
    var customData = data[0] || (***REMOVED***});
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : 'Error';
    // Service Name: Error message (service/code).
    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  ***REMOVED***
  return ErrorFactory;
})();
function replaceTemplate(template, data) ***REMOVED***
  return template.replace(PATTERN, function (_, key) ***REMOVED***
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}
var PATTERN = /\***REMOVED***\$([^}]+)}/g;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Evaluates a JSON string into a javascript object.
*
* @param ***REMOVED***string} str A string containing JSON.
* @return ***REMOVED****} The javascript object representing the specified JSON.
*/
function jsonEval(str) ***REMOVED***
  return JSON.parse(str);
}
/**
* Returns JSON representing a javascript object.
* @param ***REMOVED****} data Javascript object to be stringified.
* @return ***REMOVED***string} The JSON contents of the object.
*/
function stringify(data) ***REMOVED***
  return JSON.stringify(data);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Decodes a Firebase auth. token into constituent parts.
*
* Notes:
* - May return with invalid / incomplete claims if there's no native base64 decoding support.
* - Doesn't check if the token is actually valid.
*/
var decode = function (token) ***REMOVED***
  var header = ***REMOVED***}, claims = ***REMOVED***}, data = ***REMOVED***}, signature = '';
  try ***REMOVED***
    var parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || (***REMOVED***});
    delete claims['d'];
  } catch (e) ***REMOVED***}
  return ***REMOVED***
    header: header,
    claims: claims,
    data: data,
    signature: signature
  ***REMOVED***
***REMOVED***
/**
* Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
* token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
*
* Notes:
* - May return a false negative if there's no native base64 decoding support.
* - Doesn't check if the token is actually valid.
*/
var isValidTimestamp = function (token) ***REMOVED***
  var claims = decode(token).claims;
  var now = Math.floor(new Date().getTime() / 1000);
  var validSince = 0, validUntil = 0;
  if (typeof claims === 'object') ***REMOVED***
    if (claims.hasOwnProperty('nbf')) ***REMOVED***
      validSince = claims['nbf'];
    } else if (claims.hasOwnProperty('iat')) ***REMOVED***
      validSince = claims['iat'];
    }
    if (claims.hasOwnProperty('exp')) ***REMOVED***
      validUntil = claims['exp'];
    } else ***REMOVED***
      // token will expire after 24h by default
      validUntil = validSince + 86400;
    }
  }
  return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
***REMOVED***
/**
* Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
*
* Notes:
* - May return null if there's no native base64 decoding support.
* - Doesn't check if the token is actually valid.
*/
var issuedAtTime = function (token) ***REMOVED***
  var claims = decode(token).claims;
  if (typeof claims === 'object' && claims.hasOwnProperty('iat')) ***REMOVED***
    return claims['iat'];
  }
  return null;
***REMOVED***
/**
* Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
*
* Notes:
* - May return a false negative if there's no native base64 decoding support.
* - Doesn't check if the token is actually valid.
*/
var isValidFormat = function (token) ***REMOVED***
  var decoded = decode(token), claims = decoded.claims;
  return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
***REMOVED***
/**
* Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
*
* Notes:
* - May return a false negative if there's no native base64 decoding support.
* - Doesn't check if the token is actually valid.
*/
var isAdmin = function (token) ***REMOVED***
  var claims = decode(token).claims;
  return typeof claims === 'object' && claims['admin'] === true;
***REMOVED***
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function contains(obj, key) ***REMOVED***
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) ***REMOVED***
  if (Object.prototype.hasOwnProperty.call(obj, key)) ***REMOVED***
    return obj[key];
  } else ***REMOVED***
    return undefined;
  }
}
function isEmpty(obj) ***REMOVED***
  for (var key in obj) ***REMOVED***
    if (Object.prototype.hasOwnProperty.call(obj, key)) ***REMOVED***
      return false;
    }
  }
  return true;
}
function map(obj, fn, contextObj) ***REMOVED***
  var res = ***REMOVED******REMOVED***
  for (var key in obj) ***REMOVED***
    if (Object.prototype.hasOwnProperty.call(obj, key)) ***REMOVED***
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }
  return res;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
* params object (e.g. ***REMOVED***arg: 'val', arg2: 'val2'})
* Note: You must prepend it with ? when adding it to a URL.
*/
function querystring(querystringParams) ***REMOVED***
  var params = [];
  var _loop_1 = function (key, value) ***REMOVED***
    if (Array.isArray(value)) ***REMOVED***
      value.forEach(function (arrayVal) ***REMOVED***
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else ***REMOVED***
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  ***REMOVED***
  for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) ***REMOVED***
    var _b = _a[_i], key = _b[0], value = _b[1];
    _loop_1(key, value);
  }
  return params.length ? '&' + params.join('&') : '';
}
/**
* Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
* (e.g. ***REMOVED***arg: 'val', arg2: 'val2'})
*/
function querystringDecode(querystring) ***REMOVED***
  var obj = ***REMOVED******REMOVED***
  var tokens = querystring.replace(/^\?/, '').split('&');
  tokens.forEach(function (token) ***REMOVED***
    if (token) ***REMOVED***
      var _a = token.split('='), key = _a[0], value = _a[1];
      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
/**
* Extract the query string part of a URL, including the leading question mark (if present).
*/
function extractQuerystring(url) ***REMOVED***
  var queryStart = url.indexOf('?');
  if (!queryStart) ***REMOVED***
    return '';
  }
  var fragmentStart = url.indexOf('#', queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @fileoverview SHA-1 cryptographic hash.
* Variable names follow the notation in FIPS PUB 180-3:
* http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
*
* Usage:
*   var sha1 = new sha1();
*   sha1.update(bytes);
*   var hash = sha1.digest();
*
* Performance:
*   Chrome 23:   ~400 Mbit/s
*   Firefox 16:  ~250 Mbit/s
*
*/
/**
* SHA-1 cryptographic hash constructor.
*
* The properties declared here are discussed in the above algorithm document.
* @constructor
* @final
* @struct
*/
var Sha1 = /** @class*/
(function () ***REMOVED***
  function Sha1() ***REMOVED***
    /**
    * Holds the previous values of accumulated variables a-e in the compress_
    * function.
    * @private
    */
    this.chain_ = [];
    /**
    * A buffer holding the partially computed hash result.
    * @private
    */
    this.buf_ = [];
    /**
    * An array of 80 bytes, each a part of the message to be hashed.  Referred to
    * as the message schedule in the docs.
    * @private
    */
    this.W_ = [];
    /**
    * Contains data needed to pad messages less than 64 bytes.
    * @private
    */
    this.pad_ = [];
    /**
    * @private ***REMOVED***number}
    */
    this.inbuf_ = 0;
    /**
    * @private ***REMOVED***number}
    */
    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;
    for (var i = 1; i < this.blockSize; ++i) ***REMOVED***
      this.pad_[i] = 0;
    }
    this.reset();
  }
  Sha1.prototype.reset = function () ***REMOVED***
    this.chain_[0] = 0x67452301;
    this.chain_[1] = 0xefcdab89;
    this.chain_[2] = 0x98badcfe;
    this.chain_[3] = 0x10325476;
    this.chain_[4] = 0xc3d2e1f0;
    this.inbuf_ = 0;
    this.total_ = 0;
  ***REMOVED***
  /**
  * Internal compress helper function.
  * @param buf Block to compress.
  * @param offset Offset of the block in the buffer.
  * @private
  */
  Sha1.prototype.compress_ = function (buf, offset) ***REMOVED***
    if (!offset) ***REMOVED***
      offset = 0;
    }
    var W = this.W_;
    // get 16 big endian words
    if (typeof buf === 'string') ***REMOVED***
      for (var i = 0; i < 16; i++) ***REMOVED***
        // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
        // have a bug that turns the post-increment ++ operator into pre-increment
        // during JIT compilation.  We have code that depends heavily on SHA-1 for
        // correctness and which is affected by this bug, so I've removed all uses
        // of post-increment ++ in which the result value is used.  We can revert
        // this change once the Safari bug
        // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
        // most clients have been updated.
        W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
        offset += 4;
      }
    } else ***REMOVED***
      for (var i = 0; i < 16; i++) ***REMOVED***
        W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
        offset += 4;
      }
    }
    // expand to 80 words
    for (var i = 16; i < 80; i++) ***REMOVED***
      var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
      W[i] = (t << 1 | t >>> 31) & 0xffffffff;
    }
    var a = this.chain_[0];
    var b = this.chain_[1];
    var c = this.chain_[2];
    var d = this.chain_[3];
    var e = this.chain_[4];
    var f, k;
    // TODO(user): Try to unroll this loop to speed up the computation.
    for (var i = 0; i < 80; i++) ***REMOVED***
      if (i < 40) ***REMOVED***
        if (i < 20) ***REMOVED***
          f = d ^ b & (c ^ d);
          k = 0x5a827999;
        } else ***REMOVED***
          f = b ^ c ^ d;
          k = 0x6ed9eba1;
        }
      } else ***REMOVED***
        if (i < 60) ***REMOVED***
          f = b & c | d & (b | c);
          k = 0x8f1bbcdc;
        } else ***REMOVED***
          f = b ^ c ^ d;
          k = 0xca62c1d6;
        }
      }
      var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) & 0xffffffff;
      b = a;
      a = t;
    }
    this.chain_[0] = this.chain_[0] + a & 0xffffffff;
    this.chain_[1] = this.chain_[1] + b & 0xffffffff;
    this.chain_[2] = this.chain_[2] + c & 0xffffffff;
    this.chain_[3] = this.chain_[3] + d & 0xffffffff;
    this.chain_[4] = this.chain_[4] + e & 0xffffffff;
  ***REMOVED***
  Sha1.prototype.update = function (bytes, length) ***REMOVED***
    // TODO(johnlenz): tighten the function signature and remove this check
    if (bytes == null) ***REMOVED***
      return;
    }
    if (length === undefined) ***REMOVED***
      length = bytes.length;
    }
    var lengthMinusBlock = length - this.blockSize;
    var n = 0;
    // Using local instead of member variables gives ~5% speedup on Firefox 16.
    var buf = this.buf_;
    var inbuf = this.inbuf_;
    // The outer while loop should execute at most twice.
    while (n < length) ***REMOVED***
      // When we have no data in the block to top up, we can directly process the
      // input buffer (assuming it contains sufficient data). This gives ~25%
      // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
      // the data is provided in large chunks (or in multiples of 64 bytes).
      if (inbuf === 0) ***REMOVED***
        while (n <= lengthMinusBlock) ***REMOVED***
          this.compress_(bytes, n);
          n += this.blockSize;
        }
      }
      if (typeof bytes === 'string') ***REMOVED***
        while (n < length) ***REMOVED***
          buf[inbuf] = bytes.charCodeAt(n);
          ++inbuf;
          ++n;
          if (inbuf === this.blockSize) ***REMOVED***
            this.compress_(buf);
            inbuf = 0;
            // Jump to the outer loop so we use the full-block optimization.
            break;
          }
        }
      } else ***REMOVED***
        while (n < length) ***REMOVED***
          buf[inbuf] = bytes[n];
          ++inbuf;
          ++n;
          if (inbuf === this.blockSize) ***REMOVED***
            this.compress_(buf);
            inbuf = 0;
            // Jump to the outer loop so we use the full-block optimization.
            break;
          }
        }
      }
    }
    this.inbuf_ = inbuf;
    this.total_ += length;
  ***REMOVED***
  /** @override*/
  Sha1.prototype.digest = function () ***REMOVED***
    var digest = [];
    var totalBits = this.total_ * 8;
    // Add pad 0x80 0x00*.
    if (this.inbuf_ < 56) ***REMOVED***
      this.update(this.pad_, 56 - this.inbuf_);
    } else ***REMOVED***
      this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    }
    // Add # bits.
    for (var i = this.blockSize - 1; i >= 56; i--) ***REMOVED***
      this.buf_[i] = totalBits & 255;
      totalBits /= 256;
    }
    this.compress_(this.buf_);
    var n = 0;
    for (var i = 0; i < 5; i++) ***REMOVED***
      for (var j = 24; j >= 0; j -= 8) ***REMOVED***
        digest[n] = this.chain_[i] >> j & 255;
        ++n;
      }
    }
    return digest;
  ***REMOVED***
  return Sha1;
})();
/**
* Helper to make a Subscribe function (just like Promise helps make a
* Thenable).
*
* @param executor Function which can make calls to a single Observer
*     as a proxy.
* @param onNoObservers Callback when count of Observers goes to zero.
*/
function createSubscribe(executor, onNoObservers) ***REMOVED***
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
/**
* Implement fan-out for any number of Observers attached via a subscribe
* function.
*/
var ObserverProxy = /** @class*/
(function () ***REMOVED***
  /**
  * @param executor Function which can make calls to a single Observer
  *     as a proxy.
  * @param onNoObservers Callback when count of Observers goes to zero.
  */
  function ObserverProxy(executor, onNoObservers) ***REMOVED***
    var _this = this;
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    // Micro-task scheduling by calling task.then().
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    // Call the executor asynchronously so subscribers that are called
    // synchronously after the creation of the subscribe function
    // can still receive the very first value generated in the executor.
    this.task.then(function () ***REMOVED***
      executor(_this);
    }).catch(function (e) ***REMOVED***
      _this.error(e);
    });
  }
  ObserverProxy.prototype.next = function (value) ***REMOVED***
    this.forEachObserver(function (observer) ***REMOVED***
      observer.next(value);
    });
  ***REMOVED***
  ObserverProxy.prototype.error = function (error) ***REMOVED***
    this.forEachObserver(function (observer) ***REMOVED***
      observer.error(error);
    });
    this.close(error);
  ***REMOVED***
  ObserverProxy.prototype.complete = function () ***REMOVED***
    this.forEachObserver(function (observer) ***REMOVED***
      observer.complete();
    });
    this.close();
  ***REMOVED***
  /**
  * Subscribe function that can be used to add an Observer to the fan-out list.
  *
  * - We require that no event is sent to a subscriber sychronously to their
  *   call to subscribe().
  */
  ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) ***REMOVED***
    var _this = this;
    var observer;
    if (nextOrObserver === undefined && error === undefined && complete === undefined) ***REMOVED***
      throw new Error('Missing Observer.');
    }
    // Assemble an Observer object when passed as callback functions.
    if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) ***REMOVED***
      observer = nextOrObserver;
    } else ***REMOVED***
      observer = ***REMOVED***
        next: nextOrObserver,
        error: error,
        complete: complete
      ***REMOVED***
    }
    if (observer.next === undefined) ***REMOVED***
      observer.next = noop;
    }
    if (observer.error === undefined) ***REMOVED***
      observer.error = noop;
    }
    if (observer.complete === undefined) ***REMOVED***
      observer.complete = noop;
    }
    var unsub = this.unsubscribeOne.bind(this, this.observers.length);
    // Attempt to subscribe to a terminated Observable - we
    // just respond to the Observer with the final error or complete
    // event.
    if (this.finalized) ***REMOVED***
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () ***REMOVED***
        try ***REMOVED***
          if (_this.finalError) ***REMOVED***
            observer.error(_this.finalError);
          } else ***REMOVED***
            observer.complete();
          }
        } catch (e) ***REMOVED***}
        return;
      });
    }
    this.observers.push(observer);
    return unsub;
  ***REMOVED***
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  ObserverProxy.prototype.unsubscribeOne = function (i) ***REMOVED***
    if (this.observers === undefined || this.observers[i] === undefined) ***REMOVED***
      return;
    }
    delete this.observers[i];
    this.observerCount -= 1;
    if (this.observerCount === 0 && this.onNoObservers !== undefined) ***REMOVED***
      this.onNoObservers(this);
    }
  ***REMOVED***
  ObserverProxy.prototype.forEachObserver = function (fn) ***REMOVED***
    if (this.finalized) ***REMOVED***
      // Already closed by previous event....just eat the additional values.
      return;
    }
    // Since sendOne calls asynchronously - there is no chance that
    // this.observers will become undefined.
    for (var i = 0; i < this.observers.length; i++) ***REMOVED***
      this.sendOne(i, fn);
    }
  ***REMOVED***
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  ObserverProxy.prototype.sendOne = function (i, fn) ***REMOVED***
    var _this = this;
    // Execute the callback asynchronously
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.task.then(function () ***REMOVED***
      if (_this.observers !== undefined && _this.observers[i] !== undefined) ***REMOVED***
        try ***REMOVED***
          fn(_this.observers[i]);
        } catch (e) ***REMOVED***
          // Ignore exceptions raised in Observers or missing methods of an
          // Observer.
          // Log error to console. b/31404806
          if (typeof console !== 'undefined' && console.error) ***REMOVED***
            console.error(e);
          }
        }
      }
    });
  ***REMOVED***
  ObserverProxy.prototype.close = function (err) ***REMOVED***
    var _this = this;
    if (this.finalized) ***REMOVED***
      return;
    }
    this.finalized = true;
    if (err !== undefined) ***REMOVED***
      this.finalError = err;
    }
    // Proxy is no longer needed - garbage collect references
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.task.then(function () ***REMOVED***
      _this.observers = undefined;
      _this.onNoObservers = undefined;
    });
  ***REMOVED***
  return ObserverProxy;
})();
/** Turn synchronous function into one called asynchronously.*/
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) ***REMOVED***
  return function () ***REMOVED***
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) ***REMOVED***
      args[_i] = arguments[_i];
    }
    Promise.resolve(true).then(function () ***REMOVED***
      fn.apply(void 0, args);
    }).catch(function (error) ***REMOVED***
      if (onError) ***REMOVED***
        onError(error);
      }
    });
  ***REMOVED***
}
/**
* Return true if the object passed in implements any of the named methods.
*/
function implementsAnyMethods(obj, methods) ***REMOVED***
  if (typeof obj !== 'object' || obj === null) ***REMOVED***
    return false;
  }
  for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) ***REMOVED***
    var method = methods_1[_i];
    if ((method in obj) && typeof obj[method] === 'function') ***REMOVED***
      return true;
    }
  }
  return false;
}
function noop() ***REMOVED***}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Check to make sure the appropriate number of arguments are provided for a public function.
* Throws an error if it fails.
*
* @param fnName The function name
* @param minCount The minimum number of arguments to allow for the function call
* @param maxCount The maximum number of argument to allow for the function call
* @param argCount The actual number of arguments provided.
*/
var validateArgCount = function (fnName, minCount, maxCount, argCount) ***REMOVED***
  var argError;
  if (argCount < minCount) ***REMOVED***
    argError = 'at least ' + minCount;
  } else if (argCount > maxCount) ***REMOVED***
    argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
  }
  if (argError) ***REMOVED***
    var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
    throw new Error(error);
  }
***REMOVED***
/**
* Generates a string to prefix an error message about failed argument validation
*
* @param fnName The function name
* @param argName The name of the argument
* @return The prefix to add to the error thrown for validation.
*/
function errorPrefix(fnName, argName) ***REMOVED***
  return fnName + " failed: " + argName + " argument ";
}
/**
* @param fnName
* @param argumentNumber
* @param namespace
* @param optional
*/
function validateNamespace(fnName, namespace, optional) ***REMOVED***
  if (optional && !namespace) ***REMOVED***
    return;
  }
  if (typeof namespace !== 'string') ***REMOVED***
    // TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
  }
}
function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) ***REMOVED***
  if (optional && !callback) ***REMOVED***
    return;
  }
  if (typeof callback !== 'function') ***REMOVED***
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
  }
}
function validateContextObject(fnName, argumentName, context, optional) ***REMOVED***
  if (optional && !context) ***REMOVED***
    return;
  }
  if (typeof context !== 'object' || context === null) ***REMOVED***
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
  }
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
* @param ***REMOVED***string} str
* @return ***REMOVED***Array}
*/
var stringToByteArray$1 = function (str) ***REMOVED***
  var out = [];
  var p = 0;
  for (var i = 0; i < str.length; i++) ***REMOVED***
    var c = str.charCodeAt(i);
    // Is this the lead surrogate in a surrogate pair?
    if (c >= 0xd800 && c <= 0xdbff) ***REMOVED***
      var high = c - 0xd800;
      // the high 10 bits.
      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      var low = str.charCodeAt(i) - 0xdc00;
      // the low 10 bits.
      c = 0x10000 + (high << 10) + low;
    }
    if (c < 128) ***REMOVED***
      out[p++] = c;
    } else if (c < 2048) ***REMOVED***
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) ***REMOVED***
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else ***REMOVED***
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
***REMOVED***
/**
* Calculate length without actually converting; useful for doing cheaper validation.
* @param ***REMOVED***string} str
* @return ***REMOVED***number}
*/
var stringLength = function (str) ***REMOVED***
  var p = 0;
  for (var i = 0; i < str.length; i++) ***REMOVED***
    var c = str.charCodeAt(i);
    if (c < 128) ***REMOVED***
      p++;
    } else if (c < 2048) ***REMOVED***
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) ***REMOVED***
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++;
    } else ***REMOVED***
      p += 3;
    }
  }
  return p;
***REMOVED***
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The amount of milliseconds to exponentially increase.
*/
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
* The factor to backoff by.
* Should be a number greater than 1.
*/
var DEFAULT_BACKOFF_FACTOR = 2;
/**
* The maximum milliseconds to increase to.
*
* <p>Visible for testing
*/
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000;
// Four hours, like iOS and Android.
/**
* The percentage of backoff time to randomize by.
* See
* http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
* for context.
*
* <p>Visible for testing
*/
var RANDOM_FACTOR = 0.5;
/**
* Based on the backoff method from
* https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
* Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
*/
function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) ***REMOVED***
  if (intervalMillis === void 0) ***REMOVED***
    intervalMillis = DEFAULT_INTERVAL_MILLIS;
  }
  if (backoffFactor === void 0) ***REMOVED***
    backoffFactor = DEFAULT_BACKOFF_FACTOR;
  }
  // Calculates an exponentially increasing value.
  // Deviation: calculates value from count and a constant interval, so we only need to save value
  // and count to restore state.
  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
  // A random "fuzz" to avoid waves of retries.
  // Deviation: randomFactor is required.
  var randomWait = Math.round(// A fraction of the backoff value to add/subtract.
  // Deviation: changes multiplication order to improve readability.
  RANDOM_FACTOR * currBaseValue * (// A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
  // if we add or subtract.
  Math.random() - 0.5) * 2);
  // Limits backoff to max to avoid effectively permanent backoff.
  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Provide English ordinal letters after a number
*/
function ordinal(i) ***REMOVED***
  if (!Number.isFinite(i)) ***REMOVED***
    return "" + i;
  }
  return i + indicator(i);
}
function indicator(i) ***REMOVED***
  i = Math.abs(i);
  var cent = i % 100;
  if (cent >= 10 && cent <= 20) ***REMOVED***
    return 'th';
  }
  var dec = i % 10;
  if (dec === 1) ***REMOVED***
    return 'st';
  }
  if (dec === 2) ***REMOVED***
    return 'nd';
  }
  if (dec === 3) ***REMOVED***
    return 'rd';
  }
  return 'th';
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function getModularInstance(service) ***REMOVED***
  if (service && service._delegate) ***REMOVED***
    return service._delegate;
  } else ***REMOVED***
    return service;
  }
}

},***REMOVED***"tslib":"4rd38","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) ***REMOVED***
"use strict";

exports.interopDefault = function (a) ***REMOVED***
  return a && a.__esModule ? a : ***REMOVED***
    default: a
  ***REMOVED***
***REMOVED***

exports.defineInteropFlag = function (a) ***REMOVED***
  Object.defineProperty(a, '__esModule', ***REMOVED***
    value: true
  });
***REMOVED***

exports.exportAll = function (source, dest) ***REMOVED***
  Object.keys(source).forEach(function (key) ***REMOVED***
    if (key === 'default' || key === '__esModule') ***REMOVED***
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) ***REMOVED***
      return;
    }

    Object.defineProperty(dest, key, ***REMOVED***
      enumerable: true,
      get: function () ***REMOVED***
        return source[key];
      }
    });
  });
  return dest;
***REMOVED***

exports.export = function (dest, destName, get) ***REMOVED***
  Object.defineProperty(dest, destName, ***REMOVED***
    enumerable: true,
    get: get
  });
***REMOVED***
},***REMOVED***}],"5qT0x":[function(require,module,exports) ***REMOVED***
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Component", function () ***REMOVED***
  return Component;
});
_parcelHelpers.export(exports, "ComponentContainer", function () ***REMOVED***
  return ComponentContainer;
});
_parcelHelpers.export(exports, "Provider", function () ***REMOVED***
  return Provider;
});
var _tslib = require('tslib');
var _firebaseUtil = require('@firebase/util');
/**
* Component for service name T, e.g. `auth`, `auth-internal`
*/
var Component = /** @class*/
(function () ***REMOVED***
  /**
  *
  * @param name The public service name, e.g. app, auth, firestore, database
  * @param instanceFactory Service factory responsible for creating the public interface
  * @param type whether the service provided by the component is public or private
  */
  function Component(name, instanceFactory, type) ***REMOVED***
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    /**
    * Properties to be added to the service namespace
    */
    this.serviceProps = ***REMOVED******REMOVED***
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  Component.prototype.setInstantiationMode = function (mode) ***REMOVED***
    this.instantiationMode = mode;
    return this;
  ***REMOVED***
  Component.prototype.setMultipleInstances = function (multipleInstances) ***REMOVED***
    this.multipleInstances = multipleInstances;
    return this;
  ***REMOVED***
  Component.prototype.setServiceProps = function (props) ***REMOVED***
    this.serviceProps = props;
    return this;
  ***REMOVED***
  Component.prototype.setInstanceCreatedCallback = function (callback) ***REMOVED***
    this.onInstanceCreated = callback;
    return this;
  ***REMOVED***
  return Component;
})();
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Provider for instance for service name T, e.g. 'auth', 'auth-internal'
* NameServiceMapping[T] is an alias for the type of the instance
*/
var Provider = /** @class*/
(function () ***REMOVED***
  function Provider(name, container) ***REMOVED***
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
  }
  /**
  * @param identifier A provider can provide mulitple instances of a service
  * if this.component.multipleInstances is true.
  */
  Provider.prototype.get = function (identifier) ***REMOVED***
    if (identifier === void 0) ***REMOVED***
      identifier = DEFAULT_ENTRY_NAME;
    }
    // if multipleInstances is not supported, use the default name
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) ***REMOVED***
      var deferred = new _firebaseUtil.Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) ***REMOVED***
        // initialize the service if it can be auto-initialized
        try ***REMOVED***
          var instance = this.getOrInitializeService(***REMOVED***
            instanceIdentifier: normalizedIdentifier
          });
          if (instance) ***REMOVED***
            deferred.resolve(instance);
          }
        } catch (e) ***REMOVED***}
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  ***REMOVED***
  Provider.prototype.getImmediate = function (options) ***REMOVED***
    var _a = _tslib.__assign(***REMOVED***
      identifier: DEFAULT_ENTRY_NAME,
      optional: false
    }, options), identifier = _a.identifier, optional = _a.optional;
    // if multipleInstances is not supported, use the default name
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) ***REMOVED***
      try ***REMOVED***
        return this.getOrInitializeService(***REMOVED***
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) ***REMOVED***
        if (optional) ***REMOVED***
          return null;
        } else ***REMOVED***
          throw e;
        }
      }
    } else ***REMOVED***
      // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
      if (optional) ***REMOVED***
        return null;
      } else ***REMOVED***
        throw Error("Service " + this.name + " is not available");
      }
    }
  ***REMOVED***
  Provider.prototype.getComponent = function () ***REMOVED***
    return this.component;
  ***REMOVED***
  Provider.prototype.setComponent = function (component) ***REMOVED***
    var e_1, _a;
    if (component.name !== this.name) ***REMOVED***
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }
    if (this.component) ***REMOVED***
      throw Error("Component for " + this.name + " has already been provided");
    }
    this.component = component;
    // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
    if (!this.shouldAutoInitialize()) ***REMOVED***
      return;
    }
    // if the service is eager, initialize the default instance
    if (isComponentEager(component)) ***REMOVED***
      try ***REMOVED***
        this.getOrInitializeService(***REMOVED***
          instanceIdentifier: DEFAULT_ENTRY_NAME
        });
      } catch (e) ***REMOVED***}
    }
    try ***REMOVED***
      // Create service instances for the pending promises and resolve them
      // NOTE: if this.multipleInstances is false, only the default instance will be created
      // and all promises with resolve with it regardless of the identifier.
      for (var _b = _tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) ***REMOVED***
        var _d = _tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try ***REMOVED***
          // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
          var instance = this.getOrInitializeService(***REMOVED***
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e) ***REMOVED***}
      }
    } catch (e_1_1) ***REMOVED***
      e_1 = ***REMOVED***
        error: e_1_1
      ***REMOVED***
    } finally ***REMOVED***
      try ***REMOVED***
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally ***REMOVED***
        if (e_1) throw e_1.error;
      }
    }
  ***REMOVED***
  Provider.prototype.clearInstance = function (identifier) ***REMOVED***
    if (identifier === void 0) ***REMOVED***
      identifier = DEFAULT_ENTRY_NAME;
    }
    this.instancesDeferred.delete(identifier);
    this.instances.delete(identifier);
  ***REMOVED***
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  Provider.prototype.delete = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var services;
      return _tslib.__generator(this, function (_a) ***REMOVED***
        switch (_a.label) ***REMOVED***
          case 0:
            services = Array.from(this.instances.values());
            return [4, /*yield*/
            Promise.all(_tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(services.filter(function (service) ***REMOVED***
              return ('INTERNAL' in service);
            }).// legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            map(function (service) ***REMOVED***
              return service.INTERNAL.delete();
            }))), _tslib.__read(services.filter(function (service) ***REMOVED***
              return ('_delete' in service);
            }).// modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            map(function (service) ***REMOVED***
              return service._delete();
            }))))];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  ***REMOVED***
  Provider.prototype.isComponentSet = function () ***REMOVED***
    return this.component != null;
  ***REMOVED***
  Provider.prototype.isInitialized = function (identifier) ***REMOVED***
    if (identifier === void 0) ***REMOVED***
      identifier = DEFAULT_ENTRY_NAME;
    }
    return this.instances.has(identifier);
  ***REMOVED***
  Provider.prototype.initialize = function (opts) ***REMOVED***
    var e_2, _a;
    if (opts === void 0) ***REMOVED***
      opts = ***REMOVED******REMOVED***
    }
    var _b = opts.instanceIdentifier, instanceIdentifier = _b === void 0 ? DEFAULT_ENTRY_NAME : _b, _c = opts.options, options = _c === void 0 ? ***REMOVED***} : _c;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) ***REMOVED***
      throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
    }
    if (!this.isComponentSet()) ***REMOVED***
      throw Error("Component " + this.name + " has not been registered yet");
    }
    var instance = this.getOrInitializeService(***REMOVED***
      instanceIdentifier: normalizedIdentifier,
      options: options
    });
    try ***REMOVED***
      // resolve any pending promise waiting for the service instance
      for (var _d = _tslib.__values(this.instancesDeferred.entries()), _e = _d.next(); !_e.done; _e = _d.next()) ***REMOVED***
        var _f = _tslib.__read(_e.value, 2), instanceIdentifier_1 = _f[0], instanceDeferred = _f[1];
        var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier_1);
        if (normalizedIdentifier === normalizedDeferredIdentifier) ***REMOVED***
          instanceDeferred.resolve(instance);
        }
      }
    } catch (e_2_1) ***REMOVED***
      e_2 = ***REMOVED***
        error: e_2_1
      ***REMOVED***
    } finally ***REMOVED***
      try ***REMOVED***
        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
      } finally ***REMOVED***
        if (e_2) throw e_2.error;
      }
    }
    return instance;
  ***REMOVED***
  Provider.prototype.getOrInitializeService = function (_a) ***REMOVED***
    var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? ***REMOVED***} : _b;
    var instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) ***REMOVED***
      instance = this.component.instanceFactory(this.container, ***REMOVED***
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options: options
      });
      this.instances.set(instanceIdentifier, instance);
      /**
      * Order is important
      * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
      * makes `isInitialized()` return true.
      */
      if (this.component.onInstanceCreated) ***REMOVED***
        try ***REMOVED***
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_c) ***REMOVED***}
      }
    }
    return instance || null;
  ***REMOVED***
  Provider.prototype.normalizeInstanceIdentifier = function (identifier) ***REMOVED***
    if (this.component) ***REMOVED***
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else ***REMOVED***
      return identifier;
    }
  ***REMOVED***
  Provider.prototype.shouldAutoInitialize = function () ***REMOVED***
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  ***REMOVED***
  return Provider;
})();
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) ***REMOVED***
  return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) ***REMOVED***
  return component.instantiationMode === "EAGER";
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
*/
var ComponentContainer = /** @class*/
(function () ***REMOVED***
  function ComponentContainer(name) ***REMOVED***
    this.name = name;
    this.providers = new Map();
  }
  /**
  *
  * @param component Component being added
  * @param overwrite When a component with the same name has already been registered,
  * if overwrite is true: overwrite the existing component with the new component and create a new
  * provider with the new component. It can be useful in tests where you want to use different mocks
  * for different tests.
  * if overwrite is false: throw an exception
  */
  ComponentContainer.prototype.addComponent = function (component) ***REMOVED***
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) ***REMOVED***
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }
    provider.setComponent(component);
  ***REMOVED***
  ComponentContainer.prototype.addOrOverwriteComponent = function (component) ***REMOVED***
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) ***REMOVED***
      // delete the existing provider from the container, so we can register the new component
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  ***REMOVED***
  /**
  * getProvider provides a type safe interface where it can only be called with a field name
  * present in NameServiceMapping interface.
  *
  * Firebase SDKs providing services should extend NameServiceMapping interface to register
  * themselves.
  */
  ComponentContainer.prototype.getProvider = function (name) ***REMOVED***
    if (this.providers.has(name)) ***REMOVED***
      return this.providers.get(name);
    }
    // create a Provider for a service that hasn't registered with Firebase
    var provider = new Provider(name, this);
    this.providers.set(name, provider);
    return provider;
  ***REMOVED***
  ComponentContainer.prototype.getProviders = function () ***REMOVED***
    return Array.from(this.providers.values());
  ***REMOVED***
  return ComponentContainer;
})();

},***REMOVED***"tslib":"4rd38","@firebase/util":"3bR6t","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5PuYX":[function(require,module,exports) ***REMOVED***
'use strict';

Object.defineProperty(exports, '__esModule', ***REMOVED*** value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() ***REMOVED***
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
(function (LogLevel) ***REMOVED***
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(exports.LogLevel || (exports.LogLevel = ***REMOVED***}));
var levelStringToEnum = ***REMOVED***
    'debug': exports.LogLevel.DEBUG,
    'verbose': exports.LogLevel.VERBOSE,
    'info': exports.LogLevel.INFO,
    'warn': exports.LogLevel.WARN,
    'error': exports.LogLevel.ERROR,
    'silent': exports.LogLevel.SILENT
***REMOVED***
/**
 * The default log level
 */
var defaultLogLevel = exports.LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = ***REMOVED***},
    _a[exports.LogLevel.DEBUG] = 'log',
    _a[exports.LogLevel.VERBOSE] = 'log',
    _a[exports.LogLevel.INFO] = 'info',
    _a[exports.LogLevel.WARN] = 'warn',
    _a[exports.LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) ***REMOVED***
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) ***REMOVED***
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) ***REMOVED***
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) ***REMOVED***
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else ***REMOVED***
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
***REMOVED***
var Logger = /** @class */ (function () ***REMOVED***
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) ***REMOVED***
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", ***REMOVED***
        get: function () ***REMOVED***
            return this._logLevel;
        },
        set: function (val) ***REMOVED***
            if (!(val in exports.LogLevel)) ***REMOVED***
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) ***REMOVED***
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    ***REMOVED***
    Object.defineProperty(Logger.prototype, "logHandler", ***REMOVED***
        get: function () ***REMOVED***
            return this._logHandler;
        },
        set: function (val) ***REMOVED***
            if (typeof val !== 'function') ***REMOVED***
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", ***REMOVED***
        get: function () ***REMOVED***
            return this._userLogHandler;
        },
        set: function (val) ***REMOVED***
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () ***REMOVED***
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) ***REMOVED***
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, exports.LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, exports.LogLevel.DEBUG], args));
    ***REMOVED***
    Logger.prototype.log = function () ***REMOVED***
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) ***REMOVED***
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, exports.LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, exports.LogLevel.VERBOSE], args));
    ***REMOVED***
    Logger.prototype.info = function () ***REMOVED***
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) ***REMOVED***
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, exports.LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, exports.LogLevel.INFO], args));
    ***REMOVED***
    Logger.prototype.warn = function () ***REMOVED***
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) ***REMOVED***
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, exports.LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, exports.LogLevel.WARN], args));
    ***REMOVED***
    Logger.prototype.error = function () ***REMOVED***
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) ***REMOVED***
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, exports.LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, exports.LogLevel.ERROR], args));
    ***REMOVED***
    return Logger;
}());
function setLogLevel(level) ***REMOVED***
    instances.forEach(function (inst) ***REMOVED***
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) ***REMOVED***
    var _loop_1 = function (instance) ***REMOVED***
        var customLogLevel = null;
        if (options && options.level) ***REMOVED***
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) ***REMOVED***
            instance.userLogHandler = null;
        }
        else ***REMOVED***
            instance.userLogHandler = function (instance, level) ***REMOVED***
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) ***REMOVED***
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) ***REMOVED***
                    if (arg == null) ***REMOVED***
                        return null;
                    }
                    else if (typeof arg === 'string') ***REMOVED***
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') ***REMOVED***
                        return arg.toString();
                    }
                    else if (arg instanceof Error) ***REMOVED***
                        return arg.message;
                    }
                    else ***REMOVED***
                        try ***REMOVED***
                            return JSON.stringify(arg);
                        }
                        catch (ignored) ***REMOVED***
                            return null;
                        }
                    }
                })
                    .filter(function (arg) ***REMOVED*** return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) ***REMOVED***
                    logCallback(***REMOVED***
                        level: exports.LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            ***REMOVED***
        }
    ***REMOVED***
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) ***REMOVED***
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}

exports.Logger = Logger;
exports.setLogLevel = setLogLevel;
exports.setUserLogHandler = setUserLogHandler;

},***REMOVED***}],"5Eq2v":[function(require,module,exports) ***REMOVED***
'use strict';

require('@firebase/firestore');


},***REMOVED***"@firebase/firestore":"6C1I5"}],"6C1I5":[function(require,module,exports) ***REMOVED***
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "registerFirestore", function () ***REMOVED***
  return L;
});
var _firebaseApp = require("@firebase/app");
var _firebaseAppDefault = _parcelHelpers.interopDefault(_firebaseApp);
require("@firebase/util");
require("@firebase/logger");
require("@firebase/webchannel-wrapper");
require("tslib");
var _prebuiltAc1908465fb4dac2Js = require("./prebuilt-ac190846-5fb4dac2.js");
var _firebaseComponent = require("@firebase/component");
var I = ***REMOVED***
  Firestore: _prebuiltAc1908465fb4dac2Js.$,
  GeoPoint: _prebuiltAc1908465fb4dac2Js.v,
  Timestamp: _prebuiltAc1908465fb4dac2Js.k,
  Blob: _prebuiltAc1908465fb4dac2Js.x,
  Transaction: _prebuiltAc1908465fb4dac2Js.B,
  WriteBatch: _prebuiltAc1908465fb4dac2Js.q,
  DocumentReference: _prebuiltAc1908465fb4dac2Js.Q,
  DocumentSnapshot: _prebuiltAc1908465fb4dac2Js.G,
  Query: _prebuiltAc1908465fb4dac2Js.H,
  QueryDocumentSnapshot: _prebuiltAc1908465fb4dac2Js.z,
  QuerySnapshot: _prebuiltAc1908465fb4dac2Js.Y,
  CollectionReference: _prebuiltAc1908465fb4dac2Js.X,
  FieldPath: _prebuiltAc1908465fb4dac2Js.t,
  FieldValue: _prebuiltAc1908465fb4dac2Js.e,
  setLogLevel: _prebuiltAc1908465fb4dac2Js.L,
  CACHE_SIZE_UNLIMITED: _prebuiltAc1908465fb4dac2Js._
***REMOVED***
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Registers the main Firestore build with the components framework.
* Persistence can be enabled via `firebase.firestore().enablePersistence()`.
*/
function L(e) ***REMOVED***
  (!/**
  * Configures Firestore as part of the Firebase SDK by calling registerService.
  *
  * @param firebase - The FirebaseNamespace to register Firestore with
  * @param firestoreFactory - A factory function that returns a new Firestore
  *    instance.
  */
  (function (e, r) ***REMOVED***
    e.INTERNAL.registerComponent(new _firebaseComponent.Component("firestore", function (e) ***REMOVED***
      var t = e.getProvider("app").getImmediate();
      return r(t, e.getProvider("auth-internal"));
    }, "PUBLIC").setServiceProps(Object.assign(***REMOVED***}, I)));
  })(e, function (e, s) ***REMOVED***
    return new _prebuiltAc1908465fb4dac2Js.$(e, new _prebuiltAc1908465fb4dac2Js.m(e, s), new _prebuiltAc1908465fb4dac2Js.O());
  }), e.registerVersion("@firebase/firestore", "2.2.4"));
}
L(_firebaseAppDefault.default);

},***REMOVED***"@firebase/app":"6IUA5","@firebase/util":"3bR6t","@firebase/logger":"5PuYX","@firebase/webchannel-wrapper":"71Sz5","tslib":"4rd38","./prebuilt-ac190846-5fb4dac2.js":"4Yeaj","@firebase/component":"5qT0x","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"71Sz5":[function(require,module,exports) ***REMOVED***
var global = arguments[3];
(function () ***REMOVED***
  /*
  
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  */
  var m;
  function aa(a) ***REMOVED***
    var b = 0;
    return function () ***REMOVED***
      return b < a.length ? ***REMOVED***
        done: !1,
        value: a[b++]
      } : ***REMOVED***
        done: !0
      ***REMOVED***
    ***REMOVED***
  }
  function p(a) ***REMOVED***
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : ***REMOVED***
      next: aa(a)
    ***REMOVED***
  }
  var ba = "function" == typeof Object.create ? Object.create : function (a) ***REMOVED***
    function b() ***REMOVED***}
    b.prototype = a;
    return new b();
  }, ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) ***REMOVED***
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a;
  ***REMOVED***
  function da(a) ***REMOVED***
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) ***REMOVED***
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ea = da(this);
  function q(a, b) ***REMOVED***
    if (b) a: ***REMOVED***
      var c = ea;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) ***REMOVED***
        var e = a[d];
        if (!((e in c))) break a;
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && ca(c, a, ***REMOVED***
        configurable: !0,
        writable: !0,
        value: b
      });
    }
  }
  var fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf; else ***REMOVED***
    var ha;
    a: ***REMOVED***
      var ia = ***REMOVED***
        Ja: !0
      }, ja = ***REMOVED******REMOVED***
      try ***REMOVED***
        ja.__proto__ = ia;
        ha = ja.Ja;
        break a;
      } catch (a) ***REMOVED***}
      ha = !1;
    }
    fa = ha ? function (a, b) ***REMOVED***
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var la = fa;
  q("Symbol", function (a) ***REMOVED***
    function b(e) ***REMOVED***
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c("jscomp_symbol_" + (e || "") + "_" + d++, e);
    }
    function c(e, f) ***REMOVED***
      this.a = e;
      ca(this, "description", ***REMOVED***
        configurable: !0,
        writable: !0,
        value: f
      });
    }
    if (a) return a;
    c.prototype.toString = function () ***REMOVED***
      return this.a;
    ***REMOVED***
    var d = 0;
    return b;
  });
  q("Symbol.iterator", function (a) ***REMOVED***
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (var b = ("Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array").split(" "), c = 0; c < b.length; c++) ***REMOVED***
      var d = ea[b[c]];
      "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, ***REMOVED***
        configurable: !0,
        writable: !0,
        value: function () ***REMOVED***
          return ma(aa(this));
        }
      });
    }
    return a;
  });
  function ma(a) ***REMOVED***
    a = ***REMOVED***
      next: a
    ***REMOVED***
    a[Symbol.iterator] = function () ***REMOVED***
      return this;
    ***REMOVED***
    return a;
  }
  function t(a, b) ***REMOVED***
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  q("WeakMap", function (a) ***REMOVED***
    function b(g) ***REMOVED***
      this.a = (h += Math.random() + 1).toString();
      if (g) ***REMOVED***
        g = p(g);
        for (var l; !(l = g.next()).done; ) (l = l.value, this.set(l[0], l[1]));
      }
    }
    function c() ***REMOVED***}
    function d(g) ***REMOVED***
      var l = typeof g;
      return "object" === l && null !== g || "function" === l;
    }
    function e(g) ***REMOVED***
      if (!t(g, k)) ***REMOVED***
        var l = new c();
        ca(g, k, ***REMOVED***
          value: l
        });
      }
    }
    function f(g) ***REMOVED***
      var l = Object[g];
      l && (Object[g] = function (n) ***REMOVED***
        if (n instanceof c) return n;
        Object.isExtensible(n) && e(n);
        return l(n);
      });
    }
    if ((function () ***REMOVED***
      if (!a || !Object.seal) return !1;
      try ***REMOVED***
        var g = Object.seal(***REMOVED***}), l = Object.seal(***REMOVED***}), n = new a([[g, 2], [l, 3]]);
        if (2 != n.get(g) || 3 != n.get(l)) return !1;
        n.delete(g);
        n.set(l, 4);
        return !n.has(g) && 4 == n.get(l);
      } catch (r) ***REMOVED***
        return !1;
      }
    })()) return a;
    var k = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function (g, l) ***REMOVED***
      if (!d(g)) throw Error("Invalid WeakMap key");
      e(g);
      if (!t(g, k)) throw Error("WeakMap key fail: " + g);
      g[k][this.a] = l;
      return this;
    ***REMOVED***
    b.prototype.get = function (g) ***REMOVED***
      return d(g) && t(g, k) ? g[k][this.a] : void 0;
    ***REMOVED***
    b.prototype.has = function (g) ***REMOVED***
      return d(g) && t(g, k) && t(g[k], this.a);
    ***REMOVED***
    b.prototype.delete = function (g) ***REMOVED***
      return d(g) && t(g, k) && t(g[k], this.a) ? delete g[k][this.a] : !1;
    ***REMOVED***
    return b;
  });
  q("Map", function (a) ***REMOVED***
    function b() ***REMOVED***
      var h = ***REMOVED******REMOVED***
      return h.O = h.next = h.head = h;
    }
    function c(h, g) ***REMOVED***
      var l = h.a;
      return ma(function () ***REMOVED***
        if (l) ***REMOVED***
          for (; l.head != h.a; ) l = l.O;
          for (; l.next != l.head; ) return (l = l.next, ***REMOVED***
            done: !1,
            value: g(l)
          });
          l = null;
        }
        return ***REMOVED***
          done: !0,
          value: void 0
        ***REMOVED***
      });
    }
    function d(h, g) ***REMOVED***
      var l = g && typeof g;
      "object" == l || "function" == l ? f.has(g) ? l = f.get(g) : (l = "" + ++k, f.set(g, l)) : l = "p_" + g;
      var n = h.b[l];
      if (n && t(h.b, l)) for (h = 0; h < n.length; h++) ***REMOVED***
        var r = n[h];
        if (g !== g && r.key !== r.key || g === r.key) return ***REMOVED***
          id: l,
          list: n,
          index: h,
          D: r
        ***REMOVED***
      }
      return ***REMOVED***
        id: l,
        list: n,
        index: -1,
        D: void 0
      ***REMOVED***
    }
    function e(h) ***REMOVED***
      this.b = ***REMOVED******REMOVED***
      this.a = b();
      this.size = 0;
      if (h) ***REMOVED***
        h = p(h);
        for (var g; !(g = h.next()).done; ) (g = g.value, this.set(g[0], g[1]));
      }
    }
    if ((function () ***REMOVED***
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try ***REMOVED***
        var h = Object.seal(***REMOVED***
          x: 4
        }), g = new a(p([[h, "s"]]));
        if ("s" != g.get(h) || 1 != g.size || g.get(***REMOVED***
          x: 4
        }) || g.set(***REMOVED***
          x: 4
        }, "t") != g || 2 != g.size) return !1;
        var l = g.entries(), n = l.next();
        if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
        n = l.next();
        return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0;
      } catch (r) ***REMOVED***
        return !1;
      }
    })()) return a;
    var f = new WeakMap();
    e.prototype.set = function (h, g) ***REMOVED***
      h = 0 === h ? 0 : h;
      var l = d(this, h);
      l.list || (l.list = this.b[l.id] = []);
      l.D ? l.D.value = g : (l.D = ***REMOVED***
        next: this.a,
        O: this.a.O,
        head: this.a,
        key: h,
        value: g
      }, l.list.push(l.D), this.a.O.next = l.D, this.a.O = l.D, this.size++);
      return this;
    ***REMOVED***
    e.prototype.delete = function (h) ***REMOVED***
      h = d(this, h);
      return h.D && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.b[h.id], h.D.O.next = h.D.next, h.D.next.O = h.D.O, h.D.head = null, this.size--, !0) : !1;
    ***REMOVED***
    e.prototype.clear = function () ***REMOVED***
      this.b = ***REMOVED******REMOVED***
      this.a = this.a.O = b();
      this.size = 0;
    ***REMOVED***
    e.prototype.has = function (h) ***REMOVED***
      return !!d(this, h).D;
    ***REMOVED***
    e.prototype.get = function (h) ***REMOVED***
      return (h = d(this, h).D) && h.value;
    ***REMOVED***
    e.prototype.entries = function () ***REMOVED***
      return c(this, function (h) ***REMOVED***
        return [h.key, h.value];
      });
    ***REMOVED***
    e.prototype.keys = function () ***REMOVED***
      return c(this, function (h) ***REMOVED***
        return h.key;
      });
    ***REMOVED***
    e.prototype.values = function () ***REMOVED***
      return c(this, function (h) ***REMOVED***
        return h.value;
      });
    ***REMOVED***
    e.prototype.forEach = function (h, g) ***REMOVED***
      for (var l = this.entries(), n; !(n = l.next()).done; ) (n = n.value, h.call(g, n[1], n[0], this));
    ***REMOVED***
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var k = 0;
    return e;
  });
  q("Set", function (a) ***REMOVED***
    function b(c) ***REMOVED***
      this.a = new Map();
      if (c) ***REMOVED***
        c = p(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.a.size;
    }
    if ((function () ***REMOVED***
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try ***REMOVED***
        var c = Object.seal(***REMOVED***
          x: 4
        }), d = new a(p([c]));
        if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add(***REMOVED***
          x: 4
        }) != d || 2 != d.size) return !1;
        var e = d.entries(), f = e.next();
        if (f.done || f.value[0] != c || f.value[1] != c) return !1;
        f = e.next();
        return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
      } catch (k) ***REMOVED***
        return !1;
      }
    })()) return a;
    b.prototype.add = function (c) ***REMOVED***
      c = 0 === c ? 0 : c;
      this.a.set(c, c);
      this.size = this.a.size;
      return this;
    ***REMOVED***
    b.prototype.delete = function (c) ***REMOVED***
      c = this.a.delete(c);
      this.size = this.a.size;
      return c;
    ***REMOVED***
    b.prototype.clear = function () ***REMOVED***
      this.a.clear();
      this.size = 0;
    ***REMOVED***
    b.prototype.has = function (c) ***REMOVED***
      return this.a.has(c);
    ***REMOVED***
    b.prototype.entries = function () ***REMOVED***
      return this.a.entries();
    ***REMOVED***
    b.prototype.values = function () ***REMOVED***
      return this.a.values();
    ***REMOVED***
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) ***REMOVED***
      var e = this;
      this.a.forEach(function (f) ***REMOVED***
        return c.call(d, f, f, e);
      });
    ***REMOVED***
    return b;
  });
  function na(a, b) ***REMOVED***
    a instanceof String && (a += "");
    var c = 0, d = !1, e = ***REMOVED***
      next: function () ***REMOVED***
        if (!d && c < a.length) ***REMOVED***
          var f = c++;
          return ***REMOVED***
            value: b(f, a[f]),
            done: !1
          ***REMOVED***
        }
        d = !0;
        return ***REMOVED***
          done: !0,
          value: void 0
        ***REMOVED***
      }
    ***REMOVED***
    e[Symbol.iterator] = function () ***REMOVED***
      return e;
    ***REMOVED***
    return e;
  }
  q("Array.prototype.values", function (a) ***REMOVED***
    return a ? a : function () ***REMOVED***
      return na(this, function (b, c) ***REMOVED***
        return c;
      });
    ***REMOVED***
  });
  var goog = goog || (***REMOVED***}), u = this || self;
  function oa() ***REMOVED***}
  function pa(a) ***REMOVED***
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return "array" == b || "object" == b && "number" == typeof a.length;
  }
  function v(a) ***REMOVED***
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
  }
  function qa(a) ***REMOVED***
    return Object.prototype.hasOwnProperty.call(a, ra) && a[ra] || (a[ra] = ++sa);
  }
  var ra = "closure_uid_" + (1E9 * Math.random() >>> 0), sa = 0;
  function ta(a, b, c) ***REMOVED***
    return a.call.apply(a.bind, arguments);
  }
  function ua(a, b, c) ***REMOVED***
    if (!a) throw Error();
    if (2 < arguments.length) ***REMOVED***
      var d = Array.prototype.slice.call(arguments, 2);
      return function () ***REMOVED***
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      ***REMOVED***
    }
    return function () ***REMOVED***
      return a.apply(b, arguments);
    ***REMOVED***
  }
  function w(a, b, c) ***REMOVED***
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w = ta : w = ua;
    return w.apply(null, arguments);
  }
  function va(a, b) ***REMOVED***
    var c = Array.prototype.slice.call(arguments, 1);
    return function () ***REMOVED***
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    ***REMOVED***
  }
  function x() ***REMOVED***
    return Date.now();
  }
  function y(a, b) ***REMOVED***
    function c() ***REMOVED***}
    c.prototype = b.prototype;
    a.W = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Nb = function (d, e, f) ***REMOVED***
      for (var k = Array(arguments.length - 2), h = 2; h < arguments.length; h++) k[h - 2] = arguments[h];
      return b.prototype[e].apply(d, k);
    ***REMOVED***
  }
  ;
  function z() ***REMOVED***
    0 != wa && (xa[qa(this)] = this);
    this.j = this.j;
    this.i = this.i;
  }
  var wa = 0, xa = ***REMOVED******REMOVED***
  z.prototype.j = !1;
  z.prototype.la = function () ***REMOVED***
    if (!this.j && (this.j = !0, this.H(), 0 != wa)) ***REMOVED***
      var a = qa(this);
      if (0 != wa && this.i && 0 < this.i.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
      delete xa[a];
    }
  ***REMOVED***
  z.prototype.H = function () ***REMOVED***
    if (this.i) for (; this.i.length; ) this.i.shift()();
  ***REMOVED***
  var ya = Array.prototype.indexOf ? function (a, b) ***REMOVED***
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) ***REMOVED***
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if ((c in a) && a[c] === b) return c;
    return -1;
  }, za = Array.prototype.forEach ? function (a, b, c) ***REMOVED***
    Array.prototype.forEach.call(a, b, c);
  } : function (a, b, c) ***REMOVED***
    for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) (f in e) && b.call(c, e[f], f, a);
  ***REMOVED***
  function Aa(a) ***REMOVED***
    a: ***REMOVED***
      var b = Ba;
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if ((e in d) && b.call(void 0, d[e], e, a)) ***REMOVED***
        b = e;
        break a;
      }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Ca(a) ***REMOVED***
    return Array.prototype.concat.apply([], arguments);
  }
  function Fa(a) ***REMOVED***
    var b = a.length;
    if (0 < b) ***REMOVED***
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  ;
  function Ga(a) ***REMOVED***
    return (/^[\s\xa0]*$/).test(a);
  }
  var Ha = String.prototype.trim ? function (a) ***REMOVED***
    return a.trim();
  } : function (a) ***REMOVED***
    return (/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/).exec(a)[1];
  ***REMOVED***
  function A(a, b) ***REMOVED***
    return -1 != a.indexOf(b);
  }
  function Ia(a, b) ***REMOVED***
    return a < b ? -1 : a > b ? 1 : 0;
  }
  ;
  var B;
  a: ***REMOVED***
    var Ja = u.navigator;
    if (Ja) ***REMOVED***
      var Ka = Ja.userAgent;
      if (Ka) ***REMOVED***
        B = Ka;
        break a;
      }
    }
    B = "";
  }
  ;
  function La(a, b, c) ***REMOVED***
    for (var d in a) b.call(c, a[d], d, a);
  }
  function Ma(a) ***REMOVED***
    var b = ***REMOVED***}, c;
    for (c in a) b[c] = a[c];
    return b;
  }
  var Na = ("constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf").split(" ");
  function Oa(a, b) ***REMOVED***
    for (var c, d, e = 1; e < arguments.length; e++) ***REMOVED***
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Na.length; f++) (c = Na[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]));
    }
  }
  ;
  function Pa(a) ***REMOVED***
    Pa[" "](a);
    return a;
  }
  Pa[" "] = oa;
  function Qa(a, b) ***REMOVED***
    var c = Ra;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
  }
  ;
  var Sa = A(B, "Opera"), C = A(B, "Trident") || A(B, "MSIE"), Ta = A(B, "Edge"), Ua = Ta || C, Va = A(B, "Gecko") && !(A(B.toLowerCase(), "webkit") && !A(B, "Edge")) && !(A(B, "Trident") || A(B, "MSIE")) && !A(B, "Edge"), Wa = A(B.toLowerCase(), "webkit") && !A(B, "Edge");
  function Xa() ***REMOVED***
    var a = u.document;
    return a ? a.documentMode : void 0;
  }
  var Ya;
  a: ***REMOVED***
    var Za = "", $a = (function () ***REMOVED***
      var a = B;
      if (Va) return (/rv:([^\);]+)(\)|;)/).exec(a);
      if (Ta) return (/Edge\/([\d\.]+)/).exec(a);
      if (C) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/).exec(a);
      if (Wa) return (/WebKit\/(\S+)/).exec(a);
      if (Sa) return (/(?:Version)[ \/]?(\S+)/).exec(a);
    })();
    $a && (Za = $a ? $a[1] : "");
    if (C) ***REMOVED***
      var ab = Xa();
      if (null != ab && ab > parseFloat(Za)) ***REMOVED***
        Ya = String(ab);
        break a;
      }
    }
    Ya = Za;
  }
  var Ra = ***REMOVED******REMOVED***
  function bb(a) ***REMOVED***
    return Qa(a, function () ***REMOVED***
      for (var b = 0, c = Ha(String(Ya)).split("."), d = Ha(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) ***REMOVED***
        var k = c[f] || "", h = d[f] || "";
        do ***REMOVED***
          k = (/(\d*)(\D*)(.*)/).exec(k) || ["", "", "", ""];
          h = (/(\d*)(\D*)(.*)/).exec(h) || ["", "", "", ""];
          if (0 == k[0].length && 0 == h[0].length) break;
          b = Ia(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ia(0 == k[2].length, 0 == h[2].length) || Ia(k[2], h[2]);
          k = k[3];
          h = h[3];
        } while (0 == b);
      }
      return 0 <= b;
    });
  }
  var cb;
  if (u.document && C) ***REMOVED***
    var db = Xa();
    cb = db ? db : parseInt(Ya, 10) || void 0;
  } else cb = void 0;
  var eb = cb;
  var fb = !C || 9 <= Number(eb), gb = C && !bb("9"), hb = (function () ***REMOVED***
    if (!u.addEventListener || !Object.defineProperty) return !1;
    var a = !1, b = Object.defineProperty(***REMOVED***}, "passive", ***REMOVED***
      get: function () ***REMOVED***
        a = !0;
      }
    });
    try ***REMOVED***
      (u.addEventListener("test", oa, b), u.removeEventListener("test", oa, b));
    } catch (c) ***REMOVED***}
    return a;
  })();
  function D(a, b) ***REMOVED***
    this.type = a;
    this.a = this.target = b;
    this.defaultPrevented = !1;
  }
  D.prototype.b = function () ***REMOVED***
    this.defaultPrevented = !0;
  ***REMOVED***
  function E(a, b) ***REMOVED***
    D.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) ***REMOVED***
      var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.a = b;
      if (b = a.relatedTarget) ***REMOVED***
        if (Va) ***REMOVED***
          a: ***REMOVED***
            try ***REMOVED***
              Pa(b.nodeName);
              var e = !0;
              break a;
            } catch (f) ***REMOVED***}
            e = !1;
          }
          e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : ib[a.pointerType] || "";
      this.c = a;
      a.defaultPrevented && this.b();
    }
  }
  y(E, D);
  var ib = ***REMOVED***
    2: "touch",
    3: "pen",
    4: "mouse"
  ***REMOVED***
  E.prototype.b = function () ***REMOVED***
    E.W.b.call(this);
    var a = this.c;
    if (a.preventDefault) a.preventDefault(); else if ((a.returnValue = !1, gb)) try ***REMOVED***
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
    } catch (b) ***REMOVED***}
  ***REMOVED***
  var F = "closure_listenable_" + (1E6 * Math.random() | 0), jb = 0;
  function kb(a, b, c, d, e) ***REMOVED***
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.ea = e;
    this.key = ++jb;
    this.$ = this.aa = !1;
  }
  function lb(a) ***REMOVED***
    a.$ = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.ea = null;
  }
  ;
  function mb(a) ***REMOVED***
    this.src = a;
    this.a = ***REMOVED******REMOVED***
    this.b = 0;
  }
  mb.prototype.add = function (a, b, c, d, e) ***REMOVED***
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var k = nb(a, b, d, e);
    -1 < k ? (b = a[k], c || (b.aa = !1)) : (b = new kb(b, this.src, f, !!d, e), b.aa = c, a.push(b));
    return b;
  ***REMOVED***
  function ob(a, b) ***REMOVED***
    var c = b.type;
    if ((c in a.a)) ***REMOVED***
      var d = a.a[c], e = ya(d, b), f;
      (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
      f && (lb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
    }
  }
  function nb(a, b, c, d) ***REMOVED***
    for (var e = 0; e < a.length; ++e) ***REMOVED***
      var f = a[e];
      if (!f.$ && f.listener == b && f.capture == !!c && f.ea == d) return e;
    }
    return -1;
  }
  ;
  var pb = "closure_lm_" + (1E6 * Math.random() | 0), qb = ***REMOVED***}, rb = 0;
  function sb(a, b, c, d, e) ***REMOVED***
    if (d && d.once) return tb(a, b, c, d, e);
    if (Array.isArray(b)) ***REMOVED***
      for (var f = 0; f < b.length; f++) sb(a, b[f], c, d, e);
      return null;
    }
    c = ub(c);
    return a && a[F] ? a.xa(b, c, v(d) ? !!d.capture : !!d, e) : vb(a, b, c, !1, d, e);
  }
  function vb(a, b, c, d, e, f) ***REMOVED***
    if (!b) throw Error("Invalid event type");
    var k = v(e) ? !!e.capture : !!e;
    if (k && !fb) return null;
    var h = wb(a);
    h || (a[pb] = h = new mb(a));
    c = h.add(b, c, d, k, f);
    if (c.proxy) return c;
    d = xb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) (hb || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e)); else if (a.attachEvent) a.attachEvent(yb(b.toString()), d); else if (a.addListener && a.removeListener) a.addListener(d); else throw Error("addEventListener and attachEvent are unavailable.");
    rb++;
    return c;
  }
  function xb() ***REMOVED***
    var a = Ab, b = fb ? function (c) ***REMOVED***
      return a.call(b.src, b.listener, c);
    } : function (c) ***REMOVED***
      c = a.call(b.src, b.listener, c);
      if (!c) return c;
    ***REMOVED***
    return b;
  }
  function tb(a, b, c, d, e) ***REMOVED***
    if (Array.isArray(b)) ***REMOVED***
      for (var f = 0; f < b.length; f++) tb(a, b[f], c, d, e);
      return null;
    }
    c = ub(c);
    return a && a[F] ? a.ya(b, c, v(d) ? !!d.capture : !!d, e) : vb(a, b, c, !0, d, e);
  }
  function Bb(a, b, c, d, e) ***REMOVED***
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Bb(a, b[f], c, d, e); else (d = v(d) ? !!d.capture : !!d, c = ub(c), a && a[F]) ? (a = a.c, b = String(b).toString(), (b in a.a) && (f = a.a[b], c = nb(f, c, d, e), -1 < c && (lb(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = wb(a)) && (b = a.a[b.toString()], a = -1, b && (a = nb(b, c, d, e)), (c = -1 < a ? b[a] : null) && Cb(c));
  }
  function Cb(a) ***REMOVED***
    if ("number" !== typeof a && a && !a.$) ***REMOVED***
      var b = a.src;
      if (b && b[F]) ob(b.c, a); else ***REMOVED***
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(yb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        rb--;
        (c = wb(b)) ? (ob(c, a), 0 == c.b && (c.src = null, b[pb] = null)) : lb(a);
      }
    }
  }
  function yb(a) ***REMOVED***
    return (a in qb) ? qb[a] : qb[a] = "on" + a;
  }
  function Db(a, b) ***REMOVED***
    var c = a.listener, d = a.ea || a.src;
    a.aa && Cb(a);
    return c.call(d, b);
  }
  function Ab(a, b) ***REMOVED***
    if (a.$) return !0;
    if (!fb) ***REMOVED***
      if (!b) a: ***REMOVED***
        b = ["window", "event"];
        for (var c = u, d = 0; d < b.length; d++) if ((c = c[b[d]], null == c)) ***REMOVED***
          b = null;
          break a;
        }
        b = c;
      }
      b = new E(b, this);
      return Db(a, b);
    }
    return Db(a, new E(b, this));
  }
  function wb(a) ***REMOVED***
    a = a[pb];
    return a instanceof mb ? a : null;
  }
  var Eb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
  function ub(a) ***REMOVED***
    if ("function" === typeof a) return a;
    a[Eb] || (a[Eb] = function (b) ***REMOVED***
      return a.handleEvent(b);
    });
    return a[Eb];
  }
  ;
  function G() ***REMOVED***
    z.call(this);
    this.c = new mb(this);
    this.K = this;
    this.C = null;
  }
  y(G, z);
  G.prototype[F] = !0;
  m = G.prototype;
  m.addEventListener = function (a, b, c, d) ***REMOVED***
    sb(this, a, b, c, d);
  ***REMOVED***
  m.removeEventListener = function (a, b, c, d) ***REMOVED***
    Bb(this, a, b, c, d);
  ***REMOVED***
  function H(a, b) ***REMOVED***
    var c, d = a.C;
    if (d) for (c = []; d; d = d.C) c.push(d);
    a = a.K;
    d = b.type || b;
    if ("string" === typeof b) b = new D(b, a); else if (b instanceof D) b.target = b.target || a; else ***REMOVED***
      var e = b;
      b = new D(d, a);
      Oa(b, e);
    }
    e = !0;
    if (c) for (var f = c.length - 1; 0 <= f; f--) ***REMOVED***
      var k = b.a = c[f];
      e = Fb(k, d, !0, b) && e;
    }
    k = b.a = a;
    e = Fb(k, d, !0, b) && e;
    e = Fb(k, d, !1, b) && e;
    if (c) for (f = 0; f < c.length; f++) (k = b.a = c[f], e = Fb(k, d, !1, b) && e);
  }
  m.H = function () ***REMOVED***
    G.W.H.call(this);
    if (this.c) ***REMOVED***
      var a = this.c, b = 0, c;
      for (c in a.a) ***REMOVED***
        for (var d = a.a[c], e = 0; e < d.length; e++) (++b, lb(d[e]));
        delete a.a[c];
        a.b--;
      }
    }
    this.C = null;
  ***REMOVED***
  m.xa = function (a, b, c, d) ***REMOVED***
    return this.c.add(String(a), b, !1, c, d);
  ***REMOVED***
  m.ya = function (a, b, c, d) ***REMOVED***
    return this.c.add(String(a), b, !0, c, d);
  ***REMOVED***
  function Fb(a, b, c, d) ***REMOVED***
    b = a.c.a[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) ***REMOVED***
      var k = b[f];
      if (k && !k.$ && k.capture == c) ***REMOVED***
        var h = k.listener, g = k.ea || k.src;
        k.aa && ob(a.c, k);
        e = !1 !== h.call(g, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  ;
  var Gb = u.JSON.stringify;
  function Hb(a, b) ***REMOVED***
    this.c = a;
    this.f = b;
    this.b = 0;
    this.a = null;
  }
  Hb.prototype.get = function () ***REMOVED***
    if (0 < this.b) ***REMOVED***
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null;
    } else a = this.c();
    return a;
  ***REMOVED***
  function Ib() ***REMOVED***
    this.b = this.a = null;
  }
  var Kb = new Hb(function () ***REMOVED***
    return new Jb();
  }, function (a) ***REMOVED***
    a.reset();
  });
  Ib.prototype.add = function (a, b) ***REMOVED***
    var c = Kb.get();
    c.set(a, b);
    this.b ? this.b.next = c : this.a = c;
    this.b = c;
  ***REMOVED***
  function Lb() ***REMOVED***
    var a = Mb, b = null;
    a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
    return b;
  }
  function Jb() ***REMOVED***
    this.next = this.b = this.a = null;
  }
  Jb.prototype.set = function (a, b) ***REMOVED***
    this.a = a;
    this.b = b;
    this.next = null;
  ***REMOVED***
  Jb.prototype.reset = function () ***REMOVED***
    this.next = this.b = this.a = null;
  ***REMOVED***
  function Nb(a) ***REMOVED***
    u.setTimeout(function () ***REMOVED***
      throw a;
    }, 0);
  }
  ;
  function Ob(a, b) ***REMOVED***
    Pb || Qb();
    Rb || (Pb(), Rb = !0);
    Mb.add(a, b);
  }
  var Pb;
  function Qb() ***REMOVED***
    var a = u.Promise.resolve(void 0);
    Pb = function () ***REMOVED***
      a.then(Sb);
    ***REMOVED***
  }
  var Rb = !1, Mb = new Ib();
  function Sb() ***REMOVED***
    for (var a; a = Lb(); ) ***REMOVED***
      try ***REMOVED***
        a.a.call(a.b);
      } catch (c) ***REMOVED***
        Nb(c);
      }
      var b = Kb;
      b.f(a);
      100 > b.b && (b.b++, a.next = b.a, b.a = a);
    }
    Rb = !1;
  }
  ;
  function Tb(a, b) ***REMOVED***
    G.call(this);
    this.b = a || 1;
    this.a = b || u;
    this.f = w(this.bb, this);
    this.g = x();
  }
  y(Tb, G);
  m = Tb.prototype;
  m.ca = !1;
  m.N = null;
  m.bb = function () ***REMOVED***
    if (this.ca) ***REMOVED***
      var a = x() - this.g;
      0 < a && a < .8 * this.b ? this.N = this.a.setTimeout(this.f, this.b - a) : (this.N && (this.a.clearTimeout(this.N), this.N = null), H(this, "tick"), this.ca && (Ub(this), this.start()));
    }
  ***REMOVED***
  m.start = function () ***REMOVED***
    this.ca = !0;
    this.N || (this.N = this.a.setTimeout(this.f, this.b), this.g = x());
  ***REMOVED***
  function Ub(a) ***REMOVED***
    a.ca = !1;
    a.N && (a.a.clearTimeout(a.N), a.N = null);
  }
  m.H = function () ***REMOVED***
    Tb.W.H.call(this);
    Ub(this);
    delete this.a;
  ***REMOVED***
  function Vb(a, b, c) ***REMOVED***
    if ("function" === typeof a) c && (a = w(a, c)); else if (a && "function" == typeof a.handleEvent) a = w(a.handleEvent, a); else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : u.setTimeout(a, b || 0);
  }
  ;
  function I(a, b, c) ***REMOVED***
    z.call(this);
    this.g = null != c ? a.bind(c) : a;
    this.h = b;
    this.b = null;
    this.c = !1;
    this.a = null;
  }
  I.prototype = ba(z.prototype);
  I.prototype.constructor = I;
  if (la) la(I, z); else for (var J in z) if ("prototype" != J) if (Object.defineProperties) ***REMOVED***
    var Wb = Object.getOwnPropertyDescriptor(z, J);
    Wb && Object.defineProperty(I, J, Wb);
  } else I[J] = z[J];
  I.W = z.prototype;
  I.prototype.f = function (a) ***REMOVED***
    this.b = arguments;
    this.a ? this.c = !0 : Xb(this);
  ***REMOVED***
  I.prototype.H = function () ***REMOVED***
    z.prototype.H.call(this);
    this.a && (u.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null);
  ***REMOVED***
  function Xb(a) ***REMOVED***
    a.a = Vb(function () ***REMOVED***
      a.a = null;
      a.c && (a.c = !1, Xb(a));
    }, a.h);
    var b = a.b;
    a.b = null;
    a.g.apply(null, b);
  }
  ;
  function Yb(a) ***REMOVED***
    z.call(this);
    this.b = a;
    this.a = ***REMOVED******REMOVED***
  }
  y(Yb, z);
  var Zb = [];
  function $b(a, b, c, d) ***REMOVED***
    Array.isArray(c) || (c && (Zb[0] = c.toString()), c = Zb);
    for (var e = 0; e < c.length; e++) ***REMOVED***
      var f = sb(b, c[e], d || a.handleEvent, !1, a.b || a);
      if (!f) break;
      a.a[f.key] = f;
    }
  }
  function ac(a) ***REMOVED***
    La(a.a, function (b, c) ***REMOVED***
      this.a.hasOwnProperty(c) && Cb(b);
    }, a);
    a.a = ***REMOVED******REMOVED***
  }
  Yb.prototype.H = function () ***REMOVED***
    Yb.W.H.call(this);
    ac(this);
  ***REMOVED***
  Yb.prototype.handleEvent = function () ***REMOVED***
    throw Error("EventHandler.handleEvent not implemented");
  ***REMOVED***
  function bc() ***REMOVED***
    this.a = !0;
  }
  function cc(a, b, c, d, e, f) ***REMOVED***
    a.info(function () ***REMOVED***
      if (a.a) if (f) ***REMOVED***
        var k = "";
        for (var h = f.split("&"), g = 0; g < h.length; g++) ***REMOVED***
          var l = h[g].split("=");
          if (1 < l.length) ***REMOVED***
            var n = l[0];
            l = l[1];
            var r = n.split("_");
            k = 2 <= r.length && "type" == r[1] ? k + (n + "=" + l + "&") : k + (n + "=redacted&");
          }
        }
      } else k = null; else k = f;
      return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + k;
    });
  }
  function dc(a, b, c, d, e, f, k) ***REMOVED***
    a.info(function () ***REMOVED***
      return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + k;
    });
  }
  function K(a, b, c, d) ***REMOVED***
    a.info(function () ***REMOVED***
      return "XMLHTTP TEXT (" + b + "): " + ec(a, c) + (d ? " " + d : "");
    });
  }
  function fc(a, b) ***REMOVED***
    a.info(function () ***REMOVED***
      return "TIMEOUT: " + b;
    });
  }
  bc.prototype.info = function () ***REMOVED******REMOVED***
  function ec(a, b) ***REMOVED***
    if (!a.a) return b;
    if (!b) return null;
    try ***REMOVED***
      var c = JSON.parse(b);
      if (c) for (a = 0; a < c.length; a++) if (Array.isArray(c[a])) ***REMOVED***
        var d = c[a];
        if (!(2 > d.length)) ***REMOVED***
          var e = d[1];
          if (Array.isArray(e) && !(1 > e.length)) ***REMOVED***
            var f = e[0];
            if ("noop" != f && "stop" != f && "close" != f) for (var k = 1; k < e.length; k++) e[k] = "";
          }
        }
      }
      return Gb(c);
    } catch (h) ***REMOVED***
      return b;
    }
  }
  ;
  var L = ***REMOVED***}, gc = null;
  function hc() ***REMOVED***
    return gc = gc || new G();
  }
  L.Ha = "serverreachability";
  function ic(a) ***REMOVED***
    D.call(this, L.Ha, a);
  }
  y(ic, D);
  function jc(a) ***REMOVED***
    var b = hc();
    H(b, new ic(b, a));
  }
  L.STAT_EVENT = "statevent";
  function kc(a, b) ***REMOVED***
    D.call(this, L.STAT_EVENT, a);
    this.stat = b;
  }
  y(kc, D);
  function M(a) ***REMOVED***
    var b = hc();
    H(b, new kc(b, a));
  }
  L.Ia = "timingevent";
  function lc(a) ***REMOVED***
    D.call(this, L.Ia, a);
  }
  y(lc, D);
  function mc(a, b) ***REMOVED***
    if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
    return u.setTimeout(function () ***REMOVED***
      a();
    }, b);
  }
  ;
  var nc = ***REMOVED***
    NO_ERROR: 0,
    cb: 1,
    qb: 2,
    pb: 3,
    kb: 4,
    ob: 5,
    rb: 6,
    Fa: 7,
    TIMEOUT: 8,
    ub: 9
  ***REMOVED***
  var oc = ***REMOVED***
    ib: "complete",
    Eb: "success",
    Ga: "error",
    Fa: "abort",
    wb: "ready",
    xb: "readystatechange",
    TIMEOUT: "timeout",
    sb: "incrementaldata",
    vb: "progress",
    lb: "downloadprogress",
    Mb: "uploadprogress"
  ***REMOVED***
  function pc() ***REMOVED***}
  pc.prototype.a = null;
  function qc(a) ***REMOVED***
    var b;
    (b = a.a) || (b = a.a = ***REMOVED***});
    return b;
  }
  ;
  function rc() ***REMOVED***}
  var sc = ***REMOVED***
    OPEN: "a",
    hb: "b",
    Ga: "c",
    tb: "d"
  ***REMOVED***
  function tc() ***REMOVED***
    D.call(this, "d");
  }
  y(tc, D);
  function uc() ***REMOVED***
    D.call(this, "c");
  }
  y(uc, D);
  var vc;
  function wc() ***REMOVED***}
  y(wc, pc);
  vc = new wc();
  function xc(a, b, c, d) ***REMOVED***
    this.g = a;
    this.c = b;
    this.f = c;
    this.U = d || 1;
    this.K = new Yb(this);
    this.S = yc;
    a = Ua ? 125 : void 0;
    this.T = new Tb(a);
    this.B = null;
    this.b = !1;
    this.j = this.l = this.i = this.I = this.u = this.V = this.o = null;
    this.s = [];
    this.a = null;
    this.F = 0;
    this.h = this.m = null;
    this.P = -1;
    this.v = !1;
    this.R = 0;
    this.G = null;
    this.Y = this.C = this.X = this.J = !1;
  }
  var yc = 45E3, zc = ***REMOVED***}, Ac = ***REMOVED******REMOVED***
  m = xc.prototype;
  m.setTimeout = function (a) ***REMOVED***
    this.S = a;
  ***REMOVED***
  function Bc(a, b, c) ***REMOVED***
    a.I = 1;
    a.i = Cc(N(b));
    a.j = c;
    a.J = !0;
    Dc(a, null);
  }
  function Dc(a, b) ***REMOVED***
    a.u = x();
    Ec(a);
    a.l = N(a.i);
    var c = a.l, d = a.U;
    Array.isArray(d) || (d = [String(d)]);
    Fc(c.b, "t", d);
    a.F = 0;
    a.a = Gc(a.g, a.g.C ? b : null);
    0 < a.R && (a.G = new I(w(a.Ea, a, a.a), a.R));
    $b(a.K, a.a, "readystatechange", a.$a);
    b = a.B ? Ma(a.B) : ***REMOVED******REMOVED***
    a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.da(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.da(a.l, a.m, null, b));
    jc(1);
    cc(a.c, a.m, a.l, a.f, a.U, a.j);
  }
  m.$a = function (a) ***REMOVED***
    a = a.target;
    var b = this.G;
    b && 3 == O(a) ? b.f() : this.Ea(a);
  ***REMOVED***
  m.Ea = function (a) ***REMOVED***
    try ***REMOVED***
      if (a == this.a) a: ***REMOVED***
        var b = O(this.a), c = this.a.wa(), d = this.a.Z();
        if (!(3 > b || 3 == b && !Ua && !this.a.ba())) ***REMOVED***
          this.v || 4 != b || 7 == c || (8 == c || 0 >= d ? jc(3) : jc(2));
          Hc(this);
          var e = this.a.Z();
          this.P = e;
          var f = this.a.ba();
          this.b = 200 == e;
          dc(this.c, this.m, this.l, this.f, this.U, b, e);
          if (this.b) ***REMOVED***
            if (this.X && !this.C) ***REMOVED***
              b: ***REMOVED***
                if (this.a) ***REMOVED***
                  var k, h = this.a;
                  if ((k = h.a ? h.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !Ga(k)) ***REMOVED***
                    var g = k;
                    break b;
                  }
                }
                g = null;
              }
              if (g) (K(this.c, this.f, g, "Initial handshake response via X-HTTP-Initial-Response"), this.C = !0, Jc(this, g)); else ***REMOVED***
                this.b = !1;
                this.h = 3;
                M(12);
                P(this);
                Kc(this);
                break a;
              }
            }
            this.J ? (Lc(this, b, f), Ua && this.b && 3 == b && ($b(this.K, this.T, "tick", this.Za), this.T.start())) : (K(this.c, this.f, f, null), Jc(this, f));
            4 == b && P(this);
            this.b && !this.v && (4 == b ? Nc(this.g, this) : (this.b = !1, Ec(this)));
          } else (400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, M(12)) : (this.h = 0, M(13)), P(this), Kc(this));
        }
      }
    } catch (l) ***REMOVED***} finally ***REMOVED***}
  ***REMOVED***
  function Lc(a, b, c) ***REMOVED***
    for (var d = !0; !a.v && a.F < c.length; ) ***REMOVED***
      var e = Oc(a, c);
      if (e == Ac) ***REMOVED***
        4 == b && (a.h = 4, M(14), d = !1);
        K(a.c, a.f, null, "[Incomplete Response]");
        break;
      } else if (e == zc) ***REMOVED***
        a.h = 4;
        M(15);
        K(a.c, a.f, c, "[Invalid Chunk]");
        d = !1;
        break;
      } else (K(a.c, a.f, e, null), Jc(a, e));
    }
    4 == b && 0 == c.length && (a.h = 1, M(16), d = !1);
    a.b = a.b && d;
    d ? 0 < c.length && !a.Y && (a.Y = !0, b = a.g, b.a == a && b.X && !b.G && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), Pc(b), b.G = !0, M(11))) : (K(a.c, a.f, c, "[Invalid Chunked Response]"), P(a), Kc(a));
  }
  m.Za = function () ***REMOVED***
    if (this.a) ***REMOVED***
      var a = O(this.a), b = this.a.ba();
      this.F < b.length && (Hc(this), Lc(this, a, b), this.b && 4 != a && Ec(this));
    }
  ***REMOVED***
  function Oc(a, b) ***REMOVED***
    var c = a.F, d = b.indexOf("\n", c);
    if (-1 == d) return Ac;
    c = Number(b.substring(c, d));
    if (isNaN(c)) return zc;
    d += 1;
    if (d + c > b.length) return Ac;
    b = b.substr(d, c);
    a.F = d + c;
    return b;
  }
  m.cancel = function () ***REMOVED***
    this.v = !0;
    P(this);
  ***REMOVED***
  function Ec(a) ***REMOVED***
    a.V = x() + a.S;
    Qc(a, a.S);
  }
  function Qc(a, b) ***REMOVED***
    if (null != a.o) throw Error("WatchDog timer not null");
    a.o = mc(w(a.Ya, a), b);
  }
  function Hc(a) ***REMOVED***
    a.o && (u.clearTimeout(a.o), a.o = null);
  }
  m.Ya = function () ***REMOVED***
    this.o = null;
    var a = x();
    0 <= a - this.V ? (fc(this.c, this.l), 2 != this.I && (jc(3), M(17)), P(this), this.h = 2, Kc(this)) : Qc(this, this.V - a);
  ***REMOVED***
  function Kc(a) ***REMOVED***
    0 == a.g.A || a.v || Nc(a.g, a);
  }
  function P(a) ***REMOVED***
    Hc(a);
    var b = a.G;
    b && "function" == typeof b.la && b.la();
    a.G = null;
    Ub(a.T);
    ac(a.K);
    a.a && (b = a.a, a.a = null, b.abort(), b.la());
  }
  function Jc(a, b) ***REMOVED***
    try ***REMOVED***
      var c = a.g;
      if (0 != c.A && (c.a == a || Rc(c.b, a))) if ((c.J = a.P, !a.C && Rc(c.b, a) && 3 == c.A)) ***REMOVED***
        try ***REMOVED***
          var d = c.ra.a.parse(b);
        } catch (Ic) ***REMOVED***
          d = null;
        }
        if (Array.isArray(d) && 3 == d.length) ***REMOVED***
          var e = d;
          if (0 == e[0]) a: ***REMOVED***
            if (!c.j) ***REMOVED***
              if (c.a) if (c.a.u + 3E3 < a.u) (Sc(c), Tc(c)); else break a;
              Uc(c);
              M(18);
            }
          } else (c.qa = e[1], 0 < c.qa - c.S && 37500 > e[2] && c.I && 0 == c.o && !c.m && (c.m = mc(w(c.Va, c), 6E3)));
          if (1 >= Vc(c.b) && c.ga) ***REMOVED***
            try ***REMOVED***
              c.ga();
            } catch (Ic) ***REMOVED***}
            c.ga = void 0;
          }
        } else Q(c, 11);
      } else if (((a.C || c.a == a) && Sc(c), !Ga(b))) for ((b = d = c.ra.a.parse(b), d = 0); d < b.length; d++) if ((e = b[d], c.S = e[0], e = e[1], 2 == c.A)) if ("c" == e[0]) ***REMOVED***
        c.K = e[1];
        c.ia = e[2];
        var f = e[3];
        null != f && (c.ja = f, c.c.info("VER=" + c.ja));
        var k = e[4];
        null != k && (c.ma = k, c.c.info("SVER=" + c.ma));
        var h = e[5];
        if (null != h && "number" === typeof h && 0 < h) ***REMOVED***
          var g = 1.5 * h;
          c.F = g;
          c.c.info("backChannelRequestTimeoutMs_=" + g);
        }
        g = c;
        var l = a.a;
        if (l) ***REMOVED***
          var n = l.a ? l.a.getResponseHeader("X-Client-Wire-Protocol") : null;
          if (n) ***REMOVED***
            var r = g.b;
            !r.a && (A(n, "spdy") || A(n, "quic") || A(n, "h2")) && (r.f = r.g, r.a = new Set(), r.b && (Wc(r, r.b), r.b = null));
          }
          if (g.v) ***REMOVED***
            var zb = l.a ? l.a.getResponseHeader("X-HTTP-Session-Id") : null;
            zb && (g.pa = zb, R(g.B, g.v, zb));
          }
        }
        c.A = 3;
        c.f && c.f.va();
        c.X && (c.P = x() - a.u, c.c.info("Handshake RTT: " + c.P + "ms"));
        g = c;
        var Da = a;
        g.na = Xc(g, g.C ? g.ia : null, g.ha);
        if (Da.C) ***REMOVED***
          Yc(g.b, Da);
          var Ea = Da, Mc = g.F;
          Mc && Ea.setTimeout(Mc);
          Ea.o && (Hc(Ea), Ec(Ea));
          g.a = Da;
        } else Zc(g);
        0 < c.g.length && $c(c);
      } else "stop" != e[0] && "close" != e[0] || Q(c, 7); else 3 == c.A && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? Q(c, 7) : ad(c) : "noop" != e[0] && c.f && c.f.ua(e), c.o = 0);
      jc(4);
    } catch (Ic) ***REMOVED***}
  }
  ;
  function bd(a) ***REMOVED***
    if (a.L && "function" == typeof a.L) return a.L();
    if ("string" === typeof a) return a.split("");
    if (pa(a)) ***REMOVED***
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
      return b;
    }
    b = [];
    c = 0;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function cd(a, b) ***REMOVED***
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0); else if (pa(a) || "string" === typeof a) za(a, b, void 0); else ***REMOVED***
      if (a.M && "function" == typeof a.M) var c = a.M(); else if (a.L && "function" == typeof a.L) c = void 0; else if (pa(a) || "string" === typeof a) ***REMOVED***
        c = [];
        for (var d = a.length, e = 0; e < d; e++) c.push(e);
      } else for (e in (c = [], d = 0, a)) c[d++] = e;
      d = bd(a);
      e = d.length;
      for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
    }
  }
  ;
  function S(a, b) ***REMOVED***
    this.b = ***REMOVED******REMOVED***
    this.a = [];
    this.c = 0;
    var c = arguments.length;
    if (1 < c) ***REMOVED***
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a) if (a instanceof S) for ((c = a.M(), d = 0); d < c.length; d++) this.set(c[d], a.get(c[d])); else for (d in a) this.set(d, a[d]);
  }
  m = S.prototype;
  m.L = function () ***REMOVED***
    dd(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a;
  ***REMOVED***
  m.M = function () ***REMOVED***
    dd(this);
    return this.a.concat();
  ***REMOVED***
  function dd(a) ***REMOVED***
    if (a.c != a.a.length) ***REMOVED***
      for (var b = 0, c = 0; b < a.a.length; ) ***REMOVED***
        var d = a.a[b];
        T(a.b, d) && (a.a[c++] = d);
        b++;
      }
      a.a.length = c;
    }
    if (a.c != a.a.length) ***REMOVED***
      var e = ***REMOVED******REMOVED***
      for (c = b = 0; b < a.a.length; ) (d = a.a[b], T(e, d) || (a.a[c++] = d, e[d] = 1), b++);
      a.a.length = c;
    }
  }
  m.get = function (a, b) ***REMOVED***
    return T(this.b, a) ? this.b[a] : b;
  ***REMOVED***
  m.set = function (a, b) ***REMOVED***
    T(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b;
  ***REMOVED***
  m.forEach = function (a, b) ***REMOVED***
    for (var c = this.M(), d = 0; d < c.length; d++) ***REMOVED***
      var e = c[d], f = this.get(e);
      a.call(b, f, e, this);
    }
  ***REMOVED***
  function T(a, b) ***REMOVED***
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  ;
  var ed = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function fd(a, b) ***REMOVED***
    if (a) ***REMOVED***
      a = a.split("&");
      for (var c = 0; c < a.length; c++) ***REMOVED***
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) ***REMOVED***
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  ;
  function U(a, b) ***REMOVED***
    this.c = this.j = this.f = "";
    this.h = null;
    this.i = this.g = "";
    this.a = !1;
    if (a instanceof U) ***REMOVED***
      this.a = void 0 !== b ? b : a.a;
      gd(this, a.f);
      this.j = a.j;
      hd(this, a.c);
      id(this, a.h);
      this.g = a.g;
      b = a.b;
      var c = new jd();
      c.c = b.c;
      b.a && (c.a = new S(b.a), c.b = b.b);
      kd(this, c);
      this.i = a.i;
    } else a && (c = String(a).match(ed)) ? (this.a = !!b, gd(this, c[1] || "", !0), this.j = ld(c[2] || ""), hd(this, c[3] || "", !0), id(this, c[4]), this.g = ld(c[5] || "", !0), kd(this, c[6] || "", !0), this.i = ld(c[7] || "")) : (this.a = !!b, this.b = new jd(null, this.a));
  }
  U.prototype.toString = function () ***REMOVED***
    var a = [], b = this.f;
    b && a.push(md(b, nd, !0), ":");
    var c = this.c;
    if (c || "file" == b) (a.push("//"), (b = this.j) && a.push(md(b, nd, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]***REMOVED***2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)));
    if (c = this.g) (this.c && "/" != c.charAt(0) && a.push("/"), a.push(md(c, "/" == c.charAt(0) ? od : pd, !0)));
    (c = this.b.toString()) && a.push("?", c);
    (c = this.i) && a.push("#", md(c, qd));
    return a.join("");
  ***REMOVED***
  function N(a) ***REMOVED***
    return new U(a);
  }
  function gd(a, b, c) ***REMOVED***
    a.f = c ? ld(b, !0) : b;
    a.f && (a.f = a.f.replace(/:$/, ""));
  }
  function hd(a, b, c) ***REMOVED***
    a.c = c ? ld(b, !0) : b;
  }
  function id(a, b) ***REMOVED***
    if (b) ***REMOVED***
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.h = b;
    } else a.h = null;
  }
  function kd(a, b, c) ***REMOVED***
    b instanceof jd ? (a.b = b, rd(a.b, a.a)) : (c || (b = md(b, sd)), a.b = new jd(b, a.a));
  }
  function R(a, b, c) ***REMOVED***
    a.b.set(b, c);
  }
  function Cc(a) ***REMOVED***
    R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ x()).toString(36));
    return a;
  }
  function td(a) ***REMOVED***
    return a instanceof U ? N(a) : new U(a, void 0);
  }
  function ud(a, b, c, d) ***REMOVED***
    var e = new U(null, void 0);
    a && gd(e, a);
    b && hd(e, b);
    c && id(e, c);
    d && (e.g = d);
    return e;
  }
  function ld(a, b) ***REMOVED***
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  function md(a, b, c) ***REMOVED***
    return "string" === typeof a ? (a = encodeURI(a).replace(b, vd), c && (a = a.replace(/%25([0-9a-fA-F]***REMOVED***2})/g, "%$1")), a) : null;
  }
  function vd(a) ***REMOVED***
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  var nd = /[#\/\?@]/g, pd = /[#\?:]/g, od = /[#\?]/g, sd = /[#\?@]/g, qd = /#/g;
  function jd(a, b) ***REMOVED***
    this.b = this.a = null;
    this.c = a || null;
    this.f = !!b;
  }
  function V(a) ***REMOVED***
    a.a || (a.a = new S(), a.b = 0, a.c && fd(a.c, function (b, c) ***REMOVED***
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    }));
  }
  m = jd.prototype;
  m.add = function (a, b) ***REMOVED***
    V(this);
    this.c = null;
    a = W(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b += 1;
    return this;
  ***REMOVED***
  function wd(a, b) ***REMOVED***
    V(a);
    b = W(a, b);
    T(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, T(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && dd(a)));
  }
  function xd(a, b) ***REMOVED***
    V(a);
    b = W(a, b);
    return T(a.a.b, b);
  }
  m.forEach = function (a, b) ***REMOVED***
    V(this);
    this.a.forEach(function (c, d) ***REMOVED***
      za(c, function (e) ***REMOVED***
        a.call(b, e, d, this);
      }, this);
    }, this);
  ***REMOVED***
  m.M = function () ***REMOVED***
    V(this);
    for (var a = this.a.L(), b = this.a.M(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  ***REMOVED***
  m.L = function (a) ***REMOVED***
    V(this);
    var b = [];
    if ("string" === typeof a) xd(this, a) && (b = Ca(b, this.a.get(W(this, a)))); else ***REMOVED***
      a = this.a.L();
      for (var c = 0; c < a.length; c++) b = Ca(b, a[c]);
    }
    return b;
  ***REMOVED***
  m.set = function (a, b) ***REMOVED***
    V(this);
    this.c = null;
    a = W(this, a);
    xd(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b += 1;
    return this;
  ***REMOVED***
  m.get = function (a, b) ***REMOVED***
    if (!a) return b;
    a = this.L(a);
    return 0 < a.length ? String(a[0]) : b;
  ***REMOVED***
  function Fc(a, b, c) ***REMOVED***
    wd(a, b);
    0 < c.length && (a.c = null, a.a.set(W(a, b), Fa(c)), a.b += c.length);
  }
  m.toString = function () ***REMOVED***
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var a = [], b = this.a.M(), c = 0; c < b.length; c++) ***REMOVED***
      var d = b[c], e = encodeURIComponent(String(d));
      d = this.L(d);
      for (var f = 0; f < d.length; f++) ***REMOVED***
        var k = e;
        "" !== d[f] && (k += "=" + encodeURIComponent(String(d[f])));
        a.push(k);
      }
    }
    return this.c = a.join("&");
  ***REMOVED***
  function W(a, b) ***REMOVED***
    b = String(b);
    a.f && (b = b.toLowerCase());
    return b;
  }
  function rd(a, b) ***REMOVED***
    b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) ***REMOVED***
      var e = d.toLowerCase();
      d != e && (wd(this, d), Fc(this, e, c));
    }, a));
    a.f = b;
  }
  ;
  function yd(a, b) ***REMOVED***
    this.b = a;
    this.a = b;
  }
  ;
  function zd(a) ***REMOVED***
    this.g = a || Ad;
    u.PerformanceNavigationTiming ? (a = u.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(u.ka && u.ka.Aa && u.ka.Aa() && u.ka.Aa().Ob);
    this.f = a ? this.g : 1;
    this.a = null;
    1 < this.f && (this.a = new Set());
    this.b = null;
    this.c = [];
  }
  var Ad = 10;
  function Bd(a) ***REMOVED***
    return a.b ? !0 : a.a ? a.a.size >= a.f : !1;
  }
  function Vc(a) ***REMOVED***
    return a.b ? 1 : a.a ? a.a.size : 0;
  }
  function Rc(a, b) ***REMOVED***
    return a.b ? a.b == b : a.a ? a.a.has(b) : !1;
  }
  function Wc(a, b) ***REMOVED***
    a.a ? a.a.add(b) : a.b = b;
  }
  function Yc(a, b) ***REMOVED***
    a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b);
  }
  zd.prototype.cancel = function () ***REMOVED***
    this.c = Cd(this);
    if (this.b) (this.b.cancel(), this.b = null); else if (this.a && 0 !== this.a.size) ***REMOVED***
      for (var a = p(this.a.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
      this.a.clear();
    }
  ***REMOVED***
  function Cd(a) ***REMOVED***
    if (null != a.b) return a.c.concat(a.b.s);
    if (null != a.a && 0 !== a.a.size) ***REMOVED***
      var b = a.c;
      a = p(a.a.values());
      for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.s);
      return b;
    }
    return Fa(a.c);
  }
  ;
  function Dd() ***REMOVED***}
  Dd.prototype.stringify = function (a) ***REMOVED***
    return u.JSON.stringify(a, void 0);
  ***REMOVED***
  Dd.prototype.parse = function (a) ***REMOVED***
    return u.JSON.parse(a, void 0);
  ***REMOVED***
  function Ed() ***REMOVED***
    this.a = new Dd();
  }
  function Fd(a, b, c) ***REMOVED***
    var d = c || "";
    try ***REMOVED***
      cd(a, function (e, f) ***REMOVED***
        var k = e;
        v(e) && (k = Gb(e));
        b.push(d + f + "=" + encodeURIComponent(k));
      });
    } catch (e) ***REMOVED***
      throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
    }
  }
  ;
  function Gd(a, b) ***REMOVED***
    var c = new bc();
    if (u.Image) ***REMOVED***
      var d = new Image();
      d.onload = va(Hd, c, d, "TestLoadImage: loaded", !0, b);
      d.onerror = va(Hd, c, d, "TestLoadImage: error", !1, b);
      d.onabort = va(Hd, c, d, "TestLoadImage: abort", !1, b);
      d.ontimeout = va(Hd, c, d, "TestLoadImage: timeout", !1, b);
      u.setTimeout(function () ***REMOVED***
        if (d.ontimeout) d.ontimeout();
      }, 1E4);
      d.src = a;
    } else b(!1);
  }
  function Hd(a, b, c, d, e) ***REMOVED***
    try ***REMOVED***
      (b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d));
    } catch (f) ***REMOVED***}
  }
  ;
  var Id = u.JSON.parse;
  function X(a) ***REMOVED***
    G.call(this);
    this.headers = new S();
    this.I = a || null;
    this.b = !1;
    this.s = this.a = null;
    this.B = "";
    this.h = 0;
    this.f = "";
    this.g = this.v = this.l = this.u = !1;
    this.o = 0;
    this.m = null;
    this.J = Jd;
    this.F = this.G = !1;
  }
  y(X, G);
  var Jd = "", Kd = /^https?$/i, Ld = ["POST", "PUT"];
  m = X.prototype;
  m.da = function (a, b, c, d) ***REMOVED***
    if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.B = a;
    this.f = "";
    this.h = 0;
    this.u = !1;
    this.b = !0;
    this.a = new XMLHttpRequest();
    this.s = this.I ? qc(this.I) : qc(vc);
    this.a.onreadystatechange = w(this.Ba, this);
    try ***REMOVED***
      (this.v = !0, this.a.open(b, String(a), !0), this.v = !1);
    } catch (f) ***REMOVED***
      Md(this, f);
      return;
    }
    a = c || "";
    var e = new S(this.headers);
    d && cd(d, function (f, k) ***REMOVED***
      e.set(k, f);
    });
    d = Aa(e.M());
    c = u.FormData && a instanceof u.FormData;
    !(0 <= ya(Ld, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, k) ***REMOVED***
      this.a.setRequestHeader(k, f);
    }, this);
    this.J && (this.a.responseType = this.J);
    ("withCredentials" in this.a) && this.a.withCredentials !== this.G && (this.a.withCredentials = this.G);
    try ***REMOVED***
      (Nd(this), 0 < this.o && ((this.F = Od(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = w(this.za, this)) : this.m = Vb(this.za, this.o, this)), this.l = !0, this.a.send(a), this.l = !1);
    } catch (f) ***REMOVED***
      Md(this, f);
    }
  ***REMOVED***
  function Od(a) ***REMOVED***
    return C && bb(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  }
  function Ba(a) ***REMOVED***
    return "content-type" == a.toLowerCase();
  }
  m.za = function () ***REMOVED***
    "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, H(this, "timeout"), this.abort(8));
  ***REMOVED***
  function Md(a, b) ***REMOVED***
    a.b = !1;
    a.a && (a.g = !0, a.a.abort(), a.g = !1);
    a.f = b;
    a.h = 5;
    Pd(a);
    Qd(a);
  }
  function Pd(a) ***REMOVED***
    a.u || (a.u = !0, H(a, "complete"), H(a, "error"));
  }
  m.abort = function (a) ***REMOVED***
    this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, H(this, "complete"), H(this, "abort"), Qd(this));
  ***REMOVED***
  m.H = function () ***REMOVED***
    this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), Qd(this, !0));
    X.W.H.call(this);
  ***REMOVED***
  m.Ba = function () ***REMOVED***
    this.j || (this.v || this.l || this.g ? Rd(this) : this.Xa());
  ***REMOVED***
  m.Xa = function () ***REMOVED***
    Rd(this);
  ***REMOVED***
  function Rd(a) ***REMOVED***
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != O(a) || 2 != a.Z())) if (a.l && 4 == O(a)) Vb(a.Ba, 0, a); else if ((H(a, "readystatechange"), 4 == O(a))) ***REMOVED***
      a.b = !1;
      try ***REMOVED***
        var b = a.Z();
        a: switch (b) ***REMOVED***
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var c = !0;
            break a;
          default:
            c = !1;
        }
        var d;
        if (!(d = c)) ***REMOVED***
          var e;
          if (e = 0 === b) ***REMOVED***
            var f = String(a.B).match(ed)[1] || null;
            if (!f && u.self && u.self.location) ***REMOVED***
              var k = u.self.location.protocol;
              f = k.substr(0, k.length - 1);
            }
            e = !Kd.test(f ? f.toLowerCase() : "");
          }
          d = e;
        }
        if (d) (H(a, "complete"), H(a, "success")); else ***REMOVED***
          a.h = 6;
          try ***REMOVED***
            var h = 2 < O(a) ? a.a.statusText : "";
          } catch (g) ***REMOVED***
            h = "";
          }
          a.f = h + " [" + a.Z() + "]";
          Pd(a);
        }
      } finally ***REMOVED***
        Qd(a);
      }
    }
  }
  function Qd(a, b) ***REMOVED***
    if (a.a) ***REMOVED***
      Nd(a);
      var c = a.a, d = a.s[0] ? oa : null;
      a.a = null;
      a.s = null;
      b || H(a, "ready");
      try ***REMOVED***
        c.onreadystatechange = d;
      } catch (e) ***REMOVED***}
    }
  }
  function Nd(a) ***REMOVED***
    a.a && a.F && (a.a.ontimeout = null);
    a.m && (u.clearTimeout(a.m), a.m = null);
  }
  function O(a) ***REMOVED***
    return a.a ? a.a.readyState : 0;
  }
  m.Z = function () ***REMOVED***
    try ***REMOVED***
      return 2 < O(this) ? this.a.status : -1;
    } catch (a) ***REMOVED***
      return -1;
    }
  ***REMOVED***
  m.ba = function () ***REMOVED***
    try ***REMOVED***
      return this.a ? this.a.responseText : "";
    } catch (a) ***REMOVED***
      return "";
    }
  ***REMOVED***
  m.Ra = function (a) ***REMOVED***
    if (this.a) ***REMOVED***
      var b = this.a.responseText;
      a && 0 == b.indexOf(a) && (b = b.substring(a.length));
      return Id(b);
    }
  ***REMOVED***
  m.wa = function () ***REMOVED***
    return this.h;
  ***REMOVED***
  m.Sa = function () ***REMOVED***
    return "string" === typeof this.f ? this.f : String(this.f);
  ***REMOVED***
  function Sd(a) ***REMOVED***
    var b = "";
    La(a, function (c, d) ***REMOVED***
      b += d;
      b += ":";
      b += c;
      b += "\r\n";
    });
    return b;
  }
  function Td(a, b, c) ***REMOVED***
    a: ***REMOVED***
      for (d in c) ***REMOVED***
        var d = !1;
        break a;
      }
      d = !0;
    }
    d || (c = Sd(c), "string" === typeof a ? (encodeURIComponent(String(b)), null != c && encodeURIComponent(String(c))) : R(a, b, c));
  }
  ;
  function Ud(a, b, c) ***REMOVED***
    return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
  }
  function Vd(a) ***REMOVED***
    this.ma = 0;
    this.g = [];
    this.c = new bc();
    this.ia = this.na = this.B = this.ha = this.a = this.pa = this.v = this.Y = this.i = this.R = this.l = null;
    this.Ta = this.T = 0;
    this.Oa = Ud("failFast", !1, a);
    this.I = this.m = this.j = this.h = this.f = null;
    this.U = !0;
    this.J = this.qa = this.S = -1;
    this.V = this.o = this.u = 0;
    this.Ka = Ud("baseRetryDelayMs", 5E3, a);
    this.Ua = Ud("retryDelaySeedMs", 1E4, a);
    this.Pa = Ud("forwardChannelMaxRetries", 2, a);
    this.oa = Ud("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Qa = a && a.g || void 0;
    this.F = void 0;
    this.C = a && a.supportsCrossDomainXhr || !1;
    this.K = "";
    this.b = new zd(a && a.concurrentRequestLimit);
    this.ra = new Ed();
    this.fa = a && a.fastHandshake || !1;
    this.Ma = a && a.b || !1;
    a && a.f && (this.c.a = !1);
    a && a.forceLongPolling && (this.U = !1);
    this.X = !this.fa && this.U && a && a.detectBufferingProxy || !1;
    this.ga = void 0;
    this.P = 0;
    this.G = !1;
    this.s = null;
    (this.Na = a && a.c || !1) && this.c.info("Opt-in to enable Chrome Origin Trials.");
  }
  m = Vd.prototype;
  m.ja = 8;
  m.A = 1;
  function ad(a) ***REMOVED***
    Wd(a);
    if (3 == a.A) ***REMOVED***
      var b = a.T++, c = N(a.B);
      R(c, "SID", a.K);
      R(c, "RID", b);
      R(c, "TYPE", "terminate");
      Xd(a, c);
      b = new xc(a, a.c, b, void 0);
      b.I = 2;
      b.i = Cc(N(c));
      c = !1;
      u.navigator && u.navigator.sendBeacon && (c = u.navigator.sendBeacon(b.i.toString(), ""));
      !c && u.Image && (new Image().src = b.i, c = !0);
      c || (b.a = Gc(b.g, null), b.a.da(b.i));
      b.u = x();
      Ec(b);
    }
    Yd(a);
  }
  function Tc(a) ***REMOVED***
    a.a && (Pc(a), a.a.cancel(), a.a = null);
  }
  function Wd(a) ***REMOVED***
    Tc(a);
    a.j && (u.clearTimeout(a.j), a.j = null);
    Sc(a);
    a.b.cancel();
    a.h && ("number" === typeof a.h && u.clearTimeout(a.h), a.h = null);
  }
  function Zd(a, b) ***REMOVED***
    a.g.push(new yd(a.Ta++, b));
    3 == a.A && $c(a);
  }
  function $c(a) ***REMOVED***
    Bd(a.b) || a.h || (a.h = !0, Ob(a.Da, a), a.u = 0);
  }
  function $d(a, b) ***REMOVED***
    if (Vc(a.b) >= a.b.f - (a.h ? 1 : 0)) return !1;
    if (a.h) return (a.g = b.s.concat(a.g), !0);
    if (1 == a.A || 2 == a.A || a.u >= (a.Oa ? 0 : a.Pa)) return !1;
    a.h = mc(w(a.Da, a, b), ae(a, a.u));
    a.u++;
    return !0;
  }
  m.Da = function (a) ***REMOVED***
    if (this.h) if ((this.h = null, 1 == this.A)) ***REMOVED***
      if (!a) ***REMOVED***
        this.T = Math.floor(1E5 * Math.random());
        a = this.T++;
        var b = new xc(this, this.c, a, void 0), c = this.l;
        this.R && (c ? (c = Ma(c), Oa(c, this.R)) : c = this.R);
        null === this.i && (b.B = c);
        var d;
        if (this.fa) a: ***REMOVED***
          for (var e = d = 0; e < this.g.length; e++) ***REMOVED***
            b: ***REMOVED***
              var f = this.g[e];
              if (("__data__" in f.a) && (f = f.a.__data__, "string" === typeof f)) ***REMOVED***
                f = f.length;
                break b;
              }
              f = void 0;
            }
            if (void 0 === f) break;
            d += f;
            if (4096 < d) ***REMOVED***
              d = e;
              break a;
            }
            if (4096 === d || e === this.g.length - 1) ***REMOVED***
              d = e + 1;
              break a;
            }
          }
          d = 1E3;
        } else d = 1E3;
        d = be(this, b, d);
        e = N(this.B);
        R(e, "RID", a);
        R(e, "CVER", 22);
        this.v && R(e, "X-HTTP-Session-Id", this.v);
        Xd(this, e);
        this.i && c && Td(e, this.i, c);
        Wc(this.b, b);
        this.Ma && R(e, "TYPE", "init");
        this.fa ? (R(e, "$req", d), R(e, "SID", "null"), b.X = !0, Bc(b, e, null)) : Bc(b, e, d);
        this.A = 2;
      }
    } else 3 == this.A && (a ? ce(this, a) : 0 == this.g.length || Bd(this.b) || ce(this));
  ***REMOVED***
  function ce(a, b) ***REMOVED***
    var c;
    b ? c = b.f : c = a.T++;
    var d = N(a.B);
    R(d, "SID", a.K);
    R(d, "RID", c);
    R(d, "AID", a.S);
    Xd(a, d);
    a.i && a.l && Td(d, a.i, a.l);
    c = new xc(a, a.c, c, a.u + 1);
    null === a.i && (c.B = a.l);
    b && (a.g = b.s.concat(a.g));
    b = be(a, c, 1E3);
    c.setTimeout(Math.round(.5 * a.oa) + Math.round(.5 * a.oa * Math.random()));
    Wc(a.b, c);
    Bc(c, d, b);
  }
  function Xd(a, b) ***REMOVED***
    a.f && cd(***REMOVED***}, function (c, d) ***REMOVED***
      R(b, d, c);
    });
  }
  function be(a, b, c) ***REMOVED***
    c = Math.min(a.g.length, c);
    var d = a.f ? w(a.f.La, a.f, a) : null;
    a: for (var e = a.g, f = -1; ; ) ***REMOVED***
      var k = ["count=" + c];
      -1 == f ? 0 < c ? (f = e[0].b, k.push("ofs=" + f)) : f = 0 : k.push("ofs=" + f);
      for (var h = !0, g = 0; g < c; g++) ***REMOVED***
        var l = e[g].b, n = e[g].a;
        l -= f;
        if (0 > l) (f = Math.max(0, e[g].b - 100), h = !1); else try ***REMOVED***
          Fd(n, k, "req" + l + "_");
        } catch (r) ***REMOVED***
          d && d(n);
        }
      }
      if (h) ***REMOVED***
        d = k.join("&");
        break a;
      }
    }
    a = a.g.splice(0, c);
    b.s = a;
    return d;
  }
  function Zc(a) ***REMOVED***
    a.a || a.j || (a.V = 1, Ob(a.Ca, a), a.o = 0);
  }
  function Uc(a) ***REMOVED***
    if (a.a || a.j || 3 <= a.o) return !1;
    a.V++;
    a.j = mc(w(a.Ca, a), ae(a, a.o));
    a.o++;
    return !0;
  }
  m.Ca = function () ***REMOVED***
    this.j = null;
    de(this);
    if (this.X && !(this.G || null == this.a || 0 >= this.P)) ***REMOVED***
      var a = 2 * this.P;
      this.c.info("BP detection timer enabled: " + a);
      this.s = mc(w(this.Wa, this), a);
    }
  ***REMOVED***
  m.Wa = function () ***REMOVED***
    this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.I = !1, this.G = !0, M(10), Tc(this), de(this));
  ***REMOVED***
  function Pc(a) ***REMOVED***
    null != a.s && (u.clearTimeout(a.s), a.s = null);
  }
  function de(a) ***REMOVED***
    a.a = new xc(a, a.c, "rpc", a.V);
    null === a.i && (a.a.B = a.l);
    a.a.R = 0;
    var b = N(a.na);
    R(b, "RID", "rpc");
    R(b, "SID", a.K);
    R(b, "CI", a.I ? "0" : "1");
    R(b, "AID", a.S);
    Xd(a, b);
    R(b, "TYPE", "xmlhttp");
    a.i && a.l && Td(b, a.i, a.l);
    a.F && a.a.setTimeout(a.F);
    var c = a.a;
    a = a.ia;
    c.I = 1;
    c.i = Cc(N(b));
    c.j = null;
    c.J = !0;
    Dc(c, a);
  }
  m.Va = function () ***REMOVED***
    null != this.m && (this.m = null, Tc(this), Uc(this), M(19));
  ***REMOVED***
  function Sc(a) ***REMOVED***
    null != a.m && (u.clearTimeout(a.m), a.m = null);
  }
  function Nc(a, b) ***REMOVED***
    var c = null;
    if (a.a == b) ***REMOVED***
      Sc(a);
      Pc(a);
      a.a = null;
      var d = 2;
    } else if (Rc(a.b, b)) (c = b.s, Yc(a.b, b), d = 1); else return;
    a.J = b.P;
    if (0 != a.A) if (b.b) if (1 == d) ***REMOVED***
      c = b.j ? b.j.length : 0;
      b = x() - b.u;
      var e = a.u;
      d = hc();
      H(d, new lc(d, c, b, e));
      $c(a);
    } else Zc(a); else if ((e = b.h, 3 == e || 0 == e && 0 < a.J || !(1 == d && $d(a, b) || 2 == d && Uc(a)))) switch ((c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e)) ***REMOVED***
      case 1:
        Q(a, 5);
        break;
      case 4:
        Q(a, 10);
        break;
      case 3:
        Q(a, 6);
        break;
      default:
        Q(a, 2);
    }
  }
  function ae(a, b) ***REMOVED***
    var c = a.Ka + Math.floor(Math.random() * a.Ua);
    a.f || (c *= 2);
    return c * b;
  }
  function Q(a, b) ***REMOVED***
    a.c.info("Error code " + b);
    if (2 == b) ***REMOVED***
      var c = null;
      a.f && (c = null);
      var d = w(a.ab, a);
      c || (c = new U("//www.google.com/images/cleardot.gif"), u.location && "http" == u.location.protocol || gd(c, "https"), Cc(c));
      Gd(c.toString(), d);
    } else M(2);
    a.A = 0;
    a.f && a.f.ta(b);
    Yd(a);
    Wd(a);
  }
  m.ab = function (a) ***REMOVED***
    a ? (this.c.info("Successfully pinged google.com"), M(2)) : (this.c.info("Failed to ping google.com"), M(1));
  ***REMOVED***
  function Yd(a) ***REMOVED***
    a.A = 0;
    a.J = -1;
    if (a.f) ***REMOVED***
      if (0 != Cd(a.b).length || 0 != a.g.length) (a.b.c.length = 0, Fa(a.g), a.g.length = 0);
      a.f.sa();
    }
  }
  function Xc(a, b, c) ***REMOVED***
    var d = td(c);
    if ("" != d.c) (b && hd(d, b + "." + d.c), id(d, d.h)); else ***REMOVED***
      var e = u.location;
      d = ud(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
    }
    a.Y && La(a.Y, function (f, k) ***REMOVED***
      R(d, k, f);
    });
    b = a.v;
    c = a.pa;
    b && c && R(d, b, c);
    R(d, "VER", a.ja);
    Xd(a, d);
    return d;
  }
  function Gc(a, b) ***REMOVED***
    if (b && !a.C) throw Error("Can't create secondary domain capable XhrIo object.");
    b = new X(a.Qa);
    b.G = a.C;
    return b;
  }
  function ee() ***REMOVED***}
  m = ee.prototype;
  m.va = function () ***REMOVED******REMOVED***
  m.ua = function () ***REMOVED******REMOVED***
  m.ta = function () ***REMOVED******REMOVED***
  m.sa = function () ***REMOVED******REMOVED***
  m.La = function () ***REMOVED******REMOVED***
  function fe() ***REMOVED***
    if (C && !(10 <= Number(eb))) throw Error("Environmental error: no available transport.");
  }
  fe.prototype.a = function (a, b) ***REMOVED***
    return new Y(a, b);
  ***REMOVED***
  function Y(a, b) ***REMOVED***
    G.call(this);
    this.a = new Vd(b);
    this.o = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = ***REMOVED***
      "X-Client-Protocol": "webchannel"
    });
    this.a.l = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = ***REMOVED***
      "X-WebChannel-Content-Type": b.messageContentType
    });
    b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = ***REMOVED***
      "X-WebChannel-Client-Profile": b.a
    });
    this.a.R = a;
    (a = b && b.httpHeadersOverwriteParam) && !Ga(a) && (this.a.i = a);
    this.m = b && b.supportsCrossDomainXhr || !1;
    this.l = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !Ga(b) && (this.a.v = b, a = this.b, null !== a && (b in a) && (a = this.b, (b in a) && delete a[b]));
    this.f = new Z(this);
  }
  y(Y, G);
  Y.prototype.g = function () ***REMOVED***
    this.a.f = this.f;
    this.m && (this.a.C = !0);
    var a = this.a, b = this.o, c = this.b || void 0;
    M(0);
    a.ha = b;
    a.Y = c || (***REMOVED***});
    a.I = a.U;
    a.B = Xc(a, null, a.ha);
    $c(a);
  ***REMOVED***
  Y.prototype.close = function () ***REMOVED***
    ad(this.a);
  ***REMOVED***
  Y.prototype.h = function (a) ***REMOVED***
    if ("string" === typeof a) ***REMOVED***
      var b = ***REMOVED******REMOVED***
      b.__data__ = a;
      Zd(this.a, b);
    } else this.l ? (b = ***REMOVED***}, b.__data__ = Gb(a), Zd(this.a, b)) : Zd(this.a, a);
  ***REMOVED***
  Y.prototype.H = function () ***REMOVED***
    this.a.f = null;
    delete this.f;
    ad(this.a);
    delete this.a;
    Y.W.H.call(this);
  ***REMOVED***
  function ge(a) ***REMOVED***
    tc.call(this);
    var b = a.__sm__;
    if (b) ***REMOVED***
      a: ***REMOVED***
        for (var c in b) ***REMOVED***
          a = c;
          break a;
        }
        a = void 0;
      }
      (this.c = a) ? (a = this.c, this.data = null !== b && (a in b) ? b[a] : void 0) : this.data = b;
    } else this.data = a;
  }
  y(ge, tc);
  function he() ***REMOVED***
    uc.call(this);
    this.status = 1;
  }
  y(he, uc);
  function Z(a) ***REMOVED***
    this.a = a;
  }
  y(Z, ee);
  Z.prototype.va = function () ***REMOVED***
    H(this.a, "a");
  ***REMOVED***
  Z.prototype.ua = function (a) ***REMOVED***
    H(this.a, new ge(a));
  ***REMOVED***
  Z.prototype.ta = function (a) ***REMOVED***
    H(this.a, new he(a));
  ***REMOVED***
  Z.prototype.sa = function () ***REMOVED***
    H(this.a, "b");
  ***REMOVED***
  /*
  
  Copyright 2017 Google LLC
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
  http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */
  fe.prototype.createWebChannel = fe.prototype.a;
  Y.prototype.send = Y.prototype.h;
  Y.prototype.open = Y.prototype.g;
  Y.prototype.close = Y.prototype.close;
  nc.NO_ERROR = 0;
  nc.TIMEOUT = 8;
  nc.HTTP_ERROR = 6;
  oc.COMPLETE = "complete";
  rc.EventType = sc;
  sc.OPEN = "a";
  sc.CLOSE = "b";
  sc.ERROR = "c";
  sc.MESSAGE = "d";
  G.prototype.listen = G.prototype.xa;
  X.prototype.listenOnce = X.prototype.ya;
  X.prototype.getLastError = X.prototype.Sa;
  X.prototype.getLastErrorCode = X.prototype.wa;
  X.prototype.getStatus = X.prototype.Z;
  X.prototype.getResponseJson = X.prototype.Ra;
  X.prototype.getResponseText = X.prototype.ba;
  X.prototype.send = X.prototype.da;
  module.exports.createWebChannelTransport = function () ***REMOVED***
    return new fe();
  ***REMOVED***
  module.exports.getStatEventTarget = function () ***REMOVED***
    return hc();
  ***REMOVED***
  module.exports.ErrorCode = nc;
  module.exports.EventType = oc;
  module.exports.Event = L;
  module.exports.Stat = ***REMOVED***
    jb: 0,
    mb: 1,
    nb: 2,
    Gb: 3,
    Lb: 4,
    Ib: 5,
    Jb: 6,
    Hb: 7,
    Fb: 8,
    Kb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Db: 12,
    zb: 13,
    Ab: 14,
    yb: 15,
    Bb: 16,
    Cb: 17,
    fb: 18,
    eb: 19,
    gb: 20
  ***REMOVED***
  module.exports.WebChannel = rc;
  module.exports.XhrIo = X;
}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : ***REMOVED***});

},***REMOVED***}],"4Yeaj":[function(require,module,exports) ***REMOVED***
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "$", function () ***REMOVED***
  return wc;
});
_parcelHelpers.export(exports, "B", function () ***REMOVED***
  return _c;
});
_parcelHelpers.export(exports, "G", function () ***REMOVED***
  return kc;
});
_parcelHelpers.export(exports, "H", function () ***REMOVED***
  return Cc;
});
_parcelHelpers.export(exports, "L", function () ***REMOVED***
  return Ic;
});
_parcelHelpers.export(exports, "O", function () ***REMOVED***
  return gc;
});
_parcelHelpers.export(exports, "Q", function () ***REMOVED***
  return Sc;
});
_parcelHelpers.export(exports, "X", function () ***REMOVED***
  return Lc;
});
_parcelHelpers.export(exports, "Y", function () ***REMOVED***
  return Oc;
});
_parcelHelpers.export(exports, "_", function () ***REMOVED***
  return ea;
});
_parcelHelpers.export(exports, "e", function () ***REMOVED***
  return Fc;
});
_parcelHelpers.export(exports, "k", function () ***REMOVED***
  return q;
});
_parcelHelpers.export(exports, "m", function () ***REMOVED***
  return na;
});
_parcelHelpers.export(exports, "n", function () ***REMOVED***
  return Vc;
});
_parcelHelpers.export(exports, "q", function () ***REMOVED***
  return Ec;
});
_parcelHelpers.export(exports, "s", function () ***REMOVED***
  return qc;
});
_parcelHelpers.export(exports, "t", function () ***REMOVED***
  return Mc;
});
_parcelHelpers.export(exports, "v", function () ***REMOVED***
  return ha;
});
_parcelHelpers.export(exports, "x", function () ***REMOVED***
  return mc;
});
_parcelHelpers.export(exports, "z", function () ***REMOVED***
  return xc;
});
var _firebaseUtil = require("@firebase/util");
var _firebaseLogger = require("@firebase/logger");
var _firebaseWebchannelWrapper = require("@firebase/webchannel-wrapper");
var _tslib = require("tslib");
var process = require("process");
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
* exceed. All subsequent calls to next will return increasing values. If provided with a
* `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
* well as write out sequence numbers that it produces via `next()`.
*/
var _ = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    var n = this;
    (this.previousValue = t, e && (e.sequenceNumberHandler = function (t) ***REMOVED***
      return n.t(t);
    }, this.i = function (t) ***REMOVED***
      return e.writeSequenceNumber(t);
    }));
  }
  return (t.prototype.t = function (t) ***REMOVED***
    return (this.previousValue = Math.max(t, this.previousValue), this.previousValue);
  }, t.prototype.next = function () ***REMOVED***
    var t = ++this.previousValue;
    return (this.i && this.i(t), t);
  }, t);
})();
_.o = -1;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var E = ***REMOVED***
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success.*/
  OK: "ok",
  /** The operation was cancelled (typically by the caller).*/
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain.*/
  UNKNOWN: "unknown",
  /**
  * Client specified an invalid argument. Note that this differs from
  * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
  * problematic regardless of the state of the system (e.g., a malformed file
  * name).
  */
  INVALID_ARGUMENT: "invalid-argument",
  /**
  * Deadline expired before operation could complete. For operations that
  * change the state of the system, this error may be returned even if the
  * operation has completed successfully. For example, a successful response
  * from a server could have been delayed long enough for the deadline to
  * expire.
  */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found.*/
  NOT_FOUND: "not-found",
  /**
  * Some entity that we attempted to create (e.g., file or directory) already
  * exists.
  */
  ALREADY_EXISTS: "already-exists",
  /**
  * The caller does not have permission to execute the specified operation.
  * PERMISSION_DENIED must not be used for rejections caused by exhausting
  * some resource (use RESOURCE_EXHAUSTED instead for those errors).
  * PERMISSION_DENIED must not be used if the caller can not be identified
  * (use UNAUTHENTICATED instead for those errors).
  */
  PERMISSION_DENIED: "permission-denied",
  /**
  * The request does not have valid authentication credentials for the
  * operation.
  */
  UNAUTHENTICATED: "unauthenticated",
  /**
  * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
  * entire file system is out of space.
  */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
  * Operation was rejected because the system is not in a state required for
  * the operation's execution. For example, directory to be deleted may be
  * non-empty, an rmdir operation is applied to a non-directory, etc.
  *
  * A litmus test that may help a service implementor in deciding
  * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
  *  (a) Use UNAVAILABLE if the client can retry just the failing call.
  *  (b) Use ABORTED if the client should retry at a higher-level
  *      (e.g., restarting a read-modify-write sequence).
  *  (c) Use FAILED_PRECONDITION if the client should not retry until
  *      the system state has been explicitly fixed. E.g., if an "rmdir"
  *      fails because the directory is non-empty, FAILED_PRECONDITION
  *      should be returned since the client should not retry unless
  *      they have first fixed up the directory by deleting files from it.
  *  (d) Use FAILED_PRECONDITION if the client performs conditional
  *      REST Get/Update/Delete on a resource and the resource on the
  *      server does not match the condition. E.g., conflicting
  *      read-modify-write on the same resource.
  */
  FAILED_PRECONDITION: "failed-precondition",
  /**
  * The operation was aborted, typically due to a concurrency issue like
  * sequencer check failures, transaction aborts, etc.
  *
  * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
  * and UNAVAILABLE.
  */
  ABORTED: "aborted",
  /**
  * Operation was attempted past the valid range. E.g., seeking or reading
  * past end of file.
  *
  * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
  * if the system state changes. For example, a 32-bit file system will
  * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
  * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
  * an offset past the current file size.
  *
  * There is a fair bit of overlap between FAILED_PRECONDITION and
  * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
  * when it applies so that callers who are iterating through a space can
  * easily look for an OUT_OF_RANGE error to detect when they are done.
  */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service.*/
  UNIMPLEMENTED: "unimplemented",
  /**
  * Internal errors. Means some invariants expected by underlying System has
  * been broken. If you see one of these errors, Something is very broken.
  */
  INTERNAL: "internal",
  /**
  * The service is currently unavailable. This is a most likely a transient
  * condition and may be corrected by retrying with a backoff.
  *
  * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
  * and UNAVAILABLE.
  */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption.*/
  DATA_LOSS: "data-loss"
}, T = /** @class*/
(function (t) ***REMOVED***
  /** @hideconstructor*/
  function e(/**
  * The backend error code associated with this error.
  */
  e, /**
  * A custom error description.
  */
  n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, n) || this).code = e, r.message = n, /** The custom name for all FirestoreErrors.*/
    r.name = "FirebaseError", // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    r.toString = function () ***REMOVED***
      return r.name + ": [code=" + r.code + "]: " + r.message;
    }, r);
  }
  return (_tslib.__extends(e, t), e);
})(Error), S = new _firebaseLogger.Logger("@firebase/firestore");
/** An error returned by a Firestore operation.*/
// Helper methods are needed because variables can't be exported as read/write
function D() ***REMOVED***
  return S.logLevel;
}
/**
* Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
*
* @param logLevel - The verbosity you set for activity and error logging. Can
*   be any of the following values:
*
*   <ul>
*     <li>`debug` for the most verbose logging level, primarily for
*     debugging.</li>
*     <li>`error` to log errors only.</li>
*     <li><code>`silent` to turn off logging.</li>
*   </ul>
*/
function N(t) ***REMOVED***
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (S.logLevel <= _firebaseLogger.LogLevel.DEBUG) ***REMOVED***
    var r = e.map(x);
    S.debug.apply(S, _tslib.__spreadArray(["Firestore (8.4.0): " + t], r));
  }
}
function A(t) ***REMOVED***
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (S.logLevel <= _firebaseLogger.LogLevel.ERROR) ***REMOVED***
    var r = e.map(x);
    S.error.apply(S, _tslib.__spreadArray(["Firestore (8.4.0): " + t], r));
  }
}
function k(t) ***REMOVED***
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  if (S.logLevel <= _firebaseLogger.LogLevel.WARN) ***REMOVED***
    var r = e.map(x);
    S.warn.apply(S, _tslib.__spreadArray(["Firestore (8.4.0): " + t], r));
  }
}
/**
* Converts an additional log parameter to a string representation.
*/
function x(t) ***REMOVED***
  if ("string" == typeof t) return t;
  try ***REMOVED***
    return (e = t, JSON.stringify(e));
  } catch (e) ***REMOVED***
    // Converting to JSON failed, just log the object directly
    return t;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  /** Formats an object as a JSON string, suitable for logging.*/
  var e;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Unconditionally fails, throwing an Error with the given message.
* Messages are stripped in production builds.
*
* Returns `never` and can be used in expressions:
* @example
* let futureVar = fail('not implemented yet');
*/
function C(t) ***REMOVED***
  void 0 === t && (t = "Unexpected state");
  // Log the failure in addition to throw an exception, just in case the
  // exception is swallowed.
  var e = "FIRESTORE (8.4.0) INTERNAL ASSERTION FAILED: " + t;
  // NOTE: We don't use FirestoreError here because these are internal failures
  // that cannot be handled by the user. (Also it would create a circular
  // dependency between the error and assert modules which doesn't work.)
  throw (A(e), new Error(e));
}
function R(t, e) ***REMOVED***
  t || C();
}
/**
* Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
* instance of `T` before casting.
*/
function O(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
e) ***REMOVED***
  return t;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Generates `nBytes` of random bytes.
*
* If `nBytes < 0` , an error will be thrown.
*/
function L(t) ***REMOVED***
  // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
  var e = // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
  if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else // Falls back to Math.random
  for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var P = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***}
  return (t.u = function () ***REMOVED***
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""; // The largest byte value that is a multiple of `char.length`.
    n.length < 20; ) for (var r = L(40), i = 0; i < r.length; ++i) // Only accept values that are [0, maxMultiple), this ensures they can
    // be evenly mapped to indices of `chars` via a modulo operation.
    n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
    return n;
  }, t);
})();
function M(t, e) ***REMOVED***
  return t < e ? -1 : t > e ? 1 : 0;
}
/** Helper to compare arrays using isEqual().*/
function F(t, e, n) ***REMOVED***
  return t.length === e.length && t.every(function (t, r) ***REMOVED***
    return n(t, e[r]);
  });
}
/**
* Returns the immediate lexicographically-following string. This is useful to
* construct an inclusive range for indexeddb iterators.
*/
function V(t) ***REMOVED***
  // Return the input string, with an additional NUL byte appended.
  return t + "\0";
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
* A `Timestamp` represents a point in time independent of any time zone or
* calendar, represented as seconds and fractions of seconds at nanosecond
* resolution in UTC Epoch time.
*
* It is encoded using the Proleptic Gregorian Calendar which extends the
* Gregorian calendar backwards to year one. It is encoded assuming all minutes
* are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
* table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
* 9999-12-31T23:59:59.999999999Z.
*
* For examples and further specifications, refer to the
* ***REMOVED***@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
*/
var q = /** @class*/
(function () ***REMOVED***
  /**
  * Creates a new timestamp.
  *
  * @param seconds - The number of seconds of UTC time since Unix epoch
  *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
  *     9999-12-31T23:59:59Z inclusive.
  * @param nanoseconds - The non-negative fractions of a second at nanosecond
  *     resolution. Negative second values with fractions must still have
  *     non-negative nanoseconds values that count forward in time. Must be
  *     from 0 to 999,999,999 inclusive.
  */
  function t(/**
  * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
  */
  t, /**
  * The fractions of a second at nanosecond resolution.*
  */
  e) ***REMOVED***
    if ((this.seconds = t, this.nanoseconds = e, e < 0)) throw new T(E.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9) throw new T(E.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t < -62135596800) throw new T(E.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    // This will break in the year 10,000.
    if (t >= 253402300800) throw new T(E.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  /**
  * Creates a new timestamp with the current date, with millisecond precision.
  *
  * @returns a new timestamp representing the current date.
  */
  return (t.now = function () ***REMOVED***
    return t.fromMillis(Date.now());
  }, /**
  * Creates a new timestamp from the given date.
  *
  * @param date - The date to initialize the `Timestamp` from.
  * @returns A new `Timestamp` representing the same point in time as the given
  *     date.
  */
  t.fromDate = function (e) ***REMOVED***
    return t.fromMillis(e.getTime());
  }, /**
  * Creates a new timestamp from the given number of milliseconds.
  *
  * @param milliseconds - Number of milliseconds since Unix epoch
  *     1970-01-01T00:00:00Z.
  * @returns A new `Timestamp` representing the same point in time as the given
  *     number of milliseconds.
  */
  t.fromMillis = function (e) ***REMOVED***
    var n = Math.floor(e / 1e3);
    return new t(n, Math.floor(1e6 * (e - 1e3 * n)));
  }, /**
  * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
  * causes a loss of precision since `Date` objects only support millisecond
  * precision.
  *
  * @returns JavaScript `Date` object representing the same point in time as
  *     this `Timestamp`, with millisecond precision.
  */
  t.prototype.toDate = function () ***REMOVED***
    return new Date(this.toMillis());
  }, /**
  * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
  * epoch). This operation causes a loss of precision.
  *
  * @returns The point in time corresponding to this timestamp, represented as
  *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
  */
  t.prototype.toMillis = function () ***REMOVED***
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }, t.prototype._compareTo = function (t) ***REMOVED***
    return this.seconds === t.seconds ? M(this.nanoseconds, t.nanoseconds) : M(this.seconds, t.seconds);
  }, /**
  * Returns true if this `Timestamp` is equal to the provided one.
  *
  * @param other - The `Timestamp` to compare against.
  * @returns true if this `Timestamp` is equal to the provided one.
  */
  t.prototype.isEqual = function (t) ***REMOVED***
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }, /** Returns a textual representation of this Timestamp.*/
  t.prototype.toString = function () ***REMOVED***
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }, /** Returns a JSON-serializable representation of this Timestamp.*/
  t.prototype.toJSON = function () ***REMOVED***
    return ***REMOVED***
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    ***REMOVED***
  }, /**
  * Converts this object to a primitive string, which allows Timestamp objects
  * to be compared using the `>`, `<=`, `>=` and `>` operators.
  */
  t.prototype.valueOf = function () ***REMOVED***
    // This method returns a string of the form <seconds>.<nanoseconds> where
    // <seconds> is translated to have a non-negative value and both <seconds>
    // and <nanoseconds> are left-padded with zeroes to be a consistent length.
    // Strings with this format then have a lexiographical ordering that matches
    // the expected ordering. The <seconds> translation is done to avoid having
    // a leading negative sign (i.e. a leading '-' character) in its string
    // representation, which would affect its lexiographical ordering.
    var t = this.seconds - -62135596800;
    // Note: Up to 12 decimal digits are required to represent all valid
    // 'seconds' values.
    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }, t);
})(), U = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this.timestamp = t;
  }
  return (t.fromTimestamp = function (e) ***REMOVED***
    return new t(e);
  }, t.min = function () ***REMOVED***
    return new t(new q(0, 0));
  }, t.prototype.compareTo = function (t) ***REMOVED***
    return this.timestamp._compareTo(t.timestamp);
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return this.timestamp.isEqual(t.timestamp);
  }, /** Returns a number representation of the version for use in spec tests.*/
  t.prototype.toMicroseconds = function () ***REMOVED***
    // Convert to microseconds.
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }, t.prototype.toString = function () ***REMOVED***
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }, t.prototype.toTimestamp = function () ***REMOVED***
    return this.timestamp;
  }, t);
})();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A version of a document in Firestore. This corresponds to the version
* timestamp, such as update_time or read_time.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function B(t) ***REMOVED***
  var e = 0;
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function j(t, e) ***REMOVED***
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function K(t) ***REMOVED***
  for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Path represents an ordered sequence of string segments.
*/
var G = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (void 0 === e ? e = 0 : e > t.length && C(), void 0 === n ? n = t.length - e : n > t.length - e && C(), this.segments = t, this.offset = e, this.len = n);
  }
  return (Object.defineProperty(t.prototype, "length", ***REMOVED***
    get: function () ***REMOVED***
      return this.len;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (e) ***REMOVED***
    return 0 === t.comparator(this, e);
  }, t.prototype.child = function (e) ***REMOVED***
    var n = this.segments.slice(this.offset, this.limit());
    return (e instanceof t ? e.forEach(function (t) ***REMOVED***
      n.push(t);
    }) : n.push(e), this.construct(n));
  }, /** The index of one past the last segment of the path.*/
  t.prototype.limit = function () ***REMOVED***
    return this.offset + this.length;
  }, t.prototype.popFirst = function (t) ***REMOVED***
    return (t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t));
  }, t.prototype.popLast = function () ***REMOVED***
    return this.construct(this.segments, this.offset, this.length - 1);
  }, t.prototype.firstSegment = function () ***REMOVED***
    return this.segments[this.offset];
  }, t.prototype.lastSegment = function () ***REMOVED***
    return this.get(this.length - 1);
  }, t.prototype.get = function (t) ***REMOVED***
    return this.segments[this.offset + t];
  }, t.prototype.isEmpty = function () ***REMOVED***
    return 0 === this.length;
  }, t.prototype.isPrefixOf = function (t) ***REMOVED***
    if (t.length < this.length) return !1;
    for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }, t.prototype.isImmediateParentOf = function (t) ***REMOVED***
    if (this.length + 1 !== t.length) return !1;
    for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }, t.prototype.forEach = function (t) ***REMOVED***
    for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
  }, t.prototype.toArray = function () ***REMOVED***
    return this.segments.slice(this.offset, this.limit());
  }, t.comparator = function (t, e) ***REMOVED***
    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) ***REMOVED***
      var i = t.get(r), o = e.get(r);
      if (i < o) return -1;
      if (i > o) return 1;
    }
    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
  }, t);
})(), Q = /** @class*/
(function (t) ***REMOVED***
  function e() ***REMOVED***
    return null !== t && t.apply(this, arguments) || this;
  }
  return (_tslib.__extends(e, t), e.prototype.construct = function (t, n, r) ***REMOVED***
    return new e(t, n, r);
  }, e.prototype.canonicalString = function () ***REMOVED***
    // NOTE: The client is ignorant of any path segments containing escape
    // sequences (e.g. __id123__) and just passes them through raw (they exist
    // for legacy reasons and should not be used frequently).
    return this.toArray().join("/");
  }, e.prototype.toString = function () ***REMOVED***
    return this.canonicalString();
  }, /**
  * Creates a resource path from the given slash-delimited string. If multiple
  * arguments are provided, all components are combined. Leading and trailing
  * slashes from all components are ignored.
  */
  e.fromString = function () ***REMOVED***
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    // NOTE: The client is ignorant of any path segments containing escape
    // sequences (e.g. __id123__) and just passes them through raw (they exist
    // for legacy reasons and should not be used frequently).
    for (var r = [], i = 0, o = t; i < o.length; i++) ***REMOVED***
      var s = o[i];
      if (s.indexOf("//") >= 0) throw new T(E.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them.");
      // Strip leading and traling slashed.
      r.push.apply(r, s.split("/").filter(function (t) ***REMOVED***
        return t.length > 0;
      }));
    }
    return new e(r);
  }, e.emptyPath = function () ***REMOVED***
    return new e([]);
  }, e);
})(G), z = /^[_a-zA-Z][_a-zA-Z0-9]*$/, W = /** @class*/
(function (t) ***REMOVED***
  function e() ***REMOVED***
    return null !== t && t.apply(this, arguments) || this;
  }
  return (_tslib.__extends(e, t), e.prototype.construct = function (t, n, r) ***REMOVED***
    return new e(t, n, r);
  }, /**
  * Returns true if the string could be used as a segment in a field path
  * without escaping.
  */
  e.isValidIdentifier = function (t) ***REMOVED***
    return z.test(t);
  }, e.prototype.canonicalString = function () ***REMOVED***
    return this.toArray().map(function (t) ***REMOVED***
      return (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), e.isValidIdentifier(t) || (t = "`" + t + "`"), t);
    }).join(".");
  }, e.prototype.toString = function () ***REMOVED***
    return this.canonicalString();
  }, /**
  * Returns true if this field references the key of a document.
  */
  e.prototype.isKeyField = function () ***REMOVED***
    return 1 === this.length && "__name__" === this.get(0);
  }, /**
  * The field designating the key of a document.
  */
  e.keyField = function () ***REMOVED***
    return new e(["__name__"]);
  }, /**
  * Parses a field string from the given server-formatted string.
  *
  * - Splitting the empty string is not allowed (for now at least).
  * - Empty segments within the string (e.g. if there are two consecutive
  *   separators) are not allowed.
  *
  * TODO(b/37244157): we should make this more strict. Right now, it allows
  * non-identifier path components, even if they aren't escaped.
  */
  e.fromServerFormat = function (t) ***REMOVED***
    for (var n = [], r = "", i = 0, o = function () ***REMOVED***
      if (0 === r.length) throw new T(E.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      (n.push(r), r = "");
    }, s = !1; i < t.length; ) ***REMOVED***
      var u = t[i];
      if ("\\" === u) ***REMOVED***
        if (i + 1 === t.length) throw new T(E.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
        var a = t[i + 1];
        if ("\\" !== a && "." !== a && "`" !== a) throw new T(E.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
        (r += a, i += 2);
      } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
    }
    if ((o(), s)) throw new T(E.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new e(n);
  }, e.emptyPath = function () ***REMOVED***
    return new e([]);
  }, e);
})(G), H = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.fields = t, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    t.sort(W.comparator));
  }
  return (t.prototype.covers = function (t) ***REMOVED***
    for (var e = 0, n = this.fields; e < n.length; e++) ***REMOVED***
      if (n[e].isPrefixOf(t)) return !0;
    }
    return !1;
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return F(this.fields, t.fields, function (t, e) ***REMOVED***
      return t.isEqual(e);
    });
  }, t);
})(), Y = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this.binaryString = t;
  }
  return (t.fromBase64String = function (e) ***REMOVED***
    return new t(atob(e));
  }, t.fromUint8Array = function (e) ***REMOVED***
    return new t(/**
    * Helper function to convert an Uint8array to a binary string.
    */
    (function (t) ***REMOVED***
      for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
      return e;
    })(e));
  }, t.prototype.toBase64 = function () ***REMOVED***
    return (t = this.binaryString, btoa(t));
    /** Converts a binary string to a Base64 encoded string.*/
    var t;
  }, t.prototype.toUint8Array = function () ***REMOVED***
    return (function (t) ***REMOVED***
      for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
      return e;
    })(this.binaryString);
  }, t.prototype.approximateByteSize = function () ***REMOVED***
    return 2 * this.binaryString.length;
  }, t.prototype.compareTo = function (t) ***REMOVED***
    return M(this.binaryString, t.binaryString);
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return this.binaryString === t.binaryString;
  }, t);
})();
/**
* A slash-separated path for navigating resources (documents and collections)
* within Firestore.
*/
Y.EMPTY_BYTE_STRING = new Y("");
var X = new RegExp(/^\d***REMOVED***4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
* Converts the possible Proto values for a timestamp value into a "seconds and
* nanos" representation.
*/
function $(t) ***REMOVED***
  // The json interface (for the browser) will return an iso timestamp string,
  // while the proto js library (for node) will return a
  // google.protobuf.Timestamp instance.
  if ((R(!!t), "string" == typeof t)) ***REMOVED***
    // The date string can have higher precision (nanos) than the Date class
    // (millis), so we do some custom parsing here.
    // Parse the nanos right out of the string.
    var e = 0, n = X.exec(t);
    if ((R(!!n), n[1])) ***REMOVED***
      // Pad the fraction out to 9 digits (nanos).
      var r = n[1];
      (r = (r + "000000000").substr(0, 9), e = Number(r));
    }
    // Parse the date to get the seconds.
    var i = new Date(t);
    return ***REMOVED***
      seconds: Math.floor(i.getTime() / 1e3),
      nanos: e
    ***REMOVED***
  }
  return ***REMOVED***
    seconds: J(t.seconds),
    nanos: J(t.nanos)
  ***REMOVED***
}
/**
* Converts the possible Proto types for numbers into a JavaScript number.
* Returns 0 if the value is not numeric.
*/
function J(t) ***REMOVED***
  // TODO(bjornick): Handle int64 greater than 53 bits.
  return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}
/** Converts the possible Proto types for Blobs into a ByteString.*/
function Z(t) ***REMOVED***
  return "string" == typeof t ? Y.fromBase64String(t) : Y.fromUint8Array(t);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Represents a locally-applied ServerTimestamp.
*
* Server Timestamps are backed by MapValues that contain an internal field
* `__type__` with a value of `server_timestamp`. The previous value and local
* write time are stored in its `__previous_value__` and `__local_write_time__`
* fields respectively.
*
* Notes:
* - ServerTimestampValue instances are created as the result of applying a
*   transform. They can only exist in the local view of a document. Therefore
*   they do not need to be parsed or serialized.
* - When evaluated locally (e.g. for snapshot.data()), they by default
*   evaluate to `null`. This behavior can be configured by passing custom
*   FieldValueOptions to value().
* - With respect to other ServerTimestampValues, they sort by their
*   localWriteTime.
*/
function tt(t) ***REMOVED***
  var e, n;
  return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || (***REMOVED***})).__type__) || void 0 === n ? void 0 : n.stringValue);
}
/**
* Creates a new ServerTimestamp proto value (using the internal format).
*/
/**
* Returns the value of the field before this ServerTimestamp was set.
*
* Preserving the previous values allows the user to display the last resoled
* value until the backend responds with the timestamp.
*/
function et(t) ***REMOVED***
  var e = t.mapValue.fields.__previous_value__;
  return tt(e) ? et(e) : e;
}
/**
* Returns the local time at which this timestamp was first set.
*/
function nt(t) ***REMOVED***
  var e = $(t.mapValue.fields.__local_write_time__.timestampValue);
  return new q(e.seconds, e.nanos);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Sentinel value that sorts before any Mutation Batch ID.*/
/**
* Returns whether a variable is either undefined or null.
*/
function rt(t) ***REMOVED***
  return null == t;
}
/** Returns whether the value represents -0.*/
function it(t) ***REMOVED***
  // Detect if the value is -0.0. Based on polyfill from
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  return 0 === t && 1 / t == -1 / 0;
}
/**
* Returns whether a value is an integer and in the safe integer range
* @param value - The value to test for being an integer and in the safe range
*/
function ot(t) ***REMOVED***
  return "number" == typeof t && Number.isInteger(t) && !it(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var st = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this.path = t;
  }
  return (t.fromPath = function (e) ***REMOVED***
    return new t(Q.fromString(e));
  }, t.fromName = function (e) ***REMOVED***
    return new t(Q.fromString(e).popFirst(5));
  }, /** Returns true if the document is in the specified collectionId.*/
  t.prototype.hasCollectionId = function (t) ***REMOVED***
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return null !== t && 0 === Q.comparator(this.path, t.path);
  }, t.prototype.toString = function () ***REMOVED***
    return this.path.toString();
  }, t.comparator = function (t, e) ***REMOVED***
    return Q.comparator(t.path, e.path);
  }, t.isDocumentKey = function (t) ***REMOVED***
    return t.length % 2 == 0;
  }, /**
  * Creates and returns a new document key with the given segments.
  *
  * @param segments - The segments of the path to the document
  * @returns A new instance of DocumentKey
  */
  t.fromSegments = function (e) ***REMOVED***
    return new t(new Q(e.slice()));
  }, t);
})();
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Extracts the backend's type order for the provided value.*/
function ut(t) ***REMOVED***
  return ("nullValue" in t) ? 0 : /*NullValue*/
  ("booleanValue" in t) ? 1 : /*BooleanValue*/
  ("integerValue" in t) || ("doubleValue" in t) ? 2 : /*NumberValue*/
  ("timestampValue" in t) ? 3 : /*TimestampValue*/
  ("stringValue" in t) ? 5 : /*StringValue*/
  ("bytesValue" in t) ? 6 : /*BlobValue*/
  ("referenceValue" in t) ? 7 : /*RefValue*/
  ("geoPointValue" in t) ? 8 : /*GeoPointValue*/
  ("arrayValue" in t) ? 9 : /*ArrayValue*/
  ("mapValue" in t) ? tt(t) ? 4 : /*ServerTimestampValue*/
  10 : /*ObjectValue*/
  C();
}
/** Tests `left` and `right` for equality based on the backend semantics.*/
function at(t, e) ***REMOVED***
  var n = ut(t);
  if (n !== ut(e)) return !1;
  switch (n) ***REMOVED***
    case 0:
      /*NullValue*/
      return !0;
    case 1:
      /*BooleanValue*/
      return t.booleanValue === e.booleanValue;
    case 4:
      /*ServerTimestampValue*/
      return nt(t).isEqual(nt(e));
    case 3:
      /*TimestampValue*/
      return (function (t, e) ***REMOVED***
        if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) // Use string equality for ISO 8601 timestamps
        return t.timestampValue === e.timestampValue;
        var n = $(t.timestampValue), r = $(e.timestampValue);
        return n.seconds === r.seconds && n.nanos === r.nanos;
      })(t, e);
    case 5:
      /*StringValue*/
      return t.stringValue === e.stringValue;
    case 6:
      /*BlobValue*/
      return (function (t, e) ***REMOVED***
        return Z(t.bytesValue).isEqual(Z(e.bytesValue));
      })(t, e);
    case 7:
      /*RefValue*/
      return t.referenceValue === e.referenceValue;
    case 8:
      /*GeoPointValue*/
      return (function (t, e) ***REMOVED***
        return J(t.geoPointValue.latitude) === J(e.geoPointValue.latitude) && J(t.geoPointValue.longitude) === J(e.geoPointValue.longitude);
      })(t, e);
    case 2:
      /*NumberValue*/
      return (function (t, e) ***REMOVED***
        if (("integerValue" in t) && ("integerValue" in e)) return J(t.integerValue) === J(e.integerValue);
        if (("doubleValue" in t) && ("doubleValue" in e)) ***REMOVED***
          var n = J(t.doubleValue), r = J(e.doubleValue);
          return n === r ? it(n) === it(r) : isNaN(n) && isNaN(r);
        }
        return !1;
      })(t, e);
    case 9:
      /*ArrayValue*/
      return F(t.arrayValue.values || [], e.arrayValue.values || [], at);
    case 10:
      /*ObjectValue*/
      return (function (t, e) ***REMOVED***
        var n = t.mapValue.fields || (***REMOVED***}), r = e.mapValue.fields || (***REMOVED***});
        if (B(n) !== B(r)) return !1;
        for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !at(n[i], r[i]))) return !1;
        return !0;
      })(t, e);
    default:
      return C();
  }
}
function ct(t, e) ***REMOVED***
  return void 0 !== (t.values || []).find(function (t) ***REMOVED***
    return at(t, e);
  });
}
function ht(t, e) ***REMOVED***
  var n = ut(t), r = ut(e);
  if (n !== r) return M(n, r);
  switch (n) ***REMOVED***
    case 0:
      /*NullValue*/
      return 0;
    case 1:
      /*BooleanValue*/
      return M(t.booleanValue, e.booleanValue);
    case 2:
      /*NumberValue*/
      return (function (t, e) ***REMOVED***
        var n = J(t.integerValue || t.doubleValue), r = J(e.integerValue || e.doubleValue);
        return n < r ? -1 : n > r ? 1 : n === r ? 0 : // one or both are NaN.
        isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
      })(t, e);
    case 3:
      /*TimestampValue*/
      return ft(t.timestampValue, e.timestampValue);
    case 4:
      /*ServerTimestampValue*/
      return ft(nt(t), nt(e));
    case 5:
      /*StringValue*/
      return M(t.stringValue, e.stringValue);
    case 6:
      /*BlobValue*/
      return (function (t, e) ***REMOVED***
        var n = Z(t), r = Z(e);
        return n.compareTo(r);
      })(t.bytesValue, e.bytesValue);
    case 7:
      /*RefValue*/
      return (function (t, e) ***REMOVED***
        for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) ***REMOVED***
          var o = M(n[i], r[i]);
          if (0 !== o) return o;
        }
        return M(n.length, r.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      /*GeoPointValue*/
      return (function (t, e) ***REMOVED***
        var n = M(J(t.latitude), J(e.latitude));
        return 0 !== n ? n : M(J(t.longitude), J(e.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      /*ArrayValue*/
      return (function (t, e) ***REMOVED***
        for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) ***REMOVED***
          var o = ht(n[i], r[i]);
          if (o) return o;
        }
        return M(n.length, r.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      /*ObjectValue*/
      return (function (t, e) ***REMOVED***
        var n = t.fields || (***REMOVED***}), r = Object.keys(n), i = e.fields || (***REMOVED***}), o = Object.keys(i);
        // Even though MapValues are likely sorted correctly based on their insertion
        // order (e.g. when received from the backend), local modifications can bring
        // elements out of order. We need to re-sort the elements to ensure that
        // canonical IDs are independent of insertion order.
        (r.sort(), o.sort());
        for (var s = 0; s < r.length && s < o.length; ++s) ***REMOVED***
          var u = M(r[s], o[s]);
          if (0 !== u) return u;
          var a = ht(n[r[s]], i[o[s]]);
          if (0 !== a) return a;
        }
        return M(r.length, o.length);
      })(t.mapValue, e.mapValue);
    default:
      throw C();
  }
}
function ft(t, e) ***REMOVED***
  if ("string" == typeof t && "string" == typeof e && t.length === e.length) return M(t, e);
  var n = $(t), r = $(e), i = M(n.seconds, r.seconds);
  return 0 !== i ? i : M(n.nanos, r.nanos);
}
function lt(t) ***REMOVED***
  return dt(t);
}
function dt(t) ***REMOVED***
  return ("nullValue" in t) ? "null" : ("booleanValue" in t) ? "" + t.booleanValue : ("integerValue" in t) ? "" + t.integerValue : ("doubleValue" in t) ? "" + t.doubleValue : ("timestampValue" in t) ? (function (t) ***REMOVED***
    var e = $(t);
    return "time(" + e.seconds + "," + e.nanos + ")";
  })(t.timestampValue) : ("stringValue" in t) ? t.stringValue : ("bytesValue" in t) ? Z(t.bytesValue).toBase64() : ("referenceValue" in t) ? (n = t.referenceValue, st.fromName(n).toString()) : ("geoPointValue" in t) ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : ("arrayValue" in t) ? (function (t) ***REMOVED***
    for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) ***REMOVED***
      (n ? n = !1 : e += ",", e += dt(i[r]));
    }
    return e + "]";
  })(t.arrayValue) : ("mapValue" in t) ? (function (t) ***REMOVED***
    for (var e = "***REMOVED***", n = !0, r = 0, i = Object.keys(t.fields || (***REMOVED***})).sort(); r < i.length; r++) ***REMOVED***
      var o = i[r];
      (n ? n = !1 : e += ",", e += o + ":" + dt(t.fields[o]));
    }
    return e + "}";
  })(t.mapValue) : C();
  var e, n;
}
function pt(t, e) ***REMOVED***
  return ***REMOVED***
    referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.canonicalString()
  ***REMOVED***
}
/** Returns true if `value` is an IntegerValue .*/
function yt(t) ***REMOVED***
  return !!t && ("integerValue" in t);
}
/** Returns true if `value` is a DoubleValue.*/
/** Returns true if `value` is an ArrayValue.*/
function vt(t) ***REMOVED***
  return !!t && ("arrayValue" in t);
}
/** Returns true if `value` is a NullValue.*/
function mt(t) ***REMOVED***
  return !!t && ("nullValue" in t);
}
/** Returns true if `value` is NaN.*/
function gt(t) ***REMOVED***
  return !!t && ("doubleValue" in t) && isNaN(Number(t.doubleValue));
}
/** Returns true if `value` is a MapValue.*/
function wt(t) ***REMOVED***
  return !!t && ("mapValue" in t);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An ObjectValue represents a MapValue in the Firestore Proto and offers the
* ability to add and remove fields (via the ObjectValueBuilder).
*/
var bt = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    /**
    * A nested map that contains the accumulated changes that haven't yet been
    * applied to `partialValue`. Values can either be `Value` protos, Map<String,
    * Object> values (to represent additional nesting) or `null` (to represent
    * field deletes).
    */
    (this.overlayMap = new Map(), this.partialValue = t);
  }
  return (t.empty = function () ***REMOVED***
    return new t(***REMOVED***
      mapValue: ***REMOVED***}
    });
  }, /**
  * Returns the value at the given path or null.
  *
  * @param path - the path to search
  * @returns The value at the path or null if the path is not set.
  */
  t.prototype.field = function (e) ***REMOVED***
    return t.extractNestedValue(this.buildProto(), e);
  }, /** Returns the full protobuf representation.*/
  t.prototype.toProto = function () ***REMOVED***
    return this.field(W.emptyPath());
  }, /**
  * Sets the field to the provided value.
  *
  * @param path - The field path to set.
  * @param value - The value to set.
  */
  t.prototype.set = function (t, e) ***REMOVED***
    this.setOverlay(t, e);
  }, /**
  * Sets the provided fields to the provided values.
  *
  * @param data - A map of fields to values (or null for deletes).
  */
  t.prototype.setAll = function (t) ***REMOVED***
    var e = this;
    t.forEach(function (t, n) ***REMOVED***
      t ? e.set(n, t) : e.delete(n);
    });
  }, /**
  * Removes the field at the specified path. If there is no field at the
  * specified path, nothing is changed.
  *
  * @param path - The field path to remove.
  */
  t.prototype.delete = function (t) ***REMOVED***
    this.setOverlay(t, null);
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return at(this.buildProto(), t.buildProto());
  }, /**
  * Adds `value` to the overlay map at `path`. Creates nested map entries if
  * needed.
  */
  t.prototype.setOverlay = function (t, e) ***REMOVED***
    for (var n = this.overlayMap, r = 0; r < t.length - 1; ++r) ***REMOVED***
      var i = t.get(r), o = n.get(i);
      o instanceof Map ? // Re-use a previously created map
      n = o : o && 10 === /*ObjectValue*/
      ut(o) ? // Convert the existing Protobuf MapValue into a map
      (o = new Map(Object.entries(o.mapValue.fields || (***REMOVED***}))), n.set(i, o), n = o) : // Create an empty map to represent the current nesting level
      (o = new Map(), n.set(i, o), n = o);
    }
    n.set(t.lastSegment(), e);
  }, /**
  * Applies any overlays from `currentOverlays` that exist at `currentPath`
  * and returns the merged data at `currentPath` (or null if there were no
  * changes).
  *
  * @param currentPath - The path at the current nesting level. Can be set to
  * FieldValue.emptyPath() to represent the root.
  * @param currentOverlays - The overlays at the current nesting level in the
  * same format as `overlayMap`.
  * @returns The merged data at `currentPath` or null if no modifications
  * were applied.
  */
  t.prototype.applyOverlay = function (e, n) ***REMOVED***
    var r = this, i = !1, o = t.extractNestedValue(this.partialValue, e), s = wt(o) ? // If there is already data at the current path, base our
    Object.assign(***REMOVED***}, o.mapValue.fields) : ***REMOVED******REMOVED***
    return (n.forEach(function (t, n) ***REMOVED***
      if (t instanceof Map) ***REMOVED***
        var o = r.applyOverlay(e.child(n), t);
        null != o && (s[n] = o, i = !0);
      } else null !== t ? (s[n] = t, i = !0) : s.hasOwnProperty(n) && (delete s[n], i = !0);
    }), i ? ***REMOVED***
      mapValue: ***REMOVED***
        fields: s
      }
    } : null);
  }, /**
  * Builds the Protobuf that backs this ObjectValue.
  *
  * This method applies any outstanding modifications and memoizes the result.
  * Further invocations are based on this memoized result.
  */
  t.prototype.buildProto = function () ***REMOVED***
    var t = this.applyOverlay(W.emptyPath(), this.overlayMap);
    return (null != t && (this.partialValue = t, this.overlayMap.clear()), this.partialValue);
  }, t.extractNestedValue = function (t, e) ***REMOVED***
    if (e.isEmpty()) return t;
    for (var n = t, r = 0; r < e.length - 1; ++r) ***REMOVED***
      if (!n.mapValue.fields) return null;
      if (!wt(n = n.mapValue.fields[e.get(r)])) return null;
    }
    return (n = (n.mapValue.fields || (***REMOVED***}))[e.lastSegment()]) || null;
  }, t.prototype.clone = function () ***REMOVED***
    return new t(this.buildProto());
  }, t);
})();
/**
* Returns a FieldMask built from all fields in a MapValue.
*/
function It(t) ***REMOVED***
  var e = [];
  return (j(t.fields || (***REMOVED***}), function (t, n) ***REMOVED***
    var r = new W([t]);
    if (wt(n)) ***REMOVED***
      var i = It(n.mapValue).fields;
      if (0 === i.length) // Preserve the empty map by adding it to the FieldMask.
      e.push(r); else // For nested and non-empty ObjectValues, add the FieldPath of the
      // leaf nodes.
      for (var o = 0, s = i; o < s.length; o++) ***REMOVED***
        var u = s[o];
        e.push(r.child(u));
      }
    } else // For nested and non-empty ObjectValues, add the FieldPath of the leaf
    // nodes.
    e.push(r);
  }), new H(e));
}
var _t = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, r, i) ***REMOVED***
    (this.key = t, this.documentType = e, this.version = n, this.data = r, this.documentState = i);
  }
  return (t.newInvalidDocument = function (e) ***REMOVED***
    return new t(e, 0, /*INVALID*/
    U.min(), bt.empty(), 0);
  }, /**
  * Creates a new document that is known to exist with the given data at the
  * given version.
  */
  t.newFoundDocument = function (e, n, r) ***REMOVED***
    return new t(e, 1, /*FOUND_DOCUMENT*/
    n, r, 0);
  }, /** Creates a new document that is known to not exist at the given version.*/
  t.newNoDocument = function (e, n) ***REMOVED***
    return new t(e, 2, /*NO_DOCUMENT*/
    n, bt.empty(), 0);
  }, /**
  * Creates a new document that is known to exist at the given version but
  * whose data is not known (e.g. a document that was updated without a known
  * base document).
  */
  t.newUnknownDocument = function (e, n) ***REMOVED***
    return new t(e, 3, /*UNKNOWN_DOCUMENT*/
    n, bt.empty(), 2);
  }, /**
  * Changes the document type to indicate that it exists and that its version
  * and data are known.
  */
  t.prototype.convertToFoundDocument = function (t, e) ***REMOVED***
    return (this.version = t, this.documentType = 1, /*FOUND_DOCUMENT*/
    this.data = e, this.documentState = 0, /*SYNCED*/
    this);
  }, /**
  * Changes the document type to indicate that it doesn't exist at the given
  * version.
  */
  t.prototype.convertToNoDocument = function (t) ***REMOVED***
    return (this.version = t, this.documentType = 2, /*NO_DOCUMENT*/
    this.data = bt.empty(), this.documentState = 0, /*SYNCED*/
    this);
  }, /**
  * Changes the document type to indicate that it exists at a given version but
  * that its data is not known (e.g. a document that was updated without a known
  * base document).
  */
  t.prototype.convertToUnknownDocument = function (t) ***REMOVED***
    return (this.version = t, this.documentType = 3, /*UNKNOWN_DOCUMENT*/
    this.data = bt.empty(), this.documentState = 2, /*HAS_COMMITTED_MUTATIONS*/
    this);
  }, t.prototype.setHasCommittedMutations = function () ***REMOVED***
    return (this.documentState = 2, /*HAS_COMMITTED_MUTATIONS*/
    this);
  }, t.prototype.setHasLocalMutations = function () ***REMOVED***
    return (this.documentState = 1, /*HAS_LOCAL_MUTATIONS*/
    this);
  }, Object.defineProperty(t.prototype, "hasLocalMutations", ***REMOVED***
    get: function () ***REMOVED***
      return 1 === /*HAS_LOCAL_MUTATIONS*/
      this.documentState;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "hasCommittedMutations", ***REMOVED***
    get: function () ***REMOVED***
      return 2 === /*HAS_COMMITTED_MUTATIONS*/
      this.documentState;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "hasPendingWrites", ***REMOVED***
    get: function () ***REMOVED***
      return this.hasLocalMutations || this.hasCommittedMutations;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isValidDocument = function () ***REMOVED***
    return 0 !== /*INVALID*/
    this.documentType;
  }, t.prototype.isFoundDocument = function () ***REMOVED***
    return 1 === /*FOUND_DOCUMENT*/
    this.documentType;
  }, t.prototype.isNoDocument = function () ***REMOVED***
    return 2 === /*NO_DOCUMENT*/
    this.documentType;
  }, t.prototype.isUnknownDocument = function () ***REMOVED***
    return 3 === /*UNKNOWN_DOCUMENT*/
    this.documentType;
  }, t.prototype.isEqual = function (e) ***REMOVED***
    return e instanceof t && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
  }, t.prototype.clone = function () ***REMOVED***
    return new t(this.key, this.documentType, this.version, this.data.clone(), this.documentState);
  }, t.prototype.toString = function () ***REMOVED***
    return "Document(" + this.key + ", " + this.version + ", " + JSON.stringify(this.data.toProto()) + ", ***REMOVED***documentType: " + this.documentType + "}), ***REMOVED***documentState: " + this.documentState + "})";
  }, t);
})(), Et = function (t, e, n, r, i, o, s) ***REMOVED***
  (void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.h = null);
***REMOVED***
/**
* Compares the value for field `field` in the provided documents. Throws if
* the field does not exist in both documents.
*/
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// Visible for testing
/**
* Initializes a Target with a path and optional additional query constraints.
* Path must currently be empty if this is a collection group query.
*
* NOTE: you should always construct `Target` from `Query.toTarget` instead of
* using this factory method, because `Query` provides an implicit `orderBy`
* property.
*/
function Tt(t, e, n, r, i, o, s) ***REMOVED***
  return (void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), new Et(t, e, n, r, i, o, s));
}
function St(t) ***REMOVED***
  var e = O(t);
  if (null === e.h) ***REMOVED***
    var n = e.path.canonicalString();
    (null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(function (t) ***REMOVED***
      return (function (t) ***REMOVED***
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return t.field.canonicalString() + t.op.toString() + lt(t.value);
      })(t);
    }).join(","), n += "|ob:", n += e.orderBy.map(function (t) ***REMOVED***
      return (function (t) ***REMOVED***
        // TODO(b/29183165): Make this collision robust.
        return t.field.canonicalString() + t.dir;
      })(t);
    }).join(","), rt(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += Vt(e.startAt)), e.endAt && (n += "|ub:", n += Vt(e.endAt)), e.h = n);
  }
  return e.h;
}
function Dt(t, e) ***REMOVED***
  if (t.limit !== e.limit) return !1;
  if (t.orderBy.length !== e.orderBy.length) return !1;
  for (var n = 0; n < t.orderBy.length; n++) if (!Ut(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (var r = 0; r < t.filters.length; r++) if ((i = t.filters[r], o = e.filters[r], i.op !== o.op || !i.field.isEqual(o.field) || !at(i.value, o.value))) return !1;
  var i, o;
  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!jt(t.startAt, e.startAt) && jt(t.endAt, e.endAt);
}
function Nt(t) ***REMOVED***
  return st.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}
var At = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r) ***REMOVED***
    var i = this;
    return ((i = t.call(this) || this).field = e, i.op = n, i.value = r, i);
  }
  /**
  * Creates a filter based on the provided arguments.
  */
  return (_tslib.__extends(e, t), e.create = function (t, n, r) ***REMOVED***
    return t.isKeyField() ? "in" === /*IN*/
    n || "not-in" === /*NOT_IN*/
    n ? this.l(t, n, r) : new kt(t, n, r) : "array-contains" === /*ARRAY_CONTAINS*/
    n ? new Ot(t, r) : "in" === /*IN*/
    n ? new Lt(t, r) : "not-in" === /*NOT_IN*/
    n ? new Pt(t, r) : "array-contains-any" === /*ARRAY_CONTAINS_ANY*/
    n ? new Mt(t, r) : new e(t, n, r);
  }, e.l = function (t, e, n) ***REMOVED***
    return "in" === /*IN*/
    e ? new xt(t, n) : new Ct(t, n);
  }, e.prototype.matches = function (t) ***REMOVED***
    var e = t.data.field(this.field);
    // Types do not have to match in NOT_EQUAL filters.
    return "!=" === /*NOT_EQUAL*/
    this.op ? null !== e && this.m(ht(e, this.value)) : null !== e && ut(this.value) === ut(e) && this.m(ht(e, this.value));
  }, e.prototype.m = function (t) ***REMOVED***
    switch (this.op) ***REMOVED***
      case "<":
        /*LESS_THAN*/
        return t < 0;
      case "<=":
        /*LESS_THAN_OR_EQUAL*/
        return t <= 0;
      case "==":
        /*EQUAL*/
        return 0 === t;
      case "!=":
        /*NOT_EQUAL*/
        return 0 !== t;
      case ">":
        /*GREATER_THAN*/
        return t > 0;
      case ">=":
        /*GREATER_THAN_OR_EQUAL*/
        return t >= 0;
      default:
        return C();
    }
  }, e.prototype.g = function () ***REMOVED***
    return ["<", /*LESS_THAN*/
    "<=", /*LESS_THAN*/
    /*LESS_THAN_OR_EQUAL*/
    ">", /*LESS_THAN*/
    /*LESS_THAN_OR_EQUAL*/
    /*GREATER_THAN*/
    ">=", /*LESS_THAN*/
    /*LESS_THAN_OR_EQUAL*/
    /*GREATER_THAN*/
    /*GREATER_THAN_OR_EQUAL*/
    "!=", /*LESS_THAN*/
    /*LESS_THAN_OR_EQUAL*/
    /*GREATER_THAN*/
    /*GREATER_THAN_OR_EQUAL*/
    /*NOT_EQUAL*/
    "not-in"].indexOf(this.op) >= 0;
  }, e);
})(function () ***REMOVED***});
var kt = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r) ***REMOVED***
    var i = this;
    return ((i = t.call(this, e, n, r) || this).key = st.fromName(r.referenceValue), i);
  }
  return (_tslib.__extends(e, t), e.prototype.matches = function (t) ***REMOVED***
    var e = st.comparator(t.key, this.key);
    return this.m(e);
  }, e);
})(At), xt = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, e, "in", /*IN*/
    n) || this).keys = Rt("in", /*IN*/
    n), r);
  }
  return (_tslib.__extends(e, t), e.prototype.matches = function (t) ***REMOVED***
    return this.keys.some(function (e) ***REMOVED***
      return e.isEqual(t.key);
    });
  }, e);
})(At), Ct = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, e, "not-in", /*NOT_IN*/
    n) || this).keys = Rt("not-in", /*NOT_IN*/
    n), r);
  }
  return (_tslib.__extends(e, t), e.prototype.matches = function (t) ***REMOVED***
    return !this.keys.some(function (e) ***REMOVED***
      return e.isEqual(t.key);
    });
  }, e);
})(At);
/** Filter that matches on key fields within an array.*/
function Rt(t, e) ***REMOVED***
  var n;
  return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map(function (t) ***REMOVED***
    return st.fromName(t.referenceValue);
  });
}
/** A Filter that implements the array-contains operator.*/
var Ot = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    return t.call(this, e, "array-contains", /*ARRAY_CONTAINS*/
    n) || this;
  }
  return (_tslib.__extends(e, t), e.prototype.matches = function (t) ***REMOVED***
    var e = t.data.field(this.field);
    return vt(e) && ct(e.arrayValue, this.value);
  }, e);
})(At), Lt = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    return t.call(this, e, "in", /*IN*/
    n) || this;
  }
  return (_tslib.__extends(e, t), e.prototype.matches = function (t) ***REMOVED***
    var e = t.data.field(this.field);
    return null !== e && ct(this.value.arrayValue, e);
  }, e);
})(At), Pt = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    return t.call(this, e, "not-in", /*NOT_IN*/
    n) || this;
  }
  return (_tslib.__extends(e, t), e.prototype.matches = function (t) ***REMOVED***
    if (ct(this.value.arrayValue, ***REMOVED***
      nullValue: "NULL_VALUE"
    })) return !1;
    var e = t.data.field(this.field);
    return null !== e && !ct(this.value.arrayValue, e);
  }, e);
})(At), Mt = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    return t.call(this, e, "array-contains-any", /*ARRAY_CONTAINS_ANY*/
    n) || this;
  }
  return (_tslib.__extends(e, t), e.prototype.matches = function (t) ***REMOVED***
    var e = this, n = t.data.field(this.field);
    return !(!vt(n) || !n.arrayValue.values) && n.arrayValue.values.some(function (t) ***REMOVED***
      return ct(e.value.arrayValue, t);
    });
  }, e);
})(At), Ft = function (t, e) ***REMOVED***
  (this.position = t, this.before = e);
***REMOVED***
/** A Filter that implements the IN operator.*/
function Vt(t) ***REMOVED***
  // TODO(b/29183165): Make this collision robust.
  return (t.before ? "b" : "a") + ":" + t.position.map(function (t) ***REMOVED***
    return lt(t);
  }).join(",");
}
/**
* An ordering on a field, in some Direction. Direction defaults to ASCENDING.
*/
var qt = function (t, e) /*ASCENDING*/
***REMOVED***
  (void 0 === e && (e = "asc"), this.field = t, this.dir = e);
***REMOVED***
function Ut(t, e) ***REMOVED***
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
* Returns true if a document sorts before a bound using the provided sort
* order.
*/
function Bt(t, e, n) ***REMOVED***
  for (var r = 0, i = 0; i < t.position.length; i++) ***REMOVED***
    var o = e[i], s = t.position[i];
    if ((r = o.field.isKeyField() ? st.comparator(st.fromName(s.referenceValue), n.key) : ht(s, n.data.field(o.field)), "desc" === /*DESCENDING*/
    o.dir && (r *= -1), 0 !== r)) break;
  }
  return t.before ? r <= 0 : r < 0;
}
function jt(t, e) ***REMOVED***
  if (null === t) return null === e;
  if (null === e) return !1;
  if (t.before !== e.before || t.position.length !== e.position.length) return !1;
  for (var n = 0; n < t.position.length; n++) if (!at(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Query encapsulates all the query attributes we support in the SDK. It can
* be run against the LocalStore, as well as be converted to a `Target` to
* query the RemoteStore results.
*
* Visible for testing.
*/
var Kt = /**
* Initializes a Query with a path and optional additional query constraints.
* Path must currently be empty if this is a collection group query.
*/
function (t, e, n, r, i, o, /*First*/
s, u) ***REMOVED***
  (void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = o, this.startAt = s, this.endAt = u, this.p = null, // The corresponding `Target` of this `Query` instance.
  this.T = null, this.startAt, this.endAt);
***REMOVED***
/** Creates a new Query instance with the options provided.*/
function Gt(t, e, n, r, i, o, s, u) ***REMOVED***
  return new Kt(t, e, n, r, i, o, s, u);
}
/** Creates a new Query for a query that matches all documents at `path`*/
function Qt(t) ***REMOVED***
  return new Kt(t);
}
/**
* Helper to convert a collection group query into a collection query at a
* specific path. This is used when executing collection group queries, since
* we have to split the query into a set of collection queries at multiple
* paths.
*/
function zt(t) ***REMOVED***
  return !rt(t.limit) && "F" === /*First*/
  t.limitType;
}
function Wt(t) ***REMOVED***
  return !rt(t.limit) && "L" === /*Last*/
  t.limitType;
}
function Ht(t) ***REMOVED***
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function Yt(t) ***REMOVED***
  for (var e = 0, n = t.filters; e < n.length; e++) ***REMOVED***
    var r = n[e];
    if (r.g()) return r.field;
  }
  return null;
}
/**
* Checks if any of the provided Operators are included in the query and
* returns the first one that is, or null if none are.
*/
/**
* Returns whether the query matches a collection group rather than a specific
* collection.
*/
function Xt(t) ***REMOVED***
  return null !== t.collectionGroup;
}
/**
* Returns the implicit order by constraint that is used to execute the Query,
* which can be different from the order by constraints the user provided (e.g.
* the SDK and backend always orders by `__name__`).
*/
function $t(t) ***REMOVED***
  var e = O(t);
  if (null === e.p) ***REMOVED***
    e.p = [];
    var n = Yt(e), r = Ht(e);
    if (null !== n && null === r) // In order to implicitly add key ordering, we must also add the
    // inequality filter field for it to be a valid query.
    // Note that the default inequality field and key ordering is ascending.
    (n.isKeyField() || e.p.push(new qt(n)), e.p.push(new qt(W.keyField(), "asc"))); else ***REMOVED***
      for (var i = !1, o = 0, s = e.explicitOrderBy; o < s.length; o++) ***REMOVED***
        var u = s[o];
        (e.p.push(u), u.field.isKeyField() && (i = !0));
      }
      if (!i) ***REMOVED***
        // The order of the implicit key ordering always matches the last
        // explicit order by
        var a = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc";
        e.p.push(new qt(W.keyField(), a));
      }
    }
  }
  return e.p;
}
/**
* Converts this `Query` instance to it's corresponding `Target` representation.
*/
function Jt(t) ***REMOVED***
  var e = O(t);
  if (!e.T) if ("F" === /*First*/
  e.limitType) e.T = Tt(e.path, e.collectionGroup, $t(e), e.filters, e.limit, e.startAt, e.endAt); else ***REMOVED***
    for (var n = [], r = 0, i = $t(e); r < i.length; r++) ***REMOVED***
      var o = i[r], s = "desc" === /*DESCENDING*/
      o.dir ? "asc" : /*ASCENDING*/
      "desc";
      n.push(new qt(o.field, s));
    }
    // We need to swap the cursors to match the now-flipped query ordering.
    var u = e.endAt ? new Ft(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new Ft(e.startAt.position, !e.startAt.before) : null;
    // Now return as a LimitType.First query.
    e.T = Tt(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
  }
  return e.T;
}
function Zt(t, e, n) ***REMOVED***
  return new Kt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}
function te(t, e) ***REMOVED***
  return Dt(Jt(t), Jt(e)) && t.limitType === e.limitType;
}
// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function ee(t) ***REMOVED***
  return St(Jt(t)) + "|lt:" + t.limitType;
}
function ne(t) ***REMOVED***
  return "Query(target=" + (function (t) ***REMOVED***
    var e = t.path.canonicalString();
    return (null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map(function (t) ***REMOVED***
      return (e = t).field.canonicalString() + " " + e.op + " " + lt(e.value);
      /** Returns a debug description for `filter`.*/
      var e;
    }).join(", ") + "]"), rt(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map(function (t) ***REMOVED***
      return (function (t) ***REMOVED***
        return t.field.canonicalString() + " (" + t.dir + ")";
      })(t);
    }).join(", ") + "]"), t.startAt && (e += ", startAt: " + Vt(t.startAt)), t.endAt && (e += ", endAt: " + Vt(t.endAt)), "Target(" + e + ")");
  })(Jt(t)) + "; limitType=" + t.limitType + ")";
}
/** Returns whether `doc` matches the constraints of `query`.*/
function re(t, e) ***REMOVED***
  return e.isFoundDocument() && (function (t, e) ***REMOVED***
    var n = e.key.path;
    return null !== t.collectionGroup ? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n) : st.isDocumentKey(t.path) ? t.path.isEqual(n) : t.path.isImmediateParentOf(n);
  })(t, e) && (function (t, e) ***REMOVED***
    for (var n = 0, r = t.explicitOrderBy; n < r.length; n++) ***REMOVED***
      var i = r[n];
      // order by key always matches
      if (!i.field.isKeyField() && null === e.data.field(i.field)) return !1;
    }
    return !0;
  })(t, e) && (function (t, e) ***REMOVED***
    for (var n = 0, r = t.filters; n < r.length; n++) ***REMOVED***
      if (!r[n].matches(e)) return !1;
    }
    return !0;
  })(t, e) && (function (t, e) ***REMOVED***
    return !(t.startAt && !Bt(t.startAt, $t(t), e)) && (!t.endAt || !Bt(t.endAt, $t(t), e));
  })(t, e);
}
function ie(t) ***REMOVED***
  return function (e, n) ***REMOVED***
    for (var r = !1, i = 0, o = $t(t); i < o.length; i++) ***REMOVED***
      var s = o[i], u = oe(s, e, n);
      if (0 !== u) return u;
      r = r || s.field.isKeyField();
    }
    return 0;
  ***REMOVED***
}
function oe(t, e, n) ***REMOVED***
  var r = t.field.isKeyField() ? st.comparator(e.key, n.key) : (function (t, e, n) ***REMOVED***
    var r = e.data.field(t), i = n.data.field(t);
    return null !== r && null !== i ? ht(r, i) : C();
  })(t.field, e, n);
  switch (t.dir) ***REMOVED***
    case "asc":
      /*ASCENDING*/
      return r;
    case "desc":
      /*DESCENDING*/
      return -1 * r;
    default:
      return C();
  }
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Returns an DoubleValue for `value` that is encoded based the serializer's
* `useProto3Json` setting.
*/
function se(t, e) ***REMOVED***
  if (t.I) ***REMOVED***
    if (isNaN(e)) return ***REMOVED***
      doubleValue: "NaN"
    ***REMOVED***
    if (e === 1 / 0) return ***REMOVED***
      doubleValue: "Infinity"
    ***REMOVED***
    if (e === -1 / 0) return ***REMOVED***
      doubleValue: "-Infinity"
    ***REMOVED***
  }
  return ***REMOVED***
    doubleValue: it(e) ? "-0" : e
  ***REMOVED***
}
/**
* Returns an IntegerValue for `value`.
*/
function ue(t) ***REMOVED***
  return ***REMOVED***
    integerValue: "" + t
  ***REMOVED***
}
/**
* Returns a value for a number that's appropriate to put into a proto.
* The return value is an IntegerValue if it can safely represent the value,
* otherwise a DoubleValue is returned.
*/
function ae(t, e) ***REMOVED***
  return ot(e) ? ue(e) : se(t, e);
}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Used to represent a field transform on a mutation.*/
var ce = function () ***REMOVED***
  // Make sure that the structural type of `TransformOperation` is unique.
  // See https://github.com/microsoft/TypeScript/issues/5451
  this._ = void 0;
***REMOVED***
/**
* Computes the local transform result against the provided `previousValue`,
* optionally using the provided localWriteTime.
*/
function he(t, e, n) ***REMOVED***
  return t instanceof de ? (function (t, e) ***REMOVED***
    var n = ***REMOVED***
      fields: ***REMOVED***
        __type__: ***REMOVED***
          stringValue: "server_timestamp"
        },
        __local_write_time__: ***REMOVED***
          timestampValue: ***REMOVED***
            seconds: t.seconds,
            nanos: t.nanoseconds
          }
        }
      }
    ***REMOVED***
    return (e && (n.fields.__previous_value__ = e), ***REMOVED***
      mapValue: n
    });
  })(n, e) : t instanceof pe ? ye(t, e) : t instanceof ve ? me(t, e) : (function (t, e) ***REMOVED***
    // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
    // precision and resolves overflows by reducing precision, we do not
    // manually cap overflows at 2^63.
    var n = le(t, e), r = we(n) + we(t.A);
    return yt(n) && yt(t.A) ? ue(r) : se(t.R, r);
  })(t, e);
}
/**
* Computes a final transform result after the transform has been acknowledged
* by the server, potentially using the server-provided transformResult.
*/
function fe(t, e, n) ***REMOVED***
  // The server just sends null as the transform result for array operations,
  // so we have to calculate a result the same as we do for local
  // applications.
  return t instanceof pe ? ye(t, e) : t instanceof ve ? me(t, e) : n;
}
/**
* If this transform operation is not idempotent, returns the base value to
* persist for this transform. If a base value is returned, the transform
* operation is always applied to this base value, even if document has
* already been updated.
*
* Base values provide consistent behavior for non-idempotent transforms and
* allow us to return the same latency-compensated value even if the backend
* has already applied the transform operation. The base value is null for
* idempotent transforms, as they can be re-played even if the backend has
* already applied them.
*
* @returns a base value to store along with the mutation, or null for
* idempotent transforms.
*/
function le(t, e) ***REMOVED***
  return t instanceof ge ? yt(n = e) || (function (t) ***REMOVED***
    return !!t && ("doubleValue" in t);
  })(n) ? e : ***REMOVED***
    integerValue: 0
  } : null;
  var n;
}
/** Transforms a value into a server-generated timestamp.*/
var de = /** @class*/
(function (t) ***REMOVED***
  function e() ***REMOVED***
    return null !== t && t.apply(this, arguments) || this;
  }
  return (_tslib.__extends(e, t), e);
})(ce), pe = /** @class*/
(function (t) ***REMOVED***
  function e(e) ***REMOVED***
    var n = this;
    return ((n = t.call(this) || this).elements = e, n);
  }
  return (_tslib.__extends(e, t), e);
})(ce);
/** Transforms an array value via a union operation.*/
function ye(t, e) ***REMOVED***
  for (var n = be(e), r = function (t) ***REMOVED***
    n.some(function (e) ***REMOVED***
      return at(e, t);
    }) || n.push(t);
  }, i = 0, o = t.elements; i < o.length; i++) ***REMOVED***
    r(o[i]);
  }
  return ***REMOVED***
    arrayValue: ***REMOVED***
      values: n
    }
  ***REMOVED***
}
/** Transforms an array value via a remove operation.*/
var ve = /** @class*/
(function (t) ***REMOVED***
  function e(e) ***REMOVED***
    var n = this;
    return ((n = t.call(this) || this).elements = e, n);
  }
  return (_tslib.__extends(e, t), e);
})(ce);
function me(t, e) ***REMOVED***
  for (var n = be(e), r = function (t) ***REMOVED***
    n = n.filter(function (e) ***REMOVED***
      return !at(e, t);
    });
  }, i = 0, o = t.elements; i < o.length; i++) ***REMOVED***
    r(o[i]);
  }
  return ***REMOVED***
    arrayValue: ***REMOVED***
      values: n
    }
  ***REMOVED***
}
/**
* Implements the backend semantics for locally computed NUMERIC_ADD (increment)
* transforms. Converts all field values to integers or doubles, but unlike the
* backend does not cap integer values at 2^63. Instead, JavaScript number
* arithmetic is used and precision loss can occur for values greater than 2^53.
*/
var ge = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this) || this).R = e, r.A = n, r);
  }
  return (_tslib.__extends(e, t), e);
})(ce);
function we(t) ***REMOVED***
  return J(t.integerValue || t.doubleValue);
}
function be(t) ***REMOVED***
  return vt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** A field path and the TransformOperation to perform upon it.*/
var Ie = function (t, e) ***REMOVED***
  (this.field = t, this.transform = e);
***REMOVED***
/** The result of successfully applying a mutation to the backend.*/
var _e = function (/**
* The version at which the mutation was committed:
*
* - For most operations, this is the updateTime in the WriteResult.
* - For deletes, the commitTime of the WriteResponse (because deletes are
*   not stored and have no updateTime).
*
* Note that these versions can be different: No-op writes will not change
* the updateTime even though the commitTime advances.
*/
t, /**
* The resulting fields returned from the backend after a mutation
* containing field transforms has been committed. Contains one FieldValue
* for each FieldTransform that was in the mutation.
*
* Will be empty if the mutation did not contain any field transforms.
*/
e) ***REMOVED***
  (this.version = t, this.transformResults = e);
}, Ee = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.updateTime = t, this.exists = e);
  }
  return (t.none = function () ***REMOVED***
    return new t();
  }, /** Creates a new Precondition with an exists flag.*/
  t.exists = function (e) ***REMOVED***
    return new t(void 0, e);
  }, /** Creates a new Precondition based on a version a document exists at.*/
  t.updateTime = function (e) ***REMOVED***
    return new t(e);
  }, Object.defineProperty(t.prototype, "isNone", ***REMOVED***
    /** Returns whether this Precondition is empty.*/
    get: function () ***REMOVED***
      return void 0 === this.updateTime && void 0 === this.exists;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (t) ***REMOVED***
    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
  }, t);
})();
/**
* Encodes a precondition for a mutation. This follows the model that the
* backend accepts with the special case of an explicit "empty" precondition
* (meaning no precondition).
*/
/** Returns true if the preconditions is valid for the given document.*/
function Te(t, e) ***REMOVED***
  return void 0 !== t.updateTime ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e.isFoundDocument();
}
/**
* A mutation describes a self-contained change to a document. Mutations can
* create, replace, delete, and update subsets of documents.
*
* Mutations not only act on the value of the document but also its version.
*
* For local mutations (mutations that haven't been committed yet), we preserve
* the existing version for Set and Patch mutations. For Delete mutations, we
* reset the version to 0.
*
* Here's the expected transition table.
*
* MUTATION           APPLIED TO            RESULTS IN
*
* SetMutation        Document(v3)          Document(v3)
* SetMutation        NoDocument(v3)        Document(v0)
* SetMutation        InvalidDocument(v0)   Document(v0)
* PatchMutation      Document(v3)          Document(v3)
* PatchMutation      NoDocument(v3)        NoDocument(v3)
* PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
* DeleteMutation     Document(v3)          NoDocument(v0)
* DeleteMutation     NoDocument(v3)        NoDocument(v0)
* DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
*
* For acknowledged mutations, we use the updateTime of the WriteResponse as
* the resulting version for Set and Patch mutations. As deletes have no
* explicit update time, we use the commitTime of the WriteResponse for
* Delete mutations.
*
* If a mutation is acknowledged by the backend but fails the precondition check
* locally, we transition to an `UnknownDocument` and rely on Watch to send us
* the updated version.
*
* Field transforms are used only with Patch and Set Mutations. We use the
* `updateTransforms` message to store transforms, rather than the `transforms`s
* messages.
*
* ## Subclassing Notes
*
* Every type of mutation needs to implement its own applyToRemoteDocument() and
* applyToLocalView() to implement the actual behavior of applying the mutation
* to some source document (see `applySetMutationToRemoteDocument()` for an
* example).
*/
var Se = function () ***REMOVED******REMOVED***
/**
* Applies this mutation to the given document for the purposes of computing a
* new remote document. If the input document doesn't match the expected state
* (e.g. it is invalid or outdated), the document type may transition to
* unknown.
*
* @param mutation - The mutation to apply.
* @param document - The document to mutate. The input document can be an
*     invalid document if the client has no knowledge of the pre-mutation state
*     of the document.
* @param mutationResult - The result of applying the mutation from the backend.
*/
function De(t, e, n) ***REMOVED***
  t instanceof Ce ? (function (t, e, n) ***REMOVED***
    // Unlike applySetMutationToLocalView, if we're applying a mutation to a
    // remote document the server has accepted the mutation so the precondition
    // must have held.
    var r = t.value.clone(), i = Le(t.fieldTransforms, e, n.transformResults);
    (r.setAll(i), e.convertToFoundDocument(n.version, r).setHasCommittedMutations());
  })(t, e, n) : t instanceof Re ? (function (t, e, n) ***REMOVED***
    if (Te(t.precondition, e)) ***REMOVED***
      var r = Le(t.fieldTransforms, e, n.transformResults), i = e.data;
      (i.setAll(Oe(t)), i.setAll(r), e.convertToFoundDocument(n.version, i).setHasCommittedMutations());
    } else e.convertToUnknownDocument(n.version);
  })(t, e, n) : (function (t, e, n) ***REMOVED***
    // Unlike applyToLocalView, if we're applying a mutation to a remote
    // document the server has accepted the mutation so the precondition must
    // have held.
    e.convertToNoDocument(n.version).setHasCommittedMutations();
  })(0, e, n);
}
/**
* Applies this mutation to the given document for the purposes of computing
* the new local view of a document. If the input document doesn't match the
* expected state, the document is not modified.
*
* @param mutation - The mutation to apply.
* @param document - The document to mutate. The input document can be an
*     invalid document if the client has no knowledge of the pre-mutation state
*     of the document.
* @param localWriteTime - A timestamp indicating the local write time of the
*     batch this mutation is a part of.
*/
function Ne(t, e, n) ***REMOVED***
  t instanceof Ce ? (function (t, e, n) ***REMOVED***
    if (Te(t.precondition, e)) ***REMOVED***
      var r = t.value.clone(), i = Pe(t.fieldTransforms, n, e);
      (r.setAll(i), e.convertToFoundDocument(xe(e), r).setHasLocalMutations());
    }
  })(t, e, n) : t instanceof Re ? (function (t, e, n) ***REMOVED***
    if (Te(t.precondition, e)) ***REMOVED***
      var r = Pe(t.fieldTransforms, n, e), i = e.data;
      (i.setAll(Oe(t)), i.setAll(r), e.convertToFoundDocument(xe(e), i).setHasLocalMutations());
    }
  })(t, e, n) : (function (t, e) ***REMOVED***
    Te(t.precondition, e) && // We don't call `setHasLocalMutations()` since we want to be backwards
    // compatible with the existing SDK behavior.
    e.convertToNoDocument(U.min());
  })(t, e);
}
/**
* If this mutation is not idempotent, returns the base value to persist with
* this mutation. If a base value is returned, the mutation is always applied
* to this base value, even if document has already been updated.
*
* The base value is a sparse object that consists of only the document
* fields for which this mutation contains a non-idempotent transformation
* (e.g. a numeric increment). The provided value guarantees consistent
* behavior for non-idempotent transforms and allow us to return the same
* latency-compensated value even if the backend has already applied the
* mutation. The base value is null for idempotent mutations, as they can be
* re-played even if the backend has already applied them.
*
* @returns a base value to store along with the mutation, or null for
* idempotent mutations.
*/
function Ae(t, e) ***REMOVED***
  for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) ***REMOVED***
    var o = i[r], s = e.data.field(o.field), u = le(o.transform, s || null);
    null != u && (null == n && (n = bt.empty()), n.set(o.field, u));
  }
  return n || null;
}
function ke(t, e) ***REMOVED***
  return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && !!(function (t, e) ***REMOVED***
    return void 0 === t && void 0 === e || !(!t || !e) && F(t, e, function (t, e) ***REMOVED***
      return (function (t, e) ***REMOVED***
        return t.field.isEqual(e.field) && (function (t, e) ***REMOVED***
          return t instanceof pe && e instanceof pe || t instanceof ve && e instanceof ve ? F(t.elements, e.elements, at) : t instanceof ge && e instanceof ge ? at(t.A, e.A) : t instanceof de && e instanceof de;
        })(t.transform, e.transform);
      })(t, e);
    });
  })(t.fieldTransforms, e.fieldTransforms) && (0 === /*Set*/
  t.type ? t.value.isEqual(e.value) : 1 !== /*Patch*/
  t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask));
}
/**
* Returns the version from the given document for use as the result of a
* mutation. Mutations are defined to return the version of the base document
* only if it is an existing document. Deleted and unknown documents have a
* post-mutation version of SnapshotVersion.min().
*/
function xe(t) ***REMOVED***
  return t.isFoundDocument() ? t.version : U.min();
}
/**
* A mutation that creates or replaces the document at the given key with the
* object value contents.
*/
var Ce = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r, i) ***REMOVED***
    void 0 === i && (i = []);
    var o = this;
    return ((o = t.call(this) || this).key = e, o.value = n, o.precondition = r, o.fieldTransforms = i, o.type = 0, /*Set*/
    o);
  }
  return (_tslib.__extends(e, t), e);
})(Se), Re = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r, i, o) ***REMOVED***
    void 0 === o && (o = []);
    var s = this;
    return ((s = t.call(this) || this).key = e, s.data = n, s.fieldMask = r, s.precondition = i, s.fieldTransforms = o, s.type = 1, /*Patch*/
    s);
  }
  return (_tslib.__extends(e, t), e);
})(Se);
function Oe(t) ***REMOVED***
  var e = new Map();
  return (t.fieldMask.fields.forEach(function (n) ***REMOVED***
    if (!n.isEmpty()) ***REMOVED***
      var r = t.data.field(n);
      e.set(n, r);
    }
  }), e);
}
function Le(t, e, n) ***REMOVED***
  var r = new Map();
  R(t.length === n.length);
  for (var i = 0; i < n.length; i++) ***REMOVED***
    var o = t[i], s = o.transform, u = e.data.field(o.field);
    r.set(o.field, fe(s, u, n[i]));
  }
  return r;
}
/**
* Creates a list of "transform results" (a transform result is a field value
* representing the result of applying a transform) for use when applying a
* transform locally.
*
* @param fieldTransforms - The field transforms to apply the result to.
* @param localWriteTime - The local time of the mutation (used to
*     generate ServerTimestampValues).
* @param mutableDocument - The current state of the document after applying all
*     previous mutations.
* @returns The transform results list.
*/
function Pe(t, e, n) ***REMOVED***
  for (var r = new Map(), i = 0, o = t; i < o.length; i++) ***REMOVED***
    var s = o[i], u = s.transform, a = n.data.field(s.field);
    r.set(s.field, he(u, a, e));
  }
  return r;
}
/** A mutation that deletes the document at the given key.*/
var Me, Fe, Ve = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this) || this).key = e, r.precondition = n, r.type = 2, /*Delete*/
    r.fieldTransforms = [], r);
  }
  return (_tslib.__extends(e, t), e);
})(Se), qe = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this) || this).key = e, r.precondition = n, r.type = 3, /*Verify*/
    r.fieldTransforms = [], r);
  }
  return (_tslib.__extends(e, t), e);
})(Se), Ue = // TODO(b/33078163): just use simplest form of existence filter for now
function (t) ***REMOVED***
  this.count = t;
***REMOVED***
/**
* Determines whether an error code represents a permanent error when received
* in response to a non-write operation.
*
* See isPermanentWriteError for classifying write errors.
*/
function Be(t) ***REMOVED***
  switch (t) ***REMOVED***
    case E.OK:
      return C();
    case E.CANCELLED:
    case E.UNKNOWN:
    case E.DEADLINE_EXCEEDED:
    case E.RESOURCE_EXHAUSTED:
    case E.INTERNAL:
    case E.UNAVAILABLE:
    case E.UNAUTHENTICATED:
      return !1;
    case E.INVALID_ARGUMENT:
    case E.NOT_FOUND:
    case E.ALREADY_EXISTS:
    case E.PERMISSION_DENIED:
    case E.FAILED_PRECONDITION:
    case E.ABORTED:
    case E.OUT_OF_RANGE:
    case E.UNIMPLEMENTED:
    case E.DATA_LOSS:
      return !0;
    default:
      return C();
  }
}
/**
* Determines whether an error code represents a permanent error when received
* in response to a write operation.
*
* Write operations must be handled specially because as of b/119437764, ABORTED
* errors on the write stream should be retried too (even though ABORTED errors
* are not generally retryable).
*
* Note that during the initial handshake on the write stream an ABORTED error
* signals that we should discard our stream token (i.e. it is permanent). This
* means a handshake error should be classified with isPermanentError, above.
*/
/**
* Maps an error Code from GRPC status code number, like 0, 1, or 14. These
* are not the same as HTTP status codes.
*
* @returns The Code equivalent to the given GRPC status code. Fails if there
*     is no match.
*/
function je(t) ***REMOVED***
  if (void 0 === t) // This shouldn't normally happen, but in certain error cases (like trying
  // to send invalid proto messages) we may get an error with no GRPC code.
  return (A("GRPC error has no .code"), E.UNKNOWN);
  switch (t) ***REMOVED***
    case Me.OK:
      return E.OK;
    case Me.CANCELLED:
      return E.CANCELLED;
    case Me.UNKNOWN:
      return E.UNKNOWN;
    case Me.DEADLINE_EXCEEDED:
      return E.DEADLINE_EXCEEDED;
    case Me.RESOURCE_EXHAUSTED:
      return E.RESOURCE_EXHAUSTED;
    case Me.INTERNAL:
      return E.INTERNAL;
    case Me.UNAVAILABLE:
      return E.UNAVAILABLE;
    case Me.UNAUTHENTICATED:
      return E.UNAUTHENTICATED;
    case Me.INVALID_ARGUMENT:
      return E.INVALID_ARGUMENT;
    case Me.NOT_FOUND:
      return E.NOT_FOUND;
    case Me.ALREADY_EXISTS:
      return E.ALREADY_EXISTS;
    case Me.PERMISSION_DENIED:
      return E.PERMISSION_DENIED;
    case Me.FAILED_PRECONDITION:
      return E.FAILED_PRECONDITION;
    case Me.ABORTED:
      return E.ABORTED;
    case Me.OUT_OF_RANGE:
      return E.OUT_OF_RANGE;
    case Me.UNIMPLEMENTED:
      return E.UNIMPLEMENTED;
    case Me.DATA_LOSS:
      return E.DATA_LOSS;
    default:
      return C();
  }
}
/**
* Converts an HTTP response's error status to the equivalent error code.
*
* @param status - An HTTP error response status ("FAILED_PRECONDITION",
* "UNKNOWN", etc.)
* @returns The equivalent Code. Non-matching responses are mapped to
*     Code.UNKNOWN.
*/
((Fe = Me || (Me = ***REMOVED***}))[Fe.OK = 0] = "OK", Fe[Fe.CANCELLED = 1] = "CANCELLED", Fe[Fe.UNKNOWN = 2] = "UNKNOWN", Fe[Fe.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Fe[Fe.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Fe[Fe.NOT_FOUND = 5] = "NOT_FOUND", Fe[Fe.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Fe[Fe.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Fe[Fe.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Fe[Fe.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Fe[Fe.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Fe[Fe.ABORTED = 10] = "ABORTED", Fe[Fe.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Fe[Fe.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Fe[Fe.INTERNAL = 13] = "INTERNAL", Fe[Fe.UNAVAILABLE = 14] = "UNAVAILABLE", Fe[Fe.DATA_LOSS = 15] = "DATA_LOSS");
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var Ke = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.comparator = t, this.root = e || Qe.EMPTY);
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  return (t.prototype.insert = function (e, n) ***REMOVED***
    return new t(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, Qe.BLACK, null, null));
  }, // Returns a copy of the map, with the specified key removed.
  t.prototype.remove = function (e) ***REMOVED***
    return new t(this.comparator, this.root.remove(e, this.comparator).copy(null, null, Qe.BLACK, null, null));
  }, // Returns the value of the node with the given key, or null.
  t.prototype.get = function (t) ***REMOVED***
    for (var e = this.root; !e.isEmpty(); ) ***REMOVED***
      var n = this.comparator(t, e.key);
      if (0 === n) return e.value;
      n < 0 ? e = e.left : n > 0 && (e = e.right);
    }
    return null;
  }, // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  t.prototype.indexOf = function (t) ***REMOVED***
    for (var e = 0, n = this.root; !n.isEmpty(); ) ***REMOVED***
      var r = this.comparator(t, n.key);
      if (0 === r) return e + n.left.size;
      r < 0 ? n = n.left : // Count all nodes left of the node plus the node itself
      (e += n.left.size + 1, n = n.right);
    }
    // Node not found
    return -1;
  }, t.prototype.isEmpty = function () ***REMOVED***
    return this.root.isEmpty();
  }, Object.defineProperty(t.prototype, "size", ***REMOVED***
    // Returns the total number of nodes in the map.
    get: function () ***REMOVED***
      return this.root.size;
    },
    enumerable: !1,
    configurable: !0
  }), // Returns the minimum key in the map.
  t.prototype.minKey = function () ***REMOVED***
    return this.root.minKey();
  }, // Returns the maximum key in the map.
  t.prototype.maxKey = function () ***REMOVED***
    return this.root.maxKey();
  }, // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.inorderTraversal = function (t) ***REMOVED***
    return this.root.inorderTraversal(t);
  }, t.prototype.forEach = function (t) ***REMOVED***
    this.inorderTraversal(function (e, n) ***REMOVED***
      return (t(e, n), !1);
    });
  }, t.prototype.toString = function () ***REMOVED***
    var t = [];
    return (this.inorderTraversal(function (e, n) ***REMOVED***
      return (t.push(e + ":" + n), !1);
    }), "***REMOVED***" + t.join(", ") + "}");
  }, // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.reverseTraversal = function (t) ***REMOVED***
    return this.root.reverseTraversal(t);
  }, // Returns an iterator over the SortedMap.
  t.prototype.getIterator = function () ***REMOVED***
    return new Ge(this.root, null, this.comparator, !1);
  }, t.prototype.getIteratorFrom = function (t) ***REMOVED***
    return new Ge(this.root, t, this.comparator, !1);
  }, t.prototype.getReverseIterator = function () ***REMOVED***
    return new Ge(this.root, null, this.comparator, !0);
  }, t.prototype.getReverseIteratorFrom = function (t) ***REMOVED***
    return new Ge(this.root, t, this.comparator, !0);
  }, t);
})(), Ge = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, r) ***REMOVED***
    (this.isReverse = r, this.nodeStack = []);
    for (var i = 1; !t.isEmpty(); ) if ((i = e ? n(t.key, e) : 1, // flip the comparison if we're going in reverse
    r && (i *= -1), i < 0)) // This node is less than our start key. ignore it
    t = this.isReverse ? t.left : t.right; else ***REMOVED***
      if (0 === i) ***REMOVED***
        // This node is exactly equal to our start key. Push it on the stack,
        // but stop iterating;
        this.nodeStack.push(t);
        break;
      }
      // This node is greater than our start key, add it to the stack and move
      // to the next one
      (this.nodeStack.push(t), t = this.isReverse ? t.right : t.left);
    }
  }
  return (t.prototype.getNext = function () ***REMOVED***
    var t = this.nodeStack.pop(), e = ***REMOVED***
      key: t.key,
      value: t.value
    ***REMOVED***
    if (this.isReverse) for (t = t.left; !t.isEmpty(); ) (this.nodeStack.push(t), t = t.right); else for (t = t.right; !t.isEmpty(); ) (this.nodeStack.push(t), t = t.left);
    return e;
  }, t.prototype.hasNext = function () ***REMOVED***
    return this.nodeStack.length > 0;
  }, t.prototype.peek = function () ***REMOVED***
    if (0 === this.nodeStack.length) return null;
    var t = this.nodeStack[this.nodeStack.length - 1];
    return ***REMOVED***
      key: t.key,
      value: t.value
    ***REMOVED***
  }, t);
})(), Qe = /** @class*/
(function () ***REMOVED***
  function t(e, n, r, i, o) ***REMOVED***
    (this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size);
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  return (t.prototype.copy = function (e, n, r, i, o) ***REMOVED***
    return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
  }, t.prototype.isEmpty = function () ***REMOVED***
    return !1;
  }, // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.inorderTraversal = function (t) ***REMOVED***
    return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
  }, // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.reverseTraversal = function (t) ***REMOVED***
    return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
  }, // Returns the minimum node in the tree.
  t.prototype.min = function () ***REMOVED***
    return this.left.isEmpty() ? this : this.left.min();
  }, // Returns the maximum key in the tree.
  t.prototype.minKey = function () ***REMOVED***
    return this.min().key;
  }, // Returns the maximum key in the tree.
  t.prototype.maxKey = function () ***REMOVED***
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }, // Returns new tree, with the key/value added.
  t.prototype.insert = function (t, e, n) ***REMOVED***
    var r = this, i = n(t, r.key);
    return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp();
  }, t.prototype.removeMin = function () ***REMOVED***
    if (this.left.isEmpty()) return t.EMPTY;
    var e = this;
    return (e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp());
  }, // Returns new tree, with the specified item removed.
  t.prototype.remove = function (e, n) ***REMOVED***
    var r, i = this;
    if (n(e, i.key) < 0) (i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(e, n), null)); else ***REMOVED***
      if ((i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), 0 === n(e, i.key))) ***REMOVED***
        if (i.right.isEmpty()) return t.EMPTY;
        (r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp();
  }, t.prototype.isRed = function () ***REMOVED***
    return this.color;
  }, // Returns new tree after performing any needed rotations.
  t.prototype.fixUp = function () ***REMOVED***
    var t = this;
    return (t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t);
  }, t.prototype.moveRedLeft = function () ***REMOVED***
    var t = this.colorFlip();
    return (t.right.left.isRed() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip()), t);
  }, t.prototype.moveRedRight = function () ***REMOVED***
    var t = this.colorFlip();
    return (t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t);
  }, t.prototype.rotateLeft = function () ***REMOVED***
    var e = this.copy(null, null, t.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }, t.prototype.rotateRight = function () ***REMOVED***
    var e = this.copy(null, null, t.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }, t.prototype.colorFlip = function () ***REMOVED***
    var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, e);
  }, // For testing.
  t.prototype.checkMaxDepth = function () ***REMOVED***
    var t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }, // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  t.prototype.check = function () ***REMOVED***
    if (this.isRed() && this.left.isRed()) throw C();
    if (this.right.isRed()) throw C();
    var t = this.left.check();
    if (t !== this.right.check()) throw C();
    return t + (this.isRed() ? 0 : 1);
  }, t);
})();
// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Qe.EMPTY = null, Qe.RED = !0, Qe.BLACK = !1, // end LLRBEmptyNode
Qe.EMPTY = new (/** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    this.size = 0;
  }
  return (Object.defineProperty(t.prototype, "key", ***REMOVED***
    get: function () ***REMOVED***
      throw C();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "value", ***REMOVED***
    get: function () ***REMOVED***
      throw C();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "color", ***REMOVED***
    get: function () ***REMOVED***
      throw C();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "left", ***REMOVED***
    get: function () ***REMOVED***
      throw C();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "right", ***REMOVED***
    get: function () ***REMOVED***
      throw C();
    },
    enumerable: !1,
    configurable: !0
  }), // Returns a copy of the current node.
  t.prototype.copy = function (t, e, n, r, i) ***REMOVED***
    return this;
  }, // Returns a copy of the tree, with the specified key/value added.
  t.prototype.insert = function (t, e, n) ***REMOVED***
    return new Qe(t, e);
  }, // Returns a copy of the tree, with the specified key removed.
  t.prototype.remove = function (t, e) ***REMOVED***
    return this;
  }, t.prototype.isEmpty = function () ***REMOVED***
    return !0;
  }, t.prototype.inorderTraversal = function (t) ***REMOVED***
    return !1;
  }, t.prototype.reverseTraversal = function (t) ***REMOVED***
    return !1;
  }, t.prototype.minKey = function () ***REMOVED***
    return null;
  }, t.prototype.maxKey = function () ***REMOVED***
    return null;
  }, t.prototype.isRed = function () ***REMOVED***
    return !1;
  }, // For testing.
  t.prototype.checkMaxDepth = function () ***REMOVED***
    return !0;
  }, t.prototype.check = function () ***REMOVED***
    return 0;
  }, t);
})())());
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* SortedSet is an immutable (copy-on-write) collection that holds elements
* in order specified by the provided comparator.
*
* NOTE: if provided comparator returns 0 for two elements, we consider them to
* be equal!
*/
var ze = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.comparator = t, this.data = new Ke(this.comparator));
  }
  return (t.prototype.has = function (t) ***REMOVED***
    return null !== this.data.get(t);
  }, t.prototype.first = function () ***REMOVED***
    return this.data.minKey();
  }, t.prototype.last = function () ***REMOVED***
    return this.data.maxKey();
  }, Object.defineProperty(t.prototype, "size", ***REMOVED***
    get: function () ***REMOVED***
      return this.data.size;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.indexOf = function (t) ***REMOVED***
    return this.data.indexOf(t);
  }, /** Iterates elements in order defined by "comparator"*/
  t.prototype.forEach = function (t) ***REMOVED***
    this.data.inorderTraversal(function (e, n) ***REMOVED***
      return (t(e), !1);
    });
  }, /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1].*/
  t.prototype.forEachInRange = function (t, e) ***REMOVED***
    for (var n = this.data.getIteratorFrom(t[0]); n.hasNext(); ) ***REMOVED***
      var r = n.getNext();
      if (this.comparator(r.key, t[1]) >= 0) return;
      e(r.key);
    }
  }, /**
  * Iterates over `elem`s such that: start &lt;= elem until false is returned.
  */
  t.prototype.forEachWhile = function (t, e) ***REMOVED***
    var n;
    for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) if (!t(n.getNext().key)) return;
  }, /** Finds the least element greater than or equal to `elem`.*/
  t.prototype.firstAfterOrEqual = function (t) ***REMOVED***
    var e = this.data.getIteratorFrom(t);
    return e.hasNext() ? e.getNext().key : null;
  }, t.prototype.getIterator = function () ***REMOVED***
    return new We(this.data.getIterator());
  }, t.prototype.getIteratorFrom = function (t) ***REMOVED***
    return new We(this.data.getIteratorFrom(t));
  }, /** Inserts or updates an element*/
  t.prototype.add = function (t) ***REMOVED***
    return this.copy(this.data.remove(t).insert(t, !0));
  }, /** Deletes an element*/
  t.prototype.delete = function (t) ***REMOVED***
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }, t.prototype.isEmpty = function () ***REMOVED***
    return this.data.isEmpty();
  }, t.prototype.unionWith = function (t) ***REMOVED***
    var e = this;
    // Make sure `result` always refers to the larger one of the two sets.
    return (e.size < t.size && (e = t, t = this), t.forEach(function (t) ***REMOVED***
      e = e.add(t);
    }), e);
  }, t.prototype.isEqual = function (e) ***REMOVED***
    if (!(e instanceof t)) return !1;
    if (this.size !== e.size) return !1;
    for (var n = this.data.getIterator(), r = e.data.getIterator(); n.hasNext(); ) ***REMOVED***
      var i = n.getNext().key, o = r.getNext().key;
      if (0 !== this.comparator(i, o)) return !1;
    }
    return !0;
  }, t.prototype.toArray = function () ***REMOVED***
    var t = [];
    return (this.forEach(function (e) ***REMOVED***
      t.push(e);
    }), t);
  }, t.prototype.toString = function () ***REMOVED***
    var t = [];
    return (this.forEach(function (e) ***REMOVED***
      return t.push(e);
    }), "SortedSet(" + t.toString() + ")");
  }, t.prototype.copy = function (e) ***REMOVED***
    var n = new t(this.comparator);
    return (n.data = e, n);
  }, t);
})(), We = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this.iter = t;
  }
  return (t.prototype.getNext = function () ***REMOVED***
    return this.iter.getNext().key;
  }, t.prototype.hasNext = function () ***REMOVED***
    return this.iter.hasNext();
  }, t);
})(), He = new Ke(st.comparator);
function Ye() ***REMOVED***
  return He;
}
var Xe = new Ke(st.comparator);
function $e() ***REMOVED***
  return Xe;
}
var Je = new Ke(st.comparator);
function Ze() ***REMOVED***
  return Je;
}
var tn = new ze(st.comparator);
function en() ***REMOVED***
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  for (var n = tn, r = 0, i = t; r < i.length; r++) ***REMOVED***
    var o = i[r];
    n = n.add(o);
  }
  return n;
}
var nn = new ze(M);
function rn() ***REMOVED***
  return nn;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An event from the RemoteStore. It is split into targetChanges (changes to the
* state or the set of documents in our watched targets) and documentUpdates
* (changes to the actual documents).
*/
var on = /** @class*/
(function () ***REMOVED***
  function t(/**
  * The snapshot version this event brings us up to, or MIN if not set.
  */
  t, /**
  * A map from target to changes to the target. See TargetChange.
  */
  e, /**
  * A set of targets that is known to be inconsistent. Listens for these
  * targets should be re-established without resume tokens.
  */
  n, /**
  * A set of which documents have changed or been deleted, along with the
  * doc's new values (if not deleted).
  */
  r, /**
  * A set of which document updates are due only to limbo resolution targets.
  */
  i) ***REMOVED***
    (this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i);
  }
  /**
  * HACK: Views require RemoteEvents in order to determine whether the view is
  * CURRENT, but secondary tabs don't receive remote events. So this method is
  * used to create a synthesized RemoteEvent that can be used to apply a
  * CURRENT status change to a View, for queries executed in a different tab.
  */
  // PORTING NOTE: Multi-tab only
  return (t.createSynthesizedRemoteEventForCurrentChange = function (e, n) ***REMOVED***
    var r = new Map();
    return (r.set(e, sn.createSynthesizedTargetChangeForCurrentChange(e, n)), new t(U.min(), r, rn(), Ye(), en()));
  }, t);
})(), sn = /** @class*/
(function () ***REMOVED***
  function t(/**
  * An opaque, server-assigned token that allows watching a query to be resumed
  * after disconnecting without retransmitting all the data that matches the
  * query. The resume token essentially identifies a point in time from which
  * the server should resume sending results.
  */
  t, /**
  * The "current" (synced) status of this target. Note that "current"
  * has special meaning in the RPC protocol that implies that a target is
  * both up-to-date and consistent with the rest of the watch stream.
  */
  e, /**
  * The set of documents that were newly assigned to this target as part of
  * this remote event.
  */
  n, /**
  * The set of documents that were already assigned to this target but received
  * an update during this remote event.
  */
  r, /**
  * The set of documents that were removed from this target as part of this
  * remote event.
  */
  i) ***REMOVED***
    (this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i);
  }
  return (t.createSynthesizedTargetChangeForCurrentChange = function (e, n) ***REMOVED***
    return new t(Y.EMPTY_BYTE_STRING, n, en(), en(), en());
  }, t);
})(), un = function (/** The new document applies to all of these targets.*/
t, /** The new document is removed from all of these targets.*/
e, /** The key of the document for this change.*/
n, /**
* The new document or NoDocument if it was deleted. Is null if the
* document went out of view without the server sending a new document.
*/
r) ***REMOVED***
  (this.v = t, this.removedTargetIds = e, this.key = n, this.P = r);
}, an = function (t, e) ***REMOVED***
  (this.targetId = t, this.V = e);
}, cn = function (/** What kind of change occurred to the watch target.*/
t, /** The target IDs that were added/removed/set.*/
e, /**
* An opaque, server-assigned token that allows watching a target to be
* resumed after disconnecting without retransmitting all the data that
* matches the target. The resume token essentially identifies a point in
* time from which the server should resume sending results.
*/
n, /** An RPC error indicating why the watch failed.*/
r) ***REMOVED***
  (void 0 === n && (n = Y.EMPTY_BYTE_STRING), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r);
}, hn = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    /**
    * The number of pending responses (adds or removes) that we are waiting on.
    * We only consider targets active that have no pending responses.
    */
    (this.S = 0, /**
    * Keeps track of the document changes since the last raised snapshot.
    *
    * These changes are continuously updated as we receive document updates and
    * always reflect the current set of changes against the last issued snapshot.
    */
    this.D = dn(), /** See public getters for explanations of these fields.*/
    this.C = Y.EMPTY_BYTE_STRING, this.N = !1, /**
    * Whether this target state should be included in the next snapshot. We
    * initialize to true so that newly-added targets are included in the next
    * RemoteEvent.
    */
    this.F = !0);
  }
  return (Object.defineProperty(t.prototype, "current", ***REMOVED***
    /**
    * Whether this target has been marked 'current'.
    *
    * 'Current' has special meaning in the RPC protocol: It implies that the
    * Watch backend has sent us all changes up to the point at which the target
    * was added and that the target is consistent with the rest of the watch
    * stream.
    */
    get: function () ***REMOVED***
      return this.N;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "resumeToken", ***REMOVED***
    /** The last resume token sent to us for this target.*/
    get: function () ***REMOVED***
      return this.C;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "k", ***REMOVED***
    /** Whether this target has pending target adds or target removes.*/
    get: function () ***REMOVED***
      return 0 !== this.S;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "O", ***REMOVED***
    /** Whether we have modified any state that should trigger a snapshot.*/
    get: function () ***REMOVED***
      return this.F;
    },
    enumerable: !1,
    configurable: !0
  }), /**
  * Applies the resume token to the TargetChange, but only when it has a new
  * value. Empty resumeTokens are discarded.
  */
  t.prototype.$ = function (t) ***REMOVED***
    t.approximateByteSize() > 0 && (this.F = !0, this.C = t);
  }, /**
  * Creates a target change from the current set of changes.
  *
  * To reset the document changes after raising this snapshot, call
  * `clearPendingChanges()`.
  */
  t.prototype.M = function () ***REMOVED***
    var t = en(), e = en(), n = en();
    return (this.D.forEach(function (r, i) ***REMOVED***
      switch (i) ***REMOVED***
        case 0:
          /*Added*/
          t = t.add(r);
          break;
        case 2:
          /*Modified*/
          e = e.add(r);
          break;
        case 1:
          /*Removed*/
          n = n.add(r);
          break;
        default:
          C();
      }
    }), new sn(this.C, this.N, t, e, n));
  }, /**
  * Resets the document changes and sets `hasPendingChanges` to false.
  */
  t.prototype.L = function () ***REMOVED***
    (this.F = !1, this.D = dn());
  }, t.prototype.B = function (t, e) ***REMOVED***
    (this.F = !0, this.D = this.D.insert(t, e));
  }, t.prototype.q = function (t) ***REMOVED***
    (this.F = !0, this.D = this.D.remove(t));
  }, t.prototype.U = function () ***REMOVED***
    this.S += 1;
  }, t.prototype.K = function () ***REMOVED***
    this.S -= 1;
  }, t.prototype.j = function () ***REMOVED***
    (this.F = !0, this.N = !0);
  }, t);
})(), fn = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.W = t, /** The internal state of all tracked targets.*/
    this.G = new Map(), /** Keeps track of the documents to update since the last raised snapshot.*/
    this.H = Ye(), /** A mapping of document keys to their set of target IDs.*/
    this.J = ln(), /**
    * A list of targets with existence filter mismatches. These targets are
    * known to be inconsistent and their listens needs to be re-established by
    * RemoteStore.
    */
    this.Y = new ze(M));
  }
  return (t.prototype.X = function (t) ***REMOVED***
    for (var e = 0, n = t.v; e < n.length; e++) ***REMOVED***
      var r = n[e];
      t.P && t.P.isFoundDocument() ? this.Z(r, t.P) : this.tt(r, t.key, t.P);
    }
    for (var i = 0, o = t.removedTargetIds; i < o.length; i++) ***REMOVED***
      r = o[i];
      this.tt(r, t.key, t.P);
    }
  }, /** Processes and adds the WatchTargetChange to the current set of changes.*/
  t.prototype.et = function (t) ***REMOVED***
    var e = this;
    this.forEachTarget(t, function (n) ***REMOVED***
      var r = e.nt(n);
      switch (t.state) ***REMOVED***
        case 0:
          /*NoChange*/
          e.st(n) && r.$(t.resumeToken);
          break;
        case 1:
          /*Added*/
          // We need to decrement the number of pending acks needed from watch
          // for this targetId.
          (r.K(), r.k || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          r.L(), r.$(t.resumeToken));
          break;
        case 2:
          /*Removed*/
          // We need to keep track of removed targets to we can post-filter and
          // remove any target changes.
          // We need to decrement the number of pending acks needed from watch
          // for this targetId.
          (r.K(), r.k || e.removeTarget(n));
          break;
        case 3:
          /*Current*/
          e.st(n) && (r.j(), r.$(t.resumeToken));
          break;
        case 4:
          /*Reset*/
          e.st(n) && // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          (e.it(n), r.$(t.resumeToken));
          break;
        default:
          C();
      }
    });
  }, /**
  * Iterates over all targetIds that the watch change applies to: either the
  * targetIds explicitly listed in the change or the targetIds of all currently
  * active targets.
  */
  t.prototype.forEachTarget = function (t, e) ***REMOVED***
    var n = this;
    t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.G.forEach(function (t, r) ***REMOVED***
      n.st(r) && e(r);
    });
  }, /**
  * Handles existence filters and synthesizes deletes for filter mismatches.
  * Targets that are invalidated by filter mismatches are added to
  * `pendingTargetResets`.
  */
  t.prototype.rt = function (t) ***REMOVED***
    var e = t.targetId, n = t.V.count, r = this.ot(e);
    if (r) ***REMOVED***
      var i = r.target;
      if (Nt(i)) if (0 === n) ***REMOVED***
        // The existence filter told us the document does not exist. We deduce
        // that this document does not exist and apply a deleted document to
        // our updates. Without applying this deleted document there might be
        // another query that will raise this document as part of a snapshot
        // until it is resolved, essentially exposing inconsistency between
        // queries.
        var o = new st(i.path);
        this.tt(e, o, _t.newNoDocument(o, U.min()));
      } else R(1 === n); else this.ct(e) !== n && // Existence filter mismatch: We reset the mapping and raise a new
      // snapshot with `isFromCache:true`.
      (this.it(e), this.Y = this.Y.add(e));
    }
  }, /**
  * Converts the currently accumulated state into a remote event at the
  * provided snapshot version. Resets the accumulated changes before returning.
  */
  t.prototype.ut = function (t) ***REMOVED***
    var e = this, n = new Map();
    this.G.forEach(function (r, i) ***REMOVED***
      var o = e.ot(i);
      if (o) ***REMOVED***
        if (r.current && Nt(o.target)) ***REMOVED***
          // Document queries for document that don't exist can produce an empty
          // result set. To update our local cache, we synthesize a document
          // delete if we have not previously received the document. This
          // resolves the limbo state of the document, removing it from
          // limboDocumentRefs.
          // TODO(dimond): Ideally we would have an explicit lookup target
          // instead resulting in an explicit delete message and we could
          // remove this special logic.
          var s = new st(o.target.path);
          null !== e.H.get(s) || e.at(i, s) || e.tt(i, s, _t.newNoDocument(s, t));
        }
        r.O && (n.set(i, r.M()), r.L());
      }
    });
    var r = en();
    // We extract the set of limbo-only document updates as the GC logic
    // special-cases documents that do not appear in the target cache.
    // TODO(gsoltis): Expand on this comment once GC is available in the JS
    // client.
    this.J.forEach(function (t, n) ***REMOVED***
      var i = !0;
      (n.forEachWhile(function (t) ***REMOVED***
        var n = e.ot(t);
        return !n || 2 === /*LimboResolution*/
        n.purpose || (i = !1, !1);
      }), i && (r = r.add(t)));
    });
    var i = new on(t, n, this.Y, this.H, r);
    return (this.H = Ye(), this.J = ln(), this.Y = new ze(M), i);
  }, /**
  * Adds the provided document to the internal list of document updates and
  * its document key to the given target's mapping.
  */
  // Visible for testing.
  t.prototype.Z = function (t, e) ***REMOVED***
    if (this.st(t)) ***REMOVED***
      var n = this.at(t, e.key) ? 2 : /*Modified*/
      0;
      (this.nt(t).B(e.key, n), this.H = this.H.insert(e.key, e), this.J = this.J.insert(e.key, this.ht(e.key).add(t)));
    }
  }, /**
  * Removes the provided document from the target mapping. If the
  * document no longer matches the target, but the document's state is still
  * known (e.g. we know that the document was deleted or we received the change
  * that caused the filter mismatch), the new document can be provided
  * to update the remote document cache.
  */
  // Visible for testing.
  t.prototype.tt = function (t, e, n) ***REMOVED***
    if (this.st(t)) ***REMOVED***
      var r = this.nt(t);
      (this.at(t, e) ? r.B(e, 1) : // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      r.q(e), this.J = this.J.insert(e, this.ht(e).delete(t)), n && (this.H = this.H.insert(e, n)));
    }
  }, t.prototype.removeTarget = function (t) ***REMOVED***
    this.G.delete(t);
  }, /**
  * Returns the current count of documents in the target. This includes both
  * the number of documents that the LocalStore considers to be part of the
  * target as well as any accumulated changes.
  */
  t.prototype.ct = function (t) ***REMOVED***
    var e = this.nt(t).M();
    return this.W.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
  }, /**
  * Increment the number of acks needed from watch before we can consider the
  * server to be 'in-sync' with the client's active targets.
  */
  t.prototype.U = function (t) ***REMOVED***
    this.nt(t).U();
  }, t.prototype.nt = function (t) ***REMOVED***
    var e = this.G.get(t);
    return (e || (e = new hn(), this.G.set(t, e)), e);
  }, t.prototype.ht = function (t) ***REMOVED***
    var e = this.J.get(t);
    return (e || (e = new ze(M), this.J = this.J.insert(t, e)), e);
  }, /**
  * Verifies that the user is still interested in this target (by calling
  * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
  * from watch.
  */
  t.prototype.st = function (t) ***REMOVED***
    var e = null !== this.ot(t);
    return (e || N("WatchChangeAggregator", "Detected inactive target", t), e);
  }, /**
  * Returns the TargetData for an active target (i.e. a target that the user
  * is still interested in that has no outstanding target change requests).
  */
  t.prototype.ot = function (t) ***REMOVED***
    var e = this.G.get(t);
    return e && e.k ? null : this.W.lt(t);
  }, /**
  * Resets the state of a Watch target to its initial state (e.g. sets
  * 'current' to false, clears the resume token and removes its target mapping
  * from all documents).
  */
  t.prototype.it = function (t) ***REMOVED***
    var e = this;
    (this.G.set(t, new hn()), this.W.getRemoteKeysForTarget(t).forEach(function (n) ***REMOVED***
      e.tt(t, n, /*updatedDocument=*/
      null);
    }));
  }, /**
  * Returns whether the LocalStore considers the document to be part of the
  * specified target.
  */
  t.prototype.at = function (t, e) ***REMOVED***
    return this.W.getRemoteKeysForTarget(t).has(e);
  }, t);
})();
/**
* A TargetChange specifies the set of changes for a specific target as part of
* a RemoteEvent. These changes track which documents are added, modified or
* removed, as well as the target's resume token and whether the target is
* marked CURRENT.
* The actual changes *to* documents are not part of the TargetChange since
* documents may be part of multiple targets.
*/
function ln() ***REMOVED***
  return new Ke(st.comparator);
}
function dn() ***REMOVED***
  return new Ke(st.comparator);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pn = ***REMOVED***
  asc: "ASCENDING",
  desc: "DESCENDING"
}, yn = ***REMOVED***
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
}, vn = function (t, e) ***REMOVED***
  (this.databaseId = t, this.I = e);
***REMOVED***
/**
* This class generates JsonObject values for the Datastore API suitable for
* sending to either GRPC stub methods or via the JSON/HTTP REST API.
*
* The serializer supports both Protobuf.js and Proto3 JSON formats. By
* setting `useProto3Json` to true, the serializer will use the Proto3 JSON
* format.
*
* For a description of the Proto3 JSON format check
* https://developers.google.com/protocol-buffers/docs/proto3#json
*
* TODO(klimt): We can remove the databaseId argument if we keep the full
* resource name in documents.
*/
/**
* Returns a value for a Date that's appropriate to put into a proto.
*/
function mn(t, e) ***REMOVED***
  return t.I ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : ***REMOVED***
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  ***REMOVED***
}
/**
* Returns a value for bytes that's appropriate to put in a proto.
*
* Visible for testing.
*/
function gn(t, e) ***REMOVED***
  return t.I ? e.toBase64() : e.toUint8Array();
}
/**
* Returns a ByteString based on the proto string value.
*/
function wn(t, e) ***REMOVED***
  return mn(t, e.toTimestamp());
}
function bn(t) ***REMOVED***
  return (R(!!t), U.fromTimestamp((function (t) ***REMOVED***
    var e = $(t);
    return new q(e.seconds, e.nanos);
  })(t)));
}
function In(t, e) ***REMOVED***
  return (function (t) ***REMOVED***
    return new Q(["projects", t.projectId, "databases", t.database]);
  })(t).child("documents").child(e).canonicalString();
}
function _n(t) ***REMOVED***
  var e = Q.fromString(t);
  return (R(zn(e)), e);
}
function En(t, e) ***REMOVED***
  return In(t.databaseId, e.path);
}
function Tn(t, e) ***REMOVED***
  var n = _n(e);
  if (n.get(1) !== t.databaseId.projectId) throw new T(E.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
  if (n.get(3) !== t.databaseId.database) throw new T(E.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
  return new st(An(n));
}
function Sn(t, e) ***REMOVED***
  return In(t.databaseId, e);
}
function Dn(t) ***REMOVED***
  var e = _n(t);
  // In v1beta1 queries for collections at the root did not have a trailing
  // "/documents". In v1 all resource paths contain "/documents". Preserve the
  // ability to read the v1beta1 form for compatibility with queries persisted
  // in the local target cache.
  return 4 === e.length ? Q.emptyPath() : An(e);
}
function Nn(t) ***REMOVED***
  return new Q(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString();
}
function An(t) ***REMOVED***
  return (R(t.length > 4 && "documents" === t.get(4)), t.popFirst(5));
}
function kn(t, e, n) ***REMOVED***
  return ***REMOVED***
    name: En(t, e),
    fields: n.toProto().mapValue.fields
  ***REMOVED***
}
function xn(t, e, n) ***REMOVED***
  var r = Tn(t, e.name), i = bn(e.updateTime), o = new bt(***REMOVED***
    mapValue: ***REMOVED***
      fields: e.fields
    }
  }), s = _t.newFoundDocument(r, i, o);
  return (n && s.setHasCommittedMutations(), n ? s.setHasCommittedMutations() : s);
}
function Cn(t, e) ***REMOVED***
  var n;
  if (e instanceof Ce) n = ***REMOVED***
    update: kn(t, e.key, e.value)
  ***REMOVED*** else if (e instanceof Ve) n = ***REMOVED***
    delete: En(t, e.key)
  ***REMOVED*** else if (e instanceof Re) n = ***REMOVED***
    update: kn(t, e.key, e.data),
    updateMask: Qn(e.fieldMask)
  ***REMOVED*** else ***REMOVED***
    if (!(e instanceof qe)) return C();
    n = ***REMOVED***
      verify: En(t, e.key)
    ***REMOVED***
  }
  return (e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map(function (t) ***REMOVED***
    return (function (t, e) ***REMOVED***
      var n = e.transform;
      if (n instanceof de) return ***REMOVED***
        fieldPath: e.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      ***REMOVED***
      if (n instanceof pe) return ***REMOVED***
        fieldPath: e.field.canonicalString(),
        appendMissingElements: ***REMOVED***
          values: n.elements
        }
      ***REMOVED***
      if (n instanceof ve) return ***REMOVED***
        fieldPath: e.field.canonicalString(),
        removeAllFromArray: ***REMOVED***
          values: n.elements
        }
      ***REMOVED***
      if (n instanceof ge) return ***REMOVED***
        fieldPath: e.field.canonicalString(),
        increment: n.A
      ***REMOVED***
      throw C();
    })(0, t);
  })), e.precondition.isNone || (n.currentDocument = (function (t, e) ***REMOVED***
    return void 0 !== e.updateTime ? ***REMOVED***
      updateTime: wn(t, e.updateTime)
    } : void 0 !== e.exists ? ***REMOVED***
      exists: e.exists
    } : C();
  })(t, e.precondition)), n);
}
function Rn(t, e) ***REMOVED***
  var n = e.currentDocument ? (function (t) ***REMOVED***
    return void 0 !== t.updateTime ? Ee.updateTime(bn(t.updateTime)) : void 0 !== t.exists ? Ee.exists(t.exists) : Ee.none();
  })(e.currentDocument) : Ee.none(), r = e.updateTransforms ? e.updateTransforms.map(function (e) ***REMOVED***
    return (function (t, e) ***REMOVED***
      var n = null;
      if (("setToServerValue" in e)) (R("REQUEST_TIME" === e.setToServerValue), n = new de()); else if (("appendMissingElements" in e)) ***REMOVED***
        var r = e.appendMissingElements.values || [];
        n = new pe(r);
      } else if (("removeAllFromArray" in e)) ***REMOVED***
        var i = e.removeAllFromArray.values || [];
        n = new ve(i);
      } else ("increment" in e) ? n = new ge(t, e.increment) : C();
      var o = W.fromServerFormat(e.fieldPath);
      return new Ie(o, n);
    })(t, e);
  }) : [];
  if (e.update) ***REMOVED***
    e.update.name;
    var i = Tn(t, e.update.name), o = new bt(***REMOVED***
      mapValue: ***REMOVED***
        fields: e.update.fields
      }
    });
    if (e.updateMask) ***REMOVED***
      var s = (function (t) ***REMOVED***
        var e = t.fieldPaths || [];
        return new H(e.map(function (t) ***REMOVED***
          return W.fromServerFormat(t);
        }));
      })(e.updateMask);
      return new Re(i, o, s, n, r);
    }
    return new Ce(i, o, n, r);
  }
  if (e.delete) ***REMOVED***
    var u = Tn(t, e.delete);
    return new Ve(u, n);
  }
  if (e.verify) ***REMOVED***
    var a = Tn(t, e.verify);
    return new qe(a, n);
  }
  return C();
}
function On(t, e) ***REMOVED***
  return ***REMOVED***
    documents: [Sn(t, e.path)]
  ***REMOVED***
}
function Ln(t, e) ***REMOVED***
  // Dissect the path into parent, collectionId, and optional key filter.
  var n = ***REMOVED***
    structuredQuery: ***REMOVED***}
  }, r = e.path;
  null !== e.collectionGroup ? (n.parent = Sn(t, r), n.structuredQuery.from = [***REMOVED***
    collectionId: e.collectionGroup,
    allDescendants: !0
  }]) : (n.parent = Sn(t, r.popLast()), n.structuredQuery.from = [***REMOVED***
    collectionId: r.lastSegment()
  }]);
  var i = (function (t) ***REMOVED***
    if (0 !== t.length) ***REMOVED***
      var e = t.map(function (t) ***REMOVED***
        // visible for testing
        return (function (t) ***REMOVED***
          if ("==" === /*EQUAL*/
          t.op) ***REMOVED***
            if (gt(t.value)) return ***REMOVED***
              unaryFilter: ***REMOVED***
                field: Bn(t.field),
                op: "IS_NAN"
              }
            ***REMOVED***
            if (mt(t.value)) return ***REMOVED***
              unaryFilter: ***REMOVED***
                field: Bn(t.field),
                op: "IS_NULL"
              }
            ***REMOVED***
          } else if ("!=" === /*NOT_EQUAL*/
          t.op) ***REMOVED***
            if (gt(t.value)) return ***REMOVED***
              unaryFilter: ***REMOVED***
                field: Bn(t.field),
                op: "IS_NOT_NAN"
              }
            ***REMOVED***
            if (mt(t.value)) return ***REMOVED***
              unaryFilter: ***REMOVED***
                field: Bn(t.field),
                op: "IS_NOT_NULL"
              }
            ***REMOVED***
          }
          return ***REMOVED***
            fieldFilter: ***REMOVED***
              field: Bn(t.field),
              op: Un(t.op),
              value: t.value
            }
          ***REMOVED***
        })(t);
      });
      return 1 === e.length ? e[0] : ***REMOVED***
        compositeFilter: ***REMOVED***
          op: "AND",
          filters: e
        }
      ***REMOVED***
    }
  })(e.filters);
  i && (n.structuredQuery.where = i);
  var o = (function (t) ***REMOVED***
    if (0 !== t.length) return t.map(function (t) ***REMOVED***
      // visible for testing
      return (function (t) ***REMOVED***
        return ***REMOVED***
          field: Bn(t.field),
          direction: qn(t.dir)
        ***REMOVED***
      })(t);
    });
  })(e.orderBy);
  o && (n.structuredQuery.orderBy = o);
  var s = (function (t, e) ***REMOVED***
    return t.I || rt(e) ? e : ***REMOVED***
      value: e
    ***REMOVED***
  })(t, e.limit);
  return (null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = Fn(e.startAt)), e.endAt && (n.structuredQuery.endAt = Fn(e.endAt)), n);
}
function Pn(t) ***REMOVED***
  var e = Dn(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
  if (r > 0) ***REMOVED***
    R(1 === r);
    var o = n.from[0];
    o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
  }
  var s = [];
  n.where && (s = Mn(n.where));
  var u = [];
  n.orderBy && (u = n.orderBy.map(function (t) ***REMOVED***
    return (function (t) ***REMOVED***
      return new qt(jn(t.field), // visible for testing
      (function (t) ***REMOVED***
        switch (t) ***REMOVED***
          case "ASCENDING":
            return "asc";
          case "DESCENDING":
            return "desc";
          default:
            return;
        }
      })(t.direction));
    })(t);
  }));
  var a = null;
  n.limit && (a = (function (t) ***REMOVED***
    var e;
    return rt(e = "object" == typeof t ? t.value : t) ? null : e;
  })(n.limit));
  var c = null;
  n.startAt && (c = Vn(n.startAt));
  var h = null;
  return (n.endAt && (h = Vn(n.endAt)), Gt(e, i, u, s, a, "F", /*First*/
  c, h));
}
function Mn(t) ***REMOVED***
  return t ? void 0 !== t.unaryFilter ? [Gn(t)] : void 0 !== t.fieldFilter ? [Kn(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function (t) ***REMOVED***
    return Mn(t);
  }).reduce(function (t, e) ***REMOVED***
    return t.concat(e);
  }) : C() : [];
}
function Fn(t) ***REMOVED***
  return ***REMOVED***
    before: t.before,
    values: t.position
  ***REMOVED***
}
function Vn(t) ***REMOVED***
  var e = !!t.before, n = t.values || [];
  return new Ft(n, e);
}
// visible for testing
function qn(t) ***REMOVED***
  return pn[t];
}
function Un(t) ***REMOVED***
  return yn[t];
}
function Bn(t) ***REMOVED***
  return ***REMOVED***
    fieldPath: t.canonicalString()
  ***REMOVED***
}
function jn(t) ***REMOVED***
  return W.fromServerFormat(t.fieldPath);
}
function Kn(t) ***REMOVED***
  return At.create(jn(t.fieldFilter.field), (function (t) ***REMOVED***
    switch (t) ***REMOVED***
      case "EQUAL":
        return "==";
      case "NOT_EQUAL":
        return "!=";
      case "GREATER_THAN":
        return ">";
      case "GREATER_THAN_OR_EQUAL":
        return ">=";
      case "LESS_THAN":
        return "<";
      case "LESS_THAN_OR_EQUAL":
        return "<=";
      case "ARRAY_CONTAINS":
        return "array-contains";
      case "IN":
        return "in";
      case "NOT_IN":
        return "not-in";
      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any";
      case "OPERATOR_UNSPECIFIED":
      default:
        return C();
    }
  })(t.fieldFilter.op), t.fieldFilter.value);
}
function Gn(t) ***REMOVED***
  switch (t.unaryFilter.op) ***REMOVED***
    case "IS_NAN":
      var e = jn(t.unaryFilter.field);
      return At.create(e, "==", /*EQUAL*/
      ***REMOVED***
        doubleValue: NaN
      });
    case "IS_NULL":
      var n = jn(t.unaryFilter.field);
      return At.create(n, "==", /*EQUAL*/
      ***REMOVED***
        nullValue: "NULL_VALUE"
      });
    case "IS_NOT_NAN":
      var r = jn(t.unaryFilter.field);
      return At.create(r, "!=", /*NOT_EQUAL*/
      ***REMOVED***
        doubleValue: NaN
      });
    case "IS_NOT_NULL":
      var i = jn(t.unaryFilter.field);
      return At.create(i, "!=", /*NOT_EQUAL*/
      ***REMOVED***
        nullValue: "NULL_VALUE"
      });
    case "OPERATOR_UNSPECIFIED":
    default:
      return C();
  }
}
function Qn(t) ***REMOVED***
  var e = [];
  return (t.fields.forEach(function (t) ***REMOVED***
    return e.push(t.canonicalString());
  }), ***REMOVED***
    fieldPaths: e
  });
}
function zn(t) ***REMOVED***
  // Resource names have at least 4 components (project ID, database ID)
  return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Encodes a resource path into a IndexedDb-compatible string form.
*/
function Wn(t) ***REMOVED***
  for (var e = "", n = 0; n < t.length; n++) (e.length > 0 && (e = Yn(e)), e = Hn(t.get(n), e));
  return Yn(e);
}
/** Encodes a single segment of a resource path into the given result*/
function Hn(t, e) ***REMOVED***
  for (var n = e, r = t.length, i = 0; i < r; i++) ***REMOVED***
    var o = t.charAt(i);
    switch (o) ***REMOVED***
      case "\0":
        n += "";
        break;
      case "":
        n += "";
        break;
      default:
        n += o;
    }
  }
  return n;
}
/** Encodes a path separator into the given result*/
function Yn(t) ***REMOVED***
  return t + "";
}
/**
* Decodes the given IndexedDb-compatible string form of a resource path into
* a ResourcePath instance. Note that this method is not suitable for use with
* decoding resource names from the server; those are One Platform format
* strings.
*/
function Xn(t) ***REMOVED***
  // Event the empty path must encode as a path of at least length 2. A path
  // with exactly 2 must be the empty path.
  var e = t.length;
  if ((R(e >= 2), 2 === e)) return (R("" === t.charAt(0) && "" === t.charAt(1)), Q.emptyPath());
  // Escape characters cannot exist past the second-to-last position in the
  // source value.
  for (var n = e - 2, r = [], i = "", o = 0; o < e; ) ***REMOVED***
    // The last two characters of a valid encoded path must be a separator, so
    // there must be an end to this segment.
    var s = t.indexOf("", o);
    switch (((s < 0 || s > n) && C(), t.charAt(s + 1))) ***REMOVED***
      case "":
        var u = t.substring(o, s), a = void 0;
        (0 === i.length ? // Avoid copying for the common case of a segment that excludes \0
        // and \001
        a = u : (a = i += u, i = ""), r.push(a));
        break;
      case "":
        (i += t.substring(o, s), i += "\0");
        break;
      case "":
        // The escape character can be used in the output to encode itself.
        i += t.substring(o, s + 1);
        break;
      default:
        C();
    }
    o = s + 2;
  }
  return new Q(r);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Schema Version for the Web client:
* 1.  Initial version including Mutation Queue, Query Cache, and Remote
*     Document Cache
* 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
*     longer required because migration 3 unconditionally clears it.
* 3.  Dropped and re-created Query Cache to deal with cache corruption related
*     to limbo resolution. Addresses
*     https://github.com/firebase/firebase-ios-sdk/issues/1548
* 4.  Multi-Tab Support.
* 5.  Removal of held write acks.
* 6.  Create document global for tracking document cache size.
* 7.  Ensure every cached document has a sentinel row with a sequence number.
* 8.  Add collection-parent index for Collection Group queries.
* 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
*     an auto-incrementing ID. This is required for Index-Free queries.
* 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
* 11. Add bundles and named_queries for bundle support.
*/
/**
* Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
*/
var $n = function (t, e) ***REMOVED***
  (this.seconds = t, this.nanoseconds = e);
}, Jn = function (t, /** Whether to allow shared access from multiple tabs.*/
e, n) ***REMOVED***
  (this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n);
***REMOVED***
/**
* A singleton object to be stored in the 'owner' store in IndexedDb.
*
* A given database can have a single primary tab assigned at a given time. That
* tab must validate that it is still holding the primary lease before every
* operation that requires locked access. The primary tab should regularly
* write an updated timestamp to this lease to prevent other tabs from
* "stealing" the primary lease
*/
/**
* Name of the IndexedDb object store.
*
* Note that the name 'owner' is chosen to ensure backwards compatibility with
* older clients that only supported single locked access to the persistence
* layer.
*/
(Jn.store = "owner", /**
* The key string used for the single object that exists in the
* DbPrimaryClient store.
*/
Jn.key = "owner");
/**
* An object to be stored in the 'mutationQueues' store in IndexedDb.
*
* Each user gets a single queue of MutationBatches to apply to the server.
* DbMutationQueue tracks the metadata about the queue.
*/
var Zn = function (/**
* The normalized user ID to which this queue belongs.
*/
t, /**
* An identifier for the highest numbered batch that has been acknowledged
* by the server. All MutationBatches in this queue with batchIds less
* than or equal to this value are considered to have been acknowledged by
* the server.
*
* NOTE: this is deprecated and no longer used by the code.
*/
e, /**
* A stream token that was previously sent by the server.
*
* See StreamingWriteRequest in datastore.proto for more details about
* usage.
*
* After sending this token, earlier tokens may not be used anymore so
* only a single stream token is retained.
*
* NOTE: this is deprecated and no longer used by the code.
*/
n) ***REMOVED***
  (this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n);
***REMOVED***
/** Name of the IndexedDb object store.*/
(Zn.store = "mutationQueues", /** Keys are automatically assigned via the userId property.*/
Zn.keyPath = "userId");
/**
* An object to be stored in the 'mutations' store in IndexedDb.
*
* Represents a batch of user-level mutations intended to be sent to the server
* in a single write. Each user-level batch gets a separate DbMutationBatch
* with a new batchId.
*/
var tr = function (/**
* The normalized user ID to which this batch belongs.
*/
t, /**
* An identifier for this batch, allocated using an auto-generated key.
*/
e, /**
* The local write time of the batch, stored as milliseconds since the
* epoch.
*/
n, /**
* A list of "mutations" that represent a partial base state from when this
* write batch was initially created. During local application of the write
* batch, these baseMutations are applied prior to the real writes in order
* to override certain document fields from the remote document cache. This
* is necessary in the case of non-idempotent writes (e.g. `increment()`
* transforms) to make sure that the local view of the modified documents
* doesn't flicker if the remote document cache receives the result of the
* non-idempotent write before the write is removed from the queue.
*
* These mutations are never sent to the backend.
*/
r, /**
* A list of mutations to apply. All mutations will be applied atomically.
*
* Mutations are serialized via toMutation().
*/
i) ***REMOVED***
  (this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i);
***REMOVED***
/** Name of the IndexedDb object store.*/
(tr.store = "mutations", /** Keys are automatically assigned via the userId, batchId properties.*/
tr.keyPath = "batchId", /** The index name for lookup of mutations by user.*/
tr.userMutationsIndex = "userMutationsIndex", /** The user mutations index is keyed by [userId, batchId] pairs.*/
tr.userMutationsKeyPath = ["userId", "batchId"]);
/**
* An object to be stored in the 'documentMutations' store in IndexedDb.
*
* A manually maintained index of all the mutation batches that affect a given
* document key. The rows in this table are references based on the contents of
* DbMutationBatch.mutations.
*/
var er = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***}
  /**
  * Creates a [userId] key for use in the DbDocumentMutations index to iterate
  * over all of a user's document mutations.
  */
  return (t.prefixForUser = function (t) ***REMOVED***
    return [t];
  }, /**
  * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
  * index to iterate over all at document mutations for a given path or lower.
  */
  t.prefixForPath = function (t, e) ***REMOVED***
    return [t, Wn(e)];
  }, /**
  * Creates a full index key of [userId, encodedPath, batchId] for inserting
  * and deleting into the DbDocumentMutations index.
  */
  t.key = function (t, e, n) ***REMOVED***
    return [t, Wn(e), n];
  }, t);
})();
(er.store = "documentMutations", /**
* Because we store all the useful information for this store in the key,
* there is no useful information to store as the value. The raw (unencoded)
* path cannot be stored because IndexedDb doesn't store prototype
* information.
*/
er.PLACEHOLDER = new er());
/**
* Represents the known absence of a document at a particular version.
* Stored in IndexedDb as part of a DbRemoteDocument object.
*/
var nr = function (t, e) ***REMOVED***
  (this.path = t, this.readTime = e);
}, rr = function (t, e) ***REMOVED***
  (this.path = t, this.version = e);
}, ir = // TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function (/**
* Set to an instance of DbUnknownDocument if the data for a document is
* not known, but it is known that a document exists at the specified
* version (e.g. it had a successful update applied to it)
*/
t, /**
* Set to an instance of a DbNoDocument if it is known that no document
* exists.
*/
e, /**
* Set to an instance of a Document if there's a cached version of the
* document.
*/
n, /**
* Documents that were written to the remote document store based on
* a write acknowledgment are marked with `hasCommittedMutations`. These
* documents are potentially inconsistent with the backend's copy and use
* the write's commit version as their document version.
*/
r, /**
* When the document was read from the backend. Undefined for data written
* prior to schema version 9.
*/
i, /**
* The path of the collection this document is part of. Undefined for data
* written prior to schema version 9.
*/
o) ***REMOVED***
  (this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o);
***REMOVED***
/**
* Represents a document that is known to exist but whose data is unknown.
* Stored in IndexedDb as part of a DbRemoteDocument object.
*/
(ir.store = "remoteDocuments", /**
* An index that provides access to all entries sorted by read time (which
* corresponds to the last modification time of each row).
*
* This index is used to provide a changelog for Multi-Tab.
*/
ir.readTimeIndex = "readTimeIndex", ir.readTimeIndexPath = "readTime", /**
* An index that provides access to documents in a collection sorted by read
* time.
*
* This index is used to allow the RemoteDocumentCache to fetch newly changed
* documents in a collection.
*/
ir.collectionReadTimeIndex = "collectionReadTimeIndex", ir.collectionReadTimeIndexPath = ["parentPath", "readTime"]);
/**
* Contains a single entry that has metadata about the remote document cache.
*/
var or = /**
* @param byteSize - Approximately the total size in bytes of all the
* documents in the document cache.
*/
function (t) ***REMOVED***
  this.byteSize = t;
***REMOVED***
(or.store = "remoteDocumentGlobal", or.key = "remoteDocumentGlobalKey");
/**
* An object to be stored in the 'targets' store in IndexedDb.
*
* This is based on and should be kept in sync with the proto used in the iOS
* client.
*
* Each query the client listens to against the server is tracked on disk so
* that the query can be efficiently resumed on restart.
*/
var sr = function (/**
* An auto-generated sequential numeric identifier for the query.
*
* Queries are stored using their canonicalId as the key, but these
* canonicalIds can be quite long so we additionally assign a unique
* queryId which can be used by referenced data structures (e.g.
* indexes) to minimize the on-disk cost.
*/
t, /**
* The canonical string representing this query. This is not unique.
*/
e, /**
* The last readTime received from the Watch Service for this query.
*
* This is the same value as TargetChange.read_time in the protos.
*/
n, /**
* An opaque, server-assigned token that allows watching a query to be
* resumed after disconnecting without retransmitting all the data
* that matches the query. The resume token essentially identifies a
* point in time from which the server should resume sending results.
*
* This is related to the snapshotVersion in that the resumeToken
* effectively also encodes that value, but the resumeToken is opaque
* and sometimes encodes additional information.
*
* A consequence of this is that the resumeToken should be used when
* asking the server to reason about where this client is in the watch
* stream, but the client should use the snapshotVersion for its own
* purposes.
*
* This is the same value as TargetChange.resume_token in the protos.
*/
r, /**
* A sequence number representing the last time this query was
* listened to, used for garbage collection purposes.
*
* Conventionally this would be a timestamp value, but device-local
* clocks are unreliable and they must be able to create new listens
* even while disconnected. Instead this should be a monotonically
* increasing number that's incremented on each listen call.
*
* This is different from the queryId since the queryId is an
* immutable identifier assigned to the Query on first use while
* lastListenSequenceNumber is updated every time the query is
* listened to.
*/
i, /**
* Denotes the maximum snapshot version at which the associated query view
* contained no limbo documents.  Undefined for data written prior to
* schema version 9.
*/
o, /**
* The query for this target.
*
* Because canonical ids are not unique we must store the actual query. We
* use the proto to have an object we can persist without having to
* duplicate translation logic to and from a `Query` object.
*/
s) ***REMOVED***
  (this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s);
***REMOVED***
(sr.store = "targets", /** Keys are automatically assigned via the targetId property.*/
sr.keyPath = "targetId", /** The name of the queryTargets index.*/
sr.queryTargetsIndexName = "queryTargetsIndex", /**
* The index of all canonicalIds to the targets that they match. This is not
* a unique mapping because canonicalId does not promise a unique name for all
* possible queries, so we append the targetId to make the mapping unique.
*/
sr.queryTargetsKeyPath = ["canonicalId", "targetId"]);
/**
* An object representing an association between a target and a document, or a
* sentinel row marking the last sequence number at which a document was used.
* Each document cached must have a corresponding sentinel row before lru
* garbage collection is enabled.
*
* The target associations and sentinel rows are co-located so that orphaned
* documents and their sequence numbers can be identified efficiently via a scan
* of this store.
*/
var ur = function (/**
* The targetId identifying a target or 0 for a sentinel row.
*/
t, /**
* The path to the document, as encoded in the key.
*/
e, /**
* If this is a sentinel row, this should be the sequence number of the last
* time the document specified by `path` was used. Otherwise, it should be
* `undefined`.
*/
n) ***REMOVED***
  (this.targetId = t, this.path = e, this.sequenceNumber = n);
***REMOVED***
/** Name of the IndexedDb object store.*/
(ur.store = "targetDocuments", /** Keys are automatically assigned via the targetId, path properties.*/
ur.keyPath = ["targetId", "path"], /** The index name for the reverse index.*/
ur.documentTargetsIndex = "documentTargetsIndex", /** We also need to create the reverse index for these properties.*/
ur.documentTargetsKeyPath = ["path", "targetId"]);
/**
* A record of global state tracked across all Targets, tracked separately
* to avoid the need for extra indexes.
*
* This should be kept in-sync with the proto used in the iOS client.
*/
var ar = function (/**
* The highest numbered target id across all targets.
*
* See DbTarget.targetId.
*/
t, /**
* The highest numbered lastListenSequenceNumber across all targets.
*
* See DbTarget.lastListenSequenceNumber.
*/
e, /**
* A global snapshot version representing the last consistent snapshot we
* received from the backend. This is monotonically increasing and any
* snapshots received from the backend prior to this version (e.g. for
* targets resumed with a resumeToken) should be suppressed (buffered)
* until the backend has caught up to this snapshot version again. This
* prevents our cache from ever going backwards in time.
*/
n, /**
* The number of targets persisted.
*/
r) ***REMOVED***
  (this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r);
***REMOVED***
/**
* The key string used for the single object that exists in the
* DbTargetGlobal store.
*/
(ar.key = "targetGlobalKey", ar.store = "targetGlobal");
/**
* An object representing an association between a Collection id (e.g. 'messages')
* to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
* This is used to efficiently find all collections to query when performing
* a Collection Group query.
*/
var cr = function (/**
* The collectionId (e.g. 'messages')
*/
t, /**
* The path to the parent (either a document location or an empty path for
* a root-level collection).
*/
e) ***REMOVED***
  (this.collectionId = t, this.parent = e);
***REMOVED***
/** Name of the IndexedDb object store.*/
(cr.store = "collectionParents", /** Keys are automatically assigned via the collectionId, parent properties.*/
cr.keyPath = ["collectionId", "parent"]);
/**
* A record of the metadata state of each client.
*
* PORTING NOTE: This is used to synchronize multi-tab state and does not need
* to be ported to iOS or Android.
*/
var hr = function (// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup.*/
t, /** The last time this state was updated.*/
e, /** Whether the client's network connection is enabled.*/
n, /** Whether this client is running in a foreground tab.*/
r) ***REMOVED***
  (this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r);
***REMOVED***
/** Name of the IndexedDb object store.*/
(hr.store = "clientMetadata", /** Keys are automatically assigned via the clientId properties.*/
hr.keyPath = "clientId");
/**
* A object representing a bundle loaded by the SDK.
*/
var fr = function (/** The ID of the loaded bundle.*/
t, /** The create time of the loaded bundle.*/
e, /** The schema version of the loaded bundle.*/
n) ***REMOVED***
  (this.bundleId = t, this.createTime = e, this.version = n);
***REMOVED***
/** Name of the IndexedDb object store.*/
(fr.store = "bundles", fr.keyPath = "bundleId");
/**
* A object representing a named query loaded by the SDK via a bundle.
*/
var lr = function (/** The name of the query.*/
t, /** The read time of the results saved in the bundle from the named query.*/
e, /** The query saved in the bundle.*/
n) ***REMOVED***
  (this.name = t, this.readTime = e, this.bundledQuery = n);
***REMOVED***
/** Name of the IndexedDb object store.*/
(lr.store = "namedQueries", lr.keyPath = "name");
// Visible for testing
var dr = _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__spreadArray(_tslib.__spreadArray([], [Zn.store, tr.store, er.store, ir.store, sr.store, Jn.store, ar.store, ur.store]), [hr.store])), [or.store])), [cr.store])), [fr.store, lr.store]), pr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", yr = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    this.onCommittedListeners = [];
  }
  return (t.prototype.addOnCommittedListener = function (t) ***REMOVED***
    this.onCommittedListeners.push(t);
  }, t.prototype.raiseOnCommittedEvent = function () ***REMOVED***
    this.onCommittedListeners.forEach(function (t) ***REMOVED***
      return t();
    });
  }, t);
})(), vr = function () ***REMOVED***
  var t = this;
  this.promise = new Promise(function (e, n) ***REMOVED***
    (t.resolve = e, t.reject = n);
  });
}, mr = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    var e = this;
    // NOTE: next/catchCallback will always point to our own wrapper functions,
    // not the user's raw next() or catch() callbacks.
    (this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = !1, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = !1, t(function (t) ***REMOVED***
      (e.isDone = !0, e.result = t, e.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      e.nextCallback(t));
    }, function (t) ***REMOVED***
      (e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t));
    }));
  }
  return (t.prototype.catch = function (t) ***REMOVED***
    return this.next(void 0, t);
  }, t.prototype.next = function (e, n) ***REMOVED***
    var r = this;
    return (this.callbackAttached && C(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(e, this.result) : new t(function (t, i) ***REMOVED***
      (r.nextCallback = function (n) ***REMOVED***
        r.wrapSuccess(e, n).next(t, i);
      }, r.catchCallback = function (e) ***REMOVED***
        r.wrapFailure(n, e).next(t, i);
      });
    }));
  }, t.prototype.toPromise = function () ***REMOVED***
    var t = this;
    return new Promise(function (e, n) ***REMOVED***
      t.next(e, n);
    });
  }, t.prototype.wrapUserFunction = function (e) ***REMOVED***
    try ***REMOVED***
      var n = e();
      return n instanceof t ? n : t.resolve(n);
    } catch (e) ***REMOVED***
      return t.reject(e);
    }
  }, t.prototype.wrapSuccess = function (e, n) ***REMOVED***
    return e ? this.wrapUserFunction(function () ***REMOVED***
      return e(n);
    }) : t.resolve(n);
  }, t.prototype.wrapFailure = function (e, n) ***REMOVED***
    return e ? this.wrapUserFunction(function () ***REMOVED***
      return e(n);
    }) : t.reject(n);
  }, t.resolve = function (e) ***REMOVED***
    return new t(function (t, n) ***REMOVED***
      t(e);
    });
  }, t.reject = function (e) ***REMOVED***
    return new t(function (t, n) ***REMOVED***
      n(e);
    });
  }, t.waitFor = function (// Accept all Promise types in waitFor().
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  e) ***REMOVED***
    return new t(function (t, n) ***REMOVED***
      var r = 0, i = 0, o = !1;
      (e.forEach(function (e) ***REMOVED***
        (++r, e.next(function () ***REMOVED***
          (++i, o && i === r && t());
        }, function (t) ***REMOVED***
          return n(t);
        }));
      }), o = !0, i === r && t());
    });
  }, /**
  * Given an array of predicate functions that asynchronously evaluate to a
  * boolean, implements a short-circuiting `or` between the results. Predicates
  * will be evaluated until one of them returns `true`, then stop. The final
  * result will be whether any of them returned `true`.
  */
  t.or = function (e) ***REMOVED***
    for (var n = t.resolve(!1), r = function (e) ***REMOVED***
      n = n.next(function (n) ***REMOVED***
        return n ? t.resolve(n) : e();
      });
    }, i = 0, o = e; i < o.length; i++) ***REMOVED***
      r(o[i]);
    }
    return n;
  }, t.forEach = function (t, e) ***REMOVED***
    var n = this, r = [];
    return (t.forEach(function (t, i) ***REMOVED***
      r.push(e.call(n, t, i));
    }), this.waitFor(r));
  }, t);
})(), gr = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    var n = this;
    (this.action = t, this.transaction = e, this.aborted = !1, /**
    * A promise that resolves with the result of the IndexedDb transaction.
    */
    this.ft = new vr(), this.transaction.oncomplete = function () ***REMOVED***
      n.ft.resolve();
    }, this.transaction.onabort = function () ***REMOVED***
      e.error ? n.ft.reject(new Ir(t, e.error)) : n.ft.resolve();
    }, this.transaction.onerror = function (e) ***REMOVED***
      var r = Dr(e.target.error);
      n.ft.reject(new Ir(t, r));
    });
  }
  return (t.open = function (e, n, r, i) ***REMOVED***
    try ***REMOVED***
      return new t(n, e.transaction(i, r));
    } catch (e) ***REMOVED***
      throw new Ir(n, e);
    }
  }, Object.defineProperty(t.prototype, "dt", ***REMOVED***
    get: function () ***REMOVED***
      return this.ft.promise;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.abort = function (t) ***REMOVED***
    (t && this.ft.reject(t), this.aborted || (N("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort()));
  }, /**
  * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
  * operations performed on the SimpleDbStore happen within the context of this
  * transaction and it cannot be used anymore once the transaction is
  * completed.
  *
  * Note that we can't actually enforce that the KeyType and ValueType are
  * correct, but they allow type safety through the rest of the consuming code.
  */
  t.prototype.store = function (t) ***REMOVED***
    var e = this.transaction.objectStore(t);
    return new Er(e);
  }, t);
})(), wr = /** @class*/
(function () ***REMOVED***
  /*
  * Creates a new SimpleDb wrapper for IndexedDb database `name`.
  *
  * Note that `version` must not be a downgrade. IndexedDB does not support
  * downgrading the schema version. We currently do not support any way to do
  * versioning outside of IndexedDB's versioning mechanism, as only
  * version-upgrade transactions are allowed to do things like create
  * objectstores.
  */
  function e(n, r, i) ***REMOVED***
    (this.name = n, this.version = r, this.wt = i, // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
    // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
    // whatever reason it's much harder to hit after 12.2 so we only proactively
    // log on 12.2.
    12.2 === e._t(_firebaseUtil.getUA()) && A("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."));
  }
  /** Deletes the specified database.*/
  return (e.delete = function (t) ***REMOVED***
    return (N("SimpleDb", "Removing database:", t), Tr(window.indexedDB.deleteDatabase(t)).toPromise());
  }, /** Returns true if IndexedDB is available in the current environment.*/
  e.yt = function () ***REMOVED***
    if ("undefined" == typeof indexedDB) return !1;
    if (e.gt()) return !0;
    // We extensively use indexed array values and compound keys,
    // which IE and Edge do not support. However, they still have indexedDB
    // defined on the window, so we need to check for them here and make sure
    // to return that persistence is not enabled for those browsers.
    // For tracking support of this feature, see here:
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
    // Check the UA string to find out the browser.
    var n = _firebaseUtil.getUA(), r = e._t(n), i = 0 < r && r < 10, o = e.Et(n), s = 0 < o && o < 4.5;
    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    // Edge
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
    // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
    // iOS Safari: Disable for users running iOS version < 10.
    return !(n.indexOf("MSIE ") > 0 || n.indexOf("Trident/") > 0 || n.indexOf("Edge/") > 0 || i || s);
  }, /**
  * Returns true if the backing IndexedDB store is the Node IndexedDBShim
  * (see https://github.com/axemclion/IndexedDBShim).
  */
  e.gt = function () ***REMOVED***
    var t;
    return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Tt);
  }, /** Helper to get a typed SimpleDbStore from a transaction.*/
  e.It = function (t, e) ***REMOVED***
    return t.store(e);
  }, // visible for testing
  /** Parse User Agent to determine iOS version. Returns -1 if not found.*/
  e._t = function (t) ***REMOVED***
    var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n);
  }, // visible for testing
  /** Parse User Agent to determine Android version. Returns -1 if not found.*/
  e.Et = function (t) ***REMOVED***
    var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n);
  }, /**
  * Opens the specified database, creating or upgrading it if necessary.
  */
  e.prototype.At = function (t) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var e, n = this;
      return _tslib.__generator(this, function (r) ***REMOVED***
        switch (r.label) ***REMOVED***
          case 0:
            return this.db ? [3, /*break*/
            2] : (N("SimpleDb", "Opening database:", this.name), e = this, [4, /*yield*/
            new Promise(function (e, r) ***REMOVED***
              // TODO(mikelehen): Investigate browser compatibility.
              // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
              // suggests IE9 and older WebKit browsers handle upgrade
              // differently. They expect setVersion, as described here:
              // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
              var i = indexedDB.open(n.name, n.version);
              (i.onsuccess = function (t) ***REMOVED***
                var n = t.target.result;
                e(n);
              }, i.onblocked = function () ***REMOVED***
                r(new Ir(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
              }, i.onerror = function (e) ***REMOVED***
                var n = e.target.error;
                "VersionError" === n.name ? r(new T(E.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(new Ir(t, n));
              }, i.onupgradeneeded = function (t) ***REMOVED***
                N("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                var e = t.target.result;
                n.wt.Rt(e, i.transaction, t.oldVersion, n.version).next(function () ***REMOVED***
                  N("SimpleDb", "Database upgrade to version " + n.version + " complete");
                });
              });
            })]);
          case 1:
            (e.db = r.sent(), r.label = 2);
          case 2:
            return [2, /*return*/
            (this.bt && (this.db.onversionchange = function (t) ***REMOVED***
              return n.bt(t);
            }), this.db)];
        }
      });
    });
  }, e.prototype.vt = function (t) ***REMOVED***
    (this.bt = t, this.db && (this.db.onversionchange = function (e) ***REMOVED***
      return t(e);
    }));
  }, e.prototype.runTransaction = function (t, e, n, r) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var i, o, s, u, a;
      return _tslib.__generator(this, function (c) ***REMOVED***
        switch (c.label) ***REMOVED***
          case 0:
            (i = "readonly" === e, o = 0, s = function () ***REMOVED***
              var e, s, a, c, h;
              return _tslib.__generator(this, function (f) ***REMOVED***
                switch (f.label) ***REMOVED***
                  case 0:
                    (++o, f.label = 1);
                  case 1:
                    return (f.trys.push([1, 4, , 5]), [4, /*yield*/
                    u.At(t)]);
                  case 2:
                    // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                    // fire), but still return the original transactionFnResult back to the
                    // caller.
                    return (u.db = f.sent(), e = gr.open(u.db, t, i ? "readonly" : "readwrite", n), s = r(e).catch(function (t) ***REMOVED***
                      // Abort the transaction if there was an error.
                      return (e.abort(t), mr.reject(t));
                    }).toPromise(), a = ***REMOVED***}, s.catch(function () ***REMOVED***}), [4, /*yield*/
                    e.dt]);
                  case 3:
                    return [2, /*return*/
                    (a.value = // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                    // fire), but still return the original transactionFnResult back to the
                    // caller.
                    (f.sent(), s), a)];
                  case 4:
                    return (c = f.sent(), h = "FirebaseError" !== c.name && o < 3, N("SimpleDb", "Transaction failed with error:", c.message, "Retrying:", h), u.close(), h ? [3, /*break*/
                    5] : [2, /*return*/
                    ***REMOVED***
                      value: Promise.reject(c)
                    }]);
                  case 5:
                    return [2];
                }
              });
            }, u = this, c.label = 1);
          case 1:
            return [5, /*yield**/
            s()];
          case 2:
            if ("object" == typeof (a = c.sent())) return [2, /*return*/
            a.value];
            c.label = 3;
          case 3:
            return [3, /*break*/
            1];
          case 4:
            return [2];
        }
      });
    });
  }, e.prototype.close = function () ***REMOVED***
    (this.db && this.db.close(), this.db = void 0);
  }, e);
})(), br = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.Pt = t, this.Vt = !1, this.St = null);
  }
  return (Object.defineProperty(t.prototype, "isDone", ***REMOVED***
    get: function () ***REMOVED***
      return this.Vt;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "Dt", ***REMOVED***
    get: function () ***REMOVED***
      return this.St;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "cursor", ***REMOVED***
    set: function (t) ***REMOVED***
      this.Pt = t;
    },
    enumerable: !1,
    configurable: !0
  }), /**
  * This function can be called to stop iteration at any point.
  */
  t.prototype.done = function () ***REMOVED***
    this.Vt = !0;
  }, /**
  * This function can be called to skip to that next key, which could be
  * an index or a primary key.
  */
  t.prototype.Ct = function (t) ***REMOVED***
    this.St = t;
  }, /**
  * Delete the current cursor value from the object store.
  *
  * NOTE: You CANNOT do this with a keysOnly query.
  */
  t.prototype.delete = function () ***REMOVED***
    return Tr(this.Pt.delete());
  }, t);
})(), Ir = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, E.UNAVAILABLE, "IndexedDB transaction '" + e + "' failed: " + n) || this).name = "IndexedDbTransactionError", r);
  }
  return (_tslib.__extends(e, t), e);
})(T);
// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
* A base class representing a persistence transaction, encapsulating both the
* transaction's sequence numbers as well as a list of onCommitted listeners.
*
* When you call Persistence.runTransaction(), it will create a transaction and
* pass it to your callback. You then pass it to any method that operates
* on persistence.
*/
/** Verifies whether `e` is an IndexedDbTransactionError.*/
function _r(t) ***REMOVED***
  // Use name equality, as instanceof checks on errors don't work with errors
  // that wrap other errors.
  return "IndexedDbTransactionError" === t.name;
}
/**
* A wrapper around an IDBObjectStore providing an API that:
*
* 1) Has generic KeyType / ValueType parameters to provide strongly-typed
* methods for acting against the object store.
* 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
* method return a PersistencePromise instead.
* 3) Provides a higher-level API to avoid needing to do excessive wrapping of
* intermediate IndexedDB types (IDBCursorWithValue, etc.)
*/
var Er = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this.store = t;
  }
  return (t.prototype.put = function (t, e) ***REMOVED***
    var n;
    return (void 0 !== e ? (N("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (N("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), Tr(n));
  }, /**
  * Adds a new value into an Object Store and returns the new key. Similar to
  * IndexedDb's `add()`, this method will fail on primary key collisions.
  *
  * @param value - The object to write.
  * @returns The key of the value to add.
  */
  t.prototype.add = function (t) ***REMOVED***
    return (N("SimpleDb", "ADD", this.store.name, t, t), Tr(this.store.add(t)));
  }, /**
  * Gets the object with the specified key from the specified store, or null
  * if no object exists with the specified key.
  *
  * @key The key of the object to get.
  * @returns The object with the specified key or null if no object exists.
  */
  t.prototype.get = function (t) ***REMOVED***
    var e = this;
    // We're doing an unsafe cast to ValueType.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Tr(this.store.get(t)).next(function (n) ***REMOVED***
      // Normalize nonexistence to null.
      return (void 0 === n && (n = null), N("SimpleDb", "GET", e.store.name, t, n), n);
    });
  }, t.prototype.delete = function (t) ***REMOVED***
    return (N("SimpleDb", "DELETE", this.store.name, t), Tr(this.store.delete(t)));
  }, /**
  * If we ever need more of the count variants, we can add overloads. For now,
  * all we need is to count everything in a store.
  *
  * Returns the number of rows in the store.
  */
  t.prototype.count = function () ***REMOVED***
    return (N("SimpleDb", "COUNT", this.store.name), Tr(this.store.count()));
  }, t.prototype.Nt = function (t, e) ***REMOVED***
    var n = this.cursor(this.options(t, e)), r = [];
    return this.xt(n, function (t, e) ***REMOVED***
      r.push(e);
    }).next(function () ***REMOVED***
      return r;
    });
  }, t.prototype.Ft = function (t, e) ***REMOVED***
    N("SimpleDb", "DELETE ALL", this.store.name);
    var n = this.options(t, e);
    n.kt = !1;
    var r = this.cursor(n);
    return this.xt(r, function (t, e, n) ***REMOVED***
      return n.delete();
    });
  }, t.prototype.Ot = function (t, e) ***REMOVED***
    var n;
    e ? n = t : (n = ***REMOVED***}, e = t);
    var r = this.cursor(n);
    return this.xt(r, e);
  }, /**
  * Iterates over a store, but waits for the given callback to complete for
  * each entry before iterating the next entry. This allows the callback to do
  * asynchronous work to determine if this iteration should continue.
  *
  * The provided callback should return `true` to continue iteration, and
  * `false` otherwise.
  */
  t.prototype.$t = function (t) ***REMOVED***
    var e = this.cursor(***REMOVED***});
    return new mr(function (n, r) ***REMOVED***
      (e.onerror = function (t) ***REMOVED***
        var e = Dr(t.target.error);
        r(e);
      }, e.onsuccess = function (e) ***REMOVED***
        var r = e.target.result;
        r ? t(r.primaryKey, r.value).next(function (t) ***REMOVED***
          t ? r.continue() : n();
        }) : n();
      });
    });
  }, t.prototype.xt = function (t, e) ***REMOVED***
    var n = [];
    return new mr(function (r, i) ***REMOVED***
      (t.onerror = function (t) ***REMOVED***
        i(t.target.error);
      }, t.onsuccess = function (t) ***REMOVED***
        var i = t.target.result;
        if (i) ***REMOVED***
          var o = new br(i), s = e(i.primaryKey, i.value, o);
          if (s instanceof mr) ***REMOVED***
            var u = s.catch(function (t) ***REMOVED***
              return (o.done(), mr.reject(t));
            });
            n.push(u);
          }
          o.isDone ? r() : null === o.Dt ? i.continue() : i.continue(o.Dt);
        } else r();
      });
    }).next(function () ***REMOVED***
      return mr.waitFor(n);
    });
  }, t.prototype.options = function (t, e) ***REMOVED***
    var n;
    return (void 0 !== t && ("string" == typeof t ? n = t : e = t), ***REMOVED***
      index: n,
      range: e
    });
  }, t.prototype.cursor = function (t) ***REMOVED***
    var e = "next";
    if ((t.reverse && (e = "prev"), t.index)) ***REMOVED***
      var n = this.store.index(t.index);
      return t.kt ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
    }
    return this.store.openCursor(t.range, e);
  }, t);
})();
/**
* Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
* handlers to resolve / reject the PersistencePromise as appropriate.
*/
function Tr(t) ***REMOVED***
  return new mr(function (e, n) ***REMOVED***
    (t.onsuccess = function (t) ***REMOVED***
      var n = t.target.result;
      e(n);
    }, t.onerror = function (t) ***REMOVED***
      var e = Dr(t.target.error);
      n(e);
    });
  });
}
// Guard so we only report the error once.
var Sr = !1;
function Dr(e) ***REMOVED***
  var n = wr._t(_firebaseUtil.getUA());
  if (n >= 12.2 && n < 13) ***REMOVED***
    var r = "An internal error was encountered in the Indexed Database server";
    if (e.message.indexOf(r) >= 0) ***REMOVED***
      // Wrap error in a more descriptive one.
      var i = new T("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + r + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
      return (Sr || (Sr = !0, // Throw a global exception outside of this promise chain, for the user to
      // potentially catch.
      setTimeout(function () ***REMOVED***
        throw i;
      }, 0)), i);
    }
  }
  return e;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Nr = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this) || this).Mt = e, r.currentSequenceNumber = n, r);
  }
  return (_tslib.__extends(e, t), e);
})(yr);
function Ar(t, e) ***REMOVED***
  var n = O(t);
  return wr.It(n.Mt, e);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A batch of mutations that will be sent as one unit to the backend.
*/
var kr = /** @class*/
(function () ***REMOVED***
  /**
  * @param batchId - The unique ID of this mutation batch.
  * @param localWriteTime - The original write time of this mutation.
  * @param baseMutations - Mutations that are used to populate the base
  * values when this mutation is applied locally. This can be used to locally
  * overwrite values that are persisted in the remote document cache. Base
  * mutations are never sent to the backend.
  * @param mutations - The user-provided mutations in this mutation batch.
  * User-provided mutations are applied both locally and remotely on the
  * backend.
  */
  function t(t, e, n, r) ***REMOVED***
    (this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = r);
  }
  return (t.prototype.applyToRemoteDocument = function (t, e) ***REMOVED***
    for (var n = e.mutationResults, r = 0; r < this.mutations.length; r++) ***REMOVED***
      var i = this.mutations[r];
      i.key.isEqual(t.key) && De(i, t, n[r]);
    }
  }, /**
  * Computes the local view of a document given all the mutations in this
  * batch.
  *
  * @param document - The document to apply mutations to.
  */
  t.prototype.applyToLocalView = function (t) ***REMOVED***
    // First, apply the base state. This allows us to apply non-idempotent
    // transform against a consistent set of values.
    for (var e = 0, n = this.baseMutations; e < n.length; e++) ***REMOVED***
      (o = n[e]).key.isEqual(t.key) && Ne(o, t, this.localWriteTime);
    }
    // Second, apply all user-provided mutations.
    for (var r = 0, i = this.mutations; r < i.length; r++) ***REMOVED***
      var o;
      (o = i[r]).key.isEqual(t.key) && Ne(o, t, this.localWriteTime);
    }
  }, /**
  * Computes the local view for all provided documents given the mutations in
  * this batch.
  */
  t.prototype.applyToLocalDocumentSet = function (t) ***REMOVED***
    var e = this;
    // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
    // directly (as done in `applyToLocalView()`), we can reduce the complexity
    // to O(n).
    this.mutations.forEach(function (n) ***REMOVED***
      var r = t.get(n.key), i = r;
      // TODO(mutabledocuments): This method should take a MutableDocumentMap
      // and we should remove this cast.
      (e.applyToLocalView(i), r.isValidDocument() || i.convertToNoDocument(U.min()));
    });
  }, t.prototype.keys = function () ***REMOVED***
    return this.mutations.reduce(function (t, e) ***REMOVED***
      return t.add(e.key);
    }, en());
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return this.batchId === t.batchId && F(this.mutations, t.mutations, function (t, e) ***REMOVED***
      return ke(t, e);
    }) && F(this.baseMutations, t.baseMutations, function (t, e) ***REMOVED***
      return ke(t, e);
    });
  }, t);
})(), xr = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, /**
  * A pre-computed mapping from each mutated document to the resulting
  * version.
  */
  r) ***REMOVED***
    (this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = r);
  }
  return (t.from = function (e, n, r) ***REMOVED***
    R(e.mutations.length === r.length);
    for (var i = Ze(), o = e.mutations, s = 0; s < o.length; s++) i = i.insert(o[s].key, r[s].version);
    return new t(e, n, r, i);
  }, t);
})(), Cr = /** @class*/
(function () ***REMOVED***
  function t(/** The target being listened to.*/
  t, /**
  * The target ID to which the target corresponds; Assigned by the
  * LocalStore for user listens and by the SyncEngine for limbo watches.
  */
  e, /** The purpose of the target.*/
  n, /**
  * The sequence number of the last transaction during which this target data
  * was modified.
  */
  r, /** The latest snapshot version seen for this target.*/
  i, /** The latest snapshot version seen for this target.*/
  /**
  * The maximum snapshot version at which the associated view
  * contained no limbo documents.
  */
  o, /**
  * An opaque, server-assigned token that allows watching a target to be
  * resumed after disconnecting without retransmitting all the data that
  * matches the target. The resume token essentially identifies a point in
  * time from which the server should resume sending results.
  */
  s) ***REMOVED***
    (void 0 === i && (i = U.min()), void 0 === o && (o = U.min()), void 0 === s && (s = Y.EMPTY_BYTE_STRING), this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s);
  }
  /** Creates a new target data instance with an updated sequence number.*/
  return (t.prototype.withSequenceNumber = function (e) ***REMOVED***
    return new t(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  }, /**
  * Creates a new target data instance with an updated resume token and
  * snapshot version.
  */
  t.prototype.withResumeToken = function (e, n) ***REMOVED***
    return new t(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
  }, /**
  * Creates a new target data instance with an updated last limbo free
  * snapshot version number.
  */
  t.prototype.withLastLimboFreeSnapshotVersion = function (e) ***REMOVED***
    return new t(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken);
  }, t);
})(), Rr = function (t) ***REMOVED***
  this.Lt = t;
***REMOVED***
/** The result of applying a mutation batch to the backend.*/
/** Decodes a remote document from storage locally to a Document.*/
function Or(t, e) ***REMOVED***
  if (e.document) return xn(t.Lt, e.document, !!e.hasCommittedMutations);
  if (e.noDocument) ***REMOVED***
    var n = st.fromSegments(e.noDocument.path), r = Vr(e.noDocument.readTime), i = _t.newNoDocument(n, r);
    return e.hasCommittedMutations ? i.setHasCommittedMutations() : i;
  }
  if (e.unknownDocument) ***REMOVED***
    var o = st.fromSegments(e.unknownDocument.path);
    r = Vr(e.unknownDocument.version);
    return _t.newUnknownDocument(o, r);
  }
  return C();
}
/** Encodes a document for storage locally.*/
function Lr(t, e, n) ***REMOVED***
  var r = Pr(n), i = e.key.path.popLast().toArray();
  if (e.isFoundDocument()) ***REMOVED***
    var o = (function (t, e) ***REMOVED***
      return ***REMOVED***
        name: En(t, e.key),
        fields: e.data.toProto().mapValue.fields,
        updateTime: mn(t, e.version.toTimestamp())
      ***REMOVED***
    })(t.Lt, e), s = e.hasCommittedMutations;
    return new ir(/*unknownDocument=*/
    null, /*noDocument=*/
    null, o, s, r, i);
  }
  if (e.isNoDocument()) ***REMOVED***
    var u = e.key.path.toArray(), a = Fr(e.version);
    s = e.hasCommittedMutations;
    return new ir(/*unknownDocument=*/
    null, new nr(u, a), /*document=*/
    null, s, r, i);
  }
  if (e.isUnknownDocument()) ***REMOVED***
    var c = e.key.path.toArray(), h = Fr(e.version);
    return new ir(new rr(c, h), /*noDocument=*/
    null, /*document=*/
    null, /*hasCommittedMutations=*/
    !0, r, i);
  }
  return C();
}
function Pr(t) ***REMOVED***
  var e = t.toTimestamp();
  return [e.seconds, e.nanoseconds];
}
function Mr(t) ***REMOVED***
  var e = new q(t[0], t[1]);
  return U.fromTimestamp(e);
}
function Fr(t) ***REMOVED***
  var e = t.toTimestamp();
  return new $n(e.seconds, e.nanoseconds);
}
function Vr(t) ***REMOVED***
  var e = new q(t.seconds, t.nanoseconds);
  return U.fromTimestamp(e);
}
/** Encodes a batch of mutations into a DbMutationBatch for local storage.*/
/** Decodes a DbMutationBatch into a MutationBatch*/
function qr(t, e) ***REMOVED***
  // Squash old transform mutations into existing patch or set mutations.
  // The replacement of representing `transforms` with `update_transforms`
  // on the SDK means that old `transform` mutations stored in IndexedDB need
  // to be updated to `update_transforms`.
  // TODO(b/174608374): Remove this code once we perform a schema migration.
  for (var n = (e.baseMutations || []).map(function (e) ***REMOVED***
    return Rn(t.Lt, e);
  }), r = 0; r < e.mutations.length - 1; ++r) ***REMOVED***
    var i = e.mutations[r];
    if (r + 1 < e.mutations.length && void 0 !== e.mutations[r + 1].transform) ***REMOVED***
      var o = e.mutations[r + 1];
      (i.updateTransforms = o.transform.fieldTransforms, e.mutations.splice(r + 1, 1), ++r);
    }
  }
  var s = e.mutations.map(function (e) ***REMOVED***
    return Rn(t.Lt, e);
  }), u = q.fromMillis(e.localWriteTimeMs);
  return new kr(e.batchId, u, n, s);
}
/** Decodes a DbTarget into TargetData*/
function Ur(t) ***REMOVED***
  var e, n, r = Vr(t.readTime), i = void 0 !== t.lastLimboFreeSnapshotVersion ? Vr(t.lastLimboFreeSnapshotVersion) : U.min();
  return (void 0 !== t.query.documents ? (R(1 === (n = t.query).documents.length), e = Jt(Qt(Dn(n.documents[0])))) : e = (function (t) ***REMOVED***
    return Jt(Pn(t));
  })(t.query), new Cr(e, t.targetId, 0, /*Listen*/
  t.lastListenSequenceNumber, r, i, Y.fromBase64String(t.resumeToken)));
}
function Br(t, e) ***REMOVED***
  var n, r = Fr(e.snapshotVersion), i = Fr(e.lastLimboFreeSnapshotVersion);
  n = Nt(e.target) ? On(t.Lt, e.target) : Ln(t.Lt, e.target);
  // We can't store the resumeToken as a ByteString in IndexedDb, so we
  // convert it to a base64 string for storage.
  var o = e.resumeToken.toBase64();
  // lastListenSequenceNumber is always 0 until we do real GC.
  return new sr(e.targetId, St(e.target), r, o, e.sequenceNumber, i, n);
}
/**
* A helper function for figuring out what kind of query has been stored.
*/
/**
* Encodes a `BundledQuery` from bundle proto to a Query object.
*
* This reconstructs the original query used to build the bundle being loaded,
* including features exists only in SDKs (for example: limit-to-last).
*/
function jr(t) ***REMOVED***
  var e = Pn(***REMOVED***
    parent: t.parent,
    structuredQuery: t.structuredQuery
  });
  return "LAST" === t.limitType ? Zt(e, e.limit, "L") : e;
}
/** Encodes a NamedQuery proto object to a NamedQuery model object.*/
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Kr = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***}
  return (t.prototype.getBundleMetadata = function (t, e) ***REMOVED***
    return Gr(t).get(e).next(function (t) ***REMOVED***
      if (t) return ***REMOVED***
        id: (e = t).bundleId,
        createTime: Vr(e.createTime),
        version: e.version
      ***REMOVED***
      /** Encodes a DbBundle to a BundleMetadata object.*/
      var e;
    });
  }, t.prototype.saveBundleMetadata = function (t, e) ***REMOVED***
    return Gr(t).put(***REMOVED***
      bundleId: (n = e).id,
      createTime: Fr(bn(n.createTime)),
      version: n.version
    });
    var n;
  }, t.prototype.getNamedQuery = function (t, e) ***REMOVED***
    return Qr(t).get(e).next(function (t) ***REMOVED***
      if (t) return ***REMOVED***
        name: (e = t).name,
        query: jr(e.bundledQuery),
        readTime: Vr(e.readTime)
      ***REMOVED***
      var e;
    });
  }, t.prototype.saveNamedQuery = function (t, e) ***REMOVED***
    return Qr(t).put((function (t) ***REMOVED***
      return ***REMOVED***
        name: t.name,
        readTime: Fr(bn(t.readTime)),
        bundledQuery: t.bundledQuery
      ***REMOVED***
    })(e));
  }, t);
})();
/**
* Helper to get a typed SimpleDbStore for the bundles object store.
*/
function Gr(t) ***REMOVED***
  return Ar(t, fr.store);
}
/**
* Helper to get a typed SimpleDbStore for the namedQueries object store.
*/
function Qr(t) ***REMOVED***
  return Ar(t, lr.store);
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An in-memory implementation of IndexManager.
*/
var zr = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    this.Bt = new Wr();
  }
  return (t.prototype.addToCollectionParentIndex = function (t, e) ***REMOVED***
    return (this.Bt.add(e), mr.resolve());
  }, t.prototype.getCollectionParents = function (t, e) ***REMOVED***
    return mr.resolve(this.Bt.getEntries(e));
  }, t);
})(), Wr = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    this.index = ***REMOVED******REMOVED***
  }
  // Returns false if the entry already existed.
  return (t.prototype.add = function (t) ***REMOVED***
    var e = t.lastSegment(), n = t.popLast(), r = this.index[e] || new ze(Q.comparator), i = !r.has(n);
    return (this.index[e] = r.add(n), i);
  }, t.prototype.has = function (t) ***REMOVED***
    var e = t.lastSegment(), n = t.popLast(), r = this.index[e];
    return r && r.has(n);
  }, t.prototype.getEntries = function (t) ***REMOVED***
    return (this.index[t] || new ze(Q.comparator)).toArray();
  }, t);
})(), Hr = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    /**
    * An in-memory copy of the index entries we've already written since the SDK
    * launched. Used to avoid re-writing the same entry repeatedly.
    *
    * This is *NOT* a complete cache of what's in persistence and so can never be used to
    * satisfy reads.
    */
    this.qt = new Wr();
  }
  /**
  * Adds a new entry to the collection parent index.
  *
  * Repeated calls for the same collectionPath should be avoided within a
  * transaction as IndexedDbIndexManager only caches writes once a transaction
  * has been committed.
  */
  return (t.prototype.addToCollectionParentIndex = function (t, e) ***REMOVED***
    var n = this;
    if (!this.qt.has(e)) ***REMOVED***
      var r = e.lastSegment(), i = e.popLast();
      t.addOnCommittedListener(function () ***REMOVED***
        // Add the collection to the in memory cache only if the transaction was
        // successfully committed.
        n.qt.add(e);
      });
      var o = ***REMOVED***
        collectionId: r,
        parent: Wn(i)
      ***REMOVED***
      return Yr(t).put(o);
    }
    return mr.resolve();
  }, t.prototype.getCollectionParents = function (t, e) ***REMOVED***
    var n = [], r = IDBKeyRange.bound([e, ""], [V(e), ""], /*lowerOpen=*/
    !1, /*upperOpen=*/
    !0);
    return Yr(t).Nt(r).next(function (t) ***REMOVED***
      for (var r = 0, i = t; r < i.length; r++) ***REMOVED***
        var o = i[r];
        // This collectionId guard shouldn't be necessary (and isn't as long
        // as we're running in a real browser), but there's a bug in
        // indexeddbshim that breaks our range in our tests running in node:
        // https://github.com/axemclion/IndexedDBShim/issues/334
        if (o.collectionId !== e) break;
        n.push(Xn(o.parent));
      }
      return n;
    });
  }, t);
})();
/**
* Internal implementation of the collection-parent index exposed by MemoryIndexManager.
* Also used for in-memory caching by IndexedDbIndexManager and initial index population
* in indexeddb_schema.ts
*/
/**
* Helper to get a typed SimpleDbStore for the collectionParents
* document store.
*/
function Yr(t) ***REMOVED***
  return Ar(t, cr.store);
}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Xr = ***REMOVED***
  didRun: !1,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
}, $r = /** @class*/
(function () ***REMOVED***
  function t(// When we attempt to collect, we will only do so if the cache size is greater than this
  // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
  t, // The percentage of sequence numbers that we will attempt to collect
  e, // A cap on the total number of sequence numbers that will be collected. This prevents
  // us from collecting a huge number of sequence numbers if the cache has grown very large.
  n) ***REMOVED***
    (this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n);
  }
  return (t.withCacheSize = function (e) ***REMOVED***
    return new t(e, t.DEFAULT_COLLECTION_PERCENTILE, t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }, t);
})();
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Delete a mutation batch and the associated document mutations.
* @returns A PersistencePromise of the document mutations that were removed.
*/
function Jr(t, e, n) ***REMOVED***
  var r = t.store(tr.store), i = t.store(er.store), o = [], s = IDBKeyRange.only(n.batchId), u = 0, a = r.Ot(***REMOVED***
    range: s
  }, function (t, e, n) ***REMOVED***
    return (u++, n.delete());
  });
  o.push(a.next(function () ***REMOVED***
    R(1 === u);
  }));
  for (var c = [], h = 0, f = n.mutations; h < f.length; h++) ***REMOVED***
    var l = f[h], d = er.key(e, l.key.path, n.batchId);
    (o.push(i.delete(d)), c.push(l.key));
  }
  return mr.waitFor(o).next(function () ***REMOVED***
    return c;
  });
}
/**
* Returns an approximate size for the given document.
*/
function Zr(t) ***REMOVED***
  if (!t) return 0;
  var e;
  if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else ***REMOVED***
    if (!t.noDocument) throw C();
    e = t.noDocument;
  }
  return JSON.stringify(e).length;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** A mutation queue for a specific user, backed by IndexedDB.*/
($r.DEFAULT_COLLECTION_PERCENTILE = 10, $r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, $r.DEFAULT = new $r(41943040, $r.DEFAULT_COLLECTION_PERCENTILE, $r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), $r.DISABLED = new $r(-1, 0, 0));
var ti = /** @class*/
(function () ***REMOVED***
  function t(/**
  * The normalized userId (e.g. null UID => "" userId) used to store /
  * retrieve mutations.
  */
  t, e, n, r) ***REMOVED***
    (this.userId = t, this.R = e, this.Ut = n, this.referenceDelegate = r, /**
    * Caches the document keys for pending mutation batches. If the mutation
    * has been removed from IndexedDb, the cached value may continue to
    * be used to retrieve the batch's document keys. To remove a cached value
    * locally, `removeCachedMutationKeys()` should be invoked either directly
    * or through `removeMutationBatches()`.
    *
    * With multi-tab, when the primary client acknowledges or rejects a mutation,
    * this cache is used by secondary clients to invalidate the local
    * view of the documents that were previously affected by the mutation.
    */
    // PORTING NOTE: Multi-tab only.
    this.Qt = ***REMOVED***});
  }
  return (t.Kt = function (e, n, r, i) ***REMOVED***
    // TODO(mcg): Figure out what constraints there are on userIDs
    // In particular, are there any reserved characters? are empty ids allowed?
    // For the moment store these together in the same mutations table assuming
    // that empty userIDs aren't allowed.
    return (R("" !== e.uid), new t(e.isAuthenticated() ? e.uid : "", n, r, i));
  }, t.prototype.checkEmpty = function (t) ***REMOVED***
    var e = !0, n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return ni(t).Ot(***REMOVED***
      index: tr.userMutationsIndex,
      range: n
    }, function (t, n, r) ***REMOVED***
      (e = !1, r.done());
    }).next(function () ***REMOVED***
      return e;
    });
  }, t.prototype.addMutationBatch = function (t, e, n, r) ***REMOVED***
    var i = this, o = ri(t), s = ni(t);
    // The IndexedDb implementation in Chrome (and Firefox) does not handle
    // compound indices that include auto-generated keys correctly. To ensure
    // that the index entry is added correctly in all browsers, we perform two
    // writes: The first write is used to retrieve the next auto-generated Batch
    // ID, and the second write populates the index and stores the actual
    // mutation batch.
    // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
    // We write an empty object to obtain key
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return s.add(***REMOVED***}).next(function (u) ***REMOVED***
      R("number" == typeof u);
      for (var a = new kr(u, e, n, r), c = (function (t, e, n) ***REMOVED***
        var r = n.baseMutations.map(function (e) ***REMOVED***
          return Cn(t.Lt, e);
        }), i = n.mutations.map(function (e) ***REMOVED***
          return Cn(t.Lt, e);
        });
        return new tr(e, n.batchId, n.localWriteTime.toMillis(), r, i);
      })(i.R, i.userId, a), h = [], f = new ze(function (t, e) ***REMOVED***
        return M(t.canonicalString(), e.canonicalString());
      }), l = 0, d = r; l < d.length; l++) ***REMOVED***
        var p = d[l], y = er.key(i.userId, p.key.path, u);
        (f = f.add(p.key.path.popLast()), h.push(s.put(c)), h.push(o.put(y, er.PLACEHOLDER)));
      }
      return (f.forEach(function (e) ***REMOVED***
        h.push(i.Ut.addToCollectionParentIndex(t, e));
      }), t.addOnCommittedListener(function () ***REMOVED***
        i.Qt[u] = a.keys();
      }), mr.waitFor(h).next(function () ***REMOVED***
        return a;
      }));
    });
  }, t.prototype.lookupMutationBatch = function (t, e) ***REMOVED***
    var n = this;
    return ni(t).get(e).next(function (t) ***REMOVED***
      return t ? (R(t.userId === n.userId), qr(n.R, t)) : null;
    });
  }, /**
  * Returns the document keys for the mutation batch with the given batchId.
  * For primary clients, this method returns `null` after
  * `removeMutationBatches()` has been called. Secondary clients return a
  * cached result until `removeCachedMutationKeys()` is invoked.
  */
  // PORTING NOTE: Multi-tab only.
  t.prototype.jt = function (t, e) ***REMOVED***
    var n = this;
    return this.Qt[e] ? mr.resolve(this.Qt[e]) : this.lookupMutationBatch(t, e).next(function (t) ***REMOVED***
      if (t) ***REMOVED***
        var r = t.keys();
        return (n.Qt[e] = r, r);
      }
      return null;
    });
  }, t.prototype.getNextMutationBatchAfterBatchId = function (t, e) ***REMOVED***
    var n = this, r = e + 1, i = IDBKeyRange.lowerBound([this.userId, r]), o = null;
    return ni(t).Ot(***REMOVED***
      index: tr.userMutationsIndex,
      range: i
    }, function (t, e, i) ***REMOVED***
      (e.userId === n.userId && (R(e.batchId >= r), o = qr(n.R, e)), i.done());
    }).next(function () ***REMOVED***
      return o;
    });
  }, t.prototype.getHighestUnacknowledgedBatchId = function (t) ***REMOVED***
    var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]), n = -1;
    return ni(t).Ot(***REMOVED***
      index: tr.userMutationsIndex,
      range: e,
      reverse: !0
    }, function (t, e, r) ***REMOVED***
      (n = e.batchId, r.done());
    }).next(function () ***REMOVED***
      return n;
    });
  }, t.prototype.getAllMutationBatches = function (t) ***REMOVED***
    var e = this, n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return ni(t).Nt(tr.userMutationsIndex, n).next(function (t) ***REMOVED***
      return t.map(function (t) ***REMOVED***
        return qr(e.R, t);
      });
    });
  }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function (t, e) ***REMOVED***
    var n = this, r = er.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
    // Scan the document-mutation index starting with a prefix starting with
    // the given documentKey.
    return ri(t).Ot(***REMOVED***
      range: i
    }, function (r, i, s) ***REMOVED***
      var u = r[0], a = r[1], c = r[2], h = Xn(a);
      // Only consider rows matching exactly the specific key of
      // interest. Note that because we order by path first, and we
      // order terminators before path separators, we'll encounter all
      // the index rows for documentKey contiguously. In particular, all
      // the rows for documentKey will occur before any rows for
      // documents nested in a subcollection beneath documentKey so we
      // can stop as soon as we hit any such row.
      if (u === n.userId && e.path.isEqual(h)) // Look up the mutation batch in the store.
      return ni(t).get(c).next(function (t) ***REMOVED***
        if (!t) throw C();
        (R(t.userId === n.userId), o.push(qr(n.R, t)));
      });
      s.done();
    }).next(function () ***REMOVED***
      return o;
    });
  }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (t, e) ***REMOVED***
    var n = this, r = new ze(M), i = [];
    return (e.forEach(function (e) ***REMOVED***
      var o = er.prefixForPath(n.userId, e.path), s = IDBKeyRange.lowerBound(o), u = ri(t).Ot(***REMOVED***
        range: s
      }, function (t, i, o) ***REMOVED***
        var s = t[0], u = t[1], a = t[2], c = Xn(u);
        // Only consider rows matching exactly the specific key of
        // interest. Note that because we order by path first, and we
        // order terminators before path separators, we'll encounter all
        // the index rows for documentKey contiguously. In particular, all
        // the rows for documentKey will occur before any rows for
        // documents nested in a subcollection beneath documentKey so we
        // can stop as soon as we hit any such row.
        s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
      });
      i.push(u);
    }), mr.waitFor(i).next(function () ***REMOVED***
      return n.Wt(t, r);
    }));
  }, t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) ***REMOVED***
    var n = this, r = e.path, i = r.length + 1, o = er.prefixForPath(this.userId, r), s = IDBKeyRange.lowerBound(o), u = new ze(M);
    return ri(t).Ot(***REMOVED***
      range: s
    }, function (t, e, o) ***REMOVED***
      var s = t[0], a = t[1], c = t[2], h = Xn(a);
      s === n.userId && r.isPrefixOf(h) ? // Rows with document keys more than one segment longer than the
      // query path can't be matches. For example, a query on 'rooms'
      // can't match the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      h.length === i && (u = u.add(c)) : o.done();
    }).next(function () ***REMOVED***
      return n.Wt(t, u);
    });
  }, t.prototype.Wt = function (t, e) ***REMOVED***
    var n = this, r = [], i = [];
    // TODO(rockwood): Implement this using iterate.
    return (e.forEach(function (e) ***REMOVED***
      i.push(ni(t).get(e).next(function (t) ***REMOVED***
        if (null === t) throw C();
        (R(t.userId === n.userId), r.push(qr(n.R, t)));
      }));
    }), mr.waitFor(i).next(function () ***REMOVED***
      return r;
    }));
  }, t.prototype.removeMutationBatch = function (t, e) ***REMOVED***
    var n = this;
    return Jr(t.Mt, this.userId, e).next(function (r) ***REMOVED***
      return (t.addOnCommittedListener(function () ***REMOVED***
        n.Gt(e.batchId);
      }), mr.forEach(r, function (e) ***REMOVED***
        return n.referenceDelegate.markPotentiallyOrphaned(t, e);
      }));
    });
  }, /**
  * Clears the cached keys for a mutation batch. This method should be
  * called by secondary clients after they process mutation updates.
  *
  * Note that this method does not have to be called from primary clients as
  * the corresponding cache entries are cleared when an acknowledged or
  * rejected batch is removed from the mutation queue.
  */
  // PORTING NOTE: Multi-tab only
  t.prototype.Gt = function (t) ***REMOVED***
    delete this.Qt[t];
  }, t.prototype.performConsistencyCheck = function (t) ***REMOVED***
    var e = this;
    return this.checkEmpty(t).next(function (n) ***REMOVED***
      if (!n) return mr.resolve();
      // Verify that there are no entries in the documentMutations index if
      // the queue is empty.
      var r = IDBKeyRange.lowerBound(er.prefixForUser(e.userId)), i = [];
      return ri(t).Ot(***REMOVED***
        range: r
      }, function (t, n, r) ***REMOVED***
        if (t[0] === e.userId) ***REMOVED***
          var o = Xn(t[1]);
          i.push(o);
        } else r.done();
      }).next(function () ***REMOVED***
        R(0 === i.length);
      });
    });
  }, t.prototype.containsKey = function (t, e) ***REMOVED***
    return ei(t, this.userId, e);
  }, // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
  /** Returns the mutation queue's metadata from IndexedDb.*/
  t.prototype.zt = function (t) ***REMOVED***
    var e = this;
    return ii(t).get(this.userId).next(function (t) ***REMOVED***
      return t || new Zn(e.userId, -1, /*lastStreamToken=*/
      "");
    });
  }, t);
})();
/**
* @returns true if the mutation queue for the given user contains a pending
*         mutation for the given key.
*/
function ei(t, e, n) ***REMOVED***
  var r = er.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), s = !1;
  return ri(t).Ot(***REMOVED***
    range: o,
    kt: !0
  }, function (t, n, r) ***REMOVED***
    var o = t[0], u = t[1];
    t[2];
    (o === e && u === i && (s = !0), r.done());
  }).next(function () ***REMOVED***
    return s;
  });
}
/** Returns true if any mutation queue contains the given document.*/
/**
* Helper to get a typed SimpleDbStore for the mutations object store.
*/
function ni(t) ***REMOVED***
  return Ar(t, tr.store);
}
/**
* Helper to get a typed SimpleDbStore for the mutationQueues object store.
*/
function ri(t) ***REMOVED***
  return Ar(t, er.store);
}
/**
* Helper to get a typed SimpleDbStore for the mutationQueues object store.
*/
function ii(t) ***REMOVED***
  return Ar(t, Zn.store);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Offset to ensure non-overlapping target ids.*/
/**
* Generates monotonically increasing target IDs for sending targets to the
* watch stream.
*
* The client constructs two generators, one for the target cache, and one for
* for the sync engine (to generate limbo documents targets). These
* generators produce non-overlapping IDs (by using even and odd IDs
* respectively).
*
* By separating the target ID space, the query cache can generate target IDs
* that persist across client restarts, while sync engine can independently
* generate in-memory target IDs that are transient and can be reused after a
* restart.
*/
var oi = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this.Ht = t;
  }
  return (t.prototype.next = function () ***REMOVED***
    return (this.Ht += 2, this.Ht);
  }, t.Jt = function () ***REMOVED***
    // The target cache generator must return '2' in its first call to `next()`
    // as there is no differentiation in the protocol layer between an unset
    // number and the number '0'. If we were to sent a target with target ID
    // '0', the backend would consider it unset and replace it with its own ID.
    return new t(0);
  }, t.Yt = function () ***REMOVED***
    // Sync engine assigns target IDs for limbo document detection.
    return new t(-1);
  }, t);
})(), si = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.referenceDelegate = t, this.R = e);
  }
  // PORTING NOTE: We don't cache global metadata for the target cache, since
  // some of it (in particular `highestTargetId`) can be modified by secondary
  // tabs. We could perhaps be more granular (and e.g. still cache
  // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
  // to IndexedDb whenever we need to read metadata. We can revisit if it turns
  // out to have a meaningful performance impact.
  return (t.prototype.allocateTargetId = function (t) ***REMOVED***
    var e = this;
    return this.Xt(t).next(function (n) ***REMOVED***
      var r = new oi(n.highestTargetId);
      return (n.highestTargetId = r.next(), e.Zt(t, n).next(function () ***REMOVED***
        return n.highestTargetId;
      }));
    });
  }, t.prototype.getLastRemoteSnapshotVersion = function (t) ***REMOVED***
    return this.Xt(t).next(function (t) ***REMOVED***
      return U.fromTimestamp(new q(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
    });
  }, t.prototype.getHighestSequenceNumber = function (t) ***REMOVED***
    return this.Xt(t).next(function (t) ***REMOVED***
      return t.highestListenSequenceNumber;
    });
  }, t.prototype.setTargetsMetadata = function (t, e, n) ***REMOVED***
    var r = this;
    return this.Xt(t).next(function (i) ***REMOVED***
      return (i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.toTimestamp()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Zt(t, i));
    });
  }, t.prototype.addTargetData = function (t, e) ***REMOVED***
    var n = this;
    return this.te(t, e).next(function () ***REMOVED***
      return n.Xt(t).next(function (r) ***REMOVED***
        return (r.targetCount += 1, n.ee(e, r), n.Zt(t, r));
      });
    });
  }, t.prototype.updateTargetData = function (t, e) ***REMOVED***
    return this.te(t, e);
  }, t.prototype.removeTargetData = function (t, e) ***REMOVED***
    var n = this;
    return this.removeMatchingKeysForTargetId(t, e.targetId).next(function () ***REMOVED***
      return ui(t).delete(e.targetId);
    }).next(function () ***REMOVED***
      return n.Xt(t);
    }).next(function (e) ***REMOVED***
      return (R(e.targetCount > 0), e.targetCount -= 1, n.Zt(t, e));
    });
  }, /**
  * Drops any targets with sequence number less than or equal to the upper bound, excepting those
  * present in `activeTargetIds`. Document associations for the removed targets are also removed.
  * Returns the number of targets removed.
  */
  t.prototype.removeTargets = function (t, e, n) ***REMOVED***
    var r = this, i = 0, o = [];
    return ui(t).Ot(function (s, u) ***REMOVED***
      var a = Ur(u);
      a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.removeTargetData(t, a)));
    }).next(function () ***REMOVED***
      return mr.waitFor(o);
    }).next(function () ***REMOVED***
      return i;
    });
  }, /**
  * Call provided function with each `TargetData` that we have cached.
  */
  t.prototype.forEachTarget = function (t, e) ***REMOVED***
    return ui(t).Ot(function (t, n) ***REMOVED***
      var r = Ur(n);
      e(r);
    });
  }, t.prototype.Xt = function (t) ***REMOVED***
    return ai(t).get(ar.key).next(function (t) ***REMOVED***
      return (R(null !== t), t);
    });
  }, t.prototype.Zt = function (t, e) ***REMOVED***
    return ai(t).put(ar.key, e);
  }, t.prototype.te = function (t, e) ***REMOVED***
    return ui(t).put(Br(this.R, e));
  }, /**
  * In-place updates the provided metadata to account for values in the given
  * TargetData. Saving is done separately. Returns true if there were any
  * changes to the metadata.
  */
  t.prototype.ee = function (t, e) ***REMOVED***
    var n = !1;
    return (t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n);
  }, t.prototype.getTargetCount = function (t) ***REMOVED***
    return this.Xt(t).next(function (t) ***REMOVED***
      return t.targetCount;
    });
  }, t.prototype.getTargetData = function (t, e) ***REMOVED***
    // Iterating by the canonicalId may yield more than one result because
    // canonicalId values are not required to be unique per target. This query
    // depends on the queryTargets index to be efficient.
    var n = St(e), r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]), i = null;
    return ui(t).Ot(***REMOVED***
      range: r,
      index: sr.queryTargetsIndexName
    }, function (t, n, r) ***REMOVED***
      var o = Ur(n);
      // After finding a potential match, check that the target is
      // actually equal to the requested target.
      Dt(e, o.target) && (i = o, r.done());
    }).next(function () ***REMOVED***
      return i;
    });
  }, t.prototype.addMatchingKeys = function (t, e, n) ***REMOVED***
    var r = this, i = [], o = ci(t);
    // PORTING NOTE: The reverse index (documentsTargets) is maintained by
    // IndexedDb.
    return (e.forEach(function (e) ***REMOVED***
      var s = Wn(e.path);
      (i.push(o.put(new ur(n, s))), i.push(r.referenceDelegate.addReference(t, n, e)));
    }), mr.waitFor(i));
  }, t.prototype.removeMatchingKeys = function (t, e, n) ***REMOVED***
    var r = this, i = ci(t);
    // PORTING NOTE: The reverse index (documentsTargets) is maintained by
    // IndexedDb.
    return mr.forEach(e, function (e) ***REMOVED***
      var o = Wn(e.path);
      return mr.waitFor([i.delete([n, o]), r.referenceDelegate.removeReference(t, n, e)]);
    });
  }, t.prototype.removeMatchingKeysForTargetId = function (t, e) ***REMOVED***
    var n = ci(t), r = IDBKeyRange.bound([e], [e + 1], /*lowerOpen=*/
    !1, /*upperOpen=*/
    !0);
    return n.delete(r);
  }, t.prototype.getMatchingKeysForTargetId = function (t, e) ***REMOVED***
    var n = IDBKeyRange.bound([e], [e + 1], /*lowerOpen=*/
    !1, /*upperOpen=*/
    !0), r = ci(t), i = en();
    return r.Ot(***REMOVED***
      range: n,
      kt: !0
    }, function (t, e, n) ***REMOVED***
      var r = Xn(t[1]), o = new st(r);
      i = i.add(o);
    }).next(function () ***REMOVED***
      return i;
    });
  }, t.prototype.containsKey = function (t, e) ***REMOVED***
    var n = Wn(e.path), r = IDBKeyRange.bound([n], [V(n)], /*lowerOpen=*/
    !1, /*upperOpen=*/
    !0), i = 0;
    return ci(t).Ot(***REMOVED***
      index: ur.documentTargetsIndex,
      kt: !0,
      range: r
    }, function (t, e, n) ***REMOVED***
      var r = t[0];
      // Having a sentinel row for a document does not count as containing that document;
      // For the target cache, containing the document means the document is part of some
      // target.
      t[1];
      0 !== r && (i++, n.done());
    }).next(function () ***REMOVED***
      return i > 0;
    });
  }, /**
  * Looks up a TargetData entry by target ID.
  *
  * @param targetId - The target ID of the TargetData entry to look up.
  * @returns The cached TargetData entry, or null if the cache has no entry for
  * the target.
  */
  // PORTING NOTE: Multi-tab only.
  t.prototype.lt = function (t, e) ***REMOVED***
    return ui(t).get(e).next(function (t) ***REMOVED***
      return t ? Ur(t) : null;
    });
  }, t);
})();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Helper to get a typed SimpleDbStore for the queries object store.
*/
function ui(t) ***REMOVED***
  return Ar(t, sr.store);
}
/**
* Helper to get a typed SimpleDbStore for the target globals object store.
*/
function ai(t) ***REMOVED***
  return Ar(t, ar.store);
}
/**
* Helper to get a typed SimpleDbStore for the document target object store.
*/
function ci(t) ***REMOVED***
  return Ar(t, ur.store);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Verifies the error thrown by a LocalStore operation. If a LocalStore
* operation fails because the primary lease has been taken by another client,
* we ignore the error (the persistence layer will immediately call
* `applyPrimaryLease` to propagate the primary state change). All other errors
* are re-thrown.
*
* @param err - An error returned by a LocalStore operation.
* @returns A Promise that resolves after we recovered, or the original error.
*/
function hi(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    return _tslib.__generator(this, function (e) ***REMOVED***
      if (t.code !== E.FAILED_PRECONDITION || t.message !== pr) throw t;
      return (N("LocalStore", "Unexpectedly lost primary lease"), [2]);
    });
  });
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function fi(t, e) ***REMOVED***
  var n = t[0], r = t[1], i = e[0], o = e[1], s = M(n, i);
  return 0 === s ? M(r, o) : s;
}
/**
* Used to calculate the nth sequence number. Keeps a rolling buffer of the
* lowest n values passed to `addElement`, and finally reports the largest of
* them in `maxValue`.
*/
var li = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.ne = t, this.buffer = new ze(fi), this.se = 0);
  }
  return (t.prototype.ie = function () ***REMOVED***
    return ++this.se;
  }, t.prototype.re = function (t) ***REMOVED***
    var e = [t, this.ie()];
    if (this.buffer.size < this.ne) this.buffer = this.buffer.add(e); else ***REMOVED***
      var n = this.buffer.last();
      fi(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
    }
  }, Object.defineProperty(t.prototype, "maxValue", ***REMOVED***
    get: function () ***REMOVED***
      // Guaranteed to be non-empty. If we decide we are not collecting any
      // sequence numbers, nthSequenceNumber below short-circuits. If we have
      // decided that we are collecting n sequence numbers, it's because n is some
      // percentage of the existing sequence numbers. That means we should never
      // be in a situation where we are collecting sequence numbers but don't
      // actually have any.
      return this.buffer.last()[0];
    },
    enumerable: !1,
    configurable: !0
  }), t);
})(), di = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.garbageCollector = t, this.asyncQueue = e, this.oe = !1, this.ce = null);
  }
  return (t.prototype.start = function (t) ***REMOVED***
    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.ue(t);
  }, t.prototype.stop = function () ***REMOVED***
    this.ce && (this.ce.cancel(), this.ce = null);
  }, Object.defineProperty(t.prototype, "started", ***REMOVED***
    get: function () ***REMOVED***
      return null !== this.ce;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.ue = function (t) ***REMOVED***
    var e = this, n = this.oe ? 3e5 : 6e4;
    (N("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.ce = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", /*LruGarbageCollection*/
    n, function () ***REMOVED***
      return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
        var e;
        return _tslib.__generator(this, function (n) ***REMOVED***
          switch (n.label) ***REMOVED***
            case 0:
              (this.ce = null, this.oe = !0, n.label = 1);
            case 1:
              return (n.trys.push([1, 3, , 7]), [4, /*yield*/
              t.collectGarbage(this.garbageCollector)]);
            case 2:
              return (n.sent(), [3, /*break*/
              7]);
            case 3:
              return _r(e = n.sent()) ? (N("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, /*break*/
              6]) : [3, /*break*/
              4];
            case 4:
              return [4, /*yield*/
              hi(e)];
            case 5:
              (n.sent(), n.label = 6);
            case 6:
              return [3, /*break*/
              7];
            case 7:
              return [4, /*yield*/
              this.ue(t)];
            case 8:
              return (n.sent(), [2]);
          }
        });
      });
    }));
  }, t);
})(), pi = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.ae = t, this.params = e);
  }
  return (t.prototype.calculateTargetCount = function (t, e) ***REMOVED***
    return this.ae.he(t).next(function (t) ***REMOVED***
      return Math.floor(e / 100 * t);
    });
  }, t.prototype.nthSequenceNumber = function (t, e) ***REMOVED***
    var n = this;
    if (0 === e) return mr.resolve(_.o);
    var r = new li(e);
    return this.ae.forEachTarget(t, function (t) ***REMOVED***
      return r.re(t.sequenceNumber);
    }).next(function () ***REMOVED***
      return n.ae.le(t, function (t) ***REMOVED***
        return r.re(t);
      });
    }).next(function () ***REMOVED***
      return r.maxValue;
    });
  }, t.prototype.removeTargets = function (t, e, n) ***REMOVED***
    return this.ae.removeTargets(t, e, n);
  }, t.prototype.removeOrphanedDocuments = function (t, e) ***REMOVED***
    return this.ae.removeOrphanedDocuments(t, e);
  }, t.prototype.collect = function (t, e) ***REMOVED***
    var n = this;
    return -1 === this.params.cacheSizeCollectionThreshold ? (N("LruGarbageCollector", "Garbage collection skipped; disabled"), mr.resolve(Xr)) : this.getCacheSize(t).next(function (r) ***REMOVED***
      return r < n.params.cacheSizeCollectionThreshold ? (N("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.cacheSizeCollectionThreshold), Xr) : n.fe(t, e);
    });
  }, t.prototype.getCacheSize = function (t) ***REMOVED***
    return this.ae.getCacheSize(t);
  }, t.prototype.fe = function (t, e) ***REMOVED***
    var n, r, i, o, s, u, a, h = this, f = Date.now();
    return this.calculateTargetCount(t, this.params.percentileToCollect).next(function (e) ***REMOVED***
      // Cap at the configured max
      return (e > h.params.maximumSequenceNumbersToCollect ? (N("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.maximumSequenceNumbersToCollect + " from " + e), r = h.params.maximumSequenceNumbersToCollect) : r = e, o = Date.now(), h.nthSequenceNumber(t, r));
    }).next(function (r) ***REMOVED***
      return (n = r, s = Date.now(), h.removeTargets(t, n, e));
    }).next(function (e) ***REMOVED***
      return (i = e, u = Date.now(), h.removeOrphanedDocuments(t, n));
    }).next(function (t) ***REMOVED***
      return (a = Date.now(), D() <= _firebaseLogger.LogLevel.DEBUG && N("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (o - f) + "ms\n\tDetermined least recently used " + r + " in " + (s - o) + "ms\n\tRemoved " + i + " targets in " + (u - s) + "ms\n\tRemoved " + t + " documents in " + (a - u) + "ms\nTotal Duration: " + (a - f) + "ms"), mr.resolve(***REMOVED***
        didRun: !0,
        sequenceNumbersCollected: r,
        targetsRemoved: i,
        documentsRemoved: t
      }));
    });
  }, t);
})(), yi = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.db = t, this.garbageCollector = (function (t, e) ***REMOVED***
      return new pi(t, e);
    })(this, e));
  }
  return (t.prototype.he = function (t) ***REMOVED***
    var e = this.de(t);
    return this.db.getTargetCache().getTargetCount(t).next(function (t) ***REMOVED***
      return e.next(function (e) ***REMOVED***
        return t + e;
      });
    });
  }, t.prototype.de = function (t) ***REMOVED***
    var e = 0;
    return this.le(t, function (t) ***REMOVED***
      e++;
    }).next(function () ***REMOVED***
      return e;
    });
  }, t.prototype.forEachTarget = function (t, e) ***REMOVED***
    return this.db.getTargetCache().forEachTarget(t, e);
  }, t.prototype.le = function (t, e) ***REMOVED***
    return this.we(t, function (t, n) ***REMOVED***
      return e(n);
    });
  }, t.prototype.addReference = function (t, e, n) ***REMOVED***
    return vi(t, n);
  }, t.prototype.removeReference = function (t, e, n) ***REMOVED***
    return vi(t, n);
  }, t.prototype.removeTargets = function (t, e, n) ***REMOVED***
    return this.db.getTargetCache().removeTargets(t, e, n);
  }, t.prototype.markPotentiallyOrphaned = function (t, e) ***REMOVED***
    return vi(t, e);
  }, /**
  * Returns true if anything would prevent this document from being garbage
  * collected, given that the document in question is not present in any
  * targets and has a sequence number less than or equal to the upper bound for
  * the collection run.
  */
  t.prototype._e = function (t, e) ***REMOVED***
    return (function (t, e) ***REMOVED***
      var n = !1;
      return ii(t).$t(function (r) ***REMOVED***
        return ei(t, r, e).next(function (t) ***REMOVED***
          return (t && (n = !0), mr.resolve(!t));
        });
      }).next(function () ***REMOVED***
        return n;
      });
    })(t, e);
  }, t.prototype.removeOrphanedDocuments = function (t, e) ***REMOVED***
    var n = this, r = this.db.getRemoteDocumentCache().newChangeBuffer(), i = [], o = 0;
    return this.we(t, function (s, u) ***REMOVED***
      if (u <= e) ***REMOVED***
        var a = n._e(t, s).next(function (e) ***REMOVED***
          if (!e) // Our size accounting requires us to read all documents before
          // removing them.
          return (o++, r.getEntry(t, s).next(function () ***REMOVED***
            return (r.removeEntry(s), ci(t).delete([0, Wn(s.path)]));
          }));
        });
        i.push(a);
      }
    }).next(function () ***REMOVED***
      return mr.waitFor(i);
    }).next(function () ***REMOVED***
      return r.apply(t);
    }).next(function () ***REMOVED***
      return o;
    });
  }, t.prototype.removeTarget = function (t, e) ***REMOVED***
    var n = e.withSequenceNumber(t.currentSequenceNumber);
    return this.db.getTargetCache().updateTargetData(t, n);
  }, t.prototype.updateLimboDocument = function (t, e) ***REMOVED***
    return vi(t, e);
  }, /**
  * Call provided function for each document in the cache that is 'orphaned'. Orphaned
  * means not a part of any target, so the only entry in the target-document index for
  * that document will be the sentinel row (targetId 0), which will also have the sequence
  * number for the last time the document was accessed.
  */
  t.prototype.we = function (t, e) ***REMOVED***
    var n, r = ci(t), i = _.o;
    return r.Ot(***REMOVED***
      index: ur.documentTargetsIndex
    }, function (t, r) ***REMOVED***
      var o = t[0], s = (t[1], r.path), u = r.sequenceNumber;
      0 === o ? // if nextToReport is valid, report it, this is a new key so the
      // last one must not be a member of any targets.
      (i !== _.o && e(new st(Xn(n)), i), // set nextToReport to be this sequence number. It's the next one we
      // might report, if we don't find any targets for this document.
      // Note that the sequence number must be defined when the targetId
      // is 0.
      i = u, n = s) : // set nextToReport to be invalid, we know we don't need to report
      // this one since we found a target for it.
      i = _.o;
    }).next(function () ***REMOVED***
      // Since we report sequence numbers after getting to the next key, we
      // need to check if the last key we iterated over was an orphaned
      // document and report it.
      i !== _.o && e(new st(Xn(n)), i);
    });
  }, t.prototype.getCacheSize = function (t) ***REMOVED***
    return this.db.getRemoteDocumentCache().getSize(t);
  }, t);
})();
/**
* This class is responsible for the scheduling of LRU garbage collection. It handles checking
* whether or not GC is enabled, as well as which delay to use before the next run.
*/
function vi(t, e) ***REMOVED***
  return ci(t).put(/**
  * @returns A value suitable for writing a sentinel row in the target-document
  * store.
  */
  (function (t, e) ***REMOVED***
    return new ur(0, Wn(t.path), e);
  })(e, t.currentSequenceNumber));
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A map implementation that uses objects as keys. Objects must have an
* associated equals function and must be immutable. Entries in the map are
* stored together with the key being produced from the mapKeyFn. This map
* automatically handles collisions of keys.
*/
var mi = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.mapKeyFn = t, this.equalsFn = e, /**
    * The inner map for a key/value pair. Due to the possibility of collisions we
    * keep a list of entries that we do a linear search through to find an actual
    * match. Note that collisions should be rare, so we still expect near
    * constant time lookups in practice.
    */
    this.inner = ***REMOVED***});
  }
  return (t.prototype.get = function (t) ***REMOVED***
    var e = this.mapKeyFn(t), n = this.inner[e];
    if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) ***REMOVED***
      var o = i[r], s = o[0], u = o[1];
      if (this.equalsFn(s, t)) return u;
    }
  }, t.prototype.has = function (t) ***REMOVED***
    return void 0 !== this.get(t);
  }, /** Put this key and value in the map.*/
  t.prototype.set = function (t, e) ***REMOVED***
    var n = this.mapKeyFn(t), r = this.inner[n];
    if (void 0 !== r) ***REMOVED***
      for (var i = 0; i < r.length; i++) if (this.equalsFn(r[i][0], t)) return void (r[i] = [t, e]);
      r.push([t, e]);
    } else this.inner[n] = [[t, e]];
  }, /**
  * Remove this key from the map. Returns a boolean if anything was deleted.
  */
  t.prototype.delete = function (t) ***REMOVED***
    var e = this.mapKeyFn(t), n = this.inner[e];
    if (void 0 === n) return !1;
    for (var r = 0; r < n.length; r++) if (this.equalsFn(n[r][0], t)) return (1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0);
    return !1;
  }, t.prototype.forEach = function (t) ***REMOVED***
    j(this.inner, function (e, n) ***REMOVED***
      for (var r = 0, i = n; r < i.length; r++) ***REMOVED***
        var o = i[r], s = o[0], u = o[1];
        t(s, u);
      }
    });
  }, t.prototype.isEmpty = function () ***REMOVED***
    return K(this.inner);
  }, t);
})(), gi = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    // A mapping of document key to the new cache entry that should be written (or null if any
    // existing cache entry should be removed).
    (this.changes = new mi(function (t) ***REMOVED***
      return t.toString();
    }, function (t, e) ***REMOVED***
      return t.isEqual(e);
    }), this.changesApplied = !1);
  }
  return (t.prototype.getReadTime = function (t) ***REMOVED***
    var e = this.changes.get(t);
    return e ? e.readTime : U.min();
  }, /**
  * Buffers a `RemoteDocumentCache.addEntry()` call.
  *
  * You can only modify documents that have already been retrieved via
  * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
  */
  t.prototype.addEntry = function (t, e) ***REMOVED***
    (this.assertNotApplied(), this.changes.set(t.key, ***REMOVED***
      document: t,
      readTime: e
    }));
  }, /**
  * Buffers a `RemoteDocumentCache.removeEntry()` call.
  *
  * You can only remove documents that have already been retrieved via
  * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
  */
  t.prototype.removeEntry = function (t, e) ***REMOVED***
    (void 0 === e && (e = null), this.assertNotApplied(), this.changes.set(t, ***REMOVED***
      document: _t.newInvalidDocument(t),
      readTime: e
    }));
  }, /**
  * Looks up an entry in the cache. The buffered changes will first be checked,
  * and if no buffered change applies, this will forward to
  * `RemoteDocumentCache.getEntry()`.
  *
  * @param transaction - The transaction in which to perform any persistence
  *     operations.
  * @param documentKey - The key of the entry to look up.
  * @returns The cached document or an invalid document if we have nothing
  * cached.
  */
  t.prototype.getEntry = function (t, e) ***REMOVED***
    this.assertNotApplied();
    var n = this.changes.get(e);
    return void 0 !== n ? mr.resolve(n.document) : this.getFromCache(t, e);
  }, /**
  * Looks up several entries in the cache, forwarding to
  * `RemoteDocumentCache.getEntry()`.
  *
  * @param transaction - The transaction in which to perform any persistence
  *     operations.
  * @param documentKeys - The keys of the entries to look up.
  * @returns A map of cached documents, indexed by key. If an entry cannot be
  *     found, the corresponding key will be mapped to an invalid document.
  */
  t.prototype.getEntries = function (t, e) ***REMOVED***
    return this.getAllFromCache(t, e);
  }, /**
  * Applies buffered changes to the underlying RemoteDocumentCache, using
  * the provided transaction.
  */
  t.prototype.apply = function (t) ***REMOVED***
    return (this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t));
  }, /** Helper to assert this.changes is not null*/
  t.prototype.assertNotApplied = function () ***REMOVED***}, t);
})(), wi = /** @class*/
(function () ***REMOVED***
  /**
  * @param serializer - The document serializer.
  * @param indexManager - The query indexes that need to be maintained.
  */
  function t(t, e) ***REMOVED***
    (this.R = t, this.Ut = e);
  }
  return (t.prototype.addEntry = function (t, e, n) ***REMOVED***
    return _i(t).put(Ei(e), n);
  }, /**
  * Removes a document from the cache.
  *
  * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
  * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
  */
  t.prototype.removeEntry = function (t, e) ***REMOVED***
    var n = _i(t), r = Ei(e);
    return n.delete(r);
  }, /**
  * Updates the current cache size.
  *
  * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
  * cache's metadata.
  */
  t.prototype.updateMetadata = function (t, e) ***REMOVED***
    var n = this;
    return this.getMetadata(t).next(function (r) ***REMOVED***
      return (r.byteSize += e, n.me(t, r));
    });
  }, t.prototype.getEntry = function (t, e) ***REMOVED***
    var n = this;
    return _i(t).get(Ei(e)).next(function (t) ***REMOVED***
      return n.ye(e, t);
    });
  }, /**
  * Looks up an entry in the cache.
  *
  * @param documentKey - The key of the entry to look up.
  * @returns The cached document entry and its size.
  */
  t.prototype.ge = function (t, e) ***REMOVED***
    var n = this;
    return _i(t).get(Ei(e)).next(function (t) ***REMOVED***
      return ***REMOVED***
        document: n.ye(e, t),
        size: Zr(t)
      ***REMOVED***
    });
  }, t.prototype.getEntries = function (t, e) ***REMOVED***
    var n = this, r = Ye();
    return this.pe(t, e, function (t, e) ***REMOVED***
      var i = n.ye(t, e);
      r = r.insert(t, i);
    }).next(function () ***REMOVED***
      return r;
    });
  }, /**
  * Looks up several entries in the cache.
  *
  * @param documentKeys - The set of keys entries to look up.
  * @returns A map of documents indexed by key and a map of sizes indexed by
  *     key (zero if the document does not exist).
  */
  t.prototype.Ee = function (t, e) ***REMOVED***
    var n = this, r = Ye(), i = new Ke(st.comparator);
    return this.pe(t, e, function (t, e) ***REMOVED***
      var o = n.ye(t, e);
      (r = r.insert(t, o), i = i.insert(t, Zr(e)));
    }).next(function () ***REMOVED***
      return ***REMOVED***
        documents: r,
        Te: i
      ***REMOVED***
    });
  }, t.prototype.pe = function (t, e, n) ***REMOVED***
    if (e.isEmpty()) return mr.resolve();
    var r = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()), i = e.getIterator(), o = i.getNext();
    return _i(t).Ot(***REMOVED***
      range: r
    }, function (t, e, r) ***REMOVED***
      // Go through keys not found in cache.
      for (var s = st.fromSegments(t); o && st.comparator(o, s) < 0; ) (n(o, null), o = i.getNext());
      (o && o.isEqual(s) && // Key found in cache.
      (n(o, e), o = i.hasNext() ? i.getNext() : null), // Skip to the next key (if there is one).
      o ? r.Ct(o.path.toArray()) : r.done());
    }).next(function () ***REMOVED***
      // The rest of the keys are not in the cache. One case where `iterate`
      // above won't go through them is when the cache is empty.
      for (; o; ) (n(o, null), o = i.hasNext() ? i.getNext() : null);
    });
  }, t.prototype.getDocumentsMatchingQuery = function (t, e, n) ***REMOVED***
    var r = this, i = Ye(), o = e.path.length + 1, s = ***REMOVED******REMOVED***
    if (n.isEqual(U.min())) ***REMOVED***
      // Documents are ordered by key, so we can use a prefix scan to narrow
      // down the documents we need to match the query against.
      var u = e.path.toArray();
      s.range = IDBKeyRange.lowerBound(u);
    } else ***REMOVED***
      // Execute an index-free query and filter by read time. This is safe
      // since all document changes to queries that have a
      // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
      var a = e.path.toArray(), c = Pr(n);
      (s.range = IDBKeyRange.lowerBound([a, c], /*open=*/
      !0), s.index = ir.collectionReadTimeIndex);
    }
    return _i(t).Ot(s, function (t, n, s) ***REMOVED***
      // The query is actually returning any path that starts with the query
      // path prefix which may include documents in subcollections. For
      // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
      // shouldn't match it. Fix this by discarding rows with document keys
      // more than one segment longer than the query path.
      if (t.length === o) ***REMOVED***
        var u = Or(r.R, n);
        e.path.isPrefixOf(u.key.path) ? re(e, u) && (i = i.insert(u.key, u)) : s.done();
      }
    }).next(function () ***REMOVED***
      return i;
    });
  }, t.prototype.newChangeBuffer = function (t) ***REMOVED***
    return new bi(this, !!t && t.trackRemovals);
  }, t.prototype.getSize = function (t) ***REMOVED***
    return this.getMetadata(t).next(function (t) ***REMOVED***
      return t.byteSize;
    });
  }, t.prototype.getMetadata = function (t) ***REMOVED***
    return Ii(t).get(or.key).next(function (t) ***REMOVED***
      return (R(!!t), t);
    });
  }, t.prototype.me = function (t, e) ***REMOVED***
    return Ii(t).put(or.key, e);
  }, /**
  * Decodes `remoteDoc` and returns the document (or null, if the document
  * corresponds to the format used for sentinel deletes).
  */
  t.prototype.ye = function (t, e) ***REMOVED***
    if (e) ***REMOVED***
      var n = Or(this.R, e);
      // Whether the document is a sentinel removal and should only be used in the
      // `getNewDocumentChanges()`
      if (!n.isNoDocument() || !n.version.isEqual(U.min())) return n;
    }
    return _t.newInvalidDocument(t);
  }, t);
})(), bi = /** @class*/
(function (t) ***REMOVED***
  /**
  * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
  * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
  * `getNewDocumentChanges()`.
  */
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this) || this).Ie = e, r.trackRemovals = n, // A map of document sizes prior to applying the changes in this buffer.
    r.Ae = new mi(function (t) ***REMOVED***
      return t.toString();
    }, function (t, e) ***REMOVED***
      return t.isEqual(e);
    }), r);
  }
  return (_tslib.__extends(e, t), e.prototype.applyChanges = function (t) ***REMOVED***
    var e = this, n = [], r = 0, i = new ze(function (t, e) ***REMOVED***
      return M(t.canonicalString(), e.canonicalString());
    });
    return (this.changes.forEach(function (o, s) ***REMOVED***
      var u = e.Ae.get(o);
      if (s.document.isValidDocument()) ***REMOVED***
        var a = Lr(e.Ie.R, s.document, e.getReadTime(o));
        i = i.add(o.path.popLast());
        var c = Zr(a);
        (r += c - u, n.push(e.Ie.addEntry(t, o, a)));
      } else if ((r -= u, e.trackRemovals)) ***REMOVED***
        // In order to track removals, we store a "sentinel delete" in the
        // RemoteDocumentCache. This entry is represented by a NoDocument
        // with a version of 0 and ignored by `maybeDecodeDocument()` but
        // preserved in `getNewDocumentChanges()`.
        var h = Lr(e.Ie.R, _t.newNoDocument(o, U.min()), e.getReadTime(o));
        n.push(e.Ie.addEntry(t, o, h));
      } else n.push(e.Ie.removeEntry(t, o));
    }), i.forEach(function (r) ***REMOVED***
      n.push(e.Ie.Ut.addToCollectionParentIndex(t, r));
    }), n.push(this.Ie.updateMetadata(t, r)), mr.waitFor(n));
  }, e.prototype.getFromCache = function (t, e) ***REMOVED***
    var n = this;
    // Record the size of everything we load from the cache so we can compute a delta later.
    return this.Ie.ge(t, e).next(function (t) ***REMOVED***
      return (n.Ae.set(e, t.size), t.document);
    });
  }, e.prototype.getAllFromCache = function (t, e) ***REMOVED***
    var n = this;
    // Record the size of everything we load from the cache so we can compute
    // a delta later.
    return this.Ie.Ee(t, e).next(function (t) ***REMOVED***
      var e = t.documents;
      // Note: `getAllFromCache` returns two maps instead of a single map from
      // keys to `DocumentSizeEntry`s. This is to allow returning the
      // `MutableDocumentMap` directly, without a conversion.
      return (t.Te.forEach(function (t, e) ***REMOVED***
        n.Ae.set(t, e);
      }), e);
    });
  }, e);
})(gi);
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An in-memory buffer of entries to be written to a RemoteDocumentCache.
* It can be used to batch up a set of changes to be written to the cache, but
* additionally supports reading entries back with the `getEntry()` method,
* falling back to the underlying RemoteDocumentCache if no entry is
* buffered.
*
* Entries added to the cache *must* be read first. This is to facilitate
* calculating the size delta of the pending changes.
*
* PORTING NOTE: This class was implemented then removed from other platforms.
* If byte-counting ends up being needed on the other platforms, consider
* porting this class as part of that implementation work.
*/
function Ii(t) ***REMOVED***
  return Ar(t, or.store);
}
/**
* Helper to get a typed SimpleDbStore for the remoteDocuments object store.
*/
function _i(t) ***REMOVED***
  return Ar(t, ir.store);
}
function Ei(t) ***REMOVED***
  return t.path.toArray();
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Performs database creation and schema upgrades.*/
var Ti = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this.R = t;
  }
  /**
  * Performs database creation and schema upgrades.
  *
  * Note that in production, this method is only ever used to upgrade the schema
  * to SCHEMA_VERSION. Different values of toVersion are only used for testing
  * and local feature development.
  */
  return (t.prototype.Rt = function (t, e, n, r) ***REMOVED***
    var i = this;
    R(n < r && n >= 0 && r <= 11);
    var o = new gr("createOrUpgrade", e);
    n < 1 && r >= 1 && ((function (t) ***REMOVED***
      t.createObjectStore(Jn.store);
    })(t), (function (t) ***REMOVED***
      (t.createObjectStore(Zn.store, ***REMOVED***
        keyPath: Zn.keyPath
      }), t.createObjectStore(tr.store, ***REMOVED***
        keyPath: tr.keyPath,
        autoIncrement: !0
      }).createIndex(tr.userMutationsIndex, tr.userMutationsKeyPath, ***REMOVED***
        unique: !0
      }), t.createObjectStore(er.store));
    })(t), Si(t), (function (t) ***REMOVED***
      t.createObjectStore(ir.store);
    })(t));
    // Migration 2 to populate the targetGlobal object no longer needed since
    // migration 3 unconditionally clears it.
    var s = mr.resolve();
    return (n < 3 && r >= 3 && // Brand new clients don't need to drop and recreate--only clients that
    // potentially have corrupt data.
    (0 !== n && ((function (t) ***REMOVED***
      (t.deleteObjectStore(ur.store), t.deleteObjectStore(sr.store), t.deleteObjectStore(ar.store));
    })(t), Si(t)), s = s.next(function () ***REMOVED***
      /**
      * Creates the target global singleton row.
      *
      * @param txn - The version upgrade transaction for indexeddb
      */
      return (function (t) ***REMOVED***
        var e = t.store(ar.store), n = new ar(/*highestTargetId=*/
        0, /*lastListenSequenceNumber=*/
        0, U.min().toTimestamp(), /*targetCount=*/
        0);
        return e.put(ar.key, n);
      })(o);
    })), n < 4 && r >= 4 && (0 !== n && (// Schema version 3 uses auto-generated keys to generate globally unique
    // mutation batch IDs (this was previously ensured internally by the
    // client). To migrate to the new schema, we have to read all mutations
    // and write them back out. We preserve the existing batch IDs to guarantee
    // consistency with other object stores. Any further mutation batch IDs will
    // be auto-generated.
    s = s.next(function () ***REMOVED***
      return (function (t, e) ***REMOVED***
        return e.store(tr.store).Nt().next(function (n) ***REMOVED***
          (t.deleteObjectStore(tr.store), t.createObjectStore(tr.store, ***REMOVED***
            keyPath: tr.keyPath,
            autoIncrement: !0
          }).createIndex(tr.userMutationsIndex, tr.userMutationsKeyPath, ***REMOVED***
            unique: !0
          }));
          var r = e.store(tr.store), i = n.map(function (t) ***REMOVED***
            return r.put(t);
          });
          return mr.waitFor(i);
        });
      })(t, o);
    })), s = s.next(function () ***REMOVED***
      !(function (t) ***REMOVED***
        t.createObjectStore(hr.store, ***REMOVED***
          keyPath: hr.keyPath
        });
      })(t);
    })), n < 5 && r >= 5 && (s = s.next(function () ***REMOVED***
      return i.Re(o);
    })), n < 6 && r >= 6 && (s = s.next(function () ***REMOVED***
      return ((function (t) ***REMOVED***
        t.createObjectStore(or.store);
      })(t), i.be(o));
    })), n < 7 && r >= 7 && (s = s.next(function () ***REMOVED***
      return i.ve(o);
    })), n < 8 && r >= 8 && (s = s.next(function () ***REMOVED***
      return i.Pe(t, o);
    })), n < 9 && r >= 9 && (s = s.next(function () ***REMOVED***
      // Multi-Tab used to manage its own changelog, but this has been moved
      // to the DbRemoteDocument object store itself. Since the previous change
      // log only contained transient data, we can drop its object store.
      (!(function (t) ***REMOVED***
        t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
      })(t), (function (t) ***REMOVED***
        var e = t.objectStore(ir.store);
        (e.createIndex(ir.readTimeIndex, ir.readTimeIndexPath, ***REMOVED***
          unique: !1
        }), e.createIndex(ir.collectionReadTimeIndex, ir.collectionReadTimeIndexPath, ***REMOVED***
          unique: !1
        }));
      })(e));
    })), n < 10 && r >= 10 && (s = s.next(function () ***REMOVED***
      return i.Ve(o);
    })), n < 11 && r >= 11 && (s = s.next(function () ***REMOVED***
      (!(function (t) ***REMOVED***
        t.createObjectStore(fr.store, ***REMOVED***
          keyPath: fr.keyPath
        });
      })(t), (function (t) ***REMOVED***
        t.createObjectStore(lr.store, ***REMOVED***
          keyPath: lr.keyPath
        });
      })(t));
    })), s);
  }, t.prototype.be = function (t) ***REMOVED***
    var e = 0;
    return t.store(ir.store).Ot(function (t, n) ***REMOVED***
      e += Zr(n);
    }).next(function () ***REMOVED***
      var n = new or(e);
      return t.store(or.store).put(or.key, n);
    });
  }, t.prototype.Re = function (t) ***REMOVED***
    var e = this, n = t.store(Zn.store), r = t.store(tr.store);
    return n.Nt().next(function (n) ***REMOVED***
      return mr.forEach(n, function (n) ***REMOVED***
        var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
        return r.Nt(tr.userMutationsIndex, i).next(function (r) ***REMOVED***
          return mr.forEach(r, function (r) ***REMOVED***
            R(r.userId === n.userId);
            var i = qr(e.R, r);
            return Jr(t, n.userId, i).next(function () ***REMOVED***});
          });
        });
      });
    });
  }, /**
  * Ensures that every document in the remote document cache has a corresponding sentinel row
  * with a sequence number. Missing rows are given the most recently used sequence number.
  */
  t.prototype.ve = function (t) ***REMOVED***
    var e = t.store(ur.store), n = t.store(ir.store);
    return t.store(ar.store).get(ar.key).next(function (t) ***REMOVED***
      var r = [];
      return n.Ot(function (n, i) ***REMOVED***
        var o = new Q(n), s = (function (t) ***REMOVED***
          return [0, Wn(t)];
        })(o);
        r.push(e.get(s).next(function (n) ***REMOVED***
          return n ? mr.resolve() : (function (n) ***REMOVED***
            return e.put(new ur(0, Wn(n), t.highestListenSequenceNumber));
          })(o);
        }));
      }).next(function () ***REMOVED***
        return mr.waitFor(r);
      });
    });
  }, t.prototype.Pe = function (t, e) ***REMOVED***
    // Create the index.
    t.createObjectStore(cr.store, ***REMOVED***
      keyPath: cr.keyPath
    });
    var n = e.store(cr.store), r = new Wr(), i = function (t) ***REMOVED***
      if (r.add(t)) ***REMOVED***
        var e = t.lastSegment(), i = t.popLast();
        return n.put(***REMOVED***
          collectionId: e,
          parent: Wn(i)
        });
      }
    ***REMOVED***
    // Helper to add an index entry iff we haven't already written it.
    // Index existing remote documents.
    return e.store(ir.store).Ot(***REMOVED***
      kt: !0
    }, function (t, e) ***REMOVED***
      var n = new Q(t);
      return i(n.popLast());
    }).next(function () ***REMOVED***
      return e.store(er.store).Ot(***REMOVED***
        kt: !0
      }, function (t, e) ***REMOVED***
        t[0];
        var n = t[1], r = (t[2], Xn(n));
        return i(r.popLast());
      });
    });
  }, t.prototype.Ve = function (t) ***REMOVED***
    var e = this, n = t.store(sr.store);
    return n.Ot(function (t, r) ***REMOVED***
      var i = Ur(r), o = Br(e.R, i);
      return n.put(o);
    });
  }, t);
})();
function Si(t) ***REMOVED***
  (t.createObjectStore(ur.store, ***REMOVED***
    keyPath: ur.keyPath
  }).createIndex(ur.documentTargetsIndex, ur.documentTargetsKeyPath, ***REMOVED***
    unique: !0
  }), // NOTE: This is unique only because the TargetId is the suffix.
  t.createObjectStore(sr.store, ***REMOVED***
    keyPath: sr.keyPath
  }).createIndex(sr.queryTargetsIndexName, sr.queryTargetsKeyPath, ***REMOVED***
    unique: !0
  }), t.createObjectStore(ar.store));
}
var Di = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", Ni = /** @class*/
(function () ***REMOVED***
  function t(/**
  * Whether to synchronize the in-memory state of multiple tabs and share
  * access to local persistence.
  */
  e, n, r, i, o, s, u, a, c, /**
  * If set to true, forcefully obtains database access. Existing tabs will
  * no longer be able to access IndexedDB.
  */
  h) ***REMOVED***
    if ((this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this.Se = o, this.window = s, this.document = u, this.De = c, this.Ce = h, this.Ne = null, this.xe = !1, this.isPrimary = !1, this.networkEnabled = !0, /** Our window.unload handler, if registered.*/
    this.Fe = null, this.inForeground = !1, /** Our 'visibilitychange' listener if registered.*/
    this.ke = null, /** The client metadata refresh task.*/
    this.Oe = null, /** The last time we garbage collected the client metadata object store.*/
    this.$e = Number.NEGATIVE_INFINITY, /** A listener to notify on primary state changes.*/
    this.Me = function (t) ***REMOVED***
      return Promise.resolve();
    }, !t.yt())) throw new T(E.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    (this.referenceDelegate = new yi(this, i), this.Le = n + "main", this.R = new Rr(a), this.Be = new wr(this.Le, 11, new Ti(this.R)), this.qe = new si(this.referenceDelegate, this.R), this.Ut = new Hr(), this.Ue = (function (t, e) ***REMOVED***
      return new wi(t, e);
    })(this.R, this.Ut), this.Qe = new Kr(), this.window && this.window.localStorage ? this.Ke = this.window.localStorage : (this.Ke = null, !1 === h && A("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page.")));
  }
  /**
  * Attempt to start IndexedDb persistence.
  *
  * @returns Whether persistence was enabled.
  */
  return (t.prototype.start = function () ***REMOVED***
    var t = this;
    // NOTE: This is expected to fail sometimes (in the case of another tab
    // already having the persistence lock), so it's the first thing we should
    // do.
    return this.je().then(function () ***REMOVED***
      if (!t.isPrimary && !t.allowTabSynchronization) // Fail `start()` if `synchronizeTabs` is disabled and we cannot
      // obtain the primary lease.
      throw new T(E.FAILED_PRECONDITION, Di);
      return (t.We(), t.Ge(), t.ze(), t.runTransaction("getHighestListenSequenceNumber", "readonly", function (e) ***REMOVED***
        return t.qe.getHighestSequenceNumber(e);
      }));
    }).then(function (e) ***REMOVED***
      t.Ne = new _(e, t.De);
    }).then(function () ***REMOVED***
      t.xe = !0;
    }).catch(function (e) ***REMOVED***
      return (t.Be && t.Be.close(), Promise.reject(e));
    });
  }, /**
  * Registers a listener that gets called when the primary state of the
  * instance changes. Upon registering, this listener is invoked immediately
  * with the current primary state.
  *
  * PORTING NOTE: This is only used for Web multi-tab.
  */
  t.prototype.He = function (t) ***REMOVED***
    var e = this;
    return (this.Me = function (n) ***REMOVED***
      return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
        return _tslib.__generator(this, function (e) ***REMOVED***
          return this.started ? [2, /*return*/
          t(n)] : [2];
        });
      });
    }, t(this.isPrimary));
  }, /**
  * Registers a listener that gets called when the database receives a
  * version change event indicating that it has deleted.
  *
  * PORTING NOTE: This is only used for Web multi-tab.
  */
  t.prototype.setDatabaseDeletedListener = function (t) ***REMOVED***
    var e = this;
    this.Be.vt(function (n) ***REMOVED***
      return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
        return _tslib.__generator(this, function (e) ***REMOVED***
          switch (e.label) ***REMOVED***
            case 0:
              return null === n.newVersion ? [4, /*yield*/
              t()] : [3, /*break*/
              2];
            case 1:
              (e.sent(), e.label = 2);
            case 2:
              return [2];
          }
        });
      });
    });
  }, /**
  * Adjusts the current network state in the client's metadata, potentially
  * affecting the primary lease.
  *
  * PORTING NOTE: This is only used for Web multi-tab.
  */
  t.prototype.setNetworkEnabled = function (t) ***REMOVED***
    var e = this;
    this.networkEnabled !== t && (this.networkEnabled = t, // Schedule a primary lease refresh for immediate execution. The eventual
    // lease update will be propagated via `primaryStateListener`.
    this.Se.enqueueAndForget(function () ***REMOVED***
      return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
        return _tslib.__generator(this, function (t) ***REMOVED***
          switch (t.label) ***REMOVED***
            case 0:
              return this.started ? [4, /*yield*/
              this.je()] : [3, /*break*/
              2];
            case 1:
              (t.sent(), t.label = 2);
            case 2:
              return [2];
          }
        });
      });
    }));
  }, /**
  * Updates the client metadata in IndexedDb and attempts to either obtain or
  * extend the primary lease for the local client. Asynchronously notifies the
  * primary state listener if the client either newly obtained or released its
  * primary lease.
  */
  t.prototype.je = function () ***REMOVED***
    var t = this;
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function (e) ***REMOVED***
      return ki(e).put(new hr(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next(function () ***REMOVED***
        if (t.isPrimary) return t.Je(e).next(function (e) ***REMOVED***
          e || (t.isPrimary = !1, t.Se.enqueueRetryable(function () ***REMOVED***
            return t.Me(!1);
          }));
        });
      }).next(function () ***REMOVED***
        return t.Ye(e);
      }).next(function (n) ***REMOVED***
        return t.isPrimary && !n ? t.Xe(e).next(function () ***REMOVED***
          return !1;
        }) : !!n && t.Ze(e).next(function () ***REMOVED***
          return !0;
        });
      });
    }).catch(function (e) ***REMOVED***
      if (_r(e)) // Proceed with the existing state. Any subsequent access to
      // IndexedDB will verify the lease.
      return (N("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary);
      if (!t.allowTabSynchronization) throw e;
      return (N("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), /*isPrimary=*/
      !1);
    }).then(function (e) ***REMOVED***
      (t.isPrimary !== e && t.Se.enqueueRetryable(function () ***REMOVED***
        return t.Me(e);
      }), t.isPrimary = e);
    });
  }, t.prototype.Je = function (t) ***REMOVED***
    var e = this;
    return Ai(t).get(Jn.key).next(function (t) ***REMOVED***
      return mr.resolve(e.tn(t));
    });
  }, t.prototype.en = function (t) ***REMOVED***
    return ki(t).delete(this.clientId);
  }, /**
  * If the garbage collection threshold has passed, prunes the
  * RemoteDocumentChanges and the ClientMetadata store based on the last update
  * time of all clients.
  */
  t.prototype.nn = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t, e, n, r, i = this;
      return _tslib.__generator(this, function (o) ***REMOVED***
        switch (o.label) ***REMOVED***
          case 0:
            return !this.isPrimary || this.sn(this.$e, 18e5) ? [3, /*break*/
            2] : (this.$e = Date.now(), [4, /*yield*/
            this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (t) ***REMOVED***
              var e = Ar(t, hr.store);
              return e.Nt().next(function (t) ***REMOVED***
                var n = i.rn(t, 18e5), r = t.filter(function (t) ***REMOVED***
                  return -1 === n.indexOf(t);
                });
                // Delete metadata for clients that are no longer considered active.
                return mr.forEach(r, function (t) ***REMOVED***
                  return e.delete(t.clientId);
                }).next(function () ***REMOVED***
                  return r;
                });
              });
            }).catch(function () ***REMOVED***
              return [];
            })]);
          case 1:
            // Delete potential leftover entries that may continue to mark the
            // inactive clients as zombied in LocalStorage.
            // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
            // the client atomically, but we can't. So we opt to delete the IndexedDb
            // entries first to avoid potentially reviving a zombied client.
            if ((t = o.sent(), this.Ke)) for ((e = 0, n = t); e < n.length; e++) (r = n[e], this.Ke.removeItem(this.on(r.clientId)));
            o.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, /**
  * Schedules a recurring timer to update the client metadata and to either
  * extend or acquire the primary lease if the client is eligible.
  */
  t.prototype.ze = function () ***REMOVED***
    var t = this;
    this.Oe = this.Se.enqueueAfterDelay("client_metadata_refresh", /*ClientMetadataRefresh*/
    4e3, function () ***REMOVED***
      return t.je().then(function () ***REMOVED***
        return t.nn();
      }).then(function () ***REMOVED***
        return t.ze();
      });
    });
  }, /** Checks whether `client` is the local client.*/
  t.prototype.tn = function (t) ***REMOVED***
    return !!t && t.ownerId === this.clientId;
  }, /**
  * Evaluate the state of all active clients and determine whether the local
  * client is or can act as the holder of the primary lease. Returns whether
  * the client is eligible for the lease, but does not actually acquire it.
  * May return 'false' even if there is no active leaseholder and another
  * (foreground) client should become leaseholder instead.
  */
  t.prototype.Ye = function (t) ***REMOVED***
    var e = this;
    return this.Ce ? mr.resolve(!0) : Ai(t).get(Jn.key).next(function (n) ***REMOVED***
      // A client is eligible for the primary lease if:
      // - its network is enabled and the client's tab is in the foreground.
      // - its network is enabled and no other client's tab is in the
      // foreground.
      // - every clients network is disabled and the client's tab is in the
      // foreground.
      // - every clients network is disabled and no other client's tab is in
      // the foreground.
      // - the `forceOwningTab` setting was passed in.
      if (null !== n && e.sn(n.leaseTimestampMs, 5e3) && !e.cn(n.ownerId)) ***REMOVED***
        if (e.tn(n) && e.networkEnabled) return !0;
        if (!e.tn(n)) ***REMOVED***
          if (!n.allowTabSynchronization) // Fail the `canActAsPrimary` check if the current leaseholder has
          // not opted into multi-tab synchronization. If this happens at
          // client startup, we reject the Promise returned by
          // `enablePersistence()` and the user can continue to use Firestore
          // with in-memory persistence.
          // If this fails during a lease refresh, we will instead block the
          // AsyncQueue from executing further operations. Note that this is
          // acceptable since mixing & matching different `synchronizeTabs`
          // settings is not supported.
          // TODO(b/114226234): Remove this check when `synchronizeTabs` can
          // no longer be turned off.
          throw new T(E.FAILED_PRECONDITION, Di);
          return !1;
        }
      }
      return !(!e.networkEnabled || !e.inForeground) || ki(t).Nt().next(function (t) ***REMOVED***
        return void 0 === e.rn(t, 5e3).find(function (t) ***REMOVED***
          if (e.clientId !== t.clientId) ***REMOVED***
            var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
            if (n || r && i) return !0;
          }
          return !1;
        });
      });
    }).next(function (t) ***REMOVED***
      return (e.isPrimary !== t && N("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t);
    });
  }, t.prototype.shutdown = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t = this;
      return _tslib.__generator(this, function (e) ***REMOVED***
        switch (e.label) ***REMOVED***
          case 0:
            // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
            // has obtained the primary lease.
            // The shutdown() operations are idempotent and can be called even when
            // start() aborted (e.g. because it couldn't acquire the persistence lease).
            return (this.xe = !1, this.un(), this.Oe && (this.Oe.cancel(), this.Oe = null), this.an(), this.hn(), [4, /*yield*/
            this.Be.runTransaction("shutdown", "readwrite", [Jn.store, hr.store], function (e) ***REMOVED***
              var n = new Nr(e, _.o);
              return t.Xe(n).next(function () ***REMOVED***
                return t.en(n);
              });
            })]);
          case 1:
            // The shutdown() operations are idempotent and can be called even when
            // start() aborted (e.g. because it couldn't acquire the persistence lease).
            // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
            // has obtained the primary lease.
            return (e.sent(), this.Be.close(), // Remove the entry marking the client as zombied from LocalStorage since
            // we successfully deleted its metadata from IndexedDb.
            this.ln(), [2]);
        }
      });
    });
  }, /**
  * Returns clients that are not zombied and have an updateTime within the
  * provided threshold.
  */
  t.prototype.rn = function (t, e) ***REMOVED***
    var n = this;
    return t.filter(function (t) ***REMOVED***
      return n.sn(t.updateTimeMs, e) && !n.cn(t.clientId);
    });
  }, /**
  * Returns the IDs of the clients that are currently active. If multi-tab
  * is not supported, returns an array that only contains the local client's
  * ID.
  *
  * PORTING NOTE: This is only used for Web multi-tab.
  */
  t.prototype.fn = function () ***REMOVED***
    var t = this;
    return this.runTransaction("getActiveClients", "readonly", function (e) ***REMOVED***
      return ki(e).Nt().next(function (e) ***REMOVED***
        return t.rn(e, 18e5).map(function (t) ***REMOVED***
          return t.clientId;
        });
      });
    });
  }, Object.defineProperty(t.prototype, "started", ***REMOVED***
    get: function () ***REMOVED***
      return this.xe;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.getMutationQueue = function (t) ***REMOVED***
    return ti.Kt(t, this.R, this.Ut, this.referenceDelegate);
  }, t.prototype.getTargetCache = function () ***REMOVED***
    return this.qe;
  }, t.prototype.getRemoteDocumentCache = function () ***REMOVED***
    return this.Ue;
  }, t.prototype.getIndexManager = function () ***REMOVED***
    return this.Ut;
  }, t.prototype.getBundleCache = function () ***REMOVED***
    return this.Qe;
  }, t.prototype.runTransaction = function (t, e, n) ***REMOVED***
    var r = this;
    N("IndexedDbPersistence", "Starting transaction:", t);
    var i, o = "readonly" === e ? "readonly" : "readwrite";
    // Do all transactions as readwrite against all object stores, since we
    // are the only reader/writer.
    return this.Be.runTransaction(t, o, dr, function (o) ***REMOVED***
      return (i = new Nr(o, r.Ne ? r.Ne.next() : _.o), "readwrite-primary" === e ? r.Je(i).next(function (t) ***REMOVED***
        return !!t || r.Ye(i);
      }).next(function (e) ***REMOVED***
        if (!e) throw (A("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.Se.enqueueRetryable(function () ***REMOVED***
          return r.Me(!1);
        }), new T(E.FAILED_PRECONDITION, pr));
        return n(i);
      }).next(function (t) ***REMOVED***
        return r.Ze(i).next(function () ***REMOVED***
          return t;
        });
      }) : r.dn(i).next(function () ***REMOVED***
        return n(i);
      }));
    }).then(function (t) ***REMOVED***
      return (i.raiseOnCommittedEvent(), t);
    });
  }, /**
  * Verifies that the current tab is the primary leaseholder or alternatively
  * that the leaseholder has opted into multi-tab synchronization.
  */
  // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
  // be turned off.
  t.prototype.dn = function (t) ***REMOVED***
    var e = this;
    return Ai(t).get(Jn.key).next(function (t) ***REMOVED***
      if (null !== t && e.sn(t.leaseTimestampMs, 5e3) && !e.cn(t.ownerId) && !e.tn(t) && !(e.Ce || e.allowTabSynchronization && t.allowTabSynchronization)) throw new T(E.FAILED_PRECONDITION, Di);
    });
  }, /**
  * Obtains or extends the new primary lease for the local client. This
  * method does not verify that the client is eligible for this lease.
  */
  t.prototype.Ze = function (t) ***REMOVED***
    var e = new Jn(this.clientId, this.allowTabSynchronization, Date.now());
    return Ai(t).put(Jn.key, e);
  }, t.yt = function () ***REMOVED***
    return wr.yt();
  }, /** Checks the primary lease and removes it if we are the current primary.*/
  t.prototype.Xe = function (t) ***REMOVED***
    var e = this, n = Ai(t);
    return n.get(Jn.key).next(function (t) ***REMOVED***
      return e.tn(t) ? (N("IndexedDbPersistence", "Releasing primary lease."), n.delete(Jn.key)) : mr.resolve();
    });
  }, /** Verifies that `updateTimeMs` is within `maxAgeMs`.*/
  t.prototype.sn = function (t, e) ***REMOVED***
    var n = Date.now();
    return !(t < n - e || t > n && (A("Detected an update time that is in the future: " + t + " > " + n), 1));
  }, t.prototype.We = function () ***REMOVED***
    var t = this;
    null !== this.document && "function" == typeof this.document.addEventListener && (this.ke = function () ***REMOVED***
      t.Se.enqueueAndForget(function () ***REMOVED***
        return (t.inForeground = "visible" === t.document.visibilityState, t.je());
      });
    }, this.document.addEventListener("visibilitychange", this.ke), this.inForeground = "visible" === this.document.visibilityState);
  }, t.prototype.an = function () ***REMOVED***
    this.ke && (this.document.removeEventListener("visibilitychange", this.ke), this.ke = null);
  }, /**
  * Attaches a window.unload handler that will synchronously write our
  * clientId to a "zombie client id" location in LocalStorage. This can be used
  * by tabs trying to acquire the primary lease to determine that the lease
  * is no longer valid even if the timestamp is recent. This is particularly
  * important for the refresh case (so the tab correctly re-acquires the
  * primary lease). LocalStorage is used for this rather than IndexedDb because
  * it is a synchronous API and so can be used reliably from  an unload
  * handler.
  */
  t.prototype.Ge = function () ***REMOVED***
    var t, e = this;
    "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Fe = function () ***REMOVED***
      // Note: In theory, this should be scheduled on the AsyncQueue since it
      // accesses internal state. We execute this code directly during shutdown
      // to make sure it gets a chance to run.
      (e.un(), e.Se.enqueueAndForget(function () ***REMOVED***
        return e.shutdown();
      }));
    }, this.window.addEventListener("unload", this.Fe));
  }, t.prototype.hn = function () ***REMOVED***
    this.Fe && (this.window.removeEventListener("unload", this.Fe), this.Fe = null);
  }, /**
  * Returns whether a client is "zombied" based on its LocalStorage entry.
  * Clients become zombied when their tab closes without running all of the
  * cleanup logic in `shutdown()`.
  */
  t.prototype.cn = function (t) ***REMOVED***
    var e;
    try ***REMOVED***
      var n = null !== (null === (e = this.Ke) || void 0 === e ? void 0 : e.getItem(this.on(t)));
      return (N("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n);
    } catch (t) ***REMOVED***
      // Gracefully handle if LocalStorage isn't working.
      return (A("IndexedDbPersistence", "Failed to get zombied client id.", t), !1);
    }
  }, /**
  * Record client as zombied (a client that had its tab closed). Zombied
  * clients are ignored during primary tab selection.
  */
  t.prototype.un = function () ***REMOVED***
    if (this.Ke) try ***REMOVED***
      this.Ke.setItem(this.on(this.clientId), String(Date.now()));
    } catch (t) ***REMOVED***
      // Gracefully handle if LocalStorage isn't available / working.
      A("Failed to set zombie client id.", t);
    }
  }, /** Removes the zombied client entry if it exists.*/
  t.prototype.ln = function () ***REMOVED***
    if (this.Ke) try ***REMOVED***
      this.Ke.removeItem(this.on(this.clientId));
    } catch (t) ***REMOVED***}
  }, t.prototype.on = function (t) ***REMOVED***
    return "firestore_zombie_" + this.persistenceKey + "_" + t;
  }, t);
})();
/**
* Oldest acceptable age in milliseconds for client metadata before the client
* is considered inactive and its associated data is garbage collected.
*/
/**
* An IndexedDB-backed instance of Persistence. Data is stored persistently
* across sessions.
*
* On Web only, the Firestore SDKs support shared access to its persistence
* layer. This allows multiple browser tabs to read and write to IndexedDb and
* to synchronize state even without network connectivity. Shared access is
* currently optional and not enabled unless all clients invoke
* `enablePersistence()` with `***REMOVED***synchronizeTabs:true}`.
*
* In multi-tab mode, if multiple clients are active at the same time, the SDK
* will designate one client as the “primary client”. An effort is made to pick
* a visible, network-connected and active client, and this client is
* responsible for letting other clients know about its presence. The primary
* client writes a unique client-generated identifier (the client ID) to
* IndexedDb’s “owner” store every 4 seconds. If the primary client fails to
* update this entry, another client can acquire the lease and take over as
* primary.
*
* Some persistence operations in the SDK are designated as primary-client only
* operations. This includes the acknowledgment of mutations and all updates of
* remote documents. The effects of these operations are written to persistence
* and then broadcast to other tabs via LocalStorage (see
* `WebStorageSharedClientState`), which then refresh their state from
* persistence.
*
* Similarly, the primary client listens to notifications sent by secondary
* clients to discover persistence changes written by secondary clients, such as
* the addition of new mutations and query targets.
*
* If multi-tab is not enabled and another tab already obtained the primary
* lease, IndexedDbPersistence enters a failed state and all subsequent
* operations will automatically fail.
*
* Additionally, there is an optimization so that when a tab is closed, the
* primary lease is released immediately (this is especially important to make
* sure that a refreshed tab is able to immediately re-acquire the primary
* lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
* since it is an asynchronous API. So in addition to attempting to give up the
* lease, the leaseholder writes its client ID to a "zombiedClient" entry in
* LocalStorage which acts as an indicator that another tab should go ahead and
* take the primary lease immediately regardless of the current lease timestamp.
*
* TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
* longer optional.
*/
/**
* Helper to get a typed SimpleDbStore for the primary client object store.
*/
function Ai(t) ***REMOVED***
  return Ar(t, Jn.store);
}
/**
* Helper to get a typed SimpleDbStore for the client metadata object store.
*/
function ki(t) ***REMOVED***
  return Ar(t, hr.store);
}
/**
* Generates a string used as a prefix when storing data in IndexedDB and
* LocalStorage.
*/
function xi(t, e) ***REMOVED***
  // Use two different prefix formats:
  // * firestore / persistenceKey / projectID . databaseID / ...
  // * firestore / persistenceKey / projectID / ...
  // projectIDs are DNS-compatible names and cannot contain dots
  // so there's no danger of collisions.
  var n = t.projectId;
  return (t.isDefaultDatabase || (n += "." + t.database), "firestore/" + e + "/" + n + "/");
}
var Ci = function (t, e) ***REMOVED***
  (this.progress = t, this.wn = e);
}, Ri = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (this.Ue = t, this._n = e, this.Ut = n);
  }
  return (t.prototype.mn = function (t, e) ***REMOVED***
    var n = this;
    return this._n.getAllMutationBatchesAffectingDocumentKey(t, e).next(function (r) ***REMOVED***
      return n.yn(t, e, r);
    });
  }, /** Internal version of `getDocument` that allows reusing batches.*/
  t.prototype.yn = function (t, e, n) ***REMOVED***
    return this.Ue.getEntry(t, e).next(function (t) ***REMOVED***
      for (var e = 0, r = n; e < r.length; e++) ***REMOVED***
        r[e].applyToLocalView(t);
      }
      return t;
    });
  }, // Returns the view of the given `docs` as they would appear after applying
  // all mutations in the given `batches`.
  t.prototype.gn = function (t, e) ***REMOVED***
    t.forEach(function (t, n) ***REMOVED***
      for (var r = 0, i = e; r < i.length; r++) ***REMOVED***
        i[r].applyToLocalView(n);
      }
    });
  }, /**
  * Gets the local view of the documents identified by `keys`.
  *
  * If we don't have cached state for a document in `keys`, a NoDocument will
  * be stored for that key in the resulting set.
  */
  t.prototype.pn = function (t, e) ***REMOVED***
    var n = this;
    return this.Ue.getEntries(t, e).next(function (e) ***REMOVED***
      return n.En(t, e).next(function () ***REMOVED***
        return e;
      });
    });
  }, /**
  * Applies the local view the given `baseDocs` without retrieving documents
  * from the local store.
  */
  t.prototype.En = function (t, e) ***REMOVED***
    var n = this;
    return this._n.getAllMutationBatchesAffectingDocumentKeys(t, e).next(function (t) ***REMOVED***
      return n.gn(e, t);
    });
  }, /**
  * Performs a query against the local view of all documents.
  *
  * @param transaction - The persistence transaction.
  * @param query - The query to match documents against.
  * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
  *     documents that have been read since this snapshot version (exclusive).
  */
  t.prototype.getDocumentsMatchingQuery = function (t, e, n) ***REMOVED***
    /**
    * Returns whether the query matches a single document by path (rather than a
    * collection).
    */
    return (function (t) ***REMOVED***
      return st.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
    })(e) ? this.Tn(t, e.path) : Xt(e) ? this.In(t, e, n) : this.An(t, e, n);
  }, t.prototype.Tn = function (t, e) ***REMOVED***
    // Just do a simple document lookup.
    return this.mn(t, new st(e)).next(function (t) ***REMOVED***
      var e = $e();
      return (t.isFoundDocument() && (e = e.insert(t.key, t)), e);
    });
  }, t.prototype.In = function (t, e, n) ***REMOVED***
    var r = this, i = e.collectionGroup, o = $e();
    return this.Ut.getCollectionParents(t, i).next(function (s) ***REMOVED***
      return mr.forEach(s, function (s) ***REMOVED***
        var u = (function (t, e) ***REMOVED***
          return new Kt(e, /*collectionGroup=*/
          null, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        })(e, s.child(i));
        return r.An(t, u, n).next(function (t) ***REMOVED***
          t.forEach(function (t, e) ***REMOVED***
            o = o.insert(t, e);
          });
        });
      }).next(function () ***REMOVED***
        return o;
      });
    });
  }, t.prototype.An = function (t, e, n) ***REMOVED***
    var r, i, o = this;
    // Query the remote documents and overlay mutations.
    return this.Ue.getDocumentsMatchingQuery(t, e, n).next(function (n) ***REMOVED***
      return (r = n, o._n.getAllMutationBatchesAffectingQuery(t, e));
    }).next(function (e) ***REMOVED***
      return (i = e, o.Rn(t, i, r).next(function (t) ***REMOVED***
        r = t;
        for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) ***REMOVED***
          var a = u[s], c = a.key, h = r.get(c);
          (null == h && // Create invalid document to apply mutations on top of
          (h = _t.newInvalidDocument(c), r = r.insert(c, h)), Ne(a, h, o.localWriteTime), h.isFoundDocument() || (r = r.remove(c)));
        }
      }));
    }).next(function () ***REMOVED***
      // Finally, filter out any documents that don't actually match
      // the query.
      return (r.forEach(function (t, n) ***REMOVED***
        re(e, n) || (r = r.remove(t));
      }), r);
    });
  }, t.prototype.Rn = function (t, e, n) ***REMOVED***
    for (var r = en(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) ***REMOVED***
      var a = u[s];
      a instanceof Re && null === n.get(a.key) && (r = r.add(a.key));
    }
    var c = n;
    return this.Ue.getEntries(t, r).next(function (t) ***REMOVED***
      return (t.forEach(function (t, e) ***REMOVED***
        e.isFoundDocument() && (c = c.insert(t, e));
      }), c);
    });
  }, t);
})(), Oi = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, r) ***REMOVED***
    (this.targetId = t, this.fromCache = e, this.bn = n, this.vn = r);
  }
  return (t.Pn = function (e, n) ***REMOVED***
    for (var r = en(), i = en(), o = 0, s = n.docChanges; o < s.length; o++) ***REMOVED***
      var u = s[o];
      switch (u.type) ***REMOVED***
        case 0:
          /*Added*/
          r = r.add(u.doc.key);
          break;
        case 1:
          /*Removed*/
          i = i.add(u.doc.key);
      }
    }
    return new t(e, n.fromCache, r, i);
  }, t);
})(), Li = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***}
  /** Sets the document view to query against.*/
  return (t.prototype.Vn = function (t) ***REMOVED***
    this.Sn = t;
  }, /** Returns all local documents matching the specified query.*/
  t.prototype.getDocumentsMatchingQuery = function (t, e, n, r) ***REMOVED***
    var i = this;
    // Queries that match all documents don't benefit from using
    // key-based lookups. It is more efficient to scan all documents in a
    // collection, rather than to perform individual lookups.
    return (function (t) ***REMOVED***
      return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.explicitOrderBy.length || 1 === t.explicitOrderBy.length && t.explicitOrderBy[0].field.isKeyField());
    })(e) || n.isEqual(U.min()) ? this.Dn(t, e) : this.Sn.pn(t, r).next(function (o) ***REMOVED***
      var s = i.Cn(e, o);
      return (zt(e) || Wt(e)) && i.Nn(e.limitType, s, r, n) ? i.Dn(t, e) : (D() <= _firebaseLogger.LogLevel.DEBUG && N("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), ne(e)), i.Sn.getDocumentsMatchingQuery(t, e, n).next(function (t) ***REMOVED***
        // We merge `previousResults` into `updateResults`, since
        // `updateResults` is already a DocumentMap. If a document is
        // contained in both lists, then its contents are the same.
        return (s.forEach(function (e) ***REMOVED***
          t = t.insert(e.key, e);
        }), t);
      }));
    });
  }, /** Applies the query filter and sorting to the provided documents.*/
  t.prototype.Cn = function (t, e) ***REMOVED***
    // Sort the documents and re-apply the query filter since previously
    // matching documents do not necessarily still match the query.
    var n = new ze(ie(t));
    return (e.forEach(function (e, r) ***REMOVED***
      re(t, r) && (n = n.add(r));
    }), n);
  }, /**
  * Determines if a limit query needs to be refilled from cache, making it
  * ineligible for index-free execution.
  *
  * @param sortedPreviousResults - The documents that matched the query when it
  * was last synchronized, sorted by the query's comparator.
  * @param remoteKeys - The document keys that matched the query at the last
  * snapshot.
  * @param limboFreeSnapshotVersion - The version of the snapshot when the
  * query was last synchronized.
  */
  t.prototype.Nn = function (t, e, n, r) ***REMOVED***
    // The query needs to be refilled if a previously matching document no
    // longer matches.
    if (n.size !== e.size) return !0;
    // Limit queries are not eligible for index-free query execution if there is
    // a potential that an older document from cache now sorts before a document
    // that was previously part of the limit. This, however, can only happen if
    // the document at the edge of the limit goes out of limit.
    // If a document that is not the limit boundary sorts differently,
    // the boundary of the limit itself did not change and documents from cache
    // will continue to be "rejected" by this boundary. Therefore, we can ignore
    // any modifications that don't affect the last document.
    var i = "F" === /*First*/
    t ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
  }, t.prototype.Dn = function (t, e) ***REMOVED***
    return (D() <= _firebaseLogger.LogLevel.DEBUG && N("QueryEngine", "Using full collection scan to execute query:", ne(e)), this.Sn.getDocumentsMatchingQuery(t, e, U.min()));
  }, t);
})(), Pi = /** @class*/
(function () ***REMOVED***
  function t(/** Manages our in-memory or durable persistence.*/
  t, e, n, r) ***REMOVED***
    (this.persistence = t, this.xn = e, this.R = r, /**
    * Maps a targetID to data about its target.
    *
    * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
    * of `applyRemoteEvent()` idempotent.
    */
    this.Fn = new Ke(M), /** Maps a target to its targetID.*/
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.kn = new mi(function (t) ***REMOVED***
      return St(t);
    }, Dt), /**
    * The read time of the last entry processed by `getNewDocumentChanges()`.
    *
    * PORTING NOTE: This is only used for multi-tab synchronization.
    */
    this.On = U.min(), this._n = t.getMutationQueue(n), this.$n = t.getRemoteDocumentCache(), this.qe = t.getTargetCache(), this.Mn = new Ri(this.$n, this._n, this.persistence.getIndexManager()), this.Qe = t.getBundleCache(), this.xn.Vn(this.Mn));
  }
  return (t.prototype.collectGarbage = function (t) ***REMOVED***
    var e = this;
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (n) ***REMOVED***
      return t.collect(n, e.Fn);
    });
  }, t);
})();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A readonly view of the local state of all documents we're tracking (i.e. we
* have a cached version in remoteDocumentCache or local mutations for the
* document). The view is computed by applying the mutations in the
* MutationQueue to the RemoteDocumentCache.
*/
function Mi(/** Manages our in-memory or durable persistence.*/
t, e, n, r) ***REMOVED***
  return new Pi(t, e, n, r);
}
/**
* Tells the LocalStore that the currently authenticated user has changed.
*
* In response the local store switches the mutation queue to the new user and
* returns any resulting document changes.
*/
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
function Fi(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i, o;
    return _tslib.__generator(this, function (s) ***REMOVED***
      switch (s.label) ***REMOVED***
        case 0:
          return (n = O(t), r = n._n, i = n.Mn, [4, /*yield*/
          n.persistence.runTransaction("Handle user change", "readonly", function (t) ***REMOVED***
            // Swap out the mutation queue, grabbing the pending mutation batches
            // before and after.
            var o;
            return n._n.getAllMutationBatches(t).next(function (s) ***REMOVED***
              return (o = s, r = n.persistence.getMutationQueue(e), // Recreate our LocalDocumentsView using the new
              // MutationQueue.
              i = new Ri(n.$n, r, n.persistence.getIndexManager()), r.getAllMutationBatches(t));
            }).next(function (e) ***REMOVED***
              for (var n = [], r = [], s = en(), u = 0, a = o; // Union the old/new changed keys.
              u < a.length; u++) ***REMOVED***
                var c = a[u];
                n.push(c.batchId);
                for (var h = 0, f = c.mutations; h < f.length; h++) ***REMOVED***
                  var l = f[h];
                  s = s.add(l.key);
                }
              }
              for (var d = 0, p = e; d < p.length; d++) ***REMOVED***
                var y = p[d];
                r.push(y.batchId);
                for (var v = 0, m = y.mutations; v < m.length; v++) ***REMOVED***
                  var g = m[v];
                  s = s.add(g.key);
                }
              }
              // Return the set of all (potentially) changed documents and the list
              // of mutation batch IDs that were affected by change.
              return i.pn(t, s).next(function (t) ***REMOVED***
                return ***REMOVED***
                  Ln: t,
                  removedBatchIds: n,
                  addedBatchIds: r
                ***REMOVED***
              });
            });
          })]);
        case 1:
          return (o = s.sent(), [2, /*return*/
          (n._n = r, n.Mn = i, n.xn.Vn(n.Mn), o)]);
      }
    });
  });
}
/*Accepts locally generated Mutations and commit them to storage.*/
/**
* Acknowledges the given batch.
*
* On the happy path when a batch is acknowledged, the local store will
*
*  + remove the batch from the mutation queue;
*  + apply the changes to the remote document cache;
*  + recalculate the latency compensated view implied by those changes (there
*    may be mutations in the queue that affect the documents but haven't been
*    acknowledged yet); and
*  + give the changed documents back the sync engine
*
* @returns The resulting (modified) documents.
*/
function Vi(t, e) ***REMOVED***
  var n = O(t);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (t) ***REMOVED***
    var r = e.batch.keys(), i = n.$n.newChangeBuffer(***REMOVED***
      trackRemovals: !0
    });
    return (function (t, e, n, r) ***REMOVED***
      var i = n.batch, o = i.keys(), s = mr.resolve();
      return (o.forEach(function (t) ***REMOVED***
        s = s.next(function () ***REMOVED***
          return r.getEntry(e, t);
        }).next(function (e) ***REMOVED***
          var o = n.docVersions.get(t);
          (R(null !== o), e.version.compareTo(o) < 0 && (i.applyToRemoteDocument(e, n), e.isValidDocument() && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          r.addEntry(e, n.commitVersion)));
        });
      }), s.next(function () ***REMOVED***
        return t._n.removeMutationBatch(e, i);
      }));
    })(n, t, e, i).next(function () ***REMOVED***
      return i.apply(t);
    }).next(function () ***REMOVED***
      return n._n.performConsistencyCheck(t);
    }).next(function () ***REMOVED***
      return n.Mn.pn(t, r);
    });
  });
}
/**
* Removes mutations from the MutationQueue for the specified batch;
* LocalDocuments will be recalculated.
*
* @returns The resulting modified documents.
*/
/**
* Returns the last consistent snapshot processed (used by the RemoteStore to
* determine whether to buffer incoming snapshots from the backend).
*/
function qi(t) ***REMOVED***
  var e = O(t);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function (t) ***REMOVED***
    return e.qe.getLastRemoteSnapshotVersion(t);
  });
}
/**
* Updates the "ground-state" (remote) documents. We assume that the remote
* event reflects any write batches that have been acknowledged or rejected
* (i.e. we do not re-apply local mutations to updates from this event).
*
* LocalDocuments are re-calculated if there are remaining mutations in the
* queue.
*/
function Ui(t, e) ***REMOVED***
  var n = O(t), r = e.snapshotVersion, i = n.Fn;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", function (t) ***REMOVED***
    var o = n.$n.newChangeBuffer(***REMOVED***
      trackRemovals: !0
    });
    // Reset newTargetDataByTargetMap in case this transaction gets re-run.
    i = n.Fn;
    var s = [];
    e.targetChanges.forEach(function (e, o) ***REMOVED***
      var u = i.get(o);
      if (u) ***REMOVED***
        // Only update the remote keys if the target is still active. This
        // ensures that we can persist the updated target data along with
        // the updated assignment.
        s.push(n.qe.removeMatchingKeys(t, e.removedDocuments, o).next(function () ***REMOVED***
          return n.qe.addMatchingKeys(t, e.addedDocuments, o);
        }));
        var a = e.resumeToken;
        // Update the resume token if the change includes one.
        if (a.approximateByteSize() > 0) ***REMOVED***
          var c = u.withResumeToken(a, r).withSequenceNumber(t.currentSequenceNumber);
          (i = i.insert(o, c), // Update the target data if there are target changes (or if
          // sufficient time has passed since the last update).
          /**
          * Returns true if the newTargetData should be persisted during an update of
          * an active target. TargetData should always be persisted when a target is
          * being released and should not call this function.
          *
          * While the target is active, TargetData updates can be omitted when nothing
          * about the target has changed except metadata like the resume token or
          * snapshot version. Occasionally it's worth the extra write to prevent these
          * values from getting too stale after a crash, but this doesn't have to be
          * too frequent.
          */
          (function (t, e, n) ***REMOVED***
            // Always persist target data if we don't already have a resume token.
            return (R(e.resumeToken.approximateByteSize() > 0), 0 === t.resumeToken.approximateByteSize() || (// Don't allow resume token changes to be buffered indefinitely. This
            // allows us to be reasonably up-to-date after a crash and avoids needing
            // to loop over all active queries on shutdown. Especially in the browser
            // we may not get time to do anything interesting while the current tab is
            // closing.
            e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= 3e8 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0));
          })(u, c, e) && s.push(n.qe.updateTargetData(t, c)));
        }
      }
    });
    var u = Ye();
    // HACK: The only reason we allow a null snapshot version is so that we
    // can synthesize remote events when we get permission denied errors while
    // trying to resolve the state of a locally cached document that is in
    // limbo.
    if ((e.documentUpdates.forEach(function (r, i) ***REMOVED***
      e.resolvedLimboDocuments.has(r) && s.push(n.persistence.referenceDelegate.updateLimboDocument(t, r));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
    // documents in advance in a single call.
    s.push(Bi(t, o, e.documentUpdates, r, void 0).next(function (t) ***REMOVED***
      u = t;
    })), !r.isEqual(U.min()))) ***REMOVED***
      var a = n.qe.getLastRemoteSnapshotVersion(t).next(function (e) ***REMOVED***
        return n.qe.setTargetsMetadata(t, t.currentSequenceNumber, r);
      });
      s.push(a);
    }
    return mr.waitFor(s).next(function () ***REMOVED***
      return o.apply(t);
    }).next(function () ***REMOVED***
      return n.Mn.En(t, u);
    }).next(function () ***REMOVED***
      return u;
    });
  }).then(function (t) ***REMOVED***
    return (n.Fn = i, t);
  });
}
/**
* Populates document change buffer with documents from backend or a bundle.
* Returns the document changes resulting from applying those documents.
*
* @param txn - Transaction to use to read existing documents from storage.
* @param documentBuffer - Document buffer to collect the resulted changes to be
*        applied to storage.
* @param documents - Documents to be applied.
* @param globalVersion - A `SnapshotVersion` representing the read time if all
*        documents have the same read time.
* @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
*        have their own read time.
*
* Note: this function will use `documentVersions` if it is defined;
* when it is not defined, resorts to `globalVersion`.
*/
function Bi(t, e, n, r, // TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
// this parameter.
i) ***REMOVED***
  var o = en();
  return (n.forEach(function (t) ***REMOVED***
    return o = o.add(t);
  }), e.getEntries(t, o).next(function (t) ***REMOVED***
    var o = Ye();
    return (n.forEach(function (n, s) ***REMOVED***
      var u = t.get(n), a = (null == i ? void 0 : i.get(n)) || r;
      // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.
      s.isNoDocument() && s.version.isEqual(U.min()) ? // NoDocuments with SnapshotVersion.min() are used in manufactured
      // events. We remove these documents from cache since we lost
      // access.
      (e.removeEntry(n, a), o = o.insert(n, s)) : !u.isValidDocument() || s.version.compareTo(u.version) > 0 || 0 === s.version.compareTo(u.version) && u.hasPendingWrites ? (e.addEntry(s, a), o = o.insert(n, s)) : N("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", u.version, " Watch version:", s.version);
    }), o);
  }));
}
function ji(t, e) ***REMOVED***
  var n = O(t);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", function (t) ***REMOVED***
    return (void 0 === e && (e = -1), n._n.getNextMutationBatchAfterBatchId(t, e));
  });
}
/**
* Reads the current value of a Document with a given key or null if not
* found - used for testing.
*/
/**
* Assigns the given target an internal ID so that its results can be pinned so
* they don't get GC'd. A target must be allocated in the local store before
* the store can be used to manage its view.
*
* Allocating an already allocated `Target` will return the existing `TargetData`
* for that `Target`.
*/
function Ki(t, e) ***REMOVED***
  var n = O(t);
  return n.persistence.runTransaction("Allocate target", "readwrite", function (t) ***REMOVED***
    var r;
    return n.qe.getTargetData(t, e).next(function (i) ***REMOVED***
      return i ? // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      (r = i, mr.resolve(r)) : n.qe.allocateTargetId(t).next(function (i) ***REMOVED***
        return (r = new Cr(e, i, 0, /*Listen*/
        t.currentSequenceNumber), n.qe.addTargetData(t, r).next(function () ***REMOVED***
          return r;
        }));
      });
    });
  }).then(function (t) ***REMOVED***
    // If Multi-Tab is enabled, the existing target data may be newer than
    // the in-memory data
    var r = n.Fn.get(t.targetId);
    return ((null === r || t.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.Fn = n.Fn.insert(t.targetId, t), n.kn.set(e, t.targetId)), t);
  });
}
/**
* Returns the TargetData as seen by the LocalStore, including updates that may
* have not yet been persisted to the TargetCache.
*/
// Visible for testing.
/**
* Unpins all the documents associated with the given target. If
* `keepPersistedTargetData` is set to false and Eager GC enabled, the method
* directly removes the associated target data from the target cache.
*
* Releasing a non-existing `Target` is a no-op.
*/
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
function Gi(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r, i, o, s;
    return _tslib.__generator(this, function (u) ***REMOVED***
      switch (u.label) ***REMOVED***
        case 0:
          (r = O(t), i = r.Fn.get(e), o = n ? "readwrite" : "readwrite-primary", u.label = 1);
        case 1:
          return (u.trys.push([1, 4, , 5]), n ? [3, /*break*/
          3] : [4, /*yield*/
          r.persistence.runTransaction("Release target", o, function (t) ***REMOVED***
            return r.persistence.referenceDelegate.removeTarget(t, i);
          })]);
        case 2:
          (u.sent(), u.label = 3);
        case 3:
          return [3, /*break*/
          5];
        case 4:
          if (!_r(s = u.sent())) throw s;
          // All `releaseTarget` does is record the final metadata state for the
          // target, but we've been recording this periodically during target
          // activity. If we lose this write this could cause a very slight
          // difference in the order of target deletion during GC, but we
          // don't define exact LRU semantics so this is acceptable.
          return (N("LocalStore", "Failed to update sequence numbers for target " + e + ": " + s), [3, /*break*/
          5]);
        case 5:
          return (r.Fn = r.Fn.remove(e), r.kn.delete(i.target), [2]);
      }
    });
  });
}
/**
* Runs the specified query against the local store and returns the results,
* potentially taking advantage of query data from previous executions (such
* as the set of remote keys).
*
* @param usePreviousResults - Whether results from previous executions can
* be used to optimize this query execution.
*/
function Qi(t, e, n) ***REMOVED***
  var r = O(t), i = U.min(), o = en();
  return r.persistence.runTransaction("Execute query", "readonly", function (t) ***REMOVED***
    return (function (t, e, n) ***REMOVED***
      var r = O(t), i = r.kn.get(n);
      return void 0 !== i ? mr.resolve(r.Fn.get(i)) : r.qe.getTargetData(e, n);
    })(r, t, Jt(e)).next(function (e) ***REMOVED***
      if (e) return (i = e.lastLimboFreeSnapshotVersion, r.qe.getMatchingKeysForTargetId(t, e.targetId).next(function (t) ***REMOVED***
        o = t;
      }));
    }).next(function () ***REMOVED***
      return r.xn.getDocumentsMatchingQuery(t, e, n ? i : U.min(), n ? o : en());
    }).next(function (t) ***REMOVED***
      return ***REMOVED***
        documents: t,
        Bn: o
      ***REMOVED***
    });
  });
}
// PORTING NOTE: Multi-Tab only.
function zi(t, e) ***REMOVED***
  var n = O(t), r = O(n.qe), i = n.Fn.get(e);
  return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", function (t) ***REMOVED***
    return r.lt(t, e).next(function (t) ***REMOVED***
      return t ? t.target : null;
    });
  });
}
/**
* Returns the set of documents that have been updated since the last call.
* If this is the first call, returns the set of changes since client
* initialization. Further invocations will return document that have changed
* since the prior call.
*/
// PORTING NOTE: Multi-Tab only.
function Wi(t) ***REMOVED***
  var e = O(t);
  return e.persistence.runTransaction("Get new document changes", "readonly", function (t) ***REMOVED***
    return (function (t, e, n) ***REMOVED***
      var r = O(t), i = Ye(), o = Pr(n), s = _i(e), u = IDBKeyRange.lowerBound(o, !0);
      return s.Ot(***REMOVED***
        index: ir.readTimeIndex,
        range: u
      }, function (t, e) ***REMOVED***
        // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
        // the documents directly since we want to keep sentinel deletes.
        var n = Or(r.R, e);
        (i = i.insert(n.key, n), o = e.readTime);
      }).next(function () ***REMOVED***
        return ***REMOVED***
          wn: i,
          readTime: Mr(o)
        ***REMOVED***
      });
    })(e.$n, t, e.On);
  }).then(function (t) ***REMOVED***
    var n = t.wn, r = t.readTime;
    return (e.On = r, n);
  });
}
/**
* Reads the newest document change from persistence and moves the internal
* synchronization marker forward so that calls to `getNewDocumentChanges()`
* only return changes that happened after client initialization.
*/
// PORTING NOTE: Multi-Tab only.
function Hi(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var e;
    return _tslib.__generator(this, function (n) ***REMOVED***
      return [2, /*return*/
      (e = O(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) ***REMOVED***
        return (function (t) ***REMOVED***
          var e = _i(t), n = U.min();
          // If there are no existing entries, we return SnapshotVersion.min().
          return e.Ot(***REMOVED***
            index: ir.readTimeIndex,
            reverse: !0
          }, function (t, e, r) ***REMOVED***
            (e.readTime && (n = Mr(e.readTime)), r.done());
          }).next(function () ***REMOVED***
            return n;
          });
        })(t);
      }).then(function (t) ***REMOVED***
        e.On = t;
      })];
    });
  });
}
/**
* Creates a new target using the given bundle name, which will be used to
* hold the keys of all documents from the bundle in query-document mappings.
* This ensures that the loaded documents do not get garbage collected
* right away.
*/
/**
* Applies the documents from a bundle to the "ground-state" (remote)
* documents.
*
* LocalDocuments are re-calculated if there are remaining mutations in the
* queue.
*/
function Yi(t, e, n, r) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var i, o, s, u, a, c, h, f, l, d;
    return _tslib.__generator(this, function (p) ***REMOVED***
      switch (p.label) ***REMOVED***
        case 0:
          for ((i = O(t), o = en(), s = Ye(), u = Ze(), a = 0, c = n); a < c.length; a++) (h = c[a], f = e.qn(h.metadata.name), h.document && (o = o.add(f)), s = s.insert(f, e.Un(h)), u = u.insert(f, e.Qn(h.metadata.readTime)));
          return (l = i.$n.newChangeBuffer(***REMOVED***
            trackRemovals: !0
          }), [4, /*yield*/
          Ki(i, (function (t) ***REMOVED***
            // It is OK that the path used for the query is not valid, because this will
            // not be read and queried.
            return Jt(Qt(Q.fromString("__bundle__/docs/" + t)));
          })(r))]);
        case 1:
          // Allocates a target to hold all document keys from the bundle, such that
          // they will not get garbage collected right away.
          return (d = p.sent(), [2, /*return*/
          i.persistence.runTransaction("Apply bundle documents", "readwrite", function (t) ***REMOVED***
            return Bi(t, l, s, U.min(), u).next(function (e) ***REMOVED***
              return (l.apply(t), e);
            }).next(function (e) ***REMOVED***
              return i.qe.removeMatchingKeysForTargetId(t, d.targetId).next(function () ***REMOVED***
                return i.qe.addMatchingKeys(t, o, d.targetId);
              }).next(function () ***REMOVED***
                return i.Mn.En(t, e);
              }).next(function () ***REMOVED***
                return e;
              });
            });
          })]);
      }
    });
  });
}
/**
* Returns a promise of a boolean to indicate if the given bundle has already
* been loaded and the create time is newer than the current loading bundle.
*/
/**
* Saves the given `NamedQuery` to local persistence.
*/
function Xi(t, e, n) ***REMOVED***
  return (void 0 === n && (n = en()), _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r, i;
    return _tslib.__generator(this, function (o) ***REMOVED***
      switch (o.label) ***REMOVED***
        case 0:
          return [4, /*yield*/
          Ki(t, Jt(jr(e.bundledQuery)))];
        case 1:
          return (r = o.sent(), [2, /*return*/
          (i = O(t)).persistence.runTransaction("Save named query", "readwrite", function (t) ***REMOVED***
            var o = bn(e.readTime);
            // Simply save the query itself if it is older than what the SDK already
            // has.
            if (r.snapshotVersion.compareTo(o) >= 0) return i.Qe.saveNamedQuery(t, e);
            // Update existing target data because the query from the bundle is newer.
            var s = r.withResumeToken(Y.EMPTY_BYTE_STRING, o);
            return (i.Fn = i.Fn.insert(s.targetId, s), i.qe.updateTargetData(t, s).next(function () ***REMOVED***
              return i.qe.removeMatchingKeysForTargetId(t, r.targetId);
            }).next(function () ***REMOVED***
              return i.qe.addMatchingKeys(t, n, r.targetId);
            }).next(function () ***REMOVED***
              return i.Qe.saveNamedQuery(t, e);
            }));
          })]);
      }
    });
  }));
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $i = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.R = t, this.Kn = new Map(), this.jn = new Map());
  }
  return (t.prototype.getBundleMetadata = function (t, e) ***REMOVED***
    return mr.resolve(this.Kn.get(e));
  }, t.prototype.saveBundleMetadata = function (t, e) ***REMOVED***
    /** Decodes a BundleMetadata proto into a BundleMetadata object.*/
    var n;
    return (this.Kn.set(e.id, ***REMOVED***
      id: (n = e).id,
      version: n.version,
      createTime: bn(n.createTime)
    }), mr.resolve());
  }, t.prototype.getNamedQuery = function (t, e) ***REMOVED***
    return mr.resolve(this.jn.get(e));
  }, t.prototype.saveNamedQuery = function (t, e) ***REMOVED***
    return (this.jn.set(e.name, (function (t) ***REMOVED***
      return ***REMOVED***
        name: t.name,
        query: jr(t.bundledQuery),
        readTime: bn(t.readTime)
      ***REMOVED***
    })(e)), mr.resolve());
  }, t);
})(), Ji = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    // A set of outstanding references to a document sorted by key.
    (this.Wn = new ze(Zi.Gn), // A set of outstanding references to a document sorted by target id.
    this.zn = new ze(Zi.Hn));
  }
  return (t.prototype.isEmpty = function () ***REMOVED***
    return this.Wn.isEmpty();
  }, /** Adds a reference to the given document key for the given ID.*/
  t.prototype.addReference = function (t, e) ***REMOVED***
    var n = new Zi(t, e);
    (this.Wn = this.Wn.add(n), this.zn = this.zn.add(n));
  }, /** Add references to the given document keys for the given ID.*/
  t.prototype.Jn = function (t, e) ***REMOVED***
    var n = this;
    t.forEach(function (t) ***REMOVED***
      return n.addReference(t, e);
    });
  }, /**
  * Removes a reference to the given document key for the given
  * ID.
  */
  t.prototype.removeReference = function (t, e) ***REMOVED***
    this.Yn(new Zi(t, e));
  }, t.prototype.Xn = function (t, e) ***REMOVED***
    var n = this;
    t.forEach(function (t) ***REMOVED***
      return n.removeReference(t, e);
    });
  }, /**
  * Clears all references with a given ID. Calls removeRef() for each key
  * removed.
  */
  t.prototype.Zn = function (t) ***REMOVED***
    var e = this, n = new st(new Q([])), r = new Zi(n, t), i = new Zi(n, t + 1), o = [];
    return (this.zn.forEachInRange([r, i], function (t) ***REMOVED***
      (e.Yn(t), o.push(t.key));
    }), o);
  }, t.prototype.ts = function () ***REMOVED***
    var t = this;
    this.Wn.forEach(function (e) ***REMOVED***
      return t.Yn(e);
    });
  }, t.prototype.Yn = function (t) ***REMOVED***
    (this.Wn = this.Wn.delete(t), this.zn = this.zn.delete(t));
  }, t.prototype.es = function (t) ***REMOVED***
    var e = new st(new Q([])), n = new Zi(e, t), r = new Zi(e, t + 1), i = en();
    return (this.zn.forEachInRange([n, r], function (t) ***REMOVED***
      i = i.add(t.key);
    }), i);
  }, t.prototype.containsKey = function (t) ***REMOVED***
    var e = new Zi(t, 0), n = this.Wn.firstAfterOrEqual(e);
    return null !== n && t.isEqual(n.key);
  }, t);
})(), Zi = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.key = t, this.ns = e);
  }
  return (t.Gn = function (t, e) ***REMOVED***
    return st.comparator(t.key, e.key) || M(t.ns, e.ns);
  }, /** Compare by ID then by key*/
  t.Hn = function (t, e) ***REMOVED***
    return M(t.ns, e.ns) || st.comparator(t.key, e.key);
  }, t);
})(), to = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.Ut = t, this.referenceDelegate = e, /**
    * The set of all mutations that have been sent but not yet been applied to
    * the backend.
    */
    this._n = [], /** Next value to use when assigning sequential IDs to each mutation batch.*/
    this.ss = 1, /** An ordered mapping between documents and the mutations batch IDs.*/
    this.rs = new ze(Zi.Gn));
  }
  return (t.prototype.checkEmpty = function (t) ***REMOVED***
    return mr.resolve(0 === this._n.length);
  }, t.prototype.addMutationBatch = function (t, e, n, r) ***REMOVED***
    var i = this.ss;
    (this.ss++, this._n.length > 0 && this._n[this._n.length - 1]);
    var o = new kr(i, e, n, r);
    this._n.push(o);
    // Track references by document key and index collection parents.
    for (var s = 0, u = r; s < u.length; s++) ***REMOVED***
      var a = u[s];
      (this.rs = this.rs.add(new Zi(a.key, i)), this.Ut.addToCollectionParentIndex(t, a.key.path.popLast()));
    }
    return mr.resolve(o);
  }, t.prototype.lookupMutationBatch = function (t, e) ***REMOVED***
    return mr.resolve(this.os(e));
  }, t.prototype.getNextMutationBatchAfterBatchId = function (t, e) ***REMOVED***
    var n = e + 1, r = this.cs(n), i = r < 0 ? 0 : r;
    // The requested batchId may still be out of range so normalize it to the
    // start of the queue.
    return mr.resolve(this._n.length > i ? this._n[i] : null);
  }, t.prototype.getHighestUnacknowledgedBatchId = function () ***REMOVED***
    return mr.resolve(0 === this._n.length ? -1 : this.ss - 1);
  }, t.prototype.getAllMutationBatches = function (t) ***REMOVED***
    return mr.resolve(this._n.slice());
  }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function (t, e) ***REMOVED***
    var n = this, r = new Zi(e, 0), i = new Zi(e, Number.POSITIVE_INFINITY), o = [];
    return (this.rs.forEachInRange([r, i], function (t) ***REMOVED***
      var e = n.os(t.ns);
      o.push(e);
    }), mr.resolve(o));
  }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (t, e) ***REMOVED***
    var n = this, r = new ze(M);
    return (e.forEach(function (t) ***REMOVED***
      var e = new Zi(t, 0), i = new Zi(t, Number.POSITIVE_INFINITY);
      n.rs.forEachInRange([e, i], function (t) ***REMOVED***
        r = r.add(t.ns);
      });
    }), mr.resolve(this.us(r)));
  }, t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) ***REMOVED***
    // Use the query path as a prefix for testing if a document matches the
    // query.
    var n = e.path, r = n.length + 1, i = n;
    // Construct a document reference for actually scanning the index. Unlike
    // the prefix the document key in this reference must have an even number of
    // segments. The empty segment can be used a suffix of the query path
    // because it precedes all other segments in an ordered traversal.
    st.isDocumentKey(i) || (i = i.child(""));
    var o = new Zi(new st(i), 0), s = new ze(M);
    // Find unique batchIDs referenced by all documents potentially matching the
    // query.
    return (this.rs.forEachWhile(function (t) ***REMOVED***
      var e = t.key.path;
      return !!n.isPrefixOf(e) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (e.length === r && (s = s.add(t.ns)), !0);
    }, o), mr.resolve(this.us(s)));
  }, t.prototype.us = function (t) ***REMOVED***
    var e = this, n = [];
    // Construct an array of matching batches, sorted by batchID to ensure that
    // multiple mutations affecting the same document key are applied in order.
    return (t.forEach(function (t) ***REMOVED***
      var r = e.os(t);
      null !== r && n.push(r);
    }), n);
  }, t.prototype.removeMutationBatch = function (t, e) ***REMOVED***
    var n = this;
    (R(0 === this.hs(e.batchId, "removed")), this._n.shift());
    var r = this.rs;
    return mr.forEach(e.mutations, function (i) ***REMOVED***
      var o = new Zi(i.key, e.batchId);
      return (r = r.delete(o), n.referenceDelegate.markPotentiallyOrphaned(t, i.key));
    }).next(function () ***REMOVED***
      n.rs = r;
    });
  }, t.prototype.Gt = function (t) ***REMOVED***}, t.prototype.containsKey = function (t, e) ***REMOVED***
    var n = new Zi(e, 0), r = this.rs.firstAfterOrEqual(n);
    return mr.resolve(e.isEqual(r && r.key));
  }, t.prototype.performConsistencyCheck = function (t) ***REMOVED***
    return (this._n.length, mr.resolve());
  }, /**
  * Finds the index of the given batchId in the mutation queue and asserts that
  * the resulting index is within the bounds of the queue.
  *
  * @param batchId - The batchId to search for
  * @param action - A description of what the caller is doing, phrased in passive
  * form (e.g. "acknowledged" in a routine that acknowledges batches).
  */
  t.prototype.hs = function (t, e) ***REMOVED***
    return this.cs(t);
  }, /**
  * Finds the index of the given batchId in the mutation queue. This operation
  * is O(1).
  *
  * @returns The computed index of the batch with the given batchId, based on
  * the state of the queue. Note this index can be negative if the requested
  * batchId has already been remvoed from the queue or past the end of the
  * queue if the batchId is larger than the last added batch.
  */
  t.prototype.cs = function (t) ***REMOVED***
    return 0 === this._n.length ? 0 : t - this._n[0].batchId;
  }, /**
  * A version of lookupMutationBatch that doesn't return a promise, this makes
  * other functions that uses this code easier to read and more efficent.
  */
  t.prototype.os = function (t) ***REMOVED***
    var e = this.cs(t);
    return e < 0 || e >= this._n.length ? null : this._n[e];
  }, t);
})(), eo = /** @class*/
(function () ***REMOVED***
  /**
  * @param sizer - Used to assess the size of a document. For eager GC, this is
  * expected to just return 0 to avoid unnecessarily doing the work of
  * calculating the size.
  */
  function t(t, e) ***REMOVED***
    (this.Ut = t, this.ls = e, /** Underlying cache of documents and their read times.*/
    this.docs = new Ke(st.comparator), /** Size of all cached documents.*/
    this.size = 0);
  }
  return (t.prototype.addEntry = function (t, e, n) ***REMOVED***
    var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.ls(e);
    return (this.docs = this.docs.insert(r, ***REMOVED***
      document: e.clone(),
      size: s,
      readTime: n
    }), this.size += s - o, this.Ut.addToCollectionParentIndex(t, r.path.popLast()));
  }, /**
  * Removes the specified entry from the cache and updates the cache size as appropriate.
  *
  * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
  * returned by `newChangeBuffer()`.
  */
  t.prototype.removeEntry = function (t) ***REMOVED***
    var e = this.docs.get(t);
    e && (this.docs = this.docs.remove(t), this.size -= e.size);
  }, t.prototype.getEntry = function (t, e) ***REMOVED***
    var n = this.docs.get(e);
    return mr.resolve(n ? n.document.clone() : _t.newInvalidDocument(e));
  }, t.prototype.getEntries = function (t, e) ***REMOVED***
    var n = this, r = Ye();
    return (e.forEach(function (t) ***REMOVED***
      var e = n.docs.get(t);
      r = r.insert(t, e ? e.document.clone() : _t.newInvalidDocument(t));
    }), mr.resolve(r));
  }, t.prototype.getDocumentsMatchingQuery = function (t, e, n) ***REMOVED***
    for (var r = Ye(), i = new st(e.path.child("")), o = this.docs.getIteratorFrom(i); // Documents are ordered by key, so we can use a prefix scan to narrow down
    // the documents we need to match the query against.
    o.hasNext(); ) ***REMOVED***
      var s = o.getNext(), u = s.key, a = s.value, c = a.document, h = a.readTime;
      if (!e.path.isPrefixOf(u.path)) break;
      h.compareTo(n) <= 0 || re(e, c) && (r = r.insert(c.key, c.clone()));
    }
    return mr.resolve(r);
  }, t.prototype.fs = function (t, e) ***REMOVED***
    return mr.forEach(this.docs, function (t) ***REMOVED***
      return e(t);
    });
  }, t.prototype.newChangeBuffer = function (t) ***REMOVED***
    // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
    // a separate changelog and does not need special handling for removals.
    return new no(this);
  }, t.prototype.getSize = function (t) ***REMOVED***
    return mr.resolve(this.size);
  }, t);
})(), no = /** @class*/
(function (t) ***REMOVED***
  function e(e) ***REMOVED***
    var n = this;
    return ((n = t.call(this) || this).Ie = e, n);
  }
  return (_tslib.__extends(e, t), e.prototype.applyChanges = function (t) ***REMOVED***
    var e = this, n = [];
    return (this.changes.forEach(function (r, i) ***REMOVED***
      i.document.isValidDocument() ? n.push(e.Ie.addEntry(t, i.document, e.getReadTime(r))) : e.Ie.removeEntry(r);
    }), mr.waitFor(n));
  }, e.prototype.getFromCache = function (t, e) ***REMOVED***
    return this.Ie.getEntry(t, e);
  }, e.prototype.getAllFromCache = function (t, e) ***REMOVED***
    return this.Ie.getEntries(t, e);
  }, e);
})(gi), ro = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.persistence = t, /**
    * Maps a target to the data about that target
    */
    this.ds = new mi(function (t) ***REMOVED***
      return St(t);
    }, Dt), /** The last received snapshot version.*/
    this.lastRemoteSnapshotVersion = U.min(), /** The highest numbered target ID encountered.*/
    this.highestTargetId = 0, /** The highest sequence number encountered.*/
    this.ws = 0, /**
    * A ordered bidirectional mapping between documents and the remote target
    * IDs.
    */
    this._s = new Ji(), this.targetCount = 0, this.ys = oi.Jt());
  }
  return (t.prototype.forEachTarget = function (t, e) ***REMOVED***
    return (this.ds.forEach(function (t, n) ***REMOVED***
      return e(n);
    }), mr.resolve());
  }, t.prototype.getLastRemoteSnapshotVersion = function (t) ***REMOVED***
    return mr.resolve(this.lastRemoteSnapshotVersion);
  }, t.prototype.getHighestSequenceNumber = function (t) ***REMOVED***
    return mr.resolve(this.ws);
  }, t.prototype.allocateTargetId = function (t) ***REMOVED***
    return (this.highestTargetId = this.ys.next(), mr.resolve(this.highestTargetId));
  }, t.prototype.setTargetsMetadata = function (t, e, n) ***REMOVED***
    return (n && (this.lastRemoteSnapshotVersion = n), e > this.ws && (this.ws = e), mr.resolve());
  }, t.prototype.te = function (t) ***REMOVED***
    this.ds.set(t.target, t);
    var e = t.targetId;
    (e > this.highestTargetId && (this.ys = new oi(e), this.highestTargetId = e), t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber));
  }, t.prototype.addTargetData = function (t, e) ***REMOVED***
    return (this.te(e), this.targetCount += 1, mr.resolve());
  }, t.prototype.updateTargetData = function (t, e) ***REMOVED***
    return (this.te(e), mr.resolve());
  }, t.prototype.removeTargetData = function (t, e) ***REMOVED***
    return (this.ds.delete(e.target), this._s.Zn(e.targetId), this.targetCount -= 1, mr.resolve());
  }, t.prototype.removeTargets = function (t, e, n) ***REMOVED***
    var r = this, i = 0, o = [];
    return (this.ds.forEach(function (s, u) ***REMOVED***
      u.sequenceNumber <= e && null === n.get(u.targetId) && (r.ds.delete(s), o.push(r.removeMatchingKeysForTargetId(t, u.targetId)), i++);
    }), mr.waitFor(o).next(function () ***REMOVED***
      return i;
    }));
  }, t.prototype.getTargetCount = function (t) ***REMOVED***
    return mr.resolve(this.targetCount);
  }, t.prototype.getTargetData = function (t, e) ***REMOVED***
    var n = this.ds.get(e) || null;
    return mr.resolve(n);
  }, t.prototype.addMatchingKeys = function (t, e, n) ***REMOVED***
    return (this._s.Jn(e, n), mr.resolve());
  }, t.prototype.removeMatchingKeys = function (t, e, n) ***REMOVED***
    this._s.Xn(e, n);
    var r = this.persistence.referenceDelegate, i = [];
    return (r && e.forEach(function (e) ***REMOVED***
      i.push(r.markPotentiallyOrphaned(t, e));
    }), mr.waitFor(i));
  }, t.prototype.removeMatchingKeysForTargetId = function (t, e) ***REMOVED***
    return (this._s.Zn(e), mr.resolve());
  }, t.prototype.getMatchingKeysForTargetId = function (t, e) ***REMOVED***
    var n = this._s.es(e);
    return mr.resolve(n);
  }, t.prototype.containsKey = function (t, e) ***REMOVED***
    return mr.resolve(this._s.containsKey(e));
  }, t);
})(), io = /** @class*/
(function () ***REMOVED***
  /**
  * The constructor accepts a factory for creating a reference delegate. This
  * allows both the delegate and this instance to have strong references to
  * each other without having nullable fields that would then need to be
  * checked or asserted on every access.
  */
  function t(t, e) ***REMOVED***
    var n = this;
    (this.gs = ***REMOVED***}, this.Ne = new _(0), this.xe = !1, this.xe = !0, this.referenceDelegate = t(this), this.qe = new ro(this), this.Ut = new zr(), this.Ue = (function (t, e) ***REMOVED***
      return new eo(t, function (t) ***REMOVED***
        return n.referenceDelegate.ps(t);
      });
    })(this.Ut), this.R = new Rr(e), this.Qe = new $i(this.R));
  }
  return (t.prototype.start = function () ***REMOVED***
    return Promise.resolve();
  }, t.prototype.shutdown = function () ***REMOVED***
    // No durable state to ensure is closed on shutdown.
    return (this.xe = !1, Promise.resolve());
  }, Object.defineProperty(t.prototype, "started", ***REMOVED***
    get: function () ***REMOVED***
      return this.xe;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.setDatabaseDeletedListener = function () ***REMOVED***}, t.prototype.setNetworkEnabled = function () ***REMOVED***}, t.prototype.getIndexManager = function () ***REMOVED***
    return this.Ut;
  }, t.prototype.getMutationQueue = function (t) ***REMOVED***
    var e = this.gs[t.toKey()];
    return (e || (e = new to(this.Ut, this.referenceDelegate), this.gs[t.toKey()] = e), e);
  }, t.prototype.getTargetCache = function () ***REMOVED***
    return this.qe;
  }, t.prototype.getRemoteDocumentCache = function () ***REMOVED***
    return this.Ue;
  }, t.prototype.getBundleCache = function () ***REMOVED***
    return this.Qe;
  }, t.prototype.runTransaction = function (t, e, n) ***REMOVED***
    var r = this;
    N("MemoryPersistence", "Starting transaction:", t);
    var i = new oo(this.Ne.next());
    return (this.referenceDelegate.Es(), n(i).next(function (t) ***REMOVED***
      return r.referenceDelegate.Ts(i).next(function () ***REMOVED***
        return t;
      });
    }).toPromise().then(function (t) ***REMOVED***
      return (i.raiseOnCommittedEvent(), t);
    }));
  }, t.prototype.Is = function (t, e) ***REMOVED***
    return mr.or(Object.values(this.gs).map(function (n) ***REMOVED***
      return function () ***REMOVED***
        return n.containsKey(t, e);
      ***REMOVED***
    }));
  }, t);
})(), oo = /** @class*/
(function (t) ***REMOVED***
  function e(e) ***REMOVED***
    var n = this;
    return ((n = t.call(this) || this).currentSequenceNumber = e, n);
  }
  return (_tslib.__extends(e, t), e);
})(yr), so = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.persistence = t, /** Tracks all documents that are active in Query views.*/
    this.As = new Ji(), /** The list of documents that are potentially GCed after each transaction.*/
    this.Rs = null);
  }
  return (t.bs = function (e) ***REMOVED***
    return new t(e);
  }, Object.defineProperty(t.prototype, "vs", ***REMOVED***
    get: function () ***REMOVED***
      if (this.Rs) return this.Rs;
      throw C();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.addReference = function (t, e, n) ***REMOVED***
    return (this.As.addReference(n, e), this.vs.delete(n.toString()), mr.resolve());
  }, t.prototype.removeReference = function (t, e, n) ***REMOVED***
    return (this.As.removeReference(n, e), this.vs.add(n.toString()), mr.resolve());
  }, t.prototype.markPotentiallyOrphaned = function (t, e) ***REMOVED***
    return (this.vs.add(e.toString()), mr.resolve());
  }, t.prototype.removeTarget = function (t, e) ***REMOVED***
    var n = this;
    this.As.Zn(e.targetId).forEach(function (t) ***REMOVED***
      return n.vs.add(t.toString());
    });
    var r = this.persistence.getTargetCache();
    return r.getMatchingKeysForTargetId(t, e.targetId).next(function (t) ***REMOVED***
      t.forEach(function (t) ***REMOVED***
        return n.vs.add(t.toString());
      });
    }).next(function () ***REMOVED***
      return r.removeTargetData(t, e);
    });
  }, t.prototype.Es = function () ***REMOVED***
    this.Rs = new Set();
  }, t.prototype.Ts = function (t) ***REMOVED***
    var e = this, n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    // Remove newly orphaned documents.
    return mr.forEach(this.vs, function (r) ***REMOVED***
      var i = st.fromPath(r);
      return e.Ps(t, i).next(function (t) ***REMOVED***
        t || n.removeEntry(i);
      });
    }).next(function () ***REMOVED***
      return (e.Rs = null, n.apply(t));
    });
  }, t.prototype.updateLimboDocument = function (t, e) ***REMOVED***
    var n = this;
    return this.Ps(t, e).next(function (t) ***REMOVED***
      t ? n.vs.delete(e.toString()) : n.vs.add(e.toString());
    });
  }, t.prototype.ps = function (t) ***REMOVED***
    // For eager GC, we don't care about the document size, there are no size thresholds.
    return 0;
  }, t.prototype.Ps = function (t, e) ***REMOVED***
    var n = this;
    return mr.or([function () ***REMOVED***
      return mr.resolve(n.As.containsKey(e));
    }, function () ***REMOVED***
      return n.persistence.getTargetCache().containsKey(t, e);
    }, function () ***REMOVED***
      return n.persistence.Is(t, e);
    }]);
  }, t);
})(), uo = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this.uid = t;
  }
  return (t.prototype.isAuthenticated = function () ***REMOVED***
    return null != this.uid;
  }, /**
  * Returns a key representing this user, suitable for inclusion in a
  * dictionary.
  */
  t.prototype.toKey = function () ***REMOVED***
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return t.uid === this.uid;
  }, t);
})();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A collection of references to a document from some kind of numbered entity
* (either a target ID or batch ID). As references are added to or removed from
* the set corresponding events are emitted to a registered garbage collector.
*
* Each reference is represented by a DocumentReference object. Each of them
* contains enough information to uniquely identify the reference. They are all
* stored primarily in a set sorted by key. A document is considered garbage if
* there's no references in that set (this can be efficiently checked thanks to
* sorting by key).
*
* ReferenceSet also keeps a secondary set that contains references sorted by
* IDs. This one is used to efficiently implement removal of all references by
* some target ID.
*/
/** Assembles the key for a client state in WebStorage*/
function ao(t, e) ***REMOVED***
  return "firestore_clients_" + t + "_" + e;
}
// The format of the WebStorage key that stores the mutation state is:
// firestore_mutations_<persistence_prefix>_<batch_id>
// (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage*/
function co(t, e, n) ***REMOVED***
  var r = "firestore_mutations_" + t + "_" + n;
  return (e.isAuthenticated() && (r += "_" + e.uid), r);
}
// The format of the WebStorage key that stores a query target's metadata is:
// firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage*/
function ho(t, e) ***REMOVED***
  return "firestore_targets_" + t + "_" + e;
}
// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
// firestore_online_state_<persistence_prefix>
/**
* Holds the state of a mutation batch, including its user ID, batch ID and
* whether the batch is 'pending', 'acknowledged' or 'rejected'.
*/
// Visible for testing
/** A user with a null UID.*/
(uo.UNAUTHENTICATED = new uo(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
uo.GOOGLE_CREDENTIALS = new uo("google-credentials-uid"), uo.FIRST_PARTY = new uo("first-party-uid"));
var fo = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, r) ***REMOVED***
    (this.user = t, this.batchId = e, this.state = n, this.error = r);
  }
  return (t.Vs = function (e, n, r) ***REMOVED***
    var i, o = JSON.parse(r), s = "object" == typeof o && -1 !== ["pending", "acknowledged", "rejected"].indexOf(o.state) && (void 0 === o.error || "object" == typeof o.error);
    return (s && o.error && ((s = "string" == typeof o.error.message && "string" == typeof o.error.code) && (i = new T(o.error.code, o.error.message))), s ? new t(e, n, o.state, i) : (A("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null));
  }, t.prototype.Ss = function () ***REMOVED***
    var t = ***REMOVED***
      state: this.state,
      updateTimeMs: Date.now()
    ***REMOVED***
    return (this.error && (t.error = ***REMOVED***
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t));
  }, t);
})(), lo = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (this.targetId = t, this.state = e, this.error = n);
  }
  return (t.Vs = function (e, n) ***REMOVED***
    var r, i = JSON.parse(n), o = "object" == typeof i && -1 !== ["not-current", "current", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error);
    return (o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (r = new T(i.error.code, i.error.message))), o ? new t(e, i.state, r) : (A("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null));
  }, t.prototype.Ss = function () ***REMOVED***
    var t = ***REMOVED***
      state: this.state,
      updateTimeMs: Date.now()
    ***REMOVED***
    return (this.error && (t.error = ***REMOVED***
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t));
  }, t);
})(), po = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.clientId = t, this.activeTargetIds = e);
  }
  return (t.Vs = function (e, n) ***REMOVED***
    for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = rn(), s = 0; i && s < r.activeTargetIds.length; ++s) (i = ot(r.activeTargetIds[s]), o = o.add(r.activeTargetIds[s]));
    return i ? new t(e, o) : (A("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null);
  }, t);
})(), yo = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.clientId = t, this.onlineState = e);
  }
  return (t.Vs = function (e) ***REMOVED***
    var n = JSON.parse(e);
    return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (A("SharedClientState", "Failed to parse online state: " + e), null);
  }, t);
})(), vo = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    this.activeTargetIds = rn();
  }
  return (t.prototype.Ds = function (t) ***REMOVED***
    this.activeTargetIds = this.activeTargetIds.add(t);
  }, t.prototype.Cs = function (t) ***REMOVED***
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }, /**
  * Converts this entry into a JSON-encoded format we can use for WebStorage.
  * Does not encode `clientId` as it is part of the key in WebStorage.
  */
  t.prototype.Ss = function () ***REMOVED***
    var t = ***REMOVED***
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    ***REMOVED***
    return JSON.stringify(t);
  }, t);
})(), mo = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, r, i) ***REMOVED***
    (this.window = t, this.Se = e, this.persistenceKey = n, this.Ns = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.xs = this.Fs.bind(this), this.ks = new Ke(M), this.started = !1, /**
    * Captures WebStorage events that occur before `start()` is called. These
    * events are replayed once `WebStorageSharedClientState` is started.
    */
    this.Os = []);
    // Escape the special characters mentioned here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    var o = n.replace(/[.*+?^$***REMOVED***}()|[\]\\]/g, "\\$&");
    (this.storage = this.window.localStorage, this.currentUser = i, this.$s = ao(this.persistenceKey, this.Ns), this.Ms = /** Assembles the key for the current sequence number.*/
    (function (t) ***REMOVED***
      return "firestore_sequence_number_" + t;
    })(this.persistenceKey), this.ks = this.ks.insert(this.Ns, new vo()), this.Ls = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Bs = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.qs = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.Us = /** Assembles the key for the online state of the primary tab.*/
    (function (t) ***REMOVED***
      return "firestore_online_state_" + t;
    })(this.persistenceKey), this.Qs = (function (t) ***REMOVED***
      return "firestore_bundle_loaded_" + t;
    })(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
    // storage observer during initialization. This ensures that we collect
    // events before other components populate their initial state (during their
    // respective start() calls). Otherwise, we might for example miss a
    // mutation that is added after LocalStore's start() processed the existing
    // mutations but before we observe WebStorage events.
    this.window.addEventListener("storage", this.xs));
  }
  /** Returns 'true' if WebStorage is available in the current environment.*/
  return (t.yt = function (t) ***REMOVED***
    return !(!t || !t.localStorage);
  }, t.prototype.start = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t, e, n, r, i, o, s, u, a, c, h, f = this;
      return _tslib.__generator(this, function (l) ***REMOVED***
        switch (l.label) ***REMOVED***
          case 0:
            return [4, /*yield*/
            this.syncEngine.fn()];
          case 1:
            for ((t = l.sent(), e = 0, n = t); e < n.length; e++) (r = n[e]) !== this.Ns && (i = this.getItem(ao(this.persistenceKey, r))) && (o = po.Vs(r, i)) && (this.ks = this.ks.insert(o.clientId, o));
            for ((this.Ks(), (s = this.storage.getItem(this.Us)) && (u = this.js(s)) && this.Ws(u), a = 0, c = this.Os); a < c.length; a++) (h = c[a], this.Fs(h));
            return (this.Os = [], // Register a window unload hook to remove the client metadata entry from
            // WebStorage even if `shutdown()` was not called.
            this.window.addEventListener("unload", function () ***REMOVED***
              return f.shutdown();
            }), this.started = !0, [2]);
        }
      });
    });
  }, t.prototype.writeSequenceNumber = function (t) ***REMOVED***
    this.setItem(this.Ms, JSON.stringify(t));
  }, t.prototype.getAllActiveQueryTargets = function () ***REMOVED***
    return this.Gs(this.ks);
  }, t.prototype.isActiveQueryTarget = function (t) ***REMOVED***
    var e = !1;
    return (this.ks.forEach(function (n, r) ***REMOVED***
      r.activeTargetIds.has(t) && (e = !0);
    }), e);
  }, t.prototype.addPendingMutation = function (t) ***REMOVED***
    this.zs(t, "pending");
  }, t.prototype.updateMutationState = function (t, e, n) ***REMOVED***
    (this.zs(t, e, n), // Once a final mutation result is observed by other clients, they no longer
    // access the mutation's metadata entry. Since WebStorage replays events
    // in order, it is safe to delete the entry right after updating it.
    this.Hs(t));
  }, t.prototype.addLocalQueryTarget = function (t) ***REMOVED***
    var e = "not-current";
    // Lookup an existing query state if the target ID was already registered
    // by another tab
    if (this.isActiveQueryTarget(t)) ***REMOVED***
      var n = this.storage.getItem(ho(this.persistenceKey, t));
      if (n) ***REMOVED***
        var r = lo.Vs(t, n);
        r && (e = r.state);
      }
    }
    return (this.Js.Ds(t), this.Ks(), e);
  }, t.prototype.removeLocalQueryTarget = function (t) ***REMOVED***
    (this.Js.Cs(t), this.Ks());
  }, t.prototype.isLocalQueryTarget = function (t) ***REMOVED***
    return this.Js.activeTargetIds.has(t);
  }, t.prototype.clearQueryState = function (t) ***REMOVED***
    this.removeItem(ho(this.persistenceKey, t));
  }, t.prototype.updateQueryState = function (t, e, n) ***REMOVED***
    this.Ys(t, e, n);
  }, t.prototype.handleUserChange = function (t, e, n) ***REMOVED***
    var r = this;
    (e.forEach(function (t) ***REMOVED***
      r.Hs(t);
    }), this.currentUser = t, n.forEach(function (t) ***REMOVED***
      r.addPendingMutation(t);
    }));
  }, t.prototype.setOnlineState = function (t) ***REMOVED***
    this.Xs(t);
  }, t.prototype.notifyBundleLoaded = function () ***REMOVED***
    this.Zs();
  }, t.prototype.shutdown = function () ***REMOVED***
    this.started && (this.window.removeEventListener("storage", this.xs), this.removeItem(this.$s), this.started = !1);
  }, t.prototype.getItem = function (t) ***REMOVED***
    var e = this.storage.getItem(t);
    return (N("SharedClientState", "READ", t, e), e);
  }, t.prototype.setItem = function (t, e) ***REMOVED***
    (N("SharedClientState", "SET", t, e), this.storage.setItem(t, e));
  }, t.prototype.removeItem = function (t) ***REMOVED***
    (N("SharedClientState", "REMOVE", t), this.storage.removeItem(t));
  }, t.prototype.Fs = function (t) ***REMOVED***
    var e = this, n = t;
    // Note: The function is typed to take Event to be interface-compatible with
    // `Window.addEventListener`.
    if (n.storageArea === this.storage) ***REMOVED***
      if ((N("SharedClientState", "EVENT", n.key, n.newValue), n.key === this.$s)) return void A("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.Se.enqueueRetryable(function () ***REMOVED***
        return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
          var t, e, r, i, o, s;
          return _tslib.__generator(this, function (u) ***REMOVED***
            if (this.started) ***REMOVED***
              if (null !== n.key) if (this.Ls.test(n.key)) ***REMOVED***
                if (null == n.newValue) return (t = this.ti(n.key), [2, /*return*/
                this.ei(t, null)]);
                if (e = this.ni(n.key, n.newValue)) return [2, /*return*/
                this.ei(e.clientId, e)];
              } else if (this.Bs.test(n.key)) ***REMOVED***
                if (null !== n.newValue && (r = this.si(n.key, n.newValue))) return [2, /*return*/
                this.ii(r)];
              } else if (this.qs.test(n.key)) ***REMOVED***
                if (null !== n.newValue && (i = this.ri(n.key, n.newValue))) return [2, /*return*/
                this.oi(i)];
              } else if (n.key === this.Us) ***REMOVED***
                if (null !== n.newValue && (o = this.js(n.newValue))) return [2, /*return*/
                this.Ws(o)];
              } else if (n.key === this.Ms) (s = (function (t) ***REMOVED***
                var e = _.o;
                if (null != t) try ***REMOVED***
                  var n = JSON.parse(t);
                  (R("number" == typeof n), e = n);
                } catch (t) ***REMOVED***
                  A("SharedClientState", "Failed to read sequence number from WebStorage", t);
                }
                return e;
              })(n.newValue)) !== _.o && this.sequenceNumberHandler(s); else if (n.key === this.Qs) return [2, /*return*/
              this.syncEngine.ci()];
            } else this.Os.push(n);
            return [2];
          });
        });
      });
    }
  }, Object.defineProperty(t.prototype, "Js", ***REMOVED***
    get: function () ***REMOVED***
      return this.ks.get(this.Ns);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.Ks = function () ***REMOVED***
    this.setItem(this.$s, this.Js.Ss());
  }, t.prototype.zs = function (t, e, n) ***REMOVED***
    var r = new fo(this.currentUser, t, e, n), i = co(this.persistenceKey, this.currentUser, t);
    this.setItem(i, r.Ss());
  }, t.prototype.Hs = function (t) ***REMOVED***
    var e = co(this.persistenceKey, this.currentUser, t);
    this.removeItem(e);
  }, t.prototype.Xs = function (t) ***REMOVED***
    var e = ***REMOVED***
      clientId: this.Ns,
      onlineState: t
    ***REMOVED***
    this.storage.setItem(this.Us, JSON.stringify(e));
  }, t.prototype.Ys = function (t, e, n) ***REMOVED***
    var r = ho(this.persistenceKey, t), i = new lo(t, e, n);
    this.setItem(r, i.Ss());
  }, t.prototype.Zs = function () ***REMOVED***
    this.setItem(this.Qs, "value-not-used");
  }, /**
  * Parses a client state key in WebStorage. Returns null if the key does not
  * match the expected key format.
  */
  t.prototype.ti = function (t) ***REMOVED***
    var e = this.Ls.exec(t);
    return e ? e[1] : null;
  }, /**
  * Parses a client state in WebStorage. Returns 'null' if the value could not
  * be parsed.
  */
  t.prototype.ni = function (t, e) ***REMOVED***
    var n = this.ti(t);
    return po.Vs(n, e);
  }, /**
  * Parses a mutation batch state in WebStorage. Returns 'null' if the value
  * could not be parsed.
  */
  t.prototype.si = function (t, e) ***REMOVED***
    var n = this.Bs.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
    return fo.Vs(new uo(i), r, e);
  }, /**
  * Parses a query target state from WebStorage. Returns 'null' if the value
  * could not be parsed.
  */
  t.prototype.ri = function (t, e) ***REMOVED***
    var n = this.qs.exec(t), r = Number(n[1]);
    return lo.Vs(r, e);
  }, /**
  * Parses an online state from WebStorage. Returns 'null' if the value
  * could not be parsed.
  */
  t.prototype.js = function (t) ***REMOVED***
    return yo.Vs(t);
  }, t.prototype.ii = function (t) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (e) ***REMOVED***
        return t.user.uid === this.currentUser.uid ? [2, /*return*/
        this.syncEngine.ui(t.batchId, t.state, t.error)] : (N("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2]);
      });
    });
  }, t.prototype.oi = function (t) ***REMOVED***
    return this.syncEngine.ai(t.targetId, t.state, t.error);
  }, t.prototype.ei = function (t, e) ***REMOVED***
    var n = this, r = e ? this.ks.insert(t, e) : this.ks.remove(t), i = this.Gs(this.ks), o = this.Gs(r), s = [], u = [];
    return (o.forEach(function (t) ***REMOVED***
      i.has(t) || s.push(t);
    }), i.forEach(function (t) ***REMOVED***
      o.has(t) || u.push(t);
    }), this.syncEngine.hi(s, u).then(function () ***REMOVED***
      n.ks = r;
    }));
  }, t.prototype.Ws = function (t) ***REMOVED***
    // We check whether the client that wrote this online state is still active
    // by comparing its client ID to the list of clients kept active in
    // IndexedDb. If a client does not update their IndexedDb client state
    // within 5 seconds, it is considered inactive and we don't emit an online
    // state event.
    this.ks.get(t.clientId) && this.onlineStateHandler(t.onlineState);
  }, t.prototype.Gs = function (t) ***REMOVED***
    var e = rn();
    return (t.forEach(function (t, n) ***REMOVED***
      e = e.unionWith(n.activeTargetIds);
    }), e);
  }, t);
})(), go = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    (this.li = new vo(), this.fi = ***REMOVED***}, this.onlineStateHandler = null, this.sequenceNumberHandler = null);
  }
  return (t.prototype.addPendingMutation = function (t) ***REMOVED***}, t.prototype.updateMutationState = function (t, e, n) ***REMOVED***}, t.prototype.addLocalQueryTarget = function (t) ***REMOVED***
    return (this.li.Ds(t), this.fi[t] || "not-current");
  }, t.prototype.updateQueryState = function (t, e, n) ***REMOVED***
    this.fi[t] = e;
  }, t.prototype.removeLocalQueryTarget = function (t) ***REMOVED***
    this.li.Cs(t);
  }, t.prototype.isLocalQueryTarget = function (t) ***REMOVED***
    return this.li.activeTargetIds.has(t);
  }, t.prototype.clearQueryState = function (t) ***REMOVED***
    delete this.fi[t];
  }, t.prototype.getAllActiveQueryTargets = function () ***REMOVED***
    return this.li.activeTargetIds;
  }, t.prototype.isActiveQueryTarget = function (t) ***REMOVED***
    return this.li.activeTargetIds.has(t);
  }, t.prototype.start = function () ***REMOVED***
    return (this.li = new vo(), Promise.resolve());
  }, t.prototype.handleUserChange = function (t, e, n) ***REMOVED***}, t.prototype.setOnlineState = function (t) ***REMOVED***}, t.prototype.shutdown = function () ***REMOVED***}, t.prototype.writeSequenceNumber = function (t) ***REMOVED***}, t.prototype.notifyBundleLoaded = function () ***REMOVED***}, t);
})(), wo = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***}
  return (t.prototype.di = function (t) ***REMOVED***}, t.prototype.shutdown = function () ***REMOVED***}, t);
})(), bo = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    var t = this;
    (this.wi = function () ***REMOVED***
      return t._i();
    }, this.mi = function () ***REMOVED***
      return t.yi();
    }, this.gi = [], this.pi());
  }
  return (t.prototype.di = function (t) ***REMOVED***
    this.gi.push(t);
  }, t.prototype.shutdown = function () ***REMOVED***
    (window.removeEventListener("online", this.wi), window.removeEventListener("offline", this.mi));
  }, t.prototype.pi = function () ***REMOVED***
    (window.addEventListener("online", this.wi), window.addEventListener("offline", this.mi));
  }, t.prototype._i = function () ***REMOVED***
    N("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (var t = 0, e = this.gi; t < e.length; t++) ***REMOVED***
      (0, e[t])(0);
    }
  }, t.prototype.yi = function () ***REMOVED***
    N("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (var t = 0, e = this.gi; t < e.length; t++) ***REMOVED***
      (0, e[t])(1);
    }
  }, // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available.*/
  t.yt = function () ***REMOVED***
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }, t);
})(), Io = ***REMOVED***
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
}, _o = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.Ei = t.Ei, this.Ti = t.Ti);
  }
  return (t.prototype.Ii = function (t) ***REMOVED***
    this.Ai = t;
  }, t.prototype.Ri = function (t) ***REMOVED***
    this.bi = t;
  }, t.prototype.onMessage = function (t) ***REMOVED***
    this.vi = t;
  }, t.prototype.close = function () ***REMOVED***
    this.Ti();
  }, t.prototype.send = function (t) ***REMOVED***
    this.Ei(t);
  }, t.prototype.Pi = function () ***REMOVED***
    this.Ai();
  }, t.prototype.Vi = function (t) ***REMOVED***
    this.bi(t);
  }, t.prototype.Si = function (t) ***REMOVED***
    this.vi(t);
  }, t);
})(), Eo = /** @class*/
(function (t) ***REMOVED***
  function u(e) ***REMOVED***
    var n = this;
    return ((n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling, n.autoDetectLongPolling = e.autoDetectLongPolling, n);
  }
  /**
  * Base class for all Rest-based connections to the backend (WebChannel and
  * HTTP).
  */
  return (_tslib.__extends(u, t), u.prototype.ki = function (t, e, n, r) ***REMOVED***
    return new Promise(function (i, o) ***REMOVED***
      var s = new _firebaseWebchannelWrapper.XhrIo();
      s.listenOnce(_firebaseWebchannelWrapper.EventType.COMPLETE, function () ***REMOVED***
        try ***REMOVED***
          switch (s.getLastErrorCode()) ***REMOVED***
            case _firebaseWebchannelWrapper.ErrorCode.NO_ERROR:
              var e = s.getResponseJson();
              (N("Connection", "XHR received:", JSON.stringify(e)), i(e));
              break;
            case _firebaseWebchannelWrapper.ErrorCode.TIMEOUT:
              (N("Connection", 'RPC "' + t + '" timed out'), o(new T(E.DEADLINE_EXCEEDED, "Request time out")));
              break;
            case _firebaseWebchannelWrapper.ErrorCode.HTTP_ERROR:
              var n = s.getStatus();
              if ((N("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", s.getResponseText()), n > 0)) ***REMOVED***
                var r = s.getResponseJson().error;
                if (r && r.status && r.message) ***REMOVED***
                  var u = (function (t) ***REMOVED***
                    var e = t.toLowerCase().replace(/_/g, "-");
                    return Object.values(E).indexOf(e) >= 0 ? e : E.UNKNOWN;
                  })(r.status);
                  o(new T(u, r.message));
                } else o(new T(E.UNKNOWN, "Server responded with status " + s.getStatus()));
              } else // If we received an HTTP_ERROR but there's no status code,
              // it's most probably a connection issue
              o(new T(E.UNAVAILABLE, "Connection failed."));
              break;
            default:
              C();
          }
        } finally ***REMOVED***
          N("Connection", 'RPC "' + t + '" completed.');
        }
      });
      var u = JSON.stringify(r);
      s.send(e, "POST", u, n, 15);
    });
  }, u.prototype.$i = function (t, u) ***REMOVED***
    var a = [this.Di, "/", "google.firestore.v1.Firestore", "/", t, "/channel"], c = _firebaseWebchannelWrapper.createWebChannelTransport(), h = _firebaseWebchannelWrapper.getStatEventTarget(), f = ***REMOVED***
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: ***REMOVED***},
      messageUrlParams: ***REMOVED***
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
      },
      sendRawJson: !0,
      supportsCrossDomainXhr: !0,
      internalChannelParams: ***REMOVED***
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    ***REMOVED***
    (this.Fi(f.initMessageHeaders, u), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the httpHeadersOverwriteParam option to specify that
    // the headers should instead be encoded into a special "$httpHeaders" query
    // parameter, which is recognized by the webchannel backend. This is
    // formally defined here:
    // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
    // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
    // doesn't have an Origin header. So we have to exclude a few browser environments that are
    // known to (sometimes) not include an Origin. See
    // https://github.com/firebase/firebase-js-sdk/issues/1491.
    _firebaseUtil.isMobileCordova() || _firebaseUtil.isReactNative() || _firebaseUtil.isElectron() || _firebaseUtil.isIE() || _firebaseUtil.isUWP() || _firebaseUtil.isBrowserExtension() || (f.httpHeadersOverwriteParam = "$httpHeaders"));
    var l = a.join("");
    N("Connection", "Creating WebChannel: " + l, f);
    var g = c.createWebChannel(l, f), w = !1, b = !1, I = new _o(***REMOVED***
      Ei: function (t) ***REMOVED***
        b ? N("Connection", "Not sending because WebChannel is closed:", t) : (w || (N("Connection", "Opening WebChannel transport."), g.open(), w = !0), N("Connection", "WebChannel sending:", t), g.send(t));
      },
      Ti: function () ***REMOVED***
        return g.close();
      }
    }), _ = function (t, e, n) ***REMOVED***
      // TODO(dimond): closure typing seems broken because WebChannel does
      // not implement goog.events.Listenable
      t.listen(e, function (t) ***REMOVED***
        try ***REMOVED***
          n(t);
        } catch (t) ***REMOVED***
          setTimeout(function () ***REMOVED***
            throw t;
          }, 0);
        }
      });
    ***REMOVED***
    // WebChannel supports sending the first message with the handshake - saving
    // a network round trip. However, it will have to call send in the same
    // JS event loop as open. In order to enforce this, we delay actually
    // opening the WebChannel until send is called. Whether we have called
    // open is tracked with this variable.
    // Closure events are guarded and exceptions are swallowed, so catch any
    // exception and rethrow using a setTimeout so they become visible again.
    // Note that eventually this function could go away if we are confident
    // enough the code is exception free.
    return (_(g, _firebaseWebchannelWrapper.WebChannel.EventType.OPEN, function () ***REMOVED***
      b || N("Connection", "WebChannel transport opened.");
    }), _(g, _firebaseWebchannelWrapper.WebChannel.EventType.CLOSE, function () ***REMOVED***
      b || (b = !0, N("Connection", "WebChannel transport closed"), I.Vi());
    }), _(g, _firebaseWebchannelWrapper.WebChannel.EventType.ERROR, function (t) ***REMOVED***
      b || (b = !0, k("Connection", "WebChannel transport errored:", t), I.Vi(new T(E.UNAVAILABLE, "The operation could not be completed")));
    }), _(g, _firebaseWebchannelWrapper.WebChannel.EventType.MESSAGE, function (t) ***REMOVED***
      var e;
      if (!b) ***REMOVED***
        var n = t.data[0];
        R(!!n);
        // TODO(b/35143891): There is a bug in One Platform that caused errors
        // (and only errors) to be wrapped in an extra array. To be forward
        // compatible with the bug we need to check either condition. The latter
        // can be removed once the fix has been rolled out.
        // Use any because msgData.error is not typed.
        var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
        if (i) ***REMOVED***
          N("Connection", "WebChannel received error:", i);
          // error.status will be a string like 'OK' or 'NOT_FOUND'.
          var o = i.status, s = /**
          * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
          *
          * @returns The Code equivalent to the given status string or undefined if
          *     there is no match.
          */
          (function (t) ***REMOVED***
            // lookup by string
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var e = Me[t];
            if (void 0 !== e) return je(e);
          })(o), u = i.message;
          (void 0 === s && (s = E.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), // Mark closed so no further events are propagated
          b = !0, I.Vi(new T(s, u)), g.close());
        } else (N("Connection", "WebChannel received:", n), I.Si(n));
      }
    }), _(h, _firebaseWebchannelWrapper.Event.STAT_EVENT, function (t) ***REMOVED***
      t.stat === _firebaseWebchannelWrapper.Stat.PROXY ? N("Connection", "Detected buffering proxy") : t.stat === _firebaseWebchannelWrapper.Stat.NOPROXY && N("Connection", "Detected no buffering proxy");
    }), setTimeout(function () ***REMOVED***
      // Technically we could/should wait for the WebChannel opened event,
      // but because we want to send the first message with the WebChannel
      // handshake we pretend the channel opened here (asynchronously), and
      // then delay the actual open until the first message is sent.
      I.Pi();
    }, 0), I);
  }, u);
})(/** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.databaseInfo = t, this.databaseId = t.databaseId);
    var e = t.ssl ? "https" : "http";
    (this.Di = e + "://" + t.host, this.Ci = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents");
  }
  return (t.prototype.Ni = function (t, e, n, r) ***REMOVED***
    var i = this.xi(t, e);
    N("RestConnection", "Sending: ", i, n);
    var o = ***REMOVED******REMOVED***
    return (this.Fi(o, r), this.ki(t, i, o, n).then(function (t) ***REMOVED***
      return (N("RestConnection", "Received: ", t), t);
    }, function (e) ***REMOVED***
      throw (k("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), e);
    }));
  }, t.prototype.Oi = function (t, e, n, r) ***REMOVED***
    // The REST API automatically aggregates all of the streamed results, so we
    // can just use the normal invoke() method.
    return this.Ni(t, e, n, r);
  }, /**
  * Modifies the headers for a request, adding any authorization token if
  * present and any additional headers for the request.
  */
  t.prototype.Fi = function (t, e) ***REMOVED***
    if ((t["X-Goog-Api-Client"] = "gl-js/ fire/8.4.0", t["X-Firebase-GMPID"] = this.databaseInfo.appId, // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    t["Content-Type"] = "text/plain", e)) for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
  }, t.prototype.xi = function (t, e) ***REMOVED***
    var n = Io[t];
    return this.Di + "/v1/" + e + ":" + n;
  }, t);
})());
/**
* Holds the state of a query target, including its target ID and whether the
* target is 'not-current', 'current' or 'rejected'.
*/
// Visible for testing
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Initializes the WebChannelConnection for the browser.*/
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** The Platform's 'window' implementation or null if not available.*/
function To() ***REMOVED***
  // `window` is not always available, e.g. in ReactNative and WebWorkers.
  // eslint-disable-next-line no-restricted-globals
  return "undefined" != typeof window ? window : null;
}
/** The Platform's 'document' implementation or null if not available.*/
function So() ***REMOVED***
  // `document` is not always available, e.g. in ReactNative and WebWorkers.
  // eslint-disable-next-line no-restricted-globals
  return "undefined" != typeof document ? document : null;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Do(t) ***REMOVED***
  return new vn(t, /*useProto3Json=*/
  !0);
}
/**
* An instance of the Platform's 'TextEncoder' implementation.
*/
/**
* A helper for running delayed tasks following an exponential backoff curve
* between attempts.
*
* Each delay is made up of a "base" delay which follows the exponential
* backoff curve, and a +/- 50% "jitter" that is calculated and added to the
* base delay. This prevents clients from accidentally synchronizing their
* delays causing spikes of load to the backend.
*/
var No = /** @class*/
(function () ***REMOVED***
  function t(/**
  * The AsyncQueue to run backoff operations on.
  */
  t, /**
  * The ID to use when scheduling backoff operations on the AsyncQueue.
  */
  e, /**
  * The initial delay (used as the base delay on the first retry attempt).
  * Note that jitter will still be applied, so the actual delay could be as
  * little as 0.5*initialDelayMs.
  */
  n, /**
  * The initial delay (used as the base delay on the first retry attempt).
  * Note that jitter will still be applied, so the actual delay could be as
  * little as 0.5*initialDelayMs.
  */
  /**
  * The multiplier to use to determine the extended base delay after each
  * attempt.
  */
  r, /**
  * The maximum base delay after which no further backoff is performed.
  * Note that jitter will still be applied, so the actual delay could be as
  * much as 1.5*maxDelayMs.
  */
  i) ***REMOVED***
    (void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.Se = t, this.timerId = e, this.Mi = n, this.Li = r, this.Bi = i, this.qi = 0, this.Ui = null, /** The last backoff attempt, as epoch milliseconds.*/
    this.Qi = Date.now(), this.reset());
  }
  /**
  * Resets the backoff delay.
  *
  * The very next backoffAndWait() will have no delay. If it is called again
  * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
  * subsequent ones will increase according to the backoffFactor.
  */
  return (t.prototype.reset = function () ***REMOVED***
    this.qi = 0;
  }, /**
  * Resets the backoff delay to the maximum delay (e.g. for use after a
  * RESOURCE_EXHAUSTED error).
  */
  t.prototype.Ki = function () ***REMOVED***
    this.qi = this.Bi;
  }, /**
  * Returns a promise that resolves after currentDelayMs, and increases the
  * delay for any subsequent attempts. If there was a pending backoff operation
  * already, it will be canceled.
  */
  t.prototype.ji = function (t) ***REMOVED***
    var e = this;
    // Cancel any pending backoff operation.
    this.cancel();
    // First schedule using the current base (which may be 0 and should be
    // honored as such).
    var n = Math.floor(this.qi + this.Wi()), r = Math.max(0, Date.now() - this.Qi), i = Math.max(0, n - r);
    // Guard against lastAttemptTime being in the future due to a clock change.
    (i > 0 && N("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.qi + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.Ui = this.Se.enqueueAfterDelay(this.timerId, i, function () ***REMOVED***
      return (e.Qi = Date.now(), t());
    }), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.qi *= this.Li, this.qi < this.Mi && (this.qi = this.Mi), this.qi > this.Bi && (this.qi = this.Bi));
  }, t.prototype.Gi = function () ***REMOVED***
    null !== this.Ui && (this.Ui.skipDelay(), this.Ui = null);
  }, t.prototype.cancel = function () ***REMOVED***
    null !== this.Ui && (this.Ui.cancel(), this.Ui = null);
  }, /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2]*/
  t.prototype.Wi = function () ***REMOVED***
    return (Math.random() - .5) * this.qi;
  }, t);
})(), Ao = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, r, i, o) ***REMOVED***
    (this.Se = t, this.zi = n, this.Hi = r, this.Ji = i, this.listener = o, this.state = 0, /*Initial*/
    /**
    * A close count that's incremented every time the stream is closed; used by
    * getCloseGuardedDispatcher() to invalidate callbacks that happen after
    * close.
    */
    this.Yi = 0, this.Xi = null, this.stream = null, this.Zi = new No(t, e));
  }
  return (t.prototype.tr = function () ***REMOVED***
    return 1 === /*Starting*/
    this.state || 2 === /*Open*/
    this.state || 4 === /*Backoff*/
    this.state;
  }, /**
  * Returns true if the underlying RPC is open (the onOpen() listener has been
  * called) and the stream is ready for outbound requests.
  */
  t.prototype.er = function () ***REMOVED***
    return 2 === /*Open*/
    this.state;
  }, /**
  * Starts the RPC. Only allowed if isStarted() returns false. The stream is
  * not immediately ready for use: onOpen() will be invoked when the RPC is
  * ready for outbound requests, at which point isOpen() will return true.
  *
  * When start returns, isStarted() will return true.
  */
  t.prototype.start = function () ***REMOVED***
    3 !== /*Error*/
    this.state ? this.auth() : this.nr();
  }, /**
  * Stops the RPC. This call is idempotent and allowed regardless of the
  * current isStarted() state.
  *
  * When stop returns, isStarted() and isOpen() will both return false.
  */
  t.prototype.stop = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (t) ***REMOVED***
        switch (t.label) ***REMOVED***
          case 0:
            return this.tr() ? [4, /*yield*/
            this.close(0)] : [3, /*break*/
            2];
          case 1:
            (t.sent(), t.label = 2);
          case 2:
            return [2];
        }
      });
    });
  }, /**
  * After an error the stream will usually back off on the next attempt to
  * start it. If the error warrants an immediate restart of the stream, the
  * sender can use this to indicate that the receiver should not back off.
  *
  * Each error will call the onClose() listener. That function can decide to
  * inhibit backoff if required.
  */
  t.prototype.sr = function () ***REMOVED***
    (this.state = 0, /*Initial*/
    this.Zi.reset());
  }, /**
  * Marks this stream as idle. If no further actions are performed on the
  * stream for one minute, the stream will automatically close itself and
  * notify the stream's onClose() handler with Status.OK. The stream will then
  * be in a !isStarted() state, requiring the caller to start the stream again
  * before further use.
  *
  * Only streams that are in state 'Open' can be marked idle, as all other
  * states imply pending network operations.
  */
  t.prototype.ir = function () ***REMOVED***
    var t = this;
    // Starts the idle time if we are in state 'Open' and are not yet already
    // running a timer (in which case the previous idle timeout still applies).
    this.er() && null === this.Xi && (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, function () ***REMOVED***
      return t.rr();
    }));
  }, /** Sends a message to the underlying stream.*/
  t.prototype.cr = function (t) ***REMOVED***
    (this.ur(), this.stream.send(t));
  }, /** Called by the idle timer when the stream should close due to inactivity.*/
  t.prototype.rr = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (t) ***REMOVED***
        return this.er() ? [2, /*return*/
        this.close(0)] : [2];
      });
    });
  }, /** Marks the stream as active again.*/
  t.prototype.ur = function () ***REMOVED***
    this.Xi && (this.Xi.cancel(), this.Xi = null);
  }, /**
  * Closes the stream and cleans up as necessary:
  *
  * * closes the underlying GRPC stream;
  * * calls the onClose handler with the given 'error';
  * * sets internal stream state to 'finalState';
  * * adjusts the backoff timer based on the error
  *
  * A new stream can be opened by calling start().
  *
  * @param finalState - the intended state of the stream after closing.
  * @param error - the error the connection was closed with.
  */
  t.prototype.close = function (t, e) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (n) ***REMOVED***
        switch (n.label) ***REMOVED***
          case 0:
            // Notify the listener that the stream closed.
            // Cancel any outstanding timers (they're guaranteed not to execute).
            return (this.ur(), this.Zi.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
            // underlying stream), guaranteeing they won't execute.
            this.Yi++, 3 !== /*Error*/
            t ? // If this is an intentional close ensure we don't delay our next connection attempt.
            this.Zi.reset() : e && e.code === E.RESOURCE_EXHAUSTED ? // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
            (A(e.toString()), A("Using maximum backoff delay to prevent overloading the backend."), this.Zi.Ki()) : e && e.code === E.UNAUTHENTICATED && // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
            // just expired.
            this.Ji.invalidateToken(), // Clean up the underlying stream because we are no longer interested in events.
            null !== this.stream && (this.ar(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
            // inhibit backoff or otherwise manipulate the state in its non-started state.
            this.state = t, [4, /*yield*/
            this.listener.Ri(e)]);
          case 1:
            // Cancel any outstanding timers (they're guaranteed not to execute).
            // Notify the listener that the stream closed.
            return (n.sent(), [2]);
        }
      });
    });
  }, /**
  * Can be overridden to perform additional cleanup before the stream is closed.
  * Calling super.tearDown() is not required.
  */
  t.prototype.ar = function () ***REMOVED***}, t.prototype.auth = function () ***REMOVED***
    var t = this;
    this.state = 1;
    var e = this.hr(this.Yi), n = this.Yi;
    // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
    this.Ji.getToken().then(function (e) ***REMOVED***
      // Stream can be stopped while waiting for authentication.
      // TODO(mikelehen): We really should just use dispatchIfNotClosed
      // and let this dispatch onto the queue, but that opened a spec test can
      // of worms that I don't want to deal with in this PR.
      t.Yi === n && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      t.lr(e);
    }, function (n) ***REMOVED***
      e(function () ***REMOVED***
        var e = new T(E.UNKNOWN, "Fetching auth token failed: " + n.message);
        return t.dr(e);
      });
    });
  }, t.prototype.lr = function (t) ***REMOVED***
    var e = this, n = this.hr(this.Yi);
    (this.stream = this.wr(t), this.stream.Ii(function () ***REMOVED***
      n(function () ***REMOVED***
        return (e.state = 2, /*Open*/
        e.listener.Ii());
      });
    }), this.stream.Ri(function (t) ***REMOVED***
      n(function () ***REMOVED***
        return e.dr(t);
      });
    }), this.stream.onMessage(function (t) ***REMOVED***
      n(function () ***REMOVED***
        return e.onMessage(t);
      });
    }));
  }, t.prototype.nr = function () ***REMOVED***
    var t = this;
    (this.state = 4, /*Backoff*/
    this.Zi.ji(function () ***REMOVED***
      return _tslib.__awaiter(t, void 0, void 0, function () ***REMOVED***
        return _tslib.__generator(this, function (t) ***REMOVED***
          return (this.state = 0, /*Initial*/
          this.start(), [2]);
        });
      });
    }));
  }, // Visible for tests
  t.prototype.dr = function (t) ***REMOVED***
    // In theory the stream could close cleanly, however, in our current model
    // we never expect this to happen because if we stop a stream ourselves,
    // this callback will never be called. To prevent cases where we retry
    // without a backoff accidentally, we set the stream to error in all cases.
    return (N("PersistentStream", "close with error: " + t), this.stream = null, this.close(3, /*Error*/
    t));
  }, /**
  * Returns a "dispatcher" function that dispatches operations onto the
  * AsyncQueue but only runs them if closeCount remains unchanged. This allows
  * us to turn auth / stream callbacks into no-ops if the stream is closed /
  * re-opened, etc.
  */
  t.prototype.hr = function (t) ***REMOVED***
    var e = this;
    return function (n) ***REMOVED***
      e.Se.enqueueAndForget(function () ***REMOVED***
        return e.Yi === t ? n() : (N("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
      });
    ***REMOVED***
  }, t);
})(), ko = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r, i, o) ***REMOVED***
    var s = this;
    return ((s = t.call(this, e, "listen_stream_connection_backoff", /*ListenStreamConnectionBackoff*/
    "listen_stream_idle", /*ListenStreamIdle*/
    n, r, o) || this).R = i, s);
  }
  return (_tslib.__extends(e, t), e.prototype.wr = function (t) ***REMOVED***
    return this.Hi.$i("Listen", t);
  }, e.prototype.onMessage = function (t) ***REMOVED***
    // A successful response means the stream is healthy
    this.Zi.reset();
    var e = (function (t, e) ***REMOVED***
      var n;
      if (("targetChange" in e)) ***REMOVED***
        e.targetChange;
        // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
        // if unset
        var r = (function (t) ***REMOVED***
          return "NO_CHANGE" === t ? 0 : /*NoChange*/
          "ADD" === t ? 1 : /*Added*/
          "REMOVE" === t ? 2 : /*Removed*/
          "CURRENT" === t ? 3 : /*Current*/
          "RESET" === t ? 4 : /*Reset*/
          C();
        })(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = (function (t, e) ***REMOVED***
          return t.I ? (R(void 0 === e || "string" == typeof e), Y.fromBase64String(e || "")) : (R(void 0 === e || e instanceof Uint8Array), Y.fromUint8Array(e || new Uint8Array()));
        })(t, e.targetChange.resumeToken), s = (u = e.targetChange.cause) && (function (t) ***REMOVED***
          var e = void 0 === t.code ? E.UNKNOWN : je(t.code);
          return new T(e, t.message || "");
        })(u);
        n = new cn(r, i, o, s || null);
      } else if (("documentChange" in e)) ***REMOVED***
        (e.documentChange, (r = e.documentChange).document, r.document.name, r.document.updateTime, i = Tn(t, r.document.name), o = bn(r.document.updateTime));
        var u = new bt(***REMOVED***
          mapValue: ***REMOVED***
            fields: r.document.fields
          }
        }), a = (s = _t.newFoundDocument(i, o, u), r.targetIds || []), c = r.removedTargetIds || [];
        n = new un(a, c, s.key, s);
      } else if (("documentDelete" in e)) (e.documentDelete, (r = e.documentDelete).document, i = Tn(t, r.document), o = r.readTime ? bn(r.readTime) : U.min(), u = _t.newNoDocument(i, o), s = r.removedTargetIds || [], n = new un([], s, u.key, u)); else if (("documentRemove" in e)) (e.documentRemove, (r = e.documentRemove).document, i = Tn(t, r.document), o = r.removedTargetIds || [], n = new un([], o, i, null)); else ***REMOVED***
        if (!(("filter" in e))) return C();
        e.filter;
        var h = e.filter;
        (h.targetId, r = h.count || 0, i = new Ue(r), o = h.targetId, n = new an(o, i));
      }
      return n;
    })(this.R, t), n = (function (t) ***REMOVED***
      // We have only reached a consistent snapshot for the entire stream if there
      // is a read_time set and it applies to all targets (i.e. the list of
      // targets is empty). The backend is guaranteed to send such responses.
      if (!(("targetChange" in t))) return U.min();
      var e = t.targetChange;
      return e.targetIds && e.targetIds.length ? U.min() : e.readTime ? bn(e.readTime) : U.min();
    })(t);
    return this.listener._r(e, n);
  }, /**
  * Registers interest in the results of the given target. If the target
  * includes a resumeToken it will be included in the request. Results that
  * affect the target will be streamed back as WatchChange messages that
  * reference the targetId.
  */
  e.prototype.mr = function (t) ***REMOVED***
    var e = ***REMOVED******REMOVED***
    (e.database = Nn(this.R), e.addTarget = (function (t, e) ***REMOVED***
      var n, r = e.target;
      return ((n = Nt(r) ? ***REMOVED***
        documents: On(t, r)
      } : ***REMOVED***
        query: Ln(t, r)
      }).targetId = e.targetId, e.resumeToken.approximateByteSize() > 0 ? n.resumeToken = gn(t, e.resumeToken) : e.snapshotVersion.compareTo(U.min()) > 0 && (// TODO(wuandy): Consider removing above check because it is most likely true.
      // Right now, many tests depend on this behaviour though (leaving min() out
      // of serialization).
      n.readTime = mn(t, e.snapshotVersion.toTimestamp())), n);
    })(this.R, t));
    var n = (function (t, e) ***REMOVED***
      var n = (function (t, e) ***REMOVED***
        switch (e) ***REMOVED***
          case 0:
            /*Listen*/
            return null;
          case 1:
            /*ExistenceFilterMismatch*/
            return "existence-filter-mismatch";
          case 2:
            /*LimboResolution*/
            return "limbo-document";
          default:
            return C();
        }
      })(0, e.purpose);
      return null == n ? null : ***REMOVED***
        "goog-listen-tags": n
      ***REMOVED***
    })(this.R, t);
    (n && (e.labels = n), this.cr(e));
  }, /**
  * Unregisters interest in the results of the target associated with the
  * given targetId.
  */
  e.prototype.yr = function (t) ***REMOVED***
    var e = ***REMOVED******REMOVED***
    (e.database = Nn(this.R), e.removeTarget = t, this.cr(e));
  }, e);
})(Ao), xo = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r, i, o) ***REMOVED***
    var s = this;
    return ((s = t.call(this, e, "write_stream_connection_backoff", /*WriteStreamConnectionBackoff*/
    "write_stream_idle", /*WriteStreamIdle*/
    n, r, o) || this).R = i, s.gr = !1, s);
  }
  return (_tslib.__extends(e, t), Object.defineProperty(e.prototype, "pr", ***REMOVED***
    /**
    * Tracks whether or not a handshake has been successfully exchanged and
    * the stream is ready to accept mutations.
    */
    get: function () ***REMOVED***
      return this.gr;
    },
    enumerable: !1,
    configurable: !0
  }), // Override of PersistentStream.start
  e.prototype.start = function () ***REMOVED***
    (this.gr = !1, this.lastStreamToken = void 0, t.prototype.start.call(this));
  }, e.prototype.ar = function () ***REMOVED***
    this.gr && this.Er([]);
  }, e.prototype.wr = function (t) ***REMOVED***
    return this.Hi.$i("Write", t);
  }, e.prototype.onMessage = function (t) ***REMOVED***
    if (// Always capture the last stream token.
    (R(!!t.streamToken), this.lastStreamToken = t.streamToken, this.gr)) ***REMOVED***
      // A successful first write response means the stream is healthy,
      // Note, that we could consider a successful handshake healthy, however,
      // the write itself might be causing an error we want to back off from.
      this.Zi.reset();
      var e = (function (t, e) ***REMOVED***
        return t && t.length > 0 ? (R(void 0 !== e), t.map(function (t) ***REMOVED***
          return (function (t, e) ***REMOVED***
            // NOTE: Deletes don't have an updateTime.
            var n = t.updateTime ? bn(t.updateTime) : bn(e);
            return (n.isEqual(U.min()) && (// The Firestore Emulator currently returns an update time of 0 for
            // deletes of non-existing documents (rather than null). This breaks the
            // test "get deleted doc while offline with source=cache" as NoDocuments
            // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
            // TODO(#2149): Remove this when Emulator is fixed
            n = bn(e)), new _e(n, t.transformResults || []));
          })(t, e);
        })) : [];
      })(t.writeResults, t.commitTime), n = bn(t.commitTime);
      return this.listener.Tr(n, e);
    }
    // The first response is always the handshake response
    return (R(!t.writeResults || 0 === t.writeResults.length), this.gr = !0, this.listener.Ir());
  }, /**
  * Sends an initial streamToken to the server, performing the handshake
  * required to make the StreamingWrite RPC work. Subsequent
  * calls should wait until onHandshakeComplete was called.
  */
  e.prototype.Ar = function () ***REMOVED***
    // TODO(dimond): Support stream resumption. We intentionally do not set the
    // stream token on the handshake, ignoring any stream token we might have.
    var t = ***REMOVED******REMOVED***
    (t.database = Nn(this.R), this.cr(t));
  }, /** Sends a group of mutations to the Firestore backend to apply.*/
  e.prototype.Er = function (t) ***REMOVED***
    var e = this, n = ***REMOVED***
      streamToken: this.lastStreamToken,
      writes: t.map(function (t) ***REMOVED***
        return Cn(e.R, t);
      })
    ***REMOVED***
    this.cr(n);
  }, e);
})(Ao), Co = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r) ***REMOVED***
    var i = this;
    return ((i = t.call(this) || this).credentials = e, i.Hi = n, i.R = r, i.Rr = !1, i);
  }
  return (_tslib.__extends(e, t), e.prototype.br = function () ***REMOVED***
    if (this.Rr) throw new T(E.FAILED_PRECONDITION, "The client has already been terminated.");
  }, /** Gets an auth token and invokes the provided RPC.*/
  e.prototype.Ni = function (t, e, n) ***REMOVED***
    var r = this;
    return (this.br(), this.credentials.getToken().then(function (i) ***REMOVED***
      return r.Hi.Ni(t, e, n, i);
    }).catch(function (t) ***REMOVED***
      throw (t.code === E.UNAUTHENTICATED && r.credentials.invalidateToken(), t);
    }));
  }, /** Gets an auth token and invokes the provided RPC with streamed results.*/
  e.prototype.Oi = function (t, e, n) ***REMOVED***
    var r = this;
    return (this.br(), this.credentials.getToken().then(function (i) ***REMOVED***
      return r.Hi.Oi(t, e, n, i);
    }).catch(function (t) ***REMOVED***
      throw (t.code === E.UNAUTHENTICATED && r.credentials.invalidateToken(), t);
    }));
  }, e.prototype.terminate = function () ***REMOVED***
    this.Rr = !1;
  }, e);
})(function () ***REMOVED***}), Ro = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.asyncQueue = t, this.onlineStateHandler = e, /** The current OnlineState.*/
    this.state = "Unknown", /*Unknown*/
    /**
    * A count of consecutive failures to open the stream. If it reaches the
    * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
    * Offline.
    */
    this.vr = 0, /**
    * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
    * transition from OnlineState.Unknown to OnlineState.Offline without waiting
    * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
    */
    this.Pr = null, /**
    * Whether the client should log a warning message if it fails to connect to
    * the backend (initially true, cleared after a successful stream, or if we've
    * logged the message already).
    */
    this.Vr = !0);
  }
  return (t.prototype.Sr = function () ***REMOVED***
    var t = this;
    0 === this.vr && (this.Dr("Unknown"), this.Pr = this.asyncQueue.enqueueAfterDelay("online_state_timeout", /*OnlineStateTimeout*/
    1e4, function () ***REMOVED***
      return (t.Pr = null, t.Cr("Backend didn't respond within 10 seconds."), t.Dr("Offline"), Promise.resolve());
    }));
  }, /**
  * Updates our OnlineState as appropriate after the watch stream reports a
  * failure. The first failure moves us to the 'Unknown' state. We then may
  * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
  * actually transition to the 'Offline' state.
  */
  t.prototype.Nr = function (t) ***REMOVED***
    "Online" === /*Online*/
    this.state ? this.Dr("Unknown") : (this.vr++, this.vr >= 1 && (this.Fr(), this.Cr("Connection failed 1 times. Most recent error: " + t.toString()), this.Dr("Offline")));
  }, /**
  * Explicitly sets the OnlineState to the specified state.
  *
  * Note that this resets our timers / failure counters, etc. used by our
  * Offline heuristics, so must not be used in place of
  * handleWatchStreamStart() and handleWatchStreamFailure().
  */
  t.prototype.set = function (t) ***REMOVED***
    (this.Fr(), this.vr = 0, "Online" === /*Online*/
    t && (// We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    this.Vr = !1), this.Dr(t));
  }, t.prototype.Dr = function (t) ***REMOVED***
    t !== this.state && (this.state = t, this.onlineStateHandler(t));
  }, t.prototype.Cr = function (t) ***REMOVED***
    var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
    this.Vr ? (A(e), this.Vr = !1) : N("OnlineStateTracker", e);
  }, t.prototype.Fr = function () ***REMOVED***
    null !== this.Pr && (this.Pr.cancel(), this.Pr = null);
  }, t);
})(), Oo = function (/**
* The local store, used to fill the write pipeline with outbound mutations.
*/
t, /** The client-side proxy for interacting with the backend.*/
e, n, r, i) ***REMOVED***
  var o = this;
  (this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = ***REMOVED***}, /**
  * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
  * LocalStore via fillWritePipeline() and have or will send to the write
  * stream.
  *
  * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
  * restart the write stream. When the stream is established the writes in the
  * pipeline will be sent in order.
  *
  * Writes remain in writePipeline until they are acknowledged by the backend
  * and thus will automatically be re-sent if the stream is interrupted /
  * restarted before they're acknowledged.
  *
  * Write responses from the backend are linked to their originating request
  * purely based on order, and so we can just shift() writes from the front of
  * the writePipeline as we receive responses.
  */
  this.kr = [], /**
  * A mapping of watched targets that the client cares about tracking and the
  * user has explicitly called a 'listen' for this target.
  *
  * These targets may or may not have been sent to or acknowledged by the
  * server. On re-establishing the listen stream, these targets should be sent
  * to the server. The targets removed with unlistens are removed eagerly
  * without waiting for confirmation from the listen stream.
  */
  this.Or = new Map(), /**
  * A set of reasons for why the RemoteStore may be offline. If empty, the
  * RemoteStore may start its network connections.
  */
  this.$r = new Set(), /**
  * Event handlers that get called when the network is disabled or enabled.
  *
  * PORTING NOTE: These functions are used on the Web client to create the
  * underlying streams (to support tree-shakeable streams). On Android and iOS,
  * the streams are created during construction of RemoteStore.
  */
  this.Mr = [], this.Lr = i, this.Lr.di(function (t) ***REMOVED***
    n.enqueueAndForget(function () ***REMOVED***
      return _tslib.__awaiter(o, void 0, void 0, function () ***REMOVED***
        return _tslib.__generator(this, function (t) ***REMOVED***
          switch (t.label) ***REMOVED***
            case 0:
              return jo(this) ? (N("RemoteStore", "Restarting streams for network reachability change."), [4, /*yield*/
              (function (t) ***REMOVED***
                return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
                  var e;
                  return _tslib.__generator(this, function (n) ***REMOVED***
                    switch (n.label) ***REMOVED***
                      case 0:
                        return ((e = O(t)).$r.add(4), [4, /*yield*/
                        Po(e)]);
                      case 1:
                        return (n.sent(), e.Br.set("Unknown"), e.$r.delete(4), [4, /*yield*/
                        Lo(e)]);
                      case 2:
                        return (n.sent(), [2]);
                    }
                  });
                });
              })(this)]) : [3, /*break*/
              2];
            case 1:
              (t.sent(), t.label = 2);
            case 2:
              return [2];
          }
        });
      });
    });
  }), this.Br = new Ro(n, r));
***REMOVED***
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A PersistentStream is an abstract base class that represents a streaming RPC
* to the Firestore backend. It's built on top of the connections own support
* for streaming RPCs, and adds several critical features for our clients:
*
*   - Exponential backoff on failure
*   - Authentication via CredentialsProvider
*   - Dispatching all callbacks into the shared worker queue
*   - Closing idle streams after 60 seconds of inactivity
*
* Subclasses of PersistentStream implement serialization of models to and
* from the JSON representation of the protocol buffers for a specific
* streaming RPC.
*
* ## Starting and Stopping
*
* Streaming RPCs are stateful and need to be start()ed before messages can
* be sent and received. The PersistentStream will call the onOpen() function
* of the listener once the stream is ready to accept requests.
*
* Should a start() fail, PersistentStream will call the registered onClose()
* listener with a FirestoreError indicating what went wrong.
*
* A PersistentStream can be started and stopped repeatedly.
*
* Generic types:
*  SendType: The type of the outgoing message of the underlying
*    connection stream
*  ReceiveType: The type of the incoming message of the underlying
*    connection stream
*  ListenerType: The type of the listener that will be used for callbacks
*/
function Lo(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var e, n;
    return _tslib.__generator(this, function (r) ***REMOVED***
      switch (r.label) ***REMOVED***
        case 0:
          if (!jo(t)) return [3, /*break*/
          4];
          (e = 0, n = t.Mr, r.label = 1);
        case 1:
          return e < n.length ? [4, /*yield*/
          (0, n[e])(/*enabled=*/
          !0)] : [3, /*break*/
          4];
        case 2:
          (r.sent(), r.label = 3);
        case 3:
          return (e++, [3, /*break*/
          1]);
        case 4:
          return [2];
      }
    });
  });
}
/**
* Temporarily disables the network. The network can be re-enabled using
* enableNetwork().
*/
function Po(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var e, n;
    return _tslib.__generator(this, function (r) ***REMOVED***
      switch (r.label) ***REMOVED***
        case 0:
          (e = 0, n = t.Mr, r.label = 1);
        case 1:
          return e < n.length ? [4, /*yield*/
          (0, n[e])(/*enabled=*/
          !1)] : [3, /*break*/
          4];
        case 2:
          (r.sent(), r.label = 3);
        case 3:
          return (e++, [3, /*break*/
          1]);
        case 4:
          return [2];
      }
    });
  });
}
/**
* Starts new listen for the given target. Uses resume token if provided. It
* is a no-op if the target of given `TargetData` is already being listened to.
*/
function Mo(t, e) ***REMOVED***
  var n = O(t);
  n.Or.has(e.targetId) || // Mark this as something the client is currently listening for.
  (n.Or.set(e.targetId, e), Bo(n) ? // The listen will be sent in onWatchStreamOpen
  Uo(n) : rs(n).er() && Vo(n, e));
}
/**
* Removes the listen from server. It is a no-op if the given target id is
* not being listened to.
*/
function Fo(t, e) ***REMOVED***
  var n = O(t), r = rs(n);
  (n.Or.delete(e), r.er() && qo(n, e), 0 === n.Or.size && (r.er() ? r.ir() : jo(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  n.Br.set("Unknown")));
}
/**
* We need to increment the the expected number of pending responses we're due
* from watch so we wait for the ack to process any messages from this target.
*/
function Vo(t, e) ***REMOVED***
  (t.qr.U(e.targetId), rs(t).mr(e));
}
function qo(t, e) ***REMOVED***
  (t.qr.U(e), rs(t).yr(e));
}
function Uo(t) ***REMOVED***
  (t.qr = new fn(***REMOVED***
    getRemoteKeysForTarget: function (e) ***REMOVED***
      return t.remoteSyncer.getRemoteKeysForTarget(e);
    },
    lt: function (e) ***REMOVED***
      return t.Or.get(e) || null;
    }
  }), rs(t).start(), t.Br.Sr());
}
function Bo(t) ***REMOVED***
  return jo(t) && !rs(t).tr() && t.Or.size > 0;
}
function jo(t) ***REMOVED***
  return 0 === O(t).$r.size;
}
function Ko(t) ***REMOVED***
  t.qr = void 0;
}
function Go(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    return _tslib.__generator(this, function (e) ***REMOVED***
      return (t.Or.forEach(function (e, n) ***REMOVED***
        Vo(t, e);
      }), [2]);
    });
  });
}
function Qo(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    return _tslib.__generator(this, function (n) ***REMOVED***
      return (Ko(t), // If we still need the watch stream, retry the connection.
      Bo(t) ? (t.Br.Nr(e), Uo(t)) : // No need to restart watch stream because there are no active targets.
      // The online state is set to unknown because there is no active attempt
      // at establishing a connection
      t.Br.set("Unknown"), [2]);
    });
  });
}
function zo(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r, i, o;
    return _tslib.__generator(this, function (s) ***REMOVED***
      switch (s.label) ***REMOVED***
        case 0:
          if ((t.Br.set("Online"), !(e instanceof cn && 2 === /*Removed*/
          e.state && e.cause))) // Mark the client as online since we got a message from the server
          return [3, /*break*/
          6];
          s.label = 1;
        case 1:
          return (s.trys.push([1, 3, , 5]), [4, /*yield*/
          /** Handles an error on a target*/
          (function (t, e) ***REMOVED***
            return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
              var n, r, i, o;
              return _tslib.__generator(this, function (s) ***REMOVED***
                switch (s.label) ***REMOVED***
                  case 0:
                    (n = e.cause, r = 0, i = e.targetIds, s.label = 1);
                  case 1:
                    return r < i.length ? (o = i[r], t.Or.has(o) ? [4, /*yield*/
                    t.remoteSyncer.rejectListen(o, n)] : [3, /*break*/
                    3]) : [3, /*break*/
                    5];
                  case 2:
                    (s.sent(), t.Or.delete(o), t.qr.removeTarget(o), s.label = 3);
                  case 3:
                    s.label = 4;
                  case 4:
                    return (r++, [3, /*break*/
                    1]);
                  case 5:
                    return [2];
                }
              });
            });
          })(t, e)]);
        case 2:
          return (s.sent(), [3, /*break*/
          5]);
        case 3:
          return (r = s.sent(), N("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r), [4, /*yield*/
          Wo(t, r)]);
        case 4:
          return (s.sent(), [3, /*break*/
          5]);
        case 5:
          return [3, /*break*/
          13];
        case 6:
          if ((e instanceof un ? t.qr.X(e) : e instanceof an ? t.qr.rt(e) : t.qr.et(e), n.isEqual(U.min()))) return [3, /*break*/
          13];
          s.label = 7;
        case 7:
          return (s.trys.push([7, 11, , 13]), [4, /*yield*/
          qi(t.localStore)]);
        case 8:
          return (i = s.sent(), n.compareTo(i) >= 0 ? [4, /*yield*/
          /**
          * Takes a batch of changes from the Datastore, repackages them as a
          * RemoteEvent, and passes that on to the listener, which is typically the
          * SyncEngine.
          */
          (function (t, e) ***REMOVED***
            var n = t.qr.ut(e);
            // Update in-memory resume tokens. LocalStore will update the
            // persistent view of these when applying the completed RemoteEvent.
            return (n.targetChanges.forEach(function (n, r) ***REMOVED***
              if (n.resumeToken.approximateByteSize() > 0) ***REMOVED***
                var i = t.Or.get(r);
                // A watched target might have been removed already.
                i && t.Or.set(r, i.withResumeToken(n.resumeToken, e));
              }
            }), // Re-establish listens for the targets that have been invalidated by
            // existence filter mismatches.
            n.targetMismatches.forEach(function (e) ***REMOVED***
              var n = t.Or.get(e);
              if (n) ***REMOVED***
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                (t.Or.set(e, n.withResumeToken(Y.EMPTY_BYTE_STRING, n.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                qo(t, e));
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var r = new Cr(n.target, e, 1, /*ExistenceFilterMismatch*/
                n.sequenceNumber);
                Vo(t, r);
              }
            }), t.remoteSyncer.applyRemoteEvent(n));
          })(t, n)] : [3, /*break*/
          10]);
        case 9:
          // We have received a target change with a global snapshot if the snapshot
          // version is not equal to SnapshotVersion.min().
          (s.sent(), s.label = 10);
        case 10:
          return [3, /*break*/
          13];
        case 11:
          return (N("RemoteStore", "Failed to raise snapshot:", o = s.sent()), [4, /*yield*/
          Wo(t, o)]);
        case 12:
          return (s.sent(), [3, /*break*/
          13]);
        case 13:
          return [2];
      }
    });
  });
}
/**
* Recovery logic for IndexedDB errors that takes the network offline until
* `op` succeeds. Retries are scheduled with backoff using
* `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
* validated via a generic operation.
*
* The returned Promise is resolved once the network is disabled and before
* any retry attempt.
*/
function Wo(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r = this;
    return _tslib.__generator(this, function (i) ***REMOVED***
      switch (i.label) ***REMOVED***
        case 0:
          if (!_r(e)) throw e;
          // Disable network and raise offline snapshots
          return (t.$r.add(1), [4, /*yield*/
          Po(t)]);
        case 1:
          // Disable network and raise offline snapshots
          return (i.sent(), t.Br.set("Offline"), n || (// Use a simple read operation to determine if IndexedDB recovered.
          // Ideally, we would expose a health check directly on SimpleDb, but
          // RemoteStore only has access to persistence through LocalStore.
          n = function () ***REMOVED***
            return qi(t.localStore);
          }), // Probe IndexedDB periodically and re-enable network
          t.asyncQueue.enqueueRetryable(function () ***REMOVED***
            return _tslib.__awaiter(r, void 0, void 0, function () ***REMOVED***
              return _tslib.__generator(this, function (e) ***REMOVED***
                switch (e.label) ***REMOVED***
                  case 0:
                    return (N("RemoteStore", "Retrying IndexedDB access"), [4, /*yield*/
                    n()]);
                  case 1:
                    return (e.sent(), t.$r.delete(1), [4, /*yield*/
                    Lo(t)]);
                  case 2:
                    return (e.sent(), [2]);
                }
              });
            });
          }), [2]);
      }
    });
  });
}
/**
* Executes `op`. If `op` fails, takes the network offline until `op`
* succeeds. Returns after the first attempt.
*/
function Ho(t, e) ***REMOVED***
  return e().catch(function (n) ***REMOVED***
    return Wo(t, n, e);
  });
}
function Yo(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var e, n, r, i, o;
    return _tslib.__generator(this, function (s) ***REMOVED***
      switch (s.label) ***REMOVED***
        case 0:
          (e = O(t), n = is(e), r = e.kr.length > 0 ? e.kr[e.kr.length - 1].batchId : -1, s.label = 1);
        case 1:
          if (!/**
          * Returns true if we can add to the write pipeline (i.e. the network is
          * enabled and the write pipeline is not full).
          */
          (function (t) ***REMOVED***
            return jo(t) && t.kr.length < 10;
          })(/**
          * Queues additional writes to be sent to the write stream, sending them
          * immediately if the write stream is established.
          */
          e)) return [3, /*break*/
          7];
          s.label = 2;
        case 2:
          return (s.trys.push([2, 4, , 6]), [4, /*yield*/
          ji(e.localStore, r)]);
        case 3:
          return null === (i = s.sent()) ? (0 === e.kr.length && n.ir(), [3, /*break*/
          7]) : (r = i.batchId, (function (t, e) ***REMOVED***
            t.kr.push(e);
            var n = is(t);
            n.er() && n.pr && n.Er(e.mutations);
          })(e, i), [3, /*break*/
          6]);
        case 4:
          return (o = s.sent(), [4, /*yield*/
          Wo(e, o)]);
        case 5:
          return (s.sent(), [3, /*break*/
          6]);
        case 6:
          return [3, /*break*/
          1];
        case 7:
          return (Xo(e) && $o(e), [2]);
      }
    });
  });
}
function Xo(t) ***REMOVED***
  return jo(t) && !is(t).tr() && t.kr.length > 0;
}
function $o(t) ***REMOVED***
  is(t).start();
}
function Jo(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    return _tslib.__generator(this, function (e) ***REMOVED***
      return (is(t).Ar(), [2]);
    });
  });
}
function Zo(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var e, n, r, i;
    return _tslib.__generator(this, function (o) ***REMOVED***
      // Send the write pipeline now that the stream is established.
      for ((e = is(t), n = 0, r = t.kr); n < r.length; n++) (i = r[n], e.Er(i.mutations));
      return [2];
    });
  });
}
function ts(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r, i;
    return _tslib.__generator(this, function (o) ***REMOVED***
      switch (o.label) ***REMOVED***
        case 0:
          return (r = t.kr.shift(), i = xr.from(r, e, n), [4, /*yield*/
          Ho(t, function () ***REMOVED***
            return t.remoteSyncer.applySuccessfulWrite(i);
          })]);
        case 1:
          // It's possible that with the completion of this mutation another
          // slot has freed up.
          return (o.sent(), [4, /*yield*/
          Yo(t)]);
        case 2:
          // It's possible that with the completion of this mutation another
          // slot has freed up.
          return (o.sent(), [2]);
      }
    });
  });
}
function es(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    return _tslib.__generator(this, function (n) ***REMOVED***
      switch (n.label) ***REMOVED***
        case 0:
          return e && is(t).pr ? [4, /*yield*/
          (function (t, e) ***REMOVED***
            return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
              var n, r;
              return _tslib.__generator(this, function (i) ***REMOVED***
                switch (i.label) ***REMOVED***
                  case 0:
                    return Be(r = e.code) && r !== E.ABORTED ? (n = t.kr.shift(), // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    is(t).sr(), [4, /*yield*/
                    Ho(t, function () ***REMOVED***
                      return t.remoteSyncer.rejectFailedWrite(n.batchId, e);
                    })]) : [3, /*break*/
                    3];
                  case 1:
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    return (i.sent(), [4, /*yield*/
                    Yo(t)]);
                  case 2:
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    (i.sent(), i.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          })(t, e)] : [3, /*break*/
          2];
        case 1:
          // This error affects the actual write.
          (n.sent(), n.label = 2);
        case 2:
          // If the write stream closed after the write handshake completes, a write
          // operation failed and we fail the pending operation.
          // The write stream might have been started by refilling the write
          // pipeline for failed writes
          return (Xo(t) && $o(t), [2]);
      }
    });
  });
}
/**
* Toggles the network state when the client gains or loses its primary lease.
*/
function ns(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r;
    return _tslib.__generator(this, function (i) ***REMOVED***
      switch (i.label) ***REMOVED***
        case 0:
          return (n = O(t), e ? (n.$r.delete(2), [4, /*yield*/
          Lo(n)]) : [3, /*break*/
          2]);
        case 1:
          return (i.sent(), [3, /*break*/
          5]);
        case 2:
          return (r = e) ? [3, /*break*/
          4] : (n.$r.add(2), [4, /*yield*/
          Po(n)]);
        case 3:
          (i.sent(), r = n.Br.set("Unknown"), i.label = 4);
        case 4:
          (r, i.label = 5);
        case 5:
          return [2];
      }
    });
  });
}
/**
* If not yet initialized, registers the WatchStream and its network state
* callback with `remoteStoreImpl`. Returns the existing stream if one is
* already available.
*
* PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
* This is not done on Web to allow it to be tree-shaken.
*/
function rs(t) ***REMOVED***
  var e = this;
  return (t.Ur || // Create stream (but note that it is not started yet).
  (t.Ur = (function (t, e, n) ***REMOVED***
    var r = O(t);
    return (r.br(), new ko(e, r.Hi, r.credentials, r.R, n));
  })(t.datastore, t.asyncQueue, ***REMOVED***
    Ii: Go.bind(null, t),
    Ri: Qo.bind(null, t),
    _r: zo.bind(null, t)
  }), t.Mr.push(function (n) ***REMOVED***
    return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (e) ***REMOVED***
        switch (e.label) ***REMOVED***
          case 0:
            return n ? (t.Ur.sr(), Bo(t) ? Uo(t) : t.Br.set("Unknown"), [3, /*break*/
            3]) : [3, /*break*/
            1];
          case 1:
            return [4, /*yield*/
            t.Ur.stop()];
          case 2:
            (e.sent(), Ko(t), e.label = 3);
          case 3:
            return [2];
        }
      });
    });
  })), t.Ur);
}
function is(t) ***REMOVED***
  var e = this;
  return (t.Qr || // Create stream (but note that it is not started yet).
  (t.Qr = (function (t, e, n) ***REMOVED***
    var r = O(t);
    return (r.br(), new xo(e, r.Hi, r.credentials, r.R, n));
  })(t.datastore, t.asyncQueue, ***REMOVED***
    Ii: Jo.bind(null, t),
    Ri: es.bind(null, t),
    Ir: Zo.bind(null, t),
    Tr: ts.bind(null, t)
  }), t.Mr.push(function (n) ***REMOVED***
    return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (e) ***REMOVED***
        switch (e.label) ***REMOVED***
          case 0:
            return n ? (t.Qr.sr(), [4, /*yield*/
            Yo(t)]) : [3, /*break*/
            2];
          case 1:
            // This will start the write stream if necessary.
            return (e.sent(), [3, /*break*/
            4]);
          case 2:
            return [4, /*yield*/
            t.Qr.stop()];
          case 3:
            (e.sent(), t.kr.length > 0 && (N("RemoteStore", "Stopping write stream with " + t.kr.length + " pending writes"), t.kr = []), e.label = 4);
          case 4:
            return [2];
        }
      });
    });
  })), t.Qr);
}
var os = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, r, i) ***REMOVED***
    (this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new vr(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch(function (t) ***REMOVED***}));
  }
  return (t.createAndSchedule = function (e, n, r, i, o) ***REMOVED***
    var s = new t(e, n, Date.now() + r, i, o);
    return (s.start(r), s);
  }, /**
  * Starts the timer. This is called immediately after construction by
  * createAndSchedule().
  */
  t.prototype.start = function (t) ***REMOVED***
    var e = this;
    this.timerHandle = setTimeout(function () ***REMOVED***
      return e.handleDelayElapsed();
    }, t);
  }, /**
  * Queues the operation to run immediately (if it hasn't already been run or
  * canceled).
  */
  t.prototype.skipDelay = function () ***REMOVED***
    return this.handleDelayElapsed();
  }, /**
  * Cancels the operation if it hasn't already been executed or canceled. The
  * promise will be rejected.
  *
  * As long as the operation has not yet been run, calling cancel() provides a
  * guarantee that the operation will not be run.
  */
  t.prototype.cancel = function (t) ***REMOVED***
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new T(E.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
  }, t.prototype.handleDelayElapsed = function () ***REMOVED***
    var t = this;
    this.asyncQueue.enqueueAndForget(function () ***REMOVED***
      return null !== t.timerHandle ? (t.clearTimeout(), t.op().then(function (e) ***REMOVED***
        return t.deferred.resolve(e);
      })) : Promise.resolve();
    });
  }, t.prototype.clearTimeout = function () ***REMOVED***
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }, t);
})();
/**
* Returns a FirestoreError that can be surfaced to the user if the provided
* error is an IndexedDbTransactionError. Re-throws the error otherwise.
*/
function ss(t, e) ***REMOVED***
  if ((A("AsyncQueue", e + ": " + t), _r(t))) return new T(E.UNAVAILABLE, e + ": " + t);
  throw t;
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* DocumentSet is an immutable (copy-on-write) collection that holds documents
* in order specified by the provided comparator. We always add a document key
* comparator on top of what is provided to guarantee document equality based on
* the key.
*/
var us = /** @class*/
(function () ***REMOVED***
  /** The default ordering is by key if the comparator is omitted*/
  function t(t) ***REMOVED***
    // We are adding document key comparator to the end as it's the only
    // guaranteed unique property of a document.
    (this.comparator = t ? function (e, n) ***REMOVED***
      return t(e, n) || st.comparator(e.key, n.key);
    } : function (t, e) ***REMOVED***
      return st.comparator(t.key, e.key);
    }, this.keyedMap = $e(), this.sortedSet = new Ke(this.comparator));
  }
  return (t.emptySet = function (e) ***REMOVED***
    return new t(e.comparator);
  }, t.prototype.has = function (t) ***REMOVED***
    return null != this.keyedMap.get(t);
  }, t.prototype.get = function (t) ***REMOVED***
    return this.keyedMap.get(t);
  }, t.prototype.first = function () ***REMOVED***
    return this.sortedSet.minKey();
  }, t.prototype.last = function () ***REMOVED***
    return this.sortedSet.maxKey();
  }, t.prototype.isEmpty = function () ***REMOVED***
    return this.sortedSet.isEmpty();
  }, /**
  * Returns the index of the provided key in the document set, or -1 if the
  * document key is not present in the set;
  */
  t.prototype.indexOf = function (t) ***REMOVED***
    var e = this.keyedMap.get(t);
    return e ? this.sortedSet.indexOf(e) : -1;
  }, Object.defineProperty(t.prototype, "size", ***REMOVED***
    get: function () ***REMOVED***
      return this.sortedSet.size;
    },
    enumerable: !1,
    configurable: !0
  }), /** Iterates documents in order defined by "comparator"*/
  t.prototype.forEach = function (t) ***REMOVED***
    this.sortedSet.inorderTraversal(function (e, n) ***REMOVED***
      return (t(e), !1);
    });
  }, /** Inserts or updates a document with the same key*/
  t.prototype.add = function (t) ***REMOVED***
    // First remove the element if we have it.
    var e = this.delete(t.key);
    return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
  }, /** Deletes a document with a given key*/
  t.prototype.delete = function (t) ***REMOVED***
    var e = this.get(t);
    return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
  }, t.prototype.isEqual = function (e) ***REMOVED***
    if (!(e instanceof t)) return !1;
    if (this.size !== e.size) return !1;
    for (var n = this.sortedSet.getIterator(), r = e.sortedSet.getIterator(); n.hasNext(); ) ***REMOVED***
      var i = n.getNext().key, o = r.getNext().key;
      if (!i.isEqual(o)) return !1;
    }
    return !0;
  }, t.prototype.toString = function () ***REMOVED***
    var t = [];
    return (this.forEach(function (e) ***REMOVED***
      t.push(e.toString());
    }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)");
  }, t.prototype.copy = function (e, n) ***REMOVED***
    var r = new t();
    return (r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = n, r);
  }, t);
})(), as = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    this.Kr = new Ke(st.comparator);
  }
  return (t.prototype.track = function (t) ***REMOVED***
    var e = t.doc.key, n = this.Kr.get(e);
    n ? // Merge the new change with the existing change.
    0 !== /*Added*/
    t.type && 3 === /*Metadata*/
    n.type ? this.Kr = this.Kr.insert(e, t) : 3 === /*Metadata*/
    t.type && 1 !== /*Removed*/
    n.type ? this.Kr = this.Kr.insert(e, ***REMOVED***
      type: n.type,
      doc: t.doc
    }) : 2 === /*Modified*/
    t.type && 2 === /*Modified*/
    n.type ? this.Kr = this.Kr.insert(e, ***REMOVED***
      type: 2,
      /*Modified*/
      doc: t.doc
    }) : 2 === /*Modified*/
    t.type && 0 === /*Added*/
    n.type ? this.Kr = this.Kr.insert(e, ***REMOVED***
      type: 0,
      /*Added*/
      doc: t.doc
    }) : 1 === /*Removed*/
    t.type && 0 === /*Added*/
    n.type ? this.Kr = this.Kr.remove(e) : 1 === /*Removed*/
    t.type && 2 === /*Modified*/
    n.type ? this.Kr = this.Kr.insert(e, ***REMOVED***
      type: 1,
      /*Removed*/
      doc: n.doc
    }) : 0 === /*Added*/
    t.type && 1 === /*Removed*/
    n.type ? this.Kr = this.Kr.insert(e, ***REMOVED***
      type: 2,
      /*Modified*/
      doc: t.doc
    }) : // This includes these cases, which don't make sense:
    // Added->Added
    // Removed->Removed
    // Modified->Added
    // Removed->Modified
    // Metadata->Added
    // Removed->Metadata
    C() : this.Kr = this.Kr.insert(e, t);
  }, t.prototype.jr = function () ***REMOVED***
    var t = [];
    return (this.Kr.inorderTraversal(function (e, n) ***REMOVED***
      t.push(n);
    }), t);
  }, t);
})(), cs = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, r, i, o, s, u) ***REMOVED***
    (this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = s, this.excludesMetadataChanges = u);
  }
  return (t.fromInitialDocuments = function (e, n, r, i) ***REMOVED***
    var o = [];
    return (n.forEach(function (t) ***REMOVED***
      o.push(***REMOVED***
        type: 0,
        /*Added*/
        doc: t
      });
    }), new t(e, n, us.emptySet(n), o, r, i, /*syncStateChanged=*/
    !0, /*excludesMetadataChanges=*/
    !1));
  }, Object.defineProperty(t.prototype, "hasPendingWrites", ***REMOVED***
    get: function () ***REMOVED***
      return !this.mutatedKeys.isEmpty();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (t) ***REMOVED***
    if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && te(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
    var e = this.docChanges, n = t.docChanges;
    if (e.length !== n.length) return !1;
    for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
    return !0;
  }, t);
})(), hs = function () ***REMOVED***
  (this.Wr = void 0, this.listeners = []);
}, fs = function () ***REMOVED***
  (this.queries = new mi(function (t) ***REMOVED***
    return ee(t);
  }, te), this.onlineState = "Unknown", /*Unknown*/
  this.Gr = new Set());
***REMOVED***
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* DocumentChangeSet keeps track of a set of changes to docs in a query, merging
* duplicate events for the same doc.
*/
function ls(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i, o, s, u, a;
    return _tslib.__generator(this, function (c) ***REMOVED***
      switch (c.label) ***REMOVED***
        case 0:
          if ((n = O(t), r = e.query, i = !1, (o = n.queries.get(r)) || (i = !0, o = new hs()), !i)) return [3, /*break*/
          4];
          c.label = 1;
        case 1:
          return (c.trys.push([1, 3, , 4]), s = o, [4, /*yield*/
          n.onListen(r)]);
        case 2:
          return (s.Wr = c.sent(), [3, /*break*/
          4]);
        case 3:
          return (u = c.sent(), a = ss(u, "Initialization of query '" + ne(e.query) + "' failed"), [2, /*return*/
          void e.onError(a)]);
        case 4:
          return (n.queries.set(r, o), o.listeners.push(e), // Run global snapshot listeners if a consistent snapshot has been emitted.
          e.zr(n.onlineState), o.Wr && e.Hr(o.Wr) && vs(n), [2]);
      }
    });
  });
}
function ds(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i, o, s;
    return _tslib.__generator(this, function (u) ***REMOVED***
      return (n = O(t), r = e.query, i = !1, (o = n.queries.get(r)) && (s = o.listeners.indexOf(e)) >= 0 && (o.listeners.splice(s, 1), i = 0 === o.listeners.length), i ? [2, /*return*/
      (n.queries.delete(r), n.onUnlisten(r))] : [2]);
    });
  });
}
function ps(t, e) ***REMOVED***
  for (var n = O(t), r = !1, i = 0, o = e; i < o.length; i++) ***REMOVED***
    var s = o[i], u = s.query, a = n.queries.get(u);
    if (a) ***REMOVED***
      for (var c = 0, h = a.listeners; c < h.length; c++) ***REMOVED***
        h[c].Hr(s) && (r = !0);
      }
      a.Wr = s;
    }
  }
  r && vs(n);
}
function ys(t, e, n) ***REMOVED***
  var r = O(t), i = r.queries.get(e);
  if (i) for (var o = 0, s = i.listeners; o < s.length; o++) ***REMOVED***
    s[o].onError(n);
  }
  // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
  // after an error.
  r.queries.delete(e);
}
// Call all global snapshot listeners that have been set.
function vs(t) ***REMOVED***
  t.Gr.forEach(function (t) ***REMOVED***
    t.next();
  });
}
/**
* QueryListener takes a series of internal view snapshots and determines
* when to raise the event.
*
* It uses an Observer to dispatch events.
*/
var ms = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (this.query = t, this.Jr = e, /**
    * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
    * observer. This flag is set to true once we've actually raised an event.
    */
    this.Yr = !1, this.Xr = null, this.onlineState = "Unknown", /*Unknown*/
    this.options = n || (***REMOVED***}));
  }
  return (t.prototype.Hr = function (t) ***REMOVED***
    if (!this.options.includeMetadataChanges) ***REMOVED***
      for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) ***REMOVED***
        var i = r[n];
        3 !== /*Metadata*/
        i.type && e.push(i);
      }
      t = new cs(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, /*excludesMetadataChanges=*/
      !0);
    }
    var o = !1;
    return (this.Yr ? this.Zr(t) && (this.Jr.next(t), o = !0) : this.eo(t, this.onlineState) && (this.no(t), o = !0), this.Xr = t, o);
  }, t.prototype.onError = function (t) ***REMOVED***
    this.Jr.error(t);
  }, /** Returns whether a snapshot was raised.*/
  t.prototype.zr = function (t) ***REMOVED***
    this.onlineState = t;
    var e = !1;
    return (this.Xr && !this.Yr && this.eo(this.Xr, t) && (this.no(this.Xr), e = !0), e);
  }, t.prototype.eo = function (t, e) ***REMOVED***
    // Always raise the first event when we're synced
    if (!t.fromCache) return !0;
    // NOTE: We consider OnlineState.Unknown as online (it should become Offline
    // or Online if we wait long enough).
    var n = "Offline" !== /*Offline*/
    e;
    // Don't raise the event if we're online, aren't synced yet (checked
    // above) and are waiting for a sync.
    return !(this.options.so && n || t.docs.isEmpty() && "Offline" !== /*Offline*/
    e);
  }, t.prototype.Zr = function (t) ***REMOVED***
    // We don't need to handle includeDocumentMetadataChanges here because
    // the Metadata only changes have already been stripped out if needed.
    // At this point the only changes we will see are the ones we should
    // propagate.
    if (t.docChanges.length > 0) return !0;
    var e = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites;
    return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges;
  }, t.prototype.no = function (t) ***REMOVED***
    (t = cs.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.Yr = !0, this.Jr.next(t));
  }, t);
})(), gs = /** @class*/
(function () ***REMOVED***
  function t(t, // How many bytes this element takes to store in the bundle.
  e) ***REMOVED***
    (this.payload = t, this.byteLength = e);
  }
  return (t.prototype.io = function () ***REMOVED***
    return ("metadata" in this.payload);
  }, t);
})(), ws = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this.R = t;
  }
  return (t.prototype.qn = function (t) ***REMOVED***
    return Tn(this.R, t);
  }, /**
  * Converts a BundleDocument to a MutableDocument.
  */
  t.prototype.Un = function (t) ***REMOVED***
    return t.metadata.exists ? xn(this.R, t.document, !1) : _t.newNoDocument(this.qn(t.metadata.name), this.Qn(t.metadata.readTime));
  }, t.prototype.Qn = function (t) ***REMOVED***
    return bn(t);
  }, t);
})(), bs = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (this.ro = t, this.localStore = e, this.R = n, /** Batched queries to be saved into storage*/
    this.queries = [], /** Batched documents to be saved into storage*/
    this.documents = [], this.progress = Is(t));
  }
  return (t.prototype.oo = function (t) ***REMOVED***
    this.progress.bytesLoaded += t.byteLength;
    var e = this.progress.documentsLoaded;
    return (t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push(***REMOVED***
      metadata: t.payload.documentMetadata
    }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign(***REMOVED***}, this.progress)) : null);
  }, t.prototype.co = function (t) ***REMOVED***
    for (var e = new Map(), n = new ws(this.R), r = 0, i = t; r < i.length; r++) ***REMOVED***
      var o = i[r];
      if (o.metadata.queries) for (var s = n.qn(o.metadata.name), u = 0, a = o.metadata.queries; u < a.length; u++) ***REMOVED***
        var c = a[u], h = (e.get(c) || en()).add(s);
        e.set(c, h);
      }
    }
    return e;
  }, /**
  * Update the progress to 'Success' and return the updated progress.
  */
  t.prototype.complete = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t, e, n, r, i;
      return _tslib.__generator(this, function (o) ***REMOVED***
        switch (o.label) ***REMOVED***
          case 0:
            return [4, /*yield*/
            Yi(this.localStore, new ws(this.R), this.documents, this.ro.id)];
          case 1:
            (t = o.sent(), e = this.co(this.documents), n = 0, r = this.queries, o.label = 2);
          case 2:
            return n < r.length ? (i = r[n], [4, /*yield*/
            Xi(this.localStore, i, e.get(i.name))]) : [3, /*break*/
            5];
          case 3:
            (o.sent(), o.label = 4);
          case 4:
            return (n++, [3, /*break*/
            2]);
          case 5:
            return [2, /*return*/
            (this.progress.taskState = "Success", new Ci(Object.assign(***REMOVED***}, this.progress), t))];
        }
      });
    });
  }, t);
})();
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A complete element in the bundle stream, together with the byte length it
* occupies in the stream.
*/
/**
* Returns a `LoadBundleTaskProgress` representing the initial progress of
* loading a bundle.
*/
function Is(t) ***REMOVED***
  return ***REMOVED***
    taskState: "Running",
    documentsLoaded: 0,
    bytesLoaded: 0,
    totalDocuments: t.totalDocuments,
    totalBytes: t.totalBytes
  ***REMOVED***
}
/**
* Returns a `LoadBundleTaskProgress` representing the progress that the loading
* has succeeded.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _s = function (t) ***REMOVED***
  this.key = t;
}, Es = function (t) ***REMOVED***
  this.key = t;
}, Ts = /** @class*/
(function () ***REMOVED***
  function t(t, /** Documents included in the remote target*/
  e) ***REMOVED***
    (this.query = t, this.uo = e, this.ao = null, /**
    * A flag whether the view is current with the backend. A view is considered
    * current after it has seen the current flag from the backend and did not
    * lose consistency within the watch stream (e.g. because of an existence
    * filter mismatch).
    */
    this.current = !1, /** Documents in the view but not in the remote target*/
    this.ho = en(), /** Document Keys that have local changes*/
    this.mutatedKeys = en(), this.lo = ie(t), this.fo = new us(this.lo));
  }
  return (Object.defineProperty(t.prototype, "wo", ***REMOVED***
    /**
    * The set of remote documents that the server has told us belongs to the target associated with
    * this view.
    */
    get: function () ***REMOVED***
      return this.uo;
    },
    enumerable: !1,
    configurable: !0
  }), /**
  * Iterates over a set of doc changes, applies the query limit, and computes
  * what the new results should be, what the changes were, and whether we may
  * need to go back to the local cache for more results. Does not make any
  * changes to the view.
  * @param docChanges - The doc changes to apply to this view.
  * @param previousChanges - If this is being called with a refill, then start
  *        with this set of docs and changes instead of the current view.
  * @returns a new set of docs, changes, and refill flag.
  */
  t.prototype._o = function (t, e) ***REMOVED***
    var n = this, r = e ? e.mo : new as(), i = e ? e.fo : this.fo, o = e ? e.mutatedKeys : this.mutatedKeys, s = i, u = !1, a = zt(this.query) && i.size === this.query.limit ? i.last() : null, c = Wt(this.query) && i.size === this.query.limit ? i.first() : null;
    // Drop documents out to meet limit/limitToLast requirement.
    if ((t.inorderTraversal(function (t, e) ***REMOVED***
      var h = i.get(t), f = re(n.query, e) ? e : null, l = !!h && n.mutatedKeys.has(h.key), d = !!f && (f.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      n.mutatedKeys.has(f.key) && f.hasCommittedMutations), p = !1;
      // Calculate change
      (h && f ? h.data.isEqual(f.data) ? l !== d && (r.track(***REMOVED***
        type: 3,
        /*Metadata*/
        doc: f
      }), p = !0) : n.yo(h, f) || (r.track(***REMOVED***
        type: 2,
        /*Modified*/
        doc: f
      }), p = !0, (a && n.lo(f, a) > 0 || c && n.lo(f, c) < 0) && (// This doc moved from inside the limit to outside the limit.
      // That means there may be some other doc in the local cache
      // that should be included instead.
      u = !0)) : !h && f ? (r.track(***REMOVED***
        type: 0,
        /*Added*/
        doc: f
      }), p = !0) : h && !f && (r.track(***REMOVED***
        type: 1,
        /*Removed*/
        doc: h
      }), p = !0, (a || c) && (// A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      u = !0)), p && (f ? (s = s.add(f), o = d ? o.add(t) : o.delete(t)) : (s = s.delete(t), o = o.delete(t))));
    }), zt(this.query) || Wt(this.query))) for (; s.size > this.query.limit; ) ***REMOVED***
      var h = zt(this.query) ? s.last() : s.first();
      (s = s.delete(h.key), o = o.delete(h.key), r.track(***REMOVED***
        type: 1,
        /*Removed*/
        doc: h
      }));
    }
    return ***REMOVED***
      fo: s,
      mo: r,
      Nn: u,
      mutatedKeys: o
    ***REMOVED***
  }, t.prototype.yo = function (t, e) ***REMOVED***
    // We suppress the initial change event for documents that were modified as
    // part of a write acknowledgment (e.g. when the value of a server transform
    // is applied) as Watch will send us the same document again.
    // By suppressing the event, we only raise two user visible events (one with
    // `hasPendingWrites` and the final state of the document) instead of three
    // (one with `hasPendingWrites`, the modified document with
    // `hasPendingWrites` and the final state of the document).
    return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
  }, /**
  * Updates the view with the given ViewDocumentChanges and optionally updates
  * limbo docs and sync state from the provided target change.
  * @param docChanges - The set of changes to make to the view's docs.
  * @param updateLimboDocuments - Whether to update limbo documents based on
  *        this change.
  * @param targetChange - A target change to apply for computing limbo docs and
  *        sync state.
  * @returns A new ViewChange with the given docs, changes, and sync state.
  */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  t.prototype.applyChanges = function (t, e, n) ***REMOVED***
    var r = this, i = this.fo;
    (this.fo = t.fo, this.mutatedKeys = t.mutatedKeys);
    // Sort changes based on type and query comparator
    var o = t.mo.jr();
    (o.sort(function (t, e) ***REMOVED***
      return (function (t, e) ***REMOVED***
        var n = function (t) ***REMOVED***
          switch (t) ***REMOVED***
            case 0:
              /*Added*/
              return 1;
            case 2:
            case 3:
              /*Metadata*/
              // A metadata change is converted to a modified change at the public
              // api layer.  Since we sort by document key and then change type,
              // metadata and modified changes must be sorted equivalently.
              return 2;
            case 1:
              /*Removed*/
              return 0;
            default:
              return C();
          }
        ***REMOVED***
        return n(t) - n(e);
      })(t.type, e.type) || r.lo(t.doc, e.doc);
    }), this.po(n));
    var s = e ? this.Eo() : [], u = 0 === this.ho.size && this.current ? 1 : /*Synced*/
    0, /*Local*/
    a = u !== this.ao;
    return (this.ao = u, 0 !== o.length || a ? ***REMOVED***
      snapshot: new cs(this.query, t.fo, i, o, t.mutatedKeys, 0 === /*Local*/
      u, a, /*excludesMetadataChanges=*/
      !1),
      To: s
    } : ***REMOVED***
      To: s
    });
  }, /**
  * Applies an OnlineState change to the view, potentially generating a
  * ViewChange if the view's syncState changes as a result.
  */
  t.prototype.zr = function (t) ***REMOVED***
    return this.current && "Offline" === /*Offline*/
    t ? // If we're offline, set `current` to false and then call applyChanges()
    // to refresh our syncState and generate a ViewChange as appropriate. We
    // are guaranteed to get a new TargetChange that sets `current` back to
    // true once the client is back online.
    (this.current = !1, this.applyChanges(***REMOVED***
      fo: this.fo,
      mo: new as(),
      mutatedKeys: this.mutatedKeys,
      Nn: !1
    }, /*updateLimboDocuments=*/
    !1)) : ***REMOVED***
      To: []
    ***REMOVED***
  }, /**
  * Returns whether the doc for the given key should be in limbo.
  */
  t.prototype.Io = function (t) ***REMOVED***
    // If the remote end says it's part of this query, it's not in limbo.
    return !this.uo.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.fo.has(t) && !this.fo.get(t).hasLocalMutations;
  }, /**
  * Updates syncedDocuments, current, and limbo docs based on the given change.
  * Returns the list of changes to which docs are in limbo.
  */
  t.prototype.po = function (t) ***REMOVED***
    var e = this;
    t && (t.addedDocuments.forEach(function (t) ***REMOVED***
      return e.uo = e.uo.add(t);
    }), t.modifiedDocuments.forEach(function (t) ***REMOVED***}), t.removedDocuments.forEach(function (t) ***REMOVED***
      return e.uo = e.uo.delete(t);
    }), this.current = t.current);
  }, t.prototype.Eo = function () ***REMOVED***
    var t = this;
    // We can only determine limbo documents when we're in-sync with the server.
    if (!this.current) return [];
    // TODO(klimt): Do this incrementally so that it's not quadratic when
    // updating many documents.
    var e = this.ho;
    (this.ho = en(), this.fo.forEach(function (e) ***REMOVED***
      t.Io(e.key) && (t.ho = t.ho.add(e.key));
    }));
    // Diff the new limbo docs with the old limbo docs.
    var n = [];
    return (e.forEach(function (e) ***REMOVED***
      t.ho.has(e) || n.push(new Es(e));
    }), this.ho.forEach(function (t) ***REMOVED***
      e.has(t) || n.push(new _s(t));
    }), n);
  }, /**
  * Update the in-memory state of the current view with the state read from
  * persistence.
  *
  * We update the query view whenever a client's primary status changes:
  * - When a client transitions from primary to secondary, it can miss
  *   LocalStorage updates and its query views may temporarily not be
  *   synchronized with the state on disk.
  * - For secondary to primary transitions, the client needs to update the list
  *   of `syncedDocuments` since secondary clients update their query views
  *   based purely on synthesized RemoteEvents.
  *
  * @param queryResult.documents - The documents that match the query according
  * to the LocalStore.
  * @param queryResult.remoteKeys - The keys of the documents that match the
  * query according to the backend.
  *
  * @returns The ViewChange that resulted from this synchronization.
  */
  // PORTING NOTE: Multi-tab only.
  t.prototype.Ao = function (t) ***REMOVED***
    (this.uo = t.Bn, this.ho = en());
    var e = this._o(t.documents);
    return this.applyChanges(e, /*updateLimboDocuments=*/
    !0);
  }, /**
  * Returns a view snapshot as if this query was just listened to. Contains
  * a document add for every existing document and the `fromCache` and
  * `hasPendingWrites` status of the already established view.
  */
  // PORTING NOTE: Multi-tab only.
  t.prototype.Ro = function () ***REMOVED***
    return cs.fromInitialDocuments(this.query, this.fo, this.mutatedKeys, 0 === /*Local*/
    this.ao);
  }, t);
})(), Ss = function (/**
* The query itself.
*/
t, /**
* The target number created by the client that is used in the watch
* stream to identify this query.
*/
e, /**
* The view is responsible for computing the final merged truth of what
* docs are in the query. It gets notified of local and remote changes,
* and applies the query filters and limits to determine the most correct
* possible results.
*/
n) ***REMOVED***
  (this.query = t, this.targetId = e, this.view = n);
}, Ds = function (t) ***REMOVED***
  (this.key = t, /**
  * Set to true once we've received a document. This is used in
  * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
  * decide whether it needs to manufacture a delete event for the target once
  * the target is CURRENT.
  */
  this.bo = !1);
}, Ns = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
  r, i, o) ***REMOVED***
    (this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = o, this.vo = ***REMOVED***}, this.Po = new mi(function (t) ***REMOVED***
      return ee(t);
    }, te), this.Vo = new Map(), /**
    * The keys of documents that are in limbo for which we haven't yet started a
    * limbo resolution query. The strings in this set are the result of calling
    * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
    *
    * The `Set` type was chosen because it provides efficient lookup and removal
    * of arbitrary elements and it also maintains insertion order, providing the
    * desired queue-like FIFO semantics.
    */
    this.So = new Set(), /**
    * Keeps track of the target ID for each document that is in limbo with an
    * active target.
    */
    this.Do = new Ke(st.comparator), /**
    * Keeps track of the information about an active limbo resolution for each
    * active target ID that was started for the purpose of limbo resolution.
    */
    this.Co = new Map(), this.No = new Ji(), /** Stores user completion handlers, indexed by User and BatchId.*/
    this.xo = ***REMOVED***}, /** Stores user callbacks waiting for all pending writes to be acknowledged.*/
    this.Fo = new Map(), this.ko = oi.Yt(), this.onlineState = "Unknown", /*Unknown*/
    // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.Oo = void 0);
  }
  return (Object.defineProperty(t.prototype, "isPrimaryClient", ***REMOVED***
    get: function () ***REMOVED***
      return !0 === this.Oo;
    },
    enumerable: !1,
    configurable: !0
  }), t);
})();
/**
* Initiates the new listen, resolves promise when listen enqueued to the
* server. All the subsequent view snapshots or errors are sent to the
* subscribed handlers. Returns the initial snapshot.
*/
function As(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i, o, s, u;
    return _tslib.__generator(this, function (a) ***REMOVED***
      switch (a.label) ***REMOVED***
        case 0:
          return (n = ru(t), (o = n.Po.get(e)) ? // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
          // already exists when EventManager calls us for the first time. This
          // happens when the primary tab is already listening to this query on
          // behalf of another tab and the user of the primary also starts listening
          // to the query. EventManager will not have an assigned target ID in this
          // case and calls `listen` to obtain this ID.
          (r = o.targetId, n.sharedClientState.addLocalQueryTarget(r), i = o.view.Ro(), [3, /*break*/
          4]) : [3, /*break*/
          1]);
        case 1:
          return [4, /*yield*/
          Ki(n.localStore, Jt(e))];
        case 2:
          return (s = a.sent(), u = n.sharedClientState.addLocalQueryTarget(s.targetId), r = s.targetId, [4, /*yield*/
          ks(n, e, r, "current" === u)]);
        case 3:
          (i = a.sent(), n.isPrimaryClient && Mo(n.remoteStore, s), a.label = 4);
        case 4:
          return [2, /*return*/
          i];
      }
    });
  });
}
/**
* Registers a view for a previously unknown query and computes its initial
* snapshot.
*/
function ks(t, e, n, r) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var i, o, s, u, a, c;
    return _tslib.__generator(this, function (h) ***REMOVED***
      switch (h.label) ***REMOVED***
        case 0:
          // PORTING NOTE: On Web only, we inject the code that registers new Limbo
          // targets based on view changes. This allows us to only depend on Limbo
          // changes when user code includes queries.
          return (t.$o = function (e, n, r) ***REMOVED***
            return (function (t, e, n, r) ***REMOVED***
              return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
                var i, o, s;
                return _tslib.__generator(this, function (u) ***REMOVED***
                  switch (u.label) ***REMOVED***
                    case 0:
                      return (i = e.view._o(n), i.Nn ? [4, /*yield*/
                      Qi(t.localStore, e.query, /*usePreviousResults=*/
                      !1).then(function (t) ***REMOVED***
                        var n = t.documents;
                        return e.view._o(n, i);
                      })] : [3, /*break*/
                      2]);
                    case 1:
                      // The query has a limit and some docs were removed, so we need
                      // to re-run the query against the local store to make sure we
                      // didn't lose any good docs that had been past the limit.
                      (i = u.sent(), u.label = 2);
                    case 2:
                      return (o = r && r.targetChanges.get(e.targetId), s = e.view.applyChanges(i, /*updateLimboDocuments=*/
                      t.isPrimaryClient, o), [2, /*return*/
                      (js(t, e.targetId, s.To), s.snapshot)]);
                  }
                });
              });
            })(t, e, n, r);
          }, [4, /*yield*/
          Qi(t.localStore, e, /*usePreviousResults=*/
          !0)]);
        case 1:
          return (i = h.sent(), o = new Ts(e, i.Bn), s = o._o(i.documents), u = sn.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline" !== /*Offline*/
          t.onlineState), a = o.applyChanges(s, /*updateLimboDocuments=*/
          t.isPrimaryClient, u), js(t, n, a.To), c = new Ss(e, n, o), [2, /*return*/
          (t.Po.set(e, c), t.Vo.has(n) ? t.Vo.get(n).push(e) : t.Vo.set(n, [e]), a.snapshot)]);
      }
    });
  });
}
/** Stops listening to the query.*/
function xs(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i;
    return _tslib.__generator(this, function (o) ***REMOVED***
      switch (o.label) ***REMOVED***
        case 0:
          return (n = O(t), r = n.Po.get(e), (i = n.Vo.get(r.targetId)).length > 1 ? [2, /*return*/
          (n.Vo.set(r.targetId, i.filter(function (t) ***REMOVED***
            return !te(t, e);
          })), void n.Po.delete(e))] : n.isPrimaryClient ? // We need to remove the local query target first to allow us to verify
          // whether any other client is still interested in this target.
          (n.sharedClientState.removeLocalQueryTarget(r.targetId), n.sharedClientState.isActiveQueryTarget(r.targetId) ? [3, /*break*/
          2] : [4, /*yield*/
          Gi(n.localStore, r.targetId, /*keepPersistedTargetData=*/
          !1).then(function () ***REMOVED***
            (n.sharedClientState.clearQueryState(r.targetId), Fo(n.remoteStore, r.targetId), Us(n, r.targetId));
          }).catch(hi)]) : [3, /*break*/
          3]);
        case 1:
          (o.sent(), o.label = 2);
        case 2:
          return [3, /*break*/
          5];
        case 3:
          return (Us(n, r.targetId), [4, /*yield*/
          Gi(n.localStore, r.targetId, /*keepPersistedTargetData=*/
          !0)]);
        case 4:
          (o.sent(), o.label = 5);
        case 5:
          return [2];
      }
    });
  });
}
/**
* Initiates the write of local mutation batch which involves adding the
* writes to the mutation queue, notifying the remote store about new
* mutations and raising events for any changes this write caused.
*
* The promise returned by this call is resolved when the above steps
* have completed, *not* when the write was acked by the backend. The
* userCallback is resolved once the write was acked/rejected by the
* backend (or failed locally for any other reason).
*/
function Cs(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r, i, o, s;
    return _tslib.__generator(this, function (u) ***REMOVED***
      switch (u.label) ***REMOVED***
        case 0:
          (r = iu(t), u.label = 1);
        case 1:
          return (u.trys.push([1, 5, , 6]), [4, /*yield*/
          (function (t, e) ***REMOVED***
            var n, r = O(t), i = q.now(), o = e.reduce(function (t, e) ***REMOVED***
              return t.add(e.key);
            }, en());
            return r.persistence.runTransaction("Locally write mutations", "readwrite", function (t) ***REMOVED***
              return r.Mn.pn(t, o).next(function (o) ***REMOVED***
                n = o;
                for (var s = [], u = 0, a = e; u < a.length; u++) ***REMOVED***
                  var c = a[u], h = Ae(c, n.get(c.key));
                  null != h && // NOTE: The base state should only be applied if there's some
                  // existing document to override, so use a Precondition of
                  // exists=true
                  s.push(new Re(c.key, h, It(h.toProto().mapValue), Ee.exists(!0)));
                }
                return r._n.addMutationBatch(t, i, s, e);
              });
            }).then(function (t) ***REMOVED***
              return (t.applyToLocalDocumentSet(n), ***REMOVED***
                batchId: t.batchId,
                changes: n
              });
            });
          })(r.localStore, e)]);
        case 2:
          return (i = u.sent(), r.sharedClientState.addPendingMutation(i.batchId), (function (t, e, n) ***REMOVED***
            var r = t.xo[t.currentUser.toKey()];
            (r || (r = new Ke(M)), r = r.insert(e, n), t.xo[t.currentUser.toKey()] = r);
          })(r, i.batchId, n), [4, /*yield*/
          Qs(r, i.changes)]);
        case 3:
          return (u.sent(), [4, /*yield*/
          Yo(r.remoteStore)]);
        case 4:
          return (u.sent(), [3, /*break*/
          6]);
        case 5:
          return (o = u.sent(), s = ss(o, "Failed to persist write"), n.reject(s), [3, /*break*/
          6]);
        case 6:
          return [2];
      }
    });
  });
}
/**
* Applies one remote event to the sync engine, notifying any views of the
* changes, and releasing any pending mutation batches that would become
* visible because of the snapshot version the remote event contains.
*/
function Rs(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r;
    return _tslib.__generator(this, function (i) ***REMOVED***
      switch (i.label) ***REMOVED***
        case 0:
          (n = O(t), i.label = 1);
        case 1:
          return (i.trys.push([1, 4, , 6]), [4, /*yield*/
          Ui(n.localStore, e)]);
        case 2:
          return (r = i.sent(), // Update `receivedDocument` as appropriate for any limbo targets.
          e.targetChanges.forEach(function (t, e) ***REMOVED***
            var r = n.Co.get(e);
            r && // Since this is a limbo resolution lookup, it's for a single document
            // and it could be added, modified, or removed, but not a combination.
            (R(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1), t.addedDocuments.size > 0 ? r.bo = !0 : t.modifiedDocuments.size > 0 ? R(r.bo) : t.removedDocuments.size > 0 && (R(r.bo), r.bo = !1));
          }), [4, /*yield*/
          Qs(n, r, e)]);
        case 3:
          // Update `receivedDocument` as appropriate for any limbo targets.
          return (i.sent(), [3, /*break*/
          6]);
        case 4:
          return [4, /*yield*/
          hi(i.sent())];
        case 5:
          return (i.sent(), [3, /*break*/
          6]);
        case 6:
          return [2];
      }
    });
  });
}
/**
* Applies an OnlineState change to the sync engine and notifies any views of
* the change.
*/
function Os(t, e, n) ***REMOVED***
  var r = O(t);
  // If we are the secondary client, we explicitly ignore the remote store's
  // online state (the local client may go offline, even though the primary
  // tab remains online) and only apply the primary tab's online state from
  // SharedClientState.
  if (r.isPrimaryClient && 0 === /*RemoteStore*/
  n || !r.isPrimaryClient && 1 === /*SharedClientState*/
  n) ***REMOVED***
    var i = [];
    (r.Po.forEach(function (t, n) ***REMOVED***
      var r = n.view.zr(e);
      r.snapshot && i.push(r.snapshot);
    }), (function (t, e) ***REMOVED***
      var n = O(t);
      n.onlineState = e;
      var r = !1;
      (n.queries.forEach(function (t, n) ***REMOVED***
        for (var i = 0, o = n.listeners; i < o.length; i++) ***REMOVED***
          // Run global snapshot listeners if a consistent snapshot has been emitted.
          o[i].zr(e) && (r = !0);
        }
      }), r && vs(n));
    })(r.eventManager, e), i.length && r.vo._r(i), r.onlineState = e, r.isPrimaryClient && r.sharedClientState.setOnlineState(e));
  }
}
/**
* Rejects the listen for the given targetID. This can be triggered by the
* backend for any active target.
*
* @param syncEngine - The sync engine implementation.
* @param targetId - The targetID corresponds to one previously initiated by the
* user as part of TargetData passed to listen() on RemoteStore.
* @param err - A description of the condition that has forced the rejection.
* Nearly always this will be an indication that the user is no longer
* authorized to see the data matching the target.
*/
function Ls(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r, i, o, s, u, a;
    return _tslib.__generator(this, function (c) ***REMOVED***
      switch (c.label) ***REMOVED***
        case 0:
          // PORTING NOTE: Multi-tab only.
          return ((r = O(t)).sharedClientState.updateQueryState(e, "rejected", n), i = r.Co.get(e), (o = i && i.key) ? (s = (s = new Ke(st.comparator)).insert(o, _t.newNoDocument(o, U.min())), u = en().add(o), a = new on(U.min(), /*targetChanges=*/
          new Map(), /*targetMismatches=*/
          new ze(M), s, u), [4, /*yield*/
          Rs(r, a)]) : [3, /*break*/
          2]);
        case 1:
          return (c.sent(), // Since this query failed, we won't want to manually unlisten to it.
          // We only remove it from bookkeeping after we successfully applied the
          // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
          // this query when the RemoteStore restarts the Watch stream, which should
          // re-trigger the target failure.
          r.Do = r.Do.remove(o), r.Co.delete(e), Gs(r), [3, /*break*/
          4]);
        case 2:
          return [4, /*yield*/
          Gi(r.localStore, e, /*keepPersistedTargetData*/
          !1).then(function () ***REMOVED***
            return Us(r, e, n);
          }).catch(hi)];
        case 3:
          (c.sent(), c.label = 4);
        case 4:
          return [2];
      }
    });
  });
}
function Ps(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i;
    return _tslib.__generator(this, function (o) ***REMOVED***
      switch (o.label) ***REMOVED***
        case 0:
          (n = O(t), r = e.batch.batchId, o.label = 1);
        case 1:
          return (o.trys.push([1, 4, , 6]), [4, /*yield*/
          Vi(n.localStore, e)]);
        case 2:
          return (i = o.sent(), // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught
          // up), so we raise user callbacks first so that they consistently happen
          // before listen events.
          qs(n, r, /*error=*/
          null), Vs(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), [4, /*yield*/
          Qs(n, i)]);
        case 3:
          // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught
          // up), so we raise user callbacks first so that they consistently happen
          // before listen events.
          return (o.sent(), [3, /*break*/
          6]);
        case 4:
          return [4, /*yield*/
          hi(o.sent())];
        case 5:
          return (o.sent(), [3, /*break*/
          6]);
        case 6:
          return [2];
      }
    });
  });
}
function Ms(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r, i;
    return _tslib.__generator(this, function (o) ***REMOVED***
      switch (o.label) ***REMOVED***
        case 0:
          (r = O(t), o.label = 1);
        case 1:
          return (o.trys.push([1, 4, , 6]), [4, /*yield*/
          (function (t, e) ***REMOVED***
            var n = O(t);
            return n.persistence.runTransaction("Reject batch", "readwrite-primary", function (t) ***REMOVED***
              var r;
              return n._n.lookupMutationBatch(t, e).next(function (e) ***REMOVED***
                return (R(null !== e), r = e.keys(), n._n.removeMutationBatch(t, e));
              }).next(function () ***REMOVED***
                return n._n.performConsistencyCheck(t);
              }).next(function () ***REMOVED***
                return n.Mn.pn(t, r);
              });
            });
          })(r.localStore, e)]);
        case 2:
          return (i = o.sent(), // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught up),
          // so we raise user callbacks first so that they consistently happen before
          // listen events.
          qs(r, e, n), Vs(r, e), r.sharedClientState.updateMutationState(e, "rejected", n), [4, /*yield*/
          Qs(r, i)]);
        case 3:
          // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught up),
          // so we raise user callbacks first so that they consistently happen before
          // listen events.
          return (o.sent(), [3, /*break*/
          6]);
        case 4:
          return [4, /*yield*/
          hi(o.sent())];
        case 5:
          return (o.sent(), [3, /*break*/
          6]);
        case 6:
          return [2];
      }
    });
  });
}
/**
* Registers a user callback that resolves when all pending mutations at the moment of calling
* are acknowledged .
*/
function Fs(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i, o, s;
    return _tslib.__generator(this, function (u) ***REMOVED***
      switch (u.label) ***REMOVED***
        case 0:
          (jo((n = O(t)).remoteStore) || N("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), u.label = 1);
        case 1:
          return (u.trys.push([1, 3, , 4]), [4, /*yield*/
          (function (t) ***REMOVED***
            var e = O(t);
            return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (t) ***REMOVED***
              return e._n.getHighestUnacknowledgedBatchId(t);
            });
          })(n.localStore)]);
        case 2:
          return -1 === (r = u.sent()) ? [2, /*return*/
          void e.resolve()] : ((i = n.Fo.get(r) || []).push(e), n.Fo.set(r, i), [3, /*break*/
          4]);
        case 3:
          return (o = u.sent(), s = ss(o, "Initialization of waitForPendingWrites() operation failed"), e.reject(s), [3, /*break*/
          4]);
        case 4:
          return [2];
      }
    });
  });
}
/**
* Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
* if there are any.
*/
function Vs(t, e) ***REMOVED***
  ((t.Fo.get(e) || []).forEach(function (t) ***REMOVED***
    t.resolve();
  }), t.Fo.delete(e));
}
function qs(t, e, n) ***REMOVED***
  var r = O(t), i = r.xo[r.currentUser.toKey()];
  // NOTE: Mutations restored from persistence won't have callbacks, so it's
  // okay for there to be no callback for this ID.
  if (i) ***REMOVED***
    var o = i.get(e);
    (o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.xo[r.currentUser.toKey()] = i);
  }
}
function Us(t, e, n) ***REMOVED***
  (void 0 === n && (n = null), t.sharedClientState.removeLocalQueryTarget(e));
  for (var r = 0, i = t.Vo.get(e); r < i.length; r++) ***REMOVED***
    var o = i[r];
    (t.Po.delete(o), n && t.vo.Mo(o, n));
  }
  (t.Vo.delete(e), t.isPrimaryClient && t.No.Zn(e).forEach(function (e) ***REMOVED***
    t.No.containsKey(e) || // We removed the last reference for this key
    Bs(t, e);
  }));
}
function Bs(t, e) ***REMOVED***
  t.So.delete(e.path.canonicalString());
  // It's possible that the target already got removed because the query failed. In that case,
  // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
  var n = t.Do.get(e);
  null !== n && (Fo(t.remoteStore, n), t.Do = t.Do.remove(e), t.Co.delete(n), Gs(t));
}
function js(t, e, n) ***REMOVED***
  for (var r = 0, i = n; r < i.length; r++) ***REMOVED***
    var o = i[r];
    o instanceof _s ? (t.No.addReference(o.key, e), Ks(t, o)) : o instanceof Es ? (N("SyncEngine", "Document no longer in limbo: " + o.key), t.No.removeReference(o.key, e), t.No.containsKey(o.key) || // We removed the last reference for this key
    Bs(t, o.key)) : C();
  }
}
function Ks(t, e) ***REMOVED***
  var n = e.key, r = n.path.canonicalString();
  t.Do.get(n) || t.So.has(r) || (N("SyncEngine", "New document in limbo: " + n), t.So.add(r), Gs(t));
}
/**
* Starts listens for documents in limbo that are enqueued for resolution,
* subject to a maximum number of concurrent resolutions.
*
* Without bounding the number of concurrent resolutions, the server can fail
* with "resource exhausted" errors which can lead to pathological client
* behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
*/
function Gs(t) ***REMOVED***
  for (; t.So.size > 0 && t.Do.size < t.maxConcurrentLimboResolutions; ) ***REMOVED***
    var e = t.So.values().next().value;
    t.So.delete(e);
    var n = new st(Q.fromString(e)), r = t.ko.next();
    (t.Co.set(r, new Ds(n)), t.Do = t.Do.insert(n, r), Mo(t.remoteStore, new Cr(Jt(Qt(n.path)), r, 2, /*LimboResolution*/
    _.o)));
  }
}
function Qs(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r, i, o, s;
    return _tslib.__generator(this, function (u) ***REMOVED***
      switch (u.label) ***REMOVED***
        case 0:
          return (r = O(t), i = [], o = [], s = [], r.Po.isEmpty() ? [3, /*break*/
          3] : (r.Po.forEach(function (t, u) ***REMOVED***
            s.push(r.$o(u, e, n).then(function (t) ***REMOVED***
              if (t) ***REMOVED***
                (r.isPrimaryClient && r.sharedClientState.updateQueryState(u.targetId, t.fromCache ? "not-current" : "current"), i.push(t));
                var e = Oi.Pn(u.targetId, t);
                o.push(e);
              }
            }));
          }), [4, /*yield*/
          Promise.all(s)]));
        case 1:
          return (u.sent(), r.vo._r(i), [4, /*yield*/
          (function (t, e) ***REMOVED***
            return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
              var n, r, i, o, s, u, a, c, h;
              return _tslib.__generator(this, function (f) ***REMOVED***
                switch (f.label) ***REMOVED***
                  case 0:
                    (n = O(t), f.label = 1);
                  case 1:
                    return (f.trys.push([1, 3, , 4]), [4, /*yield*/
                    n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (t) ***REMOVED***
                      return mr.forEach(e, function (e) ***REMOVED***
                        return mr.forEach(e.bn, function (r) ***REMOVED***
                          return n.persistence.referenceDelegate.addReference(t, e.targetId, r);
                        }).next(function () ***REMOVED***
                          return mr.forEach(e.vn, function (r) ***REMOVED***
                            return n.persistence.referenceDelegate.removeReference(t, e.targetId, r);
                          });
                        });
                      });
                    })]);
                  case 2:
                    return (f.sent(), [3, /*break*/
                    4]);
                  case 3:
                    if (!_r(r = f.sent())) throw r;
                    // If `notifyLocalViewChanges` fails, we did not advance the sequence
                    // number for the documents that were included in this transaction.
                    // This might trigger them to be deleted earlier than they otherwise
                    // would have, but it should not invalidate the integrity of the data.
                    return (N("LocalStore", "Failed to update sequence numbers: " + r), [3, /*break*/
                    4]);
                  case 4:
                    for ((i = 0, o = e); i < o.length; i++) (s = o[i], u = s.targetId, s.fromCache || (a = n.Fn.get(u), c = a.snapshotVersion, h = a.withLastLimboFreeSnapshotVersion(c), // Advance the last limbo free snapshot version
                    n.Fn = n.Fn.insert(u, h)));
                    return [2];
                }
              });
            });
          })(r.localStore, o)]);
        case 2:
          (u.sent(), u.label = 3);
        case 3:
          return [2];
      }
    });
  });
}
function zs(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r;
    return _tslib.__generator(this, function (i) ***REMOVED***
      switch (i.label) ***REMOVED***
        case 0:
          return (n = O(t)).currentUser.isEqual(e) ? [3, /*break*/
          3] : (N("SyncEngine", "User change. New user:", e.toKey()), [4, /*yield*/
          Fi(n.localStore, e)]);
        case 1:
          return (r = i.sent(), n.currentUser = e, // Fails tasks waiting for pending writes requested by previous user.
          (function (t, e) ***REMOVED***
            (t.Fo.forEach(function (t) ***REMOVED***
              t.forEach(function (t) ***REMOVED***
                t.reject(new T(E.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
              });
            }), t.Fo.clear());
          })(n), // TODO(b/114226417): Consider calling this only in the primary tab.
          n.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds), [4, /*yield*/
          Qs(n, r.Ln)]);
        case 2:
          (i.sent(), i.label = 3);
        case 3:
          return [2];
      }
    });
  });
}
function Ws(t, e) ***REMOVED***
  var n = O(t), r = n.Co.get(e);
  if (r && r.bo) return en().add(r.key);
  var i = en(), o = n.Vo.get(e);
  if (!o) return i;
  for (var s = 0, u = o; s < u.length; s++) ***REMOVED***
    var a = u[s], c = n.Po.get(a);
    i = i.unionWith(c.view.wo);
  }
  return i;
}
/**
* Reconcile the list of synced documents in an existing view with those
* from persistence.
*/
function Hs(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i;
    return _tslib.__generator(this, function (o) ***REMOVED***
      switch (o.label) ***REMOVED***
        case 0:
          return [4, /*yield*/
          Qi((n = O(t)).localStore, e.query, /*usePreviousResults=*/
          !0)];
        case 1:
          return (r = o.sent(), i = e.view.Ao(r), [2, /*return*/
          (n.isPrimaryClient && js(n, e.targetId, i.To), i)]);
      }
    });
  });
}
/**
* Retrieves newly changed documents from remote document cache and raises
* snapshots if needed.
*/
// PORTING NOTE: Multi-Tab only.
function Ys(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var e;
    return _tslib.__generator(this, function (n) ***REMOVED***
      return [2, /*return*/
      Wi((e = O(t)).localStore).then(function (t) ***REMOVED***
        return Qs(e, t);
      })];
    });
  });
}
/** Applies a mutation state to an existing batch.*/
// PORTING NOTE: Multi-Tab only.
function Xs(t, e, n, r) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var i, o;
    return _tslib.__generator(this, function (s) ***REMOVED***
      switch (s.label) ***REMOVED***
        case 0:
          return [4, /*yield*/
          (function (t, e) ***REMOVED***
            var n = O(t), r = O(n._n);
            return n.persistence.runTransaction("Lookup mutation documents", "readonly", function (t) ***REMOVED***
              return r.jt(t, e).next(function (e) ***REMOVED***
                return e ? n.Mn.pn(t, e) : mr.resolve(null);
              });
            });
          })((i = O(t)).localStore, e)];
        case 1:
          return null === (o = s.sent()) ? [3, /*break*/
          6] : "pending" !== n ? [3, /*break*/
          3] : [4, /*yield*/
          Yo(i.remoteStore)];
        case 2:
          // If we are the primary client, we need to send this write to the
          // backend. Secondary clients will ignore these writes since their remote
          // connection is disabled.
          return (s.sent(), [3, /*break*/
          4]);
        case 3:
          ("acknowledged" === n || "rejected" === n ? // NOTE: Both these methods are no-ops for batches that originated from
          // other clients.
          (qs(i, e, r || null), Vs(i, e), (function (t, e) ***REMOVED***
            O(O(t)._n).Gt(e);
          })(i.localStore, e)) : C(), s.label = 4);
        case 4:
          return [4, /*yield*/
          Qs(i, o)];
        case 5:
          return (s.sent(), [3, /*break*/
          7]);
        case 6:
          // A throttled tab may not have seen the mutation before it was completed
          // and removed from the mutation queue, in which case we won't have cached
          // the affected documents. In this case we can safely ignore the update
          // since that means we didn't apply the mutation locally at all (if we
          // had, we would have cached the affected documents), and so we will just
          // see any resulting document changes via normal remote document updates
          // as applicable.
          (N("SyncEngine", "Cannot apply mutation batch with id: " + e), s.label = 7);
        case 7:
          return [2];
      }
    });
  });
}
/** Applies a query target change from a different tab.*/
// PORTING NOTE: Multi-Tab only.
function $s(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i, o, s, u, a, c;
    return _tslib.__generator(this, function (h) ***REMOVED***
      switch (h.label) ***REMOVED***
        case 0:
          return (ru(n = O(t)), iu(n), !0 !== e || !0 === n.Oo ? [3, /*break*/
          3] : (r = n.sharedClientState.getAllActiveQueryTargets(), [4, /*yield*/
          Js(n, r.toArray())]));
        case 1:
          return (i = h.sent(), n.Oo = !0, [4, /*yield*/
          ns(n.remoteStore, !0)]);
        case 2:
          for ((h.sent(), o = 0, s = i); o < s.length; o++) (u = s[o], Mo(n.remoteStore, u));
          return [3, /*break*/
          7];
        case 3:
          return !1 !== e || !1 === n.Oo ? [3, /*break*/
          7] : (a = [], c = Promise.resolve(), n.Vo.forEach(function (t, e) ***REMOVED***
            (n.sharedClientState.isLocalQueryTarget(e) ? a.push(e) : c = c.then(function () ***REMOVED***
              return (Us(n, e), Gi(n.localStore, e, /*keepPersistedTargetData=*/
              !0));
            }), Fo(n.remoteStore, e));
          }), [4, /*yield*/
          c]);
        case 4:
          return (h.sent(), [4, /*yield*/
          Js(n, a)]);
        case 5:
          return (h.sent(), // PORTING NOTE: Multi-Tab only.
          (function (t) ***REMOVED***
            var e = O(t);
            (e.Co.forEach(function (t, n) ***REMOVED***
              Fo(e.remoteStore, n);
            }), e.No.ts(), e.Co = new Map(), e.Do = new Ke(st.comparator));
          })(n), n.Oo = !1, [4, /*yield*/
          ns(n.remoteStore, !1)]);
        case 6:
          (h.sent(), h.label = 7);
        case 7:
          return [2];
      }
    });
  });
}
function Js(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i, o, s, u, a, c, h, f, l, d, p, y;
    return _tslib.__generator(this, function (v) ***REMOVED***
      switch (v.label) ***REMOVED***
        case 0:
          (n = O(t), r = [], i = [], o = 0, s = e, v.label = 1);
        case 1:
          return o < s.length ? (u = s[o], a = void 0, (c = n.Vo.get(u)) && 0 !== c.length ? [4, /*yield*/
          Ki(n.localStore, Jt(c[0]))] : [3, /*break*/
          7]) : [3, /*break*/
          13];
        case 2:
          // For queries that have a local View, we fetch their current state
          // from LocalStore (as the resume token and the snapshot version
          // might have changed) and reconcile their views with the persisted
          // state (the list of syncedDocuments may have gotten out of sync).
          (a = v.sent(), h = 0, f = c, v.label = 3);
        case 3:
          return h < f.length ? (l = f[h], d = n.Po.get(l), [4, /*yield*/
          Hs(n, d)]) : [3, /*break*/
          6];
        case 4:
          ((p = v.sent()).snapshot && i.push(p.snapshot), v.label = 5);
        case 5:
          return (h++, [3, /*break*/
          3]);
        case 6:
          return [3, /*break*/
          11];
        case 7:
          return [4, /*yield*/
          zi(n.localStore, u)];
        case 8:
          return (y = v.sent(), [4, /*yield*/
          Ki(n.localStore, y)]);
        case 9:
          return (a = v.sent(), [4, /*yield*/
          ks(n, Zs(y), u, /*current=*/
          !1)]);
        case 10:
          (v.sent(), v.label = 11);
        case 11:
          (r.push(a), v.label = 12);
        case 12:
          return (o++, [3, /*break*/
          1]);
        case 13:
          return [2, /*return*/
          (n.vo._r(i), r)];
      }
    });
  });
}
/**
* Creates a `Query` object from the specified `Target`. There is no way to
* obtain the original `Query`, so we synthesize a `Query` from the `Target`
* object.
*
* The synthesized result might be different from the original `Query`, but
* since the synthesized `Query` should return the same results as the
* original one (only the presentation of results might differ), the potential
* difference will not cause issues.
*/
// PORTING NOTE: Multi-Tab only.
function Zs(t) ***REMOVED***
  return Gt(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", /*First*/
  t.startAt, t.endAt);
}
/** Returns the IDs of the clients that are currently active.*/
// PORTING NOTE: Multi-Tab only.
function tu(t) ***REMOVED***
  var e = O(t);
  return O(O(e.localStore).persistence).fn();
}
/** Applies a query target change from a different tab.*/
// PORTING NOTE: Multi-Tab only.
function eu(t, e, n, r) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var i, o, s;
    return _tslib.__generator(this, function (u) ***REMOVED***
      switch (u.label) ***REMOVED***
        case 0:
          return (i = O(t)).Oo ? // If we receive a target state notification via WebStorage, we are
          // either already secondary or another tab has taken the primary lease.
          (N("SyncEngine", "Ignoring unexpected query state notification."), [3, /*break*/
          8]) : [3, /*break*/
          1];
        case 1:
          if (!i.Vo.has(e)) return [3, /*break*/
          8];
          switch (n) ***REMOVED***
            case "current":
            case "not-current":
              return [3, /*break*/
              2];
            case "rejected":
              return [3, /*break*/
              5];
          }
          return [3, /*break*/
          7];
        case 2:
          return [4, /*yield*/
          Wi(i.localStore)];
        case 3:
          return (o = u.sent(), s = on.createSynthesizedRemoteEventForCurrentChange(e, "current" === n), [4, /*yield*/
          Qs(i, o, s)]);
        case 4:
          return (u.sent(), [3, /*break*/
          8]);
        case 5:
          return [4, /*yield*/
          Gi(i.localStore, e, /*keepPersistedTargetData*/
          !0)];
        case 6:
          return (u.sent(), Us(i, e, r), [3, /*break*/
          8]);
        case 7:
          (C(), u.label = 8);
        case 8:
          return [2];
      }
    });
  });
}
/** Adds or removes Watch targets for queries from different tabs.*/
function nu(t, e, n) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var r, i, o, s, u, a, c, h, f, l;
    return _tslib.__generator(this, function (d) ***REMOVED***
      switch (d.label) ***REMOVED***
        case 0:
          if (!(r = ru(t)).Oo) return [3, /*break*/
          10];
          (i = 0, o = e, d.label = 1);
        case 1:
          return i < o.length ? (s = o[i], r.Vo.has(s) ? // A target might have been added in a previous attempt
          (N("SyncEngine", "Adding an already active target " + s), [3, /*break*/
          5]) : [4, /*yield*/
          zi(r.localStore, s)]) : [3, /*break*/
          6];
        case 2:
          return (u = d.sent(), [4, /*yield*/
          Ki(r.localStore, u)]);
        case 3:
          return (a = d.sent(), [4, /*yield*/
          ks(r, Zs(u), a.targetId, /*current=*/
          !1)]);
        case 4:
          (d.sent(), Mo(r.remoteStore, a), d.label = 5);
        case 5:
          return (i++, [3, /*break*/
          1]);
        case 6:
          (c = function (t) ***REMOVED***
            return _tslib.__generator(this, function (e) ***REMOVED***
              switch (e.label) ***REMOVED***
                case 0:
                  return r.Vo.has(t) ? [4, /*yield*/
                  Gi(r.localStore, t, /*keepPersistedTargetData*/
                  !1).then(function () ***REMOVED***
                    (Fo(r.remoteStore, t), Us(r, t));
                  }).catch(hi)] : [3, /*break*/
                  2];
                case 1:
                  // Release queries that are still active.
                  (e.sent(), e.label = 2);
                case 2:
                  return [2];
              }
            });
          }, h = 0, f = n, d.label = 7);
        case 7:
          return h < f.length ? (l = f[h], [5, /*yield**/
          c(l)]) : [3, /*break*/
          10];
        case 8:
          (d.sent(), d.label = 9);
        case 9:
          return (h++, [3, /*break*/
          7]);
        case 10:
          return [2];
      }
    });
  });
}
function ru(t) ***REMOVED***
  var e = O(t);
  return (e.remoteStore.remoteSyncer.applyRemoteEvent = Rs.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Ws.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = Ls.bind(null, e), e.vo._r = ps.bind(null, e.eventManager), e.vo.Mo = ys.bind(null, e.eventManager), e);
}
function iu(t) ***REMOVED***
  var e = O(t);
  return (e.remoteStore.remoteSyncer.applySuccessfulWrite = Ps.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = Ms.bind(null, e), e);
}
function ou(t, e, n) ***REMOVED***
  var r = O(t);
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  (function (t, e, n) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var r, i, o, s, u, a;
      return _tslib.__generator(this, function (c) ***REMOVED***
        switch (c.label) ***REMOVED***
          case 0:
            return (c.trys.push([0, 14, , 15]), [4, /*yield*/
            e.getMetadata()]);
          case 1:
            return (r = c.sent(), [4, /*yield*/
            (function (t, e) ***REMOVED***
              var n = O(t), r = bn(e.createTime);
              return n.persistence.runTransaction("hasNewerBundle", "readonly", function (t) ***REMOVED***
                return n.Qe.getBundleMetadata(t, e.id);
              }).then(function (t) ***REMOVED***
                return !!t && t.createTime.compareTo(r) >= 0;
              });
            })(t.localStore, r)]);
          case 2:
            return c.sent() ? [4, /*yield*/
            e.close()] : [3, /*break*/
            4];
          case 3:
            return [2, /*return*/
            (c.sent(), void n._completeWith((function (t) ***REMOVED***
              return ***REMOVED***
                taskState: "Success",
                documentsLoaded: t.totalDocuments,
                bytesLoaded: t.totalBytes,
                totalDocuments: t.totalDocuments,
                totalBytes: t.totalBytes
              ***REMOVED***
            })(r)))];
          case 4:
            return (n._updateProgress(Is(r)), i = new bs(r, t.localStore, e.R), [4, /*yield*/
            e.Lo()]);
          case 5:
            (o = c.sent(), c.label = 6);
          case 6:
            return o ? [4, /*yield*/
            i.oo(o)] : [3, /*break*/
            10];
          case 7:
            return ((s = c.sent()) && n._updateProgress(s), [4, /*yield*/
            e.Lo()]);
          case 8:
            (o = c.sent(), c.label = 9);
          case 9:
            return [3, /*break*/
            6];
          case 10:
            return [4, /*yield*/
            i.complete()];
          case 11:
            // TODO(b/160876443): This currently raises snapshots with
            // `fromCache=false` if users already listen to some queries and bundles
            // has newer version.
            return (u = c.sent(), [4, /*yield*/
            Qs(t, u.wn, /*remoteEvent*/
            void 0)]);
          case 12:
            // Save metadata, so loading the same bundle will skip.
            // TODO(b/160876443): This currently raises snapshots with
            // `fromCache=false` if users already listen to some queries and bundles
            // has newer version.
            return (c.sent(), [4, /*yield*/
            (function (t, e) ***REMOVED***
              var n = O(t);
              return n.persistence.runTransaction("Save bundle", "readwrite", function (t) ***REMOVED***
                return n.Qe.saveBundleMetadata(t, e);
              });
            })(t.localStore, r)]);
          case 13:
            // TODO(b/160876443): This currently raises snapshots with
            // `fromCache=false` if users already listen to some queries and bundles
            // has newer version.
            // Save metadata, so loading the same bundle will skip.
            return (c.sent(), n._completeWith(u.progress), [3, /*break*/
            15]);
          case 14:
            return (k("SyncEngine", "Loading bundle failed with " + (a = c.sent())), n._failWith(a), [3, /*break*/
            15]);
          case 15:
            return [2];
        }
      });
    });
  })(/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  /**
  * Provides all components needed for Firestore with in-memory persistence.
  * Uses EagerGC garbage collection.
  */
  r, e, n).then(function () ***REMOVED***
    r.sharedClientState.notifyBundleLoaded();
  });
}
var su = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    this.synchronizeTabs = !1;
  }
  return (t.prototype.initialize = function (t) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (e) ***REMOVED***
        switch (e.label) ***REMOVED***
          case 0:
            return (this.R = Do(t.databaseInfo.databaseId), this.sharedClientState = this.Bo(t), this.persistence = this.qo(t), [4, /*yield*/
            this.persistence.start()]);
          case 1:
            return (e.sent(), this.gcScheduler = this.Uo(t), this.localStore = this.Qo(t), [2]);
        }
      });
    });
  }, t.prototype.Uo = function (t) ***REMOVED***
    return null;
  }, t.prototype.Qo = function (t) ***REMOVED***
    return Mi(this.persistence, new Li(), t.initialUser, this.R);
  }, t.prototype.qo = function (t) ***REMOVED***
    return new io(so.bs, this.R);
  }, t.prototype.Bo = function (t) ***REMOVED***
    return new go();
  }, t.prototype.terminate = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (t) ***REMOVED***
        switch (t.label) ***REMOVED***
          case 0:
            return (this.gcScheduler && this.gcScheduler.stop(), [4, /*yield*/
            this.sharedClientState.shutdown()]);
          case 1:
            return (t.sent(), [4, /*yield*/
            this.persistence.shutdown()]);
          case 2:
            return (t.sent(), [2]);
        }
      });
    });
  }, t);
})(), uu = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r) ***REMOVED***
    var i = this;
    return ((i = t.call(this) || this).Ko = e, i.cacheSizeBytes = n, i.forceOwnership = r, i.synchronizeTabs = !1, i);
  }
  return (_tslib.__extends(e, t), e.prototype.initialize = function (e) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (n) ***REMOVED***
        switch (n.label) ***REMOVED***
          case 0:
            return [4, /*yield*/
            t.prototype.initialize.call(this, e)];
          case 1:
            return (n.sent(), [4, /*yield*/
            Hi(this.localStore)]);
          case 2:
            return (n.sent(), [4, /*yield*/
            this.Ko.initialize(this, e)]);
          case 3:
            // Enqueue writes from a previous session
            return (n.sent(), [4, /*yield*/
            iu(this.Ko.syncEngine)]);
          case 4:
            // Enqueue writes from a previous session
            return (n.sent(), [4, /*yield*/
            Yo(this.Ko.remoteStore)]);
          case 5:
            return (n.sent(), [2]);
        }
      });
    });
  }, e.prototype.Qo = function (t) ***REMOVED***
    return Mi(this.persistence, new Li(), t.initialUser, this.R);
  }, e.prototype.Uo = function (t) ***REMOVED***
    var e = this.persistence.referenceDelegate.garbageCollector;
    return new di(e, t.asyncQueue);
  }, e.prototype.qo = function (t) ***REMOVED***
    var e = xi(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? $r.withCacheSize(this.cacheSizeBytes) : $r.DEFAULT;
    return new Ni(this.synchronizeTabs, e, t.clientId, n, t.asyncQueue, To(), So(), this.R, this.sharedClientState, !!this.forceOwnership);
  }, e.prototype.Bo = function (t) ***REMOVED***
    return new go();
  }, e);
})(su), au = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, e, n, /*forceOwnership=*/
    !1) || this).Ko = e, r.cacheSizeBytes = n, r.synchronizeTabs = !0, r);
  }
  return (_tslib.__extends(e, t), e.prototype.initialize = function (e) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var n, r = this;
      return _tslib.__generator(this, function (i) ***REMOVED***
        switch (i.label) ***REMOVED***
          case 0:
            return [4, /*yield*/
            t.prototype.initialize.call(this, e)];
          case 1:
            return (i.sent(), n = this.Ko.syncEngine, this.sharedClientState instanceof mo ? (this.sharedClientState.syncEngine = ***REMOVED***
              ui: Xs.bind(null, n),
              ai: eu.bind(null, n),
              hi: nu.bind(null, n),
              fn: tu.bind(null, n),
              ci: Ys.bind(null, n)
            }, [4, /*yield*/
            this.sharedClientState.start()]) : [3, /*break*/
            3]);
          case 2:
            (i.sent(), i.label = 3);
          case 3:
            // NOTE: This will immediately call the listener, so we make sure to
            // set it after localStore / remoteStore are started.
            return [4, /*yield*/
            this.persistence.He(function (t) ***REMOVED***
              return _tslib.__awaiter(r, void 0, void 0, function () ***REMOVED***
                return _tslib.__generator(this, function (e) ***REMOVED***
                  switch (e.label) ***REMOVED***
                    case 0:
                      return [4, /*yield*/
                      $s(this.Ko.syncEngine, t)];
                    case 1:
                      return (e.sent(), this.gcScheduler && (t && !this.gcScheduler.started ? this.gcScheduler.start(this.localStore) : t || this.gcScheduler.stop()), [2]);
                  }
                });
              });
            })];
          case 4:
            // NOTE: This will immediately call the listener, so we make sure to
            // set it after localStore / remoteStore are started.
            return (i.sent(), [2]);
        }
      });
    });
  }, e.prototype.Bo = function (t) ***REMOVED***
    var e = To();
    if (!mo.yt(e)) throw new T(E.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
    var n = xi(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey);
    return new mo(e, t.asyncQueue, n, t.clientId, t.initialUser);
  }, e);
})(uu), cu = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***}
  return (t.prototype.initialize = function (t, e) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var n = this;
      return _tslib.__generator(this, function (r) ***REMOVED***
        switch (r.label) ***REMOVED***
          case 0:
            return this.localStore ? [3, /*break*/
            2] : (this.localStore = t.localStore, this.sharedClientState = t.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(e, /*startAsPrimary=*/
            !t.synchronizeTabs), this.sharedClientState.onlineStateHandler = function (t) ***REMOVED***
              return Os(n.syncEngine, t, 1);
            }, this.remoteStore.remoteSyncer.handleCredentialChange = zs.bind(null, this.syncEngine), [4, /*yield*/
            ns(this.remoteStore, this.syncEngine.isPrimaryClient)]);
          case 1:
            (r.sent(), r.label = 2);
          case 2:
            return [2];
        }
      });
    });
  }, t.prototype.createEventManager = function (t) ***REMOVED***
    return new fs();
  }, t.prototype.createDatastore = function (t) ***REMOVED***
    var e, n = Do(t.databaseInfo.databaseId), r = (e = t.databaseInfo, new Eo(e));
    /** Return the Platform-specific connectivity monitor.*/
    return (function (t, e, n) ***REMOVED***
      return new Co(t, e, n);
    })(t.credentials, r, n);
  }, t.prototype.createRemoteStore = function (t) ***REMOVED***
    var e, n, r, i, o, s = this;
    return (e = this.localStore, n = this.datastore, r = t.asyncQueue, i = function (t) ***REMOVED***
      return Os(s.syncEngine, t, 0);
    }, o = bo.yt() ? new bo() : new wo(), new Oo(e, n, r, i, o));
  }, t.prototype.createSyncEngine = function (t, e) ***REMOVED***
    return (function (t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o, s) ***REMOVED***
      var u = new Ns(t, e, n, r, i, o);
      return (s && (u.Oo = !0), u);
    })(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e);
  }, t.prototype.terminate = function () ***REMOVED***
    return (function (t) ***REMOVED***
      return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
        var e;
        return _tslib.__generator(this, function (n) ***REMOVED***
          switch (n.label) ***REMOVED***
            case 0:
              return (e = O(t), N("RemoteStore", "RemoteStore shutting down."), e.$r.add(5), [4, /*yield*/
              Po(e)]);
            case 1:
              return (n.sent(), e.Lr.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
              // triggering spurious listener events with cached data, etc.
              e.Br.set("Unknown"), [2]);
          }
        });
      });
    })(this.remoteStore);
  }, t);
})();
/**
* Provides all components needed for Firestore with IndexedDB persistence.
*/
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* How many bytes to read each time when `ReadableStreamReader.read()` is
* called. Only applicable for byte streams that we control (e.g. those backed
* by an UInt8Array).
*/
/**
* Builds a `ByteStreamReader` from a UInt8Array.
* @param source - The data source to use.
* @param bytesPerRead - How many bytes each `read()` from the returned reader
*        will read.
*/
function hu(t, e) ***REMOVED***
  void 0 === e && (e = 10240);
  var n = 0;
  return ***REMOVED***
    read: function () ***REMOVED***
      return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
        var r;
        return _tslib.__generator(this, function (i) ***REMOVED***
          return n < t.byteLength ? (r = ***REMOVED***
            value: t.slice(n, n + e),
            done: !1
          }, [2, /*return*/
          (n += e, r)]) : [2, /*return*/
          ***REMOVED***
            done: !0
          }];
        });
      });
    },
    cancel: function () ***REMOVED***
      return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
        return _tslib.__generator(this, function (t) ***REMOVED***
          return [2];
        });
      });
    },
    releaseLock: function () ***REMOVED***},
    closed: Promise.reject("unimplemented")
  ***REMOVED***
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/*
* A wrapper implementation of Observer<T> that will dispatch events
* asynchronously. To allow immediate silencing, a mute call is added which
* causes events scheduled to no longer be raised.
*/
var fu = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.observer = t, /**
    * When set to true, will not raise future events. Necessary to deal with
    * async detachment of listener.
    */
    this.muted = !1);
  }
  return (t.prototype.next = function (t) ***REMOVED***
    this.observer.next && this.jo(this.observer.next, t);
  }, t.prototype.error = function (t) ***REMOVED***
    this.observer.error ? this.jo(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
  }, t.prototype.Wo = function () ***REMOVED***
    this.muted = !0;
  }, t.prototype.jo = function (t, e) ***REMOVED***
    var n = this;
    this.muted || setTimeout(function () ***REMOVED***
      n.muted || t(e);
    }, 0);
  }, t);
})(), lu = /** @class*/
(function () ***REMOVED***
  function t(/** The reader to read from underlying binary bundle data source.*/
  t, e) ***REMOVED***
    var n = this;
    (this.Go = t, this.R = e, /** Cached bundle metadata.*/
    this.metadata = new vr(), /**
    * Internal buffer to hold bundle content, accumulating incomplete element
    * content.
    */
    this.buffer = new Uint8Array(), this.zo = new TextDecoder("utf-8"), // Read the metadata (which is the first element).
    this.Ho().then(function (t) ***REMOVED***
      t && t.io() ? n.metadata.resolve(t.payload.metadata) : n.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             " + JSON.stringify(null == t ? void 0 : t.payload)));
    }, function (t) ***REMOVED***
      return n.metadata.reject(t);
    }));
  }
  return (t.prototype.close = function () ***REMOVED***
    return this.Go.cancel();
  }, t.prototype.getMetadata = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (t) ***REMOVED***
        return [2, /*return*/
        this.metadata.promise];
      });
    });
  }, t.prototype.Lo = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (t) ***REMOVED***
        switch (t.label) ***REMOVED***
          case 0:
            return [4, /*yield*/
            this.getMetadata()];
          case 1:
            // Makes sure metadata is read before proceeding.
            return [2, /*return*/
            (t.sent(), this.Ho())];
        }
      });
    });
  }, /**
  * Reads from the head of internal buffer, and pulling more data from
  * underlying stream if a complete element cannot be found, until an
  * element(including the prefixed length and the JSON string) is found.
  *
  * Once a complete element is read, it is dropped from internal buffer.
  *
  * Returns either the bundled element, or null if we have reached the end of
  * the stream.
  */
  t.prototype.Ho = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t, e, n, r;
      return _tslib.__generator(this, function (i) ***REMOVED***
        switch (i.label) ***REMOVED***
          case 0:
            return [4, /*yield*/
            this.Jo()];
          case 1:
            return null === (t = i.sent()) ? [2, /*return*/
            null] : (e = this.zo.decode(t), n = Number(e), isNaN(n) && this.Yo("length string (" + e + ") is not valid number"), [4, /*yield*/
            this.Xo(n)]);
          case 2:
            return (r = i.sent(), [2, /*return*/
            new gs(JSON.parse(r), t.length + n)]);
        }
      });
    });
  }, /** First index of '***REMOVED***' from the underlying buffer.*/
  t.prototype.Zo = function () ***REMOVED***
    return this.buffer.findIndex(function (t) ***REMOVED***
      return t === ("***REMOVED***").charCodeAt(0);
    });
  }, /**
  * Reads from the beginning of the internal buffer, until the first '***REMOVED***', and
  * return the content.
  *
  * If reached end of the stream, returns a null.
  */
  t.prototype.Jo = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t, e;
      return _tslib.__generator(this, function (n) ***REMOVED***
        switch (n.label) ***REMOVED***
          case 0:
            return this.Zo() < 0 ? [4, /*yield*/
            this.tc()] : [3, /*break*/
            3];
          case 1:
            if (n.sent()) return [3, /*break*/
            3];
            n.label = 2;
          case 2:
            return [3, /*break*/
            0];
          case 3:
            // Broke out of the loop because underlying stream is closed, and there
            // happens to be no more data to process.
            return 0 === this.buffer.length ? [2, /*return*/
            null] : // Broke out of the loop because underlying stream is closed, but still
            // cannot find an open bracket.
            ((t = this.Zo()) < 0 && this.Yo("Reached the end of bundle when a length string is expected."), e = this.buffer.slice(0, t), [2, /*return*/
            (this.buffer = this.buffer.slice(t), e)]);
        }
      });
    });
  }, /**
  * Reads from a specified position from the internal buffer, for a specified
  * number of bytes, pulling more data from the underlying stream if needed.
  *
  * Returns a string decoded from the read bytes.
  */
  t.prototype.Xo = function (t) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var e;
      return _tslib.__generator(this, function (n) ***REMOVED***
        switch (n.label) ***REMOVED***
          case 0:
            return this.buffer.length < t ? [4, /*yield*/
            this.tc()] : [3, /*break*/
            3];
          case 1:
            (n.sent() && this.Yo("Reached the end of bundle when more is expected."), n.label = 2);
          case 2:
            return [3, /*break*/
            0];
          case 3:
            // Update the internal buffer to drop the read json string.
            return (e = this.zo.decode(this.buffer.slice(0, t)), [2, /*return*/
            (this.buffer = this.buffer.slice(t), e)]);
        }
      });
    });
  }, t.prototype.Yo = function (t) ***REMOVED***
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    throw (this.Go.cancel(), new Error("Invalid bundle format: " + t));
  }, /**
  * Pulls more data from underlying stream to internal buffer.
  * Returns a boolean indicating whether the stream is finished.
  */
  t.prototype.tc = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t, e;
      return _tslib.__generator(this, function (n) ***REMOVED***
        switch (n.label) ***REMOVED***
          case 0:
            return [4, /*yield*/
            this.Go.read()];
          case 1:
            return ((t = n.sent()).done || ((e = new Uint8Array(this.buffer.length + t.value.length)).set(this.buffer), e.set(t.value, this.buffer.length), this.buffer = e), [2, /*return*/
            t.done]);
        }
      });
    });
  }, t);
})(), du = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    (this.datastore = t, // The version of each document that was read during this transaction.
    this.readVersions = new Map(), this.mutations = [], this.committed = !1, /**
    * A deferred usage error that occurred previously in this transaction that
    * will cause the transaction to fail once it actually commits.
    */
    this.lastWriteError = null, /**
    * Set of documents that have been written in the transaction.
    *
    * When there's more than one write to the same key in a transaction, any
    * writes after the first are handled differently.
    */
    this.writtenDocs = new Set());
  }
  return (t.prototype.lookup = function (t) ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var e, n = this;
      return _tslib.__generator(this, function (r) ***REMOVED***
        switch (r.label) ***REMOVED***
          case 0:
            if ((this.ensureCommitNotCalled(), this.mutations.length > 0)) throw new T(E.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
            return [4, /*yield*/
            (function (t, e) ***REMOVED***
              return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
                var n, r, i, o, s, u;
                return _tslib.__generator(this, function (a) ***REMOVED***
                  switch (a.label) ***REMOVED***
                    case 0:
                      return (n = O(t), r = Nn(n.R) + "/documents", i = ***REMOVED***
                        documents: e.map(function (t) ***REMOVED***
                          return En(n.R, t);
                        })
                      }, [4, /*yield*/
                      n.Oi("BatchGetDocuments", r, i)]);
                    case 1:
                      return (o = a.sent(), s = new Map(), o.forEach(function (t) ***REMOVED***
                        var e = (function (t, e) ***REMOVED***
                          return ("found" in e) ? (function (t, e) ***REMOVED***
                            (R(!!e.found), e.found.name, e.found.updateTime);
                            var n = Tn(t, e.found.name), r = bn(e.found.updateTime), i = new bt(***REMOVED***
                              mapValue: ***REMOVED***
                                fields: e.found.fields
                              }
                            });
                            return _t.newFoundDocument(n, r, i);
                          })(t, e) : ("missing" in e) ? (function (t, e) ***REMOVED***
                            (R(!!e.missing), R(!!e.readTime));
                            var n = Tn(t, e.missing), r = bn(e.readTime);
                            return _t.newNoDocument(n, r);
                          })(t, e) : C();
                        })(n.R, t);
                        s.set(e.key.toString(), e);
                      }), u = [], [2, /*return*/
                      (e.forEach(function (t) ***REMOVED***
                        var e = s.get(t.toString());
                        (R(!!e), u.push(e));
                      }), u)]);
                  }
                });
              });
            })(this.datastore, t)];
          case 1:
            return [2, /*return*/
            ((e = r.sent()).forEach(function (t) ***REMOVED***
              return n.recordVersion(t);
            }), e)];
        }
      });
    });
  }, t.prototype.set = function (t, e) ***REMOVED***
    (this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString()));
  }, t.prototype.update = function (t, e) ***REMOVED***
    try ***REMOVED***
      this.write(e.toMutation(t, this.preconditionForUpdate(t)));
    } catch (t) ***REMOVED***
      this.lastWriteError = t;
    }
    this.writtenDocs.add(t.toString());
  }, t.prototype.delete = function (t) ***REMOVED***
    (this.write(new Ve(t, this.precondition(t))), this.writtenDocs.add(t.toString()));
  }, t.prototype.commit = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t, e = this;
      return _tslib.__generator(this, function (n) ***REMOVED***
        switch (n.label) ***REMOVED***
          case 0:
            if ((this.ensureCommitNotCalled(), this.lastWriteError)) throw this.lastWriteError;
            return (t = this.readVersions, // For each mutation, note that the doc was written.
            this.mutations.forEach(function (e) ***REMOVED***
              t.delete(e.key.toString());
            }), // For each document that was read but not written to, we want to perform
            // a `verify` operation.
            t.forEach(function (t, n) ***REMOVED***
              var r = st.fromPath(n);
              e.mutations.push(new qe(r, e.precondition(r)));
            }), [4, /*yield*/
            (function (t, e) ***REMOVED***
              return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
                var n, r, i;
                return _tslib.__generator(this, function (o) ***REMOVED***
                  switch (o.label) ***REMOVED***
                    case 0:
                      return (n = O(t), r = Nn(n.R) + "/documents", i = ***REMOVED***
                        writes: e.map(function (t) ***REMOVED***
                          return Cn(n.R, t);
                        })
                      }, [4, /*yield*/
                      n.Ni("Commit", r, i)]);
                    case 1:
                      return (o.sent(), [2]);
                  }
                });
              });
            })(this.datastore, this.mutations)]);
          case 1:
            // For each mutation, note that the doc was written.
            return (n.sent(), this.committed = !0, [2]);
        }
      });
    });
  }, t.prototype.recordVersion = function (t) ***REMOVED***
    var e;
    if (t.isFoundDocument()) e = t.version; else ***REMOVED***
      if (!t.isNoDocument()) throw C();
      // For deleted docs, we must use baseVersion 0 when we overwrite them.
      e = U.min();
    }
    var n = this.readVersions.get(t.key.toString());
    if (n) ***REMOVED***
      if (!e.isEqual(n)) // This transaction will fail no matter what.
      throw new T(E.ABORTED, "Document version changed between two reads.");
    } else this.readVersions.set(t.key.toString(), e);
  }, /**
  * Returns the version of this document when it was read in this transaction,
  * as a precondition, or no precondition if it was not read.
  */
  t.prototype.precondition = function (t) ***REMOVED***
    var e = this.readVersions.get(t.toString());
    return !this.writtenDocs.has(t.toString()) && e ? Ee.updateTime(e) : Ee.none();
  }, /**
  * Returns the precondition for a document if the operation is an update.
  */
  t.prototype.preconditionForUpdate = function (t) ***REMOVED***
    var e = this.readVersions.get(t.toString());
    // The first time a document is written, we want to take into account the
    // read time and existence
    if (!this.writtenDocs.has(t.toString()) && e) ***REMOVED***
      if (e.isEqual(U.min())) // The document doesn't exist, so fail the transaction.
      // This has to be validated locally because you can't send a
      // precondition that a document does not exist without changing the
      // semantics of the backend write to be an insert. This is the reverse
      // of what we want, since we want to assert that the document doesn't
      // exist but then send the update and have it fail. Since we can't
      // express that to the backend, we have to validate locally.
      // Note: this can change once we can send separate verify writes in the
      // transaction.
      throw new T(E.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
      // Document exists, base precondition on document update time.
      return Ee.updateTime(e);
    }
    // Document was not read, so we just use the preconditions for a blind
    // update.
    return Ee.exists(!0);
  }, t.prototype.write = function (t) ***REMOVED***
    (this.ensureCommitNotCalled(), this.mutations.push(t));
  }, t.prototype.ensureCommitNotCalled = function () ***REMOVED***}, t);
})(), pu = /** @class*/
(function () ***REMOVED***
  function t(t, e, n, r) ***REMOVED***
    (this.asyncQueue = t, this.datastore = e, this.updateFunction = n, this.deferred = r, this.ec = 5, this.Zi = new No(this.asyncQueue, "transaction_retry"));
  }
  return (t.prototype.run = function () ***REMOVED***
    this.nc();
  }, t.prototype.nc = function () ***REMOVED***
    var t = this;
    this.Zi.ji(function () ***REMOVED***
      return _tslib.__awaiter(t, void 0, void 0, function () ***REMOVED***
        var t, e, n = this;
        return _tslib.__generator(this, function (r) ***REMOVED***
          return (t = new du(this.datastore), (e = this.sc(t)) && e.then(function (e) ***REMOVED***
            n.asyncQueue.enqueueAndForget(function () ***REMOVED***
              return t.commit().then(function () ***REMOVED***
                n.deferred.resolve(e);
              }).catch(function (t) ***REMOVED***
                n.ic(t);
              });
            });
          }).catch(function (t) ***REMOVED***
            n.ic(t);
          }), [2]);
        });
      });
    });
  }, t.prototype.sc = function (t) ***REMOVED***
    try ***REMOVED***
      var e = this.updateFunction(t);
      return !rt(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t) ***REMOVED***
      // Do not retry errors thrown by user provided updateFunction.
      return (this.deferred.reject(t), null);
    }
  }, t.prototype.ic = function (t) ***REMOVED***
    var e = this;
    this.ec > 0 && this.rc(t) ? (this.ec -= 1, this.asyncQueue.enqueueAndForget(function () ***REMOVED***
      return (e.nc(), Promise.resolve());
    })) : this.deferred.reject(t);
  }, t.prototype.rc = function (t) ***REMOVED***
    if ("FirebaseError" === t.name) ***REMOVED***
      // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
      // non-matching document versions with ABORTED. These errors should be retried.
      var e = t.code;
      return "aborted" === e || "failed-precondition" === e || !Be(e);
    }
    return !1;
  }, t);
})(), yu = /** @class*/
(function () ***REMOVED***
  function t(t, /**
  * Asynchronous queue responsible for all of our internal processing. When
  * we get incoming work from the user (via public API) or the network
  * (incoming GRPC messages), we should always schedule onto this queue.
  * This ensures all of our work is properly serialized (e.g. we don't
  * start processing a new operation while the previous one is waiting for
  * an async I/O to complete).
  */
  e, n) ***REMOVED***
    var r = this;
    (this.credentials = t, this.asyncQueue = e, this.databaseInfo = n, this.user = uo.UNAUTHENTICATED, this.clientId = P.u(), this.credentialListener = function () ***REMOVED***}, this.receivedInitialUser = new vr(), this.credentials.setChangeListener(function (t) ***REMOVED***
      (N("FirestoreClient", "Received user=", t.uid), r.user = t, r.credentialListener(t), r.receivedInitialUser.resolve());
    }));
  }
  return (t.prototype.getConfiguration = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      return _tslib.__generator(this, function (t) ***REMOVED***
        switch (t.label) ***REMOVED***
          case 0:
            return [4, /*yield*/
            this.receivedInitialUser.promise];
          case 1:
            return [2, /*return*/
            (t.sent(), ***REMOVED***
              asyncQueue: this.asyncQueue,
              databaseInfo: this.databaseInfo,
              clientId: this.clientId,
              credentials: this.credentials,
              initialUser: this.user,
              maxConcurrentLimboResolutions: 100
            })];
        }
      });
    });
  }, t.prototype.setCredentialChangeListener = function (t) ***REMOVED***
    var e = this;
    (this.credentialListener = t, // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.receivedInitialUser.promise.then(function () ***REMOVED***
      return e.credentialListener(e.user);
    }));
  }, /**
  * Checks that the client has not been terminated. Ensures that other methods on
  * this class cannot be called after the client is terminated.
  */
  t.prototype.verifyNotTerminated = function () ***REMOVED***
    if (this.asyncQueue.isShuttingDown) throw new T(E.FAILED_PRECONDITION, "The client has already been terminated.");
  }, t.prototype.terminate = function () ***REMOVED***
    var t = this;
    this.asyncQueue.enterRestrictedMode();
    var e = new vr();
    return (this.asyncQueue.enqueueAndForgetEvenWhileRestricted(function () ***REMOVED***
      return _tslib.__awaiter(t, void 0, void 0, function () ***REMOVED***
        var t, n;
        return _tslib.__generator(this, function (r) ***REMOVED***
          switch (r.label) ***REMOVED***
            case 0:
              return (r.trys.push([0, 5, , 6]), this.onlineComponents ? [4, /*yield*/
              this.onlineComponents.terminate()] : [3, /*break*/
              2]);
            case 1:
              (r.sent(), r.label = 2);
            case 2:
              return this.offlineComponents ? [4, /*yield*/
              this.offlineComponents.terminate()] : [3, /*break*/
              4];
            case 3:
              (r.sent(), r.label = 4);
            case 4:
              // `removeChangeListener` must be called after shutting down the
              // RemoteStore as it will prevent the RemoteStore from retrieving
              // auth tokens.
              return (this.credentials.removeChangeListener(), e.resolve(), [3, /*break*/
              6]);
            case 5:
              return (t = r.sent(), n = ss(t, "Failed to shutdown persistence"), e.reject(n), [3, /*break*/
              6]);
            case 6:
              return [2];
          }
        });
      });
    }), e.promise);
  }, t);
})();
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A class representing a bundle.
*
* Takes a bundle stream or buffer, and presents abstractions to read bundled
* elements out of the underlying content.
*/
function vu(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r, i = this;
    return _tslib.__generator(this, function (o) ***REMOVED***
      switch (o.label) ***REMOVED***
        case 0:
          return (t.asyncQueue.verifyOperationInProgress(), N("FirestoreClient", "Initializing OfflineComponentProvider"), [4, /*yield*/
          t.getConfiguration()]);
        case 1:
          return (n = o.sent(), [4, /*yield*/
          e.initialize(n)]);
        case 2:
          return (o.sent(), r = n.initialUser, t.setCredentialChangeListener(function (n) ***REMOVED***
            r.isEqual(n) || (r = n, t.asyncQueue.enqueueRetryable(function () ***REMOVED***
              return _tslib.__awaiter(i, void 0, void 0, function () ***REMOVED***
                return _tslib.__generator(this, function (t) ***REMOVED***
                  switch (t.label) ***REMOVED***
                    case 0:
                      return [4, /*yield*/
                      Fi(e.localStore, n)];
                    case 1:
                      return (t.sent(), [2]);
                  }
                });
              });
            }));
          }), // When a user calls clearPersistence() in one client, all other clients
          // need to be terminated to allow the delete to succeed.
          e.persistence.setDatabaseDeletedListener(function () ***REMOVED***
            return t.terminate();
          }), t.offlineComponents = e, [2]);
      }
    });
  });
}
function mu(t, e) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var n, r;
    return _tslib.__generator(this, function (i) ***REMOVED***
      switch (i.label) ***REMOVED***
        case 0:
          return (t.asyncQueue.verifyOperationInProgress(), [4, /*yield*/
          gu(t)]);
        case 1:
          return (n = i.sent(), N("FirestoreClient", "Initializing OnlineComponentProvider"), [4, /*yield*/
          t.getConfiguration()]);
        case 2:
          return (r = i.sent(), [4, /*yield*/
          e.initialize(n, r)]);
        case 3:
          return (i.sent(), // The CredentialChangeListener of the online component provider takes
          // precedence over the offline component provider.
          t.setCredentialChangeListener(function (n) ***REMOVED***
            return t.asyncQueue.enqueueRetryable(function () ***REMOVED***
              return (function (t, e) ***REMOVED***
                return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
                  var n, r;
                  return _tslib.__generator(this, function (i) ***REMOVED***
                    switch (i.label) ***REMOVED***
                      case 0:
                        return ((n = O(t)).asyncQueue.verifyOperationInProgress(), N("RemoteStore", "RemoteStore received new credentials"), r = jo(n), // Tear down and re-create our network streams. This will ensure we get a
                        // fresh auth token for the new user and re-fill the write pipeline with
                        // new mutations from the LocalStore (since mutations are per-user).
                        n.$r.add(3), [4, /*yield*/
                        Po(n)]);
                      case 1:
                        return (i.sent(), r && // Don't set the network status to Unknown if we are offline.
                        n.Br.set("Unknown"), [4, /*yield*/
                        n.remoteSyncer.handleCredentialChange(e)]);
                      case 2:
                        return (i.sent(), n.$r.delete(3), [4, /*yield*/
                        Lo(n)]);
                      case 3:
                        // Tear down and re-create our network streams. This will ensure we get a
                        // fresh auth token for the new user and re-fill the write pipeline with
                        // new mutations from the LocalStore (since mutations are per-user).
                        return (i.sent(), [2]);
                    }
                  });
                });
              })(e.remoteStore, n);
            });
          }), t.onlineComponents = e, [2]);
      }
    });
  });
}
function gu(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    return _tslib.__generator(this, function (e) ***REMOVED***
      switch (e.label) ***REMOVED***
        case 0:
          return t.offlineComponents ? [3, /*break*/
          2] : (N("FirestoreClient", "Using default OfflineComponentProvider"), [4, /*yield*/
          vu(t, new su())]);
        case 1:
          (e.sent(), e.label = 2);
        case 2:
          return [2, /*return*/
          t.offlineComponents];
      }
    });
  });
}
function wu(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    return _tslib.__generator(this, function (e) ***REMOVED***
      switch (e.label) ***REMOVED***
        case 0:
          return t.onlineComponents ? [3, /*break*/
          2] : (N("FirestoreClient", "Using default OnlineComponentProvider"), [4, /*yield*/
          mu(t, new cu())]);
        case 1:
          (e.sent(), e.label = 2);
        case 2:
          return [2, /*return*/
          t.onlineComponents];
      }
    });
  });
}
function bu(t) ***REMOVED***
  return gu(t).then(function (t) ***REMOVED***
    return t.persistence;
  });
}
function Iu(t) ***REMOVED***
  return gu(t).then(function (t) ***REMOVED***
    return t.localStore;
  });
}
function _u(t) ***REMOVED***
  return wu(t).then(function (t) ***REMOVED***
    return t.remoteStore;
  });
}
function Eu(t) ***REMOVED***
  return wu(t).then(function (t) ***REMOVED***
    return t.syncEngine;
  });
}
function Tu(t) ***REMOVED***
  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
    var e, n;
    return _tslib.__generator(this, function (r) ***REMOVED***
      switch (r.label) ***REMOVED***
        case 0:
          return [4, /*yield*/
          wu(t)];
        case 1:
          return (e = r.sent(), [2, /*return*/
          ((n = e.eventManager).onListen = As.bind(null, e.syncEngine), n.onUnlisten = xs.bind(null, e.syncEngine), n)]);
      }
    });
  });
}
/** Enables the network connection and re-enqueues all pending operations.*/
function Su(t, e, n) ***REMOVED***
  var r = this;
  void 0 === n && (n = ***REMOVED***});
  var i = new vr();
  return (t.asyncQueue.enqueueAndForget(function () ***REMOVED***
    return _tslib.__awaiter(r, void 0, void 0, function () ***REMOVED***
      var r;
      return _tslib.__generator(this, function (o) ***REMOVED***
        switch (o.label) ***REMOVED***
          case 0:
            return (r = function (t, e, n, r, i) ***REMOVED***
              var o = new fu(***REMOVED***
                next: function (o) ***REMOVED***
                  // Remove query first before passing event to user to avoid
                  // user actions affecting the now stale query.
                  e.enqueueAndForget(function () ***REMOVED***
                    return ds(t, s);
                  });
                  var u = o.docs.has(n);
                  !u && o.fromCache ? // TODO(dimond): If we're online and the document doesn't
                  // exist then we resolve with a doc.exists set to false. If
                  // we're offline however, we reject the Promise in this
                  // case. Two options: 1) Cache the negative response from
                  // the server so we can deliver that even when you're
                  // offline 2) Actually reject the Promise in the online case
                  // if the document doesn't exist.
                  i.reject(new T(E.UNAVAILABLE, "Failed to get document because the client is offline.")) : u && o.fromCache && r && "server" === r.source ? i.reject(new T(E.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                },
                error: function (t) ***REMOVED***
                  return i.reject(t);
                }
              }), s = new ms(Qt(n.path), o, ***REMOVED***
                includeMetadataChanges: !0,
                so: !0
              });
              return ls(t, s);
            }, [4, /*yield*/
            Tu(t)]);
          case 1:
            return [2, /*return*/
            r.apply(void 0, [o.sent(), t.asyncQueue, e, n, i])];
        }
      });
    });
  }), i.promise);
}
function Du(t, e, n) ***REMOVED***
  var r = this;
  void 0 === n && (n = ***REMOVED***});
  var i = new vr();
  return (t.asyncQueue.enqueueAndForget(function () ***REMOVED***
    return _tslib.__awaiter(r, void 0, void 0, function () ***REMOVED***
      var r;
      return _tslib.__generator(this, function (o) ***REMOVED***
        switch (o.label) ***REMOVED***
          case 0:
            return (r = function (t, e, n, r, i) ***REMOVED***
              var o = new fu(***REMOVED***
                next: function (n) ***REMOVED***
                  // Remove query first before passing event to user to avoid
                  // user actions affecting the now stale query.
                  (e.enqueueAndForget(function () ***REMOVED***
                    return ds(t, s);
                  }), n.fromCache && "server" === r.source ? i.reject(new T(E.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n));
                },
                error: function (t) ***REMOVED***
                  return i.reject(t);
                }
              }), s = new ms(n, o, ***REMOVED***
                includeMetadataChanges: !0,
                so: !0
              });
              return ls(t, s);
            }, [4, /*yield*/
            Tu(t)]);
          case 1:
            return [2, /*return*/
            r.apply(void 0, [o.sent(), t.asyncQueue, e, n, i])];
        }
      });
    });
  }), i.promise);
}
var Nu = /**
* Constructs a DatabaseInfo using the provided host, databaseId and
* persistenceKey.
*
* @param databaseId - The database to use.
* @param appId - The Firebase App Id.
* @param persistenceKey - A unique identifier for this Firestore's local
* storage (used in conjunction with the databaseId).
* @param host - The Firestore backend host to connect to.
* @param ssl - Whether to use SSL when connecting.
* @param forceLongPolling - Whether to use the forceLongPolling option
* when using WebChannel as the network transport.
* @param autoDetectLongPolling - Whether to use the detectBufferingProxy
* option when using WebChannel as the network transport.
*/
function (t, e, n, r, i, o, s) ***REMOVED***
  (this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = r, this.ssl = i, this.forceLongPolling = o, this.autoDetectLongPolling = s);
}, Au = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.projectId = t, this.database = e || "(default)");
  }
  return (Object.defineProperty(t.prototype, "isDefaultDatabase", ***REMOVED***
    get: function () ***REMOVED***
      return "(default)" === this.database;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (e) ***REMOVED***
    return e instanceof t && e.projectId === this.projectId && e.database === this.database;
  }, t);
})(), ku = new Map(), xu = function (t, e) ***REMOVED***
  (this.user = e, this.type = "OAuth", this.authHeaders = ***REMOVED***}, // Set the headers using Object Literal notation to avoid minification
  this.authHeaders.Authorization = "Bearer " + t);
}, Cu = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    /**
    * Stores the listener registered with setChangeListener()
    * This isn't actually necessary since the UID never changes, but we use this
    * to verify the listen contract is adhered to in tests.
    */
    this.changeListener = null;
  }
  return (t.prototype.getToken = function () ***REMOVED***
    return Promise.resolve(null);
  }, t.prototype.invalidateToken = function () ***REMOVED***}, t.prototype.setChangeListener = function (t) ***REMOVED***
    (this.changeListener = t, // Fire with initial user.
    t(uo.UNAUTHENTICATED));
  }, t.prototype.removeChangeListener = function () ***REMOVED***
    this.changeListener = null;
  }, t);
})(), Ru = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    var e = this;
    /**
    * The auth token listener registered with FirebaseApp, retained here so we
    * can unregister it.
    */
    (this.oc = null, /** Tracks the current User.*/
    this.currentUser = uo.UNAUTHENTICATED, this.receivedInitialUser = !1, /**
    * Counter used to detect if the token changed while a getToken request was
    * outstanding.
    */
    this.cc = 0, /** The listener registered with setChangeListener().*/
    this.changeListener = null, this.forceRefresh = !1, this.oc = function () ***REMOVED***
      (e.cc++, e.currentUser = e.uc(), e.receivedInitialUser = !0, e.changeListener && e.changeListener(e.currentUser));
    }, this.cc = 0, this.auth = t.getImmediate(***REMOVED***
      optional: !0
    }), this.auth ? this.auth.addAuthTokenListener(this.oc) : // if auth is not available, invoke tokenListener once with null token
    (this.oc(null), t.get().then(function (t) ***REMOVED***
      (e.auth = t, e.oc && // tokenListener can be removed by removeChangeListener()
      e.auth.addAuthTokenListener(e.oc));
    }, function () ***REMOVED***})));
  }
  return (t.prototype.getToken = function () ***REMOVED***
    var t = this, e = this.cc, n = this.forceRefresh;
    // Take note of the current value of the tokenCounter so that this method
    // can fail (with an ABORTED error) if there is a token change while the
    // request is outstanding.
    return (this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(function (n) ***REMOVED***
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      return t.cc !== e ? (N("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (R("string" == typeof n.accessToken), new xu(n.accessToken, t.currentUser)) : null;
    }) : Promise.resolve(null));
  }, t.prototype.invalidateToken = function () ***REMOVED***
    this.forceRefresh = !0;
  }, t.prototype.setChangeListener = function (t) ***REMOVED***
    (this.changeListener = t, // Fire the initial event
    this.receivedInitialUser && t(this.currentUser));
  }, t.prototype.removeChangeListener = function () ***REMOVED***
    (this.auth && this.auth.removeAuthTokenListener(this.oc), this.oc = null, this.changeListener = null);
  }, // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  t.prototype.uc = function () ***REMOVED***
    var t = this.auth && this.auth.getUid();
    return (R(null === t || "string" == typeof t), new uo(t));
  }, t);
})(), Ou = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (this.ac = t, this.hc = e, this.lc = n, this.type = "FirstParty", this.user = uo.FIRST_PARTY);
  }
  return (Object.defineProperty(t.prototype, "authHeaders", ***REMOVED***
    get: function () ***REMOVED***
      var t = ***REMOVED***
        "X-Goog-AuthUser": this.hc
      }, e = this.ac.auth.getAuthHeaderValueForFirstParty([]);
      // Use array notation to prevent minification
      return (e && (t.Authorization = e), this.lc && (t["X-Goog-Iam-Authorization-Token"] = this.lc), t);
    },
    enumerable: !1,
    configurable: !0
  }), t);
})(), Lu = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (this.ac = t, this.hc = e, this.lc = n);
  }
  return (t.prototype.getToken = function () ***REMOVED***
    return Promise.resolve(new Ou(this.ac, this.hc, this.lc));
  }, t.prototype.setChangeListener = function (t) ***REMOVED***
    // Fire with initial uid.
    t(uo.FIRST_PARTY);
  }, t.prototype.removeChangeListener = function () ***REMOVED***}, t.prototype.invalidateToken = function () ***REMOVED***}, t);
})();
/** The default database name for a project.*/
/** Represents the database ID a Firestore client is associated with.*/
/**
* Builds a CredentialsProvider depending on the type of
* the credentials passed in.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Pu(t, e, n) ***REMOVED***
  if (!n) throw new T(E.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".");
}
function Mu(t, e) ***REMOVED***
  if (void 0 === e) return ***REMOVED***
    merge: !1
  ***REMOVED***
  if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new T(E.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
  return e;
}
/**
* Validates that two boolean options are not set at the same time.
*/
function Fu(t, e, n, r) ***REMOVED***
  if (!0 === e && !0 === r) throw new T(E.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.");
}
/**
* Validates that `path` refers to a document (indicated by the fact it contains
* an even numbers of segments).
*/
function Vu(t) ***REMOVED***
  if (!st.isDocumentKey(t)) throw new T(E.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".");
}
/**
* Validates that `path` refers to a collection (indicated by the fact it
* contains an odd numbers of segments).
*/
function qu(t) ***REMOVED***
  if (st.isDocumentKey(t)) throw new T(E.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".");
}
/**
* Returns true if it's a non-null object without a custom prototype
* (i.e. excludes Array, Date, etc.).
*/
/** Returns a string describing the type / value of the provided input.*/
function Uu(t) ***REMOVED***
  if (void 0 === t) return "undefined";
  if (null === t) return "null";
  if ("string" == typeof t) return (t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t));
  if ("number" == typeof t || "boolean" == typeof t) return "" + t;
  if ("object" == typeof t) ***REMOVED***
    if (t instanceof Array) return "an array";
    var e = /** Hacky method to try to get the constructor name for an object.*/
    (function (t) ***REMOVED***
      if (t.constructor) ***REMOVED***
        var e = (/function\s+([^\s(]+)\s*\(/).exec(t.constructor.toString());
        if (e && e.length > 1) return e[1];
      }
      return null;
    })(t);
    return e ? "a custom " + e + " object" : "an object";
  }
  return "function" == typeof t ? "a function" : C();
}
function Bu(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
e) ***REMOVED***
  if ((("_delegate" in t) && (// Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t = t._delegate), !(t instanceof e))) ***REMOVED***
    if (e.name === t.constructor.name) throw new T(E.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    var n = Uu(t);
    throw new T(E.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n);
  }
  return t;
}
function ju(t, e) ***REMOVED***
  if (e <= 0) throw new T(E.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".");
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// settings() defaults:
/**
* A concrete type describing all the values that can be applied via a
* user-supplied firestore.Settings object. This is a separate type so that
* defaults can be supplied and the value can be checked for equality.
*/
var Ku = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    var e;
    if (void 0 === t.host) ***REMOVED***
      if (void 0 !== t.ssl) throw new T(E.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      (this.host = "firestore.googleapis.com", this.ssl = !0);
    } else (this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e);
    if ((this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, void 0 === t.cacheSizeBytes)) this.cacheSizeBytes = 41943040; else ***REMOVED***
      if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new T(E.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, Fu("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling));
  }
  return (t.prototype.isEqual = function (t) ***REMOVED***
    return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
  }, t);
})(), Gu = /** @class*/
(function () ***REMOVED***
  /** @hideconstructor*/
  function t(t, e) ***REMOVED***
    (this._persistenceKey = "(lite)", this._settings = new Ku(***REMOVED***}), this._settingsFrozen = !1, t instanceof Au ? (this._databaseId = t, this._credentials = new Cu()) : (this._app = t, this._databaseId = (function (t) ***REMOVED***
      if (!Object.prototype.hasOwnProperty.apply(t.options, ["projectId"])) throw new T(E.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new Au(t.options.projectId);
    })(t), this._credentials = new Ru(e)));
  }
  return (Object.defineProperty(t.prototype, "app", ***REMOVED***
    /**
    * The ***REMOVED***@link @firebase/app#FirebaseApp} associated with this `Firestore` service
    * instance.
    */
    get: function () ***REMOVED***
      if (!this._app) throw new T(E.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this._app;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "_initialized", ***REMOVED***
    get: function () ***REMOVED***
      return this._settingsFrozen;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "_terminated", ***REMOVED***
    get: function () ***REMOVED***
      return void 0 !== this._terminateTask;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._setSettings = function (t) ***REMOVED***
    if (this._settingsFrozen) throw new T(E.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    (this._settings = new Ku(t), void 0 !== t.credentials && (this._credentials = (function (t) ***REMOVED***
      if (!t) return new Cu();
      switch (t.type) ***REMOVED***
        case "gapi":
          var e = t.client;
          // Make sure this really is a Gapi client.
          return (R(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Lu(e, t.sessionIndex || "0", t.iamToken || null));
        case "provider":
          return t.client;
        default:
          throw new T(E.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
      }
    })(t.credentials)));
  }, t.prototype._getSettings = function () ***REMOVED***
    return this._settings;
  }, t.prototype._freezeSettings = function () ***REMOVED***
    return (this._settingsFrozen = !0, this._settings);
  }, t.prototype._delete = function () ***REMOVED***
    return (this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask);
  }, /** Returns a JSON-serializable representation of this Firestore instance.*/
  t.prototype.toJSON = function () ***REMOVED***
    return ***REMOVED***
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    ***REMOVED***
  }, /**
  * Terminates all components used by this client. Subclasses can override
  * this method to clean up their own dependencies, but must also call this
  * method.
  *
  * Only ever called once.
  */
  t.prototype._terminate = function () ***REMOVED***
    /**
    * Removes all components associated with the provided instance. Must be called
    * when the `Firestore` instance is terminated.
    */
    return (t = this, (e = ku.get(t)) && (N("ComponentProvider", "Removing Datastore"), ku.delete(t), e.terminate()), Promise.resolve());
    var t, e;
  }, t);
})(), Qu = /** @class*/
(function () ***REMOVED***
  /** @hideconstructor*/
  function t(t, e, n) ***REMOVED***
    (this._converter = e, this._key = n, /** The type of this Firestore reference.*/
    this.type = "document", this.firestore = t);
  }
  return (Object.defineProperty(t.prototype, "_path", ***REMOVED***
    get: function () ***REMOVED***
      return this._key.path;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "id", ***REMOVED***
    /**
    * The document's identifier within its collection.
    */
    get: function () ***REMOVED***
      return this._key.path.lastSegment();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "path", ***REMOVED***
    /**
    * A string representing the path of the referenced document (relative
    * to the root of the database).
    */
    get: function () ***REMOVED***
      return this._key.path.canonicalString();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "parent", ***REMOVED***
    /**
    * The collection this `DocumentReference` belongs to.
    */
    get: function () ***REMOVED***
      return new Wu(this.firestore, this._converter, this._key.path.popLast());
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.withConverter = function (e) ***REMOVED***
    return new t(this.firestore, e, this._key);
  }, t);
})(), zu = /** @class*/
(function () ***REMOVED***
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected*/
  function t(t, e, n) ***REMOVED***
    (this._converter = e, this._query = n, /** The type of this Firestore reference.*/
    this.type = "query", this.firestore = t);
  }
  return (t.prototype.withConverter = function (e) ***REMOVED***
    return new t(this.firestore, e, this._query);
  }, t);
})(), Wu = /** @class*/
(function (t) ***REMOVED***
  /** @hideconstructor*/
  function e(e, n, r) ***REMOVED***
    var i = this;
    return ((i = t.call(this, e, n, Qt(r)) || this)._path = r, /** The type of this Firestore reference.*/
    i.type = "collection", i);
  }
  return (_tslib.__extends(e, t), Object.defineProperty(e.prototype, "id", ***REMOVED***
    /** The collection's identifier.*/
    get: function () ***REMOVED***
      return this._query.path.lastSegment();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "path", ***REMOVED***
    /**
    * A string representing the path of the referenced collection (relative
    * to the root of the database).
    */
    get: function () ***REMOVED***
      return this._query.path.canonicalString();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "parent", ***REMOVED***
    /**
    * A reference to the containing `DocumentReference` if this is a
    * subcollection. If this isn't a subcollection, the reference is null.
    */
    get: function () ***REMOVED***
      var t = this._path.popLast();
      return t.isEmpty() ? null : new Qu(this.firestore, /*converter=*/
      null, new st(t));
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.withConverter = function (t) ***REMOVED***
    return new e(this.firestore, t, this._path);
  }, e);
})(zu);
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* The Cloud Firestore service interface.
*
* Do not call this constructor directly. Instead, use ***REMOVED***@link getFirestore}.
*/
function Hu(t, e) ***REMOVED***
  for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
  if ((t = _firebaseUtil.getModularInstance(t), Pu("collection", "path", e), t instanceof Gu)) return (qu(n = Q.fromString.apply(Q, _tslib.__spreadArray([e], r))), new Wu(t, /*converter=*/
  null, n));
  if (!(t instanceof Qu || t instanceof Wu)) throw new T(E.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
  return (qu(n = Q.fromString.apply(Q, _tslib.__spreadArray([t.path], r)).child(Q.fromString(e))), new Wu(t.firestore, /*converter=*/
  null, n));
}
// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
* Creates and returns a new `Query` instance that includes all documents in the
* database that are contained in a collection or subcollection with the
* given `collectionId`.
*
* @param firestore - A reference to the root Firestore instance.
* @param collectionId - Identifies the collections to query over. Every
* collection or subcollection with this ID as the last segment of its path
* will be included. Cannot contain a slash.
* @returns The created `Query`.
*/
function Yu(t, e) ***REMOVED***
  for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
  if ((t = _firebaseUtil.getModularInstance(t), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  1 === arguments.length && (e = P.u()), Pu("doc", "path", e), t instanceof Gu)) return (Vu(n = Q.fromString.apply(Q, _tslib.__spreadArray([e], r))), new Qu(t, /*converter=*/
  null, new st(n)));
  if (!(t instanceof Qu || t instanceof Wu)) throw new T(E.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
  return (Vu(n = t._path.child(Q.fromString.apply(Q, _tslib.__spreadArray([e], r)))), new Qu(t.firestore, t instanceof Wu ? t._converter : null, new st(n)));
}
/**
* Returns true if the provided references are equal.
*
* @param left - A reference to compare.
* @param right - A reference to compare.
* @returns true if the references point to the same location in the same
* Firestore database.
*/
function Xu(t, e) ***REMOVED***
  return (t = _firebaseUtil.getModularInstance(t), e = _firebaseUtil.getModularInstance(e), (t instanceof Qu || t instanceof Wu) && (e instanceof Qu || e instanceof Wu) && t.firestore === e.firestore && t.path === e.path && t._converter === e._converter);
}
function $u(t, e) ***REMOVED***
  return (t = _firebaseUtil.getModularInstance(t), e = _firebaseUtil.getModularInstance(e), t instanceof zu && e instanceof zu && t.firestore === e.firestore && te(t._query, e._query) && t._converter === e._converter);
}
var Ju = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    var t = this;
    // The last promise in the queue.
    (this.fc = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.dc = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.wc = !1, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this._c = [], // visible for testing
    this.mc = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.yc = !1, // List of TimerIds to fast-forward delays for.
    this.gc = [], // Backoff timer used to schedule retries for retryable operations
    this.Zi = new No(this, "async_queue_retry"), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.Ec = function () ***REMOVED***
      var e = So();
      (e && N("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.Zi.Gi());
    });
    var e = So();
    e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Ec);
  }
  return (Object.defineProperty(t.prototype, "isShuttingDown", ***REMOVED***
    get: function () ***REMOVED***
      return this.wc;
    },
    enumerable: !1,
    configurable: !0
  }), /**
  * Adds a new operation to the queue without waiting for it to complete (i.e.
  * we ignore the Promise result).
  */
  t.prototype.enqueueAndForget = function (t) ***REMOVED***
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.enqueue(t);
  }, t.prototype.enqueueAndForgetEvenWhileRestricted = function (t) ***REMOVED***
    (this.Tc(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.Ic(t));
  }, t.prototype.enterRestrictedMode = function () ***REMOVED***
    if (!this.wc) ***REMOVED***
      this.wc = !0;
      var t = So();
      t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Ec);
    }
  }, t.prototype.enqueue = function (t) ***REMOVED***
    return (this.Tc(), this.wc ? new Promise(function (t) ***REMOVED***}) : this.Ic(t));
  }, t.prototype.enqueueRetryable = function (t) ***REMOVED***
    var e = this;
    this.enqueueAndForget(function () ***REMOVED***
      return (e.dc.push(t), e.Ac());
    });
  }, /**
  * Runs the next operation from the retryable queue. If the operation fails,
  * reschedules with backoff.
  */
  t.prototype.Ac = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t, e = this;
      return _tslib.__generator(this, function (n) ***REMOVED***
        switch (n.label) ***REMOVED***
          case 0:
            if (0 === this.dc.length) return [3, /*break*/
            5];
            n.label = 1;
          case 1:
            return (n.trys.push([1, 3, , 4]), [4, /*yield*/
            this.dc[0]()]);
          case 2:
            return (n.sent(), this.dc.shift(), this.Zi.reset(), [3, /*break*/
            4]);
          case 3:
            if (!_r(t = n.sent())) throw t;
            // Failure will be handled by AsyncQueue
            return (N("AsyncQueue", "Operation failed with retryable error: " + t), [3, /*break*/
            4]);
          case 4:
            (this.dc.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.Zi.ji(function () ***REMOVED***
              return e.Ac();
            }), n.label = 5);
          case 5:
            return [2];
        }
      });
    });
  }, t.prototype.Ic = function (t) ***REMOVED***
    var e = this, n = this.fc.then(function () ***REMOVED***
      return (e.yc = !0, t().catch(function (t) ***REMOVED***
        // Re-throw the error so that this.tail becomes a rejected Promise and
        // all further attempts to chain (via .then) will just short-circuit
        // and return the rejected Promise.
        throw (e.mc = t, e.yc = !1, A("INTERNAL UNHANDLED ERROR: ", /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        (function (t) ***REMOVED***
          var e = t.message || "";
          return (t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e);
        })(t)), t);
      }).then(function (t) ***REMOVED***
        return (e.yc = !1, t);
      }));
    });
    return (this.fc = n, n);
  }, t.prototype.enqueueAfterDelay = function (t, e, n) ***REMOVED***
    var r = this;
    (this.Tc(), // Fast-forward delays for timerIds that have been overriden.
    this.gc.indexOf(t) > -1 && (e = 0));
    var i = os.createAndSchedule(this, t, e, n, function (t) ***REMOVED***
      return r.Rc(t);
    });
    return (this._c.push(i), i);
  }, t.prototype.Tc = function () ***REMOVED***
    this.mc && C();
  }, t.prototype.verifyOperationInProgress = function () ***REMOVED***}, /**
  * Waits until all currently queued tasks are finished executing. Delayed
  * operations are not run.
  */
  t.prototype.bc = function () ***REMOVED***
    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
      var t;
      return _tslib.__generator(this, function (e) ***REMOVED***
        switch (e.label) ***REMOVED***
          case 0:
            return [4, /*yield*/
            t = this.fc];
          case 1:
            (e.sent(), e.label = 2);
          case 2:
            if (t !== this.fc) return [3, /*break*/
            0];
            e.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, /**
  * For Tests: Determine if a delayed operation with a particular TimerId
  * exists.
  */
  t.prototype.vc = function (t) ***REMOVED***
    for (var e = 0, n = this._c; e < n.length; e++) ***REMOVED***
      if (n[e].timerId === t) return !0;
    }
    return !1;
  }, /**
  * For Tests: Runs some or all delayed operations early.
  *
  * @param lastTimerId - Delayed operations up to and including this TimerId
  * will be drained. Pass TimerId.All to run all delayed operations.
  * @returns a Promise that resolves once all operations have been run.
  */
  t.prototype.Pc = function (t) ***REMOVED***
    var e = this;
    // Note that draining may generate more delayed ops, so we do that first.
    return this.bc().then(function () ***REMOVED***
      // Run ops in the same order they'd run if they ran naturally.
      e._c.sort(function (t, e) ***REMOVED***
        return t.targetTimeMs - e.targetTimeMs;
      });
      for (var n = 0, r = e._c; n < r.length; n++) ***REMOVED***
        var i = r[n];
        if ((i.skipDelay(), "all" !== /*All*/
        t && i.timerId === t)) break;
      }
      return e.bc();
    });
  }, /**
  * For Tests: Skip all subsequent delays for a timer id.
  */
  t.prototype.Vc = function (t) ***REMOVED***
    this.gc.push(t);
  }, /** Called once a DelayedOperation is run or canceled.*/
  t.prototype.Rc = function (t) ***REMOVED***
    // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
    var e = this._c.indexOf(t);
    this._c.splice(e, 1);
  }, t);
})();
function Zu(t) ***REMOVED***
  /**
  * Returns true if obj is an object and contains at least one of the specified
  * methods.
  */
  return (function (t, e) ***REMOVED***
    if ("object" != typeof t || null === t) return !1;
    for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) ***REMOVED***
      var o = i[r];
      if ((o in n) && "function" == typeof n[o]) return !0;
    }
    return !1;
  })(t);
}
var ta = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***
    (this._progressObserver = ***REMOVED***}, this._taskCompletionResolver = new vr(), this._lastProgress = ***REMOVED***
      taskState: "Running",
      totalBytes: 0,
      totalDocuments: 0,
      bytesLoaded: 0,
      documentsLoaded: 0
    });
  }
  return (t.prototype.onProgress = function (t, e, n) ***REMOVED***
    this._progressObserver = ***REMOVED***
      next: t,
      error: e,
      complete: n
    ***REMOVED***
  }, /**
  * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
  *
  * @param onRejected - Called when an error occurs during bundle loading.
  */
  t.prototype.catch = function (t) ***REMOVED***
    return this._taskCompletionResolver.promise.catch(t);
  }, /**
  * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
  *
  * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
  *   The update will always have its `taskState` set to `"Success"`.
  * @param onRejected - Called when an error occurs during bundle loading.
  */
  t.prototype.then = function (t, e) ***REMOVED***
    return this._taskCompletionResolver.promise.then(t, e);
  }, /**
  * Notifies all observers that bundle loading has completed, with a provided
  * `LoadBundleTaskProgress` object.
  *
  * @private
  */
  t.prototype._completeWith = function (t) ***REMOVED***
    (this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(t));
  }, /**
  * Notifies all observers that bundle loading has failed, with a provided
  * `Error` as the reason.
  *
  * @private
  */
  t.prototype._failWith = function (t) ***REMOVED***
    (this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t));
  }, /**
  * Notifies a progress update of loading a bundle.
  * @param progress - The new progress.
  *
  * @private
  */
  t.prototype._updateProgress = function (t) ***REMOVED***
    (this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t));
  }, t);
})(), ea = -1, na = /** @class*/
(function (t) ***REMOVED***
  /** @hideconstructor*/
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, e, n) || this)._queue = new Ju(), r._persistenceKey = ("name" in e) ? e.name : "[DEFAULT]", r);
  }
  return (_tslib.__extends(e, t), e.prototype._terminate = function () ***REMOVED***
    return (this._firestoreClient || // The client must be initialized to ensure that all subsequent API
    // usage throws an exception.
    ia(this), this._firestoreClient.terminate());
  }, e);
})(Gu);
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** DOMException error code constants.*/
/**
* @internal
*/
function ra(t) ***REMOVED***
  return (t._firestoreClient || ia(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient);
}
function ia(t) ***REMOVED***
  var e, n = t._freezeSettings(), r = (function (t, e, n, r) ***REMOVED***
    return new Nu(t, e, n, r.host, r.ssl, r.experimentalForceLongPolling, r.experimentalAutoDetectLongPolling);
  })(t._databaseId, (null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) || "", t._persistenceKey, n);
  t._firestoreClient = new yu(t._credentials, t._queue, r);
}
/**
* Attempts to enable persistent storage, if possible.
*
* Must be called before any other functions (other than
* ***REMOVED***@link initializeFirestore}, ***REMOVED***@link getFirestore} or
* ***REMOVED***@link clearIndexedDbPersistence}.
*
* If this fails, `enableIndexedDbPersistence()` will reject the promise it
* returns. Note that even after this failure, the `Firestore` instance will
* remain usable, however offline persistence will be disabled.
*
* There are several reasons why this can fail, which can be identified by
* the `code` on the error.
*
*   * failed-precondition: The app is already open in another browser tab.
*   * unimplemented: The browser is incompatible with the offline
*     persistence implementation.
*
* @param firestore - The `Firestore` instance to enable persistence for.
* @param persistenceSettings - Optional settings object to configure
* persistence.
* @returns A promise that represents successfully enabling persistent storage.
*/
/**
* Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
* If the operation fails with a recoverable error (see
* `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
* but the client remains usable.
*/
function oa(t, e, n) ***REMOVED***
  var r = this, i = new vr();
  return t.asyncQueue.enqueue(function () ***REMOVED***
    return _tslib.__awaiter(r, void 0, void 0, function () ***REMOVED***
      var r;
      return _tslib.__generator(this, function (o) ***REMOVED***
        switch (o.label) ***REMOVED***
          case 0:
            return (o.trys.push([0, 3, , 4]), [4, /*yield*/
            vu(t, n)]);
          case 1:
            return (o.sent(), [4, /*yield*/
            mu(t, e)]);
          case 2:
            return (o.sent(), i.resolve(), [3, /*break*/
            4]);
          case 3:
            if (!/**
            * Decides whether the provided error allows us to gracefully disable
            * persistence (as opposed to crashing the client).
            */
            (function (t) ***REMOVED***
              return "FirebaseError" === t.name ? t.code === E.FAILED_PRECONDITION || t.code === E.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (22 === t.code || 20 === t.code || // Firefox Private Browsing mode disables IndexedDb and returns
              // INVALID_STATE for any usage.
              11 === t.code);
            })(r = o.sent())) throw r;
            return (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + r), i.reject(r), [3, /*break*/
            4]);
          case 4:
            return [2];
        }
      });
    });
  }).then(function () ***REMOVED***
    return i.promise;
  });
}
/**
* Re-enables use of the network for this Firestore instance after a prior
* call to ***REMOVED***@link disableNetwork}.
*
* @returns A promise that is resolved once the network has been enabled.
*/
function sa(t) ***REMOVED***
  if (t._initialized || t._terminated) throw new T(E.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A `FieldPath` refers to a field in a document. The path may consist of a
* single field name (referring to a top-level field in the document), or a
* list of field names (referring to a nested field in the document).
*
* Create a `FieldPath` by providing field names. If more than one field
* name is provided, the path will point to a nested field in a document.
*/
var ua = /** @class*/
(function () ***REMOVED***
  /**
  * Creates a FieldPath from the provided field names. If more than one field
  * name is provided, the path will point to a nested field in a document.
  *
  * @param fieldNames - A list of field names.
  */
  function t() ***REMOVED***
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = 0; n < t.length; ++n) if (0 === t[n].length) throw new T(E.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new W(t);
  }
  /**
  * Returns true if this `FieldPath` is equal to the provided one.
  *
  * @param other - The `FieldPath` to compare against.
  * @returns true if this `FieldPath` is equal to the provided one.
  */
  return (t.prototype.isEqual = function (t) ***REMOVED***
    return this._internalPath.isEqual(t._internalPath);
  }, t);
})(), aa = /** @class*/
(function () ***REMOVED***
  /** @hideconstructor*/
  function t(t) ***REMOVED***
    this._byteString = t;
  }
  /**
  * Creates a new `Bytes` object from the given Base64 string, converting it to
  * bytes.
  *
  * @param base64 - The Base64 string used to create the `Bytes` object.
  */
  return (t.fromBase64String = function (e) ***REMOVED***
    try ***REMOVED***
      return new t(Y.fromBase64String(e));
    } catch (e) ***REMOVED***
      throw new T(E.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
    }
  }, /**
  * Creates a new `Bytes` object from the given Uint8Array.
  *
  * @param array - The Uint8Array used to create the `Bytes` object.
  */
  t.fromUint8Array = function (e) ***REMOVED***
    return new t(Y.fromUint8Array(e));
  }, /**
  * Returns the underlying bytes as a Base64-encoded string.
  *
  * @returns The Base64-encoded string created from the `Bytes` object.
  */
  t.prototype.toBase64 = function () ***REMOVED***
    return this._byteString.toBase64();
  }, /**
  * Returns the underlying bytes in a new `Uint8Array`.
  *
  * @returns The Uint8Array created from the `Bytes` object.
  */
  t.prototype.toUint8Array = function () ***REMOVED***
    return this._byteString.toUint8Array();
  }, /**
  * Returns a string representation of the `Bytes` object.
  *
  * @returns A string representation of the `Bytes` object.
  */
  t.prototype.toString = function () ***REMOVED***
    return "Bytes(base64: " + this.toBase64() + ")";
  }, /**
  * Returns true if this `Bytes` object is equal to the provided one.
  *
  * @param other - The `Bytes` object to compare against.
  * @returns true if this `Bytes` object is equal to the provided one.
  */
  t.prototype.isEqual = function (t) ***REMOVED***
    return this._byteString.isEqual(t._byteString);
  }, t);
})(), ca = /**
* @param _methodName - The public API endpoint that returns this class.
* @hideconstructor
*/
function (t) ***REMOVED***
  this._methodName = t;
}, ha = /** @class*/
(function () ***REMOVED***
  /**
  * Creates a new immutable `GeoPoint` object with the provided latitude and
  * longitude values.
  * @param latitude - The latitude as number between -90 and 90.
  * @param longitude - The longitude as number between -180 and 180.
  */
  function t(t, e) ***REMOVED***
    if (!isFinite(t) || t < -90 || t > 90) throw new T(E.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
    if (!isFinite(e) || e < -180 || e > 180) throw new T(E.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    (this._lat = t, this._long = e);
  }
  return (Object.defineProperty(t.prototype, "latitude", ***REMOVED***
    /**
    * The latitude of this `GeoPoint` instance.
    */
    get: function () ***REMOVED***
      return this._lat;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "longitude", ***REMOVED***
    /**
    * The longitude of this `GeoPoint` instance.
    */
    get: function () ***REMOVED***
      return this._long;
    },
    enumerable: !1,
    configurable: !0
  }), /**
  * Returns true if this `GeoPoint` is equal to the provided one.
  *
  * @param other - The `GeoPoint` to compare against.
  * @returns true if this `GeoPoint` is equal to the provided one.
  */
  t.prototype.isEqual = function (t) ***REMOVED***
    return this._lat === t._lat && this._long === t._long;
  }, /** Returns a JSON-serializable representation of this GeoPoint.*/
  t.prototype.toJSON = function () ***REMOVED***
    return ***REMOVED***
      latitude: this._lat,
      longitude: this._long
    ***REMOVED***
  }, /**
  * Actually private to JS consumers of our API, so this function is prefixed
  * with an underscore.
  */
  t.prototype._compareTo = function (t) ***REMOVED***
    return M(this._lat, t._lat) || M(this._long, t._long);
  }, t);
})(), fa = /^__.*__$/, la = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (this.data = t, this.fieldMask = e, this.fieldTransforms = n);
  }
  return (t.prototype.toMutation = function (t, e) ***REMOVED***
    return null !== this.fieldMask ? new Re(t, this.data, this.fieldMask, e, this.fieldTransforms) : new Ce(t, this.data, e, this.fieldTransforms);
  }, t);
})(), da = /** @class*/
(function () ***REMOVED***
  function t(t, // The fieldMask does not include document transforms.
  e, n) ***REMOVED***
    (this.data = t, this.fieldMask = e, this.fieldTransforms = n);
  }
  return (t.prototype.toMutation = function (t, e) ***REMOVED***
    return new Re(t, this.data, this.fieldMask, e, this.fieldTransforms);
  }, t);
})();
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* An immutable object representing an array of bytes.
*/
function pa(t) ***REMOVED***
  switch (t) ***REMOVED***
    case 0:
    case 2:
    case 1:
      /*Update*/
      return !0;
    case 3:
    case 4:
      /*ArrayArgument*/
      return !1;
    default:
      throw C();
  }
}
/** A "context" object passed around while parsing user data.*/
var ya = /** @class*/
(function () ***REMOVED***
  /**
  * Initializes a ParseContext with the given source and path.
  *
  * @param settings - The settings for the parser.
  * @param databaseId - The database ID of the Firestore instance.
  * @param serializer - The serializer to use to generate the Value proto.
  * @param ignoreUndefinedProperties - Whether to ignore undefined properties
  * rather than throw.
  * @param fieldTransforms - A mutable list of field transforms encountered
  * while parsing the data.
  * @param fieldMask - A mutable list of field paths encountered while parsing
  * the data.
  *
  * TODO(b/34871131): We don't support array paths right now, so path can be
  * null to indicate the context represents any location within an array (in
  * which case certain features will not work and errors will be somewhat
  * compromised).
  */
  function t(t, e, n, r, i, o) ***REMOVED***
    (this.settings = t, this.databaseId = e, this.R = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    void 0 === i && this.Sc(), this.fieldTransforms = i || [], this.fieldMask = o || []);
  }
  return (Object.defineProperty(t.prototype, "path", ***REMOVED***
    get: function () ***REMOVED***
      return this.settings.path;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "Dc", ***REMOVED***
    get: function () ***REMOVED***
      return this.settings.Dc;
    },
    enumerable: !1,
    configurable: !0
  }), /** Returns a new context with the specified settings overwritten.*/
  t.prototype.Cc = function (e) ***REMOVED***
    return new t(Object.assign(Object.assign(***REMOVED***}, this.settings), e), this.databaseId, this.R, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }, t.prototype.Nc = function (t) ***REMOVED***
    var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Cc(***REMOVED***
      path: n,
      xc: !1
    });
    return (r.Fc(t), r);
  }, t.prototype.kc = function (t) ***REMOVED***
    var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Cc(***REMOVED***
      path: n,
      xc: !1
    });
    return (r.Sc(), r);
  }, t.prototype.Oc = function (t) ***REMOVED***
    // TODO(b/34871131): We don't support array paths right now; so make path
    // undefined.
    return this.Cc(***REMOVED***
      path: void 0,
      xc: !0
    });
  }, t.prototype.$c = function (t) ***REMOVED***
    return Pa(t, this.settings.methodName, this.settings.Mc || !1, this.path, this.settings.Lc);
  }, /** Returns 'true' if 'fieldPath' was traversed when creating this context.*/
  t.prototype.contains = function (t) ***REMOVED***
    return void 0 !== this.fieldMask.find(function (e) ***REMOVED***
      return t.isPrefixOf(e);
    }) || void 0 !== this.fieldTransforms.find(function (e) ***REMOVED***
      return t.isPrefixOf(e.field);
    });
  }, t.prototype.Sc = function () ***REMOVED***
    // TODO(b/34871131): Remove null check once we have proper paths for fields
    // within arrays.
    if (this.path) for (var t = 0; t < this.path.length; t++) this.Fc(this.path.get(t));
  }, t.prototype.Fc = function (t) ***REMOVED***
    if (0 === t.length) throw this.$c("Document fields must not be empty");
    if (pa(this.Dc) && fa.test(t)) throw this.$c('Document fields cannot begin and end with "__"');
  }, t);
})(), va = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (this.databaseId = t, this.ignoreUndefinedProperties = e, this.R = n || Do(t));
  }
  return (t.prototype.Bc = function (t, e, n, r) ***REMOVED***
    return (void 0 === r && (r = !1), new ya(***REMOVED***
      Dc: t,
      methodName: e,
      Lc: n,
      path: W.emptyPath(),
      xc: !1,
      Mc: r
    }, this.databaseId, this.R, this.ignoreUndefinedProperties));
  }, t);
})();
/**
* Helper for parsing raw user input (provided via the API) into internal model
* classes.
*/
function ma(t) ***REMOVED***
  var e = t._freezeSettings(), n = Do(t._databaseId);
  return new va(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
/** Parse document data from a set() call.*/
function ga(t, e, n, r, i, o) ***REMOVED***
  void 0 === o && (o = ***REMOVED***});
  var s = t.Bc(o.merge || o.mergeFields ? 2 : /*MergeSet*/
  0, /*Set*/
  e, n, i);
  Ca("Data must be an object, but it was:", s, r);
  var u, a, c = ka(r, s);
  if (o.merge) (u = new H(s.fieldMask), a = s.fieldTransforms); else if (o.mergeFields) ***REMOVED***
    for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) ***REMOVED***
      var d = Ra(e, l[f], n);
      if (!s.contains(d)) throw new T(E.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
      Ma(h, d) || h.push(d);
    }
    (u = new H(h), a = s.fieldTransforms.filter(function (t) ***REMOVED***
      return u.covers(t.field);
    }));
  } else (u = null, a = s.fieldTransforms);
  return new la(new bt(c), u, a);
}
var wa = /** @class*/
(function (t) ***REMOVED***
  function e() ***REMOVED***
    return null !== t && t.apply(this, arguments) || this;
  }
  return (_tslib.__extends(e, t), e.prototype._toFieldTransform = function (t) ***REMOVED***
    if (2 !== /*MergeSet*/
    t.Dc) throw 1 === /*Update*/
    t.Dc ? t.$c(this._methodName + "() can only appear at the top level of your update data") : t.$c(this._methodName + "() cannot be used with set() unless you pass ***REMOVED***merge:true}");
    // No transform to add for a delete, but we need to add it to our
    // fieldMask so it gets deleted.
    return (t.fieldMask.push(t.path), null);
  }, e.prototype.isEqual = function (t) ***REMOVED***
    return t instanceof e;
  }, e);
})(ca);
/**
* Creates a child context for parsing SerializableFieldValues.
*
* This is different than calling `ParseContext.contextWith` because it keeps
* the fieldTransforms and fieldMask separate.
*
* The created context has its `dataSource` set to `UserDataSource.Argument`.
* Although these values are used with writes, any elements in these FieldValues
* are not considered writes since they cannot contain any FieldValue sentinels,
* etc.
*
* @param fieldValue - The sentinel FieldValue for which to create a child
*     context.
* @param context - The parent context.
* @param arrayElement - Whether or not the FieldValue has an array.
*/
function ba(t, e, n) ***REMOVED***
  return new ya(***REMOVED***
    Dc: 3,
    /*Argument*/
    Lc: e.settings.Lc,
    methodName: t._methodName,
    xc: n
  }, e.databaseId, e.R, e.ignoreUndefinedProperties);
}
var Ia = /** @class*/
(function (t) ***REMOVED***
  function e() ***REMOVED***
    return null !== t && t.apply(this, arguments) || this;
  }
  return (_tslib.__extends(e, t), e.prototype._toFieldTransform = function (t) ***REMOVED***
    return new Ie(t.path, new de());
  }, e.prototype.isEqual = function (t) ***REMOVED***
    return t instanceof e;
  }, e);
})(ca), _a = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, e) || this).qc = n, r);
  }
  return (_tslib.__extends(e, t), e.prototype._toFieldTransform = function (t) ***REMOVED***
    var e = ba(this, t, /*array=*/
    !0), n = this.qc.map(function (t) ***REMOVED***
      return Aa(t, e);
    }), r = new pe(n);
    return new Ie(t.path, r);
  }, e.prototype.isEqual = function (t) ***REMOVED***
    // TODO(mrschmidt): Implement isEquals
    return this === t;
  }, e);
})(ca), Ea = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, e) || this).qc = n, r);
  }
  return (_tslib.__extends(e, t), e.prototype._toFieldTransform = function (t) ***REMOVED***
    var e = ba(this, t, /*array=*/
    !0), n = this.qc.map(function (t) ***REMOVED***
      return Aa(t, e);
    }), r = new ve(n);
    return new Ie(t.path, r);
  }, e.prototype.isEqual = function (t) ***REMOVED***
    // TODO(mrschmidt): Implement isEquals
    return this === t;
  }, e);
})(ca), Ta = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, e) || this).Uc = n, r);
  }
  return (_tslib.__extends(e, t), e.prototype._toFieldTransform = function (t) ***REMOVED***
    var e = new ge(t.R, ae(t.R, this.Uc));
    return new Ie(t.path, e);
  }, e.prototype.isEqual = function (t) ***REMOVED***
    // TODO(mrschmidt): Implement isEquals
    return this === t;
  }, e);
})(ca);
/** Parse update data from an update() call.*/
function Sa(t, e, n, r) ***REMOVED***
  var i = t.Bc(1, /*Update*/
  e, n);
  Ca("Data must be an object, but it was:", i, r);
  var o = [], s = bt.empty();
  j(r, function (t, r) ***REMOVED***
    var a = La(e, t, n);
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    r = _firebaseUtil.getModularInstance(r);
    var c = i.kc(a);
    if (r instanceof wa) // Add it to the field mask, but don't add anything to updateData.
    o.push(a); else ***REMOVED***
      var h = Aa(r, c);
      null != h && (o.push(a), s.set(a, h));
    }
  });
  var a = new H(o);
  return new da(s, a, i.fieldTransforms);
}
/** Parse update data from a list of field/value arguments.*/
function Da(t, e, n, r, i, o) ***REMOVED***
  var s = t.Bc(1, /*Update*/
  e, n), a = [Ra(e, r, n)], c = [i];
  if (o.length % 2 != 0) throw new T(E.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
  for (var h = 0; h < o.length; h += 2) (a.push(Ra(e, o[h])), c.push(o[h + 1]));
  // We iterate in reverse order to pick the last value for a field if the
  // user specified the field multiple times.
  for (var f = [], l = bt.empty(), d = a.length - 1; d >= 0; --d) if (!Ma(f, a[d])) ***REMOVED***
    var p = a[d], y = c[d];
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    y = _firebaseUtil.getModularInstance(y);
    var v = s.kc(p);
    if (y instanceof wa) // Add it to the field mask, but don't add anything to updateData.
    f.push(p); else ***REMOVED***
      var m = Aa(y, v);
      null != m && (f.push(p), l.set(p, m));
    }
  }
  var g = new H(f);
  return new da(l, g, s.fieldTransforms);
}
/**
* Parse a "query value" (e.g. value in a where filter or a value in a cursor
* bound).
*
* @param allowArrays - Whether the query value is an array that may directly
* contain additional arrays (e.g. the operand of an `in` query).
*/
function Na(t, e, n, r) ***REMOVED***
  return (void 0 === r && (r = !1), Aa(n, t.Bc(r ? 4 : /*ArrayArgument*/
  3, /*Argument*/
  e)));
}
/**
* Parses user data to Protobuf Values.
*
* @param input - Data to be parsed.
* @param context - A context object representing the current path being parsed,
* the source of the data being parsed, etc.
* @returns The parsed value, or null if the value was a FieldValue sentinel
* that should not be included in the resulting parsed data.
*/
function Aa(t, e) ***REMOVED***
  if (xa(// Unwrap the API type from the Compat SDK. This will return the API type
  // from firestore-exp.
  t = _firebaseUtil.getModularInstance(t))) return (Ca("Unsupported field value:", e, t), ka(t, e));
  if (t instanceof ca) // FieldValues usually parse into transforms (except FieldValue.delete())
  // in which case we do not want to include this field in our parsed data
  // (as doing so will overwrite the field directly prior to the transform
  // trying to transform it). So we don't add this location to
  // context.fieldMask and we return null as our parsing result.
  /**
  * "Parses" the provided FieldValueImpl, adding any necessary transforms to
  * context.fieldTransforms.
  */
  return ((function (t, e) ***REMOVED***
    // Sentinels are only supported with writes, and not within arrays.
    if (!pa(e.Dc)) throw e.$c(t._methodName + "() can only be used with update() and set()");
    if (!e.path) throw e.$c(t._methodName + "() is not currently supported inside arrays");
    var n = t._toFieldTransform(e);
    n && e.fieldTransforms.push(n);
  })(t, e), null);
  if (void 0 === t && e.ignoreUndefinedProperties) // If the input is undefined it can never participate in the fieldMask, so
  // don't handle this below. If `ignoreUndefinedProperties` is false,
  // `parseScalarValue` will reject an undefined value.
  return null;
  if (// If context.path is null we are inside an array and we don't support
  // field mask paths more granular than the top-level array.
  (e.path && e.fieldMask.push(e.path), t instanceof Array)) ***REMOVED***
    // TODO(b/34871131): Include the path containing the array in the error
    // message.
    // In the case of IN queries, the parsed data is an array (representing
    // the set of values to be included for the IN query) that may directly
    // contain additional arrays (each representing an individual field
    // value), so we disable this validation.
    if (e.settings.xc && 4 !== /*ArrayArgument*/
    e.Dc) throw e.$c("Nested arrays are not supported");
    return (function (t, e) ***REMOVED***
      for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) ***REMOVED***
        var s = Aa(o[i], e.Oc(r));
        (null == s && (// Just include nulls in the array for fields being replaced with a
        // sentinel.
        s = ***REMOVED***
          nullValue: "NULL_VALUE"
        }), n.push(s), r++);
      }
      return ***REMOVED***
        arrayValue: ***REMOVED***
          values: n
        }
      ***REMOVED***
    })(t, e);
  }
  return (function (t, e) ***REMOVED***
    if (null === (t = _firebaseUtil.getModularInstance(t))) return ***REMOVED***
      nullValue: "NULL_VALUE"
    ***REMOVED***
    if ("number" == typeof t) return ae(e.R, t);
    if ("boolean" == typeof t) return ***REMOVED***
      booleanValue: t
    ***REMOVED***
    if ("string" == typeof t) return ***REMOVED***
      stringValue: t
    ***REMOVED***
    if (t instanceof Date) ***REMOVED***
      var n = q.fromDate(t);
      return ***REMOVED***
        timestampValue: mn(e.R, n)
      ***REMOVED***
    }
    if (t instanceof q) ***REMOVED***
      // Firestore backend truncates precision down to microseconds. To ensure
      // offline mode works the same with regards to truncation, perform the
      // truncation immediately without waiting for the backend to do that.
      n = new q(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
      return ***REMOVED***
        timestampValue: mn(e.R, n)
      ***REMOVED***
    }
    if (t instanceof ha) return ***REMOVED***
      geoPointValue: ***REMOVED***
        latitude: t.latitude,
        longitude: t.longitude
      }
    ***REMOVED***
    if (t instanceof aa) return ***REMOVED***
      bytesValue: gn(e.R, t._byteString)
    ***REMOVED***
    if (t instanceof Qu) ***REMOVED***
      n = e.databaseId;
      var r = t.firestore._databaseId;
      if (!r.isEqual(n)) throw e.$c("Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
      return ***REMOVED***
        referenceValue: In(t.firestore._databaseId || e.databaseId, t._key.path)
      ***REMOVED***
    }
    throw e.$c("Unsupported field value: " + Uu(t));
  })(t, e);
}
function ka(t, e) ***REMOVED***
  var n = ***REMOVED******REMOVED***
  return (K(t) ? // If we encounter an empty object, we explicitly add it to the update
  // mask to ensure that the server creates a map entry.
  e.path && e.path.length > 0 && e.fieldMask.push(e.path) : j(t, function (t, r) ***REMOVED***
    var i = Aa(r, e.Nc(t));
    null != i && (n[t] = i);
  }), ***REMOVED***
    mapValue: ***REMOVED***
      fields: n
    }
  });
}
function xa(t) ***REMOVED***
  return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof q || t instanceof ha || t instanceof aa || t instanceof Qu || t instanceof ca);
}
function Ca(t, e, n) ***REMOVED***
  if (!xa(n) || !(function (t) ***REMOVED***
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
  })(n)) ***REMOVED***
    var r = Uu(n);
    throw "an object" === r ? e.$c(t + " a custom object") : e.$c(t + " " + r);
  }
}
/**
* Helper that calls fromDotSeparatedString() but wraps any error thrown.
*/
function Ra(t, e, n) ***REMOVED***
  if (// If required, replace the FieldPath Compat class with with the firestore-exp
  // FieldPath.
  (e = _firebaseUtil.getModularInstance(e)) instanceof ua) return e._internalPath;
  if ("string" == typeof e) return La(t, e);
  throw Pa("Field path arguments must be of type string or FieldPath.", t, /*hasConverter=*/
  !1, /*path=*/
  void 0, n);
}
/**
* Matches any characters in a field path string that are reserved.
*/
var Oa = new RegExp("[~\\*/\\[\\]]");
/**
* Wraps fromDotSeparatedString with an error message about the method that
* was thrown.
* @param methodName - The publicly visible method name
* @param path - The dot-separated string form of a field path which will be
* split on dots.
* @param targetDoc - The document against which the field path will be
* evaluated.
*/
function La(t, e, n) ***REMOVED***
  if (e.search(Oa) >= 0) throw Pa("Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'", t, /*hasConverter=*/
  !1, /*path=*/
  void 0, n);
  try ***REMOVED***
    return new (ua.bind.apply(ua, _tslib.__spreadArray([void 0], e.split("."))))()._internalPath;
  } catch (r) ***REMOVED***
    throw Pa("Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t, /*hasConverter=*/
    !1, /*path=*/
    void 0, n);
  }
}
function Pa(t, e, n, r, i) ***REMOVED***
  var o = r && !r.isEmpty(), s = void 0 !== i, u = "Function " + e + "() called with invalid data";
  n && (u += " (via `toFirestore()`)");
  var a = "";
  return ((o || s) && (a += " (found", o && (a += " in field " + r), s && (a += " in document " + i), a += ")"), new T(E.INVALID_ARGUMENT, (u += ". ") + t + a));
}
function Ma(t, e) ***REMOVED***
  return t.some(function (t) ***REMOVED***
    return t.isEqual(e);
  });
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A `DocumentSnapshot` contains data read from a document in your Firestore
* database. The data can be extracted with `.data()` or `.get(<field>)` to
* get a specific field.
*
* For a `DocumentSnapshot` that points to a non-existing document, any data
* access will return 'undefined'. You can use the `exists()` method to
* explicitly verify a document's existence.
*/
var Fa = /** @class*/
(function () ***REMOVED***
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected*/
  function t(t, e, n, r, i) ***REMOVED***
    (this._firestore = t, this._userDataWriter = e, this._key = n, this._document = r, this._converter = i);
  }
  return (Object.defineProperty(t.prototype, "id", ***REMOVED***
    /** Property of the `DocumentSnapshot` that provides the document's ID.*/
    get: function () ***REMOVED***
      return this._key.path.lastSegment();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "ref", ***REMOVED***
    /**
    * The `DocumentReference` for the document included in the `DocumentSnapshot`.
    */
    get: function () ***REMOVED***
      return new Qu(this._firestore, this._converter, this._key);
    },
    enumerable: !1,
    configurable: !0
  }), /**
  * Signals whether or not the document at the snapshot's location exists.
  *
  * @returns true if the document exists.
  */
  t.prototype.exists = function () ***REMOVED***
    return null !== this._document;
  }, /**
  * Retrieves all fields in the document as an `Object`. Returns `undefined` if
  * the document doesn't exist.
  *
  * @returns An `Object` containing all fields in the document or `undefined`
  * if the document doesn't exist.
  */
  t.prototype.data = function () ***REMOVED***
    if (this._document) ***REMOVED***
      if (this._converter) ***REMOVED***
        // We only want to use the converter and create a new DocumentSnapshot
        // if a converter has been provided.
        var t = new Va(this._firestore, this._userDataWriter, this._key, this._document, /*converter=*/
        null);
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.toProto());
    }
  }, /**
  * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
  * document or field doesn't exist.
  *
  * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
  * field.
  * @returns The data at the specified field location or undefined if no such
  * field exists in the document.
  */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t.prototype.get = function (t) ***REMOVED***
    if (this._document) ***REMOVED***
      var e = this._document.data.field(qa("DocumentSnapshot.get", t));
      if (null !== e) return this._userDataWriter.convertValue(e);
    }
  }, t);
})(), Va = /** @class*/
(function (t) ***REMOVED***
  function e() ***REMOVED***
    return null !== t && t.apply(this, arguments) || this;
  }
  /**
  * Retrieves all fields in the document as an `Object`.
  *
  * @override
  * @returns An `Object` containing all fields in the document.
  */
  return (_tslib.__extends(e, t), e.prototype.data = function () ***REMOVED***
    return t.prototype.data.call(this);
  }, e);
})(Fa);
/**
* A `QueryDocumentSnapshot` contains data read from a document in your
* Firestore database as part of a query. The document is guaranteed to exist
* and its data can be extracted with `.data()` or `.get(<field>)` to get a
* specific field.
*
* A `QueryDocumentSnapshot` offers the same API surface as a
* `DocumentSnapshot`. Since query results contain only existing documents, the
* `exists` property will always be true and `data()` will never return
* 'undefined'.
*/
/**
* Helper that calls fromDotSeparatedString() but wraps any error thrown.
*/
function qa(t, e) ***REMOVED***
  return "string" == typeof e ? La(t, e) : e instanceof ua ? e._internalPath : e._delegate._internalPath;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Metadata about a snapshot, describing the state of the snapshot.
*/
var Ua = /** @class*/
(function () ***REMOVED***
  /** @hideconstructor*/
  function t(t, e) ***REMOVED***
    (this.hasPendingWrites = t, this.fromCache = e);
  }
  return (t.prototype.isEqual = function (t) ***REMOVED***
    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
  }, t);
})(), Ba = /** @class*/
(function (t) ***REMOVED***
  /** @hideconstructor protected*/
  function e(e, n, r, i, o, s) ***REMOVED***
    var u = this;
    return ((u = t.call(this, e, n, r, i, s) || this)._firestore = e, u._firestoreImpl = e, u.metadata = o, u);
  }
  /**
  * Property of the `DocumentSnapshot` that signals whether or not the data
  * exists. True if the document exists.
  */
  return (_tslib.__extends(e, t), e.prototype.exists = function () ***REMOVED***
    return t.prototype.exists.call(this);
  }, /**
  * Retrieves all fields in the document as an `Object`. Returns `undefined` if
  * the document doesn't exist.
  *
  * By default, `FieldValue.serverTimestamp()` values that have not yet been
  * set to their final value will be returned as `null`. You can override
  * this by passing an options object.
  *
  * @param options - An options object to configure how data is retrieved from
  * the snapshot (for example the desired behavior for server timestamps that
  * have not yet been set to their final value).
  * @returns An `Object` containing all fields in the document or `undefined` if
  * the document doesn't exist.
  */
  e.prototype.data = function (t) ***REMOVED***
    if ((void 0 === t && (t = ***REMOVED***}), this._document)) ***REMOVED***
      if (this._converter) ***REMOVED***
        // We only want to use the converter and create a new DocumentSnapshot
        // if a converter has been provided.
        var e = new ja(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, /*converter=*/
        null);
        return this._converter.fromFirestore(e, t);
      }
      return this._userDataWriter.convertValue(this._document.data.toProto(), t.serverTimestamps);
    }
  }, /**
  * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
  * document or field doesn't exist.
  *
  * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
  * its final value will be returned as `null`. You can override this by
  * passing an options object.
  *
  * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
  * field.
  * @param options - An options object to configure how the field is retrieved
  * from the snapshot (for example the desired behavior for server timestamps
  * that have not yet been set to their final value).
  * @returns The data at the specified field location or undefined if no such
  * field exists in the document.
  */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  e.prototype.get = function (t, e) ***REMOVED***
    if ((void 0 === e && (e = ***REMOVED***}), this._document)) ***REMOVED***
      var n = this._document.data.field(qa("DocumentSnapshot.get", t));
      if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
    }
  }, e);
})(Fa), ja = /** @class*/
(function (t) ***REMOVED***
  function e() ***REMOVED***
    return null !== t && t.apply(this, arguments) || this;
  }
  /**
  * Retrieves all fields in the document as an `Object`.
  *
  * By default, `FieldValue.serverTimestamp()` values that have not yet been
  * set to their final value will be returned as `null`. You can override
  * this by passing an options object.
  *
  * @override
  * @param options - An options object to configure how data is retrieved from
  * the snapshot (for example the desired behavior for server timestamps that
  * have not yet been set to their final value).
  * @returns An `Object` containing all fields in the document.
  */
  return (_tslib.__extends(e, t), e.prototype.data = function (e) ***REMOVED***
    return (void 0 === e && (e = ***REMOVED***}), t.prototype.data.call(this, e));
  }, e);
})(Ba), Ka = /** @class*/
(function () ***REMOVED***
  /** @hideconstructor*/
  function t(t, e, n, r) ***REMOVED***
    (this._firestore = t, this._userDataWriter = e, this._snapshot = r, this.metadata = new Ua(r.hasPendingWrites, r.fromCache), this.query = n);
  }
  return (Object.defineProperty(t.prototype, "docs", ***REMOVED***
    /** An array of all the documents in the `QuerySnapshot`.*/
    get: function () ***REMOVED***
      var t = [];
      return (this.forEach(function (e) ***REMOVED***
        return t.push(e);
      }), t);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "size", ***REMOVED***
    /** The number of documents in the `QuerySnapshot`.*/
    get: function () ***REMOVED***
      return this._snapshot.docs.size;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "empty", ***REMOVED***
    /** True if there are no documents in the `QuerySnapshot`.*/
    get: function () ***REMOVED***
      return 0 === this.size;
    },
    enumerable: !1,
    configurable: !0
  }), /**
  * Enumerates all of the documents in the `QuerySnapshot`.
  *
  * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
  * each document in the snapshot.
  * @param thisArg - The `this` binding for the callback.
  */
  t.prototype.forEach = function (t, e) ***REMOVED***
    var n = this;
    this._snapshot.docs.forEach(function (r) ***REMOVED***
      t.call(e, new ja(n._firestore, n._userDataWriter, r.key, r, new Ua(n._snapshot.mutatedKeys.has(r.key), n._snapshot.fromCache), n.query._converter));
    });
  }, /**
  * Returns an array of the documents changes since the last snapshot. If this
  * is the first snapshot, all documents will be in the list as 'added'
  * changes.
  *
  * @param options - `SnapshotListenOptions` that control whether metadata-only
  * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
  * snapshot events.
  */
  t.prototype.docChanges = function (t) ***REMOVED***
    void 0 === t && (t = ***REMOVED***});
    var e = !!t.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges) throw new T(E.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass ***REMOVED*** includeMetadataChanges:true } to onSnapshot().");
    return (this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = /** Calculates the array of DocumentChanges for a given ViewSnapshot.*/
    (function (t, e) ***REMOVED***
      if (t._snapshot.oldDocs.isEmpty()) ***REMOVED***
        // Special case the first snapshot because index calculation is easy and
        // fast
        var n = 0;
        return t._snapshot.docChanges.map(function (e) ***REMOVED***
          var r = new ja(t._firestore, t._userDataWriter, e.doc.key, e.doc, new Ua(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query._converter);
          return (e.doc, ***REMOVED***
            type: "added",
            doc: r,
            oldIndex: -1,
            newIndex: n++
          });
        });
      }
      // A DocumentSet that is updated incrementally as changes are applied to use
      // to lookup the index of a document.
      var r = t._snapshot.oldDocs;
      return t._snapshot.docChanges.filter(function (t) ***REMOVED***
        return e || 3 !== /*Metadata*/
        t.type;
      }).map(function (e) ***REMOVED***
        var n = new ja(t._firestore, t._userDataWriter, e.doc.key, e.doc, new Ua(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query._converter), i = -1, o = -1;
        return (0 !== /*Added*/
        e.type && (i = r.indexOf(e.doc.key), r = r.delete(e.doc.key)), 1 !== /*Removed*/
        e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)), ***REMOVED***
          type: Ga(e.type),
          doc: n,
          oldIndex: i,
          newIndex: o
        });
      });
    })(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges);
  }, t);
})();
/**
* A `DocumentSnapshot` contains data read from a document in your Firestore
* database. The data can be extracted with `.data()` or `.get(<field>)` to
* get a specific field.
*
* For a `DocumentSnapshot` that points to a non-existing document, any data
* access will return 'undefined'. You can use the `exists()` method to
* explicitly verify a document's existence.
*/
function Ga(t) ***REMOVED***
  switch (t) ***REMOVED***
    case 0:
      /*Added*/
      return "added";
    case 2:
    case 3:
      /*Metadata*/
      return "modified";
    case 1:
      /*Removed*/
      return "removed";
    default:
      return C();
  }
}
// TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata
/**
* Returns true if the provided snapshots are equal.
*
* @param left - A snapshot to compare.
* @param right - A snapshot to compare.
* @returns true if the snapshots are equal.
*/
function Qa(t, e) ***REMOVED***
  return t instanceof Ba && e instanceof Ba ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof Ka && e instanceof Ka && t._firestore === e._firestore && $u(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._snapshot.isEqual(e._snapshot);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function za(t) ***REMOVED***
  if (Wt(t) && 0 === t.explicitOrderBy.length) throw new T(E.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
/**
* A `QueryConstraint` is used to narrow the set of documents returned by a
* Firestore query. `QueryConstraint`s are created by invoking ***REMOVED***@link where},
* ***REMOVED***@link orderBy}, ***REMOVED***@link (startAt:1)}, ***REMOVED***@link (startAfter:1)}, ***REMOVED***@link
* endBefore:1}, ***REMOVED***@link (endAt:1)}, ***REMOVED***@link limit} or ***REMOVED***@link limitToLast} and
* can then be passed to ***REMOVED***@link query} to create a new query instance that
* also contains this `QueryConstraint`.
*/
var Wa = function () ***REMOVED******REMOVED***
/**
* Creates a new immutable instance of `Query` that is extended to also include
* additional query constraints.
*
* @param query - The Query instance to use as a base for the new constraints.
* @param queryConstraints - The list of `QueryConstraint`s to apply.
* @throws if any of the provided query constraints cannot be combined with the
* existing or new constraints.
*/
function Ha(t) ***REMOVED***
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  for (var r = 0, i = e; r < i.length; r++) ***REMOVED***
    var o = i[r];
    t = o._apply(t);
  }
  return t;
}
var Ya = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r) ***REMOVED***
    var i = this;
    return ((i = t.call(this) || this).Qc = e, i.Kc = n, i.jc = r, i.type = "where", i);
  }
  return (_tslib.__extends(e, t), e.prototype._apply = function (t) ***REMOVED***
    var e = ma(t.firestore), n = (function (t, e, n, r, i, o, s) ***REMOVED***
      var u;
      if (i.isKeyField()) ***REMOVED***
        if ("array-contains" === /*ARRAY_CONTAINS*/
        o || "array-contains-any" === /*ARRAY_CONTAINS_ANY*/
        o) throw new T(E.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
        if ("in" === /*IN*/
        o || "not-in" === /*NOT_IN*/
        o) ***REMOVED***
          nc(s, o);
          for (var a = [], c = 0, h = s; c < h.length; c++) ***REMOVED***
            var f = h[c];
            a.push(ec(r, t, f));
          }
          u = ***REMOVED***
            arrayValue: ***REMOVED***
              values: a
            }
          ***REMOVED***
        } else u = ec(r, t, s);
      } else ("in" !== /*IN*/
      o && "not-in" !== /*NOT_IN*/
      o && "array-contains-any" !== /*ARRAY_CONTAINS_ANY*/
      o || nc(s, o), u = Na(n, "where", s, /*allowArrays=*/
      "in" === /*IN*/
      o || "not-in" === /*NOT_IN*/
      o));
      var l = At.create(i, o, u);
      return ((function (t, e) ***REMOVED***
        if (e.g()) ***REMOVED***
          var n = Yt(t);
          if (null !== n && !n.isEqual(e.field)) throw new T(E.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
          var r = Ht(t);
          null !== r && rc(t, e.field, r);
        }
        var i = (function (t, e) ***REMOVED***
          for (var n = 0, r = t.filters; n < r.length; n++) ***REMOVED***
            var i = r[n];
            if (e.indexOf(i.op) >= 0) return i.op;
          }
          return null;
        })(t, /**
        * Given an operator, returns the set of operators that cannot be used with it.
        *
        * Operators in a query must adhere to the following set of rules:
        * 1. Only one array operator is allowed.
        * 2. Only one disjunctive operator is allowed.
        * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
        * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
        *
        * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
        * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
        */
        (function (t) ***REMOVED***
          switch (t) ***REMOVED***
            case "!=":
              /*NOT_EQUAL*/
              return ["!=", /*NOT_EQUAL*/
              /*NOT_EQUAL*/
              "not-in"];
            case "array-contains":
              /*ARRAY_CONTAINS*/
              return ["array-contains", /*ARRAY_CONTAINS*/
              /*ARRAY_CONTAINS*/
              "array-contains-any", /*ARRAY_CONTAINS*/
              /*ARRAY_CONTAINS*/
              /*ARRAY_CONTAINS_ANY*/
              "not-in"];
            case "in":
              /*IN*/
              return ["array-contains-any", /*IN*/
              /*ARRAY_CONTAINS_ANY*/
              "in", /*IN*/
              /*ARRAY_CONTAINS_ANY*/
              /*IN*/
              "not-in"];
            case "array-contains-any":
              /*ARRAY_CONTAINS_ANY*/
              return ["array-contains", /*ARRAY_CONTAINS_ANY*/
              /*ARRAY_CONTAINS*/
              "array-contains-any", /*ARRAY_CONTAINS_ANY*/
              /*ARRAY_CONTAINS*/
              /*ARRAY_CONTAINS_ANY*/
              "in", /*ARRAY_CONTAINS_ANY*/
              /*ARRAY_CONTAINS*/
              /*ARRAY_CONTAINS_ANY*/
              /*IN*/
              "not-in"];
            case "not-in":
              /*NOT_IN*/
              return ["array-contains", /*NOT_IN*/
              /*ARRAY_CONTAINS*/
              "array-contains-any", /*NOT_IN*/
              /*ARRAY_CONTAINS*/
              /*ARRAY_CONTAINS_ANY*/
              "in", /*NOT_IN*/
              /*ARRAY_CONTAINS*/
              /*ARRAY_CONTAINS_ANY*/
              /*IN*/
              "not-in", /*NOT_IN*/
              /*ARRAY_CONTAINS*/
              /*ARRAY_CONTAINS_ANY*/
              /*IN*/
              /*NOT_IN*/
              "!="];
            default:
              return [];
          }
        })(e.op));
        if (null !== i) // Special case when it's a duplicate op to give a slightly clearer error message.
        throw i === e.op ? new T(E.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new T(E.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
      })(t, l), l);
    })(t._query, 0, e, t.firestore._databaseId, this.Qc, this.Kc, this.jc);
    return new zu(t.firestore, t._converter, (function (t, e) ***REMOVED***
      var n = t.filters.concat([e]);
      return new Kt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
    })(t._query, n));
  }, e);
})(Wa), Xa = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this) || this).Qc = e, r.Wc = n, r.type = "orderBy", r);
  }
  return (_tslib.__extends(e, t), e.prototype._apply = function (t) ***REMOVED***
    var e = (function (t, e, n) ***REMOVED***
      if (null !== t.startAt) throw new T(E.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== t.endAt) throw new T(E.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      var r = new qt(e, n);
      return ((function (t, e) ***REMOVED***
        if (null === Ht(t)) ***REMOVED***
          // This is the first order by. It must match any inequality.
          var n = Yt(t);
          null !== n && rc(t, n, e.field);
        }
      })(t, r), r);
    })(t._query, this.Qc, this.Wc);
    return new zu(t.firestore, t._converter, (function (t, e) ***REMOVED***
      // TODO(dimond): validate that orderBy does not list the same key twice.
      var n = t.explicitOrderBy.concat([e]);
      return new Kt(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
    })(t._query, e));
  }, e);
})(Wa), $a = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r) ***REMOVED***
    var i = this;
    return ((i = t.call(this) || this).type = e, i.Gc = n, i.zc = r, i);
  }
  return (_tslib.__extends(e, t), e.prototype._apply = function (t) ***REMOVED***
    return new zu(t.firestore, t._converter, Zt(t._query, this.Gc, this.zc));
  }, e);
})(Wa), Ja = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r) ***REMOVED***
    var i = this;
    return ((i = t.call(this) || this).type = e, i.Hc = n, i.Jc = r, i);
  }
  return (_tslib.__extends(e, t), e.prototype._apply = function (t) ***REMOVED***
    var e = tc(t, this.type, this.Hc, this.Jc);
    return new zu(t.firestore, t._converter, (function (t, e) ***REMOVED***
      return new Kt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
    })(t._query, e));
  }, e);
})(Wa), Za = /** @class*/
(function (t) ***REMOVED***
  function e(e, n, r) ***REMOVED***
    var i = this;
    return ((i = t.call(this) || this).type = e, i.Hc = n, i.Jc = r, i);
  }
  return (_tslib.__extends(e, t), e.prototype._apply = function (t) ***REMOVED***
    var e = tc(t, this.type, this.Hc, this.Jc);
    return new zu(t.firestore, t._converter, (function (t, e) ***REMOVED***
      return new Kt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
    })(t._query, e));
  }, e);
})(Wa);
/**
* Creates a `QueryConstraint` that enforces that documents must contain the
* specified field and that the value should satisfy the relation constraint
* provided.
*
* @param fieldPath - The path to compare
* @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
*   "&lt;=", "!=").
* @param value - The value for comparison
* @returns The created `Query`.
*/
/** Helper function to create a bound from a document or fields*/
function tc(t, e, n, r) ***REMOVED***
  if ((n[0] = _firebaseUtil.getModularInstance(n[0]), n[0] instanceof Fa)) return (function (t, e, n, r, i) ***REMOVED***
    if (!r) throw new T(E.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
    // Because people expect to continue/end a query at the exact document
    // provided, we need to use the implicit sort order rather than the explicit
    // sort order, because it's guaranteed to contain the document key. That way
    // the position becomes unambiguous and the query continues/ends exactly at
    // the provided document. Without the key (by using the explicit sort
    // orders), multiple documents could match the position, yielding duplicate
    // results.
    for (var o = [], s = 0, u = $t(t); s < u.length; s++) ***REMOVED***
      var a = u[s];
      if (a.field.isKeyField()) o.push(pt(e, r.key)); else ***REMOVED***
        var c = r.data.field(a.field);
        if (tt(c)) throw new T(E.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
        if (null === c) ***REMOVED***
          var h = a.field.canonicalString();
          throw new T(E.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
        }
        o.push(c);
      }
    }
    return new Ft(o, i);
  })(t._query, t.firestore._databaseId, e, n[0]._document, r);
  var i = ma(t.firestore);
  return (function (t, e, n, r, i, o) ***REMOVED***
    // Use explicit order by's because it has to match the query the user made
    var s = t.explicitOrderBy;
    if (i.length > s.length) throw new T(E.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
    for (var u = [], a = 0; a < i.length; a++) ***REMOVED***
      var c = i[a];
      if (s[a].field.isKeyField()) ***REMOVED***
        if ("string" != typeof c) throw new T(E.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
        if (!Xt(t) && -1 !== c.indexOf("/")) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
        var h = t.path.child(Q.fromString(c));
        if (!st.isDocumentKey(h)) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
        var f = new st(h);
        u.push(pt(e, f));
      } else ***REMOVED***
        var l = Na(n, r, c);
        u.push(l);
      }
    }
    return new Ft(u, o);
  })(t._query, t.firestore._databaseId, i, e, n, r);
}
function ec(t, e, n) ***REMOVED***
  if ("string" == typeof (n = _firebaseUtil.getModularInstance(n))) ***REMOVED***
    if ("" === n) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!Xt(e) && -1 !== n.indexOf("/")) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
    var r = e.path.child(Q.fromString(n));
    if (!st.isDocumentKey(r)) throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
    return pt(t, new st(r));
  }
  if (n instanceof Qu) return pt(t, n._key);
  throw new T(E.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Uu(n) + ".");
}
/**
* Validates that the value passed into a disjunctive filter satisfies all
* array requirements.
*/
function nc(t, e) ***REMOVED***
  if (!Array.isArray(t) || 0 === t.length) throw new T(E.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
  if (t.length > 10) throw new T(E.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
}
function rc(t, e, n) ***REMOVED***
  if (!n.isEqual(e)) throw new T(E.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Converts Firestore's internal types to the JavaScript types that we expose
* to the user.
*
* @internal
*/
var ic = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***}
  return (t.prototype.convertValue = function (t, e) ***REMOVED***
    switch ((void 0 === e && (e = "none"), ut(t))) ***REMOVED***
      case 0:
        /*NullValue*/
        return null;
      case 1:
        /*BooleanValue*/
        return t.booleanValue;
      case 2:
        /*NumberValue*/
        return J(t.integerValue || t.doubleValue);
      case 3:
        /*TimestampValue*/
        return this.convertTimestamp(t.timestampValue);
      case 4:
        /*ServerTimestampValue*/
        return this.convertServerTimestamp(t, e);
      case 5:
        /*StringValue*/
        return t.stringValue;
      case 6:
        /*BlobValue*/
        return this.convertBytes(Z(t.bytesValue));
      case 7:
        /*RefValue*/
        return this.convertReference(t.referenceValue);
      case 8:
        /*GeoPointValue*/
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        /*ArrayValue*/
        return this.convertArray(t.arrayValue, e);
      case 10:
        /*ObjectValue*/
        return this.convertObject(t.mapValue, e);
      default:
        throw C();
    }
  }, t.prototype.convertObject = function (t, e) ***REMOVED***
    var n = this, r = ***REMOVED******REMOVED***
    return (j(t.fields || (***REMOVED***}), function (t, i) ***REMOVED***
      r[t] = n.convertValue(i, e);
    }), r);
  }, t.prototype.convertGeoPoint = function (t) ***REMOVED***
    return new ha(J(t.latitude), J(t.longitude));
  }, t.prototype.convertArray = function (t, e) ***REMOVED***
    var n = this;
    return (t.values || []).map(function (t) ***REMOVED***
      return n.convertValue(t, e);
    });
  }, t.prototype.convertServerTimestamp = function (t, e) ***REMOVED***
    switch (e) ***REMOVED***
      case "previous":
        var n = et(t);
        return null == n ? null : this.convertValue(n, e);
      case "estimate":
        return this.convertTimestamp(nt(t));
      default:
        return null;
    }
  }, t.prototype.convertTimestamp = function (t) ***REMOVED***
    var e = $(t);
    return new q(e.seconds, e.nanos);
  }, t.prototype.convertDocumentKey = function (t, e) ***REMOVED***
    var n = Q.fromString(t);
    R(zn(n));
    var r = new Au(n.get(1), n.get(3)), i = new st(n.popFirst(5));
    return (r.isEqual(e) || // TODO(b/64130202): Somehow support foreign references.
    A("Document " + i + " contains a document reference within a different database (" + r.projectId + "/" + r.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), i);
  }, t);
})();
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* Converts custom model object of type T into DocumentData by applying the
* converter if it exists.
*
* This function is used when converting user objects to DocumentData
* because we want to provide the user with a more specific error message if
* their set() or fails due to invalid data originating from a toFirestore()
* call.
*/
function oc(t, e, n) ***REMOVED***
  // Cast to `any` in order to satisfy the union type constraint on
  // toFirestore().
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}
var sc = /** @class*/
(function (t) ***REMOVED***
  function e(e) ***REMOVED***
    var n = this;
    return ((n = t.call(this) || this).firestore = e, n);
  }
  return (_tslib.__extends(e, t), e.prototype.convertBytes = function (t) ***REMOVED***
    return new aa(t);
  }, e.prototype.convertReference = function (t) ***REMOVED***
    var e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new Qu(this.firestore, /*converter=*/
    null, e);
  }, e);
})(ic), uc = /** @class*/
(function () ***REMOVED***
  /** @hideconstructor*/
  function t(t, e) ***REMOVED***
    (this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, this._dataReader = ma(t));
  }
  return (t.prototype.set = function (t, e, n) ***REMOVED***
    this._verifyNotCommitted();
    var r = ac(t, this._firestore), i = oc(r._converter, e, n), o = ga(this._dataReader, "WriteBatch.set", r._key, i, null !== r._converter, n);
    return (this._mutations.push(o.toMutation(r._key, Ee.none())), this);
  }, t.prototype.update = function (t, e, n) ***REMOVED***
    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
    this._verifyNotCommitted();
    var o, s = ac(t, this._firestore);
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    return (o = "string" == typeof (e = _firebaseUtil.getModularInstance(e)) || e instanceof ua ? Da(this._dataReader, "WriteBatch.update", s._key, e, n, r) : Sa(this._dataReader, "WriteBatch.update", s._key, e), this._mutations.push(o.toMutation(s._key, Ee.exists(!0))), this);
  }, /**
  * Deletes the document referred to by the provided ***REMOVED***@link DocumentReference}.
  *
  * @param documentRef - A reference to the document to be deleted.
  * @returns This `WriteBatch` instance. Used for chaining method calls.
  */
  t.prototype.delete = function (t) ***REMOVED***
    this._verifyNotCommitted();
    var e = ac(t, this._firestore);
    return (this._mutations = this._mutations.concat(new Ve(e._key, Ee.none())), this);
  }, /**
  * Commits all of the writes in this write batch as a single atomic unit.
  *
  * The result of these writes will only be reflected in document reads that
  * occur after the returned Promise resolves. If the client is offline, the
  * write fails. If you would like to see local modifications or buffer writes
  * until the client is online, use the full Firestore SDK.
  *
  * @returns A Promise resolved once all of the writes in the batch have been
  * successfully written to the backend as an atomic unit (note that it won't
  * resolve while you're offline).
  */
  t.prototype.commit = function () ***REMOVED***
    return (this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve());
  }, t.prototype._verifyNotCommitted = function () ***REMOVED***
    if (this._committed) throw new T(E.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }, t);
})();
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A write batch, used to perform multiple writes as a single atomic unit.
*
* A `WriteBatch` object can be acquired by calling ***REMOVED***@link writeBatch}. It
* provides methods for adding writes to the write batch. None of the writes
* will be committed (or visible locally) until ***REMOVED***@link WriteBatch.commit} is
* called.
*/
function ac(t, e) ***REMOVED***
  if ((t = _firebaseUtil.getModularInstance(t)).firestore !== e) throw new T(E.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t;
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
* A reference to a transaction.
*
* The `Transaction` object passed to a transaction's `updateFunction` provides
* the methods to read and write data within the transaction context. See
* ***REMOVED***@link runTransaction}.
*/
var cc = /** @class*/
(function (t) ***REMOVED***
  function e(e) ***REMOVED***
    var n = this;
    return ((n = t.call(this) || this).firestore = e, n);
  }
  return (_tslib.__extends(e, t), e.prototype.convertBytes = function (t) ***REMOVED***
    return new aa(t);
  }, e.prototype.convertReference = function (t) ***REMOVED***
    var e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new Qu(this.firestore, /*converter=*/
    null, e);
  }, e);
})(ic);
/**
* Reads the document referred to by this `DocumentReference` from cache.
* Returns an error if the document is not currently cached.
*
* @returns A Promise resolved with a `DocumentSnapshot` containing the
* current document contents.
*/
function hc(t, e, n) ***REMOVED***
  for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
  t = Bu(t, Qu);
  var o = Bu(t.firestore, na), s = ma(o);
  return lc(o, [("string" == typeof (// For Compat types, we have to "extract" the underlying types before
  // performing validation.
  e = _firebaseUtil.getModularInstance(e)) || e instanceof ua ? Da(s, "updateDoc", t._key, e, n, r) : Sa(s, "updateDoc", t._key, e)).toMutation(t._key, Ee.exists(!0))]);
}
/**
* Deletes the document referred to by the specified `DocumentReference`.
*
* @param reference - A reference to the document to delete.
* @returns A Promise resolved once the document has been successfully
* deleted from the backend (note that it won't resolve while you're offline).
*/
function fc(t) ***REMOVED***
  for (var e, n, r, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
  t = _firebaseUtil.getModularInstance(t);
  var s = ***REMOVED***
    includeMetadataChanges: !1
  }, a = 0;
  "object" != typeof i[a] || Zu(i[a]) || (s = i[a], a++);
  var c, h, f, l = ***REMOVED***
    includeMetadataChanges: s.includeMetadataChanges
  ***REMOVED***
  if (Zu(i[a])) ***REMOVED***
    var d = i[a];
    (i[a] = null === (e = d.next) || void 0 === e ? void 0 : e.bind(d), i[a + 1] = null === (n = d.error) || void 0 === n ? void 0 : n.bind(d), i[a + 2] = null === (r = d.complete) || void 0 === r ? void 0 : r.bind(d));
  }
  if (t instanceof Qu) (h = Bu(t.firestore, na), f = Qt(t._key.path), c = ***REMOVED***
    next: function (e) ***REMOVED***
      i[a] && i[a](dc(h, t, e));
    },
    error: i[a + 1],
    complete: i[a + 2]
  }); else ***REMOVED***
    var p = Bu(t, zu);
    (h = Bu(p.firestore, na), f = p._query);
    var y = new cc(h);
    (c = ***REMOVED***
      next: function (t) ***REMOVED***
        i[a] && i[a](new Ka(h, y, p, t));
      },
      error: i[a + 1],
      complete: i[a + 2]
    }, za(t._query));
  }
  return (function (t, e, n, r) ***REMOVED***
    var i = this, o = new fu(r), s = new ms(e, o, n);
    return (t.asyncQueue.enqueueAndForget(function () ***REMOVED***
      return _tslib.__awaiter(i, void 0, void 0, function () ***REMOVED***
        var e;
        return _tslib.__generator(this, function (n) ***REMOVED***
          switch (n.label) ***REMOVED***
            case 0:
              return (e = ls, [4, /*yield*/
              Tu(t)]);
            case 1:
              return [2, /*return*/
              e.apply(void 0, [n.sent(), s])];
          }
        });
      });
    }), function () ***REMOVED***
      (o.Wo(), t.asyncQueue.enqueueAndForget(function () ***REMOVED***
        return _tslib.__awaiter(i, void 0, void 0, function () ***REMOVED***
          var e;
          return _tslib.__generator(this, function (n) ***REMOVED***
            switch (n.label) ***REMOVED***
              case 0:
                return (e = ds, [4, /*yield*/
                Tu(t)]);
              case 1:
                return [2, /*return*/
                e.apply(void 0, [n.sent(), s])];
            }
          });
        });
      }));
    });
  })(ra(h), f, l, c);
}
/**
* Locally writes `mutations` on the async queue.
* @internal
*/
function lc(t, e) ***REMOVED***
  return (function (t, e) ***REMOVED***
    var n = this, r = new vr();
    return (t.asyncQueue.enqueueAndForget(function () ***REMOVED***
      return _tslib.__awaiter(n, void 0, void 0, function () ***REMOVED***
        var n;
        return _tslib.__generator(this, function (i) ***REMOVED***
          switch (i.label) ***REMOVED***
            case 0:
              return (n = Cs, [4, /*yield*/
              Eu(t)]);
            case 1:
              return [2, /*return*/
              n.apply(void 0, [i.sent(), e, r])];
          }
        });
      });
    }), r.promise);
  })(ra(t), e);
}
/**
* Converts a ViewSnapshot that contains the single document specified by `ref`
* to a DocumentSnapshot.
*/
function dc(t, e, n) ***REMOVED***
  var r = n.docs.get(e._key), i = new cc(t);
  return new Ba(t, i, e._key, r, new Ua(n.hasPendingWrites, n.fromCache), e._converter);
}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* A reference to a transaction.
*
* The `Transaction` object passed to a transaction's `updateFunction` provides
* the methods to read and write data within the transaction context. See
* ***REMOVED***@link runTransaction}.
*/
var pc = /** @class*/
(function (t) ***REMOVED***
  // This class implements the same logic as the Transaction API in the Lite SDK
  // but is subclassed in order to return its own DocumentSnapshot types.
  /** @hideconstructor*/
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, e, n) || this)._firestore = e, r);
  }
  /**
  * Reads the document referenced by the provided ***REMOVED***@link DocumentReference}.
  *
  * @param documentRef - A reference to the document to be read.
  * @returns A `DocumentSnapshot` with the read data.
  */
  return (_tslib.__extends(e, t), e.prototype.get = function (e) ***REMOVED***
    var n = this, r = ac(e, this._firestore), i = new cc(this._firestore);
    return t.prototype.get.call(this, e).then(function (t) ***REMOVED***
      return new Ba(n._firestore, i, r._key, t._document, new Ua(/*hasPendingWrites=*/
      !1, /*fromCache=*/
      !1), r._converter);
    });
  }, e);
})(/** @class*/
(function () ***REMOVED***
  /** @hideconstructor*/
  function t(t, e) ***REMOVED***
    (this._firestore = t, this._transaction = e, this._dataReader = ma(t));
  }
  return (t.prototype.get = function (t) ***REMOVED***
    var e = this, n = ac(t, this._firestore), r = new sc(this._firestore);
    return this._transaction.lookup([n._key]).then(function (t) ***REMOVED***
      if (!t || 1 !== t.length) return C();
      var i = t[0];
      if (i.isFoundDocument()) return new Fa(e._firestore, r, i.key, i, n._converter);
      if (i.isNoDocument()) return new Fa(e._firestore, r, n._key, null, n._converter);
      throw C();
    });
  }, t.prototype.set = function (t, e, n) ***REMOVED***
    var r = ac(t, this._firestore), i = oc(r._converter, e, n), o = ga(this._dataReader, "Transaction.set", r._key, i, null !== r._converter, n);
    return (this._transaction.set(r._key, o), this);
  }, t.prototype.update = function (t, e, n) ***REMOVED***
    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
    var o, s = ac(t, this._firestore);
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    return (o = "string" == typeof (e = _firebaseUtil.getModularInstance(e)) || e instanceof ua ? Da(this._dataReader, "Transaction.update", s._key, e, n, r) : Sa(this._dataReader, "Transaction.update", s._key, e), this._transaction.update(s._key, o), this);
  }, /**
  * Deletes the document referred to by the provided ***REMOVED***@link DocumentReference}.
  *
  * @param documentRef - A reference to the document to be deleted.
  * @returns This `Transaction` instance. Used for chaining method calls.
  */
  t.prototype.delete = function (t) ***REMOVED***
    var e = ac(t, this._firestore);
    return (this._transaction.delete(e._key), this);
  }, t);
})());
/**
* Executes the given `updateFunction` and then attempts to commit the changes
* applied within the transaction. If any document read within the transaction
* has changed, Cloud Firestore retries the `updateFunction`. If it fails to
* commit after 5 attempts, the transaction fails.
*
* The maximum number of writes allowed in a single transaction is 500.
*
* @param firestore - A reference to the Firestore database to run this
* transaction against.
* @param updateFunction - The function to execute within the transaction
* context.
* @returns If the transaction completed successfully or was explicitly aborted
* (the `updateFunction` returned a failed promise), the promise returned by the
* `updateFunction `is returned here. Otherwise, if the transaction failed, a
* rejected promise with the corresponding failure error is returned.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/** Helper function to assert Uint8Array is available at runtime.*/
function yc() ***REMOVED***
  if ("undefined" == typeof Uint8Array) throw new T(E.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}
/** Helper function to assert Base64 functions are available at runtime.*/
function vc() ***REMOVED***
  if ("undefined" == typeof atob) throw new T(E.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}
/** Immutable class holding a blob (binary data)*/
var mc = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this._delegate = t;
  }
  return (t.fromBase64String = function (e) ***REMOVED***
    return (vc(), new t(aa.fromBase64String(e)));
  }, t.fromUint8Array = function (e) ***REMOVED***
    return (yc(), new t(aa.fromUint8Array(e)));
  }, t.prototype.toBase64 = function () ***REMOVED***
    return (vc(), this._delegate.toBase64());
  }, t.prototype.toUint8Array = function () ***REMOVED***
    return (yc(), this._delegate.toUint8Array());
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return this._delegate.isEqual(t._delegate);
  }, t.prototype.toString = function () ***REMOVED***
    return "Blob(base64: " + this.toBase64() + ")";
  }, t);
})(), gc = /** @class*/
(function () ***REMOVED***
  function t() ***REMOVED***}
  return (t.prototype.enableIndexedDbPersistence = function (t, e) ***REMOVED***
    return (function (t, e) ***REMOVED***
      sa(t = Bu(t, na));
      var n = ra(t), r = t._freezeSettings(), i = new cu();
      return oa(n, i, new uu(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
    })(t._delegate, ***REMOVED***
      forceOwnership: e
    });
  }, t.prototype.enableMultiTabIndexedDbPersistence = function (t) ***REMOVED***
    return (function (t) ***REMOVED***
      sa(t = Bu(t, na));
      var e = ra(t), n = t._freezeSettings(), r = new cu();
      return oa(e, r, new au(r, n.cacheSizeBytes));
    })(t._delegate);
  }, t.prototype.clearIndexedDbPersistence = function (t) ***REMOVED***
    return (function (t) ***REMOVED***
      var e = this;
      if (t._initialized && !t._terminated) throw new T(E.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
      var n = new vr();
      return (t._queue.enqueueAndForgetEvenWhileRestricted(function () ***REMOVED***
        return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
          var e;
          return _tslib.__generator(this, function (r) ***REMOVED***
            switch (r.label) ***REMOVED***
              case 0:
                return (r.trys.push([0, 2, , 3]), [4, /*yield*/
                (function (t) ***REMOVED***
                  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
                    var e;
                    return _tslib.__generator(this, function (n) ***REMOVED***
                      switch (n.label) ***REMOVED***
                        case 0:
                          return wr.yt() ? (e = t + "main", [4, /*yield*/
                          wr.delete(e)]) : [2, /*return*/
                          Promise.resolve()];
                        case 1:
                          return (n.sent(), [2]);
                      }
                    });
                  });
                })(xi(t._databaseId, t._persistenceKey))]);
              case 1:
                return (r.sent(), n.resolve(), [3, /*break*/
                3]);
              case 2:
                return (e = r.sent(), n.reject(e), [3, /*break*/
                3]);
              case 3:
                return [2];
            }
          });
        });
      }), n.promise);
    })(t._delegate);
  }, t);
})(), wc = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    var r = this;
    (this._delegate = e, this.Yc = n, this.INTERNAL = ***REMOVED***
      delete: function () ***REMOVED***
        return r.terminate();
      }
    }, t instanceof Au || (this.Xc = t));
  }
  return (Object.defineProperty(t.prototype, "_databaseId", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate._databaseId;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.settings = function (t) ***REMOVED***
    (t.merge && // Remove the property from the settings once the merge is completed
    delete (t = Object.assign(Object.assign(***REMOVED***}, this._delegate._getSettings()), t)).merge, this._delegate._setSettings(t));
  }, t.prototype.useEmulator = function (t, e) ***REMOVED***
    !(function (t, e, n) ***REMOVED***
      var r = (t = Bu(t, Gu))._getSettings();
      ("firestore.googleapis.com" !== r.host && r.host !== e && k("Host has been set in both settings() and useEmulator(), emulator host will be used"), t._setSettings(Object.assign(Object.assign(***REMOVED***}, r), ***REMOVED***
        host: e + ":" + n,
        ssl: !1
      })));
    })(this._delegate, t, e);
  }, t.prototype.enableNetwork = function () ***REMOVED***
    return (function (t) ***REMOVED***
      var e = this;
      return t.asyncQueue.enqueue(function () ***REMOVED***
        return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
          var e, n;
          return _tslib.__generator(this, function (r) ***REMOVED***
            switch (r.label) ***REMOVED***
              case 0:
                return [4, /*yield*/
                bu(t)];
              case 1:
                return (e = r.sent(), [4, /*yield*/
                _u(t)]);
              case 2:
                return (n = r.sent(), [2, /*return*/
                (e.setNetworkEnabled(!0), (function (t) ***REMOVED***
                  var e = O(t);
                  return (e.$r.delete(0), Lo(e));
                })(n))]);
            }
          });
        });
      });
    })(/** Disables the network connection. Pending operations will not complete.*/
    ra(Bu(this._delegate, na)));
  }, t.prototype.disableNetwork = function () ***REMOVED***
    return (function (t) ***REMOVED***
      var e = this;
      return t.asyncQueue.enqueue(function () ***REMOVED***
        return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
          var e, n;
          return _tslib.__generator(this, function (r) ***REMOVED***
            switch (r.label) ***REMOVED***
              case 0:
                return [4, /*yield*/
                bu(t)];
              case 1:
                return (e = r.sent(), [4, /*yield*/
                _u(t)]);
              case 2:
                return (n = r.sent(), [2, /*return*/
                (e.setNetworkEnabled(!1), (function (t) ***REMOVED***
                  return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
                    var e;
                    return _tslib.__generator(this, function (n) ***REMOVED***
                      switch (n.label) ***REMOVED***
                        case 0:
                          return ((e = O(t)).$r.add(0), [4, /*yield*/
                          Po(e)]);
                        case 1:
                          return (n.sent(), // Set the OnlineState to Offline so get()s return from cache, etc.
                          e.Br.set("Offline"), [2]);
                      }
                    });
                  });
                })(n))]);
            }
          });
        });
      });
    })(/**
    * Returns a Promise that resolves when all writes that were pending at the time
    * this method was called received server acknowledgement. An acknowledgement
    * can be either acceptance or rejection.
    */
    ra(Bu(this._delegate, na)));
  }, t.prototype.enablePersistence = function (t) ***REMOVED***
    var e = !1, n = !1;
    return (t && Fu("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), e ? this.Yc.enableMultiTabIndexedDbPersistence(this) : this.Yc.enableIndexedDbPersistence(this, n));
  }, t.prototype.clearPersistence = function () ***REMOVED***
    return this.Yc.clearIndexedDbPersistence(this);
  }, t.prototype.terminate = function () ***REMOVED***
    return (this.Xc && (this.Xc._removeServiceInstance("firestore"), this.Xc._removeServiceInstance("firestore-exp")), this._delegate._delete());
  }, t.prototype.waitForPendingWrites = function () ***REMOVED***
    return (function (t) ***REMOVED***
      var e = this, n = new vr();
      return (t.asyncQueue.enqueueAndForget(function () ***REMOVED***
        return _tslib.__awaiter(e, void 0, void 0, function () ***REMOVED***
          var e;
          return _tslib.__generator(this, function (r) ***REMOVED***
            switch (r.label) ***REMOVED***
              case 0:
                return (e = Fs, [4, /*yield*/
                Eu(t)]);
              case 1:
                return [2, /*return*/
                e.apply(void 0, [r.sent(), n])];
            }
          });
        });
      }), n.promise);
    })(ra(Bu(this._delegate, na)));
  }, t.prototype.onSnapshotsInSync = function (t) ***REMOVED***
    return (function (t, e) ***REMOVED***
      return (function (t, e) ***REMOVED***
        var n = this, r = new fu(e);
        return (t.asyncQueue.enqueueAndForget(function () ***REMOVED***
          return _tslib.__awaiter(n, void 0, void 0, function () ***REMOVED***
            var e;
            return _tslib.__generator(this, function (n) ***REMOVED***
              switch (n.label) ***REMOVED***
                case 0:
                  return (e = function (t, e) ***REMOVED***
                    (O(t).Gr.add(e), // Immediately fire an initial event, indicating all existing listeners
                    // are in-sync.
                    e.next());
                  }, [4, /*yield*/
                  Tu(t)]);
                case 1:
                  return [2, /*return*/
                  e.apply(void 0, [n.sent(), r])];
              }
            });
          });
        }), function () ***REMOVED***
          (r.Wo(), t.asyncQueue.enqueueAndForget(function () ***REMOVED***
            return _tslib.__awaiter(n, void 0, void 0, function () ***REMOVED***
              var e;
              return _tslib.__generator(this, function (n) ***REMOVED***
                switch (n.label) ***REMOVED***
                  case 0:
                    return (e = function (t, e) ***REMOVED***
                      O(t).Gr.delete(e);
                    }, [4, /*yield*/
                    Tu(t)]);
                  case 1:
                    return [2, /*return*/
                    e.apply(void 0, [n.sent(), r])];
                }
              });
            });
          }));
        });
      })(ra(t = Bu(t, na)), Zu(e) ? e : ***REMOVED***
        next: e
      });
    })(this._delegate, t);
  }, Object.defineProperty(t.prototype, "app", ***REMOVED***
    get: function () ***REMOVED***
      if (!this.Xc) throw new T(E.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this.Xc;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.collection = function (t) ***REMOVED***
    try ***REMOVED***
      return new Lc(this, Hu(this._delegate, t));
    } catch (t) ***REMOVED***
      throw Dc(t, "collection()", "Firestore.collection()");
    }
  }, t.prototype.doc = function (t) ***REMOVED***
    try ***REMOVED***
      return new Sc(this, Yu(this._delegate, t));
    } catch (t) ***REMOVED***
      throw Dc(t, "doc()", "Firestore.doc()");
    }
  }, t.prototype.collectionGroup = function (t) ***REMOVED***
    try ***REMOVED***
      return new Cc(this, (function (t, e) ***REMOVED***
        if ((t = Bu(t, Gu), Pu("collectionGroup", "collection id", e), e.indexOf("/") >= 0)) throw new T(E.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
        return new zu(t, /*converter=*/
        null, /**
        * Creates a new Query for a collection group query that matches all documents
        * within the provided collection group.
        */
        (function (t) ***REMOVED***
          return new Kt(Q.emptyPath(), t);
        })(e));
      })(this._delegate, t));
    } catch (t) ***REMOVED***
      throw Dc(t, "collectionGroup()", "Firestore.collectionGroup()");
    }
  }, t.prototype.runTransaction = function (t) ***REMOVED***
    var e = this;
    return (function (t, e) ***REMOVED***
      return (function (t, e) ***REMOVED***
        var n = this, r = new vr();
        return (t.asyncQueue.enqueueAndForget(function () ***REMOVED***
          return _tslib.__awaiter(n, void 0, void 0, function () ***REMOVED***
            var n;
            return _tslib.__generator(this, function (i) ***REMOVED***
              switch (i.label) ***REMOVED***
                case 0:
                  return [4, /*yield*/
                  (function (t) ***REMOVED***
                    return wu(t).then(function (t) ***REMOVED***
                      return t.datastore;
                    });
                  })(t)];
                case 1:
                  return (n = i.sent(), new pu(t.asyncQueue, n, e, r).run(), [2]);
              }
            });
          });
        }), r.promise);
      })(ra(t), function (n) ***REMOVED***
        return e(new pc(t, n));
      });
    })(this._delegate, function (n) ***REMOVED***
      return t(new _c(e, n));
    });
  }, t.prototype.batch = function () ***REMOVED***
    var t = this;
    return (ra(this._delegate), new Ec(new uc(this._delegate, function (e) ***REMOVED***
      return lc(t._delegate, e);
    })));
  }, t.prototype.loadBundle = function (t) ***REMOVED***
    throw new T(E.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?');
  }, t.prototype.namedQuery = function (t) ***REMOVED***
    throw new T(E.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?');
  }, t);
})(), bc = /** @class*/
(function (t) ***REMOVED***
  function e(e) ***REMOVED***
    var n = this;
    return ((n = t.call(this) || this).firestore = e, n);
  }
  return (_tslib.__extends(e, t), e.prototype.convertBytes = function (t) ***REMOVED***
    return new mc(new aa(t));
  }, e.prototype.convertReference = function (t) ***REMOVED***
    var e = this.convertDocumentKey(t, this.firestore._databaseId);
    return Sc.Zc(e, this.firestore, /*converter=*/
    null);
  }, e);
})(ic);
/**
* The persistence provider included with the full Firestore SDK.
*/
function Ic(t) ***REMOVED***
  var e;
  (e = t, S.setLogLevel(e));
}
/**
* A reference to a transaction.
*/
var _c = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this._firestore = t, this._delegate = e, this._userDataWriter = new bc(t));
  }
  return (t.prototype.get = function (t) ***REMOVED***
    var e = this, n = Pc(t);
    return this._delegate.get(n).then(function (t) ***REMOVED***
      return new kc(e._firestore, new Ba(e._firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, n._converter));
    });
  }, t.prototype.set = function (t, e, n) ***REMOVED***
    var r = Pc(t);
    return (n ? (Mu("Transaction.set", n), this._delegate.set(r, e, n)) : this._delegate.set(r, e), this);
  }, t.prototype.update = function (t, e, n) ***REMOVED***
    for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
    var s = Pc(t);
    return (2 === arguments.length ? this._delegate.update(s, e) : (r = this._delegate).update.apply(r, _tslib.__spreadArray([s, e, n], i)), this);
  }, t.prototype.delete = function (t) ***REMOVED***
    var e = Pc(t);
    return (this._delegate.delete(e), this);
  }, t);
})(), Ec = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this._delegate = t;
  }
  return (t.prototype.set = function (t, e, n) ***REMOVED***
    var r = Pc(t);
    return (n ? (Mu("WriteBatch.set", n), this._delegate.set(r, e, n)) : this._delegate.set(r, e), this);
  }, t.prototype.update = function (t, e, n) ***REMOVED***
    for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
    var s = Pc(t);
    return (2 === arguments.length ? this._delegate.update(s, e) : (r = this._delegate).update.apply(r, _tslib.__spreadArray([s, e, n], i)), this);
  }, t.prototype.delete = function (t) ***REMOVED***
    var e = Pc(t);
    return (this._delegate.delete(e), this);
  }, t.prototype.commit = function () ***REMOVED***
    return this._delegate.commit();
  }, t);
})(), Tc = /** @class*/
(function () ***REMOVED***
  function t(t, e, n) ***REMOVED***
    (this._firestore = t, this._userDataWriter = e, this._delegate = n);
  }
  return (t.prototype.fromFirestore = function (t, e) ***REMOVED***
    var n = new ja(this._firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, /*converter=*/
    null);
    return this._delegate.fromFirestore(new xc(this._firestore, n), null != e ? e : ***REMOVED***});
  }, t.prototype.toFirestore = function (t, e) ***REMOVED***
    return e ? this._delegate.toFirestore(t, e) : this._delegate.toFirestore(t);
  }, // Use the same instance of `FirestoreDataConverter` for the given instances
  // of `Firestore` and `PublicFirestoreDataConverter` so that isEqual() will
  // compare equal for two objects created with the same converter instance.
  t.tu = function (e, n) ***REMOVED***
    var r = t.eu, i = r.get(e);
    i || (i = new WeakMap(), r.set(e, i));
    var o = i.get(n);
    return (o || (o = new t(e, new bc(e), n), i.set(n, o)), o);
  }, t);
})();
Tc.eu = new WeakMap();
/**
* A reference to a particular document in a collection in the database.
*/
var Sc = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.firestore = t, this._delegate = e, this._userDataWriter = new bc(t));
  }
  return (t.nu = function (e, n, r) ***REMOVED***
    if (e.length % 2 != 0) throw new T(E.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + e.canonicalString() + " has " + e.length);
    return new t(n, new Qu(n._delegate, r, new st(e)));
  }, t.Zc = function (e, n, r) ***REMOVED***
    return new t(n, new Qu(n._delegate, r, e));
  }, Object.defineProperty(t.prototype, "id", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.id;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "parent", ***REMOVED***
    get: function () ***REMOVED***
      return new Lc(this.firestore, this._delegate.parent);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "path", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.path;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.collection = function (t) ***REMOVED***
    try ***REMOVED***
      return new Lc(this.firestore, Hu(this._delegate, t));
    } catch (t) ***REMOVED***
      throw Dc(t, "collection()", "DocumentReference.collection()");
    }
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return (t = _firebaseUtil.getModularInstance(t)) instanceof Qu && Xu(this._delegate, t);
  }, t.prototype.set = function (t, e) ***REMOVED***
    e = Mu("DocumentReference.set", e);
    try ***REMOVED***
      return (function (t, e, n) ***REMOVED***
        t = Bu(t, Qu);
        var r = Bu(t.firestore, na), i = oc(t._converter, e, n);
        return lc(r, [ga(ma(r), "setDoc", t._key, i, null !== t._converter, n).toMutation(t._key, Ee.none())]);
      })(this._delegate, t, e);
    } catch (t) ***REMOVED***
      throw Dc(t, "setDoc()", "DocumentReference.set()");
    }
  }, t.prototype.update = function (t, e) ***REMOVED***
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    try ***REMOVED***
      return 1 === arguments.length ? hc(this._delegate, t) : hc.apply(void 0, _tslib.__spreadArray([this._delegate, t, e], n));
    } catch (t) ***REMOVED***
      throw Dc(t, "updateDoc()", "DocumentReference.update()");
    }
  }, t.prototype.delete = function () ***REMOVED***
    return lc(Bu((t = this._delegate).firestore, na), [new Ve(t._key, Ee.none())]);
    var t;
  }, t.prototype.onSnapshot = function () ***REMOVED***
    for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    var r = Nc(e), i = Ac(e, function (e) ***REMOVED***
      return new kc(t.firestore, new Ba(t.firestore._delegate, t._userDataWriter, e._key, e._document, e.metadata, t._delegate._converter));
    });
    return fc(this._delegate, r, i);
  }, t.prototype.get = function (t) ***REMOVED***
    var e = this;
    return ("cache" === (null == t ? void 0 : t.source) ? (function (t) ***REMOVED***
      t = Bu(t, Qu);
      var e = Bu(t.firestore, na), n = ra(e), r = new cc(e);
      return (function (t, e) ***REMOVED***
        var n = this, r = new vr();
        return (t.asyncQueue.enqueueAndForget(function () ***REMOVED***
          return _tslib.__awaiter(n, void 0, void 0, function () ***REMOVED***
            var n;
            return _tslib.__generator(this, function (i) ***REMOVED***
              switch (i.label) ***REMOVED***
                case 0:
                  return (n = function (t, e, n) ***REMOVED***
                    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
                      var r, i;
                      return _tslib.__generator(this, function (o) ***REMOVED***
                        switch (o.label) ***REMOVED***
                          case 0:
                            return (o.trys.push([0, 2, , 3]), [4, /*yield*/
                            (function (t, e) ***REMOVED***
                              var n = O(t);
                              return n.persistence.runTransaction("read document", "readonly", function (t) ***REMOVED***
                                return n.Mn.mn(t, e);
                              });
                            })(t, e)]);
                          case 1:
                            return ((i = o.sent()).isFoundDocument() ? n.resolve(i) : i.isNoDocument() ? n.resolve(null) : n.reject(new T(E.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, /*break*/
                            3]);
                          case 2:
                            return (r = o.sent(), i = ss(r, "Failed to get document '" + e + " from cache"), n.reject(i), [3, /*break*/
                            3]);
                          case 3:
                            return [2];
                        }
                      });
                    });
                  }, [4, /*yield*/
                  Iu(t)]);
                case 1:
                  return [2, /*return*/
                  n.apply(void 0, [i.sent(), e, r])];
              }
            });
          });
        }), r.promise);
      })(n, t._key).then(function (n) ***REMOVED***
        return new Ba(e, r, t._key, n, new Ua(null !== n && n.hasLocalMutations, /*fromCache=*/
        !0), t._converter);
      });
    })(this._delegate) : "server" === (null == t ? void 0 : t.source) ? (function (t) ***REMOVED***
      t = Bu(t, Qu);
      var e = Bu(t.firestore, na);
      return Su(ra(e), t._key, ***REMOVED***
        source: "server"
      }).then(function (n) ***REMOVED***
        return dc(e, t, n);
      });
    })(this._delegate) : (function (t) ***REMOVED***
      t = Bu(t, Qu);
      var e = Bu(t.firestore, na);
      return Su(ra(e), t._key).then(function (n) ***REMOVED***
        return dc(e, t, n);
      });
    })(this._delegate)).then(function (t) ***REMOVED***
      return new kc(e.firestore, new Ba(e.firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, e._delegate._converter));
    });
  }, t.prototype.withConverter = function (e) ***REMOVED***
    return new t(this.firestore, e ? this._delegate.withConverter(Tc.tu(this.firestore, e)) : this._delegate.withConverter(null));
  }, t);
})();
/**
* Replaces the function name in an error thrown by the firestore-exp API
* with the function names used in the classic API.
*/
function Dc(t, e, n) ***REMOVED***
  return (t.message = t.message.replace(e, n), t);
}
function Nc(t) ***REMOVED***
  for (var e = 0, n = t; e < n.length; e++) ***REMOVED***
    var r = n[e];
    if ("object" == typeof r && !Zu(r)) return r;
  }
  return ***REMOVED******REMOVED***
}
/**
* Creates an observer that can be passed to the firestore-exp SDK. The
* observer converts all observed values into the format expected by the classic
* SDK.
*
* @param args - The list of arguments from an `onSnapshot` call.
* @param wrapper - The function that converts the firestore-exp type into the
* type used by this shim.
*/
function Ac(t, e) ***REMOVED***
  var n, r, i;
  return ***REMOVED***
    next: function (t) ***REMOVED***
      i.next && i.next(e(t));
    },
    error: null === (n = (i = Zu(t[0]) ? t[0] : Zu(t[1]) ? t[1] : "function" == typeof t[0] ? ***REMOVED***
      next: t[0],
      error: t[1],
      complete: t[2]
    } : ***REMOVED***
      next: t[1],
      error: t[2],
      complete: t[3]
    }).error) || void 0 === n ? void 0 : n.bind(i),
    complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i)
  ***REMOVED***
}
var kc = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this._firestore = t, this._delegate = e);
  }
  return (Object.defineProperty(t.prototype, "ref", ***REMOVED***
    get: function () ***REMOVED***
      return new Sc(this._firestore, this._delegate.ref);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "id", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.id;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "metadata", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.metadata;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "exists", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.exists();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.data = function (t) ***REMOVED***
    return this._delegate.data(t);
  }, t.prototype.get = function (t, e) ***REMOVED***
    return this._delegate.get(t, e);
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return Qa(this._delegate, t._delegate);
  }, t);
})(), xc = /** @class*/
(function (t) ***REMOVED***
  function e() ***REMOVED***
    return null !== t && t.apply(this, arguments) || this;
  }
  return (_tslib.__extends(e, t), e.prototype.data = function (t) ***REMOVED***
    return this._delegate.data(t);
  }, e);
})(kc), Cc = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this.firestore = t, this._delegate = e, this._userDataWriter = new bc(t));
  }
  return (t.prototype.where = function (e, n, r) ***REMOVED***
    try ***REMOVED***
      // The "as string" cast is a little bit of a hack. `where` accepts the
      // FieldPath Compat type as input, but is not typed as such in order to
      // not expose this via our public typings file.
      return new t(this.firestore, Ha(this._delegate, (function (t, e, n) ***REMOVED***
        var r = e, i = qa("where", t);
        return new Ya(i, r, n);
      })(e, n, r)));
    } catch (e) ***REMOVED***
      throw Dc(e, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }, t.prototype.orderBy = function (e, n) ***REMOVED***
    try ***REMOVED***
      // The "as string" cast is a little bit of a hack. `orderBy` accepts the
      // FieldPath Compat type as input, but is not typed as such in order to
      // not expose this via our public typings file.
      return new t(this.firestore, Ha(this._delegate, (function (t, e) ***REMOVED***
        void 0 === e && (e = "asc");
        var n = e, r = qa("orderBy", t);
        return new Xa(r, n);
      })(e, n)));
    } catch (e) ***REMOVED***
      throw Dc(e, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }, t.prototype.limit = function (e) ***REMOVED***
    try ***REMOVED***
      return new t(this.firestore, Ha(this._delegate, (function (t) ***REMOVED***
        return (ju("limit", t), new $a("limit", t, "F"));
      })(e)));
    } catch (e) ***REMOVED***
      throw Dc(e, "limit()", "Query.limit()");
    }
  }, t.prototype.limitToLast = function (e) ***REMOVED***
    try ***REMOVED***
      return new t(this.firestore, Ha(this._delegate, (function (t) ***REMOVED***
        return (ju("limitToLast", t), new $a("limitToLast", t, "L"));
      })(e)));
    } catch (e) ***REMOVED***
      throw Dc(e, "limitToLast()", "Query.limitToLast()");
    }
  }, t.prototype.startAt = function () ***REMOVED***
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try ***REMOVED***
      return new t(this.firestore, Ha(this._delegate, (function () ***REMOVED***
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return new Ja("startAt", t, /*before=*/
        !0);
      }).apply(void 0, e)));
    } catch (e) ***REMOVED***
      throw Dc(e, "startAt()", "Query.startAt()");
    }
  }, t.prototype.startAfter = function () ***REMOVED***
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try ***REMOVED***
      return new t(this.firestore, Ha(this._delegate, (function () ***REMOVED***
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return new Ja("startAfter", t, /*before=*/
        !1);
      }).apply(void 0, e)));
    } catch (e) ***REMOVED***
      throw Dc(e, "startAfter()", "Query.startAfter()");
    }
  }, t.prototype.endBefore = function () ***REMOVED***
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try ***REMOVED***
      return new t(this.firestore, Ha(this._delegate, (function () ***REMOVED***
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return new Za("endBefore", t, /*before=*/
        !0);
      }).apply(void 0, e)));
    } catch (e) ***REMOVED***
      throw Dc(e, "endBefore()", "Query.endBefore()");
    }
  }, t.prototype.endAt = function () ***REMOVED***
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    try ***REMOVED***
      return new t(this.firestore, Ha(this._delegate, (function () ***REMOVED***
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return new Za("endAt", t, /*before=*/
        !1);
      }).apply(void 0, e)));
    } catch (e) ***REMOVED***
      throw Dc(e, "endAt()", "Query.endAt()");
    }
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return $u(this._delegate, t._delegate);
  }, t.prototype.get = function (t) ***REMOVED***
    var e = this;
    return ("cache" === (null == t ? void 0 : t.source) ? /**
    * Executes the query and returns the results as a `QuerySnapshot` from cache.
    * Returns an error if the document is not currently cached.
    *
    * @returns A Promise that will be resolved with the results of the query.
    */
    (function (t) ***REMOVED***
      t = Bu(t, zu);
      var e = Bu(t.firestore, na), n = ra(e), r = new cc(e);
      return (function (t, e) ***REMOVED***
        var n = this, r = new vr();
        return (t.asyncQueue.enqueueAndForget(function () ***REMOVED***
          return _tslib.__awaiter(n, void 0, void 0, function () ***REMOVED***
            var n;
            return _tslib.__generator(this, function (i) ***REMOVED***
              switch (i.label) ***REMOVED***
                case 0:
                  return (n = function (t, e, n) ***REMOVED***
                    return _tslib.__awaiter(this, void 0, void 0, function () ***REMOVED***
                      var r, i, o, s, u;
                      return _tslib.__generator(this, function (a) ***REMOVED***
                        switch (a.label) ***REMOVED***
                          case 0:
                            return (a.trys.push([0, 2, , 3]), [4, /*yield*/
                            Qi(t, e, /*usePreviousResults=*/
                            !0)]);
                          case 1:
                            return (u = a.sent(), r = new Ts(e, u.Bn), i = r._o(u.documents), o = r.applyChanges(i, /*updateLimboDocuments=*/
                            !1), n.resolve(o.snapshot), [3, /*break*/
                            3]);
                          case 2:
                            return (s = a.sent(), u = ss(s, "Failed to execute query '" + e + " against cache"), n.reject(u), [3, /*break*/
                            3]);
                          case 3:
                            return [2];
                        }
                      });
                    });
                  }, [4, /*yield*/
                  Iu(t)]);
                case 1:
                  return [2, /*return*/
                  n.apply(void 0, [i.sent(), e, r])];
              }
            });
          });
        }), r.promise);
      })(n, t._query).then(function (n) ***REMOVED***
        return new Ka(e, r, t, n);
      });
    })(this._delegate) : "server" === (null == t ? void 0 : t.source) ? (function (t) ***REMOVED***
      t = Bu(t, zu);
      var e = Bu(t.firestore, na), n = ra(e), r = new cc(e);
      return Du(n, t._query, ***REMOVED***
        source: "server"
      }).then(function (n) ***REMOVED***
        return new Ka(e, r, t, n);
      });
    })(this._delegate) : (function (t) ***REMOVED***
      t = Bu(t, zu);
      var e = Bu(t.firestore, na), n = ra(e), r = new cc(e);
      return (za(t._query), Du(n, t._query).then(function (n) ***REMOVED***
        return new Ka(e, r, t, n);
      }));
    })(this._delegate)).then(function (t) ***REMOVED***
      return new Oc(e.firestore, new Ka(e.firestore._delegate, e._userDataWriter, e._delegate, t._snapshot));
    });
  }, t.prototype.onSnapshot = function () ***REMOVED***
    for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    var r = Nc(e), i = Ac(e, function (e) ***REMOVED***
      return new Oc(t.firestore, new Ka(t.firestore._delegate, t._userDataWriter, t._delegate, e._snapshot));
    });
    return fc(this._delegate, r, i);
  }, t.prototype.withConverter = function (e) ***REMOVED***
    return new t(this.firestore, e ? this._delegate.withConverter(Tc.tu(this.firestore, e)) : this._delegate.withConverter(null));
  }, t);
})(), Rc = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this._firestore = t, this._delegate = e);
  }
  return (Object.defineProperty(t.prototype, "type", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.type;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "doc", ***REMOVED***
    get: function () ***REMOVED***
      return new xc(this._firestore, this._delegate.doc);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "oldIndex", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.oldIndex;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "newIndex", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.newIndex;
    },
    enumerable: !1,
    configurable: !0
  }), t);
})(), Oc = /** @class*/
(function () ***REMOVED***
  function t(t, e) ***REMOVED***
    (this._firestore = t, this._delegate = e);
  }
  return (Object.defineProperty(t.prototype, "query", ***REMOVED***
    get: function () ***REMOVED***
      return new Cc(this._firestore, this._delegate.query);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "metadata", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.metadata;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "size", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.size;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "empty", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.empty;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "docs", ***REMOVED***
    get: function () ***REMOVED***
      var t = this;
      return this._delegate.docs.map(function (e) ***REMOVED***
        return new xc(t._firestore, e);
      });
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.docChanges = function (t) ***REMOVED***
    var e = this;
    return this._delegate.docChanges(t).map(function (t) ***REMOVED***
      return new Rc(e._firestore, t);
    });
  }, t.prototype.forEach = function (t, e) ***REMOVED***
    var n = this;
    this._delegate.forEach(function (r) ***REMOVED***
      t.call(e, new xc(n._firestore, r));
    });
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return Qa(this._delegate, t._delegate);
  }, t);
})(), Lc = /** @class*/
(function (t) ***REMOVED***
  function e(e, n) ***REMOVED***
    var r = this;
    return ((r = t.call(this, e, n) || this).firestore = e, r._delegate = n, r);
  }
  return (_tslib.__extends(e, t), Object.defineProperty(e.prototype, "id", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.id;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "path", ***REMOVED***
    get: function () ***REMOVED***
      return this._delegate.path;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "parent", ***REMOVED***
    get: function () ***REMOVED***
      var t = this._delegate.parent;
      return t ? new Sc(this.firestore, t) : null;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.doc = function (t) ***REMOVED***
    try ***REMOVED***
      return new Sc(this.firestore, void 0 === t ? Yu(this._delegate) : Yu(this._delegate, t));
    } catch (t) ***REMOVED***
      throw Dc(t, "doc()", "CollectionReference.doc()");
    }
  }, e.prototype.add = function (t) ***REMOVED***
    var e = this;
    return (function (t, e) ***REMOVED***
      var n = Bu(t.firestore, na), r = Yu(t), i = oc(t._converter, e);
      return lc(n, [ga(ma(t.firestore), "addDoc", r._key, i, null !== t._converter, ***REMOVED***}).toMutation(r._key, Ee.exists(!1))]).then(function () ***REMOVED***
        return r;
      });
    })(this._delegate, t).then(function (t) ***REMOVED***
      return new Sc(e.firestore, t);
    });
  }, e.prototype.isEqual = function (t) ***REMOVED***
    return Xu(this._delegate, t._delegate);
  }, e.prototype.withConverter = function (t) ***REMOVED***
    return new e(this.firestore, t ? this._delegate.withConverter(Tc.tu(this.firestore, t)) : this._delegate.withConverter(null));
  }, e);
})(Cc);
function Pc(t) ***REMOVED***
  return Bu(t, Qu);
}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
* A `FieldPath` refers to a field in a document. The path may consist of a
* single field name (referring to a top-level field in the document), or a list
* of field names (referring to a nested field in the document).
*/
var Mc = /** @class*/
(function () ***REMOVED***
  /**
  * Creates a FieldPath from the provided field names. If more than one field
  * name is provided, the path will point to a nested field in a document.
  *
  * @param fieldNames - A list of field names.
  */
  function t() ***REMOVED***
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    this._delegate = new (ua.bind.apply(ua, _tslib.__spreadArray([void 0], t)))();
  }
  return (t.documentId = function () ***REMOVED***
    /**
    * Internal Note: The backend doesn't technically support querying by
    * document ID. Instead it queries by the entire document name (full path
    * included), but in the cases we currently support documentId(), the net
    * effect is the same.
    */
    return new t(W.keyField().canonicalString());
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return (t = _firebaseUtil.getModularInstance(t)) instanceof ua && this._delegate._internalPath.isEqual(t._internalPath);
  }, t);
})(), Fc = /** @class*/
(function () ***REMOVED***
  function t(t) ***REMOVED***
    this._delegate = t;
  }
  return (t.serverTimestamp = function () ***REMOVED***
    var e = new Ia("serverTimestamp");
    return (e._methodName = "FieldValue.serverTimestamp", new t(e));
  }, t.delete = function () ***REMOVED***
    var e = new wa("deleteField");
    return (e._methodName = "FieldValue.delete", new t(e));
  }, t.arrayUnion = function () ***REMOVED***
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    var r = /**
    * Returns a special value that can be used with ***REMOVED***@link @firebase/firestore/lite#(setDoc:1)} or ***REMOVED***@link
    * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
    * value that already exists on the server. Each specified element that doesn't
    * already exist in the array will be added to the end. If the field being
    * modified is not already an array it will be overwritten with an array
    * containing exactly the specified elements.
    *
    * @param elements - The elements to union into the array.
    * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
    * `updateDoc()`.
    */
    (function () ***REMOVED***
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      // NOTE: We don't actually parse the data until it's used in set() or
      // update() since we'd need the Firestore instance to do this.
      return new _a("arrayUnion", t);
    }).apply(void 0, e);
    return (r._methodName = "FieldValue.arrayUnion", new t(r));
  }, t.arrayRemove = function () ***REMOVED***
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    var r = (function () ***REMOVED***
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      // NOTE: We don't actually parse the data until it's used in set() or
      // update() since we'd need the Firestore instance to do this.
      return new Ea("arrayRemove", t);
    }).apply(void 0, e);
    return (r._methodName = "FieldValue.arrayRemove", new t(r));
  }, t.increment = function (e) ***REMOVED***
    var n = (function (t) ***REMOVED***
      return new Ta("increment", t);
    })(e);
    return (n._methodName = "FieldValue.increment", new t(n));
  }, t.prototype.isEqual = function (t) ***REMOVED***
    return this._delegate.isEqual(t._delegate);
  }, t);
})();
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function Vc(t) ***REMOVED***
  /**
  * Loads a Firestore bundle into the local cache.
  *
  * @param firestore - The `Firestore` instance to load bundles for for.
  * @param bundleData - An object representing the bundle to be loaded. Valid objects are
  *   `ArrayBuffer`, `ReadableStream<Uint8Array>` or `string`.
  *
  * @returns
  *   A `LoadBundleTask` object, which notifies callers with progress updates, and completion
  *   or error events. It can be used as a `Promise<LoadBundleTaskProgress>`.
  */
  return (function (t, e) ***REMOVED***
    var n = ra(t = Bu(t, na)), r = new ta();
    return ((function (t, e, n, r) ***REMOVED***
      var i = this, o = (function (t, e) ***REMOVED***
        return (function (t, e) ***REMOVED***
          return new lu(t, e);
        })((function (t, e) ***REMOVED***
          if (t instanceof Uint8Array) return hu(t, e);
          if (t instanceof ArrayBuffer) return hu(new Uint8Array(t), e);
          if (t instanceof ReadableStream) return t.getReader();
          throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
        })("string" == typeof t ? new TextEncoder().encode(t) : t), e);
      })(n, Do(e));
      t.asyncQueue.enqueueAndForget(function () ***REMOVED***
        return _tslib.__awaiter(i, void 0, void 0, function () ***REMOVED***
          var e;
          return _tslib.__generator(this, function (n) ***REMOVED***
            switch (n.label) ***REMOVED***
              case 0:
                return (e = ou, [4, /*yield*/
                Eu(t)]);
              case 1:
                return (e.apply(void 0, [n.sent(), o, r]), [2]);
            }
          });
        });
      });
    })(n, t._databaseId, e, r), r);
  })(this._delegate, t);
}
function qc(t) ***REMOVED***
  var e, n, r = this;
  return (e = this._delegate, n = t, (function (t, e) ***REMOVED***
    var n = this;
    return t.asyncQueue.enqueue(function () ***REMOVED***
      return _tslib.__awaiter(n, void 0, void 0, function () ***REMOVED***
        var n;
        return _tslib.__generator(this, function (r) ***REMOVED***
          switch (r.label) ***REMOVED***
            case 0:
              return (n = function (t, e) ***REMOVED***
                var n = O(t);
                return n.persistence.runTransaction("Get named query", "readonly", function (t) ***REMOVED***
                  return n.Qe.getNamedQuery(t, e);
                });
              }, [4, /*yield*/
              Iu(t)]);
            case 1:
              return [2, /*return*/
              n.apply(void 0, [r.sent(), e])];
          }
        });
      });
    });
  })(ra(e = Bu(e, na)), n).then(function (t) ***REMOVED***
    return t ? new zu(e, null, t.query) : null;
  })).then(function (t) ***REMOVED***
    return t ? new Cc(r, t) : null;
  });
}

},***REMOVED***"process":"7AgFc","@firebase/util":"3bR6t","@firebase/logger":"5PuYX","@firebase/webchannel-wrapper":"71Sz5","tslib":"4rd38","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7AgFc":[function(require,module,exports) ***REMOVED***
// shim for using process in browser
var process = module.exports = ***REMOVED******REMOVED***
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() ***REMOVED***
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() ***REMOVED***
  throw new Error('clearTimeout has not been defined');
}
(function () ***REMOVED***
  try ***REMOVED***
    if (typeof setTimeout === 'function') ***REMOVED***
      cachedSetTimeout = setTimeout;
    } else ***REMOVED***
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) ***REMOVED***
    cachedSetTimeout = defaultSetTimout;
  }
  try ***REMOVED***
    if (typeof clearTimeout === 'function') ***REMOVED***
      cachedClearTimeout = clearTimeout;
    } else ***REMOVED***
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) ***REMOVED***
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) ***REMOVED***
  if (cachedSetTimeout === setTimeout) ***REMOVED***
    // normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) ***REMOVED***
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try ***REMOVED***
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) ***REMOVED***
    try ***REMOVED***
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) ***REMOVED***
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) ***REMOVED***
  if (cachedClearTimeout === clearTimeout) ***REMOVED***
    // normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) ***REMOVED***
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try ***REMOVED***
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) ***REMOVED***
    try ***REMOVED***
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) ***REMOVED***
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
function cleanUpNextTick() ***REMOVED***
  if (!draining || !currentQueue) ***REMOVED***
    return;
  }
  draining = false;
  if (currentQueue.length) ***REMOVED***
    queue = currentQueue.concat(queue);
  } else ***REMOVED***
    queueIndex = -1;
  }
  if (queue.length) ***REMOVED***
    drainQueue();
  }
}
function drainQueue() ***REMOVED***
  if (draining) ***REMOVED***
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) ***REMOVED***
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) ***REMOVED***
      if (currentQueue) ***REMOVED***
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) ***REMOVED***
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) ***REMOVED***
    for (var i = 1; i < arguments.length; i++) ***REMOVED***
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) ***REMOVED***
    runTimeout(drainQueue);
  }
***REMOVED***
// v8 likes predictible objects
function Item(fun, array) ***REMOVED***
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () ***REMOVED***
  this.fun.apply(null, this.array);
***REMOVED***
process.title = 'browser';
process.browser = true;
process.env = ***REMOVED******REMOVED***
process.argv = [];
process.version = '';
// empty string to avoid regexp issues
process.versions = ***REMOVED******REMOVED***
function noop() ***REMOVED***}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) ***REMOVED***
  return [];
***REMOVED***
process.binding = function (name) ***REMOVED***
  throw new Error('process.binding is not supported');
***REMOVED***
process.cwd = function () ***REMOVED***
  return '/';
***REMOVED***
process.chdir = function (dir) ***REMOVED***
  throw new Error('process.chdir is not supported');
***REMOVED***
process.umask = function () ***REMOVED***
  return 0;
***REMOVED***

},***REMOVED***}]},["1vSbZ","3GZMZ"], "3GZMZ", "parcelRequire4351")

//# sourceMappingURL=index.355c732e.js.map
