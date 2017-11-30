
module.exports.id = 'youtube-plus-sc';
module.exports.version = '';

module.exports.name = 'youtube-plus-sc';
module.exports.name_en = 'youtube-plus-sc';

module.exports.desc = '';
module.exports.desc_en = '';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"youtube/2016/my_video.js",
	"youtube/2016.js"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/youtube-plus-sc/youtube/2016/my_video.js');
	require('root/src/youtube-plus-sc/youtube/2016.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"https://www.youtube.com/my_videos*"
];
module.exports.metadata.match = [
	"*://*.youtube.com/*",
	"*://youtube.com/*"
];
module.exports.metadata.exclude = [
	"http*://*.youtube.com/embed/*",
	"http*://*.youtube.com/v/*"
];
module.exports.metadata.grant = [
	"GM.xmlhttpRequest",
	"GM_xmlhttpRequest"
];

module.exports.list_script = [];

module.exports.current = [];

module.exports.default = module.exports;

