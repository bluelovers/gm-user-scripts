
module.exports.id = 'dmm-plus-sc';
module.exports.version = '';

module.exports.name = 'dmm-plus-sc';
module.exports.name_en = 'dmm-plus-sc';

module.exports.desc = 'DMM Games 介面調整以及更適合遊戲直播';
module.exports.desc_en = 'dmm games layout tweak';

module.exports.icon = '';

module.exports.list = [
	"dmm/games.js",
	"games/gadgets.js",
	"games/pc-play.js",
	"games/canvas.js",
	"global/iframe.js",
	"global/script.js",
	"_fake.js"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/dmm-plus-sc/dmm/games.js');
	require('root/src/dmm-plus-sc/games/gadgets.js');
	require('root/src/dmm-plus-sc/games/pc-play.js');
	require('root/src/dmm-plus-sc/games/canvas.js');
	require('root/src/dmm-plus-sc/global/iframe.js');
	require('root/src/dmm-plus-sc/global/script.js');
	require('root/src/dmm-plus-sc/_fake.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://games.dmm.co.jp/*",
	"http*://games.dmm.co.jp/detail/*",
	"http*://www.dmm.co.jp/netgame/*",
	"http*://personal.games.dmm.co.jp/my-games/*",
	"http*://games.dmm.com/*",
	"http*://games.dmm.com/detail/*",
	"http*://www.dmm.com/netgame/*",
	"http*://personal.games.dmm.com/my-games/*",
	"http*://osapi.dmm.com/gadgets/*",
	"http*://pc-play.games.dmm.co.jp/play/*",
	"http*://web.killdoya.jp/*",
	"http*://dmm-*.iolite.link/*",
	"http*://*/product/dmm_pc.php/*",
	"http*://assets.millennium-war.net/*/*",
	"http*://*",
	"http*://pc-x.phantom-greed.com/top*",
	"http*://pc-x.phantom-greed.com/start*",
	"http*://*.dmm.co*/*",
	"http*://*games.dmm.co*/*"
];
module.exports.metadata.exclude = [
	"http://pc-play.games.dmm.co.jp/headnavi/*",
	"http*://pc-x.phantom-greed.com/*frame*",
	"http*://spdmg-backend2.i-mobile.co.jp/*",
	"http*://tg.socdm.com/*",
	"http://*.microad.jp/*",
	"*.youtube.*",
	"*.google.*",
	"*facebook.*",
	"*twitter.*",
	"*wiki.*/*",
	"*.tw/*",
	"*.cn/*",
	"*.org/*",
	"*.tv/*",
	"*.eu/*",
	"http*://www.dmm.co*/digital*"
];

module.exports.list_script = [
	"global/script.js"
];

module.exports.current = [];

module.exports.default = module.exports;

