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

			index.main(index.list);

			console.info('index.current', index.current);
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
	const parse_url = require('./lib/func/parse_url').parse_url;

	module.exports._url = global._url = window.location.href;
	module.exports._url_obj = module.exports._url_obj_  = parse_url(global._url);
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
	}, (options) =>
	{
		require('./lib/dom/disable_nocontextmenu')
			._uf_disable_nocontextmenu2(2)
		;
	});

	UF.registerMenuCommand({
		id: module.exports.name,
		key: 'clearly',
	}, (options) =>
	{
		let index = require(`./${module.exports.id}`);

		if (index.current && index.current.length)
		{
			const label = options.label || `[${options.name || options.id}] ${options.key}`;

			let _dom = $();

			index.list_script
				.reduce(function (a, name)
				{
					let lib = require(`./${module.exports.id}/${name}`);

					let name_id = name;

					if (lib.name && lib.name != name_id)
					{
						name_id = `${lib.name} - ${name_id}`;
					}

					if (lib.script_method && lib.script_method.clearly && lib.test(global._url_obj))
					{
						a.push({
							name: name,
							name_id: name_id,

							lib: lib,
						});
					}

					return a;
				}, [])
				.concat(index.current)
				.forEach((current) =>
				{
					['adblock', 'clearly']
						.forEach((fn) =>
						{
							if (typeof current.lib[fn] == 'function')
							{
								let ret = current.lib[fn](global._url_obj, _dom);

								if (ret && ret !== true)
								{
									if (fn == 'clearly')
									{
										_dom = _dom.add(ret);
									}

									console.info(label, current.name, fn, [ret.length, ret]);
								}
							}
						})
					;
				})
			;

			console.info(label, [_dom.length, _dom]);

			_dom
				.remove()
			;
		}
	});
}
