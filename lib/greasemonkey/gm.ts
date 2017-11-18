/**
 * Created by user on 2017/7/21/021.
 */

'use strict';

const Map_registerMenuCommand = new Map();

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

	const label = getLabel(options);

	const fn = async function ()
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
	};

	GM_registerMenuCommand(label, fn);
	Map_registerMenuCommand.set(label, fn);

	return label;
}

export function getLabel(options: string | IRegisterMenuCommandOptions): string
{
	if (typeof options == 'string')
	{
		options = {
			label: options as string,
		} as IRegisterMenuCommandOptions;
	}

	const label = options.label || `[${options.name || options.id}] ${options.key}`;

	return label;
}

export async function callMenuCommand(options: string | IRegisterMenuCommandOptions, ...argv)
{
	const label = getLabel(options);

	let fn = Map_registerMenuCommand.get(label) as Function;

	if (fn)
	{
		return await fn(...argv);
	}

	return fn;
}

export function listMenuCommand(): string[]
{
	let ls = [];

	Map_registerMenuCommand.forEach(function (value, key, map)
	{
		ls.push(key);
	});

	return ls;
}
