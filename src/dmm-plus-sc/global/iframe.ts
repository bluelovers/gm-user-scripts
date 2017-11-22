/**
 * Created by user on 2017/11/22/022.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	priority: 100,

	metadata: {
		match: [
			'http*://*',
			'http*://pc-x.phantom-greed.com/top*',
			'http*://pc-x.phantom-greed.com/start*',
		],
		nomatch: [
			'http*://*.dmm.co*/*',
		],
		exclude: [
			'http*://pc-x.phantom-greed.com/*frame*',

			'http*://spdmg-backend2.i-mobile.co.jp/*',
			'http*://tg.socdm.com/*',
			'http://*.microad.jp/*',

			'http://*.youtube.*/*',
			'http://*.google.*/*',
			'http://*facebook.*/*',
			'http://*twitter.*/*',

			'http://*wiki.*/*',

			'http://*.tw/*',
			'http://*.cn/*',
			'http://*.org/*',
			'http://*.tv/*',
			'http://*.eu/*',

		],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (window.self != window.top
			&& window.top != window.parent
			&& !require('root/lib/greasemonkey/match').match(_url_obj._source, [].concat(module.exports.metadata.nomatch, module.exports.metadata.exclude))
		)
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		//console.info('window.parent', window.parent);

		//window.parent.location.href.match(/osapi\.dmm\.com\/gadgets/)

		let targetOrigin = 'http://osapi.dmm.com';
		let sendMessage = window.location.href.toString();

		postMessage(window.parent);

		if (window.parent.parent && window.parent.parent != window.top)
		{
			postMessage(window.parent.parent);
		}

		window.addEventListener('message', receiveMessage, false);

		function receiveMessage(event)
		{
			if (event.origin.match(/osapi\.dmm\.com/))
			{
				_main();
			}
		}

		function postMessage(target: Window)
		{
			target.postMessage(sendMessage, targetOrigin);
		}

	},

};

function _main()
{
	require('root/lib/dom/iframe').transparent('iframe, body, html');
}

export = o;
