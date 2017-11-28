
module.exports.id = 'fuck-u-fb-share';
module.exports.version = '';

module.exports.name = 'fuck-u-fb-share';
module.exports.name_en = 'fuck-u-fb-share';

module.exports.desc = '此腳本試圖解決智障 FB 新分享機制導致的困擾 並且恢復為舊版分享 (2017-11)';
module.exports.desc_en = 'this script try kill facebook new share (2017-11)';

module.exports.icon = '';

module.exports.list = [
	"facebook/2017.11.js"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/fuck-u-fb-share/facebook/2017.11.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://www.facebook.com/*",
	"http*://facebook.com/*"
];
module.exports.metadata.match = [];
module.exports.metadata.exclude = [];
module.exports.metadata.grant = [];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

