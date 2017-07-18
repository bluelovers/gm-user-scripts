/**
 * Created by user on 2017/7/17/017.
 */

'use strict';

module.exports = {

	priority: 100,

	metadata: {
		match: [
			//'http*://*.google.*/*',
			'http*://encrypted.google.com/*',
			'http*://www.google.co.jp/*',
			'http*://*.google.*/blank.html',
			'http*://*.google.*/search*',
			'http*://*.google.*/imgres*',
		],
		exclude: [
			'http*://notifications.google.com/*'
		],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/\.google\./))
		{
			if (_url_obj.path.match(/\/blank\.html/))
			{
				return true;
			}
			else if (_url_obj.path.match(/\/(search|imgres)/))
			{
				return true;
			}
		}

		return false;
	},

	main(_url_obj)
	{
		if (!$('body#gsr').length)
		{
			return false;
		}

		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('#ires .g h3, #ires .g .s .th a')
			.attr('target', '_blank')
		;

		let _area = $('#topstuff .std.card-section').push('#taw > div:eq(0)').push('#ucs').eq(0);

		let _div = $('<div/>');

		_div
			.appendTo(_area)
			.css({
				'margin-top': '0.5em',
			})
			.append(function ()
			{
				var _a = $('<a/>');

				_a
					.attr({
						'href': _url_obj.path + '?' + _url_obj.query.replace(
							/\&(?:tbs|lr)=[^&]*($|\&|\#)/ig,
							'$1'
						) + '&tbs=lr:lang_1zh-CN%7Clang_1zh-TW&lr=lang_zh-CN%7Clang_zh-TW',
					})
					.html('只顯示<em>中文</em>搜尋結果。')
				;

				return _a;
			})
		;

		if (_url_obj.host != 'www.google.co.jp')
		{
			_div
				.append(function ()
				{
					let _a = $('<a/>');

					_a
						.attr({
							'href': 'https://www.google.co.jp' + _url_obj.path + '?' + _url_obj.query.replace(
								/\&(?:tbs|lr|hl)=[^&]*($|\&|\#)/ig,
								'$1'
							) + '&hl=ja',
						})
						.html('以<em>日本</em>作為搜尋。')
					;

					return _a;
				})
			;
		}
	},

	adblock(_url_obj)
	{

	},
};
