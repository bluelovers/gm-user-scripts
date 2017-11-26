
module.exports.id = 'esunbank';
module.exports.version = '';

module.exports.name = 'esunbank';
module.exports.name_en = 'esunbank';

module.exports.desc = '玉山銀行';
module.exports.desc_en = '玉山銀行';

module.exports.icon = '';

module.exports.list = [
	"esunbank/ebank.js"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/esunbank/esunbank/ebank.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://ebank.esunbank.com.tw/fcm/*",
	"http*://ebank.esunbank.com.tw/fco/*"
];
module.exports.metadata.exclude = [];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

