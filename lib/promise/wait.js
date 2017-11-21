/**
 * Created by user on 2017/7/14/014.
 */

module.exports.jquery = function waitUntil(cb, delay = 100)
{
	let deferred = new $.Deferred();
	let count = 0;

	let _wait = function ()
	{
		count++;

		let ret = cb(deferred, count);

		if (deferred.isRejected() || deferred.isResolved())
		{
		}
		else if (ret === false)
		{
			deferred.reject([ret, count]);
		}
		else if (count <= 20 || ret === true)
		{
			setTimeout(_wait, delay);
		}
		else
		{
			deferred.rejectWith(ret, [ret, count]);
		}
	};

	setImmediate(_wait);

	return deferred.promise();
};
