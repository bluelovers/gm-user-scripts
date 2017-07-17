/**
 * Created by user on 2017/7/16/016.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://*.getchu.com/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/getchu\.com/))
		{
			return true;
		}

		return false;
	},

	main()
	{
		const RETURN = module.exports.test(_url_obj);

		//console.log(_url_obj, RETURN);

		if (RETURN)
		{
			const _uf_dom_filter_link = require('../../lib/dom/filter/link');
			_uf_dom_filter_link('.product a, #detail_block a, .package a')
				.attr('target', '_blank')
			;

			if (gc_auth())
			{
				return RETURN;
			}

			$('.tablebody img.soft, .highslide > img, .product img')
				.attr('src', function (i, val)
				{
					return val
						.replace(/_s\.(jpe?g|bmp|png|gif)$/, '.$1')
						.replace(/(brandnew\/(?:[^\/]+))\/rc/, '$1/c')
					;
				})
			;

			$('.product, .package, #detail_block')
				.find('a[href*="soft.phtml"]')
				.prop('href', function (i, v)
				{
					return v + '&gc=gc';
				})
			;

			return RETURN;
		}
	},

	adblock()
	{

	},
};

function gc_auth()
{
	let _img = $('#wrapper > div[style] > img[src*="auth_com3.jpg"]');

	if (_img.length)
	{
		location.href = _img.parent().find('a[href*="&gc=gc"]').prop('href');

		return true;
	}
}
