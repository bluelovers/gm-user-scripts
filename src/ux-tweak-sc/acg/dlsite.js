/**
 * Created by user on 2017/7/24/024.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.dlsite.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/dlsite\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		if (adult_check(_url_obj))
		{
			return true;
		}

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('')
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

function adult_check(_url_obj = global._url_obj)
{
	let _a = $('#adult_check_box .btn_yes a');

	if (_a.length)
	{
		_a[0].click();

		return true;
	}
}
