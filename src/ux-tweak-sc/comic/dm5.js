/**
 * Created by user on 2017/7/13/013.
 */

module.exports = {

	metadata: {
		match: [
			'http*://www.dm5.com/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/dm5\.com/))
		{
			return true;
		}

		return false;
	},

	main: () =>
	{
		'use strict';

		const RETURN = module.exports.test(_url_obj);

		if (RETURN)
		{
			if ($('#checkAdult').length)
			{
				$('#checkAdult')[0].click();
			}

			if (_url_obj.path.match(/-end\//))
			{
				let _a = $(
					'.end_mian .end_top .new_h4 a, .finalPage .topBar .right > a:has(img[src*="finalPage_4_w.png"])');

				if (_a.length)
				{
					_a[0].click();
				}
			}

			const _uf_dom_filter_link = require('../../lib/dom/filter/link');

			_uf_dom_filter_link(
				'.red_lj a, #cbc_1 a, #cbc_2 a, #cbc_3 a, #abc_1 a, #abc_2 a, #index_mian .diline a, .innr22 a, .innr72 a, #tempc a.tg, .end_kk a, #search_nr .ssnr_bt a, #search_nr .matoa a, #index_left .inkk.ma5 div.sy_tb a, #todaycomic a, #index_right .inkk .innr8 li a, #search_nrl .ssnr_yt dl a, #index_mian .innr3 a, .midBar .item a')
				.not('.li_end a')
				.attr('target', '_blank')
			;

			const keycodes = require('keycodes');
			const _uf_done = require('../../lib/event.done');
			const comic_style = require('../../lib/comic/style');

			let _img_selector = '#cp_image2:visible, #cp_image:visible';

			const waitUntil = require('../../lib/promise/wait').jquery;

			if ($('body.vPage').length)
			{
				let _img = $(_img_selector);

				let _div_page = $('<div/>')
					.css(comic_style.page)
					.css(comic_style.bg_dark)
					.css(comic_style.bg_dark_border)
					.css(comic_style.bg_dark_text)
					.css({
						position: 'absolute',
					})
					.appendTo('body')
				;

				$(window)
					.on('resize.scroll', () =>
					{
						_img = $(_img_selector);

						_img.add('#showimage, #cp_img').removeAttr('oncontextmenu');

						$('#showimage').css({
							'min-height': $(window).innerHeight(),
						});

						$('body')
							.css({
								'min-width': 'auto',
							})
							.css(comic_style.body)
							.css(comic_style.bg_dark)
						;

						$(window).scrollTo(_img.add('#showimage'));
					})
					.on('resize.imagesLoaded', () =>
					{
						_img = $(_img_selector);

						_img
							.height($(window).innerHeight())
							.css(comic_style.photo)
						;

						_div_page
							.text(unsafeWindow.DM5_PAGE + '/' + $('.pageBar a[data-pgt]:eq(-1)').attr('data-pgt'))
						;

						if (_img.length)
						{
							_div_page
								.offset({
									top: _img.offset().top + 50,
									left: _img.offset().left - _div_page.outerWidth(),
								})
							;
						}
					})
					.on('load', () =>
					{
						_dm5();
					})
					.on('load.imagesLoaded', () =>
					{
						$(window).triggerHandler('resize');
					})
					.on('keydown', function (event)
					{
						var _jq = unsafeWindow.$ || $;

						var _select = _jq('#pagelist');
						var _option = _jq('option[value="' + _select.val() + '"]', _select);

						switch (event.which)
						{
							case keycodes('pageup'):
							case keycodes('left'):
								var _a = $('#s_pre a, a.s_pre');

								if (_a.length)
								{
									_uf_done(event);
									_a[0].click();

									//setTimeout(_dm5, 100);
								}

								break;
							case keycodes('pagedown'):
							case keycodes('right'):
								var _a = $('#s_next a, a.s_next');

								if (_a.length)
								{
									_uf_done(event);
									_a[0].click();

									//setTimeout(_dm5, 100);
								}

								break;
						}
					})
				;

				$('#showimage').on('DOMNodeInserted', function ()
				{
					//$(window).triggerHandler('resize.imagesLoaded');
					_dm5();

					$(window)
						.triggerHandler('resize.scroll')
						.triggerHandler('load.nocontextmenu')
					;
				});

				function _dm5()
				{
					return waitUntil((deferred, count) =>
					{
						_img = $(_img_selector);

						if (_img.length)
						{
							deferred.resolveWith(_img, [_img, count]);
						}

						//console.log(unsafeWindow.SetFace = ()=>{});

						return _img;
					})
						.always(function (_img, count)
						{
							//console.error(999, this, _img, count);

							_img.add('#showimage, #cp_img').removeAttr('oncontextmenu');

							_img
								.off('load.imagesLoaded')
								.on('load.imagesLoaded', function (instance)
								{
									$(window).triggerHandler('resize');
								});

							$(window).triggerHandler('resize');
						})
						.fail(function (_img, count)
						{
							console.error(666, this, _img, count);
						})
						.done(function (_img, count)
						{
							//console.log(777, this, _img, count);

							_img.imagesLoaded()
								.done(function (instance)
								{
									//$(instance.elements[0])
									//_img.triggerHandler('load.imagesLoaded');
									$(window).triggerHandler('resize');
								})
							;
						});
					;
				}

				_dm5();

				$(window).triggerHandler('resize.scroll');
			}
			else
			{
				$(window)
					.scrollTo($('#index_mian, #index_left, #index_left .inkk.mato20').eq(-1))
				;
			}

			$(window)
				.on('keydown', function (event)
				{
					switch (event.which)
					{
						case keycodes('pageup'):
						case keycodes('left'):
							var _a = $('#search_fy a + .current');

							if (_a.length)
							{
								_uf_done(event);
								_a.prev('a')[0].click();
							}

							break;
						case keycodes('pagedown'):
						case keycodes('right'):
							var _a = $('#search_fy .current + a');

							if (_a.length)
							{
								_uf_done(event);
								_a[0].click();
							}

							break;
					}
				})
				.on('load.nocontextmenu', () =>
				{
					const _uf_disable_nocontextmenu = require('../../lib/dom/disable_nocontextmenu')._uf_disable_nocontextmenu2;

					try
					{
						_uf_disable_nocontextmenu(2,
							_img_selector + ', #cp_image, #cp_img, #showimage, #cp_funtb, .cp_tbimg, .view_bt'
						);
					}
					catch (e)
					{
						console.error(777, e);
					}

				})
				.triggerHandler('load.nocontextmenu')
			;

			return RETURN;
		}
	},

	clearly(_url_obj = global._url_obj)
	{
		let _dom = $();

		_dom = _dom
			.add($('#index_mian').siblings())
			.add($('#index_mian').parents().not('html, body').siblings())
			.add([
				'#index_right a > img, .rss2, #todaycomic, .inkk.ma5 img',
				'.btnreport, form.madi5, #bt_collect, .zmk2',
			].join())
		;

		$('.inbt')
			.removeClass('inbt')
			.find('.new_h2')
			.addBack()
			.css({
				'display': 'block',
				'float': 'none',
			})
		;

		$('#bt_shownext').text('開始閱讀');

		_dom.remove();

		return _dom;
	},

};


