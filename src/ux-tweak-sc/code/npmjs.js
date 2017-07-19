/**
 * Created by user on 2017/7/19/019.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.npmjs.com/search?q=*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/npmjs\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{

	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj)
	{
		let _dom = $();

		_dom = _dom
			.add([

			].join())
		;

		_dom.remove();

		return _dom;
	},
};
