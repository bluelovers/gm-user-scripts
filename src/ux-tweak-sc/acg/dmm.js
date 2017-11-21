/**
 * Created by user on 2017/7/19/019.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.dmm.co.jp/netgame/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/dmm\.co\.jp/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_done = require('root/lib/event/done');

		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('.d-sect .d-item a, a[href*="rcv.ixd.dmm.com"], a[href*="netgame_s"]')
			.prop('target', '_blank')
			.on('click', function (event)
			{
				_uf_done(event);
				open_game($(this).prop('href'));
			})
		;

		const comic_style = require('root/lib/comic/style');

		const greasemonkey = require('root/lib/greasemonkey/index');
		greasemonkey.GM_addStyle([
			`html, body, #main-ntg, iframe, .dmm-ntgnavi { margin: auto; padding: 0; min-width: auto; min-height: auto; }`,
		].join(''));
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([

			].join())
		;

		//_dom.remove();

		return _dom;
	},
};

function open_game(url)
{
	return window.open(url, url, 'menubar=0,toolbar=0,personalbar=0,status=1,resizable=1,scrollbars=1,titlebar=1');
}
