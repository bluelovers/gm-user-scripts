/**
 * Created by user on 2017/7/16/016.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://*.wnacg.com/*',
			'http*://*.wnacg.org/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/wnacg\.(com|org)/))
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
			const _uf_dom_filter_link = require('../../lib/dom/filter/link');
			_uf_dom_filter_link('.gallary_item a')
				.attr('target', '_blank')
			;

			const keycodes = require('keycodes');
			const _uf_done = require('../../lib/event.done');
			const comic_style = require('../../lib/comic/style');
			const greasemonkey = require('../../lib/greasemonkey');

			if ($('#photo_body').length)
			{
				let _area = $('#photo_body, .photo_body, #imgarea');

				$('body')
					.css(comic_style.bg_dark)
					.css(comic_style.bg_dark_text)
					.add(_area)
					.css(comic_style.body)
				;

				greasemonkey.GM_addStyle(`a { color: ${comic_style.bg_dark_text.color}; }`);

				const _img_selector = '#photo_body .photo';
				let _img = $(_img_selector);

				_img
					.css(comic_style.photo)
					.imagesLoaded()
					.done(() =>
					{
						$(window).triggerHandler('resize');
					})
				;

				let _div_page = $('<div/>')
					.css(comic_style.page)
					.css(comic_style.bg_dark)
					.css(comic_style.bg_dark_border)
					.css(comic_style.bg_dark_text)
					.css(comic_style.page_position)
					.appendTo('body')
				;

				$.scrollTo(_img);

				$('#tuzaoblock').hide();

				$(window)
					.on('resize', function ()
					{
						const _uf_fixsize2 = require('../../lib/dom/img/size')._uf_fixsize2;

//						let _this = _uf_fixsize2(_img, window, 1, {
//							width: 'auto',
//						});

						_img
							.css(comic_style.photo)
						;

						_uf_fixsize2(_img, window, 1);

						_div_page
							.text($('.newpagelabel').text())
						;

						_div_page
							.offset({
								top: _img.offset().top + 50,
								left: _img.offset().left - _div_page.outerWidth(),
							})
						;

						$.scrollTo(_img);
					})
					.on('keydown', function (event)
					{
						let [page, page_max] = $('.newpagelabel').text().replace(/[\n\s]/ig, '').split('/').map((a) =>
						{
							return parseInt(a);
						});

						//console.log(page, page_max, page > 1, page < page_max);

						switch (event.which)
						{
							case keycodes('pageup'):
							case keycodes('left'):
								var _a = $('.newpage a.btntuzao:eq(0)');

								_uf_done(event);

								if (page > 1 && _a.length)
								{
									_a[0].click();
								}

								break;
							case keycodes('pagedown'):
							case keycodes('right'):
								var _a = $('.newpage a.btntuzao:eq(-1)');

								_uf_done(event);

								if (page < page_max && _a.length)
								{
									_a[0].click();
								}

								break;
						}
					})
				;

				setTimeout(function ()
				{
					$(window).triggerHandler('resize')
				}, 500);
			}
			else if ($('#img_list').length)
			{
				const _img_area = $('#img_list');

				require('../../lib/jquery/onscreen');

				$('body')
					.css(comic_style.body)
					.css(comic_style.bg_dark)
				;

				const _img_selector = '#img_list img';
				let _img = $(_img_selector);

				let _div_page = $('<div/>')
					.css(comic_style.page)
					.css(comic_style.bg_dark)
					.css(comic_style.bg_dark_border)
					.css(comic_style.bg_dark_text)
					.css({
						top: 50,
						position: 'fixed',
					})
					.appendTo('body')
				;

				let _img_resize = function (_this)
				{
					const _uf_fixsize2 = require('../../lib/dom/img/size')._uf_fixsize2;

					return _uf_fixsize2($(_this), window, 1, {
						width: 'auto',
					})
						.css(comic_style.photo)
						;
				};

				_img_area
					.on('DOMNodeInserted', function (event)
					{
						_img = $(_img_selector);

						//console.log(_img);

						_img
							.attr('data-index', function (i)
							{
								return i;
							})
							.attr('name', function (i)
							{
								return 'img' + i;
							})
							.imagesLoaded()
							.always(function (data)
							{
								//$(window).triggerHandler('load.once');
							})
							.done(function (data)
							{
								_img_resize(data.elements);
							})
						;

						let _to = _img_area.add(_img.eq(0));

						_to = _to.add(_img.filter(':onScreen'));

						_div_page
							.text((parseInt(_to.eq(-1).attr('data-index')) + 1) + '/' + _img.length)
						;
					})
				;

				$(window)
					.on('load', function ()
					{
						_img_area.triggerHandler('DOMNodeInserted');

						$(window).triggerHandler('resize');
					})
					.on('resize', function ()
					{
						_img = $(_img_selector);

						//console.log($(window).height(), $(window).innerHeight());

						_img
							.each(function ()
							{
								$(this).parent('div').height($(window).innerHeight());

								_img_resize(this);
							})
						;
					})
					.on('resize.once', function ()
					{
						setTimeout(function ()
						{
							_img = $(_img_selector);

							let _to = _img_area.add(_img.eq(0));

							_to = _to.add(_img.filter(':onScreen'));

							_div_page
								.text((parseInt(_to.eq(-1).attr('data-index')) + 1) + '/' + _img.length)
							;

							_div_page
								.offset({
									left: _to.eq(-1).offset().left - _div_page.outerWidth(),
								})
							;

							$(window).scrollTo(_to.eq(-1));
						}, 100);
					})
					.on('scroll', function ()
					{
						setTimeout(function ()
						{
							$(window).triggerHandler('resize.once');
						}, 500);
					})
					.on('keydown', function (event)
					{
						_img = $(_img_selector);

						let _i = 0;

						_img.each(function (i, elem)
						{
							if ($(elem).is(":onScreen"))
							{
								_i = i;

								return false;
							}
						});

						switch (event.which)
						{
							case keycodes('pageup'):
							case keycodes('left'):

								if (_i > 0)
								{
									_i--;
								}

								var _a = _img.eq(_i);

								//console.log(_img, _i, _a);

								_uf_done(event);

								if (_a.length)
								{
									$(window).scrollTo(_a);
								}

								break;
							case keycodes('pagedown'):
							case keycodes('right'):

								if (_i < _img.length)
								{
									_i++;
								}

								var _a = _img.eq(_i);

								//console.log(_img, _i, _a);

								_uf_done(event);

								if (_a.length)
								{
									$(window).scrollTo(_a);
								}

								break;
						}
					})
					.triggerHandler('resize')
				;

				setTimeout(function ()
				{
					$(window).triggerHandler('resize');
				}, 500);
			}
			else
			{
				$(window).scrollTo('.gallary_wrap');

				$(window)
					.on('keydown', function (event)
					{
						switch (event.which)
						{
							case keycodes('pageup'):
							case keycodes('left'):
								var _a = $('.paginator .prev a');

								if (_a.length)
								{
									_uf_done(event);
									_a[0].click();
								}

								break;
							case keycodes('pagedown'):
							case keycodes('right'):
								var _a = $('.paginator .next a');

								if (_a.length)
								{
									_uf_done(event);
									_a[0].click();
								}

								break;
						}
					})
				;
			}

			return RETURN
		}
	},

	adblock()
	{

	},
};
