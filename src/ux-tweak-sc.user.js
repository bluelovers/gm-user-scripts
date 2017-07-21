'use strict';

module.exports.id = 'ux-tweak-sc';
module.exports.name = module.exports.id;

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
	const UF = require('./lib/greasemonkey/framework');

	UF.registerMenuCommand({
		id: module.exports.name,
		key: 'disable_nocontextmenu',
	}, () =>
	{
		require('./lib/dom/disable_nocontextmenu')
			._uf_disable_nocontextmenu2(2)
		;
	});

	UF.registerMenuCommand({
		id: module.exports.name,
		key: 'clearly',
	}, () =>
	{
		let index = require(`./${module.exports.id}`);

		if (index.current && index.current.lib)
		{
			['adblock', 'clearly']
				.forEach((fn) =>
				{
					if (typeof index.current.lib[fn] == 'function')
					{
						let ret = index.current.lib[fn](global._url_obj);

						if (ret && ret !== true)
						{
							console.info(label, fn, [ret.length, ret]);
						}
					}
				})
			;
		}
	});
}
