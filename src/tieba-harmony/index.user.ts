/**
 * Created by user on 2017/11/26/026.
 */

import * as userScriptCore from 'root/lib/core';
import index from './index';

module.exports.id = 'tieba-harmony';
module.exports.name = module.exports.id;

userScriptCore.run(module.exports.id, module.exports, null, function (uxid, exports, global, window, $jq, _url)
{
	userScriptCore.init(uxid, exports, global, window, $jq, _url);

	/*

	const UF = require('root/lib/greasemonkey/gm');

	UF.registerMenuCommand({
		id: exports.name,
		key: 'gamer signin',
	}, async (options) =>
	{
		const signin = require('root/lib/site/gamer/signin').default;

		await signin(true)
			.catch(err => console.error('[簽到錯誤]', err))
		;
	});

	*/
});
