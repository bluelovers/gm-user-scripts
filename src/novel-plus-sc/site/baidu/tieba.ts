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

	metadata: {
		include: [

		],
		match: [
			'*://tieba.baidu.com/*',
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

		greasemonkey.addStylesheet(require('root/lib/comic/font').font.NotoSansSC);

		greasemonkey
			.GM_addStyle([
				`.d_post_content, .core_title_txt, .threadlist_title { 
				font-family: Consolas, Noto Sans SC, Microsoft Yahei UI, sans-serif; 
				text-shadow: 0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75); 
				}`,
				`.d_post_content { line-height: 1.4em; }`,
			])
		;

		let novelText = require('root/lib/novel/text').enspace.create();

		$('.d_post_content')
			.each(function ()
			{
				let _this = $(this);

				if (_this.find('br').length >= 10 && !_this.html().match(/<br\/?>\s*<br\/?>/i))
				{
					_this.find('br').after('<br/>');
				}

				_this
					.find('*')
					.addBack()
					.contents()
					// @ts-ignore
					.filter(function ()
					{
						return this.nodeType === 3 && this.nodeValue && this.nodeValue.replace(/[\s\r\n　]+/ig, '');
					})
					.each(function (index, elem)
					{
						let _this = $(this);

						let _t = novelText.replace(_this.text(), {
							words: true,
						});

						if (this.nodeValue != _t)
						{
							this.nodeValue = _t;
						}
					})
				;
			})
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

