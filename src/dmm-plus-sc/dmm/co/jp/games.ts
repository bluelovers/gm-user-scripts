/**
 * Created by user on 2017/11/17/017.
 */

import { IDemo } from 'root/lib/core/demo';

'use strict';

let o: IDemo = {

	metadata: {
		match: [
			'http*://games.dmm.co.jp/*',
			'http*://games.dmm.co.jp/detail/*',
			'http*://www.dmm.co.jp/netgame/*',
			'http*://personal.games.dmm.co.jp/my-games/*',

			'http*://games.dmm.com/*',
			'http*://games.dmm.com/detail/*',
			'http*://www.dmm.com/netgame/*',
			'http*://personal.games.dmm.com/my-games/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([
			//
			'.d-item a',
		].join())
			.prop('target', '_blank')
		;

		let $win = $(window);

		if (_url_obj.path.match(/exchange|error|regist|login|netgame_s|list/))
		{
			//dmm_area_cookies();
		}

		if (_url_obj.path.match(/gadgets/))
		{
			document.title = document.title
				.replace(' - オンラインゲーム - DMM.com', '')
				.replace(' - オンラインゲーム - DMM.R18', '')
			;
		}

		if (_url_obj.path.match(/login/))
		{
			$win
				.on('load.ready', function () {
					$(':input')
						.filter('#save_login_id, #save_password, #use_auto_login')
						.attr('checked', true)
						.prop('checked', true)
						.trigger('change')
					;

					$(':input')
						.filter('[name=save_login_id], [name=save_password], [name=use_auto_login]')
						.val(1)
					;
				})
			;
		}

		$win
			.on('load.ready', function ()
			{
				$(':checkbox[name=notification]')
					.removeAttr('checked')
					.prop('checked', false)
					.trigger('change')
				;
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
			.add([
				//
			].join())
		;

		//_dom.remove();

		return _dom;
	},

};

export = o;

function dmm_area_cookies()
{
	if (dmm_area_cookies.done)
	{
		return true;
	}

	var days = 365;

	var date = new Date();
	date.setTime(date.getTime()+(days * 24 * 60 * 60 * 1000));
	var _expires = date.toGMTString();

	_expires = ';expires=' + _expires;

	var _domain_list = [
		'203.104.209.7',

		'www.dmm.com',
		'osapi.dmm.com',
		'log-netgame.dmm.com',
		'.dmm.com',
		'display.dmm.com',

		'www.dmm.co.jp',
		'osapi.dmm.co.jp',
		'log-netgame.dmm.co.jp',
		'.dmm.co.jp',
		'display.dmm.co.jp',

		'sp.dmm.co.jp',
		'sp.dmm.com',
	];

	var _data_list = {
		ckcy: 1,
		cklg: 'ja',

		'check_done_login': 1,
		'check_open_login': 1,

		'foreign_service_list': 1,

	};

	var _path_list = [
		'/netgame/',
		'/',
		'/gadgets/',
	];

	var _log = [];

	for (var _domain in _domain_list)
	{
		for (var _data in _data_list)
		{
			for (var _path in _path_list)
			{

				document.cookie = _data + '=' + '' + ';expires=Thu, 01 Jan 1970 00:00:01 GMT' + ';domain=' + _domain_list[_domain] + ';path=' + _path_list[_path];

				var _cookies = _data + '=' + _data_list[_data] + _expires + ';domain=' + _domain_list[_domain] + ';path=' + _path_list[_path];

				document.cookie = _cookies;
			}
		}
	}

	dmm_area_cookies.done = true;
}
