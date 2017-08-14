/**
 * Created by user on 2017/8/9/009.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://wiki.guildwars2.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/wiki.guildwars2\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../../lib/dom/filter/link');

		let _link = [
			'a.external, .gallery .thumb a.image',
		];

		if (_url_obj.path.match(/\/Game_updates\//))
		{
			_link.push('#mw-content-text a');
		}

		_uf_dom_filter_link(_link.join())
			.not('.mw-editsection a, #toc a')
			.prop('target', '_blank')
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

			].join())
		;

		//_dom.remove();

		return _dom;
	},
};
