/**
 * Created by user on 2017/8/6/006.
 */

export const desc = '此腳本試圖解決智障 FB 新分享機制導致的困擾';

export const metadata = `// ==UserScript==
// @name		<%= index.name %>
// @name:en		<%= index.name_en %>
// @name:zh		<%= index.name %>
// @namespace	bluelovers
// @author		bluelovers
//
// @description		<%= index.desc %>
// @description:en	<%= index.desc_en %>
// @description:zh	<%= index.desc %>
//
// @version		<%= pkg.version %>
//
// grant		GM_registerMenuCommand
// @grant		unsafeWindow
// grant		GM_addStyle
// grant		none
//
// @icon		<%= index.icon %>
//
// @noframes
// @encoding	utf-8
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js
//
// @include		<%= index.include %>
//
// @exclude		<%= index.exclude %>
//
// require		https://code.jquery.com/jquery-3.2.1.js?<%= token %>
// require		https://code.jquery.com/jquery-migrate-3.0.0.js?<%= token %>
//
// require		https://raw.githubusercontent.com/bluelovers/jquery-color/develop/jquery.color.js?<%= token %>
//
// ==/UserScript==
`;

export default metadata;
