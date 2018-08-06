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

		greasemonkey
			.GM_addStyle([
				`html, body, :root { font-size: 9pt; }`,
				`table, select, input { font-size: inherit; }`,
				`select, input, option, font, .prtresult_div .resnums, .menufmt1, .menu2s1n a, .fmt1table .mainth, .fmt1table a:link, .fmt1table a:visited, .fmt1table .subfont, .fmt1table { font-family: initial; }`,
				`.prtresult_div, .menu2s1n a, .pagefont, #nav, .menu2s1n a, .nn1, .fmt1table .mainth, .fmt1table, .fmt1table .maintd0, .fmt1table .maintd1 { font-size: 1rem; }`,
				`.numfont { display: inline-block; min-width: 1em; text-align: center; }`,

				`sub.subfont { vertical-align: text-top; }`,

				`.fmt1table .maintd0, .fmt1table .maintd1 { padding: 1px; }`,
				`.fmt1table tr .maintd0:nth-child(3), .fmt1table .maintd1:nth-child(3) { font-size: 0.9rem; }`,


			], 'body')
		;

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

			let input_name = 'selectmode';

			if (target_qs.get(input_name))
			{
				console.log(target_qs.get(input_name));

				let ip = $(`:checkbox[name="${input_name}"]`, form)
					.removeAttr('checked')
					.prop('checked', false)
					.filter(`[value="${target_qs.get(input_name)}"]`)
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

			input_name = 'clscan';

			if (target_qs.get(input_name))
			{
				console.log(target_qs.get(input_name));

				let ip = $(`select[name="${input_name}"]`, form)
					.val(target_qs.get(input_name))
				;

				bool = true;
			}

			input_name = 'psize';

			if (target_qs.get(input_name))
			{
				let value = target_qs.get(input_name);

				let input = $(`select[name="${input_name}"], :input[name="${input_name}"]`, form);

				console.log(input_name, value, input);

				if (!input.length)
				{
					input = $(`<input name="${input_name}" type="hidden"/>`)
						.appendTo(form)
					;

					input.val(value)
				}
			}
			input_name = 'sortby';

			if (target_qs.get(input_name))
			{
				let value = target_qs.get(input_name);

				let input = $(`select[name="${input_name}"], :input[name="${input_name}"]`, form);

				console.log(input_name, value, input);

				if (!input.length)
				{
					input = $(`<input name="${input_name}" type="hidden"/>`)
						.appendTo(form)
					;

					input.val(value)
				}
			}

			console.log(bool);

			if (bool)
			{
				// @ts-ignore
				form[0].submit();
			}
		}

		if (_url_obj.path.match(/gsweb\.cgi/))
		{
			$(window)
				// @ts-ignore
				.scrollTo('.fmt1table')
			;

			if (target_qs0)
			{
				$('.fmt1table a').prop('href', function (i, old)
				{
					let u = new URL(old);

					if (!u.searchParams.get('qs0_from'))
					{
						u.searchParams.set('qs0_from', target_qs0);
					}

					return u.href;
				})
			}
		}

		$(window)
			.on('load', function ()
			{
				let _a = $('a.slink:not(.prtresult_div a)')
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
