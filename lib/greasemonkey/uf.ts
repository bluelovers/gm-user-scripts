/**
 * Created by user on 2017/11/14/014.
 */

import * as greasemonkey from './index';

Object.assign(exports, greasemonkey);

export interface IGreasemonkey
{
	GM_addStyle(css: string | string[], head?);
	debug(any: any, ...argv);
	info(any: any, ...argv);
	log(any: any, ...argv);
}

export function GM_addStyle(css: string | string[], head?)
{
	if (Array.isArray(css))
	{
		css = css.join('');
	}

	if (typeof head == 'string')
	{
		head = $(head);
	}

	if (typeof head == 'object' && head.length && typeof head[0] == 'object')
	{
		head = head[0];
	}

	return greasemonkey.GM_addStyle(css.toString(), head);
}

export function debug(any: any, ...argv)
{
	return console.info(`%c[${global.userScript.id}][debug]`, 'color: #4B90C2;', any, ...argv);
}

export function info(any: any, ...argv)
{
	return console.info(`%c[${global.userScript.id}][info]`, 'color: #ccc;', any, ...argv);
}

export function log(any: any, ...argv)
{
	return console.log(any, ...argv);
}

export default exports;
