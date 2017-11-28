/**
 * Created by user on 2017/8/1/001.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://tw.mall.yahoo.com/*',
			'http*://tw.user.mall.yahoo.com/my/*',
			'https://tw.search.mall.yahoo.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/mall\.yahoo\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		if (adult_chk())
		{
			return;
		}

		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

		$('#srp-pjax')
			.on('DOMNodeInserted', '#srp-pjax-content', debounce(200, function ()
			{
				$(window).triggerHandler('load');
			}))
		;

		$(window)
			.on('load.ready', function ()
			{
				_uf_dom_filter_link([
					'#srp_sl_result #srp_result_list .item a, #ypsmyeco .listtable a',
					'#ypswlicon .bd a, #ypswlicon .watchlist a, .ypsmodule .listtable a',
					'#EC-UH a',
				].join())
					.prop('target', '_blank')
				;
			})
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const _uf_done = require('root/lib/event/done');
				const keycodes = require('keycodes');

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):
						var _a = $('#srp_pagination .pre-page a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):
						var _a = $('#srp_pagination .next-page a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
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

			].join())
		;

		//_dom.remove();

		return _dom;
	},
};

function adult_chk()
{
	let _a = $('#ypsadult a.no');

	if (_a.length)
	{
		window.location.href = _a.prop('href');

		return true;
	}
}
