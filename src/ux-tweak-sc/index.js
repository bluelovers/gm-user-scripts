
module.exports.id = 'ux-tweak-sc';
module.exports.name = 'ux-tweak-sc';

module.exports.list = [
	"acg/2dfan.js",
	"acg/3dmgame.js",
	"acg/blog.reimu.net.js",
	"acg/dlsite.js",
	"acg/dmm.js",
	"acg/gamer.com.tw.js",
	"acg/gamme.js",
	"acg/getchu.js",
	"acg/guildwars2/forum.2017.js",
	"acg/guildwars2/wiki.js",
	"acg/gw2bltc.js",
	"acg/qoo-app.js",
	"acg/qtfy.eu.js",
	"acg/reddit.js",
	"acg/tieba.baidu.js",
	"acg/vsgames.js",
	"adult/up01.js",
	"anti-adblock/epinv.js",
	"art/deviantart.js",
	"art/pixiv.js",
	"bbs/ptt.js",
	"blog/blog.xuite.js",
	"blog/dulfy.js",
	"blog/jianshu.js",
	"blog/juejin.im.js",
	"blog/oneapm.js",
	"blog/steachs.js",
	"code/github.js",
	"code/greasyfork.js",
	"code/npmjs.js",
	"code/sourceforge.js",
	"code/stackoverflow.js",
	"comic/999comic.js",
	"comic/alphapolis.co.jp.js",
	"comic/comic-walker.js",
	"comic/comico.js",
	"comic/dm5.js",
	"comic/dmzj.js",
	"comic/exhentai.js",
	"comic/ikanman.js",
	"comic/manben.js",
	"comic/nhentai.js",
	"comic/wnacg.js",
	"content/farm/fun01.cc.js",
	"novel/syosetu.js",
	"shop/pchome.js",
	"shop/post/gov/tw/pstmail.js",
	"shop/yahoo/buy.js",
	"shop/yahoo/mall.js",
	"social/facebook.js",
	"social/weibo.js",
	"torrent/dmhy.js",
	"torrent/jandown.js",
	"torrent/nyaa.js",
	"wiki/wikipedia.js",
	"google/search.js",
	"global/discuz.js",
	"global/mediawiki.js",
	"global/video.js",
	"global/pagination.js",
	"global/pagination/page.js",
	"global/pagination/pagination.active.js",
	"global/pagination/srp_pagination.js",
	"global/social.js",
	"_fake.js"
];

