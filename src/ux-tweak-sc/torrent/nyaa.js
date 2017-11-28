/**
 * Created by user on 2017/7/16/016.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://sukebei.nyaa.si/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/sukebei\.nyaa\.si/))
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
			const _uf_dom_filter_link = require('root/lib/dom/filter/link');
			_uf_dom_filter_link('.torrent-list tr > td[colspan="2"] a, #torrent-description a')
				.attr('target', '_blank')
			;

			return RETURN
		}
	},

	adblock()
	{

	},
};
