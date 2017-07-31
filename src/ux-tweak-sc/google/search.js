/**
 * Created by user on 2017/7/17/017.
 */

'use strict';

let _google = {};

module.exports = {

	priority: 200,

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

		_google = new googleData(_url_obj);

		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('#ires .g h3 a, #ires .g .s .th a')
			.attr('target', '_blank')
		;

		let _area = $('#topstuff .std.card-section').push('#taw > div:eq(0)').push('#ucs').eq(0);

		if (_area.length)
		{
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

			search_bar(_url_obj);
		}
	},

	adblock(_url_obj)
	{

	},
};

class googleData
{
	constructor(_url_obj = global._url_obj)
	{
		const parseDomain = require('parse-domain');

		this._data = {};
		this._data.catalogs = catalogs();
		this._data.Stone = require('stonejs');
		this._data.Stone.addCatalogs(catalogs());

		this._url_obj = _url_obj;
		this._domain = parseDomain(this._url_obj.host);

		this.lang = $('html').attr('lang') || 'zh-TW';
	}

	get lang()
	{
		return this._data.lang;
	}

	set lang(value)
	{
		this._data.lang = value;

		if (!Object.keys(this._data.catalogs).includes(value))
		{
			value = 'zh-TW';
		}

		this._data._lang = value;

		this._data.Stone.setLocale(value);
	}

	get domain()
	{
		return this._domain.domain + '.' + this._domain.tld;
	}

	translate_link(text, lang = this.lang)
	{
		return `https://translate.${this.domain}/#auto/${lang}/${text}`;
	}

	gettext(...argv)
	{
		return this._data.Stone.gettext(...argv);

		let text = this._data.catalogs[this.lang].messages[argv[0]];

		return typeof text == 'undefined' ? `!${argv[0]}` : text;
	}
}

function search_bar(_url_obj)
{
	let _area = $('#hdtb-msb-vis');

	if (_area.length)
	{
		let _kw = $('#lst-ib').eq(0).val();

		let _div = $('> .hdtb-mitem.hdtb-imb', _area).eq(-1).clone();

		_div
			.clone()
			.appendTo(_area)
			.find('a.q')
			.prop('href', _google.translate_link(_kw))
			.text(_google.gettext('translate'))
		;
	}
}

function catalogs()
{
	return {
		"ja": {
			"plural-forms": "nplurals=2; plural=(n > 1);",
			"messages": {
				"translate": ["翻訳"],
			},
		},
		"zh-TW": {
			"plural-forms": "nplurals=2; plural=(n != 1);",
			"messages": {
				"translate": ["翻譯"],
			},
		},
	};
}
