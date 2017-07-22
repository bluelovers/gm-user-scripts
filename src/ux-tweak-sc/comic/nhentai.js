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

		module.exports.adblock();

		setTimeout(function ()
		{
			module.exports.adblock();
		}, 500);

		$(window)
			.on('resize', function (event)
			{
				_uf_fixsize2($('#image-container img'))
					.css(comic_style.photo)
				;

				$(window).scrollTo($('#content, #image-container').eq(-1));
			})
			.on('keydown', function (event)
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
			})
			.triggerHandler('resize')
		;

		$('#image-container')
			.on('DOMNodeInserted', function ()
			{
				$(window).triggerHandler('resize');
			})
		;
	},

	adblock()
	{
		unsafeWindow.N.options.ads.show_popunders = false;
	},
};
