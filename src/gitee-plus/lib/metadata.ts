/**
 * Created by user on 2017/8/6/006.
 */

export const desc = '於 Gitee 碼雲 增加一點小功能';
export const desc_en = desc;

export const icon = '';

export const grant = [
	'GM_registerMenuCommand',
	'GM_xmlhttpRequest',
	'unsafeWindow',
	'GM_deleteValue',
	'GM_getValue',
	'GM_listValues',
	'GM_setValue',
];

/**
 * <%= token %>
 *
 * @type {string}
 */
export const metadata = `// ==UserScript==
// @name		<%= index.id %>
// @name:en		<%= index.name_en %>
// @name:zh		<%= index.name %>
// @namespace	<%= index.namespace %>
// @author		<%= index.author %>
//
// @description		<%= index.desc %>
// @description:en	<%= index.desc_en %>
// @description:zh	<%= index.desc %>
//
// @version		<%= pkg.version %>
//
// @grant		<%= index.grant %>
// g_r_a_n_tnone
//
// @icon		<%= index.icon %>
//
// noframes
// @encoding	utf-8
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js
// @updateURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/<%= index.id %>.user.js
//
// @include		<%= index.include %>
//
// @match		<%= index.match %>
//
// @exclude		<%= index.exclude %>
//
// ==/UserScript==
`;

export default metadata;
