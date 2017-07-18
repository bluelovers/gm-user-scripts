/**
 * Created by user on 2017/7/18/018.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://tw.buy.yahoo.com/*',
			'http*://tw.buy.yahoo.com/bestbuy/*',
			'http*://tw.buy.yahoo.com/activity/*'
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/buy\.yahoo\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const keycodes = require('keycodes');
		const _uf_done = require('../../lib/event.done');
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');

		$('#srp-pjax')
			.on('DOMNodeInserted', '#srp-pjax-content', function ()
			{
				$(window).triggerHandler('load');
			})
		;

		$(window)
			.on('load', function ()
			{
				_uf_dom_filter_link([
					'#sr a, #cl-bestbuypd a, #bestdeal-bound, #eventKV_wrap a',
				].join(','))
					.prop('target', '_blank')
					.off('click.open')
					.on('click.open', function (event)
					{
						window.open(this.href, '_blank');

						_uf_done(event);
					})
				;
			})
			.on('keydown', function (event)
			{
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
			})
			.triggerHandler('load')
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj)
	{

	},
};
