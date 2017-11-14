/**
 * Created by user on 2017/11/6/006.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.comico.com.tw/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/src/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
		{
			return true;
		}
		//console.debug(777, ret);

		/*
		if (_url_obj.host.match(/3dmgame\.com/))
		{
			return true;
		}
		*/

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const comic_style = require('root/src/lib/comic/style');
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');

		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');

		$('.list-episode02 ._articleList')
			.on('DOMNodeInserted', debounce(200, function ()
			{
				$(window).triggerHandler('load.ready');
			}))
		;

		$('body .stage, .o-section-bg-02')
			.css(comic_style.body)
			.css(comic_style.bg_dark)
		;

		let _c_body = $('.stage .comic-image');

		let $win = $(window);

		$win
			.on('load.ready', throttle(200, function ()
			{
				_uf_dom_filter_link([
					'.list-episode02 ._articleList a',
				].join())
					.prop('target', '_blank')
				;
			}))
			.on('load.scroll', throttle(500, function ()
			{
				let t = $win.scrollTop();

				let t2 = _c_body.find('> img:eq(0)').outerHeight();

				if (t < t2)
				{
					$win.scrollTo(_c_body);
				}
			}))
			.on('keydown.page', require('root/src/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/src/lib/event.done');

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('.nav-episode02:eq(0) .nav-episode02__item:eq(0) a');

						if (_a.length)
						{
							if ($win.scrollTop() == 0)
							{
								_uf_done(event);
								_a[0].click();
							}
						}
						else
						{
							//console.log(event, _a);
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('.nav-episode02:eq(0) .nav-episode02__item:eq(2) a');

						if (_a.length)
						{
							let _t = _c_body.offset().top + _c_body.outerHeight();
							let _t2 = $win.scrollTop() + $win.outerHeight();

							if (_t < _t2)
							{
								_uf_done(event);
								_a[0].click();
							}
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
			.add([

			].join())
		;

		//_dom.remove();

		return _dom;
	},
};
