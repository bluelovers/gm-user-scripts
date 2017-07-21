
module.exports.name = 'ux-tweak-sc';

module.exports.list = [
	"torrent/nyaa.js",
	"torrent/jandown.js",
	"torrent/dmhy.js",
	"social/weibo.js",
	"social/facebook.js",
	"shop/yahoo.js",
	"shop/pchome.js",
	"comic/wnacg.js",
	"comic/nhentai.js",
	"comic/manben.js",
	"comic/exhentai.js",
	"comic/dmzj.js",
	"comic/dm5.js",
	"code/npmjs.js",
	"code/github.js",
	"bbs/ptt.js",
	"art/pixiv.js",
	"acg/getchu.js",
	"acg/gamer.com.tw.js",
	"acg/dmm.js",
	"acg/blog.reimu.net.js",
	"acg/3dmgame.js",
	"google/search.js",
	"global/discuz.js",
	"_fake.js"
];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('./torrent/nyaa.js');
	require('./torrent/jandown.js');
	require('./torrent/dmhy.js');
	require('./social/weibo.js');
	require('./social/facebook.js');
	require('./shop/yahoo.js');
	require('./shop/pchome.js');
	require('./comic/wnacg.js');
	require('./comic/nhentai.js');
	require('./comic/manben.js');
	require('./comic/exhentai.js');
	require('./comic/dmzj.js');
	require('./comic/dm5.js');
	require('./code/npmjs.js');
	require('./code/github.js');
	require('./bbs/ptt.js');
	require('./art/pixiv.js');
	require('./acg/getchu.js');
	require('./acg/gamer.com.tw.js');
	require('./acg/dmm.js');
	require('./acg/blog.reimu.net.js');
	require('./acg/3dmgame.js');
	require('./google/search.js');
	require('./global/discuz.js');
	require('./_fake.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://sukebei.nyaa.si/*",
	"http*://www.jandown.com/*",
	"http*://share.dmhy.org/*",
	"http*://www.weibo.com/*",
	"http*://m.weibo.cn/*",
	"http*://www.facebook.com/*",
	"http*://www.facebook.com/saved/*",
	"http*://tw.buy.yahoo.com/*",
	"http*://tw.buy.yahoo.com/bestbuy/*",
	"http*://tw.buy.yahoo.com/activity/*",
	"http*://mall.pchome.com.tw/*",
	"http*://*.wnacg.com/*",
	"http*://*.wnacg.org/*",
	"http*://nhentai.net/*",
	"http*://www.manben.com/*",
	"http*://exhentai.org/*",
	"http*://g.e-hentai.org/*",
	"http*://*.dmzj.com/*",
	"http*://www.dm5.com/*",
	"http*://www.npmjs.com/search?q=*",
	"http*://github.com/*",
	"http*://www.ptt.cc/*",
	"http*://*.pixiv.net/*",
	"http*://*.getchu.com/*",
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
	"http*://www.dmm.co.jp/netgame/*",
	"http*://blog.reimu.net/*",
	"http*://www.3dmgame.com/*",
	"http*://bbs.3dmgame.com/*",
	"http*://encrypted.google.com/*",
	"http*://www.google.co.jp/*",
	"http*://*.google.*/blank.html",
	"http*://*.google.*/search*",
	"http*://*.google.*/imgres*"
];
module.exports.metadata.exclude = [
	"http*://notifications.google.com/*",
	"http*://platform.twitter.com/widgets*",
	"http*://www.facebook.com/*plugins/*",
	"http*://staticxx.facebook.com/*",
	"http*://apis.google.com/*"
];

module.exports.main = function (list, options = {})
		{
			console.time(module.exports.name);
			console.group(module.exports.name);
			list.every((name) =>
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
					module.exports.current.push({
						name: name,
						name_id: name_id,

						lib: lib,
					});
				}

				console.groupEnd(name);
				console.timeEnd(name);

				return ret;
			});
			console.groupEnd(module.exports.name);
			console.timeEnd(module.exports.name);
		};

module.exports.list_script = [
	"global/discuz.js"
];

module.exports.current = [];

