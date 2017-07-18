'use strict';

module.exports.name = 'ux-tweak-sc';

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

			let index = require('./ux-tweak-sc');

			index.main();

			console.info(index.current);
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
	require('./lib/jquery/push').makeJQueryPlugin(jQuery);

	_init_gm();
}

function _init_gm()
{
	GM_registerMenuCommand(`[${module.exports.name}] disable_nocontextmenu`, function ()
	{
		const label = `[${module.exports.name}] disable_nocontextmenu`;
		console.time(label);

		require('./lib/dom/disable_nocontextmenu')
			._uf_disable_nocontextmenu2(2)
		;

		console.timeEnd(label);
	});

	GM_registerMenuCommand(`[${module.exports.name}] clearly`, function ()
	{
		const label = `[${module.exports.name}] clearly`;
		console.time(label);

		let index = require('./ux-tweak-sc');

		if (index.current && index.current.lib)
		{
			try
			{
				['adblock', 'clearly']
					.forEach((fn) =>
					{
						if (typeof index.current.lib[fn] == 'function')
						{
							index.current.lib[fn](global._url_obj);
						}
					})
				;
			}
			catch(e)
			{
				console.error(e);
			}

		}

		console.timeEnd(label);
	});
}
