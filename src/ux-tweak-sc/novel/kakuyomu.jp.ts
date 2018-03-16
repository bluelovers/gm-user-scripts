/**
 * Created by user on 2017/7/22/022.
 */

'use strict';

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

let o: IDemo = {

	//disable: true,

	metadata: {
		include: [
			'http*://kakuyomu.jp/works*',
			'http*://kakuyomu.jp/*',
		],
		match: [
		],
		nomatch: [],
		exclude: [],

		grant: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return true;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;
		const _uf_done = require('root/lib/event/done');
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.widget-toc-main a',
		].join(','))
			.prop('target', '_blank')
		;

		// @ts-ignore
		$(window).scrollTo($('#container, #contentMain .chapterTitle').eq(-1), 0 - $('#globalHeader-pc, #worksEpisodesEpisodeHeader').height());

		$('.widget-toc-main .widget-toc-episode a')
			.each(function ()
			{
				let a = $(this);

				let title = $('.widget-toc-episode-titleLabel', this);

				if (title.length)
				{
					a
						.on('click', function (event)
					{
						_uf_done(event);

						GMApi.GM_setClipboard(title.text().replace(/$\s+|\s+$/g, ''));
					})
					;

					title.on('click', function ()
					{
						window.open(a.prop('href'), a.prop('target'));
					});
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
			.add([
				'#globalHeader-pc, #workFollow, .widget-workReviewSummary, #workInformationAside',
				'#author-information-followButton',
				'script, noscript, body :hidden, body :not(:visible)',

				'#worksEpisodesEpisodeHeader, #episodeFooter',
			].join())
		;

		return _dom;
	},

};

export = o as IDemo;
