/**
 * Created by user on 2017/11/26/026.
 */

import GMApi from './api';

export const GM_XHR = GMApi.xmlhttpRequest;

// @ts-ignore
export interface IXMLHttpRequestOptions extends GMXMLHttpRequestOptions
{
	data: string | any[] | FormData;
	dataType?: string;
}

export interface IXMLHttpRequestResponse extends GMXMLHttpRequestResponse
{
	response?;
	responseType?: string;
	responseOriginal?;
}

export function makeOptions(options): IXMLHttpRequestOptions
{
	return Object.assign({
		method: 'GET',
	}, options);
}

export function ajax(url, options?: IXMLHttpRequestOptions): Promise<IXMLHttpRequestResponse>
{
	options = makeOptions(options);

	options.url = url;

	if (options.data && typeof options.data == 'object' && !(options.data instanceof FormData))
	{
		let formData = new FormData();

		for (let i in options.data)
		{
			formData.append(i, options.data[i]);
		}

		options.data = formData;
	}

	return new Promise(function (resolve, reject)
	{
		GM_XHR(Object.assign({}, options, {
			onload: function (res: IXMLHttpRequestResponse)
			{
				resolve(res as IXMLHttpRequestResponse);
			},
			onerror: reject,
		}) as GMXMLHttpRequestOptions);
	})
		.then(function (res: IXMLHttpRequestResponse)
		{
			if (options.dataType == 'json')
			{
				res.responseOriginal = res.response;
				res.response = JSON.parse(res.responseText);
			}

			res.responseType = res.responseType || options.dataType || null;

			if (typeof options.onload === 'function')
			{
				let ret = options.onload.call(this, res);

				if (typeof ret !== 'undefined')
				{
					return ret as IXMLHttpRequestResponse;
				}
			}

			return res as IXMLHttpRequestResponse;
		})
	;
}

export function AjaxError<T = Error>(res, libError: ErrorConstructor = Error): T & {res?}
{
	let err = new libError(res);

	// @ts-ignore
	err.res = res;

	// @ts-ignore
	return err;
}

import * as self from './xhr';
export default self;
