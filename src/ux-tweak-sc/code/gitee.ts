/**
 * Created by user on 2017/11/26/026.
 */

"use strict";

// @ts-ignore
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
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

		if (_url_obj.path.match(/\/api\//))
		{
			$('.parameters :input[autocomplete], .parameters form').prop('autocomplete', 'on');
		}

		$(window)
			.on('load', function ()
			{
				_uf_dom_filter_link([
					'#users-events .event-group a',
					'a.view-file, .git-commit-meta a',
				].join(','))
					.prop('target', '_blank')
				;

				$('.edit_oauth_application :input[disabled]')
					//.filter('#secret, #uid')
					.removeAttr('disabled')
					.prop('readonly', 'true')
				;
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

			].join())
		;

		return _dom;
	},

};

export = o as IDemo;
