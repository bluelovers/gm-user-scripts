/**
 * Created by user on 2017/11/26/026.
 */

import { IDemo, IGlobal } from 'root/lib/core/demo';

declare const global: IGlobal;

'use strict';

let o: IDemo = {

	disable: true,

	metadata: {
		include: [],
		match: [
			'http*://*.iqing.com/*',
			'http*://*.iqing.in/*',
		],
		exclude: [],

		grant: [
			'GM_xmlhttpRequest',
			'GM_getValue',
			'GM_setValue',
		],
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

		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;

		const TIMESTAMP_KEY = 'iqing_timestamp';

		let _a;

		let _ok = false;

		let t = GMApi.getValue(TIMESTAMP_KEY, 0);
		let _do = null;

		if ((Date.now() - t) >= (10 * 60 * 1000))
		{
			_do = true;
		}
		else
		{
			_do = false;

			console.info('[距離上次簽到]', (Date.now() - t) / 1000);
		}

		if (_do || 0)
		{
			const signin = require('root/lib/site/iqing/signin').default;

			await signin()
				.catch((err) =>
				{
					console.error('[簽到錯誤]', err);
				})
				.then(function (res)
				{
					GMApi.setValue(TIMESTAMP_KEY, Date.now());

					console.log(res);
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

		return _dom;
	},

};

export = o;
