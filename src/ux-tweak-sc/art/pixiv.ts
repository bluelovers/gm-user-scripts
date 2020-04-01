/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

// @ts-ignore
import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

// @ts-ignore
declare module 'root/lib/core/demo'
{
	interface IGlobal
	{
		_follow_area,
		_url_obj?: IUrlObject2;
	}
}

module.exports = {

	metadata: {
		include: [
			'http*://*.pixiv.net/*',
			'http*://www.pixiv.net/search*',
		],
		exclude: [
			'http*://*.pixiv.net/novel/*',
		],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/pixiv\.net/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const { debounce } = require('throttle-debounce');
		const { throttle } = require('throttle-debounce');
		//const winOpen = require('root/lib/func/open') as typeof import("root/lib/func/open");

		const _uf_done = require('root/lib/event/done');
		//require('root/lib/func/debounce');

		const { replacePixivUserUrl, toPixivUserIllust } = require('root/lib/site/pixiv');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

		if ((
				_url_obj.path.match(/^\/?member\.php/) && _url_obj.query.match(/^id=\d+$/)
				|| _url_obj.path.match(/users\/\d+\/?$/)
			)
			&& (!document.referrer || !document.referrer.match(/pixiv/i))
		)
		{
			location.href = replacePixivUserUrl(location.href);

			return;
		}

		$(window)
			.on('load.link', debounce(100, function ()
			{
				_uf_dom_filter_link([
					'.works_display a.work, .tagCloud a, .user-list a, .image-item a, .worksListOthersImg a, .rank-detail a, .tags .tag a, #favorite-preference form, .spotlight-wrapper .spotlight-article-body .works-column a.work, .spotlight-wrapper .sidebar a, .members a',
					'.post a',
					'.column-search-result a',
					'#js-react-search-mid a',

					'ul li div a[href*="member"]',

					'.gtm-illust-recommend-zone a',

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

		// @ts-ignore
		$(window).scrollTo($()
			// @ts-ignore
			.push('.layout-body')
			.push('#search-result')
			.eq(0),
		);

		// @ts-ignore
		let _pixiv_user_id = (unsafeWindow.pixiv && unsafeWindow.pixiv.user && unsafeWindow.pixiv.user.id)
			// @ts-ignore
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

		if (_url_obj.path.match(/member_illust\.php/) && _url_obj.query.match(/mode=manga/))
		{

			require('root/lib/jquery/event/key').makeJQueryPlugin();

			const keycodes = require('keycodes');

			greasemonkey.GM_addStyle([
				`.manga .item-container .image { padding-top: 0; padding-bottom: 0; margin-top: 0; margin-bottom: 0; }`,
				`.manga { background-color: rgba(0,0,0,0.9); }`,
			]);

			$(window)
				.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
				{
					console.log(666, event.which, keycodes(event.which));

					let target = 'body, #main, .manga, html';

					switch (event.which)
					{
						case 33:

							_uf_done(event);

							// @ts-ignore
							$(target).triggerKey(keycodes('up'));

							break;

						case 37:

							//_uf_done(event);

							break;
						case 34:

							_uf_done(event);

							// @ts-ignore
							$(target).triggerKey(keycodes('down'));

							break;

						case 39:

							//_uf_done(event);

							break;
					}
				}))
			;
		}
		else if (_url_obj.path.match(/member_illust\.php/) && _url_obj.query.match(/mode=medium/) || _url_obj.path.match(/artworks/))
		{
			if ($('body').css('background-color') == '#E4E7EE' || $('body')
				.css('background-color') == 'rgb(228, 231, 238)')
			{
				$('body').css('background-color', 'rgba(0, 3, 11, 0.9)');
			}

			$(window).on('load', function ()
			{
				setTimeout(function ()
				{
					$('a[href*="mode=manga"]').each(function ()
					{
						let _this = $(this);

						if (_this.attr('href').match(/member_illust\.php|users\/\d+\/illustrations/))
						{
							_this
							// @ts-ignore
								.attr('data-done', true)
								.attr('target', '_self')
								.off('click')
								.on('click', function (event)
								{
									_uf_done(event);

									// @ts-ignore
									window.location.href = this.href
								})
							;
						}
					});
				}, 1000);
			});

			let fa = function (content?)
			{
				let _a;
				if (content)
				{
					_a = _uf_dom_filter_link('a:not([data-done])[href*="member.php"], a:not([data-done])[href*="users/"]', $(content))
				}
				else
				{
					_a = _uf_dom_filter_link('a:not([data-done])[href*="member.php"], a:not([data-done])[href*="users/"]');
				}

				_a.attr('data-done', true)
					.attr('target', '_blank')
					.attr('href', function (i, old)
					{
						return replacePixivUserUrl(old);
					})
					.off('click.member_illust')
					.on('click.member_illust', function (event)
					{
						let _href = $(this).prop('href');
						my_openInBackground(_href, '_blank');

						return _uf_done(event);
					})
				;
			};

			$('#root').on('DOMNodeInserted', function (event)
			{
				fa(event.target);

				//console.log(this, event.target, _a);
			});

			setTimeout(function ()
			{
				fa();

				$('body')
					.one('DOMNodeInserted', '.gtm-illust-recommend-zone', function (event)
					{
						$(window).triggerHandler('load.link');
					})
					.on('DOMNodeInserted', '.gtm-illust-recommend-zone', function (event)
					{
						console.log(event);

						$(event.target)
							.find('a')
							.prop('target', '_blank')
						;
					})
				;
			}, 500);
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

			// @ts-ignore
			$.scrollTo($('#js-react-search-mid, #wrapper').eq(-1));

			module.exports.adblock(_url_obj);

			//const { debounce } = require('throttle-debounce');
			//const { throttle } = require('throttle-debounce');

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
				let _this = $(event.target);

				//_uf_log(event, this);

				if (_this.is(':not(.following2) .follow-button'))
				{
					//_uf_log(777, event, _this);

					let _a = _this.parents('.user-info:first').find('a.user-name:first');

					let _href = replacePixivUserUrl(_a.prop('href'));

					//_uf_log(event, _this, _a, _href);

					setTimeout(function ()
					{
						my_openInBackground(_href, '_blank');
					}, 200);
				}
			});
		}
		else if (_url_obj.path.match(/search_user\.php/))
		{
			$('.user-search-result-container .user-recommendation-item a.title')
				.prop('href', function (i, v)
				{
					return replacePixivUserUrl(v);
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
					my_openInBackground(_href, '_blank');
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

			global._follow_area = $('.user-recommendation-items._loading');
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
				'._uf_stacc_ref_illust { box-shadow: 0px 0px 0px 2px rgba(0, 149, 222, 0.3) inset; border-radius: 10px; }',
			].join());

			let _fn_timeline = function (event)
			{
				_area = $(_area_selector)
					.each(function (index)
					{
						let _this = $(this);

						_this
						// @ts-ignore
							.attr('data-done', true)
							.attr('data-index', index)
						;

						let _stacc_ref_illust_user_name = $('.stacc_ref_illust_user_name > a:first', _this);

						let _stacc_post_user_name = $('.stacc_post_user_name', _this);

						let _badge_poster = $(
							'.stacc_follow_unify_comment_profile_list img[src*="badge_add_content.png"]:first',
							_this,
						);

						//console.log(index, _stacc_ref_illust_user_name.text(), _stacc_post_user_name.text());

						if ($('.stacc_ref_thumb_caption .stacc_ref_illust_title',
							_this,
						).length && !_badge_poster.length && _stacc_ref_illust_user_name.text() != _stacc_post_user_name.text())
						{
							_this
							//.css('box-shadow', '0px 0px 0px 2px rgba(0, 149, 222, 0.3) inset')
								.addClass('_uf_stacc_ref_illust')
							;
						}

						$('.stacc_ref_user_illust_caption_img a', _this).attr('href', function (i, v)
						{
							return replacePixivUserUrl(v);
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
		else
		{
			$('#page-mypage').find('a[href*="users/"], a[href*="member.php"]').each((i, elem: HTMLLinkElement) => {
				elem.href = replacePixivUserUrl(elem.href);
			})
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
				let _nav = $('div > nav:has(a[href*="illustrations"]):eq(0)').not('[data-done]');

				if (_nav.length)
				{
					_nav.attr('data-done', 'true');

					let _a = _nav.find('> a[href*="illustrations"]:eq(-1)');

					if (_a.length)
					{
						let _id = _a.prop('href').match(/users\/(\d+)\/illustrations/)[1];

						let _b = _a.clone()
							.prop('href', toPixivUserIllust(_id))
							.removeAttr('aria-current')
							.text(`插畫·漫畫`)
						;

						_a
							.before(_b)
						;

					}
				}
			})
		;

		// @ts-ignore
		$('a[href*="jump.php"]', '.profile-web, .caption, .body')
			// @ts-ignore
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
			// @ts-ignore
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

function follow_button(_url_obj, window)
{
	const { replacePixivUserUrl, toPixivUserIllust } = require('root/lib/site/pixiv');
	//const winOpen = require('root/lib/func/open') as typeof import("root/lib/func/open");

	$('body')
		.on('click.follow', ':not(.following2) .follow-button:not(.on), aside section button[data-click-label="follow"], section button[data-click-label="follow"], ul li div button[data-click-label="follow"]', function (event)
		{
			let _this = $(this);

			console.info('click.follow', _this);

			let uid = _this.attr('data-user-id');

			if (!uid)
			{
				uid = _this.parents('[data-id]:eq(0)').eq(0)
					.attr('data-id')
				;
			}

			if (!uid)
			{
				let _area = _this.parents('aside section, ul li div');

				let p = _area
					.find('a[href*="/member.php"]')
					.eq(0)
				;

				if (!p.length)
				{
					p = _area
						.find('a[href*="/member_illust.php"], a[href*="users/"]')
						.eq(0)
					;
				}

				if (p.length)
				{
					my_openInBackground(replacePixivUserUrl(p.prop('href')), '_blank');
				}
			}

			if (uid)
			{
				if (_url_obj.path.match(/member\.php|users\/\d+(?!\/illustrations)/))
				{
					setTimeout(function ()
					{
						window.location.href = toPixivUserIllust(uid);
					}, 200);
				}
				else
				{
					let _skip;

					if (
						(/member_illust\.php/.test(_url_obj.path) && _url_obj.query.match(/(?:\b|&|^)id=(\d+)/))
						|| _url_obj.path.match(/users\/(\d+)\/illustrations/)
					)
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
						my_openInBackground(toPixivUserIllust(uid), '_blank');
					}
				}

				setTimeout(() =>
				{
					global._follow_area && global._follow_area
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

export function my_openInBackground(url: string, ...argv)
{
	// @ts-ignore
	const GMApi = require('root/lib/greasemonkey/gm/api').GMApi as typeof import("root/lib/greasemonkey/gm/api").GMApi;
	//const winOpen = require('root/lib/func/open') as typeof import("root/lib/func/open");

	return GMApi.openInTab(url, true);
}
