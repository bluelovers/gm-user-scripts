/**
 * Created by user on 2018/5/29/029.
 */

import { minify, Options as IMinifyOptions } from 'html-minifier';

export function minifyHTML(html, options: IMinifyOptions = {}, logError: boolean | number = true): string
{
	let err;

	options = Object.assign({
		collapseWhitespace: true,
		preserveLineBreaks: true,
		conservativeCollapse: true,
		caseSensitive: true,
	}, options);

	try
	{
		let ret = minify(html, options);

		return ret;
	}
	catch (e)
	{
		err = e;

		if (logError)
		{
			if (logError < 0)
			{
				console.error('[minifyHTML]', err.toString());
			}
			else
			{
				console.error('[minifyHTML]', err.toString().split(/[\r\n]/)[0]);
			}
		}
	}

	return html;
}

export default minifyHTML
