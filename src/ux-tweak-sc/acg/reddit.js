/**
 * Created by user on 2017/7/28/028.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
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
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('.usertext-body a, .md-container a, .thing a, #mail, .message-count')
			.prop('target', '_blank')
		;

		require('root/lib/greasemonkey/index')
			.GM_addStyle([
				'.thing a.title { color: #0000ff; }',
				'.thing a.title:visited { color: #2a2a2a; }',
				'.thing:hover a.title { color: #0000ffb3; }',
			].join(''))
		;

		let _win = $(window);

		_win
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/lib/event/done');

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('.nav-buttons .prev-button a');

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

						var _a = $('.nav-buttons .next-button a');

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
		;
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		const greasemonkey = require('root/lib/greasemonkey/index');

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
				'.commentarea > form.usertext:eq(0)',
				'.link-save-button, .save-button, .share, .hide-button, .give-gold-button, .report-button',
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

		$('.expando-gate__show-once')
			.each(function ()
			{
				this.click();
			})
		;

		//_dom.remove();

		return _dom;
	},
};
