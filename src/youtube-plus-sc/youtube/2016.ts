/**
 * Created by user on 2017/12/1/001.
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

	disable: true,

	priority: 300,

	metadata: {
		include: [
			//'http*://www.gamer.com.tw/*',
		],
		match: [
			'*://www.youtube.com/*',
			'*://youtube.com/*',
		],
		nomatch: [
			'https://www.youtube.com/my_videos*',
		],
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
		const _uf_done = require('root/lib/event/done');
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		].join(','))
			.prop('target', '_blank')
		;

		require('root/lib/greasemonkey/web/xhr').ajaxSetup();
		const YU = require('root/lib/site/youtube');

		$(window)
			.on('load.ready', function ()
			{
				if (_url_obj.path.match(/my_videos/))
				{

				}
			})
			.triggerHandler('load.ready')
		;

		$('body')
		//.on('click', 'a[href]:not([rel="ignore"] or [role] or [href="#"])', _ready)
		//.on('DOMNodeInserted', '#content ._5wci._5wch._2pjv, #content #appsNav', _ready)
		//.on('DOMAttrModified', 'body', function (event) {})
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

		//_dom.remove();

		return _dom;
	},

};

export = o as IDemo;
