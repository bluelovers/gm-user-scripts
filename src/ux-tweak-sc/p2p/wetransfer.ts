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
			//'http*://www.gamer.com.tw/*',
		],
		match: [
			'https://wetransfer.com/*',
		],
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
		const _uf_done = require('root/lib/event/done');
		const { debounce } = require('throttle-debounce');
		const { throttle } = require('throttle-debounce');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		])
			.prop('target', '_blank')
		;

		$('.wallpaper').on('click', _uf_done);

		$('body')
			.on('DOMNodeInserted', '.transfer', debounce(300, function ()
			{
				let input = $('.transfer__textfield');

				//console.log(input);

				if (input.length && $('.uploader__image:visible').length)
				{
					let size = 200;
					let url = input.val();

					let _img = $(`<img src="https://chart.apis.google.com/chart?cht=qr&chs=${size}x${size}&chl=${url}"/>`)
						.css({
							margin: 'auto',
							display: 'block',
						})
					;

					$('.uploader__image')
						.after(_img)
						.hide()
					;
				}
				else if ($('.transfer__upsell, .transfer__button').length > 1)
				{
					$('.transfer__button').click();
				}

			}))
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

		return _dom;
	},

};

export = o as IDemo;
