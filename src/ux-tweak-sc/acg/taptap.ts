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
			'http*://www.taptap.com/*',
		],
		match: [],
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
			'.moment-content-box a',
			'.bbcode-body a',
		])
			.prop('target', '_blank')
		;

		greasemonkey.GM_addStyle([
			`body, html, :root { font-size: 9pt; font-family: initial; }`,
			`.bbcode-body, .topic-comments-list-v2 .item-text-body, .posts-item-v2 .item-text-header .taptap-user-name, topic-info, .comment-item__toggle-reply-list, .topic-v2-container .author-wrap .topic-info, .common-v2-list .content-text { font-size: 1rem; }`,
		]);
	},

	adblock(_url_obj = global._url_obj)
	{
		//
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add($('.topic-v2-container').parentsUntil('body').addBack().siblings())
			.add([
				'.btn[data-taptap-ajax="follow"]',
				'.post-item__text-footer button, .vote-up',
				'.post-bbcode-form, .tab-bar-box, .topic-operations__bottom',
				'.topic-operations__right-content',
				'#post-bbcode-form',
			].join())
		;

		return _dom;
	},

};

export = o as IDemo;
