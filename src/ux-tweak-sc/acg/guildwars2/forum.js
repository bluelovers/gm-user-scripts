/**
 * Created by user on 2017/8/9/009.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://forum-*.guildwars2.com/forum/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/forum\-.+\.guildwars2\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../../lib/dom/filter/link');
		_uf_dom_filter_link([
			'.message-content a, .topiclist .topic .title a, a.topic',
		].join())
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
