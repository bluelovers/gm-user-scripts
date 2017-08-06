/**
 * Created by user on 2017/7/17/017.
 */

'use strict';

module.exports = {

	priority: 0,

	metadata: {
		match: [

		],
		exclude: [
			'http*://platform.twitter.com/widgets*',
			'http*://apis.google.com/*'
		],
	},

	test(_url_obj)
	{
		return true;
	},

	main(_url_obj)
	{
	},

	adblock(_url_obj)
	{
	},
};
