/**
 * Created by user on 2017/7/22/022.
 */

'use strict';

module.exports = {

	priority: 0,

	metadata: {
		match: [
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if ($('.pagination a[rel="prev"], .pagination a[rel="next"]'))
		{
			return 2;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const keycodes = require('keycodes');
		const _uf_done = require('../../lib/event.done');

		$(window)
			.on('keydown.page', function (event)
			{
				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('.pagination a[rel="prev"]');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('.pagination a[rel="next"]');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
				}
			})
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
