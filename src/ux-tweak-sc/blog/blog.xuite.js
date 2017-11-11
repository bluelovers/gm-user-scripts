/**
 * Created by user on 2017/8/6/006.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://blog.xuite.net/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/blog\.xuite\.net/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link('.blogbody a')
			.prop('target', '_blank')
		;

		lazyload(_url_obj)
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add($('.ArticleContent').parentsUntil('body').addBack().siblings())
			.add([
				'script, body :hidden',

				'.bookmark.push, #facebook-like-bottom, .fb-comments, .item_trackBack',

				'#sidebarTreeStyle, .selectbar, .commentbutton-menu, .page',

				'link[rel="stylesheet"]',
			].join())
		;

		$('.blogrank apan[class]').removeAttr('class');

		$('.ArticleContent')
			.css({
				'max-width': 700,
				margin: 'auto',
			})
		;

		//_dom.remove();

		return _dom;
	},
};

function lazyload(_url_obj)
{
	$('img.lazyload[data-original]')
		.not('[data-done]')
		.attr('data-done', true)
		.each(function ()
		{
			let img = $(this);

			if (img.attr('src') != img.attr('data-original'))
			{
				img
					.attr('src', img.attr('data-original'))
					.removeAttr('lazyload')
				;
			}
		})
	;
}
