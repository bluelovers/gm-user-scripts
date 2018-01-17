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
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('')
			.prop('target', '_blank')
		;

		greasemonkey
			.GM_addStyle([
				`#com_userbar { position: fixed; top: 55px; background: #fff9; }`,
				`#com_userbar .u_bdhome { display: none; }`,
			])
		;

		const throttle = require('throttle-debounce/throttle');

		$(window)
			.on('load.sign', throttle(1000, function ()
			{
				sign(_url_obj);
			}))
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/lib/event/done');

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
			.triggerHandler('load')
		;

		$('#frs_list_pager')
			.on('DOMNodeInserted.page', function ()
			{
				$(window).scrollTo('.head_content .card_title, #content, #tab_forumname');
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