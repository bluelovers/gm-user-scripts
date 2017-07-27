/**
 * Created by user on 2017/7/27/027.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			//'http*://sourceforge.net/*',
			'http*://sourceforge.net/projects/*/files/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/sourceforge\.net/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('#files_list .file a.name')
			.prop('target', '_blank')
		;

		$(window).scrollTo('#page-header');
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj)
	{
		let _dom = $();

		_dom = _dom
			.add([

			].join())
		;

		_dom.remove();

		return _dom;
	},
};