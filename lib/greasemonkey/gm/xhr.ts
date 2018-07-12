/**
 * Created by user on 2017/11/26/026.
 */

import GMApi from './api';
import * as Promise from 'bluebird';

export const GM_XHR = GMApi.xmlhttpRequest;

export type IOptions_Share = {
	data: string | any[] | FormData;
	dataType?: string;
}

// @ts-ignore
export type IXMLHttpRequestOptions = GMXMLHttpRequestOptions & IOptions_Share & {
	withCredentials?: boolean,
}

export type IAjaxOptions = JQuery.AjaxSettings & IOptions_Share & {

	xhrFields?: IXMLHttpRequestOptions,
};

export interface IXMLHttpRequestResponse extends GMXMLHttpRequestResponse
{
	response?;
	responseType?: string;
	responseOriginal?;
}

export function makeOptions(options: IAjaxOptions & IXMLHttpRequestOptions): IXMLHttpRequestOptions
{
	let data = Object.assign({
		method: 'GET',
	}, options);

	if (data.xhrFields)
	{
		Object.assign(data, data.xhrFields);
	}

	return data;
}

export function ajax(url, options?: IAjaxOptions & IXMLHttpRequestOptions): Promise<IXMLHttpRequestResponse>
{
	options = makeOptions(options);

	options.url = url;

	// @ts-ignore
	if (options.data && typeof options.data == 'object' && !(options.data instanceof FormData))
	{
		let formData = new FormData();

		for (let i in options.data)
		{
			formData.append(i, options.data[i]);
		}

		// @ts-ignore
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

			// @ts-ignore
			res._options = options;

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
