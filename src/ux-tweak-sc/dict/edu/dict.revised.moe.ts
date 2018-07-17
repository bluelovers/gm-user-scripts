/**
 * Created by user on 2017/11/26/026.
 */

"use strict";

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

let o: IDemo = {

	//priority: 100,

	metadata: {
		include: [
			'http*://dict.revised.moe.edu.tw/*',
			'http*://dict.revised.moe.edu.tw/cbdic/search.htm*',
		],
		match: [],
		nomatch: [],
		exclude: [],

		grant: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return true;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

		if (_url_obj.path.match(/search\.htm/) || _url_obj.query.match(/o=dcbdic/))
		{
			$('script').remove();
		}

		this.adblock(_url_obj);

		$('form[name="main"]').attr('method', 'get');

		let qs = new URLSearchParams(_url_obj.query);

		console.info(qs.toString());

		let qs0 = $('#qs0:input, :input[name="qs0"]').eq(0);
		let qs_qs0 = qs.get('qs0') || '';

		if (qs_qs0 && qs0.length)
		{
			if (!qs0.val())
			{
				qs0.val(qs_qs0);
			}
		}

		$(window)
			.on('load', function ()
			{
				let _a = $('a.slink')
					.attr('target', '_blank')
					.prop('target', '_blank')
				;

				console.log(_a);
			})
			.triggerHandler('load')
		;
	},

	adblock(_url_obj = global._url_obj)
	{
		{
			let days = 365;
			let date = new Date();
			date.setTime(date.getTime()+(days * 24 * 60 * 60 * 1000));
			// @ts-ignore
			let _expires = date.toGMTString();
			_expires = ';expires=' + _expires;

			document.cookie = 'cbdic' + '=' + (getCookie('cbdic') || 'notice:1') + _expires + ';domain=' + 'dict.revised.moe.edu.tw' + ';path=' + '/';

			document.cookie = '_gat' + '=' + '1' + _expires + ';domain=' + 'dict.revised.moe.edu.tw' + ';path=' + '/';
		}

		$('body')
			.removeAttr('onLoad')
			.removeAttr('onUnload')
		;

		// @ts-ignore
		document.body.onload = null;
		// @ts-ignore
		document.body.onunload = null;

		try
		{
			// @ts-ignore
			unsafeWindow.document.body.onload = null;
			// @ts-ignore
			unsafeWindow.document.body.onunload = null;
			unsafeWindow.onload = null;
			unsafeWindow.onunload = null;
		}
		catch (e)
		{

		}

		try
		{
			// @ts-ignore
			unsafeWindow.fsUnload();
		} catch (e) {}

		try
		{
			// @ts-ignore
			unsafeWindow.cleartimeout();
		} catch (e) {}
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				//
			].join())
		;

		return _dom;
	},

};

export = o as IDemo;

function getCookie(e)
{
	let o, t;
	let n = document, c = decodeURI;
	return n.cookie.length > 0 && (o = n.cookie.indexOf(e + "="), -1 != o)
		? (o = o + e.length + 1, t = n.cookie.indexOf(";", o), -1 == t && (t = n.cookie.length), c(n.cookie.substring(o, t)))
		: "";
}
