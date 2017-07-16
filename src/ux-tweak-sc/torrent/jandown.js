/**
 * Created by user on 2017/7/16/016.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.jandown.com/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/jandown\.com/))
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
			$('form :submit')
				.after('<font color="red" style="margin: auto 10px;display: inline-block;">Clicked!</font>')
				[0].click()
			;

			return RETURN
		}
	},

	adblock()
	{

	},
};
