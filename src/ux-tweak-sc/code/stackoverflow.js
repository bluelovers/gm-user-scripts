/**
 * Created by user on 2017/8/3/003.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://stackoverflow.com/*',
			'http*://superuser.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/(stackoverflow|superuser)\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
		_uf_dom_filter_link('.post-text a, .question-hyperlink')
			.prop('target', '_blank')
		;

		$(window)
			.on('keydown.page', function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('../../lib/event.done');

				//console.log(event, event.which);

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('.pager a[rel="prev"]');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('.pager a[rel="next"]');

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

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add($('.inner-content').parentsUntil('body').addBack().siblings())
			.add([
				'#feed-link, .vote-down-off, .vote-up-off, .star-off',
				'.user-gravatar32, .post-menu, #hireme, .favicon, .aside-cta[aria-label="ask new question"]',
				'#post-form, .js-add-link.comments-link',
				'body :hidden, iframe, script',
				'link[rel="stylesheet"][href*="adFeedback"]',
			].join())
		;

		$('.vote a').removeAttr('class');

		//_dom.remove();

		return _dom;
	},
};
