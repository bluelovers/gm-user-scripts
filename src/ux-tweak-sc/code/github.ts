/**
 * Created by user on 2017/7/21/021.
 */

import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

let o: IDemo = {

	metadata: {
		include: [
			'http*://github.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/github\.com/))
		{
			return true;
		}

		return false;
	},

	async main(_url_obj = global._url_obj)
	{
		const debounce = require('throttle-debounce/debounce');
		const throttle = require('throttle-debounce/throttle');
		//require('root/lib/jquery/history.state').makeJQueryPlugin();
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

		greasemonkey
			.GM_addStyle([

				//`body, html, :root { font-size: 9pt; }`,

			])
		;

		const $window = $(window);

		$window
			.on('load.change', debounce(500, function (event)
			{
				console.log(event.type, this, event.target);

				_uf_dom_filter_link([
					'a.notification-indicator, a.notifications-repo-link',
					'#dashboard a[data-hydro-click]',
					'#js-repos-container .source a[data-hydro-click]',
				])
					.prop('target', '_blank')
				;

				let nav = $('.notifications-list a.js-notification-target.list-group-item-link');

				if (nav.length > 1)
				{
					nav.prop('target', '_blank')
				}

			}))
			.on('load.pagehead', debounce(500, function ()
			{
				let nav = $('.reponav');

				if (nav.length)
				{
					let _a = $('a.reponav-item[href$="/network"]', nav);

					if (!_a.length)
					{
						_a = $('a.reponav-item[data-selected-links*="repo_projects"]', nav)
							.clone()
							.removeAttr('data-selected-links')
							.removeAttr('data-selected')
							.removeAttr('data-hotkey')
							.attr('data-skip-pjax', '')
							.attr('href', function (i, old)
							{
								return old.replace(/\/projects$/, '/network');
							})
							.appendTo(nav)
						;

						_a
							.find('.Counter')
							.remove()
						;

						let _t = _a
							.contents()
							// @ts-ignore
							.filter(function ()
							{
								return this.nodeType === 3 && this.nodeValue.match(/Projects/); //Node.TEXT_NODE
							})
							[0]
							.nodeValue = ' Network '
						;

						//console.log(_a, _t);
					}
				}
			}))
			;

		$window.one('load.hook', debounce(1000, function (event)
			{
				//console.log(event.type, this, event.target);

				$('#js-repo-pjax-container')
					.on('DOMNodeInserted', function (event)
					{
						let target = $(event.target);

						if (target.is('.pagehead, .notifications-list'))
						{
							$window.triggerHandler('load');
						}
						else if (target.is('.container'))
						{
							console.log(event.type, this, event.target, event);
						}
						else
						{
							//console.log(event.type, this, event.target, event);
						}
					})
				;

				$('#js-pjax-container')
					.on('DOMNodeInserted', function (event)
					{
						let target = $(event.target);

						if (target.is('.container'))
						{
							$window.triggerHandler('load');
						}
					})
				;

				$('#dashboard')
					.on('DOMNodeInserted', debounce(500, function (event)
					{
						let target = $(event.target);

						if (target.is('.news'))
						{
							$window.triggerHandler('load');
						}
					}))
				;
			}));
		;

		$window.triggerHandler('load');
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([].join())
		;

		return _dom;
	},
};

export = o as IDemo;
