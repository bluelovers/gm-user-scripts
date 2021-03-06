/**
 * Created by user on 2017/8/6/006.
 */

export const desc = '';
export const desc_en = desc;

export const icon = '';

export const grant = [
	'GM_registerMenuCommand',
	'GM_xmlhttpRequest',
	'GM_getValue',
];

/**
 * <%= token %>
 *
 * @type {string}
 */
export const metadata = `// ==UserScript==
// @name		<%= index.id %>
// @name:en		<%= index.name_en %>
// @name:ja		<%= index.name_ja %>
// @name:zh		<%= index.name %>
// @namespace	<%= index.namespace %>
// @author		<%= index.author %>
//
// @description		<%= index.desc %>
// @description:en	<%= index.desc_en %>
// @description:ja	<%= index.desc_ja %>
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
