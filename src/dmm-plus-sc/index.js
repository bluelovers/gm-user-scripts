
module.exports.id = 'dmm-plus-sc';
module.exports.name = 'dmm-plus-sc';

module.exports.list = [];

module.exports.list_disable = [];

// for webpack, don't use this method
module.exports._lib = () =>
{
	
};

module.exports.metadata = {};
module.exports.metadata.include = [];
module.exports.metadata.exclude = [];

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
					console.warn(name_id, 'disable, skip this');
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

					console.info(name_id, 'test', test);

					if (_break && test !== 2)
					{
						console.debug(name_id, 'break:test', test);

						break CHK;
					}

					if (test)
					{
						ret_main = await lib.main(global._url_obj);

						if (ret_main == true || ret_main === undefined)
						{
							ret_main = true;

							console.info(name_id, 'matched', ret_main, ret);
						}
						else
						{
							console.debug(name_id, 'main', ret_main);
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

							console.debug(name_id, 'chk', ret_main, ret, test);
						}
					}

					if (!ret || test)
					{
						console.debug(name_id, 'current:push', ret_main, ret, test);

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
					console.debug(name_id, 'break', ret_main, ret, test);

					_break = true;

					//break;
				}
			}

			console.groupEnd(module.exports.name);
			console.timeEnd(module.exports.name);
		};

module.exports.list_script = [];

module.exports.current = [];

