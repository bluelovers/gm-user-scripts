/**
 * Created by user on 2017/11/17/017.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	//script: true,

	metadata: {
		match: [
			'http*://pc-play.games.dmm.co.jp/play/*',
		],
		exclude: [
			'http://pc-play.games.dmm.co.jp/headnavi/*',
		],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
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

		let game_frame = $('#game_frame');

		let game_width = (game_frame.length) ? game_frame.width() : 1200;

		greasemonkey
			.GM_addStyle([
				`.dmm-ntgnavi { margin-left: 0px; margin-right: 0px; padding: 0px; margin-top: 0px; border-bottom: 0 none transparent; }`,
				`@media only screen and (max-width: ${game_width + 200}px) { #main-ntg { text-align: left; } }`,
				`iframe, #main-ntg { background-color: transparent !important; border: 0 none #000; }`,
				`#main-ntg, #main-ntg.page-appdetial { background-color: #000; margin-left: 0px; margin-right: 0px; }`,
				`body { background-color: #000; margin-left: 0px; margin-right: 0px; border: 0 none transparent; }`,
				`.page-inner { margin-left: 0px !important; }`
			], 'body')
		;

		let $win = $(window);

		$win
			.on('load.ready', function ()
			{
				module.exports.adblock(_url_obj);

				$win.scrollTo('#main-ntg');

				require('root/lib/dom/iframe').transparent(game_frame);
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
		$('#ntg-recommend, .dmm-ntgnavi-left .point-items').hide();
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
