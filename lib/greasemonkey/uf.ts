/**
 * Created by user on 2017/11/14/014.
 */

import * as greasemonkey from './index';

export function GM_addStyle(css, head?)
{
	if (Array.isArray(css))
	{
		css = css.join('');
	}

	if (typeof head == 'string')
	{
		head = $(head);
	}

	if (typeof head == 'object' && head.length && typeof head[0] == 'object')
	{
		head = head[0];
	}

	return greasemonkey.GM_addStyle(css.toString(), head);
}
