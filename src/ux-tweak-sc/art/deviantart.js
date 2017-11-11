/**
 * Created by user on 2017/7/24/024.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://*.deviantart.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/deviantart\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link('')
			.prop('target', '_blank')
		;

		const keycodes = require('keycodes');
		const _uf_done = require('root/src/lib/event.done');

		$(window)
			.on('keydown.page', require('root/src/lib/jquery/event/hotkey').packEvent(function (event)
			{
				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('#overhead a.minibrowse_prev:not(.disabled)');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('#overhead a.minibrowse_next:not(.disabled)');

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
