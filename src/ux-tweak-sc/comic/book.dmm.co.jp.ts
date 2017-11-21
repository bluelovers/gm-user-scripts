/**
 * Created by user on 2017/11/21/021.
 */

'use strict';

import { IDemo } from 'root/lib/core/demo';

let o: IDemo = {

	//priority: 100,
	//script: true,

	metadata: {
		match: [
			'http*://book.dmm.co.jp/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
		{
			return true;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		const _uf_done = require('root/lib/event/done');
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');
		const greasemonkey = require('root/lib/greasemonkey/uf');
		const comic_style = require('root/lib/comic/style');
		const keycodes = require('keycodes');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		].join())
			.prop('target', '_blank')
		;

		const PromiseInterval = require('root/lib/promise').PromiseInterval;

		let p_init = PromiseInterval(function (defer)
			{
				if ($('.view-book').length)
				{
					return true;
				}
			}, 500);

		p_init
			.promise
			.timeout(3000)
			.then(function(bool)
			{
				if (!bool) return;

				require('root/lib/jquery/event/key').makeJQueryPlugin($);

				greasemonkey
					.GM_addStyle([
						'.view-protection, .blank-img { display: none !important; }',
						`body { ${comic_style.toCss(comic_style.bg_dark)}; ${comic_style.toCss(comic_style.bg_dark_text)}; ${comic_style.toCss(comic_style.body)}; }`,
					])
				;

				$(window)
					.off('keydown.page')
					.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
					{
						switch (event.which)
						{
							case keycodes('pageup'):
								//case keycodes('left'):

								$(window).triggerKey(keycodes('right'));

								break;
							case keycodes('pagedown'):
								//case keycodes('right'):

								$('body, .view-book, .content').triggerKey(keycodes('left'));

								break;
						}
					}))
				;

				return true;
			})
			.delay(1000)
			.then(function ()
			{
				require('root/lib/dom/disable_nocontextmenu')
					._uf_disable_nocontextmenu2(2, '.view-book, body, .viewport, .viewport *, .content, .content *')
				;
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
				//
			].join())
		;

		//_dom.remove();

		return _dom;
	},

};

export = o;
