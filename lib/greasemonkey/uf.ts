/**
 * Created by user on 2017/11/14/014.
 */

export * from './index';
import * as greasemonkey from './index';

//Object.assign(exports, greasemonkey);

export interface IGreasemonkey
{
	GM_addStyle(css: string | string[], head?);
	debug(any: any, ...argv);
	info(any: any, ...argv);
	log(any: any, ...argv);
	error(any: any, ...argv);

	addStylesheet(url, head?);

	default: IGreasemonkey;
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

export function addStylesheet(url, head?)
{
	if (typeof url === 'object' && url.webfont)
	{
		url = url.webfont;
	}

	return $(`<link rel="stylesheet" href="${url.toString()}"/>`)
		.appendTo(head || $('header, body').eq(0))
	;
}

export function debug(any: any, ...argv)
{
	// @ts-ignore
	return console.info(`%c[${global.userScript.id}][debug]`, 'color: #4B90C2;', any, ...argv);
}

export function error(any: any, ...argv)
{
	// @ts-ignore
	return console.error(`%c[${global.userScript.id}][error]`, 'color: red;', any, ...argv);
}

export function info(any: any, ...argv)
{
	// @ts-ignore
	return console.info(`%c[${global.userScript.id}][info]`, 'color: #ccc;', any, ...argv);
}

export function log(any: any, ...argv)
{
	return console.log(any, ...argv);
}

export function openInTabBackground(url: string)
{
	let win = window.open(url, '_blank');

	setTimeout(function ()
	{
		window.focus();
	}, 300);

	return win;
}

import * as self from './uf';
export default self;
