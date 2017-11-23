/**
 * Created by user on 2017/11/22/022.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	//priority: 100,

	metadata: {
		match: [
			'http*://www.facebook.com/*',
			'http*://facebook.com/*',
		],
		nomatch: [

		],
		exclude: [

		],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
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

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				//
			].join())
		;

		//_dom.remove();

		return _dom;
	},

};

export = o;
