/**
 * Created by user on 2018/2/20/020.
 */

import GM_XHR, { IXMLHttpRequestResponse, AjaxError } from 'root/lib/greasemonkey/gm/xhr';
import greasemonkey from 'root/lib/greasemonkey/uf';

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
		.ajax('https://poi.iqing.com/account/check_in/', Object.assign({}, options, {

			data: {
				//action: 2,
			},

		}))
		.then(function (res: IXMLHttpRequestResponse)
		{
			//console.log(5, res, res.response);

			if (res && res.response &&  res.response.msg == 'success')
			{
				greasemonkey.log(`success`, res);

				return res;
			}

			// @ts-ignore
			return Promise.reject(AjaxError(res));
		})
		.then(function (res)
		{
			if (!res || (res !== true) && !res.response)
			{
				return Promise.reject(AjaxError(res));
			}

			return res;
		})
		.catch(err => greasemonkey.error(err))
		;
}

export default signin;
