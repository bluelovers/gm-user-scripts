/**
 * Created by user on 2017/11/26/026.
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

	metadata: {
		include: [
			'http*://masiro.moe/*',
			'http*://masiro.moe/*mod=viewthread*',
		],
		match: [],
		nomatch: [],
		exclude: [],

		grant: [
			'GM_registerMenuCommand',
			'GM_xmlhttpRequest',
			'unsafeWindow',
			'GM_deleteValue',
			'GM_getValue',
			'GM_listValues',
			'GM_setValue',
			'GM_openInTab',
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
		const keycodes = require('keycodes');
		const _uf_done = require('root/lib/event/done');
		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		])
			.prop('target', '_blank')
		;

		greasemonkey.GM_addStyle([
			`html, :root, body { font-size: 9pt; font-family: initial; }`,
			`#wp, .wp { max-width: 960px; width: 95%; }`,
			`.t_f, .t_f td { font-size: 1rem; }`,
			`#threadlist th .xst { font-size: 1rem; }`,
			`.pi { min-height: 16px; height: auto; }`,
			`@media only screen and (max-width: 950px) {`,

			`#hd .hdc > h2 { display: none; }`,
			`.fl_icn_g { display: none; }`,
			`.fl_g dl { margin-left: auto; }`,

			`}`,

			`.fl_tb .fl_g { opacity: 0.5; min-width: 150px; }`,
			`.fl_tb .fl_g._has_new_post { opacity: 0.75; }`,
			`.fl_tb .fl_g:hover { opacity: 1; }`,
		]);

		$('.fl_g')
			.each(function (index, elem)
			{
				let _row = $(elem);

				if (_row.find('dt .xw0.xi1[title]').length)
				{
					_row.addClass('_has_new_post');
				}
			})
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
