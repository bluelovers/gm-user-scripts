/**
 * Created by user on 2017/7/27/027.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://dulfy.net/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/dulfy\.net/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('article .post-content a, .post-title a, a.more-link')
			.prop('target', '_blank')
		;

		img_thumb(_url_obj);
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		const greasemonkey = require('root/lib/greasemonkey');

		let _dom = $(_dom_list);

		_dom = _dom
			.add($('#content article.post').parentsUntil('body').addBack().siblings().not('#content article.post, #disqus_thread'))
			.add([
				'.author-avatar',
				'#disqus_thread',
			].join())
		;

		$('#content article.post .embed-youtube').removeClass('embed-youtube');
		$('#body').removeAttr('id');

		greasemonkey.GM_addStyle([
			'body, #body { background: none !important; }',
		].join(''));

		//_dom.remove();

		return _dom;
	},
};

function img_thumb()
{
	$('article .post-content img')
		.prop('src', function (i, old)
		{
			return old.replace(/_thumb\./, '.');
		})
	;
}
