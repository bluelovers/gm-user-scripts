/**
 * Created by user on 2017/7/17/017.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.3dmgame.com/*',
			'http*://bbs.3dmgame.com/*',
		],
		exclude: [],
	},

	test(_url_obj)
	{
		if (_url_obj.host.match(/3dmgame\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj)
	{
		require('root/src/ux-tweak-sc/global/discuz').main(_url_obj);
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		const greasemonkey = require('root/lib/greasemonkey/index');

		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				'.avatar',
				'.pct > img.image',
			].join())
		;

		greasemonkey.GM_addStyle([
			'.pl .quote blockquote { background-image: none; }',
		].join(''));

		return _dom;
	},
};
