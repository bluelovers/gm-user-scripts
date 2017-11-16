/**
 * Created by user on 2017/9/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.999comic.com/*',
			'http://t.168girl.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/src/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
		{
			return true;
		}

		//console.debug(777, ret);
		if (_url_obj.host.match(/999comic\.com/) || _url_obj.host.match(/t\.168girl\.com/))
		{
			//return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link([].join())
			.prop('target', '_blank')
		;

		if ($('#manga').length)
		{
			const comic_style = require('root/src/lib/comic/style');
			const debounce = require('throttle-debounce/debounce');
			const throttle = require('throttle-debounce/throttle');

			let _img_selector = '#manga';
			let _img = $(_img_selector);
			let _img_area = $('#tbCenter');

			$('.tbCenter, #tbBox')
				.css(comic_style.photo_area)
				.css(comic_style.bg_transparent)
			;

			$('body')
				.css(comic_style.body)
				.css(comic_style.bg_dark)
				.css(comic_style.overflow_hidden)
			;

			let _div_page = $('<div/>')
				.css(comic_style.page)
				.css(comic_style.bg_dark)
				.css(comic_style.bg_dark_border)
				.css(comic_style.bg_dark_text)
				.css({
					position: 'absolute',
				})
				.appendTo('body')
			;

			$(window)
				.on('resize', function ()
				{
					_img
						.css(comic_style.photo)
					;

					require('root/src/lib/dom/img/size')
						._uf_fixsize2(_img, window, 1)
					;
				})
				.on('resize.page', function ()
				{
					_div_page
						.text($('.title:has(h1) > span:eq(-1)')
							.text()
							.replace(/^[^\d]+(\d+)[^\d]+(\d+)[^\d]+$/, '$1 / $2'))
					;

					_div_page
						.offset({
							top: _img.offset().top + 50,
							left: _img.offset().left - _div_page.outerWidth(),
						})
					;
				})
				.on('resize.delay', throttle(100, function ()
				{
					$(window).triggerHandler('resize.scroll');
				}))
				.on('resize.delay', debounce(100, function ()
				{
					$(window).triggerHandler('resize.scroll');
				}))
				.on('resize.scroll', function ()
				{
					$(window).scrollTo(_img);
				})
				.on('load.ready', () =>
				{
					$(window).triggerHandler('resize');
				})
				.on('load.nocontextmenu', () =>
				{
					require('root/src/lib/dom/disable_nocontextmenu')
						._uf_disable_nocontextmenu2(2,
							_img_selector + ', #tbCenter, .cf'
						)
					;
				})
				.triggerHandler('load')
			;

			$(window)
				.on('keydown.page', require('root/src/lib/jquery/event/hotkey').packEvent(function (event)
				{
					const keycodes = require('keycodes');
					const _uf_done = require('root/src/lib/event/done');

					switch (event.which)
					{
						case keycodes('pageup'):
							//case keycodes('left'):

							var _a = $('#pager .prev');

							if (_a.length)
							{
								_uf_done(event);

								unsafeWindow.MHD.core.prev();
							}
							else
							{
								//console.log(event, _a);
							}

							break;
						case keycodes('pagedown'):
							//case keycodes('right'):

							var _a = $('#pager .next');

							if (_a.length)
							{
								_uf_done(event);

								unsafeWindow.MHD.core.next();
							}
							else
							{
								//console.log(event, _a);
							}

							break;
					}
				}))
			;
		}

		module.exports.adblock();
	},

	adblock(_url_obj = global._url_obj)
	{
		$([
			'.bd_960_90',
		].join())
			.hide()
		;
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				'#fb-root, .fb-comments, #bdShare',
				'.likenews',
				'.book-similar2 img',
				'script',
				'.scover .bg, .cover .bg, .bcover .bg, .hcover .bg',
			].join())
			.add($('#bd1').prevAll().addBack())
			.add($('.footer').nextAll().addBack())
		;

		//_dom.remove();

		return _dom;
	},
};
