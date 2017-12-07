/**
 * Created by user on 2017/11/26/026.
 */

'use strict';

import * as userScriptCore from 'root/lib/core';
// @ts-ignore
import * as index from './index';

module.exports.id = index.id;
module.exports.name = index.name;

module.exports.indexScript = index;

userScriptCore.run(module.exports.id, module.exports, jQuery, function (uxid, exports, global, window, $jq, _url)
{
	userScriptCore.init(uxid, exports, global, window, $jq, _url);

	_init_gm();
});

function _init_gm()
{
	const UF = require('root/lib/greasemonkey/gm/menu');

	UF.registerMenuCommand({
		id: module.exports.name,
		key: 'redo',
	}, async (options) =>
	{
		let index = require(`root/src/${module.exports.id}`);

		if (index.current && index.current.length)
		{
			const label = UF.getLabel(options);

			let _dom = $();

			let temp = null;

			let list_script = index.current;

			{
				let a = [];
				for (let current of list_script)
				{
					if (a.includes(current.name))
					{
						continue;
					}

					a.push(current.name);

					for (let fn of ['adblock'])
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
