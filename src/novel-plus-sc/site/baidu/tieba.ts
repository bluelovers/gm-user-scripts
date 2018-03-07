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
		greasemonkey.addStylesheet(require('root/lib/comic/font').font.NotoSansTC);
		greasemonkey.addStylesheet(require('root/lib/comic/font').font.NotoSansJP);

		greasemonkey
			.GM_addStyle([
				`.d_post_content, .core_title_txt, .threadlist_title { 
				font-family: Consolas, Noto Sans CJK JP, Noto Sans CJK SC, Noto Sans CJK TC, Noto Sans JP, Noto Sans SC, Noto Sans TC, Noto Sans CJK, Microsoft Yahei UI, sans-serif; 
				text-shadow: 0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75); 
				}`,

				`.d_post_content { line-height: 1.45em; }`,
				`.d_post_content { color: #131d24; }`,
			])
		;

		if ($('.p_postlist').length)
		{
			greasemonkey
				.GM_addStyle([
					`.l_post_bright, .skin_normal .wrap1, .pb_content { background: #e6d7bd; }`,
					`.d_post_content_main { background: transparent; }`,
					`.core_title_wrap_bright { background: #fff9; }`,

					`.tbui_aside_float_bar { opacity: 0.5; } 
					.tbui_aside_float_bar:hover { opacity: 0.8; }`,

					`@media only screen and (max-width: 1000px)
					{
					
					.right_section { display: none; }
					.left_section { float: none; margin: auto; }
					
					.search_bright .search_ipt, .l_container, .content, .pb_content, .thread_theme_5, .pb_footer, .pb_footer .p_thread, .tb_rich_poster_container, .search_bright .search_form, .nav_list { width: auto; }
					
					}`,

					`@media only screen and (max-width: 800px)
					{
					
					.core_title_wrap_bright { width: 100%; }
					
					.d_post_content_main { padding-left: 0px; }
					.d_author, .d_author_anonym { display: none; }
					.p_content { padding-right: 0px; }
					
					.d_post_content_main { float: none;margin: auto; }
					
					}`,

				])
			;
		}

		const Promise = require('bluebird');
		await Promise.delay(500);

		await module.exports.adblock(_url_obj);

		$('.pb_footer, .l_thread_info')
			.on('DOMNodeInserted', function ()
			{
				module.exports.adblock(_url_obj)
			})
		;

	},

	adblock(_url_obj = global._url_obj)
	{
		//let novelText = require('root/lib/novel/text').enspace.create();
		//let novelText = require('root/lib/novel/text').novelText;
		let novelText = require('novel-text').novelText;

		$('.d_post_content')
			.add('h3.core_title_txt')
			.each(function ()
			{
				let _this = $(this);
				let _br = _this.find('br');

				let html: string = _this.html();

				_this.data('html-source', html);

				if (_br.length >= 10 || (_br.length == 0 && html.match(/\n/)))
				{
					html = trimHtml(html);

					if (!html.match(/<br>/) && html.match(/\n/))
					{
						// 隱藏功能: 將純文字內容轉為HTML

						html = html
							.replace(/[ \t　\r]+(\n)/ig, '$1')
							/*
							.replace(/([^「」【】《》『』（）“”])\n([“”「」【】《》『』（）])/ig, '$1\n\n$2')
							.replace(/([「」【】《》『』（）“”―])\n([^“”「」【】《》（）『』])/ig, '$1\n\n$2')
							.replace(/([^「」【】《》『』（）“”])\n([“”「」（）【】《》『』])/ig, '$1\n\n$2')
							.replace(/(）)\n([「」【】“”《》『』])/ig, '$1\n\n$2')
							.replace(/\n{3,}/ig, "\n\n")
							.replace(/\n/g, '<br>')
							*/
							.replace(/\n/g, '<br>')
						;

						_this.html(html);
						_br = _this.find('br');
					}

					if (1 || !html.match(/<br><br>/i))
					{
						// 修正無段落
						//_this.find('br').after('<br>');

						// 修正段落
						html = html
							.replace(/\r\n|\r|\n/g, '')
							.replace(/<br>/ig, "\n")
							.replace(/[ 　\t]+\n/g, "\n")
							.replace(/[\s　]+$/g, '')
							.replace(/^[\n \t]+/g, '')
							.replace(/\n{4,}/g, "\n\n\n\n")
						;

						if (!html.match(/[^\n]\n[^\n]/g))
						{
							let len = 1;

							//console.log(html);

							if (/\n\n\n/g.test(html))
							{
								//console.log(777);

								if (/[^\n]\n\n[^\n]/g.test(html))
								{
									//console.log(888);
								}
								else
								{
									//console.log(999);

									html = html
										.replace(/\n{2}/g, "")
									;
								}

								html = html
									.replace(/\n{3,}/g, "\n\n\n")
									.replace(/\n{2}/g, "\n")
								;
							}
							else
							{
								//console.log(666);

								html = html
									.replace(/\n{3,}/g, "\n\n\n")
									.replace(/\n\n/g, "\n")
								;
							}
						}

						html = html
							// for ts
							.toString()
							.trim()
							.replace(/([^\n「」【】《》“”『』（）](?:[！？?!。]*)?)\n((?:[—]+)?[「」“”【】《》（）『』])/ug, "$1\n\n$2")

							.replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n([^\n「」“”【】《》（）『』])/ug, "$1\n\n$2")
							.replace(/([^\n「」【】《》“”『』（）](?:[！？?!。]*)?)\n((?:[—]+)?[「」“”【】《》（）『』])/ug, "$1\n\n$2")

							.replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n([^\n「」“”【】《》（）『』])/ug, "$1\n\n$2")

							.replace(/(）(?:[！？?!。]*)?)\n([「」【】《》『』“”])/ug, "$1\n\n$2")

							/**
							 * https://tieba.baidu.com/p/5400503864
							 *
							 * 「第三试炼也，多亏了妮露而通过了吗……」
							 『心神守护的白羽毛』，这个从妮露那里收到的护身符，确实地守护了我的心。

							 */
							.replace(/([「」【】《》“”『』（）―](?:[！？?!。]*)?)\n((?:[「」“”【】《》（）『』])(?:[^\n]+)([^「」【】《》“”『』（）―](?:[！？?!。]*)?)\n)/ug, "$1\n$2\n")

							/**
							 * 住手，住手，我就是我。不是其他的任何人。
							 　表示出要必死地进行抵抗的意志，但是侵入脑内的这个『什么东西』，并不能被阻止。不能被，阻止……
							 */
							.replace(/(\n(?:[^　\n][^\n]+))\n([　])/g, '$1\n\n$2')

							/**
							 * 这样一直在这高兴着

							 。
							 */
							//.replace(/([^\n])(\n+)((?:[吧呢]*)?[。！？，、])\n/ug, "$1$3$2")

							.replace(/([^\n])(\n)(fin)(\n|$)/ig, "$1$2\n$3$4")
						;

						html = html
							.replace(/^\n+|[\s　]+$/g, '')
							.replace(/(\n){4,}/g, "\n\n\n\n")
							.replace(/(\n){3}/g, "\n\n")
							.replace(/\n/g, '<br>')
						;

						_this.html(html);

						_br = _this.find('br');
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

				_this.html(function (i, old)
				{
					return html = old
						.replace(/^\s+/g, '')
						.replace(/\s+$/g, '')
					;
				});

				_this.data('html-new', html);
			})
		;

		//console.debug(novelText._data_.words, novelText._cache_);
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
