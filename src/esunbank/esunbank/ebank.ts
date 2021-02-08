/**
 * Created by user on 2017/11/26/026.
 */

/**
 * Created by user on 2017/11/26/026.
 */

import { IDemo, IGlobal, IGreasemonkey, IWindow } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;

'use strict';

let o: IDemo = {

	metadata: {
		include: [
			'http*://ebank.esunbank.com.tw/fcm/*',
			'http*://ebank.esunbank.com.tw/fco/*',
		],
		nomatch: [],
		exclude: [],
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
		_uf_dom_filter_link([
			//
		].join(','))
			.prop('target', '_blank')
		;

		_url_obj.path = _url_obj.path || '';

		if (_url_obj.path.match(/fco/))
		{
			setInterval(function ()
			{
				try
				{
					(unsafeWindow.$ as any).iloginchecker().keepSession();
				}
				catch (e)
				{
					$('#content .top_function .timer a.reset')
						.eq(0)
						.each(function ()
						{
							this.click();
						})
					;
				}

			}, 30000);
		}
		else if (_url_obj.path.match(/fcm/))
		{
			greasemonkey
				.GM_addStyle([
					`.winpop_print td._uf_fcm_done, .winpop_print ._uf_fcm_done td { color: #ccc !important; }`,
					`.winpop_print td._uf_fcm, .winpop_print ._uf_fcm .lt, .winpop_print ._uf_fcm .rt { color: blue !important; }`,
					`.winpop_print td._uf_fcm_red, .winpop_print tr._uf_fcm_red td, .winpop_print ._uf_fcm_red .lt, .winpop_print ._uf_fcm_red .rt { color: red !important; }`,

					`.winpop_print tr._uf_fcm td { background-color: #97d5ed !important; }`,
					`.winpop_print tr._uf_fcm_red td { background-color: #310f4a !important; }`,

					`.mb5 td { text-align: center; }`,
				])
			;

			let _cache_ = {
				next_pay: 0,
				count_next_pay: 0,

				total_will_pay: 0,
				count_will_pay: 0,

				total_pay_returned: 0,
				count_pay_returned: 0,
			};

			$('.table_ver[id] tr:has(> .rt)')
				.not('tr:eq(-1)')
				.each(function ()
				{
					let _row = $(this);

					let _lt = $('.lt', _row);
					let _title = _lt
						.text()
						.toString()
					;

					let _m = _title
						.match(/分(\d+)期之第(\d+)期/)
					;

					let _do = false;

					let _rt2 = $('.rt:eq(-1)', _row);
					let _text = _rt2.text().trim();

					if (_m)
					{
						if (_m[1] == _m[2])
						{
							_row.addClass('_uf_fcm_done');
						}
						else
						{
							_row.addClass('_uf_fcm');

							_do = true;
						}
					}
					else if (_text)
					{
						//_do = true;

						//_cache_.total_will_pay += parseInt(_text);

						let pay = parseInt2(_text);

						if (pay < 0)
						{
							console.warn(_title, _text, pay);

							_cache_.total_pay_returned += pay;
							_cache_.count_pay_returned++;

							_row.addClass('_uf_fcm_red');
						}
						else
						{
							console.log(_title, _text, pay);
						}
					}
					else if (_m = _lt.text().match(/未到期金額(\d+)元/))
					{
						_cache_.total_will_pay += parseInt2(_m[1]);
						_cache_.count_will_pay++;
					}

					if (_do)
					{
						_cache_.next_pay += parseInt2(_text);
						_cache_.count_next_pay++;
					}
				})
			;

			$('.mb5.noneborder[id]:eq(0)')
				.after(function ()
				{
					return $('<table/>')
						.addClass('mb5')
						.css('width', $(this).css('width'))
						.append(`<td class="_uf_fcm" width="25%">下期起始應付帳款<br/>${_cache_.next_pay} （${_cache_.count_next_pay}）</td>`)
						.append(`<td class="_uf_fcm_red" width="25%">總估算（含分期）<br/>${_cache_.total_will_pay} （${_cache_.count_will_pay}）</td>`)
						.append(`<td class="_uf_fcm_red" width="25%">本月退款<br/>${_cache_.total_pay_returned} （${_cache_.count_pay_returned}）</td>`)
						.append(`<td width="50%"></td>`)
						;
					;
				})
			;

			console.log(o.name, _cache_);
		}
	},

	adblock(_url_obj = global._url_obj)
	{
		//
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				//
			].join())
		;

		//_dom.remove();

		return _dom;
	},

};

function parseInt2(text: string)
{
	return parseInt(text.replace(/(\d),(?=\d{3})\b/g, '$1'))
}

export = o;

