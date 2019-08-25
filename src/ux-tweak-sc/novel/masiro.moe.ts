/**
 * Created by user on 2017/11/26/026.
 */

"use strict";

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

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
			'http*://masiro.moe/*',
			'http*://masiro.moe/*mod=viewthread*',
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
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		])
			.prop('target', '_blank')
		;

		const copyonclick = require('root/lib/func/copy').copyonclick;

		let postlist = $('#postlist');
		let posts = postlist.find('> div[id^="post_"]');

		if (postlist.length && posts.length)
		{
			posts
				.each(function (index, element)
				{
					let _this = $(this);

					let target = $('[id^="postmessage_"]:eq(0)', _this).eq(0);

					$('i.pstatus', target).remove();

					let button = $('<a href="javascript:void(0)">COPY</a>')
						.attr('onclick', copyonclick(target.attr('id')))
					;

					let authi = $('.plc .authi:eq(0) .pipe.show:eq(0)', _this)
						.after(`<span class="pipe show">|</span>`)
						.after(button)
					;

					let t_f = $('.t_f', _this);

					$(':not(:visible), .jammer', t_f).remove();

					console.log(authi, button);
				})
			;
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

		return _dom;
	},

};

export = o as IDemo;
