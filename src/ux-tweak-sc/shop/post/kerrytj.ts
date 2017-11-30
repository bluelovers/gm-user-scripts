/**
 * Created by user on 2017/11/30/030.
 */

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

'use strict';

let o: IDemo = {

	//priority: 100,

	metadata: {
		include: [
			'http://www.kerrytj.com/zh/search/search_track.aspx*',
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
		const debounce = require('throttle-debounce/debounce');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		].join(','))
			.prop('target', '_blank')
		;

		$(window)
			.on('load.ready', debounce(100, function ()
			{
				let input = $('#trackNo1');

				if (input.length && !input.val())
				{
					let r = /trackNo\d?=(\d+)/;

					if (document.referrer.match(r) || (_url_obj && _url_obj.query.match(r)))
					{
						input
							.val('123')
							.trigger('keydown')
							.trigger('keyup')
							.val(RegExp.$1)
							.trigger('change')
						;

						{
							let event = new Event('change');
							input[0].dispatchEvent(event);
						}
					}
				}
			}))
			.triggerHandler('load.ready')
		;
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

export = o as IDemo;
