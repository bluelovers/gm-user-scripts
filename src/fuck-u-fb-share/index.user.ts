/**
 * Created by user on 2017/11/17/017.
 */

'use strict';

import * as userScriptCore from 'root/lib/core';
import index from './index';

module.exports.id = 'fuck-u-fb-share';
module.exports.name = module.exports.id;

userScriptCore.run(module.exports.id, module.exports, jQuery);
