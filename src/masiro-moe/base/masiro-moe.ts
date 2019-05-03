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
			`.widthauto #wp, .widthauto .wp { max-width: initial; }`,

			`.fl_tb .fl_g { opacity: 0.35; min-width: 150px; }`,
			`.fl_tb .fl_g._has_unread_post { opacity: 0.5; }`,
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
				const runtimeSiteID = require('root/lib/site/index').create(o.file);
				const GMApi = require('root/lib/greasemonkey/gm/api').GMApi;

				let fid = new URL(location.href).searchParams.get('fid');

				let cachekey = `fid${fid}`;

				let cachelist: {
					checkdate: number,
					old: string[],
					new: string[],
					now: string[],
				} = runtimeSiteID.getValue(cachekey, {}) || {};

				cachelist.old = cachelist.old || [];
				cachelist.new = [];
				cachelist.checkdate = cachelist.checkdate || 0;

				let changed: boolean;

				//const slugify = require('cjk-conv/lib/zh/table/list').slugify;

				greasemonkey.GM_addStyle([
					`._fl_tb_block ._fl_tb_tr_block { display: block; }`,
					`._fl_tb_block .fl_g { display: inline-block; max-width: 300px; margin: 1px; padding: 10px 3px; }`,

					`._fl_tb_block ._is_new_fid { background-color: #18042ab3; }`
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

						if (_row.find('.fl_icn_g img[src*="forum_new"]').length)
						{
							_row.addClass('_has_unread_post');
						}

						let _a = _row.find('dl dt a')
							.eq(0)
							.attr('target', '_blank')
						;

						let _link = _a.attr('href');

						if (!cachelist.checkdate)
						{
							cachelist.old.push(_link);
						}
						else if (!cachelist.old.includes(_link))
						{
							cachelist.new.push(_link);
							changed = true;

							_row.addClass('_is_new_fid');
						}

						let title = _a
							.text()
							.trim()
						;

						_row.data('data-title', title);
						_row.prop('title', title);
					})
				;

				if (!cachelist.checkdate)
				{
					changed = true;
				}

				let _now = Date.now();

				if (changed && (_now - cachelist.checkdate) > 3600 * 24 * 7)
				{
					cachelist.checkdate = _now;

					cachelist.now = cachelist.old.concat(cachelist.new);

					cachelist.old = cachelist.now;

					runtimeSiteID.setValue(cachekey, cachelist);
				}

				console.log(cachelist);

				_fl_g
					// @ts-ignore
					.sort(function (a, b)
					{
						let _a_v = $(a).hasClass('_has_new_post') ? 1 : 0;
						let _b_v = $(b).hasClass('_has_new_post') ? 1 : 0;

						let _c = _b_v - _a_v;

						if (!_c)
						{
							let _a_v = $(a).hasClass('_has_unread_post') ? 1 : 0;
							let _b_v = $(b).hasClass('_has_unread_post') ? 1 : 0;

							_c = _b_v - _a_v;
						}

						return _c;
					})
					.appendTo(_tr)
				;

				{
					let _area = $('<form id="_search_form" onsubmit="return false;"/>')
						.insertAfter('#ct .mn .bm.bml.pbn')
					;

					greasemonkey.GM_addStyle([
						`#_search_form { padding: 5px;
margin: auto;
display: block;
width: auto;
text-align: center; margin-bottom: 10px; }`,
						`#_search_form input { margin-right: 5px; }`,
					]);

					let _input = $('<input type="text" class="scbar_txt" size="50" placeholder="搜尋版塊"/>')
						.appendTo(_area)
					;

					let _btn_s = $('<input type="submit"/>')
						.appendTo(_area)
						.on('click', function ()
						{
							_area.triggerHandler('submit');
						})
					;

					let _btn_c = $('<input type="reset"/>')
						.appendTo(_area)
						.on('click', function ()
						{
							_area.triggerHandler('reset');
						})
					;

					_area
						.on('submit', function (event)
						{
							_uf_done(event);

							let _txt = String(_input.val() || '').trim();

							if (!_txt.length)
							{
								_area.triggerHandler('reset');

								return;
							}

							const zhRegExp = require('regexp-cjk').zhRegExp;

							try
							{
								let _r = new zhRegExp(_txt, 'iu', {
									greedyTable: true,
								});

								console.dir(_r);

								_fl_g.each(function (index, elem)
								{
									let _row = $(elem);

									let _title = _row.data('data-title');

									///console.dir(_title);

									if (_title)
									{
										if (_r.test(String(_title)))
										{
											_row.show();
										}
										else
										{
											_row.hide();
										}
									}
								})
							}
							catch (e)
							{
								window.alert(`搜尋條件不支援 請刪除部分文字後 在搜尋一次`)
							}


						})
						.on('reset', function (event)
						{
							_uf_done(event);
							_fl_g.show();
						})
					;
				}
			}

		}

		let postlist = $('#postlist');
		let posts = postlist.find('> div[id^="post_"]');

		if (postlist.length && posts.length)
		{
			const site_discuz = require('root/lib/site/discuz');

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

		if ($('body.pg_task').length)
		{
			let _a = $('#ct .bbda a:has(> img[alt="apply"])');

			if (_a.length)
			{
				_a.each(function (index, elem)
				{
					elem.click();
				})
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
