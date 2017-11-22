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
 * require('root/lib/greasemonkey/match').auto(_url_obj._source, module.exports)
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

	if (self.metadata.match && self.metadata.match.length)
	{
		ret = match(url, self.metadata.match, options);
	}
	else
	{
		ret = false;
	}

	return ret;
}
