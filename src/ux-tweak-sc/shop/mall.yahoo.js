/**
 * Created by user on 2017/8/1/001.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://tw.mall.yahoo.com/*',
			'http*://tw.user.mall.yahoo.com/my/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/mall\.yahoo\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		if (adult_chk())
		{
			return;
		}

		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link([
			'#srp_sl_result #srp_result_list .item a, #ypsmyeco .listtable a',
			'#ypswlicon .bd a, #ypswlicon .watchlist a, .ypsmodule .listtable a',
		].join())
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

			].join())
		;

		//_dom.remove();

		return _dom;
	},
};

function adult_chk()
{
	let _a = $('#ypsadult a.no');

	if (_a.length)
	{
		window.location.href = _a.prop('href');

		return true;
	}
}
