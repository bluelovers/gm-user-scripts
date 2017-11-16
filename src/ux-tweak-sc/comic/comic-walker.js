/**
 * Created by user on 2017/11/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'https://comic-walker.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/src/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
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
		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
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

			require('root/src/lib/dom/disable_nocontextmenu')
				._uf_disable_nocontextmenu2(1, 'body')
			;

			require('root/src/lib/jquery/event').makeJQueryPlugin($, window);

			//require('root/src/lib/jquery/event/key').makeJQueryPlugin($);

			$(window)
				.on('load.ready', function ()
				{
					return;

					let len = 2;

					if (cw_viewer.find('footer').length)
					{
						len = cw_viewer
							.find('footer')
							.text()
							.replace(/\s+/g, '')
							.split(/\s*[\/\/]\s*/)[1]
							.trim()
							.length
						;
					}

					let episode_title = unsafeWindow.dataLayer[0].episode_title;

					cw_viewer
						.find('div[data-index]')
						.each(function ()
						{
							let _this = $(this);

							let canvas = _this.find('canvas');

							canvas.attr('download', `${episode_title}_${pad(_this.attr('data-index'))}.png`);

							let _a = canvas.parents('a').eq(0);

							if (!_a.length)
							{
								canvas.wrap(`<a href="#"/>`);
								_a = canvas.parents('a').eq(0);

								_a.click(function ()
								{
									let canvas = $(this).find('canvas');

									require('root/src/lib/save').saveCanvas(canvas[0], canvas.attr('download'))
										.then(function (r)
										{
											console.log(r);
										})
										.catch(e => console.error(e))
									;
								})
							}

						})
					;
				})
				.on('keydown.page', require('root/src/lib/jquery/event/hotkey').packEvent(function (event)
				{
					const keycodes = require('keycodes');
					const _uf_done = require('root/src/lib/event/done');

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
