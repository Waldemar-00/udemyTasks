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
})({"js/sort.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var data = [{
  ratingRevievs: '264 отзыва',
  price: {
    oldUan: '4 333 грн',
    newUan: '3 799 грн'
  },
  name: 'Motorola MOTO G4 (XT1622) Black'
}, {
  ratingRevievs: '1355 отзывов',
  price: '4 999 грн',
  name: 'Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!'
}, {
  ratingRevievs: '426 отзывов',
  price: '5 199 грн',
  name: 'Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!'
}, {
  ratingRevievs: '403 отзыва',
  price: '4 349 грн',
  name: 'Xiaomi Redmi Note 4X 3/32GB Black'
}, {
  ratingRevievs: '488 отзывов',
  price: '6 199 грн',
  name: 'Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!'
}, {
  ratingRevievs: '198 отзывов',
  price: {
    oldUan: '3 495 грн',
    newUan: '2 995 грн'
  },
  name: 'Lenovo K5 (A6020a40) Silver'
}, {
  ratingRevievs: '352 отзыва',
  price: {
    oldUan: '9 799 грн',
    newUan: '7 999 грн'
  },
  name: 'Apple iPhone 5s 16GB Space Gray'
}, {
  ratingRevievs: '59 отзывов',
  price: '5 999 грн',
  name: 'Nokia 5 Dual Sim Tempered Blue'
}, {
  ratingRevievs: '119 отзывов',
  price: '11 999 грн',
  name: 'Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!'
}, {
  ratingRevievs: '1106 отзывов',
  price: '3 999 грн',
  name: 'Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!'
}, {
  ratingRevievs: '380 отзывов',
  price: '2 199 грн',
  name: 'Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!'
}, {
  ratingRevievs: '86 отзывов',
  price: {
    oldUan: '24 999 грн',
    newUan: '22 999 грн'
  },
  name: 'Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!'
}, {
  ratingRevievs: '177 отзывов',
  price: '6 499 грн',
  name: 'Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!'
}, {
  ratingRevievs: '347 отзывов',
  price: '4 299 грн',
  name: 'Xiaomi Redmi 4X 3/32GB Black (Международная версия)'
}, {
  ratingRevievs: '709 отзывов',
  price: '2 799 грн',
  name: 'Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!'
}, {
  ratingRevievs: '527 отзывов',
  price: '3 999 грн',
  name: 'Huawei Y6 Pro Gold + чехол + защитное стекло!'
}, {
  ratingRevievs: '66 отзывов',
  price: '16 499 грн',
  name: 'Apple iPhone 6s 32GB Gold'
}, {
  ratingRevievs: '14 отзывов',
  price: '11 499 грн',
  name: 'Apple iPhone 6 32GB Space Gray'
}, {
  ratingRevievs: '70 отзывов',
  price: {
    oldUan: '7 399 грн',
    newUan: '5 999 грн'
  },
  name: 'Asus ZenFone 2 32GB (ZE551ML) Black'
}, {
  ratingRevievs: '45 отзывов',
  price: '4 299 грн',
  name: 'Nokia 3 Dual Sim Silver White + сертификаты 500 грн!'
}, {
  ratingRevievs: '376 отзывов',
  price: '3 899 грн',
  name: 'Meizu M3 Note 32GB Grey (Международная версия)'
}, {
  ratingRevievs: '111 отзывов',
  price: {
    oldUan: '9 999 грн',
    newUan: '7 999 грн'
  },
  name: 'Sony Xperia X Dual (F5122) White'
}, {
  ratingRevievs: '40 отзывов',
  price: '2 222 грн',
  name: 'Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!'
}, {
  ratingRevievs: '93 отзыва',
  price: '18 999 грн',
  name: 'Apple iPhone 7 32GB Black'
}, {
  ratingRevievs: '33 отзыва',
  price: '16 999 грн',
  name: 'Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!'
}, {
  ratingRevievs: '71 отзыв',
  price: {
    oldUan: '2 399 грн',
    newUan: '1 999 грн'
  },
  name: 'LG K5 X220ds Gold'
}, {
  ratingRevievs: '39 отзывов',
  price: '2 995 грн',
  name: 'Lenovo C2 Power (K10a40) Black'
}, {
  ratingRevievs: '156 отзывов',
  price: '2 599 грн',
  name: 'Nous NS 5006 Gold'
}, {
  ratingRevievs: '40 отзывов',
  price: '19 689 грн',
  name: 'LG G6 Mystic White'
}, {
  ratingRevievs: '24 отзыва',
  price: '5 995 грн',
  name: 'Motorola MOTO G5 (XT1676) Grey'
}, {
  ratingRevievs: '7 отзывов',
  price: {
    oldUan: '10 999 грн',
    newUan: '9 999 грн'
  },
  name: 'HTC One X10 Dual Sim Silver'
}, {
  ratingRevievs: '18 отзывов',
  price: {
    oldUan: '5 999 грн',
    newUan: '4 999 грн'
  },
  name: 'Sony Xperia L1 Dual Black'
}];
var wrappDiv = document.createElement('div');
wrappDiv.style.cssText = "\n  display: flex;\n  justify-content: space-evenly;\n  align-item: center;\n  ";
document.querySelector('body').append(wrappDiv);
function sortByFeedbacks(array) {
  var parentDiv = document.createElement('div');
  var copyArray = JSON.parse(JSON.stringify(array));
  copyArray.forEach(function (obj) {
    obj.ratingRevievs = +obj.ratingRevievs.replace(/\D/g, '');
  });
  copyArray.sort(function (a, b) {
    return a.ratingRevievs - b.ratingRevievs;
  });
  copyArray.forEach(function (item) {
    if (_typeof(item.price) === 'object') {
      item.price = +item.price.newUan.replace(/\D/g, '');
    } else {
      item.price = +item.price.replace(/\D/g, '');
    }
    var div = document.createElement('div');
    div.innerHTML = "\n    <h2>Sort by feedback</h2>\n    <h3>".concat(item.name, ":</h3>\n    <p style='font-size: 20px'>Feedback: ").concat(item.ratingRevievs, "</p>\n    <p style='font-size: 20px'>Price: ").concat(item.price, " \u20B4</p>\n    ");
    parentDiv.append(div);
  });
  wrappDiv.append(parentDiv);
}
document.querySelector('.feedback').addEventListener('click', function () {
  sortByFeedbacks(data);
}, {
  once: true
});
function sortByPrice(array) {
  var parentDiv = document.createElement('div');
  var copy = JSON.parse(JSON.stringify(array));
  copy.forEach(function (item) {
    if (_typeof(item.price) === 'object') {
      item.price = +item.price.newUan.replace(/\D/g, '');
    } else {
      item.price = +item.price.replace(/\D/g, '');
    }
  });
  copy.sort(function (a, b) {
    return a.price - b.price;
  });
  copy.forEach(function (item) {
    var div = document.createElement('div');
    div.innerHTML = "\n    <h2>Sort by price</h2>\n    <h3>".concat(item.name, ":</h3>\n    <p style='font-size: 20px'>Price: ").concat(item.price, " \u20B4</p>\n    <p style='font-size: 20px'>Feedback: ").concat(item.ratingRevievs, "</p>\n    ");
    parentDiv.append(div);
  });
  wrappDiv.append(parentDiv);
}
document.querySelector('.price').addEventListener('click', function () {
  sortByPrice(data);
}, {
  once: true
});
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60447" + '/');
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
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sort.js"], null)
//# sourceMappingURL=/sort.6c58c17b.js.map