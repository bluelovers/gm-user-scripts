/**
 * Created by user on 2017/7/17/017.
 */

'use strict';

module.exports.makeJQueryPlugin = ($ = global.jQuery, window = global.window) =>
{

	$.fn.push = function (selector, context)
	{
		Array.prototype.push.apply(this, $.makeArray($(selector, context).not(this)));

		return this;
	};

};
