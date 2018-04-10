/**
 * Created by user on 2018/3/1/001.
 */

console[('groupCollapsed' in console) ? 'groupCollapsed' : 'group']('before');

let _old = {} as {
	$,
	jQuery,
};

const DEBUG = false;

try
{
	if (DEBUG)
	{
		_print_jquery('null', null);
		_print_jquery('global', global);
		_print_jquery('window', window);
		_print_jquery('window.self', window.self);
		_print_jquery('unsafeWindow', unsafeWindow);
	}

	// @ts-ignore
	_old.$ = unsafeWindow.$;
	// @ts-ignore
	_old.jQuery = unsafeWindow.jQuery;

	if (DEBUG)
	{
		// @ts-ignore
		if (typeof exportFunction != 'undefined')
		{
			// @ts-ignore
			console.info('exportFunction', exportFunction);
		}
	}
}
catch (e)
{
	console.error(e);
}

// @ts-ignore
console.groupEnd('before');

import * as _jQuery from 'jquery/dist/jquery.min';

const jQuery = _jQuery.noConflict(true);

export const $ = jQuery;
export { jQuery };

// @ts-ignore
//window.$ = window.jQuery = jQuery;
window.self.$ = window.self.jQuery = jQuery;

export default jQuery;

console[('groupCollapsed' in console) ? 'groupCollapsed' : 'group']('after');

try
{
	if (DEBUG)
	{
		_print_jquery('null', null);
		_print_jquery('global', global);
		_print_jquery('window', window);
		_print_jquery('window.self', window.self);
		_print_jquery('unsafeWindow', unsafeWindow);

		// @ts-ignore
		if (typeof exportFunction != 'undefined')
		{
			// @ts-ignore
			console.info('exportFunction', exportFunction);
		}
	}
}
catch (e)
{
	console.error(e);
}

// @ts-ignore
console.groupEnd('after');

console[('groupCollapsed' in console) ? 'groupCollapsed' : 'group']('end');

try
{
	// @ts-ignore
	if (_old.$ && _old.$ !== unsafeWindow.self.$)
	{
		// @ts-ignore
		unsafeWindow.self.$ = _old.$;
	}

	// @ts-ignore
	if (_old.jQuery && _old.jQuery !== unsafeWindow.self.jQuery)
	{
		// @ts-ignore
		unsafeWindow.self.jQuery = _old.jQuery;
	}

	if (DEBUG)
	{
		_print_jquery('null', null);
		_print_jquery('global', global);
		_print_jquery('window', window);
		_print_jquery('window.self', window.self);
		_print_jquery('unsafeWindow', unsafeWindow);
	}
}
catch (e)
{
	console.error(e);
}

// @ts-ignore
console.groupEnd('end');

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
