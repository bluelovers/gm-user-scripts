/**
 * Created by user on 2017/7/21/021.
 */

'use strict';

export interface IRegisterMenuCommandOptions
{
	id?: string;
	key?: string;

	name?: string;
	label?: string;

	fn_name?;

	[key: string]: any;
}

export interface IRegisterMenuCommandCallback extends Function
{
	(options: IRegisterMenuCommandOptions);
}

export function registerMenuCommand(options: string | IRegisterMenuCommandOptions,
	callback: IRegisterMenuCommandCallback,
	argv = []
)
{
	if (typeof options == 'string')
	{
		options = {
			label: options,
		} as IRegisterMenuCommandOptions;
	}

	const label = options.label || `[${options.name || options.id}] ${options.key}`;

	GM_registerMenuCommand(label, async function ()
	{
		console.time(label);
		console.group(label);

		let ret;

		try
		{
			ret = await callback(options as IRegisterMenuCommandOptions, ...argv);

			if (ret && ret !== true)
			{
				console.info(label, (options as IRegisterMenuCommandOptions).fn_name || callback.name, [ret.length, ret]);
			}
		}
		catch (e)
		{
			console.error(e);
		}

		console.groupEnd(label);
		console.timeEnd(label);
	});
}
