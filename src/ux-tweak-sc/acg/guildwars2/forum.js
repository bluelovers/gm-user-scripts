/**
 * Created by user on 2017/8/9/009.
 */

'use strict';

module.exports = {

	disable: true,

	metadata: {
		match: [
			'http*://forum-*.guildwars2.com/forum/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/forum\-.+\.guildwars2\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.message-content a, .topiclist .topic .title a, a.topic',
			'.post-topic-header a',
			'.character .links a:not([rel="nofollow"]), .body.rules a',
		].join())
			.prop('target', '_blank')
		;

		ref_url(_url_obj);

		let realname = $('.realname').text().trim();

		$(window).scrollTo('#header .bookcrumbs, #content');
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([].join())
		;

		//_dom.remove();

		return _dom;
	},
};

function ref_url(_url_obj)
{
	$('a[href*="external?l="]', '.message-content')
		.attr('href', function (i, old)
		{
			let url = old.substr(old.indexOf('external?l=') + 'external?l='.length);

			//console.log(i, old, url);

			return decodeURIComponent(url);
		})
		.prop('target', '_blank')
	;
}
