/**
 * Created by user on 2017/11/26/026.
 */

import * as userScriptCore from 'root/lib/core';
import index from './index';

module.exports.id = index.id;
module.exports.name = module.exports.id;

userScriptCore.run(module.exports.id, module.exports, jQuery, function (uxid, exports, global, window, $jq, _url)
{
	//require('root/lib/jquery/scrollTo').makeJQueryPlugin($jq);
	userScriptCore.init(uxid, exports, global, window, $jq, _url);
});
