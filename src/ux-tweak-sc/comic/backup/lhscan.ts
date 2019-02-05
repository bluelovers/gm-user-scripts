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
			'http*://lhscan.net/*',
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
		const { debounce } = require('throttle-debounce');
		const { throttle } = require('throttle-debounce');
		const _uf_fixsize2 = require('root/lib/dom/img/size')._uf_fixsize2;
		const keycodes = require('keycodes');
		const _uf_done = require('root/lib/event/done');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		])
			.prop('target', '_blank')
		;

		const _img_selector = '.chapter-content .chapter-img';
		let _img = $(_img_selector);

		$(window)
			.on('load.ready', throttle(300, function ()
			{
				$(window).triggerHandler('resize.img');

				// @ts-ignore
				$(window).scrollTo('.chapter-content, .info-manga .well:eq(0)');

			}))
			.on('resize.img', throttle(300, function ()
			{
				_uf_fixsize2(_img, window, 1);
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

		return _dom;
	},

};

export = o as IDemo;
