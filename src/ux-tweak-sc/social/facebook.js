/**
 * Created by user on 2017/7/16/016.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.facebook.com/*',
			'http*://www.facebook.com/saved/*',
		],
		exclude: [
			'http*://www.facebook.com/ajax/*',
			'http*://www.facebook.com/*plugins/*',
			'http*://staticxx.facebook.com/*',
		],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/facebook\.com/))
		{
			return true;
		}

		return false;
	},

	main()
	{
		const _uf_done = require('../../lib/event.done');
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');

		const parse_url = require('../../lib/func/parse_url').parse_url;

		const debounce = require('throttle-debounce/debounce');

		let _ready = debounce(1500, function ()
		{
			if (global._url != window.location.href)
			{
				let old = global._url_obj;

				global._url = window.location.href;
				global._url_obj = parse_url(global._url);

				console.log('location', window.location.href, global._url_obj, old);
			}

			let _a = $('#appsNav > ul > li > a[data-testid="left_nav_item_建立特效框"]:eq(0)')
				.not('[data-uf]')
			;

			if (_a.length)
			{
				_a
					.attr('data-uf', true)
					.parent('li')
					.after(function ()
					{
						let li = $('<li />')
							.addClass('clearfix sideNavItem stat_elem')
						;
						let a = $('<a draggable="false" />')
							.addClass('_5afe')
							.prop('href', '/profilepicframes?ref=app_bookmark')
							.html(function ()
							{
								return `<span class="imgWrap" data-testid="bookmark_icon_left_nav"><i class="img sp_CgOJqtrmT7M sx_f75c27" draggable="false"></i></span><div dir="ltr" class="linkWrap noCount">使用特效框</div>`;
							})
							.appendTo(li)
						;

						return li;
					})
				;
			}

			let _link = _uf_dom_filter_link('#content ._5wcf a._24-t')
				.not('[data-done]')
				.attr('data-done', true)
				.prop('target', '_blank')
			;

			module.exports.adblock(_url_obj);

			//console.log(_link);
		});

		$('body')
			.on('click', 'a[href]:not([rel="ignore"] or [role] or [href="#"])', _ready)
			.on('DOMNodeInserted', '#content ._5wci._5wch._2pjv, #content #appsNav', _ready)
			.on('DOMAttrModified', function (event)
			{
				let _this = $(event.target);

				if (_this.is('body') && event.originalEvent.attrName == 'class')
				{
					console.log(888, [_this, event.originalEvent.attrName, event]);

					_ready();
				}
				else
				{
					//console.log(_this, event);
				}
			})
		;

		$(window)
			.on('keydown.page', require('../../lib/jquery/event/hotkey').packEvent(function (event)
			{
				if ($(event.target).is(':input, .notranslate'))
				{
					return;
				}

				switch (event.which)
				{
					case 33:
					case 37:
						var _a = $('#photos_snowlift:visible .snowliftPager.prev');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();

							return false;
						}

						break;
					case 34:
					case 39:
						var _a = $('#photos_snowlift:visible .snowliftPager.next');

						//console.log(_a);

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();

							return false;
						}

						break;
				}
			}))
			.on('load', _ready)
			.triggerHandler('load')
		;

		setTimeout(_ready, 1500);
	},

	adblock(_url_obj)
	{
		let _dom = $();

		if ($('body').not('.home, .timelineLayout').length)
		{
			// 粉絲頁

			_dom = _dom
				.add([
					'#pagelet_timeline_main_column #after_party_www_cards',

					'#pagelet_timeline_main_column ._1xnd > ._4-u2._3xaf._3-95._4-u8:eq(0)',

					'#pagelet_timeline_main_column ._1xnd #videos, #pagelet_timeline_main_column ._1xnd #page_photos',
				].join())
			;
		}

		return _dom.hide();
	},
};
