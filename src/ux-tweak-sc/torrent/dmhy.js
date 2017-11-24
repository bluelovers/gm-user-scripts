/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	//disable: true,

	metadata: {
		match: [
			'http*://share.dmhy.org/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/share\.dmhy\.org/))
		{
			return true;
		}

		return false;
	},

	async main()
	{
		//const Promise = require("bluebird");

		const greasemonkey = require('root/lib/greasemonkey/index');
		const _uf_done = require('root/lib/event/done');
		let jquery_stylesheet = require('jquery-stylesheet');
		jquery_stylesheet($);

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('.weekly_list_part a')
			.prop('target', '_blank')
			.off('click.open')
			.on('click.open', function (event)
			{
				_uf_done(event);
				window.open(this.href, '_blank');
			})
		;

		$('.weekly_list_b')
			.attr('onclick', function (i, v)
			{
				let _href = v.replace(/location\.href=\'|\';?/g, '');
				return `window.open('${_href}', '_blank');`;
			})
		;

		$('.topic-title .relative-goods')
			.empty()
			.removeClass('relative-goods')
			.css({
				padding: 10,
			})
			.append($('#tabs-1 > p').clone())
		;

		$(window).scrollTo($('.topic-main').push('.menu'));

		{
			const debounce = require('throttle-debounce/debounce');
			const throttle = require('throttle-debounce/throttle');

			let data = mini_jmd();

			if (data)
			{
				let style_css = '';
				let done = false;

				topic_list_kw(data);

				let AdvSearch = $('#AdvSearch');

				AdvSearch
					.on('DOMNodeInserted', debounce(200, function ()
					{
						if (done || !team_id_list(data))
						{
							return;
						}

						done = true;

						style_css = `
.jmd a[data-tag] \{ opacity: 0.4; padding: 1px 3px 0px; white-space: nowrap; word-break: keep-all; display: inline-block; \}
.title span[data-tag] \{ background-color: rgb(255, 255, 102); \}
`;
						{
							let c = [];

							let css = Object.keys(data.kw_found)
								.reduce(function (a, b)
								{
									a.push(`.jmd a[data-tag="${b}"]`);
									c.push(`.jmd a[data-tag="${b}"]:hover`);

									return a;
								}, [])
								.join()
							;

							style_css += `${css} \{ opacity: 0.85; \} ${c.join()} \{ opacity: 1; \}`;
						}

						greasemonkey.GM_addStyle([
							'.bg { min-width: auto; }',
							'#topic_list .title > a:visited { color: rgb(111, 111, 111); opacity: 0.5; }',
							style_css,
							'#topic_list tr:hover span[data-tag], #topic_list tr:hover .tag[data-team-id], #topic_list tr:hover .title > a, #topic_list tr:hover .title > a:visited { opacity: 1 !important; }',
							jmd_color(data),
						].join(''));

					}))
				;

				if (!AdvSearch.children().length && $('#keyword').val())
				{
					unsafeWindow.showHideAdvSearch();
				}

				setTimeout(function ()
				{
					AdvSearch.triggerHandler('DOMNodeInserted');
				}, 500);

				$(window)
					.on('load', function ()
					{
						AdvSearch.triggerHandler('DOMNodeInserted');
					})
				;
			}

			console.log(data);
		}

		module.exports.adblock();
	},

	adblock(_url_obj = global._url_obj)
	{
		$('.relative-goods').remove();
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add($('.topic-main, .topics_bk, .main').siblings())
			.add([
				'#comment_add, .share, .relative-goods, #recent-commnet img',
			].join())
		;

		$('.topic-main')
			.css({
				float: 'initial',
			})
		;

		//_dom.remove();

		return _dom;
	},

};

function mini_jmd()
{
	let _jmd = $('#mini_jmd .jmd');

	if (!_jmd.length)
	{
		return false;
	}

	const zh2cht = require('zh2cht');

	let data = {
		jmd: [],
		kw: {
			length: 0,
		},

		kw_name: [],
		kw_day: [],
	};

	_jmd.find('tr')
		.each(function (i)
		{
			let _tr = $(this);

			let _th = _tr.find('> th').eq(0);

			let _day = _th.text();

			let _today = _tr.hasClass('today');

			data.jmd[i] = {
				index: i,
				day: _day,
				today: _today,

				kw: {},
			};

			if (_today)
			{
				data.today = data.jmd[i].index;

				_tr
					.attr('data-today', data.jmd[i].index)
				;
			}

			_tr
				.attr('data-day', data.jmd[i].index)
			;

			_th.next('th, td')
				.find('a')
				.each(function ()
				{
					let _this = $(this);

					let _name = _this.text();
					let _href = _this.prop('href');

					let _kw = decodeURIComponent(_href.replace(/.*\/topics\/list\?keyword=/g, ''));

					_kw = mini_jmd_kw(_kw, _name);

					_this.attr('data-tag', data.kw.length);

					data.kw[data.kw.length] = data.jmd[i].kw[data.kw.length] = _kw;
					data.kw_name[data.kw.length] = _name;
					data.kw_day[data.kw.length] = data.jmd[i].index;
					data.kw.length++;
				})
			;
		})
	;

	Object.defineProperty(data.kw, 'length', {
		enumerable: false,
	});

	function mini_jmd_kw(_kw, _name)
	{
		let _kw_regex = '(' + _kw.replace('/', '//').replace(/\+/gmi, ').*(') + ')';

		let _kw_regex2 = zh2cht.toZh(_kw_regex);

		if (_kw_regex2 != _kw_regex)
		{
			_kw_regex = '(?:' + _kw_regex + ')|(?:' + _kw_regex2 + ')';
		}

		_kw_regex = new RegExp(_kw_regex, 'i');

		return _kw_regex;
	}

	//console.log(data);

	return data;
}

function topic_list_kw(data)
{
	let _topic_list = $('#topic_list .title');

	if (!_topic_list.length)
	{
		return false;
	}

	data.team_id = {};
	data.kw_found = {};

	_topic_list
		.each(function ()
		{
			let _td_title = $(this);
			let _tag = $('.tag', _td_title);

			let _tr = _td_title.parents('tr').eq(0);
			let _team_id;

			let _dom = $()
				.add(_tr)
				.add(_td_title)
			;

			if (_tag.length
				&& (
					_team_id = $('a:first', _tag)
						.attr('href')
						.match(/team_id\/(\d+)(?:\b|$)/)
				)
			)
			{
				_team_id = _team_id[1];

				data.team_id[_team_id] = _tag.text();

				_dom
					.add(_tag)
					.add($('a:first', _tag))
					.attr('data-team-id', _team_id)
				;
			}

			let _a = $('> a', _td_title);

			if (_a.length)
			{
				let _text = _a.text();
				let _found = false;

				_dom = _dom
					.add(_a)
				;

				$.each(data.kw, function (index, _kw)
				{
					if (_kw.test(_text))
					{
						let _html = _text.replace(_kw, function (s)
						{
							return `<span data-tag="${index}" >${s}</span>`;
						});

						_a.html(_html);

						_dom = _dom.add(_a.find('span[data-tag]'));

						_dom
							.attr('data-tag', index)
							.attr('data-day', data.kw_day[index])
						;

						data.kw_found[index] = data.kw_found[index] || 0;
						data.kw_found[index]++;

						_found = true;

						return false;
					}
				});

				if (!_found)
				{
					_dom
						.attr('data-tag', 'null')
					;
				}
			}
		})
	;
}

function team_id_list(data)
{
	let _select = $('select[name="team_id"], #AdvSearchTeam');

	if (!data || !_select.length || !data.team_id)
	{
		return false;
	}

	_select
		.find('option')
		.attr('data-team-id', function (i, v)
		{
			return $(this).val();
		})
	;

	return true;
}

function jmd_color(data)
{
	const _colors = require('root/lib/color/tag');
	require('root/lib/jquery/jquery.color').makeJQueryPlugin($, window);

	let ret_style_css = '';

	let _team_id_color = jmd_color_tag(data.team_id, _colors.tag);

	ret_style_css += Object.keys(_team_id_color)
		.reduce((a, b) =>
		{
			let bgcolor = $.Color(b);
			let color = bgcolor.contrastColor();
			let border = bgcolor.lightness(function (value)
			{
				return value * 0.6;
			});

			let id = _team_id_color[b];

			a.push(`.tag[data-team-id="${id}"], table#topic_list tr td span.tag[data-team-id="${id}"] { color: ${color}; background: ${bgcolor}; border-color: ${border}; opacity: 0.65; }`);
			a.push(`.tag[data-team-id="${id}"] a, table#topic_list tr td span.tag[data-team-id="${id}"] a { color: ${color}; }`);
			a.push(`#AdvSearchTeam option[value="${id}"] { color: ${color}; background: ${bgcolor.alpha(0.9)}; }`);

			return a;
		}, [])
		.join('')
	;

	if ([2, 31].includes(parseInt($('#AdvSearchSort :selected').val())))
	{
		let _kw_found_color = jmd_color_tag(data.kw_found, _colors.tag);

		ret_style_css += Object.keys(_kw_found_color)
			.reduce((a, b) =>
			{
				let bgcolor = $.Color(b);
				let color = bgcolor.contrastColor();
				let border = bgcolor.lightness(function (value)
				{
					return value * 0.6;
				});

				let id = _kw_found_color[b];

				a.push(`.jmd a[data-tag="${id}"] { color: ${color}; background: ${bgcolor}; border-color: ${border}; opacity: 0.65; }`);
				a.push(`#topic_list tr span[data-tag="${id}"] { color: ${color}; background: ${bgcolor}; border-color: ${border}; opacity: 0.65; }`);

				return a;
			}, [
				'#topic_list tr[data-day="0"] .title > a, #topic_list tr[data-day="3"] .title > a { opacity: 0.5; }',
				'#topic_list .title > a[data-tag="null"] { color: rgba(40, 42, 191, 0.67); }',
				'#topic_list tr:hover .title > a[data-tag="null"] { color: rgba(40, 42, 191, 1); }',
			])
			.join('')
		;
	}

	return ret_style_css;
}

function jmd_color_tag(data, tag)
{
	let _kw_found_color = {};

	Object.defineProperty(_kw_found_color, 'length', {
		enumerable: false,
		//configurable: true,
		//writable: true,

		get()
		{
			return Object.keys(this).length;
		},
	});

	Object.keys(data)
		.reduce((a, b) =>
		{
			let idx = _kw_found_color.length % tag.length;

			let _color = $.Color(tag[idx])
				.rand()
			;

			while (_color in _kw_found_color)
			{
				_color = $.Color(tag[idx]).rand();
			}

			//console.log(_team_id_color.length, idx, _color, _color.toString());

			_kw_found_color[_color] = b;
		}, [])
	;

	return _kw_found_color;
}
