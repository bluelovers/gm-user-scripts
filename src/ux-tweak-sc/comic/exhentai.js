/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://exhentai.org/*',
			'http*://g.e-hentai.org/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/e-hentai\.org/) || _url_obj.host.match(/exhentai\.org/))
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
			const keycodes = require('keycodes');
			const _uf_dom_filter_link = require('../../lib/dom/filter/link');
			const _uf_done = require('../../lib/event.done');
			const comic_style = require('../../lib/comic/style');
			const greasemonkey = require('../../lib/greasemonkey');

			_uf_dom_filter_link('.itg a, #gdt a')
				.attr('target', '_blank')
			;

			if (_url_obj.path.match(/\/s\//))
			{
				let _img = $('#img');

				//console.log(_img);

				$(window)
					.on('resize', function ()
					{
						const _uf_fixsize2 = require('../../lib/dom/img/size')._uf_fixsize2;

						let _this = _uf_fixsize2(_img, window, 1, {
							width: 'auto',
						});

						_this
							.css(comic_style.photo)
							.css({
								'max-width': 'none',
								'max-height': 'none',

								/*
								'max-width': _this.width(),
								'max-height': _this.height(),
								*/
							})

						;

						//console.log(_img, _this);

						$.scrollTo(_img);
					})
					.on('load.imagesLoaded', function (event)
					{
						_fn_img();
					})
					.on('keydown', function (event)
					{
						switch (event.which)
						{
							case keycodes('pageup'):
							case keycodes('left'):
								_uf_done(event);
								$('#prev').trigger('click');

								break;
							case keycodes('pagedown'):
							case keycodes('right'):
								_uf_done(event);
								$('#next').trigger('click');


								break;
						}

						setTimeout(_fn_img, 500);
					})
					.triggerHandler('load.imagesLoaded')
				;

				function _fn_img()
				{
					_img = $('#img');

					setTimeout(() =>
					{
						$(window).triggerHandler('resize');
					}, 100);

					setTimeout(() =>
					{
						$(window).triggerHandler('resize');
					}, 500);

					setTimeout(() =>
					{
						$(window).triggerHandler('resize');
					}, 1000);

					_img
						.imagesLoaded()
						.always(function ()
						{
							$(window).triggerHandler('resize');
						})
						.done(function ()
						{
							//$(window).triggerHandler('resize');
						})
					;
				};

			}
			else
			{
				greasemonkey.GM_addStyle(`.id1._zh { border-color: rgb(54, 176, 197); } .id1._other { opacity: 0.25; } .id1:hover { opacity: 1; }`);

				$.scrollTo('#toppane, #gd2');

				$('.itg .id2')
					.each(function ()
					{
						let _this = $(this);

						let text = _this.text();

						if (/Chinese|中国|漢化/i.test(text))
						{
							_this.parents('.id1:eq(0)').addClass('_zh');
							;
						}
						else if (/\[(Eng(?:lish)|Korean|Spanish|Thai(\s*ภาษาไทย)?|Italian|Rus(sian)?|Polish)\]/i.test(text))
						{
							_this.parents('.id1:eq(0)').addClass('_other');
						}
					})
				;
			}

			$(window)
				.on('keydown', function (event)
				{
					let _a = $('.ptt td > a[onclick]');

					//console.log(event.which, keycodes(event.which), _a.length);

					switch (event.which)
					{
						case keycodes('pageup'):
						case keycodes('left'):
							if (_a.length)
							{
								//console.log(_a.eq(-1));

								_uf_done(event);
								location.href = _a.eq(0).attr('href');
							}

							break;
						case keycodes('pagedown'):
						case keycodes('right'):
							if (_a.length)
							{
								//console.log(_a.eq(0));

								_uf_done(event);
								location.href = _a.eq(-1).attr('href');
							}

							break;
					}
				})
			;

			return RETURN;
		}

	},

};
