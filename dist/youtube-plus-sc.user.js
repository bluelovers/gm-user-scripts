// ==UserScript==
// @name		youtube-plus-sc
// @name:en		youtube-plus-sc
// @name:zh		youtube-plus-sc
// @namespace	bluelovers
// @author		bluelovers
//
// @description		youtube-plus-sc 各種網站 UX 優化 與 搭配某些插件/行為時的簡化動作
// @description:en	youtube-plus-sc 各種網站 UX 優化 與 搭配某些插件/行為時的簡化動作
// @description:zh	youtube-plus-sc 各種網站 UX 優化 與 搭配某些插件/行為時的簡化動作
//
// @version		4.5.0
//
// @grant		GM.xmlhttpRequest
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
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/youtube-plus-sc.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/youtube-plus-sc.user.js
//
// @include		*://www.youtube.com/*
// @include		*://youtube.com/*
// @include		https://www.youtube.com/my_videos*
// @include		http*://www.youtube.com/upload*
//
// @exclude		http*://*.youtube.com/embed/*
// @exclude		http*://*.youtube.com/v/*
// @exclude		http*://creatoracademy.youtube.com/*
// @exclude		http*://artists.youtube.com/*
// @exclude		http*://kids.youtube.com/*
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
}, n.p = "", n(n.s = 7);
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
const i = n(20), a = i.noConflict(!0);
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
function r(e, t, n, r) {
var o, i = !1, a = 0;
function s() {
o && clearTimeout(o);
}
function u() {
s(), i = !0;
}
function l() {
var u = this, l = Date.now() - a, c = arguments;
function f() {
a = Date.now(), n.apply(u, c);
}
function p() {
o = void 0;
}
i || (r && !o && f(), s(), void 0 === r && l > e ? f() : !0 !== t && (o = setTimeout(r ? p : f, void 0 === r ? e - l : e)));
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
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(29), o = r.Minimatch;
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
t.match = i, t.option = a, t.auto = s, t.matchChrome = u;
}, function(e, t, n) {
"use strict";
(function(e) {
function n(n, r, o) {
return e.ajax({
url: `${t.yt_url}/watch_inlineedit_ajax?action_save_video=1`,
method: "POST",
data: {
session_token: o,
video_id: n,
field_myvideo_title: r.toString().trim()
}
}).promise().then(function(e) {
return !e || e.errors && e.errors.length ? Promise.reject(e) : e;
});
}
function r() {
if (e('style[scope="ytd-app"], ytd-app').length) return !0;
}
function o() {
return ("undefined" != typeof unsafeWindow ? unsafeWindow : window).yt.config_.XSRF_TOKEN;
}
Object.defineProperty(t, "__esModule", {
value: !0
}), t.yt_url = "https://www.youtube.com", t.ajaxSetTitle = n, t.isMaterial = r, 
t.yt_token = o, t.default = t;
}).call(this, n(0).default);
}, function(e, t, n) {
e.exports.id = "youtube-plus-sc", e.exports.version = "", e.exports.name = "youtube-plus-sc", 
e.exports.name_en = "youtube-plus-sc", e.exports.name_ja = "youtube-plus-sc", e.exports.desc = "", 
e.exports.desc_en = "", e.exports.desc_ja = "", e.exports.namespace = "", e.exports.author = "", 
e.exports.icon = "", e.exports.list = [ "youtube/2016/my_video", "youtube/2016/upload", "global/script" ], 
e.exports.list_disable = [ "youtube/2016/watch", "youtube/2016" ], e.exports._lib = (() => {
n(8), n(9), n(10);
}), e.exports.metadata = {}, e.exports.metadata.include = [ "*://www.youtube.com/*", "*://youtube.com/*", "https://www.youtube.com/my_videos*", "http*://www.youtube.com/upload*" ], 
e.exports.metadata.match = [], e.exports.metadata.exclude = [ "http*://*.youtube.com/embed/*", "http*://*.youtube.com/v/*", "http*://creatoracademy.youtube.com/*", "http*://artists.youtube.com/*", "http*://kids.youtube.com/*" ], 
e.exports.metadata.grant = [ "GM.xmlhttpRequest", "GM_xmlhttpRequest", "unsafeWindow" ], 
e.exports.list_script = [ "global/script" ], e.exports.current = [], e.exports.default = e.exports;
}, function(e, t, n) {
"use strict";
(function(r) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const o = n(11), i = n(6);
e.exports.id = i.id, e.exports.name = i.name, e.exports.indexScript = i, o.run(e.exports.id, e.exports, r, function(e, t, n, r, i, a) {
o.init(e, t, n, r, i, a);
});
}).call(this, n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r, o) {
let i = {
metadata: {
include: [ "https://www.youtube.com/my_videos*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let o;
return !!(o = n(4).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const i = n(14), {debounce: a} = n(2), {throttle: s} = n(2), u = n(3);
n(15).ajaxSetup();
const l = n(5);
r.GM_addStyle([ "#creator-page #creator-page-content .vm-list-view .vm-video-item-content-primary { width: 51%; min-width: 470px; }", "#creator-page #creator-page-content .vm-list-view .vm-video-item-content-secondary { width: 51%; min-width: 470px; margin-left: 1%; }", ".vm-list-view .vm-video-title-container { overflow: visible; }", ".vm-list-view .vm-video-title-badges { white-space: normal; }", ".vm-video-title-badges .btn-edit { opacity: 0;/* background-color: red; padding: 0px 5px; color: #fff; */ }", ".vm-video-title:hover .vm-video-title-badges .btn-edit { display: inline-block; visibility: visible; opacity: 1; }" ]);
let c = o("#vm-video-list-container");
o("#vm-video-list-container").on("DOMNodeInserted", a(100, function() {
o("#vm-playlist-video-list-ol > li").each(function() {
let e = o(this), t = o(".vm-video-title .vm-video-title-container", e), n = t.attr("id").replace(/^title_/, "");
if (n && (o("a.vm-video-title-content:eq(0), a.yt-fluid-thumb-link", e).attr("href", function(e, t) {
return t.replace(/^.*\/?watch\?v=/, "https://youtu.be/");
}).attr("target", "_blank"), o(".vm-video-side-content-left-container a, a.vm-playlist-edit-video, a.yt-fluid-thumb-link", e).attr("target", "_blank"), 
o(".edit-expand-menu-button .yt-uix-button-menu-item[href][onclick]", e).not(".vm-video-edit-menu-delete, .menu-item-top-divider, .vm-download-mp4").attr("onclick", function(e, t) {
return -1 != t.indexOf("window.location.href") ? ";window.open(this.getAttribute('href'), '_blank');return false;" : t;
}), !o(".vm-video-title-badges .btn-edit", e).length)) {
let r = o('<span class="yt-badge yt-uix-button-primary btn-edit">Edit</span>').appendTo(o(".vm-video-title-badges", e).after('<span class="" style="display: inline-block;min-width: 40px;"></span>'));
t.addClass("watch-title watch-editable");
let a = o(".vm-video-title-content", t);
r.on("click", function() {
t.hide(), o(".vm-video-title .edit-form", e).remove(), o(".vm-video-title", e).append(function() {
var r = o('\n\t\t\t\t\t\t\t\t\t\t\t\t<form class="edit-form">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=" yt-uix-form-input-container yt-uix-form-input-text-container "><input class="yt-uix-form-input-text " name="field_myvideo_title"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="form-buttons">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary" type="submit" onclick=";return true;"><span class="yt-uix-button-content">儲存</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="reset" onclick=";return false;"><span class="yt-uix-button-content">取消</span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="yt-alert yt-alert-naked yt-alert-error  ">  <div class="yt-alert-icon">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="icon master-sprite yt-sprite"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="yt-alert-content" role="alert"></div></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t');
return o(':input[name="field_myvideo_title"]', r).val(a.text()), o(":reset", r).on("click", function(e) {
i(e), r.triggerHandler("reset");
}), r.on("submit", async function(e) {
i(e);
let t = o(':input[name="field_myvideo_title"]', r).val();
if (!t) return;
let s = await l.ajaxSetTitle(n, t, l.yt_token()), u = o("<div/>").append(s.html.title);
a.text(u.find("#eow-title").attr("title")), r.triggerHandler("reset");
}).on("reset", function(n) {
i(n), o(".vm-video-title .edit-form", e).remove(), t.show();
}), r;
});
});
}
});
})), o('div[data-ng-show="ctrl.showLoading"]:visible', c).length || o("#vm-video-list-container").triggerHandler("DOMNodeInserted");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let r = o(n);
return r = r.add([].join());
}
};
e.exports = i;
}).call(this, n(1), n(12), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r) {
let o = {
metadata: {
include: [ "http*://www.youtube.com/upload*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let o;
return !!(o = n(4).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const {debounce: o} = n(2), i = n(3);
r(window).on("load.ready", o(1500, function() {
r("#uploader-progress").one("DOMNodeInserted", o(100, function() {
i([ "a#my_videos" ].join(",")).prop("target", "_blank");
}));
})).triggerHandler("load.ready");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let o = r(n);
return o = o.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r) {
let o = {
priority: 100,
script: !0,
metadata: {
include: [],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(e = t._url_obj) {
let n;
return 2;
},
async main(e = t._url_obj) {
const {debounce: o} = n(2), i = n(5), a = n(3);
a([ '.creator-sidebar-item-link a[href*="view_all_playlists"], a.vm-playlist-edit-button, .guide-channel a:has(.guide-my-channel-icon), .vm-playlist-edit-video', "#channel-info", 'a[is="yt-endpoint"], .yt-simple-endpoint', '#meta-contents a[is="yt-endpoint"], #meta-contents .yt-simple-endpoint', "#watch7-creator-bar a", "#watch-description-extras a", 'a[href*="/view_all_playlists"]' ].join(",")).prop("target", "_blank"), 
i.isMaterial() ? r("#masthead-container #end #buttons").prepend('<a href="/my_videos?o=U" id="my_videos"><button is="paper-icon-button-light" class="style-scope ytd-masthead" aria-label="影片管理員" style="\twidth: auto;">影片管理員</button></a>') : (r("#masthead-positioner #yt-masthead-user").prepend('<a href="/my_videos?o=U" id="my_videos" class="yt-uix-button yt-uix-button-default yt-uix-button-size-default" style="margin-right: 15px;"><span class="yt-uix-button-content">影片管理員</span></a>'), 
r("#appbar-guide-menu").on("DOMNodeInserted", o(100, function() {}))), e.path.match(/view_all_playlists/) && r("#vm-video-list-container a[href*=playlist]").attr("href", function(e, t) {
return t + "&disable_polymer=true";
});
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let o = r(n);
return o = o.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(e, r, o) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(21), a = n(12);
t.greasemonkey = a.default;
const s = n(22);
function u(t, n, o, i) {
let a = async () => {
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
await s.registerGlobalMenu(t, n);
} catch (e) {
console.error(t, e.message, e.stack);
}
};
r(() => {
a();
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
return n(28)(`./${e}/${t}`);
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
let u = !0, l, c;
console.time(o), console.group(o), l = await r.test(e._url_obj), a.default.info(n.id, s, "test", l), 
i && 2 !== l ? a.default.info(n.id, s, "break:test", l) : (l && (1 == (c = await r.main(e._url_obj)) || void 0 === c ? (c = !0, 
a.default.info(n.id, s, "matched", c, u)) : a.default.debug(n.id, s, "main", c), 
c && (u = !1, l && !0 !== l && (u = !0), a.default.debug(n.id, s, "chk", c, u, l))), 
u && !l || (a.default.debug(n.id, s, "current:push", c, u, l), n.current.push({
name: o,
name_id: s,
lib: r
}))), console.groupEnd(o), console.timeEnd(o), i || u || (a.default.debug(n.id, s, "break", c, u, l), 
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
let s = !0, u, l;
if (u = await n.test(e._url_obj), a.default.info(t.id, i, "test", u), u) return l = await n.main(e._url_obj), 
a.default.debug(t.id, i, "main", l), n;
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
function o(e) {
for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
}
Object.defineProperty(t, "__esModule", {
value: !0
}), o(n(13));
const i = n(13);
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
t.openInTabBackground = p, t.default = t;
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
}), t.GM_addStyle = r, t.default = t;
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
open(e, t, n, r, o) {
this.abort(), this._params.method = e.toUpperCase(), this._params.url = t, this._params.synchronous = !n, 
this._params.user = r, this._params.password = o;
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
(function(t, r) {
let o = {
disable: 2,
metadata: {
include: [ "*://www.youtube.com/*", "*://youtube.com/*" ],
match: [],
nomatch: [],
exclude: [ "http*://*.youtube.com/embed/*", "http*://*.youtube.com/v/*", "http*://creatoracademy.youtube.com/*", "http*://artists.youtube.com/*", "http*://kids.youtube.com/*" ],
grant: []
},
test(r = t._url_obj) {
let o;
return !!(o = n(4).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const r = n(3);
r([].join(",")).prop("target", "_blank");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let o = r(n);
return o = o.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
value: !0
}), t.desc = "", t.grant = [ "GM_xmlhttpRequest", "unsafeWindow" ], t.metadata = "// ==UserScript==\n// @name\t\t<%= index.name %>\n// @name:en\t\t<%= index.name_en %>\n// @name:zh\t\t<%= index.name %>\n// @namespace\t<%= index.namespace %>\n// @author\t\t<%= index.author %>\n//\n// @description\t\t<%= index.desc %>\n// @description:en\t<%= index.desc_en %>\n// @description:zh\t<%= index.desc %>\n//\n// @version\t\t<%= pkg.version %>\n//\n// @grant\t\t<%= index.grant %>\n// g_r_a_n_tnone\n//\n// @icon\t\t<%= index.icon %>\n//\n// @noframes\n// @encoding\tutf-8\n//\n// @homepageURL\thttps://github.com/bluelovers/gm-user-scripts\n// @supportURL\thttps://github.com/bluelovers/gm-user-scripts/issues\n// @downloadURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n// @updateURL\thttps://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js\n//\n// @include\t\t<%= index.include %>\n//\n// @exclude\t\t<%= index.exclude %>\n//\n// ==/UserScript==\n", 
t.default = t.metadata;
}, function(e, t, n) {
"use strict";
(function(t, r) {
let o = {
disable: !0,
priority: 300,
metadata: {
include: [],
match: [ "*://www.youtube.com/*", "*://youtube.com/*" ],
nomatch: [ "https://www.youtube.com/my_videos*" ],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let o;
return !!(o = n(4).auto(r.source, e.exports));
},
async main(e = t._url_obj) {
const o = n(14), {debounce: i} = n(2), {throttle: a} = n(2), s = n(3);
s([].join(",")).prop("target", "_blank"), n(15).ajaxSetup();
const u = n(5);
r(window).on("load.ready", function() {
e.path.match(/my_videos/);
}).triggerHandler("load.ready"), r("body");
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let o = r(n);
return o = o.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(0).default);
}, function(e, t, n) {
"use strict";
(function(t, r) {
let o = {
disable: !0,
metadata: {
include: [ "http*://www.youtube.com/watch*" ],
match: [],
nomatch: [],
exclude: [],
grant: []
},
test(r = t._url_obj) {
let o;
return !!(o = n(4).auto(r.source, e.exports) && !n(5).isMaterial());
},
async main(e = t._url_obj) {
const {debounce: r} = n(2), o = n(5), i = n(3);
},
adblock(e = t._url_obj) {},
clearly(e = t._url_obj, n = null) {
let o = r(n);
return o = o.add([].join());
}
};
e.exports = o;
}).call(this, n(1), n(0).default);
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
var a = [], s = n.document, u = Object.getPrototypeOf, l = a.slice, c = a.concat, f = a.push, p = a.indexOf, d = {}, h = d.toString, g = d.hasOwnProperty, m = g.toString, y = m.call(Object), v = {}, b = function(e) {
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
var r, o, i = (n = n || s).createElement("script");
if (i.text = e, t) for (r in w) (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
n.head.appendChild(i).parentNode.removeChild(i);
}
function j(e) {
return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e;
}
var T = "3.4.1", C = function(e, t) {
return new C.fn.init(e, t);
}, M = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function k(e) {
var t = !!e && "length" in e && e.length, n = j(e);
return !b(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
}
C.fn = C.prototype = {
jquery: T,
constructor: C,
length: 0,
toArray: function() {
return l.call(this);
},
get: function(e) {
return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
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
sort: a.sort,
splice: a.splice
}, C.extend = C.fn.extend = function() {
var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), 
s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], 
"__proto__" !== t && a !== r && (l && r && (C.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], 
i = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, a[t] = C.extend(l, i, r)) : void 0 !== r && (a[t] = r));
return a;
}, C.extend({
expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
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
if (k(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
return e;
},
trim: function(e) {
return null == e ? "" : (e + "").replace(M, "");
},
makeArray: function(e, t) {
var n = t || [];
return null != e && (k(Object(e)) ? C.merge(n, "string" == typeof e ? [ e ] : e) : f.call(n, e)), 
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
for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
return r;
},
map: function(e, t, n) {
var r, o, i = 0, a = [];
if (k(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o); else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
return c.apply([], a);
},
guid: 1,
support: v
}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = a[Symbol.iterator]), 
C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
d["[object " + t + "]"] = t.toLowerCase();
});
var A = function(e) {
var t, n, r, o, i, a, s, u, l, c, f, p, d, h, g, m, y, v, b, x = "sizzle" + 1 * new Date(), w = e.document, _ = 0, j = 0, T = ue(), C = ue(), M = ue(), k = ue(), A = function(e, t) {
return e === t && (f = !0), 0;
}, E = {}.hasOwnProperty, S = [], N = S.pop, D = S.push, O = S.push, q = S.slice, L = function(e, t) {
for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
return -1;
}, $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", G = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", H = "\\[" + G + "*(" + R + ")(?:" + G + "*([*^$|!~]?=)" + G + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + G + "*\\]", P = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", I = new RegExp(G + "+", "g"), W = new RegExp("^" + G + "+|((?:^|[^\\\\])(?:\\\\.)*)" + G + "+$", "g"), F = new RegExp("^" + G + "*," + G + "*"), B = new RegExp("^" + G + "*([>+~]|" + G + ")" + G + "*"), U = new RegExp(G + "|>"), z = new RegExp(P), Q = new RegExp("^" + R + "$"), V = {
ID: new RegExp("^#(" + R + ")"),
CLASS: new RegExp("^\\.(" + R + ")"),
TAG: new RegExp("^(" + R + "|[*])"),
ATTR: new RegExp("^" + H),
PSEUDO: new RegExp("^" + P),
CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + G + "*(even|odd|(([+-]|)(\\d*)n|)" + G + "*(?:([+-]|)" + G + "*(\\d+)|))" + G + "*\\)|)", "i"),
bool: new RegExp("^(?:" + $ + ")$", "i"),
needsContext: new RegExp("^" + G + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + G + "*((?:-\\d)?\\d*)" + G + "*\\)|)(?=[^-]|$)", "i")
}, X = /HTML$/i, Y = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + G + "?|(" + G + ")|.)", "ig"), ne = function(e, t, n) {
var r = "0x" + t - 65536;
return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
}, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
}, ie = function() {
p();
}, ae = xe(function(e) {
return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
}, {
dir: "parentNode",
next: "legend"
});
try {
O.apply(S = q.call(w.childNodes), w.childNodes), S[w.childNodes.length].nodeType;
} catch (t) {
O = {
apply: S.length ? function(e, t) {
D.apply(e, q.call(t));
} : function(e, t) {
for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
e.length = n - 1;
}
};
}
function se(e, t, r, o) {
var i, s, l, c, f, h, y, v = t && t.ownerDocument, _ = t ? t.nodeType : 9;
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
if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
if (y = e, v = t, 1 === _ && U.test(e)) {
for ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = x), 
s = (h = a(e)).length; s--; ) h[s] = "#" + c + " " + be(h[s]);
y = h.join(","), v = ee.test(e) && ye(t.parentNode) || t;
}
try {
return O.apply(r, v.querySelectorAll(y)), r;
} catch (t) {
k(e, !0);
} finally {
c === x && t.removeAttribute("id");
}
}
}
return u(e.replace(W, "$1"), t, r, o);
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
return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
};
}
function me(e) {
return le(function(t) {
return t = +t, le(function(n, r) {
for (var o, i = e([], n.length, t), a = i.length; a--; ) n[o = i[a]] && (n[o] = !(r[o] = n[o]));
});
});
}
function ye(e) {
return e && void 0 !== e.getElementsByTagName && e;
}
for (t in n = se.support = {}, i = se.isXML = function(e) {
var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
return !X.test(t || n && n.nodeName || "HTML");
}, p = se.setDocument = function(e) {
var t, o, a = e ? e.ownerDocument || e : w;
return a !== d && 9 === a.nodeType && a.documentElement && (h = (d = a).documentElement, 
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
e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + G + "*(?:''|\"\")"), 
e.querySelectorAll("[selected]").length || m.push("\\[" + G + "*(?:value|" + $ + ")"), 
e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), 
e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]");
}), ce(function(e) {
e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var t = d.createElement("input");
t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + G + "*[*^$|!~]?="), 
2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), 
h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), 
e.querySelectorAll("*,:x"), m.push(",.*:");
})), (n.matchesSelector = K.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", P);
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
return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && b(w, e) ? -1 : t === d || t.ownerDocument === w && b(w, t) ? 1 : c ? L(c, e) - L(c, t) : 0 : 4 & r ? -1 : 1);
} : function(e, t) {
if (e === t) return f = !0, 0;
var n, r = 0, o = e.parentNode, i = t.parentNode, a = [ e ], s = [ t ];
if (!o || !i) return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : c ? L(c, e) - L(c, t) : 0;
if (o === i) return pe(e, t);
for (n = e; n = n.parentNode; ) a.unshift(n);
for (n = t; n = n.parentNode; ) s.unshift(n);
for (;a[r] === s[r]; ) r++;
return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
}), d;
}, se.matches = function(e, t) {
return se(e, null, null, t);
}, se.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !k[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) try {
var r = v.call(e, t);
if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
} catch (e) {
k(t, !0);
}
return 0 < se(t, d, null, [ e ]).length;
}, se.contains = function(e, t) {
return (e.ownerDocument || e) !== d && p(e), b(e, t);
}, se.attr = function(e, t) {
(e.ownerDocument || e) !== d && p(e);
var o = r.attrHandle[t.toLowerCase()], i = o && E.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
}, se.escape = function(e) {
return (e + "").replace(re, oe);
}, se.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, se.uniqueSort = function(e) {
var t, r = [], o = 0, i = 0;
if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
for (;t = e[i++]; ) t === e[i] && (o = r.push(i));
for (;o--; ) e.splice(r[o], 1);
}
return c = null, e;
}, o = se.getText = function(e) {
var t, n = "", r = 0, i = e.nodeType;
if (i) {
if (1 === i || 9 === i || 11 === i) {
if ("string" == typeof e.textContent) return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
} else if (3 === i || 4 === i) return e.nodeValue;
} else for (;t = e[r++]; ) n += o(t);
return n;
}, (r = se.selectors = {
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
return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), 
e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), 
e;
},
PSEUDO: function(e) {
var t, n = !e[6] && e[2];
return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
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
var t = T[e + " "];
return t || (t = new RegExp("(^|" + G + ")" + e + "(" + G + "|$)")) && T(e, function(e) {
return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
});
},
ATTR: function(e, t, n) {
return function(r) {
var o = se.attr(r, e);
return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(I, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
};
},
CHILD: function(e, t, n, r, o) {
var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
return 1 === r && 0 === o ? function(e) {
return !!e.parentNode;
} : function(t, n, u) {
var l, c, f, p, d, h, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s, b = !1;
if (m) {
if (i) {
for (;g; ) {
for (p = t; p = p[g]; ) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
h = g = "only" === e && !h && "nextSibling";
}
return !0;
}
if (h = [ a ? m.firstChild : m.lastChild ], a && v) {
for (b = (d = (l = (c = (f = (p = m)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === _ && l[1]) && l[2], 
p = d && m.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || h.pop(); ) if (1 === p.nodeType && ++b && p === t) {
c[e] = [ _, d, b ];
break;
}
} else if (v && (b = d = (l = (c = (f = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === _ && l[1]), 
!1 === b) for (;(p = ++d && p && p[g] || (b = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && ((c = (f = p[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ _, b ]), 
p !== t)); ) ;
return (b -= o) === r || b % r == 0 && 0 <= b / r;
}
};
},
PSEUDO: function(e, t) {
var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
return o[x] ? o(t) : 1 < o.length ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
for (var r, i = o(e, t), a = i.length; a--; ) e[r = L(e, i[a])] = !(n[r] = i[a]);
}) : function(e) {
return o(e, 0, n);
}) : o;
}
},
pseudos: {
not: le(function(e) {
var t = [], n = [], r = s(e.replace(W, "$1"));
return r[x] ? le(function(e, t, n, o) {
for (var i, a = r(e, null, o, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
}) : function(e, o, i) {
return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
};
}),
has: le(function(e) {
return function(t) {
return 0 < se(e, t).length;
};
}),
contains: le(function(e) {
return e = e.replace(te, ne), function(t) {
return -1 < (t.textContent || o(t)).indexOf(e);
};
}),
lang: le(function(e) {
return Q.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), 
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
var r = t.dir, o = t.next, i = o || r, a = n && "parentNode" === i, s = j++;
return t.first ? function(t, n, o) {
for (;t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, o);
return !1;
} : function(t, n, u) {
var l, c, f, p = [ _, s ];
if (u) {
for (;t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
} else for (;t = t[r]; ) if (1 === t.nodeType || a) if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), 
o && o === t.nodeName.toLowerCase()) t = t[r] || t; else {
if ((l = c[i]) && l[0] === _ && l[1] === s) return p[2] = l[2];
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
for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (i = e[s]) && (n && !n(i, r, o) || (a.push(i), 
l && t.push(s)));
return a;
}
function je(e, t, n, r, o, i) {
return r && !r[x] && (r = je(r)), o && !o[x] && (o = je(o, i)), le(function(i, a, s, u) {
var l, c, f, p = [], d = [], h = a.length, g = i || function(e, t, n) {
for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
return n;
}(t || "*", s.nodeType ? [ s ] : s, []), m = !e || !i && t ? g : _e(g, p, e, s, u), y = n ? o || (i ? e : h || r) ? [] : a : m;
if (n && n(m, y, s, u), r) for (l = _e(y, d), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (y[d[c]] = !(m[d[c]] = f));
if (i) {
if (o || e) {
if (o) {
for (l = [], c = y.length; c--; ) (f = y[c]) && l.push(m[c] = f);
o(null, y = [], l, u);
}
for (c = y.length; c--; ) (f = y[c]) && -1 < (l = o ? L(i, f) : p[c]) && (i[l] = !(a[l] = f));
}
} else y = _e(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : O.apply(a, y);
});
}
function Te(e) {
for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe(function(e) {
return e === t;
}, s, !0), f = xe(function(e) {
return -1 < L(t, e);
}, s, !0), p = [ function(e, n, r) {
var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
return t = null, o;
} ]; u < i; u++) if (n = r.relative[e[u].type]) p = [ xe(we(p), n) ]; else {
if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
for (o = ++u; o < i && !r.relative[e[o].type]; o++) ;
return je(1 < u && we(p), 1 < u && be(e.slice(0, u - 1).concat({
value: " " === e[u - 2].type ? "*" : ""
})).replace(W, "$1"), n, u < o && Te(e.slice(u, o)), o < i && Te(e = e.slice(o)), o < i && be(e));
}
p.push(n);
}
return we(p);
}
return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), a = se.tokenize = function(e, t) {
var n, o, i, a, s, u, l, c = C[e + " "];
if (c) return t ? 0 : c.slice(0);
for (s = e, u = [], l = r.preFilter; s; ) {
for (a in n && !(o = F.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), 
n = !1, (o = B.exec(s)) && (n = o.shift(), i.push({
value: n,
type: o[0].replace(W, " ")
}), s = s.slice(n.length)), r.filter) !(o = V[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), 
i.push({
value: n,
type: a,
matches: o
}), s = s.slice(n.length));
if (!n) break;
}
return t ? s.length : s ? se.error(e) : C(e, u).slice(0);
}, s = se.compile = function(e, t) {
var n, o, i, s, u, c, f = [], h = [], m = M[e + " "];
if (!m) {
for (t || (t = a(e)), n = t.length; n--; ) (m = Te(t[n]))[x] ? f.push(m) : h.push(m);
(m = M(e, (o = h, s = 0 < (i = f).length, u = 0 < o.length, c = function(e, t, n, a, c) {
var f, h, m, y = 0, v = "0", b = e && [], x = [], w = l, j = e || u && r.find.TAG("*", c), T = _ += null == w ? 1 : Math.random() || .1, C = j.length;
for (c && (l = t === d || t || c); v !== C && null != (f = j[v]); v++) {
if (u && f) {
for (h = 0, t || f.ownerDocument === d || (p(f), n = !g); m = o[h++]; ) if (m(f, t || d, n)) {
a.push(f);
break;
}
c && (_ = T);
}
s && ((f = !m && f) && y--, e && b.push(f));
}
if (y += v, s && v !== y) {
for (h = 0; m = i[h++]; ) m(b, x, t, n);
if (e) {
if (0 < y) for (;v--; ) b[v] || x[v] || (x[v] = N.call(a));
x = _e(x);
}
O.apply(a, x), c && !e && 0 < x.length && 1 < y + i.length && se.uniqueSort(a);
}
return c && (_ = T, l = w), b;
}, s ? le(c) : c))).selector = e;
}
return m;
}, u = se.select = function(e, t, n, o) {
var i, u, l, c, f, p = "function" == typeof e && e, d = !o && a(e = p.selector || e);
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
return (p || s(e, d))(o, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
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
}), se;
}(n);
C.find = A, C.expr = A.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = A.uniqueSort, 
C.text = A.getText, C.isXMLDoc = A.isXML, C.contains = A.contains, C.escapeSelector = A.escape;
var E = function(e, t, n) {
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
var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function q(e, t, n) {
return b(t) ? C.grep(e, function(e, r) {
return !!t.call(e, r, e) !== n;
}) : t.nodeType ? C.grep(e, function(e) {
return e === t !== n;
}) : "string" != typeof t ? C.grep(e, function(e) {
return -1 < p.call(t, e) !== n;
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
return 1 < r ? C.uniqueSort(n) : n;
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
var L, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(C.fn.init = function(e, t, n) {
var r, o;
if (!e) return this;
if (n = n || L, "string" == typeof e) {
if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : $.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
if (r[1]) {
if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), 
O.test(r[1]) && C.isPlainObject(t)) for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
return this;
}
return (o = s.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
}
return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
}).prototype = C.fn, L = C(s);
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
if (!N.test(e)) for (;r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
i.push(n);
break;
}
return this.pushStack(1 < i.length ? C.uniqueSort(i) : i);
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
return E(e, "parentNode");
},
parentsUntil: function(e, t, n) {
return E(e, "parentNode", n);
},
next: function(e) {
return H(e, "nextSibling");
},
prev: function(e) {
return H(e, "previousSibling");
},
nextAll: function(e) {
return E(e, "nextSibling");
},
prevAll: function(e) {
return E(e, "previousSibling");
},
nextUntil: function(e, t, n) {
return E(e, "nextSibling", n);
},
prevUntil: function(e, t, n) {
return E(e, "previousSibling", n);
},
siblings: function(e) {
return S((e.parentNode || {}).firstChild, e);
},
children: function(e) {
return S(e.firstChild);
},
contents: function(e) {
return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), 
C.merge([], e.childNodes));
}
}, function(e, t) {
C.fn[e] = function(n, r) {
var o = C.map(this, t, n);
return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = C.filter(r, o)), 
1 < this.length && (R[e] || C.uniqueSort(o), G.test(e) && o.reverse()), this.pushStack(o);
};
});
var P = /[^\x20\t\r\n\f]+/g;
function I(e) {
return e;
}
function W(e) {
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
var t, n;
e = "string" == typeof e ? (t = e, n = {}, C.each(t.match(P) || [], function(e, t) {
n[t] = !0;
}), n) : C.extend({}, e);
var r, o, i, a, s = [], u = [], l = -1, c = function() {
for (a = a || e.once, i = r = !0; u.length; l = -1) for (o = u.shift(); ++l < s.length; ) !1 === s[l].apply(o[0], o[1]) && e.stopOnFalse && (l = s.length, 
o = !1);
e.memory || (o = !1), r = !1, a && (s = o ? [] : "");
}, f = {
add: function() {
return s && (o && !r && (l = s.length - 1, u.push(o)), function t(n) {
C.each(n, function(n, r) {
b(r) ? e.unique && f.has(r) || s.push(r) : r && r.length && "string" !== j(r) && t(r);
});
}(arguments), o && !r && c()), this;
},
remove: function() {
return C.each(arguments, function(e, t) {
for (var n; -1 < (n = C.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
}), this;
},
has: function(e) {
return e ? -1 < C.inArray(e, s) : 0 < s.length;
},
empty: function() {
return s && (s = []), this;
},
disable: function() {
return a = u = [], s = o = "", this;
},
disabled: function() {
return !s;
},
lock: function() {
return a = u = [], o || r || (s = o = ""), this;
},
locked: function() {
return !!a;
},
fireWith: function(e, t) {
return a || (t = [ e, (t = t || []).slice ? t.slice() : t ], u.push(t), r || c()), 
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
var s = this, u = arguments, l = function() {
var n, l;
if (!(e < i)) {
if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
l = n && ("object" == typeof n || "function" == typeof n) && n.then, b(l) ? o ? l.call(n, a(i, t, I, o), a(i, t, W, o)) : (i++, 
l.call(n, a(i, t, I, o), a(i, t, W, o), a(i, t, I, t.notifyWith))) : (r !== I && (s = void 0, 
u = [ n ]), (o || t.resolveWith)(s, u));
}
}, c = o ? l : function() {
try {
l();
} catch (n) {
C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), i <= e + 1 && (r !== W && (s = void 0, 
u = [ n ]), t.rejectWith(s, u));
}
};
e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), 
n.setTimeout(c));
};
}
return C.Deferred(function(n) {
t[0][3].add(a(0, n, b(o) ? o : I, n.notifyWith)), t[1][3].add(a(0, n, b(e) ? e : I)), 
t[2][3].add(a(0, n, b(r) ? r : W));
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
var t = arguments.length, n = t, r = Array(n), o = l.call(arguments), i = C.Deferred(), a = function(e) {
return function(n) {
r[e] = this, o[e] = 1 < arguments.length ? l.call(arguments) : n, --t || i.resolveWith(r, o);
};
};
if (t <= 1 && (F(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || b(o[n] && o[n].then))) return i.then();
for (;n--; ) F(o[n], a(n), i.reject);
return i.promise();
}
});
var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
C.Deferred.exceptionHook = function(e, t) {
n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
}, C.readyException = function(e) {
n.setTimeout(function() {
throw e;
});
};
var U = C.Deferred();
function z() {
s.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), 
C.ready();
}
C.fn.ready = function(e) {
return U.then(e).catch(function(e) {
C.readyException(e);
}), this;
}, C.extend({
isReady: !1,
readyWait: 1,
ready: function(e) {
(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || U.resolveWith(s, [ C ]);
}
}), C.ready.then = U.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(C.ready) : (s.addEventListener("DOMContentLoaded", z), 
n.addEventListener("load", z));
var Q = function(e, t, n, r, o, i, a) {
var s = 0, u = e.length, l = null == n;
if ("object" === j(n)) for (s in o = !0, n) Q(e, t, s, n[s], !0, i, a); else if (void 0 !== r && (o = !0, 
b(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
return l.call(C(e), n);
})), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
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
this.expando = C.expando + Z.uid++;
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
n = (t = Array.isArray(t) ? t.map(J) : (t = J(t)) in r ? [ t ] : t.match(P) || []).length;
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
C.extend({
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
}), C.fn.extend({
data: function(e, t) {
var n, r, o, i = this[0], a = i && i.attributes;
if (void 0 === e) {
if (this.length && (o = te.get(i), 1 === i.nodeType && !ee.get(i, "hasDataAttrs"))) {
for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = J(r.slice(5)), 
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
}), C.extend({
queue: function(e, t, n) {
var r;
if (e) return t = (t || "fx") + "queue", r = ee.get(e, t), n && (!r || Array.isArray(n) ? r = ee.access(e, t, C.makeArray(n)) : r.push(n)), 
r || [];
},
dequeue: function(e, t) {
t = t || "fx";
var n = C.queue(e, t), r = n.length, o = n.shift(), i = C._queueHooks(e, t);
"inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), 
delete i.stop, o.call(e, function() {
C.dequeue(e, t);
}, i)), !r && i && i.empty.fire();
},
_queueHooks: function(e, t) {
var n = t + "queueHooks";
return ee.get(e, n) || ee.access(e, n, {
empty: C.Callbacks("once memory").add(function() {
ee.remove(e, [ t + "queue", n ]);
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
for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = ee.get(i[a], e + "queueHooks")) && n.empty && (r++, 
n.empty.add(s));
return s(), o.promise(t);
}
});
var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ae = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"), se = [ "Top", "Right", "Bottom", "Left" ], ue = s.documentElement, le = function(e) {
return C.contains(e.ownerDocument, e);
}, ce = {
composed: !0
};
ue.getRootNode && (le = function(e) {
return C.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument;
});
var fe = function(e, t) {
return "none" === (e = t || e).style.display || "" === e.style.display && le(e) && "none" === C.css(e, "display");
}, pe = function(e, t, n, r) {
var o, i, a = {};
for (i in t) a[i] = e.style[i], e.style[i] = t[i];
for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
return o;
};
function de(e, t, n, r) {
var o, i, a = 20, s = r ? function() {
return r.cur();
} : function() {
return C.css(e, t, "");
}, u = s(), l = n && n[3] || (C.cssNumber[t] ? "" : "px"), c = e.nodeType && (C.cssNumber[t] || "px" !== l && +u) && ae.exec(C.css(e, t));
if (c && c[3] !== l) {
for (u /= 2, l = l || c[3], c = +u || 1; a--; ) C.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), 
c /= i;
c *= 2, C.style(e, t, c + l), n = n || [];
}
return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
r.start = c, r.end = o)), o;
}
var he = {};
function ge(e, t) {
for (var n, r, o, i, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, 
t ? ("none" === n && (l[c] = ee.get(r, "display") || null, l[c] || (r.style.display = "")), 
"" === r.style.display && fe(r) && (l[c] = (u = a = i = void 0, a = (o = r).ownerDocument, 
s = o.nodeName, (u = he[s]) || (i = a.body.appendChild(a.createElement(s)), u = C.css(i, "display"), 
i.parentNode.removeChild(i), "none" === u && (u = "block"), he[s] = u)))) : "none" !== n && (l[c] = "none", 
ee.set(r, "display", n)));
for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
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
fe(this) ? C(this).show() : C(this).hide();
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
void 0 === t || t && D(e, t) ? C.merge([ e ], n) : n;
}
function we(e, t) {
for (var n = 0, r = e.length; n < r; n++) ee.set(e[n], "globalEval", !t || ee.get(t[n], "globalEval"));
}
be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, 
be.th = be.td;
var _e, je, Te = /<|&#?\w+;/;
function Ce(e, t, n, r, o) {
for (var i, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((i = e[d]) || 0 === i) if ("object" === j(i)) C.merge(p, i.nodeType ? [ i ] : i); else if (Te.test(i)) {
for (a = a || f.appendChild(t.createElement("div")), s = (ye.exec(i) || [ "", "" ])[1].toLowerCase(), 
u = be[s] || be._default, a.innerHTML = u[1] + C.htmlPrefilter(i) + u[2], c = u[0]; c--; ) a = a.lastChild;
C.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
} else p.push(t.createTextNode(i));
for (f.textContent = "", d = 0; i = p[d++]; ) if (r && -1 < C.inArray(i, r)) o && o.push(i); else if (l = le(i), 
a = xe(f.appendChild(i), "script"), l && we(a), n) for (c = 0; i = a[c++]; ) ve.test(i.type || "") && n.push(i);
return f;
}
_e = s.createDocumentFragment().appendChild(s.createElement("div")), (je = s.createElement("input")).setAttribute("type", "radio"), 
je.setAttribute("checked", "checked"), je.setAttribute("name", "t"), _e.appendChild(je), 
v.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked, _e.innerHTML = "<textarea>x</textarea>", 
v.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue;
var Me = /^key/, ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ae = /^([^.]*)(?:\.(.+)|)/;
function Ee() {
return !0;
}
function Se() {
return !1;
}
function Ne(e, t) {
return e === function() {
try {
return s.activeElement;
} catch (e) {}
}() == ("focus" === t);
}
function De(e, t, n, r, o, i) {
var a, s;
if ("object" == typeof t) {
for (s in "string" != typeof n && (r = r || n, n = void 0), t) De(e, s, n, r, t[s], i);
return e;
}
if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, 
r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Se; else if (!o) return e;
return 1 === i && (a = o, (o = function(e) {
return C().off(e), a.apply(this, arguments);
}).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
C.event.add(this, t, o, r, n);
});
}
function Oe(e, t, n) {
n ? (ee.set(e, t, !1), C.event.add(e, t, {
namespace: !1,
handler: function(e) {
var r, o, i = ee.get(this, t);
if (1 & e.isTrigger && this[t]) {
if (i.length) (C.event.special[t] || {}).delegateType && e.stopPropagation(); else if (i = l.call(arguments), 
ee.set(this, t, i), r = n(this, t), this[t](), i !== (o = ee.get(this, t)) || r ? ee.set(this, t, !1) : o = {}, 
i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value;
} else i.length && (ee.set(this, t, {
value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
}), e.stopImmediatePropagation());
}
})) : void 0 === ee.get(e, t) && C.event.add(e, t, Ee);
}
C.event = {
global: {},
add: function(e, t, n, r, o) {
var i, a, s, u, l, c, f, p, d, h, g, m = ee.get(e);
if (m) for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(ue, o), 
n.guid || (n.guid = C.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
}), l = (t = (t || "").match(P) || [ "" ]).length; l--; ) d = g = (s = Ae.exec(t[l]) || [])[1], 
h = (s[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, 
f = C.event.special[d] || {}, c = C.extend({
type: d,
origType: g,
data: r,
handler: n,
guid: n.guid,
selector: o,
needsContext: o && C.expr.match.needsContext.test(o),
namespace: h.join(".")
}, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), 
f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
C.event.global[d] = !0);
},
remove: function(e, t, n, r, o) {
var i, a, s, u, l, c, f, p, d, h, g, m = ee.hasData(e) && ee.get(e);
if (m && (u = m.events)) {
for (l = (t = (t || "").match(P) || [ "" ]).length; l--; ) if (d = g = (s = Ae.exec(t[l]) || [])[1], 
h = (s[2] || "").split(".").sort(), d) {
for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--; ) c = p[i], 
!o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), 
c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C.removeEvent(e, d, m.handle), 
delete u[d]);
} else for (d in u) C.event.remove(e, d + t[l], n, r, !0);
C.isEmptyObject(u) && ee.remove(e, "handle events");
}
},
dispatch: function(e) {
var t, n, r, o, i, a, s = C.event.fix(e), u = new Array(arguments.length), l = (ee.get(this, "events") || {})[s.type] || [], c = C.event.special[s.type] || {};
for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
for (a = C.event.handlers.call(this, s, l), t = 0; (o = a[t++]) && !s.isPropagationStopped(); ) for (s.currentTarget = o.elem, 
n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped(); ) s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, 
s.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), 
s.stopPropagation()));
return c.postDispatch && c.postDispatch.call(this, s), s.result;
}
},
handlers: function(e, t) {
var n, r, o, i, a, s = [], u = t.delegateCount, l = e.target;
if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < C(o, this).index(l) : C.find(o, this, null, [ l ]).length), 
a[o] && i.push(r);
i.length && s.push({
elem: l,
handlers: i
});
}
return l = this, u < t.length && s.push({
elem: l,
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
click: {
setup: function(e) {
var t = this || e;
return me.test(t.type) && t.click && D(t, "input") && Oe(t, "click", Ee), !1;
},
trigger: function(e) {
var t = this || e;
return me.test(t.type) && t.click && D(t, "input") && Oe(t, "click"), !0;
},
_default: function(e) {
var t = e.target;
return me.test(t.type) && t.click && D(t, "input") && ee.get(t, "click") || D(t, "a");
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
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Se, 
this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
}, C.Event.prototype = {
constructor: C.Event,
isDefaultPrevented: Se,
isPropagationStopped: Se,
isImmediatePropagationStopped: Se,
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
return null == e.which && Me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
}
}, C.event.addProp), C.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
C.event.special[e] = {
setup: function() {
return Oe(this, e, Ne), !1;
},
trigger: function() {
return Oe(this, e), !0;
},
delegateType: t
};
}), C.each({
mouseenter: "mouseover",
mouseleave: "mouseout",
pointerenter: "pointerover",
pointerleave: "pointerout"
}, function(e, t) {
C.event.special[e] = {
delegateType: t,
bindType: t,
handle: function(e) {
var n, r = e.relatedTarget, o = e.handleObj;
return r && (r === this || C.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
e.type = t), n;
}
};
}), C.fn.extend({
on: function(e, t, n, r) {
return De(this, e, t, n, r);
},
one: function(e, t, n, r) {
return De(this, e, t, n, r, 1);
},
off: function(e, t, n) {
var r, o;
if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
this;
if ("object" == typeof e) {
for (o in e) this.off(o, t, e[o]);
return this;
}
return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), 
this.each(function() {
C.event.remove(this, e, n, t);
});
}
});
var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Le = /<script|<style|<link/i, $e = /checked\s*(?:[^=]|=\s*.checked.)/i, Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function Re(e, t) {
return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
}
function He(e) {
return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
}
function Pe(e) {
return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
e;
}
function Ie(e, t) {
var n, r, o, i, a, s, u, l;
if (1 === t.nodeType) {
if (ee.hasData(e) && (i = ee.access(e), a = ee.set(t, i), l = i.events)) for (o in delete a.handle, 
a.events = {}, l) for (n = 0, r = l[o].length; n < r; n++) C.event.add(t, o, l[o][n]);
te.hasData(e) && (s = te.access(e), u = C.extend({}, s), te.set(t, u));
}
}
function We(e, t, n, r) {
t = c.apply([], t);
var o, i, a, s, u, l, f = 0, p = e.length, d = p - 1, h = t[0], g = b(h);
if (g || 1 < p && "string" == typeof h && !v.checkClone && $e.test(h)) return e.each(function(o) {
var i = e.eq(o);
g && (t[0] = h.call(this, o, i.html())), We(i, t, n, r);
});
if (p && (i = (o = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), 
i || r)) {
for (s = (a = C.map(xe(o, "script"), He)).length; f < p; f++) u = o, f !== d && (u = C.clone(u, !0, !0), 
s && C.merge(a, xe(u, "script"))), n.call(e[f], u, f);
if (s) for (l = a[a.length - 1].ownerDocument, C.map(a, Pe), f = 0; f < s; f++) u = a[f], 
ve.test(u.type || "") && !ee.access(u, "globalEval") && C.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && !u.noModule && C._evalUrl(u.src, {
nonce: u.nonce || u.getAttribute("nonce")
}) : _(u.textContent.replace(Ge, ""), u, l));
}
return e;
}
function Fe(e, t, n) {
for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(xe(r)), 
r.parentNode && (n && le(r) && we(xe(r, "script")), r.parentNode.removeChild(r));
return e;
}
C.extend({
htmlPrefilter: function(e) {
return e.replace(qe, "<$1></$2>");
},
clone: function(e, t, n) {
var r, o, i, a, s, u, l, c = e.cloneNode(!0), f = le(e);
if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (a = xe(c), 
r = 0, o = (i = xe(e)).length; r < o; r++) s = i[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && me.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
if (t) if (n) for (i = i || xe(e), a = a || xe(c), r = 0, o = i.length; r < o; r++) Ie(i[r], a[r]); else Ie(e, c);
return 0 < (a = xe(c, "script")).length && we(a, !f && xe(e, "script")), c;
},
cleanData: function(e) {
for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++) if (K(n)) {
if (t = n[ee.expando]) {
if (t.events) for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
n[ee.expando] = void 0;
}
n[te.expando] && (n[te.expando] = void 0);
}
}
}), C.fn.extend({
detach: function(e) {
return Fe(this, e, !0);
},
remove: function(e) {
return Fe(this, e);
},
text: function(e) {
return Q(this, function(e) {
return void 0 === e ? C.text(this) : this.empty().each(function() {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
});
}, null, e, arguments.length);
},
append: function() {
return We(this, arguments, function(e) {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e);
});
},
prepend: function() {
return We(this, arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = Re(this, e);
t.insertBefore(e, t.firstChild);
}
});
},
before: function() {
return We(this, arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
},
after: function() {
return We(this, arguments, function(e) {
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
return Q(this, function(e) {
var t = this[0] || {}, n = 0, r = this.length;
if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
if ("string" == typeof e && !Le.test(e) && !be[(ye.exec(e) || [ "", "" ])[1].toLowerCase()]) {
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
return We(this, arguments, function(t) {
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
var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"), Ue = function(e) {
var t = e.ownerDocument.defaultView;
return t && t.opener || (t = n), t.getComputedStyle(e);
}, ze = new RegExp(se.join("|"), "i");
function Qe(e, t, n) {
var r, o, i, a, s = e.style;
return (n = n || Ue(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || le(e) || (a = C.style(e, t)), 
!v.pixelBoxStyles() && Be.test(a) && ze.test(t) && (r = s.width, o = s.minWidth, 
i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a;
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
r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), 
o = 36 === t(e.width), c.style.position = "absolute", i = 12 === t(c.offsetWidth / 3), 
ue.removeChild(l), c = null;
}
}
function t(e) {
return Math.round(parseFloat(e));
}
var r, o, i, a, u, l = s.createElement("div"), c = s.createElement("div");
c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
v.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(v, {
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
var Xe = [ "Webkit", "Moz", "ms" ], Ye = s.createElement("div").style, Je = {};
function Ke(e) {
var t;
return C.cssProps[e] || Je[e] || (e in Ye ? e : Je[e] = function(e) {
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
var r = ae.exec(t);
return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
}
function ot(e, t, n, r, o, i) {
var a = "width" === t ? 1 : 0, s = 0, u = 0;
if (n === (r ? "border" : "content")) return 0;
for (;a < 4; a += 2) "margin" === n && (u += C.css(e, n + se[a], !0, o)), r ? ("content" === n && (u -= C.css(e, "padding" + se[a], !0, o)), 
"margin" !== n && (u -= C.css(e, "border" + se[a] + "Width", !0, o))) : (u += C.css(e, "padding" + se[a], !0, o), 
"padding" !== n ? u += C.css(e, "border" + se[a] + "Width", !0, o) : s += C.css(e, "border" + se[a] + "Width", !0, o));
return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), 
u;
}
function it(e, t, n) {
var r = Ue(e), o = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r), i = o, a = Qe(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
if (Be.test(a)) {
if (!n) return a;
a = "auto";
}
return (!v.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r), 
(i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ot(e, t, n || (o ? "border" : "content"), i, r, a) + "px";
}
function at(e, t, n, r, o) {
return new at.prototype.init(e, t, n, r, o);
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
var o, i, a, s = J(t), u = et.test(t), l = e.style;
if (u || (t = Ke(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
"string" == (i = typeof n) && (o = ae.exec(n)) && o[1] && (n = de(e, t, o), i = "number"), 
null != n && n == n && ("number" !== i || u || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), 
v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
}
},
css: function(e, t, n, r) {
var o, i, a, s = J(t);
return et.test(t) || (t = Ke(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), 
void 0 === o && (o = Qe(e, t, r)), "normal" === o && t in nt && (o = nt[t]), "" === n || n ? (i = parseFloat(o), 
!0 === n || isFinite(i) ? i || 0 : o) : o;
}
}), C.each([ "height", "width" ], function(e, t) {
C.cssHooks[t] = {
get: function(e, n, r) {
if (n) return !Ze.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : pe(e, tt, function() {
return it(e, t, r);
});
},
set: function(e, n, r) {
var o, i = Ue(e), a = !v.scrollboxSize() && "absolute" === i.position, s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, i), u = r ? ot(e, t, r, s, i) : 0;
return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ot(e, t, "border", !1, i) - .5)), 
u && (o = ae.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), 
rt(0, n, u);
}
};
}), C.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function(e, t) {
if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - pe(e, {
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
for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) o[e + se[r] + t] = i[r] || i[r - 2] || i[0];
return o;
}
}, "margin" !== e && (C.cssHooks[e + t].set = rt);
}), C.fn.extend({
css: function(e, t) {
return Q(this, function(e, t, n) {
var r, o, i = {}, a = 0;
if (Array.isArray(t)) {
for (r = Ue(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
return i;
}
return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
}, e, t, 1 < arguments.length);
}
}), ((C.Tween = at).prototype = {
constructor: at,
init: function(e, t, n, r, o, i) {
this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, 
this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px");
},
cur: function() {
var e = at.propHooks[this.prop];
return e && e.get ? e.get(this) : at.propHooks._default.get(this);
},
run: function(e) {
var t, n = at.propHooks[this.prop];
return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
}
}).init.prototype = at.prototype, (at.propHooks = {
_default: {
get: function(e) {
var t;
return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
},
set: function(e) {
C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
}
}
}).scrollTop = at.propHooks.scrollLeft = {
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
}, C.fx = at.prototype.init, C.fx.step = {};
var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
function dt() {
ut && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(dt) : n.setTimeout(dt, C.fx.interval), 
C.fx.tick());
}
function ht() {
return n.setTimeout(function() {
st = void 0;
}), st = Date.now();
}
function gt(e, t) {
var n, r = 0, o = {
height: e
};
for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = se[r])] = o["padding" + n] = e;
return t && (o.opacity = o.width = e), o;
}
function mt(e, t, n) {
for (var r, o = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), i = 0, a = o.length; i < a; i++) if (r = o[i].call(n, t, e)) return r;
}
function yt(e, t, n) {
var r, o, i = 0, a = yt.prefilters.length, s = C.Deferred().always(function() {
delete u.elem;
}), u = function() {
if (o) return !1;
for (var t = st || ht(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) l.tweens[i].run(r);
return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (a || s.notifyWith(e, [ l, 1, 0 ]), 
s.resolveWith(e, [ l ]), !1);
}, l = s.promise({
elem: e,
props: C.extend({}, t),
opts: C.extend(!0, {
specialEasing: {},
easing: C.easing._default
}, n),
originalProperties: t,
originalOptions: n,
startTime: st || ht(),
duration: n.duration,
tweens: [],
createTween: function(t, n) {
var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
return l.tweens.push(r), r;
},
stop: function(t) {
var n = 0, r = t ? l.tweens.length : 0;
if (o) return this;
for (o = !0; n < r; n++) l.tweens[n].run(1);
return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), 
this;
}
}), c = l.props;
for (function(e, t) {
var n, r, o, i, a;
for (n in e) if (o = t[r = J(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), 
n !== r && (e[r] = i, delete e[n]), (a = C.cssHooks[r]) && "expand" in a) for (n in i = a.expand(i), 
delete e[r], i) n in e || (e[n] = i[n], t[n] = o); else t[r] = o;
}(c, l.opts.specialEasing); i < a; i++) if (r = yt.prefilters[i].call(l, e, c, l.opts)) return b(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), 
r;
return C.map(c, mt, l), b(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
C.fx.timer(C.extend(u, {
elem: e,
anim: l,
queue: l.opts.queue
})), l;
}
C.Animation = C.extend(yt, {
tweeners: {
"*": [ function(e, t) {
var n = this.createTween(e, t);
return de(n.elem, e, ae.exec(t), n), n;
} ]
},
tweener: function(e, t) {
b(e) ? (t = e, e = [ "*" ]) : e = e.match(P);
for (var n, r = 0, o = e.length; r < o; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], 
yt.tweeners[n].unshift(t);
},
prefilters: [ function(e, t, n) {
var r, o, i, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && fe(e), m = ee.get(e, "fxshow");
for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
s = a.empty.fire, a.empty.fire = function() {
a.unqueued || s();
}), a.unqueued++, p.always(function() {
p.always(function() {
a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
});
})), t) if (o = t[r], ft.test(o)) {
if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
if ("show" !== o || !m || void 0 === m[r]) continue;
g = !0;
}
d[r] = m && m[r] || C.style(e, r);
}
if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
null == (l = m && m.display) && (l = ee.get(e, "display")), "none" === (c = C.css(e, "display")) && (l ? c = l : (ge([ e ], !0), 
l = e.style.display || l, c = C.css(e, "display"), ge([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (p.done(function() {
h.display = l;
}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
n.overflow && (h.overflow = "hidden", p.always(function() {
h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
})), u = !1, d) u || (m ? "hidden" in m && (g = m.hidden) : m = ee.access(e, "fxshow", {
display: l
}), i && (m.hidden = !g), g && ge([ e ], !0), p.done(function() {
for (r in g || ge([ e ]), ee.remove(e, "fxshow"), d) C.style(e, r, d[r]);
})), u = mt(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, 
u.start = 0));
} ],
prefilter: function(e, t) {
t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
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
return this.filter(fe).css("opacity", 0).show().end().animate({
opacity: t
}, e, n, r);
},
animate: function(e, t, n, r) {
var o = C.isEmptyObject(e), i = C.speed(t, n, r), a = function() {
var t = yt(this, C.extend({}, e), i);
(o || ee.get(this, "finish")) && t.stop(!0);
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
var t = !0, o = null != e && e + "queueHooks", i = C.timers, a = ee.get(this);
if (o) a[o] && a[o].stop && r(a[o]); else for (o in a) a[o] && a[o].stop && pt.test(o) && r(a[o]);
for (o = i.length; o--; ) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), 
t = !1, i.splice(o, 1));
!t && n || C.dequeue(this, e);
});
},
finish: function(e) {
return !1 !== e && (e = e || "fx"), this.each(function() {
var t, n = ee.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = C.timers, a = r ? r.length : 0;
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
return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(gt(t, !0), e, r, o);
};
}), C.each({
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
C.fn[e] = function(e, n, r) {
return this.animate(t, e, n, r);
};
}), C.timers = [], C.fx.tick = function() {
var e, t = 0, n = C.timers;
for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
n.length || C.fx.stop(), st = void 0;
}, C.fx.timer = function(e) {
C.timers.push(e), C.fx.start();
}, C.fx.interval = 13, C.fx.start = function() {
ut || (ut = !0, dt());
}, C.fx.stop = function() {
ut = null;
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
}, lt = s.createElement("input"), ct = s.createElement("select").appendChild(s.createElement("option")), 
lt.type = "checkbox", v.checkOn = "" !== lt.value, v.optSelected = ct.selected, 
(lt = s.createElement("input")).value = "t", lt.type = "radio", v.radioValue = "t" === lt.value;
var vt, bt = C.expr.attrHandle;
C.fn.extend({
attr: function(e, t) {
return Q(this, C.attr, e, t, 1 < arguments.length);
},
removeAttr: function(e) {
return this.each(function() {
C.removeAttr(this, e);
});
}
}), C.extend({
attr: function(e, t, n) {
var r, o, i = e.nodeType;
if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? vt : void 0)), 
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
}), vt = {
set: function(e, t, n) {
return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
}
}, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
var n = bt[t] || C.find.attr;
bt[t] = function(e, t, r) {
var o, i, a = t.toLowerCase();
return r || (i = bt[a], bt[a] = o, o = null != n(e, t, r) ? a : null, bt[a] = i), 
o;
};
});
var xt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
function _t(e) {
return (e.match(P) || []).join(" ");
}
function jt(e) {
return e.getAttribute && e.getAttribute("class") || "";
}
function Tt(e) {
return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
}
C.fn.extend({
prop: function(e, t) {
return Q(this, C.prop, e, t, 1 < arguments.length);
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
return t ? parseInt(t, 10) : xt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
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
C(this).addClass(e.call(this, t, jt(this)));
});
if ((t = Tt(e)).length) for (;n = this[u++]; ) if (o = jt(n), r = 1 === n.nodeType && " " + _t(o) + " ") {
for (a = 0; i = t[a++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
o !== (s = _t(r)) && n.setAttribute("class", s);
}
return this;
},
removeClass: function(e) {
var t, n, r, o, i, a, s, u = 0;
if (b(e)) return this.each(function(t) {
C(this).removeClass(e.call(this, t, jt(this)));
});
if (!arguments.length) return this.attr("class", "");
if ((t = Tt(e)).length) for (;n = this[u++]; ) if (o = jt(n), r = 1 === n.nodeType && " " + _t(o) + " ") {
for (a = 0; i = t[a++]; ) for (;-1 < r.indexOf(" " + i + " "); ) r = r.replace(" " + i + " ", " ");
o !== (s = _t(r)) && n.setAttribute("class", s);
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, r = "string" === n || Array.isArray(e);
return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each(function(n) {
C(this).toggleClass(e.call(this, n, jt(this), t), t);
}) : this.each(function() {
var t, o, i, a;
if (r) for (o = 0, i = C(this), a = Tt(e); t = a[o++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = jt(this)) && ee.set(this, "__className__", t), 
this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ee.get(this, "__className__") || ""));
});
},
hasClass: function(e) {
var t, n, r = 0;
for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && -1 < (" " + _t(jt(n)) + " ").indexOf(t)) return !0;
return !1;
}
});
var Ct = /\r/g;
C.fn.extend({
val: function(e) {
var t, n, r, o = this[0];
return arguments.length ? (r = b(e), this.each(function(n) {
var o;
1 === this.nodeType && (null == (o = r ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, function(e) {
return null == e ? "" : e + "";
})), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
})) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0;
}
}), C.extend({
valHooks: {
option: {
get: function(e) {
var t = C.find.attr(e, "value");
return null != t ? t : _t(C.text(e));
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
for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--; ) ((r = o[a]).selected = -1 < C.inArray(C.valHooks.option.get(r), i)) && (n = !0);
return n || (e.selectedIndex = -1), i;
}
}
}
}), C.each([ "radio", "checkbox" ], function() {
C.valHooks[this] = {
set: function(e, t) {
if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t);
}
}, v.checkOn || (C.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" : e.value;
});
}), v.focusin = "onfocusin" in n;
var Mt = /^(?:focusinfocus|focusoutblur)$/, kt = function(e) {
e.stopPropagation();
};
C.extend(C.event, {
trigger: function(e, t, r, o) {
var i, a, u, l, c, f, p, d, h = [ r || s ], m = g.call(e, "type") ? e.type : e, y = g.call(e, "namespace") ? e.namespace.split(".") : [];
if (a = d = u = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !Mt.test(m + C.event.triggered) && (-1 < m.indexOf(".") && (m = (y = m.split(".")).shift(), 
y.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, 
e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
e.result = void 0, e.target || (e.target = r), t = null == t ? [ e ] : C.makeArray(t, [ e ]), 
p = C.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, t))) {
if (!o && !p.noBubble && !x(r)) {
for (l = p.delegateType || m, Mt.test(l + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
u = a;
u === (r.ownerDocument || s) && h.push(u.defaultView || u.parentWindow || n);
}
for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); ) d = a, e.type = 1 < i ? l : p.bindType || m, 
(f = (ee.get(a, "events") || {})[e.type] && ee.get(a, "handle")) && f.apply(a, t), 
(f = c && a[c]) && f.apply && K(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
return e.type = m, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !K(r) || c && b(r[m]) && !x(r) && ((u = r[c]) && (r[c] = null), 
C.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, kt), r[m](), 
e.isPropagationStopped() && d.removeEventListener(m, kt), C.event.triggered = void 0, 
u && (r[c] = u)), e.result;
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
var r = this.ownerDocument || this, o = ee.access(r, t);
o || r.addEventListener(e, n, !0), ee.access(r, t, (o || 0) + 1);
},
teardown: function() {
var r = this.ownerDocument || this, o = ee.access(r, t) - 1;
o ? ee.access(r, t, o) : (r.removeEventListener(e, n, !0), ee.remove(r, t));
}
};
});
var At = n.location, Et = Date.now(), St = /\?/;
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
var Nt = /\[\]$/, Dt = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i, qt = /^(?:input|select|textarea|keygen)/i;
function Lt(e, t, n, r) {
var o;
if (Array.isArray(t)) C.each(t, function(t, o) {
n || Nt.test(e) ? r(e, o) : Lt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
}); else if (n || "object" !== j(t)) r(e, t); else for (o in t) Lt(e + "[" + o + "]", t[o], n, r);
}
C.param = function(e, t) {
var n, r = [], o = function(e, t) {
var n = b(t) ? t() : t;
r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
};
if (null == e) return "";
if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
o(this.name, this.value);
}); else for (n in e) Lt(n, e[n], t, o);
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
return this.name && !C(this).is(":disabled") && qt.test(this.nodeName) && !Ot.test(e) && (this.checked || !me.test(e));
}).map(function(e, t) {
var n = C(this).val();
return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
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
var $t = /%20/g, Gt = /#.*$/, Rt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:GET|HEAD)$/, It = /^\/\//, Wt = {}, Ft = {}, Bt = "*/".concat("*"), Ut = s.createElement("a");
function zt(e) {
return function(t, n) {
"string" != typeof t && (n = t, t = "*");
var r, o = 0, i = t.toLowerCase().match(P) || [];
if (b(n)) for (;r = i[o++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
};
}
function Qt(e, t, n, r) {
var o = {}, i = e === Ft;
function a(s) {
var u;
return o[s] = !0, C.each(e[s] || [], function(e, s) {
var l = s(t, n, r);
return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
a(l), !1);
}), u;
}
return a(t.dataTypes[0]) || !o["*"] && a("*");
}
function Vt(e, t) {
var n, r, o = C.ajaxSettings.flatOptions || {};
for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
return r && C.extend(!0, e, r), e;
}
Ut.href = At.href, C.extend({
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
ajaxPrefilter: zt(Wt),
ajaxTransport: zt(Ft),
ajax: function(e, t) {
"object" == typeof e && (t = e, e = void 0), t = t || {};
var r, o, i, a, u, l, c, f, p, d, h = C.ajaxSetup({}, t), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event, y = C.Deferred(), v = C.Callbacks("once memory"), b = h.statusCode || {}, x = {}, w = {}, _ = "canceled", j = {
readyState: 0,
getResponseHeader: function(e) {
var t;
if (c) {
if (!a) for (a = {}; t = Ht.exec(i); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
t = a[e.toLowerCase() + " "];
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
return r && r.abort(t), T(0, t), this;
}
};
if (y.promise(j), h.url = ((e || h.url || At.href) + "").replace(It, At.protocol + "//"), 
h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [ "" ], 
null == h.crossDomain) {
l = s.createElement("a");
try {
l.href = h.url, l.href = l.href, h.crossDomain = Ut.protocol + "//" + Ut.host != l.protocol + "//" + l.host;
} catch (e) {
h.crossDomain = !0;
}
}
if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), 
Qt(Wt, h, t, j), c) return j;
for (p in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), 
h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Gt, ""), 
h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace($t, "+")) : (d = h.url.slice(o.length), 
h.data && (h.processData || "string" == typeof h.data) && (o += (St.test(o) ? "&" : "?") + h.data, 
delete h.data), !1 === h.cache && (o = o.replace(Rt, "$1"), d = (St.test(o) ? "&" : "?") + "_=" + Et++ + d), 
h.url = o + d), h.ifModified && (C.lastModified[o] && j.setRequestHeader("If-Modified-Since", C.lastModified[o]), 
C.etag[o] && j.setRequestHeader("If-None-Match", C.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && j.setRequestHeader("Content-Type", h.contentType), 
j.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]), 
h.headers) j.setRequestHeader(p, h.headers[p]);
if (h.beforeSend && (!1 === h.beforeSend.call(g, j, h) || c)) return j.abort();
if (_ = "abort", v.add(h.complete), j.done(h.success), j.fail(h.error), r = Qt(Ft, h, t, j)) {
if (j.readyState = 1, f && m.trigger("ajaxSend", [ j, h ]), c) return j;
h.async && 0 < h.timeout && (u = n.setTimeout(function() {
j.abort("timeout");
}, h.timeout));
try {
c = !1, r.send(x, T);
} catch (e) {
if (c) throw e;
T(-1, e);
}
} else T(-1, "No Transport");
function T(e, t, a, s) {
var l, p, d, x, w, _ = t;
c || (c = !0, u && n.clearTimeout(u), r = void 0, i = s || "", j.readyState = 0 < e ? 4 : 0, 
l = 200 <= e && e < 300 || 304 === e, a && (x = function(e, t, n) {
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
}(h, j, a)), x = function(e, t, n, r) {
var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
for (i = c.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), 
!u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift()) if ("*" === i) i = u; else if ("*" !== u && u !== i) {
if (!(a = l[u + " " + i] || l["* " + i])) for (o in l) if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
!0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
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
}(h, x, j, l), l ? (h.ifModified && ((w = j.getResponseHeader("Last-Modified")) && (C.lastModified[o] = w), 
(w = j.getResponseHeader("etag")) && (C.etag[o] = w)), 204 === e || "HEAD" === h.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, 
p = x.data, l = !(d = x.error))) : (d = _, !e && _ || (_ = "error", e < 0 && (e = 0))), 
j.status = e, j.statusText = (t || _) + "", l ? y.resolveWith(g, [ p, _, j ]) : y.rejectWith(g, [ j, _, d ]), 
j.statusCode(b), b = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [ j, h, l ? p : d ]), 
v.fireWith(g, [ j, _ ]), f && (m.trigger("ajaxComplete", [ j, h ]), --C.active || C.event.trigger("ajaxStop")));
}
return j;
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
}), C._evalUrl = function(e, t) {
return C.ajax({
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
C.globalEval(e, t);
}
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
var Xt = {
0: 200,
1223: 204
}, Yt = C.ajaxSettings.xhr();
v.cors = !!Yt && "withCredentials" in Yt, v.ajax = Yt = !!Yt, C.ajaxTransport(function(e) {
var t, r;
if (v.cors || Yt && !e.crossDomain) return {
send: function(o, i) {
var a, s = e.xhr();
if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), 
o) s.setRequestHeader(a, o[a]);
t = function(e) {
return function() {
t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, 
"abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Xt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
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
} catch (o) {
if (t) throw o;
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
if (e.crossDomain || e.scriptAttrs) return {
send: function(r, o) {
t = C("<script>").attr(e.scriptAttrs || {}).prop({
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
var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
C.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
var e = Kt.pop() || C.expando + "_" + Et++;
return this[e] = !0, e;
}
}), C.ajaxPrefilter("json jsonp", function(e, t, r) {
var o, i, a, s = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
s ? e[s] = e[s].replace(Zt, "$1" + o) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), 
e.converters["script json"] = function() {
return a || C.error(o + " was not called"), a[0];
}, e.dataTypes[0] = "json", i = n[o], n[o] = function() {
a = arguments;
}, r.always(function() {
void 0 === i ? C(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, 
Kt.push(o)), a && b(i) && i(a[0]), a = i = void 0;
}), "script";
}), v.createHTMLDocument = ((Jt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
2 === Jt.childNodes.length), C.parseHTML = function(e, t, n) {
return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, 
t.head.appendChild(r)) : t = s), i = !n && [], (o = O.exec(e)) ? [ t.createElement(o[1]) ] : (o = Ce([ e ], t, i), 
i && i.length && C(i).remove(), C.merge([], o.childNodes)));
var r, o, i;
}, C.fn.load = function(e, t, n) {
var r, o, i, a = this, s = e.indexOf(" ");
return -1 < s && (r = _t(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 
0 < a.length && C.ajax({
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
var r, o, i, a, s, u, l = C.css(e, "position"), c = C(e), f = {};
"static" === l && (e.style.position = "relative"), s = c.offset(), i = C.css(e, "top"), 
u = C.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (i + u).indexOf("auto") ? (a = (r = c.position()).top, 
o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), b(t) && (t = t.call(e, n, C.extend({}, s))), 
null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), 
"using" in t ? t.using.call(e, f) : c.css(f);
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
return e || ue;
});
}
}), C.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, t) {
var n = "pageYOffset" === t;
C.fn[e] = function(r) {
return Q(this, function(e, r, o) {
var i;
if (x(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
}, e, r, arguments.length);
};
}), C.each([ "top", "left" ], function(e, t) {
C.cssHooks[t] = Ve(v.pixelPosition, function(e, n) {
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
return Q(this, function(t, n, o) {
var i;
return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? C.css(t, n, s) : C.style(t, n, o, s);
}, t, a ? o : void 0, a);
};
});
}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
C.fn[t] = function(e, n) {
return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
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
if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = l.call(arguments, 2), 
(o = function() {
return e.apply(t || this, r.concat(l.call(arguments)));
}).guid = e.guid = e.guid || C.guid++, o;
}, C.holdReady = function(e) {
e ? C.readyWait++ : C.ready(!0);
}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = D, C.isFunction = b, 
C.isWindow = x, C.camelCase = J, C.type = j, C.now = Date.now, C.isNumeric = function(e) {
var t = C.type(e);
return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
}, r = [], void 0 === (o = function() {
return C;
}.apply(t, r)) || (e.exports = o);
var en = n.jQuery, tn = n.$;
return C.noConflict = function(e) {
return n.$ === C && (n.$ = tn), e && n.jQuery === C && (n.jQuery = en), C;
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
(function(e, r, o) {
Object.defineProperty(t, "__esModule", {
value: !0
});
const i = n(11), a = n(23), s = n(26);
function u(t, r, o) {
let u = i.requireScript(t, "index");
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
const r = n(25), o = new Map();
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
Object.defineProperty(t, "__esModule", {
value: !0
});
const r = n(27);
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
e[t] && (e[t] = e[t].length ? l(r.array_unique(e[t])) : []);
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
function l(e) {
return e.filter(function(e, t, n) {
return !!e;
});
}
t.parseMetadata = o, t.hasGrant = i, t.lazyMetaFix = a, t.meta_match = s, t.makeMetaRow = u, 
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
}), t.array_unique = r, t.default = r;
}, function(e, t, n) {
var r = {
"./youtube-plus-sc/": 6,
"./youtube-plus-sc/_fake": 16,
"./youtube-plus-sc/_fake.js": 16,
"./youtube-plus-sc/global/script": 10,
"./youtube-plus-sc/global/script.js": 10,
"./youtube-plus-sc/index": 6,
"./youtube-plus-sc/index.js": 6,
"./youtube-plus-sc/index.user": 7,
"./youtube-plus-sc/index.user.js": 7,
"./youtube-plus-sc/lib/metadata": 17,
"./youtube-plus-sc/lib/metadata.js": 17,
"./youtube-plus-sc/youtube/2016": 18,
"./youtube-plus-sc/youtube/2016.js": 18,
"./youtube-plus-sc/youtube/2016/my_video": 8,
"./youtube-plus-sc/youtube/2016/my_video.js": 8,
"./youtube-plus-sc/youtube/2016/upload": 9,
"./youtube-plus-sc/youtube/2016/upload.js": 9,
"./youtube-plus-sc/youtube/2016/watch": 19,
"./youtube-plus-sc/youtube/2016/watch.js": 19
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
}, o.resolve = i, e.exports = o, o.id = 28;
}, function(e, t, n) {
e.exports = m, m.Minimatch = y;
var r = {
sep: "/"
};
try {
r = n(30);
} catch (e) {}
var o = m.GLOBSTAR = y.GLOBSTAR = {}, i = n(32), a = {
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
r += s, i = !0;
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
open: a[d].open,
close: a[d].close
}), r += "!" === d ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", d, r), d = !1;
continue;

case ")":
if (h || !c.length) {
r += "\\)";
continue;
}
b(), i = !0;
var T = c.pop();
r += T.close, "!" === T.type && p.push(T), T.reEnd = r.length;
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
var M = e.substring(m + 1, x);
try {
RegExp("[" + M + "]");
} catch (e) {
var k = this.parse(M, w);
r = r.substr(0, g) + "\\[" + k[0] + "\\]", i = i || k[1], h = !1;
continue;
}
}
i = !0, h = !1, r += j;
continue;

default:
b(), l ? l = !1 : !f[j] || "^" === j && h || (r += "\\"), r += j;
}
for (h && (M = e.substr(m + 1), k = this.parse(M, w), r = r.substr(0, g) + "\\[" + k[0], 
i = i || k[1]), T = c.pop(); T; T = c.pop()) {
var A = r.slice(T.reStart + T.open.length);
this.debug("setting tail", r, T), A = A.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
return n || (n = "\\"), t + t + n + "|";
}), this.debug("tail=%j\n   %s", A, A, T, r);
var E = "*" === T.type ? u : "?" === T.type ? s : "\\" + T.type;
i = !0, r = r.slice(0, T.reStart) + E + "\\(" + A;
}
b(), l && (r += "\\\\");
var S = !1;
switch (r.charAt(0)) {
case ".":
case "[":
case "(":
S = !0;
}
for (var N = p.length - 1; N > -1; N--) {
var D = p[N], O = r.slice(0, D.reStart), q = r.slice(D.reStart, D.reEnd - 8), L = r.slice(D.reEnd - 8, D.reEnd), $ = r.slice(D.reEnd);
L += $;
var G = O.split("(").length - 1, R = $;
for (x = 0; x < G; x++) R = R.replace(/\)[+*?]?/, "");
var H = "", P;
"" === ($ = R) && t !== w && (H = "$"), r = O + q + $ + H + L;
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
function j() {
if (this.regexp || !1 === this.regexp) return this.regexp;
var e = this.set;
if (!e.length) return this.regexp = !1, this.regexp;
var t = this.options, n = t.noglobstar ? u : t.dot ? l : c, r = t.nocase ? "i" : "", i = e.map(function(e) {
return e.map(function(e) {
return e === o ? n : "string" == typeof e ? M(e) : e._src;
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
function T(e, t) {
if (this.debug("match", e, this.pattern), this.comment) return !1;
if (this.empty) return "" === e;
if ("/" === e && t) return !0;
var n = this.options;
"/" !== r.sep && (e = e.split(r.sep).join("/")), e = e.split(d), this.debug(this.pattern, "split", e);
var o = this.set, i, a;
for (this.debug(this.pattern, "set", o), a = e.length - 1; a >= 0 && !(i = e[a]); a--) ;
for (a = 0; a < o.length; a++) {
var s = o[a], u = e, l;
if (n.matchBase && 1 === s.length && (u = [ i ]), this.matchOne(u, s, t)) return !!n.flipNegate || !this.negate;
}
return !n.flipNegate && this.negate;
}
function C(e) {
return e.replace(/\\(.)/g, "$1");
}
function M(e) {
return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
m.makeRe = function(e, t) {
return new y(e, t || {}).makeRe();
}, y.prototype.makeRe = j, m.match = function(e, t, n) {
var r = new y(t, n = n || {});
return e = e.filter(function(e) {
return r.match(e);
}), r.options.nonull && !e.length && e.push(t), e;
}, y.prototype.match = T, y.prototype.matchOne = function(e, t, n) {
var r = this.options, i;
this.debug("matchOne", {
this: this,
file: e,
pattern: t
}), this.debug("matchOne", e.length, t.length);
for (var a = 0, s = 0, u = e.length, l = t.length; a < u && s < l; a++, s++) {
this.debug("matchOne loop");
var c = t[s], f = e[a], p;
if (this.debug(t, c, f), !1 === c) return !1;
if (c === o) {
this.debug("GLOBSTAR", [ t, c, f ]);
var d = a, h = s + 1;
if (h === l) {
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
for (var l = [], u = s; u < o.length; u++) l.push("..");
return (l = l.concat(i.slice(s))).join("/");
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
}).call(this, n(31));
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
var l = [], c = !1, f, p = -1;
function d() {
c && f && (c = !1, f.length ? l = f.concat(l) : p = -1, l.length && h());
}
function h() {
if (!c) {
var e = s(d);
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
l.push(new g(e, t)), 1 !== l.length || c || s(h);
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
var r = n(33), o = n(34);
e.exports = h;
var i = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", s = "\0CLOSE" + Math.random() + "\0", u = "\0COMMA" + Math.random() + "\0", l = "\0PERIOD" + Math.random() + "\0";
function c(e) {
return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
}
function f(e) {
return e.split("\\\\").join(i).split("\\{").join(a).split("\\}").join(s).split("\\,").join(u).split("\\.").join(l);
}
function p(e) {
return e.split(i).join("\\").split(a).join("{").split(s).join("}").split(u).join(",").split(l).join(".");
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
var a = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body), u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body), l = a || u, f = i.body.indexOf(",") >= 0, p, h;
if (!l && !f) return i.post.match(/,.*\}/) ? x(e = i.pre + "{" + i.body + s + i.post) : [ e ];
if (l) p = i.body.split(/\.\./); else if (1 === (p = d(i.body)).length && 1 === (p = x(p[0], !1).map(m)).length) return (h = i.post.length ? x(i.post, !1) : [ "" ]).map(function(e) {
return i.pre + p[0] + e;
});
var g = i.pre, h = i.post.length ? x(i.post, !1) : [ "" ], w;
if (l) {
var _ = c(p[0]), j = c(p[1]), T = Math.max(p[0].length, p[1].length), C = 3 == p.length ? Math.abs(c(p[2])) : 1, M = v, k;
j < _ && (C *= -1, M = b);
var A = p.some(y);
w = [];
for (var E = _; M(E, j); E += C) {
var S;
if (u) "\\" === (S = String.fromCharCode(E)) && (S = ""); else if (S = String(E), 
A) {
var N = T - S.length;
if (N > 0) {
var D = new Array(N + 1).join("0");
S = E < 0 ? "-" + D + S.slice(1) : D + S;
}
}
w.push(S);
}
} else w = r(p, function(e) {
return x(e, !1);
});
for (var O = 0; O < w.length; O++) for (var q = 0; q < h.length; q++) {
var L = g + w[O] + h[q];
(!t || l || L) && n.push(L);
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
var r, o, i, a, s, u = n.indexOf(e), l = n.indexOf(t, u + 1), c = u;
if (u >= 0 && l > 0) {
for (r = [], i = n.length; c >= 0 && !s; ) c == u ? (r.push(c), u = n.indexOf(e, c + 1)) : 1 == r.length ? s = [ r.pop(), l ] : ((o = r.pop()) < i && (i = o, 
a = l), l = n.indexOf(t, c + 1)), c = u < l && u >= 0 ? u : l;
r.length && (s = [ i, a ]);
}
return s;
}
e.exports = r, r.range = i;
} ]);