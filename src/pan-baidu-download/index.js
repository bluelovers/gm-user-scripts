
module.exports.id = 'pan-baidu-download';
module.exports.version = '';

module.exports.name = 'pan-baidu-download';
module.exports.name_en = 'pan-baidu-download';
module.exports.name_ja = 'pan-baidu-download';

module.exports.desc = '直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址';
module.exports.desc_en = '直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址';
module.exports.desc_ja = '直接下载百度网盘和百度网盘分享的文件,避免下载文件时调用百度网盘客户端,获取网盘文件的直接下载地址';

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
	require('root/src/pan-baidu-download/site/pan.baidu');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://pan.baidu.com/s/*"
];
module.exports.metadata.match = [
	"*://pan.baidu.com/disk/home*",
	"*://yun.baidu.com/disk/home*",
	"*://pan.baidu.com/s/*",
	"*://yun.baidu.com/s/*",
	"*://pan.baidu.com/share/link*",
	"*://yun.baidu.com/share/link*"
];
module.exports.metadata.exclude = [];
module.exports.metadata.grant = [
	"GM.setClipboard",
	"GM_setClipboard",
	"unsafeWindow"
];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

