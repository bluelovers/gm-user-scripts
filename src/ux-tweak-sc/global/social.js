/**
 * Created by user on 2017/8/6/006.
 */

'use strict';

module.exports = {

	priority: 0,

	metadata: {
		include: [
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		return true;
	},

	main(_url_obj = global._url_obj)
	{
	},

	adblock(_url_obj = global._url_obj)
	{
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				'#facebook-like-bottom, #fb-root',
			].join())
		;

		//_dom.remove();

		return _dom;
	},
};
