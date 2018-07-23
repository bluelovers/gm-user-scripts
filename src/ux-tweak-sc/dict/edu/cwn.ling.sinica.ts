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
			'http*://cwn.ling.sinica.edu.tw/*',
			'http*://cwn.ling.sinica.edu.tw/query1.htm*',
			'http*://cwn.ling.sinica.edu.tw/_process.asp*',
			'http*://cwn.ling.sinica.edu.tw/input.asp*',
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

		this.adblock(_url_obj);

		let referrer_url: URL;
		let referrer_qs: URLSearchParams;
		let current_qs: URLSearchParams;
		let target_qs: URLSearchParams;

		if (document.referrer && document.referrer.match(/cwn\.ling\.sinica\.edu\.tw/))
		{
			referrer_url = new URL(document.referrer);

			if (hasSearchParams(referrer_url))
			{
				referrer_qs = referrer_url.searchParams;
			}
		}

		{
			let _a = $('a[href*="_process.asp?inputword="]');

			if (_a.length > 1)
			{
				_a.attr('target', '_blank');
			}
		}

		const Q_MAIN = 'inputword';

		if (hasSearchParams(_url_obj.query))
		{
			current_qs = new URLSearchParams(_url_obj.query);
		}

		if (referrer_qs && referrer_qs.get(Q_MAIN))
		{
			target_qs = referrer_qs;
		}

		if (current_qs && current_qs.get(Q_MAIN))
		{
			target_qs = current_qs;
		}

		let target_qs0 = '';

		if (!hasSearchParams(target_qs))
		{
			target_qs = null;
		}
		else
		{
			target_qs0 = target_qs.get(Q_MAIN).trim();
		}

		let form = $('form[name="form1"]').attr('method', 'get');

		let qs0_input = $(`:input[name="${Q_MAIN}"]`).eq(0);

		{
			let q_name = 'radiobutton';

			if (target_qs.get(q_name))
			{
				let q_value = target_qs.get(q_name);

				console.log(q_name, q_value);

				let ip = $(`input[name="${q_name}"]`)
					.removeAttr('checked')
					.prop('checked', false)
					.filter(`[value="${q_value}"]`)
					.eq(0)
					.attr('checked', 'checked')
					.prop('checked', true)
				;

				if (ip.length)
				{
					ip[0].click();
				}

				$('a[href$="query1.htm"]').attr('href', function (i, old)
				{
					return 'input.asp' + '?' + `${q_name}=${q_value}`;
				})
			}
		}

		if (target_qs0 && qs0_input.length)
		{
			let bool;

			if (!qs0_input.val() && (target_qs === current_qs || target_qs0.match(/^[\w\u4E00-\u9FFF\s]+$/i)))
			{
				qs0_input.val(target_qs0);

				if (current_qs && current_qs.get(Q_MAIN))
				{
					bool = true;
				}
			}

			console.log('bool', bool, {
				current_qs,
				target_qs,
			});

			if (bool)
			{
				form.submit();
			}
		}
	},

	adblock(_url_obj = global._url_obj)
	{

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
