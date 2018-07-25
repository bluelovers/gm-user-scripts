/**
 * Created by user on 2017/8/3/003.
 */

'use strict';

module.exports = {

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

	main(_url_obj = global._url_obj)
	{
		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

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

				`.deepread-wrap { font-size: 9pt; }`,

				`.j_thread_list .threadlist_title .see_lz { 
				display: none; 
				}`,
				`.j_thread_list:hover .threadlist_title .see_lz { display: inline-block; }`,

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

			])
		;

		const throttle = require('throttle-debounce/throttle');
		const debounce = require('throttle-debounce/debounce');
		const _uf_done = require('root/lib/event/done');
		let PageData;

		let _toc_inited = false;

		let _toc_area = $('<div class="_post-toc"/>');
		let _toc = $('<dl style="list-style-type: unset;"/>').appendTo(_toc_area);

		$('body').on('DOMNodeInserted', '#com_userbar', debounce(1000, function ()
		{
			$(window).triggerHandler('load.menu');
		}));

		$(window)
			.on('load.sign', debounce(1000, function ()
			{
				sign(_url_obj);

				$(window).triggerHandler('scroll.load');
			}))
			.on('load.menu', debounce(1000, function ()
			{
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
			.on('load', debounce(200, function ()
			{
				PageData = $.extend({}, {
					thread: {},
				}, unsafeWindow.PageData);

				$('.p_postlist > .l_post:has(.louzhubiaoshi_wrap)').css({
					border: '1px solid #2d64b3',
				});

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

				$([
					'.feed_item a.itb_kw[title][href*="..."]',
				].join(',')).attr('href', function ()
				{
					let title = $(this).attr('title');

					return '/f?kw=' + title;
				});

				let floor;
				let last_post;
				let n = 0;

				let _toc_reset = true;

				$('.p_postlist .l_post')
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

						if (_toc_reset)
						{
							_toc_reset = false;
							_toc.empty();

							$('.card_top_wrap').outerHeight($('.card_top_wrap .card_top').outerHeight());

							$(window).triggerHandler('scroll.load');
						}

						let _this = $(this);

						let floor_elem = _this.find('.post-tail-wrap > .tail-info:eq(-2)');
						let c = Number(floor_elem.text().replace(/\D/g, ''));

						if (c && !Number.isNaN(c))
						{
							let _a = $(`<dt></dt>`)
								.html(`<a href="javascript:void(0)">#${c} ` + $('.p_author .p_author_name', _this).html()+'</a>')
							;

							_a.attr('title', _a.text());

							_a.on('click', function ()
							{
								$(window).triggerHandler('scroll.load');
								$(window).scrollTo(_this, -70);
							});

							_a.appendTo(_toc);
						}
					})
					.filter(':not([data-floor-check])')
					.each(function ()
					{
						n++;

						let _this = $(this);
						let _post = _this;

						_this.attr('data-floor-check', true);

						let floor_elem = _this.find('.post-tail-wrap > .tail-info:eq(-2)');

						let c = Number(floor_elem.text().replace(/\D/g, ''));

						if (Number.isNaN(c) || Number.isNaN(floor))
						{
							console.error(floor_elem, c, floor);
						}

						if (typeof floor == 'number' && c != floor + 1 && !Number.isNaN(c))
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
							else
							{
								console.error(floor_elem, c, floor, a);
							}
						}

						floor = c;
						last_post = _this;

						try
						{
							if (_post.is(':not([data-loaded])'))
							{
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

				$(window).triggerHandler('scroll.load');
			}))
			.on('load.list', throttle(500, function ()
			{
				let ls = $('.j_thread_list .threadlist_title, .ihome_section .new_list .thread_name').each(function ()
				{
					let _this = $(this);

					let _t = _this.find('a.j_th_tit, a.title');

					if (_t.length && !_this.find('.see_lz').length)
					{
						let url = new URL(_t.prop('href'));

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
					}
				});

				console.log('load.list', ls);
			}))
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('.pagination-default a.prev, .pagination-default a.pre');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}
						else
						{
							console.log(event, _a);
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('.pagination-default a.next');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}
						else
						{
							console.log(event, _a);
						}

						break;
				}
			}))
			.on('load.scroll', function ()
			{
				if ($(window).scrollTop() < 300)
				{
					$(window).scrollTo('#pb_content, .head_content .card_title, #content, #tab_forumname');
				}
			})
			.scrollTo('.head_content')
			.one('scroll', function (event)
			{
				console.log(event);
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
			.on('scroll.load', throttle(1000, function (event)
			{
				let n = 0;

				$('.core_reply_wrapper:not([data-loaded])')
					.each(function ()
					{
						let core_reply_wrapper = $(this);
						core_reply_wrapper.attr('data-loaded', true);

						let loading_reply = core_reply_wrapper.find('.loading_reply');

						let core_reply = core_reply_wrapper.parents('.core_reply:eq(0)').eq(0);

						core_reply_handler(core_reply);

						let t = Number(core_reply_wrapper.prop('data-loaded-try') || 0);

						if (t < 5 && loading_reply.length)
						{
							n++;

							core_reply_wrapper.prop('data-loaded-try', t + 1);

							setTimeout(function ()
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
									let event = unsafeWindow.$.Event('scroll.reply', {
										pageY: core_reply_wrapper.offset().top,
									});

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
			$(window).triggerHandler('load.list');
		}));

		setTimeout(function ()
		{
			$(window).triggerHandler('load.list');
		}, 500);

		$('#frs_list_pager')
			.on('DOMNodeInserted.page', debounce(200, function ()
			{
				$(window).scrollTo('.head_content .card_title, #content, #tab_forumname');
			}))
		;

		$('.pb_footer .l_thread_info')
			.on('DOMNodeInserted', debounce(200, function ()
			{
				$(window).triggerHandler('load');
			}))
		;

		lazyload(_url_obj);
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

async function sign(_url_obj = global._url_obj)
{
	const Promise = require('bluebird');

	await Promise.delay(1000);

	let a = $('#sign_mod #signstar_wrapper a.j_cansign');

	if (a.length)
	{
		a[0].click();
		await Promise.delay(500);
		a[0].click();
		await Promise.delay(500);
		$('.j_succ_info.sign_succ1').hide();

		return true;
	}
}

function lazyload(_url_obj)
{
	$('img.BDE_Image[data-original], img.threadlist_pic')
		.not('[data-done]')
		.attr('data-done', true)
		.attr('src', function (i, old)
		{
			let src = $(this).attr('data-original');

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

	if (elem.css('min-height') <= 50)
	{
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
