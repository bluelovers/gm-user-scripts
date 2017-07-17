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
		exclude: [],
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
		_uf_dom_filter_link('.FM-blist .FM-blist3 a')
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
	},

	adblock()
	{

	},
};
