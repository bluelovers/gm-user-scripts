/**
 * Created by user on 2018/10/12/012.
 */

export function open(url: string, target?: string, attr?: string, ...argv)
{
	return window.open(url, target, attr, ...argv);
}

export function openInBackground(url: string, target?: string, attr?: string, ...argv)
{
	let opener = window;
	let win = open(url, target, attr, ...argv);

	setTimeout(function ()
	{
		try
		{
			opener.focus()
		}
		catch (e)
		{}
	}, 200);

	return win;
}

open.open = open;
open.openInBackground = openInBackground;
open.default = open;

export default open
