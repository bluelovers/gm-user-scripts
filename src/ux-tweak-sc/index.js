
module.exports.id = 'ux-tweak-sc';
module.exports.version = '';

module.exports.name = 'ux-tweak-sc';
module.exports.name_en = 'ux-tweak-sc';

module.exports.desc = '';
module.exports.desc_en = '';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"acg/2dfan",
	"acg/3dmgame",
	"acg/baidu/safecheck",
	"acg/baidu/tieba",
	"acg/blog.reimu.net",
	"acg/dlsite",
	"acg/gamer.com.tw",
	"acg/gamme",
	"acg/getchu",
	"acg/guildwars2/forum.2017",
	"acg/guildwars2/wiki",
	"acg/gw2bltc",
	"acg/movie/u2mtv",
	"acg/movie/yahoo",
	"acg/qoo-app",
	"acg/qtfy.eu",
	"acg/reddit",
	"acg/vsgames",
	"adult/up01",
	"anti-adblock/epinv",
	"art/deviantart",
	"art/pixiv",
	"art/pixivision",
	"bbs/ptt",
	"blog/blog.xuite",
	"blog/dulfy",
	"blog/jianshu",
	"blog/juejin.im",
	"blog/oneapm",
	"blog/steachs",
	"code/github",
	"code/greasyfork",
	"code/npmjs",
	"code/segmentfault",
	"code/sourceforge",
	"code/stackoverflow",
	"comic/999comic",
	"comic/alphapolis.co.jp",
	"comic/book.dmm.co.jp",
	"comic/comic-walker",
	"comic/comico",
	"comic/dm5",
	"comic/dmzj",
	"comic/exhentai",
	"comic/ikanman",
	"comic/lhscans",
	"comic/manben",
	"comic/manhuaren",
	"comic/nhentai",
	"comic/rawdevart",
	"comic/wnacg",
	"comic/yoedge",
	"content/farm/fun01.cc",
	"novel/syosetu",
	"novel/wenku8",
	"shop/pchome",
	"shop/post/kerrytj",
	"shop/post/post/gov/tw/pstmail",
	"shop/yahoo/buy",
	"shop/yahoo/mall",
	"social/facebook",
	"social/weibo",
	"torrent/dmhy",
	"torrent/jandown",
	"torrent/nyaa",
	"wiki/moegirl",
	"wiki/wikipedia",
	"google/search",
	"global/discuz",
	"global/mediawiki",
	"global/video",
	"global/pagination",
	"global/pagination/page",
	"global/pagination/pagination.active",
	"global/pagination/srp_pagination",
	"global/social",
	"_fake"
];

