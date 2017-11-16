/**
 * Created by user on 2017/8/20/020.
 */

'use strict';

module.exports = {

	disable: true,

	metadata: {
		match: [
			'http*://drive.google.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/drive\.google\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link([

		].join())
			.prop('target', '_blank')
		;

		require('root/src/lib/jquery/event/key').makeJQueryPlugin($, window);

		let _win = $(window);

		// TODO: fix me, this not work
		_win
			.on('keydown.page', '[role="dialog"], .a-b-lc.a-b-ta-lc, .a-b-ta-Ua', require('root/src/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/src/lib/event/done');

				switch (event.which)
				{
					case keycodes('pageup'):

						var _a = $('.a-b-Dd-d.a-b-d');

						if (_a.length)
						{
							$(this).triggerKey(keycodes('left'), event.type);
						}
						else
						{
							console.log(event, _a);
						}

						break;
					case keycodes('pagedown'):

						var _a = $('.a-b-Zc-d.a-b-d');

						if (_a.length)
						{
							$(this).triggerKey(keycodes('right'), event.type);
						}
						else
						{
							console.log(event, _a);
						}

						break;
				}
			}))
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
