/**
 * Created by user on 2017/12/1/001.
 */

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

'use strict';

let o: IDemo = {

	priority: 100,

	script: true,

	metadata: {
		include: [
			//'http*://www.gamer.com.tw/*',
		],
		match: [],
		nomatch: [],
		exclude: [],

		grant: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (1)
		{
			return 2;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		const debounce = require('throttle-debounce/debounce');
		const YU = require('root/lib/site/youtube');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.creator-sidebar-item-link a[href*="view_all_playlists"], a.vm-playlist-edit-button, .guide-channel a:has(.guide-my-channel-icon), .vm-playlist-edit-video',

			'#channel-info',
			'a[is="yt-endpoint"], .yt-simple-endpoint',

			'#meta-contents a[is="yt-endpoint"], #meta-contents .yt-simple-endpoint',

			'#watch7-creator-bar a',
			'#watch-description-extras a',
		].join(','))
			.prop('target', '_blank')
		;

		/*
		$('#creator-sidebar-section-id-create h3 > .creator-sidebar-section-link').eq(0)
			.attr('href', '/editor')
			.attr(
				'target',
				'_blank'
			)
		;
		*/

		if (!YU.isMaterial())
		{
			// 2016
			$('#masthead-positioner #yt-masthead-user').prepend(
				'<a href="/my_videos?o=U" id="my_videos" class="yt-uix-button yt-uix-button-default yt-uix-button-size-default" style="margin-right: 15px;"><span class="yt-uix-button-content">影片管理員</span></a>'
			);

			$('#appbar-guide-menu')
				.on('DOMNodeInserted', debounce(100, function ()
				{
					//
				}))
			;
		}
		else
		{
			// 2017 Material

			$('#masthead-container #end #buttons').prepend(
				`<a href="/my_videos?o=U" id="my_videos"><button is="paper-icon-button-light" class="style-scope ytd-masthead" aria-label="影片管理員" style="	width: auto;">影片管理員</button></a>`
			);
		}
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

		//_dom.remove();

		return _dom;
	},

};

export = o as IDemo;
