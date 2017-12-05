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

	metadata: {
		include: [
			'http*://q.dmzj.com/*',
		],
		match: [
			'*://q.dmzj.com/*',
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
			.GM_addStyle([])
		;

		let novelDefault = {
			LINE_NUM: 22
			, LINE_CHAR_NUM: 28
			, FONT_TYPE: 'gothic'
			, GOTHIC_FONT_FAMILY: [
				'"メイリオ"'
				, '"IPAexゴシック"'
				, '"IPAゴシック"'
				, '"ＭＳ ゴシック"'
				, '"SimSun"'
				, 'monospace'
			].join(', ')
			, MINCHO_FONT_FAMILY: [
				'"IPAex明朝"'
				, '"IPA明朝"'
				, '"ＭＳ 明朝"'
				, '"SimSun"'
				, 'serif'
			].join(', ')
			, FONT_SIZE: '20px'
			, FONT_WEIGHT: 'normal'
			, CHAR_HEIGHT: '1.1em'
			, MARGIN_TOP: '50px'
			, SPACE_BETWEEN_LINES: '1em'
			, COLOR: '#2F4F4F'
			, BACKGROUND_COLOR: '#D3D3D3'
			, TOOLBAR_VISIBLE: true
			, AUTO_VERTICAL_WRITING: true
		}

		let novelConfig = {
			line: 31,
			char: 23,
			fontSize: 14,
			fontFamily: `Consolas, Noto Sans SC, Microsoft Yahei UI, sans-serif`,

			lineHeight: null,
		};

		novelConfig.lineHeight = Math.ceil(novelConfig.fontSize * 1.25);

		let chapter_contents_first = $('#chapter_contents_first');

		if (chapter_contents_first.length)
		{
			$(`
<link rel="stylesheet" _href="//fonts.googleapis.com/earlyaccess/cwtexyen.css"/>
<link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notosanssc.css"/>
`)
				.appendTo('body')
			;

			greasemonkey.GM_addStyle([
				//`@import url(//fonts.googleapis.com/earlyaccess/cwtexyen.css);`,
				`.txt .con .tit, #full_contents {
				font-size: ${novelConfig.fontSize}px;
				font-family: ${novelConfig.fontFamily};
				line-height: ${novelConfig.lineHeight}px;
				text-shadow: 0 0.5px 0 rgba(228, 228, 228, 0.8), 0 0 1px rgba(0, 0, 0, 0.75);
				}`,
				`#full_contents { 
				
				width: ${novelConfig.fontSize * novelConfig.char}px;
				height: ${novelConfig.lineHeight * novelConfig.line}px;
				overflow: hidden;
				
				text-align: left;
				margin: 0; padding: 0; 
				margin: auto;
				/*
				text-shadow: 0 0.5px 0 rgba(255, 255, 255, 0.8), 0 0 1px rgba(0, 0, 0, 0.75);
				*/
				
				}`,
				`#full_contents * { margin: 0; padding: 0; font-family: unset; }`,
				`#full_contents p, #full_contents br { line-height: ${novelConfig.lineHeight}px; }`,
				`#full_contents p:before { content: ''; display: inline-block; }`,
				`#full_contents_wrap { padding: 0; margin: auto; text-align: center; padding: 10px; }`,
				`body {
				
				-webkit-transition: background-color 500ms linear;
				-moz-transition: background-color 500ms linear;
				-o-transition: background-color 500ms linear;
				-ms-transition: background-color 500ms linear;
				transition: background-color 500ms linear;
				
				}`,
				`body, body.light_on { background-color: #e6d7bd !important; color: #131d24; }`,
				`body.light_off { background-color: #4f535b !important; color: rgb(221, 221, 221); }`,
			]);

			// @ts-ignore
			let pages_count = unsafeWindow.g_chapter_pages_count;

			console.log(pages_count);

			$('<div id="full_contents"/>').insertBefore(chapter_contents_first);

			let full_contents = $('#full_contents');

			full_contents.wrap('<div id="full_contents_wrap"/>');

			if (pages_count > 1)
			{
				require('root/lib/greasemonkey/web/xhr').ajaxSetup();
				//const Promise = require('bluebird');

				let pa = [];

				pa.push(Promise.resolve($('#chapter_contents_first').html()));

				// @ts-ignore
				for (let i in unsafeWindow.g_chapter_pages_url)
				{
					// @ts-ignore
					let url = (unsafeWindow.g_chapter_pages_url)[i];

					if (!url)
					{
						continue;
					}

					let p = $
						.ajax({
							url: url,
							method: 'GET',
							dataType: 'html',
						})
						.promise()
					;

					pa.push(p);
				}

				await Promise
					.all(pa)
					.then(ret =>
					{
						return ret.join('');
					})
					.then(html =>
					{
						full_contents.html(html);

						return html;
					})
				;
			}
			else
			{
				full_contents.html(chapter_contents_first.html())
			}

			$('#full_contents_wrap').siblings().not('.tit, h1, #full_contents_wrap, #full_contents').hide();

			const comic_style = require('root/lib/comic/style');

			let _div_page = $('<div/>')
				.css(comic_style.page)
				.css(comic_style.bg_dark)
				.css(comic_style.bg_dark_border)
				.css(comic_style.bg_dark_text)
				.css(comic_style.page_position)
				.appendTo('body')
			;

			let p_all = 0;
			let p_now = 0;
			let p_h = novelConfig.lineHeight * novelConfig.line;

			let _div_padding = $('<div/>')
				.appendTo(full_contents)
			;

			p_all = Math.ceil(full_contents[0].scrollHeight / p_h);

			console.log(p_all, full_contents[0].scrollHeight, full_contents[0].scrollHeight / p_h);

			//let h = Math.floor((p_all * full_contents.height()) - full_contents[0].scrollHeight - 1);
			let h = (novelConfig.lineHeight * novelConfig.line * p_all) - full_contents[0].scrollHeight;

			_div_padding
				.height(h)
			;

			const throttle = require('throttle-debounce/throttle');

			full_contents
				.scrollTop(0)
				.on('scroll.page', function (event)
				{
					let _this = $(this);

					//p_all = Math.ceil(this.scrollHeight / p_h);
					//p_now = Math.floor((_this.scrollTop() + 1) / p_h);

					if (p_now >= p_all)
					{
						p_now = p_all - 1;
					}

					if (p_now < 0)
					{
						p_now = 0;
					}

					_div_page.text(`${p_now + 1} / ${p_all}`);

					//console.log([p_now, p_all], _this.scrollTop(), [p_h, _this.height(), this.scrollHeight]);

					$(window).triggerHandler('resize');
				})
				.triggerHandler('scroll.page')
			;

			try
			{
				let light_a = $('#light_a');

				if (light_a.is('.off'))
				{
					$('body').addClass('light_off');
				}

				light_a.on('click', function ()
				{
					light_a.is('.off') ? $('body').addClass('light_off') : $('body').removeClass('light_off');
				});
			}
			catch (e)
			{
				console.log(e);
			}

			$(window)
				.on('resize', throttle(100, function ()
				{
					_div_page
						.offset({
							top: full_contents.offset().top + 50,
							left: full_contents.offset().left - _div_page.outerWidth() - 10,
						})
					;
				}))
				.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
				{
					const keycodes = require('keycodes');
					const _uf_done = require('root/lib/event/done');

					switch (event.which)
					{
						case keycodes('pageup'):
						case keycodes('left'):

							_uf_done(event);

							p_now = p_now - 1;

							full_contents
								.scrollTop((p_now * p_h))
							;

							full_contents.triggerHandler('scroll.page');

							break;
						case keycodes('pagedown'):
						case keycodes('right'):

							_uf_done(event);

							console.log(p_now);

							p_now = p_now + 1;

							console.log(p_now, full_contents.scrollTop());

							full_contents
								.scrollTop((p_now * p_h))
							;

							full_contents.triggerHandler('scroll.page');

							break;
					}
				}))
				.triggerHandler('resize')
			;
		}
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
