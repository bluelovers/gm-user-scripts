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

	main()
	{
		//const greasemonkey = require('../../lib/greasemonkey');
		const _uf_done = require('../../lib/event.done');
		let jquery_stylesheet = require('jquery-stylesheet');
		jquery_stylesheet($);

		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
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
			let data = mini_jmd();

			if (data)
			{
				topic_list_kw(data) && $('#AdvSearch')
					.on('DOMNodeInserted', function ()
					{
						team_id_list(data);
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

	clearly(_url_obj = global._url_obj)
	{
		let _dom = $();

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

		_dom.remove();

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
}
