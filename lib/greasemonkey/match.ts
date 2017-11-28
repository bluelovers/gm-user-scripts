/**
 * Created by user on 2017/9/14/014.
 */

'use strict';

import { IDemo } from 'root/lib/core/demo';
import * as minimatch from 'minimatch';

const Minimatch = minimatch.Minimatch;

export function match(list, pattern: string[], options = {})
{
	options = option(options);

	let ret = false;

	for (let m of pattern)
	{
		m = m.replace(/\*/g, '**');

		if (ret = minimatch(list, m, options))
		{
			break;
		}
	}

	//console.debug(999, ret, list, pattern);

	return ret;
}

export function option(options)
{
	return Object.assign({}, {
		nocase: true,
		//noglobstar: true,
		dot: true,
		//debug: true,
	}, options);
}

/**
 * require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports)
 *
 * @param url
 * @param self
 * @param options
 * @returns {boolean}
 */
export function auto(url: string, self: IDemo, options = {})
{
	options = option(options);

	let ret = false;

	//console.debug(url, self.metadata.exclude, self.metadata.match);

	if (self.metadata.nomatch && self.metadata.nomatch.length && match(url, self.metadata.nomatch, options))
	{
		return false;
	}

	if (self.metadata.exclude && self.metadata.exclude.length && match(url, self.metadata.exclude, options))
	{
		return false;
	}

	if (self.metadata.include && self.metadata.include.length)
	{
		ret = match(url, self.metadata.include, options);
	}

	if (!ret && (self.metadata.match && self.metadata.match.length))
	{
		ret = matchChrome(url, self.metadata.match);
	}

	return ret;
}

export function matchChrome(url: string, pattern: string | string[])
{
	if (Array.isArray(pattern))
	{
		for (let p of pattern)
		{
			let r = matchChrome(url, p);

			if (r)
			{
				return r;
			}
		}

		return false;
	}

	let _m = (pattern as string).match(/^((?:[^\/]+):\/\/)?([^\/]+)?(\/.+)$/);

	if (_m)
	{
		let _m2 = new RegExp('^((?:https?):\\/\\/)'
			+ '('
			+ _m[2]
				.replace(/\*/g, '[^\\/]+')
				.replace(/\./g, '\\.')
			+ ')'
			+ '(' + _m[3].replace(/\*/g, '.+') + ')'
		);

		if (_m2.exec(url))
		{
			return true;
		}
	}

	return false;
}
