// ==UserScript==
// @name		pan-baidu-download
// @name:en		pan-baidu-download
// @name:zh		pan-baidu-download
// @namespace	bluelovers
// @author		bluelovers
//
// @description		直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址
// @description:en	直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址
// @description:zh	直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址
//
// @version		4.5.0
//
// @grant		GM.setClipboard
// @grant		GM_setClipboard
// @grant		unsafeWindow
// g_r_a_n_tnone
//
// @icon		https://wiki.greasespot.net/favicon.ico
//
// @noframes
// @encoding	utf-8
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/pan-baidu-download.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/pan-baidu-download.user.js
//
// @include		http*://pan.baidu.com/s/*
//
// @match		*://pan.baidu.com/disk/home*
// @match		*://yun.baidu.com/disk/home*
// @match		*://pan.baidu.com/s/*
// @match		*://yun.baidu.com/s/*
// @match		*://pan.baidu.com/share/link*
// @match		*://yun.baidu.com/share/link*
//
// @exclude		
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
}, n.p = "", n(n.s = 3);
}([ function(e, t, n) {
"use strict";
(function(e) {
Object.defineProperty(t, "__esModule", {
value: !0
}), console["groupCollapsed" in console ? "groupCollapsed" : "group"]("before");
let r = {};
const i = !1;
try {
r.$ = unsafeWindow.$, r.jQuery = unsafeWindow.jQuery;
} catch (e) {
console.error(e);
}
console.groupEnd("before");
const o = n(12), a = o.noConflict(!0);
t.jQuery = a, t.$ = a, window.self.$ = window.self.jQuery = a, t.default = a, console["groupCollapsed" in console ? "groupCollapsed" : "group"]("after");
try {} catch (e) {
console.error(e);
}
console.groupEnd("after"), console["groupCollapsed" in console ? "groupCollapsed" : "group"]("end");
try {
r.$ && r.$ !== unsafeWindow.self.$ && (unsafeWindow.self.$ = r.$), r.jQuery && r.jQuery !== unsafeWindow.self.jQuery && (unsafeWindow.self.jQuery = r.jQuery);
} catch (e) {
console.error(e);
}
function s(e, n) {
console["groupCollapsed" in console ? "groupCollapsed" : "group"](e);
try {
console.info(e, n), null === n ? (console.info("$", t.$, t.$ && t.$.fn && t.$.fn.jquery), 
console.info("jQuery", a, a && a.fn && a.fn.jquery)) : (console.info(`${e}.$`, n.$, n.$ && n.$.fn && n.$.fn.jquery), 
console.info(`${e}.jQuery`, n.jQuery, n.jQuery && n.jQuery.fn && n.jQuery.fn.jquery));
} catch (t) {
console.error(`${e}`, t.toString());
}
console.groupEnd(e);
}
console.groupEnd("end");
}).call(this, n(1));
}, function(e, t) {
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
e.exports.id = "pan-baidu-download", e.exports.version = "", e.exports.name = "pan-baidu-download", 
e.exports.name_en = "pan-baidu-download", e.exports.name_ja = "pan-baidu-download", 
e.exports.desc = "直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址", e.exports.desc_en = "直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址", 
e.exports.desc_ja = "直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址", e.exports.namespace = "", 
e.exports.author = "", e.exports.icon = "", e.exports.list = [ "site/pan.baidu" ], 
e.exports.list_disable = [], e.exports._lib = (() => {
n(5);
}), e.exports.metadata = {}, e.exports.metadata.include = [ "http*://pan.baidu.com/s/*" ], 
e.exports.metadata.match = [ "*://pan.baidu.com/disk/home*", "*://yun.baidu.com/disk/home*", "*://pan.baidu.com/s/*", "*://yun.baidu.com/s/*", "*://pan.baidu.com/share/link*", "*://yun.baidu.com/share/link*" ], 
e.exports.metadata.exclude = [], e.exports.metadata.grant = [ "GM.setClipboard", "GM_setClipboard", "unsafeWindow" ], 
e.exports.list_script = [], e.exports.current = [], e.exports.default = e.exports;
}, function(e, t, n) {
"use strict";
(function(r) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(6), o = n(2);
e.exports.id = o.default.id, e.exports.name = e.exports.id, i.run(e.exports.id, e.exports, r, function(e, t, n, r, o, a) {
i.init(e, t, n, r, o, a);
});
}).call(this, n(0).default);
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
}), t.GM_addStyle = r;
const i = n(4);
t.default = i;
}, function(e, t, n) {
"use strict";
(function(t, r) {
let i = {
metadata: {
include: [ "http*://pan.baidu.com/s/*" ],
match: [ "*://pan.baidu.com/disk/home*", "*://yun.baidu.com/disk/home*", "*://pan.baidu.com/s/*", "*://yun.baidu.com/s/*", "*://pan.baidu.com/share/link*", "*://yun.baidu.com/share/link*" ],
nomatch: [],
exclude: [],
grant: [ "GM_setClipboard", "unsafeWindow" ]
},
test(r = t._url_obj) {
let i;
return !!(i = n(18).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
let {detectPage: i, PanHelper: o, PanShareHelper: a, init: s} = n(25);
r(function() {
s(r, e);
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let i = r(n);
return i = i.add([].join());
}
};
e.exports = i;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(e, r, i) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const o = n(13), a = n(7);
t.greasemonkey = a.default;
const s = n(8);
function l(t, n, i, o) {
let a = async () => {
try {
o ? await o(t, n, e, window, i, window.location.href) : await c(t, n, e, window, i, window.location.href);
const r = f(t, "index");
await h(t, r, r.list), console.info(t, "index.current", r.current);
} catch (e) {
console.error(t, e.message), console.error(e.stack), console.trace(e.message);
} finally {
console.info(t, [ e._url, e._url_obj, e.unsafeWindow ]);
}
try {
await s.registerGlobalMenu(t, n);
} catch (e) {
console.error(t, e.message, e.stack);
}
};
r(() => {
a();
});
}
function u(t, n = e, r, i) {
if (i || !n._url || n._url != t) {
const e = n._url;
return n._url_old = e, n._url = t.toString(), n._url_obj = o.parse_url2(n._url), 
"function" == typeof r && r(n._url, n, e), n;
}
}
function c(e, t, n, r, i, o) {
d(o = o || r.location.href, t), d(o, n), n.userScript = t;
}
function d(e, t) {
let n;
return u(e, t, function(e, t, n) {
t._url_obj.source = t._url_obj._source = e, t._url_obj_ = Object.assign({}, t._url_obj);
}, !0);
}
function f(e, t) {
return n(17)(`./${e}/${t}`);
}
function p(e, t, n) {
let r;
return t.list_script.reduce(function(t, r) {
let i = f(e, r), o = r;
return i.name && i.name != o && (o = `${i.name} - ${o}`), i.script_method && i.script_method.clearly && i.test(n) && t.push({
name: r,
name_id: o,
lib: i
}), t;
}, []).concat(t.current);
}
async function h(t, n, r, i = {}) {
let o;
console.time(n.name), console.group(n.name);
for (let i of r) {
const r = f(t, i);
r.file = i;
let s = i;
if (r.name && r.name != s && (s = `${r.name} - ${s}`), s = `[${s}]`, r.name = r.name || i, 
r.name_id = s || r.name_id || r.name, o && !r.script) continue;
if (r.disable && !0 !== r.disable) {
console.info(n.id, s, `disable = ${r.disable}, skip this`);
continue;
}
if (r.disable) {
console.warn(n.id, s, "disable, skip this");
continue;
}
let l = !0, u, c;
console.time(i), console.group(i), u = await r.test(e._url_obj), a.default.info(n.id, s, "test", u), 
o && 2 !== u ? a.default.info(n.id, s, "break:test", u) : (u && (1 == (c = await r.main(e._url_obj)) || void 0 === c ? (c = !0, 
a.default.info(n.id, s, "matched", c, l)) : a.default.debug(n.id, s, "main", c), 
c && (l = !1, u && !0 !== u && (l = !0), a.default.debug(n.id, s, "chk", c, l, u))), 
l && !u || (a.default.debug(n.id, s, "current:push", c, l, u), n.current.push({
name: i,
name_id: s,
lib: r
}))), console.groupEnd(i), console.timeEnd(i), o || l || (a.default.debug(n.id, s, "break", c, l, u), 
o = !0);
}
console.groupEnd(n.name), console.timeEnd(n.name);
}
async function g(t, n, r = {}) {
const i = t.id;
let o;
for (let r of n) {
const n = f(i, r);
n.file = r;
let o = r;
n.name && n.name != o && (o = `${n.name} - ${o}`), o = `[${o}]`, n.name = n.name || r, 
n.name_id = o || n.name_id || n.name;
let s = !0, l, u;
if (l = await n.test(e._url_obj), a.default.info(t.id, o, "test", l), l) return u = await n.main(e._url_obj), 
a.default.debug(t.id, o, "main", u), n;
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
t.run = l, t.url = u, t.init = c, t.requireScript = f, t.get_list_script = p, t.main = h, 
t.main_list = g;
}).call(this, n(1), n(0).default, n(0).default);
}, function(e, t, n) {
"use strict";
(function(e, r) {
function i(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), i(n(4));
const o = n(4);
function a(t, n) {
return Array.isArray(t) && (t = t.join("")), "string" == typeof n && (n = e(n)), 
"object" == typeof n && n.length && "object" == typeof n[0] && (n = n[0]), o.GM_addStyle(t.toString(), n);
}
function s(t, n) {
return "object" == typeof t && t.webfont && (t = t.webfont), e(`<link rel="stylesheet" href="${t.toString()}"/>`).appendTo(n || e("header, body").eq(0));
}
function l(e, ...t) {
return console.info(`%c[${r.userScript.id}][debug]`, "color: #4B90C2;", e, ...t);
}
function u(e, ...t) {
return console.error(`%c[${r.userScript.id}][error]`, "color: red;", e, ...t);
}
function c(e, ...t) {
return console.info(`%c[${r.userScript.id}][info]`, "color: #ccc;", e, ...t);
}
function d(e, ...t) {
return console.log(e, ...t);
}
function f(e) {
let t = window.open(e, "_blank");
return setTimeout(function() {
window.focus();
}, 300), t;
}
t.GM_addStyle = a, t.addStylesheet = s, t.debug = l, t.error = u, t.info = c, t.log = d, 
t.openInTabBackground = f;
const p = n(7);
t.default = p;
}).call(this, n(0).default, n(1));
}, function(e, t, n) {
"use strict";
(function(e, r, i) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const o = n(6), a = n(14), s = n(10);
function l(t, r, i) {
let l = o.requireScript(t, "index");
s.hasGrant(l.metadata.grant, "registerMenuCommand") ? a.registerMenuCommand({
id: t,
key: "debug jquery"
}, async t => {
try {
u("null", null), u("global", e), u("window", window), u("window.self", window.self), 
u("unsafeWindow", unsafeWindow);
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
u("jquery/global", await Promise.resolve().then(() => n(0)));
} catch (e) {
console.error(e);
}
}) : console.info(t, "registerMenuCommand = false");
}
function u(e, t) {
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
t.registerGlobalMenu = l;
const c = n(8);
t.default = c;
}).call(this, n(1), n(0).default, n(0).default);
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
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(16);
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
i[e] && (i[e] = i[e].length ? u(r.array_unique(i[e])) : []);
}), i.grant.sort(), i;
}
}
function o(e, t) {
return !(!e.includes("GM." + t) && !e.includes("GM_" + t));
}
function a(e) {
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
})), e.match && (e.match = s(e.match)), [ "include", "match", "exclude", "grant" ].forEach(function(t) {
e[t] && (e[t] = e[t].length ? u(r.array_unique(e[t])) : []);
}), e.grant && e.grant.length && e.grant.sort(), e;
}
function s(e) {
return e.map(function(e, t, n) {
return e.replace(/^.*(\:\/\/)/, "*$1");
});
}
function l(e, t, n = !1, r = "\t\t", i = "// ", o = "\n") {
let a = "", s = `${i}@${e}${r}`;
return Array.isArray(t) ? a = t.join(`${o}${s}`) : void 0 !== t && (a = t.toString()), 
n && (a = s + a), a;
}
function u(e) {
return e.filter(function(e, t, n) {
return !!e;
});
}
t.parseMetadata = i, t.hasGrant = o, t.lazyMetaFix = a, t.meta_match = s, t.makeMetaRow = l, 
t.meta_filter = u;
const c = n(10);
t.default = c;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.desc = "直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址", t.grant = [], 
t.metadata = "// ==UserScript==\n// @name\t\t<%= index.name %>\n// @name:en\t\t<%= index.name_en %>\n// @name:zh\t\t<%= index.name %>\n// @namespace\tbluelovers\n// @author\t\tbluelovers\n//\n// @description\t\t<%= index.desc %>\n// @description:en\t<%= index.desc_en %>\n// @description:zh\t<%= index.desc %>\n//\n// @version\t\t<%= pkg.version %>\n//\n// @grant\t\t<%= index.grant %>\n// g_r_a_n_tnone\n//\n// @icon\t\t<%= index.icon %>\n//\n// @noframes\n// @encoding\tutf-8\n//\n// @homepageURL\thttps://github.com/bluelovers/gm-user-scripts\n// @supportURL\thttps://github.com/bluelovers/gm-user-scripts/issues\n// @downloadURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n// @updateURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n//\n// @include\t\t<%= index.include %>\n//\n// @match\t\t<%= index.match %>\n//\n// @exclude\t\t<%= index.exclude %>\n//\n// ==/UserScript==\n", 
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
var a = [], s = n.document, l = Object.getPrototypeOf, u = a.slice, c = a.concat, d = a.push, f = a.indexOf, p = {}, h = p.toString, g = p.hasOwnProperty, v = g.toString, m = v.call(Object), y = {}, b = function e(t) {
return "function" == typeof t && "number" != typeof t.nodeType;
}, x = function e(t) {
return null != t && t === t.window;
}, w = {
type: !0,
src: !0,
noModule: !0
};
function k(e, t, n) {
var r, i = (t = t || s).createElement("script");
if (i.text = e, n) for (r in w) n[r] && (i[r] = n[r]);
t.head.appendChild(i).parentNode.removeChild(i);
}
function _(e) {
return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[h.call(e)] || "object" : typeof e;
}
var C = "3.3.1", T = function(e, t) {
return new T.fn.init(e, t);
}, j = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function A(e) {
var t = !!e && "length" in e && e.length, n = _(e);
return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
}
T.fn = T.prototype = {
jquery: "3.3.1",
constructor: T,
length: 0,
toArray: function() {
return u.call(this);
},
get: function(e) {
return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
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
return this.pushStack(u.apply(this, arguments));
},
first: function() {
return this.eq(0);
},
last: function() {
return this.eq(-1);
},
eq: function(e) {
var t = this.length, n = +e + (e < 0 ? t : 0);
return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
},
end: function() {
return this.prevObject || this.constructor();
},
push: d,
sort: a.sort,
splice: a.splice
}, T.extend = T.fn.extend = function() {
var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), 
s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
a !== (r = e[t]) && (u && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, 
o = n && Array.isArray(n) ? n : []) : o = n && T.isPlainObject(n) ? n : {}, a[t] = T.extend(u, o, r)) : void 0 !== r && (a[t] = r));
return a;
}, T.extend({
expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
isReady: !0,
error: function(e) {
throw new Error(e);
},
noop: function() {},
isPlainObject: function(e) {
var t, n;
return !(!e || "[object Object]" !== h.call(e) || (t = l(e)) && ("function" != typeof (n = g.call(t, "constructor") && t.constructor) || v.call(n) !== m));
},
isEmptyObject: function(e) {
var t;
for (t in e) return !1;
return !0;
},
globalEval: function(e) {
k(e);
},
each: function(e, t) {
var n, r = 0;
if (A(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
return e;
},
trim: function(e) {
return null == e ? "" : (e + "").replace(j, "");
},
makeArray: function(e, t) {
var n = t || [];
return null != e && (A(Object(e)) ? T.merge(n, "string" == typeof e ? [ e ] : e) : d.call(n, e)), 
n;
},
inArray: function(e, t, n) {
return null == t ? -1 : f.call(t, e, n);
},
merge: function(e, t) {
for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
return e.length = i, e;
},
grep: function(e, t, n) {
for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
return i;
},
map: function(e, t, n) {
var r, i, o = 0, a = [];
if (A(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
return c.apply([], a);
},
guid: 1,
support: y
}), "function" == typeof Symbol && (T.fn[Symbol.iterator] = a[Symbol.iterator]), 
T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
p["[object " + t + "]"] = t.toLowerCase();
});
var E = function(e) {
var t, n, r, i, o, a, s, l, u, c, d, f, p, h, g, v, m, y, b, x = "sizzle" + 1 * new Date(), w = e.document, k = 0, _ = 0, C = ae(), T = ae(), j = ae(), A = function(e, t) {
return e === t && (d = !0), 0;
}, E = {}.hasOwnProperty, M = [], S = M.pop, D = M.push, O = M.push, N = M.slice, L = function(e, t) {
for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
return -1;
}, q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", G = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", P = "\\[" + $ + "*(" + G + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + G + "))|)" + $ + "*\\]", H = ":(" + G + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp($ + "+", "g"), I = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"), F = new RegExp("^" + $ + "*," + $ + "*"), W = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), B = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]", "g"), U = new RegExp(H), z = new RegExp("^" + G + "$"), Q = {
ID: new RegExp("^#(" + G + ")"),
CLASS: new RegExp("^\\.(" + G + ")"),
TAG: new RegExp("^(" + G + "|[*])"),
ATTR: new RegExp("^" + P),
PSEUDO: new RegExp("^" + H),
CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
bool: new RegExp("^(?:" + q + ")$", "i"),
needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
}, X = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Y = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"), ee = function(e, t, n) {
var r = "0x" + t - 65536;
return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
}, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
}, re = function() {
f();
}, ie = ye(function(e) {
return !0 === e.disabled && ("form" in e || "label" in e);
}, {
dir: "parentNode",
next: "legend"
});
try {
O.apply(M = N.call(w.childNodes), w.childNodes), M[w.childNodes.length].nodeType;
} catch (e) {
O = {
apply: M.length ? function(e, t) {
D.apply(e, N.call(t));
} : function(e, t) {
for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
e.length = n - 1;
}
};
}
function oe(e, t, r, i) {
var o, s, u, c, d, h, m, y = t && t.ownerDocument, k = t ? t.nodeType : 9;
if (r = r || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return r;
if (!i && ((t ? t.ownerDocument || t : w) !== p && f(t), t = t || p, g)) {
if (11 !== k && (d = K.exec(e))) if (o = d[1]) {
if (9 === k) {
if (!(u = t.getElementById(o))) return r;
if (u.id === o) return r.push(u), r;
} else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return r.push(u), 
r;
} else {
if (d[2]) return O.apply(r, t.getElementsByTagName(e)), r;
if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(o)), 
r;
}
if (n.qsa && !j[e + " "] && (!v || !v.test(e))) {
if (1 !== k) y = t, m = e; else if ("object" !== t.nodeName.toLowerCase()) {
for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = x), 
s = (h = a(e)).length; s--; ) h[s] = "#" + c + " " + me(h[s]);
m = h.join(","), y = Y.test(e) && ge(t.parentNode) || t;
}
if (m) try {
return O.apply(r, y.querySelectorAll(m)), r;
} catch (e) {} finally {
c === x && t.removeAttribute("id");
}
}
}
return l(e.replace(I, "$1"), t, r, i);
}
function ae() {
var e = [];
function t(n, i) {
return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
}
return t;
}
function se(e) {
return e[x] = !0, e;
}
function le(e) {
var t = p.createElement("fieldset");
try {
return !!e(t);
} catch (e) {
return !1;
} finally {
t.parentNode && t.parentNode.removeChild(t), t = null;
}
}
function ue(e, t) {
for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
}
function ce(e, t) {
var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
if (r) return r;
if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
return e ? 1 : -1;
}
function de(e) {
return function(t) {
return "input" === t.nodeName.toLowerCase() && t.type === e;
};
}
function fe(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return ("input" === n || "button" === n) && t.type === e;
};
}
function pe(e) {
return function(t) {
return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
};
}
function he(e) {
return se(function(t) {
return t = +t, se(function(n, r) {
for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
});
});
}
function ge(e) {
return e && void 0 !== e.getElementsByTagName && e;
}
for (t in n = oe.support = {}, o = oe.isXML = function(e) {
var t = e && (e.ownerDocument || e).documentElement;
return !!t && "HTML" !== t.nodeName;
}, f = oe.setDocument = function(e) {
var t, i, a = e ? e.ownerDocument || e : w;
return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, 
g = !o(p), w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), 
n.attributes = le(function(e) {
return e.className = "i", !e.getAttribute("className");
}), n.getElementsByTagName = le(function(e) {
return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
}), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = le(function(e) {
return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length;
}), n.getById ? (r.filter.ID = function(e) {
var t = e.replace(Z, ee);
return function(e) {
return e.getAttribute("id") === t;
};
}, r.find.ID = function(e, t) {
if (void 0 !== t.getElementById && g) {
var n = t.getElementById(e);
return n ? [ n ] : [];
}
}) : (r.filter.ID = function(e) {
var t = e.replace(Z, ee);
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
}, m = [], v = [], (n.qsa = J.test(p.querySelectorAll)) && (le(function(e) {
h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + $ + "*(?:''|\"\")"), 
e.querySelectorAll("[selected]").length || v.push("\\[" + $ + "*(?:value|" + q + ")"), 
e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), 
e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]");
}), le(function(e) {
e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var t = p.createElement("input");
t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + $ + "*[*^$|!~]?="), 
2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), 
h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), 
e.querySelectorAll("*,:x"), v.push(",.*:");
})), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function(e) {
n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", H);
}), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), 
t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
} : function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, A = t ? function(e, t) {
if (e === t) return d = !0, 0;
var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & r ? -1 : 1);
} : function(e, t) {
if (e === t) return d = !0, 0;
var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? L(c, e) - L(c, t) : 0;
if (i === o) return ce(e, t);
for (n = e; n = n.parentNode; ) a.unshift(n);
for (n = t; n = n.parentNode; ) s.unshift(n);
for (;a[r] === s[r]; ) r++;
return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
}, p) : p;
}, oe.matches = function(e, t) {
return oe(e, null, null, t);
}, oe.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== p && f(e), t = t.replace(B, "='$1']"), n.matchesSelector && g && !j[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
var r = y.call(e, t);
if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
} catch (e) {}
return oe(t, p, null, [ e ]).length > 0;
}, oe.contains = function(e, t) {
return (e.ownerDocument || e) !== p && f(e), b(e, t);
}, oe.attr = function(e, t) {
(e.ownerDocument || e) !== p && f(e);
var i = r.attrHandle[t.toLowerCase()], o = i && E.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
}, oe.escape = function(e) {
return (e + "").replace(te, ne);
}, oe.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, oe.uniqueSort = function(e) {
var t, r = [], i = 0, o = 0;
if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), d) {
for (;t = e[o++]; ) t === e[o] && (i = r.push(o));
for (;i--; ) e.splice(r[i], 1);
}
return c = null, e;
}, i = oe.getText = function(e) {
var t, n = "", r = 0, o = e.nodeType;
if (o) {
if (1 === o || 9 === o || 11 === o) {
if ("string" == typeof e.textContent) return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
} else if (3 === o || 4 === o) return e.nodeValue;
} else for (;t = e[r++]; ) n += i(t);
return n;
}, (r = oe.selectors = {
cacheLength: 50,
createPseudo: se,
match: Q,
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
return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), 
"~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
},
CHILD: function(e) {
return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), 
e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), 
e;
},
PSEUDO: function(e) {
var t, n = !e[6] && e[2];
return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
e[2] = n.slice(0, t)), e.slice(0, 3));
}
},
filter: {
TAG: function(e) {
var t = e.replace(Z, ee).toLowerCase();
return "*" === e ? function() {
return !0;
} : function(e) {
return e.nodeName && e.nodeName.toLowerCase() === t;
};
},
CLASS: function(e) {
var t = C[e + " "];
return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && C(e, function(e) {
return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
});
},
ATTR: function(e, t, n) {
return function(r) {
var i = oe.attr(r, e);
return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
};
},
CHILD: function(e, t, n, r, i) {
var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
return 1 === r && 0 === i ? function(e) {
return !!e.parentNode;
} : function(t, n, l) {
var u, c, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
if (v) {
if (o) {
for (;g; ) {
for (f = t; f = f[g]; ) if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
h = g = "only" === e && !h && "nextSibling";
}
return !0;
}
if (h = [ a ? v.firstChild : v.lastChild ], a && y) {
for (b = (p = (u = (c = (d = (f = v)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === k && u[1]) && u[2], 
f = p && v.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop(); ) if (1 === f.nodeType && ++b && f === t) {
c[e] = [ k, p, b ];
break;
}
} else if (y && (b = p = (u = (c = (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === k && u[1]), 
!1 === b) for (;(f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++b || (y && ((c = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [ k, b ]), 
f !== t)); ) ;
return (b -= i) === r || b % r == 0 && b / r >= 0;
}
};
},
PSEUDO: function(e, t) {
var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
return i[x] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
for (var r, o = i(e, t), a = o.length; a--; ) e[r = L(e, o[a])] = !(n[r] = o[a]);
}) : function(e) {
return i(e, 0, n);
}) : i;
}
},
pseudos: {
not: se(function(e) {
var t = [], n = [], r = s(e.replace(I, "$1"));
return r[x] ? se(function(e, t, n, i) {
for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
}) : function(e, i, o) {
return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
};
}),
has: se(function(e) {
return function(t) {
return oe(e, t).length > 0;
};
}),
contains: se(function(e) {
return e = e.replace(Z, ee), function(t) {
return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
};
}),
lang: se(function(e) {
return z.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), 
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
return e === h;
},
focus: function(e) {
return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
},
enabled: pe(!1),
disabled: pe(!0),
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
return V.test(e.nodeName);
},
input: function(e) {
return X.test(e.nodeName);
},
button: function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && "button" === e.type || "button" === t;
},
text: function(e) {
var t;
return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
},
first: he(function() {
return [ 0 ];
}),
last: he(function(e, t) {
return [ t - 1 ];
}),
eq: he(function(e, t, n) {
return [ n < 0 ? n + t : n ];
}),
even: he(function(e, t) {
for (var n = 0; n < t; n += 2) e.push(n);
return e;
}),
odd: he(function(e, t) {
for (var n = 1; n < t; n += 2) e.push(n);
return e;
}),
lt: he(function(e, t, n) {
for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
return e;
}),
gt: he(function(e, t, n) {
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
}) r.pseudos[t] = de(t);
for (t in {
submit: !0,
reset: !0
}) r.pseudos[t] = fe(t);
function ve() {}
function me(e) {
for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
return r;
}
function ye(e, t, n) {
var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = _++;
return t.first ? function(t, n, i) {
for (;t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, i);
return !1;
} : function(t, n, l) {
var u, c, d, f = [ k, s ];
if (l) {
for (;t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
} else for (;t = t[r]; ) if (1 === t.nodeType || a) if (c = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), 
i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
if ((u = c[o]) && u[0] === k && u[1] === s) return f[2] = u[2];
if (c[o] = f, f[2] = e(t, n, l)) return !0;
}
return !1;
};
}
function be(e) {
return e.length > 1 ? function(t, n, r) {
for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
return !0;
} : e[0];
}
function xe(e, t, n) {
for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
return n;
}
function we(e, t, n, r, i) {
for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
u && t.push(s)));
return a;
}
function ke(e, t, n, r, i, o) {
return r && !r[x] && (r = ke(r)), i && !i[x] && (i = ke(i, o)), se(function(o, a, s, l) {
var u, c, d, f = [], p = [], h = a.length, g = o || xe(t || "*", s.nodeType ? [ s ] : s, []), v = !e || !o && t ? g : we(g, f, e, s, l), m = n ? i || (o ? e : h || r) ? [] : a : v;
if (n && n(v, m, s, l), r) for (u = we(m, p), r(u, [], s, l), c = u.length; c--; ) (d = u[c]) && (m[p[c]] = !(v[p[c]] = d));
if (o) {
if (i || e) {
if (i) {
for (u = [], c = m.length; c--; ) (d = m[c]) && u.push(v[c] = d);
i(null, m = [], u, l);
}
for (c = m.length; c--; ) (d = m[c]) && (u = i ? L(o, d) : f[c]) > -1 && (o[u] = !(a[u] = d));
}
} else m = we(m === a ? m.splice(h, m.length) : m), i ? i(null, a, m, l) : O.apply(a, m);
});
}
function _e(e) {
for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = ye(function(e) {
return e === t;
}, s, !0), d = ye(function(e) {
return L(t, e) > -1;
}, s, !0), f = [ function(e, n, r) {
var i = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
return t = null, i;
} ]; l < o; l++) if (n = r.relative[e[l].type]) f = [ ye(be(f), n) ]; else {
if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
for (i = ++l; i < o && !r.relative[e[i].type]; i++) ;
return ke(l > 1 && be(f), l > 1 && me(e.slice(0, l - 1).concat({
value: " " === e[l - 2].type ? "*" : ""
})).replace(I, "$1"), n, l < i && _e(e.slice(l, i)), i < o && _e(e = e.slice(i)), i < o && me(e));
}
f.push(n);
}
return be(f);
}
function Ce(e, t) {
var n = t.length > 0, i = e.length > 0, o = function(o, a, s, l, c) {
var d, h, v, m = 0, y = "0", b = o && [], x = [], w = u, _ = o || i && r.find.TAG("*", c), C = k += null == w ? 1 : Math.random() || .1, T = _.length;
for (c && (u = a === p || a || c); y !== T && null != (d = _[y]); y++) {
if (i && d) {
for (h = 0, a || d.ownerDocument === p || (f(d), s = !g); v = e[h++]; ) if (v(d, a || p, s)) {
l.push(d);
break;
}
c && (k = C);
}
n && ((d = !v && d) && m--, o && b.push(d));
}
if (m += y, n && y !== m) {
for (h = 0; v = t[h++]; ) v(b, x, a, s);
if (o) {
if (m > 0) for (;y--; ) b[y] || x[y] || (x[y] = S.call(l));
x = we(x);
}
O.apply(l, x), c && !o && x.length > 0 && m + t.length > 1 && oe.uniqueSort(l);
}
return c && (k = C, u = w), b;
};
return n ? se(o) : o;
}
return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), a = oe.tokenize = function(e, t) {
var n, i, o, a, s, l, u, c = T[e + " "];
if (c) return t ? 0 : c.slice(0);
for (s = e, l = [], u = r.preFilter; s; ) {
for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), 
n = !1, (i = W.exec(s)) && (n = i.shift(), o.push({
value: n,
type: i[0].replace(I, " ")
}), s = s.slice(n.length)), r.filter) !(i = Q[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), 
o.push({
value: n,
type: a,
matches: i
}), s = s.slice(n.length));
if (!n) break;
}
return t ? s.length : s ? oe.error(e) : T(e, l).slice(0);
}, s = oe.compile = function(e, t) {
var n, r = [], i = [], o = j[e + " "];
if (!o) {
for (t || (t = a(e)), n = t.length; n--; ) (o = _e(t[n]))[x] ? r.push(o) : i.push(o);
(o = j(e, Ce(i, r))).selector = e;
}
return o;
}, l = oe.select = function(e, t, n, i) {
var o, l, u, c, d, f = "function" == typeof e && e, p = !i && a(e = f.selector || e);
if (n = n || [], 1 === p.length) {
if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
if (!(t = (r.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])) return n;
f && (t = t.parentNode), e = e.slice(l.shift().value.length);
}
for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]); ) if ((d = r.find[c]) && (i = d(u.matches[0].replace(Z, ee), Y.test(l[0].type) && ge(t.parentNode) || t))) {
if (l.splice(o, 1), !(e = i.length && me(l))) return O.apply(n, i), n;
break;
}
}
return (f || s(e, p))(i, t, !g, n, !t || Y.test(e) && ge(t.parentNode) || t), n;
}, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!d, 
f(), n.sortDetached = le(function(e) {
return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
}), le(function(e) {
return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
}) || ue("type|href|height|width", function(e, t, n) {
if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
}), n.attributes && le(function(e) {
return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}) || ue("value", function(e, t, n) {
if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
}), le(function(e) {
return null == e.getAttribute("disabled");
}) || ue(q, function(e, t, n) {
var r;
if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
}), oe;
}(n);
T.find = E, T.expr = E.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = E.uniqueSort, 
T.text = E.getText, T.isXMLDoc = E.isXML, T.contains = E.contains, T.escapeSelector = E.escape;
var M = function(e, t, n) {
for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
if (i && T(e).is(n)) break;
r.push(e);
}
return r;
}, S = function(e, t) {
for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
return n;
}, D = T.expr.match.needsContext;
function O(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
}
var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function L(e, t, n) {
return b(t) ? T.grep(e, function(e, r) {
return !!t.call(e, r, e) !== n;
}) : t.nodeType ? T.grep(e, function(e) {
return e === t !== n;
}) : "string" != typeof t ? T.grep(e, function(e) {
return f.call(t, e) > -1 !== n;
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
return r > 1 ? T.uniqueSort(n) : n;
},
filter: function(e) {
return this.pushStack(L(this, e || [], !1));
},
not: function(e) {
return this.pushStack(L(this, e || [], !0));
},
is: function(e) {
return !!L(this, "string" == typeof e && D.test(e) ? T(e) : e || [], !1).length;
}
});
var q, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(T.fn.init = function(e, t, n) {
var r, i;
if (!e) return this;
if (n = n || q, "string" == typeof e) {
if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : $.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
if (r[1]) {
if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), 
N.test(r[1]) && T.isPlainObject(t)) for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
return this;
}
return (i = s.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
}
return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
}).prototype = T.fn, q = T(s);
var G = /^(?:parents|prev(?:Until|All))/, P = {
children: !0,
contents: !0,
next: !0,
prev: !0
};
function H(e, t) {
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
var n, r = 0, i = this.length, o = [], a = "string" != typeof e && T(e);
if (!D.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
o.push(n);
break;
}
return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
},
index: function(e) {
return e ? "string" == typeof e ? f.call(T(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
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
return M(e, "parentNode");
},
parentsUntil: function(e, t, n) {
return M(e, "parentNode", n);
},
next: function(e) {
return H(e, "nextSibling");
},
prev: function(e) {
return H(e, "previousSibling");
},
nextAll: function(e) {
return M(e, "nextSibling");
},
prevAll: function(e) {
return M(e, "previousSibling");
},
nextUntil: function(e, t, n) {
return M(e, "nextSibling", n);
},
prevUntil: function(e, t, n) {
return M(e, "previousSibling", n);
},
siblings: function(e) {
return S((e.parentNode || {}).firstChild, e);
},
children: function(e) {
return S(e.firstChild);
},
contents: function(e) {
return O(e, "iframe") ? e.contentDocument : (O(e, "template") && (e = e.content || e), 
T.merge([], e.childNodes));
}
}, function(e, t) {
T.fn[e] = function(n, r) {
var i = T.map(this, t, n);
return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), 
this.length > 1 && (P[e] || T.uniqueSort(i), G.test(e) && i.reverse()), this.pushStack(i);
};
});
var R = /[^\x20\t\r\n\f]+/g;
function I(e) {
var t = {};
return T.each(e.match(R) || [], function(e, n) {
t[n] = !0;
}), t;
}
function F(e) {
return e;
}
function W(e) {
throw e;
}
function B(e, t, n, r) {
var i;
try {
e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
} catch (e) {
n.apply(void 0, [ e ]);
}
}
T.Callbacks = function(e) {
e = "string" == typeof e ? I(e) : T.extend({}, e);
var t, n, r, i, o = [], a = [], s = -1, l = function() {
for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, 
n = !1);
e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
}, u = {
add: function() {
return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
T.each(n, function(n, r) {
b(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== _(r) && t(r);
});
}(arguments), n && !t && l()), this;
},
remove: function() {
return T.each(arguments, function(e, t) {
for (var n; (n = T.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
}), this;
},
has: function(e) {
return e ? T.inArray(e, o) > -1 : o.length > 0;
},
empty: function() {
return o && (o = []), this;
},
disable: function() {
return i = a = [], o = n = "", this;
},
disabled: function() {
return !o;
},
lock: function() {
return i = a = [], n || t || (o = n = ""), this;
},
locked: function() {
return !!i;
},
fireWith: function(e, n) {
return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || l()), 
this;
},
fire: function() {
return u.fireWith(this, arguments), this;
},
fired: function() {
return !!r;
}
};
return u;
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
var i = b(e[r[4]]) && e[r[4]];
o[r[1]](function() {
var e = i && i.apply(this, arguments);
e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [ e ] : arguments);
});
}), e = null;
}).promise();
},
then: function(e, r, i) {
var o = 0;
function a(e, t, r, i) {
return function() {
var s = this, l = arguments, u = function() {
var n, u;
if (!(e < o)) {
if ((n = r.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
u = n && ("object" == typeof n || "function" == typeof n) && n.then, b(u) ? i ? u.call(n, a(o, t, F, i), a(o, t, W, i)) : (o++, 
u.call(n, a(o, t, F, i), a(o, t, W, i), a(o, t, F, t.notifyWith))) : (r !== F && (s = void 0, 
l = [ n ]), (i || t.resolveWith)(s, l));
}
}, c = i ? u : function() {
try {
u();
} catch (n) {
T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== W && (s = void 0, 
l = [ n ]), t.rejectWith(s, l));
}
};
e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), 
n.setTimeout(c));
};
}
return T.Deferred(function(n) {
t[0][3].add(a(0, n, b(i) ? i : F, n.notifyWith)), t[1][3].add(a(0, n, b(e) ? e : F)), 
t[2][3].add(a(0, n, b(r) ? r : W));
}).promise();
},
promise: function(e) {
return null != e ? T.extend(e, i) : i;
}
}, o = {};
return T.each(t, function(e, n) {
var a = n[2], s = n[5];
i[n[1]] = a.add, s && a.add(function() {
r = s;
}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), 
o[n[0]] = function() {
return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
}, o[n[0] + "With"] = a.fireWith;
}), i.promise(o), e && e.call(o, o), o;
},
when: function(e) {
var t = arguments.length, n = t, r = Array(n), i = u.call(arguments), o = T.Deferred(), a = function(e) {
return function(n) {
r[e] = this, i[e] = arguments.length > 1 ? u.call(arguments) : n, --t || o.resolveWith(r, i);
};
};
if (t <= 1 && (B(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || b(i[n] && i[n].then))) return o.then();
for (;n--; ) B(i[n], a(n), o.reject);
return o.promise();
}
});
var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
T.Deferred.exceptionHook = function(e, t) {
n.console && n.console.warn && e && U.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
}, T.readyException = function(e) {
n.setTimeout(function() {
throw e;
});
};
var z = T.Deferred();
function Q() {
s.removeEventListener("DOMContentLoaded", Q), n.removeEventListener("load", Q), 
T.ready();
}
T.fn.ready = function(e) {
return z.then(e).catch(function(e) {
T.readyException(e);
}), this;
}, T.extend({
isReady: !1,
readyWait: 1,
ready: function(e) {
(!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || z.resolveWith(s, [ T ]));
}
}), T.ready.then = z.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(T.ready) : (s.addEventListener("DOMContentLoaded", Q), 
n.addEventListener("load", Q));
var X = function(e, t, n, r, i, o, a) {
var s = 0, l = e.length, u = null == n;
if ("object" === _(n)) for (s in i = !0, n) X(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, 
b(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
return u.call(T(e), n);
})), t)) for (;s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
}, V = /^-ms-/, J = /-([a-z])/g;
function K(e, t) {
return t.toUpperCase();
}
function Y(e) {
return e.replace(V, "ms-").replace(J, K);
}
var Z = function(e) {
return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
};
function ee() {
this.expando = T.expando + ee.uid++;
}
ee.uid = 1, ee.prototype = {
cache: function(e) {
var t = e[this.expando];
return t || (t = {}, Z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
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
n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [ t ] : t.match(R) || []).length;
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
var te = new ee(), ne = new ee(), re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ie = /[A-Z]/g;
function oe(e) {
return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : re.test(e) ? JSON.parse(e) : e);
}
function ae(e, t, n) {
var r;
if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ie, "-$&").toLowerCase(), 
"string" == typeof (n = e.getAttribute(r))) {
try {
n = oe(n);
} catch (e) {}
ne.set(e, t, n);
} else n = void 0;
return n;
}
T.extend({
hasData: function(e) {
return ne.hasData(e) || te.hasData(e);
},
data: function(e, t, n) {
return ne.access(e, t, n);
},
removeData: function(e, t) {
ne.remove(e, t);
},
_data: function(e, t, n) {
return te.access(e, t, n);
},
_removeData: function(e, t) {
te.remove(e, t);
}
}), T.fn.extend({
data: function(e, t) {
var n, r, i, o = this[0], a = o && o.attributes;
if (void 0 === e) {
if (this.length && (i = ne.get(o), 1 === o.nodeType && !te.get(o, "hasDataAttrs"))) {
for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)), 
ae(o, r, i[r]));
te.set(o, "hasDataAttrs", !0);
}
return i;
}
return "object" == typeof e ? this.each(function() {
ne.set(this, e);
}) : X(this, function(t) {
var n;
if (o && void 0 === t) {
if (void 0 !== (n = ne.get(o, e))) return n;
if (void 0 !== (n = ae(o, e))) return n;
} else this.each(function() {
ne.set(this, e, t);
});
}, null, t, arguments.length > 1, null, !0);
},
removeData: function(e) {
return this.each(function() {
ne.remove(this, e);
});
}
}), T.extend({
queue: function(e, t, n) {
var r;
if (e) return t = (t || "fx") + "queue", r = te.get(e, t), n && (!r || Array.isArray(n) ? r = te.access(e, t, T.makeArray(n)) : r.push(n)), 
r || [];
},
dequeue: function(e, t) {
t = t || "fx";
var n = T.queue(e, t), r = n.length, i = n.shift(), o = T._queueHooks(e, t), a = function() {
T.dequeue(e, t);
};
"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
},
_queueHooks: function(e, t) {
var n = t + "queueHooks";
return te.get(e, n) || te.access(e, n, {
empty: T.Callbacks("once memory").add(function() {
te.remove(e, [ t + "queue", n ]);
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
var n, r = 1, i = T.Deferred(), o = this, a = this.length, s = function() {
--r || i.resolveWith(o, [ o ]);
};
for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = te.get(o[a], e + "queueHooks")) && n.empty && (r++, 
n.empty.add(s));
return s(), i.promise(t);
}
});
var se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, le = new RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i"), ue = [ "Top", "Right", "Bottom", "Left" ], ce = function(e, t) {
return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display");
}, de = function(e, t, n, r) {
var i, o, a = {};
for (o in t) a[o] = e.style[o], e.style[o] = t[o];
for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
return i;
};
function fe(e, t, n, r) {
var i, o, a = 20, s = r ? function() {
return r.cur();
} : function() {
return T.css(e, t, "");
}, l = s(), u = n && n[3] || (T.cssNumber[t] ? "" : "px"), c = (T.cssNumber[t] || "px" !== u && +l) && le.exec(T.css(e, t));
if (c && c[3] !== u) {
for (l /= 2, u = u || c[3], c = +l || 1; a--; ) T.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), 
c /= o;
c *= 2, T.style(e, t, c + u), n = n || [];
}
return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, 
r.start = c, r.end = i)), i;
}
var pe = {};
function he(e) {
var t, n = e.ownerDocument, r = e.nodeName, i = pe[r];
return i || (t = n.body.appendChild(n.createElement(r)), i = T.css(t, "display"), 
t.parentNode.removeChild(t), "none" === i && (i = "block"), pe[r] = i, i);
}
function ge(e, t) {
for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, 
t ? ("none" === n && (i[o] = te.get(r, "display") || null, i[o] || (r.style.display = "")), 
"" === r.style.display && ce(r) && (i[o] = he(r))) : "none" !== n && (i[o] = "none", 
te.set(r, "display", n)));
for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
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
ce(this) ? T(this).show() : T(this).hide();
});
}
});
var ve = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ye = /^$|^module$|\/(?:java|ecma)script/i, be = {
option: [ 1, "<select multiple='multiple'>", "</select>" ],
thead: [ 1, "<table>", "</table>" ],
col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
tr: [ 2, "<table><tbody>", "</tbody></table>" ],
td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
_default: [ 0, "", "" ]
};
function xe(e, t) {
var n;
return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
void 0 === t || t && O(e, t) ? T.merge([ e ], n) : n;
}
function we(e, t) {
for (var n = 0, r = e.length; n < r; n++) te.set(e[n], "globalEval", !t || te.get(t[n], "globalEval"));
}
be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, 
be.th = be.td;
var ke = /<|&#?\w+;/;
function _e(e, t, n, r, i) {
for (var o, a, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === _(o)) T.merge(f, o.nodeType ? [ o ] : o); else if (ke.test(o)) {
for (a = a || d.appendChild(t.createElement("div")), s = (me.exec(o) || [ "", "" ])[1].toLowerCase(), 
l = be[s] || be._default, a.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], c = l[0]; c--; ) a = a.lastChild;
T.merge(f, a.childNodes), (a = d.firstChild).textContent = "";
} else f.push(t.createTextNode(o));
for (d.textContent = "", p = 0; o = f[p++]; ) if (r && T.inArray(o, r) > -1) i && i.push(o); else if (u = T.contains(o.ownerDocument, o), 
a = xe(d.appendChild(o), "script"), u && we(a), n) for (c = 0; o = a[c++]; ) ye.test(o.type || "") && n.push(o);
return d;
}
!function() {
var e = s.createDocumentFragment().appendChild(s.createElement("div")), t = s.createElement("input");
t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
e.appendChild(t), y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
e.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
}();
var Ce = s.documentElement, Te = /^key/, je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ae = /^([^.]*)(?:\.(.+)|)/;
function Ee() {
return !0;
}
function Me() {
return !1;
}
function Se() {
try {
return s.activeElement;
} catch (e) {}
}
function De(e, t, n, r, i, o) {
var a, s;
if ("object" == typeof t) {
for (s in "string" != typeof n && (r = r || n, n = void 0), t) De(e, s, n, r, t[s], o);
return e;
}
if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Me; else if (!i) return e;
return 1 === o && (a = i, (i = function(e) {
return T().off(e), a.apply(this, arguments);
}).guid = a.guid || (a.guid = T.guid++)), e.each(function() {
T.event.add(this, t, i, r, n);
});
}
T.event = {
global: {},
add: function(e, t, n, r, i) {
var o, a, s, l, u, c, d, f, p, h, g, v = te.get(e);
if (v) for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(Ce, i), 
n.guid || (n.guid = T.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
}), u = (t = (t || "").match(R) || [ "" ]).length; u--; ) p = g = (s = Ae.exec(t[u]) || [])[1], 
h = (s[2] || "").split(".").sort(), p && (d = T.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, 
d = T.event.special[p] || {}, c = T.extend({
type: p,
origType: g,
data: r,
handler: n,
guid: n.guid,
selector: i,
needsContext: i && T.expr.match.needsContext.test(i),
namespace: h.join(".")
}, o), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), 
d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), 
T.event.global[p] = !0);
},
remove: function(e, t, n, r, i) {
var o, a, s, l, u, c, d, f, p, h, g, v = te.hasData(e) && te.get(e);
if (v && (l = v.events)) {
for (u = (t = (t || "").match(R) || [ "" ]).length; u--; ) if (p = g = (s = Ae.exec(t[u]) || [])[1], 
h = (s[2] || "").split(".").sort(), p) {
for (d = T.event.special[p] || {}, f = l[p = (r ? d.delegateType : d.bindType) || p] || [], 
s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--; ) c = f[o], 
!i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), 
c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || T.removeEvent(e, p, v.handle), 
delete l[p]);
} else for (p in l) T.event.remove(e, p + t[u], n, r, !0);
T.isEmptyObject(l) && te.remove(e, "handle events");
}
},
dispatch: function(e) {
var t = T.event.fix(e), n, r, i, o, a, s, l = new Array(arguments.length), u = (te.get(this, "events") || {})[t.type] || [], c = T.event.special[t.type] || {};
for (l[0] = t, n = 1; n < arguments.length; n++) l[n] = arguments[n];
if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
for (s = T.event.handlers.call(this, t, u), n = 0; (o = s[n++]) && !t.isPropagationStopped(); ) for (t.currentTarget = o.elem, 
r = 0; (a = o.handlers[r++]) && !t.isImmediatePropagationStopped(); ) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, 
t.data = a.data, void 0 !== (i = ((T.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, l)) && !1 === (t.result = i) && (t.preventDefault(), 
t.stopPropagation()));
return c.postDispatch && c.postDispatch.call(this, t), t.result;
}
},
handlers: function(e, t) {
var n, r, i, o, a, s = [], l = t.delegateCount, u = e.target;
if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? T(i, this).index(u) > -1 : T.find(i, this, null, [ u ]).length), 
a[i] && o.push(r);
o.length && s.push({
elem: u,
handlers: o
});
}
return u = this, l < t.length && s.push({
elem: u,
handlers: t.slice(l)
}), s;
},
addProp: function(e, t) {
Object.defineProperty(T.Event.prototype, e, {
enumerable: !0,
configurable: !0,
get: b(t) ? function() {
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
focus: {
trigger: function() {
if (this !== Se() && this.focus) return this.focus(), !1;
},
delegateType: "focusin"
},
blur: {
trigger: function() {
if (this === Se() && this.blur) return this.blur(), !1;
},
delegateType: "focusout"
},
click: {
trigger: function() {
if ("checkbox" === this.type && this.click && O(this, "input")) return this.click(), 
!1;
},
_default: function(e) {
return O(e.target, "a");
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
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Me, 
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
this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
},
stopPropagation: function() {
var e = this.originalEvent;
this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
},
stopImmediatePropagation: function() {
var e = this.originalEvent;
this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), 
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
return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
}
}, T.event.addProp), T.each({
mouseenter: "mouseover",
mouseleave: "mouseout",
pointerenter: "pointerover",
pointerleave: "pointerout"
}, function(e, t) {
T.event.special[e] = {
delegateType: t,
bindType: t,
handle: function(e) {
var n, r = this, i = e.relatedTarget, o = e.handleObj;
return i && (i === r || T.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
e.type = t), n;
}
};
}), T.fn.extend({
on: function(e, t, n, r) {
return De(this, e, t, n, r);
},
one: function(e, t, n, r) {
return De(this, e, t, n, r, 1);
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
var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ne = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function $e(e, t) {
return O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
}
function Ge(e) {
return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
}
function Pe(e) {
return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
e;
}
function He(e, t) {
var n, r, i, o, a, s, l, u;
if (1 === t.nodeType) {
if (te.hasData(e) && (o = te.access(e), a = te.set(t, o), u = o.events)) for (i in delete a.handle, 
a.events = {}, u) for (n = 0, r = u[i].length; n < r; n++) T.event.add(t, i, u[i][n]);
ne.hasData(e) && (s = ne.access(e), l = T.extend({}, s), ne.set(t, l));
}
}
function Re(e, t) {
var n = t.nodeName.toLowerCase();
"input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
}
function Ie(e, t, n, r) {
t = c.apply([], t);
var i, o, a, s, l, u, d = 0, f = e.length, p = f - 1, h = t[0], g = b(h);
if (g || f > 1 && "string" == typeof h && !y.checkClone && Le.test(h)) return e.each(function(i) {
var o = e.eq(i);
g && (t[0] = h.call(this, i, o.html())), Ie(o, t, n, r);
});
if (f && (o = (i = _e(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), 
o || r)) {
for (s = (a = T.map(xe(i, "script"), Ge)).length; d < f; d++) l = i, d !== p && (l = T.clone(l, !0, !0), 
s && T.merge(a, xe(l, "script"))), n.call(e[d], l, d);
if (s) for (u = a[a.length - 1].ownerDocument, T.map(a, Pe), d = 0; d < s; d++) l = a[d], 
ye.test(l.type || "") && !te.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : k(l.textContent.replace(qe, ""), u, l));
}
return e;
}
function Fe(e, t, n) {
for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(xe(r)), 
r.parentNode && (n && T.contains(r.ownerDocument, r) && we(xe(r, "script")), r.parentNode.removeChild(r));
return e;
}
T.extend({
htmlPrefilter: function(e) {
return e.replace(Oe, "<$1></$2>");
},
clone: function(e, t, n) {
var r, i, o, a, s = e.cloneNode(!0), l = T.contains(e.ownerDocument, e);
if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (a = xe(s), 
r = 0, i = (o = xe(e)).length; r < i; r++) Re(o[r], a[r]);
if (t) if (n) for (o = o || xe(e), a = a || xe(s), r = 0, i = o.length; r < i; r++) He(o[r], a[r]); else He(e, s);
return (a = xe(s, "script")).length > 0 && we(a, !l && xe(e, "script")), s;
},
cleanData: function(e) {
for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Z(n)) {
if (t = n[te.expando]) {
if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
n[te.expando] = void 0;
}
n[ne.expando] && (n[ne.expando] = void 0);
}
}
}), T.fn.extend({
detach: function(e) {
return Fe(this, e, !0);
},
remove: function(e) {
return Fe(this, e);
},
text: function(e) {
return X(this, function(e) {
return void 0 === e ? T.text(this) : this.empty().each(function() {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
});
}, null, e, arguments.length);
},
append: function() {
return Ie(this, arguments, function(e) {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $e(this, e).appendChild(e);
});
},
prepend: function() {
return Ie(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = $e(this, e);
t.insertBefore(e, t.firstChild);
}
});
},
before: function() {
return Ie(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
},
after: function() {
return Ie(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
});
},
empty: function() {
for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(xe(e, !1)), 
e.textContent = "");
return this;
},
clone: function(e, t) {
return e = null != e && e, t = null == t ? e : t, this.map(function() {
return T.clone(this, e, t);
});
},
html: function(e) {
return X(this, function(e) {
var t = this[0] || {}, n = 0, r = this.length;
if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
if ("string" == typeof e && !Ne.test(e) && !be[(me.exec(e) || [ "", "" ])[1].toLowerCase()]) {
e = T.htmlPrefilter(e);
try {
for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(xe(t, !1)), 
t.innerHTML = e);
t = 0;
} catch (e) {}
}
t && this.empty().append(e);
}, null, e, arguments.length);
},
replaceWith: function() {
var e = [];
return Ie(this, arguments, function(t) {
var n = this.parentNode;
T.inArray(this, e) < 0 && (T.cleanData(xe(this)), n && n.replaceChild(t, this));
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
for (var n, r = [], i = T(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
T(i[a])[t](n), d.apply(r, n.get());
return this.pushStack(r);
};
});
var We = new RegExp("^(" + se + ")(?!px)[a-z%]+$", "i"), Be = function(e) {
var t = e.ownerDocument.defaultView;
return t && t.opener || (t = n), t.getComputedStyle(e);
}, Ue = new RegExp(ue.join("|"), "i");
function ze(e, t, n) {
var r, i, o, a, s = e.style;
return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), 
!y.pixelBoxStyles() && We.test(a) && Ue.test(t) && (r = s.width, i = s.minWidth, 
o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
}
function Qe(e, t) {
return {
get: function() {
if (!e()) return (this.get = t).apply(this, arguments);
delete this.get;
}
};
}
!function() {
function e() {
if (c) {
u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
Ce.appendChild(u).appendChild(c);
var e = n.getComputedStyle(c);
r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), 
i = 36 === t(e.width), c.style.position = "absolute", o = 36 === c.offsetWidth || "absolute", 
Ce.removeChild(u), c = null;
}
}
function t(e) {
return Math.round(parseFloat(e));
}
var r, i, o, a, l, u = s.createElement("div"), c = s.createElement("div");
c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
y.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(y, {
boxSizingReliable: function() {
return e(), i;
},
pixelBoxStyles: function() {
return e(), a;
},
pixelPosition: function() {
return e(), r;
},
reliableMarginLeft: function() {
return e(), l;
},
scrollboxSize: function() {
return e(), o;
}
}));
}();
var Xe = /^(none|table(?!-c[ea]).+)/, Ve = /^--/, Je = {
position: "absolute",
visibility: "hidden",
display: "block"
}, Ke = {
letterSpacing: "0",
fontWeight: "400"
}, Ye = [ "Webkit", "Moz", "ms" ], Ze = s.createElement("div").style;
function et(e) {
if (e in Ze) return e;
for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; ) if ((e = Ye[n] + t) in Ze) return e;
}
function tt(e) {
var t = T.cssProps[e];
return t || (t = T.cssProps[e] = et(e) || e), t;
}
function nt(e, t, n) {
var r = le.exec(t);
return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
}
function rt(e, t, n, r, i, o) {
var a = "width" === t ? 1 : 0, s = 0, l = 0;
if (n === (r ? "border" : "content")) return 0;
for (;a < 4; a += 2) "margin" === n && (l += T.css(e, n + ue[a], !0, i)), r ? ("content" === n && (l -= T.css(e, "padding" + ue[a], !0, i)), 
"margin" !== n && (l -= T.css(e, "border" + ue[a] + "Width", !0, i))) : (l += T.css(e, "padding" + ue[a], !0, i), 
"padding" !== n ? l += T.css(e, "border" + ue[a] + "Width", !0, i) : s += T.css(e, "border" + ue[a] + "Width", !0, i));
return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5))), 
l;
}
function it(e, t, n) {
var r = Be(e), i = ze(e, t, r), o = "border-box" === T.css(e, "boxSizing", !1, r), a = o;
if (We.test(i)) {
if (!n) return i;
i = "auto";
}
return a = a && (y.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === T.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], 
a = !0), (i = parseFloat(i) || 0) + rt(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
}
function ot(e, t, n, r, i) {
return new ot.prototype.init(e, t, n, r, i);
}
T.extend({
cssHooks: {
opacity: {
get: function(e, t) {
if (t) {
var n = ze(e, "opacity");
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
var i, o, a, s = Y(t), l = Ve.test(t), u = e.style;
if (l || (t = tt(s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
"string" == (o = typeof n) && (i = le.exec(n)) && i[1] && (n = fe(e, t, i), o = "number"), 
null != n && n == n && ("number" === o && (n += i && i[3] || (T.cssNumber[s] ? "" : "px")), 
y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n));
}
},
css: function(e, t, n, r) {
var i, o, a, s = Y(t);
return Ve.test(t) || (t = tt(s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), 
!0 === n || isFinite(o) ? o || 0 : i) : i;
}
}), T.each([ "height", "width" ], function(e, t) {
T.cssHooks[t] = {
get: function(e, n, r) {
if (n) return !Xe.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : de(e, Je, function() {
return it(e, t, r);
});
},
set: function(e, n, r) {
var i, o = Be(e), a = "border-box" === T.css(e, "boxSizing", !1, o), s = r && rt(e, t, r, a, o);
return a && y.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)), 
s && (i = le.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), 
nt(e, n, s);
}
};
}), T.cssHooks.marginLeft = Qe(y.reliableMarginLeft, function(e, t) {
if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - de(e, {
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
for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + ue[r] + t] = o[r] || o[r - 2] || o[0];
return i;
}
}, "margin" !== e && (T.cssHooks[e + t].set = nt);
}), T.fn.extend({
css: function(e, t) {
return X(this, function(e, t, n) {
var r, i, o = {}, a = 0;
if (Array.isArray(t)) {
for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = T.css(e, t[a], !1, r);
return o;
}
return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
}, e, t, arguments.length > 1);
}
}), T.Tween = ot, ot.prototype = {
constructor: ot,
init: function(e, t, n, r, i, o) {
this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, 
this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px");
},
cur: function() {
var e = ot.propHooks[this.prop];
return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
},
run: function(e) {
var t, n = ot.propHooks[this.prop];
return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
n && n.set ? n.set(this) : ot.propHooks._default.set(this), this;
}
}, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
_default: {
get: function(e) {
var t;
return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
},
set: function(e) {
T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
}
}
}, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
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
}, T.fx = ot.prototype.init, T.fx.step = {};
var at, st, lt = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
function ct() {
st && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, T.fx.interval), 
T.fx.tick());
}
function dt() {
return n.setTimeout(function() {
at = void 0;
}), at = Date.now();
}
function ft(e, t) {
var n, r = 0, i = {
height: e
};
for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ue[r])] = i["padding" + n] = e;
return t && (i.opacity = i.width = e), i;
}
function pt(e, t, n) {
for (var r, i = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
}
function ht(e, t, n) {
var r, i, o, a, s, l, u, c, d = "width" in t || "height" in t, f = this, p = {}, h = e.style, g = e.nodeType && ce(e), v = te.get(e, "fxshow");
for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
s = a.empty.fire, a.empty.fire = function() {
a.unqueued || s();
}), a.unqueued++, f.always(function() {
f.always(function() {
a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
});
})), t) if (i = t[r], lt.test(i)) {
if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
if ("show" !== i || !v || void 0 === v[r]) continue;
g = !0;
}
p[r] = v && v[r] || T.style(e, r);
}
if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p)) for (r in d && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
null == (u = v && v.display) && (u = te.get(e, "display")), "none" === (c = T.css(e, "display")) && (u ? c = u : (ge([ e ], !0), 
u = e.style.display || u, c = T.css(e, "display"), ge([ e ]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (f.done(function() {
h.display = u;
}), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), 
n.overflow && (h.overflow = "hidden", f.always(function() {
h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
})), l = !1, p) l || (v ? "hidden" in v && (g = v.hidden) : v = te.access(e, "fxshow", {
display: u
}), o && (v.hidden = !g), g && ge([ e ], !0), f.done(function() {
for (r in g || ge([ e ]), te.remove(e, "fxshow"), p) T.style(e, r, p[r]);
})), l = pt(g ? v[r] : 0, r, f), r in v || (v[r] = l.start, g && (l.end = l.start, 
l.start = 0));
}
function gt(e, t) {
var n, r, i, o, a;
for (n in e) if (i = t[r = Y(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
n !== r && (e[r] = o, delete e[n]), (a = T.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), 
delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
}
function vt(e, t, n) {
var r, i, o = 0, a = vt.prefilters.length, s = T.Deferred().always(function() {
delete l.elem;
}), l = function() {
if (i) return !1;
for (var t = at || dt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
return s.notifyWith(e, [ u, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ u, 1, 0 ]), 
s.resolveWith(e, [ u ]), !1);
}, u = s.promise({
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
var r = T.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
return u.tweens.push(r), r;
},
stop: function(t) {
var n = 0, r = t ? u.tweens.length : 0;
if (i) return this;
for (i = !0; n < r; n++) u.tweens[n].run(1);
return t ? (s.notifyWith(e, [ u, 1, 0 ]), s.resolveWith(e, [ u, t ])) : s.rejectWith(e, [ u, t ]), 
this;
}
}), c = u.props;
for (gt(c, u.opts.specialEasing); o < a; o++) if (r = vt.prefilters[o].call(u, e, c, u.opts)) return b(r.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), 
r;
return T.map(c, pt, u), b(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), 
T.fx.timer(T.extend(l, {
elem: e,
anim: u,
queue: u.opts.queue
})), u;
}
T.Animation = T.extend(vt, {
tweeners: {
"*": [ function(e, t) {
var n = this.createTween(e, t);
return fe(n.elem, e, le.exec(t), n), n;
} ]
},
tweener: function(e, t) {
b(e) ? (t = e, e = [ "*" ]) : e = e.match(R);
for (var n, r = 0, i = e.length; r < i; r++) n = e[r], vt.tweeners[n] = vt.tweeners[n] || [], 
vt.tweeners[n].unshift(t);
},
prefilters: [ ht ],
prefilter: function(e, t) {
t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
}
}), T.speed = function(e, t, n) {
var r = e && "object" == typeof e ? T.extend({}, e) : {
complete: n || !n && t || b(e) && e,
duration: e,
easing: n && t || t && !b(t) && t
};
return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), 
null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
b(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
}, r;
}, T.fn.extend({
fadeTo: function(e, t, n, r) {
return this.filter(ce).css("opacity", 0).show().end().animate({
opacity: t
}, e, n, r);
},
animate: function(e, t, n, r) {
var i = T.isEmptyObject(e), o = T.speed(t, n, r), a = function() {
var t = vt(this, T.extend({}, e), o);
(i || te.get(this, "finish")) && t.stop(!0);
};
return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
},
stop: function(e, t, n) {
var r = function(e) {
var t = e.stop;
delete e.stop, t(n);
};
return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
this.each(function() {
var t = !0, i = null != e && e + "queueHooks", o = T.timers, a = te.get(this);
if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ut.test(i) && r(a[i]);
for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
t = !1, o.splice(i, 1));
!t && n || T.dequeue(this, e);
});
},
finish: function(e) {
return !1 !== e && (e = e || "fx"), this.each(function() {
var t, n = te.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = T.timers, a = r ? r.length : 0;
for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
o.splice(t, 1));
for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
delete n.finish;
});
}
}), T.each([ "toggle", "show", "hide" ], function(e, t) {
var n = T.fn[t];
T.fn[t] = function(e, r, i) {
return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, r, i);
};
}), T.each({
slideDown: ft("show"),
slideUp: ft("hide"),
slideToggle: ft("toggle"),
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
st || (st = !0, ct());
}, T.fx.stop = function() {
st = null;
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
}, function() {
var e = s.createElement("input"), t = s.createElement("select").appendChild(s.createElement("option"));
e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = s.createElement("input")).value = "t", 
e.type = "radio", y.radioValue = "t" === e.value;
}();
var mt, yt = T.expr.attrHandle;
T.fn.extend({
attr: function(e, t) {
return X(this, T.attr, e, t, arguments.length > 1);
},
removeAttr: function(e) {
return this.each(function() {
T.removeAttr(this, e);
});
}
}), T.extend({
attr: function(e, t, n) {
var r, i, o = e.nodeType;
if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? mt : void 0)), 
void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
},
attrHooks: {
type: {
set: function(e, t) {
if (!y.radioValue && "radio" === t && O(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
}
},
removeAttr: function(e, t) {
var n, r = 0, i = t && t.match(R);
if (i && 1 === e.nodeType) for (;n = i[r++]; ) e.removeAttribute(n);
}
}), mt = {
set: function(e, t, n) {
return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
}
}, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = yt[t] || T.find.attr;
yt[t] = function(e, t, r) {
var i, o, a = t.toLowerCase();
return r || (o = yt[a], yt[a] = i, i = null != n(e, t, r) ? a : null, yt[a] = o), 
i;
};
});
var bt = /^(?:input|select|textarea|button)$/i, xt = /^(?:a|area)$/i;
function wt(e) {
return (e.match(R) || []).join(" ");
}
function kt(e) {
return e.getAttribute && e.getAttribute("class") || "";
}
function _t(e) {
return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
}
T.fn.extend({
prop: function(e, t) {
return X(this, T.prop, e, t, arguments.length > 1);
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
return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
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
var t, n, r, i, o, a, s, l = 0;
if (b(e)) return this.each(function(t) {
T(this).addClass(e.call(this, t, kt(this)));
});
if ((t = _t(e)).length) for (;n = this[l++]; ) if (i = kt(n), r = 1 === n.nodeType && " " + wt(i) + " ") {
for (a = 0; o = t[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
i !== (s = wt(r)) && n.setAttribute("class", s);
}
return this;
},
removeClass: function(e) {
var t, n, r, i, o, a, s, l = 0;
if (b(e)) return this.each(function(t) {
T(this).removeClass(e.call(this, t, kt(this)));
});
if (!arguments.length) return this.attr("class", "");
if ((t = _t(e)).length) for (;n = this[l++]; ) if (i = kt(n), r = 1 === n.nodeType && " " + wt(i) + " ") {
for (a = 0; o = t[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
i !== (s = wt(r)) && n.setAttribute("class", s);
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, r = "string" === n || Array.isArray(e);
return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each(function(n) {
T(this).toggleClass(e.call(this, n, kt(this), t), t);
}) : this.each(function() {
var t, i, o, a;
if (r) for (i = 0, o = T(this), a = _t(e); t = a[i++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = kt(this)) && te.set(this, "__className__", t), 
this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : te.get(this, "__className__") || ""));
});
},
hasClass: function(e) {
var t, n, r = 0;
for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + wt(kt(n)) + " ").indexOf(t) > -1) return !0;
return !1;
}
});
var Ct = /\r/g;
T.fn.extend({
val: function(e) {
var t, n, r, i = this[0];
return arguments.length ? (r = b(e), this.each(function(n) {
var i;
1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function(e) {
return null == e ? "" : e + "";
})), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
})) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0;
}
}), T.extend({
valHooks: {
option: {
get: function(e) {
var t = T.find.attr(e, "value");
return null != t ? t : wt(T.text(e));
}
},
select: {
get: function(e) {
var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? o + 1 : i.length;
for (r = o < 0 ? l : a ? o : 0; r < l; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
if (t = T(n).val(), a) return t;
s.push(t);
}
return s;
},
set: function(e, t) {
for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
return n || (e.selectedIndex = -1), o;
}
}
}
}), T.each([ "radio", "checkbox" ], function() {
T.valHooks[this] = {
set: function(e, t) {
if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1;
}
}, y.checkOn || (T.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" : e.value;
});
}), y.focusin = "onfocusin" in n;
var Tt = /^(?:focusinfocus|focusoutblur)$/, jt = function(e) {
e.stopPropagation();
};
T.extend(T.event, {
trigger: function(e, t, r, i) {
var o, a, l, u, c, d, f, p, h = [ r || s ], v = g.call(e, "type") ? e.type : e, m = g.call(e, "namespace") ? e.namespace.split(".") : [];
if (a = p = l = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(v + T.event.triggered) && (v.indexOf(".") > -1 && (v = (m = v.split(".")).shift(), 
m.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[T.expando] ? e : new T.Event(v, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
e.result = void 0, e.target || (e.target = r), t = null == t ? [ e ] : T.makeArray(t, [ e ]), 
f = T.event.special[v] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
if (!i && !f.noBubble && !x(r)) {
for (u = f.delegateType || v, Tt.test(u + v) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
l = a;
l === (r.ownerDocument || s) && h.push(l.defaultView || l.parentWindow || n);
}
for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); ) p = a, e.type = o > 1 ? u : f.bindType || v, 
(d = (te.get(a, "events") || {})[e.type] && te.get(a, "handle")) && d.apply(a, t), 
(d = c && a[c]) && d.apply && Z(a) && (e.result = d.apply(a, t), !1 === e.result && e.preventDefault());
return e.type = v, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !Z(r) || c && b(r[v]) && !x(r) && ((l = r[c]) && (r[c] = null), 
T.event.triggered = v, e.isPropagationStopped() && p.addEventListener(v, jt), r[v](), 
e.isPropagationStopped() && p.removeEventListener(v, jt), T.event.triggered = void 0, 
l && (r[c] = l)), e.result;
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
var r = this.ownerDocument || this, i = te.access(r, t);
i || r.addEventListener(e, n, !0), te.access(r, t, (i || 0) + 1);
},
teardown: function() {
var r = this.ownerDocument || this, i = te.access(r, t) - 1;
i ? te.access(r, t, i) : (r.removeEventListener(e, n, !0), te.remove(r, t));
}
};
});
var At = n.location, Et = Date.now(), Mt = /\?/;
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
var St = /\[\]$/, Dt = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i, Nt = /^(?:input|select|textarea|keygen)/i;
function Lt(e, t, n, r) {
var i;
if (Array.isArray(t)) T.each(t, function(t, i) {
n || St.test(e) ? r(e, i) : Lt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
}); else if (n || "object" !== _(t)) r(e, t); else for (i in t) Lt(e + "[" + i + "]", t[i], n, r);
}
T.param = function(e, t) {
var n, r = [], i = function(e, t) {
var n = b(t) ? t() : t;
r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
};
if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
i(this.name, this.value);
}); else for (n in e) Lt(n, e[n], t, i);
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
return this.name && !T(this).is(":disabled") && Nt.test(this.nodeName) && !Ot.test(e) && (this.checked || !ve.test(e));
}).map(function(e, t) {
var n = T(this).val();
return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
return {
name: t.name,
value: e.replace(Dt, "\r\n")
};
}) : {
name: t.name,
value: n.replace(Dt, "\r\n")
};
}).get();
}
});
var qt = /%20/g, $t = /#.*$/, Gt = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rt = /^(?:GET|HEAD)$/, It = /^\/\//, Ft = {}, Wt = {}, Bt = "*/".concat("*"), Ut = s.createElement("a");
function zt(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var r, i = 0, o = t.toLowerCase().match(R) || [];
if (b(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
};
}
function Qt(e, t, n, r) {
var i = {}, o = e === Wt;
function a(s) {
var l;
return i[s] = !0, T.each(e[s] || [], function(e, s) {
var u = s(t, n, r);
return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), 
a(u), !1);
}), l;
}
return a(t.dataTypes[0]) || !i["*"] && a("*");
}
function Xt(e, t) {
var n, r, i = T.ajaxSettings.flatOptions || {};
for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
return r && T.extend(!0, e, r), e;
}
function Vt(e, t, n) {
for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
if (r) for (i in s) if (s[i] && s[i].test(r)) {
l.unshift(i);
break;
}
if (l[0] in n) o = l[0]; else {
for (i in n) {
if (!l[0] || e.converters[i + " " + l[0]]) {
o = i;
break;
}
a || (a = i);
}
o = o || a;
}
if (o) return o !== l[0] && l.unshift(o), n[o];
}
function Jt(e, t, n, r) {
var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
!l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
!0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
break;
}
if (!0 !== a) if (a && e.throws) t = a(t); else try {
t = a(t);
} catch (e) {
return {
state: "parsererror",
error: a ? e : "No conversion from " + l + " to " + o
};
}
}
return {
state: "success",
data: t
};
}
Ut.href = At.href, T.extend({
active: 0,
lastModified: {},
etag: {},
ajaxSettings: {
url: At.href,
type: "GET",
isLocal: Ht.test(At.protocol),
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
return t ? Xt(Xt(e, T.ajaxSettings), t) : Xt(T.ajaxSettings, e);
},
ajaxPrefilter: zt(Ft),
ajaxTransport: zt(Wt),
ajax: function(e, t) {
"object" == typeof e && (t = e, e = void 0), t = t || {};
var r, i, o, a, l, u, c, d, f, p, h = T.ajaxSetup({}, t), g = h.context || h, v = h.context && (g.nodeType || g.jquery) ? T(g) : T.event, m = T.Deferred(), y = T.Callbacks("once memory"), b = h.statusCode || {}, x = {}, w = {}, k = "canceled", _ = {
readyState: 0,
getResponseHeader: function(e) {
var t;
if (c) {
if (!a) for (a = {}; t = Pt.exec(o); ) a[t[1].toLowerCase()] = t[2];
t = a[e.toLowerCase()];
}
return null == t ? null : t;
},
getAllResponseHeaders: function() {
return c ? o : null;
},
setRequestHeader: function(e, t) {
return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), 
this;
},
overrideMimeType: function(e) {
return null == c && (h.mimeType = e), this;
},
statusCode: function(e) {
var t;
if (e) if (c) _.always(e[_.status]); else for (t in e) b[t] = [ b[t], e[t] ];
return this;
},
abort: function(e) {
var t = e || k;
return r && r.abort(t), C(0, t), this;
}
};
if (m.promise(_), h.url = ((e || h.url || At.href) + "").replace(It, At.protocol + "//"), 
h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [ "" ], 
null == h.crossDomain) {
u = s.createElement("a");
try {
u.href = h.url, u.href = u.href, h.crossDomain = Ut.protocol + "//" + Ut.host != u.protocol + "//" + u.host;
} catch (e) {
h.crossDomain = !0;
}
}
if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), 
Qt(Ft, h, t, _), c) return _;
for (f in (d = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), 
h.type = h.type.toUpperCase(), h.hasContent = !Rt.test(h.type), i = h.url.replace($t, ""), 
h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (p = h.url.slice(i.length), 
h.data && (h.processData || "string" == typeof h.data) && (i += (Mt.test(i) ? "&" : "?") + h.data, 
delete h.data), !1 === h.cache && (i = i.replace(Gt, "$1"), p = (Mt.test(i) ? "&" : "?") + "_=" + Et++ + p), 
h.url = i + p), h.ifModified && (T.lastModified[i] && _.setRequestHeader("If-Modified-Since", T.lastModified[i]), 
T.etag[i] && _.setRequestHeader("If-None-Match", T.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && _.setRequestHeader("Content-Type", h.contentType), 
_.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]), 
h.headers) _.setRequestHeader(f, h.headers[f]);
if (h.beforeSend && (!1 === h.beforeSend.call(g, _, h) || c)) return _.abort();
if (k = "abort", y.add(h.complete), _.done(h.success), _.fail(h.error), r = Qt(Wt, h, t, _)) {
if (_.readyState = 1, d && v.trigger("ajaxSend", [ _, h ]), c) return _;
h.async && h.timeout > 0 && (l = n.setTimeout(function() {
_.abort("timeout");
}, h.timeout));
try {
c = !1, r.send(x, C);
} catch (e) {
if (c) throw e;
C(-1, e);
}
} else C(-1, "No Transport");
function C(e, t, a, s) {
var u, f, p, x, w, k = t;
c || (c = !0, l && n.clearTimeout(l), r = void 0, o = s || "", _.readyState = e > 0 ? 4 : 0, 
u = e >= 200 && e < 300 || 304 === e, a && (x = Vt(h, _, a)), x = Jt(h, x, _, u), 
u ? (h.ifModified && ((w = _.getResponseHeader("Last-Modified")) && (T.lastModified[i] = w), 
(w = _.getResponseHeader("etag")) && (T.etag[i] = w)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state, 
f = x.data, u = !(p = x.error))) : (p = k, !e && k || (k = "error", e < 0 && (e = 0))), 
_.status = e, _.statusText = (t || k) + "", u ? m.resolveWith(g, [ f, k, _ ]) : m.rejectWith(g, [ _, k, p ]), 
_.statusCode(b), b = void 0, d && v.trigger(u ? "ajaxSuccess" : "ajaxError", [ _, h, u ? f : p ]), 
y.fireWith(g, [ _, k ]), d && (v.trigger("ajaxComplete", [ _, h ]), --T.active || T.event.trigger("ajaxStop")));
}
return _;
},
getJSON: function(e, t, n) {
return T.get(e, t, n, "json");
},
getScript: function(e, t) {
return T.get(e, void 0, t, "script");
}
}), T.each([ "get", "post" ], function(e, t) {
T[t] = function(e, n, r, i) {
return b(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
url: e,
type: t,
dataType: i,
data: n,
success: r
}, T.isPlainObject(e) && e));
};
}), T._evalUrl = function(e) {
return T.ajax({
url: e,
type: "GET",
dataType: "script",
cache: !0,
async: !1,
global: !1,
throws: !0
});
}, T.fn.extend({
wrapAll: function(e) {
var t;
return this[0] && (b(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), 
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
return e;
}).append(this)), this;
},
wrapInner: function(e) {
return b(e) ? this.each(function(t) {
T(this).wrapInner(e.call(this, t));
}) : this.each(function() {
var t = T(this), n = t.contents();
n.length ? n.wrapAll(e) : t.append(e);
});
},
wrap: function(e) {
var t = b(e);
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
var Kt = {
0: 200,
1223: 204
}, Yt = T.ajaxSettings.xhr();
y.cors = !!Yt && "withCredentials" in Yt, y.ajax = Yt = !!Yt, T.ajaxTransport(function(e) {
var t, r;
if (y.cors || Yt && !e.crossDomain) return {
send: function(i, o) {
var a, s = e.xhr();
if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), 
i) s.setRequestHeader(a, i[a]);
t = function(e) {
return function() {
t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
"abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Kt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
binary: s.response
} : {
text: s.responseText
}, s.getAllResponseHeaders()));
};
}, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
4 === s.readyState && n.setTimeout(function() {
t && r();
});
}, t = t("abort");
try {
s.send(e.hasContent && e.data || null);
} catch (e) {
if (t) throw e;
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
if (e.crossDomain) return {
send: function(r, i) {
t = T("<script>").prop({
charset: e.scriptCharset,
src: e.url
}).on("load error", n = function(e) {
t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
}), s.head.appendChild(t[0]);
},
abort: function() {
n && n();
}
};
});
var Zt = [], en = /(=)\?(?=&|$)|\?\?/;
T.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
var e = Zt.pop() || T.expando + "_" + Et++;
return this[e] = !0, e;
}
}), T.ajaxPrefilter("json jsonp", function(e, t, r) {
var i, o, a, s = !1 !== e.jsonp && (en.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
s ? e[s] = e[s].replace(en, "$1" + i) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
e.converters["script json"] = function() {
return a || T.error(i + " was not called"), a[0];
}, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
a = arguments;
}, r.always(function() {
void 0 === o ? T(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, 
Zt.push(i)), a && b(o) && o(a[0]), a = o = void 0;
}), "script";
}), y.createHTMLDocument = function() {
var e = s.implementation.createHTMLDocument("").body;
return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
}(), T.parseHTML = function(e, t, n) {
return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, 
t.head.appendChild(r)) : t = s), o = !n && [], (i = N.exec(e)) ? [ t.createElement(i[1]) ] : (i = _e([ e ], t, o), 
o && o.length && T(o).remove(), T.merge([], i.childNodes)));
var r, i, o;
}, T.fn.load = function(e, t, n) {
var r, i, o, a = this, s = e.indexOf(" ");
return s > -1 && (r = wt(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
a.length > 0 && T.ajax({
url: e,
type: i || "GET",
dataType: "html",
data: t
}).done(function(e) {
o = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
}).always(n && function(e, t) {
a.each(function() {
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
var r, i, o, a, s, l, u, c = T.css(e, "position"), d = T(e), f = {};
"static" === c && (e.style.position = "relative"), s = d.offset(), o = T.css(e, "top"), 
l = T.css(e, "left"), (u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1) ? (a = (r = d.position()).top, 
i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), b(t) && (t = t.call(e, n, T.extend({}, s))), 
null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), 
"using" in t ? t.using.call(e, f) : d.css(f);
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
return e || Ce;
});
}
}), T.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, t) {
var n = "pageYOffset" === t;
T.fn[e] = function(r) {
return X(this, function(e, r, i) {
var o;
if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
}, e, r, arguments.length);
};
}), T.each([ "top", "left" ], function(e, t) {
T.cssHooks[t] = Qe(y.pixelPosition, function(e, n) {
if (n) return n = ze(e, t), We.test(n) ? T(e).position()[t] + "px" : n;
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
var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
return X(this, function(t, n, i) {
var o;
return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, s) : T.style(t, n, i, s);
}, t, a ? i : void 0, a);
};
});
}), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
T.fn[t] = function(e, n) {
return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
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
if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = u.call(arguments, 2), 
(i = function() {
return e.apply(t || this, r.concat(u.call(arguments)));
}).guid = e.guid = e.guid || T.guid++, i;
}, T.holdReady = function(e) {
e ? T.readyWait++ : T.ready(!0);
}, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = O, T.isFunction = b, 
T.isWindow = x, T.camelCase = Y, T.type = _, T.now = Date.now, T.isNumeric = function(e) {
var t = T.type(e);
return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
}, r = [], void 0 === (i = function() {
return T;
}.apply(t, r)) || (e.exports = i);
var tn = n.jQuery, nn = n.$;
return T.noConflict = function(e) {
return n.$ === T && (n.$ = nn), e && n.jQuery === T && (n.jQuery = tn), T;
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
for (var n, r = "php", i = [ "source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment" ], o, a = [ new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "()", "(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?", "(?:\\/\\/\\/?)?", "((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)", "(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))", "(?:\\?([^#]*))?(?:#(.*))?)" ].join("")) ][0].exec(e), s = {}, l = 14; l--; ) a[l] && (s[i[l]] = a[l]);
if (t) return s[t.replace("PHP_URL_", "").toLowerCase()];
if (0) {
let e = "queryKey", t = /(?:^|&)([^&=]*)=?([^&]*)/g;
s[e] = {}, (n = s[i[12]] || "").replace(t, function(t, n, r) {
n && (s[e][n] = r);
});
}
return delete s.source, s;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.parse_url2 = r, t.parse_url = i, t.default = i;
}, function(e, t, n) {
"use strict";
const r = n(15);
e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(9), i = new Map();
function o(e, t, n = []) {
"string" == typeof e && (e = {
label: e
});
const o = a(e), s = async function() {
let r;
console.time(o), console.group(o);
try {
(r = await t(e, ...n)) && !0 !== r && console.info(o, e.fn_name || t.name, [ r.length, r ]);
} catch (e) {
console.error(e);
}
console.groupEnd(o), console.timeEnd(o);
};
return "function" == typeof r.default.registerMenuCommand ? r.default.registerMenuCommand(o, s) : console.warn("GM_registerMenuCommand not a function."), 
i.set(o, s), o;
}
function a(e) {
"string" == typeof e && (e = {
label: e
});
const t = e.label || `[${e.name || e.id}] ${e.key}`;
return t;
}
async function s(e, ...t) {
const n = a(e);
let r = i.get(n);
return r ? await r(...t) : r;
}
function l() {
let e = [];
return i.forEach(function(t, n, r) {
e.push(n);
}), e;
}
t.registerMenuCommand = o, t.getLabel = a, t.callMenuCommand = s, t.listMenuCommand = l;
}, function(e, t, n) {
"use strict";
function r(e) {
return e.filter(function(e, t, n) {
return t == n.indexOf(e);
});
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.array_unique = r, t.default = r;
}, function(e, t, n) {
var r = {
"./pan-baidu-download/": 2,
"./pan-baidu-download/index": 2,
"./pan-baidu-download/index.js": 2,
"./pan-baidu-download/index.user": 3,
"./pan-baidu-download/index.user.js": 3,
"./pan-baidu-download/lib/metadata": 11,
"./pan-baidu-download/lib/metadata.js": 11,
"./pan-baidu-download/site/pan.baidu": 5,
"./pan-baidu-download/site/pan.baidu.js": 5
};
function i(e) {
var t = o(e);
return n(t);
}
function o(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
i.keys = function e() {
return Object.keys(r);
}, i.resolve = o, e.exports = i, i.id = 17;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(19), i = r.Minimatch;
function o(e, t, n = {}) {
n = a(n);
let i = !1;
for (let o of t) if (o = o.replace(/\*/g, "**"), i = r(e, o, n)) break;
return i;
}
function a(e) {
return Object.assign({}, {
nocase: !0,
dot: !0
}, e);
}
function s(e, t, n = {}) {
n = a(n);
let r = !1;
return !(t.metadata.nomatch && t.metadata.nomatch.length && o(e, t.metadata.nomatch, n)) && !(t.metadata.exclude && t.metadata.exclude.length && o(e, t.metadata.exclude, n)) && (t.metadata.include && t.metadata.include.length && (r = o(e, t.metadata.include, n)), 
!r && t.metadata.match && t.metadata.match.length && (r = !!l(e, t.metadata.match)), 
r);
}
function l(e, t, n) {
if (Array.isArray(t)) {
for (let r of t) {
let t = l(e, r, n);
if (t) return t;
}
return null;
}
let r = t.match(/^((?:[^\/]+):\/\/)?([^\/]+)?(\/.*)?$/);
if (r) {
let t = new RegExp("^(?:(https?|file|ftp):\\/\\/)?(" + (u(r[2]) ? "" : r[2]).replace(/\*/g, "[^\\/]+").replace(/\./g, "\\.") + ")(" + (u(r[3]) ? "/" : r[3]).replace(/^(\/)$/, "$1?").replace(/^(\/)(\*)$/, "(?:$1?|$1$2)").replace(/\*/g, ".*") + ")" + (n ? "(?:\\?.*)?" : "") + "(?:#.*)?$");
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
function u(e) {
return void 0 === e;
}
t.match = o, t.option = a, t.auto = s, t.matchChrome = l;
}, function(e, t, n) {
e.exports = v, v.Minimatch = m;
var r = {
sep: "/"
};
try {
r = n(20);
} catch (e) {}
var i = v.GLOBSTAR = m.GLOBSTAR = {}, o = n(22), a = {
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
}, s = "[^/]", l = s + "*?", u = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", c = "(?:(?!(?:\\/|^)\\.).)*?", d = f("().*{}+?[]^$\\!");
function f(e) {
return e.split("").reduce(function(e, t) {
return e[t] = !0, e;
}, {});
}
var p = /\/+/;
function h(e, t) {
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
return e.split(p);
}), this.debug(this.pattern, n), n = n.map(function(e, t, n) {
return e.map(this.parse, this);
}, this), this.debug(this.pattern, n), n = n.filter(function(e) {
return -1 === e.indexOf(!1);
}), this.debug(this.pattern, n), this.set = n;
} else this.empty = !0; else this.comment = !0;
}
}
function b() {
var e = this.pattern, t = !1, n, r = 0;
if (!this.options.nonegate) {
for (var i = 0, o = e.length; i < o && "!" === e.charAt(i); i++) t = !t, r++;
r && (this.pattern = e.substr(r)), this.negate = t;
}
}
function x(e, t) {
if (t || (t = this instanceof m ? this.options : {}), void 0 === (e = void 0 === e ? this.pattern : e)) throw new TypeError("undefined pattern");
return t.nobrace || !e.match(/\{.*\}/) ? [ e ] : o(e);
}
v.filter = h, v.defaults = function(e) {
if (!e || !Object.keys(e).length) return v;
var t = v, n = function n(r, i, o) {
return t.minimatch(r, i, g(e, o));
};
return n.Minimatch = function n(r, i) {
return new t.Minimatch(r, g(e, i));
}, n;
}, m.defaults = function(e) {
return e && Object.keys(e).length ? v.defaults(e).Minimatch : m;
}, m.prototype.debug = function() {}, m.prototype.make = y, m.prototype.parseNegate = b, 
v.braceExpand = function(e, t) {
return x(e, t);
}, m.prototype.braceExpand = x, m.prototype.parse = k;
var w = {};
function k(e, t) {
if (e.length > 65536) throw new TypeError("pattern is too long");
var n = this.options;
if (!n.noglobstar && "**" === e) return i;
if ("" === e) return "";
var r = "", o = !!n.nocase, u = !1, c = [], f = [], p, h = !1, g = -1, v = -1, m = "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", y = this;
function b() {
if (p) {
switch (p) {
case "*":
r += l, o = !0;
break;

case "?":
r += s, o = !0;
break;

default:
r += "\\" + p;
break;
}
y.debug("clearStateChar %j %j", p, r), p = !1;
}
}
for (var x = 0, k = e.length, _; x < k && (_ = e.charAt(x)); x++) if (this.debug("%s\t%s %s %j", e, x, r, _), 
u && d[_]) r += "\\" + _, u = !1; else switch (_) {
case "/":
return !1;

case "\\":
b(), u = !0;
continue;

case "?":
case "*":
case "+":
case "@":
case "!":
if (this.debug("%s\t%s %s %j <-- stateChar", e, x, r, _), h) {
this.debug("  in class"), "!" === _ && x === v + 1 && (_ = "^"), r += _;
continue;
}
y.debug("call clearStateChar %j", p), b(), p = _, n.noext && b();
continue;

case "(":
if (h) {
r += "(";
continue;
}
if (!p) {
r += "\\(";
continue;
}
c.push({
type: p,
start: x - 1,
reStart: r.length,
open: a[p].open,
close: a[p].close
}), r += "!" === p ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", p, r), p = !1;
continue;

case ")":
if (h || !c.length) {
r += "\\)";
continue;
}
b(), o = !0;
var C = c.pop();
r += C.close, "!" === C.type && f.push(C), C.reEnd = r.length;
continue;

case "|":
if (h || !c.length || u) {
r += "\\|", u = !1;
continue;
}
b(), r += "|";
continue;

case "[":
if (b(), h) {
r += "\\" + _;
continue;
}
h = !0, v = x, g = r.length, r += _;
continue;

case "]":
if (x === v + 1 || !h) {
r += "\\" + _, u = !1;
continue;
}
if (h) {
var j = e.substring(v + 1, x);
try {
RegExp("[" + j + "]");
} catch (e) {
var A = this.parse(j, w);
r = r.substr(0, g) + "\\[" + A[0] + "\\]", o = o || A[1], h = !1;
continue;
}
}
o = !0, h = !1, r += _;
continue;

default:
b(), u ? u = !1 : !d[_] || "^" === _ && h || (r += "\\"), r += _;
}
for (h && (j = e.substr(v + 1), A = this.parse(j, w), r = r.substr(0, g) + "\\[" + A[0], 
o = o || A[1]), C = c.pop(); C; C = c.pop()) {
var E = r.slice(C.reStart + C.open.length);
this.debug("setting tail", r, C), E = E.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
return n || (n = "\\"), t + t + n + "|";
}), this.debug("tail=%j\n   %s", E, E, C, r);
var M = "*" === C.type ? l : "?" === C.type ? s : "\\" + C.type;
o = !0, r = r.slice(0, C.reStart) + M + "\\(" + E;
}
b(), u && (r += "\\\\");
var S = !1;
switch (r.charAt(0)) {
case ".":
case "[":
case "(":
S = !0;
}
for (var D = f.length - 1; D > -1; D--) {
var O = f[D], N = r.slice(0, O.reStart), L = r.slice(O.reStart, O.reEnd - 8), q = r.slice(O.reEnd - 8, O.reEnd), $ = r.slice(O.reEnd);
q += $;
var G = N.split("(").length - 1, P = $;
for (x = 0; x < G; x++) P = P.replace(/\)[+*?]?/, "");
var H = "", R;
"" === ($ = P) && t !== w && (H = "$"), r = N + L + $ + H + q;
}
if ("" !== r && o && (r = "(?=.)" + r), S && (r = m + r), t === w) return [ r, o ];
if (!o) return T(e);
var I = n.nocase ? "i" : "";
try {
var F = new RegExp("^" + r + "$", I);
} catch (e) {
return new RegExp("$.");
}
return F._glob = e, F._src = r, F;
}
function _() {
if (this.regexp || !1 === this.regexp) return this.regexp;
var e = this.set;
if (!e.length) return this.regexp = !1, this.regexp;
var t = this.options, n = t.noglobstar ? l : t.dot ? u : c, r = t.nocase ? "i" : "", o = e.map(function(e) {
return e.map(function(e) {
return e === i ? n : "string" == typeof e ? j(e) : e._src;
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
"/" !== r.sep && (e = e.split(r.sep).join("/")), e = e.split(p), this.debug(this.pattern, "split", e);
var i = this.set, o, a;
for (this.debug(this.pattern, "set", i), a = e.length - 1; a >= 0 && !(o = e[a]); a--) ;
for (a = 0; a < i.length; a++) {
var s = i[a], l = e, u;
if (n.matchBase && 1 === s.length && (l = [ o ]), this.matchOne(l, s, t)) return !!n.flipNegate || !this.negate;
}
return !n.flipNegate && this.negate;
}
function T(e) {
return e.replace(/\\(.)/g, "$1");
}
function j(e) {
return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
v.makeRe = function(e, t) {
return new m(e, t || {}).makeRe();
}, m.prototype.makeRe = _, v.match = function(e, t, n) {
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
for (var a = 0, s = 0, l = e.length, u = t.length; a < l && s < u; a++, s++) {
this.debug("matchOne loop");
var c = t[s], d = e[a], f;
if (this.debug(t, c, d), !1 === c) return !1;
if (c === i) {
this.debug("GLOBSTAR", [ t, c, d ]);
var p = a, h = s + 1;
if (h === u) {
for (this.debug("** at the end"); a < l; a++) if ("." === e[a] || ".." === e[a] || !r.dot && "." === e[a].charAt(0)) return !1;
return !0;
}
for (;p < l; ) {
var g = e[p];
if (this.debug("\nglobstar while", e, p, t, h, g), this.matchOne(e.slice(p), t.slice(h), n)) return this.debug("globstar found match!", p, l, g), 
!0;
if ("." === g || ".." === g || !r.dot && "." === g.charAt(0)) {
this.debug("dot detected!", e, p, t, h);
break;
}
this.debug("globstar swallow a segment, and continue"), p++;
}
return !(!n || (this.debug("\n>>> no match, partial?", e, p, t, h), p !== l));
}
if ("string" == typeof c ? (f = r.nocase ? d.toLowerCase() === c.toLowerCase() : d === c, 
this.debug("string match", c, d, f)) : (f = d.match(c), this.debug("pattern match", c, d, f)), 
!f) return !1;
}
if (a === l && s === u) return !0;
if (a === l) return n;
if (s === u) return a === l - 1 && "" === e[a];
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
var a = i >= 0 ? arguments[i] : e.cwd();
if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
a && (t = a + "/" + t, r = "/" === a.charAt(0));
}
return (r ? "/" : "") + (t = n(o(t.split("/"), function(e) {
return !!e;
}), !r).join("/")) || ".";
}, t.normalize = function(e) {
var r = t.isAbsolute(e), i = "/" === a(e, -1);
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
for (var i = r(e.split("/")), o = r(n.split("/")), a = Math.min(i.length, o.length), s = a, l = 0; l < a; l++) if (i[l] !== o[l]) {
s = l;
break;
}
for (var u = [], l = s; l < i.length; l++) u.push("..");
return (u = u.concat(o.slice(s))).join("/");
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
var a = "b" === "ab".substr(-1) ? function(e, t, n) {
return e.substr(t, n);
} : function(e, t, n) {
return t < 0 && (t = e.length + t), e.substr(t, n);
};
}).call(this, n(21));
}, function(e, t) {
var n = e.exports = {}, r, i;
function o() {
throw new Error("setTimeout has not been defined");
}
function a() {
throw new Error("clearTimeout has not been defined");
}
function s(e) {
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
function l(e) {
if (i === clearTimeout) return clearTimeout(e);
if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
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
i = "function" == typeof clearTimeout ? clearTimeout : a;
} catch (e) {
i = a;
}
}();
var u = [], c = !1, d, f = -1;
function p() {
c && d && (c = !1, d.length ? u = d.concat(u) : f = -1, u.length && h());
}
function h() {
if (!c) {
var e = s(p);
c = !0;
for (var t = u.length; t; ) {
for (d = u, u = []; ++f < t; ) d && d[f].run();
f = -1, t = u.length;
}
d = null, c = !1, l(e);
}
}
function g(e, t) {
this.fun = e, this.array = t;
}
function v() {}
n.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
u.push(new g(e, t)), 1 !== u.length || c || s(h);
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
}, function(e, t, n) {
var r = n(23), i = n(24);
e.exports = h;
var o = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", s = "\0CLOSE" + Math.random() + "\0", l = "\0COMMA" + Math.random() + "\0", u = "\0PERIOD" + Math.random() + "\0";
function c(e) {
return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function d(e) {
return e.split("\\\\").join(o).split("\\{").join(a).split("\\}").join(s).split("\\,").join(l).split("\\.").join(u);
}
function f(e) {
return e.split(o).join("\\").split(a).join("{").split(s).join("}").split(l).join(",").split(u).join(".");
}
function p(e) {
if (!e) return [ "" ];
var t = [], n = i("{", "}", e);
if (!n) return e.split(",");
var r = n.pre, o = n.body, a = n.post, s = r.split(",");
s[s.length - 1] += "{" + o + "}";
var l = p(a);
return a.length && (s[s.length - 1] += l.shift(), s.push.apply(s, l)), t.push.apply(t, s), 
t;
}
function h(e) {
return e ? ("{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2)), x(d(e), !0).map(f)) : [];
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
function b(e, t) {
return e >= t;
}
function x(e, t) {
var n = [], o = i("{", "}", e);
if (!o || /\$$/.test(o.pre)) return [ e ];
var a = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body), l = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body), u = a || l, d = o.body.indexOf(",") >= 0, f, h;
if (!u && !d) return o.post.match(/,.*\}/) ? x(e = o.pre + "{" + o.body + s + o.post) : [ e ];
if (u) f = o.body.split(/\.\./); else if (1 === (f = p(o.body)).length && 1 === (f = x(f[0], !1).map(v)).length) return (h = o.post.length ? x(o.post, !1) : [ "" ]).map(function(e) {
return o.pre + f[0] + e;
});
var g = o.pre, h = o.post.length ? x(o.post, !1) : [ "" ], w;
if (u) {
var k = c(f[0]), _ = c(f[1]), C = Math.max(f[0].length, f[1].length), T = 3 == f.length ? Math.abs(c(f[2])) : 1, j = y, A;
_ < k && (T *= -1, j = b);
var E = f.some(m);
w = [];
for (var M = k; j(M, _); M += T) {
var S;
if (l) "\\" === (S = String.fromCharCode(M)) && (S = ""); else if (S = String(M), 
E) {
var D = C - S.length;
if (D > 0) {
var O = new Array(D + 1).join("0");
S = M < 0 ? "-" + O + S.slice(1) : O + S;
}
}
w.push(S);
}
} else w = r(f, function(e) {
return x(e, !1);
});
for (var N = 0; N < w.length; N++) for (var L = 0; L < h.length; L++) {
var q = g + w[N] + h[L];
(!t || u || q) && n.push(q);
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
var r, i, o, a, s, l = n.indexOf(e), u = n.indexOf(t, l + 1), c = l;
if (l >= 0 && u > 0) {
for (r = [], o = n.length; c >= 0 && !s; ) c == l ? (r.push(c), l = n.indexOf(e, c + 1)) : 1 == r.length ? s = [ r.pop(), u ] : ((i = r.pop()) < o && (o = i, 
a = u), u = n.indexOf(t, c + 1)), c = l < u && l >= 0 ? l : u;
r.length && (s = [ o, a ]);
}
return s;
}
e.exports = r, r.range = o;
}, function(e, t, n) {
"use strict";
(function(e) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(26);
function i(e, t) {
switch (o(e), s()) {
case "disk":
let n;
return void new l(t).init();

case "share":
case "s":
let r;
return void new u(t).init();

default:
return;
}
}
function o(e) {
e.fn.dialogDrag = function() {
let t, n, r, i, o = document.body.clientWidth, a = this;
e("div.dialog-header", this).mousedown(function(s) {
t = parseInt(s.pageX), n = parseInt(s.pageY), r = parseInt(a.css("left").replace("px", "")), 
i = parseInt(a.css("top").replace("px", "")), e(this).mousemove(function(e) {
let s = r + parseInt(e.pageX) - t, l = i + parseInt(e.pageY) - n, u = parseInt(a.css("width").replace("px", ""));
s = s < 0 ? 0 : s > o - u ? o - u : s, l = l < 0 ? 0 : l, a.css("left", s + "px").css("top", l + "px");
});
}), e("div.dialog-header", this).mouseup(function(t) {
e(this).unbind("mousemove");
});
};
}
function a(e, n, r) {
e = e || "", n = n || "", r = r || "", console.log("#" + t.log_count++ + "-BaiDuNetdiskHelper-log:", e, n, r);
}
function s() {
let e = /[\/].+[\/]/g, t;
return location.pathname.match(e)[0].replace(/\//g, "");
}
function l(n) {
var r, i, o, s, l, u, d = [], h = [], g = [], v = [], m = [], y = "list", b, x, w, k, _, C, T = location.protocol + "//" + location.host + "/api/", j = location.protocol + "//pcs.baidu.com/rest/2.0/pcs/", A = location.protocol + "//d.pcs.baidu.com/rest/2.0/pcs/", E = "http:" == location.protocol ? t.wordMapHttp : t.wordMapHttps;
function M() {
i = Y(), o = se(), s = le(), l = c(), a("Current display mode:", x = ne()), "list" == x && (w = Z()), 
"category" == x && (k = ee()), "search" == x && (C = te()), O(), S(), D();
}
function S() {
"list" == x ? d = re() : "category" == x ? d = ie() : "search" == x && (d = oe());
}
function D() {
h = [];
}
function O() {
y = N();
}
function N() {
return e("div." + E["list-grid-switch"]).hasClass(E["list-switched-on"]) ? "list" : e("div." + E["list-grid-switch"]).hasClass(E["grid-switched-on"]) ? "grid" : "list";
}
function L() {
q(), $(), G(), H(), I();
}
function q() {
window.addEventListener("hashchange", function(e) {
if (O(), "list" == ne()) if (x == ne()) {
if (w == Z()) return;
w = Z(), S(), D();
} else x = ne(), w = Z(), S(), D(); else if ("category" == ne()) if (x == ne()) {
if (k == ee()) return;
x = ne(), k = ee(), S(), D();
} else x = ne(), k = ee(), S(), D(); else if ("search" == ne()) if (x == ne()) {
if (C == te()) return;
x = ne(), C = te(), S(), D();
} else x = ne(), C = te(), S(), D();
});
}
function $() {
var t, n;
e("a[node-type=" + E["list-switch"] + "]").click(function() {
y = "list";
}), e("a[node-type=" + E["grid-switch"] + "]").click(function() {
y = "grid";
});
}
function G() {
var t;
e("span." + E.checkbox).each(function(t, n) {
e(n).bind("click", function(t) {
var n = e(this).parent(), r;
if ("list" == y ? r = e("div.file-name div.text a", n).attr("title") : "grid" == y && (r = e("div.file-name a", n).attr("title")), 
n.hasClass(E["item-active"])) {
a("取消选中文件：" + r);
for (var i = 0; i < h.length; i++) h[i].filename == r && h.splice(i, 1);
} else a("选中文件:" + r), e.each(d, function(e, t) {
if (t.server_filename == r) {
let e = {
filename: t.server_filename,
path: t.path,
fs_id: t.fs_id,
isdir: t.isdir
};
h.push(e);
}
});
});
});
}
function P() {
var t;
e("span." + E.checkbox).each(function(t, n) {
e(n).unbind("click");
});
}
function H() {
var t;
e("div." + E["col-item"] + "." + E.check).each(function(t, n) {
e(n).bind("click", function(t) {
var n;
e(this).parent().hasClass(E.checked) ? (a("取消全选"), h = []) : (a("全部选中"), h = [], 
e.each(d, function(e, t) {
let n = {
filename: t.server_filename,
path: t.path,
fs_id: t.fs_id,
isdir: t.isdir
};
h.push(n);
}));
});
});
}
function R() {
var t;
e("div." + E["col-item"] + "." + E.check).each(function(t, n) {
e(n).unbind("click");
});
}
function I() {
var t;
e("div." + E["list-view"] + " dd").each(function(t, n) {
e(n).bind("click", function(t) {
var n = t.target.nodeName.toLowerCase();
if ("span" != n && "a" != n && "em" != n) if (a("shiftKey:" + t.shiftKey), t.shiftKey) {
h = [];
var r = e("div." + E["list-view"] + " dd." + E["item-active"]);
e.each(r, function(t, n) {
var r = e("div.file-name div.text a", e(n)).attr("title");
a("选中文件：" + r), e.each(d, function(e, t) {
if (t.server_filename == r) {
var n = {
filename: t.server_filename,
path: t.path,
fs_id: t.fs_id,
isdir: t.isdir
};
h.push(n);
}
});
});
} else {
h = [];
var i = e("div.file-name div.text a", e(this)).attr("title");
a("选中文件：" + i), e.each(d, function(e, t) {
if (t.server_filename == i) {
let e = {
filename: t.server_filename,
path: t.path,
fs_id: t.fs_id,
isdir: t.isdir
};
h.push(e);
}
});
}
});
});
}
function F() {
var t;
e("div." + E["list-view"] + " dd").each(function(t, n) {
e(n).unbind("click");
});
}
function W() {
let e = window.MutationObserver, t = {
childList: !0
};
b = new e(function(e) {
P(), R(), F(), G(), H(), I();
});
var n = document.querySelector("." + E["list-view"]), r = document.querySelector("." + E["grid-view"]);
b.observe(n, t), b.observe(r, t);
}
function B() {
e("div." + E["bar-search"]).css("width", "18%");
var t = e('<span class="g-dropdown-button"></span>'), n = e('<a class="g-button" href="javascript:void(0);"><span class="g-button-right"><em class="icon icon-download" title="百度网盘下载助手"></em><span class="text" style="width: auto;">下载助手</span></span></a>'), r = e('<span class="menu" style="width:96px"></span>'), i = e('<span class="g-button-menu" style="display:block"></span>'), o = e('<span class="g-dropdown-button g-dropdown-button-second" menulevel="2"></span>'), a = e('<a class="g-button" href="javascript:void(0);"><span class="g-button-right"><span class="text" style="width:auto">直接下载</span></span></a>'), s = e('<span class="menu" style="width:120px;left:79px"></span>'), l = e('<a id="download-direct" class="g-button-menu" href="javascript:void(0);">下载</a>'), u = e('<a id="link-direct" class="g-button-menu" href="javascript:void(0);">显示链接</a>'), c = e('<a id="batchhttplink-direct" class="g-button-menu" href="javascript:void(0);">批量链接(HTTP)</a>'), d = e('<a id="batchhttpslink-direct" class="g-button-menu" href="javascript:void(0);">批量链接(HTTPS)</a>');
s.append(l).append(u).append(c).append(d), i.append(o.append(a).append(s)), i.hover(function() {
o.toggleClass("button-open");
}), l.click(U), u.click(z), c.click(Q), d.click(Q);
var f = e('<span class="g-button-menu" style="display:block"></span>'), p = e('<span class="g-dropdown-button g-dropdown-button-second" menulevel="2"></span>'), h = e('<a class="g-button" href="javascript:void(0);"><span class="g-button-right"><span class="text" style="width:auto">API下载</span></span></a>'), g = e('<span class="menu" style="width:120px;left:77px"></span>'), v = e('<a id="download-api" class="g-button-menu" href="javascript:void(0);">下载</a>'), m = e('<a id="httplink-api" class="g-button-menu" href="javascript:void(0);">显示链接</a>'), y = e('<a id="batchhttplink-api" class="g-button-menu" href="javascript:void(0);">批量链接(HTTP)</a>'), b = e('<a id="batchhttpslink-api" class="g-button-menu" href="javascript:void(0);">批量链接(HTTPS)</a>');
g.append(v).append(m).append(y).append(b), f.append(p.append(h).append(g)), f.hover(function() {
p.toggleClass("button-open");
}), v.click(U), m.click(z), y.click(Q), b.click(Q);
var x = e('<span class="g-button-menu" style="display:block"></span>'), w = e('<span class="g-dropdown-button g-dropdown-button-second" menulevel="2"></span>'), k = e('<a class="g-button" href="javascript:void(0);"><span class="g-button-right"><span class="text" style="width:auto">外链下载</span></span></a>'), _ = e('<span class="menu" style="width:120px;left:79px"></span>'), C = e('<a id="download-outerlink" class="g-button-menu" href="javascript:void(0);">下载</a>'), T = e('<a id="link-outerlink" class="g-button-menu" href="javascript:void(0);">显示链接</a>'), j = e('<a id="batchlink-outerlink" class="g-button-menu" href="javascript:void(0);">批量链接</a>');
_.append(C).append(T).append(j), x.append(w.append(k).append(_)), x.hover(function() {
w.toggleClass("button-open");
}), C.click(U), T.click(z), j.click(Q), r.append(i).append(f).append(x), t.append(n).append(r), 
t.hover(function() {
t.toggleClass("button-open");
}), e("div." + E["list-tools"]).append(t);
}
function U(e) {
a("选中文件列表：", h);
var t = e.target.id, n;
if ("download-direct" == t) {
var r, i;
if (0 === h.length) return void alert("获取选中文件失败，请刷新重试！");
if (1 == h.length ? 1 === h[0].isdir ? r = "batch" : 0 === h[0].isdir && (r = "dlink") : h.length > 1 && (r = "batch"), 
u = ae(h), 0 !== (i = ue(r)).errno) return -1 == i.errno ? void alert("文件不存在或已被百度和谐，无法下载！") : 112 == i.errno ? void alert("页面过期，请刷新重试！") : void alert("发生错误！");
if ("dlink" == r) n = i.dlink[0].dlink; else {
if ("batch" != r) return void alert("发生错误！");
n = i.dlink, 1 === h.length && (n = n + "&zipname=" + encodeURIComponent(h[0].filename) + ".zip");
}
} else {
if (0 === h.length) return void alert("获取选中文件失败，请刷新重试！");
if (h.length > 1) return void alert("该方法不支持多文件下载！");
if (1 == h[0].isdir) return void alert("该方法不支持目录下载！");
if ("download-api" == t) n = ce(h[0].path); else if ("download-outerlink" == t) {
var i;
if (0 != (i = fe(h[0].path)).errno) return 1 == i.errno ? void alert("文件不存在！") : 2 == i.errno ? void alert("文件不存在或者已被百度和谐，无法下载！") : void alert("发生错误！");
n = i.urls[0].url;
}
}
pe(n);
}
function z(t) {
a("选中文件列表：", h);
var n = t.target.id, r, i;
if (-1 != n.indexOf("direct")) {
var o, s, l;
if (0 === h.length) return void alert("获取选中文件失败，请刷新重试！");
if (1 == h.length ? 1 === h[0].isdir ? o = "batch" : 0 === h[0].isdir && (o = "dlink") : h.length > 1 && (o = "batch"), 
u = ae(h), 0 !== (l = ue(o)).errno) return -1 == l.errno ? void alert("文件不存在或已被百度和谐，无法下载！") : 112 == l.errno ? void alert("页面过期，请刷新重试！") : void alert("发生错误！");
if ("dlink" == o) s = l.dlink[0].dlink; else {
if ("batch" != o) return void alert("发生错误！");
a(h), s = l.dlink, 1 === h.length && (s = s + "&zipname=" + encodeURIComponent(h[0].filename) + ".zip");
}
var c = s.replace(/^([A-Za-z]+):/, "http:"), d = s.replace(/^([A-Za-z]+):/, "https:"), f = "";
e.each(h, function(e, t) {
f = 1 == h.length ? t.filename : 0 == e ? t.filename : f + "," + t.filename;
}), r = {
filename: f,
urls: [ {
url: c,
rank: 1
}, {
url: d,
rank: 2
} ]
}, i = "显示模拟百度网盘网页获取的链接，可以使用右键迅雷下载，复制到下载工具需要传递cookie，多文件打包下载的链接可以直接复制使用", _.open({
title: "下载链接",
type: "link",
list: r,
tip: i
});
} else {
if (0 === h.length) return void alert("获取选中文件失败，请刷新重试！");
if (h.length > 1) return void alert("该方法不支持多文件下载！");
if (1 == h[0].isdir) return void alert("该方法不支持目录下载！");
if (-1 != n.indexOf("api")) {
var s, c = (s = ce(h[0].path)).replace(/^([A-Za-z]+):/, "http:"), d = s.replace(/^([A-Za-z]+):/, "https:");
r = {
filename: h[0].filename,
urls: [ {
url: c,
rank: 1
}, {
url: d,
rank: 2
} ]
}, c = c.replace("250528", "266719"), d = d.replace("250528", "266719"), r.urls.push({
url: c,
rank: 3
}), r.urls.push({
url: d,
rank: 4
}), i = "显示模拟APP获取的链接(使用百度云ID)，可以使用右键迅雷下载，复制到下载工具需要传递cookie", _.open({
title: "下载链接",
type: "link",
list: r,
tip: i
});
} else if (-1 != n.indexOf("outerlink")) {
var l;
if (0 != (l = fe(h[0].path)).errno) return 1 == l.errno ? void alert("文件不存在！") : 2 == l.errno ? void alert("文件不存在或者已被百度和谐，无法下载！") : void alert("发生错误！");
r = {
filename: h[0].filename,
urls: l.urls
}, i = "显示模拟百度网盘客户端获取的链接，可以直接复制到下载工具使用，不需要cookie", _.open({
title: "下载链接",
type: "link",
list: r,
tip: i,
showcopy: !0,
showedit: !0
});
}
}
}
function Q(e) {
if (a("选中文件列表：", h), 0 !== h.length) {
var t = e.target.id, n, r;
if (n = -1 == t.indexOf("https") ? -1 == t.indexOf("http") ? location.protocol + ":" : "http:" : "https:", 
g = [], v = [], -1 != t.indexOf("direct")) {
if (r = "显示所有选中文件的直接下载链接，文件夹显示为打包下载的链接", 0 === (g = X(n)).length) return void alert("没有链接可以显示，API链接不要全部选中文件夹！");
_.open({
title: "批量链接",
type: "batch",
list: g,
tip: r,
showcopy: !0
});
} else if (-1 != t.indexOf("api")) {
if (r = "显示所有选中文件的API下载链接，不显示文件夹", 0 === (g = V(n)).length) return void alert("没有链接可以显示，API链接不要全部选中文件夹！");
_.open({
title: "批量链接",
type: "batch",
list: g,
tip: r,
showcopy: !0
});
} else if (-1 != t.indexOf("outerlink")) {
if (v = J(), r = "显示所有选中文件的外部下载链接，不显示文件夹", 0 === (g = K(v)).length) return void alert("没有链接可以显示，API链接不要全部选中文件夹！");
_.open({
title: "批量链接",
type: "batch",
list: g,
tip: r,
showcopy: !0,
alllist: v,
showall: !0
});
}
} else alert("获取选中文件失败，请刷新重试！");
}
function X(t) {
var n = [];
return e.each(h, function(e, r) {
var i, o, a;
i = 0 == r.isdir ? "dlink" : "batch", u = ae([ r ]), 0 == (a = ue(i)).errno ? ("dlink" == i ? o = a.dlink[0].dlink : "batch" == i && (o = a.dlink), 
o = o.replace(/^([A-Za-z]+):/, t)) : o = "error", n.push({
filename: r.filename,
downloadlink: o
});
}), n;
}
function V(t) {
var n = [];
return e.each(h, function(e, r) {
var i;
1 != r.isdir && (i = (i = ce(r.path)).replace(/^([A-Za-z]+):/, t), n.push({
filename: r.filename,
downloadlink: i
}));
}), n;
}
function J() {
var t = [];
return e.each(h, function(e, n) {
var r;
1 != n.isdir && (0 == (r = fe(n.path)).errno ? t.push({
filename: n.filename,
links: r.urls
}) : t.push({
filename: n.filename,
links: [ {
rank: 1,
url: "error"
} ]
}));
}), t;
}
function K(t) {
var n = [];
return e.each(t, function(e, t) {
n.push({
filename: t.filename,
downloadlink: t.links[0].url
});
}), n;
}
function Y() {
var e;
try {
e = new Function("return " + r.sign2)();
} catch (e) {
throw new Error(e.message);
}
return f(e(r.sign5, r.sign1));
}
function Z() {
var e, t = /(^|&|\/)path=([^&]*)(&|$)/i, n = location.hash.match(t);
return decodeURIComponent(n[2]);
}
function ee() {
var e, t = /(^|&|\/)type=([^&]*)(&|$)/i, n = location.hash.match(t);
return decodeURIComponent(n[2]);
}
function te() {
var e, t = /(^|&|\/)key=([^&]*)(&|$)/i, n = location.hash.match(t);
return decodeURIComponent(n[2]);
}
function ne() {
var e = location.hash, t = decodeURIComponent(e.substring(e.indexOf("#") + 1, e.indexOf("/")));
return "" == t && (t = decodeURIComponent(e.substring(e.indexOf("=") + 1, e.indexOf("&")))), 
t;
}
function re() {
var t = [], n = T + "list", r = Z();
l = c();
var i = {
dir: r,
bdstoken: s,
logid: l,
order: "size",
desc: 0,
clienttype: 0,
showempty: 0,
web: 1,
channel: "chunlei",
appid: 250528
};
return e.ajax({
url: n,
async: !1,
method: "GET",
data: i,
success: function(e) {
t = 0 === e.errno ? e.list : [];
}
}), t;
}
function ie() {
var t = [], n = T + "categorylist", r = ee();
l = c();
var i = {
category: r,
bdstoken: s,
logid: l,
order: "size",
desc: 0,
clienttype: 0,
showempty: 0,
web: 1,
channel: "chunlei",
appid: 250528
};
return e.ajax({
url: n,
async: !1,
method: "GET",
data: i,
success: function(e) {
t = 0 === e.errno ? e.info : [];
}
}), t;
}
function oe() {
var t = [], n = T + "search";
l = c();
var r = {
recursion: 1,
order: "time",
desc: 1,
showempty: 0,
web: 1,
page: 1,
num: 100,
key: C = te(),
channel: "chunlei",
app_id: 250528,
bdstoken: s,
logid: l,
clienttype: 0
};
return e.ajax({
url: n,
async: !1,
method: "GET",
data: r,
success: function(e) {
t = 0 === e.errno ? e.list : [];
}
}), t;
}
function ae(t) {
var n = null;
if (0 === t.length) return null;
var r = [];
return e.each(t, function(e, t) {
r.push(t.fs_id);
}), n = "[" + r + "]";
}
function se() {
return r.timestamp;
}
function le() {
return r.MYBDSTOKEN;
}
function ue(t) {
var n = T + "download", r;
l = c();
var a = {
sign: i,
timestamp: o,
fidlist: u,
type: t,
channel: "chunlei",
web: 1,
app_id: 250528,
bdstoken: s,
logid: l,
clienttype: 0
};
return e.ajax({
url: n,
async: !1,
method: "GET",
data: a,
success: function(e) {
r = e;
}
}), r;
}
function ce(e) {
var t;
return j + "file?method=download&app_id=250528&path=" + encodeURIComponent(e);
}
function de(e) {
var t;
return j + "file?method=download&app_id=266719&path=" + encodeURIComponent(e);
}
function fe(t) {
var n, r = A + "file?method=locatedownload&app_id=250528&ver=4.0&path=" + encodeURIComponent(t);
return e.ajax({
url: r,
method: "POST",
xhrFields: {
withCredentials: !0
},
async: !1,
success: function(e) {
n = JSON.parse(e);
},
statusCode: {
404: function(e) {
n = e;
}
}
}), n ? null == n.error_code ? null == n.urls ? n.errno = 2 : (e.each(n.urls, function(e, t) {
n.urls[e].url = t.url.replace("\\", "");
}), n.errno = 0) : 31066 == n.error_code ? n.errno = 1 : n.errno = -1 : (n = {}).errno = -1, 
n;
}
function pe(t) {
a("下载链接：" + t), e("#helperdownloadiframe").attr("src", t);
}
function he() {
var t = e('<div class="helper-hide" style="padding:0;margin:0;display:block"></div>'), n = e('<iframe src="javascript:void(0)" id="helperdownloadiframe" style="display:none"></iframe>');
t.append(n), e("body").append(t);
}
this.init = function() {
a("yunData:", r = unsafeWindow.yunData), void 0 !== r ? (M(), L(), W(), B(), he(), 
_ = new p({
addCopy: !0
}), a("网盘直接下载助手加载成功！")) : a("页面未正常加载，或者百度已经更新！");
};
}
function u(n) {
var r, i, o, s, l, u, f, g, v, m, y, b, x, w, k, _, C, T, j, A, E, M, S, D, O = [], N = [], L = location.protocol + "//" + location.host + "/api/", q = location.protocol + "//" + location.host + "/share/list", $ = "http:" == location.protocol ? t.wordMapHttp : t.wordMapHttps;
function G() {
if (T = P(), i = r.SIGN, o = r.TIMESTAMP, s = r.MYBDSTOKEN, l = "chunlei", u = 0, 
f = 1, g = 250528, v = c(), m = 0, y = "share", x = r.SHARE_ID, b = r.SHARE_UK, 
"secret" == T && (k = I()), H()) {
let e = {};
2 == r.CATEGORY ? (e.filename = r.FILENAME, e.path = r.PATH, e.fs_id = r.FS_ID, 
e.isdir = 0) : (e.filename = r.FILEINFO[0].server_filename, e.path = r.FILEINFO[0].path, 
e.fs_id = r.FILEINFO[0].fs_id, e.isdir = r.FILEINFO[0].isdir), N.push(e);
} else _ = r.SHARE_ID, A = F(), E = W(), O = ie();
}
function P() {
return 1 === r.SHARE_PUBLIC ? "public" : "secret";
}
function H() {
return void 0 === r.getContext;
}
function R() {
return 1 == r.MYSELF;
}
function I() {
var e;
return '{"sekey":"' + decodeURIComponent(d("BDCLND")) + '"}';
}
function F() {
var e, t = /(^|&|\/)path=([^&]*)(&|$)/i, n = location.hash.match(t);
return decodeURIComponent(n[2]);
}
function W() {
var t = "list", n = e("div.list-grid-switch");
return n.hasClass("list-switched-on") ? t = "list" : n.hasClass("grid-switched-on") && (t = "grid"), 
t;
}
function B() {
H() ? (e("div.slide-show-right").css("width", "500px"), e("div.frame-main").css("width", "96%"), 
e("div.share-file-viewer").css("width", "740px").css("margin-left", "auto").css("margin-right", "auto")) : e("div.slide-show-right").css("width", "500px");
var t = e('<span class="g-dropdown-button"></span>'), n = e('<a class="g-button" data-button-id="b200" data-button-index="200" href="javascript:void(0);"></a>'), r = e('<span class="g-button-right"><em class="icon icon-download" title="百度网盘下载助手"></em><span class="text" style="width: auto;">下载助手</span></span>'), i = e('<span class="menu" style="width:auto;z-index:41"></span>'), o = e('<a data-menu-id="b-menu207" class="g-button-menu" href="javascript:void(0);">直接下载</a>'), a = e('<a data-menu-id="b-menu208" class="g-button-menu" href="javascript:void(0);">显示链接</a>');
i.append(o).append(a), n.append(r), t.append(n).append(i), t.hover(function() {
t.toggleClass("button-open");
}), o.click(oe), a.click(ce), e("div.module-share-top-bar div.bar div.x-button-box").append(t);
}
function U() {
var t = e('<div class="helper-hide" style="padding:0;margin:0;display:block"></div>'), n = e('<iframe src="javascript:void(0)" id="helperdownloadiframe" style="display:none"></iframe>');
t.append(n), e("body").append(t);
}
function z() {
Q(), J(), K(), Z(), te();
}
function Q() {
window.addEventListener("hashchange", function(e) {
E = W(), A != F() && (A = F(), X(), V());
});
}
function X() {
O = ie();
}
function V() {
N = [];
}
function J() {
var t, n;
e("a[node-type=list-switch]").click(function() {
E = "list";
}), e("a[node-type=grid-switch]").click(function() {
E = "grid";
});
}
function K() {
var t;
e("span." + $.checkbox).each(function(t, n) {
e(n).bind("click", function(t) {
var n = e(this).parent(), r;
if ("list" == E ? r = e("div.file-name div.text a", n).attr("title") : "grid" == E && (r = e("div.file-name a", n).attr("title")), 
n.hasClass("item-active")) {
a("取消选中文件：" + r);
for (var i = 0; i < N.length; i++) N[i].filename == r && N.splice(i, 1);
} else a("选中文件：" + r), e.each(O, function(e, t) {
if (t.server_filename == r) {
let e = {
filename: t.server_filename,
path: t.path,
fs_id: t.fs_id,
isdir: t.isdir
};
N.push(e);
}
});
});
});
}
function Y() {
var t;
e("span." + $.checkbox).each(function(t, n) {
e(n).unbind("click");
});
}
function Z() {
var t;
e("div." + $["col-item"] + "." + $.check).each(function(t, n) {
e(n).bind("click", function(t) {
var n;
e(this).parent().hasClass($.checked) ? (a("取消全选"), N = []) : (a("全部选中"), N = [], 
e.each(O, function(e, t) {
let n = {
filename: t.server_filename,
path: t.path,
fs_id: t.fs_id,
isdir: t.isdir
};
N.push(n);
}));
});
});
}
function ee() {
var t;
e("div." + $["col-item"] + "." + $.check).each(function(t, n) {
e(n).unbind("click");
});
}
function te() {
var t;
e("div." + $["list-view"] + " dd").each(function(t, n) {
e(n).bind("click", function(t) {
var n = t.target.nodeName.toLowerCase();
if ("span" != n && "a" != n && "em" != n) {
N = [];
var r = e("div.file-name div.text a", e(this)).attr("title");
a("选中文件：" + r), e.each(O, function(e, t) {
if (t.server_filename == r) {
let e = {
filename: t.server_filename,
path: t.path,
fs_id: t.fs_id,
isdir: t.isdir
};
N.push(e);
}
});
}
});
});
}
function ne() {
var t;
e("div." + $["list-view"] + " dd").each(function(t, n) {
e(n).unbind("click");
});
}
function re() {
var e = window.MutationObserver, t = {
childList: !0
};
M = new e(function(e) {
Y(), ee(), ne(), K(), Z(), te();
});
var n = document.querySelector("." + $["list-view"]), r = document.querySelector("." + $["grid-view"]);
M.observe(n, t), M.observe(r, t);
}
function ie() {
var t = [];
if ("/" == F()) t = r.FILEINFO; else {
v = c();
var n = {
uk: b,
shareid: _,
order: "other",
desc: 1,
showempty: 0,
web: f,
dir: F(),
t: Math.random(),
bdstoken: s,
channel: l,
clienttype: u,
app_id: g,
logid: v
};
e.ajax({
url: q,
method: "GET",
async: !1,
data: n,
success: function(e) {
0 === e.errno && (t = e.list);
}
});
}
return t;
}
function oe() {
if (a("选中文件列表：", N), 0 !== N.length) {
j = "download";
var e = de();
if (-20 == e.errno) {
if (0 !== (C = ae()).errno) return void alert("获取验证码失败！");
D.open(C);
} else {
if (112 == e.errno) return void alert("页面过期，请刷新重试");
if (0 !== e.errno) return void alert("获取下载链接失败！");
var t;
pe(t = 1 == N.length && 0 === N[0].isdir ? e.list[0].dlink : e.dlink);
}
} else alert("获取文件ID失败，请重试");
}
function ae() {
var t = L + "getvcode", n;
v = c();
var r = {
prod: "pan",
t: Math.random(),
bdstoken: s,
channel: l,
clienttype: u,
web: f,
app_id: g,
logid: v
};
return e.ajax({
url: t,
method: "GET",
async: !1,
data: r,
success: function(e) {
n = e;
}
}), n;
}
function se() {
C = ae(), e("#dialog-img").attr("src", C.img);
}
function le() {
var t = e("#dialog-input").val();
if (0 !== t.length) if (t.length < 4) e("#dialog-err").text("验证码输入错误，请重新输入"); else {
var n = fe(t);
if (-20 == n.errno) {
if (D.close(), e("#dialog-err").text("验证码输入错误，请重新输入"), se(), !C || 0 !== C.errno) return void alert("获取验证码失败！");
D.open();
} else {
if (0 !== n.errno) return void alert("发生错误！");
var r;
if (D.close(), r = 1 == N.length && 0 === N[0].isdir ? n.list[0].dlink : n.dlink, 
"download" == j) pe(r); else if ("link" == j) {
var i = "";
e.each(N, function(e, t) {
i = 1 == N.length ? t.filename : 0 == e ? t.filename : i + "," + t.filename;
});
var o = {
filename: i,
urls: [ {
url: r,
rank: 1
} ]
}, a = "显示获取的链接，可以使用右键迅雷下载，复制无用，需要传递cookie";
S.open({
title: "下载链接",
type: "link",
list: o,
tip: a
});
}
}
} else e("#dialog-err").text("请输入验证码");
}
function ue() {
var t = [];
return e.each(N, function(e, n) {
t.push(n.fs_id);
}), "[" + t + "]";
}
function ce() {
if (a("选中文件列表：", N), 0 !== N.length) {
j = "link";
var t = de();
if (-20 == t.errno) {
if (!(C = ae()) || 0 !== C.errno) return void alert("获取验证码失败！");
D.open(C);
} else {
if (112 == t.errno) return void alert("页面过期，请刷新重试");
if (0 !== t.errno) return void alert("获取下载链接失败！");
var n;
n = 1 == N.length && 0 === N[0].isdir ? t.list[0].dlink : t.dlink, N.length, e("#dialog-downloadlink").attr("href", n).text(n);
var r = "";
e.each(N, function(e, t) {
r = 1 == N.length ? t.filename : 0 == e ? t.filename : r + "," + t.filename;
});
var i = {
filename: r,
urls: [ {
url: n,
rank: 1
} ]
}, o = "显示获取的链接，可以使用右键迅雷下载，复制无用，需要传递cookie";
S.open({
title: "下载链接",
type: "link",
list: i,
tip: o
});
}
} else alert("没有选中文件，请重试");
}
function de() {
var t;
if (H) {
w = ue(), v = c();
var n = L + "sharedownload?sign=" + i + "&timestamp=" + o + "&bdstoken=" + s + "&channel=" + l + "&clienttype=" + u + "&web=" + f + "&app_id=" + g + "&logid=" + v, r = {
encrypt: m,
product: y,
uk: b,
primaryid: x,
fid_list: w
};
"secret" == T && (r.extra = k), (1 == N[0].isdir || N.length > 1) && (r.type = "batch"), 
e.ajax({
url: n,
method: "POST",
async: !1,
data: r,
success: function(e) {
t = e;
}
});
}
return t;
}
function fe(t) {
var n;
if (H) {
w = ue();
var r = L + "sharedownload?sign=" + i + "&timestamp=" + o + "&bdstoken=" + s + "&channel=" + l + "&clienttype=" + u + "&web=" + f + "&app_id=" + g + "&logid=" + v, a = {
encrypt: m,
product: y,
vcode_input: t,
vcode_str: C.vcode,
uk: b,
primaryid: x,
fid_list: w
};
"secret" == T && (a.extra = k), (1 == N[0].isdir || N.length > 1) && (a.type = "batch"), 
e.ajax({
url: r,
method: "POST",
async: !1,
data: a,
success: function(e) {
n = e;
}
});
}
return n;
}
function pe(t) {
a("下载链接：" + t), e("#helperdownloadiframe").attr("src", t);
}
this.init = function() {
a("yunData:", r = unsafeWindow.yunData), void 0 !== r && null != r.FILEINFO ? (G(), 
B(), S = new p({
addCopy: !1
}), D = new h(se, le), U(), H() || (z(), re()), a("分享直接下载加载成功!")) : a("页面未正常加载，或者百度已经更新！");
};
}
function c() {
let e = "BAIDUID", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/~！@#￥%……&", n = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, r = String.fromCharCode;
function i(e) {
if (e.length < 2) {
let t = e.charCodeAt(0);
return 128 > t ? e : 2048 > t ? r(192 | t >>> 6) + r(128 | 63 & t) : r(224 | t >>> 12 & 15) + r(128 | t >>> 6 & 63) + r(128 | 63 & t);
}
let t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
return r(240 | t >>> 18 & 7) + r(128 | t >>> 12 & 63) + r(128 | t >>> 6 & 63) + r(128 | 63 & t);
}
function o(e) {
return (e + "" + Math.random()).replace(n, i);
}
function a(e) {
let n = [ 0, 2, 1 ][e.length % 3], r = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0), i;
return [ t.charAt(r >>> 18), t.charAt(r >>> 12 & 63), n >= 2 ? "=" : t.charAt(r >>> 6 & 63), n >= 1 ? "=" : t.charAt(63 & r) ].join("");
}
function s(e) {
return e.replace(/[\s\S]{1,3}/g, a);
}
function l() {
return s(o(new Date().getTime()));
}
function u(e, t) {
return t ? l(String(e)).replace(/[+\/]/g, function(e) {
return "+" == e ? "-" : "_";
}).replace(/=/g, "") : l(String(e));
}
return u(d(e));
}
function d(e) {
let t, n, r = document, i = decodeURI;
return r.cookie.length > 0 && -1 != (t = r.cookie.indexOf(e + "=")) ? (t = t + e.length + 1, 
-1 == (n = r.cookie.indexOf(";", t)) && (n = r.cookie.length), i(r.cookie.substring(t, n))) : "";
}
function f(e) {
let t, n, r, i, o, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (r = e.length, n = 0, t = ""; r > n; ) {
if (i = 255 & e.charCodeAt(n++), n == r) {
t += s.charAt(i >> 2), t += s.charAt((3 & i) << 4), t += "==";
break;
}
if (o = e.charCodeAt(n++), n == r) {
t += s.charAt(i >> 2), t += s.charAt((3 & i) << 4 | (240 & o) >> 4), t += s.charAt((15 & o) << 2), 
t += "=";
break;
}
a = e.charCodeAt(n++), t += s.charAt(i >> 2), t += s.charAt((3 & i) << 4 | (240 & o) >> 4), 
t += s.charAt((15 & o) << 2 | (192 & a) >> 6), t += s.charAt(63 & a);
}
return t;
}
function p(t) {
var n = [], i, o, a;
function s() {
var t = document.body.clientWidth, a, s = e('<div class="dialog" style="width: 800px; top: 0px; bottom: auto; left: ' + (t > 800 ? (t - 800) / 2 : 0) + 'px; right: auto; display: hidden; visibility: visible; z-index: 52;"></div>'), l = e('<div class="dialog-header"><h3><span class="dialog-title" style="display:inline-block;width:740px;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis"></span></h3></div>'), c = e('<div class="dialog-control"><span class="dialog-icon dialog-close">×</span></div>'), d = e('<div class="dialog-body" style="max-height:450px;overflow-y:auto;padding:0 20px;"></div>'), f = e('<div class="dialog-tip" style="padding-left:20px;background-color:#FAF2D3;border-top: 1px solid #C4DBFE;"><p></p></div>');
s.append(l.append(c)).append(d);
var p = e('<div class="dialog-radio" style="display:none;width:760px;padding-left:20px;padding-right:20px"></div>'), h = e('<input type="radio" name="showmode" checked="checked" value="multi"><span>多行</span>'), g = e('<input type="radio" name="showmode" value="single"><span>单行</span>');
p.append(h).append(g), s.append(p), e("input[type=radio][name=showmode]", p).change(function() {
var t = this.value, n = e("div.dialog-body textarea[name=dialog-textarea]", o), r = n.val();
"multi" == t ? (r = r.replace(/\s+/g, "\n"), n.css("height", "300px")) : "single" == t && (r = r.replace(/\n+/g, " "), 
n.css("height", "")), n.val(r);
});
var v = e('<div class="dialog-button" style="display:none"></div>'), m = e('<div style="display:table;margin:auto"></div>'), y = e('<button id="dialog-copy-button" style="display:none">复制</button>'), b = e('<button id="dialog-edit-button" style="display:none">编辑</button>'), x = e('<button id="dialog-exit-button" style="display:none">退出</button>');
return m.append(y).append(b).append(x), v.append(m), s.append(v), y.click(function() {
var t = "";
"batch" == i.type ? e.each(n, function(e, r) {
"error" != r.downloadlink && (e == n.length - 1 ? t += r.downloadlink : t = t + r.downloadlink + "\n");
}) : "link" == i.type && e.each(n, function(e, r) {
"error" != r.url && (e == n.length - 1 ? t += r.url : t = t + r.url + "\n");
}), r.GMApi.GM_setClipboard(t, "text"), alert("已将链接复制到剪贴板！");
}), b.click(function() {
var t = e("div.dialog-body textarea[name=dialog-textarea]", o), n;
e("div.dialog-body div", o).hide(), y.hide(), b.hide(), t.show(), p.show(), x.show();
}), x.click(function() {
var t = e("div.dialog-body textarea[name=dialog-textarea]", o), n = e("div.dialog-body div", o);
t.hide(), p.hide(), n.show(), x.hide(), y.show(), b.show();
}), s.append(f), e("body").append(s), s.dialogDrag(), c.click(u), s;
}
function l() {
var t = e('<div class="dialog-shadow" style="position: fixed; left: 0px; top: 0px; z-index: 50; background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5; width: 100%; height: 100%; display: none;"></div>');
return e("body").append(t), t;
}
function u() {
e("div.dialog-body", o).children().remove(), e("div.dialog-header h3 span.dialog-title", o).text(""), 
e("div.dialog-tip p", o).text(""), e("div.dialog-button", o).hide(), e("div.dialog-radio input[type=radio][name=showmode][value=multi]", o).prop("checked", !0), 
e("div.dialog-radio", o).hide(), e("div.dialog-button button#dialog-copy-button", o).hide(), 
e("div.dialog-button button#dialog-edit-button", o).hide(), e("div.dialog-button button#dialog-exit-button", o).hide(), 
o.hide(), a.hide();
}
this.open = function(t) {
if (i = t, n = [], "link" == t.type ? (n = t.list.urls, e("div.dialog-header h3 span.dialog-title", o).text(t.title + "：" + t.list.filename), 
e.each(t.list.urls, function(t, n) {
var r = e('<div><div style="width:30px;float:left">' + n.rank + ':</div><div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><a href="' + n.url + '">' + n.url + "</a></div></div>");
e("div.dialog-body", o).append(r);
})) : "batch" == t.type && (n = t.list, e("div.dialog-header h3 span.dialog-title", o).text(t.title), 
t.showall ? e.each(t.list, function(n, r) {
var i = e('<div class="item-container" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"></div>'), a = e('<div style="width:100px;float:left;overflow:hidden;text-overflow:ellipsis" title="' + r.filename + '">' + r.filename + "</div>"), s = e('<div style="width:12px;float:left"><span>：</span></div>'), l = e('<div class="item-link" style="float:left;width:618px;"></div>'), u = e('<div class="item-first" style="overflow:hidden;text-overflow:ellipsis"><a href="' + r.downloadlink + '">' + r.downloadlink + "</a></div>");
l.append(u), e.each(t.alllist[n].links, function(t, n) {
if (r.downloadlink != n.url) {
var i = e('<div class="item-ex" style="display:none;overflow:hidden;text-overflow:ellipsis"><a href="' + n.url + '">' + n.url + "</a></div>");
l.append(i);
}
});
var c = e('<div style="width:15px;float:left;cursor:pointer;text-align:center;font-size:16px"><span>+</span></div>');
i.append(a).append(s).append(l).append(c), c.click(function() {
var t = e(this).parent();
t.toggleClass("showall"), t.hasClass("showall") ? (e(this).text("-"), e("div.item-link div.item-ex", t).show()) : (e(this).text("+"), 
e("div.item-link div.item-ex", t).hide());
}), e("div.dialog-body", o).append(i);
}) : e.each(t.list, function(t, n) {
var r = e('<div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><div style="width:100px;float:left;overflow:hidden;text-overflow:ellipsis" title="' + n.filename + '">' + n.filename + '</div><span>：</span><a href="' + n.downloadlink + '">' + n.downloadlink + "</a></div>");
e("div.dialog-body", o).append(r);
})), t.tip && e("div.dialog-tip p", o).text(t.tip), t.showcopy && (e("div.dialog-button", o).show(), 
e("div.dialog-button button#dialog-copy-button", o).show()), t.showedit) {
e("div.dialog-button", o).show(), e("div.dialog-button button#dialog-edit-button", o).show();
var r = e('<textarea name="dialog-textarea" style="display:none;resize:none;width:758px;height:300px;white-space:pre;word-wrap:normal;overflow-x:scroll"></textarea>'), s = "";
"batch" == i.type ? e.each(n, function(e, t) {
"error" != t.downloadlink && (e == n.length - 1 ? s += t.downloadlink : s = s + t.downloadlink + "\n");
}) : "link" == i.type && e.each(n, function(e, t) {
"error" != t.url && (e == n.length - 1 ? s += t.url : s = s + t.url + "\n");
}), r.val(s), e("div.dialog-body", o).append(r);
}
a.show(), o.show();
}, this.close = function() {
u();
}, o = s(), a = l();
}
function h(t, n) {
var r, i;
function o() {
var r = document.body.clientWidth, i, o = e('<div class="dialog" id="dialog-vcode" style="width:520px;top:0px;bottom:auto;left:' + (r > 520 ? (r - 520) / 2 : 0) + 'px;right:auto;display:none;visibility:visible;z-index:52"></div>'), s = e('<div class="dialog-header"><h3><span class="dialog-header-title"><em class="select-text">提示</em></span></h3></div>'), l = e('<div class="dialog-control"><span class="dialog-icon dialog-close icon icon-close"><span class="sicon">x</span></span></div>'), u = e('<div class="dialog-body"></div>'), c = e('<div style="text-align:center;padding:22px"></div>'), d = e('<div class="download-verify" style="margin-top:10px;padding:0 28px;text-align:left;font-size:12px;"></div>'), f = e('<div class="verify-body">请输入验证码：</div>'), p = e('<input id="dialog-input" type="text" style="padding:3px;width:85px;height:23px;border:1px solid #C6C6C6;background-color:white;vertical-align:middle;" class="input-code" maxlength="4">'), h = e('<img id="dialog-img" class="img-code" style="margin-left:10px;vertical-align:middle;" alt="点击换一张" src="" width="100" height="30">'), g = e('<a href="javascript:void(0)" style="text-decoration:underline;" class="underline">换一张</a>'), v = e('<div id="dialog-err" style="padding-left:84px;height:18px;color:#D80000" class="verify-error"></div>'), m = e('<div class="dialog-footer g-clearfix"></div>'), y = e('<a class="g-button g-button-blue" data-button-id="" data-button-index href="javascript:void(0)" style="padding-left:36px"><span class="g-button-right" style="padding-right:36px;"><span class="text" style="width:auto;">确定</span></span></a>'), b = e('<a class="g-button" data-button-id="" data-button-index href="javascript:void(0);" style="padding-left: 36px;"><span class="g-button-right" style="padding-right: 36px;"><span class="text" style="width: auto;">取消</span></span></a>');
return s.append(l), f.append(p).append(h).append(g), d.append(f).append(v), c.append(d), 
u.append(c), m.append(y).append(b), o.append(s).append(u).append(m), e("body").append(o), 
o.dialogDrag(), l.click(a), h.click(t), g.click(t), p.keypress(function(e) {
13 == e.which && n();
}), y.click(n), b.click(a), p.click(function() {
e("#dialog-err").text("");
}), o;
}
function a() {
e("#dialog-img", r).attr("src", ""), e("#dialog-err").text(""), r.hide(), i.hide();
}
this.open = function(t) {
t && e("#dialog-img").attr("src", t.img), r.show(), i.show();
}, this.close = function() {
a();
}, r = o(), i = e("div.dialog-shadow");
}
t.log_count = 1, t.wordMapHttp = {
"list-grid-switch": "yvgb9XJ",
"list-switched-on": "ksbXZm",
"grid-switched-on": "tch6W25",
"list-switch": "lrbo9a",
"grid-switch": "xh6poL",
checkbox: "EOGexf",
"col-item": "Qxyfvg",
check: "fydGNC",
checked: "EzubGg",
"list-view": "vdAfKMb",
"item-active": "ngb9O6",
"grid-view": "JKvHJMb",
"bar-search": "OFaPaO",
"default-dom": "xpX2PV",
bar: "qxnX2G5",
"list-tools": "QDDOQB"
}, t.wordMapHttps = {
"list-grid-switch": "qobmXB1q",
"list-switched-on": "ewXm1e",
"grid-switched-on": "kxhkX2Em",
"list-switch": "rvpXm63",
"grid-switch": "mxgdJgwv",
checkbox: "EOGexf",
"col-item": "Qxyfvg",
check: "fydGNC",
checked: "EzubGg",
"list-view": "vdAfKMb",
"item-active": "pcamXBRX",
"grid-view": "JKvHJMb",
"bar-search": "OFaPaO",
"default-dom": "nyztJqWE",
bar: "mkseJqKQ",
"list-tools": "QDDOQB"
}, t.init = i, t.makeJQueryPlugin = o, t.slog = a, t.detectPage = s, t.PanHelper = l, 
t.PanShareHelper = u, t.getLogID = c, t.getCookie = d, t.base64Encode = f, t.Dialog = p, 
t.VCodeDialog = h;
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
const r = n(9);
e.exports = r;
} ]);