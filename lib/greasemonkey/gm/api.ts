/**
 * Created by user on 2017/11/26/026.
 */

/**
 * @see https://wiki.greasespot.net/Greasemonkey_Manual:API
 */
export interface IGM
{
	info: IInfo,

	deleteValue(name: string);

	getValue<T, U>(name: string, defaultValue?: U): U;

	listValues(): string[];

	setValue<T, U>(name: string, value: U);

	getResourceUrl(resourceName: string): string;

	openInTab(url: string, open_in_background?: boolean): Window;

	setClipboard(text: string);

	xmlhttpRequest(options: GMXMLHttpRequestOptions): GMXMLHttpRequestResult;

	getResourceText(resourceName: string): string;

	log(message: any);

	addStyle(css: string);

	registerMenuCommand(caption: string, commandFunc: Function, accessKey?: string);
}

declare const GM: IGM;

export interface IApi extends IGM
{
	GM?: IGM;

	GM_info: IInfo,

	GM_deleteValue(name: string);

	GM_getValue<T, U>(name: string, defaultValue?: U): U;

	GM_listValues(): string[];

	GM_setValue<T, U>(name: string, value: U);

	GM_getResourceUrl(resourceName: string): string;

	GM_openInTab(url: string, open_in_background?: boolean): Window;

	GM_setClipboard(text: string);

	GM_xmlhttpRequest(options: GMXMLHttpRequestOptions): GMXMLHttpRequestResult;

	GM_getResourceText(resourceName: string): string;

	GM_log<T>(message: T);

	GM_addStyle(css: string);

	GM_registerMenuCommand(caption: string, commandFunc: Function, accessKey?: string);

	unsafeWindow: Window;
}

export interface ITampermonkeyGM
{
	info: ITampermonkeyInfo;

	notification?,

	getTab?,
	saveTab?,
	getTabs?,

	download?,

	unregisterMenuCommand?,

	addValueChangeListener?,
	removeValueChangeListener?,
}

/**
 * @see http://tampermonkey.net/documentation.php
 */
export interface ITampermonkey
{
	GM_info: ITampermonkeyInfo;

	GM_openInTab(url: string, loadInBackground?: boolean);
	GM_openInTab(url: string, options?: any);

	GM_notification(text: string, title?: string, image?: string, onclick?);
	GM_notification(details: {
		text?: string,
		title?: string,
		image?: string,
		highlight?: boolean,
		timeout?: number,
		ondone?,
		onclick?,
	}, ondone?);

	GM_getTab(cb);
	GM_saveTab(tab);
	GM_getTabs(cb);

	GM_download(url: string, name?: string);
	GM_download(details: {
		url: string,
		name?: string,
		headers?,
		saveAs?: boolean,
		onload?,
		onerror?,
	});

	GM_unregisterMenuCommand(menuCmdId);

	GM_addValueChangeListener(name, cb: IGM_addValueChangeListenerFn);
	GM_removeValueChangeListener(listener_id);
}

export interface IGM_addValueChangeListenerFn extends Function
{
	(name: string, old_value, new_value, remote: boolean);
}

export interface ITampermonkeyInfo extends IInfo
{

}

export interface IApi extends ITampermonkey, ITampermonkeyGM
{

}

export interface IApi
{
	GMApi: IApi;
	default: IApi;

	isTampermonkey: boolean;
	hasGM: boolean;

	_list: string[];

	call(method: string, ...argv);

	callSafe(method: string): Function;
}

export interface IInfo
{
	script?: {
		description?: string;
		excludes?: string[];
		includes?: string[];
		matches?: string[];
		name?: string;
		namespace?: string;
		resources?: Object;
		"run-at"?: string;
		unwrap?: boolean;
		version?: string;
	};
	scriptMetaStr?: string;
	scriptWillUpdate?: boolean;
	version?: string;

	[index: string]: any;

	scriptHandler?: string;
}

namespace _GMApi
{
	declare const _GMApi: IApi;

	let _hasGM = typeof GM !== 'undefined';

