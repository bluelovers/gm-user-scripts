// ==UserScript==
// @name		syosetu-list-number
// @name:en		syosetu-list-number
// @name:ja		syosetu-list-number
// @name:zh		syosetu-list-number
// @namespace	bluelovers
// @author		bluelovers
//
// @description		syosetu-list-number 讓小說家的章節顯示序列 (支援手機版)
// @description:en	syosetu-list-number 讓小說家的章節顯示序列 (支援手機版)
// @description:ja	syosetu-list-number 小説家になろう 章の表示順序
// @description:zh	syosetu-list-number 讓小說家的章節顯示序列 (支援手機版)
//
// @version		4.5.1
//
// @grant		GM.setClipboard
// @grant		GM_setClipboard
// g_r_a_n_tnone
//
// @icon		https://wiki.greasespot.net/favicon.ico
//
// @noframes
// @encoding	utf-8
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/syosetu-list-number.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/syosetu-list-number.user.js
//
// @include		http*://kakuyomu.jp/works*
// @include		http*://kakuyomu.jp/works*/*/episodes/*
// @include		http*://kakuyomu.jp/*
// @include		http*://*.mitemin.net/*
// @include		http*://syosetu.com/*
// @include		http*://ncode.syosetu.com/*
//
// @match		*://nl.syosetu.com/*
// @match		*://ncode.syosetu.com/*
// @match		*://novel18.syosetu.com/*
// @match		*://nkx.syosetu.com/*
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
}, n.p = "", n(n.s = 4);
}([ function(e, t, n) {
"use strict";
(function(e) {
Object.defineProperty(t, "__esModule", {
value: !0
}), t.jQuery = t.$ = void 0, console["groupCollapsed" in console ? "groupCollapsed" : "group"]("before");
let r = {};
const o = !1;
try {
r.$ = unsafeWindow.$, r.jQuery = unsafeWindow.jQuery;
} catch (e) {
console.error(e);
}
console.groupEnd("before");
const i = n(20), s = i.noConflict(!0);
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
e.exports.id = "syosetu-list-number", e.exports.version = "", e.exports.name = "syosetu-list-number", 
e.exports.name_en = "syosetu-list-number", e.exports.name_ja = "syosetu-list-number", 
e.exports.desc = "syosetu-list-number 讓小說家的章節顯示序列 (支援手機版)", e.exports.desc_en = "syosetu-list-number 讓小說家的章節顯示序列 (支援手機版)", 
e.exports.desc_ja = "syosetu-list-number 小説家になろう 章の表示順序", e.exports.namespace = "", 
e.exports.author = "", e.exports.icon = "", e.exports.list = [ "site/kakuyomu.jp", "site/mitemin", "site/syosetu" ], 
e.exports.list_disable = [], e.exports._lib = (() => {
n(5), n(7), n(8);
}), e.exports.metadata = {}, e.exports.metadata.include = [ "http*://kakuyomu.jp/works*", "http*://kakuyomu.jp/works*/*/episodes/*", "http*://kakuyomu.jp/*", "http*://*.mitemin.net/*", "http*://syosetu.com/*", "http*://ncode.syosetu.com/*" ], 
e.exports.metadata.match = [ "*://nl.syosetu.com/*", "*://ncode.syosetu.com/*", "*://novel18.syosetu.com/*", "*://nkx.syosetu.com/*" ], 
e.exports.metadata.exclude = [], e.exports.metadata.grant = [ "GM.setClipboard", "GM_setClipboard" ], 
e.exports.list_script = [], e.exports.current = [], e.exports.default = e.exports;
}, function(e, t, n) {
"use strict";
(function(t) {
var r = n(36), o = n(37), i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i, a, u = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");
function l(e) {
return (e || "").toString().replace(u, "");
}
var c = [ [ "#", "hash" ], [ "?", "query" ], function e(t) {
return t.replace("\\", "/");
}, [ "/", "pathname" ], [ "@", "auth", 1 ], [ NaN, "host", void 0, 1, 1 ], [ /:(\d+)$/, "port", void 0, 1 ], [ NaN, "hostname", void 0, 1, 1 ] ], f = {
hash: 1,
query: 1
};
function p(e) {
var n, r = (n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}).location || {}, o = {}, s = typeof (e = e || r), a;
if ("blob:" === e.protocol) o = new g(unescape(e.pathname), {}); else if ("string" === s) for (a in o = new g(e, {}), 
f) delete o[a]; else if ("object" === s) {
for (a in e) a in f || (o[a] = e[a]);
void 0 === o.slashes && (o.slashes = i.test(e.href));
}
return o;
}
function d(e) {
e = l(e);
var t = s.exec(e);
return {
protocol: t[1] ? t[1].toLowerCase() : "",
slashes: !!t[2],
rest: t[3]
};
}
function h(e, t) {
if ("" === e) return t;
for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], i = !1, s = 0; r--; ) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), 
s++) : s && (0 === r && (i = !0), n.splice(r, 1), s--);
return i && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/");
}
function g(e, t, n) {
if (e = l(e), !(this instanceof g)) return new g(e, t, n);
var i, s, a, u, f, m, y = c.slice(), v = typeof t, b = this, x = 0;
for ("object" !== v && "string" !== v && (n = t, t = null), n && "function" != typeof n && (n = o.parse), 
t = p(t), i = !(s = d(e || "")).protocol && !s.slashes, b.slashes = s.slashes || i && t.slashes, 
b.protocol = s.protocol || t.protocol || "", e = s.rest, s.slashes || (y[3] = [ /(.*)/, "pathname" ]); x < y.length; x++) "function" != typeof (u = y[x]) ? (a = u[0], 
m = u[1], a != a ? b[m] = e : "string" == typeof a ? ~(f = e.indexOf(a)) && ("number" == typeof u[2] ? (b[m] = e.slice(0, f), 
e = e.slice(f + u[2])) : (b[m] = e.slice(f), e = e.slice(0, f))) : (f = a.exec(e)) && (b[m] = f[1], 
e = e.slice(0, f.index)), b[m] = b[m] || i && u[3] && t[m] || "", u[4] && (b[m] = b[m].toLowerCase())) : e = u(e);
n && (b.query = n(b.query)), i && t.slashes && "/" !== b.pathname.charAt(0) && ("" !== b.pathname || "" !== t.pathname) && (b.pathname = h(b.pathname, t.pathname)), 
r(b.port, b.protocol) || (b.host = b.hostname, b.port = ""), b.username = b.password = "", 
b.auth && (u = b.auth.split(":"), b.username = u[0] || "", b.password = u[1] || ""), 
b.origin = b.protocol && b.host && "file:" !== b.protocol ? b.protocol + "//" + b.host : "null", 
b.href = b.toString();
}
function m(e, t, n) {
var i = this;
switch (e) {
case "query":
"string" == typeof t && t.length && (t = (n || o.parse)(t)), i[e] = t;
break;

case "port":
i[e] = t, r(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, 
i[e] = "");
break;

case "hostname":
i[e] = t, i.port && (t += ":" + i.port), i.host = t;
break;

case "host":
i[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, 
i.port = "");
break;

case "protocol":
i.protocol = t.toLowerCase(), i.slashes = !n;
break;

case "pathname":
case "hash":
if (t) {
var s = "pathname" === e ? "/" : "#";
i[e] = t.charAt(0) !== s ? s + t : t;
} else i[e] = t;
break;

default:
i[e] = t;
}
for (var a = 0; a < c.length; a++) {
var u = c[a];
u[4] && (i[u[1]] = i[u[1]].toLowerCase());
}
return i.origin = i.protocol && i.host && "file:" !== i.protocol ? i.protocol + "//" + i.host : "null", 
i.href = i.toString(), i;
}
function y(e) {
e && "function" == typeof e || (e = o.stringify);
var t, n = this, r = n.protocol;
r && ":" !== r.charAt(r.length - 1) && (r += ":");
var i = r + (n.slashes ? "//" : "");
return n.username && (i += n.username, n.password && (i += ":" + n.password), i += "@"), 
i += n.host + n.pathname, (t = "object" == typeof n.query ? e(n.query) : n.query) && (i += "?" !== t.charAt(0) ? "?" + t : t), 
n.hash && (i += n.hash), i;
}
g.prototype = {
set: m,
toString: y
}, g.extractProtocol = d, g.location = p, g.trimLeft = l, g.qs = o, e.exports = g;
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
(function(r) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const o = n(9), i = n(2);
e.exports.id = i.default.id, e.exports.name = e.exports.id, o.run(e.exports.id, e.exports, r, function(e, t, r, i, s, a) {
n(38).makeJQueryPlugin(s), n(39).makeJQueryPlugin(s), o.init(e, t, r, i, s, a);
});
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r) {
let o = {
metadata: {
include: [ "http*://kakuyomu.jp/works*", "http*://kakuyomu.jp/works*/*/episodes/*", "http*://kakuyomu.jp/*" ],
match: [],
nomatch: [],
exclude: [],
grant: [ "GM_setClipboard" ]
},
test(r = t._url_obj) {
let o;
return !!(o = n(6).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const o = n(34).GMApi, i = n(13), s = n(14);
s([ ".widget-toc-main a" ].join(",")).prop("target", "_blank"), r(".widget-toc-main .widget-toc-episode a").each(function() {
let e = r(this), t = r(".widget-toc-episode-titleLabel", this);
t.length && (e.on("click", function(e) {
i(e), o.GM_setClipboard(t.text().replace(/$\s+|\s+$/g, ""));
}), t.on("click", function() {
window.open(e.prop("href"), e.prop("target"));
}));
});
const {debounce: a} = n(15), {throttle: u} = n(15);
r(window).on("load.ready", u(1e3, function() {
let e = r("#contentAside");
if (e.length) {
let t = window.location.href, n = e.find(".widget-toc-episode-episodeTitle").filter(function(e, n) {
let o;
return r(n).prop("href") == t;
});
n.length && e.scrollTo(n.parents(".widget-toc-episode").eq(0), -150);
}
})).triggerHandler("load.ready");
{
let e = r("#contentMain-inner");
if (e.length) {
{
let e = r("#contentMain-nextEpisode");
e.length && ((e = e.clone()).insertAfter(r("#contentMain-header-cover, #contentMain-previousEpisode").eq(0)), 
e.find(".contentMain-nextEpisode-inner span").css({
display: "inline-block",
"font-size": "0.9em",
margin: "auto"
}), e.find("#contentMain-readNextEpisode").css({
padding: "13px 10px"
}), e.find(".contentMain-pagerArrow").remove());
}
let t = r(".widget-episodeBody", e);
if (t.length) {
t.find("p").each(function() {
let e = r(this), t = r("<div/>").html(e.html()), n = this.attributes.length;
for (;n--; ) t.attr(this.attributes[n].name, this.attributes[n].value);
t.addClass("_fake_p"), t.insertAfter(e), e.remove();
});
const e = n(16);
let o = r('<p class="ui-tooltip ui-tooltip-bottom" data-ui-tooltip-label="COPY"></p>').prependTo("#worksEpisodesEpisodeHeader-tools");
r('<a href="javascript:void(0)">COPY</a>').on("click", function() {
e.copyElem(t[0]);
}).prependTo(o);
}
}
}
r(window).scrollTo(r("#container, #contentMain .chapterTitle").eq(-1), 0 - r("#globalHeader-pc, #worksEpisodesEpisodeHeader").height());
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let o = r(n);
return o = o.add([ "#globalHeader-pc, #workFollow, .widget-workReviewSummary, #workInformationAside", "#author-information-followButton", "script, noscript, body :hidden, body :not(:visible)", "#worksEpisodesEpisodeHeader, #episodeFooter" ].join());
}
};
e.exports = o;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.matchChrome = t.auto = t.option = t.match = void 0;
const r = n(28), o = r.Minimatch;
function i(e, t, n = {}) {
n = s(n);
let o = !1;
for (let i of t) if (i = i.replace(/\*/g, "**"), o = r(e, i, n)) break;
return o;
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
t.match = i, t.option = s, t.auto = a, t.matchChrome = u;
}, function(e, t, n) {
"use strict";
(function(t, r) {
let o = {
metadata: {
include: [ "http*://*.mitemin.net/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let o;
return !!(o = n(6).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
let o = r(".imageview, .image_infomation, .profile_image").find("img");
if (o.length) {
const e = n(17)._uf_fixsize2, t = n(18).parse;
o.imagesLoaded().done(function(n) {
r(n.elements).each((n, o) => {
let i = r(o), s = i.prop("src");
try {
let n = t(s);
n.fullsize && (e(i), i.prop("src", n.fullsize));
} catch (e) {}
});
});
}
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let o;
return r(n);
}
};
e.exports = o;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r, o) {
let i = {
metadata: {
include: [ "http*://syosetu.com/*", "http*://ncode.syosetu.com/*" ],
match: [ "*://nl.syosetu.com/*", "*://ncode.syosetu.com/*", "*://novel18.syosetu.com/*", "*://nkx.syosetu.com/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let o;
return !!(o = n(6).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(14);
i([ "#novel_contents .novel_sublist2 .subtitle a" ].join(",")).prop("target", "_blank");
const a = n(13);
s(), r.GM_addStyle([ "#novel_header { opacity: 0.5; }", "#novel_header:hover { opacity: 1; }", "#novel_contents .novel_subtitle { text-align: center; }", "#novel_contents .novel_bn:last-of-type { position: sticky; bottom: 1em; opacity: 0.5; text-align: right; }", "#novel_contents .novel_bn:last-of-type:hover { opacity: 1; }", ".contents1 { width: auto; max-width: 700px; }", "#novel_color { width: auto; max-width: 730px; }", ".index_box { width: auto; max-width: 720px; }", "#pageTop { opacity: 0.5; }", "#pageTop:hover { opacity: 1; }", "@media only screen and (min-width: 1100px) {\n\t\t\t\t\n\t\t\t}" ]);
let u = o("#novel_contents");
if (!u.find(".novel_sublist, .index_box").length) {
r.GM_addStyle([ "._fake_p { display: block; }", '._fake_p:after { content: " "; }', "#novel_color { width: auto; max-width: 730px; font-size: 14px; line-height: 1.6em !important; }", "#novel_honbun, #novel_p, #novel_a { width: auto; max-width: 600px; }", "#novel_color, #novel_honbun, #novel_p, #novel_a { font-size: 14px; line-height: 1.6em; }", "ruby rt { opacity: 0.5; }", "#pageTop { bottom: 50px; }", "#novel_contents img { max-width: 100%; }" ]), 
o("#novel_p").append("<p class='p-hr'><br/>=====================================<br/><br/></p>"), 
o("#novel_a").prepend("<p class='p-hr'><br/><br/>=====================================<br/><br/></p>"), 
o(".novelview_navi, #novel_header").on("click", function() {
o(".p-hr").css("color", function() {
return o("body").css("background-color");
});
}).triggerHandler("click"), o("#novel_honbun, #novel_p, #novel_a").addClass("_fake_pre").find("p").each(function() {
let e = o(this), t = o("<div/>").html(e.html()).attr("class", e.attr("class")).attr("id", e.attr("id")).attr("style", e.attr("style")).addClass("_fake_p");
e.after(t).remove();
});
let e = o(".novelrankingtag, .novel_view").find("img");
if (e.length) {
const t = n(17)._uf_fixsize2, r = n(18).parse;
e.imagesLoaded().done(function(e) {
o(e.elements).each((e, n) => {
let i = o(n), s = i.prop("src");
try {
let e = r(s);
e.fullsize && (t(i), i.prop("src", e.fullsize));
} catch (e) {}
});
});
}
let t = o("#novel_contents div.novelrankingtag").eq(0);
if (t.length) {
t.prepend('<a id="novelrankingtag" name="novelrankingtag" style="display: block;height: 0px;">&nbsp;</a>');
let e = o("#pageBottom");
e.attr("href", "javascript:void(0)").on("click", function(e) {
a._uf_done2(e);
let t = function() {
o(window).scrollTo(o(".novelrankingtag, #novelrankingtag"), -60);
};
t(), setTimeout(t, 500), setTimeout(t, 750);
}), console.log(t, e);
}
const i = n(16);
let s = o("<div/>"), u = o(".novel_subtitle"), l = o("#novel_p, #novel_honbun, #novel_a");
return void (u.length && (r.GM_addStyle([ "#novel_contents > div, .footer_bookmark { max-width: 100%; }" ]), 
s.insertAfter(".novel_subtitle"), l.appendTo(s), l.length && o('<a href="javascript:void(0)">COPY</a>').on("click", function() {
i.copyElem(s[0]);
}).appendTo(".novel_bn")));
}
const l = "enable-syosetu-list-number";
r.GM_addStyle([ "#novel_contents.enable-syosetu-list-number .novel_sublist2 .subtitle:after, #novel_contents.enable-syosetu-list-number .novel_sublist a[data-id]:after, #novel_contents.enable-syosetu-list-number .novel_sublist2 .subtitle:before, #novel_contents.enable-syosetu-list-number .novel_sublist a[data-id-sub]:before { font-size: 0.7em; font-family: Consolas; min-width: 3em; display: inline-block; opacity: 0.6; }", "#novel_contents .novel_sublist2 .subtitle:hover:after, #novel_contents .novel_sublist li:hover a[data-id]:after, #novel_contents .novel_sublist2 .subtitle:hover:before, #novel_contents .novel_sublist li:hover a[data-id-sub]:before { opacity: 1; }", '#novel_contents.enable-syosetu-list-number .novel_sublist2 .subtitle:after, #novel_contents.enable-syosetu-list-number .novel_sublist a[data-id]:after { content: "#" attr(data-id) ""; margin-left: 0.5em; }', '#novel_contents.enable-syosetu-list-number .novel_sublist2 .subtitle:before, #novel_contents.enable-syosetu-list-number .novel_sublist a[data-id-sub]:before { content: "#" attr(data-id-sub) ""; }', '._syosetu-chapter-toc [data-id]:after { content: "#" attr(data-id) ""; margin-left: 0.5em; }', '._syosetu-chapter-toc [data-chapter]:after { content: "#" attr(data-chapter) ""; margin-left: 0.5em; }' ]), 
o(window).scrollTo("#novel_no, .novel_subtitle", 0 - o("#novel_header").height()), 
o("#novel_contents .novel_sublist2 .subtitle").attr("data-id", function(e, t) {
return o(this).html(o(this).html().replace(/[\t\r\n]/g, "").trim()), e + 1;
}), o("#novel_contents .novel_sublist > ul > li:not(.chapter)").each(function(e) {
o(this).html(o(this).html().replace(/[\t\r\n]/g, "").trim()), o("> a:eq(0)", this).attr("data-id", function() {
return e + 1;
});
});
let c = o('<div class="btn-collapse"></div>'), f = 0, p = 1;
{
r.GM_addStyle([ "._syosetu-chapter-toc { \n\t\t\t\tdisplay: none; \n\t\t\t\tposition: sticky; \n\t\t\t\tmax-width: 300px; \n\t\t\t\ttop: 55px; \n\t\t\t\tfloat: left; \n\t\t\t\tmargin-left: -300px;\n\t\t\t\tfont-size: 0.7em;\n\t\t\t\topacity: 0.5;\n\t\t\t\t}", "._syosetu-chapter-toc:hover { opacity: 1; }", "@media only screen and (min-width: 1000px) {\n\t\t\t\t\t._syosetu-chapter-toc { display: block; }\n\t\t\t\t\t\n\t\t\t\t\thtml, body, :root\n\t\t\t\t\t{\n\t\t\t\t\t\tscroll-behavior: smooth;\n\t\t\t\t\t}\n\t\t\t\t}" ]);
let e = o("> .chapter_title, > .novel_sublist2", "#novel_contents .index_box"), t = o('<div class="_syosetu-chapter-toc"/>'), n = o('<ol style="list-style-type: unset;"/>').appendTo(t);
if (e.length) {
e.each(function() {
let e = o(this);
if (e.html(e.html().replace(/[\t\r\n]/g, "").trim()), e.is(".chapter_title")) {
f++, p = 1, e.attr("data-type", "chapter_title");
let t = o(`<li><a href="javascript:void(0)">${e.text()}</a></li>`);
t.attr("data-chapter", f), n.append(t);
} else e.is(".novel_sublist2") && (e.find(".subtitle").attr("data-id-sub", p), p++);
e.attr("data-chapter", f);
}).filter(".chapter_title[data-chapter]").append(o('<span style="margin-left: 2em;opacity: 0.5;font-size: 0.5em;">(+/-)</span>').on("click", function() {
let e = o(this).parents(".chapter_title").attr("data-chapter");
e && o(`.novel_sublist2[data-chapter="${e}"]`).toggle();
}));
let r = e.filter('[data-type="chapter_title"]');
r.length ? (t.prependTo("#novel_color"), n.on("click", "li", function() {
let e = r.filter(`[data-chapter="${o(this).attr("data-chapter")}"]`);
e.length && o.scrollTo(e, -30);
})) : e.length && (e.each(function(e, t) {
if (e % 20) return;
let r = o(this).find(".subtitle"), i = o(`<li><a href="javascript:void(0)">${r.text()}</a></li>`);
i.attr("data-id", r.attr("data-id")).attr("data-id-sub", r.attr("data-id-sub")), 
n.append(i);
}), t.prependTo("#novel_color"), n.on("click", "li", function() {
let t = e.find(`.subtitle[data-id="${o(this).attr("data-id")}"]`);
t.length && o.scrollTo(t, -40);
}));
} else (e = o("#novel_contents .novel_sublist > ul > li")).each(function() {
let e = o(this);
e.html(e.html().replace(/[\t\r\n]/g, "").trim()), e.is(".chapter") ? (f++, p = 1, 
e.attr("data-type", "chapter_title")) : e.find("> a:eq(0)").attr("data-id-sub", function() {
return p++;
});
});
}
u.addClass(l);
let d = o(`<div class="btn-${l}"></div>`);
r.GM_addStyle([ `.btn-${l}:before { content: " " attr(data-text) " "; display: block; height: 1em; text-align: center; margin: auto; font-size: 0.9rem; line-height: 1; background-color: #1f2448; color: #fff; padding: 5px; border-radius: 1em; width: 90%; font-family: Consolas; }`, `.btn-${l} { text-align: center; margin: auto; opacity: 0.7; }`, `.btn-${l}:hover { opacity: 1; }` ]), 
u.find(".index_box").length ? d.insertBefore(u.find(".index_box").eq(0)) : u.find(".novel_sublist").length && d.insertBefore(u.find(".novel_sublist").eq(0)), 
(d = o(`.btn-${l}`).eq(0)).length && d.on("mousedown.click touchend.click", function() {
u.toggleClass(l);
}).on("mousedown.class touchend.class", function() {
let e, t = u.hasClass(l) ? "ON" : "OFF";
d.attr("data-text", t);
}).triggerHandler("mousedown.class");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = o(n);
return r = r.add([ "#pageBottom, #novel_header, #footer" ].join());
}
};
function s() {
let e = 365, t = new Date();
t.setTime(t.getTime() + 31536e6);
let n = t.toGMTString();
n = ";expires=" + n, document.cookie = "over18=yes; Domain=.syosetu.com; Path=/" + n;
let r = o("#modal #yes18[data-url]");
if (r.length) return window.location.href = r.attr("data-url"), !0;
}
e.exports = i;
}).call(this, n(1), n(10), n(0).default);
}, function(e, t, n) {
"use strict";
(function(e, r, o) {
Object.defineProperty(t, "__esModule", {
value: !0
}), t.main_list = t.main = t.get_list_script = t.requireScript = t.init = t.url = t.run = t.greasemonkey = void 0;
const i = n(21), s = n(10);
t.greasemonkey = s.default;
const a = n(22);
function u(t, n, o, i) {
let s = async () => {
try {
i ? await i(t, n, e, window, o, window.location.href) : await c(t, n, e, window, o, window.location.href);
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
s();
});
}
function l(t, n = e, r, o) {
if (o || !n._url || n._url != t) {
const e = n._url;
return n._url_old = e, n._url = t.toString(), n._url_obj = i.parse_url2(n._url), 
"function" == typeof r && r(n._url, n, e), n;
}
}
function c(e, t, n, r, o, i) {
f(i = i || r.location.href, t), f(i, n), n.userScript = t;
}
function f(e, t) {
let n;
return l(e, t, function(e, t, n) {
t._url_obj.source = t._url_obj._source = e, t._url_obj_ = Object.assign({}, t._url_obj);
}, !0);
}
function p(e, t) {
return n(27)(`./${e}/${t}`);
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
let a = o;
if (r.name && r.name != a && (a = `${r.name} - ${a}`), a = `[${a}]`, r.name = r.name || o, 
r.name_id = a || r.name_id || r.name, i && !r.script) continue;
if (r.disable && !0 !== r.disable) {
console.info(n.id, a, `disable = ${r.disable}, skip this`);
continue;
}
if (r.disable) {
console.warn(n.id, a, "disable, skip this");
continue;
}
let u = !0, l, c;
console.time(o), console.group(o), l = await r.test(e._url_obj), s.default.info(n.id, a, "test", l), 
i && 2 !== l ? s.default.info(n.id, a, "break:test", l) : (l && (1 == (c = await r.main(e._url_obj)) || void 0 === c ? (c = !0, 
s.default.info(n.id, a, "matched", c, u)) : s.default.debug(n.id, a, "main", c), 
c && (u = !1, l && !0 !== l && (u = !0), s.default.debug(n.id, a, "chk", c, u, l))), 
u && !l || (s.default.debug(n.id, a, "current:push", c, u, l), n.current.push({
name: o,
name_id: a,
lib: r
}))), console.groupEnd(o), console.timeEnd(o), i || u || (s.default.debug(n.id, a, "break", c, u, l), 
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
let a = !0, u, l;
if (u = await n.test(e._url_obj), s.default.info(t.id, i, "test", u), u) return l = await n.main(e._url_obj), 
s.default.debug(t.id, i, "main", l), n;
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
t.run = u, t.url = l, t.init = c, t.requireScript = p, t.get_list_script = d, t.main = h, 
t.main_list = g;
}).call(this, n(1), n(0).default, n(0).default);
}, function(e, t, n) {
"use strict";
(function(e, r) {
var o = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
void 0 === r && (r = n), Object.defineProperty(e, r, {
enumerable: !0,
get: function() {
return t[n];
}
});
} : function(e, t, n, r) {
void 0 === r && (r = n), e[r] = t[n];
}), i = this && this.__exportStar || function(e, t) {
for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
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
t.GM_addStyle = a, t.addStylesheet = u, t.debug = l, t.error = c, t.info = f, t.log = p, 
t.openInTabBackground = d, t.default = t, i(n(11), t);
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
}), t.GM_addStyle = void 0, t.GM_addStyle = r, t.default = t;
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
function r(e, t) {
e.stopPropagation(), t || e.preventDefault();
}
function o(e, t) {
e.stopImmediatePropagation(), t || e.preventDefault();
}
Object.assign(r, {
_uf_done: r,
_uf_done2: o,
default: r
}), e.exports = r;
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
}, function(e, t, n) {
"use strict";
function r(e, t, n, r) {
var o, i = !1, s = 0;
function a() {
o && clearTimeout(o);
}
function u() {
a(), i = !0;
}
function l() {
var u = this, l = Date.now() - s, c = arguments;
function f() {
s = Date.now(), n.apply(u, c);
}
function p() {
o = void 0;
}
i || (r && !o && f(), a(), void 0 === r && l > e ? f() : !0 !== t && (o = setTimeout(r ? p : f, void 0 === r ? e - l : e)));
}
return "boolean" != typeof t && (r = n, n = t, t = void 0), l.cancel = u, l;
}
function o(e, t, n) {
return void 0 === n ? r(e, t, !1) : r(e, n, !1 !== t);
}
n.r(t), n.d(t, "throttle", function() {
return r;
}), n.d(t, "debounce", function() {
return o;
});
}, function(e, t, n) {
"use strict";
function r(e) {
return [ "event.preventDefault()", `var copyArea = document.getElementById('${e}')`, "try{copyArea.select();}catch(e){console.error(e)}", "try{window.getSelection().removeAllRanges();}catch(e){}", "try{var range = document.createRange();range.selectNode(copyArea);window.getSelection().addRange(range)}catch(e){console.error(e)}", "try{document.execCommand('Copy')}catch(e){console.error(e)}", "return false" ].join(";");
}
function o(e) {
try {
window.getSelection().removeAllRanges();
} catch (e) {}
try {
e.select();
} catch (e) {
console.error(e);
}
try {
let t = document.createRange();
t.selectNode(e), window.getSelection().addRange(t);
} catch (e) {
console.error(e);
}
try {
document.execCommand("Copy");
} catch (e) {
console.error(e);
}
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.copyElem = t.copyonclick = void 0, t.copyonclick = r, t.copyElem = o, t.default = t;
}, function(e, t, n) {
"use strict";
(function(e) {
function n(t, n, o, i) {
let s = e(t), a;
return e.isPlainObject(n) && e.isNumeric(n.width) ? n = e("<div/>").width(n.width).height(void 0 !== n.height ? n.height : n.width) : e.isArray(n) && e.isNumeric(n[0]) && (n = e("<div/>").width(n[0]).height(void 0 !== n[1] ? n[1] : n[0])), 
!0 === n || n == t || n == s ? (i = null, a = !0) : a = n || window, !i || !0 === a || void 0 === i.width && void 0 === i.height || !i.width && !i.height ? i = null : ("auto" == i && (i.width = "auto", 
i.height = "auto"), i.width = i.width || 0, i.height = i.height || 0), s.each(function() {
let t = e(this), n = e(!0 === a ? this : a), s = t[0].naturalWidth, u = t[0].naturalHeight;
s && u || (s = t.width(), u = t.height());
let l = n.width(), c = n.height();
i && (l = "auto" == i.width ? n.innerWidth() : l - i.width, c = "auto" == i.height ? n.innerHeight() : c - i.height);
let f = s, p = u;
if (s > l) f = l, (p = u * (l / s)) > c && (f *= c / p, p = c); else if (o > 1) {
let e;
f *= r(s, u), p = c;
} else (o || u > c) && (p = c, (f = s * (c / u)) > l && (f = l, p = u * (l / s)));
t.height(p).width(f), t.attr({
"data-naturalHeight": u,
"data-naturalWidth": s,
"data-height": p,
"data-width": f
});
}), s;
}
function r(e, t) {
return e / t;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.calc_scale = t._uf_fixsize2 = void 0, t._uf_fixsize2 = n, t.default = n, t.calc_scale = r;
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(35);
function o(e) {
let t = new r.default(e);
if (!/\.mitemin/.test(t.host)) throw new Error(`not support host ${t.host}`);
let n = t.host.split(".")[0];
if (/^img/.test(n)) {
let e, n = t.paths[t.paths.length - 1].match(/^(?<filename>.+?)(?:\.(?<size>\d+)\.(?:jpg|png|gif|bmp))?$/), {filename: o, size: i} = n.groups, s = new r.default(t), a = s.paths.slice();
return a[a.length - 1] = o, s.pathname = a.join("/"), {
url: t.toString(),
fullsize: s.toString(),
size: i,
filename: o
};
}
if (t.pathname.match(/\bviewimage(?<size>big)?\/icode\/(?<icode>\w+)/)) {
let e = RegExp.$1, o = RegExp.$2, i = new r.default(t), s = i.paths.slice();
s = s.map(e => /^(viewimage)(?:big)?$/.test(e) ? RegExp.$1 : e), i.pathname = s.join("/");
let a = n;
return {
url: t.toString(),
fullsize: i.toString(),
size: e,
icode: o,
authorid: a
};
}
throw new Error(`unknown url ${t.toString()}`);
}
async function i(e) {
return o(e);
}
t.parse = o, t.parseAsync = i, t.default = o;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.metadata = t.grant = t.desc_ja = t.desc = void 0, t.desc = "syosetu-list-number 讓小說家的章節顯示序列 (支援手機版)", 
t.desc_ja = "syosetu-list-number 小説家になろう 章の表示順序", t.grant = [], t.metadata = "// ==UserScript==\n// @name\t\t<%= index.name %>\n// @name:en\t\t<%= index.name_en %>\n// @name:ja\t\t<%= index.name_ja %>\n// @name:zh\t\t<%= index.name %>\n// @namespace\tbluelovers\n// @author\t\tbluelovers\n//\n// @description\t\t<%= index.desc %>\n// @description:en\t<%= index.desc_en %>\n// @description:ja\t<%= index.desc_ja %>\n// @description:zh\t<%= index.desc %>\n//\n// @version\t\t<%= pkg.version %>\n//\n// @grant\t\t<%= index.grant %>\n// g_r_a_n_tnone\n//\n// @icon\t\t<%= index.icon %>\n//\n// @noframes\n// @encoding\tutf-8\n//\n// @homepageURL\thttps://github.com/bluelovers/gm-user-scripts\n// @supportURL\thttps://github.com/bluelovers/gm-user-scripts/issues\n// @downloadURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n// @updateURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n//\n// @include\t\t<%= index.include %>\n//\n// @match\t\t<%= index.match %>\n//\n// @exclude\t\t<%= index.exclude %>\n//\n// ==/UserScript==\n", 
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
var s = [], a = n.document, u = Object.getPrototypeOf, l = s.slice, c = s.concat, f = s.push, p = s.indexOf, d = {}, h = d.toString, g = d.hasOwnProperty, m = g.toString, y = m.call(Object), v = {}, b = function(e) {
return "function" == typeof e && "number" != typeof e.nodeType;
}, x = function(e) {
return null != e && e === e.window;
}, w = {
type: !0,
src: !0,
nonce: !0,
noModule: !0
};
function _(e, t, n) {
var r, o, i = (n = n || a).createElement("script");
if (i.text = e, t) for (r in w) (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
n.head.appendChild(i).parentNode.removeChild(i);
}
function j(e) {
return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e;
}
var k = "3.4.1", T = function(e, t) {
return new T.fn.init(e, t);
}, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function E(e) {
var t = !!e && "length" in e && e.length, n = j(e);
return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
}
T.fn = T.prototype = {
jquery: k,
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
sort: s.sort,
splice: s.splice
}, T.extend = T.fn.extend = function() {
var e, t, n, r, o, i, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || b(s) || (s = {}), 
a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) r = e[t], 
"__proto__" !== t && s !== r && (l && r && (T.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t], 
i = o && !Array.isArray(n) ? [] : o || T.isPlainObject(n) ? n : {}, o = !1, s[t] = T.extend(l, i, r)) : void 0 !== r && (s[t] = r));
return s;
}, T.extend({
expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
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
globalEval: function(e, t) {
_(e, {
nonce: t && t.nonce
});
},
each: function(e, t) {
var n, r = 0;
if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
return e;
},
trim: function(e) {
return null == e ? "" : (e + "").replace(C, "");
},
makeArray: function(e, t) {
var n = t || [];
return null != e && (E(Object(e)) ? T.merge(n, "string" == typeof e ? [ e ] : e) : f.call(n, e)), 
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
for (var r = [], o = 0, i = e.length, s = !n; o < i; o++) !t(e[o], o) !== s && r.push(e[o]);
return r;
},
map: function(e, t, n) {
var r, o, i = 0, s = [];
if (E(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o); else for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
return c.apply([], s);
},
guid: 1,
support: v
}), "function" == typeof Symbol && (T.fn[Symbol.iterator] = s[Symbol.iterator]), 
T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
d["[object " + t + "]"] = t.toLowerCase();
});
var A = function(e) {
var t, n, r, o, i, s, a, u, l, c, f, p, d, h, g, m, y, v, b, x = "sizzle" + 1 * new Date(), w = e.document, _ = 0, j = 0, k = ue(), T = ue(), C = ue(), E = ue(), A = function(e, t) {
return e === t && (f = !0), 0;
}, S = {}.hasOwnProperty, M = [], L = M.pop, N = M.push, O = M.push, q = M.slice, D = function(e, t) {
for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
return -1;
}, $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", G = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", P = "\\[" + R + "*(" + G + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + G + "))|)" + R + "*\\]", H = ":(" + G + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", I = new RegExp(R + "+", "g"), B = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"), W = new RegExp("^" + R + "*," + R + "*"), z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), U = new RegExp(R + "|>"), F = new RegExp(H), Q = new RegExp("^" + G + "$"), V = {
ID: new RegExp("^#(" + G + ")"),
CLASS: new RegExp("^\\.(" + G + ")"),
TAG: new RegExp("^(" + G + "|[*])"),
ATTR: new RegExp("^" + P),
PSEUDO: new RegExp("^" + H),
CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
bool: new RegExp("^(?:" + $ + ")$", "i"),
needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
}, X = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"), ne = function(e, t, n) {
var r = "0x" + t - 65536;
return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
}, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
}, ie = function() {
p();
}, se = xe(function(e) {
return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
}, {
dir: "parentNode",
next: "legend"
});
try {
O.apply(M = q.call(w.childNodes), w.childNodes), M[w.childNodes.length].nodeType;
} catch (t) {
O = {
apply: M.length ? function(e, t) {
N.apply(e, q.call(t));
} : function(e, t) {
for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
e.length = n - 1;
}
};
}
function ae(e, t, r, o) {
var i, a, l, c, f, h, y, v = t && t.ownerDocument, _ = t ? t.nodeType : 9;
if (r = r || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return r;
if (!o && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
if (11 !== _ && (f = Z.exec(e))) if (i = f[1]) {
if (9 === _) {
if (!(l = t.getElementById(i))) return r;
if (l.id === i) return r.push(l), r;
} else if (v && (l = v.getElementById(i)) && b(t, l) && l.id === i) return r.push(l), 
r;
} else {
if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(i)), 
r;
}
if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
if (y = e, v = t, 1 === _ && U.test(e)) {
for ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = x), 
a = (h = s(e)).length; a--; ) h[a] = "#" + c + " " + be(h[a]);
y = h.join(","), v = ee.test(e) && ye(t.parentNode) || t;
}
try {
return O.apply(r, v.querySelectorAll(y)), r;
} catch (t) {
E(e, !0);
} finally {
c === x && t.removeAttribute("id");
}
}
}
return u(e.replace(B, "$1"), t, r, o);
}
function ue() {
var e = [];
return function t(n, o) {
return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o;
};
}
function le(e) {
return e[x] = !0, e;
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
for (var n = e.split("|"), o = n.length; o--; ) r.attrHandle[n[o]] = t;
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
return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
};
}
function me(e) {
return le(function(t) {
return t = +t, le(function(n, r) {
for (var o, i = e([], n.length, t), s = i.length; s--; ) n[o = i[s]] && (n[o] = !(r[o] = n[o]));
});
});
}
function ye(e) {
return e && void 0 !== e.getElementsByTagName && e;
}
for (t in n = ae.support = {}, i = ae.isXML = function(e) {
var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
return !X.test(t || n && n.nodeName || "HTML");
}, p = ae.setDocument = function(e) {
var t, o, s = e ? e.ownerDocument || e : w;
return s !== d && 9 === s.nodeType && s.documentElement && (h = (d = s).documentElement, 
g = !i(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), 
n.attributes = ce(function(e) {
return e.className = "i", !e.getAttribute("className");
}), n.getElementsByTagName = ce(function(e) {
return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
}), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function(e) {
return h.appendChild(e).id = x, !d.getElementsByName || !d.getElementsByName(x).length;
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
}, y = [], m = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), 
e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + $ + ")"), 
e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), 
e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]");
}), ce(function(e) {
e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var t = d.createElement("input");
t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 
2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), 
h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), 
e.querySelectorAll("*,:x"), m.push(",.*:");
})), (n.matchesSelector = K.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", H);
}), m = m.length && new RegExp(m.join("|")), y = y.length && new RegExp(y.join("|")), 
t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
} : function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, A = t ? function(e, t) {
if (e === t) return f = !0, 0;
var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && b(w, e) ? -1 : t === d || t.ownerDocument === w && b(w, t) ? 1 : c ? D(c, e) - D(c, t) : 0 : 4 & r ? -1 : 1);
} : function(e, t) {
if (e === t) return f = !0, 0;
var n, r = 0, o = e.parentNode, i = t.parentNode, s = [ e ], a = [ t ];
if (!o || !i) return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : c ? D(c, e) - D(c, t) : 0;
if (o === i) return pe(e, t);
for (n = e; n = n.parentNode; ) s.unshift(n);
for (n = t; n = n.parentNode; ) a.unshift(n);
for (;s[r] === a[r]; ) r++;
return r ? pe(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0;
}), d;
}, ae.matches = function(e, t) {
return ae(e, null, null, t);
}, ae.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !E[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) try {
var r = v.call(e, t);
if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
} catch (e) {
E(t, !0);
}
return 0 < ae(t, d, null, [ e ]).length;
}, ae.contains = function(e, t) {
return (e.ownerDocument || e) !== d && p(e), b(e, t);
}, ae.attr = function(e, t) {
(e.ownerDocument || e) !== d && p(e);
var o = r.attrHandle[t.toLowerCase()], i = o && S.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
}, ae.escape = function(e) {
return (e + "").replace(re, oe);
}, ae.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, ae.uniqueSort = function(e) {
var t, r = [], o = 0, i = 0;
if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
for (;t = e[i++]; ) t === e[i] && (o = r.push(i));
for (;o--; ) e.splice(r[o], 1);
}
return c = null, e;
}, o = ae.getText = function(e) {
var t, n = "", r = 0, i = e.nodeType;
if (i) {
if (1 === i || 9 === i || 11 === i) {
if ("string" == typeof e.textContent) return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
} else if (3 === i || 4 === i) return e.nodeValue;
} else for (;t = e[r++]; ) n += o(t);
return n;
}, (r = ae.selectors = {
cacheLength: 50,
createPseudo: le,
match: V,
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
return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && F.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
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
var t = k[e + " "];
return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && k(e, function(e) {
return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
});
},
ATTR: function(e, t, n) {
return function(r) {
var o = ae.attr(r, e);
return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(I, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
};
},
CHILD: function(e, t, n, r, o) {
var i = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
return 1 === r && 0 === o ? function(e) {
return !!e.parentNode;
} : function(t, n, u) {
var l, c, f, p, d, h, g = i !== s ? "nextSibling" : "previousSibling", m = t.parentNode, y = a && t.nodeName.toLowerCase(), v = !u && !a, b = !1;
if (m) {
if (i) {
for (;g; ) {
for (p = t; p = p[g]; ) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
h = g = "only" === e && !h && "nextSibling";
}
return !0;
}
if (h = [ s ? m.firstChild : m.lastChild ], s && v) {
for (b = (d = (l = (c = (f = (p = m)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === _ && l[1]) && l[2], 
p = d && m.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || h.pop(); ) if (1 === p.nodeType && ++b && p === t) {
c[e] = [ _, d, b ];
break;
}
} else if (v && (b = d = (l = (c = (f = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === _ && l[1]), 
!1 === b) for (;(p = ++d && p && p[g] || (b = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && ((c = (f = p[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ _, b ]), 
p !== t)); ) ;
return (b -= o) === r || b % r == 0 && 0 <= b / r;
}
};
},
PSEUDO: function(e, t) {
var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
return o[x] ? o(t) : 1 < o.length ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
for (var r, i = o(e, t), s = i.length; s--; ) e[r = D(e, i[s])] = !(n[r] = i[s]);
}) : function(e) {
return o(e, 0, n);
}) : o;
}
},
pseudos: {
not: le(function(e) {
var t = [], n = [], r = a(e.replace(B, "$1"));
return r[x] ? le(function(e, t, n, o) {
for (var i, s = r(e, null, o, []), a = e.length; a--; ) (i = s[a]) && (e[a] = !(t[a] = i));
}) : function(e, o, i) {
return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
};
}),
has: le(function(e) {
return function(t) {
return 0 < ae(e, t).length;
};
}),
contains: le(function(e) {
return e = e.replace(te, ne), function(t) {
return -1 < (t.textContent || o(t)).indexOf(e);
};
}),
lang: le(function(e) {
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
return Y.test(e.nodeName);
},
button: function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && "button" === e.type || "button" === t;
},
text: function(e) {
var t;
return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
},
first: me(function() {
return [ 0 ];
}),
last: me(function(e, t) {
return [ t - 1 ];
}),
eq: me(function(e, t, n) {
return [ n < 0 ? n + t : n ];
}),
even: me(function(e, t) {
for (var n = 0; n < t; n += 2) e.push(n);
return e;
}),
odd: me(function(e, t) {
for (var n = 1; n < t; n += 2) e.push(n);
return e;
}),
lt: me(function(e, t, n) {
for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
return e;
}),
gt: me(function(e, t, n) {
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
function xe(e, t, n) {
var r = t.dir, o = t.next, i = o || r, s = n && "parentNode" === i, a = j++;
return t.first ? function(t, n, o) {
for (;t = t[r]; ) if (1 === t.nodeType || s) return e(t, n, o);
return !1;
} : function(t, n, u) {
var l, c, f, p = [ _, a ];
if (u) {
for (;t = t[r]; ) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
} else for (;t = t[r]; ) if (1 === t.nodeType || s) if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), 
o && o === t.nodeName.toLowerCase()) t = t[r] || t; else {
if ((l = c[i]) && l[0] === _ && l[1] === a) return p[2] = l[2];
if ((c[i] = p)[2] = e(t, n, u)) return !0;
}
return !1;
};
}
function we(e) {
return 1 < e.length ? function(t, n, r) {
for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
return !0;
} : e[0];
}
function _e(e, t, n, r, o) {
for (var i, s = [], a = 0, u = e.length, l = null != t; a < u; a++) (i = e[a]) && (n && !n(i, r, o) || (s.push(i), 
l && t.push(a)));
return s;
}
function je(e, t, n, r, o, i) {
return r && !r[x] && (r = je(r)), o && !o[x] && (o = je(o, i)), le(function(i, s, a, u) {
var l, c, f, p = [], d = [], h = s.length, g = i || function(e, t, n) {
for (var r = 0, o = t.length; r < o; r++) ae(e, t[r], n);
return n;
}(t || "*", a.nodeType ? [ a ] : a, []), m = !e || !i && t ? g : _e(g, p, e, a, u), y = n ? o || (i ? e : h || r) ? [] : s : m;
if (n && n(m, y, a, u), r) for (l = _e(y, d), r(l, [], a, u), c = l.length; c--; ) (f = l[c]) && (y[d[c]] = !(m[d[c]] = f));
if (i) {
if (o || e) {
if (o) {
for (l = [], c = y.length; c--; ) (f = y[c]) && l.push(m[c] = f);
o(null, y = [], l, u);
}
for (c = y.length; c--; ) (f = y[c]) && -1 < (l = o ? D(i, f) : p[c]) && (i[l] = !(s[l] = f));
}
} else y = _e(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, u) : O.apply(s, y);
});
}
function ke(e) {
for (var t, n, o, i = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, c = xe(function(e) {
return e === t;
}, a, !0), f = xe(function(e) {
return -1 < D(t, e);
}, a, !0), p = [ function(e, n, r) {
var o = !s && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
return t = null, o;
} ]; u < i; u++) if (n = r.relative[e[u].type]) p = [ xe(we(p), n) ]; else {
if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
for (o = ++u; o < i && !r.relative[e[o].type]; o++) ;
return je(1 < u && we(p), 1 < u && be(e.slice(0, u - 1).concat({
value: " " === e[u - 2].type ? "*" : ""
})).replace(B, "$1"), n, u < o && ke(e.slice(u, o)), o < i && ke(e = e.slice(o)), o < i && be(e));
}
p.push(n);
}
return we(p);
}
return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), s = ae.tokenize = function(e, t) {
var n, o, i, s, a, u, l, c = T[e + " "];
if (c) return t ? 0 : c.slice(0);
for (a = e, u = [], l = r.preFilter; a; ) {
for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), u.push(i = [])), 
n = !1, (o = z.exec(a)) && (n = o.shift(), i.push({
value: n,
type: o[0].replace(B, " ")
}), a = a.slice(n.length)), r.filter) !(o = V[s].exec(a)) || l[s] && !(o = l[s](o)) || (n = o.shift(), 
i.push({
value: n,
type: s,
matches: o
}), a = a.slice(n.length));
if (!n) break;
}
return t ? a.length : a ? ae.error(e) : T(e, u).slice(0);
}, a = ae.compile = function(e, t) {
var n, o, i, a, u, c, f = [], h = [], m = C[e + " "];
if (!m) {
for (t || (t = s(e)), n = t.length; n--; ) (m = ke(t[n]))[x] ? f.push(m) : h.push(m);
(m = C(e, (o = h, a = 0 < (i = f).length, u = 0 < o.length, c = function(e, t, n, s, c) {
var f, h, m, y = 0, v = "0", b = e && [], x = [], w = l, j = e || u && r.find.TAG("*", c), k = _ += null == w ? 1 : Math.random() || .1, T = j.length;
for (c && (l = t === d || t || c); v !== T && null != (f = j[v]); v++) {
if (u && f) {
for (h = 0, t || f.ownerDocument === d || (p(f), n = !g); m = o[h++]; ) if (m(f, t || d, n)) {
s.push(f);
break;
}
c && (_ = k);
}
a && ((f = !m && f) && y--, e && b.push(f));
}
if (y += v, a && v !== y) {
for (h = 0; m = i[h++]; ) m(b, x, t, n);
if (e) {
if (0 < y) for (;v--; ) b[v] || x[v] || (x[v] = L.call(s));
x = _e(x);
}
O.apply(s, x), c && !e && 0 < x.length && 1 < y + i.length && ae.uniqueSort(s);
}
return c && (_ = k, l = w), b;
}, a ? le(c) : c))).selector = e;
}
return m;
}, u = ae.select = function(e, t, n, o) {
var i, u, l, c, f, p = "function" == typeof e && e, d = !o && s(e = p.selector || e);
if (n = n || [], 1 === d.length) {
if (2 < (u = d[0] = d[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
p && (t = t.parentNode), e = e.slice(u.shift().value.length);
}
for (i = V.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]); ) if ((f = r.find[c]) && (o = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
if (u.splice(i, 1), !(e = o.length && be(u))) return O.apply(n, o), n;
break;
}
}
return (p || a(e, d))(o, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
}, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!f, 
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
}) || fe($, function(e, t, n) {
var r;
if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
}), ae;
}(n);
T.find = A, T.expr = A.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = A.uniqueSort, 
T.text = A.getText, T.isXMLDoc = A.isXML, T.contains = A.contains, T.escapeSelector = A.escape;
var S = function(e, t, n) {
for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
if (o && T(e).is(n)) break;
r.push(e);
}
return r;
}, M = function(e, t) {
for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
return n;
}, L = T.expr.match.needsContext;
function N(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
}
var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function q(e, t, n) {
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
var t, n, r = this.length, o = this;
if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
for (t = 0; t < r; t++) if (T.contains(o[t], this)) return !0;
}));
for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
return 1 < r ? T.uniqueSort(n) : n;
},
filter: function(e) {
return this.pushStack(q(this, e || [], !1));
},
not: function(e) {
return this.pushStack(q(this, e || [], !0));
},
is: function(e) {
return !!q(this, "string" == typeof e && L.test(e) ? T(e) : e || [], !1).length;
}
});
var D, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(T.fn.init = function(e, t, n) {
var r, o;
if (!e) return this;
if (n = n || D, "string" == typeof e) {
if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : $.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
if (r[1]) {
if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), 
O.test(r[1]) && T.isPlainObject(t)) for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
return this;
}
return (o = a.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
}
return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
}).prototype = T.fn, D = T(a);
var R = /^(?:parents|prev(?:Until|All))/, G = {
children: !0,
contents: !0,
next: !0,
prev: !0
};
function P(e, t) {
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
var n, r = 0, o = this.length, i = [], s = "string" != typeof e && T(e);
if (!L.test(e)) for (;r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
i.push(n);
break;
}
return this.pushStack(1 < i.length ? T.uniqueSort(i) : i);
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
return S(e, "parentNode");
},
parentsUntil: function(e, t, n) {
return S(e, "parentNode", n);
},
next: function(e) {
return P(e, "nextSibling");
},
prev: function(e) {
return P(e, "previousSibling");
},
nextAll: function(e) {
return S(e, "nextSibling");
},
prevAll: function(e) {
return S(e, "previousSibling");
},
nextUntil: function(e, t, n) {
return S(e, "nextSibling", n);
},
prevUntil: function(e, t, n) {
return S(e, "previousSibling", n);
},
siblings: function(e) {
return M((e.parentNode || {}).firstChild, e);
},
children: function(e) {
return M(e.firstChild);
},
contents: function(e) {
return void 0 !== e.contentDocument ? e.contentDocument : (N(e, "template") && (e = e.content || e), 
T.merge([], e.childNodes));
}
}, function(e, t) {
T.fn[e] = function(n, r) {
var o = T.map(this, t, n);
return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = T.filter(r, o)), 
1 < this.length && (G[e] || T.uniqueSort(o), R.test(e) && o.reverse()), this.pushStack(o);
};
});
var H = /[^\x20\t\r\n\f]+/g;
function I(e) {
return e;
}
function B(e) {
throw e;
}
function W(e, t, n, r) {
var o;
try {
e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
} catch (e) {
n.apply(void 0, [ e ]);
}
}
T.Callbacks = function(e) {
var t, n;
e = "string" == typeof e ? (t = e, n = {}, T.each(t.match(H) || [], function(e, t) {
n[t] = !0;
}), n) : T.extend({}, e);
var r, o, i, s, a = [], u = [], l = -1, c = function() {
for (s = s || e.once, i = r = !0; u.length; l = -1) for (o = u.shift(); ++l < a.length; ) !1 === a[l].apply(o[0], o[1]) && e.stopOnFalse && (l = a.length, 
o = !1);
e.memory || (o = !1), r = !1, s && (a = o ? [] : "");
}, f = {
add: function() {
return a && (o && !r && (l = a.length - 1, u.push(o)), function t(n) {
T.each(n, function(n, r) {
b(r) ? e.unique && f.has(r) || a.push(r) : r && r.length && "string" !== j(r) && t(r);
});
}(arguments), o && !r && c()), this;
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
return s = u = [], a = o = "", this;
},
disabled: function() {
return !a;
},
lock: function() {
return s = u = [], o || r || (a = o = ""), this;
},
locked: function() {
return !!s;
},
fireWith: function(e, t) {
return s || (t = [ e, (t = t || []).slice ? t.slice() : t ], u.push(t), r || c()), 
this;
},
fire: function() {
return f.fireWith(this, arguments), this;
},
fired: function() {
return !!i;
}
};
return f;
}, T.extend({
Deferred: function(e) {
var t = [ [ "notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2 ], [ "resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", o = {
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
return T.Deferred(function(n) {
T.each(t, function(t, r) {
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
function s(e, t, r, o) {
return function() {
var a = this, u = arguments, l = function() {
var n, l;
if (!(e < i)) {
if ((n = r.apply(a, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
l = n && ("object" == typeof n || "function" == typeof n) && n.then, b(l) ? o ? l.call(n, s(i, t, I, o), s(i, t, B, o)) : (i++, 
l.call(n, s(i, t, I, o), s(i, t, B, o), s(i, t, I, t.notifyWith))) : (r !== I && (a = void 0, 
u = [ n ]), (o || t.resolveWith)(a, u));
}
}, c = o ? l : function() {
try {
l();
} catch (n) {
T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), i <= e + 1 && (r !== B && (a = void 0, 
u = [ n ]), t.rejectWith(a, u));
}
};
e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), 
n.setTimeout(c));
};
}
return T.Deferred(function(n) {
t[0][3].add(s(0, n, b(o) ? o : I, n.notifyWith)), t[1][3].add(s(0, n, b(e) ? e : I)), 
t[2][3].add(s(0, n, b(r) ? r : B));
}).promise();
},
promise: function(e) {
return null != e ? T.extend(e, o) : o;
}
}, i = {};
return T.each(t, function(e, n) {
var s = n[2], a = n[5];
o[n[1]] = s.add, a && s.add(function() {
r = a;
}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), 
i[n[0]] = function() {
return i[n[0] + "With"](this === i ? void 0 : this, arguments), this;
}, i[n[0] + "With"] = s.fireWith;
}), o.promise(i), e && e.call(i, i), i;
},
when: function(e) {
var t = arguments.length, n = t, r = Array(n), o = l.call(arguments), i = T.Deferred(), s = function(e) {
return function(n) {
r[e] = this, o[e] = 1 < arguments.length ? l.call(arguments) : n, --t || i.resolveWith(r, o);
};
};
if (t <= 1 && (W(e, i.done(s(n)).resolve, i.reject, !t), "pending" === i.state() || b(o[n] && o[n].then))) return i.then();
for (;n--; ) W(o[n], s(n), i.reject);
return i.promise();
}
});
var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
T.Deferred.exceptionHook = function(e, t) {
n.console && n.console.warn && e && z.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
}, T.readyException = function(e) {
n.setTimeout(function() {
throw e;
});
};
var U = T.Deferred();
function F() {
a.removeEventListener("DOMContentLoaded", F), n.removeEventListener("load", F), 
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
}), T.ready.then = U.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", F), 
n.addEventListener("load", F));
var Q = function(e, t, n, r, o, i, s) {
var a = 0, u = e.length, l = null == n;
if ("object" === j(n)) for (a in o = !0, n) Q(e, t, a, n[a], !0, i, s); else if (void 0 !== r && (o = !0, 
b(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
return l.call(T(e), n);
})), t)) for (;a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
}, V = /^-ms-/, X = /-([a-z])/g;
function Y(e, t) {
return t.toUpperCase();
}
function J(e) {
return e.replace(V, "ms-").replace(X, Y);
}
var K = function(e) {
return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
};
function Z() {
this.expando = T.expando + Z.uid++;
}
Z.uid = 1, Z.prototype = {
cache: function(e) {
var t = e[this.expando];
return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
value: t,
configurable: !0
}))), t;
},
set: function(e, t, n) {
var r, o = this.cache(e);
if ("string" == typeof t) o[J(t)] = n; else for (r in t) o[J(r)] = t[r];
return o;
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
var ee = new Z(), te = new Z(), ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, re = /[A-Z]/g;
function oe(e, t, n) {
var r, o;
if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(re, "-$&").toLowerCase(), 
"string" == typeof (n = e.getAttribute(r))) {
try {
n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : ne.test(o) ? JSON.parse(o) : o);
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
var n, r, o, i = this[0], s = i && i.attributes;
if (void 0 === e) {
if (this.length && (o = te.get(i), 1 === i.nodeType && !ee.get(i, "hasDataAttrs"))) {
for (n = s.length; n--; ) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = J(r.slice(5)), 
oe(i, r, o[r]));
ee.set(i, "hasDataAttrs", !0);
}
return o;
}
return "object" == typeof e ? this.each(function() {
te.set(this, e);
}) : Q(this, function(t) {
var n;
if (i && void 0 === t) return void 0 !== (n = te.get(i, e)) ? n : void 0 !== (n = oe(i, e)) ? n : void 0;
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
var n = T.queue(e, t), r = n.length, o = n.shift(), i = T._queueHooks(e, t);
"inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), 
delete i.stop, o.call(e, function() {
T.dequeue(e, t);
}, i)), !r && i && i.empty.fire();
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
var n, r = 1, o = T.Deferred(), i = this, s = this.length, a = function() {
--r || o.resolveWith(i, [ i ]);
};
for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = ee.get(i[s], e + "queueHooks")) && n.empty && (r++, 
n.empty.add(a));
return a(), o.promise(t);
}
});
var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, se = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"), ae = [ "Top", "Right", "Bottom", "Left" ], ue = a.documentElement, le = function(e) {
return T.contains(e.ownerDocument, e);
}, ce = {
composed: !0
};
ue.getRootNode && (le = function(e) {
return T.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument;
});
var fe = function(e, t) {
return "none" === (e = t || e).style.display || "" === e.style.display && le(e) && "none" === T.css(e, "display");
}, pe = function(e, t, n, r) {
var o, i, s = {};
for (i in t) s[i] = e.style[i], e.style[i] = t[i];
for (i in o = n.apply(e, r || []), t) e.style[i] = s[i];
return o;
};
function de(e, t, n, r) {
var o, i, s = 20, a = r ? function() {
return r.cur();
} : function() {
return T.css(e, t, "");
}, u = a(), l = n && n[3] || (T.cssNumber[t] ? "" : "px"), c = e.nodeType && (T.cssNumber[t] || "px" !== l && +u) && se.exec(T.css(e, t));
if (c && c[3] !== l) {
for (u /= 2, l = l || c[3], c = +u || 1; s--; ) T.style(e, t, c + l), (1 - i) * (1 - (i = a() / u || .5)) <= 0 && (s = 0), 
c /= i;
c *= 2, T.style(e, t, c + l), n = n || [];
}
return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
r.start = c, r.end = o)), o;
}
var he = {};
function ge(e, t) {
for (var n, r, o, i, s, a, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, 
t ? ("none" === n && (l[c] = ee.get(r, "display") || null, l[c] || (r.style.display = "")), 
"" === r.style.display && fe(r) && (l[c] = (u = s = i = void 0, s = (o = r).ownerDocument, 
a = o.nodeName, (u = he[a]) || (i = s.body.appendChild(s.createElement(a)), u = T.css(i, "display"), 
i.parentNode.removeChild(i), "none" === u && (u = "block"), he[a] = u)))) : "none" !== n && (l[c] = "none", 
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
var me = /^(?:checkbox|radio)$/i, ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ve = /^$|^module$|\/(?:java|ecma)script/i, be = {
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
void 0 === t || t && N(e, t) ? T.merge([ e ], n) : n;
}
function we(e, t) {
for (var n = 0, r = e.length; n < r; n++) ee.set(e[n], "globalEval", !t || ee.get(t[n], "globalEval"));
}
be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, 
be.th = be.td;
var _e, je, ke = /<|&#?\w+;/;
function Te(e, t, n, r, o) {
for (var i, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((i = e[d]) || 0 === i) if ("object" === j(i)) T.merge(p, i.nodeType ? [ i ] : i); else if (ke.test(i)) {
for (s = s || f.appendChild(t.createElement("div")), a = (ye.exec(i) || [ "", "" ])[1].toLowerCase(), 
u = be[a] || be._default, s.innerHTML = u[1] + T.htmlPrefilter(i) + u[2], c = u[0]; c--; ) s = s.lastChild;
T.merge(p, s.childNodes), (s = f.firstChild).textContent = "";
} else p.push(t.createTextNode(i));
for (f.textContent = "", d = 0; i = p[d++]; ) if (r && -1 < T.inArray(i, r)) o && o.push(i); else if (l = le(i), 
s = xe(f.appendChild(i), "script"), l && we(s), n) for (c = 0; i = s[c++]; ) ve.test(i.type || "") && n.push(i);
return f;
}
_e = a.createDocumentFragment().appendChild(a.createElement("div")), (je = a.createElement("input")).setAttribute("type", "radio"), 
je.setAttribute("checked", "checked"), je.setAttribute("name", "t"), _e.appendChild(je), 
v.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked, _e.innerHTML = "<textarea>x</textarea>", 
v.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue;
var Ce = /^key/, Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ae = /^([^.]*)(?:\.(.+)|)/;
function Se() {
return !0;
}
function Me() {
return !1;
}
function Le(e, t) {
return e === function() {
try {
return a.activeElement;
} catch (e) {}
}() == ("focus" === t);
}
function Ne(e, t, n, r, o, i) {
var s, a;
if ("object" == typeof t) {
for (a in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, a, n, r, t[a], i);
return e;
}
if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, 
r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Me; else if (!o) return e;
return 1 === i && (s = o, (o = function(e) {
return T().off(e), s.apply(this, arguments);
}).guid = s.guid || (s.guid = T.guid++)), e.each(function() {
T.event.add(this, t, o, r, n);
});
}
function Oe(e, t, n) {
n ? (ee.set(e, t, !1), T.event.add(e, t, {
namespace: !1,
handler: function(e) {
var r, o, i = ee.get(this, t);
if (1 & e.isTrigger && this[t]) {
if (i.length) (T.event.special[t] || {}).delegateType && e.stopPropagation(); else if (i = l.call(arguments), 
ee.set(this, t, i), r = n(this, t), this[t](), i !== (o = ee.get(this, t)) || r ? ee.set(this, t, !1) : o = {}, 
i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value;
} else i.length && (ee.set(this, t, {
value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
}), e.stopImmediatePropagation());
}
})) : void 0 === ee.get(e, t) && T.event.add(e, t, Se);
}
T.event = {
global: {},
add: function(e, t, n, r, o) {
var i, s, a, u, l, c, f, p, d, h, g, m = ee.get(e);
if (m) for (n.handler && (n = (i = n).handler, o = i.selector), o && T.find.matchesSelector(ue, o), 
n.guid || (n.guid = T.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
}), l = (t = (t || "").match(H) || [ "" ]).length; l--; ) d = g = (a = Ae.exec(t[l]) || [])[1], 
h = (a[2] || "").split(".").sort(), d && (f = T.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, 
f = T.event.special[d] || {}, c = T.extend({
type: d,
origType: g,
data: r,
handler: n,
guid: n.guid,
selector: o,
needsContext: o && T.expr.match.needsContext.test(o),
namespace: h.join(".")
}, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)), 
f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
T.event.global[d] = !0);
},
remove: function(e, t, n, r, o) {
var i, s, a, u, l, c, f, p, d, h, g, m = ee.hasData(e) && ee.get(e);
if (m && (u = m.events)) {
for (l = (t = (t || "").match(H) || [ "" ]).length; l--; ) if (d = g = (a = Ae.exec(t[l]) || [])[1], 
h = (a[2] || "").split(".").sort(), d) {
for (f = T.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = p.length; i--; ) c = p[i], 
!o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), 
c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || T.removeEvent(e, d, m.handle), 
delete u[d]);
} else for (d in u) T.event.remove(e, d + t[l], n, r, !0);
T.isEmptyObject(u) && ee.remove(e, "handle events");
}
},
dispatch: function(e) {
var t, n, r, o, i, s, a = T.event.fix(e), u = new Array(arguments.length), l = (ee.get(this, "events") || {})[a.type] || [], c = T.event.special[a.type] || {};
for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
for (s = T.event.handlers.call(this, a, l), t = 0; (o = s[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = o.elem, 
n = 0; (i = o.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !1 !== i.namespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i, 
a.data = i.data, void 0 !== (r = ((T.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), 
a.stopPropagation()));
return c.postDispatch && c.postDispatch.call(this, a), a.result;
}
},
handlers: function(e, t) {
var n, r, o, i, s, a = [], u = t.delegateCount, l = e.target;
if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
for (i = [], s = {}, n = 0; n < u; n++) void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? -1 < T(o, this).index(l) : T.find(o, this, null, [ l ]).length), 
s[o] && i.push(r);
i.length && a.push({
elem: l,
handlers: i
});
}
return l = this, u < t.length && a.push({
elem: l,
handlers: t.slice(u)
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
return me.test(t.type) && t.click && N(t, "input") && Oe(t, "click", Se), !1;
},
trigger: function(e) {
var t = this || e;
return me.test(t.type) && t.click && N(t, "input") && Oe(t, "click"), !0;
},
_default: function(e) {
var t = e.target;
return me.test(t.type) && t.click && N(t, "input") && ee.get(t, "click") || N(t, "a");
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
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Me, 
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
this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault();
},
stopPropagation: function() {
var e = this.originalEvent;
this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation();
},
stopImmediatePropagation: function() {
var e = this.originalEvent;
this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), 
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
return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
}
}, T.event.addProp), T.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
T.event.special[e] = {
setup: function() {
return Oe(this, e, Le), !1;
},
trigger: function() {
return Oe(this, e), !0;
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
var n, r = e.relatedTarget, o = e.handleObj;
return r && (r === this || T.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
e.type = t), n;
}
};
}), T.fn.extend({
on: function(e, t, n, r) {
return Ne(this, e, t, n, r);
},
one: function(e, t, n, r) {
return Ne(this, e, t, n, r, 1);
},
off: function(e, t, n) {
var r, o;
if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
this;
if ("object" == typeof e) {
for (o in e) this.off(o, t, e[o]);
return this;
}
return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Me), 
this.each(function() {
T.event.remove(this, e, n, t);
});
}
});
var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, De = /<script|<style|<link/i, $e = /checked\s*(?:[^=]|=\s*.checked.)/i, Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function Ge(e, t) {
return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
}
function Pe(e) {
return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
}
function He(e) {
return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
e;
}
function Ie(e, t) {
var n, r, o, i, s, a, u, l;
if (1 === t.nodeType) {
if (ee.hasData(e) && (i = ee.access(e), s = ee.set(t, i), l = i.events)) for (o in delete s.handle, 
s.events = {}, l) for (n = 0, r = l[o].length; n < r; n++) T.event.add(t, o, l[o][n]);
te.hasData(e) && (a = te.access(e), u = T.extend({}, a), te.set(t, u));
}
}
function Be(e, t, n, r) {
t = c.apply([], t);
var o, i, s, a, u, l, f = 0, p = e.length, d = p - 1, h = t[0], g = b(h);
if (g || 1 < p && "string" == typeof h && !v.checkClone && $e.test(h)) return e.each(function(o) {
var i = e.eq(o);
g && (t[0] = h.call(this, o, i.html())), Be(i, t, n, r);
});
if (p && (i = (o = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), 
i || r)) {
for (a = (s = T.map(xe(o, "script"), Pe)).length; f < p; f++) u = o, f !== d && (u = T.clone(u, !0, !0), 
a && T.merge(s, xe(u, "script"))), n.call(e[f], u, f);
if (a) for (l = s[s.length - 1].ownerDocument, T.map(s, He), f = 0; f < a; f++) u = s[f], 
ve.test(u.type || "") && !ee.access(u, "globalEval") && T.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
nonce: u.nonce || u.getAttribute("nonce")
}) : _(u.textContent.replace(Re, ""), u, l));
}
return e;
}
function We(e, t, n) {
for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || T.cleanData(xe(r)), 
r.parentNode && (n && le(r) && we(xe(r, "script")), r.parentNode.removeChild(r));
return e;
}
T.extend({
htmlPrefilter: function(e) {
return e.replace(qe, "<$1></$2>");
},
clone: function(e, t, n) {
var r, o, i, s, a, u, l, c = e.cloneNode(!0), f = le(e);
if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (s = xe(c), 
r = 0, o = (i = xe(e)).length; r < o; r++) a = i[r], "input" === (l = (u = s[r]).nodeName.toLowerCase()) && me.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
if (t) if (n) for (i = i || xe(e), s = s || xe(c), r = 0, o = i.length; r < o; r++) Ie(i[r], s[r]); else Ie(e, c);
return 0 < (s = xe(c, "script")).length && we(s, !f && xe(e, "script")), c;
},
cleanData: function(e) {
for (var t, n, r, o = T.event.special, i = 0; void 0 !== (n = e[i]); i++) if (K(n)) {
if (t = n[ee.expando]) {
if (t.events) for (r in t.events) o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
n[ee.expando] = void 0;
}
n[te.expando] && (n[te.expando] = void 0);
}
}
}), T.fn.extend({
detach: function(e) {
return We(this, e, !0);
},
remove: function(e) {
return We(this, e);
},
text: function(e) {
return Q(this, function(e) {
return void 0 === e ? T.text(this) : this.empty().each(function() {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
});
}, null, e, arguments.length);
},
append: function() {
return Be(this, arguments, function(e) {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ge(this, e).appendChild(e);
});
},
prepend: function() {
return Be(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = Ge(this, e);
t.insertBefore(e, t.firstChild);
}
});
},
before: function() {
return Be(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
},
after: function() {
return Be(this, arguments, function(e) {
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
return Q(this, function(e) {
var t = this[0] || {}, n = 0, r = this.length;
if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
if ("string" == typeof e && !De.test(e) && !be[(ye.exec(e) || [ "", "" ])[1].toLowerCase()]) {
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
return Be(this, arguments, function(t) {
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
for (var n, r = [], o = T(e), i = o.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), 
T(o[s])[t](n), f.apply(r, n.get());
return this.pushStack(r);
};
});
var ze = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"), Ue = function(e) {
var t = e.ownerDocument.defaultView;
return t && t.opener || (t = n), t.getComputedStyle(e);
}, Fe = new RegExp(ae.join("|"), "i");
function Qe(e, t, n) {
var r, o, i, s, a = e.style;
return (n = n || Ue(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || le(e) || (s = T.style(e, t)), 
!v.pixelBoxStyles() && ze.test(s) && Fe.test(t) && (r = a.width, o = a.minWidth, 
i = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, 
a.minWidth = o, a.maxWidth = i)), void 0 !== s ? s + "" : s;
}
function Ve(e, t) {
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
ue.appendChild(l).appendChild(c);
var e = n.getComputedStyle(c);
r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), 
o = 36 === t(e.width), c.style.position = "absolute", i = 12 === t(c.offsetWidth / 3), 
ue.removeChild(l), c = null;
}
}
function t(e) {
return Math.round(parseFloat(e));
}
var r, o, i, s, u, l = a.createElement("div"), c = a.createElement("div");
c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
v.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(v, {
boxSizingReliable: function() {
return e(), o;
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
return e(), i;
}
}));
}();
var Xe = [ "Webkit", "Moz", "ms" ], Ye = a.createElement("div").style, Je = {};
function Ke(e) {
var t;
return T.cssProps[e] || Je[e] || (e in Ye ? e : Je[e] = function(e) {
for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; ) if ((e = Xe[n] + t) in Ye) return e;
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
function ot(e, t, n, r, o, i) {
var s = "width" === t ? 1 : 0, a = 0, u = 0;
if (n === (r ? "border" : "content")) return 0;
for (;s < 4; s += 2) "margin" === n && (u += T.css(e, n + ae[s], !0, o)), r ? ("content" === n && (u -= T.css(e, "padding" + ae[s], !0, o)), 
"margin" !== n && (u -= T.css(e, "border" + ae[s] + "Width", !0, o))) : (u += T.css(e, "padding" + ae[s], !0, o), 
"padding" !== n ? u += T.css(e, "border" + ae[s] + "Width", !0, o) : a += T.css(e, "border" + ae[s] + "Width", !0, o));
return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - a - .5)) || 0), 
u;
}
function it(e, t, n) {
var r = Ue(e), o = (!v.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r), i = o, s = Qe(e, t, r), a = "offset" + t[0].toUpperCase() + t.slice(1);
if (ze.test(s)) {
if (!n) return s;
s = "auto";
}
return (!v.boxSizingReliable() && o || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === T.css(e, "boxSizing", !1, r), 
(i = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ot(e, t, n || (o ? "border" : "content"), i, r, s) + "px";
}
function st(e, t, n, r, o) {
return new st.prototype.init(e, t, n, r, o);
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
var o, i, s, a = J(t), u = et.test(t), l = e.style;
if (u || (t = Ke(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : l[t];
"string" == (i = typeof n) && (o = se.exec(n)) && o[1] && (n = de(e, t, o), i = "number"), 
null != n && n == n && ("number" !== i || u || (n += o && o[3] || (T.cssNumber[a] ? "" : "px")), 
v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
}
},
css: function(e, t, n, r) {
var o, i, s, a = J(t);
return et.test(t) || (t = Ke(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), 
void 0 === o && (o = Qe(e, t, r)), "normal" === o && t in nt && (o = nt[t]), "" === n || n ? (i = parseFloat(o), 
!0 === n || isFinite(i) ? i || 0 : o) : o;
}
}), T.each([ "height", "width" ], function(e, t) {
T.cssHooks[t] = {
get: function(e, n, r) {
if (n) return !Ze.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : pe(e, tt, function() {
return it(e, t, r);
});
},
set: function(e, n, r) {
var o, i = Ue(e), s = !v.scrollboxSize() && "absolute" === i.position, a = (s || r) && "border-box" === T.css(e, "boxSizing", !1, i), u = r ? ot(e, t, r, a, i) : 0;
return a && s && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ot(e, t, "border", !1, i) - .5)), 
u && (o = se.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = T.css(e, t)), 
rt(0, n, u);
}
};
}), T.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function(e, t) {
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
for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) o[e + ae[r] + t] = i[r] || i[r - 2] || i[0];
return o;
}
}, "margin" !== e && (T.cssHooks[e + t].set = rt);
}), T.fn.extend({
css: function(e, t) {
return Q(this, function(e, t, n) {
var r, o, i = {}, s = 0;
if (Array.isArray(t)) {
for (r = Ue(e), o = t.length; s < o; s++) i[t[s]] = T.css(e, t[s], !1, r);
return i;
}
return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
}, e, t, 1 < arguments.length);
}
}), ((T.Tween = st).prototype = {
constructor: st,
init: function(e, t, n, r, o, i) {
this.elem = e, this.prop = n, this.easing = o || T.easing._default, this.options = t, 
this.start = this.now = this.cur(), this.end = r, this.unit = i || (T.cssNumber[n] ? "" : "px");
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
T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
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
var at, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
function dt() {
ut && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(dt) : n.setTimeout(dt, T.fx.interval), 
T.fx.tick());
}
function ht() {
return n.setTimeout(function() {
at = void 0;
}), at = Date.now();
}
function gt(e, t) {
var n, r = 0, o = {
height: e
};
for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = ae[r])] = o["padding" + n] = e;
return t && (o.opacity = o.width = e), o;
}
function mt(e, t, n) {
for (var r, o = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), i = 0, s = o.length; i < s; i++) if (r = o[i].call(n, t, e)) return r;
}
function yt(e, t, n) {
var r, o, i = 0, s = yt.prefilters.length, a = T.Deferred().always(function() {
delete u.elem;
}), u = function() {
if (o) return !1;
for (var t = at || ht(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, s = l.tweens.length; i < s; i++) l.tweens[i].run(r);
return a.notifyWith(e, [ l, r, n ]), r < 1 && s ? n : (s || a.notifyWith(e, [ l, 1, 0 ]), 
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
if (o) return this;
for (o = !0; n < r; n++) l.tweens[n].run(1);
return t ? (a.notifyWith(e, [ l, 1, 0 ]), a.resolveWith(e, [ l, t ])) : a.rejectWith(e, [ l, t ]), 
this;
}
}), c = l.props;
for (function(e, t) {
var n, r, o, i, s;
for (n in e) if (o = t[r = J(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), 
n !== r && (e[r] = i, delete e[n]), (s = T.cssHooks[r]) && "expand" in s) for (n in i = s.expand(i), 
delete e[r], i) n in e || (e[n] = i[n], t[n] = o); else t[r] = o;
}(c, l.opts.specialEasing); i < s; i++) if (r = yt.prefilters[i].call(l, e, c, l.opts)) return b(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), 
r;
return T.map(c, mt, l), b(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
T.fx.timer(T.extend(u, {
elem: e,
anim: l,
queue: l.opts.queue
})), l;
}
T.Animation = T.extend(yt, {
tweeners: {
"*": [ function(e, t) {
var n = this.createTween(e, t);
return de(n.elem, e, se.exec(t), n), n;
} ]
},
tweener: function(e, t) {
b(e) ? (t = e, e = [ "*" ]) : e = e.match(H);
for (var n, r = 0, o = e.length; r < o; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], 
yt.tweeners[n].unshift(t);
},
prefilters: [ function(e, t, n) {
var r, o, i, s, a, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && fe(e), m = ee.get(e, "fxshow");
for (r in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, 
a = s.empty.fire, s.empty.fire = function() {
s.unqueued || a();
}), s.unqueued++, p.always(function() {
p.always(function() {
s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
});
})), t) if (o = t[r], ft.test(o)) {
if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
if ("show" !== o || !m || void 0 === m[r]) continue;
g = !0;
}
d[r] = m && m[r] || T.style(e, r);
}
if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
null == (l = m && m.display) && (l = ee.get(e, "display")), "none" === (c = T.css(e, "display")) && (l ? c = l : (ge([ e ], !0), 
l = e.style.display || l, c = T.css(e, "display"), ge([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(e, "float") && (u || (p.done(function() {
h.display = l;
}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
n.overflow && (h.overflow = "hidden", p.always(function() {
h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
})), u = !1, d) u || (m ? "hidden" in m && (g = m.hidden) : m = ee.access(e, "fxshow", {
display: l
}), i && (m.hidden = !g), g && ge([ e ], !0), p.done(function() {
for (r in g || ge([ e ]), ee.remove(e, "fxshow"), d) T.style(e, r, d[r]);
})), u = mt(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, 
u.start = 0));
} ],
prefilter: function(e, t) {
t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
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
var o = T.isEmptyObject(e), i = T.speed(t, n, r), s = function() {
var t = yt(this, T.extend({}, e), i);
(o || ee.get(this, "finish")) && t.stop(!0);
};
return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s);
},
stop: function(e, t, n) {
var r = function(e) {
var t = e.stop;
delete e.stop, t(n);
};
return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
this.each(function() {
var t = !0, o = null != e && e + "queueHooks", i = T.timers, s = ee.get(this);
if (o) s[o] && s[o].stop && r(s[o]); else for (o in s) s[o] && s[o].stop && pt.test(o) && r(s[o]);
for (o = i.length; o--; ) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), 
t = !1, i.splice(o, 1));
!t && n || T.dequeue(this, e);
});
},
finish: function(e) {
return !1 !== e && (e = e || "fx"), this.each(function() {
var t, n = ee.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = T.timers, s = r ? r.length : 0;
for (n.finish = !0, T.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
i.splice(t, 1));
for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
delete n.finish;
});
}
}), T.each([ "toggle", "show", "hide" ], function(e, t) {
var n = T.fn[t];
T.fn[t] = function(e, r, o) {
return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(gt(t, !0), e, r, o);
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
ut || (ut = !0, dt());
}, T.fx.stop = function() {
ut = null;
}, T.fx.speeds = {
slow: 600,
fast: 200,
_default: 400
}, T.fn.delay = function(e, t) {
return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
var o = n.setTimeout(t, e);
r.stop = function() {
n.clearTimeout(o);
};
});
}, lt = a.createElement("input"), ct = a.createElement("select").appendChild(a.createElement("option")), 
lt.type = "checkbox", v.checkOn = "" !== lt.value, v.optSelected = ct.selected, 
(lt = a.createElement("input")).value = "t", lt.type = "radio", v.radioValue = "t" === lt.value;
var vt, bt = T.expr.attrHandle;
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
var r, o, i = e.nodeType;
if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === i && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? vt : void 0)), 
void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
},
attrHooks: {
type: {
set: function(e, t) {
if (!v.radioValue && "radio" === t && N(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
}
},
removeAttr: function(e, t) {
var n, r = 0, o = t && t.match(H);
if (o && 1 === e.nodeType) for (;n = o[r++]; ) e.removeAttribute(n);
}
}), vt = {
set: function(e, t, n) {
return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
}
}, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = bt[t] || T.find.attr;
bt[t] = function(e, t, r) {
var o, i, s = t.toLowerCase();
return r || (i = bt[s], bt[s] = o, o = null != n(e, t, r) ? s : null, bt[s] = i), 
o;
};
});
var xt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
function _t(e) {
return (e.match(H) || []).join(" ");
}
function jt(e) {
return e.getAttribute && e.getAttribute("class") || "";
}
function kt(e) {
return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [];
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
var r, o, i = e.nodeType;
if (3 !== i && 8 !== i && 2 !== i) return 1 === i && T.isXMLDoc(e) || (t = T.propFix[t] || t, 
o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
},
propHooks: {
tabIndex: {
get: function(e) {
var t = T.find.attr(e, "tabindex");
return t ? parseInt(t, 10) : xt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
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
var t, n, r, o, i, s, a, u = 0;
if (b(e)) return this.each(function(t) {
T(this).addClass(e.call(this, t, jt(this)));
});
if ((t = kt(e)).length) for (;n = this[u++]; ) if (o = jt(n), r = 1 === n.nodeType && " " + _t(o) + " ") {
for (s = 0; i = t[s++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
o !== (a = _t(r)) && n.setAttribute("class", a);
}
return this;
},
removeClass: function(e) {
var t, n, r, o, i, s, a, u = 0;
if (b(e)) return this.each(function(t) {
T(this).removeClass(e.call(this, t, jt(this)));
});
if (!arguments.length) return this.attr("class", "");
if ((t = kt(e)).length) for (;n = this[u++]; ) if (o = jt(n), r = 1 === n.nodeType && " " + _t(o) + " ") {
for (s = 0; i = t[s++]; ) for (;-1 < r.indexOf(" " + i + " "); ) r = r.replace(" " + i + " ", " ");
o !== (a = _t(r)) && n.setAttribute("class", a);
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, r = "string" === n || Array.isArray(e);
return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each(function(n) {
T(this).toggleClass(e.call(this, n, jt(this), t), t);
}) : this.each(function() {
var t, o, i, s;
if (r) for (o = 0, i = T(this), s = kt(e); t = s[o++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = jt(this)) && ee.set(this, "__className__", t), 
this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ee.get(this, "__className__") || ""));
});
},
hasClass: function(e) {
var t, n, r = 0;
for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && -1 < (" " + _t(jt(n)) + " ").indexOf(t)) return !0;
return !1;
}
});
var Tt = /\r/g;
T.fn.extend({
val: function(e) {
var t, n, r, o = this[0];
return arguments.length ? (r = b(e), this.each(function(n) {
var o;
1 === this.nodeType && (null == (o = r ? e.call(this, n, T(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, function(e) {
return null == e ? "" : e + "";
})), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
})) : o ? (t = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0;
}
}), T.extend({
valHooks: {
option: {
get: function(e) {
var t = T.find.attr(e, "value");
return null != t ? t : _t(T.text(e));
}
},
select: {
get: function(e) {
var t, n, r, o = e.options, i = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], u = s ? i + 1 : o.length;
for (r = i < 0 ? u : s ? i : 0; r < u; r++) if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
if (t = T(n).val(), s) return t;
a.push(t);
}
return a;
},
set: function(e, t) {
for (var n, r, o = e.options, i = T.makeArray(t), s = o.length; s--; ) ((r = o[s]).selected = -1 < T.inArray(T.valHooks.option.get(r), i)) && (n = !0);
return n || (e.selectedIndex = -1), i;
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
var Ct = /^(?:focusinfocus|focusoutblur)$/, Et = function(e) {
e.stopPropagation();
};
T.extend(T.event, {
trigger: function(e, t, r, o) {
var i, s, u, l, c, f, p, d, h = [ r || a ], m = g.call(e, "type") ? e.type : e, y = g.call(e, "namespace") ? e.namespace.split(".") : [];
if (s = d = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(m + T.event.triggered) && (-1 < m.indexOf(".") && (m = (y = m.split(".")).shift(), 
y.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[T.expando] ? e : new T.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, 
e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
e.result = void 0, e.target || (e.target = r), t = null == t ? [ e ] : T.makeArray(t, [ e ]), 
p = T.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, t))) {
if (!o && !p.noBubble && !x(r)) {
for (l = p.delegateType || m, Ct.test(l + m) || (s = s.parentNode); s; s = s.parentNode) h.push(s), 
u = s;
u === (r.ownerDocument || a) && h.push(u.defaultView || u.parentWindow || n);
}
for (i = 0; (s = h[i++]) && !e.isPropagationStopped(); ) d = s, e.type = 1 < i ? l : p.bindType || m, 
(f = (ee.get(s, "events") || {})[e.type] && ee.get(s, "handle")) && f.apply(s, t), 
(f = c && s[c]) && f.apply && K(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
return e.type = m, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !K(r) || c && b(r[m]) && !x(r) && ((u = r[c]) && (r[c] = null), 
T.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, Et), r[m](), 
e.isPropagationStopped() && d.removeEventListener(m, Et), T.event.triggered = void 0, 
u && (r[c] = u)), e.result;
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
var r = this.ownerDocument || this, o = ee.access(r, t);
o || r.addEventListener(e, n, !0), ee.access(r, t, (o || 0) + 1);
},
teardown: function() {
var r = this.ownerDocument || this, o = ee.access(r, t) - 1;
o ? ee.access(r, t, o) : (r.removeEventListener(e, n, !0), ee.remove(r, t));
}
};
});
var At = n.location, St = Date.now(), Mt = /\?/;
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
var Lt = /\[\]$/, Nt = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i, qt = /^(?:input|select|textarea|keygen)/i;
function Dt(e, t, n, r) {
var o;
if (Array.isArray(t)) T.each(t, function(t, o) {
n || Lt.test(e) ? r(e, o) : Dt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
}); else if (n || "object" !== j(t)) r(e, t); else for (o in t) Dt(e + "[" + o + "]", t[o], n, r);
}
T.param = function(e, t) {
var n, r = [], o = function(e, t) {
var n = b(t) ? t() : t;
r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
};
if (null == e) return "";
if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
o(this.name, this.value);
}); else for (n in e) Dt(n, e[n], t, o);
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
return this.name && !T(this).is(":disabled") && qt.test(this.nodeName) && !Ot.test(e) && (this.checked || !me.test(e));
}).map(function(e, t) {
var n = T(this).val();
return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
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
var $t = /%20/g, Rt = /#.*$/, Gt = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:GET|HEAD)$/, It = /^\/\//, Bt = {}, Wt = {}, zt = "*/".concat("*"), Ut = a.createElement("a");
function Ft(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var r, o = 0, i = t.toLowerCase().match(H) || [];
if (b(n)) for (;r = i[o++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
};
}
function Qt(e, t, n, r) {
var o = {}, i = e === Wt;
function s(a) {
var u;
return o[a] = !0, T.each(e[a] || [], function(e, a) {
var l = a(t, n, r);
return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
s(l), !1);
}), u;
}
return s(t.dataTypes[0]) || !o["*"] && s("*");
}
function Vt(e, t) {
var n, r, o = T.ajaxSettings.flatOptions || {};
for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
return r && T.extend(!0, e, r), e;
}
Ut.href = At.href, T.extend({
active: 0,
lastModified: {},
etag: {},
ajaxSettings: {
url: At.href,
type: "GET",
isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
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
"text xml": T.parseXML
},
flatOptions: {
url: !0,
context: !0
}
},
ajaxSetup: function(e, t) {
return t ? Vt(Vt(e, T.ajaxSettings), t) : Vt(T.ajaxSettings, e);
},
ajaxPrefilter: Ft(Bt),
ajaxTransport: Ft(Wt),
ajax: function(e, t) {
"object" == typeof e && (t = e, e = void 0), t = t || {};
var r, o, i, s, u, l, c, f, p, d, h = T.ajaxSetup({}, t), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? T(g) : T.event, y = T.Deferred(), v = T.Callbacks("once memory"), b = h.statusCode || {}, x = {}, w = {}, _ = "canceled", j = {
readyState: 0,
getResponseHeader: function(e) {
var t;
if (c) {
if (!s) for (s = {}; t = Pt.exec(i); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
t = s[e.toLowerCase() + " "];
}
return null == t ? null : t.join(", ");
},
getAllResponseHeaders: function() {
return c ? i : null;
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
if (e) if (c) j.always(e[j.status]); else for (t in e) b[t] = [ b[t], e[t] ];
return this;
},
abort: function(e) {
var t = e || _;
return r && r.abort(t), k(0, t), this;
}
};
if (y.promise(j), h.url = ((e || h.url || At.href) + "").replace(It, At.protocol + "//"), 
h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [ "" ], 
null == h.crossDomain) {
l = a.createElement("a");
try {
l.href = h.url, l.href = l.href, h.crossDomain = Ut.protocol + "//" + Ut.host != l.protocol + "//" + l.host;
} catch (e) {
h.crossDomain = !0;
}
}
if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), 
Qt(Bt, h, t, j), c) return j;
for (p in (f = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), 
h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), o = h.url.replace(Rt, ""), 
h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace($t, "+")) : (d = h.url.slice(o.length), 
h.data && (h.processData || "string" == typeof h.data) && (o += (Mt.test(o) ? "&" : "?") + h.data, 
delete h.data), !1 === h.cache && (o = o.replace(Gt, "$1"), d = (Mt.test(o) ? "&" : "?") + "_=" + St++ + d), 
h.url = o + d), h.ifModified && (T.lastModified[o] && j.setRequestHeader("If-Modified-Since", T.lastModified[o]), 
T.etag[o] && j.setRequestHeader("If-None-Match", T.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && j.setRequestHeader("Content-Type", h.contentType), 
j.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]), 
h.headers) j.setRequestHeader(p, h.headers[p]);
if (h.beforeSend && (!1 === h.beforeSend.call(g, j, h) || c)) return j.abort();
if (_ = "abort", v.add(h.complete), j.done(h.success), j.fail(h.error), r = Qt(Wt, h, t, j)) {
if (j.readyState = 1, f && m.trigger("ajaxSend", [ j, h ]), c) return j;
h.async && 0 < h.timeout && (u = n.setTimeout(function() {
j.abort("timeout");
}, h.timeout));
try {
c = !1, r.send(x, k);
} catch (e) {
if (c) throw e;
k(-1, e);
}
} else k(-1, "No Transport");
function k(e, t, s, a) {
var l, p, d, x, w, _ = t;
c || (c = !0, u && n.clearTimeout(u), r = void 0, i = a || "", j.readyState = 0 < e ? 4 : 0, 
l = 200 <= e && e < 300 || 304 === e, s && (x = function(e, t, n) {
for (var r, o, i, s, a = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
if (r) for (o in a) if (a[o] && a[o].test(r)) {
u.unshift(o);
break;
}
if (u[0] in n) i = u[0]; else {
for (o in n) {
if (!u[0] || e.converters[o + " " + u[0]]) {
i = o;
break;
}
s || (s = o);
}
i = i || s;
}
if (i) return i !== u[0] && u.unshift(i), n[i];
}(h, j, s)), x = function(e, t, n, r) {
var o, i, s, a, u, l = {}, c = e.dataTypes.slice();
if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
for (i = c.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), 
!u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift()) if ("*" === i) i = u; else if ("*" !== u && u !== i) {
if (!(s = l[u + " " + i] || l["* " + i])) for (o in l) if ((a = o.split(" "))[1] === i && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
!0 === s ? s = l[o] : !0 !== l[o] && (i = a[0], c.unshift(a[1]));
break;
}
if (!0 !== s) if (s && e.throws) t = s(t); else try {
t = s(t);
} catch (e) {
return {
state: "parsererror",
error: s ? e : "No conversion from " + u + " to " + i
};
}
}
return {
state: "success",
data: t
};
}(h, x, j, l), l ? (h.ifModified && ((w = j.getResponseHeader("Last-Modified")) && (T.lastModified[o] = w), 
(w = j.getResponseHeader("etag")) && (T.etag[o] = w)), 204 === e || "HEAD" === h.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, 
p = x.data, l = !(d = x.error))) : (d = _, !e && _ || (_ = "error", e < 0 && (e = 0))), 
j.status = e, j.statusText = (t || _) + "", l ? y.resolveWith(g, [ p, _, j ]) : y.rejectWith(g, [ j, _, d ]), 
j.statusCode(b), b = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [ j, h, l ? p : d ]), 
v.fireWith(g, [ j, _ ]), f && (m.trigger("ajaxComplete", [ j, h ]), --T.active || T.event.trigger("ajaxStop")));
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
T[t] = function(e, n, r, o) {
return b(n) && (o = o || r, r = n, n = void 0), T.ajax(T.extend({
url: e,
type: t,
dataType: o,
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
var Xt = {
0: 200,
1223: 204
}, Yt = T.ajaxSettings.xhr();
v.cors = !!Yt && "withCredentials" in Yt, v.ajax = Yt = !!Yt, T.ajaxTransport(function(e) {
var t, r;
if (v.cors || Yt && !e.crossDomain) return {
send: function(o, i) {
var s, a = e.xhr();
if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), 
o) a.setRequestHeader(s, o[s]);
t = function(e) {
return function() {
t && (t = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, 
"abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
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
} catch (o) {
if (t) throw o;
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
send: function(r, o) {
t = T("<script>").attr(e.scriptAttrs || {}).prop({
charset: e.scriptCharset,
src: e.url
}).on("load error", n = function(e) {
t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
}), a.head.appendChild(t[0]);
},
abort: function() {
n && n();
}
};
});
var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
T.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
var e = Kt.pop() || T.expando + "_" + St++;
return this[e] = !0, e;
}
}), T.ajaxPrefilter("json jsonp", function(e, t, r) {
var o, i, s, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
a ? e[a] = e[a].replace(Zt, "$1" + o) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), 
e.converters["script json"] = function() {
return s || T.error(o + " was not called"), s[0];
}, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
s = arguments;
}, r.always(function() {
void 0 === i ? T(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, 
Kt.push(o)), s && b(i) && i(s[0]), s = i = void 0;
}), "script";
}), v.createHTMLDocument = ((Jt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
2 === Jt.childNodes.length), T.parseHTML = function(e, t, n) {
return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, 
t.head.appendChild(r)) : t = a), i = !n && [], (o = O.exec(e)) ? [ t.createElement(o[1]) ] : (o = Te([ e ], t, i), 
i && i.length && T(i).remove(), T.merge([], o.childNodes)));
var r, o, i;
}, T.fn.load = function(e, t, n) {
var r, o, i, s = this, a = e.indexOf(" ");
return -1 < a && (r = _t(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 
0 < s.length && T.ajax({
url: e,
type: o || "GET",
dataType: "html",
data: t
}).done(function(e) {
i = arguments, s.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
}).always(n && function(e, t) {
s.each(function() {
n.apply(this, i || [ e.responseText, t, e ]);
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
var r, o, i, s, a, u, l = T.css(e, "position"), c = T(e), f = {};
"static" === l && (e.style.position = "relative"), a = c.offset(), i = T.css(e, "top"), 
u = T.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (i + u).indexOf("auto") ? (s = (r = c.position()).top, 
o = r.left) : (s = parseFloat(i) || 0, o = parseFloat(u) || 0), b(t) && (t = t.call(e, n, T.extend({}, a))), 
null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), 
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
var e, t, n, r = this[0], o = {
top: 0,
left: 0
};
if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect(); else {
for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); ) e = e.parentNode;
e && e !== r && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), 
o.left += T.css(e, "borderLeftWidth", !0));
}
return {
top: t.top - o.top - T.css(r, "marginTop", !0),
left: t.left - o.left - T.css(r, "marginLeft", !0)
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
return Q(this, function(e, r, o) {
var i;
if (x(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
}, e, r, arguments.length);
};
}), T.each([ "top", "left" ], function(e, t) {
T.cssHooks[t] = Ve(v.pixelPosition, function(e, n) {
if (n) return n = Qe(e, t), ze.test(n) ? T(e).position()[t] + "px" : n;
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
T.fn[r] = function(o, i) {
var s = arguments.length && (n || "boolean" != typeof o), a = n || (!0 === o || !0 === i ? "margin" : "border");
return Q(this, function(t, n, o) {
var i;
return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? T.css(t, n, a) : T.style(t, n, o, a);
}, t, s ? o : void 0, s);
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
var n, r, o;
if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = l.call(arguments, 2), 
(o = function() {
return e.apply(t || this, r.concat(l.call(arguments)));
}).guid = e.guid = e.guid || T.guid++, o;
}, T.holdReady = function(e) {
e ? T.readyWait++ : T.ready(!0);
}, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = N, T.isFunction = b, 
T.isWindow = x, T.camelCase = J, T.type = j, T.now = Date.now, T.isNumeric = function(e) {
var t = T.type(e);
return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
}, r = [], void 0 === (o = function() {
return T;
}.apply(t, r)) || (e.exports = o);
var en = n.jQuery, tn = n.$;
return T.noConflict = function(e) {
return n.$ === T && (n.$ = tn), e && n.jQuery === T && (n.jQuery = en), T;
}, i || (n.jQuery = n.$ = T), T;
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
for (var n, r = "php", o = [ "source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment" ], i, s = [ new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "()", "(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?", "(?:\\/\\/\\/?)?", "((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)", "(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))", "(?:\\?([^#]*))?(?:#(.*))?)" ].join("")) ][0].exec(e), a = {}, u = 14; u--; ) s[u] && (a[o[u]] = s[u]);
if (t) return a[t.replace("PHP_URL_", "").toLowerCase()];
if (0) {
let e = "queryKey", t = /(?:^|&)([^&=]*)=?([^&]*)/g;
a[e] = {}, (n = a[o[12]] || "").replace(t, function(t, n, r) {
n && (a[e][n] = r);
});
}
return delete a.source, a;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.parse_url = t.parse_url2 = void 0, t.parse_url2 = r, t.parse_url = o, t.default = o;
}, function(e, t, n) {
"use strict";
(function(e, r, o) {
Object.defineProperty(t, "__esModule", {
value: !0
}), t.registerGlobalMenu = void 0;
const i = n(9), s = n(23), a = n(25);
function u(t, r, o) {
let u = i.requireScript(t, "index");
a.hasGrant(u.metadata.grant, "registerMenuCommand") ? s.registerMenuCommand({
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
console.info("jQuery", o, o && o.fn && o.fn.jquery)) : (console.info(`${e}.$`, t.$, t.$ && t.$.fn && t.$.fn.jquery), 
console.info(`${e}.jQuery`, t.jQuery, t.jQuery && t.jQuery.fn && t.jQuery.fn.jquery));
} catch (t) {
console.error(`${e}`, t.toString());
}
console.groupEnd(e);
}
t.registerGlobalMenu = u, t.default = t;
}).call(this, n(1), n(0).default, n(0).default);
}, function(e, t, n) {
"use strict";
const r = n(24);
e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(12), o = new Map();
function i(e, t, n = []) {
"string" == typeof e && (e = {
label: e
});
const i = s(e), a = async function() {
let r;
console.time(i), console.group(i);
try {
(r = await t(e, ...n)) && !0 !== r && console.info(i, e.fn_name || t.name, [ r.length, r ]);
} catch (e) {
console.error(e);
}
console.groupEnd(i), console.timeEnd(i);
};
return "function" == typeof r.default.registerMenuCommand ? r.default.registerMenuCommand(i, a) : console.warn("GM_registerMenuCommand not a function."), 
o.set(i, a), i;
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
let r = o.get(n);
return r ? await r(...t) : r;
}
function u() {
let e = [];
return o.forEach(function(t, n, r) {
e.push(n);
}), e;
}
t.registerMenuCommand = i, t.getLabel = s, t.callMenuCommand = a, t.listMenuCommand = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.meta_filter = t.makeMetaRow = t.meta_match = t.lazyMetaFix = t.hasGrant = t.parseMetadata = void 0;
const r = n(26);
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
o[e] && (o[e] = o[e].length ? l(r.array_unique(o[e])) : []);
}), o.grant.sort(), o;
}
}
function i(e, t) {
return !(!e.includes("GM." + t) && !e.includes("GM_" + t));
}
function s(e) {
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
})), e.match && (e.match = a(e.match)), [ "include", "match", "exclude", "grant" ].forEach(function(t) {
e[t] && (e[t] = e[t].length ? l(r.array_unique(e[t])) : []);
}), e.grant && e.grant.length && e.grant.sort(), e;
}
function a(e) {
return e.map(function(e, t, n) {
return e.replace(/^.*(\:\/\/)/, "*$1");
});
}
function u(e, t, n = !1, r = "\t\t", o = "// ", i = "\n") {
let s = "", a = `${o}@${e}${r}`;
return Array.isArray(t) ? s = t.join(`${i}${a}`) : void 0 !== t && (s = t.toString()), 
n && (s = a + s), s;
}
function l(e) {
return e.filter(function(e, t, n) {
return !!e;
});
}
t.parseMetadata = o, t.hasGrant = i, t.lazyMetaFix = s, t.meta_match = a, t.makeMetaRow = u, 
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
"./syosetu-list-number/": 2,
"./syosetu-list-number/index": 2,
"./syosetu-list-number/index.js": 2,
"./syosetu-list-number/index.user": 4,
"./syosetu-list-number/index.user.js": 4,
"./syosetu-list-number/lib/metadata": 19,
"./syosetu-list-number/lib/metadata.js": 19,
"./syosetu-list-number/site/kakuyomu.jp": 5,
"./syosetu-list-number/site/kakuyomu.jp.js": 5,
"./syosetu-list-number/site/mitemin": 7,
"./syosetu-list-number/site/mitemin.js": 7,
"./syosetu-list-number/site/syosetu": 8,
"./syosetu-list-number/site/syosetu.js": 8
};
function o(e) {
var t = i(e);
return n(t);
}
function i(e) {
if (!n.o(r, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return r[e];
}
o.keys = function e() {
return Object.keys(r);
}, o.resolve = i, e.exports = o, o.id = 27;
}, function(e, t, n) {
e.exports = m, m.Minimatch = y;
var r = {
sep: "/"
};
try {
r = n(29);
} catch (e) {}
var o = m.GLOBSTAR = y.GLOBSTAR = {}, i = n(31), s = {
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
}, a = "[^/]", u = a + "*?", l = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", c = "(?:(?!(?:\\/|^)\\.).)*?", f = p("().*{}+?[]^$\\!");
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
var r = "", i = !!n.nocase, l = !1, c = [], p = [], d, h = !1, g = -1, m = -1, y = "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", v = this;
function b() {
if (d) {
switch (d) {
case "*":
r += u, i = !0;
break;

case "?":
r += a, i = !0;
break;

default:
r += "\\" + d;
break;
}
v.debug("clearStateChar %j %j", d, r), d = !1;
}
}
for (var x = 0, _ = e.length, j; x < _ && (j = e.charAt(x)); x++) if (this.debug("%s\t%s %s %j", e, x, r, j), 
l && f[j]) r += "\\" + j, l = !1; else switch (j) {
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
if (this.debug("%s\t%s %s %j <-- stateChar", e, x, r, j), h) {
this.debug("  in class"), "!" === j && x === m + 1 && (j = "^"), r += j;
continue;
}
v.debug("call clearStateChar %j", d), b(), d = j, n.noext && b();
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
start: x - 1,
reStart: r.length,
open: s[d].open,
close: s[d].close
}), r += "!" === d ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", d, r), d = !1;
continue;

case ")":
if (h || !c.length) {
r += "\\)";
continue;
}
b(), i = !0;
var k = c.pop();
r += k.close, "!" === k.type && p.push(k), k.reEnd = r.length;
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
r += "\\" + j;
continue;
}
h = !0, m = x, g = r.length, r += j;
continue;

