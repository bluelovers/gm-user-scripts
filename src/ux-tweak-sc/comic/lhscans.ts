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
			'http*://lhscans.com/*',
			'http*://loveheaven.net/*',
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

		let _img = $('.chapter-content img.chapter-img');

		if (_img.length)
		{
			o.adblock(_url_obj);

			greasemonkey
				.GM_addStyle([
					`.chapter-content img.chapter-img { ${comic_style.toCss(comic_style.photo)}; max-height: 100%; }`,
				])
			;

			_img
				// @ts-ignore
				.imagesLoaded()
				.done(function (instance)
				{
					$(window).triggerHandler('resize.done');
				})
			;

			$(window)
				.on('load.ready', function ()
				{
					_img = $('.chapter-content img.chapter-img');

					$(window).triggerHandler('resize.done');
				})
				.on('resize.done', debounce(200, function ()
				{
					_uf_fixsize2(_img, window, 1);

					let _to = _img.filter(':onScreen').eq(-1);

					// @ts-ignore
					$(window).scrollTo(_to.parent('.separator').addBack());
				}))
				.on('load.init',  debounce(2000, function ()
				{
					_img = $('.chapter-content img.chapter-img');

					$(window).triggerHandler('resize.done');
				}))
				.off('keydown.page')
				.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
				{
					let _i = 0;

					_img.each(function (i, elem)
					{
						if ($(elem).is(":onScreen"))
						{
							_i = i;

							return false;
						}
					});

					//console.log(_i, _img);

					switch (event.which)
					{
						case keycodes('pageup'):
							//case keycodes('left'):

							if (_i > 0)
							{
								_i--;
							}

							var _a = _img.eq(_i);

							if (_a.length)
							{
								_uf_done(event);
								// @ts-ignore
								$(window).scrollTo(_a.parents('.separator').addBack());
							}

							break;
						case keycodes('pagedown'):
							//case keycodes('right'):
							if (_i < _img.length)
							{
								_i++;
							}

							//console.log(_i, _img.length);

							var _a = _img.eq(_i);

							if (_a.length)
							{
								_uf_done(event);

								// @ts-ignore
								$(window).scrollTo(_a.parents('.separator').addBack());
							}

							break;
					}
				}))
				.triggerHandler('load')
			;
		}
	},

	adblock(_url_obj = global._url_obj)
	{
		let _dom = $();

		_dom = _dom
			.add([
				'.quang-cao',
			].join())
		;

		_dom.hide();
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
