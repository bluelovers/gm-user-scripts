/**
 * Created by user on 2017/7/31/031.
 */

'use strict';

module.exports = {

	priority: 100,

	script: true,

	metadata: {
		match: [
			//'http*://*.wikipedia.org/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if ($('body.mediawiki').length)
		{
			return 2;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('a.external')
			.prop('target', '_blank')
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		const greasemonkey = require('../../lib/greasemonkey');

		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				'.uls-settings-trigger, .wbc-editpage, .wb-langlinks-edit, .mw-editsection, #p-personal, #p-search',
				'#footer-icons, #footer-places, .mbox-image .image, #siteNotice',

				'#footer, #p-logo',
			].join())
		;

		$('.collapseButton')
			.parents('tr')
			.siblings()
			.find(':hidden')
			.addBack()
			.show()
		;

		greasemonkey.GM_addStyle([
			'div#column-content { background-image: none; }'
		].join(''));

		image(_url_obj);

		//_dom.remove();

		return _dom;
	},
};

function image(_url_obj)
{
	$('#mw-content-text img')
		.attr('src', function (i, old)
		{
			return old.replace(/(\/images)\/thumb\/([^\/]+\/[^\/]+)\/([^\/]+)\/.+$/, '$1/$2/$3');
		})
	;
}
