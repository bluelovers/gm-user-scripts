/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://nhentai.net/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/nhentai\.net/))
		{
			return true;
		}

		return false;
	},

	main()
	{
		const keycodes = require('keycodes');
		const _uf_done = require('../../lib/event.done');
		const comic_style = require('../../lib/comic/style');
		const greasemonkey = require('../../lib/greasemonkey');

		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('#content .gallery a')
			.attr('target', '_blank')
		;

		const _uf_fixsize2 = require('../../lib/dom/img/size')._uf_fixsize2;

		$(window)
			.on('load.adblock', function (event)
			{
				module.exports.adblock();

				require('../../lib/dom/disable_nocontextmenu')
					._uf_disable_nocontextmenu2(2, '#content, #content *, #bigcontainer, #thumbnail-container, .thumb-container, .gallerythumb')
				;
			})
			.triggerHandler('load.adblock')
		;

		setTimeout(function ()
		{
			$(window).triggerHandler('load.adblock')
		}, 500);

		$(window).scrollTo($('#content, #image-container').eq(-1));

		if ($('#image-container').length)
		{
			let _img = $('#image-container img');

			let _div_page = $('<div/>')
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

			$(window)
				.on('resize', function (event)
				{
					_img = $('#image-container img');

					_uf_fixsize2(_img)
						.css(comic_style.photo)
					;

					_div_page
						.text($('.page-number .current:eq(0)').text() + '/' + $('.page-number .num-pages:eq(0)').text())
					;

					setTimeout(function ()
					{
						_img = $('#image-container img');

						_div_page
							.offset({
								left: _img.offset().left - _div_page.outerWidth(),
							})
						;
					}, 100);

					$(window).scrollTo($('#content, #image-container').eq(-1));
				})
				.triggerHandler('resize')
			;

			$('#image-container')
				.on('DOMNodeInserted', function ()
				{
					$(window).triggerHandler('resize');
				})
			;
		}

		$(window)
			.on('keydown.page', require('../../lib/jquery/event/hotkey').packEvent(function (event)
			{
				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):
						var _a = $('.pagination .previous');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):
						var _a = $('.pagination .next');

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

	adblock()
	{
		$('.advertisement').remove();
		$('body > script + div[style]:hidden:eq(-1)').remove();

		try
		{
			require('root/src/lib/dom/disable_nocontextmenu')
				._uf_disable_nocontextmenu2(1)
			;

			if (unsafeWindow.N)
			{
				unsafeWindow.N.popunder = null;
				unsafeWindow.N.advertising = null;

				unsafeWindow.N.options.ads.show_popunders = false;
			}
		}
		catch (e)
		{
			console.error(e);
		}
	},
};
