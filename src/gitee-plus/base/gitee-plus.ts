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

		const _uf_done = require('root/lib/event/done');
		const greasemonkey = require('root/lib/greasemonkey/index');
		require('root/lib/jquery/event/key').makeJQueryPlugin($, window);
		const keycodes = require('keycodes');

		greasemonkey.GM_addStyle([
			`body, html, :root { font-size: 9pt; }`,
			`.markdown-body, .markdown-body pre, body.git-project .git-project-bread > .ui.horizontal.list .table-btn .btn-table-item, .ui.mini.buttons .button, .ui.mini.buttons .or, .ui.mini.button, .activity_content .event-note, body.git-project .tree-comment-form textarea { font-size: 1rem; }`,
		].join(''));

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
			.on('load', debounce(1000, function ()
			{
				_uf_dom_filter_link([
					'#users-events .event-group a',
					'a.view-file, .git-commit-meta a',
				].join(','))
					.prop('target', '_blank')
				;

				$('#git-project-bread').trigger('DOMNodeInserted');
			}))
			.on('load.ajax', throttle(200, function ()
			{
				$(window).triggerHandler('load.ajax');

				$('#path-breadcrumb a.section:not(.repo-name)')
					.off('click.ajax')
					.on('click.ajax', function (event)
					{
						_uf_done(event);
						giteeAjax($(this).prop('href'));
					})
				;
			}))
			.on('popstate.ajax', throttle(200, function (event)
			{
				userScriptCoreUrl();
				$(window).triggerHandler('load');
			}))
			.triggerHandler('load')
		;

		function userScriptCoreUrl()
		{
			userScriptCore
				.url(window.location.href, global, function (_url, domain, old)
				{
					userScriptCore.greasemonkey.debug('location', _url, domain._url_obj, old);

					_url_obj = domain._url_obj;

					giteedata = updateGiteedata(_url_obj);

					$(window).triggerHandler('load.ajax');
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
			isajax: typeof updateGiteedata.inited != 'undefined'
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

		cache: false,
	};

	console.log('state', history.state);

	return $
		.getScript(url, Object.assign({}, options, {

			data: {
				_: Date.now(),
			},

			...xhrFields,

			xhrFields,

		}))
		.done(function (script, textStatus)
		{
			let stateObj = history.state;

//			console.log({
//				script, textStatus
//			});

			history.pushState(stateObj, document.title, url);

			$(window).triggerHandler('popstate.ajax');
		})
		.fail(function (jqxhr, settings, exception)
		{
			console.error("Triggered ajaxError handler.", {
				jqxhr, settings, exception
			});
		})
		;
}
