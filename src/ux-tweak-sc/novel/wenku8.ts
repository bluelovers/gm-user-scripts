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

	metadata: {
		include: [
			'http*://www.wenku8.com/*',
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
		_uf_dom_filter_link([
			'#content .grid b a, table.css .ccss a, #content .grid a:has(img)',
		].join(','))
			.prop('target', '_blank')
		;

		// @ts-ignore
		$(window).scrollTo('#content');

		$(window)
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/lib/event/done');

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('#pagelink a.prev');

						if (_a.length)
						{
							_uf_done(event);

							_a[0].click();
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('#pagelink a.next');

						if (_a.length)
						{
							_uf_done(event);

							_a[0].click();
						}

						break;
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
