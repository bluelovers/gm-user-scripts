/**
 * Created by user on 2017/9/18/018.
 */
/**
 * Created by user on 2017/8/9/009.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://*-forum.guildwars2.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/.+\-forum\.guildwars2\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.Item a.Title',
		].join())
			.prop('target', '_blank')
		;

		ref_url(_url_obj);

		let realname = $('.HeaderWrap .Username').text().trim();

		$(window)
			.on('keydown.page', require('root/src/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/src/lib/event.done');

				switch (event.which)
				{
					case keycodes('pageup'):
					case keycodes('left'):

						var _a = $('#PagerAfter .Previous');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
					case keycodes('pagedown'):
					case keycodes('right'):

						var _a = $('#PagerAfter .Next');

						if (_a.length)
						{
							_uf_done(event);
							_a[0].click();
						}

						break;
				}
			}))
		;

		if (_url_obj.fragment)
		{

		}
		else
		{
			$(window).scrollTo($('.HeaderWrap .HeaderBottomWrap, .MainContentWrap:has(.MessageList)').eq(-1));
		}
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([].join())
		;

		//_dom.remove();

		return _dom;
	},
};

function ref_url(_url_obj)
{
	$('a[href*="external?l="]', '.message-content')
		.attr('href', function (i, old)
		{
			let url = old.substr(old.indexOf('external?l=') + 'external?l='.length);

			//console.log(i, old, url);

			return decodeURIComponent(url);
		})
		.prop('target', '_blank')
	;
}
