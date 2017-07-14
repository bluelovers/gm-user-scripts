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

			const _uf_dom_filter_link = require('../../lib/dom/filter/link');
			_uf_dom_filter_link('#wrapper .image-item a')
				.attr('target', '_blank')
			;

			let _pixiv_user_id = (unsafeWindow.pixiv && unsafeWindow.pixiv.user && unsafeWindow.pixiv.user.id)
				? unsafeWindow.pixiv.user.id
				: null;

			if (_pixiv_user_id)
			{
				$('.navigation-list .menus .bookmarks')
					.after(function ()
					{
						let _a = $('<a/>')
							.attr({
								'href': 'http://www.pixiv.net/bookmark.php?type=user',
							})
							.html('<i class="_icon sprites-bookmarks"></i>關注')
						;

						return $('<li class="bookmarks"/>').append(_a);
					})
				;
			}

			$('.profile-unit .user-relation #favorite-preference form')
				.attr('target', '_blank')
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
					location.href = $('.column-header .tabs a[href*="search_user"]').attr('href');
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

						var _href = 'http://www.pixiv.net/' + _a.attr('href')
								.replace('member.php', 'member_illust.php');

						//_uf_log(event, _this, _a, _href);

						setTimeout(function ()
						{
							window.open(_href, '_blank');
						}, 200);
					}
				});
			}

			$(window)
				.on('keydown', function (event)
				{
					var _a = $();
					var _page_now = $('.pager-container .page-list .current').eq(0);

					switch (event.which)
					{
						case 33:
						case 37:
							_a = _page_now.prev('li').find('a')

							if (!_a.length)
							{
								_a = $('.pages a.button[rel="prev"]')
							}

							if (_a.length)
							{
								_uf_done(event);

								location.href = _a.attr('href');

								return false;
							}

							break;
						case 34:
						case 39:
							_a = _page_now.next('li').find('a');

							if (!_a.length)
							{
								_a = $('.pages a.button[rel="next"]')
							}

							if (_a.length)
							{
								_uf_done(event);

								location.href = _a.attr('href');

								return false;
							}

							break;
					}
				});

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
