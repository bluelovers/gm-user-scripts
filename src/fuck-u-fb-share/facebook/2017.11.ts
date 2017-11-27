/**
 * Created by user on 2017/11/22/022.
 */

import { IDemo, IGlobal } from 'root/lib/core/demo';
import * as Promise from 'bluebird';
//import { parse_url } from 'root/lib/func/parse_url';

declare const global: IGlobal;

'use strict';

let o: IDemo = {

	//priority: 100,

	metadata: {
		match: [
			'http*://www.facebook.com/*',
			'http*://facebook.com/*',
		],
		nomatch: [],
		exclude: [],
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
		await Promise.delay(2000);

		const _uf_done = require('root/lib/event/done')._uf_done2;
		//const onCapture = require('root/lib/jquery/event/capture').onCapture;
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

		let _a_selector = 'a.share_action_link:not([data-is-link=2])';

		$('body')
			.on('click mousedown', `span[aria-haspopup="true"]:has(> ${_a_selector})`, function (event)
			{
				if (_uf_dom_filter_link($(this).find(_a_selector)).length)
				{
					_uf_done(event);
				}
			})
			.on('mouseover', `span:has(> ${_a_selector}), ${_a_selector}`, function (event)
			{
				let ret = dailog_share($(this).find(_a_selector).addBack().filter('a'));

				if (!ret)
				{
					_uf_done(event);
				}
			})
			.on('click.share', _a_selector, function (event)
			{
				let self = this;

				dailog_share($(this));
			})
		;

		/*
		onCapture($('body'), 'mouseover', _a_selector, function (event)
		{
			let self = this;

			dailog_share($(this), function ()
			{
				console.log(444, event, self);
			});
			_uf_done(event);
		});

		onCapture($('body'), 'mousedown', `span[aria-haspopup="true"]:has(> ${_a_selector})`, function (event)
		{
			_uf_done(event);
		});

		onCapture($('body'), 'click', `span[aria-haspopup="true"]:has(> ${_a_selector})`, function (event)
		{
			_uf_done(event);
		});

		onCapture($('body'), 'click', _a_selector, function (event)
		{
			let self = this;

			dailog_share($(this), function ()
			{
				console.log(555, event, self);
			});
			//_uf_done(event);
		});
		*/
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

type vShare = string | number;

interface IShare
{
	s?: vShare;
	appid?: vShare;
	id?: vShare;
	p?: vShare[];
	sharer_type?: vShare;
	share_type?: vShare;

	parent_fbid?: vShare;
	share_source_type: string;

	dpr?: number;
}

function dailog_share(_a, cb?)
{
	_a = _a.filter('a');

	if (!_a.length || require('root/lib/dom/filter/link')(_a).length)
	{
		return;
	}

	let id: vShare;
	let _form;

	let query = {
		p: [],
		share_type: 'all_modes',
		share_source_type: 'unknown',
	} as IShare;

	let _cache = {} as any;

	query.appid = 25554907596;
	query.s = 22;
	//query.s = 2;
	//query.s = 99;

	/*
	// not work
	query.appid = 2309869772;
	*/
	//query.st = 'all_modes';
	//query.type = 99;
	query.dpr = 1;
	query.feedback_source = 2;

	query[`internalextra[feedback_source]`] = 2;

	query.is_forced_reshare_of_post = 1;

	let _area = _a
		.parents([
			'div.userContentWrapper:eq(0)',
			'div[role="article"]:eq(0) .uiPopover + .clearfix',
			'div[role="feed"] div[role="article"]:eq(0) .uiPopover + h5:eq(0)',
		].join(','))
		.eq(0)
	;

	_cache.is_link = post_is_link(_area);

	if (!id)
	{
		_form = _area
			.find('h5:eq(0) .fcg, h6:eq(0) > .fcg')
			.find('.profileLink:eq(-1), .profileLink:eq(-2), a:not(.profileLink)')
		;

		//console.log(55, _form, _area);

		if (_form.length >= 2)
		{
			_form = _form.eq(-1);

			if (!_form.is('.profileLink, [data-hover="tooltip"]') && !_form.prevAll('.accessible_elem').length)
			{
				let _m;

				let v = get_post_id(_form.attr('href'));

				if (v)
				{
					id = v;
					query.p.push(v);

					if (v = get_post_owner(_form.attr('href')))
					{
						//query.p.unshift(v);
					}
				}
			}

			//console.log(_m, id);

			//console.log(1, id, RegExp.$1, _m, _form.attr('href'));
		}

		if (!id)
		{
			_form = _area
				.find('h5:eq(0) + div[id*="feed_subtitle"], h6:eq(0) + div[id*="feed_subtitle"]')
				.find('.fcg')
				.find('a:has(.timestamp), a:has(.timestampContent)')
			;

			if (!_form.length)
			{
				_form = _area
					.find('._5pcq')
					.find('a:has(.timestamp), a:has(.timestampContent)')
				;
			}

			if (_form.length)
			{
				let v = get_post_id(_form.attr('href'));

				if (v)
				{
					id = v;
					query.p.push(v);

					if (v = get_post_owner(_form.attr('href')))
					{
						//query.p.unshift(v);
					}
				}
			}
		}

		_form = _area
			.find('.mtm div[id*="feed_subtitle"] .fcg')
			.find('a[rel="theater"], a:has(.timestamp), a:has(.timestampContent)')
		;

		if (_form.length)
		{
			let v = get_post_id(_form.attr('href'));

			if (v)
			{
				id = v;

				if (v = get_post_owner(_form.attr('href')))
				{
					//query.p.unshift(v);
				}
			}

			//console.log([v, id], _form.attr('href'));
		}
	}

	if (!chk_id(id))
	{
		console.error('id=', id);

		return;
	}

	let timestamp = Date.now();

	{
		let _area = _a
			.parents('div.userContentWrapper:eq(0) > div > div .fwb')
			.find('a[href*="/media/set/"]')
		;

		if (_area.length)
		{
			//query.s = 2;
		}
	}

	// @todo 需要能夠找出如何分享具有連結的貼文時保留原始貼文內容
	if (_cache.is_link)
	{
		_a
			.attr('data-is-link', _cache.is_link)
			.css('color', 'rgb(147,0,68)')
		;

		// 只忽略具有訊息內容的分享連結
		if (_cache.is_link > 1)
		{
			return;
		}
	}

	query.st = query.sharer_type = query.share_type;
	query.type = query.s;

	query.p = require('root/lib/func/array/unique').array_unique(query.p);

	//query.share_params = '[%22' + query.p.join('%22%2C%22') + '%22]';
	query.share_params = array2params(query.p, 1);

	let query_str = Object.keys(query)
		.reduce(function (a, b)
		{
			if (query[b] || query[b] === 0 || query[b] === '0')
			{
				if (Array.isArray(query[b]) && query[b].length)
				{
					/*
					for (let i in query[b])
					{
						a.push(`${b}[${i}]=${query[b][i].toString()}`);
					}
					*/

					a.push(array2params(query.p, 0, b));
				}
				else
				{
					a.push(`${b}=${query[b].toString()}`);
				}
			}

			return a;
		}, [])
		.join('&')
	;

	let url = `/ajax/sharer/?${query_str}&id=${id}`;
	//let url = `/share/dialog/?${query_str}&id=${id}`;

	_a
		.attr('href', url)
		.attr('rel', 'dialog')
	;

	_a
		.after(_a.clone())
		.remove()
	;

	if (cb)
	{
		cb();
	}

	return true;
}

function array2params(arr: any[], mode = 0, prefix?: string)
{
	if (!arr || !arr.length)
	{
		return null;
	}

	let arr2 = arr.slice().map(function (value, index, array)
	{
		return value.toString();
	});

	if (mode == 1)
	{
		return '[%22' + arr.join('%22%2C%22') + '%22]';
	}

	return arr2
		.map(function (value, index, array)
		{
			return `${prefix}[${index}]=${value}`;
		})
		.join('&')
		;
}

function chk_id(id: vShare)
{
	return (id && /^\d+$/.test(id.toString())) ? id.toString() : void(0);
}

function get_post_owner(href: string): vShare
{
	const parse_url = require('root/lib/func/parse_url').parse_url;

	let _url = parse_url(href);
	let id;
	let _m;

	if (_url.query && (_m = _url.query.match(/fbid=.+&id=([^#&]+)/)))
	{
		if (chk_id(_m[1]))
		{
			id = _m[1];
		}
	}

	return id;
}

function get_post_id(href: string): vShare
{
	const parse_url = require('root/lib/func/parse_url').parse_url;

	let _url = parse_url(href);
	let id;
	let _m;

	if (_url.query && (_m = _url.query.match(/fbid=([^#&]+)/)))
	{
		if (chk_id(_m[1]))
		{
			id = _m[1];
		}
	}

	//console.log(_m);

	if (!id && _url.path)
	{
		let _a = _url.path.replace(/[\/\?&\s]+$/, '').split('/');

		_m = _a[_a.length - 1];

		if (chk_id(_m))
		{
			id = _m;
		}
	}

	//console.log(id, _url, href);

	return id;
}

/**
 * 檢測貼文是否為連結 並且 是否具有訊息內容
 *
 * @param _area
 * @returns {number}
 */
function post_is_link(_area)
{
	// @todo 完善 selector
	let _area2 = (_area.is('.mtm') ? _area : _area.find('.mtm:eq(0)')).eq(0);

	{
		let _t = _area.parents('.stat_elem:has(.uiList), .uiList').prev('div').find('.mtm:eq(0)');

		if (_t.length)
		{
			_area2 = _area2.add(_t);
		}
	}

	let _a2 = _area2
		.find('a[rel*="nofollow"][target="_blank"]')
		.filter('[data-lynx-uri], [data-lynx-mode]')
		.not([
			'.see_more_link',
			'.text_exposed_root a, .text_exposed_link a, .text_exposed_show a',
			'.profileLink',
			'.mtm > p > a',
		].join(','))
	;

	console.log('post_is_link', 1, _area, _area2, _a2);

	if (_a2.length)
	{
		let _area3 = (_area.is('.userContentWrapper') ? _area : _area.parents('.userContentWrapper:eq(0)')).eq(0);

		let _a3 = _area3
			.find([
				'.userContent',

				// https://www.facebook.com/MingSainChang/posts/10214812744983076
				'.userContent + div .mtm .mtm .mtm[data-ft=\'{"tn":"K"}\']',

				// https://www.facebook.com/libibo2/posts/1502765023123726
				'.userContentWrapper',
			].join(','))
			.eq(-1)
		;

		console.log('post_is_link', 2, _area3, _a3);

		if (_a3.text())
		{
			return 2;
		}

		return 1;
	}

	return 0;
}

function array_unique(array)
{
	return array.filter(function (el, index, arr)
	{
		return index == arr.indexOf(el);
	});
}
