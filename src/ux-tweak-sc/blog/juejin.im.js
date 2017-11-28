/**
 * Created by user on 2017/10/29/029.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://juejin.im/*',
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
		_uf_dom_filter_link([

		].join())
			.prop('target', '_blank')
		;

		$(window)
			.on('load.ready', function ()
			{

			})
			.triggerHandler('load.ready')
		;

		this.adblock(_url_obj);
	},

	adblock(_url_obj = global._url_obj)
	{
		require('root/lib/greasemonkey/index')
			.GM_addStyle([
				'.container.entry-view .show-full { display: none !important; }',
				'.container.entry-view .show-full-block { display: none !important; }',
				'.post-content-container.hidden { max-height: auto; overflow: visible }',
			].join(''))
		;
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
