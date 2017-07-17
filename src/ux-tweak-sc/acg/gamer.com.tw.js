/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.gamer.com.tw/*',
			'http*://www.gamer.com.tw/index*.php*',
			'http*://acg.gamer.com.tw/acgDetail.php?s=*',
			'http*://gnn.gamer.com.tw/*.html',
			'http*://gnn.gamer.com.tw/*k=*',
			'http*://forum.gamer.com.tw/*bsn=*',
			'http*://home.gamer.com.tw/*',
			'http*://acg.gamer.com.tw/*',
			'http*://m.gamer.com.tw/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/gamer\.com\.tw/))
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
			_uf_dom_filter_link('.FM-blist .FM-blist3 a')
				.attr('target', '_blank')
			;

			module.exports.adblock();

			return RETURN
		}
	},

	adblock()
	{

	},
};
