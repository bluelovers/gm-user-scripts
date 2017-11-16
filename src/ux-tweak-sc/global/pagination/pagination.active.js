/**
 * Created by user on 2017/7/22/022.
 */

'use strict';

module.exports = {

	priority: 0,

	script: true,

	metadata: {
		match: [
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if ($('ul.pagination > .active').length)
		{
			return 2;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		require('root/src/lib/jquery/event').makeJQueryPlugin($, window);

		let _win = $(window);

		if (_win.eventExists('keydown'))
		{
			console.log(_win.events());

			return false;
		}

		_win
			.on('keydown.page', require('root/src/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/src/lib/event/done');

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('ul.pagination > .active').prev('li').find('a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}
						else
						{
							console.log(event, _a);
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('ul.pagination > .active').next('li').find('a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
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
