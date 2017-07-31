/**
 * Created by user on 2017/8/1/001.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.2dfan.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/2dfan\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('')
			.prop('target', '_blank')
		;

		module.exports.adblock(_url_obj);
	},

	adblock(_url_obj = global._url_obj)
	{
		$('.popadv-container').remove();
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				'.well:has(> .jiathis_style)',
				'.comments .media-object, .avatar',
				'#comments-container .form-actions',
				'footer, .site-search, body > .navbar, iframe, body :hidden',
				'.control-group > .rating',
				'#similars img',
				'#reviews',

				'#content .block-content:has(> .breadcrumb.subject-crumb)'
			].join())
		;

		//_dom.remove();

		return _dom;
	},
};
