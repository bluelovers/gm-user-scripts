/**
 * Created by user on 2017/11/14/014.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'https://comic-walker.com/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		let ret;

		if (ret = require('root/src/lib/greasemonkey/match').auto(_url_obj._source, module.exports))
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
		const _uf_dom_filter_link = require('root/src/lib/dom/filter/link');
		_uf_dom_filter_link([
			'.detail_latestStoryBtn a, .bookAuther a, .readableLinkColor a',
			'#togetherRead a, #comicsRelative a, #bookSummary a',
			'#bookCartLink a, #infomationList a',

			'.tileList a',
			'#topSlider a',
		].join())
			.prop('target', '_blank')
		;

		module.exports.adblock(_url_obj);

		if ($('#cw-viewer').length)
		{
			require('root/src/lib/dom/disable_nocontextmenu')
				._uf_disable_nocontextmenu2(1, 'body')
			;
		}
	},

	adblock(_url_obj = global._url_obj)
	{
		$()
			.add([
				'#middle_banner',
			].join())
			.remove()
		;
	},

	clearly(_url_obj = global._url_obj, _dom_list = null)
	{
		let _dom = $(_dom_list);

		_dom = _dom
			.add([
				//'#characterInfomation .bannerList',
				//'#comicsRelative',
				'#togetherRead',
				'.shareBtnBox',
				'#bookCartLink',
				'.settingBtnBox',
			].join())
			.add($('#mainContent .divideLeft').parentsUntil('body').addBack().siblings())
		;

		//_dom.remove();

		return _dom;
	},
};
