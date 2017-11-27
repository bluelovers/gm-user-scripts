/**
 * Created by user on 2017/11/13/013.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http://postserv.post.gov.tw/pstmail/main_mail.html*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj.source, module.exports))
		{
			return true;
		}
		//console.debug(777, ret);

		/*
		if (_url_obj.host.match(/3dmgame\.com/))
		{
			return true;
		}
		*/

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const debounce = require('throttle-debounce/debounce');
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([].join())
			.prop('target', '_blank')
		;

		$('#wrapper').on('DOMNodeInserted', debounce(500, function ()
		{
			$(window).triggerHandler('load.ready');
		}));

		$(window)
			.on('load.ready', debounce(100, function ()
			{
				let input = $('#MAILNO1');

				if (input.length && !input.val())
				{
					let r = /MAILNO\d?=(\d+)/;

					if (document.referrer.match(r) || (_url_obj && _url_obj.query.match(r)))
					{
						input
							.val('123')
							.trigger('keydown')
							.trigger('keyup')
							.val(RegExp.$1)
							.trigger('change')
						;

						{
							let event = new Event('change');
							input[0].dispatchEvent(event);
						}
					}
				}
			}))
		;
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

		//_dom.remove();

		return _dom;
	},
};
