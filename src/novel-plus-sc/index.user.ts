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
});
