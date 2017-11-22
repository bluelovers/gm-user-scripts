/**
 * Created by user on 2017/11/17/017.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	//script: true,

	metadata: {
		match: [
			'http*://osapi.dmm.com/gadgets/*',
		],
		exclude: [],
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
		const greasemonkey = require('root/lib/greasemonkey/uf');

		greasemonkey
			.GM_addStyle([
				`iframe, body, html { background-color: transparent !important; border: 0 none transparent; }`,
				`#main_game, #main_contents { margin-left: 0px; text-align: left; }`,
			], 'body')
		;

		window.addEventListener("message", receiveMessage, false);

		function receiveMessage(event)
		{
			event.source.postMessage(window.location.href.toString(), event.origin);
		}

		let $win = $(window);

		$win
			.on('load.ready', function ()
			{
				module.exports.adblock(_url_obj);

				require('root/lib/dom/iframe').transparent('iframe, body, html');

				$('#main_game, #main_contents').css({
					'margin-left': 0,
					'text-align': 'left',
				});
			})
			.on('abort', function ()
			{
				$win.triggerHandler('load.ready');
			})
			.triggerHandler('load.ready')
		;

		setTimeout(function ()
		{
			$win.triggerHandler('load.ready');
		}, 3000);
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
