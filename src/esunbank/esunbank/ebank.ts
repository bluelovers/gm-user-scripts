/**
 * Created by user on 2017/11/26/026.
 */

/**
 * Created by user on 2017/11/26/026.
 */

import { IDemo, IGlobal, IGreasemonkey } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;

'use strict';

let o: IDemo = {

	//priority: 100,

	metadata: {
		match: [
			//'http*://ebank.esunbank.com.tw/*',
			//'http*://ebank.esunbank.com.tw/index.jsp*',
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
					unsafeWindow.$.iloginchecker().keepSession();
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
					`.winpop_print td._uf_fcm_red { color: red !important; }`,
					`.mb5 td { text-align: center; }`,
				])
			;

			let _cache_ = {
				next_pay: 0,
				total_will_pay: 0,
			};

			$('.table_ver[id] tr:has(> .rt)')
				.not('tr:eq(-1)')
				.each(function ()
				{
					let _row = $(this);

					let _lt = $('.lt', _row);

					let _m;

					_m = _lt
						.text()
						.toString()
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
						_do = true;

						_cache_.total_will_pay += parseInt(_text);
					}
					else if (_m = _lt.text().match(/未到期金額(\d+)元/))
					{
						_cache_.total_will_pay += parseInt(_m[1]);
					}

					if (_do)
					{
						_cache_.next_pay += parseInt(_text);
					}
				})
			;

			$('.mb5.noneborder[id]:eq(0)')
				.after(function ()
				{
					return $('<table/>')
						.addClass('mb5')
						.css('width', $(this).css('width'))
						.append(`<td class="_uf_fcm" width="25%">下期估算應付帳款<br/>${_cache_.next_pay}</td>`)
						.append(`<td class="_uf_fcm_red" width="25%">總估算（含分期）<br/>${_cache_.total_will_pay}</td>`)
						.append(`<td width="75%"></td>`)
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

export = o;

