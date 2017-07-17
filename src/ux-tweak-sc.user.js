
//let jQuery = require('jquery')
global.jQuery = this.$ = this.jQuery = jQuery.noConflict();
//global.Promise = require('bluebird');

(function ($, undefined)
{
	global.$ = $;

	$(() =>
	{
		try
		{
			_init();

			require('./ux-tweak-sc').main();
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
})(jQuery);

function _init()
{
	const parse_url = require('./lib/func/parse_url');

	global._url = window.location.href;
	global._url_obj = global._url_obj_ = parse_url(global._url);

	let imagesLoaded = require('imagesloaded');
	imagesLoaded.makeJQueryPlugin(jQuery);

	require('./lib/jquery/scrollTo').makeJQueryPlugin(jQuery);

	_init_gm();
}

function _init_gm()
{
	GM_registerMenuCommand("disable_nocontextmenu", function ()
	{
		const label = 'disable_nocontextmenu';

		console.time(label);
		require('./lib/dom/disable_nocontextmenu')
			._uf_disable_nocontextmenu2(2)
		;
		console.timeEnd(label);
	});
}
