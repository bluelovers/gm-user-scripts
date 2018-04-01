
module.exports.id = 'gamer-auto-signin';
module.exports.version = '';

module.exports.name = 'gamer-auto-signin';
module.exports.name_en = 'gamer-auto-signin';

module.exports.desc = '自動簽到 ( 巴哈姆特 ... and other )';
module.exports.desc_en = '自動簽到 ( 巴哈姆特 ... and other )';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"gamer/ajax",
	"novel/sfacg"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/gamer-auto-signin/gamer/ajax');
	require('root/src/gamer-auto-signin/novel/sfacg');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"*://*.sfacg.com/*",
	"*://book.sfacg.com/signin/*"
];
module.exports.metadata.match = [
	"*://www.gamer.com.tw/*",
	"*://forum.gamer.com.tw/*",
	"*://home.gamer.com.tw/creationDetail.php*",
	"*://gnn.gamer.com.tw/*",
	"*://ani.gamer.com.tw/*",
	"*://acg.gamer.com.tw/*"
];
module.exports.metadata.exclude = [
	"*://*.sfacg.com/ajax*"
];
module.exports.metadata.grant = [
	"GM.deleteValue",
	"GM.getValue",
	"GM.listValues",
	"GM.registerMenuCommand",
	"GM.setValue",
	"GM.unregisterMenuCommand",
	"GM.xmlhttpRequest",
	"GM_deleteValue",
	"GM_getValue",
	"GM_listValues",
	"GM_registerMenuCommand",
	"GM_setValue",
	"GM_unregisterMenuCommand",
	"GM_xmlhttpRequest"
];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

