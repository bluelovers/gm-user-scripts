// ==UserScript==
// @name		gamer-auto-signin
// @name:en		gamer-auto-signin
// @name:zh		gamer-auto-signin
// @namespace	bluelovers
// @author		bluelovers
//
// @description		自動簽到 ( 巴哈姆特 ... and other )
// @description:en	自動簽到 ( 巴哈姆特 ... and other )
// @description:zh	自動簽到 ( 巴哈姆特 ... and other )
//
// @version		4.5.1
//
// @grant		GM.deleteValue
// @grant		GM.getValue
// @grant		GM.listValues
// @grant		GM.registerMenuCommand
// @grant		GM.setValue
// @grant		GM.unregisterMenuCommand
// @grant		GM.xmlhttpRequest
// @grant		GM_deleteValue
// @grant		GM_getValue
// @grant		GM_listValues
// @grant		GM_registerMenuCommand
// @grant		GM_setValue
// @grant		GM_unregisterMenuCommand
// @grant		GM_xmlhttpRequest
// g_r_a_n_tnone
//
// @icon		https://wiki.greasespot.net/favicon.ico
//
// @noframes
// @encoding	utf-8
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/gamer-auto-signin.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/gamer-auto-signin.user.js
//
// @include		*://*.sfacg.com/*
// @include		*://book.sfacg.com/signin/*
//
// @match		*://www.gamer.com.tw/*
// @match		*://forum.gamer.com.tw/*
// @match		*://home.gamer.com.tw/creationDetail.php*
// @match		*://gnn.gamer.com.tw/*
// @match		*://ani.gamer.com.tw/*
// @match		*://acg.gamer.com.tw/*
//
// @exclude		*://*.sfacg.com/ajax*
//
// ==/UserScript==
!function(e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var i = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
}
n.m = e, n.c = t, n.d = function(e, t, r) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: r
});
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, n.t = function(e, t) {
if (1 & t && (e = n(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function(t) {
return e[t];
}.bind(null, i));
return r;
}, n.n = function(e) {
var t = e && e.__esModule ? function t() {
return e.default;
} : function t() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "", n(n.s = 2);
}([ function(e, t) {
var n;
n = function() {
return this;
}();
try {
n = n || new Function("return this")();
} catch (e) {
"object" == typeof window && (n = window);
}
e.exports = n;
}, function(e, t, n) {
"use strict";
(function(e) {
Object.defineProperty(t, "__esModule", {
value: !0
}), t.jQuery = t.$ = void 0, console["groupCollapsed" in console ? "groupCollapsed" : "group"]("before");
let r = {};
const i = !1;
try {
r.$ = unsafeWindow.$, r.jQuery = unsafeWindow.jQuery;
} catch (e) {
console.error(e);
}
console.groupEnd("before");
const o = n(16), s = o.noConflict(!0);
t.jQuery = s, t.$ = s, window.self.$ = window.self.jQuery = s, t.default = s, console["groupCollapsed" in console ? "groupCollapsed" : "group"]("after");
try {} catch (e) {
console.error(e);
}
console.groupEnd("after"), console["groupCollapsed" in console ? "groupCollapsed" : "group"]("end");
try {
r.$ && r.$ !== unsafeWindow.self.$ && (unsafeWindow.self.$ = r.$), r.jQuery && r.jQuery !== unsafeWindow.self.jQuery && (unsafeWindow.self.jQuery = r.jQuery);
} catch (e) {
console.error(e);
}
function a(e, n) {
console["groupCollapsed" in console ? "groupCollapsed" : "group"](e);
try {
console.info(e, n), null === n ? (console.info("$", t.$, t.$ && t.$.fn && t.$.fn.jquery), 
console.info("jQuery", s, s && s.fn && s.fn.jquery)) : (console.info(`${e}.$`, n.$, n.$ && n.$.fn && n.$.fn.jquery), 
console.info(`${e}.jQuery`, n.jQuery, n.jQuery && n.jQuery.fn && n.jQuery.fn.jquery));
} catch (t) {
console.error(`${e}`, t.toString());
}
console.groupEnd(e);
}
console.groupEnd("end");
}).call(this, n(0));
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(10);
e.exports.id = "gamer-auto-signin", e.exports.name = e.exports.id, r.run(e.exports.id, e.exports, null, function(e, t, n, i, o, s) {
r.init(e, t, n, i, o, s);
});
}, function(e, t, n) {
"use strict";
(function(e, r) {
var i = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
void 0 === r && (r = n), Object.defineProperty(e, r, {
enumerable: !0,
get: function() {
return t[n];
}
});
} : function(e, t, n, r) {
void 0 === r && (r = n), e[r] = t[n];
}), o = this && this.__exportStar || function(e, t) {
for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n);
};
Object.defineProperty(t, "__esModule", {
value: !0
}), t.openInTabBackground = t.log = t.info = t.error = t.debug = t.addStylesheet = t.GM_addStyle = void 0;
const s = n(11);
function a(t, n) {
return Array.isArray(t) && (t = t.join("")), "string" == typeof n && (n = e(n)), 
"object" == typeof n && n.length && "object" == typeof n[0] && (n = n[0]), s.GM_addStyle(t.toString(), n);
}
function u(t, n) {
return "object" == typeof t && t.webfont && (t = t.webfont), e(`<link rel="stylesheet" href="${t.toString()}"/>`).appendTo(n || e("header, body").eq(0));
}
function c(e, ...t) {
return console.info(`%c[${r.userScript.id}][debug]`, "color: #4B90C2;", e, ...t);
}
function l(e, ...t) {
return console.error(`%c[${r.userScript.id}][error]`, "color: red;", e, ...t);
}
function f(e, ...t) {
return console.info(`%c[${r.userScript.id}][info]`, "color: #ccc;", e, ...t);
}
function p(e, ...t) {
return console.log(e, ...t);
}
function h(e) {
let t = window.open(e, "_blank");
return setTimeout(function() {
window.focus();
}, 300), t;
}
t.GM_addStyle = a, t.addStylesheet = u, t.debug = c, t.error = l, t.info = f, t.log = p, 
t.openInTabBackground = h, t.default = t, o(n(11), t);
}).call(this, n(1).default, n(0));
}, function(module, exports, __webpack_require__) {
"use strict";
var _GMApi;
Object.defineProperty(exports, "__esModule", {
value: !0
}), function(_GMApi_1) {
let _hasGM = "undefined" != typeof GM, _a = [ "GM_info", "GM_deleteValue", "GM_getValue", "GM_setValue", "GM_listValues", "GM_openInTab", "GM_setClipboard", "GM_xmlhttpRequest", "GM_getResourceText", "GM_log", "GM_addStyle", "GM_registerMenuCommand" ];
for (let name of _a) {
let fn = eval(`(typeof ${name} !== 'undefined') ? ${name} : void(0)`);
_GMApi[name.replace(/^GM_/, "")] = fn;
}
if (_GMApi.getResourceUrl = "undefined" != typeof GM_getResourceUrl ? GM_getResourceUrl : "undefined" != typeof GM_getResourceURL ? GM_getResourceURL : void 0, 
_hasGM && Object.keys(GM).concat([ "info", "deleteValue", "getValue", "listValues", "setValue", "getResourceUrl", "openInTab", "setClipboard", "xmlHttpRequest", "getResourceText", "log", "addStyle", "registerMenuCommand" ]).forEach(function(e, t, n) {
void 0 === _GMApi[e] && (_GMApi[e] = void 0 !== GM[e] ? GM[e] : void 0);
}), !_hasGM) try {
let _a = [ "GM_notification", "GM_getTab", "GM_saveTab", "GM_getTabs", "GM_download", "GM_unregisterMenuCommand", "GM_addValueChangeListener", "GM_removeValueChangeListener" ];
for (let name of _a) {
let value = name.replace(/^GM_/, "");
if (void 0 === _GMApi[value]) {
let fn = eval(`(typeof ${name} !== 'undefined') ? ${name} : void(0)`);
_GMApi[value] = fn;
}
}
} catch (e) {
console.error(e);
}
let _isTampermonkey = null;
_GMApi.info ? _GMApi.info.scriptHandler ? "Tampermonkey" == _GMApi.info.scriptHandler ? _isTampermonkey = !0 : "Greasemonkey" == _GMApi.info.scriptHandler && (_isTampermonkey = !1) : _isTampermonkey = !1 : _hasGM && (_isTampermonkey = !1);
let _t_list = [], _t_keys = Object.keys(_GMApi);
function call(e, ...t) {
return "function" == typeof _GMApi[e] ? _GMApi[e].call(_GMApi.GM || null, ...t) : (void 0 === _GMApi[e] && console.warn(`GMApi.${e} is undefined`), 
_GMApi[e]);
}
function callSafe(e) {
return "function" == typeof _GMApi[e] ? _GMApi[e] : new Function();
}
_GMApi.GM = _hasGM ? GM : {}, _t_keys.forEach(function(e, t, n) {
void 0 === _GMApi.GM[e] && (_GMApi.GM[e] = _GMApi[e]), _GMApi["GM_" + e] = _GMApi[e], 
_t_list.push(e), _t_list.push("GM_" + e);
}), _GMApi_1._list = _t_list, _GMApi_1.isTampermonkey = _isTampermonkey, _GMApi_1.hasGM = _hasGM, 
_GMApi.unsafeWindow = "undefined" != typeof unsafeWindow ? unsafeWindow : "undefined" != typeof window ? window : void 0, 
_GMApi_1.call = call, _GMApi_1.callSafe = callSafe;
}(_GMApi || (_GMApi = {})), _GMApi._list.forEach(function(e, t, n) {
0 == e.indexOf("GM_") && (module.exports[e] = _GMApi[e]);
}), _GMApi.default = _GMApi.GMApi = _GMApi, exports.GMApi = _GMApi, exports.default = exports.GMApi;
}, function(e, t, n) {
e.exports.id = "gamer-auto-signin", e.exports.version = "", e.exports.name = "gamer-auto-signin", 
e.exports.name_en = "gamer-auto-signin", e.exports.name_ja = "gamer-auto-signin", 
e.exports.desc = "自動簽到 ( 巴哈姆特 ... and other )", e.exports.desc_en = "自動簽到 ( 巴哈姆特 ... and other )", 
e.exports.desc_ja = "自動簽到 ( 巴哈姆特 ... and other )", e.exports.namespace = "", e.exports.author = "", 
e.exports.icon = "", e.exports.list = [ "gamer/ajax", "novel/sfacg" ], e.exports.list_disable = [], 
e.exports._lib = (() => {
n(6), n(9);
}), e.exports.metadata = {}, e.exports.metadata.include = [ "*://*.sfacg.com/*", "*://book.sfacg.com/signin/*" ], 
e.exports.metadata.match = [ "*://www.gamer.com.tw/*", "*://forum.gamer.com.tw/*", "*://home.gamer.com.tw/creationDetail.php*", "*://gnn.gamer.com.tw/*", "*://ani.gamer.com.tw/*", "*://acg.gamer.com.tw/*" ], 
e.exports.metadata.exclude = [ "*://*.sfacg.com/ajax*" ], e.exports.metadata.grant = [ "GM.deleteValue", "GM.getValue", "GM.listValues", "GM.registerMenuCommand", "GM.setValue", "GM.unregisterMenuCommand", "GM.xmlhttpRequest", "GM_deleteValue", "GM_getValue", "GM_listValues", "GM_registerMenuCommand", "GM_setValue", "GM_unregisterMenuCommand", "GM_xmlhttpRequest" ], 
e.exports.list_script = [], e.exports.current = [], e.exports.default = e.exports;
}, function(e, t, n) {
"use strict";
(function(t, r) {
let i = {
metadata: {
include: [],
match: [ "http*://www.gamer.com.tw/*", "http*://forum.gamer.com.tw/*", "http*://home.gamer.com.tw/creationDetail.php*", "http*://gnn.gamer.com.tw/*", "http*://ani.gamer.com.tw/*", "http*://acg.gamer.com.tw/*" ],
exclude: [],
grant: [ "GM_xmlhttpRequest", "GM_getValue", "GM_setValue" ]
},
test(r = t._url_obj) {
let i;
return !!(i = n(12).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const o = n(8);
await o.delay(1e3);
const s = n(13).create(i.file);
let a, u = !1;
if (e.host.match(/www\.gamer\.com\.tw/) && (a = r('.BA-left #signin-btn[onclick]:not([onclick*="showSigninMap"])')).length) a[0].click(), 
s.updateTimestamp(); else if (a && a.length) console.log("已經簽到過", a), s.updateTimestamp(); else {
let e = unsafeWindow.BAHAID || unsafeWindow.MB_BAHAID, t = s.getValue("username"), r = s.chkTimestamp(3), i = null;
if (e && (e && e != t || r > 0 ? i = !0 : (i = !1, console.info("[距離上次簽到]", Math.abs(r) + "s"))), 
i) {
const t = n(33).default;
await t().catch(e => {
console.error("[ERROR]", e);
}).then(function() {
s.setValue("username", e), s.updateTimestamp();
});
}
}
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let i = r(n);
return i = i.add([].join());
}
};
e.exports = i;
}).call(this, n(0), n(1).default);
}, function(e, t) {
var n = e.exports = {}, r, i;
function o() {
throw new Error("setTimeout has not been defined");
}
function s() {
throw new Error("clearTimeout has not been defined");
}
function a(e) {
if (r === setTimeout) return setTimeout(e, 0);
if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
try {
return r(e, 0);
} catch (t) {
try {
return r.call(null, e, 0);
} catch (t) {
return r.call(this, e, 0);
}
}
}
function u(e) {
if (i === clearTimeout) return clearTimeout(e);
if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
try {
return i(e);
} catch (t) {
try {
return i.call(null, e);
} catch (t) {
return i.call(this, e);
}
}
}
!function() {
try {
r = "function" == typeof setTimeout ? setTimeout : o;
} catch (e) {
r = o;
}
try {
i = "function" == typeof clearTimeout ? clearTimeout : s;
} catch (e) {
i = s;
}
}();
var c = [], l = !1, f, p = -1;
function h() {
l && f && (l = !1, f.length ? c = f.concat(c) : p = -1, c.length && d());
}
function d() {
if (!l) {
var e = a(h);
l = !0;
for (var t = c.length; t; ) {
for (f = c, c = []; ++p < t; ) f && f[p].run();
p = -1, t = c.length;
}
f = null, l = !1, u(e);
}
}
function g(e, t) {
this.fun = e, this.array = t;
}
function v() {}
n.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
c.push(new g(e, t)), 1 !== c.length || l || a(d);
}, g.prototype.run = function() {
this.fun.apply(null, this.array);
}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", 
n.versions = {}, n.on = v, n.addListener = v, n.once = v, n.off = v, n.removeListener = v, 
n.removeAllListeners = v, n.emit = v, n.prependListener = v, n.prependOnceListener = v, 
n.listeners = function(e) {
return [];
}, n.binding = function(e) {
throw new Error("process.binding is not supported");
}, n.cwd = function() {
return "/";
}, n.chdir = function(e) {
throw new Error("process.chdir is not supported");
}, n.umask = function() {
return 0;
};
}, function(module, exports, __webpack_require__) {
(function(process, global, setImmediate) {
!function(e) {
if (1) module.exports = e(); else var t;
}(function() {
var define, module, exports;
return function e(t, n, r) {
function i(s, a) {
if (!n[s]) {
if (!t[s]) {
var u = "function" == typeof _dereq_ && _dereq_;
if (!a && u) return u(s, !0);
if (o) return o(s, !0);
var c = new Error("Cannot find module '" + s + "'");
throw c.code = "MODULE_NOT_FOUND", c;
}
var l = n[s] = {
exports: {}
};
t[s][0].call(l.exports, function(e) {
var n;
return i(t[s][1][e] || e);
}, l, l.exports, e, t, n, r);
}
return n[s].exports;
}
for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < r.length; s++) i(r[s]);
return i;
}({
1: [ function(e, t, n) {
"use strict";
t.exports = function(e) {
var t = e._SomePromiseArray;
function n(e) {
var n = new t(e), r = n.promise();
return n.setHowMany(1), n.setUnwrap(), n.init(), r;
}
e.any = function(e) {
return n(e);
}, e.prototype.any = function() {
return n(this);
};
};
}, {} ],
2: [ function(e, t, n) {
"use strict";
var r;
try {
throw new Error();
} catch (e) {
r = e;
}
var i = e("./schedule"), o = e("./queue"), s = e("./util");
function a() {
this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new o(16), 
this._normalQueue = new o(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
var e = this;
this.drainQueues = function() {
e._drainQueues();
}, this._schedule = i;
}
function u(e, t, n) {
this._lateQueue.push(e, t, n), this._queueTick();
}
function c(e, t, n) {
this._normalQueue.push(e, t, n), this._queueTick();
}
function l(e) {
this._normalQueue._pushOne(e), this._queueTick();
}
function f(e) {
for (;e.length() > 0; ) p(e);
}
function p(e) {
var t = e.shift();
if ("function" != typeof t) t._settlePromises(); else {
var n = e.shift(), r = e.shift();
t.call(n, r);
}
}
a.prototype.setScheduler = function(e) {
var t = this._schedule;
return this._schedule = e, this._customScheduler = !0, t;
}, a.prototype.hasCustomScheduler = function() {
return this._customScheduler;
}, a.prototype.enableTrampoline = function() {
this._trampolineEnabled = !0;
}, a.prototype.disableTrampolineIfNecessary = function() {
s.hasDevTools && (this._trampolineEnabled = !1);
}, a.prototype.haveItemsQueued = function() {
return this._isTickUsed || this._haveDrainedQueues;
}, a.prototype.fatalError = function(e, t) {
t ? (process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"), 
process.exit(2)) : this.throwLater(e);
}, a.prototype.throwLater = function(e, t) {
if (1 === arguments.length && (t = e, e = function() {
throw t;
}), "undefined" != typeof setTimeout) setTimeout(function() {
e(t);
}, 0); else try {
this._schedule(function() {
e(t);
});
} catch (e) {
throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
}
}, s.hasDevTools ? (a.prototype.invokeLater = function(e, t, n) {
this._trampolineEnabled ? u.call(this, e, t, n) : this._schedule(function() {
setTimeout(function() {
e.call(t, n);
}, 100);
});
}, a.prototype.invoke = function(e, t, n) {
this._trampolineEnabled ? c.call(this, e, t, n) : this._schedule(function() {
e.call(t, n);
});
}, a.prototype.settlePromises = function(e) {
this._trampolineEnabled ? l.call(this, e) : this._schedule(function() {
e._settlePromises();
});
}) : (a.prototype.invokeLater = u, a.prototype.invoke = c, a.prototype.settlePromises = l), 
a.prototype._drainQueues = function() {
f(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, f(this._lateQueue);
}, a.prototype._queueTick = function() {
this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
}, a.prototype._reset = function() {
this._isTickUsed = !1;
}, t.exports = a, t.exports.firstLineError = r;
}, {
"./queue": 26,
"./schedule": 29,
"./util": 36
} ],
3: [ function(e, t, n) {
"use strict";
t.exports = function(e, t, n, r) {
var i = !1, o = function(e, t) {
this._reject(t);
}, s = function(e, t) {
t.promiseRejectionQueued = !0, t.bindingPromise._then(o, o, null, this, e);
}, a = function(e, t) {
0 == (50397184 & this._bitField) && this._resolveCallback(t.target);
}, u = function(e, t) {
t.promiseRejectionQueued || this._reject(e);
};
e.prototype.bind = function(o) {
i || (i = !0, e.prototype._propagateFrom = r.propagateFromFunction(), e.prototype._boundValue = r.boundValueFunction());
var c = n(o), l = new e(t);
l._propagateFrom(this, 1);
var f = this._target();
if (l._setBoundTo(c), c instanceof e) {
var p = {
promiseRejectionQueued: !1,
promise: l,
target: f,
bindingPromise: c
};
f._then(t, s, void 0, l, p), c._then(a, u, void 0, l, p), l._setOnCancel(c);
} else l._resolveCallback(f);
return l;
}, e.prototype._setBoundTo = function(e) {
void 0 !== e ? (this._bitField = 2097152 | this._bitField, this._boundTo = e) : this._bitField = -2097153 & this._bitField;
}, e.prototype._isBound = function() {
return 2097152 == (2097152 & this._bitField);
}, e.bind = function(t, n) {
return e.resolve(n).bind(t);
};
};
}, {} ],
4: [ function(e, t, n) {
"use strict";
var r;
function i() {
try {
Promise === o && (Promise = r);
} catch (e) {}
return o;
}
"undefined" != typeof Promise && (r = Promise);
var o = e("./promise")();
o.noConflict = i, t.exports = o;
}, {
"./promise": 22
} ],
5: [ function(e, t, n) {
"use strict";
var r = Object.create;
if (r) {
var i = r(null), o = r(null);
i[" size"] = o[" size"] = 0;
}
t.exports = function(t) {
var n = e("./util"), r = n.canEvaluate, i = n.isIdentifier, o, s;
if (0) var a, u, c;
function l(e, r) {
var i;
if (null != e && (i = e[r]), "function" != typeof i) {
var o = "Object " + n.classString(e) + " has no method '" + n.toString(r) + "'";
throw new t.TypeError(o);
}
return i;
}
function f(e) {
var t, n;
return l(e, this.pop()).apply(e, this);
}
function p(e) {
return e[this];
}
function h(e) {
var t = +this;
return t < 0 && (t = Math.max(0, t + e.length)), e[t];
}
t.prototype.call = function(e) {
var t = [].slice.call(arguments, 1);
if (0) var n;
return t.push(e), this._then(f, void 0, void 0, t, void 0);
}, t.prototype.get = function(e) {
var t, n;
if ("number" == typeof e) n = h; else if (r) {
var i = (void 0)(e);
n = null !== i ? i : p;
} else n = p;
return this._then(n, void 0, void 0, e, void 0);
};
};
}, {
"./util": 36
} ],
6: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i) {
var o = e("./util"), s = o.tryCatch, a = o.errorObj, u = t._async;
t.prototype.break = t.prototype.cancel = function() {
if (!i.cancellation()) return this._warn("cancellation is disabled");
for (var e = this, t = e; e._isCancellable(); ) {
if (!e._cancelBy(t)) {
t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
break;
}
var n = e._cancellationParent;
if (null == n || !n._isCancellable()) {
e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
break;
}
e._isFollowing() && e._followee().cancel(), e._setWillBeCancelled(), t = e, e = n;
}
}, t.prototype._branchHasCancelled = function() {
this._branchesRemainingToCancel--;
}, t.prototype._enoughBranchesHaveCancelled = function() {
return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0;
}, t.prototype._cancelBy = function(e) {
return e === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), 
!0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), 
!0));
}, t.prototype._cancelBranched = function() {
this._enoughBranchesHaveCancelled() && this._cancel();
}, t.prototype._cancel = function() {
this._isCancellable() && (this._setCancelled(), u.invoke(this._cancelPromises, this, void 0));
}, t.prototype._cancelPromises = function() {
this._length() > 0 && this._settlePromises();
}, t.prototype._unsetOnCancel = function() {
this._onCancelField = void 0;
}, t.prototype._isCancellable = function() {
return this.isPending() && !this._isCancelled();
}, t.prototype.isCancellable = function() {
return this.isPending() && !this.isCancelled();
}, t.prototype._doInvokeOnCancel = function(e, t) {
if (o.isArray(e)) for (var n = 0; n < e.length; ++n) this._doInvokeOnCancel(e[n], t); else if (void 0 !== e) if ("function" == typeof e) {
if (!t) {
var r = s(e).call(this._boundValue());
r === a && (this._attachExtraTrace(r.e), u.throwLater(r.e));
}
} else e._resultCancelled(this);
}, t.prototype._invokeOnCancel = function() {
var e = this._onCancel();
this._unsetOnCancel(), u.invoke(this._doInvokeOnCancel, this, e);
}, t.prototype._invokeInternalOnCancel = function() {
this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
}, t.prototype._resultCancelled = function() {
this.cancel();
};
};
}, {
"./util": 36
} ],
7: [ function(e, t, n) {
"use strict";
t.exports = function(t) {
var n = e("./util"), r = e("./es5").keys, i = n.tryCatch, o = n.errorObj;
function s(e, s, a) {
return function(u) {
var c = a._boundValue();
e: for (var l = 0; l < e.length; ++l) {
var f = e[l];
if (f === Error || null != f && f.prototype instanceof Error) {
if (u instanceof f) return i(s).call(c, u);
} else if ("function" == typeof f) {
var p = i(f).call(c, u);
if (p === o) return p;
if (p) return i(s).call(c, u);
} else if (n.isObject(u)) {
for (var h = r(f), d = 0; d < h.length; ++d) {
var g = h[d];
if (f[g] != u[g]) continue e;
}
return i(s).call(c, u);
}
}
return t;
};
}
return s;
};
}, {
"./es5": 13,
"./util": 36
} ],
8: [ function(e, t, n) {
"use strict";
t.exports = function(e) {
var t = !1, n = [];
function r() {
this._trace = new r.CapturedTrace(o());
}
function i() {
if (t) return new r();
}
function o() {
var e = n.length - 1;
if (e >= 0) return n[e];
}
return e.prototype._promiseCreated = function() {}, e.prototype._pushContext = function() {}, 
e.prototype._popContext = function() {
return null;
}, e._peekContext = e.prototype._peekContext = function() {}, r.prototype._pushContext = function() {
void 0 !== this._trace && (this._trace._promiseCreated = null, n.push(this._trace));
}, r.prototype._popContext = function() {
if (void 0 !== this._trace) {
var e = n.pop(), t = e._promiseCreated;
return e._promiseCreated = null, t;
}
return null;
}, r.CapturedTrace = null, r.create = i, r.deactivateLongStackTraces = function() {}, 
r.activateLongStackTraces = function() {
var n = e.prototype._pushContext, i = e.prototype._popContext, s = e._peekContext, a = e.prototype._peekContext, u = e.prototype._promiseCreated;
r.deactivateLongStackTraces = function() {
e.prototype._pushContext = n, e.prototype._popContext = i, e._peekContext = s, e.prototype._peekContext = a, 
e.prototype._promiseCreated = u, t = !1;
}, t = !0, e.prototype._pushContext = r.prototype._pushContext, e.prototype._popContext = r.prototype._popContext, 
e._peekContext = e.prototype._peekContext = o, e.prototype._promiseCreated = function() {
var e = this._peekContext();
e && null == e._promiseCreated && (e._promiseCreated = this);
};
}, r;
};
}, {} ],
9: [ function(e, t, n) {
"use strict";
t.exports = function(t, n) {
var r = t._getDomain, i = t._async, o = e("./errors").Warning, s = e("./util"), a = e("./es5"), u = s.canAttachTrace, c, l, f = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, p = /\((?:timers\.js):\d+:\d+\)/, h = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, d = null, g = null, v = !1, m, y = !(0 == s.env("BLUEBIRD_DEBUG")), _ = !(0 == s.env("BLUEBIRD_WARNINGS") || !y && !s.env("BLUEBIRD_WARNINGS")), b = !(0 == s.env("BLUEBIRD_LONG_STACK_TRACES") || !y && !s.env("BLUEBIRD_LONG_STACK_TRACES")), w = 0 != s.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (_ || !!s.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
t.prototype.suppressUnhandledRejections = function() {
var e = this._target();
e._bitField = -1048577 & e._bitField | 524288;
}, t.prototype._ensurePossibleRejectionHandled = function() {
if (0 == (524288 & this._bitField)) {
this._setRejectionIsUnhandled();
var e = this;
setTimeout(function() {
e._notifyUnhandledRejection();
}, 1);
}
}, t.prototype._notifyUnhandledRejectionIsHandled = function() {
Y("rejectionHandled", c, void 0, this);
}, t.prototype._setReturnedNonUndefined = function() {
this._bitField = 268435456 | this._bitField;
}, t.prototype._returnedNonUndefined = function() {
return 0 != (268435456 & this._bitField);
}, t.prototype._notifyUnhandledRejection = function() {
if (this._isRejectionUnhandled()) {
var e = this._settledValue();
this._setUnhandledRejectionIsNotified(), Y("unhandledRejection", l, e, this);
}
}, t.prototype._setUnhandledRejectionIsNotified = function() {
this._bitField = 262144 | this._bitField;
}, t.prototype._unsetUnhandledRejectionIsNotified = function() {
this._bitField = -262145 & this._bitField;
}, t.prototype._isUnhandledRejectionNotified = function() {
return (262144 & this._bitField) > 0;
}, t.prototype._setRejectionIsUnhandled = function() {
this._bitField = 1048576 | this._bitField;
}, t.prototype._unsetRejectionIsUnhandled = function() {
this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), 
this._notifyUnhandledRejectionIsHandled());
}, t.prototype._isRejectionUnhandled = function() {
return (1048576 & this._bitField) > 0;
}, t.prototype._warn = function(e, t, n) {
return V(e, t, n || this);
}, t.onPossiblyUnhandledRejection = function(e) {
var t = r();
l = "function" == typeof e ? null === t ? e : s.domainBind(t, e) : void 0;
}, t.onUnhandledRejectionHandled = function(e) {
var t = r();
c = "function" == typeof e ? null === t ? e : s.domainBind(t, e) : void 0;
};
var x = function() {};
t.longStackTraces = function() {
if (i.haveItemsQueued() && !ae.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
if (!ae.longStackTraces && ee()) {
var e = t.prototype._captureStackTrace, r = t.prototype._attachExtraTrace, o = t.prototype._dereferenceTrace;
ae.longStackTraces = !0, x = function() {
if (i.haveItemsQueued() && !ae.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
t.prototype._captureStackTrace = e, t.prototype._attachExtraTrace = r, t.prototype._dereferenceTrace = o, 
n.deactivateLongStackTraces(), i.enableTrampoline(), ae.longStackTraces = !1;
}, t.prototype._captureStackTrace = q, t.prototype._attachExtraTrace = $, t.prototype._dereferenceTrace = G, 
n.activateLongStackTraces(), i.disableTrampolineIfNecessary();
}
}, t.hasLongStackTraces = function() {
return ae.longStackTraces && ee();
};
var j = function() {
try {
if ("function" == typeof CustomEvent) {
var e = new CustomEvent("CustomEvent");
return s.global.dispatchEvent(e), function(e, t) {
var n = {
detail: t,
cancelable: !0
};
a.defineProperty(n, "promise", {
value: t.promise
}), a.defineProperty(n, "reason", {
value: t.reason
});
var r = new CustomEvent(e.toLowerCase(), n);
return !s.global.dispatchEvent(r);
};
}
if ("function" == typeof Event) {
var e = new Event("CustomEvent");
return s.global.dispatchEvent(e), function(e, t) {
var n = new Event(e.toLowerCase(), {
cancelable: !0
});
return n.detail = t, a.defineProperty(n, "promise", {
value: t.promise
}), a.defineProperty(n, "reason", {
value: t.reason
}), !s.global.dispatchEvent(n);
};
}
var e;
return (e = document.createEvent("CustomEvent")).initCustomEvent("testingtheevent", !1, !0, {}), 
s.global.dispatchEvent(e), function(e, t) {
var n = document.createEvent("CustomEvent");
return n.initCustomEvent(e.toLowerCase(), !1, !0, t), !s.global.dispatchEvent(n);
};
} catch (e) {}
return function() {
return !1;
};
}(), C = s.isNode ? function() {
return process.emit.apply(process, arguments);
} : s.global ? function(e) {
var t = "on" + e.toLowerCase(), n = s.global[t];
return !!n && (n.apply(s.global, [].slice.call(arguments, 1)), !0);
} : function() {
return !1;
};
function T(e, t) {
return {
promise: t
};
}
var E = {
promiseCreated: T,
promiseFulfilled: T,
promiseRejected: T,
promiseResolved: T,
promiseCancelled: T,
promiseChained: function(e, t, n) {
return {
promise: t,
child: n
};
},
warning: function(e, t) {
return {
warning: t
};
},
unhandledRejection: function(e, t, n) {
return {
reason: t,
promise: n
};
},
rejectionHandled: T
}, k = function(e) {
var t = !1;
try {
t = C.apply(null, arguments);
} catch (e) {
i.throwLater(e), t = !0;
}
var n = !1;
try {
n = j(e, E[e].apply(null, arguments));
} catch (e) {
i.throwLater(e), n = !0;
}
return n || t;
};
function S() {
return !1;
}
function A(e, t, n) {
var r = this;
try {
e(t, n, function(e) {
if ("function" != typeof e) throw new TypeError("onCancel must be a function, got: " + s.toString(e));
r._attachCancellationCallback(e);
});
} catch (e) {
return e;
}
}
function M(e) {
if (!this._isCancellable()) return this;
var t = this._onCancel();
void 0 !== t ? s.isArray(t) ? t.push(e) : this._setOnCancel([ t, e ]) : this._setOnCancel(e);
}
function O() {
return this._onCancelField;
}
function F(e) {
this._onCancelField = e;
}
function P() {
this._cancellationParent = void 0, this._onCancelField = void 0;
}
function R(e, t) {
if (0 != (1 & t)) {
this._cancellationParent = e;
var n = e._branchesRemainingToCancel;
void 0 === n && (n = 0), e._branchesRemainingToCancel = n + 1;
}
0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo);
}
function D(e, t) {
0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo);
}
t.config = function(e) {
if ("longStackTraces" in (e = Object(e)) && (e.longStackTraces ? t.longStackTraces() : !e.longStackTraces && t.hasLongStackTraces() && x()), 
"warnings" in e) {
var n = e.warnings;
ae.warnings = !!n, w = ae.warnings, s.isObject(n) && "wForgottenReturn" in n && (w = !!n.wForgottenReturn);
}
if ("cancellation" in e && e.cancellation && !ae.cancellation) {
if (i.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
t.prototype._clearCancellationData = P, t.prototype._propagateFrom = R, t.prototype._onCancel = O, 
t.prototype._setOnCancel = F, t.prototype._attachCancellationCallback = M, t.prototype._execute = A, 
N = R, ae.cancellation = !0;
}
return "monitoring" in e && (e.monitoring && !ae.monitoring ? (ae.monitoring = !0, 
t.prototype._fireEvent = k) : !e.monitoring && ae.monitoring && (ae.monitoring = !1, 
t.prototype._fireEvent = S)), t;
}, t.prototype._fireEvent = S, t.prototype._execute = function(e, t, n) {
try {
e(t, n);
} catch (e) {
return e;
}
}, t.prototype._onCancel = function() {}, t.prototype._setOnCancel = function(e) {}, 
t.prototype._attachCancellationCallback = function(e) {}, t.prototype._captureStackTrace = function() {}, 
t.prototype._attachExtraTrace = function() {}, t.prototype._dereferenceTrace = function() {}, 
t.prototype._clearCancellationData = function() {}, t.prototype._propagateFrom = function(e, t) {};
var N = D;
function L() {
var e = this._boundTo;
return void 0 !== e && e instanceof t ? e.isFulfilled() ? e.value() : void 0 : e;
}
function q() {
this._trace = new oe(this._peekContext());
}
function $(e, t) {
if (u(e)) {
var n = this._trace;
if (void 0 !== n && t && (n = n._parent), void 0 !== n) n.attachExtraTrace(e); else if (!e.__stackCleaned__) {
var r = X(e);
s.notEnumerableProp(e, "stack", r.message + "\n" + r.stack.join("\n")), s.notEnumerableProp(e, "__stackCleaned__", !0);
}
}
}
function G() {
this._trace = void 0;
}
function I(e, t, n, r, i) {
if (void 0 === e && null !== t && w) {
if (void 0 !== i && i._returnedNonUndefined()) return;
if (0 == (65535 & r._bitField)) return;
n && (n += " ");
var o = "", s = "";
if (t._trace) {
for (var a = t._trace.stack.split("\n"), u = Q(a), c = u.length - 1; c >= 0; --c) {
var l = u[c];
if (!p.test(l)) {
var f = l.match(h);
f && (o = "at " + f[1] + ":" + f[2] + ":" + f[3] + " ");
break;
}
}
if (u.length > 0) for (var d = u[0], c = 0; c < a.length; ++c) if (a[c] === d) {
c > 0 && (s = "\n" + a[c - 1]);
break;
}
}
var g = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + s;
r._warn(g, !0, t);
}
}
function H(e, t) {
var n = e + " is deprecated and will be removed in a future version.";
return t && (n += " Use " + t + " instead."), V(n);
}
function V(e, n, r) {
if (ae.warnings) {
var i = new o(e), s;
if (n) r._attachExtraTrace(i); else if (ae.longStackTraces && (s = t._peekContext())) s.attachExtraTrace(i); else {
var a = X(i);
i.stack = a.message + "\n" + a.stack.join("\n");
}
k("warning", i) || K(i, "", !0);
}
}
function B(e, t) {
for (var n = 0; n < t.length - 1; ++n) t[n].push("From previous event:"), t[n] = t[n].join("\n");
return n < t.length && (t[n] = t[n].join("\n")), e + "\n" + t.join("\n");
}
function U(e) {
for (var t = 0; t < e.length; ++t) (0 === e[t].length || t + 1 < e.length && e[t][0] === e[t + 1][0]) && (e.splice(t, 1), 
t--);
}
function W(e) {
for (var t = e[0], n = 1; n < e.length; ++n) {
for (var r = e[n], i = t.length - 1, o = t[i], s = -1, a = r.length - 1; a >= 0; --a) if (r[a] === o) {
s = a;
break;
}
for (var a = s; a >= 0; --a) {
var u = r[a];
if (t[i] !== u) break;
t.pop(), i--;
}
t = r;
}
}
function Q(e) {
for (var t = [], n = 0; n < e.length; ++n) {
var r = e[n], i = "    (No stack trace)" === r || d.test(r), o = i && te(r);
i && !o && (v && " " !== r.charAt(0) && (r = "    " + r), t.push(r));
}
return t;
}
function z(e) {
for (var t = e.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < t.length; ++n) {
var r = t[n];
if ("    (No stack trace)" === r || d.test(r)) break;
}
return n > 0 && "SyntaxError" != e.name && (t = t.slice(n)), t;
}
function X(e) {
var t = e.stack, n = e.toString();
return t = "string" == typeof t && t.length > 0 ? z(e) : [ "    (No stack trace)" ], 
{
message: n,
stack: "SyntaxError" == e.name ? t : Q(t)
};
}
function K(e, t, n) {
if ("undefined" != typeof console) {
var r;
if (s.isObject(e)) {
var i = e.stack;
r = t + g(i, e);
} else r = t + String(e);
"function" == typeof m ? m(r, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(r);
}
}
function Y(e, t, n, r) {
var o = !1;
try {
"function" == typeof t && (o = !0, "rejectionHandled" === e ? t(r) : t(n, r));
} catch (e) {
i.throwLater(e);
}
"unhandledRejection" === e ? k(e, n, r) || o || K(n, "Unhandled rejection ") : k(e, r);
}
function J(e) {
var t;
if ("function" == typeof e) t = "[function " + (e.name || "anonymous") + "]"; else {
var n;
if (t = e && "function" == typeof e.toString ? e.toString() : s.toString(e), /\[object [a-zA-Z0-9$_]+\]/.test(t)) try {
var r;
t = JSON.stringify(e);
} catch (e) {}
0 === t.length && (t = "(empty array)");
}
return "(<" + Z(t) + ">, no stack trace)";
}
function Z(e) {
var t = 41;
return e.length < 41 ? e : e.substr(0, 38) + "...";
}
function ee() {
return "function" == typeof se;
}
var te = function() {
return !1;
}, ne = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function re(e) {
var t = e.match(ne);
if (t) return {
fileName: t[1],
line: parseInt(t[2], 10)
};
}
function ie(e, t) {
if (ee()) {
for (var n = e.stack.split("\n"), r = t.stack.split("\n"), i = -1, o = -1, s, a, u = 0; u < n.length; ++u) {
var c;
if (c = re(n[u])) {
s = c.fileName, i = c.line;
break;
}
}
for (var u = 0; u < r.length; ++u) {
var c;
if (c = re(r[u])) {
a = c.fileName, o = c.line;
break;
}
}
i < 0 || o < 0 || !s || !a || s !== a || i >= o || (te = function(e) {
if (f.test(e)) return !0;
var t = re(e);
return !!(t && t.fileName === s && i <= t.line && t.line <= o);
});
}
}
function oe(e) {
this._parent = e, this._promisesCreated = 0;
var t = this._length = 1 + (void 0 === e ? 0 : e._length);
se(this, oe), t > 32 && this.uncycle();
}
s.inherits(oe, Error), n.CapturedTrace = oe, oe.prototype.uncycle = function() {
var e = this._length;
if (!(e < 2)) {
for (var t = [], n = {}, r = 0, i = this; void 0 !== i; ++r) t.push(i), i = i._parent;
for (var r = (e = this._length = r) - 1; r >= 0; --r) {
var o = t[r].stack;
void 0 === n[o] && (n[o] = r);
}
for (var r = 0; r < e; ++r) {
var s, a = n[t[r].stack];
if (void 0 !== a && a !== r) {
a > 0 && (t[a - 1]._parent = void 0, t[a - 1]._length = 1), t[r]._parent = void 0, 
t[r]._length = 1;
var u = r > 0 ? t[r - 1] : this;
a < e - 1 ? (u._parent = t[a + 1], u._parent.uncycle(), u._length = u._parent._length + 1) : (u._parent = void 0, 
u._length = 1);
for (var c = u._length + 1, l = r - 2; l >= 0; --l) t[l]._length = c, c++;
return;
}
}
}
}, oe.prototype.attachExtraTrace = function(e) {
if (!e.__stackCleaned__) {
this.uncycle();
for (var t = X(e), n = t.message, r = [ t.stack ], i = this; void 0 !== i; ) r.push(Q(i.stack.split("\n"))), 
i = i._parent;
W(r), U(r), s.notEnumerableProp(e, "stack", B(n, r)), s.notEnumerableProp(e, "__stackCleaned__", !0);
}
};
var se = function e() {
var t = /^\s*at\s*/, n = function(e, t) {
return "string" == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : J(t);
};
if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
Error.stackTraceLimit += 6, d = t, g = n;
var r = Error.captureStackTrace;
return te = function(e) {
return f.test(e);
}, function(e, t) {
Error.stackTraceLimit += 6, r(e, t), Error.stackTraceLimit -= 6;
};
}
var i = new Error(), o;
if ("string" == typeof i.stack && i.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return d = /@/, 
g = n, v = !0, function e(t) {
t.stack = new Error().stack;
};
try {
throw new Error();
} catch (e) {
o = "stack" in e;
}
return "stack" in i || !o || "number" != typeof Error.stackTraceLimit ? (g = function(e, t) {
return "string" == typeof e ? e : "object" != typeof t && "function" != typeof t || void 0 === t.name || void 0 === t.message ? J(t) : t.toString();
}, null) : (d = t, g = n, function e(t) {
Error.stackTraceLimit += 6;
try {
throw new Error();
} catch (e) {
t.stack = e.stack;
}
Error.stackTraceLimit -= 6;
});
}([]);
"undefined" != typeof console && void 0 !== console.warn && (m = function(e) {
console.warn(e);
}, s.isNode && process.stderr.isTTY ? m = function(e, t) {
var n = t ? "[33m" : "[31m";
console.warn(n + e + "[0m\n");
} : s.isNode || "string" != typeof new Error().stack || (m = function(e, t) {
console.warn("%c" + e, t ? "color: darkorange" : "color: red");
}));
var ae = {
warnings: _,
longStackTraces: !1,
cancellation: !1,
monitoring: !1
};
return b && t.longStackTraces(), {
longStackTraces: function() {
return ae.longStackTraces;
},
warnings: function() {
return ae.warnings;
},
cancellation: function() {
return ae.cancellation;
},
monitoring: function() {
return ae.monitoring;
},
propagateFromFunction: function() {
return N;
},
boundValueFunction: function() {
return L;
},
checkForgottenReturns: I,
setBounds: ie,
warn: V,
deprecated: H,
CapturedTrace: oe,
fireDomEvent: j,
fireGlobalEvent: C
};
};
}, {
"./errors": 12,
"./es5": 13,
"./util": 36
} ],
10: [ function(e, t, n) {
"use strict";
t.exports = function(e) {
function t() {
return this.value;
}
function n() {
throw this.reason;
}
e.prototype.return = e.prototype.thenReturn = function(n) {
return n instanceof e && n.suppressUnhandledRejections(), this._then(t, void 0, void 0, {
value: n
}, void 0);
}, e.prototype.throw = e.prototype.thenThrow = function(e) {
return this._then(n, void 0, void 0, {
reason: e
}, void 0);
}, e.prototype.catchThrow = function(e) {
if (arguments.length <= 1) return this._then(void 0, n, void 0, {
reason: e
}, void 0);
var t = arguments[1], r = function() {
throw t;
};
return this.caught(e, r);
}, e.prototype.catchReturn = function(n) {
if (arguments.length <= 1) return n instanceof e && n.suppressUnhandledRejections(), 
this._then(void 0, t, void 0, {
value: n
}, void 0);
var r = arguments[1];
r instanceof e && r.suppressUnhandledRejections();
var i = function() {
return r;
};
return this.caught(n, i);
};
};
}, {} ],
11: [ function(e, t, n) {
"use strict";
t.exports = function(e, t) {
var n = e.reduce, r = e.all;
function i() {
return r(this);
}
function o(e, r) {
return n(e, r, t, t);
}
e.prototype.each = function(e) {
return n(this, e, t, 0)._then(i, void 0, void 0, this, void 0);
}, e.prototype.mapSeries = function(e) {
return n(this, e, t, t);
}, e.each = function(e, r) {
return n(e, r, t, 0)._then(i, void 0, void 0, e, void 0);
}, e.mapSeries = o;
};
}, {} ],
12: [ function(e, t, n) {
"use strict";
var r = e("./es5"), i = r.freeze, o = e("./util"), s = o.inherits, a = o.notEnumerableProp, u, c;
function l(e, t) {
function n(r) {
if (!(this instanceof n)) return new n(r);
a(this, "message", "string" == typeof r ? r : t), a(this, "name", e), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
}
return s(n, Error), n;
}
var f = l("Warning", "warning"), p = l("CancellationError", "cancellation error"), h = l("TimeoutError", "timeout error"), d = l("AggregateError", "aggregate error");
try {
u = TypeError, c = RangeError;
} catch (e) {
u = l("TypeError", "type error"), c = l("RangeError", "range error");
}
for (var g = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), v = 0; v < g.length; ++v) "function" == typeof Array.prototype[g[v]] && (d.prototype[g[v]] = Array.prototype[g[v]]);
r.defineProperty(d.prototype, "length", {
value: 0,
configurable: !1,
writable: !0,
enumerable: !0
}), d.prototype.isOperational = !0;
var m = 0;
function y(e) {
if (!(this instanceof y)) return new y(e);
a(this, "name", "OperationalError"), a(this, "message", e), this.cause = e, this.isOperational = !0, 
e instanceof Error ? (a(this, "message", e.message), a(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
}
d.prototype.toString = function() {
var e = Array(4 * m + 1).join(" "), t = "\n" + e + "AggregateError of:\n";
m++, e = Array(4 * m + 1).join(" ");
for (var n = 0; n < this.length; ++n) {
for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) i[o] = e + i[o];
t += (r = i.join("\n")) + "\n";
}
return m--, t;
}, s(y, Error);
var _ = Error.__BluebirdErrorTypes__;
_ || (_ = i({
CancellationError: p,
TimeoutError: h,
OperationalError: y,
RejectionError: y,
AggregateError: d
}), r.defineProperty(Error, "__BluebirdErrorTypes__", {
value: _,
writable: !1,
enumerable: !1,
configurable: !1
})), t.exports = {
Error,
TypeError: u,
RangeError: c,
CancellationError: _.CancellationError,
OperationalError: _.OperationalError,
TimeoutError: _.TimeoutError,
AggregateError: _.AggregateError,
Warning: f
};
}, {
"./es5": 13,
"./util": 36
} ],
13: [ function(e, t, n) {
var r = function() {
"use strict";
return void 0 === this;
}();
if (r) t.exports = {
freeze: Object.freeze,
defineProperty: Object.defineProperty,
getDescriptor: Object.getOwnPropertyDescriptor,
keys: Object.keys,
names: Object.getOwnPropertyNames,
getPrototypeOf: Object.getPrototypeOf,
isArray: Array.isArray,
isES5: r,
propertyIsWritable: function(e, t) {
var n = Object.getOwnPropertyDescriptor(e, t);
return !(n && !n.writable && !n.set);
}
}; else {
var i = {}.hasOwnProperty, o = {}.toString, s = {}.constructor.prototype, a = function(e) {
var t = [];
for (var n in e) i.call(e, n) && t.push(n);
return t;
}, u = function(e, t) {
return {
value: e[t]
};
}, c = function(e, t, n) {
return e[t] = n.value, e;
}, l = function(e) {
return e;
}, f = function(e) {
try {
return Object(e).constructor.prototype;
} catch (e) {
return s;
}
}, p = function(e) {
try {
return "[object Array]" === o.call(e);
} catch (e) {
return !1;
}
};
t.exports = {
isArray: p,
keys: a,
names: a,
defineProperty: c,
getDescriptor: u,
freeze: l,
getPrototypeOf: f,
isES5: r,
propertyIsWritable: function() {
return !0;
}
};
}
}, {} ],
14: [ function(e, t, n) {
"use strict";
t.exports = function(e, t) {
var n = e.map;
e.prototype.filter = function(e, r) {
return n(this, e, r, t);
}, e.filter = function(e, r, i) {
return n(e, r, i, t);
};
};
}, {} ],
15: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r) {
var i = e("./util"), o = t.CancellationError, s = i.errorObj, a = e("./catch_filter")(r);
function u(e, t, n) {
this.promise = e, this.type = t, this.handler = n, this.called = !1, this.cancelPromise = null;
}
function c(e) {
this.finallyHandler = e;
}
function l(e, t) {
return null != e.cancelPromise && (arguments.length > 1 ? e.cancelPromise._reject(t) : e.cancelPromise._cancel(), 
e.cancelPromise = null, !0);
}
function f() {
return h.call(this, this.promise._target()._settledValue());
}
function p(e) {
if (!l(this, e)) return s.e = e, s;
}
function h(e) {
var i = this.promise, a = this.handler;
if (!this.called) {
this.called = !0;
var u = this.isFinallyHandler() ? a.call(i._boundValue()) : a.call(i._boundValue(), e);
if (u === r) return u;
if (void 0 !== u) {
i._setReturnedNonUndefined();
var h = n(u, i);
if (h instanceof t) {
if (null != this.cancelPromise) {
if (h._isCancelled()) {
var d = new o("late cancellation observer");
return i._attachExtraTrace(d), s.e = d, s;
}
h.isPending() && h._attachCancellationCallback(new c(this));
}
return h._then(f, p, void 0, this, void 0);
}
}
}
return i.isRejected() ? (l(this), s.e = e, s) : (l(this), e);
}
return u.prototype.isFinallyHandler = function() {
return 0 === this.type;
}, c.prototype._resultCancelled = function() {
l(this.finallyHandler);
}, t.prototype._passThrough = function(e, t, n, r) {
return "function" != typeof e ? this.then() : this._then(n, r, void 0, new u(this, t, e), void 0);
}, t.prototype.lastly = t.prototype.finally = function(e) {
return this._passThrough(e, 0, h, h);
}, t.prototype.tap = function(e) {
return this._passThrough(e, 1, h);
}, t.prototype.tapCatch = function(e) {
var n = arguments.length;
if (1 === n) return this._passThrough(e, 1, void 0, h);
var r = new Array(n - 1), o = 0, s;
for (s = 0; s < n - 1; ++s) {
var u = arguments[s];
if (!i.isObject(u)) return t.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + i.classString(u)));
r[o++] = u;
}
r.length = o;
var c = arguments[s];
return this._passThrough(a(r, c, this), 1, void 0, h);
}, u;
};
}, {
"./catch_filter": 7,
"./util": 36
} ],
16: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i, o, s) {
var a, u = e("./errors").TypeError, c = e("./util"), l = c.errorObj, f = c.tryCatch, p = [];
function h(e, n, r) {
for (var o = 0; o < n.length; ++o) {
r._pushContext();
var s = f(n[o])(e);
if (r._popContext(), s === l) {
r._pushContext();
var a = t.reject(l.e);
return r._popContext(), a;
}
var u = i(s, r);
if (u instanceof t) return u;
}
return null;
}
function d(e, n, i, o) {
if (s.cancellation()) {
var a = new t(r), u = this._finallyPromise = new t(r);
this._promise = a.lastly(function() {
return u;
}), a._captureStackTrace(), a._setOnCancel(this);
} else {
var c;
(this._promise = new t(r))._captureStackTrace();
}
this._stack = o, this._generatorFunction = e, this._receiver = n, this._generator = void 0, 
this._yieldHandlers = "function" == typeof i ? [ i ].concat(p) : p, this._yieldedPromise = null, 
this._cancellationPhase = !1;
}
c.inherits(d, o), d.prototype._isResolved = function() {
return null === this._promise;
}, d.prototype._cleanup = function() {
this._promise = this._generator = null, s.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), 
this._finallyPromise = null);
}, d.prototype._promiseCancelled = function() {
if (!this._isResolved()) {
var e, n;
if (void 0 !== this._generator.return) this._promise._pushContext(), n = f(this._generator.return).call(this._generator, void 0), 
this._promise._popContext(); else {
var r = new t.CancellationError("generator .return() sentinel");
t.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), 
n = f(this._generator.throw).call(this._generator, r), this._promise._popContext();
}
this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(n);
}
}, d.prototype._promiseFulfilled = function(e) {
this._yieldedPromise = null, this._promise._pushContext();
var t = f(this._generator.next).call(this._generator, e);
this._promise._popContext(), this._continue(t);
}, d.prototype._promiseRejected = function(e) {
this._yieldedPromise = null, this._promise._attachExtraTrace(e), this._promise._pushContext();
var t = f(this._generator.throw).call(this._generator, e);
this._promise._popContext(), this._continue(t);
}, d.prototype._resultCancelled = function() {
if (this._yieldedPromise instanceof t) {
var e = this._yieldedPromise;
this._yieldedPromise = null, e.cancel();
}
}, d.prototype.promise = function() {
return this._promise;
}, d.prototype._run = function() {
this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, 
this._promiseFulfilled(void 0);
}, d.prototype._continue = function(e) {
var n = this._promise;
if (e === l) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(e.e, !1);
var r = e.value;
if (!0 === e.done) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r);
var o = i(r, this._promise);
if (o instanceof t || null !== (o = h(o, this._yieldHandlers, this._promise))) {
var s = (o = o._target())._bitField;
0 == (50397184 & s) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 != (33554432 & s) ? t._async.invoke(this._promiseFulfilled, this, o._value()) : 0 != (16777216 & s) ? t._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled();
} else this._promiseRejected(new u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(r)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
}, t.coroutine = function(e, t) {
if ("function" != typeof e) throw new u("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
var n = Object(t).yieldHandler, r = d, i = new Error().stack;
return function() {
var t = e.apply(this, arguments), o = new r(void 0, void 0, n, i), s = o.promise();
return o._generator = t, o._promiseFulfilled(void 0), s;
};
}, t.coroutine.addYieldHandler = function(e) {
if ("function" != typeof e) throw new u("expecting a function but got " + c.classString(e));
p.push(e);
}, t.spawn = function(e) {
if (s.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof e) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
var r = new d(e, this), i = r.promise();
return r._run(t.spawn), i;
};
};
}, {
"./errors": 12,
"./util": 36
} ],
17: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i, o, s) {
var a = e("./util"), u = a.canEvaluate, c = a.tryCatch, l = a.errorObj, f;
if (0) var p, h, d, g, v, m, y;
t.join = function() {
var e = arguments.length - 1, t;
if (e > 0 && "function" == typeof arguments[e] && (t = arguments[e], 0)) var r, i, o, s, a, u, c, l;
var f = [].slice.call(arguments);
t && f.pop();
var l = new n(f).promise();
return void 0 !== t ? l.spread(t) : l;
};
};
}, {
"./util": 36
} ],
18: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i, o, s) {
var a = t._getDomain, u = e("./util"), c = u.tryCatch, l = u.errorObj, f = t._async;
function p(e, t, n, r) {
this.constructor$(e), this._promise._captureStackTrace();
var i = a();
this._callback = null === i ? t : u.domainBind(i, t), this._preservedValues = r === o ? new Array(this.length()) : null, 
this._limit = n, this._inFlight = 0, this._queue = [], f.invoke(this._asyncInit, this, void 0);
}
function h(e, n, i, o) {
if ("function" != typeof n) return r("expecting a function but got " + u.classString(n));
var s = 0;
if (void 0 !== i) {
if ("object" != typeof i || null === i) return t.reject(new TypeError("options argument must be an object but it is " + u.classString(i)));
if ("number" != typeof i.concurrency) return t.reject(new TypeError("'concurrency' must be a number but it is " + u.classString(i.concurrency)));
s = i.concurrency;
}
return new p(e, n, s = "number" == typeof s && isFinite(s) && s >= 1 ? s : 0, o).promise();
}
u.inherits(p, n), p.prototype._asyncInit = function() {
this._init$(void 0, -2);
}, p.prototype._init = function() {}, p.prototype._promiseFulfilled = function(e, n) {
var r = this._values, o = this.length(), a = this._preservedValues, u = this._limit, f;
if (n < 0) {
if (r[n = -1 * n - 1] = e, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0;
} else {
if (u >= 1 && this._inFlight >= u) return r[n] = e, this._queue.push(n), !1;
null !== a && (a[n] = e);
var p = this._promise, h = this._callback, d = p._boundValue();
p._pushContext();
var g = c(h).call(d, e, n, o), v = p._popContext();
if (s.checkForgottenReturns(g, v, null !== a ? "Promise.filter" : "Promise.map", p), 
g === l) return this._reject(g.e), !0;
var m = i(g, this._promise);
if (m instanceof t) {
var y = (m = m._target())._bitField;
if (0 == (50397184 & y)) return u >= 1 && this._inFlight++, r[n] = m, m._proxy(this, -1 * (n + 1)), 
!1;
if (0 == (33554432 & y)) return 0 != (16777216 & y) ? (this._reject(m._reason()), 
!0) : (this._cancel(), !0);
g = m._value();
}
r[n] = g;
}
return ++this._totalResolved >= o && (null !== a ? this._filter(r, a) : this._resolve(r), 
!0);
}, p.prototype._drainQueue = function() {
for (var e = this._queue, t = this._limit, n = this._values; e.length > 0 && this._inFlight < t; ) {
if (this._isResolved()) return;
var r = e.pop();
this._promiseFulfilled(n[r], r);
}
}, p.prototype._filter = function(e, t) {
for (var n = t.length, r = new Array(n), i = 0, o = 0; o < n; ++o) e[o] && (r[i++] = t[o]);
r.length = i, this._resolve(r);
}, p.prototype.preservedValues = function() {
return this._preservedValues;
}, t.prototype.map = function(e, t) {
return h(this, e, t, null);
}, t.map = function(e, t, n, r) {
return h(e, t, n, r);
};
};
}, {
"./util": 36
} ],
19: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i, o) {
var s = e("./util"), a = s.tryCatch;
t.method = function(e) {
if ("function" != typeof e) throw new t.TypeError("expecting a function but got " + s.classString(e));
return function() {
var r = new t(n);
r._captureStackTrace(), r._pushContext();
var i = a(e).apply(this, arguments), s = r._popContext();
return o.checkForgottenReturns(i, s, "Promise.method", r), r._resolveFromSyncValue(i), 
r;
};
}, t.attempt = t.try = function(e) {
if ("function" != typeof e) return i("expecting a function but got " + s.classString(e));
var r = new t(n), u;
if (r._captureStackTrace(), r._pushContext(), arguments.length > 1) {
o.deprecated("calling Promise.try with more than 1 argument");
var c = arguments[1], l = arguments[2];
u = s.isArray(c) ? a(e).apply(l, c) : a(e).call(l, c);
} else u = a(e)();
var f = r._popContext();
return o.checkForgottenReturns(u, f, "Promise.try", r), r._resolveFromSyncValue(u), 
r;
}, t.prototype._resolveFromSyncValue = function(e) {
e === s.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0);
};
};
}, {
"./util": 36
} ],
20: [ function(e, t, n) {
"use strict";
var r = e("./util"), i = r.maybeWrapAsError, o, s = e("./errors").OperationalError, a = e("./es5");
function u(e) {
return e instanceof Error && a.getPrototypeOf(e) === Error.prototype;
}
var c = /^(?:name|message|stack|cause)$/;
function l(e) {
var t;
if (u(e)) {
(t = new s(e)).name = e.name, t.message = e.message, t.stack = e.stack;
for (var n = a.keys(e), i = 0; i < n.length; ++i) {
var o = n[i];
c.test(o) || (t[o] = e[o]);
}
return t;
}
return r.markAsOriginatingFromRejection(e), e;
}
function f(e, t) {
return function(n, r) {
if (null !== e) {
if (n) {
var o = l(i(n));
e._attachExtraTrace(o), e._reject(o);
} else if (t) {
var s = [].slice.call(arguments, 1);
e._fulfill(s);
} else e._fulfill(r);
e = null;
}
};
}
t.exports = f;
}, {
"./errors": 12,
"./es5": 13,
"./util": 36
} ],
21: [ function(e, t, n) {
"use strict";
t.exports = function(t) {
var n = e("./util"), r = t._async, i = n.tryCatch, o = n.errorObj;
function s(e, t) {
var s = this;
if (!n.isArray(e)) return a.call(this, e, t);
var u = i(t).apply(this._boundValue(), [ null ].concat(e));
u === o && r.throwLater(u.e);
}
function a(e, t) {
var n = this, s = this._boundValue(), a = void 0 === e ? i(t).call(s, null) : i(t).call(s, null, e);
a === o && r.throwLater(a.e);
}
function u(e, t) {
var n = this;
if (!e) {
var s = new Error(e + "");
s.cause = e, e = s;
}
var a = i(t).call(this._boundValue(), e);
a === o && r.throwLater(a.e);
}
t.prototype.asCallback = t.prototype.nodeify = function(e, t) {
if ("function" == typeof e) {
var n = a;
void 0 !== t && Object(t).spread && (n = s), this._then(n, u, void 0, this, e);
}
return this;
};
};
}, {
"./util": 36
} ],
22: [ function(e, t, n) {
"use strict";
t.exports = function() {
var n = function() {
return new h("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
}, r = function() {
return new M.PromiseInspection(this._target());
}, i = function(e) {
return M.reject(new h(e));
};
function o() {}
var s = {}, a = e("./util"), u;
u = a.isNode ? function() {
var e = process.domain;
return void 0 === e && (e = null), e;
} : function() {
return null;
}, a.notEnumerableProp(M, "_getDomain", u);
var c = e("./es5"), l = e("./async"), f = new l();
c.defineProperty(M, "_async", {
value: f
});
var p = e("./errors"), h = M.TypeError = p.TypeError;
M.RangeError = p.RangeError;
var d = M.CancellationError = p.CancellationError;
M.TimeoutError = p.TimeoutError, M.OperationalError = p.OperationalError, M.RejectionError = p.OperationalError, 
M.AggregateError = p.AggregateError;
var g = function() {}, v = {}, m = {}, y = e("./thenables")(M, g), _ = e("./promise_array")(M, g, y, i, o), b = e("./context")(M), w = b.create, x = e("./debuggability")(M, b), j = x.CapturedTrace, C = e("./finally")(M, y, m), T = e("./catch_filter")(m), E = e("./nodeback"), k = a.errorObj, S = a.tryCatch;
function A(e, t) {
if (null == e || e.constructor !== M) throw new h("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
if ("function" != typeof t) throw new h("expecting a function but got " + a.classString(t));
}
function M(e) {
e !== g && A(this, e), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, 
this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(e), 
this._promiseCreated(), this._fireEvent("promiseCreated", this);
}
function O(e) {
this.promise._resolveCallback(e);
}
function F(e) {
this.promise._rejectCallback(e, !1);
}
function P(e) {
var t = new M(g);
t._fulfillmentHandler0 = e, t._rejectionHandler0 = e, t._promise0 = e, t._receiver0 = e;
}
return M.prototype.toString = function() {
return "[object Promise]";
}, M.prototype.caught = M.prototype.catch = function(e) {
var t = arguments.length;
if (t > 1) {
var n = new Array(t - 1), r = 0, o;
for (o = 0; o < t - 1; ++o) {
var s = arguments[o];
if (!a.isObject(s)) return i("Catch statement predicate: expecting an object but got " + a.classString(s));
n[r++] = s;
}
return n.length = r, e = arguments[o], this.then(void 0, T(n, e, this));
}
return this.then(void 0, e);
}, M.prototype.reflect = function() {
return this._then(r, r, void 0, this, void 0);
}, M.prototype.then = function(e, t) {
if (x.warnings() && arguments.length > 0 && "function" != typeof e && "function" != typeof t) {
var n = ".then() only accepts functions but was passed: " + a.classString(e);
arguments.length > 1 && (n += ", " + a.classString(t)), this._warn(n);
}
return this._then(e, t, void 0, void 0, void 0);
}, M.prototype.done = function(e, t) {
var n;
this._then(e, t, void 0, void 0, void 0)._setIsFinal();
}, M.prototype.spread = function(e) {
return "function" != typeof e ? i("expecting a function but got " + a.classString(e)) : this.all()._then(e, void 0, void 0, v, void 0);
}, M.prototype.toJSON = function() {
var e = {
isFulfilled: !1,
isRejected: !1,
fulfillmentValue: void 0,
rejectionReason: void 0
};
return this.isFulfilled() ? (e.fulfillmentValue = this.value(), e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(), 
e.isRejected = !0), e;
}, M.prototype.all = function() {
return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), 
new _(this).promise();
}, M.prototype.error = function(e) {
return this.caught(a.originatesFromRejection, e);
}, M.getNewLibraryCopy = t.exports, M.is = function(e) {
return e instanceof M;
}, M.fromNode = M.fromCallback = function(e) {
var t = new M(g);
t._captureStackTrace();
var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs, r = S(e)(E(t, n));
return r === k && t._rejectCallback(r.e, !0), t._isFateSealed() || t._setAsyncGuaranteed(), 
t;
}, M.all = function(e) {
return new _(e).promise();
}, M.cast = function(e) {
var t = y(e);
return t instanceof M || ((t = new M(g))._captureStackTrace(), t._setFulfilled(), 
t._rejectionHandler0 = e), t;
}, M.resolve = M.fulfilled = M.cast, M.reject = M.rejected = function(e) {
var t = new M(g);
return t._captureStackTrace(), t._rejectCallback(e, !0), t;
}, M.setScheduler = function(e) {
if ("function" != typeof e) throw new h("expecting a function but got " + a.classString(e));
return f.setScheduler(e);
}, M.prototype._then = function(e, t, n, r, i) {
var o = void 0 !== i, s = o ? i : new M(g), c = this._target(), l = c._bitField;
o || (s._propagateFrom(this, 3), s._captureStackTrace(), void 0 === r && 0 != (2097152 & this._bitField) && (r = 0 != (50397184 & l) ? this._boundValue() : c === this ? void 0 : this._boundTo), 
this._fireEvent("promiseChained", this, s));
var p = u();
if (0 != (50397184 & l)) {
var h, v, m = c._settlePromiseCtx;
0 != (33554432 & l) ? (v = c._rejectionHandler0, h = e) : 0 != (16777216 & l) ? (v = c._fulfillmentHandler0, 
h = t, c._unsetRejectionIsUnhandled()) : (m = c._settlePromiseLateCancellationObserver, 
v = new d("late cancellation observer"), c._attachExtraTrace(v), h = t), f.invoke(m, c, {
handler: null === p ? h : "function" == typeof h && a.domainBind(p, h),
promise: s,
receiver: r,
value: v
});
} else c._addCallbacks(e, t, s, r, p);
return s;
}, M.prototype._length = function() {
return 65535 & this._bitField;
}, M.prototype._isFateSealed = function() {
return 0 != (117506048 & this._bitField);
}, M.prototype._isFollowing = function() {
return 67108864 == (67108864 & this._bitField);
}, M.prototype._setLength = function(e) {
this._bitField = -65536 & this._bitField | 65535 & e;
}, M.prototype._setFulfilled = function() {
this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this);
}, M.prototype._setRejected = function() {
this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this);
}, M.prototype._setFollowing = function() {
this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this);
}, M.prototype._setIsFinal = function() {
this._bitField = 4194304 | this._bitField;
}, M.prototype._isFinal = function() {
return (4194304 & this._bitField) > 0;
}, M.prototype._unsetCancelled = function() {
this._bitField = -65537 & this._bitField;
}, M.prototype._setCancelled = function() {
this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this);
}, M.prototype._setWillBeCancelled = function() {
this._bitField = 8388608 | this._bitField;
}, M.prototype._setAsyncGuaranteed = function() {
f.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField);
}, M.prototype._receiverAt = function(e) {
var t = 0 === e ? this._receiver0 : this[4 * e - 4 + 3];
if (t !== s) return void 0 === t && this._isBound() ? this._boundValue() : t;
}, M.prototype._promiseAt = function(e) {
return this[4 * e - 4 + 2];
}, M.prototype._fulfillmentHandlerAt = function(e) {
return this[4 * e - 4 + 0];
}, M.prototype._rejectionHandlerAt = function(e) {
return this[4 * e - 4 + 1];
}, M.prototype._boundValue = function() {}, M.prototype._migrateCallback0 = function(e) {
var t = e._bitField, n = e._fulfillmentHandler0, r = e._rejectionHandler0, i = e._promise0, o = e._receiverAt(0);
void 0 === o && (o = s), this._addCallbacks(n, r, i, o, null);
}, M.prototype._migrateCallbackAt = function(e, t) {
var n = e._fulfillmentHandlerAt(t), r = e._rejectionHandlerAt(t), i = e._promiseAt(t), o = e._receiverAt(t);
void 0 === o && (o = s), this._addCallbacks(n, r, i, o, null);
}, M.prototype._addCallbacks = function(e, t, n, r, i) {
var o = this._length();
if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = r, 
"function" == typeof e && (this._fulfillmentHandler0 = null === i ? e : a.domainBind(i, e)), 
"function" == typeof t && (this._rejectionHandler0 = null === i ? t : a.domainBind(i, t)); else {
var s = 4 * o - 4;
this[s + 2] = n, this[s + 3] = r, "function" == typeof e && (this[s + 0] = null === i ? e : a.domainBind(i, e)), 
"function" == typeof t && (this[s + 1] = null === i ? t : a.domainBind(i, t));
}
return this._setLength(o + 1), o;
}, M.prototype._proxy = function(e, t) {
this._addCallbacks(void 0, void 0, t, e, null);
}, M.prototype._resolveCallback = function(e, t) {
if (0 == (117506048 & this._bitField)) {
if (e === this) return this._rejectCallback(n(), !1);
var r = y(e, this);
if (!(r instanceof M)) return this._fulfill(e);
t && this._propagateFrom(r, 2);
var i = r._target();
if (i !== this) {
var o = i._bitField;
if (0 == (50397184 & o)) {
var s = this._length();
s > 0 && i._migrateCallback0(this);
for (var a = 1; a < s; ++a) i._migrateCallbackAt(this, a);
this._setFollowing(), this._setLength(0), this._setFollowee(i);
} else if (0 != (33554432 & o)) this._fulfill(i._value()); else if (0 != (16777216 & o)) this._reject(i._reason()); else {
var u = new d("late cancellation observer");
i._attachExtraTrace(u), this._reject(u);
}
} else this._reject(n());
}
}, M.prototype._rejectCallback = function(e, t, n) {
var r = a.ensureErrorObject(e), i = r === e;
if (!i && !n && x.warnings()) {
var o = "a promise was rejected with a non-error: " + a.classString(e);
this._warn(o, !0);
}
this._attachExtraTrace(r, !!t && i), this._reject(e);
}, M.prototype._resolveFromExecutor = function(e) {
if (e !== g) {
var t = this;
this._captureStackTrace(), this._pushContext();
var n = !0, r = this._execute(e, function(e) {
t._resolveCallback(e);
}, function(e) {
t._rejectCallback(e, n);
});
n = !1, this._popContext(), void 0 !== r && t._rejectCallback(r, !0);
}
}, M.prototype._settlePromiseFromHandler = function(e, t, n, r) {
var i = r._bitField;
if (0 == (65536 & i)) {
var o;
r._pushContext(), t === v ? n && "number" == typeof n.length ? o = S(e).apply(this._boundValue(), n) : (o = k).e = new h("cannot .spread() a non-array: " + a.classString(n)) : o = S(e).call(t, n);
var s = r._popContext();
0 == (65536 & (i = r._bitField)) && (o === m ? r._reject(n) : o === k ? r._rejectCallback(o.e, !1) : (x.checkForgottenReturns(o, s, "", r, this), 
r._resolveCallback(o)));
}
}, M.prototype._target = function() {
for (var e = this; e._isFollowing(); ) e = e._followee();
return e;
}, M.prototype._followee = function() {
return this._rejectionHandler0;
}, M.prototype._setFollowee = function(e) {
this._rejectionHandler0 = e;
}, M.prototype._settlePromise = function(e, t, n, i) {
var s = e instanceof M, a = this._bitField, u = 0 != (134217728 & a);
0 != (65536 & a) ? (s && e._invokeInternalOnCancel(), n instanceof C && n.isFinallyHandler() ? (n.cancelPromise = e, 
S(t).call(n, i) === k && e._reject(k.e)) : t === r ? e._fulfill(r.call(n)) : n instanceof o ? n._promiseCancelled(e) : s || e instanceof _ ? e._cancel() : n.cancel()) : "function" == typeof t ? s ? (u && e._setAsyncGuaranteed(), 
this._settlePromiseFromHandler(t, n, i, e)) : t.call(n, i, e) : n instanceof o ? n._isResolved() || (0 != (33554432 & a) ? n._promiseFulfilled(i, e) : n._promiseRejected(i, e)) : s && (u && e._setAsyncGuaranteed(), 
0 != (33554432 & a) ? e._fulfill(i) : e._reject(i));
}, M.prototype._settlePromiseLateCancellationObserver = function(e) {
var t = e.handler, n = e.promise, r = e.receiver, i = e.value;
"function" == typeof t ? n instanceof M ? this._settlePromiseFromHandler(t, r, i, n) : t.call(r, i, n) : n instanceof M && n._reject(i);
}, M.prototype._settlePromiseCtx = function(e) {
this._settlePromise(e.promise, e.handler, e.receiver, e.value);
}, M.prototype._settlePromise0 = function(e, t, n) {
var r = this._promise0, i = this._receiverAt(0);
this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, e, i, t);
}, M.prototype._clearCallbackDataAtIndex = function(e) {
var t = 4 * e - 4;
this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0;
}, M.prototype._fulfill = function(e) {
var t = this._bitField;
if (!((117506048 & t) >>> 16)) {
if (e === this) {
var r = n();
return this._attachExtraTrace(r), this._reject(r);
}
this._setFulfilled(), this._rejectionHandler0 = e, (65535 & t) > 0 && (0 != (134217728 & t) ? this._settlePromises() : f.settlePromises(this), 
this._dereferenceTrace());
}
}, M.prototype._reject = function(e) {
var t = this._bitField;
if (!((117506048 & t) >>> 16)) {
if (this._setRejected(), this._fulfillmentHandler0 = e, this._isFinal()) return f.fatalError(e, a.isNode);
(65535 & t) > 0 ? f.settlePromises(this) : this._ensurePossibleRejectionHandled();
}
}, M.prototype._fulfillPromises = function(e, t) {
for (var n = 1; n < e; n++) {
var r = this._fulfillmentHandlerAt(n), i = this._promiseAt(n), o = this._receiverAt(n);
this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, t);
}
}, M.prototype._rejectPromises = function(e, t) {
for (var n = 1; n < e; n++) {
var r = this._rejectionHandlerAt(n), i = this._promiseAt(n), o = this._receiverAt(n);
this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, t);
}
}, M.prototype._settlePromises = function() {
var e = this._bitField, t = 65535 & e;
if (t > 0) {
if (0 != (16842752 & e)) {
var n = this._fulfillmentHandler0;
this._settlePromise0(this._rejectionHandler0, n, e), this._rejectPromises(t, n);
} else {
var r = this._rejectionHandler0;
this._settlePromise0(this._fulfillmentHandler0, r, e), this._fulfillPromises(t, r);
}
this._setLength(0);
}
this._clearCancellationData();
}, M.prototype._settledValue = function() {
var e = this._bitField;
return 0 != (33554432 & e) ? this._rejectionHandler0 : 0 != (16777216 & e) ? this._fulfillmentHandler0 : void 0;
}, M.defer = M.pending = function() {
var e;
return x.deprecated("Promise.defer", "new Promise"), {
promise: new M(g),
resolve: O,
reject: F
};
}, a.notEnumerableProp(M, "_makeSelfResolutionError", n), e("./method")(M, g, y, i, x), 
e("./bind")(M, g, y, x), e("./cancel")(M, _, i, x), e("./direct_resolve")(M), e("./synchronous_inspection")(M), 
e("./join")(M, _, y, g, f, u), M.Promise = M, M.version = "3.5.4", e("./map.js")(M, _, i, y, g, x), 
e("./call_get.js")(M), e("./using.js")(M, i, y, w, g, x), e("./timers.js")(M, g, x), 
e("./generators.js")(M, i, g, y, o, x), e("./nodeify.js")(M), e("./promisify.js")(M, g), 
e("./props.js")(M, _, y, i), e("./race.js")(M, g, y, i), e("./reduce.js")(M, _, i, y, g, x), 
e("./settle.js")(M, _, x), e("./some.js")(M, _, i), e("./filter.js")(M, g), e("./each.js")(M, g), 
e("./any.js")(M), a.toFastProperties(M), a.toFastProperties(M.prototype), P({
a: 1
}), P({
b: 2
}), P({
c: 3
}), P(1), P(function() {}), P(void 0), P(!1), P(new M(g)), x.setBounds(l.firstLineError, a.lastLineError), 
M;
};
}, {
"./any.js": 1,
"./async": 2,
"./bind": 3,
"./call_get.js": 5,
"./cancel": 6,
"./catch_filter": 7,
"./context": 8,
"./debuggability": 9,
"./direct_resolve": 10,
"./each.js": 11,
"./errors": 12,
"./es5": 13,
"./filter.js": 14,
"./finally": 15,
"./generators.js": 16,
"./join": 17,
"./map.js": 18,
"./method": 19,
"./nodeback": 20,
"./nodeify.js": 21,
"./promise_array": 23,
"./promisify.js": 24,
"./props.js": 25,
"./race.js": 27,
"./reduce.js": 28,
"./settle.js": 30,
"./some.js": 31,
"./synchronous_inspection": 32,
"./thenables": 33,
"./timers.js": 34,
"./using.js": 35,
"./util": 36
} ],
23: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i, o) {
var s = e("./util"), a = s.isArray;
function u(e) {
switch (e) {
case -2:
return [];

case -3:
return {};

case -6:
return new Map();
}
}
function c(e) {
var r = this._promise = new t(n);
e instanceof t && r._propagateFrom(e, 3), r._setOnCancel(this), this._values = e, 
this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
}
return s.inherits(c, o), c.prototype.length = function() {
return this._length;
}, c.prototype.promise = function() {
return this._promise;
}, c.prototype._init = function e(n, o) {
var a = r(this._values, this._promise);
if (a instanceof t) {
var c = (a = a._target())._bitField;
if (this._values = a, 0 == (50397184 & c)) return this._promise._setAsyncGuaranteed(), 
a._then(e, this._reject, void 0, this, o);
if (0 == (33554432 & c)) return 0 != (16777216 & c) ? this._reject(a._reason()) : this._cancel();
a = a._value();
}
if (null !== (a = s.asArray(a))) 0 !== a.length ? this._iterate(a) : -5 === o ? this._resolveEmptyArray() : this._resolve(u(o)); else {
var l = i("expecting an array or an iterable object but got " + s.classString(a)).reason();
this._promise._rejectCallback(l, !1);
}
}, c.prototype._iterate = function(e) {
var n = this.getActualLength(e.length);
this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
for (var i = this._promise, o = !1, s = null, a = 0; a < n; ++a) {
var u = r(e[a], i);
s = u instanceof t ? (u = u._target())._bitField : null, o ? null !== s && u.suppressUnhandledRejections() : null !== s ? 0 == (50397184 & s) ? (u._proxy(this, a), 
this._values[a] = u) : o = 0 != (33554432 & s) ? this._promiseFulfilled(u._value(), a) : 0 != (16777216 & s) ? this._promiseRejected(u._reason(), a) : this._promiseCancelled(a) : o = this._promiseFulfilled(u, a);
}
o || i._setAsyncGuaranteed();
}, c.prototype._isResolved = function() {
return null === this._values;
}, c.prototype._resolve = function(e) {
this._values = null, this._promise._fulfill(e);
}, c.prototype._cancel = function() {
!this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel());
}, c.prototype._reject = function(e) {
this._values = null, this._promise._rejectCallback(e, !1);
}, c.prototype._promiseFulfilled = function(e, t) {
var n;
return this._values[t] = e, ++this._totalResolved >= this._length && (this._resolve(this._values), 
!0);
}, c.prototype._promiseCancelled = function() {
return this._cancel(), !0;
}, c.prototype._promiseRejected = function(e) {
return this._totalResolved++, this._reject(e), !0;
}, c.prototype._resultCancelled = function() {
if (!this._isResolved()) {
var e = this._values;
if (this._cancel(), e instanceof t) e.cancel(); else for (var n = 0; n < e.length; ++n) e[n] instanceof t && e[n].cancel();
}
}, c.prototype.shouldCopyValues = function() {
return !0;
}, c.prototype.getActualLength = function(e) {
return e;
}, c;
};
}, {
"./util": 36
} ],
24: [ function(e, t, n) {
"use strict";
t.exports = function(t, n) {
var r = {}, i = e("./util"), o = e("./nodeback"), s = i.withAppended, a = i.maybeWrapAsError, u = i.canEvaluate, c = e("./errors").TypeError, l = "Async", f = {
__isPromisified__: !0
}, p, h = new RegExp("^(?:" + [ "arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__" ].join("|") + ")$"), d = function(e) {
return i.isIdentifier(e) && "_" !== e.charAt(0) && "constructor" !== e;
};
function g(e) {
return !h.test(e);
}
function v(e) {
try {
return !0 === e.__isPromisified__;
} catch (e) {
return !1;
}
}
function m(e, t, n) {
var r = i.getDataPropertyOrDefault(e, t + n, f);
return !!r && v(r);
}
function y(e, t, n) {
for (var r = 0; r < e.length; r += 2) {
var i = e[r];
if (n.test(i)) for (var o = i.replace(n, ""), s = 0; s < e.length; s += 2) if (e[s] === o) throw new c("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", t));
}
}
function _(e, t, n, r) {
for (var o = i.inheritedDataKeys(e), s = [], a = 0; a < o.length; ++a) {
var u = o[a], c = e[u], l = r === d || d(u, c, e);
"function" != typeof c || v(c) || m(e, u, t) || !r(u, c, e, l) || s.push(u, c);
}
return y(s, t, n), s;
}
var b = function(e) {
return e.replace(/([$])/, "\\$");
}, w;
if (0) var x, j, C, T;
function E(e, u, c, l, f, p) {
var h = function() {
return this;
}(), d = e;
function g() {
var i = u;
u === r && (i = this);
var c = new t(n);
c._captureStackTrace();
var l = "string" == typeof d && this !== h ? this[d] : e, f = o(c, p);
try {
l.apply(i, s(arguments, f));
} catch (e) {
c._rejectCallback(a(e), !0, !0);
}
return c._isFateSealed() || c._setAsyncGuaranteed(), c;
}
return "string" == typeof d && (e = l), i.notEnumerableProp(g, "__isPromisified__", !0), 
g;
}
var k = u ? void 0 : E;
function S(e, t, n, o, s) {
for (var a = new RegExp(b(t) + "$"), u = _(e, t, a, n), c = 0, l = u.length; c < l; c += 2) {
var f = u[c], p = u[c + 1], h = f + t;
if (o === k) e[h] = k(f, r, f, p, t, s); else {
var d = o(p, function() {
return k(f, r, f, p, t, s);
});
i.notEnumerableProp(d, "__isPromisified__", !0), e[h] = d;
}
}
return i.toFastProperties(e), e;
}
function A(e, t, n) {
return k(e, t, void 0, e, null, n);
}
t.promisify = function(e, t) {
if ("function" != typeof e) throw new c("expecting a function but got " + i.classString(e));
if (v(e)) return e;
var n, o, s = A(e, void 0 === (t = Object(t)).context ? r : t.context, !!t.multiArgs);
return i.copyDescriptors(e, s, g), s;
}, t.promisifyAll = function(e, t) {
if ("function" != typeof e && "object" != typeof e) throw new c("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
var n = !!(t = Object(t)).multiArgs, r = t.suffix;
"string" != typeof r && (r = "Async");
var o = t.filter;
"function" != typeof o && (o = d);
var s = t.promisifier;
if ("function" != typeof s && (s = k), !i.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
for (var a = i.inheritedDataKeys(e), u = 0; u < a.length; ++u) {
var l = e[a[u]];
"constructor" !== a[u] && i.isClass(l) && (S(l.prototype, r, o, s, n), S(l, r, o, s, n));
}
return S(e, r, o, s, n);
};
};
}, {
"./errors": 12,
"./nodeback": 20,
"./util": 36
} ],
25: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i) {
var o = e("./util"), s = o.isObject, a = e("./es5"), u;
"function" == typeof Map && (u = Map);
var c = function() {
var e = 0, t = 0;
function n(n, r) {
this[e] = n, this[e + t] = r, e++;
}
return function r(i) {
t = i.size, e = 0;
var o = new Array(2 * i.size);
return i.forEach(n, o), o;
};
}(), l = function(e) {
for (var t = new u(), n = e.length / 2 | 0, r = 0; r < n; ++r) {
var i = e[n + r], o = e[r];
t.set(i, o);
}
return t;
};
function f(e) {
var t = !1, n;
if (void 0 !== u && e instanceof u) n = c(e), t = !0; else {
var r = a.keys(e), i = r.length;
n = new Array(2 * i);
for (var o = 0; o < i; ++o) {
var s = r[o];
n[o] = e[s], n[o + i] = s;
}
}
this.constructor$(n), this._isMap = t, this._init$(void 0, t ? -6 : -3);
}
function p(e) {
var n, o = r(e);
return s(o) ? (n = o instanceof t ? o._then(t.props, void 0, void 0, void 0, void 0) : new f(o).promise(), 
o instanceof t && n._propagateFrom(o, 2), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
}
o.inherits(f, n), f.prototype._init = function() {}, f.prototype._promiseFulfilled = function(e, t) {
var n;
if (this._values[t] = e, ++this._totalResolved >= this._length) {
var r;
if (this._isMap) r = l(this._values); else {
r = {};
for (var i = this.length(), o = 0, s = this.length(); o < s; ++o) r[this._values[o + i]] = this._values[o];
}
return this._resolve(r), !0;
}
return !1;
}, f.prototype.shouldCopyValues = function() {
return !1;
}, f.prototype.getActualLength = function(e) {
return e >> 1;
}, t.prototype.props = function() {
return p(this);
}, t.props = function(e) {
return p(e);
};
};
}, {
"./es5": 13,
"./util": 36
} ],
26: [ function(e, t, n) {
"use strict";
function r(e, t, n, r, i) {
for (var o = 0; o < i; ++o) n[o + r] = e[o + t], e[o + t] = void 0;
}
function i(e) {
this._capacity = e, this._length = 0, this._front = 0;
}
i.prototype._willBeOverCapacity = function(e) {
return this._capacity < e;
}, i.prototype._pushOne = function(e) {
var t = this.length(), n;
this._checkCapacity(t + 1), this[this._front + t & this._capacity - 1] = e, this._length = t + 1;
}, i.prototype.push = function(e, t, n) {
var r = this.length() + 3;
if (this._willBeOverCapacity(r)) return this._pushOne(e), this._pushOne(t), void this._pushOne(n);
var i = this._front + r - 3;
this._checkCapacity(r);
var o = this._capacity - 1;
this[i + 0 & o] = e, this[i + 1 & o] = t, this[i + 2 & o] = n, this._length = r;
}, i.prototype.shift = function() {
var e = this._front, t = this[e];
return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length--, 
t;
}, i.prototype.length = function() {
return this._length;
}, i.prototype._checkCapacity = function(e) {
this._capacity < e && this._resizeTo(this._capacity << 1);
}, i.prototype._resizeTo = function(e) {
var t = this._capacity, n, i, o;
this._capacity = e, r(this, 0, this, t, this._front + this._length & t - 1);
}, t.exports = i;
}, {} ],
27: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i) {
var o = e("./util"), s = function(e) {
return e.then(function(t) {
return a(t, e);
});
};
function a(e, a) {
var u = r(e);
if (u instanceof t) return s(u);
if (null === (e = o.asArray(e))) return i("expecting an array or an iterable object but got " + o.classString(e));
var c = new t(n);
void 0 !== a && c._propagateFrom(a, 3);
for (var l = c._fulfill, f = c._reject, p = 0, h = e.length; p < h; ++p) {
var d = e[p];
(void 0 !== d || p in e) && t.cast(d)._then(l, f, void 0, c, null);
}
return c;
}
t.race = function(e) {
return a(e, void 0);
}, t.prototype.race = function() {
return a(this, void 0);
};
};
}, {
"./util": 36
} ],
28: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i, o, s) {
var a = t._getDomain, u = e("./util"), c = u.tryCatch;
function l(e, n, r, i) {
this.constructor$(e);
var s = a();
this._fn = null === s ? n : u.domainBind(s, n), void 0 !== r && (r = t.resolve(r))._attachCancellationCallback(this), 
this._initialValue = r, this._currentCancellable = null, this._eachValues = i === o ? Array(this._length) : 0 === i ? null : void 0, 
this._promise._captureStackTrace(), this._init$(void 0, -5);
}
function f(e, t) {
this.isFulfilled() ? t._resolve(e) : t._reject(e);
}
function p(e, t, n, i) {
return "function" != typeof t ? r("expecting a function but got " + u.classString(t)) : new l(e, t, n, i).promise();
var o;
}
function h(e) {
this.accum = e, this.array._gotAccum(e);
var n = i(this.value, this.array._promise);
return n instanceof t ? (this.array._currentCancellable = n, n._then(d, void 0, void 0, this, void 0)) : d.call(this, n);
}
function d(e) {
var n = this.array, r = n._promise, i = c(n._fn), o;
r._pushContext(), (o = void 0 !== n._eachValues ? i.call(r._boundValue(), e, this.index, this.length) : i.call(r._boundValue(), this.accum, e, this.index, this.length)) instanceof t && (n._currentCancellable = o);
var a = r._popContext();
return s.checkForgottenReturns(o, a, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), 
o;
}
u.inherits(l, n), l.prototype._gotAccum = function(e) {
void 0 !== this._eachValues && null !== this._eachValues && e !== o && this._eachValues.push(e);
}, l.prototype._eachComplete = function(e) {
return null !== this._eachValues && this._eachValues.push(e), this._eachValues;
}, l.prototype._init = function() {}, l.prototype._resolveEmptyArray = function() {
this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue);
}, l.prototype.shouldCopyValues = function() {
return !1;
}, l.prototype._resolve = function(e) {
this._promise._resolveCallback(e), this._values = null;
}, l.prototype._resultCancelled = function(e) {
if (e === this._initialValue) return this._cancel();
this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof t && this._currentCancellable.cancel(), 
this._initialValue instanceof t && this._initialValue.cancel());
}, l.prototype._iterate = function(e) {
var n, r;
this._values = e;
var i = e.length;
if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = t.resolve(e[0]), 
r = 1), this._currentCancellable = n, !n.isRejected()) for (;r < i; ++r) {
var o = {
accum: null,
value: e[r],
index: r,
length: i,
array: this
};
n = n._then(h, void 0, void 0, o, void 0);
}
void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), 
n._then(f, f, void 0, n, this);
}, t.prototype.reduce = function(e, t) {
return p(this, e, t, null);
}, t.reduce = function(e, t, n, r) {
return p(e, t, n, r);
};
};
}, {
"./util": 36
} ],
29: [ function(e, t, n) {
"use strict";
var r = e("./util"), i, o = function() {
throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
}, s = r.getNativePromise();
if (r.isNode && "undefined" == typeof MutationObserver) {
var a = global.setImmediate, u = process.nextTick;
i = r.isRecentNode ? function(e) {
a.call(global, e);
} : function(e) {
u.call(process, e);
};
} else if ("function" == typeof s && "function" == typeof s.resolve) {
var c = s.resolve();
i = function(e) {
c.then(e);
};
} else i = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? void 0 !== setImmediate ? function(e) {
setImmediate(e);
} : "undefined" != typeof setTimeout ? function(e) {
setTimeout(e, 0);
} : o : function() {
var e = document.createElement("div"), t = {
attributes: !0
}, n = !1, r = document.createElement("div"), i;
new MutationObserver(function() {
e.classList.toggle("foo"), n = !1;
}).observe(r, t);
var o = function() {
n || (n = !0, r.classList.toggle("foo"));
};
return function n(r) {
var i = new MutationObserver(function() {
i.disconnect(), r();
});
i.observe(e, t), o();
};
}();
t.exports = i;
}, {
"./util": 36
} ],
30: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r) {
var i = t.PromiseInspection, o;
function s(e) {
this.constructor$(e);
}
e("./util").inherits(s, n), s.prototype._promiseResolved = function(e, t) {
var n;
return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), 
!0);
}, s.prototype._promiseFulfilled = function(e, t) {
var n = new i();
return n._bitField = 33554432, n._settledValueField = e, this._promiseResolved(t, n);
}, s.prototype._promiseRejected = function(e, t) {
var n = new i();
return n._bitField = 16777216, n._settledValueField = e, this._promiseResolved(t, n);
}, t.settle = function(e) {
return r.deprecated(".settle()", ".reflect()"), new s(e).promise();
}, t.prototype.settle = function() {
return t.settle(this);
};
};
}, {
"./util": 36
} ],
31: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r) {
var i = e("./util"), o = e("./errors").RangeError, s = e("./errors").AggregateError, a = i.isArray, u = {};
function c(e) {
this.constructor$(e), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
}
function l(e, t) {
if ((0 | t) !== t || t < 0) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
var n = new c(e), i = n.promise();
return n.setHowMany(t), n.init(), i;
}
i.inherits(c, n), c.prototype._init = function() {
if (this._initialized) if (0 !== this._howMany) {
this._init$(void 0, -5);
var e = a(this._values);
!this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
} else this._resolve([]);
}, c.prototype.init = function() {
this._initialized = !0, this._init();
}, c.prototype.setUnwrap = function() {
this._unwrap = !0;
}, c.prototype.howMany = function() {
return this._howMany;
}, c.prototype.setHowMany = function(e) {
this._howMany = e;
}, c.prototype._promiseFulfilled = function(e) {
return this._addFulfilled(e), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 
1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), 
!0);
}, c.prototype._promiseRejected = function(e) {
return this._addRejected(e), this._checkOutcome();
}, c.prototype._promiseCancelled = function() {
return this._values instanceof t || null == this._values ? this._cancel() : (this._addRejected(u), 
this._checkOutcome());
}, c.prototype._checkOutcome = function() {
if (this.howMany() > this._canPossiblyFulfill()) {
for (var e = new s(), t = this.length(); t < this._values.length; ++t) this._values[t] !== u && e.push(this._values[t]);
return e.length > 0 ? this._reject(e) : this._cancel(), !0;
}
return !1;
}, c.prototype._fulfilled = function() {
return this._totalResolved;
}, c.prototype._rejected = function() {
return this._values.length - this.length();
}, c.prototype._addRejected = function(e) {
this._values.push(e);
}, c.prototype._addFulfilled = function(e) {
this._values[this._totalResolved++] = e;
}, c.prototype._canPossiblyFulfill = function() {
return this.length() - this._rejected();
}, c.prototype._getRangeError = function(e) {
var t = "Input array must contain at least " + this._howMany + " items but contains only " + e + " items";
return new o(t);
}, c.prototype._resolveEmptyArray = function() {
this._reject(this._getRangeError(0));
}, t.some = function(e, t) {
return l(e, t);
}, t.prototype.some = function(e) {
return l(this, e);
}, t._SomePromiseArray = c;
};
}, {
"./errors": 12,
"./util": 36
} ],
32: [ function(e, t, n) {
"use strict";
t.exports = function(e) {
function t(e) {
void 0 !== e ? (e = e._target(), this._bitField = e._bitField, this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0) : (this._bitField = 0, 
this._settledValueField = void 0);
}
t.prototype._settledValue = function() {
return this._settledValueField;
};
var n = t.prototype.value = function() {
if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
return this._settledValue();
}, r = t.prototype.error = t.prototype.reason = function() {
if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
return this._settledValue();
}, i = t.prototype.isFulfilled = function() {
return 0 != (33554432 & this._bitField);
}, o = t.prototype.isRejected = function() {
return 0 != (16777216 & this._bitField);
}, s = t.prototype.isPending = function() {
return 0 == (50397184 & this._bitField);
}, a = t.prototype.isResolved = function() {
return 0 != (50331648 & this._bitField);
};
t.prototype.isCancelled = function() {
return 0 != (8454144 & this._bitField);
}, e.prototype.__isCancelled = function() {
return 65536 == (65536 & this._bitField);
}, e.prototype._isCancelled = function() {
return this._target().__isCancelled();
}, e.prototype.isCancelled = function() {
return 0 != (8454144 & this._target()._bitField);
}, e.prototype.isPending = function() {
return s.call(this._target());
}, e.prototype.isRejected = function() {
return o.call(this._target());
}, e.prototype.isFulfilled = function() {
return i.call(this._target());
}, e.prototype.isResolved = function() {
return a.call(this._target());
}, e.prototype.value = function() {
return n.call(this._target());
}, e.prototype.reason = function() {
var e = this._target();
return e._unsetRejectionIsUnhandled(), r.call(e);
}, e.prototype._value = function() {
return this._settledValue();
}, e.prototype._reason = function() {
return this._unsetRejectionIsUnhandled(), this._settledValue();
}, e.PromiseInspection = t;
};
}, {} ],
33: [ function(e, t, n) {
"use strict";
t.exports = function(t, n) {
var r = e("./util"), i = r.errorObj, o = r.isObject;
function s(e, r) {
if (o(e)) {
if (e instanceof t) return e;
var s = u(e);
if (s === i) {
r && r._pushContext();
var a = t.reject(s.e);
return r && r._popContext(), a;
}
if ("function" == typeof s) {
if (l(e)) {
var a = new t(n);
return e._then(a._fulfill, a._reject, void 0, a, null), a;
}
return f(e, s, r);
}
}
return e;
}
function a(e) {
return e.then;
}
function u(e) {
try {
return a(e);
} catch (e) {
return i.e = e, i;
}
}
var c = {}.hasOwnProperty;
function l(e) {
try {
return c.call(e, "_promise0");
} catch (e) {
return !1;
}
}
function f(e, o, s) {
var a = new t(n), u = a;
s && s._pushContext(), a._captureStackTrace(), s && s._popContext();
var c = !0, l = r.tryCatch(o).call(e, f, p);
function f(e) {
a && (a._resolveCallback(e), a = null);
}
function p(e) {
a && (a._rejectCallback(e, c, !0), a = null);
}
return c = !1, a && l === i && (a._rejectCallback(l.e, !0, !0), a = null), u;
}
return s;
};
}, {
"./util": 36
} ],
34: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r) {
var i = e("./util"), o = t.TimeoutError;
function s(e) {
this.handle = e;
}
s.prototype._resultCancelled = function() {
clearTimeout(this.handle);
};
var a = function(e) {
return u(+this).thenReturn(e);
}, u = t.delay = function(e, i) {
var o, u;
return void 0 !== i ? (o = t.resolve(i)._then(a, null, null, e, void 0), r.cancellation() && i instanceof t && o._setOnCancel(i)) : (o = new t(n), 
u = setTimeout(function() {
o._fulfill();
}, +e), r.cancellation() && o._setOnCancel(new s(u)), o._captureStackTrace()), o._setAsyncGuaranteed(), 
o;
};
t.prototype.delay = function(e) {
return u(e, this);
};
var c = function(e, t, n) {
var r;
r = "string" != typeof t ? t instanceof Error ? t : new o("operation timed out") : new o(t), 
i.markAsOriginatingFromRejection(r), e._attachExtraTrace(r), e._reject(r), null != n && n.cancel();
};
function l(e) {
return clearTimeout(this.handle), e;
}
function f(e) {
throw clearTimeout(this.handle), e;
}
t.prototype.timeout = function(e, t) {
var n, i;
e = +e;
var o = new s(setTimeout(function e() {
n.isPending() && c(n, t, i);
}, e));
return r.cancellation() ? (i = this.then(), (n = i._then(l, f, void 0, o, void 0))._setOnCancel(o)) : n = this._then(l, f, void 0, o, void 0), 
n;
};
};
}, {
"./util": 36
} ],
35: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, r, i, o, s) {
var a = e("./util"), u = e("./errors").TypeError, c = e("./util").inherits, l = a.errorObj, f = a.tryCatch, p = {};
function h(e) {
setTimeout(function() {
throw e;
}, 0);
}
function d(e) {
var t = r(e);
return t !== e && "function" == typeof e._isDisposable && "function" == typeof e._getDisposer && e._isDisposable() && t._setDisposable(e._getDisposer()), 
t;
}
function g(e, n) {
var i = 0, s = e.length, a = new t(o);
function u() {
if (i >= s) return a._fulfill();
var o = d(e[i++]);
if (o instanceof t && o._isDisposable()) {
try {
o = r(o._getDisposer().tryDispose(n), e.promise);
} catch (e) {
return h(e);
}
if (o instanceof t) return o._then(u, h, null, null, null);
}
u();
}
return u(), a;
}
function v(e, t, n) {
this._data = e, this._promise = t, this._context = n;
}
function m(e, t, n) {
this.constructor$(e, t, n);
}
function y(e) {
return v.isDisposer(e) ? (this.resources[this.index]._setDisposable(e), e.promise()) : e;
}
function _(e) {
this.length = e, this.promise = null, this[e - 1] = null;
}
v.prototype.data = function() {
return this._data;
}, v.prototype.promise = function() {
return this._promise;
}, v.prototype.resource = function() {
return this.promise().isFulfilled() ? this.promise().value() : p;
}, v.prototype.tryDispose = function(e) {
var t = this.resource(), n = this._context;
void 0 !== n && n._pushContext();
var r = t !== p ? this.doDispose(t, e) : null;
return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, 
r;
}, v.isDisposer = function(e) {
return null != e && "function" == typeof e.resource && "function" == typeof e.tryDispose;
}, c(m, v), m.prototype.doDispose = function(e, t) {
var n;
return this.data().call(e, e, t);
}, _.prototype._resultCancelled = function() {
for (var e = this.length, n = 0; n < e; ++n) {
var r = this[n];
r instanceof t && r.cancel();
}
}, t.using = function() {
var e = arguments.length;
if (e < 2) return n("you must pass at least 2 arguments to Promise.using");
var i = arguments[e - 1], o;
if ("function" != typeof i) return n("expecting a function but got " + a.classString(i));
var u = !0;
2 === e && Array.isArray(arguments[0]) ? (e = (o = arguments[0]).length, u = !1) : (o = arguments, 
e--);
for (var c = new _(e), p = 0; p < e; ++p) {
var h = o[p];
if (v.isDisposer(h)) {
var d = h;
(h = h.promise())._setDisposable(d);
} else {
var m = r(h);
m instanceof t && (h = m._then(y, null, null, {
resources: c,
index: p
}, void 0));
}
c[p] = h;
}
for (var b = new Array(c.length), p = 0; p < b.length; ++p) b[p] = t.resolve(c[p]).reflect();
var w = t.all(b).then(function(e) {
for (var t = 0; t < e.length; ++t) {
var n = e[t];
if (n.isRejected()) return l.e = n.error(), l;
if (!n.isFulfilled()) return void w.cancel();
e[t] = n.value();
}
x._pushContext(), i = f(i);
var r = u ? i.apply(void 0, e) : i(e), o = x._popContext();
return s.checkForgottenReturns(r, o, "Promise.using", x), r;
}), x = w.lastly(function() {
var e = new t.PromiseInspection(w);
return g(c, e);
});
return c.promise = x, x._setOnCancel(c), x;
}, t.prototype._setDisposable = function(e) {
this._bitField = 131072 | this._bitField, this._disposer = e;
}, t.prototype._isDisposable = function() {
return (131072 & this._bitField) > 0;
}, t.prototype._getDisposer = function() {
return this._disposer;
}, t.prototype._unsetDisposable = function() {
this._bitField = -131073 & this._bitField, this._disposer = void 0;
}, t.prototype.disposer = function(e) {
if ("function" == typeof e) return new m(e, this, i());
throw new u();
};
};
}, {
"./errors": 12,
"./util": 36
} ],
36: [ function(_dereq_, module, exports) {
"use strict";
var es5 = _dereq_("./es5"), canEvaluate = "undefined" == typeof navigator, errorObj = {
e: {}
}, tryCatchTarget, globalObject = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== global ? global : void 0 !== this ? this : null;
function tryCatcher() {
try {
var e = tryCatchTarget;
return tryCatchTarget = null, e.apply(this, arguments);
} catch (e) {
return errorObj.e = e, errorObj;
}
}
function tryCatch(e) {
return tryCatchTarget = e, tryCatcher;
}
var inherits = function(e, t) {
var n = {}.hasOwnProperty;
function r() {
for (var r in this.constructor = e, this.constructor$ = t, t.prototype) n.call(t.prototype, r) && "$" !== r.charAt(r.length - 1) && (this[r + "$"] = t.prototype[r]);
}
return r.prototype = t.prototype, e.prototype = new r(), e.prototype;
};
function isPrimitive(e) {
return null == e || !0 === e || !1 === e || "string" == typeof e || "number" == typeof e;
}
function isObject(e) {
return "function" == typeof e || "object" == typeof e && null !== e;
}
function maybeWrapAsError(e) {
return isPrimitive(e) ? new Error(safeToString(e)) : e;
}
function withAppended(e, t) {
var n = e.length, r = new Array(n + 1), i;
for (i = 0; i < n; ++i) r[i] = e[i];
return r[i] = t, r;
}
function getDataPropertyOrDefault(e, t, n) {
if (!es5.isES5) return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
var r = Object.getOwnPropertyDescriptor(e, t);
return null != r ? null == r.get && null == r.set ? r.value : n : void 0;
}
function notEnumerableProp(e, t, n) {
if (isPrimitive(e)) return e;
var r = {
value: n,
configurable: !0,
enumerable: !1,
writable: !0
};
return es5.defineProperty(e, t, r), e;
}
function thrower(e) {
throw e;
}
var inheritedDataKeys = function() {
var e = [ Array.prototype, Object.prototype, Function.prototype ], t = function(t) {
for (var n = 0; n < e.length; ++n) if (e[n] === t) return !0;
return !1;
};
if (es5.isES5) {
var n = Object.getOwnPropertyNames;
return function(e) {
for (var r = [], i = Object.create(null); null != e && !t(e); ) {
var o;
try {
o = n(e);
} catch (e) {
return r;
}
for (var s = 0; s < o.length; ++s) {
var a = o[s];
if (!i[a]) {
i[a] = !0;
var u = Object.getOwnPropertyDescriptor(e, a);
null != u && null == u.get && null == u.set && r.push(a);
}
}
e = es5.getPrototypeOf(e);
}
return r;
};
}
var r = {}.hasOwnProperty;
return function(n) {
if (t(n)) return [];
var i = [];
e: for (var o in n) if (r.call(n, o)) i.push(o); else {
for (var s = 0; s < e.length; ++s) if (r.call(e[s], o)) continue e;
i.push(o);
}
return i;
};
}(), thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(e) {
try {
if ("function" == typeof e) {
var t = es5.names(e.prototype), n = es5.isES5 && t.length > 1, r = t.length > 0 && !(1 === t.length && "constructor" === t[0]), i = thisAssignmentPattern.test(e + "") && es5.names(e).length > 0;
if (n || r || i) return !0;
}
return !1;
} catch (e) {
return !1;
}
}
function toFastProperties(obj) {
function FakeConstructor() {}
FakeConstructor.prototype = obj;
var receiver = new FakeConstructor();
function ic() {
return typeof receiver.foo;
}
return ic(), ic(), obj;
eval(obj);
}
var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(e) {
return rident.test(e);
}
function filledRange(e, t, n) {
for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t + i + n;
return r;
}
function safeToString(e) {
try {
return e + "";
} catch (e) {
return "[no string representation]";
}
}
function isError(e) {
return e instanceof Error || null !== e && "object" == typeof e && "string" == typeof e.message && "string" == typeof e.name;
}
function markAsOriginatingFromRejection(e) {
try {
notEnumerableProp(e, "isOperational", !0);
} catch (e) {}
}
function originatesFromRejection(e) {
return null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === e.isOperational);
}
function canAttachTrace(e) {
return isError(e) && es5.propertyIsWritable(e, "stack");
}
var ensureErrorObject = "stack" in new Error() ? function(e) {
return canAttachTrace(e) ? e : new Error(safeToString(e));
} : function(e) {
if (canAttachTrace(e)) return e;
try {
throw new Error(safeToString(e));
} catch (e) {
return e;
}
};
function classString(e) {
return {}.toString.call(e);
}
function copyDescriptors(e, t, n) {
for (var r = es5.names(e), i = 0; i < r.length; ++i) {
var o = r[i];
if (n(o)) try {
es5.defineProperty(t, o, es5.getDescriptor(e, o));
} catch (e) {}
}
}
var asArray = function(e) {
return es5.isArray(e) ? e : null;
};
if ("undefined" != typeof Symbol && Symbol.iterator) {
var ArrayFrom = "function" == typeof Array.from ? function(e) {
return Array.from(e);
} : function(e) {
for (var t = [], n = e[Symbol.iterator](), r; !(r = n.next()).done; ) t.push(r.value);
return t;
};
asArray = function(e) {
return es5.isArray(e) ? e : null != e && "function" == typeof e[Symbol.iterator] ? ArrayFrom(e) : null;
};
}
var isNode = void 0 !== process && "[object process]" === classString(process).toLowerCase(), hasEnvVariables = void 0 !== process && void 0 !== process.env;
function env(e) {
return hasEnvVariables ? process.env[e] : void 0;
}
function getNativePromise() {
if ("function" == typeof Promise) try {
var e = new Promise(function() {});
if ("[object Promise]" === {}.toString.call(e)) return Promise;
} catch (e) {}
}
function domainBind(e, t) {
return e.bind(t);
}
var ret = {
isClass,
isIdentifier,
inheritedDataKeys,
getDataPropertyOrDefault,
thrower,
isArray: es5.isArray,
asArray,
notEnumerableProp,
isPrimitive,
isObject,
isError,
canEvaluate,
errorObj,
tryCatch,
inherits,
withAppended,
maybeWrapAsError,
toFastProperties,
filledRange,
toString: safeToString,
canAttachTrace,
ensureErrorObject,
originatesFromRejection,
markAsOriginatingFromRejection,
classString,
copyDescriptors,
hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
isNode,
hasEnvVariables,
env,
global: globalObject,
getNativePromise,
domainBind
}, version;
ret.isRecentNode = ret.isNode && (process.versions && process.versions.node ? version = process.versions.node.split(".").map(Number) : process.version && (version = process.version.split(".").map(Number)), 
0 === version[0] && version[1] > 10 || version[0] > 0), ret.isNode && ret.toFastProperties(process);
try {
throw new Error();
} catch (e) {
ret.lastLineError = e;
}
module.exports = ret;
}, {
"./es5": 13
} ]
}, {}, [ 4 ])(4);
}), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise);
}).call(this, __webpack_require__(7), __webpack_require__(0), __webpack_require__(29).setImmediate);
}, function(e, t, n) {
"use strict";
(function(t, r, i) {
let o = {
metadata: {
include: [ "*://*.sfacg.com/*", "*://book.sfacg.com/signin/*" ],
match: [],
exclude: [ "*://*.sfacg.com/ajax*" ],
grant: [ "GM_xmlhttpRequest", "GM_getValue", "GM_setValue" ]
},
test(r = t._url_obj) {
let i;
return !!(i = n(12).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(8);
await i.delay(1e3);
const a = n(13).create(o.file);
let u = !1;
if (e.host.match(/book\.sfacg\.com/) && e.path.match(/signin/)) {
let e = r(".calendar-sign .sign-btn");
u = !0, e.is(".signed") ? console.log("已經簽到過", e) : e.length ? (e[0].click(), e.find("a")[0].click()) : u = !1, 
u && a.updateTimestamp(), console.log({
hasSigned: unsafeWindow.hasSigned,
nid: unsafeWindow.nid
}, a.IDKEY);
} else if (e.host.match(/\.sfacg\.com/)) {
let e = r(".user-bar .top-link, #UserInfo").find('a[href*="/u/"]'), t = a.getValue("username"), n = null, i = a.chkTimestamp(3), o;
e.length && e.prop("href").match(/sfacg.com\/u\/(\w+)/i) && (o = (RegExp.$1 || "").toString().trim()), 
o && o != t ? (n = !0, console.info("[使用者已變更]", [ t, o ]), a.setValue("username", o)) : i > 0 ? n = !0 : (n = !1, 
console.info("[距離上次簽到]", Math.abs(i) + "s")), n && await s().then(function(e) {}).tap(function() {
console.log("done"), a.updateTimestamp();
});
}
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let i = r(n);
return i = i.add([].join());
}
};
function s(e = {}, t) {
const r = n(14).default;
let o = {
method: "GET",
headers: {
"Access-Control-Allow-Origin": "*"
},
dataType: "json"
};
return r.ajax("http://book.sfacg.com/ajax/ashx/Common.ashx?op=signinNew", Object.assign({}, o, {
data: Object.assign({
_: Date.now(),
nid: 0
}, e)
})).then(function(e) {
return e ? (200 == e.response.status ? console.log("[簽到成功]", e.response) : 400 == e.response.status ? console.log("[簽到無效]", e.response) : e.response.msg ? i.error("[UNKNOW]", e.response.msg, e.response) : i.error("[UNKNOW]", e.response), 
e.response) : Promise.reject(e);
});
}
e.exports = o;
}).call(this, n(0), n(1).default, n(3));
}, function(e, t, n) {
"use strict";
(function(e, r, i) {
Object.defineProperty(t, "__esModule", {
value: !0
}), t.main_list = t.main = t.get_list_script = t.requireScript = t.init = t.url = t.run = t.greasemonkey = void 0;
const o = n(17), s = n(3);
t.greasemonkey = s.default;
const a = n(18);
function u(t, n, i, o) {
let s = async () => {
try {
o ? await o(t, n, e, window, i, window.location.href) : await l(t, n, e, window, i, window.location.href);
const r = p(t, "index");
await d(t, r, r.list), console.info(t, "index.current", r.current);
} catch (e) {
console.error(t, e.message), console.error(e.stack), console.trace(e.message);
} finally {
console.info(t, [ e._url, e._url_obj, e.unsafeWindow ]);
}
try {
await a.registerGlobalMenu(t, n);
} catch (e) {
console.error(t, e.message, e.stack);
}
};
r(() => {
s();
});
}
function c(t, n = e, r, i) {
if (i || !n._url || n._url != t) {
const e = n._url;
return n._url_old = e, n._url = t.toString(), n._url_obj = o.parse_url2(n._url), 
"function" == typeof r && r(n._url, n, e), n;
}
}
function l(e, t, n, r, i, o) {
f(o = o || r.location.href, t), f(o, n), n.userScript = t;
}
function f(e, t) {
let n;
return c(e, t, function(e, t, n) {
t._url_obj.source = t._url_obj._source = e, t._url_obj_ = Object.assign({}, t._url_obj);
}, !0);
}
function p(e, t) {
return n(23)(`./${e}/${t}`);
}
function h(e, t, n) {
let r;
return t.list_script.reduce(function(t, r) {
let i = p(e, r), o = r;
return i.name && i.name != o && (o = `${i.name} - ${o}`), i.script_method && i.script_method.clearly && i.test(n) && t.push({
name: r,
name_id: o,
lib: i
}), t;
}, []).concat(t.current);
}
async function d(t, n, r, i = {}) {
let o;
console.time(n.name), console.group(n.name);
for (let i of r) {
const r = p(t, i);
r.file = i;
let a = i;
if (r.name && r.name != a && (a = `${r.name} - ${a}`), a = `[${a}]`, r.name = r.name || i, 
r.name_id = a || r.name_id || r.name, o && !r.script) continue;
if (r.disable && !0 !== r.disable) {
console.info(n.id, a, `disable = ${r.disable}, skip this`);
continue;
}
if (r.disable) {
console.warn(n.id, a, "disable, skip this");
continue;
}
let u = !0, c, l;
console.time(i), console.group(i), c = await r.test(e._url_obj), s.default.info(n.id, a, "test", c), 
o && 2 !== c ? s.default.info(n.id, a, "break:test", c) : (c && (1 == (l = await r.main(e._url_obj)) || void 0 === l ? (l = !0, 
s.default.info(n.id, a, "matched", l, u)) : s.default.debug(n.id, a, "main", l), 
l && (u = !1, c && !0 !== c && (u = !0), s.default.debug(n.id, a, "chk", l, u, c))), 
u && !c || (s.default.debug(n.id, a, "current:push", l, u, c), n.current.push({
name: i,
name_id: a,
lib: r
}))), console.groupEnd(i), console.timeEnd(i), o || u || (s.default.debug(n.id, a, "break", l, u, c), 
o = !0);
}
console.groupEnd(n.name), console.timeEnd(n.name);
}
async function g(t, n, r = {}) {
const i = t.id;
let o;
for (let r of n) {
const n = p(i, r);
n.file = r;
let o = r;
n.name && n.name != o && (o = `${n.name} - ${o}`), o = `[${o}]`, n.name = n.name || r, 
n.name_id = o || n.name_id || n.name;
let a = !0, u, c;
if (u = await n.test(e._url_obj), s.default.info(t.id, o, "test", u), u) return c = await n.main(e._url_obj), 
s.default.debug(t.id, o, "main", c), n;
}
}
function v(e, t) {
console["groupCollapsed" in console ? "groupCollapsed" : "group"](e);
try {
console.info(e, t), null === t ? (console.info("$", r, r && r.fn && r.fn.jquery), 
console.info("jQuery", i, i && i.fn && i.fn.jquery)) : (console.info(`${e}.$`, t.$, t.$ && t.$.fn && t.$.fn.jquery), 
console.info(`${e}.jQuery`, t.jQuery, t.jQuery && t.jQuery.fn && t.jQuery.fn.jquery));
} catch (t) {
console.error(`${e}`, t.toString());
}
console.groupEnd(e);
}
t.run = u, t.url = c, t.init = l, t.requireScript = p, t.get_list_script = h, t.main = d, 
t.main_list = g;
}).call(this, n(0), n(1).default, n(1).default);
}, function(e, t, n) {
"use strict";
function r(e, t) {
if (!(t = t || document.getElementsByTagName("head")[0])) return;
let n = document.createElement("style");
n.type = "text/css";
try {
n.innerHTML = e;
} catch (t) {
n.innerText = e;
}
return t.appendChild(n), n;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.GM_addStyle = void 0, t.GM_addStyle = r, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.matchChrome = t.auto = t.option = t.match = void 0;
const r = n(24), i = r.Minimatch;
function o(e, t, n = {}) {
n = s(n);
let i = !1;
for (let o of t) if (o = o.replace(/\*/g, "**"), i = r(e, o, n)) break;
return i;
}
function s(e) {
return Object.assign({}, {
nocase: !0,
dot: !0
}, e);
}
function a(e, t, n = {}) {
n = s(n);
let r = !1;
return !(t.metadata.nomatch && t.metadata.nomatch.length && o(e, t.metadata.nomatch, n)) && !(t.metadata.exclude && t.metadata.exclude.length && o(e, t.metadata.exclude, n)) && (t.metadata.include && t.metadata.include.length && (r = o(e, t.metadata.include, n)), 
!r && t.metadata.match && t.metadata.match.length && (r = !!u(e, t.metadata.match)), 
r);
}
function u(e, t, n) {
if (Array.isArray(t)) {
for (let r of t) {
let t = u(e, r, n);
if (t) return t;
}
return null;
}
let r = t.match(/^((?:[^\/]+):\/\/)?([^\/]+)?(\/.*)?$/);
if (r) {
let t = new RegExp("^(?:(https?|file|ftp):\\/\\/)?(" + (c(r[2]) ? "" : r[2]).replace(/\*/g, "[^\\/]+").replace(/\./g, "\\.") + ")(" + (c(r[3]) ? "/" : r[3]).replace(/^(\/)$/, "$1?").replace(/^(\/)(\*)$/, "(?:$1?|$1$2)").replace(/\*/g, ".*") + ")" + (n ? "(?:\\?.*)?" : "") + "(?:#.*)?$");
if (r = t.exec(e)) return {
scheme: r[1],
host: r[2],
path: r[3],
source: e,
regexp: t
};
}
return null;
}
function c(e) {
return void 0 === e;
}
t.match = o, t.option = s, t.auto = a, t.matchChrome = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.hashKey = t.checkDate = t.SiteID = t.create = t.hashSum = t.GMApi = void 0;
const r = n(31);
t.hashSum = r;
const i = n(32);
function o(e, t) {
return SiteID.create(e, t);
}
Object.defineProperty(t, "GMApi", {
enumerable: !0,
get: function() {
return i.GMApi;
}
}), t.create = o;
class SiteID {
constructor(e, t) {
this._ = Math.random() * Date.now(), this.options = {
chkSec: 600
}, this.options = Object.assign(this.options, t), this.IDKEY = r(e);
}
static create(e, t) {
return new this(e, t);
}
checkDate(e, t = this.options.chkSec) {
return s(e, t);
}
getTimestamp() {
return this.getValue("timestamp", 0);
}
updateTimestamp(e = Date.now()) {
return this.setValue("timestamp", e);
}
chkTimestamp(e = 0) {
let t = this.getTimestamp(), n = this.checkDate(t);
return e > 0 && e >= Math.abs(n) ? Math.max(1, n) : n;
}
hashKey(e) {
return a(e, this.IDKEY);
}
getValue(e, t) {
return i.GMApi.getValue(this.hashKey(e), t);
}
setValue(e, t) {
return i.GMApi.setValue(this.hashKey(e), t), this;
}
}
function s(e, t = 600) {
"number" == typeof e && (e = new Date(e));
let n = e.valueOf(), r = (Date.now() - n) / 1e3;
if (0 == r) return 1;
if (r > 0 && r >= t) return r;
let i = new Date();
return e.getDay() != i.getDay() ? (console.log(e, i), console.log(e.getDay(), i.getDay()), 
1) : 0 - Math.abs(r);
}
function a(e, t) {
return t ? t.toString() + e : e;
}
t.SiteID = SiteID, t.default = SiteID, t.checkDate = s, t.hashKey = a;
}, function(e, t, n) {
"use strict";
const r = n(34);
e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.metadata = t.grant = t.desc = void 0, t.desc = "自動簽到 ( 巴哈姆特 ... and other )", 
t.grant = [ "GM_registerMenuCommand", "GM_xmlhttpRequest", "GM_getValue" ], t.metadata = "// ==UserScript==\n// @name\t\t<%= index.name %>\n// @name:en\t\t<%= index.name_en %>\n// @name:zh\t\t<%= index.name %>\n// @namespace\tbluelovers\n// @author\t\tbluelovers\n//\n// @description\t\t<%= index.desc %>\n// @description:en\t<%= index.desc_en %>\n// @description:zh\t<%= index.desc %>\n//\n// @version\t\t<%= pkg.version %>\n//\n// @grant\t\t<%= index.grant %>\n// g_r_a_n_tnone\n//\n// @icon\t\t<%= index.icon %>\n//\n// @noframes\n// @encoding\tutf-8\n//\n// @homepageURL\thttps://github.com/bluelovers/gm-user-scripts\n// @supportURL\thttps://github.com/bluelovers/gm-user-scripts/issues\n// @downloadURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n// @updateURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n//\n// @include\t\t<%= index.include %>\n//\n// @match\t\t<%= index.match %>\n//\n// @exclude\t\t<%= index.exclude %>\n//\n// ==/UserScript==\n", 
t.default = t.metadata;
}, function(e, t, n) {
var r, i;
!function(t, n) {
"use strict";
"object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
if (!e.document) throw new Error("jQuery requires a window with a document");
return n(e);
} : n(t);
}("undefined" != typeof window ? window : this, function(n, o) {
"use strict";
var s = [], a = n.document, u = Object.getPrototypeOf, c = s.slice, l = s.concat, f = s.push, p = s.indexOf, h = {}, d = h.toString, g = h.hasOwnProperty, v = g.toString, m = v.call(Object), y = {}, _ = function(e) {
return "function" == typeof e && "number" != typeof e.nodeType;
}, b = function(e) {
return null != e && e === e.window;
}, w = {
type: !0,
src: !0,
nonce: !0,
noModule: !0
};
function x(e, t, n) {
var r, i, o = (n = n || a).createElement("script");
if (o.text = e, t) for (r in w) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
n.head.appendChild(o).parentNode.removeChild(o);
}
function j(e) {
return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[d.call(e)] || "object" : typeof e;
}
var C = "3.4.1", T = function(e, t) {
return new T.fn.init(e, t);
}, E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function k(e) {
var t = !!e && "length" in e && e.length, n = j(e);
return !_(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
}
T.fn = T.prototype = {
jquery: C,
constructor: T,
length: 0,
toArray: function() {
return c.call(this);
},
get: function(e) {
return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e];
},
pushStack: function(e) {
var t = T.merge(this.constructor(), e);
return t.prevObject = this, t;
},
each: function(e) {
return T.each(this, e);
},
map: function(e) {
return this.pushStack(T.map(this, function(t, n) {
return e.call(t, n, t);
}));
},
slice: function() {
return this.pushStack(c.apply(this, arguments));
},
first: function() {
return this.eq(0);
},
last: function() {
return this.eq(-1);
},
eq: function(e) {
var t = this.length, n = +e + (e < 0 ? t : 0);
return this.pushStack(0 <= n && n < t ? [ this[n] ] : []);
},
end: function() {
return this.prevObject || this.constructor();
},
push: f,
sort: s.sort,
splice: s.splice
}, T.extend = T.fn.extend = function() {
var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, c = !1;
for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || _(s) || (s = {}), 
a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) r = e[t], 
"__proto__" !== t && s !== r && (c && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t], 
o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}, i = !1, s[t] = T.extend(c, o, r)) : void 0 !== r && (s[t] = r));
return s;
}, T.extend({
expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
isReady: !0,
error: function(e) {
throw new Error(e);
},
noop: function() {},
isPlainObject: function(e) {
var t, n;
return !(!e || "[object Object]" !== d.call(e) || (t = u(e)) && ("function" != typeof (n = g.call(t, "constructor") && t.constructor) || v.call(n) !== m));
},
isEmptyObject: function(e) {
var t;
for (t in e) return !1;
return !0;
},
globalEval: function(e, t) {
x(e, {
nonce: t && t.nonce
});
},
each: function(e, t) {
var n, r = 0;
if (k(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
return e;
},
trim: function(e) {
return null == e ? "" : (e + "").replace(E, "");
},
makeArray: function(e, t) {
var n = t || [];
return null != e && (k(Object(e)) ? T.merge(n, "string" == typeof e ? [ e ] : e) : f.call(n, e)), 
n;
},
inArray: function(e, t, n) {
return null == t ? -1 : p.call(t, e, n);
},
merge: function(e, t) {
for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
return e.length = i, e;
},
grep: function(e, t, n) {
for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
return r;
},
map: function(e, t, n) {
var r, i, o = 0, s = [];
if (k(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
return l.apply([], s);
},
guid: 1,
support: y
}), "function" == typeof Symbol && (T.fn[Symbol.iterator] = s[Symbol.iterator]), 
T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
h["[object " + t + "]"] = t.toLowerCase();
});
var S = function(e) {
var t, n, r, i, o, s, a, u, c, l, f, p, h, d, g, v, m, y, _, b = "sizzle" + 1 * new Date(), w = e.document, x = 0, j = 0, C = ue(), T = ue(), E = ue(), k = ue(), S = function(e, t) {
return e === t && (f = !0), 0;
}, A = {}.hasOwnProperty, M = [], O = M.pop, F = M.push, P = M.push, R = M.slice, D = function(e, t) {
for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
return -1;
}, N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", $ = "\\[" + L + "*(" + q + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + L + "*\\]", G = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)", I = new RegExp(L + "+", "g"), H = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), V = new RegExp("^" + L + "*," + L + "*"), B = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp(L + "|>"), W = new RegExp(G), Q = new RegExp("^" + q + "$"), z = {
ID: new RegExp("^#(" + q + ")"),
CLASS: new RegExp("^\\.(" + q + ")"),
TAG: new RegExp("^(" + q + "|[*])"),
ATTR: new RegExp("^" + $),
PSEUDO: new RegExp("^" + G),
CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
bool: new RegExp("^(?:" + N + ")$", "i"),
needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
}, X = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ne = function(e, t, n) {
var r = "0x" + t - 65536;
return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
}, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
}, oe = function() {
p();
}, se = be(function(e) {
return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
}, {
dir: "parentNode",
next: "legend"
});
try {
P.apply(M = R.call(w.childNodes), w.childNodes), M[w.childNodes.length].nodeType;
} catch (t) {
P = {
apply: M.length ? function(e, t) {
F.apply(e, R.call(t));
} : function(e, t) {
for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
e.length = n - 1;
}
};
}
function ae(e, t, r, i) {
var o, a, c, l, f, d, m, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
if (r = r || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;
if (!i && ((t ? t.ownerDocument || t : w) !== h && p(t), t = t || h, g)) {
if (11 !== x && (f = Z.exec(e))) if (o = f[1]) {
if (9 === x) {
if (!(c = t.getElementById(o))) return r;
if (c.id === o) return r.push(c), r;
} else if (y && (c = y.getElementById(o)) && _(t, c) && c.id === o) return r.push(c), 
r;
} else {
if (f[2]) return P.apply(r, t.getElementsByTagName(e)), r;
if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), 
r;
}
if (n.qsa && !k[e + " "] && (!v || !v.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
if (m = e, y = t, 1 === x && U.test(e)) {
for ((l = t.getAttribute("id")) ? l = l.replace(re, ie) : t.setAttribute("id", l = b), 
a = (d = s(e)).length; a--; ) d[a] = "#" + l + " " + _e(d[a]);
m = d.join(","), y = ee.test(e) && me(t.parentNode) || t;
}
try {
return P.apply(r, y.querySelectorAll(m)), r;
} catch (t) {
k(e, !0);
} finally {
l === b && t.removeAttribute("id");
}
}
}
return u(e.replace(H, "$1"), t, r, i);
}
function ue() {
var e = [];
return function t(n, i) {
return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
};
}
function ce(e) {
return e[b] = !0, e;
}
function le(e) {
var t = h.createElement("fieldset");
try {
return !!e(t);
} catch (e) {
return !1;
} finally {
t.parentNode && t.parentNode.removeChild(t), t = null;
}
}
function fe(e, t) {
for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
}
function pe(e, t) {
var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
if (r) return r;
if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
return e ? 1 : -1;
}
function he(e) {
return function(t) {
return "input" === t.nodeName.toLowerCase() && t.type === e;
};
}
function de(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return ("input" === n || "button" === n) && t.type === e;
};
}
function ge(e) {
return function(t) {
return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
};
}
function ve(e) {
return ce(function(t) {
return t = +t, ce(function(n, r) {
for (var i, o = e([], n.length, t), s = o.length; s--; ) n[i = o[s]] && (n[i] = !(r[i] = n[i]));
});
});
}
function me(e) {
return e && void 0 !== e.getElementsByTagName && e;
}
for (t in n = ae.support = {}, o = ae.isXML = function(e) {
var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
return !X.test(t || n && n.nodeName || "HTML");
}, p = ae.setDocument = function(e) {
var t, i, s = e ? e.ownerDocument || e : w;
return s !== h && 9 === s.nodeType && s.documentElement && (d = (h = s).documentElement, 
g = !o(h), w !== h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), 
n.attributes = le(function(e) {
return e.className = "i", !e.getAttribute("className");
}), n.getElementsByTagName = le(function(e) {
return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
}), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = le(function(e) {
return d.appendChild(e).id = b, !h.getElementsByName || !h.getElementsByName(b).length;
}), n.getById ? (r.filter.ID = function(e) {
var t = e.replace(te, ne);
return function(e) {
return e.getAttribute("id") === t;
};
}, r.find.ID = function(e, t) {
if (void 0 !== t.getElementById && g) {
var n = t.getElementById(e);
return n ? [ n ] : [];
}
}) : (r.filter.ID = function(e) {
var t = e.replace(te, ne);
return function(e) {
var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
return n && n.value === t;
};
}, r.find.ID = function(e, t) {
if (void 0 !== t.getElementById && g) {
var n, r, i, o = t.getElementById(e);
if (o) {
if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
for (i = t.getElementsByName(e), r = 0; o = i[r++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
}
return [];
}
}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
} : function(e, t) {
var n, r = [], i = 0, o = t.getElementsByTagName(e);
if ("*" === e) {
for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
return r;
}
return o;
}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
}, m = [], v = [], (n.qsa = J.test(h.querySelectorAll)) && (le(function(e) {
d.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + L + "*(?:''|\"\")"), 
e.querySelectorAll("[selected]").length || v.push("\\[" + L + "*(?:value|" + N + ")"), 
e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), 
e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
}), le(function(e) {
e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var t = h.createElement("input");
t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + L + "*[*^$|!~]?="), 
2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), 
d.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), 
e.querySelectorAll("*,:x"), v.push(",.*:");
})), (n.matchesSelector = J.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && le(function(e) {
n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", G);
}), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), 
t = J.test(d.compareDocumentPosition), _ = t || J.test(d.contains) ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
} : function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, S = t ? function(e, t) {
if (e === t) return f = !0, 0;
var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === h || e.ownerDocument === w && _(w, e) ? -1 : t === h || t.ownerDocument === w && _(w, t) ? 1 : l ? D(l, e) - D(l, t) : 0 : 4 & r ? -1 : 1);
} : function(e, t) {
if (e === t) return f = !0, 0;
var n, r = 0, i = e.parentNode, o = t.parentNode, s = [ e ], a = [ t ];
if (!i || !o) return e === h ? -1 : t === h ? 1 : i ? -1 : o ? 1 : l ? D(l, e) - D(l, t) : 0;
if (i === o) return pe(e, t);
for (n = e; n = n.parentNode; ) s.unshift(n);
for (n = t; n = n.parentNode; ) a.unshift(n);
for (;s[r] === a[r]; ) r++;
return r ? pe(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0;
}), h;
}, ae.matches = function(e, t) {
return ae(e, null, null, t);
}, ae.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== h && p(e), n.matchesSelector && g && !k[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
var r = y.call(e, t);
if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
} catch (e) {
k(t, !0);
}
return 0 < ae(t, h, null, [ e ]).length;
}, ae.contains = function(e, t) {
return (e.ownerDocument || e) !== h && p(e), _(e, t);
}, ae.attr = function(e, t) {
(e.ownerDocument || e) !== h && p(e);
var i = r.attrHandle[t.toLowerCase()], o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
}, ae.escape = function(e) {
return (e + "").replace(re, ie);
}, ae.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, ae.uniqueSort = function(e) {
var t, r = [], i = 0, o = 0;
if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), f) {
for (;t = e[o++]; ) t === e[o] && (i = r.push(o));
for (;i--; ) e.splice(r[i], 1);
}
return l = null, e;
}, i = ae.getText = function(e) {
var t, n = "", r = 0, o = e.nodeType;
if (o) {
if (1 === o || 9 === o || 11 === o) {
if ("string" == typeof e.textContent) return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
} else if (3 === o || 4 === o) return e.nodeValue;
} else for (;t = e[r++]; ) n += i(t);
return n;
}, (r = ae.selectors = {
cacheLength: 50,
createPseudo: ce,
match: z,
attrHandle: {},
find: {},
relative: {
">": {
dir: "parentNode",
first: !0
},
" ": {
dir: "parentNode"
},
"+": {
dir: "previousSibling",
first: !0
},
"~": {
dir: "previousSibling"
}
},
preFilter: {
ATTR: function(e) {
return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), 
"~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
},
CHILD: function(e) {
return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), 
e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), 
e;
},
PSEUDO: function(e) {
var t, n = !e[6] && e[2];
return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
e[2] = n.slice(0, t)), e.slice(0, 3));
}
},
filter: {
TAG: function(e) {
var t = e.replace(te, ne).toLowerCase();
return "*" === e ? function() {
return !0;
} : function(e) {
return e.nodeName && e.nodeName.toLowerCase() === t;
};
},
CLASS: function(e) {
var t = C[e + " "];
return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && C(e, function(e) {
return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
});
},
ATTR: function(e, t, n) {
return function(r) {
var i = ae.attr(r, e);
return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(I, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
};
},
CHILD: function(e, t, n, r, i) {
var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
return 1 === r && 0 === i ? function(e) {
return !!e.parentNode;
} : function(t, n, u) {
var c, l, f, p, h, d, g = o !== s ? "nextSibling" : "previousSibling", v = t.parentNode, m = a && t.nodeName.toLowerCase(), y = !u && !a, _ = !1;
if (v) {
if (o) {
for (;g; ) {
for (p = t; p = p[g]; ) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
d = g = "only" === e && !d && "nextSibling";
}
return !0;
}
if (d = [ s ? v.firstChild : v.lastChild ], s && y) {
for (_ = (h = (c = (l = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], 
p = h && v.childNodes[h]; p = ++h && p && p[g] || (_ = h = 0) || d.pop(); ) if (1 === p.nodeType && ++_ && p === t) {
l[e] = [ x, h, _ ];
break;
}
} else if (y && (_ = h = (c = (l = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === x && c[1]), 
!1 === _) for (;(p = ++h && p && p[g] || (_ = h = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++_ || (y && ((l = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ x, _ ]), 
p !== t)); ) ;
return (_ -= i) === r || _ % r == 0 && 0 <= _ / r;
}
};
},
PSEUDO: function(e, t) {
var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
return i[b] ? i(t) : 1 < i.length ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
for (var r, o = i(e, t), s = o.length; s--; ) e[r = D(e, o[s])] = !(n[r] = o[s]);
}) : function(e) {
return i(e, 0, n);
}) : i;
}
},
pseudos: {
not: ce(function(e) {
var t = [], n = [], r = a(e.replace(H, "$1"));
return r[b] ? ce(function(e, t, n, i) {
for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
}) : function(e, i, o) {
return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
};
}),
has: ce(function(e) {
return function(t) {
return 0 < ae(e, t).length;
};
}),
contains: ce(function(e) {
return e = e.replace(te, ne), function(t) {
return -1 < (t.textContent || i(t)).indexOf(e);
};
}),
lang: ce(function(e) {
return Q.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), 
function(t) {
var n;
do {
if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
} while ((t = t.parentNode) && 1 === t.nodeType);
return !1;
};
}),
target: function(t) {
var n = e.location && e.location.hash;
return n && n.slice(1) === t.id;
},
root: function(e) {
return e === d;
},
focus: function(e) {
return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
},
enabled: ge(!1),
disabled: ge(!0),
checked: function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && !!e.checked || "option" === t && !!e.selected;
},
selected: function(e) {
return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
},
empty: function(e) {
for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
return !0;
},
parent: function(e) {
return !r.pseudos.empty(e);
},
header: function(e) {
return Y.test(e.nodeName);
},
input: function(e) {
return K.test(e.nodeName);
},
button: function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && "button" === e.type || "button" === t;
},
text: function(e) {
var t;
return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
},
first: ve(function() {
return [ 0 ];
}),
last: ve(function(e, t) {
return [ t - 1 ];
}),
eq: ve(function(e, t, n) {
return [ n < 0 ? n + t : n ];
}),
even: ve(function(e, t) {
for (var n = 0; n < t; n += 2) e.push(n);
return e;
}),
odd: ve(function(e, t) {
for (var n = 1; n < t; n += 2) e.push(n);
return e;
}),
lt: ve(function(e, t, n) {
for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
return e;
}),
gt: ve(function(e, t, n) {
for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
return e;
})
}
}).pseudos.nth = r.pseudos.eq, {
radio: !0,
checkbox: !0,
file: !0,
password: !0,
image: !0
}) r.pseudos[t] = he(t);
for (t in {
submit: !0,
reset: !0
}) r.pseudos[t] = de(t);
function ye() {}
function _e(e) {
for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
return r;
}
function be(e, t, n) {
var r = t.dir, i = t.next, o = i || r, s = n && "parentNode" === o, a = j++;
return t.first ? function(t, n, i) {
for (;t = t[r]; ) if (1 === t.nodeType || s) return e(t, n, i);
return !1;
} : function(t, n, u) {
var c, l, f, p = [ x, a ];
if (u) {
for (;t = t[r]; ) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
} else for (;t = t[r]; ) if (1 === t.nodeType || s) if (l = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), 
i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
if ((c = l[o]) && c[0] === x && c[1] === a) return p[2] = c[2];
if ((l[o] = p)[2] = e(t, n, u)) return !0;
}
return !1;
};
}
function we(e) {
return 1 < e.length ? function(t, n, r) {
for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
return !0;
} : e[0];
}
function xe(e, t, n, r, i) {
for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++) (o = e[a]) && (n && !n(o, r, i) || (s.push(o), 
c && t.push(a)));
return s;
}
function je(e, t, n, r, i, o) {
return r && !r[b] && (r = je(r)), i && !i[b] && (i = je(i, o)), ce(function(o, s, a, u) {
var c, l, f, p = [], h = [], d = s.length, g = o || function(e, t, n) {
for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
return n;
}(t || "*", a.nodeType ? [ a ] : a, []), v = !e || !o && t ? g : xe(g, p, e, a, u), m = n ? i || (o ? e : d || r) ? [] : s : v;
if (n && n(v, m, a, u), r) for (c = xe(m, h), r(c, [], a, u), l = c.length; l--; ) (f = c[l]) && (m[h[l]] = !(v[h[l]] = f));
if (o) {
if (i || e) {
if (i) {
for (c = [], l = m.length; l--; ) (f = m[l]) && c.push(v[l] = f);
i(null, m = [], c, u);
}
for (l = m.length; l--; ) (f = m[l]) && -1 < (c = i ? D(o, f) : p[l]) && (o[c] = !(s[c] = f));
}
} else m = xe(m === s ? m.splice(d, m.length) : m), i ? i(null, s, m, u) : P.apply(s, m);
});
}
function Ce(e) {
for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, l = be(function(e) {
return e === t;
}, a, !0), f = be(function(e) {
return -1 < D(t, e);
}, a, !0), p = [ function(e, n, r) {
var i = !s && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
return t = null, i;
} ]; u < o; u++) if (n = r.relative[e[u].type]) p = [ be(we(p), n) ]; else {
if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
for (i = ++u; i < o && !r.relative[e[i].type]; i++) ;
return je(1 < u && we(p), 1 < u && _e(e.slice(0, u - 1).concat({
value: " " === e[u - 2].type ? "*" : ""
})).replace(H, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && _e(e));
}
p.push(n);
}
return we(p);
}
return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), s = ae.tokenize = function(e, t) {
var n, i, o, s, a, u, c, l = T[e + " "];
if (l) return t ? 0 : l.slice(0);
for (a = e, u = [], c = r.preFilter; a; ) {
for (s in n && !(i = V.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), 
n = !1, (i = B.exec(a)) && (n = i.shift(), o.push({
value: n,
type: i[0].replace(H, " ")
}), a = a.slice(n.length)), r.filter) !(i = z[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), 
o.push({
value: n,
type: s,
matches: i
}), a = a.slice(n.length));
if (!n) break;
}
return t ? a.length : a ? ae.error(e) : T(e, u).slice(0);
}, a = ae.compile = function(e, t) {
var n, i, o, a, u, l, f = [], d = [], v = E[e + " "];
if (!v) {
for (t || (t = s(e)), n = t.length; n--; ) (v = Ce(t[n]))[b] ? f.push(v) : d.push(v);
(v = E(e, (i = d, a = 0 < (o = f).length, u = 0 < i.length, l = function(e, t, n, s, l) {
var f, d, v, m = 0, y = "0", _ = e && [], b = [], w = c, j = e || u && r.find.TAG("*", l), C = x += null == w ? 1 : Math.random() || .1, T = j.length;
for (l && (c = t === h || t || l); y !== T && null != (f = j[y]); y++) {
if (u && f) {
for (d = 0, t || f.ownerDocument === h || (p(f), n = !g); v = i[d++]; ) if (v(f, t || h, n)) {
s.push(f);
break;
}
l && (x = C);
}
a && ((f = !v && f) && m--, e && _.push(f));
}
if (m += y, a && y !== m) {
for (d = 0; v = o[d++]; ) v(_, b, t, n);
if (e) {
if (0 < m) for (;y--; ) _[y] || b[y] || (b[y] = O.call(s));
b = xe(b);
}
P.apply(s, b), l && !e && 0 < b.length && 1 < m + o.length && ae.uniqueSort(s);
}
return l && (x = C, c = w), _;
}, a ? ce(l) : l))).selector = e;
}
return v;
}, u = ae.select = function(e, t, n, i) {
var o, u, c, l, f, p = "function" == typeof e && e, h = !i && s(e = p.selector || e);
if (n = n || [], 1 === h.length) {
if (2 < (u = h[0] = h[0].slice(0)).length && "ID" === (c = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
p && (t = t.parentNode), e = e.slice(u.shift().value.length);
}
for (o = z.needsContext.test(e) ? 0 : u.length; o-- && (c = u[o], !r.relative[l = c.type]); ) if ((f = r.find[l]) && (i = f(c.matches[0].replace(te, ne), ee.test(u[0].type) && me(t.parentNode) || t))) {
if (u.splice(o, 1), !(e = i.length && _e(u))) return P.apply(n, i), n;
break;
}
}
return (p || a(e, h))(i, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t), n;
}, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!f, 
p(), n.sortDetached = le(function(e) {
return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
}), le(function(e) {
return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
}) || fe("type|href|height|width", function(e, t, n) {
if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
}), n.attributes && le(function(e) {
return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}) || fe("value", function(e, t, n) {
if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
}), le(function(e) {
return null == e.getAttribute("disabled");
}) || fe(N, function(e, t, n) {
var r;
if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
}), ae;
}(n);
T.find = S, T.expr = S.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = S.uniqueSort, 
T.text = S.getText, T.isXMLDoc = S.isXML, T.contains = S.contains, T.escapeSelector = S.escape;
var A = function(e, t, n) {
for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
if (i && T(e).is(n)) break;
r.push(e);
}
return r;
}, M = function(e, t) {
for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
return n;
}, O = T.expr.match.needsContext;
function F(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
}
var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function R(e, t, n) {
return _(t) ? T.grep(e, function(e, r) {
return !!t.call(e, r, e) !== n;
}) : t.nodeType ? T.grep(e, function(e) {
return e === t !== n;
}) : "string" != typeof t ? T.grep(e, function(e) {
return -1 < p.call(t, e) !== n;
}) : T.filter(t, e, n);
}
T.filter = function(e, t, n) {
var r = t[0];
return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [ r ] : [] : T.find.matches(e, T.grep(t, function(e) {
return 1 === e.nodeType;
}));
}, T.fn.extend({
find: function(e) {
var t, n, r = this.length, i = this;
if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0;
}));
for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
return 1 < r ? T.uniqueSort(n) : n;
},
filter: function(e) {
return this.pushStack(R(this, e || [], !1));
},
not: function(e) {
return this.pushStack(R(this, e || [], !0));
},
is: function(e) {
return !!R(this, "string" == typeof e && O.test(e) ? T(e) : e || [], !1).length;
}
});
var D, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(T.fn.init = function(e, t, n) {
var r, i;
if (!e) return this;
if (n = n || D, "string" == typeof e) {
if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : N.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
if (r[1]) {
if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), 
P.test(r[1]) && T.isPlainObject(t)) for (r in t) _(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
return this;
}
return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
}
return e.nodeType ? (this[0] = e, this.length = 1, this) : _(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
}).prototype = T.fn, D = T(a);
var L = /^(?:parents|prev(?:Until|All))/, q = {
children: !0,
contents: !0,
next: !0,
prev: !0
};
function $(e, t) {
for (;(e = e[t]) && 1 !== e.nodeType; ) ;
return e;
}
T.fn.extend({
has: function(e) {
var t = T(e, this), n = t.length;
return this.filter(function() {
for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
});
},
closest: function(e, t) {
var n, r = 0, i = this.length, o = [], s = "string" != typeof e && T(e);
if (!O.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
o.push(n);
break;
}
return this.pushStack(1 < o.length ? T.uniqueSort(o) : o);
},
index: function(e) {
return e ? "string" == typeof e ? p.call(T(e), this[0]) : p.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
},
add: function(e, t) {
return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
},
addBack: function(e) {
return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
}
}), T.each({
parent: function(e) {
var t = e.parentNode;
return t && 11 !== t.nodeType ? t : null;
},
parents: function(e) {
return A(e, "parentNode");
},
parentsUntil: function(e, t, n) {
return A(e, "parentNode", n);
},
next: function(e) {
return $(e, "nextSibling");
},
prev: function(e) {
return $(e, "previousSibling");
},
nextAll: function(e) {
return A(e, "nextSibling");
},
prevAll: function(e) {
return A(e, "previousSibling");
},
nextUntil: function(e, t, n) {
return A(e, "nextSibling", n);
},
prevUntil: function(e, t, n) {
return A(e, "previousSibling", n);
},
siblings: function(e) {
return M((e.parentNode || {}).firstChild, e);
},
children: function(e) {
return M(e.firstChild);
},
contents: function(e) {
return void 0 !== e.contentDocument ? e.contentDocument : (F(e, "template") && (e = e.content || e), 
T.merge([], e.childNodes));
}
}, function(e, t) {
T.fn[e] = function(n, r) {
var i = T.map(this, t, n);
return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), 
1 < this.length && (q[e] || T.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i);
};
});
var G = /[^\x20\t\r\n\f]+/g;
function I(e) {
return e;
}
function H(e) {
throw e;
}
function V(e, t, n, r) {
var i;
try {
e && _(i = e.promise) ? i.call(e).done(t).fail(n) : e && _(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
} catch (e) {
n.apply(void 0, [ e ]);
}
}
T.Callbacks = function(e) {
var t, n;
e = "string" == typeof e ? (t = e, n = {}, T.each(t.match(G) || [], function(e, t) {
n[t] = !0;
}), n) : T.extend({}, e);
var r, i, o, s, a = [], u = [], c = -1, l = function() {
for (s = s || e.once, o = r = !0; u.length; c = -1) for (i = u.shift(); ++c < a.length; ) !1 === a[c].apply(i[0], i[1]) && e.stopOnFalse && (c = a.length, 
i = !1);
e.memory || (i = !1), r = !1, s && (a = i ? [] : "");
}, f = {
add: function() {
return a && (i && !r && (c = a.length - 1, u.push(i)), function t(n) {
T.each(n, function(n, r) {
_(r) ? e.unique && f.has(r) || a.push(r) : r && r.length && "string" !== j(r) && t(r);
});
}(arguments), i && !r && l()), this;
},
remove: function() {
return T.each(arguments, function(e, t) {
for (var n; -1 < (n = T.inArray(t, a, n)); ) a.splice(n, 1), n <= c && c--;
}), this;
},
has: function(e) {
return e ? -1 < T.inArray(e, a) : 0 < a.length;
},
empty: function() {
return a && (a = []), this;
},
disable: function() {
return s = u = [], a = i = "", this;
},
disabled: function() {
return !a;
},
lock: function() {
return s = u = [], i || r || (a = i = ""), this;
},
locked: function() {
return !!s;
},
fireWith: function(e, t) {
return s || (t = [ e, (t = t || []).slice ? t.slice() : t ], u.push(t), r || l()), 
this;
},
fire: function() {
return f.fireWith(this, arguments), this;
},
fired: function() {
return !!o;
}
};
return f;
}, T.extend({
Deferred: function(e) {
var t = [ [ "notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2 ], [ "resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
state: function() {
return r;
},
always: function() {
return o.done(arguments).fail(arguments), this;
},
catch: function(e) {
return i.then(null, e);
},
pipe: function() {
var e = arguments;
return T.Deferred(function(n) {
T.each(t, function(t, r) {
var i = _(e[r[4]]) && e[r[4]];
o[r[1]](function() {
var e = i && i.apply(this, arguments);
e && _(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [ e ] : arguments);
});
}), e = null;
}).promise();
},
then: function(e, r, i) {
var o = 0;
function s(e, t, r, i) {
return function() {
var a = this, u = arguments, c = function() {
var n, c;
if (!(e < o)) {
if ((n = r.apply(a, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
c = n && ("object" == typeof n || "function" == typeof n) && n.then, _(c) ? i ? c.call(n, s(o, t, I, i), s(o, t, H, i)) : (o++, 
c.call(n, s(o, t, I, i), s(o, t, H, i), s(o, t, I, t.notifyWith))) : (r !== I && (a = void 0, 
u = [ n ]), (i || t.resolveWith)(a, u));
}
}, l = i ? c : function() {
try {
c();
} catch (n) {
T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, l.stackTrace), o <= e + 1 && (r !== H && (a = void 0, 
u = [ n ]), t.rejectWith(a, u));
}
};
e ? l() : (T.Deferred.getStackHook && (l.stackTrace = T.Deferred.getStackHook()), 
n.setTimeout(l));
};
}
return T.Deferred(function(n) {
t[0][3].add(s(0, n, _(i) ? i : I, n.notifyWith)), t[1][3].add(s(0, n, _(e) ? e : I)), 
t[2][3].add(s(0, n, _(r) ? r : H));
}).promise();
},
promise: function(e) {
return null != e ? T.extend(e, i) : i;
}
}, o = {};
return T.each(t, function(e, n) {
var s = n[2], a = n[5];
i[n[1]] = s.add, a && s.add(function() {
r = a;
}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), 
o[n[0]] = function() {
return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
}, o[n[0] + "With"] = s.fireWith;
}), i.promise(o), e && e.call(o, o), o;
},
when: function(e) {
var t = arguments.length, n = t, r = Array(n), i = c.call(arguments), o = T.Deferred(), s = function(e) {
return function(n) {
r[e] = this, i[e] = 1 < arguments.length ? c.call(arguments) : n, --t || o.resolveWith(r, i);
};
};
if (t <= 1 && (V(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || _(i[n] && i[n].then))) return o.then();
for (;n--; ) V(i[n], s(n), o.reject);
return o.promise();
}
});
var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
T.Deferred.exceptionHook = function(e, t) {
n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
}, T.readyException = function(e) {
n.setTimeout(function() {
throw e;
});
};
var U = T.Deferred();
function W() {
a.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), 
T.ready();
}
T.fn.ready = function(e) {
return U.then(e).catch(function(e) {
T.readyException(e);
}), this;
}, T.extend({
isReady: !1,
readyWait: 1,
ready: function(e) {
(!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || U.resolveWith(a, [ T ]);
}
}), T.ready.then = U.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", W), 
n.addEventListener("load", W));
var Q = function(e, t, n, r, i, o, s) {
var a = 0, u = e.length, c = null == n;
if ("object" === j(n)) for (a in i = !0, n) Q(e, t, a, n[a], !0, o, s); else if (void 0 !== r && (i = !0, 
_(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
return c.call(T(e), n);
})), t)) for (;a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
}, z = /^-ms-/, X = /-([a-z])/g;
function K(e, t) {
return t.toUpperCase();
}
function Y(e) {
return e.replace(z, "ms-").replace(X, K);
}
var J = function(e) {
return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
};
function Z() {
this.expando = T.expando + Z.uid++;
}
Z.uid = 1, Z.prototype = {
cache: function(e) {
var t = e[this.expando];
return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
value: t,
configurable: !0
}))), t;
},
set: function(e, t, n) {
var r, i = this.cache(e);
if ("string" == typeof t) i[Y(t)] = n; else for (r in t) i[Y(r)] = t[r];
return i;
},
get: function(e, t) {
return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
},
access: function(e, t, n) {
return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
void 0 !== n ? n : t);
},
remove: function(e, t) {
var n, r = e[this.expando];
if (void 0 !== r) {
if (void 0 !== t) {
n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [ t ] : t.match(G) || []).length;
for (;n--; ) delete r[t[n]];
}
(void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
}
},
hasData: function(e) {
var t = e[this.expando];
return void 0 !== t && !T.isEmptyObject(t);
}
};
var ee = new Z(), te = new Z(), ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, re = /[A-Z]/g;
function ie(e, t, n) {
var r, i;
if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(re, "-$&").toLowerCase(), 
"string" == typeof (n = e.getAttribute(r))) {
try {
n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : ne.test(i) ? JSON.parse(i) : i);
} catch (e) {}
te.set(e, t, n);
} else n = void 0;
return n;
}
T.extend({
hasData: function(e) {
return te.hasData(e) || ee.hasData(e);
},
data: function(e, t, n) {
return te.access(e, t, n);
},
removeData: function(e, t) {
te.remove(e, t);
},
_data: function(e, t, n) {
return ee.access(e, t, n);
},
_removeData: function(e, t) {
ee.remove(e, t);
}
}), T.fn.extend({
data: function(e, t) {
var n, r, i, o = this[0], s = o && o.attributes;
if (void 0 === e) {
if (this.length && (i = te.get(o), 1 === o.nodeType && !ee.get(o, "hasDataAttrs"))) {
for (n = s.length; n--; ) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = Y(r.slice(5)), 
ie(o, r, i[r]));
ee.set(o, "hasDataAttrs", !0);
}
return i;
}
return "object" == typeof e ? this.each(function() {
te.set(this, e);
}) : Q(this, function(t) {
var n;
if (o && void 0 === t) return void 0 !== (n = te.get(o, e)) ? n : void 0 !== (n = ie(o, e)) ? n : void 0;
this.each(function() {
te.set(this, e, t);
});
}, null, t, 1 < arguments.length, null, !0);
},
removeData: function(e) {
return this.each(function() {
te.remove(this, e);
});
}
}), T.extend({
queue: function(e, t, n) {
var r;
if (e) return t = (t || "fx") + "queue", r = ee.get(e, t), n && (!r || Array.isArray(n) ? r = ee.access(e, t, T.makeArray(n)) : r.push(n)), 
r || [];
},
dequeue: function(e, t) {
t = t || "fx";
var n = T.queue(e, t), r = n.length, i = n.shift(), o = T._queueHooks(e, t);
"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
delete o.stop, i.call(e, function() {
T.dequeue(e, t);
}, o)), !r && o && o.empty.fire();
},
_queueHooks: function(e, t) {
var n = t + "queueHooks";
return ee.get(e, n) || ee.access(e, n, {
empty: T.Callbacks("once memory").add(function() {
ee.remove(e, [ t + "queue", n ]);
})
});
}
}), T.fn.extend({
queue: function(e, t) {
var n = 2;
return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function() {
var n = T.queue(this, e, t);
T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
});
},
dequeue: function(e) {
return this.each(function() {
T.dequeue(this, e);
});
},
clearQueue: function(e) {
return this.queue(e || "fx", []);
},
promise: function(e, t) {
var n, r = 1, i = T.Deferred(), o = this, s = this.length, a = function() {
--r || i.resolveWith(o, [ o ]);
};
for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = ee.get(o[s], e + "queueHooks")) && n.empty && (r++, 
n.empty.add(a));
return a(), i.promise(t);
}
});
var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, se = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"), ae = [ "Top", "Right", "Bottom", "Left" ], ue = a.documentElement, ce = function(e) {
return T.contains(e.ownerDocument, e);
}, le = {
composed: !0
};
ue.getRootNode && (ce = function(e) {
return T.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
});
var fe = function(e, t) {
return "none" === (e = t || e).style.display || "" === e.style.display && ce(e) && "none" === T.css(e, "display");
}, pe = function(e, t, n, r) {
var i, o, s = {};
for (o in t) s[o] = e.style[o], e.style[o] = t[o];
for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
return i;
};
function he(e, t, n, r) {
var i, o, s = 20, a = r ? function() {
return r.cur();
} : function() {
return T.css(e, t, "");
}, u = a(), c = n && n[3] || (T.cssNumber[t] ? "" : "px"), l = e.nodeType && (T.cssNumber[t] || "px" !== c && +u) && se.exec(T.css(e, t));
if (l && l[3] !== c) {
for (u /= 2, c = c || l[3], l = +u || 1; s--; ) T.style(e, t, l + c), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), 
l /= o;
l *= 2, T.style(e, t, l + c), n = n || [];
}
return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, 
r.start = l, r.end = i)), i;
}
var de = {};
function ge(e, t) {
for (var n, r, i, o, s, a, u, c = [], l = 0, f = e.length; l < f; l++) (r = e[l]).style && (n = r.style.display, 
t ? ("none" === n && (c[l] = ee.get(r, "display") || null, c[l] || (r.style.display = "")), 
"" === r.style.display && fe(r) && (c[l] = (u = s = o = void 0, s = (i = r).ownerDocument, 
a = i.nodeName, (u = de[a]) || (o = s.body.appendChild(s.createElement(a)), u = T.css(o, "display"), 
o.parentNode.removeChild(o), "none" === u && (u = "block"), de[a] = u)))) : "none" !== n && (c[l] = "none", 
ee.set(r, "display", n)));
for (l = 0; l < f; l++) null != c[l] && (e[l].style.display = c[l]);
return e;
}
T.fn.extend({
show: function() {
return ge(this, !0);
},
hide: function() {
return ge(this);
},
toggle: function(e) {
return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
fe(this) ? T(this).show() : T(this).hide();
});
}
});
var ve = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ye = /^$|^module$|\/(?:java|ecma)script/i, _e = {
option: [ 1, "<select multiple='multiple'>", "</select>" ],
thead: [ 1, "<table>", "</table>" ],
col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
tr: [ 2, "<table><tbody>", "</tbody></table>" ],
td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
_default: [ 0, "", "" ]
};
function be(e, t) {
var n;
return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
void 0 === t || t && F(e, t) ? T.merge([ e ], n) : n;
}
function we(e, t) {
for (var n = 0, r = e.length; n < r; n++) ee.set(e[n], "globalEval", !t || ee.get(t[n], "globalEval"));
}
_e.optgroup = _e.option, _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, 
_e.th = _e.td;
var xe, je, Ce = /<|&#?\w+;/;
function Te(e, t, n, r, i) {
for (var o, s, a, u, c, l, f = t.createDocumentFragment(), p = [], h = 0, d = e.length; h < d; h++) if ((o = e[h]) || 0 === o) if ("object" === j(o)) T.merge(p, o.nodeType ? [ o ] : o); else if (Ce.test(o)) {
for (s = s || f.appendChild(t.createElement("div")), a = (me.exec(o) || [ "", "" ])[1].toLowerCase(), 
u = _e[a] || _e._default, s.innerHTML = u[1] + T.htmlPrefilter(o) + u[2], l = u[0]; l--; ) s = s.lastChild;
T.merge(p, s.childNodes), (s = f.firstChild).textContent = "";
} else p.push(t.createTextNode(o));
for (f.textContent = "", h = 0; o = p[h++]; ) if (r && -1 < T.inArray(o, r)) i && i.push(o); else if (c = ce(o), 
s = be(f.appendChild(o), "script"), c && we(s), n) for (l = 0; o = s[l++]; ) ye.test(o.type || "") && n.push(o);
return f;
}
xe = a.createDocumentFragment().appendChild(a.createElement("div")), (je = a.createElement("input")).setAttribute("type", "radio"), 
je.setAttribute("checked", "checked"), je.setAttribute("name", "t"), xe.appendChild(je), 
y.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", 
y.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
var Ee = /^key/, ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Se = /^([^.]*)(?:\.(.+)|)/;
function Ae() {
return !0;
}
function Me() {
return !1;
}
function Oe(e, t) {
return e === function() {
try {
return a.activeElement;
} catch (e) {}
}() == ("focus" === t);
}
function Fe(e, t, n, r, i, o) {
var s, a;
if ("object" == typeof t) {
for (a in "string" != typeof n && (r = r || n, n = void 0), t) Fe(e, a, n, r, t[a], o);
return e;
}
if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Me; else if (!i) return e;
return 1 === o && (s = i, (i = function(e) {
return T().off(e), s.apply(this, arguments);
}).guid = s.guid || (s.guid = T.guid++)), e.each(function() {
T.event.add(this, t, i, r, n);
});
}
function Pe(e, t, n) {
n ? (ee.set(e, t, !1), T.event.add(e, t, {
namespace: !1,
handler: function(e) {
var r, i, o = ee.get(this, t);
if (1 & e.isTrigger && this[t]) {
if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation(); else if (o = c.call(arguments), 
ee.set(this, t, o), r = n(this, t), this[t](), o !== (i = ee.get(this, t)) || r ? ee.set(this, t, !1) : i = {}, 
o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
} else o.length && (ee.set(this, t, {
value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
}), e.stopImmediatePropagation());
}
})) : void 0 === ee.get(e, t) && T.event.add(e, t, Ae);
}
T.event = {
global: {},
add: function(e, t, n, r, i) {
var o, s, a, u, c, l, f, p, h, d, g, v = ee.get(e);
if (v) for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(ue, i), 
n.guid || (n.guid = T.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
}), c = (t = (t || "").match(G) || [ "" ]).length; c--; ) h = g = (a = Se.exec(t[c]) || [])[1], 
d = (a[2] || "").split(".").sort(), h && (f = T.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, 
f = T.event.special[h] || {}, l = T.extend({
type: h,
origType: g,
data: r,
handler: n,
guid: n.guid,
selector: i,
needsContext: i && T.expr.match.needsContext.test(i),
namespace: d.join(".")
}, o), (p = u[h]) || ((p = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, d, s) || e.addEventListener && e.addEventListener(h, s)), 
f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), 
T.event.global[h] = !0);
},
remove: function(e, t, n, r, i) {
var o, s, a, u, c, l, f, p, h, d, g, v = ee.hasData(e) && ee.get(e);
if (v && (u = v.events)) {
for (c = (t = (t || "").match(G) || [ "" ]).length; c--; ) if (h = g = (a = Se.exec(t[c]) || [])[1], 
d = (a[2] || "").split(".").sort(), h) {
for (f = T.event.special[h] || {}, p = u[h = (r ? f.delegateType : f.bindType) || h] || [], 
a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--; ) l = p[o], 
!i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), 
l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
s && !p.length && (f.teardown && !1 !== f.teardown.call(e, d, v.handle) || T.removeEvent(e, h, v.handle), 
delete u[h]);
} else for (h in u) T.event.remove(e, h + t[c], n, r, !0);
T.isEmptyObject(u) && ee.remove(e, "handle events");
}
},
dispatch: function(e) {
var t, n, r, i, o, s, a = T.event.fix(e), u = new Array(arguments.length), c = (ee.get(this, "events") || {})[a.type] || [], l = T.event.special[a.type] || {};
for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
for (s = T.event.handlers.call(this, a, c), t = 0; (i = s[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = i.elem, 
n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, 
a.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), 
a.stopPropagation()));
return l.postDispatch && l.postDispatch.call(this, a), a.result;
}
},
handlers: function(e, t) {
var n, r, i, o, s, a = [], u = t.delegateCount, c = e.target;
if (u && c.nodeType && !("click" === e.type && 1 <= e.button)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < T(i, this).index(c) : T.find(i, this, null, [ c ]).length), 
s[i] && o.push(r);
o.length && a.push({
elem: c,
handlers: o
});
}
return c = this, u < t.length && a.push({
elem: c,
handlers: t.slice(u)
}), a;
},
addProp: function(e, t) {
Object.defineProperty(T.Event.prototype, e, {
enumerable: !0,
configurable: !0,
get: _(t) ? function() {
if (this.originalEvent) return t(this.originalEvent);
} : function() {
if (this.originalEvent) return this.originalEvent[e];
},
set: function(t) {
Object.defineProperty(this, e, {
enumerable: !0,
configurable: !0,
writable: !0,
value: t
});
}
});
},
fix: function(e) {
return e[T.expando] ? e : new T.Event(e);
},
special: {
load: {
noBubble: !0
},
click: {
setup: function(e) {
var t = this || e;
return ve.test(t.type) && t.click && F(t, "input") && Pe(t, "click", Ae), !1;
},
trigger: function(e) {
var t = this || e;
return ve.test(t.type) && t.click && F(t, "input") && Pe(t, "click"), !0;
},
_default: function(e) {
var t = e.target;
return ve.test(t.type) && t.click && F(t, "input") && ee.get(t, "click") || F(t, "a");
}
},
beforeunload: {
postDispatch: function(e) {
void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
}
}
}
}, T.removeEvent = function(e, t, n) {
e.removeEventListener && e.removeEventListener(t, n);
}, T.Event = function(e, t) {
if (!(this instanceof T.Event)) return new T.Event(e, t);
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Me, 
this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
}, T.Event.prototype = {
constructor: T.Event,
isDefaultPrevented: Me,
isPropagationStopped: Me,
isImmediatePropagationStopped: Me,
isSimulated: !1,
preventDefault: function() {
var e = this.originalEvent;
this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault();
},
stopPropagation: function() {
var e = this.originalEvent;
this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation();
},
stopImmediatePropagation: function() {
var e = this.originalEvent;
this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), 
this.stopPropagation();
}
}, T.each({
altKey: !0,
bubbles: !0,
cancelable: !0,
changedTouches: !0,
ctrlKey: !0,
detail: !0,
eventPhase: !0,
metaKey: !0,
pageX: !0,
pageY: !0,
shiftKey: !0,
view: !0,
char: !0,
code: !0,
charCode: !0,
key: !0,
keyCode: !0,
button: !0,
buttons: !0,
clientX: !0,
clientY: !0,
offsetX: !0,
offsetY: !0,
pointerId: !0,
pointerType: !0,
screenX: !0,
screenY: !0,
targetTouches: !0,
toElement: !0,
touches: !0,
which: function(e) {
var t = e.button;
return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
}
}, T.event.addProp), T.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
T.event.special[e] = {
setup: function() {
return Pe(this, e, Oe), !1;
},
trigger: function() {
return Pe(this, e), !0;
},
delegateType: t
};
}), T.each({
mouseenter: "mouseover",
mouseleave: "mouseout",
pointerenter: "pointerover",
pointerleave: "pointerout"
}, function(e, t) {
T.event.special[e] = {
delegateType: t,
bindType: t,
handle: function(e) {
var n, r = e.relatedTarget, i = e.handleObj;
return r && (r === this || T.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), 
e.type = t), n;
}
};
}), T.fn.extend({
on: function(e, t, n, r) {
return Fe(this, e, t, n, r);
},
one: function(e, t, n, r) {
return Fe(this, e, t, n, r, 1);
},
off: function(e, t, n) {
var r, i;
if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
this;
if ("object" == typeof e) {
for (i in e) this.off(i, t, e[i]);
return this;
}
return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Me), 
this.each(function() {
T.event.remove(this, e, n, t);
});
}
});
var Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, De = /<script|<style|<link/i, Ne = /checked\s*(?:[^=]|=\s*.checked.)/i, Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function qe(e, t) {
return F(e, "table") && F(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
}
function $e(e) {
return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
}
function Ge(e) {
return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
e;
}
function Ie(e, t) {
var n, r, i, o, s, a, u, c;
if (1 === t.nodeType) {
if (ee.hasData(e) && (o = ee.access(e), s = ee.set(t, o), c = o.events)) for (i in delete s.handle, 
s.events = {}, c) for (n = 0, r = c[i].length; n < r; n++) T.event.add(t, i, c[i][n]);
te.hasData(e) && (a = te.access(e), u = T.extend({}, a), te.set(t, u));
}
}
function He(e, t, n, r) {
t = l.apply([], t);
var i, o, s, a, u, c, f = 0, p = e.length, h = p - 1, d = t[0], g = _(d);
if (g || 1 < p && "string" == typeof d && !y.checkClone && Ne.test(d)) return e.each(function(i) {
var o = e.eq(i);
g && (t[0] = d.call(this, i, o.html())), He(o, t, n, r);
});
if (p && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), 
o || r)) {
for (a = (s = T.map(be(i, "script"), $e)).length; f < p; f++) u = i, f !== h && (u = T.clone(u, !0, !0), 
a && T.merge(s, be(u, "script"))), n.call(e[f], u, f);
if (a) for (c = s[s.length - 1].ownerDocument, T.map(s, Ge), f = 0; f < a; f++) u = s[f], 
ye.test(u.type || "") && !ee.access(u, "globalEval") && T.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
nonce: u.nonce || u.getAttribute("nonce")
}) : x(u.textContent.replace(Le, ""), u, c));
}
return e;
}
function Ve(e, t, n) {
for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(be(r)), 
r.parentNode && (n && ce(r) && we(be(r, "script")), r.parentNode.removeChild(r));
return e;
}
T.extend({
htmlPrefilter: function(e) {
return e.replace(Re, "<$1></$2>");
},
clone: function(e, t, n) {
var r, i, o, s, a, u, c, l = e.cloneNode(!0), f = ce(e);
if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (s = be(l), 
r = 0, i = (o = be(e)).length; r < i; r++) a = o[r], "input" === (c = (u = s[r]).nodeName.toLowerCase()) && ve.test(a.type) ? u.checked = a.checked : "input" !== c && "textarea" !== c || (u.defaultValue = a.defaultValue);
if (t) if (n) for (o = o || be(e), s = s || be(l), r = 0, i = o.length; r < i; r++) Ie(o[r], s[r]); else Ie(e, l);
return 0 < (s = be(l, "script")).length && we(s, !f && be(e, "script")), l;
},
cleanData: function(e) {
for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++) if (J(n)) {
if (t = n[ee.expando]) {
if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
n[ee.expando] = void 0;
}
n[te.expando] && (n[te.expando] = void 0);
}
}
}), T.fn.extend({
detach: function(e) {
return Ve(this, e, !0);
},
remove: function(e) {
return Ve(this, e);
},
text: function(e) {
return Q(this, function(e) {
return void 0 === e ? T.text(this) : this.empty().each(function() {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
});
}, null, e, arguments.length);
},
append: function() {
return He(this, arguments, function(e) {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
});
},
prepend: function() {
return He(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = qe(this, e);
t.insertBefore(e, t.firstChild);
}
});
},
before: function() {
return He(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
},
after: function() {
return He(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
});
},
empty: function() {
for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(be(e, !1)), 
e.textContent = "");
return this;
},
clone: function(e, t) {
return e = null != e && e, t = null == t ? e : t, this.map(function() {
return T.clone(this, e, t);
});
},
html: function(e) {
return Q(this, function(e) {
var t = this[0] || {}, n = 0, r = this.length;
if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
if ("string" == typeof e && !De.test(e) && !_e[(me.exec(e) || [ "", "" ])[1].toLowerCase()]) {
e = T.htmlPrefilter(e);
try {
for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(be(t, !1)), 
t.innerHTML = e);
t = 0;
} catch (e) {}
}
t && this.empty().append(e);
}, null, e, arguments.length);
},
replaceWith: function() {
var e = [];
return He(this, arguments, function(t) {
var n = this.parentNode;
T.inArray(this, e) < 0 && (T.cleanData(be(this)), n && n.replaceChild(t, this));
}, e);
}
}), T.each({
appendTo: "append",
prependTo: "prepend",
insertBefore: "before",
insertAfter: "after",
replaceAll: "replaceWith"
}, function(e, t) {
T.fn[e] = function(e) {
for (var n, r = [], i = T(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), 
T(i[s])[t](n), f.apply(r, n.get());
return this.pushStack(r);
};
});
var Be = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"), Ue = function(e) {
var t = e.ownerDocument.defaultView;
return t && t.opener || (t = n), t.getComputedStyle(e);
}, We = new RegExp(ae.join("|"), "i");
function Qe(e, t, n) {
var r, i, o, s, a = e.style;
return (n = n || Ue(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ce(e) || (s = T.style(e, t)), 
!y.pixelBoxStyles() && Be.test(s) && We.test(t) && (r = a.width, i = a.minWidth, 
o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, 
a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s;
}
function ze(e, t) {
return {
get: function() {
if (!e()) return (this.get = t).apply(this, arguments);
delete this.get;
}
};
}
!function() {
function e() {
if (l) {
c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
ue.appendChild(c).appendChild(l);
var e = n.getComputedStyle(l);
r = "1%" !== e.top, u = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), 
i = 36 === t(e.width), l.style.position = "absolute", o = 12 === t(l.offsetWidth / 3), 
ue.removeChild(c), l = null;
}
}
function t(e) {
return Math.round(parseFloat(e));
}
var r, i, o, s, u, c = a.createElement("div"), l = a.createElement("div");
l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
y.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(y, {
boxSizingReliable: function() {
return e(), i;
},
pixelBoxStyles: function() {
return e(), s;
},
pixelPosition: function() {
return e(), r;
},
reliableMarginLeft: function() {
return e(), u;
},
scrollboxSize: function() {
return e(), o;
}
}));
}();
var Xe = [ "Webkit", "Moz", "ms" ], Ke = a.createElement("div").style, Ye = {};
function Je(e) {
var t;
return T.cssProps[e] || Ye[e] || (e in Ke ? e : Ye[e] = function(e) {
for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; ) if ((e = Xe[n] + t) in Ke) return e;
}(e) || e);
}
var Ze = /^(none|table(?!-c[ea]).+)/, et = /^--/, tt = {
position: "absolute",
visibility: "hidden",
display: "block"
}, nt = {
letterSpacing: "0",
fontWeight: "400"
};
function rt(e, t, n) {
var r = se.exec(t);
return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
}
function it(e, t, n, r, i, o) {
var s = "width" === t ? 1 : 0, a = 0, u = 0;
if (n === (r ? "border" : "content")) return 0;
for (;s < 4; s += 2) "margin" === n && (u += T.css(e, n + ae[s], !0, i)), r ? ("content" === n && (u -= T.css(e, "padding" + ae[s], !0, i)), 
"margin" !== n && (u -= T.css(e, "border" + ae[s] + "Width", !0, i))) : (u += T.css(e, "padding" + ae[s], !0, i), 
"padding" !== n ? u += T.css(e, "border" + ae[s] + "Width", !0, i) : a += T.css(e, "border" + ae[s] + "Width", !0, i));
return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5)) || 0), 
u;
}
function ot(e, t, n) {
var r = Ue(e), i = (!y.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r), o = i, s = Qe(e, t, r), a = "offset" + t[0].toUpperCase() + t.slice(1);
if (Be.test(s)) {
if (!n) return s;
s = "auto";
}
return (!y.boxSizingReliable() && i || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, r), 
(o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, s) + "px";
}
function st(e, t, n, r, i) {
return new st.prototype.init(e, t, n, r, i);
}
T.extend({
cssHooks: {
opacity: {
get: function(e, t) {
if (t) {
var n = Qe(e, "opacity");
return "" === n ? "1" : n;
}
}
}
},
cssNumber: {
animationIterationCount: !0,
columnCount: !0,
fillOpacity: !0,
flexGrow: !0,
flexShrink: !0,
fontWeight: !0,
gridArea: !0,
gridColumn: !0,
gridColumnEnd: !0,
gridColumnStart: !0,
gridRow: !0,
gridRowEnd: !0,
gridRowStart: !0,
lineHeight: !0,
opacity: !0,
order: !0,
orphans: !0,
widows: !0,
zIndex: !0,
zoom: !0
},
cssProps: {},
style: function(e, t, n, r) {
if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
var i, o, s, a = Y(t), u = et.test(t), c = e.style;
if (u || (t = Je(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
"string" == (o = typeof n) && (i = se.exec(n)) && i[1] && (n = he(e, t, i), o = "number"), 
null != n && n == n && ("number" !== o || u || (n += i && i[3] || (T.cssNumber[a] ? "" : "px")), 
y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n));
}
},
css: function(e, t, n, r) {
var i, o, s, a = Y(t);
return et.test(t) || (t = Je(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), 
void 0 === i && (i = Qe(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), 
!0 === n || isFinite(o) ? o || 0 : i) : i;
}
}), T.each([ "height", "width" ], function(e, t) {
T.cssHooks[t] = {
get: function(e, n, r) {
if (n) return !Ze.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, r) : pe(e, tt, function() {
return ot(e, t, r);
});
},
set: function(e, n, r) {
var i, o = Ue(e), s = !y.scrollboxSize() && "absolute" === o.position, a = (s || r) && "border-box" === T.css(e, "boxSizing", !1, o), u = r ? it(e, t, r, a, o) : 0;
return a && s && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - it(e, t, "border", !1, o) - .5)), 
u && (i = se.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), 
rt(0, n, u);
}
};
}), T.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - pe(e, {
marginLeft: 0
}, function() {
return e.getBoundingClientRect().left;
})) + "px";
}), T.each({
margin: "",
padding: "",
border: "Width"
}, function(e, t) {
T.cssHooks[e + t] = {
expand: function(n) {
for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + ae[r] + t] = o[r] || o[r - 2] || o[0];
return i;
}
}, "margin" !== e && (T.cssHooks[e + t].set = rt);
}), T.fn.extend({
css: function(e, t) {
return Q(this, function(e, t, n) {
var r, i, o = {}, s = 0;
if (Array.isArray(t)) {
for (r = Ue(e), i = t.length; s < i; s++) o[t[s]] = T.css(e, t[s], !1, r);
return o;
}
return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
}, e, t, 1 < arguments.length);
}
}), ((T.Tween = st).prototype = {
constructor: st,
init: function(e, t, n, r, i, o) {
this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, 
this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px");
},
cur: function() {
var e = st.propHooks[this.prop];
return e && e.get ? e.get(this) : st.propHooks._default.get(this);
},
run: function(e) {
var t, n = st.propHooks[this.prop];
return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
n && n.set ? n.set(this) : st.propHooks._default.set(this), this;
}
}).init.prototype = st.prototype, (st.propHooks = {
_default: {
get: function(e) {
var t;
return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
},
set: function(e) {
T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
}
}
}).scrollTop = st.propHooks.scrollLeft = {
set: function(e) {
e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
}
}, T.easing = {
linear: function(e) {
return e;
},
swing: function(e) {
return .5 - Math.cos(e * Math.PI) / 2;
},
_default: "swing"
}, T.fx = st.prototype.init, T.fx.step = {};
var at, ut, ct, lt, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
function ht() {
ut && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ht) : n.setTimeout(ht, T.fx.interval), 
T.fx.tick());
}
function dt() {
return n.setTimeout(function() {
at = void 0;
}), at = Date.now();
}
function gt(e, t) {
var n, r = 0, i = {
height: e
};
for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ae[r])] = i["padding" + n] = e;
return t && (i.opacity = i.width = e), i;
}
function vt(e, t, n) {
for (var r, i = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, t, e)) return r;
}
function mt(e, t, n) {
var r, i, o = 0, s = mt.prefilters.length, a = T.Deferred().always(function() {
delete u.elem;
}), u = function() {
if (i) return !1;
for (var t = at || dt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(r);
return a.notifyWith(e, [ c, r, n ]), r < 1 && s ? n : (s || a.notifyWith(e, [ c, 1, 0 ]), 
a.resolveWith(e, [ c ]), !1);
}, c = a.promise({
elem: e,
props: T.extend({}, t),
opts: T.extend(!0, {
specialEasing: {},
easing: T.easing._default
}, n),
originalProperties: t,
originalOptions: n,
startTime: at || dt(),
duration: n.duration,
tweens: [],
createTween: function(t, n) {
var r = T.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
return c.tweens.push(r), r;
},
stop: function(t) {
var n = 0, r = t ? c.tweens.length : 0;
if (i) return this;
for (i = !0; n < r; n++) c.tweens[n].run(1);
return t ? (a.notifyWith(e, [ c, 1, 0 ]), a.resolveWith(e, [ c, t ])) : a.rejectWith(e, [ c, t ]), 
this;
}
}), l = c.props;
for (function(e, t) {
var n, r, i, o, s;
for (n in e) if (i = t[r = Y(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
n !== r && (e[r] = o, delete e[n]), (s = T.cssHooks[r]) && "expand" in s) for (n in o = s.expand(o), 
delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
}(l, c.opts.specialEasing); o < s; o++) if (r = mt.prefilters[o].call(c, e, l, c.opts)) return _(r.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), 
r;
return T.map(l, vt, c), _(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), 
T.fx.timer(T.extend(u, {
elem: e,
anim: c,
queue: c.opts.queue
})), c;
}
T.Animation = T.extend(mt, {
tweeners: {
"*": [ function(e, t) {
var n = this.createTween(e, t);
return he(n.elem, e, se.exec(t), n), n;
} ]
},
tweener: function(e, t) {
_(e) ? (t = e, e = [ "*" ]) : e = e.match(G);
for (var n, r = 0, i = e.length; r < i; r++) n = e[r], mt.tweeners[n] = mt.tweeners[n] || [], 
mt.tweeners[n].unshift(t);
},
prefilters: [ function(e, t, n) {
var r, i, o, s, a, u, c, l, f = "width" in t || "height" in t, p = this, h = {}, d = e.style, g = e.nodeType && fe(e), v = ee.get(e, "fxshow");
for (r in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, 
a = s.empty.fire, s.empty.fire = function() {
s.unqueued || a();
}), s.unqueued++, p.always(function() {
p.always(function() {
s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
});
})), t) if (i = t[r], ft.test(i)) {
if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
if ("show" !== i || !v || void 0 === v[r]) continue;
g = !0;
}
h[r] = v && v[r] || T.style(e, r);
}
if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(h)) for (r in f && 1 === e.nodeType && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
null == (c = v && v.display) && (c = ee.get(e, "display")), "none" === (l = T.css(e, "display")) && (c ? l = c : (ge([ e ], !0), 
c = e.style.display || c, l = T.css(e, "display"), ge([ e ]))), ("inline" === l || "inline-block" === l && null != c) && "none" === T.css(e, "float") && (u || (p.done(function() {
d.display = c;
}), null == c && (l = d.display, c = "none" === l ? "" : l)), d.display = "inline-block")), 
n.overflow && (d.overflow = "hidden", p.always(function() {
d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
})), u = !1, h) u || (v ? "hidden" in v && (g = v.hidden) : v = ee.access(e, "fxshow", {
display: c
}), o && (v.hidden = !g), g && ge([ e ], !0), p.done(function() {
for (r in g || ge([ e ]), ee.remove(e, "fxshow"), h) T.style(e, r, h[r]);
})), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, 
u.start = 0));
} ],
prefilter: function(e, t) {
t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
}
}), T.speed = function(e, t, n) {
var r = e && "object" == typeof e ? T.extend({}, e) : {
complete: n || !n && t || _(e) && e,
duration: e,
easing: n && t || t && !_(t) && t
};
return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), 
null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
_(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
}, r;
}, T.fn.extend({
fadeTo: function(e, t, n, r) {
return this.filter(fe).css("opacity", 0).show().end().animate({
opacity: t
}, e, n, r);
},
animate: function(e, t, n, r) {
var i = T.isEmptyObject(e), o = T.speed(t, n, r), s = function() {
var t = mt(this, T.extend({}, e), o);
(i || ee.get(this, "finish")) && t.stop(!0);
};
return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
},
stop: function(e, t, n) {
var r = function(e) {
var t = e.stop;
delete e.stop, t(n);
};
return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
this.each(function() {
var t = !0, i = null != e && e + "queueHooks", o = T.timers, s = ee.get(this);
if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && pt.test(i) && r(s[i]);
for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
t = !1, o.splice(i, 1));
!t && n || T.dequeue(this, e);
});
},
finish: function(e) {
return !1 !== e && (e = e || "fx"), this.each(function() {
var t, n = ee.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = T.timers, s = r ? r.length : 0;
for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
o.splice(t, 1));
for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
delete n.finish;
});
}
}), T.each([ "toggle", "show", "hide" ], function(e, t) {
var n = T.fn[t];
T.fn[t] = function(e, r, i) {
return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(gt(t, !0), e, r, i);
};
}), T.each({
slideDown: gt("show"),
slideUp: gt("hide"),
slideToggle: gt("toggle"),
fadeIn: {
opacity: "show"
},
fadeOut: {
opacity: "hide"
},
fadeToggle: {
opacity: "toggle"
}
}, function(e, t) {
T.fn[e] = function(e, n, r) {
return this.animate(t, e, n, r);
};
}), T.timers = [], T.fx.tick = function() {
var e, t = 0, n = T.timers;
for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
n.length || T.fx.stop(), at = void 0;
}, T.fx.timer = function(e) {
T.timers.push(e), T.fx.start();
}, T.fx.interval = 13, T.fx.start = function() {
ut || (ut = !0, ht());
}, T.fx.stop = function() {
ut = null;
}, T.fx.speeds = {
slow: 600,
fast: 200,
_default: 400
}, T.fn.delay = function(e, t) {
return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
var i = n.setTimeout(t, e);
r.stop = function() {
n.clearTimeout(i);
};
});
}, ct = a.createElement("input"), lt = a.createElement("select").appendChild(a.createElement("option")), 
ct.type = "checkbox", y.checkOn = "" !== ct.value, y.optSelected = lt.selected, 
(ct = a.createElement("input")).value = "t", ct.type = "radio", y.radioValue = "t" === ct.value;
var yt, _t = T.expr.attrHandle;
T.fn.extend({
attr: function(e, t) {
return Q(this, T.attr, e, t, 1 < arguments.length);
},
removeAttr: function(e) {
return this.each(function() {
T.removeAttr(this, e);
});
}
}), T.extend({
attr: function(e, t, n) {
var r, i, o = e.nodeType;
if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? yt : void 0)), 
void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
},
attrHooks: {
type: {
set: function(e, t) {
if (!y.radioValue && "radio" === t && F(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
}
},
removeAttr: function(e, t) {
var n, r = 0, i = t && t.match(G);
if (i && 1 === e.nodeType) for (;n = i[r++]; ) e.removeAttribute(n);
}
}), yt = {
set: function(e, t, n) {
return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
}
}, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = _t[t] || T.find.attr;
_t[t] = function(e, t, r) {
var i, o, s = t.toLowerCase();
return r || (o = _t[s], _t[s] = i, i = null != n(e, t, r) ? s : null, _t[s] = o), 
i;
};
});
var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
function xt(e) {
return (e.match(G) || []).join(" ");
}
function jt(e) {
return e.getAttribute && e.getAttribute("class") || "";
}
function Ct(e) {
return Array.isArray(e) ? e : "string" == typeof e && e.match(G) || [];
}
T.fn.extend({
prop: function(e, t) {
return Q(this, T.prop, e, t, 1 < arguments.length);
},
removeProp: function(e) {
return this.each(function() {
delete this[T.propFix[e] || e];
});
}
}), T.extend({
prop: function(e, t, n) {
var r, i, o = e.nodeType;
if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, 
i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
},
propHooks: {
tabIndex: {
get: function(e) {
var t = T.find.attr(e, "tabindex");
return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
}
}
},
propFix: {
for: "htmlFor",
class: "className"
}
}), y.optSelected || (T.propHooks.selected = {
get: function(e) {
var t = e.parentNode;
return t && t.parentNode && t.parentNode.selectedIndex, null;
},
set: function(e) {
var t = e.parentNode;
t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
}
}), T.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
T.propFix[this.toLowerCase()] = this;
}), T.fn.extend({
addClass: function(e) {
var t, n, r, i, o, s, a, u = 0;
if (_(e)) return this.each(function(t) {
T(this).addClass(e.call(this, t, jt(this)));
});
if ((t = Ct(e)).length) for (;n = this[u++]; ) if (i = jt(n), r = 1 === n.nodeType && " " + xt(i) + " ") {
for (s = 0; o = t[s++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
i !== (a = xt(r)) && n.setAttribute("class", a);
}
return this;
},
removeClass: function(e) {
var t, n, r, i, o, s, a, u = 0;
if (_(e)) return this.each(function(t) {
T(this).removeClass(e.call(this, t, jt(this)));
});
if (!arguments.length) return this.attr("class", "");
if ((t = Ct(e)).length) for (;n = this[u++]; ) if (i = jt(n), r = 1 === n.nodeType && " " + xt(i) + " ") {
for (s = 0; o = t[s++]; ) for (;-1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
i !== (a = xt(r)) && n.setAttribute("class", a);
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, r = "string" === n || Array.isArray(e);
return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : _(e) ? this.each(function(n) {
T(this).toggleClass(e.call(this, n, jt(this), t), t);
}) : this.each(function() {
var t, i, o, s;
if (r) for (i = 0, o = T(this), s = Ct(e); t = s[i++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = jt(this)) && ee.set(this, "__className__", t), 
this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ee.get(this, "__className__") || ""));
});
},
hasClass: function(e) {
var t, n, r = 0;
for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && -1 < (" " + xt(jt(n)) + " ").indexOf(t)) return !0;
return !1;
}
});
var Tt = /\r/g;
T.fn.extend({
val: function(e) {
var t, n, r, i = this[0];
return arguments.length ? (r = _(e), this.each(function(n) {
var i;
1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function(e) {
return null == e ? "" : e + "";
})), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
})) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0;
}
}), T.extend({
valHooks: {
option: {
get: function(e) {
var t = T.find.attr(e, "value");
return null != t ? t : xt(T.text(e));
}
},
select: {
get: function(e) {
var t, n, r, i = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], u = s ? o + 1 : i.length;
for (r = o < 0 ? u : s ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !F(n.parentNode, "optgroup"))) {
if (t = T(n).val(), s) return t;
a.push(t);
}
return a;
},
set: function(e, t) {
for (var n, r, i = e.options, o = T.makeArray(t), s = i.length; s--; ) ((r = i[s]).selected = -1 < T.inArray(T.valHooks.option.get(r), o)) && (n = !0);
return n || (e.selectedIndex = -1), o;
}
}
}
}), T.each([ "radio", "checkbox" ], function() {
T.valHooks[this] = {
set: function(e, t) {
if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t);
}
}, y.checkOn || (T.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" : e.value;
});
}), y.focusin = "onfocusin" in n;
var Et = /^(?:focusinfocus|focusoutblur)$/, kt = function(e) {
e.stopPropagation();
};
T.extend(T.event, {
trigger: function(e, t, r, i) {
var o, s, u, c, l, f, p, h, d = [ r || a ], v = g.call(e, "type") ? e.type : e, m = g.call(e, "namespace") ? e.namespace.split(".") : [];
if (s = h = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !Et.test(v + T.event.triggered) && (-1 < v.indexOf(".") && (v = (m = v.split(".")).shift(), 
m.sort()), l = v.indexOf(":") < 0 && "on" + v, (e = e[T.expando] ? e : new T.Event(v, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
e.result = void 0, e.target || (e.target = r), t = null == t ? [ e ] : T.makeArray(t, [ e ]), 
p = T.event.special[v] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
if (!i && !p.noBubble && !b(r)) {
for (c = p.delegateType || v, Et.test(c + v) || (s = s.parentNode); s; s = s.parentNode) d.push(s), 
u = s;
u === (r.ownerDocument || a) && d.push(u.defaultView || u.parentWindow || n);
}
for (o = 0; (s = d[o++]) && !e.isPropagationStopped(); ) h = s, e.type = 1 < o ? c : p.bindType || v, 
(f = (ee.get(s, "events") || {})[e.type] && ee.get(s, "handle")) && f.apply(s, t), 
(f = l && s[l]) && f.apply && J(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
return e.type = v, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(d.pop(), t) || !J(r) || l && _(r[v]) && !b(r) && ((u = r[l]) && (r[l] = null), 
T.event.triggered = v, e.isPropagationStopped() && h.addEventListener(v, kt), r[v](), 
e.isPropagationStopped() && h.removeEventListener(v, kt), T.event.triggered = void 0, 
u && (r[l] = u)), e.result;
}
},
simulate: function(e, t, n) {
var r = T.extend(new T.Event(), n, {
type: e,
isSimulated: !0
});
T.event.trigger(r, null, t);
}
}), T.fn.extend({
trigger: function(e, t) {
return this.each(function() {
T.event.trigger(e, t, this);
});
},
triggerHandler: function(e, t) {
var n = this[0];
if (n) return T.event.trigger(e, t, n, !0);
}
}), y.focusin || T.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
var n = function(e) {
T.event.simulate(t, e.target, T.event.fix(e));
};
T.event.special[t] = {
setup: function() {
var r = this.ownerDocument || this, i = ee.access(r, t);
i || r.addEventListener(e, n, !0), ee.access(r, t, (i || 0) + 1);
},
teardown: function() {
var r = this.ownerDocument || this, i = ee.access(r, t) - 1;
i ? ee.access(r, t, i) : (r.removeEventListener(e, n, !0), ee.remove(r, t));
}
};
});
var St = n.location, At = Date.now(), Mt = /\?/;
T.parseXML = function(e) {
var t;
if (!e || "string" != typeof e) return null;
try {
t = new n.DOMParser().parseFromString(e, "text/xml");
} catch (e) {
t = void 0;
}
return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), 
t;
};
var Ot = /\[\]$/, Ft = /\r?\n/g, Pt = /^(?:submit|button|image|reset|file)$/i, Rt = /^(?:input|select|textarea|keygen)/i;
function Dt(e, t, n, r) {
var i;
if (Array.isArray(t)) T.each(t, function(t, i) {
n || Ot.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
}); else if (n || "object" !== j(t)) r(e, t); else for (i in t) Dt(e + "[" + i + "]", t[i], n, r);
}
T.param = function(e, t) {
var n, r = [], i = function(e, t) {
var n = _(t) ? t() : t;
r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
};
if (null == e) return "";
if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
i(this.name, this.value);
}); else for (n in e) Dt(n, e[n], t, i);
return r.join("&");
}, T.fn.extend({
serialize: function() {
return T.param(this.serializeArray());
},
serializeArray: function() {
return this.map(function() {
var e = T.prop(this, "elements");
return e ? T.makeArray(e) : this;
}).filter(function() {
var e = this.type;
return this.name && !T(this).is(":disabled") && Rt.test(this.nodeName) && !Pt.test(e) && (this.checked || !ve.test(e));
}).map(function(e, t) {
var n = T(this).val();
return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
return {
name: t.name,
value: e.replace(Ft, "\r\n")
};
}) : {
name: t.name,
value: n.replace(Ft, "\r\n")
};
}).get();
}
});
var Nt = /%20/g, Lt = /#.*$/, qt = /([?&])_=[^&]*/, $t = /^(.*?):[ \t]*([^\r\n]*)$/gm, Gt = /^(?:GET|HEAD)$/, It = /^\/\//, Ht = {}, Vt = {}, Bt = "*/".concat("*"), Ut = a.createElement("a");
function Wt(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var r, i = 0, o = t.toLowerCase().match(G) || [];
if (_(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
};
}
function Qt(e, t, n, r) {
var i = {}, o = e === Vt;
function s(a) {
var u;
return i[a] = !0, T.each(e[a] || [], function(e, a) {
var c = a(t, n, r);
return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c), 
s(c), !1);
}), u;
}
return s(t.dataTypes[0]) || !i["*"] && s("*");
}
function zt(e, t) {
var n, r, i = T.ajaxSettings.flatOptions || {};
for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
return r && T.extend(!0, e, r), e;
}
Ut.href = St.href, T.extend({
active: 0,
lastModified: {},
etag: {},
ajaxSettings: {
url: St.href,
type: "GET",
isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
global: !0,
processData: !0,
async: !0,
contentType: "application/x-www-form-urlencoded; charset=UTF-8",
accepts: {
"*": Bt,
text: "text/plain",
html: "text/html",
xml: "application/xml, text/xml",
json: "application/json, text/javascript"
},
contents: {
xml: /\bxml\b/,
html: /\bhtml/,
json: /\bjson\b/
},
responseFields: {
xml: "responseXML",
text: "responseText",
json: "responseJSON"
},
converters: {
"* text": String,
"text html": !0,
"text json": JSON.parse,
"text xml": T.parseXML
},
flatOptions: {
url: !0,
context: !0
}
},
ajaxSetup: function(e, t) {
return t ? zt(zt(e, T.ajaxSettings), t) : zt(T.ajaxSettings, e);
},
ajaxPrefilter: Wt(Ht),
ajaxTransport: Wt(Vt),
ajax: function(e, t) {
"object" == typeof e && (t = e, e = void 0), t = t || {};
var r, i, o, s, u, c, l, f, p, h, d = T.ajaxSetup({}, t), g = d.context || d, v = d.context && (g.nodeType || g.jquery) ? T(g) : T.event, m = T.Deferred(), y = T.Callbacks("once memory"), _ = d.statusCode || {}, b = {}, w = {}, x = "canceled", j = {
readyState: 0,
getResponseHeader: function(e) {
var t;
if (l) {
if (!s) for (s = {}; t = $t.exec(o); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
t = s[e.toLowerCase() + " "];
}
return null == t ? null : t.join(", ");
},
getAllResponseHeaders: function() {
return l ? o : null;
},
setRequestHeader: function(e, t) {
return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), 
this;
},
overrideMimeType: function(e) {
return null == l && (d.mimeType = e), this;
},
statusCode: function(e) {
var t;
if (e) if (l) j.always(e[j.status]); else for (t in e) _[t] = [ _[t], e[t] ];
return this;
},
abort: function(e) {
var t = e || x;
return r && r.abort(t), C(0, t), this;
}
};
if (m.promise(j), d.url = ((e || d.url || St.href) + "").replace(It, St.protocol + "//"), 
d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(G) || [ "" ], 
null == d.crossDomain) {
c = a.createElement("a");
try {
c.href = d.url, c.href = c.href, d.crossDomain = Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host;
} catch (e) {
d.crossDomain = !0;
}
}
if (d.data && d.processData && "string" != typeof d.data && (d.data = T.param(d.data, d.traditional)), 
Qt(Ht, d, t, j), l) return j;
for (p in (f = T.event && d.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), 
d.type = d.type.toUpperCase(), d.hasContent = !Gt.test(d.type), i = d.url.replace(Lt, ""), 
d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Nt, "+")) : (h = d.url.slice(i.length), 
d.data && (d.processData || "string" == typeof d.data) && (i += (Mt.test(i) ? "&" : "?") + d.data, 
delete d.data), !1 === d.cache && (i = i.replace(qt, "$1"), h = (Mt.test(i) ? "&" : "?") + "_=" + At++ + h), 
d.url = i + h), d.ifModified && (T.lastModified[i] && j.setRequestHeader("If-Modified-Since", T.lastModified[i]), 
T.etag[i] && j.setRequestHeader("If-None-Match", T.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && j.setRequestHeader("Content-Type", d.contentType), 
j.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : d.accepts["*"]), 
d.headers) j.setRequestHeader(p, d.headers[p]);
if (d.beforeSend && (!1 === d.beforeSend.call(g, j, d) || l)) return j.abort();
if (x = "abort", y.add(d.complete), j.done(d.success), j.fail(d.error), r = Qt(Vt, d, t, j)) {
if (j.readyState = 1, f && v.trigger("ajaxSend", [ j, d ]), l) return j;
d.async && 0 < d.timeout && (u = n.setTimeout(function() {
j.abort("timeout");
}, d.timeout));
try {
l = !1, r.send(b, C);
} catch (e) {
if (l) throw e;
C(-1, e);
}
} else C(-1, "No Transport");
function C(e, t, s, a) {
var c, p, h, b, w, x = t;
l || (l = !0, u && n.clearTimeout(u), r = void 0, o = a || "", j.readyState = 0 < e ? 4 : 0, 
c = 200 <= e && e < 300 || 304 === e, s && (b = function(e, t, n) {
for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
if (r) for (i in a) if (a[i] && a[i].test(r)) {
u.unshift(i);
break;
}
if (u[0] in n) o = u[0]; else {
for (i in n) {
if (!u[0] || e.converters[i + " " + u[0]]) {
o = i;
break;
}
s || (s = i);
}
o = o || s;
}
if (o) return o !== u[0] && u.unshift(o), n[o];
}(d, j, s)), b = function(e, t, n, r) {
var i, o, s, a, u, c = {}, l = e.dataTypes.slice();
if (l[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
for (o = l.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
!u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
if (!(s = c[u + " " + o] || c["* " + o])) for (i in c) if ((a = i.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
!0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], l.unshift(a[1]));
break;
}
if (!0 !== s) if (s && e.throws) t = s(t); else try {
t = s(t);
} catch (e) {
return {
state: "parsererror",
error: s ? e : "No conversion from " + u + " to " + o
};
}
}
return {
state: "success",
data: t
};
}(d, b, j, c), c ? (d.ifModified && ((w = j.getResponseHeader("Last-Modified")) && (T.lastModified[i] = w), 
(w = j.getResponseHeader("etag")) && (T.etag[i] = w)), 204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = b.state, 
p = b.data, c = !(h = b.error))) : (h = x, !e && x || (x = "error", e < 0 && (e = 0))), 
j.status = e, j.statusText = (t || x) + "", c ? m.resolveWith(g, [ p, x, j ]) : m.rejectWith(g, [ j, x, h ]), 
j.statusCode(_), _ = void 0, f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [ j, d, c ? p : h ]), 
y.fireWith(g, [ j, x ]), f && (v.trigger("ajaxComplete", [ j, d ]), --T.active || T.event.trigger("ajaxStop")));
}
return j;
},
getJSON: function(e, t, n) {
return T.get(e, t, n, "json");
},
getScript: function(e, t) {
return T.get(e, void 0, t, "script");
}
}), T.each([ "get", "post" ], function(e, t) {
T[t] = function(e, n, r, i) {
return _(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
url: e,
type: t,
dataType: i,
data: n,
success: r
}, T.isPlainObject(e) && e));
};
}), T._evalUrl = function(e, t) {
return T.ajax({
url: e,
type: "GET",
dataType: "script",
cache: !0,
async: !1,
global: !1,
converters: {
"text script": function() {}
},
dataFilter: function(e) {
T.globalEval(e, t);
}
});
}, T.fn.extend({
wrapAll: function(e) {
var t;
return this[0] && (_(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), 
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
return e;
}).append(this)), this;
},
wrapInner: function(e) {
return _(e) ? this.each(function(t) {
T(this).wrapInner(e.call(this, t));
}) : this.each(function() {
var t = T(this), n = t.contents();
n.length ? n.wrapAll(e) : t.append(e);
});
},
wrap: function(e) {
var t = _(e);
return this.each(function(n) {
T(this).wrapAll(t ? e.call(this, n) : e);
});
},
unwrap: function(e) {
return this.parent(e).not("body").each(function() {
T(this).replaceWith(this.childNodes);
}), this;
}
}), T.expr.pseudos.hidden = function(e) {
return !T.expr.pseudos.visible(e);
}, T.expr.pseudos.visible = function(e) {
return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}, T.ajaxSettings.xhr = function() {
try {
return new n.XMLHttpRequest();
} catch (e) {}
};
var Xt = {
0: 200,
1223: 204
}, Kt = T.ajaxSettings.xhr();
y.cors = !!Kt && "withCredentials" in Kt, y.ajax = Kt = !!Kt, T.ajaxTransport(function(e) {
var t, r;
if (y.cors || Kt && !e.crossDomain) return {
send: function(i, o) {
var s, a = e.xhr();
if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), 
i) a.setRequestHeader(s, i[s]);
t = function(e) {
return function() {
t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, 
"abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
binary: a.response
} : {
text: a.responseText
}, a.getAllResponseHeaders()));
};
}, a.onload = t(), r = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
4 === a.readyState && n.setTimeout(function() {
t && r();
});
}, t = t("abort");
try {
a.send(e.hasContent && e.data || null);
} catch (i) {
if (t) throw i;
}
},
abort: function() {
t && t();
}
};
}), T.ajaxPrefilter(function(e) {
e.crossDomain && (e.contents.script = !1);
}), T.ajaxSetup({
accepts: {
script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents: {
script: /\b(?:java|ecma)script\b/
},
converters: {
"text script": function(e) {
return T.globalEval(e), e;
}
}
}), T.ajaxPrefilter("script", function(e) {
void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
}), T.ajaxTransport("script", function(e) {
var t, n;
if (e.crossDomain || e.scriptAttrs) return {
send: function(r, i) {
t = T("<script>").attr(e.scriptAttrs || {}).prop({
charset: e.scriptCharset,
src: e.url
}).on("load error", n = function(e) {
t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
}), a.head.appendChild(t[0]);
},
abort: function() {
n && n();
}
};
});
var Yt, Jt = [], Zt = /(=)\?(?=&|$)|\?\?/;
T.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
var e = Jt.pop() || T.expando + "_" + At++;
return this[e] = !0, e;
}
}), T.ajaxPrefilter("json jsonp", function(e, t, r) {
var i, o, s, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = _(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
a ? e[a] = e[a].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
e.converters["script json"] = function() {
return s || T.error(i + " was not called"), s[0];
}, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
s = arguments;
}, r.always(function() {
void 0 === o ? T(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, 
Jt.push(i)), s && _(o) && o(s[0]), s = o = void 0;
}), "script";
}), y.createHTMLDocument = ((Yt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
2 === Yt.childNodes.length), T.parseHTML = function(e, t, n) {
return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, 
t.head.appendChild(r)) : t = a), o = !n && [], (i = P.exec(e)) ? [ t.createElement(i[1]) ] : (i = Te([ e ], t, o), 
o && o.length && T(o).remove(), T.merge([], i.childNodes)));
var r, i, o;
}, T.fn.load = function(e, t, n) {
var r, i, o, s = this, a = e.indexOf(" ");
return -1 < a && (r = xt(e.slice(a)), e = e.slice(0, a)), _(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
0 < s.length && T.ajax({
url: e,
type: i || "GET",
dataType: "html",
data: t
}).done(function(e) {
o = arguments, s.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
}).always(n && function(e, t) {
s.each(function() {
n.apply(this, o || [ e.responseText, t, e ]);
});
}), this;
}, T.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
T.fn[t] = function(e) {
return this.on(t, e);
};
}), T.expr.pseudos.animated = function(e) {
return T.grep(T.timers, function(t) {
return e === t.elem;
}).length;
}, T.offset = {
setOffset: function(e, t, n) {
var r, i, o, s, a, u, c = T.css(e, "position"), l = T(e), f = {};
"static" === c && (e.style.position = "relative"), a = l.offset(), o = T.css(e, "top"), 
u = T.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + u).indexOf("auto") ? (s = (r = l.position()).top, 
i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), _(t) && (t = t.call(e, n, T.extend({}, a))), 
null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), 
"using" in t ? t.using.call(e, f) : l.css(f);
}
}, T.fn.extend({
offset: function(e) {
if (arguments.length) return void 0 === e ? this : this.each(function(t) {
T.offset.setOffset(this, e, t);
});
var t, n, r = this[0];
return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
{
top: t.top + n.pageYOffset,
left: t.left + n.pageXOffset
}) : {
top: 0,
left: 0
} : void 0;
},
position: function() {
if (this[0]) {
var e, t, n, r = this[0], i = {
top: 0,
left: 0
};
if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect(); else {
for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); ) e = e.parentNode;
e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0), 
i.left += T.css(e, "borderLeftWidth", !0));
}
return {
top: t.top - i.top - T.css(r, "marginTop", !0),
left: t.left - i.left - T.css(r, "marginLeft", !0)
};
}
},
offsetParent: function() {
return this.map(function() {
for (var e = this.offsetParent; e && "static" === T.css(e, "position"); ) e = e.offsetParent;
return e || ue;
});
}
}), T.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, t) {
var n = "pageYOffset" === t;
T.fn[e] = function(r) {
return Q(this, function(e, r, i) {
var o;
if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
}, e, r, arguments.length);
};
}), T.each([ "top", "left" ], function(e, t) {
T.cssHooks[t] = ze(y.pixelPosition, function(e, n) {
if (n) return n = Qe(e, t), Be.test(n) ? T(e).position()[t] + "px" : n;
});
}), T.each({
Height: "height",
Width: "width"
}, function(e, t) {
T.each({
padding: "inner" + e,
content: t,
"": "outer" + e
}, function(n, r) {
T.fn[r] = function(i, o) {
var s = arguments.length && (n || "boolean" != typeof i), a = n || (!0 === i || !0 === o ? "margin" : "border");
return Q(this, function(t, n, i) {
var o;
return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, a) : T.style(t, n, i, a);
}, t, s ? i : void 0, s);
};
});
}), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
T.fn[t] = function(e, n) {
return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
};
}), T.fn.extend({
hover: function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
}
}), T.fn.extend({
bind: function(e, t, n) {
return this.on(e, null, t, n);
},
unbind: function(e, t) {
return this.off(e, null, t);
},
delegate: function(e, t, n, r) {
return this.on(t, e, n, r);
},
undelegate: function(e, t, n) {
return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
}
}), T.proxy = function(e, t) {
var n, r, i;
if ("string" == typeof t && (n = e[t], t = e, e = n), _(e)) return r = c.call(arguments, 2), 
(i = function() {
return e.apply(t || this, r.concat(c.call(arguments)));
}).guid = e.guid = e.guid || T.guid++, i;
}, T.holdReady = function(e) {
e ? T.readyWait++ : T.ready(!0);
}, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = F, T.isFunction = _, 
T.isWindow = b, T.camelCase = Y, T.type = j, T.now = Date.now, T.isNumeric = function(e) {
var t = T.type(e);
return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
}, r = [], void 0 === (i = function() {
return T;
}.apply(t, r)) || (e.exports = i);
var en = n.jQuery, tn = n.$;
return T.noConflict = function(e) {
return n.$ === T && (n.$ = tn), e && n.jQuery === T && (n.jQuery = en), T;
}, o || (n.jQuery = n.$ = T), T;
});
}, function(e, t, n) {
"use strict";
function r(e, t) {
let n = i(e, t);
return Object.assign({
source: e,
scheme: "",
host: "",
path: "",
query: "",
fragment: ""
}, n);
}
function i(e, t) {
for (var n, r = "php", i = [ "source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment" ], o, s = [ new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "()", "(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?", "(?:\\/\\/\\/?)?", "((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)", "(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))", "(?:\\?([^#]*))?(?:#(.*))?)" ].join("")) ][0].exec(e), a = {}, u = 14; u--; ) s[u] && (a[i[u]] = s[u]);
if (t) return a[t.replace("PHP_URL_", "").toLowerCase()];
if (0) {
let e = "queryKey", t = /(?:^|&)([^&=]*)=?([^&]*)/g;
a[e] = {}, (n = a[i[12]] || "").replace(t, function(t, n, r) {
n && (a[e][n] = r);
});
}
return delete a.source, a;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.parse_url = t.parse_url2 = void 0, t.parse_url2 = r, t.parse_url = i, t.default = i;
}, function(e, t, n) {
"use strict";
(function(e, r, i) {
Object.defineProperty(t, "__esModule", {
value: !0
}), t.registerGlobalMenu = void 0;
const o = n(10), s = n(19), a = n(21);
function u(t, r, i) {
let u = o.requireScript(t, "index");
a.hasGrant(u.metadata.grant, "registerMenuCommand") ? s.registerMenuCommand({
id: t,
key: "debug jquery"
}, async t => {
try {
c("null", null), c("global", e), c("window", window), c("window.self", window.self), 
c("unsafeWindow", unsafeWindow);
} catch (e) {
console.error(e);
}
try {
"undefined" != typeof exportFunction && console.info("exportFunction", exportFunction);
} catch (e) {
console.error(e);
}
try {
let e;
c("jquery/global", await Promise.resolve().then(() => n(1)));
} catch (e) {
console.error(e);
}
}) : console.info(t, "registerMenuCommand = false");
}
function c(e, t) {
console["groupCollapsed" in console ? "groupCollapsed" : "group"](e);
try {
console.info(e, t), null === t ? (console.info("$", r, r && r.fn && r.fn.jquery), 
console.info("jQuery", i, i && i.fn && i.fn.jquery)) : (console.info(`${e}.$`, t.$, t.$ && t.$.fn && t.$.fn.jquery), 
console.info(`${e}.jQuery`, t.jQuery, t.jQuery && t.jQuery.fn && t.jQuery.fn.jquery));
} catch (t) {
console.error(`${e}`, t.toString());
}
console.groupEnd(e);
}
t.registerGlobalMenu = u, t.default = t;
}).call(this, n(0), n(1).default, n(1).default);
}, function(e, t, n) {
"use strict";
const r = n(20);
e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(4), i = new Map();
function o(e, t, n = []) {
"string" == typeof e && (e = {
label: e
});
const o = s(e), a = async function() {
let r;
console.time(o), console.group(o);
try {
(r = await t(e, ...n)) && !0 !== r && console.info(o, e.fn_name || t.name, [ r.length, r ]);
} catch (e) {
console.error(e);
}
console.groupEnd(o), console.timeEnd(o);
};
return "function" == typeof r.default.registerMenuCommand ? r.default.registerMenuCommand(o, a) : console.warn("GM_registerMenuCommand not a function."), 
i.set(o, a), o;
}
function s(e) {
"string" == typeof e && (e = {
label: e
});
const t = e.label || `[${e.name || e.id}] ${e.key}`;
return t;
}
async function a(e, ...t) {
const n = s(e);
let r = i.get(n);
return r ? await r(...t) : r;
}
function u() {
let e = [];
return i.forEach(function(t, n, r) {
e.push(n);
}), e;
}
t.registerMenuCommand = o, t.getLabel = s, t.callMenuCommand = a, t.listMenuCommand = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.meta_filter = t.makeMetaRow = t.meta_match = t.lazyMetaFix = t.hasGrant = t.parseMetadata = void 0;
const r = n(22);
function i(e) {
let t;
if (t = (e = e.toString()).match(/(^\/\/\s+==UserScript==)/m)) {
let n = t.index;
{
let n = /(^\/\/\s+==\/UserScript==)/m;
n.lastIndex = t.index + t[0].length, t = n.exec(e);
}
let i = (e = e.slice(n, t.index + t[0].length)).split(/\r\n|\r|\n/).filter(function(e, t, n) {
return /^\/\/\s*@/g.test(e);
}).reduce(function(e, t) {
let n = /^\/\/[\s\t]*@([a-z:]+)(?:[\s\t]+(.+))?(?:[\s\t]+)?$/i.exec(t.trim("\t ")), r = n[1], i = n[2];
return i && (i = i.trim("\t ")), e[r] = e[r] || [], -1 == e[r].indexOf(i) && e[r].push(i), 
e;
}, {});
return i = Object.assign({
name: []
}, i, {
grant: [],
include: [],
exclude: [],
noframes: []
}, i), [ "include", "match", "exclude", "grant" ].forEach(function(e) {
i[e] && (i[e] = i[e].length ? c(r.array_unique(i[e])) : []);
}), i.grant.sort(), i;
}
}
function o(e, t) {
return !(!e.includes("GM." + t) && !e.includes("GM_" + t));
}
function s(e) {
return e.noframes && e.noframes.length && "no" == e.noframes[0] && (e.noframes = []), 
e.grant && e.grant.length && (e.grant.forEach(function(t, n, r) {
let i;
(i = /^GM[\.\_](.+)$/.exec(t)) && (e.grant.push("GM." + i[1]), e.grant.push("GM_" + i[1]));
}), [ [ "getValue", "setValue", "deleteValue", "listValues" ], [ "getResourceUrl", "getResourceURL" ], [ "getTab", "saveTab", "getTabs" ], [ "addValueChangeListener", "removeValueChangeListener" ], [ "registerMenuCommand", "unregisterMenuCommand" ] ].forEach(function(t) {
t = Array.isArray(t) ? t : [ t ];
for (let n of t) if (e.grant.includes("GM." + n) || e.grant.includes("GM_" + n)) {
e.grant = e.grant.concat(t.map(function(e) {
return "GM." + e;
})).concat(t.map(function(e) {
return "GM_" + e;
}));
break;
}
})), e.match && (e.match = a(e.match)), [ "include", "match", "exclude", "grant" ].forEach(function(t) {
e[t] && (e[t] = e[t].length ? c(r.array_unique(e[t])) : []);
}), e.grant && e.grant.length && e.grant.sort(), e;
}
function a(e) {
return e.map(function(e, t, n) {
return e.replace(/^.*(\:\/\/)/, "*$1");
});
}
function u(e, t, n = !1, r = "\t\t", i = "// ", o = "\n") {
let s = "", a = `${i}@${e}${r}`;
return Array.isArray(t) ? s = t.join(`${o}${a}`) : void 0 !== t && (s = t.toString()), 
n && (s = a + s), s;
}
function c(e) {
return e.filter(function(e, t, n) {
return !!e;
});
}
t.parseMetadata = i, t.hasGrant = o, t.lazyMetaFix = s, t.meta_match = a, t.makeMetaRow = u, 
t.meta_filter = c, t.default = t;
}, function(e, t, n) {
"use strict";
function r(e) {
return e.filter(function(e, t, n) {
return t == n.indexOf(e);
});
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.array_unique = void 0, t.array_unique = r, t.default = r;
}, function(e, t, n) {
var r = {
"./gamer-auto-signin/": 5,
"./gamer-auto-signin/gamer/ajax": 6,
"./gamer-auto-signin/gamer/ajax.js": 6,
"./gamer-auto-signin/index": 5,
"./gamer-auto-signin/index.js": 5,
"./gamer-auto-signin/index.user": 2,
"./gamer-auto-signin/index.user.js": 2,
"./gamer-auto-signin/lib/metadata": 15,
"./gamer-auto-signin/lib/metadata.js": 15,
"./gamer-auto-signin/novel/sfacg": 9,
"./gamer-auto-signin/novel/sfacg.js": 9
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
i.keys = function e() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 23;
}, function(e, t, n) {
e.exports = v, v.Minimatch = m;
var r = {
sep: "/"
};
try {
r = n(25);
} catch (e) {}
var i = v.GLOBSTAR = m.GLOBSTAR = {}, o = n(26), s = {
"!": {
open: "(?:(?!(?:",
close: "))[^/]*?)"
},
"?": {
open: "(?:",
close: ")?"
},
"+": {
open: "(?:",
close: ")+"
},
"*": {
open: "(?:",
close: ")*"
},
"@": {
open: "(?:",
close: ")"
}
}, a = "[^/]", u = a + "*?", c = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", l = "(?:(?!(?:\\/|^)\\.).)*?", f = p("().*{}+?[]^$\\!");
function p(e) {
return e.split("").reduce(function(e, t) {
return e[t] = !0, e;
}, {});
}
var h = /\/+/;
function d(e, t) {
return t = t || {}, function(n, r, i) {
return v(n, e, t);
};
}
function g(e, t) {
e = e || {}, t = t || {};
var n = {};
return Object.keys(t).forEach(function(e) {
n[e] = t[e];
}), Object.keys(e).forEach(function(t) {
n[t] = e[t];
}), n;
}
function v(e, t, n) {
if ("string" != typeof t) throw new TypeError("glob pattern string required");
return n || (n = {}), !(!n.nocomment && "#" === t.charAt(0)) && ("" === t.trim() ? "" === e : new m(t, n).match(e));
}
function m(e, t) {
if (!(this instanceof m)) return new m(e, t);
if ("string" != typeof e) throw new TypeError("glob pattern string required");
t || (t = {}), e = e.trim(), "/" !== r.sep && (e = e.split(r.sep).join("/")), this.options = t, 
this.set = [], this.pattern = e, this.regexp = null, this.negate = !1, this.comment = !1, 
this.empty = !1, this.make();
}
function y() {
if (!this._made) {
var e = this.pattern, t = this.options;
if (t.nocomment || "#" !== e.charAt(0)) if (e) {
this.parseNegate();
var n = this.globSet = this.braceExpand();
t.debug && (this.debug = console.error), this.debug(this.pattern, n), n = this.globParts = n.map(function(e) {
return e.split(h);
}), this.debug(this.pattern, n), n = n.map(function(e, t, n) {
return e.map(this.parse, this);
}, this), this.debug(this.pattern, n), n = n.filter(function(e) {
return -1 === e.indexOf(!1);
}), this.debug(this.pattern, n), this.set = n;
} else this.empty = !0; else this.comment = !0;
}
}
function _() {
var e = this.pattern, t = !1, n, r = 0;
if (!this.options.nonegate) {
for (var i = 0, o = e.length; i < o && "!" === e.charAt(i); i++) t = !t, r++;
r && (this.pattern = e.substr(r)), this.negate = t;
}
}
function b(e, t) {
if (t || (t = this instanceof m ? this.options : {}), void 0 === (e = void 0 === e ? this.pattern : e)) throw new TypeError("undefined pattern");
return t.nobrace || !e.match(/\{.*\}/) ? [ e ] : o(e);
}
v.filter = d, v.defaults = function(e) {
if (!e || !Object.keys(e).length) return v;
var t = v, n = function n(r, i, o) {
return t.minimatch(r, i, g(e, o));
};
return n.Minimatch = function n(r, i) {
return new t.Minimatch(r, g(e, i));
}, n;
}, m.defaults = function(e) {
return e && Object.keys(e).length ? v.defaults(e).Minimatch : m;
}, m.prototype.debug = function() {}, m.prototype.make = y, m.prototype.parseNegate = _, 
v.braceExpand = function(e, t) {
return b(e, t);
}, m.prototype.braceExpand = b, m.prototype.parse = x;
var w = {};
function x(e, t) {
if (e.length > 65536) throw new TypeError("pattern is too long");
var n = this.options;
if (!n.noglobstar && "**" === e) return i;
if ("" === e) return "";
var r = "", o = !!n.nocase, c = !1, l = [], p = [], h, d = !1, g = -1, v = -1, m = "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", y = this;
function _() {
if (h) {
switch (h) {
case "*":
r += u, o = !0;
break;

case "?":
r += a, o = !0;
break;

default:
r += "\\" + h;
break;
}
y.debug("clearStateChar %j %j", h, r), h = !1;
}
}
for (var b = 0, x = e.length, j; b < x && (j = e.charAt(b)); b++) if (this.debug("%s\t%s %s %j", e, b, r, j), 
c && f[j]) r += "\\" + j, c = !1; else switch (j) {
case "/":
return !1;

case "\\":
_(), c = !0;
continue;

case "?":
case "*":
case "+":
case "@":
case "!":
if (this.debug("%s\t%s %s %j <-- stateChar", e, b, r, j), d) {
this.debug("  in class"), "!" === j && b === v + 1 && (j = "^"), r += j;
continue;
}
y.debug("call clearStateChar %j", h), _(), h = j, n.noext && _();
continue;

case "(":
if (d) {
r += "(";
continue;
}
if (!h) {
r += "\\(";
continue;
}
l.push({
type: h,
start: b - 1,
reStart: r.length,
open: s[h].open,
close: s[h].close
}), r += "!" === h ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", h, r), h = !1;
continue;

case ")":
if (d || !l.length) {
r += "\\)";
continue;
}
_(), o = !0;
var C = l.pop();
r += C.close, "!" === C.type && p.push(C), C.reEnd = r.length;
continue;

case "|":
if (d || !l.length || c) {
r += "\\|", c = !1;
continue;
}
_(), r += "|";
continue;

case "[":
if (_(), d) {
r += "\\" + j;
continue;
}
d = !0, v = b, g = r.length, r += j;
continue;

case "]":
if (b === v + 1 || !d) {
r += "\\" + j, c = !1;
continue;
}
if (d) {
var E = e.substring(v + 1, b);
try {
RegExp("[" + E + "]");
} catch (e) {
var k = this.parse(E, w);
r = r.substr(0, g) + "\\[" + k[0] + "\\]", o = o || k[1], d = !1;
continue;
}
}
o = !0, d = !1, r += j;
continue;

default:
_(), c ? c = !1 : !f[j] || "^" === j && d || (r += "\\"), r += j;
}
for (d && (E = e.substr(v + 1), k = this.parse(E, w), r = r.substr(0, g) + "\\[" + k[0], 
o = o || k[1]), C = l.pop(); C; C = l.pop()) {
var S = r.slice(C.reStart + C.open.length);
this.debug("setting tail", r, C), S = S.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
return n || (n = "\\"), t + t + n + "|";
}), this.debug("tail=%j\n   %s", S, S, C, r);
var A = "*" === C.type ? u : "?" === C.type ? a : "\\" + C.type;
o = !0, r = r.slice(0, C.reStart) + A + "\\(" + S;
}
_(), c && (r += "\\\\");
var M = !1;
switch (r.charAt(0)) {
case ".":
case "[":
case "(":
M = !0;
}
for (var O = p.length - 1; O > -1; O--) {
var F = p[O], P = r.slice(0, F.reStart), R = r.slice(F.reStart, F.reEnd - 8), D = r.slice(F.reEnd - 8, F.reEnd), N = r.slice(F.reEnd);
D += N;
var L = P.split("(").length - 1, q = N;
for (b = 0; b < L; b++) q = q.replace(/\)[+*?]?/, "");
var $ = "", G;
"" === (N = q) && t !== w && ($ = "$"), r = P + R + N + $ + D;
}
if ("" !== r && o && (r = "(?=.)" + r), M && (r = m + r), t === w) return [ r, o ];
if (!o) return T(e);
var I = n.nocase ? "i" : "";
try {
var H = new RegExp("^" + r + "$", I);
} catch (e) {
return new RegExp("$.");
}
return H._glob = e, H._src = r, H;
}
function j() {
if (this.regexp || !1 === this.regexp) return this.regexp;
var e = this.set;
if (!e.length) return this.regexp = !1, this.regexp;
var t = this.options, n = t.noglobstar ? u : t.dot ? c : l, r = t.nocase ? "i" : "", o = e.map(function(e) {
return e.map(function(e) {
return e === i ? n : "string" == typeof e ? E(e) : e._src;
}).join("\\/");
}).join("|");
o = "^(?:" + o + ")$", this.negate && (o = "^(?!" + o + ").*$");
try {
this.regexp = new RegExp(o, r);
} catch (e) {
this.regexp = !1;
}
return this.regexp;
}
function C(e, t) {
if (this.debug("match", e, this.pattern), this.comment) return !1;
if (this.empty) return "" === e;
if ("/" === e && t) return !0;
var n = this.options;
"/" !== r.sep && (e = e.split(r.sep).join("/")), e = e.split(h), this.debug(this.pattern, "split", e);
var i = this.set, o, s;
for (this.debug(this.pattern, "set", i), s = e.length - 1; s >= 0 && !(o = e[s]); s--) ;
for (s = 0; s < i.length; s++) {
var a = i[s], u = e, c;
if (n.matchBase && 1 === a.length && (u = [ o ]), this.matchOne(u, a, t)) return !!n.flipNegate || !this.negate;
}
return !n.flipNegate && this.negate;
}
function T(e) {
return e.replace(/\\(.)/g, "$1");
}
function E(e) {
return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
v.makeRe = function(e, t) {
return new m(e, t || {}).makeRe();
}, m.prototype.makeRe = j, v.match = function(e, t, n) {
var r = new m(t, n = n || {});
return e = e.filter(function(e) {
return r.match(e);
}), r.options.nonull && !e.length && e.push(t), e;
}, m.prototype.match = C, m.prototype.matchOne = function(e, t, n) {
var r = this.options, o;
this.debug("matchOne", {
this: this,
file: e,
pattern: t
}), this.debug("matchOne", e.length, t.length);
for (var s = 0, a = 0, u = e.length, c = t.length; s < u && a < c; s++, a++) {
this.debug("matchOne loop");
var l = t[a], f = e[s], p;
if (this.debug(t, l, f), !1 === l) return !1;
if (l === i) {
this.debug("GLOBSTAR", [ t, l, f ]);
var h = s, d = a + 1;
if (d === c) {
for (this.debug("** at the end"); s < u; s++) if ("." === e[s] || ".." === e[s] || !r.dot && "." === e[s].charAt(0)) return !1;
return !0;
}
for (;h < u; ) {
var g = e[h];
if (this.debug("\nglobstar while", e, h, t, d, g), this.matchOne(e.slice(h), t.slice(d), n)) return this.debug("globstar found match!", h, u, g), 
!0;
if ("." === g || ".." === g || !r.dot && "." === g.charAt(0)) {
this.debug("dot detected!", e, h, t, d);
break;
}
this.debug("globstar swallow a segment, and continue"), h++;
}
return !(!n || (this.debug("\n>>> no match, partial?", e, h, t, d), h !== u));
}
if ("string" == typeof l ? (p = r.nocase ? f.toLowerCase() === l.toLowerCase() : f === l, 
this.debug("string match", l, f, p)) : (p = f.match(l), this.debug("pattern match", l, f, p)), 
!p) return !1;
}
if (s === u && a === c) return !0;
if (s === u) return n;
if (a === c) return s === u - 1 && "" === e[s];
throw new Error("wtf?");
};
}, function(e, t, n) {
(function(e) {
function n(e, t) {
for (var n = 0, r = e.length - 1; r >= 0; r--) {
var i = e[r];
"." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), 
n--);
}
if (t) for (;n--; n) e.unshift("..");
return e;
}
var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, i = function(e) {
return r.exec(e).slice(1);
};
function o(e, t) {
if (e.filter) return e.filter(t);
for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
return n;
}
t.resolve = function() {
for (var t = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
var s = i >= 0 ? arguments[i] : e.cwd();
if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
s && (t = s + "/" + t, r = "/" === s.charAt(0));
}
return (r ? "/" : "") + (t = n(o(t.split("/"), function(e) {
return !!e;
}), !r).join("/")) || ".";
}, t.normalize = function(e) {
var r = t.isAbsolute(e), i = "/" === s(e, -1);
return (e = n(o(e.split("/"), function(e) {
return !!e;
}), !r).join("/")) || r || (e = "."), e && i && (e += "/"), (r ? "/" : "") + e;
}, t.isAbsolute = function(e) {
return "/" === e.charAt(0);
}, t.join = function() {
var e = Array.prototype.slice.call(arguments, 0);
return t.normalize(o(e, function(e, t) {
if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
return e;
}).join("/"));
}, t.relative = function(e, n) {
function r(e) {
for (var t = 0; t < e.length && "" === e[t]; t++) ;
for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) ;
return t > n ? [] : e.slice(t, n - t + 1);
}
e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
for (var i = r(e.split("/")), o = r(n.split("/")), s = Math.min(i.length, o.length), a = s, u = 0; u < s; u++) if (i[u] !== o[u]) {
a = u;
break;
}
for (var c = [], u = a; u < i.length; u++) c.push("..");
return (c = c.concat(o.slice(a))).join("/");
}, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
var t = i(e), n = t[0], r = t[1];
return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
}, t.basename = function(e, t) {
var n = i(e)[2];
return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), 
n;
}, t.extname = function(e) {
return i(e)[3];
};
var s = "b" === "ab".substr(-1) ? function(e, t, n) {
return e.substr(t, n);
} : function(e, t, n) {
return t < 0 && (t = e.length + t), e.substr(t, n);
};
}).call(this, n(7));
}, function(e, t, n) {
var r = n(27), i = n(28);
e.exports = d;
var o = "\0SLASH" + Math.random() + "\0", s = "\0OPEN" + Math.random() + "\0", a = "\0CLOSE" + Math.random() + "\0", u = "\0COMMA" + Math.random() + "\0", c = "\0PERIOD" + Math.random() + "\0";
function l(e) {
return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function f(e) {
return e.split("\\\\").join(o).split("\\{").join(s).split("\\}").join(a).split("\\,").join(u).split("\\.").join(c);
}
function p(e) {
return e.split(o).join("\\").split(s).join("{").split(a).join("}").split(u).join(",").split(c).join(".");
}
function h(e) {
if (!e) return [ "" ];
var t = [], n = i("{", "}", e);
if (!n) return e.split(",");
var r = n.pre, o = n.body, s = n.post, a = r.split(",");
a[a.length - 1] += "{" + o + "}";
var u = h(s);
return s.length && (a[a.length - 1] += u.shift(), a.push.apply(a, u)), t.push.apply(t, a), 
t;
}
function d(e) {
return e ? ("{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2)), b(f(e), !0).map(p)) : [];
}
function g(e) {
return e;
}
function v(e) {
return "{" + e + "}";
}
function m(e) {
return /^-?0\d/.test(e);
}
function y(e, t) {
return e <= t;
}
function _(e, t) {
return e >= t;
}
function b(e, t) {
var n = [], o = i("{", "}", e);
if (!o || /\$$/.test(o.pre)) return [ e ];
var s = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body), u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body), c = s || u, f = o.body.indexOf(",") >= 0, p, d;
if (!c && !f) return o.post.match(/,.*\}/) ? b(e = o.pre + "{" + o.body + a + o.post) : [ e ];
if (c) p = o.body.split(/\.\./); else if (1 === (p = h(o.body)).length && 1 === (p = b(p[0], !1).map(v)).length) return (d = o.post.length ? b(o.post, !1) : [ "" ]).map(function(e) {
return o.pre + p[0] + e;
});
var g = o.pre, d = o.post.length ? b(o.post, !1) : [ "" ], w;
if (c) {
var x = l(p[0]), j = l(p[1]), C = Math.max(p[0].length, p[1].length), T = 3 == p.length ? Math.abs(l(p[2])) : 1, E = y, k;
j < x && (T *= -1, E = _);
var S = p.some(m);
w = [];
for (var A = x; E(A, j); A += T) {
var M;
if (u) "\\" === (M = String.fromCharCode(A)) && (M = ""); else if (M = String(A), 
S) {
var O = C - M.length;
if (O > 0) {
var F = new Array(O + 1).join("0");
M = A < 0 ? "-" + F + M.slice(1) : F + M;
}
}
w.push(M);
}
} else w = r(p, function(e) {
return b(e, !1);
});
for (var P = 0; P < w.length; P++) for (var R = 0; R < d.length; R++) {
var D = g + w[P] + d[R];
(!t || c || D) && n.push(D);
}
return n;
}
}, function(e, t) {
e.exports = function(e, t) {
for (var r = [], i = 0; i < e.length; i++) {
var o = t(e[i], i);
n(o) ? r.push.apply(r, o) : r.push(o);
}
return r;
};
var n = Array.isArray || function(e) {
return "[object Array]" === Object.prototype.toString.call(e);
};
}, function(e, t, n) {
"use strict";
function r(e, t, n) {
e instanceof RegExp && (e = i(e, n)), t instanceof RegExp && (t = i(t, n));
var r = o(e, t, n);
return r && {
start: r[0],
end: r[1],
pre: n.slice(0, r[0]),
body: n.slice(r[0] + e.length, r[1]),
post: n.slice(r[1] + t.length)
};
}
function i(e, t) {
var n = t.match(e);
return n ? n[0] : null;
}
function o(e, t, n) {
var r, i, o, s, a, u = n.indexOf(e), c = n.indexOf(t, u + 1), l = u;
if (u >= 0 && c > 0) {
for (r = [], o = n.length; l >= 0 && !a; ) l == u ? (r.push(l), u = n.indexOf(e, l + 1)) : 1 == r.length ? a = [ r.pop(), c ] : ((i = r.pop()) < o && (o = i, 
s = c), c = n.indexOf(t, l + 1)), l = u < c && u >= 0 ? u : c;
r.length && (a = [ o, s ]);
}
return a;
}
e.exports = r, r.range = o;
}, function(e, t, n) {
(function(e) {
var r = void 0 !== e && e || "undefined" != typeof self && self || window, i = Function.prototype.apply;
function o(e, t) {
this._id = e, this._clearFn = t;
}
t.setTimeout = function() {
return new o(i.call(setTimeout, r, arguments), clearTimeout);
}, t.setInterval = function() {
return new o(i.call(setInterval, r, arguments), clearInterval);
}, t.clearTimeout = t.clearInterval = function(e) {
e && e.close();
}, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
this._clearFn.call(r, this._id);
}, t.enroll = function(e, t) {
clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
}, t.unenroll = function(e) {
clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
}, t._unrefActive = t.active = function(e) {
clearTimeout(e._idleTimeoutId);
var t = e._idleTimeout;
t >= 0 && (e._idleTimeoutId = setTimeout(function t() {
e._onTimeout && e._onTimeout();
}, t));
}, n(30), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, 
t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
}).call(this, n(0));
}, function(e, t, n) {
(function(e, t) {
!function(e, n) {
"use strict";
if (!e.setImmediate) {
var r = 1, i = {}, o = !1, s = e.document, a, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
u = u && u.setTimeout ? u : e, "[object process]" === {}.toString.call(e.process) ? h() : d() ? g() : e.MessageChannel ? v() : s && "onreadystatechange" in s.createElement("script") ? m() : y(), 
u.setImmediate = c, u.clearImmediate = l;
}
function c(e) {
"function" != typeof e && (e = new Function("" + e));
for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
var o = {
callback: e,
args: t
};
return i[r] = o, a(r), r++;
}
function l(e) {
delete i[e];
}
function f(e) {
var t = e.callback, r = e.args;
switch (r.length) {
case 0:
t();
break;

case 1:
t(r[0]);
break;

case 2:
t(r[0], r[1]);
break;

case 3:
t(r[0], r[1], r[2]);
break;

default:
t.apply(n, r);
break;
}
}
function p(e) {
if (o) setTimeout(p, 0, e); else {
var t = i[e];
if (t) {
o = !0;
try {
f(t);
} finally {
l(e), o = !1;
}
}
}
}
function h() {
a = function(e) {
t.nextTick(function() {
p(e);
});
};
}
function d() {
if (e.postMessage && !e.importScripts) {
var t = !0, n = e.onmessage;
return e.onmessage = function() {
t = !1;
}, e.postMessage("", "*"), e.onmessage = n, t;
}
}
function g() {
var t = "setImmediate$" + Math.random() + "$", n = function(n) {
n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && p(+n.data.slice(t.length));
};
e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), 
a = function(n) {
e.postMessage(t + n, "*");
};
}
function v() {
var e = new MessageChannel();
e.port1.onmessage = function(e) {
var t;
p(e.data);
}, a = function(t) {
e.port2.postMessage(t);
};
}
function m() {
var e = s.documentElement;
a = function(t) {
var n = s.createElement("script");
n.onreadystatechange = function() {
p(t), n.onreadystatechange = null, e.removeChild(n), n = null;
}, e.appendChild(n);
};
}
function y() {
a = function(e) {
setTimeout(p, 0, e);
};
}
}("undefined" == typeof self ? void 0 === e ? this : e : self);
}).call(this, n(0), n(7));
}, function(e, t, n) {
"use strict";
function r(e, t) {
for (;e.length < t; ) e = "0" + e;
return e;
}
function i(e, t) {
var n, r, i;
if (0 === t.length) return e;
for (n = 0, i = t.length; n < i; n++) e = (e << 5) - e + (r = t.charCodeAt(n)), 
e |= 0;
return e < 0 ? -2 * e : e;
}
function o(e, t, n) {
return Object.keys(t).sort().reduce(r, e);
function r(e, r) {
return s(e, t[r], r, n);
}
}
function s(e, t, n, r) {
var s = i(i(i(e, n), a(t)), typeof t);
return null === t ? i(s, "null") : void 0 === t ? i(s, "undefined") : "object" == typeof t ? -1 !== r.indexOf(t) ? i(s, "[Circular]" + n) : (r.push(t), 
o(s, t, r)) : i(s, t.toString());
}
function a(e) {
return Object.prototype.toString.call(e);
}
function u(e) {
return r(s(0, e, "", []).toString(16), 8);
}
e.exports = u;
}, function(e, t, n) {
"use strict";
const r = n(4);
e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.signin = void 0;
const r = n(14), i = n(3);
async function o(e) {
let t = {
method: "POST",
headers: {
"Access-Control-Allow-Origin": "*"
},
dataType: "json"
};
return r.default.ajax("https://www.gamer.com.tw/ajax/signin.php?_2", Object.assign({}, t, {
data: {
action: 2
}
})).then(function(n) {
return n && n.response && (e || 0 == n.response.signin) ? r.default.ajax("https://www.gamer.com.tw/ajax/get_csrf_token.php", Object.assign({}, t, {
data: {
_: Date.now()
},
dataType: "text"
})).then(function(e) {
return e && e.response ? r.default.ajax("https://www.gamer.com.tw/ajax/signin.php?_1", Object.assign({}, t, {
data: {
action: 1,
token: e.response
}
})).then(function(e) {
return e && e.response && e.response.nowd == e.response.days ? (i.default.log(`[${e.response.nowd}] ${e.response.message}`, e), 
e) : Promise.reject(new Error(e));
}) : (i.default.error("無法取得 token", e), Promise.reject(new Error(e)));
}) : n && n.response && 1 == n.response.signin ? (i.default.log("已經簽到過", n), n) : Promise.reject(new Error(n));
}).then(function(e) {
return !e || !0 !== e && !e.response ? Promise.reject(new Error(e)) : e;
}).catch(e => i.default.error(e));
}
t.signin = o, t.default = o;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(4), i = n(8);
function o(e) {
let t = Object.assign({
method: "GET"
}, e);
return t.xhrFields && Object.assign(t, t.xhrFields), t;
}
function s(e, n) {
if ((n = o(n)).url = e, n.data && "object" == typeof n.data && !(n.data instanceof FormData)) {
let e = new FormData();
for (let t in n.data) e.append(t, n.data[t]);
n.data = e;
}
return new i(function(e, r) {
t.GM_XHR(Object.assign({}, n, {
onload: function(t) {
e(t);
},
onerror: r
}));
}).then(function(e) {
if ("json" == n.dataType && (e.responseOriginal = e.response, e.response = JSON.parse(e.responseText)), 
e.responseType = e.responseType || n.dataType || null, "function" == typeof n.onload) {
let t = n.onload.call(this, e);
if (void 0 !== t) return t;
}
return e;
});
}
function a(e, t = Error) {
let n = new t(e);
return n.res = e, n;
}
t.GM_XHR = r.default.xmlhttpRequest, t.makeOptions = o, t.ajax = s, t.AjaxError = a, 
t.default = t;
} ]);