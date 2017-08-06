/**
 * Created by user on 2017/8/6/006.
 */

module.exports.metadata = `// ==UserScript==
// @name		<%= pkg.name %>
// @namespace	bluelovers
//
// @description	各種網站 UX 優化 與 搭配某些插件/行為時的簡化動作
//
// @version		<%= pkg.version %>
//
// @grant		GM_registerMenuCommand
// @grant		unsafeWindow
// grant		GM_addStyle
// grant		none
//
// @noframes
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/ux-tweak-sc.user.js
//
// @match		<%= index.match %>
//
// @exclude		<%= index.exclude %>
//
// @require		https://code.jquery.com/jquery-3.2.1.js?<%= token %>
// require		https://code.jquery.com/jquery-migrate-3.0.0.js?<%= token %>
//
// require		https://raw.githubusercontent.com/bluelovers/jquery-color/develop/jquery.color.js?<%= token %>
//
// ==/UserScript==
`;
