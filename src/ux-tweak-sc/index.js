
module.exports.name = 'ux-tweak-sc';

module.exports.list = [
	"wiki/wikipedia.js",
	"torrent/nyaa.js",
	"torrent/jandown.js",
	"torrent/dmhy.js",
	"social/weibo.js",
	"social/facebook.js",
	"shop/yahoo/mall.js",
	"shop/yahoo/buy.js",
	"shop/post/gov/tw/pstmail.js",
	"shop/pchome.js",
	"novel/syosetu.js",
	"google/drive.js",
	"content/farm/fun01.cc.js",
	"comic/wnacg.js",
	"comic/nhentai.js",
	"comic/manben.js",
	"comic/ikanman.js",
	"comic/exhentai.js",
	"comic/dmzj.js",
	"comic/dm5.js",
	"comic/comico.js",
	"comic/comic-walker.js",
	"comic/999comic.js",
	"code/stackoverflow.js",
	"code/sourceforge.js",
	"code/npmjs.js",
	"code/greasyfork.js",
	"code/github.js",
	"blog/steachs.js",
	"blog/oneapm.js",
	"blog/juejin.im.js",
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
	"acg/qtfy.eu.js",
	"acg/qoo-app.js",
	"acg/gw2bltc.js",
	"acg/guildwars2/wiki.js",
	"acg/guildwars2/forum.js",
	"acg/guildwars2/forum.2017.js",
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
	"global/pagination/pagination.active.js",
	"global/pagination/page.js",
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
	require('./shop/yahoo/mall.js');
	require('./shop/yahoo/buy.js');
	require('./shop/post/gov/tw/pstmail.js');
	require('./shop/pchome.js');
	require('./novel/syosetu.js');
	require('./google/drive.js');
	require('./content/farm/fun01.cc.js');
	require('./comic/wnacg.js');
	require('./comic/nhentai.js');
	require('./comic/manben.js');
	require('./comic/ikanman.js');
	require('./comic/exhentai.js');
	require('./comic/dmzj.js');
	require('./comic/dm5.js');
	require('./comic/comico.js');
	require('./comic/comic-walker.js');
	require('./comic/999comic.js');
	require('./code/stackoverflow.js');
	require('./code/sourceforge.js');
	require('./code/npmjs.js');
	require('./code/greasyfork.js');
	require('./code/github.js');
	require('./blog/steachs.js');
	require('./blog/oneapm.js');
	require('./blog/juejin.im.js');
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
	require('./acg/qtfy.eu.js');
	require('./acg/qoo-app.js');
	require('./acg/gw2bltc.js');
	require('./acg/guildwars2/wiki.js');
	require('./acg/guildwars2/forum.js');
	require('./acg/guildwars2/forum.2017.js');
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
	require('./global/pagination/pagination.active.js');
	require('./global/pagination/page.js');
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
	"http*://tw.mall.yahoo.com/*",
	"http*://tw.user.mall.yahoo.com/my/*",
	"http*://tw.buy.yahoo.com/*",
	"http*://tw.buy.yahoo.com/bestbuy/*",
	"http*://tw.buy.yahoo.com/activity/*",
	"https://tw.search.buy.yahoo.com/search/shopping/*",
	"https://twpay.buy.yahoo.com/checkout/preview*",
	"http://postserv.post.gov.tw/pstmail/main_mail.html*",
	"http*://mall.pchome.com.tw/*",
	"http*://syosetu.com/*",
	"http*://ncode.syosetu.com/*",
	"http*://drive.google.com/*",
	"http*://www.fun01.cc/*",
	"http*://*.wnacg.com/*",
	"http*://*.wnacg.org/*",
	"http*://nhentai.net/*",
	"http*://www.manben.com/*",
	"http*://*.ikanman.com/*",
	"http*://*.manhuagui.com/*",
	"http*://exhentai.org/*",
	"http*://g.e-hentai.org/*",
	"http*://*.dmzj.com/*",
	"https://i.dmzj.com/*",
	"http*://www.dm5.com/*",
	"http*://www.comico.com.tw/*",
	"https://comic-walker.com/*",
	"http*://www.999comic.com/*",
	"http://t.168girl.com/*",
	"http*://stackoverflow.com/*",
	"http*://superuser.com/*",
	"http*://sourceforge.net/projects/*/files/*",
	"https://www.npmjs.com/search?q=*",
	"https://www.npmjs.com/~*",
	"http*://greasyfork.org/*",
	"http*://github.com/*",
	"http*://steachs.com/*",
	"http*://blog.oneapm.com/*",
	"http*://juejin.im/*",
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
	"http*://qtfy.eu/*",
	"http*://*.qoo-app.com/*",
	"http*://www.gw2bltc.com/*",
	"http*://wiki.guildwars2.com/*",
	"http*://forum-*.guildwars2.com/forum/*",
	"http*://*-forum.guildwars2.com/*",
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
	"http*://*.bahamut.com.tw/js/*",
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
				let lib = require('./' + name);

				let name_id = name;

				if (lib.name && lib.name != name_id)
				{
					name_id = `${lib.name} - ${name_id}`;
				}

				name_id = `[${name_id}]`;

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
	"global/video.js",
	"global/mediawiki.js",
	"global/discuz.js",
	"global/pagination/pagination.active.js",
	"global/pagination/page.js",
	"global/pagination.js"
];

module.exports.current = [];

