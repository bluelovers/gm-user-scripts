/**
 * Created by user on 2017/7/17/017.
 */

'use strict';

module.exports = {

	priority: 0,

	metadata: {
		match: [
			'about:neterror*',
		],
		exclude: [
			'http*://platform.twitter.com/widgets*',
			'http*://www.facebook.com/*plugins/*',
			'http*://staticxx.facebook.com/*',
			'http*://apis.google.com/*'
		],
	},

	test(_url_obj)
	{
		return false;
	},

	main(_url_obj)
	{
	},

	adblock(_url_obj)
	{
	},
};
