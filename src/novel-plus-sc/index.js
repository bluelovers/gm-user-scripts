
module.exports.id = 'novel-plus-sc';
module.exports.version = '';

module.exports.name = 'novel-plus-sc';
module.exports.name_en = 'novel-plus-sc';

module.exports.desc = 'novel';
module.exports.desc_en = 'novel';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"site/baidu/tieba.js",
	"site/dmzj.js",
	"site/gamer/home.js",
	"site/sfacg/book.js",
	"site/syosetu.js"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/novel-plus-sc/site/baidu/tieba.js');
	require('root/src/novel-plus-sc/site/dmzj.js');
	require('root/src/novel-plus-sc/site/gamer/home.js');
	require('root/src/novel-plus-sc/site/sfacg/book.js');
	require('root/src/novel-plus-sc/site/syosetu.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://q.dmzj.com/*"
];
module.exports.metadata.match = [
	"*://tieba.baidu.com/*",
	"*://q.dmzj.com/*",
	"*://home.gamer.com.tw/creationDetail.php*",
	"*://book.sfacg.com/Novel/*",
	"*://*.syosetu.com/*"
];
module.exports.metadata.exclude = [];
module.exports.metadata.grant = [
	"GM.xmlhttpRequest",
	"GM_xmlhttpRequest",
	"unsafeWindow"
];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

