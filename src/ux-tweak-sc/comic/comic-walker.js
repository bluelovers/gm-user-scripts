/**
 * Created by user on 2017/11/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'https://comic-walker.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return true;
		}
		//console.debug(777, ret);

		/*
		if (_url_obj.host.match(/3dmgame\.com/))
		{
			return true;
		}
		*/

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.detail_latestStoryBtn a, .bookAuther a, .readableLinkColor a',
			'#togetherRead a, #comicsRelative a, #bookSummary a',
			'#bookCartLink a, #infomationList a',

			'.tileList a',
			'#topSlider a',
		].join())
			.prop('target', '_blank')
		;

		module.exports.adblock(_url_obj);

		if ($('#cw-viewer').length)
		{
			let cw_viewer = $('#cw-viewer');

			require('root/lib/dom/disable_nocontextmenu')
				._uf_disable_nocontextmenu2(1, 'body')
			;

			require('root/lib/jquery/event').makeJQueryPlugin($, window);

			//require('root/lib/jquery/event/key').makeJQueryPlugin($);

			$(window)
				.on('load.ready', function ()
				{
				})
				.on('keydown.page', require('root/lib/jquery/event/hotkey').packEvent(function (event)
				{
					const keycodes = require('keycodes');
					const _uf_done = require('root/lib/event/done');

					switch (event.which)
					{
						case keycodes('pageup'):
						case keycodes('left'):
						case keycodes('pagedown'):
						case keycodes('right'):

							$(window).triggerHandler('load.ready');

							break;
					}
				}))
				.triggerHandler('load')
		}
	},

	adblock(_url_obj = global._url_obj)
	{
		$()
			.add([
				'#middle_banner',
			].join())
			.remove()
		;
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				//'#characterInfomation .bannerList',
				//'#comicsRelative',
				'#togetherRead',
				'.shareBtnBox',
				'#bookCartLink',
				'.settingBtnBox',
			].join())
			.add($('#mainContent .divideLeft').parentsUntil('body').addBack().siblings())
		;

		//_dom.remove();

		return _dom;
	},
};

function pad(v, n = 2, d = '0')
{
	let l = v.toString().length;

	if (l < n)
	{
		return v.toString().padStart(n, d);
	}

	return v;
}
