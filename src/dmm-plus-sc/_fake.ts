/**
 * Created by user on 2017/11/17/017.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	priority: -1,

	metadata: {
		match: [
			'http*://*.dmm.co*/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		return false;
	},

	main(_url_obj = global._url_obj)
	{
	},

	adblock(_url_obj = global._url_obj)
	{
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		return _dom;
	},
};

export = o;
