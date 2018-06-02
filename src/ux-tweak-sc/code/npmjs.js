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
			'https://www.npmjs.com/settings/*',
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
		const _uf_done = require('root/lib/event/done');
		const onCapture = require('root/lib/jquery/event/capture').onCapture;

		greasemonkey.GM_addStyle([
			`.package-details { padding-bottom: 0.25em; }`,
			`.package-details h3 { padding-top: 0.25em; }`,

			//'section .truncate { max-height: 1.5em; }',
			//'section:hover .truncate { max-height: auto; }',

			//'section .black-60.mt0.mb1.lh-copy { float: right; }',

		].join(''));

		function _on_dom()
		{
			$('.search-results, #app main')
				.off('DOMNodeInserted.ready')
				.on('DOMNodeInserted.ready', throttle(300, function ()
				{
					$(window)
						.triggerHandler('load')
					;
				}))
				.triggerHandler('DOMNodeInserted.ready')
			;
		}

		_on_dom();

		$(window)
			.on('click', 'a[target]', function (event)
			{
				setTimeout(_on_dom, 300);
			})
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
				let selector_link = [
					'#readme a, .box a, a.packageName, a.authorName',
					'.collaborated-packages a, .bullet-free a, .starred-packages a',
					'.list-of-links a',
					'.package-details a, .list-of-links a',

					'.items-end a',

					'a[href^="/package/"]',

				].join(',');

				_uf_dom_filter_link(selector_link)
					.attr('target', '_blank')
					.prop('target', '_blank')
					//.attr('onclick', 'window.open(this.href, this.target);return false;')
				;

				let selector = [
					'[class*="package__sidebarText"] time',
					'section > [class*="package-list-item__metrics"]',
					'section [class*="package-list-item__version"]',
				].join(',');

				$('body')
					.off('click.stat', selector)
					.on('click.stat', selector, function ()
					{
						let _this = $(this);

						if (_this.is('[class*="package__sidebarText"] time'))
						{
							window.open('https://npm-stat.com/charts.html?package=' + $('h2[class*="package__packageName"] [class*="package__name"]').text(), '_blank');
						}
						else if (_this.is('section > [class*="package-list-item__metrics"], section [class*="package-list-item__version"]'))
						{
							let section = $(this).parents('section');

							if (section.length)
							{
								let title = $('.items-end > a[href*="/package/"] > h3', section);

								window.open('https://npm-stat.com/charts.html?package=' + title.text(), '_blank');
							}
						}
					})
					.off('click.link', selector_link)
					.on('click.link', selector_link, function (event)
					{
						let _this = $(this);

						if (_uf_dom_filter_link(_this).length)
						{
							window.open(_this.prop('href'), '_blank');

							_uf_done(event);
						}
					})
				;

				onCapture('body', 'click.link2', 'a[href*="/package/"]', function (event)
				{
					let _this = $(this);
					window.open(_this.prop('href'), '_blank');
					_uf_done(event);
				});

				//$('a[href*="/package/"]').attr('onclick', `window.open(this.href, '_blank');return false;`)

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

						var _a = $('.container > div:eq(1) > span:eq(-1) a.next, div[class^="search__pagination"] div[class*="pagination__current"] + div > a');

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
