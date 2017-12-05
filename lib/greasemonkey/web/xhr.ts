/**
 * Created by user on 2017/12/1/001.
 */

import GMApi from '../gm/api';

export interface IParams
{
	context?: GMXMLHttpRequest;

	status?;
	statusText?;
	responseHeaders?;
	responseText?;
	readyState?;

	headers?: {};
	onreadystatechange?;

	overrideMimeType?;

	data?;
	binary?;

	[index: string]: any;
}

export interface IGMXMLHttpRequest
{
	status?;
	statusText?;
	responseHeaders?;
	responseText?;
	readyState?;

	onreadystatechange?: Function;
}

export class GMXMLHttpRequest implements IGMXMLHttpRequest
{
	public _params: IParams = {};
	protected _xhr;
	protected _detail;

	public status;
	public statusText;
	public responseHeaders;
	public responseText;
	public readyState;

	public onreadystatechange;

	constructor()
	{
		this._params.context = this;
		this._params.headers = {};
		this._params.onreadystatechange = this._onreadystatechange.bind(this);
	}

	protected _send(data, binary)
	{
		let t: IParams = {
			data: data,
			binary: binary,
		};

		Object.assign(t, this._params);

		for (let key in this)
		{
			if ((/^_/.test(key)) || 0 && (typeof this[key] == 'function' && !this.hasOwnProperty(key)))
			{
				continue;
			}

			if (!(key in t))
			{
				if (typeof this[key] == 'function')
				{
					t[key] = function (xhr)
					{
						this[key].call(this, xhr);
					}.bind(this);
				}
				else
				{
					t[key] = this[key];
				}
			}
		}

		//console.log(t);

		this._xhr = GM_xmlhttpRequest(t as GMXMLHttpRequestOptions);
	}

	send(data)
	{
		return this._send(data, false);
	}

	sendAsBinary(data)
	{
		return this._send(data, true);
	}

	open(_method, _url, _async, _user, _passw)
	{
		this.abort();

		this._params.method = _method.toUpperCase();
		this._params.url = _url;
		this._params.synchronous = !_async;
		this._params.user = _user;
		this._params.password = _passw;
	}

	protected _onreadystatechange(detail)
	{
		this.status = detail.status;
		this.statusText = detail.statusText;

		this.responseHeaders = detail.responseHeaders;
		this.responseText = detail.responseText;
		this.responseXML = detail.responseXML;
		this.response = detail.response;

		this.readyState = detail.readyState;

		this.finalUrl = detail.finalUrl;
		this.lengthComputable = detail.lengthComputable;
		this.loaded = detail.loaded;
		this.total = detail.total;

		this._detail = detail;

		//Object.assign(this._xhr, detail);
		//Object.assign(this._params.context, detail);

		//console.log('_onreadystatechange', detail);

		this.onreadystatechange && this.onreadystatechange();
	}

	setRequestHeader(key, value)
	{
		this._params.headers[key] = value;
	}

	getResponseHeader(key)
	{
		return this.responseHeaders[key];
	}

	getAllResponseHeaders()
	{
		return this.responseHeaders;
	}

	overrideMimeType(value)
	{
		this._params.overrideMimeType = value;
	}

	abort()
	{
		this._xhr && this._xhr.abort();
	}
}

export function XMLHttpRequest()
{
	return new GMXMLHttpRequest();
}

export function ajaxSetup(jq?)
{
	let j = (jq || $);

	j.ajaxSetup({
		xhr: XMLHttpRequest,
	});

	return j;
}

export default XMLHttpRequest;
