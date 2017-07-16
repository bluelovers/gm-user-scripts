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
			_uf_dom_filter_link('.works_display a.work, .tagCloud a, .user-list a, .image-item a, .worksListOthersImg a, .rank-detail a, .tags .tag a, #favorite-preference form, .spotlight-wrapper .spotlight-article-body .works-column a.work, .spotlight-wrapper .sidebar a, .members a')
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
					if (_url_obj.path.match(/member(_illust)?\.php\?id=/))
					{
					}
					else
					{
						let _form = $(this);
						let uid = $(':input[name="user_id"]', _form).val();

						window.open('http://www.pixiv.net/member_illust.php?id=' + uid, '_blank');
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

					if (_this.is('._profile-popup .follow-button'))
					{
						//_uf_log(777, event, _this);

						var _a = _this.parents('.user-info:first').find('a.user-name:first');

						var _href = 'http://www.pixiv.net/' + _a.prop('href')
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
						if (!$('.user-recommendation-items .user-recommendation-item').length && $('#wrapper .user-recommendation-unit ._no-item:visible').length)
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
//			_uf_log($('#wrapper .user-recommendation-items'));

				if ($('#wrapper .user-recommendation-items').length)
				{
//				$('#wrapper .user-recommendation-items').on('click.follow', 'li.user-recommendation-item .follow-button', function(){
//					var _this = $(this);
//
//					_uf_log(_this);
//
//					var _li = _this.parent('li.user-recommendation-item');
//
//					_uf_log(_this, _li);
//
//					if (_li.length)
//					{
//						_li.eq(0).find('h1 a').eq(0).trigger('click');
//					}
//				});

					$('#wrapper .user-recommendation-items li.user-recommendation-item:not([data-uf])')
						.each(function ()
						{
							var _this = $(this);

							_this.attr('data-uf', true);

//					_uf_log(_this);

							_this.find('.follow-button').on('click.follow', function (event)
							{
//						_uf_log(event, this, _this, _this.attr('data-id'));

								setTimeout(function ()
								{
									window.open('http://www.pixiv.net/member_illust.php?id=' + _this.attr(
											'data-id'), '_blank');
								}, 200);
							});

							_this.find('div.follow')
								.attr('data-id', _this.attr('data-id'))
								.find('.sprites-checked')
								.attr('data-uf', true)
							;

							$('a.title', _this).prop('href', function (i, v)
							{

								v = v.replace('member.php', 'member_illust.php');

								return v;
							})
						});

					$('body').on('click', '.follow-setting-modal .action-follow :submit', (function (event)
					{
						//_uf_log(event);

						$('#wrapper .user-recommendation-items li.user-recommendation-item div.follow ._icon:not([data-uf])')
							.each(function ()
							{

								var _this = $(this);

								if (_this.is('.sprites-checked'))
								{
									_this.attr('data-uf', true);

									window.open('http://www.pixiv.net/member_illust.php?id=' + _this.parent(
											'div.follow').attr('data-id'), '_blank');
								}
							})
						;

					}).debounce(500));
				}
			};

			_dummy();

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

			$(document).on('mouseover._profile-popup', function (event)
			{
				var _this = $(event.target);

				if (_this.is('._profile-popup'))
				{
					$('a.user-name, .user-profile > a', _this).prop('href', function (i, v)
					{

						v = v.replace('member.php', 'member_illust.php');

						return v;
					})
				}
			});

			setTimeout(_dummy, 500);
			setTimeout(_dummy, 1000);
			setTimeout(_dummy, 3000);

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
