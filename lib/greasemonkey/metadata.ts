/**
 * Created by user on 2017/11/27/027.
 */

export interface IParseMetadata
{
	'name': any[];
	'grant': any[];
	'include': any[];
	'exclude': any[];

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
				let _m = /^\/\/[\s\t]*@([a-z:]+)(?:[\s\t]+(.+))?(?:[\s\t]+)?$/i.exec(value.trim("\t "));

				//console.log(_m, value);

				let k = _m[1], v = _m[2];

				if (v)
				{
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

		_arr.grant = meta_filter(_arr.grant);

		_arr.include = meta_filter(_arr.include);

		_arr.exclude = meta_filter(_arr.exclude);

		_arr.grant.sort();

		return _arr as IParseMetadata;
	}
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

export default exports;
