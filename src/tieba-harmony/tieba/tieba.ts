/**
 * Created by user on 2017/11/26/026.
 */

import { IDemo, IGlobal } from 'lib/core/demo';

declare const global: IGlobal;

'use strict';

let o: IDemo = {

	metadata: {
		include: [
			'http*://tieba.baidu.com/*',
		],
		match: [],
		exclude: [
			'http*://tieba.baidu.com/i*',
			'http*://tieba.baidu.com/h*',
			'http*://tieba.baidu.com/s*',
		],
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

		$('body')
			.on('mousedown mouseenter', '#tb_rich_poster_container .poster_submit', function ()
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
			.on('mousedown mouseenter', '#j_editor_for_container', function ()
			{
				$('#j_editor_for_container')
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
		let tiebaHarmony = require('tieba-harmony');

		$('.d_post_content')
			.add('h3.core_title_txt')
			.each(function ()
			{
				let _this = $(this);

				_this
					.find('*')
					.addBack()
					.not('.core_title_txt a')
					.contents()
					// @ts-ignore
					.filter(function ()
					{
						return this.nodeType === 3 && this.nodeValue && this.nodeValue.replace(/[\s\r\n　]+/ig, '');
					})
					.each(function (index, elem)
					{
						let _this = $(this);

						let _t = tiebaHarmony.unescape(_this.text());

						if (this.nodeValue != _t)
						{
							this.nodeValue = _t;
						}
					})
				;
			})
		;
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
