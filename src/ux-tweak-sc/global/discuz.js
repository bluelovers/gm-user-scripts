/**
 * Created by user on 2017/7/21/021.
 */

'use strict';

module.exports = {

	priority: 100,

	script: true,

	script_method: {
		clearly: true,
	},

	metadata: {
		match: [],
		exclude: [],
	},

	test(_url_obj = global._url_obj)
	{
		if ($('.discuz_tips, body#nv_forum').length)
		{
			return true;
		}

		return false;
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
			.add($('.favatar > *:has(.avatar), .favatar > .avatar').nextAll())
			.add([
				'#f_pst, body > #ft, #scrolltop, #newspecial, #post_replytmp, #post_reply, #newspecialtmp',

				'body > #hd, body > .hd_table, #myprompt_menu, #toptb, #append_parent',

				'body :hidden, script, iframe, embed',

				'.t_f img[src*="image/smiley"], .authicn, .vwthd .xg1, .vwthd .y',

				'.plc #fj, .plc .pob, #p_btn, .nvhm, .authi .none',
			].join())
		;

		$('#postlist .vwthd:eq(0) h1').prependTo('#postlist .plhin .plc:eq(0)');

		//_dom.remove();

		return _dom;
	},
};
