/**
 * Created by user on 2017/7/21/021.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://github.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/github\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		if ($('.reponav').length)
		{
			let nav = $('.reponav');

			let _a = $('a.reponav-item[data-selected-links*="repo_projects"]', nav)
				.clone()
				.removeAttr('data-selected-links')
				.removeAttr('data-selected')
				.attr('data-skip-pjax', '')
				.attr('href', function (i, old)
				{
					return old.replace(/\/projects$/, '/network');
				})
				.appendTo(nav)
			;

			_a
				.find('.Counter')
				.remove()
			;

			let _t = _a
				.contents()
				.filter(function() {
					return this.nodeType === 3 && this.nodeValue.match(/Projects/); //Node.TEXT_NODE
				})
				[0]
				.nodeValue = ' Network '
			;

			//console.log(_a, _t);
		}
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([].join())
		;

		//_dom.remove();

		return _dom;
	},
};