module.exports.list_disable = [
	"acg/guildwars2/forum.js",
	"google/drive.js"
];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/ux-tweak-sc/acg/2dfan.js');
	require('root/src/ux-tweak-sc/acg/3dmgame.js');
	require('root/src/ux-tweak-sc/acg/blog.reimu.net.js');
	require('root/src/ux-tweak-sc/acg/dlsite.js');
	require('root/src/ux-tweak-sc/acg/dmm.js');
	require('root/src/ux-tweak-sc/acg/gamer.com.tw.js');
	require('root/src/ux-tweak-sc/acg/gamme.js');
	require('root/src/ux-tweak-sc/acg/getchu.js');
	require('root/src/ux-tweak-sc/acg/guildwars2/forum.2017.js');
	require('root/src/ux-tweak-sc/acg/guildwars2/wiki.js');
	require('root/src/ux-tweak-sc/acg/gw2bltc.js');
	require('root/src/ux-tweak-sc/acg/qoo-app.js');
	require('root/src/ux-tweak-sc/acg/qtfy.eu.js');
	require('root/src/ux-tweak-sc/acg/reddit.js');
	require('root/src/ux-tweak-sc/acg/tieba.baidu.js');
	require('root/src/ux-tweak-sc/acg/vsgames.js');
	require('root/src/ux-tweak-sc/adult/up01.js');
	require('root/src/ux-tweak-sc/anti-adblock/epinv.js');
	require('root/src/ux-tweak-sc/art/deviantart.js');
	require('root/src/ux-tweak-sc/art/pixiv.js');
	require('root/src/ux-tweak-sc/bbs/ptt.js');
	require('root/src/ux-tweak-sc/blog/blog.xuite.js');
	require('root/src/ux-tweak-sc/blog/dulfy.js');
	require('root/src/ux-tweak-sc/blog/jianshu.js');
	require('root/src/ux-tweak-sc/blog/juejin.im.js');
	require('root/src/ux-tweak-sc/blog/oneapm.js');
	require('root/src/ux-tweak-sc/blog/steachs.js');
	require('root/src/ux-tweak-sc/code/github.js');
	require('root/src/ux-tweak-sc/code/greasyfork.js');
	require('root/src/ux-tweak-sc/code/npmjs.js');
	require('root/src/ux-tweak-sc/code/sourceforge.js');
	require('root/src/ux-tweak-sc/code/stackoverflow.js');
	require('root/src/ux-tweak-sc/comic/999comic.js');
	require('root/src/ux-tweak-sc/comic/alphapolis.co.jp.js');
	require('root/src/ux-tweak-sc/comic/comic-walker.js');
	require('root/src/ux-tweak-sc/comic/comico.js');
	require('root/src/ux-tweak-sc/comic/dm5.js');
	require('root/src/ux-tweak-sc/comic/dmzj.js');
	require('root/src/ux-tweak-sc/comic/exhentai.js');
	require('root/src/ux-tweak-sc/comic/ikanman.js');
	require('root/src/ux-tweak-sc/comic/manben.js');
	require('root/src/ux-tweak-sc/comic/nhentai.js');
	require('root/src/ux-tweak-sc/comic/wnacg.js');
	require('root/src/ux-tweak-sc/content/farm/fun01.cc.js');
	require('root/src/ux-tweak-sc/novel/syosetu.js');
	require('root/src/ux-tweak-sc/shop/pchome.js');
	require('root/src/ux-tweak-sc/shop/post/gov/tw/pstmail.js');
	require('root/src/ux-tweak-sc/shop/yahoo/buy.js');
	require('root/src/ux-tweak-sc/shop/yahoo/mall.js');
	require('root/src/ux-tweak-sc/social/facebook.js');
	require('root/src/ux-tweak-sc/social/weibo.js');
	require('root/src/ux-tweak-sc/torrent/dmhy.js');
	require('root/src/ux-tweak-sc/torrent/jandown.js');
	require('root/src/ux-tweak-sc/torrent/nyaa.js');
	require('root/src/ux-tweak-sc/wiki/wikipedia.js');
	require('root/src/ux-tweak-sc/google/search.js');
	require('root/src/ux-tweak-sc/global/discuz.js');
	require('root/src/ux-tweak-sc/global/mediawiki.js');
	require('root/src/ux-tweak-sc/global/video.js');
	require('root/src/ux-tweak-sc/global/pagination.js');
	require('root/src/ux-tweak-sc/global/pagination/page.js');
	require('root/src/ux-tweak-sc/global/pagination/pagination.active.js');
	require('root/src/ux-tweak-sc/global/pagination/srp_pagination.js');
	require('root/src/ux-tweak-sc/global/social.js');
	require('root/src/ux-tweak-sc/_fake.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://www.2dfan.com/*",
	"http*://www.3dmgame.com/*",
	"http*://bbs.3dmgame.com/*",
	"http*://blog.reimu.net/*",
	"http*://www.dlsite.com/*",
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
	"http*://news.gamme.com.tw/*",
	"http*://*.getchu.com/*",
	"http*://*-forum.guildwars2.com/*",
	"http*://wiki.guildwars2.com/*",
	"http*://www.gw2bltc.com/*",
	"http*://*.qoo-app.com/*",
	"http*://qtfy.eu/*",
	"http*://www.reddit.com/r/*",
	"http*://tieba.baidu.com/*",
	"http*://gw2.vsgames.cn/*",
	"http*://*.vsgames.cn/*",
	"http*://www.up01.cc/*",
	"http*://www.epinv.com/*",
	"http*://*.deviantart.com/*",
	"http*://*.pixiv.net/*",
	"http*://www.ptt.cc/*",
	"http*://blog.xuite.net/*",
	"http*://dulfy.net/*",
	"http*://www.jianshu.com/*",
	"http*://juejin.im/*",
	"http*://blog.oneapm.com/*",
	"http*://steachs.com/*",
	"http*://github.com/*",
	"http*://greasyfork.org/*",
	"https://www.npmjs.com/search?q=*",
	"https://www.npmjs.com/~*",
	"http*://sourceforge.net/projects/*/files/*",
	"http*://stackoverflow.com/*",
	"http*://superuser.com/*",
	"http*://www.999comic.com/*",
	"http://t.168girl.com/*",
	"http*://www.alphapolis.co.jp/*",
	"https://comic-walker.com/*",
	"http*://www.comico.com.tw/*",
	"http*://www.dm5.com/*",
	"http*://*.dmzj.com/*",
	"https://i.dmzj.com/*",
	"http*://exhentai.org/*",
	"http*://g.e-hentai.org/*",
	"http*://*.ikanman.com/*",
	"http*://*.manhuagui.com/*",
	"http*://www.manben.com/*",
	"http*://nhentai.net/*",
	"http*://*.wnacg.com/*",
	"http*://*.wnacg.org/*",
	"http*://www.fun01.cc/*",
	"http*://syosetu.com/*",
	"http*://ncode.syosetu.com/*",
	"http*://mall.pchome.com.tw/*",
	"http://postserv.post.gov.tw/pstmail/main_mail.html*",
	"http*://tw.buy.yahoo.com/*",
	"http*://tw.buy.yahoo.com/bestbuy/*",
	"http*://tw.buy.yahoo.com/activity/*",
	"https://tw.search.buy.yahoo.com/search/shopping/*",
	"https://twpay.buy.yahoo.com/checkout/preview*",
	"http*://tw.mall.yahoo.com/*",
	"http*://tw.user.mall.yahoo.com/my/*",
	"https://tw.search.mall.yahoo.com/*",
	"http*://www.facebook.com/*",
	"http*://www.facebook.com/saved/*",
	"http*://www.weibo.com/*",
	"http*://m.weibo.cn/*",
	"http*://share.dmhy.org/*",
	"http*://www.jandown.com/*",
	"http*://sukebei.nyaa.si/*",
	"http*://*.wikipedia.org/*",
	"http*://encrypted.google.com/*",
	"http*://www.google.co.jp/*",
	"http*://*.google.*/blank.html",
	"http*://*.google.*/search*",
	"http*://*.google.*/imgres*"
];
module.exports.metadata.exclude = [
	"http*://gc.bahamut.com.tw/*",
	"http*://*.bahamut.com.tw/*",
	"http*://*.bahamut.com.tw/js/*",
	"http*://www.facebook.com/ajax/*",
	"http*://www.facebook.com/*plugins/*",
	"http*://staticxx.facebook.com/*",
	"http*://notifications.google.com/*",
	"http*://platform.twitter.com/widgets*",
	"http*://apis.google.com/*"
];

