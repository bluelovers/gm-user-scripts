/**
 * Created by user on 2017/11/18/018.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	priority: 100,

	script: true,

	metadata: {
		include: [
			//'http*://*.dmm.co*/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if ($('#content:has(.capt01) .sect01 .first a[href*="age_check"]').length)
		{
			return 2;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		let _a = $('#content:has(.capt01) .sect01 .first a[href*="age_check"]');

		if (_a.length)
		{
			_a[0].click();
		}
	},

};

export = o;
