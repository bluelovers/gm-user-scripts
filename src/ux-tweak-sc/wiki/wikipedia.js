/**
 * Created by user on 2017/7/24/024.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://*.wikipedia.org/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/wikipedia\.org/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('a.external')
			.prop('target', '_blank')
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				'.uls-settings-trigger, .wbc-editpage, .wb-langlinks-edit, .mw-editsection, #p-personal, #p-search',
				'#footer-icons, #footer-places, .mbox-image .image, #siteNotice',
			].join())
		;

		$('.collapseButton')
			.parents('tr')
			.siblings()
			.find(':hidden')
			.addBack()
			.show()
		;

		//_dom.remove();

		return _dom;
	},
};