module.exports.list_disable = [
	"acg/dmm",
	"acg/guildwars2/forum",
	"google/drive",
	"novel/iqing"
];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/ux-tweak-sc/acg/2dfan');
	require('root/src/ux-tweak-sc/acg/3dmgame');
	require('root/src/ux-tweak-sc/acg/baidu/safecheck');
	require('root/src/ux-tweak-sc/acg/baidu/tieba');
	require('root/src/ux-tweak-sc/acg/blog.reimu.net');
	require('root/src/ux-tweak-sc/acg/dlsite');
	require('root/src/ux-tweak-sc/acg/gamer.com.tw');
	require('root/src/ux-tweak-sc/acg/gamme');
	require('root/src/ux-tweak-sc/acg/getchu');
	require('root/src/ux-tweak-sc/acg/guildwars2/forum.2017');
	require('root/src/ux-tweak-sc/acg/guildwars2/wiki');
	require('root/src/ux-tweak-sc/acg/gw2bltc');
	require('root/src/ux-tweak-sc/acg/movie/u2mtv');
	require('root/src/ux-tweak-sc/acg/movie/yahoo');
	require('root/src/ux-tweak-sc/acg/qoo-app');
	require('root/src/ux-tweak-sc/acg/qtfy.eu');
	require('root/src/ux-tweak-sc/acg/reddit');
	require('root/src/ux-tweak-sc/acg/vsgames');
	require('root/src/ux-tweak-sc/adult/up01');
	require('root/src/ux-tweak-sc/anti-adblock/epinv');
	require('root/src/ux-tweak-sc/art/deviantart');
	require('root/src/ux-tweak-sc/art/pixiv');
	require('root/src/ux-tweak-sc/art/pixivision');
	require('root/src/ux-tweak-sc/bbs/ptt');
	require('root/src/ux-tweak-sc/blog/blog.xuite');
	require('root/src/ux-tweak-sc/blog/dulfy');
	require('root/src/ux-tweak-sc/blog/jianshu');
	require('root/src/ux-tweak-sc/blog/juejin.im');
	require('root/src/ux-tweak-sc/blog/oneapm');
	require('root/src/ux-tweak-sc/blog/steachs');
	require('root/src/ux-tweak-sc/code/github');
	require('root/src/ux-tweak-sc/code/greasyfork');
	require('root/src/ux-tweak-sc/code/npmjs');
	require('root/src/ux-tweak-sc/code/segmentfault');
	require('root/src/ux-tweak-sc/code/sourceforge');
	require('root/src/ux-tweak-sc/code/stackoverflow');
	require('root/src/ux-tweak-sc/comic/999comic');
	require('root/src/ux-tweak-sc/comic/alphapolis.co.jp');
	require('root/src/ux-tweak-sc/comic/book.dmm.co.jp');
	require('root/src/ux-tweak-sc/comic/comic-walker');
	require('root/src/ux-tweak-sc/comic/comico');
	require('root/src/ux-tweak-sc/comic/dm5');
	require('root/src/ux-tweak-sc/comic/dmzj');
	require('root/src/ux-tweak-sc/comic/exhentai');
	require('root/src/ux-tweak-sc/comic/ikanman');
	require('root/src/ux-tweak-sc/comic/lhscans');
	require('root/src/ux-tweak-sc/comic/manben');
	require('root/src/ux-tweak-sc/comic/manhuaren');
	require('root/src/ux-tweak-sc/comic/nhentai');
	require('root/src/ux-tweak-sc/comic/rawdevart');
	require('root/src/ux-tweak-sc/comic/wnacg');
	require('root/src/ux-tweak-sc/comic/yoedge');
	require('root/src/ux-tweak-sc/content/farm/fun01.cc');
	require('root/src/ux-tweak-sc/novel/syosetu');
	require('root/src/ux-tweak-sc/novel/wenku8');
	require('root/src/ux-tweak-sc/shop/pchome');
	require('root/src/ux-tweak-sc/shop/post/kerrytj');
	require('root/src/ux-tweak-sc/shop/post/post/gov/tw/pstmail');
	require('root/src/ux-tweak-sc/shop/yahoo/buy');
	require('root/src/ux-tweak-sc/shop/yahoo/mall');
	require('root/src/ux-tweak-sc/social/facebook');
	require('root/src/ux-tweak-sc/social/weibo');
	require('root/src/ux-tweak-sc/torrent/dmhy');
	require('root/src/ux-tweak-sc/torrent/jandown');
	require('root/src/ux-tweak-sc/torrent/nyaa');
	require('root/src/ux-tweak-sc/wiki/moegirl');
	require('root/src/ux-tweak-sc/wiki/wikipedia');
	require('root/src/ux-tweak-sc/google/search');
	require('root/src/ux-tweak-sc/global/discuz');
	require('root/src/ux-tweak-sc/global/mediawiki');
	require('root/src/ux-tweak-sc/global/video');
	require('root/src/ux-tweak-sc/global/pagination');
	require('root/src/ux-tweak-sc/global/pagination/page');
	require('root/src/ux-tweak-sc/global/pagination/pagination.active');
	require('root/src/ux-tweak-sc/global/pagination/srp_pagination');
	require('root/src/ux-tweak-sc/global/social');
	require('root/src/ux-tweak-sc/_fake');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://www.2dfan.com/*",
	"http*://www.3dmgame.com/*",
	"http*://bbs.3dmgame.com/*",
	"http*://tieba.baidu.com/*",
	"http*://blog.reimu.net/*",
	"http*://www.dlsite.com/*",
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
	"http*://www.u2mtv.com/movie/*",
	"http*://tw.movies.yahoo.com/*",
	"http*://movies.yahoo.com.tw/*",
	"http*://movies.yahoo.com.tw/movie_*.html",
	"http*://*.qoo-app.com/*",
	"http*://qtfy.eu/*",
	"http*://www.reddit.com/r/*",
	"http*://gw2.vsgames.cn/*",
	"http*://*.vsgames.cn/*",
	"http*://www.up01.cc/*",
	"http*://www.epinv.com/*",
	"http*://*.deviantart.com/*",
	"http*://*.pixiv.net/*",
	"http*://www.pixiv.net/search*",
	"http*://www.pixivision.net/*",
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
	"http*://segmentfault.com/*",
	"http*://sourceforge.net/projects/*/files/*",
	"http*://stackoverflow.com/*",
	"http*://superuser.com/*",
	"http*://www.999comic.com/*",
	"http://t.168girl.com/*",
	"http*://www.alphapolis.co.jp/*",
	"http*://book.dmm.co.jp/*",
	"https://comic-walker.com/*",
	"http*://www.comico.com.tw/*",
	"http*://www.dm5.com/*",
	"http*://*.dmzj.com/*",
	"https://i.dmzj.com/*",
	"http*://manhua.dmzj.com/*",
	"http*://exhentai.org/*",
	"http*://g.e-hentai.org/*",
	"http*://e-hentai.org/*",
	"http*://*.ikanman.com/*",
	"http*://*.manhuagui.com/*",
	"http*://lhscans.com/*",
	"http*://www.manben.com/*",
	"http*://www.manhuaren.com/*",
	"http*://nhentai.net/*",
	"http*://www.rawdevart.com/*",
	"http*://*.wnacg.com/*",
	"http*://*.wnacg.org/*",
	"http*://wnacg.com/*",
	"http*://wnacg.org/*",
	"http*://smp*.yoedge.com/*",
	"http*://www.fun01.cc/*",
	"http*://syosetu.com/*",
	"http*://www.wenku8.com/*",
	"http*://mall.pchome.com.tw/*",
	"http://www.kerrytj.com/zh/search/search_track.aspx*",
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
	"http*://www.jandown.com/*",
	"http*://sukebei.nyaa.si/*",
	"http*://*.wikipedia.org/*",
	"http*://encrypted.google.com/*",
	"http*://www.google.co.jp/*",
	"http*://*.google.*/blank.html",
	"http*://*.google.*/search*",
	"http*://*.google.*/imgres*"
];
module.exports.metadata.match = [
	"*://*.bdimg.com/safecheck/*",
	"*://www.u2mtv.com/*",
	"*://nl.syosetu.com/*",
	"*://ncode.syosetu.com/*",
	"*://novel18.syosetu.com/*",
	"*://share.dmhy.org/*",
	"*://*.moegirl.org/*"
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
module.exports.metadata.grant = [
	"GM.deleteValue",
	"GM.getValue",
	"GM.listValues",
	"GM.registerMenuCommand",
	"GM.setClipboard",
	"GM.setValue",
	"GM.unregisterMenuCommand",
	"GM.xmlhttpRequest",
	"GM_deleteValue",
	"GM_getValue",
	"GM_listValues",
	"GM_registerMenuCommand",
	"GM_setClipboard",
	"GM_setValue",
	"GM_unregisterMenuCommand",
	"GM_xmlhttpRequest",
	"unsafeWindow"
];

module.exports.list_script = [
	"global/discuz",
	"global/mediawiki",
	"global/video",
	"global/pagination",
	"global/pagination/page",
	"global/pagination/pagination.active",
	"global/pagination/srp_pagination"
];

module.exports.current = [];

module.exports.default = module.exports;

