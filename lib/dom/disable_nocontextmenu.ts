/**
 * Created by user on 2017/7/14/014.
 */

import greasemonkey from 'root/lib/greasemonkey/index';

export interface IOptions
{
	types?
}

export function _uf_disable_nocontextmenu2(mode, elem?, options: IOptions = {})
{
	let _fn_event = [
		'dragstart',
		'contextmenu',
		'selectstart',
		'mousedown',
		'mouseup',
		'source',
		'copy',
		'selectstart',
		'select',
		//'dragstart',
	];
	let _fn_off = ['unbind', 'die', 'off'];

	let jq;
	let arr;

	//console.log(unsafeWindow.jQuery, window.jQuery, global.jQuery, jQuery);

	// @ts-ignore
	if (unsafeWindow && unsafeWindow.jQuery)
	{
		// @ts-ignore
		jq = unsafeWindow.jQuery;
		// @ts-ignore
		arr = unsafeWindow.jQuery(elem).add('body, html')
			.add(unsafeWindow.document)
			.add(unsafeWindow)
		;

		//console.log(jq, arr);
	}
	// @ts-ignore
	else if (window.jQuery)
	{
		// @ts-ignore
		jq = window.jQuery;
		// @ts-ignore
		arr = window.jQuery(elem).add('body, html')
			.add(window.document)
			.add(window)
		;
	}
	else
	{
		jq = jQuery;
		arr = jQuery(elem).add('body, html')
			// @ts-ignore
			.add(document)
			.add(window)
		;
	}

	if (mode > 1)
	{
		let _style = jq('style#_uf_disable_nocontextmenu');

		if (1 && !_style.length)
		{
			_style = greasemonkey.GM_addStyle(
				'* { -moz-user-select: auto !important; -webkit-user-select: auto !important; -ms-user-select: auto !important; user-select: auto !important; }');

			jq(_style).prop('id', '_uf_disable_nocontextmenu');
		}
	}

	// 保留此語法 防止發生BUG
	let arr2 = jQuery(elem)
		.add('body, html')
		// http://ftp.ezla.com.tw/files/article/html/54/54491/217056.html
		// @ts-ignore
		.add(unsafeWindow.document)
		.add(unsafeWindow)
	;

	//console.log(jq, arr, arr2);

	arr2
		.css({
//			'-moz-user-select': 'auto',
//			'-webkit-user-select': 'auto',
//			'-ms-user-select': 'auto',
			'user-select': 'auto',
		})
	;

	if (options.types)
	{
		_fn_event = _fn_event.concat(options.types);
	}

	_fn_event.forEach((event) =>
	{
		arr2
			.removeAttr(`on${event}`)
		;

		if (mode)
		{
			arr2

				.prop(`on${event}`, null)
			;

			_fn_off.forEach((fn) =>
			{
				try
				{
					if (arr2[fn])
					{
						arr2[fn](event);
					}
				}
				catch (e)
				{
					console.error(e, fn);
				}

				if (jq.fn[fn])
				{
					try
					{
						arr[fn](event);
					}
					catch (e)
					{
						console.error(e, fn);
					}
				}
			});
		}
	});
}

export function _uf_disable_nocontextmenu(mode, elem?)
{
	var _jquery_array = [$];
	var _unsafeJquery;
	var _jquery;

	if (mode > 1)
	{
		var _style = $('style#_uf_disable_nocontextmenu');

		if (!_style.length)
		{
			//_style = GM_addStyle('* { -moz-user-select: auto !important; -webkit-user-select: auto !important; -ms-user-select: auto !important; }');

			//$(_style).attr('id', '_uf_disable_nocontextmenu');
		}

		// @ts-ignore
		if (unsafeWindow.$ && unsafeWindow.$.fn && unsafeWindow.$.fn.jquery)
		{
			// @ts-ignore
			_unsafeJquery = unsafeWindow.$;

			_jquery_array[_jquery_array.length] = _unsafeJquery;
		}
	}

	var _fn_jq_call = function (_jquery, arr, fn, event)
	{
		if (_jquery.fn[fn])
		{
			$.each(event, function (i, v)
			{
				try
				{
					arr[fn](v);
				}
				catch (e)
				{
					console.error(e);
				}

				//_uf_log(arr, fn, v);
			});
		}
	};

//		_jquery = _jquery_array[0];

	var _fn_event = ['dragstart', 'contextmenu', 'selectstart', 'mousedown', 'mouseup', 'source'];

	$.each(_jquery_array, function (key, _jquery)
	{

		//var arr = _jquery(unsafeWindow.document).add('body, html');
		var arr = _jquery('body, html');

		if (elem)
		{
			arr = arr.add(elem);
		}

//			_uf_log('_uf_disable_nocontextmenu', mode, elem, _jquery_array, _jquery, _jquery.fn.jquery, arr);

		try
		{
			arr
				.removeAttr('ondragstart')
				.removeAttr('oncontextmenu')
				.removeAttr('onselectstart')
				.removeAttr('onmousedown')
				.removeAttr('onmouseup')
				.removeAttr('onsource')

				.css({
					'-moz-user-select': 'auto',
					'-webkit-user-select': 'auto',
					'-ms-user-select': 'auto',
					'user-select': 'auto',
				})
			;
		}
		catch (e)
		{
			console.error(e);
		}

		if (mode)
		{
			arr
				.each(function ()
				{
					try
					{
						// @ts-ignore
						this.oncontextmenu = this.ondragstart = this.onselectstart = this.onmousedown = this.onmouseup
							// @ts-ignore
							= this.onsource = null;
					}
					catch (e)
					{
						console.error(e);
					}
				})
			;

			(_jquery.fn.unbind) && _fn_jq_call(_jquery, arr, 'unbind', _fn_event);
			// @ts-ignore
			(_jquery.fn.die) && _fn_jq_call(_jquery, arr, 'die', _fn_event);

			if (_jquery.fn.off)
			{
				/*
				arr
					.off('dragstart')
					.off('contextmenu')
					.off('selectstart')
					.off('mousedown')
					.off('mouseup')
					.off('source')
				;
				*/

				_fn_jq_call(_jquery, arr, 'off', _fn_event);
			}
		}

	});
}

export default _uf_disable_nocontextmenu2;
