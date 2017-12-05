
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
	"site/dmzj.js"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/novel-plus-sc/site/dmzj.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://q.dmzj.com/*"
];
module.exports.metadata.match = [
	"*://q.dmzj.com/*"
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

