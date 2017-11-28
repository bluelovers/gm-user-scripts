/**
 * Created by user on 2017/11/6/006.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://www.fun01.cc/*',
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
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link([].join())
			.prop('target', '_blank')
		;

		const _uf_disable_nocontextmenu = require('root/lib/dom/disable_nocontextmenu')
			._uf_disable_nocontextmenu2(2, '.postDetail')
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
				'.doLogin, .avatar',
			].join())
			.add($('.postDetail').parentsUntil('body').addBack().siblings())
			.add($('.postDetail .content').nextAll())
			.add($('.postDetail #postEnd').nextAll())
		;

		require('root/lib/greasemonkey/index')
			.GM_addStyle([
			`body { background: none; }`,
		].join(''))
		;

		//_dom.remove();

		return _dom;
	},
};
