/**
 * Created by user on 2017/11/20/020.
 */

/**
 * Created by user on 2017/11/19/019.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	//priority: 100,
	//script: true,

	metadata: {
		include: [
			'http*://tw.movies.yahoo.com/*',
			'http*://movies.yahoo.com.tw/*',
			'http*://movies.yahoo.com.tw/movie_*.html',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.release_list a, .area_timebox a, a.btn_s_time, .ranking_inner_r a',
		].join())
			.prop('target', '_blank')
		;

		$(window)
			.on('load.ready', function ()
			{
				$(window).scrollTo('#container, .maincontent');
			})
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/lib/event/done');

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('.page_numbox .prevtxt a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();

							$(window).triggerHandler('load.ready');
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('.page_numbox .nexttxt a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();

							$(window).triggerHandler('load.ready');
						}

						break;
				}
			}))
			.triggerHandler('load.ready')
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
				//
			].join())
		;

		//_dom.remove();

		return _dom;
	},

};

export = o;

