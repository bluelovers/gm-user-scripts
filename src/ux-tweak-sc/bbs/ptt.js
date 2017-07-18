/**
 * Created by user on 2017/7/19/019.
 */

'use strict';

module.exports = {

	metadata: {
		match: [
			'http*://www.ptt.cc/*',
		],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if (_url_obj.host.match(/ptt\.cc/))
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

		ask_over18(_url_obj);
	},

	adblock(_url_obj = global._url_obj)
	{

	},

	clearly(_url_obj = global._url_obj)
	{

	},
};

function ask_over18(_url_obj = global._url_obj)
{
	let _form = $('form[action*="ask"] :submit[name="yes"]');

	if (_form.length)
	{
		_form[0].click();

		return true;
	}
}
