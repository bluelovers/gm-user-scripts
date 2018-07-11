/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://*.pixiv.net/*',
			'http*://www.pixiv.net/search*',
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

	main()
	{
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');

		const _uf_done = require('root/lib/event/done');
		//require('root/lib/func/debounce');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

		$(window)
			.on('load.link', debounce(100, function ()
			{
				_uf_dom_filter_link([
					'.works_display a.work, .tagCloud a, .user-list a, .image-item a, .worksListOthersImg a, .rank-detail a, .tags .tag a, #favorite-preference form, .spotlight-wrapper .spotlight-article-body .works-column a.work, .spotlight-wrapper .sidebar a, .members a',
					'.post a',
					'.column-search-result a',
					'#js-react-search-mid a',

					'ul li div a[href*="member"]',
				].join(','))
					.prop('target', '_blank')
				;
			}))
			.triggerHandler('load.link')
		;

		$('#js-react-search-mid')
			.on('DOMNodeInserted', debounce(100, function ()
			{
				$(window).triggerHandler('load.link');
			}))
		;

		const greasemonkey = require('root/lib/greasemonkey/uf');

		$(window).scrollTo($()
			.push('.layout-body')
			.push('#search-result')
			.eq(0)
		);

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

		$('#favorite-button').prop('href', 'javasctipt:void(0);');

		follow_button(_url_obj, window);

		if (_url_obj.path.match(/member_illust\.php/) && _url_obj.query.match(/mode=medium/))
		{
			if ($('body').css('background-color') == '#E4E7EE' || $('body')
				.css('background-color') == 'rgb(228, 231, 238)')
			{
				$('body').css('background-color', 'rgba(0, 3, 11, 0.9)');
			}

			$('body').on('hover', 'a', function ()
			{
				$(this)
					.attr('href', function (i, old)
					{
						return old.replace('member.php', 'member_illust.php')
					})
				;
			});
		}
		else if (_url_obj.path.match(/search\.php/))
		{
			if ($('.column-header, .column-label').find('.tabs li:eq(0) a.current').length)
			{
				let fn = function ()
				{
					if ($('.column-search-result ._no-item:visible, #js-react-search-mid:visible > ._no-item:visible').length)
					{
						location.href = $('.column-header, .column-label')
							.find('.tabs a[href*="search_user"]')
							.prop('href')
						;

						return true;
					}
				};

				if (!fn())
				{
					$('#js-react-search-mid')
						.on('DOMNodeInserted', fn)
					;
				}
			}

			$.scrollTo($('#js-react-search-mid, #wrapper').eq(-1));

			module.exports.adblock(_url_obj);

			//const debounce = require('throttle-debounce/debounce');
			//const throttle = require('throttle-debounce/throttle');

			$('.column-search-result').on('DOMNodeInserted', throttle(300, function ()
			{
				_uf_dom_filter_link([
					'.column-search-result a',
				].join(','))
					.prop('target', '_blank')
				;
			}));

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
			$('.user-search-result-container .user-recommendation-item a.title')
				.prop('href', function (i, v)
				{
					return v.replace('member.php', 'member_illust.php');
				})
			;

			if ($('.user-search-result-container .user-recommendation-item').length == 1)
			{
				location.href = $('.user-search-result-container .user-recommendation-item a.title')
					.prop('href')
				//.replace('member.php', 'member_illust.php')
				;
			}

			let _href;

			$('.follow:not(.following)')
				.on('click', function (event)
				{
					_href = $(this)
						.parents('.user-recommendation-item').eq(0)
						.find('a.title')
						.prop('href')
					;
				})
			;

			$('body')
				.on('click', '.action-follow :submit, .action-follow ._button', function ()
				{
					window.open(_href, '_blank');
				})
			;
		}
		else if (_url_obj.path.match(/bookmark_add\.php/))
		{
			$(window)
				.on('load', debounce(3000, function ()
				{
					if (!$('.user-recommendation-items .user-recommendation-item').length && $(
						'#wrapper .user-recommendation-unit ._no-item:visible').length)
					{
						window.close();
					}
				}))
			;

			let _follow_area = $('.user-recommendation-items._loading');
		}
		else if (_url_obj.path.match(/jump\.php/))
		{
			window.location.href = $('b > a:first').attr('href');
		}
		else if (_url_obj.path.match(/stacc/) && _url_obj.query.match(/mode=unify/))
		{
			let _area_selector = '#stacc_timeline > .stacc_status_summary:not([data-done])';
			let _area = $(_area_selector);

			greasemonkey.GM_addStyle([
				'._uf_stacc_ref_illust { box-shadow: 0px 0px 0px 2px rgba(0, 149, 222, 0.3) inset; border-radius: 10px; }'
			].join());

			let _fn_timeline = function (event)
			{
				_area = $(_area_selector)
					.each(function (index)
					{
						let _this = $(this);

						_this
							.attr('data-done', true)
							.attr('data-index', index)
						;

						let _stacc_ref_illust_user_name = $('.stacc_ref_illust_user_name > a:first', _this);

						let _stacc_post_user_name = $('.stacc_post_user_name', _this);

						let _badge_poster = $(
							'.stacc_follow_unify_comment_profile_list img[src*="badge_add_content.png"]:first',
							_this
						);

						//console.log(index, _stacc_ref_illust_user_name.text(), _stacc_post_user_name.text());

						if ($('.stacc_ref_thumb_caption .stacc_ref_illust_title',
							_this
						).length && !_badge_poster.length && _stacc_ref_illust_user_name.text() != _stacc_post_user_name.text())
						{
							_this
							//.css('box-shadow', '0px 0px 0px 2px rgba(0, 149, 222, 0.3) inset')
								.addClass('_uf_stacc_ref_illust')
							;
						}

						$('.stacc_ref_user_illust_caption_img a', _this).attr('href', function (i, v)
						{
							v = v.replace('member.php', 'member_illust.php');
							return v;
						});
					})
				;
			};

			$(window)
				.on('load.timeline', _fn_timeline)
				.triggerHandler('load.timeline')
			;

			$('#stacc_timeline')
				.on('DOMNodeInserted', function (event)
				{
					setTimeout(() =>
					{
						$(window).triggerHandler('load.timeline');
					}, 1000);
				})
			;
		}

		$(window)
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
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
			}))
			.on('load', function ()
			{

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
	},

	adblock(_url_obj)
	{
		if (_url_obj.path.match(/search\.php/))
		{
			//$('.popular-introduction:has(.require-premium), .ad-printservice').remove();
			//$('.column-search-result .image-item[style]').height('inherit');

			$('.popular-introduction-overlay').hide();
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

function follow_button(_url_obj, window)
{
	$('body')
		.on('click.follow', ':not(.following2) .follow-button:not(.on), aside section button[data-click-label="follow"], ul li div button[data-click-label="follow"]', function (event)
		{
			let _this = $(this);

			let uid = _this.attr('data-user-id');

			if (!uid)
			{
				uid = _this.parents('[data-id]:eq(0)').eq(0)
					.attr('data-id')
				;
			}

			if (!uid)
			{
				let p = _this.parents('aside section, ul li div')
					.find('a[href*="/member.php"]')
					.eq(0)
				;

				if (p.length)
				{
					window.open(p.prop('href').replace('member.php', 'member_illust.php'), '_blank');
				}
			}

			if (uid)
			{
				if (_url_obj.path.match(/member\.php/))
				{
					setTimeout(function ()
					{
						window.location.href = pixiv_link_uid(uid);
					}, 200);
				}
				else
				{
					let _skip;

					if (/member_illust\.php/.test(_url_obj.path) && _url_obj.query.match(/(?:\b|&|^)id=(\d+)/))
					{
						//console.log([RegExp.$1, uid]);

						if (RegExp.$1 == uid)
						{
							_skip = true;
						}
					}

					//console.log(_url_obj);

					if (!_skip)
					{
						window.open(pixiv_link_uid(uid), '_blank');
					}
				}

				setTimeout(() =>
				{
					_follow_area
						.triggerHandler('DOMNodeInserted')
					;
				}, 500);
			}
			else
			{
				console.debug(_this, uid, event);
			}
		})
	;
}
