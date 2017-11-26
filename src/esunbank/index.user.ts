/**
 * Created by user on 2017/11/26/026.
 */

import * as userScriptCore from 'root/lib/core';
import index from './index';

export { index };

export const id = 'esunbank';
export const name = id;

userScriptCore.run(id, module.exports, null, function (uxid, exports, global, window, $jq, _url)
{
	userScriptCore.init(uxid, exports, global, window, $jq, _url);
});
