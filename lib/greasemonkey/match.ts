/**
 * Created by user on 2017/9/14/014.
 */

'use strict';

const minimatch = require("minimatch");
const Minimatch = minimatch.Minimatch;

module.exports = {

	match(list, pattern, options = {})
	{
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
	},

	/**
	 * require('root/lib/greasemonkey/match').auto(_url_obj._source, module.exports)
	 *
	 * @param url
	 * @param self
	 * @param options
	 * @returns {boolean}
	 */
	auto(url, self, options = {})
	{
		options = Object.assign({}, {
			nocase: true,
			//noglobstar: true,
			dot: true,
			//debug: true,
		}, options);

		let ret = false;

		//console.debug(url, self.metadata.exclude, self.metadata.match);

		if (self.metadata.exclude && self.metadata.exclude.length && module.exports.match(url, self.metadata.exclude, options))
		{
			return false;
		}

		if (self.metadata.match && self.metadata.match.length)
		{
			ret = module.exports.match(url, self.metadata.match, options);
		}
		else
		{
			ret = false;
		}

		return ret;
	}

};
