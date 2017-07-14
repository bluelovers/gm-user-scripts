/**
 * Created by user on 2017/7/14/014.
 */

const greasemonkey = require('../greasemonkey');

module.exports._uf_disable_nocontextmenu2 = function (mode, elem)
{
	let _fn_event = ['dragstart', 'contextmenu', 'selectstart', 'mousedown', 'mouseup', 'source'];
	let _fn_off = ['unbind', 'die', 'off'];

	let jq;
	let arr;

	if (unsafeWindow && unsafeWindow.jQuery)
	{
		jq = unsafeWindow.jQuery;
		arr = unsafeWindow.jQuery(elem).add('body, html')
			.add(unsafeWindow.document)
		;

		//console.log(jq, arr);
	}
	else
	{
		jq = window.jQuery;
		arr = window.jQuery(elem).add('body, html')
			.add(window.document)
		;
	}

	if (mode > 1)
	{
		let _style = jq('style#_uf_disable_nocontextmenu');

		if (1 && !_style.length)
		{
			_style = greasemonkey.GM_addStyle('* { -moz-user-select: auto !important; -webkit-user-select: auto !important; -ms-user-select: auto !important; user-select: auto !important; }');

			jq(_style).attr('id', '_uf_disable_nocontextmenu');
		}
	}

	// 保留此語法 防止發生BUG
	let arr2 = jQuery(elem);

	arr2
		.css({
//			'-moz-user-select': 'auto',
//			'-webkit-user-select': 'auto',
//			'-ms-user-select': 'auto',
			'user-select': 'auto',
		})
	;

	_fn_event.forEach((event)=>
	{
		arr2
			.removeAttr(`on${event}`)
		;

		if (mode)
		{
			arr2
				.prop(`on${event}`, null)
			;

			_fn_off.forEach((fn)=>
			{
				if (jq.fn[fn])
				{
					arr[fn](event);
				}
			});
		}
	});
};

module.exports._uf_disable_nocontextmenu = function _uf_disable_nocontextmenu(mode, elem)
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

		if (unsafeWindow.$ && unsafeWindow.$.fn && unsafeWindow.$.fn.jquery)
		{
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
				arr[fn](v);

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

		if (mode)
		{
			arr
				.each(function ()
				{
					this.oncontextmenu = this.ondragstart = this.onselectstart = this.onmousedown = this.onmouseup
						= this.onsource = null;
				})
			;

			_fn_jq_call(_jquery, arr, 'unbind', _fn_event);
			_fn_jq_call(_jquery, arr, 'die', _fn_event);

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
