
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
	"youtube/2016/my_video",
	"youtube/2016/upload",
	"global/script"
];

module.exports.list_disable = [
	"youtube/2016/watch",
	"youtube/2016"
];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/youtube-plus-sc/youtube/2016/my_video');
	require('root/src/youtube-plus-sc/youtube/2016/upload');
	require('root/src/youtube-plus-sc/global/script');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"*://www.youtube.com/*",
	"*://youtube.com/*",
	"https://www.youtube.com/my_videos*",
	"http*://www.youtube.com/upload*"
];
module.exports.metadata.match = [];
module.exports.metadata.exclude = [
	"http*://*.youtube.com/embed/*",
	"http*://*.youtube.com/v/*",
	"http*://creatoracademy.youtube.com/*",
	"http*://artists.youtube.com/*",
	"http*://kids.youtube.com/*"
];
module.exports.metadata.grant = [
	"GM.xmlhttpRequest",
	"GM_xmlhttpRequest",
	"unsafeWindow"
];

module.exports.list_script = [
	"global/script"
];

module.exports.current = [];

module.exports.default = module.exports;

