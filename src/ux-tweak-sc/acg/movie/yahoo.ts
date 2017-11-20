/**
 * Created by user on 2017/11/20/020.
 */

/**
 * Created by user on 2017/11/19/019.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	//priority: 100,
	//script: true,

	metadata: {
		match: [
			'http*://tw.movies.yahoo.com/*',
		],
		exclude: [],
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
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.release_list a',
		].join())
			.prop('target', '_blank')
		;
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

