/**
 * Created by user on 2017/7/24/024.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://www.up01.cc/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/up01\.cc/))
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
	let _a = $('#forbid #agree, .adult a.btn.btn-pink');

	if (_a.length)
	{
		_a[0].click();

		return true;
	}
}
