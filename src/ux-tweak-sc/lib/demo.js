/**
 * Created by user on 2017/7/17/017.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.3dmgame.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/3dmgame\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link([

		].join())
			.prop('target', '_blank')
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([

			].join())
		;

		//_dom.remove();

		return _dom;
	},
};
