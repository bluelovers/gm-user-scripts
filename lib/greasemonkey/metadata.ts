/**
 * Created by user on 2017/11/27/027.
 */

import { array_unique } from '../func/array/unique';

export interface IParseMetadata
{
	'name': any[];
	'grant': any[];
	'include': any[];
	'exclude': any[];
	'match': any[];

	'noframes': any[];

	[index: string]: any[];
}

export function parseMetadata(script: string): IParseMetadata
{
	script = script.toString();

	let _m;

	if (_m = script.match(/(^\/\/\s+==UserScript==)/m))
	{
		let _s1 = _m.index;

		{
			let _r = /(^\/\/\s+==\/UserScript==)/m;

			_r.lastIndex = _m.index + _m[0].length;

			_m = _r.exec(script);
		}

		script = script.slice(_s1, _m.index + _m[0].length);

		let _arr: IParseMetadata = script
			.split(/\r\n|\r|\n/)
			.filter(function (value, index, array)
			{
				return /^\/\/\s*@/g.test(value);
			})
			.reduce(function (_arr, value)
			{
				// @ts-ignore
				let _m = /^\/\/[\s\t]*@([a-z:]+)(?:[\s\t]+(.+))?(?:[\s\t]+)?$/i.exec(value.trim("\t "));

				//console.log(_m, value);

				let k = _m[1], v = _m[2];

				if (v)
				{
					// @ts-ignore
					v = v.trim("\t ");
				}

				_arr[k] = _arr[k] || [];

				if (_arr[k].indexOf(v) == -1)
				{
					_arr[k].push(v);
				}

				return _arr;
			}, {}) as IParseMetadata
		;

		_arr = Object.assign({
			'name': [],
		}, _arr, {
			'grant': [],
			'include': [],
			'exclude': [],

			'noframes': [],
		}, _arr);

		[
			'include',
			'match',
			'exclude',
			'grant',
		].forEach(function (value)
		{
			if (_arr[value])
			{
				_arr[value] = (_arr[value].length) ? meta_filter(array_unique(_arr[value])) : [];
			}
		});

		_arr.grant.sort();

		return _arr as IParseMetadata;
	}
}

export function hasGrant(grant: string[], name: string)
{
	if (grant.includes('GM.' + name) || grant.includes('GM_' + name))
	{
		return true;
	}

	return false;
}

export function lazyMetaFix(meta: IParseMetadata): IParseMetadata
{
	if (meta.noframes && meta.noframes.length && meta.noframes[0] == 'no')
	{
		meta.noframes = [];
	}

	if (meta.grant && meta.grant.length)
	{
		meta.grant.forEach(function (value, index, array)
		{
			let _m;
			if (_m = /^GM[\.\_](.+)$/.exec(value))
			{
				meta.grant.push('GM.' + _m[1]);
				meta.grant.push('GM_' + _m[1]);

				//console.log(_m);
			}
		});

		[
			[
				'getValue',
				'setValue',
				'deleteValue',
				'listValues',
			],
			[
				'getResourceUrl',
				'getResourceURL',
			],
			[
				'getTab',
				'saveTab',
				'getTabs',
			],
			[
				'addValueChangeListener',
				'removeValueChangeListener',
			],
			[
				'registerMenuCommand',
				'unregisterMenuCommand',
			],
			/*
			'info',
			'openInTab',
			'setClipboard',
			'xmlhttpRequest',
			'getResourceText',
			'log',
			'addStyle',
			*/
		].forEach(function (_a)
		{
			_a = Array.isArray(_a) ? _a : [_a];

			for (let value of _a)
			{
				if (meta.grant.includes('GM.' + value) || meta.grant.includes('GM_' + value))
				{
					meta.grant = meta.grant
						.concat(_a.map(function (value)
						{
							return 'GM.' + value;
						}))
						.concat(_a.map(function (value)
						{
							return 'GM_' + value;
						}))
					;

					break;
				}
			}
		});
	}

	if (meta.match)
	{
		meta.match = meta_match(meta.match);
	}

	[
		'include',
		'match',
		'exclude',
		'grant',
	].forEach(function (value)
	{
		if (meta[value])
		{
			meta[value] = (meta[value].length) ? meta_filter(array_unique(meta[value])) : [];
		}
	});

	if (meta.grant && meta.grant.length)
	{
		meta.grant.sort();
	}

	return meta;
}

export function meta_match(arr: string[])
{
	return arr.map(function (value, index, array)
	{
		return value.replace(/^.*(\:\/\/)/, '\*$1')
	})
}

export function makeMetaRow(key: string, data, addFirst = false, pad = "\t\t", margin = "// ", LF = "\n")
{
	let ret: string = '';
	let s = `${margin}@${key}${pad}`;

	if (Array.isArray(data))
	{
		ret = data.join(`${LF}${s}`);
	}
	else if (typeof data !== 'undefined')
	{
		ret = data.toString();
	}

	if (addFirst)
	{
		ret = s + ret;
	}

	return ret;
}

export function meta_filter(arr: any[])
{
	return arr.filter(function (value, index, array)
	{
		return !!value;
	});
}

import * as self from './metadata';
export default self;
