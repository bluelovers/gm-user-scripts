/**
 * Created by user on 2017/8/5/005.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.jianshu.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/jianshu\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		const _uf_dom_filter_link = require('../../lib/dom/filter/link');
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
			.add($('.article').parentsUntil('body').addBack().siblings())
			.add([
				'.follow, .avatar img, .new-comment, .iconfont, .tool-group',
			].join())
		;

		$('#comment-list, .comment-list').appendTo('.post');

		//_dom.remove();

		return _dom;
	},
};
