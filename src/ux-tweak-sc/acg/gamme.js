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
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('#Foot-Photo a, #Foot-Photo1 a, #openlist')
			.prop('target', '_blank')
		;

		const greasemonkey = require('root/lib/greasemonkey/index');
		greasemonkey.GM_addStyle([
			'.entry em a { color: initial; }',
			'.entry .photovia a { color: blue; }',
		].join(''));

		$(window)
			.on('load', function ()
			{
				$('.entry .photovia')
					.not('[data-done]')
					.attr('data-done', true)
					.clone()
					.css({
						'margin-top': 0,
						'margin-bottom': '2.5em',
					})
					.insertAfter($('#entry > p.pimg:eq(0), #entry > p.pimg:eq(0) + pre').eq(-1))
				;
			})
			.triggerHandler('load')
		;

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
