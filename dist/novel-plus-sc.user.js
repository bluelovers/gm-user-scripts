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
// @version		4.5.0
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
}), console["groupCollapsed" in console ? "groupCollapsed" : "group"]("before");
let r = {};
const i = !1;
try {
r.$ = unsafeWindow.$, r.jQuery = unsafeWindow.jQuery;
} catch (e) {
console.error(e);
}
console.groupEnd("before");
const o = n(58), a = o.noConflict(!0);
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
"use strict";
(function(e, r) {
function i(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), i(n(20));
const o = n(20);
function a(t, n) {
return Array.isArray(t) && (t = t.join("")), "string" == typeof n && (n = e(n)), 
"object" == typeof n && n.length && "object" == typeof n[0] && (n = n[0]), o.GM_addStyle(t.toString(), n);
}
function s(t, n) {
return "object" == typeof t && t.webfont && (t = t.webfont), e(`<link rel="stylesheet" href="${t.toString()}"/>`).appendTo(n || e("header, body").eq(0));
}
function u(e, ...t) {
return console.info(`%c[${r.userScript.id}][debug]`, "color: #4B90C2;", e, ...t);
}
function l(e, ...t) {
return console.error(`%c[${r.userScript.id}][error]`, "color: red;", e, ...t);
}
function c(e, ...t) {
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
t.GM_addStyle = a, t.addStylesheet = s, t.debug = u, t.error = l, t.info = c, t.log = f, 
t.openInTabBackground = p;
const h = n(2);
t.default = h;
}).call(this, n(0).default, n(1));
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
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(50);
function i(e, t = RegExp, n) {
if (!e || "string" != typeof e || 1 != e.length) throw new TypeError(`"${e}" not a valid flag`);
let i = null;
try {
!n && r.FlagsPattern[e] ? i = o(e, t) : (new t("", e), i = !0);
} catch (e) {
i = !1;
}
return i;
}
function o(e, t = RegExp, n = r.FlagsPattern) {
return !(!n[e] || !n[e].length) && !0 === n[e].every(function(n) {
let [r, i, o, a] = n, s, l = u(r, e, t);
return s = a ? "function" == typeof a ? a(l, o, i, r, t, e) : l[a](i) === o : l.test(i) === o;
});
}
t.FlagsName = r.default, t.hasSupportFlag = i, t.testFlag = o;
const a = n(4);
function s(e = RegExp, t) {
let n = {};
for (let r = 65; r <= 90; r++) {
let o = String.fromCharCode(r), a = String.fromCharCode(r + 32);
n[o] = i(o, e, t), n[a] = i(a, e, t);
}
let r = [ "g", "i", "m", "s", "u", "y" ];
return n = Object.keys(n).sort().reduce(function(e, t) {
return (n[t] || r.includes(t)) && (e[t] = n[t]), e;
}, {});
}
function u(e, t, n = RegExp) {
let r;
return r = "function" == typeof n.create ? n.create(e, t) : new n(e, t);
}
t.default = a, t.testFlagsAll = s, t.createRegExp = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(64), i = r.Minimatch;
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
t.match = o, t.option = a, t.auto = s, t.matchChrome = u;
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
}), t.font = {
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
const a = n(30), s = n(3);
function u() {
const t = n(32);
t.registerMenuCommand({
id: e.exports.name,
key: "redo"
}, async r => {
let a = n(150)(`./${e.exports.id}`);
if (a.current && a.current.length) {
const e = t.getLabel(r);
let n = i(), s = null, u = a.current;
{
let t = [];
for (let r of u) if (!t.includes(r.name)) {
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
e.exports.id = s.id, e.exports.name = s.name, e.exports.indexScript = s, a.run(e.exports.id, e.exports, r, function(e, t, n, r, i, o) {
a.init(e, t, n, r, i, o), u();
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
const {debounce: t} = n(35);
let a = !1;
i(".pb_footer, .l_thread_info").on("DOMNodeInserted", t(300, function() {
a = !0, e.exports.adblock(o);
})), setTimeout(function() {
a || (a = !0, e.exports.adblock(o));
}, 500);
}
},
async adblock(e = t._url_obj) {
let r = n(36).novelText;
async function o(...e) {
let t = i(this), n = t.clone(), o = n.find("br"), s = n.html();
const u = s;
if (o.length >= 10 || 0 == o.length && s.match(/\n/)) {
if (!(s = a(s)).match(/<br>/) && s.match(/\n/) && (s = s.replace(/[ \t　\r]+(\n)/gi, "$1").replace(/\n/g, "<br>"), 
n.html(s), o = n.find("br")), 1) {
if (!(s = s.replace(/\r\n|\r|\n/g, "").replace(/<br>/gi, "\n").replace(/[ 　\t]+\n/g, "\n").replace(/[\s　]+$/g, "").replace(/^ *[\n\t]+/g, "").replace(/\n{4,}/g, "\n\n\n\n")).match(/[^\n]\n[^\n]/g)) {
let e = 1;
/\n\n\n/g.test(s) ? (/[^\n]\n\n[^\n]/g.test(s) || (s = s.replace(/(\n{2})+/g, function(e) {
let t = e.replace("\n\n", "");
return -1 == e.indexOf("\n") && (t = e.replace("\n\n", "\n")), t;
})), s = s.replace(/\n{3,}/g, "\n\n\n").replace(/\n{2}/g, "\n")) : s = s.replace(/\n{3,}/g, "\n\n\n").replace(/\n\n/g, "\n");
}
s = (s = s.toString().replace(/^ +/g, "").replace(/\s+$/, "").replace(/([^\n][^\n「」【】《》“”『』（）](?:[！？?!。]*)?)\n((?:[—]+)?[「」“”【】《》（）『』])/gu, "$1\n\n$2").replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n([^\n「」“”【】《》（）『』。])/gu, "$1\n\n$2").replace(/([^\n][^\n「」【】《》“”『』（）](?:[！？?!。]*)?)\n((?:[—]+)?[「」“”【】《》（）『』])/gu, "$1\n\n$2").replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n([^\n「」“”【】《》（）『』。])/gu, "$1\n\n$2").replace(/(）(?:[！？?!。]*)?)\n([「」【】《》『』“”])/gu, "$1\n\n$2").replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n((?:[「」“”【】《》（）『』])(?:[^\n]+)([^「」【】《》“”『』（）―](?:[！？?!。]*)?)\n)/gu, "$1\n$2\n").replace(/(\n(?:[^　\n][^\n]+))\n([　])/g, "$1\n\n$2").replace(/([^\n])(\n)(fin)(\n|$)/gi, "$1$2\n$3$4")).replace(/^ *\n*|[\s　]+$/g, "").replace(/(\n){4,}/g, "\n\n\n\n").replace(/(\n){3}/g, "\n\n").replace(/\n/g, "<br>"), 
n.html(s), o = n.find("br");
}
} else s = s.replace(/^\s+/, "").replace(/\s+$/, ""), n.html(s);
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
s = t.replace(/^ *\n/g, "").replace(/\s+$/g, "") + n;
}), s = n.html(), t.html(s), n.remove();
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
function a(e) {
return e.toString().replace(/^\s+/, "").replace(/<br(?:\s+\/?|\s*\/)>/gi, "<br>").replace(/<br>\s*<br>/gi, "<br><br>").replace(/<br>\s*<br>/gi, "<br><br>").replace(/\s*(?:\<br\>)+\s*$/gi, "").replace(/\s*(?:\<br\>)+\s*$/gi, "");
}
e.exports = o;
}).call(this, n(1), n(2), n(0).default);
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
let a = 22, s = 28, u = "gothic", l = [ '"メイリオ"', '"IPAexゴシック"', '"IPAゴシック"', '"ＭＳ ゴシック"', '"SimSun"', "monospace" ].join(", "), c = [ '"IPAex明朝"', '"IPA明朝"', '"ＭＳ 明朝"', '"SimSun"', "serif" ].join(", "), f = "20px", p = "normal", h = "1.1em", d = "50px", g = "1em", _ = "#2F4F4F", m = "#D3D3D3", y = !0, D = !0, b = {
line: 31,
char: 23,
fontSize: 14,
fontFamily: "Consolas, Noto Sans SC, Microsoft Yahei UI, sans-serif",
lineHeight: null
};
b.lineHeight = Math.ceil(1.25 * b.fontSize);
let v = i("#chapter_contents_first");
if (v.length) {
r.addStylesheet(n(6).font.NotoSansSC), r.GM_addStyle([ `.txt .con .tit, #full_contents {\n\t\t\t\tfont-size: ${b.fontSize}px;\n\t\t\t\tfont-family: ${b.fontFamily};\n\t\t\t\tline-height: ${b.lineHeight}px;\n\t\t\t\ttext-shadow: 0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75);\n\t\t\t\t}`, `#full_contents { \n\t\t\t\t\n\t\t\t\twidth: ${b.fontSize * b.char}px;\n\t\t\t\theight: ${b.lineHeight * b.line}px;\n\t\t\t\toverflow: hidden;\n\t\t\t\t\n\t\t\t\ttext-align: left;\n\t\t\t\tmargin: 0; padding: 0; \n\t\t\t\tmargin: auto;\n\t\t\t\t/*\n\t\t\t\ttext-shadow: 0 0.5px 0 rgba(255, 255, 255, 0.8), 0 0 1px rgba(0, 0, 0, 0.75);\n\t\t\t\t*/\n\t\t\t\t\n\t\t\t\t}`, "#full_contents * { margin: 0; padding: 0; font-family: unset; }", `#full_contents p, #full_contents br { line-height: ${b.lineHeight}px; }`, "#full_contents p:before { content: ''; display: inline-block; }", "#full_contents_wrap { padding: 0; margin: auto; text-align: center; padding: 10px; }", "body {\n\t\t\t\t\n\t\t\t\t-webkit-transition: background-color 500ms linear;\n\t\t\t\t-moz-transition: background-color 500ms linear;\n\t\t\t\t-o-transition: background-color 500ms linear;\n\t\t\t\t-ms-transition: background-color 500ms linear;\n\t\t\t\ttransition: background-color 500ms linear;\n\t\t\t\t\n\t\t\t\t}", "body, body.light_on { background-color: #e6d7bd !important; color: #131d24; }", "body.light_off { background-color: #4f535b !important; color: rgb(221, 221, 221); }", ".vertical-container, .divimage {\n  display: -webkit-flex;\n  display:         flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}", ".divimage { width: 100%; height: 100%; }", "#page_contents img, .divimage, .divimage * { margin: 0 !important; padding: 0 !important; border-width: 0; outline-width: 0; }" ]);
let e = unsafeWindow.g_chapter_pages_count, t = i('<div id="full_contents"/>');
if (e > 1) {
n(145).ajaxSetup();
let e = [];
e.push(Promise.resolve(v.html()));
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
} else t.html(v.html());
let o = t.find("img");
if (o.length && (v.find("img").add(o).each(function(e, t) {
let n = i(t);
n.parents(".divimage").length || (n.parent().is("a") ? n.parent().wrap('<div class="divimage"></div>') : n.wrap(`<div class="divimage"><a href="${n.attr("src")}" target="_blank"/></div>`));
}), i(".divimage a").attr("target", "_blank")), !t.text().replace(/[\s\r\n　]+/gi, "")) return void (t.find("img").length > 0 && v.html(t.html()));
t.insertBefore(v).wrap('<div id="full_contents_wrap"/>');
{
let e = n(36).novelText, r = t.find("*");
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
const a = n(146);
let s = i("<div/>").css(a.page).css(a.bg_dark).css(a.bg_dark_border).css(a.bg_dark_text).css(a.page_position).appendTo("body"), u = 0, l = 0, c = b.lineHeight * b.line, f = i("<div/>");
u = Math.ceil(t[0].scrollHeight / c);
let p = b.lineHeight * b.line * u - t[0].scrollHeight;
f.height(p), t.find(".divimage, img").length ? f.insertBefore(o.add(".divimage").eq(0)) : f.appendTo(t);
const {throttle: h} = n(35);
t.scrollTop(0).on("scroll.page", function(e) {
let t = i(this);
l >= u && (l = u - 1), l < 0 && (l = 0), s.text(`${l + 1} / ${u}`), i(window).triggerHandler("resize");
}).triggerHandler("scroll.page");
try {
let e = i("#light_a");
e.is(".off") && i("body").addClass("light_off"), e.on("click", function() {
e.is(".off") ? i("body").addClass("light_off") : i("body").removeClass("light_off");
});
} catch (e) {
console.log(e);
}
i(window).on("resize", h(100, function() {
s.offset({
top: t.offset().top + 50,
left: t.offset().left - s.outerWidth() - 10
});
})).on("keydown.page", n(147).packEvent(function(e) {
const r = n(148), i = n(149);
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
}).call(this, n(1), n(2), n(0).default);
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
}).call(this, n(1), n(2), n(0).default);
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
}).call(this, n(1), n(2), n(0).default);
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
}).call(this, n(1), n(2), n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(24);
var i = n(15);
function o(e) {
return r.default.split(e, "");
}
function a(e, t) {
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
t.array_unique = i.array_unique, t.lazy_unique = i.lazy_unique, t.split = o, t.charCodeAt = a, 
t.default = t;
}, function(e, t, n) {
"use strict";
var r;
!function(e) {
const t = n(41);
function r(...e) {
return e.length > 1 ? i(e) : i(e[0]);
}
function i(e, t = {}) {
if (!Array.isArray(e)) throw new TypeError(`Expected an Array but got ${typeof e}.`);
const n = s(t);
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
return e.length > 1 ? a(e) : a(e[0]);
}
function a(e, t = {}) {
let n;
return i(e, Object.assign({}, t, {
overwrite: !0
}));
}
function s(e = {}) {
const t = e.checker || u, n = e.filter || null, r = (e, r, i) => {
let o;
return i.findIndex(n => t(n, e, i, i)) == r && (!n || n(e));
};
return r;
}
function u(e, n, r, i) {
return t(e, n);
}
e.lazy_unique = r, e.array_unique = i, e.lazy_unique_overwrite = o, e.array_unique_overwrite = a, 
e.defaultFilter = s, e.defaultChecker = u;
}(r || (r = {})), r = r.lazy_unique = Object.assign(r.lazy_unique, r, t, {
equals: n(41),
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
const r = n(4);
t.hasSupportFlag = r.hasSupportFlag, t.testFlag = r.testFlag;
const i = n(50);
t.FlagsName = i.FlagsName;
const o = n(4), a = n(26);
t.testPattern = a.testPattern;
const s = n(51), u = n(127), l = n(28), c = n(54), f = n(55), p = n(56), h = {
nativeFlags: "",
flags: Object.keys(i.FlagsName).reduce(function(e, t) {
let n = !1;
return n = t in e ? e[t] : i.FlagsName[t] in e ? e[i.FlagsName[t]] : r.hasSupportFlag(i.FlagsName[t]), 
e[t] = n, e;
}, {}),
flagsAll: o.testFlagsAll(RegExp, !0),
pattern: Object.keys(a.PatternSupport).reduce(function(e, t) {
return e[t] = a.testPattern(t), e;
}, {}),
prototype: c.testPrototype(),
static: f.testStatic(),
symbol: p.testSymbol(),
objectStringTag: Object.prototype.toString.call(/a/),
unicodeSet: (() => ({
unicode: !1,
script: !1,
blocks: !1,
unicodeTest: Object.entries(s.testUnicodeAll()).reduce(function(e, t) {
return null !== t[1] && (e[t[0]] = t[1]), e;
}, {}),
scriptTest: Object.entries(l.testUnicodeScriptAll()).reduce(function(e, t) {
return null !== t[1] && (e[t[0]] = t[1]), e;
}, {}),
blocksTest: Object.entries(u.testUnicodeBlocksAll()).reduce(function(e, t) {
return null !== t[1] && (e[t[0]] = t[1]), e;
}, {})
}))()
};
h.unicodeSet.unicode = Object.values(h.unicodeSet.unicodeTest).includes(!0), h.unicodeSet.script = Object.values(h.unicodeSet.scriptTest).includes(!0), 
h.unicodeSet.blocks = Object.values(h.unicodeSet.blocksTest).includes(!0), h.nativeFlags = Object.keys(h.flagsAll).reduce(function(e, t) {
return h.flagsAll[t] && e.push(t), e;
}, []).join(""), t.support = Object.freeze(h), t.default = t.support;
}, function(e, t, n) {
"use strict";
function r(e, t, n) {
return t + e + n;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t._wrapToRegexName = r;
const i = n(17);
t.default = i;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.desc = "部分小說網站重新排版、修正文字，改變閱讀樣式", t.grant = [ "GM_registerMenuCommand", "GM_xmlhttpRequest", "unsafeWindow", "GM_getValue" ], 
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
}).call(this, n(1), n(2), n(0).default);
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
const i = n(20);
t.default = i;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(22), i = n(44), o = n(97), a = n(25);
t.SP_REGEXP = a.SP_REGEXP, t.SP_KEY = a.SP_KEY;
const s = n(144);
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
}, this.options = {}, this._words_r1 = a.SP_REGEXP;
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
}), "string" == typeof e.s && e.s.match(new RegExp(`${a.SP_KEY}(.+)$`))) {
e._source || (e._source = e.s);
let n = e.s.split(a.SP_KEY), r = n.join(`)${t}(`);
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
return Object.entries(e).forEach(([t, n]) => e[t] = s.envVal(n)), e;
}
reduceLine(e, t = {}) {
if ((t = this.fixOptions(t)).allow_lf2) return e;
let n = this.trim(e, t), r = n = n.replace(/[ 　\t]+\n/g, "\n").replace(/[\s　]+$/g, "").replace(/^[\n \t]+/g, "").replace(/\n{4,}/g, "\n\n\n\n");
if (!r.match(/[^\n]\n[^\n]/g)) {
let [e, o, a] = i.default(r.toString());
if (e > 2 && (t.allow_lf2 = !1), a >= 3) {
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
t.enspace = enspace;
const u = n(21);
t.default = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var r = n(37);
t.isFullWidth = r.isFullWidth, t.isFullwidthCodePoint = r.isFullwidthCodePoint;
var i = n(70);
t.stringWidth = i.stringWidth;
const o = n(39);
t.toFullNumber = o.toFullNumber, t.toHalfNumber = o.toHalfNumber, t.toFullEnglish = o.toFullEnglish, 
t.toHalfEnglish = o.toHalfEnglish, t.toFullWidth = o.toFullWidth, t.toHalfWidth = o.toHalfWidth;
const a = n(38);
t.stripAnsi = a;
const s = n(73);
t.normalize = s.default;
var u = n(74);
t.trim = u.trim;
var l = n(75);
t.zh2jp = l.zh2jp, t.jp2zhs = l.jp2zhs, t.jp2zht = l.jp2zht;
var c = n(83);
t.zh2num = c.zh2num, t.num2zh = c.num2zh;
var f = n(40);
t.charCodeAt = f.charCodeAt, t.tableFullHalf = o.FullHalfCore.table;
const p = n(22);
t.default = p;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(14), i = n(81);
t.ZHJP_TABLE = i.default, t.ZHJP_TABLE_SAFE = i.TABLE_SAFE, t.KEY_JP = "jp", t.KEY_ZHT = "zht", 
t.KEY_ZHS = "zhs";
let o = !1;
var a;
function s(e, n) {
return /[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]+/u.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), 
r.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let r;
return (r = f(e, t.KEY_ZHT, t.KEY_JP, n.safe)) ? r : (r = f(e, t.KEY_ZHS, t.KEY_JP, n.safe)) ? r : e;
}).join("")) : e;
}
function u(e, n) {
return /[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]+/u.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), 
r.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let r;
return (r = f(e, t.KEY_JP, t.KEY_ZHT, n.safe)) ? r : (r = f(e, t.KEY_ZHS, t.KEY_ZHT, n.safe)) ? r : e;
}).join("")) : e;
}
function l(e, n) {
return /[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]+/u.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), 
r.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let r;
return (r = f(e, t.KEY_JP, t.KEY_ZHS, n.safe)) ? r : (r = f(e, t.KEY_ZHT, t.KEY_ZHS, n.safe)) ? r : e;
}).join("")) : e;
}
function c(e) {
if (o && !e) return t.TABLE;
function n(e) {
let n = {};
return n[t.KEY_JP] = {}, n[t.KEY_ZHT] = {}, n[t.KEY_ZHS] = {}, e.forEach(function(e) {
let [r, i, o] = e, a = t.KEY_JP;
for (let e of r) e && !n[a][e] && (n[a][e] = n[a][e] || {}, n[a][e][a] = e, n[a][e].zht = i[0], 
n[a][e].zhs = o[0]);
a = t.KEY_ZHT;
for (let e of i) e && !n[a][e] && (n[a][e] = n[a][e] || {}, n[a][e].jp = r[0], n[a][e][a] = e, 
n[a][e].zhs = o[0]);
a = t.KEY_ZHS;
for (let e of o) e && !n[a][e] && (n[a][e] = n[a][e] || {}, n[a][e].jp = r[0], n[a][e].zht = i[0], 
n[a][e][a] = e);
}), n;
}
return t.TABLE = n(i.default), t.TABLE_SAFE = n(i.TABLE_SAFE), o = !0, t.TABLE;
}
function f(e, n, r, i) {
return i ? t.TABLE_SAFE[n][e] ? t.TABLE_SAFE[n][e][r] : null : t.TABLE[n][e] ? t.TABLE[n][e][r] : null;
}
t.defaultOptions = {
safe: !0
}, function(e) {
c();
let n = Object.keys(t.TABLE);
n.forEach(function(i) {
n.forEach(function(n) {
i != n && (e[`${i}2${n}`] = function(e, o) {
return /[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]+/u.test(e.toString()) ? (o = Object.assign({}, t.defaultOptions, o), 
r.split(e).map(function(e) {
if (o.skip && -1 != o.skip.indexOf(e)) return e;
let t;
return (t = f(e, i, n, o.safe)) ? t : e;
}).join("")) : e;
});
});
});
}(a || (a = {})), t.jp2zht = a.jp2zht, t.jp2zhs = a.jp2zhs, t.zhs2jp = a.zhs2jp, 
t.zht2jp = a.zht2jp, t.zht2zhs = a.zht2zhs, t.zhs2zht = a.zhs2zht, t.zh2jp = s, 
t.cjk2jp = s, t.cjk2zht = u, t.cjk2zhs = l, t.init = c, t._getdata = f, t.default = t;
}, function(e, t, n) {
"use strict";
const r = n(76);
t.default = r.UString, r.UString.default = r.UString.UString = r.UString, e.exports = r.UString;
}, function(e, t, n) {
"use strict";
function r(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(98);
r(n(29));
const o = n(29);
function a(e, n = {}) {
let r = n.count || 1;
const o = n.toRegExp ? n.toRegExp : i.create;
do {
l(function(n, r, i, a) {
let s = a.fnSplitChar(n), u, l = new Array(s.length).fill(0).map(function(e, t, n) {
return "$" + (t + 1);
}).join(t.SP_ESCAPE), c = o("(" + s.join(")(") + ")", a.flags);
e = e.replace(c, l);
}, n);
} while (--r > 0);
return e;
}
function s(e, n = {}) {
let r = n.count || 1;
const o = n.toRegExp ? n.toRegExp : i.create, a = n.strict ? t.SP_REGEXP_STRICT : n.unsafe ? t.SP_REGEXP_UNSAFE : t.SP_REGEXP;
return l(function(n, r, i, s, u) {
let l = s.fnSplitChar(n), c = o("(" + l.join(")" + t.SP_KEY + "(") + ")", s.flags), f = new RegExp(c.source.split(t.SP_KEY).join(a), s.flags), p;
p = void 0 === u.retLast || null === u.retLast || u.retLast instanceof String ? !s.staticReturn && u.retLast instanceof String ? u.retLast.toString() : s.staticReturn || 1 != i.length ? i[0] : new Array(l.length).fill(0).map(function(e, t, n) {
return "$" + (t + 1);
}).join("") : u.retLast, e = e.replace(f, p);
}, n), e;
}
function u(e = {}) {
return l(function(e, n, r, i, o) {
let a, s = i.fnSplitChar(e), u;
return u = void 0 === o.retLast || null === o.retLast || o.retLast instanceof String ? !i.staticReturn && o.retLast instanceof String ? o.retLast.toString() : i.staticReturn || 1 != r.length ? r[0] : new Array(s.length).fill(0).map(function(e, t, n) {
return "$" + (t + 1);
}).join("") : o.retLast, a = [ s.join(t.SP_KEY), u, i.flags ];
}, e);
}
function l(e, t) {
return t.flags = "string" == typeof t.flags ? t.flags : "ig", t.fnSplitChar = t.fnSplitChar || c, 
t.toRegExp = t.toRegExp || i.create, (t.tables || []).concat(o.table2).concat(o.table3).concat(o.table).reduce(function(n, r) {
let i;
i = Array.isArray(r) ? r.slice() : [ r ];
const o = {};
return i.length > 1 && "string" != typeof i[i.length - 1] && (o.retLast = i.pop()), 
i.forEach(function(r, i, a) {
let s = e(r, i, a, t, o);
n.push(s);
}), n;
}, []);
}
function c(e) {
return e.split("");
}
t.SP_KEY = "#_@_#", t.SP_REGEXP = "(?:@|（·?）|-|/|\\(\\)|%|￥|_|\\?|？|\\||#|\\$|[（\\(](?:和谐|河蟹)[\\)）]|（河）（蟹）|[（\\(][河蟹]{1,2}[\\)）]| |\\.|[・·]|\\*|□|圌|[=＝]|\\\\\\\\|\\/\\/|｜)", 
t.SP_REGEXP_UNSAFE = "(?:" + t.SP_REGEXP + "|、|。)", t.SP_ESCAPE = "（河蟹）", t.SP_REGEXP_STRICT = `(?:${t.SP_ESCAPE})`, 
t.escape = a, t.unescape = s, t.getTable = u, t.loopTable = l, t.splitChar = c;
const f = n(25);
t.default = f;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(4);
function i(e, n = RegExp, i = t.PatternTest) {
if (i[e] && i[e].length) {
let t = !1;
try {
t = !0 === i[e].every(function(e) {
let [t, i, o, a, s] = e, u, l = r.createRegExp(t, i, n);
if (s) if ("function" == typeof s) u = s(l, a, o, t, n, i); else {
let e;
switch (s) {
case "replace":
u = (e = o.replace(l, "")) === a;
break;

default:
u = l[s](o) === a;
break;
}
} else u = l.exec(o) === a;
return u;
});
} catch (e) {
t = !1;
}
return t;
}
return null;
}
function o(e, t) {
return [ `U\\+(?<${e}>[0-9A-F]{4})`, t || "", "U+2620", {
groups: {
[e]: "2620"
}
}, function(e, t, n) {
let r = e.exec(n);
return r.groups && Object.entries(r.groups).every(function(e) {
let [n, r] = e, i;
return r === t.groups[n];
});
} ];
}
t.PatternSupport = {
namedCapturingGroups: !1,
namedCapturingGroupsUnicode: !1,
namedCapturingGroupsEmoji: !1,
namedCapturingGroupsBackreference: !1,
namedCapturingGroupsDuplicate: !1,
lookAheadPositive: !1,
lookAheadNegative: !1,
lookBehindPositive: !1,
lookBehindNegative: !1,
dotUnicodeEmoji: !1,
classSub: !1,
unicodeWrap: !1
}, t.PatternTest = {
namedCapturingGroups: [ o("Az"), o("_09"), o("$") ],
namedCapturingGroupsUnicode: [ o("naïve嬢の日常"), o("Русский"), o("naïve"), o("嬢の日常"), o("𠬠", "u") ],
namedCapturingGroupsEmoji: [ o("👩", "u") ],
namedCapturingGroupsBackreference: [ [ "^(?<half>.*).\\k<half>$", "u", "a*a", !0, "test" ], [ "^(?<half>.*).\\k<half>$", "u", "a*b", !1, "test" ] ],
namedCapturingGroupsDuplicate: [ [ "^(?:(?<half>b)|(?<half>a)).\\k<half>$", "u", "a*a", !0, "test" ] ],
lookAheadPositive: [ [ "aa(?=bb)", "", "aabb", !0, "test" ] ],
lookAheadNegative: [ [ "aa(?!bb)", "", "aabb", !1, "test" ] ],
lookBehindPositive: [ [ "(?<=\\$)foo", "g", "$foo %foo foo", "$ %foo foo", "replace" ], [ "(?<=\\$)foo", "g", "$foo %foo foo", "$bar %foo foo", function(e, t, n, r, i, o) {
return n.replace(e, "bar") === t;
} ] ],
lookBehindNegative: [ [ "(?<!\\$)foo", "g", "$foo %foo foo", "$foo % ", "replace" ], [ "(?<!\\$)foo", "g", "$foo %foo foo", "$foo %bar bar", function(e, t, n, r, i, o) {
return n.replace(e, "bar") === t;
} ] ],
dotUnicodeEmoji: [ [ "^.$", "u", "😀", !0, "test" ] ],
classSub: [ [ "[a-z&&[^m-p]]", "", "m", !1, "test" ], [ "[a-z&&[^m-p]]", "", "a", !0, "test" ] ],
unicodeWrap: [ [ "^\\u{20bb7}$", "u", "𠮷", !0, "test" ] ]
}, t.testPattern = i, t.testNamedCapturingGroups = o;
const a = n(26);
t.default = a;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(26), i = n(52);
function o(...e) {
e = e.reduce(function(e, t) {
let n = i.inspect(t, {
colors: !0
});
return e.push(n), e;
}, []), console.log(...e);
}
function a(e) {
let t = n(124)(e);
return t.__esModule && t.default || t;
}
function s(e) {
return (t, n = RegExp, i = e) => r.testPattern(t, n, i);
}
t.log_dir = o, t.require_default = a, t._createFnTestPattern = s, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(53), i = n(27), o = n(17), a = n(129);
var s;
function u(e, n, r = t.PatternTest) {
return !t.PatternTest.hasOwnProperty(e) && s[e] && t.PatternTest.hasOwnProperty(s[e]) && (e = s[e]), 
t._testUnicodeScript(e, n, r);
}
function l(e = RegExp, n = t.PatternTest) {
return Object.keys(t.UNICODE_SCRIPTS_ALL).reduce(function(t, r) {
return t[r] = u(r, e, n), t;
}, {});
}
function c(e, n) {
let r = t.KEY_PREFIX;
return n && (r = t.KEY_PREFIX_NEGATION), o._wrapToRegexName(e, r, t.KEY_SUFFIX);
}
t.KEY_PREFIX = "\\p{Script=", t.KEY_PREFIX_NEGATION = "\\P{Script=", t.KEY_SUFFIX = "}", 
t.UNICODE_SCRIPTS = {
Greek: !1,
Latin: !1,
Katakana: !1,
Hiragana: !1,
Han: !1,
Hangul: !1
}, t.UNICODE_SCRIPTS_ALL = Object.assign({}, a.default, r.default.Script, t.UNICODE_SCRIPTS), 
function(e) {
e.Arabic = "Arab", e.Bengali = "Beng", e.Coptic = "Copt", e.Cyrillic = "Cyrl", e.Ethiopic = "Ethi", 
e.Georgian = "Geor", e.Greek = "Grek", e.Han = "Hani", e.Katakana = "Kana", e.Hiragana = "Hira", 
e.Latin = "Latn", e.Tamil = "Taml", e.Tibetan = "Tibt";
}(s = t.UNICODE_SCRIPTS_NAME_ALIAS || (t.UNICODE_SCRIPTS_NAME_ALIAS = {})), Object.keys(s).forEach(function(e) {
let t = s[e];
t && !s[t] && (s[t] = e);
}), t.PatternTest = {
Greek: [ [ "^\\p{Script=Greek}+$", "u", "μετά", !0, "test" ] ],
Latin: [ [ "^\\p{Script=Latin}+$", "u", "Grüße", !0, "test" ], [ "^\\p{Script=Latin}+$", "u", "façon", !0, "test" ], [ "^\\p{Script=Latin}+$", "u", "mañana", !0, "test" ] ],
Katakana: [ [ "^\\p{Script=Katakana}+$", "u", "カタカナ", !0, "test" ] ],
Hiragana: [ [ "^\\p{Script=Hiragana}+$", "u", "ひらがな", !0, "test" ] ],
Han: [ [ "^\\p{Script=Han}+$", "u", "カタカナ", !1, "test" ], [ "^\\p{Script=Han}+$", "u", "可以知道", !0, "test" ] ],
Hangul: [ [ "^\\p{Script=Hangul}+$", "u", "ᆐ", !0, "test" ] ],
Common: [ [ "^\\p{Script=Common}+$", "u", "!", !0, "test" ] ],
Arabic: [ [ "^\\p{Script=Arabic}+$", "u", "لمو", !0, "test" ] ],
Bengali: [ [ "^\\p{Script=Bengali}+$", "u", "আমার", !0, "test" ] ],
Cyrillic: [ [ "^\\p{Script=Cyrillic}+$", "u", "летачко", !0, "test" ] ],
Ethiopic: [ [ "^\\p{Script=Ethiopic}+$", "u", "ማንዣበቢያ", !0, "test" ] ],
Georgian: [ [ "^\\p{Script=Georgian}+$", "u", "ხომალდი", !0, "test" ] ],
Coptic: [ [ "^\\p{Script=Coptic}+$", "u", "Ϫ", !0, "test" ], [ "^\\p{Script=Coptic}+$", "u", "Ϫ", !0, "test" ] ],
Tamil: [ [ "^\\p{Script=Tamil}+$", "u", "்", !0, "test" ], [ "^\\p{Script=Tamil}+$", "u", "்", !0, "test" ] ],
Tibetan: [ [ "^\\p{Script=Tibetan}+$", "u", "༬", !0, "test" ], [ "^\\p{Script=Tibetan}+$", "u", "༬", !0, "test" ] ]
}, t._testUnicodeScript = i._createFnTestPattern(t.PatternTest), t.testUnicodeScript = u, 
t.testUnicodeScriptAll = l, t.wrapToRegexName = c;
const f = n(28);
t.default = f;
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
const i = n(29);
t.default = i;
}, function(e, t, n) {
"use strict";
(function(e, r, i) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const o = n(59), a = n(2);
t.greasemonkey = a.default;
const s = n(31);
function u(t, n, i, o) {
let a = async () => {
try {
o ? await o(t, n, e, window, i, window.location.href) : await c(t, n, e, window, i, window.location.href);
const r = p(t, "index");
await d(t, r, r.list), console.info(t, "index.current", r.current);
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
return n(63)(`./${e}/${t}`);
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
let u = !0, l, c;
console.time(i), console.group(i), l = await r.test(e._url_obj), a.default.info(n.id, s, "test", l), 
o && 2 !== l ? a.default.info(n.id, s, "break:test", l) : (l && (1 == (c = await r.main(e._url_obj)) || void 0 === c ? (c = !0, 
a.default.info(n.id, s, "matched", c, u)) : a.default.debug(n.id, s, "main", c), 
c && (u = !1, l && !0 !== l && (u = !0), a.default.debug(n.id, s, "chk", c, u, l))), 
u && !l || (a.default.debug(n.id, s, "current:push", c, u, l), n.current.push({
name: i,
name_id: s,
lib: r
}))), console.groupEnd(i), console.timeEnd(i), o || u || (a.default.debug(n.id, s, "break", c, u, l), 
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
let s = !0, u, l;
if (u = await n.test(e._url_obj), a.default.info(t.id, o, "test", u), u) return l = await n.main(e._url_obj), 
a.default.debug(t.id, o, "main", l), n;
}
}
function _(e, t) {
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
t.run = u, t.url = l, t.init = c, t.requireScript = p, t.get_list_script = h, t.main = d, 
t.main_list = g;
}).call(this, n(1), n(0).default, n(0).default);
}, function(e, t, n) {
"use strict";
(function(e, r, i) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const o = n(30), a = n(32), s = n(33);
function u(t, r, i) {
let u = o.requireScript(t, "index");
s.hasGrant(u.metadata.grant, "registerMenuCommand") ? a.registerMenuCommand({
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
t.registerGlobalMenu = u;
const c = n(31);
t.default = c;
}).call(this, n(1), n(0).default, n(0).default);
}, function(e, t, n) {
"use strict";
const r = n(60);
e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(62);
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
e[t] && (e[t] = e[t].length ? l(r.array_unique(e[t])) : []);
}), e.grant && e.grant.length && e.grant.sort(), e;
}
function s(e) {
return e.map(function(e, t, n) {
return e.replace(/^.*(\:\/\/)/, "*$1");
});
}
function u(e, t, n = !1, r = "\t\t", i = "// ", o = "\n") {
let a = "", s = `${i}@${e}${r}`;
return Array.isArray(t) ? a = t.join(`${o}${s}`) : void 0 !== t && (a = t.toString()), 
n && (a = s + a), a;
}
function l(e) {
return e.filter(function(e, t, n) {
return !!e;
});
}
t.parseMetadata = i, t.hasGrant = o, t.lazyMetaFix = a, t.meta_match = s, t.makeMetaRow = u, 
t.meta_filter = l;
const c = n(33);
t.default = c;
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
function u(e) {
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
var l = [], c = !1, f, p = -1;
function h() {
c && f && (c = !1, f.length ? l = f.concat(l) : p = -1, l.length && d());
}
function d() {
if (!c) {
var e = s(h);
c = !0;
for (var t = l.length; t; ) {
for (f = l, l = []; ++p < t; ) f && f[p].run();
p = -1, t = l.length;
}
f = null, c = !1, u(e);
}
}
function g(e, t) {
this.fun = e, this.array = t;
}
function _() {}
n.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
l.push(new g(e, t)), 1 !== l.length || c || s(d);
}, g.prototype.run = function() {
this.fun.apply(null, this.array);
}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", 
n.versions = {}, n.on = _, n.addListener = _, n.once = _, n.off = _, n.removeListener = _, 
n.removeAllListeners = _, n.emit = _, n.prependListener = _, n.prependOnceListener = _, 
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
"use strict";
function r(e, t, n, r) {
var i, o = !1, a = 0;
function s() {
i && clearTimeout(i);
}
function u() {
s(), o = !0;
}
function l() {
var u = this, l = Date.now() - a, c = arguments;
function f() {
a = Date.now(), n.apply(u, c);
}
function p() {
i = void 0;
}
o || (r && !i && f(), s(), void 0 === r && l > e ? f() : !0 !== t && (i = setTimeout(r ? p : f, void 0 === r ? e - l : e)));
}
return "boolean" != typeof t && (r = n, n = t, t = void 0), l.cancel = u, l;
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
}), r(n(21));
const i = n(22);
t.StrUtil = i;
const o = n(21), a = n(25);
t.tiebaHarmony = a.default;
const s = n(44);
t.chkBlankLine = s.default, t.novelText = o.enspace.create(), t.default = t.novelText;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(69);
function i(e) {
return !Number.isNaN(e) && (!!(9472 <= e && e <= 9599 || 9600 <= e && e <= 9631 || r(e)) || void 0);
}
function o(e) {
return i("number" != typeof e ? e.codePointAt() : e);
}
t.isFullwidthCodePoint = i, t.isFullWidth = o, t.default = t;
}, function(e, t, n) {
"use strict";
const r = n(71);
e.exports = (e => "string" == typeof e ? e.replace(r(), "") : e);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(72), i = n(40);
var o;
!function(e) {
e.FULL_WIDTH = 1, e.HALF_WIDTH = 0, e.NO_EXIST = -1;
let t = {
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
let r = e.tableDefaultInclude.slice(0, -1);
e.table[0] = {}, e.table[1] = {};
for (let r in t) {
let i, o;
(o = n(t[r])) && (e.table[e.HALF_WIDTH][r] = o[1], e.table[e.FULL_WIDTH][r] = o[0]);
}
let i = n(t.default);
i[0].not = [], i[1].not = [];
for (let e of r) {
let r, o;
(o = n(t[e])) && (i[0].not.push(o[0]), i[1].not.push(o[1]));
}
function n(e) {
let t = [];
t[0] = {}, t[1] = {};
let n = !0;
if (Array.isArray(e) && (2 == e.length ? (t[0].from = e[0], t[0].to = e[1]) : t[0].values = e, 
n = !1), e.from && e.to && (t[0].from = e.from, t[0].to = e.to, n = !1), Array.isArray(e.values) && e.values.length && (t[0].values = e.values, 
n = !1), !n) return t[0].from && t[0].to && (t[1].from = c(t[0].from), t[1].to = c(t[0].to)), 
t[0].values && (t[1].values = t[0].values.reduce(function(e, t) {
return e.push(c(t)), e;
}, [])), t;
}
e.table[e.HALF_WIDTH].not_default = i[1], e.table[e.FULL_WIDTH].not_default = i[0];
}
function o(e) {
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
function u(t) {
return 32 <= t && t < 127 ? e.HALF_WIDTH : 12288 === t || 65280 < t && t < 65375 ? e.FULL_WIDTH : e.NO_EXIST;
}
function l(t) {
let n = u(t);
return n === e.FULL_WIDTH || n !== e.HALF_WIDTH && null;
}
function c(e) {
return 32 < e && e < 127 ? e - 32 + 65280 : 32 === e ? 12288 : e;
}
function f(e) {
return 65280 < e && e < 65375 ? e - 65280 + 32 : 12288 === e ? 32 : e;
}
function p(t) {
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
n.skip = p(n.skip), n.only = p(n.only);
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
function d(e, t, n) {
return (i, o) => (o = r.all([ {}, o || {}, n || {}, {
type: t
} ]), h(i, e, o));
}
e.filterTable = o, e._chkType = a, e.chkType = s, e.hasFullHalf = u, e.isFullHalf = l, 
e.toFullWidth = c, e.toHalfWidth = f, e._optionsType = p, e.process = h, e.factory = d;
}(o = t.FullHalfCore || (t.FullHalfCore = {}));
let a = {
only: {
number: !0
}
};
t.toFullNumber = o.factory(o.toFullWidth, o.FULL_WIDTH, a), t.toHalfNumber = o.factory(o.toHalfWidth, o.HALF_WIDTH, a), 
a = {
only: {
eng: !0
}
}, t.toFullEnglish = o.factory(o.toFullWidth, o.FULL_WIDTH, a), t.toHalfEnglish = o.factory(o.toHalfWidth, o.HALF_WIDTH, a), 
a = {
only: {
default: !0
}
}, t.toFullWidth = o.factory(o.toFullWidth, o.FULL_WIDTH, a), t.toHalfWidth = o.factory(o.toHalfWidth, o.HALF_WIDTH, a);
const s = n(39);
t.default = s;
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
var r = n(80);
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
function a(e, t, n) {
if (!n || E(e) || E(t)) return null;
var r = n.get(e);
if (r) {
var i = r.get(t);
if ("boolean" == typeof i) return i;
}
return null;
}
function s(e, t, n, r) {
if (n && !E(e) && !E(t)) {
var i = n.get(e);
i ? i.set(t, r) : ((i = new o()).set(t, r), n.set(e, i));
}
}
function u(e, t, n) {
if (n && n.comparator) return c(e, t, n);
var r = l(e, t);
return null !== r ? r : c(e, t, n);
}
function l(e, t) {
return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t || !E(e) && !E(t) && null;
}
function c(e, t, n) {
(n = n || {}).memoize = !1 !== n.memoize && (n.memoize || new o());
var i = n && n.comparator, u = a(e, t, n.memoize);
if (null !== u) return u;
var c = a(t, e, n.memoize);
if (null !== c) return c;
if (i) {
var p = i(e, t);
if (!1 === p || !0 === p) return s(e, t, n.memoize, p), p;
var h = l(e, t);
if (null !== h) return h;
}
var d = r(e);
if (d !== r(t)) return s(e, t, n.memoize, !1), !1;
s(e, t, n.memoize, !0);
var g = f(e, t, d, n);
return s(e, t, n.memoize, g), g;
}
function f(e, t, n, r) {
switch (n) {
case "String":
case "Number":
case "Boolean":
case "Date":
return u(e.valueOf(), t.valueOf());

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
return d(e, t, r);

case "RegExp":
return p(e, t);

case "Generator":
return g(e, t, r);

case "DataView":
return d(new Uint8Array(e.buffer), new Uint8Array(t.buffer), r);

case "ArrayBuffer":
return d(new Uint8Array(e), new Uint8Array(t), r);

case "Set":
return h(e, t, r);

case "Map":
return h(e, t, r);

default:
return v(e, t, r);
}
}
function p(e, t) {
return e.toString() === t.toString();
}
function h(e, t, n) {
if (e.size !== t.size) return !1;
if (0 === e.size) return !0;
var r = [], i = [];
return e.forEach(function e(t, n) {
r.push([ t, n ]);
}), t.forEach(function e(t, n) {
i.push([ t, n ]);
}), d(r.sort(), i.sort(), n);
}
function d(e, t, n) {
var r = e.length;
if (r !== t.length) return !1;
if (0 === r) return !0;
for (var i = -1; ++i < r; ) if (!1 === u(e[i], t[i], n)) return !1;
return !0;
}
function g(e, t, n) {
return d(y(e), y(t), n);
}
function _(e) {
return "undefined" != typeof Symbol && "object" == typeof e && void 0 !== Symbol.iterator && "function" == typeof e[Symbol.iterator];
}
function m(e) {
if (_(e)) try {
return y(e[Symbol.iterator]());
} catch (e) {
return [];
}
return [];
}
function y(e) {
for (var t = e.next(), n = [ t.value ]; !1 === t.done; ) t = e.next(), n.push(t.value);
return n;
}
function D(e) {
var t = [];
for (var n in e) t.push(n);
return t;
}
function b(e, t, n, r) {
var i = n.length;
if (0 === i) return !0;
for (var o = 0; o < i; o += 1) if (!1 === u(e[n[o]], t[n[o]], r)) return !1;
return !0;
}
function v(e, t, n) {
var r = D(e), i = D(t);
if (r.length && r.length === i.length) return r.sort(), i.sort(), !1 !== d(r, i) && b(e, t, r, n);
var o = m(e), a = m(t);
return o.length && o.length === a.length ? (o.sort(), a.sort(), d(o, a, n)) : 0 === r.length && 0 === o.length && 0 === i.length && 0 === a.length;
}
function E(e) {
return null === e || "object" != typeof e;
}
e.exports = u, e.exports.MemoizeMap = o;
}, function(e, t, n) {
"use strict";
var r = {};
n(85)(r), n(86)(r), n(87)(r), e.exports = r;
}, function(e, t, n) {
"use strict";
var r = Object.prototype.hasOwnProperty, i = Object.prototype.toString, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, s = function e(t) {
return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === i.call(t);
}, u = function e(t) {
if (!t || "[object Object]" !== i.call(t)) return !1;
var n = r.call(t, "constructor"), o = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf"), a;
if (t.constructor && !n && !o) return !1;
for (a in t) ;
return void 0 === a || r.call(t, a);
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
if (a) return a(t, n).value;
}
return t[n];
};
e.exports = function e() {
var t, n, r, i, o, a, f = arguments[0], p = 1, h = arguments.length, d = !1;
for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, p = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < h; ++p) if (null != (t = arguments[p])) for (n in t) r = c(f, n), 
f !== (i = c(t, n)) && (d && i && (u(i) || (o = s(i))) ? (o ? (o = !1, a = r && s(r) ? r : []) : a = r && u(r) ? r : {}, 
l(f, {
name: n,
newValue: e(d, a, i)
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
const r = n(93), i = n(96);
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
function a(e) {
let t = o(e, {
filter: !0,
sort: !0
});
if (!t || !t.length) return [ null, null, null ];
let n = t[0] || null, r = t[t.length - 1] || n, i;
return [ n, t[1] || n, r ];
}
t.getBlankLine = o, t.getMinMidMax = a, t.default = a;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(100), i = n(101);
t.libTable = i.default;
const o = n(14);
function a(e, t, ...n) {
return e = i.default._get(e, t, ...n), (e = o.array_unique(e)).sort(), e;
}
function s(e) {
return function(t, n = {}) {
if (!t) return null;
if (n.skip && -1 != n.skip.indexOf(t)) return [ t ];
let r = i.default[e](t, n);
return (r = o.array_unique(r)).sort(), r;
};
}
function u(e, t = {}) {
if (!e) return null;
if (t.skip && -1 != t.skip.indexOf(e)) return [ e ];
let n = r.jp2zht(e), o = r.jp2zhs(e), s;
return a([], e, i.default.tw(e, t), i.default.cn(e, t), (!t.skip || -1 == t.skip.indexOf(n)) && i.default.cn(n, t), (!t.skip || -1 == t.skip.indexOf(o)) && i.default.tw(o, t), i.default.jp(e, t), t.greedyTable && r.cjk2jp(e), t.greedyTable && r.cjk2zhs(e), t.greedyTable && r.cjk2zht(e));
}
t._get = a, t.tw = s("tw"), t.cn = s("cn"), t.jp = s("jp"), t.auto = u, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(102), i = n(47);
t._call = i._call, t.defaultOptions = i.defaultOptions, t.getOptions = i.getOptions, 
t.getOptionsSkip = i.getOptionsSkip, t.REGEXP_TEST = i.REGEXP_TEST, t.SAFE_MODE_CHAR = i.SAFE_MODE_CHAR;
const o = n(46), a = n(106);
function s(e, t = {}, ...n) {
return i._call(l, e, t, ...n);
}
function u(e, t = {}, ...n) {
return i._call(c, e, t, ...n);
}
function l(e) {
return i.textMap(e, t.table_cn2tw);
}
function c(e) {
return i.textMap(e, t.table_tw2cn);
}
t.cn2tw = s, t.tw2cn = u, t.table_cn2tw = Object.assign({}, r.table_cn2tw, a.table_cn2tw_plus), 
t.table_tw2cn = Object.assign({}, r.table_tw2cn, a.table_tw2cn_plus), t._cn2tw = l, 
t._tw2cn = c, t.default = o;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(15), i = n(24);
function o(e, t) {
let n = t[e];
return "string" == typeof n ? n : e;
}
function a(e, t) {
let n = [], r = e.length;
for (let i = 0; i < r; i++) n[i] = o(e[i], t);
return n.join("");
}
function s(e, t) {
let n = i.split(e, ""), r = n.length;
for (let e = 0; e < r; e++) n[e] = o(n[e], t);
return n.join("");
}
function u(e, t) {
let n = e.split(/(?:)/u), r = n.length;
for (let e = 0; e < r; e++) n[e] = o(n[e], t);
return n.join("");
}
function l(e, t) {
return e.replace(/[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]/gu, function(e) {
return o(e, t);
});
}
t.charMap = o, t.textMap1 = a, t.textMap2 = s, t.textMap3 = u, t.textMap4 = l, t.textMap = l;
const c = l;
function f(e) {
return Object.entries(e).reduce(function(e, t) {
let [n, r] = t;
return n != r && (e[n] = r), e;
}, {});
}
function p(e, n = t.SAFE_MODE_CHAR) {
return e.skip ? "string" == typeof e.skip ? e.skip += n.join("") : Array.isArray(e.skip) ? e.skip = e.skip.slice().concat(n) : e.table = n.reduce(function(e, t) {
return e[t] = t, e;
}, Object.assign({}, e.table || {})) : e.skip = n.slice(), e;
}
function h(e = {}, n = t.defaultOptions, r = t.SAFE_MODE_CHAR) {
return (e = Object.assign({}, n, e)).safe && (e = p(e, r)), e;
}
function d(e, n, r = {}, ...i) {
if ((r = h(r)).skip || r.table || r.tableOnly) {
let {skip: o, table: a, tableOnly: s} = r, u = !s;
if (s && !a) throw new Error(`table is ${a}`);
return n.replace(t.REGEXP_TEST, function(t) {
if (o && -1 !== o.indexOf(t)) return t;
if (a && "function" == typeof a) {
let n = a(e, t, r, ...i);
if (null != n) return n;
} else {
if (a && a[t]) return a[t];
if (u) return e(t);
}
return t;
});
}
return e(n, r, ...i);
}
t.default = t, t.removeSame = f, t.defaultOptions = Object.freeze({
safe: !0
}), t.REGEXP_TEST = /[\u4E00-\u9FFF\u{20000}-\u{2FA1F}]/gu, t.SAFE_MODE_CHAR = r.array_unique([ "后", "里", "餵" ]), 
t.getOptionsSkip = p, t.getOptions = h, t._call = d;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(15);
t.array_unique = r.array_unique;
const i = n(112), o = n(121), a = n(24);
function s(e) {
return new i.RegExpParser(e);
}
function u(e, n = t.defaultRegExpParser) {
return e = e.replace(/\n/g, "\\n").replace(/\r/g, "\\r"), n.parseLiteral(e);
}
function l(e, n = t.defaultRegExpParser) {
return n.parseFlags(e);
}
function c(e, n = !1, r = t.defaultRegExpParser) {
return "string" == typeof n && (n = l(n).unicode), e = e.replace(/\n/g, "\\n").replace(/\r/g, "\\r"), 
r.parsePattern(e, 0, e.length, n);
}
function f(e, n = "", r = t.defaultRegExpParser) {
let i;
return n || (n = ""), "string" == typeof e ? i = u(`/${e}/${"string" == typeof n ? n : p(n)}`, r) : (n = "string" == typeof n ? l(n, r) : n, 
i = {
type: "RegExpLiteral",
parent: null,
start: 0,
end: (e = "string" == typeof e ? c(e, n.unicode, r) : e).end + n.end + 2,
raw: `/${e.raw}/${n.raw}`,
pattern: e,
flags: n
}, e.parent = i), i;
}
function p(e, n = {}) {
let i, s;
"number" == typeof n.debugChanged && n.debugChanged >= 99 && (e.changed = !0);
let u = n.debugChanged;
switch (e.type) {
case "RegExpLiteral":
(u || e.changed) && (i = `/${p(e.pattern, n)}/${p(e.flags, n)}`, s = !0);
break;

case "Pattern":
(u || e.changed) && (i = e.elements.reduce(function(e, t) {
return e.push(p(t, n)), e;
}, []).join(""), s = !0);
break;

case "Quantifier":
i = p(e.element, n), 0 !== e.raw.indexOf(i) && /^(?:\{[\d,]+\}|[*+?])$/.test(e.raw) ? i += e.raw : 1 == e.min && Infinity == e.max ? i += "+" : 0 == e.min && Infinity == e.max ? i += "*" : 0 == e.min && 1 == e.max ? i += "?" : i += `{${e.min},${e.max}}`, 
e.greedy || (i += "?"), s = !0;
break;

case "Assertion":
case "CapturingGroup":
case "Group":
case "CharacterClass":
if (e.changed && e.elements) {
let u = !n.noUniqueClass, l = e.elements.reduce(function(e, t) {
let r = p(t, n);
return u && "CharacterClassRange" == t.type && t.old_raw && /-/u.test(t.old_raw) && !/-/u.test(r) ? e = e.concat(a.default.split(r, "")) : e.push(r), 
e;
}, []);
if ("CharacterClass" == e.type && (u || n.sortClass)) {
if (u && t.EMOJI_REGEX.test(e.raw)) {
let e, r, i = new RegExp("(" + t.EMOJI_REGEX.source + ")", t.EMOJI_REGEX.flags);
l = l.reduce(function(t, a) {
let s = /\u200D/.test(a), u = o().test(a);
if (e) {
let e = t.length - 1;
if (u) t[e] += a; else {
if (n.doUniqueClassEmoji) {
let e, n = t.pop().split(i);
t = t.concat(n);
}
t.push(a);
}
} else t.push(a);
return e = u, r = s, t;
}, []);
}
u && (l = r.array_unique(l)), n.sortClass && l.sort();
}
switch (i = l.join(""), e.type) {
case "CapturingGroup":
i = "(" + i + ")";
break;

case "Group":
i = "(?:" + i + ")";
break;

case "CharacterClass":
i = "[" + (e.negate ? "^" : "") + i + "]";
break;

case "Assertion":
let t = [];
"lookbehind" == e.kind && t.push("<"), t.push(e.negate ? "!" : "="), i = "(?" + t.join("") + i + ")";
break;
}
s = !0;
}
break;

case "Disjunction":
if (e.changed) {
let t = e.alternatives.reduce(function(e, t) {
let r = t.reduce(function(e, t) {
return e.push(p(t, n)), e;
}, []).join("");
return e.push(r), e;
}, []);
i = (t = r.array_unique(t)).join("|"), s = !0;
}
break;

default:
break;
}
return s || (i = e.raw), s && (e.old_raw = e.raw, e.raw = i, e.changed = !1), i;
}
t.EMOJI_REGEX = o(), t.defaultRegExpParser = s({
disableChkCharacterClassRange: !0
}), t.createRegExpParser = s, t.parseRegExp = u, t.parseFlags = l, t.parsePattern = c, 
t.fakePatternToRegExpLiteral = f, t.astToString = p, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(116), i = n(117), o = n(118);
function a(e) {
return e === o.CircumflexAccent || e === o.DollarSign || e === o.ReverseSolidus || e === o.FullStop || e === o.Asterisk || e === o.PlusSign || e === o.QuestionMark || e === o.LeftParenthesis || e === o.RightParenthesis || e === o.LeftSquareBracket || e === o.RightSquareBracket || e === o.LeftCurlyBracket || e === o.RightCurlyBracket || e === o.VerticalLine;
}
function s(e) {
return o.isIdStart(e) || e === o.DollarSign || e === o.LowLine;
}
function u(e) {
return o.isIdContinue(e) || e === o.DollarSign || e === o.LowLine || e === o.ZeroWidthNonJoiner || e === o.ZeroWidthJoiner;
}
function l(e) {
return o.isLatinLetter(e) || e === o.LowLine;
}
function c(e) {
return l(e) || o.isDecimalDigit(e);
}
function f(e, t) {
return o.PropertyData.hasOwnProperty(e) && o.PropertyData[e].has(t);
}
function p(e) {
return o.PropertyData.$LONE.has(e);
}
class RegExpValidator {
constructor(e) {
this._reader = new r.Reader(), this._uFlag = !1, this._nFlag = !1, this._lastIntValue = 0, 
this._lastMinValue = 0, this._lastMaxValue = 0, this._lastStrValue = "", this._lastKeyValue = "", 
this._lastValValue = "", this._lastAssertionIsQuantifiable = !1, this._numCapturingParens = 0, 
this._groupNames = new Set(), this._backreferenceNames = new Set(), this._options = e || {};
}
validateLiteral(e, t = 0, n = e.length) {
if (this._uFlag = this._nFlag = !1, this.reset(e, t, n), this.onLiteralEnter(t), 
this.eat(o.Solidus) && this.eatRegExpBody() && this.eat(o.Solidus)) {
const r = this.index, i = -1 !== e.indexOf("u", r);
this.validateFlags(e, r, n), this.validatePattern(e, t + 1, r - 1, i);
} else if (t >= n) this.raise("Empty"); else {
const e = String.fromCodePoint(this.currentCodePoint);
this.raise(`Unexpected character '${e}'`);
}
this.onLiteralLeave(t, n);
}
validateFlags(e, t = 0, n = e.length) {
const r = new Set();
let i = !1, a = !1, s = !1, u = !1, l = !1, c = !1;
for (let f = t; f < n; ++f) {
const t = e.charCodeAt(f);
r.has(t) && this.raise(`Duplicated flag '${e[f]}'`), r.add(t), t === o.LatinSmallLetterG ? i = !0 : t === o.LatinSmallLetterI ? a = !0 : t === o.LatinSmallLetterM ? s = !0 : t === o.LatinSmallLetterU && this.ecmaVersion >= 2015 ? l = !0 : t === o.LatinSmallLetterY && this.ecmaVersion >= 2015 ? u = !0 : t === o.LatinSmallLetterS && this.ecmaVersion >= 2018 ? c = !0 : this.raise(`Invalid flag '${e[f]}'`);
}
this.onFlags(t, n, i, a, s, l, u, c);
}
validatePattern(e, t = 0, n = e.length, r = !1) {
this._uFlag = r && this.ecmaVersion >= 2015, this._nFlag = r && this.ecmaVersion >= 2018, 
this.reset(e, t, n), this.pattern(), !this._nFlag && this.ecmaVersion >= 2018 && this._groupNames.size > 0 && (this._nFlag = !0, 
this.rewind(t), this.pattern());
}
get strict() {
return Boolean(this._options.strict || this._uFlag);
}
get ecmaVersion() {
return this._options.ecmaVersion || 2018;
}
onLiteralEnter(e) {
this._options.onLiteralEnter && this._options.onLiteralEnter(e);
}
onLiteralLeave(e, t) {
this._options.onLiteralLeave && this._options.onLiteralLeave(e, t);
}
onFlags(e, t, n, r, i, o, a, s) {
this._options.onFlags && this._options.onFlags(e, t, n, r, i, o, a, s);
}
onPatternEnter(e) {
this._options.onPatternEnter && this._options.onPatternEnter(e);
}
onPatternLeave(e, t) {
this._options.onPatternLeave && this._options.onPatternLeave(e, t);
}
onDisjunctionEnter(e) {
this._options.onDisjunctionEnter && this._options.onDisjunctionEnter(e);
}
onDisjunctionLeave(e, t) {
this._options.onDisjunctionLeave && this._options.onDisjunctionLeave(e, t);
}
onAlternativeEnter(e, t) {
this._options.onAlternativeEnter && this._options.onAlternativeEnter(e, t);
}
onAlternativeLeave(e, t, n) {
this._options.onAlternativeLeave && this._options.onAlternativeLeave(e, t, n);
}
onGroupEnter(e) {
this._options.onGroupEnter && this._options.onGroupEnter(e);
}
onGroupLeave(e, t) {
this._options.onGroupLeave && this._options.onGroupLeave(e, t);
}
onCapturingGroupEnter(e, t) {
this._options.onCapturingGroupEnter && this._options.onCapturingGroupEnter(e, t);
}
onCapturingGroupLeave(e, t, n) {
this._options.onCapturingGroupLeave && this._options.onCapturingGroupLeave(e, t, n);
}
onQuantifier(e, t, n, r, i) {
this._options.onQuantifier && this._options.onQuantifier(e, t, n, r, i);
}
onLookaroundAssertionEnter(e, t, n) {
this._options.onLookaroundAssertionEnter && this._options.onLookaroundAssertionEnter(e, t, n);
}
onLookaroundAssertionLeave(e, t, n, r) {
this._options.onLookaroundAssertionLeave && this._options.onLookaroundAssertionLeave(e, t, n, r);
}
onEdgeAssertion(e, t, n) {
this._options.onEdgeAssertion && this._options.onEdgeAssertion(e, t, n);
}
onWordBoundaryAssertion(e, t, n, r) {
this._options.onWordBoundaryAssertion && this._options.onWordBoundaryAssertion(e, t, n, r);
}
onAnyCharacterSet(e, t, n) {
this._options.onAnyCharacterSet && this._options.onAnyCharacterSet(e, t, n);
}
onEscapeCharacterSet(e, t, n, r) {
this._options.onEscapeCharacterSet && this._options.onEscapeCharacterSet(e, t, n, r);
}
onUnicodePropertyCharacterSet(e, t, n, r, i, o) {
this._options.onUnicodePropertyCharacterSet && this._options.onUnicodePropertyCharacterSet(e, t, n, r, i, o);
}
onCharacter(e, t, n) {
this._options.onCharacter && this._options.onCharacter(e, t, n);
}
onBackreference(e, t, n) {
this._options.onBackreference && this._options.onBackreference(e, t, n);
}
onCharacterClassEnter(e, t) {
this._options.onCharacterClassEnter && this._options.onCharacterClassEnter(e, t);
}
onCharacterClassLeave(e, t, n) {
this._options.onCharacterClassLeave && this._options.onCharacterClassLeave(e, t, n);
}
onCharacterClassRange(e, t, n, r) {
this._options.onCharacterClassRange && this._options.onCharacterClassRange(e, t, n, r);
}
get source() {
return this._reader.source;
}
get index() {
return this._reader.index;
}
get currentCodePoint() {
return this._reader.currentCodePoint;
}
get nextCodePoint() {
return this._reader.nextCodePoint;
}
get nextCodePoint2() {
return this._reader.nextCodePoint2;
}
get nextCodePoint3() {
return this._reader.nextCodePoint3;
}
reset(e, t, n) {
this._reader.reset(e, t, n, this._uFlag);
}
rewind(e) {
this._reader.rewind(e);
}
advance() {
this._reader.advance();
}
eat(e) {
return this._reader.eat(e);
}
eat2(e, t) {
return this._reader.eat2(e, t);
}
eat3(e, t, n) {
return this._reader.eat3(e, t, n);
}
raise(e) {
throw new i.RegExpSyntaxError(this.source, this._uFlag, this.index, e);
}
eatRegExpBody() {
const e = this.index;
let t = !1, n = !1;
for (;;) {
const r = this.currentCodePoint;
if (-1 === r || o.isLineTerminator(r)) {
const e = t ? "character class" : "regular expression";
this.raise(`Unterminated ${e}`);
}
if (n) n = !1; else if (r === o.ReverseSolidus) n = !0; else if (r === o.LeftSquareBracket) t = !0; else if (r === o.RightSquareBracket) t = !1; else if (r === o.Solidus && !t || r === o.Asterisk && this.index === e) break;
this.advance();
}
return this.index !== e;
}
pattern() {
const e = this.index;
this._numCapturingParens = this.countCapturingParens(), this._groupNames.clear(), 
this._backreferenceNames.clear(), this.onPatternEnter(e), this.disjunction();
const t = this.currentCodePoint;
if (-1 !== this.currentCodePoint) {
t === o.RightParenthesis && this.raise("Unmatched ')'"), t !== o.RightSquareBracket && t !== o.RightCurlyBracket || this.raise("Lone quantifier brackets");
const e = String.fromCodePoint(t);
this.raise(`Unexpected character '${e}'`);
}
this._backreferenceNames.forEach(e => {
this._groupNames.has(e) || this.raise("Invalid named capture referenced");
}), this.onPatternLeave(e, this.index);
}
countCapturingParens() {
const e = this.index;
let t = !1, n = !1, r = 0, i = 0;
for (;-1 !== (i = this.currentCodePoint); ) n ? n = !1 : i === o.ReverseSolidus ? n = !0 : i === o.LeftSquareBracket ? t = !0 : i === o.RightSquareBracket ? t = !1 : i !== o.LeftParenthesis || t || this.nextCodePoint === o.QuestionMark && (this.nextCodePoint2 !== o.LessThanSign || this.nextCodePoint3 === o.EqualsSign || this.nextCodePoint3 === o.ExclamationMark) || (r += 1), 
this.advance();
return this.rewind(e), r;
}
disjunction() {
const e = this.index;
let t = 0;
for (this.onDisjunctionEnter(e), this.alternative(t++); this.eat(o.VerticalLine); ) this.alternative(t++);
this.eatQuantifier(!0) && this.raise("Nothing to repeat"), this.eat(o.LeftCurlyBracket) && this.raise("Lone quantifier brackets"), 
this.onDisjunctionLeave(e, this.index);
}
alternative(e) {
const t = this.index;
for (this.onAlternativeEnter(t, e); -1 !== this.currentCodePoint && this.eatTerm(); ) ;
this.onAlternativeLeave(t, this.index, e);
}
eatTerm() {
return this.eatAssertion() ? (this._lastAssertionIsQuantifiable && this.eatQuantifier(), 
!0) : !(this.strict ? !this.eatAtom() : !this.eatExtendedAtom()) && (this.eatQuantifier(), 
!0);
}
eatAssertion() {
const e = this.index;
if (this._lastAssertionIsQuantifiable = !1, this.eat(o.CircumflexAccent)) return this.onEdgeAssertion(e, this.index, "start"), 
!0;
if (this.eat(o.DollarSign)) return this.onEdgeAssertion(e, this.index, "end"), !0;
if (this.eat2(o.ReverseSolidus, o.LatinCapitalLetterB)) return this.onWordBoundaryAssertion(e, this.index, "word", !0), 
!0;
if (this.eat2(o.ReverseSolidus, o.LatinSmallLetterB)) return this.onWordBoundaryAssertion(e, this.index, "word", !1), 
!0;
if (this.eat2(o.LeftParenthesis, o.QuestionMark)) {
const t = this.ecmaVersion >= 2018 && this.eat(o.LessThanSign);
let n = !1;
if (this.eat(o.EqualsSign) || (n = this.eat(o.ExclamationMark))) {
const r = t ? "lookbehind" : "lookahead";
return this.onLookaroundAssertionEnter(e, r, n), this.disjunction(), this.eat(o.RightParenthesis) || this.raise("Unterminated group"), 
this._lastAssertionIsQuantifiable = !t && !this.strict, this.onLookaroundAssertionLeave(e, this.index, r, n), 
!0;
}
this.rewind(e);
}
return !1;
}
eatQuantifier(e = !1) {
const t = this.index;
let n = 0, r = 0, i = !1;
if (this.eat(o.Asterisk)) n = 0, r = Number.POSITIVE_INFINITY; else if (this.eat(o.PlusSign)) n = 1, 
r = Number.POSITIVE_INFINITY; else if (this.eat(o.QuestionMark)) n = 0, r = 1; else {
if (!this.eatBracedQuantifier(e)) return !1;
n = this._lastMinValue, r = this._lastMaxValue;
}
return i = !this.eat(o.QuestionMark), e || this.onQuantifier(t, this.index, n, r, i), 
!0;
}
eatBracedQuantifier(e) {
const t = this.index;
if (this.eat(o.LeftCurlyBracket)) {
if (this._lastMinValue = 0, this._lastMaxValue = Number.POSITIVE_INFINITY, this.eatDecimalDigits() && (this._lastMinValue = this._lastMaxValue = this._lastIntValue, 
this.eat(o.Comma) && (this._lastMaxValue = this.eatDecimalDigits() ? this._lastIntValue : Number.POSITIVE_INFINITY), 
this.eat(o.RightCurlyBracket))) return !e && this._lastMaxValue < this._lastMinValue && this.raise("numbers out of order in {} quantifier"), 
!0;
!e && this.strict && this.raise("Incomplete quantifier"), this.rewind(t);
}
return !1;
}
eatAtom() {
return this.eatPatternCharacter() || this.eatDot() || this.eatReverseSolidusAtomEscape() || this.eatCharacterClass() || this.eatUncapturingGroup() || this.eatCapturingGroup();
}
eatDot() {
return !!this.eat(o.FullStop) && (this.onAnyCharacterSet(this.index - 1, this.index, "any"), 
!0);
}
eatReverseSolidusAtomEscape() {
const e = this.index;
if (this.eat(o.ReverseSolidus)) {
if (this.eatAtomEscape()) return !0;
this.rewind(e);
}
return !1;
}
eatUncapturingGroup() {
const e = this.index;
return !!this.eat3(o.LeftParenthesis, o.QuestionMark, o.Colon) && (this.onGroupEnter(e), 
this.disjunction(), this.eat(o.RightParenthesis) || this.raise("Unterminated group"), 
this.onGroupLeave(e, this.index), !0);
}
eatCapturingGroup() {
const e = this.index;
if (this.eat(o.LeftParenthesis)) {
this._lastStrValue = "", this.ecmaVersion >= 2018 ? this.groupSpecifier() : this.currentCodePoint === o.QuestionMark && this.raise("Invalid group");
const t = this._lastStrValue || null;
return this.onCapturingGroupEnter(e, t), this.disjunction(), this.eat(o.RightParenthesis) || this.raise("Unterminated group"), 
this.onCapturingGroupLeave(e, this.index, t), !0;
}
return !1;
}
eatExtendedAtom() {
return this.eatDot() || this.eatReverseSolidusAtomEscape() || this.eatCharacterClass() || this.eatUncapturingGroup() || this.eatCapturingGroup() || this.eatInvalidBracedQuantifier() || this.eatExtendedPatternCharacter();
}
eatInvalidBracedQuantifier() {
return this.eatBracedQuantifier(!0) && this.raise("Nothing to repeat"), !1;
}
eatSyntaxCharacter() {
return !!a(this.currentCodePoint) && (this._lastIntValue = this.currentCodePoint, 
this.advance(), !0);
}
eatPatternCharacter() {
const e = this.index, t = this.currentCodePoint;
return -1 !== t && !a(t) && (this.advance(), this.onCharacter(e, this.index, t), 
!0);
}
eatExtendedPatternCharacter() {
const e = this.index, t = this.currentCodePoint;
return -1 !== t && t !== o.CircumflexAccent && t !== o.DollarSign && t !== o.FullStop && t !== o.Asterisk && t !== o.PlusSign && t !== o.QuestionMark && t !== o.LeftParenthesis && t !== o.RightParenthesis && t !== o.LeftSquareBracket && t !== o.VerticalLine && (this.advance(), 
this.onCharacter(e, this.index, t), !0);
}
groupSpecifier() {
if (this._lastStrValue = "", this.eat(o.QuestionMark)) {
if (this.eatGroupName()) {
if (!this._groupNames.has(this._lastStrValue)) return void this._groupNames.add(this._lastStrValue);
this.raise("Duplicate capture group name");
}
this.raise("Invalid group");
}
}
eatGroupName() {
if (this._lastStrValue = "", this.eat(o.LessThanSign)) {
if (this.eatRegExpIdentifierName() && this.eat(o.GreaterThanSign)) return !0;
this.raise("Invalid capture group name");
}
return !1;
}
eatRegExpIdentifierName() {
if (this._lastStrValue = "", this.eatRegExpIdentifierStart()) {
for (this._lastStrValue += String.fromCodePoint(this._lastIntValue); this.eatRegExpIdentifierPart(); ) this._lastStrValue += String.fromCodePoint(this._lastIntValue);
return !0;
}
return !1;
}
eatRegExpIdentifierStart() {
const e = this.index;
let t = this.currentCodePoint;
return this.advance(), t === o.ReverseSolidus && this.eatRegExpUnicodeEscapeSequence() && (t = this._lastIntValue), 
s(t) ? (this._lastIntValue = t, !0) : (this.index !== e && this.rewind(e), !1);
}
eatRegExpIdentifierPart() {
const e = this.index;
let t = this.currentCodePoint;
return this.advance(), t === o.ReverseSolidus && this.eatRegExpUnicodeEscapeSequence() && (t = this._lastIntValue), 
u(t) ? (this._lastIntValue = t, !0) : (this.index !== e && this.rewind(e), !1);
}
eatAtomEscape() {
return !!(this.eatBackreference() || this.eatCharacterClassEscape() || this.eatCharacterEscape() || this._nFlag && this.eatKGroupName()) || ((this.strict || this._uFlag) && this.raise("Invalid escape"), 
!1);
}
eatBackreference() {
const e = this.index;
if (this.eatDecimalEscape()) {
const t = this._lastIntValue;
if (t <= this._numCapturingParens) return this.onBackreference(e - 1, this.index, t), 
!0;
this.strict && this.raise("Invalid escape"), this.rewind(e);
}
return !1;
}
eatKGroupName() {
const e = this.index;
if (this.eat(o.LatinSmallLetterK)) {
if (this.eatGroupName()) {
const t = this._lastStrValue;
return this._backreferenceNames.add(t), this.onBackreference(e - 1, this.index, t), 
!0;
}
this.raise("Invalid named reference");
}
return !1;
}
eatCharacterEscape() {
const e = this.index;
return !!(this.eatControlEscape() || this.eatCControlLetter() || this.eatZero() || this.eatHexEscapeSequence() || this.eatRegExpUnicodeEscapeSequence() || !this.strict && this.eatLegacyOctalEscapeSequence() || this.eatIdentityEscape()) && (this.onCharacter(e - 1, this.index, this._lastIntValue), 
!0);
}
eatCControlLetter() {
const e = this.index;
if (this.eat(o.LatinSmallLetterC)) {
if (this.eatControlLetter()) return !0;
this.rewind(e);
}
return !1;
}
eatZero() {
return this.currentCodePoint === o.DigitZero && !o.isDecimalDigit(this.nextCodePoint) && (this._lastIntValue = 0, 
this.advance(), !0);
}
eatControlEscape() {
return this.eat(o.LatinSmallLetterT) ? (this._lastIntValue = o.CharacterTabulation, 
!0) : this.eat(o.LatinSmallLetterN) ? (this._lastIntValue = o.LineFeed, !0) : this.eat(o.LatinSmallLetterV) ? (this._lastIntValue = o.LineTabulation, 
!0) : this.eat(o.LatinSmallLetterF) ? (this._lastIntValue = o.FormFeed, !0) : !!this.eat(o.LatinSmallLetterR) && (this._lastIntValue = o.CarriageReturn, 
!0);
}
eatControlLetter() {
const e = this.currentCodePoint;
return !!o.isLatinLetter(e) && (this.advance(), this._lastIntValue = e % 32, !0);
}
eatRegExpUnicodeEscapeSequence() {
const e = this.index;
if (this.eat(o.LatinSmallLetterU)) {
if (this.eatFixedHexDigits(4)) {
const e = this._lastIntValue;
if (this._uFlag && e >= 55296 && e <= 56319) {
const t = this.index;
if (this.eat(o.ReverseSolidus) && this.eat(o.LatinSmallLetterU) && this.eatFixedHexDigits(4)) {
const t = this._lastIntValue;
if (t >= 56320 && t <= 57343) return this._lastIntValue = 1024 * (e - 55296) + (t - 56320) + 65536, 
!0;
}
this.rewind(t), this._lastIntValue = e;
}
return !0;
}
if (this._uFlag && this.eat(o.LeftCurlyBracket) && this.eatHexDigits() && this.eat(o.RightCurlyBracket) && o.isValidUnicode(this._lastIntValue)) return !0;
(this.strict || this._uFlag) && this.raise("Invalid unicode escape"), this.rewind(e);
}
return !1;
}
eatIdentityEscape() {
return this._uFlag ? !!this.eatSyntaxCharacter() || !!this.eat(o.Solidus) && (this._lastIntValue = o.Solidus, 
!0) : !!this.isValidIdentityEscape(this.currentCodePoint) && (this._lastIntValue = this.currentCodePoint, 
this.advance(), !0);
}
isValidIdentityEscape(e) {
return !(-1 === e || (this.strict ? o.isIdContinue(e) : e === o.LatinSmallLetterC || this._nFlag && e === o.LatinSmallLetterK));
}
eatDecimalEscape() {
this._lastIntValue = 0;
let e = this.currentCodePoint;
if (e >= o.DigitOne && e <= o.DigitNine) {
do {
this._lastIntValue = 10 * this._lastIntValue + (e - o.DigitZero), this.advance();
} while ((e = this.currentCodePoint) >= o.DigitZero && e <= o.DigitNine);
return !0;
}
return !1;
}
eatCharacterClassEscape() {
const e = this.index;
if (this.eat(o.LatinSmallLetterD)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "digit", !1), 
!0;
if (this.eat(o.LatinCapitalLetterD)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "digit", !0), 
!0;
if (this.eat(o.LatinSmallLetterS)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "space", !1), 
!0;
if (this.eat(o.LatinCapitalLetterS)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "space", !0), 
!0;
if (this.eat(o.LatinSmallLetterW)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "word", !1), 
!0;
if (this.eat(o.LatinCapitalLetterW)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "word", !0), 
!0;
let t = !1;
if (this._uFlag && this.ecmaVersion >= 2018 && (this.eat(o.LatinSmallLetterP) || (t = this.eat(o.LatinCapitalLetterP)))) {
if (this._lastIntValue = -1, this.eat(o.LeftCurlyBracket) && this.eatUnicodePropertyValueExpression() && this.eat(o.RightCurlyBracket)) return this.onUnicodePropertyCharacterSet(e - 1, this.index, "property", this._lastKeyValue, this._lastValValue || null, t), 
!0;
this.raise("Invalid property name");
}
return !1;
}
eatUnicodePropertyValueExpression() {
const e = this.index;
if (this.eatUnicodePropertyName() && this.eat(o.EqualsSign) && (this._lastKeyValue = this._lastStrValue, 
this.eatUnicodePropertyValue())) {
if (this._lastValValue = this._lastStrValue, f(this._lastKeyValue, this._lastValValue)) return !0;
this.raise("Invalid property name");
}
if (this.rewind(e), this.eatLoneUnicodePropertyNameOrValue()) {
const e = this._lastStrValue;
if (f("General_Category", e)) return this._lastKeyValue = "General_Category", this._lastValValue = e, 
!0;
if (p(e)) return this._lastKeyValue = e, this._lastValValue = "", !0;
this.raise("Invalid property name");
}
return !1;
}
eatUnicodePropertyName() {
for (this._lastStrValue = ""; l(this.currentCodePoint); ) this._lastStrValue += String.fromCodePoint(this.currentCodePoint), 
this.advance();
return "" !== this._lastStrValue;
}
eatUnicodePropertyValue() {
for (this._lastStrValue = ""; c(this.currentCodePoint); ) this._lastStrValue += String.fromCodePoint(this.currentCodePoint), 
this.advance();
return "" !== this._lastStrValue;
}
eatLoneUnicodePropertyNameOrValue() {
return this.eatUnicodePropertyValue();
}
eatCharacterClass() {
const e = this.index;
if (this.eat(o.LeftSquareBracket)) {
const t = this.eat(o.CircumflexAccent);
return this.onCharacterClassEnter(e, t), this.classRanges(), this.eat(o.RightSquareBracket) || this.raise("Unterminated character class"), 
this.onCharacterClassLeave(e, this.index, t), !0;
}
return !1;
}
classRanges() {
let e = this.index;
for (;this.eatClassAtom(); ) {
const t = this._lastIntValue, n = this.index;
if (this.eat(o.HyphenMinus) && (this.onCharacter(n, this.index, o.HyphenMinus), 
this.eatClassAtom())) {
const n = this._lastIntValue;
-1 === t || -1 === n ? this.strict && this.raise("Invalid character class") : !this._options.disableChkCharacterClassRange && t > n ? this.raise("Range out of order in character class") : this.onCharacterClassRange(e, this.index, t, n);
}
e = this.index;
}
}
eatClassAtom() {
const e = this.index;
if (this.eat(o.ReverseSolidus)) {
if (this.eatClassEscape()) return !0;
this._uFlag && this.raise("Invalid escape"), this.rewind(e);
}
const t = this.currentCodePoint;
return -1 !== t && t !== o.RightSquareBracket && (this.advance(), this._lastIntValue = t, 
this.onCharacter(e, this.index, t), !0);
}
eatClassEscape() {
const e = this.index;
if (this.eat(o.LatinSmallLetterB)) return this._lastIntValue = o.Backspace, this.onCharacter(e - 1, this.index, o.Backspace), 
!0;
if (this._uFlag && this.eat(o.HyphenMinus)) return this._lastIntValue = o.HyphenMinus, 
this.onCharacter(e - 1, this.index, o.HyphenMinus), !0;
if (!this._uFlag && this.eat(o.LatinSmallLetterC)) {
if (this.eatClassControlLetter()) return this.onCharacter(e - 1, this.index, this._lastIntValue), 
!0;
this.rewind(e);
}
return this.eatCharacterClassEscape() || this.eatCharacterEscape();
}
eatClassControlLetter() {
const e = this.currentCodePoint;
return !(!o.isDecimalDigit(e) && e !== o.LowLine || (this.advance(), this._lastIntValue = e % 32, 
0));
}
eatHexEscapeSequence() {
const e = this.index;
if (this.eat(o.LatinSmallLetterX)) {
if (this.eatFixedHexDigits(2)) return !0;
this._uFlag && this.raise("Invalid escape"), this.rewind(e);
}
return !1;
}
eatDecimalDigits() {
const e = this.index;
for (this._lastIntValue = 0; o.isDecimalDigit(this.currentCodePoint); ) this._lastIntValue = 10 * this._lastIntValue + o.digitToInt(this.currentCodePoint), 
this.advance();
return this.index !== e;
}
eatHexDigits() {
const e = this.index;
for (this._lastIntValue = 0; o.isHexDigit(this.currentCodePoint); ) this._lastIntValue = 16 * this._lastIntValue + o.digitToInt(this.currentCodePoint), 
this.advance();
return this.index !== e;
}
eatLegacyOctalEscapeSequence() {
if (this.eatOctalDigit()) {
const e = this._lastIntValue;
if (this.eatOctalDigit()) {
const t = this._lastIntValue;
e <= 3 && this.eatOctalDigit() ? this._lastIntValue = 64 * e + 8 * t + this._lastIntValue : this._lastIntValue = 8 * e + t;
} else this._lastIntValue = e;
return !0;
}
return !1;
}
eatOctalDigit() {
const e = this.currentCodePoint;
return o.isOctalDigit(e) ? (this.advance(), this._lastIntValue = e - o.DigitZero, 
!0) : (this._lastIntValue = 0, !1);
}
eatFixedHexDigits(e) {
const t = this.index;
this._lastIntValue = 0;
for (let n = 0; n < e; ++n) {
const e = this.currentCodePoint;
if (!o.isHexDigit(e)) return this.rewind(t), !1;
this._lastIntValue = 16 * this._lastIntValue + o.digitToInt(e), this.advance();
}
return !0;
}
}
t.RegExpValidator = RegExpValidator;
}, function(e, t, n) {
"use strict";
var r;
Object.defineProperty(t, "__esModule", {
value: !0
}), function(e) {
e.multiline = "m", e.m = "m", e.global = "g", e.g = "g", e.ignoreCase = "i", e.i = "i", 
e.sticky = "y", e.y = "y", e.unicode = "u", e.u = "u", e.dotAll = "s", e.s = "s", 
e.freeSpacing = "x", e.x = "x", e.n = "n";
}(r = t.FlagsName || (t.FlagsName = {})), Object.keys(r).forEach(function(e) {
r[r[e]] = r[e];
}), t.FlagsPattern = {
s: [ [ "^.$", "\n", !0 ] ]
}, t.default = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(27), i = n(17), o = n(125), a = n(126), s = n(53);
var u;
function l(e, n, r = t.PatternTest) {
return !t.PatternTest.hasOwnProperty(e) && t.UNICODE_NAME_ALIAS_ALL[e] && t.PatternTest.hasOwnProperty(t.UNICODE_NAME_ALIAS_ALL[e]) && (e = t.UNICODE_NAME_ALIAS_ALL[e]), 
t._testUnicode(e, n, r);
}
function c(e = RegExp, n = t.PatternTest) {
return Object.keys(t.UNICODE_ALL).reduce(function(t, r) {
return t[r] = l(r, e, n), t;
}, {});
}
function f(e, n) {
let r = t.KEY_PREFIX;
return n && (r = t.KEY_PREFIX_NEGATION), i._wrapToRegexName(e, r, t.KEY_SUFFIX);
}
t.KEY_PREFIX = "\\p{", t.KEY_PREFIX_NEGATION = "\\P{", t.KEY_SUFFIX = "}", t.UNICODE = {
White_Space: !1,
Letter: !1,
Lower: !1,
Upper: !1,
Alpha: !1,
Digit: !1,
Alnum: !1,
Punct: !1,
Graph: !1,
Blank: !1,
Cntrl: !1,
XDigit: !1,
Space: !1,
Decimal_Digit_Number: !1,
Ideographic: !1,
Unified_Ideograph: !1
}, t.UNICODE_ALL = Object.assign({}, o.default, a.default, s.default.$LONE, s.default.General_Category, t.UNICODE), 
function(e) {
e.Quotation_Mark = "QMark", e.Pattern_Syntax = "Pat_Syn", e.Ideographic = "Ideo";
}(u = t.UNICODE_NAME_ALIAS || (t.UNICODE_NAME_ALIAS = {})), Object.keys(u).forEach(function(e) {
let t = u[e];
t && !u[t] && (u[t] = e);
}), t.UNICODE_NAME_ALIAS_ALL = Object.assign({}, o.NAME_ALIAS, u, o.NAME_ALIAS), 
t.PatternTest = {
White_Space: [ [ "^\\p{White_Space}+$", "u", "\t \n\r", !0, "test" ] ],
Letter: [ [ "^\\p{Letter}+$", "u", "πüé", !0, "test" ], [ "^\\p{L}+$", "u", "πüé", !0, "test" ], [ "^\\P{L}+$", "u", "πüé", !1, "test" ], [ "^\\P{L}+$", "u", "\n", !0, "test" ] ],
Surrogate: [ [ "^\\p{Surrogate}+$", "u", "\ud83d", !0, "test" ], [ "^\\p{Surrogate}+$", "u", "\ude00", !0, "test" ] ],
Number: [ [ "^\\p{Number}+$", "u", "09", !0, "test" ], [ "^\\p{Number}+$", "u", "a", !1, "test" ] ],
Nd: [ [ "^\\p{Nd}+$", "u", "09", !0, "test" ], [ "^\\p{Decimal_Number}+", "u", "𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼", !0, "test" ] ],
Letter_Number: [ [ "^\\p{Letter_Number}+$", "u", "09", !1, "test" ], [ "^\\P{Letter_Number}+$", "u", "09", !0, "test" ] ],
Other_Number: [ [ "^\\p{Other_Number}+$", "u", "09", !1, "test" ], [ "^\\P{Other_Number}+$", "u", "09", !0, "test" ] ],
Control: [ [ "^\\p{Control}+$", "u", "", !0, "test" ], [ "^\\p{Control}+$", "u", "a", !1, "test" ] ],
Any: [ [ "^\\p{Any}+$", "u", "1", !0, "test" ] ],
ASCII: [ [ "^\\p{ASCII}+$", "u", "\0", !0, "test" ], [ "^\\p{ASCII}+$", "u", "", !0, "test" ], [ "^\\p{ASCII}+$", "u", "", !1, "test" ] ],
Lower: [ [ "^\\p{Lower}+$", "u", "az", !0, "test" ], [ "^\\p{Lower}+$", "u", "aZ", !1, "test" ] ],
Upper: [ [ "^\\p{Upper}+$", "u", "AZ", !0, "test" ], [ "^\\p{Upper}+$", "u", "aZ", !1, "test" ] ],
Alpha: [ [ "^\\p{Alpha}+$", "u", "AZaz", !0, "test" ], [ "^\\p{Alpha}+$", "u", "-", !1, "test" ], [ "^\\p{Alpha}+$", "u", "0", !1, "test" ] ],
Digit: [ [ "^\\p{Digit}+$", "u", "09", !0, "test" ] ],
Alnum: [ [ "^\\p{Alnum}+$", "u", "azAZ09", !0, "test" ] ],
Punct: [ [ "^\\p{Punct}+$", "u", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", !0, "test" ], [ "^\\p{Punct}+$", "u", "az", !1, "test" ] ],
Graph: [ [ "^\\p{Graph}+$", "u", "azAZ09@", !0, "test" ] ],
Blank: [ [ "^\\p{Blank}+$", "u", "\t", !0, "test" ] ],
Cntrl: [ [ "^\\p{Cntrl}+$", "u", "\0", !0, "test" ] ],
XDigit: [ [ "^\\p{XDigit}+$", "u", "09afAF", !0, "test" ] ],
Space: [ [ "^\\p{Space}+$", "u", " ", !0, "test" ] ],
P: [ [ "^\\p{P}+$", "u", "az", !1, "test" ], [ "^\\p{P}+$", "u", "-", !0, "test" ] ],
Punctuation: [ [ "^\\p{Punctuation}+$", "u", "az", !1, "test" ], [ "^\\p{Punctuation}+$", "u", "-", !0, "test" ] ],
Dash_Punctuation: [ [ "^\\p{Dash_Punctuation}+$", "u", "-", !0, "test" ] ],
Pc: [ [ "^\\p{Pc}+$", "u", "_", !0, "test" ] ],
Close_Punctuation: [ [ "^\\p{Close_Punctuation}+$", "u", ")", !0, "test" ] ],
Other_Punctuation: [ [ "^\\p{Other_Punctuation}+$", "u", "!", !0, "test" ] ],
Open_Punctuation: [ [ "^\\p{Open_Punctuation}+$", "u", "(", !0, "test" ] ],
Decimal_Digit_Number: [ [ "^\\p{Decimal_Digit_Number}+$", "u", "09", !0, "test" ] ],
Lowercase_Letter: [ [ "^\\p{Lowercase_Letter}+$", "u", "az", !0, "test" ], [ "^\\p{Lowercase_Letter}+$", "u", "aZ", !1, "test" ], [ "^\\p{Lowercase_Letter}+$", "u", "летачко", !0, "test" ] ],
Uppercase_Letter: [ [ "^\\p{Uppercase_Letter}+$", "u", "AZ", !0, "test" ], [ "^\\p{Uppercase_Letter}+$", "u", "aZ", !1, "test" ] ],
Line_Separator: [ [ "^\\p{Line_Separator}+$", "u", "\u2028", !0, "test" ], [ "^\\p{Line_Separator}+$", "u", "aZ", !1, "test" ] ],
Paragraph_Separator: [ [ "^\\p{Paragraph_Separator}+$", "u", "\u2029", !0, "test" ], [ "^\\p{Paragraph_Separator}+$", "u", "aZ", !1, "test" ] ],
Separator: [ [ "^\\p{Separator}+$", "u", " 　", !0, "test" ], [ "^\\p{Separator}+$", "u", "       　", !0, "test" ] ],
Space_Separator: [ [ "^\\p{Space_Separator}+$", "u", " 　", !0, "test" ], [ "^\\p{Space_Separator}+$", "u", "       　", !0, "test" ] ],
Ideographic: [ [ "^\\p{Ideographic}+", "u", "一", !0, "test" ], [ "^\\p{Ideographic}+", "u", "中文字符", !0, "test" ], [ "^\\p{Ideographic}+", "u", "〆", !0, "test" ], [ "^\\p{Ideographic}+", "u", "カタカナ", !1, "test" ] ],
Unified_Ideograph: [ [ "^\\p{Unified_Ideograph}+", "u", "㐀", !0, "test" ], [ "^\\p{Unified_Ideograph}+", "u", "中文字符", !0, "test" ], [ "^\\p{Unified_Ideograph}+", "u", "〆", !1, "test" ], [ "^\\p{Unified_Ideograph}+", "u", "カタカナ", !1, "test" ] ],
Mark: [ [ "^\\p{Mark}+", "u", "⃓゙", !0, "test" ] ],
Alphabetic: [ [ "^\\p{Alphabetic}+", "u", "aZ", !0, "test" ], [ "^\\p{Alphabetic}+", "u", "ማንዣበቢያ", !0, "test" ], [ "^\\p{Alphabetic}+", "u", "আমার", !0, "test" ], [ "^\\p{Alphabetic}+", "u", "ხომალდი", !0, "test" ], [ "^\\p{Alphabetic}+", "u", "летачко", !0, "test" ], [ "^\\p{Alphabetic}+", "u", "cánh", !0, "test" ], [ "^\\p{Alphabetic}+", "u", "中文字符", !0, "test" ], [ "^\\p{Alphabetic}+", "u", ":", !1, "test" ], [ "^\\p{Alphabetic}+", "u", "09", !1, "test" ] ],
Symbol: [ [ "^\\p{Symbol}+", "u", "$", !0, "test" ] ],
Currency_Symbol: [ [ "^\\p{Currency_Symbol}+", "u", "$", !0, "test" ] ],
Modifier_Symbol: [ [ "^\\p{Modifier_Symbol}+", "u", "^", !0, "test" ], [ "^\\p{Modifier_Symbol}+", "u", "🏽", !0, "test" ] ],
Math_Symbol: [ [ "^\\p{Math_Symbol}+", "u", "+", !0, "test" ] ],
Cased_Letter: [ [ "^\\p{Cased_Letter}+", "u", "летачко", !0, "test" ] ],
Other_Letter: [ [ "^\\p{Other_Letter}+", "u", "ማንዣበቢያ", !0, "test" ] ],
Other: [ [ "^\\p{Other}+", "u", "\n", !0, "test" ], [ "^\\p{Other}+", "u", "\n", !0, "test" ] ],
Enclosing_Mark: [ [ "^\\p{Enclosing_Mark}+", "u", "⃝", !0, "test" ], [ "^\\p{Enclosing_Mark}+", "u", "⃝", !0, "test" ] ],
Nonspacing_Mark: [ [ "^\\p{Nonspacing_Mark}+", "u", "⃓", !0, "test" ], [ "^\\p{Nonspacing_Mark}+", "u", "⃓", !0, "test" ] ],
Combining_Mark: [ [ "^\\p{Combining_Mark}+", "u", "⃓", !0, "test" ], [ "^\\p{Combining_Mark}+", "u", "⃓", !0, "test" ] ],
Initial_Punctuation: [ [ "^\\p{Initial_Punctuation}+", "u", "‹", !0, "test" ] ],
Other_Symbol: [ [ "^\\p{Other_Symbol}+", "u", "✄", !0, "test" ] ],
Final_Punctuation: [ [ "^\\p{Final_Punctuation}+", "u", "»", !0, "test" ], [ "^\\p{Final_Punctuation}+", "u", "»", !0, "test" ] ],
punct: [ [ "^\\p{punct}+", "u", "!", !0, "test" ] ],
Quotation_Mark: [ [ "^\\p{Quotation_Mark}+", "u", '"', !0, "test" ] ],
Emoji: [ [ "^\\p{Emoji}+", "u", "👧👧👧🏻", !0, "test" ] ],
Emoji_Component: [ [ "^\\p{Emoji_Component}+", "u", "🏽", !0, "test" ] ],
Emoji_Modifier: [ [ "^\\p{Emoji_Modifier}+", "u", "🏽", !0, "test" ] ],
Emoji_Presentation: [ [ "^\\p{Emoji_Presentation}+", "u", "👧👧👧🏻", !0, "test" ] ]
}, t._testUnicode = r._createFnTestPattern(t.PatternTest), t.testUnicode = l, t.testUnicodeAll = c, 
t.wrapToRegexName = f;
const p = n(51);
t.default = p;
}, function(e, t, n) {
(function(e) {
var r = Object.getOwnPropertyDescriptors || function e(t) {
for (var n = Object.keys(t), r = {}, i = 0; i < n.length; i++) r[n[i]] = Object.getOwnPropertyDescriptor(t, n[i]);
return r;
}, i = /%[sdj%]/g;
t.format = function(e) {
if (!E(e)) {
for (var t = [], n = 0; n < arguments.length; n++) t.push(s(arguments[n]));
return t.join(" ");
}
for (var n = 1, r = arguments, o = r.length, a = String(e).replace(i, function(e) {
if ("%%" === e) return "%";
if (n >= o) return e;
switch (e) {
case "%s":
return String(r[n++]);

case "%d":
return Number(r[n++]);

case "%j":
try {
return JSON.stringify(r[n++]);
} catch (e) {
return "[Circular]";
}

default:
return e;
}
}), u = r[n]; n < o; u = r[++n]) D(u) || !w(u) ? a += " " + u : a += " " + s(u);
return a;
}, t.deprecate = function(n, r) {
if (void 0 !== e && !0 === e.noDeprecation) return n;
if (void 0 === e) return function() {
return t.deprecate(n, r).apply(this, arguments);
};
var i = !1;
function o() {
if (!i) {
if (e.throwDeprecation) throw new Error(r);
e.traceDeprecation ? console.trace(r) : console.error(r), i = !0;
}
return n.apply(this, arguments);
}
return o;
};
var o = {}, a;
function s(e, n) {
var r = {
seen: [],
stylize: l
};
return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), 
y(n) ? r.showHidden = n : n && t._extend(r, n), S(r.showHidden) && (r.showHidden = !1), 
S(r.depth) && (r.depth = 2), S(r.colors) && (r.colors = !1), S(r.customInspect) && (r.customInspect = !0), 
r.colors && (r.stylize = u), f(r, e, r.depth);
}
function u(e, t) {
var n = s.styles[t];
return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e;
}
function l(e, t) {
return e;
}
function c(e) {
var t = {};
return e.forEach(function(e, n) {
t[e] = !0;
}), t;
}
function f(e, n, r) {
if (e.customInspect && n && P(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
var i = n.inspect(r, e);
return E(i) || (i = f(e, i, r)), i;
}
var o = p(e, n);
if (o) return o;
var a = Object.keys(n), s = c(a);
if (e.showHidden && (a = Object.getOwnPropertyNames(n)), L(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return h(n);
if (0 === a.length) {
if (P(n)) {
var u = n.name ? ": " + n.name : "";
return e.stylize("[Function" + u + "]", "special");
}
if (x(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
if (A(n)) return e.stylize(Date.prototype.toString.call(n), "date");
if (L(n)) return h(n);
}
var l = "", y = !1, D = [ "{", "}" ], b, v;
return m(n) && (y = !0, D = [ "[", "]" ]), P(n) && (l = " [Function" + (n.name ? ": " + n.name : "") + "]"), 
x(n) && (l = " " + RegExp.prototype.toString.call(n)), A(n) && (l = " " + Date.prototype.toUTCString.call(n)), 
L(n) && (l = " " + h(n)), 0 !== a.length || y && 0 != n.length ? r < 0 ? x(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), 
v = y ? d(e, n, r, s, a) : a.map(function(t) {
return g(e, n, r, s, t, y);
}), e.seen.pop(), _(v, l, D)) : D[0] + l + D[1];
}
function p(e, t) {
if (S(t)) return e.stylize("undefined", "undefined");
if (E(t)) {
var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
return e.stylize(n, "string");
}
return v(t) ? e.stylize("" + t, "number") : y(t) ? e.stylize("" + t, "boolean") : D(t) ? e.stylize("null", "null") : void 0;
}
function h(e) {
return "[" + Error.prototype.toString.call(e) + "]";
}
function d(e, t, n, r, i) {
for (var o = [], a = 0, s = t.length; a < s; ++a) M(t, String(a)) ? o.push(g(e, t, n, r, String(a), !0)) : o.push("");
return i.forEach(function(i) {
i.match(/^\d+$/) || o.push(g(e, t, n, r, i, !0));
}), o;
}
function g(e, t, n, r, i, o) {
var a, s, u;
if ((u = Object.getOwnPropertyDescriptor(t, i) || {
value: t[i]
}).get ? s = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (s = e.stylize("[Setter]", "special")), 
M(r, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(u.value) < 0 ? (s = D(n) ? f(e, u.value, null) : f(e, u.value, n - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map(function(e) {
return "  " + e;
}).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
return "   " + e;
}).join("\n")) : s = e.stylize("[Circular]", "special")), S(a)) {
if (o && i.match(/^\d+$/)) return s;
(a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), 
a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), 
a = e.stylize(a, "string"));
}
return a + ": " + s;
}
function _(e, t, n) {
var r = 0, i;
return e.reduce(function(e, t) {
return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
}, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
}
function m(e) {
return Array.isArray(e);
}
function y(e) {
return "boolean" == typeof e;
}
function D(e) {
return null === e;
}
function b(e) {
return null == e;
}
function v(e) {
return "number" == typeof e;
}
function E(e) {
return "string" == typeof e;
}
function C(e) {
return "symbol" == typeof e;
}
function S(e) {
return void 0 === e;
}
function x(e) {
return w(e) && "[object RegExp]" === I(e);
}
function w(e) {
return "object" == typeof e && null !== e;
}
function A(e) {
return w(e) && "[object Date]" === I(e);
}
function L(e) {
return w(e) && ("[object Error]" === I(e) || e instanceof Error);
}
function P(e) {
return "function" == typeof e;
}
function T(e) {
return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
}
function I(e) {
return Object.prototype.toString.call(e);
}
function j(e) {
return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
t.debuglog = function(n) {
if (S(a) && (a = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !o[n]) if (new RegExp("\\b" + n + "\\b", "i").test(a)) {
var r = e.pid;
o[n] = function() {
var e = t.format.apply(t, arguments);
console.error("%s %d: %s", n, r, e);
};
} else o[n] = function() {};
return o[n];
}, t.inspect = s, s.colors = {
bold: [ 1, 22 ],
italic: [ 3, 23 ],
underline: [ 4, 24 ],
inverse: [ 7, 27 ],
white: [ 37, 39 ],
grey: [ 90, 39 ],
black: [ 30, 39 ],
blue: [ 34, 39 ],
cyan: [ 36, 39 ],
green: [ 32, 39 ],
magenta: [ 35, 39 ],
red: [ 31, 39 ],
yellow: [ 33, 39 ]
}, s.styles = {
special: "cyan",
number: "yellow",
boolean: "yellow",
undefined: "grey",
null: "bold",
string: "green",
date: "magenta",
regexp: "red"
}, t.isArray = m, t.isBoolean = y, t.isNull = D, t.isNullOrUndefined = b, t.isNumber = v, 
t.isString = E, t.isSymbol = C, t.isUndefined = S, t.isRegExp = x, t.isObject = w, 
t.isDate = A, t.isError = L, t.isFunction = P, t.isPrimitive = T, t.isBuffer = n(122);
var F = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
function k() {
var e = new Date(), t = [ j(e.getHours()), j(e.getMinutes()), j(e.getSeconds()) ].join(":");
return [ e.getDate(), F[e.getMonth()], t ].join(" ");
}
function M(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
t.log = function() {
console.log("%s - %s", k(), t.format.apply(t, arguments));
}, t.inherits = n(123), t._extend = function(e, t) {
if (!t || !w(t)) return e;
for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
return e;
};
var O = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function R(e, t) {
if (!e) {
var n = new Error("Promise was rejected with a falsy value");
n.reason = e, e = n;
}
return t(e);
}
function N(t) {
if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
function n() {
for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
var i = n.pop();
if ("function" != typeof i) throw new TypeError("The last argument must be of type Function");
var o = this, a = function() {
return i.apply(o, arguments);
};
t.apply(this, n).then(function(t) {
e.nextTick(a, null, t);
}, function(t) {
e.nextTick(R, t, a);
});
}
return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, r(t)), 
n;
}
t.promisify = function e(t) {
if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
if (O && t[O]) {
var n;
if ("function" != typeof (n = t[O])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
return Object.defineProperty(n, O, {
value: n,
enumerable: !1,
writable: !1,
configurable: !0
}), n;
}
function n() {
for (var e, n, r = new Promise(function(t, r) {
e = t, n = r;
}), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
i.push(function(t, r) {
t ? n(t) : e(r);
});
try {
t.apply(this, i);
} catch (e) {
n(e);
}
return r;
}
return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), O && Object.defineProperty(n, O, {
value: n,
enumerable: !1,
writable: !1,
configurable: !0
}), Object.defineProperties(n, r(t));
}, t.promisify.custom = O, t.callbackify = N;
}).call(this, n(34));
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.$LONE = {
ASCII: !1,
ASCII_Hex_Digit: !1,
AHex: !1,
Alphabetic: !1,
Alpha: !1,
Any: !1,
Assigned: !1,
Bidi_Control: !1,
Bidi_C: !1,
Bidi_Mirrored: !1,
Bidi_M: !1,
Case_Ignorable: !1,
CI: !1,
Cased: !1,
Changes_When_Casefolded: !1,
CWCF: !1,
Changes_When_Casemapped: !1,
CWCM: !1,
Changes_When_Lowercased: !1,
CWL: !1,
Changes_When_NFKC_Casefolded: !1,
CWKCF: !1,
Changes_When_Titlecased: !1,
CWT: !1,
Changes_When_Uppercased: !1,
CWU: !1,
Dash: !1,
Default_Ignorable_Code_Point: !1,
DI: !1,
Deprecated: !1,
Dep: !1,
Diacritic: !1,
Dia: !1,
Emoji: !1,
Emoji_Component: !1,
Emoji_Modifier: !1,
Emoji_Modifier_Base: !1,
Emoji_Presentation: !1,
Extender: !1,
Ext: !1,
Grapheme_Base: !1,
Gr_Base: !1,
Grapheme_Extend: !1,
Gr_Ext: !1,
Hex_Digit: !1,
Hex: !1,
IDS_Binary_Operator: !1,
IDSB: !1,
IDS_Trinary_Operator: !1,
IDST: !1,
ID_Continue: !1,
IDC: !1,
ID_Start: !1,
IDS: !1,
Ideographic: !1,
Ideo: !1,
Join_Control: !1,
Join_C: !1,
Logical_Order_Exception: !1,
LOE: !1,
Lowercase: !1,
Lower: !1,
Math: !1,
Noncharacter_Code_Point: !1,
NChar: !1,
Pattern_Syntax: !1,
Pat_Syn: !1,
Pattern_White_Space: !1,
Pat_WS: !1,
Quotation_Mark: !1,
QMark: !1,
Radical: !1,
Regional_Indicator: !1,
RI: !1,
Sentence_Terminal: !1,
STerm: !1,
Soft_Dotted: !1,
SD: !1,
Terminal_Punctuation: !1,
Term: !1,
Unified_Ideograph: !1,
UIdeo: !1,
Uppercase: !1,
Upper: !1,
Variation_Selector: !1,
VS: !1,
White_Space: !1,
space: !1,
XID_Continue: !1,
XIDC: !1,
XID_Start: !1,
XIDS: !1
}, t.General_Category = {
Cased_Letter: !1,
LC: !1,
Close_Punctuation: !1,
Pe: !1,
Connector_Punctuation: !1,
Pc: !1,
Control: !1,
Cc: !1,
cntrl: !1,
Currency_Symbol: !1,
Sc: !1,
Dash_Punctuation: !1,
Pd: !1,
Decimal_Number: !1,
Nd: !1,
digit: !1,
Enclosing_Mark: !1,
Me: !1,
Final_Punctuation: !1,
Pf: !1,
Format: !1,
Cf: !1,
Initial_Punctuation: !1,
Pi: !1,
Letter: !1,
L: !1,
Letter_Number: !1,
Nl: !1,
Line_Separator: !1,
Zl: !1,
Lowercase_Letter: !1,
Ll: !1,
Mark: !1,
M: !1,
Combining_Mark: !1,
Math_Symbol: !1,
Sm: !1,
Modifier_Letter: !1,
Lm: !1,
Modifier_Symbol: !1,
Sk: !1,
Nonspacing_Mark: !1,
Mn: !1,
Number: !1,
N: !1,
Open_Punctuation: !1,
Ps: !1,
Other: !1,
C: !1,
Other_Letter: !1,
Lo: !1,
Other_Number: !1,
No: !1,
Other_Punctuation: !1,
Po: !1,
Other_Symbol: !1,
So: !1,
Paragraph_Separator: !1,
Zp: !1,
Private_Use: !1,
Co: !1,
Punctuation: !1,
P: !1,
punct: !1,
Separator: !1,
Z: !1,
Space_Separator: !1,
Zs: !1,
Spacing_Mark: !1,
Mc: !1,
Surrogate: !1,
Cs: !1,
Symbol: !1,
S: !1,
Titlecase_Letter: !1,
Lt: !1,
Unassigned: !1,
Cn: !1,
Uppercase_Letter: !1,
Lu: !1
}, t.Script = {
Adlam: !1,
Adlm: !1,
Ahom: !1,
Anatolian_Hieroglyphs: !1,
Hluw: !1,
Arabic: !1,
Arab: !1,
Armenian: !1,
Armn: !1,
Avestan: !1,
Avst: !1,
Balinese: !1,
Bali: !1,
Bamum: !1,
Bamu: !1,
Bassa_Vah: !1,
Bass: !1,
Batak: !1,
Batk: !1,
Bengali: !1,
Beng: !1,
Bhaiksuki: !1,
Bhks: !1,
Bopomofo: !1,
Bopo: !1,
Brahmi: !1,
Brah: !1,
Braille: !1,
Brai: !1,
Buginese: !1,
Bugi: !1,
Buhid: !1,
Buhd: !1,
Canadian_Aboriginal: !1,
Cans: !1,
Carian: !1,
Cari: !1,
Caucasian_Albanian: !1,
Aghb: !1,
Chakma: !1,
Cakm: !1,
Cham: !1,
Cherokee: !1,
Cher: !1,
Common: !1,
Zyyy: !1,
Coptic: !1,
Copt: !1,
Qaac: !1,
Cuneiform: !1,
Xsux: !1,
Cypriot: !1,
Cprt: !1,
Cyrillic: !1,
Cyrl: !1,
Deseret: !1,
Dsrt: !1,
Devanagari: !1,
Deva: !1,
Duployan: !1,
Dupl: !1,
Egyptian_Hieroglyphs: !1,
Egyp: !1,
Elbasan: !1,
Elba: !1,
Ethiopic: !1,
Ethi: !1,
Georgian: !1,
Geor: !1,
Glagolitic: !1,
Glag: !1,
Gothic: !1,
Goth: !1,
Grantha: !1,
Gran: !1,
Greek: !1,
Grek: !1,
Gujarati: !1,
Gujr: !1,
Gurmukhi: !1,
Guru: !1,
Han: !1,
Hani: !1,
Hangul: !1,
Hang: !1,
Hanunoo: !1,
Hano: !1,
Hatran: !1,
Hatr: !1,
Hebrew: !1,
Hebr: !1,
Hiragana: !1,
Hira: !1,
Imperial_Aramaic: !1,
Armi: !1,
Inherited: !1,
Zinh: !1,
Qaai: !1,
Inscriptional_Pahlavi: !1,
Phli: !1,
Inscriptional_Parthian: !1,
Prti: !1,
Javanese: !1,
Java: !1,
Kaithi: !1,
Kthi: !1,
Kannada: !1,
Knda: !1,
Katakana: !1,
Kana: !1,
Kayah_Li: !1,
Kali: !1,
Kharoshthi: !1,
Khar: !1,
Khmer: !1,
Khmr: !1,
Khojki: !1,
Khoj: !1,
Khudawadi: !1,
Sind: !1,
Lao: !1,
Laoo: !1,
Latin: !1,
Latn: !1,
Lepcha: !1,
Lepc: !1,
Limbu: !1,
Limb: !1,
Linear_A: !1,
Lina: !1,
Linear_B: !1,
Linb: !1,
Lisu: !1,
Lycian: !1,
Lyci: !1,
Lydian: !1,
Lydi: !1,
Mahajani: !1,
Mahj: !1,
Malayalam: !1,
Mlym: !1,
Mandaic: !1,
Mand: !1,
Manichaean: !1,
Mani: !1,
Marchen: !1,
Marc: !1,
Masaram_Gondi: !1,
Gonm: !1,
Meetei_Mayek: !1,
Mtei: !1,
Mende_Kikakui: !1,
Mend: !1,
Meroitic_Cursive: !1,
Merc: !1,
Meroitic_Hieroglyphs: !1,
Mero: !1,
Miao: !1,
Plrd: !1,
Modi: !1,
Mongolian: !1,
Mong: !1,
Mro: !1,
Mroo: !1,
Multani: !1,
Mult: !1,
Myanmar: !1,
Mymr: !1,
Nabataean: !1,
Nbat: !1,
New_Tai_Lue: !1,
Talu: !1,
Newa: !1,
Nko: !1,
Nkoo: !1,
Nushu: !1,
Nshu: !1,
Ogham: !1,
Ogam: !1,
Ol_Chiki: !1,
Olck: !1,
Old_Hungarian: !1,
Hung: !1,
Old_Italic: !1,
Ital: !1,
Old_North_Arabian: !1,
Narb: !1,
Old_Permic: !1,
Perm: !1,
Old_Persian: !1,
Xpeo: !1,
Old_South_Arabian: !1,
Sarb: !1,
Old_Turkic: !1,
Orkh: !1,
Oriya: !1,
Orya: !1,
Osage: !1,
Osge: !1,
Osmanya: !1,
Osma: !1,
Pahawh_Hmong: !1,
Hmng: !1,
Palmyrene: !1,
Palm: !1,
Pau_Cin_Hau: !1,
Pauc: !1,
Phags_Pa: !1,
Phag: !1,
Phoenician: !1,
Phnx: !1,
Psalter_Pahlavi: !1,
Phlp: !1,
Rejang: !1,
Rjng: !1,
Runic: !1,
Runr: !1,
Samaritan: !1,
Samr: !1,
Saurashtra: !1,
Saur: !1,
Sharada: !1,
Shrd: !1,
Shavian: !1,
Shaw: !1,
Siddham: !1,
Sidd: !1,
SignWriting: !1,
Sgnw: !1,
Sinhala: !1,
Sinh: !1,
Sora_Sompeng: !1,
Sora: !1,
Soyombo: !1,
Soyo: !1,
Sundanese: !1,
Sund: !1,
Syloti_Nagri: !1,
Sylo: !1,
Syriac: !1,
Syrc: !1,
Tagalog: !1,
Tglg: !1,
Tagbanwa: !1,
Tagb: !1,
Tai_Le: !1,
Tale: !1,
Tai_Tham: !1,
Lana: !1,
Tai_Viet: !1,
Tavt: !1,
Takri: !1,
Takr: !1,
Tamil: !1,
Taml: !1,
Tangut: !1,
Tang: !1,
Telugu: !1,
Telu: !1,
Thaana: !1,
Thaa: !1,
Thai: !1,
Tibetan: !1,
Tibt: !1,
Tifinagh: !1,
Tfng: !1,
Tirhuta: !1,
Tirh: !1,
Ugaritic: !1,
Ugar: !1,
Vai: !1,
Vaii: !1,
Warang_Citi: !1,
Wara: !1,
Yi: !1,
Yiii: !1,
Zanabazar_Square: !1,
Zanb: !1
}, t.default = {
$LONE: t.$LONE,
General_Category: t.General_Category,
Script: t.Script
};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(4);
function i(e = RegExp) {
const n = "g";
let i = r.createRegExp("", "g", e);
return Object.keys(t.PROTOTYPE).reduce(function(e, t) {
switch (t) {
case "flags":
e[t] = t in i && "g" === i[t];
break;

default:
e[t] = t in i;
break;
}
return e;
}, {});
}
t.PROTOTYPE = {
source: !1,
flags: !1,
lastIndex: !1,
dotAll: !1,
global: !1,
ignoreCase: !1,
multiline: !1,
sticky: !1,
unicode: !1
}, t.testPrototype = i;
const o = n(54);
t.default = o;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(4);
function i(e = RegExp) {
let n = e, i;
return r.createRegExp("(wor)(ld)", "g", e).test("hello world!"), Object.keys(t.REGEXP_STATIC).reduce(function(e, t) {
if (e[t] = t in n, e[t]) switch (t) {
case "leftContext":
case "$`":
e[t] = "hello " === n[t];
break;

case "rightContext":
case "$'":
e[t] = "!" === n[t];
break;

case "lastParen":
case "$+":
e[t] = "ld" === n[t];
break;

case "lastMatch":
case "$&":
e[t] = "world" === n[t];
break;

case "input":
case "$_":
e[t] = "hello world!" === n[t];
break;

case "$1":
e[t] = "wor" === n[t];
break;

case "$2":
e[t] = "ld" === n[t];
break;

default:
}
return e;
}, {});
}
t.REGEXP_STATIC = {
$1: !1,
$2: !1,
$3: !1,
$4: !1,
$5: !1,
$6: !1,
$7: !1,
$8: !1,
$9: !1,
input: !1,
$_: !1,
lastMatch: !1,
"$&": !1,
lastParen: !1,
"$+": !1,
leftContext: !1,
"$`": !1,
rightContext: !1,
"$'": !1,
$10: !1,
$100: !1
}, t.testStatic = i;
const o = n(55);
t.default = o;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(4);
function i(e = RegExp) {
let n = r.createRegExp("", "", e);
return Object.keys(t.REGEXP_SYMBOL).reduce(function(e, t) {
return e[t] = Symbol[t] && Symbol[t] in n, e;
}, {});
}
t.REGEXP_SYMBOL = {
species: !1,
match: !1,
replace: !1,
search: !1,
split: !1
}, t.testSymbol = i;
const o = n(56);
t.default = o;
}, function(e, t, n) {
"use strict";
function r(e, t) {
let n = e.toString(16).padStart(4, "0");
return t ? n.toUpperCase() : n;
}
function i(e, t, n) {
let r;
if ("string" == typeof e && (e = (r = e).codePointAt(0)), e > 65535 && t) {
let t;
return (t = "string" != typeof r ? u(e) : [ r.charCodeAt(0), r.charCodeAt(1) ]).map(function(e) {
return o(e, n);
}).join("");
}
return o(e, n);
}
function o(e, t) {
let n = r(e);
return t || n.length > 4 ? `\\u{${n}}` : `\\u${n}`;
}
function a(e) {
return e.charCodeAt(0) == e.codePointAt(0);
}
function s(e) {
return e instanceof RegExp || Object.prototype.toString.call(e) === t.REGEXP_TO_STRING_TAG ? e : null;
}
function u(e) {
let t = Math.floor((e - 65536) / 1024) + 55296, n = (e - 65536) % 1024 + 56320;
return Object.assign([ t, n ], {
h: t,
l: n
});
}
function l(e, t) {
const n = t ? /u\{([0-9a-fA-F]{1,8})\}/g : /\\u\{([0-9a-fA-F]{1,8})\}/g;
return e.replace(n, function(e, t) {
return String.fromCodePoint(parseInt(t, 16));
});
}
function c(e, t, n, r, o = /./gu) {
return e.replace(o, function(e, o) {
let a = i(e, n, !r);
return t ? a.replace(/\\/, "") : a;
});
}
function f(e) {
return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.REGEXP_TO_STRING_TAG = Object.prototype.toString.call(/a/), t.toHex = r, t.toUnicode = i, 
t._toUnicode = o, t.isDoubleUnicode = a, t.isRegExp = s, t.surrogatePair = u, t.unicodeUnEscape = l, 
t.unicodeEscape = c, t.escapeRegExp = f;
const p = n(57);
t.default = p, Object.freeze(p);
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
var a = [], s = n.document, u = Object.getPrototypeOf, l = a.slice, c = a.concat, f = a.push, p = a.indexOf, h = {}, d = h.toString, g = h.hasOwnProperty, _ = g.toString, m = _.call(Object), y = {}, D = function e(t) {
return "function" == typeof t && "number" != typeof t.nodeType;
}, b = function e(t) {
return null != t && t === t.window;
}, v = {
type: !0,
src: !0,
noModule: !0
};
function E(e, t, n) {
var r, i = (t = t || s).createElement("script");
if (i.text = e, n) for (r in v) n[r] && (i[r] = n[r]);
t.head.appendChild(i).parentNode.removeChild(i);
}
function C(e) {
return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[d.call(e)] || "object" : typeof e;
}
var S = "3.3.1", x = function(e, t) {
return new x.fn.init(e, t);
}, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function A(e) {
var t = !!e && "length" in e && e.length, n = C(e);
return !D(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
}
x.fn = x.prototype = {
jquery: "3.3.1",
constructor: x,
length: 0,
toArray: function() {
return l.call(this);
},
get: function(e) {
return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
},
pushStack: function(e) {
var t = x.merge(this.constructor(), e);
return t.prevObject = this, t;
},
each: function(e) {
return x.each(this, e);
},
map: function(e) {
return this.pushStack(x.map(this, function(t, n) {
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
return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
},
end: function() {
return this.prevObject || this.constructor();
},
push: f,
sort: a.sort,
splice: a.splice
}, x.extend = x.fn.extend = function() {
var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || D(a) || (a = {}), 
s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
a !== (r = e[t]) && (l && r && (x.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, 
o = n && Array.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, a[t] = x.extend(l, o, r)) : void 0 !== r && (a[t] = r));
return a;
}, x.extend({
expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
isReady: !0,
error: function(e) {
throw new Error(e);
},
noop: function() {},
isPlainObject: function(e) {
var t, n;
return !(!e || "[object Object]" !== d.call(e) || (t = u(e)) && ("function" != typeof (n = g.call(t, "constructor") && t.constructor) || _.call(n) !== m));
},
isEmptyObject: function(e) {
var t;
for (t in e) return !1;
return !0;
},
globalEval: function(e) {
E(e);
},
each: function(e, t) {
var n, r = 0;
if (A(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
return e;
},
trim: function(e) {
return null == e ? "" : (e + "").replace(w, "");
},
makeArray: function(e, t) {
var n = t || [];
return null != e && (A(Object(e)) ? x.merge(n, "string" == typeof e ? [ e ] : e) : f.call(n, e)), 
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
}), "function" == typeof Symbol && (x.fn[Symbol.iterator] = a[Symbol.iterator]), 
x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
h["[object " + t + "]"] = t.toLowerCase();
});
var L = function(e) {
var t, n, r, i, o, a, s, u, l, c, f, p, h, d, g, _, m, y, D, b = "sizzle" + 1 * new Date(), v = e.document, E = 0, C = 0, S = ae(), x = ae(), w = ae(), A = function(e, t) {
return e === t && (f = !0), 0;
}, L = {}.hasOwnProperty, P = [], T = P.pop, I = P.push, j = P.push, F = P.slice, k = function(e, t) {
for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
return -1;
}, M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", O = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", N = "\\[" + O + "*(" + R + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + O + "*\\]", B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", $ = new RegExp(O + "+", "g"), G = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"), U = new RegExp("^" + O + "*," + O + "*"), H = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"), z = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"), V = new RegExp(B), q = new RegExp("^" + R + "$"), W = {
ID: new RegExp("^#(" + R + ")"),
CLASS: new RegExp("^\\.(" + R + ")"),
TAG: new RegExp("^(" + R + "|[*])"),
ATTR: new RegExp("^" + N),
PSEUDO: new RegExp("^" + B),
CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
bool: new RegExp("^(?:" + M + ")$", "i"),
needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
}, K = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, Q = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"), ee = function(e, t, n) {
var r = "0x" + t - 65536;
return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
}, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
}, re = function() {
p();
}, ie = ye(function(e) {
return !0 === e.disabled && ("form" in e || "label" in e);
}, {
dir: "parentNode",
next: "legend"
});
try {
j.apply(P = F.call(v.childNodes), v.childNodes), P[v.childNodes.length].nodeType;
} catch (e) {
j = {
apply: P.length ? function(e, t) {
I.apply(e, F.call(t));
} : function(e, t) {
for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
e.length = n - 1;
}
};
}
function oe(e, t, r, i) {
var o, s, l, c, f, d, m, y = t && t.ownerDocument, E = t ? t.nodeType : 9;
if (r = r || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return r;
if (!i && ((t ? t.ownerDocument || t : v) !== h && p(t), t = t || h, g)) {
if (11 !== E && (f = X.exec(e))) if (o = f[1]) {
if (9 === E) {
if (!(l = t.getElementById(o))) return r;
if (l.id === o) return r.push(l), r;
} else if (y && (l = y.getElementById(o)) && D(t, l) && l.id === o) return r.push(l), 
r;
} else {
if (f[2]) return j.apply(r, t.getElementsByTagName(e)), r;
if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(r, t.getElementsByClassName(o)), 
r;
}
if (n.qsa && !w[e + " "] && (!_ || !_.test(e))) {
if (1 !== E) y = t, m = e; else if ("object" !== t.nodeName.toLowerCase()) {
for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), 
s = (d = a(e)).length; s--; ) d[s] = "#" + c + " " + me(d[s]);
m = d.join(","), y = J.test(e) && ge(t.parentNode) || t;
}
if (m) try {
return j.apply(r, y.querySelectorAll(m)), r;
} catch (e) {} finally {
c === b && t.removeAttribute("id");
}
}
}
return u(e.replace(G, "$1"), t, r, i);
}
function ae() {
var e = [];
function t(n, i) {
return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
}
return t;
}
function se(e) {
return e[b] = !0, e;
}
function ue(e) {
var t = h.createElement("fieldset");
try {
return !!e(t);
} catch (e) {
return !1;
} finally {
t.parentNode && t.parentNode.removeChild(t), t = null;
}
}
function le(e, t) {
for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
}
function ce(e, t) {
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
function he(e) {
return function(t) {
return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
};
}
function de(e) {
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
}, p = oe.setDocument = function(e) {
var t, i, a = e ? e.ownerDocument || e : v;
return a !== h && 9 === a.nodeType && a.documentElement ? (d = (h = a).documentElement, 
g = !o(h), v !== h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), 
n.attributes = ue(function(e) {
return e.className = "i", !e.getAttribute("className");
}), n.getElementsByTagName = ue(function(e) {
return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
}), n.getElementsByClassName = Z.test(h.getElementsByClassName), n.getById = ue(function(e) {
return d.appendChild(e).id = b, !h.getElementsByName || !h.getElementsByName(b).length;
}), n.getById ? (r.filter.ID = function(e) {
var t = e.replace(Q, ee);
return function(e) {
return e.getAttribute("id") === t;
};
}, r.find.ID = function(e, t) {
if (void 0 !== t.getElementById && g) {
var n = t.getElementById(e);
return n ? [ n ] : [];
}
}) : (r.filter.ID = function(e) {
var t = e.replace(Q, ee);
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
}, m = [], _ = [], (n.qsa = Z.test(h.querySelectorAll)) && (ue(function(e) {
d.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + O + "*(?:''|\"\")"), 
e.querySelectorAll("[selected]").length || _.push("\\[" + O + "*(?:value|" + M + ")"), 
e.querySelectorAll("[id~=" + b + "-]").length || _.push("~="), e.querySelectorAll(":checked").length || _.push(":checked"), 
e.querySelectorAll("a#" + b + "+*").length || _.push(".#.+[+~]");
}), ue(function(e) {
e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var t = h.createElement("input");
t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + O + "*[*^$|!~]?="), 
2 !== e.querySelectorAll(":enabled").length && _.push(":enabled", ":disabled"), 
d.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && _.push(":enabled", ":disabled"), 
e.querySelectorAll("*,:x"), _.push(",.*:");
})), (n.matchesSelector = Z.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ue(function(e) {
n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", B);
}), _ = _.length && new RegExp(_.join("|")), m = m.length && new RegExp(m.join("|")), 
t = Z.test(d.compareDocumentPosition), D = t || Z.test(d.contains) ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
} : function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, A = t ? function(e, t) {
if (e === t) return f = !0, 0;
var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === h || e.ownerDocument === v && D(v, e) ? -1 : t === h || t.ownerDocument === v && D(v, t) ? 1 : c ? k(c, e) - k(c, t) : 0 : 4 & r ? -1 : 1);
} : function(e, t) {
if (e === t) return f = !0, 0;
var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
if (!i || !o) return e === h ? -1 : t === h ? 1 : i ? -1 : o ? 1 : c ? k(c, e) - k(c, t) : 0;
if (i === o) return ce(e, t);
for (n = e; n = n.parentNode; ) a.unshift(n);
for (n = t; n = n.parentNode; ) s.unshift(n);
for (;a[r] === s[r]; ) r++;
return r ? ce(a[r], s[r]) : a[r] === v ? -1 : s[r] === v ? 1 : 0;
}, h) : h;
}, oe.matches = function(e, t) {
return oe(e, null, null, t);
}, oe.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== h && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !w[t + " "] && (!m || !m.test(t)) && (!_ || !_.test(t))) try {
var r = y.call(e, t);
if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
} catch (e) {}
return oe(t, h, null, [ e ]).length > 0;
}, oe.contains = function(e, t) {
return (e.ownerDocument || e) !== h && p(e), D(e, t);
}, oe.attr = function(e, t) {
(e.ownerDocument || e) !== h && p(e);
var i = r.attrHandle[t.toLowerCase()], o = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
}, oe.escape = function(e) {
return (e + "").replace(te, ne);
}, oe.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, oe.uniqueSort = function(e) {
var t, r = [], i = 0, o = 0;
if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
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
match: W,
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
return e[1] = e[1].replace(Q, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee), 
"~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
},
CHILD: function(e) {
return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), 
e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), 
e;
},
PSEUDO: function(e) {
var t, n = !e[6] && e[2];
return W.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
e[2] = n.slice(0, t)), e.slice(0, 3));
}
},
filter: {
TAG: function(e) {
var t = e.replace(Q, ee).toLowerCase();
return "*" === e ? function() {
return !0;
} : function(e) {
return e.nodeName && e.nodeName.toLowerCase() === t;
};
},
CLASS: function(e) {
var t = S[e + " "];
return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && S(e, function(e) {
return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
});
},
ATTR: function(e, t, n) {
return function(r) {
var i = oe.attr(r, e);
return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
};
},
CHILD: function(e, t, n, r, i) {
var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
return 1 === r && 0 === i ? function(e) {
return !!e.parentNode;
} : function(t, n, u) {
var l, c, f, p, h, d, g = o !== a ? "nextSibling" : "previousSibling", _ = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !u && !s, D = !1;
if (_) {
if (o) {
for (;g; ) {
for (p = t; p = p[g]; ) if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
d = g = "only" === e && !d && "nextSibling";
}
return !0;
}
if (d = [ a ? _.firstChild : _.lastChild ], a && y) {
for (D = (h = (l = (c = (f = (p = _)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === E && l[1]) && l[2], 
p = h && _.childNodes[h]; p = ++h && p && p[g] || (D = h = 0) || d.pop(); ) if (1 === p.nodeType && ++D && p === t) {
c[e] = [ E, h, D ];
break;
}
} else if (y && (D = h = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === E && l[1]), 
!1 === D) for (;(p = ++h && p && p[g] || (D = h = 0) || d.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++D || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ E, D ]), 
p !== t)); ) ;
return (D -= i) === r || D % r == 0 && D / r >= 0;
}
};
},
PSEUDO: function(e, t) {
var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
return i[b] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
for (var r, o = i(e, t), a = o.length; a--; ) e[r = k(e, o[a])] = !(n[r] = o[a]);
}) : function(e) {
return i(e, 0, n);
}) : i;
}
},
pseudos: {
not: se(function(e) {
var t = [], n = [], r = s(e.replace(G, "$1"));
return r[b] ? se(function(e, t, n, i) {
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
return e = e.replace(Q, ee), function(t) {
return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
};
}),
lang: se(function(e) {
return q.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Q, ee).toLowerCase(), 
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
enabled: he(!1),
disabled: he(!0),
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
first: de(function() {
return [ 0 ];
}),
last: de(function(e, t) {
return [ t - 1 ];
}),
eq: de(function(e, t, n) {
return [ n < 0 ? n + t : n ];
}),
even: de(function(e, t) {
for (var n = 0; n < t; n += 2) e.push(n);
return e;
}),
odd: de(function(e, t) {
for (var n = 1; n < t; n += 2) e.push(n);
return e;
}),
lt: de(function(e, t, n) {
for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
return e;
}),
gt: de(function(e, t, n) {
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
function _e() {}
function me(e) {
for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
return r;
}
function ye(e, t, n) {
var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
return t.first ? function(t, n, i) {
for (;t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, i);
return !1;
} : function(t, n, u) {
var l, c, f, p = [ E, s ];
if (u) {
for (;t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
} else for (;t = t[r]; ) if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), 
i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
if ((l = c[o]) && l[0] === E && l[1] === s) return p[2] = l[2];
if (c[o] = p, p[2] = e(t, n, u)) return !0;
}
return !1;
};
}
function De(e) {
return e.length > 1 ? function(t, n, r) {
for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
return !0;
} : e[0];
}
function be(e, t, n) {
for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
return n;
}
function ve(e, t, n, r, i) {
for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
l && t.push(s)));
return a;
}
function Ee(e, t, n, r, i, o) {
return r && !r[b] && (r = Ee(r)), i && !i[b] && (i = Ee(i, o)), se(function(o, a, s, u) {
var l, c, f, p = [], h = [], d = a.length, g = o || be(t || "*", s.nodeType ? [ s ] : s, []), _ = !e || !o && t ? g : ve(g, p, e, s, u), m = n ? i || (o ? e : d || r) ? [] : a : _;
if (n && n(_, m, s, u), r) for (l = ve(m, h), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (m[h[c]] = !(_[h[c]] = f));
if (o) {
if (i || e) {
if (i) {
for (l = [], c = m.length; c--; ) (f = m[c]) && l.push(_[c] = f);
i(null, m = [], l, u);
}
for (c = m.length; c--; ) (f = m[c]) && (l = i ? k(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
}
} else m = ve(m === a ? m.splice(d, m.length) : m), i ? i(null, a, m, u) : j.apply(a, m);
});
}
function Ce(e) {
for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = ye(function(e) {
return e === t;
}, s, !0), f = ye(function(e) {
return k(t, e) > -1;
}, s, !0), p = [ function(e, n, r) {
var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
return t = null, i;
} ]; u < o; u++) if (n = r.relative[e[u].type]) p = [ ye(De(p), n) ]; else {
if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
for (i = ++u; i < o && !r.relative[e[i].type]; i++) ;
return Ee(u > 1 && De(p), u > 1 && me(e.slice(0, u - 1).concat({
value: " " === e[u - 2].type ? "*" : ""
})).replace(G, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && me(e));
}
p.push(n);
}
return De(p);
}
function Se(e, t) {
var n = t.length > 0, i = e.length > 0, o = function(o, a, s, u, c) {
var f, d, _, m = 0, y = "0", D = o && [], b = [], v = l, C = o || i && r.find.TAG("*", c), S = E += null == v ? 1 : Math.random() || .1, x = C.length;
for (c && (l = a === h || a || c); y !== x && null != (f = C[y]); y++) {
if (i && f) {
for (d = 0, a || f.ownerDocument === h || (p(f), s = !g); _ = e[d++]; ) if (_(f, a || h, s)) {
u.push(f);
break;
}
c && (E = S);
}
n && ((f = !_ && f) && m--, o && D.push(f));
}
if (m += y, n && y !== m) {
for (d = 0; _ = t[d++]; ) _(D, b, a, s);
if (o) {
if (m > 0) for (;y--; ) D[y] || b[y] || (b[y] = T.call(u));
b = ve(b);
}
j.apply(u, b), c && !o && b.length > 0 && m + t.length > 1 && oe.uniqueSort(u);
}
return c && (E = S, l = v), D;
};
return n ? se(o) : o;
}
return _e.prototype = r.filters = r.pseudos, r.setFilters = new _e(), a = oe.tokenize = function(e, t) {
var n, i, o, a, s, u, l, c = x[e + " "];
if (c) return t ? 0 : c.slice(0);
for (s = e, u = [], l = r.preFilter; s; ) {
for (a in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
n = !1, (i = H.exec(s)) && (n = i.shift(), o.push({
value: n,
type: i[0].replace(G, " ")
}), s = s.slice(n.length)), r.filter) !(i = W[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), 
o.push({
value: n,
type: a,
matches: i
}), s = s.slice(n.length));
if (!n) break;
}
return t ? s.length : s ? oe.error(e) : x(e, u).slice(0);
}, s = oe.compile = function(e, t) {
var n, r = [], i = [], o = w[e + " "];
if (!o) {
for (t || (t = a(e)), n = t.length; n--; ) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
(o = w(e, Se(i, r))).selector = e;
}
return o;
}, u = oe.select = function(e, t, n, i) {
var o, u, l, c, f, p = "function" == typeof e && e, h = !i && a(e = p.selector || e);
if (n = n || [], 1 === h.length) {
if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
if (!(t = (r.find.ID(l.matches[0].replace(Q, ee), t) || [])[0])) return n;
p && (t = t.parentNode), e = e.slice(u.shift().value.length);
}
for (o = W.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]); ) if ((f = r.find[c]) && (i = f(l.matches[0].replace(Q, ee), J.test(u[0].type) && ge(t.parentNode) || t))) {
if (u.splice(o, 1), !(e = i.length && me(u))) return j.apply(n, i), n;
break;
}
}
return (p || s(e, h))(i, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n;
}, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !!f, 
p(), n.sortDetached = ue(function(e) {
return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
}), ue(function(e) {
return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
}) || le("type|href|height|width", function(e, t, n) {
if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
}), n.attributes && ue(function(e) {
return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}) || le("value", function(e, t, n) {
if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
}), ue(function(e) {
return null == e.getAttribute("disabled");
}) || le(M, function(e, t, n) {
var r;
if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
}), oe;
}(n);
x.find = L, x.expr = L.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = L.uniqueSort, 
x.text = L.getText, x.isXMLDoc = L.isXML, x.contains = L.contains, x.escapeSelector = L.escape;
var P = function(e, t, n) {
for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
if (i && x(e).is(n)) break;
r.push(e);
}
return r;
}, T = function(e, t) {
for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
return n;
}, I = x.expr.match.needsContext;
function j(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
}
var F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function k(e, t, n) {
return D(t) ? x.grep(e, function(e, r) {
return !!t.call(e, r, e) !== n;
}) : t.nodeType ? x.grep(e, function(e) {
return e === t !== n;
}) : "string" != typeof t ? x.grep(e, function(e) {
return p.call(t, e) > -1 !== n;
}) : x.filter(t, e, n);
}
x.filter = function(e, t, n) {
var r = t[0];
return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [ r ] : [] : x.find.matches(e, x.grep(t, function(e) {
return 1 === e.nodeType;
}));
}, x.fn.extend({
find: function(e) {
var t, n, r = this.length, i = this;
if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
for (t = 0; t < r; t++) if (x.contains(i[t], this)) return !0;
}));
for (n = this.pushStack([]), t = 0; t < r; t++) x.find(e, i[t], n);
return r > 1 ? x.uniqueSort(n) : n;
},
filter: function(e) {
return this.pushStack(k(this, e || [], !1));
},
not: function(e) {
return this.pushStack(k(this, e || [], !0));
},
is: function(e) {
return !!k(this, "string" == typeof e && I.test(e) ? x(e) : e || [], !1).length;
}
});
var M, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(x.fn.init = function(e, t, n) {
var r, i;
if (!e) return this;
if (n = n || M, "string" == typeof e) {
if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
if (r[1]) {
if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), 
F.test(r[1]) && x.isPlainObject(t)) for (r in t) D(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
return this;
}
return (i = s.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
}
return e.nodeType ? (this[0] = e, this.length = 1, this) : D(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this);
}).prototype = x.fn, M = x(s);
var R = /^(?:parents|prev(?:Until|All))/, N = {
children: !0,
contents: !0,
next: !0,
prev: !0
};
function B(e, t) {
for (;(e = e[t]) && 1 !== e.nodeType; ) ;
return e;
}
x.fn.extend({
has: function(e) {
var t = x(e, this), n = t.length;
return this.filter(function() {
for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
});
},
closest: function(e, t) {
var n, r = 0, i = this.length, o = [], a = "string" != typeof e && x(e);
if (!I.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
o.push(n);
break;
}
return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o);
},
index: function(e) {
return e ? "string" == typeof e ? p.call(x(e), this[0]) : p.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
},
add: function(e, t) {
return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
},
addBack: function(e) {
return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
}
}), x.each({
parent: function(e) {
var t = e.parentNode;
return t && 11 !== t.nodeType ? t : null;
},
parents: function(e) {
return P(e, "parentNode");
},
parentsUntil: function(e, t, n) {
return P(e, "parentNode", n);
},
next: function(e) {
return B(e, "nextSibling");
},
prev: function(e) {
return B(e, "previousSibling");
},
nextAll: function(e) {
return P(e, "nextSibling");
},
prevAll: function(e) {
return P(e, "previousSibling");
},
nextUntil: function(e, t, n) {
return P(e, "nextSibling", n);
},
prevUntil: function(e, t, n) {
return P(e, "previousSibling", n);
},
siblings: function(e) {
return T((e.parentNode || {}).firstChild, e);
},
children: function(e) {
return T(e.firstChild);
},
contents: function(e) {
return j(e, "iframe") ? e.contentDocument : (j(e, "template") && (e = e.content || e), 
x.merge([], e.childNodes));
}
}, function(e, t) {
x.fn[e] = function(n, r) {
var i = x.map(this, t, n);
return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), 
this.length > 1 && (N[e] || x.uniqueSort(i), R.test(e) && i.reverse()), this.pushStack(i);
};
});
var $ = /[^\x20\t\r\n\f]+/g;
function G(e) {
var t = {};
return x.each(e.match($) || [], function(e, n) {
t[n] = !0;
}), t;
}
function U(e) {
return e;
}
function H(e) {
throw e;
}
function z(e, t, n, r) {
var i;
try {
e && D(i = e.promise) ? i.call(e).done(t).fail(n) : e && D(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
} catch (e) {
n.apply(void 0, [ e ]);
}
}
x.Callbacks = function(e) {
e = "string" == typeof e ? G(e) : x.extend({}, e);
var t, n, r, i, o = [], a = [], s = -1, u = function() {
for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, 
n = !1);
e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
}, l = {
add: function() {
return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
x.each(n, function(n, r) {
D(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== C(r) && t(r);
});
}(arguments), n && !t && u()), this;
},
remove: function() {
return x.each(arguments, function(e, t) {
for (var n; (n = x.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
}), this;
},
has: function(e) {
return e ? x.inArray(e, o) > -1 : o.length > 0;
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
return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
this;
},
fire: function() {
return l.fireWith(this, arguments), this;
},
fired: function() {
return !!r;
}
};
return l;
}, x.extend({
Deferred: function(e) {
var t = [ [ "notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2 ], [ "resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
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
return x.Deferred(function(n) {
x.each(t, function(t, r) {
var i = D(e[r[4]]) && e[r[4]];
o[r[1]](function() {
var e = i && i.apply(this, arguments);
e && D(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [ e ] : arguments);
});
}), e = null;
}).promise();
},
then: function(e, r, i) {
var o = 0;
function a(e, t, r, i) {
return function() {
var s = this, u = arguments, l = function() {
var n, l;
if (!(e < o)) {
if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
l = n && ("object" == typeof n || "function" == typeof n) && n.then, D(l) ? i ? l.call(n, a(o, t, U, i), a(o, t, H, i)) : (o++, 
l.call(n, a(o, t, U, i), a(o, t, H, i), a(o, t, U, t.notifyWith))) : (r !== U && (s = void 0, 
u = [ n ]), (i || t.resolveWith)(s, u));
}
}, c = i ? l : function() {
try {
l();
} catch (n) {
x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== H && (s = void 0, 
u = [ n ]), t.rejectWith(s, u));
}
};
e ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()), 
n.setTimeout(c));
};
}
return x.Deferred(function(n) {
t[0][3].add(a(0, n, D(i) ? i : U, n.notifyWith)), t[1][3].add(a(0, n, D(e) ? e : U)), 
t[2][3].add(a(0, n, D(r) ? r : H));
}).promise();
},
promise: function(e) {
return null != e ? x.extend(e, i) : i;
}
}, o = {};
return x.each(t, function(e, n) {
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
var t = arguments.length, n = t, r = Array(n), i = l.call(arguments), o = x.Deferred(), a = function(e) {
return function(n) {
r[e] = this, i[e] = arguments.length > 1 ? l.call(arguments) : n, --t || o.resolveWith(r, i);
};
};
if (t <= 1 && (z(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || D(i[n] && i[n].then))) return o.then();
for (;n--; ) z(i[n], a(n), o.reject);
return o.promise();
}
});
var V = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
x.Deferred.exceptionHook = function(e, t) {
n.console && n.console.warn && e && V.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
}, x.readyException = function(e) {
n.setTimeout(function() {
throw e;
});
};
var q = x.Deferred();
function W() {
s.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), 
x.ready();
}
x.fn.ready = function(e) {
return q.then(e).catch(function(e) {
x.readyException(e);
}), this;
}, x.extend({
isReady: !1,
readyWait: 1,
ready: function(e) {
(!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || q.resolveWith(s, [ x ]));
}
}), x.ready.then = q.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(x.ready) : (s.addEventListener("DOMContentLoaded", W), 
n.addEventListener("load", W));
var K = function(e, t, n, r, i, o, a) {
var s = 0, u = e.length, l = null == n;
if ("object" === C(n)) for (s in i = !0, n) K(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, 
D(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
return l.call(x(e), n);
})), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
}, Y = /^-ms-/, Z = /-([a-z])/g;
function X(e, t) {
return t.toUpperCase();
}
function J(e) {
return e.replace(Y, "ms-").replace(Z, X);
}
var Q = function(e) {
return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
};
function ee() {
this.expando = x.expando + ee.uid++;
}
ee.uid = 1, ee.prototype = {
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
n = (t = Array.isArray(t) ? t.map(J) : (t = J(t)) in r ? [ t ] : t.match($) || []).length;
for (;n--; ) delete r[t[n]];
}
(void 0 === t || x.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
}
},
hasData: function(e) {
var t = e[this.expando];
return void 0 !== t && !x.isEmptyObject(t);
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
x.extend({
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
}), x.fn.extend({
data: function(e, t) {
var n, r, i, o = this[0], a = o && o.attributes;
if (void 0 === e) {
if (this.length && (i = ne.get(o), 1 === o.nodeType && !te.get(o, "hasDataAttrs"))) {
for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = J(r.slice(5)), 
ae(o, r, i[r]));
te.set(o, "hasDataAttrs", !0);
}
return i;
}
return "object" == typeof e ? this.each(function() {
ne.set(this, e);
}) : K(this, function(t) {
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
}), x.extend({
queue: function(e, t, n) {
var r;
if (e) return t = (t || "fx") + "queue", r = te.get(e, t), n && (!r || Array.isArray(n) ? r = te.access(e, t, x.makeArray(n)) : r.push(n)), 
r || [];
},
dequeue: function(e, t) {
t = t || "fx";
var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function() {
x.dequeue(e, t);
};
"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
},
_queueHooks: function(e, t) {
var n = t + "queueHooks";
return te.get(e, n) || te.access(e, n, {
empty: x.Callbacks("once memory").add(function() {
te.remove(e, [ t + "queue", n ]);
})
});
}
}), x.fn.extend({
queue: function(e, t) {
var n = 2;
return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each(function() {
var n = x.queue(this, e, t);
x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
});
},
dequeue: function(e) {
return this.each(function() {
x.dequeue(this, e);
});
},
clearQueue: function(e) {
return this.queue(e || "fx", []);
},
promise: function(e, t) {
var n, r = 1, i = x.Deferred(), o = this, a = this.length, s = function() {
--r || i.resolveWith(o, [ o ]);
};
for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = te.get(o[a], e + "queueHooks")) && n.empty && (r++, 
n.empty.add(s));
return s(), i.promise(t);
}
});
var se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ue = new RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i"), le = [ "Top", "Right", "Bottom", "Left" ], ce = function(e, t) {
return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display");
}, fe = function(e, t, n, r) {
var i, o, a = {};
for (o in t) a[o] = e.style[o], e.style[o] = t[o];
for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
return i;
};
function pe(e, t, n, r) {
var i, o, a = 20, s = r ? function() {
return r.cur();
} : function() {
return x.css(e, t, "");
}, u = s(), l = n && n[3] || (x.cssNumber[t] ? "" : "px"), c = (x.cssNumber[t] || "px" !== l && +u) && ue.exec(x.css(e, t));
if (c && c[3] !== l) {
for (u /= 2, l = l || c[3], c = +u || 1; a--; ) x.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), 
c /= o;
c *= 2, x.style(e, t, c + l), n = n || [];
}
return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
r.start = c, r.end = i)), i;
}
var he = {};
function de(e) {
var t, n = e.ownerDocument, r = e.nodeName, i = he[r];
return i || (t = n.body.appendChild(n.createElement(r)), i = x.css(t, "display"), 
t.parentNode.removeChild(t), "none" === i && (i = "block"), he[r] = i, i);
}
function ge(e, t) {
for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, 
t ? ("none" === n && (i[o] = te.get(r, "display") || null, i[o] || (r.style.display = "")), 
"" === r.style.display && ce(r) && (i[o] = de(r))) : "none" !== n && (i[o] = "none", 
te.set(r, "display", n)));
for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
return e;
}
x.fn.extend({
show: function() {
return ge(this, !0);
},
hide: function() {
return ge(this);
},
toggle: function(e) {
return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
ce(this) ? x(this).show() : x(this).hide();
});
}
});
var _e = /^(?:checkbox|radio)$/i, me = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ye = /^$|^module$|\/(?:java|ecma)script/i, De = {
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
void 0 === t || t && j(e, t) ? x.merge([ e ], n) : n;
}
function ve(e, t) {
for (var n = 0, r = e.length; n < r; n++) te.set(e[n], "globalEval", !t || te.get(t[n], "globalEval"));
}
De.optgroup = De.option, De.tbody = De.tfoot = De.colgroup = De.caption = De.thead, 
De.th = De.td;
var Ee = /<|&#?\w+;/;
function Ce(e, t, n, r, i) {
for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], h = 0, d = e.length; h < d; h++) if ((o = e[h]) || 0 === o) if ("object" === C(o)) x.merge(p, o.nodeType ? [ o ] : o); else if (Ee.test(o)) {
for (a = a || f.appendChild(t.createElement("div")), s = (me.exec(o) || [ "", "" ])[1].toLowerCase(), 
u = De[s] || De._default, a.innerHTML = u[1] + x.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
x.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
} else p.push(t.createTextNode(o));
for (f.textContent = "", h = 0; o = p[h++]; ) if (r && x.inArray(o, r) > -1) i && i.push(o); else if (l = x.contains(o.ownerDocument, o), 
a = be(f.appendChild(o), "script"), l && ve(a), n) for (c = 0; o = a[c++]; ) ye.test(o.type || "") && n.push(o);
return f;
}
!function() {
var e = s.createDocumentFragment().appendChild(s.createElement("div")), t = s.createElement("input");
t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
e.appendChild(t), y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
e.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
}();
var Se = s.documentElement, xe = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ae = /^([^.]*)(?:\.(.+)|)/;
function Le() {
return !0;
}
function Pe() {
return !1;
}
function Te() {
try {
return s.activeElement;
} catch (e) {}
}
function Ie(e, t, n, r, i, o) {
var a, s;
if ("object" == typeof t) {
for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ie(e, s, n, r, t[s], o);
return e;
}
if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Pe; else if (!i) return e;
return 1 === o && (a = i, (i = function(e) {
return x().off(e), a.apply(this, arguments);
}).guid = a.guid || (a.guid = x.guid++)), e.each(function() {
x.event.add(this, t, i, r, n);
});
}
x.event = {
global: {},
add: function(e, t, n, r, i) {
var o, a, s, u, l, c, f, p, h, d, g, _ = te.get(e);
if (_) for (n.handler && (n = (o = n).handler, i = o.selector), i && x.find.matchesSelector(Se, i), 
n.guid || (n.guid = x.guid++), (u = _.events) || (u = _.events = {}), (a = _.handle) || (a = _.handle = function(t) {
return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0;
}), l = (t = (t || "").match($) || [ "" ]).length; l--; ) h = g = (s = Ae.exec(t[l]) || [])[1], 
d = (s[2] || "").split(".").sort(), h && (f = x.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, 
f = x.event.special[h] || {}, c = x.extend({
type: h,
origType: g,
data: r,
handler: n,
guid: n.guid,
selector: i,
needsContext: i && x.expr.match.needsContext.test(i),
namespace: d.join(".")
}, o), (p = u[h]) || ((p = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, d, a) || e.addEventListener && e.addEventListener(h, a)), 
f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
x.event.global[h] = !0);
},
remove: function(e, t, n, r, i) {
var o, a, s, u, l, c, f, p, h, d, g, _ = te.hasData(e) && te.get(e);
if (_ && (u = _.events)) {
for (l = (t = (t || "").match($) || [ "" ]).length; l--; ) if (h = g = (s = Ae.exec(t[l]) || [])[1], 
d = (s[2] || "").split(".").sort(), h) {
for (f = x.event.special[h] || {}, p = u[h = (r ? f.delegateType : f.bindType) || h] || [], 
s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; ) c = p[o], 
!i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
a && !p.length && (f.teardown && !1 !== f.teardown.call(e, d, _.handle) || x.removeEvent(e, h, _.handle), 
delete u[h]);
} else for (h in u) x.event.remove(e, h + t[l], n, r, !0);
x.isEmptyObject(u) && te.remove(e, "handle events");
}
},
dispatch: function(e) {
var t = x.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (te.get(this, "events") || {})[t.type] || [], c = x.event.special[t.type] || {};
for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
for (s = x.event.handlers.call(this, t, l), n = 0; (o = s[n++]) && !t.isPropagationStopped(); ) for (t.currentTarget = o.elem, 
r = 0; (a = o.handlers[r++]) && !t.isImmediatePropagationStopped(); ) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, 
t.data = a.data, void 0 !== (i = ((x.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), 
t.stopPropagation()));
return c.postDispatch && c.postDispatch.call(this, t), t.result;
}
},
handlers: function(e, t) {
var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? x(i, this).index(l) > -1 : x.find(i, this, null, [ l ]).length), 
a[i] && o.push(r);
o.length && s.push({
elem: l,
handlers: o
});
}
return l = this, u < t.length && s.push({
elem: l,
handlers: t.slice(u)
}), s;
},
addProp: function(e, t) {
Object.defineProperty(x.Event.prototype, e, {
enumerable: !0,
configurable: !0,
get: D(t) ? function() {
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
return e[x.expando] ? e : new x.Event(e);
},
special: {
load: {
noBubble: !0
},
focus: {
trigger: function() {
if (this !== Te() && this.focus) return this.focus(), !1;
},
delegateType: "focusin"
},
blur: {
trigger: function() {
if (this === Te() && this.blur) return this.blur(), !1;
},
delegateType: "focusout"
},
click: {
trigger: function() {
if ("checkbox" === this.type && this.click && j(this, "input")) return this.click(), 
!1;
},
_default: function(e) {
return j(e.target, "a");
}
},
beforeunload: {
postDispatch: function(e) {
void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
}
}
}
}, x.removeEvent = function(e, t, n) {
e.removeEventListener && e.removeEventListener(t, n);
}, x.Event = function(e, t) {
if (!(this instanceof x.Event)) return new x.Event(e, t);
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Le : Pe, 
this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0;
}, x.Event.prototype = {
constructor: x.Event,
isDefaultPrevented: Pe,
isPropagationStopped: Pe,
isImmediatePropagationStopped: Pe,
isSimulated: !1,
preventDefault: function() {
var e = this.originalEvent;
this.isDefaultPrevented = Le, e && !this.isSimulated && e.preventDefault();
},
stopPropagation: function() {
var e = this.originalEvent;
this.isPropagationStopped = Le, e && !this.isSimulated && e.stopPropagation();
},
stopImmediatePropagation: function() {
var e = this.originalEvent;
this.isImmediatePropagationStopped = Le, e && !this.isSimulated && e.stopImmediatePropagation(), 
this.stopPropagation();
}
}, x.each({
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
return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
}
}, x.event.addProp), x.each({
mouseenter: "mouseover",
mouseleave: "mouseout",
pointerenter: "pointerover",
pointerleave: "pointerout"
}, function(e, t) {
x.event.special[e] = {
delegateType: t,
bindType: t,
handle: function(e) {
var n, r = this, i = e.relatedTarget, o = e.handleObj;
return i && (i === r || x.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
e.type = t), n;
}
};
}), x.fn.extend({
on: function(e, t, n, r) {
return Ie(this, e, t, n, r);
},
one: function(e, t, n, r) {
return Ie(this, e, t, n, r, 1);
},
off: function(e, t, n) {
var r, i;
if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
this;
if ("object" == typeof e) {
for (i in e) this.off(i, t, e[i]);
return this;
}
return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Pe), 
this.each(function() {
x.event.remove(this, e, n, t);
});
}
});
var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Fe = /<script|<style|<link/i, ke = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function Oe(e, t) {
return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e;
}
function Re(e) {
return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
}
function Ne(e) {
return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
e;
}
function Be(e, t) {
var n, r, i, o, a, s, u, l;
if (1 === t.nodeType) {
if (te.hasData(e) && (o = te.access(e), a = te.set(t, o), l = o.events)) for (i in delete a.handle, 
a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) x.event.add(t, i, l[i][n]);
ne.hasData(e) && (s = ne.access(e), u = x.extend({}, s), ne.set(t, u));
}
}
function $e(e, t) {
var n = t.nodeName.toLowerCase();
"input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
}
function Ge(e, t, n, r) {
t = c.apply([], t);
var i, o, a, s, u, l, f = 0, p = e.length, h = p - 1, d = t[0], g = D(d);
if (g || p > 1 && "string" == typeof d && !y.checkClone && ke.test(d)) return e.each(function(i) {
var o = e.eq(i);
g && (t[0] = d.call(this, i, o.html())), Ge(o, t, n, r);
});
if (p && (o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), 
o || r)) {
for (s = (a = x.map(be(i, "script"), Re)).length; f < p; f++) u = i, f !== h && (u = x.clone(u, !0, !0), 
s && x.merge(a, be(u, "script"))), n.call(e[f], u, f);
if (s) for (l = a[a.length - 1].ownerDocument, x.map(a, Ne), f = 0; f < s; f++) u = a[f], 
ye.test(u.type || "") && !te.access(u, "globalEval") && x.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(u.src) : E(u.textContent.replace(Me, ""), l, u));
}
return e;
}
function Ue(e, t, n) {
for (var r, i = t ? x.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || x.cleanData(be(r)), 
r.parentNode && (n && x.contains(r.ownerDocument, r) && ve(be(r, "script")), r.parentNode.removeChild(r));
return e;
}
x.extend({
htmlPrefilter: function(e) {
return e.replace(je, "<$1></$2>");
},
clone: function(e, t, n) {
var r, i, o, a, s = e.cloneNode(!0), u = x.contains(e.ownerDocument, e);
if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (a = be(s), 
r = 0, i = (o = be(e)).length; r < i; r++) $e(o[r], a[r]);
if (t) if (n) for (o = o || be(e), a = a || be(s), r = 0, i = o.length; r < i; r++) Be(o[r], a[r]); else Be(e, s);
return (a = be(s, "script")).length > 0 && ve(a, !u && be(e, "script")), s;
},
cleanData: function(e) {
for (var t, n, r, i = x.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Q(n)) {
if (t = n[te.expando]) {
if (t.events) for (r in t.events) i[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
n[te.expando] = void 0;
}
n[ne.expando] && (n[ne.expando] = void 0);
}
}
}), x.fn.extend({
detach: function(e) {
return Ue(this, e, !0);
},
remove: function(e) {
return Ue(this, e);
},
text: function(e) {
return K(this, function(e) {
return void 0 === e ? x.text(this) : this.empty().each(function() {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
});
}, null, e, arguments.length);
},
append: function() {
return Ge(this, arguments, function(e) {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
});
},
prepend: function() {
return Ge(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = Oe(this, e);
t.insertBefore(e, t.firstChild);
}
});
},
before: function() {
return Ge(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
},
after: function() {
return Ge(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
});
},
empty: function() {
for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(be(e, !1)), 
e.textContent = "");
return this;
},
clone: function(e, t) {
return e = null != e && e, t = null == t ? e : t, this.map(function() {
return x.clone(this, e, t);
});
},
html: function(e) {
return K(this, function(e) {
var t = this[0] || {}, n = 0, r = this.length;
if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
if ("string" == typeof e && !Fe.test(e) && !De[(me.exec(e) || [ "", "" ])[1].toLowerCase()]) {
e = x.htmlPrefilter(e);
try {
for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(be(t, !1)), 
t.innerHTML = e);
t = 0;
} catch (e) {}
}
t && this.empty().append(e);
}, null, e, arguments.length);
},
replaceWith: function() {
var e = [];
return Ge(this, arguments, function(t) {
var n = this.parentNode;
x.inArray(this, e) < 0 && (x.cleanData(be(this)), n && n.replaceChild(t, this));
}, e);
}
}), x.each({
appendTo: "append",
prependTo: "prepend",
insertBefore: "before",
insertAfter: "after",
replaceAll: "replaceWith"
}, function(e, t) {
x.fn[e] = function(e) {
for (var n, r = [], i = x(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
x(i[a])[t](n), f.apply(r, n.get());
return this.pushStack(r);
};
});
var He = new RegExp("^(" + se + ")(?!px)[a-z%]+$", "i"), ze = function(e) {
var t = e.ownerDocument.defaultView;
return t && t.opener || (t = n), t.getComputedStyle(e);
}, Ve = new RegExp(le.join("|"), "i");
function qe(e, t, n) {
var r, i, o, a, s = e.style;
return (n = n || ze(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), 
!y.pixelBoxStyles() && He.test(a) && Ve.test(t) && (r = s.width, i = s.minWidth, 
o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
}
function We(e, t) {
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
Se.appendChild(l).appendChild(c);
var e = n.getComputedStyle(c);
r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), 
i = 36 === t(e.width), c.style.position = "absolute", o = 36 === c.offsetWidth || "absolute", 
Se.removeChild(l), c = null;
}
}
function t(e) {
return Math.round(parseFloat(e));
}
var r, i, o, a, u, l = s.createElement("div"), c = s.createElement("div");
c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
y.clearCloneStyle = "content-box" === c.style.backgroundClip, x.extend(y, {
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
return e(), u;
},
scrollboxSize: function() {
return e(), o;
}
}));
}();
var Ke = /^(none|table(?!-c[ea]).+)/, Ye = /^--/, Ze = {
position: "absolute",
visibility: "hidden",
display: "block"
}, Xe = {
letterSpacing: "0",
fontWeight: "400"
}, Je = [ "Webkit", "Moz", "ms" ], Qe = s.createElement("div").style;
function et(e) {
if (e in Qe) return e;
for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--; ) if ((e = Je[n] + t) in Qe) return e;
}
function tt(e) {
var t = x.cssProps[e];
return t || (t = x.cssProps[e] = et(e) || e), t;
}
function nt(e, t, n) {
var r = ue.exec(t);
return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
}
function rt(e, t, n, r, i, o) {
var a = "width" === t ? 1 : 0, s = 0, u = 0;
if (n === (r ? "border" : "content")) return 0;
for (;a < 4; a += 2) "margin" === n && (u += x.css(e, n + le[a], !0, i)), r ? ("content" === n && (u -= x.css(e, "padding" + le[a], !0, i)), 
"margin" !== n && (u -= x.css(e, "border" + le[a] + "Width", !0, i))) : (u += x.css(e, "padding" + le[a], !0, i), 
"padding" !== n ? u += x.css(e, "border" + le[a] + "Width", !0, i) : s += x.css(e, "border" + le[a] + "Width", !0, i));
return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), 
u;
}
function it(e, t, n) {
var r = ze(e), i = qe(e, t, r), o = "border-box" === x.css(e, "boxSizing", !1, r), a = o;
if (He.test(i)) {
if (!n) return i;
i = "auto";
}
return a = a && (y.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === x.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], 
a = !0), (i = parseFloat(i) || 0) + rt(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
}
function ot(e, t, n, r, i) {
return new ot.prototype.init(e, t, n, r, i);
}
x.extend({
cssHooks: {
opacity: {
get: function(e, t) {
if (t) {
var n = qe(e, "opacity");
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
var i, o, a, s = J(t), u = Ye.test(t), l = e.style;
if (u || (t = tt(s)), a = x.cssHooks[t] || x.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
"string" == (o = typeof n) && (i = ue.exec(n)) && i[1] && (n = pe(e, t, i), o = "number"), 
null != n && n == n && ("number" === o && (n += i && i[3] || (x.cssNumber[s] ? "" : "px")), 
y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
}
},
css: function(e, t, n, r) {
var i, o, a, s = J(t);
return Ye.test(t) || (t = tt(s)), (a = x.cssHooks[t] || x.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
void 0 === i && (i = qe(e, t, r)), "normal" === i && t in Xe && (i = Xe[t]), "" === n || n ? (o = parseFloat(i), 
!0 === n || isFinite(o) ? o || 0 : i) : i;
}
}), x.each([ "height", "width" ], function(e, t) {
x.cssHooks[t] = {
get: function(e, n, r) {
if (n) return !Ke.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : fe(e, Ze, function() {
return it(e, t, r);
});
},
set: function(e, n, r) {
var i, o = ze(e), a = "border-box" === x.css(e, "boxSizing", !1, o), s = r && rt(e, t, r, a, o);
return a && y.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)), 
s && (i = ue.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = x.css(e, t)), 
nt(e, n, s);
}
};
}), x.cssHooks.marginLeft = We(y.reliableMarginLeft, function(e, t) {
if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - fe(e, {
marginLeft: 0
}, function() {
return e.getBoundingClientRect().left;
})) + "px";
}), x.each({
margin: "",
padding: "",
border: "Width"
}, function(e, t) {
x.cssHooks[e + t] = {
expand: function(n) {
for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + le[r] + t] = o[r] || o[r - 2] || o[0];
return i;
}
}, "margin" !== e && (x.cssHooks[e + t].set = nt);
}), x.fn.extend({
css: function(e, t) {
return K(this, function(e, t, n) {
var r, i, o = {}, a = 0;
if (Array.isArray(t)) {
for (r = ze(e), i = t.length; a < i; a++) o[t[a]] = x.css(e, t[a], !1, r);
return o;
}
return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
}, e, t, arguments.length > 1);
}
}), x.Tween = ot, ot.prototype = {
constructor: ot,
init: function(e, t, n, r, i, o) {
this.elem = e, this.prop = n, this.easing = i || x.easing._default, this.options = t, 
this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
},
cur: function() {
var e = ot.propHooks[this.prop];
return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
},
run: function(e) {
var t, n = ot.propHooks[this.prop];
return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
n && n.set ? n.set(this) : ot.propHooks._default.set(this), this;
}
}, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
_default: {
get: function(e) {
var t;
return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
},
set: function(e) {
x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit);
}
}
}, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
set: function(e) {
e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
}
}, x.easing = {
linear: function(e) {
return e;
},
swing: function(e) {
return .5 - Math.cos(e * Math.PI) / 2;
},
_default: "swing"
}, x.fx = ot.prototype.init, x.fx.step = {};
var at, st, ut = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;
function ct() {
st && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, x.fx.interval), 
x.fx.tick());
}
function ft() {
return n.setTimeout(function() {
at = void 0;
}), at = Date.now();
}
function pt(e, t) {
var n, r = 0, i = {
height: e
};
for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = le[r])] = i["padding" + n] = e;
return t && (i.opacity = i.width = e), i;
}
function ht(e, t, n) {
for (var r, i = (_t.tweeners[t] || []).concat(_t.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
}
function dt(e, t, n) {
var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, h = {}, d = e.style, g = e.nodeType && ce(e), _ = te.get(e, "fxshow");
for (r in n.queue || (null == (a = x._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
s = a.empty.fire, a.empty.fire = function() {
a.unqueued || s();
}), a.unqueued++, p.always(function() {
p.always(function() {
a.unqueued--, x.queue(e, "fx").length || a.empty.fire();
});
})), t) if (i = t[r], ut.test(i)) {
if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
if ("show" !== i || !_ || void 0 === _[r]) continue;
g = !0;
}
h[r] = _ && _[r] || x.style(e, r);
}
if ((u = !x.isEmptyObject(t)) || !x.isEmptyObject(h)) for (r in f && 1 === e.nodeType && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
null == (l = _ && _.display) && (l = te.get(e, "display")), "none" === (c = x.css(e, "display")) && (l ? c = l : (ge([ e ], !0), 
l = e.style.display || l, c = x.css(e, "display"), ge([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === x.css(e, "float") && (u || (p.done(function() {
d.display = l;
}), null == l && (c = d.display, l = "none" === c ? "" : c)), d.display = "inline-block")), 
n.overflow && (d.overflow = "hidden", p.always(function() {
d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
})), u = !1, h) u || (_ ? "hidden" in _ && (g = _.hidden) : _ = te.access(e, "fxshow", {
display: l
}), o && (_.hidden = !g), g && ge([ e ], !0), p.done(function() {
for (r in g || ge([ e ]), te.remove(e, "fxshow"), h) x.style(e, r, h[r]);
})), u = ht(g ? _[r] : 0, r, p), r in _ || (_[r] = u.start, g && (u.end = u.start, 
u.start = 0));
}
function gt(e, t) {
var n, r, i, o, a;
for (n in e) if (i = t[r = J(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
n !== r && (e[r] = o, delete e[n]), (a = x.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), 
delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
}
function _t(e, t, n) {
var r, i, o = 0, a = _t.prefilters.length, s = x.Deferred().always(function() {
delete u.elem;
}), u = function() {
if (i) return !1;
for (var t = at || ft(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ l, 1, 0 ]), 
s.resolveWith(e, [ l ]), !1);
}, l = s.promise({
elem: e,
props: x.extend({}, t),
opts: x.extend(!0, {
specialEasing: {},
easing: x.easing._default
}, n),
originalProperties: t,
originalOptions: n,
startTime: at || ft(),
duration: n.duration,
tweens: [],
createTween: function(t, n) {
var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
return l.tweens.push(r), r;
},
stop: function(t) {
var n = 0, r = t ? l.tweens.length : 0;
if (i) return this;
for (i = !0; n < r; n++) l.tweens[n].run(1);
return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), 
this;
}
}), c = l.props;
for (gt(c, l.opts.specialEasing); o < a; o++) if (r = _t.prefilters[o].call(l, e, c, l.opts)) return D(r.stop) && (x._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), 
r;
return x.map(c, ht, l), D(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
x.fx.timer(x.extend(u, {
elem: e,
anim: l,
queue: l.opts.queue
})), l;
}
x.Animation = x.extend(_t, {
tweeners: {
"*": [ function(e, t) {
var n = this.createTween(e, t);
return pe(n.elem, e, ue.exec(t), n), n;
} ]
},
tweener: function(e, t) {
D(e) ? (t = e, e = [ "*" ]) : e = e.match($);
for (var n, r = 0, i = e.length; r < i; r++) n = e[r], _t.tweeners[n] = _t.tweeners[n] || [], 
_t.tweeners[n].unshift(t);
},
prefilters: [ dt ],
prefilter: function(e, t) {
t ? _t.prefilters.unshift(e) : _t.prefilters.push(e);
}
}), x.speed = function(e, t, n) {
var r = e && "object" == typeof e ? x.extend({}, e) : {
complete: n || !n && t || D(e) && e,
duration: e,
easing: n && t || t && !D(t) && t
};
return x.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in x.fx.speeds ? r.duration = x.fx.speeds[r.duration] : r.duration = x.fx.speeds._default), 
null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
D(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
}, r;
}, x.fn.extend({
fadeTo: function(e, t, n, r) {
return this.filter(ce).css("opacity", 0).show().end().animate({
opacity: t
}, e, n, r);
},
animate: function(e, t, n, r) {
var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function() {
var t = _t(this, x.extend({}, e), o);
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
var t = !0, i = null != e && e + "queueHooks", o = x.timers, a = te.get(this);
if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && lt.test(i) && r(a[i]);
for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
t = !1, o.splice(i, 1));
!t && n || x.dequeue(this, e);
});
},
finish: function(e) {
return !1 !== e && (e = e || "fx"), this.each(function() {
var t, n = te.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
o.splice(t, 1));
for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
delete n.finish;
});
}
}), x.each([ "toggle", "show", "hide" ], function(e, t) {
var n = x.fn[t];
x.fn[t] = function(e, r, i) {
return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, r, i);
};
}), x.each({
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
x.fn[e] = function(e, n, r) {
return this.animate(t, e, n, r);
};
}), x.timers = [], x.fx.tick = function() {
var e, t = 0, n = x.timers;
for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
n.length || x.fx.stop(), at = void 0;
}, x.fx.timer = function(e) {
x.timers.push(e), x.fx.start();
}, x.fx.interval = 13, x.fx.start = function() {
st || (st = !0, ct());
}, x.fx.stop = function() {
st = null;
}, x.fx.speeds = {
slow: 600,
fast: 200,
_default: 400
}, x.fn.delay = function(e, t) {
return e = x.fx && x.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
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
var mt, yt = x.expr.attrHandle;
x.fn.extend({
attr: function(e, t) {
return K(this, x.attr, e, t, arguments.length > 1);
},
removeAttr: function(e) {
return this.each(function() {
x.removeAttr(this, e);
});
}
}), x.extend({
attr: function(e, t, n) {
var r, i, o = e.nodeType;
if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (i = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? mt : void 0)), 
void 0 !== n ? null === n ? void x.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = x.find.attr(e, t)) ? void 0 : r);
},
attrHooks: {
type: {
set: function(e, t) {
if (!y.radioValue && "radio" === t && j(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
}
},
removeAttr: function(e, t) {
var n, r = 0, i = t && t.match($);
if (i && 1 === e.nodeType) for (;n = i[r++]; ) e.removeAttribute(n);
}
}), mt = {
set: function(e, t, n) {
return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
}
}, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = yt[t] || x.find.attr;
yt[t] = function(e, t, r) {
var i, o, a = t.toLowerCase();
return r || (o = yt[a], yt[a] = i, i = null != n(e, t, r) ? a : null, yt[a] = o), 
i;
};
});
var Dt = /^(?:input|select|textarea|button)$/i, bt = /^(?:a|area)$/i;
function vt(e) {
return (e.match($) || []).join(" ");
}
function Et(e) {
return e.getAttribute && e.getAttribute("class") || "";
}
function Ct(e) {
return Array.isArray(e) ? e : "string" == typeof e && e.match($) || [];
}
x.fn.extend({
prop: function(e, t) {
return K(this, x.prop, e, t, arguments.length > 1);
},
removeProp: function(e) {
return this.each(function() {
delete this[x.propFix[e] || e];
});
}
}), x.extend({
prop: function(e, t, n) {
var r, i, o = e.nodeType;
if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t, 
i = x.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
},
propHooks: {
tabIndex: {
get: function(e) {
var t = x.find.attr(e, "tabindex");
return t ? parseInt(t, 10) : Dt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
}
}
},
propFix: {
for: "htmlFor",
class: "className"
}
}), y.optSelected || (x.propHooks.selected = {
get: function(e) {
var t = e.parentNode;
return t && t.parentNode && t.parentNode.selectedIndex, null;
},
set: function(e) {
var t = e.parentNode;
t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
}
}), x.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
x.propFix[this.toLowerCase()] = this;
}), x.fn.extend({
addClass: function(e) {
var t, n, r, i, o, a, s, u = 0;
if (D(e)) return this.each(function(t) {
x(this).addClass(e.call(this, t, Et(this)));
});
if ((t = Ct(e)).length) for (;n = this[u++]; ) if (i = Et(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
for (a = 0; o = t[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
i !== (s = vt(r)) && n.setAttribute("class", s);
}
return this;
},
removeClass: function(e) {
var t, n, r, i, o, a, s, u = 0;
if (D(e)) return this.each(function(t) {
x(this).removeClass(e.call(this, t, Et(this)));
});
if (!arguments.length) return this.attr("class", "");
if ((t = Ct(e)).length) for (;n = this[u++]; ) if (i = Et(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
for (a = 0; o = t[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
i !== (s = vt(r)) && n.setAttribute("class", s);
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, r = "string" === n || Array.isArray(e);
return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : D(e) ? this.each(function(n) {
x(this).toggleClass(e.call(this, n, Et(this), t), t);
}) : this.each(function() {
var t, i, o, a;
if (r) for (i = 0, o = x(this), a = Ct(e); t = a[i++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = Et(this)) && te.set(this, "__className__", t), 
this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : te.get(this, "__className__") || ""));
});
},
hasClass: function(e) {
var t, n, r = 0;
for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + vt(Et(n)) + " ").indexOf(t) > -1) return !0;
return !1;
}
});
var St = /\r/g;
x.fn.extend({
val: function(e) {
var t, n, r, i = this[0];
return arguments.length ? (r = D(e), this.each(function(n) {
var i;
1 === this.nodeType && (null == (i = r ? e.call(this, n, x(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = x.map(i, function(e) {
return null == e ? "" : e + "";
})), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
})) : i ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(St, "") : null == n ? "" : n : void 0;
}
}), x.extend({
valHooks: {
option: {
get: function(e) {
var t = x.find.attr(e, "value");
return null != t ? t : vt(x.text(e));
}
},
select: {
get: function(e) {
var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
if (t = x(n).val(), a) return t;
s.push(t);
}
return s;
},
set: function(e, t) {
for (var n, r, i = e.options, o = x.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = x.inArray(x.valHooks.option.get(r), o) > -1) && (n = !0);
return n || (e.selectedIndex = -1), o;
}
}
}
}), x.each([ "radio", "checkbox" ], function() {
x.valHooks[this] = {
set: function(e, t) {
if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1;
}
}, y.checkOn || (x.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" : e.value;
});
}), y.focusin = "onfocusin" in n;
var xt = /^(?:focusinfocus|focusoutblur)$/, wt = function(e) {
e.stopPropagation();
};
x.extend(x.event, {
trigger: function(e, t, r, i) {
var o, a, u, l, c, f, p, h, d = [ r || s ], _ = g.call(e, "type") ? e.type : e, m = g.call(e, "namespace") ? e.namespace.split(".") : [];
if (a = h = u = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(_ + x.event.triggered) && (_.indexOf(".") > -1 && (_ = (m = _.split(".")).shift(), 
m.sort()), c = _.indexOf(":") < 0 && "on" + _, (e = e[x.expando] ? e : new x.Event(_, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
e.result = void 0, e.target || (e.target = r), t = null == t ? [ e ] : x.makeArray(t, [ e ]), 
p = x.event.special[_] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
if (!i && !p.noBubble && !b(r)) {
for (l = p.delegateType || _, xt.test(l + _) || (a = a.parentNode); a; a = a.parentNode) d.push(a), 
u = a;
u === (r.ownerDocument || s) && d.push(u.defaultView || u.parentWindow || n);
}
for (o = 0; (a = d[o++]) && !e.isPropagationStopped(); ) h = a, e.type = o > 1 ? l : p.bindType || _, 
(f = (te.get(a, "events") || {})[e.type] && te.get(a, "handle")) && f.apply(a, t), 
(f = c && a[c]) && f.apply && Q(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
return e.type = _, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(d.pop(), t) || !Q(r) || c && D(r[_]) && !b(r) && ((u = r[c]) && (r[c] = null), 
x.event.triggered = _, e.isPropagationStopped() && h.addEventListener(_, wt), r[_](), 
e.isPropagationStopped() && h.removeEventListener(_, wt), x.event.triggered = void 0, 
u && (r[c] = u)), e.result;
}
},
simulate: function(e, t, n) {
var r = x.extend(new x.Event(), n, {
type: e,
isSimulated: !0
});
x.event.trigger(r, null, t);
}
}), x.fn.extend({
trigger: function(e, t) {
return this.each(function() {
x.event.trigger(e, t, this);
});
},
triggerHandler: function(e, t) {
var n = this[0];
if (n) return x.event.trigger(e, t, n, !0);
}
}), y.focusin || x.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
var n = function(e) {
x.event.simulate(t, e.target, x.event.fix(e));
};
x.event.special[t] = {
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
var At = n.location, Lt = Date.now(), Pt = /\?/;
x.parseXML = function(e) {
var t;
if (!e || "string" != typeof e) return null;
try {
t = new n.DOMParser().parseFromString(e, "text/xml");
} catch (e) {
t = void 0;
}
return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), 
t;
};
var Tt = /\[\]$/, It = /\r?\n/g, jt = /^(?:submit|button|image|reset|file)$/i, Ft = /^(?:input|select|textarea|keygen)/i;
function kt(e, t, n, r) {
var i;
if (Array.isArray(t)) x.each(t, function(t, i) {
n || Tt.test(e) ? r(e, i) : kt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
}); else if (n || "object" !== C(t)) r(e, t); else for (i in t) kt(e + "[" + i + "]", t[i], n, r);
}
x.param = function(e, t) {
var n, r = [], i = function(e, t) {
var n = D(t) ? t() : t;
r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
};
if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
i(this.name, this.value);
}); else for (n in e) kt(n, e[n], t, i);
return r.join("&");
}, x.fn.extend({
serialize: function() {
return x.param(this.serializeArray());
},
serializeArray: function() {
return this.map(function() {
var e = x.prop(this, "elements");
return e ? x.makeArray(e) : this;
}).filter(function() {
var e = this.type;
return this.name && !x(this).is(":disabled") && Ft.test(this.nodeName) && !jt.test(e) && (this.checked || !_e.test(e));
}).map(function(e, t) {
var n = x(this).val();
return null == n ? null : Array.isArray(n) ? x.map(n, function(e) {
return {
name: t.name,
value: e.replace(It, "\r\n")
};
}) : {
name: t.name,
value: n.replace(It, "\r\n")
};
}).get();
}
});
var Mt = /%20/g, Ot = /#.*$/, Rt = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, $t = /^(?:GET|HEAD)$/, Gt = /^\/\//, Ut = {}, Ht = {}, zt = "*/".concat("*"), Vt = s.createElement("a");
function qt(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var r, i = 0, o = t.toLowerCase().match($) || [];
if (D(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
};
}
function Wt(e, t, n, r) {
var i = {}, o = e === Ht;
function a(s) {
var u;
return i[s] = !0, x.each(e[s] || [], function(e, s) {
var l = s(t, n, r);
return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
a(l), !1);
}), u;
}
return a(t.dataTypes[0]) || !i["*"] && a("*");
}
function Kt(e, t) {
var n, r, i = x.ajaxSettings.flatOptions || {};
for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
return r && x.extend(!0, e, r), e;
}
function Yt(e, t, n) {
for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
if (r) for (i in s) if (s[i] && s[i].test(r)) {
u.unshift(i);
break;
}
if (u[0] in n) o = u[0]; else {
for (i in n) {
if (!u[0] || e.converters[i + " " + u[0]]) {
o = i;
break;
}
a || (a = i);
}
o = o || a;
}
if (o) return o !== u[0] && u.unshift(o), n[o];
}
function Zt(e, t, n, r) {
var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
!u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
break;
}
if (!0 !== a) if (a && e.throws) t = a(t); else try {
t = a(t);
} catch (e) {
return {
state: "parsererror",
error: a ? e : "No conversion from " + u + " to " + o
};
}
}
return {
state: "success",
data: t
};
}
Vt.href = At.href, x.extend({
active: 0,
lastModified: {},
etag: {},
ajaxSettings: {
url: At.href,
type: "GET",
isLocal: Bt.test(At.protocol),
global: !0,
processData: !0,
async: !0,
contentType: "application/x-www-form-urlencoded; charset=UTF-8",
accepts: {
"*": zt,
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
"text xml": x.parseXML
},
flatOptions: {
url: !0,
context: !0
}
},
ajaxSetup: function(e, t) {
return t ? Kt(Kt(e, x.ajaxSettings), t) : Kt(x.ajaxSettings, e);
},
ajaxPrefilter: qt(Ut),
ajaxTransport: qt(Ht),
ajax: function(e, t) {
"object" == typeof e && (t = e, e = void 0), t = t || {};
var r, i, o, a, u, l, c, f, p, h, d = x.ajaxSetup({}, t), g = d.context || d, _ = d.context && (g.nodeType || g.jquery) ? x(g) : x.event, m = x.Deferred(), y = x.Callbacks("once memory"), D = d.statusCode || {}, b = {}, v = {}, E = "canceled", C = {
readyState: 0,
getResponseHeader: function(e) {
var t;
if (c) {
if (!a) for (a = {}; t = Nt.exec(o); ) a[t[1].toLowerCase()] = t[2];
t = a[e.toLowerCase()];
}
return null == t ? null : t;
},
getAllResponseHeaders: function() {
return c ? o : null;
},
setRequestHeader: function(e, t) {
return null == c && (e = v[e.toLowerCase()] = v[e.toLowerCase()] || e, b[e] = t), 
this;
},
overrideMimeType: function(e) {
return null == c && (d.mimeType = e), this;
},
statusCode: function(e) {
var t;
if (e) if (c) C.always(e[C.status]); else for (t in e) D[t] = [ D[t], e[t] ];
return this;
},
abort: function(e) {
var t = e || E;
return r && r.abort(t), S(0, t), this;
}
};
if (m.promise(C), d.url = ((e || d.url || At.href) + "").replace(Gt, At.protocol + "//"), 
d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match($) || [ "" ], 
null == d.crossDomain) {
l = s.createElement("a");
try {
l.href = d.url, l.href = l.href, d.crossDomain = Vt.protocol + "//" + Vt.host != l.protocol + "//" + l.host;
} catch (e) {
d.crossDomain = !0;
}
}
if (d.data && d.processData && "string" != typeof d.data && (d.data = x.param(d.data, d.traditional)), 
Wt(Ut, d, t, C), c) return C;
for (p in (f = x.event && d.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), 
d.type = d.type.toUpperCase(), d.hasContent = !$t.test(d.type), i = d.url.replace(Ot, ""), 
d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Mt, "+")) : (h = d.url.slice(i.length), 
d.data && (d.processData || "string" == typeof d.data) && (i += (Pt.test(i) ? "&" : "?") + d.data, 
delete d.data), !1 === d.cache && (i = i.replace(Rt, "$1"), h = (Pt.test(i) ? "&" : "?") + "_=" + Lt++ + h), 
d.url = i + h), d.ifModified && (x.lastModified[i] && C.setRequestHeader("If-Modified-Since", x.lastModified[i]), 
x.etag[i] && C.setRequestHeader("If-None-Match", x.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && C.setRequestHeader("Content-Type", d.contentType), 
C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]), 
d.headers) C.setRequestHeader(p, d.headers[p]);
if (d.beforeSend && (!1 === d.beforeSend.call(g, C, d) || c)) return C.abort();
if (E = "abort", y.add(d.complete), C.done(d.success), C.fail(d.error), r = Wt(Ht, d, t, C)) {
if (C.readyState = 1, f && _.trigger("ajaxSend", [ C, d ]), c) return C;
d.async && d.timeout > 0 && (u = n.setTimeout(function() {
C.abort("timeout");
}, d.timeout));
try {
c = !1, r.send(b, S);
} catch (e) {
if (c) throw e;
S(-1, e);
}
} else S(-1, "No Transport");
function S(e, t, a, s) {
var l, p, h, b, v, E = t;
c || (c = !0, u && n.clearTimeout(u), r = void 0, o = s || "", C.readyState = e > 0 ? 4 : 0, 
l = e >= 200 && e < 300 || 304 === e, a && (b = Yt(d, C, a)), b = Zt(d, b, C, l), 
l ? (d.ifModified && ((v = C.getResponseHeader("Last-Modified")) && (x.lastModified[i] = v), 
(v = C.getResponseHeader("etag")) && (x.etag[i] = v)), 204 === e || "HEAD" === d.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = b.state, 
p = b.data, l = !(h = b.error))) : (h = E, !e && E || (E = "error", e < 0 && (e = 0))), 
C.status = e, C.statusText = (t || E) + "", l ? m.resolveWith(g, [ p, E, C ]) : m.rejectWith(g, [ C, E, h ]), 
C.statusCode(D), D = void 0, f && _.trigger(l ? "ajaxSuccess" : "ajaxError", [ C, d, l ? p : h ]), 
y.fireWith(g, [ C, E ]), f && (_.trigger("ajaxComplete", [ C, d ]), --x.active || x.event.trigger("ajaxStop")));
}
return C;
},
getJSON: function(e, t, n) {
return x.get(e, t, n, "json");
},
getScript: function(e, t) {
return x.get(e, void 0, t, "script");
}
}), x.each([ "get", "post" ], function(e, t) {
x[t] = function(e, n, r, i) {
return D(n) && (i = i || r, r = n, n = void 0), x.ajax(x.extend({
url: e,
type: t,
dataType: i,
data: n,
success: r
}, x.isPlainObject(e) && e));
};
}), x._evalUrl = function(e) {
return x.ajax({
url: e,
type: "GET",
dataType: "script",
cache: !0,
async: !1,
global: !1,
throws: !0
});
}, x.fn.extend({
wrapAll: function(e) {
var t;
return this[0] && (D(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), 
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
return e;
}).append(this)), this;
},
wrapInner: function(e) {
return D(e) ? this.each(function(t) {
x(this).wrapInner(e.call(this, t));
}) : this.each(function() {
var t = x(this), n = t.contents();
n.length ? n.wrapAll(e) : t.append(e);
});
},
wrap: function(e) {
var t = D(e);
return this.each(function(n) {
x(this).wrapAll(t ? e.call(this, n) : e);
});
},
unwrap: function(e) {
return this.parent(e).not("body").each(function() {
x(this).replaceWith(this.childNodes);
}), this;
}
}), x.expr.pseudos.hidden = function(e) {
return !x.expr.pseudos.visible(e);
}, x.expr.pseudos.visible = function(e) {
return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}, x.ajaxSettings.xhr = function() {
try {
return new n.XMLHttpRequest();
} catch (e) {}
};
var Xt = {
0: 200,
1223: 204
}, Jt = x.ajaxSettings.xhr();
y.cors = !!Jt && "withCredentials" in Jt, y.ajax = Jt = !!Jt, x.ajaxTransport(function(e) {
var t, r;
if (y.cors || Jt && !e.crossDomain) return {
send: function(i, o) {
var a, s = e.xhr();
if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), 
i) s.setRequestHeader(a, i[a]);
t = function(e) {
return function() {
t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
"abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Xt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
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
}), x.ajaxPrefilter(function(e) {
e.crossDomain && (e.contents.script = !1);
}), x.ajaxSetup({
accepts: {
script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents: {
script: /\b(?:java|ecma)script\b/
},
converters: {
"text script": function(e) {
return x.globalEval(e), e;
}
}
}), x.ajaxPrefilter("script", function(e) {
void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
}), x.ajaxTransport("script", function(e) {
var t, n;
if (e.crossDomain) return {
send: function(r, i) {
t = x("<script>").prop({
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
var Qt = [], en = /(=)\?(?=&|$)|\?\?/;
x.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
var e = Qt.pop() || x.expando + "_" + Lt++;
return this[e] = !0, e;
}
}), x.ajaxPrefilter("json jsonp", function(e, t, r) {
var i, o, a, s = !1 !== e.jsonp && (en.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = D(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
s ? e[s] = e[s].replace(en, "$1" + i) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
e.converters["script json"] = function() {
return a || x.error(i + " was not called"), a[0];
}, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
a = arguments;
}, r.always(function() {
void 0 === o ? x(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, 
Qt.push(i)), a && D(o) && o(a[0]), a = o = void 0;
}), "script";
}), y.createHTMLDocument = function() {
var e = s.implementation.createHTMLDocument("").body;
return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
}(), x.parseHTML = function(e, t, n) {
return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, 
t.head.appendChild(r)) : t = s), o = !n && [], (i = F.exec(e)) ? [ t.createElement(i[1]) ] : (i = Ce([ e ], t, o), 
o && o.length && x(o).remove(), x.merge([], i.childNodes)));
var r, i, o;
}, x.fn.load = function(e, t, n) {
var r, i, o, a = this, s = e.indexOf(" ");
return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), D(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
a.length > 0 && x.ajax({
url: e,
type: i || "GET",
dataType: "html",
data: t
}).done(function(e) {
o = arguments, a.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e);
}).always(n && function(e, t) {
a.each(function() {
n.apply(this, o || [ e.responseText, t, e ]);
});
}), this;
}, x.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
x.fn[t] = function(e) {
return this.on(t, e);
};
}), x.expr.pseudos.animated = function(e) {
return x.grep(x.timers, function(t) {
return e === t.elem;
}).length;
}, x.offset = {
setOffset: function(e, t, n) {
var r, i, o, a, s, u, l, c = x.css(e, "position"), f = x(e), p = {};
"static" === c && (e.style.position = "relative"), s = f.offset(), o = x.css(e, "top"), 
u = x.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, 
i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), D(t) && (t = t.call(e, n, x.extend({}, s))), 
null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), 
"using" in t ? t.using.call(e, p) : f.css(p);
}
}, x.fn.extend({
offset: function(e) {
if (arguments.length) return void 0 === e ? this : this.each(function(t) {
x.offset.setOffset(this, e, t);
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
if ("fixed" === x.css(r, "position")) t = r.getBoundingClientRect(); else {
for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position"); ) e = e.parentNode;
e && e !== r && 1 === e.nodeType && ((i = x(e).offset()).top += x.css(e, "borderTopWidth", !0), 
i.left += x.css(e, "borderLeftWidth", !0));
}
return {
top: t.top - i.top - x.css(r, "marginTop", !0),
left: t.left - i.left - x.css(r, "marginLeft", !0)
};
}
},
offsetParent: function() {
return this.map(function() {
for (var e = this.offsetParent; e && "static" === x.css(e, "position"); ) e = e.offsetParent;
return e || Se;
});
}
}), x.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, t) {
var n = "pageYOffset" === t;
x.fn[e] = function(r) {
return K(this, function(e, r, i) {
var o;
if (b(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
}, e, r, arguments.length);
};
}), x.each([ "top", "left" ], function(e, t) {
x.cssHooks[t] = We(y.pixelPosition, function(e, n) {
if (n) return n = qe(e, t), He.test(n) ? x(e).position()[t] + "px" : n;
});
}), x.each({
Height: "height",
Width: "width"
}, function(e, t) {
x.each({
padding: "inner" + e,
content: t,
"": "outer" + e
}, function(n, r) {
x.fn[r] = function(i, o) {
var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
return K(this, function(t, n, i) {
var o;
return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? x.css(t, n, s) : x.style(t, n, i, s);
}, t, a ? i : void 0, a);
};
});
}), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
x.fn[t] = function(e, n) {
return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
};
}), x.fn.extend({
hover: function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
}
}), x.fn.extend({
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
}), x.proxy = function(e, t) {
var n, r, i;
if ("string" == typeof t && (n = e[t], t = e, e = n), D(e)) return r = l.call(arguments, 2), 
(i = function() {
return e.apply(t || this, r.concat(l.call(arguments)));
}).guid = e.guid = e.guid || x.guid++, i;
}, x.holdReady = function(e) {
e ? x.readyWait++ : x.ready(!0);
}, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = j, x.isFunction = D, 
x.isWindow = b, x.camelCase = J, x.type = C, x.now = Date.now, x.isNumeric = function(e) {
var t = x.type(e);
return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
}, r = [], void 0 === (i = function() {
return x;
}.apply(t, r)) || (e.exports = i);
var tn = n.jQuery, nn = n.$;
return x.noConflict = function(e) {
return n.$ === x && (n.$ = nn), e && n.jQuery === x && (n.jQuery = tn), x;
}, o || (n.jQuery = n.$ = x), x;
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
for (var n, r = "php", i = [ "source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment" ], o, a = [ new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "()", "(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?", "(?:\\/\\/\\/?)?", "((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)", "(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))", "(?:\\?([^#]*))?(?:#(.*))?)" ].join("")) ][0].exec(e), s = {}, u = 14; u--; ) a[u] && (s[i[u]] = a[u]);
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
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(61), i = new Map();
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
function u() {
let e = [];
return i.forEach(function(t, n, r) {
e.push(n);
}), e;
}
t.registerMenuCommand = o, t.getLabel = a, t.callMenuCommand = s, t.listMenuCommand = u;
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
"./novel-plus-sc/": 3,
"./novel-plus-sc/index": 3,
"./novel-plus-sc/index.js": 3,
"./novel-plus-sc/index.user": 7,
"./novel-plus-sc/index.user.js": 7,
"./novel-plus-sc/lib/metadata": 18,
"./novel-plus-sc/lib/metadata.js": 18,
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
"./novel-plus-sc/site/syosetu": 19,
"./novel-plus-sc/site/syosetu.js": 19
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
}, i.resolve = o, e.exports = i, i.id = 63;
}, function(e, t, n) {
e.exports = _, _.Minimatch = m;
var r = {
sep: "/"
};
try {
r = n(65);
} catch (e) {}
var i = _.GLOBSTAR = m.GLOBSTAR = {}, o = n(66), a = {
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
}, s = "[^/]", u = s + "*?", l = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", c = "(?:(?!(?:\\/|^)\\.).)*?", f = p("().*{}+?[]^$\\!");
function p(e) {
return e.split("").reduce(function(e, t) {
return e[t] = !0, e;
}, {});
}
var h = /\/+/;
function d(e, t) {
return t = t || {}, function(n, r, i) {
return _(n, e, t);
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
function _(e, t, n) {
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
function D() {
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
_.filter = d, _.defaults = function(e) {
if (!e || !Object.keys(e).length) return _;
var t = _, n = function n(r, i, o) {
return t.minimatch(r, i, g(e, o));
};
return n.Minimatch = function n(r, i) {
return new t.Minimatch(r, g(e, i));
}, n;
}, m.defaults = function(e) {
return e && Object.keys(e).length ? _.defaults(e).Minimatch : m;
}, m.prototype.debug = function() {}, m.prototype.make = y, m.prototype.parseNegate = D, 
_.braceExpand = function(e, t) {
return b(e, t);
}, m.prototype.braceExpand = b, m.prototype.parse = E;
var v = {};
function E(e, t) {
if (e.length > 65536) throw new TypeError("pattern is too long");
var n = this.options;
if (!n.noglobstar && "**" === e) return i;
if ("" === e) return "";
var r = "", o = !!n.nocase, l = !1, c = [], p = [], h, d = !1, g = -1, _ = -1, m = "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", y = this;
function D() {
if (h) {
switch (h) {
case "*":
r += u, o = !0;
break;

case "?":
r += s, o = !0;
break;

default:
r += "\\" + h;
break;
}
y.debug("clearStateChar %j %j", h, r), h = !1;
}
}
for (var b = 0, E = e.length, C; b < E && (C = e.charAt(b)); b++) if (this.debug("%s\t%s %s %j", e, b, r, C), 
l && f[C]) r += "\\" + C, l = !1; else switch (C) {
case "/":
return !1;

case "\\":
D(), l = !0;
continue;

case "?":
case "*":
case "+":
case "@":
case "!":
if (this.debug("%s\t%s %s %j <-- stateChar", e, b, r, C), d) {
this.debug("  in class"), "!" === C && b === _ + 1 && (C = "^"), r += C;
continue;
}
y.debug("call clearStateChar %j", h), D(), h = C, n.noext && D();
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
c.push({
type: h,
start: b - 1,
reStart: r.length,
open: a[h].open,
close: a[h].close
}), r += "!" === h ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", h, r), h = !1;
continue;

case ")":
if (d || !c.length) {
r += "\\)";
continue;
}
D(), o = !0;
var S = c.pop();
r += S.close, "!" === S.type && p.push(S), S.reEnd = r.length;
continue;

case "|":
if (d || !c.length || l) {
r += "\\|", l = !1;
continue;
}
D(), r += "|";
continue;

case "[":
if (D(), d) {
r += "\\" + C;
continue;
}
d = !0, _ = b, g = r.length, r += C;
continue;

case "]":
if (b === _ + 1 || !d) {
r += "\\" + C, l = !1;
continue;
}
if (d) {
var w = e.substring(_ + 1, b);
try {
RegExp("[" + w + "]");
} catch (e) {
var A = this.parse(w, v);
r = r.substr(0, g) + "\\[" + A[0] + "\\]", o = o || A[1], d = !1;
continue;
}
}
o = !0, d = !1, r += C;
continue;

default:
D(), l ? l = !1 : !f[C] || "^" === C && d || (r += "\\"), r += C;
}
for (d && (w = e.substr(_ + 1), A = this.parse(w, v), r = r.substr(0, g) + "\\[" + A[0], 
o = o || A[1]), S = c.pop(); S; S = c.pop()) {
var L = r.slice(S.reStart + S.open.length);
this.debug("setting tail", r, S), L = L.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
return n || (n = "\\"), t + t + n + "|";
}), this.debug("tail=%j\n   %s", L, L, S, r);
var P = "*" === S.type ? u : "?" === S.type ? s : "\\" + S.type;
o = !0, r = r.slice(0, S.reStart) + P + "\\(" + L;
}
D(), l && (r += "\\\\");
var T = !1;
switch (r.charAt(0)) {
case ".":
case "[":
case "(":
T = !0;
}
for (var I = p.length - 1; I > -1; I--) {
var j = p[I], F = r.slice(0, j.reStart), k = r.slice(j.reStart, j.reEnd - 8), M = r.slice(j.reEnd - 8, j.reEnd), O = r.slice(j.reEnd);
M += O;
var R = F.split("(").length - 1, N = O;
for (b = 0; b < R; b++) N = N.replace(/\)[+*?]?/, "");
var B = "", $;
"" === (O = N) && t !== v && (B = "$"), r = F + k + O + B + M;
}
if ("" !== r && o && (r = "(?=.)" + r), T && (r = m + r), t === v) return [ r, o ];
if (!o) return x(e);
var G = n.nocase ? "i" : "";
try {
var U = new RegExp("^" + r + "$", G);
} catch (e) {
return new RegExp("$.");
}
return U._glob = e, U._src = r, U;
}
function C() {
if (this.regexp || !1 === this.regexp) return this.regexp;
var e = this.set;
if (!e.length) return this.regexp = !1, this.regexp;
var t = this.options, n = t.noglobstar ? u : t.dot ? l : c, r = t.nocase ? "i" : "", o = e.map(function(e) {
return e.map(function(e) {
return e === i ? n : "string" == typeof e ? w(e) : e._src;
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
function S(e, t) {
if (this.debug("match", e, this.pattern), this.comment) return !1;
if (this.empty) return "" === e;
if ("/" === e && t) return !0;
var n = this.options;
"/" !== r.sep && (e = e.split(r.sep).join("/")), e = e.split(h), this.debug(this.pattern, "split", e);
var i = this.set, o, a;
for (this.debug(this.pattern, "set", i), a = e.length - 1; a >= 0 && !(o = e[a]); a--) ;
for (a = 0; a < i.length; a++) {
var s = i[a], u = e, l;
if (n.matchBase && 1 === s.length && (u = [ o ]), this.matchOne(u, s, t)) return !!n.flipNegate || !this.negate;
}
return !n.flipNegate && this.negate;
}
function x(e) {
return e.replace(/\\(.)/g, "$1");
}
function w(e) {
return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
_.makeRe = function(e, t) {
return new m(e, t || {}).makeRe();
}, m.prototype.makeRe = C, _.match = function(e, t, n) {
var r = new m(t, n = n || {});
return e = e.filter(function(e) {
return r.match(e);
}), r.options.nonull && !e.length && e.push(t), e;
}, m.prototype.match = S, m.prototype.matchOne = function(e, t, n) {
var r = this.options, o;
this.debug("matchOne", {
this: this,
file: e,
pattern: t
}), this.debug("matchOne", e.length, t.length);
for (var a = 0, s = 0, u = e.length, l = t.length; a < u && s < l; a++, s++) {
this.debug("matchOne loop");
var c = t[s], f = e[a], p;
if (this.debug(t, c, f), !1 === c) return !1;
if (c === i) {
this.debug("GLOBSTAR", [ t, c, f ]);
var h = a, d = s + 1;
if (d === l) {
for (this.debug("** at the end"); a < u; a++) if ("." === e[a] || ".." === e[a] || !r.dot && "." === e[a].charAt(0)) return !1;
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
if ("string" == typeof c ? (p = r.nocase ? f.toLowerCase() === c.toLowerCase() : f === c, 
this.debug("string match", c, f, p)) : (p = f.match(c), this.debug("pattern match", c, f, p)), 
!p) return !1;
}
if (a === u && s === l) return !0;
if (a === u) return n;
if (s === l) return a === u - 1 && "" === e[a];
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
for (var i = r(e.split("/")), o = r(n.split("/")), a = Math.min(i.length, o.length), s = a, u = 0; u < a; u++) if (i[u] !== o[u]) {
s = u;
break;
}
for (var l = [], u = s; u < i.length; u++) l.push("..");
return (l = l.concat(o.slice(s))).join("/");
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
}).call(this, n(34));
}, function(e, t, n) {
var r = n(67), i = n(68);
e.exports = d;
var o = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", s = "\0CLOSE" + Math.random() + "\0", u = "\0COMMA" + Math.random() + "\0", l = "\0PERIOD" + Math.random() + "\0";
function c(e) {
return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function f(e) {
return e.split("\\\\").join(o).split("\\{").join(a).split("\\}").join(s).split("\\,").join(u).split("\\.").join(l);
}
function p(e) {
return e.split(o).join("\\").split(a).join("{").split(s).join("}").split(u).join(",").split(l).join(".");
}
function h(e) {
if (!e) return [ "" ];
var t = [], n = i("{", "}", e);
if (!n) return e.split(",");
var r = n.pre, o = n.body, a = n.post, s = r.split(",");
s[s.length - 1] += "{" + o + "}";
var u = h(a);
return a.length && (s[s.length - 1] += u.shift(), s.push.apply(s, u)), t.push.apply(t, s), 
t;
}
function d(e) {
return e ? ("{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2)), b(f(e), !0).map(p)) : [];
}
function g(e) {
return e;
}
function _(e) {
return "{" + e + "}";
}
function m(e) {
return /^-?0\d/.test(e);
}
function y(e, t) {
return e <= t;
}
function D(e, t) {
return e >= t;
}
function b(e, t) {
var n = [], o = i("{", "}", e);
if (!o || /\$$/.test(o.pre)) return [ e ];
var a = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body), u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body), l = a || u, f = o.body.indexOf(",") >= 0, p, d;
if (!l && !f) return o.post.match(/,.*\}/) ? b(e = o.pre + "{" + o.body + s + o.post) : [ e ];
if (l) p = o.body.split(/\.\./); else if (1 === (p = h(o.body)).length && 1 === (p = b(p[0], !1).map(_)).length) return (d = o.post.length ? b(o.post, !1) : [ "" ]).map(function(e) {
return o.pre + p[0] + e;
});
var g = o.pre, d = o.post.length ? b(o.post, !1) : [ "" ], v;
if (l) {
var E = c(p[0]), C = c(p[1]), S = Math.max(p[0].length, p[1].length), x = 3 == p.length ? Math.abs(c(p[2])) : 1, w = y, A;
C < E && (x *= -1, w = D);
var L = p.some(m);
v = [];
for (var P = E; w(P, C); P += x) {
var T;
if (u) "\\" === (T = String.fromCharCode(P)) && (T = ""); else if (T = String(P), 
L) {
var I = S - T.length;
if (I > 0) {
var j = new Array(I + 1).join("0");
T = P < 0 ? "-" + j + T.slice(1) : j + T;
}
}
v.push(T);
}
} else v = r(p, function(e) {
return b(e, !1);
});
for (var F = 0; F < v.length; F++) for (var k = 0; k < d.length; k++) {
var M = g + v[F] + d[k];
(!t || l || M) && n.push(M);
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
var r, i, o, a, s, u = n.indexOf(e), l = n.indexOf(t, u + 1), c = u;
if (u >= 0 && l > 0) {
for (r = [], o = n.length; c >= 0 && !s; ) c == u ? (r.push(c), u = n.indexOf(e, c + 1)) : 1 == r.length ? s = [ r.pop(), l ] : ((i = r.pop()) < o && (o = i, 
a = l), l = n.indexOf(t, c + 1)), c = u < l && u >= 0 ? u : l;
r.length && (s = [ o, a ]);
}
return s;
}
e.exports = r, r.range = o;
}, function(e, t, n) {
"use strict";
e.exports = (e => !Number.isNaN(e) && e >= 4352 && (e <= 4447 || 9001 === e || 9002 === e || 11904 <= e && e <= 12871 && 12351 !== e || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141));
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(38), i = n(37);
function o(e) {
if ("string" != typeof e || 0 === e.length) return 0;
e = r(e);
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
const t = [ "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))" ].join("|");
return new RegExp(t, e.onlyFirst ? void 0 : "g");
});
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
return "[object RegExp]" === t || "[object Date]" === t || a(e);
}
var r, i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103, o;
function a(e) {
return e.$$typeof === i;
}
function s(e) {
return Array.isArray(e) ? [] : {};
}
function u(e, t) {
return !1 !== t.clone && t.isMergeableObject(e) ? f(s(e), e, t) : e;
}
function l(e, t, n) {
return e.concat(t).map(function(e) {
return u(e, n);
});
}
function c(e, t, n) {
var r = {};
return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
r[t] = u(e[t], n);
}), Object.keys(t).forEach(function(i) {
n.isMergeableObject(t[i]) && e[i] ? r[i] = f(e[i], t[i], n) : r[i] = u(t[i], n);
}), r;
}
function f(t, n, r) {
(r = r || {}).arrayMerge = r.arrayMerge || l, r.isMergeableObject = r.isMergeableObject || e;
var i = Array.isArray(n), o, a;
return i === Array.isArray(t) ? i ? r.arrayMerge(t, n, r) : c(t, n, r) : u(n, r);
}
return f.all = function e(t, n) {
if (!Array.isArray(t)) throw new Error("first argument should be an array");
return t.reduce(function(e, t) {
return f(e, t, n);
}, {});
}, f;
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
}), r(n(23));
const i = n(23);
t.default = i.zh2jp;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(77), i = n(79);
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
let r = UString.toArray(e), i = 0, o = 0, a = r[r.length - 1];
do {
if (-1 != (i = n.indexOf(r[0], o))) {
if (n.slice(i, i + r.length).join("") == e) return t + i;
o = i, r.length > 1 && (o = (i = n.indexOf(a, i + 1)) - r.length);
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
const r = n(78), i = r.default;
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
for (;n < e.length; ) c(e[n + (r += i(n + r, e))]) && r++, u(e[n + r]) && r++, l(e[n + r]) && r++, 
f(e[n + r]) ? r++ : (t.push(e.substring(n, n + r)), n += r, r = 0);
return t;
}
function i(e, t) {
const n = t[e];
if (!o(n) || e === t.length - 1) return 1;
const r = n + t[e + 1];
let i = t.substring(e + 2, e + 5);
return a(r) && a(i) ? 4 : s(i) ? 4 : 2;
}
function o(e) {
return e && h(e[0].charCodeAt(0), t.HIGH_SURROGATE_START, t.HIGH_SURROGATE_END);
}
function a(e) {
return h(p(e), t.REGIONAL_INDICATOR_START, t.REGIONAL_INDICATOR_END);
}
function s(e) {
return h(p(e), t.FITZPATRICK_MODIFIER_START, t.FITZPATRICK_MODIFIER_END);
}
function u(e) {
return "string" == typeof e && h(e.charCodeAt(0), t.VARIATION_MODIFIER_START, t.VARIATION_MODIFIER_END);
}
function l(e) {
return "string" == typeof e && h(e.charCodeAt(0), t.DIACRITICAL_MARKS_START, t.DIACRITICAL_MARKS_END);
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
function h(e, t, n) {
return e >= t && e <= n;
}
function d(e, t, n) {
const i = r(e);
if (void 0 === t) return e;
if (t >= i.length) return "";
const o = i.length - t, a = void 0 === n ? o : n;
let s = t + a;
return s > t + o && (s = void 0), i.slice(t, s).join("");
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.HIGH_SURROGATE_START = 55296, t.HIGH_SURROGATE_END = 56319, t.LOW_SURROGATE_START = 56320, 
t.REGIONAL_INDICATOR_START = 127462, t.REGIONAL_INDICATOR_END = 127487, t.FITZPATRICK_MODIFIER_START = 127995, 
t.FITZPATRICK_MODIFIER_END = 127999, t.VARIATION_MODIFIER_START = 65024, t.VARIATION_MODIFIER_END = 65039, 
t.DIACRITICAL_MARKS_START = 8400, t.DIACRITICAL_MARKS_END = 8447, t.ZWJ = 8205, 
t.GRAPHEMS = [ 776, 2359, 2359, 2367, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520 ], 
t.runes = r, t.nextUnits = i, t.isFirstOfSurrogatePair = o, t.isRegionalIndicator = a, 
t.isFitzpatrickModifier = s, t.isVariationSelector = u, t.isDiacriticalMark = l, 
t.isGraphem = c, t.isZeroWidthJoiner = f, t.codePointFromSurrogatePair = p, t.betweenInclusive = h, 
t.substring = d, t.default = r, t.substr = d;
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
(function(t) {
!function(t, n) {
e.exports = n();
}(this, function() {
"use strict";
var e = "function" == typeof Promise, n = "object" == typeof self ? self : t, r = "undefined" != typeof Symbol, i = "undefined" != typeof Map, o = "undefined" != typeof Set, a = "undefined" != typeof WeakMap, s = "undefined" != typeof WeakSet, u = "undefined" != typeof DataView, l = r && void 0 !== Symbol.iterator, c = r && void 0 !== Symbol.toStringTag, f = o && "function" == typeof Set.prototype.entries, p = i && "function" == typeof Map.prototype.entries, h = f && Object.getPrototypeOf(new Set().entries()), d = p && Object.getPrototypeOf(new Map().entries()), g = l && "function" == typeof Array.prototype[Symbol.iterator], _ = g && Object.getPrototypeOf([][Symbol.iterator]()), m = l && "function" == typeof String.prototype[Symbol.iterator], y = m && Object.getPrototypeOf(""[Symbol.iterator]()), D = 8, b = -1;
function v(t) {
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
return f === RegExp.prototype ? "RegExp" : f === Date.prototype ? "Date" : e && f === Promise.prototype ? "Promise" : o && f === Set.prototype ? "Set" : i && f === Map.prototype ? "Map" : s && f === WeakSet.prototype ? "WeakSet" : a && f === WeakMap.prototype ? "WeakMap" : u && f === DataView.prototype ? "DataView" : i && f === d ? "Map Iterator" : o && f === h ? "Set Iterator" : g && f === _ ? "Array Iterator" : m && f === y ? "String Iterator" : null === f ? "Object" : Object.prototype.toString.call(t).slice(D, b);
}
return v;
});
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(14), i = n(82), o = r.array_unique([ [ "蝕", "蝕", "蚀" ], [ "絲", "絲", "丝" ], [ "異", "異", "异" ], [ "謎", "謎", "谜" ], [ "氷", "冰", "冰" ], [ "詛", "詛", "诅" ], [ "貪", "貪", "贪" ], [ "館", "館", "馆" ], [ "画", "劃", "划" ], [ "誰", "誰", "谁" ], [ "鶏", "雞", "鸡" ], [ "宮", "宮", "宫" ], [ "殻", "殻", "壳" ], [ "館", "館", "馆" ], [ "槍", "槍", "枪" ], [ "静", "靜", "静" ], [ "髪", "髮", null ], [ "棄", "棄", "弃" ], [ "強", "強", "强" ], [ "罵", "罵", "骂" ], [ "駄", "馱", "驮" ], [ "沢", "澤", "泽" ], [ "歴", "歷", "历" ], [ "暦", "曆", "历" ], [ "刹", "剎", "刹" ], [ "錬", "鍊", "炼" ], [ "蓋", "蓋", "盖" ], [ "決", "決", "决" ], [ "晩", "晚", "晚" ], [ "恒", "恆", "恒" ], [ "准", "準", "准" ], [ "準", "準", "准" ], [ "傑", "傑", "杰" ], [ "圏", "圈", "圈" ], [ "煙", "煙", "烟" ], [ "甦", "甦", "苏" ], [ "並", "並", "并" ], [ "贓", "贓", "赃" ], [ "鹹", "鹹", "咸" ], [ "踪", "蹤", "踪" ], [ "踪", "踪", "踪" ], [ "秘", "祕", "秘" ], [ "黙", "默", "默" ], [ "圧", "壓", "压" ], [ "凄", "淒", "凄" ], [ "凄", "悽", "凄" ] ]), a = r.array_unique([ [ "絶", "絕", "绝" ], [ "別", "別", "别" ], [ "魯", "魯", "鲁" ], [ "蘇", "蘇", "苏" ], [ "巻", "卷", "卷" ], [ "弐", "貳", "贰" ], [ "隷", "隸", "隶" ] ]);
t.TABLE = [], o.forEach(function([e, n, r]) {
s(t.TABLE, e, n, r);
}), t.TABLE = r.array_unique(t.TABLE.concat(i.filter(function(e) {
return ![ "尨" ].includes(e[0][0]);
}))), t.TABLE_SAFE = [];
{
let e = [ "系", "欠", "凶", "后", "只", "隻", "无", "叶" ];
t.TABLE = t.TABLE.filter(function(t) {
let [n, r, i] = t;
return !(n[0] == r[0] && n[0] == i[0] || e.includes(n[0]) || e.includes(r[0]) || e.includes(i[0]));
}), t.TABLE_SAFE = [], a.forEach(function([e, n, r]) {
s(t.TABLE, e, n, r), s(t.TABLE_SAFE, e, n, r);
});
let n = [];
for (let e in t.TABLE) {
if (n.includes(e)) continue;
let [r, i, o] = t.TABLE[e], a = !0, s;
for (s in t.TABLE) {
if (s == e) continue;
let [n, r, u] = t.TABLE[s];
if (i.includes(r[0])) {
a = !1;
break;
}
if (o.includes(u[0])) {
a = !1;
break;
}
}
a ? t.TABLE_SAFE.push(t.TABLE[e]) : (n.push(e), n.push(s));
}
}
function s(e, t, n, r) {
return t = Array.isArray(t) ? t : [ t ], n = Array.isArray(n) ? n : [ n ], r = Array.isArray(r) ? r : [ r ], 
e.push([ t, n, r ]), e;
}
t.addNew = s, t.default = t.TABLE;
}, function(e) {
e.exports = [ [ [ "万" ], [ "萬" ], [ "万" ] ], [ [ "予" ], [ "預" ], [ "预" ] ], [ [ "凶" ], [ "兇" ], [ "凶" ] ], [ [ "欠" ], [ "缺" ], [ "缺" ] ], [ [ "与" ], [ "與" ], [ "与" ] ], [ [ "包" ], [ "包" ], [ "包" ] ], [ [ "台" ], [ "台" ], [ "台" ] ], [ [ "弁" ], [ "辨", "瓣", "辯" ], [ "辨", "瓣", "辩" ] ], [ [ "糸" ], [ "絲" ], [ "丝" ] ], [ [ "缶" ], [ "罐" ], [ "罐" ] ], [ [ "虫" ], [ "蟲" ], [ "虫" ] ], [ [ "伝" ], [ "傳" ], [ "传" ] ], [ [ "庄" ], [ "莊" ], [ "庄" ] ], [ [ "余" ], [ "餘" ], [ "余" ] ], [ [ "見" ], [ "見" ], [ "见" ] ], [ [ "貝" ], [ "貝" ], [ "贝" ] ], [ [ "車" ], [ "車" ], [ "车" ] ], [ [ "体" ], [ "體" ], [ "体" ] ], [ [ "尨" ], [ "彪" ], [ "彪" ] ], [ [ "券" ], [ "卷" ], [ "卷" ] ], [ [ "協" ], [ "協" ], [ "协" ] ], [ [ "東" ], [ "東" ], [ "东" ] ], [ [ "糾" ], [ "糾" ], [ "纠" ] ], [ [ "芸" ], [ "藝" ], [ "艺" ] ], [ [ "長" ], [ "長" ], [ "长" ] ], [ [ "門" ], [ "門" ], [ "门" ] ], [ [ "係" ], [ "係" ], [ "系" ] ], [ [ "則" ], [ "則" ], [ "则" ] ], [ [ "帥" ], [ "帥" ], [ "帅" ] ], [ [ "後" ], [ "後" ], [ "后" ] ], [ [ "春" ], [ "春" ], [ "春" ] ], [ [ "為" ], [ "為" ], [ "为" ] ], [ [ "紅" ], [ "紅" ], [ "红" ] ], [ [ "紀" ], [ "紀" ], [ "纪" ] ], [ [ "約" ], [ "約" ], [ "约" ] ], [ [ "計" ], [ "計" ], [ "计" ] ], [ [ "訂" ], [ "訂" ], [ "订" ] ], [ [ "貞" ], [ "貞" ], [ "贞" ] ], [ [ "負" ], [ "負" ], [ "负" ] ], [ [ "軍" ], [ "軍" ], [ "军" ] ], [ [ "軌" ], [ "軌" ], [ "轨" ] ], [ [ "風" ], [ "風" ], [ "风" ] ], [ [ "飛" ], [ "飛" ], [ "飞" ] ], [ [ "個" ], [ "個" ], [ "个" ] ], [ [ "倫" ], [ "倫" ], [ "伦" ] ], [ [ "倉" ], [ "倉" ], [ "仓" ] ], [ [ "凍" ], [ "凍" ], [ "冻" ] ], [ [ "剛" ], [ "剛" ], [ "刚" ] ], [ [ "員" ], [ "員" ], [ "员" ] ], [ [ "孫" ], [ "孫" ], [ "孙" ] ], [ [ "島" ], [ "島" ], [ "岛" ] ], [ [ "師" ], [ "師" ], [ "师" ] ], [ [ "庫" ], [ "庫" ], [ "库" ] ], [ [ "時" ], [ "時" ], [ "时" ] ], [ [ "書" ], [ "書" ], [ "书" ] ], [ [ "畝" ], [ "畝" ], [ "亩" ] ], [ [ "紡" ], [ "紡" ], [ "纺" ] ], [ [ "紋" ], [ "紋" ], [ "纹" ] ], [ [ "純" ], [ "純" ], [ "纯" ] ], [ [ "級" ], [ "級" ], [ "级" ] ], [ [ "納" ], [ "納" ], [ "纳" ] ], [ [ "紙" ], [ "紙" ], [ "纸" ] ], [ [ "紛" ], [ "紛" ], [ "纷" ] ], [ [ "脅" ], [ "脅" ], [ "胁" ] ], [ [ "記" ], [ "記" ], [ "记" ] ], [ [ "討" ], [ "討" ], [ "讨" ] ], [ [ "訓" ], [ "訓" ], [ "训" ] ], [ [ "財" ], [ "財" ], [ "财" ] ], [ [ "貢" ], [ "貢" ], [ "贡" ] ], [ [ "軒" ], [ "軒" ], [ "轩" ] ], [ [ "針" ], [ "針" ], [ "针" ] ], [ [ "陣" ], [ "陣" ], [ "阵" ] ], [ [ "隻" ], [ "隻" ], [ "只" ] ], [ [ "飢" ], [ "饑" ], [ "饥" ] ], [ [ "馬" ], [ "馬" ], [ "马" ] ], [ [ "党" ], [ "黨" ], [ "党" ] ], [ [ "蚕" ], [ "蠶" ], [ "蚕" ] ], [ [ "乾" ], [ "乾" ], [ "干" ] ], [ [ "偽" ], [ "偽" ], [ "伪" ] ], [ [ "偉" ], [ "偉" ], [ "伟" ] ], [ [ "偵" ], [ "偵" ], [ "侦" ] ], [ [ "側" ], [ "側" ], [ "侧" ] ], [ [ "務" ], [ "務" ], [ "务" ] ], [ [ "動" ], [ "動" ], [ "动" ] ], [ [ "問" ], [ "問" ], [ "问" ] ], [ [ "堅" ], [ "堅" ], [ "坚" ] ], [ [ "執" ], [ "執" ], [ "执" ] ], [ [ "婦" ], [ "婦" ], [ "妇" ] ], [ [ "帶" ], [ "帶" ], [ "带" ] ], [ [ "帳" ], [ "帳" ], [ "帐" ] ], [ [ "張" ], [ "張" ], [ "张" ] ], [ [ "掃" ], [ "掃" ], [ "扫" ] ], [ [ "捨" ], [ "捨" ], [ "舍" ] ], [ [ "敗" ], [ "敗" ], [ "败" ] ], [ [ "殺" ], [ "殺" ], [ "杀" ] ], [ [ "現" ], [ "現" ], [ "现" ] ], [ [ "統" ], [ "統" ], [ "统" ] ], [ [ "紹" ], [ "紹" ], [ "绍" ] ], [ [ "細" ], [ "細" ], [ "细" ] ], [ [ "紳" ], [ "紳" ], [ "绅" ] ], [ [ "組" ], [ "組" ], [ "组" ] ], [ [ "終" ], [ "終" ], [ "终" ] ], [ [ "習" ], [ "習" ], [ "习" ] ], [ [ "術" ], [ "術" ], [ "术" ] ], [ [ "規" ], [ "規" ], [ "规" ] ], [ [ "訪" ], [ "訪" ], [ "访" ] ], [ [ "許" ], [ "許" ], [ "许" ] ], [ [ "設" ], [ "設" ], [ "设" ] ], [ [ "訟" ], [ "訟" ], [ "讼" ] ], [ [ "販" ], [ "販" ], [ "贩" ] ], [ [ "責" ], [ "責" ], [ "责" ] ], [ [ "貨" ], [ "貨" ], [ "货" ] ], [ [ "貧" ], [ "貧" ], [ "贫" ] ], [ [ "軟" ], [ "軟" ], [ "软" ] ], [ [ "連" ], [ "連" ], [ "连" ] ], [ [ "釣" ], [ "釣" ], [ "钓" ] ], [ [ "閉" ], [ "閉" ], [ "闭" ] ], [ [ "陳" ], [ "陳" ], [ "陈" ] ], [ [ "陸" ], [ "陸" ], [ "陆" ] ], [ [ "陰" ], [ "陰" ], [ "阴" ] ], [ [ "頂" ], [ "頂" ], [ "顶" ] ], [ [ "魚" ], [ "魚" ], [ "鱼" ] ], [ [ "鳥" ], [ "鳥" ], [ "鸟" ] ], [ [ "紺" ], [ "紺" ], [ "绀" ] ], [ [ "備" ], [ "備" ], [ "备" ] ], [ [ "傘" ], [ "傘" ], [ "伞" ] ], [ [ "創" ], [ "創" ], [ "创" ] ], [ [ "勝" ], [ "勝" ], [ "胜" ] ], [ [ "喪" ], [ "喪" ], [ "丧" ] ], [ [ "場" ], [ "場" ], [ "场" ] ], [ [ "報" ], [ "報" ], [ "报" ] ], [ [ "尋" ], [ "尋" ], [ "寻" ] ], [ [ "幾" ], [ "幾" ], [ "几" ] ], [ [ "復" ], [ "復" ], [ "复" ] ], [ [ "揮" ], [ "揮" ], [ "挥" ] ], [ [ "揚" ], [ "揚" ], [ "扬" ] ], [ [ "棟" ], [ "棟" ], [ "栋" ] ], [ [ "殼" ], [ "殼" ], [ "壳" ] ], [ [ "渦" ], [ "渦" ], [ "涡" ] ], [ [ "湯" ], [ "湯" ], [ "汤" ] ], [ [ "測" ], [ "測" ], [ "测" ] ], [ [ "無" ], [ "無" ], [ "无" ] ], [ [ "猶" ], [ "猶" ], [ "犹" ] ], [ [ "筆" ], [ "筆" ], [ "笔" ] ], [ [ "絞" ], [ "絞" ], [ "绞" ] ], [ [ "結" ], [ "結" ], [ "结" ] ], [ [ "絡" ], [ "絡" ], [ "络" ] ], [ [ "給" ], [ "給" ], [ "给" ] ], [ [ "脹" ], [ "脹" ], [ "胀" ] ], [ [ "華" ], [ "華" ], [ "华" ] ], [ [ "視" ], [ "視" ], [ "视" ] ], [ [ "評" ], [ "評" ], [ "评" ] ], [ [ "詞" ], [ "詞" ], [ "词" ] ], [ [ "証" ], [ "證" ], [ "证" ] ], [ [ "詔" ], [ "詔" ], [ "诏" ] ], [ [ "詐" ], [ "詐" ], [ "诈" ] ], [ [ "訴" ], [ "訴" ], [ "诉" ] ], [ [ "診" ], [ "診" ], [ "诊" ] ], [ [ "貯" ], [ "貯" ], [ "贮" ] ], [ [ "費" ], [ "費" ], [ "费" ] ], [ [ "賀" ], [ "賀" ], [ "贺" ] ], [ [ "貴" ], [ "貴" ], [ "贵" ] ], [ [ "買" ], [ "買" ], [ "买" ] ], [ [ "貿" ], [ "貿" ], [ "贸" ] ], [ [ "貸" ], [ "貸" ], [ "贷" ] ], [ [ "軸" ], [ "軸" ], [ "轴" ] ], [ [ "進" ], [ "進" ], [ "进" ] ], [ [ "郵" ], [ "郵" ], [ "邮" ] ], [ [ "鈍" ], [ "鈍" ], [ "钝" ] ], [ [ "開" ], [ "開" ], [ "开" ] ], [ [ "閑" ], [ "閒" ], [ "闲" ] ], [ [ "間" ], [ "間" ], [ "间" ] ], [ [ "隊" ], [ "隊" ], [ "队" ] ], [ [ "階" ], [ "階" ], [ "阶" ] ], [ [ "陽" ], [ "陽" ], [ "阳" ] ], [ [ "雲" ], [ "雲" ], [ "云" ] ], [ [ "項" ], [ "項" ], [ "项" ] ], [ [ "順" ], [ "順" ], [ "顺" ] ], [ [ "飯" ], [ "飯" ], [ "饭" ] ], [ [ "飲" ], [ "飲" ], [ "饮" ] ], [ [ "粧" ], [ "妝" ], [ "妆" ] ], [ [ "債" ], [ "債" ], [ "债" ] ], [ [ "傾" ], [ "傾" ], [ "倾" ] ], [ [ "傷" ], [ "傷" ], [ "伤" ] ], [ [ "勢" ], [ "勢" ], [ "势" ] ], [ [ "園" ], [ "園" ], [ "园" ] ], [ [ "塗" ], [ "塗" ], [ "涂" ] ], [ [ "塊" ], [ "塊" ], [ "块" ] ], [ [ "幹" ], [ "幹" ], [ "干" ] ], [ [ "愛" ], [ "愛" ], [ "爱" ] ], [ [ "損" ], [ "損" ], [ "损" ] ], [ [ "業" ], [ "業" ], [ "业" ] ], [ [ "極" ], [ "極" ], [ "极" ] ], [ [ "溝" ], [ "溝" ], [ "沟" ] ], [ [ "滅" ], [ "滅" ], [ "灭" ] ], [ [ "準" ], [ "準" ], [ "准" ] ], [ [ "煩" ], [ "煩" ], [ "烦" ] ], [ [ "痴" ], [ "痴" ], [ "痴" ] ], [ [ "節" ], [ "節" ], [ "节" ] ], [ [ "絹" ], [ "絹" ], [ "绢" ] ], [ [ "義" ], [ "義" ], [ "义" ] ], [ [ "聖" ], [ "聖" ], [ "圣" ] ], [ [ "腸" ], [ "腸" ], [ "肠" ] ], [ [ "葉" ], [ "葉" ], [ "叶" ] ], [ [ "虜" ], [ "虜" ], [ "虏" ] ], [ [ "補" ], [ "補" ], [ "补" ] ], [ [ "該" ], [ "該" ], [ "该" ] ], [ [ "詳" ], [ "詳" ], [ "详" ] ], [ [ "試" ], [ "試" ], [ "试" ] ], [ [ "詩" ], [ "詩" ], [ "诗" ] ], [ [ "詰" ], [ "詰" ], [ "诘" ] ], [ [ "誇" ], [ "誇" ], [ "夸" ] ], [ [ "誠" ], [ "誠" ], [ "诚" ] ], [ [ "話" ], [ "話" ], [ "话" ] ], [ [ "賊" ], [ "賊" ], [ "贼" ] ], [ [ "資" ], [ "資" ], [ "资" ] ], [ [ "賄" ], [ "賄" ], [ "贿" ] ], [ [ "賃" ], [ "賃" ], [ "赁" ] ], [ [ "較" ], [ "較" ], [ "较" ] ], [ [ "載" ], [ "載" ], [ "载" ] ], [ [ "農" ], [ "農" ], [ "农" ] ], [ [ "運" ], [ "運" ], [ "运" ] ], [ [ "達" ], [ "達" ], [ "达" ] ], [ [ "違" ], [ "違" ], [ "违" ] ], [ [ "過" ], [ "過" ], [ "过" ] ], [ [ "鉛" ], [ "鉛" ], [ "铅" ] ], [ [ "鈴" ], [ "鈴" ], [ "铃" ] ], [ [ "電" ], [ "電" ], [ "电" ] ], [ [ "預" ], [ "預" ], [ "预" ] ], [ [ "頑" ], [ "頑" ], [ "顽" ] ], [ [ "頒" ], [ "頒" ], [ "颁" ] ], [ [ "飼" ], [ "飼" ], [ "饲" ] ], [ [ "飽" ], [ "飽" ], [ "饱" ] ], [ [ "飾" ], [ "飾" ], [ "饰" ] ], [ [ "馱" ], [ "馱" ], [ "驮" ] ], [ [ "触" ], [ "觸" ], [ "触" ] ], [ [ "豊" ], [ "豐" ], [ "丰" ] ], [ [ "銃" ], [ "銃" ], [ "铳" ] ], [ [ "裏" ], [ "裡" ], [ "里" ] ], [ [ "僕" ], [ "僕" ], [ "仆" ] ], [ [ "嘆" ], [ "嘆" ], [ "叹" ] ], [ [ "夢" ], [ "夢" ], [ "梦" ] ], [ [ "奪" ], [ "奪" ], [ "夺" ] ], [ [ "寧" ], [ "寧" ], [ "宁" ] ], [ [ "幣" ], [ "幣" ], [ "币" ] ], [ [ "徹" ], [ "徹" ], [ "彻" ] ], [ [ "態" ], [ "態" ], [ "态" ] ], [ [ "漬" ], [ "漬" ], [ "渍" ] ], [ [ "漢" ], [ "漢" ], [ "汉" ] ], [ [ "漸" ], [ "漸" ], [ "渐" ] ], [ [ "漁" ], [ "漁" ], [ "渔" ] ], [ [ "獄" ], [ "獄" ], [ "狱" ] ], [ [ "監" ], [ "監" ], [ "监" ] ], [ [ "禍" ], [ "禍" ], [ "祸" ] ], [ [ "種" ], [ "種" ], [ "种" ] ], [ [ "箇" ], [ "個" ], [ "个" ] ], [ [ "緊" ], [ "緊" ], [ "紧" ] ], [ [ "網" ], [ "網" ], [ "网" ] ], [ [ "綱" ], [ "綱" ], [ "纲" ] ], [ [ "綿" ], [ "綿" ], [ "绵" ] ], [ [ "維" ], [ "維" ], [ "维" ] ], [ [ "緒" ], [ "緒" ], [ "绪" ] ], [ [ "聞" ], [ "聞" ], [ "闻" ] ], [ [ "製" ], [ "製" ], [ "制" ] ], [ [ "誌" ], [ "誌" ], [ "志" ] ], [ [ "語" ], [ "語" ], [ "语" ] ], [ [ "認" ], [ "認" ], [ "认" ] ], [ [ "誤" ], [ "誤" ], [ "误" ] ], [ [ "誘" ], [ "誘" ], [ "诱" ] ], [ [ "賓" ], [ "賓" ], [ "宾" ] ], [ [ "遠" ], [ "遠" ], [ "远" ] ], [ [ "銀" ], [ "銀" ], [ "银" ] ], [ [ "銅" ], [ "銅" ], [ "铜" ] ], [ [ "銘" ], [ "銘" ], [ "铭" ] ], [ [ "銑" ], [ "銑" ], [ "铣" ] ], [ [ "閣" ], [ "閣" ], [ "阁" ] ], [ [ "閥" ], [ "閥" ], [ "阀" ] ], [ [ "際" ], [ "際" ], [ "际" ] ], [ [ "領" ], [ "領" ], [ "领" ] ], [ [ "鳴" ], [ "鳴" ], [ "鸣" ] ], [ [ "億" ], [ "億" ], [ "亿" ] ], [ [ "儀" ], [ "儀" ], [ "仪" ] ], [ [ "劇" ], [ "劇" ], [ "剧" ] ], [ [ "噴" ], [ "噴" ], [ "喷" ] ], [ [ "墳" ], [ "墳" ], [ "坟" ] ], [ [ "墜" ], [ "墜" ], [ "坠" ] ], [ [ "寬" ], [ "寬" ], [ "宽" ] ], [ [ "審" ], [ "審" ], [ "审" ] ], [ [ "層" ], [ "層" ], [ "层" ] ], [ [ "慶" ], [ "慶" ], [ "庆" ] ], [ [ "慮" ], [ "慮" ], [ "虑" ] ], [ [ "憂" ], [ "憂" ], [ "忧" ] ], [ [ "憤" ], [ "憤" ], [ "愤" ] ], [ [ "撮" ], [ "攝" ], [ "摄" ] ], [ [ "敵" ], [ "敵" ], [ "敌" ] ], [ [ "暫" ], [ "暫" ], [ "暂" ] ], [ [ "標" ], [ "標" ], [ "标" ] ], [ [ "潔" ], [ "潔" ], [ "洁" ] ], [ [ "潤" ], [ "潤" ], [ "润" ] ], [ [ "熱" ], [ "熱" ], [ "热" ] ], [ [ "盤" ], [ "盤" ], [ "盘" ] ], [ [ "確" ], [ "確" ], [ "确" ] ], [ [ "窮" ], [ "窮" ], [ "穷" ] ], [ [ "範" ], [ "範" ], [ "范" ] ], [ [ "締" ], [ "締" ], [ "缔" ] ], [ [ "練" ], [ "練" ], [ "练" ] ], [ [ "緯" ], [ "緯" ], [ "纬" ] ], [ [ "編" ], [ "編" ], [ "编" ] ], [ [ "線" ], [ "線" ], [ "线" ] ], [ [ "緩" ], [ "緩" ], [ "缓" ] ], [ [ "罷" ], [ "罷" ], [ "罢" ] ], [ [ "膚" ], [ "膚" ], [ "肤" ] ], [ [ "衛" ], [ "衛" ], [ "卫" ] ], [ [ "衝" ], [ "衝" ], [ "冲" ] ], [ [ "複" ], [ "複" ], [ "复" ] ], [ [ "談" ], [ "談" ], [ "谈" ] ], [ [ "誕" ], [ "誕" ], [ "诞" ] ], [ [ "請" ], [ "請" ], [ "请" ] ], [ [ "諸" ], [ "諸" ], [ "诸" ] ], [ [ "課" ], [ "課" ], [ "课" ] ], [ [ "調" ], [ "調" ], [ "调" ] ], [ [ "論" ], [ "論" ], [ "论" ] ], [ [ "賠" ], [ "賠" ], [ "赔" ] ], [ [ "賞" ], [ "賞" ], [ "赏" ] ], [ [ "賦" ], [ "賦" ], [ "赋" ] ], [ [ "賢" ], [ "賢" ], [ "贤" ] ], [ [ "賜" ], [ "賜" ], [ "赐" ] ], [ [ "質" ], [ "質" ], [ "质" ] ], [ [ "輝" ], [ "輝" ], [ "辉" ] ], [ [ "輩" ], [ "輩" ], [ "辈" ] ], [ [ "輪" ], [ "輪" ], [ "轮" ] ], [ [ "適" ], [ "適" ], [ "适" ] ], [ [ "遷" ], [ "遷" ], [ "迁" ] ], [ [ "養" ], [ "養" ], [ "养" ] ], [ [ "餓" ], [ "餓" ], [ "饿" ] ], [ [ "駐" ], [ "駐" ], [ "驻" ] ], [ [ "墾" ], [ "墾" ], [ "垦" ] ], [ [ "壇" ], [ "壇" ], [ "坛" ] ], [ [ "奮" ], [ "奮" ], [ "奋" ] ], [ [ "導" ], [ "導" ], [ "导" ] ], [ [ "憲" ], [ "憲" ], [ "宪" ] ], [ [ "憶" ], [ "憶" ], [ "忆" ] ], [ [ "擁" ], [ "擁" ], [ "拥" ] ], [ [ "曇" ], [ "曇" ], [ "昙" ] ], [ [ "樸" ], [ "樸" ], [ "朴" ] ], [ [ "樹" ], [ "樹" ], [ "树" ] ], [ [ "橋" ], [ "橋" ], [ "桥" ] ], [ [ "機" ], [ "機" ], [ "机" ] ], [ [ "濃" ], [ "濃" ], [ "浓" ] ], [ [ "濁" ], [ "濁" ], [ "浊" ] ], [ [ "積" ], [ "積" ], [ "积" ] ], [ [ "築" ], [ "築" ], [ "筑" ] ], [ [ "篤" ], [ "篤" ], [ "笃" ] ], [ [ "縛" ], [ "縛" ], [ "缚" ] ], [ [ "興" ], [ "興" ], [ "兴" ] ], [ [ "親" ], [ "親" ], [ "亲" ] ], [ [ "謀" ], [ "謀" ], [ "谋" ] ], [ [ "諮" ], [ "諮" ], [ "谘" ] ], [ [ "諾" ], [ "諾" ], [ "诺" ] ], [ [ "謁" ], [ "謁" ], [ "谒" ] ], [ [ "諭" ], [ "諭" ], [ "谕" ] ], [ [ "輸" ], [ "輸" ], [ "输" ] ], [ [ "選" ], [ "選" ], [ "选" ] ], [ [ "遺" ], [ "遺" ], [ "遗" ] ], [ [ "錠" ], [ "錠" ], [ "锭" ] ], [ [ "錯" ], [ "錯" ], [ "错" ] ], [ [ "鋼" ], [ "鋼" ], [ "钢" ] ], [ [ "頻" ], [ "頻" ], [ "频" ] ], [ [ "頭" ], [ "頭" ], [ "头" ] ], [ [ "優" ], [ "優" ], [ "优" ] ], [ [ "償" ], [ "償" ], [ "偿" ] ], [ [ "嚇" ], [ "嚇" ], [ "吓" ] ], [ [ "懇" ], [ "懇" ], [ "恳" ] ], [ [ "擬" ], [ "擬" ], [ "拟" ] ], [ [ "濫" ], [ "濫" ], [ "滥" ] ], [ [ "獲" ], [ "獲" ], [ "获" ] ], [ [ "環" ], [ "環" ], [ "环" ] ], [ [ "療" ], [ "療" ], [ "疗" ] ], [ [ "矯" ], [ "矯" ], [ "矫" ] ], [ [ "縮" ], [ "縮" ], [ "缩" ] ], [ [ "績" ], [ "績" ], [ "绩" ] ], [ [ "縫" ], [ "縫" ], [ "缝" ] ], [ [ "臨" ], [ "臨" ], [ "临" ] ], [ [ "謙" ], [ "謙" ], [ "谦" ] ], [ [ "講" ], [ "講" ], [ "讲" ] ], [ [ "謝" ], [ "謝" ], [ "谢" ] ], [ [ "謄" ], [ "謄" ], [ "誊" ] ], [ [ "轄" ], [ "轄" ], [ "辖" ] ], [ [ "還" ], [ "還" ], [ "还" ] ], [ [ "醜" ], [ "醜" ], [ "丑" ] ], [ [ "錘" ], [ "錘" ], [ "锤" ] ], [ [ "鍾" ], [ "鍾" ], [ "钟" ] ], [ [ "鍛" ], [ "鍛" ], [ "锻" ] ], [ [ "鮮" ], [ "鮮" ], [ "鲜" ] ], [ [ "礎" ], [ "礎" ], [ "础" ] ], [ [ "簡" ], [ "簡" ], [ "简" ] ], [ [ "糧" ], [ "糧" ], [ "粮" ] ], [ [ "織" ], [ "織" ], [ "织" ] ], [ [ "繕" ], [ "繕" ], [ "缮" ] ], [ [ "職" ], [ "職" ], [ "职" ] ], [ [ "薦" ], [ "薦" ], [ "荐" ] ], [ [ "謹" ], [ "謹" ], [ "谨" ] ], [ [ "鎖" ], [ "鎖" ], [ "锁" ] ], [ [ "鎮" ], [ "鎮" ], [ "镇" ] ], [ [ "離" ], [ "離" ], [ "离" ] ], [ [ "額" ], [ "額" ], [ "额" ] ], [ [ "題" ], [ "題" ], [ "题" ] ], [ [ "騎" ], [ "騎" ], [ "骑" ] ], [ [ "懲" ], [ "懲" ], [ "惩" ] ], [ [ "璽" ], [ "璽" ], [ "玺" ] ], [ [ "穫" ], [ "穫" ], [ "获" ] ], [ [ "繭" ], [ "繭" ], [ "茧" ] ], [ [ "羅" ], [ "羅" ], [ "罗" ] ], [ [ "譜" ], [ "譜" ], [ "谱" ] ], [ [ "識" ], [ "識" ], [ "识" ] ], [ [ "贈" ], [ "贈" ], [ "赠" ] ], [ [ "鏡" ], [ "鏡" ], [ "镜" ] ], [ [ "難" ], [ "難" ], [ "难" ] ], [ [ "霧" ], [ "霧" ], [ "雾" ] ], [ [ "類" ], [ "類" ], [ "类" ] ], [ [ "願" ], [ "願" ], [ "愿" ] ], [ [ "鯨" ], [ "鯨" ], [ "鲸" ] ], [ [ "麗" ], [ "麗" ], [ "丽" ] ], [ [ "繰" ], [ "繰" ], [ "缲" ] ], [ [ "懸" ], [ "懸" ], [ "悬" ] ], [ [ "競" ], [ "競" ], [ "竞" ] ], [ [ "艦" ], [ "艦" ], [ "舰" ] ], [ [ "議" ], [ "議" ], [ "议" ] ], [ [ "騰" ], [ "騰" ], [ "腾" ] ], [ [ "欄" ], [ "欄" ], [ "栏" ] ], [ [ "護" ], [ "護" ], [ "护" ] ], [ [ "躍" ], [ "躍" ], [ "跃" ] ], [ [ "響" ], [ "響" ], [ "响" ] ], [ [ "襲" ], [ "襲" ], [ "袭" ] ], [ [ "鑑" ], [ "鑑" ], [ "鉴" ] ], [ [ "驚" ], [ "驚" ], [ "惊" ] ], [ [ "両" ], [ "兩" ], [ "两" ] ], [ [ "乗" ], [ "乘" ], [ "乘" ] ], [ [ "乱" ], [ "亂" ], [ "乱" ] ], [ [ "亀" ], [ "龜" ], [ "龟" ] ], [ [ "亜" ], [ "亞" ], [ "亚" ] ], [ [ "仏" ], [ "佛" ], [ "佛" ] ], [ [ "仮" ], [ "假" ], [ "假" ] ], [ [ "会" ], [ "會" ], [ "会" ] ], [ [ "価" ], [ "價" ], [ "价" ] ], [ [ "倶" ], [ "俱" ], [ "俱" ] ], [ [ "倹" ], [ "儉" ], [ "俭" ] ], [ [ "児" ], [ "兒" ], [ "儿" ] ], [ [ "内" ], [ "內" ], [ "内" ] ], [ [ "円" ], [ "圓" ], [ "圆" ] ], [ [ "写" ], [ "寫" ], [ "写" ] ], [ [ "冨" ], [ "富" ], [ "富" ] ], [ [ "処" ], [ "處" ], [ "处" ] ], [ [ "剣" ], [ "劍" ], [ "剑" ] ], [ [ "剤" ], [ "劑" ], [ "剂" ] ], [ [ "剰" ], [ "剩" ], [ "剩" ] ], [ [ "励" ], [ "勵" ], [ "励" ] ], [ [ "労" ], [ "勞" ], [ "劳" ] ], [ [ "勧" ], [ "勸" ], [ "劝" ] ], [ [ "勲" ], [ "勳" ], [ "勋" ] ], [ [ "区" ], [ "區" ], [ "区" ] ], [ [ "医" ], [ "醫" ], [ "医" ] ], [ [ "単" ], [ "單" ], [ "单" ] ], [ [ "厳" ], [ "嚴" ], [ "严" ] ], [ [ "参" ], [ "參" ], [ "参" ] ], [ [ "双" ], [ "雙" ], [ "双" ] ], [ [ "収" ], [ "收" ], [ "收" ] ], [ [ "号" ], [ "號" ], [ "号" ] ], [ [ "啓" ], [ "啟" ], [ "启" ] ], [ [ "営" ], [ "營" ], [ "营" ] ], [ [ "嘱" ], [ "囑" ], [ "嘱" ] ], [ [ "団" ], [ "團" ], [ "团" ] ], [ [ "囲" ], [ "圍" ], [ "围" ] ], [ [ "図" ], [ "圖" ], [ "图" ] ], [ [ "国" ], [ "國" ], [ "国" ] ], [ [ "圧" ], [ "壓" ], [ "压" ] ], [ [ "堕" ], [ "墮" ], [ "堕" ] ], [ [ "塁" ], [ "壘" ], [ "垒" ] ], [ [ "塩" ], [ "鹽" ], [ "盐" ] ], [ [ "増" ], [ "增" ], [ "增" ] ], [ [ "壊" ], [ "壞" ], [ "坏" ] ], [ [ "壌" ], [ "壤" ], [ "壤" ] ], [ [ "壮" ], [ "壯" ], [ "壮" ] ], [ [ "声" ], [ "聲" ], [ "声" ] ], [ [ "壱" ], [ "壹" ], [ "壹" ] ], [ [ "売" ], [ "賣" ], [ "卖" ] ], [ [ "変" ], [ "變" ], [ "变" ] ], [ [ "奨" ], [ "獎" ], [ "奖" ] ], [ [ "姉" ], [ "姐" ], [ "姐" ] ], [ [ "姫" ], [ "姬" ], [ "姬" ] ], [ [ "娯" ], [ "娛" ], [ "娱" ] ], [ [ "嬢" ], [ "孃" ], [ "娘" ] ], [ [ "学" ], [ "學" ], [ "学" ] ], [ [ "宝" ], [ "寶" ], [ "宝" ] ], [ [ "実" ], [ "實" ], [ "实" ] ], [ [ "寛" ], [ "寬" ], [ "宽" ] ], [ [ "寝" ], [ "寢" ], [ "寝" ] ], [ [ "対" ], [ "對" ], [ "对" ] ], [ [ "寿" ], [ "壽" ], [ "寿" ] ], [ [ "専" ], [ "專" ], [ "专" ] ], [ [ "将" ], [ "將" ], [ "将" ] ], [ [ "尽" ], [ "盡" ], [ "尽" ] ], [ [ "属" ], [ "屬" ], [ "属" ] ], [ [ "峡" ], [ "峽" ], [ "峡" ] ], [ [ "巌" ], [ "巖" ], [ "巖" ] ], [ [ "巻" ], [ "卷" ], [ "卷" ] ], [ [ "帯" ], [ "帶" ], [ "带" ] ], [ [ "帰" ], [ "歸" ], [ "归" ] ], [ [ "庁" ], [ "廳" ], [ "厅" ] ], [ [ "広" ], [ "廣" ], [ "广" ] ], [ [ "廃" ], [ "廢" ], [ "废" ] ], [ [ "廼" ], [ "迺" ], [ "迺" ] ], [ [ "弍" ], [ "貳" ], [ "贰" ] ], [ [ "弐" ], [ "貳" ], [ "贰" ] ], [ [ "弥" ], [ "彌" ], [ "弥" ] ], [ [ "弾" ], [ "彈" ], [ "弹" ] ], [ [ "当" ], [ "當" ], [ "当" ] ], [ [ "彦" ], [ "彥" ], [ "彥" ] ], [ [ "径" ], [ "徑" ], [ "径" ] ], [ [ "従" ], [ "從" ], [ "从" ] ], [ [ "徳" ], [ "德" ], [ "德" ] ], [ [ "徴" ], [ "徵" ], [ "征" ] ], [ [ "応" ], [ "應" ], [ "应" ] ], [ [ "恋" ], [ "戀" ], [ "恋" ] ], [ [ "恵" ], [ "惠" ], [ "惠" ] ], [ [ "悦" ], [ "悅" ], [ "悅" ] ], [ [ "悩" ], [ "惱" ], [ "恼" ] ], [ [ "悪" ], [ "惡" ], [ "恶" ] ], [ [ "惨" ], [ "慘" ], [ "惨" ] ], [ [ "懐" ], [ "懷" ], [ "怀" ] ], [ [ "戦" ], [ "戰" ], [ "战" ] ], [ [ "戯" ], [ "戲" ], [ "戏" ] ], [ [ "戸" ], [ "戶" ], [ "户" ] ], [ [ "払" ], [ "拂" ], [ "拂" ] ], [ [ "択" ], [ "擇" ], [ "择" ] ], [ [ "担" ], [ "擔" ], [ "担" ] ], [ [ "拝" ], [ "拜" ], [ "拜" ] ], [ [ "拠" ], [ "據" ], [ "据" ] ], [ [ "拡" ], [ "擴" ], [ "扩" ] ], [ [ "挙" ], [ "舉" ], [ "举" ] ], [ [ "挟" ], [ "挾" ], [ "挟" ] ], [ [ "掲" ], [ "揭" ], [ "揭" ] ], [ [ "掴" ], [ "摑" ], [ "掴" ] ], [ [ "揺" ], [ "搖" ], [ "摇" ] ], [ [ "摂" ], [ "攝" ], [ "摄" ] ], [ [ "撃" ], [ "擊" ], [ "击" ] ], [ [ "数" ], [ "數" ], [ "数" ] ], [ [ "斉" ], [ "齊" ], [ "齐" ] ], [ [ "斎" ], [ "齋" ], [ "斋" ] ], [ [ "断" ], [ "斷" ], [ "断" ] ], [ [ "旧" ], [ "舊" ], [ "旧" ] ], [ [ "昼" ], [ "晝" ], [ "昼" ] ], [ [ "暁" ], [ "曉" ], [ "晓" ] ], [ [ "暦" ], [ "曆" ], [ "历" ] ], [ [ "曽" ], [ "曾" ], [ "曾" ] ], [ [ "条" ], [ "條" ], [ "条" ] ], [ [ "来" ], [ "來" ], [ "来" ] ], [ [ "枢" ], [ "樞" ], [ "枢" ] ], [ [ "査" ], [ "查" ], [ "查" ] ], [ [ "栄" ], [ "榮" ], [ "荣" ] ], [ [ "桜" ], [ "櫻" ], [ "樱" ] ], [ [ "桟" ], [ "棧" ], [ "栈" ] ], [ [ "検" ], [ "檢" ], [ "检" ] ], [ [ "楼" ], [ "樓" ], [ "楼" ] ], [ [ "楽" ], [ "樂" ], [ "乐" ] ], [ [ "様" ], [ "樣" ], [ "样" ] ], [ [ "権" ], [ "權" ], [ "权" ] ], [ [ "欧" ], [ "歐" ], [ "欧" ] ], [ [ "歓" ], [ "歡" ], [ "欢" ] ], [ [ "歩" ], [ "步" ], [ "步" ] ], [ [ "歯" ], [ "齒" ], [ "齿" ] ], [ [ "歳" ], [ "歲" ], [ "岁" ] ], [ [ "歴" ], [ "歷" ], [ "历" ] ], [ [ "残" ], [ "殘" ], [ "残" ] ], [ [ "殴" ], [ "毆" ], [ "殴" ] ], [ [ "気" ], [ "氣" ], [ "气" ] ], [ [ "沢" ], [ "澤" ], [ "泽" ] ], [ [ "浅" ], [ "淺" ], [ "浅" ] ], [ [ "浜" ], [ "濱" ], [ "滨" ] ], [ [ "涙" ], [ "淚" ], [ "泪" ] ], [ [ "済" ], [ "濟" ], [ "济" ] ], [ [ "渋" ], [ "涉", "澀" ], [ "涉", "涩" ] ], [ [ "渓" ], [ "溪" ], [ "溪" ] ], [ [ "湾" ], [ "灣" ], [ "湾" ] ], [ [ "湿" ], [ "濕" ], [ "湿" ] ], [ [ "満" ], [ "滿" ], [ "满" ] ], [ [ "滝" ], [ "瀧" ], [ "泷" ] ], [ [ "滞" ], [ "滯" ], [ "滞" ] ], [ [ "瀬" ], [ "瀨" ], [ "濑" ] ], [ [ "灯" ], [ "燈" ], [ "灯" ] ], [ [ "炉" ], [ "爐" ], [ "炉" ] ], [ [ "点" ], [ "點" ], [ "点" ] ], [ [ "焔" ], [ "焰" ], [ "焰" ] ], [ [ "焼" ], [ "燒" ], [ "烧" ] ], [ [ "犠" ], [ "犧" ], [ "牺" ] ], [ [ "状" ], [ "狀" ], [ "状" ] ], [ [ "独" ], [ "獨" ], [ "独" ] ], [ [ "狭" ], [ "狹" ], [ "狭" ] ], [ [ "猟" ], [ "獵" ], [ "猎" ] ], [ [ "猫" ], [ "貓" ], [ "猫" ] ], [ [ "献" ], [ "獻" ], [ "献" ] ], [ [ "獣" ], [ "獸" ], [ "兽" ] ], [ [ "産" ], [ "產" ], [ "产" ] ], [ [ "画" ], [ "畫" ], [ "画" ] ], [ [ "畳" ], [ "疊" ], [ "叠" ] ], [ [ "発" ], [ "發" ], [ "发" ] ], [ [ "県" ], [ "縣" ], [ "县" ] ], [ [ "着" ], [ "著" ], [ "著" ] ], [ [ "砕" ], [ "碎" ], [ "碎" ] ], [ [ "礼" ], [ "禮" ], [ "礼" ] ], [ [ "禅" ], [ "禪" ], [ "禅" ] ], [ [ "称" ], [ "稱" ], [ "称" ] ], [ [ "稲" ], [ "稻" ], [ "稻" ] ], [ [ "穂" ], [ "穗" ], [ "穗" ] ], [ [ "穏" ], [ "穩" ], [ "稳" ] ], [ [ "窃" ], [ "竊" ], [ "窃" ] ], [ [ "竜" ], [ "龍" ], [ "龙" ] ], [ [ "粋" ], [ "粹" ], [ "粹" ] ], [ [ "粛" ], [ "肅" ], [ "肃" ] ], [ [ "経" ], [ "經" ], [ "经" ] ], [ [ "絵" ], [ "繪" ], [ "绘" ] ], [ [ "絶" ], [ "絶" ], [ "绝" ] ], [ [ "継" ], [ "繼" ], [ "继" ] ], [ [ "続" ], [ "續" ], [ "续" ] ], [ [ "総" ], [ "總" ], [ "总" ] ], [ [ "緑" ], [ "綠" ], [ "绿" ] ], [ [ "縁" ], [ "緣" ], [ "缘" ] ], [ [ "縄" ], [ "繩" ], [ "绳" ] ], [ [ "縦" ], [ "縱" ], [ "纵" ] ], [ [ "繊" ], [ "纖" ], [ "纤" ] ], [ [ "罸" ], [ "罰" ], [ "罚" ] ], [ [ "聡" ], [ "聰" ], [ "聪" ] ], [ [ "聴" ], [ "聽" ], [ "听" ] ], [ [ "胆" ], [ "膽" ], [ "胆" ] ], [ [ "脚" ], [ "腳" ], [ "脚" ] ], [ [ "脳" ], [ "腦" ], [ "脑" ] ], [ [ "臓" ], [ "臟" ], [ "脏" ] ], [ [ "舗" ], [ "舖" ], [ "铺" ] ], [ [ "茎" ], [ "莖" ], [ "茎" ] ], [ [ "荘" ], [ "莊" ], [ "庄" ] ], [ [ "蒋" ], [ "蔣" ], [ "蒋" ] ], [ [ "蔵" ], [ "藏" ], [ "藏" ] ], [ [ "薬" ], [ "藥" ], [ "药" ] ], [ [ "虚" ], [ "虛" ], [ "虚" ] ], [ [ "蛍" ], [ "螢" ], [ "萤" ] ], [ [ "蛮" ], [ "蠻" ], [ "蛮" ] ], [ [ "衆" ], [ "眾" ], [ "众" ] ], [ [ "装" ], [ "裝" ], [ "装" ] ], [ [ "覇" ], [ "霸" ], [ "霸" ] ], [ [ "覚" ], [ "覺" ], [ "觉" ] ], [ [ "覧" ], [ "覽" ], [ "览" ] ], [ [ "観" ], [ "觀" ], [ "观" ] ], [ [ "訳" ], [ "譯" ], [ "译" ] ], [ [ "誉" ], [ "譽" ], [ "誉" ] ], [ [ "説" ], [ "說" ], [ "说" ] ], [ [ "読" ], [ "讀" ], [ "读" ] ], [ [ "謡" ], [ "謠" ], [ "谣" ] ], [ [ "譲" ], [ "讓" ], [ "让" ] ], [ [ "賛" ], [ "贊" ], [ "赞" ] ], [ [ "践" ], [ "踐" ], [ "践" ] ], [ [ "転" ], [ "轉" ], [ "转" ] ], [ [ "軽" ], [ "輕" ], [ "轻" ] ], [ [ "辞" ], [ "辭" ], [ "辞" ] ], [ [ "辺" ], [ "邊" ], [ "边" ] ], [ [ "逓" ], [ "遞" ], [ "递" ] ], [ [ "遅" ], [ "遲" ], [ "迟" ] ], [ [ "遥" ], [ "遙" ], [ "遥" ] ], [ [ "郷" ], [ "鄉" ], [ "乡" ] ], [ [ "酔" ], [ "醉" ], [ "醉" ] ], [ [ "醸" ], [ "釀" ], [ "酿" ] ], [ [ "釈" ], [ "釋" ], [ "释" ] ], [ [ "鉄" ], [ "鐵" ], [ "铁" ] ], [ [ "鉢" ], [ "鉢" ], [ "钵" ] ], [ [ "鉱" ], [ "礦" ], [ "矿" ] ], [ [ "銭" ], [ "錢" ], [ "钱" ] ], [ [ "鋭" ], [ "鋭" ], [ "锐" ] ], [ [ "鋳" ], [ "鑄" ], [ "铸" ] ], [ [ "録" ], [ "錄" ], [ "录" ] ], [ [ "関" ], [ "關" ], [ "关" ] ], [ [ "閲" ], [ "閲" ], [ "阅" ] ], [ [ "闘" ], [ "鬥" ], [ "斗" ] ], [ [ "陥" ], [ "陷" ], [ "陷" ] ], [ [ "険" ], [ "險" ], [ "险" ] ], [ [ "随" ], [ "隨" ], [ "随" ] ], [ [ "隠" ], [ "隱" ], [ "隐" ] ], [ [ "隣" ], [ "鄰" ], [ "邻" ] ], [ [ "隷" ], [ "隷" ], [ "隶" ] ], [ [ "雑" ], [ "雜" ], [ "杂" ] ], [ [ "霊" ], [ "靈" ], [ "灵" ] ], [ [ "頼" ], [ "賴" ], [ "赖" ] ], [ [ "顔" ], [ "顏" ], [ "颜" ] ], [ [ "顕" ], [ "顯" ], [ "显" ] ], [ [ "駅" ], [ "驛" ], [ "驿" ] ], [ [ "駆" ], [ "驅" ], [ "驱" ] ], [ [ "騒" ], [ "騷" ], [ "骚" ] ], [ [ "験" ], [ "驗" ], [ "验" ] ], [ [ "騨" ], [ "驔" ], [ "驔" ] ], [ [ "髄" ], [ "髓" ], [ "髓" ] ], [ [ "鬪" ], [ "鬥" ], [ "斗" ] ], [ [ "鶏" ], [ "鷄" ], [ "鸡" ] ], [ [ "麦" ], [ "麥" ], [ "麦" ] ], [ [ "黄" ], [ "黃" ], [ "黄" ] ], [ [ "黒" ], [ "黑" ], [ "黑" ] ], [ [ "黙" ], [ "默" ], [ "默" ] ], [ [ "齢" ], [ "齡" ], [ "龄" ] ] ];
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(84), i = n(42);
function o(e, n = {}) {
n = Object.assign({}, t.defaultOptions, n);
let o = [], s = !0, u = i.transcriptionConfigs, l = i.predefineedTranscriptionConfigs;
for (let e of [ "digits", "unitNames" ]) if (Array.isArray(n[e]) && n[e].length) for (let t of n[e]) l[e][t] && (o = o.concat(Object.values(l[e][t])));
if ("number" == typeof n.truncateOne) for (let e in u.default.truncateOne) e < n.truncateOne && o.push(u.default.truncateOne[e]); else void 0 !== n.truncateOne && !0 !== n.truncateOne || !o.length || (o = o.concat(Object.values(u.default.truncateOne)));
n.chars && (o = o.concat(Array.isArray(n.chars) ? n.chars : n.chars.split(""))), 
o.length && (s = !1), o.filter(function(e) {
return 1 == e.length && e in r.characters;
}), s && (o = Object.keys(r.characters)), n.flags = n.flags || "u", n.unsafe && (n.flags = (n.flags || "") + "g");
let c = o.join(""), f = e.toString();
if (!new RegExp("([^" + c + "])").test(f)) return a(f, n);
if (n.strict) return Number.NaN;
let p = new RegExp("([" + c + "]+)", n.flags);
return f.replace(p, function(...e) {
return a(e[1], n);
}).toString();
}
function a(e, t = {}) {
t.one && (e = e.replace(/([佰百])([一二三四五六七八九壹貳參肆伍陸柒捌玖])(?![零○〇一二三四五六七八九壹貳參肆伍陸柒捌玖拾十什])/, "$1〇$2"));
let n = r(e);
return t.string && (n = n.toString()), n;
}
function s(e, t = {}) {
let n = parseInt(e);
if (Number.isNaN(n) || t && t.strict && ("number" != typeof e || n !== e)) throw new TypeError(`${e} is not valid allow number`);
return i.transcribeNumber(n, t);
}
t.defaultOptions = {
one: !0
}, t.transcriptionConfigs = i.transcriptionConfigs, t.predefineedTranscriptionConfigs = i.predefineedTranscriptionConfigs, 
t.zh2num = o, t._chinese_parseInt = a, t.num2zh = s, t.default = t;
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
for (var o = 0, a = -1, s = 0; s < e.length; ++s) {
var u = i[e.charAt(s)];
if (void 0 === u) return NaN;
u < 10 ? a = -1 == a ? u : 10 * a + u : u < 1e4 ? (-1 == a && (a = 1), s > 1 && 0 == a && 100 != i[e.charAt(s - 2)] && (a = 1), 
o += a * u, a = -1) : (-1 != a && (o += a), s && i[e.charAt(s - 1)] >= 1e4 ? n *= i[e.charAt(s)] : n += o * u, 
o = 0, a = -1);
}
return a > 0 && (e.length > 1 ? o += (u = i[e.charAt(e.length - 2)]) < 100 ? a : a * ((u /= u.toString().charAt(0)) / 10) : o += a), 
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
}, i = n(43);
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
for (var a = "", s = ""; t.length > 0; ) {
var u = "";
if (o[t.slice(0, 2)] ? (u = t.slice(0, 2), t = t.slice(2)) : (u = t[0], t = t.slice(1)), 
"っ" !== u) {
var l = o[u] || "";
"っ" === s && (l.match(/^[^aiueo]/) ? l = "ち" === u[0] ? "tchi" === n["っち"] ? {
"ち": "tchi",
"ちゃ": "tcha",
"ちゅ": "tchu",
"ちぇ": "tche",
"ちょ": "tcho"
}[u] : "cchi" === n["っち"] ? {
"ち": "cchi",
"ちゃ": "ccha",
"ちゅ": "cchu",
"ちぇ": "cche",
"ちょ": "ccho"
}[u] : {
"ち": "tti",
"ちゃ": "ttya",
"ちゅ": "ttyu",
"ちぇ": "ttye",
"ちょ": "ttyo"
}[u] : l[0] + l : a += "'"), "ー" === u ? a.match(/[aiueo]$/) ? ("a" === n["あー"] || ("ah" === n["あー"] ? a += "h" : "a-" === n["あー"] ? a += "-" : "aa" === n["あー"] ? a = a.slice(0, -1) + {
a: "aa",
i: "ii",
u: "uu",
e: "ee",
o: "oo"
}[a.slice(-1)] : "â" === n["あー"] ? a = a.slice(0, -1) + {
a: "â",
i: "î",
u: "û",
e: "ê",
o: "ô"
}[a.slice(-1)] : "ā" === n["あー"] && (a = a.slice(0, -1) + {
a: "ā",
i: "ī",
u: "ū",
e: "ē",
o: "ō"
}[a.slice(-1)])), l = "") : l = "-" : "e" === a.slice(-1) && "i" === l[0] ? (l = l.slice(1), 
"ei" === n["えい"] ? a += "i" : "ee" === n["えい"] ? a += "e" : "eh" === n["えい"] ? a += "h" : "ê" === n["えい"] ? a = a.slice(0, -1) + "ê" : "ē" === n["えい"] ? a = a.slice(0, -1) + "ē" : n["えい"]) : "o" === a.slice(-1) && "u" === l[0] ? (l = l.slice(1), 
"ou" === n["おう"] ? a += "u" : "oo" === n["おう"] ? a += "o" : "oh" === n["おう"] ? a += "h" : "ô" === n["おう"] ? a = a.slice(0, -1) + "ô" : "ō" === n["おう"] ? a = a.slice(0, -1) + "ō" : n["おう"]) : a.match(/[aiueo]$/) && a.slice(-1) === l[0] && "を" !== u && (l = l.slice(1), 
a = a.slice(0, -1) + n[{
a: "ああ",
i: "いい",
u: "うう",
e: "ええ",
o: "おお"
}[a.slice(-1)]]), l.match(/^[bpm]/) && "ん" === s && ("nba" === n["んば"] || "mba" === n["んば"] && (a = a.slice(0, -1) + "m")), 
l.match(/^[aiueoy]/) && "ん" === s && ("na" === n["んあ"] || ("n'a" === n["んあ"] ? l = "'" + l : "n-a" === n["んあ"] && (l = "-" + l))), 
n.punctuation && e.romanizePuncutuationTable[u] && (l = e.romanizePuncutuationTable[u]), 
a += l, s = u;
} else s = u;
}
return "っ" === s && (a += "'"), a;
};
};
}, function(e, t, n) {
"use strict";
(function(t) {
var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}, i = n(43), o = n(92);
function a(e, t) {
var n, r;
return !!((e[Math.floor(t / 8)] || 0) & 1 << 7 - t % 8);
}
function s(e, t, n) {
for (var r = new o(0), i = t; i < t + n; i++) r = r.times(2), a(e, i) && (r = r.plus(1));
return r;
}
var u = 9007199254740991, l = -9007199254740991;
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
}, e.transcribeNumber = function(n, u) {
if (void 0 === u && (u = e.transcriptionConfigs.default), "string" == typeof u && void 0 === (u = e.transcriptionConfigs[u])) throw new ReferenceError('Transcription method "' + u + '" is undefined');
if ("object" !== (void 0 === u ? "undefined" : r(u))) throw new Error("You specified unknown config to japanese.transcribeNumber");
if ("string" == typeof (u = i({}, e.transcriptionConfigs.default, u)).digits && (u.digits = e.predefineedTranscriptionConfigs.digits[u.digits], 
void 0 === u.digits)) throw new ReferenceError('Transcription method of digits "' + u.digits + '" is undefined');
if ("string" == typeof u.unitNames && (u.unitNames = e.predefineedTranscriptionConfigs.unitNames[u.unitNames], 
void 0 === u.unitNames)) throw new ReferenceError('Transcription method of unitNames "' + u.unitNames + '" is undefined');
if ("string" == typeof u.specialUnitNames && (u.specialUnitNames = e.predefineedTranscriptionConfigs.specialUnitNames[u.specialUnitNames], 
void 0 === u.specialUnitNames)) throw new ReferenceError('Transcription method of specialUnitNames "' + u.specialUnitNames + '" is undefined');
if ("string" == typeof u.smallUnitNames && (u.smallUnitNames = e.predefineedTranscriptionConfigs.smallUnitNames[u.smallUnitNames], 
void 0 === u.smallUnitNames)) throw new ReferenceError('Transcription method of smallUnitNames "' + u.smallUnitNames + '" is undefined');
if ("number" == typeof n) if (l <= n && n < 9007199254740991) n = n.toString(); else {
var c = new t(8);
c.writeDoubleBE(n, 0);
var f = a(c, 0), p = s(c, 1, 11), h = s(c, 12, 52), d = null;
0 === (p = parseInt(p.toString())) ? (d = h, p = 1) : d = new o(2).pow(52).plus(h), 
n = d.times(new o(2).pow(p - 1023 - 52)).toFixed(), f && (n = "-" + n);
} else if ("string" != typeof n) throw new ReferenceError("Type of `number` is unsupported");
var g = n.length, _ = "", m = !1;
if (u.unitNames.lit && g > u.unitNames.lit && (_ = n.slice(0, -u.unitNames.lit).split("").map(function(e) {
return u.digits[e];
}).join(""), n = n.slice(-u.unitNames.lit), g = n.length, "0" === n[0] && (m = !0, 
n = "9" + n.slice(1))), "0" === n) return u.digits[0];
var y = "";
"0" !== n.slice(-1) && (y += u.digits[n.slice(-1)]);
var D = Object.keys(u.unitNames).map(function(e) {
return parseInt(e);
}).filter(function(e, t, n) {
return n.indexOf(e) === t;
}).filter(function(e) {
return isFinite(e) && e > 0;
}).sort(function(e, t) {
return e - t;
});
return D.forEach(function(t, r) {
var i = D[r + 1] || Infinity, o = n.slice(Math.max(g - i, 0), Math.max(g - t, 0));
o.length > 0 && (o.split("").every(function(e) {
return "0" === e;
}) || (y = -1 !== u.truncateOne.indexOf(u.unitNames[t]) && 1 === parseInt(o) ? u.unitNames[t] + y : e.transcribeNumber(o, u) + u.unitNames[t] + y));
}), m && (y = y.replace(new RegExp("^" + u.digits[9]), u.digits[0])), y = _ + y;
}, e;
};
}).call(this, n(88).Buffer);
}, function(e, t, n) {
"use strict";
(function(e) {
var r = n(89), i = n(90), o = n(91);
function a() {
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
function s() {
return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function u(e, t) {
if (s() < t) throw new RangeError("Invalid typed array length");
return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), 
e.length = t), e;
}
function l(e, t, n) {
if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
if ("number" == typeof e) {
if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
return h(this, e);
}
return c(this, e, t, n);
}
function c(e, t, n, r) {
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? _(e, t, n, r) : "string" == typeof t ? d(e, t, n) : m(e, t);
}
function f(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function p(e, t, n, r) {
return f(t), t <= 0 ? u(e, t) : void 0 !== n ? "string" == typeof r ? u(e, t).fill(n, r) : u(e, t).fill(n) : u(e, t);
}
function h(e, t) {
if (f(t), e = u(e, t < 0 ? 0 : 0 | y(t)), !l.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
return e;
}
function d(e, t, n) {
if ("string" == typeof n && "" !== n || (n = "utf8"), !l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var r = 0 | b(t, n), i = (e = u(e, r)).write(t, n);
return i !== r && (e = e.slice(0, i)), e;
}
function g(e, t) {
var n = t.length < 0 ? 0 : 0 | y(t.length);
e = u(e, n);
for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
return e;
}
function _(e, t, n, r) {
if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), 
l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = g(e, t), e;
}
function m(e, t) {
if (l.isBuffer(t)) {
var n = 0 | y(t.length);
return 0 === (e = u(e, n)).length ? e : (t.copy(e, 0, 0, n), e);
}
if (t) {
if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || te(t.length) ? u(e, 0) : g(e, t);
if ("Buffer" === t.type && o(t.data)) return g(e, t.data);
}
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function y(e) {
if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
return 0 | e;
}
function D(e) {
return +e != e && (e = 0), l.alloc(+e);
}
function b(e, t) {
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
return Q(e).length;

default:
if (r) return Z(e).length;
t = ("" + t).toLowerCase(), r = !0;
}
}
function v(e, t, n) {
var r = !1;
if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
if ((n >>>= 0) <= (t >>>= 0)) return "";
for (e || (e = "utf8"); ;) switch (e) {
case "hex":
return R(this, t, n);

case "utf8":
case "utf-8":
return j(this, t, n);

case "ascii":
return M(this, t, n);

case "latin1":
case "binary":
return O(this, t, n);

case "base64":
return I(this, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return N(this, t, n);

default:
if (r) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase(), r = !0;
}
}
function E(e, t, n) {
var r = e[t];
e[t] = e[n], e[n] = r;
}
function C(e, t, n, r, i) {
if (0 === e.length) return -1;
if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
if (i) return -1;
n = e.length - 1;
} else if (n < 0) {
if (!i) return -1;
n = 0;
}
if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : S(e, t, n, r, i);
if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : S(e, [ t ], n, r, i);
throw new TypeError("val must be string, number or Buffer");
}
function S(e, t, n, r, i) {
var o = 1, a = e.length, s = t.length, u;
if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
if (e.length < 2 || t.length < 2) return -1;
o = 2, a /= 2, s /= 2, n /= 2;
}
function l(e, t) {
return 1 === o ? e[t] : e.readUInt16BE(t * o);
}
if (i) {
var c = -1;
for (u = n; u < a; u++) if (l(e, u) === l(t, -1 === c ? 0 : u - c)) {
if (-1 === c && (c = u), u - c + 1 === s) return c * o;
} else -1 !== c && (u -= u - c), c = -1;
} else for (n + s > a && (n = a - s), u = n; u >= 0; u--) {
for (var f = !0, p = 0; p < s; p++) if (l(e, u + p) !== l(t, p)) {
f = !1;
break;
}
if (f) return u;
}
return -1;
}
function x(e, t, n, r) {
n = Number(n) || 0;
var i = e.length - n;
r ? (r = Number(r)) > i && (r = i) : r = i;
var o = t.length;
if (o % 2 != 0) throw new TypeError("Invalid hex string");
r > o / 2 && (r = o / 2);
for (var a = 0; a < r; ++a) {
var s = parseInt(t.substr(2 * a, 2), 16);
if (isNaN(s)) return a;
e[n + a] = s;
}
return a;
}
function w(e, t, n, r) {
return ee(Z(t, e.length - n), e, n, r);
}
function A(e, t, n, r) {
return ee(X(t), e, n, r);
}
function L(e, t, n, r) {
return A(e, t, n, r);
}
function P(e, t, n, r) {
return ee(Q(t), e, n, r);
}
function T(e, t, n, r) {
return ee(J(t, e.length - n), e, n, r);
}
function I(e, t, n) {
return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
}
function j(e, t, n) {
n = Math.min(e.length, n);
for (var r = [], i = t; i < n; ) {
var o = e[i], a = null, s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1, u, l, c, f;
if (i + s <= n) switch (s) {
case 1:
o < 128 && (a = o);
break;

case 2:
128 == (192 & (u = e[i + 1])) && (f = (31 & o) << 6 | 63 & u) > 127 && (a = f);
break;

case 3:
u = e[i + 1], l = e[i + 2], 128 == (192 & u) && 128 == (192 & l) && (f = (15 & o) << 12 | (63 & u) << 6 | 63 & l) > 2047 && (f < 55296 || f > 57343) && (a = f);
break;

case 4:
u = e[i + 1], l = e[i + 2], c = e[i + 3], 128 == (192 & u) && 128 == (192 & l) && 128 == (192 & c) && (f = (15 & o) << 18 | (63 & u) << 12 | (63 & l) << 6 | 63 & c) > 65535 && f < 1114112 && (a = f);
}
null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), 
a = 56320 | 1023 & a), r.push(a), i += s;
}
return k(r);
}
t.Buffer = l, t.SlowBuffer = D, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : a(), 
t.kMaxLength = s(), l.poolSize = 8192, l._augment = function(e) {
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
return h(null, e);
}, l.allocUnsafeSlow = function(e) {
return h(null, e);
}, l.isBuffer = function e(t) {
return !(null == t || !t._isBuffer);
}, l.compare = function e(t, n) {
if (!l.isBuffer(t) || !l.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
if (t === n) return 0;
for (var r = t.length, i = n.length, o = 0, a = Math.min(r, i); o < a; ++o) if (t[o] !== n[o]) {
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
var i = l.allocUnsafe(n), a = 0;
for (r = 0; r < t.length; ++r) {
var s = t[r];
if (!l.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
s.copy(i, a), a += s.length;
}
return i;
}, l.byteLength = b, l.prototype._isBuffer = !0, l.prototype.swap16 = function e() {
var t = this.length;
if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var n = 0; n < t; n += 2) E(this, n, n + 1);
return this;
}, l.prototype.swap32 = function e() {
var t = this.length;
if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var n = 0; n < t; n += 4) E(this, n, n + 3), E(this, n + 1, n + 2);
return this;
}, l.prototype.swap64 = function e() {
var t = this.length;
if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var n = 0; n < t; n += 8) E(this, n, n + 7), E(this, n + 1, n + 6), E(this, n + 2, n + 5), 
E(this, n + 3, n + 4);
return this;
}, l.prototype.toString = function e() {
var t = 0 | this.length;
return 0 === t ? "" : 0 === arguments.length ? j(this, 0, t) : v.apply(this, arguments);
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
for (var a = (o >>>= 0) - (i >>>= 0), s = (r >>>= 0) - (n >>>= 0), u = Math.min(a, s), c = this.slice(i, o), f = t.slice(n, r), p = 0; p < u; ++p) if (c[p] !== f[p]) {
a = c[p], s = f[p];
break;
}
return a < s ? -1 : s < a ? 1 : 0;
}, l.prototype.includes = function e(t, n, r) {
return -1 !== this.indexOf(t, n, r);
}, l.prototype.indexOf = function e(t, n, r) {
return C(this, t, n, r, !0);
}, l.prototype.lastIndexOf = function e(t, n, r) {
return C(this, t, n, r, !1);
}, l.prototype.write = function e(t, n, r, i) {
if (void 0 === n) i = "utf8", r = this.length, n = 0; else if (void 0 === r && "string" == typeof n) i = n, 
r = this.length, n = 0; else {
if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
n |= 0, isFinite(r) ? (r |= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0);
}
var o = this.length - n;
if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
i || (i = "utf8");
for (var a = !1; ;) switch (i) {
case "hex":
return x(this, t, n, r);

case "utf8":
case "utf-8":
return w(this, t, n, r);

case "ascii":
return A(this, t, n, r);

case "latin1":
case "binary":
return L(this, t, n, r);

case "base64":
return P(this, t, n, r);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return T(this, t, n, r);

default:
if (a) throw new TypeError("Unknown encoding: " + i);
i = ("" + i).toLowerCase(), a = !0;
}
}, l.prototype.toJSON = function e() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
var F = 4096;
function k(e) {
var t = e.length;
if (t <= F) return String.fromCharCode.apply(String, e);
for (var n = "", r = 0; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, r += F));
return n;
}
function M(e, t, n) {
var r = "";
n = Math.min(e.length, n);
for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
return r;
}
function O(e, t, n) {
var r = "";
n = Math.min(e.length, n);
for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
return r;
}
function R(e, t, n) {
var r = e.length;
(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
for (var i = "", o = t; o < n; ++o) i += Y(e[o]);
return i;
}
function N(e, t, n) {
for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
return i;
}
function B(e, t, n) {
if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
}
function $(e, t, n, r, i, o) {
if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
if (n + r > e.length) throw new RangeError("Index out of range");
}
function G(e, t, n, r) {
t < 0 && (t = 65535 + t + 1);
for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
}
function U(e, t, n, r) {
t < 0 && (t = 4294967295 + t + 1);
for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255;
}
function H(e, t, n, r, i, o) {
if (n + r > e.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("Index out of range");
}
function z(e, t, n, r, o) {
return o || H(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), i.write(e, t, n, r, 23, 4), 
n + 4;
}
function V(e, t, n, r, o) {
return o || H(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), i.write(e, t, n, r, 52, 8), 
n + 8;
}
l.prototype.slice = function e(t, n) {
var r = this.length, i;
if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (n = void 0 === n ? r : ~~n) < 0 ? (n += r) < 0 && (n = 0) : n > r && (n = r), 
n < t && (n = t), l.TYPED_ARRAY_SUPPORT) (i = this.subarray(t, n)).__proto__ = l.prototype; else {
var o = n - t;
i = new l(o, void 0);
for (var a = 0; a < o; ++a) i[a] = this[a + t];
}
return i;
}, l.prototype.readUIntLE = function e(t, n, r) {
t |= 0, n |= 0, r || B(t, n, this.length);
for (var i = this[t], o = 1, a = 0; ++a < n && (o *= 256); ) i += this[t + a] * o;
return i;
}, l.prototype.readUIntBE = function e(t, n, r) {
t |= 0, n |= 0, r || B(t, n, this.length);
for (var i = this[t + --n], o = 1; n > 0 && (o *= 256); ) i += this[t + --n] * o;
return i;
}, l.prototype.readUInt8 = function e(t, n) {
return n || B(t, 1, this.length), this[t];
}, l.prototype.readUInt16LE = function e(t, n) {
return n || B(t, 2, this.length), this[t] | this[t + 1] << 8;
}, l.prototype.readUInt16BE = function e(t, n) {
return n || B(t, 2, this.length), this[t] << 8 | this[t + 1];
}, l.prototype.readUInt32LE = function e(t, n) {
return n || B(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
}, l.prototype.readUInt32BE = function e(t, n) {
return n || B(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
}, l.prototype.readIntLE = function e(t, n, r) {
t |= 0, n |= 0, r || B(t, n, this.length);
for (var i = this[t], o = 1, a = 0; ++a < n && (o *= 256); ) i += this[t + a] * o;
return i >= (o *= 128) && (i -= Math.pow(2, 8 * n)), i;
}, l.prototype.readIntBE = function e(t, n, r) {
t |= 0, n |= 0, r || B(t, n, this.length);
for (var i = n, o = 1, a = this[t + --i]; i > 0 && (o *= 256); ) a += this[t + --i] * o;
return a >= (o *= 128) && (a -= Math.pow(2, 8 * n)), a;
}, l.prototype.readInt8 = function e(t, n) {
return n || B(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
}, l.prototype.readInt16LE = function e(t, n) {
n || B(t, 2, this.length);
var r = this[t] | this[t + 1] << 8;
return 32768 & r ? 4294901760 | r : r;
}, l.prototype.readInt16BE = function e(t, n) {
n || B(t, 2, this.length);
var r = this[t + 1] | this[t] << 8;
return 32768 & r ? 4294901760 | r : r;
}, l.prototype.readInt32LE = function e(t, n) {
return n || B(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
}, l.prototype.readInt32BE = function e(t, n) {
return n || B(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
}, l.prototype.readFloatLE = function e(t, n) {
return n || B(t, 4, this.length), i.read(this, t, !0, 23, 4);
}, l.prototype.readFloatBE = function e(t, n) {
return n || B(t, 4, this.length), i.read(this, t, !1, 23, 4);
}, l.prototype.readDoubleLE = function e(t, n) {
return n || B(t, 8, this.length), i.read(this, t, !0, 52, 8);
}, l.prototype.readDoubleBE = function e(t, n) {
return n || B(t, 8, this.length), i.read(this, t, !1, 52, 8);
}, l.prototype.writeUIntLE = function e(t, n, r, i) {
var o;
t = +t, n |= 0, r |= 0, i || $(this, t, n, r, Math.pow(2, 8 * r) - 1, 0);
var a = 1, s = 0;
for (this[n] = 255 & t; ++s < r && (a *= 256); ) this[n + s] = t / a & 255;
return n + r;
}, l.prototype.writeUIntBE = function e(t, n, r, i) {
var o;
t = +t, n |= 0, r |= 0, i || $(this, t, n, r, Math.pow(2, 8 * r) - 1, 0);
var a = r - 1, s = 1;
for (this[n + a] = 255 & t; --a >= 0 && (s *= 256); ) this[n + a] = t / s & 255;
return n + r;
}, l.prototype.writeUInt8 = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
this[n] = 255 & t, n + 1;
}, l.prototype.writeUInt16LE = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, 
this[n + 1] = t >>> 8) : G(this, t, n, !0), n + 2;
}, l.prototype.writeUInt16BE = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, 
this[n + 1] = 255 & t) : G(this, t, n, !1), n + 2;
}, l.prototype.writeUInt32LE = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, 
this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : U(this, t, n, !0), 
n + 4;
}, l.prototype.writeUInt32BE = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, 
this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : U(this, t, n, !1), 
n + 4;
}, l.prototype.writeIntLE = function e(t, n, r, i) {
if (t = +t, n |= 0, !i) {
var o = Math.pow(2, 8 * r - 1);
$(this, t, n, r, o - 1, -o);
}
var a = 0, s = 1, u = 0;
for (this[n] = 255 & t; ++a < r && (s *= 256); ) t < 0 && 0 === u && 0 !== this[n + a - 1] && (u = 1), 
this[n + a] = (t / s >> 0) - u & 255;
return n + r;
}, l.prototype.writeIntBE = function e(t, n, r, i) {
if (t = +t, n |= 0, !i) {
var o = Math.pow(2, 8 * r - 1);
$(this, t, n, r, o - 1, -o);
}
var a = r - 1, s = 1, u = 0;
for (this[n + a] = 255 & t; --a >= 0 && (s *= 256); ) t < 0 && 0 === u && 0 !== this[n + a + 1] && (u = 1), 
this[n + a] = (t / s >> 0) - u & 255;
return n + r;
}, l.prototype.writeInt8 = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1;
}, l.prototype.writeInt16LE = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, 
this[n + 1] = t >>> 8) : G(this, t, n, !0), n + 2;
}, l.prototype.writeInt16BE = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, 
this[n + 1] = 255 & t) : G(this, t, n, !1), n + 2;
}, l.prototype.writeInt32LE = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, 
this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : U(this, t, n, !0), 
n + 4;
}, l.prototype.writeInt32BE = function e(t, n, r) {
return t = +t, n |= 0, r || $(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
l.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, 
this[n + 3] = 255 & t) : U(this, t, n, !1), n + 4;
}, l.prototype.writeFloatLE = function e(t, n, r) {
return z(this, t, n, !0, r);
}, l.prototype.writeFloatBE = function e(t, n, r) {
return z(this, t, n, !1, r);
}, l.prototype.writeDoubleLE = function e(t, n, r) {
return V(this, t, n, !0, r);
}, l.prototype.writeDoubleBE = function e(t, n, r) {
return V(this, t, n, !1, r);
}, l.prototype.copy = function e(t, n, r, i) {
if (r || (r = 0), i || 0 === i || (i = this.length), n >= t.length && (n = t.length), 
n || (n = 0), i > 0 && i < r && (i = r), i === r) return 0;
if (0 === t.length || 0 === this.length) return 0;
if (n < 0) throw new RangeError("targetStart out of bounds");
if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
if (i < 0) throw new RangeError("sourceEnd out of bounds");
i > this.length && (i = this.length), t.length - n < i - r && (i = t.length - n + r);
var o = i - r, a;
if (this === t && r < n && n < i) for (a = o - 1; a >= 0; --a) t[a + n] = this[a + r]; else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT) for (a = 0; a < o; ++a) t[a + n] = this[a + r]; else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), n);
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
var a;
if (n >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (a = n; a < r; ++a) this[a] = t; else {
var s = l.isBuffer(t) ? t : Z(new l(t, i).toString()), u = s.length;
for (a = 0; a < r - n; ++a) this[a + n] = s[a % u];
}
return this;
};
var q = /[^+\/0-9A-Za-z-_]/g;
function W(e) {
if ((e = K(e).replace(q, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function K(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Y(e) {
return e < 16 ? "0" + e.toString(16) : e.toString(16);
}
function Z(e, t) {
var n;
t = t || Infinity;
for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
if (!i) {
if (n > 56319) {
(t -= 3) > -1 && o.push(239, 191, 189);
continue;
}
if (a + 1 === r) {
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
function X(e) {
for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
return t;
}
function J(e, t) {
for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = (n = e.charCodeAt(a)) >> 8, 
i = n % 256, o.push(i), o.push(r);
return o;
}
function Q(e) {
return r.toByteArray(W(e));
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
for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) r[s] = a[s], 
i[a.charCodeAt(s)] = s;
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
for (var t, n = l(e), r = n[0], a = n[1], s = new o(f(e, r, a)), u = 0, c = a > 0 ? r - 4 : r, p = 0; p < c; p += 4) t = i[e.charCodeAt(p)] << 18 | i[e.charCodeAt(p + 1)] << 12 | i[e.charCodeAt(p + 2)] << 6 | i[e.charCodeAt(p + 3)], 
s[u++] = t >> 16 & 255, s[u++] = t >> 8 & 255, s[u++] = 255 & t;
return 2 === a && (t = i[e.charCodeAt(p)] << 2 | i[e.charCodeAt(p + 1)] >> 4, s[u++] = 255 & t), 
1 === a && (t = i[e.charCodeAt(p)] << 10 | i[e.charCodeAt(p + 1)] << 4 | i[e.charCodeAt(p + 2)] >> 2, 
s[u++] = t >> 8 & 255, s[u++] = 255 & t), s;
}
function h(e) {
return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[63 & e];
}
function d(e, t, n) {
for (var r, i = [], o = t; o < n; o += 3) r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), 
i.push(h(r));
return i.join("");
}
function g(e) {
for (var t, n = e.length, i = n % 3, o = [], a = 16383, s = 0, u = n - i; s < u; s += 16383) o.push(d(e, s, s + 16383 > u ? u : s + 16383));
return 1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], 
o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), o.join("");
}
i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
}, function(e, t) {
t.read = function(e, t, n, r, i) {
var o, a, s = 8 * i - r - 1, u = (1 << s) - 1, l = u >> 1, c = -7, f = n ? i - 1 : 0, p = n ? -1 : 1, h = e[t + f];
for (f += p, o = h & (1 << -c) - 1, h >>= -c, c += s; c > 0; o = 256 * o + e[t + f], 
f += p, c -= 8) ;
for (a = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; a = 256 * a + e[t + f], f += p, 
c -= 8) ;
if (0 === o) o = 1 - l; else {
if (o === u) return a ? NaN : Infinity * (h ? -1 : 1);
a += Math.pow(2, r), o -= l;
}
return (h ? -1 : 1) * a * Math.pow(2, o - r);
}, t.write = function(e, t, n, r, i, o) {
var a, s, u, l = 8 * o - i - 1, c = (1 << l) - 1, f = c >> 1, p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = r ? 0 : o - 1, d = r ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
for (t = Math.abs(t), isNaN(t) || Infinity === t ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), 
t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + f >= 1 ? p / u : p * Math.pow(2, 1 - f)) * u >= 2 && (a++, 
u /= 2), a + f >= c ? (s = 0, a = c) : a + f >= 1 ? (s = (t * u - 1) * Math.pow(2, i), 
a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + h] = 255 & s, 
h += d, s /= 256, i -= 8) ;
for (a = a << i | s, l += i; l > 0; e[n + h] = 255 & a, h += d, a /= 256, l -= 8) ;
e[n + h - d] |= 128 * g;
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
var o = 20, a = 1, s = 1e6, u = 1e6, l = -7, c = 21, f = {}, p = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, h;
function d() {
function e(t) {
var n = this;
if (!(n instanceof e)) return void 0 === t ? d() : new e(t);
t instanceof e ? (n.s = t.s, n.e = t.e, n.c = t.c.slice()) : _(n, t), n.constructor = e;
}
return e.prototype = f, e.DP = o, e.RM = a, e.E_NEG = l, e.E_POS = c, e;
}
function g(e, t, n) {
var r = e.constructor, i = t - (e = new r(e)).e, o = e.c;
for (o.length > ++t && m(e, i, r.RM), o[0] ? n ? i = t : (o = e.c, i = e.e + i + 1) : ++i; o.length < i; o.push(0)) ;
return i = e.e, 1 === n || n && (t <= i || i <= r.E_NEG) ? (e.s < 0 && o[0] ? "-" : "") + (o.length > 1 ? o[0] + "." + o.join("").slice(1) : o[0]) + (i < 0 ? "e" : "e+") + i : e.toString();
}
function _(e, t) {
var n, r, i;
for (0 === t && 1 / t < 0 ? t = "-0" : p.test(t += "") || y(NaN), e.s = "-" == t.charAt(0) ? (t = t.slice(1), 
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
var i, o = e.c, a = e.e + t + 1;
if (1 === n ? r = o[a] >= 5 : 2 === n ? r = o[a] > 5 || 5 == o[a] && (r || a < 0 || o[a + 1] !== i || 1 & o[a - 1]) : 3 === n ? r = r || o[a] !== i || a < 0 : (r = !1, 
0 !== n && y("!Big.RM!")), a < 1 || !o[0]) r ? (e.e = -t, e.c = [ 1 ]) : e.c = [ e.e = 0 ]; else {
if (o.length = a--, r) for (;++o[a] > 9; ) o[a] = 0, a-- || (++e.e, o.unshift(1));
for (a = o.length; !o[--a]; o.pop()) ;
}
return e;
}
function y(e) {
var t = new Error(e);
throw t.name = "BigError", t;
}
f.abs = function() {
var e = new this.constructor(this);
return e.s = 1, e;
}, f.cmp = function(e) {
var t, n = this, r = n.c, i = (e = new n.constructor(e)).c, o = n.s, a = e.s, s = n.e, u = e.e;
if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -a : 0;
if (o != a) return o;
if (t = o < 0, s != u) return s > u ^ t ? 1 : -1;
for (o = -1, a = (s = r.length) < (u = i.length) ? s : u; ++o < a; ) if (r[o] != i[o]) return r[o] > i[o] ^ t ? 1 : -1;
return s == u ? 0 : s > u ^ t ? 1 : -1;
}, f.div = function(e) {
var t = this, n = t.constructor, r = t.c, i = (e = new n(e)).c, o = t.s == e.s ? 1 : -1, a = n.DP;
if ((a !== ~~a || a < 0 || a > 1e6) && y("!Big.DP!"), !r[0] || !i[0]) return r[0] == i[0] && y(NaN), 
i[0] || y(o / 0), new n(0 * o);
var s, u, l, c, f, p, h = i.slice(), d = s = i.length, g = r.length, _ = r.slice(0, s), D = _.length, b = e, v = b.c = [], E = 0, C = a + (b.e = t.e - e.e) + 1;
for (b.s = o, o = C < 0 ? 0 : C, h.unshift(0); D++ < s; _.push(0)) ;
do {
for (l = 0; l < 10; l++) {
if (s != (D = _.length)) c = s > D ? 1 : -1; else for (f = -1, c = 0; ++f < s; ) if (i[f] != _[f]) {
c = i[f] > _[f] ? 1 : -1;
break;
}
if (!(c < 0)) break;
for (u = D == s ? i : h; D; ) {
if (_[--D] < u[D]) {
for (f = D; f && !_[--f]; _[f] = 9) ;
--_[f], _[D] += 10;
}
_[D] -= u[D];
}
for (;!_[0]; _.shift()) ;
}
v[E++] = c ? l : ++l, _[0] && c ? _[D] = r[d] || 0 : _ = [ r[d] ];
} while ((d++ < g || _[0] !== p) && o--);
return v[0] || 1 == E || (v.shift(), b.e--), E > C && m(b, a, n.RM, _[0] !== p), 
b;
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
var t, n, r, i, o = this, a = o.constructor, s = o.s, u = (e = new a(e)).s;
if (s != u) return e.s = -u, o.plus(e);
var l = o.c.slice(), c = o.e, f = e.c, p = e.e;
if (!l[0] || !f[0]) return f[0] ? (e.s = -u, e) : new a(l[0] ? o : 0);
if (s = c - p) {
for ((i = s < 0) ? (s = -s, r = l) : (p = c, r = f), r.reverse(), u = s; u--; r.push(0)) ;
r.reverse();
} else for (n = ((i = l.length < f.length) ? l : f).length, s = u = 0; u < n; u++) if (l[u] != f[u]) {
i = l[u] < f[u];
break;
}
if (i && (r = l, l = f, f = r, e.s = -e.s), (u = (n = f.length) - (t = l.length)) > 0) for (;u--; l[t++] = 0) ;
for (u = t; n > s; ) {
if (l[--n] < f[n]) {
for (t = n; t && !l[--t]; l[t] = 9) ;
--l[t], l[n] += 10;
}
l[n] -= f[n];
}
for (;0 === l[--u]; l.pop()) ;
for (;0 === l[0]; ) l.shift(), --p;
return l[0] || (e.s = 1, l = [ p = 0 ]), e.c = l, e.e = p, e;
}, f.mod = function(e) {
var t, n = this, r = n.constructor, i = n.s, o = (e = new r(e)).s;
return e.c[0] || y(NaN), n.s = e.s = 1, t = 1 == e.cmp(n), n.s = i, e.s = o, t ? new r(n) : (i = r.DP, 
o = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = i, r.RM = o, this.minus(n.times(e)));
}, f.add = f.plus = function(e) {
var t, n = this, r = n.constructor, i = n.s, o = (e = new r(e)).s;
if (i != o) return e.s = -o, n.minus(e);
var a = n.e, s = n.c, u = e.e, l = e.c;
if (!s[0] || !l[0]) return l[0] ? e : new r(s[0] ? n : 0 * i);
if (s = s.slice(), i = a - u) {
for (i > 0 ? (u = a, t = l) : (i = -i, t = s), t.reverse(); i--; t.push(0)) ;
t.reverse();
}
for (s.length - l.length < 0 && (t = l, l = s, s = t), i = l.length, o = 0; i; ) o = (s[--i] = s[i] + l[i] + o) / 10 | 0, 
s[i] %= 10;
for (o && (s.unshift(o), ++u), i = s.length; 0 === s[--i]; s.pop()) ;
return e.c = s, e.e = u, e;
}, f.pow = function(e) {
var t = this, n = new t.constructor(1), r = n, i = e < 0;
for ((e !== ~~e || e < -1e6 || e > 1e6) && y("!pow!"), e = i ? -e : e; 1 & e && (r = r.times(t)), 
e >>= 1; ) t = t.times(t);
return i ? n.div(r) : r;
}, f.round = function(e, t) {
var n = this, r = n.constructor;
return null == e ? e = 0 : (e !== ~~e || e < 0 || e > 1e6) && y("!round!"), m(n = new r(n), e, null == t ? r.RM : t), 
n;
}, f.sqrt = function() {
var e, t, n, r = this, i = r.constructor, o = r.c, a = r.s, s = r.e, u = new i("0.5");
if (!o[0]) return new i(r);
a < 0 && y(NaN), 0 === (a = Math.sqrt(r.toString())) || a === 1 / 0 ? ((e = o.join("")).length + s & 1 || (e += "0"), 
(t = new i(Math.sqrt(e).toString())).e = ((s + 1) / 2 | 0) - (s < 0 || 1 & s)) : t = new i(a.toString()), 
a = t.e + (i.DP += 4);
do {
n = t, t = u.times(n.plus(r.div(n)));
} while (n.c.slice(0, a).join("") !== t.c.slice(0, a).join(""));
return m(t, i.DP -= 4, i.RM), t;
}, f.mul = f.times = function(e) {
var t, n = this, r = n.constructor, i = n.c, o = (e = new r(e)).c, a = i.length, s = o.length, u = n.e, l = e.e;
if (e.s = n.s == e.s ? 1 : -1, !i[0] || !o[0]) return new r(0 * e.s);
for (e.e = u + l, a < s && (t = i, i = o, o = t, l = a, a = s, s = l), t = new Array(l = a + s); l--; t[l] = 0) ;
for (u = s; u--; ) {
for (s = 0, l = a + u; l > u; ) s = t[l] + o[u] * i[l - u - 1] + s, t[l--] = s % 10, 
s = s / 10 | 0;
t[l] = (t[l] + s) % 10;
}
for (s && ++e.e, t[0] || t.shift(), u = t.length; !t[--u]; t.pop()) ;
return e.c = t, e;
}, f.toString = f.valueOf = f.toJSON = function() {
var e = this, t = e.constructor, n = e.e, r = e.c.join(""), i = r.length;
if (n <= t.E_NEG || n >= t.E_POS) r = r.charAt(0) + (i > 1 ? "." + r.slice(1) : "") + (n < 0 ? "e" : "e+") + n; else if (n < 0) {
for (;++n; r = "0" + r) ;
r = "0." + r;
} else if (n > 0) if (++n > i) for (n -= i; n--; r += "0") ; else n < i && (r = r.slice(0, n) + "." + r.slice(n)); else i > 1 && (r = r.charAt(0) + "." + r.slice(1));
return e.s < 0 && e.c[0] ? "-" + r : r;
}, f.toExponential = function(e) {
return null == e ? e = this.c.length - 1 : (e !== ~~e || e < 0 || e > 1e6) && y("!toExp!"), 
g(this, e, 1);
}, f.toFixed = function(e) {
var t, n = this, r = n.constructor, i = r.E_NEG, o = r.E_POS;
return r.E_NEG = -(r.E_POS = 1 / 0), null == e ? t = n.toString() : e === ~~e && e >= 0 && e <= 1e6 && (t = g(n, n.e + e), 
n.s < 0 && n.c[0] && t.indexOf("-") < 0 && (t = "-" + t)), r.E_NEG = i, r.E_POS = o, 
t || y("!toFix!"), t;
}, f.toPrecision = function(e) {
return null == e ? this.toString() : ((e !== ~~e || e < 1 || e > 1e6) && y("!toPre!"), 
g(this, e - 1, 2));
}, h = d(), void 0 === (r = function() {
return h;
}.call(t, n, t, e)) || (e.exports = r);
}(this);
}, function(e, t, n) {
"use strict";
const r = n(94), i = Symbol.for("execall");
function o(e, t, n) {
let o;
const a = (n = n || {}).cloneRegexp || r;
let s = [], u = a(e), l = u.global;
n.resetLastIndex && (u.lastIndex = 0);
let c = 0, {rightContext: f, leftContext: p} = n;
for (f = !!f, p = !!p; (o = u.exec(t)) && (delete o.input, s.push(Object.assign(o, {
match: o[0],
sub: o.slice(1),
leftContext: p && RegExp.leftContext,
rightContext: f && RegExp.rightContext,
[i]: s
})), c = u.lastIndex, l); ) ;
return Object.defineProperties(s, {
re: {
value: u,
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
}), s;
}
let a = o;
t.default = a, a.SYMBOL = i, a.default = a.execall = o, Object.defineProperty(a, "__esModule", {
value: !0
}), e.exports = a;
}, function(e, t, n) {
"use strict";
const r = n(95), i = {
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
function a(e, n = t.LF) {
const r = n + n + n, i = n + n;
return e.replace(/\u000C/g, r).replace(/\u2028/g, n).replace(/\u2029/g, i);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.CR = "\r", t.CRLF = "\r\n", t.LF = "\n", t.R_CRLF = /\r\n|\r(?!\n)|\n/g, t.crlf = r, 
t.chkcrlf = i, t.lineSplit = o, t.crlf_unicode_normalize = a, t.default = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(99), i = n(110), o = n(48), a = n(16), s = n(130), u = n(140), l = n(143), c = n(45);
t.defaultOptions = {};
class zhRegExp extends RegExp {
constructor(e, t = null, n = {}, ...a) {
null !== t && "object" == typeof t && (t = (n = Object.assign({}, t)).flags || null), 
"string" == typeof n && (n = {
skip: n
}), "string" == typeof n.flags && (t = n.flags);
let u = "string" == typeof t;
if (n.disableZh && n.disableLocalRange && !n.on) if (n.parseRegularExpressionString && "string" == typeof e) {
let n = zhRegExp.parseRegularExpressionString(e);
n && (e = new RegExp(n.source, n.flags), t = u ? t : e.flags);
} else e instanceof RegExp && (e = e.source, t = u ? t : e.flags); else {
let a;
const l = n.zhTable || (n.greedyTable ? r.zhTableAutoGreedyTable : c.auto);
if (e instanceof RegExp) {
let t = o.parseRegExp(e.toString());
a = new i.default(t);
} else {
if (n.parseRegularExpressionString && "string" == typeof e) {
let n = zhRegExp.parseRegularExpressionString(e);
n && (e = n.source, t = u ? t : n.flags);
}
a = i.default.create(e, t || "");
}
n.disableZh || a.on(i.ParserEventEmitterEvent.default, function(e) {
e.old_raw = e.old_raw || e.raw, e.raw = r._word_zh_core(e.raw, n.skip, l), a.emit(i.ParserEventEmitterEvent.change, e);
}), n.disableLocalRange || a.on(i.ParserEventEmitterEvent.class_range, function(e, ...t) {
let o = e.min.raw, u = e.max.raw, c = s.default(o, u, {
createRegExpString: !0
});
c && (n.allowLocalRangeAutoZh && (c = r._word_zh_core2(c, n.skip, l)), e.old_raw = e.old_raw || e.raw, 
e.raw = c, a.emit(i.ParserEventEmitterEvent.change, e));
}), n.on && Object.keys(n.on).forEach(function(e) {
a.on(e, n.on[e]);
}), a.resume(), e = a.getSource(!!n.debugChanged || !n.noUniqueClass || n.sortClass, n), 
t = u ? t : a.flags;
}
super(e, t || "");
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
return a.default;
}
static get version() {
return l.version;
}
}
t.zhRegExp = zhRegExp, function(e) {
e.isRegExp = u.isRegExp;
}(zhRegExp = t.zhRegExp || (t.zhRegExp = {})), t.parseRegularExpressionString = zhRegExp.parseRegularExpressionString, 
t.isRegExp = zhRegExp.isRegExp, t.create = zhRegExp.create.bind(zhRegExp), t.version = l.version, 
t.default = zhRegExp;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(45);
function i(e, t = {}) {
return t.greedyTable = !0, r.auto(e, t);
}
function o(e, t, n = r.auto) {
return e.replace(/[\u4E00-\u9FFF\u{20000}-\u{2FA1F}のと]/gu, function(e) {
if (t && -1 != t.indexOf(e)) return e;
let r = n(e);
return r.length > 1 ? "[" + r.join("") + "]" : r[0];
});
}
function a(e, t, n = r.auto) {
return e.replace(/[\u4E00-\u9FFF\u{20000}-\u{2FA1F}のと]/gu, function(e) {
if (t && -1 != t.indexOf(e)) return e;
let r;
return n(e).join("");
});
}
t.zhTableAutoGreedyTable = i, t._word_zh_core = o, t._word_zh_core2 = a, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var r = n(23);
t.zh2jp = r.zh2jp, t.zht2jp = r.zht2jp, t.zhs2jp = r.zhs2jp, t.zhs2zht = r.zhs2zht, 
t.zht2zhs = r.zht2zhs, t.cjk2zhs = r.cjk2zhs, t.jp2zhs = r.jp2zhs, t.jp2zht = r.jp2zht, 
t.cjk2zht = r.cjk2zht, t.cjk2jp = r.cjk2jp, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(46), i = n(14), o = n(107);
function a(e, t) {
return e = Object.keys(t).reduce(function(e, n) {
return e[t[n]] = n, e;
}, {});
}
function s(e, t, ...n) {
let r;
return [].concat(t).concat(...n).filter(function(e) {
return e;
});
}
function u(e, n = {}) {
let r = [];
return r = s(r, t.table_jp[e]);
}
function l(e, n = {}) {
let i = [];
return i = s(i, t._table_tw[e], r.cn2tw(e, n));
}
function c(e, n = {}) {
let i = [];
return i = s(i, t._table_cn[e], r.tw2cn(e, n));
}
t._table_tw = {
"罗": "羅",
"恶": "惡",
"苏": "蘇",
"馆": "館"
}, t.table_jp = {
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
"恶": [ "恶", "噁", "惡" ]
}, t.table_plus = {
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
"託": [ "託", "讬", "侂", "托" ],
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
"札": [ "箚", "剳" ],
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
"薬": [ "薬", "藥", "药" ],
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
"勛": [ "勛", "勳", "勋" ],
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
"悽": [ "悽", "淒", "凄" ]
}, Object.keys(t.table_plus).forEach(function(e) {
t.table_plus[e] = i.array_unique(t.table_plus[e]), t.table_plus[e].forEach(function(n) {
t.table_plus[n] = t.table_plus[e];
});
}), t.table_jp = o(t.table_jp, t.table_plus), Object.keys(t.table_jp).forEach(function(e) {
t.table_jp[e] = i.array_unique(t.table_jp[e]);
}), t._table_cn = a({}, t._table_tw), t._update = a, t._get = s, t.jp = u, t.tw = l, 
t.cn = c, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(103), i = n(104), o = n(105);
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
"只": "隻"
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
"蕩": "荡",
"盪": "荡",
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
"只": "只"
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
"繨": "𫄤"
}).forEach(function(e) {
let [n, r] = e;
t.table_tw2cn[n] = r, t.table_cn2tw[r] = n;
}), [ "札", "谷", "污", "汙", "游", "遊", "伙", "夥", "御", "郁", "咔", "哢", "凌", "淩", "扎", "紮", "痴", "癡", "嚯", "薑", "姜", "扡", "扦", "捻", "撚", "遝", "沓", "栗", "挽", "灶", "竈", "霉", "黴", "欲", "慾", "讚", "菸", "拾", "十", "証", "捲", "卷", "燻", "熏", "吁", "籲", "龥", "蹠", "跖", "矽", "硅", "脩", "修", "犟", "剷", "噼", "劈", "擗", "核", "覈", "憷", "呼", "唿", "嗬", "呵", "脣", "唇", "唇", "升", "昇", "磐", "溪", "渓", "谿", "嵠", "祐", "佑", "媮", "偷", "瓮", "罋", "甕", "闇", "暗", "佈", "布", "痺", "痹", "雇", "僱", "秘", "祕" ].forEach(function(e) {
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
const r = n(47);
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
}), t.table_tw2cn_plus = {}, t.table_cn2tw_plus = {
"线": "線",
"啮": "齧",
"赃": "贓",
"荡": "蕩"
}, t.table_tw2cn_min_plus = {
"衝": "衝"
}, t.table_cn2tw_min_plus = {}, t.default = t;
}, function(e, t, n) {
"use strict";
const r = n(108);
e.exports = r.default;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(109);
function i(e) {
return Array.isArray(e) ? [] : {};
}
function o(e, t, n) {
let r, o = (!t || !1 !== t.clone) && a(e, t, n), s = o ? l(i(e), e, t) : e;
return t && t.keyValueOrMode && !o && n && "key" in n && (n.destination && (s = n.destination[n.key] || s), 
n.target && (s = n.target[n.key] || s), n.source && (s = n.source[n.key] || s)), 
s;
}
function a(e, t, n) {
let i;
return t && t.isMergeableObject && (i = t.isMergeableObject(e, r, t, n)), null == i && (i = e && "boolean" == typeof e[l.SYMBOL_IS_MERGEABLE] ? e[l.SYMBOL_IS_MERGEABLE] : r(e)), 
i;
}
function s(e, t, n) {
return e.concat(t).map(function(e, t, r) {
return o(e, n, {
key: t
});
});
}
function u(e, t, n) {
let r = {};
return a(e, n) && Object.keys(e).forEach(function(i) {
r[i] = o(e[i], n, {
key: i,
source: t,
target: e,
destination: r
});
}), Object.keys(t).forEach(function(i) {
a(t[i], n, {
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
let r = Array.isArray(t), i, a, l;
if (r === Array.isArray(e)) {
if (r) {
let r;
return ((n || {
arrayMerge: s
}).arrayMerge || s)(e, t, n);
}
return u(e, t, n);
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
return "[object RegExp]" === t || "[object Date]" === t || a(e);
}
e.exports = function e(t) {
return n(t) && !r(t);
};
var i, o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
function a(e) {
return e.$$typeof === o;
}
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(111), i = n(48);
var o;
!function(e) {
e.default = "default", e.class = "class", e.other = "other", e.uniset = "uniset", 
e.class_default = "class_default", e.class_range = "class_range", e.class_other = "class_other", 
e.class_uniset = "class_uniset", e.change = "change";
}(o = t.ParserEventEmitterEvent || (t.ParserEventEmitterEvent = {}));
class ParserEventEmitter extends r {
constructor(e, t = "") {
super(), this.astRegExpLiteral = null;
const n = this;
"string" != typeof e && "Pattern" != e.type || (e = i.fakePatternToRegExpLiteral(e, t)), 
this.astRegExpLiteral = e, this.on(o.change, function(e) {
n._change(e, !0), n.changed = !0;
});
}
static create(e, t = "") {
return new this(e, t);
}
resume() {
const e = this;
return this.astRegExpLiteral.pattern.elements.forEach(function(t) {
e._lookup_sub(t, e);
}), this;
}
emit(e, t, ...n) {
return super.emit(e, t, ...n, e);
}
on(e, t) {
return super.on(e, t);
}
_change(e, t) {
const n = this;
e.changed = !0, e.parent && this._change(e.parent);
}
_lookup_sub(e, t, n, r = "") {
const i = this;
let a, s, u = "", l;
switch (e.type) {
case "Character":
l = r + o.default;
break;

case "CharacterClass":
l = o.class, a = !0, u = "class_";
break;

case "CharacterClassRange":
l = o.class_range;
break;

case "CharacterSet":
l = r + o.uniset;
break;

case "Quantifier":
a = !0, s = [ e.element ];
break;

case "CapturingGroup":
case "Group":
case "Assertion":
a = !0;
break;

case "Disjunction":
e.alternatives.forEach(function(n) {
n.forEach(function(n) {
i._lookup_sub(n, t, e, u);
});
});
break;

default:
l = "class_" === r ? o.class_other : r + o.other;
break;
}
l && t.emit(o[l], e), a && void 0 === s && (s = e.elements), e.type, a && s && s.forEach(function(n) {
i._lookup_sub(n, t, e, u);
});
}
getSource(e, t) {
return i.astToString(this.astRegExpLiteral.pattern, Object.assign({}, t, {
debugChanged: e ? 99 : this.astRegExpLiteral.pattern.changed
}));
}
getFlags(e, t) {
return i.astToString(this.astRegExpLiteral.flags, Object.assign({}, t, {
debugChanged: e ? 99 : this.astRegExpLiteral.flags.changed
}));
}
get source() {
return this.getSource();
}
set source(e) {
(e = "string" == typeof e ? i.parsePattern(e, this.astRegExpLiteral.flags.unicode) : e).parent = this.astRegExpLiteral, 
this.astRegExpLiteral.pattern = e, this.changed = !1;
}
get flags() {
return this.getFlags();
}
set flags(e) {
(e = "string" == typeof e ? i.parseFlags(e) : e).parent = this.astRegExpLiteral, 
this.astRegExpLiteral.flags = e, this.changed = this.astRegExpLiteral.pattern.changed || !1;
}
get changed() {
return this.astRegExpLiteral.changed || this.astRegExpLiteral.pattern.changed || "boolean" == typeof this.astRegExpLiteral.changed ? this.astRegExpLiteral.changed : null;
}
set changed(e) {
this.astRegExpLiteral.pattern.changed = this.astRegExpLiteral.changed = e;
}
toString(e, t) {
return i.astToString(this.astRegExpLiteral, Object.assign({}, t, {
debugChanged: e ? 99 : this.changed
}));
}
toRegExp(e = RegExp) {
return new e(this.source, this.flags);
}
}
t.ParserEventEmitter = ParserEventEmitter, t.default = ParserEventEmitter;
}, function(e, t, n) {
"use strict";
var r = "object" == typeof Reflect ? Reflect : null, i = r && "function" == typeof r.apply ? r.apply : function e(t, n, r) {
return Function.prototype.apply.call(t, n, r);
}, o;
function a(e) {
console && console.warn && console.warn(e);
}
o = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function e(t) {
return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : function e(t) {
return Object.getOwnPropertyNames(t);
};
var s = Number.isNaN || function e(t) {
return t != t;
};
function u() {
u.init.call(this);
}
e.exports = u, u.EventEmitter = u, u.prototype._events = void 0, u.prototype._eventsCount = 0, 
u.prototype._maxListeners = void 0;
var l = 10;
function c(e) {
return void 0 === e._maxListeners ? u.defaultMaxListeners : e._maxListeners;
}
function f(e, t, n, r) {
var i, o, s;
if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
if (void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), 
o = e._events), s = o[t]), void 0 === s) s = o[t] = n, ++e._eventsCount; else if ("function" == typeof s ? s = o[t] = r ? [ n, s ] : [ s, n ] : r ? s.unshift(n) : s.push(n), 
(i = c(e)) > 0 && s.length > i && !s.warned) {
s.warned = !0;
var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, 
a(u);
}
return e;
}
function p() {
for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
i(this.listener, this.target, e));
}
function h(e, t, n) {
var r = {
fired: !1,
wrapFn: void 0,
target: e,
type: t,
listener: n
}, i = p.bind(r);
return i.listener = n, r.wrapFn = i, i;
}
function d(e, t, n) {
var r = e._events;
if (void 0 === r) return [];
var i = r[t];
return void 0 === i ? [] : "function" == typeof i ? n ? [ i.listener || i ] : [ i ] : n ? y(i) : _(i, i.length);
}
function g(e) {
var t = this._events;
if (void 0 !== t) {
var n = t[e];
if ("function" == typeof n) return 1;
if (void 0 !== n) return n.length;
}
return 0;
}
function _(e, t) {
for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
return n;
}
function m(e, t) {
for (;t + 1 < e.length; t++) e[t] = e[t + 1];
e.pop();
}
function y(e) {
for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
return t;
}
Object.defineProperty(u, "defaultMaxListeners", {
enumerable: !0,
get: function() {
return l;
},
set: function(e) {
if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
l = e;
}
}), u.init = function() {
void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), 
this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, u.prototype.setMaxListeners = function e(t) {
if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
return this._maxListeners = t, this;
}, u.prototype.getMaxListeners = function e() {
return c(this);
}, u.prototype.emit = function e(t) {
for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
var o = "error" === t, a = this._events;
if (void 0 !== a) o = o && void 0 === a.error; else if (!o) return !1;
if (o) {
var s;
if (n.length > 0 && (s = n[0]), s instanceof Error) throw s;
var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
throw u.context = s, u;
}
var l = a[t];
if (void 0 === l) return !1;
if ("function" == typeof l) i(l, this, n); else for (var c = l.length, f = _(l, c), r = 0; r < c; ++r) i(f[r], this, n);
return !0;
}, u.prototype.addListener = function e(t, n) {
return f(this, t, n, !1);
}, u.prototype.on = u.prototype.addListener, u.prototype.prependListener = function e(t, n) {
return f(this, t, n, !0);
}, u.prototype.once = function e(t, n) {
if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
return this.on(t, h(this, t, n)), this;
}, u.prototype.prependOnceListener = function e(t, n) {
if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
return this.prependListener(t, h(this, t, n)), this;
}, u.prototype.removeListener = function e(t, n) {
var r, i, o, a, s;
if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
if (void 0 === (i = this._events)) return this;
if (void 0 === (r = i[t])) return this;
if (r === n || r.listener === n) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[t], 
i.removeListener && this.emit("removeListener", t, r.listener || n)); else if ("function" != typeof r) {
for (o = -1, a = r.length - 1; a >= 0; a--) if (r[a] === n || r[a].listener === n) {
s = r[a].listener, o = a;
break;
}
if (o < 0) return this;
0 === o ? r.shift() : m(r, o), 1 === r.length && (i[t] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", t, s || n);
}
return this;
}, u.prototype.off = u.prototype.removeListener, u.prototype.removeAllListeners = function e(t) {
var n, r, i;
if (void 0 === (r = this._events)) return this;
if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), 
this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), 
this;
if (0 === arguments.length) {
var o = Object.keys(r), a;
for (i = 0; i < o.length; ++i) "removeListener" !== (a = o[i]) && this.removeAllListeners(a);
return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
this._eventsCount = 0, this;
}
if ("function" == typeof (n = r[t])) this.removeListener(t, n); else if (void 0 !== n) for (i = n.length - 1; i >= 0; i--) this.removeListener(t, n[i]);
return this;
}, u.prototype.listeners = function e(t) {
return d(this, t, !0);
}, u.prototype.rawListeners = function e(t) {
return d(this, t, !1);
}, u.listenerCount = function(e, t) {
return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t);
}, u.prototype.listenerCount = g, u.prototype.eventNames = function e() {
return this._eventsCount > 0 ? o(this._events) : [];
};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(113);
t.AST = r;
const i = n(114);
t.RegExpParser = i.RegExpParser;
const o = n(49);
function a(e, t) {
return new i.RegExpParser(t).parseLiteral(e instanceof RegExp ? e.toString() : e);
}
function s(e, t) {
return new o.RegExpValidator(t).validateLiteral(e);
}
t.RegExpValidator = o.RegExpValidator, t.parseRegExpLiteral = a, t.validateRegExpLiteral = s;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(115), i = n(49), o = {}, a = {}, s = {};
function u(e, t) {
for (const n of e) r.assert("Disjunction" !== n.type), n.parent = t;
return e;
}
function l(e, t) {
"Disjunction" === e.type ? r.last(e.alternatives).push(t) : e.elements.push(t);
}
function c(e, t) {
"Disjunction" === e.type ? r.last(e.alternatives).push(t) : (e.type, e.elements.push(t));
}
class RegExpParserState {
constructor(e) {
this._node = o, this._flags = a, this._disjunctionStartStack = [], this._backreferences = [], 
this._capturingGroups = [], this.source = "", this.strict = Boolean(e && e.strict), 
this.ecmaVersion = e && e.ecmaVersion || 2018, this.disableChkCharacterClassRange = Boolean(e && e.disableChkCharacterClassRange);
}
get pattern() {
if ("Pattern" !== this._node.type) throw new Error("UnknownError");
return this._node;
}
get flags() {
if ("Flags" !== this._flags.type) throw new Error("UnknownError");
return this._flags;
}
onFlags(e, t, n, r, i, o, a, s) {
this._flags = {
type: "Flags",
parent: null,
start: e,
end: t,
raw: this.source.slice(e, t),
global: n,
ignoreCase: r,
multiline: i,
unicode: o,
sticky: a,
dotAll: s
};
}
onPatternEnter(e) {
this._node = {
type: "Pattern",
parent: null,
start: e,
end: e,
raw: "",
elements: []
}, this._backreferences.length = 0, this._capturingGroups.length = 0;
}
onPatternLeave(e, t) {
this._node.end = t, this._node.raw = this.source.slice(e, t);
for (const e of this._backreferences) {
const t = e.ref, n = "number" == typeof t ? this._capturingGroups[t - 1] : this._capturingGroups.find(e => e.name === t);
e.resolved = n, n.references.push(e);
}
}
onDisjunctionEnter(e) {
this._disjunctionStartStack.push(e);
}
onDisjunctionLeave(e, t) {
this._disjunctionStartStack.pop();
}
onAlternativeEnter(e, t) {
if (0 === t) return;
const n = this._node;
if ("Disjunction" === n.type || "CharacterClass" === n.type) throw new Error("UnknownError");
const i = r.last(n.elements);
if (null != i && "Disjunction" === i.type) this._node = i, i.alternatives.push([]); else {
this._node = {
type: "Disjunction",
parent: n,
start: r.last(this._disjunctionStartStack),
end: e,
raw: "",
alternatives: []
};
const t = u(n.elements, this._node);
this._node.alternatives.push(t, []), n.elements = [ this._node ];
}
}
onAlternativeLeave(e, t, n) {
0 !== n && (this._node.end = t, this._node.raw = this.source.slice(this._node.start, t), 
this._node = this._node.parent);
}
onGroupEnter(e) {
const t = this._node;
if ("CharacterClass" === t.type) throw new Error("UnknownError");
this._node = {
type: "Group",
parent: t,
start: e,
end: e,
raw: "",
elements: []
}, l(t, this._node);
}
onGroupLeave(e, t) {
this._node.end = t, this._node.raw = this.source.slice(e, t), this._node = this._node.parent;
}
onCapturingGroupEnter(e, t) {
const n = this._node;
if ("CharacterClass" === n.type) throw new Error("UnknownError");
this._node = {
type: "CapturingGroup",
parent: n,
start: e,
end: e,
raw: "",
name: t,
elements: [],
references: []
}, l(n, this._node), this._capturingGroups.push(this._node);
}
onCapturingGroupLeave(e, t, n) {
this._node.end = t, this._node.raw = this.source.slice(e, t), this._node = this._node.parent;
}
onQuantifier(e, t, n, i, o) {
const a = this._node;
if ("CharacterClass" === a.type) throw new Error("UnknownError");
const s = "Disjunction" === a.type ? r.last(a.alternatives) : a.elements, u = s.pop(), l = {
type: "Quantifier",
parent: a,
start: e,
end: t,
raw: this.source.slice(e, t),
min: n,
max: i,
greedy: o,
element: u
};
s.push(l), u.parent = l;
}
onLookaroundAssertionEnter(e, t, n) {
const r = this._node;
if ("CharacterClass" === r.type) throw new Error("UnknownError");
this._node = {
type: "Assertion",
parent: r,
start: e,
end: e,
raw: "",
kind: t,
negate: n,
elements: []
}, l(r, this._node);
}
onLookaroundAssertionLeave(e, t, n, r) {
this._node.end = t, this._node.raw = this.source.slice(e, t), this._node = this._node.parent;
}
onEdgeAssertion(e, t, n) {
const r = this._node;
if ("CharacterClass" === r.type) throw new Error("UnknownError");
l(r, {
type: "Assertion",
parent: r,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n
});
}
onWordBoundaryAssertion(e, t, n, r) {
const i = this._node;
if ("CharacterClass" === i.type) throw new Error("UnknownError");
l(i, {
type: "Assertion",
parent: i,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n,
negate: r
});
}
onAnyCharacterSet(e, t, n) {
const r = this._node;
if ("CharacterClass" === r.type) throw new Error("UnknownError");
l(r, {
type: "CharacterSet",
parent: r,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n
});
}
onEscapeCharacterSet(e, t, n, r) {
c(this._node, {
type: "CharacterSet",
parent: this._node,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n,
negate: r
});
}
onUnicodePropertyCharacterSet(e, t, n, r, i, o) {
c(this._node, {
type: "CharacterSet",
parent: this._node,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n,
key: r,
value: i,
negate: o
});
}
onCharacter(e, t, n) {
c(this._node, {
type: "Character",
parent: this._node,
start: e,
end: t,
raw: this.source.slice(e, t),
value: n
});
}
onBackreference(e, t, n) {
const r = this._node;
if ("CharacterClass" === r.type) throw new Error("UnknownError");
const i = {
type: "Backreference",
parent: r,
start: e,
end: t,
raw: this.source.slice(e, t),
ref: n,
resolved: s
};
l(r, i), this._backreferences.push(i);
}
onCharacterClassEnter(e, t) {
const n = this._node;
if ("CharacterClass" === n.type) throw new Error("UnknownError");
this._node = {
type: "CharacterClass",
parent: n,
start: e,
end: e,
raw: "",
negate: t,
elements: []
}, l(n, this._node);
}
onCharacterClassLeave(e, t, n) {
this._node.end = t, this._node.raw = this.source.slice(e, t), this._node = this._node.parent;
}
onCharacterClassRange(e, t, n, i) {
const o = this._node;
if ("CharacterClass" !== o.type) throw new Error("UnknownError");
const a = o.elements, s = a.pop();
a.pop();
const u = a.pop(), l = {
type: "CharacterClassRange",
parent: o,
start: e,
end: t,
raw: this.source.slice(e, t),
min: u,
max: s
};
r.assert(null != u && "Character" === u.type), r.assert(null != s && "Character" === s.type), 
u.parent = l, s.parent = l, a.push(l);
}
}
class RegExpParser {
constructor(e) {
this._state = new RegExpParserState(e), this._validator = new i.RegExpValidator(this._state);
}
parseLiteral(e, t = 0, n = e.length) {
this._state.source = e, this._validator.validateLiteral(e, t, n);
const r = this._state.pattern, i = this._state.flags, o = {
type: "RegExpLiteral",
parent: null,
start: t,
end: n,
raw: e,
pattern: r,
flags: i
};
return r.parent = o, i.parent = o, o;
}
parseFlags(e, t = 0, n = e.length) {
return this._state.source = e, this._validator.validateFlags(e, t, n), this._state.flags;
}
parsePattern(e, t = 0, n = e.length, r = !1) {
return this._state.source = e, this._validator.validatePattern(e, t, n, r), this._state.pattern;
}
}
t.RegExpParser = RegExpParser;
}, function(e, t, n) {
"use strict";
function r(e, t) {
if (!e) throw new Error(t || "AssertionError");
}
function i(e) {
return 0 === e.length ? void 0 : e[e.length - 1];
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.assert = r, t.last = i;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = {
at: (e, t, n) => n < t ? e.charCodeAt(n) : -1,
width: e => 1
}, i = {
at: (e, t, n) => n < t ? e.codePointAt(n) : -1,
width: e => e > 65535 ? 2 : 1
};
class Reader {
constructor() {
this._impl = r, this._s = "", this._i = 0, this._end = 0, this._cp1 = -1, this._w1 = 1, 
this._cp2 = -1, this._w2 = 1, this._cp3 = -1, this._w3 = 1, this._cp4 = -1;
}
get source() {
return this._s;
}
get index() {
return this._i;
}
get currentCodePoint() {
return this._cp1;
}
get nextCodePoint() {
return this._cp2;
}
get nextCodePoint2() {
return this._cp3;
}
get nextCodePoint3() {
return this._cp4;
}
reset(e, t, n, o) {
this._impl = o ? i : r, this._s = e, this._end = n, this.rewind(t);
}
rewind(e) {
const t = this._impl;
this._i = e, this._cp1 = t.at(this._s, this._end, e), this._w1 = t.width(this._cp1), 
this._cp2 = t.at(this._s, this._end, e + this._w1), this._w2 = t.width(this._cp2), 
this._cp3 = t.at(this._s, this._end, e + this._w1 + this._w2), this._w3 = t.width(this._cp3), 
this._cp4 = t.at(this._s, this._end, e + this._w1 + this._w2 + this._w3);
}
advance() {
if (-1 !== this._cp1) {
const e = this._impl;
this._i += this._w1, this._cp1 = this._cp2, this._w1 = this._w2, this._cp2 = this._cp3, 
this._w2 = e.width(this._cp2), this._cp3 = this._cp4, this._w3 = e.width(this._cp3), 
this._cp4 = e.at(this._s, this._end, this._i + this._w1 + this._w2 + this._w3);
}
}
eat(e) {
return this._cp1 === e && (this.advance(), !0);
}
eat2(e, t) {
return this._cp1 === e && this._cp2 === t && (this.advance(), this.advance(), !0);
}
eat3(e, t, n) {
return this._cp1 === e && this._cp2 === t && this._cp3 === n && (this.advance(), 
this.advance(), this.advance(), !0);
}
}
t.Reader = Reader;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
class RegExpSyntaxError extends SyntaxError {
constructor(e, t, n, r) {
e && ("/" !== e[0] && (e = `/${e}/${t ? "u" : ""}`), e = `: ${e}`), super(`Invalid regular expression${e}: ${r}`), 
this.index = n;
}
}
t.RegExpSyntaxError = RegExpSyntaxError;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var r = n(119);
t.isIdContinue = r.isIdContinue, t.isIdStart = r.isIdStart;
var i = n(120);
function o(e) {
return e >= t.LatinCapitalLetterA && e <= t.LatinCapitalLetterZ || e >= t.LatinSmallLetterA && e <= t.LatinSmallLetterZ;
}
function a(e) {
return e >= t.DigitZero && e <= t.DigitNine;
}
function s(e) {
return e >= t.DigitZero && e <= t.DigitSeven;
}
function u(e) {
return e >= t.DigitZero && e <= t.DigitNine || e >= t.LatinCapitalLetterA && e <= t.LatinCapitalLetterF || e >= t.LatinSmallLetterA && e <= t.LatinSmallLetterF;
}
function l(e) {
return e === t.LineFeed || e === t.CarriageReturn || e === t.LineSeparator || e === t.ParagraphSeparator;
}
function c(e) {
return e >= t.MinCodePoint && e <= t.MaxCodePoint;
}
function f(e) {
return e >= t.LatinSmallLetterA && e <= t.LatinSmallLetterF ? e - t.LatinSmallLetterA + 10 : e >= t.LatinCapitalLetterA && e <= t.LatinCapitalLetterF ? e - t.LatinCapitalLetterA + 10 : e - t.DigitZero;
}
t.PropertyData = i.PropertyData, t.Null = 0, t.Backspace = 8, t.CharacterTabulation = 9, 
t.LineFeed = 10, t.LineTabulation = 11, t.FormFeed = 12, t.CarriageReturn = 13, 
t.ExclamationMark = 33, t.DollarSign = 36, t.LeftParenthesis = 40, t.RightParenthesis = 41, 
t.Asterisk = 42, t.PlusSign = 43, t.Comma = 44, t.HyphenMinus = 45, t.FullStop = 46, 
t.Solidus = 47, t.DigitZero = 48, t.DigitOne = 49, t.DigitSeven = 55, t.DigitNine = 57, 
t.Colon = 58, t.LessThanSign = 60, t.EqualsSign = 61, t.GreaterThanSign = 62, t.QuestionMark = 63, 
t.LatinCapitalLetterA = 65, t.LatinCapitalLetterB = 66, t.LatinCapitalLetterD = 68, 
t.LatinCapitalLetterF = 70, t.LatinCapitalLetterP = 80, t.LatinCapitalLetterS = 83, 
t.LatinCapitalLetterW = 87, t.LatinCapitalLetterZ = 90, t.LowLine = 95, t.LatinSmallLetterA = 97, 
t.LatinSmallLetterB = 98, t.LatinSmallLetterC = 99, t.LatinSmallLetterD = 100, t.LatinSmallLetterF = 102, 
t.LatinSmallLetterG = 103, t.LatinSmallLetterI = 105, t.LatinSmallLetterK = 107, 
t.LatinSmallLetterM = 109, t.LatinSmallLetterN = 110, t.LatinSmallLetterP = 112, 
t.LatinSmallLetterR = 114, t.LatinSmallLetterS = 115, t.LatinSmallLetterT = 116, 
t.LatinSmallLetterU = 117, t.LatinSmallLetterV = 118, t.LatinSmallLetterW = 119, 
t.LatinSmallLetterX = 120, t.LatinSmallLetterY = 121, t.LatinSmallLetterZ = 122, 
t.LeftSquareBracket = 91, t.ReverseSolidus = 92, t.RightSquareBracket = 93, t.CircumflexAccent = 94, 
t.LeftCurlyBracket = 123, t.VerticalLine = 124, t.RightCurlyBracket = 125, t.ZeroWidthNonJoiner = 8204, 
t.ZeroWidthJoiner = 8205, t.LineSeparator = 8232, t.ParagraphSeparator = 8233, t.MinCodePoint = 0, 
t.MaxCodePoint = 1114111, t.isLatinLetter = o, t.isDecimalDigit = a, t.isOctalDigit = s, 
t.isHexDigit = u, t.isLineTerminator = l, t.isValidUnicode = c, t.digitToInt = f;
}, function(e, t, n) {
"use strict";
function r(e) {
return !(e < 65) && (e < 91 || !(e < 97) && (e < 123 || o(e)));
}
function i(e) {
return !(e < 48) && (e < 58 || !(e < 65) && (e < 91 || 95 === e || !(e < 97) && (e < 123 || o(e) || a(e))));
}
function o(e) {
return e < 12348 ? e < 3754 ? e < 2602 ? e < 1749 ? e < 890 ? e < 660 ? e < 248 ? 170 === e || 181 === e || 186 === e || !(e < 192) && (e < 215 || !(e < 216) && e < 247) : e < 443 || 443 === e || !(e < 444) && (e < 448 || !(e < 448) && (e < 452 || !(e < 452) && e < 660)) : e < 748 ? 660 === e || !(e < 661) && (e < 688 || !(e < 688) && (e < 706 || !(e < 710) && (e < 722 || !(e < 736) && e < 741))) : 748 === e || 750 === e || !(e < 880) && (e < 884 || 884 === e || !(e < 886) && e < 888) : e < 1329 ? e < 908 ? 890 === e || !(e < 891) && (e < 894 || 895 === e || 902 === e || !(e < 904) && e < 907) : 908 === e || !(e < 910) && (e < 930 || !(e < 931) && (e < 1014 || !(e < 1015) && (e < 1154 || !(e < 1162) && e < 1328))) : e < 1568 ? !(e < 1329) && (e < 1367 || 1369 === e || !(e < 1377) && (e < 1416 || !(e < 1488) && (e < 1515 || !(e < 1520) && e < 1523))) : e < 1600 || 1600 === e || !(e < 1601) && (e < 1611 || !(e < 1646) && (e < 1648 || !(e < 1649) && e < 1748)) : e < 2308 ? e < 2036 ? e < 1808 ? 1749 === e || !(e < 1765) && (e < 1767 || !(e < 1774) && (e < 1776 || !(e < 1786) && (e < 1789 || 1791 === e))) : 1808 === e || !(e < 1810) && (e < 1840 || !(e < 1869) && (e < 1958 || 1969 === e || !(e < 1994) && e < 2027)) : e < 2088 ? !(e < 2036) && (e < 2038 || 2042 === e || !(e < 2048) && (e < 2070 || 2074 === e || 2084 === e)) : 2088 === e || !(e < 2112) && (e < 2137 || !(e < 2144) && (e < 2155 || !(e < 2208) && (e < 2229 || !(e < 2230) && e < 2238))) : e < 2482 ? e < 2418 ? !(e < 2308) && (e < 2362 || 2365 === e || 2384 === e || !(e < 2392) && (e < 2402 || 2417 === e)) : e < 2433 || !(e < 2437) && (e < 2445 || !(e < 2447) && (e < 2449 || !(e < 2451) && (e < 2473 || !(e < 2474) && e < 2481))) : e < 2527 ? 2482 === e || !(e < 2486) && (e < 2490 || 2493 === e || 2510 === e || !(e < 2524) && e < 2526) : e < 2530 || !(e < 2544) && (e < 2546 || 2556 === e || !(e < 2565) && (e < 2571 || !(e < 2575) && (e < 2577 || !(e < 2579) && e < 2601))) : e < 3114 ? e < 2858 ? e < 2730 ? e < 2654 ? !(e < 2602) && (e < 2609 || !(e < 2610) && (e < 2612 || !(e < 2613) && (e < 2615 || !(e < 2616) && (e < 2618 || !(e < 2649) && e < 2653)))) : 2654 === e || !(e < 2674) && (e < 2677 || !(e < 2693) && (e < 2702 || !(e < 2703) && (e < 2706 || !(e < 2707) && e < 2729))) : e < 2784 ? !(e < 2730) && (e < 2737 || !(e < 2738) && (e < 2740 || !(e < 2741) && (e < 2746 || 2749 === e || 2768 === e))) : e < 2786 || 2809 === e || !(e < 2821) && (e < 2829 || !(e < 2831) && (e < 2833 || !(e < 2835) && e < 2857)) : e < 2962 ? e < 2911 ? !(e < 2858) && (e < 2865 || !(e < 2866) && (e < 2868 || !(e < 2869) && (e < 2874 || 2877 === e || !(e < 2908) && e < 2910))) : e < 2914 || 2929 === e || 2947 === e || !(e < 2949) && (e < 2955 || !(e < 2958) && e < 2961) : e < 2984 ? !(e < 2962) && (e < 2966 || !(e < 2969) && (e < 2971 || 2972 === e || !(e < 2974) && (e < 2976 || !(e < 2979) && e < 2981))) : e < 2987 || !(e < 2990) && (e < 3002 || 3024 === e || !(e < 3077) && (e < 3085 || !(e < 3086) && (e < 3089 || !(e < 3090) && e < 3113))) : e < 3423 ? e < 3261 ? e < 3205 ? !(e < 3114) && (e < 3130 || 3133 === e || !(e < 3160) && (e < 3163 || !(e < 3168) && (e < 3170 || 3200 === e))) : e < 3213 || !(e < 3214) && (e < 3217 || !(e < 3218) && (e < 3241 || !(e < 3242) && (e < 3252 || !(e < 3253) && e < 3258))) : e < 3342 ? 3261 === e || 3294 === e || !(e < 3296) && (e < 3298 || !(e < 3313) && (e < 3315 || !(e < 3333) && e < 3341)) : e < 3345 || !(e < 3346) && (e < 3387 || 3389 === e || 3406 === e || !(e < 3412) && e < 3415) : e < 3654 ? e < 3517 ? !(e < 3423) && (e < 3426 || !(e < 3450) && (e < 3456 || !(e < 3461) && (e < 3479 || !(e < 3482) && (e < 3506 || !(e < 3507) && e < 3516)))) : 3517 === e || !(e < 3520) && (e < 3527 || !(e < 3585) && (e < 3633 || !(e < 3634) && (e < 3636 || !(e < 3648) && e < 3654))) : e < 3725 ? 3654 === e || !(e < 3713) && (e < 3715 || 3716 === e || !(e < 3719) && (e < 3721 || 3722 === e)) : 3725 === e || !(e < 3732) && (e < 3736 || !(e < 3737) && (e < 3744 || !(e < 3745) && (e < 3748 || 3749 === e || 3751 === e))) : e < 7258 ? e < 4992 ? e < 4256 ? e < 3976 ? e < 3782 ? !(e < 3754) && (e < 3756 || !(e < 3757) && (e < 3761 || !(e < 3762) && (e < 3764 || 3773 === e || !(e < 3776) && e < 3781))) : 3782 === e || !(e < 3804) && (e < 3808 || 3840 === e || !(e < 3904) && (e < 3912 || !(e < 3913) && e < 3949)) : e < 4193 ? !(e < 3976) && (e < 3981 || !(e < 4096) && (e < 4139 || 4159 === e || !(e < 4176) && (e < 4182 || !(e < 4186) && e < 4190))) : 4193 === e || !(e < 4197) && (e < 4199 || !(e < 4206) && (e < 4209 || !(e < 4213) && (e < 4226 || 4238 === e))) : e < 4704 ? e < 4349 ? !(e < 4256) && (e < 4294 || 4295 === e || 4301 === e || !(e < 4304) && (e < 4347 || 4348 === e)) : e < 4681 || !(e < 4682) && (e < 4686 || !(e < 4688) && (e < 4695 || 4696 === e || !(e < 4698) && e < 4702)) : e < 4800 ? !(e < 4704) && (e < 4745 || !(e < 4746) && (e < 4750 || !(e < 4752) && (e < 4785 || !(e < 4786) && (e < 4790 || !(e < 4792) && e < 4799)))) : 4800 === e || !(e < 4802) && (e < 4806 || !(e < 4808) && (e < 4823 || !(e < 4824) && (e < 4881 || !(e < 4882) && (e < 4886 || !(e < 4888) && e < 4955)))) : e < 6212 ? e < 5902 ? e < 5761 ? !(e < 4992) && (e < 5008 || !(e < 5024) && (e < 5110 || !(e < 5112) && (e < 5118 || !(e < 5121) && (e < 5741 || !(e < 5743) && e < 5760)))) : e < 5787 || !(e < 5792) && (e < 5867 || !(e < 5870) && (e < 5873 || !(e < 5873) && (e < 5881 || !(e < 5888) && e < 5901))) : e < 6016 ? !(e < 5902) && (e < 5906 || !(e < 5920) && (e < 5938 || !(e < 5952) && (e < 5970 || !(e < 5984) && (e < 5997 || !(e < 5998) && e < 6001)))) : e < 6068 || 6103 === e || 6108 === e || !(e < 6176) && (e < 6211 || 6211 === e) : e < 6576 ? e < 6320 ? !(e < 6212) && (e < 6264 || !(e < 6272) && (e < 6277 || !(e < 6277) && (e < 6279 || !(e < 6279) && (e < 6313 || 6314 === e)))) : e < 6390 || !(e < 6400) && (e < 6431 || !(e < 6480) && (e < 6510 || !(e < 6512) && (e < 6517 || !(e < 6528) && e < 6572))) : e < 6981 ? !(e < 6576) && (e < 6602 || !(e < 6656) && (e < 6679 || !(e < 6688) && (e < 6741 || 6823 === e || !(e < 6917) && e < 6964))) : e < 6988 || !(e < 7043) && (e < 7073 || !(e < 7086) && (e < 7088 || !(e < 7098) && (e < 7142 || !(e < 7168) && (e < 7204 || !(e < 7245) && e < 7248)))) : e < 8486 ? e < 8031 ? e < 7545 ? e < 7413 ? !(e < 7258) && (e < 7288 || !(e < 7288) && (e < 7294 || !(e < 7296) && (e < 7305 || !(e < 7401) && (e < 7405 || !(e < 7406) && e < 7410)))) : e < 7415 || !(e < 7424) && (e < 7468 || !(e < 7468) && (e < 7531 || !(e < 7531) && (e < 7544 || 7544 === e))) : e < 8008 ? !(e < 7545) && (e < 7579 || !(e < 7579) && (e < 7616 || !(e < 7680) && (e < 7958 || !(e < 7960) && (e < 7966 || !(e < 7968) && e < 8006)))) : e < 8014 || !(e < 8016) && (e < 8024 || 8025 === e || 8027 === e || 8029 === e) : e < 8182 ? e < 8134 ? !(e < 8031) && (e < 8062 || !(e < 8064) && (e < 8117 || !(e < 8118) && (e < 8125 || 8126 === e || !(e < 8130) && e < 8133))) : e < 8141 || !(e < 8144) && (e < 8148 || !(e < 8150) && (e < 8156 || !(e < 8160) && (e < 8173 || !(e < 8178) && e < 8181))) : e < 8455 ? !(e < 8182) && (e < 8189 || 8305 === e || 8319 === e || !(e < 8336) && (e < 8349 || 8450 === e)) : 8455 === e || !(e < 8458) && (e < 8468 || 8469 === e || 8472 === e || !(e < 8473) && (e < 8478 || 8484 === e)) : e < 11520 ? e < 8544 ? e < 8501 ? 8486 === e || 8488 === e || !(e < 8490) && (e < 8494 || 8494 === e || !(e < 8495) && e < 8501) : e < 8505 || 8505 === e || !(e < 8508) && (e < 8512 || !(e < 8517) && (e < 8522 || 8526 === e)) : e < 11360 ? !(e < 8544) && (e < 8579 || !(e < 8579) && (e < 8581 || !(e < 8581) && (e < 8585 || !(e < 11264) && (e < 11311 || !(e < 11312) && e < 11359)))) : e < 11388 || !(e < 11388) && (e < 11390 || !(e < 11390) && (e < 11493 || !(e < 11499) && (e < 11503 || !(e < 11506) && e < 11508))) : e < 11712 ? e < 11648 ? !(e < 11520) && (e < 11558 || 11559 === e || 11565 === e || !(e < 11568) && (e < 11624 || 11631 === e)) : e < 11671 || !(e < 11680) && (e < 11687 || !(e < 11688) && (e < 11695 || !(e < 11696) && (e < 11703 || !(e < 11704) && e < 11711))) : e < 12294 ? !(e < 11712) && (e < 11719 || !(e < 11720) && (e < 11727 || !(e < 11728) && (e < 11735 || !(e < 11736) && (e < 11743 || 12293 === e)))) : 12294 === e || 12295 === e || !(e < 12321) && (e < 12330 || !(e < 12337) && (e < 12342 || !(e < 12344) && (e < 12347 || 12347 === e))) : e < 68112 ? e < 43816 ? e < 43002 ? e < 42508 ? e < 12704 ? e < 12449 ? 12348 === e || !(e < 12353) && (e < 12439 || !(e < 12443) && (e < 12445 || !(e < 12445) && (e < 12447 || 12447 === e))) : e < 12539 || !(e < 12540) && (e < 12543 || 12543 === e || !(e < 12549) && (e < 12591 || !(e < 12593) && e < 12687)) : e < 40981 ? !(e < 12704) && (e < 12731 || !(e < 12784) && (e < 12800 || !(e < 13312) && (e < 19894 || !(e < 19968) && (e < 40939 || !(e < 40960) && e < 40981)))) : 40981 === e || !(e < 40982) && (e < 42125 || !(e < 42192) && (e < 42232 || !(e < 42232) && (e < 42238 || !(e < 42240) && e < 42508))) : e < 42775 ? e < 42623 ? 42508 === e || !(e < 42512) && (e < 42528 || !(e < 42538) && (e < 42540 || !(e < 42560) && (e < 42606 || 42606 === e))) : 42623 === e || !(e < 42624) && (e < 42652 || !(e < 42652) && (e < 42654 || !(e < 42656) && (e < 42726 || !(e < 42726) && e < 42736))) : e < 42891 ? !(e < 42775) && (e < 42784 || !(e < 42786) && (e < 42864 || 42864 === e || !(e < 42865) && (e < 42888 || 42888 === e))) : e < 42895 || 42895 === e || !(e < 42896) && (e < 42927 || !(e < 42928) && (e < 42936 || 42999 === e || !(e < 43e3) && e < 43002)) : e < 43584 ? e < 43274 ? e < 43072 ? 43002 === e || !(e < 43003) && (e < 43010 || !(e < 43011) && (e < 43014 || !(e < 43015) && (e < 43019 || !(e < 43020) && e < 43043))) : e < 43124 || !(e < 43138) && (e < 43188 || !(e < 43250) && (e < 43256 || 43259 === e || 43261 === e)) : e < 43488 ? !(e < 43274) && (e < 43302 || !(e < 43312) && (e < 43335 || !(e < 43360) && (e < 43389 || !(e < 43396) && (e < 43443 || 43471 === e)))) : e < 43493 || 43494 === e || !(e < 43495) && (e < 43504 || !(e < 43514) && (e < 43519 || !(e < 43520) && e < 43561)) : e < 43712 ? e < 43642 ? !(e < 43584) && (e < 43587 || !(e < 43588) && (e < 43596 || !(e < 43616) && (e < 43632 || 43632 === e || !(e < 43633) && e < 43639))) : 43642 === e || !(e < 43646) && (e < 43696 || 43697 === e || !(e < 43701) && (e < 43703 || !(e < 43705) && e < 43710)) : e < 43762 ? 43712 === e || 43714 === e || !(e < 43739) && (e < 43741 || 43741 === e || !(e < 43744) && e < 43755) : 43762 === e || !(e < 43763) && (e < 43765 || !(e < 43777) && (e < 43783 || !(e < 43785) && (e < 43791 || !(e < 43793) && (e < 43799 || !(e < 43808) && e < 43815)))) : e < 65596 ? e < 64326 ? e < 64112 ? e < 43968 ? !(e < 43816) && (e < 43823 || !(e < 43824) && (e < 43867 || !(e < 43868) && (e < 43872 || !(e < 43872) && (e < 43878 || !(e < 43888) && e < 43968)))) : e < 44003 || !(e < 44032) && (e < 55204 || !(e < 55216) && (e < 55239 || !(e < 55243) && (e < 55292 || !(e < 63744) && e < 64110))) : e < 64298 ? !(e < 64112) && (e < 64218 || !(e < 64256) && (e < 64263 || !(e < 64275) && (e < 64280 || 64285 === e || !(e < 64287) && e < 64297))) : e < 64311 || !(e < 64312) && (e < 64317 || 64318 === e || !(e < 64320) && (e < 64322 || !(e < 64323) && e < 64325)) : e < 65392 ? e < 65136 ? !(e < 64326) && (e < 64434 || !(e < 64467) && (e < 64830 || !(e < 64848) && (e < 64912 || !(e < 64914) && (e < 64968 || !(e < 65008) && e < 65020)))) : e < 65141 || !(e < 65142) && (e < 65277 || !(e < 65313) && (e < 65339 || !(e < 65345) && (e < 65371 || !(e < 65382) && e < 65392))) : e < 65482 ? 65392 === e || !(e < 65393) && (e < 65438 || !(e < 65438) && (e < 65440 || !(e < 65440) && (e < 65471 || !(e < 65474) && e < 65480))) : e < 65488 || !(e < 65490) && (e < 65496 || !(e < 65498) && (e < 65501 || !(e < 65536) && (e < 65548 || !(e < 65549) && (e < 65575 || !(e < 65576) && e < 65595)))) : e < 66776 ? e < 66370 ? e < 66176 ? !(e < 65596) && (e < 65598 || !(e < 65599) && (e < 65614 || !(e < 65616) && (e < 65630 || !(e < 65664) && (e < 65787 || !(e < 65856) && e < 65909)))) : e < 66205 || !(e < 66208) && (e < 66257 || !(e < 66304) && (e < 66336 || !(e < 66349) && (e < 66369 || 66369 === e))) : e < 66504 ? !(e < 66370) && (e < 66378 || 66378 === e || !(e < 66384) && (e < 66422 || !(e < 66432) && (e < 66462 || !(e < 66464) && e < 66500))) : e < 66512 || !(e < 66513) && (e < 66518 || !(e < 66560) && (e < 66640 || !(e < 66640) && (e < 66718 || !(e < 66736) && e < 66772))) : e < 67644 ? e < 67424 ? !(e < 66776) && (e < 66812 || !(e < 66816) && (e < 66856 || !(e < 66864) && (e < 66916 || !(e < 67072) && (e < 67383 || !(e < 67392) && e < 67414)))) : e < 67432 || !(e < 67584) && (e < 67590 || 67592 === e || !(e < 67594) && (e < 67638 || !(e < 67639) && e < 67641)) : e < 67828 ? 67644 === e || !(e < 67647) && (e < 67670 || !(e < 67680) && (e < 67703 || !(e < 67712) && (e < 67743 || !(e < 67808) && e < 67827))) : e < 67830 || !(e < 67840) && (e < 67862 || !(e < 67872) && (e < 67898 || !(e < 67968) && (e < 68024 || !(e < 68030) && (e < 68032 || 68096 === e)))) : e < 94032 ? e < 70656 ? e < 70019 ? e < 68480 ? e < 68288 ? !(e < 68112) && (e < 68116 || !(e < 68117) && (e < 68120 || !(e < 68121) && (e < 68148 || !(e < 68192) && (e < 68221 || !(e < 68224) && e < 68253)))) : e < 68296 || !(e < 68297) && (e < 68325 || !(e < 68352) && (e < 68406 || !(e < 68416) && (e < 68438 || !(e < 68448) && e < 68467))) : e < 69763 ? !(e < 68480) && (e < 68498 || !(e < 68608) && (e < 68681 || !(e < 68736) && (e < 68787 || !(e < 68800) && (e < 68851 || !(e < 69635) && e < 69688)))) : e < 69808 || !(e < 69840) && (e < 69865 || !(e < 69891) && (e < 69927 || !(e < 69968) && (e < 70003 || 70006 === e))) : e < 70303 ? e < 70163 ? !(e < 70019) && (e < 70067 || !(e < 70081) && (e < 70085 || 70106 === e || 70108 === e || !(e < 70144) && e < 70162)) : e < 70188 || !(e < 70272) && (e < 70279 || 70280 === e || !(e < 70282) && (e < 70286 || !(e < 70287) && e < 70302)) : e < 70442 ? !(e < 70303) && (e < 70313 || !(e < 70320) && (e < 70367 || !(e < 70405) && (e < 70413 || !(e < 70415) && (e < 70417 || !(e < 70419) && e < 70441)))) : e < 70449 || !(e < 70450) && (e < 70452 || !(e < 70453) && (e < 70458 || 70461 === e || 70480 === e || !(e < 70493) && e < 70498)) : e < 72704 ? e < 71424 ? e < 71040 ? !(e < 70656) && (e < 70709 || !(e < 70727) && (e < 70731 || !(e < 70784) && (e < 70832 || !(e < 70852) && (e < 70854 || 70855 === e)))) : e < 71087 || !(e < 71128) && (e < 71132 || !(e < 71168) && (e < 71216 || 71236 === e || !(e < 71296) && e < 71339)) : e < 72250 ? !(e < 71424) && (e < 71450 || !(e < 71840) && (e < 71904 || 71935 === e || 72192 === e || !(e < 72203) && e < 72243)) : 72250 === e || 72272 === e || !(e < 72284) && (e < 72324 || !(e < 72326) && (e < 72330 || !(e < 72384) && e < 72441)) : e < 74880 ? e < 72968 ? !(e < 72704) && (e < 72713 || !(e < 72714) && (e < 72751 || 72768 === e || !(e < 72818) && (e < 72848 || !(e < 72960) && e < 72967))) : e < 72970 || !(e < 72971) && (e < 73009 || 73030 === e || !(e < 73728) && (e < 74650 || !(e < 74752) && e < 74863)) : e < 92880 ? !(e < 74880) && (e < 75076 || !(e < 77824) && (e < 78895 || !(e < 82944) && (e < 83527 || !(e < 92160) && (e < 92729 || !(e < 92736) && e < 92767)))) : e < 92910 || !(e < 92928) && (e < 92976 || !(e < 92992) && (e < 92996 || !(e < 93027) && (e < 93048 || !(e < 93053) && (e < 93072 || !(e < 93952) && e < 94021)))) : e < 124928 ? e < 120005 ? e < 113808 ? e < 110592 ? 94032 === e || !(e < 94099) && (e < 94112 || !(e < 94176) && (e < 94178 || !(e < 94208) && (e < 100333 || !(e < 100352) && e < 101107))) : e < 110879 || !(e < 110960) && (e < 111356 || !(e < 113664) && (e < 113771 || !(e < 113776) && (e < 113789 || !(e < 113792) && e < 113801))) : e < 119973 ? !(e < 113808) && (e < 113818 || !(e < 119808) && (e < 119893 || !(e < 119894) && (e < 119965 || !(e < 119966) && (e < 119968 || 119970 === e)))) : e < 119975 || !(e < 119977) && (e < 119981 || !(e < 119982) && (e < 119994 || 119995 === e || !(e < 119997) && e < 120004)) : e < 120488 ? e < 120123 ? !(e < 120005) && (e < 120070 || !(e < 120071) && (e < 120075 || !(e < 120077) && (e < 120085 || !(e < 120086) && (e < 120093 || !(e < 120094) && e < 120122)))) : e < 120127 || !(e < 120128) && (e < 120133 || 120134 === e || !(e < 120138) && (e < 120145 || !(e < 120146) && e < 120486)) : e < 120630 ? !(e < 120488) && (e < 120513 || !(e < 120514) && (e < 120539 || !(e < 120540) && (e < 120571 || !(e < 120572) && (e < 120597 || !(e < 120598) && e < 120629)))) : e < 120655 || !(e < 120656) && (e < 120687 || !(e < 120688) && (e < 120713 || !(e < 120714) && (e < 120745 || !(e < 120746) && (e < 120771 || !(e < 120772) && e < 120780)))) : e < 126555 ? e < 126523 ? e < 126500 ? !(e < 124928) && (e < 125125 || !(e < 125184) && (e < 125252 || !(e < 126464) && (e < 126468 || !(e < 126469) && (e < 126496 || !(e < 126497) && e < 126499)))) : 126500 === e || 126503 === e || !(e < 126505) && (e < 126515 || !(e < 126516) && (e < 126520 || 126521 === e)) : e < 126541 ? 126523 === e || 126530 === e || 126535 === e || 126537 === e || 126539 === e : e < 126544 || !(e < 126545) && (e < 126547 || 126548 === e || 126551 === e || 126553 === e) : e < 126592 ? e < 126567 ? 126555 === e || 126557 === e || 126559 === e || !(e < 126561) && (e < 126563 || 126564 === e) : e < 126571 || !(e < 126572) && (e < 126579 || !(e < 126580) && (e < 126584 || !(e < 126585) && (e < 126589 || 126590 === e))) : e < 131072 ? !(e < 126592) && (e < 126602 || !(e < 126603) && (e < 126620 || !(e < 126625) && (e < 126628 || !(e < 126629) && (e < 126634 || !(e < 126635) && e < 126652)))) : e < 173783 || !(e < 173824) && (e < 177973 || !(e < 177984) && (e < 178206 || !(e < 178208) && (e < 183970 || !(e < 183984) && (e < 191457 || !(e < 194560) && e < 195102))));
}
function a(e) {
return e < 7154 ? e < 3426 ? e < 2691 ? e < 2363 ? e < 1770 ? e < 1479 ? 183 === e || !(e < 768) && (e < 880 || 903 === e || !(e < 1155) && (e < 1160 || !(e < 1425) && (e < 1470 || 1471 === e || !(e < 1473) && (e < 1475 || !(e < 1476) && e < 1478)))) : 1479 === e || !(e < 1552) && (e < 1563 || !(e < 1611) && (e < 1632 || !(e < 1632) && (e < 1642 || 1648 === e || !(e < 1750) && (e < 1757 || !(e < 1759) && (e < 1765 || !(e < 1767) && e < 1769))))) : e < 2075 ? !(e < 1770) && (e < 1774 || !(e < 1776) && (e < 1786 || 1809 === e || !(e < 1840) && (e < 1867 || !(e < 1958) && (e < 1969 || !(e < 1984) && (e < 1994 || !(e < 2027) && (e < 2036 || !(e < 2070) && e < 2074)))))) : e < 2084 || !(e < 2085) && (e < 2088 || !(e < 2089) && (e < 2094 || !(e < 2137) && (e < 2140 || !(e < 2260) && (e < 2274 || !(e < 2275) && (e < 2307 || 2307 === e || 2362 === e))))) : e < 2507 ? e < 2402 ? 2363 === e || 2364 === e || !(e < 2366) && (e < 2369 || !(e < 2369) && (e < 2377 || !(e < 2377) && (e < 2381 || 2381 === e || !(e < 2382) && (e < 2384 || !(e < 2385) && e < 2392)))) : e < 2404 || !(e < 2406) && (e < 2416 || 2433 === e || !(e < 2434) && (e < 2436 || 2492 === e || !(e < 2494) && (e < 2497 || !(e < 2497) && (e < 2501 || !(e < 2503) && e < 2505)))) : e < 2622 ? !(e < 2507) && (e < 2509 || 2509 === e || 2519 === e || !(e < 2530) && (e < 2532 || !(e < 2534) && (e < 2544 || !(e < 2561) && (e < 2563 || 2563 === e || 2620 === e)))) : e < 2625 || !(e < 2625) && (e < 2627 || !(e < 2631) && (e < 2633 || !(e < 2635) && (e < 2638 || 2641 === e || !(e < 2662) && (e < 2672 || !(e < 2672) && (e < 2674 || 2677 === e || !(e < 2689) && e < 2691))))) : e < 3031 ? e < 2880 ? e < 2786 ? 2691 === e || 2748 === e || !(e < 2750) && (e < 2753 || !(e < 2753) && (e < 2758 || !(e < 2759) && (e < 2761 || 2761 === e || !(e < 2763) && (e < 2765 || 2765 === e)))) : e < 2788 || !(e < 2790) && (e < 2800 || !(e < 2810) && (e < 2816 || 2817 === e || !(e < 2818) && (e < 2820 || 2876 === e || 2878 === e || 2879 === e))) : e < 2918 ? 2880 === e || !(e < 2881) && (e < 2885 || !(e < 2887) && (e < 2889 || !(e < 2891) && (e < 2893 || 2893 === e || 2902 === e || 2903 === e || !(e < 2914) && e < 2916))) : e < 2928 || 2946 === e || !(e < 3006) && (e < 3008 || 3008 === e || !(e < 3009) && (e < 3011 || !(e < 3014) && (e < 3017 || !(e < 3018) && (e < 3021 || 3021 === e)))) : e < 3264 ? e < 3157 ? 3031 === e || !(e < 3046) && (e < 3056 || 3072 === e || !(e < 3073) && (e < 3076 || !(e < 3134) && (e < 3137 || !(e < 3137) && (e < 3141 || !(e < 3142) && (e < 3145 || !(e < 3146) && e < 3150))))) : e < 3159 || !(e < 3170) && (e < 3172 || !(e < 3174) && (e < 3184 || 3201 === e || !(e < 3202) && (e < 3204 || 3260 === e || 3262 === e || 3263 === e))) : e < 3328 ? !(e < 3264) && (e < 3269 || 3270 === e || !(e < 3271) && (e < 3273 || !(e < 3274) && (e < 3276 || !(e < 3276) && (e < 3278 || !(e < 3285) && (e < 3287 || !(e < 3298) && (e < 3300 || !(e < 3302) && e < 3312)))))) : e < 3330 || !(e < 3330) && (e < 3332 || !(e < 3387) && (e < 3389 || !(e < 3390) && (e < 3393 || !(e < 3393) && (e < 3397 || !(e < 3398) && (e < 3401 || !(e < 3402) && (e < 3405 || 3405 === e || 3415 === e)))))) : e < 6078 ? e < 4139 ? e < 3771 ? e < 3558 ? !(e < 3426) && (e < 3428 || !(e < 3430) && (e < 3440 || !(e < 3458) && (e < 3460 || 3530 === e || !(e < 3535) && (e < 3538 || !(e < 3538) && (e < 3541 || 3542 === e || !(e < 3544) && e < 3552))))) : e < 3568 || !(e < 3570) && (e < 3572 || 3633 === e || !(e < 3636) && (e < 3643 || !(e < 3655) && (e < 3663 || !(e < 3664) && (e < 3674 || 3761 === e || !(e < 3764) && e < 3770)))) : e < 3902 ? !(e < 3771) && (e < 3773 || !(e < 3784) && (e < 3790 || !(e < 3792) && (e < 3802 || !(e < 3864) && (e < 3866 || !(e < 3872) && (e < 3882 || 3893 === e || 3895 === e || 3897 === e))))) : e < 3904 || !(e < 3953) && (e < 3967 || 3967 === e || !(e < 3968) && (e < 3973 || !(e < 3974) && (e < 3976 || !(e < 3981) && (e < 3992 || !(e < 3993) && (e < 4029 || 4038 === e))))) : e < 4227 ? e < 4160 ? !(e < 4139) && (e < 4141 || !(e < 4141) && (e < 4145 || 4145 === e || !(e < 4146) && (e < 4152 || 4152 === e || !(e < 4153) && (e < 4155 || !(e < 4155) && (e < 4157 || !(e < 4157) && e < 4159))))) : e < 4170 || !(e < 4182) && (e < 4184 || !(e < 4184) && (e < 4186 || !(e < 4190) && (e < 4193 || !(e < 4194) && (e < 4197 || !(e < 4199) && (e < 4206 || !(e < 4209) && (e < 4213 || 4226 === e)))))) : e < 4957 ? !(e < 4227) && (e < 4229 || !(e < 4229) && (e < 4231 || !(e < 4231) && (e < 4237 || 4237 === e || 4239 === e || !(e < 4240) && (e < 4250 || !(e < 4250) && (e < 4253 || 4253 === e))))) : e < 4960 || !(e < 4969) && (e < 4978 || !(e < 5906) && (e < 5909 || !(e < 5938) && (e < 5941 || !(e < 5970) && (e < 5972 || !(e < 6002) && (e < 6004 || !(e < 6068) && (e < 6070 || 6070 === e || !(e < 6071) && e < 6078)))))) : e < 6771 ? e < 6457 ? e < 6313 ? !(e < 6078) && (e < 6086 || 6086 === e || !(e < 6087) && (e < 6089 || !(e < 6089) && (e < 6100 || 6109 === e || !(e < 6112) && (e < 6122 || !(e < 6155) && (e < 6158 || !(e < 6160) && e < 6170))))) : 6313 === e || !(e < 6432) && (e < 6435 || !(e < 6435) && (e < 6439 || !(e < 6439) && (e < 6441 || !(e < 6441) && (e < 6444 || !(e < 6448) && (e < 6450 || 6450 === e || !(e < 6451) && e < 6457))))) : e < 6742 ? !(e < 6457) && (e < 6460 || !(e < 6470) && (e < 6480 || !(e < 6608) && (e < 6618 || 6618 === e || !(e < 6679) && (e < 6681 || !(e < 6681) && (e < 6683 || 6683 === e || 6741 === e))))) : 6742 === e || 6743 === e || !(e < 6744) && (e < 6751 || 6752 === e || 6753 === e || 6754 === e || !(e < 6755) && (e < 6757 || !(e < 6757) && (e < 6765 || !(e < 6765) && e < 6771))) : e < 7019 ? e < 6965 ? !(e < 6771) && (e < 6781 || 6783 === e || !(e < 6784) && (e < 6794 || !(e < 6800) && (e < 6810 || !(e < 6832) && (e < 6846 || !(e < 6912) && (e < 6916 || 6916 === e || 6964 === e))))) : 6965 === e || !(e < 6966) && (e < 6971 || 6971 === e || 6972 === e || !(e < 6973) && (e < 6978 || 6978 === e || !(e < 6979) && (e < 6981 || !(e < 6992) && e < 7002))) : e < 7083 ? !(e < 7019) && (e < 7028 || !(e < 7040) && (e < 7042 || 7042 === e || 7073 === e || !(e < 7074) && (e < 7078 || !(e < 7078) && (e < 7080 || !(e < 7080) && (e < 7082 || 7082 === e))))) : e < 7086 || !(e < 7088) && (e < 7098 || 7142 === e || 7143 === e || !(e < 7144) && (e < 7146 || !(e < 7146) && (e < 7149 || 7149 === e || 7150 === e || !(e < 7151) && e < 7154))) : e < 70096 ? e < 43587 ? e < 42654 ? e < 7616 ? e < 7380 ? !(e < 7154) && (e < 7156 || !(e < 7204) && (e < 7212 || !(e < 7212) && (e < 7220 || !(e < 7220) && (e < 7222 || !(e < 7222) && (e < 7224 || !(e < 7232) && (e < 7242 || !(e < 7248) && (e < 7258 || !(e < 7376) && e < 7379))))))) : e < 7393 || 7393 === e || !(e < 7394) && (e < 7401 || 7405 === e || !(e < 7410) && (e < 7412 || 7412 === e || 7415 === e || !(e < 7416) && e < 7418)) : e < 11647 ? !(e < 7616) && (e < 7674 || !(e < 7675) && (e < 7680 || !(e < 8255) && (e < 8257 || 8276 === e || !(e < 8400) && (e < 8413 || 8417 === e || !(e < 8421) && (e < 8433 || !(e < 11503) && e < 11506))))) : 11647 === e || !(e < 11744) && (e < 11776 || !(e < 12330) && (e < 12334 || !(e < 12334) && (e < 12336 || !(e < 12441) && (e < 12443 || !(e < 42528) && (e < 42538 || 42607 === e || !(e < 42612) && e < 42622))))) : e < 43346 ? e < 43136 ? !(e < 42654) && (e < 42656 || !(e < 42736) && (e < 42738 || 43010 === e || 43014 === e || 43019 === e || !(e < 43043) && (e < 43045 || !(e < 43045) && (e < 43047 || 43047 === e)))) : e < 43138 || !(e < 43188) && (e < 43204 || !(e < 43204) && (e < 43206 || !(e < 43216) && (e < 43226 || !(e < 43232) && (e < 43250 || !(e < 43264) && (e < 43274 || !(e < 43302) && (e < 43310 || !(e < 43335) && e < 43346)))))) : e < 43453 ? !(e < 43346) && (e < 43348 || !(e < 43392) && (e < 43395 || 43395 === e || 43443 === e || !(e < 43444) && (e < 43446 || !(e < 43446) && (e < 43450 || !(e < 43450) && (e < 43452 || 43452 === e))))) : e < 43457 || !(e < 43472) && (e < 43482 || 43493 === e || !(e < 43504) && (e < 43514 || !(e < 43561) && (e < 43567 || !(e < 43567) && (e < 43569 || !(e < 43569) && (e < 43571 || !(e < 43571) && (e < 43573 || !(e < 43573) && e < 43575)))))) : e < 66272 ? e < 43766 ? e < 43698 ? 43587 === e || 43596 === e || 43597 === e || !(e < 43600) && (e < 43610 || 43643 === e || 43644 === e || 43645 === e || 43696 === e) : e < 43701 || !(e < 43703) && (e < 43705 || !(e < 43710) && (e < 43712 || 43713 === e || 43755 === e || !(e < 43756) && (e < 43758 || !(e < 43758) && (e < 43760 || 43765 === e)))) : e < 44016 ? 43766 === e || !(e < 44003) && (e < 44005 || 44005 === e || !(e < 44006) && (e < 44008 || 44008 === e || !(e < 44009) && (e < 44011 || 44012 === e || 44013 === e))) : e < 44026 || 64286 === e || !(e < 65024) && (e < 65040 || !(e < 65056) && (e < 65072 || !(e < 65075) && (e < 65077 || !(e < 65101) && (e < 65104 || !(e < 65296) && (e < 65306 || 65343 === e || 66045 === e))))) : e < 69808 ? e < 68325 ? 66272 === e || !(e < 66422) && (e < 66427 || !(e < 66720) && (e < 66730 || !(e < 68097) && (e < 68100 || !(e < 68101) && (e < 68103 || !(e < 68108) && (e < 68112 || !(e < 68152) && (e < 68155 || 68159 === e)))))) : e < 68327 || 69632 === e || 69633 === e || 69634 === e || !(e < 69688) && (e < 69703 || !(e < 69734) && (e < 69744 || !(e < 69759) && (e < 69762 || 69762 === e))) : e < 69933 ? !(e < 69808) && (e < 69811 || !(e < 69811) && (e < 69815 || !(e < 69815) && (e < 69817 || !(e < 69817) && (e < 69819 || !(e < 69872) && (e < 69882 || !(e < 69888) && (e < 69891 || !(e < 69927) && (e < 69932 || 69932 === e))))))) : e < 69941 || !(e < 69942) && (e < 69952 || 70003 === e || !(e < 70016) && (e < 70018 || 70018 === e || !(e < 70067) && (e < 70070 || !(e < 70070) && (e < 70079 || !(e < 70079) && (e < 70081 || !(e < 70090) && e < 70093))))) : e < 71462 ? e < 70835 ? e < 70464 ? e < 70367 ? !(e < 70096) && (e < 70106 || !(e < 70188) && (e < 70191 || !(e < 70191) && (e < 70194 || !(e < 70194) && (e < 70196 || 70196 === e || 70197 === e || !(e < 70198) && (e < 70200 || 70206 === e))))) : 70367 === e || !(e < 70368) && (e < 70371 || !(e < 70371) && (e < 70379 || !(e < 70384) && (e < 70394 || !(e < 70400) && (e < 70402 || !(e < 70402) && (e < 70404 || 70460 === e || !(e < 70462) && e < 70464))))) : e < 70709 ? 70464 === e || !(e < 70465) && (e < 70469 || !(e < 70471) && (e < 70473 || !(e < 70475) && (e < 70478 || 70487 === e || !(e < 70498) && (e < 70500 || !(e < 70502) && (e < 70509 || !(e < 70512) && e < 70517))))) : e < 70712 || !(e < 70712) && (e < 70720 || !(e < 70720) && (e < 70722 || !(e < 70722) && (e < 70725 || 70725 === e || 70726 === e || !(e < 70736) && (e < 70746 || !(e < 70832) && e < 70835)))) : e < 71219 ? e < 71087 ? !(e < 70835) && (e < 70841 || 70841 === e || 70842 === e || !(e < 70843) && (e < 70847 || !(e < 70847) && (e < 70849 || 70849 === e || !(e < 70850) && (e < 70852 || !(e < 70864) && e < 70874)))) : e < 71090 || !(e < 71090) && (e < 71094 || !(e < 71096) && (e < 71100 || !(e < 71100) && (e < 71102 || 71102 === e || !(e < 71103) && (e < 71105 || !(e < 71132) && (e < 71134 || !(e < 71216) && e < 71219))))) : e < 71341 ? !(e < 71219) && (e < 71227 || !(e < 71227) && (e < 71229 || 71229 === e || 71230 === e || !(e < 71231) && (e < 71233 || !(e < 71248) && (e < 71258 || 71339 === e || 71340 === e)))) : 71341 === e || !(e < 71342) && (e < 71344 || !(e < 71344) && (e < 71350 || 71350 === e || 71351 === e || !(e < 71360) && (e < 71370 || !(e < 71453) && (e < 71456 || !(e < 71456) && (e < 71458 || !(e < 71458) && e < 71462))))) : e < 73023 ? e < 72344 ? e < 72249 ? 71462 === e || !(e < 71463) && (e < 71468 || !(e < 71472) && (e < 71482 || !(e < 71904) && (e < 71914 || !(e < 72193) && (e < 72199 || !(e < 72199) && (e < 72201 || !(e < 72201) && (e < 72203 || !(e < 72243) && e < 72249)))))) : 72249 === e || !(e < 72251) && (e < 72255 || 72263 === e || !(e < 72273) && (e < 72279 || !(e < 72279) && (e < 72281 || !(e < 72281) && (e < 72284 || !(e < 72330) && (e < 72343 || 72343 === e))))) : e < 72873 ? !(e < 72344) && (e < 72346 || 72751 === e || !(e < 72752) && (e < 72759 || !(e < 72760) && (e < 72766 || 72766 === e || 72767 === e || !(e < 72784) && (e < 72794 || !(e < 72850) && e < 72872)))) : 72873 === e || !(e < 72874) && (e < 72881 || 72881 === e || !(e < 72882) && (e < 72884 || 72884 === e || !(e < 72885) && (e < 72887 || !(e < 73009) && (e < 73015 || 73018 === e || !(e < 73020) && e < 73022)))) : e < 119362 ? e < 94095 ? !(e < 73023) && (e < 73030 || 73031 === e || !(e < 73040) && (e < 73050 || !(e < 92768) && (e < 92778 || !(e < 92912) && (e < 92917 || !(e < 92976) && (e < 92983 || !(e < 93008) && (e < 93018 || !(e < 94033) && e < 94079)))))) : e < 94099 || !(e < 113821) && (e < 113823 || !(e < 119141) && (e < 119143 || !(e < 119143) && (e < 119146 || !(e < 119149) && (e < 119155 || !(e < 119163) && (e < 119171 || !(e < 119173) && (e < 119180 || !(e < 119210) && e < 119214)))))) : e < 122880 ? !(e < 119362) && (e < 119365 || !(e < 120782) && (e < 120832 || !(e < 121344) && (e < 121399 || !(e < 121403) && (e < 121453 || 121461 === e || 121476 === e || !(e < 121499) && (e < 121504 || !(e < 121505) && e < 121520))))) : e < 122887 || !(e < 122888) && (e < 122905 || !(e < 122907) && (e < 122914 || !(e < 122915) && (e < 122917 || !(e < 122918) && (e < 122923 || !(e < 125136) && (e < 125143 || !(e < 125252) && (e < 125259 || !(e < 125264) && (e < 125274 || !(e < 917760) && e < 918e3)))))));
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.isIdStart = r, t.isIdContinue = i;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = {
$LONE: new Set([ "ASCII", "ASCII_Hex_Digit", "AHex", "Alphabetic", "Alpha", "Any", "Assigned", "Bidi_Control", "Bidi_C", "Bidi_Mirrored", "Bidi_M", "Case_Ignorable", "CI", "Cased", "Changes_When_Casefolded", "CWCF", "Changes_When_Casemapped", "CWCM", "Changes_When_Lowercased", "CWL", "Changes_When_NFKC_Casefolded", "CWKCF", "Changes_When_Titlecased", "CWT", "Changes_When_Uppercased", "CWU", "Dash", "Default_Ignorable_Code_Point", "DI", "Deprecated", "Dep", "Diacritic", "Dia", "Emoji", "Emoji_Component", "Emoji_Modifier", "Emoji_Modifier_Base", "Emoji_Presentation", "Extender", "Ext", "Grapheme_Base", "Gr_Base", "Grapheme_Extend", "Gr_Ext", "Hex_Digit", "Hex", "IDS_Binary_Operator", "IDSB", "IDS_Trinary_Operator", "IDST", "ID_Continue", "IDC", "ID_Start", "IDS", "Ideographic", "Ideo", "Join_Control", "Join_C", "Logical_Order_Exception", "LOE", "Lowercase", "Lower", "Math", "Noncharacter_Code_Point", "NChar", "Pattern_Syntax", "Pat_Syn", "Pattern_White_Space", "Pat_WS", "Quotation_Mark", "QMark", "Radical", "Regional_Indicator", "RI", "Sentence_Terminal", "STerm", "Soft_Dotted", "SD", "Terminal_Punctuation", "Term", "Unified_Ideograph", "UIdeo", "Uppercase", "Upper", "Variation_Selector", "VS", "White_Space", "space", "XID_Continue", "XIDC", "XID_Start", "XIDS" ]),
General_Category: new Set([ "Cased_Letter", "LC", "Close_Punctuation", "Pe", "Connector_Punctuation", "Pc", "Control", "Cc", "cntrl", "Currency_Symbol", "Sc", "Dash_Punctuation", "Pd", "Decimal_Number", "Nd", "digit", "Enclosing_Mark", "Me", "Final_Punctuation", "Pf", "Format", "Cf", "Initial_Punctuation", "Pi", "Letter", "L", "Letter_Number", "Nl", "Line_Separator", "Zl", "Lowercase_Letter", "Ll", "Mark", "M", "Combining_Mark", "Math_Symbol", "Sm", "Modifier_Letter", "Lm", "Modifier_Symbol", "Sk", "Nonspacing_Mark", "Mn", "Number", "N", "Open_Punctuation", "Ps", "Other", "C", "Other_Letter", "Lo", "Other_Number", "No", "Other_Punctuation", "Po", "Other_Symbol", "So", "Paragraph_Separator", "Zp", "Private_Use", "Co", "Punctuation", "P", "punct", "Separator", "Z", "Space_Separator", "Zs", "Spacing_Mark", "Mc", "Surrogate", "Cs", "Symbol", "S", "Titlecase_Letter", "Lt", "Unassigned", "Cn", "Uppercase_Letter", "Lu" ]),
Script: new Set([ "Adlam", "Adlm", "Ahom", "Anatolian_Hieroglyphs", "Hluw", "Arabic", "Arab", "Armenian", "Armn", "Avestan", "Avst", "Balinese", "Bali", "Bamum", "Bamu", "Bassa_Vah", "Bass", "Batak", "Batk", "Bengali", "Beng", "Bhaiksuki", "Bhks", "Bopomofo", "Bopo", "Brahmi", "Brah", "Braille", "Brai", "Buginese", "Bugi", "Buhid", "Buhd", "Canadian_Aboriginal", "Cans", "Carian", "Cari", "Caucasian_Albanian", "Aghb", "Chakma", "Cakm", "Cham", "Cherokee", "Cher", "Common", "Zyyy", "Coptic", "Copt", "Qaac", "Cuneiform", "Xsux", "Cypriot", "Cprt", "Cyrillic", "Cyrl", "Deseret", "Dsrt", "Devanagari", "Deva", "Duployan", "Dupl", "Egyptian_Hieroglyphs", "Egyp", "Elbasan", "Elba", "Ethiopic", "Ethi", "Georgian", "Geor", "Glagolitic", "Glag", "Gothic", "Goth", "Grantha", "Gran", "Greek", "Grek", "Gujarati", "Gujr", "Gurmukhi", "Guru", "Han", "Hani", "Hangul", "Hang", "Hanunoo", "Hano", "Hatran", "Hatr", "Hebrew", "Hebr", "Hiragana", "Hira", "Imperial_Aramaic", "Armi", "Inherited", "Zinh", "Qaai", "Inscriptional_Pahlavi", "Phli", "Inscriptional_Parthian", "Prti", "Javanese", "Java", "Kaithi", "Kthi", "Kannada", "Knda", "Katakana", "Kana", "Kayah_Li", "Kali", "Kharoshthi", "Khar", "Khmer", "Khmr", "Khojki", "Khoj", "Khudawadi", "Sind", "Lao", "Laoo", "Latin", "Latn", "Lepcha", "Lepc", "Limbu", "Limb", "Linear_A", "Lina", "Linear_B", "Linb", "Lisu", "Lycian", "Lyci", "Lydian", "Lydi", "Mahajani", "Mahj", "Malayalam", "Mlym", "Mandaic", "Mand", "Manichaean", "Mani", "Marchen", "Marc", "Masaram_Gondi", "Gonm", "Meetei_Mayek", "Mtei", "Mende_Kikakui", "Mend", "Meroitic_Cursive", "Merc", "Meroitic_Hieroglyphs", "Mero", "Miao", "Plrd", "Modi", "Mongolian", "Mong", "Mro", "Mroo", "Multani", "Mult", "Myanmar", "Mymr", "Nabataean", "Nbat", "New_Tai_Lue", "Talu", "Newa", "Nko", "Nkoo", "Nushu", "Nshu", "Ogham", "Ogam", "Ol_Chiki", "Olck", "Old_Hungarian", "Hung", "Old_Italic", "Ital", "Old_North_Arabian", "Narb", "Old_Permic", "Perm", "Old_Persian", "Xpeo", "Old_South_Arabian", "Sarb", "Old_Turkic", "Orkh", "Oriya", "Orya", "Osage", "Osge", "Osmanya", "Osma", "Pahawh_Hmong", "Hmng", "Palmyrene", "Palm", "Pau_Cin_Hau", "Pauc", "Phags_Pa", "Phag", "Phoenician", "Phnx", "Psalter_Pahlavi", "Phlp", "Rejang", "Rjng", "Runic", "Runr", "Samaritan", "Samr", "Saurashtra", "Saur", "Sharada", "Shrd", "Shavian", "Shaw", "Siddham", "Sidd", "SignWriting", "Sgnw", "Sinhala", "Sinh", "Sora_Sompeng", "Sora", "Soyombo", "Soyo", "Sundanese", "Sund", "Syloti_Nagri", "Sylo", "Syriac", "Syrc", "Tagalog", "Tglg", "Tagbanwa", "Tagb", "Tai_Le", "Tale", "Tai_Tham", "Lana", "Tai_Viet", "Tavt", "Takri", "Takr", "Tamil", "Taml", "Tangut", "Tang", "Telugu", "Telu", "Thaana", "Thaa", "Thai", "Tibetan", "Tibt", "Tifinagh", "Tfng", "Tirhuta", "Tirh", "Ugaritic", "Ugar", "Vai", "Vaii", "Warang_Citi", "Wara", "Yi", "Yiii", "Zanabazar_Square", "Zanb" ])
};
t.PropertyData = r, r.gc = r.General_Category, r.sc = r.Script_Extensions = r.scx = r.Script;
}, function(e, t, n) {
"use strict";
e.exports = function() {
return /\uD83C\uDFF4(?:\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74)\uDB40\uDC7F|\u200D\u2620\uFE0F)|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3]))|\uD83D\uDC69\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83D\uDC69\u200D[\u2695\u2696\u2708])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC68(?:\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDB0-\uDDB3])|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF9]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD70\uDD73-\uDD76\uDD7A\uDD7C-\uDDA2\uDDB0-\uDDB9\uDDC0-\uDDC2\uDDD0-\uDDFF])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDD1-\uDDDD])/g;
};
}, function(e, t) {
e.exports = function e(t) {
return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8;
};
}, function(e, t) {
"function" == typeof Object.create ? e.exports = function e(t, n) {
t.super_ = n, t.prototype = Object.create(n.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
} : e.exports = function e(t, n) {
t.super_ = n;
var r = function() {};
r.prototype = n.prototype, t.prototype = new r(), t.prototype.constructor = t;
};
}, function(e, t) {
function n(e) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
n.keys = function() {
return [];
}, n.resolve = n, e.exports = n, n.id = 124;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.default = {
C: !1,
Other: !1,
Cc: !1,
Control: !1,
Cf: !1,
Format: !1,
Cn: !1,
Unassigned: !1,
Co: !1,
Private_Use: !1,
Cs: !1,
Surrogate: !1,
L: !1,
Letter: !1,
LC: !1,
Cased_Letter: !1,
Ll: !1,
Lowercase_Letter: !1,
Lm: !1,
Modifier_Letter: !1,
Lo: !1,
Other_Letter: !1,
Lt: !1,
Titlecase_Letter: !1,
Lu: !1,
Uppercase_Letter: !1,
M: !1,
Mark: !1,
Mc: !1,
Spacing_Mark: !1,
Me: !1,
Enclosing_Mark: !1,
Mn: !1,
Nonspacing_Mark: !1,
N: !1,
Number: !1,
Nd: !1,
Decimal_Number: !1,
Nl: !1,
Letter_Number: !1,
No: !1,
Other_Number: !1,
P: !1,
Punctuation: !1,
Pc: !1,
Connector_Punctuation: !1,
Pd: !1,
Dash_Punctuation: !1,
Pe: !1,
Close_Punctuation: !1,
Pf: !1,
Final_Punctuation: !1,
Pi: !1,
Initial_Punctuation: !1,
Po: !1,
Other_Punctuation: !1,
Ps: !1,
Open_Punctuation: !1,
S: !1,
Symbol: !1,
Sc: !1,
Currency_Symbol: !1,
Sk: !1,
Modifier_Symbol: !1,
Sm: !1,
Math_Symbol: !1,
So: !1,
Other_Symbol: !1,
Z: !1,
Separator: !1,
Zl: !1,
Line_Separator: !1,
Zp: !1,
Paragraph_Separator: !1,
Zs: !1,
Space_Separator: !1
}, t.NAME_ALIAS = {
C: "Other",
Other: "C",
Cc: "Control",
Control: "Cc",
Cf: "Format",
Format: "Cf",
Cn: "Unassigned",
Unassigned: "Cn",
Co: "Private_Use",
Private_Use: "Co",
Cs: "Surrogate",
Surrogate: "Cs",
L: "Letter",
Letter: "L",
LC: "Cased_Letter",
Cased_Letter: "LC",
Ll: "Lowercase_Letter",
Lowercase_Letter: "Ll",
Lm: "Modifier_Letter",
Modifier_Letter: "Lm",
Lo: "Other_Letter",
Other_Letter: "Lo",
Lt: "Titlecase_Letter",
Titlecase_Letter: "Lt",
Lu: "Uppercase_Letter",
Uppercase_Letter: "Lu",
M: "Mark",
Mark: "M",
Mc: "Spacing_Mark",
Spacing_Mark: "Mc",
Me: "Enclosing_Mark",
Enclosing_Mark: "Me",
Mn: "Nonspacing_Mark",
Nonspacing_Mark: "Mn",
N: "Number",
Number: "N",
Nd: "Decimal_Number",
Decimal_Number: "Nd",
Nl: "Letter_Number",
Letter_Number: "Nl",
No: "Other_Number",
Other_Number: "No",
P: "Punctuation",
Punctuation: "P",
Pc: "Connector_Punctuation",
Connector_Punctuation: "Pc",
Pd: "Dash_Punctuation",
Dash_Punctuation: "Pd",
Pe: "Close_Punctuation",
Close_Punctuation: "Pe",
Pf: "Final_Punctuation",
Final_Punctuation: "Pf",
Pi: "Initial_Punctuation",
Initial_Punctuation: "Pi",
Po: "Other_Punctuation",
Other_Punctuation: "Po",
Ps: "Open_Punctuation",
Open_Punctuation: "Ps",
S: "Symbol",
Symbol: "S",
Sc: "Currency_Symbol",
Currency_Symbol: "Sc",
Sk: "Modifier_Symbol",
Modifier_Symbol: "Sk",
Sm: "Math_Symbol",
Math_Symbol: "Sm",
So: "Other_Symbol",
Other_Symbol: "So",
Z: "Separator",
Separator: "Z",
Zl: "Line_Separator",
Line_Separator: "Zl",
Zp: "Paragraph_Separator",
Paragraph_Separator: "Zp",
Zs: "Space_Separator",
Space_Separator: "Zs"
};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.default = {
ASCII: !1,
Alphabetic: !1,
Any: !1,
Default_Ignorable_Code_Point: !1,
Lowercase: !1,
Noncharacter_Code_Point: !1,
Uppercase: !1,
White_Space: !1
}, t.NAME_ALIAS = {};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(27), i = n(17), o = n(128);
function a(e = RegExp, n = t.PatternTest) {
return Object.keys(t.UNICODE_BLOCKS_ALL).reduce(function(r, i) {
return r[i] = t.testUnicodeBlocks(i, e, n), r;
}, {});
}
function s(e, n) {
let r = t.KEY_PREFIX;
return n && (r = t.KEY_PREFIX_NEGATION), i._wrapToRegexName(e, r, t.KEY_SUFFIX);
}
t.KEY_PREFIX = "\\p{", t.KEY_PREFIX_NEGATION = "\\P{", t.KEY_SUFFIX = "}", t.UNICODE_BLOCKS = {
InBasic_Latin: !1
}, t.UNICODE_BLOCKS_ALL = Object.assign({}, o.default, t.UNICODE_BLOCKS), t.PatternTest = {
InBasic_Latin: [ [ "^\\p{InBasic_Latin}+$", "u", "", !0, "test" ], [ "^\\p{InBasic_Latin}+$", "u", "", !1, "test" ] ]
}, t.testUnicodeBlocks = r._createFnTestPattern(t.PatternTest), t.testUnicodeBlocksAll = a, 
t.wrapToRegexName = s;
const u = n(28);
t.default = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.default = {
InAdlam: !1,
InAegean_Numbers: !1,
InAhom: !1,
InAlchemical_Symbols: !1,
InAlphabetic_Presentation_Forms: !1,
InAnatolian_Hieroglyphs: !1,
InAncient_Greek_Musical_Notation: !1,
InAncient_Greek_Numbers: !1,
InAncient_Symbols: !1,
InArabic: !1,
InArabic_Extended_A: !1,
InArabic_Mathematical_Alphabetic_Symbols: !1,
InArabic_Presentation_Forms_A: !1,
InArabic_Presentation_Forms_B: !1,
InArabic_Supplement: !1,
InArmenian: !1,
InArrows: !1,
InAvestan: !1,
InBalinese: !1,
InBamum: !1,
InBamum_Supplement: !1,
InBasic_Latin: !1,
InBassa_Vah: !1,
InBatak: !1,
InBengali: !1,
InBhaiksuki: !1,
InBlock_Elements: !1,
InBopomofo: !1,
InBopomofo_Extended: !1,
InBox_Drawing: !1,
InBrahmi: !1,
InBraille_Patterns: !1,
InBuginese: !1,
InBuhid: !1,
InByzantine_Musical_Symbols: !1,
InCJK_Compatibility: !1,
InCJK_Compatibility_Forms: !1,
InCJK_Compatibility_Ideographs: !1,
InCJK_Compatibility_Ideographs_Supplement: !1,
InCJK_Radicals_Supplement: !1,
InCJK_Strokes: !1,
InCJK_Symbols_And_Punctuation: !1,
InCJK_Unified_Ideographs: !1,
InCJK_Unified_Ideographs_Extension_A: !1,
InCJK_Unified_Ideographs_Extension_B: !1,
InCJK_Unified_Ideographs_Extension_C: !1,
InCJK_Unified_Ideographs_Extension_D: !1,
InCJK_Unified_Ideographs_Extension_E: !1,
InCJK_Unified_Ideographs_Extension_F: !1,
InCarian: !1,
InCaucasian_Albanian: !1,
InChakma: !1,
InCham: !1,
InCherokee: !1,
InCherokee_Supplement: !1,
InCombining_Diacritical_Marks: !1,
InCombining_Diacritical_Marks_Extended: !1,
InCombining_Diacritical_Marks_For_Symbols: !1,
InCombining_Diacritical_Marks_Supplement: !1,
InCombining_Half_Marks: !1,
InCommon_Indic_Number_Forms: !1,
InControl_Pictures: !1,
InCoptic: !1,
InCoptic_Epact_Numbers: !1,
InCounting_Rod_Numerals: !1,
InCuneiform: !1,
InCuneiform_Numbers_And_Punctuation: !1,
InCurrency_Symbols: !1,
InCypriot_Syllabary: !1,
InCyrillic: !1,
InCyrillic_Extended_A: !1,
InCyrillic_Extended_B: !1,
InCyrillic_Extended_C: !1,
InCyrillic_Supplement: !1,
InDeseret: !1,
InDevanagari: !1,
InDevanagari_Extended: !1,
InDingbats: !1,
InDomino_Tiles: !1,
InDuployan: !1,
InEarly_Dynastic_Cuneiform: !1,
InEgyptian_Hieroglyphs: !1,
InElbasan: !1,
InEmoticons: !1,
InEnclosed_Alphanumeric_Supplement: !1,
InEnclosed_Alphanumerics: !1,
InEnclosed_CJK_Letters_And_Months: !1,
InEnclosed_Ideographic_Supplement: !1,
InEthiopic: !1,
InEthiopic_Extended: !1,
InEthiopic_Extended_A: !1,
InEthiopic_Supplement: !1,
InGeneral_Punctuation: !1,
InGeometric_Shapes: !1,
InGeometric_Shapes_Extended: !1,
InGeorgian: !1,
InGeorgian_Supplement: !1,
InGlagolitic: !1,
InGlagolitic_Supplement: !1,
InGothic: !1,
InGrantha: !1,
InGreek_And_Coptic: !1,
InGreek_Extended: !1,
InGujarati: !1,
InGurmukhi: !1,
InHalfwidth_And_Fullwidth_Forms: !1,
InHangul_Compatibility_Jamo: !1,
InHangul_Jamo: !1,
InHangul_Jamo_Extended_A: !1,
InHangul_Jamo_Extended_B: !1,
InHangul_Syllables: !1,
InHanunoo: !1,
InHatran: !1,
InHebrew: !1,
InHigh_Private_Use_Surrogates: !1,
InHigh_Surrogates: !1,
InHiragana: !1,
InIPA_Extensions: !1,
InIdeographic_Description_Characters: !1,
InIdeographic_Symbols_And_Punctuation: !1,
InImperial_Aramaic: !1,
InInscriptional_Pahlavi: !1,
InInscriptional_Parthian: !1,
InJavanese: !1,
InKaithi: !1,
InKana_Extended_A: !1,
InKana_Supplement: !1,
InKanbun: !1,
InKangxi_Radicals: !1,
InKannada: !1,
InKatakana: !1,
InKatakana_Phonetic_Extensions: !1,
InKayah_Li: !1,
InKharoshthi: !1,
InKhmer: !1,
InKhmer_Symbols: !1,
InKhojki: !1,
InKhudawadi: !1,
InLao: !1,
InLatin_1_Supplement: !1,
InLatin_Extended_A: !1,
InLatin_Extended_Additional: !1,
InLatin_Extended_B: !1,
InLatin_Extended_C: !1,
InLatin_Extended_D: !1,
InLatin_Extended_E: !1,
InLepcha: !1,
InLetterlike_Symbols: !1,
InLimbu: !1,
InLinear_A: !1,
InLinear_B_Ideograms: !1,
InLinear_B_Syllabary: !1,
InLisu: !1,
InLow_Surrogates: !1,
InLycian: !1,
InLydian: !1,
InMahajani: !1,
InMahjong_Tiles: !1,
InMalayalam: !1,
InMandaic: !1,
InManichaean: !1,
InMarchen: !1,
InMasaram_Gondi: !1,
InMathematical_Alphanumeric_Symbols: !1,
InMathematical_Operators: !1,
InMeetei_Mayek: !1,
InMeetei_Mayek_Extensions: !1,
InMende_Kikakui: !1,
InMeroitic_Cursive: !1,
InMeroitic_Hieroglyphs: !1,
InMiao: !1,
InMiscellaneous_Mathematical_Symbols_A: !1,
InMiscellaneous_Mathematical_Symbols_B: !1,
InMiscellaneous_Symbols: !1,
InMiscellaneous_Symbols_And_Arrows: !1,
InMiscellaneous_Symbols_And_Pictographs: !1,
InMiscellaneous_Technical: !1,
InModi: !1,
InModifier_Tone_Letters: !1,
InMongolian: !1,
InMongolian_Supplement: !1,
InMro: !1,
InMultani: !1,
InMusical_Symbols: !1,
InMyanmar: !1,
InMyanmar_Extended_A: !1,
InMyanmar_Extended_B: !1,
InNKo: !1,
InNabataean: !1,
InNew_Tai_Lue: !1,
InNewa: !1,
InNumber_Forms: !1,
InNushu: !1,
InOgham: !1,
InOl_Chiki: !1,
InOld_Hungarian: !1,
InOld_Italic: !1,
InOld_North_Arabian: !1,
InOld_Permic: !1,
InOld_Persian: !1,
InOld_South_Arabian: !1,
InOld_Turkic: !1,
InOptical_Character_Recognition: !1,
InOriya: !1,
InOrnamental_Dingbats: !1,
InOsage: !1,
InOsmanya: !1,
InPahawh_Hmong: !1,
InPalmyrene: !1,
InPau_Cin_Hau: !1,
InPhags_Pa: !1,
InPhaistos_Disc: !1,
InPhoenician: !1,
InPhonetic_Extensions: !1,
InPhonetic_Extensions_Supplement: !1,
InPlaying_Cards: !1,
InPrivate_Use_Area: !1,
InPsalter_Pahlavi: !1,
InRejang: !1,
InRumi_Numeral_Symbols: !1,
InRunic: !1,
InSamaritan: !1,
InSaurashtra: !1,
InSharada: !1,
InShavian: !1,
InShorthand_Format_Controls: !1,
InSiddham: !1,
InSinhala: !1,
InSinhala_Archaic_Numbers: !1,
InSmall_Form_Variants: !1,
InSora_Sompeng: !1,
InSoyombo: !1,
InSpacing_Modifier_Letters: !1,
InSpecials: !1,
InSundanese: !1,
InSundanese_Supplement: !1,
InSuperscripts_And_Subscripts: !1,
InSupplemental_Arrows_A: !1,
InSupplemental_Arrows_B: !1,
InSupplemental_Arrows_C: !1,
InSupplemental_Mathematical_Operators: !1,
InSupplemental_Punctuation: !1,
InSupplemental_Symbols_And_Pictographs: !1,
InSupplementary_Private_Use_Area_A: !1,
InSupplementary_Private_Use_Area_B: !1,
InSutton_SignWriting: !1,
InSyloti_Nagri: !1,
InSyriac: !1,
InSyriac_Supplement: !1,
InTagalog: !1,
InTagbanwa: !1,
InTags: !1,
InTai_Le: !1,
InTai_Tham: !1,
InTai_Viet: !1,
InTai_Xuan_Jing_Symbols: !1,
InTakri: !1,
InTamil: !1,
InTangut: !1,
InTangut_Components: !1,
InTelugu: !1,
InThaana: !1,
InThai: !1,
InTibetan: !1,
InTifinagh: !1,
InTirhuta: !1,
InTransport_And_Map_Symbols: !1,
InUgaritic: !1,
InUnified_Canadian_Aboriginal_Syllabics: !1,
InUnified_Canadian_Aboriginal_Syllabics_Extended: !1,
InVai: !1,
InVariation_Selectors: !1,
InVariation_Selectors_Supplement: !1,
InVedic_Extensions: !1,
InVertical_Forms: !1,
InWarang_Citi: !1,
InYi_Radicals: !1,
InYi_Syllables: !1,
InYijing_Hexagram_Symbols: !1,
InZanabazar_Square: !1
}, t.NAME_ALIAS = {};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.default = {
Adlam: !1,
Ahom: !1,
Anatolian_Hieroglyphs: !1,
Arabic: !1,
Armenian: !1,
Avestan: !1,
Balinese: !1,
Bamum: !1,
Bassa_Vah: !1,
Batak: !1,
Bengali: !1,
Bhaiksuki: !1,
Bopomofo: !1,
Brahmi: !1,
Braille: !1,
Buginese: !1,
Buhid: !1,
Canadian_Aboriginal: !1,
Carian: !1,
Caucasian_Albanian: !1,
Chakma: !1,
Cham: !1,
Cherokee: !1,
Common: !1,
Coptic: !1,
Cuneiform: !1,
Cypriot: !1,
Cyrillic: !1,
Deseret: !1,
Devanagari: !1,
Duployan: !1,
Egyptian_Hieroglyphs: !1,
Elbasan: !1,
Ethiopic: !1,
Georgian: !1,
Glagolitic: !1,
Gothic: !1,
Grantha: !1,
Greek: !1,
Gujarati: !1,
Gurmukhi: !1,
Han: !1,
Hangul: !1,
Hanunoo: !1,
Hatran: !1,
Hebrew: !1,
Hiragana: !1,
Imperial_Aramaic: !1,
Inherited: !1,
Inscriptional_Pahlavi: !1,
Inscriptional_Parthian: !1,
Javanese: !1,
Kaithi: !1,
Kannada: !1,
Katakana: !1,
Kayah_Li: !1,
Kharoshthi: !1,
Khmer: !1,
Khojki: !1,
Khudawadi: !1,
Lao: !1,
Latin: !1,
Lepcha: !1,
Limbu: !1,
Linear_A: !1,
Linear_B: !1,
Lisu: !1,
Lycian: !1,
Lydian: !1,
Mahajani: !1,
Malayalam: !1,
Mandaic: !1,
Manichaean: !1,
Marchen: !1,
Masaram_Gondi: !1,
Meetei_Mayek: !1,
Mende_Kikakui: !1,
Meroitic_Cursive: !1,
Meroitic_Hieroglyphs: !1,
Miao: !1,
Modi: !1,
Mongolian: !1,
Mro: !1,
Multani: !1,
Myanmar: !1,
Nabataean: !1,
New_Tai_Lue: !1,
Newa: !1,
Nko: !1,
Nushu: !1,
Ogham: !1,
Ol_Chiki: !1,
Old_Hungarian: !1,
Old_Italic: !1,
Old_North_Arabian: !1,
Old_Permic: !1,
Old_Persian: !1,
Old_South_Arabian: !1,
Old_Turkic: !1,
Oriya: !1,
Osage: !1,
Osmanya: !1,
Pahawh_Hmong: !1,
Palmyrene: !1,
Pau_Cin_Hau: !1,
Phags_Pa: !1,
Phoenician: !1,
Psalter_Pahlavi: !1,
Rejang: !1,
Runic: !1,
Samaritan: !1,
Saurashtra: !1,
Sharada: !1,
Shavian: !1,
Siddham: !1,
SignWriting: !1,
Sinhala: !1,
Sora_Sompeng: !1,
Soyombo: !1,
Sundanese: !1,
Syloti_Nagri: !1,
Syriac: !1,
Tagalog: !1,
Tagbanwa: !1,
Tai_Le: !1,
Tai_Tham: !1,
Tai_Viet: !1,
Takri: !1,
Tamil: !1,
Tangut: !1,
Telugu: !1,
Thaana: !1,
Thai: !1,
Tibetan: !1,
Tifinagh: !1,
Tirhuta: !1,
Ugaritic: !1,
Vai: !1,
Warang_Citi: !1,
Yi: !1,
Zanabazar_Square: !1
}, t.NAME_ALIAS = {};
}, function(e, t, n) {
"use strict";
const r = n(131);
e.exports = r.matchRange;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(132), i = n(136);
t.TABLE_RANGE = i.default;
const o = n(15);
function a(e, t, n = {}) {
n = l(n);
let r = e, i = t, a = [], u = !!n.findFirstOne;
return Object.keys(n.dataTables).some(function(e) {
let t;
if (n.dataTables[e].some(function(e) {
let n = e.indexOf(r), o = e.indexOf(i, n);
if (-1 !== n && -1 !== o) return a.push(...e.slice(n, o + 1)), t = !0, u;
}), t) return !0;
}), a && a.length ? (o.array_unique_overwrite(a), n.createRegExpString ? s(a, n.createRegExpClass) : a) : null;
}
function s(e, t) {
if (1 == e.length) return e[0];
let n = e.join("");
return t ? "[" + n + "]" : n;
}
function u(e, t, n = {}) {
let i = e, o = t, s = null;
if (!(s = a(e, t, n = l(n))) && (n.arrayMode || 1 == String(i).length && 1 == String(o).length)) {
let e;
if ("string" == typeof i && "string" == typeof o) {
let t, n;
e = i.charCodeAt(0) <= o.charCodeAt(0);
} else e = !0;
e && (s = r(i, o)), s && s.length || (s = null);
}
return Array.isArray(s) && (s = s.map(e => String(e))), s;
}
function l(e) {
let t = Object.assign({}, e);
return t.dataTables = t.dataTables || i.default, t;
}
t.matchRange = a, t.toRegExpString = s, t.fillRange = u, t.getOptions = l, a.matchRange = a, 
a.getOptions = l, a.toRegExpString = s, a.TABLE_RANGE = i.default, a.fillRange = u, 
a.default = a, t.default = t;
}, function(e, t, n) {
"use strict";
const r = n(52), i = n(133), o = n(134);
function a(e, t, n, o) {
if (void 0 === e) return [];
if (void 0 === t || e === t) {
let t = "string" == typeof e;
return i(e) && !f(e) ? [ t ? "0" : 0 ] : [ e ];
}
"number" != typeof n && "string" != typeof n && (o = n, n = void 0), "function" == typeof o && (o = {
transform: o
});
const a = Object.assign({
step: n
}, o);
if (a.step && !g(a.step)) {
if (!0 === a.strictRanges) throw new TypeError("expected options.step to be a number");
return [];
}
if (a.isNumber = g(e) && g(t), !a.isNumber && !h(e, t)) {
if (!0 === a.strictRanges) throw new RangeError("invalid range arguments: " + r.inspect([ e, t ]));
return [];
}
return a.isPadded = p(e) || p(t), a.toString = a.stringify || "string" == typeof a.step || "string" == typeof e || "string" == typeof t || !a.isNumber, 
a.isPadded && (a.maxLength = Math.max(String(e).length, String(t).length)), "boolean" == typeof a.optimize && (a.toRegex = a.optimize), 
"boolean" == typeof a.makeRe && (a.toRegex = a.makeRe), s(e, t, a);
}
function s(e, t, n) {
let i = n.isNumber ? f(e) : e.charCodeAt(0), o = n.isNumber ? f(t) : t.charCodeAt(0), a = Math.abs(f(n.step)) || 1;
if (n.toRegex && 1 === a) return u(i, o, e, t, n);
let s = {
greater: [],
lesser: []
}, p = i < o, h = new Array(Math.round((p ? o - i : i - o) / a)), d = 0;
if (!p && n.strictOrder) {
if (!0 === n.strictRanges) throw new RangeError("invalid range arguments: " + r.inspect([ e, t ]));
return [];
}
for (;p ? i <= o : i >= o; ) {
let e = n.isNumber ? i : String.fromCharCode(i);
if (n.toRegex && (e >= 0 || !n.isNumber) ? s.greater.push(e) : s.lesser.push(Math.abs(e)), 
n.isPadded && (e = c(e, n)), n.toString && (e = String(e)), "function" == typeof n.transform ? h[d++] = n.transform(e, i, o, a, d, h, n) : h[d++] = e, 
p ? i += a : i -= a, n.limit > 0 && h.length >= n.limit) break;
}
return !0 === n.toRegex ? l(h, s, n) : h;
}
function u(e, t, n, r, i) {
return i.isPadded ? o(n, r, i) : i.isNumber ? o(Math.min(e, t), Math.max(e, t), i) : `[${n = String.fromCharCode(Math.min(e, t))}-${r = String.fromCharCode(Math.max(e, t))}]`;
}
function l(e, t, n) {
let r = "", i = "";
t.greater.length && (r = t.greater.join("|")), t.lesser.length && (i = `-(${t.lesser.join("|")})`);
let o = r && i ? `${r}|${i}` : r || i;
return n.capture ? `(${o})` : o;
}
function c(e, t) {
if (t.isPadded) {
let n = String(e), r = n.length, i = "";
"-" === n.charAt(0) && (i = "-", n = n.slice(1));
let o = t.maxLength - r, a;
e = i + "0".repeat(o) + n;
}
return t.stringify ? String(e) : e;
}
function f(e) {
return Number(e) || 0;
}
function p(e) {
return /^-?0\d/.test(e);
}
function h(e, t) {
return (g(e) || d(e)) && (g(t) || d(t));
}
function d(e) {
return "string" == typeof e && 1 === e.length && /^\w+$/.test(e);
}
function g(e) {
return i(e) && !/\./.test(e);
}
e.exports = a;
}, function(e, t, n) {
"use strict";
e.exports = function(e) {
return "number" == typeof e ? e - e == 0 : "string" == typeof e && "" !== e.trim() && (Number.isFinite ? Number.isFinite(+e) : isFinite(+e));
};
}, function(e, t, n) {
"use strict";
const r = n(135);
function i(e, t, n) {
if (!1 === r(e)) throw new TypeError("toRegexRange: expected the first argument to be a number");
if (void 0 === t || e === t) return String(e);
if (!1 === r(t)) throw new TypeError("toRegexRange: expected the second argument to be a number.");
n = n || {};
let a, s, l, c = e + ":" + t + "=" + String(n.relaxZeros) + String(n.shorthand) + String(n.capture);
if (i.cache.hasOwnProperty(c)) return i.cache[c].result;
let f = Math.min(e, t), p = Math.max(e, t);
if (1 === Math.abs(f - p)) {
let r = e + "|" + t;
return n.capture ? "(" + r + ")" : !1 === n.wrap ? r : "(?:" + r + ")";
}
let h = y(e) || y(t), d = [], g = [], _ = {
min: e,
max: t,
a: f,
b: p
};
if (h && (_.isPadded = h, _.maxLen = String(_.max).length), f < 0) {
let e, t;
g = u(p < 0 ? Math.abs(p) : 1, Math.abs(f), _, n), f = _.a = 0;
}
return p >= 0 && (d = u(f, p, _, n)), _.negatives = g, _.positives = d, _.result = o(g, d, n), 
n.capture ? _.result = "(" + _.result + ")" : !1 !== n.wrap && d.length + g.length > 1 && (_.result = "(?:" + _.result + ")"), 
i.cache[c] = _, _.result;
}
function o(e, t, n) {
let r = l(e, t, "-", !1, n) || [], i = l(t, e, "", !1, n) || [], o = l(e, t, "-?", !0, n) || [], a;
return r.concat(o).concat(i).join("|");
}
function a(e, t) {
e = Number(e);
let n = 1, r = [ t = Number(t) ], i = +d(e, n);
for (;e <= i && i <= t; ) r = p(r, i), i = +d(e, n += 1);
let o = 1;
for (i = g(t + 1, o) - 1; e < i && i <= t; ) r = p(r, i), i = g(t + 1, o += 1) - 1;
return r.sort(f), r;
}
function s(e, t, n) {
if (e === t) return {
pattern: String(e),
digits: []
};
let r = c(String(e), String(t)), i = r.length, o = -1, a = "", s = 0;
for (;++o < i; ) {
let e = r[o], t = e[0], n = e[1];
t === n ? a += t : "0" !== t || "9" !== n ? a += m(t, n) : s += 1;
}
return s && (a += n.shorthand ? "\\d" : "[0-9]"), {
pattern: a,
digits: [ s ]
};
}
function u(e, t, n, r) {
let i = a(e, t), o = i.length, u = -1, l = [], c = e, f;
for (;++u < o; ) {
let e = i[u], t = s(c, e, r), o = "";
n.isPadded || !f || f.pattern !== t.pattern ? (n.isPadded && (o = D(e, n)), t.string = o + t.pattern + _(t.digits), 
l.push(t), c = e + 1, f = t) : (f.digits.length > 1 && f.digits.pop(), f.digits.push(t.digits[0]), 
f.string = f.pattern + _(f.digits), c = e + 1);
}
return l;
}
function l(e, t, n, r, i) {
let o = [];
for (let a = 0; a < e.length; a++) {
let s, u = e[a].string;
!1 !== i.relaxZeros && "-" === n && "0" === u.charAt(0) && (u = "{" === u.charAt(1) ? "0*" + u.replace(/^0\{\d+\}/, "") : "0*" + u.slice(1)), 
r || h(t, "string", u) || o.push(n + u), r && h(t, "string", u) && o.push(n + u);
}
return o;
}
function c(e, t) {
let n = [];
for (let r = 0; r < e.length; r++) n.push([ e[r], t[r] ]);
return n;
}
function f(e, t) {
return e > t ? 1 : t > e ? -1 : 0;
}
function p(e, t) {
return -1 === e.indexOf(t) && e.push(t), e;
}
function h(e, t, n) {
for (let r = 0; r < e.length; r++) if (e[r][t] === n) return !0;
return !1;
}
function d(e, t) {
return String(e).slice(0, -t) + "9".repeat(t);
}
function g(e, t) {
return e - e % Math.pow(10, t);
}
function _(e) {
let t = e[0], n = e[1] ? "," + e[1] : "";
return n || t && 1 !== t ? "{" + t + n + "}" : "";
}
function m(e, t) {
return "[" + e + (t - e == 1 ? "" : "-") + t + "]";
}
function y(e) {
return /^-?(0+)\d/.exec(e);
}
function D(e, t) {
if (t.isPadded) {
let n = Math.abs(t.maxLen - String(e).length);
switch (n) {
case 0:
return "";

case 1:
return "0";

default:
return "0{" + n + "}";
}
}
return e;
}
i.cache = {}, i.clearCache = (() => i.cache = {}), e.exports = i;
}, function(e, t, n) {
"use strict";
e.exports = function(e) {
return "number" == typeof e ? e - e == 0 : "string" == typeof e && "" !== e.trim() && (Number.isFinite ? Number.isFinite(+e) : isFinite(+e));
};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(137), i = n(138);
t.table_range = {
chinese: r.default,
chinese2: r.list_range2,
circle: i.default
}, t.default = t.table_range;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(42);
t.list_range = [ "〇一二三四五六七八九十".split(""), "零一二三四五六七八九十".split("") ], [ [ "common", "十" ], [ "formal", "十" ], [ "traditional", "拾" ], [ "traditionalOld", "拾" ], [ "simplified", "拾" ], [ "traditional", "什" ], [ "traditionalOld", "什" ], [ "simplified", "什" ] ].forEach(function(e) {
let n = r.predefineedTranscriptionConfigs.digits[e[0]];
n && (n = Object.values(n), e[1] && n.push(e[1]), t.list_range.push(n));
}), t.list_range2 = [], [ [ "chineseMilitary" ] ].forEach(function(e) {
let n = r.predefineedTranscriptionConfigs.digits[e[0]];
n && (n = Object.values(n), e[1] && n.push(e[1]), t.list_range2.push(n));
}), t.default = t.list_range;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(139);
t.list_range_raw = [ [ 9450, [ 9312, 9332 ], [ 12881, 12896 ], [ 12977, 12992 ] ], [ 9471, [ 10102, 10112 ], [ 9451, 9461 ] ], [ [ 10102, 10112 ], [ 9451, 9461 ] ], [ [ 10122, 10132 ], [ 9451, 9461 ] ], [ [ 9461, 9471 ] ], [ [ 10112, 10122 ] ] ], 
t.list_range = r.listRawToRange(t.list_range_raw), t.default = t.list_range;
}, function(e, t, n) {
"use strict";
function r(e) {
return e.reduce(function(e, t) {
let n = t.reduce(function(e, t) {
let n;
if ("number" == typeof t) n = String.fromCharCode(t); else if ("string" == typeof t) n = t; else {
if (!Array.isArray(t)) throw new TypeError();
if (2 != t.length) throw new TypeError();
n = new Array(t[1] - t[0]).fill(0).map(function(e, n, r) {
return String.fromCharCode(t[0] + n);
});
}
return Array.isArray(n) ? e = e.concat(n) : e.push(n), e;
}, []);
return e.push(n), e;
}, []);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.listRawToRange = r, t.default = t;
}, function(e, t, n) {
"use strict";
function r(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), r(n(57));
const i = n(16), o = n(141);
t.getNativeFlags = o.getNativeFlags, t.stripNonNativeFlags = o.stripNonNativeFlags, 
t.isNativeFlags = o.isNativeFlags, t.prototypeToFlags = o.prototypeToFlags, t.prototypeToFlagsArray = o.prototypeToFlagsArray;
const a = n(142);
t.parseRegularExpressionString = a.parseRegularExpressionString, t.nativeFlags = i.default.nativeFlags, 
t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(16);
function i(e) {
let t;
if (e instanceof RegExp && (e = s(e)), "string" != typeof e) throw new TypeError("target must is RegExp or String");
return t = o(e);
}
function o(e) {
return e.replace(t.RE_NON_NATIVE_FLAGS, "");
}
function a(e) {
return "" === e || !t.RE_NON_NATIVE_FLAGS.test(e);
}
function s(e) {
return t.hasFlagsProp ? e.flags : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(e))[1];
}
function u(e, t = r.FlagsName) {
return Object.keys(t).reduce(function(n, r) {
return !0 === e[r] && r in t && -1 === n.indexOf(t[r]) && n.push(t[r]), n;
}, []).sort();
}
function l(e, t = r.FlagsName) {
return u(e, t).join("");
}
t.RE_NATIVE_FLAGS = new RegExp(`[${r.default.nativeFlags}]`, "g"), t.RE_NON_NATIVE_FLAGS = new RegExp(`[^${r.default.nativeFlags}]`, "g"), 
t.hasFlagsProp = r.default.prototype.flags, t.getNativeFlags = i, t.stripNonNativeFlags = o, 
t.isNativeFlags = a, t._getNativeFlags = s, t.prototypeToFlagsArray = u, t.prototypeToFlags = l, 
t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(16);
function i(e, t = {}) {
let n = o(t).exec(e);
if (n) {
let [t, r, i, o] = n;
return {
source: void 0 !== i ? i : "",
flags: void 0 !== o ? o : "",
slash: r,
input: e
};
}
if (t.throwError) throw new TypeError(`${e} not a regex like string`);
return null;
}
function o(e = {}) {
return new RegExp(`^(${e.allowNonNativeSlash ? "[\\/#$%]" : "\\/"})(..*)\\1([${e.allowNonNativeFlags ? "a-zA-Z" : r.default.nativeFlags}]*)$`);
}
t.parseRegularExpressionString = i, t.rRegularExpressionString = o, t.default = i;
}, function(e) {
e.exports = {
name: "regexp-cjk",
version: "2.0.22",
description: "Generate JavaScript-compatible regular expressions with chinese/jp/zh/cn",
keywords: [ "big5", "char", "character", "characters", "charset", "check", "chinese", "cjk", "cn", "cn2tw", "conv", "conversion", "convert", "emit", "euc-jp", "event", "expression", "gb2312", "gbk", "generator", "hanja", "hanzi", "hook", "is", "japanese", "javascript", "jp2zhs", "jp2zht", "kanji", "match", "node-novel", "on", "parse", "re", "regex", "regexp", "regular", "regular expression", "simplified", "str-util", "test", "tool", "traditional", "transform", "tw", "tw2cn", "type", "unicode", "util", "words", "zh", "zh2jp", "zhs", "zht" ],
homepage: "https://github.com/bluelovers/regexp-cjk#readme",
bugs: {
url: "https://github.com/bluelovers/regexp-cjk/issues"
},
repository: {
type: "git",
url: "git+https://github.com/bluelovers/regexp-cjk.git"
},
license: "ISC",
author: "",
main: "index.js",
directories: {
lib: "lib",
test: "test"
},
scripts: {
"local-link": "npm link cjk-conv",
postpublish: "echo postpublish && node ./script/publish-after",
test: 'echo "Error: no test specified" && exit 1'
},
dependencies: {
"array-hyper-unique": "^1.0.7",
"cjk-conv": "^1.1.20",
"regexp-helper": "^1.0.7",
"regexp-parser-event": "^1.0.2",
"regexp-parser-literal": "^1.0.2",
"regexp-range": "^1.0.7",
"regexp-support": "^1.0.23",
regexpp2: "^1.1.2",
"uni-string": "^1.1.0"
},
devDependencies: {
"@types/node": "^11",
"cross-spawn-extra": "^1.0.5",
"git-root2": "^1.0.4",
"regexp-util": "^1.2.2",
regexp2: "^1.2.0"
}
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
});
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
let o = this, a;
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
return "string" == typeof e ? a(e) : "number" == typeof e ? s(e) : void 0;
}
function a(e) {
var t = r[e.toLowerCase()];
return void 0 !== t ? t : 1 === e.length ? e.toUpperCase().charCodeAt(0) : void 0;
}
function s(e) {
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
"./novel-plus-sc": 3,
"./novel-plus-sc/": 3,
"./novel-plus-sc/index": 3,
"./novel-plus-sc/index.js": 3,
"./novel-plus-sc/index.user": 7,
"./novel-plus-sc/index.user.js": 7,
"./novel-plus-sc/lib/metadata": 18,
"./novel-plus-sc/lib/metadata.js": 18,
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
"./novel-plus-sc/site/syosetu": 19,
"./novel-plus-sc/site/syosetu.js": 19
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
}, i.resolve = o, e.exports = i, i.id = 150;
} ]);