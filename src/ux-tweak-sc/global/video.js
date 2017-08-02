/**
 * Created by user on 2017/7/21/021.
 */

'use strict';

module.exports = {

	priority: 100,

	script: true,

	script_method: {
		clearly: true,
	},

	metadata: {
		match: [],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		return 2;
	},

	main(_url_obj = global._url_obj)
	{

	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				'',
			].join())
			.add(_uf_clearly_viedo(_url_obj))
		;

		//_dom.remove();

		return _dom;
	},
};

function _uf_clearly_viedo(_url_obj = global._url_obj, mode)
{
	const comic_style = require('../../lib/comic/style');

	var _dom_return = $('<div/>');

	const scheme = _url_obj.scheme || 'http';

	$('embed[type="application/x-shockwave-flash"], iframe[src*="youtube"], iframe[data-src*="youtube"], article a[name="attachMovieName"][href*="youtube"]')
		.each(function ()
		{
			var _this = $(this);
			var _url = _this.attr('src') || _this.attr('data-src') || _this.attr('href');

			var _matches = _url.match(
				'^(?:https?:)?\/\/(?:www\.)?youtube\.(?:googleapis\.)?com\/(?:v|embed)\/([A-Za-z0-9_\-]{11})');

			var _data;

			if (_matches)
			{
				_data = {
					type: 'youtube',
					src: _url,
					width: _this.width(),
					height: _this.height(),
					videoid: _matches[1],
					matches: _matches,

					thumb: [
						`${scheme}://img.youtube.com/vi/${_matches[1]}/0.jpg`,
						`${scheme}://img.youtube.com/vi/${_matches[1]}/2.jpg`
					],
				};
			}

			if (_data)
			{
				var _dom;

				if (_this.parents('a[name="attachMovieName"]').length)
				{
					_dom = _this.parents('a[name="attachMovieName"]').eq(0);
				}
				else if (_this.parent().is('object'))
				{
					_dom = _this.parent();
				}
				else
				{
					_dom = _this;
				}

				var _elem = $('<a/>')
						.attr({
							href: _data.src,
							target: '_blank',
							title: 'Youtube: ' + _data.videoid,
						})
						.css({
							display: 'inline-block',
							color: '#FFF',
							'text-decoration': 'none',
						})
						.append($('<img/>').attr({
							src: _data.thumb[1] || _data.thumb[0],
//						lowsrc: _data.thumb[1],
							alt: 'Youtube: ' + _data.videoid,
						}))
						.append($('<div/>').text('Youtube: ' + _data.videoid).css('padding-top', '5px'))
						.appendTo($('<div/>').css({
							display: 'inline-block',
							background: '#000',
							color: '#FFF',
							'text-decoration': 'none',
							'text-align': 'center',
							padding: '5px',
						}))
						.parent()
				;

				_dom_return = _dom_return.add(_dom);

				_dom.after(_elem);

//				_dom.after(_elem).remove();
			}
		})
	;

	$('embed[src*="hdslb.com"]')
		.each(function ()
		{
			let _this = $(this);
			let _url = _this.attr('src');

			let _flashvars = _this.attr('flashvars');

			if (_flashvars)
			{
				_url += '?' + _flashvars;
			}

			$('<div/>')
				.css(comic_style.video_thumb)
				.append(function ()
				{
					let _a = $('<a/>')
						.attr('href', _url)
						.attr('target', '_blank')
						.text(_flashvars)
					;

					return _a;
				})
				.insertAfter(_this)
			;

			_dom_return = _dom_return.add(_this);
		})
	;

	return _dom_return;
}
