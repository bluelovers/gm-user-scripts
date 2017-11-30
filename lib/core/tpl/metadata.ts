/**
 * Created by user on 2017/8/6/006.
 */

export const desc = '';
export const desc_en = desc;

export const icon = '';

export const grant = [
	//
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
// grant		none
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
