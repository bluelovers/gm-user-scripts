/**
 * Created by user on 2017/7/16/016.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
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
		const _uf_done = require('root/lib/event/done');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('.product a, #detail_block a, .package a')
			.attr('target', '_blank')
		;

		if (gc_auth())
		{
			return;
		}

		if (_url_obj.path.match(/search/))
		{
			if ($('.search_container .display > li').length == 1)
			{
				window.location.href = $('.search_container .display > li #package_block a').eq(0).prop('href');

				return;
			}
		}

		$(window).scrollTo('#soft_table');

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
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				switch (event.which)
				{
					case 33:
					case 37:
						var _a = $('.charanum .charavisited').prev('li').find('a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
					case 34:
					case 39:
						var _a = $('.charanum .charavisited').next('li').find('a');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
				}
			}))
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

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add($('#wrapper div[id*="getchu-search-container"]').nextAll())
			.add('#wrapper div[id*="getchu-search-container"]')
			.add($('#soft_table').prevAll())
			.add($('#wrapper').siblings().not('#wrapper'))
			.add($('#camp').prev())
			.add($('#camp').prev().nextAll())
			.add($('#camp').parents('td, th').eq(0).next())
			//.add($('#wrapper > .gr_soft_carousel_wrap:eq(-1)').nextAll())
			.add($('#sample').next('.tabletitle').next('div, table').nextAll().find('img'))
			.add($('a[name="REVIEW_UNIT"]').nextAll())
			.add($('.mejs-video video').parentsUntil('.mejs-video').addBack().siblings())
			.add([
				'.snsbox, .bikoubody',
				'.mejs-video:not(:has(video))',
				'iframe, script',
				'button.header_wish, a[rel="leanModal"]',
				'body :hidden',
				'.footer_guide, .top_return',

				'#soft_table th + td[rowspan="2"]',

				'#soft_table div:has(> img[src*="samplepackage_s"])',

				'head img, head meta',

			].join())
		;

		{
			let r = /このブランドの作品一覧|この商品を見た人はこんな商品もチェックしています|チェックした商品の履歴|ユーザーレビュー/i;

			$('.tabletitle')
				.each(function ()
				{
					if (r.test($(this).text()))
					{
						_dom = _dom
							//.add(this)
							.add($(this).nextAll().addBack())
						;
					}
				})
				.removeClass('tabletitle')
				.wrapInner('<h1/>')
			;
		}

		$('.highslide').removeClass('highslide');

		//_dom.remove();

		return _dom;
	}
};

function gc_auth()
{
	let _img = $('#wrapper > div[style] > img[src*="auth_com3.jpg"]');

	document.cookie = '_gat=1';

	if (_img.length)
	{
		location.href = _img.parent().find('a[href*="&gc=gc"]').prop('href');

		return true;
	}
}
