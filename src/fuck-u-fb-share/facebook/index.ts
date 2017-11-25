/**
 * Created by user on 2017/11/22/022.
 */

import { IDemo } from 'root/lib/core/demo';
import * as Promise from 'bluebird';
//import { parse_url } from 'root/lib/func/parse_url';

'use strict';

let o: IDemo = {

	//priority: 100,

	metadata: {
		match: [
			'http*://www.facebook.com/*',
			'http*://facebook.com/*',
		],
		nomatch: [

		],
		exclude: [

		],
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

	async main(_url_obj = global._url_obj)
	{
		await Promise.delay(2000);

		const _uf_done = require('root/lib/event/done')._uf_done2;
		//const onCapture = require('root/lib/jquery/event/capture').onCapture;
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');

		let _a_selector = 'a.share_action_link';

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

export type vShare = string | number;

export interface IShare
{
	s?: vShare;
	appid?: vShare;
	id?: vShare;
	p?: vShare[];
	sharer_type?: string;
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
	} as IShare;

	query.appid = 25554907596;
	query.s = 22;

	let _area = _a
		.parents([
			'div.userContentWrapper:eq(0)',
			'div[role="article"]:eq(0) .uiPopover + .clearfix',
			'div[role="feed"] div[role="article"]:eq(0) .uiPopover + h5:eq(0)',
		].join(','))
		.eq(0)
	;

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

			if (!_form.is('.profileLink') && !_form.prevAll('.accessible_elem').length)
			{
				let _m;

				let v = get_post_id(_form.attr('href'));

				if (v)
				{
					id = v;
					query.p.push(v);
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

	let query_str = Object.keys(query)
		.reduce(function (a, b)
		{
			if (query[b])
			{
				if (Array.isArray(query[b]) && query[b].length)
				{
					for (let i in query[b])
					{
						a.push(`${b}[${i}]=${query[b][i]}`);
					}
				}
				else
				{
					a.push(`${b}=${query[b]}`);
				}
			}

			return a;
		}, [])
		.join('&')
	;

	let url = `/ajax/sharer/?${query_str}&id=${id}&sharer_type=all_modes`;

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

function chk_id(id: vShare)
{
	return (id && /^\d+$/.test(id.toString())) ? id.toString() : void(0);
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
