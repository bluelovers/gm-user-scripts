/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://nhentai\.net/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/nhentai\.net/))
		{
			return true;
		}

		return false;
	},

	main()
	{
		const RETURN = module.exports.test(_url_obj);

		//console.log(_url_obj, RETURN);

		if (RETURN)
		{
			const _uf_dom_filter_link = require('../../lib/dom/filter/link');
			_uf_dom_filter_link('#content .gallery a')
				.attr('target', '_blank')
			;

			module.exports.adblock();

			return RETURN
		}
	},

	adblock()
	{
		unsafeWindow.N.options.ads.show_popunders = false;
	},
};
