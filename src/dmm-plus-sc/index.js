
module.exports.id = 'dmm-plus-sc';
module.exports.name = 'dmm-plus-sc';
module.exports.name_en = 'dmm-plus-sc';

module.exports.desc = 'DMM Games 介面調整以及更適合遊戲直播';
module.exports.desc_en = 'dmm games layout tweak';
module.exports.icon = '';

module.exports.list = [
	"dmm/games.js",
	"games/gadgets.js",
	"games/pc-play.js",
	"games/canvas.js",
	"global/iframe.js",
	"global/script.js",
	"_fake.js"
];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	require('root/src/dmm-plus-sc/dmm/games.js');
	require('root/src/dmm-plus-sc/games/gadgets.js');
	require('root/src/dmm-plus-sc/games/pc-play.js');
	require('root/src/dmm-plus-sc/games/canvas.js');
	require('root/src/dmm-plus-sc/global/iframe.js');
	require('root/src/dmm-plus-sc/global/script.js');
	require('root/src/dmm-plus-sc/_fake.js');
};

module.exports.metadata = {};
module.exports.metadata.include = [
	"http*://games.dmm.co.jp/*",
	"http*://games.dmm.co.jp/detail/*",
	"http*://www.dmm.co.jp/netgame/*",
	"http*://personal.games.dmm.co.jp/my-games/*",
	"http*://games.dmm.com/*",
	"http*://games.dmm.com/detail/*",
	"http*://www.dmm.com/netgame/*",
	"http*://personal.games.dmm.com/my-games/*",
	"http*://osapi.dmm.com/gadgets/*",
	"http*://pc-play.games.dmm.co.jp/play/*",
	"http*://web.killdoya.jp/*",
	"http*://dmm-*.iolite.link/*",
	"http*://*/product/dmm_pc.php/*",
	"http*://assets.millennium-war.net/*/*",
	"http*://*",
	"http*://pc-x.phantom-greed.com/top*",
	"http*://pc-x.phantom-greed.com/start*",
	"http*://*.dmm.co*/*"
];
module.exports.metadata.exclude = [
	"http://pc-play.games.dmm.co.jp/headnavi/*",
	"http*://pc-x.phantom-greed.com/*frame*",
	"http*://spdmg-backend2.i-mobile.co.jp/*",
	"http*://tg.socdm.com/*",
	"http://*.microad.jp/*",
	"*.youtube.*",
	"*.google.*",
	"*facebook.*",
	"*twitter.*",
	"*wiki.*/*",
	"*.tw/*",
	"*.cn/*",
	"*.org/*",
	"*.tv/*",
	"*.eu/*"
];

module.exports.main = async function (list, options = {})
		{
			console.time(module.exports.name);
			console.group(module.exports.name);

			let _break;

			for (let name of list)
			{
				//console.log(888, name);

				let lib = require('./' + name);

				let name_id = name;

				if (lib.name && lib.name != name_id)
				{
					name_id = `${lib.name} - ${name_id}`;
				}

				name_id = `[${name_id}]`;

				//console.log(999, name_id);

				if (_break && !lib.script)
				{
					//console.debug(name_id, 'break:script', lib.script);
					continue;
				}
				else if (lib.disable)
				{
					console.warn(module.exports.id, name_id, 'disable, skip this');
					continue;
				}

				let ret = true;

				console.time(name);
				console.group(name);

				let test;
				let ret_main;

				CHK:
				{
					test = await lib.test(global._url_obj);

					console.info(module.exports.id, name_id, 'test', test);

					if (_break && test !== 2)
					{
						console.info(module.exports.id, name_id, 'break:test', test);

						break CHK;
					}

					if (test)
					{
						ret_main = await lib.main(global._url_obj);

						if (ret_main == true || ret_main === undefined)
						{
							ret_main = true;

							console.info(module.exports.id, name_id, 'matched', ret_main, ret);
						}
						else
						{
							console.debug(module.exports.id, name_id, 'main', ret_main);
						}

						//test = false;

						if (ret_main)
						{
							ret = false;

							if (test && test !== true)
							{
								//test = true;
								ret = true;
							}

							console.debug(module.exports.id, name_id, 'chk', ret_main, ret, test);
						}
					}

					if (!ret || test)
					{
						console.debug(module.exports.id, name_id, 'current:push', ret_main, ret, test);

						module.exports.current.push({
							name: name,
							name_id: name_id,

							lib: lib,
						});
					}
				}

				console.groupEnd(name);
				console.timeEnd(name);

				if (!_break && !ret)
				{
					console.debug(module.exports.id, name_id, 'break', ret_main, ret, test);

					_break = true;

					//break;
				}
			}

			console.groupEnd(module.exports.name);
			console.timeEnd(module.exports.name);
		};

module.exports.list_script = [
	"global/script.js"
];

module.exports.current = [];

