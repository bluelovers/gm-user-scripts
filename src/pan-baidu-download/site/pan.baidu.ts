/**
 * Created by user on 2017/7/22/022.
 */

'use strict';

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

let o: IDemo = {

	metadata: {
		include: [
			'http*://pan.baidu.com/s/*',
		],
		match: [
			'*://pan.baidu.com/disk/home*',
			'*://yun.baidu.com/disk/home*',
			'*://pan.baidu.com/s/*',
			'*://yun.baidu.com/s/*',
			'*://pan.baidu.com/share/link*',
			'*://yun.baidu.com/share/link*',
		],
		nomatch: [],
		exclude: [],

		grant: [
			'GM_setClipboard',
			'unsafeWindow',
		],
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
		/**
		 * https://greasyfork.org/zh-TW/forum/discussion/35536/x
		 */
		let { detectPage, PanHelper, PanShareHelper, init } = require('root/lib/site/baidu/pan/index');

		$(function(){
			init($, _url_obj);
		});
	},

	adblock(_url_obj = global._url_obj)
	{
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([

			].join())
		;

		return _dom;
	},

};

export = o as IDemo;
