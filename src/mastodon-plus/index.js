
module.exports.id = 'mastodon-plus';
module.exports.version = '';

module.exports.name = 'mastodon-plus';
module.exports.name_en = 'mastodon-plus';
module.exports.name_ja = 'mastodon-plus';

module.exports.desc = '';
module.exports.desc_en = '';
module.exports.desc_ja = '';

module.exports.namespace = '';
module.exports.author = '';

module.exports.icon = '';

module.exports.list = [
	"base/mastodon-plus",
	"global/profile"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/mastodon-plus/base/mastodon-plus');
	require('root/src/mastodon-plus/global/profile');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://mastodon.social/*",
	"http*://g0v.social/*",
	"http*://pawoo.net/*",
	"http*://music.pawoo.net/*",
	"http*://friends.nico/*",
	"http*://cmx.im/*"
];
module.exports.metadata.match = [];
module.exports.metadata.exclude = [];
module.exports.metadata.grant = [];

module.exports.list_script = [
	"global/profile"
];

module.exports.current = [];

module.exports.default = module.exports;

