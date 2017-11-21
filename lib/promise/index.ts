/**
 * Created by user on 2017/11/21/021.
 */

import * as Promise from 'bluebird';

export { Promise };

export function PromiseInterval(cb, interval = 100)
{
	const defer = Promise.defer();

	defer.interval = interval;
	defer.stop = false;
	defer.timer = null;
	defer.count = 0;

	defer.fn = function (stop)
	{
		clearTimeout(defer.timer);

		if (!defer.promise.isPending())
		{
			return;
		}

		defer.count++;

		stop = stop || defer.stop;

		let ret = cb(defer);

		if (typeof ret != 'undefined' && ret !== false)
		{
			defer.resolve(ret);
		}
		else if (ret === false)
		{
			defer.resolve(ret);
		}
		else if (stop)
		{
			defer.resolve(false);
		}
		else if (!stop)
		{
			defer.timer = setTimeout(function ()
			{
				defer.fn();
			}, defer.interval);
		}
	};

	defer
		.promise
		.tap(function ()
		{
			clearTimeout(defer.timer);
		})
		.tapCatch(function (err)
		{
			clearTimeout(defer.timer);
		})
	;

	defer.fn();

	return defer;
}

export default Promise;
