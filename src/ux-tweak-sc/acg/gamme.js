/**
 * Created by user on 2017/7/22/022.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://news.gamme.com.tw/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/gamme\.com\.tw/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('#Foot-Photo a, #Foot-Photo1 a, #openlist')
			.prop('target', '_blank')
		;

		const greasemonkey = require('../../lib/greasemonkey');
		greasemonkey.GM_addStyle([
			'.entry em a { color: initial; }',
			'.entry .photovia a { color: blue; }',
		].join(''));

		$(window).scrollTo($('#content, .body_box, .post').eq(-1))
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add($('#content').parentsUntil('body').addBack().siblings())
			.add($('#content .boxbtn').nextAll().addBack())
			.add([
				'.shareblock, .img_share1, .img_share2, #home_div',
				'.prev_arw, .next_arw, #commentsBottom',
				'.postdata img, .postdata .postarw',
				'body :hidden, script, iframe',
			].join())
		;

		//_dom.remove();

		return _dom;
	},

};
