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
			'http*://ncode.syosetu.com/*'
		],
		match: [
			'*://nl.syosetu.com/*',
			'*://ncode.syosetu.com/*',
			'*://novel18.syosetu.com/*',
			'*://nkx.syosetu.com/*',
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

		let novel_contents = $('#novel_contents');

		if (!novel_contents.find('.novel_sublist, .index_box').length)
		{
			greasemonkey.GM_addStyle([
				`._fake_p { display: block; }`,
				`._fake_p:after { content: " "; }`,

				`#novel_color { width: auto; max-width: 730px; font-size: 14px; line-height: 1.6em !important; }`,
				`#novel_honbun, #novel_p, #novel_a { width: auto; max-width: 600px; }`,
				`#novel_color, #novel_honbun, #novel_p, #novel_a { font-size: 14px; line-height: 1.6em; }`,

			]);

			$('#novel_p').append("<p class='p-hr'><br/>=====================================<br/><br/></p>");
			$('#novel_a').prepend("<p class='p-hr'><br/><br/>=====================================<br/><br/></p>");

			$('.novelview_navi, #novel_header')
				.on('click', function ()
				{
					$('.p-hr').css('color', function ()
					{
						return $('body').css('background-color');
					});
				})
				.triggerHandler('click')
			;

			if (0 && $('#novel_honbun').length)
			{
				//const minifyHTML = require('root/lib/func/html').minifyHTML;
				const crlf = require('crlf-normalize').crlf;

				$('#novel_honbun').html(function (i, old)
				{
					return crlf(old).replace(/\n/g, '');
				})
			}

			$('#novel_honbun, #novel_p, #novel_a')
				.addClass('_fake_pre')
				.find('p')
				.each(function(){

					let _this = $(this);

					let elem = $('<div/>')
						.html(_this.html())
						.attr('class', _this.attr('class'))
						.attr('id', _this.attr('id'))
						.attr('style', _this.attr('style'))
						.addClass('_fake_p')
					;

					_this
						.after(elem)
						//.after('<br/>')
						.remove()
					;
				})
			;

			return;
		}

		const ENABLE_CLASS = 'enable-syosetu-list-number';

		greasemonkey.GM_addStyle([

			/*
			`#novel_contents .novel_sublist2 .subtitle:after { content: "#" attr(data-id) " "; font-size: 8pt; font-family: Consolas; margin-left: 0.5em; }`,
			`#novel_contents .novel_sublist2 .subtitle:before { content: "#" attr(data-id-sub) " "; font-size: 8pt; font-family: Consolas; min-width: 3em; display: inline-block; }`,

			`#novel_contents .novel_sublist a[data-id]:after { content: "#" attr(data-id) " "; font-size: 8pt; font-family: Consolas; margin-left: 0.5em; }`,
			`#novel_contents .novel_sublist a[data-id-sub]:before { content: "#" attr(data-id-sub) " "; font-size: 0.7em; font-family: Consolas; min-width: 3em; display: inline-block; }`,
			*/

			`#novel_contents.enable-syosetu-list-number .novel_sublist2 .subtitle:after, #novel_contents.enable-syosetu-list-number .novel_sublist a[data-id]:after, #novel_contents.enable-syosetu-list-number .novel_sublist2 .subtitle:before, #novel_contents.enable-syosetu-list-number .novel_sublist a[data-id-sub]:before { font-size: 0.7em; font-family: Consolas; min-width: 3em; display: inline-block; opacity: 0.6; }`,
			`#novel_contents .novel_sublist2 .subtitle:hover:after, #novel_contents .novel_sublist li:hover a[data-id]:after, #novel_contents .novel_sublist2 .subtitle:hover:before, #novel_contents .novel_sublist li:hover a[data-id-sub]:before { opacity: 1; }`,

			`#novel_contents.enable-syosetu-list-number .novel_sublist2 .subtitle:after, #novel_contents.enable-syosetu-list-number .novel_sublist a[data-id]:after { content: "#" attr(data-id) ""; margin-left: 0.5em; }`,
			`#novel_contents.enable-syosetu-list-number .novel_sublist2 .subtitle:before, #novel_contents.enable-syosetu-list-number .novel_sublist a[data-id-sub]:before { content: "#" attr(data-id-sub) ""; }`,
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

		novel_contents.addClass(ENABLE_CLASS);

		let btn = $(`<div class="btn-${ENABLE_CLASS}"></div>`);

		greasemonkey.GM_addStyle([

			`.btn-${ENABLE_CLASS}:before { content: " " attr(data-text) " "; display: block; height: 1em; text-align: center; margin: auto; font-size: 0.9rem; line-height: 1; background-color: #1f2448; color: #fff; padding: 5px; border-radius: 1em; width: 90%; font-family: Consolas; }`,

			`.btn-${ENABLE_CLASS} { text-align: center; margin: auto; opacity: 0.7; }`,
			`.btn-${ENABLE_CLASS}:hover { opacity: 1; }`,
		]);

		if (novel_contents.find('.index_box').length)
		{
			btn.insertBefore(novel_contents.find('.index_box').eq(0));
		}
		else if (novel_contents.find('.novel_sublist').length)
		{
			btn.insertBefore(novel_contents.find('.novel_sublist').eq(0));
		}

		btn = $(`.btn-${ENABLE_CLASS}`).eq(0);

		if (btn.length)
		{
			btn
				.on('mousedown.click touchend.click', function ()
				{
					novel_contents.toggleClass(ENABLE_CLASS);

				})
				.on('mousedown.class touchend.class', function ()
				{
					let bool = novel_contents.hasClass(ENABLE_CLASS);

					let text = bool ? 'ON' : 'OFF';

					btn
					//.text(text)
						.attr('data-text', text)
					;

				})
				.triggerHandler('mousedown.class')
			;
		}

		//console.log(btn);
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
