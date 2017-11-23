/**
 * Created by user on 2017/11/17/017.
 */

'use strict';

import index from './index';

module.exports.id = 'fuck-u-fb-share';
module.exports.name = module.exports.id;

require('root/lib/core').run(module.exports.id, jQuery, function ()
{
	require('root/lib/core').init(module.exports, global, window, window.location.href);
});
