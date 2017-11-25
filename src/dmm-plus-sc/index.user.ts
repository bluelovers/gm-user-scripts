/**
 * Created by user on 2017/11/17/017.
 */

'use strict';

import * as userScriptCore from 'root/lib/core';

module.exports.id = 'dmm-plus-sc';
module.exports.name = module.exports.id;

module.exports.desc = 'dmm games layout tweak';

userScriptCore.run(module.exports.id, module.exports, jQuery, function (uxid, exports, global, window, $jq, _url)
{
	userScriptCore.init(uxid, exports, global, window, $jq, _url);
	require('root/lib/jquery/scrollTo').makeJQueryPlugin($jq);
});
