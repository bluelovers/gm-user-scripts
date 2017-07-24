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
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		let _a = _uf_dom_filter_link('.FM-blist .FM-blist3 a, .GN-lbox2B a')
			.attr('target', '_blank')
		;

		const comic_style = require('../../lib/comic/style');
		const greasemonkey = require('../../lib/greasemonkey');

		module.exports.adblock();

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
		}

		$('.GN-thumbnail img, article img.lazyload')
			.not('[data-done]')
			.filter('[data-src]:not([src])')
			.attr('src', function()
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
							.replace(/(bahamut\.com\.tw)\/M\//, '$1/B/')
							;
					})
				;
			})
		;
	},

	adblock()
	{

	},

	clearly(_url_obj = global._url_obj)
	{
		const greasemonkey = require('../../lib/greasemonkey');

		let _dom = $();

		_dom = _dom
			.add($('#BH-master, #BH-background').siblings())
			.add($('.FM-cbox1 .FM-cbox2 .FM-cbox5 script, .FM-cbox1 .FM-cbox2 .FM-cbox5 #BMW_2').nextAll().addBack())
			.add($('form[name="frm"]').nextAll().addBack().not('#BH-pagebtn'))
			.add([
				'#BH-pagebtn .no, .nocontent',
				'.FM-cbox1 .FM-cbox2 .FM-cbox4 a',
				'#headnews, #comment, #track, #shop',
				'#BH-master h4 > img',
				'.GN-lbox5A i.fa',
				'.MSG-list9D',
				'.BH-rbox a > img[src*="folder"]',
				'.HOME-mainbox1a a > img',
				'.MSG-list8E, #frmDel, .BH-search, #BH-talk2',
				'script, iframe, #replys img.msghead.gamercard, img.IMG-C09, #BH-slave > .BH-slave_btns:eq(0) > .BH-slave_btnA:eq(0)',
				'a[name="heretop"] + h4',
				'.FM-cbox2 img[id*="avatar"], .FM-msgbg button, .IMG-GA19',
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
