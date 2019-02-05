// ==UserScript==
// @name		esunbank
// @name:en		esunbank
// @name:zh		esunbank
// @namespace	bluelovers
// @author		bluelovers
//
// @description		玉山銀行
// @description:en	玉山銀行
// @description:zh	玉山銀行
//
// @version		4.5.0
//
// @grant		unsafeWindow
// g_r_a_n_tnone
//
// @icon		https://wiki.greasespot.net/favicon.ico
//
// noframes
// @encoding	utf-8
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/esunbank.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/esunbank.user.js
//
// @include		http*://ebank.esunbank.com.tw/fcm/*
// @include		http*://ebank.esunbank.com.tw/fco/*
//
// @exclude		
//
// ==/UserScript==
!function(e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var o = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
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
}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
return e[t];
}.bind(null, o));
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
const o = !1;
try {
r.$ = unsafeWindow.$, r.jQuery = unsafeWindow.jQuery;
} catch (e) {
console.error(e);
}
console.groupEnd("before");
const i = n(11), a = i.noConflict(!0);
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
e.exports.id = "esunbank", e.exports.version = "", e.exports.name = "esunbank", 
e.exports.name_en = "esunbank", e.exports.name_ja = "esunbank", e.exports.desc = "玉山銀行", 
e.exports.desc_en = "玉山銀行", e.exports.desc_ja = "玉山銀行", e.exports.namespace = "", 
e.exports.author = "", e.exports.icon = "", e.exports.list = [ "esunbank/ebank" ], 
e.exports.list_disable = [], e.exports._lib = (() => {
n(6);
}), e.exports.metadata = {}, e.exports.metadata.include = [ "http*://ebank.esunbank.com.tw/fcm/*", "http*://ebank.esunbank.com.tw/fco/*" ], 
e.exports.metadata.match = [], e.exports.metadata.exclude = [], e.exports.metadata.grant = [ "unsafeWindow" ], 
e.exports.list_script = [], e.exports.current = [], e.exports.default = e.exports;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(7), o = n(2);
t.index = o.default, t.id = "esunbank", t.name = t.id, r.run(t.id, e.exports, null, function(e, t, n, o, i, a) {
r.init(e, t, n, o, i, a);
});
}, function(e, t, n) {
"use strict";
(function(e, r) {
function o(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), o(n(5));
const i = n(5);
function a(t, n) {
return Array.isArray(t) && (t = t.join("")), "string" == typeof n && (n = e(n)), 
"object" == typeof n && n.length && "object" == typeof n[0] && (n = n[0]), i.GM_addStyle(t.toString(), n);
}
function s(t, n) {
return "object" == typeof t && t.webfont && (t = t.webfont), e(`<link rel="stylesheet" href="${t.toString()}"/>`).appendTo(n || e("header, body").eq(0));
}
function u(e, ...t) {
return console.info(`%c[${r.userScript.id}][debug]`, "color: #4B90C2;", e, ...t);
}
function c(e, ...t) {
return console.error(`%c[${r.userScript.id}][error]`, "color: red;", e, ...t);
}
function l(e, ...t) {
return console.info(`%c[${r.userScript.id}][info]`, "color: #ccc;", e, ...t);
}
function f(e, ...t) {
return console.log(e, ...t);
}
function p(e) {
let t = window.open(e, "_blank");
return setTimeout(function() {
window.focus();
}, 300), t;
}
t.GM_addStyle = a, t.addStylesheet = s, t.debug = u, t.error = c, t.info = l, t.log = f, 
t.openInTabBackground = p;
const d = n(4);
t.default = d;
}).call(this, n(0).default, n(1));
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
const o = n(5);
t.default = o;
}, function(e, t, n) {
"use strict";
(function(t, r, o) {
let i = {
metadata: {
include: [ "http*://ebank.esunbank.com.tw/fcm/*", "http*://ebank.esunbank.com.tw/fco/*" ],
nomatch: [],
exclude: []
},
test(r = t._url_obj) {
let o;
return !!(o = n(18).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const a = n(25);
if (a([].join(",")).prop("target", "_blank"), e.path = e.path || "", e.path.match(/fco/)) setInterval(function() {
try {
unsafeWindow.$.iloginchecker().keepSession();
} catch (e) {
r("#content .top_function .timer a.reset").eq(0).each(function() {
this.click();
});
}
}, 3e4); else if (e.path.match(/fcm/)) {
o.GM_addStyle([ ".winpop_print td._uf_fcm_done, .winpop_print ._uf_fcm_done td { color: #ccc !important; }", ".winpop_print td._uf_fcm, .winpop_print ._uf_fcm .lt, .winpop_print ._uf_fcm .rt { color: blue !important; }", ".winpop_print td._uf_fcm_red { color: red !important; }", ".mb5 td { text-align: center; }" ]);
let e = {
next_pay: 0,
total_will_pay: 0
};
r(".table_ver[id] tr:has(> .rt)").not("tr:eq(-1)").each(function() {
let t = r(this), n = r(".lt", t), o;
o = n.text().toString().match(/分(\d+)期之第(\d+)期/);
let i = !1, a, s = r(".rt:eq(-1)", t).text().trim();
o ? o[1] == o[2] ? t.addClass("_uf_fcm_done") : (t.addClass("_uf_fcm"), i = !0) : s || (o = n.text().match(/未到期金額(\d+)元/)) && (e.total_will_pay += parseInt(o[1])), 
i && (e.next_pay += parseInt(s));
}), r(".mb5.noneborder[id]:eq(0)").after(function() {
return r("<table/>").addClass("mb5").css("width", r(this).css("width")).append(`<td class="_uf_fcm" width="25%">下期起始應付帳款<br/>${e.next_pay}</td>`).append(`<td class="_uf_fcm_red" width="25%">總估算（含分期）<br/>${e.total_will_pay}</td>`).append('<td width="75%"></td>');
}), console.log(i.name, e);
}
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let o = r(n);
return o = o.add([].join());
}
};
e.exports = i;
}).call(this, n(1), n(0).default, n(4));
}, function(e, t, n) {
"use strict";
(function(e, r, o) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(12), a = n(4);
t.greasemonkey = a.default;
const s = n(8);
function u(t, n, o, i) {
let a = async () => {
try {
i ? await i(t, n, e, window, o, window.location.href) : await l(t, n, e, window, o, window.location.href);
const r = p(t, "index");
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
function c(t, n = e, r, o) {
if (o || !n._url || n._url != t) {
const e = n._url;
return n._url_old = e, n._url = t.toString(), n._url_obj = i.parse_url2(n._url), 
"function" == typeof r && r(n._url, n, e), n;
}
}
function l(e, t, n, r, o, i) {
f(i = i || r.location.href, t), f(i, n), n.userScript = t;
}
function f(e, t) {
let n;
return c(e, t, function(e, t, n) {
t._url_obj.source = t._url_obj._source = e, t._url_obj_ = Object.assign({}, t._url_obj);
}, !0);
}
function p(e, t) {
return n(17)(`./${e}/${t}`);
}
function d(e, t, n) {
let r;
return t.list_script.reduce(function(t, r) {
let o = p(e, r), i = r;
return o.name && o.name != i && (i = `${o.name} - ${i}`), o.script_method && o.script_method.clearly && o.test(n) && t.push({
name: r,
name_id: i,
lib: o
}), t;
}, []).concat(t.current);
}
async function h(t, n, r, o = {}) {
let i;
console.time(n.name), console.group(n.name);
for (let o of r) {
const r = p(t, o);
r.file = o;
let s = o;
if (r.name && r.name != s && (s = `${r.name} - ${s}`), s = `[${s}]`, r.name = r.name || o, 
r.name_id = s || r.name_id || r.name, i && !r.script) continue;
if (r.disable && !0 !== r.disable) {
console.info(n.id, s, `disable = ${r.disable}, skip this`);
continue;
}
if (r.disable) {
console.warn(n.id, s, "disable, skip this");
continue;
}
let u = !0, c, l;
console.time(o), console.group(o), c = await r.test(e._url_obj), a.default.info(n.id, s, "test", c), 
i && 2 !== c ? a.default.info(n.id, s, "break:test", c) : (c && (1 == (l = await r.main(e._url_obj)) || void 0 === l ? (l = !0, 
a.default.info(n.id, s, "matched", l, u)) : a.default.debug(n.id, s, "main", l), 
l && (u = !1, c && !0 !== c && (u = !0), a.default.debug(n.id, s, "chk", l, u, c))), 
u && !c || (a.default.debug(n.id, s, "current:push", l, u, c), n.current.push({
name: o,
name_id: s,
lib: r
}))), console.groupEnd(o), console.timeEnd(o), i || u || (a.default.debug(n.id, s, "break", l, u, c), 
i = !0);
}
console.groupEnd(n.name), console.timeEnd(n.name);
}
async function g(t, n, r = {}) {
const o = t.id;
let i;
for (let r of n) {
const n = p(o, r);
n.file = r;
let i = r;
n.name && n.name != i && (i = `${n.name} - ${i}`), i = `[${i}]`, n.name = n.name || r, 
n.name_id = i || n.name_id || n.name;
let s = !0, u, c;
if (u = await n.test(e._url_obj), a.default.info(t.id, i, "test", u), u) return c = await n.main(e._url_obj), 
a.default.debug(t.id, i, "main", c), n;
}
}
function m(e, t) {
console["groupCollapsed" in console ? "groupCollapsed" : "group"](e);
try {
console.info(e, t), null === t ? (console.info("$", r, r && r.fn && r.fn.jquery), 
console.info("jQuery", o, o && o.fn && o.fn.jquery)) : (console.info(`${e}.$`, t.$, t.$ && t.$.fn && t.$.fn.jquery), 
console.info(`${e}.jQuery`, t.jQuery, t.jQuery && t.jQuery.fn && t.jQuery.fn.jquery));
} catch (t) {
console.error(`${e}`, t.toString());
}
console.groupEnd(e);
}
t.run = u, t.url = c, t.init = l, t.requireScript = p, t.get_list_script = d, t.main = h, 
t.main_list = g;
}).call(this, n(1), n(0).default, n(0).default);
}, function(e, t, n) {
"use strict";
(function(e, r, o) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(7), a = n(13), s = n(9);
function u(t, r, o) {
let u = i.requireScript(t, "index");
s.hasGrant(u.metadata.grant, "registerMenuCommand") ? a.registerMenuCommand({
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
c("jquery/global", await Promise.resolve().then(() => n(0)));
} catch (e) {
console.error(e);
}
}) : console.info(t, "registerMenuCommand = false");
}
function c(e, t) {
console["groupCollapsed" in console ? "groupCollapsed" : "group"](e);
try {
console.info(e, t), null === t ? (console.info("$", r, r && r.fn && r.fn.jquery), 
console.info("jQuery", o, o && o.fn && o.fn.jquery)) : (console.info(`${e}.$`, t.$, t.$ && t.$.fn && t.$.fn.jquery), 
console.info(`${e}.jQuery`, t.jQuery, t.jQuery && t.jQuery.fn && t.jQuery.fn.jquery));
} catch (t) {
console.error(`${e}`, t.toString());
}
console.groupEnd(e);
}
t.registerGlobalMenu = u;
const l = n(8);
t.default = l;
}).call(this, n(1), n(0).default, n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(16);
function o(e) {
let t;
if (t = (e = e.toString()).match(/(^\/\/\s+==UserScript==)/m)) {
let n = t.index;
{
let n = /(^\/\/\s+==\/UserScript==)/m;
n.lastIndex = t.index + t[0].length, t = n.exec(e);
}
let o = (e = e.slice(n, t.index + t[0].length)).split(/\r\n|\r|\n/).filter(function(e, t, n) {
return /^\/\/\s*@/g.test(e);
}).reduce(function(e, t) {
let n = /^\/\/[\s\t]*@([a-z:]+)(?:[\s\t]+(.+))?(?:[\s\t]+)?$/i.exec(t.trim("\t ")), r = n[1], o = n[2];
return o && (o = o.trim("\t ")), e[r] = e[r] || [], -1 == e[r].indexOf(o) && e[r].push(o), 
e;
}, {});
return o = Object.assign({
name: []
}, o, {
grant: [],
include: [],
exclude: [],
noframes: []
}, o), [ "include", "match", "exclude", "grant" ].forEach(function(e) {
o[e] && (o[e] = o[e].length ? c(r.array_unique(o[e])) : []);
}), o.grant.sort(), o;
}
}
function i(e, t) {
return !(!e.includes("GM." + t) && !e.includes("GM_" + t));
}
function a(e) {
return e.noframes && e.noframes.length && "no" == e.noframes[0] && (e.noframes = []), 
e.grant && e.grant.length && (e.grant.forEach(function(t, n, r) {
let o;
(o = /^GM[\.\_](.+)$/.exec(t)) && (e.grant.push("GM." + o[1]), e.grant.push("GM_" + o[1]));
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
e[t] && (e[t] = e[t].length ? c(r.array_unique(e[t])) : []);
}), e.grant && e.grant.length && e.grant.sort(), e;
}
function s(e) {
return e.map(function(e, t, n) {
return e.replace(/^.*(\:\/\/)/, "*$1");
});
}
function u(e, t, n = !1, r = "\t\t", o = "// ", i = "\n") {
let a = "", s = `${o}@${e}${r}`;
return Array.isArray(t) ? a = t.join(`${i}${s}`) : void 0 !== t && (a = t.toString()), 
n && (a = s + a), a;
}
function c(e) {
return e.filter(function(e, t, n) {
return !!e;
});
}
t.parseMetadata = o, t.hasGrant = i, t.lazyMetaFix = a, t.meta_match = s, t.makeMetaRow = u, 
t.meta_filter = c;
const l = n(9);
t.default = l;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.desc = "玉山銀行", t.grant = [ "unsafeWindow" ], t.metadata = "// ==UserScript==\n// @name\t\t<%= index.name %>\n// @name:en\t\t<%= index.name_en %>\n// @name:zh\t\t<%= index.name %>\n// @namespace\tbluelovers\n// @author\t\tbluelovers\n//\n// @description\t\t<%= index.desc %>\n// @description:en\t<%= index.desc_en %>\n// @description:zh\t<%= index.desc %>\n//\n// @version\t\t<%= pkg.version %>\n//\n// @grant\t\t<%= index.grant %>\n// g_r_a_n_tnone\n//\n// @icon\t\t<%= index.icon %>\n//\n// noframes\n// @encoding\tutf-8\n//\n// @homepageURL\thttps://github.com/bluelovers/gm-user-scripts\n// @supportURL\thttps://github.com/bluelovers/gm-user-scripts/issues\n// @downloadURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n// @updateURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n//\n// @include\t\t<%= index.include %>\n//\n// @exclude\t\t<%= index.exclude %>\n//\n// ==/UserScript==\n", 
t.default = t.metadata;
}, function(e, t, n) {
var r, o;
!function(t, n) {
"use strict";
"object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
if (!e.document) throw new Error("jQuery requires a window with a document");
return n(e);
} : n(t);
}("undefined" != typeof window ? window : this, function(n, i) {
"use strict";
var a = [], s = n.document, u = Object.getPrototypeOf, c = a.slice, l = a.concat, f = a.push, p = a.indexOf, d = {}, h = d.toString, g = d.hasOwnProperty, m = g.toString, y = m.call(Object), v = {}, b = function e(t) {
return "function" == typeof t && "number" != typeof t.nodeType;
}, x = function e(t) {
return null != t && t === t.window;
}, w = {
type: !0,
src: !0,
noModule: !0
};
function _(e, t, n) {
var r, o = (t = t || s).createElement("script");
if (o.text = e, n) for (r in w) n[r] && (o[r] = n[r]);
t.head.appendChild(o).parentNode.removeChild(o);
}
function T(e) {
return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e;
}
var j = "3.3.1", C = function(e, t) {
return new C.fn.init(e, t);
}, k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function A(e) {
var t = !!e && "length" in e && e.length, n = T(e);
return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
}
C.fn = C.prototype = {
jquery: "3.3.1",
constructor: C,
length: 0,
toArray: function() {
return c.call(this);
},
get: function(e) {
return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e];
},
pushStack: function(e) {
var t = C.merge(this.constructor(), e);
return t.prevObject = this, t;
},
each: function(e) {
return C.each(this, e);
},
map: function(e) {
return this.pushStack(C.map(this, function(t, n) {
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
return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
},
end: function() {
return this.prevObject || this.constructor();
},
push: f,
sort: a.sort,
splice: a.splice
}, C.extend = C.fn.extend = function() {
var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), 
s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
a !== (r = e[t]) && (c && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
i = n && Array.isArray(n) ? n : []) : i = n && C.isPlainObject(n) ? n : {}, a[t] = C.extend(c, i, r)) : void 0 !== r && (a[t] = r));
return a;
}, C.extend({
expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
isReady: !0,
error: function(e) {
throw new Error(e);
},
noop: function() {},
isPlainObject: function(e) {
var t, n;
return !(!e || "[object Object]" !== h.call(e) || (t = u(e)) && ("function" != typeof (n = g.call(t, "constructor") && t.constructor) || m.call(n) !== y));
},
isEmptyObject: function(e) {
var t;
for (t in e) return !1;
return !0;
},
globalEval: function(e) {
_(e);
},
each: function(e, t) {
var n, r = 0;
if (A(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
return e;
},
trim: function(e) {
return null == e ? "" : (e + "").replace(k, "");
},
makeArray: function(e, t) {
var n = t || [];
return null != e && (A(Object(e)) ? C.merge(n, "string" == typeof e ? [ e ] : e) : f.call(n, e)), 
n;
},
inArray: function(e, t, n) {
return null == t ? -1 : p.call(t, e, n);
},
merge: function(e, t) {
for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
return e.length = o, e;
},
grep: function(e, t, n) {
for (var r, o = [], i = 0, a = e.length, s = !n; i < a; i++) (r = !t(e[i], i)) !== s && o.push(e[i]);
return o;
},
map: function(e, t, n) {
var r, o, i = 0, a = [];
if (A(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o); else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
return l.apply([], a);
},
guid: 1,
support: v
}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = a[Symbol.iterator]), 
C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
d["[object " + t + "]"] = t.toLowerCase();
});
var E = function(e) {
var t, n, r, o, i, a, s, u, c, l, f, p, d, h, g, m, y, v, b, x = "sizzle" + 1 * new Date(), w = e.document, _ = 0, T = 0, j = ae(), C = ae(), k = ae(), A = function(e, t) {
return e === t && (f = !0), 0;
}, E = {}.hasOwnProperty, M = [], S = M.pop, N = M.push, D = M.push, $ = M.slice, q = function(e, t) {
for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
return -1;
}, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", G = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", R = "\\[" + L + "*(" + G + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + G + "))|)" + L + "*\\]", H = ":(" + G + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), I = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), W = new RegExp("^" + L + "*," + L + "*"), B = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), F = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(H), Q = new RegExp("^" + G + "$"), z = {
ID: new RegExp("^#(" + G + ")"),
CLASS: new RegExp("^\\.(" + G + ")"),
TAG: new RegExp("^(" + G + "|[*])"),
ATTR: new RegExp("^" + R),
PSEUDO: new RegExp("^" + H),
CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
bool: new RegExp("^(?:" + O + ")$", "i"),
needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
}, V = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ee = function(e, t, n) {
var r = "0x" + t - 65536;
return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
}, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
}, re = function() {
p();
}, oe = ve(function(e) {
return !0 === e.disabled && ("form" in e || "label" in e);
}, {
dir: "parentNode",
next: "legend"
});
try {
D.apply(M = $.call(w.childNodes), w.childNodes), M[w.childNodes.length].nodeType;
} catch (e) {
D = {
apply: M.length ? function(e, t) {
N.apply(e, $.call(t));
} : function(e, t) {
for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
e.length = n - 1;
}
};
}
function ie(e, t, r, o) {
var i, s, c, l, f, h, y, v = t && t.ownerDocument, _ = t ? t.nodeType : 9;
if (r = r || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return r;
if (!o && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
if (11 !== _ && (f = J.exec(e))) if (i = f[1]) {
if (9 === _) {
if (!(c = t.getElementById(i))) return r;
if (c.id === i) return r.push(c), r;
} else if (v && (c = v.getElementById(i)) && b(t, c) && c.id === i) return r.push(c), 
r;
} else {
if (f[2]) return D.apply(r, t.getElementsByTagName(e)), r;
if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(r, t.getElementsByClassName(i)), 
r;
}
if (n.qsa && !k[e + " "] && (!m || !m.test(e))) {
if (1 !== _) v = t, y = e; else if ("object" !== t.nodeName.toLowerCase()) {
for ((l = t.getAttribute("id")) ? l = l.replace(te, ne) : t.setAttribute("id", l = x), 
s = (h = a(e)).length; s--; ) h[s] = "#" + l + " " + ye(h[s]);
y = h.join(","), v = K.test(e) && ge(t.parentNode) || t;
}
if (y) try {
return D.apply(r, v.querySelectorAll(y)), r;
} catch (e) {} finally {
l === x && t.removeAttribute("id");
}
}
}
return u(e.replace(I, "$1"), t, r, o);
}
function ae() {
var e = [];
function t(n, o) {
return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o;
}
return t;
}
function se(e) {
return e[x] = !0, e;
}
function ue(e) {
var t = d.createElement("fieldset");
try {
return !!e(t);
} catch (e) {
return !1;
} finally {
t.parentNode && t.parentNode.removeChild(t), t = null;
}
}
function ce(e, t) {
for (var n = e.split("|"), o = n.length; o--; ) r.attrHandle[n[o]] = t;
}
function le(e, t) {
var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
if (r) return r;
if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
return e ? 1 : -1;
}
function fe(e) {
return function(t) {
return "input" === t.nodeName.toLowerCase() && t.type === e;
};
}
function pe(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return ("input" === n || "button" === n) && t.type === e;
};
}
function de(e) {
return function(t) {
return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e;
};
}
function he(e) {
return se(function(t) {
return t = +t, se(function(n, r) {
for (var o, i = e([], n.length, t), a = i.length; a--; ) n[o = i[a]] && (n[o] = !(r[o] = n[o]));
});
});
}
function ge(e) {
return e && void 0 !== e.getElementsByTagName && e;
}
for (t in n = ie.support = {}, i = ie.isXML = function(e) {
var t = e && (e.ownerDocument || e).documentElement;
return !!t && "HTML" !== t.nodeName;
}, p = ie.setDocument = function(e) {
var t, o, a = e ? e.ownerDocument || e : w;
return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, 
g = !i(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), 
n.attributes = ue(function(e) {
return e.className = "i", !e.getAttribute("className");
}), n.getElementsByTagName = ue(function(e) {
return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
}), n.getElementsByClassName = Y.test(d.getElementsByClassName), n.getById = ue(function(e) {
return h.appendChild(e).id = x, !d.getElementsByName || !d.getElementsByName(x).length;
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
var n, r, o, i = t.getElementById(e);
if (i) {
if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
for (o = t.getElementsByName(e), r = 0; i = o[r++]; ) if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
}
return [];
}
}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
} : function(e, t) {
var n, r = [], o = 0, i = t.getElementsByTagName(e);
if ("*" === e) {
for (;n = i[o++]; ) 1 === n.nodeType && r.push(n);
return r;
}
return i;
}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
}, y = [], m = [], (n.qsa = Y.test(d.querySelectorAll)) && (ue(function(e) {
h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"), 
e.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + O + ")"), 
e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), 
e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]");
}), ue(function(e) {
e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var t = d.createElement("input");
t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="), 
2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), 
h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), 
e.querySelectorAll("*,:x"), m.push(",.*:");
})), (n.matchesSelector = Y.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", H);
}), m = m.length && new RegExp(m.join("|")), y = y.length && new RegExp(y.join("|")), 
t = Y.test(h.compareDocumentPosition), b = t || Y.test(h.contains) ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
} : function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, A = t ? function(e, t) {
if (e === t) return f = !0, 0;
var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && b(w, e) ? -1 : t === d || t.ownerDocument === w && b(w, t) ? 1 : l ? q(l, e) - q(l, t) : 0 : 4 & r ? -1 : 1);
} : function(e, t) {
if (e === t) return f = !0, 0;
var n, r = 0, o = e.parentNode, i = t.parentNode, a = [ e ], s = [ t ];
if (!o || !i) return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : l ? q(l, e) - q(l, t) : 0;
if (o === i) return le(e, t);
for (n = e; n = n.parentNode; ) a.unshift(n);
for (n = t; n = n.parentNode; ) s.unshift(n);
for (;a[r] === s[r]; ) r++;
return r ? le(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
}, d) : d;
}, ie.matches = function(e, t) {
return ie(e, null, null, t);
}, ie.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== d && p(e), t = t.replace(F, "='$1']"), n.matchesSelector && g && !k[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) try {
var r = v.call(e, t);
if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
} catch (e) {}
return ie(t, d, null, [ e ]).length > 0;
}, ie.contains = function(e, t) {
return (e.ownerDocument || e) !== d && p(e), b(e, t);
}, ie.attr = function(e, t) {
(e.ownerDocument || e) !== d && p(e);
var o = r.attrHandle[t.toLowerCase()], i = o && E.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
}, ie.escape = function(e) {
return (e + "").replace(te, ne);
}, ie.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, ie.uniqueSort = function(e) {
var t, r = [], o = 0, i = 0;
if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(A), f) {
for (;t = e[i++]; ) t === e[i] && (o = r.push(i));
for (;o--; ) e.splice(r[o], 1);
}
return l = null, e;
}, o = ie.getText = function(e) {
var t, n = "", r = 0, i = e.nodeType;
if (i) {
if (1 === i || 9 === i || 11 === i) {
if ("string" == typeof e.textContent) return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
} else if (3 === i || 4 === i) return e.nodeValue;
} else for (;t = e[r++]; ) n += o(t);
return n;
}, (r = ie.selectors = {
cacheLength: 50,
createPseudo: se,
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
return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), 
"~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
},
CHILD: function(e) {
return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), 
e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), 
e;
},
PSEUDO: function(e) {
var t, n = !e[6] && e[2];
return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
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
var t = j[e + " "];
return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && j(e, function(e) {
return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
});
},
ATTR: function(e, t, n) {
return function(r) {
var o = ie.attr(r, e);
return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(P, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
};
},
CHILD: function(e, t, n, r, o) {
var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
return 1 === r && 0 === o ? function(e) {
return !!e.parentNode;
} : function(t, n, u) {
var c, l, f, p, d, h, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s, b = !1;
if (m) {
if (i) {
for (;g; ) {
for (p = t; p = p[g]; ) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
h = g = "only" === e && !h && "nextSibling";
}
return !0;
}
if (h = [ a ? m.firstChild : m.lastChild ], a && v) {
for (b = (d = (c = (l = (f = (p = m)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], 
p = d && m.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || h.pop(); ) if (1 === p.nodeType && ++b && p === t) {
l[e] = [ _, d, b ];
break;
}
} else if (v && (b = d = (c = (l = (f = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === _ && c[1]), 
!1 === b) for (;(p = ++d && p && p[g] || (b = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && ((l = (f = p[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ _, b ]), 
p !== t)); ) ;
return (b -= o) === r || b % r == 0 && b / r >= 0;
}
};
},
PSEUDO: function(e, t) {
var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
return o[x] ? o(t) : o.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
for (var r, i = o(e, t), a = i.length; a--; ) e[r = q(e, i[a])] = !(n[r] = i[a]);
}) : function(e) {
return o(e, 0, n);
}) : o;
}
},
pseudos: {
not: se(function(e) {
var t = [], n = [], r = s(e.replace(I, "$1"));
return r[x] ? se(function(e, t, n, o) {
for (var i, a = r(e, null, o, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
}) : function(e, o, i) {
return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
};
}),
has: se(function(e) {
return function(t) {
return ie(e, t).length > 0;
};
}),
contains: se(function(e) {
return e = e.replace(Z, ee), function(t) {
return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
};
}),
lang: se(function(e) {
return Q.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), 
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
return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
},
enabled: de(!1),
disabled: de(!0),
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
return X.test(e.nodeName);
},
input: function(e) {
return V.test(e.nodeName);
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
}) r.pseudos[t] = fe(t);
for (t in {
submit: !0,
reset: !0
}) r.pseudos[t] = pe(t);
function me() {}
function ye(e) {
for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
return r;
}
function ve(e, t, n) {
var r = t.dir, o = t.next, i = o || r, a = n && "parentNode" === i, s = T++;
return t.first ? function(t, n, o) {
for (;t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, o);
return !1;
} : function(t, n, u) {
var c, l, f, p = [ _, s ];
if (u) {
for (;t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
} else for (;t = t[r]; ) if (1 === t.nodeType || a) if (l = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), 
o && o === t.nodeName.toLowerCase()) t = t[r] || t; else {
if ((c = l[i]) && c[0] === _ && c[1] === s) return p[2] = c[2];
if (l[i] = p, p[2] = e(t, n, u)) return !0;
}
return !1;
};
}
function be(e) {
return e.length > 1 ? function(t, n, r) {
for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
return !0;
} : e[0];
}
function xe(e, t, n) {
for (var r = 0, o = t.length; r < o; r++) ie(e, t[r], n);
return n;
}
function we(e, t, n, r, o) {
for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (i = e[s]) && (n && !n(i, r, o) || (a.push(i), 
c && t.push(s)));
return a;
}
function _e(e, t, n, r, o, i) {
return r && !r[x] && (r = _e(r)), o && !o[x] && (o = _e(o, i)), se(function(i, a, s, u) {
var c, l, f, p = [], d = [], h = a.length, g = i || xe(t || "*", s.nodeType ? [ s ] : s, []), m = !e || !i && t ? g : we(g, p, e, s, u), y = n ? o || (i ? e : h || r) ? [] : a : m;
if (n && n(m, y, s, u), r) for (c = we(y, d), r(c, [], s, u), l = c.length; l--; ) (f = c[l]) && (y[d[l]] = !(m[d[l]] = f));
if (i) {
if (o || e) {
if (o) {
for (c = [], l = y.length; l--; ) (f = y[l]) && c.push(m[l] = f);
o(null, y = [], c, u);
}
for (l = y.length; l--; ) (f = y[l]) && (c = o ? q(i, f) : p[l]) > -1 && (i[c] = !(a[c] = f));
}
} else y = we(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : D.apply(a, y);
});
}
function Te(e) {
for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = ve(function(e) {
return e === t;
}, s, !0), f = ve(function(e) {
return q(t, e) > -1;
}, s, !0), p = [ function(e, n, r) {
var o = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
return t = null, o;
} ]; u < i; u++) if (n = r.relative[e[u].type]) p = [ ve(be(p), n) ]; else {
if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
for (o = ++u; o < i && !r.relative[e[o].type]; o++) ;
return _e(u > 1 && be(p), u > 1 && ye(e.slice(0, u - 1).concat({
value: " " === e[u - 2].type ? "*" : ""
})).replace(I, "$1"), n, u < o && Te(e.slice(u, o)), o < i && Te(e = e.slice(o)), o < i && ye(e));
}
p.push(n);
}
return be(p);
}
function je(e, t) {
var n = t.length > 0, o = e.length > 0, i = function(i, a, s, u, l) {
var f, h, m, y = 0, v = "0", b = i && [], x = [], w = c, T = i || o && r.find.TAG("*", l), j = _ += null == w ? 1 : Math.random() || .1, C = T.length;
for (l && (c = a === d || a || l); v !== C && null != (f = T[v]); v++) {
if (o && f) {
for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); m = e[h++]; ) if (m(f, a || d, s)) {
u.push(f);
break;
}
l && (_ = j);
}
n && ((f = !m && f) && y--, i && b.push(f));
}
if (y += v, n && v !== y) {
for (h = 0; m = t[h++]; ) m(b, x, a, s);
if (i) {
if (y > 0) for (;v--; ) b[v] || x[v] || (x[v] = S.call(u));
x = we(x);
}
D.apply(u, x), l && !i && x.length > 0 && y + t.length > 1 && ie.uniqueSort(u);
}
return l && (_ = j, c = w), b;
};
return n ? se(i) : i;
}
return me.prototype = r.filters = r.pseudos, r.setFilters = new me(), a = ie.tokenize = function(e, t) {
var n, o, i, a, s, u, c, l = C[e + " "];
if (l) return t ? 0 : l.slice(0);
for (s = e, u = [], c = r.preFilter; s; ) {
for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), 
n = !1, (o = B.exec(s)) && (n = o.shift(), i.push({
value: n,
type: o[0].replace(I, " ")
}), s = s.slice(n.length)), r.filter) !(o = z[a].exec(s)) || c[a] && !(o = c[a](o)) || (n = o.shift(), 
i.push({
value: n,
type: a,
matches: o
}), s = s.slice(n.length));
if (!n) break;
}
return t ? s.length : s ? ie.error(e) : C(e, u).slice(0);
}, s = ie.compile = function(e, t) {
var n, r = [], o = [], i = k[e + " "];
if (!i) {
for (t || (t = a(e)), n = t.length; n--; ) (i = Te(t[n]))[x] ? r.push(i) : o.push(i);
(i = k(e, je(o, r))).selector = e;
}
return i;
}, u = ie.select = function(e, t, n, o) {
var i, u, c, l, f, p = "function" == typeof e && e, d = !o && a(e = p.selector || e);
if (n = n || [], 1 === d.length) {
if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
p && (t = t.parentNode), e = e.slice(u.shift().value.length);
}
for (i = z.needsContext.test(e) ? 0 : u.length; i-- && (c = u[i], !r.relative[l = c.type]); ) if ((f = r.find[l]) && (o = f(c.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
if (u.splice(i, 1), !(e = o.length && ye(u))) return D.apply(n, o), n;
break;
}
}
return (p || s(e, d))(o, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
}, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!f, 
p(), n.sortDetached = ue(function(e) {
return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
}), ue(function(e) {
return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
}) || ce("type|href|height|width", function(e, t, n) {
if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
}), n.attributes && ue(function(e) {
return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}) || ce("value", function(e, t, n) {
if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
}), ue(function(e) {
return null == e.getAttribute("disabled");
}) || ce(O, function(e, t, n) {
var r;
if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
}), ie;
}(n);
C.find = E, C.expr = E.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = E.uniqueSort, 
C.text = E.getText, C.isXMLDoc = E.isXML, C.contains = E.contains, C.escapeSelector = E.escape;
var M = function(e, t, n) {
for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
if (o && C(e).is(n)) break;
r.push(e);
}
return r;
}, S = function(e, t) {
for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
return n;
}, N = C.expr.match.needsContext;
function D(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
}
var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function q(e, t, n) {
return b(t) ? C.grep(e, function(e, r) {
return !!t.call(e, r, e) !== n;
}) : t.nodeType ? C.grep(e, function(e) {
return e === t !== n;
}) : "string" != typeof t ? C.grep(e, function(e) {
return p.call(t, e) > -1 !== n;
}) : C.filter(t, e, n);
}
C.filter = function(e, t, n) {
var r = t[0];
return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [ r ] : [] : C.find.matches(e, C.grep(t, function(e) {
return 1 === e.nodeType;
}));
}, C.fn.extend({
find: function(e) {
var t, n, r = this.length, o = this;
if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
for (t = 0; t < r; t++) if (C.contains(o[t], this)) return !0;
}));
for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
return r > 1 ? C.uniqueSort(n) : n;
},
filter: function(e) {
return this.pushStack(q(this, e || [], !1));
},
not: function(e) {
return this.pushStack(q(this, e || [], !0));
},
is: function(e) {
return !!q(this, "string" == typeof e && N.test(e) ? C(e) : e || [], !1).length;
}
});
var O, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(C.fn.init = function(e, t, n) {
var r, o;
if (!e) return this;
if (n = n || O, "string" == typeof e) {
if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
if (r[1]) {
if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), 
$.test(r[1]) && C.isPlainObject(t)) for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
return this;
}
return (o = s.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
}
return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
}).prototype = C.fn, O = C(s);
var G = /^(?:parents|prev(?:Until|All))/, R = {
children: !0,
contents: !0,
next: !0,
prev: !0
};
function H(e, t) {
for (;(e = e[t]) && 1 !== e.nodeType; ) ;
return e;
}
C.fn.extend({
has: function(e) {
var t = C(e, this), n = t.length;
return this.filter(function() {
for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
});
},
closest: function(e, t) {
var n, r = 0, o = this.length, i = [], a = "string" != typeof e && C(e);
if (!N.test(e)) for (;r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
i.push(n);
break;
}
return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i);
},
index: function(e) {
return e ? "string" == typeof e ? p.call(C(e), this[0]) : p.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
},
add: function(e, t) {
return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
},
addBack: function(e) {
return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
}
}), C.each({
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
return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), 
C.merge([], e.childNodes));
}
}, function(e, t) {
C.fn[e] = function(n, r) {
var o = C.map(this, t, n);
return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = C.filter(r, o)), 
this.length > 1 && (R[e] || C.uniqueSort(o), G.test(e) && o.reverse()), this.pushStack(o);
};
});
var P = /[^\x20\t\r\n\f]+/g;
function I(e) {
var t = {};
return C.each(e.match(P) || [], function(e, n) {
t[n] = !0;
}), t;
}
function W(e) {
return e;
}
function B(e) {
throw e;
}
function F(e, t, n, r) {
var o;
try {
e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
} catch (e) {
n.apply(void 0, [ e ]);
}
}
C.Callbacks = function(e) {
e = "string" == typeof e ? I(e) : C.extend({}, e);
var t, n, r, o, i = [], a = [], s = -1, u = function() {
for (o = o || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < i.length; ) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, 
n = !1);
e.memory || (n = !1), t = !1, o && (i = n ? [] : "");
}, c = {
add: function() {
return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
C.each(n, function(n, r) {
b(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== T(r) && t(r);
});
}(arguments), n && !t && u()), this;
},
remove: function() {
return C.each(arguments, function(e, t) {
for (var n; (n = C.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= s && s--;
}), this;
},
has: function(e) {
return e ? C.inArray(e, i) > -1 : i.length > 0;
},
empty: function() {
return i && (i = []), this;
},
disable: function() {
return o = a = [], i = n = "", this;
},
disabled: function() {
return !i;
},
lock: function() {
return o = a = [], n || t || (i = n = ""), this;
},
locked: function() {
return !!o;
},
fireWith: function(e, n) {
return o || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
this;
},
fire: function() {
return c.fireWith(this, arguments), this;
},
fired: function() {
return !!r;
}
};
return c;
}, C.extend({
Deferred: function(e) {
var t = [ [ "notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2 ], [ "resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", o = {
state: function() {
return r;
},
always: function() {
return i.done(arguments).fail(arguments), this;
},
catch: function(e) {
return o.then(null, e);
},
pipe: function() {
var e = arguments;
return C.Deferred(function(n) {
C.each(t, function(t, r) {
var o = b(e[r[4]]) && e[r[4]];
i[r[1]](function() {
var e = o && o.apply(this, arguments);
e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [ e ] : arguments);
});
}), e = null;
}).promise();
},
then: function(e, r, o) {
var i = 0;
function a(e, t, r, o) {
return function() {
var s = this, u = arguments, c = function() {
var n, c;
if (!(e < i)) {
if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
c = n && ("object" == typeof n || "function" == typeof n) && n.then, b(c) ? o ? c.call(n, a(i, t, W, o), a(i, t, B, o)) : (i++, 
c.call(n, a(i, t, W, o), a(i, t, B, o), a(i, t, W, t.notifyWith))) : (r !== W && (s = void 0, 
u = [ n ]), (o || t.resolveWith)(s, u));
}
}, l = o ? c : function() {
try {
c();
} catch (n) {
C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= i && (r !== B && (s = void 0, 
u = [ n ]), t.rejectWith(s, u));
}
};
e ? l() : (C.Deferred.getStackHook && (l.stackTrace = C.Deferred.getStackHook()), 
n.setTimeout(l));
};
}
return C.Deferred(function(n) {
t[0][3].add(a(0, n, b(o) ? o : W, n.notifyWith)), t[1][3].add(a(0, n, b(e) ? e : W)), 
t[2][3].add(a(0, n, b(r) ? r : B));
}).promise();
},
promise: function(e) {
return null != e ? C.extend(e, o) : o;
}
}, i = {};
return C.each(t, function(e, n) {
var a = n[2], s = n[5];
o[n[1]] = a.add, s && a.add(function() {
r = s;
}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), 
i[n[0]] = function() {
return i[n[0] + "With"](this === i ? void 0 : this, arguments), this;
}, i[n[0] + "With"] = a.fireWith;
}), o.promise(i), e && e.call(i, i), i;
},
when: function(e) {
var t = arguments.length, n = t, r = Array(n), o = c.call(arguments), i = C.Deferred(), a = function(e) {
return function(n) {
r[e] = this, o[e] = arguments.length > 1 ? c.call(arguments) : n, --t || i.resolveWith(r, o);
};
};
if (t <= 1 && (F(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || b(o[n] && o[n].then))) return i.then();
for (;n--; ) F(o[n], a(n), i.reject);
return i.promise();
}
});
var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
C.Deferred.exceptionHook = function(e, t) {
n.console && n.console.warn && e && U.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
}, C.readyException = function(e) {
n.setTimeout(function() {
throw e;
});
};
var Q = C.Deferred();
function z() {
s.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), 
C.ready();
}
C.fn.ready = function(e) {
return Q.then(e).catch(function(e) {
C.readyException(e);
}), this;
}, C.extend({
isReady: !1,
readyWait: 1,
ready: function(e) {
(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || Q.resolveWith(s, [ C ]));
}
}), C.ready.then = Q.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(C.ready) : (s.addEventListener("DOMContentLoaded", z), 
n.addEventListener("load", z));
var V = function(e, t, n, r, o, i, a) {
var s = 0, u = e.length, c = null == n;
if ("object" === T(n)) for (s in o = !0, n) V(e, t, s, n[s], !0, i, a); else if (void 0 !== r && (o = !0, 
b(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
return c.call(C(e), n);
})), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
return o ? e : c ? t.call(e) : u ? t(e[0], n) : i;
}, X = /^-ms-/, Y = /-([a-z])/g;
function J(e, t) {
return t.toUpperCase();
}
function K(e) {
return e.replace(X, "ms-").replace(Y, J);
}
var Z = function(e) {
return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
};
function ee() {
this.expando = C.expando + ee.uid++;
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
var r, o = this.cache(e);
if ("string" == typeof t) o[K(t)] = n; else for (r in t) o[K(r)] = t[r];
return o;
},
get: function(e, t) {
return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
},
access: function(e, t, n) {
return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
void 0 !== n ? n : t);
},
remove: function(e, t) {
var n, r = e[this.expando];
if (void 0 !== r) {
if (void 0 !== t) {
n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in r ? [ t ] : t.match(P) || []).length;
for (;n--; ) delete r[t[n]];
}
(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
}
},
hasData: function(e) {
var t = e[this.expando];
return void 0 !== t && !C.isEmptyObject(t);
}
};
var te = new ee(), ne = new ee(), re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, oe = /[A-Z]/g;
function ie(e) {
return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : re.test(e) ? JSON.parse(e) : e);
}
function ae(e, t, n) {
var r;
if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(oe, "-$&").toLowerCase(), 
"string" == typeof (n = e.getAttribute(r))) {
try {
n = ie(n);
} catch (e) {}
ne.set(e, t, n);
} else n = void 0;
return n;
}
C.extend({
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
}), C.fn.extend({
data: function(e, t) {
var n, r, o, i = this[0], a = i && i.attributes;
if (void 0 === e) {
if (this.length && (o = ne.get(i), 1 === i.nodeType && !te.get(i, "hasDataAttrs"))) {
for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = K(r.slice(5)), 
ae(i, r, o[r]));
te.set(i, "hasDataAttrs", !0);
}
return o;
}
return "object" == typeof e ? this.each(function() {
ne.set(this, e);
}) : V(this, function(t) {
var n;
if (i && void 0 === t) {
if (void 0 !== (n = ne.get(i, e))) return n;
if (void 0 !== (n = ae(i, e))) return n;
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
}), C.extend({
queue: function(e, t, n) {
var r;
if (e) return t = (t || "fx") + "queue", r = te.get(e, t), n && (!r || Array.isArray(n) ? r = te.access(e, t, C.makeArray(n)) : r.push(n)), 
r || [];
},
dequeue: function(e, t) {
t = t || "fx";
var n = C.queue(e, t), r = n.length, o = n.shift(), i = C._queueHooks(e, t), a = function() {
C.dequeue(e, t);
};
"inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), 
delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire();
},
_queueHooks: function(e, t) {
var n = t + "queueHooks";
return te.get(e, n) || te.access(e, n, {
empty: C.Callbacks("once memory").add(function() {
te.remove(e, [ t + "queue", n ]);
})
});
}
}), C.fn.extend({
queue: function(e, t) {
var n = 2;
return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() {
var n = C.queue(this, e, t);
C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
});
},
dequeue: function(e) {
return this.each(function() {
C.dequeue(this, e);
});
},
clearQueue: function(e) {
return this.queue(e || "fx", []);
},
promise: function(e, t) {
var n, r = 1, o = C.Deferred(), i = this, a = this.length, s = function() {
--r || o.resolveWith(i, [ i ]);
};
for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = te.get(i[a], e + "queueHooks")) && n.empty && (r++, 
n.empty.add(s));
return s(), o.promise(t);
}
});
var se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ue = new RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i"), ce = [ "Top", "Right", "Bottom", "Left" ], le = function(e, t) {
return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display");
}, fe = function(e, t, n, r) {
var o, i, a = {};
for (i in t) a[i] = e.style[i], e.style[i] = t[i];
for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
return o;
};
function pe(e, t, n, r) {
var o, i, a = 20, s = r ? function() {
return r.cur();
} : function() {
return C.css(e, t, "");
}, u = s(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"), l = (C.cssNumber[t] || "px" !== c && +u) && ue.exec(C.css(e, t));
if (l && l[3] !== c) {
for (u /= 2, c = c || l[3], l = +u || 1; a--; ) C.style(e, t, l + c), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), 
l /= i;
l *= 2, C.style(e, t, l + c), n = n || [];
}
return n && (l = +l || +u || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, 
r.start = l, r.end = o)), o;
}
var de = {};
function he(e) {
var t, n = e.ownerDocument, r = e.nodeName, o = de[r];
return o || (t = n.body.appendChild(n.createElement(r)), o = C.css(t, "display"), 
t.parentNode.removeChild(t), "none" === o && (o = "block"), de[r] = o, o);
}
function ge(e, t) {
for (var n, r, o = [], i = 0, a = e.length; i < a; i++) (r = e[i]).style && (n = r.style.display, 
t ? ("none" === n && (o[i] = te.get(r, "display") || null, o[i] || (r.style.display = "")), 
"" === r.style.display && le(r) && (o[i] = he(r))) : "none" !== n && (o[i] = "none", 
te.set(r, "display", n)));
for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
return e;
}
C.fn.extend({
show: function() {
return ge(this, !0);
},
hide: function() {
return ge(this);
},
toggle: function(e) {
return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
le(this) ? C(this).show() : C(this).hide();
});
}
});
var me = /^(?:checkbox|radio)$/i, ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ve = /^$|^module$|\/(?:java|ecma)script/i, be = {
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
void 0 === t || t && D(e, t) ? C.merge([ e ], n) : n;
}
function we(e, t) {
for (var n = 0, r = e.length; n < r; n++) te.set(e[n], "globalEval", !t || te.get(t[n], "globalEval"));
}
be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, 
be.th = be.td;
var _e = /<|&#?\w+;/;
function Te(e, t, n, r, o) {
for (var i, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((i = e[d]) || 0 === i) if ("object" === T(i)) C.merge(p, i.nodeType ? [ i ] : i); else if (_e.test(i)) {
for (a = a || f.appendChild(t.createElement("div")), s = (ye.exec(i) || [ "", "" ])[1].toLowerCase(), 
u = be[s] || be._default, a.innerHTML = u[1] + C.htmlPrefilter(i) + u[2], l = u[0]; l--; ) a = a.lastChild;
C.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
} else p.push(t.createTextNode(i));
for (f.textContent = "", d = 0; i = p[d++]; ) if (r && C.inArray(i, r) > -1) o && o.push(i); else if (c = C.contains(i.ownerDocument, i), 
a = xe(f.appendChild(i), "script"), c && we(a), n) for (l = 0; i = a[l++]; ) ve.test(i.type || "") && n.push(i);
return f;
}
!function() {
var e = s.createDocumentFragment().appendChild(s.createElement("div")), t = s.createElement("input");
t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
e.appendChild(t), v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
}();
var je = s.documentElement, Ce = /^key/, ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ae = /^([^.]*)(?:\.(.+)|)/;
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
function Ne(e, t, n, r, o, i) {
var a, s;
if ("object" == typeof t) {
for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], i);
return e;
}
if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, 
r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Me; else if (!o) return e;
return 1 === i && (a = o, (o = function(e) {
return C().off(e), a.apply(this, arguments);
}).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
C.event.add(this, t, o, r, n);
});
}
C.event = {
global: {},
add: function(e, t, n, r, o) {
var i, a, s, u, c, l, f, p, d, h, g, m = te.get(e);
if (m) for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(je, o), 
n.guid || (n.guid = C.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
}), c = (t = (t || "").match(P) || [ "" ]).length; c--; ) d = g = (s = Ae.exec(t[c]) || [])[1], 
h = (s[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, 
f = C.event.special[d] || {}, l = C.extend({
type: d,
origType: g,
data: r,
handler: n,
guid: n.guid,
selector: o,
needsContext: o && C.expr.match.needsContext.test(o),
namespace: h.join(".")
}, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), 
f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, l) : p.push(l), 
C.event.global[d] = !0);
},
remove: function(e, t, n, r, o) {
var i, a, s, u, c, l, f, p, d, h, g, m = te.hasData(e) && te.get(e);
if (m && (u = m.events)) {
for (c = (t = (t || "").match(P) || [ "" ]).length; c--; ) if (d = g = (s = Ae.exec(t[c]) || [])[1], 
h = (s[2] || "").split(".").sort(), d) {
for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; ) l = p[i], 
!o && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(i, 1), 
l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C.removeEvent(e, d, m.handle), 
delete u[d]);
} else for (d in u) C.event.remove(e, d + t[c], n, r, !0);
C.isEmptyObject(u) && te.remove(e, "handle events");
}
},
dispatch: function(e) {
var t = C.event.fix(e), n, r, o, i, a, s, u = new Array(arguments.length), c = (te.get(this, "events") || {})[t.type] || [], l = C.event.special[t.type] || {};
for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
if (t.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
for (s = C.event.handlers.call(this, t, c), n = 0; (i = s[n++]) && !t.isPropagationStopped(); ) for (t.currentTarget = i.elem, 
r = 0; (a = i.handlers[r++]) && !t.isImmediatePropagationStopped(); ) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, 
t.data = a.data, void 0 !== (o = ((C.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, u)) && !1 === (t.result = o) && (t.preventDefault(), 
t.stopPropagation()));
return l.postDispatch && l.postDispatch.call(this, t), t.result;
}
},
handlers: function(e, t) {
var n, r, o, i, a, s = [], u = t.delegateCount, c = e.target;
if (u && c.nodeType && !("click" === e.type && e.button >= 1)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? C(o, this).index(c) > -1 : C.find(o, this, null, [ c ]).length), 
a[o] && i.push(r);
i.length && s.push({
elem: c,
handlers: i
});
}
return c = this, u < t.length && s.push({
elem: c,
handlers: t.slice(u)
}), s;
},
addProp: function(e, t) {
Object.defineProperty(C.Event.prototype, e, {
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
return e[C.expando] ? e : new C.Event(e);
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
if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), 
!1;
},
_default: function(e) {
return D(e.target, "a");
}
},
beforeunload: {
postDispatch: function(e) {
void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
}
}
}
}, C.removeEvent = function(e, t, n) {
e.removeEventListener && e.removeEventListener(t, n);
}, C.Event = function(e, t) {
if (!(this instanceof C.Event)) return new C.Event(e, t);
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Me, 
this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
}, C.Event.prototype = {
constructor: C.Event,
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
}, C.each({
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
return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
}
}, C.event.addProp), C.each({
mouseenter: "mouseover",
mouseleave: "mouseout",
pointerenter: "pointerover",
pointerleave: "pointerout"
}, function(e, t) {
C.event.special[e] = {
delegateType: t,
bindType: t,
handle: function(e) {
var n, r = this, o = e.relatedTarget, i = e.handleObj;
return o && (o === r || C.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), 
e.type = t), n;
}
};
}), C.fn.extend({
on: function(e, t, n, r) {
return Ne(this, e, t, n, r);
},
one: function(e, t, n, r) {
return Ne(this, e, t, n, r, 1);
},
off: function(e, t, n) {
var r, o;
if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
this;
if ("object" == typeof e) {
for (o in e) this.off(o, t, e[o]);
return this;
}
return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Me), 
this.each(function() {
C.event.remove(this, e, n, t);
});
}
});
var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, $e = /<script|<style|<link/i, qe = /checked\s*(?:[^=]|=\s*.checked.)/i, Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function Le(e, t) {
return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
}
function Ge(e) {
return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
}
function Re(e) {
return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
e;
}
function He(e, t) {
var n, r, o, i, a, s, u, c;
if (1 === t.nodeType) {
if (te.hasData(e) && (i = te.access(e), a = te.set(t, i), c = i.events)) for (o in delete a.handle, 
a.events = {}, c) for (n = 0, r = c[o].length; n < r; n++) C.event.add(t, o, c[o][n]);
ne.hasData(e) && (s = ne.access(e), u = C.extend({}, s), ne.set(t, u));
}
}
function Pe(e, t) {
var n = t.nodeName.toLowerCase();
"input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
}
function Ie(e, t, n, r) {
t = l.apply([], t);
var o, i, a, s, u, c, f = 0, p = e.length, d = p - 1, h = t[0], g = b(h);
if (g || p > 1 && "string" == typeof h && !v.checkClone && qe.test(h)) return e.each(function(o) {
var i = e.eq(o);
g && (t[0] = h.call(this, o, i.html())), Ie(i, t, n, r);
});
if (p && (i = (o = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), 
i || r)) {
for (s = (a = C.map(xe(o, "script"), Ge)).length; f < p; f++) u = o, f !== d && (u = C.clone(u, !0, !0), 
s && C.merge(a, xe(u, "script"))), n.call(e[f], u, f);
if (s) for (c = a[a.length - 1].ownerDocument, C.map(a, Re), f = 0; f < s; f++) u = a[f], 
ve.test(u.type || "") && !te.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(u.src) : _(u.textContent.replace(Oe, ""), c, u));
}
return e;
}
function We(e, t, n) {
for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(xe(r)), 
r.parentNode && (n && C.contains(r.ownerDocument, r) && we(xe(r, "script")), r.parentNode.removeChild(r));
return e;
}
C.extend({
htmlPrefilter: function(e) {
return e.replace(De, "<$1></$2>");
},
clone: function(e, t, n) {
var r, o, i, a, s = e.cloneNode(!0), u = C.contains(e.ownerDocument, e);
if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (a = xe(s), 
r = 0, o = (i = xe(e)).length; r < o; r++) Pe(i[r], a[r]);
if (t) if (n) for (i = i || xe(e), a = a || xe(s), r = 0, o = i.length; r < o; r++) He(i[r], a[r]); else He(e, s);
return (a = xe(s, "script")).length > 0 && we(a, !u && xe(e, "script")), s;
},
cleanData: function(e) {
for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++) if (Z(n)) {
if (t = n[te.expando]) {
if (t.events) for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
n[te.expando] = void 0;
}
n[ne.expando] && (n[ne.expando] = void 0);
}
}
}), C.fn.extend({
detach: function(e) {
return We(this, e, !0);
},
remove: function(e) {
return We(this, e);
},
text: function(e) {
return V(this, function(e) {
return void 0 === e ? C.text(this) : this.empty().each(function() {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
});
}, null, e, arguments.length);
},
append: function() {
return Ie(this, arguments, function(e) {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
});
},
prepend: function() {
return Ie(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = Le(this, e);
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
for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(xe(e, !1)), 
e.textContent = "");
return this;
},
clone: function(e, t) {
return e = null != e && e, t = null == t ? e : t, this.map(function() {
return C.clone(this, e, t);
});
},
html: function(e) {
return V(this, function(e) {
var t = this[0] || {}, n = 0, r = this.length;
if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
if ("string" == typeof e && !$e.test(e) && !be[(ye.exec(e) || [ "", "" ])[1].toLowerCase()]) {
e = C.htmlPrefilter(e);
try {
for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(xe(t, !1)), 
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
C.inArray(this, e) < 0 && (C.cleanData(xe(this)), n && n.replaceChild(t, this));
}, e);
}
}), C.each({
appendTo: "append",
prependTo: "prepend",
insertBefore: "before",
insertAfter: "after",
replaceAll: "replaceWith"
}, function(e, t) {
C.fn[e] = function(e) {
for (var n, r = [], o = C(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), 
C(o[a])[t](n), f.apply(r, n.get());
return this.pushStack(r);
};
});
var Be = new RegExp("^(" + se + ")(?!px)[a-z%]+$", "i"), Fe = function(e) {
var t = e.ownerDocument.defaultView;
return t && t.opener || (t = n), t.getComputedStyle(e);
}, Ue = new RegExp(ce.join("|"), "i");
function Qe(e, t, n) {
var r, o, i, a, s = e.style;
return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (a = C.style(e, t)), 
!v.pixelBoxStyles() && Be.test(a) && Ue.test(t) && (r = s.width, o = s.minWidth, 
i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a;
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
je.appendChild(c).appendChild(l);
var e = n.getComputedStyle(l);
r = "1%" !== e.top, u = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), 
o = 36 === t(e.width), l.style.position = "absolute", i = 36 === l.offsetWidth || "absolute", 
je.removeChild(c), l = null;
}
}
function t(e) {
return Math.round(parseFloat(e));
}
var r, o, i, a, u, c = s.createElement("div"), l = s.createElement("div");
l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
v.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(v, {
boxSizingReliable: function() {
return e(), o;
},
pixelBoxStyles: function() {
return e(), a;
},
pixelPosition: function() {
return e(), r;
},
reliableMarginLeft: function() {
return e(), u;
},
scrollboxSize: function() {
return e(), i;
}
}));
}();
var Ve = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ye = {
position: "absolute",
visibility: "hidden",
display: "block"
}, Je = {
letterSpacing: "0",
fontWeight: "400"
}, Ke = [ "Webkit", "Moz", "ms" ], Ze = s.createElement("div").style;
function et(e) {
if (e in Ze) return e;
for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--; ) if ((e = Ke[n] + t) in Ze) return e;
}
function tt(e) {
var t = C.cssProps[e];
return t || (t = C.cssProps[e] = et(e) || e), t;
}
function nt(e, t, n) {
var r = ue.exec(t);
return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
}
function rt(e, t, n, r, o, i) {
var a = "width" === t ? 1 : 0, s = 0, u = 0;
if (n === (r ? "border" : "content")) return 0;
for (;a < 4; a += 2) "margin" === n && (u += C.css(e, n + ce[a], !0, o)), r ? ("content" === n && (u -= C.css(e, "padding" + ce[a], !0, o)), 
"margin" !== n && (u -= C.css(e, "border" + ce[a] + "Width", !0, o))) : (u += C.css(e, "padding" + ce[a], !0, o), 
"padding" !== n ? u += C.css(e, "border" + ce[a] + "Width", !0, o) : s += C.css(e, "border" + ce[a] + "Width", !0, o));
return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5))), 
u;
}
function ot(e, t, n) {
var r = Fe(e), o = Qe(e, t, r), i = "border-box" === C.css(e, "boxSizing", !1, r), a = i;
if (Be.test(o)) {
if (!n) return o;
o = "auto";
}
return a = a && (v.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === C.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], 
a = !0), (o = parseFloat(o) || 0) + rt(e, t, n || (i ? "border" : "content"), a, r, o) + "px";
}
function it(e, t, n, r, o) {
return new it.prototype.init(e, t, n, r, o);
}
C.extend({
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
var o, i, a, s = K(t), u = Xe.test(t), c = e.style;
if (u || (t = tt(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
"string" == (i = typeof n) && (o = ue.exec(n)) && o[1] && (n = pe(e, t, o), i = "number"), 
null != n && n == n && ("number" === i && (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), 
v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n));
}
},
css: function(e, t, n, r) {
var o, i, a, s = K(t);
return Xe.test(t) || (t = tt(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), 
void 0 === o && (o = Qe(e, t, r)), "normal" === o && t in Je && (o = Je[t]), "" === n || n ? (i = parseFloat(o), 
!0 === n || isFinite(i) ? i || 0 : o) : o;
}
}), C.each([ "height", "width" ], function(e, t) {
C.cssHooks[t] = {
get: function(e, n, r) {
if (n) return !Ve.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, r) : fe(e, Ye, function() {
return ot(e, t, r);
});
},
set: function(e, n, r) {
var o, i = Fe(e), a = "border-box" === C.css(e, "boxSizing", !1, i), s = r && rt(e, t, r, a, i);
return a && v.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - rt(e, t, "border", !1, i) - .5)), 
s && (o = ue.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), 
nt(e, n, s);
}
};
}), C.cssHooks.marginLeft = ze(v.reliableMarginLeft, function(e, t) {
if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - fe(e, {
marginLeft: 0
}, function() {
return e.getBoundingClientRect().left;
})) + "px";
}), C.each({
margin: "",
padding: "",
border: "Width"
}, function(e, t) {
C.cssHooks[e + t] = {
expand: function(n) {
for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) o[e + ce[r] + t] = i[r] || i[r - 2] || i[0];
return o;
}
}, "margin" !== e && (C.cssHooks[e + t].set = nt);
}), C.fn.extend({
css: function(e, t) {
return V(this, function(e, t, n) {
var r, o, i = {}, a = 0;
if (Array.isArray(t)) {
for (r = Fe(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
return i;
}
return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
}, e, t, arguments.length > 1);
}
}), C.Tween = it, it.prototype = {
constructor: it,
init: function(e, t, n, r, o, i) {
this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, 
this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px");
},
cur: function() {
var e = it.propHooks[this.prop];
return e && e.get ? e.get(this) : it.propHooks._default.get(this);
},
run: function(e) {
var t, n = it.propHooks[this.prop];
return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
n && n.set ? n.set(this) : it.propHooks._default.set(this), this;
}
}, it.prototype.init.prototype = it.prototype, it.propHooks = {
_default: {
get: function(e) {
var t;
return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
},
set: function(e) {
C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
}
}
}, it.propHooks.scrollTop = it.propHooks.scrollLeft = {
set: function(e) {
e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
}
}, C.easing = {
linear: function(e) {
return e;
},
swing: function(e) {
return .5 - Math.cos(e * Math.PI) / 2;
},
_default: "swing"
}, C.fx = it.prototype.init, C.fx.step = {};
var at, st, ut = /^(?:toggle|show|hide)$/, ct = /queueHooks$/;
function lt() {
st && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(lt) : n.setTimeout(lt, C.fx.interval), 
C.fx.tick());
}
function ft() {
return n.setTimeout(function() {
at = void 0;
}), at = Date.now();
}
function pt(e, t) {
var n, r = 0, o = {
height: e
};
for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ce[r])] = o["padding" + n] = e;
return t && (o.opacity = o.width = e), o;
}
function dt(e, t, n) {
for (var r, o = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), i = 0, a = o.length; i < a; i++) if (r = o[i].call(n, t, e)) return r;
}
function ht(e, t, n) {
var r, o, i, a, s, u, c, l, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && le(e), m = te.get(e, "fxshow");
for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
s = a.empty.fire, a.empty.fire = function() {
a.unqueued || s();
}), a.unqueued++, p.always(function() {
p.always(function() {
a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
});
})), t) if (o = t[r], ut.test(o)) {
if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
if ("show" !== o || !m || void 0 === m[r]) continue;
g = !0;
}
d[r] = m && m[r] || C.style(e, r);
}
if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
null == (c = m && m.display) && (c = te.get(e, "display")), "none" === (l = C.css(e, "display")) && (c ? l = c : (ge([ e ], !0), 
c = e.style.display || c, l = C.css(e, "display"), ge([ e ]))), ("inline" === l || "inline-block" === l && null != c) && "none" === C.css(e, "float") && (u || (p.done(function() {
h.display = c;
}), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), 
n.overflow && (h.overflow = "hidden", p.always(function() {
h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
})), u = !1, d) u || (m ? "hidden" in m && (g = m.hidden) : m = te.access(e, "fxshow", {
display: c
}), i && (m.hidden = !g), g && ge([ e ], !0), p.done(function() {
for (r in g || ge([ e ]), te.remove(e, "fxshow"), d) C.style(e, r, d[r]);
})), u = dt(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, 
u.start = 0));
}
function gt(e, t) {
var n, r, o, i, a;
for (n in e) if (o = t[r = K(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), 
n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && "expand" in a) for (n in i = a.expand(i), 
delete e[r], i) n in e || (e[n] = i[n], t[n] = o); else t[r] = o;
}
function mt(e, t, n) {
var r, o, i = 0, a = mt.prefilters.length, s = C.Deferred().always(function() {
delete u.elem;
}), u = function() {
if (o) return !1;
for (var t = at || ft(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++) c.tweens[i].run(r);
return s.notifyWith(e, [ c, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ c, 1, 0 ]), 
s.resolveWith(e, [ c ]), !1);
}, c = s.promise({
elem: e,
props: C.extend({}, t),
opts: C.extend(!0, {
specialEasing: {},
easing: C.easing._default
}, n),
originalProperties: t,
originalOptions: n,
startTime: at || ft(),
duration: n.duration,
tweens: [],
createTween: function(t, n) {
var r = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
return c.tweens.push(r), r;
},
stop: function(t) {
var n = 0, r = t ? c.tweens.length : 0;
if (o) return this;
for (o = !0; n < r; n++) c.tweens[n].run(1);
return t ? (s.notifyWith(e, [ c, 1, 0 ]), s.resolveWith(e, [ c, t ])) : s.rejectWith(e, [ c, t ]), 
this;
}
}), l = c.props;
for (gt(l, c.opts.specialEasing); i < a; i++) if (r = mt.prefilters[i].call(c, e, l, c.opts)) return b(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), 
r;
return C.map(l, dt, c), b(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), 
C.fx.timer(C.extend(u, {
elem: e,
anim: c,
queue: c.opts.queue
})), c;
}
C.Animation = C.extend(mt, {
tweeners: {
"*": [ function(e, t) {
var n = this.createTween(e, t);
return pe(n.elem, e, ue.exec(t), n), n;
} ]
},
tweener: function(e, t) {
b(e) ? (t = e, e = [ "*" ]) : e = e.match(P);
for (var n, r = 0, o = e.length; r < o; r++) n = e[r], mt.tweeners[n] = mt.tweeners[n] || [], 
mt.tweeners[n].unshift(t);
},
prefilters: [ ht ],
prefilter: function(e, t) {
t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
}
}), C.speed = function(e, t, n) {
var r = e && "object" == typeof e ? C.extend({}, e) : {
complete: n || !n && t || b(e) && e,
duration: e,
easing: n && t || t && !b(t) && t
};
return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), 
null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
b(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
}, r;
}, C.fn.extend({
fadeTo: function(e, t, n, r) {
return this.filter(le).css("opacity", 0).show().end().animate({
opacity: t
}, e, n, r);
},
animate: function(e, t, n, r) {
var o = C.isEmptyObject(e), i = C.speed(t, n, r), a = function() {
var t = mt(this, C.extend({}, e), i);
(o || te.get(this, "finish")) && t.stop(!0);
};
return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
},
stop: function(e, t, n) {
var r = function(e) {
var t = e.stop;
delete e.stop, t(n);
};
return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
this.each(function() {
var t = !0, o = null != e && e + "queueHooks", i = C.timers, a = te.get(this);
if (o) a[o] && a[o].stop && r(a[o]); else for (o in a) a[o] && a[o].stop && ct.test(o) && r(a[o]);
for (o = i.length; o--; ) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), 
t = !1, i.splice(o, 1));
!t && n || C.dequeue(this, e);
});
},
finish: function(e) {
return !1 !== e && (e = e || "fx"), this.each(function() {
var t, n = te.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = C.timers, a = r ? r.length : 0;
for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
i.splice(t, 1));
for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
delete n.finish;
});
}
}), C.each([ "toggle", "show", "hide" ], function(e, t) {
var n = C.fn[t];
C.fn[t] = function(e, r, o) {
return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, r, o);
};
}), C.each({
slideDown: pt("show"),
slideUp: pt("hide"),
slideToggle: pt("toggle"),
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
C.fn[e] = function(e, n, r) {
return this.animate(t, e, n, r);
};
}), C.timers = [], C.fx.tick = function() {
var e, t = 0, n = C.timers;
for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
n.length || C.fx.stop(), at = void 0;
}, C.fx.timer = function(e) {
C.timers.push(e), C.fx.start();
}, C.fx.interval = 13, C.fx.start = function() {
st || (st = !0, lt());
}, C.fx.stop = function() {
st = null;
}, C.fx.speeds = {
slow: 600,
fast: 200,
_default: 400
}, C.fn.delay = function(e, t) {
return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
var o = n.setTimeout(t, e);
r.stop = function() {
n.clearTimeout(o);
};
});
}, function() {
var e = s.createElement("input"), t = s.createElement("select").appendChild(s.createElement("option"));
e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = s.createElement("input")).value = "t", 
e.type = "radio", v.radioValue = "t" === e.value;
}();
var yt, vt = C.expr.attrHandle;
C.fn.extend({
attr: function(e, t) {
return V(this, C.attr, e, t, arguments.length > 1);
},
removeAttr: function(e) {
return this.each(function() {
C.removeAttr(this, e);
});
}
}), C.extend({
attr: function(e, t, n) {
var r, o, i = e.nodeType;
if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? yt : void 0)), 
void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r);
},
attrHooks: {
type: {
set: function(e, t) {
if (!v.radioValue && "radio" === t && D(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
}
},
removeAttr: function(e, t) {
var n, r = 0, o = t && t.match(P);
if (o && 1 === e.nodeType) for (;n = o[r++]; ) e.removeAttribute(n);
}
}), yt = {
set: function(e, t, n) {
return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
}
}, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = vt[t] || C.find.attr;
vt[t] = function(e, t, r) {
var o, i, a = t.toLowerCase();
return r || (i = vt[a], vt[a] = o, o = null != n(e, t, r) ? a : null, vt[a] = i), 
o;
};
});
var bt = /^(?:input|select|textarea|button)$/i, xt = /^(?:a|area)$/i;
function wt(e) {
return (e.match(P) || []).join(" ");
}
function _t(e) {
return e.getAttribute && e.getAttribute("class") || "";
}
function Tt(e) {
return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
}
C.fn.extend({
prop: function(e, t) {
return V(this, C.prop, e, t, arguments.length > 1);
},
removeProp: function(e) {
return this.each(function() {
delete this[C.propFix[e] || e];
});
}
}), C.extend({
prop: function(e, t, n) {
var r, o, i = e.nodeType;
if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, 
o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
},
propHooks: {
tabIndex: {
get: function(e) {
var t = C.find.attr(e, "tabindex");
return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
}
}
},
propFix: {
for: "htmlFor",
class: "className"
}
}), v.optSelected || (C.propHooks.selected = {
get: function(e) {
var t = e.parentNode;
return t && t.parentNode && t.parentNode.selectedIndex, null;
},
set: function(e) {
var t = e.parentNode;
t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
}
}), C.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
C.propFix[this.toLowerCase()] = this;
}), C.fn.extend({
addClass: function(e) {
var t, n, r, o, i, a, s, u = 0;
if (b(e)) return this.each(function(t) {
C(this).addClass(e.call(this, t, _t(this)));
});
if ((t = Tt(e)).length) for (;n = this[u++]; ) if (o = _t(n), r = 1 === n.nodeType && " " + wt(o) + " ") {
for (a = 0; i = t[a++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
o !== (s = wt(r)) && n.setAttribute("class", s);
}
return this;
},
removeClass: function(e) {
var t, n, r, o, i, a, s, u = 0;
if (b(e)) return this.each(function(t) {
C(this).removeClass(e.call(this, t, _t(this)));
});
if (!arguments.length) return this.attr("class", "");
if ((t = Tt(e)).length) for (;n = this[u++]; ) if (o = _t(n), r = 1 === n.nodeType && " " + wt(o) + " ") {
for (a = 0; i = t[a++]; ) for (;r.indexOf(" " + i + " ") > -1; ) r = r.replace(" " + i + " ", " ");
o !== (s = wt(r)) && n.setAttribute("class", s);
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, r = "string" === n || Array.isArray(e);
return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each(function(n) {
C(this).toggleClass(e.call(this, n, _t(this), t), t);
}) : this.each(function() {
var t, o, i, a;
if (r) for (o = 0, i = C(this), a = Tt(e); t = a[o++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = _t(this)) && te.set(this, "__className__", t), 
this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : te.get(this, "__className__") || ""));
});
},
hasClass: function(e) {
var t, n, r = 0;
for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + wt(_t(n)) + " ").indexOf(t) > -1) return !0;
return !1;
}
});
var jt = /\r/g;
C.fn.extend({
val: function(e) {
var t, n, r, o = this[0];
return arguments.length ? (r = b(e), this.each(function(n) {
var o;
1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, function(e) {
return null == e ? "" : e + "";
})), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
})) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(jt, "") : null == n ? "" : n : void 0;
}
}), C.extend({
valHooks: {
option: {
get: function(e) {
var t = C.find.attr(e, "value");
return null != t ? t : wt(C.text(e));
}
},
select: {
get: function(e) {
var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
for (r = i < 0 ? u : a ? i : 0; r < u; r++) if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
if (t = C(n).val(), a) return t;
s.push(t);
}
return s;
},
set: function(e, t) {
for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--; ) ((r = o[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (n = !0);
return n || (e.selectedIndex = -1), i;
}
}
}
}), C.each([ "radio", "checkbox" ], function() {
C.valHooks[this] = {
set: function(e, t) {
if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1;
}
}, v.checkOn || (C.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" : e.value;
});
}), v.focusin = "onfocusin" in n;
var Ct = /^(?:focusinfocus|focusoutblur)$/, kt = function(e) {
e.stopPropagation();
};
C.extend(C.event, {
trigger: function(e, t, r, o) {
var i, a, u, c, l, f, p, d, h = [ r || s ], m = g.call(e, "type") ? e.type : e, y = g.call(e, "namespace") ? e.namespace.split(".") : [];
if (a = d = u = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (m = (y = m.split(".")).shift(), 
y.sort()), l = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, 
e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
e.result = void 0, e.target || (e.target = r), t = null == t ? [ e ] : C.makeArray(t, [ e ]), 
p = C.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, t))) {
if (!o && !p.noBubble && !x(r)) {
for (c = p.delegateType || m, Ct.test(c + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
u = a;
u === (r.ownerDocument || s) && h.push(u.defaultView || u.parentWindow || n);
}
for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); ) d = a, e.type = i > 1 ? c : p.bindType || m, 
(f = (te.get(a, "events") || {})[e.type] && te.get(a, "handle")) && f.apply(a, t), 
(f = l && a[l]) && f.apply && Z(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
return e.type = m, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !Z(r) || l && b(r[m]) && !x(r) && ((u = r[l]) && (r[l] = null), 
C.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, kt), r[m](), 
e.isPropagationStopped() && d.removeEventListener(m, kt), C.event.triggered = void 0, 
u && (r[l] = u)), e.result;
}
},
simulate: function(e, t, n) {
var r = C.extend(new C.Event(), n, {
type: e,
isSimulated: !0
});
C.event.trigger(r, null, t);
}
}), C.fn.extend({
trigger: function(e, t) {
return this.each(function() {
C.event.trigger(e, t, this);
});
},
triggerHandler: function(e, t) {
var n = this[0];
if (n) return C.event.trigger(e, t, n, !0);
}
}), v.focusin || C.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
var n = function(e) {
C.event.simulate(t, e.target, C.event.fix(e));
};
C.event.special[t] = {
setup: function() {
var r = this.ownerDocument || this, o = te.access(r, t);
o || r.addEventListener(e, n, !0), te.access(r, t, (o || 0) + 1);
},
teardown: function() {
var r = this.ownerDocument || this, o = te.access(r, t) - 1;
o ? te.access(r, t, o) : (r.removeEventListener(e, n, !0), te.remove(r, t));
}
};
});
var At = n.location, Et = Date.now(), Mt = /\?/;
C.parseXML = function(e) {
var t;
if (!e || "string" != typeof e) return null;
try {
t = new n.DOMParser().parseFromString(e, "text/xml");
} catch (e) {
t = void 0;
}
return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), 
t;
};
var St = /\[\]$/, Nt = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, $t = /^(?:input|select|textarea|keygen)/i;
function qt(e, t, n, r) {
var o;
if (Array.isArray(t)) C.each(t, function(t, o) {
n || St.test(e) ? r(e, o) : qt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
}); else if (n || "object" !== T(t)) r(e, t); else for (o in t) qt(e + "[" + o + "]", t[o], n, r);
}
C.param = function(e, t) {
var n, r = [], o = function(e, t) {
var n = b(t) ? t() : t;
r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
};
if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
o(this.name, this.value);
}); else for (n in e) qt(n, e[n], t, o);
return r.join("&");
}, C.fn.extend({
serialize: function() {
return C.param(this.serializeArray());
},
serializeArray: function() {
return this.map(function() {
var e = C.prop(this, "elements");
return e ? C.makeArray(e) : this;
}).filter(function() {
var e = this.type;
return this.name && !C(this).is(":disabled") && $t.test(this.nodeName) && !Dt.test(e) && (this.checked || !me.test(e));
}).map(function(e, t) {
var n = C(this).val();
return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
return {
name: t.name,
value: e.replace(Nt, "\r\n")
};
}) : {
name: t.name,
value: n.replace(Nt, "\r\n")
};
}).get();
}
});
var Ot = /%20/g, Lt = /#.*$/, Gt = /([?&])_=[^&]*/, Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pt = /^(?:GET|HEAD)$/, It = /^\/\//, Wt = {}, Bt = {}, Ft = "*/".concat("*"), Ut = s.createElement("a");
function Qt(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var r, o = 0, i = t.toLowerCase().match(P) || [];
if (b(n)) for (;r = i[o++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
};
}
function zt(e, t, n, r) {
var o = {}, i = e === Bt;
function a(s) {
var u;
return o[s] = !0, C.each(e[s] || [], function(e, s) {
var c = s(t, n, r);
return "string" != typeof c || i || o[c] ? i ? !(u = c) : void 0 : (t.dataTypes.unshift(c), 
a(c), !1);
}), u;
}
return a(t.dataTypes[0]) || !o["*"] && a("*");
}
function Vt(e, t) {
var n, r, o = C.ajaxSettings.flatOptions || {};
for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
return r && C.extend(!0, e, r), e;
}
function Xt(e, t, n) {
for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
if (r) for (o in s) if (s[o] && s[o].test(r)) {
u.unshift(o);
break;
}
if (u[0] in n) i = u[0]; else {
for (o in n) {
if (!u[0] || e.converters[o + " " + u[0]]) {
i = o;
break;
}
a || (a = o);
}
i = i || a;
}
if (i) return i !== u[0] && u.unshift(i), n[i];
}
function Yt(e, t, n, r) {
var o, i, a, s, u, c = {}, l = e.dataTypes.slice();
if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
for (i = l.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), 
!u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift()) if ("*" === i) i = u; else if ("*" !== u && u !== i) {
if (!(a = c[u + " " + i] || c["* " + i])) for (o in c) if ((s = o.split(" "))[1] === i && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
!0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], l.unshift(s[1]));
break;
}
if (!0 !== a) if (a && e.throws) t = a(t); else try {
t = a(t);
} catch (e) {
return {
state: "parsererror",
error: a ? e : "No conversion from " + u + " to " + i
};
}
}
return {
state: "success",
data: t
};
}
Ut.href = At.href, C.extend({
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
"*": Ft,
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
"text xml": C.parseXML
},
flatOptions: {
url: !0,
context: !0
}
},
ajaxSetup: function(e, t) {
return t ? Vt(Vt(e, C.ajaxSettings), t) : Vt(C.ajaxSettings, e);
},
ajaxPrefilter: Qt(Wt),
ajaxTransport: Qt(Bt),
ajax: function(e, t) {
"object" == typeof e && (t = e, e = void 0), t = t || {};
var r, o, i, a, u, c, l, f, p, d, h = C.ajaxSetup({}, t), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event, y = C.Deferred(), v = C.Callbacks("once memory"), b = h.statusCode || {}, x = {}, w = {}, _ = "canceled", T = {
readyState: 0,
getResponseHeader: function(e) {
var t;
if (l) {
if (!a) for (a = {}; t = Rt.exec(i); ) a[t[1].toLowerCase()] = t[2];
t = a[e.toLowerCase()];
}
return null == t ? null : t;
},
getAllResponseHeaders: function() {
return l ? i : null;
},
setRequestHeader: function(e, t) {
return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), 
this;
},
overrideMimeType: function(e) {
return null == l && (h.mimeType = e), this;
},
statusCode: function(e) {
var t;
if (e) if (l) T.always(e[T.status]); else for (t in e) b[t] = [ b[t], e[t] ];
return this;
},
abort: function(e) {
var t = e || _;
return r && r.abort(t), j(0, t), this;
}
};
if (y.promise(T), h.url = ((e || h.url || At.href) + "").replace(It, At.protocol + "//"), 
h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [ "" ], 
null == h.crossDomain) {
c = s.createElement("a");
try {
c.href = h.url, c.href = c.href, h.crossDomain = Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host;
} catch (e) {
h.crossDomain = !0;
}
}
if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), 
zt(Wt, h, t, T), l) return T;
for (p in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), 
h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Lt, ""), 
h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) : (d = h.url.slice(o.length), 
h.data && (h.processData || "string" == typeof h.data) && (o += (Mt.test(o) ? "&" : "?") + h.data, 
delete h.data), !1 === h.cache && (o = o.replace(Gt, "$1"), d = (Mt.test(o) ? "&" : "?") + "_=" + Et++ + d), 
h.url = o + d), h.ifModified && (C.lastModified[o] && T.setRequestHeader("If-Modified-Since", C.lastModified[o]), 
C.etag[o] && T.setRequestHeader("If-None-Match", C.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && T.setRequestHeader("Content-Type", h.contentType), 
T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]), 
h.headers) T.setRequestHeader(p, h.headers[p]);
if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || l)) return T.abort();
if (_ = "abort", v.add(h.complete), T.done(h.success), T.fail(h.error), r = zt(Bt, h, t, T)) {
if (T.readyState = 1, f && m.trigger("ajaxSend", [ T, h ]), l) return T;
h.async && h.timeout > 0 && (u = n.setTimeout(function() {
T.abort("timeout");
}, h.timeout));
try {
l = !1, r.send(x, j);
} catch (e) {
if (l) throw e;
j(-1, e);
}
} else j(-1, "No Transport");
function j(e, t, a, s) {
var c, p, d, x, w, _ = t;
l || (l = !0, u && n.clearTimeout(u), r = void 0, i = s || "", T.readyState = e > 0 ? 4 : 0, 
c = e >= 200 && e < 300 || 304 === e, a && (x = Xt(h, T, a)), x = Yt(h, x, T, c), 
c ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (C.lastModified[o] = w), 
(w = T.getResponseHeader("etag")) && (C.etag[o] = w)), 204 === e || "HEAD" === h.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, 
p = x.data, c = !(d = x.error))) : (d = _, !e && _ || (_ = "error", e < 0 && (e = 0))), 
T.status = e, T.statusText = (t || _) + "", c ? y.resolveWith(g, [ p, _, T ]) : y.rejectWith(g, [ T, _, d ]), 
T.statusCode(b), b = void 0, f && m.trigger(c ? "ajaxSuccess" : "ajaxError", [ T, h, c ? p : d ]), 
v.fireWith(g, [ T, _ ]), f && (m.trigger("ajaxComplete", [ T, h ]), --C.active || C.event.trigger("ajaxStop")));
}
return T;
},
getJSON: function(e, t, n) {
return C.get(e, t, n, "json");
},
getScript: function(e, t) {
return C.get(e, void 0, t, "script");
}
}), C.each([ "get", "post" ], function(e, t) {
C[t] = function(e, n, r, o) {
return b(n) && (o = o || r, r = n, n = void 0), C.ajax(C.extend({
url: e,
type: t,
dataType: o,
data: n,
success: r
}, C.isPlainObject(e) && e));
};
}), C._evalUrl = function(e) {
return C.ajax({
url: e,
type: "GET",
dataType: "script",
cache: !0,
async: !1,
global: !1,
throws: !0
});
}, C.fn.extend({
wrapAll: function(e) {
var t;
return this[0] && (b(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), 
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
return e;
}).append(this)), this;
},
wrapInner: function(e) {
return b(e) ? this.each(function(t) {
C(this).wrapInner(e.call(this, t));
}) : this.each(function() {
var t = C(this), n = t.contents();
n.length ? n.wrapAll(e) : t.append(e);
});
},
wrap: function(e) {
var t = b(e);
return this.each(function(n) {
C(this).wrapAll(t ? e.call(this, n) : e);
});
},
unwrap: function(e) {
return this.parent(e).not("body").each(function() {
C(this).replaceWith(this.childNodes);
}), this;
}
}), C.expr.pseudos.hidden = function(e) {
return !C.expr.pseudos.visible(e);
}, C.expr.pseudos.visible = function(e) {
return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}, C.ajaxSettings.xhr = function() {
try {
return new n.XMLHttpRequest();
} catch (e) {}
};
var Jt = {
0: 200,
1223: 204
}, Kt = C.ajaxSettings.xhr();
v.cors = !!Kt && "withCredentials" in Kt, v.ajax = Kt = !!Kt, C.ajaxTransport(function(e) {
var t, r;
if (v.cors || Kt && !e.crossDomain) return {
send: function(o, i) {
var a, s = e.xhr();
if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), 
o) s.setRequestHeader(a, o[a]);
t = function(e) {
return function() {
t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
"abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Jt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
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
}), C.ajaxPrefilter(function(e) {
e.crossDomain && (e.contents.script = !1);
}), C.ajaxSetup({
accepts: {
script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents: {
script: /\b(?:java|ecma)script\b/
},
converters: {
"text script": function(e) {
return C.globalEval(e), e;
}
}
}), C.ajaxPrefilter("script", function(e) {
void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
}), C.ajaxTransport("script", function(e) {
var t, n;
if (e.crossDomain) return {
send: function(r, o) {
t = C("<script>").prop({
charset: e.scriptCharset,
src: e.url
}).on("load error", n = function(e) {
t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
}), s.head.appendChild(t[0]);
},
abort: function() {
n && n();
}
};
});
var Zt = [], en = /(=)\?(?=&|$)|\?\?/;
C.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
var e = Zt.pop() || C.expando + "_" + Et++;
return this[e] = !0, e;
}
}), C.ajaxPrefilter("json jsonp", function(e, t, r) {
var o, i, a, s = !1 !== e.jsonp && (en.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
s ? e[s] = e[s].replace(en, "$1" + o) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), 
e.converters["script json"] = function() {
return a || C.error(o + " was not called"), a[0];
}, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
a = arguments;
}, r.always(function() {
void 0 === i ? C(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, 
Zt.push(o)), a && b(i) && i(a[0]), a = i = void 0;
}), "script";
}), v.createHTMLDocument = function() {
var e = s.implementation.createHTMLDocument("").body;
return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
}(), C.parseHTML = function(e, t, n) {
return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, 
t.head.appendChild(r)) : t = s), i = !n && [], (o = $.exec(e)) ? [ t.createElement(o[1]) ] : (o = Te([ e ], t, i), 
i && i.length && C(i).remove(), C.merge([], o.childNodes)));
var r, o, i;
}, C.fn.load = function(e, t, n) {
var r, o, i, a = this, s = e.indexOf(" ");
return s > -1 && (r = wt(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 
a.length > 0 && C.ajax({
url: e,
type: o || "GET",
dataType: "html",
data: t
}).done(function(e) {
i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
}).always(n && function(e, t) {
a.each(function() {
n.apply(this, i || [ e.responseText, t, e ]);
});
}), this;
}, C.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
C.fn[t] = function(e) {
return this.on(t, e);
};
}), C.expr.pseudos.animated = function(e) {
return C.grep(C.timers, function(t) {
return e === t.elem;
}).length;
}, C.offset = {
setOffset: function(e, t, n) {
var r, o, i, a, s, u, c, l = C.css(e, "position"), f = C(e), p = {};
"static" === l && (e.style.position = "relative"), s = f.offset(), i = C.css(e, "top"), 
u = C.css(e, "left"), (c = ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, 
o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), b(t) && (t = t.call(e, n, C.extend({}, s))), 
null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), 
"using" in t ? t.using.call(e, p) : f.css(p);
}
}, C.fn.extend({
offset: function(e) {
if (arguments.length) return void 0 === e ? this : this.each(function(t) {
C.offset.setOffset(this, e, t);
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
var e, t, n, r = this[0], o = {
top: 0,
left: 0
};
if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect(); else {
for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); ) e = e.parentNode;
e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), 
o.left += C.css(e, "borderLeftWidth", !0));
}
return {
top: t.top - o.top - C.css(r, "marginTop", !0),
left: t.left - o.left - C.css(r, "marginLeft", !0)
};
}
},
offsetParent: function() {
return this.map(function() {
for (var e = this.offsetParent; e && "static" === C.css(e, "position"); ) e = e.offsetParent;
return e || je;
});
}
}), C.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, t) {
var n = "pageYOffset" === t;
C.fn[e] = function(r) {
return V(this, function(e, r, o) {
var i;
if (x(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
}, e, r, arguments.length);
};
}), C.each([ "top", "left" ], function(e, t) {
C.cssHooks[t] = ze(v.pixelPosition, function(e, n) {
if (n) return n = Qe(e, t), Be.test(n) ? C(e).position()[t] + "px" : n;
});
}), C.each({
Height: "height",
Width: "width"
}, function(e, t) {
C.each({
padding: "inner" + e,
content: t,
"": "outer" + e
}, function(n, r) {
C.fn[r] = function(o, i) {
var a = arguments.length && (n || "boolean" != typeof o), s = n || (!0 === o || !0 === i ? "margin" : "border");
return V(this, function(t, n, o) {
var i;
return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s);
}, t, a ? o : void 0, a);
};
});
}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
C.fn[t] = function(e, n) {
return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
};
}), C.fn.extend({
hover: function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
}
}), C.fn.extend({
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
}), C.proxy = function(e, t) {
var n, r, o;
if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = c.call(arguments, 2), 
(o = function() {
return e.apply(t || this, r.concat(c.call(arguments)));
}).guid = e.guid = e.guid || C.guid++, o;
}, C.holdReady = function(e) {
e ? C.readyWait++ : C.ready(!0);
}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = D, C.isFunction = b, 
C.isWindow = x, C.camelCase = K, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
var t = C.type(e);
return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
}, r = [], void 0 === (o = function() {
return C;
}.apply(t, r)) || (e.exports = o);
var tn = n.jQuery, nn = n.$;
return C.noConflict = function(e) {
return n.$ === C && (n.$ = nn), e && n.jQuery === C && (n.jQuery = tn), C;
}, i || (n.jQuery = n.$ = C), C;
});
}, function(e, t, n) {
"use strict";
function r(e, t) {
let n = o(e, t);
return Object.assign({
source: e,
scheme: "",
host: "",
path: "",
query: "",
fragment: ""
}, n);
}
function o(e, t) {
for (var n, r = "php", o = [ "source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment" ], i, a = [ new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "()", "(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?", "(?:\\/\\/\\/?)?", "((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)", "(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))", "(?:\\?([^#]*))?(?:#(.*))?)" ].join("")) ][0].exec(e), s = {}, u = 14; u--; ) a[u] && (s[o[u]] = a[u]);
if (t) return s[t.replace("PHP_URL_", "").toLowerCase()];
if (0) {
let e = "queryKey", t = /(?:^|&)([^&=]*)=?([^&]*)/g;
s[e] = {}, (n = s[o[12]] || "").replace(t, function(t, n, r) {
n && (s[e][n] = r);
});
}
return delete s.source, s;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.parse_url2 = r, t.parse_url = o, t.default = o;
}, function(e, t, n) {
"use strict";
const r = n(14);
e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(15), o = new Map();
function i(e, t, n = []) {
"string" == typeof e && (e = {
label: e
});
const i = a(e), s = async function() {
let r;
console.time(i), console.group(i);
try {
(r = await t(e, ...n)) && !0 !== r && console.info(i, e.fn_name || t.name, [ r.length, r ]);
} catch (e) {
console.error(e);
}
console.groupEnd(i), console.timeEnd(i);
};
return "function" == typeof r.default.registerMenuCommand ? r.default.registerMenuCommand(i, s) : console.warn("GM_registerMenuCommand not a function."), 
o.set(i, s), i;
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
let r = o.get(n);
return r ? await r(...t) : r;
}
function u() {
let e = [];
return o.forEach(function(t, n, r) {
e.push(n);
}), e;
}
t.registerMenuCommand = i, t.getLabel = a, t.callMenuCommand = s, t.listMenuCommand = u;
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
"./esunbank/": 2,
"./esunbank/esunbank/ebank": 6,
"./esunbank/esunbank/ebank.js": 6,
"./esunbank/index": 2,
"./esunbank/index.js": 2,
"./esunbank/index.user": 3,
"./esunbank/index.user.js": 3,
"./esunbank/lib/metadata": 10,
"./esunbank/lib/metadata.js": 10
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function e() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 17;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(19), o = r.Minimatch;
function i(e, t, n = {}) {
n = a(n);
let o = !1;
for (let i of t) if (i = i.replace(/\*/g, "**"), o = r(e, i, n)) break;
return o;
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
return !(t.metadata.nomatch && t.metadata.nomatch.length && i(e, t.metadata.nomatch, n)) && !(t.metadata.exclude && t.metadata.exclude.length && i(e, t.metadata.exclude, n)) && (t.metadata.include && t.metadata.include.length && (r = i(e, t.metadata.include, n)), 
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
t.match = i, t.option = a, t.auto = s, t.matchChrome = u;
}, function(e, t, n) {
e.exports = m, m.Minimatch = y;
var r = {
sep: "/"
};
try {
r = n(20);
} catch (e) {}
var o = m.GLOBSTAR = y.GLOBSTAR = {}, i = n(22), a = {
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
}, s = "[^/]", u = s + "*?", c = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", l = "(?:(?!(?:\\/|^)\\.).)*?", f = p("().*{}+?[]^$\\!");
function p(e) {
return e.split("").reduce(function(e, t) {
return e[t] = !0, e;
}, {});
}
var d = /\/+/;
function h(e, t) {
return t = t || {}, function(n, r, o) {
return m(n, e, t);
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
function m(e, t, n) {
if ("string" != typeof t) throw new TypeError("glob pattern string required");
return n || (n = {}), !(!n.nocomment && "#" === t.charAt(0)) && ("" === t.trim() ? "" === e : new y(t, n).match(e));
}
function y(e, t) {
if (!(this instanceof y)) return new y(e, t);
if ("string" != typeof e) throw new TypeError("glob pattern string required");
t || (t = {}), e = e.trim(), "/" !== r.sep && (e = e.split(r.sep).join("/")), this.options = t, 
this.set = [], this.pattern = e, this.regexp = null, this.negate = !1, this.comment = !1, 
this.empty = !1, this.make();
}
function v() {
if (!this._made) {
var e = this.pattern, t = this.options;
if (t.nocomment || "#" !== e.charAt(0)) if (e) {
this.parseNegate();
var n = this.globSet = this.braceExpand();
t.debug && (this.debug = console.error), this.debug(this.pattern, n), n = this.globParts = n.map(function(e) {
return e.split(d);
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
for (var o = 0, i = e.length; o < i && "!" === e.charAt(o); o++) t = !t, r++;
r && (this.pattern = e.substr(r)), this.negate = t;
}
}
function x(e, t) {
if (t || (t = this instanceof y ? this.options : {}), void 0 === (e = void 0 === e ? this.pattern : e)) throw new TypeError("undefined pattern");
return t.nobrace || !e.match(/\{.*\}/) ? [ e ] : i(e);
}
m.filter = h, m.defaults = function(e) {
if (!e || !Object.keys(e).length) return m;
var t = m, n = function n(r, o, i) {
return t.minimatch(r, o, g(e, i));
};
return n.Minimatch = function n(r, o) {
return new t.Minimatch(r, g(e, o));
}, n;
}, y.defaults = function(e) {
return e && Object.keys(e).length ? m.defaults(e).Minimatch : y;
}, y.prototype.debug = function() {}, y.prototype.make = v, y.prototype.parseNegate = b, 
m.braceExpand = function(e, t) {
return x(e, t);
}, y.prototype.braceExpand = x, y.prototype.parse = _;
var w = {};
function _(e, t) {
if (e.length > 65536) throw new TypeError("pattern is too long");
var n = this.options;
if (!n.noglobstar && "**" === e) return o;
if ("" === e) return "";
var r = "", i = !!n.nocase, c = !1, l = [], p = [], d, h = !1, g = -1, m = -1, y = "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", v = this;
function b() {
if (d) {
switch (d) {
case "*":
r += u, i = !0;
break;

case "?":
r += s, i = !0;
break;

default:
r += "\\" + d;
break;
}
v.debug("clearStateChar %j %j", d, r), d = !1;
}
}
for (var x = 0, _ = e.length, T; x < _ && (T = e.charAt(x)); x++) if (this.debug("%s\t%s %s %j", e, x, r, T), 
c && f[T]) r += "\\" + T, c = !1; else switch (T) {
case "/":
return !1;

case "\\":
b(), c = !0;
continue;

case "?":
case "*":
case "+":
case "@":
case "!":
if (this.debug("%s\t%s %s %j <-- stateChar", e, x, r, T), h) {
this.debug("  in class"), "!" === T && x === m + 1 && (T = "^"), r += T;
continue;
}
v.debug("call clearStateChar %j", d), b(), d = T, n.noext && b();
continue;

case "(":
if (h) {
r += "(";
continue;
}
if (!d) {
r += "\\(";
continue;
}
l.push({
type: d,
start: x - 1,
reStart: r.length,
open: a[d].open,
close: a[d].close
}), r += "!" === d ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", d, r), d = !1;
continue;

case ")":
if (h || !l.length) {
r += "\\)";
continue;
}
b(), i = !0;
var j = l.pop();
r += j.close, "!" === j.type && p.push(j), j.reEnd = r.length;
continue;

case "|":
if (h || !l.length || c) {
r += "\\|", c = !1;
continue;
}
b(), r += "|";
continue;

case "[":
if (b(), h) {
r += "\\" + T;
continue;
}
h = !0, m = x, g = r.length, r += T;
continue;

case "]":
if (x === m + 1 || !h) {
r += "\\" + T, c = !1;
continue;
}
if (h) {
var k = e.substring(m + 1, x);
try {
RegExp("[" + k + "]");
} catch (e) {
var A = this.parse(k, w);
r = r.substr(0, g) + "\\[" + A[0] + "\\]", i = i || A[1], h = !1;
continue;
}
}
i = !0, h = !1, r += T;
continue;

default:
b(), c ? c = !1 : !f[T] || "^" === T && h || (r += "\\"), r += T;
}
for (h && (k = e.substr(m + 1), A = this.parse(k, w), r = r.substr(0, g) + "\\[" + A[0], 
i = i || A[1]), j = l.pop(); j; j = l.pop()) {
var E = r.slice(j.reStart + j.open.length);
this.debug("setting tail", r, j), E = E.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
return n || (n = "\\"), t + t + n + "|";
}), this.debug("tail=%j\n   %s", E, E, j, r);
var M = "*" === j.type ? u : "?" === j.type ? s : "\\" + j.type;
i = !0, r = r.slice(0, j.reStart) + M + "\\(" + E;
}
b(), c && (r += "\\\\");
var S = !1;
switch (r.charAt(0)) {
case ".":
case "[":
case "(":
S = !0;
}
for (var N = p.length - 1; N > -1; N--) {
var D = p[N], $ = r.slice(0, D.reStart), q = r.slice(D.reStart, D.reEnd - 8), O = r.slice(D.reEnd - 8, D.reEnd), L = r.slice(D.reEnd);
O += L;
var G = $.split("(").length - 1, R = L;
for (x = 0; x < G; x++) R = R.replace(/\)[+*?]?/, "");
var H = "", P;
"" === (L = R) && t !== w && (H = "$"), r = $ + q + L + H + O;
}
if ("" !== r && i && (r = "(?=.)" + r), S && (r = y + r), t === w) return [ r, i ];
if (!i) return C(e);
var I = n.nocase ? "i" : "";
try {
var W = new RegExp("^" + r + "$", I);
} catch (e) {
return new RegExp("$.");
}
return W._glob = e, W._src = r, W;
}
function T() {
if (this.regexp || !1 === this.regexp) return this.regexp;
var e = this.set;
if (!e.length) return this.regexp = !1, this.regexp;
var t = this.options, n = t.noglobstar ? u : t.dot ? c : l, r = t.nocase ? "i" : "", i = e.map(function(e) {
return e.map(function(e) {
return e === o ? n : "string" == typeof e ? k(e) : e._src;
}).join("\\/");
}).join("|");
i = "^(?:" + i + ")$", this.negate && (i = "^(?!" + i + ").*$");
try {
this.regexp = new RegExp(i, r);
} catch (e) {
this.regexp = !1;
}
return this.regexp;
}
function j(e, t) {
if (this.debug("match", e, this.pattern), this.comment) return !1;
if (this.empty) return "" === e;
if ("/" === e && t) return !0;
var n = this.options;
"/" !== r.sep && (e = e.split(r.sep).join("/")), e = e.split(d), this.debug(this.pattern, "split", e);
var o = this.set, i, a;
for (this.debug(this.pattern, "set", o), a = e.length - 1; a >= 0 && !(i = e[a]); a--) ;
for (a = 0; a < o.length; a++) {
var s = o[a], u = e, c;
if (n.matchBase && 1 === s.length && (u = [ i ]), this.matchOne(u, s, t)) return !!n.flipNegate || !this.negate;
}
return !n.flipNegate && this.negate;
}
function C(e) {
return e.replace(/\\(.)/g, "$1");
}
function k(e) {
return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
m.makeRe = function(e, t) {
return new y(e, t || {}).makeRe();
}, y.prototype.makeRe = T, m.match = function(e, t, n) {
var r = new y(t, n = n || {});
return e = e.filter(function(e) {
return r.match(e);
}), r.options.nonull && !e.length && e.push(t), e;
}, y.prototype.match = j, y.prototype.matchOne = function(e, t, n) {
var r = this.options, i;
this.debug("matchOne", {
this: this,
file: e,
pattern: t
}), this.debug("matchOne", e.length, t.length);
for (var a = 0, s = 0, u = e.length, c = t.length; a < u && s < c; a++, s++) {
this.debug("matchOne loop");
var l = t[s], f = e[a], p;
if (this.debug(t, l, f), !1 === l) return !1;
if (l === o) {
this.debug("GLOBSTAR", [ t, l, f ]);
var d = a, h = s + 1;
if (h === c) {
for (this.debug("** at the end"); a < u; a++) if ("." === e[a] || ".." === e[a] || !r.dot && "." === e[a].charAt(0)) return !1;
return !0;
}
for (;d < u; ) {
var g = e[d];
if (this.debug("\nglobstar while", e, d, t, h, g), this.matchOne(e.slice(d), t.slice(h), n)) return this.debug("globstar found match!", d, u, g), 
!0;
if ("." === g || ".." === g || !r.dot && "." === g.charAt(0)) {
this.debug("dot detected!", e, d, t, h);
break;
}
this.debug("globstar swallow a segment, and continue"), d++;
}
return !(!n || (this.debug("\n>>> no match, partial?", e, d, t, h), d !== u));
}
if ("string" == typeof l ? (p = r.nocase ? f.toLowerCase() === l.toLowerCase() : f === l, 
this.debug("string match", l, f, p)) : (p = f.match(l), this.debug("pattern match", l, f, p)), 
!p) return !1;
}
if (a === u && s === c) return !0;
if (a === u) return n;
if (s === c) return a === u - 1 && "" === e[a];
throw new Error("wtf?");
};
}, function(e, t, n) {
(function(e) {
function n(e, t) {
for (var n = 0, r = e.length - 1; r >= 0; r--) {
var o = e[r];
"." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), 
n--);
}
if (t) for (;n--; n) e.unshift("..");
return e;
}
var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, o = function(e) {
return r.exec(e).slice(1);
};
function i(e, t) {
if (e.filter) return e.filter(t);
for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
return n;
}
t.resolve = function() {
for (var t = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
var a = o >= 0 ? arguments[o] : e.cwd();
if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
a && (t = a + "/" + t, r = "/" === a.charAt(0));
}
return (r ? "/" : "") + (t = n(i(t.split("/"), function(e) {
return !!e;
}), !r).join("/")) || ".";
}, t.normalize = function(e) {
var r = t.isAbsolute(e), o = "/" === a(e, -1);
return (e = n(i(e.split("/"), function(e) {
return !!e;
}), !r).join("/")) || r || (e = "."), e && o && (e += "/"), (r ? "/" : "") + e;
}, t.isAbsolute = function(e) {
return "/" === e.charAt(0);
}, t.join = function() {
var e = Array.prototype.slice.call(arguments, 0);
return t.normalize(i(e, function(e, t) {
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
for (var o = r(e.split("/")), i = r(n.split("/")), a = Math.min(o.length, i.length), s = a, u = 0; u < a; u++) if (o[u] !== i[u]) {
s = u;
break;
}
for (var c = [], u = s; u < o.length; u++) c.push("..");
return (c = c.concat(i.slice(s))).join("/");
}, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
var t = o(e), n = t[0], r = t[1];
return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
}, t.basename = function(e, t) {
var n = o(e)[2];
return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), 
n;
}, t.extname = function(e) {
return o(e)[3];
};
var a = "b" === "ab".substr(-1) ? function(e, t, n) {
return e.substr(t, n);
} : function(e, t, n) {
return t < 0 && (t = e.length + t), e.substr(t, n);
};
}).call(this, n(21));
}, function(e, t) {
var n = e.exports = {}, r, o;
function i() {
throw new Error("setTimeout has not been defined");
}
function a() {
throw new Error("clearTimeout has not been defined");
}
function s(e) {
if (r === setTimeout) return setTimeout(e, 0);
if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
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
if (o === clearTimeout) return clearTimeout(e);
if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
try {
return o(e);
} catch (t) {
try {
return o.call(null, e);
} catch (t) {
return o.call(this, e);
}
}
}
!function() {
try {
r = "function" == typeof setTimeout ? setTimeout : i;
} catch (e) {
r = i;
}
try {
o = "function" == typeof clearTimeout ? clearTimeout : a;
} catch (e) {
o = a;
}
}();
var c = [], l = !1, f, p = -1;
function d() {
l && f && (l = !1, f.length ? c = f.concat(c) : p = -1, c.length && h());
}
function h() {
if (!l) {
var e = s(d);
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
function m() {}
n.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
c.push(new g(e, t)), 1 !== c.length || l || s(h);
}, g.prototype.run = function() {
this.fun.apply(null, this.array);
}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", 
n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, 
n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, 
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
var r = n(23), o = n(24);
e.exports = h;
var i = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", s = "\0CLOSE" + Math.random() + "\0", u = "\0COMMA" + Math.random() + "\0", c = "\0PERIOD" + Math.random() + "\0";
function l(e) {
return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function f(e) {
return e.split("\\\\").join(i).split("\\{").join(a).split("\\}").join(s).split("\\,").join(u).split("\\.").join(c);
}
function p(e) {
return e.split(i).join("\\").split(a).join("{").split(s).join("}").split(u).join(",").split(c).join(".");
}
function d(e) {
if (!e) return [ "" ];
var t = [], n = o("{", "}", e);
if (!n) return e.split(",");
var r = n.pre, i = n.body, a = n.post, s = r.split(",");
s[s.length - 1] += "{" + i + "}";
var u = d(a);
return a.length && (s[s.length - 1] += u.shift(), s.push.apply(s, u)), t.push.apply(t, s), 
t;
}
function h(e) {
return e ? ("{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2)), x(f(e), !0).map(p)) : [];
}
function g(e) {
return e;
}
function m(e) {
return "{" + e + "}";
}
function y(e) {
return /^-?0\d/.test(e);
}
function v(e, t) {
return e <= t;
}
function b(e, t) {
return e >= t;
}
function x(e, t) {
var n = [], i = o("{", "}", e);
if (!i || /\$$/.test(i.pre)) return [ e ];
var a = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body), u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body), c = a || u, f = i.body.indexOf(",") >= 0, p, h;
if (!c && !f) return i.post.match(/,.*\}/) ? x(e = i.pre + "{" + i.body + s + i.post) : [ e ];
if (c) p = i.body.split(/\.\./); else if (1 === (p = d(i.body)).length && 1 === (p = x(p[0], !1).map(m)).length) return (h = i.post.length ? x(i.post, !1) : [ "" ]).map(function(e) {
return i.pre + p[0] + e;
});
var g = i.pre, h = i.post.length ? x(i.post, !1) : [ "" ], w;
if (c) {
var _ = l(p[0]), T = l(p[1]), j = Math.max(p[0].length, p[1].length), C = 3 == p.length ? Math.abs(l(p[2])) : 1, k = v, A;
T < _ && (C *= -1, k = b);
var E = p.some(y);
w = [];
for (var M = _; k(M, T); M += C) {
var S;
if (u) "\\" === (S = String.fromCharCode(M)) && (S = ""); else if (S = String(M), 
E) {
var N = j - S.length;
if (N > 0) {
var D = new Array(N + 1).join("0");
S = M < 0 ? "-" + D + S.slice(1) : D + S;
}
}
w.push(S);
}
} else w = r(p, function(e) {
return x(e, !1);
});
for (var $ = 0; $ < w.length; $++) for (var q = 0; q < h.length; q++) {
var O = g + w[$] + h[q];
(!t || c || O) && n.push(O);
}
return n;
}
}, function(e, t) {
e.exports = function(e, t) {
for (var r = [], o = 0; o < e.length; o++) {
var i = t(e[o], o);
n(i) ? r.push.apply(r, i) : r.push(i);
}
return r;
};
var n = Array.isArray || function(e) {
return "[object Array]" === Object.prototype.toString.call(e);
};
}, function(e, t, n) {
"use strict";
function r(e, t, n) {
e instanceof RegExp && (e = o(e, n)), t instanceof RegExp && (t = o(t, n));
var r = i(e, t, n);
return r && {
start: r[0],
end: r[1],
pre: n.slice(0, r[0]),
body: n.slice(r[0] + e.length, r[1]),
post: n.slice(r[1] + t.length)
};
}
function o(e, t) {
var n = t.match(e);
return n ? n[0] : null;
}
function i(e, t, n) {
var r, o, i, a, s, u = n.indexOf(e), c = n.indexOf(t, u + 1), l = u;
if (u >= 0 && c > 0) {
for (r = [], i = n.length; l >= 0 && !s; ) l == u ? (r.push(l), u = n.indexOf(e, l + 1)) : 1 == r.length ? s = [ r.pop(), c ] : ((o = r.pop()) < i && (i = o, 
a = c), c = n.indexOf(t, l + 1)), l = u < c && u >= 0 ? u : c;
r.length && (s = [ i, a ]);
}
return s;
}
e.exports = r, r.range = i;
}, function(e, t, n) {
(function(t) {
e.exports = function e(n, r, o) {
if (Array.isArray(n)) {
let e = t();
t.each(n, function(t, n) {
e = e.add(n);
}), n = e;
}
return n = (n = r ? t(n, r) : t(n)).filter("a[href]").not('[href^="javascript:"], [href^="#"], [href=""]');
};
}).call(this, n(0).default);
} ]);