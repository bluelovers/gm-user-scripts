/**
 * Created by user on 2017/11/28/028.
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

	metadata: {
		include: [
			'http*://www.u2mtv.com/movie/*',
		],
		match: [
			'*://www.u2mtv.com/*',
		],
		nomatch: [],
		exclude: [],

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
		const { debounce } = require('throttle-debounce');
		const { throttle } = require('throttle-debounce');

		$('#movie_grid')
			.on('DOMNodeInserted', debounce(100, function ()
			{
				$('body').triggerHandler('load.ready');
			}))
		;

		$('body')
			.on('load.ready', debounce(100, function ()
			{
				_uf_dom_filter_link([
					'.og-expanded .og-expander a',
					'#movie_grid a',
				].join(','))
					.prop('target', '_blank')
				;
			}))
			.triggerHandler('load.ready')
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

		return _dom;
	},

};

export = o as IDemo;
