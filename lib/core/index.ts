/**
 * Created by user on 2017/11/17/017.
 */

import { parse_url, IUrlObject } from 'root/lib/func/parse_url';
import greasemonkey from 'root/lib/greasemonkey/uf';

export { greasemonkey };

export interface IWindow extends Window, IDomain
{
	$: JQueryStatic;
	jQuery: JQueryStatic;
}

export interface IGlobal extends NodeJS.Global, IDomain
{
	$: JQueryStatic;
	jQuery: JQueryStatic;

	userScript: IExports;

	unsafeWindow: IWindow;
}

export interface IExports extends IDomain
{
	[index: string]: any;
}

export interface IDomain
{
	_url?: string;
	_url_old?: string;

	_url_obj?: IUrlObject2;
	_url_obj_?: IUrlObject2;
}

export interface IMainCallback extends Function
{
	(uxid: string, exports: IExports, global: IGlobal, window: Window, $?: JQueryStatic, _url?: string);
}

declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const global: IGlobal;

export interface IUrlObject2 extends IUrlObject
{
	_source?: string;
}

export interface IIndex
{
	name: string;
	id: string;

	list_script: string[];
	current?: any[];
}

export interface IGetListScript
{
	name: string;
	name_id: string;
	lib: any;
}

export function run(uxid: string, exports: IExports, $jq?: JQueryStatic, cb?: IMainCallback)
{
	$jq = $jq || $;

	let _dummy = async () =>
	{
		try
		{
			if (cb)
			{
				await cb(uxid, exports, global, window, $jq, window.location.href);
			}
			else
			{
				await init(uxid, exports, global, window, $jq, window.location.href);
			}

			//let index = require(`root/src/${uxid}`);
			const index = requireScript(uxid, 'index');

			//await index.main(index.list);
			await main(uxid, index, index.list);

			console.info(uxid, 'index.current', index.current);
		}
		catch (e)
		{
			console.error(uxid, e.message, e.stack);
		}
		finally
		{
			console.info(uxid, [global._url, global._url_obj, global.unsafeWindow]);
		}
	};

	$(() =>
	{
		_dummy();
	});
}

export interface IUrlCallback extends Function
{
	(_url?: string, domain?: IDomain, old?: string);
}

export function url(_url: string, domain: IGlobal | IExports = global, cb?: IUrlCallback, overwrite?: boolean)
{
	if (overwrite || !domain._url || domain._url != _url)
	{
		const old = domain._url;

		domain._url_old = old;

		domain._url = _url.toString();
		domain._url_obj = parse_url(domain._url) as IUrlObject2;

		if (typeof cb === 'function')
		{
			cb(domain._url, domain, old);
		}

		return domain;
	}
}

export function init(uxid: string, exports: IExports, global: IGlobal, window: Window, $jq?: JQueryStatic, _url?: string)
{
	{
		_url = _url || window.location.href;

		_parse_url(_url, exports);
		_parse_url(_url, global);
	}

	global.$ = $jq || global.$ || $;
	global.jQuery = $jq || global.jQuery || jQuery;

	global.userScript = exports;
}

function _parse_url(_url: string, domain: IDomain)
{
	let obj = url(_url, domain, function (_url, domain, old)
	{
		domain._url_obj._source = _url;
		domain._url_obj_ = Object.assign({}, domain._url_obj);
	}, true);

	return obj;
}

export function requireScript(uxid: string, name: string)
{
	return require(`root/src/${uxid}/${name}`);
}

export function get_list_script(uxid: string, index: IIndex, _url_obj: IUrlObject2): IGetListScript[]
{
	let list_script = index.list_script
		.reduce(function (a: IGetListScript[], name)
		{
			let lib = requireScript(uxid, name);

			let name_id = name;

			if (lib.name && lib.name != name_id)
			{
				name_id = `${lib.name} - ${name_id}`;
			}

			if (lib.script_method && lib.script_method.clearly && lib.test(_url_obj))
			{
				a.push({
					name: name,
					name_id: name_id,

					lib: lib,
				});
			}

			return a;
		}, [] as IGetListScript[])
		.concat(index.current)
	;

	return list_script;
}

export async function main(uxid: string, index: IIndex, list, options = {})
{
	console.time(index.name);
	console.group(index.name);

	let _break;

	for (let name of list)
	{
		//console.log(888, name);

		const lib = requireScript(uxid, name);

		let name_id = name;

		if (lib.name && lib.name != name_id)
		{
			name_id = `${lib.name} - ${name_id}`;
		}

		name_id = `[${name_id}]`;

		//console.log(999, name_id);

		if (_break && !lib.script)
		{
			//console.debug(name_id, 'break:script', lib.script);
			continue;
		}
		else if (lib.disable)
		{
			console.warn(index.id, name_id, 'disable, skip this');
			continue;
		}

		let ret = true;

		console.time(name);
		console.group(name);

		let test;
		let ret_main;

		CHK:
		{
			test = await lib.test(global._url_obj);

			greasemonkey.info(index.id, name_id, 'test', test);

			if (_break && test !== 2)
			{
				greasemonkey.info(index.id, name_id, 'break:test', test);

				break CHK;
			}

			if (test)
			{
				ret_main = await lib.main(global._url_obj);

				if (ret_main == true || ret_main === undefined)
				{
					ret_main = true;

					greasemonkey.info(index.id, name_id, 'matched', ret_main, ret);
				}
				else
				{
					greasemonkey.debug(index.id, name_id, 'main', ret_main);
				}

				//test = false;

				if (ret_main)
				{
					ret = false;

					if (test && test !== true)
					{
						//test = true;
						ret = true;
					}

					greasemonkey.debug(index.id, name_id, 'chk', ret_main, ret, test);
				}
			}

			if (!ret || test)
			{
				greasemonkey.debug(index.id, name_id, 'current:push', ret_main, ret, test);

				index.current.push({
					name: name,
					name_id: name_id,

					lib: lib,
				});
			}
		}

		console.groupEnd(name);
		console.timeEnd(name);

		if (!_break && !ret)
		{
			greasemonkey.debug(index.id, name_id, 'break', ret_main, ret, test);

			_break = true;

			//break;
		}
	}

	console.groupEnd(index.name);
	console.timeEnd(index.name);
}
