
module.exports.id = 'syosetu-list-number';
module.exports.version = '';

module.exports.name = 'syosetu-list-number';
module.exports.name_en = 'syosetu-list-number';
module.exports.name_ja = 'syosetu-list-number';

module.exports.desc = 'syosetu-list-number 讓小說家的章節顯示序列 (支援手機版)';
module.exports.desc_en = 'syosetu-list-number 讓小說家的章節顯示序列 (支援手機版)';
module.exports.desc_ja = 'syosetu-list-number 小説家になろう 章の表示順序';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"site/kakuyomu.jp",
	"site/syosetu"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/syosetu-list-number/site/kakuyomu.jp');
	require('root/src/syosetu-list-number/site/syosetu');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://kakuyomu.jp/works*",
	"http*://kakuyomu.jp/works*/*/episodes/*",
	"http*://kakuyomu.jp/*",
	"http*://syosetu.com/*",
	"http*://ncode.syosetu.com/*"
];
module.exports.metadata.match = [
	"*://nl.syosetu.com/*",
	"*://ncode.syosetu.com/*",
	"*://novel18.syosetu.com/*",
	"*://nkx.syosetu.com/*"
];
module.exports.metadata.exclude = [];
module.exports.metadata.grant = [
	"GM.setClipboard",
	"GM_setClipboard"
];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

