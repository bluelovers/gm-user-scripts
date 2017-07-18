/**
 * Created by user on 2017/7/17/017.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.3dmgame.com/*',
			'http*://bbs.3dmgame.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/3dmgame\.com/))
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

	},
};
