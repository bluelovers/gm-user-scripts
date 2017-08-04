/**
 * Created by user on 2017/7/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.gamer.com.tw/*',
			'http*://www.gamer.com.tw/index*.php*',
			'http*://acg.gamer.com.tw/acgDetail.php?s=*',
			'http*://gnn.gamer.com.tw/*.html',
			'http*://gnn.gamer.com.tw/*k=*',
			'http*://forum.gamer.com.tw/*bsn=*',
			'http*://home.gamer.com.tw/*',
			'http*://acg.gamer.com.tw/*',
			'http*://m.gamer.com.tw/*',
			'http*://ani.gamer.com.tw/*',
		],
		exclude: [
			'http*://gc.bahamut.com.tw/*',
			'http*://*.bahamut.com.tw/*',
		],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/gamer\.com\.tw/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj)
	{
		if (page_redirect(_url_obj))
		{
			return;
		}

		const _uf_done = require('../../lib/event.done');
		const keycodes = require('keycodes');

		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		let _a = _uf_dom_filter_link('.FM-blist .FM-blist3 a, .GN-lbox2B a, .b-list .b-list__main a, #headnews a, .BH-lbox.GN-lbox9 a, .ACG-maintitle a, .ACG-mster_box4 a')
			.prop('target', '_blank')
		;

		const comic_style = require('../../lib/comic/style');
		const greasemonkey = require('../../lib/greasemonkey');

		module.exports.adblock(_url_obj);

		if (_url_obj.path.match(/animeVideo/))
		{
			greasemonkey.GM_addStyle([
				`body, #BH_background, .BH_background, .sky, .bullet-send, .bullet-send .bullet-send-setting, .bullet-send .bullet-send-submit, .bullet-send .bullet-send-msg input, .anime-title { background: ${comic_style.bg_dark.background}; }`,
				`.sky ul.member a:hover, .bullet-send, .bullet-send .bullet-send-setting, .bullet-send .bullet-send-submit, .bullet-send .bullet-send-msg input, .anime-title, .season a { color: ${comic_style.bg_dark_text.color}; }`,
				`.bullet-send { border: 0px none #fff; }`,
				`.mainmenu { opacity: 0.5; }`,
			].join(''));

			$('.news_list')
				.css('background-color', $('.anime-title').css('background-color'))
			;
//
			$('#BH_background, .BH_background, .sky')
//				.css(comic_style.bg_dark)
			;

			$('#video-container .ncc > .choose > a:eq(0)').click();
		}
		else if (_url_obj.host.match(/www\.gamer\.com\.tw/))
		{
			$('#gnn_head, #homeOdata, #LiveBlock, #hothala, #rivers')
				.on('click', '.BA-cbox a, .EXA8 a, .figure a', function (event)
				{
					_uf_done(event);
					window.open($(this).prop('href'), '_blank');
				})
			;
		}
		else if (_url_obj.path.match(/G1\.php/))
		{
			// 精華區
			let _a = _uf_dom_filter_link('#BH-master .FM-stb1 a')
				.prop('target', '_blank')
			;
		}

		daily_signin(_url_obj);

		ref_url(_url_obj);

		$([
			'.GN-thumbnail img, article img.lazyload, .c-article__content img.lazyload',
			'#showPic img.acgPIC, .wikiContent img.gallery-image',
		].join())
			.not('[data-done]')
			.filter('[data-src]:not([src])')
			.attr('src', function ()
			{
				return $(this).attr('data-src');
			})
			.addClass('lazyautosizes lazyloaded')
			.removeClass('lazyload')
			.addBack()
			.imagesLoaded()
			.always(function (data)
			{
				let _this = $(data.elements);

				_this
					.not('[data-done]')
					.attr('data-done', true)
					.width(function (i, v)
					{
						return v;
					})
					.height(function (i, v)
					{
						return v;
					})
					.attr('src', function (i, val)
					{
						return val
							.replace(/(bahamut\.com\.tw)\/[MS]\//, '$1/B/')
							;
					})
				;
			})
		;

		$(window)
			.on('keydown.page', function (event)
			{
				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('#BH-pagebtn .prev:not(.no)');

						console.log(event, _a);

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('#BH-pagebtn .next:not(.no)');

						console.log(event, _a);

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
				}
			})
		;
	},

	adblock()
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		const greasemonkey = require('../../lib/greasemonkey');

		let _dom = $(_dom_list);

		_dom = _dom
			.add($('#BH-master, #BH-background').siblings())
			.add($('.FM-cbox1 .FM-cbox2 .FM-cbox5 script, .FM-cbox1 .FM-cbox2 .FM-cbox5 #BMW_2').nextAll().addBack())
			.add($('form[name="frm"]')
				.nextAll()
				.addBack()
				.not('#BH-pagebtn')
				.not('#BH-master > section, #BH-master > a'))
			.add([
				'#BH-pagebtn .no, .nocontent',
				'.FM-cbox1 .FM-cbox2 .FM-cbox4 a',
				'#headnews img, #track, #shop',
				'#BH-master h4 > img',
				'.GN-lbox5A i.fa',
				'.MSG-list9D',
				'.BH-rbox a > img[src*="folder"]',
				'.HOME-mainbox1a a > img',
				'.MSG-list8E, #frmDel, .BH-search, #BH-talk2',
				'script, iframe, #replys img.msghead.gamercard, img.IMG-C09, #BH-slave > .BH-slave_btns:eq(0) > .BH-slave_btnA:eq(0)',
				'a[name="heretop"] + h4',
				'.FM-cbox2 img[id*="avatar"], .FM-msgbg button, .IMG-GA19',
				'.FM-guild',

				'#comment img, #comment .GN-lbox6B, h1 > img, h1 + .GN-lbox3A > img',

				//https://forum.gamer.com.tw/C_card.php?bsn=16901&snA=27428&tnum=6
				'.c-user__guild, .c-user__avatar, .c-section__side, .c-post__body__buttonbar',
				'.c-section:has(> .c-editor, > .popular), .c-reply__editor, .reply-avatar',

				'#BH-footer',
				'#ACG-box1mark, .BH-lbox.ACG-mster_box4 a > img, .BH-lbox img[src*="newbtn_talk"], .BH-lbox img[src*="btn_edit"]',
			].join())
		;

		if (_url_obj.path.match(/creationDetail/))
		{
			_dom = _dom
				.not('#BH-slave')
			;
		}

		$('.FM-cbox10D a[id*="showoldCommend_"]')
			.each(function ()
			{
				this.click();
			})
		;

		greasemonkey.GM_addStyle([
			'.FM-tags a { background: initial; }',
			'#FM-tagsnow { background: #6073be; }',
		].join(''));

		$('body')
			.css({
				background: 'initial',
				padding: 0,
			})
		;

		$('#BH-wrapper')
			.css({
				margin: 'auto',
			})
		;

		//_dom.remove();

		return _dom;
	}
};

/**
 * 每日簽到
 * @param _url_obj
 */
function daily_signin(_url_obj)
{
	if (_url_obj.host.match(/www\.gamer\.com\.tw/))
	{
		let _a = $('.BA-left #signin-btn[onclick]');

		if (_a.length)
		{
			_a[0].click();
		}
	}
}

function ref_url(_url_obj)
{
	$('article a[href*="ref.gamer.com.tw"]')
		.attr('href', function (i, old)
		{
			let url = old.substr(old.indexOf('redir.php?url=') + 'redir.php?url='.length);

			console.log(i, old, url);

			return decodeURIComponent(url);
		})
	;
}

function page_redirect(_url_obj)
{
	console.log(document.referrer, location, _url_obj);

	if (_url_obj.path.match(/\/A\.php/) && document.referrer.match(/acgDetail\.php/))
	{
		location.href = location.href.replace('/A.php', '/B.php');

		return true;
	}
}
