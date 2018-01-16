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
			'http*://www.manhuaren.com/*',
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
		const keycodes = require('keycodes');
		const _uf_done = require('root/lib/event/done');
		const comic_style = require('root/lib/comic/style');
		const greasemonkey = require('root/lib/greasemonkey/uf');
		const _uf_fixsize2 = require('root/lib/dom/img/size')._uf_fixsize2;
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');
		require('root/lib/jquery/onscreen');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([

		].join(','))
			.prop('target', '_blank')
		;

		let _img;
		let _div_page;

		let _fn_page = function (_to)
		{
			if (_div_page)
			{
				$(window)
					.triggerHandler('resize')
				;

				_div_page
					.text((parseInt(_to.attr('data-index')) + 1) + '/' + _img.length)
				;

				_div_page
					.offset({
						left: _to.offset().left - _div_page.outerWidth(),
					})
				;
			}
		};

		let _img_area = $('.readPage #cp_img')
			.on('DOMNodeInserted', debounce(50, function (event)
			{
				let r;
				if (r = lazyload())
				{
					if (r == 2)
					{
						_div_page = $('<div data-div-page/>')
							.css(comic_style.page)
							.css(comic_style.bg_dark)
							.css(comic_style.bg_dark_border)
							.css(comic_style.bg_dark_text)
							.css({
								top: 50,
								position: 'fixed',
							})
							.appendTo('body')
						;
					}

					_img = $('.readPage #cp_img img.lazy');

					_img
						.not('[data-done]')
						.attr('data-done', true)
						.attr('src', function (i, old)
						{
							return $(this).attr('data-original');
						})
						.wrap('<figure/>')
					;

					_img.attr('data-index', function (i)
					{
						return i;
					});

					_img.imagesLoaded()
						.done(() =>
						{
							$(window)
								.triggerHandler('resize')
								.triggerHandler('scroll')
							;
						})
						.progress(function (instance, image)
						{
							let result = image.isLoaded ? 'loaded' : 'broken';
							console.log('image is ' + result + ' for ' + image.img.src);

							if (image.isLoaded)
							{
								_uf_fixsize2(image, window, 1);
							}
						})
					;

					$(window)
						.triggerHandler('resize')
						.triggerHandler('scroll')
					;
				}
			}))
		;

		$(window)
			.on('load.ready', function ()
			{
				_img_area
					.triggerHandler('DOMNodeInserted')
				;
			})
			.on('load', function ()
			{
				$(window)
					.triggerHandler('resize')
					.triggerHandler('scroll')
				;
			})
			.on('resize', throttle(100, function ()
			{
				if (_img)
				{
					_uf_fixsize2(_img, window, 1);

					$('figure', _img_area)
						.width($(window).innerWidth())
						.height($(window).innerHeight())
					;
				}
			}))
			.on('scroll.page', throttle(150, function ()
			{
				if (_img)
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

					_fn_page(_img.eq(_i));
				}
			}))
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				let _img = $('figure', _img_area);
				let _a;

				let _i = 0;

				_img.each(function (i, elem)
				{
					if ($(elem).is(":onScreen"))
					{
						_i = i;

						return false;
					}
				});

				console.log('i', _i);

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						if (_i > 0)
						{
							_i--;
						}

						console.log(_i);

						if ((_a = _img.eq(_i)) && _a.length)
						{
							_uf_done(event);
							// @ts-ignore
							$(window).scrollTo(_a);
							_fn_page(_a);
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _do;

						if (_i < _img.length)
						{
							_i++;
						}
						else if (_i == _img.length)
						{
							_do = true;
						}

						console.log(_i, _do);

						if (_do)
						{
							$('.readTipForm')[0].click();
						}
						else if ((_a = _img.eq(_i)) && _a.length)
						{
							_uf_done(event);
							// @ts-ignore
							$(window).scrollTo(_a);
							_fn_page(_a);
						}

						break;
				}
			}))
			.triggerHandler('load')
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

function lazyload()
{
	let _div = $('.readPage #cp_img');

	if (_div.is(':not([data-done])'))
	{
		const greasemonkey = require('root/lib/greasemonkey/uf');
		const comic_style = require('root/lib/comic/style');

		greasemonkey.GM_addStyle([
			`figure { 
			margin: 0; 
			padding: 0; 
			
			display: block;
			display: -webkit-flex;
			display: flex;
			
			-webkit-align-items: center;
			align-items: center;
			-webkit-justify-content: center;
			justify-content: center; }`,
			``,
		]);

		$('body')
			.css(comic_style.body)
			.css(comic_style.bg_dark)
		;

		// @ts-ignore
		_div.attr('data-done', true);

		return 2;
	}
	else if (_div.length)
	{
		return 1;
	}
}