module.exports.main = async function (list, options = {})
		{
			console.time(module.exports.name);
			console.group(module.exports.name);

			let _break;

			for (let name of list)
			{
				//console.log(888, name);

				let lib = require('./' + name);

				let name_id = name;

				if (lib.name && lib.name != name_id)
				{
					name_id = `${lib.name} - ${name_id}`;
				}

				name_id = `[${name_id}]`;

				//console.log(999, name_id);

				if (_break && !lib.script)
				{
					//console.debug(name_id, 'break:script', lib.script);
					continue;
				}
				else if (lib.disable)
				{
					console.warn(name_id, 'disable, skip this');
					continue;
				}

				let ret = true;

				console.time(name);
				console.group(name);

				let test;
				let ret_main;

				CHK:
				{
					test = await lib.test(global._url_obj);

					console.info(name_id, 'test', test);

					if (_break && test !== 2)
					{
						console.debug(name_id, 'break:test', test);

						break CHK;
					}

					if (test)
					{
						ret_main = await lib.main(global._url_obj);

						if (ret_main == true || ret_main === undefined)
						{
							ret_main = true;

							console.info(name_id, 'matched', ret_main, ret);
						}
						else
						{
							console.debug(name_id, 'main', ret_main);
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

					if (!ret || test)
					{
						console.debug(name_id, 'current:push', ret_main, ret, test);

						module.exports.current.push({
							name: name,
							name_id: name_id,

							lib: lib,
						});
					}
				}

				console.groupEnd(name);
				console.timeEnd(name);

				if (!_break && !ret)
				{
					console.debug(name_id, 'break', ret_main, ret, test);

					_break = true;

					//break;
				}
			}

			console.groupEnd(module.exports.name);
			console.timeEnd(module.exports.name);
		};

module.exports.list_script = [
	"global/discuz.js",
	"global/mediawiki.js",
	"global/video.js",
	"global/pagination.js",
	"global/pagination/page.js",
	"global/pagination/pagination.active.js",
	"global/pagination/srp_pagination.js"
];

module.exports.current = [];

