
module.exports.id = 'tieba-harmony';
module.exports.version = '';

module.exports.name = 'tieba-harmony';
module.exports.name_en = 'tieba-harmony';
module.exports.name_ja = 'tieba-harmony';

module.exports.desc = 'tieba-harmony 貼吧發文時自動和諧';
module.exports.desc_en = 'tieba-harmony 貼吧發文時自動和諧';
module.exports.desc_ja = 'tieba-harmony 貼吧發文時自動和諧';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"tieba/tieba"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/tieba-harmony/tieba/tieba');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://tieba.baidu.com/*"
];
module.exports.metadata.match = [];
module.exports.metadata.exclude = [
	"http*://tieba.baidu.com/i*",
	"http*://tieba.baidu.com/h*",
	"http*://tieba.baidu.com/s*"
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

