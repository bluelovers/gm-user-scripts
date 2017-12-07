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
		include: [],
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
		greasemonkey.addStylesheet(require('root/lib/comic/font').font.NotoSansSC);
		//greasemonkey.addStylesheet(require('root/lib/comic/font').font.NotoSansTC);

		greasemonkey
			.GM_addStyle([
				`.d_post_content, .core_title_txt, .threadlist_title { 
				font-family: Consolas, Noto Sans SC, Microsoft Yahei UI, sans-serif; 
				text-shadow: 0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75); 
				}`,
				`.d_post_content { line-height: 1.45em; }`,
			])
		;

		const Promise = require('bluebird');
		await Promise.delay(500);

		await module.exports.adblock(_url_obj);

	},

	adblock(_url_obj = global._url_obj)
	{
		let novelText = require('root/lib/novel/text').enspace.create();

		$('.d_post_content')
			.add('h3.core_title_txt')
			.each(function ()
			{
				let _this = $(this);
				let _br = _this.find('br');

				let html = _this.html();

				if (_br.length >= 10 || (_br.length == 0 && html.match(/\n/)))
				{
					html = trimHtml(html);

					if (!html.match(/<br>/) && html.match(/\n/))
					{
						// 隱藏功能: 將純文字內容轉為HTML

						html = html
							.replace(/[ \t　\r]+(\n)/ig, '$1')
							.replace(/([^「」【】《》『』（）])\n([「」【】《》『』（）])/ig, '$1\n\n$2')
							.replace(/([「」【】《》『』（）―])\n([^「」【】《》（）『』])/ig, '$1\n\n$2')
							.replace(/([^「」【】《》『』（）])\n([「」（）【】《》『』])/ig, '$1\n\n$2')
							.replace(/(）)\n([「」【】《》『』])/ig, '$1\n\n$2')
							.replace(/\n{3,}/ig, "\n\n")
							.replace(/\n/g, '<br>')
							.replace(/\n/g, '<br>')
						;

						_this.html(html);
					}

					if (!html.match(/<br><br>/i))
					{
						// 修正無段落
						_this.find('br').after('<br>');
					}
					else if (_br.length >= (2 * 4 * 3) && html.split(/(?:<br><br>)/ig).length <= 4)
					{
						// 增加分行
						_this.find('br').after('<br>');

						html = _this.html();
						html = trimHtml(html);

						html = html
							.replace(/(<br>\s*<br\s*\/?>\s*(?:<br\s*\/?>\s*)+)/ig, '<br><br><br>')
						;

						_this.html(html);
					}
					else if (html.split(/(<br><br><br>)/ig).length >= (1 || 10))
					{
						// 減少分行
						html = html
							.replace(/(<br><br><br>)/ig, '<br><br>')
						;

						_this.html(html);
					}
				}

				_this
					.find('*')
					.addBack()
					.not('.core_title_txt a')
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

		console.debug(novelText._data_.words, novelText._cache_);
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([].join())
		;

		return _dom;
	},

};

export = o as IDemo;

function trimHtml(html): string
{
	return html
		.toString()
		.replace(/^\s+/, '')
		.replace(/<br(?:\s+\/?|\s*\/)>/ig, '<br>')
		.replace(/<br>\s*<br>/ig, '<br><br>')
		.replace(/<br>\s*<br>/ig, '<br><br>')
		.replace(/\s*(?:\<br\>)+\s*$/ig, '')
		.replace(/\s*(?:\<br\>)+\s*$/ig, '')
		;
}
