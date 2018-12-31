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
			'http*://shimo.im/docs/*',
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
//		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
//		_uf_dom_filter_link([
//			//
//		])
//			.prop('target', '_blank')
//		;

		require('root/lib/jquery/jquery.color').makeJQueryPlugin($, window);
		const UF = require('root/lib/greasemonkey/gm/menu');

		UF.registerMenuCommand({
			id: module.exports.name,
			//key: 'kill it',

			key: '破壞石墨網頁',

		}, (options) =>
		{
			_fn_editor()
		});

		function _fn_editor()
		{
			let _editor = $('#editor');

			if (_editor.length)
			{
				let _ql_editor = $('> .ql-editor', _editor).clone();

				console.time('_fn_editor');

				0 && $('p', _ql_editor)
					.each(function (index, elem)
					{
						let _p = $(this);

						$('span[style*=color]', _p)
							.each(function ()
							{
								let _span = $(this);

								let _style = this.style;

								if (_style.color)
								{
									let c = $.Color(_style.color);

									let _font = $('<font></font>');

									_font.attr('color', c.toHexString(true));

									_span.wrap(_font)
								}

							})
						;
					})
				;

				// @ts-ignore
				$('body').html(_ql_editor);

				console.timeEnd('_fn_editor');
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
