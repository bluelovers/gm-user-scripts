/**
 * Created by user on 2017/7/22/022.
 */

'use strict';

// @ts-ignore
import { IDemo, IGlobal, IGreasemonkey, IWindow, IJQueryStatic, IUrlObject2 } from 'root/lib/core/demo';

declare const global: IGlobal;
declare const greasemonkey: IGreasemonkey;
declare const window: IWindow;
declare const unsafeWindow: IWindow;
declare const $: IJQueryStatic;
declare const jQuery: IJQueryStatic;

let o: IDemo = {

	metadata: {
		include: [
			'http*://*.mitemin.net/*',
		],
		nomatch: [],
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

		let _imgs = $('.imageview, .image_infomation, .profile_image').find('img');

		if (_imgs.length)
		{
			const _uf_fixsize2 = require('root/lib/dom/img/size')._uf_fixsize2;
			const _mitemin = require('mitemin').parse;

			_imgs
				.imagesLoaded()
				.done(function (data)
				{
					$(data.elements).each((i, elem) => {
						let _this = $(elem);

						let _src = _this.prop('src');

						try
						{
							let data = _mitemin(_src);

							if (data.fullsize)
							{
								_uf_fixsize2(_this);

								_this.prop('src', data.fullsize)
							}
						}
						catch (e)
						{

						}
					});
				})
			;
		}

	},

	adblock(_url_obj = global._url_obj)
	{
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		return _dom;
	},

};

export = o as IDemo;
