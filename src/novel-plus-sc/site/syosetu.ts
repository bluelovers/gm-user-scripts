/**
 * Created by user on 2017/12/5/005.
 */

"use strict";

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

let o: IDemo = {

	//priority: 100,

	disable: true,

	metadata: {
		include: [
			//
		],
		match: [
			'*://*.syosetu.com/*',
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
		_uf_dom_filter_link([
			//
		].join(','))
			.prop('target', '_blank')
		;

		greasemonkey
			.GM_addStyle([
				//`#novel_honbun, .novel_view, #novel_ex, .novel_sublist2 { font-family: "メイリオ","IPAexゴシック","IPAゴシック","ＭＳ ゴシック","SimSun",monospace; }`,

				//`#novel_honbun, .novel_view { line-height: 1.6em !important; }`,
			])
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

		return _dom;
	},

};

export = o as IDemo;

