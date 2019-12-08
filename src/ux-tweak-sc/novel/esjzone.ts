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

	metadata: {
		include: [
			'http*://www.esjzone.cc/*',
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
			'.container .thumbnail a',
			'.tabbable a',
		].join(','))
			.prop('target', '_blank')
		;

		const { throttle } = require('throttle-debounce');
		const { debounce } = require('throttle-debounce');
		const _uf_done = require('root/lib/event/done');

		const copyonclick = require('root/lib/func/copy').copyonclick;

		$('.forum-content')
			.attr('id', '_forum_content')
			.css({
				'font-size': '1rem',
				'font-family': 'initial'
			})
		;

		$('.container .alert.alert-info > .pull-right')
			.append(`<div style="padding-left: 10px; text-align: center; display: inline-block;"><button id="_copy">Copy</button></div>`);

		$('#_copy').attr('onclick', copyonclick('_forum_content'));

		const _handleContext = debounce(500, () => {
			this.clearly();

			_p_2_br($('.forum-content > p'));
			_p_2_br($('.book_description p'));
		});

		$(document)
			.ready(_handleContext)
		;

		try
		{
			if (unsafeWindow.getTranslation)
			{
				((old) => {
					unsafeWindow.getTranslation = function (...argv)
					{
						let ret = old.call(this, ...argv);

						_handleContext();

						return ret;
					}
				})(unsafeWindow.getTranslation);
			}
		}
		catch (e)
		{

		}

		$(window)
			.on('load.ready', throttle(1000, function ()
			{
				try
				{
					unsafeWindow.$(unsafeWindow.document)
						.bind({
							copy : function(){
								return true;
							}
						})
						.unbind('copy')
					;

					unsafeWindow.$(unsafeWindow.document)
						.off('copy')
					;
				}
				catch (e)
				{
					console.error(e);
				}

				$(document)
					.off('copy')
				;

				_handleContext();
			}))
			.triggerHandler('load.ready')
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
				`.forum-content p:has(> script)`,
				`.forum-content p:empty`,
			].join())
		;

		_dom.remove();

		return _dom;
	},

};

export = o as IDemo;

function _p_2_br(target)
{
	return $(target)
		.each(function ()
		{
			let _this = $(this);

			let _html = _this
				.html()
				.replace(/(?:&nbsp;?)/g, ' ')
				.replace(/[\xA0\s]+$/g, '')
			;

			if (_html == '<br/>' || _html == '<br>')
			{
				_html = '';
			}

			_this.after(`${_html}<br/>`);
			_this.remove()
		})
	;
}
