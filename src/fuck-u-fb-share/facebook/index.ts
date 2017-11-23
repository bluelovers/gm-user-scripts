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

		let _a_selector = 'a.share_action_link';

		$('body')
			.on('click mousedown', `span[aria-haspopup="true"]:has(> ${_a_selector})`, function (event)
			{
				_uf_done(event);
			})
			.on('mouseover', `span:has(> ${_a_selector}), ${_a_selector}`, function (event)
			{
				_uf_done(event);
				dailog_share($(this).find(_a_selector).addBack().filter('a'));
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

function dailog_share(_a, cb?)
{
	/*
	/ajax/sharer/?s=2&appid=2305272732&id=170418016895538&p[0]=170418016895538&sharer_type=all_modes&av=1349835897&feedback_referrer=%2Fbluelovers.ka&feedback_source=17

	https://www.facebook.com/cako.taipei/photos/a.131971664073507.1073741829.130538254216848/170418016895538/?type=3&theater


	/ajax/sharer/?s=2&appid=2305272732&id=10210609936588504&p[0]=10210609936588504&sharer_type=all_modes&av=1349835897&feedback_referrer=%2Fbluelovers.ka&feedback_source=17

	*/

	_a = _a.filter('a');

	if (!_a.length || require('root/lib/dom/filter/link')(_a).length)
	{
		return;
	}

	let id;
	let _form;

	if (!id)
	{
		_form = _a
			.parents('div.userContentWrapper:eq(0)').eq(0)
			.find('h5:eq(0) .fcg:eq(0) .profileLink:eq(-1)')
		;

		if (_form.length)
		{
			/*
			https://www.facebook.com/cako.taipei/photos/a.131971664073507.1073741829.130538254216848/170418016895538/?type=3&hc_ref=ARTfXWRukmDJUM5rLOCy6vz4YXpwGgnje5P6qSO_xPKot9-JO1b0RcTTIxgPZ_I0HO8
			*/

			//let _m = _form.attr('href').match(/facebook\.com\/[^\/]+\/[^\/]+\/((?:\d+|[^\/]+\/[^\/]+))(?:\/|$|[^\d])/);
			let _m;

			/*
			_m = _form
				.attr('href').toString()
				.match(/facebook\.com\/[^\/]+\/[^\/]+\/(\d+|[^\/]+(?:\/[^\/]+)?)(?:\/|$|[\?&])/)
			;

			let parse_url = require('root/lib/func/parse_url').parse_url;

			if (_m)
			{
				id = _m[1].split('/').pop();
			}
			*/

			if (!id)
			{
				const parse_url = require('root/lib/func/parse_url').parse_url;

				_m = parse_url(_form.attr('href'));

				_m = _m.path.replace(/[\/\?&\s]+$/, '').split('/');

				id = _m[_m.length - 1];
			}

			//console.log(1, id, RegExp.$1, _m, _form.attr('href'));
		}
	}

	if (!id)
	{
		_form = _a.parents('form.commentable_item:eq(0)').eq(0);

		if (_form.length)
		{
			id = _form.find(':input[name="ft_ent_identifier"]').val();

			console.log(2, id);
		}
	}

	if (!id)
	{
		return;
	}

	let timestamp = Date.now();

	let url = `/ajax/sharer/?s=2&id=${id}&p[0]=${id}&sharer_type=all_modes`;

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
}
