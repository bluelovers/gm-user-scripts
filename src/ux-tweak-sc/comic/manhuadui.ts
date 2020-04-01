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
			'https://www.manhuadui.com/manhua/*',
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
			//
		])
			.prop('target', '_blank')
		;

		const _uf_done = require('root/lib/event/done');
		const { debounce } = require('throttle-debounce');
		const { throttle } = require('throttle-debounce');
		const greasemonkey = require('root/lib/greasemonkey/uf');
		const _uf_fixsize2 = require('root/lib/dom/img/size')._uf_fixsize2;
		const comic_style = require('root/lib/comic/style');
		require('root/lib/jquery/onscreen');
		const keycodes = require('keycodes');

		let body_area = $('.chapter-view');

		if (body_area.length)
		{
			greasemonkey
				.GM_addStyle([
					`.comic_wraCon img { padding: 0; margin-top: 0; }`,
				])
			;

			let _img = $('#images > img', body_area)
				// @ts-ignore
				.imagesLoaded()
				.done(function (instance)
				{
					$(window).triggerHandler('resize.done');
				})
			;

			$('.img_land_next, .img_land_prev').hide();

			$(window)
				.on('load.ready', function ()
				{
					_img = $('#images > img', body_area);

					$(window).triggerHandler('resize.done');
				})
				.on('resize.done', debounce(200, function ()
				{
					_uf_fixsize2(_img, window, 1);

					// @ts-ignore
					$(window).scrollTo('#images');
				}))
				.on('load.init',  debounce(2000, function ()
				{
					_img = $('#images > img', body_area);

					$(window).triggerHandler('resize.done');
				}))
				.off('keydown.page')
				.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
				{
					switch (event.which)
					{
						case keycodes('pageup'):
							//case keycodes('left'):

							// @ts-ignore
							unsafeWindow.SinTheme.prevPage();

							break;
						case keycodes('pagedown'):
							//case keycodes('right'):

							// @ts-ignore
							unsafeWindow.SinTheme.nextPage();

							break;
					}
				}))
				.triggerHandler('load')
			;
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

		return _dom;
	},

};

export = o as IDemo;
