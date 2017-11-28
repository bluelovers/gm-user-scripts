/**
 * Created by user on 2017/8/6/006.
 */

module.exports.metadata = `// ==UserScript==
// @name		<%= pkg.name %>
// @namespace	bluelovers
//
// @description	各種網站 UX 優化 與 搭配某些插件/行為時的簡化動作 並且適合搭配 Scrapbook 擷取內容
//
// @version		<%= pkg.version %>
//
// @grant		GM_registerMenuCommand
// @grant		GM_xmlhttpRequest
// @grant		unsafeWindow
// grant		GM_addStyle
// grant		none
//
// @grant		GM_deleteValue
// @grant		GM_getValue
// @grant		GM_listValues
// @grant		GM_setValue
//
// @icon		<%= index.icon %>
//
// @noframes
// @encoding	utf-8
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/ux-tweak-sc.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/ux-tweak-sc.user.js
//
// @include		<%= index.include %>
//
// @match		<%= index.match %>
//
// @exclude		<%= index.exclude %>
//
// ==/UserScript==
`;
