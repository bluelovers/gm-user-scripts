import { IExports } from './index';
import * as UF from '../greasemonkey/gm/menu';

export function registerGlobalMenu(uxid: string, exports: IExports, $jq?: JQueryStatic)
{
	UF.registerMenuCommand({
		id: uxid,
		key: 'debug jquery',
	}, async (options) =>
	{
		try
		{
			_print_jquery('null', null);
			_print_jquery('global', global);
			_print_jquery('window', window);
			_print_jquery('window.self', window.self);
			_print_jquery('unsafeWindow', unsafeWindow);
		}
		catch (e)
		{
			console.error(e);
		}

		try
		{
			// @ts-ignore
			if (typeof exportFunction != 'undefined')
			{
				// @ts-ignore
				console.info('exportFunction', exportFunction);
			}
		}
		catch (e)
		{
			console.error(e);
		}

		try
		{
			let _jQuery = await import('../jquery/global');

			_print_jquery('jquery/global', _jQuery);
		}
		catch (e)
		{
			console.error(e);
		}
	});
}

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

import * as self from './plus';
export default self;
