
module.exports.name = 'ux-tweak-sc';

module.exports.list = [
	"wiki/wikipedia.js",
	"torrent/nyaa.js",
	"torrent/jandown.js",
	"torrent/dmhy.js",
	"social/weibo.js",
	"social/facebook.js",
	"shop/yahoo.js",
	"shop/pchome.js",
	"shop/mall.yahoo.js",
	"novel/syosetu.js",
	"comic/wnacg.js",
	"comic/nhentai.js",
	"comic/manben.js",
	"comic/exhentai.js",
	"comic/dmzj.js",
	"comic/dm5.js",
	"code/stackoverflow.js",
	"code/sourceforge.js",
	"code/npmjs.js",
	"code/greasyfork.js",
	"code/github.js",
	"blog/steachs.js",
	"blog/oneapm.js",
	"blog/jianshu.js",
	"blog/dulfy.js",
	"blog/blog.xuite.js",
	"bbs/ptt.js",
	"art/pixiv.js",
	"art/deviantart.js",
	"anti-adblock/epinv.js",
	"adult/up01.js",
	"acg/vsgames.js",
	"acg/tieba.baidu.js",
	"acg/reddit.js",
	"acg/getchu.js",
	"acg/gamme.js",
	"acg/gamer.com.tw.js",
	"acg/dmm.js",
	"acg/dlsite.js",
	"acg/blog.reimu.net.js",
	"acg/3dmgame.js",
	"acg/2dfan.js",
	"google/search.js",
	"global/video.js",
	"global/mediawiki.js",
	"global/discuz.js",
	"global/social.js",
	"global/pagination.js",
	"_fake.js"
];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('./wiki/wikipedia.js');
	require('./torrent/nyaa.js');
	require('./torrent/jandown.js');
	require('./torrent/dmhy.js');
	require('./social/weibo.js');
	require('./social/facebook.js');
	require('./shop/yahoo.js');
	require('./shop/pchome.js');
	require('./shop/mall.yahoo.js');
	require('./novel/syosetu.js');
	require('./comic/wnacg.js');
	require('./comic/nhentai.js');
	require('./comic/manben.js');
	require('./comic/exhentai.js');
	require('./comic/dmzj.js');
	require('./comic/dm5.js');
	require('./code/stackoverflow.js');
	require('./code/sourceforge.js');
	require('./code/npmjs.js');
	require('./code/greasyfork.js');
	require('./code/github.js');
	require('./blog/steachs.js');
	require('./blog/oneapm.js');
	require('./blog/jianshu.js');
	require('./blog/dulfy.js');
	require('./blog/blog.xuite.js');
	require('./bbs/ptt.js');
	require('./art/pixiv.js');
	require('./art/deviantart.js');
	require('./anti-adblock/epinv.js');
	require('./adult/up01.js');
	require('./acg/vsgames.js');
	require('./acg/tieba.baidu.js');
	require('./acg/reddit.js');
	require('./acg/getchu.js');
	require('./acg/gamme.js');
	require('./acg/gamer.com.tw.js');
	require('./acg/dmm.js');
	require('./acg/dlsite.js');
	require('./acg/blog.reimu.net.js');
	require('./acg/3dmgame.js');
	require('./acg/2dfan.js');
	require('./google/search.js');
	require('./global/video.js');
	require('./global/mediawiki.js');
	require('./global/discuz.js');
	require('./global/social.js');
	require('./global/pagination.js');
	require('./_fake.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://*.wikipedia.org/*",
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
	"https://tw.search.buy.yahoo.com/search/shopping/*",
	"http*://mall.pchome.com.tw/*",
	"http*://tw.mall.yahoo.com/*",
	"http*://tw.user.mall.yahoo.com/my/*",
	"http*://syosetu.com/*",
	"http*://ncode.syosetu.com/*",
	"http*://*.wnacg.com/*",
	"http*://*.wnacg.org/*",
	"http*://nhentai.net/*",
	"http*://www.manben.com/*",
	"http*://exhentai.org/*",
	"http*://g.e-hentai.org/*",
	"http*://*.dmzj.com/*",
	"http*://www.dm5.com/*",
	"http*://stackoverflow.com/*",
	"http*://superuser.com/*",
	"http*://sourceforge.net/projects/*/files/*",
	"http*://www.npmjs.com/search?q=*",
	"http*://greasyfork.org/*",
	"http*://github.com/*",
	"http*://steachs.com/*",
	"http*://blog.oneapm.com/*",
	"http*://www.jianshu.com/*",
	"http*://dulfy.net/*",
	"http*://blog.xuite.net/*",
	"http*://www.ptt.cc/*",
	"http*://*.pixiv.net/*",
	"http*://*.deviantart.com/*",
	"http*://www.epinv.com/*",
	"http*://www.up01.cc/*",
	"http*://gw2.vsgames.cn/*",
	"http*://*.vsgames.cn/*",
	"http*://tieba.baidu.com/*",
	"http*://www.reddit.com/r/*",
	"http*://*.getchu.com/*",
	"http*://news.gamme.com.tw/*",
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
	"http*://www.dlsite.com/*",
	"http*://blog.reimu.net/*",
	"http*://www.3dmgame.com/*",
	"http*://bbs.3dmgame.com/*",
	"http*://www.2dfan.com/*",
	"http*://encrypted.google.com/*",
	"http*://www.google.co.jp/*",
	"http*://*.google.*/blank.html",
	"http*://*.google.*/search*",
	"http*://*.google.*/imgres*"
];
module.exports.metadata.exclude = [
	"http*://www.facebook.com/ajax/*",
	"http*://www.facebook.com/*plugins/*",
	"http*://staticxx.facebook.com/*",
	"http*://gc.bahamut.com.tw/*",
	"http*://*.bahamut.com.tw/*",
	"http*://notifications.google.com/*",
	"http*://platform.twitter.com/widgets*",
	"http*://apis.google.com/*"
];

module.exports.main = async function (list, options = {})
		{
			console.time(module.exports.name);
			console.group(module.exports.name);

			for (let name of list)
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

				let test;
				let ret_main;

				if (lib.disable)
				{
					console.warn(name_id, 'disable, skip this');

					//ret = false;
				}
				else
				{
					test = await lib.test(global._url_obj);

					console.info(name_id, test);

					if (test)
					{
						ret_main = await lib.main(global._url_obj);

						if (ret_main == true || ret_main === undefined)
						{
							ret_main = true;

							console.info(name_id, 'matched', ret_main, ret);
						}

						//test = false;

						if (ret_main)
						{
							ret = false;

							if (test && test !== true)
							{
								//test = true;
								ret = true;
							}

							console.debug(name_id, 'chk', ret_main, ret, test);
						}
					}
				}

				if (!ret || test)
				{
					module.exports.current.push({
						name: name,
						name_id: name_id,

						lib: lib,
					});
				}

				console.groupEnd(name);
				console.timeEnd(name);

				if (!ret)
				{
					console.debug(name_id, 'break', ret_main, ret, test);

					break;
				}
			}

			console.groupEnd(module.exports.name);
			console.timeEnd(module.exports.name);
		};

module.exports.list_script = [
	"global/video.js",
	"global/mediawiki.js",
	"global/discuz.js"
];

module.exports.current = [];

