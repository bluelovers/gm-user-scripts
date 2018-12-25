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

		grant: [
			'GM_registerMenuCommand',
			'GM_xmlhttpRequest',
			'unsafeWindow',
			'GM_deleteValue',
			'GM_getValue',
			'GM_listValues',
			'GM_setValue',
			'GM_openInTab',
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
		const keycodes = require('keycodes');
		const _uf_done = require('root/lib/event/done');
		const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;

		const site_discuz = require('root/lib/site/discuz');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		])
			.prop('target', '_blank')
		;

		greasemonkey.GM_addStyle([
			`html, :root, body { font-size: 9pt; }`,
			`html, :root, body, .xst, input, button, select, textarea, .xst { font-family: initial; }`,

			`input, button, select, textarea { font-size: 1rem; }`,

			`.t_f, .t_f td { font-size: 1rem; }`,
			`#threadlist th .xst, .newthread .xst { font-size: 1rem; }`,

			`#wp, .wp { max-width: 960px; width: 95%; }`,

			`.fl_tb .fl_g { opacity: 0.25; min-width: 150px; }`,
			`.fl_tb .fl_g._has_new_post { opacity: 0.75; }`,
			`.fl_tb .fl_g:hover { opacity: 1; }`,

			`.pls.favatar ._pls_sub { display: none; }`,
			`.pls.favatar:hover ._pls_sub { display: initial; }`,

			`.pls.favatar .noavatar { display: none; }`,
			`.pls.favatar:hover .noavatar { display: initial; }`,

			`.t_fsz { min-height: auto; }`,

			`.pi { min-height: 16px; height: auto; }`,
			`@media only screen and (max-width: 950px) {`,

			`#hd .hdc > h2 { display: none; }`,
			`.fl_icn_g { display: none; }`,
			`.fl_g dl { margin-left: auto; }`,

			`#f_pst #fastpostform td.pls { display: none; }`,
			`#f_pst #fastsmiliesdiv { display: none; }`,

			//`.pls.favatar ._avatar_area { display: none; }`,
			//`.pls.favatar:hover ._avatar_area { display: block; }`,
			//`._avatar_area { position: absolute; }`,

			`}`,


		]);

		{
			let _fl_tb = $('.fl_tb').eq(0);

			let _fl_g = $('.fl_g', _fl_tb);

			if (_fl_g.length)
			{
				greasemonkey.GM_addStyle([
					`._fl_tb_block ._fl_tb_tr_block { display: block; }`,
					`._fl_tb_block .fl_g { display: inline-block; }`,
				]);

				_fl_tb.addClass('_fl_tb_block');

				let _tr = _fl_g.eq(0).parents('tr:eq(0)').eq(0);

				_tr.addClass('_fl_tb_tr_block');

				_fl_g
					.each(function (index, elem)
					{
						let _row = $(elem);

						if (_row.find('dt .xw0.xi1[title]').length)
						{
							_row.addClass('_has_new_post');
						}
					})
				;

				_fl_g
					// @ts-ignore
					.sort(function (a, b)
					{
						let _a_v = $(a).hasClass('_has_new_post');
						let _b_v = $(b).hasClass('_has_new_post');

						if (_a_v)
						{
							if (_b_v)
							{
								return 0;
							}

							return -1;
						}
						else if (_b_v)
						{
							return 1;
						}

						return 0;
					})
					.appendTo(_tr)
				;
			}


		}

		let postlist = $('#postlist');
		let posts = postlist.find('> div[id^="post_"]');

		if (postlist.length && posts.length)
		{
			let _toc_cache: ({
				id: string,

				author: string,
				msg: string,
			})[] = [];

			posts
				.each(function (index, element)
				{
					let _this = $(this);

					let _post_id = _this.attr('id');

					let _target = $('[id^="postmessage_"]:eq(0)', _this).eq(0);

					site_discuz.hide_userinfo(_this);


					let _author = _this.find('.authi').eq(0).text();

					let _msg = _target.text()
						.replace(/\n+/, '\n')
						.replace(/^\s+/, '')
						.slice(0, 50)
					;

					0 && _toc_cache.push({
						id: _post_id,
						author: _author,
						msg: _msg,
					})
				})
			;

			if (_toc_cache.length)
			{

			}
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
