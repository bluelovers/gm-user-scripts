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

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/getchu\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('.product a, #detail_block a, .package a')
			.attr('target', '_blank')
		;

		if (gc_auth())
		{
			return;
		}

		$(window)
			.on('load.link', function (event)
			{
				$('.tablebody img.soft, .highslide > img, .product img, img.soft_link')
					.not('[data-done]')
					.imagesLoaded()
					.always(function (data)
					{
						let _this = $(data.elements);

						_this
							.not('[data-done]')
							.attr('data-done', true)
							.width(function (i, v)
							{
								return v;
							})
							.height(function (i, v)
							{
								return v;
							})
							.attr('src', function (i, val)
							{
								return val
									.replace(/_s\.(jpe?g|bmp|png|gif)$/, '.$1')
									.replace(/(brandnew\/(?:[^\/]+))\/rc/, '$1/c')
									.replace(/(package)_100\.(jpe?g|bmp|png|gif)$/, '$1.$2')
									;
							})
						;
					})
				;

				$('.product, .package, #detail_block, #wrapper')
					.find('a[href*="soft.phtml"]:not([data-done])')
					.attr('data-done', true)
					.prop('target', '_blank')
					.prop('href', function (i, v)
					{
						return v + '&gc=gc';
					})
				;
			})
			.triggerHandler('load')
		;

		$('.gr_soft_carousel_wrap')
			.on('DOMNodeInserted', function (event)
			{
				$(window).triggerHandler('load.link');
			})
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj)
	{
		let _dom = $();

		_dom = _dom
			.add($('#wrapper div[id*="getchu-search-container"]').nextAll())
			.add('#wrapper div[id*="getchu-search-container"]')
			.add($('#soft_table').prevAll())
			.add($('#wrapper').siblings().not('#wrapper'))
			.add($('#camp').prev())
			.add($('#camp').prev().nextAll())
			.add($('#camp').parents('td, th').eq(0).next())
			.add([
				'.snsbox, .bikoubody',
				'.mejs-video',
				'iframe, script',
				'button.header_wish, a[rel="leanModal"]',
			].join())
		;

		{
			let r = /このブランドの作品一覧|この商品を見た人はこんな商品もチェックしています|チェックした商品の履歴/i;

			$('.tabletitle').each(function ()
			{
				if (r.test($(this).text()))
				{
					_dom = _dom
						.add(this)
						.add($(this).nextAll())
					;
				}
			});
		}

		_dom.remove();

		return _dom;
	}
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
