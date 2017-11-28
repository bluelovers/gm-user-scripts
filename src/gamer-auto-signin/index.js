
module.exports.id = 'gamer-auto-signin';
module.exports.version = '';

module.exports.name = 'gamer-auto-signin';
module.exports.name_en = 'gamer-auto-signin';

module.exports.desc = '巴哈姆特自動簽到';
module.exports.desc_en = '巴哈姆特自動簽到';

module.exports.icon = '';

module.exports.list = [
	"ajax.js"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/gamer-auto-signin/ajax.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://www.gamer.com.tw/*",
	"http*://forum.gamer.com.tw/*",
	"http*://home.gamer.com.tw/creationDetail.php*",
	"http*://gnn.gamer.com.tw/*",
	"http*://ani.gamer.com.tw/*"
];
module.exports.metadata.match = [];
module.exports.metadata.exclude = [];
module.exports.metadata.grant = [
	"GM_registerMenuCommand",
	"GM_xmlhttpRequest"
];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

