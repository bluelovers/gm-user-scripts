/**
 * Created by user on 2017/8/6/006.
 */

export const desc = '輔助判斷百度盤是封鎖還是過期';

export const grant = [

];

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
// @grant		<%= index.grant %>
// g_r_a_n_tnone
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
// @match		<%= index.match %>
//
// @exclude		<%= index.exclude %>
//
// ==/UserScript==
`;

export default metadata;
