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
			'http*://kakuyomu.jp/works*/*/episodes/*',
			'http*://kakuyomu.jp/*',
		],
		match: [
		],
		nomatch: [],
		exclude: [],

		grant: [
			'GM_setClipboard',
		],
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

		const { debounce } = require('throttle-debounce');
		const { throttle } = require('throttle-debounce');

		$(window)
			.on('load.ready', throttle(1000, function ()
			{
				let _a = $('#contentAside');

				if (_a.length)
				{
					let _href = window.location.href;

					let _c = _a
						.find('.widget-toc-episode-episodeTitle')
						.filter(function (i, elem)
						{
							let _h = $(elem).prop('href');

							return _h == _href;
						})
					;

					if (_c.length)
					{
						// @ts-ignore
						_a.scrollTo(_c.parents('.widget-toc-episode').eq(0), -150)
					}
				}
			}))
			.triggerHandler('load.ready')
		;

		{
			let _c = $('#contentMain-inner');

			if (_c.length)
			{
				{
					let _b = $('#contentMain-nextEpisode');

					if (_b.length)
					{
						_b = _b.clone();

						_b
							.insertAfter($('#contentMain-header-cover, #contentMain-previousEpisode').eq(0))
						;

						_b
							.find('.contentMain-nextEpisode-inner span')
							.css({
								'display': 'inline-block',
								'font-size': '0.9em',
								'margin': 'auto',
							})
						;

						_b
							.find('#contentMain-readNextEpisode')
							.css({
								'padding': '13px 10px',
							})
						;

						_b
							.find('.contentMain-pagerArrow')
							.remove()
						;
					}
				}

				let _body = $('.widget-episodeBody', _c);

				if (_body.length)
				{
					_body
						.find('p')
						.each(function ()
						{
							let _this = $(this);

							let _elem = $('<div/>')
								.html(_this.html())
							;

							let i = this.attributes.length;
							while (i--)
							{
								_elem.attr(this.attributes[i].name, this.attributes[i].value)
							}

							_elem.addClass('_fake_p');

							_elem.insertAfter(_this);

							_this.remove();
						})
					;

					const CopyLib = require('root/lib/func/copy');

					let _btn = $('<p class="ui-tooltip ui-tooltip-bottom" data-ui-tooltip-label="COPY"></p>')
						.prependTo('#worksEpisodesEpisodeHeader-tools')
					;

					$(`<a href="javascript:void(0)">COPY</a>`)
						.on('click', function ()
						{
							CopyLib.copyElem(_body[0]);
						})
						.prependTo(_btn)
					;
				}


			}
		}

		// @ts-ignore
		$(window).scrollTo($('#container, #contentMain .chapterTitle').eq(-1), 0 - $('#globalHeader-pc, #worksEpisodesEpisodeHeader').height());
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
