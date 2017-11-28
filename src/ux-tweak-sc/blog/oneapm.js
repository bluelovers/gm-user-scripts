/**
 * Created by user on 2017/8/2/002.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://blog.oneapm.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/blog\.oneapm\.com/))
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
			.add($('#main').parentsUntil('body').addBack().siblings())
			.add([
				'.details .readNum, .details .commentNum, .post_info .iconfont',
				'.msgcontainer, #divSubscibe',
			].join())
		;

		require('root/lib/greasemonkey/index')
			.GM_addStyle([
				'#content.with-header-fix { padding-top: 0; }',
			].join(''))
		;

		//_dom.remove();

		return _dom;
	},
};
