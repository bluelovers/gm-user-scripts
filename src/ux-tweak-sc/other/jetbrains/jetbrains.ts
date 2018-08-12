/**
 * Created by user on 2017/11/26/026.
 */

"use strict";

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

let o: IDemo = {

	//priority: 100,

	metadata: {
		include: [
			'http*://www.jetbrains.com/*',
			'http*://www.jetbrains.org/*',
			'http*://intellij-support.jetbrains.com/*',
			'http*://plugins.jetbrains.com/*',
		],
		match: [],
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
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');

		const $window = $(window);

		if (_url_obj.host.match(/plugins|intellij-support/) || _url_obj.path.match(/sdk/))
		{
			_add_style();
		}

		if (_url_obj.host.match(/plugins/))
		{
			$(`<li class="header-second-links-list__item">
              <a class="header-link-item-second" href="//intellij-support.jetbrains.com/hc/en-us/community/topics/200366979-IntelliJ-IDEA-Open-API-and-Plugin-Development" target="_blank">
                API/Plugin Community
              </a>
            </li>`).appendTo('.header-popover-content[data-popover-group-content-id="nav-dev-guide"] .header-second-links-list')
		}

		if (_url_obj.path.match(/download/))
		{
			$window
				.on('load.download', debounce(1000, function ()
				{
					if (_url_obj.path.match(/download/))
					{
						let _a = $('#download-link[href*="download.jetbrains.com"]:not([data-done])');

						if (_a.length)
						{
							_a
								.clone()
								.prop('href', function (i, old)
								{
									return old.replace(/\.exe$/, '.zip');
								})
								.removeAttr('id')
								.text('[zip]')
								.appendTo(_a.parents(':eq(0)').eq(0))
							;

							// @ts-ignore
							_a.attr('data-done', true);
						}
					}
				}))
			;
		}

		$window
			.on('load', function ()
			{
				_link_target()
			})
			.triggerHandler('load')
		;

	},

	adblock(_url_obj = global._url_obj)
	{
		//
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				//
			].join())
		;

		return _dom;
	},

};

export = o as IDemo;

function _add_style()
{
	greasemonkey
		.GM_addStyle([

			`body, html, :root { font-size: 9pt; }`,

			`.article-content, .alert, .textarea, textarea, input, .markdown, .checkbox, .select2-selection__rendered, .plugin-card__text, .content-card__text, a.content-card__text { font-size: 1rem; }`,

			`.panel__content, .wrapper > .panel, .nav-tree, .search-box .input-with-button__input { font-size: 1rem; }`,

			`.search-box-small .search input[type="search"] { font-size: 1rem; }`,

		])
	;
}

function _link_target()
{
	const _uf_dom_filter_link = require('root/lib/dom/filter/link');
	let _a = _uf_dom_filter_link([
		//
		'.content-card__title a, .js-plugin-card-title, .plugin-card__title a, .plugin-card a',
	])
		.prop('target', '_blank')
	;
}
