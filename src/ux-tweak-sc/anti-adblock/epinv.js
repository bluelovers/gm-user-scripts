/**
 * Created by user on 2017/7/23/023.
 */

'use strict';

module.exports = {

	metadata: {
		include: [
			'http*://www.epinv.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/epinv\.com/))
		{
			return true;
		}

		return false;
	},

	main(_url_obj = global._url_obj)
	{
		module.exports.adblock(_url_obj);
	},

	adblock(_url_obj = global._url_obj)
	{
		$(window)
			.on('load.adblock', function (event)
			{
				if ($('#epd .danger').length)
				{
					$('#epd')
						.not('[data-done]')
						.attr('data-done', true)
						.html(`<strong>下载地址：</strong><a href="javascript:void(0);" onclick="getDownloadUrl()" ;="">提取下载地址列表</a>`)
					;

					$('#epd > a[href*="javascript"]').eq(0).click();
				}
			})
			.triggerHandler('load.adblock')
		;
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
