
module.exports.list = [
	"acg/gamer.com.tw.js",
	"acg/getchu.js",
	"art/pixiv.js",
	"comic/dm5.js",
	"comic/dmzj.js",
	"comic/exhentai.js",
	"comic/nhentai.js",
	"comic/wnacg.js",
	"social/facebook.js",
	"torrent/dmhy.js",
	"torrent/jandown.js",
	"torrent/nyaa.js"
];

// don't use this method
module.exports._lib = () =>
{
	require('./acg/gamer.com.tw.js');
	require('./acg/getchu.js');
	require('./art/pixiv.js');
	require('./comic/dm5.js');
	require('./comic/dmzj.js');
	require('./comic/exhentai.js');
	require('./comic/nhentai.js');
	require('./comic/wnacg.js');
	require('./social/facebook.js');
	require('./torrent/dmhy.js');
	require('./torrent/jandown.js');
	require('./torrent/nyaa.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://www.gamer.com.tw/*",
	"http*://www.gamer.com.tw/index*.php*",
	"http*://acg.gamer.com.tw/acgDetail.php?s=*",
	"http*://gnn.gamer.com.tw/*.html",
	"http*://gnn.gamer.com.tw/*k=*",
	"http*://forum.gamer.com.tw/*bsn=*",
	"http*://home.gamer.com.tw/*",
	"http*://acg.gamer.com.tw/*",
	"http*://m.gamer.com.tw/*",
	"http*://*.getchu.com/*",
	"http*://*.pixiv.net/*",
	"http*://www.dm5.com/*",
	"http*://*.dmzj.com/*",
	"http*://exhentai.org/*",
	"http*://g.e-hentai.org/*",
	"http*://nhentai.net/*",
	"http*://*.wnacg.com/*",
	"http*://*.wnacg.org/*",
	"http*://www.facebook.com/*",
	"http*://share.dmhy.org/*",
	"http*://www.jandown.com/*",
	"http*://sukebei.nyaa.si/*"
];
module.exports.metadata.exclude = [];

module.exports.main = () =>
{
			console.time('ux-tweak-sc');
			console.group('ux-tweak-sc');
			module.exports.list.forEach((name) =>
			{
				console.time(name);
				//console.group(name);

				let lib = require('./' + name);

				let test = lib.test(global._url_obj);

				console.log(lib.name || name, test);

				if (test)
				{
					lib.main();
				}

				//console.groupEnd();
				console.timeEnd(name);
			})
			console.groupEnd('ux-tweak-sc');
			console.timeEnd('ux-tweak-sc');
};
