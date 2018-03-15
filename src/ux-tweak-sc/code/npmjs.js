/**
 * Created by user on 2017/7/19/019.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'https://www.npmjs.com/search?q=*',
			'https://www.npmjs.com/~*',
			'https://www.npmjs.com/browse/*',
			'https://www.npmjs.com/package/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/npmjs\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');
		const greasemonkey = require('root/lib/greasemonkey/index');

		greasemonkey.GM_addStyle([
			`.package-details { padding-bottom: 0.25em; }`,
			`.package-details h3 { padding-top: 0.25em; }`,
		].join(''));

		$('.search-results')
			.on('DOMNodeInserted.ready', throttle(300, function ()
			{
				$(window)
					.triggerHandler('load')
				;
			}))
		;

		$(window)
			.one('load.ready', throttle(200, function ()
			{
				$('.collaborated-packages:has(> li)')
					.html($('.collaborated-packages > li')
						.css({
							'list-style': 'd',
						})
						.sort(function (a, b)
						{
							// convert to integers from strings
							a = $(a).find('a').text();
							b = $(b).find('a').text();

							// compare
							if (a > b)
							{
								return 1;
							}
							else if (a < b)
							{
								return -1;
							}
							else
							{
								return 0;
							}
						}))
				;
			}))
			.on('load.ready', throttle(200, function ()
			{
				_uf_dom_filter_link([
					'#readme a, .box a, a.packageName, a.authorName',
					'.collaborated-packages a, .bullet-free a, .starred-packages a',
					'.list-of-links a',
					'.package-details a, .list-of-links a',
				].join(','))
					.prop('target', '_blank')
				;
			}))
			.on('load.page', throttle(200, function ()
			{
				$(window).scrollTo('.container');
			}))
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/lib/event/done');

				switch (event.which)
				{
					case keycodes('pageup'):
						//case keycodes('left'):

						var _a = $('.container > div:eq(1) > span:eq(0) a.next');

						if (_a.length)
						{
							_uf_done(event);

							_a[0].click();

							$(window).triggerHandler('load.page');
						}
						else
						{
							//console.log(event, _a);
						}

						break;
					case keycodes('pagedown'):
						//case keycodes('right'):

						var _a = $('.container > div:eq(1) > span:eq(-1) a.next');

						if (_a.length)
						{
							_uf_done(event);

							_a[0].click();

							$(window).triggerHandler('load.page');
						}
						else
						{
							//console.log(event, _a);
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
			.add([].join())
		;

		//_dom.remove();

		return _dom;
	},
};
