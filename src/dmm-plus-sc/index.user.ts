/**
 * Created by user on 2017/11/17/017.
 */

'use strict';

module.exports.id = 'dmm-plus-sc';
module.exports.name = module.exports.id;

module.exports.desc = 'dmm games layout tweak';

require('root/lib/core').run(module.exports.id, jQuery, function ()
{
	require('root/lib/core').init(module.exports, global, window, window.location.href);
	require('root/lib/jquery/scrollTo').makeJQueryPlugin(jQuery);
});
