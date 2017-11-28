/**
 * Created by user on 2017/8/4/004.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://gw2.vsgames.cn/*',
			'http*://*.vsgames.cn/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/vsgames\.cn/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('root/lib/dom/filter/link');
		_uf_dom_filter_link('')
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
			.add($('#content').parentsUntil('body').addBack().siblings())
			.add($('#main').appendTo('body').siblings())
			.add([
				'.btn-new-topic, .reply-user-avatar, #replytopic, #footer',
			].join())
		;

		//_dom.remove();

		return _dom;
	},
};
