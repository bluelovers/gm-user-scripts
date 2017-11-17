/**
 * Created by user on 2017/8/15/015.
 */

'use strict';

module.exports.packEvent = function (fn, context = global.window, filter = ':input')
{
	return function (event, ...argv)
	{
		let _self = this;
		let d = global.jQuery(document.activeElement);

		if (!d.is(filter))
		{
			//console.log(':focus', true, d, event);

			let ret = global.jQuery.proxy(fn, _self, event, ...argv)();

			return ret;
		}
		else
		{
			//console.log(':focus', false, d, event);
		}
	};
};
