/**
 * Created by user on 2017/7/21/021.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.weibo.com/*',
			'http*://m.weibo.cn/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/weibo\.(com|cn)/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		if (err404(_url_obj))
		{
			return;
		}

		require('../../lib/jquery/onscreen');
		const _uf_done = require('../../lib/event.done');

		//const _feed_selector = '.WB_detail, .WB_feed_detail';
		const _feed_selector = '.WB_feed_type, .weibo-member';

		let _feed = $(_feed_selector);

		$(window)
			.on('load.scroll', function (event)
			{
				_feed = $(_feed_selector);

				//console.log(555, event.name, event, this, _feed.filter(':onScreen'));

				$(window).scrollTop(_feed.filter(':onScreen').offset().top - 70);
			})
			.on('load.img', function (event)
			{
				_feed = $(_feed_selector);

				//console.log(666, event.name, event, this, _feed.filter(':onScreen'));

				_feed
					.filter(':onScreen')
					.find([
						'.imgShow, .media_box img, .WB_expand_media_box img, .WB_media_wrap img, .WB_media_view img',

						// https://m.weibo.cn/p/1005053221753697
						'.weibo-media .m-img-box img, .weibo-media .single-img img',
					]
						.join())
					.not('[data-done]')
					.attr('data-done', true)
					.attr('src', function (i, old)
					{
						let _this = $(this);

						_this
							.data('src', old)
							.width(function (i, v)
							{
								return v;
							})
							.height(function (i, v)
							{
								return v;
							})
						;

						return fix_thumb(old);
					})
				;
			})
			.on('scroll.img', function (event)
			{
				setTimeout(function ()
				{
					$(window).triggerHandler('load.img');
				}, 1000);
			})
			.on('keydown.page', function (event)
			{
				switch (event.which)
				{
					case 33:
					case 37:
						var _a = $('.pswp:visible button.pswp__button--arrow--left');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();

							return false;
						}

						break;
					case 34:
					case 39:
						var _a = $('.pswp:visible button.pswp__button--arrow--right');

						console.log(_a);

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();

							return false;
						}

						break;
				}
			})
		;

		setTimeout(() =>
		{
			$(window).triggerHandler('load.scroll');
		}, 100);

		setTimeout(() =>
		{
			$(window).triggerHandler('load');

			_feed
				.on('DOMNodeInserted.img', function (event)
				{
					//console.log(777, event.name, event, this);

					$(window).triggerHandler('load.img');
				})
			;

			_feed
				.on('mousedown.photoview', 'a[type="widget_photoview"], a.S_txt1', function (event)
				{
					let _this = $(this);

					//console.log(888, event.name, event, this);
					//console.log(444, $('body > .layer_multipic_preview'));

					$('body')
						.off('DOMNodeInserted.layer_multipic_preview')
						.on('DOMNodeInserted.layer_multipic_preview', function (event)
						{
							if ($(event.target).is('.layer_multipic_preview'))
							{
								$('body').off(`${event.type}.${event.handleObj.namespace}`);

								//console.log(999, event, $('.layer_multipic_preview .pic_show_box img'));

								$('.layer_multipic_preview .pic_show_box img')
									.not('[data-done]')
									.attr('data-done', true)
									.on('load', function (data)
									{
										let _this = $(this);

										_this
											.attr('src', function (i, old)
											{
												let _this = $(this);

												_this
													.attr('lowsrc', old)
												;

												return fix_thumb(old);
											})
										;
									})
								;
							}

							/*
							.imagesLoaded()
							.always(function (data)
							{
								console.log(111, data);

								$(data.images)
									.attr('src', function (i, old)
									{
										let _this = $(this);

										_this
											.data('src', old)
											.width(function (i, v)
											{
												return v;
											})
											.height(function (i, v)
											{
												return v;
											})
										;

										console.log(old, fix_thumb(old));

										return fix_thumb(old);
									})
								;
							})
							*/
							;
						})
					;
				})
			;

			$('.WB_feed')
				.on('DOMNodeInserted.feed', function (event)
				{
					setTimeout(function ()
					{
						$(window).triggerHandler('load.img');
					}, 1000);
				})
			;

		}, 1000);

	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj)
	{
		let _dom = $();

		_dom = _dom
			.add([].join())
		;

		_dom.remove();

		return _dom;
	},
};

function fix_thumb(src)
{
	return src
		.replace(/\/(thumb150|mw690|mw1024|orj360)\//, '/large/')
		;
}

function err404(_url_obj)
{
	if (!_url_obj.query)
	{
		return false;
	}

	// http://www.weibo.com/coserxizi?is_all=1#_rnd1500625208315
	if ($('body').children().length == 0 && $('body').text().match(/Not found|error to origin/i))
	{
		location.href = _url_obj.path;

		return true;
	}

	// http://www.weibo.com/vivian19940910?is_hot=1&retcode=6102
	if ($('body').text() == '')
	{
		location.href = _url_obj.path;

		return true;
	}

	if (window.top == window.self && !_url_obj.query.match(/uf404=true/))
	{
		if (
			unsafeWindow.document.URL.match(/^about\:neterror/)
			|| $('body.neterror').length == 1 && window.document.title.match(/頁面載入發生問題/)
		)
		{
			let url = location.href
				.replace(`${_url_obj.scheme}://`, (_url_obj.scheme == 'https' ? 'http' : 'https') + '://')
			;

			let query = _url_obj.query;

			if (query)
			{
				query += '&';
			}

			url = url.replace(_url_obj.host + _url_obj.path + (_url_obj.query ? '?' + _url_obj.query : ''), _url_obj.host + _url_obj.path + '?' + query + 'uf404=true');

			location.href = url;

			return true;
		}
	}
}
