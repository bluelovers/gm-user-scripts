/**
 * Created by user on 2017/9/18/018.
 */
/**
 * Created by user on 2017/8/9/009.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
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
		const _uf_done = require('root/lib/event/done');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.Item a.Title, .DataList .Title a',
		].join())
			.prop('target', '_blank')
		;

		ref_url(_url_obj);

		let realname = $('.HeaderWrap .Username').text().trim();

		require('root/lib/greasemonkey/index')
			.GM_addStyle([
				'.HeaderTopRight { background-color: #0006; }',
				'.HeaderTopRight:hover { background-color: #0009; }',
				'.Profile .DataListWrap .Title a { color: #2a2a2a; }',
				'.Profile .DataListWrap .Title a:focus, .Profile .DataListWrap .Title a:hover { color: #d90000; }',
				'.Section-DiscussionList .DiscussionsTable .DiscussionName a.Title { color: #e1261c; }',
				'.Section-DiscussionList .DiscussionsTable .DiscussionName a.Title:visited { color: #2a2a2a; }',
				'.Section-DiscussionList .DiscussionsTable .DiscussionName:hover a.Title { color: #e1261cb3; }',
			].join(''))
		;

		$('.MeMenu')
			.on('click', '.PopList.Activities .Item a', function (event)
			{
				_uf_done(event);

				window.open(this.href, '_blank');
			})
		;

		$(window)
			.on('resize', function ()
			{
				let h = $('.HeaderTopRight');

				if (h.length)
				{
					console.log($('.HeaderTop').position(), $('.HeaderTop').offset());

					h
						.css('top', $('.HeaderTop').offset().top)
						.css('left', $('.HeaderTop').offset().left + $('.HeaderTop').width() - h.width())
						.css({
							'position': 'fixed',
							'z-index': 1000,
						})
					;
				}
			})
			.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
			{
				const keycodes = require('keycodes');
				const _uf_done = require('root/lib/event/done');

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
			.on('load', function ()
			{
				$(window).triggerHandler('resize');
			})
			.triggerHandler('resize')
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

	const _uf_done = require('root/lib/event/done');

	$('a[href*="/home/leaving?target="]', '.Message')
		.attr('href', function (i, old)
		{
			let s = '/home/leaving?target=';

			let url = old.substr(old.indexOf(s) + s.length);

			//console.log(i, old, url);

			return decodeURIComponent(url);
		})
		.prop('target', '_blank')
		.on('click', function (event)
		{
			_uf_done(event);

			window.open(this.href, '_blank');
		})
	;
}
