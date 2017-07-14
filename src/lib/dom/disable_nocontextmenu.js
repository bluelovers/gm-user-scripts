/**
 * Created by user on 2017/7/14/014.
 */

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

	var _fn_jq_call = function(_jquery, arr, fn, event){
		if (_jquery.fn[fn])
		{
			$.each(event, function(i, v){
				arr[fn](v);

				//_uf_log(arr, fn, v);
			});
		}
	};

//		_jquery = _jquery_array[0];

	var _fn_event = ['dragstart', 'contextmenu', 'selectstart', 'mousedown', 'mouseup', 'source'];

	$.each(_jquery_array, function(key, _jquery){

		var arr = _jquery(unsafeWindow.document).add('body, html');

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
				.each(function(){
					this.oncontextmenu = this.ondragstart = this.onselectstart = this.onmousedown = this.onmouseup = this.onsource = null;
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
