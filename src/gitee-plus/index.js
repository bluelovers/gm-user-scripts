
module.exports.id = 'gitee-plus';
module.exports.version = '';

module.exports.name = 'gitee-plus';
module.exports.name_en = 'gitee-plus';

module.exports.desc = '於 Gitee 碼雲 增加一點小功能';
module.exports.desc_en = '於 Gitee 碼雲 增加一點小功能';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"base/gitee-plus"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/gitee-plus/base/gitee-plus');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://gitee.com/*",
	"http*://gitee.com/api/*",
	"http*://gitee.com/oauth/applications/*"
];
module.exports.metadata.match = [];
module.exports.metadata.exclude = [];
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
	"GM_xmlhttpRequest",
	"unsafeWindow"
];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

