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

		if ($('meta[property="profile:username"][content]').length)
		{
			return 2;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		let h_card = hCard().elem;
		if (!h_card.length) return;

		let btns = $('.controls a[href*="/users/"]', h_card);

		let btn_follow = btns.filter(function (i, elem)
		{
			let href = $(this)
				.attr('href')
			;

			return /\/users\/[^\/]+\/follow/
				.test(href)
			;
		});

		let btn_unfollow = btns.filter(function (i, elem)
		{
			let href = $(this)
				.attr('href')
			;

			return /\/users\/[^\/]+\/unfollow/
				.test(href)
				;
		});

		let btn_remote_follow = btns.filter(function (i, elem)
		{
			let href = $(this)
				.attr('href')
			;

			return /\/users\/[^\/]+\/remote_follow/
				.test(href)
				;
		});

		console.log({
			btn_follow,
			btn_unfollow,
			btn_remote_follow,
		});

		if (!btn_remote_follow.length)
		{

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

/**
 *
 * @todo 支援 music.pawoo.net
 */
function hCard()
{
	let elem = $('.card.h-card.p-author');

	console.info('hCard', elem);

	return {
		elem,
	};
}
