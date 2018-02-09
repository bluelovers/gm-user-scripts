/**
 * Created by user on 2017/11/26/026.
 */

import GM_XHR, { IXMLHttpRequestResponse } from 'root/lib/greasemonkey/gm/xhr';
import greasemonkey from 'root/lib/greasemonkey/uf';
//import * as Promise from 'bluebird';

/**
 * https://www.gamer.com.tw/ajax/signin.php?_2
 *
 * action=2
 * {"signin":0,"days":5}
 *
 * {"signin":1}
 *
 * https://www.gamer.com.tw/ajax/get_csrf_token.php?_=1511626146524
 *
 * 01d3da5045c096eeb207f1000a85be31b5cbb6ad56465b275a1995a5
 *
 * https://www.gamer.com.tw/ajax/signin.php?_1
 *
 * action=1
 token=01d3da5045c096eeb207f1000a85be31b5cbb6ad56465b275a1995a5
 * {"nowd":6,"days":6,"message":"\u7c3d\u5230\u6210\u529f"}
 *
 * {"code":-2,"message":"\u4eca\u5929\u60a8\u5df2\u7d93\u7c3d\u5230\u904e\u4e86\u5594"}
 */
export async function signin(force?: boolean): Promise<IXMLHttpRequestResponse>
{
	let options = {
		method: 'POST',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		dataType: 'json',
	};

	return GM_XHR
		.ajax('https://www.gamer.com.tw/ajax/signin.php?_2', Object.assign({}, options, {

			data: {
				action: 2,
			},

		}))
		.then(function (res: IXMLHttpRequestResponse)
		{
			//console.log(5, res, res.response);

			if (res && res.response && (force || res.response.signin == 0))
			{
				return GM_XHR
					.ajax('https://www.gamer.com.tw/ajax/get_csrf_token.php', Object.assign({}, options, {

						data: {
							_: Date.now(),
						},
						dataType: 'text',

					}))
					.then(function (res: IXMLHttpRequestResponse)
					{
						//console.log(6, res, res.response);

						if (res && res.response)
						{
							return GM_XHR
								.ajax('https://www.gamer.com.tw/ajax/signin.php?_1', Object.assign({}, options, {

									data: {
										action: 1,
										token: res.response,
									},

								}))
								.then(function (res: IXMLHttpRequestResponse)
								{
									//console.log(7, res, res.response);

									if (res && res.response && res.response.nowd == res.response.days)
									{
										greasemonkey.log(`[${res.response.nowd}] ${res.response.message}`, res);

										return res;
									}

									// @ts-ignore
									return Promise.reject(new Error(res));
								})
								;
						}

						greasemonkey.error('無法取得 token', res);

						// @ts-ignore
						return Promise.reject(new Error(res));
					})
					;
			}
			else if (res && res.response &&  res.response.signin == 1)
			{
				greasemonkey.log(`已經簽到過`, res);

				return res;
			}

			// @ts-ignore
			return Promise.reject(new Error(res));
		})
		.then(function (res)
		{
			if (!res || (res !== true) && !res.response)
			{
				return Promise.reject(new Error(res));
			}

			return res;
		})
		.catch(err => greasemonkey.error(err))
		;
}

export default signin;
