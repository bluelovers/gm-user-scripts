
module.exports.id = 'shimo-im-discuz';
module.exports.version = '';

module.exports.name = 'shimo-im-discuz';
module.exports.name_en = 'shimo-im-discuz';
module.exports.name_ja = 'shimo-im-discuz';

module.exports.desc = '暴力複製破壞石墨網頁讓他可以正常複製格式到 discuz 論壇';
module.exports.desc_en = '暴力複製破壞石墨網頁讓他可以正常複製格式到 discuz 論壇';
module.exports.desc_ja = '暴力複製破壞石墨網頁讓他可以正常複製格式到 discuz 論壇';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"base/shimo-im-discuz"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/shimo-im-discuz/base/shimo-im-discuz');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://shimo.im/docs/*"
];
module.exports.metadata.match = [];
module.exports.metadata.exclude = [];
module.exports.metadata.grant = [
	"GM.registerMenuCommand",
	"GM.unregisterMenuCommand",
	"GM_registerMenuCommand",
	"GM_unregisterMenuCommand"
];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

