/**
 * Created by user on 2017/7/17/017.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://blog.reimu.net/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/blog\.reimu\.net/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj)
	{
		$('.entry-content pre:not(:visited)')
			.css({
				'border-color': 'rgba(185, 42, 183, 0.56)',
			})
			.show()
		;
	},

	adblock(_url_obj)
	{

	},
};
