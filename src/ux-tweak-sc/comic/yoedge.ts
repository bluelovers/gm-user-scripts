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
			'http*://smp*.yoedge.com/*',
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
		const _uf_done = require('root/lib/event/done');
		require('root/lib/jquery/event/key');
		const _uf_fixsize2 = require('root/lib/dom/img/size')._uf_fixsize2;
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');
		require('root/lib/jquery/onscreen');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		].join(','))
			.prop('target', '_blank')
		;

		$('body').on('click', '.tool-container a[href*="buildImageDiv"]', function ()
		{
			setTimeout(function ()
			{
				$(window).triggerHandler('load.ready');
			}, 500);
		});

		$(window)
			.on('load.ready', function ()
			{
				lazyload();
			})
			.on('load', function ()
			{
				$(window).triggerHandler('resize');
			})
			.on('resize', throttle(100, function ()
			{
				let _this = _uf_fixsize2('#smp_image_div_id figure', window, 1, {
					width: 'auto',
				});
			}))
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');

				let _a = $('#gameCanvas:visible');
				let _img = $('#smp_image_div_id:visible figure');

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

						if (_i > 0)
						{
							_i--;
						}

						console.log(_i);

						if (_a.length)
						{
							_uf_done(event);

							unsafeWindow.smp.toolbar.perPage();
						}
						else if ((_a = _img.eq(_i)) && _a.length)
						{
							_uf_done(event);
							$(window).scrollTo(_a);
						}

						break;
					case keycodes('pagedown'):

						var _do;

						if (_i < _img.length)
						{
							_i++;
						}
						else if (_i == _img.length)
						{
							_do = true;
						}

						console.log(_i);

						if (_a.length)
						{
							_uf_done(event);

							unsafeWindow.smp.toolbar.nextPage();
						}
						else if (_do)
						{
							unsafeWindow.smp.toolbar.nextApp()
						}
						else if ((_a = _img.eq(_i)) && _a.length)
						{
							_uf_done(event);

							$(window).scrollTo(_a);
						}

						break;
				}
			}))
			.triggerHandler('load')
		;
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

function lazyload()
{
	let _div = $('#smp_image_div_id:not([data-done])');

	if (_div.length)
	{
		const greasemonkey = require('root/lib/greasemonkey/uf');

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
		]);

		$('img.lazy', _div)
			.attr('src', function (i, old)
			{
				return $(this).attr('data-original');
			})
			.wrap('<figure/>')
		;

		// @ts-ignore
		_div.attr('data-done', true);

		$(window).triggerHandler('resize');
	}
}

export = o as IDemo;
