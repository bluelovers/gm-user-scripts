/**
 * Created by user on 2017/7/22/022.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://syosetu.com/*',
			'http*://ncode.syosetu.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/syosetu\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		$(window).scrollTo('#novel_no', 0 - $('#novel_header').height());
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj)
	{
		let _dom = $();

		_dom = _dom
			.add([].join())
		;

		return _dom;
	},
};
