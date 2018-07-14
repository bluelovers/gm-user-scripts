
module.exports.id = 'pan-baidu-block-or-expire';
module.exports.version = '';

module.exports.name = 'pan-baidu-block-or-expire';
module.exports.name_en = 'pan-baidu-block-or-expire';
module.exports.name_ja = 'pan-baidu-block-or-expire';

module.exports.desc = '輔助判斷百度盤是封鎖還是過期';
module.exports.desc_en = '輔助判斷百度盤是封鎖還是過期';
module.exports.desc_ja = '輔助判斷百度盤是封鎖還是過期';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"site/pan.baidu"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/pan-baidu-block-or-expire/site/pan.baidu');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://pan.baidu.com/s/*",
	"http*://pan.baidu.com/error/*",
	"http*://pan.baidu.com/wap/error*"
];
module.exports.metadata.match = [
	"*://pan.baidu.com/wap/error"
];
module.exports.metadata.exclude = [];
module.exports.metadata.grant = [];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

