/**
 * Created by user on 2017/7/16/016.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
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

	async main(_url_obj = global._url_obj)
	{
		const _uf_done = require('root/lib/event/done');
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		const parse_url = require('root/lib/func/parse_url').parse_url;
		const debounce = require('throttle-debounce/debounce');
		const userScriptCore = require('root/lib/core');
		//const Cookies = require('js-cookie');
		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;

		let _fb_cache = {
			sk: null,
		};

		function _fb_cache_update()
		{
			if (_url_obj.query && _url_obj.query.match(/sk=(h_chr|h_nor)/))
			{
				_fb_cache.sk = RegExp.$1;

				/*
				Cookies.set('sk', _fb_cache.sk, {
					expires: 30,
					'max-age': 60 * 60 * 24 * 30,
				});
				*/

				GMApi.callSafe('GM_setValue')('facebook.sk', _fb_cache.sk);
			}
			else if (!_fb_cache.sk)
			{
				let sk;
				//sk = Cookies.get('sk');
				sk = sk || GMApi.callSafe('GM_getValue')('facebook.sk');

				//console.log(sk);

				if (sk)
				{
					_fb_cache.sk = sk;
				}
			}

			userScriptCore.greasemonkey.debug(GMApi.callSafe('GM_listValues')());
			userScriptCore.greasemonkey.debug(_url_obj, _fb_cache, document.cookie);
		}

		_fb_cache_update();

		if (_fb_cache.sk)
		{
			if (typeof _fb_cache.sk != 'string' && (_fb_cache.sk instanceof Promise || typeof _fb_cache.sk.then == 'function'))
			{
				_fb_cache.sk = await _fb_cache.sk;
			}
		}

		console.log(_fb_cache);

		if (_fb_cache.sk && (_fb_cache.sk == 'h_chr') && window.location.href.match(/\/\/(?:www\.)?facebook\.com\/?\??(?:#.+)?$/))
		{
			window.location.href = window.location.href +
				(window.location.href.indexOf('?') !== -1 ? '&' : '?') +
				'sk=' + _fb_cache.sk
			;

			return;
		}

		if (_fb_cache.sk == 'h_chr')
		{
			$('#bluebarRoot h1[data-click="bluebar_logo"] a')
				.attr('href', function (i, old)
				{
					return old
						.replace(/&?sk=(h_chr|h_nor)/, '')
						.trim('&')
						.concat((old.indexOf('?') !== -1 ? '&' : '?') + 'sk=' + _fb_cache.sk)
						;
				})
			;
		}

		let _ready = debounce(1500, function ()
		{
			userScriptCore
				.url(window.location.href, global, function (_url, domain, old)
				{
					userScriptCore.greasemonkey.debug('location', _url, domain._url_obj, old);

					_url_obj = domain._url_obj;

					//console.log(_url_obj);

					_fb_cache_update();
				})
			;

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

			let _link = _uf_dom_filter_link([
					'#content ._5wcf a._24-t',
					'#saveContentFragment .fcg a',
				].join(','))
				.not('[data-done]')
				.attr('data-done', true)
				.prop('target', '_blank')
			;

			$('#fbTimelineHeadline ul[data-referrer="timeline_light_nav_top"] a[data-tab-key="photos"], #appsNav .sideNavItem a[href*="photos"]')
				.attr('href', function (i, old)
				{
					return old.replace(/\/photos\?/, '/photos_albums?')
				})
			;

			if (_fb_cache.sk == 'h_chr')
			{
				$('#bluebarRoot h1[data-click="bluebar_logo"] a')
					.attr('href', function (i, old)
					{
						return old
							.replace(/&?sk=(h_chr|h_nor)/, '')
							.trim('&')
							.concat((old.indexOf('?') !== -1 ? '&' : '?') + 'sk=' + _fb_cache.sk)
							;
					})
				;
			}

			module.exports.adblock(_url_obj);

			//console.log(_link);
		});

		$('body')
			.on('click', 'a[href]:not([rel="ignore"] or [role] or [href="#"])', _ready)
			.on('DOMNodeInserted', '#content ._5wci._5wch._2pjv, #content #appsNav', _ready)
			.on('DOMAttrModified', 'body', function (event)
			{
				let _this = $(event.target);

				if (_this.is('body') && event.originalEvent.attrName == 'class')
				{
					//console.log(888, [_this, event.originalEvent.attrName, event]);

					_ready();
				}
				else
				{
					//console.log(_this, event);
				}
			})
		;

		$(window)
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
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

		if (0 && $('body').not('.home, .timelineLayout').length)
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
