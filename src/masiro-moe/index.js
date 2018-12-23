
module.exports.id = 'masiro-moe';
module.exports.version = '';

module.exports.name = 'masiro-moe';
module.exports.name_en = 'masiro-moe';
module.exports.name_ja = 'masiro-moe';

module.exports.desc = '';
module.exports.desc_en = '';
module.exports.desc_ja = '';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"base/masiro-moe"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/masiro-moe/base/masiro-moe');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://masiro.moe/*",
	"http*://masiro.moe/*mod=viewthread*"
];
module.exports.metadata.match = [];
module.exports.metadata.exclude = [];
module.exports.metadata.grant = [
	"GM.deleteValue",
	"GM.getValue",
	"GM.listValues",
	"GM.openInTab",
	"GM.registerMenuCommand",
	"GM.setValue",
	"GM.unregisterMenuCommand",
	"GM.xmlhttpRequest",
	"GM_deleteValue",
	"GM_getValue",
	"GM_listValues",
	"GM_openInTab",
	"GM_registerMenuCommand",
	"GM_setValue",
	"GM_unregisterMenuCommand",
	"GM_xmlhttpRequest",
	"unsafeWindow"
];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

