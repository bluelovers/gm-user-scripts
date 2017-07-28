/**
 * Created by user on 2017/7/21/021.
 */

'use strict';

module.exports = {

	registerMenuCommand(options, callback, argv = [])
	{
		if (typeof options == 'string')
		{
			options = {
				label: options,
			};
		}

		const label = options.label || `[${options.name || options.id}] ${options.key}`;

		GM_registerMenuCommand(label, function ()
		{
			console.time(label);
			console.group(label);

			let ret;

			try
			{
				ret = callback(options, ...argv);

				if (ret && ret !== true)
				{
					console.info(label, options.fn_name || callback.name, [ret.length, ret]);
				}
			}
			catch(e)
			{
				console.error(e);
			}

			console.groupEnd(label);
			console.timeEnd(label);
		});
	},

};