case "]":
if (x === m + 1 || !h) {
r += "\\" + j, l = !1;
continue;
}
if (h) {
var C = e.substring(m + 1, x);
try {
RegExp("[" + C + "]");
} catch (e) {
var E = this.parse(C, w);
r = r.substr(0, g) + "\\[" + E[0] + "\\]", i = i || E[1], h = !1;
continue;
}
}
i = !0, h = !1, r += j;
continue;

default:
b(), l ? l = !1 : !f[j] || "^" === j && h || (r += "\\"), r += j;
}
for (h && (C = e.substr(m + 1), E = this.parse(C, w), r = r.substr(0, g) + "\\[" + E[0], 
i = i || E[1]), k = c.pop(); k; k = c.pop()) {
var A = r.slice(k.reStart + k.open.length);
this.debug("setting tail", r, k), A = A.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
return n || (n = "\\"), t + t + n + "|";
}), this.debug("tail=%j\n   %s", A, A, k, r);
var S = "*" === k.type ? u : "?" === k.type ? a : "\\" + k.type;
i = !0, r = r.slice(0, k.reStart) + S + "\\(" + A;
}
b(), l && (r += "\\\\");
var M = !1;
switch (r.charAt(0)) {
case ".":
case "[":
case "(":
M = !0;
}
for (var L = p.length - 1; L > -1; L--) {
var N = p[L], O = r.slice(0, N.reStart), q = r.slice(N.reStart, N.reEnd - 8), D = r.slice(N.reEnd - 8, N.reEnd), $ = r.slice(N.reEnd);
D += $;
var R = O.split("(").length - 1, G = $;
for (x = 0; x < R; x++) G = G.replace(/\)[+*?]?/, "");
var P = "", H;
"" === ($ = G) && t !== w && (P = "$"), r = O + q + $ + P + D;
}
if ("" !== r && i && (r = "(?=.)" + r), M && (r = y + r), t === w) return [ r, i ];
if (!i) return T(e);
var I = n.nocase ? "i" : "";
try {
var B = new RegExp("^" + r + "$", I);
} catch (e) {
return new RegExp("$.");
}
return B._glob = e, B._src = r, B;
}
function j() {
if (this.regexp || !1 === this.regexp) return this.regexp;
var e = this.set;
if (!e.length) return this.regexp = !1, this.regexp;
var t = this.options, n = t.noglobstar ? u : t.dot ? l : c, r = t.nocase ? "i" : "", i = e.map(function(e) {
return e.map(function(e) {
return e === o ? n : "string" == typeof e ? C(e) : e._src;
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
function k(e, t) {
if (this.debug("match", e, this.pattern), this.comment) return !1;
if (this.empty) return "" === e;
if ("/" === e && t) return !0;
var n = this.options;
"/" !== r.sep && (e = e.split(r.sep).join("/")), e = e.split(d), this.debug(this.pattern, "split", e);
var o = this.set, i, s;
for (this.debug(this.pattern, "set", o), s = e.length - 1; s >= 0 && !(i = e[s]); s--) ;
for (s = 0; s < o.length; s++) {
var a = o[s], u = e, l;
if (n.matchBase && 1 === a.length && (u = [ i ]), this.matchOne(u, a, t)) return !!n.flipNegate || !this.negate;
}
return !n.flipNegate && this.negate;
}
function T(e) {
return e.replace(/\\(.)/g, "$1");
}
function C(e) {
return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
m.makeRe = function(e, t) {
return new y(e, t || {}).makeRe();
}, y.prototype.makeRe = j, m.match = function(e, t, n) {
var r = new y(t, n = n || {});
return e = e.filter(function(e) {
return r.match(e);
}), r.options.nonull && !e.length && e.push(t), e;
}, y.prototype.match = k, y.prototype.matchOne = function(e, t, n) {
var r = this.options, i;
this.debug("matchOne", {
this: this,
file: e,
pattern: t
}), this.debug("matchOne", e.length, t.length);
for (var s = 0, a = 0, u = e.length, l = t.length; s < u && a < l; s++, a++) {
this.debug("matchOne loop");
var c = t[a], f = e[s], p;
if (this.debug(t, c, f), !1 === c) return !1;
if (c === o) {
this.debug("GLOBSTAR", [ t, c, f ]);
var d = s, h = a + 1;
if (h === l) {
for (this.debug("** at the end"); s < u; s++) if ("." === e[s] || ".." === e[s] || !r.dot && "." === e[s].charAt(0)) return !1;
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
if ("string" == typeof c ? (p = r.nocase ? f.toLowerCase() === c.toLowerCase() : f === c, 
this.debug("string match", c, f, p)) : (p = f.match(c), this.debug("pattern match", c, f, p)), 
!p) return !1;
}
if (s === u && a === l) return !0;
if (s === u) return n;
if (a === l) return s === u - 1 && "" === e[s];
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
var s = o >= 0 ? arguments[o] : e.cwd();
if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
s && (t = s + "/" + t, r = "/" === s.charAt(0));
}
return (r ? "/" : "") + (t = n(i(t.split("/"), function(e) {
return !!e;
}), !r).join("/")) || ".";
}, t.normalize = function(e) {
var r = t.isAbsolute(e), o = "/" === s(e, -1);
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
for (var o = r(e.split("/")), i = r(n.split("/")), s = Math.min(o.length, i.length), a = s, u = 0; u < s; u++) if (o[u] !== i[u]) {
a = u;
break;
}
for (var l = [], u = a; u < o.length; u++) l.push("..");
return (l = l.concat(i.slice(a))).join("/");
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
var s = "b" === "ab".substr(-1) ? function(e, t, n) {
return e.substr(t, n);
} : function(e, t, n) {
return t < 0 && (t = e.length + t), e.substr(t, n);
};
}).call(this, n(30));
}, function(e, t) {
var n = e.exports = {}, r, o;
function i() {
throw new Error("setTimeout has not been defined");
}
function s() {
throw new Error("clearTimeout has not been defined");
}
function a(e) {
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
if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
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
o = "function" == typeof clearTimeout ? clearTimeout : s;
} catch (e) {
o = s;
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
f = null, c = !1, u(e);
}
}
function g(e, t) {
this.fun = e, this.array = t;
}
function m() {}
n.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
l.push(new g(e, t)), 1 !== l.length || c || a(h);
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
var r = n(32), o = n(33);
e.exports = h;
var i = "\0SLASH" + Math.random() + "\0", s = "\0OPEN" + Math.random() + "\0", a = "\0CLOSE" + Math.random() + "\0", u = "\0COMMA" + Math.random() + "\0", l = "\0PERIOD" + Math.random() + "\0";
function c(e) {
return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function f(e) {
return e.split("\\\\").join(i).split("\\{").join(s).split("\\}").join(a).split("\\,").join(u).split("\\.").join(l);
}
function p(e) {
return e.split(i).join("\\").split(s).join("{").split(a).join("}").split(u).join(",").split(l).join(".");
}
function d(e) {
if (!e) return [ "" ];
var t = [], n = o("{", "}", e);
if (!n) return e.split(",");
var r = n.pre, i = n.body, s = n.post, a = r.split(",");
a[a.length - 1] += "{" + i + "}";
var u = d(s);
return s.length && (a[a.length - 1] += u.shift(), a.push.apply(a, u)), t.push.apply(t, a), 
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
var s = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body), u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body), l = s || u, f = i.body.indexOf(",") >= 0, p, h;
if (!l && !f) return i.post.match(/,.*\}/) ? x(e = i.pre + "{" + i.body + a + i.post) : [ e ];
if (l) p = i.body.split(/\.\./); else if (1 === (p = d(i.body)).length && 1 === (p = x(p[0], !1).map(m)).length) return (h = i.post.length ? x(i.post, !1) : [ "" ]).map(function(e) {
return i.pre + p[0] + e;
});
var g = i.pre, h = i.post.length ? x(i.post, !1) : [ "" ], w;
if (l) {
var _ = c(p[0]), j = c(p[1]), k = Math.max(p[0].length, p[1].length), T = 3 == p.length ? Math.abs(c(p[2])) : 1, C = v, E;
j < _ && (T *= -1, C = b);
var A = p.some(y);
w = [];
for (var S = _; C(S, j); S += T) {
var M;
if (u) "\\" === (M = String.fromCharCode(S)) && (M = ""); else if (M = String(S), 
A) {
var L = k - M.length;
if (L > 0) {
var N = new Array(L + 1).join("0");
M = S < 0 ? "-" + N + M.slice(1) : N + M;
}
}
w.push(M);
}
} else w = r(p, function(e) {
return x(e, !1);
});
for (var O = 0; O < w.length; O++) for (var q = 0; q < h.length; q++) {
var D = g + w[O] + h[q];
(!t || l || D) && n.push(D);
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
var r, o, i, s, a, u = n.indexOf(e), l = n.indexOf(t, u + 1), c = u;
if (u >= 0 && l > 0) {
for (r = [], i = n.length; c >= 0 && !a; ) c == u ? (r.push(c), u = n.indexOf(e, c + 1)) : 1 == r.length ? a = [ r.pop(), l ] : ((o = r.pop()) < i && (i = o, 
s = l), l = n.indexOf(t, c + 1)), c = u < l && u >= 0 ? u : l;
r.length && (a = [ i, s ]);
}
return a;
}
e.exports = r, r.range = i;
}, function(e, t, n) {
"use strict";
const r = n(12);
e.exports = r;
}, function(e, t, n) {
"use strict";
n.r(t), n.d(t, "SYM_URL", function() {
return i;
}), n.d(t, "SYM_HIDDEN", function() {
return s;
}), n.d(t, "LazyURL", function() {
return LazyURL;
}), n.d(t, "findSymbolContext", function() {
return c;
}), n.d(t, "_core", function() {
return f;
});
var r = n(3), o = n.n(r);
const i = Symbol("url"), s = Symbol("hidden");
var a;
!function(e) {
e.protocol = "fake+http:", e.hostname = "url-fake-hostname";
}(a || (a = {}));
const u = c();
class LazyURL extends URL {
constructor(e, t) {
let n = f(e, t);
super(n.url.href), this[s] = n.hidden;
}
static create(e, t) {
return new this(e, t);
}
get paths() {
return null != u && this[u] && Array.isArray(this[u].path) ? this[u].path.slice() : this.pathname.split("/").filter(e => "" != e);
}
fakeExists() {
return this.fakeKeys().length;
}
fakeKeys() {
return Object.keys(this[s]);
}
fakeEntries() {
return Object.entries(this[s]);
}
toRealString() {
let e = this.fakeEntries();
if (e.length) {
let t = o()(this.href);
if (e.forEach(([e, n]) => {
t[e] === n && t.set(e, "");
}), "" === t.host && ("" !== t.username || "" !== t.password || "" !== t.port || "" !== t.protocol)) throw new TypeError(`Invalid URL ${t}`);
let n = t.toString();
return "" === t.protocol && "" === t.host && (n = n.replace(/^\/\//, "")), n;
}
return this.href;
}
toString() {
return this.href;
}
get hostname() {
return super.hostname;
}
set hostname(e) {
delete this[s].hostname, super.hostname = e;
}
get protocol() {
return super.protocol;
}
set protocol(e) {
delete this[s].protocol, super.protocol = e;
}
get scheme() {
return this.protocol;
}
set scheme(e) {
this.protocol = e;
}
get fragment() {
return this.hash;
}
set fragment(e) {
this.hash = e;
}
get query() {
return this.search;
}
set query(e) {
this.search = e;
}
toObject() {
return LazyURL.toObject(this);
}
static toObject(e) {
return LazyURL.keys().reduce((t, n) => (t[n] = "searchParams" === n ? new URLSearchParams(e.searchParams.entries()) : e[n], 
t), {});
}
keys() {
return LazyURL.keys();
}
values() {
return LazyURL.values(this);
}
entries() {
return LazyURL.entries(this);
}
static keys() {
return [ "href", "protocol", "username", "password", "host", "hostname", "port", "pathname", "search", "searchParams", "hash" ];
}
static values(e) {
return LazyURL.keys().map(t => e[t]);
}
static entries(e) {
return LazyURL.keys().map(t => [ t, e[t] ]);
}
createURLSearchParams(e) {
return e instanceof URL && (e = e.searchParams), new URLSearchParams(e);
}
}
function l(e) {
let t = Object.getOwnPropertyDescriptors(e);
[ "href", "protocol", "username", "password", "host", "hostname", "port", "pathname", "search", "searchParams", "hash" ].forEach(n => {
n in t && (t[n].enumerable = !0, Object.defineProperty(e, n, t[n]));
});
}
function c() {
let e = new URL("https://localhost");
const t = Object.getOwnPropertySymbols(e).filter(t => "localhost" == e[t].host)[0];
return t;
}
function f(e, t) {
if (Array.isArray(e) && null == t && ([e, t] = e), e && e instanceof LazyURL) e = e.toRealString(); else if (e && e instanceof URL) e = e.href; else if (null != e && "string" == typeof e.href) e = e.href; else if ("string" != typeof e) throw new TypeError(`Argument '${e}' is not assignable to url like.`);
let n;
const r = {};
"string" != typeof t && null != t && "string" == typeof t.href && (t = t.href), 
"" === t && (t = void 0);
try {
n = new URL(e, t);
} catch (i) {
let s;
if (/Invalid URL/.test(i.message)) if ("string" == typeof t) {
let i = t, a = o()(t);
"" !== a.host && "" !== a.protocol || (!i.includes("/") && [ a.protocol + a.host, a.protocol + a.pathname ].includes(i.toLowerCase()) && ((a = o()("")).set("host", i), 
a.set("protocol", "fake+http:"), a.set("pathname", ""), r.protocol = "fake+http:"), 
"" === a.host && ("" == a.pathname || a.pathname.includes("/") ? (a.set("host", "url-fake-hostname"), 
r.hostname = a.hostname) : (a.set("host", a.pathname), a.set("pathname", ""))), 
"" === a.protocol && (a.set("protocol", "fake+http:"), r.protocol = a.protocol), 
"" === a.pathname || a.pathname.startsWith("/") || a.set("pathname", "/" + a.pathname), 
n = new URL(e, a.toString()), s = !0);
} else null == t && (t = "fake+http://url-fake-hostname", n = new URL(e, t), r.protocol = "fake+http:", 
r.hostname = "url-fake-hostname", s = !0);
if (!s) throw i;
}
return {
url: n,
hidden: r
};
}
t.default = LazyURL;
}, function(e, t, n) {
"use strict";
e.exports = function e(t, n) {
if (n = n.split(":")[0], !(t = +t)) return !1;
switch (n) {
case "http":
case "ws":
return 80 !== t;

case "https":
case "wss":
return 443 !== t;

case "ftp":
return 21 !== t;

case "gopher":
return 70 !== t;

case "file":
return !1;
}
return 0 !== t;
};
}, function(e, t, n) {
"use strict";
var r = Object.prototype.hasOwnProperty, o;
function i(e) {
try {
return decodeURIComponent(e.replace(/\+/g, " "));
} catch (e) {
return null;
}
}
function s(e) {
try {
return encodeURIComponent(e);
} catch (e) {
return null;
}
}
function a(e) {
for (var t = /([^=?&]+)=?([^&]*)/g, n = {}, r; r = t.exec(e); ) {
var o = i(r[1]), s = i(r[2]);
null === o || null === s || o in n || (n[o] = s);
}
return n;
}
function u(e, t) {
t = t || "";
var n = [], i, s;
for (s in "string" != typeof t && (t = "?"), e) if (r.call(e, s)) {
if ((i = e[s]) || null !== i && i !== o && !isNaN(i) || (i = ""), s = encodeURIComponent(s), 
i = encodeURIComponent(i), null === s || null === i) continue;
n.push(s + "=" + i);
}
return n.length ? t + n.join("&") : "";
}
t.stringify = u, t.parse = a;
}, function(e, t, n) {
"use strict";
(function(e) {
function n(t = e.jQuery, n = e.window) {
!function(e) {
let r = function(e) {
let n, r;
if (t.isNumeric(e)) n = e; else if (Array.isArray(e) && e.length) for (let r of e) {
let e;
if (r && (e = t(r)) && e.length) {
n = e.offset().top;
break;
}
} else (r = t(e)) && r.length && (n = r.offset().top);
return n;
};
void 0 === e && (t.fn.scrollTo = function(e, t, n, o) {
let i = r(e);
return t && (i = (i || 0) + r(t)), void 0 !== i ? (o && this.finish(), this.scrollTop(i)) : this;
}), void 0 === t.scrollTo && (t.scrollTo = function(e, r, o, i) {
return t(n).scrollTo(e, r, o, i);
});
}(t.fn.scrollTo);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.makeJQueryPlugin = void 0, t.makeJQueryPlugin = n, t.default = n;
}).call(this, n(1));
}, function(e, t, n) {
var r, o;
!function(i, s) {
"use strict";
r = [ n(40) ], void 0 === (o = function(e) {
return s(i, e);
}.apply(t, r)) || (e.exports = o);
}("undefined" != typeof window ? window : this, function e(t, n) {
"use strict";
var r = t.jQuery, o = t.console;
function i(e, t) {
for (var n in t) e[n] = t[n];
return e;
}
var s = Array.prototype.slice;
function a(e) {
return Array.isArray(e) ? e : "object" == typeof e && "number" == typeof e.length ? s.call(e) : [ e ];
var t;
}
function u(e, t, n) {
if (!(this instanceof u)) return new u(e, t, n);
var s = e;
"string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = a(s), 
this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), 
n && this.on("always", n), this.getImages(), r && (this.jqDeferred = new r.Deferred()), 
setTimeout(this.check.bind(this))) : o.error("Bad element for imagesLoaded " + (s || e));
}
u.prototype = Object.create(n.prototype), u.prototype.options = {}, u.prototype.getImages = function() {
this.images = [], this.elements.forEach(this.addElementImages, this);
}, u.prototype.addElementImages = function(e) {
"IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
var t = e.nodeType;
if (t && l[t]) {
for (var n = e.querySelectorAll("img"), r = 0; r < n.length; r++) {
var o = n[r];
this.addImage(o);
}
if ("string" == typeof this.options.background) {
var i = e.querySelectorAll(this.options.background);
for (r = 0; r < i.length; r++) {
var s = i[r];
this.addElementBackgroundImages(s);
}
}
}
};
var l = {
1: !0,
9: !0,
11: !0
};
function c(e) {
this.img = e;
}
function f(e, t) {
this.url = e, this.element = t, this.img = new Image();
}
return u.prototype.addElementBackgroundImages = function(e) {
var t = getComputedStyle(e);
if (t) for (var n = /url\((['"])?(.*?)\1\)/gi, r = n.exec(t.backgroundImage); null !== r; ) {
var o = r && r[2];
o && this.addBackground(o, e), r = n.exec(t.backgroundImage);
}
}, u.prototype.addImage = function(e) {
var t = new c(e);
this.images.push(t);
}, u.prototype.addBackground = function(e, t) {
var n = new f(e, t);
this.images.push(n);
}, u.prototype.check = function() {
var e = this;
function t(t, n, r) {
setTimeout(function() {
e.progress(t, n, r);
});
}
this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(e) {
e.once("progress", t), e.check();
}) : this.complete();
}, u.prototype.progress = function(e, t, n) {
this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [ this, e, t ]), 
this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), 
this.options.debug && o && o.log("progress: " + n, e, t);
}, u.prototype.complete = function() {
var e = this.hasAnyBroken ? "fail" : "done";
if (this.isComplete = !0, this.emitEvent(e, [ this ]), this.emitEvent("always", [ this ]), 
this.jqDeferred) {
var t = this.hasAnyBroken ? "reject" : "resolve";
this.jqDeferred[t](this);
}
}, c.prototype = Object.create(n.prototype), c.prototype.check = function() {
var e;
this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), 
this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), 
this.img.addEventListener("load", this), this.img.addEventListener("error", this), 
this.proxyImage.src = this.img.src);
}, c.prototype.getIsImageComplete = function() {
return this.img.complete && this.img.naturalWidth;
}, c.prototype.confirm = function(e, t) {
this.isLoaded = e, this.emitEvent("progress", [ this, this.img, t ]);
}, c.prototype.handleEvent = function(e) {
var t = "on" + e.type;
this[t] && this[t](e);
}, c.prototype.onload = function() {
this.confirm(!0, "onload"), this.unbindEvents();
}, c.prototype.onerror = function() {
this.confirm(!1, "onerror"), this.unbindEvents();
}, c.prototype.unbindEvents = function() {
this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), 
this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
}, f.prototype = Object.create(c.prototype), f.prototype.check = function() {
var e;
this.img.addEventListener("load", this), this.img.addEventListener("error", this), 
this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), 
this.unbindEvents());
}, f.prototype.unbindEvents = function() {
this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
}, f.prototype.confirm = function(e, t) {
this.isLoaded = e, this.emitEvent("progress", [ this, this.element, t ]);
}, u.makeJQueryPlugin = function(e) {
(e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function(e, t) {
var n;
return new u(this, e, t).jqDeferred.promise(r(this));
});
}, u.makeJQueryPlugin(), u;
});
}, function(e, t, n) {
var r, o, i, s;
i = "undefined" != typeof window ? window : this, void 0 === (o = "function" == typeof (r = s = function() {
"use strict";
function e() {}
var t = e.prototype;
return t.on = function(e, t) {
if (e && t) {
var n = this._events = this._events || {}, r = n[e] = n[e] || [];
return -1 == r.indexOf(t) && r.push(t), this;
}
}, t.once = function(e, t) {
if (e && t) {
this.on(e, t);
var n = this._onceEvents = this._onceEvents || {}, r;
return (n[e] = n[e] || {})[t] = !0, this;
}
}, t.off = function(e, t) {
var n = this._events && this._events[e];
if (n && n.length) {
var r = n.indexOf(t);
return -1 != r && n.splice(r, 1), this;
}
}, t.emitEvent = function(e, t) {
var n = this._events && this._events[e];
if (n && n.length) {
n = n.slice(0), t = t || [];
for (var r = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
var i = n[o], s;
r && r[i] && (this.off(e, i), delete r[i]), i.apply(this, t);
}
return this;
}
}, t.allOff = function() {
delete this._events, delete this._onceEvents;
}, e;
}) ? r.call(t, n, t, e) : r) || (e.exports = o);
} ]);