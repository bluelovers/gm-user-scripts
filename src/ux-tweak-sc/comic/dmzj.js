/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://*.dmzj.com/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/dmzj\.com/))
		{
			return true;
		}

		return false;
	},

	main()
	{
		const RETURN = module.exports.test(_url_obj);

		//console.log(_url_obj, RETURN);

		if (RETURN)
		{
			const _uf_done = require('../../lib/event.done');

			const _uf_dom_filter_link = require('../../lib/dom/filter/link');
			_uf_dom_filter_link('.cartoon_online_border a')
				.attr('target', '_blank')
			;

			const comic_style = require('../../lib/comic/style');
			const greasemonkey = require('../../lib/greasemonkey');

			module.exports.adblock();

			if ($('#center_box').length)
			{
				require('../../lib/dom/disable_nocontextmenu')
					._uf_disable_nocontextmenu2(2)
				;

				let _img_selector = '#center_box img';
				let _img = $(_img_selector);

				$(window)
					.on('resize', function ()
					{
						const _uf_fixsize2 = require('../../lib/dom/img/size')._uf_fixsize2;

						let _this = _uf_fixsize2(_img, window, 1, {
							width: 'auto',
						});

						_this
							.css(comic_style.photo)
						;

						$('body')
							.css(comic_style.body)
							.css(comic_style.bg_dark)
						;

						$.scrollTo(_img);

						setTimeout(()=>
						{
							$.scrollTo(_img);
						}, 500);
					})
					.on('load.imagesLoaded', function (event)
					{
						_fn_img();
					})
					.triggerHandler('resize')
				;

				const waitUntil = require('../../lib/promise/wait').jquery;

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
								})
							;
						});
					;
				};

				_fn_img();

				$('.img_land_prev, .img_land_next')
					.on('click', function (event)
					{
						setTimeout(_fn_img, 100);
					})
					.hide()
				;
			}

			let _page_select = $('#page_select');

			$(window)
				.on('keydown', function (event)
				{
					switch (event.which)
					{
						case 33:
						case 37:
							var _a = $('#center_box .img_land_prev, .wrap .pages > a:eq(1)');

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
							}

							break;
						case 34:
						case 39:
							var _a = $('#center_box .img_land_next, .wrap .pages > a:eq(-2)');

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
							}

							break;
					}
				})
			;

			return RETURN;
		}
	},

	adblock()
	{
		$('.header-box + div').css('height', 'auto');
	},
};
