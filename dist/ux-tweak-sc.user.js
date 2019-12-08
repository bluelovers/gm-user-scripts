// ==UserScript==
// @name		ux-tweak-sc
// @namespace	bluelovers
//
// @description	各種網站 UX 優化 與 搭配某些插件/行為時的簡化動作 並且適合搭配 Scrapbook 擷取內容
//
// @version		4.5.1
//
// @grant		GM.deleteValue
// @grant		GM.getValue
// @grant		GM.listValues
// @grant		GM.openInTab
// @grant		GM.registerMenuCommand
// @grant		GM.setClipboard
// @grant		GM.setValue
// @grant		GM.unregisterMenuCommand
// @grant		GM.xmlhttpRequest
// @grant		GM_deleteValue
// @grant		GM_getValue
// @grant		GM_listValues
// @grant		GM_openInTab
// @grant		GM_registerMenuCommand
// @grant		GM_setClipboard
// @grant		GM_setValue
// @grant		GM_unregisterMenuCommand
// @grant		GM_xmlhttpRequest
// @grant		unsafeWindow
// g_r_a_n_t		none
//
// @icon		https://wiki.greasespot.net/favicon.ico
//
// @noframes
// @encoding	utf-8
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/ux-tweak-sc.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/ux-tweak-sc.user.js
//
// @include		http*://www.2dfan.com/*
// @include		http*://www.3dmgame.com/*
// @include		http*://bbs.3dmgame.com/*
// @include		http*://tieba.baidu.com/*
// @include		http*://blog.reimu.net/*
// @include		http*://www.dlsite.com/*
// @include		http*://www.gamer.com.tw/*
// @include		http*://www.gamer.com.tw/index*.php*
// @include		http*://acg.gamer.com.tw/acgDetail.php?s=*
// @include		http*://gnn.gamer.com.tw/*.html
// @include		http*://gnn.gamer.com.tw/*k=*
// @include		http*://forum.gamer.com.tw/*bsn=*
// @include		http*://home.gamer.com.tw/*
// @include		http*://acg.gamer.com.tw/*
// @include		http*://m.gamer.com.tw/*
// @include		http*://ani.gamer.com.tw/*
// @include		http*://news.gamme.com.tw/*
// @include		http*://*.getchu.com/*
// @include		http*://*-forum.guildwars2.com/*
// @include		http*://wiki.guildwars2.com/*
// @include		http*://www.gw2bltc.com/*
// @include		http*://www.u2mtv.com/movie/*
// @include		http*://tw.movies.yahoo.com/*
// @include		http*://movies.yahoo.com.tw/*
// @include		http*://movies.yahoo.com.tw/movie_*.html
// @include		http*://*.qoo-app.com/*
// @include		http*://qtfy.eu/*
// @include		http*://www.reddit.com/r/*
// @include		http*://gw2.vsgames.cn/*
// @include		http*://*.vsgames.cn/*
// @include		http*://www.up01.cc/*
// @include		http*://www.epinv.com/*
// @include		http*://danbooru.donmai.us/*
// @include		http*://*.deviantart.com/*
// @include		http*://*.pixiv.net/*
// @include		http*://www.pixiv.net/search*
// @include		http*://www.pixivision.net/*
// @include		http*://www.ptt.cc/*
// @include		http*://blog.xuite.net/*
// @include		http*://dulfy.net/*
// @include		http*://www.jianshu.com/*
// @include		http*://juejin.im/*
// @include		http*://blog.oneapm.com/*
// @include		http*://steachs.com/*
// @include		http*://gitee.com/*
// @include		http*://gitee.com/api/*
// @include		http*://gitee.com/oauth/applications/*
// @include		http*://github.com/*
// @include		http*://greasyfork.org/*
// @include		https://www.npmjs.com/search?q=*
// @include		https://www.npmjs.com/~*
// @include		https://www.npmjs.com/browse/*
// @include		https://www.npmjs.com/package/*
// @include		https://www.npmjs.com/settings/*
// @include		http*://segmentfault.com/*
// @include		http*://sourceforge.net/projects/*/files/*
// @include		http*://stackoverflow.com/*
// @include		http*://superuser.com/*
// @include		http*://www.999comic.com/*
// @include		http://t.168girl.com/*
// @include		http*://www.alphapolis.co.jp/*
// @include		http*://lhscan.net/*
// @include		http*://book.dmm.co.jp/*
// @include		https://comic-walker.com/*
// @include		http*://www.comico.com.tw/*
// @include		http*://www.dm5.com/*
// @include		http*://*.dmzj.com/*
// @include		https://i.dmzj.com/*
// @include		http*://manhua.dmzj.com/*
// @include		http*://exhentai.org/*
// @include		http*://g.e-hentai.org/*
// @include		http*://e-hentai.org/*
// @include		http*://*.ikanman.com/*
// @include		http*://*.manhuagui.com/*
// @include		http*://lhscans.com/*
// @include		http*://www.manben.com/*
// @include		http*://www.manhuaren.com/*
// @include		http*://nhentai.net/*
// @include		http*://www.rawdevart.com/*
// @include		http*://*.wnacg.com/*
// @include		http*://*.wnacg.org/*
// @include		http*://wnacg.com/*
// @include		http*://wnacg.org/*
// @include		http*://smp*.yoedge.com/*
// @include		http*://www.fun01.cc/*
// @include		http*://cwn.ling.sinica.edu.tw/*
// @include		http*://cwn.ling.sinica.edu.tw/query1.htm*
// @include		http*://cwn.ling.sinica.edu.tw/_process.asp*
// @include		http*://cwn.ling.sinica.edu.tw/input.asp*
// @include		http*://dict.revised.moe.edu.tw/*
// @include		http*://dict.revised.moe.edu.tw/cbdic/search.htm*
// @include		http*://www.esjzone.cc/*
// @include		http*://*.lightnovel.cn/*
// @include		http*://*.lightnovel.cn/*mod=viewthread*
// @include		http*://masiro.moe/*
// @include		http*://masiro.moe/*mod=viewthread*
// @include		http*://syosetu.com/*
// @include		http*://www.wenku8.com/*
// @include		http*://www.jetbrains.com/*
// @include		http*://www.jetbrains.org/*
// @include		http*://intellij-support.jetbrains.com/*
// @include		http*://plugins.jetbrains.com/*
// @include		http*://mall.pchome.com.tw/*
// @include		http://www.kerrytj.com/zh/search/search_track.aspx*
// @include		http://postserv.post.gov.tw/pstmail/main_mail.html*
// @include		http*://tw.buy.yahoo.com/*
// @include		http*://tw.buy.yahoo.com/bestbuy/*
// @include		http*://tw.buy.yahoo.com/activity/*
// @include		https://tw.search.buy.yahoo.com/search/shopping/*
// @include		https://twpay.buy.yahoo.com/checkout/preview*
// @include		https://tw.buy.yahoo.com/coupons*
// @include		http*://tw.mall.yahoo.com/*
// @include		http*://tw.user.mall.yahoo.com/my/*
// @include		https://tw.search.mall.yahoo.com/*
// @include		http*://www.facebook.com/*
// @include		http*://www.facebook.com/saved/*
// @include		http*://www.weibo.com/*
// @include		http*://m.weibo.cn/*
// @include		http*://www.jandown.com/*
// @include		http*://sukebei.nyaa.si/*
// @include		http*://*.wikipedia.org/*
// @include		http*://encrypted.google.com/*
// @include		http*://www.google.co.jp/*
// @include		http*://*.google.*/blank.html
// @include		http*://*.google.*/search*
// @include		http*://*.google.*/imgres*
//
// @match		*://*.bdimg.com/safecheck/*
// @match		*://tieba.baidu.com/i/i/my_tie*
// @match		*://tieba.baidu.com/i/i/my_reply*
// @match		*://tieba.baidu.com/i/i/atme*
// @match		*://tieba.baidu.com/i/i/storethread*
// @match		*://tieba.baidu.com/pmc/*
// @match		*://tieba.baidu.com/photo/*
// @match		*://www.u2mtv.com/*
// @match		*://nl.syosetu.com/*
// @match		*://ncode.syosetu.com/*
// @match		*://novel18.syosetu.com/*
// @match		*://nkx.syosetu.com/*
// @match		*://wetransfer.com/*
// @match		*://share.dmhy.org/*
// @match		*://*.moegirl.org/*
//
// @exclude		http*://gc.bahamut.com.tw/*
// @exclude		http*://*.bahamut.com.tw/*
// @exclude		http*://*.bahamut.com.tw/js/*
// @exclude		http*://*.pixiv.net/novel/*
// @exclude		http*://www.facebook.com/ajax/*
// @exclude		http*://www.facebook.com/*plugins/*
// @exclude		http*://staticxx.facebook.com/*
// @exclude		http*://notifications.google.com/*
// @exclude		http*://platform.twitter.com/widgets*
// @exclude		http*://apis.google.com/*
//
// ==/UserScript==
!function(e) {
var t = {};
function n(a) {
if (t[a]) return t[a].exports;
var r = t[a] = {
i: a,
l: !1,
exports: {}
};
return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
}
n.m = e, n.c = t, n.d = function(e, t, a) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: a
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
var a = Object.create(null);
if (n.r(a), Object.defineProperty(a, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function(t) {
return e[t];
}.bind(null, r));
return a;
}, n.n = function(e) {
var t = e && e.__esModule ? function t() {
return e.default;
} : function t() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "", n(n.s = 20);
}([ function(e, t, n) {
"use strict";
(function(e) {
Object.defineProperty(t, "__esModule", {
value: !0
}), console["groupCollapsed" in console ? "groupCollapsed" : "group"]("before");
let a = {};
const r = !1;
try {
a.$ = unsafeWindow.$, a.jQuery = unsafeWindow.jQuery;
} catch (e) {
console.error(e);
}
console.groupEnd("before");
const i = n(147), o = i.noConflict(!0);
t.jQuery = o, t.$ = o, window.self.$ = window.self.jQuery = o, t.default = o, console["groupCollapsed" in console ? "groupCollapsed" : "group"]("after");
try {} catch (e) {
console.error(e);
}
console.groupEnd("after"), console["groupCollapsed" in console ? "groupCollapsed" : "group"]("end");
try {
a.$ && a.$ !== unsafeWindow.self.$ && (unsafeWindow.self.$ = a.$), a.jQuery && a.jQuery !== unsafeWindow.self.jQuery && (unsafeWindow.self.jQuery = a.jQuery);
} catch (e) {
console.error(e);
}
function s(e, n) {
console["groupCollapsed" in console ? "groupCollapsed" : "group"](e);
try {
console.info(e, n), null === n ? (console.info("$", t.$, t.$ && t.$.fn && t.$.fn.jquery), 
console.info("jQuery", o, o && o.fn && o.fn.jquery)) : (console.info(`${e}.$`, n.$, n.$ && n.$.fn && n.$.fn.jquery), 
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
(function(t) {
e.exports = function e(n, a, r) {
if (Array.isArray(n)) {
let e = t();
t.each(n, function(t, n) {
e = e.add(n);
}), n = e;
}
return n = (n = a ? t(n, a) : t(n)).filter("a[href]").not('[href^="javascript:"], [href^="#"], [href=""]');
};
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
function a(e, t, n, a) {
var r, i = !1, o = 0;
function s() {
r && clearTimeout(r);
}
function u() {
s(), i = !0;
}
function c() {
var u = this, c = Date.now() - o, l = arguments;
function d() {
o = Date.now(), n.apply(u, l);
}
function p() {
r = void 0;
}
i || (a && !r && d(), s(), void 0 === a && c > e ? d() : !0 !== t && (r = setTimeout(a ? p : d, void 0 === a ? e - c : e)));
}
return "boolean" != typeof t && (a = n, n = t, t = void 0), c.cancel = u, c;
}
function r(e, t, n) {
return void 0 === n ? a(e, t, !1) : a(e, n, !1 !== t);
}
n.r(t), n.d(t, "throttle", function() {
return a;
}), n.d(t, "debounce", function() {
return r;
});
}, function(e, t, n) {
"use strict";
function a(e, t) {
e.stopPropagation(), t || e.preventDefault();
}
function r(e, t) {
e.stopImmediatePropagation(), t || e.preventDefault();
}
Object.assign(a, {
_uf_done: a,
_uf_done2: r,
default: a
}), e.exports = a;
}, function(e, t, n) {
"use strict";
(function(t, n) {
e.exports.packEvent = function(e, a = t.window, r = ":input") {
return function(t, ...a) {
let i = this, o;
if (!n(document.activeElement).is(r)) {
let r;
return n.proxy(e, i, t, ...a)();
}
};
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(153), r = a.Minimatch;
function i(e, t, n = {}) {
n = o(n);
let r = !1;
for (let i of t) if (i = i.replace(/\*/g, "**"), r = a(e, i, n)) break;
return r;
}
function o(e) {
return Object.assign({}, {
nocase: !0,
dot: !0
}, e);
}
function s(e, t, n = {}) {
n = o(n);
let a = !1;
return !(t.metadata.nomatch && t.metadata.nomatch.length && i(e, t.metadata.nomatch, n)) && !(t.metadata.exclude && t.metadata.exclude.length && i(e, t.metadata.exclude, n)) && (t.metadata.include && t.metadata.include.length && (a = i(e, t.metadata.include, n)), 
!a && t.metadata.match && t.metadata.match.length && (a = !!u(e, t.metadata.match)), 
a);
}
function u(e, t, n) {
if (Array.isArray(t)) {
for (let a of t) {
let t = u(e, a, n);
if (t) return t;
}
return null;
}
let a = t.match(/^((?:[^\/]+):\/\/)?([^\/]+)?(\/.*)?$/);
if (a) {
let t = new RegExp("^(?:(https?|file|ftp):\\/\\/)?(" + (c(a[2]) ? "" : a[2]).replace(/\*/g, "[^\\/]+").replace(/\./g, "\\.") + ")(" + (c(a[3]) ? "/" : a[3]).replace(/^(\/)$/, "$1?").replace(/^(\/)(\*)$/, "(?:$1?|$1$2)").replace(/\*/g, ".*") + ")" + (n ? "(?:\\?.*)?" : "") + "(?:#.*)?$");
if (a = t.exec(e)) return {
scheme: a[1],
host: a[2],
path: a[3],
source: e,
regexp: t
};
}
return null;
}
function c(e) {
return void 0 === e;
}
t.match = i, t.option = o, t.auto = s, t.matchChrome = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.default = i;
for (var a = {
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
}, r = 1; r < 20; r++) a["f" + r] = 111 + r;
function i(e) {
return "string" == typeof e ? o(e) : "number" == typeof e ? s(e) : void 0;
}
function o(e) {
var t = a[e.toLowerCase()];
return void 0 !== t ? t : 1 === e.length ? e.toUpperCase().charCodeAt(0) : void 0;
}
function s(e) {
for (var t in a) if (a.hasOwnProperty(t) && a[t] === e) return t;
return String.fromCharCode(e).toLowerCase();
}
e.exports = t.default;
}, function(e, t, n) {
"use strict";
(function(e, a) {
function r(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), r(n(9));
const i = n(9);
function o(t, n) {
return Array.isArray(t) && (t = t.join("")), "string" == typeof n && (n = e(n)), 
"object" == typeof n && n.length && "object" == typeof n[0] && (n = n[0]), i.GM_addStyle(t.toString(), n);
}
function s(t, n) {
return "object" == typeof t && t.webfont && (t = t.webfont), e(`<link rel="stylesheet" href="${t.toString()}"/>`).appendTo(n || e("header, body").eq(0));
}
function u(e, ...t) {
return console.info(`%c[${a.userScript.id}][debug]`, "color: #4B90C2;", e, ...t);
}
function c(e, ...t) {
return console.error(`%c[${a.userScript.id}][error]`, "color: red;", e, ...t);
}
function l(e, ...t) {
return console.info(`%c[${a.userScript.id}][info]`, "color: #ccc;", e, ...t);
}
function d(e, ...t) {
return console.log(e, ...t);
}
function p(e) {
let t = window.open(e, "_blank");
return setTimeout(function() {
window.focus();
}, 300), t;
}
t.GM_addStyle = o, t.addStylesheet = s, t.debug = u, t.error = c, t.info = l, t.log = d, 
t.openInTabBackground = p, t.default = t;
}).call(this, n(0).default, n(1));
}, function(e, t, n) {
"use strict";
function a(e, t) {
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
}), t.GM_addStyle = a, t.default = t;
}, function(e, t, n) {
"use strict";
(function(t) {
let n = {
toCss(e = {}, n = {}) {
let a = t("<div/>");
Array.isArray(e) ? e.forEach(function(e) {
a.css(e);
}) : a.css(e);
let r = [];
return r.push(a.attr("style") || ""), a.removeAttr("style"), Array.isArray(n) ? n.forEach(function(e) {
a.css(e);
}) : a.css(n), r.push((a.attr("style") || "").replace(/;/g, " !important;")), a.remove(), 
r.join(";");
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
(function(e, a) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(9);
function i(t, n, a = {}) {
let i = [ "dragstart", "contextmenu", "selectstart", "mousedown", "mouseup", "source", "copy", "selectstart", "select" ], o = [ "unbind", "die", "off" ], s, u;
if (unsafeWindow && unsafeWindow.jQuery ? (s = unsafeWindow.jQuery, u = unsafeWindow.jQuery(n).add("body, html").add(unsafeWindow.document).add(unsafeWindow)) : window.jQuery ? (s = window.jQuery, 
u = window.jQuery(n).add("body, html").add(window.document).add(window)) : (s = e, 
u = e(n).add("body, html").add(document).add(window)), t > 1) {
let e = s("style#_uf_disable_nocontextmenu");
e.length || (e = r.default.GM_addStyle("* { -moz-user-select: auto !important; -webkit-user-select: auto !important; -ms-user-select: auto !important; user-select: auto !important; }"), 
s(e).prop("id", "_uf_disable_nocontextmenu"));
}
let c = e(n).add("body, html").add(unsafeWindow.document).add(unsafeWindow);
c.css({
"user-select": "auto"
}), a.types && (i = i.concat(a.types)), i.forEach(e => {
c.removeAttr(`on${e}`), t && (c.prop(`on${e}`, null), o.forEach(t => {
try {
c[t] && c[t](e);
} catch (e) {
console.error(e, t);
}
if (s.fn[t]) try {
u[t](e);
} catch (e) {
console.error(e, t);
}
}));
});
}
function o(e, t) {
var n = [ a ], r, i, o;
e > 1 && (a("style#_uf_disable_nocontextmenu").length, unsafeWindow.$ && unsafeWindow.$.fn && unsafeWindow.$.fn.jquery && (r = unsafeWindow.$, 
n[n.length] = r));
var s = function(e, t, n, r) {
e.fn[n] && a.each(r, function(e, a) {
try {
t[n](a);
} catch (e) {
console.error(e);
}
});
}, u = [ "dragstart", "contextmenu", "selectstart", "mousedown", "mouseup", "source" ];
a.each(n, function(n, a) {
var r = a("body, html");
t && (r = r.add(t));
try {
r.removeAttr("ondragstart").removeAttr("oncontextmenu").removeAttr("onselectstart").removeAttr("onmousedown").removeAttr("onmouseup").removeAttr("onsource").css({
"-moz-user-select": "auto",
"-webkit-user-select": "auto",
"-ms-user-select": "auto",
"user-select": "auto"
});
} catch (e) {
console.error(e);
}
e && (r.each(function() {
try {
this.oncontextmenu = this.ondragstart = this.onselectstart = this.onmousedown = this.onmouseup = this.onsource = null;
} catch (e) {
console.error(e);
}
}), a.fn.unbind && s(a, r, "unbind", u), a.fn.die && s(a, r, "die", u), a.fn.off && s(a, r, "off", u));
});
}
t._uf_disable_nocontextmenu2 = i, t._uf_disable_nocontextmenu = o, t.default = i;
}).call(this, n(0).default, n(0).default);
}, function(e, t, n) {
"use strict";
(function(e) {
function n(t, n, r, i) {
let o = e(t), s;
return e.isPlainObject(n) && e.isNumeric(n.width) ? n = e("<div/>").width(n.width).height(void 0 !== n.height ? n.height : n.width) : e.isArray(n) && e.isNumeric(n[0]) && (n = e("<div/>").width(n[0]).height(void 0 !== n[1] ? n[1] : n[0])), 
!0 === n || n == t || n == o ? (i = null, s = !0) : s = n || window, !i || !0 === s || void 0 === i.width && void 0 === i.height || !i.width && !i.height ? i = null : ("auto" == i && (i.width = "auto", 
i.height = "auto"), i.width = i.width || 0, i.height = i.height || 0), o.each(function() {
let t = e(this), n = e(!0 === s ? this : s), o = t[0].naturalWidth, u = t[0].naturalHeight;
o && u || (o = t.width(), u = t.height());
let c = n.width(), l = n.height();
i && (c = "auto" == i.width ? n.innerWidth() : c - i.width, l = "auto" == i.height ? n.innerHeight() : l - i.height);
let d = o, p = u;
if (o > c) d = c, (p = u * (c / o)) > l && (d *= l / p, p = l); else if (r > 1) {
let e;
d *= a(o, u), p = l;
} else (r || u > l) && (p = l, (d = o * (l / u)) > c && (d = c, p = u * (c / o)));
t.height(p).width(d), t.attr({
"data-naturalHeight": u,
"data-naturalWidth": o,
"data-height": p,
"data-width": d
});
}), o;
}
function a(e, t) {
return e / t;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t._uf_fixsize2 = n, t.default = n, t.calc_scale = a;
}).call(this, n(0).default);
}, function(e, t, n) {
e.exports.id = "ux-tweak-sc", e.exports.version = "", e.exports.name = "ux-tweak-sc", 
e.exports.name_en = "ux-tweak-sc", e.exports.name_ja = "ux-tweak-sc", e.exports.desc = "", 
e.exports.desc_en = "", e.exports.desc_ja = "", e.exports.namespace = "", e.exports.author = "", 
e.exports.icon = "", e.exports.list = [ "acg/2dfan", "acg/3dmgame", "acg/baidu/safecheck", "acg/baidu/tieba", "acg/blog.reimu.net", "acg/dlsite", "acg/gamer.com.tw", "acg/gamme", "acg/getchu", "acg/guildwars2/forum.2017", "acg/guildwars2/wiki", "acg/gw2bltc", "acg/movie/u2mtv", "acg/movie/yahoo", "acg/qoo-app", "acg/qtfy.eu", "acg/reddit", "acg/vsgames", "adult/up01", "anti-adblock/epinv", "art/danbooru.donmai.us", "art/deviantart", "art/pixiv", "art/pixivision", "bbs/ptt", "blog/blog.xuite", "blog/dulfy", "blog/jianshu", "blog/juejin.im", "blog/oneapm", "blog/steachs", "code/gitee", "code/github", "code/greasyfork", "code/npmjs", "code/segmentfault", "code/sourceforge", "code/stackoverflow", "comic/999comic", "comic/alphapolis.co.jp", "comic/backup/lhscan", "comic/book.dmm.co.jp", "comic/comic-walker", "comic/comico", "comic/dm5", "comic/dmzj", "comic/exhentai", "comic/ikanman", "comic/lhscans", "comic/manben", "comic/manhuaren", "comic/nhentai", "comic/rawdevart", "comic/wnacg", "comic/yoedge", "content/farm/fun01.cc", "dict/edu/cwn.ling.sinica", "dict/edu/dict.revised.moe", "novel/esjzone", "novel/lightnovel.cn", "novel/masiro.moe", "novel/syosetu", "novel/wenku8", "other/jetbrains/jetbrains", "p2p/wetransfer", "shop/pchome", "shop/post/kerrytj", "shop/post/post/gov/tw/pstmail", "shop/yahoo/buy", "shop/yahoo/mall", "social/facebook", "social/weibo", "torrent/dmhy", "torrent/jandown", "torrent/nyaa", "wiki/moegirl", "wiki/wikipedia", "google/search", "global/discuz", "global/mediawiki", "global/video", "global/pagination", "global/pagination/page", "global/pagination/pagination.active", "global/pagination/srp_pagination", "global/social", "_fake" ], 
e.exports.list_disable = [ "acg/dmm", "acg/guildwars2/forum", "google/drive", "novel/iqing" ], 
e.exports._lib = (() => {
n(21), n(22), n(23), n(24), n(26), n(27), n(28), n(29), n(30), n(31), n(32), n(33), 
n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(44), n(46), 
n(47), n(48), n(49), n(50), n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58), 
n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), 
n(71), n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81), n(82), 
n(83), n(84), n(85), n(86), n(87), n(88), n(89), n(90), n(91), n(92), n(93), n(94), 
n(95), n(96), n(97), n(98), n(99), n(100), n(16), n(101), n(102), n(103), n(104), 
n(105), n(106), n(107), n(108);
}), e.exports.metadata = {}, e.exports.metadata.include = [ "http*://www.2dfan.com/*", "http*://www.3dmgame.com/*", "http*://bbs.3dmgame.com/*", "http*://tieba.baidu.com/*", "http*://blog.reimu.net/*", "http*://www.dlsite.com/*", "http*://www.gamer.com.tw/*", "http*://www.gamer.com.tw/index*.php*", "http*://acg.gamer.com.tw/acgDetail.php?s=*", "http*://gnn.gamer.com.tw/*.html", "http*://gnn.gamer.com.tw/*k=*", "http*://forum.gamer.com.tw/*bsn=*", "http*://home.gamer.com.tw/*", "http*://acg.gamer.com.tw/*", "http*://m.gamer.com.tw/*", "http*://ani.gamer.com.tw/*", "http*://news.gamme.com.tw/*", "http*://*.getchu.com/*", "http*://*-forum.guildwars2.com/*", "http*://wiki.guildwars2.com/*", "http*://www.gw2bltc.com/*", "http*://www.u2mtv.com/movie/*", "http*://tw.movies.yahoo.com/*", "http*://movies.yahoo.com.tw/*", "http*://movies.yahoo.com.tw/movie_*.html", "http*://*.qoo-app.com/*", "http*://qtfy.eu/*", "http*://www.reddit.com/r/*", "http*://gw2.vsgames.cn/*", "http*://*.vsgames.cn/*", "http*://www.up01.cc/*", "http*://www.epinv.com/*", "http*://danbooru.donmai.us/*", "http*://*.deviantart.com/*", "http*://*.pixiv.net/*", "http*://www.pixiv.net/search*", "http*://www.pixivision.net/*", "http*://www.ptt.cc/*", "http*://blog.xuite.net/*", "http*://dulfy.net/*", "http*://www.jianshu.com/*", "http*://juejin.im/*", "http*://blog.oneapm.com/*", "http*://steachs.com/*", "http*://gitee.com/*", "http*://gitee.com/api/*", "http*://gitee.com/oauth/applications/*", "http*://github.com/*", "http*://greasyfork.org/*", "https://www.npmjs.com/search?q=*", "https://www.npmjs.com/~*", "https://www.npmjs.com/browse/*", "https://www.npmjs.com/package/*", "https://www.npmjs.com/settings/*", "http*://segmentfault.com/*", "http*://sourceforge.net/projects/*/files/*", "http*://stackoverflow.com/*", "http*://superuser.com/*", "http*://www.999comic.com/*", "http://t.168girl.com/*", "http*://www.alphapolis.co.jp/*", "http*://lhscan.net/*", "http*://book.dmm.co.jp/*", "https://comic-walker.com/*", "http*://www.comico.com.tw/*", "http*://www.dm5.com/*", "http*://*.dmzj.com/*", "https://i.dmzj.com/*", "http*://manhua.dmzj.com/*", "http*://exhentai.org/*", "http*://g.e-hentai.org/*", "http*://e-hentai.org/*", "http*://*.ikanman.com/*", "http*://*.manhuagui.com/*", "http*://lhscans.com/*", "http*://www.manben.com/*", "http*://www.manhuaren.com/*", "http*://nhentai.net/*", "http*://www.rawdevart.com/*", "http*://*.wnacg.com/*", "http*://*.wnacg.org/*", "http*://wnacg.com/*", "http*://wnacg.org/*", "http*://smp*.yoedge.com/*", "http*://www.fun01.cc/*", "http*://cwn.ling.sinica.edu.tw/*", "http*://cwn.ling.sinica.edu.tw/query1.htm*", "http*://cwn.ling.sinica.edu.tw/_process.asp*", "http*://cwn.ling.sinica.edu.tw/input.asp*", "http*://dict.revised.moe.edu.tw/*", "http*://dict.revised.moe.edu.tw/cbdic/search.htm*", "http*://www.esjzone.cc/*", "http*://*.lightnovel.cn/*", "http*://*.lightnovel.cn/*mod=viewthread*", "http*://masiro.moe/*", "http*://masiro.moe/*mod=viewthread*", "http*://syosetu.com/*", "http*://www.wenku8.com/*", "http*://www.jetbrains.com/*", "http*://www.jetbrains.org/*", "http*://intellij-support.jetbrains.com/*", "http*://plugins.jetbrains.com/*", "http*://mall.pchome.com.tw/*", "http://www.kerrytj.com/zh/search/search_track.aspx*", "http://postserv.post.gov.tw/pstmail/main_mail.html*", "http*://tw.buy.yahoo.com/*", "http*://tw.buy.yahoo.com/bestbuy/*", "http*://tw.buy.yahoo.com/activity/*", "https://tw.search.buy.yahoo.com/search/shopping/*", "https://twpay.buy.yahoo.com/checkout/preview*", "https://tw.buy.yahoo.com/coupons*", "http*://tw.mall.yahoo.com/*", "http*://tw.user.mall.yahoo.com/my/*", "https://tw.search.mall.yahoo.com/*", "http*://www.facebook.com/*", "http*://www.facebook.com/saved/*", "http*://www.weibo.com/*", "http*://m.weibo.cn/*", "http*://www.jandown.com/*", "http*://sukebei.nyaa.si/*", "http*://*.wikipedia.org/*", "http*://encrypted.google.com/*", "http*://www.google.co.jp/*", "http*://*.google.*/blank.html", "http*://*.google.*/search*", "http*://*.google.*/imgres*" ], 
e.exports.metadata.match = [ "*://*.bdimg.com/safecheck/*", "*://tieba.baidu.com/i/i/my_tie*", "*://tieba.baidu.com/i/i/my_reply*", "*://tieba.baidu.com/i/i/atme*", "*://tieba.baidu.com/i/i/storethread*", "*://tieba.baidu.com/pmc/*", "*://tieba.baidu.com/photo/*", "*://www.u2mtv.com/*", "*://nl.syosetu.com/*", "*://ncode.syosetu.com/*", "*://novel18.syosetu.com/*", "*://nkx.syosetu.com/*", "*://wetransfer.com/*", "*://share.dmhy.org/*", "*://*.moegirl.org/*" ], 
e.exports.metadata.exclude = [ "http*://gc.bahamut.com.tw/*", "http*://*.bahamut.com.tw/*", "http*://*.bahamut.com.tw/js/*", "http*://*.pixiv.net/novel/*", "http*://www.facebook.com/ajax/*", "http*://www.facebook.com/*plugins/*", "http*://staticxx.facebook.com/*", "http*://notifications.google.com/*", "http*://platform.twitter.com/widgets*", "http*://apis.google.com/*" ], 
e.exports.metadata.grant = [ "GM.deleteValue", "GM.getValue", "GM.listValues", "GM.openInTab", "GM.registerMenuCommand", "GM.setClipboard", "GM.setValue", "GM.unregisterMenuCommand", "GM.xmlhttpRequest", "GM_deleteValue", "GM_getValue", "GM_listValues", "GM_openInTab", "GM_registerMenuCommand", "GM_setClipboard", "GM_setValue", "GM_unregisterMenuCommand", "GM_xmlhttpRequest", "unsafeWindow" ], 
e.exports.list_script = [ "global/discuz", "global/mediawiki", "global/video", "global/pagination", "global/pagination/page", "global/pagination/pagination.active", "global/pagination/srp_pagination" ], 
e.exports.current = [], e.exports.default = e.exports;
}, function(e, t, n) {
(function(e) {
var t;
(t = e).expr[":"].onScreen = function(e) {
var n = t(window), a = n.scrollTop(), r = n.innerHeight(), i = a + r, o = t(e), s = o.offset().top, u = o.height(), c = s + u;
return s >= a && s < i || c > a && c <= i || u > r && s <= a && c >= i;
};
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(138);
function r(e, t = RegExp, n) {
if (!e || "string" != typeof e || 1 != e.length) throw new TypeError(`"${e}" not a valid flag`);
let r = null;
try {
!n && a.FlagsPattern[e] ? r = i(e, t) : (new t("", e), r = !0);
} catch (e) {
r = !1;
}
return r;
}
function i(e, t = RegExp, n = a.FlagsPattern) {
return !(!n[e] || !n[e].length) && !0 === n[e].every(function(n) {
let [a, r, i, o] = n, s, c = u(a, e, t);
return s = o ? "function" == typeof o ? o(c, i, r, a, t, e) : c[o](r) === i : c.test(r) === i;
});
}
t.FlagsName = a.default, t.hasSupportFlag = r, t.testFlag = i;
const o = n(15);
function s(e = RegExp, t) {
let n = {};
for (let a = 65; a <= 90; a++) {
let i = String.fromCharCode(a), o = String.fromCharCode(a + 32);
n[i] = r(i, e, t), n[o] = r(o, e, t);
}
let a = [ "g", "i", "m", "s", "u", "y" ];
return n = Object.keys(n).sort().reduce(function(e, t) {
return (n[t] || a.includes(t)) && (e[t] = n[t]), e;
}, {});
}
function u(e, t, n = RegExp) {
let a;
return a = "function" == typeof n.create ? n.create(e, t) : new n(e, t);
}
t.default = o, t.testFlagsAll = s, t.createRegExp = u;
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e) {
let t = a("#my_amupper");
if (t.length) return t[0].click(), !0;
}
e.exports = {
priority: 100,
script: !0,
script_method: {
clearly: !0
},
metadata: {
include: [],
exclude: []
},
test: (e = t._url_obj) => !!a(".discuz_tips, body#nv_forum").length && 2,
main(e = t._url_obj) {
const i = n(12)._uf_fixsize2;
let o = a("ignore_js_op img[zoomfile], ignore_js_op img[file]", ".t_f, .t_fsz").not("[data-done]").attr("data-done", !0).each(function() {
let e = a(this), t = e.attr("zoomfile") || e.attr("file");
t && t != e.prop("src") && e.prop("src", t), e.imagesLoaded().done(function(t) {
i(e, e.attr("width") ? e : e.parents(".t_f, .t_fsz").eq(0));
});
});
a(window).on("load.amupper", function() {
r(e);
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add(a(".favatar > *:has(.avatar), .favatar > .avatar").nextAll()).add([ "#f_pst, body > #ft, #scrolltop, #newspecial, #post_replytmp, #post_reply, #newspecialtmp", "body > #hd, body > .hd_table, #myprompt_menu, #toptb, #append_parent", "body :hidden, script, iframe, embed", '.t_f img[src*="image/smiley"], .authicn, .vwthd .xg1, .vwthd .y', ".plc #fj, .plc .pob, #p_btn, .nvhm, .authi .none" ].join()), 
a("#postlist .vwthd:eq(0) h1").prependTo("#postlist .plhin .plc:eq(0)"), r;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
const a = n(122);
e.exports = a;
}, function(e, t, n) {
"use strict";
(function(t) {
e.exports.makeJQueryPlugin = ((e = t.jQuery, n = t.window) => {
e.fn.events = function() {
return e._data(this.get(0), "events");
}, e.fn.eventExists = function(t, n) {
let a = e(this).events();
if (a && a[t] && a[t].length) {
if (void 0 === n) return !0;
for (let e of a[t]) if (e.namespace === n) return !0;
}
return !1;
};
});
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
var a;
!function(e) {
const t = n(133);
function a(...e) {
return e.length > 1 ? r(e) : r(e[0]);
}
function r(e, t = {}) {
if (!Array.isArray(e)) throw new TypeError(`Expected an Array but got ${typeof e}.`);
const n = s(t);
if (t.overwrite) {
let t = e.length;
for (;t--; ) {
let a;
n(e[t], t, e) || e.splice(t, 1);
}
return e;
}
return e.filter(n);
}
function i(...e) {
return e.length > 1 ? o(e) : o(e[0]);
}
function o(e, t = {}) {
let n;
return r(e, Object.assign({}, t, {
overwrite: !0
}));
}
function s(e = {}) {
const t = e.checker || u, n = e.filter || null, a = (e, a, r) => {
let i;
return r.findIndex(n => t(n, e, r, r)) == a && (!n || n(e));
};
return a;
}
function u(e, n, a, r) {
return t(e, n);
}
e.lazy_unique = a, e.array_unique = r, e.lazy_unique_overwrite = i, e.array_unique_overwrite = o, 
e.defaultFilter = s, e.defaultChecker = u;
}(a || (a = {})), a = a.lazy_unique = Object.assign(a.lazy_unique, a, t, {
equals: n(133),
default: a.lazy_unique
}), t.default = a, Object.defineProperty(a, "__esModule", {
value: !0
}), Object.keys(a).forEach(e => {
try {
a[e] = Object.freeze(a[e]);
} catch (e) {}
}), a = Object.freeze(a), e.exports = a;
}, function(e, t, n) {
"use strict";
(function(t, a, r) {
e.exports.id = "ux-tweak-sc", e.exports.name = e.exports.id;
const i = n(109);
function o(e, t, a, r, o, u) {
let c;
i.init(e, t, a, r, o, u), n(248).makeJQueryPlugin(o), n(250).makeJQueryPlugin(o), 
n(251).makeJQueryPlugin(o), s();
}
function s() {
const t = n(128);
t.registerMenuCommand({
id: e.exports.name,
key: "disable_nocontextmenu"
}, e => {
n(11)._uf_disable_nocontextmenu2(2);
}), t.registerMenuCommand({
id: e.exports.name,
key: "clearly"
}, async i => {
let o = n(252)(`./${e.exports.id}`);
if (o.current && o.current.length) {
const s = t.getLabel(i);
let u = a(), c = null, l = n(109).get_list_script(e.exports.id, o, r._url_obj);
{
let e = [];
for (let t of l) if (!e.includes(t.name)) {
e.push(t.name);
for (let e of [ "adblock", "clearly" ]) if ("function" == typeof t.lib[e]) {
let n = await t.lib[e](r._url_obj, u);
n && !0 !== n && ("clearly" == e && n.length && (u = n), console.info(s, t.name, e, [ n.length, n ], [ u.length, u ]));
}
}
}
console.info(s, [ u.length, u ]), u.remove();
}
});
}
i.run(e.exports.id, e.exports, t, o);
}).call(this, n(0).default, n(0).default, n(1));
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.2dfan.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/2dfan\.com/),
main(r = t._url_obj) {
const i = n(2);
i("").prop("target", "_blank"), e.exports.adblock(r), a("img.media-object[data-normal]").attr("src", function() {
return a(this).attr("data-normal");
});
},
adblock(e = t._url_obj) {
a(".popadv-container").remove();
},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([ ".well:has(> .jiathis_style)", ".comments .media-object, .avatar", "#comments-container .form-actions", "footer, .site-search, body > .navbar, iframe, body :hidden", ".control-group > .rating", "#similars img", "#reviews", "#content .block-content:has(> .breadcrumb.subject-crumb)" ].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.3dmgame.com/*", "http*://bbs.3dmgame.com/*" ],
exclude: []
},
test: e => !!e.host.match(/3dmgame\.com/),
main(e) {
n(16).main(e);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, r = null) {
const i = n(9);
let o = a(r);
return o = o.add([ ".avatar", ".pct > img.image" ].join()), i.GM_addStyle([ ".pl .quote blockquote { background-image: none; }" ].join("")), 
o;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [],
match: [ "*://*.bdimg.com/safecheck/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2);
r([].join(",")).prop("target", "_blank"), a('.warning_wrap .warning_info .btn[rel*="nofollow"]').each(function() {
window.location.href = a(this).prop("href");
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a, r) {
let i = {
metadata: {
include: [ "http*://tieba.baidu.com/*" ],
match: [ "*://tieba.baidu.com/i/i/my_tie*", "*://tieba.baidu.com/i/i/my_reply*", "*://tieba.baidu.com/i/i/atme*", "*://tieba.baidu.com/i/i/storethread*", "*://tieba.baidu.com/pmc/*", "*://tieba.baidu.com/photo/*" ],
exclude: [],
grant: [ "GM_setClipboard" ]
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(17).GMApi, d = n(2), p = n(111), h = await Promise.resolve().then(() => n(25));
a(window).on("load.link", function() {
d([ ".u_itieba a, .u_news a, .u_username a, .com_userbar a, #j_u_username a" ]).attr("target", "_blank"), 
a(".u_itieba a, .u_news a, .u_username a, .com_userbar a, #j_u_username a").attr("target", "_blank");
}).triggerHandler("load.link"), a("body").on("hover", "#j_u_username, .u_username, .u_username li, .u_ddl_con_top", function() {
a(window).triggerHandler("load.link");
}), r.GM_addStyle([ ".d_post_content { line-height: 1.45em; }", ".d_post_content_main { background: transparent; }", ".tbui_aside_float_bar { opacity: 0.5; } \n\t\t\t\t\t.tbui_aside_float_bar:hover { opacity: 0.8; }", "@media only screen and (max-width: 1200px)\n\t\t\t\t\t{\n\t\t\t\t\t\n\t\t\t\t\t.right_section { display: none; }\n\t\t\t\t\t.left_section { float: none; margin: auto; }\n\t\t\t\t\t\n\t\t\t\t\t.search_bright .search_ipt, .l_container, .content, .pb_content, .thread_theme_5, .pb_footer, .pb_footer .p_thread, .tb_rich_poster_container, .search_bright .search_form, .nav_list { width: auto; }\n\t\t\t\t\t\n\t\t\t\t\t}", "@media only screen and (max-width: 800px)\n\t\t\t\t\t{\n\t\t\t\t\t\n\t\t\t\t\t.core_title_wrap_bright { width: 100%; }\n\t\t\t\t\t\n\t\t\t\t\t.d_post_content_main { padding-left: 0px; }\n\t\t\t\t\t.d_author, .d_author_anonym { display: none; }\n\t\t\t\t\t.p_content { padding-right: 0px; }\n\t\t\t\t\t\n\t\t\t\t\t.d_post_content_main { float: none;margin: auto; }\n\t\t\t\t\t\n\t\t\t\t\t}" ]), 
r.GM_addStyle([ "#com_userbar { position: fixed; top: 55px; background: #fff9; }", "#com_userbar .u_bdhome { display: none; }", ".floor-check-miss { padding: 10px;background-color: #451159;border-radius: 5px;padding-bottom: 6px;color: #fff;text-align: center;margin: 5px;margin-left: auto;}", ".floor-check-miss:hover { opacity: 0.9; }", ".threadlist_title {\n\t\t\t\tword-wrap: break-word;\n\t\t\t\tword-break: break-all;\n\t\t\t\twhite-space: normal;\n\t\t\t\t}", '.see_lz { \n\t\t\t\tmargin-left: 1em;\n\t\t\t\ttext-decoration: none !important; \n\t\t\t\tfont-size: 9pt;\n\t\t\t\tpadding: 2px 8px 1px;\n\t\t\t\ttext-shadow: initial;\n\t\t\t\tfont-family: "Helvetica Neue",Helvetica,Arial,sans-serif;\n\t\t\t\t}', ".lzl_cnt .lzl_content_main, .replyme_text, .edui-editor-body .edui-body-container, .edui-editor-body .edui-body-container { font-size: 9pt; }", ".icon-reply {\n\t\t\t\t\twidth: 16px;\n\t\t\t\t\theight: 13px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\tbackground: url(//tb2.bdstatic.com/tb/static-pb/widget/forum_title/images/icon_reply_d8a44b9.png) no-repeat;\n\t\t\t\t}", ".deepread-wrap { font-size: 9pt; }", ".j_thread_list .threadlist_title .see_lz { \n\t\t\t\tdisplay: none; \n\t\t\t\t}", ".j_thread_list:hover .threadlist_title .see_lz { display: inline-block; }", ".l_post._louzhubiaoshi_post { border: 1px solid #2d64b3; }", "._post-toc { \n\t\t\t\tdisplay: none; \n\t\t\t\tposition: sticky; \n\t\t\t\tmax-width: 150px; \n\t\t\t\ttop: 55px; \n\t\t\t\tfloat: left; \n\t\t\t\t//margin-left: -150px;\n\t\t\t\tleft: 150px;\n\t\t\t\tfont-size: 0.7em;\n\t\t\t\topacity: 0.5;\n\t\t\t\toverflow-x: hidden;\n\t\t\t\t}", "._post-toc dt {  }", "._post-toc dt a { padding-left: 3px; border-radius: 3px; }", "._post-toc dt .icon-reply {\n\t\t\t\t \n\t\t\t\t margin-left: 3px;\nborder-radius: 100%;\nbackground-color: #fff;\nwidth: 18px;\nbackground-position: center;\nheight: 18px;\n\t\t\t\t \n\t\t\t\t }", "._post-toc dt { opacity: 0.7; }", "._post-toc dt:hover { opacity: 1; }", "._post-toc dt a:hover { background: #2d64b3; color: #FFF; }", "._louzhubiaoshi_toc {  }", "._louzhubiaoshi_toc a { background: #FF7F42; color: #FFF; font-weight: bold; }", "._post-toc a { min-width: 100px; display: inline-block; line-height: 2em; min-height: 2em; }", "._post-toc:hover { opacity: 1; }", "@media only screen and (max-width: 1600px) {\n\t\t\t\t\t._post-toc { left: 100px; }\n\t\t\t\t}", "@media only screen and (max-width: 1500px) {\n\t\t\t\t\t._post-toc { left: 50px; }\n\t\t\t\t}", "@media only screen and (max-width: 1400px) {\n\t\t\t\t\t._post-toc { left: 10px; }\n\t\t\t\t}", "@media only screen and (min-width: 1000px) {\n\t\t\t\t\t._post-toc { display: block; }\n\t\t\t\t\t\n\t\t\t\t\thtml, body, :root\n\t\t\t\t\t{\n\t\t\t\t\t\tscroll-behavior: smooth;\n\t\t\t\t\t}\n\t\t\t\t}", ".topic_list_box { max-height: 388px; height: auto; }", ".topic_list_box .topic_list_hot { display: none; }", ".topic_list_box:hover .topic_list_hot { display: block; }", ".tbui_fbar_refresh { margin-top: 20px; }", "._tbui_fbar_nav a {\n\t\t\t\tdisplay: block; \n\t\t\t\theight: 45px; \n\t\t\t\twidth: 45px; \n\t\t\t\ttext-align: center; \n\t\t\t\tvertical-align: middle; \n\t\t\t\tline-height: 45px; \n\t\t\t\tbackground-color: #E4F0FD;\n\t\t\t\tbackground-color: #2C6099;\n\t\t\t\tcolor: #B2C7E2;\n\t\t\t\tmargin-bottom: 7px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tborder-radius: 100%;\n\t\t\t\t}", "._tbui_fbar_nav:hover a { background-color: #569AFC; color: #E9F1FC; }", ".tbui_follow_fixed, .core_title_wrap_bright { position: sticky !important; top: 0px; }", ".small_list_gallery .thumbnail { max-height: 135px; max-width: 200px; overflow: hidden; display: inline-block; }", ".small_list_gallery .thumbnail img.threadlist_pic { max-height: 200px; }", ".nav_wrap { position: unset; }", ".left_section .core_title_absolute_bright { max-height: 50px; }" ]);
const {throttle: f} = n(3), {debounce: g} = n(3), m = n(4);
let _;
await h.delay(250);
let b = !1, y = a('<div class="_post-toc"/>'), v = a('<dl style="list-style-type: unset;"/>').appendTo(y);
a("body").on("DOMNodeInserted", "#com_userbar", function(e) {
a(e.target).is("#u_notify_item, .unread-num") && a(window).triggerHandler("load.menu");
}), a("#pb_content").on("click", "img.BDE_Image", function(e) {
let t = p.bde_image(this);
if (t && t.length) {
let n = t.attr("data-id"), a;
a = _ && _.forum && _.thread ? [ "http://tieba.baidu.com/photo/p?", `kw=${_.forum.name_url}`, `&flux=1&tid=${_.thread.thread_id}`, `&pic_id=${n}`, "&pn=1&fp=2&see_lz=0&red_tag=s2698993533" ].join("") : t.prop("src"), 
m(e), window.open(a, n);
}
}), a("body").on("DOMNodeInserted", "#thread_list .j_thread_list .media_box", g(500, async function(e) {
let t;
a('img[id^="big_img_"]', this).each(function() {
p.bde_image(this);
});
}));
const w = n(112);
let k, x;
a("body").on("DOMNodeInserted DOMSubtreeModified", "#creative-platform-deepread-wrap", g(1e3, async function(e) {
console.log(e.type, this, e.target);
let t = a(this);
if (!t.length || !t.is("#creative-platform-deepread-wrap:not([data-done])")) return;
t.attr("data-done", !0);
let n = a("#deepread-wrap .deepread-content"), r = a("#deepread-nav", t), i = a('<a title="點擊可複製貼子">點擊可複製貼子</a>');
i.on("click", function(e) {
console.log(e.type, this, e.target), w.copyElem(a("#deepread-wrap .deepread-content")[0]);
}), n.find("._remove_when_join").remove(), i.appendTo(r);
let o = a('<div class="clearfix"/>'), s;
a(".deepread-title, .deepread-author", t).appendTo(o), o.insertAfter(r);
})), a("body").one("DOMNodeInserted DOMSubtreeModified", ".tbui_aside_float_bar", g(1e3, async function(e) {
let t = a(".tbui_aside_float_bar"), r = t.find(".tbui_fbar_post"), i = a(".tbui_fbar_refresh", t), o;
if (i.length || (i = a('<li class="tbui_aside_fbar_button tbui_fbar_refresh"><a href="javascript:void(0)"></a></li>').insertAfter(r)).on("click", function() {
window.location.reload();
}), a("#pb_content, #content_wrap").length && a(".tbui_fbar_top, .tbui_fbar_top a", t).off("click").on("click", function(e) {
m(e);
let t = a("#pb_content"), n = 0;
t.length ? n = a("#j_core_title_wrap").outerHeight() : (t = a("#pb_content, #content_wrap"), 
n = a("#head .search_main").outerHeight()), n = p.scrollTopPadding(n), p.scrollToTieba(window, t, 0 - n, void 0, !0);
}), !a("._tbui_fbar_nav", t).length && a("#pb_content").length) {
let e;
n(14), a('<li class="tbui_aside_fbar_button _tbui_fbar_nav _tbui_fbar_down"><a href="javascript:void(0)" class="_tbui_fbar_down">DOWN</a></li>').insertAfter(r), 
a('<li class="tbui_aside_fbar_button _tbui_fbar_nav _tbui_fbar_up"><a href="javascript:void(0)" class="_tbui_fbar_up">UP</a></li>').insertAfter(r), 
a("._tbui_fbar_nav", t).off("click").on("click", function(e) {
m(e);
let t = a(this);
k && x || (k = a("#j_p_postlist, #j_p_postlist #j_p_postlist, .p_postlist[id]", "#pb_content").eq(-1), 
x = a(".l_post:visible", k));
let n = t.is("._tbui_fbar_up"), r = x.length, i = 0, o = 0, s = p.scrollTopPadding("#j_core_title_wrap"), u = a(window).scrollTop(), c, l = u + a(window).innerHeight();
for (;i < r; i++) {
let e = x.eq(i), t = e.is(":onScreen"), a = e.height();
if (t) {
let t = e.offset().top;
if (n) {
o = u > t ? i : i - 1;
break;
}
o = i + 1;
} else if (o > 0) {
let e, t;
x.eq(i - 1).offset().top + 200 >= l && (o = i - 1);
break;
}
}
if ((o = Math.max(-1, Math.min(o, r - 1))) >= 0) {
let e = x.eq(o), t = e.offset().top;
e.length && p.scrollToTieba(window, e, 0 - s, void 0, !0);
}
});
}
})), a(window).on("load.sign", g(1e3, async function() {
o(e), a(window).triggerHandler("scroll.load");
})).on("load.menu", f(1e3, async function(e) {
console.log(e.type, this, e.target), a(".u_news ul.j_category_list").each(function() {
let e = a(this);
e.find('a.j_cleardata[data-type="favts"]').length || e.prepend('<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/storethread" target="_blank" data-type="favts">我的收藏</a></li>'), 
e.find('a.j_cleardata[data-type="my_tie"]').length || e.prepend('<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/my_tie" target="_blank" data-type="my_tie">我的贴子</a></li>'), 
e.find('a.j_cleardata[data-type="atme"]').length || e.prepend('<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/atme" target="_blank" data-type="atme">查看@提到我</a></li>'), 
e.find('a.j_cleardata[data-type="reply"]').length || e.prepend('<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/replyme" target="_blank" data-type="reply">查看回复</a></li>'), 
e.find('a.j_cleardata[data-type="recycle"]').length || e.append('<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/pmc/recycle" target="_blank" data-type="recycle">删贴信息</a></li>');
});
})).on("load.post", f(500, async function() {
let e, t;
_ = c(_), a([ '.feed_item a.itb_kw[title][href*="..."]' ].join(",")).prop("href", function() {
let e;
return "/f?kw=" + a(this).prop("title");
});
let n = !0;
k = a("#j_p_postlist, #j_p_postlist #j_p_postlist, .p_postlist[id]", "#pb_content").eq(-1);
{
let e;
if (a("> ._p_postlist_", k).length) return;
k.prepend('<div class="_p_postlist_" style="display: none"/>');
}
a([ ".card_title_fname", ".simple_block_container .wrap_container .nowrap a", ".simple_block_container .t_forward .common_source_main a:eq(-1)" ].join(",")).each(function() {
let e = a(this).prop("title");
e && a(this).text(e + ("吧" == e.slice(-1) ? "" : "吧"));
}), (x = a(".l_post:visible", k)).each(function() {
b || (b = !0, y.insertBefore("#container"));
let r = a(this), i;
try {
let e = r.attr("data-field");
e && (i = JSON.parse(e));
} catch (e) {}
i = Object.assign({
author: {},
content: {}
}, i);
let o = r.find(".post-tail-wrap > .tail-info:eq(-2)"), s = i.content.post_no;
if (s || (s = Number(o.text().replace(/\D/g, ""))), n && (n = !1, v.empty(), a(".card_top_wrap").outerHeight(a(".card_top_wrap .card_top").outerHeight()), 
a(window).triggerHandler("scroll.load"), e = s, t = r), "number" != typeof s || Number.isNaN(s)) console.error(s, e); else {
let n = i.author.user_name == _.thread.author;
n && r.addClass("_louzhubiaoshi_post");
{
let e = a("<dt></dt>").html(`<a href="javascript:void(0)">#${s} ` + a(".p_author .p_author_name", r).html() + "</a>");
e.prop("title", e.text()), n && e.addClass("_louzhubiaoshi_toc"), i.content.comment_num && e.find("a:eq(0)").append('<i class="icon-reply"/>'), 
e.find("a:eq(0)").on("click", function() {
a(window).triggerHandler("scroll.load");
let e = p.scrollTopPadding("#j_core_title_wrap");
p.scrollToTieba(window, r, 0 - e, void 0, !0);
}), e.appendTo(v);
}
if (s != e) {
if (s != e + 1) {
let n = [];
for (let t = e + 1; t < s; t++) n.push(t);
n.length && t.find(".d_post_content_main").append(`<div class="floor-check-miss">請注意：${n[0]}${n.length > 1 ? " ~ " + n.slice(-1) : ""} 樓 可能已被吞文或刪除</div>`);
}
e = s, t = r;
}
}
r.data("field-data", i);
}).filter(":not([data-floor-check])").each(function() {
let e = a(this), t = e;
e.attr("data-floor-check", !0);
let n = e.find(".post-tail-wrap > .tail-info:eq(-2)");
try {
if (t.is(":not([data-loaded])")) {
t.prop("data-loaded", !0);
{
let t = a(".p_content a.p_forbidden_post_content_fold:visible", e);
t.length && t[0].click();
}
a(".d_post_content_main", t).prepend(a("<a/>").text("#" + t.data("field").content.post_no).prop("href", "http://tieba.baidu.com/p/" + _.thread.thread_id + "?pid=" + t.data("field").content.post_id + "#" + t.data("field").content.post_id).attr("style", "float: right; z-index: 500; position: absolute; right: 0px; top: 0px; padding: 1px 5px;").attr("onclick", function() {
let e;
return [ "event.preventDefault()", `var copyArea = document.getElementById('${t.find(".d_post_content").prop("id")}')`, "try{copyArea.select();}catch(e){console.error(e)}", "try{window.getSelection().removeAllRanges();}catch(e){}", "try{var range = document.createRange();range.selectNode(copyArea);window.getSelection().addRange(range)}catch(e){console.error(e)}", "try{document.execCommand('Copy')}catch(e){console.error(e)}", "return false" ].join(";");
}).prop("title", "點擊可複製貼子")), n.wrapInner(a("<a/>").prop("href", "http://tieba.baidu.com/p/" + _.thread.thread_id + "?pid=" + t.data("field").content.post_id + "#" + t.data("field").content.post_id).on("click", m));
}
} catch (e) {}
}), new Promise(function() {
a("img.BDE_Image", x).each(async function() {
p.bde_image(this);
}), a(".right_section div:has(> .topic_list_box)").css("height", "auto"), a(window).triggerHandler("scroll.load");
});
})).on("load.list", f(1e3, async function() {
let t = a(".head_content .card_title_fname").length, n = !0, r = a(".j_thread_list .threadlist_title, .ihome_section .new_list .thread_name").each(function() {
let e = a(this), t = e.find("a.j_th_tit, a.title");
if (t.length && !e.find(".see_lz").length) {
let n = new URL(t.prop("href"));
n.searchParams.append("see_lz", 1), a('<a target="_blank" class="see_lz btn-sub btn-small">只看楼主</a>').prop("href", n.toString()).appendTo(a("<span/>").css({
display: "inline-block",
"vertical-align": "inherit"
}).appendTo(e));
}
});
s(e);
})).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7);
switch (e.which) {
case t("pageup"):
case t("left"):
var r;
(r = a(".pagination-default a.prev, .pagination-default a.pre, #image_original_container .image_original_prev")).length && e.which == t("right") && r.is(".image_original_prev, .image_original_next") || (r.length ? (m._uf_done2(e), 
r[0].click()) : console.log(e, r));
break;

case t("pagedown"):
case t("right"):
var r;
(r = a(".pagination-default a.next, #image_original_container .image_original_next")).length && e.which == t("right") && r.is(".image_original_prev, .image_original_next") || (r.length ? (m._uf_done2(e), 
r[0].click()) : console.log(e, r));
break;
}
}, null, '.edui-container, :input, [contenteditable="true"]')).on("load.scroll", async function() {
if (a(window).scrollTop() < 300) {
let e = p.scrollTopPadding("#j_core_title_wrap");
p.scrollToTieba(window, "#pb_content, .head_content .card_title, #content, #tab_forumname", 0 - e, void 0, !0);
}
}).scrollTo(".head_content").one("scroll", function(t) {
console.log(t), e.fragment && setTimeout(function() {
l(e);
}, 500);
}).on("scroll.reply", function(e) {
e.namespace;
}).on("scroll.load", f(1e3, async function(e) {
let t = 0;
a(".core_reply_wrapper:not([data-loaded])").each(function(e, n) {
let r = a(this);
r.attr("data-loaded", !0);
let i = r.find(".loading_reply"), o = r.parents(".core_reply:eq(0)").eq(0);
u(o, e);
let s = Number(r.prop("data-loaded-try") || 0);
s < 5 && i.length && (t++, r.prop("data-loaded-try", s + 1), setTimeout(async function() {
let t = a.Event("scroll.reply", {
pageY: r.offset().top
});
a(window).add("html, body").trigger(t);
try {
let e = unsafeWindow.$.Event("scroll.reply", {
pageY: r.offset().top
});
unsafeWindow.$(unsafeWindow).add("html, body").trigger(e);
} catch (e) {}
try {
let e = a.Event("scroll.reply", {
pageY: r.offset().top
});
a(unsafeWindow).add("html, body").trigger(e);
} catch (e) {}
setTimeout(function() {
r.find(".loading_reply").length && r.removeAttr("data-loaded");
}, 200), u(o, e);
}, 1e3 + 100 * t));
});
})).triggerHandler("load"), a("body").on("DOMNodeInserted", "#frs_list_pager, #thread_list", g(500, function() {
a(window).triggerHandler("load.list");
})), setTimeout(function() {
a(window).triggerHandler("load.list");
}, 500), a("#frs_list_pager").on("DOMNodeInserted.page", g(200, async function() {
p.scrollToTieba(window, ".head_content .card_title, #content, #tab_forumname");
})), a("#j_core_title_wrap").on("DOMNodeInserted", ".core_title_txt", f(200, async function(e) {
a(window).triggerHandler("load");
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add(a("#container").parentsUntil("body").addBack().siblings()).add(a("#footer").nextAll()).add([ ".share_btn_wrapper, #celebrity, #my_tieba_mod, .right_section, .see-image-btn, #sign_mod", "#j_head_focus_btn, .deepread-btn, #icon-reply, .p_author_face.round-avatar, #tb_rich_poster_container", ".core_reply_wrapper .j_user_card", "body :hidden, iframe, script", "#footer, #pb-footer-header, #quick_reply", ".j_user_sign", ".p_author .d_icons, .save_face_card, .d_name_icon, .save_face_bg", ".icon_tbworld, .BDE_Smiley", ".louzhubiaoshi_wrap, .save_face_card" ].join()), 
a(".d_badge_lv").removeAttr("class"), r;
}
};
async function o(e = t._url_obj, r) {
const i = n(25);
await i.delay(1e3);
let s = a("#j_head_focus_btn"), u = a("#sign_mod #signstar_wrapper a.j_cansign");
if (u.length) {
if (s.is(".cancel_focus")) return u[0].click(), await i.delay(500), u[0].click(), 
await i.delay(500), a(".j_succ_info.sign_succ1").hide(), !0;
r || s.one("click.sign", function() {
o(e, !0);
});
}
}
function s(e) {
const t = n(111);
let r = a("img.BDE_Image[data-original], img.threadlist_pic").filter("img").not("[data-done]").attr("data-done", !0).off("error.src").attr("src", function(e, n) {
let r = a(this), i = r.attr("data-original"), o = t.bde_image(r.clone());
if (o && (i = o.data("fullsrc"), r.attr("bpic", o.data("fullsrc"))), n != i) return i;
}).on("error.src", function() {
let e = a(this), t = e.attr("src"), n = e.attr("bpic");
e.off("error.src"), t != n && n ? e.attr("src", n) : t == n && e.attr("data-original") && e.attr("src", e.attr("data-original"));
});
}
function u(e, t) {
let n = e.find(".lzl_link_fold:visible, .loading_reply"), r = e.find(".core_reply_wrapper"), i = r.css("min-height").replace(/px$/, ""), o = r.height();
if ((i <= 50 || o <= 50) && r.css("min-height", "auto"), n.length) ; else {
let t = a(".p_reply a.lzl_link_unfold:visible:not([data-done])", e);
t.length && t.text().match(/.+\(\s*\d+\s*\)/) && (t.attr("data-done", !0), t[0].click());
}
}
function c(e) {
return e = a.extend({}, {
thread: {}
}, unsafeWindow.PageData);
}
function l(e = t._url_obj) {
if (e.fragment) {
let t = a(`.l_post_anchor[name="${e.fragment}"]`);
if (t.length) {
const e = n(111);
let a = e.scrollTopPadding("#j_core_title_wrap");
return e.scrollToTieba(window, t, 0 - a), !0;
}
return null;
}
return !1;
}
e.exports = i;
}).call(this, n(1), n(0).default, n(8));
}, function(module, exports, __webpack_require__) {
(function(process, global, setImmediate) {
!function(e) {
if (1) module.exports = e(); else var t;
}(function() {
var define, module, exports;
return function e(t, n, a) {
function r(o, s) {
if (!n[o]) {
if (!t[o]) {
var u = "function" == typeof _dereq_ && _dereq_;
if (!s && u) return u(o, !0);
if (i) return i(o, !0);
var c = new Error("Cannot find module '" + o + "'");
throw c.code = "MODULE_NOT_FOUND", c;
}
var l = n[o] = {
exports: {}
};
t[o][0].call(l.exports, function(e) {
var n;
return r(t[o][1][e] || e);
}, l, l.exports, e, t, n, a);
}
return n[o].exports;
}
for (var i = "function" == typeof _dereq_ && _dereq_, o = 0; o < a.length; o++) r(a[o]);
return r;
}({
1: [ function(e, t, n) {
"use strict";
t.exports = function(e) {
var t = e._SomePromiseArray;
function n(e) {
var n = new t(e), a = n.promise();
return n.setHowMany(1), n.setUnwrap(), n.init(), a;
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
var a;
try {
throw new Error();
} catch (e) {
a = e;
}
var r = e("./schedule"), i = e("./queue"), o = e("./util");
function s() {
this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new i(16), 
this._normalQueue = new i(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
var e = this;
this.drainQueues = function() {
e._drainQueues();
}, this._schedule = r;
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
function d(e) {
for (;e.length() > 0; ) p(e);
}
function p(e) {
var t = e.shift();
if ("function" != typeof t) t._settlePromises(); else {
var n = e.shift(), a = e.shift();
t.call(n, a);
}
}
s.prototype.setScheduler = function(e) {
var t = this._schedule;
return this._schedule = e, this._customScheduler = !0, t;
}, s.prototype.hasCustomScheduler = function() {
return this._customScheduler;
}, s.prototype.enableTrampoline = function() {
this._trampolineEnabled = !0;
}, s.prototype.disableTrampolineIfNecessary = function() {
o.hasDevTools && (this._trampolineEnabled = !1);
}, s.prototype.haveItemsQueued = function() {
return this._isTickUsed || this._haveDrainedQueues;
}, s.prototype.fatalError = function(e, t) {
t ? (process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"), 
process.exit(2)) : this.throwLater(e);
}, s.prototype.throwLater = function(e, t) {
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
}, o.hasDevTools ? (s.prototype.invokeLater = function(e, t, n) {
this._trampolineEnabled ? u.call(this, e, t, n) : this._schedule(function() {
setTimeout(function() {
e.call(t, n);
}, 100);
});
}, s.prototype.invoke = function(e, t, n) {
this._trampolineEnabled ? c.call(this, e, t, n) : this._schedule(function() {
e.call(t, n);
});
}, s.prototype.settlePromises = function(e) {
this._trampolineEnabled ? l.call(this, e) : this._schedule(function() {
e._settlePromises();
});
}) : (s.prototype.invokeLater = u, s.prototype.invoke = c, s.prototype.settlePromises = l), 
s.prototype._drainQueues = function() {
d(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, d(this._lateQueue);
}, s.prototype._queueTick = function() {
this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
}, s.prototype._reset = function() {
this._isTickUsed = !1;
}, t.exports = s, t.exports.firstLineError = a;
}, {
"./queue": 26,
"./schedule": 29,
"./util": 36
} ],
3: [ function(e, t, n) {
"use strict";
t.exports = function(e, t, n, a) {
var r = !1, i = function(e, t) {
this._reject(t);
}, o = function(e, t) {
t.promiseRejectionQueued = !0, t.bindingPromise._then(i, i, null, this, e);
}, s = function(e, t) {
0 == (50397184 & this._bitField) && this._resolveCallback(t.target);
}, u = function(e, t) {
t.promiseRejectionQueued || this._reject(e);
};
e.prototype.bind = function(i) {
r || (r = !0, e.prototype._propagateFrom = a.propagateFromFunction(), e.prototype._boundValue = a.boundValueFunction());
var c = n(i), l = new e(t);
l._propagateFrom(this, 1);
var d = this._target();
if (l._setBoundTo(c), c instanceof e) {
var p = {
promiseRejectionQueued: !1,
promise: l,
target: d,
bindingPromise: c
};
d._then(t, o, void 0, l, p), c._then(s, u, void 0, l, p), l._setOnCancel(c);
} else l._resolveCallback(d);
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
var a;
function r() {
try {
Promise === i && (Promise = a);
} catch (e) {}
return i;
}
"undefined" != typeof Promise && (a = Promise);
var i = e("./promise")();
i.noConflict = r, t.exports = i;
}, {
"./promise": 22
} ],
5: [ function(e, t, n) {
"use strict";
var a = Object.create;
if (a) {
var r = a(null), i = a(null);
r[" size"] = i[" size"] = 0;
}
t.exports = function(t) {
var n = e("./util"), a = n.canEvaluate, r = n.isIdentifier, i, o;
if (0) var s, u, c;
function l(e, a) {
var r;
if (null != e && (r = e[a]), "function" != typeof r) {
var i = "Object " + n.classString(e) + " has no method '" + n.toString(a) + "'";
throw new t.TypeError(i);
}
return r;
}
function d(e) {
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
return t.push(e), this._then(d, void 0, void 0, t, void 0);
}, t.prototype.get = function(e) {
var t, n;
if ("number" == typeof e) n = h; else if (a) {
var r = (void 0)(e);
n = null !== r ? r : p;
} else n = p;
return this._then(n, void 0, void 0, e, void 0);
};
};
}, {
"./util": 36
} ],
6: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a, r) {
var i = e("./util"), o = i.tryCatch, s = i.errorObj, u = t._async;
t.prototype.break = t.prototype.cancel = function() {
if (!r.cancellation()) return this._warn("cancellation is disabled");
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
if (i.isArray(e)) for (var n = 0; n < e.length; ++n) this._doInvokeOnCancel(e[n], t); else if (void 0 !== e) if ("function" == typeof e) {
if (!t) {
var a = o(e).call(this._boundValue());
a === s && (this._attachExtraTrace(a.e), u.throwLater(a.e));
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
var n = e("./util"), a = e("./es5").keys, r = n.tryCatch, i = n.errorObj;
function o(e, o, s) {
return function(u) {
var c = s._boundValue();
e: for (var l = 0; l < e.length; ++l) {
var d = e[l];
if (d === Error || null != d && d.prototype instanceof Error) {
if (u instanceof d) return r(o).call(c, u);
} else if ("function" == typeof d) {
var p = r(d).call(c, u);
if (p === i) return p;
if (p) return r(o).call(c, u);
} else if (n.isObject(u)) {
for (var h = a(d), f = 0; f < h.length; ++f) {
var g = h[f];
if (d[g] != u[g]) continue e;
}
return r(o).call(c, u);
}
}
return t;
};
}
return o;
};
}, {
"./es5": 13,
"./util": 36
} ],
8: [ function(e, t, n) {
"use strict";
t.exports = function(e) {
var t = !1, n = [];
function a() {
this._trace = new a.CapturedTrace(i());
}
function r() {
if (t) return new a();
}
function i() {
var e = n.length - 1;
if (e >= 0) return n[e];
}
return e.prototype._promiseCreated = function() {}, e.prototype._pushContext = function() {}, 
e.prototype._popContext = function() {
return null;
}, e._peekContext = e.prototype._peekContext = function() {}, a.prototype._pushContext = function() {
void 0 !== this._trace && (this._trace._promiseCreated = null, n.push(this._trace));
}, a.prototype._popContext = function() {
if (void 0 !== this._trace) {
var e = n.pop(), t = e._promiseCreated;
return e._promiseCreated = null, t;
}
return null;
}, a.CapturedTrace = null, a.create = r, a.deactivateLongStackTraces = function() {}, 
a.activateLongStackTraces = function() {
var n = e.prototype._pushContext, r = e.prototype._popContext, o = e._peekContext, s = e.prototype._peekContext, u = e.prototype._promiseCreated;
a.deactivateLongStackTraces = function() {
e.prototype._pushContext = n, e.prototype._popContext = r, e._peekContext = o, e.prototype._peekContext = s, 
e.prototype._promiseCreated = u, t = !1;
}, t = !0, e.prototype._pushContext = a.prototype._pushContext, e.prototype._popContext = a.prototype._popContext, 
e._peekContext = e.prototype._peekContext = i, e.prototype._promiseCreated = function() {
var e = this._peekContext();
e && null == e._promiseCreated && (e._promiseCreated = this);
};
}, a;
};
}, {} ],
9: [ function(e, t, n) {
"use strict";
t.exports = function(t, n) {
var a = t._getDomain, r = t._async, i = e("./errors").Warning, o = e("./util"), s = e("./es5"), u = o.canAttachTrace, c, l, d = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, p = /\((?:timers\.js):\d+:\d+\)/, h = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, f = null, g = null, m = !1, _, b = !(0 == o.env("BLUEBIRD_DEBUG")), y = !(0 == o.env("BLUEBIRD_WARNINGS") || !b && !o.env("BLUEBIRD_WARNINGS")), v = !(0 == o.env("BLUEBIRD_LONG_STACK_TRACES") || !b && !o.env("BLUEBIRD_LONG_STACK_TRACES")), w = 0 != o.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (y || !!o.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
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
Z("rejectionHandled", c, void 0, this);
}, t.prototype._setReturnedNonUndefined = function() {
this._bitField = 268435456 | this._bitField;
}, t.prototype._returnedNonUndefined = function() {
return 0 != (268435456 & this._bitField);
}, t.prototype._notifyUnhandledRejection = function() {
if (this._isRejectionUnhandled()) {
var e = this._settledValue();
this._setUnhandledRejectionIsNotified(), Z("unhandledRejection", l, e, this);
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
return q(e, t, n || this);
}, t.onPossiblyUnhandledRejection = function(e) {
var t = a();
l = "function" == typeof e ? null === t ? e : o.domainBind(t, e) : void 0;
}, t.onUnhandledRejectionHandled = function(e) {
var t = a();
c = "function" == typeof e ? null === t ? e : o.domainBind(t, e) : void 0;
};
var k = function() {};
t.longStackTraces = function() {
if (r.haveItemsQueued() && !se.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
if (!se.longStackTraces && ee()) {
var e = t.prototype._captureStackTrace, a = t.prototype._attachExtraTrace, i = t.prototype._dereferenceTrace;
se.longStackTraces = !0, k = function() {
if (r.haveItemsQueued() && !se.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
t.prototype._captureStackTrace = e, t.prototype._attachExtraTrace = a, t.prototype._dereferenceTrace = i, 
n.deactivateLongStackTraces(), r.enableTrampoline(), se.longStackTraces = !1;
}, t.prototype._captureStackTrace = z, t.prototype._attachExtraTrace = N, t.prototype._dereferenceTrace = B, 
n.activateLongStackTraces(), r.disableTrampolineIfNecessary();
}
}, t.hasLongStackTraces = function() {
return se.longStackTraces && ee();
};
var x = function() {
try {
if ("function" == typeof CustomEvent) {
var e = new CustomEvent("CustomEvent");
return o.global.dispatchEvent(e), function(e, t) {
var n = {
detail: t,
cancelable: !0
};
s.defineProperty(n, "promise", {
value: t.promise
}), s.defineProperty(n, "reason", {
value: t.reason
});
var a = new CustomEvent(e.toLowerCase(), n);
return !o.global.dispatchEvent(a);
};
}
if ("function" == typeof Event) {
var e = new Event("CustomEvent");
return o.global.dispatchEvent(e), function(e, t) {
var n = new Event(e.toLowerCase(), {
cancelable: !0
});
return n.detail = t, s.defineProperty(n, "promise", {
value: t.promise
}), s.defineProperty(n, "reason", {
value: t.reason
}), !o.global.dispatchEvent(n);
};
}
var e;
return (e = document.createEvent("CustomEvent")).initCustomEvent("testingtheevent", !1, !0, {}), 
o.global.dispatchEvent(e), function(e, t) {
var n = document.createEvent("CustomEvent");
return n.initCustomEvent(e.toLowerCase(), !1, !0, t), !o.global.dispatchEvent(n);
};
} catch (e) {}
return function() {
return !1;
};
}(), D = o.isNode ? function() {
return process.emit.apply(process, arguments);
} : o.global ? function(e) {
var t = "on" + e.toLowerCase(), n = o.global[t];
return !!n && (n.apply(o.global, [].slice.call(arguments, 1)), !0);
} : function() {
return !1;
};
function j(e, t) {
return {
promise: t
};
}
var C = {
promiseCreated: j,
promiseFulfilled: j,
promiseRejected: j,
promiseResolved: j,
promiseCancelled: j,
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
rejectionHandled: j
}, E = function(e) {
var t = !1;
try {
t = D.apply(null, arguments);
} catch (e) {
r.throwLater(e), t = !0;
}
var n = !1;
try {
n = x(e, C[e].apply(null, arguments));
} catch (e) {
r.throwLater(e), n = !0;
}
return n || t;
};
function S() {
return !1;
}
function A(e, t, n) {
var a = this;
try {
e(t, n, function(e) {
if ("function" != typeof e) throw new TypeError("onCancel must be a function, got: " + o.toString(e));
a._attachCancellationCallback(e);
});
} catch (e) {
return e;
}
}
function T(e) {
if (!this._isCancellable()) return this;
var t = this._onCancel();
void 0 !== t ? o.isArray(t) ? t.push(e) : this._setOnCancel([ t, e ]) : this._setOnCancel(e);
}
function F() {
return this._onCancelField;
}
function P(e) {
this._onCancelField = e;
}
function I() {
this._cancellationParent = void 0, this._onCancelField = void 0;
}
function L(e, t) {
if (0 != (1 & t)) {
this._cancellationParent = e;
var n = e._branchesRemainingToCancel;
void 0 === n && (n = 0), e._branchesRemainingToCancel = n + 1;
}
0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo);
}
function M(e, t) {
0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo);
}
t.config = function(e) {
if ("longStackTraces" in (e = Object(e)) && (e.longStackTraces ? t.longStackTraces() : !e.longStackTraces && t.hasLongStackTraces() && k()), 
"warnings" in e) {
var n = e.warnings;
se.warnings = !!n, w = se.warnings, o.isObject(n) && "wForgottenReturn" in n && (w = !!n.wForgottenReturn);
}
if ("cancellation" in e && e.cancellation && !se.cancellation) {
if (r.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
t.prototype._clearCancellationData = I, t.prototype._propagateFrom = L, t.prototype._onCancel = F, 
t.prototype._setOnCancel = P, t.prototype._attachCancellationCallback = T, t.prototype._execute = A, 
O = L, se.cancellation = !0;
}
return "monitoring" in e && (e.monitoring && !se.monitoring ? (se.monitoring = !0, 
t.prototype._fireEvent = E) : !e.monitoring && se.monitoring && (se.monitoring = !1, 
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
var O = M;
function R() {
var e = this._boundTo;
return void 0 !== e && e instanceof t ? e.isFulfilled() ? e.value() : void 0 : e;
}
function z() {
this._trace = new ie(this._peekContext());
}
function N(e, t) {
if (u(e)) {
var n = this._trace;
if (void 0 !== n && t && (n = n._parent), void 0 !== n) n.attachExtraTrace(e); else if (!e.__stackCleaned__) {
var a = Q(e);
o.notEnumerableProp(e, "stack", a.message + "\n" + a.stack.join("\n")), o.notEnumerableProp(e, "__stackCleaned__", !0);
}
}
}
function B() {
this._trace = void 0;
}
function $(e, t, n, a, r) {
if (void 0 === e && null !== t && w) {
if (void 0 !== r && r._returnedNonUndefined()) return;
if (0 == (65535 & a._bitField)) return;
n && (n += " ");
var i = "", o = "";
if (t._trace) {
for (var s = t._trace.stack.split("\n"), u = W(s), c = u.length - 1; c >= 0; --c) {
var l = u[c];
if (!p.test(l)) {
var d = l.match(h);
d && (i = "at " + d[1] + ":" + d[2] + ":" + d[3] + " ");
break;
}
}
if (u.length > 0) for (var f = u[0], c = 0; c < s.length; ++c) if (s[c] === f) {
c > 0 && (o = "\n" + s[c - 1]);
break;
}
}
var g = "a promise was created in a " + n + "handler " + i + "but was not returned from it, see http://goo.gl/rRqMUw" + o;
a._warn(g, !0, t);
}
}
function H(e, t) {
var n = e + " is deprecated and will be removed in a future version.";
return t && (n += " Use " + t + " instead."), q(n);
}
function q(e, n, a) {
if (se.warnings) {
var r = new i(e), o;
if (n) a._attachExtraTrace(r); else if (se.longStackTraces && (o = t._peekContext())) o.attachExtraTrace(r); else {
var s = Q(r);
r.stack = s.message + "\n" + s.stack.join("\n");
}
E("warning", r) || Y(r, "", !0);
}
}
function G(e, t) {
for (var n = 0; n < t.length - 1; ++n) t[n].push("From previous event:"), t[n] = t[n].join("\n");
return n < t.length && (t[n] = t[n].join("\n")), e + "\n" + t.join("\n");
}
function U(e) {
for (var t = 0; t < e.length; ++t) (0 === e[t].length || t + 1 < e.length && e[t][0] === e[t + 1][0]) && (e.splice(t, 1), 
t--);
}
function V(e) {
for (var t = e[0], n = 1; n < e.length; ++n) {
for (var a = e[n], r = t.length - 1, i = t[r], o = -1, s = a.length - 1; s >= 0; --s) if (a[s] === i) {
o = s;
break;
}
for (var s = o; s >= 0; --s) {
var u = a[s];
if (t[r] !== u) break;
t.pop(), r--;
}
t = a;
}
}
function W(e) {
for (var t = [], n = 0; n < e.length; ++n) {
var a = e[n], r = "    (No stack trace)" === a || f.test(a), i = r && te(a);
r && !i && (m && " " !== a.charAt(0) && (a = "    " + a), t.push(a));
}
return t;
}
function K(e) {
for (var t = e.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < t.length; ++n) {
var a = t[n];
if ("    (No stack trace)" === a || f.test(a)) break;
}
return n > 0 && "SyntaxError" != e.name && (t = t.slice(n)), t;
}
function Q(e) {
var t = e.stack, n = e.toString();
return t = "string" == typeof t && t.length > 0 ? K(e) : [ "    (No stack trace)" ], 
{
message: n,
stack: "SyntaxError" == e.name ? t : W(t)
};
}
function Y(e, t, n) {
if ("undefined" != typeof console) {
var a;
if (o.isObject(e)) {
var r = e.stack;
a = t + g(r, e);
} else a = t + String(e);
"function" == typeof _ ? _(a, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(a);
}
}
function Z(e, t, n, a) {
var i = !1;
try {
"function" == typeof t && (i = !0, "rejectionHandled" === e ? t(a) : t(n, a));
} catch (e) {
r.throwLater(e);
}
"unhandledRejection" === e ? E(e, n, a) || i || Y(n, "Unhandled rejection ") : E(e, a);
}
function X(e) {
var t;
if ("function" == typeof e) t = "[function " + (e.name || "anonymous") + "]"; else {
var n;
if (t = e && "function" == typeof e.toString ? e.toString() : o.toString(e), /\[object [a-zA-Z0-9$_]+\]/.test(t)) try {
var a;
t = JSON.stringify(e);
} catch (e) {}
0 === t.length && (t = "(empty array)");
}
return "(<" + J(t) + ">, no stack trace)";
}
function J(e) {
var t = 41;
return e.length < 41 ? e : e.substr(0, 38) + "...";
}
function ee() {
return "function" == typeof oe;
}
var te = function() {
return !1;
}, ne = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function ae(e) {
var t = e.match(ne);
if (t) return {
fileName: t[1],
line: parseInt(t[2], 10)
};
}
function re(e, t) {
if (ee()) {
for (var n = e.stack.split("\n"), a = t.stack.split("\n"), r = -1, i = -1, o, s, u = 0; u < n.length; ++u) {
var c;
if (c = ae(n[u])) {
o = c.fileName, r = c.line;
break;
}
}
for (var u = 0; u < a.length; ++u) {
var c;
if (c = ae(a[u])) {
s = c.fileName, i = c.line;
break;
}
}
r < 0 || i < 0 || !o || !s || o !== s || r >= i || (te = function(e) {
if (d.test(e)) return !0;
var t = ae(e);
return !!(t && t.fileName === o && r <= t.line && t.line <= i);
});
}
}
function ie(e) {
this._parent = e, this._promisesCreated = 0;
var t = this._length = 1 + (void 0 === e ? 0 : e._length);
oe(this, ie), t > 32 && this.uncycle();
}
o.inherits(ie, Error), n.CapturedTrace = ie, ie.prototype.uncycle = function() {
var e = this._length;
if (!(e < 2)) {
for (var t = [], n = {}, a = 0, r = this; void 0 !== r; ++a) t.push(r), r = r._parent;
for (var a = (e = this._length = a) - 1; a >= 0; --a) {
var i = t[a].stack;
void 0 === n[i] && (n[i] = a);
}
for (var a = 0; a < e; ++a) {
var o, s = n[t[a].stack];
if (void 0 !== s && s !== a) {
s > 0 && (t[s - 1]._parent = void 0, t[s - 1]._length = 1), t[a]._parent = void 0, 
t[a]._length = 1;
var u = a > 0 ? t[a - 1] : this;
s < e - 1 ? (u._parent = t[s + 1], u._parent.uncycle(), u._length = u._parent._length + 1) : (u._parent = void 0, 
u._length = 1);
for (var c = u._length + 1, l = a - 2; l >= 0; --l) t[l]._length = c, c++;
return;
}
}
}
}, ie.prototype.attachExtraTrace = function(e) {
if (!e.__stackCleaned__) {
this.uncycle();
for (var t = Q(e), n = t.message, a = [ t.stack ], r = this; void 0 !== r; ) a.push(W(r.stack.split("\n"))), 
r = r._parent;
V(a), U(a), o.notEnumerableProp(e, "stack", G(n, a)), o.notEnumerableProp(e, "__stackCleaned__", !0);
}
};
var oe = function e() {
var t = /^\s*at\s*/, n = function(e, t) {
return "string" == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : X(t);
};
if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
Error.stackTraceLimit += 6, f = t, g = n;
var a = Error.captureStackTrace;
return te = function(e) {
return d.test(e);
}, function(e, t) {
Error.stackTraceLimit += 6, a(e, t), Error.stackTraceLimit -= 6;
};
}
var r = new Error(), i;
if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return f = /@/, 
g = n, m = !0, function e(t) {
t.stack = new Error().stack;
};
try {
throw new Error();
} catch (e) {
i = "stack" in e;
}
return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (g = function(e, t) {
return "string" == typeof e ? e : "object" != typeof t && "function" != typeof t || void 0 === t.name || void 0 === t.message ? X(t) : t.toString();
}, null) : (f = t, g = n, function e(t) {
Error.stackTraceLimit += 6;
try {
throw new Error();
} catch (e) {
t.stack = e.stack;
}
Error.stackTraceLimit -= 6;
});
}([]);
"undefined" != typeof console && void 0 !== console.warn && (_ = function(e) {
console.warn(e);
}, o.isNode && process.stderr.isTTY ? _ = function(e, t) {
var n = t ? "[33m" : "[31m";
console.warn(n + e + "[0m\n");
} : o.isNode || "string" != typeof new Error().stack || (_ = function(e, t) {
console.warn("%c" + e, t ? "color: darkorange" : "color: red");
}));
var se = {
warnings: y,
longStackTraces: !1,
cancellation: !1,
monitoring: !1
};
return v && t.longStackTraces(), {
longStackTraces: function() {
return se.longStackTraces;
},
warnings: function() {
return se.warnings;
},
cancellation: function() {
return se.cancellation;
},
monitoring: function() {
return se.monitoring;
},
propagateFromFunction: function() {
return O;
},
boundValueFunction: function() {
return R;
},
checkForgottenReturns: $,
setBounds: re,
warn: q,
deprecated: H,
CapturedTrace: ie,
fireDomEvent: x,
fireGlobalEvent: D
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
var t = arguments[1], a = function() {
throw t;
};
return this.caught(e, a);
}, e.prototype.catchReturn = function(n) {
if (arguments.length <= 1) return n instanceof e && n.suppressUnhandledRejections(), 
this._then(void 0, t, void 0, {
value: n
}, void 0);
var a = arguments[1];
a instanceof e && a.suppressUnhandledRejections();
var r = function() {
return a;
};
return this.caught(n, r);
};
};
}, {} ],
11: [ function(e, t, n) {
"use strict";
t.exports = function(e, t) {
var n = e.reduce, a = e.all;
function r() {
return a(this);
}
function i(e, a) {
return n(e, a, t, t);
}
e.prototype.each = function(e) {
return n(this, e, t, 0)._then(r, void 0, void 0, this, void 0);
}, e.prototype.mapSeries = function(e) {
return n(this, e, t, t);
}, e.each = function(e, a) {
return n(e, a, t, 0)._then(r, void 0, void 0, e, void 0);
}, e.mapSeries = i;
};
}, {} ],
12: [ function(e, t, n) {
"use strict";
var a = e("./es5"), r = a.freeze, i = e("./util"), o = i.inherits, s = i.notEnumerableProp, u, c;
function l(e, t) {
function n(a) {
if (!(this instanceof n)) return new n(a);
s(this, "message", "string" == typeof a ? a : t), s(this, "name", e), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
}
return o(n, Error), n;
}
var d = l("Warning", "warning"), p = l("CancellationError", "cancellation error"), h = l("TimeoutError", "timeout error"), f = l("AggregateError", "aggregate error");
try {
u = TypeError, c = RangeError;
} catch (e) {
u = l("TypeError", "type error"), c = l("RangeError", "range error");
}
for (var g = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), m = 0; m < g.length; ++m) "function" == typeof Array.prototype[g[m]] && (f.prototype[g[m]] = Array.prototype[g[m]]);
a.defineProperty(f.prototype, "length", {
value: 0,
configurable: !1,
writable: !0,
enumerable: !0
}), f.prototype.isOperational = !0;
var _ = 0;
function b(e) {
if (!(this instanceof b)) return new b(e);
s(this, "name", "OperationalError"), s(this, "message", e), this.cause = e, this.isOperational = !0, 
e instanceof Error ? (s(this, "message", e.message), s(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
}
f.prototype.toString = function() {
var e = Array(4 * _ + 1).join(" "), t = "\n" + e + "AggregateError of:\n";
_++, e = Array(4 * _ + 1).join(" ");
for (var n = 0; n < this.length; ++n) {
for (var a = this[n] === this ? "[Circular AggregateError]" : this[n] + "", r = a.split("\n"), i = 0; i < r.length; ++i) r[i] = e + r[i];
t += (a = r.join("\n")) + "\n";
}
return _--, t;
}, o(b, Error);
var y = Error.__BluebirdErrorTypes__;
y || (y = r({
CancellationError: p,
TimeoutError: h,
OperationalError: b,
RejectionError: b,
AggregateError: f
}), a.defineProperty(Error, "__BluebirdErrorTypes__", {
value: y,
writable: !1,
enumerable: !1,
configurable: !1
})), t.exports = {
Error,
TypeError: u,
RangeError: c,
CancellationError: y.CancellationError,
OperationalError: y.OperationalError,
TimeoutError: y.TimeoutError,
AggregateError: y.AggregateError,
Warning: d
};
}, {
"./es5": 13,
"./util": 36
} ],
13: [ function(e, t, n) {
var a = function() {
"use strict";
return void 0 === this;
}();
if (a) t.exports = {
freeze: Object.freeze,
defineProperty: Object.defineProperty,
getDescriptor: Object.getOwnPropertyDescriptor,
keys: Object.keys,
names: Object.getOwnPropertyNames,
getPrototypeOf: Object.getPrototypeOf,
isArray: Array.isArray,
isES5: a,
propertyIsWritable: function(e, t) {
var n = Object.getOwnPropertyDescriptor(e, t);
return !(n && !n.writable && !n.set);
}
}; else {
var r = {}.hasOwnProperty, i = {}.toString, o = {}.constructor.prototype, s = function(e) {
var t = [];
for (var n in e) r.call(e, n) && t.push(n);
return t;
}, u = function(e, t) {
return {
value: e[t]
};
}, c = function(e, t, n) {
return e[t] = n.value, e;
}, l = function(e) {
return e;
}, d = function(e) {
try {
return Object(e).constructor.prototype;
} catch (e) {
return o;
}
}, p = function(e) {
try {
return "[object Array]" === i.call(e);
} catch (e) {
return !1;
}
};
t.exports = {
isArray: p,
keys: s,
names: s,
defineProperty: c,
getDescriptor: u,
freeze: l,
getPrototypeOf: d,
isES5: a,
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
e.prototype.filter = function(e, a) {
return n(this, e, a, t);
}, e.filter = function(e, a, r) {
return n(e, a, r, t);
};
};
}, {} ],
15: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a) {
var r = e("./util"), i = t.CancellationError, o = r.errorObj, s = e("./catch_filter")(a);
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
function d() {
return h.call(this, this.promise._target()._settledValue());
}
function p(e) {
if (!l(this, e)) return o.e = e, o;
}
function h(e) {
var r = this.promise, s = this.handler;
if (!this.called) {
this.called = !0;
var u = this.isFinallyHandler() ? s.call(r._boundValue()) : s.call(r._boundValue(), e);
if (u === a) return u;
if (void 0 !== u) {
r._setReturnedNonUndefined();
var h = n(u, r);
if (h instanceof t) {
if (null != this.cancelPromise) {
if (h._isCancelled()) {
var f = new i("late cancellation observer");
return r._attachExtraTrace(f), o.e = f, o;
}
h.isPending() && h._attachCancellationCallback(new c(this));
}
return h._then(d, p, void 0, this, void 0);
}
}
}
return r.isRejected() ? (l(this), o.e = e, o) : (l(this), e);
}
return u.prototype.isFinallyHandler = function() {
return 0 === this.type;
}, c.prototype._resultCancelled = function() {
l(this.finallyHandler);
}, t.prototype._passThrough = function(e, t, n, a) {
return "function" != typeof e ? this.then() : this._then(n, a, void 0, new u(this, t, e), void 0);
}, t.prototype.lastly = t.prototype.finally = function(e) {
return this._passThrough(e, 0, h, h);
}, t.prototype.tap = function(e) {
return this._passThrough(e, 1, h);
}, t.prototype.tapCatch = function(e) {
var n = arguments.length;
if (1 === n) return this._passThrough(e, 1, void 0, h);
var a = new Array(n - 1), i = 0, o;
for (o = 0; o < n - 1; ++o) {
var u = arguments[o];
if (!r.isObject(u)) return t.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + r.classString(u)));
a[i++] = u;
}
a.length = i;
var c = arguments[o];
return this._passThrough(s(a, c, this), 1, void 0, h);
}, u;
};
}, {
"./catch_filter": 7,
"./util": 36
} ],
16: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a, r, i, o) {
var s, u = e("./errors").TypeError, c = e("./util"), l = c.errorObj, d = c.tryCatch, p = [];
function h(e, n, a) {
for (var i = 0; i < n.length; ++i) {
a._pushContext();
var o = d(n[i])(e);
if (a._popContext(), o === l) {
a._pushContext();
var s = t.reject(l.e);
return a._popContext(), s;
}
var u = r(o, a);
if (u instanceof t) return u;
}
return null;
}
function f(e, n, r, i) {
if (o.cancellation()) {
var s = new t(a), u = this._finallyPromise = new t(a);
this._promise = s.lastly(function() {
return u;
}), s._captureStackTrace(), s._setOnCancel(this);
} else {
var c;
(this._promise = new t(a))._captureStackTrace();
}
this._stack = i, this._generatorFunction = e, this._receiver = n, this._generator = void 0, 
this._yieldHandlers = "function" == typeof r ? [ r ].concat(p) : p, this._yieldedPromise = null, 
this._cancellationPhase = !1;
}
c.inherits(f, i), f.prototype._isResolved = function() {
return null === this._promise;
}, f.prototype._cleanup = function() {
this._promise = this._generator = null, o.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), 
this._finallyPromise = null);
}, f.prototype._promiseCancelled = function() {
if (!this._isResolved()) {
var e, n;
if (void 0 !== this._generator.return) this._promise._pushContext(), n = d(this._generator.return).call(this._generator, void 0), 
this._promise._popContext(); else {
var a = new t.CancellationError("generator .return() sentinel");
t.coroutine.returnSentinel = a, this._promise._attachExtraTrace(a), this._promise._pushContext(), 
n = d(this._generator.throw).call(this._generator, a), this._promise._popContext();
}
this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(n);
}
}, f.prototype._promiseFulfilled = function(e) {
this._yieldedPromise = null, this._promise._pushContext();
var t = d(this._generator.next).call(this._generator, e);
this._promise._popContext(), this._continue(t);
}, f.prototype._promiseRejected = function(e) {
this._yieldedPromise = null, this._promise._attachExtraTrace(e), this._promise._pushContext();
var t = d(this._generator.throw).call(this._generator, e);
this._promise._popContext(), this._continue(t);
}, f.prototype._resultCancelled = function() {
if (this._yieldedPromise instanceof t) {
var e = this._yieldedPromise;
this._yieldedPromise = null, e.cancel();
}
}, f.prototype.promise = function() {
return this._promise;
}, f.prototype._run = function() {
this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, 
this._promiseFulfilled(void 0);
}, f.prototype._continue = function(e) {
var n = this._promise;
if (e === l) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(e.e, !1);
var a = e.value;
if (!0 === e.done) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(a);
var i = r(a, this._promise);
if (i instanceof t || null !== (i = h(i, this._yieldHandlers, this._promise))) {
var o = (i = i._target())._bitField;
0 == (50397184 & o) ? (this._yieldedPromise = i, i._proxy(this, null)) : 0 != (33554432 & o) ? t._async.invoke(this._promiseFulfilled, this, i._value()) : 0 != (16777216 & o) ? t._async.invoke(this._promiseRejected, this, i._reason()) : this._promiseCancelled();
} else this._promiseRejected(new u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(a)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
}, t.coroutine = function(e, t) {
if ("function" != typeof e) throw new u("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
var n = Object(t).yieldHandler, a = f, r = new Error().stack;
return function() {
var t = e.apply(this, arguments), i = new a(void 0, void 0, n, r), o = i.promise();
return i._generator = t, i._promiseFulfilled(void 0), o;
};
}, t.coroutine.addYieldHandler = function(e) {
if ("function" != typeof e) throw new u("expecting a function but got " + c.classString(e));
p.push(e);
}, t.spawn = function(e) {
if (o.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof e) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
var a = new f(e, this), r = a.promise();
return a._run(t.spawn), r;
};
};
}, {
"./errors": 12,
"./util": 36
} ],
17: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a, r, i, o) {
var s = e("./util"), u = s.canEvaluate, c = s.tryCatch, l = s.errorObj, d;
if (0) var p, h, f, g, m, _, b;
t.join = function() {
var e = arguments.length - 1, t;
if (e > 0 && "function" == typeof arguments[e] && (t = arguments[e], 0)) var a, r, i, o, s, u, c, l;
var d = [].slice.call(arguments);
t && d.pop();
var l = new n(d).promise();
return void 0 !== t ? l.spread(t) : l;
};
};
}, {
"./util": 36
} ],
18: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a, r, i, o) {
var s = t._getDomain, u = e("./util"), c = u.tryCatch, l = u.errorObj, d = t._async;
function p(e, t, n, a) {
this.constructor$(e), this._promise._captureStackTrace();
var r = s();
this._callback = null === r ? t : u.domainBind(r, t), this._preservedValues = a === i ? new Array(this.length()) : null, 
this._limit = n, this._inFlight = 0, this._queue = [], d.invoke(this._asyncInit, this, void 0);
}
function h(e, n, r, i) {
if ("function" != typeof n) return a("expecting a function but got " + u.classString(n));
var o = 0;
if (void 0 !== r) {
if ("object" != typeof r || null === r) return t.reject(new TypeError("options argument must be an object but it is " + u.classString(r)));
if ("number" != typeof r.concurrency) return t.reject(new TypeError("'concurrency' must be a number but it is " + u.classString(r.concurrency)));
o = r.concurrency;
}
return new p(e, n, o = "number" == typeof o && isFinite(o) && o >= 1 ? o : 0, i).promise();
}
u.inherits(p, n), p.prototype._asyncInit = function() {
this._init$(void 0, -2);
}, p.prototype._init = function() {}, p.prototype._promiseFulfilled = function(e, n) {
var a = this._values, i = this.length(), s = this._preservedValues, u = this._limit, d;
if (n < 0) {
if (a[n = -1 * n - 1] = e, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0;
} else {
if (u >= 1 && this._inFlight >= u) return a[n] = e, this._queue.push(n), !1;
null !== s && (s[n] = e);
var p = this._promise, h = this._callback, f = p._boundValue();
p._pushContext();
var g = c(h).call(f, e, n, i), m = p._popContext();
if (o.checkForgottenReturns(g, m, null !== s ? "Promise.filter" : "Promise.map", p), 
g === l) return this._reject(g.e), !0;
var _ = r(g, this._promise);
if (_ instanceof t) {
var b = (_ = _._target())._bitField;
if (0 == (50397184 & b)) return u >= 1 && this._inFlight++, a[n] = _, _._proxy(this, -1 * (n + 1)), 
!1;
if (0 == (33554432 & b)) return 0 != (16777216 & b) ? (this._reject(_._reason()), 
!0) : (this._cancel(), !0);
g = _._value();
}
a[n] = g;
}
return ++this._totalResolved >= i && (null !== s ? this._filter(a, s) : this._resolve(a), 
!0);
}, p.prototype._drainQueue = function() {
for (var e = this._queue, t = this._limit, n = this._values; e.length > 0 && this._inFlight < t; ) {
if (this._isResolved()) return;
var a = e.pop();
this._promiseFulfilled(n[a], a);
}
}, p.prototype._filter = function(e, t) {
for (var n = t.length, a = new Array(n), r = 0, i = 0; i < n; ++i) e[i] && (a[r++] = t[i]);
a.length = r, this._resolve(a);
}, p.prototype.preservedValues = function() {
return this._preservedValues;
}, t.prototype.map = function(e, t) {
return h(this, e, t, null);
}, t.map = function(e, t, n, a) {
return h(e, t, n, a);
};
};
}, {
"./util": 36
} ],
19: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a, r, i) {
var o = e("./util"), s = o.tryCatch;
t.method = function(e) {
if ("function" != typeof e) throw new t.TypeError("expecting a function but got " + o.classString(e));
return function() {
var a = new t(n);
a._captureStackTrace(), a._pushContext();
var r = s(e).apply(this, arguments), o = a._popContext();
return i.checkForgottenReturns(r, o, "Promise.method", a), a._resolveFromSyncValue(r), 
a;
};
}, t.attempt = t.try = function(e) {
if ("function" != typeof e) return r("expecting a function but got " + o.classString(e));
var a = new t(n), u;
if (a._captureStackTrace(), a._pushContext(), arguments.length > 1) {
i.deprecated("calling Promise.try with more than 1 argument");
var c = arguments[1], l = arguments[2];
u = o.isArray(c) ? s(e).apply(l, c) : s(e).call(l, c);
} else u = s(e)();
var d = a._popContext();
return i.checkForgottenReturns(u, d, "Promise.try", a), a._resolveFromSyncValue(u), 
a;
}, t.prototype._resolveFromSyncValue = function(e) {
e === o.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0);
};
};
}, {
"./util": 36
} ],
20: [ function(e, t, n) {
"use strict";
var a = e("./util"), r = a.maybeWrapAsError, i, o = e("./errors").OperationalError, s = e("./es5");
function u(e) {
return e instanceof Error && s.getPrototypeOf(e) === Error.prototype;
}
var c = /^(?:name|message|stack|cause)$/;
function l(e) {
var t;
if (u(e)) {
(t = new o(e)).name = e.name, t.message = e.message, t.stack = e.stack;
for (var n = s.keys(e), r = 0; r < n.length; ++r) {
var i = n[r];
c.test(i) || (t[i] = e[i]);
}
return t;
}
return a.markAsOriginatingFromRejection(e), e;
}
function d(e, t) {
return function(n, a) {
if (null !== e) {
if (n) {
var i = l(r(n));
e._attachExtraTrace(i), e._reject(i);
} else if (t) {
var o = [].slice.call(arguments, 1);
e._fulfill(o);
} else e._fulfill(a);
e = null;
}
};
}
t.exports = d;
}, {
"./errors": 12,
"./es5": 13,
"./util": 36
} ],
21: [ function(e, t, n) {
"use strict";
t.exports = function(t) {
var n = e("./util"), a = t._async, r = n.tryCatch, i = n.errorObj;
function o(e, t) {
var o = this;
if (!n.isArray(e)) return s.call(this, e, t);
var u = r(t).apply(this._boundValue(), [ null ].concat(e));
u === i && a.throwLater(u.e);
}
function s(e, t) {
var n = this, o = this._boundValue(), s = void 0 === e ? r(t).call(o, null) : r(t).call(o, null, e);
s === i && a.throwLater(s.e);
}
function u(e, t) {
var n = this;
if (!e) {
var o = new Error(e + "");
o.cause = e, e = o;
}
var s = r(t).call(this._boundValue(), e);
s === i && a.throwLater(s.e);
}
t.prototype.asCallback = t.prototype.nodeify = function(e, t) {
if ("function" == typeof e) {
var n = s;
void 0 !== t && Object(t).spread && (n = o), this._then(n, u, void 0, this, e);
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
}, a = function() {
return new T.PromiseInspection(this._target());
}, r = function(e) {
return T.reject(new h(e));
};
function i() {}
var o = {}, s = e("./util"), u;
u = s.isNode ? function() {
var e = process.domain;
return void 0 === e && (e = null), e;
} : function() {
return null;
}, s.notEnumerableProp(T, "_getDomain", u);
var c = e("./es5"), l = e("./async"), d = new l();
c.defineProperty(T, "_async", {
value: d
});
var p = e("./errors"), h = T.TypeError = p.TypeError;
T.RangeError = p.RangeError;
var f = T.CancellationError = p.CancellationError;
T.TimeoutError = p.TimeoutError, T.OperationalError = p.OperationalError, T.RejectionError = p.OperationalError, 
T.AggregateError = p.AggregateError;
var g = function() {}, m = {}, _ = {}, b = e("./thenables")(T, g), y = e("./promise_array")(T, g, b, r, i), v = e("./context")(T), w = v.create, k = e("./debuggability")(T, v), x = k.CapturedTrace, D = e("./finally")(T, b, _), j = e("./catch_filter")(_), C = e("./nodeback"), E = s.errorObj, S = s.tryCatch;
function A(e, t) {
if (null == e || e.constructor !== T) throw new h("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
if ("function" != typeof t) throw new h("expecting a function but got " + s.classString(t));
}
function T(e) {
e !== g && A(this, e), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, 
this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(e), 
this._promiseCreated(), this._fireEvent("promiseCreated", this);
}
function F(e) {
this.promise._resolveCallback(e);
}
function P(e) {
this.promise._rejectCallback(e, !1);
}
function I(e) {
var t = new T(g);
t._fulfillmentHandler0 = e, t._rejectionHandler0 = e, t._promise0 = e, t._receiver0 = e;
}
return T.prototype.toString = function() {
return "[object Promise]";
}, T.prototype.caught = T.prototype.catch = function(e) {
var t = arguments.length;
if (t > 1) {
var n = new Array(t - 1), a = 0, i;
for (i = 0; i < t - 1; ++i) {
var o = arguments[i];
if (!s.isObject(o)) return r("Catch statement predicate: expecting an object but got " + s.classString(o));
n[a++] = o;
}
return n.length = a, e = arguments[i], this.then(void 0, j(n, e, this));
}
return this.then(void 0, e);
}, T.prototype.reflect = function() {
return this._then(a, a, void 0, this, void 0);
}, T.prototype.then = function(e, t) {
if (k.warnings() && arguments.length > 0 && "function" != typeof e && "function" != typeof t) {
var n = ".then() only accepts functions but was passed: " + s.classString(e);
arguments.length > 1 && (n += ", " + s.classString(t)), this._warn(n);
}
return this._then(e, t, void 0, void 0, void 0);
}, T.prototype.done = function(e, t) {
var n;
this._then(e, t, void 0, void 0, void 0)._setIsFinal();
}, T.prototype.spread = function(e) {
return "function" != typeof e ? r("expecting a function but got " + s.classString(e)) : this.all()._then(e, void 0, void 0, m, void 0);
}, T.prototype.toJSON = function() {
var e = {
isFulfilled: !1,
isRejected: !1,
fulfillmentValue: void 0,
rejectionReason: void 0
};
return this.isFulfilled() ? (e.fulfillmentValue = this.value(), e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(), 
e.isRejected = !0), e;
}, T.prototype.all = function() {
return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), 
new y(this).promise();
}, T.prototype.error = function(e) {
return this.caught(s.originatesFromRejection, e);
}, T.getNewLibraryCopy = t.exports, T.is = function(e) {
return e instanceof T;
}, T.fromNode = T.fromCallback = function(e) {
var t = new T(g);
t._captureStackTrace();
var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs, a = S(e)(C(t, n));
return a === E && t._rejectCallback(a.e, !0), t._isFateSealed() || t._setAsyncGuaranteed(), 
t;
}, T.all = function(e) {
return new y(e).promise();
}, T.cast = function(e) {
var t = b(e);
return t instanceof T || ((t = new T(g))._captureStackTrace(), t._setFulfilled(), 
t._rejectionHandler0 = e), t;
}, T.resolve = T.fulfilled = T.cast, T.reject = T.rejected = function(e) {
var t = new T(g);
return t._captureStackTrace(), t._rejectCallback(e, !0), t;
}, T.setScheduler = function(e) {
if ("function" != typeof e) throw new h("expecting a function but got " + s.classString(e));
return d.setScheduler(e);
}, T.prototype._then = function(e, t, n, a, r) {
var i = void 0 !== r, o = i ? r : new T(g), c = this._target(), l = c._bitField;
i || (o._propagateFrom(this, 3), o._captureStackTrace(), void 0 === a && 0 != (2097152 & this._bitField) && (a = 0 != (50397184 & l) ? this._boundValue() : c === this ? void 0 : this._boundTo), 
this._fireEvent("promiseChained", this, o));
var p = u();
if (0 != (50397184 & l)) {
var h, m, _ = c._settlePromiseCtx;
0 != (33554432 & l) ? (m = c._rejectionHandler0, h = e) : 0 != (16777216 & l) ? (m = c._fulfillmentHandler0, 
h = t, c._unsetRejectionIsUnhandled()) : (_ = c._settlePromiseLateCancellationObserver, 
m = new f("late cancellation observer"), c._attachExtraTrace(m), h = t), d.invoke(_, c, {
handler: null === p ? h : "function" == typeof h && s.domainBind(p, h),
promise: o,
receiver: a,
value: m
});
} else c._addCallbacks(e, t, o, a, p);
return o;
}, T.prototype._length = function() {
return 65535 & this._bitField;
}, T.prototype._isFateSealed = function() {
return 0 != (117506048 & this._bitField);
}, T.prototype._isFollowing = function() {
return 67108864 == (67108864 & this._bitField);
}, T.prototype._setLength = function(e) {
this._bitField = -65536 & this._bitField | 65535 & e;
}, T.prototype._setFulfilled = function() {
this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this);
}, T.prototype._setRejected = function() {
this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this);
}, T.prototype._setFollowing = function() {
this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this);
}, T.prototype._setIsFinal = function() {
this._bitField = 4194304 | this._bitField;
}, T.prototype._isFinal = function() {
return (4194304 & this._bitField) > 0;
}, T.prototype._unsetCancelled = function() {
this._bitField = -65537 & this._bitField;
}, T.prototype._setCancelled = function() {
this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this);
}, T.prototype._setWillBeCancelled = function() {
this._bitField = 8388608 | this._bitField;
}, T.prototype._setAsyncGuaranteed = function() {
d.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField);
}, T.prototype._receiverAt = function(e) {
var t = 0 === e ? this._receiver0 : this[4 * e - 4 + 3];
if (t !== o) return void 0 === t && this._isBound() ? this._boundValue() : t;
}, T.prototype._promiseAt = function(e) {
return this[4 * e - 4 + 2];
}, T.prototype._fulfillmentHandlerAt = function(e) {
return this[4 * e - 4 + 0];
}, T.prototype._rejectionHandlerAt = function(e) {
return this[4 * e - 4 + 1];
}, T.prototype._boundValue = function() {}, T.prototype._migrateCallback0 = function(e) {
var t = e._bitField, n = e._fulfillmentHandler0, a = e._rejectionHandler0, r = e._promise0, i = e._receiverAt(0);
void 0 === i && (i = o), this._addCallbacks(n, a, r, i, null);
}, T.prototype._migrateCallbackAt = function(e, t) {
var n = e._fulfillmentHandlerAt(t), a = e._rejectionHandlerAt(t), r = e._promiseAt(t), i = e._receiverAt(t);
void 0 === i && (i = o), this._addCallbacks(n, a, r, i, null);
}, T.prototype._addCallbacks = function(e, t, n, a, r) {
var i = this._length();
if (i >= 65531 && (i = 0, this._setLength(0)), 0 === i) this._promise0 = n, this._receiver0 = a, 
"function" == typeof e && (this._fulfillmentHandler0 = null === r ? e : s.domainBind(r, e)), 
"function" == typeof t && (this._rejectionHandler0 = null === r ? t : s.domainBind(r, t)); else {
var o = 4 * i - 4;
this[o + 2] = n, this[o + 3] = a, "function" == typeof e && (this[o + 0] = null === r ? e : s.domainBind(r, e)), 
"function" == typeof t && (this[o + 1] = null === r ? t : s.domainBind(r, t));
}
return this._setLength(i + 1), i;
}, T.prototype._proxy = function(e, t) {
this._addCallbacks(void 0, void 0, t, e, null);
}, T.prototype._resolveCallback = function(e, t) {
if (0 == (117506048 & this._bitField)) {
if (e === this) return this._rejectCallback(n(), !1);
var a = b(e, this);
if (!(a instanceof T)) return this._fulfill(e);
t && this._propagateFrom(a, 2);
var r = a._target();
if (r !== this) {
var i = r._bitField;
if (0 == (50397184 & i)) {
var o = this._length();
o > 0 && r._migrateCallback0(this);
for (var s = 1; s < o; ++s) r._migrateCallbackAt(this, s);
this._setFollowing(), this._setLength(0), this._setFollowee(r);
} else if (0 != (33554432 & i)) this._fulfill(r._value()); else if (0 != (16777216 & i)) this._reject(r._reason()); else {
var u = new f("late cancellation observer");
r._attachExtraTrace(u), this._reject(u);
}
} else this._reject(n());
}
}, T.prototype._rejectCallback = function(e, t, n) {
var a = s.ensureErrorObject(e), r = a === e;
if (!r && !n && k.warnings()) {
var i = "a promise was rejected with a non-error: " + s.classString(e);
this._warn(i, !0);
}
this._attachExtraTrace(a, !!t && r), this._reject(e);
}, T.prototype._resolveFromExecutor = function(e) {
if (e !== g) {
var t = this;
this._captureStackTrace(), this._pushContext();
var n = !0, a = this._execute(e, function(e) {
t._resolveCallback(e);
}, function(e) {
t._rejectCallback(e, n);
});
n = !1, this._popContext(), void 0 !== a && t._rejectCallback(a, !0);
}
}, T.prototype._settlePromiseFromHandler = function(e, t, n, a) {
var r = a._bitField;
if (0 == (65536 & r)) {
var i;
a._pushContext(), t === m ? n && "number" == typeof n.length ? i = S(e).apply(this._boundValue(), n) : (i = E).e = new h("cannot .spread() a non-array: " + s.classString(n)) : i = S(e).call(t, n);
var o = a._popContext();
0 == (65536 & (r = a._bitField)) && (i === _ ? a._reject(n) : i === E ? a._rejectCallback(i.e, !1) : (k.checkForgottenReturns(i, o, "", a, this), 
a._resolveCallback(i)));
}
}, T.prototype._target = function() {
for (var e = this; e._isFollowing(); ) e = e._followee();
return e;
}, T.prototype._followee = function() {
return this._rejectionHandler0;
}, T.prototype._setFollowee = function(e) {
this._rejectionHandler0 = e;
}, T.prototype._settlePromise = function(e, t, n, r) {
var o = e instanceof T, s = this._bitField, u = 0 != (134217728 & s);
0 != (65536 & s) ? (o && e._invokeInternalOnCancel(), n instanceof D && n.isFinallyHandler() ? (n.cancelPromise = e, 
S(t).call(n, r) === E && e._reject(E.e)) : t === a ? e._fulfill(a.call(n)) : n instanceof i ? n._promiseCancelled(e) : o || e instanceof y ? e._cancel() : n.cancel()) : "function" == typeof t ? o ? (u && e._setAsyncGuaranteed(), 
this._settlePromiseFromHandler(t, n, r, e)) : t.call(n, r, e) : n instanceof i ? n._isResolved() || (0 != (33554432 & s) ? n._promiseFulfilled(r, e) : n._promiseRejected(r, e)) : o && (u && e._setAsyncGuaranteed(), 
0 != (33554432 & s) ? e._fulfill(r) : e._reject(r));
}, T.prototype._settlePromiseLateCancellationObserver = function(e) {
var t = e.handler, n = e.promise, a = e.receiver, r = e.value;
"function" == typeof t ? n instanceof T ? this._settlePromiseFromHandler(t, a, r, n) : t.call(a, r, n) : n instanceof T && n._reject(r);
}, T.prototype._settlePromiseCtx = function(e) {
this._settlePromise(e.promise, e.handler, e.receiver, e.value);
}, T.prototype._settlePromise0 = function(e, t, n) {
var a = this._promise0, r = this._receiverAt(0);
this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(a, e, r, t);
}, T.prototype._clearCallbackDataAtIndex = function(e) {
var t = 4 * e - 4;
this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0;
}, T.prototype._fulfill = function(e) {
var t = this._bitField;
if (!((117506048 & t) >>> 16)) {
if (e === this) {
var a = n();
return this._attachExtraTrace(a), this._reject(a);
}
this._setFulfilled(), this._rejectionHandler0 = e, (65535 & t) > 0 && (0 != (134217728 & t) ? this._settlePromises() : d.settlePromises(this), 
this._dereferenceTrace());
}
}, T.prototype._reject = function(e) {
var t = this._bitField;
if (!((117506048 & t) >>> 16)) {
if (this._setRejected(), this._fulfillmentHandler0 = e, this._isFinal()) return d.fatalError(e, s.isNode);
(65535 & t) > 0 ? d.settlePromises(this) : this._ensurePossibleRejectionHandled();
}
}, T.prototype._fulfillPromises = function(e, t) {
for (var n = 1; n < e; n++) {
var a = this._fulfillmentHandlerAt(n), r = this._promiseAt(n), i = this._receiverAt(n);
this._clearCallbackDataAtIndex(n), this._settlePromise(r, a, i, t);
}
}, T.prototype._rejectPromises = function(e, t) {
for (var n = 1; n < e; n++) {
var a = this._rejectionHandlerAt(n), r = this._promiseAt(n), i = this._receiverAt(n);
this._clearCallbackDataAtIndex(n), this._settlePromise(r, a, i, t);
}
}, T.prototype._settlePromises = function() {
var e = this._bitField, t = 65535 & e;
if (t > 0) {
if (0 != (16842752 & e)) {
var n = this._fulfillmentHandler0;
this._settlePromise0(this._rejectionHandler0, n, e), this._rejectPromises(t, n);
} else {
var a = this._rejectionHandler0;
this._settlePromise0(this._fulfillmentHandler0, a, e), this._fulfillPromises(t, a);
}
this._setLength(0);
}
this._clearCancellationData();
}, T.prototype._settledValue = function() {
var e = this._bitField;
return 0 != (33554432 & e) ? this._rejectionHandler0 : 0 != (16777216 & e) ? this._fulfillmentHandler0 : void 0;
}, T.defer = T.pending = function() {
var e;
return k.deprecated("Promise.defer", "new Promise"), {
promise: new T(g),
resolve: F,
reject: P
};
}, s.notEnumerableProp(T, "_makeSelfResolutionError", n), e("./method")(T, g, b, r, k), 
e("./bind")(T, g, b, k), e("./cancel")(T, y, r, k), e("./direct_resolve")(T), e("./synchronous_inspection")(T), 
e("./join")(T, y, b, g, d, u), T.Promise = T, T.version = "3.5.4", e("./map.js")(T, y, r, b, g, k), 
e("./call_get.js")(T), e("./using.js")(T, r, b, w, g, k), e("./timers.js")(T, g, k), 
e("./generators.js")(T, r, g, b, i, k), e("./nodeify.js")(T), e("./promisify.js")(T, g), 
e("./props.js")(T, y, b, r), e("./race.js")(T, g, b, r), e("./reduce.js")(T, y, r, b, g, k), 
e("./settle.js")(T, y, k), e("./some.js")(T, y, r), e("./filter.js")(T, g), e("./each.js")(T, g), 
e("./any.js")(T), s.toFastProperties(T), s.toFastProperties(T.prototype), I({
a: 1
}), I({
b: 2
}), I({
c: 3
}), I(1), I(function() {}), I(void 0), I(!1), I(new T(g)), k.setBounds(l.firstLineError, s.lastLineError), 
T;
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
t.exports = function(t, n, a, r, i) {
var o = e("./util"), s = o.isArray;
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
var a = this._promise = new t(n);
e instanceof t && a._propagateFrom(e, 3), a._setOnCancel(this), this._values = e, 
this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
}
return o.inherits(c, i), c.prototype.length = function() {
return this._length;
}, c.prototype.promise = function() {
return this._promise;
}, c.prototype._init = function e(n, i) {
var s = a(this._values, this._promise);
if (s instanceof t) {
var c = (s = s._target())._bitField;
if (this._values = s, 0 == (50397184 & c)) return this._promise._setAsyncGuaranteed(), 
s._then(e, this._reject, void 0, this, i);
if (0 == (33554432 & c)) return 0 != (16777216 & c) ? this._reject(s._reason()) : this._cancel();
s = s._value();
}
if (null !== (s = o.asArray(s))) 0 !== s.length ? this._iterate(s) : -5 === i ? this._resolveEmptyArray() : this._resolve(u(i)); else {
var l = r("expecting an array or an iterable object but got " + o.classString(s)).reason();
this._promise._rejectCallback(l, !1);
}
}, c.prototype._iterate = function(e) {
var n = this.getActualLength(e.length);
this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
for (var r = this._promise, i = !1, o = null, s = 0; s < n; ++s) {
var u = a(e[s], r);
o = u instanceof t ? (u = u._target())._bitField : null, i ? null !== o && u.suppressUnhandledRejections() : null !== o ? 0 == (50397184 & o) ? (u._proxy(this, s), 
this._values[s] = u) : i = 0 != (33554432 & o) ? this._promiseFulfilled(u._value(), s) : 0 != (16777216 & o) ? this._promiseRejected(u._reason(), s) : this._promiseCancelled(s) : i = this._promiseFulfilled(u, s);
}
i || r._setAsyncGuaranteed();
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
var a = {}, r = e("./util"), i = e("./nodeback"), o = r.withAppended, s = r.maybeWrapAsError, u = r.canEvaluate, c = e("./errors").TypeError, l = "Async", d = {
__isPromisified__: !0
}, p, h = new RegExp("^(?:" + [ "arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__" ].join("|") + ")$"), f = function(e) {
return r.isIdentifier(e) && "_" !== e.charAt(0) && "constructor" !== e;
};
function g(e) {
return !h.test(e);
}
function m(e) {
try {
return !0 === e.__isPromisified__;
} catch (e) {
return !1;
}
}
function _(e, t, n) {
var a = r.getDataPropertyOrDefault(e, t + n, d);
return !!a && m(a);
}
function b(e, t, n) {
for (var a = 0; a < e.length; a += 2) {
var r = e[a];
if (n.test(r)) for (var i = r.replace(n, ""), o = 0; o < e.length; o += 2) if (e[o] === i) throw new c("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", t));
}
}
function y(e, t, n, a) {
for (var i = r.inheritedDataKeys(e), o = [], s = 0; s < i.length; ++s) {
var u = i[s], c = e[u], l = a === f || f(u, c, e);
"function" != typeof c || m(c) || _(e, u, t) || !a(u, c, e, l) || o.push(u, c);
}
return b(o, t, n), o;
}
var v = function(e) {
return e.replace(/([$])/, "\\$");
}, w;
if (0) var k, x, D, j;
function C(e, u, c, l, d, p) {
var h = function() {
return this;
}(), f = e;
function g() {
var r = u;
u === a && (r = this);
var c = new t(n);
c._captureStackTrace();
var l = "string" == typeof f && this !== h ? this[f] : e, d = i(c, p);
try {
l.apply(r, o(arguments, d));
} catch (e) {
c._rejectCallback(s(e), !0, !0);
}
return c._isFateSealed() || c._setAsyncGuaranteed(), c;
}
return "string" == typeof f && (e = l), r.notEnumerableProp(g, "__isPromisified__", !0), 
g;
}
var E = u ? void 0 : C;
function S(e, t, n, i, o) {
for (var s = new RegExp(v(t) + "$"), u = y(e, t, s, n), c = 0, l = u.length; c < l; c += 2) {
var d = u[c], p = u[c + 1], h = d + t;
if (i === E) e[h] = E(d, a, d, p, t, o); else {
var f = i(p, function() {
return E(d, a, d, p, t, o);
});
r.notEnumerableProp(f, "__isPromisified__", !0), e[h] = f;
}
}
return r.toFastProperties(e), e;
}
function A(e, t, n) {
return E(e, t, void 0, e, null, n);
}
t.promisify = function(e, t) {
if ("function" != typeof e) throw new c("expecting a function but got " + r.classString(e));
if (m(e)) return e;
var n, i, o = A(e, void 0 === (t = Object(t)).context ? a : t.context, !!t.multiArgs);
return r.copyDescriptors(e, o, g), o;
}, t.promisifyAll = function(e, t) {
if ("function" != typeof e && "object" != typeof e) throw new c("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
var n = !!(t = Object(t)).multiArgs, a = t.suffix;
"string" != typeof a && (a = "Async");
var i = t.filter;
"function" != typeof i && (i = f);
var o = t.promisifier;
if ("function" != typeof o && (o = E), !r.isIdentifier(a)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
for (var s = r.inheritedDataKeys(e), u = 0; u < s.length; ++u) {
var l = e[s[u]];
"constructor" !== s[u] && r.isClass(l) && (S(l.prototype, a, i, o, n), S(l, a, i, o, n));
}
return S(e, a, i, o, n);
};
};
}, {
"./errors": 12,
"./nodeback": 20,
"./util": 36
} ],
25: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a, r) {
var i = e("./util"), o = i.isObject, s = e("./es5"), u;
"function" == typeof Map && (u = Map);
var c = function() {
var e = 0, t = 0;
function n(n, a) {
this[e] = n, this[e + t] = a, e++;
}
return function a(r) {
t = r.size, e = 0;
var i = new Array(2 * r.size);
return r.forEach(n, i), i;
};
}(), l = function(e) {
for (var t = new u(), n = e.length / 2 | 0, a = 0; a < n; ++a) {
var r = e[n + a], i = e[a];
t.set(r, i);
}
return t;
};
function d(e) {
var t = !1, n;
if (void 0 !== u && e instanceof u) n = c(e), t = !0; else {
var a = s.keys(e), r = a.length;
n = new Array(2 * r);
for (var i = 0; i < r; ++i) {
var o = a[i];
n[i] = e[o], n[i + r] = o;
}
}
this.constructor$(n), this._isMap = t, this._init$(void 0, t ? -6 : -3);
}
function p(e) {
var n, i = a(e);
return o(i) ? (n = i instanceof t ? i._then(t.props, void 0, void 0, void 0, void 0) : new d(i).promise(), 
i instanceof t && n._propagateFrom(i, 2), n) : r("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
}
i.inherits(d, n), d.prototype._init = function() {}, d.prototype._promiseFulfilled = function(e, t) {
var n;
if (this._values[t] = e, ++this._totalResolved >= this._length) {
var a;
if (this._isMap) a = l(this._values); else {
a = {};
for (var r = this.length(), i = 0, o = this.length(); i < o; ++i) a[this._values[i + r]] = this._values[i];
}
return this._resolve(a), !0;
}
return !1;
}, d.prototype.shouldCopyValues = function() {
return !1;
}, d.prototype.getActualLength = function(e) {
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
function a(e, t, n, a, r) {
for (var i = 0; i < r; ++i) n[i + a] = e[i + t], e[i + t] = void 0;
}
function r(e) {
this._capacity = e, this._length = 0, this._front = 0;
}
r.prototype._willBeOverCapacity = function(e) {
return this._capacity < e;
}, r.prototype._pushOne = function(e) {
var t = this.length(), n;
this._checkCapacity(t + 1), this[this._front + t & this._capacity - 1] = e, this._length = t + 1;
}, r.prototype.push = function(e, t, n) {
var a = this.length() + 3;
if (this._willBeOverCapacity(a)) return this._pushOne(e), this._pushOne(t), void this._pushOne(n);
var r = this._front + a - 3;
this._checkCapacity(a);
var i = this._capacity - 1;
this[r + 0 & i] = e, this[r + 1 & i] = t, this[r + 2 & i] = n, this._length = a;
}, r.prototype.shift = function() {
var e = this._front, t = this[e];
return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length--, 
t;
}, r.prototype.length = function() {
return this._length;
}, r.prototype._checkCapacity = function(e) {
this._capacity < e && this._resizeTo(this._capacity << 1);
}, r.prototype._resizeTo = function(e) {
var t = this._capacity, n, r, i;
this._capacity = e, a(this, 0, this, t, this._front + this._length & t - 1);
}, t.exports = r;
}, {} ],
27: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a, r) {
var i = e("./util"), o = function(e) {
return e.then(function(t) {
return s(t, e);
});
};
function s(e, s) {
var u = a(e);
if (u instanceof t) return o(u);
if (null === (e = i.asArray(e))) return r("expecting an array or an iterable object but got " + i.classString(e));
var c = new t(n);
void 0 !== s && c._propagateFrom(s, 3);
for (var l = c._fulfill, d = c._reject, p = 0, h = e.length; p < h; ++p) {
var f = e[p];
(void 0 !== f || p in e) && t.cast(f)._then(l, d, void 0, c, null);
}
return c;
}
t.race = function(e) {
return s(e, void 0);
}, t.prototype.race = function() {
return s(this, void 0);
};
};
}, {
"./util": 36
} ],
28: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a, r, i, o) {
var s = t._getDomain, u = e("./util"), c = u.tryCatch;
function l(e, n, a, r) {
this.constructor$(e);
var o = s();
this._fn = null === o ? n : u.domainBind(o, n), void 0 !== a && (a = t.resolve(a))._attachCancellationCallback(this), 
this._initialValue = a, this._currentCancellable = null, this._eachValues = r === i ? Array(this._length) : 0 === r ? null : void 0, 
this._promise._captureStackTrace(), this._init$(void 0, -5);
}
function d(e, t) {
this.isFulfilled() ? t._resolve(e) : t._reject(e);
}
function p(e, t, n, r) {
return "function" != typeof t ? a("expecting a function but got " + u.classString(t)) : new l(e, t, n, r).promise();
var i;
}
function h(e) {
this.accum = e, this.array._gotAccum(e);
var n = r(this.value, this.array._promise);
return n instanceof t ? (this.array._currentCancellable = n, n._then(f, void 0, void 0, this, void 0)) : f.call(this, n);
}
function f(e) {
var n = this.array, a = n._promise, r = c(n._fn), i;
a._pushContext(), (i = void 0 !== n._eachValues ? r.call(a._boundValue(), e, this.index, this.length) : r.call(a._boundValue(), this.accum, e, this.index, this.length)) instanceof t && (n._currentCancellable = i);
var s = a._popContext();
return o.checkForgottenReturns(i, s, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", a), 
i;
}
u.inherits(l, n), l.prototype._gotAccum = function(e) {
void 0 !== this._eachValues && null !== this._eachValues && e !== i && this._eachValues.push(e);
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
var n, a;
this._values = e;
var r = e.length;
if (void 0 !== this._initialValue ? (n = this._initialValue, a = 0) : (n = t.resolve(e[0]), 
a = 1), this._currentCancellable = n, !n.isRejected()) for (;a < r; ++a) {
var i = {
accum: null,
value: e[a],
index: a,
length: r,
array: this
};
n = n._then(h, void 0, void 0, i, void 0);
}
void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), 
n._then(d, d, void 0, n, this);
}, t.prototype.reduce = function(e, t) {
return p(this, e, t, null);
}, t.reduce = function(e, t, n, a) {
return p(e, t, n, a);
};
};
}, {
"./util": 36
} ],
29: [ function(e, t, n) {
"use strict";
var a = e("./util"), r, i = function() {
throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
}, o = a.getNativePromise();
if (a.isNode && "undefined" == typeof MutationObserver) {
var s = global.setImmediate, u = process.nextTick;
r = a.isRecentNode ? function(e) {
s.call(global, e);
} : function(e) {
u.call(process, e);
};
} else if ("function" == typeof o && "function" == typeof o.resolve) {
var c = o.resolve();
r = function(e) {
c.then(e);
};
} else r = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? void 0 !== setImmediate ? function(e) {
setImmediate(e);
} : "undefined" != typeof setTimeout ? function(e) {
setTimeout(e, 0);
} : i : function() {
var e = document.createElement("div"), t = {
attributes: !0
}, n = !1, a = document.createElement("div"), r;
new MutationObserver(function() {
e.classList.toggle("foo"), n = !1;
}).observe(a, t);
var i = function() {
n || (n = !0, a.classList.toggle("foo"));
};
return function n(a) {
var r = new MutationObserver(function() {
r.disconnect(), a();
});
r.observe(e, t), i();
};
}();
t.exports = r;
}, {
"./util": 36
} ],
30: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a) {
var r = t.PromiseInspection, i;
function o(e) {
this.constructor$(e);
}
e("./util").inherits(o, n), o.prototype._promiseResolved = function(e, t) {
var n;
return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), 
!0);
}, o.prototype._promiseFulfilled = function(e, t) {
var n = new r();
return n._bitField = 33554432, n._settledValueField = e, this._promiseResolved(t, n);
}, o.prototype._promiseRejected = function(e, t) {
var n = new r();
return n._bitField = 16777216, n._settledValueField = e, this._promiseResolved(t, n);
}, t.settle = function(e) {
return a.deprecated(".settle()", ".reflect()"), new o(e).promise();
}, t.prototype.settle = function() {
return t.settle(this);
};
};
}, {
"./util": 36
} ],
31: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a) {
var r = e("./util"), i = e("./errors").RangeError, o = e("./errors").AggregateError, s = r.isArray, u = {};
function c(e) {
this.constructor$(e), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
}
function l(e, t) {
if ((0 | t) !== t || t < 0) return a("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
var n = new c(e), r = n.promise();
return n.setHowMany(t), n.init(), r;
}
r.inherits(c, n), c.prototype._init = function() {
if (this._initialized) if (0 !== this._howMany) {
this._init$(void 0, -5);
var e = s(this._values);
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
for (var e = new o(), t = this.length(); t < this._values.length; ++t) this._values[t] !== u && e.push(this._values[t]);
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
return new i(t);
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
}, a = t.prototype.error = t.prototype.reason = function() {
if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
return this._settledValue();
}, r = t.prototype.isFulfilled = function() {
return 0 != (33554432 & this._bitField);
}, i = t.prototype.isRejected = function() {
return 0 != (16777216 & this._bitField);
}, o = t.prototype.isPending = function() {
return 0 == (50397184 & this._bitField);
}, s = t.prototype.isResolved = function() {
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
return o.call(this._target());
}, e.prototype.isRejected = function() {
return i.call(this._target());
}, e.prototype.isFulfilled = function() {
return r.call(this._target());
}, e.prototype.isResolved = function() {
return s.call(this._target());
}, e.prototype.value = function() {
return n.call(this._target());
}, e.prototype.reason = function() {
var e = this._target();
return e._unsetRejectionIsUnhandled(), a.call(e);
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
var a = e("./util"), r = a.errorObj, i = a.isObject;
function o(e, a) {
if (i(e)) {
if (e instanceof t) return e;
var o = u(e);
if (o === r) {
a && a._pushContext();
var s = t.reject(o.e);
return a && a._popContext(), s;
}
if ("function" == typeof o) {
if (l(e)) {
var s = new t(n);
return e._then(s._fulfill, s._reject, void 0, s, null), s;
}
return d(e, o, a);
}
}
return e;
}
function s(e) {
return e.then;
}
function u(e) {
try {
return s(e);
} catch (e) {
return r.e = e, r;
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
function d(e, i, o) {
var s = new t(n), u = s;
o && o._pushContext(), s._captureStackTrace(), o && o._popContext();
var c = !0, l = a.tryCatch(i).call(e, d, p);
function d(e) {
s && (s._resolveCallback(e), s = null);
}
function p(e) {
s && (s._rejectCallback(e, c, !0), s = null);
}
return c = !1, s && l === r && (s._rejectCallback(l.e, !0, !0), s = null), u;
}
return o;
};
}, {
"./util": 36
} ],
34: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a) {
var r = e("./util"), i = t.TimeoutError;
function o(e) {
this.handle = e;
}
o.prototype._resultCancelled = function() {
clearTimeout(this.handle);
};
var s = function(e) {
return u(+this).thenReturn(e);
}, u = t.delay = function(e, r) {
var i, u;
return void 0 !== r ? (i = t.resolve(r)._then(s, null, null, e, void 0), a.cancellation() && r instanceof t && i._setOnCancel(r)) : (i = new t(n), 
u = setTimeout(function() {
i._fulfill();
}, +e), a.cancellation() && i._setOnCancel(new o(u)), i._captureStackTrace()), i._setAsyncGuaranteed(), 
i;
};
t.prototype.delay = function(e) {
return u(e, this);
};
var c = function(e, t, n) {
var a;
a = "string" != typeof t ? t instanceof Error ? t : new i("operation timed out") : new i(t), 
r.markAsOriginatingFromRejection(a), e._attachExtraTrace(a), e._reject(a), null != n && n.cancel();
};
function l(e) {
return clearTimeout(this.handle), e;
}
function d(e) {
throw clearTimeout(this.handle), e;
}
t.prototype.timeout = function(e, t) {
var n, r;
e = +e;
var i = new o(setTimeout(function e() {
n.isPending() && c(n, t, r);
}, e));
return a.cancellation() ? (r = this.then(), (n = r._then(l, d, void 0, i, void 0))._setOnCancel(i)) : n = this._then(l, d, void 0, i, void 0), 
n;
};
};
}, {
"./util": 36
} ],
35: [ function(e, t, n) {
"use strict";
t.exports = function(t, n, a, r, i, o) {
var s = e("./util"), u = e("./errors").TypeError, c = e("./util").inherits, l = s.errorObj, d = s.tryCatch, p = {};
function h(e) {
setTimeout(function() {
throw e;
}, 0);
}
function f(e) {
var t = a(e);
return t !== e && "function" == typeof e._isDisposable && "function" == typeof e._getDisposer && e._isDisposable() && t._setDisposable(e._getDisposer()), 
t;
}
function g(e, n) {
var r = 0, o = e.length, s = new t(i);
function u() {
if (r >= o) return s._fulfill();
var i = f(e[r++]);
if (i instanceof t && i._isDisposable()) {
try {
i = a(i._getDisposer().tryDispose(n), e.promise);
} catch (e) {
return h(e);
}
if (i instanceof t) return i._then(u, h, null, null, null);
}
u();
}
return u(), s;
}
function m(e, t, n) {
this._data = e, this._promise = t, this._context = n;
}
function _(e, t, n) {
this.constructor$(e, t, n);
}
function b(e) {
return m.isDisposer(e) ? (this.resources[this.index]._setDisposable(e), e.promise()) : e;
}
function y(e) {
this.length = e, this.promise = null, this[e - 1] = null;
}
m.prototype.data = function() {
return this._data;
}, m.prototype.promise = function() {
return this._promise;
}, m.prototype.resource = function() {
return this.promise().isFulfilled() ? this.promise().value() : p;
}, m.prototype.tryDispose = function(e) {
var t = this.resource(), n = this._context;
void 0 !== n && n._pushContext();
var a = t !== p ? this.doDispose(t, e) : null;
return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, 
a;
}, m.isDisposer = function(e) {
return null != e && "function" == typeof e.resource && "function" == typeof e.tryDispose;
}, c(_, m), _.prototype.doDispose = function(e, t) {
var n;
return this.data().call(e, e, t);
}, y.prototype._resultCancelled = function() {
for (var e = this.length, n = 0; n < e; ++n) {
var a = this[n];
a instanceof t && a.cancel();
}
}, t.using = function() {
var e = arguments.length;
if (e < 2) return n("you must pass at least 2 arguments to Promise.using");
var r = arguments[e - 1], i;
if ("function" != typeof r) return n("expecting a function but got " + s.classString(r));
var u = !0;
2 === e && Array.isArray(arguments[0]) ? (e = (i = arguments[0]).length, u = !1) : (i = arguments, 
e--);
for (var c = new y(e), p = 0; p < e; ++p) {
var h = i[p];
if (m.isDisposer(h)) {
var f = h;
(h = h.promise())._setDisposable(f);
} else {
var _ = a(h);
_ instanceof t && (h = _._then(b, null, null, {
resources: c,
index: p
}, void 0));
}
c[p] = h;
}
for (var v = new Array(c.length), p = 0; p < v.length; ++p) v[p] = t.resolve(c[p]).reflect();
var w = t.all(v).then(function(e) {
for (var t = 0; t < e.length; ++t) {
var n = e[t];
if (n.isRejected()) return l.e = n.error(), l;
if (!n.isFulfilled()) return void w.cancel();
e[t] = n.value();
}
k._pushContext(), r = d(r);
var a = u ? r.apply(void 0, e) : r(e), i = k._popContext();
return o.checkForgottenReturns(a, i, "Promise.using", k), a;
}), k = w.lastly(function() {
var e = new t.PromiseInspection(w);
return g(c, e);
});
return c.promise = k, k._setOnCancel(c), k;
}, t.prototype._setDisposable = function(e) {
this._bitField = 131072 | this._bitField, this._disposer = e;
}, t.prototype._isDisposable = function() {
return (131072 & this._bitField) > 0;
}, t.prototype._getDisposer = function() {
return this._disposer;
}, t.prototype._unsetDisposable = function() {
this._bitField = -131073 & this._bitField, this._disposer = void 0;
}, t.prototype.disposer = function(e) {
if ("function" == typeof e) return new _(e, this, r());
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
function a() {
for (var a in this.constructor = e, this.constructor$ = t, t.prototype) n.call(t.prototype, a) && "$" !== a.charAt(a.length - 1) && (this[a + "$"] = t.prototype[a]);
}
return a.prototype = t.prototype, e.prototype = new a(), e.prototype;
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
var n = e.length, a = new Array(n + 1), r;
for (r = 0; r < n; ++r) a[r] = e[r];
return a[r] = t, a;
}
function getDataPropertyOrDefault(e, t, n) {
if (!es5.isES5) return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
var a = Object.getOwnPropertyDescriptor(e, t);
return null != a ? null == a.get && null == a.set ? a.value : n : void 0;
}
function notEnumerableProp(e, t, n) {
if (isPrimitive(e)) return e;
var a = {
value: n,
configurable: !0,
enumerable: !1,
writable: !0
};
return es5.defineProperty(e, t, a), e;
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
for (var a = [], r = Object.create(null); null != e && !t(e); ) {
var i;
try {
i = n(e);
} catch (e) {
return a;
}
for (var o = 0; o < i.length; ++o) {
var s = i[o];
if (!r[s]) {
r[s] = !0;
var u = Object.getOwnPropertyDescriptor(e, s);
null != u && null == u.get && null == u.set && a.push(s);
}
}
e = es5.getPrototypeOf(e);
}
return a;
};
}
var a = {}.hasOwnProperty;
return function(n) {
if (t(n)) return [];
var r = [];
e: for (var i in n) if (a.call(n, i)) r.push(i); else {
for (var o = 0; o < e.length; ++o) if (a.call(e[o], i)) continue e;
r.push(i);
}
return r;
};
}(), thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(e) {
try {
if ("function" == typeof e) {
var t = es5.names(e.prototype), n = es5.isES5 && t.length > 1, a = t.length > 0 && !(1 === t.length && "constructor" === t[0]), r = thisAssignmentPattern.test(e + "") && es5.names(e).length > 0;
if (n || a || r) return !0;
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
for (var a = new Array(e), r = 0; r < e; ++r) a[r] = t + r + n;
return a;
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
for (var a = es5.names(e), r = 0; r < a.length; ++r) {
var i = a[r];
if (n(i)) try {
es5.defineProperty(t, i, es5.getDescriptor(e, i));
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
for (var t = [], n = e[Symbol.iterator](), a; !(a = n.next()).done; ) t.push(a.value);
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
}).call(this, __webpack_require__(110), __webpack_require__(1), __webpack_require__(129).setImmediate);
}, function(e, t, n) {
"use strict";
(function(t) {
e.exports = {
metadata: {
include: [ "http*://blog.reimu.net/*" ],
exclude: []
},
test: e => !!e.host.match(/blog\.reimu\.net/),
main(e) {
t(".entry-content pre:not(:visited)").css({
"border-color": "rgba(185, 42, 183, 0.56)"
}).show();
},
adblock(e) {}
};
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e = t._url_obj) {
let n = a("#adult_check_box .btn_yes a");
if (n.length) return n[0].click(), !0;
}
e.exports = {
metadata: {
include: [ "http*://www.dlsite.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/dlsite\.com/),
main(e = t._url_obj) {
if (r(e)) return !0;
const a = n(2);
a("").prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e) {
return;
e.host.match(/www\.gamer\.com\.tw/) && setTimeout(function() {
let e = t(".BA-left #signin-btn[onclick]");
e.length && e[0].click();
}, 1e3);
}
function i(e) {
t('a[href*="ref.gamer.com.tw"]', "article, #BH-master").attr("href", function(e, t) {
let n = t.substr(t.indexOf("redir.php?url=") + "redir.php?url=".length);
return decodeURIComponent(n);
}).prop("target", "_blank");
}
function o(e) {
if (e.path.match(/\/A\.php/) && document.referrer.match(/acgDetail\.php/)) return location.href = location.href.replace("/A.php", "/B.php"), 
!0;
}
function s(e) {
e.path.match(/post1\.php/) && t("#BH-master #form1").eq(0).each(function() {
let e = t(this);
t(':input[name="pwd2"]', e).val(function(e, n) {
if (!n) return t(this).prev("span").find("strong").text();
});
});
}
e.exports = {
metadata: {
include: [ "http*://www.gamer.com.tw/*", "http*://www.gamer.com.tw/index*.php*", "http*://acg.gamer.com.tw/acgDetail.php?s=*", "http*://gnn.gamer.com.tw/*.html", "http*://gnn.gamer.com.tw/*k=*", "http*://forum.gamer.com.tw/*bsn=*", "http*://home.gamer.com.tw/*", "http*://acg.gamer.com.tw/*", "http*://m.gamer.com.tw/*", "http*://ani.gamer.com.tw/*" ],
exclude: [ "http*://gc.bahamut.com.tw/*", "http*://*.bahamut.com.tw/*", "http*://*.bahamut.com.tw/js/*" ]
},
test: e => !!e.host.match(/gamer\.com\.tw/),
main(a) {
if (o(a)) return;
const r = n(4), u = n(7), {debounce: c} = n(3), {throttle: l} = n(3), d = n(2);
d([ ".FM-blist .FM-blist3 a, .GN-lbox2B a, .b-list .b-list__main a, #headnews a, .BH-lbox.GN-lbox9 a, .ACG-maintitle a, .ACG-mster_box4 a", ".newanime a, a.animelook, a.newanime__content", ".BH-rbox a[data-gtm]", ".HOME-mainbox1 a", "a.newanime_img, a.newanime_text", '.index_season[name="newanimeul"] a, .anime_list a', "#topBarMsgList_forum a" ].join()).prop("target", "_blank"), 
t("#topBar_forum").on("click", c(200, function() {
d([ "#topBarMsgList_forum a" ].join()).prop("target", "_blank");
}));
const p = n(10), h = n(8);
if (e.exports.adblock(a), a.path.match(/animeVideo/)) {
const {debounce: e} = n(3), {throttle: a} = n(3);
h.GM_addStyle([ `body, #BH_background, .BH_background, .sky, .bullet-send, .bullet-send .bullet-send-setting, .bullet-send .bullet-send-submit, .bullet-send .bullet-send-msg input, .anime-title { background: ${p.bg_dark.background}; }`, `.sky ul.member a:hover, .bullet-send, .bullet-send .bullet-send-setting, .bullet-send .bullet-send-submit, .bullet-send .bullet-send-msg input, .anime-title, .season a { color: ${p.bg_dark_text.color}; }`, ".bullet-send { border: 0px none #fff; }", ".mainmenu { opacity: 0.5; }" ].join("")), 
t(".news_list").css("background-color", t(".anime-title").css("background-color")), 
t("#BH_background, .BH_background, .sky");
const r = n(123).jquery, i = n(130).PromiseInterval;
let o = i(function(e) {
let n = t("#video-container #adult");
return h.debug(e.count, n), n.length ? (n.is(":visible") ? (h.log("自動略過警告"), n[0].click()) : h.debug(t("#ani_video").attr("class")), 
!0) : !t("#ani_video.vjs-ad-playing").length && void 0;
}, 1e3);
o.promise.delay(2e3).then(function() {
let e;
return h.debug(t("#ani_video").attr("class")), i(function(e) {
let n = t("#video-container .vast-skip-button:visible");
if (h.debug(e.count, n), n.length) {
let e = n.text();
if ("點此跳過廣告" == e || e && !/(\d+)/g.test(e)) return h.log("開始播放", e), n[0].click(), 
!0;
/(\d+)/g.test(e) && h.log("等待播放", `${RegExp.$1}s`);
} else if (t("#ani_video.vjs-waiting").length) ; else if (!t("#ani_video.vjs-ad-playing").length) return h.log("似乎已經略過廣告", t("#ani_video").attr("class")), 
!1;
}, 1500).promise.timeout(35e3).catch(function() {
return !1;
});
}), t(window).one("load.animeVideo", e(1500, function() {
o.promise.isPending() && t("#ani_video:not(.vjs-waiting)").length && o.fn(!0);
}));
} else if (a.host.match(/www\.gamer\.com\.tw/)) t("#gnn_head, #homeOdata, #LiveBlock, #hothala, #rivers").on("click", ".BA-cbox a, .EXA8 a, .figure a", function(e) {
r(e), window.open(t(this).prop("href"), "_blank");
}); else if (a.path.match(/G1\.php/)) {
let e = d("#BH-master .FM-stb1 a").prop("target", "_blank");
} else a.path.match(/B(?:_legend)?\.php/) && t("#BH-master > .FM-tags:eq(0) a:eq(0)").clone().attr("href", function(e, t) {
let n;
return `https://forum.gamer.com.tw/listtype.php?bsn=${t.replace(/^.+[\?&]bsn=(\d+)(?:&.+)?$/gi, "$1")}&stype=10`;
}).text("取消搜尋").removeAttr("id, title").css({
"margin-left": "0.25em",
"border-color": "#6b676a"
}).appendTo("#BH-master > .FM-tags:eq(0)");
s(a), i(a), t([ ".GN-thumbnail img, article img.lazyload, .c-article__content img.lazyload", "#showPic img.acgPIC, .wikiContent img.gallery-image, img.lazyload" ].join()).not("[data-done]").filter("[data-src]:not([src])").attr("src", function() {
return t(this).attr("data-src");
}).addClass("lazyautosizes lazyloaded").removeClass("lazyload").addBack().imagesLoaded().always(function(e) {
let n;
t(e.elements).not("[data-done]").attr("data-done", !0).width(function(e, t) {
return t;
}).height(function(e, t) {
return t;
}).attr("src", function(e, t) {
return t.replace(/(bahamut\.com\.tw)\/[MS]\//, "$1/B/");
});
});
const f = n(5).packEvent;
t(window).on("keydown.page", f(function(e) {
switch (e.which) {
case u("pageup"):
case u("left"):
var n;
(n = t("#BH-pagebtn .prev:not(.no)")).length && (r(e), n[0].click());
break;

case u("pagedown"):
case u("right"):
var n;
(n = t("#BH-pagebtn .next:not(.no)")).length && (r(e), n[0].click());
break;
}
}));
},
adblock() {},
clearly(e = a._url_obj, r = null) {
const i = n(9);
let o = t(r);
return o = o.add(t("#BH-master, #BH-background").siblings()).add(t(".FM-cbox1 .FM-cbox2 .FM-cbox5 script, .FM-cbox1 .FM-cbox2 .FM-cbox5 #BMW_2").nextAll().addBack()).add(t('form[name="frm"]').nextAll().addBack().not("#BH-pagebtn").not("#BH-master > section, #BH-master > a")).add([ "#BH-pagebtn .no, .nocontent", ".FM-cbox1 .FM-cbox2 .FM-cbox4 a", "#headnews img, #track, #shop", "#BH-master h4 > img", ".GN-lbox5A i.fa", ".MSG-list9D", '.BH-rbox a > img[src*="folder"]', ".HOME-mainbox1a a > img", ".MSG-list8E, #frmDel, .BH-search, #BH-talk2", "script, iframe, #replys img.msghead.gamercard, img.IMG-C09, #BH-slave > .BH-slave_btns:eq(0) > .BH-slave_btnA:eq(0)", 'a[name="heretop"] + h4', '.FM-cbox2 img[id*="avatar"], .FM-msgbg button, .IMG-GA19', ".FM-guild", "#comment img, #comment .GN-lbox6B, h1 > img, h1 + .GN-lbox3A > img", ".c-user__guild, .c-user__avatar, .c-section__side, .c-post__body__buttonbar", ".c-section:has(> .c-editor, > .popular), .c-reply__editor, .reply-avatar", "#BH-footer", '#ACG-box1mark, .BH-lbox.ACG-mster_box4 a > img, .BH-lbox img[src*="newbtn_talk"], .BH-lbox img[src*="btn_edit"]', ".buttonbar, .c-post__header__tools", 'link[href*="photoswipe"]', 'link[href*="fonts"]', 'link[href*="font"]', 'link[href*="search"]', "meta", 'link:not([rel="stylesheet"])', "#dialogifyCss" ].join()), 
e.path.match(/creationDetail/) && (o = o.not("#BH-slave")), t('.FM-cbox10D a[id*="showoldCommend_"]').each(function() {
this.click();
}), i.GM_addStyle([ ".FM-tags a { background: initial; }", "#FM-tagsnow { background: #6073be; }" ].join("")), 
t("body").css({
background: "initial",
padding: 0
}), t("#BH-wrapper").css({
margin: "auto"
}), o;
}
};
}).call(this, n(0).default, n(1));
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://news.gamme.com.tw/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/gamme\.com\.tw/),
main(e = t._url_obj) {
const r = n(2);
r("#Foot-Photo a, #Foot-Photo1 a, #openlist").prop("target", "_blank");
const i = n(9);
i.GM_addStyle([ ".entry em a { color: initial; }", ".entry .photovia a { color: blue; }" ].join("")), 
a(window).on("load", function() {
a(".entry .photovia").not("[data-done]").attr("data-done", !0).clone().css({
"margin-top": 0,
"margin-bottom": "2.5em"
}).insertAfter(a("#entry > p.pimg:eq(0), #entry > p.pimg:eq(0) + pre").eq(-1));
}).triggerHandler("load"), a(window).scrollTo(a("#content, .body_box, .post").eq(-1));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add(a("#content").parentsUntil("body").addBack().siblings()).add(a("#content .boxbtn").nextAll().addBack()).add([ ".shareblock, .img_share1, .img_share2, #home_div", ".prev_arw, .next_arw, #commentsBottom", ".postdata img, .postdata .postarw", "body :hidden, script, iframe" ].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r() {
let e = a('#wrapper > div[style] > img[src*="auth_com3.jpg"]');
if (document.cookie = "_gat=1", e.length) return location.href = e.parent().find('a[href*="&gc=gc"]').prop("href"), 
!0;
}
e.exports = {
metadata: {
include: [ "http*://*.getchu.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/getchu\.com/),
main(e = t._url_obj) {
const i = n(4), o = n(2);
o(".product a, #detail_block a, .package a").attr("target", "_blank"), r() || (e.path.match(/search/) && 1 == a(".search_container .display > li").length ? window.location.href = a(".search_container .display > li #package_block a").eq(0).prop("href") : (a(window).scrollTo("#soft_table"), 
a(window).on("load.link", function(e) {
a(".tablebody img.soft, .highslide > img, .product img, img.soft_link").not("[data-done]").imagesLoaded().always(function(e) {
let t;
a(e.elements).not("[data-done]").attr("data-done", !0).width(function(e, t) {
return t;
}).height(function(e, t) {
return t;
}).attr("src", function(e, t) {
return t.replace(/_s\.(jpe?g|bmp|png|gif)$/, ".$1").replace(/(brandnew\/(?:[^\/]+))\/rc/, "$1/c").replace(/(package)_100\.(jpe?g|bmp|png|gif)$/, "$1.$2");
});
}), a(".product, .package, #detail_block, #wrapper").find('a[href*="soft.phtml"]:not([data-done])').attr("data-done", !0).prop("target", "_blank").prop("href", function(e, t) {
return t + "&gc=gc";
});
}).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case 33:
case 37:
var t;
(t = a(".charanum .charavisited").prev("li").find("a")).length && (i(e), t[0].click());
break;

case 34:
case 39:
var t;
(t = a(".charanum .charavisited").next("li").find("a")).length && (i(e), t[0].click());
break;
}
})).triggerHandler("load"), a(".gr_soft_carousel_wrap").on("DOMNodeInserted", function(e) {
a(window).triggerHandler("load.link");
})));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
r = r.add(a('#wrapper div[id*="getchu-search-container"]').nextAll()).add('#wrapper div[id*="getchu-search-container"]').add(a("#soft_table").prevAll()).add(a("#wrapper").siblings().not("#wrapper")).add(a("#camp").prev()).add(a("#camp").prev().nextAll()).add(a("#camp").parents("td, th").eq(0).next()).add(a("#sample").next(".tabletitle").next("div, table").nextAll().find("img")).add(a('a[name="REVIEW_UNIT"]').nextAll()).add(a(".mejs-video video").parentsUntil(".mejs-video").addBack().siblings()).add([ ".snsbox, .bikoubody", ".mejs-video:not(:has(video))", "iframe, script", 'button.header_wish, a[rel="leanModal"]', "body :hidden", ".footer_guide, .top_return", '#soft_table th + td[rowspan="2"]', '#soft_table div:has(> img[src*="samplepackage_s"])', "head img, head meta" ].join());
{
let e = /このブランドの作品一覧|この商品を見た人はこんな商品もチェックしています|チェックした商品の履歴|ユーザーレビュー/i;
a(".tabletitle").each(function() {
e.test(a(this).text()) && (r = r.add(a(this).nextAll().addBack()));
}).removeClass("tabletitle").wrapInner("<h1/>");
}
return a(".highslide").removeClass("highslide"), r;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e) {
a('a[href*="external?l="]', ".message-content").attr("href", function(e, t) {
let n = t.substr(t.indexOf("external?l=") + "external?l=".length);
return decodeURIComponent(n);
}).prop("target", "_blank");
const t = n(4);
a('a[href*="/home/leaving?target="]', ".Message").attr("href", function(e, t) {
let n = "/home/leaving?target=", a = t.substr(t.indexOf(n) + n.length);
return decodeURIComponent(a);
}).prop("target", "_blank").on("click", function(e) {
t(e), window.open(this.href, "_blank");
});
}
e.exports = {
metadata: {
include: [ "http*://*-forum.guildwars2.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/.+\-forum\.guildwars2\.com/),
main(e = t._url_obj) {
const i = n(4), o = n(2);
o([ ".Item a.Title, .DataList .Title a" ].join()).prop("target", "_blank"), r(e);
let s = a(".HeaderWrap .Username").text().trim();
n(9).GM_addStyle([ ".HeaderTopRight { background-color: #0006; }", ".HeaderTopRight:hover { background-color: #0009; }", ".Profile .DataListWrap .Title a { color: #2a2a2a; }", ".Profile .DataListWrap .Title a:focus, .Profile .DataListWrap .Title a:hover { color: #d90000; }", ".Section-DiscussionList .DiscussionsTable .DiscussionName a.Title { color: #e1261c; }", ".Section-DiscussionList .DiscussionsTable .DiscussionName a.Title:visited { color: #2a2a2a; }", ".Section-DiscussionList .DiscussionsTable .DiscussionName:hover a.Title { color: #e1261cb3; }" ].join("")), 
a(".MeMenu").on("click", ".PopList.Activities .Item a", function(e) {
i(e), window.open(this.href, "_blank");
}), a(window).on("resize", function() {
let e = a(".HeaderTopRight");
e.length && (console.log(a(".HeaderTop").position(), a(".HeaderTop").offset()), 
e.css("top", a(".HeaderTop").offset().top).css("left", a(".HeaderTop").offset().left + a(".HeaderTop").width() - e.width()).css({
position: "fixed",
"z-index": 1e3
}));
}).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
var i;
(i = a("#PagerAfter .Previous")).length && (r(e), i[0].click());
break;

case t("pagedown"):
case t("right"):
var i;
(i = a("#PagerAfter .Next")).length && (r(e), i[0].click());
break;
}
})).on("load", function() {
a(window).triggerHandler("resize");
}).triggerHandler("resize"), e.fragment || a(window).scrollTo(a(".HeaderWrap .HeaderBottomWrap, .MainContentWrap:has(.MessageList)").eq(-1));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://wiki.guildwars2.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/wiki.guildwars2\.com/),
main(e = t._url_obj) {
const a = n(2);
let r = [ "a.external, .gallery .thumb a.image", ".recipe-box a, .tpwrapper a, .recipe a" ];
e.path.match(/\/Game_updates\//) && r.push("#mw-content-text a"), a(r.join()).not(".mw-editsection a, #toc a").prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.gw2bltc.com/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(e = t._url_obj) {
const {debounce: r} = n(3), {throttle: i} = n(3), o = n(2);
o([].join()).prop("target", "_blank"), n(18).makeJQueryPlugin(a, window), a(".floatThead-wrapper").on("DOMNodeInserted", r(300, function(e) {
let t = o([ "tbody .td-name > a" ].join());
t.length > 1 ? t.prop("target", "_blank") : a(window).eventExists("load.referer") ? a(window).triggerHandler("load.referer") : 1 == t.length && t.prop("target", "_blank");
})), a("#wrap").on("submit.search", "#form-search-tp", function() {
a(window).triggerHandler("form.search");
}).on("click.search", "#form-search-tp #submit-search", function() {
a(window).triggerHandler("form.search");
}), a(window).on("form.search", function() {
a(window).off("load.referer");
}).on("load.referer", r(500, function() {
if (!document.referrer || document.referrer.match(/\/item\/.+/)) {
let e = o([ "tbody .td-name > a" ].join());
1 == e.length && (e.prop("target", "_self"), location.href = e.attr("href"));
}
})).on("load.ready", function() {
a(".floatThead-wrapper").triggerHandler("DOMNodeInserted");
}).triggerHandler("load.ready");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://www.u2mtv.com/movie/*" ],
match: [ "*://www.u2mtv.com/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2), {debounce: i} = n(3), {throttle: o} = n(3);
a("#movie_grid").on("DOMNodeInserted", i(100, function() {
a("body").triggerHandler("load.ready");
})), a("body").on("load.ready", i(100, function() {
r([ ".og-expanded .og-expander a", "#movie_grid a" ].join(",")).prop("target", "_blank");
})).triggerHandler("load.ready");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://tw.movies.yahoo.com/*", "http*://movies.yahoo.com.tw/*", "http*://movies.yahoo.com.tw/movie_*.html" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(e = t._url_obj) {
const r = n(2);
r([ ".release_list a, .area_timebox a, a.btn_s_time, .ranking_inner_r a" ].join()).prop("target", "_blank"), 
a(window).on("load.ready", function() {
a(window).scrollTo("#container, .maincontent");
}).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
var i;
(i = a(".page_numbox .prevtxt a")).length && (r(e), i[0].click(), a(window).triggerHandler("load.ready"));
break;

case t("pagedown"):
case t("right"):
var i;
(i = a(".page_numbox .nexttxt a")).length && (r(e), i[0].click(), a(window).triggerHandler("load.ready"));
break;
}
})).triggerHandler("load.ready");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e) {
a("img[data-src]").attr("src", function(e, t) {
if (t != a(this).attr("data-src")) return a(this).attr("data-src");
});
}
e.exports = {
metadata: {
include: [ "http*://*.qoo-app.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/qoo-app\.com/),
main(e = t._url_obj) {
const a = n(2);
a([ ".app-item a" ].join()).prop("target", "_blank"), r(e);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://qtfy.eu/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(r = t._url_obj) {
const {debounce: i} = n(3), {throttle: o} = n(3), s = n(2);
s([ "#main-layout .class-bar a" ].join()).prop("target", "_blank"), a(window).on("load.ready", i(6e3, function() {
e.exports.adblock(r);
})).on("load.ready", o(1e3, function() {
e.exports.adblock(r);
})).on("load.ready", function() {
e.exports.adblock(r);
}).triggerHandler("load.ready");
},
adblock(e = t._url_obj) {
a(".code-block").filter(":has(> .adblock_wrapper), :has(> .adblock_wrapper)").remove();
},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.reddit.com/r/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/reddit\.com/),
main(e = t._url_obj) {
const r = n(2);
let i;
r(".usertext-body a, .md-container a, .thing a, #mail, .message-count").prop("target", "_blank"), 
n(9).GM_addStyle([ ".thing a.title { color: #0000ff; }", ".thing a.title:visited { color: #2a2a2a; }", ".thing:hover a.title { color: #0000ffb3; }" ].join("")), 
a(window).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
var i;
(i = a(".nav-buttons .prev-button a")).length ? (r(e), i[0].click()) : console.log(e, i);
break;

case t("pagedown"):
case t("right"):
var i;
(i = a(".nav-buttons .next-button a")).length ? (r(e), i[0].click()) : console.log(e, i);
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, r = null) {
const i = n(9);
let o = a(r);
return o = o.add(a("body > .content").siblings().not("body > .side")).add(a(".linkinfo").parent(".spacer").nextAll()).add([ ".spacer:has(#search), .spacer:empty", ".reddit-infobar", ".thing > .thumbnail, .thing > .midcol.unvoted", "body > :hidden, iframe, script", 'link[rel="icon"], link[rel="apple-touch-icon-precomposed"]', ".commentarea > form.usertext:eq(0)", ".link-save-button, .save-button, .share, .hide-button, .give-gold-button, .report-button" ].join()), 
i.GM_addStyle([ ".flair_uf {\n\theight: auto;\n\tbackground-color: white;\n\tborder: none;\n\tcolor: #555;\n\tfont-family: verdana,arial,helvetica,sans-serif;\n\tborder: 1px solid #DADADA;\n\tpadding: 2px 3px 2px 3px;\n\tmargin-left: 2px;\n\tcursor: help;\n}", "body > .content { float: left; margin-top: 0; }" ].join("")), 
a(".flair").removeClass("flair").addClass("flair_uf"), a("#header .pagename.redditname").removeClass("pagename").prependTo("body > .content"), 
a("body > .side").appendTo("body"), a(".expando-gate__show-once").each(function() {
this.click();
}), o;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://gw2.vsgames.cn/*", "http*://*.vsgames.cn/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/vsgames\.cn/),
main(e = t._url_obj) {
const a = n(2);
a("").prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add(a("#content").parentsUntil("body").addBack().siblings()).add(a("#main").appendTo("body").siblings()).add([ ".btn-new-topic, .reply-user-avatar, #replytopic, #footer" ].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e = t._url_obj) {
let n = a("#forbid #agree, .adult a.btn.btn-pink");
if (n.length) return n[0].click(), !0;
}
e.exports = {
metadata: {
include: [ "http*://www.up01.cc/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/up01\.cc/),
main(e = t._url_obj) {
if (r(e)) return !0;
const a = n(2);
a("").prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, n) {
e.exports = {
metadata: {
include: [ "http*://www.epinv.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/epinv\.com/),
main(n = t._url_obj) {
e.exports.adblock(n);
},
adblock(e = t._url_obj) {
n(window).on("load.adblock", function(e) {
n("#epd .danger").length && (n("#epd").not("[data-done]").attr("data-done", !0).html('<strong>下载地址：</strong><a href="javascript:void(0);" onclick="getDownloadUrl()" ;="">提取下载地址列表</a>'), 
n('#epd > a[href*="javascript"]').eq(0).click());
}).triggerHandler("load.adblock");
},
clearly(e = t._url_obj, a = null) {
let r = n(a);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://danbooru.donmai.us/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2);
r([ "#posts-container .post-preview a" ].join(",")).prop("target", "_blank"), a("#image-container #image").attr("src", function(e, t) {
return a(this).prop("lowsrc", t), t.replace(/\/sample\//, "/").replace(/_sample-/, "_");
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://*.deviantart.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/deviantart\.com/),
main(e = t._url_obj) {
const r = n(2);
r("").prop("target", "_blank");
const i = n(7), o = n(4);
a(window).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case i("pageup"):
case i("left"):
var t;
(t = a("#overhead a.minibrowse_prev:not(.disabled)")).length && (o(e), t[0].click());
break;

case i("pagedown"):
case i("right"):
var t;
(t = a("#overhead a.minibrowse_next:not(.disabled)")).length && (o(e), t[0].click());
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(a, r) {
function i(e) {
let t, n = /(pixiv\.net)\/(?:c\/.+\/img-master)\/(img\/[\/a-z0-9]+\/.+)_master1200(\..+)/i;
return e.match(n) ? t = e.replace(n, "$1/img-original/$2$3") : (n = /(\/img\/.+)\/mobile\/(.+)_(?:\d+)mw(\.(?:jpg|png|gif|bmp))$/) && e.match(n) ? t = e.replace(n, "$1/$2$3") : (n = /_m(\.(?:jpg|png|gif|bmp))$/) && e.match(n) && (t = e.replace(n, "$1")), 
t;
}
function o(e, t = "member_illust") {
return `http://www.pixiv.net/${t}.php?id=${e}`;
}
function s(e, t) {
r("body").on("click.follow", ':not(.following2) .follow-button:not(.on), aside section button[data-click-label="follow"], section button[data-click-label="follow"], ul li div button[data-click-label="follow"]', function(n) {
let i = r(this);
console.info("click.follow", i);
let s = i.attr("data-user-id");
if (s || (s = i.parents("[data-id]:eq(0)").eq(0).attr("data-id")), !s) {
let e = i.parents("aside section, ul li div"), t = e.find('a[href*="/member.php"]').eq(0);
t.length || (t = e.find('a[href*="/member_illust.php"]').eq(0)), t.length && l(u(t.prop("href")), "_blank");
}
if (s) {
if (e.path.match(/member\.php/)) setTimeout(function() {
t.location.href = o(s);
}, 200); else {
let t;
/member_illust\.php/.test(e.path) && e.query.match(/(?:\b|&|^)id=(\d+)/) && RegExp.$1 == s && (t = !0), 
t || l(o(s), "_blank");
}
setTimeout(() => {
a._follow_area && a._follow_area.triggerHandler("DOMNodeInserted");
}, 500);
} else console.debug(i, s, n);
});
}
function u(e) {
return e.replace("member.php", "member_illust.php");
}
function c(e) {
let t = e.match(/(?:[&\?])id=(\d+)(?:$|&|#)/);
if (t && t[1]) return t[1];
}
function l(e, ...t) {
const a = n(17).GMApi;
return a.openInTab(e, !0);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), e.exports = {
metadata: {
include: [ "http*://*.pixiv.net/*", "http*://www.pixiv.net/search*" ],
exclude: [ "http*://*.pixiv.net/novel/*" ]
},
test: e => !!e.host.match(/pixiv\.net/),
main(t = a._url_obj) {
const {debounce: i} = n(3), {throttle: o} = n(3), u = n(4), c = n(2);
if (document.referrer && t.path.match(/^\/?member\.php/) && t.query.match(/^id=\d+$/) && (!document.referrer || !document.referrer.match(/pixiv/))) return void (location.href = location.href.replace("member.php", "member_illust.php"));
r(window).on("load.link", i(100, function() {
c([ ".works_display a.work, .tagCloud a, .user-list a, .image-item a, .worksListOthersImg a, .rank-detail a, .tags .tag a, #favorite-preference form, .spotlight-wrapper .spotlight-article-body .works-column a.work, .spotlight-wrapper .sidebar a, .members a", ".post a", ".column-search-result a", "#js-react-search-mid a", 'ul li div a[href*="member"]', ".gtm-illust-recommend-zone a" ].join(",")).prop("target", "_blank");
})).triggerHandler("load.link"), r("#js-react-search-mid").on("DOMNodeInserted", i(100, function() {
r(window).triggerHandler("load.link");
}));
const d = n(8);
let p;
if (r(window).scrollTo(r().push(".layout-body").push("#search-result").eq(0)), (unsafeWindow.pixiv && unsafeWindow.pixiv.user && unsafeWindow.pixiv.user.id ? unsafeWindow.pixiv.user.id : null) && r(".navigation-list .menus .bookmarks").prop(function() {
let e = r("<a/>").prop({
href: "http://www.pixiv.net/bookmark.php?type=user"
}).html('<i class="_icon sprites-bookmarks"></i>關注');
return r('<li class="bookmarks"/>').append(e);
}), r("#favorite-button").prop("href", "javasctipt:void(0);"), s(t, window), t.path.match(/member_illust\.php/) && t.query.match(/mode=manga/)) {
n(45).makeJQueryPlugin();
const e = n(7);
d.GM_addStyle([ ".manga .item-container .image { padding-top: 0; padding-bottom: 0; margin-top: 0; margin-bottom: 0; }", ".manga { background-color: rgba(0,0,0,0.9); }" ]), 
r(window).on("keydown.page", n(5).packEvent(function(t) {
console.log(666, t.which, e(t.which));
let n = "body, #main, .manga, html";
switch (t.which) {
case 33:
u(t), r(n).triggerKey(e("up"));
break;

case 37:
break;

case 34:
u(t), r(n).triggerKey(e("down"));
break;

case 39:
break;
}
}));
} else if (t.path.match(/member_illust\.php/) && t.query.match(/mode=medium/) || t.path.match(/artworks/)) {
"#E4E7EE" != r("body").css("background-color") && "rgb(228, 231, 238)" != r("body").css("background-color") || r("body").css("background-color", "rgba(0, 3, 11, 0.9)"), 
r(window).on("load", function() {
setTimeout(function() {
r('a[href*="mode=manga"]').each(function() {
let e = r(this);
e.attr("href").match(/member_illust\.php/) && e.attr("data-done", !0).attr("target", "_self").off("click").on("click", function(e) {
u(e), window.location.href = this.href;
});
});
}, 1e3);
});
let e = function(e) {
let t;
(t = e ? c('a:not([data-done])[href*="member.php"]', r(e)) : c('a:not([data-done])[href*="member.php"]')).attr("data-done", !0).attr("target", "_blank").attr("href", function(e, t) {
return t.replace("member.php", "member_illust.php");
}).off("click.member_illust").on("click.member_illust", function(e) {
let t;
return l(r(this).prop("href"), "_blank"), u(e);
});
};
r("#root").on("DOMNodeInserted", function(t) {
e(t.target);
}), setTimeout(function() {
e(), r("body").one("DOMNodeInserted", ".gtm-illust-recommend-zone", function(e) {
r(window).triggerHandler("load.link");
}).on("DOMNodeInserted", ".gtm-illust-recommend-zone", function(e) {
console.log(e), r(e.target).find("a").prop("target", "_blank");
});
}, 500);
} else if (t.path.match(/search\.php/)) {
if (r(".column-header, .column-label").find(".tabs li:eq(0) a.current").length) {
let e = function() {
if (r(".column-search-result ._no-item:visible, #js-react-search-mid:visible > ._no-item:visible").length) return location.href = r(".column-header, .column-label").find('.tabs a[href*="search_user"]').prop("href"), 
!0;
};
e() || r("#js-react-search-mid").on("DOMNodeInserted", e);
}
r.scrollTo(r("#js-react-search-mid, #wrapper").eq(-1)), e.exports.adblock(t), r(".column-search-result").on("DOMNodeInserted", o(300, function() {
c([ ".column-search-result a" ].join(",")).prop("target", "_blank");
})), r(document).on("click mousedown", function(e) {
var t = r(e.target);
if (t.is(":not(.following2) .follow-button")) {
var n, a = t.parents(".user-info:first").find("a.user-name:first").prop("href").replace("member.php", "member_illust.php");
setTimeout(function() {
l(a, "_blank");
}, 200);
}
});
} else if (t.path.match(/search_user\.php/)) {
let e;
r(".user-search-result-container .user-recommendation-item a.title").prop("href", function(e, t) {
return t.replace("member.php", "member_illust.php");
}), 1 == r(".user-search-result-container .user-recommendation-item").length && (location.href = r(".user-search-result-container .user-recommendation-item a.title").prop("href")), 
r(".follow:not(.following)").on("click", function(t) {
e = r(this).parents(".user-recommendation-item").eq(0).find("a.title").prop("href");
}), r("body").on("click", ".action-follow :submit, .action-follow ._button", function() {
l(e, "_blank");
});
} else if (t.path.match(/bookmark_add\.php/)) r(window).on("load", i(3e3, function() {
!r(".user-recommendation-items .user-recommendation-item").length && r("#wrapper .user-recommendation-unit ._no-item:visible").length && window.close();
})), a._follow_area = r(".user-recommendation-items._loading"); else if (t.path.match(/jump\.php/)) window.location.href = r("b > a:first").attr("href"); else if (t.path.match(/stacc/) && t.query.match(/mode=unify/)) {
let e = "#stacc_timeline > .stacc_status_summary:not([data-done])", t = r(e);
d.GM_addStyle([ "._uf_stacc_ref_illust { box-shadow: 0px 0px 0px 2px rgba(0, 149, 222, 0.3) inset; border-radius: 10px; }" ].join());
let n = function(n) {
t = r(e).each(function(e) {
let t = r(this);
t.attr("data-done", !0).attr("data-index", e);
let n = r(".stacc_ref_illust_user_name > a:first", t), a = r(".stacc_post_user_name", t), i = r('.stacc_follow_unify_comment_profile_list img[src*="badge_add_content.png"]:first', t);
r(".stacc_ref_thumb_caption .stacc_ref_illust_title", t).length && !i.length && n.text() != a.text() && t.addClass("_uf_stacc_ref_illust"), 
r(".stacc_ref_user_illust_caption_img a", t).attr("href", function(e, t) {
return t = t.replace("member.php", "member_illust.php");
});
});
};
r(window).on("load.timeline", n).triggerHandler("load.timeline"), r("#stacc_timeline").on("DOMNodeInserted", function(e) {
setTimeout(() => {
r(window).triggerHandler("load.timeline");
}, 1e3);
});
}
r(window).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case 33:
case 37:
var t;
if ((t = r('.pager-container a[rel="prev"]')).length) return u(e), location.href = t.prop("href"), 
!1;
break;

case 34:
case 39:
var t;
if ((t = r('.pager-container a[rel="next"]')).length) return u(e), location.href = t.prop("href"), 
!1;
break;
}
})).on("load", function() {}), r('a[href*="jump.php"]', ".profile-web, .caption, .body").each(function() {
var e = r(this), t = e.prop("href");
t.match(/jump\.php\?(.+)$/) && (t = decodeURIComponent(RegExp.$1), e.prop("href", t));
}).prop("target", "_blank");
},
adblock(e) {
e.path.match(/search\.php/) && r(".popular-introduction-overlay").hide();
}
}, t.my_openInBackground = l;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t) {
e.exports.makeJQueryPlugin = ((e = t.jQuery, n = t.window) => {
e.fn.triggerKey = function(t, n = "keydown") {
"object" != typeof t && (t = Object.assign({}, {
which: t,
keyCode: t
}));
let a = e.Event(n);
return Object.assign(a, t), console.log("triggerKey", this, a), this.trigger(a);
};
});
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://www.pixivision.net/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2);
r([ ".article-card-container a" ].join(",")).prop("target", "_blank"), a('a[href*="https://www.pixiv.net/member.php"]').prop("href", function(e, t) {
return t.replace(/member\.php\?id=/, "member_illust.php?id=");
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e = t._url_obj) {
let n = a('form[action*="ask"] :submit[name="yes"]');
if (n.length) return n[0].click(), !0;
}
e.exports = {
metadata: {
include: [ "http*://www.ptt.cc/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/ptt\.cc/),
main(e = t._url_obj) {
const a = n(2);
a("").prop("target", "_blank"), r(e);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj) {}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e) {
a("img.lazyload[data-original]").not("[data-done]").attr("data-done", !0).each(function() {
let e = a(this);
e.attr("src") != e.attr("data-original") && e.attr("src", e.attr("data-original")).removeAttr("lazyload");
});
}
e.exports = {
metadata: {
include: [ "http*://blog.xuite.net/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/blog\.xuite\.net/),
main(e = t._url_obj) {
const a = n(2);
a(".blogbody a").prop("target", "_blank"), r(e);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add(a(".ArticleContent").parentsUntil("body").addBack().siblings()).add([ "script, body :hidden", ".bookmark.push, #facebook-like-bottom, .fb-comments, .item_trackBack", "#sidebarTreeStyle, .selectbar, .commentbutton-menu, .page", 'link[rel="stylesheet"]' ].join()), 
a(".blogrank apan[class]").removeAttr("class"), a(".ArticleContent").css({
"max-width": 700,
margin: "auto"
}), r;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r() {
a("article .post-content img").prop("src", function(e, t) {
return t.replace(/_thumb\./, ".");
});
}
e.exports = {
metadata: {
include: [ "http*://dulfy.net/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/dulfy\.net/),
main(e = t._url_obj) {
const a = n(2);
a("article .post-content a, .post-title a, a.more-link").prop("target", "_blank"), 
r(e);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, r = null) {
const i = n(9);
let o = a(r);
return o = o.add(a("#content article.post").parentsUntil("body").addBack().siblings().not("#content article.post, #disqus_thread")).add([ ".author-avatar", "#disqus_thread" ].join()), 
a("#content article.post .embed-youtube").removeClass("embed-youtube"), a("#body").removeAttr("id"), 
i.GM_addStyle([ "body, #body { background: none !important; }" ].join("")), o;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.jianshu.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/jianshu\.com/),
main(e = t._url_obj) {
const a = n(2);
a("").prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add(a(".article").parentsUntil("body").addBack().siblings()).add([ ".follow, .avatar img, .new-comment, .iconfont, .tool-group" ].join()), 
a("#comment-list, .comment-list").appendTo(".post"), r;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://juejin.im/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(e = t._url_obj) {
const r = n(2);
r([].join()).prop("target", "_blank"), a(window).on("load.ready", function() {}).triggerHandler("load.ready"), 
this.adblock(e);
},
adblock(e = t._url_obj) {
n(9).GM_addStyle([ ".container.entry-view .show-full { display: none !important; }", ".container.entry-view .show-full-block { display: none !important; }", ".post-content-container.hidden { max-height: auto; overflow: visible }" ].join(""));
},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://blog.oneapm.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/blog\.oneapm\.com/),
main(e = t._url_obj) {
const a = n(2);
a("").prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, r = null) {
let i = a(r);
return i = i.add(a("#main").parentsUntil("body").addBack().siblings()).add([ ".details .readNum, .details .commentNum, .post_info .iconfont", ".msgcontainer, #divSubscibe" ].join()), 
n(9).GM_addStyle([ "#content.with-header-fix { padding-top: 0; }" ].join("")), i;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r() {
a("article .post-content img").prop("src", function(e, t) {
return t.replace(/_thumb\./, ".");
});
}
e.exports = {
metadata: {
include: [ "http*://steachs.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/steachs\.com/),
main(e = t._url_obj) {
const a = n(2);
a("article .post-content a, .post-title a, a.more-link").prop("target", "_blank"), 
r(e);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, r = null) {
const i = n(9);
let o = a(r);
return o = o.add(a("#content article, #contents article").parentsUntil("body").addBack().siblings().not("article")).add([ "#share_button, .icon-home-outline, .avatar, .author_links, #post_comment, #respond", "#disqus_thread" ].join()), 
a("#content article.post .embed-youtube").removeClass("embed-youtube"), a("#body").removeAttr("id"), 
i.GM_addStyle([ "body, #body { background: none !important; }" ].join("")), o;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://gitee.com/*", "http*://gitee.com/api/*", "http*://gitee.com/oauth/applications/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2);
e.path.match(/\/api\//) && a(".parameters :input[autocomplete], .parameters form").prop("autocomplete", "on"), 
a(window).on("load", function() {
r([ "#users-events .event-group a", "a.view-file, .git-commit-meta a" ].join(",")).prop("target", "_blank"), 
a(".edit_oauth_application :input[disabled]").removeAttr("disabled").prop("readonly", "true");
}).triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a, r) {
let i = {
metadata: {
include: [ "http*://github.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/github\.com/),
async main(e = t._url_obj) {
const {debounce: i} = n(3), {throttle: o} = n(3), s = n(2);
a.GM_addStyle([ ".blob-code-inner { white-space: pre-wrap; }" ]);
const u = r(window);
u.on("load.change", i(500, function(e) {
console.log(e.type, this, e.target), s([ "a.notification-indicator, a.notifications-repo-link", "#dashboard a[data-hydro-click]", "#js-repos-container .source a[data-hydro-click]" ]).prop("target", "_blank");
let t = r(".notifications-list a.js-notification-target.list-group-item-link");
t.length > 1 && t.prop("target", "_blank");
})).on("load.pagehead", i(500, function() {
let e = r(".reponav");
if (e.length) {
let t = r('a.reponav-item[href$="/network"]', e);
if (!t.length) {
(t = r('a.reponav-item[data-selected-links*="repo_projects"]', e).clone().removeAttr("data-selected-links").removeAttr("data-selected").removeAttr("data-hotkey").attr("data-skip-pjax", "").attr("href", function(e, t) {
return t.replace(/\/projects$/, "/network");
}).appendTo(e)).find(".Counter").remove();
let n = t.contents().filter(function() {
return 3 === this.nodeType && this.nodeValue.match(/Projects/);
})[0].nodeValue = " Network ";
}
}
})), u.one("load.hook", i(1e3, function(e) {
r("#js-repo-pjax-container").on("DOMNodeInserted", function(e) {
let t = r(e.target);
t.is(".pagehead, .notifications-list") ? u.triggerHandler("load") : t.is(".container") && console.log(e.type, this, e.target, e);
}), r("#js-pjax-container").on("DOMNodeInserted", function(e) {
let t;
r(e.target).is(".container") && u.triggerHandler("load");
}), r("#dashboard").on("DOMNodeInserted", i(500, function(e) {
let t;
r(e.target).is(".news") && u.triggerHandler("load");
}));
})), u.triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let a = r(n);
return a = a.add([].join());
}
};
e.exports = i;
}).call(this, n(1), n(8), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://greasyfork.org/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/greasyfork\.org/),
main(e = t._url_obj) {
const a = n(2);
a("#browse-script-list article a").prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "https://www.npmjs.com/search?q=*", "https://www.npmjs.com/~*", "https://www.npmjs.com/browse/*", "https://www.npmjs.com/package/*", "https://www.npmjs.com/settings/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/npmjs\.com/),
main(e = t._url_obj) {
const r = n(2), {debounce: i} = n(3), {throttle: o} = n(3), s = n(9), u = n(4), c = n(159).onCapture;
function l() {
a(".search-results, #app main").off("DOMNodeInserted.ready").on("DOMNodeInserted.ready", o(300, function() {
a(window).triggerHandler("load");
})).triggerHandler("DOMNodeInserted.ready");
}
s.GM_addStyle([ ".package-details { padding-bottom: 0.25em; }", ".package-details h3 { padding-top: 0.25em; }" ].join("")), 
l();
let d = [ '[class*="package__sidebarText"] time', 'section > [class*="package-list-item__metrics"]', 'section [class*="package-list-item__version"]' ].join(","), p = [ "#readme a, .box a, a.packageName, a.authorName", ".collaborated-packages a, .bullet-free a, .starred-packages a", ".list-of-links a", ".package-details a, .list-of-links a", ".items-end a", 'a[href^="/package/"]' ].join(",");
a("body").off("click.stat", d).on("click.stat", d, function() {
let e = a(this);
if (e.is('[class*="package__sidebarText"] time')) window.open("https://npm-stat.com/charts.html?package=" + a('h2[class*="package__packageName"] [class*="package__name"]').text(), "_blank"); else if (e.is('section > [class*="package-list-item__metrics"], section [class*="package-list-item__version"]')) {
let e = a(this).parents("section");
if (e.length) {
let t = a('.items-end > a[href*="/package/"] > h3', e);
window.open("https://npm-stat.com/charts.html?package=" + t.text(), "_blank");
}
}
}).off("click.link", p).on("click.link", p, function(e) {
let t = a(this);
r(t).length && (window.open(t.prop("href"), "_blank"), u(e));
}), a(window).on("click", "a[target]", function(e) {
setTimeout(l, 300);
}).one("load.ready", o(200, function() {
a(".collaborated-packages:has(> li)").html(a(".collaborated-packages > li").css({
"list-style": "d"
}).sort(function(e, t) {
return (e = a(e).find("a").text()) > (t = a(t).find("a").text()) ? 1 : e < t ? -1 : 0;
})), c("body", "click.link2", 'a[href*="/package/"]', function(e) {
let t = a(this);
window.open(t.prop("href"), "_blank"), u(e);
});
})).on("load.ready", o(200, function() {
r(p).attr("target", "_blank").prop("target", "_blank");
})).on("load.page", o(200, function() {
a(window).scrollTo(".container");
})).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
var i;
(i = a(".container > div:eq(1) > span:eq(0) a.next")).length && (r(e), i[0].click(), 
a(window).triggerHandler("load.page"));
break;

case t("pagedown"):
var i;
(i = a('.container > div:eq(1) > span:eq(-1) a.next, div[class^="search__pagination"] div[class*="pagination__current"] + div > a')).length && (r(e), 
i[0].click(), a(window).triggerHandler("load.page"));
break;
}
})).triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://segmentfault.com/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2);
r([].join(",")).prop("target", "_blank"), a(window).scrollTo(".container");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([ "#footer, #goToAnswerEditor, .widget-codetool, .container.nav", ".post-topheader__side, .widget-share__full" ].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://sourceforge.net/projects/*/files/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/sourceforge\.net/),
main(e = t._url_obj) {
const r = n(2);
r("#files_list .file a.name, #page-body .download-bar a").prop("target", "_blank"), 
a(window).scrollTo("#page-header");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj) {
let n = a();
return (n = n.add([].join())).remove(), n;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://stackoverflow.com/*", "http*://superuser.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/(stackoverflow|superuser)\.com/),
main(e = t._url_obj) {
const r = n(2);
r(".post-text a, .question-hyperlink").prop("target", "_blank"), a(window).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
var i;
(i = a('.pager a[rel="prev"]')).length && (r(e), i[0].click());
break;

case t("pagedown"):
case t("right"):
var i;
(i = a('.pager a[rel="next"]')).length && (r(e), i[0].click());
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add(a(".inner-content").parentsUntil("body").addBack().siblings()).add([ "#feed-link, .vote-down-off, .vote-up-off, .star-off", '.user-gravatar32, .post-menu, #hireme, .favicon, .aside-cta[aria-label="ask new question"]', "#post-form, .js-add-link.comments-link", "body :hidden, iframe, script", 'link[rel="stylesheet"][href*="adFeedback"]', "#clc-tlb" ].join()), 
a(".vote a").removeAttr("class"), r;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.999comic.com/*", "http://t.168girl.com/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports)) || (a.host.match(/999comic\.com/) || a.host.match(/t\.168girl\.com/), 
!1);
},
main(r = t._url_obj) {
const i = n(2);
if (i([].join()).prop("target", "_blank"), a("#manga").length) {
const e = n(10), {debounce: t} = n(3), {throttle: r} = n(3);
let i = "#manga", o = a(i), s = a("#tbCenter");
a(".tbCenter, #tbBox").css(e.photo_area).css(e.bg_transparent), a("body").css(e.body).css(e.bg_dark).css(e.overflow_hidden);
let u = a("<div/>").css(e.page).css(e.bg_dark).css(e.bg_dark_border).css(e.bg_dark_text).css({
position: "absolute"
}).appendTo("body");
a(window).on("resize", function() {
o.css(e.photo), n(12)._uf_fixsize2(o, window, 1);
}).on("resize.page", function() {
u.text(a(".title:has(h1) > span:eq(-1)").text().replace(/^[^\d]+(\d+)[^\d]+(\d+)[^\d]+$/, "$1 / $2")), 
u.offset({
top: o.offset().top + 50,
left: o.offset().left - u.outerWidth()
});
}).on("resize.delay", r(100, function() {
a(window).triggerHandler("resize.scroll");
})).on("resize.delay", t(100, function() {
a(window).triggerHandler("resize.scroll");
})).on("resize.scroll", function() {
a(window).scrollTo(o);
}).on("load.ready", () => {
a(window).triggerHandler("resize");
}).on("load.nocontextmenu", () => {
n(11)._uf_disable_nocontextmenu2(2, i + ", #tbCenter, .cf");
}).triggerHandler("load"), a(window).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
var i;
(i = a("#pager .prev")).length && (r(e), unsafeWindow.MHD.core.prev());
break;

case t("pagedown"):
var i;
(i = a("#pager .next")).length && (r(e), unsafeWindow.MHD.core.next());
break;
}
}));
}
e.exports.adblock();
},
adblock(e = t._url_obj) {
a([ ".bd_960_90" ].join()).hide();
},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([ "#fb-root, .fb-comments, #bdShare", ".likenews", ".book-similar2 img", "script", ".scover .bg, .cover .bg, .bcover .bg, .hcover .bg" ].join()).add(a("#bd1").prevAll().addBack()).add(a(".footer").nextAll().addBack());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.alphapolis.co.jp/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(e = t._url_obj) {
const {debounce: r} = n(3), {throttle: i} = n(3), o = n(8), s = n(2);
if (a("body.officialmangas").length) {
const e = n(10);
{
let t = e.toCss(e.body, e.bg_dark), n = "200px";
o.GM_addStyle([ "#TopLayer { display: none !important; }", `body.officialmangas { ${t} }`, `.current .page.right { margin-left: ${n} !important; }`, `.current .page.right .comic { margin-left: -${n} !important; }`, `.current .page.left { margin-right: ${n} !important; }`, `.current .page.left .comic { margin-right: -${n} !important; }`, ".current .page.first { margin: auto !important; }" ]);
}
n(11)._uf_disable_nocontextmenu2(1, "body, canvas.comic, .book, .book *"), n(45).makeJQueryPlugin(a), 
a(window).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
r(e), a("body.officialmangas").triggerKey(t("right"));
break;

case t("pagedown"):
r(e), a("body.officialmangas").triggerKey(t("left"));
break;
}
}));
}
a(window).on("load.ready", i(200, function() {})).on("load.scroll", i(500, function() {})).triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://lhscan.net/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const {debounce: r} = n(3), {throttle: i} = n(3), o = n(12)._uf_fixsize2, s = n(7), u = n(4), c = n(2);
c([]).prop("target", "_blank");
const l = ".chapter-content .chapter-img";
let d = a(l);
a(window).on("load.ready", i(300, function() {
a(window).triggerHandler("resize.img"), a(window).scrollTo(".chapter-content, .info-manga .well:eq(0)");
})).on("resize.img", i(300, function() {
o(d, window, 1);
})).triggerHandler("load.ready");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://book.dmm.co.jp/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(4), {debounce: i} = n(3), {throttle: o} = n(3), s = n(8), u = n(10), c = n(7), l = n(2);
l([].join()).prop("target", "_blank");
const d = n(130).PromiseInterval;
let p;
d(function(e) {
if (a(".view-book").length) return !0;
}, 500).promise.timeout(3e3).then(function(e) {
if (e) return n(45).makeJQueryPlugin(a), s.GM_addStyle([ ".view-protection, .blank-img { display: none !important; }", `body { ${u.toCss(u.bg_dark)}; ${u.toCss(u.bg_dark_text)}; ${u.toCss(u.body)}; }` ]), 
a(window).off("keydown.page").on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case c("pageup"):
a(window).triggerKey(c("right"));
break;

case c("pagedown"):
a("body, .view-book, .content").triggerKey(c("left"));
break;
}
})), !0;
}).delay(1e3).then(function() {
n(11)._uf_disable_nocontextmenu2(2, ".view-book, body, .viewport, .viewport *, .content, .content *");
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e, t = 2, n = "0") {
let a;
return e.toString().length < t ? e.toString().padStart(t, n) : e;
}
e.exports = {
metadata: {
include: [ "https://comic-walker.com/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(r = t._url_obj) {
const i = n(2);
if (i([ ".detail_latestStoryBtn a, .bookAuther a, .readableLinkColor a", "#togetherRead a, #comicsRelative a, #bookSummary a", "#bookCartLink a, #infomationList a", ".tileList a", "#topSlider a" ].join()).prop("target", "_blank"), 
e.exports.adblock(r), a("#cw-viewer").length) {
let e = a("#cw-viewer");
n(11)._uf_disable_nocontextmenu2(1, "body"), n(18).makeJQueryPlugin(a, window), 
a(window).on("load.ready", function() {}).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
case t("pagedown"):
case t("right"):
a(window).triggerHandler("load.ready");
break;
}
})).triggerHandler("load");
}
},
adblock(e = t._url_obj) {
a().add([ "#middle_banner" ].join()).remove();
},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([ "#togetherRead", ".shareBtnBox", "#bookCartLink", ".settingBtnBox" ].join()).add(a("#mainContent .divideLeft").parentsUntil("body").addBack().siblings());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.comico.com.tw/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(e = t._url_obj) {
const r = n(10), {debounce: i} = n(3), {throttle: o} = n(3), s = n(2);
a(".list-episode02 ._articleList").on("DOMNodeInserted", i(200, function() {
a(window).triggerHandler("load.ready");
})), a("body .stage, .o-section-bg-02").css(r.body).css(r.bg_dark);
let u = a(".stage .comic-image"), c = a(window);
c.on("load.ready", o(200, function() {
s([ ".list-episode02 ._articleList a" ].join()).prop("target", "_blank");
})).on("load.scroll", o(500, function() {
let e, t;
c.scrollTop() < u.find("> img:eq(0)").outerHeight() && c.scrollTo(u);
})).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
var i;
(i = a(".nav-episode02:eq(0) .nav-episode02__item:eq(0) a")).length && 0 == c.scrollTop() && (r(e), 
i[0].click());
break;

case t("pagedown"):
case t("right"):
var i;
if ((i = a(".nav-episode02:eq(0) .nav-episode02__item:eq(2) a")).length) {
let t, n;
u.offset().top + u.outerHeight() < c.scrollTop() + c.outerHeight() && (r(e), i[0].click());
}
break;
}
})).triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
(function(t, a, r) {
e.exports = {
metadata: {
include: [ "http*://www.dm5.com/*" ],
exclude: []
},
test: e => !!e.host.match(/dm5\.com/),
main() {
if (t("#checkAdult").length && t("#checkAdult")[0].click(), _url_obj.path.match(/-end\//)) {
let e = t('.end_mian .end_top .new_h4 a, .finalPage .topBar .right > a:has(img[src*="finalPage_4_w.png"])');
e.length && e[0].click();
}
const {debounce: e} = n(3), {throttle: r} = n(3), i = n(2);
t(window).on("load.link", function() {
i(".red_lj a, #cbc_1 a, #cbc_2 a, #cbc_3 a, #abc_1 a, #abc_2 a, #index_mian .diline a, .innr22 a, .innr72 a, #tempc a.tg, .end_kk a, #search_nr .ssnr_bt a, #search_nr .matoa a, #index_left .inkk.ma5 div.sy_tb a, #todaycomic a, #index_right .inkk .innr8 li a, #search_nrl .ssnr_yt dl a, #index_mian .innr3 a, .midBar .item a, .mh-item a").not(".li_end a").attr("target", "_blank");
}).triggerHandler("load.link"), t(".js_update_mh_list, .mh-list").on("DOMNodeInserted", e(100, function() {
t(window).triggerHandler("load.link");
}));
const o = n(7), s = n(4), u = n(10);
let c = "#cp_image2:visible, #cp_image:visible";
const l = n(123).jquery;
if (t("body.vPage, #showimage").length) {
let e = t(c), r = t("<div/>").css(u.page).css(u.bg_dark).css(u.bg_dark_border).css(u.bg_dark_text).css({
position: "absolute"
}).appendTo("body");
function d() {
return l((n, a) => ((e = t(c)).length && n.resolveWith(e, [ e, a ]), e)).always(function(e, n) {
e.add("#showimage, #cp_img").removeAttr("oncontextmenu"), e.off("load.imagesLoaded").on("load.imagesLoaded", function(e) {
t(window).triggerHandler("load.imagesLoaded");
}).off("click.next").on("click.next", function() {
let e = t.Event("keydown", {
which: o("pagedown")
});
t("input").trigger(e);
}), t(window).triggerHandler("load.imagesLoaded");
}).fail(function(e, t) {
console.error(666, this, e, t);
}).done(function(e, n) {
e.imagesLoaded().done(function(e) {
t(window).triggerHandler("resize");
});
});
}
a.GM_addStyle([ ".rightToolBar { opacity: 0.1; }", ".rightToolBar:hover { opacity: 1; }" ]), 
t(window).on("resize.scroll", () => {
e = t(c), t("#showimage").css({
"min-height": t(window).innerHeight()
}), t("body").css({
"min-width": "auto"
}).css(u.body).css(u.bg_dark), t(window).scrollTo(e.add("#showimage"));
}).on("resize.imagesLoaded", () => {
(e = t(c)).css(u.photo);
const a = n(12)._uf_fixsize2;
a(e, window, 1), r.text(unsafeWindow.DM5_PAGE + "/" + unsafeWindow.DM5_IMAGE_COUNT), 
t(`#showimage #ipg${unsafeWindow.DM5_PAGE + 1}`).length || t("#showimage").prepend(`<a id="ipg${unsafeWindow.DM5_PAGE + 1}" name="ipg${unsafeWindow.DM5_PAGE + 1}"></a>`), 
e.length && r.offset({
top: e.offset().top + 50,
left: e.offset().left - r.outerWidth()
});
}).on("load", () => {
d();
}).on("load.imagesLoaded", () => {
t(window).triggerHandler("load.nocontextmenu"), t(window).triggerHandler("resize");
}).on("keydown.page", n(5).packEvent(function(n) {
var a = unsafeWindow.$ || t, r = a("#pagelist"), i = a('option[value="' + r.val() + '"]', r);
switch (n.which) {
case o("pageup"):
case o("left"):
var u = t("#s_pre a, a.s_pre");
unsafeWindow.ShowPre ? (s(n), unsafeWindow.ShowPre(), setTimeout(function() {
t(window).scrollTo(e.add("#showimage, #cp_img"));
}, 0)) : u.length && (s(n), u[0].click());
break;

case o("pagedown"):
case o("right"):
var u;
if (!(u = t("#s_next a, a.s_next, #last-win:visible a.view-btn-next")).is("a.view-btn-next") && unsafeWindow.ShowNext) return s(n), 
unsafeWindow.ShowNext(), void setTimeout(function() {
t(window).scrollTo(e.add("#showimage, #cp_img"));
}, 0);
u.length && (s(n), u[0].click());
break;
}
})), t("#showimage").on("DOMNodeInserted", function() {
d(), t(window).triggerHandler("load.imagesLoaded");
}), d(), t(window).triggerHandler("load.imagesLoaded");
} else t("#barChapter").length ? t("#barChapter").attr("oncontextmenu", "") : t(window).scrollTo(t("#index_mian, #index_left, #index_left .inkk.mato20").eq(-1));
t(window).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case o("pageup"):
case o("left"):
var n;
(n = t("#search_fy a + .current")).length && (s(e), n.prev("a")[0].click());
break;

case o("pagedown"):
case o("right"):
var n;
(n = t("#search_fy .current + a")).length && (s(e), n[0].click());
break;
}
})).on("load.nocontextmenu", () => {
const e = n(11)._uf_disable_nocontextmenu2;
try {
e(2, c + ", #cp_image, #cp_img, #showimage, #cp_funtb, .cp_tbimg, .view_bt, #showimage *");
} catch (e) {
console.error(777, e);
}
}).triggerHandler("load.nocontextmenu");
},
clearly(e = r._url_obj) {
let n = t();
return n = n.add(t("#index_mian").siblings()).add(t("#index_mian").parents().not("html, body").siblings()).add([ "#index_right a > img, .rss2, #todaycomic, .inkk.ma5 img", ".btnreport, form.madi5, #bt_collect, .zmk2" ].join()), 
t(".inbt").removeClass("inbt").find(".new_h2").addBack().css({
display: "block",
float: "none"
}), t("#bt_shownext").text("開始閱讀"), n.remove(), n;
}
};
}).call(this, n(0).default, n(8), n(1));
}, function(e, t, n) {
"use strict";
(function(t, a, r) {
function i() {
let e = r(".mainNav");
e.length && (r("#mainNav_in_r a", e).length || r("#mainNav_in_r", e).append('<a href="http://i.dmzj.com/subscribe">我的订阅</a>'), 
r("#center_box").length || e.eq(0).css({
position: "sticky",
top: 0
}));
}
e.exports = {
metadata: {
include: [ "http*://*.dmzj.com/*", "https://i.dmzj.com/*", "http*://manhua.dmzj.com/*" ],
nomatch: [ "http*://q.dmzj.com/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main() {
const t = n(4), {debounce: o} = n(3), {throttle: s} = n(3);
a.GM_addStyle([ ".comment .content_r .text, .content_r .info_bar .userName, .page a, .page span { font-size: 9pt; }", "input, textarea { font-size: 9pt; }" ]);
const u = n(2);
u([ ".cartoon_online_border a, #type_comics a, .anim-main_list a", "#author_comics a, .comic_deCon .beread_btn, .zj_list .list_con_li a" ].join(",")).prop("target", "_blank");
const c = n(10);
if (e.exports.adblock(), r(window).scrollTo(r(".newpic_content, .wrap, #center_box").eq(-1)), 
r("#center_box, .comic_wraCon").length) {
n(11)._uf_disable_nocontextmenu2(2), a.GM_addStyle([ `#center_box img { ${c.toCss(c.photo)}; max-height: 100%; }`, `body { ${c.toCss(c.body)}; ${c.toCss(c.bg_dark)}; }` ]);
let e = "#center_box img, .comic_wraCon img", t = r(e), i = r("<div/>").css(c.page).css(c.bg_dark).css(c.bg_dark_border).css(c.bg_dark_text).css(c.page_position).appendTo("body");
const u = n(12)._uf_fixsize2;
r(window).on("load", s(100, function() {
r(window).triggerHandler("resize.scroll");
})).on("resize", s(100, function() {
let n;
t = r(e), u(t, window, 1, {
width: "auto"
}).css(c.photo), r("#center_box").height(r(window).innerHeight()), r("body").css(c.body).css(c.bg_dark);
let a = r("#page_select :selected");
i.text(a.text().replace(/^.*[^\d]+(\d+)[^\d]+.*$/, "$1") + "/" + r("#page_select option").length), 
i.offset({
top: t.offset().top + 50,
left: t.offset().left - i.outerWidth()
}), r.scrollTo(t);
})).on("resize.scroll", s(500, function() {
r(window).scrollTo(t);
})).on("resize.scroll", o(500, function() {
r(window).scrollTo(t);
})).on("load.imagesLoaded", function(e) {
l();
}).triggerHandler("resize");
const d = n(123).jquery;
function l() {
return d((n, a) => ((t = r(e)).length && n.resolveWith(t, [ t, a ]), t)).always(function(e, t) {
e.off("load.imagesLoaded").on("load.imagesLoaded", function(e) {
r(window).triggerHandler("resize");
}), r(window).triggerHandler("resize");
}).fail(function(e, t) {
console.error(666, this, e, t);
}).done(function(e, t) {
e.imagesLoaded().done(function(t) {
r(window).triggerHandler("resize"), i.offset({
left: e.offset().left - i.outerWidth()
});
});
});
}
l(), r(window).on("keydown.page", s(100, function() {
l(), r(window).triggerHandler("resize");
})), r(".img_land_prev, .img_land_next").on("click", o(200, function() {
l();
})).on("click", s(200, function() {
r(window).triggerHandler("resize");
})).hide(), r("#center_box").on("DOMNodeInserted", o(100, function() {
l();
}));
} else _url_obj.host.match(/i\.dmzj\.com/) ? r("#my_subscribe_id, #my_record_id").on("DOMNodeInserted", o(200, function(e) {
r(window).triggerHandler("load.ready");
})) : r(window).on("load.ready", function() {
r(window).scrollTo(".wrap");
});
let d = r("#page_select");
r(window).on("load.ready", function() {
r(".mainNav a, .about-info a, #my_subscribe_id a, #my_record_id a").prop("href", function(e, t) {
return t.replace("xs.dmzj.com", "q.dmzj.com");
}), setTimeout(function() {
i();
}, 1e3);
}).on("keydown.page", n(5).packEvent(function(e) {
const a = n(7);
switch (e.which) {
case a("left"):
if (d.length && d.val() == d.find("option").eq(0).val() && d.prev(".btm_chapter_btn").length) {
let n = d.prev(".btm_chapter_btn");
n.length && (t(e), n[0].click());
}
break;

case a("pageup"):
var i = r("#center_box .img_land_prev, .wrap .pages > a:eq(1), .comic_wraCon .img_land_prev, #page_id .prev");
d.length && d.val() == d.find("option").eq(0).val() && d.prev(".btm_chapter_btn").length && (i = d.prev(".btm_chapter_btn")), 
i.length && (t(e), i[0].click());
break;

case a("right"):
if (d.length && d.val() == d.find("option").eq(-1).val() && d.next(".btm_chapter_btn").length) {
let n = d.next(".btm_chapter_btn");
n.length && (t(e), n[0].click());
}
break;

case a("pagedown"):
var i = r("#center_box .img_land_next, .wrap .pages > a:eq(-2), .comic_wraCon .img_land_next, #page_id .next");
d.length && d.val() == d.find("option").eq(-1).val() && d.next(".btm_chapter_btn").length && (i = d.next(".btm_chapter_btn")), 
i.length && (t(e), i[0].click());
break;
}
})).triggerHandler("load.ready");
},
adblock() {
r(".header-box + div").css("height", "auto"), r([ 'div[id^="BAIDU_SSP"]' ].join(",")).remove();
},
clearly(e = t._url_obj, a = null) {
const i = n(9);
let o = r(a);
return o = o.add(r(".wrap").siblings()).add(r("#Comment").prevAll().not("#type_comics")).add(r(".icorss_acg").prev("ul")).add([ ".part_collection, .commentBox .textareawrap, .commentBox h2, .comment_con img", "#type_comics img, .icorss_acg, .photo_part .h2_title2, .icon_nan, .icon_gg, .icon_nv, .icon_hf, .icon_ding", "#floatCode, #fixbdshare, .footer, body :hidden, script, iframe", ".anim_grade img, .impunity, .week_foot, .odd_anim_title_l, .odd_anim_title_r", ".middleright img" ].join()), 
r(".top10_top, .read_top, .odd_anim_title_m, .week_mend_back, .intro_top").height(function(e, t) {
return t;
}).attr("class", ""), i.GM_addStyle([ "body { background: none; }" ].join(""), r("body")[0]), 
o;
}
};
}).call(this, n(1), n(8), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e) {
return /Chinese|中国|漢化/i.test(e);
}
function i(e) {
return /([\[\(])(Eng(?:lish)?|Korean|korean|Spanish|Thai(\s*ภาษาไทย)?|Italian|Rus(sian)?|Polish|Vietnamese Tiếng Việt|French|Portuguese-BR|Malay|Indonesian|German|팀 논엣지|On\s*Going|Portuguese|Português\-[a-zA-Z]+|スペイン翻訳|英訳|ベトナム翻訳|ロシア翻訳|RUS|韓国翻訳|ポルトガル翻訳|タイ翻訳|英語|フランス翻訳|インドネシア翻訳)[\]\)]/i.test(e);
}
e.exports = {
metadata: {
include: [ "http*://exhentai.org/*", "http*://g.e-hentai.org/*", "http*://e-hentai.org/*" ],
exclude: []
},
test: e => !(!e.host.match(/e-hentai\.org/) && !e.host.match(/exhentai\.org/)),
main(a) {
e.exports.adblock(a);
const o = n(7), s = n(2), u = n(4), c = n(10), l = n(9);
if (s(".itg a, #gdt a, #cdiv .c6 a, #pp a").prop("target", "_blank"), console.log(a), 
a.path.match(/\/s\//)) {
let e = t("#img");
l.GM_addStyle([ `a { color: ${c.bg_dark_text.color}; }` ].join("")), t("body").css(c.bg_dark).css(c.bg_dark_text), 
t("div.sni").css(c.bg_dark2).css(c.bg_dark_border);
let a = t("<div/>").css(c.page).css(c.bg_dark).css(c.bg_dark_border).css({
"border-left-width": 0
}).offset({
top: t("#img").offset().top,
left: t("#i1").offset().left
}).appendTo(t("body"));
function d() {
e = t("#img"), setTimeout(() => {
t(window).triggerHandler("resize");
}, 100), e.imagesLoaded().always(function() {
t(window).triggerHandler("resize");
}).done(function() {});
}
t("#i3").on("DOMNodeInserted", d), t(window).on("resize", function() {
const r = n(12)._uf_fixsize2;
r(e = t("#img"), window, 1, {
width: "auto"
}), e.css(c.photo).css({
"max-width": "auto",
"max-height": "auto"
}), a.text(t(".sn div").eq(0).text()).offset({
left: t("#i1").offset().left
}), t.scrollTo(e);
}).on("load.imagesLoaded", function(e) {
d();
}).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case o("pageup"):
case o("left"):
u(e), t("#prev").trigger("click");
break;

case o("pagedown"):
case o("right"):
u(e), t("#next").trigger("click");
break;
}
setTimeout(d, 500);
})).triggerHandler("load.imagesLoaded");
} else if (a.path.match(/\/g\//)) {
if (t("#gn").length) {
t("#gdt").css({
width: "auto",
"min-width": "auto"
});
let e = t("<div/>").addClass("gt").css({
"font-size": "8pt",
margin: "0px 2px"
}), n = t('<a target="_blank"/>').text("g.e-hentai.org").attr("href", "http://g.e-hentai.org" + a.path).css({
"font-size": "8pt",
"text-decoration": "none"
});
a.host.match(/e-hentai\.org/) && n.text("exhentai.org").attr("href", "http://exhentai.org" + a.path), 
t("<div/>").css({
display: "inline-block",
"vertical-align": "middle",
margin: "0px 10px"
}).append(e.append(n)).appendTo(t("#gn"));
}
t.scrollTo([ a.query && a.query.match(/p=(\d+)/) && RegExp.$1 > 0 ? "#gdt" : null, "div.gm" ]);
} else l.GM_addStyle([ ".id1._zh, .gl1t._zh { border: 1px solid rgb(54, 176, 197); }", ".id1._other, .gl1t._other { opacity: 0.25; }", ".id1:hover, .gl1t:hover { opacity: 1; }" ].join("")), 
t.scrollTo([ a.query && a.query.match(/p(?:age)?=(\d+)/) && RegExp.$1 > 0 ? ".itg" : null, "#toppane, #gd2" ]), 
t(".itg .id2").each(function() {
let e = t(this), n = e.text();
r(n) ? e.parents(".id1:eq(0)").addClass("_zh") : i(n) && e.parents(".id1:eq(0)").addClass("_other");
}), t(".itg .gl1t .glname").each(function() {
let e = t(this), n = e.text();
r(n) ? e.parents(".gl1t:eq(0)").addClass("_zh") : i(n) && e.parents(".gl1t:eq(0)").addClass("_other");
});
t(window).on("keydown.page", n(5).packEvent(function(e) {
let n = t(".ptt td > a[onclick]");
switch (e.which) {
case o("pageup"):
case o("left"):
n.length && (u(e), location.href = n.eq(0).attr("href"));
break;

case o("pagedown"):
case o("right"):
n.length && (u(e), location.href = n.eq(-1).attr("href"));
break;
}
}));
},
adblock(e = a._url_obj) {
t([ "iframe, script" ].join()).filter("[src*=adserver], [src*=adspaces]").remove(), 
n(11)._uf_disable_nocontextmenu2(1, ".gdtm a, .itg a");
try {
unsafeWindow.adsbyjuicy = null;
} catch (e) {}
}
};
}).call(this, n(0).default, n(1));
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://*.ikanman.com/*", "http*://*.manhuagui.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !(!e.host.match(/ikanman\.com/) && !e.host.match(/manhuagui\.com/)),
main(r = t._url_obj) {
const i = n(2);
if (i([].join()).prop("target", "_blank"), a("#mangaBox").length) {
const e = n(10), {debounce: t} = n(3), {throttle: r} = n(3);
let i = "#mangaBox #mangaFile", o = a(i), s = a("#mangaBox");
a(".tbCenter, #tbBox").css(e.photo_area).css(e.bg_transparent), a("body").css(e.body).css(e.bg_dark);
let u = a("<div/>").css(e.page).css(e.bg_dark).css(e.bg_dark_border).css(e.bg_dark_text).css({
position: "absolute"
}).appendTo("body");
s.on("DOMNodeInserted.img", function() {
(o = a(i)).imagesLoaded().done(function(e) {
a(window).triggerHandler("resize");
}), a(window).triggerHandler("resize");
}), a(window).on("resize", function() {
o.css(e.photo), n(12)._uf_fixsize2(o, window, 1);
}).on("resize.page", function() {
u.text(a(".title:eq(0) div:has(h1) > span:eq(-1)").text().replace(/^[^\d]+(\d+)[^\d]+(\d+)[^\d]+$/, "$1 / $2")), 
u.offset({
top: o.offset().top + 50,
left: o.offset().left - u.outerWidth()
});
}).on("resize.delay", r(100, function() {
a(window).triggerHandler("resize.scroll");
})).on("resize.delay", t(100, function() {
a(window).triggerHandler("resize.scroll");
})).on("resize.scroll", function() {
a(".tbCenter, #tbBox").height(a(window).innerHeight()), a(window).scrollTo(o.add(s).add(".tbBox, .tbCenter"));
}).on("load.imagesLoaded", function() {
s.triggerHandler("DOMNodeInserted.img");
}).on("load.nocontextmenu", () => {
n(11)._uf_disable_nocontextmenu2(2, i + ", #mangaBox, #tbBox", {
types: [ "click" ]
});
}).triggerHandler("load");
}
a(window).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
var i;
(i = a("#pagination .current").prev()).is(".disabled") && (i = i.prev(".prev")), 
i.length && i.is("a") && (r(e), i[0].click(), a(window).triggerHandler("resize.delay"));
break;

case t("pagedown"):
var i;
(i = a("#pagination .current").next()).is(".disabled") && (i = i.next(".next")), 
i.length && i.is("a") && (r(e), i[0].click(), a(window).triggerHandler("resize.delay"));
break;
}
})), e.exports.adblock();
},
adblock(e = t._url_obj) {
a([ ".gg_728" ].join()).hide();
},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add(a("body > .crumb").prevAll()).add(a("body > .footer").nextAll().addBack()).add([ ".module-cmt-header .section-cbox-w .block-head-w, .module-cmt-header .section-cbox-w .block-post-w", ".mtb16[style], .mt10[style]", ".similar-list img, .book-btn", ".scover .bg, .cover .bg, .bcover .bg, .hcover .bg", ".hcover .serial", "#bdShare, .bdShare", "#intro-cut, #intro-act", ".score, #scoreRes", "script" ].join()), 
a(".chapter h4 span").unwrap(), a("#intro-all").show(), r;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://lhscans.com/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(2);
i([]).prop("target", "_blank");
const o = n(4), {debounce: s} = n(3), {throttle: u} = n(3), c = n(8), l = n(12)._uf_fixsize2, d = n(10);
n(14);
const p = n(7);
let h = a(".chapter-content img.chapter-img");
h.length && (r.adblock(e), c.GM_addStyle([ `.chapter-content img.chapter-img { ${d.toCss(d.photo)}; max-height: 100%; }` ]), 
h.imagesLoaded().done(function(e) {
a(window).triggerHandler("resize.done");
}), a(window).on("load.ready", function() {
h = a(".chapter-content img.chapter-img"), a(window).triggerHandler("resize.done");
}).on("resize.done", s(200, function() {
l(h, window, 1);
let e = h.filter(":onScreen").eq(-1);
a(window).scrollTo(e.parent(".separator").addBack());
})).on("load.init", s(2e3, function() {
h = a(".chapter-content img.chapter-img"), a(window).triggerHandler("resize.done");
})).off("keydown.page").on("keydown.page", n(5).packEvent(function(e) {
let t = 0;
switch (h.each(function(e, n) {
if (a(n).is(":onScreen")) return t = e, !1;
}), e.which) {
case p("pageup"):
var n;
t > 0 && t--, (n = h.eq(t)).length && (o(e), a(window).scrollTo(n.parents(".separator").addBack()));
break;

case p("pagedown"):
var n;
t < h.length && t++, (n = h.eq(t)).length && (o(e), a(window).scrollTo(n.parents(".separator").addBack()));
break;
}
})).triggerHandler("load"));
},
adblock(e = t._url_obj) {
let n = a();
(n = n.add([ ".quang-cao" ].join())).hide();
},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.manben.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/manben\.com/),
main(e = t._url_obj) {
const r = n(7), i = n(4), o = n(2);
a(window).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case r("pageup"):
case r("left"):
var t;
(t = a("#crossLeft")).length && (i(e), t[0].click());
break;

case r("pagedown"):
case r("right"):
var t;
(t = a("#crossRight")).length && (i(e), t[0].click());
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj) {
let n = a();
return (n = n.add([].join())).remove(), n;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://www.manhuaren.com/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(7), o = n(4), s = n(10), u = n(8), c = n(12)._uf_fixsize2, {debounce: l} = n(3), {throttle: d} = n(3);
n(14);
const p = n(2);
let h, f;
p([].join(",")).prop("target", "_blank");
let g = function(e) {
f && (a(window).triggerHandler("resize"), f.text(parseInt(e.attr("data-index")) + 1 + "/" + h.length), 
f.offset({
left: e.offset().left - f.outerWidth()
}));
}, m = a(".readPage #cp_img").on("DOMNodeInserted", l(50, function(e) {
let t;
(t = i()) && (2 == t && (f = a("<div data-div-page/>").css(s.page).css(s.bg_dark).css(s.bg_dark_border).css(s.bg_dark_text).css({
top: 50,
position: "fixed"
}).appendTo("body")), (h = a(".readPage #cp_img img.lazy")).not("[data-done]").attr("data-done", !0).attr("src", function(e, t) {
return a(this).attr("data-original");
}).wrap("<figure/>"), h.attr("data-index", function(e) {
return e;
}), h.imagesLoaded().done(() => {
a(window).triggerHandler("resize").triggerHandler("scroll");
}).progress(function(e, t) {
let n = t.isLoaded ? "loaded" : "broken";
console.log("image is " + n + " for " + t.img.src), t.isLoaded && c(t, window, 1);
}), a(window).triggerHandler("resize").triggerHandler("scroll"));
}));
a(window).on("load.ready", function() {
m.triggerHandler("DOMNodeInserted");
}).on("load", function() {
a(window).triggerHandler("resize").triggerHandler("scroll");
}).on("resize", d(100, function() {
h && (c(h, window, 1), a("figure", m).width(a(window).innerWidth()).height(a(window).innerHeight()));
})).on("scroll.page", d(150, function() {
if (h) {
let e = 0;
h.each(function(t, n) {
if (a(n).is(":onScreen")) return e = t, !1;
}), g(h.eq(e));
}
})).on("keydown.page", n(5).packEvent(function(e) {
let t = a("figure", m), n, i = 0;
switch (t.each(function(e, t) {
if (a(t).is(":onScreen")) return i = e, !1;
}), console.log("i", i), e.which) {
case r("pageup"):
case r("left"):
i > 0 && i--, console.log(i), (n = t.eq(i)) && n.length && (o(e), a(window).scrollTo(n), 
g(n));
break;

case r("pagedown"):
case r("right"):
var s;
i < t.length ? i++ : i == t.length && (s = !0), console.log(i, s), s ? a(".readTipForm")[0].click() : (n = t.eq(i)) && n.length && (o(e), 
a(window).scrollTo(n), g(n));
break;
}
})).triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
function i() {
let e = a(".readPage #cp_img");
if (e.is(":not([data-done])")) {
const t = n(8), r = n(10);
return t.GM_addStyle([ "figure { \n\t\t\tmargin: 0; \n\t\t\tpadding: 0; \n\t\t\t\n\t\t\tdisplay: block;\n\t\t\tdisplay: -webkit-flex;\n\t\t\tdisplay: flex;\n\t\t\t\n\t\t\t-webkit-align-items: center;\n\t\t\talign-items: center;\n\t\t\t-webkit-justify-content: center;\n\t\t\tjustify-content: center; }", "" ]), 
a("body").css(r.body).css(r.bg_dark), e.attr("data-done", !0), 2;
}
if (e.length) return 1;
}
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t) {
e.exports = {
metadata: {
include: [ "http*://nhentai.net/*" ],
exclude: []
},
test: e => !!e.host.match(/nhentai\.net/),
main() {
const a = n(7), r = n(4), i = n(10), o = n(9), s = n(2);
s("#content .gallery a").attr("target", "_blank");
const u = n(12)._uf_fixsize2;
if (t(window).on("load.adblock", function(t) {
e.exports.adblock(), n(11)._uf_disable_nocontextmenu2(2, "#content, #content *, #bigcontainer, #thumbnail-container, .thumb-container, .gallerythumb");
}).triggerHandler("load.adblock"), setTimeout(function() {
t(window).triggerHandler("load.adblock");
}, 500), t(window).scrollTo(t("#content, #image-container").eq(-1)), t("#image-container").length) {
let e = t("#image-container img"), n = t("<div/>").css(i.page).css(i.bg_dark).css(i.bg_dark_border).css(i.bg_dark_text).css({
top: 50,
position: "fixed"
}).appendTo("body");
t(window).on("resize", function(a) {
e = t("#image-container img"), u(e).css(i.photo), n.text(t(".page-number .current:eq(0)").text() + "/" + t(".page-number .num-pages:eq(0)").text()), 
setTimeout(function() {
e = t("#image-container img"), n.offset({
left: e.offset().left - n.outerWidth()
});
}, 100), t(window).scrollTo(t("#content, #image-container").eq(-1));
}).triggerHandler("resize"), t("#image-container").on("DOMNodeInserted", function() {
t(window).triggerHandler("resize");
});
}
t(window).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case a("pageup"):
case a("left"):
var n;
(n = t(".pagination .previous")).length && (r(e), n[0].click());
break;

case a("pagedown"):
case a("right"):
var n;
(n = t(".pagination .next")).length && (r(e), n[0].click());
break;
}
}));
},
adblock() {
t(".advertisement").remove(), t("body > script + div[style]:hidden:eq(-1)").remove(), 
localStorage.setItem("N_BetterJsPopLastPopAt", Date.now()), localStorage.setItem("popunder_state", `{"lock_until":${Date.now() + 31104e3}}`);
try {
n(11)._uf_disable_nocontextmenu2(1), unsafeWindow.N && (unsafeWindow.N.popunder = null, 
unsafeWindow.N.advertising = null, unsafeWindow.N.options.ads.show_popunders = !1);
} catch (e) {
console.error(e);
}
}
};
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://www.rawdevart.com/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(e = t._url_obj) {
const r = n(4), {debounce: i} = n(3), {throttle: o} = n(3), s = n(2);
if (s([].join()).prop("target", "_blank"), n(11)._uf_disable_nocontextmenu2(1, ".post-body img"), 
e.path.match(/raw-manga\.html/)) {
const e = n(8), t = n(12)._uf_fixsize2, o = n(10);
n(14);
const s = n(7);
e.GM_addStyle([ ".post-body .separator { padding: 0; margin: 0; }", ".post-body .separator:before { content: ''; display: inline-block; vertical-align: middle; height: 100%; }", ".post-body .separator img { vertical-align: middle; display: inline-block; }", ".post-body .separator a { vertical-align: middle; display: inline-block; }" ]), 
a("body").css(o.bg_dark).css(o.bg_dark_text).css(o.body), a("#wrapper").css(o.bg_transparent);
let u = a(".post-body .separator img");
u.imagesLoaded().done(function(e) {
a(window).triggerHandler("resize.done");
}), a(window).on("load.ready", function() {
u = a(".post-body .separator img"), a(window).triggerHandler("resize.done");
}).on("resize.done", i(200, function() {
t(u, window, 1);
let e = u.filter(":onScreen").eq(-1);
a(window).scrollTo(e.parent(".separator").addBack());
})).on("load.init", i(1e3, function() {
a(window).off("keydown.page").on("keydown.page", n(5).packEvent(function(e) {
let t = 0;
switch (u.each(function(e, n) {
if (a(n).is(":onScreen")) return t = e + 1, !1;
}), e.which) {
case s("pageup"):
var n;
t > 0 && t--, (n = u.eq(t)).length && (r(e), a(window).scrollTo(n.parents(".separator").addBack()));
break;

case s("pagedown"):
var n;
t < u.length && t++, (n = u.eq(t)).length && (r(e), a(window).scrollTo(n.parents(".separator").addBack()));
break;
}
}));
})).triggerHandler("load");
}
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t) {
e.exports = {
metadata: {
include: [ "http*://*.wnacg.com/*", "http*://*.wnacg.org/*", "http*://wnacg.com/*", "http*://wnacg.org/*" ],
exclude: []
},
test: e => !!e.host.match(/wnacg\.(com|org)/),
main(a) {
const r = n(2);
r(".gallary_item a").prop("target", "_blank"), e.exports.adblock(a, !0);
const i = n(7), o = n(4), s = n(10), u = n(8), c = n(12)._uf_fixsize2, {debounce: l} = n(3), {throttle: d} = n(3);
if (t("#photo_body").length) {
let e = t("#photo_body, .photo_body, #imgarea");
t("body").css(s.bg_dark).css(s.bg_dark_text).add(e).css(s.body), u.GM_addStyle(`a { color: ${s.bg_dark_text.color}; }`);
const a = "#photo_body .photo";
let r = t(a);
r.css(s.photo).imagesLoaded().done(() => {
t(window).triggerHandler("resize");
});
let l = t("<div/>").css(s.page).css(s.bg_dark).css(s.bg_dark_border).css(s.bg_dark_text).css(s.page_position).appendTo("body");
t.scrollTo(r), t("#tuzaoblock").hide(), t(window).on("resize", function() {
r.css(s.photo), c(r, window, 1), l.text(t(".newpagelabel").text()), l.offset({
top: r.offset().top + 50,
left: r.offset().left - l.outerWidth()
}), t.scrollTo(r);
}).on("keydown.page", n(5).packEvent(function(e) {
let [n, a] = t(".newpagelabel").text().replace(/[\n\s]/gi, "").split("/").map(e => parseInt(e));
switch (e.which) {
case i("pageup"):
case i("left"):
var r = t(".newpage a.btntuzao:eq(0)");
o(e), n > 1 && r.length && r[0].click();
break;

case i("pagedown"):
case i("right"):
var r = t(".newpage a.btntuzao:eq(-1)");
o(e), n < a && r.length && r[0].click();
break;
}
})), setTimeout(function() {
t(window).triggerHandler("resize");
}, 500);
} else if (t("#img_list").length) {
const e = t("#img_list");
n(14), n(131)(t);
const r = "#img_list img";
let d = t(r);
if (a.query && a.query.match(/page=(\d+)/)) {
let n = RegExp.$1;
t(window).one("resize.once", l(1e3, function() {
d = t(r);
let a = e.add(t(r).eq(n - 1)).eq(-1);
t(window).scrollTo(a.add(a.parent("div:not([id])")));
}));
}
u.GM_addStyle([ "#img_list img { vertical-align: middle; display: inline-block; }", "#img_list > div { padding: 0 !important; overflow: hidden; }", "#img_list > div:before { content: ''; display: inline-block; vertical-align: middle; height: 100%; }" ]), 
t("body").css(s.body).css(s.bg_dark);
let p = t("<div data-div-page/>").css(s.page).css(s.bg_dark).css(s.bg_dark_border).css(s.bg_dark_text).css({
top: 50,
position: "fixed"
}).appendTo("body"), h = function(e) {
return c(t(e), window, 1, {
width: "auto"
}).css(s.photo);
}, f;
p.on("click", function(e) {
window.open(window.location.href.replace(/photos-slide-aid/, "photos-index-aid"), "_blank"), 
o._uf_done2(e);
}), e.on("DOMNodeInserted", function(n) {
(d = t(r)).prop("data-index", function(e) {
return e;
}).attr("name", function(e) {
return "img" + e;
}).imagesLoaded().always(function(e) {}).done(function(e) {
t(e.elements).parent("div").height(t(window).innerHeight()), h(e.elements);
});
let a = e.add(d.eq(0));
a = a.add(d.filter(":onScreen")).eq(-1), p.text(parseInt(a.prop("data-index")) + 1 + "/" + d.length);
});
let g = function(e, n) {
p.text(parseInt(e.prop("data-index")) + 1 + "/" + d.length), p.offset({
left: e.offset().left - p.outerWidth()
}), n && (t(window).scrollTo(n), f = setTimeout(function() {
f && clearTimeout(f), f = null;
}, 40));
};
t(window).on("load", function() {
e.triggerHandler("DOMNodeInserted"), t(window).triggerHandler("resize");
}).on("resize", function() {
(d = t(r)).each(function() {
t(this).parent("div").height(t(window).innerHeight()), h(this);
});
}).on("resize.once", l(100, function() {
d = t(r);
let n = e.add(d.eq(0));
n = n.add(d.filter(":onScreen")).eq(-1), g(n), t(window).scrollTo(n.parent());
})).on("scroll", l(1e3, function(e) {
t(window).triggerHandler("resize.once");
})).on("keydown.page", n(5).packEvent(function(e) {
if (f) switch (e.which) {
case i("pageup"):
case i("left"):
case i("pagedown"):
case i("right"):
return o(e), !1;
break;
}
d = t(r);
let n = 0;
switch (d.each(function(e, a) {
if (t(a).is(":onScreen")) return n = e, !1;
}), e.which) {
case i("pageup"):
case i("left"):
n > 0 && n--;
var a = d.eq(n);
o(e), a.length && g(a, a.parent());
break;

case i("pagedown"):
case i("right"):
n < d.length && n++;
var a = d.eq(n);
o(e), a.length && g(a, a.parent());
break;
}
})).triggerHandler("resize.once");
} else {
if (t(window).add("body, a, img").on("click", function(e) {
e.stopImmediatePropagation();
}), a.path && a.path.match(/photos-index(?:-page-\d+)?-aid-(\d+)/)) {
let e = RegExp.$1;
t(".gallary_wrap .gallary_item:eq(0) a").prop("href", function(e, n) {
let r = parseInt(t(this).parents(".gallary_item").find(".info .title .name").text());
return a.path.replace(/photos-index(?:-page-\d+)?-aid-/, "photos-slide-aid-").concat(r ? "?page=" + r : "");
});
}
t(window).scrollTo(".gallary_wrap"), t(window).on("load", l(500, function() {
e.exports.adblock();
})).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case i("pageup"):
case i("left"):
var n;
(n = t(".paginator .prev a")).length && (o(e), n[0].click());
break;

case i("pagedown"):
case i("right"):
var n;
(n = t(".paginator .next a")).length && (o(e), n[0].click());
break;
}
})).triggerHandler("load");
}
},
adblock(e, a) {
if (a) try {
unsafeWindow.open = function(e, ...t) {
if (console.log("window.open", e, ...t), e.toString().match(/wnacg/)) return window.open(e, ...t);
};
} catch (e) {
console.error(e);
}
n(11)._uf_disable_nocontextmenu2(2, ".gallary_wrap a, body, #bodywrap, a, img, input", {
types: [ "click" ]
}), t("iframe").remove();
try {
unsafeWindow.Advisor = null, unsafeWindow.adsbyjuicy = null;
} catch (e) {}
}
};
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://smp*.yoedge.com/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(4);
n(45);
const o = n(12)._uf_fixsize2, {debounce: s} = n(3), {throttle: u} = n(3);
n(14);
const c = n(2);
c([].join(",")).prop("target", "_blank"), a("body").on("click", '.tool-container a[href*="buildImageDiv"]', function() {
setTimeout(function() {
a(window).triggerHandler("load.ready");
}, 500);
}), a(window).on("load.ready", function() {
i();
}).on("load", function() {
a(window).triggerHandler("resize");
}).on("resize", u(100, function() {
let e = o("#smp_image_div_id figure", window, 1, {
width: "auto"
});
})).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7);
let i = a("#gameCanvas:visible"), o = a("#smp_image_div_id:visible figure"), s = 0;
switch (o.each(function(e, t) {
if (a(t).is(":onScreen")) return s = e, !1;
}), console.log("i", s), e.which) {
case t("pageup"):
s > 0 && s--, console.log(s), i.length ? (r(e), unsafeWindow.smp.toolbar.perPage()) : (i = o.eq(s)) && i.length && (r(e), 
a(window).scrollTo(i));
break;

case t("pagedown"):
var u;
s < o.length ? s++ : s == o.length && (u = !0), console.log(s), i.length ? (r(e), 
unsafeWindow.smp.toolbar.nextPage()) : u ? unsafeWindow.smp.toolbar.nextApp() : (i = o.eq(s)) && i.length && (r(e), 
a(window).scrollTo(i));
break;
}
})).triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
function i() {
let e = a("#smp_image_div_id:not([data-done])");
if (e.length) {
const t = n(8);
t.GM_addStyle([ "figure { \n\t\t\tmargin: 0; \n\t\t\tpadding: 0; \n\t\t\t\n\t\t\tdisplay: block;\n\t\t\tdisplay: -webkit-flex;\n\t\t\tdisplay: flex;\n\t\t\t\n\t\t\t-webkit-align-items: center;\n\t\t\talign-items: center;\n\t\t\t-webkit-justify-content: center;\n\t\t\tjustify-content: center; }" ]), 
a("img.lazy", e).attr("src", function(e, t) {
return a(this).attr("data-original");
}).wrap("<figure/>"), e.attr("data-done", !0), a(window).triggerHandler("resize");
}
}
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.fun01.cc/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(e = t._url_obj) {
const a = n(2);
a([].join()).prop("target", "_blank");
const r = n(11)._uf_disable_nocontextmenu2(2, ".postDetail");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, r = null) {
let i = a(r);
return i = i.add([ ".doLogin, .avatar" ].join()).add(a(".postDetail").parentsUntil("body").addBack().siblings()).add(a(".postDetail .content").nextAll()).add(a(".postDetail #postEnd").nextAll()), 
n(9).GM_addStyle([ "body { background: none; }" ].join("")), i;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a, r) {
let i = {
metadata: {
include: [ "http*://cwn.ling.sinica.edu.tw/*", "http*://cwn.ling.sinica.edu.tw/query1.htm*", "http*://cwn.ling.sinica.edu.tw/_process.asp*", "http*://cwn.ling.sinica.edu.tw/input.asp*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(2);
let o, u, c, l;
this.adblock(e), a.GM_addStyle([ "html, body, :root { font-size: 9pt; }", "table { font-size: inherit; }" ]), 
document.referrer && document.referrer.match(/cwn\.ling\.sinica\.edu\.tw/) && s(o = new URL(document.referrer)) && (u = o.searchParams);
let d = r('a[href*="_process.asp?inputword="]');
d.length > 1 && d.attr("target", "_blank");
const p = "inputword";
s(e.query) && (c = new URLSearchParams(e.query)), u && u.get(p) && (l = u), c && c.get(p) && (l = c);
let h = "";
s(l) ? h = l.get(p).trim() : l = null;
let f = r('form[name="form1"]').attr("method", "get"), g = r(':input[name="inputword"]').eq(0);
{
let e = "radiobutton";
if (l && l.get(e)) {
let t = l.get(e);
console.log(e, t);
let n = r(`input[name="${e}"]`).removeAttr("checked").prop("checked", !1).filter(`[value="${t}"]`).eq(0).attr("checked", "checked").prop("checked", !0);
n.length && n[0].click(), r('a[href$="query1.htm"]').attr("href", function(n, a) {
return "input.asp?" + `${e}=${t}`;
});
}
}
{
let e = [];
h && e.push(h);
let t = r('div + table[align="center"] td[align="center"] font').eq(0);
t.length && e.push(t.text().replace(/[\s「」]+/g, "")), console.log(e), e.length && d.each(function() {
let t = r(this), n = t.text().trim().replace(/\d+$/, "").trim();
e.includes(n) && (t.parent().is("td") ? t.parent().css("background-color", "#ff00ea") : t.css("background-color", "#ff00ea"), 
t.css("color", "#fff"));
});
}
if (h && g.length) {
let e;
g.val() || l !== c && !h.match(/^[\w\u4E00-\u9FFF\s]+$/i) || (g.val(h), c && c.get(p) && (e = !0)), 
console.log("bool", e, {
current_qs: c,
target_qs: l
}), e && f.submit();
}
r("font").removeAttr("face");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let a = r(n);
return a = a.add([].join());
}
};
function o(e) {
let t, n, a = document, r = decodeURI;
return a.cookie.length > 0 && -1 != (t = a.cookie.indexOf(e + "=")) ? (t = t + e.length + 1, 
-1 == (n = a.cookie.indexOf(";", t)) && (n = a.cookie.length), r(a.cookie.substring(t, n))) : "";
}
function s(e) {
if (e) {
e instanceof URL && (e = e.searchParams);
let t = "";
return (URLSearchParams, t = e.toString()).replace(/^[\?\s#&]+|[\?\s#&]+$/g, "").length > 1;
}
return !1;
}
e.exports = i;
}).call(this, n(1), n(8), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a, r) {
let i = {
metadata: {
include: [ "http*://dict.revised.moe.edu.tw/*", "http*://dict.revised.moe.edu.tw/cbdic/search.htm*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const i = this, o = n(2);
let u, c, l, d;
(e.path.match(/search\.htm/) || e.query.match(/o=dcbdic/)) && a("script:not([src])").remove(), 
"/" != e.path && "" != e.path || a('meta[HTTP-EQUIV*="Refresh"], meta[HTTP-EQUIV*="refresh"]').remove(), 
r.GM_addStyle([ "html, body, :root { font-size: 9pt; }", "table, select, input { font-size: inherit; }", "select, input, option, font, .prtresult_div .resnums, .menufmt1, .menu2s1n a, .fmt1table .mainth, .fmt1table a:link, .fmt1table a:visited, .fmt1table .subfont, .fmt1table { font-family: initial; }", ".prtresult_div, .menu2s1n a, .pagefont, #nav, .menu2s1n a, .nn1, .fmt1table .mainth, .fmt1table, .fmt1table .maintd0, .fmt1table .maintd1 { font-size: 1rem; }", ".numfont { display: inline-block; min-width: 1em; text-align: center; }", "sub.subfont { vertical-align: text-top; }", ".fmt1table .maintd0, .fmt1table .maintd1 { padding: 1px; }", ".fmt1table tr .maintd0:nth-child(3), .fmt1table .maintd1:nth-child(3) { font-size: 0.9rem; }" ], "body"), 
this.adblock(e), document.referrer && document.referrer.match(/dict\.revised\.moe\.edu\.tw/) && s(u = new URL(document.referrer)) && (c = u.searchParams), 
s(e.query) && (l = new URLSearchParams(e.query)), c && c.get("qs0") && (d = c), 
l && l.get("qs0") && (d = l);
let p = d && d.get("ccd") || "", h = "";
if (d && (d.delete("ccd"), d.delete("o"), d.delete("index")), s(d) ? h = d.get("qs0") : d = null, 
console.info({
referrer: u,
referrer_qs: c,
current_qs: l,
target_qs: d,
target_ccd: p,
target_qs0: h
}), d && e.path.match(/cbdic(?:\/(?:index.html)?)?$/)) {
let e = "/cgi-bin/cbdic/gsweb.cgi/?&o=dcbdic&cache=" + new Date().getTime() + "&" + d.toString(), t;
a("#myContent .my-img a").attr("href", e)[0].click();
}
let f = a('form[name="main"]').attr("method", "get"), g = a('#qs0:input, :input[name="qs0"]').eq(0);
if (h && g.length && (g.val() || g.val(h)), d && e.path.match(/gsweb\.cgi/) && e.query.match(/index=1/) && f.length) {
let e, t = "selectmode";
if (d.get(t)) {
console.log(d.get(t));
let n = a(`:checkbox[name="${t}"]`, f).removeAttr("checked").prop("checked", !1).filter(`[value="${d.get(t)}"]`).eq(0).attr("checked", "checked").prop("checked", !0);
n.length && n[0].click(), e = !0;
}
if (t = "clscan", d.get(t)) {
console.log(d.get(t));
let n = a(`select[name="${t}"]`, f).val(d.get(t));
e = !0;
}
if (t = "psize", d.get(t)) {
let e = d.get(t), n = a(`select[name="${t}"], :input[name="${t}"]`, f);
console.log(t, e, n), n.length || (n = a(`<input name="${t}" type="hidden"/>`).appendTo(f)).val(e);
}
if (t = "sortby", d.get(t)) {
let e = d.get(t), n = a(`select[name="${t}"], :input[name="${t}"]`, f);
console.log(t, e, n), n.length || (n = a(`<input name="${t}" type="hidden"/>`).appendTo(f)).val(e);
}
console.log(e), e && f[0].submit();
}
e.path.match(/gsweb\.cgi/) && (a(window).scrollTo(".fmt1table"), h && a(".fmt1table a").prop("href", function(e, t) {
let n = new URL(t);
return n.searchParams.get("qs0_from") || n.searchParams.set("qs0_from", h), n.href;
})), a(window).on("load", async function() {
let t = a("a.slink:not(.prtresult_div a)").attr("target", "_blank").prop("target", "_blank");
i.adblock(e);
}).triggerHandler("load");
},
adblock(e = t._url_obj) {
{
let e = 365, t = new Date();
t.setTime(t.getTime() + 24 * e * 60 * 60 * 1e3);
let n = t.toGMTString();
n = ";expires=" + n, document.cookie = "cbdic=" + (o("cbdic") || "notice:1") + n + ";domain=dict.revised.moe.edu.tw;path=/", 
document.cookie = "_gat=1" + n + ";domain=dict.revised.moe.edu.tw;path=/";
}
a("body, html, :root").removeAttr("onLoad").removeAttr("onUnload").removeAttr("onload").removeAttr("onunload").removeAttr("onclick").removeAttr("onkeypress");
try {
document.body.onload = document.body.onunload = document.body.onclick = document.body.onkeypress = null, 
window.onload = window.onunload = window.onclick = window.onkeypress = null;
} catch (e) {}
try {
unsafeWindow.document.body.onload = unsafeWindow.document.body.onunload = unsafeWindow.document.body.onclick = unsafeWindow.document.body.onkeypress = null, 
unsafeWindow.onload = unsafeWindow.onunload = unsafeWindow.onclick = unsafeWindow.onkeypress = null;
} catch (e) {}
try {
unsafeWindow.fsUnload();
} catch (e) {}
try {
unsafeWindow.cleartimeout();
} catch (e) {}
try {
unsafeWindow.secondsleft = 2592e3;
} catch (e) {}
try {
unsafeWindow.showtimeout = null;
} catch (e) {}
a('#myContent .my-img a[href*="html_onclick"]').attr("href", "/cbdic/search.htm");
},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
function o(e) {
let t, n, a = document, r = decodeURI;
return a.cookie.length > 0 && -1 != (t = a.cookie.indexOf(e + "=")) ? (t = t + e.length + 1, 
-1 == (n = a.cookie.indexOf(";", t)) && (n = a.cookie.length), r(a.cookie.substring(t, n))) : "";
}
function s(e) {
if (e) {
e instanceof URL && (e = e.searchParams);
let t = "";
return (URLSearchParams, t = e.toString()).replace(/^[\?\s#&]+|[\?\s#&]+$/g, "").length > 1;
}
return !1;
}
e.exports = i;
}).call(this, n(1), n(0).default, n(8));
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://www.esjzone.cc/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2);
r([ ".container .thumbnail a", ".tabbable a" ].join(",")).prop("target", "_blank");
const {throttle: o} = n(3), {debounce: s} = n(3), u = n(4), c = n(112).copyonclick;
a(".forum-content").attr("id", "_forum_content").css({
"font-size": "1rem",
"font-family": "initial"
}), a(".container .alert.alert-info > .pull-right").append('<div style="padding-left: 10px; text-align: center; display: inline-block;"><button id="_copy">Copy</button></div>'), 
a("#_copy").attr("onclick", c("_forum_content"));
const l = s(1e3, () => {
this.clearly(), i(a(".forum-content > p")), i(a(".book_description p"));
});
a(document).ready(l);
try {
unsafeWindow.getTranslation && (d = unsafeWindow.getTranslation, unsafeWindow.getTranslation = function(...e) {
let t = d.call(this, ...e);
return l(), t;
});
} catch (e) {}
var d;
a(window).on("load.ready", o(1e3, function() {
try {
unsafeWindow.$(unsafeWindow.document).bind({
copy: function() {
return !0;
}
}).unbind("copy"), unsafeWindow.$(unsafeWindow.document).off("copy");
} catch (e) {
console.error(e);
}
a(document).off("copy"), l();
})).triggerHandler("load.ready");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return (r = r.add([ ".forum-content p:has(> script)", ".forum-content p:empty" ].join())).remove(), 
r;
}
};
function i(e) {
return a(e).each(function() {
let e = a(this), t = e.html().replace(/(?:&nbsp;?)/g, " ").replace(/[\xA0\s]+$/g, "");
"<br/>" != t && "<br>" != t || (t = ""), e.after(`${t}<br/>`), e.remove();
});
}
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://*.lightnovel.cn/*", "http*://*.lightnovel.cn/*mod=viewthread*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2);
r([]).prop("target", "_blank");
const i = n(112).copyonclick;
let o = a("#postlist"), s = o.find('> div[id^="post_"]');
o.length && s.length && s.each(function(e, t) {
let n = a(this), r = a('[id^="postmessage_"]:eq(0)', n).eq(0);
a("i.pstatus", r).remove();
let o = a('<a href="javascript:void(0)">COPY</a>').attr("onclick", i(r.attr("id"))), s = a(".plc .authi:eq(0)", n).append(o);
console.log(s, o);
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://masiro.moe/*", "http*://masiro.moe/*mod=viewthread*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2);
r([]).prop("target", "_blank");
const i = n(112).copyonclick;
let o = a("#postlist"), s = o.find('> div[id^="post_"]');
o.length && s.length && s.each(function(e, t) {
let n = a(this), r = a('[id^="postmessage_"]:eq(0)', n).eq(0);
a("i.pstatus", r).remove();
let o = a('<a href="javascript:void(0)">COPY</a>').attr("onclick", i(r.attr("id"))), s = a(".plc .authi:eq(0) .pipe.show:eq(0)", n);
s.length ? s.after('<span class="pipe show">|</span>').after(o) : s = a(".plc .authi:eq(0)", n).append('<span class="pipe">|</span>').append(o);
let u = a(".t_f", n);
a(":not(:visible), .jammer", u).remove(), console.log(s, o);
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a, r) {
let i = {
metadata: {
include: [ "http*://syosetu.com/*" ],
match: [ "*://nl.syosetu.com/*", "*://ncode.syosetu.com/*", "*://novel18.syosetu.com/*", "*://nkx.syosetu.com/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(2);
return i([ "#novel_contents .novel_sublist2 .subtitle a" ].join(",")).prop("target", "_blank"), 
o(), void a(window).scrollTo("#novel_no, .novel_subtitle", 0 - a("#novel_header").height());
r.GM_addStyle([ '#novel_contents .novel_sublist2 .subtitle:after { content: "#" attr(data-id) " "; font-size: 8pt; font-family: Consolas; margin-left: 0.5em; }', '#novel_contents .novel_sublist2 .subtitle:before { content: "#" attr(data-id-sub) " "; font-size: 8pt; font-family: Consolas; min-width: 3em; display: inline-block; }', '#novel_contents .novel_sublist a[data-id]:after { content: "#" attr(data-id) " "; font-size: 0.7em; font-family: Consolas; margin-left: 0.5em; }', '#novel_contents .novel_sublist a[data-id-sub]:before { content: "#" attr(data-id-sub) " "; font-size: 0.7em; font-family: Consolas; min-width: 3em; display: inline-block; }' ]), 
a("#novel_contents .novel_sublist2 .subtitle").attr("data-id", function(e, t) {
return a(this).html(a(this).html().replace(/[\t\r\n]/g, "").trim()), e + 1;
}), a("#novel_contents .novel_sublist > ul > li:not(.chapter)").each(function(e) {
a(this).html(a(this).html().replace(/[\t\r\n]/g, "").trim()), a("> a:eq(0)", this).attr("data-id", function() {
return e + 1;
});
});
let s = 0, u = 1;
a("> .chapter_title, > .novel_sublist2", "#novel_contents .index_box").each(function() {
let e = a(this);
e.html(e.html().replace(/[\t\r\n]/g, "").trim()), e.is(".chapter_title") ? (s++, 
u = 1) : e.is(".novel_sublist2") && (e.find(".subtitle").attr("data-id-sub", u), 
u++);
}), s = 0, u = 1, a("#novel_contents .novel_sublist > ul > li").each(function() {
let e = a(this);
e.html(e.html().replace(/[\t\r\n]/g, "").trim()), e.is(".chapter") ? (s++, u = 1) : e.find("> a:eq(0)").attr("data-id-sub", function() {
return u++;
});
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([ "#pageBottom, #novel_header, #footer" ].join());
}
};
function o() {
let e = 365, t = new Date();
t.setTime(t.getTime() + 31536e6);
let n = t.toGMTString();
n = ";expires=" + n, document.cookie = "over18=yes; Domain=.syosetu.com; Path=/" + n;
let r = a("#modal #yes18[data-url]");
if (r.length) return window.location.href = r.attr("data-url"), !0;
}
e.exports = i;
}).call(this, n(1), n(0).default, n(8));
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http*://www.wenku8.com/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(2);
r([ "#content .grid b a, table.css .ccss a, #content .grid a:has(img)" ].join(",")).prop("target", "_blank"), 
a(window).scrollTo("#content"), a(window).on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
var i;
(i = a("#pagelink a.prev")).length && (r(e), i[0].click());
break;

case t("pagedown"):
case t("right"):
var i;
(i = a("#pagelink a.next")).length && (r(e), i[0].click());
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a, r) {
let i = {
metadata: {
include: [ "http*://www.jetbrains.com/*", "http*://www.jetbrains.org/*", "http*://intellij-support.jetbrains.com/*", "http*://plugins.jetbrains.com/*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const {debounce: r} = n(3), {throttle: i} = n(3), u = a(window);
(e.host.match(/plugins|intellij-support/) || e.path.match(/sdk/)) && o(), e.host.match(/plugins/) && a('<li class="header-second-links-list__item">\n              <a class="header-link-item-second" href="//intellij-support.jetbrains.com/hc/en-us/community/topics/200366979-IntelliJ-IDEA-Open-API-and-Plugin-Development" target="_blank">\n                API/Plugin Community\n              </a>\n            </li>').appendTo('.header-popover-content[data-popover-group-content-id="nav-dev-guide"] .header-second-links-list'), 
e.path.match(/download/) && u.on("load.download", r(1e3, function() {
if (e.path.match(/download/)) {
let e = a('#download-link[href*="download.jetbrains.com"]:not([data-done])');
e.length && (e.clone().prop("href", function(e, t) {
return t.replace(/\.exe$/, ".zip");
}).removeAttr("id").text("[zip]").appendTo(e.parents(":eq(0)").eq(0)), e.attr("data-done", !0));
}
})), u.on("load", function() {
s();
}).triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
function o() {
r.GM_addStyle([ "body, html, :root { font-size: 9pt; }", ".article-content, .alert, .textarea, textarea, input, .markdown, .checkbox, .select2-selection__rendered, .plugin-card__text, .content-card__text, a.content-card__text { font-size: 1rem; }", ".panel__content, .wrapper > .panel, .nav-tree, .search-box .input-with-button__input { font-size: 1rem; }", '.search-box-small .search input[type="search"] { font-size: 1rem; }' ]);
}
function s() {
const e = n(2);
let t = e([ ".content-card__title a, .js-plugin-card-title, .plugin-card__title a, .plugin-card a" ]).prop("target", "_blank");
}
e.exports = i;
}).call(this, n(1), n(0).default, n(8));
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [],
match: [ "https://wetransfer.com/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(4), {debounce: i} = n(3), {throttle: o} = n(3), s = n(2);
s([]).prop("target", "_blank"), a(".wallpaper").on("click", r), a("body").on("DOMNodeInserted", ".transfer", i(300, function() {
let e = a(".transfer__textfield, .transfer-link__url");
if (e.length && a(".uploader__image:visible").length) {
let t = 200, n = e.val(), r = a(`<img src="https://chart.apis.google.com/chart?cht=qr&chs=${t}x${t}&chl=${n}"/>`).css({
margin: "auto",
display: "block"
});
a(".uploader__image").after(r).hide();
} else a(".transfer__upsell, .transfer__button").length > 1 && a(".transfer__button").click();
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, n) {
e.exports = {
metadata: {
include: [ "http*://mall.pchome.com.tw/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/mall\.pchome\.com\.tw/),
main(e = t._url_obj) {},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj) {
let a = n();
return (a = a.add([].join())).remove(), a;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [ "http://www.kerrytj.com/zh/search/search_track.aspx*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const {debounce: r} = n(3), i = n(2);
i([].join(",")).prop("target", "_blank"), a(window).on("load.ready", r(100, function() {
let t = a("#trackNo1");
if (t.length && !t.val()) {
let n = /trackNo\d?=(\d+)/;
if (document.referrer.match(n) || e && e.query.match(n)) {
t.val("123").trigger("keydown").trigger("keyup").val(RegExp.$1).trigger("change");
{
let e = new Event("change");
t[0].dispatchEvent(e);
}
}
}
})).triggerHandler("load.ready");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http://postserv.post.gov.tw/pstmail/main_mail.html*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(e = t._url_obj) {
const {debounce: r} = n(3), i = n(2);
i([].join()).prop("target", "_blank"), a("#wrapper").on("DOMNodeInserted", r(500, function() {
a(window).triggerHandler("load.ready");
})), a(window).on("load.ready", r(100, function() {
let t = a("#MAILNO1");
if (t.length && !t.val()) {
let n = /MAILNO\d?=(\d+)/;
if (document.referrer.match(n) || e && e.query.match(n)) {
t.val("123").trigger("keydown").trigger("keyup").val(RegExp.$1).trigger("change");
{
let e = new Event("change");
t[0].dispatchEvent(e);
}
}
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e, t = 1) {
return {
addform: {
text: "詢問",
url: `https://tw.buy.yahoo.com/myaccount/problem_addform?gd=${e}&problemtype=${t}`
},
detail: {
text: "記錄",
url: `https://tw.buy.yahoo.com/myaccount/problem_detail?gd=${e}&problemtype=${t}`
}
};
}
function i(e, t = 1) {
let n = r(e, t), i = a("<span/>").css({
display: "block",
"text-align": "center"
}), o = a("<a/>").prop("target", "_blank").prop("href", n.addform.url).text(n.addform.text).appendTo(i);
return a("<span> | </span>").appendTo(i), o.clone().prop("target", "_blank").prop("href", n.detail.url).text(n.detail.text).appendTo(i), 
i;
}
function o() {
let e = a("#cl-restriction .action form .next:submit");
if (e.length) return e[0].click(), !0;
}
function s(e = t._url_obj) {
e.path.match(/orderlist/) && a(".proctip a").each(function(e, t) {
let n = a(this), r = n.attr("href");
r.match(/postserv\.post\.gov\.tw\/webpost\/CSController.+(?:MAILNO=(\d+))/) ? n.attr("href", `http://postserv.post.gov.tw/pstmail/main_mail.html?MAILNO=${RegExp.$1}`) : r.match(/www\.tjoin\.com\/search\/stocksearch\.asp/) && (n.text().match(/(\d+)/), 
n.attr("href", `http://www.kerrytj.com/zh/search/search_track.aspx?trackNo=${RegExp.$1}`));
});
}
function u(e) {
return e.map(e => `[class*="${e}"]`);
}
e.exports = {
metadata: {
include: [ "http*://tw.buy.yahoo.com/*", "http*://tw.buy.yahoo.com/bestbuy/*", "http*://tw.buy.yahoo.com/activity/*", "https://tw.search.buy.yahoo.com/search/shopping/*", "https://twpay.buy.yahoo.com/checkout/preview*", "https://tw.buy.yahoo.com/coupons*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/buy\.yahoo\.com/),
async main(r = t._url_obj) {
if (!0 === o()) return;
const c = n(7), l = n(4), d = n(2), {debounce: p} = n(3), {throttle: h} = n(3), f = n(8), g = n(17).GMApi, m = n(160).create(e.exports.file);
a("#srp-pjax").on("DOMNodeInserted", "#srp-pjax-content", p(200, function() {
a(window).triggerHandler("load");
})), a(".orderbox").on("DOMNodeInserted", "#srp-pjax-content", p(200, function() {
a(window).triggerHandler("load");
})), s(r), f.GM_addStyle([ ":root, html, body { font-size: 10pt; font-family: unset; }", "#cl-menunav .tabview .panel ul.yui3-menu li.menuitem .yui3-menu-label { font-size: unset; }" ]), 
f.GM_addStyle([ ".ShoppingProductFeatures__productFeatureWrapper___1D0EZ ul li div { display: inline-block; margin-top: 0; margin-left: 0; }" ]), 
a(window).on("load.ready", p(500, function() {
d([ "#sr a, #cl-bestbuypd a, #bestdeal-bound, #eventKV_wrap a, .eventKV_wrap a", ".orderbox a.name", ".myacc-mod .listbox .pdname a, .myacc-mod .listbox .proc a", "#auction_bf .bd a", "#srp_result_list .item a", "#cl-vvrecmd .page-item a", ".header .link", "#shopcart a", "#myaccount a", 'a[class*="OrderItem__item"]', 'a[class*="BaseGridItem__content"]', '[class*="ViewAlsoView__recomendedItem"] a', '[class*="ProductHorizList"] a', ".catitem-bd #cl-recproduct a", "#cl-menunav .category .popup a" ].join(",")).prop("target", "_blank").attr("data-done", !0).off("click.open").on("click.open", function(e) {
return window.open(a(this).attr("data-href") || this.href, "_blank"), l(e);
}), d([ "#srp_result_list .item a", "#cl-vvrecmd .page-item a" ].join(",")).attr("data-href", function() {
let e = a(this).attr("href");
return a(this).attr("href", "javascript:void(0)"), e;
}), a(".orderbox .rm").not("[data-done]").attr("data-done", !0).each(function() {
let e = a(this), t, n;
i(e.attr("gdid")).prependTo(a(".spec", e));
}), a(".spec-table td:has(> .buy_input)").not("[data-done]").attr("data-done", !0).each(function() {
let e = a(this), t = e.parents("#cl-gdbooth").eq(0), n = a(':input#gdid:eq(0), :input[name="gdid"]:eq(0)', t).eq(0).val();
if (n) {
let t = i(n);
a("a", t).addClass("spec item").css({
"line-height": "1.85em",
"min-width": "3em",
"border-color": "rgba(123, 0, 170, 0.6)",
color: "#7b00aa",
"border-radius": "0.5em",
"margin-right": "5px",
"margin-left": "5px"
}), t.css({
"margin-top": "1em",
"text-align": "left"
}).prependTo(e);
}
}), a("#myaccount > a:has(> .username)").prop("href", "https://tw.buy.yahoo.com/myaccount/orderlist?hpp=S2");
let e = a('#TextBoxName, #TextBoxEmail, #TextBoxCustomValue, form[action*="actregister"]');
e.length && (e.attr("autocomplete", "on"), a("#ButtonConfirm").removeAttr("disabled"), 
a(".blockUI.blockOverlay").click(function(e) {
a(".blockUI").hide().css("z-index", 0).remove(), l(e);
}), (e = e.filter(":text, textarea").filter("[id]").filter(":visible").not(":hidden, :submit, :file")).each(function() {
let e = a(this), t = e.prop("id"), n;
if (!e.val()) {
let n = m.getValue(t);
n && e.val(n);
}
}), e.on("change keyup", function() {
let e = a(this), t = e.prop("id"), n = e.val();
n && m.setValue(t, n);
})), r.path.match(/coupons/) && a('div[class*="CouponsItem__receive"]').each(function() {
let e;
a(this).text().match(/已領取/) || this.click();
});
let t = u([ "InfoCell__cellContent", "InfoCell__cellTitle", "DeliveryInfo__expandableContent", "ProductMainInfo__ccardWrap", "InfoCell__cellContent", "ShoppingPromiseInfo__cellContent", "ThemeDiscoveryAd", "ProductMainInfo__ccard" ]);
a(`[class*="ProductHtmlDetail__detail___34PZN"] td > p[style*="font-size"], ${t.join(", ")}, [class*="RadioButtons__radioBtn___qhOjt"] span`).css("font-size", "unset");
})).on("load.search", function() {}).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case c("pageup"):
case c("left"):
var t;
(t = a("#srp_pagination .pre-page a")).length && (l(e), t[0].click());
break;

case c("pagedown"):
case c("right"):
var t;
(t = a("#srp_pagination .next-page a")).length && (l(e), t[0].click());
break;
}
})).on("load.adult_chk", o).triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj) {}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r() {
let e = a("#ypsadult a.no");
if (e.length) return window.location.href = e.prop("href"), !0;
}
e.exports = {
metadata: {
include: [ "http*://tw.mall.yahoo.com/*", "http*://tw.user.mall.yahoo.com/my/*", "https://tw.search.mall.yahoo.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/mall\.yahoo\.com/),
main(e = t._url_obj) {
if (r()) return;
const {debounce: i} = n(3), {throttle: o} = n(3), s = n(2);
a("#srp-pjax").on("DOMNodeInserted", "#srp-pjax-content", i(200, function() {
a(window).triggerHandler("load");
})), a(window).on("load.ready", function() {
s([ "#srp_sl_result #srp_result_list .item a, #ypsmyeco .listtable a", "#ypswlicon .bd a, #ypswlicon .watchlist a, .ypsmodule .listtable a", "#EC-UH a" ].join()).prop("target", "_blank");
}).on("keydown.page", n(5).packEvent(function(e) {
const t = n(4), r = n(7);
switch (e.which) {
case r("pageup"):
case r("left"):
var i;
(i = a("#srp_pagination .pre-page a")).length && (t(e), i[0].click());
break;

case r("pagedown"):
case r("right"):
var i;
(i = a("#srp_pagination .next-page a")).length && (t(e), i[0].click());
break;
}
})).triggerHandler("load");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.facebook.com/*", "http*://www.facebook.com/saved/*" ],
exclude: [ "http*://www.facebook.com/ajax/*", "http*://www.facebook.com/*plugins/*", "http*://staticxx.facebook.com/*" ]
},
test: e => !!e.host.match(/facebook\.com/),
async main(r = t._url_obj) {
const i = n(4), o = n(2), s = n(127).parse_url, {debounce: u} = n(3), c = n(109), l = n(17).GMApi;
let d = {
sk: null
};
function p() {
if (r.query && r.query.match(/sk=(h_chr|h_nor)/)) {
d.sk = RegExp.$1, console.log(6666666, d), l.callSafe("GM_setValue")("facebook.sk", d.sk);
let e = l.callSafe("GM_getValue")("facebook.sk"), t = l.GM_getValue("facebook.sk"), n = GM_getValue("facebook.sk");
console.log(777777777, {
sk: e,
sk2: t,
sk3: n
}, [ l, l.GM_getValue, GM_getValue, l.GM_getValue === GM_getValue ]);
} else if (!d.sk) {
let e;
(e = e || l.callSafe("GM_getValue")("facebook.sk")) && (d.sk = e);
}
c.greasemonkey.debug(l.callSafe("GM_listValues")()), c.greasemonkey.debug(r, d, document.cookie);
}
if (p(), d.sk && (console.log(d), "string" != typeof d.sk && (d.sk instanceof Promise || "function" == typeof d.sk.then) && (d.sk = await d.sk)), 
d.sk && "h_chr" == d.sk && window.location.href.match(/\/\/(?:www\.)?facebook\.com\/?\??(?:#.+)?$/)) return void (window.location.href = window.location.href + (-1 !== window.location.href.indexOf("?") ? "&" : "?") + "sk=" + d.sk);
"h_chr" == d.sk && a('#bluebarRoot h1[data-click="bluebar_logo"] a').attr("href", function(e, t) {
return t.replace(/&?sk=(h_chr|h_nor)/, "").trim("&").concat((-1 !== t.indexOf("?") ? "&" : "?") + "sk=" + d.sk);
});
let h = u(1500, function() {
c.url(window.location.href, t, function(e, t, n) {
c.greasemonkey.debug("location", e, t._url_obj, n), r = t._url_obj, p();
});
let n = a('#appsNav > ul > li > a[data-testid="left_nav_item_建立特效框"]:eq(0)').not("[data-uf]");
n.length && n.attr("data-uf", !0).parent("li").after(function() {
let e = a("<li />").addClass("clearfix sideNavItem stat_elem"), t = a('<a draggable="false" />').addClass("_5afe").prop("href", "/profilepicframes?ref=app_bookmark").html(function() {
return '<span class="imgWrap" data-testid="bookmark_icon_left_nav"><i class="img sp_CgOJqtrmT7M sx_f75c27" draggable="false"></i></span><div dir="ltr" class="linkWrap noCount">使用特效框</div>';
}).appendTo(e);
return e;
});
let i = o([ "#content ._5wcf a._24-t", "#saveContentFragment .fcg a" ].join(",")).not("[data-done]").attr("data-done", !0).prop("target", "_blank");
a('#fbTimelineHeadline ul[data-referrer="timeline_light_nav_top"] a[data-tab-key="photos"], #appsNav .sideNavItem a[href*="photos"]').attr("href", function(e, t) {
return t.replace(/\/photos\?/, "/photos_albums?");
}), "h_chr" == d.sk && a('#bluebarRoot h1[data-click="bluebar_logo"] a').attr("href", function(e, t) {
return t.replace(/&?sk=(h_chr|h_nor)/, "").trim("&").concat((-1 !== t.indexOf("?") ? "&" : "?") + "sk=" + d.sk);
}), e.exports.adblock(r);
});
a("body").on("click", 'a[href]:not([rel="ignore"] or [role] or [href="#"])', h).on("DOMNodeInserted", "#content ._5wci._5wch._2pjv, #content #appsNav", h).on("DOMAttrModified", "body", function(e) {
let t;
a(e.target).is("body") && "class" == e.originalEvent.attrName && h();
}), a(window).on("keydown.page", n(5).packEvent(function(e) {
if (!a(e.target).is(":input, .notranslate")) switch (e.which) {
case 33:
case 37:
var t;
if ((t = a("#photos_snowlift:visible .snowliftPager.prev")).length) return i(e), 
t[0].click(), !1;
break;

case 34:
case 39:
var t;
if ((t = a("#photos_snowlift:visible .snowliftPager.next")).length) return i(e), 
t[0].click(), !1;
break;
}
})).on("load", h).triggerHandler("load"), setTimeout(h, 1500);
},
adblock(e) {
let t;
return a().hide();
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e) {
return e.replace(/\/(thumb150|mw690|mw1024|orj360)\//, "/large/");
}
function i(e) {
if (!e.query) return !1;
if (0 == a("body").children().length && a("body").text().match(/Not found|error to origin/i)) return location.href = e.path, 
!0;
if ("" == a("body").text()) return location.href = e.path, !0;
if (window.top == window.self && !e.query.match(/uf404=true/) && (unsafeWindow.document.URL.match(/^about\:neterror/) || 1 == a("body.neterror").length && window.document.title.match(/頁面載入發生問題/))) {
let t = location.href.replace(`${e.scheme}://`, ("https" == e.scheme ? "http" : "https") + "://"), n = e.query;
return n && (n += "&"), t = t.replace(e.host + e.path + (e.query ? "?" + e.query : ""), e.host + e.path + "?" + n + "uf404=true"), 
location.href = t, !0;
}
}
e.exports = {
metadata: {
include: [ "http*://www.weibo.com/*", "http*://m.weibo.cn/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/weibo\.(com|cn)/),
main(e = t._url_obj) {
if (i(e)) return;
n(14);
const o = n(4), {debounce: s} = n(3), {throttle: u} = n(3), c = ".WB_feed_type, .weibo-member";
let l = a(c);
a(window).on("load.scroll", function(e) {
l = a(c), a(window).scrollTop(l.filter(":onScreen").offset().top - 70);
}).on("load.img", function(e) {
(l = a(c)).filter(":onScreen").find([ ".imgShow, .media_box img, .WB_expand_media_box img, .WB_media_wrap img, .WB_media_view img", ".weibo-media .m-img-box img, .weibo-media .single-img img" ].join()).not("[data-done]").attr("data-done", !0).attr("src", function(e, t) {
let n;
return a(this).data("src", t).width(function(e, t) {
return t;
}).height(function(e, t) {
return t;
}), r(t);
});
}).on("scroll.img", u(1e3, function(e) {
a(window).triggerHandler("load.img");
})).on("keydown.page", n(5).packEvent(function(e) {
switch (e.which) {
case 33:
case 37:
var t;
if ((t = a(".pswp:visible button.pswp__button--arrow--left")).length) return o(e), 
t[0].click(), !1;
break;

case 34:
case 39:
var t = a(".pswp:visible button.pswp__button--arrow--right");
if (console.log(t), t.length) return o(e), t[0].click(), !1;
break;
}
})), setTimeout(() => {
a(window).triggerHandler("load.scroll");
}, 100), setTimeout(() => {
a(window).triggerHandler("load"), l.on("DOMNodeInserted.img", function(e) {
a(window).triggerHandler("load.img");
}), l.on("mousedown.photoview", 'a[type="widget_photoview"], a.S_txt1', function(e) {
let t = a(this);
a("body").off("DOMNodeInserted.layer_multipic_preview").on("DOMNodeInserted.layer_multipic_preview", function(e) {
a(e.target).is(".layer_multipic_preview") && (a("body").off(`${e.type}.${e.handleObj.namespace}`), 
setTimeout(function() {
a(".layer_multipic_preview .pic_show_box img, .layer_multipic_preview .pic img").not("[data-done]").attr("data-done", !0).on("load", function(e) {
let t;
a(this).attr("src", function(e, t) {
let n;
return a(this).attr("lowsrc", t), r(t);
});
});
}, 1e3));
});
}), a(".WB_feed").on("DOMNodeInserted.feed", function(e) {
setTimeout(function() {
a(window).triggerHandler("load.img");
}, 1e3);
});
}, 1e3);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r() {
let e = t("#mini_jmd .jmd");
if (!e.length) return !1;
const a = n(162).zhRegExp;
let r = {
jmd: [],
kw: {
length: 0
},
kw_name: [],
kw_day: []
};
function i(e, t) {
let n = "(" + e.replace("/", "//").replace(/\+/gim, ").*(") + ")";
return new a(n, "i");
}
return e.find("tr").each(function(e) {
let n = t(this), a = n.find("> th").eq(0), o = a.text(), s = n.hasClass("today");
r.jmd[e] = {
index: e,
day: o,
today: s,
kw: {}
}, s && (r.today = r.jmd[e].index, n.attr("data-today", r.jmd[e].index)), n.attr("data-day", r.jmd[e].index), 
a.next("th, td").find("a").each(function() {
let n = t(this), a = n.text(), o, s = n.prop("href").replace(/.*\/topics\/list\?keyword=/g, "").replace(/%(?=%)/g, ""), u = decodeURIComponent(s);
u = i(u, a), n.attr("data-tag", r.kw.length), r.kw[r.kw.length] = r.jmd[e].kw[r.kw.length] = u, 
r.kw_name[r.kw.length] = a, r.kw_day[r.kw.length] = r.jmd[e].index, r.kw.length++;
});
}), Object.defineProperty(r.kw, "length", {
enumerable: !1
}), r;
}
function i(e) {
let n = t("#topic_list .title");
if (!n.length) return !1;
e.team_id = {}, e.kw_found = {}, n.each(function() {
let n = t(this), a = t(".tag", n), r = n.parents("tr").eq(0), i, o = t().add(r).add(n);
a.length && (i = t("a:first", a).attr("href").match(/team_id\/(\d+)(?:\b|$)/)) && (i = i[1], 
e.team_id[i] = a.text(), o.add(a).add(t("a:first", a)).attr("data-team-id", i));
let s = t("> a", n);
if (s.length) {
let n = s.text(), a = !1;
o = o.add(s), t.each(e.kw, function(t, r) {
if (r.test(n)) {
let i = n.replace(r, function(e) {
return `<span data-tag="${t}" >${e}</span>`;
});
return s.html(i), (o = o.add(s.find("span[data-tag]"))).attr("data-tag", t).attr("data-day", e.kw_day[t]), 
e.kw_found[t] = e.kw_found[t] || 0, e.kw_found[t]++, a = !0, !1;
}
}), a || o.attr("data-tag", "null");
}
});
}
function o(e) {
let n = t('select[name="team_id"], #AdvSearchTeam');
return !!(e && n.length && e.team_id) && (n.find("option").attr("data-team-id", function(e, n) {
return t(this).val();
}), !0);
}
function s(e) {
const a = n(233);
n(234).makeJQueryPlugin(t, window);
let r = "", i = u(e.team_id, a.tag);
if (r += Object.keys(i).reduce((e, n) => {
let a = t.Color(n), r = a.contrastColor(), o = a.lightness(function(e) {
return .6 * e;
}), s = i[n];
return e.push(`.tag[data-team-id="${s}"], table#topic_list tr td span.tag[data-team-id="${s}"] { color: ${r}; background: ${a}; border-color: ${o}; opacity: 0.65; }`), 
e.push(`.tag[data-team-id="${s}"] a, table#topic_list tr td span.tag[data-team-id="${s}"] a { color: ${r}; }`), 
e.push(`#AdvSearchTeam option[value="${s}"] { color: ${r}; background: ${a.alpha(.9)}; }`), 
e;
}, []).join(""), [ 2, 31 ].includes(parseInt(t("#AdvSearchSort :selected").val()))) {
let n = u(e.kw_found, a.tag);
r += Object.keys(n).reduce((e, a) => {
let r = t.Color(a), i = r.contrastColor(), o = r.lightness(function(e) {
return .6 * e;
}), s = n[a];
return e.push(`.jmd a[data-tag="${s}"] { color: ${i}; background: ${r}; border-color: ${o}; opacity: 0.65; }`), 
e.push(`#topic_list tr span[data-tag="${s}"] { color: ${i}; background: ${r}; border-color: ${o}; opacity: 0.65; }`), 
e;
}, [ '#topic_list tr[data-day="0"] .title > a, #topic_list tr[data-day="3"] .title > a { opacity: 0.5; }', '#topic_list .title > a[data-tag="null"] { color: rgba(40, 42, 191, 0.67); }', '#topic_list tr:hover .title > a[data-tag="null"] { color: rgba(40, 42, 191, 1); }' ]).join("");
}
return r;
}
function u(e, n) {
let a = {};
return Object.defineProperty(a, "length", {
enumerable: !1,
get() {
return Object.keys(this).length;
}
}), Object.keys(e).reduce((e, r) => {
let i = a.length % n.length, o = t.Color(n[i]).rand();
for (;o in a; ) o = t.Color(n[i]).rand();
a[o] = r;
}, []), a;
}
e.exports = {
metadata: {
match: [ "*://share.dmhy.org/*" ],
exclude: []
},
test: e => !!e.host.match(/share\.dmhy\.org/),
async main() {
const a = n(9), u = n(4);
let c;
n(131)(t);
const l = n(25);
await l.delay(100);
const d = n(2);
d(".weekly_list_part a").prop("target", "_blank").off("click.open").on("click.open", function(e) {
u(e), window.open(this.href, "_blank");
}), t(".weekly_list_b").attr("onclick", function(e, t) {
let n;
return `window.open('${t.replace(/location\.href=\'|\';?/g, "")}', '_blank');`;
}), t(".topic-title .relative-goods").empty().removeClass("relative-goods").css({
padding: 10
}).append(t("#tabs-1 > p").clone()), t(window).scrollTo(t(".topic-main").push(".menu"));
{
const {debounce: e} = n(3), {throttle: u} = n(3);
let c = r();
if (c) {
let n = "", r = !1;
i(c);
let u = t("#AdvSearch");
u.on("DOMNodeInserted", e(200, function() {
if (!r && o(c)) {
r = !0, n = "\n.jmd a[data-tag] { opacity: 0.4; padding: 1px 3px 0px; white-space: nowrap; word-break: keep-all; display: inline-block; }\n.title span[data-tag] { background-color: rgb(255, 255, 102); }\n";
{
let e = [], t = Object.keys(c.kw_found).reduce(function(t, n) {
return t.push(`.jmd a[data-tag="${n}"]`), e.push(`.jmd a[data-tag="${n}"]:hover`), 
t;
}, []).join();
n += `${t} { opacity: 0.85; } ${e.join()} { opacity: 1; }`;
}
a.GM_addStyle([ ".bg { min-width: auto; }", "#topic_list .title > a:visited { color: rgb(111, 111, 111); opacity: 0.5; }", n, "#topic_list tr:hover span[data-tag], #topic_list tr:hover .tag[data-team-id], #topic_list tr:hover .title > a, #topic_list tr:hover .title > a:visited { opacity: 1 !important; }", s(c) ].join(""));
}
})), !u.children().length && t("#keyword").val() && unsafeWindow.showHideAdvSearch(), 
setTimeout(function() {
u.triggerHandler("DOMNodeInserted");
}, 500), t(window).on("load", function() {
u.triggerHandler("DOMNodeInserted");
});
}
console.log(c);
}
e.exports.adblock();
},
adblock(e = a._url_obj) {
t(".relative-goods").remove();
},
clearly(e = a._url_obj, n = null) {
let r = t(n);
return r = r.add(t(".topic-main, .topics_bk, .main").siblings()).add([ "#comment_add, .share, .relative-goods, #recent-commnet img" ].join()), 
t(".topic-main").css({
float: "initial"
}), r;
}
};
}).call(this, n(0).default, n(1));
}, function(e, t, n) {
"use strict";
(function(t) {
e.exports = {
metadata: {
include: [ "http*://www.jandown.com/*" ],
exclude: []
},
test: e => !!e.host.match(/jandown\.com/),
main() {
const n = e.exports.test(_url_obj);
if (n) return t("form :submit").after('<font color="red" style="margin: auto 10px;display: inline-block;">Clicked!</font>')[0].click(), 
n;
},
adblock() {}
};
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
e.exports = {
metadata: {
include: [ "http*://sukebei.nyaa.si/*" ],
exclude: []
},
test: e => !!e.host.match(/sukebei\.nyaa\.si/),
main() {
const t = e.exports.test(_url_obj);
if (t) {
const e = n(2);
return e('.torrent-list tr > td[colspan="2"] a, #torrent-description a').attr("target", "_blank"), 
t;
}
},
adblock() {}
};
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
metadata: {
include: [],
match: [ "*://*.moegirl.org/*" ],
nomatch: [],
exclude: [],
grant: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
const a = n(2);
a([ "#topicpath a[href*=Category]", ".mw-category-generated a, .mw-category-generated a", "#catlinks a[href*=Category]" ].join(",")).prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://*.wikipedia.org/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/wikipedia\.org/),
main(e = t._url_obj) {
const a = n(2);
a("a.external").prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([ ".uls-settings-trigger, .wbc-editpage, .wb-langlinks-edit, .mw-editsection, #p-personal, #p-search", "#footer-icons, #footer-places, .mbox-image .image, #siteNotice" ].join()), 
a(".collapseButton").parents("tr").siblings().find(":hidden").addBack().show(), 
r;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {};
e.exports = {
priority: 200,
metadata: {
include: [ "http*://encrypted.google.com/*", "http*://www.google.co.jp/*", "http*://*.google.*/blank.html", "http*://*.google.*/search*", "http*://*.google.*/imgres*" ],
exclude: [ "http*://notifications.google.com/*" ]
},
test(e) {
if (e.host.match(/\.google\./)) {
if (e.path.match(/\/blank\.html/)) return !0;
if (e.path.match(/\/(search|imgres)/)) return !0;
}
return !1;
},
main(e) {
if (!t("body#gsr").length) return !1;
r = new googleData(e);
const a = n(2);
a("#ires .g h3 a, #ires .g .s .th a, ._qgd a, #topstuff .gl a, #imagebox_bigimages .bicc a").prop("target", "_blank");
let o = t("#topstuff .std.card-section").push("#taw > div:eq(0)").push("#ucs").eq(0);
if (o.length) {
let n = t("<div/>");
n.appendTo(o).css({
"margin-top": "0.5em"
}).append(function() {
var n = t("<a/>");
return n.attr({
href: e.path + "?" + e.query.replace(/\&(?:tbs|lr)=[^&]*($|\&|\#)/gi, "$1") + "&tbs=lr:lang_1zh-CN%7Clang_1zh-TW&lr=lang_zh-CN%7Clang_zh-TW"
}).html("只顯示<em>中文</em>搜尋結果。"), n;
}), "www.google.co.jp" != e.host && n.append(function() {
let n = t("<a/>");
return n.attr({
href: "https://www.google.co.jp" + e.path + "?" + e.query.replace(/\&(?:tbs|lr|hl)=[^&]*($|\&|\#)/gi, "$1") + "&hl=ja"
}).html("以<em>日本</em>作為搜尋。"), n;
}), i(e);
}
},
adblock(e) {}
};
class googleData {
constructor(e = a._url_obj) {
const r = n(235);
this._data = {}, this._data.catalogs = {
ja: {
"plural-forms": "nplurals=2; plural=(n > 1);",
messages: {
translate: [ "翻訳" ]
}
},
"zh-TW": {
"plural-forms": "nplurals=2; plural=(n != 1);",
messages: {
translate: [ "翻譯" ]
}
}
}, this._data.Stone = n(243), this._data.Stone.addCatalogs({
ja: {
"plural-forms": "nplurals=2; plural=(n > 1);",
messages: {
translate: [ "翻訳" ]
}
},
"zh-TW": {
"plural-forms": "nplurals=2; plural=(n != 1);",
messages: {
translate: [ "翻譯" ]
}
}
}), this._url_obj = e, this._domain = r(this._url_obj.host), this.lang = t("html").attr("lang") || "zh-TW";
}
get lang() {
return this._data.lang;
}
set lang(e) {
this._data.lang = e, Object.keys(this._data.catalogs).includes(e) || (e = "zh-TW"), 
this._data._lang = e, this._data.Stone.setLocale(e);
}
get domain() {
return this._domain.domain + "." + this._domain.tld;
}
translate_link(e, t = this.lang) {
return `https://translate.${this.domain}/#auto/${t}/${e}`;
}
gettext(...e) {
return this._data.Stone.gettext(...e);
let t = this._data.catalogs[this.lang].messages[e[0]];
return void 0 === t ? `!${e[0]}` : t;
}
}
function i(e) {
let n = t("#hdtb-msb-vis");
if (n.length) {
let e = t("#lst-ib").eq(0).val(), a;
t("> .hdtb-mitem.hdtb-imb", n).eq(-1).clone().clone().appendTo(n).find("a.q").prop("href", r.translate_link(e)).text(r.gettext("translate"));
}
}
function o() {
return {
ja: {
"plural-forms": "nplurals=2; plural=(n > 1);",
messages: {
translate: [ "翻訳" ]
}
},
"zh-TW": {
"plural-forms": "nplurals=2; plural=(n != 1);",
messages: {
translate: [ "翻譯" ]
}
}
};
}
}).call(this, n(0).default, n(1));
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e) {
a("#mw-content-text img").attr("src", function(e, t) {
return t.replace(/(\/images)\/thumb\/([^\/]+\/[^\/]+)\/([^\/]+)\/.+$/, "$1/$2/$3");
});
}
e.exports = {
priority: 100,
script: !0,
metadata: {
include: [],
exclude: []
},
test: (e = t._url_obj) => !!a("body.mediawiki").length && 2,
main(e = t._url_obj) {
const a = n(2);
a("a.external").prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, i = null) {
const o = n(9);
let s = a(i);
return s = s.add([ ".uls-settings-trigger, .wbc-editpage, .wb-langlinks-edit, .mw-editsection, #p-personal, #p-search", "#footer-icons, #footer-places, .mbox-image .image, #siteNotice", "#footer, #p-logo" ].join()), 
a(".collapseButton").parents("tr").siblings().find(":hidden").addBack().show(), 
o.GM_addStyle([ "div#column-content { background-image: none; }" ].join("")), r(e), 
s;
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e = t._url_obj, r) {
const i = n(10);
let o = a("<div/>");
const s = e.scheme || "http";
return a('embed[type="application/x-shockwave-flash"], iframe[src*="youtube"], iframe[data-src*="youtube"], article a[name="attachMovieName"][href*="youtube"]').each(function() {
let e = a(this), t = e.attr("src") || e.attr("data-src") || e.attr("href"), n = t.match("^(?:https?:)?//(?:www.)?youtube.(?:googleapis.)?com/(?:v|embed)/([A-Za-z0-9_-]{11})"), r;
if (n && (r = {
type: "youtube",
src: t,
width: e.width(),
height: e.height(),
videoid: n[1],
matches: n,
thumb: [ `${s}://img.youtube.com/vi/${n[1]}/0.jpg`, `${s}://img.youtube.com/vi/${n[1]}/2.jpg` ]
}), r) {
let t, n = e.parents('a[name="attachMovieName"], .videoWrapper, .richcontent');
t = n.length ? n.eq(0) : e.parent().is("object") ? e.parent() : e;
let i = a("<a/>").attr({
href: r.src,
target: "_blank",
title: "Youtube: " + r.videoid
}).css({
display: "inline-block",
color: "#FFF",
"text-decoration": "none"
}).append(a("<img/>").attr({
src: r.thumb[1] || r.thumb[0],
alt: "Youtube: " + r.videoid
})).append(a("<div/>").text("Youtube: " + r.videoid).css("padding-top", "5px")).appendTo(a("<div/>").css({
display: "inline-block",
background: "#000",
color: "#FFF",
"text-decoration": "none",
"text-align": "center",
padding: "5px"
})).parent();
o = o.add(t), t.after(i);
}
}), a('embed[src*="hdslb.com"]').each(function() {
let e = a(this), t = e.attr("src"), n = e.attr("flashvars");
n && (t += "?" + n), a("<div/>").css(i.video_thumb).append(function() {
let e;
return a("<a/>").attr("href", t).attr("target", "_blank").text(n);
}).insertAfter(e), o = o.add(e);
}), o;
}
e.exports = {
priority: 100,
script: !0,
script_method: {
clearly: !0
},
metadata: {
include: [],
exclude: []
},
test: (e = t._url_obj) => !0,
main(e = t._url_obj) {},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let i = a(n);
return i = i.add([ "" ].join()).add(r(e));
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
priority: 0,
script: !0,
metadata: {
include: [],
exclude: []
},
test: (e = t._url_obj) => !!a('.pagination a[rel*="prev"], .pagination a[rel*="next"]').length && 2,
main(e = t._url_obj) {
n(18).makeJQueryPlugin(a, window);
let r = a(window);
if (r.eventExists("keydown")) return console.log(r.events()), !1;
r.on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
var i;
(i = a('.pagination a[rel*="prev"]')).length ? (r(e), i[0].click()) : console.log(e, i);
break;

case t("pagedown"):
case t("right"):
var i;
(i = a('.pagination a[rel*="next"]')).length ? (r(e), i[0].click()) : console.log(e, i);
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
priority: 0,
script: !0,
metadata: {
include: [],
exclude: []
},
test: (e = t._url_obj) => !!a(".pagination > .page-prev, .pagination > .page-next").length && 2,
main(e = t._url_obj) {
n(18).makeJQueryPlugin(a, window);
let r = a(window);
if (r.eventExists("keydown")) return console.log(r.events()), !1;
r.on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
var i;
(i = a(".pagination > .page-prev")).length ? (r(e), i[0].click()) : console.log(e, i);
break;

case t("pagedown"):
case t("right"):
var i;
(i = a(".pagination > .page-next")).length ? (r(e), i[0].click()) : console.log(e, i);
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
priority: 0,
script: !0,
metadata: {
include: [],
exclude: []
},
test: (e = t._url_obj) => !!a("ul.pagination > .active").length && 2,
main(e = t._url_obj) {
n(18).makeJQueryPlugin(a, window);
let r = a(window);
if (r.eventExists("keydown")) return console.log(r.events()), !1;
r.on("keydown.page", n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
case t("left"):
var i;
(i = a("ul.pagination > .active").prev("li").find("a")).length ? (r(e), i[0].click()) : console.log(e, i);
break;

case t("pagedown"):
case t("right"):
var i;
(i = a("ul.pagination > .active").next("li").find("a")).length ? (r(e), i[0].click()) : console.log(e, i);
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
priority: 0,
script: !0,
metadata: {
include: [],
exclude: []
},
test: (e = t._url_obj) => !!a("#srp_pagination").length && 2,
main(e = t._url_obj) {
n(18).makeJQueryPlugin(a, window);
let r = a(window);
if (r.eventExists("keydown")) return console.log(r.events()), !1;
r.on("keydown.page", n(5).packEvent(function(e) {
const t = n(4), r = n(7);
switch (e.which) {
case r("pageup"):
case r("left"):
var i;
(i = a("#srp_pagination .pre-page a")).length && (t(e), i[0].click());
break;

case r("pagedown"):
case r("right"):
var i;
(i = a("#srp_pagination .next-page a")).length && (t(e), i[0].click());
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, n) {
e.exports = {
priority: 0,
metadata: {
include: [],
exclude: []
},
test: (e = t._url_obj) => !0,
main(e = t._url_obj) {},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, a = null) {
let r = n(a);
return r = r.add([ "#facebook-like-bottom, #fb-root" ].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
e.exports = {
priority: -1,
metadata: {
include: [],
exclude: [ "http*://platform.twitter.com/widgets*", "http*://apis.google.com/*" ]
},
test: e => !1,
main(e) {},
adblock(e) {}
};
}, function(e, t, n) {
"use strict";
(function(e, a, r) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(127), o = n(8);
t.greasemonkey = o.default;
const s = n(148);
function u(t, n, r, i) {
let o = async () => {
try {
i ? await i(t, n, e, window, r, window.location.href) : await l(t, n, e, window, r, window.location.href);
const a = p(t, "index");
await f(t, a, a.list), console.info(t, "index.current", a.current);
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
a(() => {
o();
});
}
function c(t, n = e, a, r) {
if (r || !n._url || n._url != t) {
const e = n._url;
return n._url_old = e, n._url = t.toString(), n._url_obj = i.parse_url2(n._url), 
"function" == typeof a && a(n._url, n, e), n;
}
}
function l(e, t, n, a, r, i) {
d(i = i || a.location.href, t), d(i, n), n.userScript = t;
}
function d(e, t) {
let n;
return c(e, t, function(e, t, n) {
t._url_obj.source = t._url_obj._source = e, t._url_obj_ = Object.assign({}, t._url_obj);
}, !0);
}
function p(e, t) {
return n(152)(`./${e}/${t}`);
}
function h(e, t, n) {
let a;
return t.list_script.reduce(function(t, a) {
let r = p(e, a), i = a;
return r.name && r.name != i && (i = `${r.name} - ${i}`), r.script_method && r.script_method.clearly && r.test(n) && t.push({
name: a,
name_id: i,
lib: r
}), t;
}, []).concat(t.current);
}
async function f(t, n, a, r = {}) {
let i;
console.time(n.name), console.group(n.name);
for (let r of a) {
const a = p(t, r);
a.file = r;
let s = r;
if (a.name && a.name != s && (s = `${a.name} - ${s}`), s = `[${s}]`, a.name = a.name || r, 
a.name_id = s || a.name_id || a.name, i && !a.script) continue;
if (a.disable && !0 !== a.disable) {
console.info(n.id, s, `disable = ${a.disable}, skip this`);
continue;
}
if (a.disable) {
console.warn(n.id, s, "disable, skip this");
continue;
}
let u = !0, c, l;
console.time(r), console.group(r), c = await a.test(e._url_obj), o.default.info(n.id, s, "test", c), 
i && 2 !== c ? o.default.info(n.id, s, "break:test", c) : (c && (1 == (l = await a.main(e._url_obj)) || void 0 === l ? (l = !0, 
o.default.info(n.id, s, "matched", l, u)) : o.default.debug(n.id, s, "main", l), 
l && (u = !1, c && !0 !== c && (u = !0), o.default.debug(n.id, s, "chk", l, u, c))), 
u && !c || (o.default.debug(n.id, s, "current:push", l, u, c), n.current.push({
name: r,
name_id: s,
lib: a
}))), console.groupEnd(r), console.timeEnd(r), i || u || (o.default.debug(n.id, s, "break", l, u, c), 
i = !0);
}
console.groupEnd(n.name), console.timeEnd(n.name);
}
async function g(t, n, a = {}) {
const r = t.id;
let i;
for (let a of n) {
const n = p(r, a);
n.file = a;
let i = a;
n.name && n.name != i && (i = `${n.name} - ${i}`), i = `[${i}]`, n.name = n.name || a, 
n.name_id = i || n.name_id || n.name;
let s = !0, u, c;
if (u = await n.test(e._url_obj), o.default.info(t.id, i, "test", u), u) return c = await n.main(e._url_obj), 
o.default.debug(t.id, i, "main", c), n;
}
}
function m(e, t) {
console["groupCollapsed" in console ? "groupCollapsed" : "group"](e);
try {
console.info(e, t), null === t ? (console.info("$", a, a && a.fn && a.fn.jquery), 
console.info("jQuery", r, r && r.fn && r.fn.jquery)) : (console.info(`${e}.$`, t.$, t.$ && t.$.fn && t.$.fn.jquery), 
console.info(`${e}.jQuery`, t.jQuery, t.jQuery && t.jQuery.fn && t.jQuery.fn.jquery));
} catch (t) {
console.error(`${e}`, t.toString());
}
console.groupEnd(e);
}
t.run = u, t.url = c, t.init = l, t.requireScript = p, t.get_list_script = h, t.main = f, 
t.main_list = g;
}).call(this, n(1), n(0).default, n(0).default);
}, function(e, t) {
var n = e.exports = {}, a, r;
function i() {
throw new Error("setTimeout has not been defined");
}
function o() {
throw new Error("clearTimeout has not been defined");
}
function s(e) {
if (a === setTimeout) return setTimeout(e, 0);
if ((a === i || !a) && setTimeout) return a = setTimeout, setTimeout(e, 0);
try {
return a(e, 0);
} catch (t) {
try {
return a.call(null, e, 0);
} catch (t) {
return a.call(this, e, 0);
}
}
}
function u(e) {
if (r === clearTimeout) return clearTimeout(e);
if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
try {
return r(e);
} catch (t) {
try {
return r.call(null, e);
} catch (t) {
return r.call(this, e);
}
}
}
!function() {
try {
a = "function" == typeof setTimeout ? setTimeout : i;
} catch (e) {
a = i;
}
try {
r = "function" == typeof clearTimeout ? clearTimeout : o;
} catch (e) {
r = o;
}
}();
var c = [], l = !1, d, p = -1;
function h() {
l && d && (l = !1, d.length ? c = d.concat(c) : p = -1, c.length && f());
}
function f() {
if (!l) {
var e = s(h);
l = !0;
for (var t = c.length; t; ) {
for (d = c, c = []; ++p < t; ) d && d[p].run();
p = -1, t = c.length;
}
d = null, l = !1, u(e);
}
}
function g(e, t) {
this.fun = e, this.array = t;
}
function m() {}
n.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
c.push(new g(e, t)), 1 !== c.length || l || s(f);
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
"use strict";
(function(e) {
function a(t) {
let n = e(t);
if (!n.length) return;
if (n.data("fullsrc")) return n;
let a = n.attr("data-original") || n.prop("src"), r, i = n.attr("lowsrc"), o, s;
if (a.match(/(([^\/]+)\.(jpe?g|gif|png))$/) && (o = RegExp.$1, s = RegExp.$2), o) return i ? r = a : (n.attr("lowsrc", a), 
r = `http://imgsrc.baidu.com/forum/pic/item/${o}`, n.attr("src", r)), n.attr("data-id", s), 
n.data("fullsrc", r), n.attr("bpic", r), n;
console.error(n, o);
}
function r(t, ...n) {
const a = function a() {
return e(t).scrollTo(...n);
};
return setTimeout(a, 500), a();
}
function i(t, n = 70) {
return "number" != typeof t && (t = e(t).outerHeight() || 0), Math.max(t, n);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.bde_image = a, t.scrollToTieba = r, t.scrollTopPadding = i;
const o = n(111);
t.libSiteBaiduTieba = o, t.default = o;
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
function a(e) {
return [ "event.preventDefault()", `var copyArea = document.getElementById('${e}')`, "try{copyArea.select();}catch(e){console.error(e)}", "try{window.getSelection().removeAllRanges();}catch(e){}", "try{var range = document.createRange();range.selectNode(copyArea);window.getSelection().addRange(range)}catch(e){console.error(e)}", "try{document.execCommand('Copy')}catch(e){console.error(e)}", "return false" ].join(";");
}
function r(e) {
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
}), t.copyonclick = a, t.copyElem = r, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(114);
var r = n(19);
function i(e) {
return a.default.split(e, "");
}
function o(e, t) {
let n = [];
"function" != typeof t && (t = void 0);
let a = Array.isArray(e) ? e : e.toString();
for (let r of a) {
let a = r.charCodeAt(), i;
if (t && void 0 !== (i = t(r, a, e))) {
if (!i) continue;
if (Array.isArray(i)) {
n = n.concat(i);
continue;
}
}
n.push(a);
}
return n;
}
t.array_unique = r.array_unique, t.lazy_unique = r.lazy_unique, t.split = i, t.charCodeAt = o, 
t.default = t;
}, function(e, t, n) {
"use strict";
const a = n(166);
t.default = a.UString, a.UString.default = a.UString.UString = a.UString, e.exports = a.UString;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(15);
t.hasSupportFlag = a.hasSupportFlag, t.testFlag = a.testFlag;
const r = n(138);
t.FlagsName = r.FlagsName;
const i = n(15), o = n(139);
t.testPattern = o.testPattern;
const s = n(198), u = n(204), c = n(206), l = n(208), d = n(209), p = n(210), h = {
nativeFlags: "",
flags: Object.keys(r.FlagsName).reduce(function(e, t) {
let n = !1;
return n = t in e ? e[t] : r.FlagsName[t] in e ? e[r.FlagsName[t]] : a.hasSupportFlag(r.FlagsName[t]), 
e[t] = n, e;
}, {}),
flagsAll: i.testFlagsAll(RegExp, !0),
pattern: Object.keys(o.PatternSupport).reduce(function(e, t) {
return e[t] = o.testPattern(t), e;
}, {}),
prototype: l.testPrototype(),
static: d.testStatic(),
symbol: p.testSymbol(),
objectStringTag: Object.prototype.toString.call(/a/),
unicodeSet: (() => ({
unicode: !1,
script: !1,
blocks: !1,
unicodeTest: Object.entries(s.testUnicodeAll()).reduce(function(e, t) {
return null !== t[1] && (e[t[0]] = t[1]), e;
}, {}),
scriptTest: Object.entries(c.testUnicodeScriptAll()).reduce(function(e, t) {
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
(function(t, a) {
function r(e) {
return window.open(e, e, "menubar=0,toolbar=0,personalbar=0,status=1,resizable=1,scrollbars=1,titlebar=1");
}
e.exports = {
disable: !0,
metadata: {
include: [ "http*://www.dmm.co.jp/netgame/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/dmm\.co\.jp/),
main(e = t._url_obj) {
const i = n(4), o = n(2);
o('.d-sect .d-item a, a[href*="rcv.ixd.dmm.com"], a[href*="netgame_s"]').prop("target", "_blank").on("click", function(e) {
i(e), r(a(this).prop("href"));
});
const s = n(10), u = n(9);
u.GM_addStyle([ "html, body, #main-ntg, iframe, .dmm-ntgnavi { margin: auto; padding: 0; min-width: auto; min-height: auto; }" ].join(""));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
function r(e) {
a('a[href*="external?l="]', ".message-content").attr("href", function(e, t) {
let n = t.substr(t.indexOf("external?l=") + "external?l=".length);
return decodeURIComponent(n);
}).prop("target", "_blank");
}
e.exports = {
disable: !0,
metadata: {
include: [ "http*://forum-*.guildwars2.com/forum/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/forum\-.+\.guildwars2\.com/),
main(e = t._url_obj) {
const i = n(2);
i([ ".message-content a, .topiclist .topic .title a, a.topic", ".post-topic-header a", '.character .links a:not([rel="nofollow"]), .body.rules a' ].join()).prop("target", "_blank"), 
r(e);
let o = a(".realname").text().trim();
a(window).scrollTo("#header .bookcrumbs, #content");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
disable: !0,
metadata: {
include: [ "http*://drive.google.com/*" ],
exclude: []
},
test: (e = t._url_obj) => !!e.host.match(/drive\.google\.com/),
main(e = t._url_obj) {
const r = n(2);
let i;
r([].join()).prop("target", "_blank"), n(45).makeJQueryPlugin(a, window), a(window).on("keydown.page", '[role="dialog"], .a-b-lc.a-b-ta-lc, .a-b-ta-Ua', n(5).packEvent(function(e) {
const t = n(7), r = n(4);
switch (e.which) {
case t("pageup"):
var i;
(i = a(".a-b-Dd-d.a-b-d")).length ? a(this).triggerKey(t("left"), e.type) : console.log(e, i);
break;

case t("pagedown"):
var i;
(i = a(".a-b-Zc-d.a-b-d")).length ? a(this).triggerKey(t("right"), e.type) : console.log(e, i);
break;
}
}));
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, a) {
e.exports = {
metadata: {
include: [ "http*://www.3dmgame.com/*" ],
exclude: []
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
main(e = t._url_obj) {
const a = n(2);
a([].join()).prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
}).call(this, n(1), n(0).default);
}, function(e, t) {
e.exports.grant = [ "GM_registerMenuCommand", "GM_xmlhttpRequest", "unsafeWindow", "GM_deleteValue", "GM_getValue", "GM_listValues", "GM_setValue", "GM_openInTab" ], 
e.exports.metadata = "// ==UserScript==\n// @name\t\t<%= pkg.name %>\n// @namespace\tbluelovers\n//\n// @description\t各種網站 UX 優化 與 搭配某些插件/行為時的簡化動作 並且適合搭配 Scrapbook 擷取內容\n//\n// @version\t\t<%= pkg.version %>\n//\n// @grant\t\t<%= index.grant %>\n// g_r_a_n_t\t\tnone\n//\n// @icon\t\t<%= index.icon %>\n//\n// @noframes\n// @encoding\tutf-8\n//\n// @homepageURL\thttps://github.com/bluelovers/gm-user-scripts\n// @supportURL\thttps://github.com/bluelovers/gm-user-scripts/issues\n// @downloadURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/ux-tweak-sc.user.js\n// @updateURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/ux-tweak-sc.user.js\n//\n// @include\t\t<%= index.include %>\n//\n// @match\t\t<%= index.match %>\n//\n// @exclude\t\t<%= index.exclude %>\n//\n// ==/UserScript==\n";
}, function(e, t, n) {
"use strict";
(function(t, a) {
let r = {
disable: !0,
metadata: {
include: [],
match: [ "http*://*.iqing.com/*", "http*://*.iqing.in/*" ],
exclude: [],
grant: [ "GM_xmlhttpRequest", "GM_getValue", "GM_setValue" ]
},
test(a = t._url_obj) {
let r;
return !!(r = n(6).auto(a.source, e.exports));
},
async main(e = t._url_obj) {
await new Promise(function(e, t) {
setTimeout(function() {
e();
}, 1e3);
});
const a = n(17).GMApi, r = "iqing_timestamp";
let i, o = !1, s = a.getValue(r, 0), u = null;
if (Date.now() - s >= 6e5 ? u = !0 : (u = !1, console.info("[距離上次簽到]", (Date.now() - s) / 1e3)), 
u) {
const e = n(245).default;
await e().catch(e => {
console.error("[簽到錯誤]", e);
}).then(function(e) {
a.setValue(r, Date.now()), console.log(e);
});
}
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = a(n);
return r = r.add([].join());
}
};
e.exports = r;
}).call(this, n(1), n(0).default);
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
(function(t, n) {
e.exports.jquery = function e(a, r = 100) {
let i = new t.Deferred(), o = 0, s = function() {
let e = a(i, ++o);
i.isRejected() || i.isResolved() || (!1 === e ? i.reject([ e, o ]) : o <= 20 || !0 === e ? setTimeout(s, r) : i.rejectWith(e, [ e, o ]));
};
return n(s), i.promise();
};
}).call(this, n(0).default, n(129).setImmediate);
}, function(e, t, n) {
"use strict";
function a(e, t) {
return -1 === (e = e || "u").indexOf("u") && (e += "u"), new RegExp(`[\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3038-\\u303b\\u3400-\\u4db5\\u4E00-\\u9FFF\\u{20000}-\\u{2FA1F}${t || ""}]`, e);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t._re_cjk_conv = a, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(139), r = n(140);
function i(...e) {
e = e.reduce(function(e, t) {
let n = r.inspect(t, {
colors: !0
});
return e.push(n), e;
}, []), console.log(...e);
}
function o(e) {
let t = n(201)(e);
return t.__esModule && t.default || t;
}
function s(e) {
return (t, n = RegExp, r = e) => a.testPattern(t, n, r);
}
t.log_dir = i, t.require_default = o, t._createFnTestPattern = s, t.default = t;
}, function(e, t, n) {
"use strict";
function a(e, t, n) {
return t + e + n;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t._wrapToRegexName = a, t.default = t;
}, function(e, t, n) {
"use strict";
function a(e, t) {
let n = r(e, t);
return Object.assign({
source: e,
scheme: "",
host: "",
path: "",
query: "",
fragment: ""
}, n);
}
function r(e, t) {
for (var n, a = "php", r = [ "source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment" ], i, o = [ new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "()", "(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:([^:\\/?#]+):)?", "(?:\\/\\/((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?", "((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)" ].join("")), new RegExp([ "(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?", "(?:\\/\\/\\/?)?", "((?:(([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?)", "(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))", "(?:\\?([^#]*))?(?:#(.*))?)" ].join("")) ][0].exec(e), s = {}, u = 14; u--; ) o[u] && (s[r[u]] = o[u]);
if (t) return s[t.replace("PHP_URL_", "").toLowerCase()];
if (0) {
let e = "queryKey", t = /(?:^|&)([^&=]*)=?([^&]*)/g;
s[e] = {}, (n = s[r[12]] || "").replace(t, function(t, n, a) {
n && (s[e][n] = a);
});
}
return delete s.source, s;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.parse_url2 = a, t.parse_url = r, t.default = r;
}, function(e, t, n) {
"use strict";
const a = n(149);
e.exports = a;
}, function(e, t, n) {
(function(e) {
var a = void 0 !== e && e || "undefined" != typeof self && self || window, r = Function.prototype.apply;
function i(e, t) {
this._id = e, this._clearFn = t;
}
t.setTimeout = function() {
return new i(r.call(setTimeout, a, arguments), clearTimeout);
}, t.setInterval = function() {
return new i(r.call(setInterval, a, arguments), clearInterval);
}, t.clearTimeout = t.clearInterval = function(e) {
e && e.close();
}, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
this._clearFn.call(a, this._id);
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
}, n(158), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, 
t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(25);
function r(e, t = 100) {
const n = a.defer();
return n.interval = t, n.stop = !1, n.timer = null, n.count = 0, n.fn = function(t) {
if (clearTimeout(n.timer), !n.promise.isPending()) return;
n.count++, t = t || n.stop;
let a = e(n);
void 0 !== a && !1 !== a ? n.resolve(a) : !1 === a ? n.resolve(a) : t ? n.resolve(!1) : t || (n.timer = setTimeout(function() {
n.fn();
}, n.interval));
}, n.promise.tap(function() {
clearTimeout(n.timer);
}).tapCatch(function(e) {
clearTimeout(n.timer);
}), n.fn(), n;
}
t.Promise = a, t.PromiseInterval = r, t.default = a;
}, function(e, t, n) {
(function(t) {
var n;
n = function(e) {
var t = e(document.createElement("a")), n = t.prop("style"), a = (o = e('<style type="text/css">*{}</style>').appendTo("head")[0]).sheet || o.styleSheet, r = "cssRules" in a ? "cssRules" : "rules", i = [ "Webkit", "O", "Moz", "ms" ], o;
function s(n, a) {
try {
if (a[r]) {
n = n || "";
var i = e(a.ownerNode || a.owningElement);
return "" === n || "*" === n || "#" + (i.prop("id") || "") == n || (i.prop("href") || "") == t.prop("href", n).prop("href");
}
return !1;
} catch (e) {
return !1;
}
}
function u(t) {
var n = (/.*?{/.exec(t) || [ "{" ])[0], a = /{.*}/g.exec(t);
if (null === a) {
var r = t.split("{");
a = "{" + r[1 == r.length ? 0 : 1].split("}")[0] + "}";
} else a = a[0];
return {
styleSheet: e.trim(n.substr(0, n.length - 1)),
selectorText: c(a.substr(1, a.length - 2))
};
}
function c(e) {
var t = [], n, i;
n = a[r].length, h.call(a, e, ";");
for (var o = (i = a[r].length) - 1; o >= n; o--) t.push(a[r][o].selectorText), f.call(a, o);
return t.reverse().join(", ");
}
function l(t, n, a) {
return "string" === e.type(t.selectorText) && (t.selectorText === n || !0 === a && e(e.map(t.selectorText.split(","), e.trim)).filter(function(e) {
return this.toString() === n;
}).length > 0);
}
function d(e) {
for (var t = e[0].toUpperCase() + e.slice(1), a, r = i.length; --r; ) if ((a = i[r] + t) in n) return a;
return e;
}
function p(e, t) {
return e.ownerDocument = e.ownerDocument || document, e.nodeType = e.nodeType || 1, 
e.nodeName = e.nodeName || "DIV", e.parentNode = e.parentNode || t.ownerNode || t.owningElement, 
e.parentStyleSheet = e.parentStyleSheet || t, e;
}
try {
p(a[r][0], a), e.support.nativeCSSStyleRule = !0;
} catch (t) {
e.support.nativeCSSStyleRule = !1, CSSStyleRule = function(t) {
e.extend(this, t), this.rule = t, this.currentStyle = t.style;
};
}
function h(t, n, a) {
if (!t || !n) return -1;
var i = this, o = i.insertRule ? function(e, t, n) {
this.insertRule(e + "{" + t + "}", n);
} : i.addRule;
a = a || this[r].length;
try {
return o.call(i, t, n, a);
} catch (a) {
return e.each(t.split(","), function(t, a) {
o.call(i, e.trim(a), n);
}), -1;
}
}
function f(t) {
if (t = t && t.rule ? t.rule : t) {
var n = this, a = n.deleteRule || n.removeRule;
a || e(document.styleSheets).each(function(i, o) {
if (1 == e(o[r]).filter(function() {
return this === t;
}).length) return a = (n = o).deleteRule || n.removeRule, !1;
}), "number" == e.type(t) ? a.call(n, t) : e.each(n[r], function(e, r) {
if (t === r) return a.call(n, e), !1;
});
}
}
e.stylesheet = function(t, n, a) {
return this instanceof e.stylesheet ? (this.init(t), this.css(n, a)) : new e.stylesheet(t, n, a);
}, e.extend(e.stylesheet, {
cssRules: function(t) {
var n = [], a = u(t);
return e(document.styleSheets).each(function(t, i) {
s(a.styleSheet, i) && e.merge(n, e(i[r]).filter(function() {
return l(this, a.selectorText, "*" === a.styleSheet);
}).map(function() {
return p(e.support.nativeCSSStyleRule ? this : new CSSStyleRule(this), i);
}));
}), n.reverse();
},
camelCase: e.camelCase || function(e) {
return e.replace(/-([\da-z])/g, function(e) {
return e.toUpperCase().replace("-", "");
});
},
cssProps: e.cssProps || {},
cssStyleName: function(t) {
if (t) {
var a = e.camelCase(t);
if (a in n) return a;
if ((e.cssProps[t] || (e.cssProps[t] = d(a))) in n) return e.cssProps[t];
}
}
}), e.stylesheet.fn = e.stylesheet.prototype = {
init: function(t) {
var n = [];
switch (e.type(t)) {
case "string":
n = e.stylesheet.cssRules(t);
break;

case "array":
e.each(t, function(t, a) {
"string" === e.type(a) ? e.merge(n, e.stylesheet.cssRules(a)) : a instanceof CSSStyleRule && n.push(a);
});
break;

case "object":
t instanceof CSSStyleRule && n.push(val);
break;
}
e.extend(this, {
rules: function() {
return n.slice();
},
css: function(r, i) {
var o = this, c = void 0;
switch (e.type(r)) {
case "null":
return e.each(n, function(e, t) {
f.call(t.parentStyleSheet, t);
}), n = e.stylesheet.cssRules(t), o;

case "string":
var l = e.stylesheet.cssStyleName(r);
if (l) if (0 === n.length && void 0 !== i) {
var d = u(t), p = e(document.styleSheets).filter(function() {
return s(d.styleSheet, this);
});
p = p && 1 == p.length ? p[0] : a, h.call(p, d.selectorText, r + ":" + i + ";"), 
n = e.stylesheet.cssRules(t), c = o;
} else e.each(n, function(e, t) {
if ("" !== t.style[l]) return void 0 !== i ? (t.style[l] = i, c = o) : c = t.style[l], 
!1;
}), void 0 === c && void 0 !== i && (n[0].style[l] = i, c = o);
break;

case "array":
c = {}, e.each(r, function(e, t) {
c[t] = o.css(t, i);
}), void 0 !== i && (c = o);
break;

case "object":
return e.each(r, function(e, t) {
o.css(e, t);
}), o;

default:
return o;
}
return c;
}
});
}
};
}, "object" == typeof e.exports ? e.exports = n : n(t);
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(164), r = n(173);
t.libTable = r.default;
const i = n(113), o = n(182);
function s(e, t, ...n) {
return e = r.default._get(e, t, ...n), (e = i.array_unique(e)).sort(), e;
}
function u(e) {
return function(t, n = {}) {
if (!t) return null;
if (n.skip && -1 != n.skip.indexOf(t)) return [ t ];
let a = r.default[e](t, n);
return (a = i.array_unique(a)).sort(), a;
};
}
function c(e, t = {}) {
if (!e) return null;
if (t.skip && -1 != t.skip.indexOf(e)) return [ e ];
let n = a.jp2zht(e), i = a.jp2zhs(e), u = 0 | t.greedyTable, c;
return s([], e, r.default.tw(e, t), r.default.cn(e, t), (!t.skip || -1 == t.skip.indexOf(n)) && r.default.cn(n, t), (!t.skip || -1 == t.skip.indexOf(i)) && r.default.tw(i, t), r.default.jp(e, t), u && a.cjk2jp(e), u && a.cjk2zhs(e), u && a.cjk2zht(e), u > 1 && o.greedyTableCharArray(e));
}
t._get = s, t.tw = u("tw"), t.cn = u("cn"), t.jp = u("jp"), t.auto = c, t.default = t;
}, function(e, t, n) {
"use strict";
var a = n(170);
function r() {
this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
r.prototype = {
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
var i = "function" == typeof WeakMap ? WeakMap : r;
function o(e, t, n) {
if (!n || k(e) || k(t)) return null;
var a = n.get(e);
if (a) {
var r = a.get(t);
if ("boolean" == typeof r) return r;
}
return null;
}
function s(e, t, n, a) {
if (n && !k(e) && !k(t)) {
var r = n.get(e);
r ? r.set(t, a) : ((r = new i()).set(t, a), n.set(e, r));
}
}
function u(e, t, n) {
if (n && n.comparator) return l(e, t, n);
var a = c(e, t);
return null !== a ? a : l(e, t, n);
}
function c(e, t) {
return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t || !k(e) && !k(t) && null;
}
function l(e, t, n) {
(n = n || {}).memoize = !1 !== n.memoize && (n.memoize || new i());
var r = n && n.comparator, u = o(e, t, n.memoize);
if (null !== u) return u;
var l = o(t, e, n.memoize);
if (null !== l) return l;
if (r) {
var p = r(e, t);
if (!1 === p || !0 === p) return s(e, t, n.memoize, p), p;
var h = c(e, t);
if (null !== h) return h;
}
var f = a(e);
if (f !== a(t)) return s(e, t, n.memoize, !1), !1;
s(e, t, n.memoize, !0);
var g = d(e, t, f, n);
return s(e, t, n.memoize, g), g;
}
function d(e, t, n, a) {
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
return f(e, t, a);

case "RegExp":
return p(e, t);

case "Generator":
return g(e, t, a);

case "DataView":
return f(new Uint8Array(e.buffer), new Uint8Array(t.buffer), a);

case "ArrayBuffer":
return f(new Uint8Array(e), new Uint8Array(t), a);

case "Set":
return h(e, t, a);

case "Map":
return h(e, t, a);

default:
return w(e, t, a);
}
}
function p(e, t) {
return e.toString() === t.toString();
}
function h(e, t, n) {
if (e.size !== t.size) return !1;
if (0 === e.size) return !0;
var a = [], r = [];
return e.forEach(function e(t, n) {
a.push([ t, n ]);
}), t.forEach(function e(t, n) {
r.push([ t, n ]);
}), f(a.sort(), r.sort(), n);
}
function f(e, t, n) {
var a = e.length;
if (a !== t.length) return !1;
if (0 === a) return !0;
for (var r = -1; ++r < a; ) if (!1 === u(e[r], t[r], n)) return !1;
return !0;
}
function g(e, t, n) {
return f(b(e), b(t), n);
}
function m(e) {
return "undefined" != typeof Symbol && "object" == typeof e && void 0 !== Symbol.iterator && "function" == typeof e[Symbol.iterator];
}
function _(e) {
if (m(e)) try {
return b(e[Symbol.iterator]());
} catch (e) {
return [];
}
return [];
}
function b(e) {
for (var t = e.next(), n = [ t.value ]; !1 === t.done; ) t = e.next(), n.push(t.value);
return n;
}
function y(e) {
var t = [];
for (var n in e) t.push(n);
return t;
}
function v(e, t, n, a) {
var r = n.length;
if (0 === r) return !0;
for (var i = 0; i < r; i += 1) if (!1 === u(e[n[i]], t[n[i]], a)) return !1;
return !0;
}
function w(e, t, n) {
var a = y(e), r = y(t);
if (a.length && a.length === r.length) return a.sort(), r.sort(), !1 !== f(a, r) && v(e, t, a, n);
var i = _(e), o = _(t);
return i.length && i.length === o.length ? (i.sort(), o.sort(), f(i, o, n)) : 0 === a.length && 0 === i.length && 0 === r.length && 0 === o.length;
}
function k(e) {
return null === e || "object" != typeof e;
}
e.exports = u, e.exports.MemoizeMap = i;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(174), r = n(135);
t._call = r._call, t.defaultOptions = r.defaultOptions, t.getOptions = r.getOptions, 
t.getOptionsSkip = r.getOptionsSkip, t.REGEXP_TEST = r.REGEXP_TEST, t.SAFE_MODE_CHAR = r.SAFE_MODE_CHAR;
const i = n(134), o = n(178);
function s(e, t = {}, ...n) {
return r._call(c, e, t, ...n);
}
function u(e, t = {}, ...n) {
return r._call(l, e, t, ...n);
}
function c(e) {
return r.textMap(e, t.table_cn2tw);
}
function l(e) {
return r.textMap(e, t.table_tw2cn);
}
t.cn2tw = s, t.tw2cn = u, t.table_cn2tw = Object.assign({}, a.table_cn2tw, o.table_cn2tw_plus), 
t.table_tw2cn = Object.assign({}, a.table_tw2cn, o.table_tw2cn_plus), t._cn2tw = c, 
t._tw2cn = l, t.default = i;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(19), r = n(114), i = n(124);
function o(e, t) {
let n = t[e];
return "string" == typeof n ? n : e;
}
function s(e, t) {
let n = [], a = e.length;
for (let r = 0; r < a; r++) n[r] = o(e[r], t);
return n.join("");
}
function u(e, t) {
let n = r.split(e, ""), a = n.length;
for (let e = 0; e < a; e++) n[e] = o(n[e], t);
return n.join("");
}
function c(e, t) {
let n = e.split(/(?:)/u), a = n.length;
for (let e = 0; e < a; e++) n[e] = o(n[e], t);
return n.join("");
}
function l(e, n) {
return e.replace(t.REGEXP_TEST, function(e) {
return o(e, n);
});
}
t.charMap = o, t.textMap1 = s, t.textMap2 = u, t.textMap3 = c, t.textMap4 = l, t.textMap = l;
const d = l;
function p(e) {
return Object.entries(e).reduce(function(e, t) {
let [n, a] = t;
return n != a && (e[n] = a), e;
}, {});
}
function h(e, n = t.SAFE_MODE_CHAR) {
return e.skip ? "string" == typeof e.skip ? e.skip += n.join("") : Array.isArray(e.skip) ? e.skip = e.skip.slice().concat(n) : e.table = n.reduce(function(e, t) {
return e[t] = t, e;
}, Object.assign({}, e.table || {})) : e.skip = n.slice(), e;
}
function f(e = {}, n = t.defaultOptions, a = t.SAFE_MODE_CHAR) {
return (e = Object.assign({}, n, e)).safe && (e = h(e, a)), e;
}
function g(e, n, a = {}, ...r) {
if ((a = f(a)).skip || a.table || a.tableOnly) {
let {skip: i, table: o, tableOnly: s} = a, u = !s;
if (s && !o) throw new Error(`table is ${o}`);
return n.replace(t.REGEXP_TEST, function(t) {
if (i && -1 !== i.indexOf(t)) return t;
if (o && "function" == typeof o) {
let n = o(e, t, a, ...r);
if (null != n) return n;
} else {
if (o && o[t]) return o[t];
if (u) return e(t);
}
return t;
});
}
return e(n, a, ...r);
}
t.default = t, t.removeSame = p, t.defaultOptions = Object.freeze({
safe: !0
}), t.REGEXP_TEST = i._re_cjk_conv("ug"), t.SAFE_MODE_CHAR = a.array_unique([ "后", "里", "餵", "志", "布", "佈", "系", "繫", "梁", "樑", "衝", "沖", "谷", "穀", "注" ]), 
t.getOptionsSkip = h, t.getOptions = f, t._call = g;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(19), r = n(186), i = n(197), o = n(114);
function s(e) {
return new r.RegExpParser(e);
}
function u(e, n = t.defaultRegExpParser) {
return e = e.replace(/\n/g, "\\n").replace(/\r/g, "\\r"), n.parseLiteral(e);
}
function c(e, n = t.defaultRegExpParser) {
return n.parseFlags(e);
}
function l(e, n = !1, a = t.defaultRegExpParser) {
return "string" == typeof n && (n = c(n).unicode), e = e.replace(/\n/g, "\\n").replace(/\r/g, "\\r"), 
a.parsePattern(e, 0, e.length, n);
}
function d(e, n = "", a = t.defaultRegExpParser) {
let r;
return n || (n = ""), "string" == typeof e ? r = u(`/${e}/${"string" == typeof n ? n : p(n)}`, a) : (n = "string" == typeof n ? c(n, a) : n, 
r = {
type: "RegExpLiteral",
parent: null,
start: 0,
end: (e = "string" == typeof e ? l(e, n.unicode, a) : e).end + n.end + 2,
raw: `/${e.raw}/${n.raw}`,
pattern: e,
flags: n
}, e.parent = r), r;
}
function p(e, n = {}) {
let r, i;
"number" == typeof n.debugChanged && n.debugChanged >= 99 && (e.changed = !0);
let s = n.debugChanged;
switch (e.type) {
case "RegExpLiteral":
(s || e.changed) && (r = `/${p(e.pattern, n)}/${p(e.flags, n)}`, i = !0);
break;

case "Pattern":
(s || e.changed) && (r = e.elements.reduce(function(e, t) {
return e.push(p(t, n)), e;
}, []).join(""), i = !0);
break;

case "Quantifier":
r = p(e.element, n), 0 !== e.raw.indexOf(r) && /^(?:\{[\d,]+\}|[*+?])$/.test(e.raw) ? r += e.raw : 1 == e.min && Infinity == e.max ? r += "+" : 0 == e.min && Infinity == e.max ? r += "*" : 0 == e.min && 1 == e.max ? r += "?" : r += `{${e.min},${e.max}}`, 
e.greedy || (r += "?"), i = !0;
break;

case "Assertion":
case "CapturingGroup":
case "Group":
case "CharacterClass":
if (e.changed && e.elements) {
let s = !n.noUniqueClass, u = e.elements.reduce(function(e, t) {
let a = p(t, n);
return s && "CharacterClassRange" == t.type && t.old_raw && /-/u.test(t.old_raw) && !/-/u.test(a) ? e = e.concat(o.default.split(a, "")) : e.push(a), 
e;
}, []);
if ("CharacterClass" == e.type && (s || n.sortClass)) {
if (s && t.EMOJI_REGEX.test(e.raw)) {
let e, a, r = new RegExp("(" + t.EMOJI_REGEX.source + ")", t.EMOJI_REGEX.flags);
u = u.reduce(function(i, o) {
let s = /\u200D/.test(o), u = t.EMOJI_REGEX.test(o);
if (e) {
let e = i.length - 1;
if (u) i[e] += o; else {
if (n.doUniqueClassEmoji) {
let e, t = i.pop().split(r);
i = i.concat(t);
}
i.push(o);
}
} else i.push(o);
return e = u, a = s, i;
}, []);
}
s && (u = a.array_unique(u)), n.sortClass && u.sort();
}
switch (r = u.join(""), e.type) {
case "CapturingGroup":
r = "(" + r + ")";
break;

case "Group":
r = "(?:" + r + ")";
break;

case "CharacterClass":
r = "[" + (e.negate ? "^" : "") + r + "]";
break;

case "Assertion":
let t = [];
"lookbehind" == e.kind && t.push("<"), t.push(e.negate ? "!" : "="), r = "(?" + t.join("") + r + ")";
break;
}
i = !0;
}
break;

case "Disjunction":
if (e.changed) {
let t = e.alternatives.reduce(function(e, t) {
let a = t.reduce(function(e, t) {
return e.push(p(t, n)), e;
}, []).join("");
return e.push(a), e;
}, []);
r = (t = a.array_unique(t)).join("|"), i = !0;
}
break;

default:
break;
}
return i || (r = e.raw), i && (e.old_raw = e.raw, e.raw = r, e.changed = !1), r;
}
t.EMOJI_REGEX = i(), t.defaultRegExpParser = s({
disableChkCharacterClassRange: !0
}), t.createRegExpParser = s, t.parseRegExp = u, t.parseFlags = c, t.parsePattern = l, 
t.fakePatternToRegExpLiteral = d, t.astToString = p, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(191), r = n(192), i = n(193);
function o(e) {
return e === i.CircumflexAccent || e === i.DollarSign || e === i.ReverseSolidus || e === i.FullStop || e === i.Asterisk || e === i.PlusSign || e === i.QuestionMark || e === i.LeftParenthesis || e === i.RightParenthesis || e === i.LeftSquareBracket || e === i.RightSquareBracket || e === i.LeftCurlyBracket || e === i.RightCurlyBracket || e === i.VerticalLine;
}
function s(e) {
return i.isIdStart(e) || e === i.DollarSign || e === i.LowLine;
}
function u(e) {
return i.isIdContinue(e) || e === i.DollarSign || e === i.LowLine || e === i.ZeroWidthNonJoiner || e === i.ZeroWidthJoiner;
}
function c(e) {
return i.isLatinLetter(e) || e === i.LowLine;
}
function l(e) {
return c(e) || i.isDecimalDigit(e);
}
function d(e, t) {
return i.PropertyData.hasOwnProperty(e) && i.PropertyData[e].has(t);
}
function p(e) {
return i.PropertyData.$LONE.has(e);
}
class RegExpValidator {
constructor(e) {
this._reader = new a.Reader(), this._uFlag = !1, this._nFlag = !1, this._lastIntValue = 0, 
this._lastMinValue = 0, this._lastMaxValue = 0, this._lastStrValue = "", this._lastKeyValue = "", 
this._lastValValue = "", this._lastAssertionIsQuantifiable = !1, this._numCapturingParens = 0, 
this._groupNames = new Set(), this._backreferenceNames = new Set(), this._options = e || {};
}
validateLiteral(e, t = 0, n = e.length) {
if (this._uFlag = this._nFlag = !1, this.reset(e, t, n), this.onLiteralEnter(t), 
this.eat(i.Solidus) && this.eatRegExpBody() && this.eat(i.Solidus)) {
const a = this.index, r = -1 !== e.indexOf("u", a);
this.validateFlags(e, a, n), this.validatePattern(e, t + 1, a - 1, r);
} else if (t >= n) this.raise("Empty"); else {
const e = String.fromCodePoint(this.currentCodePoint);
this.raise(`Unexpected character '${e}'`);
}
this.onLiteralLeave(t, n);
}
validateFlags(e, t = 0, n = e.length) {
const a = new Set();
let r = !1, o = !1, s = !1, u = !1, c = !1, l = !1;
for (let d = t; d < n; ++d) {
const t = e.charCodeAt(d);
a.has(t) && this.raise(`Duplicated flag '${e[d]}'`), a.add(t), t === i.LatinSmallLetterG ? r = !0 : t === i.LatinSmallLetterI ? o = !0 : t === i.LatinSmallLetterM ? s = !0 : t === i.LatinSmallLetterU && this.ecmaVersion >= 2015 ? c = !0 : t === i.LatinSmallLetterY && this.ecmaVersion >= 2015 ? u = !0 : t === i.LatinSmallLetterS && this.ecmaVersion >= 2018 ? l = !0 : this.raise(`Invalid flag '${e[d]}'`);
}
this.onFlags(t, n, r, o, s, c, u, l);
}
validatePattern(e, t = 0, n = e.length, a = !1) {
this._uFlag = a && this.ecmaVersion >= 2015, this._nFlag = a && this.ecmaVersion >= 2018, 
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
onFlags(e, t, n, a, r, i, o, s) {
this._options.onFlags && this._options.onFlags(e, t, n, a, r, i, o, s);
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
onQuantifier(e, t, n, a, r) {
this._options.onQuantifier && this._options.onQuantifier(e, t, n, a, r);
}
onLookaroundAssertionEnter(e, t, n) {
this._options.onLookaroundAssertionEnter && this._options.onLookaroundAssertionEnter(e, t, n);
}
onLookaroundAssertionLeave(e, t, n, a) {
this._options.onLookaroundAssertionLeave && this._options.onLookaroundAssertionLeave(e, t, n, a);
}
onEdgeAssertion(e, t, n) {
this._options.onEdgeAssertion && this._options.onEdgeAssertion(e, t, n);
}
onWordBoundaryAssertion(e, t, n, a) {
this._options.onWordBoundaryAssertion && this._options.onWordBoundaryAssertion(e, t, n, a);
}
onAnyCharacterSet(e, t, n) {
this._options.onAnyCharacterSet && this._options.onAnyCharacterSet(e, t, n);
}
onEscapeCharacterSet(e, t, n, a) {
this._options.onEscapeCharacterSet && this._options.onEscapeCharacterSet(e, t, n, a);
}
onUnicodePropertyCharacterSet(e, t, n, a, r, i) {
this._options.onUnicodePropertyCharacterSet && this._options.onUnicodePropertyCharacterSet(e, t, n, a, r, i);
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
onCharacterClassRange(e, t, n, a) {
this._options.onCharacterClassRange && this._options.onCharacterClassRange(e, t, n, a);
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
throw new r.RegExpSyntaxError(this.source, this._uFlag, this.index, e);
}
eatRegExpBody() {
const e = this.index;
let t = !1, n = !1;
for (;;) {
const a = this.currentCodePoint;
if (-1 === a || i.isLineTerminator(a)) {
const e = t ? "character class" : "regular expression";
this.raise(`Unterminated ${e}`);
}
if (n) n = !1; else if (a === i.ReverseSolidus) n = !0; else if (a === i.LeftSquareBracket) t = !0; else if (a === i.RightSquareBracket) t = !1; else if (a === i.Solidus && !t || a === i.Asterisk && this.index === e) break;
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
t === i.RightParenthesis && this.raise("Unmatched ')'"), t === i.ReverseSolidus && this.raise("\\ at end of pattern"), 
t !== i.RightSquareBracket && t !== i.RightCurlyBracket || this.raise("Lone quantifier brackets");
const e = String.fromCodePoint(t);
this.raise(`Unexpected character '${e}'`);
}
for (const e of this._backreferenceNames) this._groupNames.has(e) || this.raise("Invalid named capture referenced");
this.onPatternLeave(e, this.index);
}
countCapturingParens() {
const e = this.index;
let t = !1, n = !1, a = 0, r = 0;
for (;-1 !== (r = this.currentCodePoint); ) n ? n = !1 : r === i.ReverseSolidus ? n = !0 : r === i.LeftSquareBracket ? t = !0 : r === i.RightSquareBracket ? t = !1 : r !== i.LeftParenthesis || t || this.nextCodePoint === i.QuestionMark && (this.nextCodePoint2 !== i.LessThanSign || this.nextCodePoint3 === i.EqualsSign || this.nextCodePoint3 === i.ExclamationMark) || (a += 1), 
this.advance();
return this.rewind(e), a;
}
disjunction() {
const e = this.index;
let t = 0;
for (this.onDisjunctionEnter(e), this.alternative(t++); this.eat(i.VerticalLine); ) this.alternative(t++);
this.eatQuantifier(!0) && this.raise("Nothing to repeat"), this.eat(i.LeftCurlyBracket) && this.raise("Lone quantifier brackets"), 
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
if (this._lastAssertionIsQuantifiable = !1, this.eat(i.CircumflexAccent)) return this.onEdgeAssertion(e, this.index, "start"), 
!0;
if (this.eat(i.DollarSign)) return this.onEdgeAssertion(e, this.index, "end"), !0;
if (this.eat2(i.ReverseSolidus, i.LatinCapitalLetterB)) return this.onWordBoundaryAssertion(e, this.index, "word", !0), 
!0;
if (this.eat2(i.ReverseSolidus, i.LatinSmallLetterB)) return this.onWordBoundaryAssertion(e, this.index, "word", !1), 
!0;
if (this.eat2(i.LeftParenthesis, i.QuestionMark)) {
const t = this.ecmaVersion >= 2018 && this.eat(i.LessThanSign);
let n = !1;
if (this.eat(i.EqualsSign) || (n = this.eat(i.ExclamationMark))) {
const a = t ? "lookbehind" : "lookahead";
return this.onLookaroundAssertionEnter(e, a, n), this.disjunction(), this.eat(i.RightParenthesis) || this.raise("Unterminated group"), 
this._lastAssertionIsQuantifiable = !t && !this.strict, this.onLookaroundAssertionLeave(e, this.index, a, n), 
!0;
}
this.rewind(e);
}
return !1;
}
eatQuantifier(e = !1) {
const t = this.index;
let n = 0, a = 0, r = !1;
if (this.eat(i.Asterisk)) n = 0, a = Number.POSITIVE_INFINITY; else if (this.eat(i.PlusSign)) n = 1, 
a = Number.POSITIVE_INFINITY; else if (this.eat(i.QuestionMark)) n = 0, a = 1; else {
if (!this.eatBracedQuantifier(e)) return !1;
n = this._lastMinValue, a = this._lastMaxValue;
}
return r = !this.eat(i.QuestionMark), e || this.onQuantifier(t, this.index, n, a, r), 
!0;
}
eatBracedQuantifier(e) {
const t = this.index;
if (this.eat(i.LeftCurlyBracket)) {
if (this._lastMinValue = 0, this._lastMaxValue = Number.POSITIVE_INFINITY, this.eatDecimalDigits() && (this._lastMinValue = this._lastMaxValue = this._lastIntValue, 
this.eat(i.Comma) && (this._lastMaxValue = this.eatDecimalDigits() ? this._lastIntValue : Number.POSITIVE_INFINITY), 
this.eat(i.RightCurlyBracket))) return !e && this._lastMaxValue < this._lastMinValue && this.raise("numbers out of order in {} quantifier"), 
!0;
!e && this.strict && this.raise("Incomplete quantifier"), this.rewind(t);
}
return !1;
}
eatAtom() {
return this.eatPatternCharacter() || this.eatDot() || this.eatReverseSolidusAtomEscape() || this.eatCharacterClass() || this.eatUncapturingGroup() || this.eatCapturingGroup();
}
eatDot() {
return !!this.eat(i.FullStop) && (this.onAnyCharacterSet(this.index - 1, this.index, "any"), 
!0);
}
eatReverseSolidusAtomEscape() {
const e = this.index;
if (this.eat(i.ReverseSolidus)) {
if (this.eatAtomEscape()) return !0;
this.rewind(e);
}
return !1;
}
eatUncapturingGroup() {
const e = this.index;
return !!this.eat3(i.LeftParenthesis, i.QuestionMark, i.Colon) && (this.onGroupEnter(e), 
this.disjunction(), this.eat(i.RightParenthesis) || this.raise("Unterminated group"), 
this.onGroupLeave(e, this.index), !0);
}
eatCapturingGroup() {
const e = this.index;
if (this.eat(i.LeftParenthesis)) {
this._lastStrValue = "", this.ecmaVersion >= 2018 ? this.groupSpecifier() : this.currentCodePoint === i.QuestionMark && this.raise("Invalid group");
const t = this._lastStrValue || null;
return this.onCapturingGroupEnter(e, t), this.disjunction(), this.eat(i.RightParenthesis) || this.raise("Unterminated group"), 
this.onCapturingGroupLeave(e, this.index, t), !0;
}
return !1;
}
eatExtendedAtom() {
return this.eatDot() || this.eatReverseSolidusAtomEscape() || this.eatReverseSolidusFollowedByC() || this.eatCharacterClass() || this.eatUncapturingGroup() || this.eatCapturingGroup() || this.eatInvalidBracedQuantifier() || this.eatExtendedPatternCharacter();
}
eatReverseSolidusFollowedByC() {
return this.currentCodePoint === i.ReverseSolidus && this.nextCodePoint === i.LatinSmallLetterC && (this._lastIntValue = this.currentCodePoint, 
this.advance(), this.onCharacter(this.index - 1, this.index, i.ReverseSolidus), 
!0);
}
eatInvalidBracedQuantifier() {
return this.eatBracedQuantifier(!0) && this.raise("Nothing to repeat"), !1;
}
eatSyntaxCharacter() {
return !!o(this.currentCodePoint) && (this._lastIntValue = this.currentCodePoint, 
this.advance(), !0);
}
eatPatternCharacter() {
const e = this.index, t = this.currentCodePoint;
return -1 !== t && !o(t) && (this.advance(), this.onCharacter(e, this.index, t), 
!0);
}
eatExtendedPatternCharacter() {
const e = this.index, t = this.currentCodePoint;
return -1 !== t && t !== i.CircumflexAccent && t !== i.DollarSign && t !== i.ReverseSolidus && t !== i.FullStop && t !== i.Asterisk && t !== i.PlusSign && t !== i.QuestionMark && t !== i.LeftParenthesis && t !== i.RightParenthesis && t !== i.LeftSquareBracket && t !== i.VerticalLine && (this.advance(), 
this.onCharacter(e, this.index, t), !0);
}
groupSpecifier() {
if (this._lastStrValue = "", this.eat(i.QuestionMark)) {
if (this.eatGroupName()) {
if (!this._groupNames.has(this._lastStrValue)) return void this._groupNames.add(this._lastStrValue);
this.raise("Duplicate capture group name");
}
this.raise("Invalid group");
}
}
eatGroupName() {
if (this._lastStrValue = "", this.eat(i.LessThanSign)) {
if (this.eatRegExpIdentifierName() && this.eat(i.GreaterThanSign)) return !0;
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
return this.advance(), t === i.ReverseSolidus && this.eatRegExpUnicodeEscapeSequence() && (t = this._lastIntValue), 
s(t) ? (this._lastIntValue = t, !0) : (this.index !== e && this.rewind(e), !1);
}
eatRegExpIdentifierPart() {
const e = this.index;
let t = this.currentCodePoint;
return this.advance(), t === i.ReverseSolidus && this.eatRegExpUnicodeEscapeSequence() && (t = this._lastIntValue), 
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
if (this.eat(i.LatinSmallLetterK)) {
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
if (this.eat(i.LatinSmallLetterC)) {
if (this.eatControlLetter()) return !0;
this.rewind(e);
}
return !1;
}
eatZero() {
return this.currentCodePoint === i.DigitZero && !i.isDecimalDigit(this.nextCodePoint) && (this._lastIntValue = 0, 
this.advance(), !0);
}
eatControlEscape() {
return this.eat(i.LatinSmallLetterT) ? (this._lastIntValue = i.CharacterTabulation, 
!0) : this.eat(i.LatinSmallLetterN) ? (this._lastIntValue = i.LineFeed, !0) : this.eat(i.LatinSmallLetterV) ? (this._lastIntValue = i.LineTabulation, 
!0) : this.eat(i.LatinSmallLetterF) ? (this._lastIntValue = i.FormFeed, !0) : !!this.eat(i.LatinSmallLetterR) && (this._lastIntValue = i.CarriageReturn, 
!0);
}
eatControlLetter() {
const e = this.currentCodePoint;
return !!i.isLatinLetter(e) && (this.advance(), this._lastIntValue = e % 32, !0);
}
eatRegExpUnicodeEscapeSequence() {
const e = this.index;
if (this.eat(i.LatinSmallLetterU)) {
if (this.eatFixedHexDigits(4)) {
const e = this._lastIntValue;
if (this._uFlag && e >= 55296 && e <= 56319) {
const t = this.index;
if (this.eat(i.ReverseSolidus) && this.eat(i.LatinSmallLetterU) && this.eatFixedHexDigits(4)) {
const t = this._lastIntValue;
if (t >= 56320 && t <= 57343) return this._lastIntValue = 1024 * (e - 55296) + (t - 56320) + 65536, 
!0;
}
this.rewind(t), this._lastIntValue = e;
}
return !0;
}
if (this._uFlag && this.eat(i.LeftCurlyBracket) && this.eatHexDigits() && this.eat(i.RightCurlyBracket) && i.isValidUnicode(this._lastIntValue)) return !0;
(this.strict || this._uFlag) && this.raise("Invalid unicode escape"), this.rewind(e);
}
return !1;
}
eatIdentityEscape() {
return this._uFlag ? !!this.eatSyntaxCharacter() || !!this.eat(i.Solidus) && (this._lastIntValue = i.Solidus, 
!0) : !!this.isValidIdentityEscape(this.currentCodePoint) && (this._lastIntValue = this.currentCodePoint, 
this.advance(), !0);
}
isValidIdentityEscape(e) {
return !(-1 === e || (this.strict ? i.isIdContinue(e) : e === i.LatinSmallLetterC || this._nFlag && e === i.LatinSmallLetterK));
}
eatDecimalEscape() {
this._lastIntValue = 0;
let e = this.currentCodePoint;
if (e >= i.DigitOne && e <= i.DigitNine) {
do {
this._lastIntValue = 10 * this._lastIntValue + (e - i.DigitZero), this.advance();
} while ((e = this.currentCodePoint) >= i.DigitZero && e <= i.DigitNine);
return !0;
}
return !1;
}
eatCharacterClassEscape() {
const e = this.index;
if (this.eat(i.LatinSmallLetterD)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "digit", !1), 
!0;
if (this.eat(i.LatinCapitalLetterD)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "digit", !0), 
!0;
if (this.eat(i.LatinSmallLetterS)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "space", !1), 
!0;
if (this.eat(i.LatinCapitalLetterS)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "space", !0), 
!0;
if (this.eat(i.LatinSmallLetterW)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "word", !1), 
!0;
if (this.eat(i.LatinCapitalLetterW)) return this._lastIntValue = -1, this.onEscapeCharacterSet(e - 1, this.index, "word", !0), 
!0;
let t = !1;
if (this._uFlag && this.ecmaVersion >= 2018 && (this.eat(i.LatinSmallLetterP) || (t = this.eat(i.LatinCapitalLetterP)))) {
if (this._lastIntValue = -1, this.eat(i.LeftCurlyBracket) && this.eatUnicodePropertyValueExpression() && this.eat(i.RightCurlyBracket)) return this.onUnicodePropertyCharacterSet(e - 1, this.index, "property", this._lastKeyValue, this._lastValValue || null, t), 
!0;
this.raise("Invalid property name");
}
return !1;
}
eatUnicodePropertyValueExpression() {
const e = this.index;
if (this.eatUnicodePropertyName() && this.eat(i.EqualsSign) && (this._lastKeyValue = this._lastStrValue, 
this.eatUnicodePropertyValue())) {
if (this._lastValValue = this._lastStrValue, d(this._lastKeyValue, this._lastValValue)) return !0;
this.raise("Invalid property name");
}
if (this.rewind(e), this.eatLoneUnicodePropertyNameOrValue()) {
const e = this._lastStrValue;
if (d("General_Category", e)) return this._lastKeyValue = "General_Category", this._lastValValue = e, 
!0;
if (p(e)) return this._lastKeyValue = e, this._lastValValue = "", !0;
this.raise("Invalid property name");
}
return !1;
}
eatUnicodePropertyName() {
for (this._lastStrValue = ""; c(this.currentCodePoint); ) this._lastStrValue += String.fromCodePoint(this.currentCodePoint), 
this.advance();
return "" !== this._lastStrValue;
}
eatUnicodePropertyValue() {
for (this._lastStrValue = ""; l(this.currentCodePoint); ) this._lastStrValue += String.fromCodePoint(this.currentCodePoint), 
this.advance();
return "" !== this._lastStrValue;
}
eatLoneUnicodePropertyNameOrValue() {
return this.eatUnicodePropertyValue();
}
eatCharacterClass() {
const e = this.index;
if (this.eat(i.LeftSquareBracket)) {
const t = this.eat(i.CircumflexAccent);
return this.onCharacterClassEnter(e, t), this.classRanges(), this.eat(i.RightSquareBracket) || this.raise("Unterminated character class"), 
this.onCharacterClassLeave(e, this.index, t), !0;
}
return !1;
}
classRanges() {
let e = this.index;
for (;this.eatClassAtom(); ) {
const t = this._lastIntValue, n = this.index;
if (this.eat(i.HyphenMinus) && (this.onCharacter(n, this.index, i.HyphenMinus), 
this.eatClassAtom())) {
const n = this._lastIntValue;
-1 === t || -1 === n ? this.strict && this.raise("Invalid character class") : !this._options.disableChkCharacterClassRange && t > n ? this.raise("Range out of order in character class") : this.onCharacterClassRange(e, this.index, t, n);
}
e = this.index;
}
}
eatClassAtom() {
const e = this.index;
if (this.eat(i.ReverseSolidus)) {
if (this.eatClassEscape()) return !0;
this._uFlag && this.raise("Invalid escape"), this.rewind(e);
}
const t = this.currentCodePoint;
return -1 !== t && t !== i.RightSquareBracket && (this.advance(), this._lastIntValue = t, 
this.onCharacter(e, this.index, t), !0);
}
eatClassEscape() {
const e = this.index;
if (this.eat(i.LatinSmallLetterB)) return this._lastIntValue = i.Backspace, this.onCharacter(e - 1, this.index, i.Backspace), 
!0;
if (this._uFlag && this.eat(i.HyphenMinus)) return this._lastIntValue = i.HyphenMinus, 
this.onCharacter(e - 1, this.index, i.HyphenMinus), !0;
if (!this._uFlag && this.eat(i.LatinSmallLetterC)) {
if (this.eatClassControlLetter()) return this.onCharacter(e - 1, this.index, this._lastIntValue), 
!0;
this.rewind(e);
}
return this.eatCharacterClassEscape() || this.eatCharacterEscape();
}
eatClassControlLetter() {
const e = this.currentCodePoint;
return !(!i.isDecimalDigit(e) && e !== i.LowLine || (this.advance(), this._lastIntValue = e % 32, 
0));
}
eatHexEscapeSequence() {
const e = this.index;
if (this.eat(i.LatinSmallLetterX)) {
if (this.eatFixedHexDigits(2)) return !0;
this._uFlag && this.raise("Invalid escape"), this.rewind(e);
}
return !1;
}
eatDecimalDigits() {
const e = this.index;
for (this._lastIntValue = 0; i.isDecimalDigit(this.currentCodePoint); ) this._lastIntValue = 10 * this._lastIntValue + i.digitToInt(this.currentCodePoint), 
this.advance();
return this.index !== e;
}
eatHexDigits() {
const e = this.index;
for (this._lastIntValue = 0; i.isHexDigit(this.currentCodePoint); ) this._lastIntValue = 16 * this._lastIntValue + i.digitToInt(this.currentCodePoint), 
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
return i.isOctalDigit(e) ? (this.advance(), this._lastIntValue = e - i.DigitZero, 
!0) : (this._lastIntValue = 0, !1);
}
eatFixedHexDigits(e) {
const t = this.index;
this._lastIntValue = 0;
for (let n = 0; n < e; ++n) {
const e = this.currentCodePoint;
if (!i.isHexDigit(e)) return this.rewind(t), !1;
this._lastIntValue = 16 * this._lastIntValue + i.digitToInt(e), this.advance();
}
return !0;
}
}
t.RegExpValidator = RegExpValidator;
}, function(e, t, n) {
"use strict";
var a;
Object.defineProperty(t, "__esModule", {
value: !0
}), function(e) {
e.multiline = "m", e.m = "m", e.global = "g", e.g = "g", e.ignoreCase = "i", e.i = "i", 
e.sticky = "y", e.y = "y", e.unicode = "u", e.u = "u", e.dotAll = "s", e.s = "s", 
e.freeSpacing = "x", e.x = "x", e.n = "n";
}(a = t.FlagsName || (t.FlagsName = {})), Object.keys(a).forEach(function(e) {
a[a[e]] = a[e];
}), t.FlagsPattern = {
s: [ [ "^.$", "\n", !0 ] ]
}, t.default = a;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(15);
function r(e, n = RegExp, r = t.PatternTest) {
if (r[e] && r[e].length) {
let t = !1;
try {
t = !0 === r[e].every(function(e) {
let [t, r, i, o, s] = e, u, c = a.createRegExp(t, r, n);
if (s) if ("function" == typeof s) u = s(c, o, i, t, n, r); else {
let e;
switch (s) {
case "replace":
u = (e = i.replace(c, "")) === o;
break;

default:
u = c[s](i) === o;
break;
}
} else u = c.exec(i) === o;
return u;
});
} catch (e) {
t = !1;
}
return t;
}
return null;
}
function i(e, t) {
return [ `U\\+(?<${e}>[0-9A-F]{4})`, t || "", "U+2620", {
groups: {
[e]: "2620"
}
}, function(e, t, n) {
let a = e.exec(n);
return a.groups && Object.entries(a.groups).every(function(e) {
let [n, a] = e, r;
return a === t.groups[n];
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
namedCapturingGroups: [ i("Az"), i("_09"), i("$") ],
namedCapturingGroupsUnicode: [ i("naïve嬢の日常"), i("Русский"), i("naïve"), i("嬢の日常"), i("𠬠", "u") ],
namedCapturingGroupsEmoji: [ i("👩", "u") ],
namedCapturingGroupsBackreference: [ [ "^(?<half>.*).\\k<half>$", "u", "a*a", !0, "test" ], [ "^(?<half>.*).\\k<half>$", "u", "a*b", !1, "test" ] ],
namedCapturingGroupsDuplicate: [ [ "^(?:(?<half>b)|(?<half>a)).\\k<half>$", "u", "a*a", !0, "test" ] ],
lookAheadPositive: [ [ "aa(?=bb)", "", "aabb", !0, "test" ] ],
lookAheadNegative: [ [ "aa(?!bb)", "", "aabb", !1, "test" ] ],
lookBehindPositive: [ [ "(?<=\\$)foo", "g", "$foo %foo foo", "$ %foo foo", "replace" ], [ "(?<=\\$)foo", "g", "$foo %foo foo", "$bar %foo foo", function(e, t, n, a, r, i) {
return n.replace(e, "bar") === t;
} ] ],
lookBehindNegative: [ [ "(?<!\\$)foo", "g", "$foo %foo foo", "$foo % ", "replace" ], [ "(?<!\\$)foo", "g", "$foo %foo foo", "$foo %bar bar", function(e, t, n, a, r, i) {
return n.replace(e, "bar") === t;
} ] ],
dotUnicodeEmoji: [ [ "^.$", "u", "😀", !0, "test" ] ],
classSub: [ [ "[a-z&&[^m-p]]", "", "m", !1, "test" ], [ "[a-z&&[^m-p]]", "", "a", !0, "test" ] ],
unicodeWrap: [ [ "^\\u{20bb7}$", "u", "𠮷", !0, "test" ] ]
}, t.testPattern = r, t.testNamedCapturingGroups = i, t.default = t;
}, function(e, t, n) {
(function(e) {
var a = Object.getOwnPropertyDescriptors || function e(t) {
for (var n = Object.keys(t), a = {}, r = 0; r < n.length; r++) a[n[r]] = Object.getOwnPropertyDescriptor(t, n[r]);
return a;
}, r = /%[sdj%]/g;
t.format = function(e) {
if (!k(e)) {
for (var t = [], n = 0; n < arguments.length; n++) t.push(s(arguments[n]));
return t.join(" ");
}
for (var n = 1, a = arguments, i = a.length, o = String(e).replace(r, function(e) {
if ("%%" === e) return "%";
if (n >= i) return e;
switch (e) {
case "%s":
return String(a[n++]);

case "%d":
return Number(a[n++]);

case "%j":
try {
return JSON.stringify(a[n++]);
} catch (e) {
return "[Circular]";
}

default:
return e;
}
}), u = a[n]; n < i; u = a[++n]) y(u) || !C(u) ? o += " " + u : o += " " + s(u);
return o;
}, t.deprecate = function(n, a) {
if (void 0 !== e && !0 === e.noDeprecation) return n;
if (void 0 === e) return function() {
return t.deprecate(n, a).apply(this, arguments);
};
var r = !1;
function i() {
if (!r) {
if (e.throwDeprecation) throw new Error(a);
e.traceDeprecation ? console.trace(a) : console.error(a), r = !0;
}
return n.apply(this, arguments);
}
return i;
};
var i = {}, o;
function s(e, n) {
var a = {
seen: [],
stylize: c
};
return arguments.length >= 3 && (a.depth = arguments[2]), arguments.length >= 4 && (a.colors = arguments[3]), 
b(n) ? a.showHidden = n : n && t._extend(a, n), D(a.showHidden) && (a.showHidden = !1), 
D(a.depth) && (a.depth = 2), D(a.colors) && (a.colors = !1), D(a.customInspect) && (a.customInspect = !0), 
a.colors && (a.stylize = u), d(a, e, a.depth);
}
function u(e, t) {
var n = s.styles[t];
return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e;
}
function c(e, t) {
return e;
}
function l(e) {
var t = {};
return e.forEach(function(e, n) {
t[e] = !0;
}), t;
}
function d(e, n, a) {
if (e.customInspect && n && A(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
var r = n.inspect(a, e);
return k(r) || (r = d(e, r, a)), r;
}
var i = p(e, n);
if (i) return i;
var o = Object.keys(n), s = l(o);
if (e.showHidden && (o = Object.getOwnPropertyNames(n)), S(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return h(n);
if (0 === o.length) {
if (A(n)) {
var u = n.name ? ": " + n.name : "";
return e.stylize("[Function" + u + "]", "special");
}
if (j(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
if (E(n)) return e.stylize(Date.prototype.toString.call(n), "date");
if (S(n)) return h(n);
}
var c = "", b = !1, y = [ "{", "}" ], v, w;
return _(n) && (b = !0, y = [ "[", "]" ]), A(n) && (c = " [Function" + (n.name ? ": " + n.name : "") + "]"), 
j(n) && (c = " " + RegExp.prototype.toString.call(n)), E(n) && (c = " " + Date.prototype.toUTCString.call(n)), 
S(n) && (c = " " + h(n)), 0 !== o.length || b && 0 != n.length ? a < 0 ? j(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), 
w = b ? f(e, n, a, s, o) : o.map(function(t) {
return g(e, n, a, s, t, b);
}), e.seen.pop(), m(w, c, y)) : y[0] + c + y[1];
}
function p(e, t) {
if (D(t)) return e.stylize("undefined", "undefined");
if (k(t)) {
var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
return e.stylize(n, "string");
}
return w(t) ? e.stylize("" + t, "number") : b(t) ? e.stylize("" + t, "boolean") : y(t) ? e.stylize("null", "null") : void 0;
}
function h(e) {
return "[" + Error.prototype.toString.call(e) + "]";
}
function f(e, t, n, a, r) {
for (var i = [], o = 0, s = t.length; o < s; ++o) M(t, String(o)) ? i.push(g(e, t, n, a, String(o), !0)) : i.push("");
return r.forEach(function(r) {
r.match(/^\d+$/) || i.push(g(e, t, n, a, r, !0));
}), i;
}
function g(e, t, n, a, r, i) {
var o, s, u;
if ((u = Object.getOwnPropertyDescriptor(t, r) || {
value: t[r]
}).get ? s = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (s = e.stylize("[Setter]", "special")), 
M(a, r) || (o = "[" + r + "]"), s || (e.seen.indexOf(u.value) < 0 ? (s = y(n) ? d(e, u.value, null) : d(e, u.value, n - 1)).indexOf("\n") > -1 && (s = i ? s.split("\n").map(function(e) {
return "  " + e;
}).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
return "   " + e;
}).join("\n")) : s = e.stylize("[Circular]", "special")), D(o)) {
if (i && r.match(/^\d+$/)) return s;
(o = JSON.stringify("" + r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), 
o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), 
o = e.stylize(o, "string"));
}
return o + ": " + s;
}
function m(e, t, n) {
var a = 0, r;
return e.reduce(function(e, t) {
return a++, t.indexOf("\n") >= 0 && a++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
}, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
}
function _(e) {
return Array.isArray(e);
}
function b(e) {
return "boolean" == typeof e;
}
function y(e) {
return null === e;
}
function v(e) {
return null == e;
}
function w(e) {
return "number" == typeof e;
}
function k(e) {
return "string" == typeof e;
}
function x(e) {
return "symbol" == typeof e;
}
function D(e) {
return void 0 === e;
}
function j(e) {
return C(e) && "[object RegExp]" === F(e);
}
function C(e) {
return "object" == typeof e && null !== e;
}
function E(e) {
return C(e) && "[object Date]" === F(e);
}
function S(e) {
return C(e) && ("[object Error]" === F(e) || e instanceof Error);
}
function A(e) {
return "function" == typeof e;
}
function T(e) {
return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
}
function F(e) {
return Object.prototype.toString.call(e);
}
function P(e) {
return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
t.debuglog = function(n) {
if (D(o) && (o = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !i[n]) if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
var a = e.pid;
i[n] = function() {
var e = t.format.apply(t, arguments);
console.error("%s %d: %s", n, a, e);
};
} else i[n] = function() {};
return i[n];
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
}, t.isArray = _, t.isBoolean = b, t.isNull = y, t.isNullOrUndefined = v, t.isNumber = w, 
t.isString = k, t.isSymbol = x, t.isUndefined = D, t.isRegExp = j, t.isObject = C, 
t.isDate = E, t.isError = S, t.isFunction = A, t.isPrimitive = T, t.isBuffer = n(199);
var I = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
function L() {
var e = new Date(), t = [ P(e.getHours()), P(e.getMinutes()), P(e.getSeconds()) ].join(":");
return [ e.getDate(), I[e.getMonth()], t ].join(" ");
}
function M(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
t.log = function() {
console.log("%s - %s", L(), t.format.apply(t, arguments));
}, t.inherits = n(200), t._extend = function(e, t) {
if (!t || !C(t)) return e;
for (var n = Object.keys(t), a = n.length; a--; ) e[n[a]] = t[n[a]];
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
function z(t) {
if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
function n() {
for (var n = [], a = 0; a < arguments.length; a++) n.push(arguments[a]);
var r = n.pop();
if ("function" != typeof r) throw new TypeError("The last argument must be of type Function");
var i = this, o = function() {
return r.apply(i, arguments);
};
t.apply(this, n).then(function(t) {
e.nextTick(o, null, t);
}, function(t) {
e.nextTick(R, t, o);
});
}
return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), Object.defineProperties(n, a(t)), 
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
for (var e, n, a = new Promise(function(t, a) {
e = t, n = a;
}), r = [], i = 0; i < arguments.length; i++) r.push(arguments[i]);
r.push(function(t, a) {
t ? n(t) : e(a);
});
try {
t.apply(this, r);
} catch (e) {
n(e);
}
return a;
}
return Object.setPrototypeOf(n, Object.getPrototypeOf(t)), O && Object.defineProperty(n, O, {
value: n,
enumerable: !1,
writable: !1,
configurable: !0
}), Object.defineProperties(n, a(t));
}, t.promisify.custom = O, t.callbackify = z;
}).call(this, n(110));
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
e.exports = function(e) {
return "number" == typeof e ? e - e == 0 : "string" == typeof e && "" !== e.trim() && (Number.isFinite ? Number.isFinite(+e) : isFinite(+e));
};
}, function(e, t, n) {
"use strict";
var a = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, o = Object.getOwnPropertyDescriptor, s = function e(t) {
return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t);
}, u = function e(t) {
if (!t || "[object Object]" !== r.call(t)) return !1;
var n = a.call(t, "constructor"), i = t.constructor && t.constructor.prototype && a.call(t.constructor.prototype, "isPrototypeOf"), o;
if (t.constructor && !n && !i) return !1;
for (o in t) ;
return void 0 === o || a.call(t, o);
}, c = function e(t, n) {
i && "__proto__" === n.name ? i(t, n.name, {
enumerable: !0,
configurable: !0,
value: n.newValue,
writable: !0
}) : t[n.name] = n.newValue;
}, l = function e(t, n) {
if ("__proto__" === n) {
if (!a.call(t, n)) return;
if (o) return o(t, n).value;
}
return t[n];
};
e.exports = function e() {
var t, n, a, r, i, o, d = arguments[0], p = 1, h = arguments.length, f = !1;
for ("boolean" == typeof d && (f = d, d = arguments[1] || {}, p = 2), (null == d || "object" != typeof d && "function" != typeof d) && (d = {}); p < h; ++p) if (null != (t = arguments[p])) for (n in t) a = l(d, n), 
d !== (r = l(t, n)) && (f && r && (u(r) || (i = s(r))) ? (i ? (i = !1, o = a && s(a) ? a : []) : o = a && u(a) ? a : {}, 
c(d, {
name: n,
newValue: e(f, o, r)
})) : void 0 !== r && c(d, {
name: n,
newValue: r
}));
return d;
};
}, function(e, t, n) {
"use strict";
var a = n(237);
function r(e) {
var t = new Map(), n = [ t ], r = "";
function i(e) {
"" !== r && (t.set(r, e), r = "");
}
for (var o = 0; o < e.length; o++) {
var s = e.charAt(o);
switch (s) {
case a.SAME:
i(!0);
continue;

case a.DOWN:
var u = new Map();
i(u), n.push(t), t = u;
continue;

case a.RESET:
i(!0), n.length = 1, t = n[0];
continue;

case a.UP:
i(!0), t = n.pop();
continue;
}
r += s;
}
return i(!0), n[0];
}
e.exports = r;
}, function(e, t, n) {
"use strict";
function a(e, t) {
t = t || {};
var n = null;
try {
n = new Event(e);
} catch (t) {
(n = document.createEvent("Event")).initEvent(e, !0, !1);
}
for (var a in t) n[a] = t[a];
document.dispatchEvent(n);
}
function r(e) {
var t = {
lang: null,
lect: null,
q: 1
}, n = "";
return (e = e.toLowerCase().replace(/-/g, "_")).indexOf(";") > -1 ? (2 == (n = e.split(";")).length && n[1].match(/^q=(1|0\.[0-9]+)$/) && (t.q = parseFloat(n[1].split("=")[1])), 
n = n[0] || "") : n = e, n.indexOf("_") > -1 ? 2 == (n = n.split("_")).length ? 2 == n[0].length && (t.lang = n[0], 
2 == n[1].length && (t.lect = n[1])) : 2 == n[0].length && (t = n[0]) : 2 == n.length && (t.lang = n), 
t;
}
function i(e) {
if (void 0 === e && (e = navigator.language || navigator.userLanguage || navigator.systemLanguage || navigator.browserLanguage), 
!e || "" === e) return [ "en" ];
for (var t = [], n = e.split(","), a, i, o = 0; o < n.length; o++) (i = r(n[o])).lang && t.push(i);
if (0 === t.length) return [ "en" ];
t = t.sort(function(e, t) {
return t.q - e.q;
});
var s = [];
for (o = 0; o < t.length; o++) a = t[o].lang, t[o].lect && (a += "_", a += t[o].lect.toUpperCase()), 
s.push(a);
return s;
}
function o(e, t) {
var n;
Array.isArray(e) || (e = [ e ]);
for (var a = [], i = 0; i < t.length; i++) (n = r(t[i])).cat = t[i], a.push(n);
var o = [];
for (i = 0; i < e.length; i++) o.push(r(e[i]));
function s(e, t, n) {
if (null === e) return null;
for (var a = 0; a < n.length; a++) {
if ("*" == t && n[a].lang === e) return n[a];
if (n[a].lang === e && n[a].lect === t) return n[a];
}
}
var u = null, c = 0;
for (i = 0; i < o.length && ((n = s(o[i].lang, o[i].lect, a)) && !u ? (u = n, c = i) : n && u && n.lang === u.lang && null === u.lect && null !== n.lect && (u = n, 
c = i), !(u && u.lang && u.lect)); i++) ;
for (i = 0; i < o.length; i++) if ((n = s(o[i].lang, null, a)) && (!u || u && c >= i && u.lang !== n.lang)) return n.cat;
for (i = 0; i < o.length; i++) if ((n = s(o[i].lang, o[i].lang, a)) && (!u || u && c >= i && u.lang !== n.lang)) return n.cat;
if (u) return u.cat;
for (i = 0; i < o.length; i++) if (n = s(o[i].lang, "*", a)) return n.cat;
for (i = 0; i < e.length; i++) if (t.indexOf(e[i]) >= 0) return e[i];
return "c";
}
e.exports = {
sendEvent: a,
parseLanguageCode: r,
extractLanguages: i,
findBestMatchingLocale: o
};
}, function(e, t, n) {
"use strict";
var a = n(145), r = {}, i = null;
function o(e, t) {
var n = e;
if (i && r[i] && r[i].messages && r[i].messages[e] && r[i].messages[e].length > 0 && "" !== r[i].messages[e][0] && (n = r[i].messages[e][0]), 
t) for (var a in t) n = n.replace(new RegExp("{" + a + "}", "g"), t[a]);
return n;
}
function s(e, t) {
this.toString = o.bind(this, e, t);
for (var n = Object.getOwnPropertyNames(String.prototype), a = 0; a < n.length; a++) "toString" != n[a] && ("function" == typeof String.prototype[n[a]] ? this[n[a]] = function() {
var e = this.self.toString();
return e[this.prop].apply(e, arguments);
}.bind({
self: this,
prop: n[a]
}) : Object.defineProperty(this, n[a], {
get: function() {
var e;
return this.self.toString()[this.prop];
}.bind({
self: this,
prop: n[a]
}),
enumerable: !1,
configurable: !1
}));
}
function u(e, t) {
return new s(e, t);
}
function c() {
for (var e in r) delete r[e];
}
function l() {
return Object.keys(r);
}
function d(e) {
for (var t in e) if (r[t]) for (var n in r[t]["plural-forms"] = e[t]["plural-forms"], 
e[t].messages) r[t].messages[n] = e[t].messages[n]; else r[t] = e[t];
}
function p() {
return i;
}
function h(e) {
i = e;
}
function f(e) {
e || (e = a.extractLanguages());
var t = Object.keys(r), n;
h(a.findBestMatchingLocale(e, t));
}
e.exports = {
catalogs: r,
LazyString: s,
gettext: o,
lazyGettext: u,
clearCatalogs: c,
addCatalogs: d,
listCatalogs: l,
getLocale: p,
setLocale: h,
setBestMatchingLocale: f
};
}, function(e, t, n) {
var a, r;
!function(t, n) {
"use strict";
"object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
if (!e.document) throw new Error("jQuery requires a window with a document");
return n(e);
} : n(t);
}("undefined" != typeof window ? window : this, function(n, i) {
"use strict";
var o = [], s = n.document, u = Object.getPrototypeOf, c = o.slice, l = o.concat, d = o.push, p = o.indexOf, h = {}, f = h.toString, g = h.hasOwnProperty, m = g.toString, _ = m.call(Object), b = {}, y = function(e) {
return "function" == typeof e && "number" != typeof e.nodeType;
}, v = function(e) {
return null != e && e === e.window;
}, w = {
type: !0,
src: !0,
nonce: !0,
noModule: !0
};
function k(e, t, n) {
var a, r, i = (n = n || s).createElement("script");
if (i.text = e, t) for (a in w) (r = t[a] || t.getAttribute && t.getAttribute(a)) && i.setAttribute(a, r);
n.head.appendChild(i).parentNode.removeChild(i);
}
function x(e) {
return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[f.call(e)] || "object" : typeof e;
}
var D = "3.4.1", j = function(e, t) {
return new j.fn.init(e, t);
}, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function E(e) {
var t = !!e && "length" in e && e.length, n = x(e);
return !y(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
}
j.fn = j.prototype = {
jquery: D,
constructor: j,
length: 0,
toArray: function() {
return c.call(this);
},
get: function(e) {
return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e];
},
pushStack: function(e) {
var t = j.merge(this.constructor(), e);
return t.prevObject = this, t;
},
each: function(e) {
return j.each(this, e);
},
map: function(e) {
return this.pushStack(j.map(this, function(t, n) {
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
push: d,
sort: o.sort,
splice: o.splice
}, j.extend = j.fn.extend = function() {
var e, t, n, a, r, i, o = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || y(o) || (o = {}), 
s === u && (o = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) a = e[t], 
"__proto__" !== t && o !== a && (c && a && (j.isPlainObject(a) || (r = Array.isArray(a))) ? (n = o[t], 
i = r && !Array.isArray(n) ? [] : r || j.isPlainObject(n) ? n : {}, r = !1, o[t] = j.extend(c, i, a)) : void 0 !== a && (o[t] = a));
return o;
}, j.extend({
expando: "jQuery" + (D + Math.random()).replace(/\D/g, ""),
isReady: !0,
error: function(e) {
throw new Error(e);
},
noop: function() {},
isPlainObject: function(e) {
var t, n;
return !(!e || "[object Object]" !== f.call(e) || (t = u(e)) && ("function" != typeof (n = g.call(t, "constructor") && t.constructor) || m.call(n) !== _));
},
isEmptyObject: function(e) {
var t;
for (t in e) return !1;
return !0;
},
globalEval: function(e, t) {
k(e, {
nonce: t && t.nonce
});
},
each: function(e, t) {
var n, a = 0;
if (E(e)) for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++) ; else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
return e;
},
trim: function(e) {
return null == e ? "" : (e + "").replace(C, "");
},
makeArray: function(e, t) {
var n = t || [];
return null != e && (E(Object(e)) ? j.merge(n, "string" == typeof e ? [ e ] : e) : d.call(n, e)), 
n;
},
inArray: function(e, t, n) {
return null == t ? -1 : p.call(t, e, n);
},
merge: function(e, t) {
for (var n = +t.length, a = 0, r = e.length; a < n; a++) e[r++] = t[a];
return e.length = r, e;
},
grep: function(e, t, n) {
for (var a = [], r = 0, i = e.length, o = !n; r < i; r++) !t(e[r], r) !== o && a.push(e[r]);
return a;
},
map: function(e, t, n) {
var a, r, i = 0, o = [];
if (E(e)) for (a = e.length; i < a; i++) null != (r = t(e[i], i, n)) && o.push(r); else for (i in e) null != (r = t(e[i], i, n)) && o.push(r);
return l.apply([], o);
},
guid: 1,
support: b
}), "function" == typeof Symbol && (j.fn[Symbol.iterator] = o[Symbol.iterator]), 
j.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
h["[object " + t + "]"] = t.toLowerCase();
});
var S = function(e) {
var t, n, a, r, i, o, s, u, c, l, d, p, h, f, g, m, _, b, y, v = "sizzle" + 1 * new Date(), w = e.document, k = 0, x = 0, D = ue(), j = ue(), C = ue(), E = ue(), S = function(e, t) {
return e === t && (d = !0), 0;
}, A = {}.hasOwnProperty, T = [], F = T.pop, P = T.push, I = T.push, L = T.slice, M = function(e, t) {
for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n;
return -1;
}, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", N = "\\[" + R + "*(" + z + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + R + "*\\]", B = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", $ = new RegExp(R + "+", "g"), H = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"), q = new RegExp("^" + R + "*," + R + "*"), G = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), U = new RegExp(R + "|>"), V = new RegExp(B), W = new RegExp("^" + z + "$"), K = {
ID: new RegExp("^#(" + z + ")"),
CLASS: new RegExp("^\\.(" + z + ")"),
TAG: new RegExp("^(" + z + "|[*])"),
ATTR: new RegExp("^" + N),
PSEUDO: new RegExp("^" + B),
CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
bool: new RegExp("^(?:" + O + ")$", "i"),
needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
}, Q = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, X = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"), ne = function(e, t, n) {
var a = "0x" + t - 65536;
return a != a || n ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320);
}, ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function(e, t) {
return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
}, ie = function() {
p();
}, oe = ve(function(e) {
return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
}, {
dir: "parentNode",
next: "legend"
});
try {
I.apply(T = L.call(w.childNodes), w.childNodes), T[w.childNodes.length].nodeType;
} catch (t) {
I = {
apply: T.length ? function(e, t) {
P.apply(e, L.call(t));
} : function(e, t) {
for (var n = e.length, a = 0; e[n++] = t[a++]; ) ;
e.length = n - 1;
}
};
}
function se(e, t, a, r) {
var i, s, c, l, d, f, _, b = t && t.ownerDocument, k = t ? t.nodeType : 9;
if (a = a || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return a;
if (!r && ((t ? t.ownerDocument || t : w) !== h && p(t), t = t || h, g)) {
if (11 !== k && (d = J.exec(e))) if (i = d[1]) {
if (9 === k) {
if (!(c = t.getElementById(i))) return a;
if (c.id === i) return a.push(c), a;
} else if (b && (c = b.getElementById(i)) && y(t, c) && c.id === i) return a.push(c), 
a;
} else {
if (d[2]) return I.apply(a, t.getElementsByTagName(e)), a;
if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(a, t.getElementsByClassName(i)), 
a;
}
if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
if (_ = e, b = t, 1 === k && U.test(e)) {
for ((l = t.getAttribute("id")) ? l = l.replace(ae, re) : t.setAttribute("id", l = v), 
s = (f = o(e)).length; s--; ) f[s] = "#" + l + " " + ye(f[s]);
_ = f.join(","), b = ee.test(e) && _e(t.parentNode) || t;
}
try {
return I.apply(a, b.querySelectorAll(_)), a;
} catch (t) {
E(e, !0);
} finally {
l === v && t.removeAttribute("id");
}
}
}
return u(e.replace(H, "$1"), t, a, r);
}
function ue() {
var e = [];
return function t(n, r) {
return e.push(n + " ") > a.cacheLength && delete t[e.shift()], t[n + " "] = r;
};
}
function ce(e) {
return e[v] = !0, e;
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
function de(e, t) {
for (var n = e.split("|"), r = n.length; r--; ) a.attrHandle[n[r]] = t;
}
function pe(e, t) {
var n = t && e, a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
if (a) return a;
if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
return e ? 1 : -1;
}
function he(e) {
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
function ge(e) {
return function(t) {
return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e;
};
}
function me(e) {
return ce(function(t) {
return t = +t, ce(function(n, a) {
for (var r, i = e([], n.length, t), o = i.length; o--; ) n[r = i[o]] && (n[r] = !(a[r] = n[r]));
});
});
}
function _e(e) {
return e && void 0 !== e.getElementsByTagName && e;
}
for (t in n = se.support = {}, i = se.isXML = function(e) {
var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
return !Q.test(t || n && n.nodeName || "HTML");
}, p = se.setDocument = function(e) {
var t, r, o = e ? e.ownerDocument || e : w;
return o !== h && 9 === o.nodeType && o.documentElement && (f = (h = o).documentElement, 
g = !i(h), w !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), 
n.attributes = le(function(e) {
return e.className = "i", !e.getAttribute("className");
}), n.getElementsByTagName = le(function(e) {
return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
}), n.getElementsByClassName = X.test(h.getElementsByClassName), n.getById = le(function(e) {
return f.appendChild(e).id = v, !h.getElementsByName || !h.getElementsByName(v).length;
}), n.getById ? (a.filter.ID = function(e) {
var t = e.replace(te, ne);
return function(e) {
return e.getAttribute("id") === t;
};
}, a.find.ID = function(e, t) {
if (void 0 !== t.getElementById && g) {
var n = t.getElementById(e);
return n ? [ n ] : [];
}
}) : (a.filter.ID = function(e) {
var t = e.replace(te, ne);
return function(e) {
var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
return n && n.value === t;
};
}, a.find.ID = function(e, t) {
if (void 0 !== t.getElementById && g) {
var n, a, r, i = t.getElementById(e);
if (i) {
if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
for (r = t.getElementsByName(e), a = 0; i = r[a++]; ) if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
}
return [];
}
}), a.find.TAG = n.getElementsByTagName ? function(e, t) {
return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
} : function(e, t) {
var n, a = [], r = 0, i = t.getElementsByTagName(e);
if ("*" === e) {
for (;n = i[r++]; ) 1 === n.nodeType && a.push(n);
return a;
}
return i;
}, a.find.CLASS = n.getElementsByClassName && function(e, t) {
if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
}, _ = [], m = [], (n.qsa = X.test(h.querySelectorAll)) && (le(function(e) {
f.appendChild(e).innerHTML = "<a id='" + v + "'></a><select id='" + v + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), 
e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + O + ")"), 
e.querySelectorAll("[id~=" + v + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), 
e.querySelectorAll("a#" + v + "+*").length || m.push(".#.+[+~]");
}), le(function(e) {
e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var t = h.createElement("input");
t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 
2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), 
f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), 
e.querySelectorAll("*,:x"), m.push(",.*:");
})), (n.matchesSelector = X.test(b = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function(e) {
n.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), _.push("!=", B);
}), m = m.length && new RegExp(m.join("|")), _ = _.length && new RegExp(_.join("|")), 
t = X.test(f.compareDocumentPosition), y = t || X.test(f.contains) ? function(e, t) {
var n = 9 === e.nodeType ? e.documentElement : e, a = t && t.parentNode;
return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)));
} : function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, S = t ? function(e, t) {
if (e === t) return d = !0, 0;
var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
return a || (1 & (a = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === a ? e === h || e.ownerDocument === w && y(w, e) ? -1 : t === h || t.ownerDocument === w && y(w, t) ? 1 : l ? M(l, e) - M(l, t) : 0 : 4 & a ? -1 : 1);
} : function(e, t) {
if (e === t) return d = !0, 0;
var n, a = 0, r = e.parentNode, i = t.parentNode, o = [ e ], s = [ t ];
if (!r || !i) return e === h ? -1 : t === h ? 1 : r ? -1 : i ? 1 : l ? M(l, e) - M(l, t) : 0;
if (r === i) return pe(e, t);
for (n = e; n = n.parentNode; ) o.unshift(n);
for (n = t; n = n.parentNode; ) s.unshift(n);
for (;o[a] === s[a]; ) a++;
return a ? pe(o[a], s[a]) : o[a] === w ? -1 : s[a] === w ? 1 : 0;
}), h;
}, se.matches = function(e, t) {
return se(e, null, null, t);
}, se.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== h && p(e), n.matchesSelector && g && !E[t + " "] && (!_ || !_.test(t)) && (!m || !m.test(t))) try {
var a = b.call(e, t);
if (a || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a;
} catch (e) {
E(t, !0);
}
return 0 < se(t, h, null, [ e ]).length;
}, se.contains = function(e, t) {
return (e.ownerDocument || e) !== h && p(e), y(e, t);
}, se.attr = function(e, t) {
(e.ownerDocument || e) !== h && p(e);
var r = a.attrHandle[t.toLowerCase()], i = r && A.call(a.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
}, se.escape = function(e) {
return (e + "").replace(ae, re);
}, se.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, se.uniqueSort = function(e) {
var t, a = [], r = 0, i = 0;
if (d = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), d) {
for (;t = e[i++]; ) t === e[i] && (r = a.push(i));
for (;r--; ) e.splice(a[r], 1);
}
return l = null, e;
}, r = se.getText = function(e) {
var t, n = "", a = 0, i = e.nodeType;
if (i) {
if (1 === i || 9 === i || 11 === i) {
if ("string" == typeof e.textContent) return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
} else if (3 === i || 4 === i) return e.nodeValue;
} else for (;t = e[a++]; ) n += r(t);
return n;
}, (a = se.selectors = {
cacheLength: 50,
createPseudo: ce,
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
return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), 
e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), 
e;
},
PSEUDO: function(e) {
var t, n = !e[6] && e[2];
return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
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
var t = D[e + " "];
return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && D(e, function(e) {
return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
});
},
ATTR: function(e, t, n) {
return function(a) {
var r = se.attr(a, e);
return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && -1 < r.indexOf(n) : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? -1 < (" " + r.replace($, " ") + " ").indexOf(n) : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
};
},
CHILD: function(e, t, n, a, r) {
var i = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
return 1 === a && 0 === r ? function(e) {
return !!e.parentNode;
} : function(t, n, u) {
var c, l, d, p, h, f, g = i !== o ? "nextSibling" : "previousSibling", m = t.parentNode, _ = s && t.nodeName.toLowerCase(), b = !u && !s, y = !1;
if (m) {
if (i) {
for (;g; ) {
for (p = t; p = p[g]; ) if (s ? p.nodeName.toLowerCase() === _ : 1 === p.nodeType) return !1;
f = g = "only" === e && !f && "nextSibling";
}
return !0;
}
if (f = [ o ? m.firstChild : m.lastChild ], o && b) {
for (y = (h = (c = (l = (d = (p = m)[v] || (p[v] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], 
p = h && m.childNodes[h]; p = ++h && p && p[g] || (y = h = 0) || f.pop(); ) if (1 === p.nodeType && ++y && p === t) {
l[e] = [ k, h, y ];
break;
}
} else if (b && (y = h = (c = (l = (d = (p = t)[v] || (p[v] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === k && c[1]), 
!1 === y) for (;(p = ++h && p && p[g] || (y = h = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== _ : 1 !== p.nodeType) || !++y || (b && ((l = (d = p[v] || (p[v] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [ k, y ]), 
p !== t)); ) ;
return (y -= r) === a || y % a == 0 && 0 <= y / a;
}
};
},
PSEUDO: function(e, t) {
var n, r = a.pseudos[e] || a.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
return r[v] ? r(t) : 1 < r.length ? (n = [ e, e, "", t ], a.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
for (var a, i = r(e, t), o = i.length; o--; ) e[a = M(e, i[o])] = !(n[a] = i[o]);
}) : function(e) {
return r(e, 0, n);
}) : r;
}
},
pseudos: {
not: ce(function(e) {
var t = [], n = [], a = s(e.replace(H, "$1"));
return a[v] ? ce(function(e, t, n, r) {
for (var i, o = a(e, null, r, []), s = e.length; s--; ) (i = o[s]) && (e[s] = !(t[s] = i));
}) : function(e, r, i) {
return t[0] = e, a(t, null, i, n), t[0] = null, !n.pop();
};
}),
has: ce(function(e) {
return function(t) {
return 0 < se(e, t).length;
};
}),
contains: ce(function(e) {
return e = e.replace(te, ne), function(t) {
return -1 < (t.textContent || r(t)).indexOf(e);
};
}),
lang: ce(function(e) {
return W.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), 
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
return e === f;
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
return !a.pseudos.empty(e);
},
header: function(e) {
return Z.test(e.nodeName);
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
for (var a = n < 0 ? n + t : t < n ? t : n; 0 <= --a; ) e.push(a);
return e;
}),
gt: me(function(e, t, n) {
for (var a = n < 0 ? n + t : n; ++a < t; ) e.push(a);
return e;
})
}
}).pseudos.nth = a.pseudos.eq, {
radio: !0,
checkbox: !0,
file: !0,
password: !0,
image: !0
}) a.pseudos[t] = he(t);
for (t in {
submit: !0,
reset: !0
}) a.pseudos[t] = fe(t);
function be() {}
function ye(e) {
for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
return a;
}
function ve(e, t, n) {
var a = t.dir, r = t.next, i = r || a, o = n && "parentNode" === i, s = x++;
return t.first ? function(t, n, r) {
for (;t = t[a]; ) if (1 === t.nodeType || o) return e(t, n, r);
return !1;
} : function(t, n, u) {
var c, l, d, p = [ k, s ];
if (u) {
for (;t = t[a]; ) if ((1 === t.nodeType || o) && e(t, n, u)) return !0;
} else for (;t = t[a]; ) if (1 === t.nodeType || o) if (l = (d = t[v] || (t[v] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), 
r && r === t.nodeName.toLowerCase()) t = t[a] || t; else {
if ((c = l[i]) && c[0] === k && c[1] === s) return p[2] = c[2];
if ((l[i] = p)[2] = e(t, n, u)) return !0;
}
return !1;
};
}
function we(e) {
return 1 < e.length ? function(t, n, a) {
for (var r = e.length; r--; ) if (!e[r](t, n, a)) return !1;
return !0;
} : e[0];
}
function ke(e, t, n, a, r) {
for (var i, o = [], s = 0, u = e.length, c = null != t; s < u; s++) (i = e[s]) && (n && !n(i, a, r) || (o.push(i), 
c && t.push(s)));
return o;
}
function xe(e, t, n, a, r, i) {
return a && !a[v] && (a = xe(a)), r && !r[v] && (r = xe(r, i)), ce(function(i, o, s, u) {
var c, l, d, p = [], h = [], f = o.length, g = i || function(e, t, n) {
for (var a = 0, r = t.length; a < r; a++) se(e, t[a], n);
return n;
}(t || "*", s.nodeType ? [ s ] : s, []), m = !e || !i && t ? g : ke(g, p, e, s, u), _ = n ? r || (i ? e : f || a) ? [] : o : m;
if (n && n(m, _, s, u), a) for (c = ke(_, h), a(c, [], s, u), l = c.length; l--; ) (d = c[l]) && (_[h[l]] = !(m[h[l]] = d));
if (i) {
if (r || e) {
if (r) {
for (c = [], l = _.length; l--; ) (d = _[l]) && c.push(m[l] = d);
r(null, _ = [], c, u);
}
for (l = _.length; l--; ) (d = _[l]) && -1 < (c = r ? M(i, d) : p[l]) && (i[c] = !(o[c] = d));
}
} else _ = ke(_ === o ? _.splice(f, _.length) : _), r ? r(null, o, _, u) : I.apply(o, _);
});
}
function De(e) {
for (var t, n, r, i = e.length, o = a.relative[e[0].type], s = o || a.relative[" "], u = o ? 1 : 0, l = ve(function(e) {
return e === t;
}, s, !0), d = ve(function(e) {
return -1 < M(t, e);
}, s, !0), p = [ function(e, n, a) {
var r = !o && (a || n !== c) || ((t = n).nodeType ? l(e, n, a) : d(e, n, a));
return t = null, r;
} ]; u < i; u++) if (n = a.relative[e[u].type]) p = [ ve(we(p), n) ]; else {
if ((n = a.filter[e[u].type].apply(null, e[u].matches))[v]) {
for (r = ++u; r < i && !a.relative[e[r].type]; r++) ;
return xe(1 < u && we(p), 1 < u && ye(e.slice(0, u - 1).concat({
value: " " === e[u - 2].type ? "*" : ""
})).replace(H, "$1"), n, u < r && De(e.slice(u, r)), r < i && De(e = e.slice(r)), r < i && ye(e));
}
p.push(n);
}
return we(p);
}
return be.prototype = a.filters = a.pseudos, a.setFilters = new be(), o = se.tokenize = function(e, t) {
var n, r, i, o, s, u, c, l = j[e + " "];
if (l) return t ? 0 : l.slice(0);
for (s = e, u = [], c = a.preFilter; s; ) {
for (o in n && !(r = q.exec(s)) || (r && (s = s.slice(r[0].length) || s), u.push(i = [])), 
n = !1, (r = G.exec(s)) && (n = r.shift(), i.push({
value: n,
type: r[0].replace(H, " ")
}), s = s.slice(n.length)), a.filter) !(r = K[o].exec(s)) || c[o] && !(r = c[o](r)) || (n = r.shift(), 
i.push({
value: n,
type: o,
matches: r
}), s = s.slice(n.length));
if (!n) break;
}
return t ? s.length : s ? se.error(e) : j(e, u).slice(0);
}, s = se.compile = function(e, t) {
var n, r, i, s, u, l, d = [], f = [], m = C[e + " "];
if (!m) {
for (t || (t = o(e)), n = t.length; n--; ) (m = De(t[n]))[v] ? d.push(m) : f.push(m);
(m = C(e, (r = f, s = 0 < (i = d).length, u = 0 < r.length, l = function(e, t, n, o, l) {
var d, f, m, _ = 0, b = "0", y = e && [], v = [], w = c, x = e || u && a.find.TAG("*", l), D = k += null == w ? 1 : Math.random() || .1, j = x.length;
for (l && (c = t === h || t || l); b !== j && null != (d = x[b]); b++) {
if (u && d) {
for (f = 0, t || d.ownerDocument === h || (p(d), n = !g); m = r[f++]; ) if (m(d, t || h, n)) {
o.push(d);
break;
}
l && (k = D);
}
s && ((d = !m && d) && _--, e && y.push(d));
}
if (_ += b, s && b !== _) {
for (f = 0; m = i[f++]; ) m(y, v, t, n);
if (e) {
if (0 < _) for (;b--; ) y[b] || v[b] || (v[b] = F.call(o));
v = ke(v);
}
I.apply(o, v), l && !e && 0 < v.length && 1 < _ + i.length && se.uniqueSort(o);
}
return l && (k = D, c = w), y;
}, s ? ce(l) : l))).selector = e;
}
return m;
}, u = se.select = function(e, t, n, r) {
var i, u, c, l, d, p = "function" == typeof e && e, h = !r && o(e = p.selector || e);
if (n = n || [], 1 === h.length) {
if (2 < (u = h[0] = h[0].slice(0)).length && "ID" === (c = u[0]).type && 9 === t.nodeType && g && a.relative[u[1].type]) {
if (!(t = (a.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
p && (t = t.parentNode), e = e.slice(u.shift().value.length);
}
for (i = K.needsContext.test(e) ? 0 : u.length; i-- && (c = u[i], !a.relative[l = c.type]); ) if ((d = a.find[l]) && (r = d(c.matches[0].replace(te, ne), ee.test(u[0].type) && _e(t.parentNode) || t))) {
if (u.splice(i, 1), !(e = r.length && ye(u))) return I.apply(n, r), n;
break;
}
}
return (p || s(e, h))(r, t, !g, n, !t || ee.test(e) && _e(t.parentNode) || t), n;
}, n.sortStable = v.split("").sort(S).join("") === v, n.detectDuplicates = !!d, 
p(), n.sortDetached = le(function(e) {
return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
}), le(function(e) {
return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
}) || de("type|href|height|width", function(e, t, n) {
if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
}), n.attributes && le(function(e) {
return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}) || de("value", function(e, t, n) {
if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
}), le(function(e) {
return null == e.getAttribute("disabled");
}) || de(O, function(e, t, n) {
var a;
if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
}), se;
}(n);
j.find = S, j.expr = S.selectors, j.expr[":"] = j.expr.pseudos, j.uniqueSort = j.unique = S.uniqueSort, 
j.text = S.getText, j.isXMLDoc = S.isXML, j.contains = S.contains, j.escapeSelector = S.escape;
var A = function(e, t, n) {
for (var a = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
if (r && j(e).is(n)) break;
a.push(e);
}
return a;
}, T = function(e, t) {
for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
return n;
}, F = j.expr.match.needsContext;
function P(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
}
var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function L(e, t, n) {
return y(t) ? j.grep(e, function(e, a) {
return !!t.call(e, a, e) !== n;
}) : t.nodeType ? j.grep(e, function(e) {
return e === t !== n;
}) : "string" != typeof t ? j.grep(e, function(e) {
return -1 < p.call(t, e) !== n;
}) : j.filter(t, e, n);
}
j.filter = function(e, t, n) {
var a = t[0];
return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? j.find.matchesSelector(a, e) ? [ a ] : [] : j.find.matches(e, j.grep(t, function(e) {
return 1 === e.nodeType;
}));
}, j.fn.extend({
find: function(e) {
var t, n, a = this.length, r = this;
if ("string" != typeof e) return this.pushStack(j(e).filter(function() {
for (t = 0; t < a; t++) if (j.contains(r[t], this)) return !0;
}));
for (n = this.pushStack([]), t = 0; t < a; t++) j.find(e, r[t], n);
return 1 < a ? j.uniqueSort(n) : n;
},
filter: function(e) {
return this.pushStack(L(this, e || [], !1));
},
not: function(e) {
return this.pushStack(L(this, e || [], !0));
},
is: function(e) {
return !!L(this, "string" == typeof e && F.test(e) ? j(e) : e || [], !1).length;
}
});
var M, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(j.fn.init = function(e, t, n) {
var a, r;
if (!e) return this;
if (n = n || M, "string" == typeof e) {
if (!(a = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : O.exec(e)) || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
if (a[1]) {
if (t = t instanceof j ? t[0] : t, j.merge(this, j.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), 
I.test(a[1]) && j.isPlainObject(t)) for (a in t) y(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
return this;
}
return (r = s.getElementById(a[2])) && (this[0] = r, this.length = 1), this;
}
return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(j) : j.makeArray(e, this);
}).prototype = j.fn, M = j(s);
var R = /^(?:parents|prev(?:Until|All))/, z = {
children: !0,
contents: !0,
next: !0,
prev: !0
};
function N(e, t) {
for (;(e = e[t]) && 1 !== e.nodeType; ) ;
return e;
}
j.fn.extend({
has: function(e) {
var t = j(e, this), n = t.length;
return this.filter(function() {
for (var e = 0; e < n; e++) if (j.contains(this, t[e])) return !0;
});
},
closest: function(e, t) {
var n, a = 0, r = this.length, i = [], o = "string" != typeof e && j(e);
if (!F.test(e)) for (;a < r; a++) for (n = this[a]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && j.find.matchesSelector(n, e))) {
i.push(n);
break;
}
return this.pushStack(1 < i.length ? j.uniqueSort(i) : i);
},
index: function(e) {
return e ? "string" == typeof e ? p.call(j(e), this[0]) : p.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
},
add: function(e, t) {
return this.pushStack(j.uniqueSort(j.merge(this.get(), j(e, t))));
},
addBack: function(e) {
return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
}
}), j.each({
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
return N(e, "nextSibling");
},
prev: function(e) {
return N(e, "previousSibling");
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
return T((e.parentNode || {}).firstChild, e);
},
children: function(e) {
return T(e.firstChild);
},
contents: function(e) {
return void 0 !== e.contentDocument ? e.contentDocument : (P(e, "template") && (e = e.content || e), 
j.merge([], e.childNodes));
}
}, function(e, t) {
j.fn[e] = function(n, a) {
var r = j.map(this, t, n);
return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (r = j.filter(a, r)), 
1 < this.length && (z[e] || j.uniqueSort(r), R.test(e) && r.reverse()), this.pushStack(r);
};
});
var B = /[^\x20\t\r\n\f]+/g;
function $(e) {
return e;
}
function H(e) {
throw e;
}
function q(e, t, n, a) {
var r;
try {
e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [ e ].slice(a));
} catch (e) {
n.apply(void 0, [ e ]);
}
}
j.Callbacks = function(e) {
var t, n;
e = "string" == typeof e ? (t = e, n = {}, j.each(t.match(B) || [], function(e, t) {
n[t] = !0;
}), n) : j.extend({}, e);
var a, r, i, o, s = [], u = [], c = -1, l = function() {
for (o = o || e.once, i = a = !0; u.length; c = -1) for (r = u.shift(); ++c < s.length; ) !1 === s[c].apply(r[0], r[1]) && e.stopOnFalse && (c = s.length, 
r = !1);
e.memory || (r = !1), a = !1, o && (s = r ? [] : "");
}, d = {
add: function() {
return s && (r && !a && (c = s.length - 1, u.push(r)), function t(n) {
j.each(n, function(n, a) {
y(a) ? e.unique && d.has(a) || s.push(a) : a && a.length && "string" !== x(a) && t(a);
});
}(arguments), r && !a && l()), this;
},
remove: function() {
return j.each(arguments, function(e, t) {
for (var n; -1 < (n = j.inArray(t, s, n)); ) s.splice(n, 1), n <= c && c--;
}), this;
},
has: function(e) {
return e ? -1 < j.inArray(e, s) : 0 < s.length;
},
empty: function() {
return s && (s = []), this;
},
disable: function() {
return o = u = [], s = r = "", this;
},
disabled: function() {
return !s;
},
lock: function() {
return o = u = [], r || a || (s = r = ""), this;
},
locked: function() {
return !!o;
},
fireWith: function(e, t) {
return o || (t = [ e, (t = t || []).slice ? t.slice() : t ], u.push(t), a || l()), 
this;
},
fire: function() {
return d.fireWith(this, arguments), this;
},
fired: function() {
return !!i;
}
};
return d;
}, j.extend({
Deferred: function(e) {
var t = [ [ "notify", "progress", j.Callbacks("memory"), j.Callbacks("memory"), 2 ], [ "resolve", "done", j.Callbacks("once memory"), j.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", j.Callbacks("once memory"), j.Callbacks("once memory"), 1, "rejected" ] ], a = "pending", r = {
state: function() {
return a;
},
always: function() {
return i.done(arguments).fail(arguments), this;
},
catch: function(e) {
return r.then(null, e);
},
pipe: function() {
var e = arguments;
return j.Deferred(function(n) {
j.each(t, function(t, a) {
var r = y(e[a[4]]) && e[a[4]];
i[a[1]](function() {
var e = r && r.apply(this, arguments);
e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this, r ? [ e ] : arguments);
});
}), e = null;
}).promise();
},
then: function(e, a, r) {
var i = 0;
function o(e, t, a, r) {
return function() {
var s = this, u = arguments, c = function() {
var n, c;
if (!(e < i)) {
if ((n = a.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
c = n && ("object" == typeof n || "function" == typeof n) && n.then, y(c) ? r ? c.call(n, o(i, t, $, r), o(i, t, H, r)) : (i++, 
c.call(n, o(i, t, $, r), o(i, t, H, r), o(i, t, $, t.notifyWith))) : (a !== $ && (s = void 0, 
u = [ n ]), (r || t.resolveWith)(s, u));
}
}, l = r ? c : function() {
try {
c();
} catch (n) {
j.Deferred.exceptionHook && j.Deferred.exceptionHook(n, l.stackTrace), i <= e + 1 && (a !== H && (s = void 0, 
u = [ n ]), t.rejectWith(s, u));
}
};
e ? l() : (j.Deferred.getStackHook && (l.stackTrace = j.Deferred.getStackHook()), 
n.setTimeout(l));
};
}
return j.Deferred(function(n) {
t[0][3].add(o(0, n, y(r) ? r : $, n.notifyWith)), t[1][3].add(o(0, n, y(e) ? e : $)), 
t[2][3].add(o(0, n, y(a) ? a : H));
}).promise();
},
promise: function(e) {
return null != e ? j.extend(e, r) : r;
}
}, i = {};
return j.each(t, function(e, n) {
var o = n[2], s = n[5];
r[n[1]] = o.add, s && o.add(function() {
a = s;
}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), 
i[n[0]] = function() {
return i[n[0] + "With"](this === i ? void 0 : this, arguments), this;
}, i[n[0] + "With"] = o.fireWith;
}), r.promise(i), e && e.call(i, i), i;
},
when: function(e) {
var t = arguments.length, n = t, a = Array(n), r = c.call(arguments), i = j.Deferred(), o = function(e) {
return function(n) {
a[e] = this, r[e] = 1 < arguments.length ? c.call(arguments) : n, --t || i.resolveWith(a, r);
};
};
if (t <= 1 && (q(e, i.done(o(n)).resolve, i.reject, !t), "pending" === i.state() || y(r[n] && r[n].then))) return i.then();
for (;n--; ) q(r[n], o(n), i.reject);
return i.promise();
}
});
var G = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
j.Deferred.exceptionHook = function(e, t) {
n.console && n.console.warn && e && G.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
}, j.readyException = function(e) {
n.setTimeout(function() {
throw e;
});
};
var U = j.Deferred();
function V() {
s.removeEventListener("DOMContentLoaded", V), n.removeEventListener("load", V), 
j.ready();
}
j.fn.ready = function(e) {
return U.then(e).catch(function(e) {
j.readyException(e);
}), this;
}, j.extend({
isReady: !1,
readyWait: 1,
ready: function(e) {
(!0 === e ? --j.readyWait : j.isReady) || (j.isReady = !0) !== e && 0 < --j.readyWait || U.resolveWith(s, [ j ]);
}
}), j.ready.then = U.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(j.ready) : (s.addEventListener("DOMContentLoaded", V), 
n.addEventListener("load", V));
var W = function(e, t, n, a, r, i, o) {
var s = 0, u = e.length, c = null == n;
if ("object" === x(n)) for (s in r = !0, n) W(e, t, s, n[s], !0, i, o); else if (void 0 !== a && (r = !0, 
y(a) || (o = !0), c && (o ? (t.call(e, a), t = null) : (c = t, t = function(e, t, n) {
return c.call(j(e), n);
})), t)) for (;s < u; s++) t(e[s], n, o ? a : a.call(e[s], s, t(e[s], n)));
return r ? e : c ? t.call(e) : u ? t(e[0], n) : i;
}, K = /^-ms-/, Q = /-([a-z])/g;
function Y(e, t) {
return t.toUpperCase();
}
function Z(e) {
return e.replace(K, "ms-").replace(Q, Y);
}
var X = function(e) {
return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
};
function J() {
this.expando = j.expando + J.uid++;
}
J.uid = 1, J.prototype = {
cache: function(e) {
var t = e[this.expando];
return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
value: t,
configurable: !0
}))), t;
},
set: function(e, t, n) {
var a, r = this.cache(e);
if ("string" == typeof t) r[Z(t)] = n; else for (a in t) r[Z(a)] = t[a];
return r;
},
get: function(e, t) {
return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Z(t)];
},
access: function(e, t, n) {
return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
void 0 !== n ? n : t);
},
remove: function(e, t) {
var n, a = e[this.expando];
if (void 0 !== a) {
if (void 0 !== t) {
n = (t = Array.isArray(t) ? t.map(Z) : (t = Z(t)) in a ? [ t ] : t.match(B) || []).length;
for (;n--; ) delete a[t[n]];
}
(void 0 === t || j.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
}
},
hasData: function(e) {
var t = e[this.expando];
return void 0 !== t && !j.isEmptyObject(t);
}
};
var ee = new J(), te = new J(), ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ae = /[A-Z]/g;
function re(e, t, n) {
var a, r;
if (void 0 === n && 1 === e.nodeType) if (a = "data-" + t.replace(ae, "-$&").toLowerCase(), 
"string" == typeof (n = e.getAttribute(a))) {
try {
n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : ne.test(r) ? JSON.parse(r) : r);
} catch (e) {}
te.set(e, t, n);
} else n = void 0;
return n;
}
j.extend({
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
}), j.fn.extend({
data: function(e, t) {
var n, a, r, i = this[0], o = i && i.attributes;
if (void 0 === e) {
if (this.length && (r = te.get(i), 1 === i.nodeType && !ee.get(i, "hasDataAttrs"))) {
for (n = o.length; n--; ) o[n] && 0 === (a = o[n].name).indexOf("data-") && (a = Z(a.slice(5)), 
re(i, a, r[a]));
ee.set(i, "hasDataAttrs", !0);
}
return r;
}
return "object" == typeof e ? this.each(function() {
te.set(this, e);
}) : W(this, function(t) {
var n;
if (i && void 0 === t) return void 0 !== (n = te.get(i, e)) ? n : void 0 !== (n = re(i, e)) ? n : void 0;
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
}), j.extend({
queue: function(e, t, n) {
var a;
if (e) return t = (t || "fx") + "queue", a = ee.get(e, t), n && (!a || Array.isArray(n) ? a = ee.access(e, t, j.makeArray(n)) : a.push(n)), 
a || [];
},
dequeue: function(e, t) {
t = t || "fx";
var n = j.queue(e, t), a = n.length, r = n.shift(), i = j._queueHooks(e, t);
"inprogress" === r && (r = n.shift(), a--), r && ("fx" === t && n.unshift("inprogress"), 
delete i.stop, r.call(e, function() {
j.dequeue(e, t);
}, i)), !a && i && i.empty.fire();
},
_queueHooks: function(e, t) {
var n = t + "queueHooks";
return ee.get(e, n) || ee.access(e, n, {
empty: j.Callbacks("once memory").add(function() {
ee.remove(e, [ t + "queue", n ]);
})
});
}
}), j.fn.extend({
queue: function(e, t) {
var n = 2;
return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? j.queue(this[0], e) : void 0 === t ? this : this.each(function() {
var n = j.queue(this, e, t);
j._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && j.dequeue(this, e);
});
},
dequeue: function(e) {
return this.each(function() {
j.dequeue(this, e);
});
},
clearQueue: function(e) {
return this.queue(e || "fx", []);
},
promise: function(e, t) {
var n, a = 1, r = j.Deferred(), i = this, o = this.length, s = function() {
--a || r.resolveWith(i, [ i ]);
};
for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--; ) (n = ee.get(i[o], e + "queueHooks")) && n.empty && (a++, 
n.empty.add(s));
return s(), r.promise(t);
}
});
var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"), se = [ "Top", "Right", "Bottom", "Left" ], ue = s.documentElement, ce = function(e) {
return j.contains(e.ownerDocument, e);
}, le = {
composed: !0
};
ue.getRootNode && (ce = function(e) {
return j.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
});
var de = function(e, t) {
return "none" === (e = t || e).style.display || "" === e.style.display && ce(e) && "none" === j.css(e, "display");
}, pe = function(e, t, n, a) {
var r, i, o = {};
for (i in t) o[i] = e.style[i], e.style[i] = t[i];
for (i in r = n.apply(e, a || []), t) e.style[i] = o[i];
return r;
};
function he(e, t, n, a) {
var r, i, o = 20, s = a ? function() {
return a.cur();
} : function() {
return j.css(e, t, "");
}, u = s(), c = n && n[3] || (j.cssNumber[t] ? "" : "px"), l = e.nodeType && (j.cssNumber[t] || "px" !== c && +u) && oe.exec(j.css(e, t));
if (l && l[3] !== c) {
for (u /= 2, c = c || l[3], l = +u || 1; o--; ) j.style(e, t, l + c), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (o = 0), 
l /= i;
l *= 2, j.style(e, t, l + c), n = n || [];
}
return n && (l = +l || +u || 0, r = n[1] ? l + (n[1] + 1) * n[2] : +n[2], a && (a.unit = c, 
a.start = l, a.end = r)), r;
}
var fe = {};
function ge(e, t) {
for (var n, a, r, i, o, s, u, c = [], l = 0, d = e.length; l < d; l++) (a = e[l]).style && (n = a.style.display, 
t ? ("none" === n && (c[l] = ee.get(a, "display") || null, c[l] || (a.style.display = "")), 
"" === a.style.display && de(a) && (c[l] = (u = o = i = void 0, o = (r = a).ownerDocument, 
s = r.nodeName, (u = fe[s]) || (i = o.body.appendChild(o.createElement(s)), u = j.css(i, "display"), 
i.parentNode.removeChild(i), "none" === u && (u = "block"), fe[s] = u)))) : "none" !== n && (c[l] = "none", 
ee.set(a, "display", n)));
for (l = 0; l < d; l++) null != c[l] && (e[l].style.display = c[l]);
return e;
}
j.fn.extend({
show: function() {
return ge(this, !0);
},
hide: function() {
return ge(this);
},
toggle: function(e) {
return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
de(this) ? j(this).show() : j(this).hide();
});
}
});
var me = /^(?:checkbox|radio)$/i, _e = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, be = /^$|^module$|\/(?:java|ecma)script/i, ye = {
option: [ 1, "<select multiple='multiple'>", "</select>" ],
thead: [ 1, "<table>", "</table>" ],
col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
tr: [ 2, "<table><tbody>", "</tbody></table>" ],
td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
_default: [ 0, "", "" ]
};
function ve(e, t) {
var n;
return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
void 0 === t || t && P(e, t) ? j.merge([ e ], n) : n;
}
function we(e, t) {
for (var n = 0, a = e.length; n < a; n++) ee.set(e[n], "globalEval", !t || ee.get(t[n], "globalEval"));
}
ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, 
ye.th = ye.td;
var ke, xe, De = /<|&#?\w+;/;
function je(e, t, n, a, r) {
for (var i, o, s, u, c, l, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++) if ((i = e[h]) || 0 === i) if ("object" === x(i)) j.merge(p, i.nodeType ? [ i ] : i); else if (De.test(i)) {
for (o = o || d.appendChild(t.createElement("div")), s = (_e.exec(i) || [ "", "" ])[1].toLowerCase(), 
u = ye[s] || ye._default, o.innerHTML = u[1] + j.htmlPrefilter(i) + u[2], l = u[0]; l--; ) o = o.lastChild;
j.merge(p, o.childNodes), (o = d.firstChild).textContent = "";
} else p.push(t.createTextNode(i));
for (d.textContent = "", h = 0; i = p[h++]; ) if (a && -1 < j.inArray(i, a)) r && r.push(i); else if (c = ce(i), 
o = ve(d.appendChild(i), "script"), c && we(o), n) for (l = 0; i = o[l++]; ) be.test(i.type || "") && n.push(i);
return d;
}
ke = s.createDocumentFragment().appendChild(s.createElement("div")), (xe = s.createElement("input")).setAttribute("type", "radio"), 
xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), ke.appendChild(xe), 
b.checkClone = ke.cloneNode(!0).cloneNode(!0).lastChild.checked, ke.innerHTML = "<textarea>x</textarea>", 
b.noCloneChecked = !!ke.cloneNode(!0).lastChild.defaultValue;
var Ce = /^key/, Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Se = /^([^.]*)(?:\.(.+)|)/;
function Ae() {
return !0;
}
function Te() {
return !1;
}
function Fe(e, t) {
return e === function() {
try {
return s.activeElement;
} catch (e) {}
}() == ("focus" === t);
}
function Pe(e, t, n, a, r, i) {
var o, s;
if ("object" == typeof t) {
for (s in "string" != typeof n && (a = a || n, n = void 0), t) Pe(e, s, n, a, t[s], i);
return e;
}
if (null == a && null == r ? (r = n, a = n = void 0) : null == r && ("string" == typeof n ? (r = a, 
a = void 0) : (r = a, a = n, n = void 0)), !1 === r) r = Te; else if (!r) return e;
return 1 === i && (o = r, (r = function(e) {
return j().off(e), o.apply(this, arguments);
}).guid = o.guid || (o.guid = j.guid++)), e.each(function() {
j.event.add(this, t, r, a, n);
});
}
function Ie(e, t, n) {
n ? (ee.set(e, t, !1), j.event.add(e, t, {
namespace: !1,
handler: function(e) {
var a, r, i = ee.get(this, t);
if (1 & e.isTrigger && this[t]) {
if (i.length) (j.event.special[t] || {}).delegateType && e.stopPropagation(); else if (i = c.call(arguments), 
ee.set(this, t, i), a = n(this, t), this[t](), i !== (r = ee.get(this, t)) || a ? ee.set(this, t, !1) : r = {}, 
i !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value;
} else i.length && (ee.set(this, t, {
value: j.event.trigger(j.extend(i[0], j.Event.prototype), i.slice(1), this)
}), e.stopImmediatePropagation());
}
})) : void 0 === ee.get(e, t) && j.event.add(e, t, Ae);
}
j.event = {
global: {},
add: function(e, t, n, a, r) {
var i, o, s, u, c, l, d, p, h, f, g, m = ee.get(e);
if (m) for (n.handler && (n = (i = n).handler, r = i.selector), r && j.find.matchesSelector(ue, r), 
n.guid || (n.guid = j.guid++), (u = m.events) || (u = m.events = {}), (o = m.handle) || (o = m.handle = function(t) {
return void 0 !== j && j.event.triggered !== t.type ? j.event.dispatch.apply(e, arguments) : void 0;
}), c = (t = (t || "").match(B) || [ "" ]).length; c--; ) h = g = (s = Se.exec(t[c]) || [])[1], 
f = (s[2] || "").split(".").sort(), h && (d = j.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, 
d = j.event.special[h] || {}, l = j.extend({
type: h,
origType: g,
data: a,
handler: n,
guid: n.guid,
selector: r,
needsContext: r && j.expr.match.needsContext.test(r),
namespace: f.join(".")
}, i), (p = u[h]) || ((p = u[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, a, f, o) || e.addEventListener && e.addEventListener(h, o)), 
d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, l) : p.push(l), 
j.event.global[h] = !0);
},
remove: function(e, t, n, a, r) {
var i, o, s, u, c, l, d, p, h, f, g, m = ee.hasData(e) && ee.get(e);
if (m && (u = m.events)) {
for (c = (t = (t || "").match(B) || [ "" ]).length; c--; ) if (h = g = (s = Se.exec(t[c]) || [])[1], 
f = (s[2] || "").split(".").sort(), h) {
for (d = j.event.special[h] || {}, p = u[h = (a ? d.delegateType : d.bindType) || h] || [], 
s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = i = p.length; i--; ) l = p[i], 
!r && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || a && a !== l.selector && ("**" !== a || !l.selector) || (p.splice(i, 1), 
l.selector && p.delegateCount--, d.remove && d.remove.call(e, l));
o && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || j.removeEvent(e, h, m.handle), 
delete u[h]);
} else for (h in u) j.event.remove(e, h + t[c], n, a, !0);
j.isEmptyObject(u) && ee.remove(e, "handle events");
}
},
dispatch: function(e) {
var t, n, a, r, i, o, s = j.event.fix(e), u = new Array(arguments.length), c = (ee.get(this, "events") || {})[s.type] || [], l = j.event.special[s.type] || {};
for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
for (o = j.event.handlers.call(this, s, c), t = 0; (r = o[t++]) && !s.isPropagationStopped(); ) for (s.currentTarget = r.elem, 
n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped(); ) s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, 
s.data = i.data, void 0 !== (a = ((j.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, u)) && !1 === (s.result = a) && (s.preventDefault(), 
s.stopPropagation()));
return l.postDispatch && l.postDispatch.call(this, s), s.result;
}
},
handlers: function(e, t) {
var n, a, r, i, o, s = [], u = t.delegateCount, c = e.target;
if (u && c.nodeType && !("click" === e.type && 1 <= e.button)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
for (i = [], o = {}, n = 0; n < u; n++) void 0 === o[r = (a = t[n]).selector + " "] && (o[r] = a.needsContext ? -1 < j(r, this).index(c) : j.find(r, this, null, [ c ]).length), 
o[r] && i.push(a);
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
Object.defineProperty(j.Event.prototype, e, {
enumerable: !0,
configurable: !0,
get: y(t) ? function() {
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
return e[j.expando] ? e : new j.Event(e);
},
special: {
load: {
noBubble: !0
},
click: {
setup: function(e) {
var t = this || e;
return me.test(t.type) && t.click && P(t, "input") && Ie(t, "click", Ae), !1;
},
trigger: function(e) {
var t = this || e;
return me.test(t.type) && t.click && P(t, "input") && Ie(t, "click"), !0;
},
_default: function(e) {
var t = e.target;
return me.test(t.type) && t.click && P(t, "input") && ee.get(t, "click") || P(t, "a");
}
},
beforeunload: {
postDispatch: function(e) {
void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
}
}
}
}, j.removeEvent = function(e, t, n) {
e.removeEventListener && e.removeEventListener(t, n);
}, j.Event = function(e, t) {
if (!(this instanceof j.Event)) return new j.Event(e, t);
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Te, 
this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
t && j.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[j.expando] = !0;
}, j.Event.prototype = {
constructor: j.Event,
isDefaultPrevented: Te,
isPropagationStopped: Te,
isImmediatePropagationStopped: Te,
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
}, j.each({
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
}, j.event.addProp), j.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
j.event.special[e] = {
setup: function() {
return Ie(this, e, Fe), !1;
},
trigger: function() {
return Ie(this, e), !0;
},
delegateType: t
};
}), j.each({
mouseenter: "mouseover",
mouseleave: "mouseout",
pointerenter: "pointerover",
pointerleave: "pointerout"
}, function(e, t) {
j.event.special[e] = {
delegateType: t,
bindType: t,
handle: function(e) {
var n, a = e.relatedTarget, r = e.handleObj;
return a && (a === this || j.contains(this, a)) || (e.type = r.origType, n = r.handler.apply(this, arguments), 
e.type = t), n;
}
};
}), j.fn.extend({
on: function(e, t, n, a) {
return Pe(this, e, t, n, a);
},
one: function(e, t, n, a) {
return Pe(this, e, t, n, a, 1);
},
off: function(e, t, n) {
var a, r;
if (e && e.preventDefault && e.handleObj) return a = e.handleObj, j(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), 
this;
if ("object" == typeof e) {
for (r in e) this.off(r, t, e[r]);
return this;
}
return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), 
this.each(function() {
j.event.remove(this, e, n, t);
});
}
});
var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Me = /<script|<style|<link/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function ze(e, t) {
return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && j(e).children("tbody")[0] || e;
}
function Ne(e) {
return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
}
function Be(e) {
return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
e;
}
function $e(e, t) {
var n, a, r, i, o, s, u, c;
if (1 === t.nodeType) {
if (ee.hasData(e) && (i = ee.access(e), o = ee.set(t, i), c = i.events)) for (r in delete o.handle, 
o.events = {}, c) for (n = 0, a = c[r].length; n < a; n++) j.event.add(t, r, c[r][n]);
te.hasData(e) && (s = te.access(e), u = j.extend({}, s), te.set(t, u));
}
}
function He(e, t, n, a) {
t = l.apply([], t);
var r, i, o, s, u, c, d = 0, p = e.length, h = p - 1, f = t[0], g = y(f);
if (g || 1 < p && "string" == typeof f && !b.checkClone && Oe.test(f)) return e.each(function(r) {
var i = e.eq(r);
g && (t[0] = f.call(this, r, i.html())), He(i, t, n, a);
});
if (p && (i = (r = je(t, e[0].ownerDocument, !1, e, a)).firstChild, 1 === r.childNodes.length && (r = i), 
i || a)) {
for (s = (o = j.map(ve(r, "script"), Ne)).length; d < p; d++) u = r, d !== h && (u = j.clone(u, !0, !0), 
s && j.merge(o, ve(u, "script"))), n.call(e[d], u, d);
if (s) for (c = o[o.length - 1].ownerDocument, j.map(o, Be), d = 0; d < s; d++) u = o[d], 
be.test(u.type || "") && !ee.access(u, "globalEval") && j.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? j._evalUrl && !u.noModule && j._evalUrl(u.src, {
nonce: u.nonce || u.getAttribute("nonce")
}) : k(u.textContent.replace(Re, ""), u, c));
}
return e;
}
function qe(e, t, n) {
for (var a, r = t ? j.filter(t, e) : e, i = 0; null != (a = r[i]); i++) n || 1 !== a.nodeType || j.cleanData(ve(a)), 
a.parentNode && (n && ce(a) && we(ve(a, "script")), a.parentNode.removeChild(a));
return e;
}
j.extend({
htmlPrefilter: function(e) {
return e.replace(Le, "<$1></$2>");
},
clone: function(e, t, n) {
var a, r, i, o, s, u, c, l = e.cloneNode(!0), d = ce(e);
if (!(b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || j.isXMLDoc(e))) for (o = ve(l), 
a = 0, r = (i = ve(e)).length; a < r; a++) s = i[a], "input" === (c = (u = o[a]).nodeName.toLowerCase()) && me.test(s.type) ? u.checked = s.checked : "input" !== c && "textarea" !== c || (u.defaultValue = s.defaultValue);
if (t) if (n) for (i = i || ve(e), o = o || ve(l), a = 0, r = i.length; a < r; a++) $e(i[a], o[a]); else $e(e, l);
return 0 < (o = ve(l, "script")).length && we(o, !d && ve(e, "script")), l;
},
cleanData: function(e) {
for (var t, n, a, r = j.event.special, i = 0; void 0 !== (n = e[i]); i++) if (X(n)) {
if (t = n[ee.expando]) {
if (t.events) for (a in t.events) r[a] ? j.event.remove(n, a) : j.removeEvent(n, a, t.handle);
n[ee.expando] = void 0;
}
n[te.expando] && (n[te.expando] = void 0);
}
}
}), j.fn.extend({
detach: function(e) {
return qe(this, e, !0);
},
remove: function(e) {
return qe(this, e);
},
text: function(e) {
return W(this, function(e) {
return void 0 === e ? j.text(this) : this.empty().each(function() {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
});
}, null, e, arguments.length);
},
append: function() {
return He(this, arguments, function(e) {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ze(this, e).appendChild(e);
});
},
prepend: function() {
return He(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = ze(this, e);
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
for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (j.cleanData(ve(e, !1)), 
e.textContent = "");
return this;
},
clone: function(e, t) {
return e = null != e && e, t = null == t ? e : t, this.map(function() {
return j.clone(this, e, t);
});
},
html: function(e) {
return W(this, function(e) {
var t = this[0] || {}, n = 0, a = this.length;
if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
if ("string" == typeof e && !Me.test(e) && !ye[(_e.exec(e) || [ "", "" ])[1].toLowerCase()]) {
e = j.htmlPrefilter(e);
try {
for (;n < a; n++) 1 === (t = this[n] || {}).nodeType && (j.cleanData(ve(t, !1)), 
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
j.inArray(this, e) < 0 && (j.cleanData(ve(this)), n && n.replaceChild(t, this));
}, e);
}
}), j.each({
appendTo: "append",
prependTo: "prepend",
insertBefore: "before",
insertAfter: "after",
replaceAll: "replaceWith"
}, function(e, t) {
j.fn[e] = function(e) {
for (var n, a = [], r = j(e), i = r.length - 1, o = 0; o <= i; o++) n = o === i ? this : this.clone(!0), 
j(r[o])[t](n), d.apply(a, n.get());
return this.pushStack(a);
};
});
var Ge = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"), Ue = function(e) {
var t = e.ownerDocument.defaultView;
return t && t.opener || (t = n), t.getComputedStyle(e);
}, Ve = new RegExp(se.join("|"), "i");
function We(e, t, n) {
var a, r, i, o, s = e.style;
return (n = n || Ue(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || ce(e) || (o = j.style(e, t)), 
!b.pixelBoxStyles() && Ge.test(o) && Ve.test(t) && (a = s.width, r = s.minWidth, 
i = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = a, 
s.minWidth = r, s.maxWidth = i)), void 0 !== o ? o + "" : o;
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
if (l) {
c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
ue.appendChild(c).appendChild(l);
var e = n.getComputedStyle(l);
a = "1%" !== e.top, u = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), 
r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), 
ue.removeChild(c), l = null;
}
}
function t(e) {
return Math.round(parseFloat(e));
}
var a, r, i, o, u, c = s.createElement("div"), l = s.createElement("div");
l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
b.clearCloneStyle = "content-box" === l.style.backgroundClip, j.extend(b, {
boxSizingReliable: function() {
return e(), r;
},
pixelBoxStyles: function() {
return e(), o;
},
pixelPosition: function() {
return e(), a;
},
reliableMarginLeft: function() {
return e(), u;
},
scrollboxSize: function() {
return e(), i;
}
}));
}();
var Qe = [ "Webkit", "Moz", "ms" ], Ye = s.createElement("div").style, Ze = {};
function Xe(e) {
var t;
return j.cssProps[e] || Ze[e] || (e in Ye ? e : Ze[e] = function(e) {
for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--; ) if ((e = Qe[n] + t) in Ye) return e;
}(e) || e);
}
var Je = /^(none|table(?!-c[ea]).+)/, et = /^--/, tt = {
position: "absolute",
visibility: "hidden",
display: "block"
}, nt = {
letterSpacing: "0",
fontWeight: "400"
};
function at(e, t, n) {
var a = oe.exec(t);
return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t;
}
function rt(e, t, n, a, r, i) {
var o = "width" === t ? 1 : 0, s = 0, u = 0;
if (n === (a ? "border" : "content")) return 0;
for (;o < 4; o += 2) "margin" === n && (u += j.css(e, n + se[o], !0, r)), a ? ("content" === n && (u -= j.css(e, "padding" + se[o], !0, r)), 
"margin" !== n && (u -= j.css(e, "border" + se[o] + "Width", !0, r))) : (u += j.css(e, "padding" + se[o], !0, r), 
"padding" !== n ? u += j.css(e, "border" + se[o] + "Width", !0, r) : s += j.css(e, "border" + se[o] + "Width", !0, r));
return !a && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), 
u;
}
function it(e, t, n) {
var a = Ue(e), r = (!b.boxSizingReliable() || n) && "border-box" === j.css(e, "boxSizing", !1, a), i = r, o = We(e, t, a), s = "offset" + t[0].toUpperCase() + t.slice(1);
if (Ge.test(o)) {
if (!n) return o;
o = "auto";
}
return (!b.boxSizingReliable() && r || "auto" === o || !parseFloat(o) && "inline" === j.css(e, "display", !1, a)) && e.getClientRects().length && (r = "border-box" === j.css(e, "boxSizing", !1, a), 
(i = s in e) && (o = e[s])), (o = parseFloat(o) || 0) + rt(e, t, n || (r ? "border" : "content"), i, a, o) + "px";
}
function ot(e, t, n, a, r) {
return new ot.prototype.init(e, t, n, a, r);
}
j.extend({
cssHooks: {
opacity: {
get: function(e, t) {
if (t) {
var n = We(e, "opacity");
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
style: function(e, t, n, a) {
if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
var r, i, o, s = Z(t), u = et.test(t), c = e.style;
if (u || (t = Xe(s)), o = j.cssHooks[t] || j.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, a)) ? r : c[t];
"string" == (i = typeof n) && (r = oe.exec(n)) && r[1] && (n = he(e, t, r), i = "number"), 
null != n && n == n && ("number" !== i || u || (n += r && r[3] || (j.cssNumber[s] ? "" : "px")), 
b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
o && "set" in o && void 0 === (n = o.set(e, n, a)) || (u ? c.setProperty(t, n) : c[t] = n));
}
},
css: function(e, t, n, a) {
var r, i, o, s = Z(t);
return et.test(t) || (t = Xe(s)), (o = j.cssHooks[t] || j.cssHooks[s]) && "get" in o && (r = o.get(e, !0, n)), 
void 0 === r && (r = We(e, t, a)), "normal" === r && t in nt && (r = nt[t]), "" === n || n ? (i = parseFloat(r), 
!0 === n || isFinite(i) ? i || 0 : r) : r;
}
}), j.each([ "height", "width" ], function(e, t) {
j.cssHooks[t] = {
get: function(e, n, a) {
if (n) return !Je.test(j.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, a) : pe(e, tt, function() {
return it(e, t, a);
});
},
set: function(e, n, a) {
var r, i = Ue(e), o = !b.scrollboxSize() && "absolute" === i.position, s = (o || a) && "border-box" === j.css(e, "boxSizing", !1, i), u = a ? rt(e, t, a, s, i) : 0;
return s && o && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - rt(e, t, "border", !1, i) - .5)), 
u && (r = oe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = j.css(e, t)), 
at(0, n, u);
}
};
}), j.cssHooks.marginLeft = Ke(b.reliableMarginLeft, function(e, t) {
if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - pe(e, {
marginLeft: 0
}, function() {
return e.getBoundingClientRect().left;
})) + "px";
}), j.each({
margin: "",
padding: "",
border: "Width"
}, function(e, t) {
j.cssHooks[e + t] = {
expand: function(n) {
for (var a = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [ n ]; a < 4; a++) r[e + se[a] + t] = i[a] || i[a - 2] || i[0];
return r;
}
}, "margin" !== e && (j.cssHooks[e + t].set = at);
}), j.fn.extend({
css: function(e, t) {
return W(this, function(e, t, n) {
var a, r, i = {}, o = 0;
if (Array.isArray(t)) {
for (a = Ue(e), r = t.length; o < r; o++) i[t[o]] = j.css(e, t[o], !1, a);
return i;
}
return void 0 !== n ? j.style(e, t, n) : j.css(e, t);
}, e, t, 1 < arguments.length);
}
}), ((j.Tween = ot).prototype = {
constructor: ot,
init: function(e, t, n, a, r, i) {
this.elem = e, this.prop = n, this.easing = r || j.easing._default, this.options = t, 
this.start = this.now = this.cur(), this.end = a, this.unit = i || (j.cssNumber[n] ? "" : "px");
},
cur: function() {
var e = ot.propHooks[this.prop];
return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
},
run: function(e) {
var t, n = ot.propHooks[this.prop];
return this.options.duration ? this.pos = t = j.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
n && n.set ? n.set(this) : ot.propHooks._default.set(this), this;
}
}).init.prototype = ot.prototype, (ot.propHooks = {
_default: {
get: function(e) {
var t;
return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = j.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
},
set: function(e) {
j.fx.step[e.prop] ? j.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !j.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : j.style(e.elem, e.prop, e.now + e.unit);
}
}
}).scrollTop = ot.propHooks.scrollLeft = {
set: function(e) {
e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
}
}, j.easing = {
linear: function(e) {
return e;
},
swing: function(e) {
return .5 - Math.cos(e * Math.PI) / 2;
},
_default: "swing"
}, j.fx = ot.prototype.init, j.fx.step = {};
var st, ut, ct, lt, dt = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
function ht() {
ut && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ht) : n.setTimeout(ht, j.fx.interval), 
j.fx.tick());
}
function ft() {
return n.setTimeout(function() {
st = void 0;
}), st = Date.now();
}
function gt(e, t) {
var n, a = 0, r = {
height: e
};
for (t = t ? 1 : 0; a < 4; a += 2 - t) r["margin" + (n = se[a])] = r["padding" + n] = e;
return t && (r.opacity = r.width = e), r;
}
function mt(e, t, n) {
for (var a, r = (_t.tweeners[t] || []).concat(_t.tweeners["*"]), i = 0, o = r.length; i < o; i++) if (a = r[i].call(n, t, e)) return a;
}
function _t(e, t, n) {
var a, r, i = 0, o = _t.prefilters.length, s = j.Deferred().always(function() {
delete u.elem;
}), u = function() {
if (r) return !1;
for (var t = st || ft(), n = Math.max(0, c.startTime + c.duration - t), a = 1 - (n / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(a);
return s.notifyWith(e, [ c, a, n ]), a < 1 && o ? n : (o || s.notifyWith(e, [ c, 1, 0 ]), 
s.resolveWith(e, [ c ]), !1);
}, c = s.promise({
elem: e,
props: j.extend({}, t),
opts: j.extend(!0, {
specialEasing: {},
easing: j.easing._default
}, n),
originalProperties: t,
originalOptions: n,
startTime: st || ft(),
duration: n.duration,
tweens: [],
createTween: function(t, n) {
var a = j.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
return c.tweens.push(a), a;
},
stop: function(t) {
var n = 0, a = t ? c.tweens.length : 0;
if (r) return this;
for (r = !0; n < a; n++) c.tweens[n].run(1);
return t ? (s.notifyWith(e, [ c, 1, 0 ]), s.resolveWith(e, [ c, t ])) : s.rejectWith(e, [ c, t ]), 
this;
}
}), l = c.props;
for (function(e, t) {
var n, a, r, i, o;
for (n in e) if (r = t[a = Z(n)], i = e[n], Array.isArray(i) && (r = i[1], i = e[n] = i[0]), 
n !== a && (e[a] = i, delete e[n]), (o = j.cssHooks[a]) && "expand" in o) for (n in i = o.expand(i), 
delete e[a], i) n in e || (e[n] = i[n], t[n] = r); else t[a] = r;
}(l, c.opts.specialEasing); i < o; i++) if (a = _t.prefilters[i].call(c, e, l, c.opts)) return y(a.stop) && (j._queueHooks(c.elem, c.opts.queue).stop = a.stop.bind(a)), 
a;
return j.map(l, mt, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), 
j.fx.timer(j.extend(u, {
elem: e,
anim: c,
queue: c.opts.queue
})), c;
}
j.Animation = j.extend(_t, {
tweeners: {
"*": [ function(e, t) {
var n = this.createTween(e, t);
return he(n.elem, e, oe.exec(t), n), n;
} ]
},
tweener: function(e, t) {
y(e) ? (t = e, e = [ "*" ]) : e = e.match(B);
for (var n, a = 0, r = e.length; a < r; a++) n = e[a], _t.tweeners[n] = _t.tweeners[n] || [], 
_t.tweeners[n].unshift(t);
},
prefilters: [ function(e, t, n) {
var a, r, i, o, s, u, c, l, d = "width" in t || "height" in t, p = this, h = {}, f = e.style, g = e.nodeType && de(e), m = ee.get(e, "fxshow");
for (a in n.queue || (null == (o = j._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, 
s = o.empty.fire, o.empty.fire = function() {
o.unqueued || s();
}), o.unqueued++, p.always(function() {
p.always(function() {
o.unqueued--, j.queue(e, "fx").length || o.empty.fire();
});
})), t) if (r = t[a], dt.test(r)) {
if (delete t[a], i = i || "toggle" === r, r === (g ? "hide" : "show")) {
if ("show" !== r || !m || void 0 === m[a]) continue;
g = !0;
}
h[a] = m && m[a] || j.style(e, a);
}
if ((u = !j.isEmptyObject(t)) || !j.isEmptyObject(h)) for (a in d && 1 === e.nodeType && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
null == (c = m && m.display) && (c = ee.get(e, "display")), "none" === (l = j.css(e, "display")) && (c ? l = c : (ge([ e ], !0), 
c = e.style.display || c, l = j.css(e, "display"), ge([ e ]))), ("inline" === l || "inline-block" === l && null != c) && "none" === j.css(e, "float") && (u || (p.done(function() {
f.display = c;
}), null == c && (l = f.display, c = "none" === l ? "" : l)), f.display = "inline-block")), 
n.overflow && (f.overflow = "hidden", p.always(function() {
f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
})), u = !1, h) u || (m ? "hidden" in m && (g = m.hidden) : m = ee.access(e, "fxshow", {
display: c
}), i && (m.hidden = !g), g && ge([ e ], !0), p.done(function() {
for (a in g || ge([ e ]), ee.remove(e, "fxshow"), h) j.style(e, a, h[a]);
})), u = mt(g ? m[a] : 0, a, p), a in m || (m[a] = u.start, g && (u.end = u.start, 
u.start = 0));
} ],
prefilter: function(e, t) {
t ? _t.prefilters.unshift(e) : _t.prefilters.push(e);
}
}), j.speed = function(e, t, n) {
var a = e && "object" == typeof e ? j.extend({}, e) : {
complete: n || !n && t || y(e) && e,
duration: e,
easing: n && t || t && !y(t) && t
};
return j.fx.off ? a.duration = 0 : "number" != typeof a.duration && (a.duration in j.fx.speeds ? a.duration = j.fx.speeds[a.duration] : a.duration = j.fx.speeds._default), 
null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
y(a.old) && a.old.call(this), a.queue && j.dequeue(this, a.queue);
}, a;
}, j.fn.extend({
fadeTo: function(e, t, n, a) {
return this.filter(de).css("opacity", 0).show().end().animate({
opacity: t
}, e, n, a);
},
animate: function(e, t, n, a) {
var r = j.isEmptyObject(e), i = j.speed(t, n, a), o = function() {
var t = _t(this, j.extend({}, e), i);
(r || ee.get(this, "finish")) && t.stop(!0);
};
return o.finish = o, r || !1 === i.queue ? this.each(o) : this.queue(i.queue, o);
},
stop: function(e, t, n) {
var a = function(e) {
var t = e.stop;
delete e.stop, t(n);
};
return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
this.each(function() {
var t = !0, r = null != e && e + "queueHooks", i = j.timers, o = ee.get(this);
if (r) o[r] && o[r].stop && a(o[r]); else for (r in o) o[r] && o[r].stop && pt.test(r) && a(o[r]);
for (r = i.length; r--; ) i[r].elem !== this || null != e && i[r].queue !== e || (i[r].anim.stop(n), 
t = !1, i.splice(r, 1));
!t && n || j.dequeue(this, e);
});
},
finish: function(e) {
return !1 !== e && (e = e || "fx"), this.each(function() {
var t, n = ee.get(this), a = n[e + "queue"], r = n[e + "queueHooks"], i = j.timers, o = a ? a.length : 0;
for (n.finish = !0, j.queue(this, e, []), r && r.stop && r.stop.call(this, !0), 
t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
i.splice(t, 1));
for (t = 0; t < o; t++) a[t] && a[t].finish && a[t].finish.call(this);
delete n.finish;
});
}
}), j.each([ "toggle", "show", "hide" ], function(e, t) {
var n = j.fn[t];
j.fn[t] = function(e, a, r) {
return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(gt(t, !0), e, a, r);
};
}), j.each({
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
j.fn[e] = function(e, n, a) {
return this.animate(t, e, n, a);
};
}), j.timers = [], j.fx.tick = function() {
var e, t = 0, n = j.timers;
for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
n.length || j.fx.stop(), st = void 0;
}, j.fx.timer = function(e) {
j.timers.push(e), j.fx.start();
}, j.fx.interval = 13, j.fx.start = function() {
ut || (ut = !0, ht());
}, j.fx.stop = function() {
ut = null;
}, j.fx.speeds = {
slow: 600,
fast: 200,
_default: 400
}, j.fn.delay = function(e, t) {
return e = j.fx && j.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, a) {
var r = n.setTimeout(t, e);
a.stop = function() {
n.clearTimeout(r);
};
});
}, ct = s.createElement("input"), lt = s.createElement("select").appendChild(s.createElement("option")), 
ct.type = "checkbox", b.checkOn = "" !== ct.value, b.optSelected = lt.selected, 
(ct = s.createElement("input")).value = "t", ct.type = "radio", b.radioValue = "t" === ct.value;
var bt, yt = j.expr.attrHandle;
j.fn.extend({
attr: function(e, t) {
return W(this, j.attr, e, t, 1 < arguments.length);
},
removeAttr: function(e) {
return this.each(function() {
j.removeAttr(this, e);
});
}
}), j.extend({
attr: function(e, t, n) {
var a, r, i = e.nodeType;
if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? j.prop(e, t, n) : (1 === i && j.isXMLDoc(e) || (r = j.attrHooks[t.toLowerCase()] || (j.expr.match.bool.test(t) ? bt : void 0)), 
void 0 !== n ? null === n ? void j.removeAttr(e, t) : r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), 
n) : r && "get" in r && null !== (a = r.get(e, t)) ? a : null == (a = j.find.attr(e, t)) ? void 0 : a);
},
attrHooks: {
type: {
set: function(e, t) {
if (!b.radioValue && "radio" === t && P(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
}
},
removeAttr: function(e, t) {
var n, a = 0, r = t && t.match(B);
if (r && 1 === e.nodeType) for (;n = r[a++]; ) e.removeAttribute(n);
}
}), bt = {
set: function(e, t, n) {
return !1 === t ? j.removeAttr(e, n) : e.setAttribute(n, n), n;
}
}, j.each(j.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = yt[t] || j.find.attr;
yt[t] = function(e, t, a) {
var r, i, o = t.toLowerCase();
return a || (i = yt[o], yt[o] = r, r = null != n(e, t, a) ? o : null, yt[o] = i), 
r;
};
});
var vt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
function kt(e) {
return (e.match(B) || []).join(" ");
}
function xt(e) {
return e.getAttribute && e.getAttribute("class") || "";
}
function Dt(e) {
return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || [];
}
j.fn.extend({
prop: function(e, t) {
return W(this, j.prop, e, t, 1 < arguments.length);
},
removeProp: function(e) {
return this.each(function() {
delete this[j.propFix[e] || e];
});
}
}), j.extend({
prop: function(e, t, n) {
var a, r, i = e.nodeType;
if (3 !== i && 8 !== i && 2 !== i) return 1 === i && j.isXMLDoc(e) || (t = j.propFix[t] || t, 
r = j.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : e[t] = n : r && "get" in r && null !== (a = r.get(e, t)) ? a : e[t];
},
propHooks: {
tabIndex: {
get: function(e) {
var t = j.find.attr(e, "tabindex");
return t ? parseInt(t, 10) : vt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
}
}
},
propFix: {
for: "htmlFor",
class: "className"
}
}), b.optSelected || (j.propHooks.selected = {
get: function(e) {
var t = e.parentNode;
return t && t.parentNode && t.parentNode.selectedIndex, null;
},
set: function(e) {
var t = e.parentNode;
t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
}
}), j.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
j.propFix[this.toLowerCase()] = this;
}), j.fn.extend({
addClass: function(e) {
var t, n, a, r, i, o, s, u = 0;
if (y(e)) return this.each(function(t) {
j(this).addClass(e.call(this, t, xt(this)));
});
if ((t = Dt(e)).length) for (;n = this[u++]; ) if (r = xt(n), a = 1 === n.nodeType && " " + kt(r) + " ") {
for (o = 0; i = t[o++]; ) a.indexOf(" " + i + " ") < 0 && (a += i + " ");
r !== (s = kt(a)) && n.setAttribute("class", s);
}
return this;
},
removeClass: function(e) {
var t, n, a, r, i, o, s, u = 0;
if (y(e)) return this.each(function(t) {
j(this).removeClass(e.call(this, t, xt(this)));
});
if (!arguments.length) return this.attr("class", "");
if ((t = Dt(e)).length) for (;n = this[u++]; ) if (r = xt(n), a = 1 === n.nodeType && " " + kt(r) + " ") {
for (o = 0; i = t[o++]; ) for (;-1 < a.indexOf(" " + i + " "); ) a = a.replace(" " + i + " ", " ");
r !== (s = kt(a)) && n.setAttribute("class", s);
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, a = "string" === n || Array.isArray(e);
return "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function(n) {
j(this).toggleClass(e.call(this, n, xt(this), t), t);
}) : this.each(function() {
var t, r, i, o;
if (a) for (r = 0, i = j(this), o = Dt(e); t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = xt(this)) && ee.set(this, "__className__", t), 
this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ee.get(this, "__className__") || ""));
});
},
hasClass: function(e) {
var t, n, a = 0;
for (t = " " + e + " "; n = this[a++]; ) if (1 === n.nodeType && -1 < (" " + kt(xt(n)) + " ").indexOf(t)) return !0;
return !1;
}
});
var jt = /\r/g;
j.fn.extend({
val: function(e) {
var t, n, a, r = this[0];
return arguments.length ? (a = y(e), this.each(function(n) {
var r;
1 === this.nodeType && (null == (r = a ? e.call(this, n, j(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = j.map(r, function(e) {
return null == e ? "" : e + "";
})), (t = j.valHooks[this.type] || j.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
})) : r ? (t = j.valHooks[r.type] || j.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(jt, "") : null == n ? "" : n : void 0;
}
}), j.extend({
valHooks: {
option: {
get: function(e) {
var t = j.find.attr(e, "value");
return null != t ? t : kt(j.text(e));
}
},
select: {
get: function(e) {
var t, n, a, r = e.options, i = e.selectedIndex, o = "select-one" === e.type, s = o ? null : [], u = o ? i + 1 : r.length;
for (a = i < 0 ? u : o ? i : 0; a < u; a++) if (((n = r[a]).selected || a === i) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
if (t = j(n).val(), o) return t;
s.push(t);
}
return s;
},
set: function(e, t) {
for (var n, a, r = e.options, i = j.makeArray(t), o = r.length; o--; ) ((a = r[o]).selected = -1 < j.inArray(j.valHooks.option.get(a), i)) && (n = !0);
return n || (e.selectedIndex = -1), i;
}
}
}
}), j.each([ "radio", "checkbox" ], function() {
j.valHooks[this] = {
set: function(e, t) {
if (Array.isArray(t)) return e.checked = -1 < j.inArray(j(e).val(), t);
}
}, b.checkOn || (j.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" : e.value;
});
}), b.focusin = "onfocusin" in n;
var Ct = /^(?:focusinfocus|focusoutblur)$/, Et = function(e) {
e.stopPropagation();
};
j.extend(j.event, {
trigger: function(e, t, a, r) {
var i, o, u, c, l, d, p, h, f = [ a || s ], m = g.call(e, "type") ? e.type : e, _ = g.call(e, "namespace") ? e.namespace.split(".") : [];
if (o = h = u = a = a || s, 3 !== a.nodeType && 8 !== a.nodeType && !Ct.test(m + j.event.triggered) && (-1 < m.indexOf(".") && (m = (_ = m.split(".")).shift(), 
_.sort()), l = m.indexOf(":") < 0 && "on" + m, (e = e[j.expando] ? e : new j.Event(m, "object" == typeof e && e)).isTrigger = r ? 2 : 3, 
e.namespace = _.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
e.result = void 0, e.target || (e.target = a), t = null == t ? [ e ] : j.makeArray(t, [ e ]), 
p = j.event.special[m] || {}, r || !p.trigger || !1 !== p.trigger.apply(a, t))) {
if (!r && !p.noBubble && !v(a)) {
for (c = p.delegateType || m, Ct.test(c + m) || (o = o.parentNode); o; o = o.parentNode) f.push(o), 
u = o;
u === (a.ownerDocument || s) && f.push(u.defaultView || u.parentWindow || n);
}
for (i = 0; (o = f[i++]) && !e.isPropagationStopped(); ) h = o, e.type = 1 < i ? c : p.bindType || m, 
(d = (ee.get(o, "events") || {})[e.type] && ee.get(o, "handle")) && d.apply(o, t), 
(d = l && o[l]) && d.apply && X(o) && (e.result = d.apply(o, t), !1 === e.result && e.preventDefault());
return e.type = m, r || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(f.pop(), t) || !X(a) || l && y(a[m]) && !v(a) && ((u = a[l]) && (a[l] = null), 
j.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, Et), a[m](), 
e.isPropagationStopped() && h.removeEventListener(m, Et), j.event.triggered = void 0, 
u && (a[l] = u)), e.result;
}
},
simulate: function(e, t, n) {
var a = j.extend(new j.Event(), n, {
type: e,
isSimulated: !0
});
j.event.trigger(a, null, t);
}
}), j.fn.extend({
trigger: function(e, t) {
return this.each(function() {
j.event.trigger(e, t, this);
});
},
triggerHandler: function(e, t) {
var n = this[0];
if (n) return j.event.trigger(e, t, n, !0);
}
}), b.focusin || j.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
var n = function(e) {
j.event.simulate(t, e.target, j.event.fix(e));
};
j.event.special[t] = {
setup: function() {
var a = this.ownerDocument || this, r = ee.access(a, t);
r || a.addEventListener(e, n, !0), ee.access(a, t, (r || 0) + 1);
},
teardown: function() {
var a = this.ownerDocument || this, r = ee.access(a, t) - 1;
r ? ee.access(a, t, r) : (a.removeEventListener(e, n, !0), ee.remove(a, t));
}
};
});
var St = n.location, At = Date.now(), Tt = /\?/;
j.parseXML = function(e) {
var t;
if (!e || "string" != typeof e) return null;
try {
t = new n.DOMParser().parseFromString(e, "text/xml");
} catch (e) {
t = void 0;
}
return t && !t.getElementsByTagName("parsererror").length || j.error("Invalid XML: " + e), 
t;
};
var Ft = /\[\]$/, Pt = /\r?\n/g, It = /^(?:submit|button|image|reset|file)$/i, Lt = /^(?:input|select|textarea|keygen)/i;
function Mt(e, t, n, a) {
var r;
if (Array.isArray(t)) j.each(t, function(t, r) {
n || Ft.test(e) ? a(e, r) : Mt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, a);
}); else if (n || "object" !== x(t)) a(e, t); else for (r in t) Mt(e + "[" + r + "]", t[r], n, a);
}
j.param = function(e, t) {
var n, a = [], r = function(e, t) {
var n = y(t) ? t() : t;
a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
};
if (null == e) return "";
if (Array.isArray(e) || e.jquery && !j.isPlainObject(e)) j.each(e, function() {
r(this.name, this.value);
}); else for (n in e) Mt(n, e[n], t, r);
return a.join("&");
}, j.fn.extend({
serialize: function() {
return j.param(this.serializeArray());
},
serializeArray: function() {
return this.map(function() {
var e = j.prop(this, "elements");
return e ? j.makeArray(e) : this;
}).filter(function() {
var e = this.type;
return this.name && !j(this).is(":disabled") && Lt.test(this.nodeName) && !It.test(e) && (this.checked || !me.test(e));
}).map(function(e, t) {
var n = j(this).val();
return null == n ? null : Array.isArray(n) ? j.map(n, function(e) {
return {
name: t.name,
value: e.replace(Pt, "\r\n")
};
}) : {
name: t.name,
value: n.replace(Pt, "\r\n")
};
}).get();
}
});
var Ot = /%20/g, Rt = /#.*$/, zt = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Bt = /^(?:GET|HEAD)$/, $t = /^\/\//, Ht = {}, qt = {}, Gt = "*/".concat("*"), Ut = s.createElement("a");
function Vt(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var a, r = 0, i = t.toLowerCase().match(B) || [];
if (y(n)) for (;a = i[r++]; ) "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n);
};
}
function Wt(e, t, n, a) {
var r = {}, i = e === qt;
function o(s) {
var u;
return r[s] = !0, j.each(e[s] || [], function(e, s) {
var c = s(t, n, a);
return "string" != typeof c || i || r[c] ? i ? !(u = c) : void 0 : (t.dataTypes.unshift(c), 
o(c), !1);
}), u;
}
return o(t.dataTypes[0]) || !r["*"] && o("*");
}
function Kt(e, t) {
var n, a, r = j.ajaxSettings.flatOptions || {};
for (n in t) void 0 !== t[n] && ((r[n] ? e : a || (a = {}))[n] = t[n]);
return a && j.extend(!0, e, a), e;
}
Ut.href = St.href, j.extend({
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
"*": Gt,
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
"text xml": j.parseXML
},
flatOptions: {
url: !0,
context: !0
}
},
ajaxSetup: function(e, t) {
return t ? Kt(Kt(e, j.ajaxSettings), t) : Kt(j.ajaxSettings, e);
},
ajaxPrefilter: Vt(Ht),
ajaxTransport: Vt(qt),
ajax: function(e, t) {
"object" == typeof e && (t = e, e = void 0), t = t || {};
var a, r, i, o, u, c, l, d, p, h, f = j.ajaxSetup({}, t), g = f.context || f, m = f.context && (g.nodeType || g.jquery) ? j(g) : j.event, _ = j.Deferred(), b = j.Callbacks("once memory"), y = f.statusCode || {}, v = {}, w = {}, k = "canceled", x = {
readyState: 0,
getResponseHeader: function(e) {
var t;
if (l) {
if (!o) for (o = {}; t = Nt.exec(i); ) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
t = o[e.toLowerCase() + " "];
}
return null == t ? null : t.join(", ");
},
getAllResponseHeaders: function() {
return l ? i : null;
},
setRequestHeader: function(e, t) {
return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, v[e] = t), 
this;
},
overrideMimeType: function(e) {
return null == l && (f.mimeType = e), this;
},
statusCode: function(e) {
var t;
if (e) if (l) x.always(e[x.status]); else for (t in e) y[t] = [ y[t], e[t] ];
return this;
},
abort: function(e) {
var t = e || k;
return a && a.abort(t), D(0, t), this;
}
};
if (_.promise(x), f.url = ((e || f.url || St.href) + "").replace($t, St.protocol + "//"), 
f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(B) || [ "" ], 
null == f.crossDomain) {
c = s.createElement("a");
try {
c.href = f.url, c.href = c.href, f.crossDomain = Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host;
} catch (e) {
f.crossDomain = !0;
}
}
if (f.data && f.processData && "string" != typeof f.data && (f.data = j.param(f.data, f.traditional)), 
Wt(Ht, f, t, x), l) return x;
for (p in (d = j.event && f.global) && 0 == j.active++ && j.event.trigger("ajaxStart"), 
f.type = f.type.toUpperCase(), f.hasContent = !Bt.test(f.type), r = f.url.replace(Rt, ""), 
f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ot, "+")) : (h = f.url.slice(r.length), 
f.data && (f.processData || "string" == typeof f.data) && (r += (Tt.test(r) ? "&" : "?") + f.data, 
delete f.data), !1 === f.cache && (r = r.replace(zt, "$1"), h = (Tt.test(r) ? "&" : "?") + "_=" + At++ + h), 
f.url = r + h), f.ifModified && (j.lastModified[r] && x.setRequestHeader("If-Modified-Since", j.lastModified[r]), 
j.etag[r] && x.setRequestHeader("If-None-Match", j.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), 
x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : f.accepts["*"]), 
f.headers) x.setRequestHeader(p, f.headers[p]);
if (f.beforeSend && (!1 === f.beforeSend.call(g, x, f) || l)) return x.abort();
if (k = "abort", b.add(f.complete), x.done(f.success), x.fail(f.error), a = Wt(qt, f, t, x)) {
if (x.readyState = 1, d && m.trigger("ajaxSend", [ x, f ]), l) return x;
f.async && 0 < f.timeout && (u = n.setTimeout(function() {
x.abort("timeout");
}, f.timeout));
try {
l = !1, a.send(v, D);
} catch (e) {
if (l) throw e;
D(-1, e);
}
} else D(-1, "No Transport");
function D(e, t, o, s) {
var c, p, h, v, w, k = t;
l || (l = !0, u && n.clearTimeout(u), a = void 0, i = s || "", x.readyState = 0 < e ? 4 : 0, 
c = 200 <= e && e < 300 || 304 === e, o && (v = function(e, t, n) {
for (var a, r, i, o, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
if (a) for (r in s) if (s[r] && s[r].test(a)) {
u.unshift(r);
break;
}
if (u[0] in n) i = u[0]; else {
for (r in n) {
if (!u[0] || e.converters[r + " " + u[0]]) {
i = r;
break;
}
o || (o = r);
}
i = i || o;
}
if (i) return i !== u[0] && u.unshift(i), n[i];
}(f, x, o)), v = function(e, t, n, a) {
var r, i, o, s, u, c = {}, l = e.dataTypes.slice();
if (l[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
for (i = l.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), 
!u && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = l.shift()) if ("*" === i) i = u; else if ("*" !== u && u !== i) {
if (!(o = c[u + " " + i] || c["* " + i])) for (r in c) if ((s = r.split(" "))[1] === i && (o = c[u + " " + s[0]] || c["* " + s[0]])) {
!0 === o ? o = c[r] : !0 !== c[r] && (i = s[0], l.unshift(s[1]));
break;
}
if (!0 !== o) if (o && e.throws) t = o(t); else try {
t = o(t);
} catch (e) {
return {
state: "parsererror",
error: o ? e : "No conversion from " + u + " to " + i
};
}
}
return {
state: "success",
data: t
};
}(f, v, x, c), c ? (f.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (j.lastModified[r] = w), 
(w = x.getResponseHeader("etag")) && (j.etag[r] = w)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = v.state, 
p = v.data, c = !(h = v.error))) : (h = k, !e && k || (k = "error", e < 0 && (e = 0))), 
x.status = e, x.statusText = (t || k) + "", c ? _.resolveWith(g, [ p, k, x ]) : _.rejectWith(g, [ x, k, h ]), 
x.statusCode(y), y = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [ x, f, c ? p : h ]), 
b.fireWith(g, [ x, k ]), d && (m.trigger("ajaxComplete", [ x, f ]), --j.active || j.event.trigger("ajaxStop")));
}
return x;
},
getJSON: function(e, t, n) {
return j.get(e, t, n, "json");
},
getScript: function(e, t) {
return j.get(e, void 0, t, "script");
}
}), j.each([ "get", "post" ], function(e, t) {
j[t] = function(e, n, a, r) {
return y(n) && (r = r || a, a = n, n = void 0), j.ajax(j.extend({
url: e,
type: t,
dataType: r,
data: n,
success: a
}, j.isPlainObject(e) && e));
};
}), j._evalUrl = function(e, t) {
return j.ajax({
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
j.globalEval(e, t);
}
});
}, j.fn.extend({
wrapAll: function(e) {
var t;
return this[0] && (y(e) && (e = e.call(this[0])), t = j(e, this[0].ownerDocument).eq(0).clone(!0), 
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
return e;
}).append(this)), this;
},
wrapInner: function(e) {
return y(e) ? this.each(function(t) {
j(this).wrapInner(e.call(this, t));
}) : this.each(function() {
var t = j(this), n = t.contents();
n.length ? n.wrapAll(e) : t.append(e);
});
},
wrap: function(e) {
var t = y(e);
return this.each(function(n) {
j(this).wrapAll(t ? e.call(this, n) : e);
});
},
unwrap: function(e) {
return this.parent(e).not("body").each(function() {
j(this).replaceWith(this.childNodes);
}), this;
}
}), j.expr.pseudos.hidden = function(e) {
return !j.expr.pseudos.visible(e);
}, j.expr.pseudos.visible = function(e) {
return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}, j.ajaxSettings.xhr = function() {
try {
return new n.XMLHttpRequest();
} catch (e) {}
};
var Qt = {
0: 200,
1223: 204
}, Yt = j.ajaxSettings.xhr();
b.cors = !!Yt && "withCredentials" in Yt, b.ajax = Yt = !!Yt, j.ajaxTransport(function(e) {
var t, a;
if (b.cors || Yt && !e.crossDomain) return {
send: function(r, i) {
var o, s = e.xhr();
if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) s[o] = e.xhrFields[o];
for (o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), 
r) s.setRequestHeader(o, r[o]);
t = function(e) {
return function() {
t && (t = a = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
"abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Qt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
binary: s.response
} : {
text: s.responseText
}, s.getAllResponseHeaders()));
};
}, s.onload = t(), a = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = a : s.onreadystatechange = function() {
4 === s.readyState && n.setTimeout(function() {
t && a();
});
}, t = t("abort");
try {
s.send(e.hasContent && e.data || null);
} catch (r) {
if (t) throw r;
}
},
abort: function() {
t && t();
}
};
}), j.ajaxPrefilter(function(e) {
e.crossDomain && (e.contents.script = !1);
}), j.ajaxSetup({
accepts: {
script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents: {
script: /\b(?:java|ecma)script\b/
},
converters: {
"text script": function(e) {
return j.globalEval(e), e;
}
}
}), j.ajaxPrefilter("script", function(e) {
void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
}), j.ajaxTransport("script", function(e) {
var t, n;
if (e.crossDomain || e.scriptAttrs) return {
send: function(a, r) {
t = j("<script>").attr(e.scriptAttrs || {}).prop({
charset: e.scriptCharset,
src: e.url
}).on("load error", n = function(e) {
t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type);
}), s.head.appendChild(t[0]);
},
abort: function() {
n && n();
}
};
});
var Zt, Xt = [], Jt = /(=)\?(?=&|$)|\?\?/;
j.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
var e = Xt.pop() || j.expando + "_" + At++;
return this[e] = !0, e;
}
}), j.ajaxPrefilter("json jsonp", function(e, t, a) {
var r, i, o, s = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
s ? e[s] = e[s].replace(Jt, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), 
e.converters["script json"] = function() {
return o || j.error(r + " was not called"), o[0];
}, e.dataTypes[0] = "json", i = n[r], n[r] = function() {
o = arguments;
}, a.always(function() {
void 0 === i ? j(n).removeProp(r) : n[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, 
Xt.push(r)), o && y(i) && i(o[0]), o = i = void 0;
}), "script";
}), b.createHTMLDocument = ((Zt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
2 === Zt.childNodes.length), j.parseHTML = function(e, t, n) {
return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (b.createHTMLDocument ? ((a = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, 
t.head.appendChild(a)) : t = s), i = !n && [], (r = I.exec(e)) ? [ t.createElement(r[1]) ] : (r = je([ e ], t, i), 
i && i.length && j(i).remove(), j.merge([], r.childNodes)));
var a, r, i;
}, j.fn.load = function(e, t, n) {
var a, r, i, o = this, s = e.indexOf(" ");
return -1 < s && (a = kt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 
0 < o.length && j.ajax({
url: e,
type: r || "GET",
dataType: "html",
data: t
}).done(function(e) {
i = arguments, o.html(a ? j("<div>").append(j.parseHTML(e)).find(a) : e);
}).always(n && function(e, t) {
o.each(function() {
n.apply(this, i || [ e.responseText, t, e ]);
});
}), this;
}, j.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
j.fn[t] = function(e) {
return this.on(t, e);
};
}), j.expr.pseudos.animated = function(e) {
return j.grep(j.timers, function(t) {
return e === t.elem;
}).length;
}, j.offset = {
setOffset: function(e, t, n) {
var a, r, i, o, s, u, c = j.css(e, "position"), l = j(e), d = {};
"static" === c && (e.style.position = "relative"), s = l.offset(), i = j.css(e, "top"), 
u = j.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (i + u).indexOf("auto") ? (o = (a = l.position()).top, 
r = a.left) : (o = parseFloat(i) || 0, r = parseFloat(u) || 0), y(t) && (t = t.call(e, n, j.extend({}, s))), 
null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + r), 
"using" in t ? t.using.call(e, d) : l.css(d);
}
}, j.fn.extend({
offset: function(e) {
if (arguments.length) return void 0 === e ? this : this.each(function(t) {
j.offset.setOffset(this, e, t);
});
var t, n, a = this[0];
return a ? a.getClientRects().length ? (t = a.getBoundingClientRect(), n = a.ownerDocument.defaultView, 
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
var e, t, n, a = this[0], r = {
top: 0,
left: 0
};
if ("fixed" === j.css(a, "position")) t = a.getBoundingClientRect(); else {
for (t = this.offset(), n = a.ownerDocument, e = a.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === j.css(e, "position"); ) e = e.parentNode;
e && e !== a && 1 === e.nodeType && ((r = j(e).offset()).top += j.css(e, "borderTopWidth", !0), 
r.left += j.css(e, "borderLeftWidth", !0));
}
return {
top: t.top - r.top - j.css(a, "marginTop", !0),
left: t.left - r.left - j.css(a, "marginLeft", !0)
};
}
},
offsetParent: function() {
return this.map(function() {
for (var e = this.offsetParent; e && "static" === j.css(e, "position"); ) e = e.offsetParent;
return e || ue;
});
}
}), j.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, t) {
var n = "pageYOffset" === t;
j.fn[e] = function(a) {
return W(this, function(e, a, r) {
var i;
if (v(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === r) return i ? i[t] : e[a];
i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : e[a] = r;
}, e, a, arguments.length);
};
}), j.each([ "top", "left" ], function(e, t) {
j.cssHooks[t] = Ke(b.pixelPosition, function(e, n) {
if (n) return n = We(e, t), Ge.test(n) ? j(e).position()[t] + "px" : n;
});
}), j.each({
Height: "height",
Width: "width"
}, function(e, t) {
j.each({
padding: "inner" + e,
content: t,
"": "outer" + e
}, function(n, a) {
j.fn[a] = function(r, i) {
var o = arguments.length && (n || "boolean" != typeof r), s = n || (!0 === r || !0 === i ? "margin" : "border");
return W(this, function(t, n, r) {
var i;
return v(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? j.css(t, n, s) : j.style(t, n, r, s);
}, t, o ? r : void 0, o);
};
});
}), j.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
j.fn[t] = function(e, n) {
return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
};
}), j.fn.extend({
hover: function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
}
}), j.fn.extend({
bind: function(e, t, n) {
return this.on(e, null, t, n);
},
unbind: function(e, t) {
return this.off(e, null, t);
},
delegate: function(e, t, n, a) {
return this.on(t, e, n, a);
},
undelegate: function(e, t, n) {
return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
}
}), j.proxy = function(e, t) {
var n, a, r;
if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return a = c.call(arguments, 2), 
(r = function() {
return e.apply(t || this, a.concat(c.call(arguments)));
}).guid = e.guid = e.guid || j.guid++, r;
}, j.holdReady = function(e) {
e ? j.readyWait++ : j.ready(!0);
}, j.isArray = Array.isArray, j.parseJSON = JSON.parse, j.nodeName = P, j.isFunction = y, 
j.isWindow = v, j.camelCase = Z, j.type = x, j.now = Date.now, j.isNumeric = function(e) {
var t = j.type(e);
return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
}, a = [], void 0 === (r = function() {
return j;
}.apply(t, a)) || (e.exports = r);
var en = n.jQuery, tn = n.$;
return j.noConflict = function(e) {
return n.$ === j && (n.$ = tn), e && n.jQuery === j && (n.jQuery = en), j;
}, i || (n.jQuery = n.$ = j), j;
});
}, function(e, t, n) {
"use strict";
(function(e, a, r) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(109), o = n(128), s = n(150);
function u(t, a, r) {
let u = i.requireScript(t, "index");
s.hasGrant(u.metadata.grant, "registerMenuCommand") ? o.registerMenuCommand({
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
console.info(e, t), null === t ? (console.info("$", a, a && a.fn && a.fn.jquery), 
console.info("jQuery", r, r && r.fn && r.fn.jquery)) : (console.info(`${e}.$`, t.$, t.$ && t.$.fn && t.$.fn.jquery), 
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
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(122), r = new Map();
function i(e, t, n = []) {
"string" == typeof e && (e = {
label: e
});
const i = o(e), s = async function() {
let a;
console.time(i), console.group(i);
try {
(a = await t(e, ...n)) && !0 !== a && console.info(i, e.fn_name || t.name, [ a.length, a ]);
} catch (e) {
console.error(e);
}
console.groupEnd(i), console.timeEnd(i);
};
return "function" == typeof a.default.registerMenuCommand ? a.default.registerMenuCommand(i, s) : console.warn("GM_registerMenuCommand not a function."), 
r.set(i, s), i;
}
function o(e) {
"string" == typeof e && (e = {
label: e
});
const t = e.label || `[${e.name || e.id}] ${e.key}`;
return t;
}
async function s(e, ...t) {
const n = o(e);
let a = r.get(n);
return a ? await a(...t) : a;
}
function u() {
let e = [];
return r.forEach(function(t, n, a) {
e.push(n);
}), e;
}
t.registerMenuCommand = i, t.getLabel = o, t.callMenuCommand = s, t.listMenuCommand = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(151);
function r(e) {
let t;
if (t = (e = e.toString()).match(/(^\/\/\s+==UserScript==)/m)) {
let n = t.index;
{
let n = /(^\/\/\s+==\/UserScript==)/m;
n.lastIndex = t.index + t[0].length, t = n.exec(e);
}
let r = (e = e.slice(n, t.index + t[0].length)).split(/\r\n|\r|\n/).filter(function(e, t, n) {
return /^\/\/\s*@/g.test(e);
}).reduce(function(e, t) {
let n = /^\/\/[\s\t]*@([a-z:]+)(?:[\s\t]+(.+))?(?:[\s\t]+)?$/i.exec(t.trim("\t ")), a = n[1], r = n[2];
return r && (r = r.trim("\t ")), e[a] = e[a] || [], -1 == e[a].indexOf(r) && e[a].push(r), 
e;
}, {});
return r = Object.assign({
name: []
}, r, {
grant: [],
include: [],
exclude: [],
noframes: []
}, r), [ "include", "match", "exclude", "grant" ].forEach(function(e) {
r[e] && (r[e] = r[e].length ? c(a.array_unique(r[e])) : []);
}), r.grant.sort(), r;
}
}
function i(e, t) {
return !(!e.includes("GM." + t) && !e.includes("GM_" + t));
}
function o(e) {
return e.noframes && e.noframes.length && "no" == e.noframes[0] && (e.noframes = []), 
e.grant && e.grant.length && (e.grant.forEach(function(t, n, a) {
let r;
(r = /^GM[\.\_](.+)$/.exec(t)) && (e.grant.push("GM." + r[1]), e.grant.push("GM_" + r[1]));
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
e[t] && (e[t] = e[t].length ? c(a.array_unique(e[t])) : []);
}), e.grant && e.grant.length && e.grant.sort(), e;
}
function s(e) {
return e.map(function(e, t, n) {
return e.replace(/^.*(\:\/\/)/, "*$1");
});
}
function u(e, t, n = !1, a = "\t\t", r = "// ", i = "\n") {
let o = "", s = `${r}@${e}${a}`;
return Array.isArray(t) ? o = t.join(`${i}${s}`) : void 0 !== t && (o = t.toString()), 
n && (o = s + o), o;
}
function c(e) {
return e.filter(function(e, t, n) {
return !!e;
});
}
t.parseMetadata = r, t.hasGrant = i, t.lazyMetaFix = o, t.meta_match = s, t.makeMetaRow = u, 
t.meta_filter = c, t.default = t;
}, function(e, t, n) {
"use strict";
function a(e) {
return e.filter(function(e, t, n) {
return t == n.indexOf(e);
});
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.array_unique = a, t.default = a;
}, function(e, t, n) {
var a = {
"./ux-tweak-sc/": 13,
"./ux-tweak-sc/_fake": 108,
"./ux-tweak-sc/_fake.js": 108,
"./ux-tweak-sc/acg/2dfan": 21,
"./ux-tweak-sc/acg/2dfan.js": 21,
"./ux-tweak-sc/acg/3dmgame": 22,
"./ux-tweak-sc/acg/3dmgame.js": 22,
"./ux-tweak-sc/acg/baidu/safecheck": 23,
"./ux-tweak-sc/acg/baidu/safecheck.js": 23,
"./ux-tweak-sc/acg/baidu/tieba": 24,
"./ux-tweak-sc/acg/baidu/tieba.js": 24,
"./ux-tweak-sc/acg/blog.reimu.net": 26,
"./ux-tweak-sc/acg/blog.reimu.net.js": 26,
"./ux-tweak-sc/acg/dlsite": 27,
"./ux-tweak-sc/acg/dlsite.js": 27,
"./ux-tweak-sc/acg/dmm": 116,
"./ux-tweak-sc/acg/dmm.js": 116,
"./ux-tweak-sc/acg/gamer.com.tw": 28,
"./ux-tweak-sc/acg/gamer.com.tw.js": 28,
"./ux-tweak-sc/acg/gamme": 29,
"./ux-tweak-sc/acg/gamme.js": 29,
"./ux-tweak-sc/acg/getchu": 30,
"./ux-tweak-sc/acg/getchu.js": 30,
"./ux-tweak-sc/acg/guildwars2/forum": 117,
"./ux-tweak-sc/acg/guildwars2/forum.2017": 31,
"./ux-tweak-sc/acg/guildwars2/forum.2017.js": 31,
"./ux-tweak-sc/acg/guildwars2/forum.js": 117,
"./ux-tweak-sc/acg/guildwars2/wiki": 32,
"./ux-tweak-sc/acg/guildwars2/wiki.js": 32,
"./ux-tweak-sc/acg/gw2bltc": 33,
"./ux-tweak-sc/acg/gw2bltc.js": 33,
"./ux-tweak-sc/acg/movie/u2mtv": 34,
"./ux-tweak-sc/acg/movie/u2mtv.js": 34,
"./ux-tweak-sc/acg/movie/yahoo": 35,
"./ux-tweak-sc/acg/movie/yahoo.js": 35,
"./ux-tweak-sc/acg/qoo-app": 36,
"./ux-tweak-sc/acg/qoo-app.js": 36,
"./ux-tweak-sc/acg/qtfy.eu": 37,
"./ux-tweak-sc/acg/qtfy.eu.js": 37,
"./ux-tweak-sc/acg/reddit": 38,
"./ux-tweak-sc/acg/reddit.js": 38,
"./ux-tweak-sc/acg/vsgames": 39,
"./ux-tweak-sc/acg/vsgames.js": 39,
"./ux-tweak-sc/adult/up01": 40,
"./ux-tweak-sc/adult/up01.js": 40,
"./ux-tweak-sc/anti-adblock/epinv": 41,
"./ux-tweak-sc/anti-adblock/epinv.js": 41,
"./ux-tweak-sc/art/danbooru.donmai.us": 42,
"./ux-tweak-sc/art/danbooru.donmai.us.js": 42,
"./ux-tweak-sc/art/deviantart": 43,
"./ux-tweak-sc/art/deviantart.js": 43,
"./ux-tweak-sc/art/pixiv": 44,
"./ux-tweak-sc/art/pixiv.js": 44,
"./ux-tweak-sc/art/pixivision": 46,
"./ux-tweak-sc/art/pixivision.js": 46,
"./ux-tweak-sc/bbs/ptt": 47,
"./ux-tweak-sc/bbs/ptt.js": 47,
"./ux-tweak-sc/blog/blog.xuite": 48,
"./ux-tweak-sc/blog/blog.xuite.js": 48,
"./ux-tweak-sc/blog/dulfy": 49,
"./ux-tweak-sc/blog/dulfy.js": 49,
"./ux-tweak-sc/blog/jianshu": 50,
"./ux-tweak-sc/blog/jianshu.js": 50,
"./ux-tweak-sc/blog/juejin.im": 51,
"./ux-tweak-sc/blog/juejin.im.js": 51,
"./ux-tweak-sc/blog/oneapm": 52,
"./ux-tweak-sc/blog/oneapm.js": 52,
"./ux-tweak-sc/blog/steachs": 53,
"./ux-tweak-sc/blog/steachs.js": 53,
"./ux-tweak-sc/code/gitee": 54,
"./ux-tweak-sc/code/gitee.js": 54,
"./ux-tweak-sc/code/github": 55,
"./ux-tweak-sc/code/github.js": 55,
"./ux-tweak-sc/code/greasyfork": 56,
"./ux-tweak-sc/code/greasyfork.js": 56,
"./ux-tweak-sc/code/npmjs": 57,
"./ux-tweak-sc/code/npmjs.js": 57,
"./ux-tweak-sc/code/segmentfault": 58,
"./ux-tweak-sc/code/segmentfault.js": 58,
"./ux-tweak-sc/code/sourceforge": 59,
"./ux-tweak-sc/code/sourceforge.js": 59,
"./ux-tweak-sc/code/stackoverflow": 60,
"./ux-tweak-sc/code/stackoverflow.js": 60,
"./ux-tweak-sc/comic/999comic": 61,
"./ux-tweak-sc/comic/999comic.js": 61,
"./ux-tweak-sc/comic/alphapolis.co.jp": 62,
"./ux-tweak-sc/comic/alphapolis.co.jp.js": 62,
"./ux-tweak-sc/comic/backup/lhscan": 63,
"./ux-tweak-sc/comic/backup/lhscan.js": 63,
"./ux-tweak-sc/comic/book.dmm.co.jp": 64,
"./ux-tweak-sc/comic/book.dmm.co.jp.js": 64,
"./ux-tweak-sc/comic/comic-walker": 65,
"./ux-tweak-sc/comic/comic-walker.js": 65,
"./ux-tweak-sc/comic/comico": 66,
"./ux-tweak-sc/comic/comico.js": 66,
"./ux-tweak-sc/comic/dm5": 67,
"./ux-tweak-sc/comic/dm5.js": 67,
"./ux-tweak-sc/comic/dmzj": 68,
"./ux-tweak-sc/comic/dmzj.js": 68,
"./ux-tweak-sc/comic/exhentai": 69,
"./ux-tweak-sc/comic/exhentai.js": 69,
"./ux-tweak-sc/comic/ikanman": 70,
"./ux-tweak-sc/comic/ikanman.js": 70,
"./ux-tweak-sc/comic/lhscans": 71,
"./ux-tweak-sc/comic/lhscans.js": 71,
"./ux-tweak-sc/comic/manben": 72,
"./ux-tweak-sc/comic/manben.js": 72,
"./ux-tweak-sc/comic/manhuaren": 73,
"./ux-tweak-sc/comic/manhuaren.js": 73,
"./ux-tweak-sc/comic/nhentai": 74,
"./ux-tweak-sc/comic/nhentai.js": 74,
"./ux-tweak-sc/comic/rawdevart": 75,
"./ux-tweak-sc/comic/rawdevart.js": 75,
"./ux-tweak-sc/comic/wnacg": 76,
"./ux-tweak-sc/comic/wnacg.js": 76,
"./ux-tweak-sc/comic/yoedge": 77,
"./ux-tweak-sc/comic/yoedge.js": 77,
"./ux-tweak-sc/content/farm/fun01.cc": 78,
"./ux-tweak-sc/content/farm/fun01.cc.js": 78,
"./ux-tweak-sc/dict/edu/cwn.ling.sinica": 79,
"./ux-tweak-sc/dict/edu/cwn.ling.sinica.js": 79,
"./ux-tweak-sc/dict/edu/dict.revised.moe": 80,
"./ux-tweak-sc/dict/edu/dict.revised.moe.js": 80,
"./ux-tweak-sc/global/discuz": 16,
"./ux-tweak-sc/global/discuz.js": 16,
"./ux-tweak-sc/global/mediawiki": 101,
"./ux-tweak-sc/global/mediawiki.js": 101,
"./ux-tweak-sc/global/pagination": 103,
"./ux-tweak-sc/global/pagination.js": 103,
"./ux-tweak-sc/global/pagination/page": 104,
"./ux-tweak-sc/global/pagination/page.js": 104,
"./ux-tweak-sc/global/pagination/pagination.active": 105,
"./ux-tweak-sc/global/pagination/pagination.active.js": 105,
"./ux-tweak-sc/global/pagination/srp_pagination": 106,
"./ux-tweak-sc/global/pagination/srp_pagination.js": 106,
"./ux-tweak-sc/global/social": 107,
"./ux-tweak-sc/global/social.js": 107,
"./ux-tweak-sc/global/video": 102,
"./ux-tweak-sc/global/video.js": 102,
"./ux-tweak-sc/google/drive": 118,
"./ux-tweak-sc/google/drive.js": 118,
"./ux-tweak-sc/google/search": 100,
"./ux-tweak-sc/google/search.js": 100,
"./ux-tweak-sc/index": 13,
"./ux-tweak-sc/index.js": 13,
"./ux-tweak-sc/index.user": 20,
"./ux-tweak-sc/index.user.js": 20,
"./ux-tweak-sc/lib/demo": 119,
"./ux-tweak-sc/lib/demo.js": 119,
"./ux-tweak-sc/lib/metadata": 120,
"./ux-tweak-sc/lib/metadata.js": 120,
"./ux-tweak-sc/novel/esjzone": 81,
"./ux-tweak-sc/novel/esjzone.js": 81,
"./ux-tweak-sc/novel/iqing": 121,
"./ux-tweak-sc/novel/iqing.js": 121,
"./ux-tweak-sc/novel/lightnovel.cn": 82,
"./ux-tweak-sc/novel/lightnovel.cn.js": 82,
"./ux-tweak-sc/novel/masiro.moe": 83,
"./ux-tweak-sc/novel/masiro.moe.js": 83,
"./ux-tweak-sc/novel/syosetu": 84,
"./ux-tweak-sc/novel/syosetu.js": 84,
"./ux-tweak-sc/novel/wenku8": 85,
"./ux-tweak-sc/novel/wenku8.js": 85,
"./ux-tweak-sc/other/jetbrains/jetbrains": 86,
"./ux-tweak-sc/other/jetbrains/jetbrains.js": 86,
"./ux-tweak-sc/p2p/wetransfer": 87,
"./ux-tweak-sc/p2p/wetransfer.js": 87,
"./ux-tweak-sc/shop/pchome": 88,
"./ux-tweak-sc/shop/pchome.js": 88,
"./ux-tweak-sc/shop/post/kerrytj": 89,
"./ux-tweak-sc/shop/post/kerrytj.js": 89,
"./ux-tweak-sc/shop/post/post/gov/tw/pstmail": 90,
"./ux-tweak-sc/shop/post/post/gov/tw/pstmail.js": 90,
"./ux-tweak-sc/shop/yahoo/buy": 91,
"./ux-tweak-sc/shop/yahoo/buy.js": 91,
"./ux-tweak-sc/shop/yahoo/mall": 92,
"./ux-tweak-sc/shop/yahoo/mall.js": 92,
"./ux-tweak-sc/social/facebook": 93,
"./ux-tweak-sc/social/facebook.js": 93,
"./ux-tweak-sc/social/weibo": 94,
"./ux-tweak-sc/social/weibo.js": 94,
"./ux-tweak-sc/torrent/dmhy": 95,
"./ux-tweak-sc/torrent/dmhy.js": 95,
"./ux-tweak-sc/torrent/jandown": 96,
"./ux-tweak-sc/torrent/jandown.js": 96,
"./ux-tweak-sc/torrent/nyaa": 97,
"./ux-tweak-sc/torrent/nyaa.js": 97,
"./ux-tweak-sc/wiki/moegirl": 98,
"./ux-tweak-sc/wiki/moegirl.js": 98,
"./ux-tweak-sc/wiki/wikipedia": 99,
"./ux-tweak-sc/wiki/wikipedia.js": 99
};
function r(e) {
var t = i(e);
return n(t);
}
function i(e) {
if (!n.o(a, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return a[e];
}
r.keys = function e() {
return Object.keys(a);
}, r.resolve = i, e.exports = r, r.id = 152;
}, function(e, t, n) {
e.exports = m, m.Minimatch = _;
var a = {
sep: "/"
};
try {
a = n(154);
} catch (e) {}
var r = m.GLOBSTAR = _.GLOBSTAR = {}, i = n(155), o = {
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
}, s = "[^/]", u = s + "*?", c = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", l = "(?:(?!(?:\\/|^)\\.).)*?", d = p("().*{}+?[]^$\\!");
function p(e) {
return e.split("").reduce(function(e, t) {
return e[t] = !0, e;
}, {});
}
var h = /\/+/;
function f(e, t) {
return t = t || {}, function(n, a, r) {
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
return n || (n = {}), !(!n.nocomment && "#" === t.charAt(0)) && ("" === t.trim() ? "" === e : new _(t, n).match(e));
}
function _(e, t) {
if (!(this instanceof _)) return new _(e, t);
if ("string" != typeof e) throw new TypeError("glob pattern string required");
t || (t = {}), e = e.trim(), "/" !== a.sep && (e = e.split(a.sep).join("/")), this.options = t, 
this.set = [], this.pattern = e, this.regexp = null, this.negate = !1, this.comment = !1, 
this.empty = !1, this.make();
}
function b() {
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
function y() {
var e = this.pattern, t = !1, n, a = 0;
if (!this.options.nonegate) {
for (var r = 0, i = e.length; r < i && "!" === e.charAt(r); r++) t = !t, a++;
a && (this.pattern = e.substr(a)), this.negate = t;
}
}
function v(e, t) {
if (t || (t = this instanceof _ ? this.options : {}), void 0 === (e = void 0 === e ? this.pattern : e)) throw new TypeError("undefined pattern");
return t.nobrace || !e.match(/\{.*\}/) ? [ e ] : i(e);
}
m.filter = f, m.defaults = function(e) {
if (!e || !Object.keys(e).length) return m;
var t = m, n = function n(a, r, i) {
return t.minimatch(a, r, g(e, i));
};
return n.Minimatch = function n(a, r) {
return new t.Minimatch(a, g(e, r));
}, n;
}, _.defaults = function(e) {
return e && Object.keys(e).length ? m.defaults(e).Minimatch : _;
}, _.prototype.debug = function() {}, _.prototype.make = b, _.prototype.parseNegate = y, 
m.braceExpand = function(e, t) {
return v(e, t);
}, _.prototype.braceExpand = v, _.prototype.parse = k;
var w = {};
function k(e, t) {
if (e.length > 65536) throw new TypeError("pattern is too long");
var n = this.options;
if (!n.noglobstar && "**" === e) return r;
if ("" === e) return "";
var a = "", i = !!n.nocase, c = !1, l = [], p = [], h, f = !1, g = -1, m = -1, _ = "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", b = this;
function y() {
if (h) {
switch (h) {
case "*":
a += u, i = !0;
break;

case "?":
a += s, i = !0;
break;

default:
a += "\\" + h;
break;
}
b.debug("clearStateChar %j %j", h, a), h = !1;
}
}
for (var v = 0, k = e.length, x; v < k && (x = e.charAt(v)); v++) if (this.debug("%s\t%s %s %j", e, v, a, x), 
c && d[x]) a += "\\" + x, c = !1; else switch (x) {
case "/":
return !1;

case "\\":
y(), c = !0;
continue;

case "?":
case "*":
case "+":
case "@":
case "!":
if (this.debug("%s\t%s %s %j <-- stateChar", e, v, a, x), f) {
this.debug("  in class"), "!" === x && v === m + 1 && (x = "^"), a += x;
continue;
}
b.debug("call clearStateChar %j", h), y(), h = x, n.noext && y();
continue;

case "(":
if (f) {
a += "(";
continue;
}
if (!h) {
a += "\\(";
continue;
}
l.push({
type: h,
start: v - 1,
reStart: a.length,
open: o[h].open,
close: o[h].close
}), a += "!" === h ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", h, a), h = !1;
continue;

case ")":
if (f || !l.length) {
a += "\\)";
continue;
}
y(), i = !0;
var D = l.pop();
a += D.close, "!" === D.type && p.push(D), D.reEnd = a.length;
continue;

case "|":
if (f || !l.length || c) {
a += "\\|", c = !1;
continue;
}
y(), a += "|";
continue;

case "[":
if (y(), f) {
a += "\\" + x;
continue;
}
f = !0, m = v, g = a.length, a += x;
continue;

case "]":
if (v === m + 1 || !f) {
a += "\\" + x, c = !1;
continue;
}
if (f) {
var C = e.substring(m + 1, v);
try {
RegExp("[" + C + "]");
} catch (e) {
var E = this.parse(C, w);
a = a.substr(0, g) + "\\[" + E[0] + "\\]", i = i || E[1], f = !1;
continue;
}
}
i = !0, f = !1, a += x;
continue;

default:
y(), c ? c = !1 : !d[x] || "^" === x && f || (a += "\\"), a += x;
}
for (f && (C = e.substr(m + 1), E = this.parse(C, w), a = a.substr(0, g) + "\\[" + E[0], 
i = i || E[1]), D = l.pop(); D; D = l.pop()) {
var S = a.slice(D.reStart + D.open.length);
this.debug("setting tail", a, D), S = S.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
return n || (n = "\\"), t + t + n + "|";
}), this.debug("tail=%j\n   %s", S, S, D, a);
var A = "*" === D.type ? u : "?" === D.type ? s : "\\" + D.type;
i = !0, a = a.slice(0, D.reStart) + A + "\\(" + S;
}
y(), c && (a += "\\\\");
var T = !1;
switch (a.charAt(0)) {
case ".":
case "[":
case "(":
T = !0;
}
for (var F = p.length - 1; F > -1; F--) {
var P = p[F], I = a.slice(0, P.reStart), L = a.slice(P.reStart, P.reEnd - 8), M = a.slice(P.reEnd - 8, P.reEnd), O = a.slice(P.reEnd);
M += O;
var R = I.split("(").length - 1, z = O;
for (v = 0; v < R; v++) z = z.replace(/\)[+*?]?/, "");
var N = "", B;
"" === (O = z) && t !== w && (N = "$"), a = I + L + O + N + M;
}
if ("" !== a && i && (a = "(?=.)" + a), T && (a = _ + a), t === w) return [ a, i ];
if (!i) return j(e);
var $ = n.nocase ? "i" : "";
try {
var H = new RegExp("^" + a + "$", $);
} catch (e) {
return new RegExp("$.");
}
return H._glob = e, H._src = a, H;
}
function x() {
if (this.regexp || !1 === this.regexp) return this.regexp;
var e = this.set;
if (!e.length) return this.regexp = !1, this.regexp;
var t = this.options, n = t.noglobstar ? u : t.dot ? c : l, a = t.nocase ? "i" : "", i = e.map(function(e) {
return e.map(function(e) {
return e === r ? n : "string" == typeof e ? C(e) : e._src;
}).join("\\/");
}).join("|");
i = "^(?:" + i + ")$", this.negate && (i = "^(?!" + i + ").*$");
try {
this.regexp = new RegExp(i, a);
} catch (e) {
this.regexp = !1;
}
return this.regexp;
}
function D(e, t) {
if (this.debug("match", e, this.pattern), this.comment) return !1;
if (this.empty) return "" === e;
if ("/" === e && t) return !0;
var n = this.options;
"/" !== a.sep && (e = e.split(a.sep).join("/")), e = e.split(h), this.debug(this.pattern, "split", e);
var r = this.set, i, o;
for (this.debug(this.pattern, "set", r), o = e.length - 1; o >= 0 && !(i = e[o]); o--) ;
for (o = 0; o < r.length; o++) {
var s = r[o], u = e, c;
if (n.matchBase && 1 === s.length && (u = [ i ]), this.matchOne(u, s, t)) return !!n.flipNegate || !this.negate;
}
return !n.flipNegate && this.negate;
}
function j(e) {
return e.replace(/\\(.)/g, "$1");
}
function C(e) {
return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
m.makeRe = function(e, t) {
return new _(e, t || {}).makeRe();
}, _.prototype.makeRe = x, m.match = function(e, t, n) {
var a = new _(t, n = n || {});
return e = e.filter(function(e) {
return a.match(e);
}), a.options.nonull && !e.length && e.push(t), e;
}, _.prototype.match = D, _.prototype.matchOne = function(e, t, n) {
var a = this.options, i;
this.debug("matchOne", {
this: this,
file: e,
pattern: t
}), this.debug("matchOne", e.length, t.length);
for (var o = 0, s = 0, u = e.length, c = t.length; o < u && s < c; o++, s++) {
this.debug("matchOne loop");
var l = t[s], d = e[o], p;
if (this.debug(t, l, d), !1 === l) return !1;
if (l === r) {
this.debug("GLOBSTAR", [ t, l, d ]);
var h = o, f = s + 1;
if (f === c) {
for (this.debug("** at the end"); o < u; o++) if ("." === e[o] || ".." === e[o] || !a.dot && "." === e[o].charAt(0)) return !1;
return !0;
}
for (;h < u; ) {
var g = e[h];
if (this.debug("\nglobstar while", e, h, t, f, g), this.matchOne(e.slice(h), t.slice(f), n)) return this.debug("globstar found match!", h, u, g), 
!0;
if ("." === g || ".." === g || !a.dot && "." === g.charAt(0)) {
this.debug("dot detected!", e, h, t, f);
break;
}
this.debug("globstar swallow a segment, and continue"), h++;
}
return !(!n || (this.debug("\n>>> no match, partial?", e, h, t, f), h !== u));
}
if ("string" == typeof l ? (p = a.nocase ? d.toLowerCase() === l.toLowerCase() : d === l, 
this.debug("string match", l, d, p)) : (p = d.match(l), this.debug("pattern match", l, d, p)), 
!p) return !1;
}
if (o === u && s === c) return !0;
if (o === u) return n;
if (s === c) return o === u - 1 && "" === e[o];
throw new Error("wtf?");
};
}, function(e, t, n) {
(function(e) {
function n(e, t) {
for (var n = 0, a = e.length - 1; a >= 0; a--) {
var r = e[a];
"." === r ? e.splice(a, 1) : ".." === r ? (e.splice(a, 1), n++) : n && (e.splice(a, 1), 
n--);
}
if (t) for (;n--; n) e.unshift("..");
return e;
}
var a = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, r = function(e) {
return a.exec(e).slice(1);
};
function i(e, t) {
if (e.filter) return e.filter(t);
for (var n = [], a = 0; a < e.length; a++) t(e[a], a, e) && n.push(e[a]);
return n;
}
t.resolve = function() {
for (var t = "", a = !1, r = arguments.length - 1; r >= -1 && !a; r--) {
var o = r >= 0 ? arguments[r] : e.cwd();
if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
o && (t = o + "/" + t, a = "/" === o.charAt(0));
}
return (a ? "/" : "") + (t = n(i(t.split("/"), function(e) {
return !!e;
}), !a).join("/")) || ".";
}, t.normalize = function(e) {
var a = t.isAbsolute(e), r = "/" === o(e, -1);
return (e = n(i(e.split("/"), function(e) {
return !!e;
}), !a).join("/")) || a || (e = "."), e && r && (e += "/"), (a ? "/" : "") + e;
}, t.isAbsolute = function(e) {
return "/" === e.charAt(0);
}, t.join = function() {
var e = Array.prototype.slice.call(arguments, 0);
return t.normalize(i(e, function(e, t) {
if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
return e;
}).join("/"));
}, t.relative = function(e, n) {
function a(e) {
for (var t = 0; t < e.length && "" === e[t]; t++) ;
for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) ;
return t > n ? [] : e.slice(t, n - t + 1);
}
e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
for (var r = a(e.split("/")), i = a(n.split("/")), o = Math.min(r.length, i.length), s = o, u = 0; u < o; u++) if (r[u] !== i[u]) {
s = u;
break;
}
for (var c = [], u = s; u < r.length; u++) c.push("..");
return (c = c.concat(i.slice(s))).join("/");
}, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
var t = r(e), n = t[0], a = t[1];
return n || a ? (a && (a = a.substr(0, a.length - 1)), n + a) : ".";
}, t.basename = function(e, t) {
var n = r(e)[2];
return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), 
n;
}, t.extname = function(e) {
return r(e)[3];
};
var o = "b" === "ab".substr(-1) ? function(e, t, n) {
return e.substr(t, n);
} : function(e, t, n) {
return t < 0 && (t = e.length + t), e.substr(t, n);
};
}).call(this, n(110));
}, function(e, t, n) {
var a = n(156), r = n(157);
e.exports = f;
var i = "\0SLASH" + Math.random() + "\0", o = "\0OPEN" + Math.random() + "\0", s = "\0CLOSE" + Math.random() + "\0", u = "\0COMMA" + Math.random() + "\0", c = "\0PERIOD" + Math.random() + "\0";
function l(e) {
return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function d(e) {
return e.split("\\\\").join(i).split("\\{").join(o).split("\\}").join(s).split("\\,").join(u).split("\\.").join(c);
}
function p(e) {
return e.split(i).join("\\").split(o).join("{").split(s).join("}").split(u).join(",").split(c).join(".");
}
function h(e) {
if (!e) return [ "" ];
var t = [], n = r("{", "}", e);
if (!n) return e.split(",");
var a = n.pre, i = n.body, o = n.post, s = a.split(",");
s[s.length - 1] += "{" + i + "}";
var u = h(o);
return o.length && (s[s.length - 1] += u.shift(), s.push.apply(s, u)), t.push.apply(t, s), 
t;
}
function f(e) {
return e ? ("{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2)), v(d(e), !0).map(p)) : [];
}
function g(e) {
return e;
}
function m(e) {
return "{" + e + "}";
}
function _(e) {
return /^-?0\d/.test(e);
}
function b(e, t) {
return e <= t;
}
function y(e, t) {
return e >= t;
}
function v(e, t) {
var n = [], i = r("{", "}", e);
if (!i || /\$$/.test(i.pre)) return [ e ];
var o = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body), u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body), c = o || u, d = i.body.indexOf(",") >= 0, p, f;
if (!c && !d) return i.post.match(/,.*\}/) ? v(e = i.pre + "{" + i.body + s + i.post) : [ e ];
if (c) p = i.body.split(/\.\./); else if (1 === (p = h(i.body)).length && 1 === (p = v(p[0], !1).map(m)).length) return (f = i.post.length ? v(i.post, !1) : [ "" ]).map(function(e) {
return i.pre + p[0] + e;
});
var g = i.pre, f = i.post.length ? v(i.post, !1) : [ "" ], w;
if (c) {
var k = l(p[0]), x = l(p[1]), D = Math.max(p[0].length, p[1].length), j = 3 == p.length ? Math.abs(l(p[2])) : 1, C = b, E;
x < k && (j *= -1, C = y);
var S = p.some(_);
w = [];
for (var A = k; C(A, x); A += j) {
var T;
if (u) "\\" === (T = String.fromCharCode(A)) && (T = ""); else if (T = String(A), 
S) {
var F = D - T.length;
if (F > 0) {
var P = new Array(F + 1).join("0");
T = A < 0 ? "-" + P + T.slice(1) : P + T;
}
}
w.push(T);
}
} else w = a(p, function(e) {
return v(e, !1);
});
for (var I = 0; I < w.length; I++) for (var L = 0; L < f.length; L++) {
var M = g + w[I] + f[L];
(!t || c || M) && n.push(M);
}
return n;
}
}, function(e, t) {
e.exports = function(e, t) {
for (var a = [], r = 0; r < e.length; r++) {
var i = t(e[r], r);
n(i) ? a.push.apply(a, i) : a.push(i);
}
return a;
};
var n = Array.isArray || function(e) {
return "[object Array]" === Object.prototype.toString.call(e);
};
}, function(e, t, n) {
"use strict";
function a(e, t, n) {
e instanceof RegExp && (e = r(e, n)), t instanceof RegExp && (t = r(t, n));
var a = i(e, t, n);
return a && {
start: a[0],
end: a[1],
pre: n.slice(0, a[0]),
body: n.slice(a[0] + e.length, a[1]),
post: n.slice(a[1] + t.length)
};
}
function r(e, t) {
var n = t.match(e);
return n ? n[0] : null;
}
function i(e, t, n) {
var a, r, i, o, s, u = n.indexOf(e), c = n.indexOf(t, u + 1), l = u;
if (u >= 0 && c > 0) {
for (a = [], i = n.length; l >= 0 && !s; ) l == u ? (a.push(l), u = n.indexOf(e, l + 1)) : 1 == a.length ? s = [ a.pop(), c ] : ((r = a.pop()) < i && (i = r, 
o = c), c = n.indexOf(t, l + 1)), l = u < c && u >= 0 ? u : c;
a.length && (s = [ i, o ]);
}
return s;
}
e.exports = a, a.range = i;
}, function(e, t, n) {
(function(e, t) {
!function(e, n) {
"use strict";
if (!e.setImmediate) {
var a = 1, r = {}, i = !1, o = e.document, s, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
u = u && u.setTimeout ? u : e, "[object process]" === {}.toString.call(e.process) ? h() : f() ? g() : e.MessageChannel ? m() : o && "onreadystatechange" in o.createElement("script") ? _() : b(), 
u.setImmediate = c, u.clearImmediate = l;
}
function c(e) {
"function" != typeof e && (e = new Function("" + e));
for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
var i = {
callback: e,
args: t
};
return r[a] = i, s(a), a++;
}
function l(e) {
delete r[e];
}
function d(e) {
var t = e.callback, a = e.args;
switch (a.length) {
case 0:
t();
break;

case 1:
t(a[0]);
break;

case 2:
t(a[0], a[1]);
break;

case 3:
t(a[0], a[1], a[2]);
break;

default:
t.apply(n, a);
break;
}
}
function p(e) {
if (i) setTimeout(p, 0, e); else {
var t = r[e];
if (t) {
i = !0;
try {
d(t);
} finally {
l(e), i = !1;
}
}
}
}
function h() {
s = function(e) {
t.nextTick(function() {
p(e);
});
};
}
function f() {
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
s = function(n) {
e.postMessage(t + n, "*");
};
}
function m() {
var e = new MessageChannel();
e.port1.onmessage = function(e) {
var t;
p(e.data);
}, s = function(t) {
e.port2.postMessage(t);
};
}
function _() {
var e = o.documentElement;
s = function(t) {
var n = o.createElement("script");
n.onreadystatechange = function() {
p(t), n.onreadystatechange = null, e.removeChild(n), n = null;
}, e.appendChild(n);
};
}
function b() {
s = function(e) {
setTimeout(p, 0, e);
};
}
}("undefined" == typeof self ? void 0 === e ? this : e : self);
}).call(this, n(1), n(110));
}, function(e, t, n) {
"use strict";
(function(e) {
function n(t, n, a, ...r) {
let i;
"function" != typeof a && (i = a, a = r[r.length - 1]);
let o = n.split(".");
const s = o.shift().toString(), u = o.join(".").toString();
let c;
return e(t).each(function() {
this.addEventListener(s, function(t) {
let n = e.Event(t);
(!i || i && e(n.target).is(i)) && a.call(n.target, n);
}, !0);
});
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.onCapture = n, t.default = n;
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(161);
t.hashSum = a;
const r = n(17);
function i(e, t) {
return SiteID.create(e, t);
}
t.GMApi = r.GMApi, t.create = i;
class SiteID {
constructor(e, t) {
this._ = Math.random() * Date.now(), this.options = {
chkSec: 600
}, this.options = Object.assign(this.options, t), this.IDKEY = a(e);
}
static create(e, t) {
return new this(e, t);
}
checkDate(e, t = this.options.chkSec) {
return o(e, t);
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
return s(e, this.IDKEY);
}
getValue(e, t) {
return r.GMApi.getValue(this.hashKey(e), t);
}
setValue(e, t) {
return r.GMApi.setValue(this.hashKey(e), t), this;
}
}
function o(e, t = 600) {
"number" == typeof e && (e = new Date(e));
let n = e.valueOf(), a = (Date.now() - n) / 1e3;
if (0 == a) return 1;
if (a > 0 && a >= t) return a;
let r = new Date();
return e.getDay() != r.getDay() ? (console.log(e, r), console.log(e.getDay(), r.getDay()), 
1) : 0 - Math.abs(a);
}
function s(e, t) {
return t ? t.toString() + e : e;
}
t.SiteID = SiteID, t.default = SiteID, t.checkDate = o, t.hashKey = s;
}, function(e, t, n) {
"use strict";
function a(e, t) {
for (;e.length < t; ) e = "0" + e;
return e;
}
function r(e, t) {
var n, a, r;
if (0 === t.length) return e;
for (n = 0, r = t.length; n < r; n++) e = (e << 5) - e + (a = t.charCodeAt(n)), 
e |= 0;
return e < 0 ? -2 * e : e;
}
function i(e, t, n) {
return Object.keys(t).sort().reduce(a, e);
function a(e, a) {
return o(e, t[a], a, n);
}
}
function o(e, t, n, a) {
var o = r(r(r(e, n), s(t)), typeof t);
return null === t ? r(o, "null") : void 0 === t ? r(o, "undefined") : "object" == typeof t ? -1 !== a.indexOf(t) ? r(o, "[Circular]" + n) : (a.push(t), 
i(o, t, a)) : r(o, t.toString());
}
function s(e) {
return Object.prototype.toString.call(e);
}
function u(e) {
return a(o(0, e, "", []).toString(16), 8);
}
e.exports = u;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(163), r = n(184), i = n(136), o = n(115), s = n(211), u = n(228), c = n(232), l = n(132);
t.defaultOptions = {};
class zhRegExp extends RegExp {
constructor(e, t = null, n = {}, ...o) {
null !== t && "object" == typeof t && (t = (n = Object.assign({}, t)).flags || null), 
"string" == typeof n && (n = {
skip: n
}), "string" == typeof n.flags && (t = n.flags);
let u = "string" == typeof t;
if (n.disableZh && n.disableLocalRange && !n.on) if (n.parseRegularExpressionString && "string" == typeof e) {
let n = zhRegExp.parseRegularExpressionString(e);
n && (e = new RegExp(n.source, n.flags), t = u ? t : e.flags);
} else e instanceof RegExp && (e = e.source, t = u ? t : e.flags); else {
let o;
const c = n.zhTable || (n.greedyTable ? a.zhTableAutoGreedyTable : l.auto);
if (e instanceof RegExp) {
let t = i.parseRegExp(e.toString());
o = new r.default(t);
} else {
if (n.parseRegularExpressionString && "string" == typeof e) {
let n = zhRegExp.parseRegularExpressionString(e);
n && (e = n.source, t = u ? t : n.flags);
}
o = r.default.create(e, t || "");
}
n.disableZh || o.on(r.ParserEventEmitterEvent.default, function(e) {
e.old_raw = e.old_raw || e.raw, e.raw = a._word_zh_core(e.raw, n.skip, c, n), o.emit(r.ParserEventEmitterEvent.change, e);
}), n.disableLocalRange || o.on(r.ParserEventEmitterEvent.class_range, function(e, ...t) {
let i = e.min.raw, u = e.max.raw, l = s.default(i, u, {
createRegExpString: !0
});
l && (n.allowLocalRangeAutoZh && (l = a._word_zh_core2(l, n.skip, c, n)), e.old_raw = e.old_raw || e.raw, 
e.raw = l, o.emit(r.ParserEventEmitterEvent.change, e));
}), n.on && Object.keys(n.on).forEach(function(e) {
o.on(e, n.on[e]);
}), o.resume(), e = o.getSource(!!n.debugChanged || !n.noUniqueClass || n.sortClass, n), 
t = u ? t : o.flags;
}
super(e, t || "");
}
static create(e, t = null, n, ...a) {
return new this(e, t, n, ...a);
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
let [n, a, r, i] = t;
return {
source: void 0 !== r ? r : "",
flags: void 0 !== i ? i : "",
slash: n,
input: e
};
}
return null;
}
static get support() {
return o.default;
}
static get version() {
return c.version;
}
}
t.zhRegExp = zhRegExp, function(e) {
e.isRegExp = u.isRegExp;
}(zhRegExp = t.zhRegExp || (t.zhRegExp = {})), t.parseRegularExpressionString = zhRegExp.parseRegularExpressionString, 
t.isRegExp = zhRegExp.isRegExp, t.create = zhRegExp.create.bind(zhRegExp), t.version = c.version, 
t.default = zhRegExp;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(132), r = n(183);
function i(e, t = {}) {
return t.safe = !1, t.greedyTable = t.greedyTable || !0, a.auto(e, t);
}
function o(e, t, n = a.auto, i = {}) {
let o;
return i.unsafe, o = {
greedyTable: i.greedyTable,
safe: !1
}, e.replace(r._re_cjk_conv("ug"), function(e) {
if (t && -1 != t.indexOf(e)) return e;
let a = n(e, o);
return a.length > 1 ? "[" + a.join("") + "]" : a[0];
});
}
function s(e, t, n = a.auto, i = {}) {
let o;
return i.unsafe, o = {
greedyTable: i.greedyTable,
safe: !1
}, e.replace(r._re_cjk_conv("ug"), function(e) {
if (t && -1 != t.indexOf(e)) return e;
let a;
return n(e, o).join("");
});
}
t.zhTableAutoGreedyTable = i, t._word_zh_core = o, t._word_zh_core2 = s, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var a = n(165);
t.zh2jp = a.zh2jp, t.zht2jp = a.zht2jp, t.zhs2jp = a.zhs2jp, t.zhs2zht = a.zhs2zht, 
t.zht2zhs = a.zht2zhs, t.cjk2zhs = a.cjk2zhs, t.jp2zhs = a.jp2zhs, t.jp2zht = a.jp2zht, 
t.cjk2zht = a.cjk2zht, t.cjk2jp = a.cjk2jp, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(113), r = n(171);
t.ZHJP_TABLE = r.default, t.ZHJP_TABLE_SAFE = r.TABLE_SAFE;
const i = n(124);
t.KEY_JP = "jp", t.KEY_ZHT = "zht", t.KEY_ZHS = "zhs";
let o = !1;
t.defaultOptions = {
safe: !0
};
const s = new RegExp(i._re_cjk_conv("u").source + "+", "u");
var u;
function c(e, n) {
return s.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), a.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let a;
return (a = h(e, t.KEY_ZHT, t.KEY_JP, n.safe)) ? a : (a = h(e, t.KEY_ZHS, t.KEY_JP, n.safe)) ? a : e;
}).join("")) : e;
}
function l(e, n) {
return s.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), a.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let a;
return (a = h(e, t.KEY_JP, t.KEY_ZHT, n.safe)) ? a : (a = h(e, t.KEY_ZHS, t.KEY_ZHT, n.safe)) ? a : e;
}).join("")) : e;
}
function d(e, n) {
return s.test(e.toString()) ? (n = Object.assign({}, t.defaultOptions, n), a.split(e).map(function(e) {
if (n.skip && -1 != n.skip.indexOf(e)) return e;
let a;
return (a = h(e, t.KEY_JP, t.KEY_ZHS, n.safe)) ? a : (a = h(e, t.KEY_ZHT, t.KEY_ZHS, n.safe)) ? a : e;
}).join("")) : e;
}
function p(e) {
if (o && !e) return t.TABLE;
function n(e) {
let n = {};
return n[t.KEY_JP] = {}, n[t.KEY_ZHT] = {}, n[t.KEY_ZHS] = {}, e.forEach(function(e) {
let [a, r, i] = e, o = t.KEY_JP;
for (let e of a) e && !n[o][e] && (n[o][e] = n[o][e] || {}, n[o][e][o] = e, n[o][e].zht = r[0], 
n[o][e].zhs = i[0]);
o = t.KEY_ZHT;
for (let e of r) e && !n[o][e] && (n[o][e] = n[o][e] || {}, n[o][e].jp = a[0], n[o][e][o] = e, 
n[o][e].zhs = i[0]);
o = t.KEY_ZHS;
for (let e of i) e && !n[o][e] && (n[o][e] = n[o][e] || {}, n[o][e].jp = a[0], n[o][e].zht = r[0], 
n[o][e][o] = e);
}), n;
}
return t.TABLE = n(r.default), t.TABLE_SAFE = n(r.TABLE_SAFE), o = !0, t.TABLE;
}
function h(e, n, a, r) {
return r ? t.TABLE_SAFE[n][e] ? t.TABLE_SAFE[n][e][a] : null : t.TABLE[n][e] ? t.TABLE[n][e][a] : null;
}
!function(e) {
p();
let n = Object.keys(t.TABLE);
n.forEach(function(r) {
n.forEach(function(n) {
r != n && (e[`${r}2${n}`] = function(e, i) {
return s.test(e.toString()) ? (i = Object.assign({}, t.defaultOptions, i), a.split(e).map(function(e) {
if (i.skip && -1 != i.skip.indexOf(e)) return e;
let t;
return (t = h(e, r, n, i.safe)) ? t : e;
}).join("")) : e;
});
});
});
}(u || (u = {})), t.jp2zht = u.jp2zht, t.jp2zhs = u.jp2zhs, t.zhs2jp = u.zhs2jp, 
t.zht2jp = u.zht2jp, t.zht2zhs = u.zht2zhs, t.zhs2zht = u.zhs2zht, t.zh2jp = c, 
t.cjk2jp = c, t.cjk2zht = l, t.cjk2zhs = d, t.init = p, t._getdata = h, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(167), r = n(169);
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
return e instanceof UString ? e.toArray() : a.default(String(e));
}
toArray() {
return this._arr || (this._arr = a.default(String(this))), this._arr;
}
split(e, t) {
let n, a = String(this);
return "" === e ? (n = UString.toArray(this), void 0 !== t && (n = n.slice(0, t))) : n = String.prototype.split.call(a, e, t), 
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
let a = UString.toArray(e), r = 0, i = 0, o = a[a.length - 1];
do {
if (-1 != (r = n.indexOf(a[0], i))) {
if (n.slice(r, r + a.length).join("") == e) return t + r;
i = r, a.length > 1 && (i = (r = n.indexOf(o, r + 1)) - a.length);
}
i++;
} while (-1 != r && i < n.length);
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
let n = UString.toArray(this), a = UString.toArray(e);
return (void 0 === t || t > n.length) && (t = n.length), this.substring(t - a.length, t) === e;
}
padEnd(e, t) {
e >>= 0, t = String(void 0 !== t ? t : " ");
let n = this.split(""), a = this.split.call(t, "");
return n.length > e ? String(this) : ((e -= n.length) > a.length && (t += t.repeat(e / a.length), 
a = new UString(t)), String(this) + a.slice(0, e));
}
padStart(e, t) {
e >>= 0, t = String(void 0 !== t ? t : " ");
let n = this.split(""), a = this.split.call(t, "");
return n.length > e ? String(this) : ((e -= n.length) > a.length && (t += t.repeat(e / a.length), 
a = new UString(t)), a.slice(0, e) + String(this));
}
static create(e, ...t) {
return new this(e, ...t);
}
static get support() {
let e = r.default(this);
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
const a = n(168), r = a.default;
r.substr = a.substring;
const i = r;
Object.defineProperty(i, "__esModule", {
value: !0
}), i.default = i.runes = i, e.exports = i;
}, function(e, t, n) {
"use strict";
function a(e) {
if ("string" != typeof e) throw new Error("string cannot be undefined or null");
const t = [];
let n = 0, a = 0;
for (;n < e.length; ) l(e[n + (a += r(n + a, e))]) && a++, u(e[n + a]) && a++, c(e[n + a]) && a++, 
d(e[n + a]) ? a++ : (t.push(e.substring(n, n + a)), n += a, a = 0);
return t;
}
function r(e, t) {
const n = t[e];
if (!i(n) || e === t.length - 1) return 1;
const a = n + t[e + 1];
let r = t.substring(e + 2, e + 5);
return o(a) && o(r) ? 4 : s(r) ? 4 : 2;
}
function i(e) {
return e && h(e[0].charCodeAt(0), t.HIGH_SURROGATE_START, t.HIGH_SURROGATE_END);
}
function o(e) {
return h(p(e), t.REGIONAL_INDICATOR_START, t.REGIONAL_INDICATOR_END);
}
function s(e) {
return h(p(e), t.FITZPATRICK_MODIFIER_START, t.FITZPATRICK_MODIFIER_END);
}
function u(e) {
return "string" == typeof e && h(e.charCodeAt(0), t.VARIATION_MODIFIER_START, t.VARIATION_MODIFIER_END);
}
function c(e) {
return "string" == typeof e && h(e.charCodeAt(0), t.DIACRITICAL_MARKS_START, t.DIACRITICAL_MARKS_END);
}
function l(e) {
return "string" == typeof e && -1 !== t.GRAPHEMS.indexOf(e.charCodeAt(0));
}
function d(e) {
return "string" == typeof e && e.charCodeAt(0) === t.ZWJ;
}
function p(e) {
const n = e.charCodeAt(0) - t.HIGH_SURROGATE_START, a = e.charCodeAt(1) - t.LOW_SURROGATE_START;
return (n << 10) + a + 65536;
}
function h(e, t, n) {
return e >= t && e <= n;
}
function f(e, t, n) {
const r = a(e);
if (void 0 === t) return e;
if (t >= r.length) return "";
const i = r.length - t, o = void 0 === n ? i : n;
let s = t + o;
return s > t + i && (s = void 0), r.slice(t, s).join("");
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.HIGH_SURROGATE_START = 55296, t.HIGH_SURROGATE_END = 56319, t.LOW_SURROGATE_START = 56320, 
t.REGIONAL_INDICATOR_START = 127462, t.REGIONAL_INDICATOR_END = 127487, t.FITZPATRICK_MODIFIER_START = 127995, 
t.FITZPATRICK_MODIFIER_END = 127999, t.VARIATION_MODIFIER_START = 65024, t.VARIATION_MODIFIER_END = 65039, 
t.DIACRITICAL_MARKS_START = 8400, t.DIACRITICAL_MARKS_END = 8447, t.ZWJ = 8205, 
t.GRAPHEMS = [ 776, 2359, 2359, 2367, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520 ], 
t.runes = a, t.nextUnits = r, t.isFirstOfSurrogatePair = i, t.isRegionalIndicator = o, 
t.isFitzpatrickModifier = s, t.isVariationSelector = u, t.isDiacriticalMark = c, 
t.isGraphem = l, t.isZeroWidthJoiner = d, t.codePointFromSurrogatePair = p, t.betweenInclusive = h, 
t.substring = f, t.default = a, t.substr = f;
}, function(e, t, n) {
"use strict";
function a(e, t) {
let n = Object.getOwnPropertyDescriptors(e.prototype), a = Object.keys(n).reduce(function(a, r) {
return (t || !n[r].get && !n[r].set) && (a[r] = e.prototype[r]), a;
}, {});
return Object.assign({}, e.prototype, a);
}
const r = a;
r.default = r.classPrototype = r, e.exports = r;
}, function(e, t, n) {
(function(t) {
!function(t, n) {
e.exports = n();
}(this, function() {
"use strict";
var e = "function" == typeof Promise, n = "object" == typeof self ? self : t, a = "undefined" != typeof Symbol, r = "undefined" != typeof Map, i = "undefined" != typeof Set, o = "undefined" != typeof WeakMap, s = "undefined" != typeof WeakSet, u = "undefined" != typeof DataView, c = a && void 0 !== Symbol.iterator, l = a && void 0 !== Symbol.toStringTag, d = i && "function" == typeof Set.prototype.entries, p = r && "function" == typeof Map.prototype.entries, h = d && Object.getPrototypeOf(new Set().entries()), f = p && Object.getPrototypeOf(new Map().entries()), g = c && "function" == typeof Array.prototype[Symbol.iterator], m = g && Object.getPrototypeOf([][Symbol.iterator]()), _ = c && "function" == typeof String.prototype[Symbol.iterator], b = _ && Object.getPrototypeOf(""[Symbol.iterator]()), y = 8, v = -1;
function w(t) {
var a = typeof t;
if ("object" !== a) return a;
if (null === t) return "null";
if (t === n) return "global";
if (Array.isArray(t) && (!1 === l || !(Symbol.toStringTag in t))) return "Array";
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
var c = l && t[Symbol.toStringTag];
if ("string" == typeof c) return c;
var d = Object.getPrototypeOf(t);
return d === RegExp.prototype ? "RegExp" : d === Date.prototype ? "Date" : e && d === Promise.prototype ? "Promise" : i && d === Set.prototype ? "Set" : r && d === Map.prototype ? "Map" : s && d === WeakSet.prototype ? "WeakSet" : o && d === WeakMap.prototype ? "WeakMap" : u && d === DataView.prototype ? "DataView" : r && d === f ? "Map Iterator" : i && d === h ? "Set Iterator" : g && d === m ? "Array Iterator" : _ && d === b ? "String Iterator" : null === d ? "Object" : Object.prototype.toString.call(t).slice(y, v);
}
return w;
});
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(113), r = n(172), i = a.array_unique([ [ "蝕", "蝕", "蚀" ], [ "絲", "絲", "丝" ], [ "異", "異", "异" ], [ "謎", "謎", "谜" ], [ "氷", "冰", "冰" ], [ "詛", "詛", "诅" ], [ "貪", "貪", "贪" ], [ "館", "館", "馆" ], [ "画", "劃", "划" ], [ "誰", "誰", "谁" ], [ "鶏", "雞", "鸡" ], [ "宮", "宮", "宫" ], [ "殻", "殻", "壳" ], [ "館", "館", "馆" ], [ "槍", "槍", "枪" ], [ "静", "靜", "静" ], [ "髪", "髮", null ], [ "棄", "棄", "弃" ], [ "強", "強", "强" ], [ "罵", "罵", "骂" ], [ "駄", "馱", "驮" ], [ "沢", "澤", "泽" ], [ "歴", "歷", "历" ], [ "暦", "曆", "历" ], [ "刹", "剎", "刹" ], [ "錬", "鍊", "炼" ], [ "蓋", "蓋", "盖" ], [ "決", "決", "决" ], [ "晩", "晚", "晚" ], [ "恒", "恆", "恒" ], [ "准", "準", "准" ], [ "準", "準", "准" ], [ "傑", "傑", "杰" ], [ "圏", "圈", "圈" ], [ "煙", "煙", "烟" ], [ "甦", "甦", "苏" ], [ "並", "並", "并" ], [ "贓", "贓", "赃" ], [ "鹹", "鹹", "咸" ], [ "踪", "蹤", "踪" ], [ "踪", "踪", "踪" ], [ "秘", "祕", "秘" ], [ "黙", "默", "默" ], [ "圧", "壓", "压" ], [ "凄", "淒", "凄" ], [ "凄", "悽", "凄" ], [ "穀󠄁", "穀󠄀", "谷" ] ]), o = a.array_unique([ [ "絶", "絕", "绝" ], [ "別", "別", "别" ], [ "魯", "魯", "鲁" ], [ "蘇", "蘇", "苏" ], [ "巻", "卷", "卷" ], [ "弐", "貳", "贰" ], [ "隷", "隸", "隶" ] ]);
t.TABLE = [], i.forEach(function([e, n, a]) {
s(t.TABLE, e, n, a);
}), t.TABLE = a.array_unique(t.TABLE.concat(r.filter(function(e) {
return ![ "尨" ].includes(e[0][0]);
}))), t.TABLE_SAFE = [];
{
let e = [ "系", "欠", "凶", "后", "只", "隻", "无", "叶" ];
t.TABLE = t.TABLE.filter(function(t) {
let [n, a, r] = t;
return !(n[0] == a[0] && n[0] == r[0] || e.includes(n[0]) || e.includes(a[0]) || e.includes(r[0]));
}), t.TABLE_SAFE = [], o.forEach(function([e, n, a]) {
s(t.TABLE, e, n, a), s(t.TABLE_SAFE, e, n, a);
});
let n = [];
for (let e in t.TABLE) {
if (n.includes(e)) continue;
let [a, r, i] = t.TABLE[e], o = !0, s;
for (s in t.TABLE) {
if (s == e) continue;
let [n, a, u] = t.TABLE[s];
if (r.includes(a[0])) {
o = !1;
break;
}
if (i.includes(u[0])) {
o = !1;
break;
}
}
o ? t.TABLE_SAFE.push(t.TABLE[e]) : (n.push(e), n.push(s));
}
}
function s(e, t, n, a) {
return t = Array.isArray(t) ? t : [ t ], n = Array.isArray(n) ? n : [ n ], a = Array.isArray(a) ? a : [ a ], 
e.push([ t, n, a ]), e;
}
t.addNew = s, t.default = t.TABLE;
}, function(e) {
e.exports = [ [ [ "万" ], [ "萬" ], [ "万" ] ], [ [ "予" ], [ "預" ], [ "预" ] ], [ [ "凶" ], [ "兇" ], [ "凶" ] ], [ [ "欠" ], [ "缺" ], [ "缺" ] ], [ [ "与" ], [ "與" ], [ "与" ] ], [ [ "包" ], [ "包" ], [ "包" ] ], [ [ "台" ], [ "台" ], [ "台" ] ], [ [ "弁" ], [ "辨", "瓣", "辯" ], [ "辨", "瓣", "辩" ] ], [ [ "糸" ], [ "絲" ], [ "丝" ] ], [ [ "缶" ], [ "罐" ], [ "罐" ] ], [ [ "虫" ], [ "蟲" ], [ "虫" ] ], [ [ "伝" ], [ "傳" ], [ "传" ] ], [ [ "庄" ], [ "莊" ], [ "庄" ] ], [ [ "余" ], [ "餘" ], [ "余" ] ], [ [ "見" ], [ "見" ], [ "见" ] ], [ [ "貝" ], [ "貝" ], [ "贝" ] ], [ [ "車" ], [ "車" ], [ "车" ] ], [ [ "体" ], [ "體" ], [ "体" ] ], [ [ "尨" ], [ "彪" ], [ "彪" ] ], [ [ "券" ], [ "卷" ], [ "卷" ] ], [ [ "協" ], [ "協" ], [ "协" ] ], [ [ "東" ], [ "東" ], [ "东" ] ], [ [ "糾" ], [ "糾" ], [ "纠" ] ], [ [ "芸" ], [ "藝" ], [ "艺" ] ], [ [ "長" ], [ "長" ], [ "长" ] ], [ [ "門" ], [ "門" ], [ "门" ] ], [ [ "係" ], [ "係" ], [ "系" ] ], [ [ "則" ], [ "則" ], [ "则" ] ], [ [ "帥" ], [ "帥" ], [ "帅" ] ], [ [ "後" ], [ "後" ], [ "后" ] ], [ [ "春" ], [ "春" ], [ "春" ] ], [ [ "為" ], [ "為" ], [ "为" ] ], [ [ "紅" ], [ "紅" ], [ "红" ] ], [ [ "紀" ], [ "紀" ], [ "纪" ] ], [ [ "約" ], [ "約" ], [ "约" ] ], [ [ "計" ], [ "計" ], [ "计" ] ], [ [ "訂" ], [ "訂" ], [ "订" ] ], [ [ "貞" ], [ "貞" ], [ "贞" ] ], [ [ "負" ], [ "負" ], [ "负" ] ], [ [ "軍" ], [ "軍" ], [ "军" ] ], [ [ "軌" ], [ "軌" ], [ "轨" ] ], [ [ "風" ], [ "風" ], [ "风" ] ], [ [ "飛" ], [ "飛" ], [ "飞" ] ], [ [ "個" ], [ "個" ], [ "个" ] ], [ [ "倫" ], [ "倫" ], [ "伦" ] ], [ [ "倉" ], [ "倉" ], [ "仓" ] ], [ [ "凍" ], [ "凍" ], [ "冻" ] ], [ [ "剛" ], [ "剛" ], [ "刚" ] ], [ [ "員" ], [ "員" ], [ "员" ] ], [ [ "孫" ], [ "孫" ], [ "孙" ] ], [ [ "島" ], [ "島" ], [ "岛" ] ], [ [ "師" ], [ "師" ], [ "师" ] ], [ [ "庫" ], [ "庫" ], [ "库" ] ], [ [ "時" ], [ "時" ], [ "时" ] ], [ [ "書" ], [ "書" ], [ "书" ] ], [ [ "畝" ], [ "畝" ], [ "亩" ] ], [ [ "紡" ], [ "紡" ], [ "纺" ] ], [ [ "紋" ], [ "紋" ], [ "纹" ] ], [ [ "純" ], [ "純" ], [ "纯" ] ], [ [ "級" ], [ "級" ], [ "级" ] ], [ [ "納" ], [ "納" ], [ "纳" ] ], [ [ "紙" ], [ "紙" ], [ "纸" ] ], [ [ "紛" ], [ "紛" ], [ "纷" ] ], [ [ "脅" ], [ "脅" ], [ "胁" ] ], [ [ "記" ], [ "記" ], [ "记" ] ], [ [ "討" ], [ "討" ], [ "讨" ] ], [ [ "訓" ], [ "訓" ], [ "训" ] ], [ [ "財" ], [ "財" ], [ "财" ] ], [ [ "貢" ], [ "貢" ], [ "贡" ] ], [ [ "軒" ], [ "軒" ], [ "轩" ] ], [ [ "針" ], [ "針" ], [ "针" ] ], [ [ "陣" ], [ "陣" ], [ "阵" ] ], [ [ "隻" ], [ "隻" ], [ "只" ] ], [ [ "飢" ], [ "饑" ], [ "饥" ] ], [ [ "馬" ], [ "馬" ], [ "马" ] ], [ [ "党" ], [ "黨" ], [ "党" ] ], [ [ "蚕" ], [ "蠶" ], [ "蚕" ] ], [ [ "乾" ], [ "乾" ], [ "干" ] ], [ [ "偽" ], [ "偽" ], [ "伪" ] ], [ [ "偉" ], [ "偉" ], [ "伟" ] ], [ [ "偵" ], [ "偵" ], [ "侦" ] ], [ [ "側" ], [ "側" ], [ "侧" ] ], [ [ "務" ], [ "務" ], [ "务" ] ], [ [ "動" ], [ "動" ], [ "动" ] ], [ [ "問" ], [ "問" ], [ "问" ] ], [ [ "堅" ], [ "堅" ], [ "坚" ] ], [ [ "執" ], [ "執" ], [ "执" ] ], [ [ "婦" ], [ "婦" ], [ "妇" ] ], [ [ "帶" ], [ "帶" ], [ "带" ] ], [ [ "帳" ], [ "帳" ], [ "帐" ] ], [ [ "張" ], [ "張" ], [ "张" ] ], [ [ "掃" ], [ "掃" ], [ "扫" ] ], [ [ "捨" ], [ "捨" ], [ "舍" ] ], [ [ "敗" ], [ "敗" ], [ "败" ] ], [ [ "殺" ], [ "殺" ], [ "杀" ] ], [ [ "現" ], [ "現" ], [ "现" ] ], [ [ "統" ], [ "統" ], [ "统" ] ], [ [ "紹" ], [ "紹" ], [ "绍" ] ], [ [ "細" ], [ "細" ], [ "细" ] ], [ [ "紳" ], [ "紳" ], [ "绅" ] ], [ [ "組" ], [ "組" ], [ "组" ] ], [ [ "終" ], [ "終" ], [ "终" ] ], [ [ "習" ], [ "習" ], [ "习" ] ], [ [ "術" ], [ "術" ], [ "术" ] ], [ [ "規" ], [ "規" ], [ "规" ] ], [ [ "訪" ], [ "訪" ], [ "访" ] ], [ [ "許" ], [ "許" ], [ "许" ] ], [ [ "設" ], [ "設" ], [ "设" ] ], [ [ "訟" ], [ "訟" ], [ "讼" ] ], [ [ "販" ], [ "販" ], [ "贩" ] ], [ [ "責" ], [ "責" ], [ "责" ] ], [ [ "貨" ], [ "貨" ], [ "货" ] ], [ [ "貧" ], [ "貧" ], [ "贫" ] ], [ [ "軟" ], [ "軟" ], [ "软" ] ], [ [ "連" ], [ "連" ], [ "连" ] ], [ [ "釣" ], [ "釣" ], [ "钓" ] ], [ [ "閉" ], [ "閉" ], [ "闭" ] ], [ [ "陳" ], [ "陳" ], [ "陈" ] ], [ [ "陸" ], [ "陸" ], [ "陆" ] ], [ [ "陰" ], [ "陰" ], [ "阴" ] ], [ [ "頂" ], [ "頂" ], [ "顶" ] ], [ [ "魚" ], [ "魚" ], [ "鱼" ] ], [ [ "鳥" ], [ "鳥" ], [ "鸟" ] ], [ [ "紺" ], [ "紺" ], [ "绀" ] ], [ [ "備" ], [ "備" ], [ "备" ] ], [ [ "傘" ], [ "傘" ], [ "伞" ] ], [ [ "創" ], [ "創" ], [ "创" ] ], [ [ "勝" ], [ "勝" ], [ "胜" ] ], [ [ "喪" ], [ "喪" ], [ "丧" ] ], [ [ "場" ], [ "場" ], [ "场" ] ], [ [ "報" ], [ "報" ], [ "报" ] ], [ [ "尋" ], [ "尋" ], [ "寻" ] ], [ [ "幾" ], [ "幾" ], [ "几" ] ], [ [ "復" ], [ "復" ], [ "复" ] ], [ [ "揮" ], [ "揮" ], [ "挥" ] ], [ [ "揚" ], [ "揚" ], [ "扬" ] ], [ [ "棟" ], [ "棟" ], [ "栋" ] ], [ [ "殼" ], [ "殼" ], [ "壳" ] ], [ [ "渦" ], [ "渦" ], [ "涡" ] ], [ [ "湯" ], [ "湯" ], [ "汤" ] ], [ [ "測" ], [ "測" ], [ "测" ] ], [ [ "無" ], [ "無" ], [ "无" ] ], [ [ "猶" ], [ "猶" ], [ "犹" ] ], [ [ "筆" ], [ "筆" ], [ "笔" ] ], [ [ "絞" ], [ "絞" ], [ "绞" ] ], [ [ "結" ], [ "結" ], [ "结" ] ], [ [ "絡" ], [ "絡" ], [ "络" ] ], [ [ "給" ], [ "給" ], [ "给" ] ], [ [ "脹" ], [ "脹" ], [ "胀" ] ], [ [ "華" ], [ "華" ], [ "华" ] ], [ [ "視" ], [ "視" ], [ "视" ] ], [ [ "評" ], [ "評" ], [ "评" ] ], [ [ "詞" ], [ "詞" ], [ "词" ] ], [ [ "証" ], [ "證" ], [ "证" ] ], [ [ "詔" ], [ "詔" ], [ "诏" ] ], [ [ "詐" ], [ "詐" ], [ "诈" ] ], [ [ "訴" ], [ "訴" ], [ "诉" ] ], [ [ "診" ], [ "診" ], [ "诊" ] ], [ [ "貯" ], [ "貯" ], [ "贮" ] ], [ [ "費" ], [ "費" ], [ "费" ] ], [ [ "賀" ], [ "賀" ], [ "贺" ] ], [ [ "貴" ], [ "貴" ], [ "贵" ] ], [ [ "買" ], [ "買" ], [ "买" ] ], [ [ "貿" ], [ "貿" ], [ "贸" ] ], [ [ "貸" ], [ "貸" ], [ "贷" ] ], [ [ "軸" ], [ "軸" ], [ "轴" ] ], [ [ "進" ], [ "進" ], [ "进" ] ], [ [ "郵" ], [ "郵" ], [ "邮" ] ], [ [ "鈍" ], [ "鈍" ], [ "钝" ] ], [ [ "開" ], [ "開" ], [ "开" ] ], [ [ "閑" ], [ "閒" ], [ "闲" ] ], [ [ "間" ], [ "間" ], [ "间" ] ], [ [ "隊" ], [ "隊" ], [ "队" ] ], [ [ "階" ], [ "階" ], [ "阶" ] ], [ [ "陽" ], [ "陽" ], [ "阳" ] ], [ [ "雲" ], [ "雲" ], [ "云" ] ], [ [ "項" ], [ "項" ], [ "项" ] ], [ [ "順" ], [ "順" ], [ "顺" ] ], [ [ "飯" ], [ "飯" ], [ "饭" ] ], [ [ "飲" ], [ "飲" ], [ "饮" ] ], [ [ "粧" ], [ "妝" ], [ "妆" ] ], [ [ "債" ], [ "債" ], [ "债" ] ], [ [ "傾" ], [ "傾" ], [ "倾" ] ], [ [ "傷" ], [ "傷" ], [ "伤" ] ], [ [ "勢" ], [ "勢" ], [ "势" ] ], [ [ "園" ], [ "園" ], [ "园" ] ], [ [ "塗" ], [ "塗" ], [ "涂" ] ], [ [ "塊" ], [ "塊" ], [ "块" ] ], [ [ "幹" ], [ "幹" ], [ "干" ] ], [ [ "愛" ], [ "愛" ], [ "爱" ] ], [ [ "損" ], [ "損" ], [ "损" ] ], [ [ "業" ], [ "業" ], [ "业" ] ], [ [ "極" ], [ "極" ], [ "极" ] ], [ [ "溝" ], [ "溝" ], [ "沟" ] ], [ [ "滅" ], [ "滅" ], [ "灭" ] ], [ [ "準" ], [ "準" ], [ "准" ] ], [ [ "煩" ], [ "煩" ], [ "烦" ] ], [ [ "痴" ], [ "痴" ], [ "痴" ] ], [ [ "節" ], [ "節" ], [ "节" ] ], [ [ "絹" ], [ "絹" ], [ "绢" ] ], [ [ "義" ], [ "義" ], [ "义" ] ], [ [ "聖" ], [ "聖" ], [ "圣" ] ], [ [ "腸" ], [ "腸" ], [ "肠" ] ], [ [ "葉" ], [ "葉" ], [ "叶" ] ], [ [ "虜" ], [ "虜" ], [ "虏" ] ], [ [ "補" ], [ "補" ], [ "补" ] ], [ [ "該" ], [ "該" ], [ "该" ] ], [ [ "詳" ], [ "詳" ], [ "详" ] ], [ [ "試" ], [ "試" ], [ "试" ] ], [ [ "詩" ], [ "詩" ], [ "诗" ] ], [ [ "詰" ], [ "詰" ], [ "诘" ] ], [ [ "誇" ], [ "誇" ], [ "夸" ] ], [ [ "誠" ], [ "誠" ], [ "诚" ] ], [ [ "話" ], [ "話" ], [ "话" ] ], [ [ "賊" ], [ "賊" ], [ "贼" ] ], [ [ "資" ], [ "資" ], [ "资" ] ], [ [ "賄" ], [ "賄" ], [ "贿" ] ], [ [ "賃" ], [ "賃" ], [ "赁" ] ], [ [ "較" ], [ "較" ], [ "较" ] ], [ [ "載" ], [ "載" ], [ "载" ] ], [ [ "農" ], [ "農" ], [ "农" ] ], [ [ "運" ], [ "運" ], [ "运" ] ], [ [ "達" ], [ "達" ], [ "达" ] ], [ [ "違" ], [ "違" ], [ "违" ] ], [ [ "過" ], [ "過" ], [ "过" ] ], [ [ "鉛" ], [ "鉛" ], [ "铅" ] ], [ [ "鈴" ], [ "鈴" ], [ "铃" ] ], [ [ "電" ], [ "電" ], [ "电" ] ], [ [ "預" ], [ "預" ], [ "预" ] ], [ [ "頑" ], [ "頑" ], [ "顽" ] ], [ [ "頒" ], [ "頒" ], [ "颁" ] ], [ [ "飼" ], [ "飼" ], [ "饲" ] ], [ [ "飽" ], [ "飽" ], [ "饱" ] ], [ [ "飾" ], [ "飾" ], [ "饰" ] ], [ [ "馱" ], [ "馱" ], [ "驮" ] ], [ [ "触" ], [ "觸" ], [ "触" ] ], [ [ "豊" ], [ "豐" ], [ "丰" ] ], [ [ "銃" ], [ "銃" ], [ "铳" ] ], [ [ "裏" ], [ "裡" ], [ "里" ] ], [ [ "僕" ], [ "僕" ], [ "仆" ] ], [ [ "嘆" ], [ "嘆" ], [ "叹" ] ], [ [ "夢" ], [ "夢" ], [ "梦" ] ], [ [ "奪" ], [ "奪" ], [ "夺" ] ], [ [ "寧" ], [ "寧" ], [ "宁" ] ], [ [ "幣" ], [ "幣" ], [ "币" ] ], [ [ "徹" ], [ "徹" ], [ "彻" ] ], [ [ "態" ], [ "態" ], [ "态" ] ], [ [ "漬" ], [ "漬" ], [ "渍" ] ], [ [ "漢" ], [ "漢" ], [ "汉" ] ], [ [ "漸" ], [ "漸" ], [ "渐" ] ], [ [ "漁" ], [ "漁" ], [ "渔" ] ], [ [ "獄" ], [ "獄" ], [ "狱" ] ], [ [ "監" ], [ "監" ], [ "监" ] ], [ [ "禍" ], [ "禍" ], [ "祸" ] ], [ [ "種" ], [ "種" ], [ "种" ] ], [ [ "箇" ], [ "個" ], [ "个" ] ], [ [ "緊" ], [ "緊" ], [ "紧" ] ], [ [ "網" ], [ "網" ], [ "网" ] ], [ [ "綱" ], [ "綱" ], [ "纲" ] ], [ [ "綿" ], [ "綿" ], [ "绵" ] ], [ [ "維" ], [ "維" ], [ "维" ] ], [ [ "緒" ], [ "緒" ], [ "绪" ] ], [ [ "聞" ], [ "聞" ], [ "闻" ] ], [ [ "製" ], [ "製" ], [ "制" ] ], [ [ "誌" ], [ "誌" ], [ "志" ] ], [ [ "語" ], [ "語" ], [ "语" ] ], [ [ "認" ], [ "認" ], [ "认" ] ], [ [ "誤" ], [ "誤" ], [ "误" ] ], [ [ "誘" ], [ "誘" ], [ "诱" ] ], [ [ "賓" ], [ "賓" ], [ "宾" ] ], [ [ "遠" ], [ "遠" ], [ "远" ] ], [ [ "銀" ], [ "銀" ], [ "银" ] ], [ [ "銅" ], [ "銅" ], [ "铜" ] ], [ [ "銘" ], [ "銘" ], [ "铭" ] ], [ [ "銑" ], [ "銑" ], [ "铣" ] ], [ [ "閣" ], [ "閣" ], [ "阁" ] ], [ [ "閥" ], [ "閥" ], [ "阀" ] ], [ [ "際" ], [ "際" ], [ "际" ] ], [ [ "領" ], [ "領" ], [ "领" ] ], [ [ "鳴" ], [ "鳴" ], [ "鸣" ] ], [ [ "億" ], [ "億" ], [ "亿" ] ], [ [ "儀" ], [ "儀" ], [ "仪" ] ], [ [ "劇" ], [ "劇" ], [ "剧" ] ], [ [ "噴" ], [ "噴" ], [ "喷" ] ], [ [ "墳" ], [ "墳" ], [ "坟" ] ], [ [ "墜" ], [ "墜" ], [ "坠" ] ], [ [ "寬" ], [ "寬" ], [ "宽" ] ], [ [ "審" ], [ "審" ], [ "审" ] ], [ [ "層" ], [ "層" ], [ "层" ] ], [ [ "慶" ], [ "慶" ], [ "庆" ] ], [ [ "慮" ], [ "慮" ], [ "虑" ] ], [ [ "憂" ], [ "憂" ], [ "忧" ] ], [ [ "憤" ], [ "憤" ], [ "愤" ] ], [ [ "撮" ], [ "攝" ], [ "摄" ] ], [ [ "敵" ], [ "敵" ], [ "敌" ] ], [ [ "暫" ], [ "暫" ], [ "暂" ] ], [ [ "標" ], [ "標" ], [ "标" ] ], [ [ "潔" ], [ "潔" ], [ "洁" ] ], [ [ "潤" ], [ "潤" ], [ "润" ] ], [ [ "熱" ], [ "熱" ], [ "热" ] ], [ [ "盤" ], [ "盤" ], [ "盘" ] ], [ [ "確" ], [ "確" ], [ "确" ] ], [ [ "窮" ], [ "窮" ], [ "穷" ] ], [ [ "範" ], [ "範" ], [ "范" ] ], [ [ "締" ], [ "締" ], [ "缔" ] ], [ [ "練" ], [ "練" ], [ "练" ] ], [ [ "緯" ], [ "緯" ], [ "纬" ] ], [ [ "編" ], [ "編" ], [ "编" ] ], [ [ "線" ], [ "線" ], [ "线" ] ], [ [ "緩" ], [ "緩" ], [ "缓" ] ], [ [ "罷" ], [ "罷" ], [ "罢" ] ], [ [ "膚" ], [ "膚" ], [ "肤" ] ], [ [ "衛" ], [ "衛" ], [ "卫" ] ], [ [ "衝" ], [ "衝" ], [ "冲" ] ], [ [ "複" ], [ "複" ], [ "复" ] ], [ [ "談" ], [ "談" ], [ "谈" ] ], [ [ "誕" ], [ "誕" ], [ "诞" ] ], [ [ "請" ], [ "請" ], [ "请" ] ], [ [ "諸" ], [ "諸" ], [ "诸" ] ], [ [ "課" ], [ "課" ], [ "课" ] ], [ [ "調" ], [ "調" ], [ "调" ] ], [ [ "論" ], [ "論" ], [ "论" ] ], [ [ "賠" ], [ "賠" ], [ "赔" ] ], [ [ "賞" ], [ "賞" ], [ "赏" ] ], [ [ "賦" ], [ "賦" ], [ "赋" ] ], [ [ "賢" ], [ "賢" ], [ "贤" ] ], [ [ "賜" ], [ "賜" ], [ "赐" ] ], [ [ "質" ], [ "質" ], [ "质" ] ], [ [ "輝" ], [ "輝" ], [ "辉" ] ], [ [ "輩" ], [ "輩" ], [ "辈" ] ], [ [ "輪" ], [ "輪" ], [ "轮" ] ], [ [ "適" ], [ "適" ], [ "适" ] ], [ [ "遷" ], [ "遷" ], [ "迁" ] ], [ [ "養" ], [ "養" ], [ "养" ] ], [ [ "餓" ], [ "餓" ], [ "饿" ] ], [ [ "駐" ], [ "駐" ], [ "驻" ] ], [ [ "墾" ], [ "墾" ], [ "垦" ] ], [ [ "壇" ], [ "壇" ], [ "坛" ] ], [ [ "奮" ], [ "奮" ], [ "奋" ] ], [ [ "導" ], [ "導" ], [ "导" ] ], [ [ "憲" ], [ "憲" ], [ "宪" ] ], [ [ "憶" ], [ "憶" ], [ "忆" ] ], [ [ "擁" ], [ "擁" ], [ "拥" ] ], [ [ "曇" ], [ "曇" ], [ "昙" ] ], [ [ "樸" ], [ "樸" ], [ "朴" ] ], [ [ "樹" ], [ "樹" ], [ "树" ] ], [ [ "橋" ], [ "橋" ], [ "桥" ] ], [ [ "機" ], [ "機" ], [ "机" ] ], [ [ "濃" ], [ "濃" ], [ "浓" ] ], [ [ "濁" ], [ "濁" ], [ "浊" ] ], [ [ "積" ], [ "積" ], [ "积" ] ], [ [ "築" ], [ "築" ], [ "筑" ] ], [ [ "篤" ], [ "篤" ], [ "笃" ] ], [ [ "縛" ], [ "縛" ], [ "缚" ] ], [ [ "興" ], [ "興" ], [ "兴" ] ], [ [ "親" ], [ "親" ], [ "亲" ] ], [ [ "謀" ], [ "謀" ], [ "谋" ] ], [ [ "諮" ], [ "諮" ], [ "谘" ] ], [ [ "諾" ], [ "諾" ], [ "诺" ] ], [ [ "謁" ], [ "謁" ], [ "谒" ] ], [ [ "諭" ], [ "諭" ], [ "谕" ] ], [ [ "輸" ], [ "輸" ], [ "输" ] ], [ [ "選" ], [ "選" ], [ "选" ] ], [ [ "遺" ], [ "遺" ], [ "遗" ] ], [ [ "錠" ], [ "錠" ], [ "锭" ] ], [ [ "錯" ], [ "錯" ], [ "错" ] ], [ [ "鋼" ], [ "鋼" ], [ "钢" ] ], [ [ "頻" ], [ "頻" ], [ "频" ] ], [ [ "頭" ], [ "頭" ], [ "头" ] ], [ [ "優" ], [ "優" ], [ "优" ] ], [ [ "償" ], [ "償" ], [ "偿" ] ], [ [ "嚇" ], [ "嚇" ], [ "吓" ] ], [ [ "懇" ], [ "懇" ], [ "恳" ] ], [ [ "擬" ], [ "擬" ], [ "拟" ] ], [ [ "濫" ], [ "濫" ], [ "滥" ] ], [ [ "獲" ], [ "獲" ], [ "获" ] ], [ [ "環" ], [ "環" ], [ "环" ] ], [ [ "療" ], [ "療" ], [ "疗" ] ], [ [ "矯" ], [ "矯" ], [ "矫" ] ], [ [ "縮" ], [ "縮" ], [ "缩" ] ], [ [ "績" ], [ "績" ], [ "绩" ] ], [ [ "縫" ], [ "縫" ], [ "缝" ] ], [ [ "臨" ], [ "臨" ], [ "临" ] ], [ [ "謙" ], [ "謙" ], [ "谦" ] ], [ [ "講" ], [ "講" ], [ "讲" ] ], [ [ "謝" ], [ "謝" ], [ "谢" ] ], [ [ "謄" ], [ "謄" ], [ "誊" ] ], [ [ "轄" ], [ "轄" ], [ "辖" ] ], [ [ "還" ], [ "還" ], [ "还" ] ], [ [ "醜" ], [ "醜" ], [ "丑" ] ], [ [ "錘" ], [ "錘" ], [ "锤" ] ], [ [ "鍾" ], [ "鍾" ], [ "钟" ] ], [ [ "鍛" ], [ "鍛" ], [ "锻" ] ], [ [ "鮮" ], [ "鮮" ], [ "鲜" ] ], [ [ "礎" ], [ "礎" ], [ "础" ] ], [ [ "簡" ], [ "簡" ], [ "简" ] ], [ [ "糧" ], [ "糧" ], [ "粮" ] ], [ [ "織" ], [ "織" ], [ "织" ] ], [ [ "繕" ], [ "繕" ], [ "缮" ] ], [ [ "職" ], [ "職" ], [ "职" ] ], [ [ "薦" ], [ "薦" ], [ "荐" ] ], [ [ "謹" ], [ "謹" ], [ "谨" ] ], [ [ "鎖" ], [ "鎖" ], [ "锁" ] ], [ [ "鎮" ], [ "鎮" ], [ "镇" ] ], [ [ "離" ], [ "離" ], [ "离" ] ], [ [ "額" ], [ "額" ], [ "额" ] ], [ [ "題" ], [ "題" ], [ "题" ] ], [ [ "騎" ], [ "騎" ], [ "骑" ] ], [ [ "懲" ], [ "懲" ], [ "惩" ] ], [ [ "璽" ], [ "璽" ], [ "玺" ] ], [ [ "穫" ], [ "穫" ], [ "获" ] ], [ [ "繭" ], [ "繭" ], [ "茧" ] ], [ [ "羅" ], [ "羅" ], [ "罗" ] ], [ [ "譜" ], [ "譜" ], [ "谱" ] ], [ [ "識" ], [ "識" ], [ "识" ] ], [ [ "贈" ], [ "贈" ], [ "赠" ] ], [ [ "鏡" ], [ "鏡" ], [ "镜" ] ], [ [ "難" ], [ "難" ], [ "难" ] ], [ [ "霧" ], [ "霧" ], [ "雾" ] ], [ [ "類" ], [ "類" ], [ "类" ] ], [ [ "願" ], [ "願" ], [ "愿" ] ], [ [ "鯨" ], [ "鯨" ], [ "鲸" ] ], [ [ "麗" ], [ "麗" ], [ "丽" ] ], [ [ "繰" ], [ "繰" ], [ "缲" ] ], [ [ "懸" ], [ "懸" ], [ "悬" ] ], [ [ "競" ], [ "競" ], [ "竞" ] ], [ [ "艦" ], [ "艦" ], [ "舰" ] ], [ [ "議" ], [ "議" ], [ "议" ] ], [ [ "騰" ], [ "騰" ], [ "腾" ] ], [ [ "欄" ], [ "欄" ], [ "栏" ] ], [ [ "護" ], [ "護" ], [ "护" ] ], [ [ "躍" ], [ "躍" ], [ "跃" ] ], [ [ "響" ], [ "響" ], [ "响" ] ], [ [ "襲" ], [ "襲" ], [ "袭" ] ], [ [ "鑑" ], [ "鑑" ], [ "鉴" ] ], [ [ "驚" ], [ "驚" ], [ "惊" ] ], [ [ "両" ], [ "兩" ], [ "两" ] ], [ [ "乗" ], [ "乘" ], [ "乘" ] ], [ [ "乱" ], [ "亂" ], [ "乱" ] ], [ [ "亀" ], [ "龜" ], [ "龟" ] ], [ [ "亜" ], [ "亞" ], [ "亚" ] ], [ [ "仏" ], [ "佛" ], [ "佛" ] ], [ [ "仮" ], [ "假" ], [ "假" ] ], [ [ "会" ], [ "會" ], [ "会" ] ], [ [ "価" ], [ "價" ], [ "价" ] ], [ [ "倶" ], [ "俱" ], [ "俱" ] ], [ [ "倹" ], [ "儉" ], [ "俭" ] ], [ [ "児" ], [ "兒" ], [ "儿" ] ], [ [ "内" ], [ "內" ], [ "内" ] ], [ [ "円" ], [ "圓" ], [ "圆" ] ], [ [ "写" ], [ "寫" ], [ "写" ] ], [ [ "冨" ], [ "富" ], [ "富" ] ], [ [ "処" ], [ "處" ], [ "处" ] ], [ [ "剣" ], [ "劍" ], [ "剑" ] ], [ [ "剤" ], [ "劑" ], [ "剂" ] ], [ [ "剰" ], [ "剩" ], [ "剩" ] ], [ [ "励" ], [ "勵" ], [ "励" ] ], [ [ "労" ], [ "勞" ], [ "劳" ] ], [ [ "勧" ], [ "勸" ], [ "劝" ] ], [ [ "勲" ], [ "勳" ], [ "勋" ] ], [ [ "区" ], [ "區" ], [ "区" ] ], [ [ "医" ], [ "醫" ], [ "医" ] ], [ [ "単" ], [ "單" ], [ "单" ] ], [ [ "厳" ], [ "嚴" ], [ "严" ] ], [ [ "参" ], [ "參" ], [ "参" ] ], [ [ "双" ], [ "雙" ], [ "双" ] ], [ [ "収" ], [ "收" ], [ "收" ] ], [ [ "号" ], [ "號" ], [ "号" ] ], [ [ "啓" ], [ "啟" ], [ "启" ] ], [ [ "営" ], [ "營" ], [ "营" ] ], [ [ "嘱" ], [ "囑" ], [ "嘱" ] ], [ [ "団" ], [ "團" ], [ "团" ] ], [ [ "囲" ], [ "圍" ], [ "围" ] ], [ [ "図" ], [ "圖" ], [ "图" ] ], [ [ "国" ], [ "國" ], [ "国" ] ], [ [ "圧" ], [ "壓" ], [ "压" ] ], [ [ "堕" ], [ "墮" ], [ "堕" ] ], [ [ "塁" ], [ "壘" ], [ "垒" ] ], [ [ "塩" ], [ "鹽" ], [ "盐" ] ], [ [ "増" ], [ "增" ], [ "增" ] ], [ [ "壊" ], [ "壞" ], [ "坏" ] ], [ [ "壌" ], [ "壤" ], [ "壤" ] ], [ [ "壮" ], [ "壯" ], [ "壮" ] ], [ [ "声" ], [ "聲" ], [ "声" ] ], [ [ "壱" ], [ "壹" ], [ "壹" ] ], [ [ "売" ], [ "賣" ], [ "卖" ] ], [ [ "変" ], [ "變" ], [ "变" ] ], [ [ "奨" ], [ "獎" ], [ "奖" ] ], [ [ "姉" ], [ "姐" ], [ "姐" ] ], [ [ "姫" ], [ "姬" ], [ "姬" ] ], [ [ "娯" ], [ "娛" ], [ "娱" ] ], [ [ "嬢" ], [ "孃" ], [ "娘" ] ], [ [ "学" ], [ "學" ], [ "学" ] ], [ [ "宝" ], [ "寶" ], [ "宝" ] ], [ [ "実" ], [ "實" ], [ "实" ] ], [ [ "寛" ], [ "寬" ], [ "宽" ] ], [ [ "寝" ], [ "寢" ], [ "寝" ] ], [ [ "対" ], [ "對" ], [ "对" ] ], [ [ "寿" ], [ "壽" ], [ "寿" ] ], [ [ "専" ], [ "專" ], [ "专" ] ], [ [ "将" ], [ "將" ], [ "将" ] ], [ [ "尽" ], [ "盡" ], [ "尽" ] ], [ [ "属" ], [ "屬" ], [ "属" ] ], [ [ "峡" ], [ "峽" ], [ "峡" ] ], [ [ "巌" ], [ "巖" ], [ "巖" ] ], [ [ "巻" ], [ "卷" ], [ "卷" ] ], [ [ "帯" ], [ "帶" ], [ "带" ] ], [ [ "帰" ], [ "歸" ], [ "归" ] ], [ [ "庁" ], [ "廳" ], [ "厅" ] ], [ [ "広" ], [ "廣" ], [ "广" ] ], [ [ "廃" ], [ "廢" ], [ "废" ] ], [ [ "廼" ], [ "迺" ], [ "迺" ] ], [ [ "弍" ], [ "貳" ], [ "贰" ] ], [ [ "弐" ], [ "貳" ], [ "贰" ] ], [ [ "弥" ], [ "彌" ], [ "弥" ] ], [ [ "弾" ], [ "彈" ], [ "弹" ] ], [ [ "当" ], [ "當" ], [ "当" ] ], [ [ "彦" ], [ "彥" ], [ "彥" ] ], [ [ "径" ], [ "徑" ], [ "径" ] ], [ [ "従" ], [ "從" ], [ "从" ] ], [ [ "徳" ], [ "德" ], [ "德" ] ], [ [ "徴" ], [ "徵" ], [ "征" ] ], [ [ "応" ], [ "應" ], [ "应" ] ], [ [ "恋" ], [ "戀" ], [ "恋" ] ], [ [ "恵" ], [ "惠" ], [ "惠" ] ], [ [ "悦" ], [ "悅" ], [ "悅" ] ], [ [ "悩" ], [ "惱" ], [ "恼" ] ], [ [ "悪" ], [ "惡" ], [ "恶" ] ], [ [ "惨" ], [ "慘" ], [ "惨" ] ], [ [ "懐" ], [ "懷" ], [ "怀" ] ], [ [ "戦" ], [ "戰" ], [ "战" ] ], [ [ "戯" ], [ "戲" ], [ "戏" ] ], [ [ "戸" ], [ "戶" ], [ "户" ] ], [ [ "払" ], [ "拂" ], [ "拂" ] ], [ [ "択" ], [ "擇" ], [ "择" ] ], [ [ "担" ], [ "擔" ], [ "担" ] ], [ [ "拝" ], [ "拜" ], [ "拜" ] ], [ [ "拠" ], [ "據" ], [ "据" ] ], [ [ "拡" ], [ "擴" ], [ "扩" ] ], [ [ "挙" ], [ "舉" ], [ "举" ] ], [ [ "挟" ], [ "挾" ], [ "挟" ] ], [ [ "掲" ], [ "揭" ], [ "揭" ] ], [ [ "掴" ], [ "摑" ], [ "掴" ] ], [ [ "揺" ], [ "搖" ], [ "摇" ] ], [ [ "摂" ], [ "攝" ], [ "摄" ] ], [ [ "撃" ], [ "擊" ], [ "击" ] ], [ [ "数" ], [ "數" ], [ "数" ] ], [ [ "斉" ], [ "齊" ], [ "齐" ] ], [ [ "斎" ], [ "齋" ], [ "斋" ] ], [ [ "断" ], [ "斷" ], [ "断" ] ], [ [ "旧" ], [ "舊" ], [ "旧" ] ], [ [ "昼" ], [ "晝" ], [ "昼" ] ], [ [ "暁" ], [ "曉" ], [ "晓" ] ], [ [ "暦" ], [ "曆" ], [ "历" ] ], [ [ "曽" ], [ "曾" ], [ "曾" ] ], [ [ "条" ], [ "條" ], [ "条" ] ], [ [ "来" ], [ "來" ], [ "来" ] ], [ [ "枢" ], [ "樞" ], [ "枢" ] ], [ [ "査" ], [ "查" ], [ "查" ] ], [ [ "栄" ], [ "榮" ], [ "荣" ] ], [ [ "桜" ], [ "櫻" ], [ "樱" ] ], [ [ "桟" ], [ "棧" ], [ "栈" ] ], [ [ "検" ], [ "檢" ], [ "检" ] ], [ [ "楼" ], [ "樓" ], [ "楼" ] ], [ [ "楽" ], [ "樂" ], [ "乐" ] ], [ [ "様" ], [ "樣" ], [ "样" ] ], [ [ "権" ], [ "權" ], [ "权" ] ], [ [ "欧" ], [ "歐" ], [ "欧" ] ], [ [ "歓" ], [ "歡" ], [ "欢" ] ], [ [ "歩" ], [ "步" ], [ "步" ] ], [ [ "歯" ], [ "齒" ], [ "齿" ] ], [ [ "歳" ], [ "歲" ], [ "岁" ] ], [ [ "歴" ], [ "歷" ], [ "历" ] ], [ [ "残" ], [ "殘" ], [ "残" ] ], [ [ "殴" ], [ "毆" ], [ "殴" ] ], [ [ "気" ], [ "氣" ], [ "气" ] ], [ [ "沢" ], [ "澤" ], [ "泽" ] ], [ [ "浅" ], [ "淺" ], [ "浅" ] ], [ [ "浜" ], [ "濱" ], [ "滨" ] ], [ [ "涙" ], [ "淚" ], [ "泪" ] ], [ [ "済" ], [ "濟" ], [ "济" ] ], [ [ "渋" ], [ "涉", "澀" ], [ "涉", "涩" ] ], [ [ "渓" ], [ "溪" ], [ "溪" ] ], [ [ "湾" ], [ "灣" ], [ "湾" ] ], [ [ "湿" ], [ "濕" ], [ "湿" ] ], [ [ "満" ], [ "滿" ], [ "满" ] ], [ [ "滝" ], [ "瀧" ], [ "泷" ] ], [ [ "滞" ], [ "滯" ], [ "滞" ] ], [ [ "瀬" ], [ "瀨" ], [ "濑" ] ], [ [ "灯" ], [ "燈" ], [ "灯" ] ], [ [ "炉" ], [ "爐" ], [ "炉" ] ], [ [ "点" ], [ "點" ], [ "点" ] ], [ [ "焔" ], [ "焰" ], [ "焰" ] ], [ [ "焼" ], [ "燒" ], [ "烧" ] ], [ [ "犠" ], [ "犧" ], [ "牺" ] ], [ [ "状" ], [ "狀" ], [ "状" ] ], [ [ "独" ], [ "獨" ], [ "独" ] ], [ [ "狭" ], [ "狹" ], [ "狭" ] ], [ [ "猟" ], [ "獵" ], [ "猎" ] ], [ [ "猫" ], [ "貓" ], [ "猫" ] ], [ [ "献" ], [ "獻" ], [ "献" ] ], [ [ "獣" ], [ "獸" ], [ "兽" ] ], [ [ "産" ], [ "產" ], [ "产" ] ], [ [ "画" ], [ "畫" ], [ "画" ] ], [ [ "畳" ], [ "疊" ], [ "叠" ] ], [ [ "発" ], [ "發" ], [ "发" ] ], [ [ "県" ], [ "縣" ], [ "县" ] ], [ [ "着" ], [ "著" ], [ "著" ] ], [ [ "砕" ], [ "碎" ], [ "碎" ] ], [ [ "礼" ], [ "禮" ], [ "礼" ] ], [ [ "禅" ], [ "禪" ], [ "禅" ] ], [ [ "称" ], [ "稱" ], [ "称" ] ], [ [ "稲" ], [ "稻" ], [ "稻" ] ], [ [ "穂" ], [ "穗" ], [ "穗" ] ], [ [ "穏" ], [ "穩" ], [ "稳" ] ], [ [ "窃" ], [ "竊" ], [ "窃" ] ], [ [ "竜" ], [ "龍" ], [ "龙" ] ], [ [ "粋" ], [ "粹" ], [ "粹" ] ], [ [ "粛" ], [ "肅" ], [ "肃" ] ], [ [ "経" ], [ "經" ], [ "经" ] ], [ [ "絵" ], [ "繪" ], [ "绘" ] ], [ [ "絶" ], [ "絶" ], [ "绝" ] ], [ [ "継" ], [ "繼" ], [ "继" ] ], [ [ "続" ], [ "續" ], [ "续" ] ], [ [ "総" ], [ "總" ], [ "总" ] ], [ [ "緑" ], [ "綠" ], [ "绿" ] ], [ [ "縁" ], [ "緣" ], [ "缘" ] ], [ [ "縄" ], [ "繩" ], [ "绳" ] ], [ [ "縦" ], [ "縱" ], [ "纵" ] ], [ [ "繊" ], [ "纖" ], [ "纤" ] ], [ [ "罸" ], [ "罰" ], [ "罚" ] ], [ [ "聡" ], [ "聰" ], [ "聪" ] ], [ [ "聴" ], [ "聽" ], [ "听" ] ], [ [ "胆" ], [ "膽" ], [ "胆" ] ], [ [ "脚" ], [ "腳" ], [ "脚" ] ], [ [ "脳" ], [ "腦" ], [ "脑" ] ], [ [ "臓" ], [ "臟" ], [ "脏" ] ], [ [ "舗" ], [ "舖" ], [ "铺" ] ], [ [ "茎" ], [ "莖" ], [ "茎" ] ], [ [ "荘" ], [ "莊" ], [ "庄" ] ], [ [ "蒋" ], [ "蔣" ], [ "蒋" ] ], [ [ "蔵" ], [ "藏" ], [ "藏" ] ], [ [ "薬" ], [ "藥" ], [ "药" ] ], [ [ "虚" ], [ "虛" ], [ "虚" ] ], [ [ "蛍" ], [ "螢" ], [ "萤" ] ], [ [ "蛮" ], [ "蠻" ], [ "蛮" ] ], [ [ "衆" ], [ "眾" ], [ "众" ] ], [ [ "装" ], [ "裝" ], [ "装" ] ], [ [ "覇" ], [ "霸" ], [ "霸" ] ], [ [ "覚" ], [ "覺" ], [ "觉" ] ], [ [ "覧" ], [ "覽" ], [ "览" ] ], [ [ "観" ], [ "觀" ], [ "观" ] ], [ [ "訳" ], [ "譯" ], [ "译" ] ], [ [ "誉" ], [ "譽" ], [ "誉" ] ], [ [ "説" ], [ "說" ], [ "说" ] ], [ [ "読" ], [ "讀" ], [ "读" ] ], [ [ "謡" ], [ "謠" ], [ "谣" ] ], [ [ "譲" ], [ "讓" ], [ "让" ] ], [ [ "賛" ], [ "贊" ], [ "赞" ] ], [ [ "践" ], [ "踐" ], [ "践" ] ], [ [ "転" ], [ "轉" ], [ "转" ] ], [ [ "軽" ], [ "輕" ], [ "轻" ] ], [ [ "辞" ], [ "辭" ], [ "辞" ] ], [ [ "辺" ], [ "邊" ], [ "边" ] ], [ [ "逓" ], [ "遞" ], [ "递" ] ], [ [ "遅" ], [ "遲" ], [ "迟" ] ], [ [ "遥" ], [ "遙" ], [ "遥" ] ], [ [ "郷" ], [ "鄉" ], [ "乡" ] ], [ [ "酔" ], [ "醉" ], [ "醉" ] ], [ [ "醸" ], [ "釀" ], [ "酿" ] ], [ [ "釈" ], [ "釋" ], [ "释" ] ], [ [ "鉄" ], [ "鐵" ], [ "铁" ] ], [ [ "鉢" ], [ "鉢" ], [ "钵" ] ], [ [ "鉱" ], [ "礦" ], [ "矿" ] ], [ [ "銭" ], [ "錢" ], [ "钱" ] ], [ [ "鋭" ], [ "鋭" ], [ "锐" ] ], [ [ "鋳" ], [ "鑄" ], [ "铸" ] ], [ [ "録" ], [ "錄" ], [ "录" ] ], [ [ "関" ], [ "關" ], [ "关" ] ], [ [ "閲" ], [ "閲" ], [ "阅" ] ], [ [ "闘" ], [ "鬥" ], [ "斗" ] ], [ [ "陥" ], [ "陷" ], [ "陷" ] ], [ [ "険" ], [ "險" ], [ "险" ] ], [ [ "随" ], [ "隨" ], [ "随" ] ], [ [ "隠" ], [ "隱" ], [ "隐" ] ], [ [ "隣" ], [ "鄰" ], [ "邻" ] ], [ [ "隷" ], [ "隷" ], [ "隶" ] ], [ [ "雑" ], [ "雜" ], [ "杂" ] ], [ [ "霊" ], [ "靈" ], [ "灵" ] ], [ [ "頼" ], [ "賴" ], [ "赖" ] ], [ [ "顔" ], [ "顏" ], [ "颜" ] ], [ [ "顕" ], [ "顯" ], [ "显" ] ], [ [ "駅" ], [ "驛" ], [ "驿" ] ], [ [ "駆" ], [ "驅" ], [ "驱" ] ], [ [ "騒" ], [ "騷" ], [ "骚" ] ], [ [ "験" ], [ "驗" ], [ "验" ] ], [ [ "騨" ], [ "驔" ], [ "驔" ] ], [ [ "髄" ], [ "髓" ], [ "髓" ] ], [ [ "鬪" ], [ "鬥" ], [ "斗" ] ], [ [ "鶏" ], [ "鷄" ], [ "鸡" ] ], [ [ "麦" ], [ "麥" ], [ "麦" ] ], [ [ "黄" ], [ "黃" ], [ "黄" ] ], [ [ "黒" ], [ "黑" ], [ "黑" ] ], [ [ "黙" ], [ "默" ], [ "默" ] ], [ [ "齢" ], [ "齡" ], [ "龄" ] ] ];
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(134), r = n(113), i = n(179);
function o(e, t) {
return e = Object.keys(t).reduce(function(e, n) {
return e[t[n]] = n, e;
}, {});
}
function s(e, t, ...n) {
let a;
return [].concat(t).concat(...n).filter(function(e) {
return e;
});
}
function u(e, n = {}) {
let a = [];
return a = s(a, t.table_jp[e]);
}
function c(e, n = {}) {
let r = [];
return r = s(r, t._table_tw[e], a.cn2tw(e, n));
}
function l(e, n = {}) {
let r = [];
return r = s(r, t._table_cn[e], a.tw2cn(e, n));
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
"版": [ "板" ]
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
"她": [ "她", "他" ]
}, Object.keys(t.table_plus).forEach(function(e) {
t.table_plus[e] = r.array_unique(t.table_plus[e]), t.table_plus[e].forEach(function(n) {
t.table_plus[n] = t.table_plus[e];
});
}), t.table_jp = i(t.table_jp, t.table_plus), Object.keys(t.table_jp).forEach(function(e) {
t.table_jp[e] = r.array_unique(t.table_jp[e]);
}), t._table_cn = o({}, t._table_tw), t._update = o, t._get = s, t.jp = u, t.tw = c, 
t.cn = l, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(175), r = n(176), i = n(177);
t.table_cn2tw = Object.assign(a, i.wiki_s2t_v2), t.table_tw2cn = Object.assign(r, i.wiki_t2s_v2), 
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
"注": "註"
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
"注": "注"
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
let [n, a] = e;
t.table_tw2cn[n] = a, t.table_cn2tw[a] = n;
}), [ "札", "污", "汙", "游", "遊", "伙", "夥", "御", "郁", "咔", "哢", "凌", "淩", "扎", "紮", "痴", "癡", "嚯", "薑", "姜", "扡", "扦", "捻", "撚", "遝", "沓", "栗", "挽", "灶", "竈", "霉", "黴", "欲", "慾", "讚", "菸", "拾", "十", "証", "捲", "卷", "燻", "熏", "吁", "籲", "龥", "蹠", "跖", "矽", "硅", "脩", "修", "犟", "剷", "噼", "劈", "擗", "核", "覈", "憷", "呼", "唿", "嗬", "呵", "脣", "唇", "唇", "升", "昇", "磐", "溪", "渓", "谿", "嵠", "祐", "佑", "媮", "偷", "瓮", "罋", "甕", "闇", "暗", "痺", "痹", "雇", "僱", "秘", "祕", "周", "週", "闢", "簷", "檐", "涌", "湧", "家", "傢" ].forEach(function(e) {
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
const a = n(135);
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
}, t.wiki_t2s_v2 = a.removeSame(t.wiki_t2s), t.wiki_s2t_v2 = a.removeSame(t.wiki_s2t), 
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
"衝": "衝",
"鹵": "卤"
}, t.table_cn2tw_min_plus = {}, t.default = t;
}, function(e, t, n) {
"use strict";
const a = n(180);
e.exports = a.default;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(181);
function r(e) {
return Array.isArray(e) ? [] : {};
}
function i(e, t, n) {
let a, i = (!t || !1 !== t.clone) && o(e, t, n), s = i ? c(r(e), e, t) : e;
return t && t.keyValueOrMode && !i && n && "key" in n && (n.destination && (s = n.destination[n.key] || s), 
n.target && (s = n.target[n.key] || s), n.source && (s = n.source[n.key] || s)), 
s;
}
function o(e, t, n) {
let r;
return t && t.isMergeableObject && (r = t.isMergeableObject(e, a, t, n)), null == r && (r = e && "boolean" == typeof e[c.SYMBOL_IS_MERGEABLE] ? e[c.SYMBOL_IS_MERGEABLE] : a(e)), 
r;
}
function s(e, t, n) {
return e.concat(t).map(function(e, t, a) {
return i(e, n, {
key: t
});
});
}
function u(e, t, n) {
let a = {};
return o(e, n) && Object.keys(e).forEach(function(r) {
a[r] = i(e[r], n, {
key: r,
source: t,
target: e,
destination: a
});
}), Object.keys(t).forEach(function(r) {
o(t[r], n, {
key: r,
source: t,
target: e
}) && e[r] ? a[r] = c(e[r], t[r], n) : a[r] = i(t[r], n, {
key: r,
source: t,
target: e
});
}), a;
}
function c(e, t, n) {
let a = Array.isArray(t), r, o, c;
if (a === Array.isArray(e)) {
if (a) {
let a;
return ((n || {
arrayMerge: s
}).arrayMerge || s)(e, t, n);
}
return u(e, t, n);
}
return i(t, n, {
target: e,
source: t
});
}
t.deepmerge = c, function(e) {
e.isMergeable = a, e.SYMBOL_IS_MERGEABLE = Symbol.for("SYMBOL_IS_MERGEABLE"), e.all = function t(n, a) {
if (!Array.isArray(n)) throw new Error("first argument should be an array");
return n.reduce(function(t, n) {
return e(t, n, a);
}, {});
};
}(c || (c = {})), t.deepmerge = c, c.deepmerge = c, c.default = c, t.default = c;
}, function(e, t) {
function n(e) {
return !!e && "object" == typeof e;
}
function a(e) {
var t = Object.prototype.toString.call(e);
return "[object RegExp]" === t || "[object Date]" === t || o(e);
}
e.exports = function e(t) {
return n(t) && !a(t);
};
var r, i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
function o(e) {
return e.$$typeof === i;
}
}, function(e, t, n) {
"use strict";
var a;
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(114), i = n(19);
function o(e) {
const t = e;
let n, a;
n = new Map();
let o = t.reduce(function(e, t) {
let a = t[0].source.replace(/^.*\[|\].*$/gu, ""), i = r.default.split(a, "").concat(t[1]);
return i.forEach(e => {
n.set(e, i);
}), e.push(...i), e;
}, []);
return a = new RegExp(`[${i.array_unique(o).join("")}]`, "u"), {
_greedyTableCacheRegexp: t,
_greedyTableCacheMap: n,
_greedyTableCacheTest: a
};
}
function s(e) {
return t._greedyTableCacheTest.test(e);
}
function u(e) {
return t._greedyTableCacheMap.get(e);
}
function c(e) {
return s(e) ? t._greedyTableCacheRegexp.reduce(function(e, t) {
return e.replace(t[0], t[1]);
}, e) : e;
}
a = o([ [ /[噁悪惡]/g, "恶" ], [ /[繋繫係]/g, "系" ], [ /[糊鬍]/g, "胡" ], [ /[儅噹當]/g, "当" ], [ /[復複覆]/g, "复" ], [ /[囌蘇甦]/g, "苏" ], [ /[採彩睬踩埰綵䌽]/g, "采" ], [ /[囉啰羅㑩儸]/g, "罗" ], [ /[浏瀏劉]/g, "刘" ], [ /[劵卷巻捲]/g, "券" ], [ /[划劃畫]/g, "画" ], [ /[鬥闘鬭鬪]/g, "斗" ], [ /[乾亁乹幹]/g, "干" ], [ /[図图]/g, "圖" ], [ /[暦曆歴歷]/g, "历" ], [ /[麪麵麺]/g, "面" ], [ /[讃讚賛贊赞]/g, "赞" ], [ /[發髪髮]/g, "发" ], [ /[侭儘盡]/g, "尽" ], [ /[優忧憂]/g, "忧" ], [ /[俱倶]/g, "具" ], [ /[之的得]/g, "の" ], [ /[與与]/g, "と" ], [ /[她他牠祂佗]/g, "它" ], [ /[支隻枝]/g, "只" ], [ /[炮砲炰]/g, "泡" ], [ /[仲]/g, "中" ], [ /[原]/g, "元" ], [ /[迴廻]/g, "回" ], [ /[乾亁乹幹]/g, "干" ], [ /[避闢]/g, "辟" ], [ /[滷鹵卤鲁]/g, "魯" ], [ /[檯臺颱儓]/g, "台" ], [ /[宻祕秘]/g, "密" ], [ /[謎谜]/g, "迷" ], [ /[砂莎]/g, "沙" ], [ /[編篇编]/g, "篇" ], [ /[冶]/g, "治" ], [ /[炼煉錬鍊𫔀練练]/gu, "練" ], [ /[亞亚婭娅]/gu, "亚" ], [ /[塞賽]/gu, "赛" ], [ /[腾騰籐籘]/gu, "藤" ], [ /[妳祢禰]/gu, "你" ], [ /[喰飠⻞飧]/gu, "食" ], [ /[瑪馬玛马]/gu, "马" ], [ /[餸餚]/gu, "餚" ], [ /[裸]/gu, "果" ], [ /[凱凯鎧铠]/gu, "凱" ], [ /[帖贴]/gu, "貼" ], [ /[什甚]/gu, "什" ], [ /[聯联連连]/gu, "連" ], [ /[像]/gu, "象" ], [ /[藉]/gu, "借" ], [ /[蕾]/gu, "雷" ], [ /[訂订]/gu, "定" ], [ /[嚮]/gu, "向" ], [ /[糸糹丝]/gu, "絲" ], [ /[筒]/gu, "桶" ], [ /[兹玆滋]/gu, "茲" ], [ /[呐訥讷]/gu, "吶" ], [ /[穀糓]/gu, "谷" ], [ /[两兩倆俩]/gu, "両" ], [ /[帳賬账]/gu, "帐" ], [ /[版闆]/gu, "板" ], [ /[待]/gu, "呆" ], [ /[熔鎔镕融螎]/gu, "溶" ], [ /[匯汇]/gu, "彙" ], [ /[彿仏]/gu, "佛" ], [ /[阿]/gu, "啊" ], [ /[家]/gu, "傢" ], [ /[爆]/gu, "暴" ], [ /[網䋄䋞綱纲]/gu, "网" ], [ /[註]/gu, "注" ], [ /[灌贯潅]/gu, "貫" ], [ /[倒]/gu, "到" ], [ /[秤]/gu, "平" ], [ /[勋勛勲勳]/gu, "勋" ], [ /[麗丽莉]/gu, "利" ], [ /[已巳]/gu, "己" ], [ /[嗬]/gu, "呵" ], [ /[哊哟唷唹喲]/gu, "呦" ] ]), 
t._greedyTableCacheRegexp = a._greedyTableCacheRegexp, t._greedyTableCacheMap = a._greedyTableCacheMap, 
t._greedyTableCacheTest = a._greedyTableCacheTest, t._greedyTableBuild = o, t.greedyTableTest = s, 
t.greedyTableCharArray = u, t.greedyTableReplace = c, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(19);
t.array_unique = a.array_unique;
const r = n(124);
function i(e) {
return r._re_cjk_conv(e, "のと");
}
t._re_cjk_conv = i, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(185), r = n(136);
var i;
!function(e) {
e.default = "default", e.class = "class", e.other = "other", e.uniset = "uniset", 
e.class_default = "class_default", e.class_range = "class_range", e.class_other = "class_other", 
e.class_uniset = "class_uniset", e.change = "change";
}(i = t.ParserEventEmitterEvent || (t.ParserEventEmitterEvent = {}));
class ParserEventEmitter extends a {
constructor(e, t = "") {
super(), this.astRegExpLiteral = null;
const n = this;
"string" != typeof e && "Pattern" != e.type || (e = r.fakePatternToRegExpLiteral(e, t)), 
this.astRegExpLiteral = e, this.on(i.change, function(e) {
n._change(e, !0), n.changed = !0;
});
}
static create(e, t = "") {
return new this(e, t);
}
resume() {
const e = this;
let t = this.astRegExpLiteral.pattern, n;
return (t.alternatives || t.elements).forEach(function(t) {
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
_lookup_sub(e, t, n, a = "") {
const r = this;
let o, s, u = "", c;
switch (e.type) {
case "Character":
c = a + i.default;
break;

case "CharacterClass":
c = i.class, o = !0, u = "class_";
break;

case "CharacterClassRange":
c = i.class_range;
break;

case "CharacterSet":
c = a + i.uniset;
break;

case "Quantifier":
o = !0, s = [ e.element ];
break;

case "CapturingGroup":
case "Group":
case "Assertion":
o = !0;
break;

case "Alternative":
e.elements.forEach(function(n) {
r._lookup_sub(n, t, e, u);
});
break;

case "Disjunction":
e.alternatives.forEach(function(n) {
n.forEach(function(n) {
r._lookup_sub(n, t, e, u);
});
});
break;

default:
c = "class_" === a ? i.class_other : a + i.other;
break;
}
c && t.emit(i[c], e), o && void 0 === s && void 0 === (s = e.elements) && (s = e.alternatives), 
e.type, o && s && s.forEach(function(n) {
r._lookup_sub(n, t, e, u);
});
}
getSource(e, t) {
return r.astToString(this.astRegExpLiteral.pattern, {
...t,
debugChanged: e ? 99 : this.astRegExpLiteral.pattern.changed
});
}
getFlags(e, t) {
return r.astToString(this.astRegExpLiteral.flags, {
...t,
debugChanged: e ? 99 : this.astRegExpLiteral.flags.changed
});
}
get source() {
return this.getSource();
}
set source(e) {
(e = "string" == typeof e ? r.parsePattern(e, this.astRegExpLiteral.flags.unicode) : e).parent = this.astRegExpLiteral, 
this.astRegExpLiteral.pattern = e, this.changed = !1;
}
get flags() {
return this.getFlags();
}
set flags(e) {
(e = "string" == typeof e ? r.parseFlags(e) : e).parent = this.astRegExpLiteral, 
this.astRegExpLiteral.flags = e, this.changed = this.astRegExpLiteral.pattern.changed || !1;
}
get changed() {
return this.astRegExpLiteral.changed || this.astRegExpLiteral.pattern.changed || "boolean" == typeof this.astRegExpLiteral.changed ? this.astRegExpLiteral.changed : null;
}
set changed(e) {
this.astRegExpLiteral.pattern.changed = this.astRegExpLiteral.changed = e;
}
toString(e, t) {
return r.astToString(this.astRegExpLiteral, {
...t,
debugChanged: e ? 99 : this.changed
});
}
toRegExp(e = RegExp) {
return new e(this.source, this.flags);
}
}
t.ParserEventEmitter = ParserEventEmitter, t.default = ParserEventEmitter;
}, function(e, t, n) {
"use strict";
var a = "object" == typeof Reflect ? Reflect : null, r = a && "function" == typeof a.apply ? a.apply : function e(t, n, a) {
return Function.prototype.apply.call(t, n, a);
}, i;
function o(e) {
console && console.warn && console.warn(e);
}
i = a && "function" == typeof a.ownKeys ? a.ownKeys : Object.getOwnPropertySymbols ? function e(t) {
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
var c = 10;
function l(e) {
return void 0 === e._maxListeners ? u.defaultMaxListeners : e._maxListeners;
}
function d(e, t, n, a) {
var r, i, s;
if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
if (void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), 
i = e._events), s = i[t]), void 0 === s) s = i[t] = n, ++e._eventsCount; else if ("function" == typeof s ? s = i[t] = a ? [ n, s ] : [ s, n ] : a ? s.unshift(n) : s.push(n), 
(r = l(e)) > 0 && s.length > r && !s.warned) {
s.warned = !0;
var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, 
o(u);
}
return e;
}
function p() {
for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
r(this.listener, this.target, e));
}
function h(e, t, n) {
var a = {
fired: !1,
wrapFn: void 0,
target: e,
type: t,
listener: n
}, r = p.bind(a);
return r.listener = n, a.wrapFn = r, r;
}
function f(e, t, n) {
var a = e._events;
if (void 0 === a) return [];
var r = a[t];
return void 0 === r ? [] : "function" == typeof r ? n ? [ r.listener || r ] : [ r ] : n ? b(r) : m(r, r.length);
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
function m(e, t) {
for (var n = new Array(t), a = 0; a < t; ++a) n[a] = e[a];
return n;
}
function _(e, t) {
for (;t + 1 < e.length; t++) e[t] = e[t + 1];
e.pop();
}
function b(e) {
for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
return t;
}
Object.defineProperty(u, "defaultMaxListeners", {
enumerable: !0,
get: function() {
return c;
},
set: function(e) {
if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
c = e;
}
}), u.init = function() {
void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), 
this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, u.prototype.setMaxListeners = function e(t) {
if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
return this._maxListeners = t, this;
}, u.prototype.getMaxListeners = function e() {
return l(this);
}, u.prototype.emit = function e(t) {
for (var n = [], a = 1; a < arguments.length; a++) n.push(arguments[a]);
var i = "error" === t, o = this._events;
if (void 0 !== o) i = i && void 0 === o.error; else if (!i) return !1;
if (i) {
var s;
if (n.length > 0 && (s = n[0]), s instanceof Error) throw s;
var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
throw u.context = s, u;
}
var c = o[t];
if (void 0 === c) return !1;
if ("function" == typeof c) r(c, this, n); else for (var l = c.length, d = m(c, l), a = 0; a < l; ++a) r(d[a], this, n);
return !0;
}, u.prototype.addListener = function e(t, n) {
return d(this, t, n, !1);
}, u.prototype.on = u.prototype.addListener, u.prototype.prependListener = function e(t, n) {
return d(this, t, n, !0);
}, u.prototype.once = function e(t, n) {
if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
return this.on(t, h(this, t, n)), this;
}, u.prototype.prependOnceListener = function e(t, n) {
if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
return this.prependListener(t, h(this, t, n)), this;
}, u.prototype.removeListener = function e(t, n) {
var a, r, i, o, s;
if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
if (void 0 === (r = this._events)) return this;
if (void 0 === (a = r[t])) return this;
if (a === n || a.listener === n) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], 
r.removeListener && this.emit("removeListener", t, a.listener || n)); else if ("function" != typeof a) {
for (i = -1, o = a.length - 1; o >= 0; o--) if (a[o] === n || a[o].listener === n) {
s = a[o].listener, i = o;
break;
}
if (i < 0) return this;
0 === i ? a.shift() : _(a, i), 1 === a.length && (r[t] = a[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || n);
}
return this;
}, u.prototype.off = u.prototype.removeListener, u.prototype.removeAllListeners = function e(t) {
var n, a, r;
if (void 0 === (a = this._events)) return this;
if (void 0 === a.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), 
this._eventsCount = 0) : void 0 !== a[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete a[t]), 
this;
if (0 === arguments.length) {
var i = Object.keys(a), o;
for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
this._eventsCount = 0, this;
}
if ("function" == typeof (n = a[t])) this.removeListener(t, n); else if (void 0 !== n) for (r = n.length - 1; r >= 0; r--) this.removeListener(t, n[r]);
return this;
}, u.prototype.listeners = function e(t) {
return f(this, t, !0);
}, u.prototype.rawListeners = function e(t) {
return f(this, t, !1);
}, u.listenerCount = function(e, t) {
return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t);
}, u.prototype.listenerCount = g, u.prototype.eventNames = function e() {
return this._eventsCount > 0 ? i(this._events) : [];
};
}, function(e, t, n) {
"use strict";
function a(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), a(n(187)), t.default = t;
}, function(e, t, n) {
"use strict";
function a(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(188);
t.AST = r;
const i = n(189);
t.RegExpParser = i.RegExpParser;
const o = n(137);
function s(e, t) {
return new i.RegExpParser(t).parseLiteral(e instanceof RegExp ? e.toString() : e);
}
function u(e, t) {
return new o.RegExpValidator(t).validateLiteral(e);
}
t.RegExpValidator = o.RegExpValidator, a(n(196)), t.parseRegExpLiteral = s, t.validateRegExpLiteral = u, 
t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(190), r = n(137), i = {}, o = {}, s = {};
function u(e, t) {
for (const n of e) a.assert("Disjunction" !== n.type), n.parent = t;
return e;
}
function c(e, t) {
"Disjunction" === e.type ? a.last(e.alternatives).push(t) : e.elements.push(t);
}
function l(e, t) {
"Disjunction" === e.type ? a.last(e.alternatives).push(t) : (e.type, e.elements.push(t));
}
class RegExpParserState {
constructor(e) {
this._node = i, this._flags = o, this._disjunctionStartStack = [], this._backreferences = [], 
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
onFlags(e, t, n, a, r, i, o, s) {
this._flags = {
type: "Flags",
parent: null,
start: e,
end: t,
raw: this.source.slice(e, t),
global: n,
ignoreCase: a,
multiline: r,
unicode: i,
sticky: o,
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
const r = a.last(n.elements);
if (null != r && "Disjunction" === r.type) this._node = r, r.alternatives.push([]); else {
this._node = {
type: "Disjunction",
parent: n,
start: a.last(this._disjunctionStartStack),
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
}, c(t, this._node);
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
}, c(n, this._node), this._capturingGroups.push(this._node);
}
onCapturingGroupLeave(e, t, n) {
this._node.end = t, this._node.raw = this.source.slice(e, t), this._node = this._node.parent;
}
onQuantifier(e, t, n, r, i) {
const o = this._node;
if ("CharacterClass" === o.type) throw new Error("UnknownError");
const s = "Disjunction" === o.type ? a.last(o.alternatives) : o.elements, u = s.pop(), c = {
type: "Quantifier",
parent: o,
start: e,
end: t,
raw: this.source.slice(e, t),
min: n,
max: r,
greedy: i,
element: u
};
s.push(c), u.parent = c;
}
onLookaroundAssertionEnter(e, t, n) {
const a = this._node;
if ("CharacterClass" === a.type) throw new Error("UnknownError");
this._node = {
type: "Assertion",
parent: a,
start: e,
end: e,
raw: "",
kind: t,
negate: n,
elements: []
}, c(a, this._node);
}
onLookaroundAssertionLeave(e, t, n, a) {
this._node.end = t, this._node.raw = this.source.slice(e, t), this._node = this._node.parent;
}
onEdgeAssertion(e, t, n) {
const a = this._node;
if ("CharacterClass" === a.type) throw new Error("UnknownError");
c(a, {
type: "Assertion",
parent: a,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n
});
}
onWordBoundaryAssertion(e, t, n, a) {
const r = this._node;
if ("CharacterClass" === r.type) throw new Error("UnknownError");
c(r, {
type: "Assertion",
parent: r,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n,
negate: a
});
}
onAnyCharacterSet(e, t, n) {
const a = this._node;
if ("CharacterClass" === a.type) throw new Error("UnknownError");
c(a, {
type: "CharacterSet",
parent: a,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n
});
}
onEscapeCharacterSet(e, t, n, a) {
l(this._node, {
type: "CharacterSet",
parent: this._node,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n,
negate: a
});
}
onUnicodePropertyCharacterSet(e, t, n, a, r, i) {
l(this._node, {
type: "CharacterSet",
parent: this._node,
start: e,
end: t,
raw: this.source.slice(e, t),
kind: n,
key: a,
value: r,
negate: i
});
}
onCharacter(e, t, n) {
l(this._node, {
type: "Character",
parent: this._node,
start: e,
end: t,
raw: this.source.slice(e, t),
value: n
});
}
onBackreference(e, t, n) {
const a = this._node;
if ("CharacterClass" === a.type) throw new Error("UnknownError");
const r = {
type: "Backreference",
parent: a,
start: e,
end: t,
raw: this.source.slice(e, t),
ref: n,
resolved: s
};
c(a, r), this._backreferences.push(r);
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
}, c(n, this._node);
}
onCharacterClassLeave(e, t, n) {
this._node.end = t, this._node.raw = this.source.slice(e, t), this._node = this._node.parent;
}
onCharacterClassRange(e, t, n, r) {
const i = this._node;
if ("CharacterClass" !== i.type) throw new Error("UnknownError");
const o = i.elements, s = o.pop();
o.pop();
const u = o.pop(), c = {
type: "CharacterClassRange",
parent: i,
start: e,
end: t,
raw: this.source.slice(e, t),
min: u,
max: s
};
a.assert(null != u && "Character" === u.type), a.assert(null != s && "Character" === s.type), 
u.parent = c, s.parent = c, o.push(c);
}
}
class RegExpParser {
constructor(e) {
this._state = new RegExpParserState(e), this._validator = new r.RegExpValidator(this._state);
}
parseLiteral(e, t = 0, n = e.length) {
this._state.source = e, this._validator.validateLiteral(e, t, n);
const a = this._state.pattern, r = this._state.flags, i = {
type: "RegExpLiteral",
parent: null,
start: t,
end: n,
raw: e,
pattern: a,
flags: r
};
return a.parent = i, r.parent = i, i;
}
parseFlags(e, t = 0, n = e.length) {
return this._state.source = e, this._validator.validateFlags(e, t, n), this._state.flags;
}
parsePattern(e, t = 0, n = e.length, a = !1) {
return this._state.source = e, this._validator.validatePattern(e, t, n, a), this._state.pattern;
}
}
t.RegExpParser = RegExpParser;
}, function(e, t, n) {
"use strict";
function a(e, t) {
if (!e) throw new Error(t || "AssertionError");
}
function r(e) {
return 0 === e.length ? void 0 : e[e.length - 1];
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.assert = a, t.last = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = {
at: (e, t, n) => n < t ? e.charCodeAt(n) : -1,
width: e => 1
}, r = {
at: (e, t, n) => n < t ? e.codePointAt(n) : -1,
width: e => e > 65535 ? 2 : 1
};
class Reader {
constructor() {
this._impl = a, this._s = "", this._i = 0, this._end = 0, this._cp1 = -1, this._w1 = 1, 
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
reset(e, t, n, i) {
this._impl = i ? r : a, this._s = e, this._end = n, this.rewind(t);
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
constructor(e, t, n, a) {
e && ("/" !== e[0] && (e = `/${e}/${t ? "u" : ""}`), e = `: ${e}`), super(`Invalid regular expression${e}: ${a}`), 
this.index = n;
}
}
t.RegExpSyntaxError = RegExpSyntaxError;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
var a = n(194);
t.isIdContinue = a.isIdContinue, t.isIdStart = a.isIdStart;
var r = n(195);
function i(e) {
return e >= t.LatinCapitalLetterA && e <= t.LatinCapitalLetterZ || e >= t.LatinSmallLetterA && e <= t.LatinSmallLetterZ;
}
function o(e) {
return e >= t.DigitZero && e <= t.DigitNine;
}
function s(e) {
return e >= t.DigitZero && e <= t.DigitSeven;
}
function u(e) {
return e >= t.DigitZero && e <= t.DigitNine || e >= t.LatinCapitalLetterA && e <= t.LatinCapitalLetterF || e >= t.LatinSmallLetterA && e <= t.LatinSmallLetterF;
}
function c(e) {
return e === t.LineFeed || e === t.CarriageReturn || e === t.LineSeparator || e === t.ParagraphSeparator;
}
function l(e) {
return e >= t.MinCodePoint && e <= t.MaxCodePoint;
}
function d(e) {
return e >= t.LatinSmallLetterA && e <= t.LatinSmallLetterF ? e - t.LatinSmallLetterA + 10 : e >= t.LatinCapitalLetterA && e <= t.LatinCapitalLetterF ? e - t.LatinCapitalLetterA + 10 : e - t.DigitZero;
}
t.PropertyData = r.PropertyData, t.Null = 0, t.Backspace = 8, t.CharacterTabulation = 9, 
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
t.MaxCodePoint = 1114111, t.isLatinLetter = i, t.isDecimalDigit = o, t.isOctalDigit = s, 
t.isHexDigit = u, t.isLineTerminator = c, t.isValidUnicode = l, t.digitToInt = d;
}, function(e, t, n) {
"use strict";
function a(e) {
return !(e < 65) && (e < 91 || !(e < 97) && (e < 123 || i(e)));
}
function r(e) {
return !(e < 48) && (e < 58 || !(e < 65) && (e < 91 || 95 === e || !(e < 97) && (e < 123 || i(e) || o(e))));
}
function i(e) {
return e < 40981 ? e < 4176 ? e < 2649 ? e < 1774 ? e < 891 ? e < 660 ? e < 248 ? 170 === e || 181 === e || 186 === e || !(e < 192) && (e < 215 || !(e < 216) && e < 247) : e < 443 || 443 === e || !(e < 444) && (e < 448 || !(e < 448) && (e < 452 || !(e < 452) && e < 660)) : e < 748 ? 660 === e || !(e < 661) && (e < 688 || !(e < 688) && (e < 706 || !(e < 710) && (e < 722 || !(e < 736) && e < 741))) : 748 === e || 750 === e || !(e < 880) && (e < 884 || 884 === e || !(e < 886) && (e < 888 || 890 === e)) : e < 1369 ? e < 910 ? !(e < 891) && (e < 894 || 895 === e || 902 === e || !(e < 904) && (e < 907 || 908 === e)) : e < 930 || !(e < 931) && (e < 1014 || !(e < 1015) && (e < 1154 || !(e < 1162) && (e < 1328 || !(e < 1329) && e < 1367))) : e < 1600 ? 1369 === e || !(e < 1376) && (e < 1417 || !(e < 1488) && (e < 1515 || !(e < 1519) && (e < 1523 || !(e < 1568) && e < 1600))) : 1600 === e || !(e < 1601) && (e < 1611 || !(e < 1646) && (e < 1648 || !(e < 1649) && (e < 1748 || 1749 === e || !(e < 1765) && e < 1767))) : e < 2392 ? e < 2048 ? e < 1869 ? !(e < 1774) && (e < 1776 || !(e < 1786) && (e < 1789 || 1791 === e || 1808 === e || !(e < 1810) && e < 1840)) : e < 1958 || 1969 === e || !(e < 1994) && (e < 2027 || !(e < 2036) && (e < 2038 || 2042 === e)) : e < 2144 ? !(e < 2048) && (e < 2070 || 2074 === e || 2084 === e || 2088 === e || !(e < 2112) && e < 2137) : e < 2155 || !(e < 2208) && (e < 2229 || !(e < 2230) && (e < 2238 || !(e < 2308) && (e < 2362 || 2365 === e || 2384 === e))) : e < 2524 ? e < 2451 ? !(e < 2392) && (e < 2402 || 2417 === e || !(e < 2418) && (e < 2433 || !(e < 2437) && (e < 2445 || !(e < 2447) && e < 2449))) : e < 2473 || !(e < 2474) && (e < 2481 || 2482 === e || !(e < 2486) && (e < 2490 || 2493 === e || 2510 === e)) : e < 2575 ? !(e < 2524) && (e < 2526 || !(e < 2527) && (e < 2530 || !(e < 2544) && (e < 2546 || 2556 === e || !(e < 2565) && e < 2571))) : e < 2577 || !(e < 2579) && (e < 2601 || !(e < 2602) && (e < 2609 || !(e < 2610) && (e < 2612 || !(e < 2613) && (e < 2615 || !(e < 2616) && e < 2618)))) : e < 3205 ? e < 2911 ? e < 2768 ? e < 2707 ? !(e < 2649) && (e < 2653 || 2654 === e || !(e < 2674) && (e < 2677 || !(e < 2693) && (e < 2702 || !(e < 2703) && e < 2706))) : e < 2729 || !(e < 2730) && (e < 2737 || !(e < 2738) && (e < 2740 || !(e < 2741) && (e < 2746 || 2749 === e))) : e < 2835 ? 2768 === e || !(e < 2784) && (e < 2786 || 2809 === e || !(e < 2821) && (e < 2829 || !(e < 2831) && e < 2833)) : e < 2857 || !(e < 2858) && (e < 2865 || !(e < 2866) && (e < 2868 || !(e < 2869) && (e < 2874 || 2877 === e || !(e < 2908) && e < 2910))) : e < 2984 ? e < 2962 ? !(e < 2911) && (e < 2914 || 2929 === e || 2947 === e || !(e < 2949) && (e < 2955 || !(e < 2958) && e < 2961)) : e < 2966 || !(e < 2969) && (e < 2971 || 2972 === e || !(e < 2974) && (e < 2976 || !(e < 2979) && e < 2981)) : e < 3090 ? !(e < 2984) && (e < 2987 || !(e < 2990) && (e < 3002 || 3024 === e || !(e < 3077) && (e < 3085 || !(e < 3086) && e < 3089))) : e < 3113 || !(e < 3114) && (e < 3130 || 3133 === e || !(e < 3160) && (e < 3163 || !(e < 3168) && (e < 3170 || 3200 === e))) : e < 3520 ? e < 3342 ? e < 3261 ? !(e < 3205) && (e < 3213 || !(e < 3214) && (e < 3217 || !(e < 3218) && (e < 3241 || !(e < 3242) && (e < 3252 || !(e < 3253) && e < 3258)))) : 3261 === e || 3294 === e || !(e < 3296) && (e < 3298 || !(e < 3313) && (e < 3315 || !(e < 3333) && e < 3341)) : e < 3423 ? !(e < 3342) && (e < 3345 || !(e < 3346) && (e < 3387 || 3389 === e || 3406 === e || !(e < 3412) && e < 3415)) : e < 3426 || !(e < 3450) && (e < 3456 || !(e < 3461) && (e < 3479 || !(e < 3482) && (e < 3506 || !(e < 3507) && (e < 3516 || 3517 === e)))) : e < 3762 ? e < 3713 ? !(e < 3520) && (e < 3527 || !(e < 3585) && (e < 3633 || !(e < 3634) && (e < 3636 || !(e < 3648) && (e < 3654 || 3654 === e)))) : e < 3715 || 3716 === e || !(e < 3718) && (e < 3723 || !(e < 3724) && (e < 3748 || 3749 === e || !(e < 3751) && e < 3761)) : e < 3840 ? !(e < 3762) && (e < 3764 || 3773 === e || !(e < 3776) && (e < 3781 || 3782 === e || !(e < 3804) && e < 3808)) : 3840 === e || !(e < 3904) && (e < 3912 || !(e < 3913) && (e < 3949 || !(e < 3976) && (e < 3981 || !(e < 4096) && (e < 4139 || 4159 === e)))) : e < 7680 ? e < 5984 ? e < 4786 ? e < 4304 ? e < 4213 ? !(e < 4176) && (e < 4182 || !(e < 4186) && (e < 4190 || 4193 === e || !(e < 4197) && (e < 4199 || !(e < 4206) && e < 4209))) : e < 4226 || 4238 === e || !(e < 4256) && (e < 4294 || 4295 === e || 4301 === e) : e < 4688 ? !(e < 4304) && (e < 4347 || 4348 === e || !(e < 4349) && (e < 4352 || !(e < 4352) && (e < 4681 || !(e < 4682) && e < 4686))) : e < 4695 || 4696 === e || !(e < 4698) && (e < 4702 || !(e < 4704) && (e < 4745 || !(e < 4746) && (e < 4750 || !(e < 4752) && e < 4785))) : e < 5112 ? e < 4824 ? !(e < 4786) && (e < 4790 || !(e < 4792) && (e < 4799 || 4800 === e || !(e < 4802) && (e < 4806 || !(e < 4808) && e < 4823))) : e < 4881 || !(e < 4882) && (e < 4886 || !(e < 4888) && (e < 4955 || !(e < 4992) && (e < 5008 || !(e < 5024) && e < 5110))) : e < 5870 ? !(e < 5112) && (e < 5118 || !(e < 5121) && (e < 5741 || !(e < 5743) && (e < 5760 || !(e < 5761) && (e < 5787 || !(e < 5792) && e < 5867)))) : e < 5873 || !(e < 5873) && (e < 5881 || !(e < 5888) && (e < 5901 || !(e < 5902) && (e < 5906 || !(e < 5920) && (e < 5938 || !(e < 5952) && e < 5970)))) : e < 6917 ? e < 6279 ? e < 6176 ? !(e < 5984) && (e < 5997 || !(e < 5998) && (e < 6001 || !(e < 6016) && (e < 6068 || 6103 === e || 6108 === e))) : e < 6211 || 6211 === e || !(e < 6212) && (e < 6265 || !(e < 6272) && (e < 6277 || !(e < 6277) && e < 6279)) : e < 6512 ? !(e < 6279) && (e < 6313 || 6314 === e || !(e < 6320) && (e < 6390 || !(e < 6400) && (e < 6431 || !(e < 6480) && e < 6510))) : e < 6517 || !(e < 6528) && (e < 6572 || !(e < 6576) && (e < 6602 || !(e < 6656) && (e < 6679 || !(e < 6688) && (e < 6741 || 6823 === e)))) : e < 7357 ? e < 7168 ? !(e < 6917) && (e < 6964 || !(e < 6981) && (e < 6988 || !(e < 7043) && (e < 7073 || !(e < 7086) && (e < 7088 || !(e < 7098) && e < 7142)))) : e < 7204 || !(e < 7245) && (e < 7248 || !(e < 7258) && (e < 7288 || !(e < 7288) && (e < 7294 || !(e < 7296) && (e < 7305 || !(e < 7312) && e < 7355)))) : e < 7424 ? !(e < 7357) && (e < 7360 || !(e < 7401) && (e < 7405 || !(e < 7406) && (e < 7412 || !(e < 7413) && (e < 7415 || 7418 === e)))) : e < 7468 || !(e < 7468) && (e < 7531 || !(e < 7531) && (e < 7544 || 7544 === e || !(e < 7545) && (e < 7579 || !(e < 7579) && e < 7616))) : e < 11264 ? e < 8336 ? e < 8118 ? e < 8025 ? !(e < 7680) && (e < 7958 || !(e < 7960) && (e < 7966 || !(e < 7968) && (e < 8006 || !(e < 8008) && (e < 8014 || !(e < 8016) && e < 8024)))) : 8025 === e || 8027 === e || 8029 === e || !(e < 8031) && (e < 8062 || !(e < 8064) && e < 8117) : e < 8150 ? !(e < 8118) && (e < 8125 || 8126 === e || !(e < 8130) && (e < 8133 || !(e < 8134) && (e < 8141 || !(e < 8144) && e < 8148))) : e < 8156 || !(e < 8160) && (e < 8173 || !(e < 8178) && (e < 8181 || !(e < 8182) && (e < 8189 || 8305 === e || 8319 === e))) : e < 8490 ? e < 8472 ? !(e < 8336) && (e < 8349 || 8450 === e || 8455 === e || !(e < 8458) && (e < 8468 || 8469 === e)) : 8472 === e || !(e < 8473) && (e < 8478 || 8484 === e || 8486 === e || 8488 === e) : e < 8508 ? !(e < 8490) && (e < 8494 || 8494 === e || !(e < 8495) && (e < 8501 || !(e < 8501) && (e < 8505 || 8505 === e))) : e < 8512 || !(e < 8517) && (e < 8522 || 8526 === e || !(e < 8544) && (e < 8579 || !(e < 8579) && (e < 8581 || !(e < 8581) && e < 8585))) : e < 12293 ? e < 11568 ? e < 11499 ? !(e < 11264) && (e < 11311 || !(e < 11312) && (e < 11359 || !(e < 11360) && (e < 11388 || !(e < 11388) && (e < 11390 || !(e < 11390) && e < 11493)))) : e < 11503 || !(e < 11506) && (e < 11508 || !(e < 11520) && (e < 11558 || 11559 === e || 11565 === e)) : e < 11696 ? !(e < 11568) && (e < 11624 || 11631 === e || !(e < 11648) && (e < 11671 || !(e < 11680) && (e < 11687 || !(e < 11688) && e < 11695))) : e < 11703 || !(e < 11704) && (e < 11711 || !(e < 11712) && (e < 11719 || !(e < 11720) && (e < 11727 || !(e < 11728) && (e < 11735 || !(e < 11736) && e < 11743)))) : e < 12447 ? e < 12344 ? 12293 === e || 12294 === e || 12295 === e || !(e < 12321) && (e < 12330 || !(e < 12337) && e < 12342) : e < 12347 || 12347 === e || 12348 === e || !(e < 12353) && (e < 12439 || !(e < 12443) && (e < 12445 || !(e < 12445) && e < 12447)) : e < 12593 ? 12447 === e || !(e < 12449) && (e < 12539 || !(e < 12540) && (e < 12543 || 12543 === e || !(e < 12549) && e < 12592)) : e < 12687 || !(e < 12704) && (e < 12731 || !(e < 12784) && (e < 12800 || !(e < 13312) && (e < 19894 || !(e < 19968) && (e < 40944 || !(e < 40960) && e < 40981)))) : e < 69840 ? e < 64320 ? e < 43494 ? e < 42895 ? e < 42623 ? e < 42508 ? 40981 === e || !(e < 40982) && (e < 42125 || !(e < 42192) && (e < 42232 || !(e < 42232) && (e < 42238 || !(e < 42240) && e < 42508))) : 42508 === e || !(e < 42512) && (e < 42528 || !(e < 42538) && (e < 42540 || !(e < 42560) && (e < 42606 || 42606 === e))) : e < 42775 ? 42623 === e || !(e < 42624) && (e < 42652 || !(e < 42652) && (e < 42654 || !(e < 42656) && (e < 42726 || !(e < 42726) && e < 42736))) : e < 42784 || !(e < 42786) && (e < 42864 || 42864 === e || !(e < 42865) && (e < 42888 || 42888 === e || !(e < 42891) && e < 42895)) : e < 43072 ? e < 43002 ? 42895 === e || !(e < 42896) && (e < 42944 || !(e < 42946) && (e < 42951 || 42999 === e || !(e < 43e3) && e < 43002)) : 43002 === e || !(e < 43003) && (e < 43010 || !(e < 43011) && (e < 43014 || !(e < 43015) && (e < 43019 || !(e < 43020) && e < 43043))) : e < 43274 ? !(e < 43072) && (e < 43124 || !(e < 43138) && (e < 43188 || !(e < 43250) && (e < 43256 || 43259 === e || !(e < 43261) && e < 43263))) : e < 43302 || !(e < 43312) && (e < 43335 || !(e < 43360) && (e < 43389 || !(e < 43396) && (e < 43443 || 43471 === e || !(e < 43488) && e < 43493))) : e < 43777 ? e < 43646 ? e < 43588 ? 43494 === e || !(e < 43495) && (e < 43504 || !(e < 43514) && (e < 43519 || !(e < 43520) && (e < 43561 || !(e < 43584) && e < 43587))) : e < 43596 || !(e < 43616) && (e < 43632 || 43632 === e || !(e < 43633) && (e < 43639 || 43642 === e)) : e < 43714 ? !(e < 43646) && (e < 43696 || 43697 === e || !(e < 43701) && (e < 43703 || !(e < 43705) && (e < 43710 || 43712 === e))) : 43714 === e || !(e < 43739) && (e < 43741 || 43741 === e || !(e < 43744) && (e < 43755 || 43762 === e || !(e < 43763) && e < 43765)) : e < 55216 ? e < 43824 ? !(e < 43777) && (e < 43783 || !(e < 43785) && (e < 43791 || !(e < 43793) && (e < 43799 || !(e < 43808) && (e < 43815 || !(e < 43816) && e < 43823)))) : e < 43867 || !(e < 43868) && (e < 43872 || !(e < 43872) && (e < 43880 || !(e < 43888) && (e < 43968 || !(e < 43968) && (e < 44003 || !(e < 44032) && e < 55204)))) : e < 64275 ? !(e < 55216) && (e < 55239 || !(e < 55243) && (e < 55292 || !(e < 63744) && (e < 64110 || !(e < 64112) && (e < 64218 || !(e < 64256) && e < 64263)))) : e < 64280 || 64285 === e || !(e < 64287) && (e < 64297 || !(e < 64298) && (e < 64311 || !(e < 64312) && (e < 64317 || 64318 === e))) : e < 66736 ? e < 65549 ? e < 65345 ? e < 64914 ? !(e < 64320) && (e < 64322 || !(e < 64323) && (e < 64325 || !(e < 64326) && (e < 64434 || !(e < 64467) && (e < 64830 || !(e < 64848) && e < 64912)))) : e < 64968 || !(e < 65008) && (e < 65020 || !(e < 65136) && (e < 65141 || !(e < 65142) && (e < 65277 || !(e < 65313) && e < 65339))) : e < 65440 ? !(e < 65345) && (e < 65371 || !(e < 65382) && (e < 65392 || 65392 === e || !(e < 65393) && (e < 65438 || !(e < 65438) && e < 65440))) : e < 65471 || !(e < 65474) && (e < 65480 || !(e < 65482) && (e < 65488 || !(e < 65490) && (e < 65496 || !(e < 65498) && (e < 65501 || !(e < 65536) && e < 65548)))) : e < 66349 ? e < 65664 ? !(e < 65549) && (e < 65575 || !(e < 65576) && (e < 65595 || !(e < 65596) && (e < 65598 || !(e < 65599) && (e < 65614 || !(e < 65616) && e < 65630)))) : e < 65787 || !(e < 65856) && (e < 65909 || !(e < 66176) && (e < 66205 || !(e < 66208) && (e < 66257 || !(e < 66304) && e < 66336))) : e < 66432 ? !(e < 66349) && (e < 66369 || 66369 === e || !(e < 66370) && (e < 66378 || 66378 === e || !(e < 66384) && e < 66422)) : e < 66462 || !(e < 66464) && (e < 66500 || !(e < 66504) && (e < 66512 || !(e < 66513) && (e < 66518 || !(e < 66560) && (e < 66640 || !(e < 66640) && e < 66718)))) : e < 68096 ? e < 67639 ? e < 67392 ? !(e < 66736) && (e < 66772 || !(e < 66776) && (e < 66812 || !(e < 66816) && (e < 66856 || !(e < 66864) && (e < 66916 || !(e < 67072) && e < 67383)))) : e < 67414 || !(e < 67424) && (e < 67432 || !(e < 67584) && (e < 67590 || 67592 === e || !(e < 67594) && e < 67638)) : e < 67808 ? !(e < 67639) && (e < 67641 || 67644 === e || !(e < 67647) && (e < 67670 || !(e < 67680) && (e < 67703 || !(e < 67712) && e < 67743))) : e < 67827 || !(e < 67828) && (e < 67830 || !(e < 67840) && (e < 67862 || !(e < 67872) && (e < 67898 || !(e < 67968) && (e < 68024 || !(e < 68030) && e < 68032)))) : e < 68480 ? e < 68224 ? 68096 === e || !(e < 68112) && (e < 68116 || !(e < 68117) && (e < 68120 || !(e < 68121) && (e < 68150 || !(e < 68192) && e < 68221))) : e < 68253 || !(e < 68288) && (e < 68296 || !(e < 68297) && (e < 68325 || !(e < 68352) && (e < 68406 || !(e < 68416) && (e < 68438 || !(e < 68448) && e < 68467)))) : e < 69376 ? !(e < 68480) && (e < 68498 || !(e < 68608) && (e < 68681 || !(e < 68736) && (e < 68787 || !(e < 68800) && (e < 68851 || !(e < 68864) && e < 68900)))) : e < 69405 || 69415 === e || !(e < 69424) && (e < 69446 || !(e < 69600) && (e < 69623 || !(e < 69635) && (e < 69688 || !(e < 69763) && e < 69808))) : e < 100352 ? e < 72096 ? e < 70450 ? e < 70163 ? e < 70019 ? !(e < 69840) && (e < 69865 || !(e < 69891) && (e < 69927 || 69956 === e || !(e < 69968) && (e < 70003 || 70006 === e))) : e < 70067 || !(e < 70081) && (e < 70085 || 70106 === e || 70108 === e || !(e < 70144) && e < 70162) : e < 70303 ? !(e < 70163) && (e < 70188 || !(e < 70272) && (e < 70279 || 70280 === e || !(e < 70282) && (e < 70286 || !(e < 70287) && e < 70302))) : e < 70313 || !(e < 70320) && (e < 70367 || !(e < 70405) && (e < 70413 || !(e < 70415) && (e < 70417 || !(e < 70419) && (e < 70441 || !(e < 70442) && e < 70449)))) : e < 70855 ? e < 70656 ? !(e < 70450) && (e < 70452 || !(e < 70453) && (e < 70458 || 70461 === e || 70480 === e || !(e < 70493) && e < 70498)) : e < 70709 || !(e < 70727) && (e < 70731 || 70751 === e || !(e < 70784) && (e < 70832 || !(e < 70852) && e < 70854)) : e < 71296 ? 70855 === e || !(e < 71040) && (e < 71087 || !(e < 71128) && (e < 71132 || !(e < 71168) && (e < 71216 || 71236 === e))) : e < 71339 || 71352 === e || !(e < 71424) && (e < 71451 || !(e < 71680) && (e < 71724 || !(e < 71840) && (e < 71904 || 71935 === e))) : e < 73066 ? e < 72384 ? e < 72203 ? !(e < 72096) && (e < 72104 || !(e < 72106) && (e < 72145 || 72161 === e || 72163 === e || 72192 === e)) : e < 72243 || 72250 === e || 72272 === e || !(e < 72284) && (e < 72330 || 72349 === e) : e < 72960 ? !(e < 72384) && (e < 72441 || !(e < 72704) && (e < 72713 || !(e < 72714) && (e < 72751 || 72768 === e || !(e < 72818) && e < 72848))) : e < 72967 || !(e < 72968) && (e < 72970 || !(e < 72971) && (e < 73009 || 73030 === e || !(e < 73056) && (e < 73062 || !(e < 73063) && e < 73065))) : e < 92928 ? e < 74880 ? !(e < 73066) && (e < 73098 || 73112 === e || !(e < 73440) && (e < 73459 || !(e < 73728) && (e < 74650 || !(e < 74752) && e < 74863))) : e < 75076 || !(e < 77824) && (e < 78895 || !(e < 82944) && (e < 83527 || !(e < 92160) && (e < 92729 || !(e < 92736) && (e < 92767 || !(e < 92880) && e < 92910)))) : e < 93952 ? !(e < 92928) && (e < 92976 || !(e < 92992) && (e < 92996 || !(e < 93027) && (e < 93048 || !(e < 93053) && (e < 93072 || !(e < 93760) && e < 93824)))) : e < 94027 || 94032 === e || !(e < 94099) && (e < 94112 || !(e < 94176) && (e < 94178 || 94179 === e || !(e < 94208) && e < 100344)) : e < 123584 ? e < 120086 ? e < 119894 ? e < 113664 ? !(e < 100352) && (e < 101107 || !(e < 110592) && (e < 110879 || !(e < 110928) && (e < 110931 || !(e < 110948) && (e < 110952 || !(e < 110960) && e < 111356)))) : e < 113771 || !(e < 113776) && (e < 113789 || !(e < 113792) && (e < 113801 || !(e < 113808) && (e < 113818 || !(e < 119808) && e < 119893))) : e < 119982 ? !(e < 119894) && (e < 119965 || !(e < 119966) && (e < 119968 || 119970 === e || !(e < 119973) && (e < 119975 || !(e < 119977) && e < 119981))) : e < 119994 || 119995 === e || !(e < 119997) && (e < 120004 || !(e < 120005) && (e < 120070 || !(e < 120071) && (e < 120075 || !(e < 120077) && e < 120085))) : e < 120572 ? e < 120138 ? !(e < 120086) && (e < 120093 || !(e < 120094) && (e < 120122 || !(e < 120123) && (e < 120127 || !(e < 120128) && (e < 120133 || 120134 === e)))) : e < 120145 || !(e < 120146) && (e < 120486 || !(e < 120488) && (e < 120513 || !(e < 120514) && (e < 120539 || !(e < 120540) && e < 120571))) : e < 120714 ? !(e < 120572) && (e < 120597 || !(e < 120598) && (e < 120629 || !(e < 120630) && (e < 120655 || !(e < 120656) && (e < 120687 || !(e < 120688) && e < 120713)))) : e < 120745 || !(e < 120746) && (e < 120771 || !(e < 120772) && (e < 120780 || !(e < 123136) && (e < 123181 || !(e < 123191) && (e < 123198 || 123214 === e)))) : e < 126553 ? e < 126516 ? e < 126469 ? !(e < 123584) && (e < 123628 || !(e < 124928) && (e < 125125 || !(e < 125184) && (e < 125252 || 125259 === e || !(e < 126464) && e < 126468))) : e < 126496 || !(e < 126497) && (e < 126499 || 126500 === e || 126503 === e || !(e < 126505) && e < 126515) : e < 126537 ? !(e < 126516) && (e < 126520 || 126521 === e || 126523 === e || 126530 === e || 126535 === e) : 126537 === e || 126539 === e || !(e < 126541) && (e < 126544 || !(e < 126545) && (e < 126547 || 126548 === e || 126551 === e)) : e < 126592 ? e < 126564 ? 126553 === e || 126555 === e || 126557 === e || 126559 === e || !(e < 126561) && e < 126563 : 126564 === e || !(e < 126567) && (e < 126571 || !(e < 126572) && (e < 126579 || !(e < 126580) && (e < 126584 || !(e < 126585) && (e < 126589 || 126590 === e)))) : e < 131072 ? !(e < 126592) && (e < 126602 || !(e < 126603) && (e < 126620 || !(e < 126625) && (e < 126628 || !(e < 126629) && (e < 126634 || !(e < 126635) && e < 126652)))) : e < 173783 || !(e < 173824) && (e < 177973 || !(e < 177984) && (e < 178206 || !(e < 178208) && (e < 183970 || !(e < 183984) && (e < 191457 || !(e < 194560) && e < 195102))));
}
function o(e) {
return e < 7415 ? e < 3538 ? e < 2750 ? e < 2364 ? e < 1776 ? e < 1479 ? 183 === e || !(e < 768) && (e < 880 || 903 === e || !(e < 1155) && (e < 1160 || !(e < 1425) && (e < 1470 || 1471 === e || !(e < 1473) && (e < 1475 || !(e < 1476) && e < 1478)))) : 1479 === e || !(e < 1552) && (e < 1563 || !(e < 1611) && (e < 1632 || !(e < 1632) && (e < 1642 || 1648 === e || !(e < 1750) && (e < 1757 || !(e < 1759) && (e < 1765 || !(e < 1767) && (e < 1769 || !(e < 1770) && e < 1774)))))) : e < 2075 ? !(e < 1776) && (e < 1786 || 1809 === e || !(e < 1840) && (e < 1867 || !(e < 1958) && (e < 1969 || !(e < 1984) && (e < 1994 || !(e < 2027) && (e < 2036 || 2045 === e || !(e < 2070) && e < 2074))))) : e < 2084 || !(e < 2085) && (e < 2088 || !(e < 2089) && (e < 2094 || !(e < 2137) && (e < 2140 || !(e < 2259) && (e < 2274 || !(e < 2275) && (e < 2307 || 2307 === e || 2362 === e || 2363 === e))))) : e < 2519 ? e < 2406 ? 2364 === e || !(e < 2366) && (e < 2369 || !(e < 2369) && (e < 2377 || !(e < 2377) && (e < 2381 || 2381 === e || !(e < 2382) && (e < 2384 || !(e < 2385) && (e < 2392 || !(e < 2402) && e < 2404))))) : e < 2416 || 2433 === e || !(e < 2434) && (e < 2436 || 2492 === e || !(e < 2494) && (e < 2497 || !(e < 2497) && (e < 2501 || !(e < 2503) && (e < 2505 || !(e < 2507) && (e < 2509 || 2509 === e))))) : e < 2631 ? 2519 === e || !(e < 2530) && (e < 2532 || !(e < 2534) && (e < 2544 || 2558 === e || !(e < 2561) && (e < 2563 || 2563 === e || 2620 === e || !(e < 2622) && (e < 2625 || !(e < 2625) && e < 2627)))) : e < 2633 || !(e < 2635) && (e < 2638 || 2641 === e || !(e < 2662) && (e < 2672 || !(e < 2672) && (e < 2674 || 2677 === e || !(e < 2689) && (e < 2691 || 2691 === e || 2748 === e)))) : e < 3076 ? e < 2891 ? e < 2810 ? !(e < 2750) && (e < 2753 || !(e < 2753) && (e < 2758 || !(e < 2759) && (e < 2761 || 2761 === e || !(e < 2763) && (e < 2765 || 2765 === e || !(e < 2786) && (e < 2788 || !(e < 2790) && e < 2800))))) : e < 2816 || 2817 === e || !(e < 2818) && (e < 2820 || 2876 === e || 2878 === e || 2879 === e || 2880 === e || !(e < 2881) && (e < 2885 || !(e < 2887) && e < 2889)) : e < 3008 ? !(e < 2891) && (e < 2893 || 2893 === e || 2902 === e || 2903 === e || !(e < 2914) && (e < 2916 || !(e < 2918) && (e < 2928 || 2946 === e || !(e < 3006) && e < 3008))) : 3008 === e || !(e < 3009) && (e < 3011 || !(e < 3014) && (e < 3017 || !(e < 3018) && (e < 3021 || 3021 === e || 3031 === e || !(e < 3046) && (e < 3056 || 3072 === e || !(e < 3073) && e < 3076)))) : e < 3276 ? e < 3201 ? 3076 === e || !(e < 3134) && (e < 3137 || !(e < 3137) && (e < 3141 || !(e < 3142) && (e < 3145 || !(e < 3146) && (e < 3150 || !(e < 3157) && (e < 3159 || !(e < 3170) && (e < 3172 || !(e < 3174) && e < 3184)))))) : 3201 === e || !(e < 3202) && (e < 3204 || 3260 === e || 3262 === e || 3263 === e || !(e < 3264) && (e < 3269 || 3270 === e || !(e < 3271) && (e < 3273 || !(e < 3274) && e < 3276))) : e < 3398 ? !(e < 3276) && (e < 3278 || !(e < 3285) && (e < 3287 || !(e < 3298) && (e < 3300 || !(e < 3302) && (e < 3312 || !(e < 3328) && (e < 3330 || !(e < 3330) && (e < 3332 || !(e < 3387) && (e < 3389 || !(e < 3390) && (e < 3393 || !(e < 3393) && e < 3397)))))))) : e < 3401 || !(e < 3402) && (e < 3405 || 3405 === e || 3415 === e || !(e < 3426) && (e < 3428 || !(e < 3430) && (e < 3440 || !(e < 3458) && (e < 3460 || 3530 === e || !(e < 3535) && e < 3538)))) : e < 6435 ? e < 4160 ? e < 3897 ? e < 3664 ? !(e < 3538) && (e < 3541 || 3542 === e || !(e < 3544) && (e < 3552 || !(e < 3558) && (e < 3568 || !(e < 3570) && (e < 3572 || 3633 === e || !(e < 3636) && (e < 3643 || !(e < 3655) && e < 3663))))) : e < 3674 || 3761 === e || !(e < 3764) && (e < 3773 || !(e < 3784) && (e < 3790 || !(e < 3792) && (e < 3802 || !(e < 3864) && (e < 3866 || !(e < 3872) && (e < 3882 || 3893 === e || 3895 === e))))) : e < 4038 ? 3897 === e || !(e < 3902) && (e < 3904 || !(e < 3953) && (e < 3967 || 3967 === e || !(e < 3968) && (e < 3973 || !(e < 3974) && (e < 3976 || !(e < 3981) && (e < 3992 || !(e < 3993) && e < 4029))))) : 4038 === e || !(e < 4139) && (e < 4141 || !(e < 4141) && (e < 4145 || 4145 === e || !(e < 4146) && (e < 4152 || 4152 === e || !(e < 4153) && (e < 4155 || !(e < 4155) && (e < 4157 || !(e < 4157) && e < 4159))))) : e < 4969 ? e < 4227 ? !(e < 4160) && (e < 4170 || !(e < 4182) && (e < 4184 || !(e < 4184) && (e < 4186 || !(e < 4190) && (e < 4193 || !(e < 4194) && (e < 4197 || !(e < 4199) && (e < 4206 || !(e < 4209) && (e < 4213 || 4226 === e))))))) : e < 4229 || !(e < 4229) && (e < 4231 || !(e < 4231) && (e < 4237 || 4237 === e || 4239 === e || !(e < 4240) && (e < 4250 || !(e < 4250) && (e < 4253 || 4253 === e || !(e < 4957) && e < 4960)))) : e < 6086 ? !(e < 4969) && (e < 4978 || !(e < 5906) && (e < 5909 || !(e < 5938) && (e < 5941 || !(e < 5970) && (e < 5972 || !(e < 6002) && (e < 6004 || !(e < 6068) && (e < 6070 || 6070 === e || !(e < 6071) && (e < 6078 || !(e < 6078) && e < 6086))))))) : 6086 === e || !(e < 6087) && (e < 6089 || !(e < 6089) && (e < 6100 || 6109 === e || !(e < 6112) && (e < 6122 || !(e < 6155) && (e < 6158 || !(e < 6160) && (e < 6170 || 6313 === e || !(e < 6432) && e < 6435))))) : e < 6972 ? e < 6752 ? e < 6608 ? !(e < 6435) && (e < 6439 || !(e < 6439) && (e < 6441 || !(e < 6441) && (e < 6444 || !(e < 6448) && (e < 6450 || 6450 === e || !(e < 6451) && (e < 6457 || !(e < 6457) && (e < 6460 || !(e < 6470) && e < 6480)))))) : e < 6618 || 6618 === e || !(e < 6679) && (e < 6681 || !(e < 6681) && (e < 6683 || 6683 === e || 6741 === e || 6742 === e || 6743 === e || !(e < 6744) && e < 6751)) : e < 6784 ? 6752 === e || 6753 === e || 6754 === e || !(e < 6755) && (e < 6757 || !(e < 6757) && (e < 6765 || !(e < 6765) && (e < 6771 || !(e < 6771) && (e < 6781 || 6783 === e)))) : e < 6794 || !(e < 6800) && (e < 6810 || !(e < 6832) && (e < 6846 || !(e < 6912) && (e < 6916 || 6916 === e || 6964 === e || 6965 === e || !(e < 6966) && (e < 6971 || 6971 === e)))) : e < 7144 ? e < 7073 ? 6972 === e || !(e < 6973) && (e < 6978 || 6978 === e || !(e < 6979) && (e < 6981 || !(e < 6992) && (e < 7002 || !(e < 7019) && (e < 7028 || !(e < 7040) && (e < 7042 || 7042 === e))))) : 7073 === e || !(e < 7074) && (e < 7078 || !(e < 7078) && (e < 7080 || !(e < 7080) && (e < 7082 || 7082 === e || !(e < 7083) && (e < 7086 || !(e < 7088) && (e < 7098 || 7142 === e || 7143 === e))))) : e < 7222 ? !(e < 7144) && (e < 7146 || !(e < 7146) && (e < 7149 || 7149 === e || 7150 === e || !(e < 7151) && (e < 7154 || !(e < 7154) && (e < 7156 || !(e < 7204) && (e < 7212 || !(e < 7212) && (e < 7220 || !(e < 7220) && e < 7222)))))) : e < 7224 || !(e < 7232) && (e < 7242 || !(e < 7248) && (e < 7258 || !(e < 7376) && (e < 7379 || !(e < 7380) && (e < 7393 || 7393 === e || !(e < 7394) && (e < 7401 || 7405 === e || 7412 === e))))) : e < 70464 ? e < 44003 ? e < 43335 ? e < 42612 ? e < 8421 ? 7415 === e || !(e < 7416) && (e < 7418 || !(e < 7616) && (e < 7674 || !(e < 7675) && (e < 7680 || !(e < 8255) && (e < 8257 || 8276 === e || !(e < 8400) && (e < 8413 || 8417 === e))))) : e < 8433 || !(e < 11503) && (e < 11506 || 11647 === e || !(e < 11744) && (e < 11776 || !(e < 12330) && (e < 12334 || !(e < 12334) && (e < 12336 || !(e < 12441) && (e < 12443 || !(e < 42528) && (e < 42538 || 42607 === e)))))) : e < 43047 ? !(e < 42612) && (e < 42622 || !(e < 42654) && (e < 42656 || !(e < 42736) && (e < 42738 || 43010 === e || 43014 === e || 43019 === e || !(e < 43043) && (e < 43045 || !(e < 43045) && e < 43047)))) : 43047 === e || !(e < 43136) && (e < 43138 || !(e < 43188) && (e < 43204 || !(e < 43204) && (e < 43206 || !(e < 43216) && (e < 43226 || !(e < 43232) && (e < 43250 || 43263 === e || !(e < 43264) && (e < 43274 || !(e < 43302) && e < 43310)))))) : e < 43573 ? e < 43452 ? !(e < 43335) && (e < 43346 || !(e < 43346) && (e < 43348 || !(e < 43392) && (e < 43395 || 43395 === e || 43443 === e || !(e < 43444) && (e < 43446 || !(e < 43446) && (e < 43450 || !(e < 43450) && e < 43452))))) : e < 43454 || !(e < 43454) && (e < 43457 || !(e < 43472) && (e < 43482 || 43493 === e || !(e < 43504) && (e < 43514 || !(e < 43561) && (e < 43567 || !(e < 43567) && (e < 43569 || !(e < 43569) && (e < 43571 || !(e < 43571) && e < 43573)))))) : e < 43698 ? !(e < 43573) && (e < 43575 || 43587 === e || 43596 === e || 43597 === e || !(e < 43600) && (e < 43610 || 43643 === e || 43644 === e || 43645 === e || 43696 === e)) : e < 43701 || !(e < 43703) && (e < 43705 || !(e < 43710) && (e < 43712 || 43713 === e || 43755 === e || !(e < 43756) && (e < 43758 || !(e < 43758) && (e < 43760 || 43765 === e || 43766 === e)))) : e < 69762 ? e < 66422 ? e < 64286 ? !(e < 44003) && (e < 44005 || 44005 === e || !(e < 44006) && (e < 44008 || 44008 === e || !(e < 44009) && (e < 44011 || 44012 === e || 44013 === e || !(e < 44016) && e < 44026))) : 64286 === e || !(e < 65024) && (e < 65040 || !(e < 65056) && (e < 65072 || !(e < 65075) && (e < 65077 || !(e < 65101) && (e < 65104 || !(e < 65296) && (e < 65306 || 65343 === e || 66045 === e || 66272 === e))))) : e < 68900 ? !(e < 66422) && (e < 66427 || !(e < 66720) && (e < 66730 || !(e < 68097) && (e < 68100 || !(e < 68101) && (e < 68103 || !(e < 68108) && (e < 68112 || !(e < 68152) && (e < 68155 || 68159 === e || !(e < 68325) && e < 68327)))))) : e < 68904 || !(e < 68912) && (e < 68922 || !(e < 69446) && (e < 69457 || 69632 === e || 69633 === e || 69634 === e || !(e < 69688) && (e < 69703 || !(e < 69734) && (e < 69744 || !(e < 69759) && e < 69762)))) : e < 70079 ? e < 69932 ? 69762 === e || !(e < 69808) && (e < 69811 || !(e < 69811) && (e < 69815 || !(e < 69815) && (e < 69817 || !(e < 69817) && (e < 69819 || !(e < 69872) && (e < 69882 || !(e < 69888) && (e < 69891 || !(e < 69927) && e < 69932)))))) : 69932 === e || !(e < 69933) && (e < 69941 || !(e < 69942) && (e < 69952 || !(e < 69957) && (e < 69959 || 70003 === e || !(e < 70016) && (e < 70018 || 70018 === e || !(e < 70067) && (e < 70070 || !(e < 70070) && e < 70079))))) : e < 70206 ? !(e < 70079) && (e < 70081 || !(e < 70089) && (e < 70093 || !(e < 70096) && (e < 70106 || !(e < 70188) && (e < 70191 || !(e < 70191) && (e < 70194 || !(e < 70194) && (e < 70196 || 70196 === e || 70197 === e || !(e < 70198) && e < 70200)))))) : 70206 === e || 70367 === e || !(e < 70368) && (e < 70371 || !(e < 70371) && (e < 70379 || !(e < 70384) && (e < 70394 || !(e < 70400) && (e < 70402 || !(e < 70402) && (e < 70404 || !(e < 70459) && (e < 70461 || !(e < 70462) && e < 70464)))))) : e < 72273 ? e < 71227 ? e < 70835 ? e < 70709 ? 70464 === e || !(e < 70465) && (e < 70469 || !(e < 70471) && (e < 70473 || !(e < 70475) && (e < 70478 || 70487 === e || !(e < 70498) && (e < 70500 || !(e < 70502) && (e < 70509 || !(e < 70512) && e < 70517))))) : e < 70712 || !(e < 70712) && (e < 70720 || !(e < 70720) && (e < 70722 || !(e < 70722) && (e < 70725 || 70725 === e || 70726 === e || !(e < 70736) && (e < 70746 || 70750 === e || !(e < 70832) && e < 70835)))) : e < 71087 ? !(e < 70835) && (e < 70841 || 70841 === e || 70842 === e || !(e < 70843) && (e < 70847 || !(e < 70847) && (e < 70849 || 70849 === e || !(e < 70850) && (e < 70852 || !(e < 70864) && e < 70874)))) : e < 71090 || !(e < 71090) && (e < 71094 || !(e < 71096) && (e < 71100 || !(e < 71100) && (e < 71102 || 71102 === e || !(e < 71103) && (e < 71105 || !(e < 71132) && (e < 71134 || !(e < 71216) && (e < 71219 || !(e < 71219) && e < 71227)))))) : e < 71463 ? e < 71342 ? !(e < 71227) && (e < 71229 || 71229 === e || 71230 === e || !(e < 71231) && (e < 71233 || !(e < 71248) && (e < 71258 || 71339 === e || 71340 === e || 71341 === e))) : e < 71344 || !(e < 71344) && (e < 71350 || 71350 === e || 71351 === e || !(e < 71360) && (e < 71370 || !(e < 71453) && (e < 71456 || !(e < 71456) && (e < 71458 || !(e < 71458) && (e < 71462 || 71462 === e))))) : e < 72154 ? !(e < 71463) && (e < 71468 || !(e < 71472) && (e < 71482 || !(e < 71724) && (e < 71727 || !(e < 71727) && (e < 71736 || 71736 === e || !(e < 71737) && (e < 71739 || !(e < 71904) && (e < 71914 || !(e < 72145) && (e < 72148 || !(e < 72148) && e < 72152))))))) : e < 72156 || !(e < 72156) && (e < 72160 || 72160 === e || 72164 === e || !(e < 72193) && (e < 72203 || !(e < 72243) && (e < 72249 || 72249 === e || !(e < 72251) && (e < 72255 || 72263 === e)))) : e < 92768 ? e < 72884 ? e < 72760 ? !(e < 72273) && (e < 72279 || !(e < 72279) && (e < 72281 || !(e < 72281) && (e < 72284 || !(e < 72330) && (e < 72343 || 72343 === e || !(e < 72344) && (e < 72346 || 72751 === e || !(e < 72752) && e < 72759))))) : e < 72766 || 72766 === e || 72767 === e || !(e < 72784) && (e < 72794 || !(e < 72850) && (e < 72872 || 72873 === e || !(e < 72874) && (e < 72881 || 72881 === e || !(e < 72882) && e < 72884))) : e < 73098 ? 72884 === e || !(e < 72885) && (e < 72887 || !(e < 73009) && (e < 73015 || 73018 === e || !(e < 73020) && (e < 73022 || !(e < 73023) && (e < 73030 || 73031 === e || !(e < 73040) && e < 73050)))) : e < 73103 || !(e < 73104) && (e < 73106 || !(e < 73107) && (e < 73109 || 73109 === e || 73110 === e || 73111 === e || !(e < 73120) && (e < 73130 || !(e < 73459) && (e < 73461 || !(e < 73461) && e < 73463)))) : e < 121403 ? e < 119141 ? !(e < 92768) && (e < 92778 || !(e < 92912) && (e < 92917 || !(e < 92976) && (e < 92983 || !(e < 93008) && (e < 93018 || 94031 === e || !(e < 94033) && (e < 94088 || !(e < 94095) && (e < 94099 || !(e < 113821) && e < 113823)))))) : e < 119143 || !(e < 119143) && (e < 119146 || !(e < 119149) && (e < 119155 || !(e < 119163) && (e < 119171 || !(e < 119173) && (e < 119180 || !(e < 119210) && (e < 119214 || !(e < 119362) && (e < 119365 || !(e < 120782) && (e < 120832 || !(e < 121344) && e < 121399))))))) : e < 122918 ? !(e < 121403) && (e < 121453 || 121461 === e || 121476 === e || !(e < 121499) && (e < 121504 || !(e < 121505) && (e < 121520 || !(e < 122880) && (e < 122887 || !(e < 122888) && (e < 122905 || !(e < 122907) && (e < 122914 || !(e < 122915) && e < 122917)))))) : e < 122923 || !(e < 123184) && (e < 123191 || !(e < 123200) && (e < 123210 || !(e < 123628) && (e < 123632 || !(e < 123632) && (e < 123642 || !(e < 125136) && (e < 125143 || !(e < 125252) && (e < 125259 || !(e < 125264) && (e < 125274 || !(e < 917760) && e < 918e3)))))));
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.isIdStart = a, t.isIdContinue = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = {
$LONE: new Set([ "ASCII", "ASCII_Hex_Digit", "AHex", "Alphabetic", "Alpha", "Any", "Assigned", "Bidi_Control", "Bidi_C", "Bidi_Mirrored", "Bidi_M", "Case_Ignorable", "CI", "Cased", "Changes_When_Casefolded", "CWCF", "Changes_When_Casemapped", "CWCM", "Changes_When_Lowercased", "CWL", "Changes_When_NFKC_Casefolded", "CWKCF", "Changes_When_Titlecased", "CWT", "Changes_When_Uppercased", "CWU", "Dash", "Default_Ignorable_Code_Point", "DI", "Deprecated", "Dep", "Diacritic", "Dia", "Emoji", "Emoji_Component", "Emoji_Modifier", "Emoji_Modifier_Base", "Emoji_Presentation", "Extender", "Ext", "Grapheme_Base", "Gr_Base", "Grapheme_Extend", "Gr_Ext", "Hex_Digit", "Hex", "IDS_Binary_Operator", "IDSB", "IDS_Trinary_Operator", "IDST", "ID_Continue", "IDC", "ID_Start", "IDS", "Ideographic", "Ideo", "Join_Control", "Join_C", "Logical_Order_Exception", "LOE", "Lowercase", "Lower", "Math", "Noncharacter_Code_Point", "NChar", "Pattern_Syntax", "Pat_Syn", "Pattern_White_Space", "Pat_WS", "Quotation_Mark", "QMark", "Radical", "Regional_Indicator", "RI", "Sentence_Terminal", "STerm", "Soft_Dotted", "SD", "Terminal_Punctuation", "Term", "Unified_Ideograph", "UIdeo", "Uppercase", "Upper", "Variation_Selector", "VS", "White_Space", "space", "XID_Continue", "XIDC", "XID_Start", "XIDS" ]),
General_Category: new Set([ "Cased_Letter", "LC", "Close_Punctuation", "Pe", "Connector_Punctuation", "Pc", "Control", "Cc", "cntrl", "Currency_Symbol", "Sc", "Dash_Punctuation", "Pd", "Decimal_Number", "Nd", "digit", "Enclosing_Mark", "Me", "Final_Punctuation", "Pf", "Format", "Cf", "Initial_Punctuation", "Pi", "Letter", "L", "Letter_Number", "Nl", "Line_Separator", "Zl", "Lowercase_Letter", "Ll", "Mark", "M", "Combining_Mark", "Math_Symbol", "Sm", "Modifier_Letter", "Lm", "Modifier_Symbol", "Sk", "Nonspacing_Mark", "Mn", "Number", "N", "Open_Punctuation", "Ps", "Other", "C", "Other_Letter", "Lo", "Other_Number", "No", "Other_Punctuation", "Po", "Other_Symbol", "So", "Paragraph_Separator", "Zp", "Private_Use", "Co", "Punctuation", "P", "punct", "Separator", "Z", "Space_Separator", "Zs", "Spacing_Mark", "Mc", "Surrogate", "Cs", "Symbol", "S", "Titlecase_Letter", "Lt", "Unassigned", "Cn", "Uppercase_Letter", "Lu" ]),
Script: new Set([ "Adlam", "Adlm", "Ahom", "Anatolian_Hieroglyphs", "Hluw", "Arabic", "Arab", "Armenian", "Armn", "Avestan", "Avst", "Balinese", "Bali", "Bamum", "Bamu", "Bassa_Vah", "Bass", "Batak", "Batk", "Bengali", "Beng", "Bhaiksuki", "Bhks", "Bopomofo", "Bopo", "Brahmi", "Brah", "Braille", "Brai", "Buginese", "Bugi", "Buhid", "Buhd", "Canadian_Aboriginal", "Cans", "Carian", "Cari", "Caucasian_Albanian", "Aghb", "Chakma", "Cakm", "Cham", "Cherokee", "Cher", "Common", "Zyyy", "Coptic", "Copt", "Qaac", "Cuneiform", "Xsux", "Cypriot", "Cprt", "Cyrillic", "Cyrl", "Deseret", "Dsrt", "Devanagari", "Deva", "Duployan", "Dupl", "Egyptian_Hieroglyphs", "Egyp", "Elbasan", "Elba", "Ethiopic", "Ethi", "Georgian", "Geor", "Glagolitic", "Glag", "Gothic", "Goth", "Grantha", "Gran", "Greek", "Grek", "Gujarati", "Gujr", "Gurmukhi", "Guru", "Han", "Hani", "Hangul", "Hang", "Hanunoo", "Hano", "Hatran", "Hatr", "Hebrew", "Hebr", "Hiragana", "Hira", "Imperial_Aramaic", "Armi", "Inherited", "Zinh", "Qaai", "Inscriptional_Pahlavi", "Phli", "Inscriptional_Parthian", "Prti", "Javanese", "Java", "Kaithi", "Kthi", "Kannada", "Knda", "Katakana", "Kana", "Kayah_Li", "Kali", "Kharoshthi", "Khar", "Khmer", "Khmr", "Khojki", "Khoj", "Khudawadi", "Sind", "Lao", "Laoo", "Latin", "Latn", "Lepcha", "Lepc", "Limbu", "Limb", "Linear_A", "Lina", "Linear_B", "Linb", "Lisu", "Lycian", "Lyci", "Lydian", "Lydi", "Mahajani", "Mahj", "Malayalam", "Mlym", "Mandaic", "Mand", "Manichaean", "Mani", "Marchen", "Marc", "Masaram_Gondi", "Gonm", "Meetei_Mayek", "Mtei", "Mende_Kikakui", "Mend", "Meroitic_Cursive", "Merc", "Meroitic_Hieroglyphs", "Mero", "Miao", "Plrd", "Modi", "Mongolian", "Mong", "Mro", "Mroo", "Multani", "Mult", "Myanmar", "Mymr", "Nabataean", "Nbat", "New_Tai_Lue", "Talu", "Newa", "Nko", "Nkoo", "Nushu", "Nshu", "Ogham", "Ogam", "Ol_Chiki", "Olck", "Old_Hungarian", "Hung", "Old_Italic", "Ital", "Old_North_Arabian", "Narb", "Old_Permic", "Perm", "Old_Persian", "Xpeo", "Old_South_Arabian", "Sarb", "Old_Turkic", "Orkh", "Oriya", "Orya", "Osage", "Osge", "Osmanya", "Osma", "Pahawh_Hmong", "Hmng", "Palmyrene", "Palm", "Pau_Cin_Hau", "Pauc", "Phags_Pa", "Phag", "Phoenician", "Phnx", "Psalter_Pahlavi", "Phlp", "Rejang", "Rjng", "Runic", "Runr", "Samaritan", "Samr", "Saurashtra", "Saur", "Sharada", "Shrd", "Shavian", "Shaw", "Siddham", "Sidd", "SignWriting", "Sgnw", "Sinhala", "Sinh", "Sora_Sompeng", "Sora", "Soyombo", "Soyo", "Sundanese", "Sund", "Syloti_Nagri", "Sylo", "Syriac", "Syrc", "Tagalog", "Tglg", "Tagbanwa", "Tagb", "Tai_Le", "Tale", "Tai_Tham", "Lana", "Tai_Viet", "Tavt", "Takri", "Takr", "Tamil", "Taml", "Tangut", "Tang", "Telugu", "Telu", "Thaana", "Thaa", "Thai", "Tibetan", "Tibt", "Tifinagh", "Tfng", "Tirhuta", "Tirh", "Ugaritic", "Ugar", "Vai", "Vaii", "Warang_Citi", "Wara", "Yi", "Yiii", "Zanabazar_Square", "Zanb" ])
};
t.PropertyData = a, t.PropertyData.gc = t.PropertyData.General_Category, t.PropertyData.sc = t.PropertyData.Script_Extensions = t.PropertyData.scx = t.PropertyData.Script, 
t.default = t.PropertyData;
}, function(e, t, n) {
"use strict";
var a, r, i, o, s;
Object.defineProperty(t, "__esModule", {
value: !0
}), function(e) {
e.RegExpLiteral = "RegExpLiteral", e.Pattern = "Pattern", e.Disjunction = "Disjunction", 
e.Group = "Group", e.CapturingGroup = "CapturingGroup", e.LookaroundAssertion = "Assertion", 
e.LookaheadAssertion = "Assertion", e.LookbehindAssertion = "Assertion", e.Quantifier = "Quantifier", 
e.CharacterClass = "CharacterClass", e.CharacterClassRange = "CharacterClassRange", 
e.Assertion = "Assertion", e.BoundaryAssertion = "Assertion", e.EdgeAssertion = "Assertion", 
e.WordBoundaryAssertion = "Assertion", e.CharacterSet = "CharacterSet", e.AnyCharacterSet = "CharacterSet", 
e.EscapeCharacterSet = "CharacterSet", e.UnicodePropertyCharacterSet = "CharacterSet", 
e.Character = "Character", e.Backreference = "Backreference", e.Flags = "Flags";
}(a = t.EnumTypeNode || (t.EnumTypeNode = {})), function(e) {
e.LookaheadAssertion = "lookahead", e.LookbehindAssertion = "lookbehind", e.EdgeAssertion_Start = "start", 
e.EdgeAssertion_End = "end", e.WordBoundaryAssertion = "word";
}(r = t.EnumKindAssertion || (t.EnumKindAssertion = {})), function(e) {
e.AnyCharacterSet = "any", e.EscapeCharacterSet_Digit = "digit", e.EscapeCharacterSet_Space = "space", 
e.EscapeCharacterSet_Word = "word", e.UnicodePropertyCharacterSet = "property";
}(i = t.EnumKindCharacterSet || (t.EnumKindCharacterSet = {})), function(e) {
e[e.v5 = 5] = "v5", e[e.v2015 = 2015] = "v2015", e[e.v2016 = 2016] = "v2016", e[e.v2017 = 2017] = "v2017", 
e[e.v2018 = 2018] = "v2018";
}(o = t.EnumEcmaVersion || (t.EnumEcmaVersion = {})), function(e) {
e.UnknownError = "UnknownError", e.AssertionError = "AssertionError";
}(s = t.EnumError || (t.EnumError = {})), t.default = t;
}, function(e, t, n) {
"use strict";
e.exports = function() {
return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(125), r = n(126), i = n(202), o = n(203), s = n(141);
var u;
function c(e, n, a = t.PatternTest) {
return !t.PatternTest.hasOwnProperty(e) && t.UNICODE_NAME_ALIAS_ALL[e] && t.PatternTest.hasOwnProperty(t.UNICODE_NAME_ALIAS_ALL[e]) && (e = t.UNICODE_NAME_ALIAS_ALL[e]), 
t._testUnicode(e, n, a);
}
function l(e = RegExp, n = t.PatternTest) {
return Object.keys(t.UNICODE_ALL).reduce(function(t, a) {
return t[a] = c(a, e, n), t;
}, {});
}
function d(e, n) {
let a = t.KEY_PREFIX;
return n && (a = t.KEY_PREFIX_NEGATION), r._wrapToRegexName(e, a, t.KEY_SUFFIX);
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
}, t.UNICODE_ALL = {
...i.default,
...o.default,
...s.default.$LONE,
...s.default.General_Category,
...t.UNICODE
}, function(e) {
e.Quotation_Mark = "QMark", e.Pattern_Syntax = "Pat_Syn", e.Ideographic = "Ideo";
}(u = t.UNICODE_NAME_ALIAS || (t.UNICODE_NAME_ALIAS = {})), Object.keys(u).forEach(function(e) {
let t = u[e];
t && !u[t] && (u[t] = e);
}), t.UNICODE_NAME_ALIAS_ALL = Object.assign({}, i.NAME_ALIAS, u, i.NAME_ALIAS), 
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
}, t._testUnicode = a._createFnTestPattern(t.PatternTest), t.testUnicode = c, t.testUnicodeAll = l, 
t.wrapToRegexName = d, t.default = t;
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
var a = function() {};
a.prototype = n.prototype, t.prototype = new a(), t.prototype.constructor = t;
};
}, function(e, t) {
function n(e) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
n.keys = function() {
return [];
}, n.resolve = n, e.exports = n, n.id = 201;
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
const a = n(125), r = n(126), i = n(205);
function o(e = RegExp, n = t.PatternTest) {
return Object.keys(t.UNICODE_BLOCKS_ALL).reduce(function(a, r) {
return a[r] = t.testUnicodeBlocks(r, e, n), a;
}, {});
}
function s(e, n) {
let a = t.KEY_PREFIX;
return n && (a = t.KEY_PREFIX_NEGATION), r._wrapToRegexName(e, a, t.KEY_SUFFIX);
}
t.KEY_PREFIX = "\\p{", t.KEY_PREFIX_NEGATION = "\\P{", t.KEY_SUFFIX = "}", t.UNICODE_BLOCKS = {
InBasic_Latin: !1
}, t.UNICODE_BLOCKS_ALL = {
...i.default,
...t.UNICODE_BLOCKS
}, t.PatternTest = {
InBasic_Latin: [ [ "^\\p{InBasic_Latin}+$", "u", "", !0, "test" ], [ "^\\p{InBasic_Latin}+$", "u", "", !1, "test" ] ]
}, t.testUnicodeBlocks = a._createFnTestPattern(t.PatternTest), t.testUnicodeBlocksAll = o, 
t.wrapToRegexName = s, t.default = t;
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
});
const a = n(141), r = n(125), i = n(126), o = n(207);
var s;
function u(e, n, a = t.PatternTest) {
return !t.PatternTest.hasOwnProperty(e) && s[e] && t.PatternTest.hasOwnProperty(s[e]) && (e = s[e]), 
t._testUnicodeScript(e, n, a);
}
function c(e = RegExp, n = t.PatternTest) {
return Object.keys(t.UNICODE_SCRIPTS_ALL).reduce(function(t, a) {
return t[a] = u(a, e, n), t;
}, {});
}
function l(e, n) {
let a = t.KEY_PREFIX;
return n && (a = t.KEY_PREFIX_NEGATION), i._wrapToRegexName(e, a, t.KEY_SUFFIX);
}
t.KEY_PREFIX = "\\p{Script=", t.KEY_PREFIX_NEGATION = "\\P{Script=", t.KEY_SUFFIX = "}", 
t.UNICODE_SCRIPTS = {
Greek: !1,
Latin: !1,
Katakana: !1,
Hiragana: !1,
Han: !1,
Hangul: !1
}, t.UNICODE_SCRIPTS_ALL = {
...o.default,
...a.default.Script,
...t.UNICODE_SCRIPTS
}, function(e) {
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
}, t._testUnicodeScript = r._createFnTestPattern(t.PatternTest), t.testUnicodeScript = u, 
t.testUnicodeScriptAll = c, t.wrapToRegexName = l, t.default = t;
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
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(15);
function r(e = RegExp) {
const n = "g";
let r = a.createRegExp("", "g", e);
return Object.keys(t.PROTOTYPE).reduce(function(e, t) {
switch (t) {
case "flags":
e[t] = t in r && "g" === r[t];
break;

default:
e[t] = t in r;
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
}, t.testPrototype = r, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(15);
function r(e = RegExp) {
let n = e, r;
return a.createRegExp("(wor)(ld)", "g", e).test("hello world!"), Object.keys(t.REGEXP_STATIC).reduce(function(e, t) {
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
}, t.testStatic = r, t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(15);
function r(e = RegExp) {
let n = a.createRegExp("", "", e);
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
}, t.testSymbol = r, t.default = t;
}, function(e, t, n) {
"use strict";
const a = n(212);
e.exports = a.matchRange;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(213), r = n(215);
t.TABLE_RANGE = r.default;
const i = n(19);
function o(e, t, n = {}) {
n = c(n);
let a = e, r = t, o = [], u = !!n.findFirstOne;
return Object.keys(n.dataTables).some(function(e) {
let t;
if (n.dataTables[e].some(function(e) {
let n = e.indexOf(a), i = e.indexOf(r, n);
if (-1 !== n && -1 !== i) return o.push(...e.slice(n, i + 1)), t = !0, u;
}), t) return !0;
}), o && o.length ? (i.array_unique_overwrite(o), n.createRegExpString ? s(o, n.createRegExpClass) : o) : null;
}
function s(e, t) {
if (1 == e.length) return e[0];
let n = e.join("");
return t ? "[" + n + "]" : n;
}
function u(e, t, n = {}) {
let r = e, i = t, s = null;
if (!(s = o(e, t, n = c(n))) && (n.arrayMode || 1 == String(r).length && 1 == String(i).length)) {
let e;
if ("string" == typeof r && "string" == typeof i) {
let t, n;
e = r.charCodeAt(0) <= i.charCodeAt(0);
} else e = !0;
e && (s = a(r, i)), s && s.length || (s = null);
}
return Array.isArray(s) && (s = s.map(e => String(e))), s;
}
function c(e) {
let t = Object.assign({}, e);
return t.dataTables = t.dataTables || r.default, t;
}
t.matchRange = o, t.toRegExpString = s, t.fillRange = u, t.getOptions = c, o.matchRange = o, 
o.getOptions = c, o.toRegExpString = s, o.TABLE_RANGE = r.default, o.fillRange = u, 
o.default = o, t.default = t;
}, function(e, t, n) {
"use strict";
const a = n(140), r = n(142), i = n(214);
function o(e, t, n, i) {
if (void 0 === e) return [];
if (void 0 === t || e === t) {
let t = "string" == typeof e;
return r(e) && !d(e) ? [ t ? "0" : 0 ] : [ e ];
}
"number" != typeof n && "string" != typeof n && (i = n, n = void 0), "function" == typeof i && (i = {
transform: i
});
const o = Object.assign({
step: n
}, i);
if (o.step && !g(o.step)) {
if (!0 === o.strictRanges) throw new TypeError("expected options.step to be a number");
return [];
}
if (o.isNumber = g(e) && g(t), !o.isNumber && !h(e, t)) {
if (!0 === o.strictRanges) throw new RangeError("invalid range arguments: " + a.inspect([ e, t ]));
return [];
}
return o.isPadded = p(e) || p(t), o.toString = o.stringify || "string" == typeof o.step || "string" == typeof e || "string" == typeof t || !o.isNumber, 
o.isPadded && (o.maxLength = Math.max(String(e).length, String(t).length)), "boolean" == typeof o.optimize && (o.toRegex = o.optimize), 
"boolean" == typeof o.makeRe && (o.toRegex = o.makeRe), s(e, t, o);
}
function s(e, t, n) {
let r = n.isNumber ? d(e) : e.charCodeAt(0), i = n.isNumber ? d(t) : t.charCodeAt(0), o = Math.abs(d(n.step)) || 1;
if (n.toRegex && 1 === o) return u(r, i, e, t, n);
let s = {
greater: [],
lesser: []
}, p = r < i, h = new Array(Math.round((p ? i - r : r - i) / o)), f = 0;
if (!p && n.strictOrder) {
if (!0 === n.strictRanges) throw new RangeError("invalid range arguments: " + a.inspect([ e, t ]));
return [];
}
for (;p ? r <= i : r >= i; ) {
let e = n.isNumber ? r : String.fromCharCode(r);
if (n.toRegex && (e >= 0 || !n.isNumber) ? s.greater.push(e) : s.lesser.push(Math.abs(e)), 
n.isPadded && (e = l(e, n)), n.toString && (e = String(e)), "function" == typeof n.transform ? h[f++] = n.transform(e, r, i, o, f, h, n) : h[f++] = e, 
p ? r += o : r -= o, n.limit > 0 && h.length >= n.limit) break;
}
return !0 === n.toRegex ? c(h, s, n) : h;
}
function u(e, t, n, a, r) {
return r.isPadded ? i(n, a, r) : r.isNumber ? i(Math.min(e, t), Math.max(e, t), r) : `[${n = String.fromCharCode(Math.min(e, t))}-${a = String.fromCharCode(Math.max(e, t))}]`;
}
function c(e, t, n) {
let a = "", r = "";
t.greater.length && (a = t.greater.join("|")), t.lesser.length && (r = `-(${t.lesser.join("|")})`);
let i = a && r ? `${a}|${r}` : a || r;
return n.capture ? `(${i})` : i;
}
function l(e, t) {
if (t.isPadded) {
let n = String(e), a = n.length, r = "";
"-" === n.charAt(0) && (r = "-", n = n.slice(1));
let i = t.maxLength - a, o;
e = r + "0".repeat(i) + n;
}
return t.stringify ? String(e) : e;
}
function d(e) {
return Number(e) || 0;
}
function p(e) {
return /^-?0\d/.test(e);
}
function h(e, t) {
return (g(e) || f(e)) && (g(t) || f(t));
}
function f(e) {
return "string" == typeof e && 1 === e.length && /^\w+$/.test(e);
}
function g(e) {
return r(e) && !/\./.test(e);
}
e.exports = o;
}, function(e, t, n) {
"use strict";
const a = n(142);
function r(e, t, n) {
if (!1 === a(e)) throw new TypeError("toRegexRange: expected the first argument to be a number");
if (void 0 === t || e === t) return String(e);
if (!1 === a(t)) throw new TypeError("toRegexRange: expected the second argument to be a number.");
n = n || {};
let o, s, c, l = e + ":" + t + "=" + String(n.relaxZeros) + String(n.shorthand) + String(n.capture);
if (r.cache.hasOwnProperty(l)) return r.cache[l].result;
let d = Math.min(e, t), p = Math.max(e, t);
if (1 === Math.abs(d - p)) {
let a = e + "|" + t;
return n.capture ? "(" + a + ")" : !1 === n.wrap ? a : "(?:" + a + ")";
}
let h = b(e) || b(t), f = [], g = [], m = {
min: e,
max: t,
a: d,
b: p
};
if (h && (m.isPadded = h, m.maxLen = String(m.max).length), d < 0) {
let e, t;
g = u(p < 0 ? Math.abs(p) : 1, Math.abs(d), m, n), d = m.a = 0;
}
return p >= 0 && (f = u(d, p, m, n)), m.negatives = g, m.positives = f, m.result = i(g, f, n), 
n.capture ? m.result = "(" + m.result + ")" : !1 !== n.wrap && f.length + g.length > 1 && (m.result = "(?:" + m.result + ")"), 
r.cache[l] = m, m.result;
}
function i(e, t, n) {
let a = c(e, t, "-", !1, n) || [], r = c(t, e, "", !1, n) || [], i = c(e, t, "-?", !0, n) || [], o;
return a.concat(i).concat(r).join("|");
}
function o(e, t) {
e = Number(e);
let n = 1, a = [ t = Number(t) ], r = +f(e, n);
for (;e <= r && r <= t; ) a = p(a, r), r = +f(e, n += 1);
let i = 1;
for (r = g(t + 1, i) - 1; e < r && r <= t; ) a = p(a, r), r = g(t + 1, i += 1) - 1;
return a.sort(d), a;
}
function s(e, t, n) {
if (e === t) return {
pattern: String(e),
digits: []
};
let a = l(String(e), String(t)), r = a.length, i = -1, o = "", s = 0;
for (;++i < r; ) {
let e = a[i], t = e[0], n = e[1];
t === n ? o += t : "0" !== t || "9" !== n ? o += _(t, n) : s += 1;
}
return s && (o += n.shorthand ? "\\d" : "[0-9]"), {
pattern: o,
digits: [ s ]
};
}
function u(e, t, n, a) {
let r = o(e, t), i = r.length, u = -1, c = [], l = e, d;
for (;++u < i; ) {
let e = r[u], t = s(l, e, a), i = "";
n.isPadded || !d || d.pattern !== t.pattern ? (n.isPadded && (i = y(e, n)), t.string = i + t.pattern + m(t.digits), 
c.push(t), l = e + 1, d = t) : (d.digits.length > 1 && d.digits.pop(), d.digits.push(t.digits[0]), 
d.string = d.pattern + m(d.digits), l = e + 1);
}
return c;
}
function c(e, t, n, a, r) {
let i = [];
for (let o = 0; o < e.length; o++) {
let s, u = e[o].string;
!1 !== r.relaxZeros && "-" === n && "0" === u.charAt(0) && (u = "{" === u.charAt(1) ? "0*" + u.replace(/^0\{\d+\}/, "") : "0*" + u.slice(1)), 
a || h(t, "string", u) || i.push(n + u), a && h(t, "string", u) && i.push(n + u);
}
return i;
}
function l(e, t) {
let n = [];
for (let a = 0; a < e.length; a++) n.push([ e[a], t[a] ]);
return n;
}
function d(e, t) {
return e > t ? 1 : t > e ? -1 : 0;
}
function p(e, t) {
return -1 === e.indexOf(t) && e.push(t), e;
}
function h(e, t, n) {
for (let a = 0; a < e.length; a++) if (e[a][t] === n) return !0;
return !1;
}
function f(e, t) {
return String(e).slice(0, -t) + "9".repeat(t);
}
function g(e, t) {
return e - e % Math.pow(10, t);
}
function m(e) {
let t = e[0], n = e[1] ? "," + e[1] : "";
return n || t && 1 !== t ? "{" + t + n + "}" : "";
}
function _(e, t) {
return "[" + e + (t - e == 1 ? "" : "-") + t + "]";
}
function b(e) {
return /^-?(0+)\d/.exec(e);
}
function y(e, t) {
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
r.cache = {}, r.clearCache = (() => r.cache = {}), e.exports = r;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(216), r = n(226);
t.table_range = {
chinese: a.default,
chinese2: a.list_range2,
circle: r.default
}, t.default = t.table_range;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(217);
t.list_range = [ "〇一二三四五六七八九十".split(""), "零一二三四五六七八九十".split("") ], [ [ "common", "十" ], [ "formal", "十" ], [ "traditional", "拾" ], [ "traditionalOld", "拾" ], [ "simplified", "拾" ], [ "traditional", "什" ], [ "traditionalOld", "什" ], [ "simplified", "什" ] ].forEach(function(e) {
let n = a.predefineedTranscriptionConfigs.digits[e[0]];
n && (n = Object.values(n), e[1] && n.push(e[1]), t.list_range.push(n));
}), t.list_range2 = [], [ [ "chineseMilitary" ] ].forEach(function(e) {
let n = a.predefineedTranscriptionConfigs.digits[e[0]];
n && (n = Object.values(n), e[1] && n.push(e[1]), t.list_range2.push(n));
}), t.default = t.list_range;
}, function(e, t, n) {
"use strict";
var a = {};
n(218)(a), n(219)(a), n(220)(a), e.exports = a;
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
e.hiraganize = function(a) {
return a.replace(e.katakanaRegex, function(a) {
return a.match(/^[\u30a1-\u30f4\u30fd\u30fe]$/) ? t(n(a) - n("ァ") + n("ぁ")) : e.specialHiraganizationTable[a] ? e.specialHiraganizationTable[a] : void 0;
});
}, e.katakanize = function(a) {
return a.replace(e.hiraganaRegex, function(a) {
return a.match(/^[\u3041-\u3094\u309d\u309e]$/) ? t(n(a) - n("ぁ") + n("ァ")) : e.specialKatakanizationTable[a] ? e.specialKatakanizationTable[a] : void 0;
});
};
};
}, function(e, t, n) {
"use strict";
var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}, r = n(143);
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
if ("object" !== (void 0 === n ? "undefined" : a(n))) throw new Error("You specified unknown config to japanese.romanize");
n = r({}, e.defaultRomanizationConfig, n);
var i = r({}, e.romanizationTable);
"shi" === n["し"] && r(i, {
"し": "shi",
"しゃ": "sha",
"しゅ": "shu",
"しぇ": "she",
"しょ": "sho"
}), "chi" === n["ち"] && r(i, {
"ち": "chi",
"ちゃ": "cha",
"ちゅ": "chu",
"ちぇ": "che",
"ちょ": "cho",
"てぃ": "ti",
"てゅ": "tyu"
}), "tsu" === n["つ"] && r(i, {
"つ": "tsu",
"つぁ": "tsa",
"つぃ": "tsi",
"つぇ": "tse",
"つぉ": "tso",
"つゅ": "tsyu",
"とぅ": "tu"
}), "fu" === n["ふ"] && r(i, {
"ふ": "fu",
"ふぁ": "fa",
"ふぃ": "fi",
"ふぇ": "fe",
"ふぉ": "fo",
"ふゃ": "fya",
"ふゅ": "fyu",
"ふょ": "fyo"
}), "ji" === n["じ"] && r(i, {
"じ": "ji",
"じゃ": "ja",
"じゅ": "ju",
"じぇ": "je",
"じょ": "jo"
}), "ji" === n["ぢ"] && r(i, {
"ぢ": "ji",
"ぢゃ": "ja",
"ぢゅ": "ju",
"ぢぇ": "je",
"ぢょ": "jo",
"でぃ": "di",
"でゅ": "dyu"
}), "zi" === n["ぢ"] && r(i, {
"ぢ": "zi",
"ぢゃ": "zya",
"ぢゅ": "zyu",
"ぢぇ": "zye",
"ぢょ": "zyo",
"でぃ": "di",
"でゅ": "dyu"
}), "dji" === n["ぢ"] && r(i, {
"ぢ": "dji",
"ぢゃ": "dja",
"ぢゅ": "dju",
"ぢぇ": "dje",
"ぢょ": "djo",
"でぃ": "di",
"でゅ": "dyu"
}), "dzi" === n["ぢ"] && r(i, {
"ぢ": "dzi",
"ぢゃ": "dzya",
"ぢゅ": "dzyu",
"ぢぇ": "dzye",
"ぢょ": "dzyo",
"でぃ": "di",
"でゅ": "dyu"
}), "zu" === n["づ"] && r(i, {
"づ": "zu",
"づぁ": "zua",
"づぃ": "zui",
"づぇ": "zue",
"づぉ": "zuo",
"どぅ": "du"
}), "dsu" === n["づ"] && r(i, {
"づ": "dsu",
"づぁ": "dsua",
"づぃ": "dsui",
"づぇ": "dsue",
"づぉ": "dsuo",
"どぅ": "du"
}), "dzu" === n["づ"] && r(i, {
"づ": "dzu",
"づぁ": "dzua",
"づぃ": "dzui",
"づぇ": "dzue",
"づぉ": "dzuo",
"どぅ": "du"
}), "i" === n["ゐ"] && r(i, {
"ゐ": "i",
"ゑ": "e"
}), "o" === n["を"] && r(i, {
"を": "o"
}), t = e.hiraganize(t);
for (var o = "", s = ""; t.length > 0; ) {
var u = "";
if (i[t.slice(0, 2)] ? (u = t.slice(0, 2), t = t.slice(2)) : (u = t[0], t = t.slice(1)), 
"っ" !== u) {
var c = i[u] || "";
"っ" === s && (c.match(/^[^aiueo]/) ? c = "ち" === u[0] ? "tchi" === n["っち"] ? {
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
}[u] : c[0] + c : o += "'"), "ー" === u ? o.match(/[aiueo]$/) ? ("a" === n["あー"] || ("ah" === n["あー"] ? o += "h" : "a-" === n["あー"] ? o += "-" : "aa" === n["あー"] ? o = o.slice(0, -1) + {
a: "aa",
i: "ii",
u: "uu",
e: "ee",
o: "oo"
}[o.slice(-1)] : "â" === n["あー"] ? o = o.slice(0, -1) + {
a: "â",
i: "î",
u: "û",
e: "ê",
o: "ô"
}[o.slice(-1)] : "ā" === n["あー"] && (o = o.slice(0, -1) + {
a: "ā",
i: "ī",
u: "ū",
e: "ē",
o: "ō"
}[o.slice(-1)])), c = "") : c = "-" : "e" === o.slice(-1) && "i" === c[0] ? (c = c.slice(1), 
"ei" === n["えい"] ? o += "i" : "ee" === n["えい"] ? o += "e" : "eh" === n["えい"] ? o += "h" : "ê" === n["えい"] ? o = o.slice(0, -1) + "ê" : "ē" === n["えい"] ? o = o.slice(0, -1) + "ē" : n["えい"]) : "o" === o.slice(-1) && "u" === c[0] ? (c = c.slice(1), 
"ou" === n["おう"] ? o += "u" : "oo" === n["おう"] ? o += "o" : "oh" === n["おう"] ? o += "h" : "ô" === n["おう"] ? o = o.slice(0, -1) + "ô" : "ō" === n["おう"] ? o = o.slice(0, -1) + "ō" : n["おう"]) : o.match(/[aiueo]$/) && o.slice(-1) === c[0] && "を" !== u && (c = c.slice(1), 
o = o.slice(0, -1) + n[{
a: "ああ",
i: "いい",
u: "うう",
e: "ええ",
o: "おお"
}[o.slice(-1)]]), c.match(/^[bpm]/) && "ん" === s && ("nba" === n["んば"] || "mba" === n["んば"] && (o = o.slice(0, -1) + "m")), 
c.match(/^[aiueoy]/) && "ん" === s && ("na" === n["んあ"] || ("n'a" === n["んあ"] ? c = "'" + c : "n-a" === n["んあ"] && (c = "-" + c))), 
n.punctuation && e.romanizePuncutuationTable[u] && (c = e.romanizePuncutuationTable[u]), 
o += c, s = u;
} else s = u;
}
return "っ" === s && (o += "'"), o;
};
};
}, function(e, t, n) {
"use strict";
(function(t) {
var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
return typeof e;
} : function(e) {
return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}, r = n(143), i = n(225);
function o(e, t) {
var n, a;
return !!((e[Math.floor(t / 8)] || 0) & 1 << 7 - t % 8);
}
function s(e, t, n) {
for (var a = new i(0), r = t; r < t + n; r++) a = a.times(2), o(e, r) && (a = a.plus(1));
return a;
}
var u = 9007199254740991, c = -9007199254740991;
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
if ("object" !== (void 0 === u ? "undefined" : a(u))) throw new Error("You specified unknown config to japanese.transcribeNumber");
if ("string" == typeof (u = r({}, e.transcriptionConfigs.default, u)).digits && (u.digits = e.predefineedTranscriptionConfigs.digits[u.digits], 
void 0 === u.digits)) throw new ReferenceError('Transcription method of digits "' + u.digits + '" is undefined');
if ("string" == typeof u.unitNames && (u.unitNames = e.predefineedTranscriptionConfigs.unitNames[u.unitNames], 
void 0 === u.unitNames)) throw new ReferenceError('Transcription method of unitNames "' + u.unitNames + '" is undefined');
if ("string" == typeof u.specialUnitNames && (u.specialUnitNames = e.predefineedTranscriptionConfigs.specialUnitNames[u.specialUnitNames], 
void 0 === u.specialUnitNames)) throw new ReferenceError('Transcription method of specialUnitNames "' + u.specialUnitNames + '" is undefined');
if ("string" == typeof u.smallUnitNames && (u.smallUnitNames = e.predefineedTranscriptionConfigs.smallUnitNames[u.smallUnitNames], 
void 0 === u.smallUnitNames)) throw new ReferenceError('Transcription method of smallUnitNames "' + u.smallUnitNames + '" is undefined');
if ("number" == typeof n) if (c <= n && n < 9007199254740991) n = n.toString(); else {
var l = new t(8);
l.writeDoubleBE(n, 0);
var d = o(l, 0), p = s(l, 1, 11), h = s(l, 12, 52), f = null;
0 === (p = parseInt(p.toString())) ? (f = h, p = 1) : f = new i(2).pow(52).plus(h), 
n = f.times(new i(2).pow(p - 1023 - 52)).toFixed(), d && (n = "-" + n);
} else if ("string" != typeof n) throw new ReferenceError("Type of `number` is unsupported");
var g = n.length, m = "", _ = !1;
if (u.unitNames.lit && g > u.unitNames.lit && (m = n.slice(0, -u.unitNames.lit).split("").map(function(e) {
return u.digits[e];
}).join(""), n = n.slice(-u.unitNames.lit), g = n.length, "0" === n[0] && (_ = !0, 
n = "9" + n.slice(1))), "0" === n) return u.digits[0];
var b = "";
"0" !== n.slice(-1) && (b += u.digits[n.slice(-1)]);
var y = Object.keys(u.unitNames).map(function(e) {
return parseInt(e);
}).filter(function(e, t, n) {
return n.indexOf(e) === t;
}).filter(function(e) {
return isFinite(e) && e > 0;
}).sort(function(e, t) {
return e - t;
});
return y.forEach(function(t, a) {
var r = y[a + 1] || Infinity, i = n.slice(Math.max(g - r, 0), Math.max(g - t, 0));
i.length > 0 && (i.split("").every(function(e) {
return "0" === e;
}) || (b = -1 !== u.truncateOne.indexOf(u.unitNames[t]) && 1 === parseInt(i) ? u.unitNames[t] + b : e.transcribeNumber(i, u) + u.unitNames[t] + b));
}), _ && (b = b.replace(new RegExp("^" + u.digits[9]), u.digits[0])), b = m + b;
}, e;
};
}).call(this, n(221).Buffer);
}, function(e, t, n) {
"use strict";
(function(e) {
var a = n(222), r = n(223), i = n(224);
function o() {
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
return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function u(e, t) {
if (s() < t) throw new RangeError("Invalid typed array length");
return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)), 
e.length = t), e;
}
function c(e, t, n) {
if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, n);
if ("number" == typeof e) {
if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
return h(this, e);
}
return l(this, e, t, n);
}
function l(e, t, n, a) {
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? m(e, t, n, a) : "string" == typeof t ? f(e, t, n) : _(e, t);
}
function d(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function p(e, t, n, a) {
return d(t), t <= 0 ? u(e, t) : void 0 !== n ? "string" == typeof a ? u(e, t).fill(n, a) : u(e, t).fill(n) : u(e, t);
}
function h(e, t) {
if (d(t), e = u(e, t < 0 ? 0 : 0 | b(t)), !c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
return e;
}
function f(e, t, n) {
if ("string" == typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var a = 0 | v(t, n), r = (e = u(e, a)).write(t, n);
return r !== a && (e = e.slice(0, r)), e;
}
function g(e, t) {
var n = t.length < 0 ? 0 : 0 | b(t.length);
e = u(e, n);
for (var a = 0; a < n; a += 1) e[a] = 255 & t[a];
return e;
}
function m(e, t, n, a) {
if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
if (t.byteLength < n + (a || 0)) throw new RangeError("'length' is out of bounds");
return t = void 0 === n && void 0 === a ? new Uint8Array(t) : void 0 === a ? new Uint8Array(t, n) : new Uint8Array(t, n, a), 
c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = g(e, t), e;
}
function _(e, t) {
if (c.isBuffer(t)) {
var n = 0 | b(t.length);
return 0 === (e = u(e, n)).length ? e : (t.copy(e, 0, 0, n), e);
}
if (t) {
if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || te(t.length) ? u(e, 0) : g(e, t);
if ("Buffer" === t.type && i(t.data)) return g(e, t.data);
}
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function b(e) {
if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
return 0 | e;
}
function y(e) {
return +e != e && (e = 0), c.alloc(+e);
}
function v(e, t) {
if (c.isBuffer(e)) return e.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
"string" != typeof e && (e = "" + e);
var n = e.length;
if (0 === n) return 0;
for (var a = !1; ;) switch (t) {
case "ascii":
case "latin1":
case "binary":
return n;

case "utf8":
case "utf-8":
case void 0:
return Y(e).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * n;

case "hex":
return n >>> 1;

case "base64":
return J(e).length;

default:
if (a) return Y(e).length;
t = ("" + t).toLowerCase(), a = !0;
}
}
function w(e, t, n) {
var a = !1;
if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
if ((n >>>= 0) <= (t >>>= 0)) return "";
for (e || (e = "utf8"); ;) switch (e) {
case "hex":
return R(this, t, n);

case "utf8":
case "utf-8":
return P(this, t, n);

case "ascii":
return M(this, t, n);

case "latin1":
case "binary":
return O(this, t, n);

case "base64":
return F(this, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return z(this, t, n);

default:
if (a) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase(), a = !0;
}
}
function k(e, t, n) {
var a = e[t];
e[t] = e[n], e[n] = a;
}
function x(e, t, n, a, r) {
if (0 === e.length) return -1;
if ("string" == typeof n ? (a = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), 
n = +n, isNaN(n) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
if (r) return -1;
n = e.length - 1;
} else if (n < 0) {
if (!r) return -1;
n = 0;
}
if ("string" == typeof t && (t = c.from(t, a)), c.isBuffer(t)) return 0 === t.length ? -1 : D(e, t, n, a, r);
if ("number" == typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : D(e, [ t ], n, a, r);
throw new TypeError("val must be string, number or Buffer");
}
function D(e, t, n, a, r) {
var i = 1, o = e.length, s = t.length, u;
if (void 0 !== a && ("ucs2" === (a = String(a).toLowerCase()) || "ucs-2" === a || "utf16le" === a || "utf-16le" === a)) {
if (e.length < 2 || t.length < 2) return -1;
i = 2, o /= 2, s /= 2, n /= 2;
}
function c(e, t) {
return 1 === i ? e[t] : e.readUInt16BE(t * i);
}
if (r) {
var l = -1;
for (u = n; u < o; u++) if (c(e, u) === c(t, -1 === l ? 0 : u - l)) {
if (-1 === l && (l = u), u - l + 1 === s) return l * i;
} else -1 !== l && (u -= u - l), l = -1;
} else for (n + s > o && (n = o - s), u = n; u >= 0; u--) {
for (var d = !0, p = 0; p < s; p++) if (c(e, u + p) !== c(t, p)) {
d = !1;
break;
}
if (d) return u;
}
return -1;
}
function j(e, t, n, a) {
n = Number(n) || 0;
var r = e.length - n;
a ? (a = Number(a)) > r && (a = r) : a = r;
var i = t.length;
if (i % 2 != 0) throw new TypeError("Invalid hex string");
a > i / 2 && (a = i / 2);
for (var o = 0; o < a; ++o) {
var s = parseInt(t.substr(2 * o, 2), 16);
if (isNaN(s)) return o;
e[n + o] = s;
}
return o;
}
function C(e, t, n, a) {
return ee(Y(t, e.length - n), e, n, a);
}
function E(e, t, n, a) {
return ee(Z(t), e, n, a);
}
function S(e, t, n, a) {
return E(e, t, n, a);
}
function A(e, t, n, a) {
return ee(J(t), e, n, a);
}
function T(e, t, n, a) {
return ee(X(t, e.length - n), e, n, a);
}
function F(e, t, n) {
return 0 === t && n === e.length ? a.fromByteArray(e) : a.fromByteArray(e.slice(t, n));
}
function P(e, t, n) {
n = Math.min(e.length, n);
for (var a = [], r = t; r < n; ) {
var i = e[r], o = null, s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1, u, c, l, d;
if (r + s <= n) switch (s) {
case 1:
i < 128 && (o = i);
break;

case 2:
128 == (192 & (u = e[r + 1])) && (d = (31 & i) << 6 | 63 & u) > 127 && (o = d);
break;

case 3:
u = e[r + 1], c = e[r + 2], 128 == (192 & u) && 128 == (192 & c) && (d = (15 & i) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (d < 55296 || d > 57343) && (o = d);
break;

case 4:
u = e[r + 1], c = e[r + 2], l = e[r + 3], 128 == (192 & u) && 128 == (192 & c) && 128 == (192 & l) && (d = (15 & i) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & l) > 65535 && d < 1114112 && (o = d);
}
null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, a.push(o >>> 10 & 1023 | 55296), 
o = 56320 | 1023 & o), a.push(o), r += s;
}
return L(a);
}
t.Buffer = c, t.SlowBuffer = y, t.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : o(), 
t.kMaxLength = s(), c.poolSize = 8192, c._augment = function(e) {
return e.__proto__ = c.prototype, e;
}, c.from = function(e, t, n) {
return l(null, e, t, n);
}, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, 
"undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
value: null,
configurable: !0
})), c.alloc = function(e, t, n) {
return p(null, e, t, n);
}, c.allocUnsafe = function(e) {
return h(null, e);
}, c.allocUnsafeSlow = function(e) {
return h(null, e);
}, c.isBuffer = function e(t) {
return !(null == t || !t._isBuffer);
}, c.compare = function e(t, n) {
if (!c.isBuffer(t) || !c.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
if (t === n) return 0;
for (var a = t.length, r = n.length, i = 0, o = Math.min(a, r); i < o; ++i) if (t[i] !== n[i]) {
a = t[i], r = n[i];
break;
}
return a < r ? -1 : r < a ? 1 : 0;
}, c.isEncoding = function e(t) {
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
}, c.concat = function e(t, n) {
if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === t.length) return c.alloc(0);
var a;
if (void 0 === n) for (n = 0, a = 0; a < t.length; ++a) n += t[a].length;
var r = c.allocUnsafe(n), o = 0;
for (a = 0; a < t.length; ++a) {
var s = t[a];
if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
s.copy(r, o), o += s.length;
}
return r;
}, c.byteLength = v, c.prototype._isBuffer = !0, c.prototype.swap16 = function e() {
var t = this.length;
if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var n = 0; n < t; n += 2) k(this, n, n + 1);
return this;
}, c.prototype.swap32 = function e() {
var t = this.length;
if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var n = 0; n < t; n += 4) k(this, n, n + 3), k(this, n + 1, n + 2);
return this;
}, c.prototype.swap64 = function e() {
var t = this.length;
if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var n = 0; n < t; n += 8) k(this, n, n + 7), k(this, n + 1, n + 6), k(this, n + 2, n + 5), 
k(this, n + 3, n + 4);
return this;
}, c.prototype.toString = function e() {
var t = 0 | this.length;
return 0 === t ? "" : 0 === arguments.length ? P(this, 0, t) : w.apply(this, arguments);
}, c.prototype.equals = function e(t) {
if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
return this === t || 0 === c.compare(this, t);
}, c.prototype.inspect = function e() {
var n = "", a = t.INSPECT_MAX_BYTES;
return this.length > 0 && (n = this.toString("hex", 0, a).match(/.{2}/g).join(" "), 
this.length > a && (n += " ... ")), "<Buffer " + n + ">";
}, c.prototype.compare = function e(t, n, a, r, i) {
if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
if (void 0 === n && (n = 0), void 0 === a && (a = t ? t.length : 0), void 0 === r && (r = 0), 
void 0 === i && (i = this.length), n < 0 || a > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
if (r >= i && n >= a) return 0;
if (r >= i) return -1;
if (n >= a) return 1;
if (this === t) return 0;
for (var o = (i >>>= 0) - (r >>>= 0), s = (a >>>= 0) - (n >>>= 0), u = Math.min(o, s), l = this.slice(r, i), d = t.slice(n, a), p = 0; p < u; ++p) if (l[p] !== d[p]) {
o = l[p], s = d[p];
break;
}
return o < s ? -1 : s < o ? 1 : 0;
}, c.prototype.includes = function e(t, n, a) {
return -1 !== this.indexOf(t, n, a);
}, c.prototype.indexOf = function e(t, n, a) {
return x(this, t, n, a, !0);
}, c.prototype.lastIndexOf = function e(t, n, a) {
return x(this, t, n, a, !1);
}, c.prototype.write = function e(t, n, a, r) {
if (void 0 === n) r = "utf8", a = this.length, n = 0; else if (void 0 === a && "string" == typeof n) r = n, 
a = this.length, n = 0; else {
if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
n |= 0, isFinite(a) ? (a |= 0, void 0 === r && (r = "utf8")) : (r = a, a = void 0);
}
var i = this.length - n;
if ((void 0 === a || a > i) && (a = i), t.length > 0 && (a < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
r || (r = "utf8");
for (var o = !1; ;) switch (r) {
case "hex":
return j(this, t, n, a);

case "utf8":
case "utf-8":
return C(this, t, n, a);

case "ascii":
return E(this, t, n, a);

case "latin1":
case "binary":
return S(this, t, n, a);

case "base64":
return A(this, t, n, a);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return T(this, t, n, a);

default:
if (o) throw new TypeError("Unknown encoding: " + r);
r = ("" + r).toLowerCase(), o = !0;
}
}, c.prototype.toJSON = function e() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
var I = 4096;
function L(e) {
var t = e.length;
if (t <= I) return String.fromCharCode.apply(String, e);
for (var n = "", a = 0; a < t; ) n += String.fromCharCode.apply(String, e.slice(a, a += I));
return n;
}
function M(e, t, n) {
var a = "";
n = Math.min(e.length, n);
for (var r = t; r < n; ++r) a += String.fromCharCode(127 & e[r]);
return a;
}
function O(e, t, n) {
var a = "";
n = Math.min(e.length, n);
for (var r = t; r < n; ++r) a += String.fromCharCode(e[r]);
return a;
}
function R(e, t, n) {
var a = e.length;
(!t || t < 0) && (t = 0), (!n || n < 0 || n > a) && (n = a);
for (var r = "", i = t; i < n; ++i) r += Q(e[i]);
return r;
}
function z(e, t, n) {
for (var a = e.slice(t, n), r = "", i = 0; i < a.length; i += 2) r += String.fromCharCode(a[i] + 256 * a[i + 1]);
return r;
}
function N(e, t, n) {
if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
}
function B(e, t, n, a, r, i) {
if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (t > r || t < i) throw new RangeError('"value" argument is out of bounds');
if (n + a > e.length) throw new RangeError("Index out of range");
}
function $(e, t, n, a) {
t < 0 && (t = 65535 + t + 1);
for (var r = 0, i = Math.min(e.length - n, 2); r < i; ++r) e[n + r] = (t & 255 << 8 * (a ? r : 1 - r)) >>> 8 * (a ? r : 1 - r);
}
function H(e, t, n, a) {
t < 0 && (t = 4294967295 + t + 1);
for (var r = 0, i = Math.min(e.length - n, 4); r < i; ++r) e[n + r] = t >>> 8 * (a ? r : 3 - r) & 255;
}
function q(e, t, n, a, r, i) {
if (n + a > e.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("Index out of range");
}
function G(e, t, n, a, i) {
return i || q(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), r.write(e, t, n, a, 23, 4), 
n + 4;
}
function U(e, t, n, a, i) {
return i || q(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), r.write(e, t, n, a, 52, 8), 
n + 8;
}
c.prototype.slice = function e(t, n) {
var a = this.length, r;
if ((t = ~~t) < 0 ? (t += a) < 0 && (t = 0) : t > a && (t = a), (n = void 0 === n ? a : ~~n) < 0 ? (n += a) < 0 && (n = 0) : n > a && (n = a), 
n < t && (n = t), c.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, n)).__proto__ = c.prototype; else {
var i = n - t;
r = new c(i, void 0);
for (var o = 0; o < i; ++o) r[o] = this[o + t];
}
return r;
}, c.prototype.readUIntLE = function e(t, n, a) {
t |= 0, n |= 0, a || N(t, n, this.length);
for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256); ) r += this[t + o] * i;
return r;
}, c.prototype.readUIntBE = function e(t, n, a) {
t |= 0, n |= 0, a || N(t, n, this.length);
for (var r = this[t + --n], i = 1; n > 0 && (i *= 256); ) r += this[t + --n] * i;
return r;
}, c.prototype.readUInt8 = function e(t, n) {
return n || N(t, 1, this.length), this[t];
}, c.prototype.readUInt16LE = function e(t, n) {
return n || N(t, 2, this.length), this[t] | this[t + 1] << 8;
}, c.prototype.readUInt16BE = function e(t, n) {
return n || N(t, 2, this.length), this[t] << 8 | this[t + 1];
}, c.prototype.readUInt32LE = function e(t, n) {
return n || N(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
}, c.prototype.readUInt32BE = function e(t, n) {
return n || N(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
}, c.prototype.readIntLE = function e(t, n, a) {
t |= 0, n |= 0, a || N(t, n, this.length);
for (var r = this[t], i = 1, o = 0; ++o < n && (i *= 256); ) r += this[t + o] * i;
return r >= (i *= 128) && (r -= Math.pow(2, 8 * n)), r;
}, c.prototype.readIntBE = function e(t, n, a) {
t |= 0, n |= 0, a || N(t, n, this.length);
for (var r = n, i = 1, o = this[t + --r]; r > 0 && (i *= 256); ) o += this[t + --r] * i;
return o >= (i *= 128) && (o -= Math.pow(2, 8 * n)), o;
}, c.prototype.readInt8 = function e(t, n) {
return n || N(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
}, c.prototype.readInt16LE = function e(t, n) {
n || N(t, 2, this.length);
var a = this[t] | this[t + 1] << 8;
return 32768 & a ? 4294901760 | a : a;
}, c.prototype.readInt16BE = function e(t, n) {
n || N(t, 2, this.length);
var a = this[t + 1] | this[t] << 8;
return 32768 & a ? 4294901760 | a : a;
}, c.prototype.readInt32LE = function e(t, n) {
return n || N(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
}, c.prototype.readInt32BE = function e(t, n) {
return n || N(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
}, c.prototype.readFloatLE = function e(t, n) {
return n || N(t, 4, this.length), r.read(this, t, !0, 23, 4);
}, c.prototype.readFloatBE = function e(t, n) {
return n || N(t, 4, this.length), r.read(this, t, !1, 23, 4);
}, c.prototype.readDoubleLE = function e(t, n) {
return n || N(t, 8, this.length), r.read(this, t, !0, 52, 8);
}, c.prototype.readDoubleBE = function e(t, n) {
return n || N(t, 8, this.length), r.read(this, t, !1, 52, 8);
}, c.prototype.writeUIntLE = function e(t, n, a, r) {
var i;
t = +t, n |= 0, a |= 0, r || B(this, t, n, a, Math.pow(2, 8 * a) - 1, 0);
var o = 1, s = 0;
for (this[n] = 255 & t; ++s < a && (o *= 256); ) this[n + s] = t / o & 255;
return n + a;
}, c.prototype.writeUIntBE = function e(t, n, a, r) {
var i;
t = +t, n |= 0, a |= 0, r || B(this, t, n, a, Math.pow(2, 8 * a) - 1, 0);
var o = a - 1, s = 1;
for (this[n + o] = 255 & t; --o >= 0 && (s *= 256); ) this[n + o] = t / s & 255;
return n + a;
}, c.prototype.writeUInt8 = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
this[n] = 255 & t, n + 1;
}, c.prototype.writeUInt16LE = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, 
this[n + 1] = t >>> 8) : $(this, t, n, !0), n + 2;
}, c.prototype.writeUInt16BE = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, 
this[n + 1] = 255 & t) : $(this, t, n, !1), n + 2;
}, c.prototype.writeUInt32LE = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, 
this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : H(this, t, n, !0), 
n + 4;
}, c.prototype.writeUInt32BE = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, 
this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : H(this, t, n, !1), 
n + 4;
}, c.prototype.writeIntLE = function e(t, n, a, r) {
if (t = +t, n |= 0, !r) {
var i = Math.pow(2, 8 * a - 1);
B(this, t, n, a, i - 1, -i);
}
var o = 0, s = 1, u = 0;
for (this[n] = 255 & t; ++o < a && (s *= 256); ) t < 0 && 0 === u && 0 !== this[n + o - 1] && (u = 1), 
this[n + o] = (t / s >> 0) - u & 255;
return n + a;
}, c.prototype.writeIntBE = function e(t, n, a, r) {
if (t = +t, n |= 0, !r) {
var i = Math.pow(2, 8 * a - 1);
B(this, t, n, a, i - 1, -i);
}
var o = a - 1, s = 1, u = 0;
for (this[n + o] = 255 & t; --o >= 0 && (s *= 256); ) t < 0 && 0 === u && 0 !== this[n + o + 1] && (u = 1), 
this[n + o] = (t / s >> 0) - u & 255;
return n + a;
}, c.prototype.writeInt8 = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
t < 0 && (t = 255 + t + 1), this[n] = 255 & t, n + 1;
}, c.prototype.writeInt16LE = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, 
this[n + 1] = t >>> 8) : $(this, t, n, !0), n + 2;
}, c.prototype.writeInt16BE = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, 
this[n + 1] = 255 & t) : $(this, t, n, !1), n + 2;
}, c.prototype.writeInt32LE = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, 
this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : H(this, t, n, !0), 
n + 4;
}, c.prototype.writeInt32BE = function e(t, n, a) {
return t = +t, n |= 0, a || B(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
c.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, 
this[n + 3] = 255 & t) : H(this, t, n, !1), n + 4;
}, c.prototype.writeFloatLE = function e(t, n, a) {
return G(this, t, n, !0, a);
}, c.prototype.writeFloatBE = function e(t, n, a) {
return G(this, t, n, !1, a);
}, c.prototype.writeDoubleLE = function e(t, n, a) {
return U(this, t, n, !0, a);
}, c.prototype.writeDoubleBE = function e(t, n, a) {
return U(this, t, n, !1, a);
}, c.prototype.copy = function e(t, n, a, r) {
if (a || (a = 0), r || 0 === r || (r = this.length), n >= t.length && (n = t.length), 
n || (n = 0), r > 0 && r < a && (r = a), r === a) return 0;
if (0 === t.length || 0 === this.length) return 0;
if (n < 0) throw new RangeError("targetStart out of bounds");
if (a < 0 || a >= this.length) throw new RangeError("sourceStart out of bounds");
if (r < 0) throw new RangeError("sourceEnd out of bounds");
r > this.length && (r = this.length), t.length - n < r - a && (r = t.length - n + a);
var i = r - a, o;
if (this === t && a < n && n < r) for (o = i - 1; o >= 0; --o) t[o + n] = this[o + a]; else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + n] = this[o + a]; else Uint8Array.prototype.set.call(t, this.subarray(a, a + i), n);
return i;
}, c.prototype.fill = function e(t, n, a, r) {
if ("string" == typeof t) {
if ("string" == typeof n ? (r = n, n = 0, a = this.length) : "string" == typeof a && (r = a, 
a = this.length), 1 === t.length) {
var i = t.charCodeAt(0);
i < 256 && (t = i);
}
if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
} else "number" == typeof t && (t &= 255);
if (n < 0 || this.length < n || this.length < a) throw new RangeError("Out of range index");
if (a <= n) return this;
var o;
if (n >>>= 0, a = void 0 === a ? this.length : a >>> 0, t || (t = 0), "number" == typeof t) for (o = n; o < a; ++o) this[o] = t; else {
var s = c.isBuffer(t) ? t : Y(new c(t, r).toString()), u = s.length;
for (o = 0; o < a - n; ++o) this[o + n] = s[o % u];
}
return this;
};
var V = /[^+\/0-9A-Za-z-_]/g;
function W(e) {
if ((e = K(e).replace(V, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function K(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Q(e) {
return e < 16 ? "0" + e.toString(16) : e.toString(16);
}
function Y(e, t) {
var n;
t = t || Infinity;
for (var a = e.length, r = null, i = [], o = 0; o < a; ++o) {
if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
if (!r) {
if (n > 56319) {
(t -= 3) > -1 && i.push(239, 191, 189);
continue;
}
if (o + 1 === a) {
(t -= 3) > -1 && i.push(239, 191, 189);
continue;
}
r = n;
continue;
}
if (n < 56320) {
(t -= 3) > -1 && i.push(239, 191, 189), r = n;
continue;
}
n = 65536 + (r - 55296 << 10 | n - 56320);
} else r && (t -= 3) > -1 && i.push(239, 191, 189);
if (r = null, n < 128) {
if ((t -= 1) < 0) break;
i.push(n);
} else if (n < 2048) {
if ((t -= 2) < 0) break;
i.push(n >> 6 | 192, 63 & n | 128);
} else if (n < 65536) {
if ((t -= 3) < 0) break;
i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
} else {
if (!(n < 1114112)) throw new Error("Invalid code point");
if ((t -= 4) < 0) break;
i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
}
}
return i;
}
function Z(e) {
for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
return t;
}
function X(e, t) {
for (var n, a, r, i = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) a = (n = e.charCodeAt(o)) >> 8, 
r = n % 256, i.push(r), i.push(a);
return i;
}
function J(e) {
return a.toByteArray(W(e));
}
function ee(e, t, n, a) {
for (var r = 0; r < a && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
return r;
}
function te(e) {
return e != e;
}
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
t.byteLength = l, t.toByteArray = p, t.fromByteArray = g;
for (var a = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = o.length; s < u; ++s) a[s] = o[s], 
r[o.charCodeAt(s)] = s;
function c(e) {
var t = e.length;
if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var n = e.indexOf("="), a;
return -1 === n && (n = t), [ n, n === t ? 0 : 4 - n % 4 ];
}
function l(e) {
var t = c(e), n = t[0], a = t[1];
return 3 * (n + a) / 4 - a;
}
function d(e, t, n) {
return 3 * (t + n) / 4 - n;
}
function p(e) {
for (var t, n = c(e), a = n[0], o = n[1], s = new i(d(e, a, o)), u = 0, l = o > 0 ? a - 4 : a, p = 0; p < l; p += 4) t = r[e.charCodeAt(p)] << 18 | r[e.charCodeAt(p + 1)] << 12 | r[e.charCodeAt(p + 2)] << 6 | r[e.charCodeAt(p + 3)], 
s[u++] = t >> 16 & 255, s[u++] = t >> 8 & 255, s[u++] = 255 & t;
return 2 === o && (t = r[e.charCodeAt(p)] << 2 | r[e.charCodeAt(p + 1)] >> 4, s[u++] = 255 & t), 
1 === o && (t = r[e.charCodeAt(p)] << 10 | r[e.charCodeAt(p + 1)] << 4 | r[e.charCodeAt(p + 2)] >> 2, 
s[u++] = t >> 8 & 255, s[u++] = 255 & t), s;
}
function h(e) {
return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e];
}
function f(e, t, n) {
for (var a, r = [], i = t; i < n; i += 3) a = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]), 
r.push(h(a));
return r.join("");
}
function g(e) {
for (var t, n = e.length, r = n % 3, i = [], o = 16383, s = 0, u = n - r; s < u; s += 16383) i.push(f(e, s, s + 16383 > u ? u : s + 16383));
return 1 === r ? (t = e[n - 1], i.push(a[t >> 2] + a[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], 
i.push(a[t >> 10] + a[t >> 4 & 63] + a[t << 2 & 63] + "=")), i.join("");
}
r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63;
}, function(e, t) {
t.read = function(e, t, n, a, r) {
var i, o, s = 8 * r - a - 1, u = (1 << s) - 1, c = u >> 1, l = -7, d = n ? r - 1 : 0, p = n ? -1 : 1, h = e[t + d];
for (d += p, i = h & (1 << -l) - 1, h >>= -l, l += s; l > 0; i = 256 * i + e[t + d], 
d += p, l -= 8) ;
for (o = i & (1 << -l) - 1, i >>= -l, l += a; l > 0; o = 256 * o + e[t + d], d += p, 
l -= 8) ;
if (0 === i) i = 1 - c; else {
if (i === u) return o ? NaN : Infinity * (h ? -1 : 1);
o += Math.pow(2, a), i -= c;
}
return (h ? -1 : 1) * o * Math.pow(2, i - a);
}, t.write = function(e, t, n, a, r, i) {
var o, s, u, c = 8 * i - r - 1, l = (1 << c) - 1, d = l >> 1, p = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = a ? 0 : i - 1, f = a ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
for (t = Math.abs(t), isNaN(t) || Infinity === t ? (s = isNaN(t) ? 1 : 0, o = l) : (o = Math.floor(Math.log(t) / Math.LN2), 
t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (t += o + d >= 1 ? p / u : p * Math.pow(2, 1 - d)) * u >= 2 && (o++, 
u /= 2), o + d >= l ? (s = 0, o = l) : o + d >= 1 ? (s = (t * u - 1) * Math.pow(2, r), 
o += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, r), o = 0)); r >= 8; e[n + h] = 255 & s, 
h += f, s /= 256, r -= 8) ;
for (o = o << r | s, c += r; c > 0; e[n + h] = 255 & o, h += f, o /= 256, c -= 8) ;
e[n + h - f] |= 128 * g;
};
}, function(e, t) {
var n = {}.toString;
e.exports = Array.isArray || function(e) {
return "[object Array]" == n.call(e);
};
}, function(e, t, n) {
var a;
!function(r) {
"use strict";
var i = 20, o = 1, s = 1e6, u = 1e6, c = -7, l = 21, d = {}, p = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, h;
function f() {
function e(t) {
var n = this;
if (!(n instanceof e)) return void 0 === t ? f() : new e(t);
t instanceof e ? (n.s = t.s, n.e = t.e, n.c = t.c.slice()) : m(n, t), n.constructor = e;
}
return e.prototype = d, e.DP = i, e.RM = o, e.E_NEG = c, e.E_POS = l, e;
}
function g(e, t, n) {
var a = e.constructor, r = t - (e = new a(e)).e, i = e.c;
for (i.length > ++t && _(e, r, a.RM), i[0] ? n ? r = t : (i = e.c, r = e.e + r + 1) : ++r; i.length < r; i.push(0)) ;
return r = e.e, 1 === n || n && (t <= r || r <= a.E_NEG) ? (e.s < 0 && i[0] ? "-" : "") + (i.length > 1 ? i[0] + "." + i.join("").slice(1) : i[0]) + (r < 0 ? "e" : "e+") + r : e.toString();
}
function m(e, t) {
var n, a, r;
for (0 === t && 1 / t < 0 ? t = "-0" : p.test(t += "") || b(NaN), e.s = "-" == t.charAt(0) ? (t = t.slice(1), 
-1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (a = t.search(/e/i)) > 0 ? (n < 0 && (n = a), 
n += +t.slice(a + 1), t = t.substring(0, a)) : n < 0 && (n = t.length), r = t.length, 
a = 0; a < r && "0" == t.charAt(a); a++) ;
if (a == r) e.c = [ e.e = 0 ]; else {
for (;r > 0 && "0" == t.charAt(--r); ) ;
for (e.e = n - a - 1, e.c = []; a <= r; e.c.push(+t.charAt(a++))) ;
}
return e;
}
function _(e, t, n, a) {
var r, i = e.c, o = e.e + t + 1;
if (1 === n ? a = i[o] >= 5 : 2 === n ? a = i[o] > 5 || 5 == i[o] && (a || o < 0 || i[o + 1] !== r || 1 & i[o - 1]) : 3 === n ? a = a || i[o] !== r || o < 0 : (a = !1, 
0 !== n && b("!Big.RM!")), o < 1 || !i[0]) a ? (e.e = -t, e.c = [ 1 ]) : e.c = [ e.e = 0 ]; else {
if (i.length = o--, a) for (;++i[o] > 9; ) i[o] = 0, o-- || (++e.e, i.unshift(1));
for (o = i.length; !i[--o]; i.pop()) ;
}
return e;
}
function b(e) {
var t = new Error(e);
throw t.name = "BigError", t;
}
d.abs = function() {
var e = new this.constructor(this);
return e.s = 1, e;
}, d.cmp = function(e) {
var t, n = this, a = n.c, r = (e = new n.constructor(e)).c, i = n.s, o = e.s, s = n.e, u = e.e;
if (!a[0] || !r[0]) return a[0] ? i : r[0] ? -o : 0;
if (i != o) return i;
if (t = i < 0, s != u) return s > u ^ t ? 1 : -1;
for (i = -1, o = (s = a.length) < (u = r.length) ? s : u; ++i < o; ) if (a[i] != r[i]) return a[i] > r[i] ^ t ? 1 : -1;
return s == u ? 0 : s > u ^ t ? 1 : -1;
}, d.div = function(e) {
var t = this, n = t.constructor, a = t.c, r = (e = new n(e)).c, i = t.s == e.s ? 1 : -1, o = n.DP;
if ((o !== ~~o || o < 0 || o > 1e6) && b("!Big.DP!"), !a[0] || !r[0]) return a[0] == r[0] && b(NaN), 
r[0] || b(i / 0), new n(0 * i);
var s, u, c, l, d, p, h = r.slice(), f = s = r.length, g = a.length, m = a.slice(0, s), y = m.length, v = e, w = v.c = [], k = 0, x = o + (v.e = t.e - e.e) + 1;
for (v.s = i, i = x < 0 ? 0 : x, h.unshift(0); y++ < s; m.push(0)) ;
do {
for (c = 0; c < 10; c++) {
if (s != (y = m.length)) l = s > y ? 1 : -1; else for (d = -1, l = 0; ++d < s; ) if (r[d] != m[d]) {
l = r[d] > m[d] ? 1 : -1;
break;
}
if (!(l < 0)) break;
for (u = y == s ? r : h; y; ) {
if (m[--y] < u[y]) {
for (d = y; d && !m[--d]; m[d] = 9) ;
--m[d], m[y] += 10;
}
m[y] -= u[y];
}
for (;!m[0]; m.shift()) ;
}
w[k++] = l ? c : ++c, m[0] && l ? m[y] = a[f] || 0 : m = [ a[f] ];
} while ((f++ < g || m[0] !== p) && i--);
return w[0] || 1 == k || (w.shift(), v.e--), k > x && _(v, o, n.RM, m[0] !== p), 
v;
}, d.eq = function(e) {
return !this.cmp(e);
}, d.gt = function(e) {
return this.cmp(e) > 0;
}, d.gte = function(e) {
return this.cmp(e) > -1;
}, d.lt = function(e) {
return this.cmp(e) < 0;
}, d.lte = function(e) {
return this.cmp(e) < 1;
}, d.sub = d.minus = function(e) {
var t, n, a, r, i = this, o = i.constructor, s = i.s, u = (e = new o(e)).s;
if (s != u) return e.s = -u, i.plus(e);
var c = i.c.slice(), l = i.e, d = e.c, p = e.e;
if (!c[0] || !d[0]) return d[0] ? (e.s = -u, e) : new o(c[0] ? i : 0);
if (s = l - p) {
for ((r = s < 0) ? (s = -s, a = c) : (p = l, a = d), a.reverse(), u = s; u--; a.push(0)) ;
a.reverse();
} else for (n = ((r = c.length < d.length) ? c : d).length, s = u = 0; u < n; u++) if (c[u] != d[u]) {
r = c[u] < d[u];
break;
}
if (r && (a = c, c = d, d = a, e.s = -e.s), (u = (n = d.length) - (t = c.length)) > 0) for (;u--; c[t++] = 0) ;
for (u = t; n > s; ) {
if (c[--n] < d[n]) {
for (t = n; t && !c[--t]; c[t] = 9) ;
--c[t], c[n] += 10;
}
c[n] -= d[n];
}
for (;0 === c[--u]; c.pop()) ;
for (;0 === c[0]; ) c.shift(), --p;
return c[0] || (e.s = 1, c = [ p = 0 ]), e.c = c, e.e = p, e;
}, d.mod = function(e) {
var t, n = this, a = n.constructor, r = n.s, i = (e = new a(e)).s;
return e.c[0] || b(NaN), n.s = e.s = 1, t = 1 == e.cmp(n), n.s = r, e.s = i, t ? new a(n) : (r = a.DP, 
i = a.RM, a.DP = a.RM = 0, n = n.div(e), a.DP = r, a.RM = i, this.minus(n.times(e)));
}, d.add = d.plus = function(e) {
var t, n = this, a = n.constructor, r = n.s, i = (e = new a(e)).s;
if (r != i) return e.s = -i, n.minus(e);
var o = n.e, s = n.c, u = e.e, c = e.c;
if (!s[0] || !c[0]) return c[0] ? e : new a(s[0] ? n : 0 * r);
if (s = s.slice(), r = o - u) {
for (r > 0 ? (u = o, t = c) : (r = -r, t = s), t.reverse(); r--; t.push(0)) ;
t.reverse();
}
for (s.length - c.length < 0 && (t = c, c = s, s = t), r = c.length, i = 0; r; ) i = (s[--r] = s[r] + c[r] + i) / 10 | 0, 
s[r] %= 10;
for (i && (s.unshift(i), ++u), r = s.length; 0 === s[--r]; s.pop()) ;
return e.c = s, e.e = u, e;
}, d.pow = function(e) {
var t = this, n = new t.constructor(1), a = n, r = e < 0;
for ((e !== ~~e || e < -1e6 || e > 1e6) && b("!pow!"), e = r ? -e : e; 1 & e && (a = a.times(t)), 
e >>= 1; ) t = t.times(t);
return r ? n.div(a) : a;
}, d.round = function(e, t) {
var n = this, a = n.constructor;
return null == e ? e = 0 : (e !== ~~e || e < 0 || e > 1e6) && b("!round!"), _(n = new a(n), e, null == t ? a.RM : t), 
n;
}, d.sqrt = function() {
var e, t, n, a = this, r = a.constructor, i = a.c, o = a.s, s = a.e, u = new r("0.5");
if (!i[0]) return new r(a);
o < 0 && b(NaN), 0 === (o = Math.sqrt(a.toString())) || o === 1 / 0 ? ((e = i.join("")).length + s & 1 || (e += "0"), 
(t = new r(Math.sqrt(e).toString())).e = ((s + 1) / 2 | 0) - (s < 0 || 1 & s)) : t = new r(o.toString()), 
o = t.e + (r.DP += 4);
do {
n = t, t = u.times(n.plus(a.div(n)));
} while (n.c.slice(0, o).join("") !== t.c.slice(0, o).join(""));
return _(t, r.DP -= 4, r.RM), t;
}, d.mul = d.times = function(e) {
var t, n = this, a = n.constructor, r = n.c, i = (e = new a(e)).c, o = r.length, s = i.length, u = n.e, c = e.e;
if (e.s = n.s == e.s ? 1 : -1, !r[0] || !i[0]) return new a(0 * e.s);
for (e.e = u + c, o < s && (t = r, r = i, i = t, c = o, o = s, s = c), t = new Array(c = o + s); c--; t[c] = 0) ;
for (u = s; u--; ) {
for (s = 0, c = o + u; c > u; ) s = t[c] + i[u] * r[c - u - 1] + s, t[c--] = s % 10, 
s = s / 10 | 0;
t[c] = (t[c] + s) % 10;
}
for (s && ++e.e, t[0] || t.shift(), u = t.length; !t[--u]; t.pop()) ;
return e.c = t, e;
}, d.toString = d.valueOf = d.toJSON = function() {
var e = this, t = e.constructor, n = e.e, a = e.c.join(""), r = a.length;
if (n <= t.E_NEG || n >= t.E_POS) a = a.charAt(0) + (r > 1 ? "." + a.slice(1) : "") + (n < 0 ? "e" : "e+") + n; else if (n < 0) {
for (;++n; a = "0" + a) ;
a = "0." + a;
} else if (n > 0) if (++n > r) for (n -= r; n--; a += "0") ; else n < r && (a = a.slice(0, n) + "." + a.slice(n)); else r > 1 && (a = a.charAt(0) + "." + a.slice(1));
return e.s < 0 && e.c[0] ? "-" + a : a;
}, d.toExponential = function(e) {
return null == e ? e = this.c.length - 1 : (e !== ~~e || e < 0 || e > 1e6) && b("!toExp!"), 
g(this, e, 1);
}, d.toFixed = function(e) {
var t, n = this, a = n.constructor, r = a.E_NEG, i = a.E_POS;
return a.E_NEG = -(a.E_POS = 1 / 0), null == e ? t = n.toString() : e === ~~e && e >= 0 && e <= 1e6 && (t = g(n, n.e + e), 
n.s < 0 && n.c[0] && t.indexOf("-") < 0 && (t = "-" + t)), a.E_NEG = r, a.E_POS = i, 
t || b("!toFix!"), t;
}, d.toPrecision = function(e) {
return null == e ? this.toString() : ((e !== ~~e || e < 1 || e > 1e6) && b("!toPre!"), 
g(this, e - 1, 2));
}, h = f(), void 0 === (a = function() {
return h;
}.call(t, n, t, e)) || (e.exports = a);
}(this);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(227);
t.list_range_raw = [ [ 9450, [ 9312, 9332 ], [ 12881, 12896 ], [ 12977, 12992 ] ], [ 9471, [ 10102, 10112 ], [ 9451, 9461 ] ], [ [ 10102, 10112 ], [ 9451, 9461 ] ], [ [ 10122, 10132 ], [ 9451, 9461 ] ], [ [ 9461, 9471 ] ], [ [ 10112, 10122 ] ] ], 
t.list_range = a.listRawToRange(t.list_range_raw), t.default = t.list_range;
}, function(e, t, n) {
"use strict";
function a(e) {
return e.reduce(function(e, t) {
let n = t.reduce(function(e, t) {
let n;
if ("number" == typeof t) n = String.fromCharCode(t); else if ("string" == typeof t) n = t; else {
if (!Array.isArray(t)) throw new TypeError();
if (2 != t.length) throw new TypeError();
n = new Array(t[1] - t[0]).fill(0).map(function(e, n, a) {
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
}), t.listRawToRange = a, t.default = t;
}, function(e, t, n) {
"use strict";
function a(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), a(n(229));
const r = n(115), i = n(230);
t.getNativeFlags = i.getNativeFlags, t.stripNonNativeFlags = i.stripNonNativeFlags, 
t.isNativeFlags = i.isNativeFlags, t.prototypeToFlags = i.prototypeToFlags, t.prototypeToFlagsArray = i.prototypeToFlagsArray;
const o = n(231);
t.parseRegularExpressionString = o.parseRegularExpressionString, t.nativeFlags = r.default.nativeFlags, 
t.default = t;
}, function(e, t, n) {
"use strict";
function a(e, t) {
let n = e.toString(16).padStart(4, "0");
return t ? n.toUpperCase() : n;
}
function r(e, t, n) {
let a;
if ("string" == typeof e && (e = (a = e).codePointAt(0)), e > 65535 && t) {
let t;
return (t = "string" != typeof a ? u(e) : [ a.charCodeAt(0), a.charCodeAt(1) ]).map(function(e) {
return i(e, n);
}).join("");
}
return i(e, n);
}
function i(e, t) {
let n = a(e);
return t || n.length > 4 ? `\\u{${n}}` : `\\u${n}`;
}
function o(e) {
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
function c(e, t) {
const n = t ? /u\{([0-9a-fA-F]{1,8})\}/g : /\\u\{([0-9a-fA-F]{1,8})\}/g;
return e.replace(n, function(e, t) {
return String.fromCodePoint(parseInt(t, 16));
});
}
function l(e, t, n, a, i = /./gu) {
return e.replace(i, function(e, i) {
let o = r(e, n, !a);
return t ? o.replace(/\\/, "") : o;
});
}
function d(e) {
return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.REGEXP_TO_STRING_TAG = Object.prototype.toString.call(/a/), t.toHex = a, t.toUnicode = r, 
t._toUnicode = i, t.isDoubleUnicode = o, t.isRegExp = s, t.surrogatePair = u, t.unicodeUnEscape = c, 
t.unicodeEscape = l, t.escapeRegExp = d, t.default = t, Object.freeze(t);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(115);
function r(e) {
let t;
if (e instanceof RegExp && (e = s(e)), "string" != typeof e) throw new TypeError("target must is RegExp or String");
return t = i(e);
}
function i(e) {
return e.replace(t.RE_NON_NATIVE_FLAGS, "");
}
function o(e) {
return "" === e || !t.RE_NON_NATIVE_FLAGS.test(e);
}
function s(e) {
return t.hasFlagsProp ? e.flags : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(e))[1];
}
function u(e, t = a.FlagsName) {
return Object.keys(t).reduce(function(n, a) {
return !0 === e[a] && a in t && -1 === n.indexOf(t[a]) && n.push(t[a]), n;
}, []).sort();
}
function c(e, t = a.FlagsName) {
return u(e, t).join("");
}
t.RE_NATIVE_FLAGS = new RegExp(`[${a.default.nativeFlags}]`, "g"), t.RE_NON_NATIVE_FLAGS = new RegExp(`[^${a.default.nativeFlags}]`, "g"), 
t.hasFlagsProp = a.default.prototype.flags, t.getNativeFlags = r, t.stripNonNativeFlags = i, 
t.isNativeFlags = o, t._getNativeFlags = s, t.prototypeToFlagsArray = u, t.prototypeToFlags = c, 
t.default = t;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(115);
function r(e, t = {}) {
let n = i(t).exec(e);
if (n) {
let [t, a, r, i] = n;
return {
source: void 0 !== r ? r : "",
flags: void 0 !== i ? i : "",
slash: a,
input: e
};
}
if (t.throwError) throw new TypeError(`${e} not a regex like string`);
return null;
}
function i(e = {}) {
return new RegExp(`^(${e.allowNonNativeSlash ? "[\\/#$%]" : "\\/"})(..*)\\1([${e.allowNonNativeFlags ? "a-zA-Z" : a.default.nativeFlags}]*)$`);
}
t.parseRegularExpressionString = r, t.rRegularExpressionString = i, t.default = r;
}, function(e) {
e.exports = {
name: "regexp-cjk",
version: "3.2.0",
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
coverage: "npx nyc npm run test",
"local-link": "npm link cjk-conv",
ncu: "npx npm-check-updates -u",
prepublishOnly: "npx npm-check-updates -u --packageFile ./package.json",
postpublish: "echo postpublish && node ./script/publish-after",
"sort-package-json": "npx sort-package-json ./package.json",
test: 'echo "Error: no test specified" && exit 1'
},
dependencies: {
"array-hyper-unique": "^1.0.7",
"cjk-conv": "^1.1.46",
"regexp-helper": "^1.0.8",
"regexp-parser-event": "^1.1.0",
"regexp-parser-literal": "^1.1.0",
"regexp-range": "^1.0.7",
"regexp-support": "^1.0.24"
},
devDependencies: {
"@types/node": "^12",
"cross-spawn-extra": "^1.0.5",
"git-root2": "^1.0.5"
}
};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.tag = [ "#906", "#66F", "#800", "#C60", "#EAEA00", "#006", "#360" ], t.default = t;
}, function(e, t) {
e.exports.makeJQueryPlugin = function(e, t, n) {
var a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, i = [ {
re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse: function(e) {
return [ e[1], e[2], e[3], e[4] ];
}
}, {
re: /rgba?\(\s*((?:\d+(?:\.\d+)?)|(?:\.\d+))\%\s*,\s*((?:\d+(?:\.\d+)?)|(?:\.\d+))\%\s*,\s*((?:\d+(?:\.\d+)?)|(?:\.\d+))\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse: function(e) {
return [ 2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4] ];
}
}, {
re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
parse: function(e) {
return [ parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16) ];
}
}, {
re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
parse: function(e) {
return [ parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16) ];
}
}, {
re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
space: "hsla",
parse: function(e) {
return [ e[1], e[2] / 100, e[3] / 100, e[4] ];
}
}, {
re: /hsva?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
space: "hsva",
parse: function(e) {
return [ e[1], e[2] / 100, e[3] / 100, e[4] ];
}
} ], o = e.Color = function(t, n, a, r) {
return new e.Color.fn.parse(t, n, a, r);
}, s = {
rgba: {
sortorder: 0,
props: {
red: {
idx: 0,
type: "byte"
},
green: {
idx: 1,
type: "byte"
},
blue: {
idx: 2,
type: "byte"
}
}
},
hsla: {
sortorder: 1,
props: {
hue: {
idx: 0,
type: "degrees"
},
saturation: {
idx: 1,
type: "percent"
},
lightness: {
idx: 2,
type: "percent"
}
}
},
hsva: {
sortorder: 2,
props: {
hue: {
idx: 0,
type: "degrees"
},
saturation: {
idx: 1,
type: "percent"
},
brightness: {
idx: 2,
type: "percent"
}
}
}
}, u = {
byte: {
floor: !0,
max: 255
},
percent: {
max: 1
},
degrees: {
mod: 360,
floor: !0
}
}, c = o.support = {}, l = e("<p>")[0], d, p = {}, h = e.each;
function f(e, t, n) {
var a = u[t.type] || {};
return null == e ? n || !t.def ? null : t.def : (e = a.floor ? ~~e : parseFloat(e), 
isNaN(e) ? t.def : a.mod ? (e + a.mod) % a.mod : 0 > e ? 0 : a.max < e ? a.max : e);
}
function g(t) {
var n = o(), a = n._rgba = [];
return t = t.toLowerCase(), h(i, function(e, r) {
var i, o = r.re.exec(t), u = o && r.parse(o), c = r.space || "rgba";
if (u) return i = n[c](u), n[s[c].cache] = i[s[c].cache], a = n._rgba = i._rgba, 
!1;
}), a.length ? ("0,0,0,0" === a.join() && e.extend(a, d.transparent), n) : d[t];
}
l.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = l.style.backgroundColor.indexOf("rgba") > -1, 
h(s, function(e, t) {
t.name = e, t.cache = "_" + e, t.props.alpha = {
idx: 3,
type: "percent",
def: 1
};
}), o.fn = e.extend(o.prototype, {
_cache_: {},
parse: function(t, a, r, i) {
if (this._data_ = this._data_ || {}, t === n) return this._rgba = [ null, null, null, null ], 
this;
(t.jquery || t.nodeType) && (t = e(t).css(a), a = n);
var u = this, c = e.type(t), l = this._rgba = [], p;
if (p = u._data_.spaceName = "rgba", a !== n && ("array" === c || "object" === c) && a in s && (p = u._data_.spaceName = a + "", 
a = n, delete a, !0 !== r)) {
var m = {};
return "array" === c ? h(s[p].props, function(e, n) {
m[e] = f(t[n.idx], n);
}) : "object" === c && h(s[p].props, function(e, n) {
m[e] = f(t[e], n);
}), u.parse(m, p, !0);
}
if (a !== n && (t = [ t, a, r, i ], c = "array"), "string" === c) return this.parse(g(t) || d._default);
if ("array" === c) return h(s.rgba.props, function(e, n) {
l[n.idx] = f(t[n.idx], n);
}), this;
if ("object" === c) {
if (t instanceof o) u.copy(t); else {
var b = {};
_._each(function(e, a) {
var r = a.cache;
b[r] = 0, h(a.props, function(e, a) {
t[e] !== n && b[r]++;
}), b._ = Math.max(b._ || 0, b[r]);
}), _._each(function(n, a) {
var r = a.cache;
"rgba" != n && (b._ > b[r] || !b[r]) || ("rgba" != n && b._++, p = u._data_.spaceName = n + "", 
h(a.props, function(e, n) {
if (!u[r] && a.to) {
if ("alpha" === e || null == t[e]) return;
u[r] = a.to(u._rgba);
}
u[r][n.idx] = f(t[e], n, !0);
}), u[r] && e.inArray(null, u[r].slice(0, 3)) < 0 && (u[r][3] = 1, a.from && (u._rgba = a.from(u[r]))));
});
}
return this._update();
}
},
is: function(e, t) {
var n = o(e), a = !0, r = this;
return t && (n = n.toVaild(), t > 1 && (r = r.toVaild())), _._each(function(e, t) {
var i, o = n[t.cache];
return o && (i = r[t.cache] || t.to && t.to(r._rgba) || [], h(t.props, function(e, t) {
if (null != o[t.idx]) return a = o[t.idx] === i[t.idx];
})), a;
}), a;
},
_space: function() {
var e = [], t = this;
return _._each(function(n, a) {
t[a.cache] && e.push(n);
}), e.pop();
},
spaceName: function() {
return this._data_.spaceName;
},
transition: function(e, t) {
var n = o(e), a = n._space(), r = s[a], i = 0 === this.alpha() ? o("transparent") : this, c = i[r.cache] || r.to(i._rgba), l = c.slice();
return n = n[r.cache], h(r.props, function(e, a) {
var r = a.idx, i = c[r], o = n[r], s = u[a.type] || {};
null !== o && (null === i ? l[r] = o : (s.mod && (o - i > s.mod / 2 ? i += s.mod : i - o > s.mod / 2 && (i -= s.mod)), 
l[r] = f((o - i) * t + i, a)));
}), this[a](l);
},
blend: function(t) {
if (1 === this._rgba[3]) return this;
var n = this._rgba.slice(), a = n.pop(), r = o(t)._rgba;
return o(e.map(n, function(e, t) {
return (1 - a) * r[t] + a * e;
}));
},
toRgbaString: function() {
var t = "rgba(", n = e.map(this._rgba, function(e, t) {
return null == e ? t > 2 ? 1 : 0 : e;
});
return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")";
},
toHslaString: function() {
var t = "hsla(", n = e.map(this.hsla(), function(e, t) {
return null == e && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(100 * e) + "%"), 
e;
});
return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")";
},
toHexString: function(t) {
var n = this._rgba.slice(), a = n.pop();
return t && n.push(~~(255 * a)), "#" + e.map(n, function(e) {
return 1 === (e = (e || 0).toString(16)).length ? "0" + e : e;
}).join("");
},
toString: function(e) {
if (0 === this._rgba[3]) return "transparent";
if (e || this._data_.format) {
var t = (2 == e ? this._space() : this.format()) || this._space();
if (t && "rgba" != t) return this["to" + y(t) + "String"]();
}
return this.toRgbaString();
},
clone: function() {
var e = this._rgba.slice();
return o(e);
},
invert: function(e) {
var t = this._rgba.slice(), n, a;
for (e && (t = this.clone().blend()._rgba.slice()), a = 0; a < 3; a++) t[a] = Math.abs(255 - t[a]);
return o(t);
},
chkBrightness: function(e) {
var t = this._rgba.slice(), n, a;
return e || 0 !== t[3] ? (e && (t = this.clone().blend()._rgba.slice()), 2.99 * t[0] + 5.87 * t[1] + 1.14 * t[2] >= 1275 ? "white" : "black") : null;
},
exec: function(e) {
var t = Array.prototype.slice.call(arguments, 1) || [], a = e.apply(this, t);
return a === n ? this : a;
},
blendBrightness: function(t, n) {
var a = this._rgba.slice(), r = a.pop();
if (n) {
var i = this.clone().blend();
r = (a = i._rgba.slice()).pop();
}
var s = a.slice().sort(function(e, t) {
return t - e;
})[0], u = s;
return (u = u / 255 + 1) < 1.5 && (u = t || 1.9), s * u > 255 && (u = u / 230 + 1.005), 
e.each(a, function(e, t) {
a[e] = u * t;
}), a.push(r), o(a);
},
rand: function(t) {
var n = this._rgba.slice(), a;
for (e.isFunction(t) || (t = Math.random), a = 0; a < 3; a++) n[a] = Math.round(t(a, n[a]) * (1 + n[a]));
return o(n);
},
scale: function(t) {
var n = this._rgba.slice(), a;
return e.isArray(t) || (t = [ t, t, t, 1 ]), n.map(function(e, a) {
n[a] = Math.round(t[a] * e);
}), o(n);
},
contrastColor: function() {
var e = this._rgba[0], t = this._rgba[1], n = this._rgba[2];
return o((299 * e + 587 * t + 144 * n) / 1e3 >= 131.5 ? "black" : "white");
},
toHsvaString: function() {
var t = "hsva(", n = e.map(this.hsva(), function(e, t) {
return null == e && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(100 * e) + "%"), 
e;
});
return 1 === n[3] && (n.pop(), t = "hsv("), t + n.join() + ")";
},
greyscale: function() {
return this.saturation(0);
},
name: function() {
var t = b(o.names);
return p["colors.names.length"] != t && (p["colors.names.length"] = t, p["colors.names"] = {}, 
e.each(o.names, function(e, t) {
p["colors.names"][t] = e;
})), p["colors.names"][this.toHexString()];
},
isVaild: function() {
if (0 === this._rgba[3]) return !0;
var e;
for (e = 0; e < 3; e++) if (null === this._rgba[e] || this._rgba[e] === n) return !1;
return !(2 !== e);
},
vaildSpaceName: function() {
return !(this._space() !== this.spaceName());
},
format: function(t) {
if (t === n) return this._data_.format || o.options.format;
var a = this, r;
if ("function" === e.type(t)) {
var i = t.call(this._data_.format);
i !== n && (t = i);
}
return t && t in s || (t = null), this._data_.format = t, this;
},
_update: function() {
return this._data_ = this._data_ || {}, this._data_.spaceName = this._space(), this;
},
copy: function(t) {
var n = this;
return n._data_ = e.extend({}, t._data_, {}), h(s, function(e, a) {
delete n[a.cache], t[a.cache] && (n[a.cache] = t[a.cache].slice());
}), n._update(), n;
},
toVaild: function(e) {
var t = this, n;
return this.isVaild() ? n = e ? this : o(this) : (n = o(this.toString(2)), e && (n = this.copy(n))), 
n;
}
}), o.fn.parse.prototype = o.fn;
try {
Object.defineProperty(o, "_cache_", {
value: p,
writable: !1,
enumerable: !1,
configurable: !1
});
} catch (e) {
console.log([ e ]);
}
function m(e) {
if (null == e[0] || null == e[1] || null == e[2]) return [ null, null, null, e[3] ];
}
e.extend(o, {
_defaults: {},
options: {}
}), e.extend(o, {
_: {
props: {},
spaces: s
},
rand: function(e) {
return o(e || [ 255, 255, 255, 1 ]).rand();
},
hue2rgb: function(e, t, n) {
return 6 * (n = (n + 1) % 1) < 1 ? e + (t - e) * n * 6 : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e;
},
hsv2hsl: function(e, t, n) {
return [ e, t * n / ((e = (2 - t) * n) < 1 ? e : 2 - e), e / 2 ];
},
hsl2hsv: function(e, t, n) {
return [ e, 2 * (t *= n < .5 ? n : 1 - n) / (n + t), n + t ];
},
hsv2rgb: function(e, t, n) {
var a, r, i;
if (e /= 360, 0 == t) {
var o = Math.round(255 * n);
return [ o, o, o ];
}
var s = 6 * e, u = Math.floor(s), c = n * (1 - t), l = n * (1 - t * (s - u)), d = n * (1 - t * (1 - (s - u)));
return 0 == u ? (a = n, r = d, i = c) : 1 == u ? (a = l, r = n, i = c) : 2 == u ? (a = c, 
r = n, i = d) : 3 == u ? (a = c, r = l, i = n) : 4 == u ? (a = d, r = c, i = n) : (a = n, 
r = c, i = l), [ a = Math.round(255 * a), r = Math.round(255 * r), i = Math.round(255 * i) ];
},
rgb2hsv: function(e, t, n) {
var a = Math.min(e, t, n), r = Math.max(e, t, n), i = r - a, o, s, u = r;
if (u = Math.floor(r / 255 * 100), 0 == r) return [ 0, 0, 0 ];
s = Math.floor(i / r * 100);
var c = 0 == i ? 1 : i;
return o = e == r ? (t - n) / c : t == r ? 2 + (n - e) / c : 4 + (e - t) / c, (o = Math.floor(60 * o)) < 0 && (o += 360), 
[ o, s / 100, u / 100 ];
}
}), s.hsla.to = function(e) {
if (null == e[0] || null == e[1] || null == e[2]) return [ null, null, null, e[3] ];
var t = e[0] / 255, n = e[1] / 255, a = e[2] / 255, r = e[3], i = Math.max(t, n, a), o = Math.min(t, n, a), s = i - o, u = i + o, c = .5 * u, l, d;
return l = o === i ? 0 : t === i ? 60 * (n - a) / s + 360 : n === i ? 60 * (a - t) / s + 120 : 60 * (t - n) / s + 240, 
d = 0 === s ? 0 : c <= .5 ? s / u : s / (2 - u), [ Math.round(l) % 360, d, c, null == r ? 1 : r ];
}, s.hsla.from = function(e) {
if (null == e[0] || null == e[1] || null == e[2]) return [ null, null, null, e[3] ];
var t = e[0] / 360, n = e[1], a = e[2], r = e[3], i = a <= .5 ? a * (1 + n) : a + n - a * n, s = 2 * a - i;
return [ Math.round(255 * o.hue2rgb(s, i, t + 1 / 3)), Math.round(255 * o.hue2rgb(s, i, t)), Math.round(255 * o.hue2rgb(s, i, t - 1 / 3)), r ];
}, s.hsla.fromto = e.extend(s.hsla.fromto, {}, {
hsva: function(e) {
return m(e) ? [ e[0], e[1], null, e[3] ] : o.hsv2hsl.apply(o, e);
}
}), s.hsva.to = function(e) {
var t;
if (t = m(e)) return t;
var n = e[3], a = o.rgb2hsv(e[0], e[1], e[2]);
return a[3] = null == n ? 1 : n, a;
}, s.hsva.from = function(e) {
var t;
if (t = m(e)) return t;
var n = e[0], a = e[1], r = e[2], i = e[3], s = o.hsv2rgb(n, a, r);
return s[3] = null == i ? 1 : i, s;
}, s.hsva.fromto = e.extend(s.hsva.fromto, {}, {
hsla: function(e) {
return m(e) ? [ e[0], e[1], null, e[3] ] : o.hsl2hsv.apply(o, e);
}
});
var _ = [];
function b(e) {
var t = 0, n;
for (n in e) e.hasOwnProperty(n) && t++;
return t;
}
function y(e) {
var t;
return (e += "").charAt(0).toUpperCase() + e.substr(1);
}
return _.__proto__._each = function(e) {
return this.forEach(function(t, n, a) {
return e(t.name, t);
});
}, h(s, function(e, t) {
t.name = e, _.push(s[e]);
}), _.sort(function(e, t) {
return e.sortorder = null === e.sortorder || e.sortorder === n ? 99 : e.sortorder, 
t.sortorder = null === t.sortorder || t.sortorder === n ? 99 : t.sortorder, e.sortorder == t.sortorder ? e.name > t.name : e.sortorder > t.sortorder;
}), p["spaces.order"] = _, _._each(function(e, t) {
var n = t.props;
h(n, function(t, n) {
o._.props[t] = o._.props[t] || {}, o._.props[t][e] = n.idx;
});
}), _._each(function(t, a) {
var i = a.props, u = a.cache, c = a.to, l = a.from;
o.fn[t] = function(t) {
if (c && !this[u] && (this[u] = c(this._rgba)), t === n) return this[u].slice();
var a, r = e.type(t), s = "array" === r || "object" === r ? t : arguments, d = this[u].slice();
return h(i, function(e, t) {
var n = s["object" === r ? e : t.idx];
null == n && (n = d[t.idx]), d[t.idx] = f(n, t);
}), l ? ((a = o(l(d)))[u] = d, a) : o(d);
}, h(i, function(n, a) {
o.fn[n] || (o.fn[n] = function(i) {
var u = this, c, l, d, p, f, g;
l = u._space(), h(o._.props[n], function(e) {
var t = s[e].cache;
u[t] && (d = c, c = e, g = s[e].props[n]);
}), g = g || a, c = c || t;
var m = e.type(i), _;
return f = c != l && s[c].fromto && s[c].fromto[l] ? (p = s[c].fromto[l](this[l]()))[g.idx] : (p = this[c]())[g.idx], 
"undefined" === m ? f : ("function" === m && (i = i.call(this, f), m = e.type(i)), 
null == i && g.empty ? this : ("string" === m && (_ = r.exec(i)) && (i = f + parseFloat(_[2]) * ("+" === _[1] ? 1 : -1)), 
p[g.idx] = i, this[c](p)));
});
});
}), o.hook = function(t) {
var n = t.split(" ");
h(n, function(t, n) {
e.cssHooks[n] = {
set: function(t, a) {
var r, i, s = "";
if ("transparent" !== a && ("string" !== e.type(a) || (r = g(a)))) {
if (a = o(r || a), !c.rgba && 1 !== a._rgba[3]) {
for (i = "backgroundColor" === n ? t.parentNode : t; ("" === s || "transparent" === s) && i && i.style; ) try {
s = e.css(i, "backgroundColor"), i = i.parentNode;
} catch (e) {}
a = a.blend(s && "transparent" !== s ? s : "_default");
}
a = a.toRgbaString();
}
try {
t.style[n] = a;
} catch (e) {}
return a;
}
}, e.fx.step[n] = function(t) {
t.colorInit || (t.start = o(t.elem, n), t.end = o(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos));
};
});
}, o.hook(a), e.cssHooks.borderColor = {
expand: function(e) {
var t = {};
return h([ "Top", "Right", "Bottom", "Left" ], function(n, a) {
t["border" + a + "Color"] = e;
}), t;
}
}, d = e.Color.names = {
aqua: "#00ffff",
black: "#000000",
blue: "#0000ff",
fuchsia: "#ff00ff",
gray: "#808080",
green: "#008000",
lime: "#00ff00",
maroon: "#800000",
navy: "#000080",
olive: "#808000",
purple: "#800080",
red: "#ff0000",
silver: "#c0c0c0",
teal: "#008080",
white: "#ffffff",
yellow: "#ffff00",
transparent: [ null, null, null, 0 ],
_default: "#ffffff"
}, o;
};
}, function(e, t, n) {
"use strict";
var a = n(236), r = n(239), i = n(241), o = n(242), s = /^(:?\/\/|https?:\/\/)?([^\/]*@)?(.+?)(:\d{2,5})?([\/?].*)?$/, u = /\./g, c = [];
function l(e, t) {
if (t.customTlds) {
var n = e.match(t.customTlds);
if (null !== n) return n[0];
}
var i = (t.privateTlds ? [ r ] : c).concat(a), s = !0, u = !1, l = void 0;
try {
for (var d = i[Symbol.iterator](), p; !(s = (p = d.next()).done); s = !0) {
var h = p.value, f = o(h, e);
if (null !== f) return "." + f;
}
} catch (e) {
u = !0, l = e;
} finally {
try {
s || null == d.return || d.return();
} finally {
if (u) throw l;
}
}
return null;
}
function d(e, t) {
var n = i.url(e), a = null, r, o;
if (null === n) return null;
var c = i.options(t), d;
return null === (a = l(o = (r = n.match(s))[3], c)) ? null : (r = o.slice(0, -a.length).split(u), 
"." === a.charAt(0) && (a = a.slice(1)), {
tld: a,
domain: o = r.pop(),
subdomain: r.join(".")
});
}
e.exports = d;
}, function(e, t, n) {
"use strict";
const a = n(144);
e.exports = a(n(238).trie);
}, function(e, t, n) {
"use strict";
e.exports = {
UP: "<",
SAME: ",",
DOWN: ">",
RESET: "|"
};
}, function(e) {
e.exports = {
updatedAt: "2019-05-20T02:21:50.009Z",
trie: "aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac>com,edu,gov,mil,net,org|academy|accenture|accountant|accountants|aco|actor|ad>nom|adac|ads|adult|ae>ac,co,gov,mil,net,org,sch|aeg|aero>accident-investigation,accident-prevention,aerobatic,aeroclub,aerodrome,agents,air-surveillance,air-traffic-control,aircraft,airline,airport,airtraffic,ambulance,amusement,association,author,ballooning,broker,caa,cargo,catering,certification,championship,charter,civilaviation,club,conference,consultant,consulting,control,council,crew,design,dgca,educator,emergency,engine,engineer,entertainment,equipment,exchange,express,federation,flight,freight,fuel,gliding,government,groundhandling,group,hanggliding,homebuilt,insurance,journal,journalist,leasing,logistics,magazine,maintenance,media,microlight,modelling,navigation,parachuting,paragliding,passenger-association,pilot,press,production,recreation,repbody,res,research,rotorcraft,safety,scientist,services,show,skydiving,software,student,trader,trading,trainer,union,workinggroup,works|aetna|af>com,edu,gov,net,org|afamilycompany|afl|africa|ag>co,com,net,nom,org|agakhan|agency|ai>com,net,off,org|aig|aigo|airbus|airforce|airtel|akdn|al>com,edu,gov,mil,net,org|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am>co,com,commune,net,org|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao>co,ed,gv,it,og,pb|aol|apartments|app|apple|aq|aquarelle|ar>com,edu,gob,gov,int,mil,musica,net,org,tur|arab|aramco|archi|army|arpa>e164,in-addr,ip6,iris,uri,urn|art|arte|as>gov|asda|asia|associates|at>ac,co,gv,or|athleta|attorney|au>act,asn,com,conf,edu>act,nsw,nt,qld,sa,tas,vic,wa<gov>qld,sa,tas,vic,wa<id,info,net,nsw,nt,org,oz,qld,sa,tas,vic,wa|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw>com|aws|ax|axa|az>biz,com,edu,gov,info,int,mil,name,net,org,pp,pro|azure|ba>com,edu,gov,mil,net,org|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb>biz,co,com,edu,gov,info,net,org,store,tv|bbc|bbt|bbva|bcg|bcn|bd>*|be>ac|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf>gov|bg>0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z|bh>com,edu,gov,net,org|bharti|bi>co,com,edu,or,org|bible|bid|bike|bing|bingo|bio|biz|bj>asso,barreau,gouv|black|blackfriday|blockbuster|blog|bloomberg|blue|bm>com,edu,gov,net,org|bms|bmw|bn>com,edu,gov,net,org|bnl|bnpparibas|bo>academia,agro,arte,blog,bolivia,ciencia,com,cooperativa,democracia,deporte,ecologia,economia,edu,empresa,gob,indigena,industria,info,int,medicina,mil,movimiento,musica,natural,net,nombre,noticias,org,patria,plurinacional,politica,profesional,pueblo,revista,salud,tecnologia,tksat,transporte,tv,web,wiki|boats|boehringer|bofa|bom|bond|boo|book|booking|bosch|bostik|boston|bot|boutique|box|br>9guacu,abc,adm,adv,agr,aju,am,anani,aparecida,arq,art,ato,b,barueri,belem,bhz,bio,blog,bmd,boavista,bsb,campinagrande,campinas,caxias,cim,cng,cnt,com,contagem,coop,cri,cuiaba,curitiba,def,ecn,eco,edu,emp,eng,esp,etc,eti,far,feira,flog,floripa,fm,fnd,fortal,fot,foz,fst,g12,ggf,goiania,gov>ac,al,am,ap,ba,ce,df,es,go,ma,mg,ms,mt,pa,pb,pe,pi,pr,rj,rn,ro,rr,rs,sc,se,sp,to<gru,imb,ind,inf,jab,jampa,jdf,joinville,jor,jus,leg,lel,londrina,macapa,maceio,manaus,maringa,mat,med,mil,morena,mp,mus,natal,net,niteroinom>*<not,ntr,odo,ong,org,osasco,palmas,poa,ppg,pro,psc,psi,pvh,qsl,radio,rec,recife,ribeirao,rio,riobranco,riopreto,salvador,sampa,santamaria,santoandre,saobernardo,saogonca,sjc,slg,slz,sorocaba,srv,taxi,teo,the,tmp,trd,tur,tv,udi,vet,vix,vlog,wiki,zlg|bradesco|bridgestone|broadway|broker|brother|brussels|bs>com,edu,gov,net,org|bt>com,edu,gov,net,org|budapest|bugatti|build|builders|business|buy|buzz|bv|bw>co,org|by>com,gov,mil,of|bz>com,edu,gov,net,org|bzh|ca>ab,bc,gc,mb,nb,nf,nl,ns,nt,nu,on,pe,qc,sk,yk|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd>gov|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|charity|chase|chat|cheap|chintai|christmas|chrome|chrysler|church|ci>ac,aéroport,asso,co,com,ed,edu,go,gouv,int,md,net,or,org,presse|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck>!www,*|cl>co,gob,gov,mil|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm>co,com,gov,net|cn>ac,ah,bj,com,cq,edu,fj,gd,gov,gs,gx,gz,ha,hb,he,hi,hk,hl,hn,jl,js,jx,ln,mil,mo,net,nm,nx,org,qh,sc,sd,sh,sn,sx,tj,tw,xj,xz,yn,zj,公司,網絡,网络|co>arts,com,edu,firm,gov,info,int,mil,net,nom,org,rec,web|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr>ac,co,ed,fi,go,or,sa|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu>com,edu,gov,inf,net,org|cuisinella|cv|cw>com,edu,net,org|cx>gov|cy>ac,biz,com,ekloges,gov,ltd,name,net,org,parliament,press,pro,tm|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm>com,edu,gov,net,org|dnp|do>art,com,edu,gob,gov,mil,net,org,sld,web|docs|doctor|dodge|dog|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz>art,asso,com,edu,gov,net,org,pol|earth|eat|ec>com,edu,fin,gob,gov,info,k12,med,mil,net,org,pro|eco|edeka|edu|education|ee>aip,com,edu,fie,gov,lib,med,org,pri,riik|eg>com,edu,eun,gov,mil,name,net,org,sci|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|er>*|ericsson|erni|es>com,edu,gob,nom,org|esq|estate|esurance|et>biz,com,edu,gov,info,name,net,org|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi>aland|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj>*|fk>*|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr>aeroport,asso,avocat,avoues,cci,chambagri,chirurgiens-dentistes,com,experts-comptables,geometre-expert,gouv,greta,huissier-justice,medecin,nom,notaires,pharmacien,port,prd,tm,veterinaire|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge>com,edu,gov,mil,net,org,pvt|gea|gent|genting|george|gf|gg>co,net,org|ggee|gh>com,edu,gov,mil,org|gi>com,edu,gov,ltd,mod,org|gift|gifts|gives|giving|gl>co,com,edu,net,org|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn>ac,com,edu,gov,net,org|godaddy|gold|goldpoint|golf|goo|goodyear|goog|google|gop|got|gov|gp>asso,com,edu,mobi,net,org|gq|gr>com,edu,gov,net,org|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt>com,edu,gob,ind,mil,net,org|gu>com,edu,gov,guam,info,net,org,web|guardian|gucci|guge|guide|guitars|guru|gw|gy>co,com,edu,gov,net,org|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk>com,edu,gov,idv,net,org,个人,個人,公司,政府,敎育,教育,箇人,組織,組织,網絡,網络,组織,组织,网絡,网络|hkt|hm|hn>com,edu,gob,mil,net,org|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr>com,from,iz,name|hsbc|ht>adult,art,asso,com,coop,edu,firm,gouv,info,med,net,org,perso,pol,pro,rel,shop|hu>2000,agrar,bolt,casino,city,co,erotica,erotika,film,forum,games,hotel,info,ingatlan,jogasz,konyvelo,lakas,media,news,org,priv,reklam,sex,shop,sport,suli,szex,tm,tozsde,utazas,video|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id>ac,biz,co,desa,go,mil,my,net,or,ponpes,sch,web|ie>gov|ieee|ifm|ikano|il>ac,co,gov,idf,k12,muni,net,org|im>ac,co>ltd,plc<com,net,org,tt,tv|imamat|imdb|immo|immobilien|in>ac,co,edu,firm,gen,gov,ind,mil,net,nic,org,res|inc|industries|infiniti|info|ing|ink|institute|insurance|insure|int>eu|intel|international|intuit|investments|io>com|ipiranga|iq>com,edu,gov,mil,net,org|ir>ac,co,gov,id,net,org,sch,ايران,ایران|irish|is>com,edu,gov,int,net,org|iselect|ismaili|ist|istanbul|it>abr,abruzzo,ag,agrigento,al,alessandria,alto-adige,altoadige,an,ancona,andria-barletta-trani,andria-trani-barletta,andriabarlettatrani,andriatranibarletta,ao,aosta,aosta-valley,aostavalley,aoste,ap,aq,aquila,ar,arezzo,ascoli-piceno,ascolipiceno,asti,at,av,avellino,ba,balsan,balsan-sudtirol,balsan-südtirol,balsan-suedtirol,bari,barletta-trani-andria,barlettatraniandria,bas,basilicata,belluno,benevento,bergamo,bg,bi,biella,bl,bn,bo,bologna,bolzano,bolzano-altoadige,bozen,bozen-sudtirol,bozen-südtirol,bozen-suedtirol,br,brescia,brindisi,bs,bt,bulsan,bulsan-sudtirol,bulsan-südtirol,bulsan-suedtirol,bz,ca,cagliari,cal,calabria,caltanissetta,cam,campania,campidano-medio,campidanomedio,campobasso,carbonia-iglesias,carboniaiglesias,carrara-massa,carraramassa,caserta,catania,catanzaro,cb,ce,cesena-forli,cesena-forlì,cesenaforli,cesenaforlì,ch,chieti,ci,cl,cn,co,como,cosenza,cr,cremona,crotone,cs,ct,cuneo,cz,dell-ogliastra,dellogliastra,edu,emilia-romagna,emiliaromagna,emr,en,enna,fc,fe,fermo,ferrara,fg,fi,firenze,florence,fm,foggia,forli-cesena,forlì-cesena,forlicesena,forlìcesena,fr,friuli-v-giulia,friuli-ve-giulia,friuli-vegiulia,friuli-venezia-giulia,friuli-veneziagiulia,friuli-vgiulia,friuliv-giulia,friulive-giulia,friulivegiulia,friulivenezia-giulia,friuliveneziagiulia,friulivgiulia,frosinone,fvg,ge,genoa,genova,go,gorizia,gov,gr,grosseto,iglesias-carbonia,iglesiascarbonia,im,imperia,is,isernia,kr,la-spezia,laquila,laspezia,latina,laz,lazio,lc,le,lecce,lecco,li,lig,liguria,livorno,lo,lodi,lom,lombardia,lombardy,lt,lu,lucania,lucca,macerata,mantova,mar,marche,massa-carrara,massacarrara,matera,mb,mc,me,medio-campidano,mediocampidano,messina,mi,milan,milano,mn,mo,modena,mol,molise,monza,monza-brianza,monza-e-della-brianza,monzabrianza,monzaebrianza,monzaedellabrianza,ms,mt,na,naples,napoli,no,novara,nu,nuoro,og,ogliastra,olbia-tempio,olbiatempio,or,oristano,ot,pa,padova,padua,palermo,parma,pavia,pc,pd,pe,perugia,pesaro-urbino,pesarourbino,pescara,pg,pi,piacenza,piedmont,piemonte,pisa,pistoia,pmn,pn,po,pordenone,potenza,pr,prato,pt,pu,pug,puglia,pv,pz,ra,ragusa,ravenna,rc,re,reggio-calabria,reggio-emilia,reggiocalabria,reggioemilia,rg,ri,rieti,rimini,rm,rn,ro,roma,rome,rovigo,sa,salerno,sar,sardegna,sardinia,sassari,savona,si,sic,sicilia,sicily,siena,siracusa,so,sondrio,sp,sr,ss,südtirol,suedtirol,sv,ta,taa,taranto,te,tempio-olbia,tempioolbia,teramo,terni,tn,to,torino,tos,toscana,tp,tr,trani-andria-barletta,trani-barletta-andria,traniandriabarletta,tranibarlettaandria,trapani,trentin-sud-tirol,trentin-süd-tirol,trentin-sudtirol,trentin-südtirol,trentin-sued-tirol,trentin-suedtirol,trentino,trentino-a-adige,trentino-aadige,trentino-alto-adige,trentino-altoadige,trentino-s-tirol,trentino-stirol,trentino-sud-tirol,trentino-süd-tirol,trentino-sudtirol,trentino-südtirol,trentino-sued-tirol,trentino-suedtirol,trentinoa-adige,trentinoaadige,trentinoalto-adige,trentinoaltoadige,trentinos-tirol,trentinostirol,trentinosud-tirol,trentinosüd-tirol,trentinosudtirol,trentinosüdtirol,trentinosued-tirol,trentinosuedtirol,trentinsud-tirol,trentinsüd-tirol,trentinsudtirol,trentinsüdtirol,trentinsued-tirol,trentinsuedtirol,trento,treviso,trieste,ts,turin,tuscany,tv,ud,udine,umb,umbria,urbino-pesaro,urbinopesaro,va,val-d-aosta,val-daosta,vald-aosta,valdaosta,valle-aosta,valle-d-aosta,valle-daosta,valleaosta,valled-aosta,valledaosta,vallee-aoste,vallée-aoste,vallee-d-aoste,vallée-d-aoste,valleeaoste,valléeaoste,valleedaoste,valléedaoste,vao,varese,vb,vc,vda,ve,ven,veneto,venezia,venice,verbania,vercelli,verona,vi,vibo-valentia,vibovalentia,vicenza,viterbo,vr,vs,vt,vv|itau|itv|iveco|jaguar|java|jcb|jcp|je>co,net,org|jeep|jetzt|jewelry|jio|jll|jm>*|jmp|jnj|jo>com,edu,gov,mil,name,net,org,sch|jobs|joburg|jot|joy|jp>ac,ad,aichi>aisai,ama,anjo,asuke,chiryu,chita,fuso,gamagori,handa,hazu,hekinan,higashiura,ichinomiya,inazawa,inuyama,isshiki,iwakura,kanie,kariya,kasugai,kira,kiyosu,komaki,konan,kota,mihama,miyoshi,nishio,nisshin,obu,oguchi,oharu,okazaki,owariasahi,seto,shikatsu,shinshiro,shitara,tahara,takahama,tobishima,toei,togo,tokai,tokoname,toyoake,toyohashi,toyokawa,toyone,toyota,tsushima,yatomi<akita>akita,daisen,fujisato,gojome,hachirogata,happou,higashinaruse,honjo,honjyo,ikawa,kamikoani,kamioka,katagami,kazuno,kitaakita,kosaka,kyowa,misato,mitane,moriyoshi,nikaho,noshiro,odate,oga,ogata,semboku,yokote,yurihonjo<aomori>aomori,gonohe,hachinohe,hashikami,hiranai,hirosaki,itayanagi,kuroishi,misawa,mutsu,nakadomari,noheji,oirase,owani,rokunohe,sannohe,shichinohe,shingo,takko,towada,tsugaru,tsuruta<chiba>abiko,asahi,chonan,chosei,choshi,chuo,funabashi,futtsu,hanamigawa,ichihara,ichikawa,ichinomiya,inzai,isumi,kamagaya,kamogawa,kashiwa,katori,katsuura,kimitsu,kisarazu,kozaki,kujukuri,kyonan,matsudo,midori,mihama,minamiboso,mobara,mutsuzawa,nagara,nagareyama,narashino,narita,noda,oamishirasato,omigawa,onjuku,otaki,sakae,sakura,shimofusa,shirako,shiroi,shisui,sodegaura,sosa,tako,tateyama,togane,tohnosho,tomisato,urayasu,yachimata,yachiyo,yokaichiba,yokoshibahikari,yotsukaido<co,ed,ehime>ainan,honai,ikata,imabari,iyo,kamijima,kihoku,kumakogen,masaki,matsuno,matsuyama,namikata,niihama,ozu,saijo,seiyo,shikokuchuo,tobe,toon,uchiko,uwajima,yawatahama<fukui>echizen,eiheiji,fukui,ikeda,katsuyama,mihama,minamiechizen,obama,ohi,ono,sabae,sakai,takahama,tsuruga,wakasa<fukuoka>ashiya,buzen,chikugo,chikuho,chikujo,chikushino,chikuzen,chuo,dazaifu,fukuchi,hakata,higashi,hirokawa,hisayama,iizuka,inatsuki,kaho,kasuga,kasuya,kawara,keisen,koga,kurate,kurogi,kurume,minami,miyako,miyama,miyawaka,mizumaki,munakata,nakagawa,nakama,nishi,nogata,ogori,okagaki,okawa,oki,omuta,onga,onojo,oto,saigawa,sasaguri,shingu,shinyoshitomi,shonai,soeda,sue,tachiarai,tagawa,takata,toho,toyotsu,tsuiki,ukiha,umi,usui,yamada,yame,yanagawa,yukuhashi<fukushima>aizubange,aizumisato,aizuwakamatsu,asakawa,bandai,date,fukushima,furudono,futaba,hanawa,higashi,hirata,hirono,iitate,inawashiro,ishikawa,iwaki,izumizaki,kagamiishi,kaneyama,kawamata,kitakata,kitashiobara,koori,koriyama,kunimi,miharu,mishima,namie,nango,nishiaizu,nishigo,okuma,omotego,ono,otama,samegawa,shimogo,shirakawa,showa,soma,sukagawa,taishin,tamakawa,tanagura,tenei,yabuki,yamato,yamatsuri,yanaizu,yugawa<gifu>anpachi,ena,gifu,ginan,godo,gujo,hashima,hichiso,hida,higashishirakawa,ibigawa,ikeda,kakamigahara,kani,kasahara,kasamatsu,kawaue,kitagata,mino,minokamo,mitake,mizunami,motosu,nakatsugawa,ogaki,sakahogi,seki,sekigahara,shirakawa,tajimi,takayama,tarui,toki,tomika,wanouchi,yamagata,yaotsu,yoro<go,gr,gunma>annaka,chiyoda,fujioka,higashiagatsuma,isesaki,itakura,kanna,kanra,katashina,kawaba,kiryu,kusatsu,maebashi,meiwa,midori,minakami,naganohara,nakanojo,nanmoku,numata,oizumi,ora,ota,shibukawa,shimonita,shinto,showa,takasaki,takayama,tamamura,tatebayashi,tomioka,tsukiyono,tsumagoi,ueno,yoshioka<hiroshima>asaminami,daiwa,etajima,fuchu,fukuyama,hatsukaichi,higashihiroshima,hongo,jinsekikogen,kaita,kui,kumano,kure,mihara,miyoshi,naka,onomichi,osakikamijima,otake,saka,sera,seranishi,shinichi,shobara,takehara<hokkaido>abashiri,abira,aibetsu,akabira,akkeshi,asahikawa,ashibetsu,ashoro,assabu,atsuma,bibai,biei,bifuka,bihoro,biratori,chippubetsu,chitose,date,ebetsu,embetsu,eniwa,erimo,esan,esashi,fukagawa,fukushima,furano,furubira,haboro,hakodate,hamatonbetsu,hidaka,higashikagura,higashikawa,hiroo,hokuryu,hokuto,honbetsu,horokanai,horonobe,ikeda,imakane,ishikari,iwamizawa,iwanai,kamifurano,kamikawa,kamishihoro,kamisunagawa,kamoenai,kayabe,kembuchi,kikonai,kimobetsu,kitahiroshima,kitami,kiyosato,koshimizu,kunneppu,kuriyama,kuromatsunai,kushiro,kutchan,kyowa,mashike,matsumae,mikasa,minamifurano,mombetsu,moseushi,mukawa,muroran,naie,nakagawa,nakasatsunai,nakatombetsu,nanae,nanporo,nayoro,nemuro,niikappu,niki,nishiokoppe,noboribetsu,numata,obihiro,obira,oketo,okoppe,otaru,otobe,otofuke,otoineppu,oumu,ozora,pippu,rankoshi,rebun,rikubetsu,rishiri,rishirifuji,saroma,sarufutsu,shakotan,shari,shibecha,shibetsu,shikabe,shikaoi,shimamaki,shimizu,shimokawa,shinshinotsu,shintoku,shiranuka,shiraoi,shiriuchi,sobetsu,sunagawa,taiki,takasu,takikawa,takinoue,teshikaga,tobetsu,tohma,tomakomai,tomari,toya,toyako,toyotomi,toyoura,tsubetsu,tsukigata,urakawa,urausu,uryu,utashinai,wakkanai,wassamu,yakumo,yoichi<hyogo>aioi,akashi,ako,amagasaki,aogaki,asago,ashiya,awaji,fukusaki,goshiki,harima,himeji,ichikawa,inagawa,itami,kakogawa,kamigori,kamikawa,kasai,kasuga,kawanishi,miki,minamiawaji,nishinomiya,nishiwaki,ono,sanda,sannan,sasayama,sayo,shingu,shinonsen,shiso,sumoto,taishi,taka,takarazuka,takasago,takino,tamba,tatsuno,toyooka,yabu,yashiro,yoka,yokawa<ibaraki>ami,asahi,bando,chikusei,daigo,fujishiro,hitachi,hitachinaka,hitachiomiya,hitachiota,ibaraki,ina,inashiki,itako,iwama,joso,kamisu,kasama,kashima,kasumigaura,koga,miho,mito,moriya,naka,namegata,oarai,ogawa,omitama,ryugasaki,sakai,sakuragawa,shimodate,shimotsuma,shirosato,sowa,suifu,takahagi,tamatsukuri,tokai,tomobe,tone,toride,tsuchiura,tsukuba,uchihara,ushiku,yachiyo,yamagata,yawara,yuki<ishikawa>anamizu,hakui,hakusan,kaga,kahoku,kanazawa,kawakita,komatsu,nakanoto,nanao,nomi,nonoichi,noto,shika,suzu,tsubata,tsurugi,uchinada,wajima<iwate>fudai,fujisawa,hanamaki,hiraizumi,hirono,ichinohe,ichinoseki,iwaizumi,iwate,joboji,kamaishi,kanegasaki,karumai,kawai,kitakami,kuji,kunohe,kuzumaki,miyako,mizusawa,morioka,ninohe,noda,ofunato,oshu,otsuchi,rikuzentakata,shiwa,shizukuishi,sumita,tanohata,tono,yahaba,yamada<kagawa>ayagawa,higashikagawa,kanonji,kotohira,manno,marugame,mitoyo,naoshima,sanuki,tadotsu,takamatsu,tonosho,uchinomi,utazu,zentsuji<kagoshima>akune,amami,hioki,isa,isen,izumi,kagoshima,kanoya,kawanabe,kinko,kouyama,makurazaki,matsumoto,minamitane,nakatane,nishinoomote,satsumasendai,soo,tarumizu,yusui<kanagawa>aikawa,atsugi,ayase,chigasaki,ebina,fujisawa,hadano,hakone,hiratsuka,isehara,kaisei,kamakura,kiyokawa,matsuda,minamiashigara,miura,nakai,ninomiya,odawara,oi,oiso,sagamihara,samukawa,tsukui,yamakita,yamato,yokosuka,yugawara,zama,zushi<kawasaki>!city,*<kitakyushu>!city,*<kobe>!city,*<kochi>aki,geisei,hidaka,higashitsuno,ino,kagami,kami,kitagawa,kochi,mihara,motoyama,muroto,nahari,nakamura,nankoku,nishitosa,niyodogawa,ochi,okawa,otoyo,otsuki,sakawa,sukumo,susaki,tosa,tosashimizu,toyo,tsuno,umaji,yasuda,yusuhara<kumamoto>amakusa,arao,aso,choyo,gyokuto,kamiamakusa,kikuchi,kumamoto,mashiki,mifune,minamata,minamioguni,nagasu,nishihara,oguni,ozu,sumoto,takamori,uki,uto,yamaga,yamato,yatsushiro<kyoto>ayabe,fukuchiyama,higashiyama,ide,ine,joyo,kameoka,kamo,kita,kizu,kumiyama,kyotamba,kyotanabe,kyotango,maizuru,minami,minamiyamashiro,miyazu,muko,nagaokakyo,nakagyo,nantan,oyamazaki,sakyo,seika,tanabe,uji,ujitawara,wazuka,yamashina,yawata<lg,mie>asahi,inabe,ise,kameyama,kawagoe,kiho,kisosaki,kiwa,komono,kumano,kuwana,matsusaka,meiwa,mihama,minamiise,misugi,miyama,nabari,shima,suzuka,tado,taiki,taki,tamaki,toba,tsu,udono,ureshino,watarai,yokkaichi<miyagi>furukawa,higashimatsushima,ishinomaki,iwanuma,kakuda,kami,kawasaki,marumori,matsushima,minamisanriku,misato,murata,natori,ogawara,ohira,onagawa,osaki,rifu,semine,shibata,shichikashuku,shikama,shiogama,shiroishi,tagajo,taiwa,tome,tomiya,wakuya,watari,yamamoto,zao<miyazaki>aya,ebino,gokase,hyuga,kadogawa,kawaminami,kijo,kitagawa,kitakata,kitaura,kobayashi,kunitomi,kushima,mimata,miyakonojo,miyazaki,morotsuka,nichinan,nishimera,nobeoka,saito,shiiba,shintomi,takaharu,takanabe,takazaki,tsuno<nagano>achi,agematsu,anan,aoki,asahi,azumino,chikuhoku,chikuma,chino,fujimi,hakuba,hara,hiraya,iida,iijima,iiyama,iizuna,ikeda,ikusaka,ina,karuizawa,kawakami,kiso,kisofukushima,kitaaiki,komagane,komoro,matsukawa,matsumoto,miasa,minamiaiki,minamimaki,minamiminowa,minowa,miyada,miyota,mochizuki,nagano,nagawa,nagiso,nakagawa,nakano,nozawaonsen,obuse,ogawa,okaya,omachi,omi,ookuwa,ooshika,otaki,otari,sakae,sakaki,saku,sakuho,shimosuwa,shinanomachi,shiojiri,suwa,suzaka,takagi,takamori,takayama,tateshina,tatsuno,togakushi,togura,tomi,ueda,wada,yamagata,yamanouchi,yasaka,yasuoka<nagasaki>chijiwa,futsu,goto,hasami,hirado,iki,isahaya,kawatana,kuchinotsu,matsuura,nagasaki,obama,omura,oseto,saikai,sasebo,seihi,shimabara,shinkamigoto,togitsu,tsushima,unzen<nagoya>!city,*<nara>ando,gose,heguri,higashiyoshino,ikaruga,ikoma,kamikitayama,kanmaki,kashiba,kashihara,katsuragi,kawai,kawakami,kawanishi,koryo,kurotaki,mitsue,miyake,nara,nosegawa,oji,ouda,oyodo,sakurai,sango,shimoichi,shimokitayama,shinjo,soni,takatori,tawaramoto,tenkawa,tenri,uda,yamatokoriyama,yamatotakada,yamazoe,yoshino<ne,niigata>aga,agano,gosen,itoigawa,izumozaki,joetsu,kamo,kariwa,kashiwazaki,minamiuonuma,mitsuke,muika,murakami,myoko,nagaoka,niigata,ojiya,omi,sado,sanjo,seiro,seirou,sekikawa,shibata,tagami,tainai,tochio,tokamachi,tsubame,tsunan,uonuma,yahiko,yoita,yuzawa<oita>beppu,bungoono,bungotakada,hasama,hiji,himeshima,hita,kamitsue,kokonoe,kuju,kunisaki,kusu,oita,saiki,taketa,tsukumi,usa,usuki,yufu<okayama>akaiwa,asakuchi,bizen,hayashima,ibara,kagamino,kasaoka,kibichuo,kumenan,kurashiki,maniwa,misaki,nagi,niimi,nishiawakura,okayama,satosho,setouchi,shinjo,shoo,soja,takahashi,tamano,tsuyama,wake,yakage<okinawa>aguni,ginowan,ginoza,gushikami,haebaru,higashi,hirara,iheya,ishigaki,ishikawa,itoman,izena,kadena,kin,kitadaito,kitanakagusuku,kumejima,kunigami,minamidaito,motobu,nago,naha,nakagusuku,nakijin,nanjo,nishihara,ogimi,okinawa,onna,shimoji,taketomi,tarama,tokashiki,tomigusuku,tonaki,urasoe,uruma,yaese,yomitan,yonabaru,yonaguni,zamami<or,osaka>abeno,chihayaakasaka,chuo,daito,fujiidera,habikino,hannan,higashiosaka,higashisumiyoshi,higashiyodogawa,hirakata,ibaraki,ikeda,izumi,izumiotsu,izumisano,kadoma,kaizuka,kanan,kashiwara,katano,kawachinagano,kishiwada,kita,kumatori,matsubara,minato,minoh,misaki,moriguchi,neyagawa,nishi,nose,osakasayama,sakai,sayama,sennan,settsu,shijonawate,shimamoto,suita,tadaoka,taishi,tajiri,takaishi,takatsuki,tondabayashi,toyonaka,toyono,yao<saga>ariake,arita,fukudomi,genkai,hamatama,hizen,imari,kamimine,kanzaki,karatsu,kashima,kitagata,kitahata,kiyama,kouhoku,kyuragi,nishiarita,ogi,omachi,ouchi,saga,shiroishi,taku,tara,tosu,yoshinogari<saitama>arakawa,asaka,chichibu,fujimi,fujimino,fukaya,hanno,hanyu,hasuda,hatogaya,hatoyama,hidaka,higashichichibu,higashimatsuyama,honjo,ina,iruma,iwatsuki,kamiizumi,kamikawa,kamisato,kasukabe,kawagoe,kawaguchi,kawajima,kazo,kitamoto,koshigaya,kounosu,kuki,kumagaya,matsubushi,minano,misato,miyashiro,miyoshi,moroyama,nagatoro,namegawa,niiza,ogano,ogawa,ogose,okegawa,omiya,otaki,ranzan,ryokami,saitama,sakado,satte,sayama,shiki,shiraoka,soka,sugito,toda,tokigawa,tokorozawa,tsurugashima,urawa,warabi,yashio,yokoze,yono,yorii,yoshida,yoshikawa,yoshimi<sapporo>!city,*<sendai>!city,*<shiga>aisho,gamo,higashiomi,hikone,koka,konan,kosei,koto,kusatsu,maibara,moriyama,nagahama,nishiazai,notogawa,omihachiman,otsu,ritto,ryuoh,takashima,takatsuki,torahime,toyosato,yasu<shimane>akagi,ama,gotsu,hamada,higashiizumo,hikawa,hikimi,izumo,kakinoki,masuda,matsue,misato,nishinoshima,ohda,okinoshima,okuizumo,shimane,tamayu,tsuwano,unnan,yakumo,yasugi,yatsuka<shizuoka>arai,atami,fuji,fujieda,fujikawa,fujinomiya,fukuroi,gotemba,haibara,hamamatsu,higashiizu,ito,iwata,izu,izunokuni,kakegawa,kannami,kawanehon,kawazu,kikugawa,kosai,makinohara,matsuzaki,minamiizu,mishima,morimachi,nishiizu,numazu,omaezaki,shimada,shimizu,shimoda,shizuoka,susono,yaizu,yoshida<tochigi>ashikaga,bato,haga,ichikai,iwafune,kaminokawa,kanuma,karasuyama,kuroiso,mashiko,mibu,moka,motegi,nasu,nasushiobara,nikko,nishikata,nogi,ohira,ohtawara,oyama,sakura,sano,shimotsuke,shioya,takanezawa,tochigi,tsuga,ujiie,utsunomiya,yaita<tokushima>aizumi,anan,ichiba,itano,kainan,komatsushima,matsushige,mima,minami,miyoshi,mugi,nakagawa,naruto,sanagochi,shishikui,tokushima,wajiki<tokyo>adachi,akiruno,akishima,aogashima,arakawa,bunkyo,chiyoda,chofu,chuo,edogawa,fuchu,fussa,hachijo,hachioji,hamura,higashikurume,higashimurayama,higashiyamato,hino,hinode,hinohara,inagi,itabashi,katsushika,kita,kiyose,kodaira,koganei,kokubunji,komae,koto,kouzushima,kunitachi,machida,meguro,minato,mitaka,mizuho,musashimurayama,musashino,nakano,nerima,ogasawara,okutama,ome,oshima,ota,setagaya,shibuya,shinagawa,shinjuku,suginami,sumida,tachikawa,taito,tama,toshima<tottori>chizu,hino,kawahara,koge,kotoura,misasa,nanbu,nichinan,sakaiminato,tottori,wakasa,yazu,yonago<toyama>asahi,fuchu,fukumitsu,funahashi,himi,imizu,inami,johana,kamiichi,kurobe,nakaniikawa,namerikawa,nanto,nyuzen,oyabe,taira,takaoka,tateyama,toga,tonami,toyama,unazuki,uozu,yamada<wakayama>arida,aridagawa,gobo,hashimoto,hidaka,hirogawa,inami,iwade,kainan,kamitonda,katsuragi,kimino,kinokawa,kitayama,koya,koza,kozagawa,kudoyama,kushimoto,mihama,misato,nachikatsuura,shingu,shirahama,taiji,tanabe,wakayama,yuasa,yura<yamagata>asahi,funagata,higashine,iide,kahoku,kaminoyama,kaneyama,kawanishi,mamurogawa,mikawa,murayama,nagai,nakayama,nanyo,nishikawa,obanazawa,oe,oguni,ohkura,oishida,sagae,sakata,sakegawa,shinjo,shirataka,shonai,takahata,tendo,tozawa,tsuruoka,yamagata,yamanobe,yonezawa,yuza<yamaguchi>abu,hagi,hikari,hofu,iwakuni,kudamatsu,mitou,nagato,oshima,shimonoseki,shunan,tabuse,tokuyama,toyota,ube,yuu<yamanashi>chuo,doshi,fuefuki,fujikawa,fujikawaguchiko,fujiyoshida,hayakawa,hokuto,ichikawamisato,kai,kofu,koshu,kosuge,minami-alps,minobu,nakamichi,nanbu,narusawa,nirasaki,nishikatsura,oshino,otsuki,showa,tabayama,tsuru,uenohara,yamanakako,yamanashi<yokohama>!city,*<三重,京都,佐賀,兵庫,北海道,千葉,和歌山,埼玉,大分,大阪,奈良,宮城,宮崎,富山,山口,山形,山梨,岐阜,岡山,岩手,島根,広島,徳島,愛媛,愛知,新潟,東京,栃木,沖縄,滋賀,熊本,石川,神奈川,福井,福岡,福島,秋田,群馬,茨城,長崎,長野,青森,静岡,香川,高知,鳥取,鹿児島|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke>ac,co,go,info,me,mobi,ne,or,sc|kerryhotels|kerrylogistics|kerryproperties|kfh|kg>com,edu,gov,mil,net,org|kh>*|ki>biz,com,edu,gov,info,net,org|kia|kim|kinder|kindle|kitchen|kiwi|km>ass,asso,com,coop,edu,gouv,gov,medecin,mil,nom,notaires,org,pharmaciens,prd,presse,tm,veterinaire|kn>edu,gov,net,org|koeln|komatsu|kosher|kp>com,edu,gov,org,rep,tra|kpmg|kpn|kr>ac,busan,chungbuk,chungnam,co,daegu,daejeon,es,gangwon,go,gwangju,gyeongbuk,gyeonggi,gyeongnam,hs,incheon,jeju,jeonbuk,jeonnam,kg,mil,ms,ne,or,pe,re,sc,seoul,ulsan|krd|kred|kuokgroup|kw>com,edu,emb,gov,ind,net,org|ky>com,edu,gov,net,org|kyoto|kz>com,edu,gov,mil,net,org|la>com,edu,gov,info,int,net,org,per|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb>com,edu,gov,net,org|lc>co,com,edu,gov,net,org|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk>ac,assn,com,edu,gov,grp,hotel,int,ltd,net,ngo,org,sch,soc,web|llc|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr>com,edu,gov,net,org|ls>ac,biz,co,edu,gov,info,net,org,sc|lt>gov|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv>asn,com,conf,edu,gov,id,mil,net,org|ly>com,edu,gov,id,med,net,org,plc,sch|ma>ac,co,gov,net,org,press|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc>asso,tm|mckinsey|md|me>ac,co,edu,gov,its,net,org,priv|med|media|meet|melbourne|meme|memorial|men|menu|merckmsd|metlife|mg>co,com,edu,gov,mil,nom,org,prd,tm|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk>com,edu,gov,inf,name,net,org|ml>com,edu,gouv,gov,net,org,presse|mlb|mls|mm>*|mma|mn>edu,gov,org|mo>com,edu,gov,net,org|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr>gov|ms>com,edu,gov,net,org|msd|mt>com,edu,net,org|mtn|mtr|mu>ac,co,com,gov,net,or,org|museum>academy,agriculture,air,airguard,alabama,alaska,amber,ambulance,american,americana,americanantiques,americanart,amsterdam,and,annefrank,anthro,anthropology,antiques,aquarium,arboretum,archaeological,archaeology,architecture,art,artanddesign,artcenter,artdeco,arteducation,artgallery,arts,artsandcrafts,asmatart,assassination,assisi,association,astronomy,atlanta,austin,australia,automotive,aviation,axis,badajoz,baghdad,bahn,bale,baltimore,barcelona,baseball,basel,baths,bauern,beauxarts,beeldengeluid,bellevue,bergbau,berkeley,berlin,bern,bible,bilbao,bill,birdart,birthplace,bonn,boston,botanical,botanicalgarden,botanicgarden,botany,brandywinevalley,brasil,bristol,british,britishcolumbia,broadcast,brunel,brussel,brussels,bruxelles,building,burghof,bus,bushey,cadaques,california,cambridge,can,canada,capebreton,carrier,cartoonart,casadelamoneda,castle,castres,celtic,center,chattanooga,cheltenham,chesapeakebay,chicago,children,childrens,childrensgarden,chiropractic,chocolate,christiansburg,cincinnati,cinema,circus,civilisation,civilization,civilwar,clinton,clock,coal,coastaldefence,cody,coldwar,collection,colonialwilliamsburg,coloradoplateau,columbia,columbus,communication,communications,community,computer,computerhistory,comunicações,contemporary,contemporaryart,convent,copenhagen,corporation,correios-e-telecomunicações,corvette,costume,countryestate,county,crafts,cranbrook,creation,cultural,culturalcenter,culture,cyber,cymru,dali,dallas,database,ddr,decorativearts,delaware,delmenhorst,denmark,depot,design,detroit,dinosaur,discovery,dolls,donostia,durham,eastafrica,eastcoast,education,educational,egyptian,eisenbahn,elburg,elvendrell,embroidery,encyclopedic,england,entomology,environment,environmentalconservation,epilepsy,essex,estate,ethnology,exeter,exhibition,family,farm,farmequipment,farmers,farmstead,field,figueres,filatelia,film,fineart,finearts,finland,flanders,florida,force,fortmissoula,fortworth,foundation,francaise,frankfurt,franziskaner,freemasonry,freiburg,fribourg,frog,fundacio,furniture,gallery,garden,gateway,geelvinck,gemological,geology,georgia,giessen,glas,glass,gorge,grandrapids,graz,guernsey,halloffame,hamburg,handson,harvestcelebration,hawaii,health,heimatunduhren,hellas,helsinki,hembygdsforbund,heritage,histoire,historical,historicalsociety,historichouses,historisch,historisches,history,historyofscience,horology,house,humanities,illustration,imageandsound,indian,indiana,indianapolis,indianmarket,intelligence,interactive,iraq,iron,isleofman,jamison,jefferson,jerusalem,jewelry,jewish,jewishart,jfk,journalism,judaica,judygarland,juedisches,juif,karate,karikatur,kids,koebenhavn,koeln,kunst,kunstsammlung,kunstunddesign,labor,labour,lajolla,lancashire,landes,lans,läns,larsson,lewismiller,lincoln,linz,living,livinghistory,localhistory,london,losangeles,louvre,loyalist,lucerne,luxembourg,luzern,mad,madrid,mallorca,manchester,mansion,mansions,manx,marburg,maritime,maritimo,maryland,marylhurst,media,medical,medizinhistorisches,meeres,memorial,mesaverde,michigan,midatlantic,military,mill,miners,mining,minnesota,missile,missoula,modern,moma,money,monmouth,monticello,montreal,moscow,motorcycle,muenchen,muenster,mulhouse,muncie,museet,museumcenter,museumvereniging,music,national,nationalfirearms,nationalheritage,nativeamerican,naturalhistory,naturalhistorymuseum,naturalsciences,nature,naturhistorisches,natuurwetenschappen,naumburg,naval,nebraska,neues,newhampshire,newjersey,newmexico,newport,newspaper,newyork,niepce,norfolk,north,nrw,nuernberg,nuremberg,nyc,nyny,oceanographic,oceanographique,omaha,online,ontario,openair,oregon,oregontrail,otago,oxford,pacific,paderborn,palace,paleo,palmsprings,panama,paris,pasadena,pharmacy,philadelphia,philadelphiaarea,philately,phoenix,photography,pilots,pittsburgh,planetarium,plantation,plants,plaza,portal,portland,portlligat,posts-and-telecommunications,preservation,presidio,press,project,public,pubol,quebec,railroad,railway,research,resistance,riodejaneiro,rochester,rockart,roma,russia,saintlouis,salem,salvadordali,salzburg,sandiego,sanfrancisco,santabarbara,santacruz,santafe,saskatchewan,satx,savannahga,schlesisches,schoenbrunn,schokoladen,school,schweiz,science,science-fiction,scienceandhistory,scienceandindustry,sciencecenter,sciencecenters,sciencehistory,sciences,sciencesnaturelles,scotland,seaport,settlement,settlers,shell,sherbrooke,sibenik,silk,ski,skole,society,sologne,soundandvision,southcarolina,southwest,space,spy,square,stadt,stalbans,starnberg,state,stateofdelaware,station,steam,steiermark,stjohn,stockholm,stpetersburg,stuttgart,suisse,surgeonshall,surrey,svizzera,sweden,sydney,tank,tcm,technology,telekommunikation,television,texas,textile,theater,time,timekeeping,topology,torino,touch,town,transport,tree,trolley,trust,trustee,uhren,ulm,undersea,university,usa,usantiques,usarts,uscountryestate,usculture,usdecorativearts,usgarden,ushistory,ushuaia,uslivinghistory,utah,uvic,valley,vantaa,versailles,viking,village,virginia,virtual,virtuel,vlaanderen,volkenkunde,wales,wallonie,war,washingtondc,watch-and-clock,watchandclock,western,westfalen,whaling,wildlife,williamsburg,windmill,workshop,york,yorkshire,yosemite,youth,zoological,zoology,иком,ירושלים|mutual|mv>aero,biz,com,coop,edu,gov,info,int,mil,museum,name,net,org,pro|mw>ac,biz,co,com,coop,edu,gov,int,museum,net,org|mx>com,edu,gob,net,org|my>com,edu,gov,mil,name,net,org|mz>ac,adv,co,edu,gov,mil,net,org|na>ca,cc,co,com,dr,in,info,mobi,mx,name,or,org,pro,school,tv,us,ws|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc>asso,nom|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf>arts,com,firm,info,net,other,per,rec,store,web|nfl|ng>com,edu,gov,i,mil,mobi,name,net,org,sch|ngo|nhk|ni>ac,biz,co,com,edu,gob,in,info,int,mil,net,nom,org,web|nico|nike|nikon|ninja|nissan|nissay|nl|no>aa>gs<aarborte,aejrie,afjord,åfjord,agdenes,ah>gs<akershus>nes<aknoluokta,ákŋoluokta,akrehamn,åkrehamn,al,ål,alaheadju,álaheadju,alesund,ålesund,algard,ålgård,alstahaug,alta,áltá,alvdal,amli,åmli,amot,åmot,andasuolo,andebu,andoy,andøy,ardal,årdal,aremark,arendal,arna,ås,aseral,åseral,asker,askim,askoy,askøy,askvoll,asnes,åsnes,audnedaln,aukra,aure,aurland,aurskog-holand,aurskog-høland,austevoll,austrheim,averoy,averøy,badaddja,bådåddjå,bærum,bahcavuotna,báhcavuotna,bahccavuotna,báhccavuotna,baidar,báidár,bajddar,bájddar,balat,bálát,balestrand,ballangen,balsfjord,bamble,bardu,barum,batsfjord,båtsfjord,bearalvahki,bearalváhki,beardu,beiarn,berg,bergen,berlevag,berlevåg,bievat,bievát,bindal,birkenes,bjarkoy,bjarkøy,bjerkreim,bjugn,bodo,bodø,bokn,bomlo,bømlo,bremanger,bronnoy,brønnøy,bronnoysund,brønnøysund,brumunddal,bryne,bu>gs<budejjubuskerud>nes<bygland,bykle,cahcesuolo,čáhcesuolo,davvenjarga,davvenjárga,davvesiida,deatnu,dep,dielddanuorri,divtasvuodna,divttasvuotna,donna,dønna,dovre,drammen,drangedal,drobak,drøbak,dyroy,dyrøy,egersund,eid,eidfjord,eidsberg,eidskog,eidsvoll,eigersund,elverum,enebakk,engerdal,etne,etnedal,evenassi,evenášši,evenes,evje-og-hornnes,farsund,fauske,fedje,fet,fetsund,fhs,finnoy,finnøy,fitjar,fjaler,fjell,fla,flå,flakstad,flatanger,flekkefjord,flesberg,flora,floro,florø,fm>gs<folkebibl,folldal,forde,førde,forsand,fosnes,fræna,frana,fredrikstad,frei,frogn,froland,frosta,froya,frøya,fuoisku,fuossko,fusa,fylkesbibl,fyresdal,gaivuotna,gáivuotna,galsa,gálsá,gamvik,gangaviika,gáŋgaviika,gaular,gausdal,giehtavuoatna,gildeskal,gildeskål,giske,gjemnes,gjerdrum,gjerstad,gjesdal,gjovik,gjøvik,gloppen,gol,gran,grane,granvin,gratangen,grimstad,grong,grue,gulen,guovdageaidnu,ha,hå,habmer,hábmer,hadsel,hægebostad,hagebostad,halden,halsa,hamar,hamaroy,hammarfeasta,hámmárfeasta,hammerfest,hapmir,hápmir,haram,hareid,harstad,hasvik,hattfjelldal,haugesundhedmark>os,valer,våler<hemne,hemnes,hemsedal,herad,hitra,hjartdal,hjelmeland,hl>gs<hm>gs<hobol,hobøl,hof,hokksund,hol,hole,holmestrand,holtalen,holtålen,honefoss,hønefosshordaland>os<hornindal,horten,hoyanger,høyanger,hoylandet,høylandet,hurdal,hurum,hvaler,hyllestad,ibestad,idrett,inderoy,inderøy,iveland,ivgu,jan-mayen>gs<jessheim,jevnaker,jolster,jølster,jondal,jorpeland,jørpeland,kafjord,kåfjord,karasjohka,kárášjohka,karasjok,karlsoy,karmoy,karmøy,kautokeino,kirkenes,klabu,klæbu,klepp,kommune,kongsberg,kongsvinger,kopervik,kraanghke,kråanghke,kragero,kragerø,kristiansand,kristiansund,krodsherad,krødsherad,krokstadelva,kvæfjord,kvænangen,kvafjord,kvalsund,kvam,kvanangen,kvinesdal,kvinnherad,kviteseid,kvitsoy,kvitsøy,laakesvuemie,lærdal,lahppi,láhppi,langevag,langevåg,lardal,larvik,lavagis,lavangen,leangaviika,leaŋgaviika,lebesby,leikanger,leirfjord,leirvik,leka,leksvik,lenvik,lerdal,lesja,levanger,lier,lierne,lillehammer,lillesand,lindas,lindås,lindesnes,loabat,loabát,lodingen,lødingen,lom,loppa,lorenskog,lørenskog,loten,løten,lund,lunner,luroy,lurøy,luster,lyngdal,lyngen,malatvuopmi,málatvuopmi,malselv,målselv,malvik,mandal,marker,marnardal,masfjorden,masoy,måsøy,matta-varjjat,mátta-várjjat,meland,meldal,melhus,meloy,meløy,meraker,meråker,midsund,midtre-gauldal,mil,mjondalen,mjøndalen,mo-i-rana,moareke,moåreke,modalen,modum,moldemore-og-romsdal>heroy,sande<møre-og-romsdal>herøy,sande<mosjoen,mosjøen,moskenes,moss,mosvik,mr>gs<muosat,muosát,museum,naamesjevuemie,nååmesjevuemie,nærøy,namdalseid,namsos,namsskogan,nannestad,naroy,narviika,narvik,naustdal,navuotna,návuotna,nedre-eiker,nesna,nesodden,nesoddtangen,nesseby,nesset,nissedal,nittedal,nl>gs<nord-aurdal,nord-fron,nord-odal,norddal,nordkappnordland>bo,bø,heroy,herøy<nordre-land,nordreisa,nore-og-uvdal,notodden,notteroy,nøtterøy,nt>gs<odda,of>gs<oksnes,øksnes,ol>gs<omasvuotna,oppdal,oppegard,oppegård,orkanger,orkdal,orland,ørland,orskog,ørskog,orsta,ørsta,osen,oslo>gs<osoyro,osøyro,osteroy,osterøyostfold>valer<østfold>våler<ostre-toten,østre-toten,overhalla,ovre-eiker,øvre-eiker,oyer,øyer,oygarden,øygarden,oystre-slidre,øystre-slidre,porsanger,porsangu,porsáŋgu,porsgrunn,priv,rade,råde,radoy,radøy,rælingen,rahkkeravju,ráhkkerávju,raholt,råholt,raisa,ráisa,rakkestad,ralingen,rana,randaberg,rauma,rendalen,rennebu,rennesoy,rennesøy,rindal,ringebu,ringerike,ringsaker,risor,risør,rissa,rl>gs<roan,rodoy,rødøy,rollag,romsa,romskog,rømskog,roros,røros,rost,røst,royken,røyken,royrvik,røyrvik,ruovat,rygge,salangen,salat,sálat,sálát,saltdal,samnanger,sandefjord,sandnes,sandnessjoen,sandnessjøen,sandoy,sandøy,sarpsborg,sauda,sauherad,sel,selbu,selje,seljord,sf>gs<siellak,sigdal,siljan,sirdal,skanit,skánit,skanland,skånland,skaun,skedsmo,skedsmokorset,ski,skien,skierva,skiervá,skiptvet,skjak,skjåk,skjervoy,skjervøy,skodje,slattum,smola,smøla,snaase,snåase,snasa,snåsa,snillfjord,snoasa,sogndal,sogne,søgne,sokndal,sola,solund,somna,sømna,sondre-land,søndre-land,songdalen,sor-aurdal,sør-aurdal,sor-fron,sør-fron,sor-odal,sør-odal,sor-varanger,sør-varanger,sorfold,sørfold,sorreisa,sørreisa,sortland,sorum,sørum,spjelkavik,spydeberg,st>gs<stange,stat,stathelle,stavanger,stavern,steigen,steinkjer,stjordal,stjørdal,stjordalshalsen,stjørdalshalsen,stokke,stor-elvdal,stord,stordal,storfjord,strand,stranda,stryn,sula,suldal,sund,sunndal,surnadal,svalbard>gs<sveio,svelvik,sykkylven,tana,tanangertelemark>bo,bø<time,tingvoll,tinn,tjeldsund,tjome,tjøme,tm>gs<tokke,tolga,tonsberg,tønsberg,torsken,tr>gs<træna,trana,tranby,tranoy,tranøy,troandin,trogstad,trøgstad,tromsa,tromso,tromsø,trondheim,trysil,tvedestrand,tydal,tynset,tysfjord,tysnes,tysvær,tysvar,ullensaker,ullensvang,ulvik,unjarga,unjárga,utsira,va>gs<vaapste,vadso,vadsø,værøy,vaga,vågå,vagan,vågan,vagsoy,vågsøy,vaksdal,valle,vang,vanylven,vardo,vardø,varggat,várggát,varoy,vefsn,vega,vegarshei,vegårshei,vennesla,verdal,verran,vestbyvestfold>sande<vestnes,vestre-slidre,vestre-toten,vestvagoy,vestvågøy,vevelstad,vf>gs<vgs,vik,vikna,vindafjord,voagat,volda,voss,vossevangen|nokia|northwesternmutual|norton|now|nowruz|nowtv|np>*|nr>biz,com,edu,gov,info,net,org|nra|nrw|ntt|nu|nyc|nz>ac,co,cri,geek,gen,govt,health,iwi,kiwi,maori,māori,mil,net,org,parliament,school|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om>co,com,edu,gov,med,museum,net,org,pro|omega|one|ong|onion|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa>abo,ac,com,edu,gob,ing,med,net,nom,org,sld|page|panasonic|paris|pars|partners|parts|party|passagens|pay|pccw|pe>com,edu,gob,mil,net,nom,org|pet|pf>com,edu,org|pfizer|pg>*|ph>com,edu,gov,i,mil,net,ngo,org|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk>biz,com,edu,fam,gob,gok,gon,gop,gos,gov,info,net,org,web|pl>agro,aid,atm,augustow,auto,babia-gora,bedzin,beskidy,bialowieza,bialystok,bielawa,bieszczady,biz,boleslawiec,bydgoszcz,bytom,cieszyn,com,czeladz,czest,dlugoleka,edu,elblag,elk,glogow,gmina,gniezno,gorlice,gov>ap,griw,ic,is,kmpsp,konsulat,kppsp,kwp,kwpsp,mup,mw,oirm,oum,pa,pinb,piw,po,psp,psse,pup,rzgw,sa,sdn,sko,so,sr,starostwo,ug,ugim,um,umig,upow,uppo,us,uw,uzs,wif,wiih,winb,wios,witd,wiw,wsa,wskr,wuoz,wzmiuw,zp<grajewo,gsm,ilawa,info,jaworzno,jelenia-gora,jgora,kalisz,karpacz,kartuzy,kaszuby,katowice,kazimierz-dolny,kepno,ketrzyn,klodzko,kobierzyce,kolobrzeg,konin,konskowola,kutno,lapy,lebork,legnica,lezajsk,limanowa,lomza,lowicz,lubin,lukow,mail,malbork,malopolska,mazowsze,mazury,media,miasta,mielec,mielno,mil,mragowo,naklo,net,nieruchomosci,nom,nowaruda,nysa,olawa,olecko,olkusz,olsztyn,opoczno,opole,org,ostroda,ostroleka,ostrowiec,ostrowwlkp,pc,pila,pisz,podhale,podlasie,polkowice,pomorskie,pomorze,powiat,priv,prochowice,pruszkow,przeworsk,pulawy,radom,rawa-maz,realestate,rel,rybnik,rzeszow,sanok,sejny,sex,shop,sklep,skoczow,slask,slupsk,sos,sosnowiec,stalowa-wola,starachowice,stargard,suwalki,swidnica,swiebodzin,swinoujscie,szczecin,szczytno,szkola,targi,tarnobrzeg,tgory,tm,tourism,travel,turek,turystyka,tychy,ustka,walbrzych,warmia,warszawa,waw,wegrow,wielun,wlocl,wloclawek,wodzislaw,wolomin,wroclaw,zachpomor,zagan,zarow,zgora,zgorzelec|place|play|playstation|plumbing|plus|pm|pn>co,edu,gov,net,org|pnc|pohl|poker|politie|porn|post|pr>ac,biz,com,edu,est,gov,info,isla,name,net,org,pro,prof|pramerica|praxi|press|prime|pro>aaa,aca,acct,avocat,bar,cpa,eng,jur,law,med,recht|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps>com,edu,gov,net,org,plo,sec|pt>com,edu,gov,int,net,nome,org,publ|pub|pw>belau,co,ed,go,ne,or|pwc|py>com,coop,edu,gov,mil,net,org|qa>com,edu,gov,mil,name,net,org,sch|qpon|quebec|quest|qvc|racing|radio|raid|re>asso,com,nom|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro>arts,com,firm,info,nom,nt,org,rec,store,tm,www|rocher|rocks|rodeo|rogers|room|rs>ac,co,edu,gov,in,org|rsvp|ru>ac,edu,gov,int,mil,test|rugby|ruhr|run|rw>ac,co,com,edu,gouv,gov,int,mil,net|rwe|ryukyu|sa>com,edu,gov,med,net,org,pub,sch|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sarl|sas|save|saxo|sb>com,edu,gov,net,org|sbi|sbs|sc>com,edu,gov,net,org|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd>com,edu,gov,info,med,net,org,tv|se>a,ac,b,bd,brand,c,d,e,f,fh,fhsk,fhv,g,h,i,k,komforb,kommunalforbund,komvux,l,lanbib,m,n,naturbruksgymn,o,org,p,parti,pp,press,r,s,t,tm,u,w,x,y,z|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg>com,edu,gov,net,org,per|sh>com,gov,mil,net,org|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl>com,edu,gov,net,org|sling|sm|smart|smile|sn>art,com,edu,gouv,org,perso,univ|sncf|so>com,net,org|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|sport|spot|spreadbetting|sr|srl|srt|st>co,com,consulado,edu,embaixada,gov,mil,net,org,principe,saotome,store|stada|staples|star|starhub|statebank|statefarm|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv>com,edu,gob,org,red|swatch|swiftcover|swiss|sx>gov|sy>com,edu,gov,mil,net,org|sydney|symantec|systems|sz>ac,co,org|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telefonica|temasek|tennis|teva|tf|tg|th>ac,co,go,in,mi,net,or|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj>ac,biz,co,com,edu,go,gov,int,mil,name,net,nic,org,test,web|tjmaxx|tjx|tk|tkmaxx|tl>gov|tm>co,com,edu,gov,mil,net,nom,org|tmall|tn>agrinet,com,defense,edunet,ens,fin,gov,ind,info,intl,mincom,nat,net,org,perso,rnrt,rns,rnu,tourism,turen|to>com,edu,gov,mil,net,org|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr>av,bbs,bel,biz,com,dr,edu,gen,gov,info,k12,kep,mil,name,nc>gov<net,org,pol,tel,tsk,tv,web|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt>aero,biz,co,com,coop,edu,gov,info,int,jobs,mobi,museum,name,net,org,pro,travel|tube|tui|tunes|tushu|tv|tvs|tw>club,com,ebiz,edu,game,gov,idv,mil,net,org,商業,組織,網路|tz>ac,co,go,hotel,info,me,mil,mobi,ne,or,sc,tv|ua>cherkassy,cherkasy,chernigov,chernihiv,chernivtsi,chernovtsy,ck,cn,com,cr,crimea,cv,dn,dnepropetrovsk,dnipropetrovsk,dominic,donetsk,dp,edu,gov,if,in,ivano-frankivsk,kh,kharkiv,kharkov,kherson,khmelnitskiy,khmelnytskyi,kiev,kirovograd,km,kr,krym,ks,kv,kyiv,lg,lt,lugansk,lutsk,lv,lviv,mk,mykolaiv,net,nikolaev,od,odesa,odessa,org,pl,poltava,rivne,rovno,rv,sb,sebastopol,sevastopol,sm,sumy,te,ternopil,uz,uzhgorod,vinnica,vinnytsia,vn,volyn,yalta,zaporizhzhe,zaporizhzhia,zhitomir,zhytomyr,zp,zt|ubank|ubs|uconnect|ug>ac,co,com,go,ne,or,org,sc|uk>ac,co,gov,ltd,me,net,nhs,org,plc,policesch>*|unicom|university|uno|uol|ups|us>ak>cc,k12,lib<al>cc,k12,lib<ar>cc,k12,lib<as>cc,k12,lib<az>cc,k12,lib<ca>cc,k12,lib<co>cc,k12,lib<ct>cc,k12,lib<dc>cc,k12,lib<de>cc,k12<dni,fed,fl>cc,k12,lib<ga>cc,k12,lib<gu>cc,k12,lib<hi>cc,lib<ia>cc,k12,lib<id>cc,k12,lib<il>cc,k12,lib<in>cc,k12,lib<isa,kids,ks>cc,k12,lib<ky>cc,k12,lib<la>cc,k12,lib<ma>cc,k12>chtr,paroch,pvt<lib<md>cc,k12,lib<me>cc,k12,lib<mi>ann-arbor,cc,cog,dst,eaton,gen,k12,lib,mus,tec,washtenaw<mn>cc,k12,lib<mo>cc,k12,lib<ms>cc,k12,lib<mt>cc,k12,lib<nc>cc,k12,lib<nd>cc,lib<ne>cc,k12,lib<nh>cc,k12,lib<nj>cc,k12,lib<nm>cc,k12,lib<nsn,nv>cc,k12,lib<ny>cc,k12,lib<oh>cc,k12,lib<ok>cc,k12,lib<or>cc,k12,lib<pa>cc,k12,lib<pr>cc,k12,lib<ri>cc,k12,lib<sc>cc,k12,lib<sd>cc,lib<tn>cc,k12,lib<tx>cc,k12,lib<ut>cc,k12,lib<va>cc,k12,lib<vi>cc,k12,lib<vt>cc,k12,lib<wa>cc,k12,lib<wi>cc,k12,lib<wv>cc<wy>cc,k12,lib|uy>com,edu,gub,mil,net,org|uz>co,com,net,org|va|vacations|vana|vanguard|vc>com,edu,gov,mil,net,org|ve>arts,co,com,e12,edu,firm,gob,gov,info,int,mil,net,org,rec,store,tec,web|vegas|ventures|verisign|vermögensberater|vermögensberatung|versicherung|vet|vg|vi>co,com,k12,net,org|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vistaprint|viva|vivo|vlaanderen|vn>ac,biz,com,edu,gov,health,info,int,name,net,org,pro|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu>com,edu,net,org|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws>com,edu,gov,net,org|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye>*|yodobashi|yoga|yokohama|you|youtube|yt|yun|za>ac,agric,alt,co,edu,gov,grondar,law,mil,net,ngo,nis,nom,org,school,tm,web|zappos|zara|zero|zip|zm>ac,biz,co,com,edu,gov,info,mil,net,org,sch|zone|zuerich|zw>ac,co,gov,mil,org|ελ|бг|бел|дети|ею|католик|ком|қаз|мкд|мон|москва|онлайн|орг|рус|рф|сайт|срб>ак,обр,од,орг,пр,упр|укр|გე|հայ|קום|ابوظبي|اتصالات|ارامكو|الاردن|الجزائر|السعودية|السعوديه|السعودیة|السعودیۃ|العليان|المغرب|اليمن|امارات|ايران|ایران|بارت|بازار|بھارت|بيتك|پاكستان|پاکستان|ڀارت|تونس|سودان|سوريا|سورية|شبكة|عراق|عرب|عمان|فلسطين|قطر|كاثوليك|كوم|مصر|مليسيا|موبايلي|موقع|همراه|कॉम|नेट|भारत|भारतम्|भारोत|संगठन|বাংলা|ভারত|ভাৰত|ਭਾਰਤ|ભારત|ଭାରତ|இந்தியா|இலங்கை|சிங்கப்பூர்|భారత్|ಭಾರತ|ഭാരതം|ලංකා|คอม|ไทย>ทหาร,ธุรกิจ,เน็ต,รัฐบาล,ศึกษา,องค์กร|닷넷|닷컴|삼성|한국|グーグル|クラウド|コム|ストア|セール|ファッション|ポイント|みんな|世界|中信|中国|中國|中文网|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|嘉里大酒店|在线|大众汽车|大拿|天主教|娱乐|家電|工行|广东|微博|慈善|我爱你|手机|手表|招聘|政务|政府|新加坡|新闻|时尚|書籍|机构|淡马锡|游戏|澳門|澳门|点看|珠宝|移动|组织机构|网址|网店|网站|网络|联通|臺灣|诺基亚|谷歌|购物|通販|集团|電訊盈科|飞利浦|食品|餐厅|香格里拉|香港>個人,公司,政府,教育,組織,網絡"
};
}, function(e, t, n) {
"use strict";
const a = n(144);
e.exports = a(n(240).trie);
}, function(e) {
e.exports = {
updatedAt: "2019-05-20T02:21:50.080Z",
trie: "academy>official|ae>blogspot,nom|af>nom|ai>nom|al>blogspot,nom|am>blogspot|app>hasura,run>a<telebit|ar>com>blogspot|asia>cloudns|at>12hp,2ix,4lima,bizco>blogspot<futurecms>*ex>*<in>*<<futurehosting,futuremailing,info,lima-cityortsinfo>ex>*<kunden>*<<priv|au>com>blogspot|ba>blogspot|be>blogspottransurl>*<webhosting|bg>barsy,blogspot|biz>cloudns,dscloud,dyndns,for-better,for-more,for-some,for-the,mmafan,myftp,no-ip,selfip,webhop|bj>blogspot|br>com>blogspot<leg>ac,al,am,ap,ba,ce,df,es,go,ma,mg,ms,mt,pa,pb,pe,pi,pr,rj,rn,ro,rr,rs,sc,se,sp,to|bs>we|business>co|by>com>blogspot<nym|bz>nym,za|ca>awdev>*<blogspot,co,no-ip|casa>nabu>ui|cc>cloudns,fantasyleague,ftpaccess,game-server,myphotos,scrapping,twmail|cf>blogspot|ch>12hp,2ix,4lima,blogspot,dnsking,gotdns,lima-city,linkyard-cloud,square7|cl>blogspot,nom|cloud>linkyardmagentosite>*<on-rancher>*<sensiosite>*<statics>*<trafficplex,vapor|club>barsy,cloudns|cn>com>amazonaws>cn-north-1>s3<compute>*<eb>cn-north-1,cn-northwest-1<elb>*<<<instantcloud|co>com>blogspot<go-vip,leadpages,lpages,mypi,n4t,nodumotap>*|com>001www0emm>*<1kapp,3utilities,4u,africa,alpha-myqnapcloudamazonaws>ap-northeast-1>dualstack>s3<<ap-northeast-2>dualstack>s3<s3,s3-website<ap-south-1>dualstack>s3<s3,s3-website<ap-southeast-1>dualstack>s3<<ap-southeast-2>dualstack>s3<<ca-central-1>dualstack>s3<s3,s3-website<compute>*<compute-1>*<elb>*<eu-central-1>dualstack>s3<s3,s3-website<eu-west-1>dualstack>s3<<eu-west-2>dualstack>s3<s3,s3-website<eu-west-3>dualstack>s3<s3,s3-website<s3,s3-ap-northeast-1,s3-ap-northeast-2,s3-ap-south-1,s3-ap-southeast-1,s3-ap-southeast-2,s3-ca-central-1,s3-eu-central-1,s3-eu-west-1,s3-eu-west-2,s3-eu-west-3,s3-external-1,s3-fips-us-gov-west-1,s3-sa-east-1,s3-us-east-2,s3-us-gov-west-1,s3-us-west-1,s3-us-west-2,s3-website-ap-northeast-1,s3-website-ap-southeast-1,s3-website-ap-southeast-2,s3-website-eu-west-1,s3-website-sa-east-1,s3-website-us-east-1,s3-website-us-west-1,s3-website-us-west-2sa-east-1>dualstack>s3<<us-east-1>dualstack>s3<<us-east-2>dualstack>s3<s3,s3-website<<appchizi,applinzi,appspot,ar,barsycenter,barsyonline,betainabox,bitballoon,blogdns,blogspot,blogsyte,bloxcms,bounty-full>alpha,beta<bplaced,br,cechire,ciscofreak,cloudcontrolapp,cloudcontrolled,cn,co,codespot,damnserver,dattolocal,dattorelay,dattoweb,ddnsfree,ddnsgeek,ddnsking,ddnslive,de,dev-myqnapcloud,ditchyourip,dnsalias,dnsdojo,dnsiskinky,doesntexist,dontexist,doomdns,drayddns,dreamhosters,dsmynas,dyn-o-saur,dynalias,dyndns-at-home,dyndns-at-work,dyndns-blog,dyndns-free,dyndns-home,dyndns-ip,dyndns-mail,dyndns-office,dyndns-pics,dyndns-remote,dyndns-server,dyndns-web,dyndns-wiki,dyndns-work,dynns,elasticbeanstalk>ap-northeast-1,ap-northeast-2,ap-northeast-3,ap-south-1,ap-southeast-1,ap-southeast-2,ca-central-1,eu-central-1,eu-west-1,eu-west-2,eu-west-3,sa-east-1,us-east-1,us-east-2,us-gov-west-1,us-west-1,us-west-2<est-a-la-maison,est-a-la-masion,est-le-patron,est-mon-blogueur,euevennode>eu-1,eu-2,eu-3,eu-4,us-1,us-2,us-3,us-4<familyds,fastly-terrarium,fastvps-serverfbsbx>apps<firebaseapp,firewall-gateway,flynnhub,freebox-os,freeboxos,from-ak,from-al,from-ar,from-ca,from-ct,from-dc,from-de,from-fl,from-ga,from-hi,from-ia,from-id,from-il,from-in,from-ks,from-ky,from-ma,from-md,from-mi,from-mn,from-mo,from-ms,from-mt,from-nc,from-nd,from-ne,from-nh,from-nj,from-nm,from-nv,from-oh,from-ok,from-or,from-pa,from-pr,from-ri,from-sc,from-sd,from-tn,from-tx,from-ut,from-va,from-vt,from-wa,from-wi,from-wv,from-wy,gb,geekgalaxy,getmyip,giize,githubusercontent,gleeze,googleapis,googlecode,gotdns,gotpantheon,gr,health-carereform,herokuapp,herokussl,hk,hobby-site,homelinux,homesecuritymac,homesecuritypc,homeunix,hu,iamallama,is-a-anarchist,is-a-blogger,is-a-bookkeeper,is-a-bulls-fan,is-a-caterer,is-a-chef,is-a-conservative,is-a-cpa,is-a-cubicle-slave,is-a-democrat,is-a-designer,is-a-doctor,is-a-financialadvisor,is-a-geek,is-a-green,is-a-guru,is-a-hard-worker,is-a-hunter,is-a-landscaper,is-a-lawyer,is-a-liberal,is-a-libertarian,is-a-llama,is-a-musician,is-a-nascarfan,is-a-nurse,is-a-painter,is-a-personaltrainer,is-a-photographer,is-a-player,is-a-republican,is-a-rockstar,is-a-socialist,is-a-student,is-a-teacher,is-a-techie,is-a-therapist,is-an-accountant,is-an-actor,is-an-actress,is-an-anarchist,is-an-artist,is-an-engineer,is-an-entertainer,is-certified,is-gone,is-into-anime,is-into-cars,is-into-cartoons,is-into-games,is-leet,is-not-certified,is-slick,is-uberleet,is-with-theband,isa-geek,isa-hockeynut,issmarterthanyou,jdevcloudjoyent>cns>*<<jpn,kozow,kr,likes-pie,likescandylmpm>app<logoip,loseyourip,lpusercontent,meteorapp>eu<mex,miniserver,myactivedirectory,myasustor,mydatto,mydobiss,mydrobo,myiphost,myqnapcloud,myravendb,mysecuritycamera,myshopblocks,mytuleap,myvnc,neat-url,net-freaks,netlify,nfshost,no,on-aptible,onthewifi,ooguy,operaunite,outsystemscloud,ownprovider,pagefrontapp,pagespeedmobilizer,pgfog,pixolino,point2thisprgmr>xen<publishproxy,qa2,qc,quicksytesquipelements>*<rackmaze,remotewd,rhcloud,ru,sa,saves-the-whales,scrysec,securitytactics,selfip,sells-for-less,sells-for-u,servebbs,servebeer,servecounterstrike,serveexchange,serveftp,servegame,servehalflife,servehttp,servehumour,serveirc,servemp3,servep2p,servepics,servequake,servesarcasm,simple-url,sinaapp,space-to-rentstdlib>api<stufftoread,teaches-yoga,temp-dns,theworkpc,townnews-staging,uk,unusualperson,us,uy,vipsinaapp,withgoogle,withyoutube,workisboring,wpcomstaging,wpdevcloud,writesthisblog,xenapponazure,xnbay>u2,u2-local<yolasite,za|community>ravendb|cool>de|cv>blogspot|cx>ath,info|cy>com>blogspot|cz>blogspot,co,e4metacentrum>cloud,custom<muni>cloud>flt,usr<<realm|de>12hp,2ix,4lima,barsy,blogspot,bplaced,comcosidns>dyn<dd-dns,ddnss>dyn,dyndns<dnshome,dnsupdater,dray-dns,draydns,dyn-berlin,dyn-ip24,dyn-vpn,dynamisches-dns,dyndns1,dynvpn,firewall-gateway,fuettertdasnetz,git-repos,goip,home-webserver>dyn<in-berlin,in-brb,in-butter,in-dsl,in-vpn,internet-dns,isteingeek,istmein,keymachine,l-o-g-i-n,lcube-server,lebtimnetz,leitungsen,lima-city,logoip,mein-iserv,mein-vigor,my-gateway,my-router,my-vigor,my-wan,myhome-server,spdnsspeedpartner>customer<square7,svn-repos,syno-ds,synology-diskstation,synology-ds,taifun-dns,test-iserv,traeumtgeradeuberspace>*<virtual-user,virtualuser|design>bss|dev>workers|digital>cloudapps>london|direct>fastpanel|dk>biz,blogspot,co,firm,reg,store|earth>dapps>*bzz>*|edu>rit>git-pages|education>co|ee>com>blogspot|eg>com>blogspot|es>com>blogspot|estate>compute>*|eu>barsy,cloudns,diskstation,mycd,spdnstransurl>*<wellbeingzone|eus>party>user|events>co|faith>ybo|farm>storj|fi>blogspot,dy,iki|financial>co|fit>ptplus|fr>blogspot,chirurgiens-dentistes-en-france,fbx-os,fbxos,freebox-os,freeboxos,on-web|gd>nom|gdn>cnpy|ge>nom|gg>cya|gl>nom|goog>cloud|gr>blogspot,nym|group>discourse|gt>nom|gy>nym|hk>blogspot,inc,ltd|hn>nom|host>cloudaccess,freesite,half,pcloud|hosting>opencraft|hr>blogspot|hu>blogspot|id>co>blogspot<zone|ie>blogspot,nym|il>co>blogspot|im>nom,ro|in>barsy,blogspot,cloudns|info>barrel-of-knowledge,barrell-of-knowledge,barsy,cloudns,dvrcam,dynamic-dns,dyndns,for-our,forumz,groks-the,groks-this,here-for-more,ilovecollege,knowsitall,mayfirst,no-ip,nsupdate,selfip,v-info,webhop|io>2038,apigee,applicationcloud,azurecontainer,backplaneappbanzaicloud>app<barsybigv>uk0<boxfuse,browsersafetymark,cleverapps,dedyn,definima,drud,enonic>customer<github,gitlab,hasura-app,hzclair>apps<ngrok,nidnodeart>stage<nodumon-rio>*<pantheonsite,protonet,readthedocs,resindeviceresinstaging>devices<s5y>*<sandcats,scapp,shiftedit,spacekitstolos>*<telebitthingdust>dev>cust<disrec>cust<prod>cust<testing>cust<<utwente,vaporcloud,wedeploy|is>blogspot,cupcake|it>16-b,32-b,64-b,blogspot,syncloud|jp>blogspot|ke>co>blogspot<nom|kr>blogspot|krd>co,edu|kz>nym|la>bnr,c,nym|land>static>dev,sites|lc>nym,oy|li>blogspot,nom,nym|link>cyon,mypep|lt>blogspot,nym|lu>blogspot,nym|management>router|md>blogspot|me>barsy,brasilia,c66,daplie>localhost<ddns,diskstation,dnsfor,dscloud,filegear,filegear-au,filegear-de,filegear-gb,filegear-ie,filegear-jp,filegear-sg,hopto,i234,loginto,myds,nohost,noip,nym,ravendb,soundcast,synology,tcp4,webhop,wedeploy,yombo|menu>barsy|mk>blogspot,nom|mn>nyc,nym|mobi>barsy,dscloud|mr>blogspot|mt>com>blogspot|mx>blogspot,nym|my>blogspot|name>her>forgot<his>forgot|net>alwaysdata,at-band-camp,azure-mobile,azurewebsites,barsy,blackbaudcdn,blogdns,boomla,bounceme,bplaced,broke-it,buyshouses,casacamcdn77>r<cdn77-ssl,channelsdvr,cloudaccess,cloudapp,cloudeity,cloudfront,cloudfunctions,cloudyclustercryptonomic>*<dattolocal,ddns,debian,definima,dnsalias,dnsdojo,dnsup,does-it,dontexist,dsmynas,dynalias,dynathome,dynu,dynv6,eating-organic,endofinternet,familydsfastly>freetls,mapprod>a,global<ssl>a,b,global<<fastlylb>map<feste-ip,firewall-gateway,flynnhosting,from-az,from-co,from-la,from-ny,gb,gets-it,go-vip,ham-radio-op,hicam,homeftp,homeip,homelinux,homeunix,hu,in,in-dsl,in-the-band,in-vpn,ipifony,is-a-chef,is-a-geek,isa-geek,jp,kicks-ass,knx-server,memset,moonscale,mydatto,mydissent,myeffect,myfritz,mymediapc,mypsx,mysecuritycamera,nhlfan,no-ip,now-dns,office-on-the,ownip,pgafan,podzone,privatizehealthinsurance,rackmaze,redirectme,ru,schokokeks,scrapper-site,se,selfip,sells-it,servebbs,serveblog,serveftp,serveminecraft,siteleaf,square7,static-access,sytes,t3l3p0rt,thruhere,twmail,uk,vpndns,webhop,za|network>alces>*<co|ng>com>blogspot|nl>blogspot,cistron,co,demon,hosting-clustertransurl>*<virtueeldomein|no>blogspot,co|nu>builder>site<merseine,mine,nom,shacknet|nz>co>blogspot<nym|one>homelink|online>barsy|org>accesscam,aeamune>tele<barsy,blogdns,blogsite,bmoattachments,boldlygoingnowhere,cable-modem,camdvrcdn77>c,rsc<cdn77-secure>origin>ssl<<certmgr,cloudns,collegefan,couchpotatofries,ddnss,diskstation,dnsalias,dnsdojo,doesntexist,dontexist,doomdns,dsmynas,duckdns,dvrdns,dynalias,dyndns>go,home<dynserv,endofinternet,endoftheinternet,eu>al,asso,at,au,be,bg,ca,cd,ch,cn,cy,cz,de,dk,edu,ee,es,fi,fr,gr,hr,hu,ie,il,in,int,is,it,jp,kr,lt,lu,lv,mc,me,mk,mt,my,net,ng,nl,no,nz,paris,pl,pt,q-a,ro,ru,se,si,sk,tr,uk,us<familyds,fedorainfracloud,fedorapeoplefedoraproject>cloudos>app<stg>os>app<<<freeddns,freedesktop,from-me,game-host,gotdns,hepforge,hk,hobby-site,homedns,homeftp,homelinux,homeunix,hopto,in-dsl,in-vpn,is-a-bruinsfan,is-a-candidate,is-a-celticsfan,is-a-chef,is-a-geek,is-a-knight,is-a-linux-user,is-a-patsfan,is-a-soxfan,is-found,is-lost,is-saved,is-very-bad,is-very-evil,is-very-good,is-very-nice,is-very-sweet,isa-geek,js,kicks-ass,mayfirst,misconfused,mlbfan,mozilla-iot,my-firewall,myfirewall,myftp,mysecuritycamera,mywire,nflfan,no-ip,now-dns,pimienta,podzone,poivron,potager,read-books,readmyblog,selfip,sellsyourhome,servebbs,serveftp,servegame,spdns,stuff-4-sale,sweetpepper,tunk,tuxfamily,twmail,ufcfan,uklugs,us,webhop,webredirect,wmflabs,za,zapto|ovh>nerdpol|party>ybo|pe>blogspot,nym|pictures>1337|pl>art,beep,co,gda,gdansk,gdynia,gliwice,krakow,krasnik,leczna,lubartow,lublin,med,poniatowa,poznan,sopot,swidnik,wroc,zakopane|place>co|pm>own|pro>barsy,cloudnsdnstrace>bci|pt>blogspot,nym|pub>barsy|pw>cloudns,nom,x443|qa>blogspot,nom|re>blogspot|review>ybo|rip>clan|ro>blogspot,nym,shop|rocks>lima-city,myddns,webspace|rs>blogspot,nom,ox|ru>adygeya,bashkiria,bir,blogspot,cbgcldmail>hb<com,dagestan,grozny,kalmykia,kustanai,marine,mordovia,msk,myjino>hosting>*<landing>*<spectrum>*<vps>*<<mytis,nalchik,net,nov,org,pp,pyatigorsk,ras,spb,vladikavkaz,vladimir|run>development,ravendb|science>ybo|se>blogspot,com|sg>blogspot|sh>hashbang,nowplatform>*<wedeploy|shop>barsy|si>blogspot,nom|site>barsy,byen,cyonplatformsh>*|sk>blogspot,nym|sn>blogspot|space>linkitools,uber,xs4all|st>noho,nom|su>abkhazia,adygeya,aktyubinsk,arkhangelsk,armenia,ashgabad,azerbaijan,balashov,bashkiria,bryansk,bukhara,chimkent,dagestan,east-kazakhstan,exnet,georgia,grozny,ivanovo,jambyl,kalmykia,kaluga,karacol,karaganda,karelia,khakassia,krasnodar,kurgan,kustanai,lenug,mangyshlak,mordovia,msk,murmansk,nalchik,navoi,north-kazakhstan,nov,nym,obninsk,penza,pokrovsk,sochi,spb,tashkent,termez,togliatti,troitsk,tselinograd,tula,tuva,vladikavkaz,vladimir,vologda|support>barsy|sx>nym|systems>knightpoint|td>blogspot|technology>co|th>online,shop|tj>nom|to>vpnplus|top>now-dns,ntdll|tr>com>blogspot|trade>ybo|tv>better-than,dyndns,on-the-web,worse-than|tw>blogspotcom>mymailer<nym,url|ua>biz,cc,co,inf,ltd,pp|ug>blogspot,nom|uk>barsyco>barsy,barsyonline,blogspotbytemark>dh,vm<gwiddle,nh-serv,no-ip,wellbeingzone<gov>homeoffice,service<org>glug,lug,lugs|us>cloudnsde>lib<drud,freeddns,golffan,is-by,land-4-sale,noip,pointto,stuff-4-sale|uy>com>blogspot<nom|vc>nom|vg>nom|vn>blogspot|ws>advisor>*<cloud66,dyndns,mypets|xyz>blogsite,crafting,fhapptelebit>*<zapto|za>co>blogspot|zone>limatriton>*"
};
}, function(e, t, n) {
"use strict";
function a(e) {
return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(t) {
return typeof t;
} : function e(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(e);
}
function r(e) {
return e && "string" == typeof e ? e.trim().toLowerCase() : null;
}
function i(e) {
var t = e && "object" === a(e) ? e : Object.create(null);
return "privateTlds" in t == 0 && (t.privateTlds = !1), "customTlds" in t && t.customTlds instanceof RegExp == 0 && (t.customTlds = new RegExp("\\.(" + t.customTlds.join("|") + ")$")), 
t;
}
t.url = r, t.options = i;
}, function(e, t, n) {
"use strict";
var a = "*", r = "!";
function i(e, t) {
for (var n = t.split(".").reverse(), i = [], o = e, s = 0; s < n.length; s++) {
var u = n[s], c;
if (o.has(a)) {
!1 === o.has(r + u) && i.push(u);
break;
}
if (!1 === o.has(u)) break;
i.push(u);
var l = o.get(u);
if (!0 === l) break;
o = l;
}
return 0 === i.length ? null : i.reverse().join(".");
}
e.exports = i;
}, function(e, t, n) {
"use strict";
var a = n(145), r = n(146), i = n(244);
function o() {
return a.extractLanguages()[0];
}
function s(e) {
r.setLocale(e), i.updateDomTranslation(), a.sendEvent("stonejs-locale-changed");
}
function u(e) {
r.addCatalogs(e.catalog);
}
document.addEventListener("stonejs-autoload-catalogs", u, !0), e.exports = {
LazyString: r.LazyString,
gettext: r.gettext,
lazyGettext: r.lazyGettext,
clearCatalogs: r.clearCatalogs,
addCatalogs: r.addCatalogs,
getLocale: r.getLocale,
setLocale: s,
listCatalogs: r.listCatalogs,
setBestMatchingLocale: r.setBestMatchingLocale,
findBestMatchingLocale: a.findBestMatchingLocale,
guessUserLanguage: o,
enableDomScan: i.enableDomScan,
updateDomTranslation: i.updateDomTranslation
};
}, function(e, t, n) {
"use strict";
var a = n(146).gettext, r = !1;
function i() {
if (r) {
var e = document.getElementsByTagName("*"), t = null, n = null, i = 0, o = 0;
for (i = 0; i < e.length; i++) if (e[i].hasAttribute("stonejs")) {
for (e[i].hasAttribute("stonejs-orig-string") || e[i].setAttribute("stonejs-orig-string", e[i].innerHTML), 
t = {}, n = e[i].attributes, o = 0; o < n.length; o++) 0 === n[o].name.indexOf("stonejs-param-") && (t[n[o].name.substr(14)] = n[o].value);
e[i].innerHTML = a(e[i].getAttribute("stonejs-orig-string"), t);
}
}
}
function o(e) {
r = Boolean(e), i();
}
e.exports = {
enableDomScan: o,
updateDomTranslation: i
};
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(246), r = n(8);
async function i(e) {
let t = {
method: "POST",
headers: {
"Access-Control-Allow-Origin": "*"
},
dataType: "json"
};
return a.default.ajax("https://poi.iqing.com/account/check_in/", Object.assign({}, t, {
data: {},
xhrFields: {
withCredentials: !0
}
})).then(function(e) {
return e && e.response && "success" == e.response.msg ? (r.default.log("success", e), 
e) : Promise.reject(a.AjaxError(e));
}).then(function(e) {
return !e || !0 !== e && !e.response ? Promise.reject(a.AjaxError(e)) : e;
}).catch(e => r.default.error(e));
}
t.signin = i, t.default = i;
}, function(e, t, n) {
"use strict";
const a = n(247);
e.exports = a;
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
});
const a = n(122), r = n(25);
function i(e) {
let t = Object.assign({
method: "GET"
}, e);
return t.xhrFields && Object.assign(t, t.xhrFields), t;
}
function o(e, n) {
if ((n = i(n)).url = e, n.data && "object" == typeof n.data && !(n.data instanceof FormData)) {
let e = new FormData();
for (let t in n.data) e.append(t, n.data[t]);
n.data = e;
}
return new r(function(e, a) {
t.GM_XHR(Object.assign({}, n, {
onload: function(t) {
e(t);
},
onerror: a
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
function s(e, t = Error) {
let n = new t(e);
return n.res = e, n;
}
t.GM_XHR = a.default.xmlhttpRequest, t.makeOptions = i, t.ajax = o, t.AjaxError = s, 
t.default = t;
}, function(e, t, n) {
var a, r;
!function(i, o) {
"use strict";
a = [ n(249) ], void 0 === (r = function(e) {
return o(i, e);
}.apply(t, a)) || (e.exports = r);
}("undefined" != typeof window ? window : this, function e(t, n) {
"use strict";
var a = t.jQuery, r = t.console;
function i(e, t) {
for (var n in t) e[n] = t[n];
return e;
}
var o = Array.prototype.slice;
function s(e) {
return Array.isArray(e) ? e : "object" == typeof e && "number" == typeof e.length ? o.call(e) : [ e ];
var t;
}
function u(e, t, n) {
if (!(this instanceof u)) return new u(e, t, n);
var o = e;
"string" == typeof e && (o = document.querySelectorAll(e)), o ? (this.elements = s(o), 
this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), 
n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred()), 
setTimeout(this.check.bind(this))) : r.error("Bad element for imagesLoaded " + (o || e));
}
u.prototype = Object.create(n.prototype), u.prototype.options = {}, u.prototype.getImages = function() {
this.images = [], this.elements.forEach(this.addElementImages, this);
}, u.prototype.addElementImages = function(e) {
"IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
var t = e.nodeType;
if (t && c[t]) {
for (var n = e.querySelectorAll("img"), a = 0; a < n.length; a++) {
var r = n[a];
this.addImage(r);
}
if ("string" == typeof this.options.background) {
var i = e.querySelectorAll(this.options.background);
for (a = 0; a < i.length; a++) {
var o = i[a];
this.addElementBackgroundImages(o);
}
}
}
};
var c = {
1: !0,
9: !0,
11: !0
};
function l(e) {
this.img = e;
}
function d(e, t) {
this.url = e, this.element = t, this.img = new Image();
}
return u.prototype.addElementBackgroundImages = function(e) {
var t = getComputedStyle(e);
if (t) for (var n = /url\((['"])?(.*?)\1\)/gi, a = n.exec(t.backgroundImage); null !== a; ) {
var r = a && a[2];
r && this.addBackground(r, e), a = n.exec(t.backgroundImage);
}
}, u.prototype.addImage = function(e) {
var t = new l(e);
this.images.push(t);
}, u.prototype.addBackground = function(e, t) {
var n = new d(e, t);
this.images.push(n);
}, u.prototype.check = function() {
var e = this;
function t(t, n, a) {
setTimeout(function() {
e.progress(t, n, a);
});
}
this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(e) {
e.once("progress", t), e.check();
}) : this.complete();
}, u.prototype.progress = function(e, t, n) {
this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [ this, e, t ]), 
this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), 
this.options.debug && r && r.log("progress: " + n, e, t);
}, u.prototype.complete = function() {
var e = this.hasAnyBroken ? "fail" : "done";
if (this.isComplete = !0, this.emitEvent(e, [ this ]), this.emitEvent("always", [ this ]), 
this.jqDeferred) {
var t = this.hasAnyBroken ? "reject" : "resolve";
this.jqDeferred[t](this);
}
}, l.prototype = Object.create(n.prototype), l.prototype.check = function() {
var e;
this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), 
this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), 
this.img.addEventListener("load", this), this.img.addEventListener("error", this), 
this.proxyImage.src = this.img.src);
}, l.prototype.getIsImageComplete = function() {
return this.img.complete && this.img.naturalWidth;
}, l.prototype.confirm = function(e, t) {
this.isLoaded = e, this.emitEvent("progress", [ this, this.img, t ]);
}, l.prototype.handleEvent = function(e) {
var t = "on" + e.type;
this[t] && this[t](e);
}, l.prototype.onload = function() {
this.confirm(!0, "onload"), this.unbindEvents();
}, l.prototype.onerror = function() {
this.confirm(!1, "onerror"), this.unbindEvents();
}, l.prototype.unbindEvents = function() {
this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), 
this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
}, d.prototype = Object.create(l.prototype), d.prototype.check = function() {
var e;
this.img.addEventListener("load", this), this.img.addEventListener("error", this), 
this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), 
this.unbindEvents());
}, d.prototype.unbindEvents = function() {
this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
}, d.prototype.confirm = function(e, t) {
this.isLoaded = e, this.emitEvent("progress", [ this, this.element, t ]);
}, u.makeJQueryPlugin = function(e) {
(e = e || t.jQuery) && ((a = e).fn.imagesLoaded = function(e, t) {
var n;
return new u(this, e, t).jqDeferred.promise(a(this));
});
}, u.makeJQueryPlugin(), u;
});
}, function(e, t, n) {
var a, r, i, o;
i = "undefined" != typeof window ? window : this, void 0 === (r = "function" == typeof (a = o = function() {
"use strict";
function e() {}
var t = e.prototype;
return t.on = function(e, t) {
if (e && t) {
var n = this._events = this._events || {}, a = n[e] = n[e] || [];
return -1 == a.indexOf(t) && a.push(t), this;
}
}, t.once = function(e, t) {
if (e && t) {
this.on(e, t);
var n = this._onceEvents = this._onceEvents || {}, a;
return (n[e] = n[e] || {})[t] = !0, this;
}
}, t.off = function(e, t) {
var n = this._events && this._events[e];
if (n && n.length) {
var a = n.indexOf(t);
return -1 != a && n.splice(a, 1), this;
}
}, t.emitEvent = function(e, t) {
var n = this._events && this._events[e];
if (n && n.length) {
n = n.slice(0), t = t || [];
for (var a = this._onceEvents && this._onceEvents[e], r = 0; r < n.length; r++) {
var i = n[r], o;
a && a[i] && (this.off(e, i), delete a[i]), i.apply(this, t);
}
return this;
}
}, t.allOff = function() {
delete this._events, delete this._onceEvents;
}, e;
}) ? a.call(t, n, t, e) : a) || (e.exports = r);
}, function(e, t, n) {
"use strict";
(function(e) {
function n(t = e.jQuery, n = e.window) {
!function(e) {
let a = function(e) {
let n, a;
if (t.isNumeric(e)) n = e; else if (Array.isArray(e) && e.length) for (let a of e) {
let e;
if (a && (e = t(a)) && e.length) {
n = e.offset().top;
break;
}
} else (a = t(e)) && a.length && (n = a.offset().top);
return n;
};
void 0 === e && (t.fn.scrollTo = function(e, t, n, r) {
let i = a(e);
return t && (i = (i || 0) + a(t)), void 0 !== i ? (r && this.finish(), this.scrollTop(i)) : this;
}), void 0 === t.scrollTo && (t.scrollTo = function(e, a, r, i) {
return t(n).scrollTo(e, a, r, i);
});
}(t.fn.scrollTo);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.makeJQueryPlugin = n, t.default = n;
}).call(this, n(1));
}, function(e, t, n) {
"use strict";
(function(t) {
e.exports.makeJQueryPlugin = ((e = t.jQuery, n = t.window) => {
e.fn.push = function(t, n) {
return Array.prototype.push.apply(this, e.makeArray(e(t, n).not(this))), this;
};
});
}).call(this, n(1));
}, function(e, t, n) {
var a = {
"./ux-tweak-sc": 13,
"./ux-tweak-sc/": 13,
"./ux-tweak-sc/_fake": 108,
"./ux-tweak-sc/_fake.js": 108,
"./ux-tweak-sc/acg/2dfan": 21,
"./ux-tweak-sc/acg/2dfan.js": 21,
"./ux-tweak-sc/acg/3dmgame": 22,
"./ux-tweak-sc/acg/3dmgame.js": 22,
"./ux-tweak-sc/acg/baidu/safecheck": 23,
"./ux-tweak-sc/acg/baidu/safecheck.js": 23,
"./ux-tweak-sc/acg/baidu/tieba": 24,
"./ux-tweak-sc/acg/baidu/tieba.js": 24,
"./ux-tweak-sc/acg/blog.reimu.net": 26,
"./ux-tweak-sc/acg/blog.reimu.net.js": 26,
"./ux-tweak-sc/acg/dlsite": 27,
"./ux-tweak-sc/acg/dlsite.js": 27,
"./ux-tweak-sc/acg/dmm": 116,
"./ux-tweak-sc/acg/dmm.js": 116,
"./ux-tweak-sc/acg/gamer.com.tw": 28,
"./ux-tweak-sc/acg/gamer.com.tw.js": 28,
"./ux-tweak-sc/acg/gamme": 29,
"./ux-tweak-sc/acg/gamme.js": 29,
"./ux-tweak-sc/acg/getchu": 30,
"./ux-tweak-sc/acg/getchu.js": 30,
"./ux-tweak-sc/acg/guildwars2/forum": 117,
"./ux-tweak-sc/acg/guildwars2/forum.2017": 31,
"./ux-tweak-sc/acg/guildwars2/forum.2017.js": 31,
"./ux-tweak-sc/acg/guildwars2/forum.js": 117,
"./ux-tweak-sc/acg/guildwars2/wiki": 32,
"./ux-tweak-sc/acg/guildwars2/wiki.js": 32,
"./ux-tweak-sc/acg/gw2bltc": 33,
"./ux-tweak-sc/acg/gw2bltc.js": 33,
"./ux-tweak-sc/acg/movie/u2mtv": 34,
"./ux-tweak-sc/acg/movie/u2mtv.js": 34,
"./ux-tweak-sc/acg/movie/yahoo": 35,
"./ux-tweak-sc/acg/movie/yahoo.js": 35,
"./ux-tweak-sc/acg/qoo-app": 36,
"./ux-tweak-sc/acg/qoo-app.js": 36,
"./ux-tweak-sc/acg/qtfy.eu": 37,
"./ux-tweak-sc/acg/qtfy.eu.js": 37,
"./ux-tweak-sc/acg/reddit": 38,
"./ux-tweak-sc/acg/reddit.js": 38,
"./ux-tweak-sc/acg/vsgames": 39,
"./ux-tweak-sc/acg/vsgames.js": 39,
"./ux-tweak-sc/adult/up01": 40,
"./ux-tweak-sc/adult/up01.js": 40,
"./ux-tweak-sc/anti-adblock/epinv": 41,
"./ux-tweak-sc/anti-adblock/epinv.js": 41,
"./ux-tweak-sc/art/danbooru.donmai.us": 42,
"./ux-tweak-sc/art/danbooru.donmai.us.js": 42,
"./ux-tweak-sc/art/deviantart": 43,
"./ux-tweak-sc/art/deviantart.js": 43,
"./ux-tweak-sc/art/pixiv": 44,
"./ux-tweak-sc/art/pixiv.js": 44,
"./ux-tweak-sc/art/pixivision": 46,
"./ux-tweak-sc/art/pixivision.js": 46,
"./ux-tweak-sc/bbs/ptt": 47,
"./ux-tweak-sc/bbs/ptt.js": 47,
"./ux-tweak-sc/blog/blog.xuite": 48,
"./ux-tweak-sc/blog/blog.xuite.js": 48,
"./ux-tweak-sc/blog/dulfy": 49,
"./ux-tweak-sc/blog/dulfy.js": 49,
"./ux-tweak-sc/blog/jianshu": 50,
"./ux-tweak-sc/blog/jianshu.js": 50,
"./ux-tweak-sc/blog/juejin.im": 51,
"./ux-tweak-sc/blog/juejin.im.js": 51,
"./ux-tweak-sc/blog/oneapm": 52,
"./ux-tweak-sc/blog/oneapm.js": 52,
"./ux-tweak-sc/blog/steachs": 53,
"./ux-tweak-sc/blog/steachs.js": 53,
"./ux-tweak-sc/code/gitee": 54,
"./ux-tweak-sc/code/gitee.js": 54,
"./ux-tweak-sc/code/github": 55,
"./ux-tweak-sc/code/github.js": 55,
"./ux-tweak-sc/code/greasyfork": 56,
"./ux-tweak-sc/code/greasyfork.js": 56,
"./ux-tweak-sc/code/npmjs": 57,
"./ux-tweak-sc/code/npmjs.js": 57,
"./ux-tweak-sc/code/segmentfault": 58,
"./ux-tweak-sc/code/segmentfault.js": 58,
"./ux-tweak-sc/code/sourceforge": 59,
"./ux-tweak-sc/code/sourceforge.js": 59,
"./ux-tweak-sc/code/stackoverflow": 60,
"./ux-tweak-sc/code/stackoverflow.js": 60,
"./ux-tweak-sc/comic/999comic": 61,
"./ux-tweak-sc/comic/999comic.js": 61,
"./ux-tweak-sc/comic/alphapolis.co.jp": 62,
"./ux-tweak-sc/comic/alphapolis.co.jp.js": 62,
"./ux-tweak-sc/comic/backup/lhscan": 63,
"./ux-tweak-sc/comic/backup/lhscan.js": 63,
"./ux-tweak-sc/comic/book.dmm.co.jp": 64,
"./ux-tweak-sc/comic/book.dmm.co.jp.js": 64,
"./ux-tweak-sc/comic/comic-walker": 65,
"./ux-tweak-sc/comic/comic-walker.js": 65,
"./ux-tweak-sc/comic/comico": 66,
"./ux-tweak-sc/comic/comico.js": 66,
"./ux-tweak-sc/comic/dm5": 67,
"./ux-tweak-sc/comic/dm5.js": 67,
"./ux-tweak-sc/comic/dmzj": 68,
"./ux-tweak-sc/comic/dmzj.js": 68,
"./ux-tweak-sc/comic/exhentai": 69,
"./ux-tweak-sc/comic/exhentai.js": 69,
"./ux-tweak-sc/comic/ikanman": 70,
"./ux-tweak-sc/comic/ikanman.js": 70,
"./ux-tweak-sc/comic/lhscans": 71,
"./ux-tweak-sc/comic/lhscans.js": 71,
"./ux-tweak-sc/comic/manben": 72,
"./ux-tweak-sc/comic/manben.js": 72,
"./ux-tweak-sc/comic/manhuaren": 73,
"./ux-tweak-sc/comic/manhuaren.js": 73,
"./ux-tweak-sc/comic/nhentai": 74,
"./ux-tweak-sc/comic/nhentai.js": 74,
"./ux-tweak-sc/comic/rawdevart": 75,
"./ux-tweak-sc/comic/rawdevart.js": 75,
"./ux-tweak-sc/comic/wnacg": 76,
"./ux-tweak-sc/comic/wnacg.js": 76,
"./ux-tweak-sc/comic/yoedge": 77,
"./ux-tweak-sc/comic/yoedge.js": 77,
"./ux-tweak-sc/content/farm/fun01.cc": 78,
"./ux-tweak-sc/content/farm/fun01.cc.js": 78,
"./ux-tweak-sc/dict/edu/cwn.ling.sinica": 79,
"./ux-tweak-sc/dict/edu/cwn.ling.sinica.js": 79,
"./ux-tweak-sc/dict/edu/dict.revised.moe": 80,
"./ux-tweak-sc/dict/edu/dict.revised.moe.js": 80,
"./ux-tweak-sc/global/discuz": 16,
"./ux-tweak-sc/global/discuz.js": 16,
"./ux-tweak-sc/global/mediawiki": 101,
"./ux-tweak-sc/global/mediawiki.js": 101,
"./ux-tweak-sc/global/pagination": 103,
"./ux-tweak-sc/global/pagination.js": 103,
"./ux-tweak-sc/global/pagination/page": 104,
"./ux-tweak-sc/global/pagination/page.js": 104,
"./ux-tweak-sc/global/pagination/pagination.active": 105,
"./ux-tweak-sc/global/pagination/pagination.active.js": 105,
"./ux-tweak-sc/global/pagination/srp_pagination": 106,
"./ux-tweak-sc/global/pagination/srp_pagination.js": 106,
"./ux-tweak-sc/global/social": 107,
"./ux-tweak-sc/global/social.js": 107,
"./ux-tweak-sc/global/video": 102,
"./ux-tweak-sc/global/video.js": 102,
"./ux-tweak-sc/google/drive": 118,
"./ux-tweak-sc/google/drive.js": 118,
"./ux-tweak-sc/google/search": 100,
"./ux-tweak-sc/google/search.js": 100,
"./ux-tweak-sc/index": 13,
"./ux-tweak-sc/index.js": 13,
"./ux-tweak-sc/index.user": 20,
"./ux-tweak-sc/index.user.js": 20,
"./ux-tweak-sc/lib/demo": 119,
"./ux-tweak-sc/lib/demo.js": 119,
"./ux-tweak-sc/lib/metadata": 120,
"./ux-tweak-sc/lib/metadata.js": 120,
"./ux-tweak-sc/novel/esjzone": 81,
"./ux-tweak-sc/novel/esjzone.js": 81,
"./ux-tweak-sc/novel/iqing": 121,
"./ux-tweak-sc/novel/iqing.js": 121,
"./ux-tweak-sc/novel/lightnovel.cn": 82,
"./ux-tweak-sc/novel/lightnovel.cn.js": 82,
"./ux-tweak-sc/novel/masiro.moe": 83,
"./ux-tweak-sc/novel/masiro.moe.js": 83,
"./ux-tweak-sc/novel/syosetu": 84,
"./ux-tweak-sc/novel/syosetu.js": 84,
"./ux-tweak-sc/novel/wenku8": 85,
"./ux-tweak-sc/novel/wenku8.js": 85,
"./ux-tweak-sc/other/jetbrains/jetbrains": 86,
"./ux-tweak-sc/other/jetbrains/jetbrains.js": 86,
"./ux-tweak-sc/p2p/wetransfer": 87,
"./ux-tweak-sc/p2p/wetransfer.js": 87,
"./ux-tweak-sc/shop/pchome": 88,
"./ux-tweak-sc/shop/pchome.js": 88,
"./ux-tweak-sc/shop/post/kerrytj": 89,
"./ux-tweak-sc/shop/post/kerrytj.js": 89,
"./ux-tweak-sc/shop/post/post/gov/tw/pstmail": 90,
"./ux-tweak-sc/shop/post/post/gov/tw/pstmail.js": 90,
"./ux-tweak-sc/shop/yahoo/buy": 91,
"./ux-tweak-sc/shop/yahoo/buy.js": 91,
"./ux-tweak-sc/shop/yahoo/mall": 92,
"./ux-tweak-sc/shop/yahoo/mall.js": 92,
"./ux-tweak-sc/social/facebook": 93,
"./ux-tweak-sc/social/facebook.js": 93,
"./ux-tweak-sc/social/weibo": 94,
"./ux-tweak-sc/social/weibo.js": 94,
"./ux-tweak-sc/torrent/dmhy": 95,
"./ux-tweak-sc/torrent/dmhy.js": 95,
"./ux-tweak-sc/torrent/jandown": 96,
"./ux-tweak-sc/torrent/jandown.js": 96,
"./ux-tweak-sc/torrent/nyaa": 97,
"./ux-tweak-sc/torrent/nyaa.js": 97,
"./ux-tweak-sc/wiki/moegirl": 98,
"./ux-tweak-sc/wiki/moegirl.js": 98,
"./ux-tweak-sc/wiki/wikipedia": 99,
"./ux-tweak-sc/wiki/wikipedia.js": 99
};
function r(e) {
var t = i(e);
return n(t);
}
function i(e) {
if (!n.o(a, e)) {
var t = new Error("Cannot find module '" + e + "'");
throw t.code = "MODULE_NOT_FOUND", t;
}
return a[e];
}
r.keys = function e() {
return Object.keys(a);
}, r.resolve = i, e.exports = r, r.id = 252;
} ]);