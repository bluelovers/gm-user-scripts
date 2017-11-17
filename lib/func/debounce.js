/**
 * Created by user on 2017/7/15/015.
 */

module.exports = Function.prototype.debounce = function (threshold)
{
	let callback = this;
	let timeout;
	return function ()
	{
		let context = this, params = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function ()
		{
			callback.apply(context, params);
		}, threshold);
	};
};
