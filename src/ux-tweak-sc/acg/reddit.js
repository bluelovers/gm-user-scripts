/**
 * Created by user on 2017/7/28/028.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			//'http*://www.reddit.com/*',
			'http*://www.reddit.com/r/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/reddit\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('a', '.usertext-body, .md-container, .thing')
			.prop('target', '_blank')
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		const greasemonkey = require('../../lib/greasemonkey');

		let _dom = $(_dom_list);

		_dom = _dom
			.add($('body > .content').siblings().not('body > .side'))
			.add($('.linkinfo').parent('.spacer').nextAll())
			.add([
				'.spacer:has(#search), .spacer:empty',
				'.reddit-infobar',
				'.thing > .thumbnail, .thing > .midcol.unvoted',
				'body > :hidden, iframe, script',
				'link[rel="icon"], link[rel="apple-touch-icon-precomposed"]',
			].join())
		;

		greasemonkey.GM_addStyle([
			'.flair_uf {\n' +
			'\theight: auto;\n' +
			'\tbackground-color: white;\n' +
			'\tborder: none;\n' +
			'\tcolor: #555;\n' +
			'\tfont-family: verdana,arial,helvetica,sans-serif;\n' +
			'\tborder: 1px solid #DADADA;\n' +
			'\tpadding: 2px 3px 2px 3px;\n' +
			'\tmargin-left: 2px;\n' +
			'\tcursor: help;\n' +
			'}',
			'body > .content { float: left; margin-top: 0; }',
		].join(''));

		$('.flair').removeClass('flair').addClass('flair_uf');

		$('#header .pagename.redditname').removeClass('pagename').prependTo('body > .content');
		$('body > .side').appendTo('body');

		//_dom.remove();

		return _dom;
	},
};
