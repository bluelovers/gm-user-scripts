/**
 * Created by user on 2017/11/26/026.
 */

import { IDemo, IGlobal } from 'root/lib/core/demo';

declare const global: IGlobal;

'use strict';

let o: IDemo = {

	metadata: {
		include: [],
		match: [
			'http*://www.gamer.com.tw/*',
			'http*://forum.gamer.com.tw/*',
			'http*://home.gamer.com.tw/creationDetail.php*',
			'http*://gnn.gamer.com.tw/*',
			'http*://ani.gamer.com.tw/*',
			'http*://acg.gamer.com.tw/*',
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
		const Promise = require('bluebird');
		await Promise.delay(1000);

		console.log(o.file);

		const runtimeSiteID = require('root/lib/site/index').create(o.file);

		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;

		let _a;

		let _ok = false;

		if (_url_obj.host.match(/www\.gamer\.com\.tw/) && (_a = $('.BA-left #signin-btn[onclick]:not([onclick*="showSigninMap"])'), _a.length))
		{
			_a[0].click();

			//GMApi.setValue('timestamp', Date.now());
			runtimeSiteID.updateTimestamp();
		}
		else if (_a && _a.length)
		{
			console.log('已經簽到過', _a);

			//GMApi.setValue('timestamp', Date.now());
			runtimeSiteID.updateTimestamp();
		}
		else
		{
			// @ts-ignore
			let username = unsafeWindow.BAHAID || unsafeWindow.MB_BAHAID;

			//let t = GMApi.getValue('timestamp', 0);
			//let u = GMApi.getValue('username');

			let u = runtimeSiteID.getValue('username');
			let c = runtimeSiteID.chkTimestamp(3);

			let _do = null;

			//console.log(username, u);

			if (!username)
			{
				//_do = false;
			}
			else if ((username && username != u) || (c > 0))
			{
				_do = true;
			}
			else
			{
				_do = false;

				console.info('[距離上次簽到]', Math.abs(c) + 's');
			}

			if (_do)
			{
				const signin = require('root/lib/site/gamer/signin').default;

				await signin()
					.catch((err) =>
					{
						console.error('[ERROR]', err);
					})
					.then(function ()
					{
						//GMApi.setValue('username', username);
						//GMApi.setValue('timestamp', Date.now());

						runtimeSiteID.setValue('username', username);
						runtimeSiteID.updateTimestamp();
					})
				;
			}
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
