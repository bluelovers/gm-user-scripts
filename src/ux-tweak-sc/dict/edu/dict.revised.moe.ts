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
			$('script:not([src])').remove();
		}

		if (_url_obj.path == '/' || _url_obj.path == '')
		{
			$('meta[HTTP-EQUIV*="Refresh"], meta[HTTP-EQUIV*="refresh"]').remove();
		}

		this.adblock(_url_obj);

		let referrer_url: URL;
		let referrer_qs: URLSearchParams;
		let current_qs: URLSearchParams;
		let target_qs: URLSearchParams;

		if (document.referrer && document.referrer.match(/dict\.revised\.moe\.edu\.tw/))
		{
			referrer_url = new URL(document.referrer);

			if (hasSearchParams(referrer_url))
			{
				referrer_qs = referrer_url.searchParams;
			}
		}

		if (hasSearchParams(_url_obj.query))
		{
			current_qs = new URLSearchParams(_url_obj.query);
		}

		if (referrer_qs && referrer_qs.get('qs0'))
		{
			target_qs = referrer_qs;
		}

		if (current_qs && current_qs.get('qs0'))
		{
			target_qs = current_qs;
		}

		let target_ccd: string = target_qs && target_qs.get('ccd') || '';
		let target_qs0 = '';

		if (target_qs)
		{
			target_qs.delete('ccd');
			target_qs.delete('o');
			target_qs.delete('index');
		}

		if (!hasSearchParams(target_qs))
		{
			target_qs = null;
		}
		else
		{
			target_qs0 = target_qs.get('qs0');
		}

		console.info({
			referrer: referrer_url,
			referrer_qs,
			current_qs,
			target_qs,
			target_ccd,
			target_qs0,
		});

		if (target_qs && _url_obj.path.match(/cbdic(?:\/(?:index.html)?)?$/))
		{
			let url = "/cgi-bin/cbdic/gsweb.cgi/?&o=dcbdic&" + "cache="+(new Date()).getTime() + '&' + target_qs.toString();

			let _a = $('#myContent .my-img a')
				//.attr('href', '/cbdic/search.htm?' + target_qs.toString())
				.attr('href', url)
			;

			_a[0].click();
		}

		let form = $('form[name="main"]').attr('method', 'get');

		let qs0_input = $('#qs0:input, :input[name="qs0"]').eq(0);

		if (target_qs0 && qs0_input.length)
		{
			if (!qs0_input.val())
			{
				qs0_input.val(target_qs0);
			}
		}

		if (target_qs && _url_obj.path.match(/gsweb\.cgi/) && _url_obj.query.match(/index=1/) && form.length)
		{
			let bool;

			if (target_qs.get('selectmode'))
			{
				console.log(target_qs.get('selectmode'));

				let ip = $(':checkbox[name="selectmode"]', form)
					.removeAttr('checked')
					.prop('checked', false)
					.filter(`[value="${target_qs.get('selectmode')}"]`)
					.eq(0)
					.attr('checked', 'checked')
					.prop('checked', true)
				;

				if (ip.length)
				{
					ip[0].click();
				}

				bool = true;
			}

			if (target_qs.get('clscan'))
			{
				console.log(target_qs.get('clscan'));

				let ip = $('select[name="clscan"]', form)
					.val(target_qs.get('clscan'))
				;

				bool = true;
			}

			console.log(bool);

			if (bool)
			{
				// @ts-ignore
				form[0].submit();
			}
		}

		$(window)
			.on('load', function ()
			{
				let _a = $('a.slink')
					.attr('target', '_blank')
					.prop('target', '_blank')
				;
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

		$('body, html, :root')
			.removeAttr('onLoad')
			.removeAttr('onUnload')
			.removeAttr('onclick')
			.removeAttr('onkeypress')
		;

		try
		{
			// @ts-ignore
			document.body.onload = document.body.onunload = document.body.onclick = document.body.onkeypress = null;
		} catch (e) {}

		try
		{
			// @ts-ignore
			unsafeWindow.document.body.onload = unsafeWindow.document.body.onunload = unsafeWindow.document.body.onclick = unsafeWindow.document.body.onkeypress = null;

			// @ts-ignore
			unsafeWindow.onload = unsafeWindow.onunload = unsafeWindow.onclick = unsafeWindow.onkeypress = null;
		} catch (e) {}

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

		$('#myContent .my-img a[href*="html_onclick"]').attr('href', '/cbdic/search.htm');
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

function hasSearchParams(obj: URLSearchParams | URL | string)
{
	if (obj)
	{
		if (obj instanceof URL)
		{
			obj = obj.searchParams;
		}

		let s = '';

		if (obj instanceof URLSearchParams)
		{
			s = obj.toString();
		}
		else
		{
			s = obj.toString();
		}

		return s.replace(/^[\?\s#&]+|[\?\s#&]+$/g, '').length > 1;
	}

	return false;
}