	if (_hasGM)
	{
		Object.keys(GM)
			.concat([
				'info',
				'deleteValue',
				'getValue',
				'listValues',
				'setValue',
				'getResourceUrl',
				'openInTab',
				'setClipboard',
				'xmlHttpRequest',

				'getResourceText',
				'log',
				'addStyle',

				'registerMenuCommand',
			])
			.forEach(function (value, index, array)
			{
				_GMApi[value] = typeof GM[value] !== 'undefined' ? GM[value] : void(0);
			})
		;
	}
	else
	{
		_GMApi.info = typeof GM_info !== 'undefined' ? GM_info : void(0);
		_GMApi.deleteValue = typeof GM_deleteValue !== 'undefined' ? GM_deleteValue : void(0);
		_GMApi.getValue = typeof GM_getValue !== 'undefined' ? GM_getValue : void(0);
		_GMApi.listValues = typeof GM_listValues !== 'undefined' ? GM_listValues : void(0);
		_GMApi.setValue = typeof GM_setValue !== 'undefined' ? GM_setValue : void(0);
		_GMApi.getResourceUrl = (
			// @ts-ignore
			typeof GM_getResourceUrl !== 'undefined' ? GM_getResourceUrl : (
				typeof GM_getResourceURL !== 'undefined' ? GM_getResourceURL : void(0)
			))
		;
		_GMApi.openInTab = typeof GM_openInTab !== 'undefined' ? GM_openInTab : void(0);
		_GMApi.setClipboard = typeof GM_setClipboard !== 'undefined' ? GM_setClipboard : void(0);
		_GMApi.xmlhttpRequest = typeof GM_xmlhttpRequest !== 'undefined' ? GM_xmlhttpRequest : void(0);

		_GMApi.getResourceText = typeof GM_getResourceText !== 'undefined' ? GM_getResourceText : void(0);
		_GMApi.log = typeof GM_log !== 'undefined' ? GM_log : void(0);
		_GMApi.addStyle = typeof GM_addStyle !== 'undefined' ? GM_addStyle : void(0);

		_GMApi.registerMenuCommand = typeof GM_registerMenuCommand !== 'undefined' ? GM_registerMenuCommand : void(0);
	}

	let _isTampermonkey = null;

	if (_GMApi.info)
	{
		if (!_GMApi.info.scriptHandler)
		{
			_isTampermonkey = false;
		}
		else if (_GMApi.info.scriptHandler == 'Tampermonkey')
		{
			_isTampermonkey = true;
		}
		else if (_GMApi.info.scriptHandler == 'Greasemonkey')
		{
			_isTampermonkey = false;
		}
	}
	else if (_hasGM)
	{
		_isTampermonkey = false;
	}

	if (!_hasGM)
	{
		try
		{
			let _a = {
				GM_notification: GM_notification,

				GM_getTab: GM_getTab,
				GM_saveTab: GM_saveTab,
				GM_getTabs: GM_getTabs,

				GM_download: GM_download,

				GM_unregisterMenuCommand: GM_unregisterMenuCommand,

				GM_addValueChangeListener: GM_addValueChangeListener,
				GM_removeValueChangeListener: GM_removeValueChangeListener,
			};

			for (let name in _a)
			{
				_GMApi[name.replace(/^GM_/, '')] = typeof _a[name] !== 'undefined' ? _a[name] : void(0);
			}
		}
		catch (e)
		{
			console.error(e);
		}
	}

	let _t_list = [];

	let _t_keys = Object.keys(_GMApi);

	_GMApi.GM = _hasGM ? GM : {} as IGM;

	_t_keys
		.forEach(function (value, index, array)
		{
			if (typeof _GMApi.GM[value] == 'undefined')
			{
				_GMApi.GM[value] = _GMApi[value];
			}

			_GMApi['GM_' + value] = _GMApi[value];

			_t_list.push(value);
			_t_list.push('GM_' + value);
		})
	;

	export const _list: string[] = _t_list;
	export const isTampermonkey = _isTampermonkey;
	export const hasGM = _hasGM;

	_GMApi.unsafeWindow = typeof unsafeWindow !== 'undefined' ? unsafeWindow : (typeof window !== 'undefined'
		? window
		: void(0))
	;

	export function call(method: string, ...argv)
	{
		if (typeof _GMApi[method] == 'function')
		{
			return _GMApi[method].call(_GMApi['GM'] || null, ...argv);
		}
		else if (typeof _GMApi[method] == 'undefined')
		{
			console.warn(`GMApi.${method} is undefined`);
		}

		return _GMApi[method];
	}

	export function callSafe(method: string)
	{
		if (typeof _GMApi[method] == 'function')
		{
			return _GMApi[method];
		}

		return new Function();
	}
}

_GMApi._list.forEach(function (value, index, array)
{
	if (value.indexOf('GM_') == 0)
	{
		module.exports[value] = _GMApi[value];
	}
});

(_GMApi as IApi).default = (_GMApi as IApi).GMApi = _GMApi as IApi;

export const GMApi: IApi = _GMApi as IApi;

export default (GMApi as IApi);

//console.log(GMApi);
