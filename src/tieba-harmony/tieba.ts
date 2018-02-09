/**
 * Created by user on 2017/11/26/026.
 */

import { IDemo, IGlobal } from 'root/lib/core/demo';

declare const global: IGlobal;

'use strict';

let o: IDemo = {

	metadata: {
		include: [
			'http*://tieba.baidu.com/*',
		],
		match: [],
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
		let tiebaHarmony = require('tieba-harmony');

		$('#tb_rich_poster_container .poster_submit')
			.on('mousedown', function ()
			{
				$('#ueditor_replace')
					.find('*')
					.contents()
					// @ts-ignore
					.filter(function ()
					{
						return this.nodeType === 3 && this.nodeValue;
					})
					.each(function (index, elem)
					{
						let _this = $(this);

						let _t = tiebaHarmony.escape(_this.text());

						if (this.nodeValue != _t)
						{
							this.nodeValue = _t;
						}
					})
				;
			})
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

		return _dom;
	},

};

export = o;
