/**
 * Created by user on 2017/11/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.alphapolis.co.jp/*',
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
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');
		const greasemonkey = require('root/src/lib/greasemonkey/uf');

		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');

		if ($('body.officialmangas').length)
		{
			const comic_style = require('root/src/lib/comic/style');

			{
				let css = comic_style.toCss(comic_style.body, comic_style.bg_dark);

				let pad = '200px';

				greasemonkey
					.GM_addStyle([
						'#TopLayer { display: none !important; }',
						`body.officialmangas { ${css} }`,
						`.current .page.right { margin-left: ${pad} !important; }`,
						`.current .page.right .comic { margin-left: -${pad} !important; }`,
						`.current .page.left { margin-right: ${pad} !important; }`,
						`.current .page.left .comic { margin-right: -${pad} !important; }`,
						`.current .page.first { margin: auto !important; }`,
					])
				;
			}

			require('root/src/lib/dom/disable_nocontextmenu')
				._uf_disable_nocontextmenu2(1, 'body, canvas.comic, .book, .book *')
			;

			require('root/src/lib/jquery/event/key').makeJQueryPlugin($);

			$(window)
				.on('keydown.page', require('root/src/lib/jquery/event/hotkey').packEvent(function (event)
				{
					const keycodes = require('keycodes');
					const _uf_done = require('root/src/lib/event.done');

					switch (event.which)
					{
						case keycodes('pageup'):
						//case keycodes('left'):

							_uf_done(event);
							$('body.officialmangas').triggerKey(keycodes('right'));

							break;
						case keycodes('pagedown'):
						//case keycodes('right'):

							_uf_done(event);
							$('body.officialmangas').triggerKey(keycodes('left'));

							break;
					}
				}))
			;
		}

		$(window)
			.on('load.ready', throttle(200, function ()
			{

			}))
			.on('load.scroll', throttle(500, function ()
			{

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
