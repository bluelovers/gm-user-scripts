/**
 * Created by user on 2017/11/26/026.
 */

import { IDemo, IGlobal } from 'root/lib/core/demo';

declare const global: IGlobal;

'use strict';

let o: IDemo = {

	metadata: {
		include: [
			'*://*.sfacg.com/*',
			'*://book.sfacg.com/signin/*',
		],
		match: [],
		exclude: [
			'*://*.sfacg.com/ajax*',
		],

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

		const runtimeSiteID = require('root/lib/site/index').create(o.file);

		let _ok = false;

		if (_url_obj.host.match(/book\.sfacg\.com/) && _url_obj.path.match(/signin/))
		{
			let _a = $('.calendar-sign .sign-btn');

			_ok = true;

			if (_a.is('.signed'))
			{
				console.log('已經簽到過', _a);
			}
			else if (_a.length)
			{
				_a[0].click();
				_a.find('a')[0].click();
			}
			else
			{
				_ok = false;
			}

			if (_ok)
			{
				runtimeSiteID.updateTimestamp();
			}

			console.log({
				hasSigned: unsafeWindow.hasSigned,
				nid: unsafeWindow.nid,
			}, runtimeSiteID.IDKEY);
		}
		else if (_url_obj.host.match(/\.sfacg\.com/))
		{
			let _a = $('.user-bar .top-link, #UserInfo')
				.find('a[href*="/u/"]')
			;
			let u = runtimeSiteID.getValue('username');

			let _do = null;

			let c = runtimeSiteID.chkTimestamp(3);

			let username: string;

			if (_a.length && _a.prop('href').match(/sfacg.com\/u\/(\w+)/i))
			{
				username = (RegExp.$1 || '').toString().trim();
			}

			//console.log([IDKEY, u, username]);

			if (username && username != u)
			{
				_do = true;
				console.info('[使用者已變更]', [u, username]);

				runtimeSiteID.setValue('username', username);
			}
			else if (c > 0)
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
				await signin()
					.then(function (ret)
					{
						//console.log(ret);
					})
					.tap(function ()
					{
						console.log('done');
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

function signin(ajaxData = {}, force?: boolean)
{
	const GM_XHR = require("root/lib/greasemonkey/gm/xhr").default;

	let options = {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		dataType: 'json',
	};

	return GM_XHR
		.ajax('http://book.sfacg.com/ajax/ashx/Common.ashx?op=signinNew', Object.assign({}, options, {

			data: Object.assign({
				_: Date.now(),
				nid: 0,
			}, ajaxData),

		}))
		.then(function (res)
		{
			if (res)
			{
				if (res.response.status == 200)
				{
					console.log(`[簽到成功]`, res.response);
				}
				else if (res.response.status == 400)
				{
					console.log(`[簽到無效]`, res.response);
				}
				else if (res.response.msg)
				{
					greasemonkey.error('[UNKNOW]', res.response.msg, res.response);
				}
				else
				{
					greasemonkey.error('[UNKNOW]', res.response);
				}

				return res.response;
			}
			else
			{
				return Promise.reject(res);
			}
		})
	;
}

export = o;
