/**
 * Created by user on 2018/3/1/001.
 */

console[('groupCollapsed' in console) ? 'groupCollapsed' : 'group']('before');

try
{
	_print_jquery('null', null);
	_print_jquery('global', global);
	_print_jquery('window', window);
	_print_jquery('unsafeWindow', unsafeWindow);

	// @ts-ignore
	console.info('exportFunction', exportFunction);
}
catch (e)
{
	console.error(e);
}

// @ts-ignore
console.groupEnd('before');

import * as jQuery from 'jquery/dist/jquery.min';

jQuery.noConflict(true);

export const $ = jQuery;
export { jQuery };

// @ts-ignore
window.$ = window.jQuery = jQuery;

export default jQuery;

console[('groupCollapsed' in console) ? 'groupCollapsed' : 'group']('after');

try
{
	_print_jquery('null', null);
	_print_jquery('global', global);
	_print_jquery('window', window);
	_print_jquery('unsafeWindow', unsafeWindow);

	// @ts-ignore
	console.info('exportFunction', exportFunction);
}
catch (e)
{
	console.error(e);
}

// @ts-ignore
console.groupEnd('after');

function _print_jquery(label, where)
{
	console[('groupCollapsed' in console) ? 'groupCollapsed' : 'group'](label);

	try
	{
		console.info(label, where);

		if (where === null)
		{
			console.info(`$`, $, $ && $.fn && $.fn.jquery);
			console.info(`jQuery`, jQuery, jQuery && jQuery.fn && jQuery.fn.jquery);
		}
		else
		{
			console.info(`${label}.$`, where.$, where.$ && where.$.fn && where.$.fn.jquery);
			console.info(`${label}.jQuery`, where.jQuery, where.jQuery && where.jQuery.fn && where.jQuery.fn.jquery);
		}
	}
	catch (e)
	{
		console.error(`${label}`, e.toString());
	}

	// @ts-ignore
	console.groupEnd(label);
}
