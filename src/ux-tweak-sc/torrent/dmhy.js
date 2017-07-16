/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	disable: true,

	metadata: {
		match: [
			'http*://share.dmhy.org/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (!module.exports.disable && _url_obj.host.match(/share\.dmhy\.org/))
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
			const greasemonkey = require('../../lib/greasemonkey');

			if ($('#topic_list').length)
			{
				const _colors = require('../../lib/color/tag').tag;
				require('../../lib/color/jquery.color.js');

				console.log(_colors, jQuery.Color(_colors[0]));

				let _tag_cache = {
					array: [],
					list: {},
					colors: {},
					style: [],
				};

				let _list_kw = {
					array: [],

					/*
					today: [],
					name: [],
					*/

					day: {
						today: {},
					},

					nottoday: [],

					colors: {
						length: 0,
					},
					color_data: {},
				};

				$.fn.push = function (selector, context)
				{
					Array.prototype.push.apply(this, $.makeArray($(selector, context).not(this)));

//			_uf_log('push', this, $.makeArray($(selector, context)));

					return this;
				};

				if ($('#mini_jmd').length)
				{
					var _today = $('#mini_jmd .today');

					try
					{

//					_uf_log(1);

						_today
							.push(_today.prev('tr'))
							.each(function (index)
							{
								var _day = $(this);

								var _is_today = _day.is('.today');

								var _list_kw_day = _list_kw.day[_is_today ? 'today' : 'x' + index] = {};

								if (!_is_today)
								{
									_list_kw.nottoday.push('x' + index);

									_day.addClass('nottoday dayx' + index);
								}

								$('a[href*="list?keyword="]', _day)
									.each(function ()
									{
										var _a = $(this);

										var _kw = $.trim(decodeURIComponent((_a.attr('href')
											.match(/list\?keyword=(.+)(?:&|$)/))[1]));
										var _kw_regex = '(' + _kw.replace('/', '//').replace(/\+/gmi, ').*(') + ')';

										if (_kw)
										{
											_a
												.attr('data-kw', _kw)
											;

//											var _kw_regex2 = $.jConv.cht2chs(_kw_regex);
//
//											if (_kw_regex2 != _kw_regex)
//											{
////											_uf_log(_kw_regex, _kw_regex2);
//
//												_kw_regex = '(?:' + _kw_regex + ')|(?:' + _kw_regex2 + ')';
//											}

											//_kw_regex = '(?:' + _kw_regex + ')' + '(?!' + _kw_regex.replace('(', '(?:') + ')';

											_kw_regex = new RegExp(_kw_regex, 'i');

											var _idx = _list_kw.array.length;

											/*
											_list_kw.today.push(_kw_regex);
											_list_kw.array.push(_kw);
											_list_kw.name.push(_a.text());
											*/

											_list_kw.array.push(_kw);

											_list_kw_day[_idx] = {
												index: _idx,
												regex: _kw_regex,
												name: _a.text(),
											};
										}
									})
								;

//							_uf_log(_list_kw_day);
							})
						;

//					_uf_log(_list_kw);

					}
					catch (e)
					{
						console.log(e);
					}

					try
					{

						$('#topic_list .title')
							.each(function ()
							{
								var _td_title = $(this);
								var _tag = $('.tag', _td_title);

								var _team_id;

								if (_tag.length && (_team_id = $('a:first', _tag)
										.attr('href')
										.match(/team_id\/(\d+)(?:\b|$)/)))
								{
									_team_id = _team_id[1];
								}

								var _tr = _td_title.parents('tr:first');

								if (_team_id)
								{
									_tr
										.add(_tag)
										.attr('data-team-id', _team_id)
									;

									if (_tag_cache.list[_team_id] === undefined)
									{
										var _color = $.Color(_colors[_tag_cache.array.length % _colors.length]);

										while (_tag_cache.colors[_color] !== undefined)
										{
//								_uf_log(_color);

											_color = $.Color(_color).rand();
										}
										;

//							_uf_log(_color);

										_tag_cache.colors[_color] = _team_id;

										_tag_cache.list[_team_id] = {
											index: _tag_cache.array.length,
											id: _team_id,
											color: _color,

											contrastColor: _color.contrastColor(),

											borderColor: _color.lightness(function (value)
											{
												return value * 0.6;
											}),
										};

										_tag_cache.array.push(_team_id);
									}
								}

								var _a = $('> a', _td_title);

								if (_a.length && (_list_kw.array))
								{
									var _text = _a.text();
									var _found;

									$.each(_list_kw.day, function (index, day)
									{

										var _class = index == 'today' ? 'keyword ' + index : 'keyword_day day' + index;

//							_uf_log(index, day);

										var _kw;

										$.each(day, function (i, data)
										{
											var _ret;

											var v = data.regex;

											if (_ret = v.test(_text))
											{
												_kw = _list_kw.array[i];

												var _html = _text.replace(v, function (s)
												{
													return '<span class="' + _class + '" data-kw="' + _kw + '">' + s + '</span>';
												});

												_a.html(_html);

												_tr
													.add(_a)
													.add(_td_title)
													.attr('data-kw', _kw)
												;

												return _found = false;
											}

											//_uf_log(i, v, _text, _ret);
										});

										if (_found === false)
										{
											if (_list_kw.color_data[_kw] === undefined)
											{
												var _color = $.Color(_colors[_list_kw.colors.length % _colors.length]);

												while (_list_kw.colors[_color] !== undefined || _color.is('#EAEA00'))
												{
													_color = _color.is('#EAEA00') ? $.Color.rand() : $.Color(_color)
														.rand();
												}
												;

												_list_kw.colors[_color] = _kw;

												_list_kw.color_data[_kw] = {
													index: _list_kw.colors.length++,

													kw: _kw,

													color: _color,

													contrastColor: _color.contrastColor(),

													borderColor: _color.lightness(function (value)
													{
														return value * 0.6;
													}),
												};
											}

											return _found;
										}
									});
								}
							})
						;

					}
					catch (e)
					{
						console.log(e);
					}

					greasemonkey.GM_addStyle([
						'table.tablesorter tbody tr { opacity: 1; }',
						'table.tablesorter tbody tr:hover, ._uf_hover { opacity: 0.75; }',

						'table.jmd a[data-kw]:hover { opacity: 1; }',
						'table.jmd a[data-kw] { opacity: 0.5; }',

						'table.jmd a { line-height: 1.5em; display: inline-block; padding: 0px 3px; text-wrap: none; white-space: nowrap; }',

						'.keyword_day { background: rgba(153, 0, 102, 0.3); }',
						'.keyword.today { background: rgba(255, 255, 0, 0.5); }',
					], $('body')[0]);

					$.each(_tag_cache.list, function (_team_id, data)
					{

						var _css = 'table#topic_list tr td span.tag[data-team-id="' + _team_id + '"], #AdvSearchTeam[name="team_id"] option[value="' + _team_id + '"] { color: ' + data.contrastColor + '; background: ' + data.color + '; border-color: ' + data.borderColor + '; } .tag[data-team-id="' + _team_id + '"] a { color: ' + data.contrastColor + '; }';

						_tag_cache.style.push(_css);
					});

					$.each(_list_kw.color_data, function (_kw, data)
					{

						var _css = 'table.jmd a[data-kw="' + _kw + '"] { color: ' + data.contrastColor + '; background: ' + data.color + '; border-color: ' + data.borderColor + '; } table.jmd a[data-kw="' + _kw + '"]:hover { color: ' + data.contrastColor + '; }';

						_css += 'table.jmd a[data-kw="' + _kw + '"] { opacity: 0.75; }';

						_tag_cache.style.push(_css);
					});

					greasemonkey.GM_addStyle(_tag_cache.style, $('body')[0]);
				}

				console.log(_tag_cache, _list_kw);
			}

			return RETURN;
		}

	},

};
