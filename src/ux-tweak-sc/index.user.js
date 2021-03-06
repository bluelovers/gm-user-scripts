'use strict';

module.exports.id = 'ux-tweak-sc';
module.exports.name = module.exports.id;

const userScriptCore = require("root/lib/core");

//let jQuery = require('jquery')
//global.jQuery = this.$ = this.jQuery = (jQuery || window.jQuery).noConflict();
//global.Promise = require('bluebird');

/*
(function ($, undefined)
{
	//window.$ = global.$ = $;

	let _dummy = async () =>
	{
		try
		{
			_init();

			let index = require(`./${module.exports.id}`);

			await index.main(index.list);

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
	};

	$(() =>
	{
		_dummy();
	});
})(jQuery);
*/

userScriptCore.run(module.exports.id, module.exports, jQuery, _init);

function _init(uxid, exports, global, window, $jq, _url)
{
	userScriptCore.init(uxid, exports, global, window, $jq, _url);

	let imagesLoaded = require('imagesloaded');
	imagesLoaded.makeJQueryPlugin($jq);

	require('root/lib/jquery/scrollTo').makeJQueryPlugin($jq);
	require('root/lib/jquery/push').makeJQueryPlugin($jq);

	_init_gm();
}

function _init_gm()
{
	const UF = require('root/lib/greasemonkey/gm/menu');

	UF.registerMenuCommand({
		id: module.exports.name,
		key: 'disable_nocontextmenu',
	}, (options) =>
	{
		require('root/lib/dom/disable_nocontextmenu')
			._uf_disable_nocontextmenu2(2)
		;
	});

	UF.registerMenuCommand({
		id: module.exports.name,
		key: 'clearly',
	}, async (options) =>
	{
		let index = require(`root/src/${module.exports.id}`);

		if (index.current && index.current.length)
		{
			const label = UF.getLabel(options);

			let _dom = $();

			let temp = null;

			let list_script = require('root/lib/core/index').get_list_script(module.exports.id, index, global._url_obj);

			//console.log(list_script);

			{
				let a = [];
				for (let current of list_script)
				{
					if (a.includes(current.name))
					{
						continue;
					}

					a.push(current.name);

					for (let fn of ['adblock', 'clearly'])
					{
						if (typeof current.lib[fn] == 'function')
						{
							let ret = await current.lib[fn](global._url_obj, _dom);

							if (ret && ret !== true)
							{
								if (fn == 'clearly')
								{
									//_dom = _dom.add(ret);

									if (ret.length)
									{
										// allow remove dom from list
										// need update clearly
										_dom = ret;
									}

									//console.log(777, [ret.length, ret], [_dom.length, _dom]);
								}

								console.info(label, current.name, fn, [ret.length, ret], [_dom.length, _dom]);
							}
						}
					}
				}
			}

			console.info(label, [_dom.length, _dom]);

			_dom
				.remove()
			;
		}
	});

}

/*
function get_list_script(index, _url_obj)
{
	let list_script = index.list_script
		.reduce(function (a, name)
		{
			let lib = require(`./${module.exports.id}/${name}`);

			let name_id = name;

			if (lib.name && lib.name != name_id)
			{
				name_id = `${lib.name} - ${name_id}`;
			}

			if (lib.script_method && lib.script_method.clearly && lib.test(_url_obj))
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
	;

	return list_script;
}
*/
