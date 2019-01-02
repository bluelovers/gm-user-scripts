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

		const copyonclick = require('root/lib/func/copy').copyonclick;

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
				console.time('_fn_editor');

				let _ql_editor = $('> .ql-editor', _editor).clone();

				$('style, script, link').each(function ()
					{
						// @ts-ignore
						this.disabled = true;
					})
					.attr('disabled', 'disabled')
					.remove()
				;

				_ql_editor
					.removeAttr('contenteditable')
					.removeAttr('class')
					.removeAttr('style');
				;

				$(':root').html('<body/>');

				$('html, :root, body')
					.removeAttr('lang')
					.removeAttr('style')
				;

				_ql_editor.attr('id', '_body');

				/**
				 * 解決不了 chrome 複製/貼上過程的BUG
				 */
				0 && $('*[style]', _ql_editor)
					.each(function ()
					{
						let _this = $(this);

						let _style = this.style;

						let _ok: boolean;

//						let _props: Array<keyof typeof _this[0]["style"]>;
						let _props: Array<string>;

						_props = [
							'color',
							'background-color',
						];

						let s = '';

						_props
							.forEach(function (_prop)
							{
								if (_style[_prop])
								{
									let c = $.Color(_style[_prop]);

									let hex = c.toHexString();

//									_this.css(_prop as string, 'initial');
//
//									_this.css(_prop as string, hex);


									_style[_prop as string] = '';
									//_style[_prop as string] = hex;

									s += `;${_prop}: ${hex};`;

									_ok = true;
								}
							})
						;

						if (_ok)
						{
							_this.attr('style', function (i, old)
							{
								return old + s;
							});

							console.log(_ok, _this, _style);
						}
					})
				;

				$('body')
				// @ts-ignore
					.html(_ql_editor)
					.prepend(`<div style="padding: 10px; text-align: center;"><button id="_copy">Copy</button></div>`)
				;

				$('#_copy').attr('onclick', copyonclick(_ql_editor.attr('id')));

				greasemonkey.GM_addStyle([
					`body > div { margin: auto; max-width: 800px; }`,
					`p { line-height: 110%; margin-block-start: auto; margin-block-end: auto; }`,
					`:root, body, html { font-size: 9pt; font-family: initial !important; }`,
				], $('body'));

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
