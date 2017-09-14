/**
 * Created by user on 2017/8/21/021.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://*.ikanman.com/*',
			'http*://*.manhuagui.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/ikanman\.com/) || _url_obj.host.match(/manhuagui\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link([].join())
			.prop('target', '_blank')
		;

		//require('root/src/lib/jquery/event/key').makeJQueryPlugin($, window);

		if ($('#mangaBox').length)
		{
			const comic_style = require('root/src/lib/comic/style');
			const debounce = require('throttle-debounce/debounce');
			const throttle = require('throttle-debounce/throttle');

			let _img_selector = '#mangaBox #mangaFile';
			let _img = $(_img_selector);
			let _img_area = $('#mangaBox');

			$('.tbCenter, #tbBox')
				.css(comic_style.photo_area)
				.css(comic_style.bg_transparent)
			;

			$('body')
				.css(comic_style.body)
				.css(comic_style.bg_dark)
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

			_img_area
				.on('DOMNodeInserted.img', function ()
				{
					_img = $(_img_selector);

					_img
						.imagesLoaded()
						.done(function (instance)
						{
							$(window).triggerHandler('resize');
						})
					;

					$(window).triggerHandler('resize');
				})
			//.triggerHandler('DOMNodeInserted.img')
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
						.text($('.title:eq(0) div:has(h1) > span:eq(-1)')
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
					$('.tbCenter, #tbBox')
						.height($(window).innerHeight())
					;

					$(window).scrollTo(_img.add(_img_area).add('.tbBox, .tbCenter'));
				})
				.on('load.imagesLoaded', function ()
				{
					_img_area.triggerHandler('DOMNodeInserted.img');
				})
				.on('load.nocontextmenu', () =>
				{
					require('root/src/lib/dom/disable_nocontextmenu')
						._uf_disable_nocontextmenu2(2,
							_img_selector + ', #mangaBox, #tbBox'
							, {
								types: [
									'click',
								],
							}
						)
					;
				})
				.triggerHandler('load')
			;
		}

		$(window)
			.on('keydown.page', require('root/src/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/src/lib/event.done');

				switch (event.which)
				{
					case keycodes('pageup'):
						//case keycodes('left'):

						var _a = $('#pagination .current').prev();

						if (_a.is('.disabled'))
						{
							_a = _a.prev('.prev');
						}

						if (_a.length && _a.is('a'))
						{
							_uf_done(event);
							_a[0].click();

							$(window).triggerHandler('resize.delay');
						}
						else
						{
							//console.log(event, _a);
						}

						break;
					case keycodes('pagedown'):
						//case keycodes('right'):

						var _a = $('#pagination .current').next();

						if (_a.is('.disabled'))
						{
							_a = _a.next('.next');
						}

						if (_a.length && _a.is('a'))
						{
							_uf_done(event);
							_a[0].click();

							$(window).triggerHandler('resize.delay');
						}
						else
						{
							//console.log(event, _a);
						}

						break;
				}
			}))
		;

		module.exports.adblock();
	},

	adblock(_url_obj = global._url_obj)
	{
		$([
			'.gg_728',
		].join())
			.hide()
		;
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add($('body > .crumb').prevAll())
			.add($('body > .footer').nextAll().addBack())
			.add([
				'.module-cmt-header .section-cbox-w .block-head-w, .module-cmt-header .section-cbox-w .block-post-w',
				'.mtb16[style], .mt10[style]',
				'.similar-list img, .book-btn',
				'.scover .bg, .cover .bg, .bcover .bg, .hcover .bg',
				'.hcover .serial',
				'#bdShare, .bdShare',
				'#intro-cut, #intro-act',
				'.score, #scoreRes',
				'script',
			].join())
		;

		$('.chapter h4 span').unwrap();

		$('#intro-all').show();

		//_dom.remove();

		return _dom;
	},
};
