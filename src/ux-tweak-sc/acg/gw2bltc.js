/**
 * Created by user on 2017/10/11/011.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.gw2bltc.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/src/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
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
		const throttle = require('throttle-debounce/throttle');

		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link([].join())
			.prop('target', '_blank')
		;

		require('root/src/lib/jquery/event').makeJQueryPlugin($, window);

		$('.floatThead-wrapper')
			.on('DOMNodeInserted', debounce(300, function (event)
			{
				let a = _uf_dom_filter_link([
						'tbody .td-name > a',
					].join())
				;

				if (a.length > 1)
				{
					a.prop('target', '_blank');
				}
				else if ($(window).eventExists('load.referer'))
				{
					$(window).triggerHandler('load.referer');
				}
				else if (a.length == 1)
				{
					a.prop('target', '_blank');
				}
			}))
		;

		$('#wrap')
			.on('submit.search', '#form-search-tp', function ()
			{
				$(window).triggerHandler('form.search');
			})
			.on('click.search', '#form-search-tp #submit-search', function ()
			{
				$(window).triggerHandler('form.search');
			})
		;

		$(window)
			.on('form.search', function ()
			{
				$(window).off('load.referer');
			})
			.on('load.referer', debounce(500, function ()
			{
				if (!document.referrer || document.referrer.match(/\/item\/.+/))
				{
					let a = _uf_dom_filter_link([
							'tbody .td-name > a',
						].join())
					;

					if (a.length == 1)
					{
						a.prop('target', '_self');
						location.href = a.attr('href');
					}
				}
			}))
			.on('load.ready', function ()
			{
				$('.floatThead-wrapper').triggerHandler('DOMNodeInserted');
			})
			.triggerHandler('load.ready')
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
