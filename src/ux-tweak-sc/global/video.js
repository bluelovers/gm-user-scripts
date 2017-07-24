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
		return true;
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
			.add(_uf_clearly_viedo())
		;

		//_dom.remove();

		return _dom;
	},
};

function _uf_clearly_viedo(_url_obj, mode)
{
	var _dom_return = $('<div/>');

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
						'http://img.youtube.com/vi/' + _matches[1] + '/0.jpg',
						'http://img.youtube.com/vi/' + _matches[1] + '/2.jpg'
					],
				};
			}

			if (_data)
			{
				var _dom;

				if (_this.parent().is('object'))
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
		});

	return _dom_return;
}
