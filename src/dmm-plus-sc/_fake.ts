/**
 * Created by user on 2017/11/17/017.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	priority: -1,

	metadata: {
		include: [
			'http*://*.dmm.co*/*',
			'http*://*games.dmm.co*/*',
		],
		exclude: [
			'http*://www.dmm.co*/digital*',
		],
	},

	// @ts-ignore
	test(_url_obj = global._url_obj)
	{
		return false;
	},

	// @ts-ignore
	main(_url_obj = global._url_obj)
	{
	},

	// @ts-ignore
	adblock(_url_obj = global._url_obj)
	{
	},

	// @ts-ignore
	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		return _dom;
	},
};

export = o;
