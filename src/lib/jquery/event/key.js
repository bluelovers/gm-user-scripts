/**
 * Created by user on 2017/8/20/020.
 */

'use strict';

module.exports.makeJQueryPlugin = ($ = global.jQuery, window = global.window) =>
{

	$.fn.triggerKey = function (data, type = 'keydown')
	{
		if (typeof data != 'object')
		{
			data = Object.assign({}, {
				which: data,
			})
		}

		let e = $.Event(type);

		Object.assign(e, data);

		console.log(e);

		return this.trigger(e);
	};

};
