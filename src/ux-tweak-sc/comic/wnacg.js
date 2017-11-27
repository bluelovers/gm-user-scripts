/**
 * Created by user on 2017/7/16/016.
 */

'use strict';
//import { _url_obj } from 'core/index';

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

	main(_url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('.gallary_item a')
			.attr('target', '_blank')
		;

		module.exports.adblock();

		const keycodes = require('keycodes');
		const _uf_done = require('root/lib/event/done');
		const comic_style = require('root/lib/comic/style');
		const greasemonkey = require('root/lib/greasemonkey/uf');
		const _uf_fixsize2 = require('root/lib/dom/img/size')._uf_fixsize2;
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');

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
				.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
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
				}))
			;

			setTimeout(function ()
			{
				$(window).triggerHandler('resize')
			}, 500);
		}
		else if ($('#img_list').length)
		{
			const _img_area = $('#img_list');

			require('root/lib/jquery/onscreen');
			require('jquery-stylesheet')($);

			const _img_selector = '#img_list img';
			let _img = $(_img_selector);

			if (_url_obj.query && _url_obj.query.match(/page=(\d+)/))
			{
				let page = RegExp.$1;

				$(window)
					.one('resize.once', debounce(1000, function ()
					{
						_img = $(_img_selector);

						let _to = _img_area.add($(_img_selector).eq(page - 1)).eq(-1);

						$(window).scrollTo(_to.add(_to.parent('div:not([id])')));
					}))
				;
			}

			greasemonkey
				.GM_addStyle([
					'#img_list img { vertical-align: middle; display: inline-block; }',
					'#img_list > div { padding: 0 !important; overflow: hidden; }',
					`#img_list > div:before { content: ''; display: inline-block; vertical-align: middle; height: 100%; }`,
				])
			;

			$('body')
				.css(comic_style.body)
				.css(comic_style.bg_dark)
			;

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
				return _uf_fixsize2($(_this), window, 1, {
					width: 'auto',
				})
					.css(comic_style.photo)
					;
			};

			_div_page.on('click', function ()
			{
				window.open(window.location.href.replace(/photos-slide-aid/, 'photos-index-aid'), '_blank');
			});

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
							$(data.elements).parent('div').height($(window).innerHeight());

							_img_resize(data.elements);
						})
					;

					let _to = _img_area.add(_img.eq(0));

					_to = _to.add(_img.filter(':onScreen')).eq(-1);

					_div_page
						.text((parseInt(_to.attr('data-index')) + 1) + '/' + _img.length)
					;
				})
			;

			let _fn_page = function (_to)
			{
				_div_page
					.text((parseInt(_to.attr('data-index')) + 1) + '/' + _img.length)
				;

				_div_page
					.offset({
						left: _to.offset().left - _div_page.outerWidth(),
					})
				;
			};

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

					//$.stylesheet('#img_list > div').css('height', $(window).innerHeight());
				})
				.on('resize.once', debounce(100, function ()
				{
					_img = $(_img_selector);

					let _to = _img_area.add(_img.eq(0));

					_to = _to.add(_img.filter(':onScreen')).eq(-1);

					_fn_page(_to);

					$(window).scrollTo(_to.parent());
				}))
				.on('scroll', debounce(1000, function (event)
				{
					$(window).triggerHandler('resize.once');
				}))
				.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
				{
					_img = $(_img_selector)
						//.parent('div')
					;

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
								_fn_page(_a);

								$(window).scrollTo(_a.parent());
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
								_fn_page(_a);

								$(window).scrollTo(_a.parent());
							}

							break;
					}
				}))
				.triggerHandler('resize.once')
			;
		}
		else
		{
			if (_url_obj.path && _url_obj.path.match(/photos-index(?:-page-\d+)?-aid-(\d+)/))
			{
				let aid = RegExp.$1;

				//console.log(aid);

				if (1 || $('.paginator .thispage').text() == 1)
				{
					$('.gallary_wrap .gallary_item:eq(0) a')
						.attr('href', function (i, old)
						{
							//let _m = old.match(/photos-view-id-(\d+)/);
							let _m = parseInt($(this).parents('.gallary_item').find('.info .title .name').text());

							//console.log(i, old);

							return _url_obj.path
								.replace(/photos-index(?:-page-\d+)?-aid-/, 'photos-slide-aid-')
								.concat((_m) ? '?page=' + _m : '')
								;
						})
					;
				}
			}

			$(window).scrollTo('.gallary_wrap');

			$(window)
				.on('load', debounce(500, function ()
				{
					module.exports.adblock();
				}))
				.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
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
				}))
				.triggerHandler('load')
			;
		}
	},

	adblock(_url_obj)
	{
		require('root/lib/dom/disable_nocontextmenu')
			._uf_disable_nocontextmenu2(2, '.gallary_wrap a, body, #bodywrap, a, img, input')
		;

		try
		{
			unsafeWindow.Advisor = null;
		}
		catch (e)
		{

		}
	},
};
