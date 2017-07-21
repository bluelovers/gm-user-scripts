
module.exports.name = 'ux-tweak-sc';

module.exports.list = [
	"_fake.js",
	"acg/3dmgame.js",
	"acg/blog.reimu.net.js",
	"acg/dmm.js",
	"acg/gamer.com.tw.js",
	"acg/getchu.js",
	"art/pixiv.js",
	"bbs/ptt.js",
	"code/github.js",
	"code/npmjs.js",
	"comic/dm5.js",
	"comic/dmzj.js",
	"comic/exhentai.js",
	"comic/manben.js",
	"comic/nhentai.js",
	"comic/wnacg.js",
	"google/search.js",
	"shop/pchome.js",
	"shop/yahoo.js",
	"social/facebook.js",
	"social/weibo.js",
	"torrent/dmhy.js",
	"torrent/jandown.js",
	"torrent/nyaa.js"
];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('./_fake.js');
	require('./acg/3dmgame.js');
	require('./acg/blog.reimu.net.js');
	require('./acg/dmm.js');
	require('./acg/gamer.com.tw.js');
	require('./acg/getchu.js');
	require('./art/pixiv.js');
	require('./bbs/ptt.js');
	require('./code/github.js');
	require('./code/npmjs.js');
	require('./comic/dm5.js');
	require('./comic/dmzj.js');
	require('./comic/exhentai.js');
	require('./comic/manben.js');
	require('./comic/nhentai.js');
	require('./comic/wnacg.js');
	require('./google/search.js');
	require('./shop/pchome.js');
	require('./shop/yahoo.js');
	require('./social/facebook.js');
	require('./social/weibo.js');
	require('./torrent/dmhy.js');
	require('./torrent/jandown.js');
	require('./torrent/nyaa.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://www.3dmgame.com/*",
	"http*://bbs.3dmgame.com/*",
	"http*://blog.reimu.net/*",
	"http*://www.dmm.co.jp/netgame/*",
	"http*://www.gamer.com.tw/*",
	"http*://www.gamer.com.tw/index*.php*",
	"http*://acg.gamer.com.tw/acgDetail.php?s=*",
	"http*://gnn.gamer.com.tw/*.html",
	"http*://gnn.gamer.com.tw/*k=*",
	"http*://forum.gamer.com.tw/*bsn=*",
	"http*://home.gamer.com.tw/*",
	"http*://acg.gamer.com.tw/*",
	"http*://m.gamer.com.tw/*",
	"http*://ani.gamer.com.tw/*",
	"http*://*.getchu.com/*",
	"http*://*.pixiv.net/*",
	"http*://www.ptt.cc/*",
	"http*://github.com/*",
	"http*://www.npmjs.com/search?q=*",
	"http*://www.dm5.com/*",
	"http*://*.dmzj.com/*",
	"http*://exhentai.org/*",
	"http*://g.e-hentai.org/*",
	"http*://www.manben.com/*",
	"http*://nhentai.net/*",
	"http*://*.wnacg.com/*",
	"http*://*.wnacg.org/*",
	"http*://encrypted.google.com/*",
	"http*://www.google.co.jp/*",
	"http*://*.google.*/blank.html",
	"http*://*.google.*/search*",
	"http*://*.google.*/imgres*",
	"http*://mall.pchome.com.tw/*",
	"http*://tw.buy.yahoo.com/*",
	"http*://tw.buy.yahoo.com/bestbuy/*",
	"http*://tw.buy.yahoo.com/activity/*",
	"http*://www.facebook.com/*",
	"http*://www.facebook.com/saved/*",
	"http*://www.weibo.com/*",
	"http*://m.weibo.cn/*",
	"http*://share.dmhy.org/*",
	"http*://www.jandown.com/*",
	"http*://sukebei.nyaa.si/*"
];
module.exports.metadata.exclude = [
	"http*://platform.twitter.com/widgets*",
	"http*://www.facebook.com/*plugins/*",
	"http*://staticxx.facebook.com/*",
	"http*://apis.google.com/*",
	"http*://notifications.google.com/*"
];

module.exports.main = function ()
		{
			console.time(module.exports.name);
			console.group(module.exports.name);
			module.exports.list.every((name) =>
			{
				let ret = true;

				console.time(name);
				console.group(name);

				let lib = require('./' + name);

				let name_id = name;

				if (lib.name && lib.name != name_id)
				{
					name_id = `${lib.name} - ${name_id}`;
				}

				name_id = `[${name_id}]`;

				if (lib.disable)
				{
					console.warn(name_id, 'disable, skip this');

					ret = false;
				}
				else
				{
					let test = lib.test(global._url_obj);

					console.info(name_id, test);

					if (test)
					{
						let ret_main = lib.main(global._url_obj);

						if (ret_main == true || ret_main === undefined)
						{
							ret = false;

							console.info(name_id, 'matched', ret_main);
						}
					}
				}

				if (!ret)
				{
					module.exports.current = {
						name: name,
						name_id: name_id,

						lib: lib,
					};
				}

				console.groupEnd(name);
				console.timeEnd(name);

				return ret;
			});
			console.groupEnd(module.exports.name);
			console.timeEnd(module.exports.name);
		};

