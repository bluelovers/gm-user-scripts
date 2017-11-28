/**
 * Created by user on 2017/11/26/026.
 */

import { IDemo, IGlobal } from 'root/lib/core/demo';

declare const global: IGlobal;

'use strict';

let o: IDemo = {

	//priority: 100,

	metadata: {
		include: [
			'http*://www.gamer.com.tw/*',
			'http*://forum.gamer.com.tw/*',
			'http*://home.gamer.com.tw/creationDetail.php*',
			'http*://gnn.gamer.com.tw/*',
			'http*://ani.gamer.com.tw/*',
		],
		nomatch: [],
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

	async main(_url_obj = global._url_obj)
	{
		await (new Promise(function (resolve, reject)
		{
			setTimeout(function ()
			{
				resolve();
			}, 1000);
		}));

		let _a;

		if (_url_obj.host.match(/www\.gamer\.com\.tw/) && (_a = $('.BA-left #signin-btn[onclick]'), _a.length))
		{
			_a[0].click();
		}
		else if (_a && _a.length)
		{
			console.log('已經簽到過', _a);
		}
		else
		{
			const signin = require('root/lib/site/gamer/signin').default;

			await signin()
				.catch((err) =>
				{
					console.error('[簽到錯誤]', err);
				})
			;
		}
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
