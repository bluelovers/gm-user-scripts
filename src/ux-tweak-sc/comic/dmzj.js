/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://*.dmzj.com/*',
			'https://i.dmzj.com/*',
			'http*://manhua.dmzj.com/*',
		],
		nomatch: [
			'http*://q.dmzj.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return true;
		}

		return false;
	},

	main()
	{
		const _uf_done = require('root/lib/event/done');
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');

		greasemonkey
			.GM_addStyle([

				`.comment .content_r .text, .content_r .info_bar .userName, .page a, .page span { font-size: 9pt; }`,

				`input, textarea { font-size: 9pt; }`,

			])
		;

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.cartoon_online_border a, #type_comics a, .anim-main_list a',
			'#author_comics a, .comic_deCon .beread_btn, .zj_list .list_con_li a',
		].join(','))
			.prop('target', '_blank')
		;

		const comic_style = require('root/lib/comic/style');
		//const greasemonkey = require('root/lib/greasemonkey/uf');

		module.exports.adblock();

		$(window).scrollTo($('.newpic_content, .wrap, #center_box').eq(-1));

		// http://www.dmzj.com/info/shenqilishangpian.html
		if ($('#center_box, .comic_wraCon').length)
		{
			require('root/lib/dom/disable_nocontextmenu')
				._uf_disable_nocontextmenu2(2)
			;

			greasemonkey
				.GM_addStyle([
					`#center_box img { ${comic_style.toCss(comic_style.photo)}; max-height: 100%; }`,
					`body { ${comic_style.toCss(comic_style.body)}; ${comic_style.toCss(comic_style.bg_dark)}; }`,
				])
			;

			let _img_selector = '#center_box img, .comic_wraCon img';
			let _img = $(_img_selector);

			let _div_page = $('<div/>')
				.css(comic_style.page)
				.css(comic_style.bg_dark)
				.css(comic_style.bg_dark_border)
				.css(comic_style.bg_dark_text)
				.css(comic_style.page_position)
				.appendTo('body')
			;

			const _uf_fixsize2 = require('root/lib/dom/img/size')._uf_fixsize2;

			$(window)
				.on('load', throttle(100, function ()
				{
					$(window).triggerHandler('resize.scroll');
				}))
				.on('resize', throttle(100, function ()
				{
					_img = $(_img_selector);

					let _this = _uf_fixsize2(_img, window, 1, {
						width: 'auto',
					});

					_this
						.css(comic_style.photo)
					;

					$('#center_box')
						.height($(window).innerHeight())
					;

					$('body')
						.css(comic_style.body)
						.css(comic_style.bg_dark)
					;

					let selected = $('#page_select :selected');

					_div_page
						.text(selected.text()
							.replace(/^.*[^\d]+(\d+)[^\d]+.*$/, '$1') + '/' + $('#page_select option').length)
					;

					_div_page
						.offset({
							top: _img.offset().top + 50,
							left: _img.offset().left - _div_page.outerWidth(),
						})
					;

					$.scrollTo(_img);
				}))
				.on('resize.scroll', throttle(500, function ()
				{
					$(window).scrollTo(_img);
				}))
				.on('resize.scroll', debounce(500, function ()
				{
					$(window).scrollTo(_img);
				}))
				.on('load.imagesLoaded', function (event)
				{
					_fn_img();
				})
				.triggerHandler('resize')
			;

			const waitUntil = require('root/lib/promise/wait').jquery;

			function _fn_img()
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
						_img.imagesLoaded()
							.done(function (instance)
							{
								$(window).triggerHandler('resize');

								_div_page
									.offset({
										left: _img.offset().left - _div_page.outerWidth(),
									})
								;
							})
						;
					});
				;
			}

			_fn_img();

			$(window)
				.on('keydown.page', throttle(100, function ()
				{
					_fn_img();

					$(window).triggerHandler('resize');
				}))
			;

			$('.img_land_prev, .img_land_next')
				.on('click', debounce(200, function()
				{
					_fn_img();
				}))
				.on('click', throttle(200, function ()
				{
					$(window).triggerHandler('resize');
				}))
				.hide()
			;

			$('#center_box')
				.on('DOMNodeInserted', debounce(100, function()
				{
					_fn_img();
				}))
			;
		}
		else if (_url_obj.host.match(/i\.dmzj\.com/))
		{
			$('#my_subscribe_id, #my_record_id')
				.on('DOMNodeInserted', debounce(200, function (event)
				{
					$(window).triggerHandler('load.ready');
				}))
			;
		}
		else
		{
			$(window)
				.on('load.ready', function ()
				{
					$(window).scrollTo('.wrap');
				})
			;
		}

		let _page_select = $('#page_select');

		$(window)
			.on('load.ready', function ()
			{
				$('.mainNav a, .about-info a, #my_subscribe_id a, #my_record_id a')
					.prop('href', function (i, old)
					{
						return old.replace('xs.dmzj.com', 'q.dmzj.com');
					})
				;
			})
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');

				switch (event.which)
				{
					case keycodes('left'):

						if (_page_select.length
							&& _page_select.val() == _page_select.find('option').eq(0).val()
							&& _page_select.prev('.btm_chapter_btn').length
						)
						{
							let _a = _page_select.prev('.btm_chapter_btn');

							if (_a.length)
							{
								_uf_done(event);
								_a[0].click();
								//_a.eq(0).triggerHandler('click');
							}
						}

						break;
					case keycodes('pageup'):
					//case keycodes('left'):
						var _a = $('#center_box .img_land_prev, .wrap .pages > a:eq(1), .comic_wraCon .img_land_prev, #page_id .prev');

						if (_page_select.length
							&& _page_select.val() == _page_select.find('option').eq(0).val()
							&& _page_select.prev('.btm_chapter_btn').length
						)
						{
							_a = _page_select.prev('.btm_chapter_btn');
						}

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
							//_a.eq(0).triggerHandler('click');
						}

						break;
					case keycodes('right'):

						if (_page_select.length
							&& _page_select.val() == _page_select.find('option').eq(-1).val()
							&& _page_select.next('.btm_chapter_btn').length
						)
						{
							let _a = _page_select.next('.btm_chapter_btn');

							if (_a.length)
							{
								_uf_done(event);
								_a[0].click();
								//_a.eq(0).triggerHandler('click');
							}
						}

						break;
					case keycodes('pagedown'):
					//case keycodes('right'):
						var _a = $('#center_box .img_land_next, .wrap .pages > a:eq(-2), .comic_wraCon .img_land_next, #page_id .next');

						if (_page_select.length
							&& _page_select.val() == _page_select.find('option').eq(-1).val()
							&& _page_select.next('.btm_chapter_btn').length
						)
						{
							_a = _page_select.next('.btm_chapter_btn');
						}

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
							//_a.eq(0).triggerHandler('click');
						}

						break;
				}
			}))
			.triggerHandler('load.ready')
		;
	},

	adblock()
	{
		$('.header-box + div')
			.css('height', 'auto')
		;

		$([
			'div[id^="BAIDU_SSP"]',
		].join(','))
			.remove()
		;
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		const greasemonkey = require('root/lib/greasemonkey/index');

		let _dom = $(_dom_list);

		_dom = _dom
			.add($('.wrap').siblings())
			.add($('#Comment').prevAll().not('#type_comics'))
			.add($('.icorss_acg').prev('ul'))
			.add([
				'.part_collection, .commentBox .textareawrap, .commentBox h2, .comment_con img',
				'#type_comics img, .icorss_acg, .photo_part .h2_title2, .icon_nan, .icon_gg, .icon_nv, .icon_hf, .icon_ding',
				'#floatCode, #fixbdshare, .footer, body :hidden, script, iframe',
				'.anim_grade img, .impunity, .week_foot, .odd_anim_title_l, .odd_anim_title_r',
				'.middleright img',
			].join())
		;

		$('.top10_top, .read_top, .odd_anim_title_m, .week_mend_back, .intro_top')
			.height(function (i, v)
			{
				return v;
			})
			.attr('class', '')
		;

		greasemonkey.GM_addStyle([
			`body { background: none; }`
		].join(''), $('body')[0]);

		//_dom.remove();

		return _dom;
	},

};
