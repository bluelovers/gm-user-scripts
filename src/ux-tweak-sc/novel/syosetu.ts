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
			'http*://syosetu.com/*',
		],
		match: [
			'*://nl.syosetu.com/*',
			'*://ncode.syosetu.com/*',
			'*://novel18.syosetu.com/*',
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
			'#novel_contents .novel_sublist2 .subtitle a',
		].join(','))
			.prop('target', '_blank')
		;

		adult_chk();

		greasemonkey.GM_addStyle([
			`#novel_contents .novel_sublist2 .subtitle:after { content: "#" attr(data-id) " "; font-size: 8pt; font-family: Consolas; margin-left: 0.5em; }`,
			`#novel_contents .novel_sublist2 .subtitle:before { content: "#" attr(data-id-sub) " "; font-size: 8pt; font-family: Consolas; min-width: 3em; display: inline-block; }`,

			`#novel_contents .novel_sublist a[data-id]:after { content: "#" attr(data-id) " "; font-size: 8pt; font-family: Consolas; margin-left: 0.5em; }`,
			`#novel_contents .novel_sublist a[data-id-sub]:before { content: "#" attr(data-id-sub) " "; font-size: 8pt; font-family: Consolas; min-width: 3em; display: inline-block; }`,
		]);

		// @ts-ignore
		$(window).scrollTo('#novel_no, .novel_subtitle', 0 - $('#novel_header').height());

		$('#novel_contents .novel_sublist2 .subtitle').attr('data-id', function (index, old)
		{
			$(this).html($(this).html().replace(/[\t\r\n]/g, '').trim());

			return index + 1;
		});

		$('#novel_contents .novel_sublist > ul > li:not(.chapter)')
			.each(function (index)
			{
				$(this).html($(this).html().replace(/[\t\r\n]/g, '').trim());

				$('> a:eq(0)', this).attr('data-id', function ()
				{
					return index + 1;
				})
			})
		;

		let iv = 0;
		let ic = 1;

		// @ts-ignore
		$('> .chapter_title, > .novel_sublist2', '#novel_contents .index_box')
			.each(function ()
			{
				let _this = $(this);

				_this.html(_this.html().replace(/[\t\r\n]/g, '').trim());

				if (_this.is('.chapter_title'))
				{
					iv++;
					ic = 1;
				}
				else if (_this.is('.novel_sublist2'))
				{
					_this.find('.subtitle').attr('data-id-sub', ic);
					ic++;
				}
			})
		;

		iv = 0;
		ic = 1;

		$('#novel_contents .novel_sublist > ul > li')
			.each(function ()
			{
				let _this = $(this);

				_this.html(_this.html().replace(/[\t\r\n]/g, '').trim());

				if (_this.is('.chapter'))
				{
					iv++;
					ic = 1;
				}
				else
				{
					_this.find('> a:eq(0)').attr('data-id-sub', function ()
					{
						return ic++;
					});
				}
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
				'#pageBottom, #novel_header, #footer',
			].join())
		;

		return _dom;
	},

};

function adult_chk()
{
	let days = 365;

	let date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	// @ts-ignore
	let _expires = date.toGMTString();

	_expires = ';expires=' + _expires;

	document.cookie = 'over18=yes; Domain=.syosetu.com; Path=/' + _expires;

	let _a = $('#modal #yes18[data-url]');

	if (_a.length)
	{
		window.location.href = _a.attr('data-url');

		return true;
	}
}

export = o as IDemo;
