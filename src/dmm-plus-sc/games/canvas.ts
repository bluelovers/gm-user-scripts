/**
 * Created by user on 2017/11/17/017.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	//script: true,

	priority: 400,

	metadata: {
		match: [
			'http*://web.killdoya.jp/*',
			'http*://dmm-*.iolite.link/*',
			'http*://*/product/dmm_pc.php/*',
			'http*://assets.millennium-war.net/*/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return 2;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		].join())
			.prop('target', '_blank')
		;

		const greasemonkey = require('root/lib/greasemonkey/uf');

		greasemonkey
			.GM_addStyle([
				`iframe, body, html { background-color: transparent !important; border: 0 none transparent; }`,
			], 'body')
		;

		let gameCanvas = $('#gameCanvas, .emscripten').filter('canvas');

		let game_width = (gameCanvas.length) ? gameCanvas.width() : 960;

		let $win = $(window);

		$win
			.on('load.ready', function ()
			{
				module.exports.adblock(_url_obj);

				require('root/lib/dom/iframe').transparent('iframe, body, html');
			})
			.on('abort', function()
			{
				$win.triggerHandler('load.ready');
			})
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
