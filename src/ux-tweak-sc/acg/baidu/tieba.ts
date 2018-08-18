/**
 * Created by user on 2017/8/3/003.
 */

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';
import { IHTMLElement } from 'root/lib/dom/img/size';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

import { IBaiduTiebaPageData, IBaiduTiebaPostField } from 'root/lib/site/baidu/tieba';
import * as ILibSiteBaiduTieba from 'root/lib/site/baidu/tieba';

let o: IDemo = {

	metadata: {
		include: [
			'http*://tieba.baidu.com/*',
		],
		match: [
			'*://tieba.baidu.com/i/i/my_tie*',
			'*://tieba.baidu.com/i/i/my_reply*',
			'*://tieba.baidu.com/i/i/atme*',
			'*://tieba.baidu.com/i/i/storethread*',
			'*://tieba.baidu.com/pmc/*',
			'*://tieba.baidu.com/photo/*',
		],
		exclude: [],

		grant: [
			'GM_setClipboard',
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
		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		const libSiteBaiduTieba: typeof ILibSiteBaiduTieba = require('root/lib/site/baidu/tieba');
		const PromiseBluebird = await import('bluebird');

		$(window).on('load.link', function ()
		{
			_uf_dom_filter_link([
				'.u_itieba a, .u_news a, .u_username a, .com_userbar a, #j_u_username a',
			])
				.attr('target', '_blank')
			;

			$('.u_itieba a, .u_news a, .u_username a, .com_userbar a, #j_u_username a').attr('target', '_blank');
		}).triggerHandler('load.link');

		$('body').on('hover', '#j_u_username, .u_username, .u_username li, .u_ddl_con_top', function ()
		{
			$(window).triggerHandler('load.link');
		});

		greasemonkey
			.GM_addStyle([

				`.d_post_content { line-height: 1.45em; }`,

				//`.l_post_bright, .skin_normal .wrap1, .pb_content { background: #e6d7bd; }`,
				`.d_post_content_main { background: transparent; }`,
				//`.core_title_wrap_bright { background: #fff9; }`,

				`.tbui_aside_float_bar { opacity: 0.5; } 
					.tbui_aside_float_bar:hover { opacity: 0.8; }`,

				`@media only screen and (max-width: 1200px)
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

		greasemonkey
			.GM_addStyle([
				`#com_userbar { position: fixed; top: 55px; background: #fff9; }`,
				`#com_userbar .u_bdhome { display: none; }`,
				`.floor-check-miss { padding: 10px;background-color: #451159;border-radius: 5px;padding-bottom: 6px;color: #fff;text-align: center;margin: 5px;margin-left: auto;}`,
				`.floor-check-miss:hover { opacity: 0.9; }`,

				`.threadlist_title {
				word-wrap: break-word;
				word-break: break-all;
				white-space: normal;
				}`,

				`.see_lz { 
				margin-left: 1em;
				text-decoration: none !important; 
				font-size: 9pt;
				padding: 2px 8px 1px;
				text-shadow: initial;
				font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
				}`,

				`.icon-reply {
					width: 16px;
					height: 13px;
					display: inline-block;
					vertical-align: middle;
					background: url(//tb2.bdstatic.com/tb/static-pb/widget/forum_title/images/icon_reply_d8a44b9.png) no-repeat;
				}`,

				`.deepread-wrap { font-size: 9pt; }`,

				`.j_thread_list .threadlist_title .see_lz { 
				display: none; 
				}`,
				`.j_thread_list:hover .threadlist_title .see_lz { display: inline-block; }`,

				`.l_post._louzhubiaoshi_post { border: 1px solid #2d64b3; }`,

				`._post-toc { 
				display: none; 
				position: sticky; 
				max-width: 150px; 
				top: 55px; 
				float: left; 
				//margin-left: -150px;
				left: 150px;
				font-size: 0.7em;
				opacity: 0.5;
				overflow-x: hidden;
				}`,

				`._post-toc dt {  }`,
				`._post-toc dt a { padding-left: 3px; border-radius: 3px; }`,

				`._post-toc dt .icon-reply {
				 
				 margin-left: 3px;
border-radius: 100%;
background-color: #fff;
width: 18px;
background-position: center;
height: 18px;
				 
				 }`,

				`._post-toc dt { opacity: 0.7; }`,
				`._post-toc dt:hover { opacity: 1; }`,

				`._post-toc dt a:hover { background: #2d64b3; color: #FFF; }`,

				`._louzhubiaoshi_toc {  }`,
				`._louzhubiaoshi_toc a { background: #FF7F42; color: #FFF; font-weight: bold; }`,

				`._post-toc a { min-width: 100px; display: inline-block; line-height: 2em; min-height: 2em; }`,

				`._post-toc:hover { opacity: 1; }`,

				`@media only screen and (max-width: 1600px) {
					._post-toc { left: 100px; }
				}`,

				`@media only screen and (max-width: 1500px) {
					._post-toc { left: 50px; }
				}`,

				`@media only screen and (max-width: 1400px) {
					._post-toc { left: 10px; }
				}`,

				`@media only screen and (min-width: 1000px) {
					._post-toc { display: block; }
					
					html, body, :root
					{
						scroll-behavior: smooth;
					}
				}`,

				`.topic_list_box { max-height: 388px; height: auto; }`,
				`.topic_list_box .topic_list_hot { display: none; }`,
				`.topic_list_box:hover .topic_list_hot { display: block; }`,

				`.tbui_fbar_refresh { margin-top: 20px; }`,

				`._tbui_fbar_nav a {
				display: block; 
				height: 45px; 
				width: 45px; 
				text-align: center; 
				vertical-align: middle; 
				line-height: 45px; 
				background-color: #E4F0FD;
				background-color: #2C6099;
				color: #B2C7E2;
				margin-bottom: 7px;
				font-weight: bold;
				border-radius: 100%;
				}`,

				`._tbui_fbar_nav:hover a { background-color: #569AFC; color: #E9F1FC; }`,

				`.tbui_follow_fixed, .core_title_wrap_bright { position: sticky !important; top: 0px; }`,

			])
		;

		const throttle = require('throttle-debounce/throttle');
		const debounce = require('throttle-debounce/debounce');
		const _uf_done = require('root/lib/event/done');

		await PromiseBluebird.delay(250);

		let PageData: IBaiduTiebaPageData;

		let _toc_inited = false;

		let _toc_area = $('<div class="_post-toc"/>');
		let _toc = $('<dl style="list-style-type: unset;"/>').appendTo(_toc_area);

		$('body').on('DOMNodeInserted', '#com_userbar', function (event)
		{
			//console.log(event.type, this, event.target);

			if ($(event.target).is('#u_notify_item, .unread-num'))
			{
				$(window).triggerHandler('load.menu');
			}
		});

		$('#pb_content')
			.on('click', 'img.BDE_Image', function (event)
			{
				/**
				 * @type JQuery<HTMLElement>
				 */
				let _img = libSiteBaiduTieba.bde_image(this);

				if (_img && _img.length)
				{
					let name_id = _img.attr('data-id');

					let url;

					if (PageData && PageData.forum && PageData.thread)
					{
						url = [
							`http://tieba.baidu.com/photo/p?`,
							`kw=${PageData.forum.name_url}`,
							`&flux=1&tid=${PageData.thread.thread_id}`,
							`&pic_id=${name_id}`,
							`&pn=1&fp=2&see_lz=0&red_tag=s2698993533`,
						].join('')
					}
					else
					{
						url = _img.prop('src');
					}

					_uf_done(event);

					// @ts-ignore
					window.open(url, name_id);
				}
			})
		;

		$('body').on('DOMNodeInserted', '#thread_list .j_thread_list .media_box', debounce(500, async function (event)
		{
			let _img = $('img[id^="big_img_"]', this);

			0 && console.log({
				"this": this,
				target: event.target,
				_img,
			});

			_img.each(function ()
			{
				libSiteBaiduTieba.bde_image(this);
			});

		}));

		const CopyLib = require('root/lib/func/copy');

		$('body')
			.on('DOMNodeInserted DOMSubtreeModified', '#creative-platform-deepread-wrap', debounce(1000, async function (event)
			{
				console.log(event.type, this, event.target);
				let _this = $(this);

				if (!_this.length || !_this.is('#creative-platform-deepread-wrap:not([data-done])'))
				{
					return;
				}

				// @ts-ignore
				_this.attr('data-done', true);

				let deepread_content = $('#deepread-wrap .deepread-content');
				let deepread_nav = $('#deepread-nav', _this);

				let _a = $('<a title="點擊可複製貼子">點擊可複製貼子</a>');

				_a.on('click', function (event)
				{
					console.log(event.type, this, event.target);

					CopyLib.copyElem($('#deepread-wrap .deepread-content')[0]);
				});

				deepread_content.find('._remove_when_join').remove();

				_a.appendTo(deepread_nav);

				let _div = $('<div class="clearfix"/>');
				let t = $('.deepread-title, .deepread-author', _this);

				t.appendTo(_div);
				_div.insertAfter(deepread_nav);
			}))
		;

		let p_postlist: JQuery<HTMLElement>;
		let p_postlist_post: JQuery<HTMLElement>;

		$('body')
			.one('DOMNodeInserted DOMSubtreeModified', '.tbui_aside_float_bar', debounce(1000, async function (event)
			{
				let tbui_aside_float_bar = $('.tbui_aside_float_bar');

				let tbui_fbar_post = tbui_aside_float_bar.find('.tbui_fbar_post');

				let tbui_fbar_refresh = $('.tbui_fbar_refresh', tbui_aside_float_bar);

				if (!tbui_fbar_refresh.length)
				{
					tbui_fbar_refresh = $(`<li class="tbui_aside_fbar_button tbui_fbar_refresh"><a href="javascript:void(0)"></a></li>`)
						.insertAfter(tbui_fbar_post)
					;

					tbui_fbar_refresh.on('click', function ()
					{
						window.location.reload();
					});
				}

				if ($('#pb_content, #content_wrap').length)
				{
					$('.tbui_fbar_top, .tbui_fbar_top a', tbui_aside_float_bar)
						.off('click')
						.on('click', function (event)
						{
							_uf_done(event);

							let _t = $('#pb_content');
							let n = 0;

							if (_t.length)
							{
								n = $('#j_core_title_wrap')
									.outerHeight()
								;

//								$(window)
//								// @ts-ignore
//									.scrollTo(_t, 0 - n)
//								;
							}
							else
							{
								_t = $('#pb_content, #content_wrap');

								n = $('#head .search_main')
									.outerHeight()
								;

//								$(window)
//								// @ts-ignore
//									.scrollTo('#content_wrap', 0 - n)
//								;
							}

							n = libSiteBaiduTieba.scrollTopPadding(n);

							libSiteBaiduTieba
								.scrollToTieba(window, _t, 0 - n, undefined, true)
							;

						})
					;
				}

				let tbui_fbar_nav = $('._tbui_fbar_nav', tbui_aside_float_bar);

				//console.log(555, tbui_fbar_nav, $('#pb_content').length);

				if (!tbui_fbar_nav.length && $('#pb_content').length)
				{
					require('root/lib/jquery/onscreen');

					$(`<li class="tbui_aside_fbar_button _tbui_fbar_nav _tbui_fbar_down"><a href="javascript:void(0)" class="_tbui_fbar_down">DOWN</a></li>`)
						.insertAfter(tbui_fbar_post)
					;

					$(`<li class="tbui_aside_fbar_button _tbui_fbar_nav _tbui_fbar_up"><a href="javascript:void(0)" class="_tbui_fbar_up">UP</a></li>`)
						.insertAfter(tbui_fbar_post)
					;

					let tbui_fbar_nav = $('._tbui_fbar_nav', tbui_aside_float_bar);

					//console.log(666, tbui_fbar_nav);

					tbui_fbar_nav
						.off('click')
						.on('click', function (event)
						{
							_uf_done(event);

							let _this = $(this);

							if (!p_postlist || !p_postlist_post)
							{
								// @ts-ignore
								p_postlist = $('#j_p_postlist, #j_p_postlist #j_p_postlist, .p_postlist[id]', '#pb_content')
									.eq(-1)
								;

								p_postlist_post = $('.l_post:visible', p_postlist);
							}

							let _btn_up = _this.is('._tbui_fbar_up');

							let len = p_postlist_post.length;
							let i = 0;
							let j = 0;

//							let n = $('#j_core_title_wrap')
//								.outerHeight()
//							;
//							n = Math.max(n, 70);

							let n = libSiteBaiduTieba.scrollTopPadding('#j_core_title_wrap');

							//console.log(len, p_postlist_post);

							let _y = $(window).scrollTop();
							let _yh = $(window).innerHeight();
							let _y2 = _y + _yh;

							for (; i < len; i++)
							{
								//console.log(i);

								let elem = p_postlist_post.eq(i);
								let _see = elem.is(':onScreen');

								//console.log(i, _see, elem);

								let _h = elem.height();

								if (_see)
								{
									let _offset = elem.offset().top;

									if (_btn_up)
									{
										if (_y > _offset)
										{
											j = i;
										}
										else
										{
											j = i - 1;
										}

										break;
									}
									else
									{
										j = i + 1;
									}
								}
								else if (j > 0)
								{
									let elem = p_postlist_post.eq(i - 1);
									let _offset = elem.offset().top;

									//console.log(_offset, _y, _y2, _yh, _offset + 200, elem);

									if ((_offset + 200) >= _y2)
									{
										j = i - 1;
									}

									break;
								}
							}

							j = Math.max(-1, Math.min(j, len - 1));

							//console.log(j, i, n);

							if (j >= 0)
							{
								let elem = p_postlist_post.eq(j);
								let _offset = elem.offset().top;

								if (elem.length)
								{
									/*
									$(window)
										// @ts-ignore
										.scrollTo(elem, 0 - n, undefined, true)
									;
									*/

									libSiteBaiduTieba
										.scrollToTieba(window, elem, 0 - n, undefined, true)
									;
								}
							}
						})
					;
				}
			}))
		;

		$(window)
			.on('load.sign', debounce(1000, async function ()
			{
				sign(_url_obj);

				$(window).triggerHandler('scroll.load');
			}))
			.on('load.menu', throttle(1000, async function (event)
			{
				console.log(event.type, this, event.target);

				$('.u_news ul.j_category_list').each(function ()
				{
					let ul = $(this);

					if (!ul.find('a.j_cleardata[data-type="favts"]').length)
					{
						ul.prepend(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/storethread" target="_blank" data-type="favts">我的收藏</a></li>`);
					}

					if (!ul.find('a.j_cleardata[data-type="my_tie"]').length)
					{
						ul.prepend(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/my_tie" target="_blank" data-type="my_tie">我的贴子</a></li>`);
					}

					if (!ul.find('a.j_cleardata[data-type="atme"]').length)
					{
						ul.prepend(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/atme" target="_blank" data-type="atme">查看@提到我</a></li>`);
					}

					if (!ul.find('a.j_cleardata[data-type="reply"]').length)
					{
						ul.prepend(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/i/i/replyme" target="_blank" data-type="reply">查看回复</a></li>`);
					}

					if (!ul.find('a.j_cleardata[data-type="recycle"]').length)
					{
						//http://tieba.baidu.com/pmc/recycle
						ul.append(`<li class="category_item category_item_empty"><a class="j_cleardata" href="http://tieba.baidu.com/pmc/recycle" target="_blank" data-type="recycle">删贴信息</a></li>`);
					}
				});
			}))
			/*
			.on('load.init', async function ()
			{

			})
			*/
			.on('load.post', throttle(500, async function ()
			{
				PageData = updatePageData(PageData)

				$([
					'.feed_item a.itb_kw[title][href*="..."]',
				].join(',')).attr('href', function ()
				{
					let title = $(this).attr('title');

					return '/f?kw=' + title;
				});

				let floor: number;
				let last_post;

				let _toc_reset = true;

				// @ts-ignore
				p_postlist = $('#j_p_postlist, #j_p_postlist #j_p_postlist, .p_postlist[id]', '#pb_content')
					.eq(-1)
				;

				{
					let chk = $('> ._p_postlist_', p_postlist);

					if (chk.length)
					{
						return;
					}

					p_postlist.prepend('<div class="_p_postlist_" style="display: none"/>');
				}

//				$('.p_postlist > .l_post:has(.louzhubiaoshi_wrap)').css({
//					border: '1px solid #2d64b3',
//				});

				$([
					'.card_title_fname',
					'.simple_block_container .wrap_container .nowrap a',
					'.simple_block_container .t_forward .common_source_main a:eq(-1)',
				].join(',')).each(function ()
				{
					let title = $(this).attr('title');

					if (title)
					{
						$(this).text(title + (title.slice(-1) == '吧' ? '' : '吧'));
					}
				});

				p_postlist_post = $('.l_post:visible', p_postlist);

				//console.log(p_postlist, p_postlist_post);

				p_postlist_post
					.each(function ()
					{
						if (!_toc_inited)
						{
							_toc_inited = true;
							_toc_area
							//.prependTo('#container')
								.insertBefore('#container')
							;
						}

						let _this = $(this);

						let _field: IBaiduTiebaPostField;
						try
						{
							let s = _this.attr('data-field');
							if (s)
							{
								_field = JSON.parse(s);
							}
						}
						catch (e)
						{

						}

						_field = Object.assign({
							author: {},
							content: {},
						}, _field);

						let floor_elem = _this.find('.post-tail-wrap > .tail-info:eq(-2)');
						//let c = Number(floor_elem.text().replace(/\D/g, ''));
						let c = _field.content.post_no;

						if (!c)
						{
							c = Number(floor_elem.text().replace(/\D/g, ''));
						}

						if (_toc_reset)
						{
							_toc_reset = false;
							_toc.empty();

							$('.card_top_wrap').outerHeight($('.card_top_wrap .card_top').outerHeight());

							$(window).triggerHandler('scroll.load');

							floor = c;

							last_post = _this;
						}

						//console.log(c, _field.author.user_name, _field);

						if (typeof c === 'number' && !Number.isNaN(c))
						{
							let is_louzhubiaoshi = (_field.author.user_name == PageData.thread.author);

							if (is_louzhubiaoshi)
							{
								_this.addClass('_louzhubiaoshi_post');
							}

							{
								let _a = $(`<dt></dt>`)
									.html(`<a href="javascript:void(0)">#${c} ` + $('.p_author .p_author_name', _this)
										.html() + '</a>')
								;

								_a.attr('title', _a.text());

								if (is_louzhubiaoshi)
								{
									_a.addClass('_louzhubiaoshi_toc');
								}

								if (_field.content.comment_num)
								{
									_a.find('a:eq(0)').append('<i class="icon-reply"/>');
								}

								_a.find('a:eq(0)').on('click', function ()
								{
									$(window).triggerHandler('scroll.load');
									// @ts-ignore

//									let fn = function ()
//									{
//										$(window)
//										// @ts-ignore
//											.scrollTo(_this, -80)
//										;
//									};
//
//									setTimeout(fn, 200);

									let n = libSiteBaiduTieba.scrollTopPadding('#j_core_title_wrap');

									libSiteBaiduTieba
										.scrollToTieba(window, _this, 0 - n, undefined, true)
									;

								});

								_a.appendTo(_toc);
							}

							//console.log(222, floor, c, last_post);

							if (c != floor)
							{
								if (c != floor + 1)
								{
									let a = [];
									for (let i = floor + 1; i < c; i++)
									{
										a.push(i);
									}

									if (a.length)
									{
										last_post.find('.d_post_content_main')
											.append(`<div class="floor-check-miss">請注意：${a[0]}${a.length > 1
												? ' ~ ' + a.slice(-1)
												: ''} 樓 可能已被吞文或刪除</div>`);
									}
								}

								floor = c;
								last_post = _this;
							}
						}
						else
						{
							console.error(c, floor);
						}

						_this.data('field-data', _field);
					})
					.filter(':not([data-floor-check])')
					.each(function ()
					{
						let _this = $(this);
						let _post = _this;

						// @ts-ignore
						_this.attr('data-floor-check', true);

						let floor_elem = _this.find('.post-tail-wrap > .tail-info:eq(-2)');

						try
						{
							if (_post.is(':not([data-loaded])'))
							{
								// @ts-ignore
								_post.attr('data-loaded', true);

								$('.d_post_content_main', _post).prepend($('<a/>')
									.text('#' + _post.data('field').content.post_no)
									.attr('href',
										'http://tieba.baidu.com/p/' + PageData.thread.thread_id + '?pid=' + _post.data(
										'field').content.post_id + '#' + _post.data('field').content.post_id
									)
									.attr('style',
										'float: right; z-index: 500; position: absolute; right: 0px; top: 0px; padding: 1px 5px;'
									)
									/*
									.on('click', function (event)
									{
										let text = _post.find('.d_post_content');

										try
										{
											text[0].select();
											document.execCommand('Copy');
										}
										catch (e)
										{
											console.error(e);
										}

										try
										{
											GMApi.GM_setClipboard(text.text().replace(/\r\n|\r(?!\n)|\n/g, "<br/>\n"));
										}
										catch (e)
										{
											console.error(e);
										}

										_uf_done(event);
									})
									*/
									.attr('onclick', function ()
									{
										let id = _post.find('.d_post_content').attr('id');

										return [
											`event.preventDefault()`,
											`var copyArea = document.getElementById('${id}')`,
											`try{copyArea.select();}catch(e){console.error(e)}`,
											`try{window.getSelection().removeAllRanges();}catch(e){}`,
											`try{var range = document.createRange();range.selectNode(copyArea);window.getSelection().addRange(range)}catch(e){console.error(e)}`,
											`try{document.execCommand('Copy')}catch(e){console.error(e)}`,
											`return false`
										].join(';')
									})
									.attr('title', '點擊可複製貼子')
								);

								floor_elem.wrapInner($('<a/>')
									.attr('href',
										'http://tieba.baidu.com/p/' + PageData.thread.thread_id + '?pid=' + _post.data(
										'field').content.post_id + '#' + _post.data('field').content.post_id
									)
									.on('click', _uf_done))
							}
						}
						catch (e)
						{}
					})
				;

				new Promise(function ()
				{
					// @ts-ignore
					$('img.BDE_Image', p_postlist_post).each(async function ()
					{
						libSiteBaiduTieba.bde_image(this);
					});

					// @ts-ignore
					$('.right_section div:has(> .topic_list_box)')
						.css('height', 'auto')
					;

					$(window).triggerHandler('scroll.load');
				});
			}))
			.on('load.list', throttle(1000, async function ()
			{
				let in_tieba_list = $('.head_content .card_title_fname').length;

				let _toc_reset = true;

				/**
				 * 處理貼子列表
				 */
				let ls = $('.j_thread_list .threadlist_title, .ihome_section .new_list .thread_name').each(function ()
				{
					let _this = $(this);

					let _t = _this.find('a.j_th_tit, a.title');

					if (_t.length && !_this.find('.see_lz').length)
					{
						if (0 && !_toc_inited)
						{
							_toc_inited = true;
							_toc_area
							//.prependTo('#content')
								.insertBefore('#content')
							;
						}

						if (0 && _toc_reset)
						{
							_toc_reset = false;
							_toc.empty();
						}

						let url = new URL(_t.prop('href'));

						// @ts-ignore
						url.searchParams.append('see_lz', 1);

						$('<a target="_blank" class="see_lz btn-sub btn-small">只看楼主</a>')
							.attr('href', url.toString())
							.appendTo($('<span/>')
								.css({
									display: 'inline-block',
									'vertical-align': 'inherit',
								})
								.appendTo(_this)
							)
						;

						if (0)
						{
							let _a = $(`<dt></dt>`)
								.html(`<a href="javascript:void(0)">` + $('.j_th_tit', _this)
									.text() + '</a>')
							;

							_a.attr('title', _a.text());

							_a.appendTo(_toc);
						}
					}
				});

				//console.log('load.list', ls);

				lazyload(_url_obj);
			}))
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('.pagination-default a.prev, .pagination-default a.pre, #image_original_container .image_original_prev');

						if (_a.length
							&& event.which == keycodes('right')
							&& _a.is('.image_original_prev, .image_original_next')
						)
						{

						}
						else if (_a.length)
						{
							_uf_done._uf_done2(event);
							_a[0].click();
						}
						else
						{
							console.log(event, _a);
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('.pagination-default a.next, #image_original_container .image_original_next');

						if (_a.length
							&& event.which == keycodes('right')
							&& _a.is('.image_original_prev, .image_original_next')
						)
						{

						}
						else if (_a.length)
						{
							_uf_done._uf_done2(event);
							_a[0].click();
						}
						else
						{
							console.log(event, _a);
						}

						break;
				}
			}))
			.on('load.scroll', async function ()
			{
				if ($(window).scrollTop() < 300)
				{
					// @ts-ignore
					//$(window).scrollTo('#pb_content, .head_content .card_title, #content, #tab_forumname');

					let n = libSiteBaiduTieba.scrollTopPadding('#j_core_title_wrap');

					libSiteBaiduTieba
						.scrollToTieba(window, '#pb_content, .head_content .card_title, #content, #tab_forumname', 0 - n, undefined, true)
					;

				}
			})
			// @ts-ignore
			.scrollTo('.head_content')
			.one('scroll', function (event)
			{
				console.log(event);

				if (_url_obj.fragment)
				{
					setTimeout(function ()
					{
						gotoFragment(_url_obj);
					}, 500);
				}

			})
			.on('scroll.reply', function (event)
			{
				if (event.namespace == 'reply')
				{
					//console.log(event);
				}
				else
				{

				}
			})
			.on('scroll.load', throttle(1000, async function (event)
			{
				let n = 0;

				$('.core_reply_wrapper:not([data-loaded])')
					.each(function ()
					{
						let core_reply_wrapper = $(this);
						// @ts-ignore
						core_reply_wrapper.attr('data-loaded', true);

						let loading_reply = core_reply_wrapper.find('.loading_reply');

						let core_reply = core_reply_wrapper.parents('.core_reply:eq(0)').eq(0);

						core_reply_handler(core_reply);

						let t = Number(core_reply_wrapper.prop('data-loaded-try') || 0);

						if (t < 5 && loading_reply.length)
						{
							n++;

							core_reply_wrapper.prop('data-loaded-try', t + 1);

							setTimeout(async function ()
							{
								let event = $.Event('scroll.reply', {
									pageY: core_reply_wrapper.offset().top,
								});

								$(window)
									.add('html, body')
									.trigger(event)
								;

								try
								{
									// @ts-ignore
									let event = unsafeWindow.$.Event('scroll.reply', {
										pageY: core_reply_wrapper.offset().top,
									});

									// @ts-ignore
									unsafeWindow.$(unsafeWindow)
										.add('html, body')
										.trigger(event)
									;
								}
								catch (e)
								{
									//console.error(e.toString());
								}

								try
								{
									let event = $.Event('scroll.reply', {
										pageY: core_reply_wrapper.offset().top,
									});

									$(unsafeWindow)
										.add('html, body')
										.trigger(event)
									;
								}
								catch (e)
								{
									//console.error(e.toString());
								}

								setTimeout(function ()
								{
									if (core_reply_wrapper.find('.loading_reply').length)
									{
										core_reply_wrapper.removeAttr('data-loaded');
									}
								}, 200);

								core_reply_handler(core_reply);
							}, 1000 + n * 100);
						}
					})
				;
			}))
			.triggerHandler('load')
		;

		$('body').on('DOMNodeInserted', '#frs_list_pager, #thread_list', debounce(500, function ()
		{
			$(window)
				.triggerHandler('load.list')
			;
		}));

		setTimeout(function ()
		{
			$(window)
				.triggerHandler('load.list')
			;
		}, 500);

		$('#frs_list_pager')
			.on('DOMNodeInserted.page', debounce(200, async function ()
			{
				//console.log(event.type, this, event.target);
				// @ts-ignore
				//$(window).scrollTo('.head_content .card_title, #content, #tab_forumname');

				libSiteBaiduTieba
					.scrollToTieba(window, '.head_content .card_title, #content, #tab_forumname')
				;

			}))
		;

//		$('body')
//			.on('DOMNodeInserted', '.pb_footer .l_thread_info', debounce(200, function (event)
//			{
//				console.log('DOMNodeInserted', this, event.target);
//				$(window).triggerHandler('load');
//			}))
//		;

		$('#j_core_title_wrap')
			.on('DOMNodeInserted', '.core_title_txt', throttle(200, async function (event)
			{
				//console.log(event.type, this, event.target);
				$(window).triggerHandler('load');
			}))
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add($('#container').parentsUntil('body').addBack().siblings())
			.add($('#footer').nextAll())
			.add([
				'.share_btn_wrapper, #celebrity, #my_tieba_mod, .right_section, .see-image-btn, #sign_mod',
				'#j_head_focus_btn, .deepread-btn, #icon-reply, .p_author_face.round-avatar, #tb_rich_poster_container',
				'.core_reply_wrapper .j_user_card',
				'body :hidden, iframe, script',
				'#footer, #pb-footer-header, #quick_reply',
				'.j_user_sign',

				'.p_author .d_icons, .save_face_card, .d_name_icon, .save_face_bg',

				'.icon_tbworld, .BDE_Smiley',
				'.louzhubiaoshi_wrap, .save_face_card',
			].join())
		;

		$('.d_badge_lv').removeAttr('class');

		//_dom.remove();

		return _dom;
	},
};

export = o as IDemo;

async function sign(_url_obj = global._url_obj, bool?: boolean)
{
	const Promise = require('bluebird');

	await Promise.delay(1000);

	let b = $('#j_head_focus_btn');
	let a = $('#sign_mod #signstar_wrapper a.j_cansign');

	if (a.length)
	{
		if (b.is('.cancel_focus'))
		{
			a[0].click();
			await Promise.delay(500);
			a[0].click();
			await Promise.delay(500);
			$('.j_succ_info.sign_succ1').hide();

			return true;
		}
		else if (!bool)
		{
			b.one('click.sign', function ()
			{
				sign(_url_obj, true);
			});
		}
	}

}

function lazyload(_url_obj)
{
	const libSiteBaiduTieba = require('root/lib/site/baidu/tieba');

	$('img.BDE_Image[data-original], img.threadlist_pic')
		.not('[data-done]')
		// @ts-ignore
		.attr('data-done', true)
		.attr('src', function (i, old)
		{
			let _this = $(this);
			let src = _this.attr('data-original');

			let _img = libSiteBaiduTieba.bde_image(_this.clone());

			if (_img)
			{
				_this.attr('bpic', _img.data('fullsrc'));
			}

			if (old != src)
			{
				return src;
			}
		})
	;
}

function core_reply_handler(_this)
{
	let chk = _this.find('.lzl_link_fold:visible, .loading_reply');
	let elem = _this.find('.core_reply_wrapper');

	let min_height = elem.css('min-height').replace(/px$/, '');
	let height = elem.height();

	0 && console.log(elem, {
		min_height,
		height,
		chk: chk.length,
	});

	if (min_height <= 50 || height <= 50)
	{
		// 處理捲動時會因為留言區的高度變動導致定位 以及 看到白色內容的問題
		elem.css('min-height', 'auto');
	}

	if (chk.length)
	{
		//elem.show();
	}
	else
	{
		//elem.hide();
	}

	//console.log(elem, chk);
}

function updatePageData(PageData?): IBaiduTiebaPageData
{
	return PageData = $.extend({}, {
		thread: {},
		// @ts-ignore
	}, unsafeWindow.PageData);
}

function gotoFragment(_url_obj = global._url_obj)
{
	if (_url_obj.fragment)
	{
		let _a = $(`.l_post_anchor[name="${_url_obj.fragment}"]`);

		if (_a.length)
		{
			const libSiteBaiduTieba: typeof ILibSiteBaiduTieba = require('root/lib/site/baidu/tieba');

			let n = libSiteBaiduTieba.scrollTopPadding('#j_core_title_wrap');

			libSiteBaiduTieba.scrollToTieba(window, _a, 0 - n);

			return true;
		}

		return null;
	}

	return false;
}
