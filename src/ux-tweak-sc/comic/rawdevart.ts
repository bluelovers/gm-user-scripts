/**
 * Created by user on 2017/11/19/019.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	//priority: 100,
	//script: true,

	metadata: {
		include: [
			'http*://www.rawdevart.com/*',
		],
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

	main(_url_obj = global._url_obj)
	{
		const _uf_done = require('root/lib/event/done');
		const { debounce } = require('throttle-debounce');
		const { throttle } = require('throttle-debounce');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		].join())
			.prop('target', '_blank')
		;

		require('root/lib/dom/disable_nocontextmenu')
			._uf_disable_nocontextmenu2(1, '.post-body img')
		;

		if (_url_obj.path.match(/raw-manga\.html/))
		{
			const greasemonkey = require('root/lib/greasemonkey/uf');
			const _uf_fixsize2 = require('root/lib/dom/img/size')._uf_fixsize2;
			const comic_style = require('root/lib/comic/style');
			require('root/lib/jquery/onscreen');
			const keycodes = require('keycodes');

			greasemonkey
				.GM_addStyle([
					'.post-body .separator { padding: 0; margin: 0; }',
					`.post-body .separator:before { content: ''; display: inline-block; vertical-align: middle; height: 100%; }`,
					'.post-body .separator img { vertical-align: middle; display: inline-block; }',
					'.post-body .separator a { vertical-align: middle; display: inline-block; }',
				])
			;

			$('body')
				.css(comic_style.bg_dark)
				.css(comic_style.bg_dark_text)
				.css(comic_style.body)
			;

			$('#wrapper')
				.css(comic_style.bg_transparent)
			;

			let _img = $('.post-body .separator img');

			_img
				.imagesLoaded()
				.done(function (instance)
				{
					$(window).triggerHandler('resize.done');
				})
			;

			$(window)
				.on('load.ready', function ()
				{
					_img = $('.post-body .separator img');

					$(window).triggerHandler('resize.done');
				})
				.on('resize.done', debounce(200, function ()
				{
					_uf_fixsize2(_img, window, 1);

					let _to = _img.filter(':onScreen').eq(-1);

					$(window).scrollTo(_to.parent('.separator').addBack());
				}))
				.on('load.init', debounce(1000, function ()
				{
					$(window)
						.off('keydown.page')
						.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
						{
							let _i = 0;

							_img.each(function (i, elem)
							{
								if ($(elem).is(":onScreen"))
								{
									_i = i + 1;

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

										$(window).scrollTo(_a.parents('.separator').addBack());
									}

									break;
							}
						}))
					;
				}))
				.triggerHandler('load')
			;
		}
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

		//_dom.remove();

		return _dom;
	},

};

export = o;
