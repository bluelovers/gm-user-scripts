/**
 * Created by user on 2017/11/17/017.
 */

import { parse_url, IUrlObject } from 'root/lib/func/parse_url';

export interface IUrlObject2 extends IUrlObject
{
	_source: string;
}

export interface IIndex
{
	list_script: string[];
	current?;
}

export interface IGetListScript
{
	name: string;
	name_id: string;
	lib: any;
}

export function run(uxid: string, $: JQueryStatic, cb?: Function)
{
	let _dummy = async () =>
	{
		try
		{
			if (cb)
			{
				cb(uxid, exports, global, window, $);
			}

			let index = require(`root/src/${uxid}`);

			await index.main(index.list);

			console.info('index.current', index.current);
		}
		catch (e)
		{
			console.error(e.message, e.stack);
		}
		finally
		{
			console.info([global._url, global._url_obj, global.unsafeWindow]);
		}
	};

	$(() =>
	{
		_dummy();
	});
}

export function init(exports, global, window: Window, url?: string)
{
	exports._url = global._url = url || window.location.href;

	{
		const parse_url = require('root/lib/func/parse_url').parse_url;
		let obj = parse_url(global._url);

		exports._url_obj = _parse_url(global._url, obj);
		exports._url_obj_ = _parse_url(global._url, obj);

		global._url_obj = _parse_url(global._url, obj);
		global._url_obj_ = _parse_url(global._url, obj);
	}

	global.$ = global.$ || $;
	global.jQuery = global.jQuery || jQuery;

	global.userScript = exports;
}

function _parse_url(_url: string, _url_obj: IUrlObject | IUrlObject2): IUrlObject2
{
	let obj = Object.assign({}, _url_obj) as IUrlObject2;

	obj._source = _url;

	return obj;
}

export function get_list_script(uxid: string, index: IIndex, _url_obj: IUrlObject2): IGetListScript[]
{
	let list_script = index.list_script
		.reduce(function (a: IGetListScript[], name)
		{
			let lib = require(`root/src/${uxid}/${name}`);

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
