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
			'http*://gitee.com/*',
			'http*://gitee.com/api/*',
			'http*://gitee.com/oauth/applications/*',
			'http*://m.gitee.com/*',
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
		const { debounce } = require('throttle-debounce');
		const { throttle } = require('throttle-debounce');
		const userScriptCore = require('root/lib/core');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
		])
			.prop('target', '_blank')
		;

		let giteedata = updateGiteedata(_url_obj);

		if (!giteedata)
		{
			return;
		}

		createCss(_url_obj);

		try
		{
			// @ts-ignore
			global.pathAutoRender = window.pathAutoRender = unsafeWindow.pathAutoRender;
			// @ts-ignore
			global.Tree = window.Tree = unsafeWindow.Tree;
			// @ts-ignore
			global.ajaxGet = window.ajaxGet = unsafeWindow.ajaxGet;
		}
		catch (e)
		{
			console.error(e);
		}

		const _uf_done = require('root/lib/event/done');
		const greasemonkey = require('root/lib/greasemonkey/index');
		require('root/lib/jquery/event/key').makeJQueryPlugin($, window);
		const keycodes = require('keycodes');

		$('body')
			.on('DOMNodeInserted', '#git-project-bread', function (event)
			{
				let btn_table = $('#git-project-bread .ui.right .item.table-btn');
				let btn_clone = $('#btn-dl-or-clone');

				userScriptCoreUrl();

				$('#git-project-branch')
					.css('border-color', function (i, old)
					{
						return $('#btn-dl-or-clone').css('background-color') || old;
					})
				;

				if (!btn_table.length)
				{
					$('#git-project-bread .ui.right').prepend('<div class="item table-btn"/>');
					btn_table = $('#git-project-bread .ui.right .item.table-btn');
				}

				if (
					btn_clone.length
					&& btn_table.length
					&& !$('#edit-history', this).length
					&& giteedata.router.match(/^tree\/(.+)$/)
				)
				{
					let p = RegExp.$1;

					let btn = $(`<a href="/${giteedata.username}/${giteedata.repo}/commits/${p}" class="btn-table-item" id="edit-history" title="歷史"><i class="iconfont icon-commit"></i> 歷史</a>`);

					btn_table
						.append(btn)
					;
				}
			})
		;

		$(window)
			.on('load', debounce(1000, function (event)
			{
				console.log(event.type, event.namespace, event);

				_uf_dom_filter_link([
					'#users-events .event-group a',
					'a.view-file, .git-commit-meta a',
				].join(','))
					.prop('target', '_blank')
				;

				$('#git-project-bread').trigger('DOMNodeInserted');
			}))
			.on('load.ajax', throttle(200, function (event)
			{
				console.log(event.type, event.namespace, event);

				//$(window).triggerHandler('load.ajax');

				$('#path-breadcrumb a.section:not(.repo-name)')
					.off('click.ajax')
					.on('click.ajax', function (event)
					{
						_uf_done(event);

						let _a = $(this);

						let _p = _a.parentsUntil('#path-breadcrumb');

						if (!_p.length)
						{
							_p = _a;
						}

						// 部分狀況下導覽列沒有正確 reset
						_p.nextAll().remove();

						let _url = _a.prop('href');

						if (window.location.href != _url)
						{
							giteeAjax(_a.prop('href'));
						}
					})
				;

				codePreWarp(_url_obj);

				$(window).triggerHandler('resize');
			}))
			.on('popstate.ajax', debounce(200, function (event)
			{
				console.log(event.type, event.namespace, event);

				userScriptCoreUrl();
				$(window).triggerHandler('load');
			}))
			.on('resize', debounce(200, function ()
			{
				const _is_mobile = /^m\./.test(_url_obj.host);

				let vw = $(window).innerWidth();

				let mw = Math.min(1040, vw);

				if (!_is_mobile)
				{
					mw -= 30;
				}

				$(`._pre_warp_area, .file_content`)
					.css({
						'max-width': mw,
					})
				;
			}))
			.triggerHandler('load')
		;

		$('#project-app')
			.on('DOMNodeInserted', debounce(500, function (event)
			{
				//console.log(event.type, event.namespace, event);

				$('.view-content')
					.one('DOMNodeInserted', debounce(200, function (event)
					{
						console.log(event.type, event.namespace, event);
						$(window).triggerHandler('load');
					}))
				;

				if ($('.file_content.code').length)
				{
					$(window).triggerHandler('load');
				}
			}))
		;

		function userScriptCoreUrl()
		{
			userScriptCore
				.url(window.location.href, global, function (_url, domain, old)
				{
					userScriptCore.greasemonkey.debug('location', _url, domain._url_obj, old);

					_url_obj = domain._url_obj;

					giteedata = updateGiteedata(_url_obj);

					$(window).triggerHandler('popstate.ajax');
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

function updateGiteedata(_url_obj = global._url_obj)
{
	let giteedata;

	if (_url_obj.path.match(/^\/([^\/]+)\/([^\/]+)(?:\/(.*))?$/))
	{
		giteedata = {
			username: RegExp.$1,
			repo: RegExp.$2,
			router: RegExp.$3,
			isajax: typeof updateGiteedata.inited != 'undefined',
		};

		console.info(giteedata);
	}

	updateGiteedata.inited = true;

	return giteedata;
}

namespace updateGiteedata
{
	export let inited: boolean;
}

import { IXMLHttpRequestResponse } from 'root/lib/greasemonkey/gm/xhr';

function giteeAjax(url: string, options?)
{
	//const GM_XHR = require('root/lib/greasemonkey/gm/xhr');

	let xhrFields = {
		headers: {
			Accept: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
			"Content-Type": "text/javascript; charset=utf-8",
			"Cache-Control": "must-revalidate, no-cache, no-store, private, max-age=0",
		},

		dataType: "script",

		accepts: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
		contentType: "text/javascript; charset=utf-8",

		cache: false,
	};

	console.log('state', history.state, url);

	return $.getScript(url, Object.assign({}, options, {

			data: {
				_: Date.now(),
			},

			...xhrFields,

			xhrFields,

		}))
		// @ts-ignore
		//return unsafeWindow.ajaxGet(url)
		.done(function (script, textStatus)
		{
			let stateObj = history.state;

//			console.log({
//				script, textStatus
//			});

			//console.log(777777);

			//console.log(script, textStatus);

			// @ts-ignore
			//unsafeWindow.eval(script);

			history.pushState(stateObj, document.title, url);

			$(window).triggerHandler('popstate.ajax');
		})
		.fail(function (jqxhr, settings, exception)
		{
			console.error("Triggered ajaxError handler.", {
				jqxhr, settings, exception,
			});
		})
		;
}

function codePreWarp(_url_obj = global._url_obj)
{
	const _is_mobile = /^m\./.test(_url_obj.host);

	let _area = $('.file_content.code > .lines');

	if ($('._pre_warp_area').length)
	{
		return;
	}

	let _ok: boolean;

	let _new_list = $(`<div class="_pre_warp_area"/>`);

	_area
		.find('.line-numbers a')
		.each(function ()
		{
			let _num = $(this);

			let _n = _num.attr('id').replace(/^\D+/, '');

			let _code = _area.find(`#LC${_n}`);

			let _div = $('<div class="_pre_warp_area_row"/>');

			let _num_div = $(`<div class="line-numbers"/>`)
				.appendTo(_div);
			;

			let _code_div = $(`<pre/>`)
				.appendTo($(`<div class="highlight"/>`).appendTo(_div));
			;

			_num.appendTo(_num_div);
			_code.appendTo(_code_div);

			//_new_list = _new_list.add(_div);

			_new_list.append(_div);

			_ok = true;
		})
	;

	if (_ok)
	{
		_area
			.find('> .line-numbers, > .highlight')
			.hide()
		;
	}

	_new_list.appendTo(_area);

	//console.log(_new_list);
}

function createCss(_url_obj = global._url_obj)
{
	const _is_mobile = /^m\./.test(_url_obj.host);

	let _head = $('body')[0];

	greasemonkey.GM_addStyle([

		`._pre_warp_area { padding-top: 5px; padding-bottom: 5px; }`,
		`._pre_warp_area .line-numbers, ._pre_warp_area pre { padding: 0 !important; padding-right: 5px !important; }`,
		`._pre_warp_area pre { white-space: pre-wrap !important; }`,

		`._pre_warp_area_row:hover .line-numbers { background: #1f8cd1 !important; }`,

		`.ui.container { max-width: 1040px; auto: 1040px; }`,

		`#project-app .file_holder .file_content.code .lines .line-numbers a { min-width: 20px; }`,
		`.file_holder .file_content.code .lines .highlight pre .line { min-height: 1.33em; height: auto; }`,

	].join(''), _head);

	console.log({
		_url_obj,
		_is_mobile,
	});

	if (_is_mobile)
	{
		greasemonkey.GM_addStyle([
			`body, html, :root { font-size: 9pt; }`,

			`.markdown-body, .markdown-body pre { font-size: 1em !important; }`,
		].join(''));
	}
	else
	{
		greasemonkey.GM_addStyle([
			`body, html, :root { font-size: 9pt; }`,

			`.markdown-body, .markdown-body pre, body.git-project .git-project-bread > .ui.horizontal.list .table-btn .btn-table-item, .ui.mini.buttons .button, .ui.mini.buttons .or, .ui.mini.button, .activity_content .event-note, body.git-project .tree-comment-form textarea { font-size: 1rem; }`,
		].join(''));
	}
}
