/**
 * Created by user on 2017/12/1/001.
 */

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

'use strict';

let o: IDemo = {

	//priority: 100,

	disable: 2,

	metadata: {
		include: [
			'*://www.youtube.com/*',
			'*://youtube.com/*',
		],
		match: [],
		nomatch: [],
		exclude: [
			'http*://*.youtube.com/embed/*',
			'http*://*.youtube.com/v/*',
			'http*://creatoracademy.youtube.com/*',
			'http*://artists.youtube.com/*',
			'http*://kids.youtube.com/*',
		],

		grant: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return true;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		].join(','))
			.prop('target', '_blank')
		;
	},

	adblock(_url_obj = global._url_obj)
	{
		//
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

export = o as IDemo;
