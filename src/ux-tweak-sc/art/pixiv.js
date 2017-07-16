/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://*.pixiv.net/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/pixiv\.net/))
		{
			return true;
		}

		return false;
	},

	main: () =>
	{
		const RETURN = module.exports.test(_url_obj);

		//console.log(_url_obj, RETURN);

		if (RETURN)
		{
			const _uf_done = require('../../lib/event.done');
			require('../../lib/func/debounce');

			const _uf_dom_filter_link = require('../../lib/dom/filter/link');
			_uf_dom_filter_link([
				'.works_display a.work, .tagCloud a, .user-list a, .image-item a, .worksListOthersImg a, .rank-detail a, .tags .tag a, #favorite-preference form, .spotlight-wrapper .spotlight-article-body .works-column a.work, .spotlight-wrapper .sidebar a, .members a',
				'.post a',
			].join(','))
				.prop('target', '_blank')
			;

			$(window).scrollTo('#search-result');

			let _pixiv_user_id = (unsafeWindow.pixiv && unsafeWindow.pixiv.user && unsafeWindow.pixiv.user.id)
				? unsafeWindow.pixiv.user.id
				: null;

			if (_pixiv_user_id)
			{
				$('.navigation-list .menus .bookmarks')
					.prop(function ()
					{
						let _a = $('<a/>')
							.prop({
								'href': 'http://www.pixiv.net/bookmark.php?type=user',
							})
							.html('<i class="_icon sprites-bookmarks"></i>關注')
						;

						return $('<li class="bookmarks"/>').append(_a);
					})
				;
			}

			$('.profile-unit .user-relation #favorite-preference form')
				.prop('target', '_blank')
				.on('submit', function ()
				{
					if (_url_obj.path.match(/member(_illust)?\.php/))
					{
					}
					else
					{
						let _form = $(this);
						let uid = $(':input[name="user_id"]', _form).val();

						window.open(pixiv_link_uid(uid), '_blank');
					}
				})
			;

			$('#favorite-button').prop('href', 'javasctipt:void(0);');

			if (_url_obj.path.match(/member_illust\.php/) && _url_obj.query.match(/mode=medium/))
			{
				if ($('body').css('background-color') == '#E4E7EE' || $('body')
						.css('background-color') == 'rgb(228, 231, 238)')
				{
					$('body').css('background-color', 'rgba(0, 3, 11, 0.9)');
				}
			}
			else if (_url_obj.path.match(/search\.php/))
			{
				if ($('.column-header .tabs li:eq(0) a.current').length && $('.column-search-result ._no-item:visible').length)
				{
					location.href = $('.column-header .tabs a[href*="search_user"]').prop('href');
				}

				$.scrollTo($('#wrapper'));

				module.exports.adblock(_url_obj);

				$('.column-search-result .image-item[style]').height('inherit');

				$(document).on('click mousedown', function (event)
				{
					var _this = $(event.target);

					//_uf_log(event, this);

					if (_this.is(':not(.following2) .follow-button'))
					{
						//_uf_log(777, event, _this);

						var _a = _this.parents('.user-info:first').find('a.user-name:first');

						var _href = _a.prop('href')
								.replace('member.php', 'member_illust.php');

						//_uf_log(event, _this, _a, _href);

						setTimeout(function ()
						{
							window.open(_href, '_blank');
						}, 200);
					}
				});
			}
			else if (_url_obj.path.match(/search_user\.php/))
			{
				if ($('.user-search-result-container .user-recommendation-item').length == 1)
				{
					location.href = $('.user-search-result-container .user-recommendation-item a.title')
						.prop('href')
						.replace('member.php', 'member_illust.php');
				}
			}
			else if (_url_obj.path.match(/bookmark_add\.php/))
			{
				$(window)
					.on('load', (function ()
					{
						if (!$('.user-recommendation-items .user-recommendation-item').length && $(
								'#wrapper .user-recommendation-unit ._no-item:visible').length)
						{
							window.close();
						}
					}).debounce(3000))
				;
			}
			else if (_url_obj.path.match(/jump\.php/))
			{
				window.location.href = $('b > a:first').attr('href');
			}

			let _dummy = function ()
			{
				if ($('.follow-button').length)
				{
					$(':not(.following2) .follow-button')
						.not('[data-uf]')
						.attr('data-uf', true)
						.one('click', function (event)
						{
							let _this = $(this);

							let uid = _this.parents('[data-id]:eq(0)').eq(0)
								.attr('data-id')
							;

							window.open(pixiv_link_uid(uid), '_blank');

							setTimeout(() =>
							{
								_follow_area
									.triggerHandler('DOMNodeInserted')
								;
							}, 500);
						})
						.each(function ()
						{
							let _this = $(this);
						})
					;
				}
			};

			setTimeout(_dummy, 500);

			let _follow_area = $('.user-recommendation-items._loading');

			setTimeout(() =>
			{
				_follow_area
					.on('DOMNodeInserted', function (event)
					{
						_dummy();
					})
				;
			}, 500);

//			$('body').on('hover', '._profile-popup', function ()
//			{
//				_dummy();
//			});

			$(window)
				.on('keydown', function (event)
				{
					switch (event.which)
					{
						case 33:
						case 37:
							var _a = $('.pager-container a[rel="prev"]')

							if (_a.length)
							{
								_uf_done(event);

								location.href = _a.prop('href');

								return false;
							}

							break;
						case 34:
						case 39:
							var _a = $('.pager-container a[rel="next"]');

							if (_a.length)
							{
								_uf_done(event);

								location.href = _a.prop('href');

								return false;
							}

							break;
					}
				})
				.on('load', function ()
				{
					_dummy();
				})
			;

			$('a[href*="jump.php"]', '.profile-web, .caption, .body')
				.each(function ()
				{
					var _this = $(this);

					var _url = _this.prop('href');

					if (_url.match(/jump\.php\?(.+)$/))
					{
						_url = decodeURIComponent(RegExp.$1);

						_this.prop('href', _url);
					}
				})
				.prop('target', '_blank')
			;

			return RETURN;
		}
	},

	adblock(_url_obj)
	{
		if (_url_obj.path.match(/search\.php/))
		{
			$('.popular-introduction:has(.require-premium), .ad-printservice').remove();
		}
	},
};

function _pixiv_source(_src)
{
	let _ret;

	let _regex = /(pixiv\.net)\/(?:c\/.+\/img-master)\/(img\/[\/a-z0-9]+\/.+)_master1200(\..+)/i;

	if (_src.match(_regex))
	{
		_ret = _src.replace(_regex, '$1/img-original/$2$3');
	}
	else if ((_regex = /(\/img\/.+)\/mobile\/(.+)_(?:\d+)mw(\.(?:jpg|png|gif|bmp))$/) && _src.match(_regex))
	{
		_ret = _src.replace(_regex, '$1/$2$3');
	}
	else if ((_regex = /_m(\.(?:jpg|png|gif|bmp))$/) && _src.match(_regex))
	{
		_ret = _src.replace(_regex, '$1');
	}

	return _ret;
}

function pixiv_link_uid(uid, type = 'member_illust')
{
	return `http://www.pixiv.net/${type}.php?id=${uid}`;
}
