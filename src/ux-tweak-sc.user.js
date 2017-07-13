(function ($, undefined)
{
	global.jQuery = global.$ = $;

	$(() =>
	{
		'use strict';

		const parse_url = require('./lib/parse_url');

		global._url = window.location.href;
		global._url_obj = global._url_obj_ = parse_url(global._url);

		try
		{
			require('./ux-tweak-sc/dm5');
		}
		catch (e)
		{
			console.error(e.message, e.stack);
		}
		finally
		{
			console.info([global._url, global._url_obj, global.unsafeWindow]);
		}
	});
})(jQuery.noConflict());
