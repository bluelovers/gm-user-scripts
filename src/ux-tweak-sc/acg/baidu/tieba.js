/**
 * Created by user on 2017/8/3/003.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://tieba.baidu.com/*',
		],
		exclude: [],

		grant: [
			'GM_setClipboard',
		],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/tieba\.baidu\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

		$(window).on('load', function ()
		{
			_uf_dom_filter_link([
				'.u_itieba a',
			])
				.prop('target', '_blank')
			;
		}).triggerHandler('load');

		greasemonkey
			.GM_addStyle([
				`#com_userbar { position: fixed; top: 55px; background: #fff9; }`,
				`#com_userbar .u_bdhome { display: none; }`,
				`.floor-check-miss { padding: 10px;background-color: #451159;border-radius: 5px;padding-bottom: 6px;color: #fff;text-align: center;margin: 5px;margin-left: auto;}`,
				`.floor-check-miss:hover { opacity: 0.9; }`,
			])
		;

		const throttle = require('throttle-debounce/throttle');
		const _uf_done = require('root/lib/event/done');
		let PageData;

		$(window)
			.on('load.sign', throttle(1000, function ()
			{
				sign(_url_obj);

				$(window).triggerHandler('scroll.load');
			}))
			.on('load', function ()
			{
				PageData = $.extend({}, {
					thread: {},
				}, unsafeWindow.PageData);

				$('.p_postlist > .l_post:has(.louzhubiaoshi_wrap)').css({
					border: '1px solid #2d64b3',
				});

				let floor;
				let last_post;
				let n = 0;

				$('.p_postlist .l_post:not([data-floor-check])')
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
			})
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
			.on('scroll.load', function (event)
			{
				let n = 0;

				$('.core_reply_wrapper:not([data-loaded]):has(.loading_reply)')
					.each(function ()
					{
						let core_reply_wrapper = $(this);
						core_reply_wrapper.attr('data-loaded', true);

						let t = Number(core_reply_wrapper.prop('data-loaded-try') || 0);

						if (t < 5 && core_reply_wrapper.find('.loading_reply').length)
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
									console.error(e.toString());
								}

								core_reply_wrapper.removeAttr('data-loaded');
							}, 1000 + n * 100);
						}
					})
				;
			})
			.triggerHandler('load')
		;

		$('#frs_list_pager')
			.on('DOMNodeInserted.page', function ()
			{
				$(window).scrollTo('.head_content .card_title, #content, #tab_forumname');
			})
		;

		$('.pb_footer')
			.on('DOMNodeInserted', function ()
			{
				$(window).triggerHandler('load');
			})
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
