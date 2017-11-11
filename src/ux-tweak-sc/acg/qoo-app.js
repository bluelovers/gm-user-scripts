/**
 * Created by user on 2017/8/20/020.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://*.qoo-app.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/qoo-app\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.app-item a',
		].join())
			.prop('target', '_blank')
		;

		lazyload(_url_obj);
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

function lazyload(_url_obj)
{
	$('img[data-src]').attr('src', function (i, old)
	{
		if (old != $(this).attr('data-src'))
		{
			return $(this).attr('data-src');
		}
	})
}
