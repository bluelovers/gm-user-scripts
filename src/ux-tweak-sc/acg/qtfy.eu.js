/**
 * Created by user on 2017/10/15/015.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://qtfy.eu/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
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

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			'#main-layout .class-bar a',
		].join())
			.prop('target', '_blank')
		;

		$(window)
			.on('load.ready', debounce(6000, function ()
			{
				module.exports.adblock(_url_obj);
			}))
			.on('load.ready', throttle(1000, function ()
			{
				module.exports.adblock(_url_obj);
			}))
			.on('load.ready', function ()
			{
				module.exports.adblock(_url_obj);
			})
			.triggerHandler('load.ready')
		;
	},

	adblock(_url_obj = global._url_obj)
	{
		$('.code-block').filter(':has(> .adblock_wrapper), :has(> .adblock_wrapper)').remove();
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
