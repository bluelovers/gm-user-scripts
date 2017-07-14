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

			const _uf_dom_filter_link = require('../lib/dom/filter/link.js');

			_uf_dom_filter_link(
				'.red_lj a, #cbc_1 a, #cbc_2 a, #cbc_3 a, #abc_1 a, #abc_2 a, #index_mian .diline a, .innr22 a, .innr72 a, #tempc a.tg, .end_kk a, #search_nr .ssnr_bt a, #search_nr .matoa a, #index_left .inkk.ma5 div.sy_tb a, #todaycomic a, #index_right .inkk .innr8 li a, #search_nrl .ssnr_yt dl a, #index_mian .innr3 a')
				.not('.li_end a')
				.attr('target', '_blank')
			;

			const keycodes = require('keycodes');
			const _uf_done = require('../lib/event.done.js');

			let _img_selector = '#cp_image2:visible, #cp_image:visible';

			if ($('body.vPage').length)
			{
				let _img = $(_img_selector);

				$(window)
					.on('resize.imagesLoaded', () =>
					{
						$('#showimage').css({
							'min-height': $(window).innerHeight(),
						});

						_img = $(_img_selector);

						_img
							.height($(window).innerHeight())
							.css({
								'filter': 'contrast(115%)',
							})
						;

						$('body')
							.css({
								'min-width': 'auto',
							})
						;

						$(window).scrollTo(_img.add('#showimage'));

						//_img.triggerHandler('load.imagesLoaded');
					})
					.on('load.imagesLoaded', () =>
					{
						$(window).triggerHandler('resize.imagesLoaded');
					})
				;

				waitUntil((deferred, count) =>
				{
					_img = $(_img_selector);

					if (_img.length)
					{
						deferred.resolveWith(_img, [_img, count]);
					}

					return _img;
				})
					.always(function (_img, count)
					{
						_img.add('#showimage, #cp_img').removeAttr('oncontextmenu');

						_img.on('load.imagesLoaded', function (instance)
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
						console.log(777, this, _img, count);

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
					const _uf_disable_nocontextmenu = require('../lib/dom/disable_nocontextmenu')._uf_disable_nocontextmenu;

					_uf_disable_nocontextmenu(2, _img_selector + ', #cp_img, #showimage, #cp_funtb, .cp_tbimg, .view_bt');
				})
				.triggerHandler('load.nocontextmenu')
			;

			function waitUntil(cb)
			{
				let deferred = new $.Deferred();
				let count = 0;

				let _wait = function ()
				{
					setImmediate(() =>
					{
						count++;

						let ret = cb(deferred, count);

						if (deferred.isRejected() || deferred.isResolved())
						{
						}
						else if (count <= 10)
						{
							_wait();
						}
						else
						{
							deferred.rejectWith(ret, [ret, count]);
						}
					})
				};

				_wait();

				return deferred.promise();
			}

			return RETURN;
		}
	},

};


