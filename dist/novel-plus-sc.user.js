// ==UserScript==
// @name		novel-plus-sc
// @name:en		novel-plus-sc
// @name:zh		novel-plus-sc
// @namespace	bluelovers
// @author		bluelovers
//
// @description		部分小說網站重新排版、修正文字，改變閱讀樣式
// @description:en	部分小說網站重新排版、修正文字，改變閱讀樣式
// @description:zh	部分小說網站重新排版、修正文字，改變閱讀樣式
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
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/novel-plus-sc.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/novel-plus-sc.user.js
//
// @include		http*://q.dmzj.com/*
//
// @match		*://tieba.baidu.com/*
// @match		*://q.dmzj.com/*
// @match		*://home.gamer.com.tw/creationDetail.php*
// @match		*://www.lightnovel.cn/*
// @match		*://book.sfacg.com/Novel/*
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
}, n.p = "", n(n.s = 7);
}([ function(e, t, n) {
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
const o = n(47), u = o.noConflict(!0);
t.jQuery = u, t.$ = u, window.self.$ = window.self.jQuery = u, t.default = u, console["groupCollapsed" in console ? "groupCollapsed" : "group"]("after");
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
console.info("jQuery", u, u && u.fn && u.fn.jquery)) : (console.info(`${e}.$`, n.$, n.$ && n.$.fn && n.$.fn.jquery), 
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
e.exports.id = "novel-plus-sc", e.exports.version = "", e.exports.name = "novel-plus-sc", 
e.exports.name_en = "novel-plus-sc", e.exports.name_ja = "novel-plus-sc", e.exports.desc = "部分小說網站重新排版、修正文字，改變閱讀樣式", 
e.exports.desc_en = "部分小說網站重新排版、修正文字，改變閱讀樣式", e.exports.desc_ja = "部分小說網站重新排版、修正文字，改變閱讀樣式", 
e.exports.namespace = "", e.exports.author = "", e.exports.icon = "", e.exports.list = [ "site/baidu/tieba", "site/dmzj", "site/gamer/home", "site/lightnovel/discuz", "site/sfacg/book" ], 
e.exports.list_disable = [ "site/syosetu" ], e.exports._lib = (() => {
n(8), n(9), n(11), n(12), n(13);
}), e.exports.metadata = {}, e.exports.metadata.include = [ "http*://q.dmzj.com/*" ], 
e.exports.metadata.match = [ "*://tieba.baidu.com/*", "*://q.dmzj.com/*", "*://home.gamer.com.tw/creationDetail.php*", "*://www.lightnovel.cn/*", "*://book.sfacg.com/Novel/*" ], 
e.exports.metadata.exclude = [], e.exports.metadata.grant = [ "GM.deleteValue", "GM.getValue", "GM.listValues", "GM.registerMenuCommand", "GM.setValue", "GM.unregisterMenuCommand", "GM.xmlhttpRequest", "GM_deleteValue", "GM_getValue", "GM_listValues", "GM_registerMenuCommand", "GM_setValue", "GM_unregisterMenuCommand", "GM_xmlhttpRequest", "unsafeWindow" ], 
e.exports.list_script = [], e.exports.current = [], e.exports.default = e.exports;
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
const u = n(23);
function a(t, n) {
return Array.isArray(t) && (t = t.join("")), "string" == typeof n && (n = e(n)), 
"object" == typeof n && n.length && "object" == typeof n[0] && (n = n[0]), u.GM_addStyle(t.toString(), n);
}
function s(t, n) {
return "object" == typeof t && t.webfont && (t = t.webfont), e(`<link rel="stylesheet" href="${t.toString()}"/>`).appendTo(n || e("header, body").eq(0));
}
function l(e, ...t) {
return console.info(`%c[${r.userScript.id}][debug]`, "color: #4B90C2;", e, ...t);
}
function c(e, ...t) {
return console.error(`%c[${r.userScript.id}][error]`, "color: red;", e, ...t);
}
function f(e, ...t) {
return console.info(`%c[${r.userScript.id}][info]`, "color: #ccc;", e, ...t);
}
function p(e, ...t) {
return console.log(e, ...t);
}
function d(e) {
let t = window.open(e, "_blank");
return setTimeout(function() {
window.focus();
}, 300), t;
}
t.GM_addStyle = a, t.addStylesheet = s, t.debug = l, t.error = c, t.info = f, t.log = p, 
t.openInTabBackground = d, t.default = t, o(n(23), t);
}).call(this, n(0).default, n(1));
}, function(e, t, n) {
"use strict";
var r;
!function(e) {
const t = n(43);
function r(...e) {
return e.length > 1 ? i(e) : i(e[0]);
}
function i(e, t = {}) {
if (!Array.isArray(e)) throw new TypeError(`Expected an Array but got ${typeof e}.`);
const n = a(t);
if (t.overwrite) {
let t = e.length;
for (;t--; ) {
let r;
n(e[t], t, e) || e.splice(t, 1);
}
return e;
}
return e.filter(n);
}
function o(...e) {
return e.length > 1 ? u(e) : u(e[0]);
}
function u(e, t = {}) {
let n;
return i(e, Object.assign({}, t, {
overwrite: !0
}));
}
function a(e = {}) {
const t = e.checker || s, n = e.filter || null, r = (e, r, i) => {
let o;
return i.findIndex(n => t(n, e, i, i)) == r && (!n || n(e));
};
return r;
}
function s(e, n, r, i) {
return t(e, n);
}
e.lazy_unique = r, e.array_unique = i, e.lazy_unique_overwrite = o, e.array_unique_overwrite = u, 
e.defaultFilter = a, e.defaultChecker = s;
}(r || (r = {})), r = r.lazy_unique = Object.assign(r.lazy_unique, r, t, {
equals: n(43),
default: r.lazy_unique
}), t.default = r, Object.defineProperty(r, "__esModule", {
value: !0
}), Object.keys(r).forEach(e => {
try {
r[e] = Object.freeze(r[e]);
} catch (e) {}
}), r = Object.freeze(r), e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.matchChrome = t.auto = t.option = t.match = void 0;
const r = n(55), i = r.Minimatch;
function o(e, t, n = {}) {
n = u(n);
let i = !1;
for (let o of t) if (o = o.replace(/\*/g, "**"), i = r(e, o, n)) break;
return i;
}
function u(e) {
return Object.assign({}, {
nocase: !0,
dot: !0
}, e);
}
function a(e, t, n = {}) {
n = u(n);
let r = !1;
return !(t.metadata.nomatch && t.metadata.nomatch.length && o(e, t.metadata.nomatch, n)) && !(t.metadata.exclude && t.metadata.exclude.length && o(e, t.metadata.exclude, n)) && (t.metadata.include && t.metadata.include.length && (r = o(e, t.metadata.include, n)), 
!r && t.metadata.match && t.metadata.match.length && (r = !!s(e, t.metadata.match)), 
r);
}
function s(e, t, n) {
if (Array.isArray(t)) {
for (let r of t) {
let t = s(e, r, n);
if (t) return t;
}
return null;
}
let r = t.match(/^((?:[^\/]+):\/\/)?([^\/]+)?(\/.*)?$/);
if (r) {
let t = new RegExp("^(?:(https?|file|ftp):\\/\\/)?(" + (l(r[2]) ? "" : r[2]).replace(/\*/g, "[^\\/]+").replace(/\./g, "\\.") + ")(" + (l(r[3]) ? "/" : r[3]).replace(/^(\/)$/, "$1?").replace(/^(\/)(\*)$/, "(?:$1?|$1$2)").replace(/\*/g, ".*") + ")" + (n ? "(?:\\?.*)?" : "") + "(?:#.*)?$");
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
function l(e) {
return void 0 === e;
}
t.match = o, t.option = u, t.auto = a, t.matchChrome = s;
}, function(e, t, n) {
"use strict";
function r(e) {
return t.webfont[e] ? t.webfont[e].reduce(function(e, t) {
return e.push("string" == typeof t ? t : t.name), e;
}, []).join("") : n(e);
function n(e) {
return t.font[e].name;
}
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.getFontName = t.webfont = t.font = void 0, t.font = {
NotoSansSC: {
name: "Noto Sans SC",
webfont: "//fonts.googleapis.com/earlyaccess/notosanssc.css"
},
NotoSansTC: {
name: "Noto Sans TC",
webfont: "//fonts.googleapis.com/earlyaccess/notosanstc.css"
},
NotoSansJP: {
name: "Noto Sans JP",
webfont: "//fonts.googleapis.com/earlyaccess/notosansjp.css"
},
cwtexyen: {
name: "cwtexyen",
webfont: "//fonts.googleapis.com/earlyaccess/cwtexyen.css"
}
}, t.webfont = {
NotoSansCJKSC: [ "Noto Sans CJK SC", t.font.NotoSansSC, t.font.NotoSansTC, t.font.NotoSansJP ],
NotoSansCJKTC: [ "Noto Sans CJK TC", t.font.NotoSansTC, t.font.NotoSansSC, t.font.NotoSansJP ],
NotoSansCJKJP: [ "Noto Sans CJK JP", t.font.NotoSansJP, t.font.NotoSansSC, t.font.NotoSansTC ]
}, t.getFontName = r, t.default = t.font;
}, function(e, t, n) {
"use strict";
(function(r, i, o) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const u = n(22), a = n(2);
function s() {
const t = n(24);
t.registerMenuCommand({
id: e.exports.name,
key: "redo"
}, async r => {
let u = n(122)(`./${e.exports.id}`);
if (u.current && u.current.length) {
const e = t.getLabel(r);
let n = i(), a = null, s = u.current;
{
let t = [];
for (let r of s) if (!t.includes(r.name)) {
t.push(r.name);
for (let t of [ "adblock" ]) if ("function" == typeof r.lib[t]) {
let i = await r.lib[t](o._url_obj, n);
i && !0 !== i && ("clearly" == t && i.length && (n = i), console.info(e, r.name, t, [ i.length, i ], [ n.length, n ]));
}
}
}
console.info(e, [ n.length, n ]), n.remove();
}
});
}
e.exports.id = a.id, e.exports.name = a.name, e.exports.indexScript = a, u.run(e.exports.id, e.exports, r, function(e, t, n, r, i, o) {
u.init(e, t, n, r, i, o), s();
});
}).call(this, n(0).default, n(0).default, n(1));
}, function(e, t, n) {
"use strict";
(function(t, r, i) {
let o = {
metadata: {
include: [],
match: [ "*://tieba.baidu.com/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let i;
return !!(i = n(5).auto(r.source, e.exports));
},
async main(o = t._url_obj) {
if (r.addStylesheet(n(6).font.NotoSansSC), r.addStylesheet(n(6).font.NotoSansTC), 
r.addStylesheet(n(6).font.NotoSansJP), r.GM_addStyle([ ".d_post_content, .core_title_txt, .threadlist_title, .deepread-wrap { \n\t\t\t\tfont-family: Consolas, Noto Sans CJK JP, Noto Sans CJK SC, Noto Sans CJK TC, Noto Sans JP, Noto Sans SC, Noto Sans TC, Noto Sans CJK, Microsoft Yahei UI, sans-serif; \n\t\t\t\ttext-shadow: 0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75); \n\t\t\t\t}", ".d_post_content { line-height: 1.45em; }", ".d_post_content { color: #131d24; }" ]), 
i(".p_postlist").length) {
r.GM_addStyle([ ".l_post_bright, .skin_normal .wrap1, .pb_content { background: #e6d7bd; }", ".d_post_content_main { background: transparent; }", ".core_title_wrap_bright { background: #fff9; }", ".tbui_aside_float_bar { opacity: 0.5; } \n\t\t\t\t\t.tbui_aside_float_bar:hover { opacity: 0.8; }", "@media only screen and (max-width: 1200px)\n\t\t\t\t\t{\n\t\t\t\t\t\n\t\t\t\t\t.right_section { display: none; }\n\t\t\t\t\t.left_section { float: none; margin: auto; }\n\t\t\t\t\t\n\t\t\t\t\t.search_bright .search_ipt, .l_container, .content, .pb_content, .thread_theme_5, .pb_footer, .pb_footer .p_thread, .tb_rich_poster_container, .search_bright .search_form, .nav_list { width: auto; }\n\t\t\t\t\t\n\t\t\t\t\t}", "@media only screen and (max-width: 800px)\n\t\t\t\t\t{\n\t\t\t\t\t\n\t\t\t\t\t.core_title_wrap_bright { width: 100%; }\n\t\t\t\t\t\n\t\t\t\t\t.d_post_content_main { padding-left: 0px; }\n\t\t\t\t\t.d_author, .d_author_anonym { display: none; }\n\t\t\t\t\t.p_content { padding-right: 0px; }\n\t\t\t\t\t\n\t\t\t\t\t.d_post_content_main { float: none;margin: auto; }\n\t\t\t\t\t\n\t\t\t\t\t}" ]);
const {debounce: t} = n(25);
let u = !1;
i(".pb_footer, .l_thread_info").on("DOMNodeInserted", t(300, function() {
u = !0, e.exports.adblock(o);
})), setTimeout(function() {
u || (u = !0, e.exports.adblock(o));
}, 500);
}
},
async adblock(e = t._url_obj) {
let r = n(26).novelText;
async function o(...e) {
let t = i(this), n = t.clone(), o = n.find("br"), a = n.html();
const s = a;
if (o.length >= 10 || 0 == o.length && a.match(/\n/)) {
if (!(a = u(a)).match(/<br>/) && a.match(/\n/) && (a = a.replace(/[ \t　\r]+(\n)/gi, "$1").replace(/\n/g, "<br>"), 
n.html(a), o = n.find("br")), 1) {
if (!(a = a.replace(/\r\n|\r|\n/g, "").replace(/<br>/gi, "\n").replace(/[ 　\t]+\n/g, "\n").replace(/[\s　]+$/g, "").replace(/^ *[\n\t]+/g, "").replace(/\n{4,}/g, "\n\n\n\n")).match(/[^\n]\n[^\n]/g)) {
let e = 1;
/\n\n\n/g.test(a) ? (/[^\n]\n\n[^\n]/g.test(a) || (a = a.replace(/(\n{2})+/g, function(e) {
let t = e.replace("\n\n", "");
return -1 == e.indexOf("\n") && (t = e.replace("\n\n", "\n")), t;
})), a = a.replace(/\n{3,}/g, "\n\n\n").replace(/\n{2}/g, "\n")) : a = a.replace(/\n{3,}/g, "\n\n\n").replace(/\n\n/g, "\n");
}
a = (a = a.toString().replace(/^ +/g, "").replace(/\s+$/, "").replace(/([^\n][^\n「」【】《》“”『』（）](?:[！？?!。]*)?)\n((?:[—]+)?[「」“”【】《》（）『』])/gu, "$1\n\n$2").replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n([^\n「」“”【】《》（）『』。])/gu, "$1\n\n$2").replace(/([^\n][^\n「」【】《》“”『』（）](?:[！？?!。]*)?)\n((?:[—]+)?[「」“”【】《》（）『』])/gu, "$1\n\n$2").replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n([^\n「」“”【】《》（）『』。])/gu, "$1\n\n$2").replace(/(）(?:[！？?!。]*)?)\n([「」【】《》『』“”])/gu, "$1\n\n$2").replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n((?:[「」“”【】《》（）『』])(?:[^\n]+)([^「」【】《》“”『』（）―](?:[！？?!。]*)?)\n)/gu, "$1\n$2\n").replace(/(\n(?:[^　\n][^\n]+))\n([　])/g, "$1\n\n$2").replace(/([^\n])(\n)(fin)(\n|$)/gi, "$1$2\n$3$4")).replace(/^ *\n*|[\s　]+$/g, "").replace(/(\n){4,}/g, "\n\n\n\n").replace(/(\n){3}/g, "\n\n").replace(/\n/g, "<br>"), 
n.html(a), o = n.find("br");
}
} else a = a.replace(/^\s+/, "").replace(/\s+$/, ""), n.html(a);
n.find("*").addBack().not(".core_title_txt a").contents().filter(function() {
return 3 === this.nodeType && this.nodeValue && this.nodeValue.replace(/[\s\r\n　]+/gi, "");
}).each(function(e, t) {
let n = i(this), o = r.replace(n.text(), {
words: !0
});
this.nodeValue != o && (this.nodeValue = o);
}), n.html(function(e, t) {
let n = "";
return i(this).is(".d_post_content") && !i(this).find("._remove_when_join").length && (n = "<div class='_remove_when_join' style='visibility: hidden'><br/></div>"), 
a = t.replace(/^ *\n/g, "").replace(/\s+$/g, "") + n;
}), a = n.html(), t.html(a), n.remove();
}
i(".d_post_content").add("h3.core_title_txt").filter(":visible, :not(:has(._remove_when_join)), :not(.p_content_nameplate .p_content_nameplate:has(.ad_bottom_view))").each(function(e, ...t) {
const n = this;
setTimeout(function() {
o.call(n, e, ...t);
}, 100 * e);
});
},
clearly(e = t._url_obj, n = null) {
let r = i(n);
return r = r.add([].join());
}
};
function u(e) {
return e.toString().replace(/^\s+/, "").replace(/<br(?:\s+\/?|\s*\/)>/gi, "<br>").replace(/<br>\s*<br>/gi, "<br><br>").replace(/<br>\s*<br>/gi, "<br><br>").replace(/\s*(?:\<br\>)+\s*$/gi, "").replace(/\s*(?:\<br\>)+\s*$/gi, "");
}
e.exports = o;
}).call(this, n(1), n(3), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r, i) {
let o = {
metadata: {
include: [ "http*://q.dmzj.com/*" ],
match: [ "*://q.dmzj.com/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let i;
return !!(i = n(5).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const o = n(10);
o([ "#sort_div_p a" ].join(",")).prop("target", "_blank"), r.GM_addStyle([]);
let u = 22, a = 28, s = "gothic", l = [ '"メイリオ"', '"IPAexゴシック"', '"IPAゴシック"', '"ＭＳ ゴシック"', '"SimSun"', "monospace" ].join(", "), c = [ '"IPAex明朝"', '"IPA明朝"', '"ＭＳ 明朝"', '"SimSun"', "serif" ].join(", "), f = "20px", p = "normal", d = "1.1em", h = "50px", g = "1em", y = "#2F4F4F", m = "#D3D3D3", v = !0, b = !0, _ = {
line: 31,
char: 23,
fontSize: 14,
fontFamily: "Consolas, Noto Sans SC, Microsoft Yahei UI, sans-serif",
lineHeight: null
};
_.lineHeight = Math.ceil(1.25 * _.fontSize);
let w = i("#chapter_contents_first");
if (w.length) {
r.addStylesheet(n(6).font.NotoSansSC), r.GM_addStyle([ `.txt .con .tit, #full_contents {\n\t\t\t\tfont-size: ${_.fontSize}px;\n\t\t\t\tfont-family: ${_.fontFamily};\n\t\t\t\tline-height: ${_.lineHeight}px;\n\t\t\t\ttext-shadow: 0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75);\n\t\t\t\t}`, `#full_contents { \n\t\t\t\t\n\t\t\t\twidth: ${_.fontSize * _.char}px;\n\t\t\t\theight: ${_.lineHeight * _.line}px;\n\t\t\t\toverflow: hidden;\n\t\t\t\t\n\t\t\t\ttext-align: left;\n\t\t\t\tmargin: 0; padding: 0; \n\t\t\t\tmargin: auto;\n\t\t\t\t/*\n\t\t\t\ttext-shadow: 0 0.5px 0 rgba(255, 255, 255, 0.8), 0 0 1px rgba(0, 0, 0, 0.75);\n\t\t\t\t*/\n\t\t\t\t\n\t\t\t\t}`, "#full_contents * { margin: 0; padding: 0; font-family: unset; }", `#full_contents p, #full_contents br { line-height: ${_.lineHeight}px; }`, "#full_contents p:before { content: ''; display: inline-block; }", "#full_contents_wrap { padding: 0; margin: auto; text-align: center; padding: 10px; }", "body {\n\t\t\t\t\n\t\t\t\t-webkit-transition: background-color 500ms linear;\n\t\t\t\t-moz-transition: background-color 500ms linear;\n\t\t\t\t-o-transition: background-color 500ms linear;\n\t\t\t\t-ms-transition: background-color 500ms linear;\n\t\t\t\ttransition: background-color 500ms linear;\n\t\t\t\t\n\t\t\t\t}", "body, body.light_on { background-color: #e6d7bd !important; color: #131d24; }", "body.light_off { background-color: #4f535b !important; color: rgb(221, 221, 221); }", ".vertical-container, .divimage {\n  display: -webkit-flex;\n  display:         flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}", ".divimage { width: 100%; height: 100%; }", "#page_contents img, .divimage, .divimage * { margin: 0 !important; padding: 0 !important; border-width: 0; outline-width: 0; }" ]);
let e = unsafeWindow.g_chapter_pages_count, t = i('<div id="full_contents"/>');
if (e > 1) {
n(117).ajaxSetup();
let e = [];
e.push(Promise.resolve(w.html()));
for (let t in unsafeWindow.g_chapter_pages_url) {
let n = unsafeWindow.g_chapter_pages_url[t];
if (!n) continue;
let r = i.ajax({
url: n,
method: "GET",
dataType: "html"
}).promise();
e.push(r);
}
await Promise.all(e).then(e => e.join("")).then(e => (t.html(e), e));
} else t.html(w.html());
let o = t.find("img");
if (o.length && (w.find("img").add(o).each(function(e, t) {
let n = i(t);
n.parents(".divimage").length || (n.parent().is("a") ? n.parent().wrap('<div class="divimage"></div>') : n.wrap(`<div class="divimage"><a href="${n.attr("src")}" target="_blank"/></div>`));
}), i(".divimage a").attr("target", "_blank")), !t.text().replace(/[\s\r\n　]+/gi, "")) return void (t.find("img").length > 0 && w.html(t.html()));
t.insertBefore(w).wrap('<div id="full_contents_wrap"/>');
{
let e = n(26).novelText, r = t.find("*");
t.add(r).contents().filter(function() {
return 3 === this.nodeType && this.nodeValue && this.nodeValue.replace(/[\s\r\n　]+/gi, "");
}).each(function(t, n) {
let r = i(this), o = e.replace(r.text(), {
words: !0
});
this.nodeValue != o && (this.nodeValue = o);
}), 1 == r.length ? (console.log("將純文字內容修正為 HTML"), t.children().html(function(t, n) {
return e.clearLF(n).replace(/\n/g, "<br/>");
})) : (t.find("p").html(function(e, t) {
return t.replace(/^\n(.)/g, "$1").replace(/^\s*(&nbsp;)+\s*/g, "");
}), t.html(function(e, t) {
return t.replace(/<\/p>(\s*<p>\s*<\/p>\s*)+<p>/g, "</p><p></p><p>");
})), console.debug(e._data_.words, e._cache_);
}
i("#full_contents_wrap, #full_contents").siblings().not(".tit, h1, #full_contents_wrap, #full_contents").hide();
const u = n(118);
let a = i("<div/>").css(u.page).css(u.bg_dark).css(u.bg_dark_border).css(u.bg_dark_text).css(u.page_position).appendTo("body"), s = 0, l = 0, c = _.lineHeight * _.line, f = i("<div/>");
s = Math.ceil(t[0].scrollHeight / c);
let p = _.lineHeight * _.line * s - t[0].scrollHeight;
f.height(p), t.find(".divimage, img").length ? f.insertBefore(o.add(".divimage").eq(0)) : f.appendTo(t);
const {throttle: d} = n(25);
t.scrollTop(0).on("scroll.page", function(e) {
let t = i(this);
l >= s && (l = s - 1), l < 0 && (l = 0), a.text(`${l + 1} / ${s}`), i(window).triggerHandler("resize");
}).triggerHandler("scroll.page");
try {
let e = i("#light_a");
e.is(".off") && i("body").addClass("light_off"), e.on("click", function() {
e.is(".off") ? i("body").addClass("light_off") : i("body").removeClass("light_off");
});
} catch (e) {
console.log(e);
}
i(window).on("resize", d(100, function() {
a.offset({
top: t.offset().top + 50,
left: t.offset().left - a.outerWidth() - 10
});
})).on("keydown.page", n(119).packEvent(function(e) {
const r = n(120), i = n(121);
switch (e.which) {
case r("pageup"):
case r("left"):
i(e), l -= 1, t.scrollTop(l * c), t.triggerHandler("scroll.page");
break;

case r("pagedown"):
case r("right"):
i(e), l += 1, t.scrollTop(l * c), t.triggerHandler("scroll.page");
break;
}
})).triggerHandler("resize");
}
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = i(n);
return r = r.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(3), n(0).default);
}, function(e, t, n) {
(function(t) {
e.exports = function e(n, r, i) {
if (Array.isArray(n)) {
let e = t();
t.each(n, function(t, n) {
e = e.add(n);
}), n = e;
}
return n = (n = r ? t(n, r) : t(n)).filter("a[href]").not('[href^="javascript:"], [href^="#"], [href=""]');
};
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r, i) {
let o = {
metadata: {
include: [],
match: [ "*://home.gamer.com.tw/creationDetail.php*" ],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let i;
return !!(i = n(5).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(10);
i([].join(",")).prop("target", "_blank"), r.addStylesheet(n(6).font.NotoSansSC), 
r.GM_addStyle([ "#BH-master .MSG-list8 h1, #BH-master .MSG-list8C { font-family: Consolas, Noto Sans SC, Microsoft Yahei UI, sans-serif; }", "#BH-master .MSG-list8C { line-height: 1.25em; }" ]);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = i(n);
return r = r.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(3), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r, i) {
let o = {
metadata: {
include: [],
match: [ "*://www.lightnovel.cn/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let i;
return !!(i = n(5).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(10);
i([].join(",")).prop("target", "_blank"), r.GM_addStyle([ "#thread_subject, .t_f[id] { \n\t\t\t\tfont-family: Consolas, Noto Sans SC, Noto Sans CJK SC, Noto Sans CJK, Microsoft Yahei UI, sans-serif; \n\t\t\t\ttext-shadow: 0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75); \n\t\t\t\t}", "#thread_subject, .t_f[id] { font-size: 14px !important; line-height: 1.45em !important; }" ]);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = i(n);
return r = r.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(3), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r, i) {
let o = {
metadata: {
include: [],
match: [ "*://book.sfacg.com/Novel/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let i;
return !!(i = n(5).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(10);
i([].join(",")).prop("target", "_blank"), r.addStylesheet(n(6).font.NotoSansSC), 
r.GM_addStyle([ "#ChapterBody { \n\t\t\t\tfont-family: Consolas, Noto Sans SC, Microsoft Yahei UI, sans-serif; \n\t\t\t\ttext-shadow: 0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75);\n\t\t\t\t}" ], "body");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = i(n);
return r = r.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(3), n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(96), i = n(42);
t._call = i._call, t.defaultOptions = i.defaultOptions, t.getOptions = i.getOptions, 
t.getOptionsSkip = i.getOptionsSkip, t.REGEXP_TEST = i.REGEXP_TEST, t.SAFE_MODE_CHAR = i.SAFE_MODE_CHAR;
const o = n(14), u = n(104);
function a(e, t = {}, ...n) {
return i._call(l, e, t, ...n);
}
function s(e, t = {}, ...n) {
return i._call(c, e, t, ...n);
}
function l(e) {
return i.textMap(e, t.table_cn2tw);
}
function c(e) {
return i.textMap(e, t.table_tw2cn);
}
t.cn2tw = a, t.tw2cn = s, t.table_cn2tw = Object.assign({}, r.table_cn2tw, u.table_cn2tw_plus), 
t.table_tw2cn = Object.assign({}, r.table_tw2cn, u.table_tw2cn_plus), t._cn2tw = l, 
t._tw2cn = c, t.default = o;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.metadata = t.grant = t.desc = void 0, t.desc = "部分小說網站重新排版、修正文字，改變閱讀樣式", t.grant = [ "GM_registerMenuCommand", "GM_xmlhttpRequest", "unsafeWindow", "GM_getValue" ], 
t.metadata = "// ==UserScript==\n// @name\t\t<%= index.name %>\n// @name:en\t\t<%= index.name_en %>\n// @name:zh\t\t<%= index.name %>\n// @namespace\tbluelovers\n// @author\t\tbluelovers\n//\n// @description\t\t<%= index.desc %>\n// @description:en\t<%= index.desc_en %>\n// @description:zh\t<%= index.desc %>\n//\n// @version\t\t<%= pkg.version %>\n//\n// @grant\t\t<%= index.grant %>\n// g_r_a_n_tnone\n//\n// @icon\t\t<%= index.icon %>\n//\n// @noframes\n// @encoding\tutf-8\n//\n// @homepageURL\thttps://github.com/bluelovers/gm-user-scripts\n// @supportURL\thttps://github.com/bluelovers/gm-user-scripts/issues\n// @downloadURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n// @updateURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n//\n// @include\t\t<%= index.include %>\n//\n// @match\t\t<%= index.match %>\n//\n// @exclude\t\t<%= index.exclude %>\n//\n// ==/UserScript==\n", 
t.default = t.metadata;
}, function(e, t, n) {
"use strict";
(function(t, r, i) {
let o = {
disable: !0,
metadata: {
include: [],
match: [ "*://*.syosetu.com/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let i;
return !!(i = n(5).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(10);
i([].join(",")).prop("target", "_blank"), r.GM_addStyle([]);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = i(n);
return r = r.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(3), n(0).default);
}, function(e, t, n) {
"use strict";
function r(e, t) {
return -1 === (e = e || "u").indexOf("u") && (e += "u"), new RegExp(`[\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3038-\\u303b\\u3400-\\u4db5\\u4E00-\\u9FFF\\u{20000}-\\u{2FA1F}${t || ""}]`, e);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t._re_cjk_conv = r, t.default = t;
}, function(e, t, n) {
"use strict";
function r(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(92);
r(n(21));
const o = n(21);
function u(e, n = {}) {
let r = n.count || 1;
const o = n.toRegExp ? n.toRegExp : i.create;
do {
l(function(n, r, i, u) {
let a = u.fnSplitChar(n), s, l = new Array(a.length).fill(0).map(function(e, t, n) {
return "$" + (t + 1);
}).join(t.SP_ESCAPE), c = o("(" + a.join(")(") + ")", u.flags);
e = e.replace(c, l);
}, n);
} while (--r > 0);
return e;
}
function a(e, n = {}) {
let r = n.count || 1;
const o = n.toRegExp ? n.toRegExp : i.create, u = n.strict ? t.SP_REGEXP_STRICT : n.unsafe ? t.SP_REGEXP_UNSAFE : t.SP_REGEXP;
return l(function(n, r, i, a, s) {
let l = a.fnSplitChar(n), c = o("(" + l.join(")" + t.SP_KEY + "(") + ")", a.flags), f = new RegExp(c.source.split(t.SP_KEY).join(u), a.flags), p;
p = void 0 === s.retLast || null === s.retLast || s.retLast instanceof String ? !a.staticReturn && s.retLast instanceof String ? s.retLast.toString() : a.staticReturn || 1 != i.length ? i[0] : new Array(l.length).fill(0).map(function(e, t, n) {
return "$" + (t + 1);
}).join("") : s.retLast, e = e.replace(f, p);
}, n), e;
}
function s(e = {}) {
return l(function(e, n, r, i, o) {
let u, a = i.fnSplitChar(e), s;
return s = void 0 === o.retLast || null === o.retLast || o.retLast instanceof String ? !i.staticReturn && o.retLast instanceof String ? o.retLast.toString() : i.staticReturn || 1 != r.length ? r[0] : new Array(a.length).fill(0).map(function(e, t, n) {
return "$" + (t + 1);
}).join("") : o.retLast, u = [ a.join(t.SP_KEY), s, i.flags ];
}, e);
}
function l(e, t) {
return t.flags = "string" == typeof t.flags ? t.flags : "ig", t.fnSplitChar = t.fnSplitChar || c, 
t.toRegExp = t.toRegExp || i.create, (t.tables || []).concat(o.table2).concat(o.table3).concat(o.table).reduce(function(n, r) {
let i;
i = Array.isArray(r) ? r.slice() : [ r ];
const o = {};
return i.length > 1 && "string" != typeof i[i.length - 1] && (o.retLast = i.pop()), 
i.forEach(function(r, i, u) {
let a = e(r, i, u, t, o);
n.push(a);
}), n;
}, []);
}
function c(e) {
return e.split("");
}
t.SP_KEY = "#_@_#", t.SP_REGEXP = "(?:@|（·?）|-|/|\\(\\)|%|￥|_|\\?|？|\\||#|\\$|[（\\(](?:和谐|河蟹)[\\)）]|（河）（蟹）|[（\\(][河蟹]{1,2}[\\)）]| |\\.|[・·]|\\*|□|圌|[=＝]|\\\\\\\\|\\/\\/|｜)", 
t.SP_REGEXP_UNSAFE = "(?:" + t.SP_REGEXP + "|、|。)", t.SP_ESCAPE = "（河蟹）", t.SP_REGEXP_STRICT = `(?:${t.SP_ESCAPE})`, 
t.escape = u, t.unescape = a, t.getTable = s, t.loopTable = l, t.splitChar = c;
const f = n(18);
t.default = f;
}, function(e, t, n) {
"use strict";
const r = n(100);
e.exports = r.UString;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var r = n(44);
t.zh2jp = r.zh2jp, t.zht2jp = r.zht2jp, t.zhs2jp = r.zhs2jp, t.zhs2zht = r.zhs2zht, 
t.zht2zhs = r.zht2zhs, t.cjk2zhs = r.cjk2zhs, t.jp2zhs = r.jp2zhs, t.jp2zht = r.jp2zht, 
t.cjk2zht = r.cjk2zht, t.cjk2jp = r.cjk2jp, t.default = t;
}, function(e, t, n) {
"use strict";
function r(e) {
return e.filter(function(e, t, n) {
return t == n.indexOf(e);
});
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.table = r([ "噁心", "触手", "白痴", "打倒", "固守", "貴族", "自由", "討伐", "竊聽", "色情", "禁止", "淫穢", "下流", "含著", "調教", "情欲", "尸体", "凌辱", "幹掉", "非法", "激烈", "互毆", "求愛", "間諜", "賭局", "下賤", "爆炸", "呻吟", "屁股", "笨蛋", "蠢货", "洗脑", "魅惑", "狂化", "混乱", "是非", "弱智", "死掉", "日本", "法克", "畜生", "麻痹", "废物", "娼婦", "娼妓", "男娼", "男妓", "卖春", "流氓", "出卖肉体", "交合", "卖人", "強姦", "強奸", "反法", "禁药", "合体", "乱交会", "乱交", "贞操", "比基尼", "邪教", "非法", "妓院", "赌场", "治安", "警察", "口大", "政治", "逮捕", "法律", "政敌", "合法", "措施", "毒品", "性感", "混蛋", "胸部", "妖艳", "傢伙", "制作", "算是", "法理", "肉欲", "做愛", "利用", "注入", "少女", "色狼", "床上", "运动", "今晚", "摸着", "公粮", "诱惑", "兴奋", "饥渴", "少妇", "回復", "身体", "鼓起", "強健", "抓住", "杀害", "黑暗", "地震", "叫声", "引诱", "主谋", "游街", "旺盛", "燃烧", "基地", "垃圾", "觉醒", "愚蠢", "高潮", "蛋疼", "禁书", "妊娠", "翻弄", "射出", "毛骨悚然", "绝望的魔手", "肉身", "肉体", "艳丽", "绝望", "魔手", "代价", "防卫战", "较高", "体位", "出改", "善再", "自慰", "较高", "谄媚", "違背人倫", "尼玛", "阿尼玛", "断頭台", "断頭", "虐杀", "色女", "麻藥", "反国家", "殺戮", "侵犯", "賄賂", "斩首", "军事政变", "政变", "杀人", "国家颠覆", "颠覆", "鲜血", "露出", "内脏", "血水", "赌博", "俘虏", "發騷", "死刑", "殺死", "殺掉", "背叛", "性女" ]), 
t.table2 = r([ [ "裸体", "果体", new String("裸$2") ], [ "奴隷", "奴隶" ] ]), t.table3 = r([ [ "強姦", "弓虽姦" ], [ "強奸", "弓虽女干", "弓虽奸" ], [ "娼婦", "女昌妇" ], [ "娼妓", "女昌妓", "女昌女支" ] ]), 
t.array_unique = r;
const i = n(21);
t.default = i;
}, function(e, t, n) {
"use strict";
(function(e, r, i) {
Object.defineProperty(t, "__esModule", {
value: !0
}), t.main_list = t.main = t.get_list_script = t.requireScript = t.init = t.url = t.run = t.greasemonkey = void 0;
const o = n(48), u = n(3);
t.greasemonkey = u.default;
const a = n(49);
function s(t, n, i, o) {
let u = async () => {
try {
o ? await o(t, n, e, window, i, window.location.href) : await c(t, n, e, window, i, window.location.href);
const r = p(t, "index");
await h(t, r, r.list), console.info(t, "index.current", r.current);
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
u();
});
}
function l(t, n = e, r, i) {
if (i || !n._url || n._url != t) {
const e = n._url;
return n._url_old = e, n._url = t.toString(), n._url_obj = o.parse_url2(n._url), 
"function" == typeof r && r(n._url, n, e), n;
}
}
function c(e, t, n, r, i, o) {
f(o = o || r.location.href, t), f(o, n), n.userScript = t;
}
function f(e, t) {
let n;
return l(e, t, function(e, t, n) {
t._url_obj.source = t._url_obj._source = e, t._url_obj_ = Object.assign({}, t._url_obj);
}, !0);
}
function p(e, t) {
return n(54)(`./${e}/${t}`);
}
function d(e, t, n) {
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
async function h(t, n, r, i = {}) {
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
let s = !0, l, c;
console.time(i), console.group(i), l = await r.test(e._url_obj), u.default.info(n.id, a, "test", l), 
o && 2 !== l ? u.default.info(n.id, a, "break:test", l) : (l && (1 == (c = await r.main(e._url_obj)) || void 0 === c ? (c = !0, 
u.default.info(n.id, a, "matched", c, s)) : u.default.debug(n.id, a, "main", c), 
c && (s = !1, l && !0 !== l && (s = !0), u.default.debug(n.id, a, "chk", c, s, l))), 
s && !l || (u.default.debug(n.id, a, "current:push", c, s, l), n.current.push({
name: i,
name_id: a,
lib: r
}))), console.groupEnd(i), console.timeEnd(i), o || s || (u.default.debug(n.id, a, "break", c, s, l), 
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
let a = !0, s, l;
if (s = await n.test(e._url_obj), u.default.info(t.id, o, "test", s), s) return l = await n.main(e._url_obj), 
u.default.debug(t.id, o, "main", l), n;
}
}
function y(e, t) {
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
t.run = s, t.url = l, t.init = c, t.requireScript = p, t.get_list_script = d, t.main = h, 
t.main_list = g;
}).call(this, n(1), n(0).default, n(0).default);
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
const r = n(50);
e.exports = r;
}, function(e, t, n) {
"use strict";
function r(e, t, n, r) {
var i, o = !1, u = 0;
function a() {
i && clearTimeout(i);
}
function s() {
a(), o = !0;
}
function l() {
var s = this, l = Date.now() - u, c = arguments;
function f() {
u = Date.now(), n.apply(s, c);
}
function p() {
i = void 0;
}
o || (r && !i && f(), a(), void 0 === r && l > e ? f() : !0 !== t && (i = setTimeout(r ? p : f, void 0 === r ? e - l : e)));
}
return "boolean" != typeof t && (r = n, n = t, t = void 0), l.cancel = s, l;
}
function i(e, t, n) {
return void 0 === n ? r(e, t, !1) : r(e, n, !1 !== t);
}
n.r(t), n.d(t, "throttle", function() {
return r;
}), n.d(t, "debounce", function() {
return i;
});
}, function(e, t, n) {
"use strict";
function r(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), r(n(27));
const i = n(28);
t.StrUtil = i;
const o = n(27), u = n(18);
t.tiebaHarmony = u.default;
const a = n(38);
t.chkBlankLine = a.default, t.novelText = o.enspace.create(), t.default = t.novelText;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(28), i = n(38), o = n(91), u = n(18);
t.SP_REGEXP = u.SP_REGEXP, t.SP_KEY = u.SP_KEY;
const a = n(116);
class enspace {
constructor(e) {
this._cache_ = {
replace: [],
words: new Map()
}, this._data_ = {
m0: /([^a-z0-9\-\.\s])?([a-z0-9\-\.]+(?:[a-z0-9\-\.\s]+[a-z0-9\-\.]+)?)([^a-z0-9\-\.\s])?/giu,
r1: /[「」①→\'\":\-\+（）╮（╯＿╰）╭\(\)\[\]■【】《》~～“”‘’:：：，*＊@。ω・、。`　─一\d『』◆~、？！\?\!×\.\<\>=…・]/i,
rtrim: /[ \t\uFEFF\xA0　]+$/,
words: [ {
s: /\.{3}/g,
r: "…"
}, {
s: /…\.{1,2}/g,
r: "……"
}, {
s: /(话|日|章)[\_\t\uFEFF\xA0]+/gi,
r: "$1 "
}, {
s: "！　",
r: "！",
no_regex: !1
}, {
s: /^([^「『“”』」]+)?(“)([^「『“”』」]+)[』」]([^”]+)?$/m,
r: "$1$2$3”$4"
}, {
s: /，——/g,
r: "——"
}, {
s: /(?:話|话)/gu,
r: "話"
}, [ /　[ \t]+（/g, "　（" ] ]
}, this.options = {}, this._words_r1 = u.SP_REGEXP;
let t = this, n = this._words_r1, r = [].concat(e && e.words_block ? e.words_block : null);
this._data_.words = this._words1(r, this._data_.words), this._data_.words = this._words2(this._data_.words);
}
static create(...e) {
return new this(...e);
}
_words1(e, t = []) {
let n = this._words_r1;
return e.filter(function(e, t, n) {
return e && t == n.indexOf(e);
}).forEach(function(e) {
let r = e.split("@"), i = r.join(`)${n}(`);
t.push({
s: new RegExp(`(${i})`, "g"),
r: r.map(function(e, t, n) {
return "$" + (t + 1);
}).join("")
});
}), t;
}
_words2(e) {
let t = this._words_r1;
return e.map(function(e, n, r) {
if (e.no_regex) return e;
if (Array.isArray(e) && (2 == e.length || e.length >= 3) && (e = {
_source: e,
s: e[0],
r: e[1],
flags: e[2]
}), "string" == typeof e.s && e.s.match(new RegExp(`${u.SP_KEY}(.+)$`))) {
e._source || (e._source = e.s);
let n = e.s.split(u.SP_KEY), r = n.join(`)${t}(`);
e.s = new RegExp(`(${r})`, e.flags ? e.flags : "g"), null === e.r && (e.r = n.map(function(e, t, n) {
return "$" + (t + 1);
}).join(""));
} else "string" == typeof e.s ? (e._source || (e._source = e.s), e.s = new RegExp(e.s, e.flags ? e.flags : "g")) : Array.isArray(e) && 1 == e.length && "function" == typeof e[0] ? e = e[0] : "function" == typeof e.fn && (e = e.fn);
return e;
});
}
replace(e, t = {}) {
if (!e || !/[^\s]/.test(e)) return e;
let n = this, r = this.toStr(e).replace(this._data_.rtrim, "");
return t.pad_eng && (r = this.paddingEng(r)), t.words && (r = this.replace_words(r, this._data_.words, this._cache_.words).value), 
r;
}
replace_words(e, t, n) {
n || (n = new Map());
for (let r in t) {
let i;
if ("function" == typeof t[r]) i = t[r](e, n); else {
let n = t[r].s;
i = e.replace(n, t[r].r);
}
if (i != e) {
let o = [];
n.has(t[r]) && (o = n.get(t[r])), o.push({
old: e,
new: i
}), n.set(t[r], o), e = i;
}
if (!/[^\s]/.test(e)) break;
}
return {
value: e,
cache: n
};
}
paddingEng(e) {
let t = this;
return this.toStr(e).replace(t._data_.m0, function(...e) {
if (e[2]) {
let n = e[2];
return e[2].length > 1 && e[1] && !t._data_.r1.test(e[1]) && (e[2] = " " + e[2]), 
e[3] && !t._data_.r1.test(e[3]) && (e[2] = e[2] + " "), n != e[2] && t._cache_.replace.push({
old: n,
new: e[2],
data: e
}), (e[1] || "") + e[2].replace(/( ){2,}/g, "$1") + (e[3] || "");
}
return e[0];
});
}
clearLF(e) {
return this.trim(e).replace(/\n{4,}/g, "\n\n").replace(/\n{3,}/g, "\n\n");
}
trim(e, t) {
let n = this.toStr(e, t).replace(/[ \t　\xA0\u3000]+\n/g, "\n").replace(/^\n+|[\s　\xA0\u3000]+$/g, "");
return "boolean" == typeof t ? t = {
trim: !!t
} : "string" == typeof t && (t = {
trim: t
}), t && ("string" == typeof t.trim ? n = r.trim(n, "　" + t.trim) : t.trim && (n = r.trim(n, "　"))), 
n;
}
toStr(e, t) {
"string" == typeof t && (t = {
LF: t
}), t = Object.assign({
LF: "\n",
allow_nbsp: !1,
allow_bom: !1
}, t);
let n = o.default(e.toString(), t.LF || o.LF);
return n = r.normalize(n, t);
}
fixOptions(e) {
return Object.entries(e).forEach(([t, n]) => e[t] = a.envVal(n)), e;
}
reduceLine(e, t = {}) {
if ((t = this.fixOptions(t)).allow_lf2) return e;
let n = this.trim(e, t), r = n = n.replace(/[ 　\t]+\n/g, "\n").replace(/[\s　]+$/g, "").replace(/^[\n \t]+/g, "").replace(/\n{4,}/g, "\n\n\n\n");
if (!r.match(/[^\n]\n[^\n]/g)) {
let [e, o, u] = i.default(r.toString());
if (e > 2 && (t.allow_lf2 = !1), u >= 3) {
if (e > 2) {
let t = new RegExp(`\\n{${e - 1}}(\\n+)`, "g");
r = r.replace(t, "$1");
}
r = r.replace(/\n{3,}/g, "\n\n\n");
}
if (t.allow_lf2 || (r = r.replace(/\n\n/g, "\n")), r != n) return r;
}
return e;
}
textlayout(e, t = {}) {
if (t = this.fixOptions(t), !(e = (e = this.trim(e, t)).replace(/[ 　\t]+\n/g, "\n").replace(/[\s　]+$/g, "").replace(/^[\n \t]+/g, "").replace(/\n{4,}/g, "\n\n\n\n")).match(/[^\n]\n[^\n]/g)) {
let [n, r, o] = i.default(e.toString());
if (n > 2 && (t.allow_lf2 = !1), o >= 3) {
if (n > 2) {
let t = new RegExp(`\\n{${n - 1}}(\\n+)`, "g");
e = e.replace(t, "$1");
}
e = e.replace(/\n{3,}/g, "\n\n\n");
}
t.allow_lf2 || (e = e.replace(/\n\n/g, "\n"));
}
return e = (e = e.toString().replace(/([^\n「」【】《》“”『』（）\[\]"](?:[！？?!。]*)?)\n((?:[—]+)?[「」“”【】《》（）『』])/gu, "$1\n\n$2").replace(/([「」【】《》“”『』（）―\[\]"](?:[！？?!。]*)?)\n((?:　*)[^\n「」“”【】《》（）『』])/gu, "$1\n\n$2").replace(/([^\n「」【】《》“”『』（）\[\]"≪≫](?:[！？?!。]*)?)\n((?:[—]+)?[≪≫「」“”【】《》（）『』])/gu, "$1\n\n$2").replace(/([「」【】《》“”『』（）―\[\]"](?:[！？?!。]*)?)\n((?:　*)[^\n「」“”【】《》（）『』])/gu, "$1\n\n$2").replace(/(）(?:[！？?!。]*)?)\n([「」【】《》『』“”])/gu, "$1\n\n$2").replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n((?:[「」“”【】《》（）『』])(?:[^\n]+)([^\n「」【】《》“”『』（）―](?:[！？?!。]*)?)\n)/gu, "$1\n$2\n").replace(/(\n(?:[^　\n][^\n]+))\n([　])/g, "$1\n\n$2").replace(/([^\n])(\n+)(fin|\<完\>)(\n|$)/gi, "$1$2\n$3$4")).replace(/^\n+|[\s　]+$/g, "").replace(/(\n){4,}/g, "\n\n\n\n"), 
e = t.allow_lf3 ? e.replace(/(\n){3,}/g, "\n\n\n") : e.replace(/(\n){3}/g, "\n\n");
}
}
t.enspace = enspace, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var r = n(29);
t.isFullWidth = r.isFullWidth, t.isFullwidthCodePoint = r.isFullwidthCodePoint;
var i = n(62);
t.stringWidth = i.stringWidth;
const o = n(64);
t.toFullNumber = o.toFullNumber, t.toHalfNumber = o.toHalfNumber, t.toFullEnglish = o.toFullEnglish, 
t.toHalfEnglish = o.toHalfEnglish, t.toFullWidth = o.toFullWidth, t.toHalfWidth = o.toHalfWidth;
const u = n(30);
t.stripAnsi = u.default;
const a = n(66);
t.normalize = a.default;
var s = n(67);
t.trim = s.trim;
var l = n(68);
t.zh2jp = l.zh2jp, t.jp2zhs = l.jp2zhs, t.jp2zht = l.jp2zht;
var c = n(77);
t.zh2num = c.zh2num, t.num2zh = c.num2zh;
var f = n(31);
t.charCodeAt = f.charCodeAt, t.tableFullHalf = o.FullHalfCore.table, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(61);
function i(e) {
return !Number.isNaN(e) && (!!(9472 <= e && e <= 9599 || 9600 <= e && e <= 9631 || r.default(e)) || void 0);
}
function o(e) {
return i("number" != typeof e ? e.codePointAt() : e);
}
t.isFullwidthCodePoint = i, t.isFullWidth = o, t.default = t;
}, function(e, t, n) {
"use strict";
const r = n(63), i = e => "string" == typeof e ? e.replace(r(), "") : e;
e.exports = i, e.exports.default = i;
}, function(e, t, n) {
"use strict";
function r(e) {
return e.toString().split("");
}
function i(e, t) {
let n = [];
"function" != typeof t && (t = void 0);
let r = Array.isArray(e) ? e : e.toString();
for (let i of r) {
let r = i.charCodeAt(), o;
if (t && void 0 !== (o = t(i, r, e))) {
if (!o) continue;
if (Array.isArray(o)) {
n = n.concat(o);
continue;
}
}
n.push(r);
}
return n;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.split = r, t.charCodeAt = i, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(33), i = n(75);
t.ZHJP_TABLE = i.default, t.ZHJP_TABLE_SAFE = i.TABLE_SAFE;
const o = n(17);
t.KEY_JP = "jp", t.KEY_ZHT = "zht", t.KEY_ZHS = "zhs";
let u = !1;
t.defaultOptions = {
safe: !0
};
const a = new RegExp(o._re_cjk_conv("u").source + "+", "u");
var s;
function l(e, n) {
return a.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), r.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let r;
return (r = d(e, t.KEY_ZHT, t.KEY_JP, n.safe)) ? r : (r = d(e, t.KEY_ZHS, t.KEY_JP, n.safe)) ? r : e;
}).join("")) : e;
}
function c(e, n) {
return a.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), r.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let r;
return (r = d(e, t.KEY_JP, t.KEY_ZHT, n.safe)) ? r : (r = d(e, t.KEY_ZHS, t.KEY_ZHT, n.safe)) ? r : e;
}).join("")) : e;
}
function f(e, n) {
return a.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), r.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let r;
return (r = d(e, t.KEY_JP, t.KEY_ZHS, n.safe)) ? r : (r = d(e, t.KEY_ZHT, t.KEY_ZHS, n.safe)) ? r : e;
}).join("")) : e;
}
function p(e) {
if (u && !e) return t.TABLE;
function n(e) {
let n = {};
return n[t.KEY_JP] = {}, n[t.KEY_ZHT] = {}, n[t.KEY_ZHS] = {}, e.forEach(function(e) {
let [r, i, o] = e, u = t.KEY_JP;
for (let e of r) e && !n[u][e] && (n[u][e] = n[u][e] || {}, n[u][e][u] = e, n[u][e].zht = i[0], 
n[u][e].zhs = o[0]);
u = t.KEY_ZHT;
for (let e of i) e && !n[u][e] && (n[u][e] = n[u][e] || {}, n[u][e].jp = r[0], n[u][e][u] = e, 
n[u][e].zhs = o[0]);
u = t.KEY_ZHS;
for (let e of o) e && !n[u][e] && (n[u][e] = n[u][e] || {}, n[u][e].jp = r[0], n[u][e].zht = i[0], 
n[u][e][u] = e);
}), n;
}
return t.TABLE = n(i.default), t.TABLE_SAFE = n(i.TABLE_SAFE), u = !0, t.TABLE;
}
function d(e, n, r, i) {
return i ? t.TABLE_SAFE[n][e] ? t.TABLE_SAFE[n][e][r] : null : t.TABLE[n][e] ? t.TABLE[n][e][r] : null;
}
!function(e) {
p();
let n = Object.keys(t.TABLE);
n.forEach(function(i) {
n.forEach(function(n) {
i != n && (e[`${i}2${n}`] = function(e, o) {
return a.test(e.toString()) ? (o = Object.assign({}, t.defaultOptions, o), r.split(e).map(function(e) {
if (o.skip && -1 != o.skip.indexOf(e)) return e;
let t;
return (t = d(e, i, n, o.safe)) ? t : e;
}).join("")) : e;
});
});
});
}(s || (s = {})), t.jp2zht = s.jp2zht, t.jp2zhs = s.jp2zhs, t.zhs2jp = s.zhs2jp, 
t.zht2jp = s.zht2jp, t.zht2zhs = s.zht2zhs, t.zhs2zht = s.zhs2zht, t.zh2jp = l, 
t.cjk2jp = l, t.cjk2zht = c, t.cjk2zhs = f, t.init = p, t._getdata = d, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(69);
var i = n(74);
function o(e) {
return r.default.split(e, "");
}
function u(e, t) {
let n = [];
"function" != typeof t && (t = void 0);
let r = Array.isArray(e) ? e : e.toString();
for (let i of r) {
let r = i.charCodeAt(), o;
if (t && void 0 !== (o = t(i, r, e))) {
if (!o) continue;
if (Array.isArray(o)) {
n = n.concat(o);
continue;
}
}
n.push(r);
}
return n;
}
t.array_unique = i.array_unique, t.lazy_unique = i.lazy_unique, t.split = o, t.charCodeAt = u, 
t.default = t;
}, function(e, t, n) {
"use strict";
var r = n(35);
function i() {
this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
i.prototype = {
get: function e(t) {
return t[this._key];
},
set: function e(t, n) {
Object.isExtensible(t) && Object.defineProperty(t, this._key, {
value: n,
configurable: !0
});
}
};
var o = "function" == typeof WeakMap ? WeakMap : i;
function u(e, t, n) {
if (!n || x(e) || x(t)) return null;
var r = n.get(e);
if (r) {
var i = r.get(t);
if ("boolean" == typeof i) return i;
}
return null;
}
function a(e, t, n, r) {
if (n && !x(e) && !x(t)) {
var i = n.get(e);
i ? i.set(t, r) : ((i = new o()).set(t, r), n.set(e, i));
}
}
function s(e, t, n) {
if (n && n.comparator) return c(e, t, n);
var r = l(e, t);
return null !== r ? r : c(e, t, n);
}
function l(e, t) {
return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t || !x(e) && !x(t) && null;
}
function c(e, t, n) {
(n = n || {}).memoize = !1 !== n.memoize && (n.memoize || new o());
var i = n && n.comparator, s = u(e, t, n.memoize);
if (null !== s) return s;
var c = u(t, e, n.memoize);
if (null !== c) return c;
if (i) {
var p = i(e, t);
if (!1 === p || !0 === p) return a(e, t, n.memoize, p), p;
var d = l(e, t);
if (null !== d) return d;
}
var h = r(e);
if (h !== r(t)) return a(e, t, n.memoize, !1), !1;
a(e, t, n.memoize, !0);
var g = f(e, t, h, n);
return a(e, t, n.memoize, g), g;
}
function f(e, t, n, r) {
switch (n) {
case "String":
case "Number":
case "Boolean":
case "Date":
return s(e.valueOf(), t.valueOf());

case "Promise":
case "Symbol":
case "function":
case "WeakMap":
case "WeakSet":
case "Error":
return e === t;

case "Arguments":
case "Int8Array":
case "Uint8Array":
case "Uint8ClampedArray":
case "Int16Array":
case "Uint16Array":
case "Int32Array":
case "Uint32Array":
case "Float32Array":
case "Float64Array":
case "Array":
return h(e, t, r);

case "RegExp":
return p(e, t);

case "Generator":
return g(e, t, r);

case "DataView":
return h(new Uint8Array(e.buffer), new Uint8Array(t.buffer), r);

case "ArrayBuffer":
return h(new Uint8Array(e), new Uint8Array(t), r);

case "Set":
return d(e, t, r);

case "Map":
return d(e, t, r);

default:
return w(e, t, r);
}
}
function p(e, t) {
return e.toString() === t.toString();
}
function d(e, t, n) {
if (e.size !== t.size) return !1;
if (0 === e.size) return !0;
var r = [], i = [];
return e.forEach(function e(t, n) {
r.push([ t, n ]);
}), t.forEach(function e(t, n) {
i.push([ t, n ]);
}), h(r.sort(), i.sort(), n);
}
function h(e, t, n) {
var r = e.length;
if (r !== t.length) return !1;
if (0 === r) return !0;
for (var i = -1; ++i < r; ) if (!1 === s(e[i], t[i], n)) return !1;
return !0;
}
function g(e, t, n) {
return h(v(e), v(t), n);
}
function y(e) {
return "undefined" != typeof Symbol && "object" == typeof e && void 0 !== Symbol.iterator && "function" == typeof e[Symbol.iterator];
}
function m(e) {
if (y(e)) try {
return v(e[Symbol.iterator]());
} catch (e) {
return [];
}
return [];
}
function v(e) {
for (var t = e.next(), n = [ t.value ]; !1 === t.done; ) t = e.next(), n.push(t.value);
return n;
}
function b(e) {
var t = [];
for (var n in e) t.push(n);
return t;
}
function _(e, t, n, r) {
var i = n.length;
if (0 === i) return !0;
for (var o = 0; o < i; o += 1) if (!1 === s(e[n[o]], t[n[o]], r)) return !1;
return !0;
}
function w(e, t, n) {
var r = b(e), i = b(t);
if (r.length && r.length === i.length) return r.sort(), i.sort(), !1 !== h(r, i) && _(e, t, r, n);
var o = m(e), u = m(t);
return o.length && o.length === u.length ? (o.sort(), u.sort(), h(o, u, n)) : 0 === r.length && 0 === o.length && 0 === i.length && 0 === u.length;
}
function x(e) {
return null === e || "object" != typeof e;
}
e.exports = s, e.exports.MemoizeMap = o;
}, function(e, t, n) {
(function(t) {
!function(t, n) {
e.exports = n();
}(this, function() {
"use strict";
var e = "function" == typeof Promise, n = "object" == typeof self ? self : t, r = "undefined" != typeof Symbol, i = "undefined" != typeof Map, o = "undefined" != typeof Set, u = "undefined" != typeof WeakMap, a = "undefined" != typeof WeakSet, s = "undefined" != typeof DataView, l = r && void 0 !== Symbol.iterator, c = r && void 0 !== Symbol.toStringTag, f = o && "function" == typeof Set.prototype.entries, p = i && "function" == typeof Map.prototype.entries, d = f && Object.getPrototypeOf(new Set().entries()), h = p && Object.getPrototypeOf(new Map().entries()), g = l && "function" == typeof Array.prototype[Symbol.iterator], y = g && Object.getPrototypeOf([][Symbol.iterator]()), m = l && "function" == typeof String.prototype[Symbol.iterator], v = m && Object.getPrototypeOf(""[Symbol.iterator]()), b = 8, _ = -1;
function w(t) {
var r = typeof t;
if ("object" !== r) return r;
if (null === t) return "null";
if (t === n) return "global";
if (Array.isArray(t) && (!1 === c || !(Symbol.toStringTag in t))) return "Array";
if ("object" == typeof window && null !== window) {
if ("object" == typeof window.location && t === window.location) return "Location";
if ("object" == typeof window.document && t === window.document) return "Document";
if ("object" == typeof window.navigator) {
if ("object" == typeof window.navigator.mimeTypes && t === window.navigator.mimeTypes) return "MimeTypeArray";
if ("object" == typeof window.navigator.plugins && t === window.navigator.plugins) return "PluginArray";
}
if (("function" == typeof window.HTMLElement || "object" == typeof window.HTMLElement) && t instanceof window.HTMLElement) {
if ("BLOCKQUOTE" === t.tagName) return "HTMLQuoteElement";
if ("TD" === t.tagName) return "HTMLTableDataCellElement";
if ("TH" === t.tagName) return "HTMLTableHeaderCellElement";
}
}
var l = c && t[Symbol.toStringTag];
if ("string" == typeof l) return l;
var f = Object.getPrototypeOf(t);
return f === RegExp.prototype ? "RegExp" : f === Date.prototype ? "Date" : e && f === Promise.prototype ? "Promise" : o && f === Set.prototype ? "Set" : i && f === Map.prototype ? "Map" : a && f === WeakSet.prototype ? "WeakSet" : u && f === WeakMap.prototype ? "WeakMap" : s && f === DataView.prototype ? "DataView" : i && f === h ? "Map Iterator" : o && f === d ? "Set Iterator" : g && f === y ? "Array Iterator" : m && f === v ? "String Iterator" : null === f ? "Object" : Object.prototype.toString.call(t).slice(b, _);
}
return w;
});
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
var r = {};
n(79)(r), n(80)(r), n(81)(r), e.exports = r;
}, function(e, t, n) {
"use strict";
var r = Object.prototype.hasOwnProperty, i = Object.prototype.toString, o = Object.defineProperty, u = Object.getOwnPropertyDescriptor, a = function e(t) {
return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === i.call(t);
}, s = function e(t) {
if (!t || "[object Object]" !== i.call(t)) return !1;
var n = r.call(t, "constructor"), o = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf"), u;
if (t.constructor && !n && !o) return !1;
for (u in t) ;
return void 0 === u || r.call(t, u);
}, l = function e(t, n) {
o && "__proto__" === n.name ? o(t, n.name, {
enumerable: !0,
configurable: !0,
value: n.newValue,
writable: !0
}) : t[n.name] = n.newValue;
}, c = function e(t, n) {
if ("__proto__" === n) {
if (!r.call(t, n)) return;
if (u) return u(t, n).value;
}
return t[n];
};
e.exports = function e() {
var t, n, r, i, o, u, f = arguments[0], p = 1, d = arguments.length, h = !1;
for ("boolean" == typeof f && (h = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < d; ++p) if (null != (t = arguments[p])) for (n in t) r = c(f, n), 
f !== (i = c(t, n)) && (h && i && (s(i) || (o = a(i))) ? (o ? (o = !1, u = r && a(r) ? r : []) : u = r && s(r) ? r : {}, 
l(f, {
name: n,
newValue: e(h, u, i)
})) : void 0 !== i && l(f, {
name: n,
newValue: i
}));
return f;
};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(87), i = n(90);
function o(e, t = {}) {
let n = r.execall(/\n+/g, i.normalize(e));
if (n.length) {
let e = n.reduce(function(e, t) {
return e.push(t.match.length), e;
}, []);
return t.filter && (e = e.filter(function(e, t, n) {
return n.indexOf(e) == t;
})), t.sort && e.sort(function(e, t) {
return e - t;
}), e;
}
return null;
}
function u(e) {
let t = o(e, {
filter: !0,
sort: !0
});
if (!t || !t.length) return [ null, null, null ];
let n = t[0] || null, r = t[t.length - 1] || n, i;
return [ n, t[1] || n, r ];
}
t.getBlankLine = o, t.getMinMidMax = u, t.default = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(93), i = n(36), o = n(95);
function u(e, t) {
let n = e instanceof RegExp, i, o = a(r.parse(e), t);
return n ? new RegExp(o, e.flags) : o;
}
function a(e, t) {
return e.body ? e.body.type == r.types.ALTERNATE ? a(e.body.left, t) + "|" + a(e.body.right, t) : e.type == r.types.MATCH ? e.body.reduce(function(e, n) {
return e.push(s(n, t)), e;
}, []).join("") : e.type == r.types.QUANTIFIED ? s(e.body, t) + a(e.quantifier, t) : s(e.body, t) : e.type == r.types.ALTERNATE ? a(e.left, t) + "|" + a(e.right, t) : e.text;
}
function s(e, n) {
switch (e.type) {
case r.types.CHARSET:
{
let n = "";
e.invert && (n += "^");
for (let i of e.body) if (i.type == r.types.RANGE) {
let e = i.start.text, r = i.end.text, o;
for (let n of t.local_range) {
let t = n.indexOf(e), u = n.indexOf(r, t);
if (-1 !== t && -1 !== u) {
i.setBody(n.slice(t, u + 1)), o = i.toString();
break;
}
}
n += o || i.text;
} else n += i.text;
return `[${n}]`;
}

case r.types.POSITIVE_LOOKAHEAD:
return "(?=" + a(e, n) + ")";

case r.types.NEGATIVE_LOOKAHEAD:
return "(?!" + a(e, n) + ")";

case r.types.CAPTURE_GROUP:
return "(" + a(e, n) + ")";

case r.types.NON_CAPTURE_GROUP:
return "(?:" + a(e, n) + ")";

case r.types.MATCH:
return a(e, n);

case r.types.QUANTIFIED:
return s(e.body, n) + a(e.quantifier, n);

case r.types.LITERAL:
let i = e.text;
return i = n(i);

default:
break;
}
return e.toString();
}
function l(e) {
return e.filter(function(e, t, n) {
return t == n.indexOf(e);
});
}
function c(e) {
return e.replace(/(\W)/g, "\\$1");
}
function f(e, t, n = "ig", r) {
let i = u(e, function(e) {
return p(e, r);
});
return [ i, t, n = i instanceof RegExp ? i.flags : n ];
}
function p(e, t) {
return e.replace(/[\u4E00-\u9FFFのと]/g, function(e) {
if (t && -1 != t.indexOf(e)) return e;
let n = o.default.zhTable.auto(e);
return n.length > 1 ? "[" + n.join("") + "]" : n[0];
});
}
t.replace_literal = u, t.local_range = [ "〇一二三四五六七八九十".split(""), "零一二三四五六七八九十".split("") ], 
[ [ "common", "十" ], [ "formal", "十" ], [ "traditional", "拾" ], [ "traditionalOld", "拾" ], [ "simplified", "拾" ], [ "traditional", "什" ], [ "traditionalOld", "什" ], [ "simplified", "什" ], [ "chineseMilitary" ] ].forEach(function(e) {
let n = i.predefineedTranscriptionConfigs.digits[e[0]];
n && (n = Object.values(n), e[1] && n.push(e[1]), t.local_range.push(n));
}), t.array_unique = l, t.matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g, t.regex_str = c, 
t._word_zh = f, t._word_zh_core = p;
const d = n(39);
t.default = d;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(94);
let i = 1, o = {};
function u() {
i = 1, o = {};
}
function a(e) {
if (e instanceof RegExp && (e = e.source), "string" != typeof e) {
let e;
throw new TypeError("The regexp to parse must be represented as a string.");
}
return u(), r.parse(e);
}
var s;
t._resetCache = u, t.parse = a, function(e) {
e.CONTROL_CHARACTER = "control-character", e.BACK_REFERENCE = "back-reference", 
e.ALTERNATE = "alternate", e.MATCH = "match", e.CAPTURE_GROUP = "capture-group", 
e.QUANTIFIED = "quantified", e.QUANTIFIER = "quantifier", e.CHARSET = "charset", 
e.RANGE = "range", e.CHARSET_RANGE = e.RANGE, e.LITERAL = "literal", e.UNICODE = "unicode", 
e.HEX = "hex", e.OCTAL = "octal", e.NEGATIVE_LOOKAHEAD = "negative-lookahead", e.POSITIVE_LOOKAHEAD = "positive-lookahead", 
e.NON_CAPTURE_GROUP = "non-capture-group";
}(s = t.types || (t.types = {}));
class Token {
constructor(e, t) {
this.type = e, this.offset = Token.offset(), this.text = Token.text();
}
toString(e) {
return this.text;
}
}
t.Token = Token, Token = t.Token || (t.Token = {});
class Alternate extends Token {
constructor(e, t) {
super(s.ALTERNATE), this.left = e, this.right = t;
}
}
t.Alternate = Alternate;
class Match extends Token {
constructor(e) {
super(s.MATCH), this.body = e.filter(Boolean);
}
}
t.Match = Match;
class Group extends Token {
constructor(e, t) {
super(e), this.body = t;
}
toString(e) {
switch (this.type) {
case s.NON_CAPTURE_GROUP:
return "(" + this.text + ")";

case s.POSITIVE_LOOKAHEAD:
return "(?=" + this.text + ")";

case s.NEGATIVE_LOOKAHEAD:
return "(?!" + this.text + ")";

case s.CAPTURE_GROUP:
return "(" + this.text + ")";
}
return super.toString(e);
}
}
t.Group = Group;
class CaptureGroup extends Group {
constructor(e) {
super(s.CAPTURE_GROUP), this.index = o[this.offset] || (o[this.offset] = i++), this.body = e;
}
}
t.CaptureGroup = CaptureGroup;
class Quantified extends Token {
constructor(e, t) {
super(s.QUANTIFIED), this.body = e, this.quantifier = t;
}
}
t.Quantified = Quantified;
class Quantifier extends Token {
constructor(e, t) {
super(s.QUANTIFIER), this.min = e, this.max = t, this.greedy = !0;
}
}
t.Quantifier = Quantifier;
class CharSet extends Token {
constructor(e, t) {
super(s.CHARSET), this.invert = e, this.body = t;
}
toString(e) {
if (e) {
let e = "";
this.invert && (e += "^");
for (let t of this.body) e += t.toString();
return `[${e}]`;
}
return super.toString(e);
}
}
t.CharSet = CharSet;
class CharacterRange extends Token {
constructor(e, t) {
super(s.RANGE), this.start = e, this.end = t;
}
setBody(e) {
let t = [];
for (let n of e) if ("string" == typeof n) t.push(new Literal(n, !0)); else {
if (!(n instanceof Literal)) throw new RangeError();
t.push(n);
}
if (!t.length) throw new ReferenceError();
return this.body = t, this.start = this.body[0], this.end = this.body[this.body.length - 1], 
this.text = this.toString(!0), this;
}
toString(e) {
if (e && this.body) {
let e = "";
for (let t of this.body) e += t.toString();
return e;
}
return super.toString(e);
}
inspect() {
return `CharacterRange(${this.start}-${this.end})`;
}
}
t.CharacterRange = CharacterRange;
class Literal extends Token {
constructor(e, t = null) {
super(s.LITERAL), "string" != typeof t && !0 !== t || (this.text = "string" == typeof t ? t : e), 
this.body = e;
}
get escaped() {
return this.body != this.text;
}
inspect() {
return `Literal(${this.text})`;
}
}
t.Literal = Literal;
class TokenChar extends Token {
constructor(e, t) {
super(e), this.code = t.toUpperCase();
}
}
t.TokenChar = TokenChar;
class Unicode extends TokenChar {
constructor(e) {
super(s.UNICODE, e);
}
}
t.Unicode = Unicode;
class Hex extends TokenChar {
constructor(e) {
super(s.HEX, e);
}
}
t.Hex = Hex;
class Octal extends TokenChar {
constructor(e) {
super(s.OCTAL, e);
}
}
t.Octal = Octal;
class BackReference extends TokenChar {
constructor(e) {
super(s.BACK_REFERENCE, e);
}
}
t.BackReference = BackReference;
class ControlCharacter extends TokenChar {
constructor(e) {
super(s.CONTROL_CHARACTER, e);
}
}
t.ControlCharacter = ControlCharacter, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var r = n(14);
t.zhConvert = r.default, t.tw2cn = r.tw2cn, t.cn2tw = r.cn2tw;
var i = n(105);
t.zhTable = i.default;
var o = n(20);
t.jpConvert = o.default, t.zh2jp = o.zh2jp, t.jp2zht = o.jp2zht, t.jp2zhs = o.jp2zhs, 
t.cjk2zht = o.cjk2zht, t.cjk2zhs = o.cjk2zhs, t.cjk2jp = o.cjk2jp;
var u = n(114);
t.novelFilename = u.default, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(4), i = n(19), o = n(17);
function u(e, t) {
let n = t[e];
return "string" == typeof n ? n : e;
}
function a(e, t) {
let n = [], r = e.length;
for (let i = 0; i < r; i++) n[i] = u(e[i], t);
return n.join("");
}
function s(e, t) {
let n = i.split(e, ""), r = n.length;
for (let e = 0; e < r; e++) n[e] = u(n[e], t);
return n.join("");
}
function l(e, t) {
let n = e.split(/(?:)/u), r = n.length;
for (let e = 0; e < r; e++) n[e] = u(n[e], t);
return n.join("");
}
function c(e, n) {
return e.replace(t.REGEXP_TEST, function(e) {
return u(e, n);
});
}
t.charMap = u, t.textMap1 = a, t.textMap2 = s, t.textMap3 = l, t.textMap4 = c, t.textMap = c;
const f = c;
function p(e) {
return Object.entries(e).reduce(function(e, t) {
let [n, r] = t;
return n != r && (e[n] = r), e;
}, {});
}
function d(e, n = t.SAFE_MODE_CHAR) {
return e.skip ? "string" == typeof e.skip ? e.skip += n.join("") : Array.isArray(e.skip) ? e.skip = e.skip.slice().concat(n) : e.table = n.reduce(function(e, t) {
return e[t] = t, e;
}, Object.assign({}, e.table || {})) : e.skip = n.slice(), e;
}
function h(e = {}, n = t.defaultOptions, r = t.SAFE_MODE_CHAR) {
return (e = Object.assign({}, n, e)).safe && (e = d(e, r)), e;
}
function g(e, n, r = {}, ...i) {
if ((r = h(r)).skip || r.table || r.tableOnly) {
let {skip: o, table: u, tableOnly: a} = r, s = !a;
if (a && !u) throw new Error(`table is ${u}`);
return n.replace(t.REGEXP_TEST, function(t) {
if (o && -1 !== o.indexOf(t)) return t;
if (u && "function" == typeof u) {
let n = u(e, t, r, ...i);
if (null != n) return n;
} else {
if (u && u[t]) return u[t];
if (s) return e(t);
}
return t;
});
}
return e(n, r, ...i);
}
t.default = t, t.removeSame = p, t.defaultOptions = Object.freeze({
safe: !0
}), t.REGEXP_TEST = o._re_cjk_conv("ug"), t.SAFE_MODE_CHAR = r.array_unique([ "后", "里", "餵", "志", "布", "佈", "系", "繫", "梁", "樑", "衝", "沖", "谷", "穀", "注", "克" ]), 
t.getOptionsSkip = d, t.getOptions = h, t._call = g;
}, function(e, t, n) {
"use strict";
var r = n(35);
function i() {
this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
i.prototype = {
get: function e(t) {
return t[this._key];
},
set: function e(t, n) {
Object.isExtensible(t) && Object.defineProperty(t, this._key, {
value: n,
configurable: !0
});
}
};
var o = "function" == typeof WeakMap ? WeakMap : i;
function u(e, t, n) {
if (!n || x(e) || x(t)) return null;
var r = n.get(e);
if (r) {
var i = r.get(t);
if ("boolean" == typeof i) return i;
}
return null;
}
function a(e, t, n, r) {
if (n && !x(e) && !x(t)) {
var i = n.get(e);
i ? i.set(t, r) : ((i = new o()).set(t, r), n.set(e, i));
}
}
function s(e, t, n) {
if (n && n.comparator) return c(e, t, n);
var r = l(e, t);
return null !== r ? r : c(e, t, n);
}
function l(e, t) {
return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t || !x(e) && !x(t) && null;
}
function c(e, t, n) {
(n = n || {}).memoize = !1 !== n.memoize && (n.memoize || new o());
var i = n && n.comparator, s = u(e, t, n.memoize);
if (null !== s) return s;
var c = u(t, e, n.memoize);
if (null !== c) return c;
if (i) {
var p = i(e, t);
if (!1 === p || !0 === p) return a(e, t, n.memoize, p), p;
var d = l(e, t);
if (null !== d) return d;
}
var h = r(e);
if (h !== r(t)) return a(e, t, n.memoize, !1), !1;
a(e, t, n.memoize, !0);
var g = f(e, t, h, n);
return a(e, t, n.memoize, g), g;
}
function f(e, t, n, r) {
switch (n) {
case "String":
case "Number":
case "Boolean":
case "Date":
return s(e.valueOf(), t.valueOf());

case "Promise":
case "Symbol":
case "function":
case "WeakMap":
case "WeakSet":
return e === t;

case "Error":
return _(e, t, [ "name", "message", "code" ], r);

case "Arguments":
case "Int8Array":
case "Uint8Array":
case "Uint8ClampedArray":
case "Int16Array":
case "Uint16Array":
case "Int32Array":
case "Uint32Array":
case "Float32Array":
case "Float64Array":
case "Array":
return h(e, t, r);

case "RegExp":
return p(e, t);

case "Generator":
return g(e, t, r);

case "DataView":
return h(new Uint8Array(e.buffer), new Uint8Array(t.buffer), r);

case "ArrayBuffer":
return h(new Uint8Array(e), new Uint8Array(t), r);

case "Set":
return d(e, t, r);

case "Map":
return d(e, t, r);

default:
return w(e, t, r);
}
}
function p(e, t) {
return e.toString() === t.toString();
}
function d(e, t, n) {
if (e.size !== t.size) return !1;
if (0 === e.size) return !0;
var r = [], i = [];
return e.forEach(function e(t, n) {
r.push([ t, n ]);
}), t.forEach(function e(t, n) {
i.push([ t, n ]);
}), h(r.sort(), i.sort(), n);
}
function h(e, t, n) {
var r = e.length;
if (r !== t.length) return !1;
if (0 === r) return !0;
for (var i = -1; ++i < r; ) if (!1 === s(e[i], t[i], n)) return !1;
return !0;
}
function g(e, t, n) {
return h(v(e), v(t), n);
}
function y(e) {
return "undefined" != typeof Symbol && "object" == typeof e && void 0 !== Symbol.iterator && "function" == typeof e[Symbol.iterator];
}
function m(e) {
if (y(e)) try {
return v(e[Symbol.iterator]());
} catch (e) {
return [];
}
return [];
}
function v(e) {
for (var t = e.next(), n = [ t.value ]; !1 === t.done; ) t = e.next(), n.push(t.value);
return n;
}
function b(e) {
var t = [];
for (var n in e) t.push(n);
return t;
}
function _(e, t, n, r) {
var i = n.length;
if (0 === i) return !0;
for (var o = 0; o < i; o += 1) if (!1 === s(e[n[o]], t[n[o]], r)) return !1;
return !0;
}
function w(e, t, n) {
var r = b(e), i = b(t);
if (r.length && r.length === i.length) return r.sort(), i.sort(), !1 !== h(r, i) && _(e, t, r, n);
var o = m(e), u = m(t);
return o.length && o.length === u.length ? (o.sort(), u.sort(), h(o, u, n)) : 0 === r.length && 0 === o.length && 0 === i.length && 0 === u.length;
}
function x(e) {
return null === e || "object" != typeof e;
}
e.exports = s, e.exports.MemoizeMap = o;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(106), i = n(107);
t.ZHJP_TABLE = i.default, t.ZHJP_TABLE_SAFE = i.TABLE_SAFE;
const o = n(17);
t.KEY_JP = "jp", t.KEY_ZHT = "zht", t.KEY_ZHS = "zhs";
let u = !1;
t.defaultOptions = {
safe: !0
};
const a = new RegExp(o._re_cjk_conv("u").source + "+", "u");
var s;
function l(e, n) {
return a.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), r.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let r;
return (r = d(e, t.KEY_ZHT, t.KEY_JP, n.safe)) ? r : (r = d(e, t.KEY_ZHS, t.KEY_JP, n.safe)) ? r : e;
}).join("")) : e;
}
function c(e, n) {
return a.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), r.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let r;
return (r = d(e, t.KEY_JP, t.KEY_ZHT, n.safe)) ? r : (r = d(e, t.KEY_ZHS, t.KEY_ZHT, n.safe)) ? r : e;
}).join("")) : e;
}
function f(e, n) {
return a.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), r.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let r;
return (r = d(e, t.KEY_JP, t.KEY_ZHS, n.safe)) ? r : (r = d(e, t.KEY_ZHT, t.KEY_ZHS, n.safe)) ? r : e;
}).join("")) : e;
}
function p(e) {
if (u && !e) return t.TABLE;
function n(e) {
let n = {};
return n[t.KEY_JP] = {}, n[t.KEY_ZHT] = {}, n[t.KEY_ZHS] = {}, e.forEach(function(e) {
let [r, i, o] = e, u = t.KEY_JP;
for (let e of r) e && !n[u][e] && (n[u][e] = n[u][e] || {}, n[u][e][u] = e, n[u][e][t.KEY_ZHT] = i[0], 
n[u][e][t.KEY_ZHS] = o[0]);
u = t.KEY_ZHT;
for (let e of i) e && !n[u][e] && (n[u][e] = n[u][e] || {}, n[u][e][t.KEY_JP] = r[0], 
n[u][e][u] = e, n[u][e][t.KEY_ZHS] = o[0]);
u = t.KEY_ZHS;
for (let e of o) e && !n[u][e] && (n[u][e] = n[u][e] || {}, n[u][e][t.KEY_JP] = r[0], 
n[u][e][t.KEY_ZHT] = i[0], n[u][e][u] = e);
}), n;
}
return t.TABLE = n(i.default), t.TABLE_SAFE = n(i.TABLE_SAFE), u = !0, t.TABLE;
}
function d(e, n, r, i) {
return i ? t.TABLE_SAFE[n][e] ? t.TABLE_SAFE[n][e][r] : null : t.TABLE[n][e] ? t.TABLE[n][e][r] : null;
}
!function(e) {
p();
let n = Object.keys(t.TABLE);
n.forEach(function(i) {
n.forEach(function(n) {
i != n && (e[`${i}2${n}`] = function(e, o) {
return a.test(e.toString()) ? (o = Object.assign({}, t.defaultOptions, o), r.split(e).map(function(e) {
if (o.skip && -1 != o.skip.indexOf(e)) return e;
let t;
return (t = d(e, i, n, o.safe)) ? t : e;
}).join("")) : e;
});
});
});
}(s || (s = {})), t.jp2zht = s.jp2zht, t.jp2zhs = s.jp2zhs, t.zhs2jp = s.zhs2jp, 
t.zht2jp = s.zht2jp, t.zht2zhs = s.zht2zhs, t.zhs2zht = s.zhs2zht, t.zh2jp = l, 
t.cjk2jp = l, t.cjk2zht = c, t.cjk2zhs = f, t.init = p, t._getdata = d, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(44), i = n(4);
function o(e, t, n, o = {}) {
const u = o && o.safe ? r.TABLE_SAFE : r.TABLE;
if (u[t] && u[n]) {
let r = [];
return u[t][e] && (u[t][e][n] && r.push(u[t][e][n]), Object.values(u[n]).forEach(i => {
i[t] === e && i[n] && r.push(i[n]);
}), o && o.includeSelf && r.push(e), r = i.array_unique_overwrite(r)), r;
}
throw new RangeError(`${t}, ${n} is not exists in TABLE`);
}
function u(e, t) {
return o(e, r.KEY_JP, r.KEY_ZHT, t);
}
function a(e, t) {
return o(e, r.KEY_JP, r.KEY_ZHS, t);
}
function s(e, t) {
return o(e, r.KEY_ZHT, r.KEY_JP, t);
}
function l(e, t) {
return o(e, r.KEY_ZHS, r.KEY_JP, t);
}
function c(e, t) {
let n = s(e, t).concat(l(e, t));
return i.array_unique_overwrite(n);
}
function f(e, t) {
let n = u(e, t).concat(a(e, t));
return i.array_unique_overwrite(n);
}
function p(e, t) {
let n = c(e, t).reduce((e, n) => (e.push(n, ...f(n, t)), e), []).concat(f(e, t).reduce((e, n) => (e.push(n, ...c(n, t)), 
e), []));
return i.array_unique_overwrite(n);
}
t._fromA2B = o, t.jp2zht = u, t.jp2zhs = a, t.zht2jp = s, t.zhs2jp = l, t.zh2jp = c, 
t.jp2zh = f, t.lazyAll = p, t.default = t;
}, function(e, t, n) {
"use strict";
let r;
function i(e, t, ...n) {
if (e === t) {
if (n.length) for (let t of n) if (t !== e) return !1;
return !0;
}
return !1;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), /(wor)(ld)/g.test("hello world!"), t.leftContext = i(RegExp.leftContext, RegExp["$`"], "hello "), 
t.rightContext = i(RegExp.rightContext, RegExp["$'"], "!"), t.lastParen = i(RegExp.lastParen, RegExp["$+"], "ld"), 
t.lastMatch = i(RegExp.lastMatch, RegExp["$&"], "world"), t.input = i(RegExp.input, RegExp.$_, "hello world!"), 
t._multiEqual = i;
const o = n(46);
t.support = function() {
let e = Object.assign({}, o);
delete e.default, delete e.support;
for (let t in e) /^_/.test(t) && delete e[t];
return Object.freeze(e);
}(), t.default = t.support;
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
var u = [], a = n.document, s = Object.getPrototypeOf, l = u.slice, c = u.concat, f = u.push, p = u.indexOf, d = {}, h = d.toString, g = d.hasOwnProperty, y = g.toString, m = y.call(Object), v = {}, b = function(e) {
return "function" == typeof e && "number" != typeof e.nodeType;
}, _ = function(e) {
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
function A(e) {
return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e;
}
var E = "3.4.1", T = function(e, t) {
return new T.fn.init(e, t);
}, S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function j(e) {
var t = !!e && "length" in e && e.length, n = A(e);
return !b(e) && !_(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
}
T.fn = T.prototype = {
jquery: E,
constructor: T,
length: 0,
toArray: function() {
return l.call(this);
},
get: function(e) {
return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
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
return this.pushStack(l.apply(this, arguments));
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
sort: u.sort,
splice: u.splice
}, T.extend = T.fn.extend = function() {
var e, t, n, r, i, o, u = arguments[0] || {}, a = 1, s = arguments.length, l = !1;
for ("boolean" == typeof u && (l = u, u = arguments[a] || {}, a++), "object" == typeof u || b(u) || (u = {}), 
a === s && (u = this, a--); a < s; a++) if (null != (e = arguments[a])) for (t in e) r = e[t], 
"__proto__" !== t && u !== r && (l && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (n = u[t], 
o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}, i = !1, u[t] = T.extend(l, o, r)) : void 0 !== r && (u[t] = r));
return u;
}, T.extend({
expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
isReady: !0,
error: function(e) {
throw new Error(e);
},
noop: function() {},
isPlainObject: function(e) {
var t, n;
return !(!e || "[object Object]" !== h.call(e) || (t = s(e)) && ("function" != typeof (n = g.call(t, "constructor") && t.constructor) || y.call(n) !== m));
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
if (j(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
return e;
},
trim: function(e) {
return null == e ? "" : (e + "").replace(S, "");
},
makeArray: function(e, t) {
var n = t || [];
return null != e && (j(Object(e)) ? T.merge(n, "string" == typeof e ? [ e ] : e) : f.call(n, e)), 
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
for (var r = [], i = 0, o = e.length, u = !n; i < o; i++) !t(e[i], i) !== u && r.push(e[i]);
return r;
},
map: function(e, t, n) {
var r, i, o = 0, u = [];
if (j(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && u.push(i); else for (o in e) null != (i = t(e[o], o, n)) && u.push(i);
return c.apply([], u);
},
guid: 1,
support: v
}), "function" == typeof Symbol && (T.fn[Symbol.iterator] = u[Symbol.iterator]), 
T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
d["[object " + t + "]"] = t.toLowerCase();
});
var C = function(e) {
var t, n, r, i, o, u, a, s, l, c, f, p, d, h, g, y, m, v, b, _ = "sizzle" + 1 * new Date(), w = e.document, x = 0, A = 0, E = se(), T = se(), S = se(), j = se(), C = function(e, t) {
return e === t && (f = !0), 0;
}, O = {}.hasOwnProperty, k = [], R = k.pop, M = k.push, P = k.push, N = k.slice, L = function(e, t) {
for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
return -1;
}, z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", D = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", $ = "\\[" + I + "*(" + D + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + D + "))|)" + I + "*\\]", H = ":(" + D + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)", F = new RegExp(I + "+", "g"), U = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"), G = new RegExp("^" + I + "*," + I + "*"), B = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), q = new RegExp(I + "|>"), W = new RegExp(H), Y = new RegExp("^" + D + "$"), K = {
ID: new RegExp("^#(" + D + ")"),
CLASS: new RegExp("^\\.(" + D + ")"),
TAG: new RegExp("^(" + D + "|[*])"),
ATTR: new RegExp("^" + $),
PSEUDO: new RegExp("^" + H),
CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
bool: new RegExp("^(?:" + z + ")$", "i"),
needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
}, V = /HTML$/i, Z = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), ne = function(e, t, n) {
var r = "0x" + t - 65536;
return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
}, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
}, oe = function() {
p();
}, ue = _e(function(e) {
return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
}, {
dir: "parentNode",
next: "legend"
});
try {
P.apply(k = N.call(w.childNodes), w.childNodes), k[w.childNodes.length].nodeType;
} catch (t) {
P = {
apply: k.length ? function(e, t) {
M.apply(e, N.call(t));
} : function(e, t) {
for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
e.length = n - 1;
}
};
}
function ae(e, t, r, i) {
var o, a, l, c, f, h, m, v = t && t.ownerDocument, x = t ? t.nodeType : 9;
if (r = r || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;
if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
if (11 !== x && (f = X.exec(e))) if (o = f[1]) {
if (9 === x) {
if (!(l = t.getElementById(o))) return r;
if (l.id === o) return r.push(l), r;
} else if (v && (l = v.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), 
r;
} else {
if (f[2]) return P.apply(r, t.getElementsByTagName(e)), r;
if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(o)), 
r;
}
if (n.qsa && !j[e + " "] && (!y || !y.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
if (m = e, v = t, 1 === x && q.test(e)) {
for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = _), 
a = (h = u(e)).length; a--; ) h[a] = "#" + c + " " + be(h[a]);
m = h.join(","), v = ee.test(e) && me(t.parentNode) || t;
}
try {
return P.apply(r, v.querySelectorAll(m)), r;
} catch (t) {
j(e, !0);
} finally {
c === _ && t.removeAttribute("id");
}
}
}
return s(e.replace(U, "$1"), t, r, i);
}
function se() {
var e = [];
return function t(n, i) {
return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
};
}
function le(e) {
return e[_] = !0, e;
}
function ce(e) {
var t = d.createElement("fieldset");
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
function de(e) {
return function(t) {
return "input" === t.nodeName.toLowerCase() && t.type === e;
};
}
function he(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return ("input" === n || "button" === n) && t.type === e;
};
}
function ge(e) {
return function(t) {
return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ue(t) === e : t.disabled === e : "label" in t && t.disabled === e;
};
}
function ye(e) {
return le(function(t) {
return t = +t, le(function(n, r) {
for (var i, o = e([], n.length, t), u = o.length; u--; ) n[i = o[u]] && (n[i] = !(r[i] = n[i]));
});
});
}
function me(e) {
return e && void 0 !== e.getElementsByTagName && e;
}
for (t in n = ae.support = {}, o = ae.isXML = function(e) {
var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
return !V.test(t || n && n.nodeName || "HTML");
}, p = ae.setDocument = function(e) {
var t, i, u = e ? e.ownerDocument || e : w;
return u !== d && 9 === u.nodeType && u.documentElement && (h = (d = u).documentElement, 
g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), 
n.attributes = ce(function(e) {
return e.className = "i", !e.getAttribute("className");
}), n.getElementsByTagName = ce(function(e) {
return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
}), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ce(function(e) {
return h.appendChild(e).id = _, !d.getElementsByName || !d.getElementsByName(_).length;
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
}, m = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ce(function(e) {
h.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + I + "*(?:''|\"\")"), 
e.querySelectorAll("[selected]").length || y.push("\\[" + I + "*(?:value|" + z + ")"), 
e.querySelectorAll("[id~=" + _ + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), 
e.querySelectorAll("a#" + _ + "+*").length || y.push(".#.+[+~]");
}), ce(function(e) {
e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var t = d.createElement("input");
t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + I + "*[*^$|!~]?="), 
2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), 
h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), 
e.querySelectorAll("*,:x"), y.push(",.*:");
})), (n.matchesSelector = Q.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), m.push("!=", H);
}), y = y.length && new RegExp(y.join("|")), m = m.length && new RegExp(m.join("|")), 
t = Q.test(h.compareDocumentPosition), b = t || Q.test(h.contains) ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
} : function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, C = t ? function(e, t) {
if (e === t) return f = !0, 0;
var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && b(w, e) ? -1 : t === d || t.ownerDocument === w && b(w, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & r ? -1 : 1);
} : function(e, t) {
if (e === t) return f = !0, 0;
var n, r = 0, i = e.parentNode, o = t.parentNode, u = [ e ], a = [ t ];
if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? L(c, e) - L(c, t) : 0;
if (i === o) return pe(e, t);
for (n = e; n = n.parentNode; ) u.unshift(n);
for (n = t; n = n.parentNode; ) a.unshift(n);
for (;u[r] === a[r]; ) r++;
return r ? pe(u[r], a[r]) : u[r] === w ? -1 : a[r] === w ? 1 : 0;
}), d;
}, ae.matches = function(e, t) {
return ae(e, null, null, t);
}, ae.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !j[t + " "] && (!m || !m.test(t)) && (!y || !y.test(t))) try {
var r = v.call(e, t);
if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
} catch (e) {
j(t, !0);
}
return 0 < ae(t, d, null, [ e ]).length;
}, ae.contains = function(e, t) {
return (e.ownerDocument || e) !== d && p(e), b(e, t);
}, ae.attr = function(e, t) {
(e.ownerDocument || e) !== d && p(e);
var i = r.attrHandle[t.toLowerCase()], o = i && O.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
}, ae.escape = function(e) {
return (e + "").replace(re, ie);
}, ae.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, ae.uniqueSort = function(e) {
var t, r = [], i = 0, o = 0;
if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(C), f) {
for (;t = e[o++]; ) t === e[o] && (i = r.push(o));
for (;i--; ) e.splice(r[i], 1);
}
return c = null, e;
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
createPseudo: le,
match: K,
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
return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = u(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
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
var t = E[e + " "];
return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && E(e, function(e) {
return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
});
},
ATTR: function(e, t, n) {
return function(r) {
var i = ae.attr(r, e);
return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(F, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
};
},
CHILD: function(e, t, n, r, i) {
var o = "nth" !== e.slice(0, 3), u = "last" !== e.slice(-4), a = "of-type" === t;
return 1 === r && 0 === i ? function(e) {
return !!e.parentNode;
} : function(t, n, s) {
var l, c, f, p, d, h, g = o !== u ? "nextSibling" : "previousSibling", y = t.parentNode, m = a && t.nodeName.toLowerCase(), v = !s && !a, b = !1;
if (y) {
if (o) {
for (;g; ) {
for (p = t; p = p[g]; ) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
h = g = "only" === e && !h && "nextSibling";
}
return !0;
}
if (h = [ u ? y.firstChild : y.lastChild ], u && v) {
for (b = (d = (l = (c = (f = (p = y)[_] || (p[_] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === x && l[1]) && l[2], 
p = d && y.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || h.pop(); ) if (1 === p.nodeType && ++b && p === t) {
c[e] = [ x, d, b ];
break;
}
} else if (v && (b = d = (l = (c = (f = (p = t)[_] || (p[_] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === x && l[1]), 
!1 === b) for (;(p = ++d && p && p[g] || (b = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (v && ((c = (f = p[_] || (p[_] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ x, b ]), 
p !== t)); ) ;
return (b -= i) === r || b % r == 0 && 0 <= b / r;
}
};
},
PSEUDO: function(e, t) {
var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
return i[_] ? i(t) : 1 < i.length ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
for (var r, o = i(e, t), u = o.length; u--; ) e[r = L(e, o[u])] = !(n[r] = o[u]);
}) : function(e) {
return i(e, 0, n);
}) : i;
}
},
pseudos: {
not: le(function(e) {
var t = [], n = [], r = a(e.replace(U, "$1"));
return r[_] ? le(function(e, t, n, i) {
for (var o, u = r(e, null, i, []), a = e.length; a--; ) (o = u[a]) && (e[a] = !(t[a] = o));
}) : function(e, i, o) {
return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
};
}),
has: le(function(e) {
return function(t) {
return 0 < ae(e, t).length;
};
}),
contains: le(function(e) {
return e = e.replace(te, ne), function(t) {
return -1 < (t.textContent || i(t)).indexOf(e);
};
}),
lang: le(function(e) {
return Y.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), 
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
return J.test(e.nodeName);
},
input: function(e) {
return Z.test(e.nodeName);
},
button: function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && "button" === e.type || "button" === t;
},
text: function(e) {
var t;
return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
},
first: ye(function() {
return [ 0 ];
}),
last: ye(function(e, t) {
return [ t - 1 ];
}),
eq: ye(function(e, t, n) {
return [ n < 0 ? n + t : n ];
}),
even: ye(function(e, t) {
for (var n = 0; n < t; n += 2) e.push(n);
return e;
}),
odd: ye(function(e, t) {
for (var n = 1; n < t; n += 2) e.push(n);
return e;
}),
lt: ye(function(e, t, n) {
for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
return e;
}),
gt: ye(function(e, t, n) {
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
}) r.pseudos[t] = he(t);
function ve() {}
function be(e) {
for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
return r;
}
function _e(e, t, n) {
var r = t.dir, i = t.next, o = i || r, u = n && "parentNode" === o, a = A++;
return t.first ? function(t, n, i) {
for (;t = t[r]; ) if (1 === t.nodeType || u) return e(t, n, i);
return !1;
} : function(t, n, s) {
var l, c, f, p = [ x, a ];
if (s) {
for (;t = t[r]; ) if ((1 === t.nodeType || u) && e(t, n, s)) return !0;
} else for (;t = t[r]; ) if (1 === t.nodeType || u) if (c = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), 
i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
if ((l = c[o]) && l[0] === x && l[1] === a) return p[2] = l[2];
if ((c[o] = p)[2] = e(t, n, s)) return !0;
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
for (var o, u = [], a = 0, s = e.length, l = null != t; a < s; a++) (o = e[a]) && (n && !n(o, r, i) || (u.push(o), 
l && t.push(a)));
return u;
}
function Ae(e, t, n, r, i, o) {
return r && !r[_] && (r = Ae(r)), i && !i[_] && (i = Ae(i, o)), le(function(o, u, a, s) {
var l, c, f, p = [], d = [], h = u.length, g = o || function(e, t, n) {
for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
return n;
}(t || "*", a.nodeType ? [ a ] : a, []), y = !e || !o && t ? g : xe(g, p, e, a, s), m = n ? i || (o ? e : h || r) ? [] : u : y;
if (n && n(y, m, a, s), r) for (l = xe(m, d), r(l, [], a, s), c = l.length; c--; ) (f = l[c]) && (m[d[c]] = !(y[d[c]] = f));
if (o) {
if (i || e) {
if (i) {
for (l = [], c = m.length; c--; ) (f = m[c]) && l.push(y[c] = f);
i(null, m = [], l, s);
}
for (c = m.length; c--; ) (f = m[c]) && -1 < (l = i ? L(o, f) : p[c]) && (o[l] = !(u[l] = f));
}
} else m = xe(m === u ? m.splice(h, m.length) : m), i ? i(null, u, m, s) : P.apply(u, m);
});
}
function Ee(e) {
for (var t, n, i, o = e.length, u = r.relative[e[0].type], a = u || r.relative[" "], s = u ? 1 : 0, c = _e(function(e) {
return e === t;
}, a, !0), f = _e(function(e) {
return -1 < L(t, e);
}, a, !0), p = [ function(e, n, r) {
var i = !u && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
return t = null, i;
} ]; s < o; s++) if (n = r.relative[e[s].type]) p = [ _e(we(p), n) ]; else {
if ((n = r.filter[e[s].type].apply(null, e[s].matches))[_]) {
for (i = ++s; i < o && !r.relative[e[i].type]; i++) ;
return Ae(1 < s && we(p), 1 < s && be(e.slice(0, s - 1).concat({
value: " " === e[s - 2].type ? "*" : ""
})).replace(U, "$1"), n, s < i && Ee(e.slice(s, i)), i < o && Ee(e = e.slice(i)), i < o && be(e));
}
p.push(n);
}
return we(p);
}
return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), u = ae.tokenize = function(e, t) {
var n, i, o, u, a, s, l, c = T[e + " "];
if (c) return t ? 0 : c.slice(0);
for (a = e, s = [], l = r.preFilter; a; ) {
for (u in n && !(i = G.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), 
n = !1, (i = B.exec(a)) && (n = i.shift(), o.push({
value: n,
type: i[0].replace(U, " ")
}), a = a.slice(n.length)), r.filter) !(i = K[u].exec(a)) || l[u] && !(i = l[u](i)) || (n = i.shift(), 
o.push({
value: n,
type: u,
matches: i
}), a = a.slice(n.length));
if (!n) break;
}
return t ? a.length : a ? ae.error(e) : T(e, s).slice(0);
}, a = ae.compile = function(e, t) {
var n, i, o, a, s, c, f = [], h = [], y = S[e + " "];
if (!y) {
for (t || (t = u(e)), n = t.length; n--; ) (y = Ee(t[n]))[_] ? f.push(y) : h.push(y);
(y = S(e, (i = h, a = 0 < (o = f).length, s = 0 < i.length, c = function(e, t, n, u, c) {
var f, h, y, m = 0, v = "0", b = e && [], _ = [], w = l, A = e || s && r.find.TAG("*", c), E = x += null == w ? 1 : Math.random() || .1, T = A.length;
for (c && (l = t === d || t || c); v !== T && null != (f = A[v]); v++) {
if (s && f) {
for (h = 0, t || f.ownerDocument === d || (p(f), n = !g); y = i[h++]; ) if (y(f, t || d, n)) {
u.push(f);
break;
}
c && (x = E);
}
a && ((f = !y && f) && m--, e && b.push(f));
}
if (m += v, a && v !== m) {
for (h = 0; y = o[h++]; ) y(b, _, t, n);
if (e) {
if (0 < m) for (;v--; ) b[v] || _[v] || (_[v] = R.call(u));
_ = xe(_);
}
P.apply(u, _), c && !e && 0 < _.length && 1 < m + o.length && ae.uniqueSort(u);
}
return c && (x = E, l = w), b;
}, a ? le(c) : c))).selector = e;
}
return y;
}, s = ae.select = function(e, t, n, i) {
var o, s, l, c, f, p = "function" == typeof e && e, d = !i && u(e = p.selector || e);
if (n = n || [], 1 === d.length) {
if (2 < (s = d[0] = d[0].slice(0)).length && "ID" === (l = s[0]).type && 9 === t.nodeType && g && r.relative[s[1].type]) {
if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
p && (t = t.parentNode), e = e.slice(s.shift().value.length);
}
for (o = K.needsContext.test(e) ? 0 : s.length; o-- && (l = s[o], !r.relative[c = l.type]); ) if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(s[0].type) && me(t.parentNode) || t))) {
if (s.splice(o, 1), !(e = i.length && be(s))) return P.apply(n, i), n;
break;
}
}
return (p || a(e, d))(i, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t), n;
}, n.sortStable = _.split("").sort(C).join("") === _, n.detectDuplicates = !!f, 
p(), n.sortDetached = ce(function(e) {
return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
}), ce(function(e) {
return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
}) || fe("type|href|height|width", function(e, t, n) {
if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
}), n.attributes && ce(function(e) {
return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}) || fe("value", function(e, t, n) {
if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
}), ce(function(e) {
return null == e.getAttribute("disabled");
}) || fe(z, function(e, t, n) {
var r;
if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
}), ae;
}(n);
T.find = C, T.expr = C.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = C.uniqueSort, 
T.text = C.getText, T.isXMLDoc = C.isXML, T.contains = C.contains, T.escapeSelector = C.escape;
var O = function(e, t, n) {
for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
if (i && T(e).is(n)) break;
r.push(e);
}
return r;
}, k = function(e, t) {
for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
return n;
}, R = T.expr.match.needsContext;
function M(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
}
var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function N(e, t, n) {
return b(t) ? T.grep(e, function(e, r) {
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
return this.pushStack(N(this, e || [], !1));
},
not: function(e) {
return this.pushStack(N(this, e || [], !0));
},
is: function(e) {
return !!N(this, "string" == typeof e && R.test(e) ? T(e) : e || [], !1).length;
}
});
var L, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(T.fn.init = function(e, t, n) {
var r, i;
if (!e) return this;
if (n = n || L, "string" == typeof e) {
if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : z.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
if (r[1]) {
if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), 
P.test(r[1]) && T.isPlainObject(t)) for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
return this;
}
return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
}
return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
}).prototype = T.fn, L = T(a);
var I = /^(?:parents|prev(?:Until|All))/, D = {
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
var n, r = 0, i = this.length, o = [], u = "string" != typeof e && T(e);
if (!R.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (u ? -1 < u.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
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
return O(e, "parentNode");
},
parentsUntil: function(e, t, n) {
return O(e, "parentNode", n);
},
next: function(e) {
return $(e, "nextSibling");
},
prev: function(e) {
return $(e, "previousSibling");
},
nextAll: function(e) {
return O(e, "nextSibling");
},
prevAll: function(e) {
return O(e, "previousSibling");
},
nextUntil: function(e, t, n) {
return O(e, "nextSibling", n);
},
prevUntil: function(e, t, n) {
return O(e, "previousSibling", n);
},
siblings: function(e) {
return k((e.parentNode || {}).firstChild, e);
},
children: function(e) {
return k(e.firstChild);
},
contents: function(e) {
return void 0 !== e.contentDocument ? e.contentDocument : (M(e, "template") && (e = e.content || e), 
T.merge([], e.childNodes));
}
}, function(e, t) {
T.fn[e] = function(n, r) {
var i = T.map(this, t, n);
return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), 
1 < this.length && (D[e] || T.uniqueSort(i), I.test(e) && i.reverse()), this.pushStack(i);
};
});
var H = /[^\x20\t\r\n\f]+/g;
function F(e) {
return e;
}
function U(e) {
throw e;
}
function G(e, t, n, r) {
var i;
try {
e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
} catch (e) {
n.apply(void 0, [ e ]);
}
}
T.Callbacks = function(e) {
var t, n;
e = "string" == typeof e ? (t = e, n = {}, T.each(t.match(H) || [], function(e, t) {
n[t] = !0;
}), n) : T.extend({}, e);
var r, i, o, u, a = [], s = [], l = -1, c = function() {
for (u = u || e.once, o = r = !0; s.length; l = -1) for (i = s.shift(); ++l < a.length; ) !1 === a[l].apply(i[0], i[1]) && e.stopOnFalse && (l = a.length, 
i = !1);
e.memory || (i = !1), r = !1, u && (a = i ? [] : "");
}, f = {
add: function() {
return a && (i && !r && (l = a.length - 1, s.push(i)), function t(n) {
T.each(n, function(n, r) {
b(r) ? e.unique && f.has(r) || a.push(r) : r && r.length && "string" !== A(r) && t(r);
});
}(arguments), i && !r && c()), this;
},
remove: function() {
return T.each(arguments, function(e, t) {
for (var n; -1 < (n = T.inArray(t, a, n)); ) a.splice(n, 1), n <= l && l--;
}), this;
},
has: function(e) {
return e ? -1 < T.inArray(e, a) : 0 < a.length;
},
empty: function() {
return a && (a = []), this;
},
disable: function() {
return u = s = [], a = i = "", this;
},
disabled: function() {
return !a;
},
lock: function() {
return u = s = [], i || r || (a = i = ""), this;
},
locked: function() {
return !!u;
},
fireWith: function(e, t) {
return u || (t = [ e, (t = t || []).slice ? t.slice() : t ], s.push(t), r || c()), 
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
function u(e, t, r, i) {
return function() {
var a = this, s = arguments, l = function() {
var n, l;
if (!(e < o)) {
if ((n = r.apply(a, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
l = n && ("object" == typeof n || "function" == typeof n) && n.then, b(l) ? i ? l.call(n, u(o, t, F, i), u(o, t, U, i)) : (o++, 
l.call(n, u(o, t, F, i), u(o, t, U, i), u(o, t, F, t.notifyWith))) : (r !== F && (a = void 0, 
s = [ n ]), (i || t.resolveWith)(a, s));
}
}, c = i ? l : function() {
try {
l();
} catch (n) {
T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), o <= e + 1 && (r !== U && (a = void 0, 
s = [ n ]), t.rejectWith(a, s));
}
};
e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), 
n.setTimeout(c));
};
}
return T.Deferred(function(n) {
t[0][3].add(u(0, n, b(i) ? i : F, n.notifyWith)), t[1][3].add(u(0, n, b(e) ? e : F)), 
t[2][3].add(u(0, n, b(r) ? r : U));
}).promise();
},
promise: function(e) {
return null != e ? T.extend(e, i) : i;
}
}, o = {};
return T.each(t, function(e, n) {
var u = n[2], a = n[5];
i[n[1]] = u.add, a && u.add(function() {
r = a;
}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), u.add(n[3].fire), 
o[n[0]] = function() {
return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
}, o[n[0] + "With"] = u.fireWith;
}), i.promise(o), e && e.call(o, o), o;
},
when: function(e) {
var t = arguments.length, n = t, r = Array(n), i = l.call(arguments), o = T.Deferred(), u = function(e) {
return function(n) {
r[e] = this, i[e] = 1 < arguments.length ? l.call(arguments) : n, --t || o.resolveWith(r, i);
};
};
if (t <= 1 && (G(e, o.done(u(n)).resolve, o.reject, !t), "pending" === o.state() || b(i[n] && i[n].then))) return o.then();
for (;n--; ) G(i[n], u(n), o.reject);
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
var q = T.Deferred();
function W() {
a.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), 
T.ready();
}
T.fn.ready = function(e) {
return q.then(e).catch(function(e) {
T.readyException(e);
}), this;
}, T.extend({
isReady: !1,
readyWait: 1,
ready: function(e) {
(!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || q.resolveWith(a, [ T ]);
}
}), T.ready.then = q.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", W), 
n.addEventListener("load", W));
var Y = function(e, t, n, r, i, o, u) {
var a = 0, s = e.length, l = null == n;
if ("object" === A(n)) for (a in i = !0, n) Y(e, t, a, n[a], !0, o, u); else if (void 0 !== r && (i = !0, 
b(r) || (u = !0), l && (u ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
return l.call(T(e), n);
})), t)) for (;a < s; a++) t(e[a], n, u ? r : r.call(e[a], a, t(e[a], n)));
return i ? e : l ? t.call(e) : s ? t(e[0], n) : o;
}, K = /^-ms-/, V = /-([a-z])/g;
function Z(e, t) {
return t.toUpperCase();
}
function J(e) {
return e.replace(K, "ms-").replace(V, Z);
}
var Q = function(e) {
return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
};
function X() {
this.expando = T.expando + X.uid++;
}
X.uid = 1, X.prototype = {
cache: function(e) {
var t = e[this.expando];
return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
value: t,
configurable: !0
}))), t;
},
set: function(e, t, n) {
var r, i = this.cache(e);
if ("string" == typeof t) i[J(t)] = n; else for (r in t) i[J(r)] = t[r];
return i;
},
get: function(e, t) {
return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)];
},
access: function(e, t, n) {
return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
void 0 !== n ? n : t);
},
remove: function(e, t) {
var n, r = e[this.expando];
if (void 0 !== r) {
if (void 0 !== t) {
n = (t = Array.isArray(t) ? t.map(J) : (t = J(t)) in r ? [ t ] : t.match(H) || []).length;
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
var ee = new X(), te = new X(), ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, re = /[A-Z]/g;
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
var n, r, i, o = this[0], u = o && o.attributes;
if (void 0 === e) {
if (this.length && (i = te.get(o), 1 === o.nodeType && !ee.get(o, "hasDataAttrs"))) {
for (n = u.length; n--; ) u[n] && 0 === (r = u[n].name).indexOf("data-") && (r = J(r.slice(5)), 
ie(o, r, i[r]));
ee.set(o, "hasDataAttrs", !0);
}
return i;
}
return "object" == typeof e ? this.each(function() {
te.set(this, e);
}) : Y(this, function(t) {
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
var n, r = 1, i = T.Deferred(), o = this, u = this.length, a = function() {
--r || i.resolveWith(o, [ o ]);
};
for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; u--; ) (n = ee.get(o[u], e + "queueHooks")) && n.empty && (r++, 
n.empty.add(a));
return a(), i.promise(t);
}
});
var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ue = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"), ae = [ "Top", "Right", "Bottom", "Left" ], se = a.documentElement, le = function(e) {
return T.contains(e.ownerDocument, e);
}, ce = {
composed: !0
};
se.getRootNode && (le = function(e) {
return T.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument;
});
var fe = function(e, t) {
return "none" === (e = t || e).style.display || "" === e.style.display && le(e) && "none" === T.css(e, "display");
}, pe = function(e, t, n, r) {
var i, o, u = {};
for (o in t) u[o] = e.style[o], e.style[o] = t[o];
for (o in i = n.apply(e, r || []), t) e.style[o] = u[o];
return i;
};
function de(e, t, n, r) {
var i, o, u = 20, a = r ? function() {
return r.cur();
} : function() {
return T.css(e, t, "");
}, s = a(), l = n && n[3] || (T.cssNumber[t] ? "" : "px"), c = e.nodeType && (T.cssNumber[t] || "px" !== l && +s) && ue.exec(T.css(e, t));
if (c && c[3] !== l) {
for (s /= 2, l = l || c[3], c = +s || 1; u--; ) T.style(e, t, c + l), (1 - o) * (1 - (o = a() / s || .5)) <= 0 && (u = 0), 
c /= o;
c *= 2, T.style(e, t, c + l), n = n || [];
}
return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
r.start = c, r.end = i)), i;
}
var he = {};
function ge(e, t) {
for (var n, r, i, o, u, a, s, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, 
t ? ("none" === n && (l[c] = ee.get(r, "display") || null, l[c] || (r.style.display = "")), 
"" === r.style.display && fe(r) && (l[c] = (s = u = o = void 0, u = (i = r).ownerDocument, 
a = i.nodeName, (s = he[a]) || (o = u.body.appendChild(u.createElement(a)), s = T.css(o, "display"), 
o.parentNode.removeChild(o), "none" === s && (s = "block"), he[a] = s)))) : "none" !== n && (l[c] = "none", 
ee.set(r, "display", n)));
for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
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
var ye = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ve = /^$|^module$|\/(?:java|ecma)script/i, be = {
option: [ 1, "<select multiple='multiple'>", "</select>" ],
thead: [ 1, "<table>", "</table>" ],
col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
tr: [ 2, "<table><tbody>", "</tbody></table>" ],
td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
_default: [ 0, "", "" ]
};
function _e(e, t) {
var n;
return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
void 0 === t || t && M(e, t) ? T.merge([ e ], n) : n;
}
function we(e, t) {
for (var n = 0, r = e.length; n < r; n++) ee.set(e[n], "globalEval", !t || ee.get(t[n], "globalEval"));
}
be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, 
be.th = be.td;
var xe, Ae, Ee = /<|&#?\w+;/;
function Te(e, t, n, r, i) {
for (var o, u, a, s, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === A(o)) T.merge(p, o.nodeType ? [ o ] : o); else if (Ee.test(o)) {
for (u = u || f.appendChild(t.createElement("div")), a = (me.exec(o) || [ "", "" ])[1].toLowerCase(), 
s = be[a] || be._default, u.innerHTML = s[1] + T.htmlPrefilter(o) + s[2], c = s[0]; c--; ) u = u.lastChild;
T.merge(p, u.childNodes), (u = f.firstChild).textContent = "";
} else p.push(t.createTextNode(o));
for (f.textContent = "", d = 0; o = p[d++]; ) if (r && -1 < T.inArray(o, r)) i && i.push(o); else if (l = le(o), 
u = _e(f.appendChild(o), "script"), l && we(u), n) for (c = 0; o = u[c++]; ) ve.test(o.type || "") && n.push(o);
return f;
}
xe = a.createDocumentFragment().appendChild(a.createElement("div")), (Ae = a.createElement("input")).setAttribute("type", "radio"), 
Ae.setAttribute("checked", "checked"), Ae.setAttribute("name", "t"), xe.appendChild(Ae), 
v.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", 
v.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
var Se = /^key/, je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;
function Oe() {
return !0;
}
function ke() {
return !1;
}
function Re(e, t) {
return e === function() {
try {
return a.activeElement;
} catch (e) {}
}() == ("focus" === t);
}
function Me(e, t, n, r, i, o) {
var u, a;
if ("object" == typeof t) {
for (a in "string" != typeof n && (r = r || n, n = void 0), t) Me(e, a, n, r, t[a], o);
return e;
}
if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
return 1 === o && (u = i, (i = function(e) {
return T().off(e), u.apply(this, arguments);
}).guid = u.guid || (u.guid = T.guid++)), e.each(function() {
T.event.add(this, t, i, r, n);
});
}
function Pe(e, t, n) {
n ? (ee.set(e, t, !1), T.event.add(e, t, {
namespace: !1,
handler: function(e) {
var r, i, o = ee.get(this, t);
if (1 & e.isTrigger && this[t]) {
if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation(); else if (o = l.call(arguments), 
ee.set(this, t, o), r = n(this, t), this[t](), o !== (i = ee.get(this, t)) || r ? ee.set(this, t, !1) : i = {}, 
o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
} else o.length && (ee.set(this, t, {
value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)
}), e.stopImmediatePropagation());
}
})) : void 0 === ee.get(e, t) && T.event.add(e, t, Oe);
}
T.event = {
global: {},
add: function(e, t, n, r, i) {
var o, u, a, s, l, c, f, p, d, h, g, y = ee.get(e);
if (y) for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(se, i), 
n.guid || (n.guid = T.guid++), (s = y.events) || (s = y.events = {}), (u = y.handle) || (u = y.handle = function(t) {
return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
}), l = (t = (t || "").match(H) || [ "" ]).length; l--; ) d = g = (a = Ce.exec(t[l]) || [])[1], 
h = (a[2] || "").split(".").sort(), d && (f = T.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
f = T.event.special[d] || {}, c = T.extend({
type: d,
origType: g,
data: r,
handler: n,
guid: n.guid,
selector: i,
needsContext: i && T.expr.match.needsContext.test(i),
namespace: h.join(".")
}, o), (p = s[d]) || ((p = s[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, u) || e.addEventListener && e.addEventListener(d, u)), 
f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
T.event.global[d] = !0);
},
remove: function(e, t, n, r, i) {
var o, u, a, s, l, c, f, p, d, h, g, y = ee.hasData(e) && ee.get(e);
if (y && (s = y.events)) {
for (l = (t = (t || "").match(H) || [ "" ]).length; l--; ) if (d = g = (a = Ce.exec(t[l]) || [])[1], 
h = (a[2] || "").split(".").sort(), d) {
for (f = T.event.special[d] || {}, p = s[d = (r ? f.delegateType : f.bindType) || d] || [], 
a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--; ) c = p[o], 
!i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
u && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || T.removeEvent(e, d, y.handle), 
delete s[d]);
} else for (d in s) T.event.remove(e, d + t[l], n, r, !0);
T.isEmptyObject(s) && ee.remove(e, "handle events");
}
},
dispatch: function(e) {
var t, n, r, i, o, u, a = T.event.fix(e), s = new Array(arguments.length), l = (ee.get(this, "events") || {})[a.type] || [], c = T.event.special[a.type] || {};
for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
for (u = T.event.handlers.call(this, a, l), t = 0; (i = u[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = i.elem, 
n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, 
a.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = r) && (a.preventDefault(), 
a.stopPropagation()));
return c.postDispatch && c.postDispatch.call(this, a), a.result;
}
},
handlers: function(e, t) {
var n, r, i, o, u, a = [], s = t.delegateCount, l = e.target;
if (s && l.nodeType && !("click" === e.type && 1 <= e.button)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
for (o = [], u = {}, n = 0; n < s; n++) void 0 === u[i = (r = t[n]).selector + " "] && (u[i] = r.needsContext ? -1 < T(i, this).index(l) : T.find(i, this, null, [ l ]).length), 
u[i] && o.push(r);
o.length && a.push({
elem: l,
handlers: o
});
}
return l = this, s < t.length && a.push({
elem: l,
handlers: t.slice(s)
}), a;
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
click: {
setup: function(e) {
var t = this || e;
return ye.test(t.type) && t.click && M(t, "input") && Pe(t, "click", Oe), !1;
},
trigger: function(e) {
var t = this || e;
return ye.test(t.type) && t.click && M(t, "input") && Pe(t, "click"), !0;
},
_default: function(e) {
var t = e.target;
return ye.test(t.type) && t.click && M(t, "input") && ee.get(t, "click") || M(t, "a");
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
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Oe : ke, 
this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
}, T.Event.prototype = {
constructor: T.Event,
isDefaultPrevented: ke,
isPropagationStopped: ke,
isImmediatePropagationStopped: ke,
isSimulated: !1,
preventDefault: function() {
var e = this.originalEvent;
this.isDefaultPrevented = Oe, e && !this.isSimulated && e.preventDefault();
},
stopPropagation: function() {
var e = this.originalEvent;
this.isPropagationStopped = Oe, e && !this.isSimulated && e.stopPropagation();
},
stopImmediatePropagation: function() {
var e = this.originalEvent;
this.isImmediatePropagationStopped = Oe, e && !this.isSimulated && e.stopImmediatePropagation(), 
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
return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
}
}, T.event.addProp), T.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
T.event.special[e] = {
setup: function() {
return Pe(this, e, Re), !1;
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
return Me(this, e, t, n, r);
},
one: function(e, t, n, r) {
return Me(this, e, t, n, r, 1);
},
off: function(e, t, n) {
var r, i;
if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
this;
if ("object" == typeof e) {
for (i in e) this.off(i, t, e[i]);
return this;
}
return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), 
this.each(function() {
T.event.remove(this, e, n, t);
});
}
});
var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Le = /<script|<style|<link/i, ze = /checked\s*(?:[^=]|=\s*.checked.)/i, Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function De(e, t) {
return M(e, "table") && M(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
}
function $e(e) {
return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
}
function He(e) {
return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
e;
}
function Fe(e, t) {
var n, r, i, o, u, a, s, l;
if (1 === t.nodeType) {
if (ee.hasData(e) && (o = ee.access(e), u = ee.set(t, o), l = o.events)) for (i in delete u.handle, 
u.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) T.event.add(t, i, l[i][n]);
te.hasData(e) && (a = te.access(e), s = T.extend({}, a), te.set(t, s));
}
}
function Ue(e, t, n, r) {
t = c.apply([], t);
var i, o, u, a, s, l, f = 0, p = e.length, d = p - 1, h = t[0], g = b(h);
if (g || 1 < p && "string" == typeof h && !v.checkClone && ze.test(h)) return e.each(function(i) {
var o = e.eq(i);
g && (t[0] = h.call(this, i, o.html())), Ue(o, t, n, r);
});
if (p && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), 
o || r)) {
for (a = (u = T.map(_e(i, "script"), $e)).length; f < p; f++) s = i, f !== d && (s = T.clone(s, !0, !0), 
a && T.merge(u, _e(s, "script"))), n.call(e[f], s, f);
if (a) for (l = u[u.length - 1].ownerDocument, T.map(u, He), f = 0; f < a; f++) s = u[f], 
ve.test(s.type || "") && !ee.access(s, "globalEval") && T.contains(l, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? T._evalUrl && !s.noModule && T._evalUrl(s.src, {
nonce: s.nonce || s.getAttribute("nonce")
}) : x(s.textContent.replace(Ie, ""), s, l));
}
return e;
}
function Ge(e, t, n) {
for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(_e(r)), 
r.parentNode && (n && le(r) && we(_e(r, "script")), r.parentNode.removeChild(r));
return e;
}
T.extend({
htmlPrefilter: function(e) {
return e.replace(Ne, "<$1></$2>");
},
clone: function(e, t, n) {
var r, i, o, u, a, s, l, c = e.cloneNode(!0), f = le(e);
if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (u = _e(c), 
r = 0, i = (o = _e(e)).length; r < i; r++) a = o[r], "input" === (l = (s = u[r]).nodeName.toLowerCase()) && ye.test(a.type) ? s.checked = a.checked : "input" !== l && "textarea" !== l || (s.defaultValue = a.defaultValue);
if (t) if (n) for (o = o || _e(e), u = u || _e(c), r = 0, i = o.length; r < i; r++) Fe(o[r], u[r]); else Fe(e, c);
return 0 < (u = _e(c, "script")).length && we(u, !f && _e(e, "script")), c;
},
cleanData: function(e) {
for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Q(n)) {
if (t = n[ee.expando]) {
if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
n[ee.expando] = void 0;
}
n[te.expando] && (n[te.expando] = void 0);
}
}
}), T.fn.extend({
detach: function(e) {
return Ge(this, e, !0);
},
remove: function(e) {
return Ge(this, e);
},
text: function(e) {
return Y(this, function(e) {
return void 0 === e ? T.text(this) : this.empty().each(function() {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
});
}, null, e, arguments.length);
},
append: function() {
return Ue(this, arguments, function(e) {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e);
});
},
prepend: function() {
return Ue(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = De(this, e);
t.insertBefore(e, t.firstChild);
}
});
},
before: function() {
return Ue(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
},
after: function() {
return Ue(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
});
},
empty: function() {
for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(_e(e, !1)), 
e.textContent = "");
return this;
},
clone: function(e, t) {
return e = null != e && e, t = null == t ? e : t, this.map(function() {
return T.clone(this, e, t);
});
},
html: function(e) {
return Y(this, function(e) {
var t = this[0] || {}, n = 0, r = this.length;
if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
if ("string" == typeof e && !Le.test(e) && !be[(me.exec(e) || [ "", "" ])[1].toLowerCase()]) {
e = T.htmlPrefilter(e);
try {
for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(_e(t, !1)), 
t.innerHTML = e);
t = 0;
} catch (e) {}
}
t && this.empty().append(e);
}, null, e, arguments.length);
},
replaceWith: function() {
var e = [];
return Ue(this, arguments, function(t) {
var n = this.parentNode;
T.inArray(this, e) < 0 && (T.cleanData(_e(this)), n && n.replaceChild(t, this));
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
for (var n, r = [], i = T(e), o = i.length - 1, u = 0; u <= o; u++) n = u === o ? this : this.clone(!0), 
T(i[u])[t](n), f.apply(r, n.get());
return this.pushStack(r);
};
});
var Be = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"), qe = function(e) {
var t = e.ownerDocument.defaultView;
return t && t.opener || (t = n), t.getComputedStyle(e);
}, We = new RegExp(ae.join("|"), "i");
function Ye(e, t, n) {
var r, i, o, u, a = e.style;
return (n = n || qe(e)) && ("" !== (u = n.getPropertyValue(t) || n[t]) || le(e) || (u = T.style(e, t)), 
!v.pixelBoxStyles() && Be.test(u) && We.test(t) && (r = a.width, i = a.minWidth, 
o = a.maxWidth, a.minWidth = a.maxWidth = a.width = u, u = n.width, a.width = r, 
a.minWidth = i, a.maxWidth = o)), void 0 !== u ? u + "" : u;
}
function Ke(e, t) {
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
l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
se.appendChild(l).appendChild(c);
var e = n.getComputedStyle(c);
r = "1%" !== e.top, s = 12 === t(e.marginLeft), c.style.right = "60%", u = 36 === t(e.right), 
i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), 
se.removeChild(l), c = null;
}
}
function t(e) {
return Math.round(parseFloat(e));
}
var r, i, o, u, s, l = a.createElement("div"), c = a.createElement("div");
c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
v.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(v, {
boxSizingReliable: function() {
return e(), i;
},
pixelBoxStyles: function() {
return e(), u;
},
pixelPosition: function() {
return e(), r;
},
reliableMarginLeft: function() {
return e(), s;
},
scrollboxSize: function() {
return e(), o;
}
}));
}();
var Ve = [ "Webkit", "Moz", "ms" ], Ze = a.createElement("div").style, Je = {};
function Qe(e) {
var t;
return T.cssProps[e] || Je[e] || (e in Ze ? e : Je[e] = function(e) {
for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--; ) if ((e = Ve[n] + t) in Ze) return e;
}(e) || e);
}
var Xe = /^(none|table(?!-c[ea]).+)/, et = /^--/, tt = {
position: "absolute",
visibility: "hidden",
display: "block"
}, nt = {
letterSpacing: "0",
fontWeight: "400"
};
function rt(e, t, n) {
var r = ue.exec(t);
return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
}
function it(e, t, n, r, i, o) {
var u = "width" === t ? 1 : 0, a = 0, s = 0;
if (n === (r ? "border" : "content")) return 0;
for (;u < 4; u += 2) "margin" === n && (s += T.css(e, n + ae[u], !0, i)), r ? ("content" === n && (s -= T.css(e, "padding" + ae[u], !0, i)), 
"margin" !== n && (s -= T.css(e, "border" + ae[u] + "Width", !0, i))) : (s += T.css(e, "padding" + ae[u], !0, i), 
"padding" !== n ? s += T.css(e, "border" + ae[u] + "Width", !0, i) : a += T.css(e, "border" + ae[u] + "Width", !0, i));
return !r && 0 <= o && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - a - .5)) || 0), 
s;
}
function ot(e, t, n) {
var r = qe(e), i = (!v.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r), o = i, u = Ye(e, t, r), a = "offset" + t[0].toUpperCase() + t.slice(1);
if (Be.test(u)) {
if (!n) return u;
u = "auto";
}
return (!v.boxSizingReliable() && i || "auto" === u || !parseFloat(u) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, r), 
(o = a in e) && (u = e[a])), (u = parseFloat(u) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, u) + "px";
}
function ut(e, t, n, r, i) {
return new ut.prototype.init(e, t, n, r, i);
}
T.extend({
cssHooks: {
opacity: {
get: function(e, t) {
if (t) {
var n = Ye(e, "opacity");
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
var i, o, u, a = J(t), s = et.test(t), l = e.style;
if (s || (t = Qe(a)), u = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return u && "get" in u && void 0 !== (i = u.get(e, !1, r)) ? i : l[t];
"string" == (o = typeof n) && (i = ue.exec(n)) && i[1] && (n = de(e, t, i), o = "number"), 
null != n && n == n && ("number" !== o || s || (n += i && i[3] || (T.cssNumber[a] ? "" : "px")), 
v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
u && "set" in u && void 0 === (n = u.set(e, n, r)) || (s ? l.setProperty(t, n) : l[t] = n));
}
},
css: function(e, t, n, r) {
var i, o, u, a = J(t);
return et.test(t) || (t = Qe(a)), (u = T.cssHooks[t] || T.cssHooks[a]) && "get" in u && (i = u.get(e, !0, n)), 
void 0 === i && (i = Ye(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), 
!0 === n || isFinite(o) ? o || 0 : i) : i;
}
}), T.each([ "height", "width" ], function(e, t) {
T.cssHooks[t] = {
get: function(e, n, r) {
if (n) return !Xe.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, r) : pe(e, tt, function() {
return ot(e, t, r);
});
},
set: function(e, n, r) {
var i, o = qe(e), u = !v.scrollboxSize() && "absolute" === o.position, a = (u || r) && "border-box" === T.css(e, "boxSizing", !1, o), s = r ? it(e, t, r, a, o) : 0;
return a && u && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - it(e, t, "border", !1, o) - .5)), 
s && (i = ue.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), 
rt(0, n, s);
}
};
}), T.cssHooks.marginLeft = Ke(v.reliableMarginLeft, function(e, t) {
if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - pe(e, {
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
return Y(this, function(e, t, n) {
var r, i, o = {}, u = 0;
if (Array.isArray(t)) {
for (r = qe(e), i = t.length; u < i; u++) o[t[u]] = T.css(e, t[u], !1, r);
return o;
}
return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
}, e, t, 1 < arguments.length);
}
}), ((T.Tween = ut).prototype = {
constructor: ut,
init: function(e, t, n, r, i, o) {
this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, 
this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px");
},
cur: function() {
var e = ut.propHooks[this.prop];
return e && e.get ? e.get(this) : ut.propHooks._default.get(this);
},
run: function(e) {
var t, n = ut.propHooks[this.prop];
return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
n && n.set ? n.set(this) : ut.propHooks._default.set(this), this;
}
}).init.prototype = ut.prototype, (ut.propHooks = {
_default: {
get: function(e) {
var t;
return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
},
set: function(e) {
T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
}
}
}).scrollTop = ut.propHooks.scrollLeft = {
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
}, T.fx = ut.prototype.init, T.fx.step = {};
var at, st, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
function dt() {
st && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(dt) : n.setTimeout(dt, T.fx.interval), 
T.fx.tick());
}
function ht() {
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
function yt(e, t, n) {
for (var r, i = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), o = 0, u = i.length; o < u; o++) if (r = i[o].call(n, t, e)) return r;
}
function mt(e, t, n) {
var r, i, o = 0, u = mt.prefilters.length, a = T.Deferred().always(function() {
delete s.elem;
}), s = function() {
if (i) return !1;
for (var t = at || ht(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, u = l.tweens.length; o < u; o++) l.tweens[o].run(r);
return a.notifyWith(e, [ l, r, n ]), r < 1 && u ? n : (u || a.notifyWith(e, [ l, 1, 0 ]), 
a.resolveWith(e, [ l ]), !1);
}, l = a.promise({
elem: e,
props: T.extend({}, t),
opts: T.extend(!0, {
specialEasing: {},
easing: T.easing._default
}, n),
originalProperties: t,
originalOptions: n,
startTime: at || ht(),
duration: n.duration,
tweens: [],
createTween: function(t, n) {
var r = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
return l.tweens.push(r), r;
},
stop: function(t) {
var n = 0, r = t ? l.tweens.length : 0;
if (i) return this;
for (i = !0; n < r; n++) l.tweens[n].run(1);
return t ? (a.notifyWith(e, [ l, 1, 0 ]), a.resolveWith(e, [ l, t ])) : a.rejectWith(e, [ l, t ]), 
this;
}
}), c = l.props;
for (function(e, t) {
var n, r, i, o, u;
for (n in e) if (i = t[r = J(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
n !== r && (e[r] = o, delete e[n]), (u = T.cssHooks[r]) && "expand" in u) for (n in o = u.expand(o), 
delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
}(c, l.opts.specialEasing); o < u; o++) if (r = mt.prefilters[o].call(l, e, c, l.opts)) return b(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), 
r;
return T.map(c, yt, l), b(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
T.fx.timer(T.extend(s, {
elem: e,
anim: l,
queue: l.opts.queue
})), l;
}
T.Animation = T.extend(mt, {
tweeners: {
"*": [ function(e, t) {
var n = this.createTween(e, t);
return de(n.elem, e, ue.exec(t), n), n;
} ]
},
tweener: function(e, t) {
b(e) ? (t = e, e = [ "*" ]) : e = e.match(H);
for (var n, r = 0, i = e.length; r < i; r++) n = e[r], mt.tweeners[n] = mt.tweeners[n] || [], 
mt.tweeners[n].unshift(t);
},
prefilters: [ function(e, t, n) {
var r, i, o, u, a, s, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && fe(e), y = ee.get(e, "fxshow");
for (r in n.queue || (null == (u = T._queueHooks(e, "fx")).unqueued && (u.unqueued = 0, 
a = u.empty.fire, u.empty.fire = function() {
u.unqueued || a();
}), u.unqueued++, p.always(function() {
p.always(function() {
u.unqueued--, T.queue(e, "fx").length || u.empty.fire();
});
})), t) if (i = t[r], ft.test(i)) {
if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
if ("show" !== i || !y || void 0 === y[r]) continue;
g = !0;
}
d[r] = y && y[r] || T.style(e, r);
}
if ((s = !T.isEmptyObject(t)) || !T.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
null == (l = y && y.display) && (l = ee.get(e, "display")), "none" === (c = T.css(e, "display")) && (l ? c = l : (ge([ e ], !0), 
l = e.style.display || l, c = T.css(e, "display"), ge([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(e, "float") && (s || (p.done(function() {
h.display = l;
}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
n.overflow && (h.overflow = "hidden", p.always(function() {
h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
})), s = !1, d) s || (y ? "hidden" in y && (g = y.hidden) : y = ee.access(e, "fxshow", {
display: l
}), o && (y.hidden = !g), g && ge([ e ], !0), p.done(function() {
for (r in g || ge([ e ]), ee.remove(e, "fxshow"), d) T.style(e, r, d[r]);
})), s = yt(g ? y[r] : 0, r, p), r in y || (y[r] = s.start, g && (s.end = s.start, 
s.start = 0));
} ],
prefilter: function(e, t) {
t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
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
return this.filter(fe).css("opacity", 0).show().end().animate({
opacity: t
}, e, n, r);
},
animate: function(e, t, n, r) {
var i = T.isEmptyObject(e), o = T.speed(t, n, r), u = function() {
var t = mt(this, T.extend({}, e), o);
(i || ee.get(this, "finish")) && t.stop(!0);
};
return u.finish = u, i || !1 === o.queue ? this.each(u) : this.queue(o.queue, u);
},
stop: function(e, t, n) {
var r = function(e) {
var t = e.stop;
delete e.stop, t(n);
};
return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
this.each(function() {
var t = !0, i = null != e && e + "queueHooks", o = T.timers, u = ee.get(this);
if (i) u[i] && u[i].stop && r(u[i]); else for (i in u) u[i] && u[i].stop && pt.test(i) && r(u[i]);
for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
t = !1, o.splice(i, 1));
!t && n || T.dequeue(this, e);
});
},
finish: function(e) {
return !1 !== e && (e = e || "fx"), this.each(function() {
var t, n = ee.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = T.timers, u = r ? r.length : 0;
for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
o.splice(t, 1));
for (t = 0; t < u; t++) r[t] && r[t].finish && r[t].finish.call(this);
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
st || (st = !0, dt());
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
}, lt = a.createElement("input"), ct = a.createElement("select").appendChild(a.createElement("option")), 
lt.type = "checkbox", v.checkOn = "" !== lt.value, v.optSelected = ct.selected, 
(lt = a.createElement("input")).value = "t", lt.type = "radio", v.radioValue = "t" === lt.value;
var vt, bt = T.expr.attrHandle;
T.fn.extend({
attr: function(e, t) {
return Y(this, T.attr, e, t, 1 < arguments.length);
},
removeAttr: function(e) {
return this.each(function() {
T.removeAttr(this, e);
});
}
}), T.extend({
attr: function(e, t, n) {
var r, i, o = e.nodeType;
if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? vt : void 0)), 
void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
},
attrHooks: {
type: {
set: function(e, t) {
if (!v.radioValue && "radio" === t && M(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
}
},
removeAttr: function(e, t) {
var n, r = 0, i = t && t.match(H);
if (i && 1 === e.nodeType) for (;n = i[r++]; ) e.removeAttribute(n);
}
}), vt = {
set: function(e, t, n) {
return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
}
}, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = bt[t] || T.find.attr;
bt[t] = function(e, t, r) {
var i, o, u = t.toLowerCase();
return r || (o = bt[u], bt[u] = i, i = null != n(e, t, r) ? u : null, bt[u] = o), 
i;
};
});
var _t = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
function xt(e) {
return (e.match(H) || []).join(" ");
}
function At(e) {
return e.getAttribute && e.getAttribute("class") || "";
}
function Et(e) {
return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [];
}
T.fn.extend({
prop: function(e, t) {
return Y(this, T.prop, e, t, 1 < arguments.length);
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
return t ? parseInt(t, 10) : _t.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
}
}
},
propFix: {
for: "htmlFor",
class: "className"
}
}), v.optSelected || (T.propHooks.selected = {
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
var t, n, r, i, o, u, a, s = 0;
if (b(e)) return this.each(function(t) {
T(this).addClass(e.call(this, t, At(this)));
});
if ((t = Et(e)).length) for (;n = this[s++]; ) if (i = At(n), r = 1 === n.nodeType && " " + xt(i) + " ") {
for (u = 0; o = t[u++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
i !== (a = xt(r)) && n.setAttribute("class", a);
}
return this;
},
removeClass: function(e) {
var t, n, r, i, o, u, a, s = 0;
if (b(e)) return this.each(function(t) {
T(this).removeClass(e.call(this, t, At(this)));
});
if (!arguments.length) return this.attr("class", "");
if ((t = Et(e)).length) for (;n = this[s++]; ) if (i = At(n), r = 1 === n.nodeType && " " + xt(i) + " ") {
for (u = 0; o = t[u++]; ) for (;-1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
i !== (a = xt(r)) && n.setAttribute("class", a);
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, r = "string" === n || Array.isArray(e);
return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each(function(n) {
T(this).toggleClass(e.call(this, n, At(this), t), t);
}) : this.each(function() {
var t, i, o, u;
if (r) for (i = 0, o = T(this), u = Et(e); t = u[i++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = At(this)) && ee.set(this, "__className__", t), 
this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ee.get(this, "__className__") || ""));
});
},
hasClass: function(e) {
var t, n, r = 0;
for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && -1 < (" " + xt(At(n)) + " ").indexOf(t)) return !0;
return !1;
}
});
var Tt = /\r/g;
T.fn.extend({
val: function(e) {
var t, n, r, i = this[0];
return arguments.length ? (r = b(e), this.each(function(n) {
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
var t, n, r, i = e.options, o = e.selectedIndex, u = "select-one" === e.type, a = u ? null : [], s = u ? o + 1 : i.length;
for (r = o < 0 ? s : u ? o : 0; r < s; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
if (t = T(n).val(), u) return t;
a.push(t);
}
return a;
},
set: function(e, t) {
for (var n, r, i = e.options, o = T.makeArray(t), u = i.length; u--; ) ((r = i[u]).selected = -1 < T.inArray(T.valHooks.option.get(r), o)) && (n = !0);
return n || (e.selectedIndex = -1), o;
}
}
}
}), T.each([ "radio", "checkbox" ], function() {
T.valHooks[this] = {
set: function(e, t) {
if (Array.isArray(t)) return e.checked = -1 < T.inArray(T(e).val(), t);
}
}, v.checkOn || (T.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" : e.value;
});
}), v.focusin = "onfocusin" in n;
var St = /^(?:focusinfocus|focusoutblur)$/, jt = function(e) {
e.stopPropagation();
};
T.extend(T.event, {
trigger: function(e, t, r, i) {
var o, u, s, l, c, f, p, d, h = [ r || a ], y = g.call(e, "type") ? e.type : e, m = g.call(e, "namespace") ? e.namespace.split(".") : [];
if (u = d = s = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(y + T.event.triggered) && (-1 < y.indexOf(".") && (y = (m = y.split(".")).shift(), 
m.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[T.expando] ? e : new T.Event(y, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
e.result = void 0, e.target || (e.target = r), t = null == t ? [ e ] : T.makeArray(t, [ e ]), 
p = T.event.special[y] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
if (!i && !p.noBubble && !_(r)) {
for (l = p.delegateType || y, St.test(l + y) || (u = u.parentNode); u; u = u.parentNode) h.push(u), 
s = u;
s === (r.ownerDocument || a) && h.push(s.defaultView || s.parentWindow || n);
}
for (o = 0; (u = h[o++]) && !e.isPropagationStopped(); ) d = u, e.type = 1 < o ? l : p.bindType || y, 
(f = (ee.get(u, "events") || {})[e.type] && ee.get(u, "handle")) && f.apply(u, t), 
(f = c && u[c]) && f.apply && Q(u) && (e.result = f.apply(u, t), !1 === e.result && e.preventDefault());
return e.type = y, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !Q(r) || c && b(r[y]) && !_(r) && ((s = r[c]) && (r[c] = null), 
T.event.triggered = y, e.isPropagationStopped() && d.addEventListener(y, jt), r[y](), 
e.isPropagationStopped() && d.removeEventListener(y, jt), T.event.triggered = void 0, 
s && (r[c] = s)), e.result;
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
}), v.focusin || T.each({
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
var Ct = n.location, Ot = Date.now(), kt = /\?/;
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
var Rt = /\[\]$/, Mt = /\r?\n/g, Pt = /^(?:submit|button|image|reset|file)$/i, Nt = /^(?:input|select|textarea|keygen)/i;
function Lt(e, t, n, r) {
var i;
if (Array.isArray(t)) T.each(t, function(t, i) {
n || Rt.test(e) ? r(e, i) : Lt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
}); else if (n || "object" !== A(t)) r(e, t); else for (i in t) Lt(e + "[" + i + "]", t[i], n, r);
}
T.param = function(e, t) {
var n, r = [], i = function(e, t) {
var n = b(t) ? t() : t;
r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
};
if (null == e) return "";
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
return this.name && !T(this).is(":disabled") && Nt.test(this.nodeName) && !Pt.test(e) && (this.checked || !ye.test(e));
}).map(function(e, t) {
var n = T(this).val();
return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
return {
name: t.name,
value: e.replace(Mt, "\r\n")
};
}) : {
name: t.name,
value: n.replace(Mt, "\r\n")
};
}).get();
}
});
var zt = /%20/g, It = /#.*$/, Dt = /([?&])_=[^&]*/, $t = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:GET|HEAD)$/, Ft = /^\/\//, Ut = {}, Gt = {}, Bt = "*/".concat("*"), qt = a.createElement("a");
function Wt(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var r, i = 0, o = t.toLowerCase().match(H) || [];
if (b(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
};
}
function Yt(e, t, n, r) {
var i = {}, o = e === Gt;
function u(a) {
var s;
return i[a] = !0, T.each(e[a] || [], function(e, a) {
var l = a(t, n, r);
return "string" != typeof l || o || i[l] ? o ? !(s = l) : void 0 : (t.dataTypes.unshift(l), 
u(l), !1);
}), s;
}
return u(t.dataTypes[0]) || !i["*"] && u("*");
}
function Kt(e, t) {
var n, r, i = T.ajaxSettings.flatOptions || {};
for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
return r && T.extend(!0, e, r), e;
}
qt.href = Ct.href, T.extend({
active: 0,
lastModified: {},
etag: {},
ajaxSettings: {
url: Ct.href,
type: "GET",
isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
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
return t ? Kt(Kt(e, T.ajaxSettings), t) : Kt(T.ajaxSettings, e);
},
ajaxPrefilter: Wt(Ut),
ajaxTransport: Wt(Gt),
ajax: function(e, t) {
"object" == typeof e && (t = e, e = void 0), t = t || {};
var r, i, o, u, s, l, c, f, p, d, h = T.ajaxSetup({}, t), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? T(g) : T.event, m = T.Deferred(), v = T.Callbacks("once memory"), b = h.statusCode || {}, _ = {}, w = {}, x = "canceled", A = {
readyState: 0,
getResponseHeader: function(e) {
var t;
if (c) {
if (!u) for (u = {}; t = $t.exec(o); ) u[t[1].toLowerCase() + " "] = (u[t[1].toLowerCase() + " "] || []).concat(t[2]);
t = u[e.toLowerCase() + " "];
}
return null == t ? null : t.join(", ");
},
getAllResponseHeaders: function() {
return c ? o : null;
},
setRequestHeader: function(e, t) {
return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), 
this;
},
overrideMimeType: function(e) {
return null == c && (h.mimeType = e), this;
},
statusCode: function(e) {
var t;
if (e) if (c) A.always(e[A.status]); else for (t in e) b[t] = [ b[t], e[t] ];
return this;
},
abort: function(e) {
var t = e || x;
return r && r.abort(t), E(0, t), this;
}
};
if (m.promise(A), h.url = ((e || h.url || Ct.href) + "").replace(Ft, Ct.protocol + "//"), 
h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [ "" ], 
null == h.crossDomain) {
l = a.createElement("a");
try {
l.href = h.url, l.href = l.href, h.crossDomain = qt.protocol + "//" + qt.host != l.protocol + "//" + l.host;
} catch (e) {
h.crossDomain = !0;
}
}
if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), 
Yt(Ut, h, t, A), c) return A;
for (p in (f = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), 
h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), i = h.url.replace(It, ""), 
h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(zt, "+")) : (d = h.url.slice(i.length), 
h.data && (h.processData || "string" == typeof h.data) && (i += (kt.test(i) ? "&" : "?") + h.data, 
delete h.data), !1 === h.cache && (i = i.replace(Dt, "$1"), d = (kt.test(i) ? "&" : "?") + "_=" + Ot++ + d), 
h.url = i + d), h.ifModified && (T.lastModified[i] && A.setRequestHeader("If-Modified-Since", T.lastModified[i]), 
T.etag[i] && A.setRequestHeader("If-None-Match", T.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && A.setRequestHeader("Content-Type", h.contentType), 
A.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]), 
h.headers) A.setRequestHeader(p, h.headers[p]);
if (h.beforeSend && (!1 === h.beforeSend.call(g, A, h) || c)) return A.abort();
if (x = "abort", v.add(h.complete), A.done(h.success), A.fail(h.error), r = Yt(Gt, h, t, A)) {
if (A.readyState = 1, f && y.trigger("ajaxSend", [ A, h ]), c) return A;
h.async && 0 < h.timeout && (s = n.setTimeout(function() {
A.abort("timeout");
}, h.timeout));
try {
c = !1, r.send(_, E);
} catch (e) {
if (c) throw e;
E(-1, e);
}
} else E(-1, "No Transport");
function E(e, t, u, a) {
var l, p, d, _, w, x = t;
c || (c = !0, s && n.clearTimeout(s), r = void 0, o = a || "", A.readyState = 0 < e ? 4 : 0, 
l = 200 <= e && e < 300 || 304 === e, u && (_ = function(e, t, n) {
for (var r, i, o, u, a = e.contents, s = e.dataTypes; "*" === s[0]; ) s.shift(), 
void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
if (r) for (i in a) if (a[i] && a[i].test(r)) {
s.unshift(i);
break;
}
if (s[0] in n) o = s[0]; else {
for (i in n) {
if (!s[0] || e.converters[i + " " + s[0]]) {
o = i;
break;
}
u || (u = i);
}
o = o || u;
}
if (o) return o !== s[0] && s.unshift(o), n[o];
}(h, A, u)), _ = function(e, t, n, r) {
var i, o, u, a, s, l = {}, c = e.dataTypes.slice();
if (c[1]) for (u in e.converters) l[u.toLowerCase()] = e.converters[u];
for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
!s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = c.shift()) if ("*" === o) o = s; else if ("*" !== s && s !== o) {
if (!(u = l[s + " " + o] || l["* " + o])) for (i in l) if ((a = i.split(" "))[1] === o && (u = l[s + " " + a[0]] || l["* " + a[0]])) {
!0 === u ? u = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
break;
}
if (!0 !== u) if (u && e.throws) t = u(t); else try {
t = u(t);
} catch (e) {
return {
state: "parsererror",
error: u ? e : "No conversion from " + s + " to " + o
};
}
}
return {
state: "success",
data: t
};
}(h, _, A, l), l ? (h.ifModified && ((w = A.getResponseHeader("Last-Modified")) && (T.lastModified[i] = w), 
(w = A.getResponseHeader("etag")) && (T.etag[i] = w)), 204 === e || "HEAD" === h.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = _.state, 
p = _.data, l = !(d = _.error))) : (d = x, !e && x || (x = "error", e < 0 && (e = 0))), 
A.status = e, A.statusText = (t || x) + "", l ? m.resolveWith(g, [ p, x, A ]) : m.rejectWith(g, [ A, x, d ]), 
A.statusCode(b), b = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [ A, h, l ? p : d ]), 
v.fireWith(g, [ A, x ]), f && (y.trigger("ajaxComplete", [ A, h ]), --T.active || T.event.trigger("ajaxStop")));
}
return A;
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
var Vt = {
0: 200,
1223: 204
}, Zt = T.ajaxSettings.xhr();
v.cors = !!Zt && "withCredentials" in Zt, v.ajax = Zt = !!Zt, T.ajaxTransport(function(e) {
var t, r;
if (v.cors || Zt && !e.crossDomain) return {
send: function(i, o) {
var u, a = e.xhr();
if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (u in e.xhrFields) a[u] = e.xhrFields[u];
for (u in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), 
i) a.setRequestHeader(u, i[u]);
t = function(e) {
return function() {
t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, 
"abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Vt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
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
var Jt, Qt = [], Xt = /(=)\?(?=&|$)|\?\?/;
T.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
var e = Qt.pop() || T.expando + "_" + Ot++;
return this[e] = !0, e;
}
}), T.ajaxPrefilter("json jsonp", function(e, t, r) {
var i, o, u, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
a ? e[a] = e[a].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
e.converters["script json"] = function() {
return u || T.error(i + " was not called"), u[0];
}, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
u = arguments;
}, r.always(function() {
void 0 === o ? T(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, 
Qt.push(i)), u && b(o) && o(u[0]), u = o = void 0;
}), "script";
}), v.createHTMLDocument = ((Jt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
2 === Jt.childNodes.length), T.parseHTML = function(e, t, n) {
return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, 
t.head.appendChild(r)) : t = a), o = !n && [], (i = P.exec(e)) ? [ t.createElement(i[1]) ] : (i = Te([ e ], t, o), 
o && o.length && T(o).remove(), T.merge([], i.childNodes)));
var r, i, o;
}, T.fn.load = function(e, t, n) {
var r, i, o, u = this, a = e.indexOf(" ");
return -1 < a && (r = xt(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
0 < u.length && T.ajax({
url: e,
type: i || "GET",
dataType: "html",
data: t
}).done(function(e) {
o = arguments, u.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
}).always(n && function(e, t) {
u.each(function() {
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
var r, i, o, u, a, s, l = T.css(e, "position"), c = T(e), f = {};
"static" === l && (e.style.position = "relative"), a = c.offset(), o = T.css(e, "top"), 
s = T.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + s).indexOf("auto") ? (u = (r = c.position()).top, 
i = r.left) : (u = parseFloat(o) || 0, i = parseFloat(s) || 0), b(t) && (t = t.call(e, n, T.extend({}, a))), 
null != t.top && (f.top = t.top - a.top + u), null != t.left && (f.left = t.left - a.left + i), 
"using" in t ? t.using.call(e, f) : c.css(f);
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
return e || se;
});
}
}), T.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, t) {
var n = "pageYOffset" === t;
T.fn[e] = function(r) {
return Y(this, function(e, r, i) {
var o;
if (_(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
}, e, r, arguments.length);
};
}), T.each([ "top", "left" ], function(e, t) {
T.cssHooks[t] = Ke(v.pixelPosition, function(e, n) {
if (n) return n = Ye(e, t), Be.test(n) ? T(e).position()[t] + "px" : n;
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
var u = arguments.length && (n || "boolean" != typeof i), a = n || (!0 === i || !0 === o ? "margin" : "border");
return Y(this, function(t, n, i) {
var o;
return _(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, a) : T.style(t, n, i, a);
}, t, u ? i : void 0, u);
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
if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = l.call(arguments, 2), 
(i = function() {
return e.apply(t || this, r.concat(l.call(arguments)));
}).guid = e.guid = e.guid || T.guid++, i;
}, T.holdReady = function(e) {
e ? T.readyWait++ : T.ready(!0);
}, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = M, T.isFunction = b, 
T.isWindow = _, T.camelCase = J, T.type = A, T.now = Date.now, T.isNumeric = function(e) {
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
for (var n, r = "php", i = [ "source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment" ], o, u = [ new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "()", "(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?", "(?:\\/\\/\\/?)?", "((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)", "(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))", "(?:\\?([^#]*))?(?:#(.*))?)" ].join("")) ][0].exec(e), a = {}, s = 14; s--; ) u[s] && (a[i[s]] = u[s]);
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
const o = n(22), u = n(24), a = n(52);
function s(t, r, i) {
let s = o.requireScript(t, "index");
a.hasGrant(s.metadata.grant, "registerMenuCommand") ? u.registerMenuCommand({
id: t,
key: "debug jquery"
}, async t => {
try {
l("null", null), l("global", e), l("window", window), l("window.self", window.self), 
l("unsafeWindow", unsafeWindow);
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
l("jquery/global", await Promise.resolve().then(() => n(0)));
} catch (e) {
console.error(e);
}
}) : console.info(t, "registerMenuCommand = false");
}
function l(e, t) {
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
t.registerGlobalMenu = s, t.default = t;
}).call(this, n(1), n(0).default, n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(51), i = new Map();
function o(e, t, n = []) {
"string" == typeof e && (e = {
label: e
});
const o = u(e), a = async function() {
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
function u(e) {
"string" == typeof e && (e = {
label: e
});
const t = e.label || `[${e.name || e.id}] ${e.key}`;
return t;
}
async function a(e, ...t) {
const n = u(e);
let r = i.get(n);
return r ? await r(...t) : r;
}
function s() {
let e = [];
return i.forEach(function(t, n, r) {
e.push(n);
}), e;
}
t.registerMenuCommand = o, t.getLabel = u, t.callMenuCommand = a, t.listMenuCommand = s;
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
}), t.meta_filter = t.makeMetaRow = t.meta_match = t.lazyMetaFix = t.hasGrant = t.parseMetadata = void 0;
const r = n(53);
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
i[e] && (i[e] = i[e].length ? l(r.array_unique(i[e])) : []);
}), i.grant.sort(), i;
}
}
function o(e, t) {
return !(!e.includes("GM." + t) && !e.includes("GM_" + t));
}
function u(e) {
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
e[t] && (e[t] = e[t].length ? l(r.array_unique(e[t])) : []);
}), e.grant && e.grant.length && e.grant.sort(), e;
}
function a(e) {
return e.map(function(e, t, n) {
return e.replace(/^.*(\:\/\/)/, "*$1");
});
}
function s(e, t, n = !1, r = "\t\t", i = "// ", o = "\n") {
let u = "", a = `${i}@${e}${r}`;
return Array.isArray(t) ? u = t.join(`${o}${a}`) : void 0 !== t && (u = t.toString()), 
n && (u = a + u), u;
}
function l(e) {
return e.filter(function(e, t, n) {
return !!e;
});
}
t.parseMetadata = i, t.hasGrant = o, t.lazyMetaFix = u, t.meta_match = a, t.makeMetaRow = s, 
t.meta_filter = l, t.default = t;
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
"./novel-plus-sc/": 2,
"./novel-plus-sc/index": 2,
"./novel-plus-sc/index.js": 2,
"./novel-plus-sc/index.user": 7,
"./novel-plus-sc/index.user.js": 7,
"./novel-plus-sc/lib/metadata": 15,
"./novel-plus-sc/lib/metadata.js": 15,
"./novel-plus-sc/site/baidu/tieba": 8,
"./novel-plus-sc/site/baidu/tieba.js": 8,
"./novel-plus-sc/site/dmzj": 9,
"./novel-plus-sc/site/dmzj.js": 9,
"./novel-plus-sc/site/gamer/home": 11,
"./novel-plus-sc/site/gamer/home.js": 11,
"./novel-plus-sc/site/lightnovel/discuz": 12,
"./novel-plus-sc/site/lightnovel/discuz.js": 12,
"./novel-plus-sc/site/sfacg/book": 13,
"./novel-plus-sc/site/sfacg/book.js": 13,
"./novel-plus-sc/site/syosetu": 16,
"./novel-plus-sc/site/syosetu.js": 16
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
}, i.resolve = o, e.exports = i, i.id = 54;
}, function(e, t, n) {
e.exports = y, y.Minimatch = m;
var r = {
sep: "/"
};
try {
r = n(56);
} catch (e) {}
var i = y.GLOBSTAR = m.GLOBSTAR = {}, o = n(58), u = {
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
}, a = "[^/]", s = a + "*?", l = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", c = "(?:(?!(?:\\/|^)\\.).)*?", f = p("().*{}+?[]^$\\!");
function p(e) {
return e.split("").reduce(function(e, t) {
return e[t] = !0, e;
}, {});
}
var d = /\/+/;
function h(e, t) {
return t = t || {}, function(n, r, i) {
return y(n, e, t);
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
function y(e, t, n) {
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
for (var i = 0, o = e.length; i < o && "!" === e.charAt(i); i++) t = !t, r++;
r && (this.pattern = e.substr(r)), this.negate = t;
}
}
function _(e, t) {
if (t || (t = this instanceof m ? this.options : {}), void 0 === (e = void 0 === e ? this.pattern : e)) throw new TypeError("undefined pattern");
return t.nobrace || !e.match(/\{.*\}/) ? [ e ] : o(e);
}
y.filter = h, y.defaults = function(e) {
if (!e || !Object.keys(e).length) return y;
var t = y, n = function n(r, i, o) {
return t.minimatch(r, i, g(e, o));
};
return n.Minimatch = function n(r, i) {
return new t.Minimatch(r, g(e, i));
}, n;
}, m.defaults = function(e) {
return e && Object.keys(e).length ? y.defaults(e).Minimatch : m;
}, m.prototype.debug = function() {}, m.prototype.make = v, m.prototype.parseNegate = b, 
y.braceExpand = function(e, t) {
return _(e, t);
}, m.prototype.braceExpand = _, m.prototype.parse = x;
var w = {};
function x(e, t) {
if (e.length > 65536) throw new TypeError("pattern is too long");
var n = this.options;
if (!n.noglobstar && "**" === e) return i;
if ("" === e) return "";
var r = "", o = !!n.nocase, l = !1, c = [], p = [], d, h = !1, g = -1, y = -1, m = "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", v = this;
function b() {
if (d) {
switch (d) {
case "*":
r += s, o = !0;
break;

case "?":
r += a, o = !0;
break;

default:
r += "\\" + d;
break;
}
v.debug("clearStateChar %j %j", d, r), d = !1;
}
}
for (var _ = 0, x = e.length, A; _ < x && (A = e.charAt(_)); _++) if (this.debug("%s\t%s %s %j", e, _, r, A), 
l && f[A]) r += "\\" + A, l = !1; else switch (A) {
case "/":
return !1;

case "\\":
b(), l = !0;
continue;

case "?":
case "*":
case "+":
case "@":
case "!":
if (this.debug("%s\t%s %s %j <-- stateChar", e, _, r, A), h) {
this.debug("  in class"), "!" === A && _ === y + 1 && (A = "^"), r += A;
continue;
}
v.debug("call clearStateChar %j", d), b(), d = A, n.noext && b();
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
c.push({
type: d,
start: _ - 1,
reStart: r.length,
open: u[d].open,
close: u[d].close
}), r += "!" === d ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", d, r), d = !1;
continue;

case ")":
if (h || !c.length) {
r += "\\)";
continue;
}
b(), o = !0;
var E = c.pop();
r += E.close, "!" === E.type && p.push(E), E.reEnd = r.length;
continue;

case "|":
if (h || !c.length || l) {
r += "\\|", l = !1;
continue;
}
b(), r += "|";
continue;

case "[":
if (b(), h) {
r += "\\" + A;
continue;
}
h = !0, y = _, g = r.length, r += A;
continue;

case "]":
if (_ === y + 1 || !h) {
r += "\\" + A, l = !1;
continue;
}
if (h) {
var S = e.substring(y + 1, _);
try {
RegExp("[" + S + "]");
} catch (e) {
var j = this.parse(S, w);
r = r.substr(0, g) + "\\[" + j[0] + "\\]", o = o || j[1], h = !1;
continue;
}
}
o = !0, h = !1, r += A;
continue;

default:
b(), l ? l = !1 : !f[A] || "^" === A && h || (r += "\\"), r += A;
}
for (h && (S = e.substr(y + 1), j = this.parse(S, w), r = r.substr(0, g) + "\\[" + j[0], 
o = o || j[1]), E = c.pop(); E; E = c.pop()) {
var C = r.slice(E.reStart + E.open.length);
this.debug("setting tail", r, E), C = C.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
return n || (n = "\\"), t + t + n + "|";
}), this.debug("tail=%j\n   %s", C, C, E, r);
var O = "*" === E.type ? s : "?" === E.type ? a : "\\" + E.type;
o = !0, r = r.slice(0, E.reStart) + O + "\\(" + C;
}
b(), l && (r += "\\\\");
var k = !1;
switch (r.charAt(0)) {
case ".":
case "[":
case "(":
k = !0;
}
for (var R = p.length - 1; R > -1; R--) {
var M = p[R], P = r.slice(0, M.reStart), N = r.slice(M.reStart, M.reEnd - 8), L = r.slice(M.reEnd - 8, M.reEnd), z = r.slice(M.reEnd);
L += z;
var I = P.split("(").length - 1, D = z;
for (_ = 0; _ < I; _++) D = D.replace(/\)[+*?]?/, "");
var $ = "", H;
"" === (z = D) && t !== w && ($ = "$"), r = P + N + z + $ + L;
}
if ("" !== r && o && (r = "(?=.)" + r), k && (r = m + r), t === w) return [ r, o ];
if (!o) return T(e);
var F = n.nocase ? "i" : "";
try {
var U = new RegExp("^" + r + "$", F);
} catch (e) {
return new RegExp("$.");
}
return U._glob = e, U._src = r, U;
}
function A() {
if (this.regexp || !1 === this.regexp) return this.regexp;
var e = this.set;
if (!e.length) return this.regexp = !1, this.regexp;
var t = this.options, n = t.noglobstar ? s : t.dot ? l : c, r = t.nocase ? "i" : "", o = e.map(function(e) {
return e.map(function(e) {
return e === i ? n : "string" == typeof e ? S(e) : e._src;
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
function E(e, t) {
if (this.debug("match", e, this.pattern), this.comment) return !1;
if (this.empty) return "" === e;
if ("/" === e && t) return !0;
var n = this.options;
"/" !== r.sep && (e = e.split(r.sep).join("/")), e = e.split(d), this.debug(this.pattern, "split", e);
var i = this.set, o, u;
for (this.debug(this.pattern, "set", i), u = e.length - 1; u >= 0 && !(o = e[u]); u--) ;
for (u = 0; u < i.length; u++) {
var a = i[u], s = e, l;
if (n.matchBase && 1 === a.length && (s = [ o ]), this.matchOne(s, a, t)) return !!n.flipNegate || !this.negate;
}
return !n.flipNegate && this.negate;
}
function T(e) {
return e.replace(/\\(.)/g, "$1");
}
function S(e) {
return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
y.makeRe = function(e, t) {
return new m(e, t || {}).makeRe();
}, m.prototype.makeRe = A, y.match = function(e, t, n) {
var r = new m(t, n = n || {});
return e = e.filter(function(e) {
return r.match(e);
}), r.options.nonull && !e.length && e.push(t), e;
}, m.prototype.match = E, m.prototype.matchOne = function(e, t, n) {
var r = this.options, o;
this.debug("matchOne", {
this: this,
file: e,
pattern: t
}), this.debug("matchOne", e.length, t.length);
for (var u = 0, a = 0, s = e.length, l = t.length; u < s && a < l; u++, a++) {
this.debug("matchOne loop");
var c = t[a], f = e[u], p;
if (this.debug(t, c, f), !1 === c) return !1;
if (c === i) {
this.debug("GLOBSTAR", [ t, c, f ]);
var d = u, h = a + 1;
if (h === l) {
for (this.debug("** at the end"); u < s; u++) if ("." === e[u] || ".." === e[u] || !r.dot && "." === e[u].charAt(0)) return !1;
return !0;
}
for (;d < s; ) {
var g = e[d];
if (this.debug("\nglobstar while", e, d, t, h, g), this.matchOne(e.slice(d), t.slice(h), n)) return this.debug("globstar found match!", d, s, g), 
!0;
if ("." === g || ".." === g || !r.dot && "." === g.charAt(0)) {
this.debug("dot detected!", e, d, t, h);
break;
}
this.debug("globstar swallow a segment, and continue"), d++;
}
return !(!n || (this.debug("\n>>> no match, partial?", e, d, t, h), d !== s));
}
if ("string" == typeof c ? (p = r.nocase ? f.toLowerCase() === c.toLowerCase() : f === c, 
this.debug("string match", c, f, p)) : (p = f.match(c), this.debug("pattern match", c, f, p)), 
!p) return !1;
}
if (u === s && a === l) return !0;
if (u === s) return n;
if (a === l) return u === s - 1 && "" === e[u];
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
var u = i >= 0 ? arguments[i] : e.cwd();
if ("string" != typeof u) throw new TypeError("Arguments to path.resolve must be strings");
u && (t = u + "/" + t, r = "/" === u.charAt(0));
}
return (r ? "/" : "") + (t = n(o(t.split("/"), function(e) {
return !!e;
}), !r).join("/")) || ".";
}, t.normalize = function(e) {
var r = t.isAbsolute(e), i = "/" === u(e, -1);
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
for (var i = r(e.split("/")), o = r(n.split("/")), u = Math.min(i.length, o.length), a = u, s = 0; s < u; s++) if (i[s] !== o[s]) {
a = s;
break;
}
for (var l = [], s = a; s < i.length; s++) l.push("..");
return (l = l.concat(o.slice(a))).join("/");
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
var u = "b" === "ab".substr(-1) ? function(e, t, n) {
return e.substr(t, n);
} : function(e, t, n) {
return t < 0 && (t = e.length + t), e.substr(t, n);
};
}).call(this, n(57));
}, function(e, t) {
var n = e.exports = {}, r, i;
function o() {
throw new Error("setTimeout has not been defined");
}
function u() {
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
function s(e) {
if (i === clearTimeout) return clearTimeout(e);
if ((i === u || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
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
i = "function" == typeof clearTimeout ? clearTimeout : u;
} catch (e) {
i = u;
}
}();
var l = [], c = !1, f, p = -1;
function d() {
c && f && (c = !1, f.length ? l = f.concat(l) : p = -1, l.length && h());
}
function h() {
if (!c) {
var e = a(d);
c = !0;
for (var t = l.length; t; ) {
for (f = l, l = []; ++p < t; ) f && f[p].run();
p = -1, t = l.length;
}
f = null, c = !1, s(e);
}
}
function g(e, t) {
this.fun = e, this.array = t;
}
function y() {}
n.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
l.push(new g(e, t)), 1 !== l.length || c || a(h);
}, g.prototype.run = function() {
this.fun.apply(null, this.array);
}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", 
n.versions = {}, n.on = y, n.addListener = y, n.once = y, n.off = y, n.removeListener = y, 
n.removeAllListeners = y, n.emit = y, n.prependListener = y, n.prependOnceListener = y, 
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
var r = n(59), i = n(60);
e.exports = h;
var o = "\0SLASH" + Math.random() + "\0", u = "\0OPEN" + Math.random() + "\0", a = "\0CLOSE" + Math.random() + "\0", s = "\0COMMA" + Math.random() + "\0", l = "\0PERIOD" + Math.random() + "\0";
function c(e) {
return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function f(e) {
return e.split("\\\\").join(o).split("\\{").join(u).split("\\}").join(a).split("\\,").join(s).split("\\.").join(l);
}
function p(e) {
return e.split(o).join("\\").split(u).join("{").split(a).join("}").split(s).join(",").split(l).join(".");
}
function d(e) {
if (!e) return [ "" ];
var t = [], n = i("{", "}", e);
if (!n) return e.split(",");
var r = n.pre, o = n.body, u = n.post, a = r.split(",");
a[a.length - 1] += "{" + o + "}";
var s = d(u);
return u.length && (a[a.length - 1] += s.shift(), a.push.apply(a, s)), t.push.apply(t, a), 
t;
}
function h(e) {
return e ? ("{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2)), _(f(e), !0).map(p)) : [];
}
function g(e) {
return e;
}
function y(e) {
return "{" + e + "}";
}
function m(e) {
return /^-?0\d/.test(e);
}
function v(e, t) {
return e <= t;
}
function b(e, t) {
return e >= t;
}
function _(e, t) {
var n = [], o = i("{", "}", e);
if (!o || /\$$/.test(o.pre)) return [ e ];
var u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body), s = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body), l = u || s, f = o.body.indexOf(",") >= 0, p, h;
if (!l && !f) return o.post.match(/,.*\}/) ? _(e = o.pre + "{" + o.body + a + o.post) : [ e ];
if (l) p = o.body.split(/\.\./); else if (1 === (p = d(o.body)).length && 1 === (p = _(p[0], !1).map(y)).length) return (h = o.post.length ? _(o.post, !1) : [ "" ]).map(function(e) {
return o.pre + p[0] + e;
});
var g = o.pre, h = o.post.length ? _(o.post, !1) : [ "" ], w;
if (l) {
var x = c(p[0]), A = c(p[1]), E = Math.max(p[0].length, p[1].length), T = 3 == p.length ? Math.abs(c(p[2])) : 1, S = v, j;
A < x && (T *= -1, S = b);
var C = p.some(m);
w = [];
for (var O = x; S(O, A); O += T) {
var k;
if (s) "\\" === (k = String.fromCharCode(O)) && (k = ""); else if (k = String(O), 
C) {
var R = E - k.length;
if (R > 0) {
var M = new Array(R + 1).join("0");
k = O < 0 ? "-" + M + k.slice(1) : M + k;
}
}
w.push(k);
}
} else w = r(p, function(e) {
return _(e, !1);
});
for (var P = 0; P < w.length; P++) for (var N = 0; N < h.length; N++) {
var L = g + w[P] + h[N];
(!t || l || L) && n.push(L);
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
var r, i, o, u, a, s = n.indexOf(e), l = n.indexOf(t, s + 1), c = s;
if (s >= 0 && l > 0) {
for (r = [], o = n.length; c >= 0 && !a; ) c == s ? (r.push(c), s = n.indexOf(e, c + 1)) : 1 == r.length ? a = [ r.pop(), l ] : ((i = r.pop()) < o && (o = i, 
u = l), l = n.indexOf(t, c + 1)), c = s < l && s >= 0 ? s : l;
r.length && (a = [ o, u ]);
}
return a;
}
e.exports = r, r.range = o;
}, function(e, t, n) {
"use strict";
const r = e => !Number.isNaN(e) && e >= 4352 && (e <= 4447 || 9001 === e || 9002 === e || 11904 <= e && e <= 12871 && 12351 !== e || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141);
e.exports = r, e.exports.default = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(30), i = n(29);
function o(e) {
if ("string" != typeof e || 0 === e.length) return 0;
e = r.default(e);
let t = 0;
for (let n = 0; n < e.length; n++) {
const r = e.codePointAt(n);
r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (r > 65535 && n++, t += i.isFullwidthCodePoint(r) ? 2 : 1);
}
return t;
}
t.stringWidth = o, t.default = t;
}, function(e, t, n) {
"use strict";
e.exports = (e => {
e = Object.assign({
onlyFirst: !1
}, e);
const t = [ "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))" ].join("|");
return new RegExp(t, e.onlyFirst ? void 0 : "g");
});
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(65), i = n(31);
var o;
!function(e) {
let t;
!function(e) {
e[e.FULL_WIDTH = 1] = "FULL_WIDTH", e[e.HALF_WIDTH = 0] = "HALF_WIDTH", e[e.NO_EXIST = -1] = "NO_EXIST";
}(t = e.EnumFullHalfTableType || (e.EnumFullHalfTableType = {})), e.FULL_WIDTH = 1, 
e.HALF_WIDTH = 0, e.NO_EXIST = -1;
let n = {
default: {
from: 33,
to: 126,
values: [ 32 ]
},
number: [ 48, 57 ],
"A-Z": [ 65, 90 ],
"a-z": [ 97, 122 ],
space: [ 32 ],
slash: {
values: i.charCodeAt("/\\")
},
bracket: {
values: i.charCodeAt("()[]{}")
}
};
e.tableDefaultInclude = [ "number", "A-Z", "a-z", "space", "not_default" ], e.table = [];
{
let t = e.tableDefaultInclude.slice(0, -1);
e.table[0] = {}, e.table[1] = {};
for (let t in n) {
let r, i;
(i = o(n[t])) && (e.table[0][t] = i[1], e.table[1][t] = i[0]);
}
let r = o(n.default);
r[0].not = [], r[1].not = [];
for (let e of t) {
let t, i;
(i = o(n[e])) && (r[0].not.push(i[0]), r[1].not.push(i[1]));
}
function o(e) {
let t = [];
t[0] = {}, t[1] = {};
let n = !0;
if (Array.isArray(e) && (2 == e.length ? (t[0].from = e[0], t[0].to = e[1]) : t[0].values = e, 
n = !1), e.from && e.to && (t[0].from = e.from, t[0].to = e.to, n = !1), Array.isArray(e.values) && e.values.length && (t[0].values = e.values, 
n = !1), !n) return t[0].from && t[0].to && (t[1].from = f(t[0].from), t[1].to = f(t[0].to)), 
t[0].values && (t[1].values = t[0].values.reduce(function(e, t) {
return e.push(f(t)), e;
}, [])), t;
}
e.table[0].not_default = r[1], e.table[1].not_default = r[0];
}
function u(e) {
let t = [];
if (e.from && e.to) for (let n = e.from; n <= e.to; n++) t.push(n);
return e.values && (t = t.concat(e.values)), Array.isArray(e.not) && e.not.length && (t = t.filter(function(t) {
for (let n of e.not) if (a(t, n)) return !1;
return !0;
})), t;
}
function a(e, t) {
return !!(t.from && t.to && t.from <= e && e <= t.to) || !(!t.values || !t.values.includes(e)) || void 0;
}
function s(t, n, r) {
let i = e.table[r][n];
if (Array.isArray(i.not) && i.not.length) for (let e of i.not) if (a(t, e)) return !1;
if (a(t, i)) return !0;
}
function l(e) {
return 32 <= e && e < 127 ? 0 : 12288 === e || 65280 < e && e < 65375 ? 1 : -1;
}
function c(e) {
let t = l(e);
return 1 === t || 0 !== t && null;
}
function f(e) {
return 32 < e && e < 127 ? e - 32 + 65280 : 32 === e ? 12288 : e;
}
function p(e) {
return 65280 < e && e < 65375 ? e - 65280 + 32 : 12288 === e ? 32 : e;
}
function d(t) {
if (t) if ("boolean" == typeof t.exists) {
for (let n in e.table[0]) 0 != n.indexOf("default") && !1 !== t[n] && (t[n] = t.exists);
delete t.exists;
} else {
if ("boolean" == typeof t.default) {
for (let n of e.tableDefaultInclude) !1 !== t[n] && (t[n] = t.default);
delete t.default;
}
"boolean" == typeof t.not_default2 && (t.both = t.space = t.not_default2, delete t.not_default2), 
"boolean" == typeof t.both && (t.number = t.eng = t.both, delete t.both), "boolean" == typeof t.eng && (t["a-z"] = t["A-Z"] = t.eng, 
delete t.eng);
}
return t;
}
function h(e, t, n) {
let r = [];
n.skip = d(n.skip), n.only = d(n.only);
let i = Array.isArray(e) ? e : e.toString();
for (let e of i) {
let i, o = "number" == typeof e ? e : e.charCodeAt();
if (n.only) {
i = !0;
for (let e in n.only) if (n.only[e] && s(o, e, n.type)) {
i = !1;
break;
}
}
if (!i && n.skip) for (let e in n.skip) if (n.skip[e] && s(o, e, n.type)) {
i = !0;
break;
}
i ? r.push(o) : r.push(t(o));
}
return n.returnType ? r : String.fromCharCode.apply(String, r);
}
function g(e, t, n) {
return (i, o) => (o = r.all([ {}, o || {}, n || {}, {
type: t
} ]), h(i, e, o));
}
e.filterTable = u, e._chkType = a, e.chkType = s, e.hasFullHalf = l, e.isFullHalf = c, 
e.toFullWidth = f, e.toHalfWidth = p, e._optionsType = d, e.process = h, e.factory = g;
}(o = t.FullHalfCore || (t.FullHalfCore = {}));
let u = {
only: {
number: !0
}
};
t.toFullNumber = o.factory(o.toFullWidth, 1, u), t.toHalfNumber = o.factory(o.toHalfWidth, 0, u), 
u = {
only: {
eng: !0
}
}, t.toFullEnglish = o.factory(o.toFullWidth, 1, u), t.toHalfEnglish = o.factory(o.toHalfWidth, 0, u), 
u = {
only: {
default: !0
}
}, t.toFullWidth = o.factory(o.toFullWidth, 1, u), t.toHalfWidth = o.factory(o.toHalfWidth, 0, u), 
t.default = t;
}, function(e, t, n) {
var r, i;
r = this, i = function() {
"use strict";
var e = function e(r) {
return t(r) && !n(r);
};
function t(e) {
return !!e && "object" == typeof e;
}
function n(e) {
var t = Object.prototype.toString.call(e);
return "[object RegExp]" === t || "[object Date]" === t || u(e);
}
var r, i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103, o;
function u(e) {
return e.$$typeof === i;
}
function a(e) {
return Array.isArray(e) ? [] : {};
}
function s(e, t) {
return !1 !== t.clone && t.isMergeableObject(e) ? p(a(e), e, t) : e;
}
function l(e, t, n) {
return e.concat(t).map(function(e) {
return s(e, n);
});
}
function c(e, t) {
if (!t.customMerge) return p;
var n = t.customMerge(e);
return "function" == typeof n ? n : p;
}
function f(e, t, n) {
var r = {};
return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
r[t] = s(e[t], n);
}), Object.keys(t).forEach(function(i) {
n.isMergeableObject(t[i]) && e[i] ? r[i] = c(i, n)(e[i], t[i], n) : r[i] = s(t[i], n);
}), r;
}
function p(t, n, r) {
(r = r || {}).arrayMerge = r.arrayMerge || l, r.isMergeableObject = r.isMergeableObject || e;
var i = Array.isArray(n), o, u;
return i === Array.isArray(t) ? i ? r.arrayMerge(t, n, r) : f(t, n, r) : s(n, r);
}
return p.all = function e(t, n) {
if (!Array.isArray(t)) throw new Error("first argument should be an array");
return t.reduce(function(e, t) {
return p(e, t, n);
}, {});
}, p;
}, e.exports = i();
}, function(e, t, n) {
"use strict";
function r(e, n = {}) {
return n.allow_nbsp || (e = e.replace(/\xA0/g, " ")), n.allow_bom || (e = e.replace(/\uFEFF/g, "")), 
t.StripTable.forEach(function(t) {
e = e.replace(t, "");
}), e;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.StripTable = [ /[\u2000-\u200F]/g, /[\u2028-\u202F]/g, /[\u205F-\u206F]/g, /\uFEFF/g ], 
t.normalize = r, t.default = r;
}, function(e, t, n) {
"use strict";
function r(e, t) {
let n = e.toString();
if ("number" != typeof t && "string" != typeof t || (t = {
trim: t.toString()
}), t) {
let e = "";
t.multiline && (e += "m");
let r = [], i;
"string" == typeof t.trim ? (i = t.trim.replace(/(\W)/g, "\\$1"), t.multiline ? i += " \\t\\uFEFF\\xA0" : i += "\\s\\uFEFF\\xA0") : i = t.multiline ? " \\t\\uFEFF\\xA0" : "\\s\\uFEFF\\xA0", 
t.no_start || r.push(`^[${i}]+`), t.no_end || r.push(`[${i}]+$`), r = r.map(t => new RegExp(t, e));
for (let e of r) n = n.replace(e, "");
} else n = n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
return n;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.trim = r, t.default = r;
}, function(e, t, n) {
"use strict";
function r(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), r(n(32));
const i = n(32);
t.default = i.zh2jp;
}, function(e, t, n) {
"use strict";
const r = n(70);
t.default = r.UString, r.UString.default = r.UString.UString = r.UString, e.exports = r.UString;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(71), i = n(73);
t.STRING_PROTOTYPE = Object.getOwnPropertyNames(String.prototype);
class UString extends String {
constructor(e, ...t) {
super(e), this._arr = null;
let n = Object.getOwnPropertyDescriptor(this, "_arr");
Object.defineProperty(this, "_arr", Object.assign(n, {
configurable: !0,
enumerable: !1
}));
}
[Symbol.iterator]() {
return UString.toArray(this)[Symbol.iterator]();
}
static isString(e) {
return "string" == typeof e || e instanceof String;
}
static toArray(e) {
return e instanceof UString ? e.toArray() : r.default(String(e));
}
toArray() {
return this._arr || (this._arr = r.default(String(this))), this._arr;
}
split(e, t) {
let n, r = String(this);
return "" === e ? (n = UString.toArray(this), void 0 !== t && (n = n.slice(0, t))) : n = String.prototype.split.call(r, e, t), 
n;
}
substr(e, t) {
return UString.toArray(this).slice(e).slice(0, t).join("");
}
substring(e, t) {
return (Number.isNaN(e) || e < 0) && (e = 0), "number" == typeof t && ((Number.isNaN(t) || t < 0) && (t = 0), 
e > t && ([e, t] = [ t, e ])), this.slice(e, t);
}
indexOf(e, t = 0) {
let n = UString.toArray(this);
if (t = Math.max(0, Math.min(n.length, t)), "" === (e = String(e))) return t;
n = n.slice(t);
let r = UString.toArray(e), i = 0, o = 0, u = r[r.length - 1];
do {
if (-1 != (i = n.indexOf(r[0], o))) {
if (n.slice(i, i + r.length).join("") == e) return t + i;
o = i, r.length > 1 && (o = (i = n.indexOf(u, i + 1)) - r.length);
}
o++;
} while (-1 != i && o < n.length);
return -1;
}
includes(e, t = 0) {
return -1 !== UString.toArray(this).slice(t).join("").indexOf(e);
}
slice(e, t) {
return UString.toArray(this).slice(e, t).join("");
}
charAt(e) {
return this.substr(e, 1);
}
startsWith(e, t) {
return 0 == this.substr(!t || t < 0 ? 0 : +t, e.length).indexOf(e);
}
endsWith(e, t) {
let n = UString.toArray(this), r = UString.toArray(e);
return (void 0 === t || t > n.length) && (t = n.length), this.substring(t - r.length, t) === e;
}
padEnd(e, t) {
e >>= 0, t = String(void 0 !== t ? t : " ");
let n = this.split(""), r = this.split.call(t, "");
return n.length > e ? String(this) : ((e -= n.length) > r.length && (t += t.repeat(e / r.length), 
r = new UString(t)), String(this) + r.slice(0, e));
}
padStart(e, t) {
e >>= 0, t = String(void 0 !== t ? t : " ");
let n = this.split(""), r = this.split.call(t, "");
return n.length > e ? String(this) : ((e -= n.length) > r.length && (t += t.repeat(e / r.length), 
r = new UString(t)), r.slice(0, e) + String(this));
}
static create(e, ...t) {
return new this(e, ...t);
}
static get support() {
let e = i.default(this);
return Object.keys(e).reduce(function(e, n) {
return t.STRING_PROTOTYPE.includes(n) && (e[n] = !0), e;
}, {});
}
static indexOf(e, t, n = 0) {
return this.create(e).indexOf(t, n);
}
static includes(e, t, n = 0) {
return this.create(e).includes(t, n);
}
static split(e, t, n) {
return this.create(e).split(t, n);
}
static substr(e, t, n) {
return this.create(e).substr(t, n);
}
static substring(e, t, n) {
return this.create(e).substring(t, n);
}
static slice(e, t, n) {
return this.create(e).slice(t, n);
}
static charAt(e, t) {
return this.create(e).charAt(t);
}
static padEnd(e, t, n) {
return this.create(e).padEnd(t, n);
}
static padStart(e, t, n) {
return this.create(e).padStart(t, n);
}
static startsWith(e, t, n) {
return this.create(e).startsWith(t, n);
}
static endsWith(e, t, n) {
return this.create(e).endsWith(t, n);
}
get charLength() {
return UString.toArray(this).length;
}
size() {
return UString.toArray(this).length;
}
static size(e) {
return this.create(e).size();
}
}
UString.UString = UString, UString.default = UString, t.UString = UString, t.default = UString, 
Object.defineProperty(UString, "__esModule", {
value: !0
}), UString.default = UString.UString = UString, t = Object.freeze(t);
}, function(e, t, n) {
"use strict";
const r = n(72), i = r.default;
i.substr = r.substring;
const o = i;
Object.defineProperty(o, "__esModule", {
value: !0
}), o.default = o.runes = o, e.exports = o;
}, function(e, t, n) {
"use strict";
function r(e) {
if ("string" != typeof e) throw new Error("string cannot be undefined or null");
const t = [];
let n = 0, r = 0;
for (;n < e.length; ) c(e[n + (r += i(n + r, e))]) && r++, s(e[n + r]) && r++, l(e[n + r]) && r++, 
f(e[n + r]) ? r++ : (t.push(e.substring(n, n + r)), n += r, r = 0);
return t;
}
function i(e, t) {
const n = t[e];
if (!o(n) || e === t.length - 1) return 1;
const r = n + t[e + 1];
let i = t.substring(e + 2, e + 5);
return u(r) && u(i) ? 4 : a(i) ? 4 : 2;
}
function o(e) {
return e && d(e[0].charCodeAt(0), t.HIGH_SURROGATE_START, t.HIGH_SURROGATE_END);
}
function u(e) {
return d(p(e), t.REGIONAL_INDICATOR_START, t.REGIONAL_INDICATOR_END);
}
function a(e) {
return d(p(e), t.FITZPATRICK_MODIFIER_START, t.FITZPATRICK_MODIFIER_END);
}
function s(e) {
return "string" == typeof e && d(e.charCodeAt(0), t.VARIATION_MODIFIER_START, t.VARIATION_MODIFIER_END);
}
function l(e) {
return "string" == typeof e && d(e.charCodeAt(0), t.DIACRITICAL_MARKS_START, t.DIACRITICAL_MARKS_END);
}
function c(e) {
return "string" == typeof e && -1 !== t.GRAPHEMS.indexOf(e.charCodeAt(0));
}
function f(e) {
return "string" == typeof e && e.charCodeAt(0) === t.ZWJ;
}
function p(e) {
const n = e.charCodeAt(0) - t.HIGH_SURROGATE_START, r = e.charCodeAt(1) - t.LOW_SURROGATE_START;
return (n << 10) + r + 65536;
}
function d(e, t, n) {
return e >= t && e <= n;
}
function h(e, t, n) {
const i = r(e);
if (void 0 === t) return e;
if (t >= i.length) return "";
const o = i.length - t, u = void 0 === n ? o : n;
let a = t + u;
return a > t + o && (a = void 0), i.slice(t, a).join("");
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.HIGH_SURROGATE_START = 55296, t.HIGH_SURROGATE_END = 56319, t.LOW_SURROGATE_START = 56320, 
t.REGIONAL_INDICATOR_START = 127462, t.REGIONAL_INDICATOR_END = 127487, t.FITZPATRICK_MODIFIER_START = 127995, 
t.FITZPATRICK_MODIFIER_END = 127999, t.VARIATION_MODIFIER_START = 65024, t.VARIATION_MODIFIER_END = 65039, 
t.DIACRITICAL_MARKS_START = 8400, t.DIACRITICAL_MARKS_END = 8447, t.ZWJ = 8205, 
t.GRAPHEMS = [ 776, 2359, 2359, 2367, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520 ], 
t.runes = r, t.nextUnits = i, t.isFirstOfSurrogatePair = o, t.isRegionalIndicator = u, 
t.isFitzpatrickModifier = a, t.isVariationSelector = s, t.isDiacriticalMark = l, 
t.isGraphem = c, t.isZeroWidthJoiner = f, t.codePointFromSurrogatePair = p, t.betweenInclusive = d, 
t.substring = h, t.default = r, t.substr = h;
}, function(e, t, n) {
"use strict";
function r(e, t) {
let n = Object.getOwnPropertyDescriptors(e.prototype), r = Object.keys(n).reduce(function(r, i) {
return (t || !n[i].get && !n[i].set) && (r[i] = e.prototype[i]), r;
}, {});
return Object.assign({}, e.prototype, r);
}
const i = r;
i.default = i.classPrototype = i, e.exports = i;
}, function(e, t, n) {
"use strict";
var r;
!function(e) {
const t = n(34);
function r(...e) {
return e.length > 1 ? i(e) : i(e[0]);
}
function i(e, t = {}) {
if (!Array.isArray(e)) throw new TypeError(`Expected an Array but got ${typeof e}.`);
const n = a(t);
if (t.overwrite) {
let t = e.length;
for (;t--; ) {
let r;
n(e[t], t, e) || e.splice(t, 1);
}
return e;
}
return e.filter(n);
}
function o(...e) {
return e.length > 1 ? u(e) : u(e[0]);
}
function u(e, t = {}) {
let n;
return i(e, Object.assign({}, t, {
overwrite: !0
}));
}
function a(e = {}) {
const t = e.checker || s, n = e.filter || null, r = (e, r, i) => {
let o;
return i.findIndex(n => t(n, e, i, i)) == r && (!n || n(e));
};
return r;
}
function s(e, n, r, i) {
return t(e, n);
}
e.lazy_unique = r, e.array_unique = i, e.lazy_unique_overwrite = o, e.array_unique_overwrite = u, 
e.defaultFilter = a, e.defaultChecker = s;
}(r || (r = {})), r = r.lazy_unique = Object.assign(r.lazy_unique, r, t, {
equals: n(34),
default: r.lazy_unique
}), t.default = r, Object.defineProperty(r, "__esModule", {
value: !0
}), Object.keys(r).forEach(e => {
try {
r[e] = Object.freeze(r[e]);
} catch (e) {}
}), r = Object.freeze(r), e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(33), i = n(76), o = r.array_unique([ [ "蝕", "蝕", "蚀" ], [ "絲", "絲", "丝" ], [ "異", "異", "异" ], [ "謎", "謎", "谜" ], [ "氷", "冰", "冰" ], [ "詛", "詛", "诅" ], [ "貪", "貪", "贪" ], [ "館", "館", "馆" ], [ "画", "劃", "划" ], [ "誰", "誰", "谁" ], [ "鶏", "雞", "鸡" ], [ "宮", "宮", "宫" ], [ "殻", "殻", "壳" ], [ "館", "館", "馆" ], [ "槍", "槍", "枪" ], [ "静", "靜", "静" ], [ "髪", "髮", null ], [ "棄", "棄", "弃" ], [ "強", "強", "强" ], [ "罵", "罵", "骂" ], [ "駄", "馱", "驮" ], [ "沢", "澤", "泽" ], [ "歴", "歷", "历" ], [ "暦", "曆", "历" ], [ "刹", "剎", "刹" ], [ "錬", "鍊", "炼" ], [ "蓋", "蓋", "盖" ], [ "決", "決", "决" ], [ "晩", "晚", "晚" ], [ "恒", "恆", "恒" ], [ "准", "準", "准" ], [ "準", "準", "准" ], [ "傑", "傑", "杰" ], [ "圏", "圈", "圈" ], [ "煙", "煙", "烟" ], [ "甦", "甦", "苏" ], [ "並", "並", "并" ], [ "贓", "贓", "赃" ], [ "鹹", "鹹", "咸" ], [ "踪", "蹤", "踪" ], [ "踪", "踪", "踪" ], [ "秘", "祕", "秘" ], [ "黙", "默", "默" ], [ "圧", "壓", "压" ], [ "凄", "淒", "凄" ], [ "凄", "悽", "凄" ], [ "穀󠄁", "穀󠄀", "谷" ] ]), u = r.array_unique([ [ "絶", "絕", "绝" ], [ "別", "別", "别" ], [ "魯", "魯", "鲁" ], [ "蘇", "蘇", "苏" ], [ "巻", "卷", "卷" ], [ "弐", "貳", "贰" ], [ "隷", "隸", "隶" ] ]);
t.TABLE = [], o.forEach(function([e, n, r]) {
a(t.TABLE, e, n, r);
}), t.TABLE = r.array_unique(t.TABLE.concat(i.filter(function(e) {
return ![ "尨" ].includes(e[0][0]);
}))), t.TABLE_SAFE = [];
{
let e = [ "系", "欠", "凶", "后", "只", "隻", "无", "叶" ];
t.TABLE = t.TABLE.filter(function(t) {
let [n, r, i] = t;
return !(n[0] == r[0] && n[0] == i[0] || e.includes(n[0]) || e.includes(r[0]) || e.includes(i[0]));
}), t.TABLE_SAFE = [], u.forEach(function([e, n, r]) {
a(t.TABLE, e, n, r), a(t.TABLE_SAFE, e, n, r);
});
let n = [];
for (let e in t.TABLE) {
if (n.includes(e)) continue;
let [r, i, o] = t.TABLE[e], u = !0, a;
for (a in t.TABLE) {
if (a == e) continue;
let [n, r, s] = t.TABLE[a];
if (i.includes(r[0])) {
u = !1;
break;
}
if (o.includes(s[0])) {
u = !1;
break;
}
}
u ? t.TABLE_SAFE.push(t.TABLE[e]) : (n.push(e), n.push(a));
}
}
function a(e, t, n, r) {
return t = Array.isArray(t) ? t : [ t ], n = Array.isArray(n) ? n : [ n ], r = Array.isArray(r) ? r : [ r ], 
e.push([ t, n, r ]), e;
}
t.addNew = a, t.default = t.TABLE;
}, function(e) {
e.exports = [ [ [ "万" ], [ "萬" ], [ "万" ] ], [ [ "予" ], [ "預" ], [ "预" ] ], [ [ "凶" ], [ "兇" ], [ "凶" ] ], [ [ "欠" ], [ "缺" ], [ "缺" ] ], [ [ "与" ], [ "與" ], [ "与" ] ], [ [ "包" ], [ "包" ], [ "包" ] ], [ [ "台" ], [ "台" ], [ "台" ] ], [ [ "弁" ], [ "辨", "瓣", "辯" ], [ "辨", "瓣", "辩" ] ], [ [ "糸" ], [ "絲" ], [ "丝" ] ], [ [ "缶" ], [ "罐" ], [ "罐" ] ], [ [ "虫" ], [ "蟲" ], [ "虫" ] ], [ [ "伝" ], [ "傳" ], [ "传" ] ], [ [ "庄" ], [ "莊" ], [ "庄" ] ], [ [ "余" ], [ "餘" ], [ "余" ] ], [ [ "見" ], [ "見" ], [ "见" ] ], [ [ "貝" ], [ "貝" ], [ "贝" ] ], [ [ "車" ], [ "車" ], [ "车" ] ], [ [ "体" ], [ "體" ], [ "体" ] ], [ [ "尨" ], [ "彪" ], [ "彪" ] ], [ [ "券" ], [ "卷" ], [ "卷" ] ], [ [ "協" ], [ "協" ], [ "协" ] ], [ [ "東" ], [ "東" ], [ "东" ] ], [ [ "糾" ], [ "糾" ], [ "纠" ] ], [ [ "芸" ], [ "藝" ], [ "艺" ] ], [ [ "長" ], [ "長" ], [ "长" ] ], [ [ "門" ], [ "門" ], [ "门" ] ], [ [ "係" ], [ "係" ], [ "系" ] ], [ [ "則" ], [ "則" ], [ "则" ] ], [ [ "帥" ], [ "帥" ], [ "帅" ] ], [ [ "後" ], [ "後" ], [ "后" ] ], [ [ "春" ], [ "春" ], [ "春" ] ], [ [ "為" ], [ "為" ], [ "为" ] ], [ [ "紅" ], [ "紅" ], [ "红" ] ], [ [ "紀" ], [ "紀" ], [ "纪" ] ], [ [ "約" ], [ "約" ], [ "约" ] ], [ [ "計" ], [ "計" ], [ "计" ] ], [ [ "訂" ], [ "訂" ], [ "订" ] ], [ [ "貞" ], [ "貞" ], [ "贞" ] ], [ [ "負" ], [ "負" ], [ "负" ] ], [ [ "軍" ], [ "軍" ], [ "军" ] ], [ [ "軌" ], [ "軌" ], [ "轨" ] ], [ [ "風" ], [ "風" ], [ "风" ] ], [ [ "飛" ], [ "飛" ], [ "飞" ] ], [ [ "個" ], [ "個" ], [ "个" ] ], [ [ "倫" ], [ "倫" ], [ "伦" ] ], [ [ "倉" ], [ "倉" ], [ "仓" ] ], [ [ "凍" ], [ "凍" ], [ "冻" ] ], [ [ "剛" ], [ "剛" ], [ "刚" ] ], [ [ "員" ], [ "員" ], [ "员" ] ], [ [ "孫" ], [ "孫" ], [ "孙" ] ], [ [ "島" ], [ "島" ], [ "岛" ] ], [ [ "師" ], [ "師" ], [ "师" ] ], [ [ "庫" ], [ "庫" ], [ "库" ] ], [ [ "時" ], [ "時" ], [ "时" ] ], [ [ "書" ], [ "書" ], [ "书" ] ], [ [ "畝" ], [ "畝" ], [ "亩" ] ], [ [ "紡" ], [ "紡" ], [ "纺" ] ], [ [ "紋" ], [ "紋" ], [ "纹" ] ], [ [ "純" ], [ "純" ], [ "纯" ] ], [ [ "級" ], [ "級" ], [ "级" ] ], [ [ "納" ], [ "納" ], [ "纳" ] ], [ [ "紙" ], [ "紙" ], [ "纸" ] ], [ [ "紛" ], [ "紛" ], [ "纷" ] ], [ [ "脅" ], [ "脅" ], [ "胁" ] ], [ [ "記" ], [ "記" ], [ "记" ] ], [ [ "討" ], [ "討" ], [ "讨" ] ], [ [ "訓" ], [ "訓" ], [ "训" ] ], [ [ "財" ], [ "財" ], [ "财" ] ], [ [ "貢" ], [ "貢" ], [ "贡" ] ], [ [ "軒" ], [ "軒" ], [ "轩" ] ], [ [ "針" ], [ "針" ], [ "针" ] ], [ [ "陣" ], [ "陣" ], [ "阵" ] ], [ [ "隻" ], [ "隻" ], [ "只" ] ], [ [ "飢" ], [ "饑" ], [ "饥" ] ], [ [ "馬" ], [ "馬" ], [ "马" ] ], [ [ "党" ], [ "黨" ], [ "党" ] ], [ [ "蚕" ], [ "蠶" ], [ "蚕" ] ], [ [ "乾" ], [ "乾" ], [ "干" ] ], [ [ "偽" ], [ "偽" ], [ "伪" ] ], [ [ "偉" ], [ "偉" ], [ "伟" ] ], [ [ "偵" ], [ "偵" ], [ "侦" ] ], [ [ "側" ], [ "側" ], [ "侧" ] ], [ [ "務" ], [ "務" ], [ "务" ] ], [ [ "動" ], [ "動" ], [ "动" ] ], [ [ "問" ], [ "問" ], [ "问" ] ], [ [ "堅" ], [ "堅" ], [ "坚" ] ], [ [ "執" ], [ "執" ], [ "执" ] ], [ [ "婦" ], [ "婦" ], [ "妇" ] ], [ [ "帶" ], [ "帶" ], [ "带" ] ], [ [ "帳" ], [ "帳" ], [ "帐" ] ], [ [ "張" ], [ "張" ], [ "张" ] ], [ [ "掃" ], [ "掃" ], [ "扫" ] ], [ [ "捨" ], [ "捨" ], [ "舍" ] ], [ [ "敗" ], [ "敗" ], [ "败" ] ], [ [ "殺" ], [ "殺" ], [ "杀" ] ], [ [ "現" ], [ "現" ], [ "现" ] ], [ [ "統" ], [ "統" ], [ "统" ] ], [ [ "紹" ], [ "紹" ], [ "绍" ] ], [ [ "細" ], [ "細" ], [ "细" ] ], [ [ "紳" ], [ "紳" ], [ "绅" ] ], [ [ "組" ], [ "組" ], [ "组" ] ], [ [ "終" ], [ "終" ], [ "终" ] ], [ [ "習" ], [ "習" ], [ "习" ] ], [ [ "術" ], [ "術" ], [ "术" ] ], [ [ "規" ], [ "規" ], [ "规" ] ], [ [ "訪" ], [ "訪" ], [ "访" ] ], [ [ "許" ], [ "許" ], [ "许" ] ], [ [ "設" ], [ "設" ], [ "设" ] ], [ [ "訟" ], [ "訟" ], [ "讼" ] ], [ [ "販" ], [ "販" ], [ "贩" ] ], [ [ "責" ], [ "責" ], [ "责" ] ], [ [ "貨" ], [ "貨" ], [ "货" ] ], [ [ "貧" ], [ "貧" ], [ "贫" ] ], [ [ "軟" ], [ "軟" ], [ "软" ] ], [ [ "連" ], [ "連" ], [ "连" ] ], [ [ "釣" ], [ "釣" ], [ "钓" ] ], [ [ "閉" ], [ "閉" ], [ "闭" ] ], [ [ "陳" ], [ "陳" ], [ "陈" ] ], [ [ "陸" ], [ "陸" ], [ "陆" ] ], [ [ "陰" ], [ "陰" ], [ "阴" ] ], [ [ "頂" ], [ "頂" ], [ "顶" ] ], [ [ "魚" ], [ "魚" ], [ "鱼" ] ], [ [ "鳥" ], [ "鳥" ], [ "鸟" ] ], [ [ "紺" ], [ "紺" ], [ "绀" ] ], [ [ "備" ], [ "備" ], [ "备" ] ], [ [ "傘" ], [ "傘" ], [ "伞" ] ], [ [ "創" ], [ "創" ], [ "创" ] ], [ [ "勝" ], [ "勝" ], [ "胜" ] ], [ [ "喪" ], [ "喪" ], [ "丧" ] ], [ [ "場" ], [ "場" ], [ "场" ] ], [ [ "報" ], [ "報" ], [ "报" ] ], [ [ "尋" ], [ "尋" ], [ "寻" ] ], [ [ "幾" ], [ "幾" ], [ "几" ] ], [ [ "復" ], [ "復" ], [ "复" ] ], [ [ "揮" ], [ "揮" ], [ "挥" ] ], [ [ "揚" ], [ "揚" ], [ "扬" ] ], [ [ "棟" ], [ "棟" ], [ "栋" ] ], [ [ "殼" ], [ "殼" ], [ "壳" ] ], [ [ "渦" ], [ "渦" ], [ "涡" ] ], [ [ "湯" ], [ "湯" ], [ "汤" ] ], [ [ "測" ], [ "測" ], [ "测" ] ], [ [ "無" ], [ "無" ], [ "无" ] ], [ [ "猶" ], [ "猶" ], [ "犹" ] ], [ [ "筆" ], [ "筆" ], [ "笔" ] ], [ [ "絞" ], [ "絞" ], [ "绞" ] ], [ [ "結" ], [ "結" ], [ "结" ] ], [ [ "絡" ], [ "絡" ], [ "络" ] ], [ [ "給" ], [ "給" ], [ "给" ] ], [ [ "脹" ], [ "脹" ], [ "胀" ] ], [ [ "華" ], [ "華" ], [ "华" ] ], [ [ "視" ], [ "視" ], [ "视" ] ], [ [ "評" ], [ "評" ], [ "评" ] ], [ [ "詞" ], [ "詞" ], [ "词" ] ], [ [ "証" ], [ "證" ], [ "证" ] ], [ [ "詔" ], [ "詔" ], [ "诏" ] ], [ [ "詐" ], [ "詐" ], [ "诈" ] ], [ [ "訴" ], [ "訴" ], [ "诉" ] ], [ [ "診" ], [ "診" ], [ "诊" ] ], [ [ "貯" ], [ "貯" ], [ "贮" ] ], [ [ "費" ], [ "費" ], [ "费" ] ], [ [ "賀" ], [ "賀" ], [ "贺" ] ], [ [ "貴" ], [ "貴" ], [ "贵" ] ], [ [ "買" ], [ "買" ], [ "买" ] ], [ [ "貿" ], [ "貿" ], [ "贸" ] ], [ [ "貸" ], [ "貸" ], [ "贷" ] ], [ [ "軸" ], [ "軸" ], [ "轴" ] ], [ [ "進" ], [ "進" ], [ "进" ] ], [ [ "郵" ], [ "郵" ], [ "邮" ] ], [ [ "鈍" ], [ "鈍" ], [ "钝" ] ], [ [ "開" ], [ "開" ], [ "开" ] ], [ [ "閑" ], [ "閒" ], [ "闲" ] ], [ [ "間" ], [ "間" ], [ "间" ] ], [ [ "隊" ], [ "隊" ], [ "队" ] ], [ [ "階" ], [ "階" ], [ "阶" ] ], [ [ "陽" ], [ "陽" ], [ "阳" ] ], [ [ "雲" ], [ "雲" ], [ "云" ] ], [ [ "項" ], [ "項" ], [ "项" ] ], [ [ "順" ], [ "順" ], [ "顺" ] ], [ [ "飯" ], [ "飯" ], [ "饭" ] ], [ [ "飲" ], [ "飲" ], [ "饮" ] ], [ [ "粧" ], [ "妝" ], [ "妆" ] ], [ [ "債" ], [ "債" ], [ "债" ] ], [ [ "傾" ], [ "傾" ], [ "倾" ] ], [ [ "傷" ], [ "傷" ], [ "伤" ] ], [ [ "勢" ], [ "勢" ], [ "势" ] ], [ [ "園" ], [ "園" ], [ "园" ] ], [ [ "塗" ], [ "塗" ], [ "涂" ] ], [ [ "塊" ], [ "塊" ], [ "块" ] ], [ [ "幹" ], [ "幹" ], [ "干" ] ], [ [ "愛" ], [ "愛" ], [ "爱" ] ], [ [ "損" ], [ "損" ], [ "损" ] ], [ [ "業" ], [ "業" ], [ "业" ] ], [ [ "極" ], [ "極" ], [ "极" ] ], [ [ "溝" ], [ "溝" ], [ "沟" ] ], [ [ "滅" ], [ "滅" ], [ "灭" ] ], [ [ "準" ], [ "準" ], [ "准" ] ], [ [ "煩" ], [ "煩" ], [ "烦" ] ], [ [ "痴" ], [ "痴" ], [ "痴" ] ], [ [ "節" ], [ "節" ], [ "节" ] ], [ [ "絹" ], [ "絹" ], [ "绢" ] ], [ [ "義" ], [ "義" ], [ "义" ] ], [ [ "聖" ], [ "聖" ], [ "圣" ] ], [ [ "腸" ], [ "腸" ], [ "肠" ] ], [ [ "葉" ], [ "葉" ], [ "叶" ] ], [ [ "虜" ], [ "虜" ], [ "虏" ] ], [ [ "補" ], [ "補" ], [ "补" ] ], [ [ "該" ], [ "該" ], [ "该" ] ], [ [ "詳" ], [ "詳" ], [ "详" ] ], [ [ "試" ], [ "試" ], [ "试" ] ], [ [ "詩" ], [ "詩" ], [ "诗" ] ], [ [ "詰" ], [ "詰" ], [ "诘" ] ], [ [ "誇" ], [ "誇" ], [ "夸" ] ], [ [ "誠" ], [ "誠" ], [ "诚" ] ], [ [ "話" ], [ "話" ], [ "话" ] ], [ [ "賊" ], [ "賊" ], [ "贼" ] ], [ [ "資" ], [ "資" ], [ "资" ] ], [ [ "賄" ], [ "賄" ], [ "贿" ] ], [ [ "賃" ], [ "賃" ], [ "赁" ] ], [ [ "較" ], [ "較" ], [ "较" ] ], [ [ "載" ], [ "載" ], [ "载" ] ], [ [ "農" ], [ "農" ], [ "农" ] ], [ [ "運" ], [ "運" ], [ "运" ] ], [ [ "達" ], [ "達" ], [ "达" ] ], [ [ "違" ], [ "違" ], [ "违" ] ], [ [ "過" ], [ "過" ], [ "过" ] ], [ [ "鉛" ], [ "鉛" ], [ "铅" ] ], [ [ "鈴" ], [ "鈴" ], [ "铃" ] ], [ [ "電" ], [ "電" ], [ "电" ] ], [ [ "預" ], [ "預" ], [ "预" ] ], [ [ "頑" ], [ "頑" ], [ "顽" ] ], [ [ "頒" ], [ "頒" ], [ "颁" ] ], [ [ "飼" ], [ "飼" ], [ "饲" ] ], [ [ "飽" ], [ "飽" ], [ "饱" ] ], [ [ "飾" ], [ "飾" ], [ "饰" ] ], [ [ "馱" ], [ "馱" ], [ "驮" ] ], [ [ "触" ], [ "觸" ], [ "触" ] ], [ [ "豊" ], [ "豐" ], [ "丰" ] ], [ [ "銃" ], [ "銃" ], [ "铳" ] ], [ [ "裏" ], [ "裡" ], [ "里" ] ], [ [ "僕" ], [ "僕" ], [ "仆" ] ], [ [ "嘆" ], [ "嘆" ], [ "叹" ] ], [ [ "夢" ], [ "夢" ], [ "梦" ] ], [ [ "奪" ], [ "奪" ], [ "夺" ] ], [ [ "寧" ], [ "寧" ], [ "宁" ] ], [ [ "幣" ], [ "幣" ], [ "币" ] ], [ [ "徹" ], [ "徹" ], [ "彻" ] ], [ [ "態" ], [ "態" ], [ "态" ] ], [ [ "漬" ], [ "漬" ], [ "渍" ] ], [ [ "漢" ], [ "漢" ], [ "汉" ] ], [ [ "漸" ], [ "漸" ], [ "渐" ] ], [ [ "漁" ], [ "漁" ], [ "渔" ] ], [ [ "獄" ], [ "獄" ], [ "狱" ] ], [ [ "監" ], [ "監" ], [ "监" ] ], [ [ "禍" ], [ "禍" ], [ "祸" ] ], [ [ "種" ], [ "種" ], [ "种" ] ], [ [ "箇" ], [ "個" ], [ "个" ] ], [ [ "緊" ], [ "緊" ], [ "紧" ] ], [ [ "網" ], [ "網" ], [ "网" ] ], [ [ "綱" ], [ "綱" ], [ "纲" ] ], [ [ "綿" ], [ "綿" ], [ "绵" ] ], [ [ "維" ], [ "維" ], [ "维" ] ], [ [ "緒" ], [ "緒" ], [ "绪" ] ], [ [ "聞" ], [ "聞" ], [ "闻" ] ], [ [ "製" ], [ "製" ], [ "制" ] ], [ [ "誌" ], [ "誌" ], [ "志" ] ], [ [ "語" ], [ "語" ], [ "语" ] ], [ [ "認" ], [ "認" ], [ "认" ] ], [ [ "誤" ], [ "誤" ], [ "误" ] ], [ [ "誘" ], [ "誘" ], [ "诱" ] ], [ [ "賓" ], [ "賓" ], [ "宾" ] ], [ [ "遠" ], [ "遠" ], [ "远" ] ], [ [ "銀" ], [ "銀" ], [ "银" ] ], [ [ "銅" ], [ "銅" ], [ "铜" ] ], [ [ "銘" ], [ "銘" ], [ "铭" ] ], [ [ "銑" ], [ "銑" ], [ "铣" ] ], [ [ "閣" ], [ "閣" ], [ "阁" ] ], [ [ "閥" ], [ "閥" ], [ "阀" ] ], [ [ "際" ], [ "際" ], [ "际" ] ], [ [ "領" ], [ "領" ], [ "领" ] ], [ [ "鳴" ], [ "鳴" ], [ "鸣" ] ], [ [ "億" ], [ "億" ], [ "亿" ] ], [ [ "儀" ], [ "儀" ], [ "仪" ] ], [ [ "劇" ], [ "劇" ], [ "剧" ] ], [ [ "噴" ], [ "噴" ], [ "喷" ] ], [ [ "墳" ], [ "墳" ], [ "坟" ] ], [ [ "墜" ], [ "墜" ], [ "坠" ] ], [ [ "寬" ], [ "寬" ], [ "宽" ] ], [ [ "審" ], [ "審" ], [ "审" ] ], [ [ "層" ], [ "層" ], [ "层" ] ], [ [ "慶" ], [ "慶" ], [ "庆" ] ], [ [ "慮" ], [ "慮" ], [ "虑" ] ], [ [ "憂" ], [ "憂" ], [ "忧" ] ], [ [ "憤" ], [ "憤" ], [ "愤" ] ], [ [ "撮" ], [ "攝" ], [ "摄" ] ], [ [ "敵" ], [ "敵" ], [ "敌" ] ], [ [ "暫" ], [ "暫" ], [ "暂" ] ], [ [ "標" ], [ "標" ], [ "标" ] ], [ [ "潔" ], [ "潔" ], [ "洁" ] ], [ [ "潤" ], [ "潤" ], [ "润" ] ], [ [ "熱" ], [ "熱" ], [ "热" ] ], [ [ "盤" ], [ "盤" ], [ "盘" ] ], [ [ "確" ], [ "確" ], [ "确" ] ], [ [ "窮" ], [ "窮" ], [ "穷" ] ], [ [ "範" ], [ "範" ], [ "范" ] ], [ [ "締" ], [ "締" ], [ "缔" ] ], [ [ "練" ], [ "練" ], [ "练" ] ], [ [ "緯" ], [ "緯" ], [ "纬" ] ], [ [ "編" ], [ "編" ], [ "编" ] ], [ [ "線" ], [ "線" ], [ "线" ] ], [ [ "緩" ], [ "緩" ], [ "缓" ] ], [ [ "罷" ], [ "罷" ], [ "罢" ] ], [ [ "膚" ], [ "膚" ], [ "肤" ] ], [ [ "衛" ], [ "衛" ], [ "卫" ] ], [ [ "衝" ], [ "衝" ], [ "冲" ] ], [ [ "複" ], [ "複" ], [ "复" ] ], [ [ "談" ], [ "談" ], [ "谈" ] ], [ [ "誕" ], [ "誕" ], [ "诞" ] ], [ [ "請" ], [ "請" ], [ "请" ] ], [ [ "諸" ], [ "諸" ], [ "诸" ] ], [ [ "課" ], [ "課" ], [ "课" ] ], [ [ "調" ], [ "調" ], [ "调" ] ], [ [ "論" ], [ "論" ], [ "论" ] ], [ [ "賠" ], [ "賠" ], [ "赔" ] ], [ [ "賞" ], [ "賞" ], [ "赏" ] ], [ [ "賦" ], [ "賦" ], [ "赋" ] ], [ [ "賢" ], [ "賢" ], [ "贤" ] ], [ [ "賜" ], [ "賜" ], [ "赐" ] ], [ [ "質" ], [ "質" ], [ "质" ] ], [ [ "輝" ], [ "輝" ], [ "辉" ] ], [ [ "輩" ], [ "輩" ], [ "辈" ] ], [ [ "輪" ], [ "輪" ], [ "轮" ] ], [ [ "適" ], [ "適" ], [ "适" ] ], [ [ "遷" ], [ "遷" ], [ "迁" ] ], [ [ "養" ], [ "養" ], [ "养" ] ], [ [ "餓" ], [ "餓" ], [ "饿" ] ], [ [ "駐" ], [ "駐" ], [ "驻" ] ], [ [ "墾" ], [ "墾" ], [ "垦" ] ], [ [ "壇" ], [ "壇" ], [ "坛" ] ], [ [ "奮" ], [ "奮" ], [ "奋" ] ], [ [ "導" ], [ "導" ], [ "导" ] ], [ [ "憲" ], [ "憲" ], [ "宪" ] ], [ [ "憶" ], [ "憶" ], [ "忆" ] ], [ [ "擁" ], [ "擁" ], [ "拥" ] ], [ [ "曇" ], [ "曇" ], [ "昙" ] ], [ [ "樸" ], [ "樸" ], [ "朴" ] ], [ [ "樹" ], [ "樹" ], [ "树" ] ], [ [ "橋" ], [ "橋" ], [ "桥" ] ], [ [ "機" ], [ "機" ], [ "机" ] ], [ [ "濃" ], [ "濃" ], [ "浓" ] ], [ [ "濁" ], [ "濁" ], [ "浊" ] ], [ [ "積" ], [ "積" ], [ "积" ] ], [ [ "築" ], [ "築" ], [ "筑" ] ], [ [ "篤" ], [ "篤" ], [ "笃" ] ], [ [ "縛" ], [ "縛" ], [ "缚" ] ], [ [ "興" ], [ "興" ], [ "兴" ] ], [ [ "親" ], [ "親" ], [ "亲" ] ], [ [ "謀" ], [ "謀" ], [ "谋" ] ], [ [ "諮" ], [ "諮" ], [ "谘" ] ], [ [ "諾" ], [ "諾" ], [ "诺" ] ], [ [ "謁" ], [ "謁" ], [ "谒" ] ], [ [ "諭" ], [ "諭" ], [ "谕" ] ], [ [ "輸" ], [ "輸" ], [ "输" ] ], [ [ "選" ], [ "選" ], [ "选" ] ], [ [ "遺" ], [ "遺" ], [ "遗" ] ], [ [ "錠" ], [ "錠" ], [ "锭" ] ], [ [ "錯" ], [ "錯" ], [ "错" ] ], [ [ "鋼" ], [ "鋼" ], [ "钢" ] ], [ [ "頻" ], [ "頻" ], [ "频" ] ], [ [ "頭" ], [ "頭" ], [ "头" ] ], [ [ "優" ], [ "優" ], [ "优" ] ], [ [ "償" ], [ "償" ], [ "偿" ] ], [ [ "嚇" ], [ "嚇" ], [ "吓" ] ], [ [ "懇" ], [ "懇" ], [ "恳" ] ], [ [ "擬" ], [ "擬" ], [ "拟" ] ], [ [ "濫" ], [ "濫" ], [ "滥" ] ], [ [ "獲" ], [ "獲" ], [ "获" ] ], [ [ "環" ], [ "環" ], [ "环" ] ], [ [ "療" ], [ "療" ], [ "疗" ] ], [ [ "矯" ], [ "矯" ], [ "矫" ] ], [ [ "縮" ], [ "縮" ], [ "缩" ] ], [ [ "績" ], [ "績" ], [ "绩" ] ], [ [ "縫" ], [ "縫" ], [ "缝" ] ], [ [ "臨" ], [ "臨" ], [ "临" ] ], [ [ "謙" ], [ "謙" ], [ "谦" ] ], [ [ "講" ], [ "講" ], [ "讲" ] ], [ [ "謝" ], [ "謝" ], [ "谢" ] ], [ [ "謄" ], [ "謄" ], [ "誊" ] ], [ [ "轄" ], [ "轄" ], [ "辖" ] ], [ [ "還" ], [ "還" ], [ "还" ] ], [ [ "醜" ], [ "醜" ], [ "丑" ] ], [ [ "錘" ], [ "錘" ], [ "锤" ] ], [ [ "鍾" ], [ "鍾" ], [ "钟" ] ], [ [ "鍛" ], [ "鍛" ], [ "锻" ] ], [ [ "鮮" ], [ "鮮" ], [ "鲜" ] ], [ [ "礎" ], [ "礎" ], [ "础" ] ], [ [ "簡" ], [ "簡" ], [ "简" ] ], [ [ "糧" ], [ "糧" ], [ "粮" ] ], [ [ "織" ], [ "織" ], [ "织" ] ], [ [ "繕" ], [ "繕" ], [ "缮" ] ], [ [ "職" ], [ "職" ], [ "职" ] ], [ [ "薦" ], [ "薦" ], [ "荐" ] ], [ [ "謹" ], [ "謹" ], [ "谨" ] ], [ [ "鎖" ], [ "鎖" ], [ "锁" ] ], [ [ "鎮" ], [ "鎮" ], [ "镇" ] ], [ [ "離" ], [ "離" ], [ "离" ] ], [ [ "額" ], [ "額" ], [ "额" ] ], [ [ "題" ], [ "題" ], [ "题" ] ], [ [ "騎" ], [ "騎" ], [ "骑" ] ], [ [ "懲" ], [ "懲" ], [ "惩" ] ], [ [ "璽" ], [ "璽" ], [ "玺" ] ], [ [ "穫" ], [ "穫" ], [ "获" ] ], [ [ "繭" ], [ "繭" ], [ "茧" ] ], [ [ "羅" ], [ "羅" ], [ "罗" ] ], [ [ "譜" ], [ "譜" ], [ "谱" ] ], [ [ "識" ], [ "識" ], [ "识" ] ], [ [ "贈" ], [ "贈" ], [ "赠" ] ], [ [ "鏡" ], [ "鏡" ], [ "镜" ] ], [ [ "難" ], [ "難" ], [ "难" ] ], [ [ "霧" ], [ "霧" ], [ "雾" ] ], [ [ "類" ], [ "類" ], [ "类" ] ], [ [ "願" ], [ "願" ], [ "愿" ] ], [ [ "鯨" ], [ "鯨" ], [ "鲸" ] ], [ [ "麗" ], [ "麗" ], [ "丽" ] ], [ [ "繰" ], [ "繰" ], [ "缲" ] ], [ [ "懸" ], [ "懸" ], [ "悬" ] ], [ [ "競" ], [ "競" ], [ "竞" ] ], [ [ "艦" ], [ "艦" ], [ "舰" ] ], [ [ "議" ], [ "議" ], [ "议" ] ], [ [ "騰" ], [ "騰" ], [ "腾" ] ], [ [ "欄" ], [ "欄" ], [ "栏" ] ], [ [ "護" ], [ "護" ], [ "护" ] ], [ [ "躍" ], [ "躍" ], [ "跃" ] ], [ [ "響" ], [ "響" ], [ "响" ] ], [ [ "襲" ], [ "襲" ], [ "袭" ] ], [ [ "鑑" ], [ "鑑" ], [ "鉴" ] ], [ [ "驚" ], [ "驚" ], [ "惊" ] ], [ [ "両" ], [ "兩" ], [ "两" ] ], [ [ "乗" ], [ "乘" ], [ "乘" ] ], [ [ "乱" ], [ "亂" ], [ "乱" ] ], [ [ "亀" ], [ "龜" ], [ "龟" ] ], [ [ "亜" ], [ "亞" ], [ "亚" ] ], [ [ "仏" ], [ "佛" ], [ "佛" ] ], [ [ "仮" ], [ "假" ], [ "假" ] ], [ [ "会" ], [ "會" ], [ "会" ] ], [ [ "価" ], [ "價" ], [ "价" ] ], [ [ "倶" ], [ "俱" ], [ "俱" ] ], [ [ "倹" ], [ "儉" ], [ "俭" ] ], [ [ "児" ], [ "兒" ], [ "儿" ] ], [ [ "内" ], [ "內" ], [ "内" ] ], [ [ "円" ], [ "圓" ], [ "圆" ] ], [ [ "写" ], [ "寫" ], [ "写" ] ], [ [ "冨" ], [ "富" ], [ "富" ] ], [ [ "処" ], [ "處" ], [ "处" ] ], [ [ "剣" ], [ "劍" ], [ "剑" ] ], [ [ "剤" ], [ "劑" ], [ "剂" ] ], [ [ "剰" ], [ "剩" ], [ "剩" ] ], [ [ "励" ], [ "勵" ], [ "励" ] ], [ [ "労" ], [ "勞" ], [ "劳" ] ], [ [ "勧" ], [ "勸" ], [ "劝" ] ], [ [ "勲" ], [ "勳" ], [ "勋" ] ], [ [ "区" ], [ "區" ], [ "区" ] ], [ [ "医" ], [ "醫" ], [ "医" ] ], [ [ "単" ], [ "單" ], [ "单" ] ], [ [ "厳" ], [ "嚴" ], [ "严" ] ], [ [ "参" ], [ "參" ], [ "参" ] ], [ [ "双" ], [ "雙" ], [ "双" ] ], [ [ "収" ], [ "收" ], [ "收" ] ], [ [ "号" ], [ "號" ], [ "号" ] ], [ [ "啓" ], [ "啟" ], [ "启" ] ], [ [ "営" ], [ "營" ], [ "营" ] ], [ [ "嘱" ], [ "囑" ], [ "嘱" ] ], [ [ "団" ], [ "團" ], [ "团" ] ], [ [ "囲" ], [ "圍" ], [ "围" ] ], [ [ "図" ], [ "圖" ], [ "图" ] ], [ [ "国" ], [ "國" ], [ "国" ] ], [ [ "圧" ], [ "壓" ], [ "压" ] ], [ [ "堕" ], [ "墮" ], [ "堕" ] ], [ [ "塁" ], [ "壘" ], [ "垒" ] ], [ [ "塩" ], [ "鹽" ], [ "盐" ] ], [ [ "増" ], [ "增" ], [ "增" ] ], [ [ "壊" ], [ "壞" ], [ "坏" ] ], [ [ "壌" ], [ "壤" ], [ "壤" ] ], [ [ "壮" ], [ "壯" ], [ "壮" ] ], [ [ "声" ], [ "聲" ], [ "声" ] ], [ [ "壱" ], [ "壹" ], [ "壹" ] ], [ [ "売" ], [ "賣" ], [ "卖" ] ], [ [ "変" ], [ "變" ], [ "变" ] ], [ [ "奨" ], [ "獎" ], [ "奖" ] ], [ [ "姉" ], [ "姐" ], [ "姐" ] ], [ [ "姫" ], [ "姬" ], [ "姬" ] ], [ [ "娯" ], [ "娛" ], [ "娱" ] ], [ [ "嬢" ], [ "孃" ], [ "娘" ] ], [ [ "学" ], [ "學" ], [ "学" ] ], [ [ "宝" ], [ "寶" ], [ "宝" ] ], [ [ "実" ], [ "實" ], [ "实" ] ], [ [ "寛" ], [ "寬" ], [ "宽" ] ], [ [ "寝" ], [ "寢" ], [ "寝" ] ], [ [ "対" ], [ "對" ], [ "对" ] ], [ [ "寿" ], [ "壽" ], [ "寿" ] ], [ [ "専" ], [ "專" ], [ "专" ] ], [ [ "将" ], [ "將" ], [ "将" ] ], [ [ "尽" ], [ "盡" ], [ "尽" ] ], [ [ "属" ], [ "屬" ], [ "属" ] ], [ [ "峡" ], [ "峽" ], [ "峡" ] ], [ [ "巌" ], [ "巖" ], [ "巖" ] ], [ [ "巻" ], [ "卷" ], [ "卷" ] ], [ [ "帯" ], [ "帶" ], [ "带" ] ], [ [ "帰" ], [ "歸" ], [ "归" ] ], [ [ "庁" ], [ "廳" ], [ "厅" ] ], [ [ "広" ], [ "廣" ], [ "广" ] ], [ [ "廃" ], [ "廢" ], [ "废" ] ], [ [ "廼" ], [ "迺" ], [ "迺" ] ], [ [ "弍" ], [ "貳" ], [ "贰" ] ], [ [ "弐" ], [ "貳" ], [ "贰" ] ], [ [ "弥" ], [ "彌" ], [ "弥" ] ], [ [ "弾" ], [ "彈" ], [ "弹" ] ], [ [ "当" ], [ "當" ], [ "当" ] ], [ [ "彦" ], [ "彥" ], [ "彥" ] ], [ [ "径" ], [ "徑" ], [ "径" ] ], [ [ "従" ], [ "從" ], [ "从" ] ], [ [ "徳" ], [ "德" ], [ "德" ] ], [ [ "徴" ], [ "徵" ], [ "征" ] ], [ [ "応" ], [ "應" ], [ "应" ] ], [ [ "恋" ], [ "戀" ], [ "恋" ] ], [ [ "恵" ], [ "惠" ], [ "惠" ] ], [ [ "悦" ], [ "悅" ], [ "悅" ] ], [ [ "悩" ], [ "惱" ], [ "恼" ] ], [ [ "悪" ], [ "惡" ], [ "恶" ] ], [ [ "惨" ], [ "慘" ], [ "惨" ] ], [ [ "懐" ], [ "懷" ], [ "怀" ] ], [ [ "戦" ], [ "戰" ], [ "战" ] ], [ [ "戯" ], [ "戲" ], [ "戏" ] ], [ [ "戸" ], [ "戶" ], [ "户" ] ], [ [ "払" ], [ "拂" ], [ "拂" ] ], [ [ "択" ], [ "擇" ], [ "择" ] ], [ [ "担" ], [ "擔" ], [ "担" ] ], [ [ "拝" ], [ "拜" ], [ "拜" ] ], [ [ "拠" ], [ "據" ], [ "据" ] ], [ [ "拡" ], [ "擴" ], [ "扩" ] ], [ [ "挙" ], [ "舉" ], [ "举" ] ], [ [ "挟" ], [ "挾" ], [ "挟" ] ], [ [ "掲" ], [ "揭" ], [ "揭" ] ], [ [ "掴" ], [ "摑" ], [ "掴" ] ], [ [ "揺" ], [ "搖" ], [ "摇" ] ], [ [ "摂" ], [ "攝" ], [ "摄" ] ], [ [ "撃" ], [ "擊" ], [ "击" ] ], [ [ "数" ], [ "數" ], [ "数" ] ], [ [ "斉" ], [ "齊" ], [ "齐" ] ], [ [ "斎" ], [ "齋" ], [ "斋" ] ], [ [ "断" ], [ "斷" ], [ "断" ] ], [ [ "旧" ], [ "舊" ], [ "旧" ] ], [ [ "昼" ], [ "晝" ], [ "昼" ] ], [ [ "暁" ], [ "曉" ], [ "晓" ] ], [ [ "暦" ], [ "曆" ], [ "历" ] ], [ [ "曽" ], [ "曾" ], [ "曾" ] ], [ [ "条" ], [ "條" ], [ "条" ] ], [ [ "来" ], [ "來" ], [ "来" ] ], [ [ "枢" ], [ "樞" ], [ "枢" ] ], [ [ "査" ], [ "查" ], [ "查" ] ], [ [ "栄" ], [ "榮" ], [ "荣" ] ], [ [ "桜" ], [ "櫻" ], [ "樱" ] ], [ [ "桟" ], [ "棧" ], [ "栈" ] ], [ [ "検" ], [ "檢" ], [ "检" ] ], [ [ "楼" ], [ "樓" ], [ "楼" ] ], [ [ "楽" ], [ "樂" ], [ "乐" ] ], [ [ "様" ], [ "樣" ], [ "样" ] ], [ [ "権" ], [ "權" ], [ "权" ] ], [ [ "欧" ], [ "歐" ], [ "欧" ] ], [ [ "歓" ], [ "歡" ], [ "欢" ] ], [ [ "歩" ], [ "步" ], [ "步" ] ], [ [ "歯" ], [ "齒" ], [ "齿" ] ], [ [ "歳" ], [ "歲" ], [ "岁" ] ], [ [ "歴" ], [ "歷" ], [ "历" ] ], [ [ "残" ], [ "殘" ], [ "残" ] ], [ [ "殴" ], [ "毆" ], [ "殴" ] ], [ [ "気" ], [ "氣" ], [ "气" ] ], [ [ "沢" ], [ "澤" ], [ "泽" ] ], [ [ "浅" ], [ "淺" ], [ "浅" ] ], [ [ "浜" ], [ "濱" ], [ "滨" ] ], [ [ "涙" ], [ "淚" ], [ "泪" ] ], [ [ "済" ], [ "濟" ], [ "济" ] ], [ [ "渋" ], [ "涉", "澀" ], [ "涉", "涩" ] ], [ [ "渓" ], [ "溪" ], [ "溪" ] ], [ [ "湾" ], [ "灣" ], [ "湾" ] ], [ [ "湿" ], [ "濕" ], [ "湿" ] ], [ [ "満" ], [ "滿" ], [ "满" ] ], [ [ "滝" ], [ "瀧" ], [ "泷" ] ], [ [ "滞" ], [ "滯" ], [ "滞" ] ], [ [ "瀬" ], [ "瀨" ], [ "濑" ] ], [ [ "灯" ], [ "燈" ], [ "灯" ] ], [ [ "炉" ], [ "爐" ], [ "炉" ] ], [ [ "点" ], [ "點" ], [ "点" ] ], [ [ "焔" ], [ "焰" ], [ "焰" ] ], [ [ "焼" ], [ "燒" ], [ "烧" ] ], [ [ "犠" ], [ "犧" ], [ "牺" ] ], [ [ "状" ], [ "狀" ], [ "状" ] ], [ [ "独" ], [ "獨" ], [ "独" ] ], [ [ "狭" ], [ "狹" ], [ "狭" ] ], [ [ "猟" ], [ "獵" ], [ "猎" ] ], [ [ "猫" ], [ "貓" ], [ "猫" ] ], [ [ "献" ], [ "獻" ], [ "献" ] ], [ [ "獣" ], [ "獸" ], [ "兽" ] ], [ [ "産" ], [ "產" ], [ "产" ] ], [ [ "画" ], [ "畫" ], [ "画" ] ], [ [ "畳" ], [ "疊" ], [ "叠" ] ], [ [ "発" ], [ "發" ], [ "发" ] ], [ [ "県" ], [ "縣" ], [ "县" ] ], [ [ "着" ], [ "著" ], [ "著" ] ], [ [ "砕" ], [ "碎" ], [ "碎" ] ], [ [ "礼" ], [ "禮" ], [ "礼" ] ], [ [ "禅" ], [ "禪" ], [ "禅" ] ], [ [ "称" ], [ "稱" ], [ "称" ] ], [ [ "稲" ], [ "稻" ], [ "稻" ] ], [ [ "穂" ], [ "穗" ], [ "穗" ] ], [ [ "穏" ], [ "穩" ], [ "稳" ] ], [ [ "窃" ], [ "竊" ], [ "窃" ] ], [ [ "竜" ], [ "龍" ], [ "龙" ] ], [ [ "粋" ], [ "粹" ], [ "粹" ] ], [ [ "粛" ], [ "肅" ], [ "肃" ] ], [ [ "経" ], [ "經" ], [ "经" ] ], [ [ "絵" ], [ "繪" ], [ "绘" ] ], [ [ "絶" ], [ "絶" ], [ "绝" ] ], [ [ "継" ], [ "繼" ], [ "继" ] ], [ [ "続" ], [ "續" ], [ "续" ] ], [ [ "総" ], [ "總" ], [ "总" ] ], [ [ "緑" ], [ "綠" ], [ "绿" ] ], [ [ "縁" ], [ "緣" ], [ "缘" ] ], [ [ "縄" ], [ "繩" ], [ "绳" ] ], [ [ "縦" ], [ "縱" ], [ "纵" ] ], [ [ "繊" ], [ "纖" ], [ "纤" ] ], [ [ "罸" ], [ "罰" ], [ "罚" ] ], [ [ "聡" ], [ "聰" ], [ "聪" ] ], [ [ "聴" ], [ "聽" ], [ "听" ] ], [ [ "胆" ], [ "膽" ], [ "胆" ] ], [ [ "脚" ], [ "腳" ], [ "脚" ] ], [ [ "脳" ], [ "腦" ], [ "脑" ] ], [ [ "臓" ], [ "臟" ], [ "脏" ] ], [ [ "舗" ], [ "舖" ], [ "铺" ] ], [ [ "茎" ], [ "莖" ], [ "茎" ] ], [ [ "荘" ], [ "莊" ], [ "庄" ] ], [ [ "蒋" ], [ "蔣" ], [ "蒋" ] ], [ [ "蔵" ], [ "藏" ], [ "藏" ] ], [ [ "薬" ], [ "藥" ], [ "药" ] ], [ [ "虚" ], [ "虛" ], [ "虚" ] ], [ [ "蛍" ], [ "螢" ], [ "萤" ] ], [ [ "蛮" ], [ "蠻" ], [ "蛮" ] ], [ [ "衆" ], [ "眾" ], [ "众" ] ], [ [ "装" ], [ "裝" ], [ "装" ] ], [ [ "覇" ], [ "霸" ], [ "霸" ] ], [ [ "覚" ], [ "覺" ], [ "觉" ] ], [ [ "覧" ], [ "覽" ], [ "览" ] ], [ [ "観" ], [ "觀" ], [ "观" ] ], [ [ "訳" ], [ "譯" ], [ "译" ] ], [ [ "誉" ], [ "譽" ], [ "誉" ] ], [ [ "説" ], [ "說" ], [ "说" ] ], [ [ "読" ], [ "讀" ], [ "读" ] ], [ [ "謡" ], [ "謠" ], [ "谣" ] ], [ [ "譲" ], [ "讓" ], [ "让" ] ], [ [ "賛" ], [ "贊" ], [ "赞" ] ], [ [ "践" ], [ "踐" ], [ "践" ] ], [ [ "転" ], [ "轉" ], [ "转" ] ], [ [ "軽" ], [ "輕" ], [ "轻" ] ], [ [ "辞" ], [ "辭" ], [ "辞" ] ], [ [ "辺" ], [ "邊" ], [ "边" ] ], [ [ "逓" ], [ "遞" ], [ "递" ] ], [ [ "遅" ], [ "遲" ], [ "迟" ] ], [ [ "遥" ], [ "遙" ], [ "遥" ] ], [ [ "郷" ], [ "鄉" ], [ "乡" ] ], [ [ "酔" ], [ "醉" ], [ "醉" ] ], [ [ "醸" ], [ "釀" ], [ "酿" ] ], [ [ "釈" ], [ "釋" ], [ "释" ] ], [ [ "鉄" ], [ "鐵" ], [ "铁" ] ], [ [ "鉢" ], [ "鉢" ], [ "钵" ] ], [ [ "鉱" ], [ "礦" ], [ "矿" ] ], [ [ "銭" ], [ "錢" ], [ "钱" ] ], [ [ "鋭" ], [ "鋭" ], [ "锐" ] ], [ [ "鋳" ], [ "鑄" ], [ "铸" ] ], [ [ "録" ], [ "錄" ], [ "录" ] ], [ [ "関" ], [ "關" ], [ "关" ] ], [ [ "閲" ], [ "閲" ], [ "阅" ] ], [ [ "闘" ], [ "鬥" ], [ "斗" ] ], [ [ "陥" ], [ "陷" ], [ "陷" ] ], [ [ "険" ], [ "險" ], [ "险" ] ], [ [ "随" ], [ "隨" ], [ "随" ] ], [ [ "隠" ], [ "隱" ], [ "隐" ] ], [ [ "隣" ], [ "鄰" ], [ "邻" ] ], [ [ "隷" ], [ "隷" ], [ "隶" ] ], [ [ "雑" ], [ "雜" ], [ "杂" ] ], [ [ "霊" ], [ "靈" ], [ "灵" ] ], [ [ "頼" ], [ "賴" ], [ "赖" ] ], [ [ "顔" ], [ "顏" ], [ "颜" ] ], [ [ "顕" ], [ "顯" ], [ "显" ] ], [ [ "駅" ], [ "驛" ], [ "驿" ] ], [ [ "駆" ], [ "驅" ], [ "驱" ] ], [ [ "騒" ], [ "騷" ], [ "骚" ] ], [ [ "験" ], [ "驗" ], [ "验" ] ], [ [ "騨" ], [ "驔" ], [ "驔" ] ], [ [ "髄" ], [ "髓" ], [ "髓" ] ], [ [ "鬪" ], [ "鬥" ], [ "斗" ] ], [ [ "鶏" ], [ "鷄" ], [ "鸡" ] ], [ [ "麦" ], [ "麥" ], [ "麦" ] ], [ [ "黄" ], [ "黃" ], [ "黄" ] ], [ [ "黒" ], [ "黑" ], [ "黑" ] ], [ [ "黙" ], [ "默" ], [ "默" ] ], [ [ "齢" ], [ "齡" ], [ "龄" ] ] ];
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(78), i = n(36);
function o(e, n = {}) {
n = Object.assign({}, t.defaultOptions, n);
let o = [], a = !0, s = i.transcriptionConfigs, l = i.predefineedTranscriptionConfigs;
for (let e of [ "digits", "unitNames" ]) if (Array.isArray(n[e]) && n[e].length) for (let t of n[e]) l[e][t] && (o = o.concat(Object.values(l[e][t])));
if ("number" == typeof n.truncateOne) for (let e in s.default.truncateOne) e < n.truncateOne && o.push(s.default.truncateOne[e]); else void 0 !== n.truncateOne && !0 !== n.truncateOne || !o.length || (o = o.concat(Object.values(s.default.truncateOne)));
n.chars && (o = o.concat(Array.isArray(n.chars) ? n.chars : n.chars.split(""))), 
o.length && (a = !1), o.filter(function(e) {
return 1 == e.length && e in r.characters;
}), a && (o = Object.keys(r.characters)), n.flags = n.flags || "u", n.unsafe && (n.flags = (n.flags || "") + "g");
let c = o.join(""), f = e.toString();
if (!new RegExp("([^" + c + "])").test(f)) return u(f, n);
if (n.strict) return Number.NaN;
let p = new RegExp("([" + c + "]+)", n.flags);
return f.replace(p, function(...e) {
return u(e[1], n);
}).toString();
}
function u(e, t = {}) {
t.one && (e = e.replace(/([佰百])([一二三四五六七八九壹貳參肆伍陸柒捌玖])(?![零○〇一二三四五六七八九壹貳參肆伍陸柒捌玖拾十什])/, "$1〇$2"));
let n = r(e);
return t.string && (n = n.toString()), n;
}
function a(e, t = {}) {
let n = parseInt(e);
if (Number.isNaN(n) || t && t.strict && ("number" != typeof e || n !== e)) throw new TypeError(`${e} is not valid allow number`);
return i.transcribeNumber(n, t);
}
t.defaultOptions = {
one: !0
}, t.transcriptionConfigs = i.transcriptionConfigs, t.predefineedTranscriptionConfigs = i.predefineedTranscriptionConfigs, 
t.zh2num = o, t._chinese_parseInt = u, t.num2zh = a, t.default = t;
}, function(e, t, n) {
var r = (i = {
"０": 0,
"零": 0,
"○": 0,
"〇": 0,
"洞": 0,
"１": 1,
"一": 1,
"壹": 1,
"ㄧ": 1,
"弌": 1,
"么": 1,
"２": 2,
"二": 2,
"貳": 2,
"贰": 2,
"弍": 2,
"兩": 2,
"两": 2,
"３": 3,
"三": 3,
"參": 3,
"叁": 3,
"弎": 3,
"参": 3,
"叄": 3,
"４": 4,
"四": 4,
"肆": 4,
"䦉": 4,
"刀": 4,
"５": 5,
"五": 5,
"伍": 5,
"６": 6,
"六": 6,
"陸": 6,
"陆": 6,
"７": 7,
"七": 7,
"柒": 7,
"拐": 7,
"８": 8,
"八": 8,
"捌": 8,
"杯": 8,
"９": 9,
"九": 9,
"玖": 9,
"勾": 9,
"十": 10,
"拾": 10,
"什": 10,
"呀": 10,
"百": 100,
"佰": 100,
"千": 1e3,
"仟": 1e3,
"念": 20,
"廿": 20,
"卅": 30,
"卌": 40,
"皕": 200,
"萬": 1e4,
"万": 1e4,
"億": 1e8,
"亿": 1e8,
"兆": 1e12,
"京": 1e16,
"經": 1e16,
"经": 1e16,
"垓": 1e20,
"秭": 1e24,
"杼": 1e24,
"穰": 1e28,
"壤": 1e28,
"溝": 1e32,
"沟": 1e32,
"澗": 1e36,
"涧": 1e36,
"正": 1e40,
"載": 1e44,
"極": 1e48
}, (o = function(e, t) {
var n = parseInt(e, t);
if (!isNaN(n)) return n;
if ("string" != typeof e) return NaN;
e = e.replace(/[\s　]+/g, "");
var r = /^[負负-]/.test(e);
r && (e = e.substr(1)), n = 0;
for (var o = 0, u = -1, a = 0; a < e.length; ++a) {
var s = i[e.charAt(a)];
if (void 0 === s) return NaN;
s < 10 ? u = -1 == u ? s : 10 * u + s : s < 1e4 ? (-1 == u && (u = 1), a > 1 && 0 == u && 100 != i[e.charAt(a - 2)] && (u = 1), 
o += u * s, u = -1) : (-1 != u && (o += u), a && i[e.charAt(a - 1)] >= 1e4 ? n *= i[e.charAt(a)] : n += o * s, 
o = 0, u = -1);
}
return u > 0 && (e.length > 1 ? o += (s = i[e.charAt(e.length - 2)]) < 100 ? u : u * ((s /= s.toString().charAt(0)) / 10) : o += u), 
n += o, r && (n *= -1), n;
}).characters = i, o), i, o;
e.exports = r;
}, function(e, t, n) {
"use strict";
e.exports = function(e) {
e.katakanaRegex = new RegExp("([\\u30a1-\\u30f4\\u30f7-\\u30fa\\u30fd-\\u30ff\\u31f0-\\u31ff]|\\ud869\\udf08\\u3099|\\ud869\\udf08|\\ud82c\\udc00)", "g"), 
e.hiraganaRegex = new RegExp("([\\u3041-\\u3094\\u309d-\\u309f]|\\ud82c\\udc01)", "g"), 
e.specialHiraganizationTable = {
"ヿ": "こと",
"𪜈": "とも",
"𪜈゙": "ども",
"ヷ": "わ゙",
"ヸ": "ゐ゙",
"ヹ": "ゑ゙",
"ヺ": "を゙",
"𛀀": "え",
"ㇰ": "く",
"ㇱ": "し",
"ㇲ": "す",
"ㇳ": "と",
"ㇴ": "ぬ",
"ㇵ": "は",
"ㇶ": "ひ",
"ㇷ": "ふ",
"ㇸ": "へ",
"ㇹ": "ほ",
"ㇺ": "む",
"ㇻ": "ら",
"ㇼ": "り",
"ㇽ": "る",
"ㇾ": "れ",
"ㇿ": "ろ"
}, e.specialKatakanizationTable = {
"ゟ": "ヨリ",
"𛀁": "エ"
};
var t = String.fromCharCode, n = function e(t) {
return t.charCodeAt(0);
};
e.hiraganize = function(r) {
return r.replace(e.katakanaRegex, function(r) {
return r.match(/^[\u30a1-\u30f4\u30fd\u30fe]$/) ? t(n(r) - n("ァ") + n("ぁ")) : e.specialHiraganizationTable[r] ? e.specialHiraganizationTable[r] : void 0;
});
}, e.katakanize = function(r) {
return r.replace(e.hiraganaRegex, function(r) {
return r.match(/^[\u3041-\u3094\u309d\u309e]$/) ? t(n(r) - n("ぁ") + n("ァ")) : e.specialKatakanizationTable[r] ? e.specialKatakanizationTable[r] : void 0;
});
};
};
}, function(e, t, n) {
"use strict";
var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}, i = n(37);
e.exports = function(e) {
e.romanizationTable = {
"あ": "a",
"い": "i",
"う": "u",
"え": "e",
"お": "o",
"か": "ka",
"き": "ki",
"く": "ku",
"け": "ke",
"こ": "ko",
"さ": "sa",
"し": "si",
"す": "su",
"せ": "se",
"そ": "so",
"た": "ta",
"ち": "ti",
"つ": "tu",
"て": "te",
"と": "to",
"な": "na",
"に": "ni",
"ぬ": "nu",
"ね": "ne",
"の": "no",
"は": "ha",
"ひ": "hi",
"ふ": "hu",
"へ": "he",
"ほ": "ho",
"ま": "ma",
"み": "mi",
"む": "mu",
"め": "me",
"も": "mo",
"や": "ya",
"ゆ": "yu",
"よ": "yo",
"ら": "ra",
"り": "ri",
"る": "ru",
"れ": "re",
"ろ": "ro",
"わ": "wa",
"ゐ": "wi",
"ゑ": "we",
"を": "wo",
"ん": "n",
"が": "ga",
"ぎ": "gi",
"ぐ": "gu",
"げ": "ge",
"ご": "go",
"ざ": "za",
"じ": "zi",
"ず": "zu",
"ぜ": "ze",
"ぞ": "zo",
"だ": "da",
"ぢ": "di",
"づ": "du",
"で": "de",
"ど": "do",
"ば": "ba",
"び": "bi",
"ぶ": "bu",
"べ": "be",
"ぼ": "bo",
"ゔ": "vu",
"ぱ": "pa",
"ぴ": "pi",
"ぷ": "pu",
"ぺ": "pe",
"ぽ": "po",
"きゃ": "kya",
"きゅ": "kyu",
"きぇ": "kye",
"きょ": "kyo",
"しゃ": "sya",
"しゅ": "syu",
"しぇ": "sye",
"しょ": "syo",
"ちゃ": "tya",
"ちゅ": "tyu",
"ちぇ": "tye",
"ちょ": "tyo",
"にゃ": "nya",
"にゅ": "nyu",
"にぇ": "nye",
"にょ": "nyo",
"ひゃ": "hya",
"ひゅ": "hyu",
"ひぇ": "hye",
"ひょ": "hyo",
"みゃ": "mya",
"みゅ": "my",
"みぇ": "mye",
"みょ": "myo",
"りゃ": "rya",
"りゅ": "ryu",
"りぇ": "rye",
"りょ": "ryo",
"ぎゃ": "gya",
"ぎゅ": "gyu",
"ぎぇ": "gye",
"ぎょ": "gyo",
"じゃ": "zya",
"じゅ": "zyu",
"じぇ": "zye",
"じょ": "zyo",
"ぢゃ": "dya",
"ぢゅ": "dyu",
"ぢぇ": "dye",
"ぢょ": "dyo",
"びゃ": "bya",
"びゅ": "byu",
"びぇ": "bye",
"びょ": "byo",
"ゔぁ": "va",
"ゔぃ": "vi",
"ゔぇ": "ve",
"ゔぉ": "vo",
"ぴゃ": "pya",
"ぴゅ": "pyu",
"ぴぇ": "pye",
"ぴょ": "pyo",
"いぃ": "yi",
"いぇ": "ye",
"うぁ": "wa",
"うぃ": "wi",
"うぅ": "wu",
"うぇ": "we",
"うぉ": "wo",
"うゅ": "wyu",
"ゔゃ": "vya",
"ゔゅ": "vyu",
"ゔょ": "vyo",
"くぁ": "kwa",
"くぃ": "kwi",
"くぅ": "kwu",
"くぇ": "kwe",
"くぉ": "kwo",
"くゎ": "kwa",
"ぐぁ": "gwa",
"ぐぃ": "gwi",
"ぐぅ": "gwu",
"ぐぇ": "gwe",
"ぐぉ": "gwo",
"ぐゎ": "gwa",
"すぃ": "si",
"ずぃ": "zi",
"つぁ": "tua",
"つぃ": "tui",
"つぇ": "tue",
"つぉ": "tuo",
"つゅ": "tuyu",
"づぁ": "dua",
"づぃ": "dui",
"づぇ": "due",
"づぉ": "duo",
"てゃ": "tea",
"てぃ": "tei",
"てゅ": "teu",
"てぇ": "tee",
"てょ": "teo",
"とぅ": "tou",
"でゃ": "dea",
"でぃ": "dei",
"でゅ": "deu",
"でぇ": "dee",
"でょ": "deo",
"どぅ": "dou",
"ふぁ": "hua",
"ふぃ": "hui",
"ふぇ": "hue",
"ふぉ": "huo",
"ふゃ": "huya",
"ふゅ": "huyu",
"ふょ": "huyo",
"ほぅ": "hu",
"ら゚": "la",
"り゚": "li",
"る゚": "lu",
"れ゚": "le",
"ろ゚": "lo",
"わ゙": "va",
"ゐ゙": "vi",
"ゑ゙": "ve",
"を゙": "vo",
"ぁ": "a",
"ぃ": "i",
"ぅ": "u",
"ぇ": "e",
"ぉ": "o",
"ゃ": "ya",
"ゅ": "yu",
"ょ": "yo",
"っ": "tu",
"ゎ": "wa",
"ヵ": "ka",
"ヶ": "ke"
}, e.romanizePuncutuationTable = {
"。": ".",
"、": ",",
"・": "-",
"－": "-",
"「": "“",
"」": "”",
"（": "(",
"）": ")",
"　": " ",
" ": " "
}, e.defaultRomanizationConfig = {
"し": "shi",
"ち": "chi",
"つ": "tsu",
"ふ": "fu",
"じ": "ji",
"ぢ": "ji",
"づ": "zu",
"ああ": "aa",
"いい": "ii",
"うう": "ū",
"ええ": "ee",
"おお": "ō",
"あー": "ā",
"えい": "ei",
"おう": "ō",
"んあ": "n'a",
"んば": "nba",
"っち": "tchi",
"ゐ": "i",
"を": "o",
punctuation: !0
}, e.romanizationConfigs = {
wikipedia: {},
"traditional hepburn": {
"を": "wo",
"んあ": "n-a",
"んば": "mba"
},
"modified hepburn": {
"ああ": "ā",
"いい": "ii",
"うう": "ū",
"ええ": "ē",
"おお": "ō"
},
kunrei: {
"し": "si",
"ち": "ti",
"つ": "tu",
"ふ": "hu",
"じ": "zi",
"ぢ": "zi",
"づ": "zu",
"ああ": "â",
"いい": "î",
"うう": "û",
"ええ": "ê",
"おお": "ô",
"あー": "â",
"おう": "ô",
"っち": "tti"
},
nihon: {
"し": "si",
"ち": "ti",
"つ": "tu",
"ふ": "hu",
"じ": "zi",
"ぢ": "di",
"づ": "du",
"ああ": "ā",
"いい": "ī",
"うう": "ū",
"ええ": "ē",
"おお": "ō",
"あー": "ā",
"おう": "ō",
"っち": "tti",
"ゐ": "wi",
"を": "wo"
}
}, e.romanize = function(t, n) {
if (void 0 === n && (n = "wikipedia"), "string" == typeof n && void 0 === (n = e.romanizationConfigs[n])) throw new ReferenceError('Romanization method "' + n + '" is undefined');
if ("object" !== (void 0 === n ? "undefined" : r(n))) throw new Error("You specified unknown config to japanese.romanize");
n = i({}, e.defaultRomanizationConfig, n);
var o = i({}, e.romanizationTable);
"shi" === n["し"] && i(o, {
"し": "shi",
"しゃ": "sha",
"しゅ": "shu",
"しぇ": "she",
"しょ": "sho"
}), "chi" === n["ち"] && i(o, {
"ち": "chi",
"ちゃ": "cha",
"ちゅ": "chu",
"ちぇ": "che",
"ちょ": "cho",
"てぃ": "ti",
"てゅ": "tyu"
}), "tsu" === n["つ"] && i(o, {
"つ": "tsu",
"つぁ": "tsa",
"つぃ": "tsi",
"つぇ": "tse",
"つぉ": "tso",
"つゅ": "tsyu",
"とぅ": "tu"
}), "fu" === n["ふ"] && i(o, {
"ふ": "fu",
"ふぁ": "fa",
"ふぃ": "fi",
"ふぇ": "fe",
"ふぉ": "fo",
"ふゃ": "fya",
"ふゅ": "fyu",
"ふょ": "fyo"
}), "ji" === n["じ"] && i(o, {
"じ": "ji",
"じゃ": "ja",
"じゅ": "ju",
"じぇ": "je",
"じょ": "jo"
}), "ji" === n["ぢ"] && i(o, {
"ぢ": "ji",
"ぢゃ": "ja",
"ぢゅ": "ju",
"ぢぇ": "je",
"ぢょ": "jo",
"でぃ": "di",
"でゅ": "dyu"
}), "zi" === n["ぢ"] && i(o, {
"ぢ": "zi",
"ぢゃ": "zya",
"ぢゅ": "zyu",
"ぢぇ": "zye",
"ぢょ": "zyo",
"でぃ": "di",
"でゅ": "dyu"
}), "dji" === n["ぢ"] && i(o, {
"ぢ": "dji",
"ぢゃ": "dja",
"ぢゅ": "dju",
"ぢぇ": "dje",
"ぢょ": "djo",
"でぃ": "di",
"でゅ": "dyu"
}), "dzi" === n["ぢ"] && i(o, {
"ぢ": "dzi",
"ぢゃ": "dzya",
"ぢゅ": "dzyu",
"ぢぇ": "dzye",
"ぢょ": "dzyo",
"でぃ": "di",
"でゅ": "dyu"
}), "zu" === n["づ"] && i(o, {
"づ": "zu",
"づぁ": "zua",
"づぃ": "zui",
"づぇ": "zue",
"づぉ": "zuo",
"どぅ": "du"
}), "dsu" === n["づ"] && i(o, {
"づ": "dsu",
"づぁ": "dsua",
"づぃ": "dsui",
"づぇ": "dsue",
"づぉ": "dsuo",
"どぅ": "du"
}), "dzu" === n["づ"] && i(o, {
"づ": "dzu",
"づぁ": "dzua",
"づぃ": "dzui",
"づぇ": "dzue",
"づぉ": "dzuo",
"どぅ": "du"
}), "i" === n["ゐ"] && i(o, {
"ゐ": "i",
"ゑ": "e"
}), "o" === n["を"] && i(o, {
"を": "o"
}), t = e.hiraganize(t);
for (var u = "", a = ""; t.length > 0; ) {
var s = "";
if (o[t.slice(0, 2)] ? (s = t.slice(0, 2), t = t.slice(2)) : (s = t[0], t = t.slice(1)), 
"っ" !== s) {
var l = o[s] || "";
"っ" === a && (l.match(/^[^aiueo]/) ? l = "ち" === s[0] ? "tchi" === n["っち"] ? {
"ち": "tchi",
"ちゃ": "tcha",
"ちゅ": "tchu",
"ちぇ": "tche",
"ちょ": "tcho"
}[s] : "cchi" === n["っち"] ? {
"ち": "cchi",
"ちゃ": "ccha",
"ちゅ": "cchu",
"ちぇ": "cche",
"ちょ": "ccho"
}[s] : {
"ち": "tti",
"ちゃ": "ttya",
"ちゅ": "ttyu",
"ちぇ": "ttye",
"ちょ": "ttyo"
}[s] : l[0] + l : u += "'"), "ー" === s ? u.match(/[aiueo]$/) ? ("a" === n["あー"] || ("ah" === n["あー"] ? u += "h" : "a-" === n["あー"] ? u += "-" : "aa" === n["あー"] ? u = u.slice(0, -1) + {
a: "aa",
i: "ii",
u: "uu",
e: "ee",
o: "oo"
}[u.slice(-1)] : "â" === n["あー"] ? u = u.slice(0, -1) + {
a: "â",
i: "î",
u: "û",
e: "ê",
o: "ô"
}[u.slice(-1)] : "ā" === n["あー"] && (u = u.slice(0, -1) + {
a: "ā",
i: "ī",
u: "ū",
e: "ē",
o: "ō"
}[u.slice(-1)])), l = "") : l = "-" : "e" === u.slice(-1) && "i" === l[0] ? (l = l.slice(1), 
"ei" === n["えい"] ? u += "i" : "ee" === n["えい"] ? u += "e" : "eh" === n["えい"] ? u += "h" : "ê" === n["えい"] ? u = u.slice(0, -1) + "ê" : "ē" === n["えい"] ? u = u.slice(0, -1) + "ē" : n["えい"]) : "o" === u.slice(-1) && "u" === l[0] ? (l = l.slice(1), 
"ou" === n["おう"] ? u += "u" : "oo" === n["おう"] ? u += "o" : "oh" === n["おう"] ? u += "h" : "ô" === n["おう"] ? u = u.slice(0, -1) + "ô" : "ō" === n["おう"] ? u = u.slice(0, -1) + "ō" : n["おう"]) : u.match(/[aiueo]$/) && u.slice(-1) === l[0] && "を" !== s && (l = l.slice(1), 
u = u.slice(0, -1) + n[{
a: "ああ",
i: "いい",
u: "うう",
e: "ええ",
o: "おお"
}[u.slice(-1)]]), l.match(/^[bpm]/) && "ん" === a && ("nba" === n["んば"] || "mba" === n["んば"] && (u = u.slice(0, -1) + "m")), 
l.match(/^[aiueoy]/) && "ん" === a && ("na" === n["んあ"] || ("n'a" === n["んあ"] ? l = "'" + l : "n-a" === n["んあ"] && (l = "-" + l))), 
n.punctuation && e.romanizePuncutuationTable[s] && (l = e.romanizePuncutuationTable[s]), 
u += l, a = s;
} else a = s;
}
return "っ" === a && (u += "'"), u;
};
};
}, function(e, t, n) {
"use strict";
(function(t) {
var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}, i = n(37), o = n(86);
function u(e, t) {
var n, r;
return !!((e[Math.floor(t / 8)] || 0) & 1 << 7 - t % 8);
}
function a(e, t, n) {
for (var r = new o(0), i = t; i < t + n; i++) r = r.times(2), u(e, i) && (r = r.plus(1));
return r;
}
var s = 9007199254740991, l = -9007199254740991;
e.exports = function(e) {
return e.transcriptionConfigs = {
default: {
minusSign: "マイナス",
decimalPoint: "・",
digits: "common",
unitNames: "jinkoki3",
specialUnitNames: "none",
truncateOne: [ "十", "百", "千", "拾", "佰", "阡", "仟" ],
smallUnitNames: "none"
},
formal: {
digits: "formal",
unitNames: "formal",
specialUnitNames: "common",
smallUnitNames: "common"
},
traditional: {
digits: "traditional",
specialUnitNames: "full",
smallUnitNames: "full"
}
}, e.predefineedTranscriptionConfigs = {
digits: {
arabic: {
0: "0",
1: "1",
2: "2",
3: "3",
4: "4",
5: "5",
6: "6",
7: "7",
8: "8",
9: "9"
},
common: {
0: "〇",
1: "一",
2: "二",
3: "三",
4: "四",
5: "五",
6: "六",
7: "七",
8: "八",
9: "九"
},
formal: {
0: "〇",
1: "壱",
2: "弐",
3: "参",
4: "四",
5: "五",
6: "六",
7: "七",
8: "八",
9: "九"
},
traditional: {
0: "零",
1: "壱",
2: "弐",
3: "参",
4: "肆",
5: "伍",
6: "陸",
7: "柒",
8: "捌",
9: "玖"
},
traditionalOld: {
0: "零",
1: "壹",
2: "貳",
3: "參",
4: "肆",
5: "伍",
6: "陸",
7: "柒",
8: "捌",
9: "玖"
},
simplified: {
0: "零",
1: "壹",
2: "贰",
3: "叁",
4: "肆",
5: "伍",
6: "陆",
7: "柒",
8: "捌",
9: "玖"
},
chineseMilitary: {
0: "洞",
1: "幺",
2: "两",
3: "三",
4: "刀",
5: "五",
6: "六",
7: "拐",
8: "八",
9: "勾"
},
vietnam: {
0: "〇",
1: "𠬠",
2: "𠄩",
3: "𠀧",
4: "𦊚",
5: "𠄼",
6: "𦒹",
7: "𦉱",
8: "𠔭",
9: "𠃩"
}
},
unitNames: {
jinkoki1: {
1: "十",
2: "百",
3: "千",
4: "万",
5: "億",
6: "兆",
7: "京",
8: "垓",
9: "𥝱",
10: "穣",
11: "溝",
12: "澗",
13: "正",
14: "載",
15: "極",
23: "恒河沙",
31: "阿僧祇",
39: "那由他",
47: "不可思議",
55: "無量大数",
lit: 63
},
jinkoki2: {
1: "十",
2: "百",
3: "千",
4: "万",
8: "億",
12: "兆",
16: "京",
20: "垓",
24: "𥝱",
28: "穣",
32: "溝",
36: "澗",
40: "正",
44: "載",
48: "極",
56: "恒河沙",
64: "阿僧祇",
72: "那由他",
80: "不可思議",
88: "無量大数",
lit: 96
},
jinkoki3: {
1: "十",
2: "百",
3: "千",
4: "万",
8: "億",
12: "兆",
16: "京",
20: "垓",
24: "𥝱",
28: "穣",
32: "溝",
36: "澗",
40: "正",
44: "載",
48: "極",
52: "恒河沙",
56: "阿僧祇",
60: "那由他",
64: "不可思議",
68: "無量大数",
lit: 72
},
josu: {
1: "十",
2: "百",
3: "千",
4: "万",
8: "億",
16: "兆",
32: "京",
64: "垓",
128: "𥝱",
256: "穣",
512: "溝",
1024: "澗",
2048: "正",
4096: "載",
8192: "極",
16384: "恒河沙",
32768: "阿僧祇",
65536: "那由他",
131072: "不可思議",
262144: "無量大数",
lit: 524288
},
formal: {
1: "拾",
2: "百",
3: "千",
4: "万",
8: "億",
12: "兆",
16: "京",
20: "垓",
24: "𥝱",
28: "穣",
32: "溝",
36: "澗",
40: "正",
44: "載",
48: "極",
52: "恒河沙",
56: "阿僧祇",
60: "那由他",
64: "不可思議",
68: "無量大数",
lit: 72
}
},
specialUnitNames: {
none: {},
common: {
20: "廿",
30: "卅"
},
full: {
20: "廿",
30: "卅",
40: "卌",
200: "皕"
}
},
smallUnitNames: {
none: {},
common: {
1: "分",
2: "厘",
3: "毛",
4: "糸"
},
wari: {
1: "割",
2: "分",
3: "厘",
4: "毛",
5: "糸"
},
full: {
1: "分",
2: "厘",
3: "毛",
4: "糸",
5: "忽",
6: "微",
7: "繊",
8: "沙",
9: "塵",
10: "埃",
11: "渺",
12: "漠",
13: "模糊",
14: "逡巡",
15: "須臾",
16: "瞬息",
17: "弾指",
18: "刹那",
19: "六徳",
20: "虚空",
21: "清浄"
},
wariFull: {
1: "割",
2: "分",
3: "厘",
4: "毛",
5: "糸",
6: "忽",
7: "微",
8: "繊",
9: "沙",
10: "塵",
11: "埃",
12: "渺",
13: "漠",
14: "模糊",
15: "逡巡",
16: "須臾",
17: "瞬息",
18: "弾指",
19: "刹那",
20: "六徳",
21: "虚空",
22: "清浄"
}
}
}, e.transcribeNumber = function(n, s) {
if (void 0 === s && (s = e.transcriptionConfigs.default), "string" == typeof s && void 0 === (s = e.transcriptionConfigs[s])) throw new ReferenceError('Transcription method "' + s + '" is undefined');
if ("object" !== (void 0 === s ? "undefined" : r(s))) throw new Error("You specified unknown config to japanese.transcribeNumber");
if ("string" == typeof (s = i({}, e.transcriptionConfigs.default, s)).digits && (s.digits = e.predefineedTranscriptionConfigs.digits[s.digits], 
void 0 === s.digits)) throw new ReferenceError('Transcription method of digits "' + s.digits + '" is undefined');
if ("string" == typeof s.unitNames && (s.unitNames = e.predefineedTranscriptionConfigs.unitNames[s.unitNames], 
void 0 === s.unitNames)) throw new ReferenceError('Transcription method of unitNames "' + s.unitNames + '" is undefined');
if ("string" == typeof s.specialUnitNames && (s.specialUnitNames = e.predefineedTranscriptionConfigs.specialUnitNames[s.specialUnitNames], 
void 0 === s.specialUnitNames)) throw new ReferenceError('Transcription method of specialUnitNames "' + s.specialUnitNames + '" is undefined');
if ("string" == typeof s.smallUnitNames && (s.smallUnitNames = e.predefineedTranscriptionConfigs.smallUnitNames[s.smallUnitNames], 
void 0 === s.smallUnitNames)) throw new ReferenceError('Transcription method of smallUnitNames "' + s.smallUnitNames + '" is undefined');
if ("number" == typeof n) if (l <= n && n < 9007199254740991) n = n.toString(); else {
var c = new t(8);
c.writeDoubleBE(n, 0);
var f = u(c, 0), p = a(c, 1, 11), d = a(c, 12, 52), h = null;
0 === (p = parseInt(p.toString())) ? (h = d, p = 1) : h = new o(2).pow(52).plus(d), 
n = h.times(new o(2).pow(p - 1023 - 52)).toFixed(), f && (n = "-" + n);
} else if ("string" != typeof n) throw new ReferenceError("Type of `number` is unsupported");
var g = n.length, y = "", m = !1;
if (s.unitNames.lit && g > s.unitNames.lit && (y = n.slice(0, -s.unitNames.lit).split("").map(function(e) {
return s.digits[e];
}).join(""), n = n.slice(-s.unitNames.lit), g = n.length, "0" === n[0] && (m = !0, 
n = "9" + n.slice(1))), "0" === n) return s.digits[0];
var v = "";
"0" !== n.slice(-1) && (v += s.digits[n.slice(-1)]);
var b = Object.keys(s.unitNames).map(function(e) {
return parseInt(e);
}).filter(function(e, t, n) {
return n.indexOf(e) === t;
}).filter(function(e) {
return isFinite(e) && e > 0;
}).sort(function(e, t) {
return e - t;
});
return b.forEach(function(t, r) {
var i = b[r + 1] || Infinity, o = n.slice(Math.max(g - i, 0), Math.max(g - t, 0));
o.length > 0 && (o.split("").every(function(e) {
return "0" === e;
}) || (v = -1 !== s.truncateOne.indexOf(s.unitNames[t]) && 1 === parseInt(o) ? s.unitNames[t] + v : e.transcribeNumber(o, s) + s.unitNames[t] + v));
}), m && (v = v.replace(new RegExp("^" + s.digits[9]), s.digits[0])), v = y + v;
}, e;
};
}).call(this, n(82).Buffer);
}, function(e, t, n) {
"use strict";
(function(e) {
var r = n(83), i = n(84), o = n(85);
function u() {
try {
var e = new Uint8Array(1);
return e.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function() {
return 42;
}
}, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
} catch (e) {
return !1;
}
}
function a() {
return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function s(e, t) {
if (a() < t) throw new RangeError("Invalid typed array length");
return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), 
e.length = t), e;
}
function l(e, t, n) {
if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
if ("number" == typeof e) {
if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
return d(this, e);
}
return c(this, e, t, n);
}
function c(e, t, n, r) {
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? y(e, t, n, r) : "string" == typeof t ? h(e, t, n) : m(e, t);
}
function f(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function p(e, t, n, r) {
return f(t), t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t);
}
function d(e, t) {
if (f(t), e = s(e, t < 0 ? 0 : 0 | v(t)), !l.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
return e;
}
function h(e, t, n) {
if ("string" == typeof n && "" !== n || (n = "utf8"), !l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var r = 0 | _(t, n), i = (e = s(e, r)).write(t, n);
return i !== r && (e = e.slice(0, i)), e;
}
function g(e, t) {
var n = t.length < 0 ? 0 : 0 | v(t.length);
e = s(e, n);
for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
return e;
}
function y(e, t, n, r) {
if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), 
l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = g(e, t), e;
}
function m(e, t) {
if (l.isBuffer(t)) {
var n = 0 | v(t.length);
return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e);
}
if (t) {
if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || te(t.length) ? s(e, 0) : g(e, t);
if ("Buffer" === t.type && o(t.data)) return g(e, t.data);
}
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function v(e) {
if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
return 0 | e;
}
function b(e) {
return +e != e && (e = 0), l.alloc(+e);
}
function _(e, t) {
if (l.isBuffer(e)) return e.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
"string" != typeof e && (e = "" + e);
var n = e.length;
if (0 === n) return 0;
for (var r = !1; ;) switch (t) {
case "ascii":
case "latin1":
case "binary":
return n;

case "utf8":
case "utf-8":
case void 0:
return Z(e).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * n;

case "hex":
return n >>> 1;

case "base64":
return X(e).length;

default:
if (r) return Z(e).length;
t = ("" + t).toLowerCase(), r = !0;
}
}
function w(e, t, n) {
var r = !1;
if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
if ((n >>>= 0) <= (t >>>= 0)) return "";
for (e || (e = "utf8"); ;) switch (e) {
case "hex":
return I(this, t, n);

case "utf8":
case "utf-8":
return M(this, t, n);

case "ascii":
return L(this, t, n);

case "latin1":
case "binary":
return z(this, t, n);

case "base64":
return R(this, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return D(this, t, n);

default:
if (r) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase(), r = !0;
}
}
function x(e, t, n) {
var r = e[t];
e[t] = e[n], e[n] = r;
}
function A(e, t, n, r, i) {
if (0 === e.length) return -1;
if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
if (i) return -1;
n = e.length - 1;
} else if (n < 0) {
if (!i) return -1;
n = 0;
}
if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : E(e, t, n, r, i);
if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : E(e, [ t ], n, r, i);
throw new TypeError("val must be string, number or Buffer");
}
function E(e, t, n, r, i) {
var o = 1, u = e.length, a = t.length, s;
if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
if (e.length < 2 || t.length < 2) return -1;
o = 2, u /= 2, a /= 2, n /= 2;
}
function l(e, t) {
return 1 === o ? e[t] : e.readUInt16BE(t * o);
}
if (i) {
var c = -1;
for (s = n; s < u; s++) if (l(e, s) === l(t, -1 === c ? 0 : s - c)) {
if (-1 === c && (c = s), s - c + 1 === a) return c * o;
} else -1 !== c && (s -= s - c), c = -1;
} else for (n + a > u && (n = u - a), s = n; s >= 0; s--) {
for (var f = !0, p = 0; p < a; p++) if (l(e, s + p) !== l(t, p)) {
f = !1;
break;
}
if (f) return s;
}
return -1;
}
function T(e, t, n, r) {
n = Number(n) || 0;
var i = e.length - n;
r ? (r = Number(r)) > i && (r = i) : r = i;
var o = t.length;
if (o % 2 != 0) throw new TypeError("Invalid hex string");
r > o / 2 && (r = o / 2);
for (var u = 0; u < r; ++u) {
var a = parseInt(t.substr(2 * u, 2), 16);
if (isNaN(a)) return u;
e[n + u] = a;
}
return u;
}
function S(e, t, n, r) {
return ee(Z(t, e.length - n), e, n, r);
}
function j(e, t, n, r) {
return ee(J(t), e, n, r);
}
function C(e, t, n, r) {
return j(e, t, n, r);
}
function O(e, t, n, r) {
return ee(X(t), e, n, r);
}
function k(e, t, n, r) {
return ee(Q(t, e.length - n), e, n, r);
}
function R(e, t, n) {
return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
}
function M(e, t, n) {
n = Math.min(e.length, n);
for (var r = [], i = t; i < n; ) {
var o = e[i], u = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1, s, l, c, f;
if (i + a <= n) switch (a) {
case 1:
o < 128 && (u = o);
break;

case 2:
128 == (192 & (s = e[i + 1])) && (f = (31 & o) << 6 | 63 & s) > 127 && (u = f);
break;

case 3:
s = e[i + 1], l = e[i + 2], 128 == (192 & s) && 128 == (192 & l) && (f = (15 & o) << 12 | (63 & s) << 6 | 63 & l) > 2047 && (f < 55296 || f > 57343) && (u = f);
break;

case 4:
s = e[i + 1], l = e[i + 2], c = e[i + 3], 128 == (192 & s) && 128 == (192 & l) && 128 == (192 & c) && (f = (15 & o) << 18 | (63 & s) << 12 | (63 & l) << 6 | 63 & c) > 65535 && f < 1114112 && (u = f);
}
null === u ? (u = 65533, a = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), 
u = 56320 | 1023 & u), r.push(u), i += a;
}
return N(r);
}
t.Buffer = l, t.SlowBuffer = b, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : u(), 
t.kMaxLength = a(), l.poolSize = 8192, l._augment = function(e) {
return e.__proto__ = l.prototype, e;
}, l.from = function(e, t, n) {
return c(null, e, t, n);
}, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, 
"undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
value: null,
configurable: !0
})), l.alloc = function(e, t, n) {
return p(null, e, t, n);
}, l.allocUnsafe = function(e) {
return d(null, e);
}, l.allocUnsafeSlow = function(e) {
return d(null, e);
}, l.isBuffer = function e(t) {
return !(null == t || !t._isBuffer);
}, l.compare = function e(t, n) {
if (!l.isBuffer(t) || !l.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
if (t === n) return 0;
for (var r = t.length, i = n.length, o = 0, u = Math.min(r, i); o < u; ++o) if (t[o] !== n[o]) {
r = t[o], i = n[o];
break;
}
return r < i ? -1 : i < r ? 1 : 0;
}, l.isEncoding = function e(t) {
switch (String(t).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
}, l.concat = function e(t, n) {
if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === t.length) return l.alloc(0);
var r;
if (void 0 === n) for (n = 0, r = 0; r < t.length; ++r) n += t[r].length;
var i = l.allocUnsafe(n), u = 0;
for (r = 0; r < t.length; ++r) {
var a = t[r];
if (!l.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
a.copy(i, u), u += a.length;
}
return i;
}, l.byteLength = _, l.prototype._isBuffer = !0, l.prototype.swap16 = function e() {
var t = this.length;
if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var n = 0; n < t; n += 2) x(this, n, n + 1);
return this;
}, l.prototype.swap32 = function e() {
var t = this.length;
if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var n = 0; n < t; n += 4) x(this, n, n + 3), x(this, n + 1, n + 2);
return this;
}, l.prototype.swap64 = function e() {
var t = this.length;
if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var n = 0; n < t; n += 8) x(this, n, n + 7), x(this, n + 1, n + 6), x(this, n + 2, n + 5), 
x(this, n + 3, n + 4);
return this;
}, l.prototype.toString = function e() {
var t = 0 | this.length;
return 0 === t ? "" : 0 === arguments.length ? M(this, 0, t) : w.apply(this, arguments);
}, l.prototype.equals = function e(t) {
if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
return this === t || 0 === l.compare(this, t);
}, l.prototype.inspect = function e() {
var n = "", r = t.INSPECT_MAX_BYTES;
return this.length > 0 && (n = this.toString("hex", 0, r).match(/.{2}/g).join(" "), 
this.length > r && (n += " ... ")), "<Buffer " + n + ">";
}, l.prototype.compare = function e(t, n, r, i, o) {
if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
if (void 0 === n && (n = 0), void 0 === r && (r = t ? t.length : 0), void 0 === i && (i = 0), 
void 0 === o && (o = this.length), n < 0 || r > t.length || i < 0 || o > this.length) throw new RangeError("out of range index");
if (i >= o && n >= r) return 0;
if (i >= o) return -1;
if (n >= r) return 1;
if (this === t) return 0;
for (var u = (o >>>= 0) - (i >>>= 0), a = (r >>>= 0) - (n >>>= 0), s = Math.min(u, a), c = this.slice(i, o), f = t.slice(n, r), p = 0; p < s; ++p) if (c[p] !== f[p]) {
u = c[p], a = f[p];
break;
}
return u < a ? -1 : a < u ? 1 : 0;
}, l.prototype.includes = function e(t, n, r) {
return -1 !== this.indexOf(t, n, r);
}, l.prototype.indexOf = function e(t, n, r) {
return A(this, t, n, r, !0);
}, l.prototype.lastIndexOf = function e(t, n, r) {
return A(this, t, n, r, !1);
}, l.prototype.write = function e(t, n, r, i) {
if (void 0 === n) i = "utf8", r = this.length, n = 0; else if (void 0 === r && "string" == typeof n) i = n, 
r = this.length, n = 0; else {
if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
n |= 0, isFinite(r) ? (r |= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0);
}
var o = this.length - n;
if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
i || (i = "utf8");
for (var u = !1; ;) switch (i) {
case "hex":
return T(this, t, n, r);

case "utf8":
case "utf-8":
return S(this, t, n, r);

case "ascii":
return j(this, t, n, r);

case "latin1":
case "binary":
return C(this, t, n, r);

case "base64":
return O(this, t, n, r);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return k(this, t, n, r);

default:
if (u) throw new TypeError("Unknown encoding: " + i);
i = ("" + i).toLowerCase(), u = !0;
}
}, l.prototype.toJSON = function e() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
var P = 4096;
function N(e) {
var t = e.length;
if (t <= P) return String.fromCharCode.apply(String, e);
for (var n = "", r = 0; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, r += P));
return n;
}
function L(e, t, n) {
var r = "";
n = Math.min(e.length, n);
for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
return r;
}
function z(e, t, n) {
var r = "";
n = Math.min(e.length, n);
for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
return r;
}
function I(e, t, n) {
var r = e.length;
(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
for (var i = "", o = t; o < n; ++o) i += V(e[o]);
return i;
}
function D(e, t, n) {
for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
return i;
}
function $(e, t, n) {
if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
}
function H(e, t, n, r, i, o) {
if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
if (n + r > e.length) throw new RangeError("Index out of range");
}
function F(e, t, n, r) {
t < 0 && (t = 65535 + t + 1);
for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
}
function U(e, t, n, r) {
t < 0 && (t = 4294967295 + t + 1);
for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255;
}
function G(e, t, n, r, i, o) {
if (n + r > e.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("Index out of range");
}
function B(e, t, n, r, o) {
return o || G(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), i.write(e, t, n, r, 23, 4), 
n + 4;
}
function q(e, t, n, r, o) {
return o || G(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), i.write(e, t, n, r, 52, 8), 
n + 8;
}
l.prototype.slice = function e(t, n) {
var r = this.length, i;
if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), 
n < t && (n = t), l.TYPED_ARRAY_SUPPORT) (i = this.subarray(t, n)).__proto__ = l.prototype; else {
var o = n - t;
i = new l(o, void 0);
for (var u = 0; u < o; ++u) i[u] = this[u + t];
}
return i;
}, l.prototype.readUIntLE = function e(t, n, r) {
t |= 0, n |= 0, r || $(t, n, this.length);
for (var i = this[t], o = 1, u = 0; ++u < n && (o *= 256); ) i += this[t + u] * o;
return i;
}, l.prototype.readUIntBE = function e(t, n, r) {
t |= 0, n |= 0, r || $(t, n, this.length);
for (var i = this[t + --n], o = 1; n > 0 && (o *= 256); ) i += this[t + --n] * o;
return i;
}, l.prototype.readUInt8 = function e(t, n) {
return n || $(t, 1, this.length), this[t];
}, l.prototype.readUInt16LE = function e(t, n) {
return n || $(t, 2, this.length), this[t] | this[t + 1] << 8;
}, l.prototype.readUInt16BE = function e(t, n) {
return n || $(t, 2, this.length), this[t] << 8 | this[t + 1];
}, l.prototype.readUInt32LE = function e(t, n) {
return n || $(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
}, l.prototype.readUInt32BE = function e(t, n) {
return n || $(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
}, l.prototype.readIntLE = function e(t, n, r) {
t |= 0, n |= 0, r || $(t, n, this.length);
for (var i = this[t], o = 1, u = 0; ++u < n && (o *= 256); ) i += this[t + u] * o;
return i >= (o *= 128) && (i -= Math.pow(2, 8 * n)), i;
}, l.prototype.readIntBE = function e(t, n, r) {
t |= 0, n |= 0, r || $(t, n, this.length);
for (var i = n, o = 1, u = this[t + --i]; i > 0 && (o *= 256); ) u += this[t + --i] * o;
return u >= (o *= 128) && (u -= Math.pow(2, 8 * n)), u;
}, l.prototype.readInt8 = function e(t, n) {
return n || $(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
}, l.prototype.readInt16LE = function e(t, n) {
n || $(t, 2, this.length);
var r = this[t] | this[t + 1] << 8;
return 32768 & r ? 4294901760 | r : r;
}, l.prototype.readInt16BE = function e(t, n) {
n || $(t, 2, this.length);
var r = this[t + 1] | this[t] << 8;
return 32768 & r ? 4294901760 | r : r;
}, l.prototype.readInt32LE = function e(t, n) {
return n || $(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
}, l.prototype.readInt32BE = function e(t, n) {
return n || $(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
}, l.prototype.readFloatLE = function e(t, n) {
return n || $(t, 4, this.length), i.read(this, t, !0, 23, 4);
}, l.prototype.readFloatBE = function e(t, n) {
return n || $(t, 4, this.length), i.read(this, t, !1, 23, 4);
}, l.prototype.readDoubleLE = function e(t, n) {
return n || $(t, 8, this.length), i.read(this, t, !0, 52, 8);
}, l.prototype.readDoubleBE = function e(t, n) {
return n || $(t, 8, this.length), i.read(this, t, !1, 52, 8);
}, l.prototype.writeUIntLE = function e(t, n, r, i) {
var o;
t = +t, n |= 0, r |= 0, i || H(this, t, n, r, Math.pow(2, 8 * r) - 1, 0);
var u = 1, a = 0;
for (this[n] = 255 & t; ++a < r && (u *= 256); ) this[n + a] = t / u & 255;
return n + r;
}, l.prototype.writeUIntBE = function e(t, n, r, i) {
var o;
t = +t, n |= 0, r |= 0, i || H(this, t, n, r, Math.pow(2, 8 * r) - 1, 0);
var u = r - 1, a = 1;
for (this[n + u] = 255 & t; --u >= 0 && (a *= 256); ) this[n + u] = t / a & 255;
return n + r;
}, l.prototype.writeUInt8 = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
this[n] = 255 & t, n + 1;
}, l.prototype.writeUInt16LE = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, 
this[n + 1] = t >>> 8) : F(this, t, n, !0), n + 2;
}, l.prototype.writeUInt16BE = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, 
this[n + 1] = 255 & t) : F(this, t, n, !1), n + 2;
}, l.prototype.writeUInt32LE = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, 
this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : U(this, t, n, !0), 
n + 4;
}, l.prototype.writeUInt32BE = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, 
this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : U(this, t, n, !1), 
n + 4;
}, l.prototype.writeIntLE = function e(t, n, r, i) {
if (t = +t, n |= 0, !i) {
var o = Math.pow(2, 8 * r - 1);
H(this, t, n, r, o - 1, -o);
}
var u = 0, a = 1, s = 0;
for (this[n] = 255 & t; ++u < r && (a *= 256); ) t < 0 && 0 === s && 0 !== this[n + u - 1] && (s = 1), 
this[n + u] = (t / a >> 0) - s & 255;
return n + r;
}, l.prototype.writeIntBE = function e(t, n, r, i) {
if (t = +t, n |= 0, !i) {
var o = Math.pow(2, 8 * r - 1);
H(this, t, n, r, o - 1, -o);
}
var u = r - 1, a = 1, s = 0;
for (this[n + u] = 255 & t; --u >= 0 && (a *= 256); ) t < 0 && 0 === s && 0 !== this[n + u + 1] && (s = 1), 
this[n + u] = (t / a >> 0) - s & 255;
return n + r;
}, l.prototype.writeInt8 = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1;
}, l.prototype.writeInt16LE = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, 
this[n + 1] = t >>> 8) : F(this, t, n, !0), n + 2;
}, l.prototype.writeInt16BE = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, 
this[n + 1] = 255 & t) : F(this, t, n, !1), n + 2;
}, l.prototype.writeInt32LE = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, 
this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : U(this, t, n, !0), 
n + 4;
}, l.prototype.writeInt32BE = function e(t, n, r) {
return t = +t, n |= 0, r || H(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
l.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, 
this[n + 3] = 255 & t) : U(this, t, n, !1), n + 4;
}, l.prototype.writeFloatLE = function e(t, n, r) {
return B(this, t, n, !0, r);
}, l.prototype.writeFloatBE = function e(t, n, r) {
return B(this, t, n, !1, r);
}, l.prototype.writeDoubleLE = function e(t, n, r) {
return q(this, t, n, !0, r);
}, l.prototype.writeDoubleBE = function e(t, n, r) {
return q(this, t, n, !1, r);
}, l.prototype.copy = function e(t, n, r, i) {
if (r || (r = 0), i || 0 === i || (i = this.length), n >= t.length && (n = t.length), 
n || (n = 0), i > 0 && i < r && (i = r), i === r) return 0;
if (0 === t.length || 0 === this.length) return 0;
if (n < 0) throw new RangeError("targetStart out of bounds");
if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
if (i < 0) throw new RangeError("sourceEnd out of bounds");
i > this.length && (i = this.length), t.length - n < i - r && (i = t.length - n + r);
var o = i - r, u;
if (this === t && r < n && n < i) for (u = o - 1; u >= 0; --u) t[u + n] = this[u + r]; else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT) for (u = 0; u < o; ++u) t[u + n] = this[u + r]; else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), n);
return o;
}, l.prototype.fill = function e(t, n, r, i) {
if ("string" == typeof t) {
if ("string" == typeof n ? (i = n, n = 0, r = this.length) : "string" == typeof r && (i = r, 
r = this.length), 1 === t.length) {
var o = t.charCodeAt(0);
o < 256 && (t = o);
}
if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
if ("string" == typeof i && !l.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
} else "number" == typeof t && (t &= 255);
if (n < 0 || this.length < n || this.length < r) throw new RangeError("Out of range index");
if (r <= n) return this;
var u;
if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (u = n; u < r; ++u) this[u] = t; else {
var a = l.isBuffer(t) ? t : Z(new l(t, i).toString()), s = a.length;
for (u = 0; u < r - n; ++u) this[u + n] = a[u % s];
}
return this;
};
var W = /[^+\/0-9A-Za-z-_]/g;
function Y(e) {
if ((e = K(e).replace(W, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function K(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function V(e) {
return e < 16 ? "0" + e.toString(16) : e.toString(16);
}
function Z(e, t) {
var n;
t = t || Infinity;
for (var r = e.length, i = null, o = [], u = 0; u < r; ++u) {
if ((n = e.charCodeAt(u)) > 55295 && n < 57344) {
if (!i) {
if (n > 56319) {
(t -= 3) > -1 && o.push(239, 191, 189);
continue;
}
if (u + 1 === r) {
(t -= 3) > -1 && o.push(239, 191, 189);
continue;
}
i = n;
continue;
}
if (n < 56320) {
(t -= 3) > -1 && o.push(239, 191, 189), i = n;
continue;
}
n = 65536 + (i - 55296 << 10 | n - 56320);
} else i && (t -= 3) > -1 && o.push(239, 191, 189);
if (i = null, n < 128) {
if ((t -= 1) < 0) break;
o.push(n);
} else if (n < 2048) {
if ((t -= 2) < 0) break;
o.push(n >> 6 | 192, 63 & n | 128);
} else if (n < 65536) {
if ((t -= 3) < 0) break;
o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
} else {
if (!(n < 1114112)) throw new Error("Invalid code point");
if ((t -= 4) < 0) break;
o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
}
}
return o;
}
function J(e) {
for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
return t;
}
function Q(e, t) {
for (var n, r, i, o = [], u = 0; u < e.length && !((t -= 2) < 0); ++u) r = (n = e.charCodeAt(u)) >> 8, 
i = n % 256, o.push(i), o.push(r);
return o;
}
function X(e) {
return r.toByteArray(Y(e));
}
function ee(e, t, n, r) {
for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
return i;
}
function te(e) {
return e != e;
}
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
t.byteLength = c, t.toByteArray = p, t.fromByteArray = g;
for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = u.length; a < s; ++a) r[a] = u[a], 
i[u.charCodeAt(a)] = a;
function l(e) {
var t = e.length;
if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var n = e.indexOf("="), r;
return -1 === n && (n = t), [ n, n === t ? 0 : 4 - n % 4 ];
}
function c(e) {
var t = l(e), n = t[0], r = t[1];
return 3 * (n + r) / 4 - r;
}
function f(e, t, n) {
return 3 * (t + n) / 4 - n;
}
function p(e) {
for (var t, n = l(e), r = n[0], u = n[1], a = new o(f(e, r, u)), s = 0, c = u > 0 ? r - 4 : r, p = 0; p < c; p += 4) t = i[e.charCodeAt(p)] << 18 | i[e.charCodeAt(p + 1)] << 12 | i[e.charCodeAt(p + 2)] << 6 | i[e.charCodeAt(p + 3)], 
a[s++] = t >> 16 & 255, a[s++] = t >> 8 & 255, a[s++] = 255 & t;
return 2 === u && (t = i[e.charCodeAt(p)] << 2 | i[e.charCodeAt(p + 1)] >> 4, a[s++] = 255 & t), 
1 === u && (t = i[e.charCodeAt(p)] << 10 | i[e.charCodeAt(p + 1)] << 4 | i[e.charCodeAt(p + 2)] >> 2, 
a[s++] = t >> 8 & 255, a[s++] = 255 & t), a;
}
function d(e) {
return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[63 & e];
}
function h(e, t, n) {
for (var r, i = [], o = t; o < n; o += 3) r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), 
i.push(d(r));
return i.join("");
}
function g(e) {
for (var t, n = e.length, i = n % 3, o = [], u = 16383, a = 0, s = n - i; a < s; a += 16383) o.push(h(e, a, a + 16383 > s ? s : a + 16383));
return 1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], 
o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), o.join("");
}
i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
}, function(e, t) {
t.read = function(e, t, n, r, i) {
var o, u, a = 8 * i - r - 1, s = (1 << a) - 1, l = s >> 1, c = -7, f = n ? i - 1 : 0, p = n ? -1 : 1, d = e[t + f];
for (f += p, o = d & (1 << -c) - 1, d >>= -c, c += a; c > 0; o = 256 * o + e[t + f], 
f += p, c -= 8) ;
for (u = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; u = 256 * u + e[t + f], f += p, 
c -= 8) ;
if (0 === o) o = 1 - l; else {
if (o === s) return u ? NaN : Infinity * (d ? -1 : 1);
u += Math.pow(2, r), o -= l;
}
return (d ? -1 : 1) * u * Math.pow(2, o - r);
}, t.write = function(e, t, n, r, i, o) {
var u, a, s, l = 8 * o - i - 1, c = (1 << l) - 1, f = c >> 1, p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : o - 1, h = r ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
for (t = Math.abs(t), isNaN(t) || Infinity === t ? (a = isNaN(t) ? 1 : 0, u = c) : (u = Math.floor(Math.log(t) / Math.LN2), 
t * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), (t += u + f >= 1 ? p / s : p * Math.pow(2, 1 - f)) * s >= 2 && (u++, 
s /= 2), u + f >= c ? (a = 0, u = c) : u + f >= 1 ? (a = (t * s - 1) * Math.pow(2, i), 
u += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), u = 0)); i >= 8; e[n + d] = 255 & a, 
d += h, a /= 256, i -= 8) ;
for (u = u << i | a, l += i; l > 0; e[n + d] = 255 & u, d += h, u /= 256, l -= 8) ;
e[n + d - h] |= 128 * g;
};
}, function(e, t) {
var n = {}.toString;
e.exports = Array.isArray || function(e) {
return "[object Array]" == n.call(e);
};
}, function(e, t, n) {
var r;
!function(i) {
"use strict";
var o = 20, u = 1, a = 1e6, s = 1e6, l = -7, c = 21, f = {}, p = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, d;
function h() {
function e(t) {
var n = this;
if (!(n instanceof e)) return void 0 === t ? h() : new e(t);
t instanceof e ? (n.s = t.s, n.e = t.e, n.c = t.c.slice()) : y(n, t), n.constructor = e;
}
return e.prototype = f, e.DP = o, e.RM = u, e.E_NEG = l, e.E_POS = c, e;
}
function g(e, t, n) {
var r = e.constructor, i = t - (e = new r(e)).e, o = e.c;
for (o.length > ++t && m(e, i, r.RM), o[0] ? n ? i = t : (o = e.c, i = e.e + i + 1) : ++i; o.length < i; o.push(0)) ;
return i = e.e, 1 === n || n && (t <= i || i <= r.E_NEG) ? (e.s < 0 && o[0] ? "-" : "") + (o.length > 1 ? o[0] + "." + o.join("").slice(1) : o[0]) + (i < 0 ? "e" : "e+") + i : e.toString();
}
function y(e, t) {
var n, r, i;
for (0 === t && 1 / t < 0 ? t = "-0" : p.test(t += "") || v(NaN), e.s = "-" == t.charAt(0) ? (t = t.slice(1), 
-1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), 
n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), i = t.length, 
r = 0; r < i && "0" == t.charAt(r); r++) ;
if (r == i) e.c = [ e.e = 0 ]; else {
for (;i > 0 && "0" == t.charAt(--i); ) ;
for (e.e = n - r - 1, e.c = []; r <= i; e.c.push(+t.charAt(r++))) ;
}
return e;
}
function m(e, t, n, r) {
var i, o = e.c, u = e.e + t + 1;
if (1 === n ? r = o[u] >= 5 : 2 === n ? r = o[u] > 5 || 5 == o[u] && (r || u < 0 || o[u + 1] !== i || 1 & o[u - 1]) : 3 === n ? r = r || o[u] !== i || u < 0 : (r = !1, 
0 !== n && v("!Big.RM!")), u < 1 || !o[0]) r ? (e.e = -t, e.c = [ 1 ]) : e.c = [ e.e = 0 ]; else {
if (o.length = u--, r) for (;++o[u] > 9; ) o[u] = 0, u-- || (++e.e, o.unshift(1));
for (u = o.length; !o[--u]; o.pop()) ;
}
return e;
}
function v(e) {
var t = new Error(e);
throw t.name = "BigError", t;
}
f.abs = function() {
var e = new this.constructor(this);
return e.s = 1, e;
}, f.cmp = function(e) {
var t, n = this, r = n.c, i = (e = new n.constructor(e)).c, o = n.s, u = e.s, a = n.e, s = e.e;
if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -u : 0;
if (o != u) return o;
if (t = o < 0, a != s) return a > s ^ t ? 1 : -1;
for (o = -1, u = (a = r.length) < (s = i.length) ? a : s; ++o < u; ) if (r[o] != i[o]) return r[o] > i[o] ^ t ? 1 : -1;
return a == s ? 0 : a > s ^ t ? 1 : -1;
}, f.div = function(e) {
var t = this, n = t.constructor, r = t.c, i = (e = new n(e)).c, o = t.s == e.s ? 1 : -1, u = n.DP;
if ((u !== ~~u || u < 0 || u > 1e6) && v("!Big.DP!"), !r[0] || !i[0]) return r[0] == i[0] && v(NaN), 
i[0] || v(o / 0), new n(0 * o);
var a, s, l, c, f, p, d = i.slice(), h = a = i.length, g = r.length, y = r.slice(0, a), b = y.length, _ = e, w = _.c = [], x = 0, A = u + (_.e = t.e - e.e) + 1;
for (_.s = o, o = A < 0 ? 0 : A, d.unshift(0); b++ < a; y.push(0)) ;
do {
for (l = 0; l < 10; l++) {
if (a != (b = y.length)) c = a > b ? 1 : -1; else for (f = -1, c = 0; ++f < a; ) if (i[f] != y[f]) {
c = i[f] > y[f] ? 1 : -1;
break;
}
if (!(c < 0)) break;
for (s = b == a ? i : d; b; ) {
if (y[--b] < s[b]) {
for (f = b; f && !y[--f]; y[f] = 9) ;
--y[f], y[b] += 10;
}
y[b] -= s[b];
}
for (;!y[0]; y.shift()) ;
}
w[x++] = c ? l : ++l, y[0] && c ? y[b] = r[h] || 0 : y = [ r[h] ];
} while ((h++ < g || y[0] !== p) && o--);
return w[0] || 1 == x || (w.shift(), _.e--), x > A && m(_, u, n.RM, y[0] !== p), 
_;
}, f.eq = function(e) {
return !this.cmp(e);
}, f.gt = function(e) {
return this.cmp(e) > 0;
}, f.gte = function(e) {
return this.cmp(e) > -1;
}, f.lt = function(e) {
return this.cmp(e) < 0;
}, f.lte = function(e) {
return this.cmp(e) < 1;
}, f.sub = f.minus = function(e) {
var t, n, r, i, o = this, u = o.constructor, a = o.s, s = (e = new u(e)).s;
if (a != s) return e.s = -s, o.plus(e);
var l = o.c.slice(), c = o.e, f = e.c, p = e.e;
if (!l[0] || !f[0]) return f[0] ? (e.s = -s, e) : new u(l[0] ? o : 0);
if (a = c - p) {
for ((i = a < 0) ? (a = -a, r = l) : (p = c, r = f), r.reverse(), s = a; s--; r.push(0)) ;
r.reverse();
} else for (n = ((i = l.length < f.length) ? l : f).length, a = s = 0; s < n; s++) if (l[s] != f[s]) {
i = l[s] < f[s];
break;
}
if (i && (r = l, l = f, f = r, e.s = -e.s), (s = (n = f.length) - (t = l.length)) > 0) for (;s--; l[t++] = 0) ;
for (s = t; n > a; ) {
if (l[--n] < f[n]) {
for (t = n; t && !l[--t]; l[t] = 9) ;
--l[t], l[n] += 10;
}
l[n] -= f[n];
}
for (;0 === l[--s]; l.pop()) ;
for (;0 === l[0]; ) l.shift(), --p;
return l[0] || (e.s = 1, l = [ p = 0 ]), e.c = l, e.e = p, e;
}, f.mod = function(e) {
var t, n = this, r = n.constructor, i = n.s, o = (e = new r(e)).s;
return e.c[0] || v(NaN), n.s = e.s = 1, t = 1 == e.cmp(n), n.s = i, e.s = o, t ? new r(n) : (i = r.DP, 
o = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = i, r.RM = o, this.minus(n.times(e)));
}, f.add = f.plus = function(e) {
var t, n = this, r = n.constructor, i = n.s, o = (e = new r(e)).s;
if (i != o) return e.s = -o, n.minus(e);
var u = n.e, a = n.c, s = e.e, l = e.c;
if (!a[0] || !l[0]) return l[0] ? e : new r(a[0] ? n : 0 * i);
if (a = a.slice(), i = u - s) {
for (i > 0 ? (s = u, t = l) : (i = -i, t = a), t.reverse(); i--; t.push(0)) ;
t.reverse();
}
for (a.length - l.length < 0 && (t = l, l = a, a = t), i = l.length, o = 0; i; ) o = (a[--i] = a[i] + l[i] + o) / 10 | 0, 
a[i] %= 10;
for (o && (a.unshift(o), ++s), i = a.length; 0 === a[--i]; a.pop()) ;
return e.c = a, e.e = s, e;
}, f.pow = function(e) {
var t = this, n = new t.constructor(1), r = n, i = e < 0;
for ((e !== ~~e || e < -1e6 || e > 1e6) && v("!pow!"), e = i ? -e : e; 1 & e && (r = r.times(t)), 
e >>= 1; ) t = t.times(t);
return i ? n.div(r) : r;
}, f.round = function(e, t) {
var n = this, r = n.constructor;
return null == e ? e = 0 : (e !== ~~e || e < 0 || e > 1e6) && v("!round!"), m(n = new r(n), e, null == t ? r.RM : t), 
n;
}, f.sqrt = function() {
var e, t, n, r = this, i = r.constructor, o = r.c, u = r.s, a = r.e, s = new i("0.5");
if (!o[0]) return new i(r);
u < 0 && v(NaN), 0 === (u = Math.sqrt(r.toString())) || u === 1 / 0 ? ((e = o.join("")).length + a & 1 || (e += "0"), 
(t = new i(Math.sqrt(e).toString())).e = ((a + 1) / 2 | 0) - (a < 0 || 1 & a)) : t = new i(u.toString()), 
u = t.e + (i.DP += 4);
do {
n = t, t = s.times(n.plus(r.div(n)));
} while (n.c.slice(0, u).join("") !== t.c.slice(0, u).join(""));
return m(t, i.DP -= 4, i.RM), t;
}, f.mul = f.times = function(e) {
var t, n = this, r = n.constructor, i = n.c, o = (e = new r(e)).c, u = i.length, a = o.length, s = n.e, l = e.e;
if (e.s = n.s == e.s ? 1 : -1, !i[0] || !o[0]) return new r(0 * e.s);
for (e.e = s + l, u < a && (t = i, i = o, o = t, l = u, u = a, a = l), t = new Array(l = u + a); l--; t[l] = 0) ;
for (s = a; s--; ) {
for (a = 0, l = u + s; l > s; ) a = t[l] + o[s] * i[l - s - 1] + a, t[l--] = a % 10, 
a = a / 10 | 0;
t[l] = (t[l] + a) % 10;
}
for (a && ++e.e, t[0] || t.shift(), s = t.length; !t[--s]; t.pop()) ;
return e.c = t, e;
}, f.toString = f.valueOf = f.toJSON = function() {
var e = this, t = e.constructor, n = e.e, r = e.c.join(""), i = r.length;
if (n <= t.E_NEG || n >= t.E_POS) r = r.charAt(0) + (i > 1 ? "." + r.slice(1) : "") + (n < 0 ? "e" : "e+") + n; else if (n < 0) {
for (;++n; r = "0" + r) ;
r = "0." + r;
} else if (n > 0) if (++n > i) for (n -= i; n--; r += "0") ; else n < i && (r = r.slice(0, n) + "." + r.slice(n)); else i > 1 && (r = r.charAt(0) + "." + r.slice(1));
return e.s < 0 && e.c[0] ? "-" + r : r;
}, f.toExponential = function(e) {
return null == e ? e = this.c.length - 1 : (e !== ~~e || e < 0 || e > 1e6) && v("!toExp!"), 
g(this, e, 1);
}, f.toFixed = function(e) {
var t, n = this, r = n.constructor, i = r.E_NEG, o = r.E_POS;
return r.E_NEG = -(r.E_POS = 1 / 0), null == e ? t = n.toString() : e === ~~e && e >= 0 && e <= 1e6 && (t = g(n, n.e + e), 
n.s < 0 && n.c[0] && t.indexOf("-") < 0 && (t = "-" + t)), r.E_NEG = i, r.E_POS = o, 
t || v("!toFix!"), t;
}, f.toPrecision = function(e) {
return null == e ? this.toString() : ((e !== ~~e || e < 1 || e > 1e6) && v("!toPre!"), 
g(this, e - 1, 2));
}, d = h(), void 0 === (r = function() {
return d;
}.call(t, n, t, e)) || (e.exports = r);
}(this);
}, function(e, t, n) {
"use strict";
const r = n(88), i = Symbol.for("execall");
function o(e, t, n) {
let o;
const u = (n = n || {}).cloneRegexp || r;
let a = [], s = u(e), l = s.global;
n.resetLastIndex && (s.lastIndex = 0);
let c = 0, {rightContext: f, leftContext: p} = n;
for (f = !!f, p = !!p; (o = s.exec(t)) && (delete o.input, a.push(Object.assign(o, {
match: o[0],
sub: o.slice(1),
leftContext: p && RegExp.leftContext,
rightContext: f && RegExp.rightContext,
[i]: a
})), c = s.lastIndex, l); ) ;
return Object.defineProperties(a, {
re: {
value: s,
enumerable: !1,
configurable: !1,
writable: !1
},
input: {
value: t,
enumerable: !1,
configurable: !1,
writable: !1
},
lastIndex: {
value: c,
enumerable: !1,
configurable: !1,
writable: !1
}
}), a;
}
let u = o;
t.default = u, u.SYMBOL = i, u.default = u.execall = o, Object.defineProperty(u, "__esModule", {
value: !0
}), e.exports = u;
}, function(e, t, n) {
"use strict";
const r = n(89), i = {
global: "g",
ignoreCase: "i",
multiline: "m",
dotAll: "s",
sticky: "y",
unicode: "u"
};
e.exports = ((e, t = {}) => {
if (!r(e)) throw new TypeError("Expected a RegExp instance");
const n = Object.keys(i).map(n => ("boolean" == typeof t[n] ? t[n] : e[n]) ? i[n] : "").join(""), o = new RegExp(t.source || e.source, n);
return o.lastIndex = "number" == typeof t.lastIndex ? t.lastIndex : e.lastIndex, 
o;
});
}, function(e, t, n) {
"use strict";
e.exports = (e => "[object RegExp]" === Object.prototype.toString.call(e));
}, function(e, t, n) {
"use strict";
function r(e) {
return String(e).replace(/\r\n|\r(?!\n)|\n/g, t.LF).replace(/\uFEFF/g, "").replace(/[  \xA0]/g, " ").replace(/[ \t　\xA0\u3000]+\n/g, "\n").replace(/^\n+|[\s　\xA0\u3000]+$/g, "");
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.LF = "\n", t.normalize = r, t.default = r;
}, function(e, t, n) {
"use strict";
function r(e, n = t.LF) {
return e.replace(t.R_CRLF, n);
}
function i(e) {
return {
lf: /\n/.test(e.replace(/\r\n/g, "")),
crlf: /\r\n/.test(e),
cr: /\r(?!\n)/.test(e)
};
}
function o(e) {
return e.split(t.R_CRLF);
}
function u(e, n = t.LF) {
const r = n + n + n, i = n + n;
return e.replace(/\u000C/g, r).replace(/\u2028/g, n).replace(/\u2029/g, i);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.CR = "\r", t.CRLF = "\r\n", t.LF = "\n", t.R_CRLF = /\r\n|\r(?!\n)|\n/g, t.crlf = r, 
t.chkcrlf = i, t.lineSplit = o, t.crlf_unicode_normalize = u, t.default = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(39), i = n(46);
t.defaultOptions = {};
class zhRegExp extends RegExp {
constructor(e, t = null, n = {}) {
if (null !== t && "object" == typeof t && (t = (n = Object.assign({}, t)).flags || null), 
"string" == typeof n && (n = {
skip: n
}), "string" == typeof n.flags && (t = n.flags), n.parseRegularExpressionString && "string" == typeof e) {
let t = zhRegExp.parseRegularExpressionString(e);
t && (e = new RegExp(t.source, t.flags));
}
let i = "string" == typeof t, o, u;
n.disableZh ? n.disableLocalRange || (o = r.default.replace_literal(e, function(e) {
return e;
})) : [o, u] = r.default._word_zh(e, null, t || e.flags);
let a = o instanceof RegExp;
u = i ? t : u || t || o.flags || "", super(a ? o.source : o, u);
}
static create(e, t = null, n, ...r) {
return new this(e, t, n, ...r);
}
getStatic() {
return Object.getPrototypeOf(this);
}
toRegularExpressionString() {
return this.toString();
}
static parseRegularExpressionString(e) {
let t = /^([\/#$%])(.+?)\1([a-z]*)$/.exec(e);
if (t) {
let [n, r, i, o] = t;
return {
source: void 0 !== i ? i : "",
flags: void 0 !== o ? o : "",
slash: n,
input: e
};
}
return null;
}
static get support() {
return i.default;
}
static isRegExp(e) {
return e instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(e) ? e : null;
}
}
t.zhRegExp = zhRegExp, t.parseRegularExpressionString = zhRegExp.parseRegularExpressionString, 
t.isRegExp = zhRegExp.isRegExp, t.create = zhRegExp.create.bind(zhRegExp), t.default = zhRegExp;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(40);
function i(e) {
return e instanceof RegExp || "[object RegExp]" === Object.prototype.toString.call(e) ? e : null;
}
t.parse = r.parse, t.types = r.types, t.isRegExp = i, t.default = r.parse;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(40);
let i = function() {
function e(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n();
}
function t(e, t, n, r, i) {
function o(e, t) {
function n(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
return "\\x0" + t(e);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
return "\\x" + t(e);
}).replace(/[\u0180-\u0FFF]/g, function(e) {
return "\\u0" + t(e);
}).replace(/[\u1080-\uFFFF]/g, function(e) {
return "\\u" + t(e);
});
}
var r, i;
switch (e.length) {
case 0:
r = "end of input";
break;

case 1:
r = e[0];
break;

default:
r = e.slice(0, -1).join(", ") + " or " + e[e.length - 1];
}
return "Expected " + r + " but " + (i = t ? '"' + n(t) + '"' : "end of input") + " found.";
}
this.expected = e, this.found = t, this.offset = n, this.line = r, this.column = i, 
this.name = "SyntaxError", this.message = o(e, t);
}
function n(e) {
var n = arguments.length > 1 ? arguments[1] : {}, i = {
regexp: Zt
}, o = Zt, u = null, a = "", s = "|", l = '"|"', c = function(e, t) {
return t ? new r.Alternate(e, t[1]) : e;
}, f = [], p = function(e, t, n) {
return new r.Match([ e ].concat(t).concat([ n ]));
}, d = "^", h = '"^"', g = function() {
return new r.Token("start");
}, y = "$", m = '"$"', v = function() {
return new r.Token("end");
}, b = function(e, t) {
return new r.Quantified(e, t);
}, _ = "Quantifier", w = function(e, t) {
return t && (e.greedy = !1), e;
}, x = "{", A = '"{"', E = ",", T = '","', S = "}", j = '"}"', C = function(e, t) {
return new r.Quantifier(e, t);
}, O = ",}", k = '",}"', R = function(e) {
return new r.Quantifier(e, Infinity);
}, M = function(e) {
return new r.Quantifier(e, e);
}, P = "+", N = '"+"', L = function() {
return new r.Quantifier(1, Infinity);
}, z = "*", I = '"*"', D = function() {
return new r.Quantifier(0, Infinity);
}, $ = "?", H = '"?"', F = function() {
return new r.Quantifier(0, 1);
}, U = /^[0-9]/, G = "[0-9]", B = function(e) {
return +e.join("");
}, q = "(", W = '"("', Y = ")", K = '")"', V = function(e) {
return e;
}, Z = function(e) {
return new r.CaptureGroup(e);
}, J = "?:", Q = '"?:"', X = function(e) {
return new r.Group("non-capture-group", e);
}, ee = "?=", te = '"?="', ne = function(e) {
return new r.Group("positive-lookahead", e);
}, re = "?!", ie = '"?!"', oe = function(e) {
return new r.Group("negative-lookahead", e);
}, ue = "CharacterSet", ae = "[", se = '"["', le = "]", ce = '"]"', fe = function(e, t) {
return new r.CharSet(!!e, t);
}, pe = "CharacterRange", de = "-", he = '"-"', ge = function(e, t) {
return new r.CharacterRange(e, t);
}, ye = "Character", me = /^[^\\\]]/, ve = "[^\\\\\\]]", be = function(e) {
return new r.Literal(e);
}, _e = ".", we = '"."', xe = function() {
return new r.Token("any-character");
}, Ae = "Literal", Ee = /^[^|\\\/.[()?+*$\^]/, Te = "[^|\\\\\\/.[()?+*$\\^]", Se = "\\b", je = '"\\\\b"', Ce = function() {
return new r.Token("backspace");
}, Oe = function() {
return new r.Token("word-boundary");
}, ke = "\\B", Re = '"\\\\B"', Me = function() {
return new r.Token("non-word-boundary");
}, Pe = "\\d", Ne = '"\\\\d"', Le = function() {
return new r.Token("digit");
}, ze = "\\D", Ie = '"\\\\D"', De = function() {
return new r.Token("non-digit");
}, $e = "\\f", He = '"\\\\f"', Fe = function() {
return new r.Token("form-feed");
}, Ue = "\\n", Ge = '"\\\\n"', Be = function() {
return new r.Token("line-feed");
}, qe = "\\r", We = '"\\\\r"', Ye = function() {
return new r.Token("carriage-return");
}, Ke = "\\s", Ve = '"\\\\s"', Ze = function() {
return new r.Token("white-space");
}, Je = "\\S", Qe = '"\\\\S"', Xe = function() {
return new r.Token("non-white-space");
}, et = "\\t", tt = '"\\\\t"', nt = function() {
return new r.Token("tab");
}, rt = "\\v", it = '"\\\\v"', ot = function() {
return new r.Token("vertical-tab");
}, ut = "\\w", at = '"\\\\w"', st = function() {
return new r.Token("word");
}, lt = "\\W", ct = '"\\\\W"', ft = function() {
return new r.Token("non-word");
}, pt = "\\c", dt = '"\\\\c"', ht = "any character", gt = function(e) {
return new r.ControlCharacter(e);
}, yt = "\\", mt = '"\\\\"', vt = /^[1-9]/, bt = "[1-9]", _t = function(e) {
return new r.BackReference(e);
}, wt = "\\0", xt = '"\\\\0"', At = /^[0-7]/, Et = "[0-7]", Tt = function(e) {
return new r.Octal(e.join(""));
}, St = "\\x", jt = '"\\\\x"', Ct = /^[0-9a-fA-F]/, Ot = "[0-9a-fA-F]", kt = function(e) {
return new r.Hex(e.join(""));
}, Rt = "\\u", Mt = '"\\\\u"', Pt = function(e) {
return new r.Unicode(e.join(""));
}, Nt = function() {
return new r.Token("null-character");
}, Lt = 0, zt = 0, It = 0, Dt = {
line: 1,
column: 1,
seenCR: !1
}, $t = 0, Ht = [], Ft = 0, Ut;
if ("startRule" in n) {
if (!(n.startRule in i)) throw new Error("Can't start parsing from rule \"" + n.startRule + '".');
o = i[n.startRule];
}
function Gt() {
return e.substring(zt, Lt);
}
function Bt() {
return zt;
}
function qt() {
return Yt(zt).line;
}
function Wt() {
return Yt(zt).column;
}
function Yt(t) {
function n(t, n, r) {
var i, o;
for (i = n; i < r; i++) "\n" === (o = e.charAt(i)) ? (t.seenCR || t.line++, t.column = 1, 
t.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (t.line++, t.column = 1, 
t.seenCR = !0) : (t.column++, t.seenCR = !1);
}
return It !== t && (It > t && (It = 0, Dt = {
line: 1,
column: 1,
seenCR: !1
}), n(Dt, It, t), It = t), Dt;
}
function Kt(e) {
Lt < $t || (Lt > $t && ($t = Lt, Ht = []), Ht.push(e));
}
function Vt(e) {
var t = 0;
for (e.sort(); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}
function Zt() {
var t, n, r, i, o;
return t = Lt, null !== (n = Jt()) ? (r = Lt, 124 === e.charCodeAt(Lt) ? (i = s, 
Lt++) : (i = null, 0 === Ft && Kt(l)), null !== i && null !== (o = Zt()) ? r = i = [ i, o ] : (Lt = r, 
r = u), null === r && (r = a), null !== r ? (zt = t, null === (n = c(n, r)) ? (Lt = t, 
t = n) : t = n) : (Lt = t, t = u)) : (Lt = t, t = u), t;
}
function Jt() {
var e, t, n, r, i;
if (e = Lt, null === (t = Xt()) && (t = a), null !== t) if (n = Lt, Ft++, r = nn(), 
Ft--, null === r ? n = a : (Lt = n, n = u), null !== n) {
for (r = [], null === (i = tn()) && (i = Qt()); null !== i; ) r.push(i), null === (i = tn()) && (i = Qt());
null !== r ? (null === (i = en()) && (i = a), null !== i ? (zt = e, null === (t = p(t, r, i)) ? (Lt = e, 
e = t) : e = t) : (Lt = e, e = u)) : (Lt = e, e = u);
} else Lt = e, e = u; else Lt = e, e = u;
return e;
}
function Qt() {
var e;
return null === (e = dn()) && null === (e = vn()) && (e = An()), e;
}
function Xt() {
var t, n;
return t = Lt, 94 === e.charCodeAt(Lt) ? (n = d, Lt++) : (n = null, 0 === Ft && Kt(h)), 
null !== n && (zt = t, n = g()), null === n ? (Lt = t, t = n) : t = n, t;
}
function en() {
var t, n;
return t = Lt, 36 === e.charCodeAt(Lt) ? (n = y, Lt++) : (n = null, 0 === Ft && Kt(m)), 
null !== n && (zt = t, n = v()), null === n ? (Lt = t, t = n) : t = n, t;
}
function tn() {
var e, t, n;
return e = Lt, null !== (t = Qt()) && null !== (n = nn()) ? (zt = e, null === (t = b(t, n)) ? (Lt = e, 
e = t) : e = t) : (Lt = e, e = u), e;
}
function nn() {
var e, t, n;
return Ft++, e = Lt, null !== (t = rn()) ? (null === (n = fn()) && (n = a), null !== n ? (zt = e, 
null === (t = w(t, n)) ? (Lt = e, e = t) : e = t) : (Lt = e, e = u)) : (Lt = e, 
e = u), Ft--, null === e && (t = null, 0 === Ft && Kt(_)), e;
}
function rn() {
var e;
return null === (e = on()) && null === (e = un()) && null === (e = an()) && null === (e = sn()) && null === (e = ln()) && (e = cn()), 
e;
}
function on() {
var t, n, r, i, o, a;
return t = Lt, 123 === e.charCodeAt(Lt) ? (n = x, Lt++) : (n = null, 0 === Ft && Kt(A)), 
null !== n && null !== (r = pn()) ? (44 === e.charCodeAt(Lt) ? (i = E, Lt++) : (i = null, 
0 === Ft && Kt(T)), null !== i && null !== (o = pn()) ? (125 === e.charCodeAt(Lt) ? (a = S, 
Lt++) : (a = null, 0 === Ft && Kt(j)), null !== a ? (zt = t, null === (n = C(r, o)) ? (Lt = t, 
t = n) : t = n) : (Lt = t, t = u)) : (Lt = t, t = u)) : (Lt = t, t = u), t;
}
function un() {
var t, n, r, i;
return t = Lt, 123 === e.charCodeAt(Lt) ? (n = x, Lt++) : (n = null, 0 === Ft && Kt(A)), 
null !== n && null !== (r = pn()) ? (e.substr(Lt, 2) === O ? (i = O, Lt += 2) : (i = null, 
0 === Ft && Kt(k)), null !== i ? (zt = t, null === (n = R(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u)) : (Lt = t, t = u), t;
}
function an() {
var t, n, r, i;
return t = Lt, 123 === e.charCodeAt(Lt) ? (n = x, Lt++) : (n = null, 0 === Ft && Kt(A)), 
null !== n && null !== (r = pn()) ? (125 === e.charCodeAt(Lt) ? (i = S, Lt++) : (i = null, 
0 === Ft && Kt(j)), null !== i ? (zt = t, null === (n = M(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u)) : (Lt = t, t = u), t;
}
function sn() {
var t, n;
return t = Lt, 43 === e.charCodeAt(Lt) ? (n = P, Lt++) : (n = null, 0 === Ft && Kt(N)), 
null !== n && (zt = t, n = L()), null === n ? (Lt = t, t = n) : t = n, t;
}
function ln() {
var t, n;
return t = Lt, 42 === e.charCodeAt(Lt) ? (n = z, Lt++) : (n = null, 0 === Ft && Kt(I)), 
null !== n && (zt = t, n = D()), null === n ? (Lt = t, t = n) : t = n, t;
}
function cn() {
var t, n;
return t = Lt, 63 === e.charCodeAt(Lt) ? (n = $, Lt++) : (n = null, 0 === Ft && Kt(H)), 
null !== n && (zt = t, n = F()), null === n ? (Lt = t, t = n) : t = n, t;
}
function fn() {
var t;
return 63 === e.charCodeAt(Lt) ? (t = $, Lt++) : (t = null, 0 === Ft && Kt(H)), 
t;
}
function pn() {
var t, n, r;
if (t = Lt, n = [], U.test(e.charAt(Lt)) ? (r = e.charAt(Lt), Lt++) : (r = null, 
0 === Ft && Kt(G)), null !== r) for (;null !== r; ) n.push(r), U.test(e.charAt(Lt)) ? (r = e.charAt(Lt), 
Lt++) : (r = null, 0 === Ft && Kt(G)); else n = u;
return null !== n && (zt = t, n = B(n)), null === n ? (Lt = t, t = n) : t = n, t;
}
function dn() {
var t, n, r, i;
return t = Lt, 40 === e.charCodeAt(Lt) ? (n = q, Lt++) : (n = null, 0 === Ft && Kt(W)), 
null !== n ? (null === (r = yn()) && null === (r = mn()) && null === (r = gn()) && (r = hn()), 
null !== r ? (41 === e.charCodeAt(Lt) ? (i = Y, Lt++) : (i = null, 0 === Ft && Kt(K)), 
null !== i ? (zt = t, null === (n = V(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u)) : (Lt = t, t = u)) : (Lt = t, t = u), t;
}
function hn() {
var e, t;
return e = Lt, null !== (t = Zt()) && (zt = e, t = Z(t)), null === t ? (Lt = e, 
e = t) : e = t, e;
}
function gn() {
var t, n, r;
return t = Lt, e.substr(Lt, 2) === J ? (n = J, Lt += 2) : (n = null, 0 === Ft && Kt(Q)), 
null !== n && null !== (r = Zt()) ? (zt = t, null === (n = X(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u), t;
}
function yn() {
var t, n, r;
return t = Lt, e.substr(Lt, 2) === ee ? (n = ee, Lt += 2) : (n = null, 0 === Ft && Kt(te)), 
null !== n && null !== (r = Zt()) ? (zt = t, null === (n = ne(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u), t;
}
function mn() {
var t, n, r;
return t = Lt, e.substr(Lt, 2) === re ? (n = re, Lt += 2) : (n = null, 0 === Ft && Kt(ie)), 
null !== n && null !== (r = Zt()) ? (zt = t, null === (n = oe(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u), t;
}
function vn() {
var t, n, r, i, o;
if (Ft++, t = Lt, 91 === e.charCodeAt(Lt) ? (n = ae, Lt++) : (n = null, 0 === Ft && Kt(se)), 
null !== n) if (94 === e.charCodeAt(Lt) ? (r = d, Lt++) : (r = null, 0 === Ft && Kt(h)), 
null === r && (r = a), null !== r) {
for (i = [], null === (o = bn()) && (o = _n()); null !== o; ) i.push(o), null === (o = bn()) && (o = _n());
null !== i ? (93 === e.charCodeAt(Lt) ? (o = le, Lt++) : (o = null, 0 === Ft && Kt(ce)), 
null !== o ? (zt = t, null === (n = fe(r, i)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u)) : (Lt = t, t = u);
} else Lt = t, t = u; else Lt = t, t = u;
return Ft--, null === t && (n = null, 0 === Ft && Kt(ue)), t;
}
function bn() {
var t, n, r, i;
return Ft++, t = Lt, null !== (n = _n()) ? (45 === e.charCodeAt(Lt) ? (r = de, Lt++) : (r = null, 
0 === Ft && Kt(he)), null !== r && null !== (i = _n()) ? (zt = t, null === (n = ge(n, i)) ? (Lt = t, 
t = n) : t = n) : (Lt = t, t = u)) : (Lt = t, t = u), Ft--, null === t && (n = null, 
0 === Ft && Kt(pe)), t;
}
function _n() {
var e, t;
return Ft++, null === (e = xn()) && (e = wn()), Ft--, null === e && (t = null, 0 === Ft && Kt(ye)), 
e;
}
function wn() {
var t, n;
return t = Lt, me.test(e.charAt(Lt)) ? (n = e.charAt(Lt), Lt++) : (n = null, 0 === Ft && Kt(ve)), 
null !== n && (zt = t, n = be(n)), null === n ? (Lt = t, t = n) : t = n, t;
}
function xn() {
var e;
return null === (e = jn()) && null === (e = Fn()) && null === (e = kn()) && null === (e = Rn()) && null === (e = Mn()) && null === (e = Pn()) && null === (e = Nn()) && null === (e = Ln()) && null === (e = zn()) && null === (e = In()) && null === (e = Dn()) && null === (e = $n()) && null === (e = Hn()) && null === (e = Gn()) && null === (e = Bn()) && null === (e = qn()) && null === (e = Wn()) && (e = Yn()), 
e;
}
function An() {
var e;
return null === (e = En()) && null === (e = Sn()) && (e = Tn()), e;
}
function En() {
var t, n;
return t = Lt, 46 === e.charCodeAt(Lt) ? (n = _e, Lt++) : (n = null, 0 === Ft && Kt(we)), 
null !== n && (zt = t, n = xe()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Tn() {
var t, n;
return Ft++, t = Lt, Ee.test(e.charAt(Lt)) ? (n = e.charAt(Lt), Lt++) : (n = null, 
0 === Ft && Kt(Te)), null !== n && (zt = t, n = be(n)), null === n ? (Lt = t, t = n) : t = n, 
Ft--, null === t && (n = null, 0 === Ft && Kt(Ae)), t;
}
function Sn() {
var e;
return null === (e = Cn()) && null === (e = On()) && null === (e = Fn()) && null === (e = kn()) && null === (e = Rn()) && null === (e = Mn()) && null === (e = Pn()) && null === (e = Nn()) && null === (e = Ln()) && null === (e = zn()) && null === (e = In()) && null === (e = Dn()) && null === (e = $n()) && null === (e = Hn()) && null === (e = Un()) && null === (e = Gn()) && null === (e = Bn()) && null === (e = qn()) && null === (e = Wn()) && (e = Yn()), 
e;
}
function jn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === Se ? (n = Se, Lt += 2) : (n = null, 0 === Ft && Kt(je)), 
null !== n && (zt = t, n = Ce()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Cn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === Se ? (n = Se, Lt += 2) : (n = null, 0 === Ft && Kt(je)), 
null !== n && (zt = t, n = Oe()), null === n ? (Lt = t, t = n) : t = n, t;
}
function On() {
var t, n;
return t = Lt, e.substr(Lt, 2) === ke ? (n = ke, Lt += 2) : (n = null, 0 === Ft && Kt(Re)), 
null !== n && (zt = t, n = Me()), null === n ? (Lt = t, t = n) : t = n, t;
}
function kn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === Pe ? (n = Pe, Lt += 2) : (n = null, 0 === Ft && Kt(Ne)), 
null !== n && (zt = t, n = Le()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Rn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === ze ? (n = ze, Lt += 2) : (n = null, 0 === Ft && Kt(Ie)), 
null !== n && (zt = t, n = De()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Mn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === $e ? (n = $e, Lt += 2) : (n = null, 0 === Ft && Kt(He)), 
null !== n && (zt = t, n = Fe()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Pn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === Ue ? (n = Ue, Lt += 2) : (n = null, 0 === Ft && Kt(Ge)), 
null !== n && (zt = t, n = Be()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Nn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === qe ? (n = qe, Lt += 2) : (n = null, 0 === Ft && Kt(We)), 
null !== n && (zt = t, n = Ye()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Ln() {
var t, n;
return t = Lt, e.substr(Lt, 2) === Ke ? (n = Ke, Lt += 2) : (n = null, 0 === Ft && Kt(Ve)), 
null !== n && (zt = t, n = Ze()), null === n ? (Lt = t, t = n) : t = n, t;
}
function zn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === Je ? (n = Je, Lt += 2) : (n = null, 0 === Ft && Kt(Qe)), 
null !== n && (zt = t, n = Xe()), null === n ? (Lt = t, t = n) : t = n, t;
}
function In() {
var t, n;
return t = Lt, e.substr(Lt, 2) === et ? (n = et, Lt += 2) : (n = null, 0 === Ft && Kt(tt)), 
null !== n && (zt = t, n = nt()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Dn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === rt ? (n = rt, Lt += 2) : (n = null, 0 === Ft && Kt(it)), 
null !== n && (zt = t, n = ot()), null === n ? (Lt = t, t = n) : t = n, t;
}
function $n() {
var t, n;
return t = Lt, e.substr(Lt, 2) === ut ? (n = ut, Lt += 2) : (n = null, 0 === Ft && Kt(at)), 
null !== n && (zt = t, n = st()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Hn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === lt ? (n = lt, Lt += 2) : (n = null, 0 === Ft && Kt(ct)), 
null !== n && (zt = t, n = ft()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Fn() {
var t, n, r;
return t = Lt, e.substr(Lt, 2) === pt ? (n = pt, Lt += 2) : (n = null, 0 === Ft && Kt(dt)), 
null !== n ? (e.length > Lt ? (r = e.charAt(Lt), Lt++) : (r = null, 0 === Ft && Kt(ht)), 
null !== r ? (zt = t, null === (n = gt(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u)) : (Lt = t, t = u), t;
}
function Un() {
var t, n, r;
return t = Lt, 92 === e.charCodeAt(Lt) ? (n = yt, Lt++) : (n = null, 0 === Ft && Kt(mt)), 
null !== n ? (vt.test(e.charAt(Lt)) ? (r = e.charAt(Lt), Lt++) : (r = null, 0 === Ft && Kt(bt)), 
null !== r ? (zt = t, null === (n = _t(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u)) : (Lt = t, t = u), t;
}
function Gn() {
var t, n, r, i;
if (t = Lt, e.substr(Lt, 2) === wt ? (n = wt, Lt += 2) : (n = null, 0 === Ft && Kt(xt)), 
null !== n) {
if (r = [], At.test(e.charAt(Lt)) ? (i = e.charAt(Lt), Lt++) : (i = null, 0 === Ft && Kt(Et)), 
null !== i) for (;null !== i; ) r.push(i), At.test(e.charAt(Lt)) ? (i = e.charAt(Lt), 
Lt++) : (i = null, 0 === Ft && Kt(Et)); else r = u;
null !== r ? (zt = t, null === (n = Tt(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u);
} else Lt = t, t = u;
return t;
}
function Bn() {
var t, n, r, i;
if (t = Lt, e.substr(Lt, 2) === St ? (n = St, Lt += 2) : (n = null, 0 === Ft && Kt(jt)), 
null !== n) {
if (r = [], Ct.test(e.charAt(Lt)) ? (i = e.charAt(Lt), Lt++) : (i = null, 0 === Ft && Kt(Ot)), 
null !== i) for (;null !== i; ) r.push(i), Ct.test(e.charAt(Lt)) ? (i = e.charAt(Lt), 
Lt++) : (i = null, 0 === Ft && Kt(Ot)); else r = u;
null !== r ? (zt = t, null === (n = kt(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u);
} else Lt = t, t = u;
return t;
}
function qn() {
var t, n, r, i;
if (t = Lt, e.substr(Lt, 2) === Rt ? (n = Rt, Lt += 2) : (n = null, 0 === Ft && Kt(Mt)), 
null !== n) {
if (r = [], Ct.test(e.charAt(Lt)) ? (i = e.charAt(Lt), Lt++) : (i = null, 0 === Ft && Kt(Ot)), 
null !== i) for (;null !== i; ) r.push(i), Ct.test(e.charAt(Lt)) ? (i = e.charAt(Lt), 
Lt++) : (i = null, 0 === Ft && Kt(Ot)); else r = u;
null !== r ? (zt = t, null === (n = Pt(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u);
} else Lt = t, t = u;
return t;
}
function Wn() {
var t, n;
return t = Lt, e.substr(Lt, 2) === wt ? (n = wt, Lt += 2) : (n = null, 0 === Ft && Kt(xt)), 
null !== n && (zt = t, n = Nt()), null === n ? (Lt = t, t = n) : t = n, t;
}
function Yn() {
var t, n, r;
return t = Lt, 92 === e.charCodeAt(Lt) ? (n = yt, Lt++) : (n = null, 0 === Ft && Kt(mt)), 
null !== n ? (e.length > Lt ? (r = e.charAt(Lt), Lt++) : (r = null, 0 === Ft && Kt(ht)), 
null !== r ? (zt = t, null === (n = be(r)) ? (Lt = t, t = n) : t = n) : (Lt = t, 
t = u)) : (Lt = t, t = u), t;
}
if (r.Token.offset = Bt, r.Token.text = Gt, null !== (Ut = o()) && Lt === e.length) return Ut;
throw Vt(Ht), zt = Math.max(Lt, $t), new t(Ht, zt < e.length ? e.charAt(zt) : null, zt, Yt(zt).line, Yt(zt).column);
}
return e(t, Error), {
SyntaxError: t,
parse: n
};
}();
t.parse = i.parse, t.default = t.parse;
}, function(e, t, n) {
"use strict";
function r(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), r(n(41));
const i = n(41);
t.cjkConv = i.default, t.version = n(115).version, t.default = i.default;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(97), i = n(98), o = n(99);
t.table_cn2tw = Object.assign(r, o.wiki_s2t_v2), t.table_tw2cn = Object.assign(i, o.wiki_t2s_v2), 
[ "像", "象", "剷", "鏟", "铲", "刬", "剗" ].forEach(function(e) {
delete t.table_tw2cn[e], delete t.table_cn2tw[e];
}), [].forEach(function(e) {
delete t.table_cn2tw[e];
}), [].forEach(function(e) {
delete t.table_tw2cn[e];
}), t.table_cn2tw = Object.assign(t.table_cn2tw, {
"恶": "惡",
"苏": "蘇",
"壳": "殻",
"馆": "館",
"里": "裡",
"后": "後",
"当": "當",
"锺": "鍾",
"钟": "鐘",
"凃": "塗",
"涂": "涂",
"㑩": "儸",
"罗": "羅",
"啰": "囉",
"国": "國",
"验": "驗",
"准": "準",
"历": "歷",
"刹": "剎",
"讬": "託",
"纤": "纖",
"𫔀": "鍊",
"炼": "煉",
"恒": "恆",
"畲": "畲",
"复": "復",
"钜": "鉅",
"谑": "謔",
"谘": "諮",
"干": "幹",
"线": "線",
"缐": "線",
"尽": "盡",
"处": "處",
"面": "麵",
"舍": "捨",
"松": "鬆",
"𫔮": "閒",
"啮": "齧",
"赃": "贓",
"咤": "吒",
"痳": "痲",
"荡": "蕩",
"墙": "牆",
"占": "佔",
"借": "藉",
"制": "製",
"征": "徵",
"冲": "衝",
"喂": "餵",
"只": "隻",
"炮": "砲",
"奸": "姦",
"困": "睏",
"志": "誌",
"布": "佈",
"鳄": "鱷",
"卤": "滷",
"系": "繫",
"分": "份",
"梁": "樑",
"鉴": "鑑",
"䌽": "綵",
"谷": "穀",
"板": "闆",
"注": "註",
"克": "剋"
}), t.table_tw2cn = Object.assign(t.table_tw2cn, {
"殻": "壳",
"殼": "壳",
"館": "馆",
"後": "后",
"儅": "儅",
"噹": "当",
"鍾": "锺",
"鐘": "钟",
"㑹": "会",
"塗": "凃",
"涂": "涂",
"儸": "㑩",
"羅": "罗",
"囉": "啰",
"國": "国",
"剎": "刹",
"託": "讬",
"鍊": "炼",
"錬": "炼",
"煉": "炼",
"壞": "坏",
"壊": "坏",
"佘": "佘",
"畲": "畲",
"丑": "丑",
"么": "么",
"几": "几",
"后": "后",
"斗": "斗",
"艸": "艸",
"干": "干",
"虫": "虫",
"岳": "岳",
"卜": "卜",
"于": "于",
"里": "里",
"鉅": "钜",
"禦": "御",
"謔": "谑",
"餘": "馀",
"范": "范",
"朴": "朴",
"咨": "咨",
"諮": "谘",
"齣": "齣",
"線": "线",
"綫": "线",
"儘": "尽",
"盡": "尽",
"划": "划",
"凈": "净",
"杰": "杰",
"余": "余",
"面": "面",
"舍": "舍",
"松": "松",
"云": "云",
"嚙": "啮",
"齧": "啮",
"咸": "咸",
"吒": "吒",
"折": "折",
"同": "同",
"胡": "胡",
"症": "症",
"郁": "郁",
"采": "采",
"栖": "栖",
"踪": "踪",
"昵": "昵",
"厘": "厘",
"痲": "痳",
"痳": "痳",
"怜": "怜",
"盪": "荡",
"蕩": "荡",
"悽": "悽",
"牆": "墙",
"墻": "墙",
"佔": "占",
"占": "占",
"藉": "借",
"借": "借",
"噸": "噸",
"吨": "吨",
"製": "制",
"制": "制",
"徵": "征",
"征": "征",
"向": "向",
"餵": "喂",
"喂": "喂",
"隻": "只",
"只": "只",
"困": "困",
"志": "志",
"佈": "布",
"布": "布",
"鱷": "鳄",
"鰐": "鳄",
"鹵": "卤",
"滷": "卤",
"系": "系",
"份": "分",
"分": "分",
"梁": "梁",
"樑": "梁",
"綵": "䌽",
"谷": "谷",
"穀": "谷",
"板": "板",
"彙": "汇",
"匯": "汇",
"祢": "祢",
"注": "注",
"恒": "恒",
"恆": "恒",
"晒": "晒",
"杆": "杆",
"坂": "坂",
"克": "克",
"咏": "咏"
}), [ "畲", "氹", "凼", "靣", "彪", "尨", "狵" ].forEach(function(e) {
delete t.table_tw2cn[e], delete t.table_cn2tw[e];
}), [ "鉅" ].forEach(function(e) {
delete t.table_cn2tw[e];
}), [ "钜", "党", "万", "与" ].forEach(function(e) {
delete t.table_tw2cn[e];
}), Object.entries({
"餵": "𫗭",
"餧": "𫗪",
"淨": "净",
"處": "处",
"憂": "忧",
"優": "优",
"煙": "烟",
"綫": "线",
"線": "缐",
"貳": "贰",
"氣": "气",
"咸": "鹹",
"剗": "刬",
"鏟": "铲",
"盤": "盘",
"採": "采",
"棲": "栖",
"暱": "昵",
"繨": "𫄤",
"剮": "剐",
"劏": "㓥"
}).forEach(function(e) {
let [n, r] = e;
t.table_tw2cn[n] = r, t.table_cn2tw[r] = n;
}), [ "札", "污", "汙", "游", "遊", "伙", "夥", "御", "郁", "咔", "哢", "凌", "淩", "扎", "紮", "痴", "癡", "嚯", "薑", "姜", "扡", "扦", "捻", "撚", "遝", "沓", "栗", "挽", "灶", "竈", "霉", "黴", "欲", "慾", "讚", "菸", "拾", "十", "証", "捲", "卷", "燻", "熏", "吁", "籲", "龥", "蹠", "跖", "矽", "硅", "脩", "修", "犟", "剷", "噼", "劈", "擗", "核", "覈", "憷", "呼", "唿", "嗬", "呵", "脣", "唇", "唇", "升", "昇", "磐", "溪", "渓", "谿", "嵠", "祐", "佑", "媮", "偷", "瓮", "罋", "甕", "闇", "暗", "痺", "痹", "雇", "僱", "秘", "祕", "周", "週", "闢", "簷", "檐", "涌", "湧", "家", "傢", "亘", "亙", "洩", "泄", "珮", "佩", "尅", "剿", "勦", "沉", "沈", "搾", "榨", "筱", "篠", "陞", "獃", "盃" ].forEach(function(e) {
t.table_tw2cn[e] = e, t.table_cn2tw[e] = e;
}), t.default = t;
}, function(e, t) {
e.exports = {
"万": "萬",
"与": "與",
"丑": "醜",
"专": "專",
"业": "業",
"丛": "叢",
"东": "東",
"丝": "絲",
"丢": "丟",
"两": "兩",
"严": "嚴",
"并": "並",
"丧": "喪",
"个": "個",
"丬": "爿",
"丰": "豐",
"临": "臨",
"为": "為",
"丽": "麗",
"举": "舉",
"么": "麼",
"义": "義",
"乌": "烏",
"乐": "樂",
"乔": "喬",
"习": "習",
"乡": "鄉",
"书": "書",
"买": "買",
"乱": "亂",
"干": "乾",
"争": "爭",
"于": "於",
"亏": "虧",
"云": "雲",
"亘": "亙",
"亚": "亞",
"产": "產",
"亩": "畝",
"亲": "親",
"亵": "褻",
"亸": "嚲",
"亿": "億",
"仅": "僅",
"仆": "僕",
"从": "從",
"仑": "侖",
"仓": "倉",
"仪": "儀",
"们": "們",
"价": "價",
"众": "眾",
"优": "優",
"伙": "夥",
"会": "會",
"伛": "傴",
"伞": "傘",
"伟": "偉",
"传": "傳",
"伤": "傷",
"伥": "倀",
"伦": "倫",
"伧": "傖",
"伪": "偽",
"伫": "佇",
"体": "體",
"畲": "佘",
"余": "餘",
"佣": "傭",
"佥": "僉",
"来": "來",
"侠": "俠",
"侣": "侶",
"侥": "僥",
"侦": "偵",
"侧": "側",
"侨": "僑",
"侩": "儈",
"侪": "儕",
"侬": "儂",
"俣": "俁",
"俦": "儔",
"俨": "儼",
"俩": "倆",
"俪": "儷",
"俭": "儉",
"债": "債",
"倾": "傾",
"偬": "傯",
"偻": "僂",
"偾": "僨",
"偿": "償",
"杰": "傑",
"备": "備",
"傥": "儻",
"傧": "儐",
"储": "儲",
"傩": "儺",
"当": "儅",
"尽": "儘",
"罗": "儸",
"攒": "儹",
"儿": "兒",
"兑": "兌",
"兖": "兗",
"党": "黨",
"内": "內",
"兰": "蘭",
"关": "關",
"兴": "興",
"兹": "茲",
"养": "養",
"兽": "獸",
"冁": "囅",
"冈": "岡",
"册": "冊",
"写": "寫",
"军": "軍",
"农": "農",
"冢": "塚",
"幂": "冪",
"冯": "馮",
"冲": "沖",
"决": "決",
"况": "況",
"冻": "凍",
"净": "淨",
"涂": "凃",
"凄": "淒",
"凉": "涼",
"凌": "淩",
"减": "減",
"凑": "湊",
"凛": "凜",
"渎": "凟",
"几": "幾",
"凤": "鳳",
"处": "処",
"凫": "鳧",
"凭": "憑",
"凯": "凱",
"击": "擊",
"凼": "氹",
"凿": "鑿",
"刍": "芻",
"划": "劃",
"刘": "劉",
"则": "則",
"刚": "剛",
"创": "創",
"删": "刪",
"别": "別",
"刬": "剗",
"刭": "剄",
"刽": "劊",
"刿": "劌",
"剀": "剴",
"剂": "劑",
"剐": "剮",
"剑": "劍",
"剥": "剝",
"剧": "劇",
"铲": "剷",
"札": "劄",
"劝": "勸",
"办": "辦",
"务": "務",
"劢": "勱",
"动": "動",
"励": "勵",
"劲": "勁",
"劳": "勞",
"势": "勢",
"勋": "勳",
"勐": "猛",
"勚": "勩",
"胜": "勝",
"绩": "勣",
"匀": "勻",
"匦": "匭",
"匮": "匱",
"汇": "匯",
"奁": "匲",
"椟": "匵",
"区": "區",
"医": "醫",
"华": "華",
"协": "協",
"单": "單",
"卖": "賣",
"卜": "蔔",
"卢": "盧",
"卤": "鹵",
"卧": "臥",
"卫": "衛",
"却": "卻",
"卺": "巹",
"厂": "廠",
"厅": "廳",
"历": "曆",
"厉": "厲",
"压": "壓",
"厌": "厭",
"厍": "厙",
"厕": "廁",
"厢": "廂",
"厣": "厴",
"厦": "廈",
"厨": "廚",
"厩": "廄",
"厮": "廝",
"县": "縣",
"叁": "三",
"参": "參",
"叆": "靉",
"叇": "靆",
"双": "雙",
"发": "發",
"变": "變",
"叙": "敘",
"叠": "疊",
"叶": "葉",
"号": "號",
"叹": "歎",
"叽": "嘰",
"吁": "籲",
"咤": "吒",
"吓": "嚇",
"吕": "呂",
"吗": "嗎",
"吣": "唚",
"吨": "噸",
"听": "聽",
"启": "啟",
"吴": "吳",
"呒": "嘸",
"呓": "囈",
"呕": "嘔",
"呖": "嚦",
"呗": "唄",
"员": "員",
"呙": "咼",
"呛": "嗆",
"呜": "嗚",
"咏": "詠",
"咔": "哢",
"咙": "嚨",
"咛": "嚀",
"咝": "噝",
"咨": "諮",
"咴": "噅",
"咸": "鹹",
"哌": "呱",
"响": "響",
"哑": "啞",
"哒": "噠",
"哓": "嘵",
"哔": "嗶",
"哕": "噦",
"哗": "嘩",
"哙": "噲",
"哜": "嚌",
"哝": "噥",
"哟": "喲",
"唣": "唕",
"唛": "嘜",
"唝": "嗊",
"唠": "嘮",
"唡": "啢",
"唢": "嗩",
"唤": "喚",
"唿": "呼",
"问": "問",
"衔": "啣",
"啧": "嘖",
"啬": "嗇",
"啭": "囀",
"啮": "齧",
"啰": "囉",
"啴": "嘽",
"啸": "嘯",
"喷": "噴",
"喽": "嘍",
"喾": "嚳",
"嗫": "囁",
"嗬": "呵",
"嗳": "噯",
"尝": "嘗",
"嘘": "噓",
"嘤": "嚶",
"嘱": "囑",
"恶": "噁",
"噜": "嚕",
"噼": "劈",
"嚣": "囂",
"嚯": "謔",
"苏": "囌",
"团": "團",
"囱": "囪",
"园": "園",
"国": "囯",
"围": "圍",
"囵": "圇",
"图": "圖",
"圆": "圓",
"圣": "聖",
"圹": "壙",
"场": "場",
"坂": "阪",
"坏": "壞",
"块": "塊",
"坚": "堅",
"坛": "壇",
"坜": "壢",
"坝": "壩",
"坞": "塢",
"坟": "墳",
"坠": "墜",
"垧": "坰",
"垄": "壟",
"垅": "壟",
"垆": "壚",
"垒": "壘",
"垦": "墾",
"垩": "堊",
"垫": "墊",
"垭": "埡",
"垯": "墶",
"垱": "壋",
"垲": "塏",
"垴": "堖",
"埯": "垵",
"埘": "塒",
"埙": "塤",
"埚": "堝",
"埝": "墊",
"执": "執",
"堑": "塹",
"堕": "墮",
"阶": "堦",
"尧": "堯",
"报": "報",
"碱": "堿",
"塆": "壪",
"茔": "塋",
"塬": "原",
"尘": "塵",
"砖": "塼",
"墙": "牆",
"硗": "墝",
"壮": "壯",
"声": "聲",
"壳": "殼",
"壶": "壺",
"壸": "壼",
"寿": "壽",
"复": "複",
"够": "夠",
"梦": "夢",
"头": "頭",
"夸": "誇",
"夹": "夾",
"夺": "奪",
"奂": "奐",
"奋": "奮",
"奖": "獎",
"奥": "奧",
"妆": "妝",
"妇": "婦",
"妈": "媽",
"妩": "嫵",
"妪": "嫗",
"妫": "媯",
"姗": "姍",
"姜": "薑",
"娄": "婁",
"娅": "婭",
"娆": "嬈",
"娇": "嬌",
"娈": "孌",
"娱": "娛",
"娲": "媧",
"娴": "嫻",
"婳": "嫿",
"婴": "嬰",
"婵": "嬋",
"婶": "嬸",
"媪": "媼",
"袅": "嫋",
"嫒": "嬡",
"嫔": "嬪",
"嫱": "嬙",
"嬷": "嬤",
"懒": "嬾",
"孙": "孫",
"学": "學",
"孪": "孿",
"宁": "寧",
"宝": "寶",
"实": "實",
"宠": "寵",
"审": "審",
"宪": "憲",
"宫": "宮",
"宽": "寬",
"宾": "賓",
"寝": "寢",
"对": "對",
"寻": "尋",
"导": "導",
"将": "將",
"尔": "爾",
"尴": "尲",
"尸": "屍",
"层": "層",
"屃": "屭",
"届": "屆",
"屉": "屜",
"属": "屬",
"屡": "屢",
"屦": "屨",
"屿": "嶼",
"岁": "歲",
"岂": "豈",
"岖": "嶇",
"岗": "崗",
"岘": "峴",
"岙": "嶴",
"岚": "嵐",
"岛": "島",
"岭": "嶺",
"岳": "嶽",
"岽": "崠",
"岿": "巋",
"峃": "嶨",
"峄": "嶧",
"峡": "峽",
"峣": "嶢",
"峤": "嶠",
"峥": "崢",
"峦": "巒",
"崂": "嶗",
"崃": "崍",
"崄": "嶮",
"崭": "嶄",
"嵛": "崳",
"嵘": "嶸",
"嵚": "嶔",
"嵝": "嶁",
"嵴": "脊",
"巅": "巔",
"巩": "鞏",
"巯": "巰",
"币": "幣",
"帅": "帥",
"师": "師",
"帏": "幃",
"帐": "帳",
"帘": "簾",
"帜": "幟",
"带": "帶",
"帧": "幀",
"帮": "幫",
"帱": "幬",
"帻": "幘",
"帼": "幗",
"幞": "襆",
"襕": "幱",
"幺": "么",
"广": "廣",
"庄": "莊",
"庆": "慶",
"庐": "廬",
"庑": "廡",
"库": "庫",
"应": "應",
"庙": "廟",
"庞": "龐",
"废": "廢",
"庼": "廎",
"荫": "廕",
"廪": "廩",
"开": "開",
"异": "異",
"弃": "棄",
"张": "張",
"弥": "彌",
"弪": "弳",
"弯": "彎",
"强": "強",
"弹": "彈",
"归": "歸",
"录": "錄",
"彟": "彠",
"彦": "彥",
"彻": "徹",
"径": "徑",
"徕": "徠",
"御": "禦",
"忆": "憶",
"忏": "懺",
"忧": "憂",
"忾": "愾",
"怀": "懷",
"态": "態",
"怂": "慫",
"怃": "憮",
"怄": "慪",
"怅": "悵",
"怆": "愴",
"怜": "憐",
"总": "總",
"怼": "懟",
"怿": "懌",
"恋": "戀",
"耻": "恥",
"恳": "懇",
"恸": "慟",
"恹": "懨",
"恺": "愷",
"恻": "惻",
"恼": "惱",
"恽": "惲",
"悦": "悅",
"悫": "愨",
"悬": "懸",
"悭": "慳",
"悯": "憫",
"闷": "悶",
"惊": "驚",
"惧": "懼",
"惨": "慘",
"惩": "懲",
"惫": "憊",
"惬": "愜",
"惭": "慚",
"惮": "憚",
"惯": "慣",
"愍": "湣",
"爱": "愛",
"愠": "慍",
"愤": "憤",
"愦": "憒",
"愿": "願",
"慑": "懾",
"慭": "憖",
"虑": "慮",
"憷": "怵",
"懔": "懍",
"懑": "懣",
"欢": "懽",
"戆": "戇",
"戋": "戔",
"戏": "戲",
"戗": "戧",
"战": "戰",
"戬": "戩",
"户": "戶",
"扎": "紮",
"扑": "撲",
"扦": "扡",
"扩": "擴",
"扪": "捫",
"扫": "掃",
"扬": "揚",
"扰": "擾",
"抚": "撫",
"抛": "拋",
"抟": "摶",
"抠": "摳",
"抡": "掄",
"抢": "搶",
"护": "護",
"担": "擔",
"拟": "擬",
"拢": "攏",
"拣": "揀",
"拥": "擁",
"拦": "攔",
"拧": "擰",
"拨": "撥",
"择": "擇",
"挂": "掛",
"挚": "摯",
"挛": "攣",
"挜": "掗",
"挝": "撾",
"挞": "撻",
"挟": "挾",
"挠": "撓",
"挡": "擋",
"挢": "撟",
"挣": "掙",
"挤": "擠",
"挥": "揮",
"挦": "撏",
"捞": "撈",
"损": "損",
"捡": "撿",
"换": "換",
"捣": "搗",
"据": "據",
"捻": "撚",
"掳": "擄",
"掴": "摑",
"掷": "擲",
"掸": "撣",
"掺": "摻",
"掼": "摜",
"揸": "摣",
"揽": "攬",
"揿": "撳",
"搀": "攙",
"搁": "擱",
"搂": "摟",
"搅": "攪",
"构": "搆",
"摇": "搖",
"携": "攜",
"摄": "攝",
"摅": "攄",
"摆": "擺",
"摈": "擯",
"摊": "攤",
"撄": "攖",
"撑": "撐",
"撵": "攆",
"撷": "擷",
"撸": "擼",
"撺": "攛",
"擞": "擻",
"敌": "敵",
"败": "敗",
"敛": "斂",
"数": "數",
"驱": "敺",
"毙": "斃",
"斋": "齋",
"斓": "斕",
"斗": "鬥",
"斩": "斬",
"断": "斷",
"无": "無",
"旧": "舊",
"时": "時",
"旷": "曠",
"旸": "暘",
"昙": "曇",
"昼": "晝",
"昽": "曨",
"显": "顯",
"晋": "晉",
"晒": "曬",
"晓": "曉",
"晔": "曄",
"晕": "暈",
"晖": "暉",
"暂": "暫",
"畅": "暢",
"暧": "曖",
"胧": "朧",
"术": "術",
"朴": "樸",
"机": "機",
"杀": "殺",
"杂": "雜",
"权": "權",
"条": "條",
"杨": "楊",
"杩": "榪",
"极": "極",
"枞": "樅",
"枢": "樞",
"枣": "棗",
"枥": "櫪",
"枧": "梘",
"枨": "棖",
"枪": "槍",
"枫": "楓",
"枭": "梟",
"柜": "櫃",
"柠": "檸",
"栅": "柵",
"柽": "檉",
"栀": "梔",
"标": "標",
"栈": "棧",
"栉": "櫛",
"栊": "櫳",
"栋": "棟",
"栌": "櫨",
"栎": "櫟",
"栏": "欄",
"树": "樹",
"栖": "棲",
"样": "樣",
"栾": "欒",
"桊": "棬",
"桠": "椏",
"桡": "橈",
"桢": "楨",
"档": "檔",
"桤": "榿",
"桥": "橋",
"桦": "樺",
"桧": "檜",
"桨": "槳",
"桩": "樁",
"梼": "檮",
"梾": "棶",
"检": "檢",
"棂": "欞",
"椁": "槨",
"椠": "槧",
"椤": "欏",
"椭": "橢",
"楼": "樓",
"榄": "欖",
"榇": "櫬",
"榈": "櫚",
"榉": "櫸",
"荣": "榮",
"盘": "槃",
"槚": "檟",
"槛": "檻",
"槟": "檳",
"槠": "櫧",
"规": "槼",
"横": "橫",
"樯": "檣",
"樱": "櫻",
"橥": "櫫",
"橱": "櫥",
"橹": "櫓",
"橼": "櫞",
"檩": "檁",
"檐": "簷",
"苘": "檾",
"欤": "歟",
"欧": "歐",
"钦": "欽",
"歼": "殲",
"殁": "歿",
"殇": "殤",
"残": "殘",
"殒": "殞",
"殓": "殮",
"殚": "殫",
"殡": "殯",
"殴": "毆",
"毁": "毀",
"毂": "轂",
"毕": "畢",
"毡": "氈",
"绒": "毧",
"毵": "毿",
"牦": "氂",
"氇": "氌",
"气": "氣",
"氢": "氫",
"氩": "氬",
"氲": "氳",
"汉": "漢",
"污": "汙",
"汤": "湯",
"汹": "洶",
"没": "沒",
"沓": "遝",
"沟": "溝",
"沣": "灃",
"沤": "漚",
"沥": "瀝",
"沦": "淪",
"沧": "滄",
"沨": "渢",
"沩": "溈",
"沪": "滬",
"沵": "濔",
"泞": "濘",
"泪": "淚",
"泶": "澩",
"泷": "瀧",
"泸": "瀘",
"泺": "濼",
"泻": "瀉",
"泼": "潑",
"泽": "澤",
"泾": "涇",
"洁": "潔",
"洒": "灑",
"洼": "窪",
"浃": "浹",
"浅": "淺",
"浆": "漿",
"浇": "澆",
"浈": "湞",
"浉": "溮",
"浊": "濁",
"测": "測",
"浍": "澮",
"济": "濟",
"浏": "瀏",
"浐": "滻",
"浑": "渾",
"浒": "滸",
"浓": "濃",
"浔": "潯",
"浕": "濜",
"涌": "湧",
"莅": "涖",
"涛": "濤",
"涝": "澇",
"涞": "淶",
"涟": "漣",
"涠": "潿",
"涡": "渦",
"涢": "溳",
"涣": "渙",
"涤": "滌",
"润": "潤",
"涧": "澗",
"涨": "漲",
"涩": "澀",
"淀": "澱",
"渌": "淥",
"渊": "淵",
"渍": "漬",
"渐": "漸",
"渑": "澠",
"渔": "漁",
"渖": "瀋",
"渗": "滲",
"温": "溫",
"游": "遊",
"湾": "灣",
"湿": "濕",
"溃": "潰",
"溅": "濺",
"溆": "漵",
"溇": "漊",
"灭": "滅",
"荥": "滎",
"滗": "潷",
"滚": "滾",
"滞": "滯",
"滟": "灩",
"滠": "灄",
"满": "滿",
"滢": "瀅",
"滤": "濾",
"滥": "濫",
"滦": "灤",
"滨": "濱",
"滩": "灘",
"滪": "澦",
"漤": "濫",
"颍": "潁",
"潆": "瀠",
"潇": "瀟",
"潋": "瀲",
"潍": "濰",
"潜": "潛",
"潴": "瀦",
"澜": "瀾",
"濑": "瀨",
"濒": "瀕",
"阔": "濶",
"灏": "灝",
"灯": "燈",
"灵": "靈",
"灾": "災",
"灿": "燦",
"炀": "煬",
"炉": "爐",
"炖": "燉",
"炜": "煒",
"炝": "熗",
"点": "點",
"炼": "煉",
"炽": "熾",
"烁": "爍",
"烂": "爛",
"烃": "烴",
"烛": "燭",
"烟": "煙",
"烦": "煩",
"烧": "燒",
"烨": "燁",
"烩": "燴",
"烫": "燙",
"烬": "燼",
"热": "熱",
"焕": "煥",
"焖": "燜",
"焘": "燾",
"煅": "煆",
"辉": "煇",
"茕": "煢",
"煳": "糊",
"煺": "退",
"荧": "熒",
"熘": "溜",
"颎": "熲",
"营": "營",
"爷": "爺",
"笺": "牋",
"牍": "牘",
"闸": "牐",
"牵": "牽",
"牺": "犧",
"犊": "犢",
"荦": "犖",
"犟": "強",
"犭": "犬",
"状": "狀",
"犷": "獷",
"犸": "獁",
"犹": "猶",
"狈": "狽",
"狍": "麅",
"狝": "獮",
"狞": "獰",
"独": "獨",
"狭": "狹",
"狮": "獅",
"狯": "獪",
"狰": "猙",
"狱": "獄",
"狲": "猻",
"猃": "獫",
"猎": "獵",
"猕": "獼",
"猡": "玀",
"猪": "豬",
"猫": "貓",
"猬": "蝟",
"献": "獻",
"獭": "獺",
"获": "獲",
"玑": "璣",
"玙": "璵",
"玚": "瑒",
"玛": "瑪",
"珏": "玨",
"玮": "瑋",
"环": "環",
"现": "現",
"玱": "瑲",
"玺": "璽",
"珉": "瑉",
"珐": "琺",
"珑": "瓏",
"珰": "璫",
"珲": "琿",
"琎": "璡",
"琏": "璉",
"琐": "瑣",
"琼": "瓊",
"瑶": "瑤",
"莹": "瑩",
"瑷": "璦",
"璇": "璿",
"璎": "瓔",
"瓒": "瓚",
"瓮": "甕",
"瓯": "甌",
"罂": "甖",
"电": "電",
"画": "畫",
"畴": "疇",
"疖": "癤",
"疗": "療",
"疟": "瘧",
"疠": "癘",
"疡": "瘍",
"疬": "鬁",
"疮": "瘡",
"疯": "瘋",
"疱": "皰",
"疴": "屙",
"痈": "癰",
"痉": "痙",
"痒": "癢",
"痖": "瘂",
"痨": "癆",
"痪": "瘓",
"痫": "癇",
"痴": "癡",
"瘅": "癉",
"瘆": "瘮",
"瘗": "瘞",
"瘘": "瘺",
"瘪": "癟",
"瘫": "癱",
"瘾": "癮",
"瘿": "癭",
"癞": "癩",
"癣": "癬",
"癫": "癲",
"癯": "臒",
"皑": "皚",
"皱": "皺",
"皲": "皸",
"盏": "盞",
"盐": "鹽",
"监": "監",
"盖": "蓋",
"盗": "盜",
"荡": "盪",
"眍": "瞘",
"视": "眎",
"眦": "眥",
"眬": "矓",
"着": "著",
"睁": "睜",
"睐": "睞",
"睑": "瞼",
"瞆": "瞶",
"瞒": "瞞",
"瞩": "矚",
"矫": "矯",
"矶": "磯",
"硅": "矽",
"矾": "礬",
"矿": "礦",
"砀": "碭",
"码": "碼",
"砗": "硨",
"砚": "硯",
"砜": "碸",
"砺": "礪",
"砻": "礱",
"砾": "礫",
"础": "礎",
"硁": "硜",
"硕": "碩",
"硖": "硤",
"硙": "磑",
"硚": "礄",
"确": "確",
"碜": "硶",
"硷": "鹼",
"碍": "礙",
"碛": "磧",
"碹": "镟",
"磙": "滾",
"礼": "禮",
"祎": "禕",
"祢": "禰",
"祯": "禎",
"祷": "禱",
"祸": "禍",
"禄": "祿",
"禀": "稟",
"禅": "禪",
"离": "離",
"秃": "禿",
"秆": "稈",
"籼": "秈",
"种": "種",
"积": "積",
"称": "稱",
"秽": "穢",
"秾": "穠",
"税": "稅",
"稆": "穭",
"稣": "穌",
"稳": "穩",
"谷": "穀",
"颖": "穎",
"穑": "穡",
"颓": "穨",
"穷": "窮",
"窃": "竊",
"窍": "竅",
"窑": "窯",
"窜": "竄",
"窝": "窩",
"窥": "窺",
"窦": "竇",
"窭": "窶",
"竖": "豎",
"竞": "競",
"笃": "篤",
"笋": "筍",
"笔": "筆",
"笕": "筧",
"笼": "籠",
"笾": "籩",
"筑": "築",
"筚": "篳",
"筛": "篩",
"筜": "簹",
"筝": "箏",
"筹": "籌",
"签": "簽",
"简": "簡",
"箓": "籙",
"箦": "簀",
"箧": "篋",
"箨": "籜",
"箩": "籮",
"箪": "簞",
"箫": "簫",
"节": "節",
"范": "範",
"篑": "簣",
"篓": "簍",
"篮": "籃",
"篱": "籬",
"簖": "籪",
"籁": "籟",
"钥": "籥",
"籴": "糴",
"类": "類",
"粜": "糶",
"粝": "糲",
"粤": "粵",
"粪": "糞",
"粮": "糧",
"糁": "糝",
"糇": "餱",
"纟": "糸",
"纠": "糾",
"纪": "紀",
"纣": "紂",
"约": "約",
"红": "紅",
"纡": "紆",
"纥": "紇",
"纨": "紈",
"纫": "紉",
"纹": "紋",
"纳": "納",
"纽": "紐",
"纾": "紓",
"纯": "純",
"纰": "紕",
"纼": "紖",
"纱": "紗",
"纮": "紘",
"纸": "紙",
"级": "級",
"纷": "紛",
"纭": "紜",
"纴": "紝",
"纺": "紡",
"紧": "緊",
"细": "細",
"绂": "紱",
"绁": "紲",
"绅": "紳",
"纻": "紵",
"绍": "紹",
"绀": "紺",
"绋": "紼",
"绐": "紿",
"绌": "絀",
"终": "終",
"组": "組",
"绊": "絆",
"绗": "絎",
"结": "結",
"绝": "絕",
"绦": "絛",
"绔": "絝",
"绞": "絞",
"络": "絡",
"绚": "絢",
"给": "給",
"绖": "絰",
"统": "統",
"绛": "絳",
"絷": "縶",
"绢": "絹",
"绑": "綁",
"绡": "綃",
"绠": "綆",
"绨": "綈",
"绣": "綉",
"绤": "綌",
"绥": "綏",
"经": "經",
"综": "綜",
"缍": "綞",
"绿": "綠",
"绸": "綢",
"绻": "綣",
"线": "綫",
"绶": "綬",
"维": "維",
"绹": "綯",
"绾": "綰",
"纲": "綱",
"网": "網",
"绷": "綳",
"缀": "綴",
"纶": "綸",
"绺": "綹",
"绮": "綺",
"绽": "綻",
"绰": "綽",
"绫": "綾",
"绵": "綿",
"绲": "緄",
"缁": "緇",
"绯": "緋",
"缗": "緍",
"绪": "緒",
"绬": "緓",
"绱": "緔",
"缃": "緗",
"缄": "緘",
"缂": "緙",
"缉": "緝",
"缎": "緞",
"缔": "締",
"缘": "緣",
"缌": "緦",
"编": "編",
"缓": "緩",
"缅": "緬",
"纬": "緯",
"缑": "緱",
"缈": "緲",
"练": "練",
"缏": "緶",
"缇": "緹",
"缊": "緼",
"萦": "縈",
"缙": "縉",
"缢": "縊",
"缒": "縋",
"绉": "縐",
"缣": "縑",
"缞": "縗",
"缚": "縛",
"缜": "縝",
"缟": "縞",
"缛": "縟",
"缝": "縫",
"缡": "縭",
"缩": "縮",
"纵": "縱",
"缧": "縲",
"纤": "縴",
"缦": "縵",
"缕": "縷",
"缥": "縹",
"缫": "繅",
"缪": "繆",
"襁": "繈",
"缯": "繒",
"织": "織",
"缮": "繕",
"缭": "繚",
"绕": "繞",
"缋": "繢",
"绳": "繩",
"绘": "繪",
"茧": "繭",
"缰": "繮",
"缳": "繯",
"缲": "繰",
"缴": "繳",
"绎": "繹",
"继": "繼",
"缤": "繽",
"缱": "繾",
"颣": "纇",
"缬": "纈",
"纩": "纊",
"续": "續",
"缠": "纏",
"缨": "纓",
"缵": "纘",
"缆": "纜",
"缐": "線",
"钵": "缽",
"罚": "罰",
"罢": "罷",
"罴": "羆",
"骂": "罵",
"羁": "羈",
"芈": "羋",
"羟": "羥",
"羡": "羨",
"翘": "翹",
"翙": "翽",
"翚": "翬",
"锄": "耡",
"耢": "耮",
"耧": "耬",
"耸": "聳",
"聂": "聶",
"聋": "聾",
"职": "職",
"聍": "聹",
"联": "聯",
"闻": "聞",
"聩": "聵",
"聪": "聰",
"肃": "肅",
"肠": "腸",
"肤": "膚",
"肷": "膁",
"肾": "腎",
"肿": "腫",
"胀": "脹",
"胁": "脅",
"胆": "膽",
"胨": "腖",
"胪": "臚",
"胫": "脛",
"胶": "膠",
"脉": "脈",
"脍": "膾",
"脏": "髒",
"脐": "臍",
"脑": "腦",
"脓": "膿",
"脔": "臠",
"脚": "腳",
"脱": "脫",
"脶": "腡",
"脸": "臉",
"腊": "臘",
"腌": "醃",
"腘": "膕",
"腭": "齶",
"腻": "膩",
"腼": "靦",
"腽": "膃",
"腾": "騰",
"膑": "臏",
"臜": "臢",
"舆": "輿",
"铺": "舖",
"馆": "舘",
"舣": "艤",
"舰": "艦",
"舱": "艙",
"舻": "艫",
"艰": "艱",
"艳": "豔",
"艹": "艸",
"艺": "藝",
"芗": "薌",
"芜": "蕪",
"芦": "蘆",
"苁": "蓯",
"苇": "葦",
"苈": "藶",
"苋": "莧",
"苌": "萇",
"苍": "蒼",
"苎": "苧",
"苹": "蘋",
"茎": "莖",
"茏": "蘢",
"茑": "蔦",
"荆": "荊",
"荐": "薦",
"荙": "薘",
"荚": "莢",
"荛": "蕘",
"荜": "蓽",
"荞": "蕎",
"荟": "薈",
"荠": "薺",
"荤": "葷",
"荨": "蕁",
"荩": "藎",
"荪": "蓀",
"荬": "蕒",
"荭": "葒",
"荮": "葤",
"药": "藥",
"莜": "蓧",
"莱": "萊",
"莲": "蓮",
"莳": "蒔",
"莴": "萵",
"莶": "薟",
"莸": "蕕",
"莺": "鶯",
"莼": "蓴",
"萚": "蘀",
"萝": "蘿",
"萤": "螢",
"萧": "蕭",
"萨": "薩",
"葱": "蔥",
"蒇": "蕆",
"蒉": "蕢",
"蒋": "蔣",
"蒌": "蔞",
"蓝": "藍",
"蓟": "薊",
"蓠": "蘺",
"蓣": "蕷",
"蓥": "鎣",
"蓦": "驀",
"蔷": "薔",
"蔹": "蘞",
"蔺": "藺",
"蔼": "藹",
"蕲": "蘄",
"蕴": "蘊",
"薮": "藪",
"藁": "槁",
"藓": "蘚",
"虏": "虜",
"虚": "虛",
"虫": "蟲",
"虬": "虯",
"虮": "蟣",
"虽": "雖",
"虾": "蝦",
"虿": "蠆",
"蚀": "蝕",
"蚁": "蟻",
"蚂": "螞",
"蚕": "蠶",
"蚝": "蠔",
"蚬": "蜆",
"蛊": "蠱",
"蛎": "蠣",
"蛏": "蟶",
"蛮": "蠻",
"蛰": "蟄",
"蛱": "蛺",
"蛲": "蟯",
"蛳": "螄",
"蛴": "蠐",
"蜕": "蛻",
"蜗": "蝸",
"蜡": "蠟",
"蝇": "蠅",
"蝈": "蟈",
"蝉": "蟬",
"蝎": "蠍",
"蝼": "螻",
"蝾": "蠑",
"螀": "螿",
"螨": "蟎",
"蟏": "蠨",
"衅": "釁",
"补": "補",
"衬": "襯",
"衮": "袞",
"袄": "襖",
"袆": "褘",
"袜": "襪",
"袭": "襲",
"袯": "襏",
"装": "裝",
"裆": "襠",
"裈": "褌",
"里": "裏",
"裢": "褳",
"裣": "襝",
"裤": "褲",
"裥": "襇",
"褛": "褸",
"褴": "襤",
"见": "見",
"觃": "覎",
"觅": "覓",
"觇": "覘",
"觋": "覡",
"觍": "覥",
"觎": "覦",
"觊": "覬",
"觏": "覯",
"觑": "覰",
"觐": "覲",
"觉": "覺",
"览": "覽",
"觌": "覿",
"观": "觀",
"觞": "觴",
"触": "觸",
"觯": "觶",
"讠": "訁",
"订": "訂",
"讣": "訃",
"计": "計",
"讯": "訊",
"讧": "訌",
"讨": "討",
"讦": "訐",
"讱": "訒",
"训": "訓",
"讪": "訕",
"讫": "訖",
"记": "記",
"讹": "訛",
"讶": "訝",
"讼": "訟",
"诀": "訣",
"讷": "訥",
"谌": "訦",
"讻": "訩",
"访": "訪",
"设": "設",
"许": "許",
"诉": "訴",
"诃": "訶",
"诊": "診",
"证": "証",
"诂": "詁",
"诋": "詆",
"讵": "詎",
"诈": "詐",
"诒": "詒",
"诏": "詔",
"评": "評",
"诐": "詖",
"诇": "詗",
"诎": "詘",
"诅": "詛",
"词": "詞",
"詟": "讋",
"诩": "詡",
"询": "詢",
"诣": "詣",
"试": "試",
"诗": "詩",
"诧": "詫",
"诟": "詬",
"诡": "詭",
"诠": "詮",
"诘": "詰",
"话": "話",
"该": "該",
"详": "詳",
"诜": "詵",
"诙": "詼",
"诖": "詿",
"诔": "誄",
"诛": "誅",
"诓": "誆",
"誉": "譽",
"誊": "謄",
"认": "認",
"诳": "誑",
"诶": "誒",
"诞": "誕",
"诱": "誘",
"诮": "誚",
"语": "語",
"诚": "誠",
"诫": "誡",
"诬": "誣",
"误": "誤",
"诰": "誥",
"诵": "誦",
"诲": "誨",
"说": "說",
"谁": "誰",
"课": "課",
"谇": "誶",
"诽": "誹",
"谊": "誼",
"调": "調",
"谄": "諂",
"谆": "諄",
"谈": "談",
"诿": "諉",
"请": "請",
"诤": "諍",
"诹": "諏",
"诼": "諑",
"谅": "諒",
"论": "論",
"谂": "諗",
"谀": "諛",
"谍": "諜",
"谞": "諝",
"谝": "諞",
"谥": "諡",
"诨": "諢",
"谔": "諤",
"谛": "諦",
"谐": "諧",
"谏": "諫",
"谕": "諭",
"讳": "諱",
"谙": "諳",
"讽": "諷",
"诸": "諸",
"谚": "諺",
"谖": "諼",
"诺": "諾",
"谋": "謀",
"谒": "謁",
"谓": "謂",
"诌": "謅",
"谎": "謊",
"谜": "謎",
"谧": "謐",
"谑": "謔",
"谡": "謖",
"谤": "謗",
"谦": "謙",
"讲": "講",
"谢": "謝",
"谣": "謠",
"谟": "謨",
"谪": "謫",
"谬": "謬",
"讴": "謳",
"谨": "謹",
"谩": "謾",
"谲": "譎",
"讥": "譏",
"谮": "譖",
"识": "識",
"谯": "譙",
"谭": "譚",
"谱": "譜",
"谵": "譫",
"译": "譯",
"议": "議",
"谴": "譴",
"诪": "譸",
"谫": "譾",
"读": "讀",
"雠": "讎",
"谗": "讒",
"让": "讓",
"谰": "讕",
"谶": "讖",
"赞": "讚",
"谠": "讜",
"谳": "讞",
"谘": "諮",
"豮": "豶",
"贝": "貝",
"贞": "貞",
"贠": "貟",
"负": "負",
"财": "財",
"贡": "貢",
"贫": "貧",
"货": "貨",
"贩": "販",
"贪": "貪",
"贯": "貫",
"责": "責",
"贮": "貯",
"贳": "貰",
"赀": "貲",
"贰": "貳",
"贵": "貴",
"贬": "貶",
"贷": "貸",
"贶": "貺",
"费": "費",
"贴": "貼",
"贻": "貽",
"贸": "貿",
"贺": "賀",
"贲": "賁",
"赂": "賂",
"赁": "賃",
"贿": "賄",
"赅": "賅",
"资": "資",
"贾": "賈",
"贼": "賊",
"赃": "賍",
"赈": "賑",
"赊": "賒",
"赇": "賕",
"赒": "賙",
"赉": "賚",
"赐": "賜",
"赏": "賞",
"赔": "賠",
"赓": "賡",
"贤": "賢",
"贱": "賤",
"赋": "賦",
"赕": "賧",
"质": "質",
"赍": "賫",
"账": "賬",
"赌": "賭",
"赆": "賮",
"赖": "賴",
"赗": "賵",
"赚": "賺",
"赙": "賻",
"购": "購",
"赛": "賽",
"赜": "賾",
"贽": "贄",
"赘": "贅",
"赟": "贇",
"赠": "贈",
"赝": "贋",
"赡": "贍",
"赢": "贏",
"赑": "贔",
"赎": "贖",
"赣": "贛",
"赪": "赬",
"赵": "趙",
"赶": "趕",
"趋": "趨",
"趱": "趲",
"趸": "躉",
"跃": "躍",
"跄": "蹌",
"跖": "蹠",
"跞": "躒",
"迹": "跡",
"践": "踐",
"跶": "躂",
"跷": "蹺",
"跸": "蹕",
"跹": "躚",
"跻": "躋",
"踊": "踴",
"踌": "躊",
"踪": "蹤",
"踬": "躓",
"踯": "躑",
"蹑": "躡",
"蹒": "蹣",
"蹰": "躕",
"蹿": "躥",
"躏": "躪",
"躜": "躦",
"躯": "軀",
"车": "車",
"轧": "軋",
"轨": "軌",
"轪": "軑",
"轩": "軒",
"轫": "軔",
"轭": "軛",
"软": "軟",
"轷": "軤",
"轸": "軫",
"轱": "軲",
"轴": "軸",
"轵": "軹",
"轺": "軺",
"轲": "軻",
"轶": "軼",
"轼": "軾",
"较": "較",
"辂": "輅",
"辁": "輇",
"辀": "輈",
"载": "載",
"轾": "輊",
"辄": "輒",
"辅": "輔",
"轻": "輕",
"辆": "輛",
"辎": "輜",
"辋": "輞",
"辍": "輟",
"辊": "輥",
"辇": "輦",
"辈": "輩",
"轮": "輪",
"辌": "輬",
"辑": "輯",
"辏": "輳",
"输": "輸",
"辐": "輻",
"辒": "輼",
"辗": "輾",
"辖": "轄",
"辕": "轅",
"辘": "轆",
"转": "轉",
"辙": "轍",
"轿": "轎",
"辚": "轔",
"轰": "轟",
"辔": "轡",
"轹": "轢",
"轳": "轤",
"辞": "辭",
"辩": "辯",
"辫": "辮",
"边": "邊",
"辽": "遼",
"达": "達",
"迁": "遷",
"过": "過",
"迈": "邁",
"运": "運",
"还": "還",
"这": "這",
"进": "進",
"远": "遠",
"违": "違",
"连": "連",
"迟": "遲",
"迩": "邇",
"迳": "逕",
"适": "適",
"选": "選",
"逊": "遜",
"递": "遞",
"逦": "邐",
"逻": "邏",
"遗": "遺",
"遥": "遙",
"邓": "鄧",
"邝": "鄺",
"邬": "鄔",
"邮": "郵",
"邹": "鄒",
"邺": "鄴",
"邻": "鄰",
"郁": "鬱",
"郄": "郤",
"郏": "郟",
"郐": "鄶",
"郑": "鄭",
"郓": "鄆",
"郦": "酈",
"郧": "鄖",
"郸": "鄲",
"酝": "醞",
"酦": "醱",
"酰": "醯",
"酱": "醬",
"酽": "釅",
"酾": "釃",
"酿": "釀",
"释": "釋",
"钆": "釓",
"钇": "釔",
"钌": "釕",
"钊": "釗",
"钉": "釘",
"钋": "釙",
"针": "針",
"钓": "釣",
"钐": "釤",
"钏": "釧",
"钒": "釩",
"钗": "釵",
"钍": "釷",
"钕": "釹",
"钎": "釺",
"钯": "鈀",
"钫": "鈁",
"钘": "鈃",
"钭": "鈄",
"钚": "鈈",
"钠": "鈉",
"钝": "鈍",
"钩": "鈎",
"钤": "鈐",
"钣": "鈑",
"钑": "鈒",
"钞": "鈔",
"钮": "鈕",
"钧": "鈞",
"钟": "鈡",
"钙": "鈣",
"钬": "鈥",
"钛": "鈦",
"钪": "鈧",
"铌": "鈮",
"铈": "鈰",
"钶": "鈳",
"铃": "鈴",
"钴": "鈷",
"钹": "鈸",
"铍": "鈹",
"钰": "鈺",
"钸": "鈽",
"铀": "鈾",
"钿": "鈿",
"钾": "鉀",
"铁": "鉄",
"钻": "鉆",
"铊": "鉈",
"铉": "鉉",
"铋": "鉍",
"铂": "鉑",
"钷": "鉕",
"钳": "鉗",
"铆": "鉚",
"铅": "鉛",
"钺": "鉞",
"钲": "鉦",
"钼": "鉬",
"钽": "鉭",
"锎": "鉲",
"鉴": "鑒",
"铏": "鉶",
"铰": "鉸",
"铒": "鉺",
"铬": "鉻",
"铪": "鉿",
"银": "銀",
"铳": "銃",
"铜": "銅",
"铚": "銍",
"铣": "銑",
"铨": "銓",
"铢": "銖",
"铭": "銘",
"铫": "銚",
"铦": "銛",
"铑": "銠",
"铷": "銣",
"铱": "銥",
"铟": "銦",
"铵": "銨",
"铥": "銩",
"铕": "銪",
"铯": "銫",
"铐": "銬",
"銮": "鑾",
"铞": "銱",
"锐": "銳",
"销": "銷",
"锈": "銹",
"锑": "銻",
"锉": "銼",
"铝": "鋁",
"镅": "鋂",
"锒": "鋃",
"锌": "鋅",
"钡": "鋇",
"铤": "鋌",
"铗": "鋏",
"锋": "鋒",
"铻": "鋙",
"镯": "鋜",
"锊": "鋝",
"锓": "鋟",
"铘": "鋣",
"锃": "鋥",
"锔": "鋦",
"锇": "鋨",
"铓": "鋩",
"铖": "鋮",
"锆": "鋯",
"锂": "鋰",
"铽": "鋱",
"锍": "鋶",
"锯": "鋸",
"钢": "鋼",
"锞": "錁",
"锖": "錆",
"锫": "錇",
"锩": "錈",
"铔": "錏",
"锥": "錐",
"锕": "錒",
"锟": "錕",
"锤": "錘",
"锱": "錙",
"铮": "錚",
"锛": "錛",
"锬": "錟",
"锭": "錠",
"锜": "錡",
"钱": "錢",
"锦": "錦",
"锚": "錨",
"锠": "錩",
"锡": "錫",
"锢": "錮",
"错": "錯",
"锰": "錳",
"铼": "錸",
"镎": "錼",
"錾": "鏨",
"锝": "鍀",
"锨": "鍁",
"锪": "鍃",
"钔": "鍆",
"锴": "鍇",
"锳": "鍈",
"锅": "鍋",
"镀": "鍍",
"锷": "鍔",
"铡": "鍘",
"钖": "鍚",
"锻": "鍛",
"锽": "鍠",
"锸": "鍤",
"锲": "鍥",
"锘": "鍩",
"锹": "鍫",
"锾": "鍰",
"键": "鍵",
"锶": "鍶",
"锗": "鍺",
"镁": "鎂",
"锿": "鎄",
"镑": "鎊",
"镕": "鎔",
"锁": "鎖",
"镉": "鎘",
"镈": "鎛",
"镃": "鎡",
"钨": "鎢",
"镏": "鎦",
"铠": "鎧",
"铩": "鎩",
"锼": "鎪",
"镐": "鎬",
"镇": "鎮",
"镒": "鎰",
"镋": "鎲",
"镍": "鎳",
"镓": "鎵",
"镌": "鎸",
"镞": "鏃",
"链": "鏈",
"镆": "鏌",
"镙": "鏍",
"镠": "鏐",
"镝": "鏑",
"铿": "鏗",
"锵": "鏘",
"镗": "鏜",
"镘": "鏝",
"镛": "鏞",
"镜": "鏡",
"镖": "鏢",
"镂": "鏤",
"镚": "鏰",
"铧": "鏵",
"镤": "鏷",
"镪": "鏹",
"铙": "鐃",
"铴": "鐋",
"镣": "鐐",
"铹": "鐒",
"镦": "鐓",
"镡": "鐔",
"镫": "鐙",
"镢": "鐝",
"镨": "鐠",
"锏": "鐧",
"镄": "鐨",
"镰": "鐮",
"镭": "鐳",
"镮": "鐶",
"铎": "鐸",
"铛": "鐺",
"镱": "鐿",
"铸": "鑄",
"镬": "鑊",
"镔": "鑌",
"镲": "鑔",
"锧": "鑕",
"镴": "鑞",
"铄": "鑠",
"镳": "鑣",
"镥": "鑥",
"镧": "鑭",
"镵": "鑱",
"镶": "鑲",
"镊": "鑷",
"镩": "鑹",
"锣": "鑼",
"鉅": "钜",
"锺": "鍾",
"长": "長",
"门": "門",
"闩": "閂",
"闪": "閃",
"闫": "閆",
"闬": "閈",
"闭": "閉",
"闶": "閌",
"闳": "閎",
"闰": "閏",
"闲": "閑",
"间": "間",
"闵": "閔",
"闹": "閙",
"阂": "閡",
"阁": "閣",
"阀": "閥",
"闺": "閨",
"闽": "閩",
"阃": "閫",
"阆": "閬",
"闾": "閭",
"阅": "閱",
"阊": "閶",
"阉": "閹",
"阎": "閻",
"阏": "閼",
"阍": "閽",
"阈": "閾",
"阌": "閿",
"阒": "闃",
"闱": "闈",
"阕": "闋",
"阑": "闌",
"阇": "闍",
"阗": "闐",
"阘": "闒",
"闿": "闓",
"阖": "闔",
"阙": "闕",
"闯": "闖",
"阚": "闞",
"阓": "闠",
"阐": "闡",
"阛": "闤",
"闼": "闥",
"阄": "鬮",
"阋": "鬩",
"队": "隊",
"阳": "陽",
"阴": "陰",
"阵": "陣",
"际": "際",
"陆": "陸",
"陇": "隴",
"陈": "陳",
"陉": "陘",
"陕": "陝",
"陧": "隉",
"陨": "隕",
"险": "險",
"随": "隨",
"隐": "隱",
"隶": "隸",
"隽": "雋",
"难": "難",
"雏": "雛",
"鸡": "雞",
"雳": "靂",
"雾": "霧",
"霁": "霽",
"霉": "黴",
"霭": "靄",
"靓": "靚",
"静": "靜",
"靥": "靨",
"韧": "靭",
"鼗": "鞀",
"鞑": "韃",
"鞒": "鞽",
"鞯": "韉",
"鞴": "韝",
"韦": "韋",
"韨": "韍",
"韩": "韓",
"韪": "韙",
"韬": "韜",
"韫": "韞",
"韵": "韻",
"页": "頁",
"顶": "頂",
"顷": "頃",
"项": "項",
"顺": "順",
"顸": "頇",
"须": "須",
"顼": "頊",
"颂": "頌",
"颀": "頎",
"颃": "頏",
"预": "預",
"顽": "頑",
"颁": "頒",
"顿": "頓",
"颇": "頗",
"领": "領",
"颌": "頜",
"颉": "頡",
"颐": "頤",
"颏": "頦",
"颒": "頮",
"颊": "頰",
"颋": "頲",
"颕": "頴",
"颔": "頷",
"颈": "頸",
"频": "頻",
"颗": "顆",
"题": "題",
"额": "額",
"颚": "顎",
"颜": "顏",
"颙": "顒",
"颛": "顓",
"颡": "顙",
"颠": "顛",
"颟": "顢",
"颢": "顥",
"顾": "顧",
"颤": "顫",
"颥": "顬",
"颦": "顰",
"颅": "顱",
"颞": "顳",
"颧": "顴",
"风": "風",
"飐": "颭",
"飑": "颮",
"飒": "颯",
"飓": "颶",
"飔": "颸",
"飖": "颻",
"飕": "颼",
"飗": "飀",
"飘": "飃",
"飙": "飆",
"飏": "颺",
"飚": "飆",
"飞": "飛",
"饥": "飢",
"饤": "飣",
"饦": "飥",
"飨": "饗",
"饨": "飩",
"饪": "飪",
"饫": "飫",
"饬": "飭",
"饭": "飯",
"饮": "飲",
"饴": "飴",
"饲": "飼",
"饱": "飽",
"饰": "飾",
"饳": "飿",
"饺": "餃",
"饸": "餄",
"饼": "餅",
"饷": "餉",
"饵": "餌",
"餍": "饜",
"饹": "餎",
"饻": "餏",
"饽": "餑",
"馁": "餒",
"饿": "餓",
"馂": "餕",
"饾": "餖",
"馄": "餛",
"馃": "餜",
"饯": "餞",
"馅": "餡",
"饧": "餳",
"馉": "餶",
"馇": "餷",
"馎": "餺",
"饩": "餼",
"馈": "餽",
"馏": "餾",
"馊": "餿",
"馌": "饁",
"馍": "饃",
"馒": "饅",
"馐": "饈",
"馑": "饉",
"馓": "饊",
"馔": "饌",
"饶": "饒",
"馋": "饞",
"馕": "饢",
"馀": "餘",
"马": "馬",
"驭": "馭",
"驮": "馱",
"驰": "馳",
"驯": "馴",
"驲": "馹",
"驳": "駁",
"驻": "駐",
"驽": "駑",
"驹": "駒",
"驵": "駔",
"驾": "駕",
"骀": "駘",
"驸": "駙",
"驶": "駛",
"驼": "駝",
"驷": "駟",
"骈": "駢",
"骇": "駭",
"骃": "駰",
"骆": "駱",
"骎": "駸",
"骏": "駿",
"骋": "騁",
"骍": "騂",
"骓": "騅",
"骔": "騌",
"骒": "騍",
"骑": "騎",
"骐": "騏",
"验": "騐",
"骛": "騖",
"骗": "騗",
"骙": "騤",
"骞": "騫",
"骘": "騭",
"骝": "騮",
"驺": "騶",
"骚": "騷",
"骟": "騸",
"骡": "騾",
"骜": "驁",
"骖": "驂",
"骠": "驃",
"骢": "驄",
"骅": "驊",
"骕": "驌",
"骁": "驍",
"骣": "驏",
"骄": "驕",
"驿": "驛",
"骤": "驟",
"驴": "驢",
"骧": "驤",
"骥": "驥",
"骦": "驦",
"骊": "驪",
"骉": "驫",
"鲠": "骾",
"髅": "髏",
"髋": "髖",
"髌": "髕",
"鬓": "髩",
"魇": "魘",
"魉": "魎",
"鱼": "魚",
"鱽": "魛",
"鱾": "魢",
"鲀": "魨",
"鲁": "魯",
"鲂": "魴",
"鱿": "魷",
"鲄": "魺",
"鲅": "鮁",
"鲆": "鮃",
"鲌": "鮊",
"鲉": "鮋",
"鲧": "鮌",
"鲏": "鮍",
"鲇": "鮎",
"鲐": "鮐",
"鲍": "鮑",
"鲋": "鮒",
"鲊": "鮓",
"鲒": "鮚",
"鲘": "鮜",
"鲕": "鮞",
"鲖": "鮦",
"鲔": "鮪",
"鲛": "鮫",
"鲑": "鮭",
"鲜": "鮮",
"鲓": "鮳",
"鲪": "鮶",
"鳀": "鮷",
"鲝": "鮺",
"鲩": "鯇",
"鲤": "鯉",
"鲨": "鯊",
"鲬": "鯒",
"鲻": "鯔",
"鲯": "鯕",
"鲭": "鯖",
"鲞": "鯗",
"鲷": "鯛",
"鲴": "鯝",
"鲱": "鯡",
"鲵": "鯢",
"鲲": "鯤",
"鲳": "鯧",
"鲸": "鯨",
"鲮": "鯪",
"鲰": "鯫",
"鲶": "鯰",
"鲺": "鯴",
"鲹": "鯵",
"鲫": "鯽",
"鳊": "鯿",
"鳈": "鰁",
"鲗": "鰂",
"鳂": "鰃",
"鲽": "鰈",
"鳇": "鰉",
"鳅": "鰌",
"鲾": "鰏",
"鳄": "鰐",
"鳆": "鰒",
"鳃": "鰓",
"鳁": "鰛",
"鳒": "鰜",
"鳑": "鰟",
"鳋": "鰠",
"鲥": "鰣",
"鳏": "鰥",
"鳎": "鰨",
"鳐": "鰩",
"鳍": "鰭",
"鲢": "鰱",
"鳌": "鰲",
"鳓": "鰳",
"鳘": "鰵",
"鲦": "鰷",
"鲣": "鰹",
"鳗": "鰻",
"鳛": "鰼",
"鳔": "鰾",
"鳉": "鱂",
"鳙": "鱅",
"鳕": "鱈",
"鳖": "鱉",
"鳟": "鱒",
"鳝": "鱓",
"鳜": "鱖",
"鳞": "鱗",
"鲟": "鱘",
"鲼": "鱝",
"鲎": "鱟",
"鲙": "鱠",
"鳣": "鱣",
"鳡": "鱤",
"鳢": "鱧",
"鲿": "鱨",
"鲚": "鱭",
"鳠": "鱯",
"鲈": "鱸",
"鲡": "鱺",
"鸟": "鳥",
"鸠": "鳩",
"鸤": "鳲",
"鸣": "鳴",
"鸢": "鳶",
"鸩": "鴆",
"鸨": "鴇",
"鸦": "鴉",
"鸰": "鴒",
"鸵": "鴕",
"鸳": "鴛",
"鸲": "鴝",
"鸮": "鴞",
"鸱": "鴟",
"鸪": "鴣",
"鸯": "鴦",
"鸭": "鴨",
"鸴": "鴬",
"鸸": "鴯",
"鸹": "鴰",
"鸻": "鴴",
"鸿": "鴻",
"鸽": "鴿",
"鸺": "鵂",
"鸼": "鵃",
"鹀": "鵐",
"鹃": "鵑",
"鹆": "鵒",
"鹁": "鵓",
"鹈": "鵜",
"鹅": "鵝",
"鹄": "鵠",
"鹉": "鵡",
"鹌": "鵪",
"鹏": "鵬",
"鹐": "鵮",
"鹎": "鵯",
"鹊": "鵲",
"鹓": "鵷",
"鹍": "鵾",
"鸫": "鶇",
"鹑": "鶉",
"鹒": "鶊",
"鹋": "鶓",
"鹙": "鶖",
"鹕": "鶘",
"鹗": "鶚",
"鹖": "鶡",
"鹛": "鶥",
"鹜": "鶩",
"鸧": "鶬",
"鹟": "鶲",
"鹤": "鶴",
"鹠": "鶹",
"鹡": "鶺",
"鹘": "鶻",
"鹣": "鶼",
"鹚": "鶿",
"鹢": "鷁",
"鹞": "鷂",
"鹝": "鷊",
"鹧": "鷓",
"鹥": "鷖",
"鸥": "鷗",
"鸷": "鷙",
"鹨": "鷚",
"鸶": "鷥",
"鹪": "鷦",
"鹔": "鷫",
"鹩": "鷯",
"鹫": "鷲",
"鹇": "鷳",
"鹬": "鷸",
"鹰": "鷹",
"鹭": "鷺",
"鹯": "鸇",
"鹱": "鸌",
"鹲": "鸏",
"鸬": "鸕",
"鹴": "鸘",
"鹦": "鸚",
"鹳": "鸛",
"鹂": "鸝",
"鸾": "鸞",
"鹾": "鹺",
"麦": "麥",
"麸": "麩",
"黄": "黃",
"黉": "黌",
"黡": "黶",
"黩": "黷",
"黪": "黲",
"黾": "黽",
"鼋": "黿",
"鼌": "鼂",
"鼍": "鼉",
"鼹": "鼴",
"齄": "齇",
"齐": "齊",
"齑": "齏",
"齿": "齒",
"龀": "齔",
"龁": "齕",
"龂": "齗",
"龅": "齙",
"龇": "齜",
"龃": "齟",
"龆": "齠",
"龄": "齡",
"龈": "齦",
"龊": "齪",
"龉": "齬",
"龋": "齲",
"龌": "齷",
"龙": "龍",
"龚": "龔",
"龛": "龕",
"龟": "龜"
};
}, function(e, t) {
e.exports = {
"萬": "万",
"與": "与",
"醜": "丑",
"專": "专",
"業": "业",
"叢": "丛",
"東": "东",
"絲": "丝",
"丟": "丢",
"兩": "两",
"嚴": "严",
"並": "并",
"喪": "丧",
"個": "个",
"爿": "丬",
"豐": "丰",
"臨": "临",
"為": "为",
"麗": "丽",
"舉": "举",
"麼": "么",
"義": "义",
"烏": "乌",
"樂": "乐",
"喬": "乔",
"習": "习",
"鄉": "乡",
"書": "书",
"買": "买",
"亂": "乱",
"乾": "干",
"爭": "争",
"於": "于",
"虧": "亏",
"雲": "云",
"亙": "亘",
"亞": "亚",
"產": "产",
"畝": "亩",
"親": "亲",
"褻": "亵",
"嚲": "亸",
"億": "亿",
"僅": "仅",
"僕": "仆",
"從": "从",
"侖": "仑",
"倉": "仓",
"儀": "仪",
"們": "们",
"價": "价",
"伕": "夫",
"眾": "众",
"優": "优",
"夥": "伙",
"會": "会",
"傴": "伛",
"傘": "伞",
"偉": "伟",
"傳": "传",
"傷": "伤",
"倀": "伥",
"倫": "伦",
"傖": "伧",
"偽": "伪",
"佇": "伫",
"佈": "布",
"體": "体",
"佔": "占",
"佘": "畲",
"餘": "余",
"傭": "佣",
"僉": "佥",
"併": "并",
"來": "来",
"俠": "侠",
"侶": "侣",
"僥": "侥",
"偵": "侦",
"側": "侧",
"僑": "侨",
"儈": "侩",
"儕": "侪",
"儂": "侬",
"侷": "局",
"俁": "俣",
"係": "系",
"儔": "俦",
"儼": "俨",
"倆": "俩",
"儷": "俪",
"儉": "俭",
"倖": "幸",
"倣": "仿",
"債": "债",
"傾": "倾",
"傯": "偬",
"偸": "偷",
"偺": "咱",
"僂": "偻",
"僨": "偾",
"償": "偿",
"傑": "杰",
"備": "备",
"傚": "效",
"傢": "家",
"儻": "傥",
"儐": "傧",
"儲": "储",
"儺": "傩",
"僞": "伪",
"僱": "雇",
"儅": "当",
"儘": "尽",
"儸": "罗",
"儹": "攒",
"兒": "儿",
"兇": "凶",
"兌": "兑",
"兗": "兖",
"黨": "党",
"內": "内",
"蘭": "兰",
"關": "关",
"興": "兴",
"茲": "兹",
"養": "养",
"獸": "兽",
"囅": "冁",
"岡": "冈",
"冊": "册",
"寫": "写",
"軍": "军",
"農": "农",
"塚": "冢",
"冪": "幂",
"馮": "冯",
"沖": "冲",
"決": "决",
"況": "况",
"凍": "冻",
"淨": "净",
"凃": "涂",
"淒": "凄",
"涼": "凉",
"淩": "凌",
"減": "减",
"湊": "凑",
"凜": "凛",
"凟": "渎",
"幾": "几",
"鳳": "凤",
"処": "处",
"鳧": "凫",
"憑": "凭",
"凱": "凯",
"凴": "凭",
"擊": "击",
"氹": "凼",
"鑿": "凿",
"芻": "刍",
"劃": "划",
"劉": "刘",
"則": "则",
"剛": "刚",
"創": "创",
"刪": "删",
"別": "别",
"剗": "刬",
"剄": "刭",
"劊": "刽",
"劌": "刿",
"剴": "剀",
"劑": "剂",
"剋": "克",
"剮": "剐",
"劍": "剑",
"剝": "剥",
"劇": "剧",
"剷": "铲",
"劄": "札",
"劒": "剑",
"勸": "劝",
"辦": "办",
"務": "务",
"勱": "劢",
"動": "动",
"勵": "励",
"勁": "劲",
"勞": "劳",
"勢": "势",
"勳": "勋",
"勗": "勖",
"勩": "勚",
"勛": "勋",
"勝": "胜",
"勣": "绩",
"勦": "剿",
"勻": "匀",
"匭": "匦",
"匱": "匮",
"匯": "汇",
"匲": "奁",
"匳": "奁",
"匵": "椟",
"區": "区",
"醫": "医",
"華": "华",
"協": "协",
"單": "单",
"賣": "卖",
"蔔": "卜",
"盧": "卢",
"鹵": "卤",
"臥": "卧",
"衛": "卫",
"卻": "却",
"卹": "恤",
"巹": "卺",
"廠": "厂",
"廳": "厅",
"曆": "历",
"厲": "厉",
"壓": "压",
"厭": "厌",
"厙": "厍",
"廁": "厕",
"厛": "厅",
"厠": "厕",
"廂": "厢",
"厴": "厣",
"厤": "历",
"廈": "厦",
"廚": "厨",
"廄": "厩",
"廝": "厮",
"厰": "厂",
"縣": "县",
"參": "参",
"靉": "叆",
"靆": "叇",
"雙": "双",
"發": "发",
"變": "变",
"敘": "叙",
"疊": "叠",
"葉": "叶",
"號": "号",
"歎": "叹",
"嘰": "叽",
"籲": "吁",
"吒": "咤",
"嚇": "吓",
"呂": "吕",
"嗎": "吗",
"唚": "吣",
"噸": "吨",
"聽": "听",
"啟": "启",
"吳": "吴",
"嘸": "呒",
"囈": "呓",
"嘔": "呕",
"嚦": "呖",
"唄": "呗",
"員": "员",
"咼": "呙",
"嗆": "呛",
"嗚": "呜",
"詠": "咏",
"哢": "咔",
"嚨": "咙",
"嚀": "咛",
"噝": "咝",
"諮": "咨",
"噅": "咴",
"鹹": "咸",
"響": "响",
"啞": "哑",
"噠": "哒",
"嘵": "哓",
"嗶": "哔",
"噦": "哕",
"嘩": "哗",
"噲": "哙",
"嚌": "哜",
"噥": "哝",
"喲": "哟",
"唕": "唣",
"嘜": "唛",
"嗊": "唝",
"嘮": "唠",
"啢": "唡",
"嗩": "唢",
"喚": "唤",
"唸": "念",
"問": "问",
"啓": "启",
"啗": "啖",
"啣": "衔",
"嘖": "啧",
"嗇": "啬",
"囀": "啭",
"齧": "啮",
"囉": "啰",
"嘽": "啴",
"嘯": "啸",
"喒": "咱",
"喦": "岩",
"喫": "吃",
"噴": "喷",
"嘍": "喽",
"嚳": "喾",
"囁": "嗫",
"噯": "嗳",
"嘆": "叹",
"嘗": "尝",
"噓": "嘘",
"嚶": "嘤",
"囑": "嘱",
"噁": "恶",
"嚕": "噜",
"噹": "当",
"嚐": "尝",
"嚙": "啮",
"囂": "嚣",
"嚥": "咽",
"嚮": "向",
"謔": "嚯",
"嚻": "嚣",
"囌": "苏",
"囘": "回",
"團": "团",
"囪": "囱",
"囬": "回",
"園": "园",
"囯": "国",
"圍": "围",
"圇": "囵",
"國": "国",
"圖": "图",
"圓": "圆",
"聖": "圣",
"壙": "圹",
"場": "场",
"壞": "坏",
"塊": "块",
"堅": "坚",
"壇": "坛",
"壢": "坜",
"壩": "坝",
"塢": "坞",
"墳": "坟",
"墜": "坠",
"坰": "垧",
"壟": "垄",
"壚": "垆",
"壘": "垒",
"墾": "垦",
"堊": "垩",
"墊": "垫",
"埡": "垭",
"墶": "垯",
"壋": "垱",
"塏": "垲",
"堖": "垴",
"垵": "埯",
"垻": "坝",
"塒": "埘",
"塤": "埙",
"堝": "埚",
"埰": "采",
"執": "执",
"塹": "堑",
"墮": "堕",
"堦": "阶",
"堯": "尧",
"報": "报",
"堿": "碱",
"壪": "塆",
"塋": "茔",
"塗": "涂",
"塲": "场",
"塵": "尘",
"塼": "砖",
"牆": "墙",
"墝": "硗",
"墰": "坛",
"墻": "墙",
"壎": "埙",
"壜": "坛",
"壠": "垄",
"壯": "壮",
"聲": "声",
"殼": "壳",
"壺": "壶",
"壼": "壸",
"壽": "寿",
"夀": "寿",
"處": "处",
"複": "复",
"夠": "够",
"夢": "梦",
"頭": "头",
"誇": "夸",
"夾": "夹",
"奪": "夺",
"奩": "奁",
"奐": "奂",
"奮": "奋",
"獎": "奖",
"奧": "奥",
"妝": "妆",
"婦": "妇",
"媽": "妈",
"嫵": "妩",
"嫗": "妪",
"媯": "妫",
"姍": "姗",
"薑": "姜",
"姦": "奸",
"姪": "侄",
"婁": "娄",
"婭": "娅",
"嬈": "娆",
"嬌": "娇",
"孌": "娈",
"娛": "娱",
"娬": "妩",
"媧": "娲",
"嫻": "娴",
"婬": "淫",
"嫿": "婳",
"嬰": "婴",
"嬋": "婵",
"嬸": "婶",
"媼": "媪",
"媮": "偷",
"嫋": "袅",
"嬡": "嫒",
"嬪": "嫔",
"嬙": "嫱",
"嫺": "娴",
"嬀": "妫",
"嬝": "袅",
"嬤": "嬷",
"嬭": "奶",
"嬾": "懒",
"孃": "娘",
"孫": "孙",
"學": "学",
"孿": "孪",
"寧": "宁",
"寶": "宝",
"實": "实",
"寵": "宠",
"審": "审",
"憲": "宪",
"宮": "宫",
"寬": "宽",
"賓": "宾",
"寢": "寝",
"對": "对",
"尋": "寻",
"導": "导",
"尅": "克",
"將": "将",
"爾": "尔",
"尲": "尴",
"尷": "尴",
"屍": "尸",
"盡": "尽",
"層": "层",
"屭": "屃",
"屆": "届",
"屜": "屉",
"屓": "屃",
"屬": "属",
"屢": "屡",
"屨": "屦",
"嶼": "屿",
"歲": "岁",
"豈": "岂",
"嶇": "岖",
"崗": "岗",
"峴": "岘",
"嶴": "岙",
"嵐": "岚",
"島": "岛",
"嶺": "岭",
"嶽": "岳",
"崠": "岽",
"巋": "岿",
"嶨": "峃",
"嶧": "峄",
"峽": "峡",
"嶢": "峣",
"嶠": "峤",
"崢": "峥",
"巒": "峦",
"嶗": "崂",
"崍": "崃",
"嶮": "崄",
"崐": "昆",
"崑": "昆",
"崙": "仑",
"崬": "岽",
"嶄": "崭",
"崳": "嵛",
"嵗": "岁",
"嶸": "嵘",
"嶔": "嵚",
"嶁": "嵝",
"巔": "巅",
"巖": "岩",
"鞏": "巩",
"巰": "巯",
"幣": "币",
"帥": "帅",
"師": "师",
"幃": "帏",
"帳": "帐",
"簾": "帘",
"幟": "帜",
"帶": "带",
"幀": "帧",
"幫": "帮",
"幬": "帱",
"幘": "帻",
"幗": "帼",
"襆": "幞",
"幱": "襕",
"幹": "干",
"廣": "广",
"莊": "庄",
"慶": "庆",
"廬": "庐",
"廡": "庑",
"庫": "库",
"應": "应",
"廟": "庙",
"龐": "庞",
"廢": "废",
"廎": "庼",
"廕": "荫",
"廩": "廪",
"廻": "回",
"廼": "乃",
"開": "开",
"異": "异",
"棄": "弃",
"弔": "吊",
"張": "张",
"彌": "弥",
"弳": "弪",
"彎": "弯",
"強": "强",
"彈": "弹",
"彆": "别",
"彊": "强",
"歸": "归",
"當": "当",
"錄": "录",
"彙": "汇",
"彜": "彝",
"彞": "彝",
"彠": "彟",
"彥": "彦",
"彫": "雕",
"徹": "彻",
"彿": "佛",
"徑": "径",
"徠": "徕",
"禦": "御",
"復": "复",
"徬": "彷",
"徴": "征",
"徵": "征",
"憶": "忆",
"懺": "忏",
"憂": "忧",
"愾": "忾",
"懷": "怀",
"態": "态",
"慫": "怂",
"憮": "怃",
"慪": "怄",
"悵": "怅",
"愴": "怆",
"憐": "怜",
"總": "总",
"懟": "怼",
"懌": "怿",
"恆": "恒",
"戀": "恋",
"恥": "耻",
"懇": "恳",
"惡": "恶",
"慟": "恸",
"懨": "恹",
"愷": "恺",
"惻": "恻",
"惱": "恼",
"惲": "恽",
"悅": "悦",
"愨": "悫",
"懸": "悬",
"慳": "悭",
"憫": "悯",
"悶": "闷",
"悽": "凄",
"驚": "惊",
"懼": "惧",
"慘": "惨",
"懲": "惩",
"憊": "惫",
"愜": "惬",
"慚": "惭",
"憚": "惮",
"慣": "惯",
"湣": "愍",
"愛": "爱",
"慍": "愠",
"憤": "愤",
"憒": "愦",
"願": "愿",
"慄": "栗",
"慇": "殷",
"懾": "慑",
"慙": "惭",
"慤": "悫",
"憖": "慭",
"慮": "虑",
"慴": "慑",
"慼": "戚",
"慾": "欲",
"懍": "懔",
"懣": "懑",
"懶": "懒",
"懕": "恹",
"懞": "蒙",
"懽": "欢",
"戇": "戆",
"戔": "戋",
"戲": "戏",
"戧": "戗",
"戰": "战",
"戩": "戬",
"戯": "戏",
"戶": "户",
"紮": "扎",
"撲": "扑",
"扡": "扦",
"擴": "扩",
"捫": "扪",
"掃": "扫",
"揚": "扬",
"擾": "扰",
"撫": "抚",
"拋": "抛",
"摶": "抟",
"摳": "抠",
"掄": "抡",
"搶": "抢",
"護": "护",
"擔": "担",
"擬": "拟",
"攏": "拢",
"揀": "拣",
"擁": "拥",
"攔": "拦",
"擰": "拧",
"撥": "拨",
"擇": "择",
"掛": "挂",
"摯": "挚",
"攣": "挛",
"掗": "挜",
"撾": "挝",
"撻": "挞",
"挾": "挟",
"撓": "挠",
"擋": "挡",
"撟": "挢",
"掙": "挣",
"擠": "挤",
"揮": "挥",
"撏": "挦",
"撈": "捞",
"損": "损",
"撿": "捡",
"換": "换",
"搗": "捣",
"捨": "舍",
"據": "据",
"捲": "卷",
"撚": "捻",
"採": "采",
"擄": "掳",
"摑": "掴",
"擲": "掷",
"撣": "掸",
"摻": "掺",
"摜": "掼",
"摣": "揸",
"揹": "背",
"攬": "揽",
"撳": "揿",
"攙": "搀",
"擱": "搁",
"摟": "搂",
"攪": "搅",
"搆": "构",
"搇": "揿",
"搖": "摇",
"攜": "携",
"搾": "榨",
"攝": "摄",
"攄": "摅",
"擺": "摆",
"擯": "摈",
"攤": "摊",
"摺": "折",
"攖": "撄",
"撐": "撑",
"攆": "撵",
"擷": "撷",
"擼": "撸",
"攛": "撺",
"擕": "携",
"擻": "擞",
"擡": "抬",
"擣": "捣",
"擧": "举",
"攢": "攒",
"攩": "挡",
"攷": "考",
"敵": "敌",
"敍": "叙",
"敗": "败",
"斂": "敛",
"敭": "扬",
"數": "数",
"敺": "驱",
"斃": "毙",
"齋": "斋",
"斕": "斓",
"鬥": "斗",
"斬": "斩",
"斷": "断",
"旂": "旗",
"無": "无",
"舊": "旧",
"時": "时",
"曠": "旷",
"暘": "旸",
"昇": "升",
"曇": "昙",
"晝": "昼",
"曨": "昽",
"顯": "显",
"晉": "晋",
"曬": "晒",
"曉": "晓",
"曄": "晔",
"暈": "晕",
"暉": "晖",
"暫": "暂",
"暢": "畅",
"曖": "暧",
"暱": "昵",
"曏": "向",
"曡": "叠",
"朧": "胧",
"術": "术",
"樸": "朴",
"機": "机",
"殺": "杀",
"雜": "杂",
"權": "权",
"條": "条",
"楊": "杨",
"榪": "杩",
"極": "极",
"構": "构",
"樅": "枞",
"樞": "枢",
"棗": "枣",
"櫪": "枥",
"梘": "枧",
"棖": "枨",
"槍": "枪",
"楓": "枫",
"梟": "枭",
"枴": "拐",
"櫃": "柜",
"檸": "柠",
"柵": "栅",
"柺": "拐",
"檉": "柽",
"梔": "栀",
"標": "标",
"棧": "栈",
"櫛": "栉",
"櫳": "栊",
"棟": "栋",
"櫨": "栌",
"櫟": "栎",
"欄": "栏",
"樹": "树",
"棲": "栖",
"樣": "样",
"欒": "栾",
"棬": "桊",
"椏": "桠",
"橈": "桡",
"楨": "桢",
"榿": "桤",
"橋": "桥",
"樺": "桦",
"檜": "桧",
"槳": "桨",
"樁": "桩",
"桿": "杆",
"梱": "捆",
"檮": "梼",
"棶": "梾",
"檢": "检",
"欞": "棂",
"槨": "椁",
"櫝": "椟",
"槧": "椠",
"欏": "椤",
"橢": "椭",
"樓": "楼",
"欖": "榄",
"櫬": "榇",
"櫚": "榈",
"櫸": "榉",
"榦": "干",
"榮": "荣",
"槃": "盘",
"槓": "杠",
"檟": "槚",
"檻": "槛",
"檳": "槟",
"櫧": "槠",
"槼": "规",
"樑": "梁",
"橫": "横",
"檣": "樯",
"櫻": "樱",
"樷": "丛",
"櫫": "橥",
"橰": "槔",
"櫥": "橱",
"櫓": "橹",
"櫞": "橼",
"檁": "檩",
"簷": "檐",
"檯": "台",
"檾": "苘",
"櫂": "棹",
"櫺": "棂",
"欑": "攒",
"歡": "欢",
"歟": "欤",
"歐": "欧",
"欽": "钦",
"歗": "啸",
"歛": "敛",
"歷": "历",
"殲": "歼",
"歿": "殁",
"殤": "殇",
"殘": "残",
"殞": "殒",
"殮": "殓",
"殫": "殚",
"殯": "殡",
"毆": "殴",
"毀": "毁",
"轂": "毂",
"毉": "医",
"畢": "毕",
"氈": "毡",
"毧": "绒",
"毬": "球",
"毿": "毵",
"氂": "牦",
"氌": "氇",
"氊": "毡",
"氣": "气",
"氫": "氢",
"氬": "氩",
"氳": "氲",
"氾": "泛",
"漢": "汉",
"汎": "泛",
"汙": "污",
"汚": "污",
"湯": "汤",
"洶": "汹",
"沍": "冱",
"沒": "没",
"遝": "沓",
"溝": "沟",
"灃": "沣",
"漚": "沤",
"瀝": "沥",
"淪": "沦",
"滄": "沧",
"渢": "沨",
"溈": "沩",
"滬": "沪",
"濔": "沵",
"濘": "泞",
"淚": "泪",
"澩": "泶",
"瀧": "泷",
"瀘": "泸",
"濼": "泺",
"瀉": "泻",
"潑": "泼",
"澤": "泽",
"涇": "泾",
"潔": "洁",
"灑": "洒",
"洩": "泄",
"窪": "洼",
"浹": "浃",
"淺": "浅",
"漿": "浆",
"澆": "浇",
"湞": "浈",
"溮": "浉",
"濁": "浊",
"測": "测",
"澮": "浍",
"濟": "济",
"瀏": "浏",
"滻": "浐",
"渾": "浑",
"滸": "浒",
"濃": "浓",
"潯": "浔",
"濜": "浕",
"湧": "涌",
"涖": "莅",
"濤": "涛",
"澇": "涝",
"淶": "涞",
"漣": "涟",
"潿": "涠",
"渦": "涡",
"溳": "涢",
"渙": "涣",
"滌": "涤",
"潤": "润",
"澗": "涧",
"漲": "涨",
"澀": "涩",
"澱": "淀",
"淥": "渌",
"淵": "渊",
"漬": "渍",
"瀆": "渎",
"漸": "渐",
"澠": "渑",
"漁": "渔",
"瀋": "渖",
"滲": "渗",
"溫": "温",
"遊": "游",
"灣": "湾",
"濕": "湿",
"潰": "溃",
"濺": "溅",
"漵": "溆",
"漊": "溇",
"準": "准",
"溼": "湿",
"滅": "灭",
"滎": "荥",
"潷": "滗",
"滙": "汇",
"滾": "滚",
"滯": "滞",
"灩": "滟",
"灄": "滠",
"滿": "满",
"瀅": "滢",
"濾": "滤",
"濫": "滥",
"灤": "滦",
"濱": "滨",
"灘": "滩",
"澦": "滪",
"滷": "卤",
"潁": "颍",
"瀠": "潆",
"瀟": "潇",
"瀲": "潋",
"濰": "潍",
"潙": "沩",
"潛": "潜",
"潟": "舄",
"瀦": "潴",
"澁": "涩",
"澂": "澄",
"瀾": "澜",
"瀨": "濑",
"瀕": "濒",
"濛": "蒙",
"濬": "浚",
"濶": "阔",
"瀰": "弥",
"灝": "灏",
"灕": "漓",
"灧": "滟",
"燈": "灯",
"靈": "灵",
"災": "灾",
"燦": "灿",
"煬": "炀",
"爐": "炉",
"燉": "炖",
"煒": "炜",
"熗": "炝",
"炤": "照",
"點": "点",
"煉": "炼",
"熾": "炽",
"爍": "烁",
"爛": "烂",
"烴": "烃",
"燭": "烛",
"煙": "烟",
"煩": "烦",
"燒": "烧",
"燁": "烨",
"燴": "烩",
"燙": "烫",
"燼": "烬",
"熱": "热",
"煥": "焕",
"燜": "焖",
"燾": "焘",
"煆": "煅",
"煇": "辉",
"煖": "暖",
"煢": "茕",
"熒": "荧",
"熲": "颎",
"燄": "焰",
"燐": "磷",
"營": "营",
"燬": "毁",
"燻": "熏",
"燿": "耀",
"爗": "烨",
"爲": "为",
"爺": "爷",
"牀": "床",
"牋": "笺",
"牘": "牍",
"牐": "闸",
"犛": "牦",
"牴": "抵",
"牽": "牵",
"犧": "牺",
"犢": "犊",
"犖": "荦",
"狀": "状",
"獷": "犷",
"獁": "犸",
"猶": "犹",
"狽": "狈",
"麅": "狍",
"獮": "狝",
"獰": "狞",
"獨": "独",
"狹": "狭",
"獅": "狮",
"獪": "狯",
"猙": "狰",
"獄": "狱",
"猻": "狲",
"獫": "猃",
"獵": "猎",
"獼": "猕",
"玀": "猡",
"豬": "猪",
"貓": "猫",
"蝟": "猬",
"獻": "献",
"獃": "呆",
"獺": "獭",
"獲": "获",
"玆": "兹",
"璣": "玑",
"璵": "玙",
"瑒": "玚",
"瑪": "玛",
"玨": "珏",
"瑋": "玮",
"環": "环",
"現": "现",
"瑲": "玱",
"璽": "玺",
"瑉": "珉",
"琺": "珐",
"瓏": "珑",
"珮": "佩",
"璫": "珰",
"琿": "珲",
"琍": "璃",
"璡": "琎",
"璉": "琏",
"瑣": "琐",
"琯": "管",
"瓊": "琼",
"瑤": "瑶",
"瑩": "莹",
"瑯": "琅",
"璦": "瑷",
"璿": "璇",
"瓔": "璎",
"瓚": "瓒",
"甕": "瓮",
"甌": "瓯",
"甎": "砖",
"甖": "罂",
"産": "产",
"甦": "苏",
"甯": "宁",
"電": "电",
"畫": "画",
"畱": "留",
"疇": "畴",
"癤": "疖",
"療": "疗",
"瘧": "疟",
"癘": "疠",
"瘍": "疡",
"鬁": "疬",
"瘡": "疮",
"瘋": "疯",
"皰": "疱",
"癰": "痈",
"痙": "痉",
"癢": "痒",
"瘂": "痖",
"痠": "酸",
"癆": "痨",
"瘓": "痪",
"癇": "痫",
"癡": "痴",
"痺": "痹",
"癉": "瘅",
"瘮": "瘆",
"瘉": "愈",
"瘞": "瘗",
"瘺": "瘘",
"癟": "瘪",
"癱": "瘫",
"瘻": "瘘",
"癮": "瘾",
"癭": "瘿",
"癒": "愈",
"癩": "癞",
"癬": "癣",
"癥": "症",
"癧": "疬",
"癲": "癫",
"臒": "癯",
"皚": "皑",
"皺": "皱",
"皸": "皲",
"盃": "杯",
"盞": "盏",
"鹽": "盐",
"監": "监",
"蓋": "盖",
"盜": "盗",
"盤": "盘",
"盪": "荡",
"瞘": "眍",
"眎": "视",
"眡": "视",
"眥": "眦",
"矓": "眬",
"著": "着",
"睜": "睁",
"睏": "困",
"睞": "睐",
"瞼": "睑",
"瞞": "瞒",
"矚": "瞩",
"矇": "蒙",
"矯": "矫",
"磯": "矶",
"矽": "硅",
"礬": "矾",
"礦": "矿",
"碭": "砀",
"碼": "码",
"磚": "砖",
"硨": "砗",
"硯": "砚",
"碸": "砜",
"砲": "炮",
"礪": "砺",
"礱": "砻",
"礫": "砾",
"礎": "础",
"硜": "硁",
"硃": "朱",
"碩": "硕",
"硤": "硖",
"磽": "硗",
"磑": "硙",
"礄": "硚",
"確": "确",
"硶": "碜",
"鹼": "硷",
"礙": "碍",
"磧": "碛",
"磣": "碜",
"镟": "碹",
"磐": "盘",
"礮": "炮",
"禮": "礼",
"禕": "祎",
"祐": "佑",
"祕": "秘",
"禰": "祢",
"禎": "祯",
"禱": "祷",
"禍": "祸",
"祿": "禄",
"稟": "禀",
"禪": "禅",
"離": "离",
"禿": "秃",
"稈": "秆",
"秈": "籼",
"種": "种",
"積": "积",
"稱": "称",
"穢": "秽",
"穠": "秾",
"稅": "税",
"穭": "稆",
"稜": "棱",
"穌": "稣",
"稭": "秸",
"穩": "稳",
"穀": "谷",
"穎": "颖",
"穡": "穑",
"穨": "颓",
"穫": "获",
"窮": "穷",
"竊": "窃",
"竅": "窍",
"窯": "窑",
"竄": "窜",
"窩": "窝",
"窺": "窥",
"竇": "窦",
"窶": "窭",
"窰": "窑",
"竈": "灶",
"豎": "竖",
"竝": "并",
"競": "竞",
"竪": "竖",
"篤": "笃",
"筍": "笋",
"筆": "笔",
"筧": "笕",
"箋": "笺",
"籠": "笼",
"籩": "笾",
"築": "筑",
"篳": "筚",
"篩": "筛",
"簹": "筜",
"箏": "筝",
"籌": "筹",
"簽": "签",
"簡": "简",
"箇": "个",
"籙": "箓",
"箠": "棰",
"簀": "箦",
"篋": "箧",
"籜": "箨",
"籮": "箩",
"簞": "箪",
"簫": "箫",
"節": "节",
"範": "范",
"簣": "篑",
"簍": "篓",
"篛": "箬",
"篠": "筱",
"籃": "篮",
"籬": "篱",
"簑": "蓑",
"籪": "簖",
"籟": "籁",
"籐": "藤",
"籢": "奁",
"籤": "签",
"籥": "钥",
"糴": "籴",
"類": "类",
"糶": "粜",
"糲": "粝",
"粵": "粤",
"粧": "妆",
"糞": "粪",
"粬": "曲",
"糧": "粮",
"糝": "糁",
"餱": "糇",
"糢": "模",
"糰": "团",
"糸": "纟",
"糾": "纠",
"紀": "纪",
"紂": "纣",
"約": "约",
"紅": "红",
"紆": "纡",
"紇": "纥",
"紈": "纨",
"紉": "纫",
"紋": "纹",
"納": "纳",
"紐": "纽",
"紓": "纾",
"純": "纯",
"紕": "纰",
"紖": "纼",
"紗": "纱",
"紘": "纮",
"紙": "纸",
"級": "级",
"紛": "纷",
"紜": "纭",
"紝": "纴",
"紡": "纺",
"紥": "扎",
"緊": "紧",
"細": "细",
"紱": "绂",
"紲": "绁",
"紳": "绅",
"紵": "纻",
"紹": "绍",
"紺": "绀",
"紼": "绋",
"紿": "绐",
"絀": "绌",
"終": "终",
"絃": "弦",
"組": "组",
"絆": "绊",
"絍": "纴",
"絎": "绗",
"絏": "绁",
"結": "结",
"絕": "绝",
"絛": "绦",
"絝": "绔",
"絞": "绞",
"絡": "络",
"絢": "绚",
"給": "给",
"絨": "绒",
"絰": "绖",
"統": "统",
"絳": "绛",
"縶": "絷",
"絹": "绢",
"綁": "绑",
"綃": "绡",
"綆": "绠",
"綈": "绨",
"綉": "绣",
"綌": "绤",
"綏": "绥",
"綑": "捆",
"經": "经",
"綜": "综",
"綞": "缍",
"綠": "绿",
"綢": "绸",
"綣": "绻",
"綫": "线",
"綬": "绶",
"維": "维",
"綯": "绹",
"綰": "绾",
"綱": "纲",
"網": "网",
"綳": "绷",
"綴": "缀",
"綵": "彩",
"綸": "纶",
"綹": "绺",
"綺": "绮",
"綻": "绽",
"綽": "绰",
"綾": "绫",
"綿": "绵",
"緄": "绲",
"緇": "缁",
"緋": "绯",
"緍": "缗",
"緒": "绪",
"緓": "绬",
"緔": "绱",
"緗": "缃",
"緘": "缄",
"緙": "缂",
"線": "线",
"緜": "绵",
"緝": "缉",
"緞": "缎",
"締": "缔",
"緡": "缗",
"緣": "缘",
"緤": "绁",
"緦": "缌",
"編": "编",
"緩": "缓",
"緬": "缅",
"緯": "纬",
"緱": "缑",
"緲": "缈",
"練": "练",
"緶": "缏",
"緹": "缇",
"緻": "致",
"緼": "缊",
"縂": "总",
"縈": "萦",
"縉": "缙",
"縊": "缢",
"縋": "缒",
"縐": "绉",
"縑": "缣",
"縕": "缊",
"縗": "缞",
"縚": "绦",
"縛": "缚",
"縝": "缜",
"縞": "缟",
"縟": "缛",
"縧": "绦",
"縫": "缝",
"縭": "缡",
"縮": "缩",
"縯": "演",
"縱": "纵",
"縲": "缧",
"縴": "纤",
"縵": "缦",
"縷": "缕",
"縹": "缥",
"績": "绩",
"繃": "绷",
"繅": "缫",
"繆": "缪",
"繈": "襁",
"繒": "缯",
"織": "织",
"繕": "缮",
"繖": "伞",
"繙": "翻",
"繚": "缭",
"繞": "绕",
"繡": "绣",
"繢": "缋",
"繦": "襁",
"繩": "绳",
"繪": "绘",
"繫": "系",
"繭": "茧",
"繮": "缰",
"繯": "缳",
"繰": "缲",
"繳": "缴",
"繹": "绎",
"繼": "继",
"繽": "缤",
"繾": "缱",
"纇": "颣",
"纈": "缬",
"纊": "纩",
"續": "续",
"纍": "累",
"纏": "缠",
"纓": "缨",
"纖": "纤",
"纘": "缵",
"纜": "缆",
"韁": "缰",
"缽": "钵",
"罌": "罂",
"罈": "坛",
"罋": "瓮",
"罎": "坛",
"罏": "垆",
"羅": "罗",
"罰": "罚",
"罷": "罢",
"羆": "罴",
"罵": "骂",
"罸": "罚",
"羈": "羁",
"羋": "芈",
"羥": "羟",
"羨": "羡",
"羢": "绒",
"羶": "膻",
"翹": "翘",
"翽": "翙",
"翬": "翚",
"翺": "翱",
"耑": "端",
"耡": "锄",
"耮": "耢",
"耬": "耧",
"聳": "耸",
"聶": "聂",
"聾": "聋",
"職": "职",
"聹": "聍",
"聯": "联",
"聞": "闻",
"聵": "聩",
"聰": "聪",
"聼": "听",
"肅": "肃",
"腸": "肠",
"膚": "肤",
"膁": "肷",
"腎": "肾",
"腫": "肿",
"脹": "胀",
"脅": "胁",
"膽": "胆",
"腖": "胨",
"臚": "胪",
"脛": "胫",
"膠": "胶",
"脇": "胁",
"脈": "脉",
"膾": "脍",
"髒": "脏",
"臍": "脐",
"腦": "脑",
"膿": "脓",
"臠": "脔",
"腳": "脚",
"脣": "唇",
"脩": "修",
"脫": "脱",
"腡": "脶",
"臉": "脸",
"臘": "腊",
"醃": "腌",
"膕": "腘",
"齶": "腭",
"膩": "腻",
"靦": "腼",
"膃": "腽",
"騰": "腾",
"臏": "膑",
"臢": "臜",
"臟": "脏",
"臯": "皋",
"臺": "台",
"輿": "舆",
"舖": "铺",
"舘": "馆",
"艤": "舣",
"艦": "舰",
"艙": "舱",
"艫": "舻",
"艢": "樯",
"艣": "橹",
"艪": "橹",
"艱": "艰",
"豔": "艳",
"艷": "艳",
"艸": "艹",
"藝": "艺",
"薌": "芗",
"蕪": "芜",
"蘆": "芦",
"蓯": "苁",
"葦": "苇",
"藶": "苈",
"莧": "苋",
"萇": "苌",
"蒼": "苍",
"苧": "苎",
"蘇": "苏",
"蘋": "苹",
"莖": "茎",
"蘢": "茏",
"蔦": "茑",
"荊": "荆",
"薦": "荐",
"薘": "荙",
"莢": "荚",
"蕘": "荛",
"蓽": "荜",
"蕎": "荞",
"薈": "荟",
"薺": "荠",
"蕩": "荡",
"葷": "荤",
"蕁": "荨",
"藎": "荩",
"蓀": "荪",
"蔭": "荫",
"蕒": "荬",
"葒": "荭",
"葤": "荮",
"藥": "药",
"蒞": "莅",
"蓧": "莜",
"萊": "莱",
"蓮": "莲",
"蒔": "莳",
"萵": "莴",
"薟": "莶",
"蕕": "莸",
"鶯": "莺",
"蓴": "莼",
"菴": "庵",
"菸": "烟",
"蘀": "萚",
"蘿": "萝",
"螢": "萤",
"蕭": "萧",
"薩": "萨",
"葠": "参",
"葯": "药",
"蔥": "葱",
"蕆": "蒇",
"蕢": "蒉",
"蔣": "蒋",
"蔞": "蒌",
"蒐": "搜",
"蒓": "莼",
"蓆": "席",
"藍": "蓝",
"薊": "蓟",
"蘺": "蓠",
"蓡": "参",
"蕷": "蓣",
"鎣": "蓥",
"驀": "蓦",
"蔆": "菱",
"蔴": "麻",
"薔": "蔷",
"蘞": "蔹",
"藺": "蔺",
"藹": "蔼",
"蕓": "芸",
"蘄": "蕲",
"蘊": "蕴",
"藪": "薮",
"薰": "熏",
"蘚": "藓",
"虜": "虏",
"虛": "虚",
"蟲": "虫",
"虯": "虬",
"蟣": "虮",
"雖": "虽",
"蝦": "虾",
"蠆": "虿",
"蝕": "蚀",
"蟻": "蚁",
"螞": "蚂",
"蠶": "蚕",
"蠔": "蚝",
"蜆": "蚬",
"蠱": "蛊",
"蠣": "蛎",
"蟶": "蛏",
"蠻": "蛮",
"蟄": "蛰",
"蛺": "蛱",
"蟯": "蛲",
"螄": "蛳",
"蠐": "蛴",
"蛻": "蜕",
"蝸": "蜗",
"蠟": "蜡",
"蠅": "蝇",
"蟈": "蝈",
"蟬": "蝉",
"蠍": "蝎",
"蝨": "虱",
"螻": "蝼",
"蠑": "蝾",
"螿": "螀",
"螘": "蚁",
"蟎": "螨",
"蠨": "蟏",
"釁": "衅",
"衆": "众",
"衊": "蔑",
"銜": "衔",
"衚": "胡",
"衝": "冲",
"衞": "卫",
"補": "补",
"襯": "衬",
"袞": "衮",
"衹": "只",
"襖": "袄",
"褘": "袆",
"襪": "袜",
"襲": "袭",
"襏": "袯",
"裝": "装",
"襠": "裆",
"褌": "裈",
"裊": "袅",
"裌": "夹",
"裏": "里",
"裡": "里",
"褳": "裢",
"襝": "裣",
"褲": "裤",
"襇": "裥",
"製": "制",
"褸": "褛",
"襤": "褴",
"襍": "杂",
"襴": "襕",
"覈": "核",
"見": "见",
"覎": "觃",
"規": "规",
"覓": "觅",
"覔": "觅",
"視": "视",
"覘": "觇",
"覜": "眺",
"覡": "觋",
"覥": "觍",
"覦": "觎",
"覬": "觊",
"覯": "觏",
"覰": "觑",
"覲": "觐",
"覷": "觑",
"覺": "觉",
"覻": "觑",
"覽": "览",
"覿": "觌",
"觀": "观",
"觝": "抵",
"觴": "觞",
"觸": "触",
"觶": "觯",
"訁": "讠",
"訂": "订",
"訃": "讣",
"計": "计",
"訊": "讯",
"訌": "讧",
"討": "讨",
"訏": "吁",
"訐": "讦",
"訒": "讱",
"訓": "训",
"訕": "讪",
"訖": "讫",
"託": "托",
"記": "记",
"訛": "讹",
"訝": "讶",
"訟": "讼",
"訢": "欣",
"訣": "诀",
"訥": "讷",
"訦": "谌",
"訩": "讻",
"訪": "访",
"設": "设",
"許": "许",
"訴": "诉",
"訶": "诃",
"診": "诊",
"註": "注",
"証": "证",
"詁": "诂",
"詆": "诋",
"詎": "讵",
"詐": "诈",
"詒": "诒",
"詔": "诏",
"評": "评",
"詖": "诐",
"詗": "诇",
"詘": "诎",
"詛": "诅",
"詞": "词",
"讋": "詟",
"詡": "诩",
"詢": "询",
"詣": "诣",
"試": "试",
"詩": "诗",
"詫": "诧",
"詬": "诟",
"詭": "诡",
"詮": "诠",
"詰": "诘",
"話": "话",
"該": "该",
"詳": "详",
"詵": "诜",
"詼": "诙",
"詾": "讻",
"詿": "诖",
"誄": "诔",
"誅": "诛",
"誆": "诓",
"譽": "誉",
"謄": "誊",
"誌": "志",
"認": "认",
"誑": "诳",
"誒": "诶",
"誕": "诞",
"誘": "诱",
"誚": "诮",
"語": "语",
"誠": "诚",
"誡": "诫",
"誣": "诬",
"誤": "误",
"誥": "诰",
"誦": "诵",
"誨": "诲",
"說": "说",
"説": "说",
"誰": "谁",
"課": "课",
"誶": "谇",
"誹": "诽",
"誼": "谊",
"調": "调",
"諂": "谄",
"諄": "谆",
"談": "谈",
"諉": "诿",
"請": "请",
"諍": "诤",
"諏": "诹",
"諑": "诼",
"諒": "谅",
"論": "论",
"諗": "谂",
"諛": "谀",
"諜": "谍",
"諝": "谞",
"諞": "谝",
"諡": "谥",
"諢": "诨",
"諤": "谔",
"諦": "谛",
"諧": "谐",
"諫": "谏",
"諭": "谕",
"諱": "讳",
"諳": "谙",
"諶": "谌",
"諷": "讽",
"諸": "诸",
"諺": "谚",
"諼": "谖",
"諾": "诺",
"謀": "谋",
"謁": "谒",
"謂": "谓",
"謅": "诌",
"謊": "谎",
"謎": "谜",
"謐": "谧",
"謖": "谡",
"謗": "谤",
"謙": "谦",
"謚": "谥",
"講": "讲",
"謝": "谢",
"謠": "谣",
"謨": "谟",
"謫": "谪",
"謬": "谬",
"謳": "讴",
"謹": "谨",
"謾": "谩",
"譁": "哗",
"譆": "嘻",
"證": "证",
"譌": "讹",
"譎": "谲",
"譏": "讥",
"譖": "谮",
"識": "识",
"譙": "谯",
"譚": "谭",
"譜": "谱",
"譟": "噪",
"譫": "谵",
"譭": "毁",
"譯": "译",
"議": "议",
"譴": "谴",
"譸": "诪",
"譾": "谫",
"讀": "读",
"讁": "谪",
"讅": "审",
"讌": "燕",
"讎": "雠",
"讐": "雠",
"讒": "谗",
"讓": "让",
"讕": "谰",
"讖": "谶",
"讚": "赞",
"讛": "呓",
"讜": "谠",
"讞": "谳",
"谿": "溪",
"豶": "豮",
"貍": "狸",
"貝": "贝",
"貞": "贞",
"貟": "贠",
"負": "负",
"財": "财",
"貢": "贡",
"貧": "贫",
"貨": "货",
"販": "贩",
"貪": "贪",
"貫": "贯",
"責": "责",
"貯": "贮",
"貰": "贳",
"貲": "赀",
"貳": "贰",
"貴": "贵",
"貶": "贬",
"貸": "贷",
"貺": "贶",
"費": "费",
"貼": "贴",
"貽": "贻",
"貿": "贸",
"賀": "贺",
"賁": "贲",
"賂": "赂",
"賃": "赁",
"賄": "贿",
"賅": "赅",
"資": "资",
"賈": "贾",
"賉": "恤",
"賊": "贼",
"賍": "赃",
"賑": "赈",
"賒": "赊",
"賔": "宾",
"賕": "赇",
"賙": "赒",
"賚": "赉",
"賛": "赞",
"賜": "赐",
"賞": "赏",
"賠": "赔",
"賡": "赓",
"賢": "贤",
"賤": "贱",
"賦": "赋",
"賧": "赕",
"質": "质",
"賫": "赍",
"賬": "账",
"賭": "赌",
"賮": "赆",
"賴": "赖",
"賵": "赗",
"賸": "剩",
"賺": "赚",
"賻": "赙",
"購": "购",
"賽": "赛",
"賾": "赜",
"贄": "贽",
"贅": "赘",
"贇": "赟",
"贈": "赠",
"贊": "赞",
"贋": "赝",
"贍": "赡",
"贏": "赢",
"贐": "赆",
"贓": "赃",
"贔": "赑",
"贖": "赎",
"贗": "赝",
"贛": "赣",
"贜": "赃",
"齎": "赍",
"赬": "赪",
"趙": "赵",
"趕": "赶",
"趨": "趋",
"趲": "趱",
"躉": "趸",
"躍": "跃",
"蹌": "跄",
"蹠": "跖",
"躒": "跞",
"跡": "迹",
"踐": "践",
"躂": "跶",
"蹺": "跷",
"蹕": "跸",
"躚": "跹",
"躋": "跻",
"跼": "局",
"踴": "踊",
"躊": "踌",
"踡": "蜷",
"蹤": "踪",
"躓": "踬",
"躑": "踯",
"躡": "蹑",
"蹣": "蹒",
"蹟": "迹",
"躕": "蹰",
"躥": "蹿",
"躪": "躏",
"躦": "躜",
"軀": "躯",
"躰": "体",
"軃": "亸",
"車": "车",
"軋": "轧",
"軌": "轨",
"軑": "轪",
"軒": "轩",
"軔": "轫",
"軛": "轭",
"軟": "软",
"軤": "轷",
"軫": "轸",
"軲": "轱",
"軸": "轴",
"軹": "轵",
"軺": "轺",
"軻": "轲",
"軼": "轶",
"軾": "轼",
"較": "较",
"輅": "辂",
"輇": "辁",
"輈": "辀",
"載": "载",
"輊": "轾",
"輒": "辄",
"輓": "挽",
"輔": "辅",
"輕": "轻",
"輛": "辆",
"輜": "辎",
"輝": "辉",
"輞": "辋",
"輟": "辍",
"輥": "辊",
"輦": "辇",
"輩": "辈",
"輪": "轮",
"輬": "辌",
"輭": "软",
"輯": "辑",
"輳": "辏",
"輸": "输",
"輻": "辐",
"輼": "辒",
"輾": "辗",
"轀": "辒",
"轄": "辖",
"轅": "辕",
"轆": "辘",
"轉": "转",
"轍": "辙",
"轎": "轿",
"轔": "辚",
"轟": "轰",
"轡": "辔",
"轢": "轹",
"轤": "轳",
"辭": "辞",
"辤": "辞",
"辯": "辩",
"辮": "辫",
"辳": "农",
"邊": "边",
"遼": "辽",
"達": "达",
"遷": "迁",
"迆": "迤",
"過": "过",
"邁": "迈",
"運": "运",
"還": "还",
"這": "这",
"進": "进",
"遠": "远",
"違": "违",
"連": "连",
"遲": "迟",
"邇": "迩",
"逕": "迳",
"迴": "回",
"迺": "乃",
"適": "适",
"選": "选",
"遜": "逊",
"遞": "递",
"邐": "逦",
"週": "周",
"邏": "逻",
"遺": "遗",
"遙": "遥",
"鄧": "邓",
"鄺": "邝",
"鄔": "邬",
"郵": "邮",
"鄒": "邹",
"鄴": "邺",
"鄰": "邻",
"鬱": "郁",
"郃": "合",
"郤": "郄",
"郟": "郏",
"鄶": "郐",
"鄭": "郑",
"鄆": "郓",
"酈": "郦",
"鄖": "郧",
"鄲": "郸",
"鄕": "乡",
"鄘": "墉",
"醞": "酝",
"醱": "酦",
"酧": "酬",
"醯": "酰",
"醬": "酱",
"釅": "酽",
"釃": "酾",
"釀": "酿",
"醖": "酝",
"醻": "酬",
"醼": "燕",
"釋": "释",
"釐": "厘",
"釓": "钆",
"釔": "钇",
"釕": "钌",
"釗": "钊",
"釘": "钉",
"釙": "钋",
"針": "针",
"釣": "钓",
"釤": "钐",
"釦": "扣",
"釧": "钏",
"釩": "钒",
"釬": "焊",
"釵": "钗",
"釷": "钍",
"釹": "钕",
"釺": "钎",
"鈀": "钯",
"鈁": "钫",
"鈃": "钘",
"鈄": "钭",
"鈅": "钥",
"鈈": "钚",
"鈉": "钠",
"鈍": "钝",
"鈎": "钩",
"鈐": "钤",
"鈑": "钣",
"鈒": "钑",
"鈔": "钞",
"鈕": "钮",
"鈞": "钧",
"鈡": "钟",
"鈣": "钙",
"鈥": "钬",
"鈦": "钛",
"鈧": "钪",
"鈮": "铌",
"鈰": "铈",
"鈳": "钶",
"鈴": "铃",
"鈷": "钴",
"鈸": "钹",
"鈹": "铍",
"鈺": "钰",
"鈽": "钸",
"鈾": "铀",
"鈿": "钿",
"鉀": "钾",
"鉄": "铁",
"钜": "巨",
"鉆": "钻",
"鉈": "铊",
"鉉": "铉",
"鉋": "刨",
"鉍": "铋",
"鉑": "铂",
"鉕": "钷",
"鉗": "钳",
"鉚": "铆",
"鉛": "铅",
"鉞": "钺",
"鉢": "钵",
"鉤": "钩",
"鉦": "钲",
"鉬": "钼",
"鉭": "钽",
"鉲": "锎",
"鑒": "鉴",
"鉶": "铏",
"鉸": "铰",
"鉺": "铒",
"鉻": "铬",
"鉿": "铪",
"銀": "银",
"銃": "铳",
"銅": "铜",
"銍": "铚",
"銑": "铣",
"銓": "铨",
"銕": "铁",
"銖": "铢",
"銘": "铭",
"銚": "铫",
"銛": "铦",
"銠": "铑",
"銣": "铷",
"銥": "铱",
"銦": "铟",
"銨": "铵",
"銩": "铥",
"銪": "铕",
"銫": "铯",
"銬": "铐",
"鑾": "銮",
"銱": "铞",
"銲": "焊",
"銳": "锐",
"銷": "销",
"銹": "锈",
"銻": "锑",
"銼": "锉",
"鋁": "铝",
"鋂": "镅",
"鋃": "锒",
"鋅": "锌",
"鋇": "钡",
"鋌": "铤",
"鋏": "铗",
"鋒": "锋",
"鋙": "铻",
"鋜": "镯",
"鋝": "锊",
"鋟": "锓",
"鋣": "铘",
"鋤": "锄",
"鋥": "锃",
"鋦": "锔",
"鋨": "锇",
"鋩": "铓",
"鋪": "铺",
"鋮": "铖",
"鋯": "锆",
"鋰": "锂",
"鋱": "铽",
"鋶": "锍",
"鋸": "锯",
"鋻": "鉴",
"鋼": "钢",
"錁": "锞",
"錆": "锖",
"錇": "锫",
"錈": "锩",
"錏": "铔",
"錐": "锥",
"錒": "锕",
"錕": "锟",
"錘": "锤",
"錙": "锱",
"錚": "铮",
"錛": "锛",
"錟": "锬",
"錠": "锭",
"錡": "锜",
"錢": "钱",
"錦": "锦",
"錨": "锚",
"錩": "锠",
"錫": "锡",
"錮": "锢",
"錯": "错",
"錳": "锰",
"錶": "表",
"錸": "铼",
"錼": "镎",
"鏨": "錾",
"鍀": "锝",
"鍁": "锨",
"鍃": "锪",
"鍆": "钔",
"鍇": "锴",
"鍈": "锳",
"鍊": "炼",
"鍋": "锅",
"鍍": "镀",
"鍔": "锷",
"鍘": "铡",
"鍚": "钖",
"鍛": "锻",
"鍠": "锽",
"鍤": "锸",
"鍥": "锲",
"鍩": "锘",
"鍫": "锹",
"鍬": "锹",
"鍰": "锾",
"鍵": "键",
"鍶": "锶",
"鍺": "锗",
"鍼": "针",
"鍾": "钟",
"鎂": "镁",
"鎄": "锿",
"鎇": "镅",
"鎊": "镑",
"鎋": "辖",
"鎔": "镕",
"鎖": "锁",
"鎘": "镉",
"鎚": "锤",
"鎛": "镈",
"鎡": "镃",
"鎢": "钨",
"鎦": "镏",
"鎧": "铠",
"鎩": "铩",
"鎪": "锼",
"鎬": "镐",
"鎮": "镇",
"鎰": "镒",
"鎲": "镋",
"鎳": "镍",
"鎵": "镓",
"鎸": "镌",
"鎿": "镎",
"鏃": "镞",
"鏇": "旋",
"鏈": "链",
"鏌": "镆",
"鏍": "镙",
"鏐": "镠",
"鏑": "镝",
"鏗": "铿",
"鏘": "锵",
"鏚": "戚",
"鏜": "镗",
"鏝": "镘",
"鏞": "镛",
"鏟": "铲",
"鏡": "镜",
"鏢": "镖",
"鏤": "镂",
"鏰": "镚",
"鏵": "铧",
"鏷": "镤",
"鏹": "镪",
"鏽": "锈",
"鐃": "铙",
"鐋": "铴",
"鐐": "镣",
"鐒": "铹",
"鐓": "镦",
"鐔": "镡",
"鐘": "钟",
"鐙": "镫",
"鐝": "镢",
"鐠": "镨",
"鐦": "锎",
"鐧": "锏",
"鐨": "镄",
"鐫": "镌",
"鐮": "镰",
"鐲": "镯",
"鐳": "镭",
"鐵": "铁",
"鐶": "镮",
"鐸": "铎",
"鐺": "铛",
"鐿": "镱",
"鑄": "铸",
"鑊": "镬",
"鑌": "镔",
"鑑": "鉴",
"鑔": "镲",
"鑕": "锧",
"鑛": "矿",
"鑞": "镴",
"鑠": "铄",
"鑣": "镳",
"鑤": "刨",
"鑥": "镥",
"鑪": "炉",
"鑭": "镧",
"鑰": "钥",
"鑱": "镵",
"鑲": "镶",
"鑷": "镊",
"鑹": "镩",
"鑼": "锣",
"鑽": "钻",
"钁": "镢",
"钂": "镋",
"長": "长",
"門": "门",
"閂": "闩",
"閃": "闪",
"閆": "闫",
"閈": "闬",
"閉": "闭",
"閌": "闶",
"閎": "闳",
"閏": "闰",
"閑": "闲",
"閒": "闲",
"間": "间",
"閔": "闵",
"閘": "闸",
"閙": "闹",
"閡": "阂",
"関": "关",
"閣": "阁",
"閤": "合",
"閥": "阀",
"閨": "闺",
"閩": "闽",
"閫": "阃",
"閬": "阆",
"閭": "闾",
"閱": "阅",
"閲": "阅",
"閶": "阊",
"閹": "阉",
"閻": "阎",
"閼": "阏",
"閽": "阍",
"閾": "阈",
"閿": "阌",
"闃": "阒",
"闆": "板",
"闈": "闱",
"闊": "阔",
"闋": "阕",
"闌": "阑",
"闍": "阇",
"闐": "阗",
"闒": "阘",
"闓": "闿",
"闔": "阖",
"闕": "阙",
"闖": "闯",
"闚": "窥",
"闞": "阚",
"闠": "阓",
"闡": "阐",
"闢": "辟",
"闤": "阛",
"闥": "闼",
"鬧": "闹",
"鬮": "阄",
"鬩": "阋",
"隊": "队",
"阬": "坑",
"阯": "址",
"陽": "阳",
"陰": "阴",
"陣": "阵",
"階": "阶",
"際": "际",
"陸": "陆",
"隴": "陇",
"陳": "陈",
"陘": "陉",
"陝": "陕",
"陞": "升",
"隉": "陧",
"隕": "陨",
"險": "险",
"隂": "阴",
"隄": "堤",
"隨": "随",
"隱": "隐",
"隖": "坞",
"隣": "邻",
"隸": "隶",
"隷": "隶",
"隻": "只",
"雋": "隽",
"難": "难",
"雛": "雏",
"雞": "鸡",
"靂": "雳",
"霧": "雾",
"霽": "霁",
"黴": "霉",
"霑": "沾",
"霛": "灵",
"霤": "溜",
"靄": "霭",
"靚": "靓",
"靜": "静",
"靣": "面",
"靨": "靥",
"靭": "韧",
"鞀": "鼗",
"鞉": "鼗",
"韃": "鞑",
"鞽": "鞒",
"鞦": "秋",
"韉": "鞯",
"韝": "鞴",
"韆": "千",
"韋": "韦",
"韌": "韧",
"韍": "韨",
"韓": "韩",
"韙": "韪",
"韜": "韬",
"韞": "韫",
"韤": "袜",
"韻": "韵",
"頁": "页",
"頂": "顶",
"頃": "顷",
"項": "项",
"順": "顺",
"頇": "顸",
"須": "须",
"頊": "顼",
"頌": "颂",
"頎": "颀",
"頏": "颃",
"預": "预",
"頑": "顽",
"頒": "颁",
"頓": "顿",
"頗": "颇",
"領": "领",
"頜": "颌",
"頡": "颉",
"頤": "颐",
"頦": "颏",
"頫": "俯",
"頮": "颒",
"頰": "颊",
"頲": "颋",
"頴": "颕",
"頷": "颔",
"頸": "颈",
"頹": "颓",
"頻": "频",
"頽": "颓",
"顆": "颗",
"題": "题",
"額": "额",
"顎": "颚",
"顏": "颜",
"顒": "颙",
"顓": "颛",
"顔": "颜",
"顙": "颡",
"顛": "颠",
"顢": "颟",
"顥": "颢",
"顧": "顾",
"顫": "颤",
"顬": "颥",
"顰": "颦",
"顱": "颅",
"顳": "颞",
"顴": "颧",
"風": "风",
"颭": "飐",
"颮": "飑",
"颯": "飒",
"颱": "台",
"颳": "刮",
"颶": "飓",
"颸": "飔",
"颺": "扬",
"颻": "飖",
"颼": "飕",
"飀": "飗",
"飃": "飘",
"飄": "飘",
"飆": "飙",
"飇": "飙",
"飈": "飙",
"飛": "飞",
"飢": "饥",
"飣": "饤",
"飥": "饦",
"饗": "飨",
"飩": "饨",
"飪": "饪",
"飫": "饫",
"飭": "饬",
"飯": "饭",
"飲": "饮",
"飴": "饴",
"飼": "饲",
"飽": "饱",
"飾": "饰",
"飿": "饳",
"餃": "饺",
"餄": "饸",
"餅": "饼",
"餉": "饷",
"餌": "饵",
"饜": "餍",
"餎": "饹",
"餏": "饻",
"餑": "饽",
"餒": "馁",
"餓": "饿",
"餕": "馂",
"餖": "饾",
"餚": "肴",
"餛": "馄",
"餜": "馃",
"餞": "饯",
"餡": "馅",
"館": "馆",
"餳": "饧",
"餵": "喂",
"餶": "馉",
"餷": "馇",
"餺": "馎",
"餼": "饩",
"餽": "馈",
"餾": "馏",
"餿": "馊",
"饁": "馌",
"饃": "馍",
"饅": "馒",
"饈": "馐",
"饉": "馑",
"饊": "馓",
"饋": "馈",
"饌": "馔",
"饑": "饥",
"饒": "饶",
"饝": "馍",
"饞": "馋",
"饢": "馕",
"馬": "马",
"馭": "驭",
"馱": "驮",
"馳": "驰",
"馴": "驯",
"馹": "驲",
"駁": "驳",
"駐": "驻",
"駑": "驽",
"駒": "驹",
"駔": "驵",
"駕": "驾",
"駘": "骀",
"駙": "驸",
"駛": "驶",
"駝": "驼",
"駟": "驷",
"駡": "骂",
"駢": "骈",
"駭": "骇",
"駮": "驳",
"駰": "骃",
"駱": "骆",
"駸": "骎",
"駿": "骏",
"騁": "骋",
"騂": "骍",
"騅": "骓",
"騌": "骔",
"騍": "骒",
"騎": "骑",
"騏": "骐",
"騐": "验",
"騖": "骛",
"騗": "骗",
"騙": "骗",
"騣": "鬃",
"騤": "骙",
"騫": "骞",
"騭": "骘",
"騮": "骝",
"騶": "驺",
"騷": "骚",
"騸": "骟",
"騾": "骡",
"驁": "骜",
"驂": "骖",
"驃": "骠",
"驄": "骢",
"驅": "驱",
"驊": "骅",
"驌": "骕",
"驍": "骁",
"驏": "骣",
"驕": "骄",
"驗": "验",
"驘": "骡",
"驛": "驿",
"驟": "骤",
"驢": "驴",
"驤": "骧",
"驥": "骥",
"驦": "骦",
"驪": "骊",
"驫": "骉",
"骾": "鲠",
"髏": "髅",
"髖": "髋",
"髕": "髌",
"髩": "鬓",
"髮": "发",
"鬆": "松",
"鬍": "胡",
"鬢": "鬓",
"鬚": "须",
"鬦": "斗",
"鬨": "哄",
"鬭": "斗",
"魘": "魇",
"魎": "魉",
"魚": "鱼",
"魛": "鱽",
"魢": "鱾",
"魨": "鲀",
"魯": "鲁",
"魴": "鲂",
"魷": "鱿",
"魺": "鲄",
"鮁": "鲅",
"鮃": "鲆",
"鮊": "鲌",
"鮋": "鲉",
"鮌": "鲧",
"鮍": "鲏",
"鮎": "鲇",
"鮐": "鲐",
"鮑": "鲍",
"鮒": "鲋",
"鮓": "鲊",
"鮚": "鲒",
"鮜": "鲘",
"鮞": "鲕",
"鮦": "鲖",
"鮪": "鲔",
"鮫": "鲛",
"鮭": "鲑",
"鮮": "鲜",
"鮳": "鲓",
"鮶": "鲪",
"鮷": "鳀",
"鮺": "鲝",
"鯀": "鲧",
"鯁": "鲠",
"鯇": "鲩",
"鯉": "鲤",
"鯊": "鲨",
"鯒": "鲬",
"鯔": "鲻",
"鯕": "鲯",
"鯖": "鲭",
"鯗": "鲞",
"鯛": "鲷",
"鯝": "鲴",
"鯡": "鲱",
"鯢": "鲵",
"鯤": "鲲",
"鯧": "鲳",
"鯨": "鲸",
"鯪": "鲮",
"鯫": "鲰",
"鯰": "鲶",
"鯴": "鲺",
"鯵": "鲹",
"鯷": "鳀",
"鯽": "鲫",
"鯿": "鳊",
"鰁": "鳈",
"鰂": "鲗",
"鰃": "鳂",
"鰈": "鲽",
"鰉": "鳇",
"鰌": "鳅",
"鰍": "鳅",
"鰏": "鲾",
"鰐": "鳄",
"鰒": "鳆",
"鰓": "鳃",
"鰛": "鳁",
"鰜": "鳒",
"鰟": "鳑",
"鰠": "鳋",
"鰣": "鲥",
"鰥": "鳏",
"鰨": "鳎",
"鰩": "鳐",
"鰭": "鳍",
"鰮": "鳁",
"鰱": "鲢",
"鰲": "鳌",
"鰳": "鳓",
"鰵": "鳘",
"鰷": "鲦",
"鰹": "鲣",
"鰺": "鲹",
"鰻": "鳗",
"鰼": "鳛",
"鰾": "鳔",
"鱂": "鳉",
"鱅": "鳙",
"鱈": "鳕",
"鱉": "鳖",
"鱒": "鳟",
"鱓": "鳝",
"鱔": "鳝",
"鱖": "鳜",
"鱗": "鳞",
"鱘": "鲟",
"鱝": "鲼",
"鱟": "鲎",
"鱠": "鲙",
"鱣": "鳣",
"鱤": "鳡",
"鱧": "鳢",
"鱨": "鲿",
"鱭": "鲚",
"鱯": "鳠",
"鱷": "鳄",
"鱸": "鲈",
"鱺": "鲡",
"鼇": "鳌",
"鳥": "鸟",
"鳩": "鸠",
"鳲": "鸤",
"鳴": "鸣",
"鳶": "鸢",
"鴆": "鸩",
"鴇": "鸨",
"鴉": "鸦",
"鴒": "鸰",
"鴕": "鸵",
"鴛": "鸳",
"鴝": "鸲",
"鴞": "鸮",
"鴟": "鸱",
"鴣": "鸪",
"鴦": "鸯",
"鴨": "鸭",
"鴬": "鸴",
"鴯": "鸸",
"鴰": "鸹",
"鴴": "鸻",
"鴻": "鸿",
"鴿": "鸽",
"鵂": "鸺",
"鵃": "鸼",
"鵐": "鹀",
"鵑": "鹃",
"鵒": "鹆",
"鵓": "鹁",
"鵜": "鹈",
"鵝": "鹅",
"鵞": "鹅",
"鵠": "鹄",
"鵡": "鹉",
"鵪": "鹌",
"鵬": "鹏",
"鵮": "鹐",
"鵯": "鹎",
"鵲": "鹊",
"鵶": "鸦",
"鵷": "鹓",
"鵾": "鹍",
"鶇": "鸫",
"鶉": "鹑",
"鶊": "鹒",
"鶓": "鹋",
"鶖": "鹙",
"鶘": "鹕",
"鶚": "鹗",
"鶡": "鹖",
"鶤": "鹍",
"鶥": "鹛",
"鶩": "鹜",
"鶬": "鸧",
"鶲": "鹟",
"鶴": "鹤",
"鶹": "鹠",
"鶺": "鹡",
"鶻": "鹘",
"鶼": "鹣",
"鶿": "鹚",
"鷀": "鹚",
"鷁": "鹢",
"鷂": "鹞",
"鷄": "鸡",
"鷊": "鹝",
"鷓": "鹧",
"鷖": "鹥",
"鷗": "鸥",
"鷙": "鸷",
"鷚": "鹨",
"鷥": "鸶",
"鷦": "鹪",
"鷫": "鹔",
"鷯": "鹩",
"鷰": "燕",
"鷲": "鹫",
"鷳": "鹇",
"鷴": "鹇",
"鷸": "鹬",
"鷹": "鹰",
"鷺": "鹭",
"鷼": "鹇",
"鸇": "鹯",
"鸌": "鹱",
"鸎": "莺",
"鸏": "鹲",
"鸕": "鸬",
"鸘": "鹴",
"鸚": "鹦",
"鸛": "鹳",
"鸝": "鹂",
"鸞": "鸾",
"鹺": "鹾",
"麥": "麦",
"麩": "麸",
"麪": "面",
"麯": "曲",
"麴": "曲",
"麵": "面",
"麽": "么",
"黃": "黄",
"黌": "黉",
"黶": "黡",
"黷": "黩",
"黲": "黪",
"黽": "黾",
"黿": "鼋",
"鼂": "鼌",
"鼈": "鳖",
"鼉": "鼍",
"鼕": "冬",
"鼴": "鼹",
"齇": "齄",
"齊": "齐",
"齏": "齑",
"齒": "齿",
"齔": "龀",
"齕": "龁",
"齗": "龂",
"齙": "龅",
"齜": "龇",
"齟": "龃",
"齠": "龆",
"齡": "龄",
"齣": "出",
"齦": "龈",
"齪": "龊",
"齬": "龉",
"齲": "龋",
"齷": "龌",
"龍": "龙",
"龔": "龚",
"龕": "龛",
"龜": "龟"
};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(42);
t.wiki_s2t = {
"䌶": "䊷",
"䜥": "𧩙",
"专": "專",
"业": "業",
"丛": "叢",
"东": "東",
"丝": "絲",
"丢": "丟",
"两": "兩",
"严": "嚴",
"丧": "喪",
"个": "個",
"临": "臨",
"丽": "麗",
"举": "舉",
"义": "義",
"乌": "烏",
"乐": "樂",
"乔": "喬",
"习": "習",
"乡": "鄉",
"书": "書",
"买": "買",
"乱": "亂",
"争": "爭",
"亏": "虧",
"亚": "亞",
"亩": "畝",
"亲": "親",
"亵": "褻",
"亸": "嚲",
"亿": "億",
"仅": "僅",
"从": "從",
"仑": "侖",
"仓": "倉",
"仪": "儀",
"们": "們",
"优": "優",
"会": "會",
"伛": "傴",
"伞": "傘",
"伟": "偉",
"传": "傳",
"伣": "俔",
"伤": "傷",
"伥": "倀",
"伦": "倫",
"伧": "傖",
"伫": "佇",
"佥": "僉",
"侠": "俠",
"侣": "侶",
"侥": "僥",
"侦": "偵",
"侧": "側",
"侨": "僑",
"侩": "儈",
"侪": "儕",
"侬": "儂",
"俣": "俁",
"俦": "儔",
"俨": "儼",
"俩": "倆",
"俪": "儷",
"俫": "倈",
"俭": "儉",
"债": "債",
"倾": "傾",
"偬": "傯",
"偻": "僂",
"偾": "僨",
"偿": "償",
"傥": "儻",
"傧": "儐",
"储": "儲",
"傩": "儺",
"兑": "兌",
"兖": "兗",
"兰": "蘭",
"关": "關",
"兴": "興",
"兹": "茲",
"养": "養",
"兽": "獸",
"冁": "囅",
"内": "內",
"冈": "岡",
"册": "冊",
"写": "寫",
"军": "軍",
"农": "農",
"冯": "馮",
"决": "決",
"况": "況",
"冻": "凍",
"净": "凈",
"凉": "涼",
"减": "減",
"凑": "湊",
"凛": "凜",
"凤": "鳳",
"凯": "凱",
"击": "擊",
"凿": "鑿",
"刍": "芻",
"刘": "劉",
"则": "則",
"刚": "剛",
"创": "創",
"删": "刪",
"刬": "剗",
"刭": "剄",
"刹": "剎",
"刽": "劊",
"刿": "劌",
"剀": "剴",
"剂": "劑",
"剐": "剮",
"剑": "劍",
"剥": "剝",
"剧": "劇",
"劝": "勸",
"办": "辦",
"务": "務",
"劢": "勱",
"动": "動",
"励": "勵",
"劲": "勁",
"劳": "勞",
"势": "勢",
"勋": "勛",
"勚": "勩",
"匀": "勻",
"匦": "匭",
"匮": "匱",
"区": "區",
"医": "醫",
"华": "華",
"协": "協",
"单": "單",
"卖": "賣",
"卢": "盧",
"卫": "衛",
"却": "卻",
"厅": "廳",
"厉": "厲",
"压": "壓",
"厌": "厭",
"厍": "厙",
"厐": "龎",
"厘": "釐",
"厢": "廂",
"厣": "厴",
"厦": "廈",
"厨": "廚",
"厩": "廄",
"厮": "廝",
"县": "縣",
"叁": "叄",
"参": "參",
"双": "雙",
"变": "變",
"叙": "敘",
"叠": "疊",
"号": "號",
"叹": "嘆",
"叽": "嘰",
"吓": "嚇",
"吕": "呂",
"吗": "嗎",
"吣": "唚",
"吨": "噸",
"听": "聽",
"吴": "吳",
"呐": "吶",
"呒": "嘸",
"呓": "囈",
"呕": "嘔",
"呖": "嚦",
"呗": "唄",
"员": "員",
"呙": "咼",
"呛": "嗆",
"呜": "嗚",
"咏": "詠",
"咙": "嚨",
"咛": "嚀",
"咝": "噝",
"咤": "吒",
"响": "響",
"哑": "啞",
"哒": "噠",
"哓": "嘵",
"哔": "嗶",
"哕": "噦",
"哗": "嘩",
"哙": "噲",
"哜": "嚌",
"哝": "噥",
"哟": "喲",
"唛": "嘜",
"唝": "嗊",
"唠": "嘮",
"唡": "啢",
"唢": "嗩",
"唤": "喚",
"啧": "嘖",
"啬": "嗇",
"啭": "囀",
"啮": "嚙",
"啴": "嘽",
"啸": "嘯",
"㖞": "喎",
"喷": "噴",
"喽": "嘍",
"喾": "嚳",
"嗫": "囁",
"嗳": "噯",
"嘘": "噓",
"嘤": "嚶",
"嘱": "囑",
"噜": "嚕",
"嚣": "囂",
"园": "園",
"囱": "囪",
"围": "圍",
"囵": "圇",
"国": "國",
"图": "圖",
"圆": "圓",
"圣": "聖",
"圹": "壙",
"场": "場",
"坂": "阪",
"块": "塊",
"坚": "堅",
"坜": "壢",
"坝": "壩",
"坞": "塢",
"坟": "墳",
"坠": "墜",
"垄": "壟",
"垅": "壠",
"垆": "壚",
"垒": "壘",
"垦": "墾",
"垩": "堊",
"垫": "墊",
"垭": "埡",
"垱": "壋",
"垲": "塏",
"垴": "堖",
"埘": "塒",
"埙": "塤",
"埚": "堝",
"埯": "垵",
"堑": "塹",
"堕": "墮",
"𡒄": "壈",
"壮": "壯",
"声": "聲",
"壶": "壺",
"壸": "壼",
"处": "處",
"备": "備",
"够": "夠",
"头": "頭",
"夹": "夾",
"夺": "奪",
"奁": "奩",
"奂": "奐",
"奋": "奮",
"奥": "奧",
"妆": "妝",
"妇": "婦",
"妈": "媽",
"妩": "嫵",
"妪": "嫗",
"姗": "姍",
"姹": "奼",
"娄": "婁",
"娅": "婭",
"娆": "嬈",
"娇": "嬌",
"娈": "孌",
"娱": "娛",
"娲": "媧",
"娴": "嫻",
"婳": "嫿",
"婴": "嬰",
"婵": "嬋",
"婶": "嬸",
"媪": "媼",
"嫒": "嬡",
"嫔": "嬪",
"嫱": "嬙",
"嬷": "嬤",
"孙": "孫",
"学": "學",
"孪": "孿",
"宝": "寶",
"实": "實",
"宠": "寵",
"审": "審",
"宪": "憲",
"宫": "宮",
"宽": "寬",
"宾": "賓",
"寝": "寢",
"对": "對",
"寻": "尋",
"导": "導",
"寿": "壽",
"将": "將",
"尔": "爾",
"尘": "塵",
"尝": "嘗",
"尧": "堯",
"尴": "尷",
"尸": "屍",
"层": "層",
"屃": "屓",
"屉": "屜",
"届": "屆",
"属": "屬",
"屡": "屢",
"屦": "屨",
"屿": "嶼",
"岁": "歲",
"岂": "豈",
"岖": "嶇",
"岗": "崗",
"岘": "峴",
"岙": "嶴",
"岚": "嵐",
"岛": "島",
"岭": "嶺",
"岽": "崬",
"岿": "巋",
"峄": "嶧",
"峡": "峽",
"峣": "嶢",
"峤": "嶠",
"峥": "崢",
"峦": "巒",
"崂": "嶗",
"崃": "崍",
"崄": "嶮",
"崭": "嶄",
"嵘": "嶸",
"嵚": "嶔",
"嵝": "嶁",
"巅": "巔",
"巩": "鞏",
"巯": "巰",
"币": "幣",
"帅": "帥",
"师": "師",
"帏": "幃",
"帐": "帳",
"帜": "幟",
"带": "帶",
"帧": "幀",
"帮": "幫",
"帱": "幬",
"帻": "幘",
"帼": "幗",
"幂": "冪",
"幺": "么",
"庄": "莊",
"庆": "慶",
"庐": "廬",
"庑": "廡",
"库": "庫",
"应": "應",
"庙": "廟",
"庞": "龐",
"废": "廢",
"廪": "廩",
"开": "開",
"异": "異",
"弃": "棄",
"弑": "弒",
"张": "張",
"弪": "弳",
"弯": "彎",
"弹": "彈",
"强": "強",
"归": "歸",
"彝": "彞",
"彦": "彥",
"彻": "徹",
"径": "徑",
"徕": "徠",
"忆": "憶",
"忏": "懺",
"忧": "憂",
"忾": "愾",
"怀": "懷",
"态": "態",
"怂": "慫",
"怃": "憮",
"怄": "慪",
"怅": "悵",
"怆": "愴",
"怜": "憐",
"总": "總",
"怼": "懟",
"怿": "懌",
"恋": "戀",
"恒": "恆",
"恳": "懇",
"恸": "慟",
"恹": "懨",
"恺": "愷",
"恻": "惻",
"恼": "惱",
"恽": "惲",
"悦": "悅",
"悬": "懸",
"悭": "慳",
"悮": "悞",
"悯": "憫",
"惊": "驚",
"惧": "懼",
"惨": "慘",
"惩": "懲",
"惫": "憊",
"惬": "愜",
"惭": "慚",
"惮": "憚",
"惯": "慣",
"愠": "慍",
"愤": "憤",
"愦": "憒",
"慑": "懾",
"懑": "懣",
"懒": "懶",
"懔": "懍",
"戆": "戇",
"戋": "戔",
"戏": "戲",
"戗": "戧",
"战": "戰",
"戬": "戩",
"戯": "戱",
"户": "戶",
"扑": "撲",
"执": "執",
"扩": "擴",
"扪": "捫",
"扫": "掃",
"扬": "揚",
"扰": "擾",
"抚": "撫",
"抛": "拋",
"抟": "摶",
"抠": "摳",
"抡": "掄",
"抢": "搶",
"护": "護",
"报": "報",
"拟": "擬",
"拢": "攏",
"拣": "揀",
"拥": "擁",
"拦": "攔",
"拧": "擰",
"拨": "撥",
"择": "擇",
"挂": "掛",
"挚": "摯",
"挛": "攣",
"挜": "掗",
"挝": "撾",
"挞": "撻",
"挟": "挾",
"挠": "撓",
"挡": "擋",
"挢": "撟",
"挣": "掙",
"挤": "擠",
"挥": "揮",
"挦": "撏",
"挽": "輓",
"捝": "挩",
"捞": "撈",
"损": "損",
"捡": "撿",
"换": "換",
"捣": "搗",
"掳": "擄",
"掴": "摑",
"掷": "擲",
"掸": "撣",
"掺": "摻",
"掼": "摜",
"揽": "攬",
"揾": "搵",
"揿": "撳",
"搀": "攙",
"搁": "擱",
"搂": "摟",
"搅": "攪",
"携": "攜",
"摄": "攝",
"摅": "攄",
"摆": "擺",
"摇": "搖",
"摈": "擯",
"摊": "攤",
"撄": "攖",
"撑": "撐",
"㧑": "撝",
"撵": "攆",
"撷": "擷",
"撸": "擼",
"撺": "攛",
"㧟": "擓",
"擞": "擻",
"攒": "攢",
"敌": "敵",
"敛": "斂",
"数": "數",
"斋": "齋",
"斓": "斕",
"斩": "斬",
"断": "斷",
"无": "無",
"旧": "舊",
"时": "時",
"旷": "曠",
"旸": "暘",
"昙": "曇",
"昼": "晝",
"昽": "曨",
"显": "顯",
"晋": "晉",
"晒": "曬",
"晓": "曉",
"晔": "曄",
"晕": "暈",
"晖": "暉",
"暂": "暫",
"暧": "曖",
"机": "機",
"杀": "殺",
"杂": "雜",
"权": "權",
"杆": "桿",
"条": "條",
"来": "來",
"杨": "楊",
"杩": "榪",
"杰": "傑",
"构": "構",
"枞": "樅",
"枢": "樞",
"枣": "棗",
"枥": "櫪",
"枧": "梘",
"枨": "棖",
"枪": "槍",
"枫": "楓",
"枭": "梟",
"柠": "檸",
"柽": "檉",
"栀": "梔",
"栅": "柵",
"标": "標",
"栈": "棧",
"栉": "櫛",
"栊": "櫳",
"栋": "棟",
"栌": "櫨",
"栎": "櫟",
"栏": "欄",
"树": "樹",
"栖": "棲",
"栗": "慄",
"样": "樣",
"栾": "欒",
"桠": "椏",
"桡": "橈",
"桢": "楨",
"档": "檔",
"桤": "榿",
"桥": "橋",
"桦": "樺",
"桧": "檜",
"桨": "槳",
"桩": "樁",
"梦": "夢",
"梼": "檮",
"梾": "棶",
"梿": "槤",
"检": "檢",
"棁": "梲",
"棂": "欞",
"椁": "槨",
"椟": "櫝",
"椠": "槧",
"椤": "欏",
"椭": "橢",
"楼": "樓",
"榄": "欖",
"榅": "榲",
"榇": "櫬",
"榈": "櫚",
"榉": "櫸",
"槚": "檟",
"槛": "檻",
"槟": "檳",
"槠": "櫧",
"横": "橫",
"樯": "檣",
"樱": "櫻",
"橥": "櫫",
"橱": "櫥",
"橹": "櫓",
"橼": "櫞",
"檩": "檁",
"欢": "歡",
"欤": "歟",
"欧": "歐",
"歼": "殲",
"殁": "歿",
"殇": "殤",
"残": "殘",
"殒": "殞",
"殓": "殮",
"殚": "殫",
"殡": "殯",
"㱮": "殨",
"殴": "毆",
"毁": "毀",
"毂": "轂",
"毕": "畢",
"毙": "斃",
"毡": "氈",
"毵": "毿",
"氇": "氌",
"气": "氣",
"氢": "氫",
"氩": "氬",
"氲": "氳",
"汉": "漢",
"汤": "湯",
"汹": "洶",
"沟": "溝",
"没": "沒",
"沣": "灃",
"沤": "漚",
"沥": "瀝",
"沦": "淪",
"沧": "滄",
"沪": "滬",
"泞": "濘",
"泪": "淚",
"泶": "澩",
"泷": "瀧",
"泸": "瀘",
"泺": "濼",
"泻": "瀉",
"泼": "潑",
"泽": "澤",
"泾": "涇",
"洁": "潔",
"洒": "灑",
"洼": "窪",
"浃": "浹",
"浅": "淺",
"浆": "漿",
"浇": "澆",
"浈": "湞",
"浊": "濁",
"测": "測",
"浍": "澮",
"济": "濟",
"浏": "瀏",
"浐": "滻",
"浑": "渾",
"浒": "滸",
"浓": "濃",
"浔": "潯",
"涛": "濤",
"涝": "澇",
"涞": "淶",
"涟": "漣",
"涠": "潿",
"涡": "渦",
"涣": "渙",
"涤": "滌",
"润": "潤",
"涧": "澗",
"涨": "漲",
"涩": "澀",
"渊": "淵",
"渌": "淥",
"渍": "漬",
"渎": "瀆",
"渐": "漸",
"渑": "澠",
"渔": "漁",
"渖": "瀋",
"渗": "滲",
"温": "溫",
"湾": "灣",
"湿": "濕",
"溃": "潰",
"溅": "濺",
"溆": "漵",
"滗": "潷",
"滚": "滾",
"滞": "滯",
"滟": "灧",
"滠": "灄",
"满": "滿",
"滢": "瀅",
"滤": "濾",
"滥": "濫",
"滦": "灤",
"滨": "濱",
"滩": "灘",
"滪": "澦",
"漤": "灠",
"潆": "瀠",
"潇": "瀟",
"潋": "瀲",
"潍": "濰",
"潜": "潛",
"潴": "瀦",
"澜": "瀾",
"濑": "瀨",
"濒": "瀕",
"灏": "灝",
"灭": "滅",
"灯": "燈",
"灵": "靈",
"灶": "竈",
"灾": "災",
"灿": "燦",
"炀": "煬",
"炉": "爐",
"炖": "燉",
"炜": "煒",
"炝": "熗",
"点": "點",
"炼": "煉",
"炽": "熾",
"烁": "爍",
"烂": "爛",
"烃": "烴",
"烛": "燭",
"烟": "煙",
"烦": "煩",
"烧": "燒",
"烨": "燁",
"烩": "燴",
"烫": "燙",
"烬": "燼",
"热": "熱",
"焕": "煥",
"焖": "燜",
"焘": "燾",
"煴": "熅",
"爱": "愛",
"爷": "爺",
"牍": "牘",
"牦": "氂",
"牵": "牽",
"牺": "犧",
"犊": "犢",
"状": "狀",
"犷": "獷",
"犸": "獁",
"犹": "猶",
"狈": "狽",
"狝": "獮",
"狞": "獰",
"独": "獨",
"狭": "狹",
"狮": "獅",
"狯": "獪",
"狰": "猙",
"狱": "獄",
"狲": "猻",
"猃": "獫",
"猎": "獵",
"猕": "獼",
"猡": "玀",
"猪": "豬",
"猫": "貓",
"猬": "蝟",
"献": "獻",
"獭": "獺",
"玑": "璣",
"玚": "瑒",
"玛": "瑪",
"玮": "瑋",
"环": "環",
"现": "現",
"玱": "瑲",
"玺": "璽",
"珐": "琺",
"珑": "瓏",
"珰": "璫",
"珲": "琿",
"琏": "璉",
"琐": "瑣",
"琼": "瓊",
"瑶": "瑤",
"瑷": "璦",
"璎": "瓔",
"瓒": "瓚",
"瓯": "甌",
"电": "電",
"画": "畫",
"畅": "暢",
"畴": "疇",
"疖": "癤",
"疗": "療",
"疟": "瘧",
"疠": "癘",
"疡": "瘍",
"疬": "癧",
"疭": "瘲",
"疮": "瘡",
"疯": "瘋",
"疱": "皰",
"疴": "痾",
"痈": "癰",
"痉": "痙",
"痒": "癢",
"痖": "瘂",
"痨": "癆",
"痪": "瘓",
"痫": "癇",
"瘅": "癉",
"瘆": "瘮",
"瘗": "瘞",
"瘪": "癟",
"瘫": "癱",
"瘾": "癮",
"瘿": "癭",
"癞": "癩",
"癣": "癬",
"癫": "癲",
"皑": "皚",
"皱": "皺",
"皲": "皸",
"盏": "盞",
"盐": "鹽",
"监": "監",
"盖": "蓋",
"盗": "盜",
"盘": "盤",
"眍": "瞘",
"眦": "眥",
"眬": "矓",
"着": "著",
"睁": "睜",
"睐": "睞",
"睑": "瞼",
"瞆": "瞶",
"瞒": "瞞",
"䁖": "瞜",
"瞩": "矚",
"矫": "矯",
"矶": "磯",
"矾": "礬",
"矿": "礦",
"砀": "碭",
"码": "碼",
"砖": "磚",
"砗": "硨",
"砚": "硯",
"砜": "碸",
"砺": "礪",
"砻": "礱",
"砾": "礫",
"础": "礎",
"硁": "硜",
"硕": "碩",
"硖": "硤",
"硗": "磽",
"硙": "磑",
"碍": "礙",
"碛": "磧",
"碜": "磣",
"碱": "鹼",
"礼": "禮",
"祃": "禡",
"祎": "禕",
"祢": "禰",
"祯": "禎",
"祷": "禱",
"祸": "禍",
"禀": "稟",
"禄": "祿",
"禅": "禪",
"离": "離",
"秃": "禿",
"秆": "稈",
"积": "積",
"称": "稱",
"秽": "穢",
"秾": "穠",
"稆": "穭",
"税": "稅",
"稣": "穌",
"稳": "穩",
"穑": "穡",
"穷": "窮",
"窃": "竊",
"窍": "竅",
"窎": "窵",
"窑": "窯",
"窜": "竄",
"窝": "窩",
"窥": "窺",
"窦": "竇",
"窭": "窶",
"竞": "競",
"笃": "篤",
"笋": "筍",
"笔": "筆",
"笕": "筧",
"笺": "箋",
"笼": "籠",
"笾": "籩",
"筚": "篳",
"筛": "篩",
"筜": "簹",
"筝": "箏",
"䇲": "筴",
"筹": "籌",
"筼": "篔",
"简": "簡",
"箓": "籙",
"箦": "簀",
"箧": "篋",
"箨": "籜",
"箩": "籮",
"箪": "簞",
"箫": "簫",
"篑": "簣",
"篓": "簍",
"篮": "籃",
"篱": "籬",
"簖": "籪",
"籁": "籟",
"籴": "糴",
"类": "類",
"籼": "秈",
"粜": "糶",
"粝": "糲",
"粤": "粵",
"粪": "糞",
"粮": "糧",
"糁": "糝",
"糇": "餱",
"紧": "緊",
"䌷": "紬",
"䌹": "絅",
"絷": "縶",
"䌸": "縳",
"䍁": "繸",
"纟": "糹",
"纠": "糾",
"纡": "紆",
"红": "紅",
"纣": "紂",
"纥": "紇",
"约": "約",
"级": "級",
"纨": "紈",
"纩": "纊",
"纪": "紀",
"纫": "紉",
"纬": "緯",
"纭": "紜",
"纮": "紘",
"纯": "純",
"纰": "紕",
"纱": "紗",
"纲": "綱",
"纳": "納",
"纴": "紝",
"纵": "縱",
"纶": "綸",
"纷": "紛",
"纸": "紙",
"纹": "紋",
"纺": "紡",
"纻": "紵",
"纼": "紖",
"纽": "紐",
"纾": "紓",
"绀": "紺",
"绁": "紲",
"绂": "紱",
"练": "練",
"组": "組",
"绅": "紳",
"细": "細",
"织": "織",
"终": "終",
"绉": "縐",
"绊": "絆",
"绋": "紼",
"绌": "絀",
"绍": "紹",
"绎": "繹",
"经": "經",
"绐": "紿",
"绑": "綁",
"绒": "絨",
"结": "結",
"绔": "絝",
"绕": "繞",
"绖": "絰",
"绗": "絎",
"绘": "繪",
"给": "給",
"绚": "絢",
"绛": "絳",
"络": "絡",
"绞": "絞",
"统": "統",
"绠": "綆",
"绡": "綃",
"绢": "絹",
"绤": "綌",
"绥": "綏",
"继": "繼",
"绨": "綈",
"绩": "績",
"绪": "緒",
"绫": "綾",
"绬": "緓",
"续": "續",
"绮": "綺",
"绯": "緋",
"绰": "綽",
"绲": "緄",
"绳": "繩",
"维": "維",
"绵": "綿",
"绶": "綬",
"绸": "綢",
"绹": "綯",
"绺": "綹",
"绻": "綣",
"综": "綜",
"绽": "綻",
"绾": "綰",
"缀": "綴",
"缁": "緇",
"缂": "緙",
"缃": "緗",
"缄": "緘",
"缅": "緬",
"缆": "纜",
"缇": "緹",
"缈": "緲",
"缉": "緝",
"缊": "縕",
"缋": "繢",
"缌": "緦",
"缍": "綞",
"缎": "緞",
"缏": "緶",
"缑": "緱",
"缒": "縋",
"缓": "緩",
"缔": "締",
"缕": "縷",
"编": "編",
"缗": "緡",
"缘": "緣",
"缙": "縉",
"缚": "縛",
"缛": "縟",
"缜": "縝",
"缝": "縫",
"缞": "縗",
"缟": "縞",
"缠": "纏",
"缡": "縭",
"缢": "縊",
"缣": "縑",
"缤": "繽",
"缥": "縹",
"缦": "縵",
"缧": "縲",
"缨": "纓",
"缩": "縮",
"缪": "繆",
"缫": "繅",
"缬": "纈",
"缭": "繚",
"缮": "繕",
"缯": "繒",
"缱": "繾",
"缲": "繰",
"缳": "繯",
"缴": "繳",
"缵": "纘",
"罂": "罌",
"网": "網",
"罗": "羅",
"罚": "罰",
"罢": "罷",
"罴": "羆",
"羁": "羈",
"羟": "羥",
"翘": "翹",
"耢": "耮",
"耧": "耬",
"耸": "聳",
"耻": "恥",
"聂": "聶",
"聋": "聾",
"职": "職",
"聍": "聹",
"联": "聯",
"聩": "聵",
"聪": "聰",
"肃": "肅",
"肠": "腸",
"肤": "膚",
"肮": "骯",
"肴": "餚",
"肾": "腎",
"肿": "腫",
"胀": "脹",
"胁": "脅",
"胆": "膽",
"胧": "朧",
"胨": "腖",
"胪": "臚",
"胫": "脛",
"胶": "膠",
"脉": "脈",
"脍": "膾",
"脐": "臍",
"脑": "腦",
"脓": "膿",
"脔": "臠",
"脚": "腳",
"脱": "脫",
"脶": "腡",
"脸": "臉",
"腭": "齶",
"腻": "膩",
"腼": "靦",
"腽": "膃",
"腾": "騰",
"膑": "臏",
"臜": "臢",
"舆": "輿",
"舣": "艤",
"舰": "艦",
"舱": "艙",
"舻": "艫",
"艰": "艱",
"艳": "艷",
"艺": "藝",
"节": "節",
"芈": "羋",
"芗": "薌",
"芜": "蕪",
"芦": "蘆",
"苁": "蓯",
"苇": "葦",
"苈": "藶",
"苋": "莧",
"苌": "萇",
"苍": "蒼",
"苎": "苧",
"茎": "莖",
"茏": "蘢",
"茑": "蔦",
"茔": "塋",
"茕": "煢",
"茧": "繭",
"荆": "荊",
"荐": "薦",
"荙": "薘",
"荚": "莢",
"荛": "蕘",
"荜": "蓽",
"荞": "蕎",
"荟": "薈",
"荠": "薺",
"荡": "蕩",
"荣": "榮",
"荤": "葷",
"荥": "滎",
"荦": "犖",
"荧": "熒",
"荨": "蕁",
"荩": "藎",
"荪": "蓀",
"荫": "蔭",
"荬": "蕒",
"荭": "葒",
"荮": "葤",
"莅": "蒞",
"莱": "萊",
"莲": "蓮",
"莳": "蒔",
"莴": "萵",
"莶": "薟",
"莸": "蕕",
"莹": "瑩",
"莺": "鶯",
"萝": "蘿",
"萤": "螢",
"营": "營",
"萦": "縈",
"萧": "蕭",
"萨": "薩",
"葱": "蔥",
"蒇": "蕆",
"蒉": "蕢",
"蒋": "蔣",
"蒌": "蔞",
"蓝": "藍",
"蓟": "薊",
"蓠": "蘺",
"蓣": "蕷",
"蓥": "鎣",
"蓦": "驀",
"蔂": "虆",
"蔷": "薔",
"蔹": "蘞",
"蔺": "藺",
"蔼": "藹",
"蕰": "薀",
"蕲": "蘄",
"薮": "藪",
"藓": "蘚",
"蘖": "櫱",
"虏": "虜",
"虑": "慮",
"虚": "虛",
"虬": "虯",
"虮": "蟣",
"虽": "雖",
"虾": "蝦",
"虿": "蠆",
"蚀": "蝕",
"蚁": "蟻",
"蚂": "螞",
"蚕": "蠶",
"蚬": "蜆",
"蛊": "蠱",
"蛎": "蠣",
"蛏": "蟶",
"蛮": "蠻",
"蛰": "蟄",
"蛱": "蛺",
"蛲": "蟯",
"蛳": "螄",
"蛴": "蠐",
"蜕": "蛻",
"蜗": "蝸",
"蝇": "蠅",
"蝈": "蟈",
"蝉": "蟬",
"蝼": "螻",
"蝾": "蠑",
"螀": "螿",
"螨": "蟎",
"蟏": "蠨",
"衅": "釁",
"衔": "銜",
"补": "補",
"衬": "襯",
"衮": "袞",
"袄": "襖",
"袅": "裊",
"袆": "褘",
"袜": "襪",
"袭": "襲",
"袯": "襏",
"装": "裝",
"裆": "襠",
"裈": "褌",
"裢": "褳",
"裣": "襝",
"裤": "褲",
"裥": "襇",
"褛": "褸",
"褴": "襤",
"见": "見",
"观": "觀",
"觃": "覎",
"规": "規",
"觅": "覓",
"视": "視",
"觇": "覘",
"览": "覽",
"觉": "覺",
"觊": "覬",
"觋": "覡",
"觌": "覿",
"觍": "覥",
"觎": "覦",
"觏": "覯",
"觐": "覲",
"觑": "覷",
"觞": "觴",
"触": "觸",
"觯": "觶",
"訚": "誾",
"䜣": "訢",
"誉": "譽",
"誊": "謄",
"讠": "訁",
"计": "計",
"订": "訂",
"讣": "訃",
"认": "認",
"讥": "譏",
"讦": "訐",
"讧": "訌",
"讨": "討",
"让": "讓",
"讪": "訕",
"讫": "訖",
"讬": "託",
"训": "訓",
"议": "議",
"讯": "訊",
"记": "記",
"讱": "訒",
"讲": "講",
"讳": "諱",
"讴": "謳",
"讵": "詎",
"讶": "訝",
"讷": "訥",
"许": "許",
"讹": "訛",
"论": "論",
"讻": "訩",
"讼": "訟",
"讽": "諷",
"设": "設",
"访": "訪",
"诀": "訣",
"证": "證",
"诂": "詁",
"诃": "訶",
"评": "評",
"诅": "詛",
"识": "識",
"诇": "詗",
"诈": "詐",
"诉": "訴",
"诊": "診",
"诋": "詆",
"诌": "謅",
"词": "詞",
"诎": "詘",
"诏": "詔",
"诐": "詖",
"译": "譯",
"诒": "詒",
"诓": "誆",
"诔": "誄",
"试": "試",
"诖": "詿",
"诗": "詩",
"诘": "詰",
"诙": "詼",
"诚": "誠",
"诛": "誅",
"诜": "詵",
"话": "話",
"诞": "誕",
"诟": "詬",
"诠": "詮",
"诡": "詭",
"询": "詢",
"诣": "詣",
"诤": "諍",
"该": "該",
"详": "詳",
"诧": "詫",
"诨": "諢",
"诩": "詡",
"诪": "譸",
"诫": "誡",
"诬": "誣",
"语": "語",
"诮": "誚",
"误": "誤",
"诰": "誥",
"诱": "誘",
"诲": "誨",
"诳": "誑",
"诵": "誦",
"诶": "誒",
"请": "請",
"诸": "諸",
"诹": "諏",
"诺": "諾",
"读": "讀",
"诼": "諑",
"诽": "誹",
"课": "課",
"诿": "諉",
"谀": "諛",
"谁": "誰",
"谂": "諗",
"调": "調",
"谄": "諂",
"谅": "諒",
"谆": "諄",
"谇": "誶",
"谈": "談",
"谊": "誼",
"谋": "謀",
"谌": "諶",
"谍": "諜",
"谎": "謊",
"谏": "諫",
"谐": "諧",
"谑": "謔",
"谒": "謁",
"谓": "謂",
"谔": "諤",
"谕": "諭",
"谖": "諼",
"谗": "讒",
"谘": "諮",
"谙": "諳",
"谚": "諺",
"谛": "諦",
"谜": "謎",
"谝": "諞",
"谞": "諝",
"谟": "謨",
"谠": "讜",
"谡": "謖",
"谢": "謝",
"谤": "謗",
"谥": "謚",
"谦": "謙",
"谧": "謐",
"谨": "謹",
"谩": "謾",
"谪": "謫",
"谬": "謬",
"谭": "譚",
"谮": "譖",
"谯": "譙",
"谰": "讕",
"谱": "譜",
"谲": "譎",
"谳": "讞",
"谴": "譴",
"谵": "譫",
"谶": "讖",
"豮": "豶",
"贝": "貝",
"贞": "貞",
"负": "負",
"贠": "貟",
"贡": "貢",
"财": "財",
"责": "責",
"贤": "賢",
"败": "敗",
"账": "賬",
"货": "貨",
"质": "質",
"贩": "販",
"贪": "貪",
"贫": "貧",
"贬": "貶",
"购": "購",
"贮": "貯",
"贯": "貫",
"贰": "貳",
"贱": "賤",
"贲": "賁",
"贳": "貰",
"贴": "貼",
"贵": "貴",
"贶": "貺",
"贷": "貸",
"贸": "貿",
"费": "費",
"贺": "賀",
"贻": "貽",
"贼": "賊",
"贽": "贄",
"贾": "賈",
"贿": "賄",
"赀": "貲",
"赁": "賃",
"赂": "賂",
"资": "資",
"赅": "賅",
"赆": "贐",
"赇": "賕",
"赈": "賑",
"赉": "賚",
"赊": "賒",
"赋": "賦",
"赌": "賭",
"赎": "贖",
"赏": "賞",
"赐": "賜",
"赑": "贔",
"赒": "賙",
"赓": "賡",
"赔": "賠",
"赕": "賧",
"赖": "賴",
"赗": "賵",
"赘": "贅",
"赙": "賻",
"赚": "賺",
"赛": "賽",
"赜": "賾",
"赞": "贊",
"赟": "贇",
"赠": "贈",
"赡": "贍",
"赢": "贏",
"赣": "贛",
"赪": "赬",
"赵": "趙",
"赶": "趕",
"趋": "趨",
"趱": "趲",
"趸": "躉",
"跃": "躍",
"跄": "蹌",
"跞": "躒",
"践": "踐",
"跶": "躂",
"跷": "蹺",
"跸": "蹕",
"跹": "躚",
"跻": "躋",
"踊": "踴",
"踌": "躊",
"踪": "蹤",
"踬": "躓",
"踯": "躑",
"蹑": "躡",
"蹒": "蹣",
"蹰": "躕",
"蹿": "躥",
"躏": "躪",
"躜": "躦",
"躯": "軀",
"车": "車",
"轧": "軋",
"轨": "軌",
"轩": "軒",
"轪": "軑",
"轫": "軔",
"转": "轉",
"轭": "軛",
"轮": "輪",
"软": "軟",
"轰": "轟",
"轱": "軲",
"轲": "軻",
"轳": "轤",
"轴": "軸",
"轵": "軹",
"轶": "軼",
"轷": "軤",
"轸": "軫",
"轹": "轢",
"轺": "軺",
"轻": "輕",
"轼": "軾",
"载": "載",
"轾": "輊",
"轿": "轎",
"辀": "輈",
"辁": "輇",
"辂": "輅",
"较": "較",
"辄": "輒",
"辅": "輔",
"辆": "輛",
"辇": "輦",
"辈": "輩",
"辉": "輝",
"辊": "輥",
"辋": "輞",
"辌": "輬",
"辍": "輟",
"辎": "輜",
"辏": "輳",
"辐": "輻",
"辑": "輯",
"辒": "轀",
"输": "輸",
"辔": "轡",
"辕": "轅",
"辖": "轄",
"辗": "輾",
"辘": "轆",
"辙": "轍",
"辚": "轔",
"辞": "辭",
"辩": "辯",
"辫": "辮",
"边": "邊",
"辽": "遼",
"达": "達",
"迁": "遷",
"过": "過",
"迈": "邁",
"运": "運",
"还": "還",
"这": "這",
"进": "進",
"远": "遠",
"违": "違",
"连": "連",
"迟": "遲",
"迩": "邇",
"迳": "逕",
"迹": "跡",
"选": "選",
"逊": "遜",
"递": "遞",
"逦": "邐",
"逻": "邏",
"遗": "遺",
"遥": "遙",
"邓": "鄧",
"邝": "鄺",
"邬": "鄔",
"邮": "郵",
"邹": "鄒",
"邺": "鄴",
"邻": "鄰",
"郏": "郟",
"郐": "鄶",
"郑": "鄭",
"郓": "鄆",
"郦": "酈",
"郧": "鄖",
"郸": "鄲",
"酂": "酇",
"酦": "醱",
"酱": "醬",
"酽": "釅",
"酾": "釃",
"酿": "釀",
"释": "釋",
"鉴": "鑒",
"銮": "鑾",
"錾": "鏨",
"钅": "釒",
"钆": "釓",
"钇": "釔",
"针": "針",
"钉": "釘",
"钊": "釗",
"钋": "釙",
"钌": "釕",
"钍": "釷",
"钎": "釺",
"钏": "釧",
"钐": "釤",
"钑": "鈒",
"钒": "釩",
"钓": "釣",
"钔": "鍆",
"钕": "釹",
"钖": "鍚",
"钗": "釵",
"钘": "鈃",
"钙": "鈣",
"钚": "鈈",
"钛": "鈦",
"钜": "鉅",
"钝": "鈍",
"钞": "鈔",
"钠": "鈉",
"钡": "鋇",
"钢": "鋼",
"钣": "鈑",
"钤": "鈐",
"钥": "鑰",
"钦": "欽",
"钧": "鈞",
"钨": "鎢",
"钪": "鈧",
"钫": "鈁",
"钬": "鈥",
"钭": "鈄",
"钮": "鈕",
"钯": "鈀",
"钰": "鈺",
"钱": "錢",
"钲": "鉦",
"钳": "鉗",
"钴": "鈷",
"钶": "鈳",
"钷": "鉕",
"钸": "鈽",
"钹": "鈸",
"钺": "鉞",
"钻": "鑽",
"钼": "鉬",
"钽": "鉭",
"钾": "鉀",
"钿": "鈿",
"铀": "鈾",
"铁": "鐵",
"铂": "鉑",
"铃": "鈴",
"铄": "鑠",
"铅": "鉛",
"铆": "鉚",
"铇": "鉋",
"铈": "鈰",
"铉": "鉉",
"铊": "鉈",
"铋": "鉍",
"铌": "鈮",
"铍": "鈹",
"铎": "鐸",
"铏": "鉶",
"铐": "銬",
"铑": "銠",
"铒": "鉺",
"铓": "鋩",
"铔": "錏",
"铕": "銪",
"铖": "鋮",
"铗": "鋏",
"铘": "鋣",
"铙": "鐃",
"铚": "銍",
"铛": "鐺",
"铜": "銅",
"铝": "鋁",
"铞": "銱",
"铟": "銦",
"铠": "鎧",
"铡": "鍘",
"铢": "銖",
"铣": "銑",
"铤": "鋌",
"铥": "銩",
"铦": "銛",
"铧": "鏵",
"铨": "銓",
"铩": "鎩",
"铪": "鉿",
"铫": "銚",
"铬": "鉻",
"铭": "銘",
"铮": "錚",
"铯": "銫",
"铰": "鉸",
"铱": "銥",
"铲": "鏟",
"铳": "銃",
"铴": "鐋",
"铵": "銨",
"银": "銀",
"铷": "銣",
"铸": "鑄",
"铹": "鐒",
"铺": "鋪",
"铻": "鋙",
"铼": "錸",
"铽": "鋱",
"链": "鏈",
"铿": "鏗",
"销": "銷",
"锁": "鎖",
"锂": "鋰",
"锃": "鋥",
"锄": "鋤",
"锅": "鍋",
"锆": "鋯",
"锇": "鋨",
"锉": "銼",
"锊": "鋝",
"锋": "鋒",
"锌": "鋅",
"锍": "鋶",
"锎": "鐦",
"锏": "鐧",
"锑": "銻",
"锒": "鋃",
"锓": "鋟",
"锔": "鋦",
"锕": "錒",
"锖": "錆",
"锗": "鍺",
"锘": "鍩",
"错": "錯",
"锚": "錨",
"锛": "錛",
"锜": "錡",
"锝": "鍀",
"锞": "錁",
"锟": "錕",
"锠": "錩",
"锡": "錫",
"锢": "錮",
"锣": "鑼",
"锤": "錘",
"锥": "錐",
"锦": "錦",
"锧": "鑕",
"锩": "錈",
"锪": "鍃",
"锫": "錇",
"锬": "錟",
"锭": "錠",
"键": "鍵",
"锯": "鋸",
"锰": "錳",
"锱": "錙",
"锲": "鍥",
"锳": "鍈",
"锴": "鍇",
"锵": "鏘",
"锶": "鍶",
"锷": "鍔",
"锸": "鍤",
"锹": "鍬",
"锺": "鍾",
"锻": "鍛",
"锼": "鎪",
"锽": "鍠",
"锾": "鍰",
"锿": "鎄",
"镀": "鍍",
"镁": "鎂",
"镂": "鏤",
"镃": "鎡",
"镄": "鐨",
"镅": "鎇",
"镆": "鏌",
"镇": "鎮",
"镈": "鎛",
"镉": "鎘",
"镊": "鑷",
"镋": "鎲",
"镍": "鎳",
"镎": "鎿",
"镏": "鎦",
"镐": "鎬",
"镑": "鎊",
"镒": "鎰",
"镓": "鎵",
"镔": "鑌",
"镕": "鎔",
"镖": "鏢",
"镗": "鏜",
"镘": "鏝",
"镙": "鏍",
"镚": "鏰",
"镛": "鏞",
"镜": "鏡",
"镝": "鏑",
"镞": "鏃",
"镟": "鏇",
"镠": "鏐",
"镡": "鐔",
"镣": "鐐",
"镤": "鏷",
"镥": "鑥",
"镦": "鐓",
"镧": "鑭",
"镨": "鐠",
"镩": "鑹",
"镪": "鏹",
"镫": "鐙",
"镬": "鑊",
"镭": "鐳",
"镮": "鐶",
"镯": "鐲",
"镰": "鐮",
"镱": "鐿",
"镲": "鑔",
"镳": "鑣",
"镴": "鑞",
"镵": "鑱",
"镶": "鑲",
"长": "長",
"门": "門",
"闩": "閂",
"闪": "閃",
"闫": "閆",
"闬": "閈",
"闭": "閉",
"问": "問",
"闯": "闖",
"闰": "閏",
"闱": "闈",
"闲": "閑",
"闳": "閎",
"间": "間",
"闵": "閔",
"闶": "閌",
"闷": "悶",
"闸": "閘",
"闹": "鬧",
"闺": "閨",
"闻": "聞",
"闼": "闥",
"闽": "閩",
"闾": "閭",
"闿": "闓",
"阀": "閥",
"阁": "閣",
"阂": "閡",
"阃": "閫",
"阄": "鬮",
"阆": "閬",
"阇": "闍",
"阈": "閾",
"阉": "閹",
"阊": "閶",
"阋": "鬩",
"阌": "閿",
"阍": "閽",
"阎": "閻",
"阏": "閼",
"阐": "闡",
"阑": "闌",
"阒": "闃",
"阓": "闠",
"阔": "闊",
"阕": "闋",
"阖": "闔",
"阗": "闐",
"阘": "闒",
"阙": "闕",
"阚": "闞",
"阛": "闤",
"队": "隊",
"阳": "陽",
"阴": "陰",
"阵": "陣",
"阶": "階",
"际": "際",
"陆": "陸",
"陇": "隴",
"陈": "陳",
"陉": "陘",
"陕": "陝",
"陧": "隉",
"陨": "隕",
"险": "險",
"随": "隨",
"隐": "隱",
"隶": "隸",
"隽": "雋",
"难": "難",
"雏": "雛",
"雠": "讎",
"雳": "靂",
"雾": "霧",
"霁": "霽",
"霡": "霢",
"霭": "靄",
"靓": "靚",
"静": "靜",
"靥": "靨",
"鞑": "韃",
"鞒": "鞽",
"鞯": "韉",
"韦": "韋",
"韧": "韌",
"韨": "韍",
"韩": "韓",
"韪": "韙",
"韫": "韞",
"韬": "韜",
"韵": "韻",
"页": "頁",
"顶": "頂",
"顷": "頃",
"顸": "頇",
"项": "項",
"顺": "順",
"顼": "頊",
"顽": "頑",
"顾": "顧",
"顿": "頓",
"颀": "頎",
"颁": "頒",
"颂": "頌",
"颃": "頏",
"预": "預",
"颅": "顱",
"领": "領",
"颇": "頗",
"颈": "頸",
"颉": "頡",
"颊": "頰",
"颋": "頲",
"颌": "頜",
"颍": "潁",
"颎": "熲",
"颏": "頦",
"颐": "頤",
"频": "頻",
"颒": "頮",
"颔": "頷",
"颕": "頴",
"颖": "穎",
"颗": "顆",
"题": "題",
"颙": "顒",
"颚": "顎",
"颛": "顓",
"额": "額",
"颞": "顳",
"颟": "顢",
"颠": "顛",
"颡": "顙",
"颢": "顥",
"颤": "顫",
"颥": "顬",
"颦": "顰",
"颧": "顴",
"风": "風",
"飏": "颺",
"飐": "颭",
"飑": "颮",
"飒": "颯",
"飓": "颶",
"飔": "颸",
"飕": "颼",
"飖": "颻",
"飗": "飀",
"飘": "飄",
"飙": "飆",
"飚": "飈",
"飞": "飛",
"飨": "饗",
"餍": "饜",
"饣": "飠",
"饤": "飣",
"饦": "飥",
"饧": "餳",
"饨": "飩",
"饩": "餼",
"饪": "飪",
"饫": "飫",
"饬": "飭",
"饭": "飯",
"饮": "飲",
"饯": "餞",
"饰": "飾",
"饱": "飽",
"饲": "飼",
"饳": "飿",
"饴": "飴",
"饵": "餌",
"饶": "饒",
"饷": "餉",
"饸": "餄",
"饹": "餎",
"饺": "餃",
"饻": "餏",
"饼": "餅",
"饽": "餑",
"饾": "餖",
"饿": "餓",
"馀": "餘",
"馁": "餒",
"馂": "餕",
"馃": "餜",
"馄": "餛",
"馅": "餡",
"馆": "館",
"馇": "餷",
"馈": "饋",
"馉": "餶",
"馊": "餿",
"馋": "饞",
"馌": "饁",
"馍": "饃",
"馎": "餺",
"馏": "餾",
"馐": "饈",
"馑": "饉",
"馒": "饅",
"馓": "饊",
"馔": "饌",
"馕": "饢",
"马": "馬",
"驭": "馭",
"驮": "馱",
"驯": "馴",
"驰": "馳",
"驱": "驅",
"驲": "馹",
"驳": "駁",
"驴": "驢",
"驵": "駔",
"驶": "駛",
"驷": "駟",
"驸": "駙",
"驹": "駒",
"驺": "騶",
"驻": "駐",
"驼": "駝",
"驽": "駑",
"驾": "駕",
"驿": "驛",
"骀": "駘",
"骁": "驍",
"骃": "駰",
"骄": "驕",
"骅": "驊",
"骆": "駱",
"骇": "駭",
"骈": "駢",
"骉": "驫",
"骊": "驪",
"骋": "騁",
"验": "驗",
"骍": "騂",
"骎": "駸",
"骏": "駿",
"骐": "騏",
"骑": "騎",
"骒": "騍",
"骓": "騅",
"骔": "騌",
"骕": "驌",
"骖": "驂",
"骗": "騙",
"骘": "騭",
"骙": "騤",
"骚": "騷",
"骛": "騖",
"骜": "驁",
"骝": "騮",
"骞": "騫",
"骟": "騸",
"骠": "驃",
"骡": "騾",
"骢": "驄",
"骣": "驏",
"骤": "驟",
"骥": "驥",
"骦": "驦",
"骧": "驤",
"髅": "髏",
"髋": "髖",
"髌": "髕",
"鬓": "鬢",
"魇": "魘",
"魉": "魎",
"鱼": "魚",
"鱽": "魛",
"鱾": "魢",
"鱿": "魷",
"鲀": "魨",
"鲁": "魯",
"鲂": "魴",
"鲃": "䰾",
"鲄": "魺",
"鲅": "鮁",
"鲆": "鮃",
"鲈": "鱸",
"鲉": "鮋",
"鲊": "鮓",
"鲋": "鮒",
"鲌": "鮊",
"鲍": "鮑",
"鲎": "鱟",
"鲏": "鮍",
"鲐": "鮐",
"鲑": "鮭",
"鲒": "鮚",
"鲓": "鮳",
"鲔": "鮪",
"鲕": "鮞",
"鲖": "鮦",
"鲗": "鰂",
"鲘": "鮜",
"鲙": "鱠",
"鲚": "鱭",
"鲛": "鮫",
"鲜": "鮮",
"鲝": "鮺",
"鲟": "鱘",
"鲠": "鯁",
"鲡": "鱺",
"鲢": "鰱",
"鲣": "鰹",
"鲤": "鯉",
"鲥": "鰣",
"鲦": "鰷",
"鲧": "鯀",
"鲨": "鯊",
"鲩": "鯇",
"鲪": "鮶",
"鲫": "鯽",
"鲬": "鯒",
"鲭": "鯖",
"鲮": "鯪",
"鲯": "鯕",
"鲰": "鯫",
"鲱": "鯡",
"鲲": "鯤",
"鲳": "鯧",
"鲴": "鯝",
"鲵": "鯢",
"鲶": "鯰",
"鲷": "鯛",
"鲸": "鯨",
"鲹": "鰺",
"鲺": "鯴",
"鲻": "鯔",
"鲼": "鱝",
"鲽": "鰈",
"鲾": "鰏",
"鲿": "鱨",
"鳀": "鯷",
"鳁": "鰮",
"鳂": "鰃",
"鳃": "鰓",
"鳅": "鰍",
"鳆": "鰒",
"鳇": "鰉",
"鳈": "鰁",
"鳉": "鱂",
"鳊": "鯿",
"鳋": "鰠",
"鳌": "鰲",
"鳍": "鰭",
"鳎": "鰨",
"鳏": "鰥",
"鳐": "鰩",
"鳑": "鰟",
"鳒": "鰜",
"鳓": "鰳",
"鳔": "鰾",
"鳕": "鱈",
"鳖": "鱉",
"鳗": "鰻",
"鳘": "鰵",
"鳙": "鱅",
"鳚": "䲁",
"鳛": "鰼",
"鳜": "鱖",
"鳝": "鱔",
"鳞": "鱗",
"鳟": "鱒",
"鳠": "鱯",
"鳡": "鱤",
"鳢": "鱧",
"鳣": "鱣",
"䴓": "鳾",
"䴕": "鴷",
"䴔": "鵁",
"䴖": "鶄",
"䴗": "鶪",
"䴘": "鷈",
"䴙": "鷿",
"鸟": "鳥",
"鸠": "鳩",
"鸢": "鳶",
"鸣": "鳴",
"鸤": "鳲",
"鸥": "鷗",
"鸦": "鴉",
"鸧": "鶬",
"鸨": "鴇",
"鸩": "鴆",
"鸪": "鴣",
"鸫": "鶇",
"鸬": "鸕",
"鸭": "鴨",
"鸮": "鴞",
"鸯": "鴦",
"鸰": "鴒",
"鸱": "鴟",
"鸲": "鴝",
"鸳": "鴛",
"鸴": "鷽",
"鸵": "鴕",
"鸶": "鷥",
"鸷": "鷙",
"鸸": "鴯",
"鸹": "鴰",
"鸺": "鵂",
"鸻": "鴴",
"鸼": "鵃",
"鸽": "鴿",
"鸾": "鸞",
"鸿": "鴻",
"鹀": "鵐",
"鹁": "鵓",
"鹂": "鸝",
"鹃": "鵑",
"鹄": "鵠",
"鹅": "鵝",
"鹆": "鵒",
"鹇": "鷳",
"鹈": "鵜",
"鹉": "鵡",
"鹊": "鵲",
"鹋": "鶓",
"鹌": "鵪",
"鹍": "鵾",
"鹎": "鵯",
"鹏": "鵬",
"鹐": "鵮",
"鹑": "鶉",
"鹒": "鶊",
"鹓": "鵷",
"鹔": "鷫",
"鹕": "鶘",
"鹖": "鶡",
"鹗": "鶚",
"鹘": "鶻",
"鹙": "鶖",
"鹛": "鶥",
"鹜": "鶩",
"鹝": "鷊",
"鹞": "鷂",
"鹟": "鶲",
"鹠": "鶹",
"鹡": "鶺",
"鹢": "鷁",
"鹣": "鶼",
"鹤": "鶴",
"鹥": "鷖",
"鹦": "鸚",
"鹧": "鷓",
"鹨": "鷚",
"鹩": "鷯",
"鹪": "鷦",
"鹫": "鷲",
"鹬": "鷸",
"鹭": "鷺",
"鹯": "鸇",
"鹰": "鷹",
"鹱": "鸌",
"鹲": "鸏",
"鹳": "鸛",
"鹴": "鸘",
"鹾": "鹺",
"麦": "麥",
"麸": "麩",
"麽": "麼",
"黄": "黃",
"黉": "黌",
"黡": "黶",
"黩": "黷",
"黪": "黲",
"黾": "黽",
"鼋": "黿",
"鼍": "鼉",
"鼗": "鞀",
"鼹": "鼴",
"齐": "齊",
"齑": "齏",
"齿": "齒",
"龀": "齔",
"龁": "齕",
"龂": "齗",
"龃": "齟",
"龄": "齡",
"龅": "齙",
"龆": "齠",
"龇": "齜",
"龈": "齦",
"龉": "齬",
"龊": "齪",
"龋": "齲",
"龌": "齷",
"龙": "龍",
"龚": "龔",
"龛": "龕",
"龟": "龜"
}, t.wiki_t2s = {
"䊷": "䌶",
"𧩙": "䜥",
"万": "万",
"与": "与",
"丑": "丑",
"丟": "丢",
"並": "并",
"丰": "丰",
"么": "么",
"乾": "干",
"亂": "乱",
"于": "于",
"云": "云",
"亙": "亘",
"亞": "亚",
"仆": "仆",
"价": "价",
"伙": "伙",
"佇": "伫",
"佈": "布",
"体": "体",
"余": "馀",
"佣": "佣",
"併": "并",
"來": "来",
"侖": "仑",
"侶": "侣",
"俁": "俣",
"係": "系",
"俔": "伣",
"俠": "侠",
"倀": "伥",
"倆": "俩",
"倈": "俫",
"倉": "仓",
"個": "个",
"們": "们",
"倫": "伦",
"偉": "伟",
"側": "侧",
"偵": "侦",
"偽": "伪",
"傑": "杰",
"傖": "伧",
"傘": "伞",
"備": "备",
"傢": "家",
"傭": "佣",
"傯": "偬",
"傳": "传",
"傴": "伛",
"債": "债",
"傷": "伤",
"傾": "倾",
"僂": "偻",
"僅": "仅",
"僉": "佥",
"僑": "侨",
"僕": "仆",
"僞": "伪",
"僥": "侥",
"僨": "偾",
"價": "价",
"儀": "仪",
"儂": "侬",
"億": "亿",
"儈": "侩",
"儉": "俭",
"儐": "傧",
"儔": "俦",
"儕": "侪",
"儘": "尽",
"償": "偿",
"優": "优",
"儲": "储",
"儷": "俪",
"儺": "傩",
"儻": "傥",
"儼": "俨",
"儿": "儿",
"兇": "凶",
"兌": "兑",
"兒": "儿",
"兗": "兖",
"党": "党",
"內": "内",
"兩": "两",
"冊": "册",
"冪": "幂",
"准": "准",
"凈": "净",
"凍": "冻",
"凜": "凛",
"几": "几",
"凭": "凭",
"凱": "凯",
"划": "划",
"別": "别",
"刪": "删",
"剄": "刭",
"則": "则",
"剋": "克",
"剎": "刹",
"剗": "刬",
"剛": "刚",
"剝": "剥",
"剮": "剐",
"剴": "剀",
"創": "创",
"劃": "划",
"劇": "剧",
"劉": "刘",
"劊": "刽",
"劌": "刿",
"劍": "剑",
"劑": "剂",
"勁": "劲",
"動": "动",
"務": "务",
"勛": "勋",
"勝": "胜",
"勞": "劳",
"勢": "势",
"勩": "勚",
"勱": "劢",
"勵": "励",
"勸": "劝",
"勻": "匀",
"匭": "匦",
"匯": "汇",
"匱": "匮",
"區": "区",
"協": "协",
"卷": "卷",
"卻": "却",
"厂": "厂",
"厙": "厍",
"厠": "厕",
"厭": "厌",
"厲": "厉",
"厴": "厣",
"參": "参",
"叄": "叁",
"叢": "丛",
"台": "台",
"叶": "叶",
"吁": "吁",
"吊": "吊",
"后": "后",
"吒": "咤",
"吳": "吴",
"吶": "呐",
"呂": "吕",
"咸": "咸",
"咼": "呙",
"員": "员",
"唄": "呗",
"唚": "吣",
"問": "问",
"啓": "启",
"啞": "哑",
"啟": "启",
"啢": "唡",
"喎": "㖞",
"喚": "唤",
"喪": "丧",
"喬": "乔",
"單": "单",
"喲": "哟",
"嗆": "呛",
"嗇": "啬",
"嗊": "唝",
"嗎": "吗",
"嗚": "呜",
"嗩": "唢",
"嗶": "哔",
"嘆": "叹",
"嘍": "喽",
"嘔": "呕",
"嘖": "啧",
"嘗": "尝",
"嘜": "唛",
"嘩": "哗",
"嘮": "唠",
"嘯": "啸",
"嘰": "叽",
"嘵": "哓",
"嘸": "呒",
"嘽": "啴",
"噁": "恶",
"噓": "嘘",
"噝": "咝",
"噠": "哒",
"噥": "哝",
"噦": "哕",
"噯": "嗳",
"噲": "哙",
"噴": "喷",
"噸": "吨",
"噹": "当",
"嚀": "咛",
"嚇": "吓",
"嚌": "哜",
"嚕": "噜",
"嚙": "啮",
"嚥": "咽",
"嚦": "呖",
"嚨": "咙",
"嚮": "向",
"嚲": "亸",
"嚳": "喾",
"嚴": "严",
"嚶": "嘤",
"囀": "啭",
"囁": "嗫",
"囂": "嚣",
"囅": "冁",
"囈": "呓",
"囌": "苏",
"囑": "嘱",
"囘": "回",
"囪": "囱",
"圇": "囵",
"國": "国",
"圍": "围",
"園": "园",
"圓": "圆",
"圖": "图",
"團": "团",
"坏": "坏",
"垵": "埯",
"埡": "垭",
"埰": "采",
"執": "执",
"堅": "坚",
"堊": "垩",
"堖": "垴",
"堝": "埚",
"堯": "尧",
"報": "报",
"場": "场",
"塊": "块",
"塋": "茔",
"塏": "垲",
"塒": "埘",
"塗": "涂",
"塚": "冢",
"塢": "坞",
"塤": "埙",
"塵": "尘",
"塹": "堑",
"墊": "垫",
"墜": "坠",
"墮": "堕",
"墳": "坟",
"墻": "墙",
"墾": "垦",
"壇": "坛",
"壈": "𡒄",
"壋": "垱",
"壓": "压",
"壘": "垒",
"壙": "圹",
"壚": "垆",
"壞": "坏",
"壟": "垄",
"壠": "垅",
"壢": "坜",
"壩": "坝",
"壯": "壮",
"壺": "壶",
"壼": "壸",
"壽": "寿",
"夠": "够",
"夢": "梦",
"夾": "夹",
"奐": "奂",
"奧": "奥",
"奩": "奁",
"奪": "夺",
"奬": "奖",
"奮": "奋",
"奼": "姹",
"妝": "妆",
"姍": "姗",
"姦": "奸",
"娛": "娱",
"婁": "娄",
"婦": "妇",
"婭": "娅",
"媧": "娲",
"媯": "妫",
"媼": "媪",
"媽": "妈",
"嫗": "妪",
"嫵": "妩",
"嫻": "娴",
"嫿": "婳",
"嬀": "妫",
"嬈": "娆",
"嬋": "婵",
"嬌": "娇",
"嬙": "嫱",
"嬡": "嫒",
"嬤": "嬷",
"嬪": "嫔",
"嬰": "婴",
"嬸": "婶",
"孌": "娈",
"孫": "孙",
"學": "学",
"孿": "孪",
"宁": "宁",
"宮": "宫",
"寢": "寝",
"實": "实",
"寧": "宁",
"審": "审",
"寫": "写",
"寬": "宽",
"寵": "宠",
"寶": "宝",
"將": "将",
"專": "专",
"尋": "寻",
"對": "对",
"導": "导",
"尷": "尴",
"屆": "届",
"屍": "尸",
"屓": "屃",
"屜": "屉",
"屢": "屡",
"層": "层",
"屨": "屦",
"屬": "属",
"岡": "冈",
"峴": "岘",
"島": "岛",
"峽": "峡",
"崍": "崃",
"崗": "岗",
"崢": "峥",
"崬": "岽",
"嵐": "岚",
"嶁": "嵝",
"嶄": "崭",
"嶇": "岖",
"嶔": "嵚",
"嶗": "崂",
"嶠": "峤",
"嶢": "峣",
"嶧": "峄",
"嶮": "崄",
"嶴": "岙",
"嶸": "嵘",
"嶺": "岭",
"嶼": "屿",
"嶽": "岳",
"巋": "岿",
"巒": "峦",
"巔": "巅",
"巰": "巯",
"帘": "帘",
"帥": "帅",
"師": "师",
"帳": "帐",
"帶": "带",
"幀": "帧",
"幃": "帏",
"幗": "帼",
"幘": "帻",
"幟": "帜",
"幣": "币",
"幫": "帮",
"幬": "帱",
"干": "干",
"并": "并",
"幹": "干",
"幺": "么",
"幾": "几",
"广": "广",
"庫": "库",
"廁": "厕",
"廂": "厢",
"廄": "厩",
"廈": "厦",
"廚": "厨",
"廝": "厮",
"廟": "庙",
"廠": "厂",
"廡": "庑",
"廢": "废",
"廣": "广",
"廩": "廪",
"廬": "庐",
"廳": "厅",
"弒": "弑",
"弳": "弪",
"張": "张",
"強": "强",
"彆": "别",
"彈": "弹",
"彌": "弥",
"彎": "弯",
"彔": "录",
"彙": "汇",
"彞": "彝",
"彥": "彦",
"征": "征",
"後": "后",
"徑": "径",
"從": "从",
"徠": "徕",
"復": "复",
"徵": "征",
"徹": "彻",
"恆": "恒",
"恥": "耻",
"悅": "悦",
"悞": "悮",
"悵": "怅",
"悶": "闷",
"惡": "恶",
"惱": "恼",
"惲": "恽",
"惻": "恻",
"愛": "爱",
"愜": "惬",
"愨": "悫",
"愴": "怆",
"愷": "恺",
"愾": "忾",
"愿": "愿",
"慄": "栗",
"態": "态",
"慍": "愠",
"慘": "惨",
"慚": "惭",
"慟": "恸",
"慣": "惯",
"慤": "悫",
"慪": "怄",
"慫": "怂",
"慮": "虑",
"慳": "悭",
"慶": "庆",
"憂": "忧",
"憊": "惫",
"憐": "怜",
"憑": "凭",
"憒": "愦",
"憚": "惮",
"憤": "愤",
"憫": "悯",
"憮": "怃",
"憲": "宪",
"憶": "忆",
"懇": "恳",
"應": "应",
"懌": "怿",
"懍": "懔",
"懞": "蒙",
"懟": "怼",
"懣": "懑",
"懨": "恹",
"懲": "惩",
"懶": "懒",
"懷": "怀",
"懸": "悬",
"懺": "忏",
"懼": "惧",
"懾": "慑",
"戀": "恋",
"戇": "戆",
"戔": "戋",
"戧": "戗",
"戩": "戬",
"戰": "战",
"戱": "戯",
"戲": "戏",
"戶": "户",
"担": "担",
"拋": "抛",
"拾": "十",
"挩": "捝",
"挾": "挟",
"捨": "舍",
"捫": "扪",
"据": "据",
"掃": "扫",
"掄": "抡",
"掗": "挜",
"掙": "挣",
"掛": "挂",
"採": "采",
"揀": "拣",
"揚": "扬",
"換": "换",
"揮": "挥",
"損": "损",
"搖": "摇",
"搗": "捣",
"搵": "揾",
"搶": "抢",
"摑": "掴",
"摜": "掼",
"摟": "搂",
"摯": "挚",
"摳": "抠",
"摶": "抟",
"摺": "折",
"摻": "掺",
"撈": "捞",
"撏": "挦",
"撐": "撑",
"撓": "挠",
"撝": "㧑",
"撟": "挢",
"撣": "掸",
"撥": "拨",
"撫": "抚",
"撲": "扑",
"撳": "揿",
"撻": "挞",
"撾": "挝",
"撿": "捡",
"擁": "拥",
"擄": "掳",
"擇": "择",
"擊": "击",
"擋": "挡",
"擓": "㧟",
"擔": "担",
"據": "据",
"擠": "挤",
"擬": "拟",
"擯": "摈",
"擰": "拧",
"擱": "搁",
"擲": "掷",
"擴": "扩",
"擷": "撷",
"擺": "摆",
"擻": "擞",
"擼": "撸",
"擾": "扰",
"攄": "摅",
"攆": "撵",
"攏": "拢",
"攔": "拦",
"攖": "撄",
"攙": "搀",
"攛": "撺",
"攜": "携",
"攝": "摄",
"攢": "攒",
"攣": "挛",
"攤": "摊",
"攪": "搅",
"攬": "揽",
"敗": "败",
"敘": "叙",
"敵": "敌",
"數": "数",
"斂": "敛",
"斃": "毙",
"斕": "斓",
"斗": "斗",
"斬": "斩",
"斷": "断",
"於": "于",
"時": "时",
"晉": "晋",
"晝": "昼",
"暈": "晕",
"暉": "晖",
"暘": "旸",
"暢": "畅",
"暨": "及",
"暫": "暂",
"曄": "晔",
"曆": "历",
"曇": "昙",
"曉": "晓",
"曏": "向",
"曖": "暧",
"曠": "旷",
"曨": "昽",
"曬": "晒",
"書": "书",
"會": "会",
"朧": "胧",
"朮": "术",
"東": "东",
"杴": "锨",
"极": "极",
"柜": "柜",
"柵": "栅",
"桿": "杆",
"梔": "栀",
"梘": "枧",
"條": "条",
"梟": "枭",
"梲": "棁",
"棄": "弃",
"棖": "枨",
"棗": "枣",
"棟": "栋",
"棧": "栈",
"棲": "栖",
"棶": "梾",
"椏": "桠",
"楊": "杨",
"楓": "枫",
"楨": "桢",
"業": "业",
"極": "极",
"榦": "干",
"榪": "杩",
"榮": "荣",
"榲": "榅",
"榿": "桤",
"構": "构",
"槍": "枪",
"槤": "梿",
"槧": "椠",
"槨": "椁",
"槳": "桨",
"樁": "桩",
"樂": "乐",
"樅": "枞",
"樓": "楼",
"標": "标",
"樞": "枢",
"樣": "样",
"樸": "朴",
"樹": "树",
"樺": "桦",
"橈": "桡",
"橋": "桥",
"機": "机",
"橢": "椭",
"橫": "横",
"檁": "檩",
"檉": "柽",
"檔": "档",
"檜": "桧",
"檟": "槚",
"檢": "检",
"檣": "樯",
"檮": "梼",
"檯": "台",
"檳": "槟",
"檸": "柠",
"檻": "槛",
"櫃": "柜",
"櫓": "橹",
"櫚": "榈",
"櫛": "栉",
"櫝": "椟",
"櫞": "橼",
"櫟": "栎",
"櫥": "橱",
"櫧": "槠",
"櫨": "栌",
"櫪": "枥",
"櫫": "橥",
"櫬": "榇",
"櫱": "蘖",
"櫳": "栊",
"櫸": "榉",
"櫻": "樱",
"欄": "栏",
"權": "权",
"欏": "椤",
"欒": "栾",
"欖": "榄",
"欞": "棂",
"欽": "钦",
"歐": "欧",
"歟": "欤",
"歡": "欢",
"歲": "岁",
"歷": "历",
"歸": "归",
"歿": "殁",
"殘": "残",
"殞": "殒",
"殤": "殇",
"殨": "㱮",
"殫": "殚",
"殮": "殓",
"殯": "殡",
"殲": "歼",
"殺": "杀",
"殻": "壳",
"殼": "壳",
"毀": "毁",
"毆": "殴",
"毿": "毵",
"氂": "牦",
"氈": "毡",
"氌": "氇",
"氣": "气",
"氫": "氢",
"氬": "氩",
"氳": "氲",
"汙": "污",
"決": "决",
"沈": "沉",
"沒": "没",
"沖": "冲",
"況": "况",
"洶": "汹",
"浹": "浃",
"涇": "泾",
"涼": "凉",
"淀": "淀",
"淒": "凄",
"淚": "泪",
"淥": "渌",
"淨": "净",
"淩": "凌",
"淪": "沦",
"淵": "渊",
"淶": "涞",
"淺": "浅",
"渙": "涣",
"減": "减",
"渦": "涡",
"測": "测",
"渾": "浑",
"湊": "凑",
"湞": "浈",
"湯": "汤",
"溈": "沩",
"準": "准",
"溝": "沟",
"溫": "温",
"滄": "沧",
"滅": "灭",
"滌": "涤",
"滎": "荥",
"滬": "沪",
"滯": "滞",
"滲": "渗",
"滷": "卤",
"滸": "浒",
"滻": "浐",
"滾": "滚",
"滿": "满",
"漁": "渔",
"漚": "沤",
"漢": "汉",
"漣": "涟",
"漬": "渍",
"漲": "涨",
"漵": "溆",
"漸": "渐",
"漿": "浆",
"潁": "颍",
"潑": "泼",
"潔": "洁",
"潙": "沩",
"潛": "潜",
"潤": "润",
"潯": "浔",
"潰": "溃",
"潷": "滗",
"潿": "涠",
"澀": "涩",
"澆": "浇",
"澇": "涝",
"澐": "沄",
"澗": "涧",
"澠": "渑",
"澤": "泽",
"澦": "滪",
"澩": "泶",
"澮": "浍",
"澱": "淀",
"濁": "浊",
"濃": "浓",
"濕": "湿",
"濘": "泞",
"濛": "蒙",
"濟": "济",
"濤": "涛",
"濫": "滥",
"濰": "潍",
"濱": "滨",
"濺": "溅",
"濼": "泺",
"濾": "滤",
"瀅": "滢",
"瀆": "渎",
"瀉": "泻",
"瀋": "沈",
"瀏": "浏",
"瀕": "濒",
"瀘": "泸",
"瀝": "沥",
"瀟": "潇",
"瀠": "潆",
"瀦": "潴",
"瀧": "泷",
"瀨": "濑",
"瀰": "弥",
"瀲": "潋",
"瀾": "澜",
"灃": "沣",
"灄": "滠",
"灑": "洒",
"灕": "漓",
"灘": "滩",
"灝": "灏",
"灠": "漤",
"灣": "湾",
"灤": "滦",
"灧": "滟",
"災": "灾",
"為": "为",
"烏": "乌",
"烴": "烃",
"無": "无",
"煉": "炼",
"煒": "炜",
"煙": "烟",
"煢": "茕",
"煥": "焕",
"煩": "烦",
"煬": "炀",
"熅": "煴",
"熒": "荧",
"熗": "炝",
"熱": "热",
"熲": "颎",
"熾": "炽",
"燁": "烨",
"燈": "灯",
"燉": "炖",
"燒": "烧",
"燙": "烫",
"燜": "焖",
"營": "营",
"燦": "灿",
"燭": "烛",
"燴": "烩",
"燼": "烬",
"燾": "焘",
"爍": "烁",
"爐": "炉",
"爛": "烂",
"爭": "争",
"爲": "为",
"爺": "爷",
"爾": "尔",
"牆": "墙",
"牘": "牍",
"牽": "牵",
"犖": "荦",
"犢": "犊",
"犧": "牺",
"狀": "状",
"狹": "狭",
"狽": "狈",
"猙": "狰",
"猶": "犹",
"猻": "狲",
"獁": "犸",
"獄": "狱",
"獅": "狮",
"獎": "奖",
"獨": "独",
"獪": "狯",
"獫": "猃",
"獮": "狝",
"獰": "狞",
"獲": "获",
"獵": "猎",
"獷": "犷",
"獸": "兽",
"獺": "獭",
"獻": "献",
"獼": "猕",
"玀": "猡",
"現": "现",
"琺": "珐",
"琿": "珲",
"瑋": "玮",
"瑒": "玚",
"瑣": "琐",
"瑤": "瑶",
"瑩": "莹",
"瑪": "玛",
"瑲": "玱",
"璉": "琏",
"璣": "玑",
"璦": "瑷",
"璫": "珰",
"環": "环",
"璽": "玺",
"瓊": "琼",
"瓏": "珑",
"瓔": "璎",
"瓚": "瓒",
"甌": "瓯",
"產": "产",
"産": "产",
"畝": "亩",
"畢": "毕",
"異": "异",
"畵": "画",
"當": "当",
"疇": "畴",
"疊": "叠",
"痙": "痉",
"痾": "疴",
"瘂": "痖",
"瘋": "疯",
"瘍": "疡",
"瘓": "痪",
"瘞": "瘗",
"瘡": "疮",
"瘧": "疟",
"瘮": "瘆",
"瘲": "疭",
"瘺": "瘘",
"瘻": "瘘",
"療": "疗",
"癆": "痨",
"癇": "痫",
"癉": "瘅",
"癘": "疠",
"癟": "瘪",
"癢": "痒",
"癤": "疖",
"癥": "症",
"癧": "疬",
"癩": "癞",
"癬": "癣",
"癭": "瘿",
"癮": "瘾",
"癰": "痈",
"癱": "瘫",
"癲": "癫",
"發": "发",
"皚": "皑",
"皰": "疱",
"皸": "皲",
"皺": "皱",
"盃": "杯",
"盜": "盗",
"盞": "盏",
"盡": "尽",
"監": "监",
"盤": "盘",
"盧": "卢",
"眥": "眦",
"眾": "众",
"睏": "困",
"睜": "睁",
"睞": "睐",
"瞘": "眍",
"瞜": "䁖",
"瞞": "瞒",
"瞭": "了",
"瞶": "瞆",
"瞼": "睑",
"矇": "蒙",
"矓": "眬",
"矚": "瞩",
"矯": "矫",
"硃": "朱",
"硜": "硁",
"硤": "硖",
"硨": "砗",
"确": "确",
"硯": "砚",
"碩": "硕",
"碭": "砀",
"碸": "砜",
"確": "确",
"碼": "码",
"磑": "硙",
"磚": "砖",
"磣": "碜",
"磧": "碛",
"磯": "矶",
"磽": "硗",
"礆": "硷",
"礎": "础",
"礙": "碍",
"礦": "矿",
"礪": "砺",
"礫": "砾",
"礬": "矾",
"礱": "砻",
"祿": "禄",
"禍": "祸",
"禎": "祯",
"禕": "祎",
"禡": "祃",
"禦": "御",
"禪": "禅",
"禮": "礼",
"禰": "祢",
"禱": "祷",
"禿": "秃",
"秈": "籼",
"种": "种",
"稅": "税",
"稈": "秆",
"稟": "禀",
"種": "种",
"稱": "称",
"穀": "谷",
"穌": "稣",
"積": "积",
"穎": "颖",
"穠": "秾",
"穡": "穑",
"穢": "秽",
"穩": "稳",
"穫": "获",
"穭": "稆",
"窩": "窝",
"窪": "洼",
"窮": "穷",
"窯": "窑",
"窵": "窎",
"窶": "窭",
"窺": "窥",
"竄": "窜",
"竅": "窍",
"竇": "窦",
"竈": "灶",
"竊": "窃",
"竪": "竖",
"競": "竞",
"筆": "笔",
"筍": "笋",
"筑": "筑",
"筧": "笕",
"筴": "䇲",
"箋": "笺",
"箏": "筝",
"節": "节",
"範": "范",
"築": "筑",
"篋": "箧",
"篔": "筼",
"篤": "笃",
"篩": "筛",
"篳": "筚",
"簀": "箦",
"簍": "篓",
"簞": "箪",
"簡": "简",
"簣": "篑",
"簫": "箫",
"簹": "筜",
"簽": "签",
"簾": "帘",
"籃": "篮",
"籌": "筹",
"籖": "签",
"籙": "箓",
"籜": "箨",
"籟": "籁",
"籠": "笼",
"籩": "笾",
"籪": "簖",
"籬": "篱",
"籮": "箩",
"粵": "粤",
"糝": "糁",
"糞": "粪",
"糧": "粮",
"糰": "团",
"糲": "粝",
"糴": "籴",
"糶": "粜",
"糹": "纟",
"糾": "纠",
"紀": "纪",
"紂": "纣",
"約": "约",
"紅": "红",
"紆": "纡",
"紇": "纥",
"紈": "纨",
"紉": "纫",
"紋": "纹",
"納": "纳",
"紐": "纽",
"紓": "纾",
"純": "纯",
"紕": "纰",
"紖": "纼",
"紗": "纱",
"紘": "纮",
"紙": "纸",
"級": "级",
"紛": "纷",
"紜": "纭",
"紝": "纴",
"紡": "纺",
"紬": "䌷",
"細": "细",
"紱": "绂",
"紲": "绁",
"紳": "绅",
"紵": "纻",
"紹": "绍",
"紺": "绀",
"紼": "绋",
"紿": "绐",
"絀": "绌",
"終": "终",
"組": "组",
"絅": "䌹",
"絆": "绊",
"絎": "绗",
"結": "结",
"絕": "绝",
"絛": "绦",
"絝": "绔",
"絞": "绞",
"絡": "络",
"絢": "绚",
"給": "给",
"絨": "绒",
"絰": "绖",
"統": "统",
"絲": "丝",
"絳": "绛",
"絶": "绝",
"絹": "绢",
"綁": "绑",
"綃": "绡",
"綆": "绠",
"綈": "绨",
"綉": "绣",
"綌": "绤",
"綏": "绥",
"經": "经",
"綜": "综",
"綞": "缍",
"綠": "绿",
"綢": "绸",
"綣": "绻",
"綫": "线",
"綬": "绶",
"維": "维",
"綯": "绹",
"綰": "绾",
"綱": "纲",
"網": "网",
"綳": "绷",
"綴": "缀",
"綸": "纶",
"綹": "绺",
"綺": "绮",
"綻": "绽",
"綽": "绰",
"綾": "绫",
"綿": "绵",
"緄": "绲",
"緇": "缁",
"緊": "紧",
"緋": "绯",
"緑": "绿",
"緒": "绪",
"緓": "绬",
"緔": "绱",
"緗": "缃",
"緘": "缄",
"緙": "缂",
"線": "线",
"緝": "缉",
"緞": "缎",
"締": "缔",
"緡": "缗",
"緣": "缘",
"緦": "缌",
"編": "编",
"緩": "缓",
"緬": "缅",
"緯": "纬",
"緱": "缑",
"緲": "缈",
"練": "练",
"緶": "缏",
"緹": "缇",
"緻": "致",
"縈": "萦",
"縉": "缙",
"縊": "缢",
"縋": "缒",
"縐": "绉",
"縑": "缣",
"縕": "缊",
"縗": "缞",
"縛": "缚",
"縝": "缜",
"縞": "缟",
"縟": "缛",
"縣": "县",
"縧": "绦",
"縫": "缝",
"縭": "缡",
"縮": "缩",
"縱": "纵",
"縲": "缧",
"縳": "䌸",
"縴": "纤",
"縵": "缦",
"縶": "絷",
"縷": "缕",
"縹": "缥",
"總": "总",
"績": "绩",
"繃": "绷",
"繅": "缫",
"繆": "缪",
"繒": "缯",
"織": "织",
"繕": "缮",
"繚": "缭",
"繞": "绕",
"繡": "绣",
"繢": "缋",
"繩": "绳",
"繪": "绘",
"繫": "系",
"繭": "茧",
"繮": "缰",
"繯": "缳",
"繰": "缲",
"繳": "缴",
"繸": "䍁",
"繹": "绎",
"繼": "继",
"繽": "缤",
"繾": "缱",
"纈": "缬",
"纊": "纩",
"續": "续",
"纍": "累",
"纏": "缠",
"纓": "缨",
"纔": "才",
"纖": "纤",
"纘": "缵",
"纜": "缆",
"缽": "钵",
"罈": "坛",
"罌": "罂",
"罰": "罚",
"罵": "骂",
"罷": "罢",
"羅": "罗",
"羆": "罴",
"羈": "羁",
"羋": "芈",
"羥": "羟",
"義": "义",
"習": "习",
"翹": "翘",
"耬": "耧",
"耮": "耢",
"聖": "圣",
"聞": "闻",
"聯": "联",
"聰": "聪",
"聲": "声",
"聳": "耸",
"聵": "聩",
"聶": "聂",
"職": "职",
"聹": "聍",
"聽": "听",
"聾": "聋",
"肅": "肃",
"胜": "胜",
"脅": "胁",
"脈": "脉",
"脛": "胫",
"脩": "修",
"脫": "脱",
"脹": "胀",
"腊": "腊",
"腎": "肾",
"腖": "胨",
"腡": "脶",
"腦": "脑",
"腫": "肿",
"腳": "脚",
"腸": "肠",
"膃": "腽",
"膚": "肤",
"膠": "胶",
"膩": "腻",
"膽": "胆",
"膾": "脍",
"膿": "脓",
"臉": "脸",
"臍": "脐",
"臏": "膑",
"臘": "腊",
"臚": "胪",
"臟": "脏",
"臠": "脔",
"臢": "臜",
"臥": "卧",
"臨": "临",
"臺": "台",
"與": "与",
"興": "兴",
"舉": "举",
"舊": "旧",
"艙": "舱",
"艤": "舣",
"艦": "舰",
"艫": "舻",
"艱": "艰",
"艷": "艳",
"芻": "刍",
"苎": "苧",
"苧": "苎",
"苹": "苹",
"茲": "兹",
"荊": "荆",
"莊": "庄",
"莖": "茎",
"莢": "荚",
"莧": "苋",
"華": "华",
"萇": "苌",
"萊": "莱",
"萬": "万",
"萵": "莴",
"葉": "叶",
"葒": "荭",
"著": "着",
"葤": "荮",
"葦": "苇",
"葯": "药",
"葷": "荤",
"蒓": "莼",
"蒔": "莳",
"蒞": "莅",
"蒼": "苍",
"蓀": "荪",
"蓋": "盖",
"蓮": "莲",
"蓯": "苁",
"蓴": "莼",
"蓽": "荜",
"蔔": "卜",
"蔞": "蒌",
"蔣": "蒋",
"蔥": "葱",
"蔦": "茑",
"蔭": "荫",
"蕁": "荨",
"蕆": "蒇",
"蕎": "荞",
"蕒": "荬",
"蕓": "芸",
"蕕": "莸",
"蕘": "荛",
"蕢": "蒉",
"蕩": "荡",
"蕪": "芜",
"蕭": "萧",
"蕷": "蓣",
"薀": "蕰",
"薈": "荟",
"薊": "蓟",
"薌": "芗",
"薑": "姜",
"薔": "蔷",
"薘": "荙",
"薟": "莶",
"薦": "荐",
"薩": "萨",
"薴": "苧",
"薺": "荠",
"藉": "借",
"藍": "蓝",
"藎": "荩",
"藝": "艺",
"藥": "药",
"藪": "薮",
"藴": "蕴",
"藶": "苈",
"藹": "蔼",
"藺": "蔺",
"蘄": "蕲",
"蘆": "芦",
"蘇": "苏",
"蘊": "蕴",
"蘋": "苹",
"蘚": "藓",
"蘞": "蔹",
"蘢": "茏",
"蘭": "兰",
"蘺": "蓠",
"蘿": "萝",
"虆": "蔂",
"處": "处",
"虛": "虚",
"虜": "虏",
"號": "号",
"虧": "亏",
"虫": "虫",
"虯": "虬",
"蛺": "蛱",
"蛻": "蜕",
"蜆": "蚬",
"蜡": "蜡",
"蝕": "蚀",
"蝟": "猬",
"蝦": "虾",
"蝸": "蜗",
"螄": "蛳",
"螞": "蚂",
"螢": "萤",
"螻": "蝼",
"螿": "螀",
"蟄": "蛰",
"蟈": "蝈",
"蟎": "螨",
"蟣": "虮",
"蟬": "蝉",
"蟯": "蛲",
"蟲": "虫",
"蟶": "蛏",
"蟻": "蚁",
"蠅": "蝇",
"蠆": "虿",
"蠐": "蛴",
"蠑": "蝾",
"蠟": "蜡",
"蠣": "蛎",
"蠨": "蟏",
"蠱": "蛊",
"蠶": "蚕",
"蠻": "蛮",
"衆": "众",
"衊": "蔑",
"術": "术",
"衕": "同",
"衚": "胡",
"衛": "卫",
"衝": "冲",
"衹": "只",
"袞": "衮",
"裊": "袅",
"裏": "里",
"補": "补",
"裝": "装",
"裡": "里",
"製": "制",
"複": "复",
"褌": "裈",
"褘": "袆",
"褲": "裤",
"褳": "裢",
"褸": "褛",
"褻": "亵",
"襇": "裥",
"襏": "袯",
"襖": "袄",
"襝": "裣",
"襠": "裆",
"襤": "褴",
"襪": "袜",
"襯": "衬",
"襲": "袭",
"覆": "复",
"見": "见",
"覎": "觃",
"規": "规",
"覓": "觅",
"視": "视",
"覘": "觇",
"覡": "觋",
"覥": "觍",
"覦": "觎",
"親": "亲",
"覬": "觊",
"覯": "觏",
"覲": "觐",
"覷": "觑",
"覺": "觉",
"覽": "览",
"覿": "觌",
"觀": "观",
"觴": "觞",
"觶": "觯",
"觸": "触",
"訁": "讠",
"訂": "订",
"訃": "讣",
"計": "计",
"訊": "讯",
"訌": "讧",
"討": "讨",
"訐": "讦",
"訒": "讱",
"訓": "训",
"訕": "讪",
"訖": "讫",
"託": "讬",
"記": "记",
"訛": "讹",
"訝": "讶",
"訟": "讼",
"訢": "䜣",
"訣": "诀",
"訥": "讷",
"訩": "讻",
"訪": "访",
"設": "设",
"許": "许",
"訴": "诉",
"訶": "诃",
"診": "诊",
"註": "注",
"詁": "诂",
"詆": "诋",
"詎": "讵",
"詐": "诈",
"詒": "诒",
"詔": "诏",
"評": "评",
"詖": "诐",
"詗": "诇",
"詘": "诎",
"詛": "诅",
"詞": "词",
"詠": "咏",
"詡": "诩",
"詢": "询",
"詣": "诣",
"試": "试",
"詩": "诗",
"詫": "诧",
"詬": "诟",
"詭": "诡",
"詮": "诠",
"詰": "诘",
"話": "话",
"該": "该",
"詳": "详",
"詵": "诜",
"詼": "诙",
"詿": "诖",
"誄": "诔",
"誅": "诛",
"誆": "诓",
"誇": "夸",
"誌": "志",
"認": "认",
"誑": "诳",
"誒": "诶",
"誕": "诞",
"誘": "诱",
"誚": "诮",
"語": "语",
"誠": "诚",
"誡": "诫",
"誣": "诬",
"誤": "误",
"誥": "诰",
"誦": "诵",
"誨": "诲",
"說": "说",
"説": "说",
"誰": "谁",
"課": "课",
"誶": "谇",
"誹": "诽",
"誼": "谊",
"誾": "訚",
"調": "调",
"諂": "谄",
"諄": "谆",
"談": "谈",
"諉": "诿",
"請": "请",
"諍": "诤",
"諏": "诹",
"諑": "诼",
"諒": "谅",
"論": "论",
"諗": "谂",
"諛": "谀",
"諜": "谍",
"諝": "谞",
"諞": "谝",
"諢": "诨",
"諤": "谔",
"諦": "谛",
"諧": "谐",
"諫": "谏",
"諭": "谕",
"諮": "谘",
"諱": "讳",
"諳": "谙",
"諶": "谌",
"諷": "讽",
"諸": "诸",
"諺": "谚",
"諼": "谖",
"諾": "诺",
"謀": "谋",
"謁": "谒",
"謂": "谓",
"謄": "誊",
"謅": "诌",
"謊": "谎",
"謎": "谜",
"謐": "谧",
"謔": "谑",
"謖": "谡",
"謗": "谤",
"謙": "谦",
"謚": "谥",
"講": "讲",
"謝": "谢",
"謠": "谣",
"謡": "谣",
"謨": "谟",
"謫": "谪",
"謬": "谬",
"謭": "谫",
"謳": "讴",
"謹": "谨",
"謾": "谩",
"證": "证",
"譎": "谲",
"譏": "讥",
"譖": "谮",
"識": "识",
"譙": "谯",
"譚": "谭",
"譜": "谱",
"譫": "谵",
"譯": "译",
"議": "议",
"譴": "谴",
"護": "护",
"譸": "诪",
"譽": "誉",
"譾": "谫",
"讀": "读",
"變": "变",
"讎": "雠",
"讒": "谗",
"讓": "让",
"讕": "谰",
"讖": "谶",
"讜": "谠",
"讞": "谳",
"豈": "岂",
"豎": "竖",
"豐": "丰",
"豬": "猪",
"豶": "豮",
"貓": "猫",
"貝": "贝",
"貞": "贞",
"貟": "贠",
"負": "负",
"財": "财",
"貢": "贡",
"貧": "贫",
"貨": "货",
"販": "贩",
"貪": "贪",
"貫": "贯",
"責": "责",
"貯": "贮",
"貰": "贳",
"貲": "赀",
"貳": "贰",
"貴": "贵",
"貶": "贬",
"買": "买",
"貸": "贷",
"貺": "贶",
"費": "费",
"貼": "贴",
"貽": "贻",
"貿": "贸",
"賀": "贺",
"賁": "贲",
"賂": "赂",
"賃": "赁",
"賄": "贿",
"賅": "赅",
"資": "资",
"賈": "贾",
"賊": "贼",
"賑": "赈",
"賒": "赊",
"賓": "宾",
"賕": "赇",
"賙": "赒",
"賚": "赉",
"賜": "赐",
"賞": "赏",
"賠": "赔",
"賡": "赓",
"賢": "贤",
"賣": "卖",
"賤": "贱",
"賦": "赋",
"賧": "赕",
"質": "质",
"賫": "赍",
"賬": "账",
"賭": "赌",
"賴": "赖",
"賵": "赗",
"賺": "赚",
"賻": "赙",
"購": "购",
"賽": "赛",
"賾": "赜",
"贄": "贽",
"贅": "赘",
"贇": "赟",
"贈": "赠",
"贊": "赞",
"贋": "赝",
"贍": "赡",
"贏": "赢",
"贐": "赆",
"贓": "赃",
"贔": "赑",
"贖": "赎",
"贗": "赝",
"贛": "赣",
"贜": "赃",
"赬": "赪",
"趕": "赶",
"趙": "赵",
"趨": "趋",
"趲": "趱",
"跡": "迹",
"踐": "践",
"踴": "踊",
"蹌": "跄",
"蹕": "跸",
"蹣": "蹒",
"蹤": "踪",
"蹺": "跷",
"躂": "跶",
"躉": "趸",
"躊": "踌",
"躋": "跻",
"躍": "跃",
"躑": "踯",
"躒": "跞",
"躓": "踬",
"躕": "蹰",
"躚": "跹",
"躡": "蹑",
"躥": "蹿",
"躦": "躜",
"躪": "躏",
"軀": "躯",
"車": "车",
"軋": "轧",
"軌": "轨",
"軍": "军",
"軑": "轪",
"軒": "轩",
"軔": "轫",
"軛": "轭",
"軟": "软",
"軤": "轷",
"軫": "轸",
"軲": "轱",
"軸": "轴",
"軹": "轵",
"軺": "轺",
"軻": "轲",
"軼": "轶",
"軾": "轼",
"較": "较",
"輅": "辂",
"輇": "辁",
"輈": "辀",
"載": "载",
"輊": "轾",
"輒": "辄",
"輓": "挽",
"輔": "辅",
"輕": "轻",
"輛": "辆",
"輜": "辎",
"輝": "辉",
"輞": "辋",
"輟": "辍",
"輥": "辊",
"輦": "辇",
"輩": "辈",
"輪": "轮",
"輬": "辌",
"輯": "辑",
"輳": "辏",
"輸": "输",
"輻": "辐",
"輾": "辗",
"輿": "舆",
"轀": "辒",
"轂": "毂",
"轄": "辖",
"轅": "辕",
"轆": "辘",
"轉": "转",
"轍": "辙",
"轎": "轿",
"轔": "辚",
"轟": "轰",
"轡": "辔",
"轢": "轹",
"轤": "轳",
"辦": "办",
"辭": "辞",
"辮": "辫",
"辯": "辩",
"農": "农",
"迴": "回",
"适": "适",
"逕": "迳",
"這": "这",
"連": "连",
"週": "周",
"進": "进",
"遊": "游",
"運": "运",
"過": "过",
"達": "达",
"違": "违",
"遙": "遥",
"遜": "逊",
"遞": "递",
"遠": "远",
"適": "适",
"遲": "迟",
"遷": "迁",
"選": "选",
"遺": "遗",
"遼": "辽",
"邁": "迈",
"還": "还",
"邇": "迩",
"邊": "边",
"邏": "逻",
"邐": "逦",
"郟": "郏",
"郵": "邮",
"鄆": "郓",
"鄉": "乡",
"鄒": "邹",
"鄔": "邬",
"鄖": "郧",
"鄧": "邓",
"鄭": "郑",
"鄰": "邻",
"鄲": "郸",
"鄴": "邺",
"鄶": "郐",
"鄺": "邝",
"酇": "酂",
"酈": "郦",
"醖": "酝",
"醜": "丑",
"醞": "酝",
"醫": "医",
"醬": "酱",
"醱": "酦",
"釀": "酿",
"釁": "衅",
"釃": "酾",
"釅": "酽",
"采": "采",
"釋": "释",
"釐": "厘",
"釒": "钅",
"釓": "钆",
"釔": "钇",
"釕": "钌",
"釗": "钊",
"釘": "钉",
"釙": "钋",
"針": "针",
"釣": "钓",
"釤": "钐",
"釧": "钏",
"釩": "钒",
"釵": "钗",
"釷": "钍",
"釹": "钕",
"釺": "钎",
"鈀": "钯",
"鈁": "钫",
"鈃": "钘",
"鈄": "钭",
"鈈": "钚",
"鈉": "钠",
"鈍": "钝",
"鈎": "钩",
"鈐": "钤",
"鈑": "钣",
"鈒": "钑",
"鈔": "钞",
"鈕": "钮",
"鈞": "钧",
"鈣": "钙",
"鈥": "钬",
"鈦": "钛",
"鈧": "钪",
"鈮": "铌",
"鈰": "铈",
"鈳": "钶",
"鈴": "铃",
"鈷": "钴",
"鈸": "钹",
"鈹": "铍",
"鈺": "钰",
"鈽": "钸",
"鈾": "铀",
"鈿": "钿",
"鉀": "钾",
"鉅": "钜",
"鉈": "铊",
"鉉": "铉",
"鉋": "铇",
"鉍": "铋",
"鉑": "铂",
"鉕": "钷",
"鉗": "钳",
"鉚": "铆",
"鉛": "铅",
"鉞": "钺",
"鉢": "钵",
"鉤": "钩",
"鉦": "钲",
"鉬": "钼",
"鉭": "钽",
"鉶": "铏",
"鉸": "铰",
"鉺": "铒",
"鉻": "铬",
"鉿": "铪",
"銀": "银",
"銃": "铳",
"銅": "铜",
"銍": "铚",
"銑": "铣",
"銓": "铨",
"銖": "铢",
"銘": "铭",
"銚": "铫",
"銛": "铦",
"銜": "衔",
"銠": "铑",
"銣": "铷",
"銥": "铱",
"銦": "铟",
"銨": "铵",
"銩": "铥",
"銪": "铕",
"銫": "铯",
"銬": "铐",
"銱": "铞",
"銳": "锐",
"銷": "销",
"銹": "锈",
"銻": "锑",
"銼": "锉",
"鋁": "铝",
"鋃": "锒",
"鋅": "锌",
"鋇": "钡",
"鋌": "铤",
"鋏": "铗",
"鋒": "锋",
"鋙": "铻",
"鋝": "锊",
"鋟": "锓",
"鋣": "铘",
"鋤": "锄",
"鋥": "锃",
"鋦": "锔",
"鋨": "锇",
"鋩": "铓",
"鋪": "铺",
"鋭": "锐",
"鋮": "铖",
"鋯": "锆",
"鋰": "锂",
"鋱": "铽",
"鋶": "锍",
"鋸": "锯",
"鋼": "钢",
"錁": "锞",
"錄": "录",
"錆": "锖",
"錇": "锫",
"錈": "锩",
"錏": "铔",
"錐": "锥",
"錒": "锕",
"錕": "锟",
"錘": "锤",
"錙": "锱",
"錚": "铮",
"錛": "锛",
"錟": "锬",
"錠": "锭",
"錡": "锜",
"錢": "钱",
"錦": "锦",
"錨": "锚",
"錩": "锠",
"錫": "锡",
"錮": "锢",
"錯": "错",
"録": "录",
"錳": "锰",
"錶": "表",
"錸": "铼",
"鍀": "锝",
"鍁": "锨",
"鍃": "锪",
"鍆": "钔",
"鍇": "锴",
"鍈": "锳",
"鍋": "锅",
"鍍": "镀",
"鍔": "锷",
"鍘": "铡",
"鍚": "钖",
"鍛": "锻",
"鍠": "锽",
"鍤": "锸",
"鍥": "锲",
"鍩": "锘",
"鍬": "锹",
"鍰": "锾",
"鍵": "键",
"鍶": "锶",
"鍺": "锗",
"鎂": "镁",
"鎄": "锿",
"鎇": "镅",
"鎊": "镑",
"鎔": "镕",
"鎖": "锁",
"鎘": "镉",
"鎛": "镈",
"鎡": "镃",
"鎢": "钨",
"鎣": "蓥",
"鎦": "镏",
"鎧": "铠",
"鎩": "铩",
"鎪": "锼",
"鎬": "镐",
"鎮": "镇",
"鎰": "镒",
"鎲": "镋",
"鎳": "镍",
"鎵": "镓",
"鎸": "镌",
"鎿": "镎",
"鏃": "镞",
"鏇": "镟",
"鏈": "链",
"鏌": "镆",
"鏍": "镙",
"鏐": "镠",
"鏑": "镝",
"鏗": "铿",
"鏘": "锵",
"鏜": "镗",
"鏝": "镘",
"鏞": "镛",
"鏟": "铲",
"鏡": "镜",
"鏢": "镖",
"鏤": "镂",
"鏨": "錾",
"鏰": "镚",
"鏵": "铧",
"鏷": "镤",
"鏹": "镪",
"鏽": "锈",
"鐃": "铙",
"鐋": "铴",
"鐐": "镣",
"鐒": "铹",
"鐓": "镦",
"鐔": "镡",
"鐘": "钟",
"鐙": "镫",
"鐝": "镢",
"鐠": "镨",
"鐦": "锎",
"鐧": "锏",
"鐨": "镄",
"鐫": "镌",
"鐮": "镰",
"鐲": "镯",
"鐳": "镭",
"鐵": "铁",
"鐶": "镮",
"鐸": "铎",
"鐺": "铛",
"鐿": "镱",
"鑄": "铸",
"鑊": "镬",
"鑌": "镔",
"鑒": "鉴",
"鑔": "镲",
"鑕": "锧",
"鑞": "镴",
"鑠": "铄",
"鑣": "镳",
"鑥": "镥",
"鑭": "镧",
"鑰": "钥",
"鑱": "镵",
"鑲": "镶",
"鑷": "镊",
"鑹": "镩",
"鑼": "锣",
"鑽": "钻",
"鑾": "銮",
"鑿": "凿",
"钁": "镢",
"長": "长",
"門": "门",
"閂": "闩",
"閃": "闪",
"閆": "闫",
"閈": "闬",
"閉": "闭",
"開": "开",
"閌": "闶",
"閎": "闳",
"閏": "闰",
"閑": "闲",
"間": "间",
"閔": "闵",
"閘": "闸",
"閡": "阂",
"閣": "阁",
"閤": "合",
"閥": "阀",
"閨": "闺",
"閩": "闽",
"閫": "阃",
"閬": "阆",
"閭": "闾",
"閱": "阅",
"閲": "阅",
"閶": "阊",
"閹": "阉",
"閻": "阎",
"閼": "阏",
"閽": "阍",
"閾": "阈",
"閿": "阌",
"闃": "阒",
"闆": "板",
"闇": "暗",
"闈": "闱",
"闊": "阔",
"闋": "阕",
"闌": "阑",
"闍": "阇",
"闐": "阗",
"闒": "阘",
"闓": "闿",
"闔": "阖",
"闕": "阙",
"闖": "闯",
"關": "关",
"闞": "阚",
"闠": "阓",
"闡": "阐",
"闢": "辟",
"闤": "阛",
"闥": "闼",
"阪": "坂",
"陘": "陉",
"陝": "陕",
"陣": "阵",
"陰": "阴",
"陳": "陈",
"陸": "陆",
"陽": "阳",
"隉": "陧",
"隊": "队",
"階": "阶",
"隕": "陨",
"際": "际",
"隨": "随",
"險": "险",
"隱": "隐",
"隴": "陇",
"隸": "隶",
"隻": "只",
"雋": "隽",
"雖": "虽",
"雙": "双",
"雛": "雏",
"雜": "杂",
"雞": "鸡",
"離": "离",
"難": "难",
"雲": "云",
"電": "电",
"霢": "霡",
"霧": "雾",
"霽": "霁",
"靂": "雳",
"靄": "霭",
"靈": "灵",
"靚": "靓",
"靜": "静",
"靦": "腼",
"靨": "靥",
"鞀": "鼗",
"鞏": "巩",
"鞝": "绱",
"鞽": "鞒",
"韁": "缰",
"韃": "鞑",
"韉": "鞯",
"韋": "韦",
"韌": "韧",
"韍": "韨",
"韓": "韩",
"韙": "韪",
"韜": "韬",
"韞": "韫",
"韻": "韵",
"響": "响",
"頁": "页",
"頂": "顶",
"頃": "顷",
"項": "项",
"順": "顺",
"頇": "顸",
"須": "须",
"頊": "顼",
"頌": "颂",
"頎": "颀",
"頏": "颃",
"預": "预",
"頑": "顽",
"頒": "颁",
"頓": "顿",
"頗": "颇",
"領": "领",
"頜": "颌",
"頡": "颉",
"頤": "颐",
"頦": "颏",
"頭": "头",
"頮": "颒",
"頰": "颊",
"頲": "颋",
"頴": "颕",
"頷": "颔",
"頸": "颈",
"頹": "颓",
"頻": "频",
"頽": "颓",
"顆": "颗",
"題": "题",
"額": "额",
"顎": "颚",
"顏": "颜",
"顒": "颙",
"顓": "颛",
"顔": "颜",
"願": "愿",
"顙": "颡",
"顛": "颠",
"類": "类",
"顢": "颟",
"顥": "颢",
"顧": "顾",
"顫": "颤",
"顬": "颥",
"顯": "显",
"顰": "颦",
"顱": "颅",
"顳": "颞",
"顴": "颧",
"風": "风",
"颭": "飐",
"颮": "飑",
"颯": "飒",
"颱": "台",
"颳": "刮",
"颶": "飓",
"颸": "飔",
"颺": "飏",
"颻": "飖",
"颼": "飕",
"飀": "飗",
"飄": "飘",
"飆": "飙",
"飈": "飚",
"飛": "飞",
"飠": "饣",
"飢": "饥",
"飣": "饤",
"飥": "饦",
"飩": "饨",
"飪": "饪",
"飫": "饫",
"飭": "饬",
"飯": "饭",
"飲": "饮",
"飴": "饴",
"飼": "饲",
"飽": "饱",
"飾": "饰",
"飿": "饳",
"餃": "饺",
"餄": "饸",
"餅": "饼",
"餉": "饷",
"養": "养",
"餌": "饵",
"餎": "饹",
"餏": "饻",
"餑": "饽",
"餒": "馁",
"餓": "饿",
"餕": "馂",
"餖": "饾",
"餘": "余",
"餚": "肴",
"餛": "馄",
"餜": "馃",
"餞": "饯",
"餡": "馅",
"館": "馆",
"餱": "糇",
"餳": "饧",
"餶": "馉",
"餷": "馇",
"餺": "馎",
"餼": "饩",
"餾": "馏",
"餿": "馊",
"饁": "馌",
"饃": "馍",
"饅": "馒",
"饈": "馐",
"饉": "馑",
"饊": "馓",
"饋": "馈",
"饌": "馔",
"饑": "饥",
"饒": "饶",
"饗": "飨",
"饜": "餍",
"饞": "馋",
"饢": "馕",
"馬": "马",
"馭": "驭",
"馮": "冯",
"馱": "驮",
"馳": "驰",
"馴": "驯",
"馹": "驲",
"駁": "驳",
"駐": "驻",
"駑": "驽",
"駒": "驹",
"駔": "驵",
"駕": "驾",
"駘": "骀",
"駙": "驸",
"駛": "驶",
"駝": "驼",
"駟": "驷",
"駡": "骂",
"駢": "骈",
"駭": "骇",
"駰": "骃",
"駱": "骆",
"駸": "骎",
"駿": "骏",
"騁": "骋",
"騂": "骍",
"騅": "骓",
"騌": "骔",
"騍": "骒",
"騎": "骑",
"騏": "骐",
"騖": "骛",
"騙": "骗",
"騤": "骙",
"騫": "骞",
"騭": "骘",
"騮": "骝",
"騰": "腾",
"騶": "驺",
"騷": "骚",
"騸": "骟",
"騾": "骡",
"驀": "蓦",
"驁": "骜",
"驂": "骖",
"驃": "骠",
"驄": "骢",
"驅": "驱",
"驊": "骅",
"驌": "骕",
"驍": "骁",
"驏": "骣",
"驕": "骄",
"驗": "验",
"驚": "惊",
"驛": "驿",
"驟": "骤",
"驢": "驴",
"驤": "骧",
"驥": "骥",
"驦": "骦",
"驪": "骊",
"驫": "骉",
"骯": "肮",
"髏": "髅",
"髒": "脏",
"體": "体",
"髕": "髌",
"髖": "髋",
"髮": "发",
"鬆": "松",
"鬍": "胡",
"鬚": "须",
"鬢": "鬓",
"鬥": "斗",
"鬧": "闹",
"鬩": "阋",
"鬮": "阄",
"鬱": "郁",
"魎": "魉",
"魘": "魇",
"魚": "鱼",
"魛": "鱽",
"魢": "鱾",
"魨": "鲀",
"魯": "鲁",
"魴": "鲂",
"魷": "鱿",
"魺": "鲄",
"鮁": "鲅",
"鮃": "鲆",
"鮊": "鲌",
"鮋": "鲉",
"鮍": "鲏",
"鮎": "鲇",
"鮐": "鲐",
"鮑": "鲍",
"鮒": "鲋",
"鮓": "鲊",
"鮚": "鲒",
"鮜": "鲘",
"鮝": "鲞",
"鮞": "鲕",
"鮦": "鲖",
"鮪": "鲔",
"鮫": "鲛",
"鮭": "鲑",
"鮮": "鲜",
"鮳": "鲓",
"鮶": "鲪",
"鮺": "鲝",
"鯀": "鲧",
"鯁": "鲠",
"鯇": "鲩",
"鯉": "鲤",
"鯊": "鲨",
"鯒": "鲬",
"鯔": "鲻",
"鯕": "鲯",
"鯖": "鲭",
"鯗": "鲞",
"鯛": "鲷",
"鯝": "鲴",
"鯡": "鲱",
"鯢": "鲵",
"鯤": "鲲",
"鯧": "鲳",
"鯨": "鲸",
"鯪": "鲮",
"鯫": "鲰",
"鯴": "鲺",
"鯷": "鳀",
"鯽": "鲫",
"鯿": "鳊",
"鰁": "鳈",
"鰂": "鲗",
"鰃": "鳂",
"鰈": "鲽",
"鰉": "鳇",
"鰍": "鳅",
"鰏": "鲾",
"鰐": "鳄",
"鰒": "鳆",
"鰓": "鳃",
"鰜": "鳒",
"鰟": "鳑",
"鰠": "鳋",
"鰣": "鲥",
"鰥": "鳏",
"鰨": "鳎",
"鰩": "鳐",
"鰭": "鳍",
"鰮": "鳁",
"鰱": "鲢",
"鰲": "鳌",
"鰳": "鳓",
"鰵": "鳘",
"鰷": "鲦",
"鰹": "鲣",
"鰺": "鲹",
"鰻": "鳗",
"鰼": "鳛",
"鰾": "鳔",
"鱂": "鳉",
"鱅": "鳙",
"鱈": "鳕",
"鱉": "鳖",
"鱒": "鳟",
"鱔": "鳝",
"鱖": "鳜",
"鱗": "鳞",
"鱘": "鲟",
"鱝": "鲼",
"鱟": "鲎",
"鱠": "鲙",
"鱣": "鳣",
"鱤": "鳡",
"鱧": "鳢",
"鱨": "鲿",
"鱭": "鲚",
"鱯": "鳠",
"鱷": "鳄",
"鱸": "鲈",
"鱺": "鲡",
"䰾": "鲃",
"䲁": "鳚",
"鳥": "鸟",
"鳧": "凫",
"鳩": "鸠",
"鳬": "凫",
"鳲": "鸤",
"鳳": "凤",
"鳴": "鸣",
"鳶": "鸢",
"鳾": "䴓",
"鴆": "鸩",
"鴇": "鸨",
"鴉": "鸦",
"鴒": "鸰",
"鴕": "鸵",
"鴛": "鸳",
"鴝": "鸲",
"鴞": "鸮",
"鴟": "鸱",
"鴣": "鸪",
"鴦": "鸯",
"鴨": "鸭",
"鴯": "鸸",
"鴰": "鸹",
"鴴": "鸻",
"鴷": "䴕",
"鴻": "鸿",
"鴿": "鸽",
"鵁": "䴔",
"鵂": "鸺",
"鵃": "鸼",
"鵐": "鹀",
"鵑": "鹃",
"鵒": "鹆",
"鵓": "鹁",
"鵜": "鹈",
"鵝": "鹅",
"鵠": "鹄",
"鵡": "鹉",
"鵪": "鹌",
"鵬": "鹏",
"鵮": "鹐",
"鵯": "鹎",
"鵲": "鹊",
"鵷": "鹓",
"鵾": "鹍",
"鶄": "䴖",
"鶇": "鸫",
"鶉": "鹑",
"鶊": "鹒",
"鶓": "鹋",
"鶖": "鹙",
"鶘": "鹕",
"鶚": "鹗",
"鶡": "鹖",
"鶥": "鹛",
"鶩": "鹜",
"鶪": "䴗",
"鶬": "鸧",
"鶯": "莺",
"鶲": "鹟",
"鶴": "鹤",
"鶹": "鹠",
"鶺": "鹡",
"鶻": "鹘",
"鶼": "鹣",
"鶿": "鹚",
"鷀": "鹚",
"鷁": "鹢",
"鷂": "鹞",
"鷄": "鸡",
"鷈": "䴘",
"鷊": "鹝",
"鷓": "鹧",
"鷖": "鹥",
"鷗": "鸥",
"鷙": "鸷",
"鷚": "鹨",
"鷥": "鸶",
"鷦": "鹪",
"鷫": "鹔",
"鷯": "鹩",
"鷲": "鹫",
"鷳": "鹇",
"鷸": "鹬",
"鷹": "鹰",
"鷺": "鹭",
"鷽": "鸴",
"鷿": "䴙",
"鸇": "鹯",
"鸌": "鹱",
"鸏": "鹲",
"鸕": "鸬",
"鸘": "鹴",
"鸚": "鹦",
"鸛": "鹳",
"鸝": "鹂",
"鸞": "鸾",
"鹵": "卤",
"鹹": "咸",
"鹺": "鹾",
"鹽": "盐",
"麗": "丽",
"麥": "麦",
"麩": "麸",
"麪": "面",
"麫": "面",
"麯": "曲",
"麵": "面",
"麽": "么",
"黃": "黄",
"黌": "黉",
"點": "点",
"黨": "党",
"黲": "黪",
"黴": "霉",
"黶": "黡",
"黷": "黩",
"黽": "黾",
"黿": "鼋",
"鼉": "鼍",
"鼕": "冬",
"鼴": "鼹",
"齊": "齐",
"齋": "斋",
"齎": "赍",
"齏": "齑",
"齒": "齿",
"齔": "龀",
"齕": "龁",
"齗": "龂",
"齙": "龅",
"齜": "龇",
"齟": "龃",
"齠": "龆",
"齡": "龄",
"齣": "出",
"齦": "龈",
"齪": "龊",
"齬": "龉",
"齲": "龋",
"齶": "腭",
"齷": "龌",
"龍": "龙",
"龎": "厐",
"龐": "庞",
"龔": "龚",
"龕": "龛",
"龜": "龟"
}, t.wiki_t2s_v2 = r.removeSame(t.wiki_t2s), t.wiki_s2t_v2 = r.removeSame(t.wiki_s2t), 
t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(101), i = n(103);
t.STRING_PROTOTYPE = Object.getOwnPropertyNames(String.prototype);
class UString extends String {
constructor(e, ...t) {
super(e), this._arr = null;
let n = Object.getOwnPropertyDescriptor(this, "_arr");
Object.defineProperty(this, "_arr", Object.assign(n, {
configurable: !0,
enumerable: !1
}));
}
[Symbol.iterator]() {
return UString.toArray(this)[Symbol.iterator]();
}
static isString(e) {
return "string" == typeof e || e instanceof String;
}
static toArray(e) {
return e instanceof UString ? e.toArray() : r.default(String(e));
}
toArray() {
return this._arr || (this._arr = r.default(String(this))), this._arr;
}
split(e, t) {
let n, r = String(this);
return "" === e ? (n = UString.toArray(this), void 0 !== t && (n = n.slice(0, t))) : n = String.prototype.split.call(r, e, t), 
n;
}
substr(e, t) {
return UString.toArray(this).slice(e).slice(0, t).join("");
}
substring(e, t) {
return (Number.isNaN(e) || e < 0) && (e = 0), "number" == typeof t && ((Number.isNaN(t) || t < 0) && (t = 0), 
e > t && ([e, t] = [ t, e ])), this.slice(e, t);
}
indexOf(e, t = 0) {
let n = UString.toArray(this);
if (t = Math.max(0, Math.min(n.length, t)), "" === (e = String(e))) return t;
n = n.slice(t);
let r = UString.toArray(e), i = 0, o = 0, u = r[r.length - 1];
do {
if (-1 != (i = n.indexOf(r[0], o))) {
if (n.slice(i, i + r.length).join("") == e) return t + i;
o = i, r.length > 1 && (o = (i = n.indexOf(u, i + 1)) - r.length);
}
o++;
} while (-1 != i && o < n.length);
return -1;
}
includes(e, t = 0) {
return -1 !== UString.toArray(this).slice(t).join("").indexOf(e);
}
slice(e, t) {
return UString.toArray(this).slice(e, t).join("");
}
charAt(e) {
return this.substr(e, 1);
}
startsWith(e, t) {
return 0 == this.substr(!t || t < 0 ? 0 : +t, e.length).indexOf(e);
}
endsWith(e, t) {
let n = UString.toArray(this), r = UString.toArray(e);
return (void 0 === t || t > n.length) && (t = n.length), this.substring(t - r.length, t) === e;
}
padEnd(e, t) {
e >>= 0, t = String(void 0 !== t ? t : " ");
let n = this.split(""), r = this.split.call(t, "");
return n.length > e ? String(this) : ((e -= n.length) > r.length && (t += t.repeat(e / r.length), 
r = new UString(t)), String(this) + r.slice(0, e));
}
padStart(e, t) {
e >>= 0, t = String(void 0 !== t ? t : " ");
let n = this.split(""), r = this.split.call(t, "");
return n.length > e ? String(this) : ((e -= n.length) > r.length && (t += t.repeat(e / r.length), 
r = new UString(t)), r.slice(0, e) + String(this));
}
codePointAt(e) {
return this.toArray()[e].codePointAt(0);
}
static create(e, ...t) {
return new this(e, ...t);
}
static get support() {
let e = i.default(this);
return Object.keys(e).reduce(function(e, n) {
return t.STRING_PROTOTYPE.includes(n) && (e[n] = !0), e;
}, {});
}
static indexOf(e, t, n = 0) {
return this.create(e).indexOf(t, n);
}
static includes(e, t, n = 0) {
return this.create(e).includes(t, n);
}
static split(e, t, n) {
return this.create(e).split(t, n);
}
static substr(e, t, n) {
return this.create(e).substr(t, n);
}
static substring(e, t, n) {
return this.create(e).substring(t, n);
}
static slice(e, t, n) {
return this.create(e).slice(t, n);
}
static charAt(e, t) {
return this.create(e).charAt(t);
}
static padEnd(e, t, n) {
return this.create(e).padEnd(t, n);
}
static padStart(e, t, n) {
return this.create(e).padStart(t, n);
}
static startsWith(e, t, n) {
return this.create(e).startsWith(t, n);
}
static endsWith(e, t, n) {
return this.create(e).endsWith(t, n);
}
get charLength() {
return UString.toArray(this).length;
}
size() {
return UString.toArray(this).length;
}
static size(e) {
return this.create(e).size();
}
static codePointAt(e, t) {
return this.create(e).codePointAt(t);
}
}
UString.UString = UString, UString.default = UString, t.UString = UString, t.default = UString, 
Object.defineProperty(UString, "__esModule", {
value: !0
}), UString.default = UString.UString = UString, t = Object.freeze(t);
}, function(e, t, n) {
"use strict";
const r = n(102);
e.exports = r.runes;
}, function(e, t, n) {
"use strict";
function r(e) {
if ("string" != typeof e) throw new Error("string cannot be undefined or null");
const t = [];
let n = 0, r = 0;
for (;n < e.length; ) c(e[n + (r += i(n + r, e))]) && r++, s(e[n + r]) && r++, l(e[n + r]) && r++, 
f(e[n + r]) ? r++ : (t.push(e.substring(n, n + r)), n += r, r = 0);
return t;
}
function i(e, t) {
const n = t[e];
if (!o(n) || e === t.length - 1) return 1;
const r = n + t[e + 1];
let i = t.substring(e + 2, e + 5);
return u(r) && u(i) ? 4 : a(i) ? 4 : 2;
}
function o(e) {
return e && d(e[0].charCodeAt(0), t.HIGH_SURROGATE_START, t.HIGH_SURROGATE_END);
}
function u(e) {
return d(p(e), t.REGIONAL_INDICATOR_START, t.REGIONAL_INDICATOR_END);
}
function a(e) {
return d(p(e), t.FITZPATRICK_MODIFIER_START, t.FITZPATRICK_MODIFIER_END);
}
function s(e) {
return "string" == typeof e && d(e.charCodeAt(0), t.VARIATION_MODIFIER_START, t.VARIATION_MODIFIER_END);
}
function l(e) {
return "string" == typeof e && d(e.charCodeAt(0), t.DIACRITICAL_MARKS_START, t.DIACRITICAL_MARKS_END);
}
function c(e) {
return "string" == typeof e && -1 !== t.GRAPHEMS.indexOf(e.charCodeAt(0));
}
function f(e) {
return "string" == typeof e && e.charCodeAt(0) === t.ZWJ;
}
function p(e) {
const n = e.charCodeAt(0) - t.HIGH_SURROGATE_START, r = e.charCodeAt(1) - t.LOW_SURROGATE_START;
return (n << 10) + r + 65536;
}
function d(e, t, n) {
return e >= t && e <= n;
}
function h(e, t, n) {
const i = r(e);
if (void 0 === t) return e;
if (t >= i.length) return "";
const o = i.length - t, u = void 0 === n ? o : n;
let a = t + u;
return a > t + o && (a = void 0), i.slice(t, a).join("");
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.HIGH_SURROGATE_START = 55296, t.HIGH_SURROGATE_END = 56319, t.LOW_SURROGATE_START = 56320, 
t.REGIONAL_INDICATOR_START = 127462, t.REGIONAL_INDICATOR_END = 127487, t.FITZPATRICK_MODIFIER_START = 127995, 
t.FITZPATRICK_MODIFIER_END = 127999, t.VARIATION_MODIFIER_START = 65024, t.VARIATION_MODIFIER_END = 65039, 
t.DIACRITICAL_MARKS_START = 8400, t.DIACRITICAL_MARKS_END = 8447, t.ZWJ = 8205, 
t.GRAPHEMS = [ 776, 2359, 2359, 2367, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520 ], 
t.runes = r, t.nextUnits = i, t.isFirstOfSurrogatePair = o, t.isRegionalIndicator = u, 
t.isFitzpatrickModifier = a, t.isVariationSelector = s, t.isDiacriticalMark = l, 
t.isGraphem = c, t.isZeroWidthJoiner = f, t.codePointFromSurrogatePair = p, t.betweenInclusive = d, 
t.substring = h, t.substr = h, r.substr = h, r.substring = h, r.default = r, r.runes = r, 
Object.defineProperty(r, "__esModule", {
value: !0
}), t.default = r;
}, function(e, t, n) {
"use strict";
function r(e, t) {
let n = Object.getOwnPropertyDescriptors(e.prototype), r = Object.keys(n).reduce(function(r, i) {
return (t || !n[i].get && !n[i].set) && (r[i] = e.prototype[i]), r;
}, {});
return Object.assign({}, e.prototype, r);
}
r.classPrototype = r, r.default = r, e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.table_tw2cn_plus = {}, t.table_cn2tw_plus = {
"线": "線",
"啮": "齧",
"赃": "贓",
"荡": "蕩",
"发": "發"
}, t.table_tw2cn_min_plus = {
"衝": "衝",
"鹵": "卤"
}, t.table_cn2tw_min_plus = {}, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(20), i = n(109);
t.libTable = i.default;
const o = n(4), u = n(113), a = n(45);
function s(e, t, ...n) {
return e = i.default._get(e, t, ...n), o.array_unique(e).sort();
}
function l(e) {
return function(t, n = {}) {
if (!t) return null;
if (n.skip && -1 != n.skip.indexOf(t)) return [ t ];
let r = i.default[e](t, n);
return (r = o.array_unique(r)).sort(), r;
};
}
function c(e, t = {}) {
if (!e) return null;
if (t.skip && -1 != t.skip.indexOf(e)) return [ e ];
let n = r.jp2zht(e), o = r.jp2zhs(e), l = 0 | t.greedyTable, c;
return s([], e, i.default.tw(e, t), i.default.cn(e, t), (!t.skip || -1 == t.skip.indexOf(n)) && i.default.cn(n, t), (!t.skip || -1 == t.skip.indexOf(o)) && i.default.tw(o, t), i.default.jp(e, t), l && r.cjk2jp(e), l && r.cjk2zhs(e), l && r.cjk2zht(e), l && a.default.zh2jp(e, {
safe: l <= 1
}), l && a.default.jp2zh(e, {
safe: l <= 1
}), l > 1 && u.greedyTableCharArray(e));
}
t._get = s, t.tw = l("tw"), t.cn = l("cn"), t.jp = l("jp"), t.auto = c, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(19);
var i = n(4);
function o(e) {
return r.default.split(e, "");
}
function u(e, t) {
let n = [];
"function" != typeof t && (t = void 0);
let r = Array.isArray(e) ? e : e.toString();
for (let i of r) {
let r = i.charCodeAt(), o;
if (t && void 0 !== (o = t(i, r, e))) {
if (!o) continue;
if (Array.isArray(o)) {
n = n.concat(o);
continue;
}
}
n.push(r);
}
return n;
}
t.array_unique = i.array_unique, t.lazy_unique = i.lazy_unique, t.split = o, t.charCodeAt = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(4), i = n(108), o = r.array_unique([ [ "蝕", "蝕", "蚀" ], [ "絲", "絲", "丝" ], [ "異", "異", "异" ], [ "謎", "謎", "谜" ], [ "氷", "冰", "冰" ], [ "詛", "詛", "诅" ], [ "貪", "貪", "贪" ], [ "館", "館", "馆" ], [ "画", "劃", "划" ], [ "誰", "誰", "谁" ], [ "鶏", "雞", "鸡" ], [ "宮", "宮", "宫" ], [ "殻", "殻", "壳" ], [ "館", "館", "馆" ], [ "槍", "槍", "枪" ], [ "静", "靜", "静" ], [ "髪", "髮", null ], [ "棄", "棄", "弃" ], [ "強", "強", "强" ], [ "罵", "罵", "骂" ], [ "駄", "馱", "驮" ], [ "沢", "澤", "泽" ], [ "歴", "歷", "历" ], [ "暦", "曆", "历" ], [ "刹", "剎", "刹" ], [ "錬", "鍊", "炼" ], [ "蓋", "蓋", "盖" ], [ "決", "決", "决" ], [ "晩", "晚", "晚" ], [ "恒", "恆", "恒" ], [ "准", "準", "准" ], [ "準", "準", "准" ], [ "傑", "傑", "杰" ], [ "圏", "圈", "圈" ], [ "煙", "煙", "烟" ], [ "甦", "甦", "苏" ], [ "並", "並", "并" ], [ "贓", "贓", "赃" ], [ "鹹", "鹹", "咸" ], [ "踪", "蹤", "踪" ], [ "踪", "踪", "踪" ], [ "秘", "祕", "秘" ], [ "黙", "默", "默" ], [ "圧", "壓", "压" ], [ "凄", "淒", "凄" ], [ "凄", "悽", "凄" ], [ "穀󠄁", "穀", "谷" ], [ "鶫", "鶇", "鸫" ], [ "鶇", "鶇", "鸫" ], [ "効", "效", null ], [ "揷", "插", "插" ], [ "賎", "賤", "贱" ] ]), u = r.array_unique([ [ "絶", "絕", "绝" ], [ "別", "別", "别" ], [ "魯", "魯", "鲁" ], [ "蘇", "蘇", "苏" ], [ "巻", "卷", "卷" ], [ "弐", "貳", "贰" ], [ "隷", "隸", "隶" ], [ "挿", "插", "插" ] ]);
t.TABLE = [], o.forEach(function([e, n, r]) {
a(t.TABLE, e, n, r);
}), t.TABLE = r.array_unique(t.TABLE.concat(i.filter(function(e) {
return ![ "尨" ].includes(e[0][0]);
}))), t.TABLE_SAFE = [];
{
let e = [ "系", "欠", "凶", "后", "只", "隻", "无", "叶" ];
t.TABLE = t.TABLE.filter(function(t) {
let [n, r, i] = t;
return !(n[0] == r[0] && n[0] == i[0] || e.includes(n[0]) || e.includes(r[0]) || e.includes(i[0]));
}), t.TABLE_SAFE = [], u.forEach(function([e, n, r]) {
a(t.TABLE, e, n, r), a(t.TABLE_SAFE, e, n, r);
});
let n = [];
for (let e in t.TABLE) {
if (n.includes(e)) continue;
let [r, i, o] = t.TABLE[e], u = !0, a;
for (a in t.TABLE) {
if (a == e) continue;
let [n, r, s] = t.TABLE[a];
if (i.includes(r[0])) {
u = !1;
break;
}
if (o.includes(s[0])) {
u = !1;
break;
}
}
u ? t.TABLE_SAFE.push(t.TABLE[e]) : (n.push(e), n.push(a));
}
}
function a(e, t, n, r) {
return t = Array.isArray(t) ? t : [ t ], n = Array.isArray(n) ? n : [ n ], r = Array.isArray(r) ? r : [ r ], 
e.push([ t, n, r ]), e;
}
t.addNew = a, t.default = t.TABLE;
}, function(e) {
e.exports = [ [ [ "万" ], [ "萬" ], [ "万" ] ], [ [ "予" ], [ "預" ], [ "预" ] ], [ [ "凶" ], [ "兇" ], [ "凶" ] ], [ [ "欠" ], [ "缺" ], [ "缺" ] ], [ [ "与" ], [ "與" ], [ "与" ] ], [ [ "包" ], [ "包" ], [ "包" ] ], [ [ "台" ], [ "台" ], [ "台" ] ], [ [ "弁" ], [ "辨", "瓣", "辯" ], [ "辨", "瓣", "辩" ] ], [ [ "糸" ], [ "絲" ], [ "丝" ] ], [ [ "缶" ], [ "罐" ], [ "罐" ] ], [ [ "虫" ], [ "蟲" ], [ "虫" ] ], [ [ "伝" ], [ "傳" ], [ "传" ] ], [ [ "庄" ], [ "莊" ], [ "庄" ] ], [ [ "余" ], [ "餘" ], [ "余" ] ], [ [ "見" ], [ "見" ], [ "见" ] ], [ [ "貝" ], [ "貝" ], [ "贝" ] ], [ [ "車" ], [ "車" ], [ "车" ] ], [ [ "体" ], [ "體" ], [ "体" ] ], [ [ "尨" ], [ "彪" ], [ "彪" ] ], [ [ "券" ], [ "卷" ], [ "卷" ] ], [ [ "協" ], [ "協" ], [ "协" ] ], [ [ "東" ], [ "東" ], [ "东" ] ], [ [ "糾" ], [ "糾" ], [ "纠" ] ], [ [ "芸" ], [ "藝" ], [ "艺" ] ], [ [ "長" ], [ "長" ], [ "长" ] ], [ [ "門" ], [ "門" ], [ "门" ] ], [ [ "係" ], [ "係" ], [ "系" ] ], [ [ "則" ], [ "則" ], [ "则" ] ], [ [ "帥" ], [ "帥" ], [ "帅" ] ], [ [ "後" ], [ "後" ], [ "后" ] ], [ [ "春" ], [ "春" ], [ "春" ] ], [ [ "為" ], [ "為" ], [ "为" ] ], [ [ "紅" ], [ "紅" ], [ "红" ] ], [ [ "紀" ], [ "紀" ], [ "纪" ] ], [ [ "約" ], [ "約" ], [ "约" ] ], [ [ "計" ], [ "計" ], [ "计" ] ], [ [ "訂" ], [ "訂" ], [ "订" ] ], [ [ "貞" ], [ "貞" ], [ "贞" ] ], [ [ "負" ], [ "負" ], [ "负" ] ], [ [ "軍" ], [ "軍" ], [ "军" ] ], [ [ "軌" ], [ "軌" ], [ "轨" ] ], [ [ "風" ], [ "風" ], [ "风" ] ], [ [ "飛" ], [ "飛" ], [ "飞" ] ], [ [ "個" ], [ "個" ], [ "个" ] ], [ [ "倫" ], [ "倫" ], [ "伦" ] ], [ [ "倉" ], [ "倉" ], [ "仓" ] ], [ [ "凍" ], [ "凍" ], [ "冻" ] ], [ [ "剛" ], [ "剛" ], [ "刚" ] ], [ [ "員" ], [ "員" ], [ "员" ] ], [ [ "孫" ], [ "孫" ], [ "孙" ] ], [ [ "島" ], [ "島" ], [ "岛" ] ], [ [ "師" ], [ "師" ], [ "师" ] ], [ [ "庫" ], [ "庫" ], [ "库" ] ], [ [ "時" ], [ "時" ], [ "时" ] ], [ [ "書" ], [ "書" ], [ "书" ] ], [ [ "畝" ], [ "畝" ], [ "亩" ] ], [ [ "紡" ], [ "紡" ], [ "纺" ] ], [ [ "紋" ], [ "紋" ], [ "纹" ] ], [ [ "純" ], [ "純" ], [ "纯" ] ], [ [ "級" ], [ "級" ], [ "级" ] ], [ [ "納" ], [ "納" ], [ "纳" ] ], [ [ "紙" ], [ "紙" ], [ "纸" ] ], [ [ "紛" ], [ "紛" ], [ "纷" ] ], [ [ "脅" ], [ "脅" ], [ "胁" ] ], [ [ "記" ], [ "記" ], [ "记" ] ], [ [ "討" ], [ "討" ], [ "讨" ] ], [ [ "訓" ], [ "訓" ], [ "训" ] ], [ [ "財" ], [ "財" ], [ "财" ] ], [ [ "貢" ], [ "貢" ], [ "贡" ] ], [ [ "軒" ], [ "軒" ], [ "轩" ] ], [ [ "針" ], [ "針" ], [ "针" ] ], [ [ "陣" ], [ "陣" ], [ "阵" ] ], [ [ "隻" ], [ "隻" ], [ "只" ] ], [ [ "飢" ], [ "饑" ], [ "饥" ] ], [ [ "馬" ], [ "馬" ], [ "马" ] ], [ [ "党" ], [ "黨" ], [ "党" ] ], [ [ "蚕" ], [ "蠶" ], [ "蚕" ] ], [ [ "乾" ], [ "乾" ], [ "干" ] ], [ [ "偽" ], [ "偽" ], [ "伪" ] ], [ [ "偉" ], [ "偉" ], [ "伟" ] ], [ [ "偵" ], [ "偵" ], [ "侦" ] ], [ [ "側" ], [ "側" ], [ "侧" ] ], [ [ "務" ], [ "務" ], [ "务" ] ], [ [ "動" ], [ "動" ], [ "动" ] ], [ [ "問" ], [ "問" ], [ "问" ] ], [ [ "堅" ], [ "堅" ], [ "坚" ] ], [ [ "執" ], [ "執" ], [ "执" ] ], [ [ "婦" ], [ "婦" ], [ "妇" ] ], [ [ "帶" ], [ "帶" ], [ "带" ] ], [ [ "帳" ], [ "帳" ], [ "帐" ] ], [ [ "張" ], [ "張" ], [ "张" ] ], [ [ "掃" ], [ "掃" ], [ "扫" ] ], [ [ "捨" ], [ "捨" ], [ "舍" ] ], [ [ "敗" ], [ "敗" ], [ "败" ] ], [ [ "殺" ], [ "殺" ], [ "杀" ] ], [ [ "現" ], [ "現" ], [ "现" ] ], [ [ "統" ], [ "統" ], [ "统" ] ], [ [ "紹" ], [ "紹" ], [ "绍" ] ], [ [ "細" ], [ "細" ], [ "细" ] ], [ [ "紳" ], [ "紳" ], [ "绅" ] ], [ [ "組" ], [ "組" ], [ "组" ] ], [ [ "終" ], [ "終" ], [ "终" ] ], [ [ "習" ], [ "習" ], [ "习" ] ], [ [ "術" ], [ "術" ], [ "术" ] ], [ [ "規" ], [ "規" ], [ "规" ] ], [ [ "訪" ], [ "訪" ], [ "访" ] ], [ [ "許" ], [ "許" ], [ "许" ] ], [ [ "設" ], [ "設" ], [ "设" ] ], [ [ "訟" ], [ "訟" ], [ "讼" ] ], [ [ "販" ], [ "販" ], [ "贩" ] ], [ [ "責" ], [ "責" ], [ "责" ] ], [ [ "貨" ], [ "貨" ], [ "货" ] ], [ [ "貧" ], [ "貧" ], [ "贫" ] ], [ [ "軟" ], [ "軟" ], [ "软" ] ], [ [ "連" ], [ "連" ], [ "连" ] ], [ [ "釣" ], [ "釣" ], [ "钓" ] ], [ [ "閉" ], [ "閉" ], [ "闭" ] ], [ [ "陳" ], [ "陳" ], [ "陈" ] ], [ [ "陸" ], [ "陸" ], [ "陆" ] ], [ [ "陰" ], [ "陰" ], [ "阴" ] ], [ [ "頂" ], [ "頂" ], [ "顶" ] ], [ [ "魚" ], [ "魚" ], [ "鱼" ] ], [ [ "鳥" ], [ "鳥" ], [ "鸟" ] ], [ [ "紺" ], [ "紺" ], [ "绀" ] ], [ [ "備" ], [ "備" ], [ "备" ] ], [ [ "傘" ], [ "傘" ], [ "伞" ] ], [ [ "創" ], [ "創" ], [ "创" ] ], [ [ "勝" ], [ "勝" ], [ "胜" ] ], [ [ "喪" ], [ "喪" ], [ "丧" ] ], [ [ "場" ], [ "場" ], [ "场" ] ], [ [ "報" ], [ "報" ], [ "报" ] ], [ [ "尋" ], [ "尋" ], [ "寻" ] ], [ [ "幾" ], [ "幾" ], [ "几" ] ], [ [ "復" ], [ "復" ], [ "复" ] ], [ [ "揮" ], [ "揮" ], [ "挥" ] ], [ [ "揚" ], [ "揚" ], [ "扬" ] ], [ [ "棟" ], [ "棟" ], [ "栋" ] ], [ [ "殼" ], [ "殼" ], [ "壳" ] ], [ [ "渦" ], [ "渦" ], [ "涡" ] ], [ [ "湯" ], [ "湯" ], [ "汤" ] ], [ [ "測" ], [ "測" ], [ "测" ] ], [ [ "無" ], [ "無" ], [ "无" ] ], [ [ "猶" ], [ "猶" ], [ "犹" ] ], [ [ "筆" ], [ "筆" ], [ "笔" ] ], [ [ "絞" ], [ "絞" ], [ "绞" ] ], [ [ "結" ], [ "結" ], [ "结" ] ], [ [ "絡" ], [ "絡" ], [ "络" ] ], [ [ "給" ], [ "給" ], [ "给" ] ], [ [ "脹" ], [ "脹" ], [ "胀" ] ], [ [ "華" ], [ "華" ], [ "华" ] ], [ [ "視" ], [ "視" ], [ "视" ] ], [ [ "評" ], [ "評" ], [ "评" ] ], [ [ "詞" ], [ "詞" ], [ "词" ] ], [ [ "証" ], [ "證" ], [ "证" ] ], [ [ "詔" ], [ "詔" ], [ "诏" ] ], [ [ "詐" ], [ "詐" ], [ "诈" ] ], [ [ "訴" ], [ "訴" ], [ "诉" ] ], [ [ "診" ], [ "診" ], [ "诊" ] ], [ [ "貯" ], [ "貯" ], [ "贮" ] ], [ [ "費" ], [ "費" ], [ "费" ] ], [ [ "賀" ], [ "賀" ], [ "贺" ] ], [ [ "貴" ], [ "貴" ], [ "贵" ] ], [ [ "買" ], [ "買" ], [ "买" ] ], [ [ "貿" ], [ "貿" ], [ "贸" ] ], [ [ "貸" ], [ "貸" ], [ "贷" ] ], [ [ "軸" ], [ "軸" ], [ "轴" ] ], [ [ "進" ], [ "進" ], [ "进" ] ], [ [ "郵" ], [ "郵" ], [ "邮" ] ], [ [ "鈍" ], [ "鈍" ], [ "钝" ] ], [ [ "開" ], [ "開" ], [ "开" ] ], [ [ "閑" ], [ "閒" ], [ "闲" ] ], [ [ "間" ], [ "間" ], [ "间" ] ], [ [ "隊" ], [ "隊" ], [ "队" ] ], [ [ "階" ], [ "階" ], [ "阶" ] ], [ [ "陽" ], [ "陽" ], [ "阳" ] ], [ [ "雲" ], [ "雲" ], [ "云" ] ], [ [ "項" ], [ "項" ], [ "项" ] ], [ [ "順" ], [ "順" ], [ "顺" ] ], [ [ "飯" ], [ "飯" ], [ "饭" ] ], [ [ "飲" ], [ "飲" ], [ "饮" ] ], [ [ "粧" ], [ "妝" ], [ "妆" ] ], [ [ "債" ], [ "債" ], [ "债" ] ], [ [ "傾" ], [ "傾" ], [ "倾" ] ], [ [ "傷" ], [ "傷" ], [ "伤" ] ], [ [ "勢" ], [ "勢" ], [ "势" ] ], [ [ "園" ], [ "園" ], [ "园" ] ], [ [ "塗" ], [ "塗" ], [ "涂" ] ], [ [ "塊" ], [ "塊" ], [ "块" ] ], [ [ "幹" ], [ "幹" ], [ "干" ] ], [ [ "愛" ], [ "愛" ], [ "爱" ] ], [ [ "損" ], [ "損" ], [ "损" ] ], [ [ "業" ], [ "業" ], [ "业" ] ], [ [ "極" ], [ "極" ], [ "极" ] ], [ [ "溝" ], [ "溝" ], [ "沟" ] ], [ [ "滅" ], [ "滅" ], [ "灭" ] ], [ [ "準" ], [ "準" ], [ "准" ] ], [ [ "煩" ], [ "煩" ], [ "烦" ] ], [ [ "痴" ], [ "痴" ], [ "痴" ] ], [ [ "節" ], [ "節" ], [ "节" ] ], [ [ "絹" ], [ "絹" ], [ "绢" ] ], [ [ "義" ], [ "義" ], [ "义" ] ], [ [ "聖" ], [ "聖" ], [ "圣" ] ], [ [ "腸" ], [ "腸" ], [ "肠" ] ], [ [ "葉" ], [ "葉" ], [ "叶" ] ], [ [ "虜" ], [ "虜" ], [ "虏" ] ], [ [ "補" ], [ "補" ], [ "补" ] ], [ [ "該" ], [ "該" ], [ "该" ] ], [ [ "詳" ], [ "詳" ], [ "详" ] ], [ [ "試" ], [ "試" ], [ "试" ] ], [ [ "詩" ], [ "詩" ], [ "诗" ] ], [ [ "詰" ], [ "詰" ], [ "诘" ] ], [ [ "誇" ], [ "誇" ], [ "夸" ] ], [ [ "誠" ], [ "誠" ], [ "诚" ] ], [ [ "話" ], [ "話" ], [ "话" ] ], [ [ "賊" ], [ "賊" ], [ "贼" ] ], [ [ "資" ], [ "資" ], [ "资" ] ], [ [ "賄" ], [ "賄" ], [ "贿" ] ], [ [ "賃" ], [ "賃" ], [ "赁" ] ], [ [ "較" ], [ "較" ], [ "较" ] ], [ [ "載" ], [ "載" ], [ "载" ] ], [ [ "農" ], [ "農" ], [ "农" ] ], [ [ "運" ], [ "運" ], [ "运" ] ], [ [ "達" ], [ "達" ], [ "达" ] ], [ [ "違" ], [ "違" ], [ "违" ] ], [ [ "過" ], [ "過" ], [ "过" ] ], [ [ "鉛" ], [ "鉛" ], [ "铅" ] ], [ [ "鈴" ], [ "鈴" ], [ "铃" ] ], [ [ "電" ], [ "電" ], [ "电" ] ], [ [ "預" ], [ "預" ], [ "预" ] ], [ [ "頑" ], [ "頑" ], [ "顽" ] ], [ [ "頒" ], [ "頒" ], [ "颁" ] ], [ [ "飼" ], [ "飼" ], [ "饲" ] ], [ [ "飽" ], [ "飽" ], [ "饱" ] ], [ [ "飾" ], [ "飾" ], [ "饰" ] ], [ [ "馱" ], [ "馱" ], [ "驮" ] ], [ [ "触" ], [ "觸" ], [ "触" ] ], [ [ "豊" ], [ "豐" ], [ "丰" ] ], [ [ "銃" ], [ "銃" ], [ "铳" ] ], [ [ "裏" ], [ "裡" ], [ "里" ] ], [ [ "僕" ], [ "僕" ], [ "仆" ] ], [ [ "嘆" ], [ "嘆" ], [ "叹" ] ], [ [ "夢" ], [ "夢" ], [ "梦" ] ], [ [ "奪" ], [ "奪" ], [ "夺" ] ], [ [ "寧" ], [ "寧" ], [ "宁" ] ], [ [ "幣" ], [ "幣" ], [ "币" ] ], [ [ "徹" ], [ "徹" ], [ "彻" ] ], [ [ "態" ], [ "態" ], [ "态" ] ], [ [ "漬" ], [ "漬" ], [ "渍" ] ], [ [ "漢" ], [ "漢" ], [ "汉" ] ], [ [ "漸" ], [ "漸" ], [ "渐" ] ], [ [ "漁" ], [ "漁" ], [ "渔" ] ], [ [ "獄" ], [ "獄" ], [ "狱" ] ], [ [ "監" ], [ "監" ], [ "监" ] ], [ [ "禍" ], [ "禍" ], [ "祸" ] ], [ [ "種" ], [ "種" ], [ "种" ] ], [ [ "箇" ], [ "個" ], [ "个" ] ], [ [ "緊" ], [ "緊" ], [ "紧" ] ], [ [ "網" ], [ "網" ], [ "网" ] ], [ [ "綱" ], [ "綱" ], [ "纲" ] ], [ [ "綿" ], [ "綿" ], [ "绵" ] ], [ [ "維" ], [ "維" ], [ "维" ] ], [ [ "緒" ], [ "緒" ], [ "绪" ] ], [ [ "聞" ], [ "聞" ], [ "闻" ] ], [ [ "製" ], [ "製" ], [ "制" ] ], [ [ "誌" ], [ "誌" ], [ "志" ] ], [ [ "語" ], [ "語" ], [ "语" ] ], [ [ "認" ], [ "認" ], [ "认" ] ], [ [ "誤" ], [ "誤" ], [ "误" ] ], [ [ "誘" ], [ "誘" ], [ "诱" ] ], [ [ "賓" ], [ "賓" ], [ "宾" ] ], [ [ "遠" ], [ "遠" ], [ "远" ] ], [ [ "銀" ], [ "銀" ], [ "银" ] ], [ [ "銅" ], [ "銅" ], [ "铜" ] ], [ [ "銘" ], [ "銘" ], [ "铭" ] ], [ [ "銑" ], [ "銑" ], [ "铣" ] ], [ [ "閣" ], [ "閣" ], [ "阁" ] ], [ [ "閥" ], [ "閥" ], [ "阀" ] ], [ [ "際" ], [ "際" ], [ "际" ] ], [ [ "領" ], [ "領" ], [ "领" ] ], [ [ "鳴" ], [ "鳴" ], [ "鸣" ] ], [ [ "億" ], [ "億" ], [ "亿" ] ], [ [ "儀" ], [ "儀" ], [ "仪" ] ], [ [ "劇" ], [ "劇" ], [ "剧" ] ], [ [ "噴" ], [ "噴" ], [ "喷" ] ], [ [ "墳" ], [ "墳" ], [ "坟" ] ], [ [ "墜" ], [ "墜" ], [ "坠" ] ], [ [ "寬" ], [ "寬" ], [ "宽" ] ], [ [ "審" ], [ "審" ], [ "审" ] ], [ [ "層" ], [ "層" ], [ "层" ] ], [ [ "慶" ], [ "慶" ], [ "庆" ] ], [ [ "慮" ], [ "慮" ], [ "虑" ] ], [ [ "憂" ], [ "憂" ], [ "忧" ] ], [ [ "憤" ], [ "憤" ], [ "愤" ] ], [ [ "撮" ], [ "攝" ], [ "摄" ] ], [ [ "敵" ], [ "敵" ], [ "敌" ] ], [ [ "暫" ], [ "暫" ], [ "暂" ] ], [ [ "標" ], [ "標" ], [ "标" ] ], [ [ "潔" ], [ "潔" ], [ "洁" ] ], [ [ "潤" ], [ "潤" ], [ "润" ] ], [ [ "熱" ], [ "熱" ], [ "热" ] ], [ [ "盤" ], [ "盤" ], [ "盘" ] ], [ [ "確" ], [ "確" ], [ "确" ] ], [ [ "窮" ], [ "窮" ], [ "穷" ] ], [ [ "範" ], [ "範" ], [ "范" ] ], [ [ "締" ], [ "締" ], [ "缔" ] ], [ [ "練" ], [ "練" ], [ "练" ] ], [ [ "緯" ], [ "緯" ], [ "纬" ] ], [ [ "編" ], [ "編" ], [ "编" ] ], [ [ "線" ], [ "線" ], [ "线" ] ], [ [ "緩" ], [ "緩" ], [ "缓" ] ], [ [ "罷" ], [ "罷" ], [ "罢" ] ], [ [ "膚" ], [ "膚" ], [ "肤" ] ], [ [ "衛" ], [ "衛" ], [ "卫" ] ], [ [ "衝" ], [ "衝" ], [ "冲" ] ], [ [ "複" ], [ "複" ], [ "复" ] ], [ [ "談" ], [ "談" ], [ "谈" ] ], [ [ "誕" ], [ "誕" ], [ "诞" ] ], [ [ "請" ], [ "請" ], [ "请" ] ], [ [ "諸" ], [ "諸" ], [ "诸" ] ], [ [ "課" ], [ "課" ], [ "课" ] ], [ [ "調" ], [ "調" ], [ "调" ] ], [ [ "論" ], [ "論" ], [ "论" ] ], [ [ "賠" ], [ "賠" ], [ "赔" ] ], [ [ "賞" ], [ "賞" ], [ "赏" ] ], [ [ "賦" ], [ "賦" ], [ "赋" ] ], [ [ "賢" ], [ "賢" ], [ "贤" ] ], [ [ "賜" ], [ "賜" ], [ "赐" ] ], [ [ "質" ], [ "質" ], [ "质" ] ], [ [ "輝" ], [ "輝" ], [ "辉" ] ], [ [ "輩" ], [ "輩" ], [ "辈" ] ], [ [ "輪" ], [ "輪" ], [ "轮" ] ], [ [ "適" ], [ "適" ], [ "适" ] ], [ [ "遷" ], [ "遷" ], [ "迁" ] ], [ [ "養" ], [ "養" ], [ "养" ] ], [ [ "餓" ], [ "餓" ], [ "饿" ] ], [ [ "駐" ], [ "駐" ], [ "驻" ] ], [ [ "墾" ], [ "墾" ], [ "垦" ] ], [ [ "壇" ], [ "壇" ], [ "坛" ] ], [ [ "奮" ], [ "奮" ], [ "奋" ] ], [ [ "導" ], [ "導" ], [ "导" ] ], [ [ "憲" ], [ "憲" ], [ "宪" ] ], [ [ "憶" ], [ "憶" ], [ "忆" ] ], [ [ "擁" ], [ "擁" ], [ "拥" ] ], [ [ "曇" ], [ "曇" ], [ "昙" ] ], [ [ "樸" ], [ "樸" ], [ "朴" ] ], [ [ "樹" ], [ "樹" ], [ "树" ] ], [ [ "橋" ], [ "橋" ], [ "桥" ] ], [ [ "機" ], [ "機" ], [ "机" ] ], [ [ "濃" ], [ "濃" ], [ "浓" ] ], [ [ "濁" ], [ "濁" ], [ "浊" ] ], [ [ "積" ], [ "積" ], [ "积" ] ], [ [ "築" ], [ "築" ], [ "筑" ] ], [ [ "篤" ], [ "篤" ], [ "笃" ] ], [ [ "縛" ], [ "縛" ], [ "缚" ] ], [ [ "興" ], [ "興" ], [ "兴" ] ], [ [ "親" ], [ "親" ], [ "亲" ] ], [ [ "謀" ], [ "謀" ], [ "谋" ] ], [ [ "諮" ], [ "諮" ], [ "谘" ] ], [ [ "諾" ], [ "諾" ], [ "诺" ] ], [ [ "謁" ], [ "謁" ], [ "谒" ] ], [ [ "諭" ], [ "諭" ], [ "谕" ] ], [ [ "輸" ], [ "輸" ], [ "输" ] ], [ [ "選" ], [ "選" ], [ "选" ] ], [ [ "遺" ], [ "遺" ], [ "遗" ] ], [ [ "錠" ], [ "錠" ], [ "锭" ] ], [ [ "錯" ], [ "錯" ], [ "错" ] ], [ [ "鋼" ], [ "鋼" ], [ "钢" ] ], [ [ "頻" ], [ "頻" ], [ "频" ] ], [ [ "頭" ], [ "頭" ], [ "头" ] ], [ [ "優" ], [ "優" ], [ "优" ] ], [ [ "償" ], [ "償" ], [ "偿" ] ], [ [ "嚇" ], [ "嚇" ], [ "吓" ] ], [ [ "懇" ], [ "懇" ], [ "恳" ] ], [ [ "擬" ], [ "擬" ], [ "拟" ] ], [ [ "濫" ], [ "濫" ], [ "滥" ] ], [ [ "獲" ], [ "獲" ], [ "获" ] ], [ [ "環" ], [ "環" ], [ "环" ] ], [ [ "療" ], [ "療" ], [ "疗" ] ], [ [ "矯" ], [ "矯" ], [ "矫" ] ], [ [ "縮" ], [ "縮" ], [ "缩" ] ], [ [ "績" ], [ "績" ], [ "绩" ] ], [ [ "縫" ], [ "縫" ], [ "缝" ] ], [ [ "臨" ], [ "臨" ], [ "临" ] ], [ [ "謙" ], [ "謙" ], [ "谦" ] ], [ [ "講" ], [ "講" ], [ "讲" ] ], [ [ "謝" ], [ "謝" ], [ "谢" ] ], [ [ "謄" ], [ "謄" ], [ "誊" ] ], [ [ "轄" ], [ "轄" ], [ "辖" ] ], [ [ "還" ], [ "還" ], [ "还" ] ], [ [ "醜" ], [ "醜" ], [ "丑" ] ], [ [ "錘" ], [ "錘" ], [ "锤" ] ], [ [ "鍾" ], [ "鍾" ], [ "钟" ] ], [ [ "鍛" ], [ "鍛" ], [ "锻" ] ], [ [ "鮮" ], [ "鮮" ], [ "鲜" ] ], [ [ "礎" ], [ "礎" ], [ "础" ] ], [ [ "簡" ], [ "簡" ], [ "简" ] ], [ [ "糧" ], [ "糧" ], [ "粮" ] ], [ [ "織" ], [ "織" ], [ "织" ] ], [ [ "繕" ], [ "繕" ], [ "缮" ] ], [ [ "職" ], [ "職" ], [ "职" ] ], [ [ "薦" ], [ "薦" ], [ "荐" ] ], [ [ "謹" ], [ "謹" ], [ "谨" ] ], [ [ "鎖" ], [ "鎖" ], [ "锁" ] ], [ [ "鎮" ], [ "鎮" ], [ "镇" ] ], [ [ "離" ], [ "離" ], [ "离" ] ], [ [ "額" ], [ "額" ], [ "额" ] ], [ [ "題" ], [ "題" ], [ "题" ] ], [ [ "騎" ], [ "騎" ], [ "骑" ] ], [ [ "懲" ], [ "懲" ], [ "惩" ] ], [ [ "璽" ], [ "璽" ], [ "玺" ] ], [ [ "穫" ], [ "穫" ], [ "获" ] ], [ [ "繭" ], [ "繭" ], [ "茧" ] ], [ [ "羅" ], [ "羅" ], [ "罗" ] ], [ [ "譜" ], [ "譜" ], [ "谱" ] ], [ [ "識" ], [ "識" ], [ "识" ] ], [ [ "贈" ], [ "贈" ], [ "赠" ] ], [ [ "鏡" ], [ "鏡" ], [ "镜" ] ], [ [ "難" ], [ "難" ], [ "难" ] ], [ [ "霧" ], [ "霧" ], [ "雾" ] ], [ [ "類" ], [ "類" ], [ "类" ] ], [ [ "願" ], [ "願" ], [ "愿" ] ], [ [ "鯨" ], [ "鯨" ], [ "鲸" ] ], [ [ "麗" ], [ "麗" ], [ "丽" ] ], [ [ "繰" ], [ "繰" ], [ "缲" ] ], [ [ "懸" ], [ "懸" ], [ "悬" ] ], [ [ "競" ], [ "競" ], [ "竞" ] ], [ [ "艦" ], [ "艦" ], [ "舰" ] ], [ [ "議" ], [ "議" ], [ "议" ] ], [ [ "騰" ], [ "騰" ], [ "腾" ] ], [ [ "欄" ], [ "欄" ], [ "栏" ] ], [ [ "護" ], [ "護" ], [ "护" ] ], [ [ "躍" ], [ "躍" ], [ "跃" ] ], [ [ "響" ], [ "響" ], [ "响" ] ], [ [ "襲" ], [ "襲" ], [ "袭" ] ], [ [ "鑑" ], [ "鑑" ], [ "鉴" ] ], [ [ "驚" ], [ "驚" ], [ "惊" ] ], [ [ "両" ], [ "兩" ], [ "两" ] ], [ [ "乗" ], [ "乘" ], [ "乘" ] ], [ [ "乱" ], [ "亂" ], [ "乱" ] ], [ [ "亀" ], [ "龜" ], [ "龟" ] ], [ [ "亜" ], [ "亞" ], [ "亚" ] ], [ [ "仏" ], [ "佛" ], [ "佛" ] ], [ [ "仮" ], [ "假" ], [ "假" ] ], [ [ "会" ], [ "會" ], [ "会" ] ], [ [ "価" ], [ "價" ], [ "价" ] ], [ [ "倶" ], [ "俱" ], [ "俱" ] ], [ [ "倹" ], [ "儉" ], [ "俭" ] ], [ [ "児" ], [ "兒" ], [ "儿" ] ], [ [ "内" ], [ "內" ], [ "内" ] ], [ [ "円" ], [ "圓" ], [ "圆" ] ], [ [ "写" ], [ "寫" ], [ "写" ] ], [ [ "冨" ], [ "富" ], [ "富" ] ], [ [ "処" ], [ "處" ], [ "处" ] ], [ [ "剣" ], [ "劍" ], [ "剑" ] ], [ [ "剤" ], [ "劑" ], [ "剂" ] ], [ [ "剰" ], [ "剩" ], [ "剩" ] ], [ [ "励" ], [ "勵" ], [ "励" ] ], [ [ "労" ], [ "勞" ], [ "劳" ] ], [ [ "勧" ], [ "勸" ], [ "劝" ] ], [ [ "勲" ], [ "勳" ], [ "勋" ] ], [ [ "区" ], [ "區" ], [ "区" ] ], [ [ "医" ], [ "醫" ], [ "医" ] ], [ [ "単" ], [ "單" ], [ "单" ] ], [ [ "厳" ], [ "嚴" ], [ "严" ] ], [ [ "参" ], [ "參" ], [ "参" ] ], [ [ "双" ], [ "雙" ], [ "双" ] ], [ [ "収" ], [ "收" ], [ "收" ] ], [ [ "号" ], [ "號" ], [ "号" ] ], [ [ "啓" ], [ "啟" ], [ "启" ] ], [ [ "営" ], [ "營" ], [ "营" ] ], [ [ "嘱" ], [ "囑" ], [ "嘱" ] ], [ [ "団" ], [ "團" ], [ "团" ] ], [ [ "囲" ], [ "圍" ], [ "围" ] ], [ [ "図" ], [ "圖" ], [ "图" ] ], [ [ "国" ], [ "國" ], [ "国" ] ], [ [ "圧" ], [ "壓" ], [ "压" ] ], [ [ "堕" ], [ "墮" ], [ "堕" ] ], [ [ "塁" ], [ "壘" ], [ "垒" ] ], [ [ "塩" ], [ "鹽" ], [ "盐" ] ], [ [ "増" ], [ "增" ], [ "增" ] ], [ [ "壊" ], [ "壞" ], [ "坏" ] ], [ [ "壌" ], [ "壤" ], [ "壤" ] ], [ [ "壮" ], [ "壯" ], [ "壮" ] ], [ [ "声" ], [ "聲" ], [ "声" ] ], [ [ "壱" ], [ "壹" ], [ "壹" ] ], [ [ "売" ], [ "賣" ], [ "卖" ] ], [ [ "変" ], [ "變" ], [ "变" ] ], [ [ "奨" ], [ "獎" ], [ "奖" ] ], [ [ "姉" ], [ "姐" ], [ "姐" ] ], [ [ "姫" ], [ "姬" ], [ "姬" ] ], [ [ "娯" ], [ "娛" ], [ "娱" ] ], [ [ "嬢" ], [ "孃" ], [ "娘" ] ], [ [ "学" ], [ "學" ], [ "学" ] ], [ [ "宝" ], [ "寶" ], [ "宝" ] ], [ [ "実" ], [ "實" ], [ "实" ] ], [ [ "寛" ], [ "寬" ], [ "宽" ] ], [ [ "寝" ], [ "寢" ], [ "寝" ] ], [ [ "対" ], [ "對" ], [ "对" ] ], [ [ "寿" ], [ "壽" ], [ "寿" ] ], [ [ "専" ], [ "專" ], [ "专" ] ], [ [ "将" ], [ "將" ], [ "将" ] ], [ [ "尽" ], [ "盡" ], [ "尽" ] ], [ [ "属" ], [ "屬" ], [ "属" ] ], [ [ "峡" ], [ "峽" ], [ "峡" ] ], [ [ "巌" ], [ "巖" ], [ "巖" ] ], [ [ "巻" ], [ "卷" ], [ "卷" ] ], [ [ "帯" ], [ "帶" ], [ "带" ] ], [ [ "帰" ], [ "歸" ], [ "归" ] ], [ [ "庁" ], [ "廳" ], [ "厅" ] ], [ [ "広" ], [ "廣" ], [ "广" ] ], [ [ "廃" ], [ "廢" ], [ "废" ] ], [ [ "廼" ], [ "迺" ], [ "迺" ] ], [ [ "弍" ], [ "貳" ], [ "贰" ] ], [ [ "弐" ], [ "貳" ], [ "贰" ] ], [ [ "弥" ], [ "彌" ], [ "弥" ] ], [ [ "弾" ], [ "彈" ], [ "弹" ] ], [ [ "当" ], [ "當" ], [ "当" ] ], [ [ "彦" ], [ "彥" ], [ "彥" ] ], [ [ "径" ], [ "徑" ], [ "径" ] ], [ [ "従" ], [ "從" ], [ "从" ] ], [ [ "徳" ], [ "德" ], [ "德" ] ], [ [ "徴" ], [ "徵" ], [ "征" ] ], [ [ "応" ], [ "應" ], [ "应" ] ], [ [ "恋" ], [ "戀" ], [ "恋" ] ], [ [ "恵" ], [ "惠" ], [ "惠" ] ], [ [ "悦" ], [ "悅" ], [ "悅" ] ], [ [ "悩" ], [ "惱" ], [ "恼" ] ], [ [ "悪" ], [ "惡" ], [ "恶" ] ], [ [ "惨" ], [ "慘" ], [ "惨" ] ], [ [ "懐" ], [ "懷" ], [ "怀" ] ], [ [ "戦" ], [ "戰" ], [ "战" ] ], [ [ "戯" ], [ "戲" ], [ "戏" ] ], [ [ "戸" ], [ "戶" ], [ "户" ] ], [ [ "払" ], [ "拂" ], [ "拂" ] ], [ [ "択" ], [ "擇" ], [ "择" ] ], [ [ "担" ], [ "擔" ], [ "担" ] ], [ [ "拝" ], [ "拜" ], [ "拜" ] ], [ [ "拠" ], [ "據" ], [ "据" ] ], [ [ "拡" ], [ "擴" ], [ "扩" ] ], [ [ "挙" ], [ "舉" ], [ "举" ] ], [ [ "挟" ], [ "挾" ], [ "挟" ] ], [ [ "掲" ], [ "揭" ], [ "揭" ] ], [ [ "掴" ], [ "摑" ], [ "掴" ] ], [ [ "揺" ], [ "搖" ], [ "摇" ] ], [ [ "摂" ], [ "攝" ], [ "摄" ] ], [ [ "撃" ], [ "擊" ], [ "击" ] ], [ [ "数" ], [ "數" ], [ "数" ] ], [ [ "斉" ], [ "齊" ], [ "齐" ] ], [ [ "斎" ], [ "齋" ], [ "斋" ] ], [ [ "断" ], [ "斷" ], [ "断" ] ], [ [ "旧" ], [ "舊" ], [ "旧" ] ], [ [ "昼" ], [ "晝" ], [ "昼" ] ], [ [ "暁" ], [ "曉" ], [ "晓" ] ], [ [ "暦" ], [ "曆" ], [ "历" ] ], [ [ "曽" ], [ "曾" ], [ "曾" ] ], [ [ "条" ], [ "條" ], [ "条" ] ], [ [ "来" ], [ "來" ], [ "来" ] ], [ [ "枢" ], [ "樞" ], [ "枢" ] ], [ [ "査" ], [ "查" ], [ "查" ] ], [ [ "栄" ], [ "榮" ], [ "荣" ] ], [ [ "桜" ], [ "櫻" ], [ "樱" ] ], [ [ "桟" ], [ "棧" ], [ "栈" ] ], [ [ "検" ], [ "檢" ], [ "检" ] ], [ [ "楼" ], [ "樓" ], [ "楼" ] ], [ [ "楽" ], [ "樂" ], [ "乐" ] ], [ [ "様" ], [ "樣" ], [ "样" ] ], [ [ "権" ], [ "權" ], [ "权" ] ], [ [ "欧" ], [ "歐" ], [ "欧" ] ], [ [ "歓" ], [ "歡" ], [ "欢" ] ], [ [ "歩" ], [ "步" ], [ "步" ] ], [ [ "歯" ], [ "齒" ], [ "齿" ] ], [ [ "歳" ], [ "歲" ], [ "岁" ] ], [ [ "歴" ], [ "歷" ], [ "历" ] ], [ [ "残" ], [ "殘" ], [ "残" ] ], [ [ "殴" ], [ "毆" ], [ "殴" ] ], [ [ "気" ], [ "氣" ], [ "气" ] ], [ [ "沢" ], [ "澤" ], [ "泽" ] ], [ [ "浅" ], [ "淺" ], [ "浅" ] ], [ [ "浜" ], [ "濱" ], [ "滨" ] ], [ [ "涙" ], [ "淚" ], [ "泪" ] ], [ [ "済" ], [ "濟" ], [ "济" ] ], [ [ "渋" ], [ "涉", "澀" ], [ "涉", "涩" ] ], [ [ "渓" ], [ "溪" ], [ "溪" ] ], [ [ "湾" ], [ "灣" ], [ "湾" ] ], [ [ "湿" ], [ "濕" ], [ "湿" ] ], [ [ "満" ], [ "滿" ], [ "满" ] ], [ [ "滝" ], [ "瀧" ], [ "泷" ] ], [ [ "滞" ], [ "滯" ], [ "滞" ] ], [ [ "瀬" ], [ "瀨" ], [ "濑" ] ], [ [ "灯" ], [ "燈" ], [ "灯" ] ], [ [ "炉" ], [ "爐" ], [ "炉" ] ], [ [ "点" ], [ "點" ], [ "点" ] ], [ [ "焔" ], [ "焰" ], [ "焰" ] ], [ [ "焼" ], [ "燒" ], [ "烧" ] ], [ [ "犠" ], [ "犧" ], [ "牺" ] ], [ [ "状" ], [ "狀" ], [ "状" ] ], [ [ "独" ], [ "獨" ], [ "独" ] ], [ [ "狭" ], [ "狹" ], [ "狭" ] ], [ [ "猟" ], [ "獵" ], [ "猎" ] ], [ [ "猫" ], [ "貓" ], [ "猫" ] ], [ [ "献" ], [ "獻" ], [ "献" ] ], [ [ "獣" ], [ "獸" ], [ "兽" ] ], [ [ "産" ], [ "產" ], [ "产" ] ], [ [ "画" ], [ "畫" ], [ "画" ] ], [ [ "畳" ], [ "疊" ], [ "叠" ] ], [ [ "発" ], [ "發" ], [ "发" ] ], [ [ "県" ], [ "縣" ], [ "县" ] ], [ [ "着" ], [ "著" ], [ "著" ] ], [ [ "砕" ], [ "碎" ], [ "碎" ] ], [ [ "礼" ], [ "禮" ], [ "礼" ] ], [ [ "禅" ], [ "禪" ], [ "禅" ] ], [ [ "称" ], [ "稱" ], [ "称" ] ], [ [ "稲" ], [ "稻" ], [ "稻" ] ], [ [ "穂" ], [ "穗" ], [ "穗" ] ], [ [ "穏" ], [ "穩" ], [ "稳" ] ], [ [ "窃" ], [ "竊" ], [ "窃" ] ], [ [ "竜" ], [ "龍" ], [ "龙" ] ], [ [ "粋" ], [ "粹" ], [ "粹" ] ], [ [ "粛" ], [ "肅" ], [ "肃" ] ], [ [ "経" ], [ "經" ], [ "经" ] ], [ [ "絵" ], [ "繪" ], [ "绘" ] ], [ [ "絶" ], [ "絶" ], [ "绝" ] ], [ [ "継" ], [ "繼" ], [ "继" ] ], [ [ "続" ], [ "續" ], [ "续" ] ], [ [ "総" ], [ "總" ], [ "总" ] ], [ [ "緑" ], [ "綠" ], [ "绿" ] ], [ [ "縁" ], [ "緣" ], [ "缘" ] ], [ [ "縄" ], [ "繩" ], [ "绳" ] ], [ [ "縦" ], [ "縱" ], [ "纵" ] ], [ [ "繊" ], [ "纖" ], [ "纤" ] ], [ [ "罸" ], [ "罰" ], [ "罚" ] ], [ [ "聡" ], [ "聰" ], [ "聪" ] ], [ [ "聴" ], [ "聽" ], [ "听" ] ], [ [ "胆" ], [ "膽" ], [ "胆" ] ], [ [ "脚" ], [ "腳" ], [ "脚" ] ], [ [ "脳" ], [ "腦" ], [ "脑" ] ], [ [ "臓" ], [ "臟" ], [ "脏" ] ], [ [ "舗" ], [ "舖" ], [ "铺" ] ], [ [ "茎" ], [ "莖" ], [ "茎" ] ], [ [ "荘" ], [ "莊" ], [ "庄" ] ], [ [ "蒋" ], [ "蔣" ], [ "蒋" ] ], [ [ "蔵" ], [ "藏" ], [ "藏" ] ], [ [ "薬" ], [ "藥" ], [ "药" ] ], [ [ "虚" ], [ "虛" ], [ "虚" ] ], [ [ "蛍" ], [ "螢" ], [ "萤" ] ], [ [ "蛮" ], [ "蠻" ], [ "蛮" ] ], [ [ "衆" ], [ "眾" ], [ "众" ] ], [ [ "装" ], [ "裝" ], [ "装" ] ], [ [ "覇" ], [ "霸" ], [ "霸" ] ], [ [ "覚" ], [ "覺" ], [ "觉" ] ], [ [ "覧" ], [ "覽" ], [ "览" ] ], [ [ "観" ], [ "觀" ], [ "观" ] ], [ [ "訳" ], [ "譯" ], [ "译" ] ], [ [ "誉" ], [ "譽" ], [ "誉" ] ], [ [ "説" ], [ "說" ], [ "说" ] ], [ [ "読" ], [ "讀" ], [ "读" ] ], [ [ "謡" ], [ "謠" ], [ "谣" ] ], [ [ "譲" ], [ "讓" ], [ "让" ] ], [ [ "賛" ], [ "贊" ], [ "赞" ] ], [ [ "践" ], [ "踐" ], [ "践" ] ], [ [ "転" ], [ "轉" ], [ "转" ] ], [ [ "軽" ], [ "輕" ], [ "轻" ] ], [ [ "辞" ], [ "辭" ], [ "辞" ] ], [ [ "辺" ], [ "邊" ], [ "边" ] ], [ [ "逓" ], [ "遞" ], [ "递" ] ], [ [ "遅" ], [ "遲" ], [ "迟" ] ], [ [ "遥" ], [ "遙" ], [ "遥" ] ], [ [ "郷" ], [ "鄉" ], [ "乡" ] ], [ [ "酔" ], [ "醉" ], [ "醉" ] ], [ [ "醸" ], [ "釀" ], [ "酿" ] ], [ [ "釈" ], [ "釋" ], [ "释" ] ], [ [ "鉄" ], [ "鐵" ], [ "铁" ] ], [ [ "鉢" ], [ "鉢" ], [ "钵" ] ], [ [ "鉱" ], [ "礦" ], [ "矿" ] ], [ [ "銭" ], [ "錢" ], [ "钱" ] ], [ [ "鋭" ], [ "鋭" ], [ "锐" ] ], [ [ "鋳" ], [ "鑄" ], [ "铸" ] ], [ [ "録" ], [ "錄" ], [ "录" ] ], [ [ "関" ], [ "關" ], [ "关" ] ], [ [ "閲" ], [ "閲" ], [ "阅" ] ], [ [ "闘" ], [ "鬥" ], [ "斗" ] ], [ [ "陥" ], [ "陷" ], [ "陷" ] ], [ [ "険" ], [ "險" ], [ "险" ] ], [ [ "随" ], [ "隨" ], [ "随" ] ], [ [ "隠" ], [ "隱" ], [ "隐" ] ], [ [ "隣" ], [ "鄰" ], [ "邻" ] ], [ [ "隷" ], [ "隷" ], [ "隶" ] ], [ [ "雑" ], [ "雜" ], [ "杂" ] ], [ [ "霊" ], [ "靈" ], [ "灵" ] ], [ [ "頼" ], [ "賴" ], [ "赖" ] ], [ [ "顔" ], [ "顏" ], [ "颜" ] ], [ [ "顕" ], [ "顯" ], [ "显" ] ], [ [ "駅" ], [ "驛" ], [ "驿" ] ], [ [ "駆" ], [ "驅" ], [ "驱" ] ], [ [ "騒" ], [ "騷" ], [ "骚" ] ], [ [ "験" ], [ "驗" ], [ "验" ] ], [ [ "騨" ], [ "驔" ], [ "驔" ] ], [ [ "髄" ], [ "髓" ], [ "髓" ] ], [ [ "鬪" ], [ "鬥" ], [ "斗" ] ], [ [ "鶏" ], [ "鷄" ], [ "鸡" ] ], [ [ "麦" ], [ "麥" ], [ "麦" ] ], [ [ "黄" ], [ "黃" ], [ "黄" ] ], [ [ "黒" ], [ "黑" ], [ "黑" ] ], [ [ "黙" ], [ "默" ], [ "默" ] ], [ [ "齢" ], [ "齡" ], [ "龄" ] ] ];
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(14), i = n(4), o = n(110), u = n(45);
t._table_tw = {
"罗": "羅",
"恶": "惡",
"苏": "蘇",
"馆": "館"
};
let a = {
"の": [ "の", "之", "的" ],
"と": [ "と", "與", "与" ],
"画": [ "划", "画", "劃", "畫" ],
"闘": [ "斗" ],
"鬥": [ "斗" ],
"鬭": [ "斗" ],
"鬪": [ "斗" ],
"闇": [ "暗" ],
"図": [ "図", "圖", "图" ],
"当": [ "当", "噹", "當", "儅" ],
"閤": [ "合" ],
"阁": [ "合" ],
"罗": [ "羅", "罗", "儸", "㑩", "囉", "啰" ],
"干": [ "幹", "乾", "干" ],
"幹": [ "幹", "干" ],
"乾": [ "干", "乾", "亁", "乹" ],
"亁": [ "乾", "亁", "乹" ],
"乹": [ "乾", "亁", "乹" ],
"历": [ "历", "歴", "歷", "暦", "曆" ],
"歴": [ "历" ],
"歷": [ "历" ],
"暦": [ "历" ],
"曆": [ "历" ],
"呻": [ "呻", "申" ],
"覆": [ "覆", "复" ],
"复": [ "覆" ],
"勉": [ "免" ],
"勉": [ "免" ],
"甦": [ "甦", "蘇", "苏" ],
"忧": [ "憂", "優" ],
"鹹": [ "咸", "鹹" ],
"准": [ "準", "准" ],
"準": [ "準", "准" ],
"袮": [ "袮", "祢" ],
"儘": [ "儘", "侭" ],
"侭": [ "儘", "侭" ],
"脏": [ "脏", "髒", "臟" ],
"发": [ "髮", "髪", "发" ],
"髮": [ "發", "发" ],
"慾": [ "慾", "欲" ],
"讚": [ "讃", "讚", "贊", "赞", "賛" ],
"冲": [ "冲", "沖", "衝" ],
"面": [ "麵", "麪", "麺" ],
"鬚": [ "鬚", "須", "须" ],
"揹": [ "揹", "背" ],
"捲": [ "捲", "卷", "巻" ],
"卷": [ "捲", "卷", "巻", "劵", "券" ],
"巻": [ "捲", "卷", "巻", "劵", "券" ],
"苏": [ "苏", "蘇", "甦" ],
"瀏": [ "瀏", "浏", "刘" ],
"浏": [ "瀏", "浏", "刘" ],
"吁": [ "籲", "吁" ],
"囉": [ "囉", "啰", "罗", "羅" ],
"啰": [ "囉", "啰", "罗", "羅" ],
"修": [ "修", "俢" ],
"犟": [ "犟", "強", "强" ],
"嗬": [ "嗬", "呵" ],
"唿": [ "唿", "呼" ],
"媮": [ "媮", "偷" ],
"采": [ "采", "採" ],
"彩": [ "彩", "采" ],
"𠩺": [ "𠩺", "釐" ],
"恶": [ "恶", "噁", "惡" ],
"炰": [ "炰", "炮" ],
"辟": [ "辟", "闢", "避" ],
"避": [ "辟", "避" ],
"闢": [ "辟", "闢" ],
"滷": [ "魯", "鲁" ],
"鹵": [ "魯", "鲁" ],
"卤": [ "魯", "鲁" ],
"儓": [ "儓", "檯" ],
"檯": [ "儓", "檯" ],
"台": [ "台", "檯", "臺", "颱" ],
"練": [ "炼" ],
"练": [ "炼" ],
"繫": [ "系" ],
"繋": [ "系" ],
"糓": [ "谷" ],
"穀": [ "谷" ],
"版": [ "板" ],
"祕": [ "密" ],
"秘": [ "密" ],
"汇": [ "彙", "匯" ]
}, s = {
"劍": [ "劍", "剑", "剣", "劎", "劒", "剱", "劔" ],
"砲": [ "砲", "炮" ],
"偽": [ "偽", "僞" ],
"內": [ "內", "内" ],
"鬥": [ "鬭", "鬥", "闘", "鬪" ],
"鶏": [ "鶏", "鷄", "雞", "鸡" ],
"兎": [ "兎", "兔" ],
"坏": [ "坯", "坏", "壊", "壞" ],
"殻": [ "殻", "殼", "壳" ],
"像": [ "像", "象" ],
"蘇": [ "苏", "蘇", "囌" ],
"館": [ "館", "館", "舘", "馆" ],
"鳥": [ "鳥", "鸟", "𫠓" ],
"視": [ "視", "視", "视", "眎" ],
"険": [ "険", "險", "险", "嶮", "崄" ],
"絶": [ "絶", "絕", "绝" ],
"鉄": [ "鉄", "鐵", "铁", "鐡" ],
"諸": [ "諸", "諸", "诸" ],
"尋": [ "尋", "寻", "𡬶" ],
"裡": [ "裡", "裏", "里" ],
"鑑": [ "鑑", "鉴", "鑒" ],
"麵": [ "麵", "麪", "麺" ],
"歲": [ "歲", "歳", "岁" ],
"鐘": [ "鐘", "鍾", "钟", "锺" ],
"會": [ "會", "会", "㑹" ],
"塗": [ "塗", "凃", "涂" ],
"髮": [ "髮", "髪" ],
"話": [ "話", "话", "䛡" ],
"閤": [ "閤", "阁" ],
"蔘": [ "蔘", "參", "参" ],
"労": [ "労", "勞", "劳" ],
"国": [ "国", "囯", "國" ],
"罵": [ "罵", "骂", "駡" ],
"対": [ "対", "對", "对" ],
"鏽": [ "鏽", "銹", "锈" ],
"駄": [ "駄", "䭾", "馱", "驮" ],
"薩": [ "薩", "萨", "蕯" ],
"単": [ "単", "單", "单" ],
"継": [ "継", "繼", "继" ],
"驗": [ "驗", "验", "騐", "験" ],
"歴": [ "歴", "歷" ],
"暦": [ "暦", "曆" ],
"団": [ "团", "団", "團" ],
"麼": [ "麼", "麽", "庅" ],
"戰": [ "戦", "戰", "战" ],
"乡": [ "郷", "鄕", "鄉", "鄊", "乡" ],
"勉": [ "勉", "勉" ],
"餘": [ "餘", "馀", "余" ],
"網": [ "網", "䋄", "䋞", "网" ],
"託": [ "託", "讬", "托" ],
"纖": [ "纖", "纤", "縴", "繊" ],
"鍊": [ "鍊", "錬", "𫔀", "炼", "煉" ],
"擊": [ "撃", "擊", "击" ],
"實": [ "實", "実", "实", "寔" ],
"於": [ "於", "扵" ],
"證": [ "證", "証", "证" ],
"據": [ "據", "据", "拠" ],
"處": [ "處", "处", "䖏", "処" ],
"瞪": [ "瞪", "瞠", "眙" ],
"肢": [ "肢", "胑" ],
"肉": [ "肉", "宍", "𠕎" ],
"憂": [ "憂", "𢝊", "𢚧", "𢟜", "懮", "𨗫" ],
"繫": [ "繫", "繋" ],
"廻": [ "廻", "迴" ],
"録": [ "録", "錄", "录" ],
"鎗": [ "鎗", "槍", "枪" ],
"悠": [ "悠", "滺" ],
"壶": [ "壶", "壺", "壷" ],
"茲": [ "茲", "兹", "玆" ],
"蓋": [ "蓋", "盖", "葢" ],
"蹟": [ "蹟", "跡", "迹" ],
"癒": [ "癒", "瘉" ],
"辺": [ "辺", "邊", "边", "邉" ],
"準": [ "準", "凖" ],
"衛": [ "衛", "衞", "卫" ],
"晚": [ "晚", "晩" ],
"裸": [ "裸", "躶" ],
"亀": [ "亀", "龜", "龟", "𪚧", "𪚿", "𠃾" ],
"凼": [ "凼", "氹" ],
"艸": [ "艸", "草" ],
"箚": [ "箚", "剳" ],
"复": [ "复", "復", "複" ],
"污": [ "污", "汙", "汚" ],
"伙": [ "伙", "夥" ],
"御": [ "御", "禦" ],
"鬱": [ "鬱", "郁" ],
"淩": [ "淩", "凌" ],
"紮": [ "紮", "扎" ],
"痴": [ "痴", "癡" ],
"栖": [ "栖", "棲" ],
"犇": [ "犇", "奔" ],
"範": [ "範", "范" ],
"薑": [ "薑", "姜", "葁" ],
"樸": [ "樸", "朴" ],
"諮": [ "諮", "谘", "咨" ],
"撚": [ "撚", "捻" ],
"喂": [ "喂", "餵", "餧", "𫗭" ],
"淨": [ "淨", "凈", "净" ],
"栗": [ "栗", "慄" ],
"挽": [ "挽", "輓" ],
"灶": [ "灶", "竈" ],
"線": [ "線", "缐", "綫", "线" ],
"盡": [ "盡", "尽", "儘" ],
"黴": [ "黴", "霉" ],
"周": [ "周", "週" ],
"並": [ "並", "并", "併" ],
"讚": [ "讚", "讃" ],
"観": [ "観", "觀", "观", "覌" ],
"遊": [ "遊", "游" ],
"启": [ "启", "啓", "啟", "啔" ],
"廄": [ "廄", "厩", "廐", "廏" ],
"氣": [ "気", "氣", "气" ],
"欲": [ "慾", "欲" ],
"傑": [ "傑", "杰" ],
"鍛": [ "鍛", "锻", "煅" ],
"徵": [ "徵", "徴" ],
"閒": [ "閒", "𫔮", "閑", "闲" ],
"贊": [ "贊", "赞", "賛" ],
"櫻": [ "櫻", "桜", "樱" ],
"尨": [ "尨", "狵" ],
"圈": [ "圈", "圏" ],
"凶": [ "凶", "兇" ],
"浜": [ "浜", "濱", "滨" ],
"煙": [ "煙", "烟", "菸" ],
"黒": [ "黒", "黑" ],
"樂": [ "樂", "乐", "楽" ],
"薬": [ "薬", "藥", "药", "葯", "𣛙" ],
"劵": [ "劵", "券", "卷" ],
"貳": [ "貳", "贰", "弐", "貮", "𢎐", "二" ],
"隷": [ "隷", "隸", "隶" ],
"姫": [ "姫", "姬" ],
"燻": [ "燻", "熏" ],
"籲": [ "籲", "龥" ],
"齧": [ "齧", "啮", "𪘂", "囓", "噛", "嚙" ],
"鹼": [ "鹼", "碱", "硷" ],
"咸": [ "咸", "鹹" ],
"穗": [ "穗", "穂" ],
"廢": [ "廢", "廃", "废" ],
"蹠": [ "蹠", "跖" ],
"吒": [ "吒", "咤" ],
"剷": [ "剷", "鏟", "铲", "刬", "剗" ],
"擗": [ "擗", "劈" ],
"核": [ "核", "覈" ],
"脣": [ "脣", "唇", "唇" ],
"升": [ "升", "昇" ],
"磐": [ "磐", "盤", "盘" ],
"溪": [ "溪", "渓" ],
"谿": [ "谿", "嵠" ],
"折": [ "折", "摺" ],
"祐": [ "祐", "佑" ],
"瓮": [ "瓮", "罋", "甕" ],
"蹤": [ "蹤", "踪", "踨" ],
"暗": [ "闇", "暗" ],
"昵": [ "昵", "暱" ],
"布": [ "布", "佈" ],
"為": [ "為", "为", "爲" ],
"綳": [ "綳", "繃", "绷" ],
"痺": [ "痺", "痹" ],
"痲": [ "痲", "痳" ],
"雇": [ "雇", "僱" ],
"敘": [ "敘", "叙", "敍" ],
"盪": [ "盪", "蕩", "荡" ],
"勛": [ "勛", "勳", "勋", "勲" ],
"祕": [ "祕", "秘" ],
"牆": [ "牆", "墙", "墻" ],
"爾": [ "爾", "尔", "尓" ],
"焰": [ "焰", "焔" ],
"默": [ "默", "黙" ],
"壓": [ "壓", "压", "圧" ],
"廸": [ "廸", "迪" ],
"曉": [ "曉", "晓", "暁" ],
"霸": [ "霸", "覇" ],
"霊": [ "霊", "靈", "灵" ],
"泪": [ "泪", "涙", "淚" ],
"牺": [ "牺", "犠", "犧" ],
"藉": [ "藉", "耤" ],
"噸": [ "噸", "吨" ],
"俱": [ "俱", "倶" ],
"粽": [ "粽", "糉", "糭" ],
"向": [ "向", "曏", "嚮" ],
"悽": [ "悽", "淒", "凄" ],
"鱷": [ "鱷", "鰐", "鳄" ],
"滷": [ "滷", "鹵", "卤" ],
"颜": [ "颜", "顏", "顔" ],
"衝": [ "衝", "沖", "冲" ],
"樑": [ "樑", "梁" ],
"砂": [ "砂", "沙" ],
"炭": [ "炭", "碳" ],
"糸": [ "糸", "絲", "丝" ],
"簷": [ "簷", "檐" ],
"涌": [ "涌", "湧" ],
"糓": [ "穀", "糓" ],
"両": [ "両", "两", "兩" ],
"家": [ "家", "傢" ],
"妳": [ "妳", "你" ],
"她": [ "她", "他" ],
"藤": [ "藤", "籐", "籘" ],
"嬉": [ "嬉", "嘻" ],
"亘": [ "亘", "亙" ],
"恆": [ "恆", "恒" ],
"鶇": [ "鶇", "鶫", "鸫" ],
"姉": [ "姉", "姐", "姊" ],
"剁": [ "剁", "刴" ],
"泄": [ "泄", "洩" ],
"舖": [ "舖", "铺", "鋪", "舗" ],
"效": [ "效", "効" ],
"喻": [ "喻", "喩" ],
"插": [ "挿", "插", "揷" ],
"銳": [ "銳", "鋭", "锐" ],
"權": [ "權", "権", "权" ],
"経": [ "経", "經", "经" ],
"歓": [ "歓", "歡", "欢" ],
"孃": [ "嬢", "孃" ],
"済": [ "済", "濟", "济" ],
"收": [ "収", "收" ],
"綠": [ "綠", "緑", "绿" ],
"唖": [ "唖", "啞", "哑" ],
"剿": [ "剿", "勦", "𠞰" ],
"禍": [ "禍", "禍", "祸" ],
...m([ "営", "産", "査", "絵", "懐", "釈", "蔵", "娯", "焼", "拡", "賎", "銭", "雑", "聴", "帯", "閲", "覧", "悪", "亜", "氷" ]),
"侮": [ "侮", "侮" ],
"沉": [ "沉", "沈" ],
"嚐": [ "嚐", "嘗", "尝" ],
"搾": [ "搾", "榨" ],
"获": [ "获", "獲", "穫" ],
"繮": [ "繮", "缰", "韁" ],
"贋": [ "贋", "贗", "赝" ],
"獃": [ "呆" ],
"杯": [ "杯", "盃" ],
"呪": [ "呪", "咒", "詋" ]
};
function l(e) {
return Object.keys(e).forEach(function(t) {
e[t] = i.array_unique(e[t]);
}), e;
}
function c(e) {
return Object.keys(e).forEach(function(t) {
e[t] = i.array_unique(e[t]), e[t].forEach(function(n) {
e[n] = e[t];
});
}), e;
}
function f(e, t) {
return o(e, t);
}
function p(e, t) {
return e = Object.keys(t).reduce(function(e, n) {
return e[t[n]] = n, e;
}, {});
}
function d(e, t, ...n) {
let r;
return [].concat(t).concat(...n).filter(function(e) {
return e;
});
}
function h(e, n = {}) {
let r = [];
return r = d(r, t.table_jp[e]);
}
function g(e, n = {}) {
let i = [];
return i = d(i, t._table_tw[e], r.cn2tw(e, n));
}
function y(e, n = {}) {
let i = [];
return i = d(i, t._table_cn[e], r.tw2cn(e, n));
}
function m(e) {
return e.reduce((e, t) => (e[t] = v(t), e), {});
}
function v(e) {
return u.lazyAll(e, {
safe: !1,
includeSelf: !0
});
}
t.table_plus = c(s), t.table_jp = f(a, t.table_plus), l(t.table_jp), t._uniqueTable = l, 
t._buildTablePlus = c, t._mergeTable = f, t._table_cn = p({}, t._table_tw), t._update = p, 
t._get = d, t.jp = h, t.tw = g, t.cn = y, t.default = t;
}, function(e, t, n) {
"use strict";
const r = n(111);
e.exports = r.default;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(112);
function i(e) {
return Array.isArray(e) ? [] : {};
}
function o(e, t, n) {
let r, o = (!t || !1 !== t.clone) && u(e, t, n), a = o ? l(i(e), e, t) : e;
return t && t.keyValueOrMode && !o && n && "key" in n && (n.destination && (a = n.destination[n.key] || a), 
n.target && (a = n.target[n.key] || a), n.source && (a = n.source[n.key] || a)), 
a;
}
function u(e, t, n) {
let i;
return t && t.isMergeableObject && (i = t.isMergeableObject(e, r, t, n)), null == i && (i = e && "boolean" == typeof e[l.SYMBOL_IS_MERGEABLE] ? e[l.SYMBOL_IS_MERGEABLE] : r(e)), 
i;
}
function a(e, t, n) {
return e.concat(t).map(function(e, t, r) {
return o(e, n, {
key: t
});
});
}
function s(e, t, n) {
let r = {};
return u(e, n) && Object.keys(e).forEach(function(i) {
r[i] = o(e[i], n, {
key: i,
source: t,
target: e,
destination: r
});
}), Object.keys(t).forEach(function(i) {
u(t[i], n, {
key: i,
source: t,
target: e
}) && e[i] ? r[i] = l(e[i], t[i], n) : r[i] = o(t[i], n, {
key: i,
source: t,
target: e
});
}), r;
}
function l(e, t, n) {
let r = Array.isArray(t), i, u, l;
if (r === Array.isArray(e)) {
if (r) {
let r;
return ((n || {
arrayMerge: a
}).arrayMerge || a)(e, t, n);
}
return s(e, t, n);
}
return o(t, n, {
target: e,
source: t
});
}
t.deepmerge = l, function(e) {
e.isMergeable = r, e.SYMBOL_IS_MERGEABLE = Symbol.for("SYMBOL_IS_MERGEABLE"), e.all = function t(n, r) {
if (!Array.isArray(n)) throw new Error("first argument should be an array");
return n.reduce(function(t, n) {
return e(t, n, r);
}, {});
};
}(l || (l = {})), t.deepmerge = l, l.deepmerge = l, l.default = l, t.default = l;
}, function(e, t) {
function n(e) {
return !!e && "object" == typeof e;
}
function r(e) {
var t = Object.prototype.toString.call(e);
return "[object RegExp]" === t || "[object Date]" === t || u(e);
}
e.exports = function e(t) {
return n(t) && !r(t);
};
var i, o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
function u(e) {
return e.$$typeof === o;
}
}, function(e, t, n) {
"use strict";
var r;
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(19), o = n(4);
function u(e) {
const t = e;
let n, r;
n = new Map();
let u = t.reduce(function(e, t) {
let r = t[0].source.replace(/^.*\[|\].*$/gu, ""), o = i.default.split(r, "").concat(t[1]);
return o.forEach(e => {
n.set(e, o);
}), e.push(...o), e;
}, []);
return r = new RegExp(`[${o.array_unique(u).join("")}]`, "u"), {
_greedyTableCacheRegexp: t,
_greedyTableCacheMap: n,
_greedyTableCacheTest: r
};
}
function a(e) {
return t._greedyTableCacheTest.test(e);
}
function s(e) {
return t._greedyTableCacheMap.get(e);
}
function l(e) {
return a(e) ? t._greedyTableCacheRegexp.reduce(function(e, t) {
return e.replace(t[0], t[1]);
}, e) : e;
}
r = u([ [ /[噁悪惡]/g, "恶" ], [ /[繋繫係]/g, "系" ], [ /[糊鬍葫衚楜]/g, "胡" ], [ /[儅噹當]/g, "当" ], [ /[復複覆]/g, "复" ], [ /[囌蘇甦]/g, "苏" ], [ /[採彩睬踩埰綵䌽]/g, "采" ], [ /[囉啰羅㑩儸]/g, "罗" ], [ /[浏瀏劉]/g, "刘" ], [ /[劵卷巻捲蜷]/g, "券" ], [ /[划劃畫]/g, "画" ], [ /[鬥闘鬭鬪]/g, "斗" ], [ /[乾亁乹幹]/g, "干" ], [ /[図图]/g, "圖" ], [ /[暦曆歴歷]/g, "历" ], [ /[麪麵麺]/g, "面" ], [ /[讃讚賛贊赞]/g, "赞" ], [ /[發髪髮]/g, "发" ], [ /[侭儘盡]/g, "尽" ], [ /[優忧憂]/g, "忧" ], [ /[俱倶]/g, "具" ], [ /[之的得]/g, "の" ], [ /[與与]/g, "と" ], [ /[她他牠祂佗]/g, "它" ], [ /[支隻枝]/g, "只" ], [ /[炮砲炰]/g, "泡" ], [ /[仲㊥]/g, "中" ], [ /[原]/g, "元" ], [ /[迴廻]/g, "回" ], [ /[乾亁乹幹]/g, "干" ], [ /[避闢]/g, "辟" ], [ /[滷鹵卤鲁]/g, "魯" ], [ /[檯臺颱儓]/g, "台" ], [ /[宻祕秘]/g, "密" ], [ /[謎谜]/g, "迷" ], [ /[砂莎紗纱]/g, "沙" ], [ /[編篇编]/g, "篇" ], [ /[冶]/g, "治" ], [ /[炼煉錬鍊𫔀練练]/gu, "練" ], [ /[亞亚婭娅椏桠亜]/gu, "亚" ], [ /[塞賽]/gu, "赛" ], [ /[腾騰籐籘]/gu, "藤" ], [ /[妳祢禰]/gu, "你" ], [ /[喰飠⻞飧蝕蚀]/gu, "食" ], [ /[瑪馬玛马]/gu, "马" ], [ /[餸餚]/gu, "餚" ], [ /[裸]/gu, "果" ], [ /[凱凯鎧铠]/gu, "凱" ], [ /[帖贴]/gu, "貼" ], [ /[甚]/gu, "什" ], [ /[聯联連连]/gu, "連" ], [ /[像]/gu, "象" ], [ /[藉]/gu, "借" ], [ /[蕾]/gu, "雷" ], [ /[訂订釘钉]/gu, "定" ], [ /[嚮]/gu, "向" ], [ /[糸糹丝]/gu, "絲" ], [ /[筒]/gu, "桶" ], [ /[兹玆滋]/gu, "茲" ], [ /[呐訥讷]/gu, "吶" ], [ /[穀糓]/gu, "谷" ], [ /[两兩倆俩]/gu, "両" ], [ /[帳賬账]/gu, "帐" ], [ /[版闆]/gu, "板" ], [ /[待]/gu, "呆" ], [ /[熔鎔镕融螎]/gu, "溶" ], [ /[匯汇]/gu, "彙" ], [ /[彿仏]/gu, "佛" ], [ /[阿]/gu, "啊" ], [ /[家]/gu, "傢" ], [ /[爆]/gu, "暴" ], [ /[䋄䋞冈刚剛堈岗岡崗綱網纲缸鋼钢]/gu, "网" ], [ /[註]/gu, "注" ], [ /[灌贯潅]/gu, "貫" ], [ /[倒]/gu, "到" ], [ /[儭秤称稱衬襯]/gu, "平" ], [ /[勛勲勳]/gu, "勋" ], [ /[麗丽莉]/gu, "利" ], [ /[已巳]/gu, "己" ], [ /[嗬]/gu, "呵" ], [ /[哊哟唷唹喲]/gu, "呦" ], [ /[婕杰洁潔絜]/gu, "傑" ], [ /[嘻]/gu, "嬉" ], [ /[痲痳麻]/gu, "嘛" ], [ /[狗]/gu, "犬" ], [ /[彿拂]/gu, "佛" ], [ /[亙恆恒]/gu, "亘" ], [ /[附副]/gu, "付" ], [ /[伽枷珈迦]/gu, "加" ], [ /[褔]/gu, "福" ], [ /[捱]/gu, "挨" ], [ /[拼]/gu, "拚" ], [ /[飄飘飃]/gu, "漂" ], [ /[佔沾]/gu, "占" ], [ /[気氣汽滊炁]/gu, "气" ], [ /[撩遼]/gu, "辽" ], [ /[做]/gu, "作" ], [ /[搜捜]/gu, "蒐" ], [ /[叟傁]/gu, "叟" ], [ /[謝谢]/gu, "榭" ], [ /[形]/gu, "型" ], [ /[雇頋顧顾]/gu, "僱" ], [ /[廬芦蘆]/gu, "庐" ], [ /[耽躭]/gu, "眈" ], [ /[傹竟競竸誩𥪰𧡟𧫘𧫙𧮣𨐼]/gu, "竞" ], [ /[殖]/gu, "植" ], [ /[佬姥]/gu, "老" ], [ /[倖]/gu, "幸" ], [ /[㠪炬矩鉅钜]/gu, "巨" ], [ /[鏈链炼錬鍊𫔀䃛𧹯練练連连]/gu, "煉" ], [ /[刴剁剐剮劏]/gu, "㓥" ], [ /[枏楠]/gu, "南" ], [ /[璐𡽘𨱴]/gu, "路" ], [ /[侂拓杔託讬拖拕]/gu, "托" ], [ /[悕睎稀]/gu, "希" ], [ /[帼幗国國]/gu, "囯" ], [ /[返]/gu, "反" ], [ /[陽阳]/gu, "佯" ], [ /[来莱萊]/gu, "來" ], [ /[葆堡褓緥]/gu, "保" ], [ /[渡]/gu, "度" ], [ /[剳札箚紮]/gu, "扎" ], [ /[媞提湜禔緹缇隄]/gu, "堤" ], [ /[臘蜡蠟]/gu, "腊" ], [ /[鬱𨚼𨟝]/gu, "郁" ], [ /[擀杆桿]/gu, "扞" ], [ /[脼郞𥇑]/gu, "郎" ], [ /[芭]/gu, "巴" ], [ /[涅湼]/gu, "捏" ], [ /[择擇沢泽澤]/gu, "択" ], [ /[幵開]/gu, "开" ], [ /[珮]/gu, "佩" ], [ /[喩籲龥吁]/gu, "喻" ], [ /[值]/gu, "値" ], [ /[臓臟贓赃髒]/gu, "脏" ], [ /[㊤]/gu, "上" ], [ /[㊦]/gu, "下" ], [ /[唿]/gu, "呼" ], [ /[詳详]/gu, "祥" ], [ /[妮泥]/gu, "尼" ], [ /[剋尅]/gu, "克" ], [ /[撥播]/gu, "拨" ], [ /[挿揷]/gu, "插" ], [ /[汀]/gu, "丁" ], [ /[那]/gu, "娜" ], [ /[菈]/gu, "拉" ], [ /[玲琳鈴铃淋]/gu, "林" ], [ /[銘铭]/gu, "名" ], [ /[齣]/gu, "出" ], [ /[欸誒诶]/gu, "唉" ], [ /[哞]/gu, "呣" ], [ /[㖿吔]/gu, "耶" ], [ /[魅]/gu, "媚" ], [ /[菲非]/gu, "斐" ], [ /[衩釵钗]/gu, "叉" ], [ /[淇琪祺]/gu, "其" ], [ /[壇談譚谈谭]/gu, "坛" ], [ /[材柴]/gu, "才" ], [ /[唸]/gu, "念" ], [ /[趾]/gu, "指" ], [ /[仕]/gu, "士" ], [ /[嬢孃]/gu, "娘" ], [ /[哑唖瘂痖]/gu, "啞" ], [ /[动働仂]/gu, "動" ], [ /[查査]/gu, "察" ], [ /[鉄銕鐡鐵铁𨫓]/gu, "鉃" ], [ /[归歸皈]/gu, "帰" ], [ /[瘡疮創]/gu, "创" ], [ /[拷烤]/gu, "考" ], [ /[込]/gu, "入" ], [ /[伦侖倫]/gu, "仑" ], [ /[仔]/gu, "子" ], [ /[彎湾灣]/gu, "弯" ], [ /[荧萤蛍螢]/gu, "熒" ], [ /[挣掙爭]/gu, "争" ], [ /[漲胀脹]/gu, "涨" ], [ /[無冇沒没]/gu, "无" ], [ /[噸訰]/gu, "吨" ], [ /[鈎鉤钩]/gu, "勾" ], [ /[沉]/gu, "沈" ], [ /[畳疊迭]/gu, "叠" ], [ /[繮缰韁僵疆]/gu, "殭" ], [ /[背]/gu, "揹" ], [ /[団團糰]/gu, "团" ], [ /[榚]/gu, "糕" ], [ /[須须]/gu, "需" ], [ /[紆紓纡纾]/gu, "抒" ], [ /[洲]/gu, "州" ], [ /[厰場廠场]/gu, "厂" ], [ /[筿篠]/gu, "筱" ], [ /[跟]/gu, "根" ], [ /[曝爆]/gu, "暴" ], [ /[㬅嫚曼熳蔓]/gu, "漫" ], [ /[昇陞]/gu, "升" ], [ /[待獃]/gu, "呆" ], [ /[煙腌菸醃]/gu, "烟" ], [ /[錄録陆陸]/gu, "录" ], [ /[擄虏虜]/gu, "掳" ], [ /[翹跷蹺]/gu, "翘" ], [ /[腳角]/gu, "脚" ], [ /[值直]/gu, "値" ], [ /[词辞辭]/gu, "詞" ], [ /[意義]/gu, "义" ], [ /[梗]/gu, "哏" ], [ /[咫尺]/gu, "呎" ], [ /[怜憐]/gu, "伶" ], [ /[荽萎]/gu, "委" ], [ /[岺嶺阾領领]/gu, "岭" ], [ /[決絕絶绝訣诀]/gu, "决" ], [ /[嶽𡶦]/gu, "岳" ], [ /[授]/gu, "受" ], [ /[線线缐腺]/gu, "綫" ], [ /[壱壹]/gu, "一" ], [ /[荒]/gu, "慌" ], [ /[廷]/gu, "庭" ] ]), 
t._greedyTableCacheRegexp = r._greedyTableCacheRegexp, t._greedyTableCacheMap = r._greedyTableCacheMap, 
t._greedyTableCacheTest = r._greedyTableCacheTest, t._greedyTableBuild = u, t.greedyTableTest = a, 
t.greedyTableCharArray = s, t.greedyTableReplace = l, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(20), i = n(14);
function o(e, t = {}) {
return a(e, t).replace(/·/g, "・");
}
function u(e, t = {}) {
return a(e, t);
}
function a(e, t = {}) {
return s(r.zh2jp(s(e), {
skip: "竜龍制征里像拜冰澤涉丑兒娘姐姉志儿從辨勞" + (t.skip || ""),
safe: "boolean" != typeof t.safe || t.safe
})).replace(/诅/g, "詛").replace(/复仇/g, "復仇").replace(/戦斗/g, "戦闘").replace(/^プロローグ/, "序").replace(/^エピローグ/, "終章").replace(/総/g, "總").replace(/帰|归/g, "歸").replace(/辺/g, "邊").replace(/対/g, "對").replace(/独/g, "獨").replace(/実/g, "實").replace(/決斗/g, "決闘").replace(/仮/g, "假").replace(/戦/g, "戰");
}
function s(e, t = {}) {
return e.replace(/[\u2000-\u200F]/g, "").replace(/[\u2028-\u202F]/g, "").replace(/[\u205F-\u2060]/g, "").replace(/与/g, "與").replace(/[亜亚亞]/g, "亞").replace(/価/, "價").replace(/[觉覚覺]/g, "覺").replace(/亏/g, "虧").replace(/[·‧・···•]/g, "・").replace(/泽/g, "澤").replace(/^(?:后)(記|日)/, "後$1").replace(/(身)(?:后)/, "$1後").replace(/(?:后)(悔)/, "後$1").replace(/回复/g, "回復").replace(/复(仇|讐)/g, "復$1").replace(/里面/g, "裡面").replace(/([今此])后/g, "$1後").replace(/[么预枪丛迈这个尔儿从龙丝风劳弃别驯卢妈称号]+/gu, function(e) {
return i.cn2tw(e);
});
}
t.filename = o, t.word = u, t.jp = a, t.zh = s, t.default = t;
}, function(e) {
e.exports = {
name: "cjk-conv",
version: "1.2.28",
description: "convert chinese, japanese 簡繁日漢字轉換 ( merge/split submodule from node-novel, regexp-cjk, str-util )",
keywords: [ "char", "character", "characters", "chinese", "cjk", "cn", "cn2tw", "conv", "conversion", "convert", "greedy", "hanja", "hanzi", "japanese", "jp2zhs", "jp2zht", "kanji", "node-novel", "regex", "regexp", "regular", "regular expression", "simplified", "slugify", "str-util", "table", "traditional", "transform", "tw", "tw2cn", "unicode", "util", "words", "zh", "zh-cn", "zh-tw", "zh2jp", "zhs", "zht" ],
homepage: "https://github.com/bluelovers/cjk-convert#readme",
bugs: {
url: "https://github.com/bluelovers/cjk-convert/issues"
},
repository: {
type: "git",
url: "git+https://github.com/bluelovers/cjk-convert.git"
},
license: "ISC",
author: "",
main: "index.js",
directories: {
lib: "lib",
doc: "docs",
test: "test"
},
scripts: {
"build-table": "node ./script/build-str-table",
check: "yarn run build-table && yarn run check:list",
"check:list": "ts-node ./test/list.ts",
coverage: "npx nyc npm run test",
"dts-bundle": "node ./test/dts-bundle.js && git add cjk-conv.d.ts",
ncu: "npx npm-check-updates -u",
precommit: "yarn run build-table && yarn run dts-bundle",
prepublishOnly: "npx npm-check-updates -u --packageFile ./package.json && yarn run sort-package-json && yarn run check && yarn run dts-bundle && git add cjk-conv.d.ts && yarn run test",
postpublish: "echo postpublish && node ./script/publish-after",
"sort-package-json": "npx sort-package-json ./package.json",
test: 'npx mocha "!(node_modules)\\**\\*.+(test|spec).js"',
travis: "typedoc --options ./typedoc.config.js"
},
"pre-commit": [ "precommit" ],
dependencies: {
"array-hyper-unique": "^1.1.0",
chinese_convert: "1.0.8",
"deepmerge-plus": "^2.1.3",
japanese: "^1.2.0",
"regexp-helper": "^1.0.8",
"ts-type": "^1.2.9",
"uni-string": "^1.1.2"
},
devDependencies: {
"@bluelovers/tsconfig": "^1.0.13",
"cross-spawn-extra": "^1.0.6",
"debug-color2": "^1.1.6",
diff: "^4.0.1",
"fs-extra": "^8"
},
_types: "cjk-conv.d.ts"
};
}, function(e, t, n) {
"use strict";
function r(e) {
const t = typeof e, n = String(e).toLowerCase().trim();
if ("boolean" === t) return e;
if ("undefined" !== t && "undefined" !== n) {
if (null === e || "null" === n) return null;
if ("number" === t) return e;
if ("string" === t) {
if ("1" === n) return 1;
if ("0" === n) return 0;
if ("" === e) return "";
if ("" === n) return e;
if (/^(?:yes|on|true|enabled)$/i.test(n)) return !0;
if (/^(?:no|off|false|disabled)$/i.test(n)) return !1;
if (/^\-?[1-9]\d*(?:\.\d+)?$/i.test(n)) {
let t = Number(n);
return Number.isNaN(t) ? e : t;
}
}
return e;
}
}
function i(e, t = !0) {
let n = r(e);
if (t) {
let e = typeof n;
return ("number" === e || "boolean" === e) && n;
}
return "string" != typeof n && n;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.envVal = r, t.envBool = i, t.default = i, t = Object.assign(i, t), Object.defineProperty(t, "__esModule", {
value: !0
});
}, function(e, t, n) {
"use strict";
(function(e) {
Object.defineProperty(t, "__esModule", {
value: !0
}), t.ajaxSetup = t.XMLHttpRequest = t.GMXMLHttpRequest = void 0;
class GMXMLHttpRequest {
constructor() {
this._params = {}, this._params.context = this, this._params.headers = {}, this._params.onreadystatechange = this._onreadystatechange.bind(this);
}
_send(e, t) {
let n = {
data: e,
binary: t
};
Object.assign(n, this._params);
for (let e in this) /^_/.test(e) || e in n || ("function" == typeof this[e] ? n[e] = function(t) {
this[e].call(this, t);
}.bind(this) : n[e] = this[e]);
this._xhr = GM_xmlhttpRequest(n);
}
send(e) {
return this._send(e, !1);
}
sendAsBinary(e) {
return this._send(e, !0);
}
open(e, t, n, r, i) {
this.abort(), this._params.method = e.toUpperCase(), this._params.url = t, this._params.synchronous = !n, 
this._params.user = r, this._params.password = i;
}
_onreadystatechange(e) {
this.status = e.status, this.statusText = e.statusText, this.responseHeaders = e.responseHeaders, 
this.responseText = e.responseText, this.responseXML = e.responseXML, this.response = e.response, 
this.readyState = e.readyState, this.finalUrl = e.finalUrl, this.lengthComputable = e.lengthComputable, 
this.loaded = e.loaded, this.total = e.total, this._detail = e, this.onreadystatechange && this.onreadystatechange();
}
setRequestHeader(e, t) {
this._params.headers[e] = t;
}
getResponseHeader(e) {
return this.responseHeaders[e];
}
getAllResponseHeaders() {
return this.responseHeaders;
}
overrideMimeType(e) {
this._params.overrideMimeType = e;
}
abort() {
this._xhr && this._xhr.abort();
}
}
function n() {
return new GMXMLHttpRequest();
}
function r(t) {
let r = t || e;
return r.ajaxSetup({
xhr: n
}), r;
}
t.GMXMLHttpRequest = GMXMLHttpRequest, t.XMLHttpRequest = n, t.ajaxSetup = r, t.default = n;
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
(function(t) {
let n = {
toCss(e = {}, n = {}) {
let r = t("<div/>");
Array.isArray(e) ? e.forEach(function(e) {
r.css(e);
}) : r.css(e);
let i = [];
return i.push(r.attr("style") || ""), r.removeAttr("style"), Array.isArray(n) ? n.forEach(function(e) {
r.css(e);
}) : r.css(n), i.push((r.attr("style") || "").replace(/;/g, " !important;")), r.remove(), 
i.join(";");
},
photo: {
filter: "contrast(115%)",
padding: 0,
margin: "auto",
border: "0px none #fff",
outline: 0,
"max-width": "initial",
"max-height": "initial",
"min-width": "initial",
"min-height": "initial",
"border-spacing": 0
},
photo_area: {
padding: 0,
margin: "auto",
border: "0px none #fff",
outline: 0,
"border-spacing": 0
},
overflow_hidden: {
"overflow-x": "hidden"
},
body: {
margin: 0,
padding: 0,
outline: 0
},
bg_transparent: {
background: "transparent"
},
bg_dark: {
background: "#34353b"
},
bg_dark2: {
background: "#4f535b"
},
bg_dark_text: {
color: "#DDDDDD"
},
bg_dark_border: {
border: "1px solid #000000"
},
page: {
position: "absolute",
padding: "10px",
"z-index": 100,
"min-width": "80px",
"text-align": "center"
},
page_position: {
top: 50,
left: 50
},
video_thumb: {
"min-width": 120,
"min-height": 90,
display: "inline-block",
background: "rgb(0, 0, 0) none repeat scroll 0% 0%",
color: "rgb(255, 255, 255)",
"text-decoration": "none",
"text-align": "center",
padding: 5
},
vertical: {},
vertical_before: {
content: "",
display: "inline-block",
"vertical-align": "middle",
height: "100%"
},
vertical_target: {
"vertical-align": "middle",
display: "inline-block"
}
};
n.default = n, e.exports = n;
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, n) {
e.exports.packEvent = function(e, r = t.window, i = ":input") {
return function(t, ...r) {
let o = this, u;
if (!n(document.activeElement).is(i)) {
let i;
return n.proxy(e, o, t, ...r)();
}
};
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.default = o;
for (var r = {
ctrl: 17,
control: 17,
alt: 18,
option: 18,
shift: 16,
windows: 91,
command: 91,
esc: 27,
escape: 27,
"`": 192,
"-": 189,
"=": 187,
backspace: 8,
tab: 9,
"\\": 220,
"[": 219,
"]": 221,
";": 186,
"'": 222,
enter: 13,
return: 13,
",": 188,
".": 190,
"/": 191,
space: 32,
pause: 19,
break: 19,
insert: 45,
delete: 46,
home: 36,
end: 35,
pageup: 33,
pagedown: 34,
left: 37,
up: 38,
right: 39,
down: 40,
capslock: 20,
numlock: 144,
scrolllock: 145
}, i = 1; i < 20; i++) r["f" + i] = 111 + i;
function o(e) {
return "string" == typeof e ? u(e) : "number" == typeof e ? a(e) : void 0;
}
function u(e) {
var t = r[e.toLowerCase()];
return void 0 !== t ? t : 1 === e.length ? e.toUpperCase().charCodeAt(0) : void 0;
}
function a(e) {
for (var t in r) if (r.hasOwnProperty(t) && r[t] === e) return t;
return String.fromCharCode(e).toLowerCase();
}
e.exports = t.default;
}, function(e, t, n) {
"use strict";
function r(e, t) {
e.stopPropagation(), t || e.preventDefault();
}
function i(e, t) {
e.stopImmediatePropagation(), t || e.preventDefault();
}
Object.assign(r, {
_uf_done: r,
_uf_done2: i,
default: r
}), e.exports = r;
}, function(e, t, n) {
var r = {
"./novel-plus-sc": 2,
"./novel-plus-sc/": 2,
"./novel-plus-sc/index": 2,
"./novel-plus-sc/index.js": 2,
"./novel-plus-sc/index.user": 7,
"./novel-plus-sc/index.user.js": 7,
"./novel-plus-sc/lib/metadata": 15,
"./novel-plus-sc/lib/metadata.js": 15,
"./novel-plus-sc/site/baidu/tieba": 8,
"./novel-plus-sc/site/baidu/tieba.js": 8,
"./novel-plus-sc/site/dmzj": 9,
"./novel-plus-sc/site/dmzj.js": 9,
"./novel-plus-sc/site/gamer/home": 11,
"./novel-plus-sc/site/gamer/home.js": 11,
"./novel-plus-sc/site/lightnovel/discuz": 12,
"./novel-plus-sc/site/lightnovel/discuz.js": 12,
"./novel-plus-sc/site/sfacg/book": 13,
"./novel-plus-sc/site/sfacg/book.js": 13,
"./novel-plus-sc/site/syosetu": 16,
"./novel-plus-sc/site/syosetu.js": 16
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
}, i.resolve = o, e.exports = i, i.id = 122;
} ]);