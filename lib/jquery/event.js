/**
 * Created by user on 2017/8/14/014.
 */

'use strict';

module.exports.makeJQueryPlugin = ($ = global.jQuery, window = global.window) =>
{

	$.fn.events = function ()
	{
		return $._data(this.get(0), 'events');
	};

	$.fn.eventExists = function (type, namespace)
	{
		let events = $(this).events();

		if (events && events[type] && events[type].length)
		{
			if (typeof namespace != 'undefined')
			{
				for (let ev of events[type])
				{
					if (ev.namespace === namespace)
					{
						return true;
					}
				}
			}
			else
			{
				return true;
			}
		}

		return false;
	};

};
