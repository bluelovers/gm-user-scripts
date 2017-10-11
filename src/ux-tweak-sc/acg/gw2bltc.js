/**
 * Created by user on 2017/10/11/011.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.gw2bltc.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/src/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
		{
			return true;
		}
		//console.debug(777, ret);

		/*
		if (_url_obj.host.match(/3dmgame\.com/))
		{
			return true;
		}
		*/

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');

		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link([].join())
			.prop('target', '_blank')
		;

		$('.floatThead-wrapper')
			.on('DOMNodeInserted', debounce(300, function (event)
			{
				_uf_dom_filter_link([
					'.td-name a',
				].join())
					.prop('target', '_blank')
				;
			}))
		;

		$(window)
			.on('load.ready', function ()
			{
				$('.floatThead-wrapper').triggerHandler('DOMNodeInserted');
			})
			.triggerHandler('load.ready')
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([].join())
		;

		//_dom.remove();

		return _dom;
	},
};
