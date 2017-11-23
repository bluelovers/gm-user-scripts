/**
 * Created by user on 2017/7/13/013.
 */

'use strict';

const gulp = require("gulp");

const gutil = require("gulp-util");
const concat = require('gulp-concat');
const header = require('gulp-header');
const sourcemaps = require('gulp-sourcemaps');

const webpack = require("webpack");
const gulpWebpack = require('webpack-stream');

const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const globby = require('globby');

const path = require('path');

const sortBy = require('lodash.sortby');

const cheerio = require('cheerio');

const cwd_src = path.join(__dirname, 'src');

const prettifyXml = require('prettify-xml');
const pd = require('pretty-data').pd;

const streamToPromise = require('stream-to-promise');
const clone = require('lodash.clone');
const lodash = require('lodash');

//var closureCompiler = require('google-closure-compiler').gulp();

gulp.task("webpack:before", async function (callback)
{

	/*
	let ls = await globby(['*.user.js'], {
		cwd: cwd_src,
	});

	let data = ls.reduce((a, b) =>
	{
		let name = path.basename(b, '.user.js')

		a[name] = {};

		return a;
	}, {});
	*/

	let data = await get_userscript_list()
		.then(ls =>
		{
			return ls.reduce((a, b) =>
			{
				a[b] = {};

				return a;
			}, {})
		})
	;

	//console.log(666, data);

	for (let name in data)
	{
		let ls = await globby(['**/*.js', '!index.js', '!lib/*', '!index.user.js'], {
			cwd: path.join(cwd_src, name),
		});

		//console.log(name, ls, path.join(cwd_src, name));

		data[name] = ls.reduce((a, b) =>
		{

			//console.log(name, b);

			a[b] = require(path.join(cwd_src, name, b));

			return a;
		}, {});
	}

	for (let name in data)
	{

		/*
		let ordered = sortBy(Object.keys(data[name]), [
				function (b)
				{
					let o = data[name][b];

					console.log(typeof o.priority == 'undefined' ? 500 : o.priority);

					return typeof o.priority == 'undefined' ? 500 : o.priority;
				},

				function ()
				{
					return name;
				},
			])
		;

		ordered.reverse();
		*/

		let ordered = Object.keys(data[name])
			.reduce(function (a, b)
			{
				let o = data[name][b];

				o.priority = typeof o.priority == 'undefined' ? 500 : o.priority;
				o.name = b;

				a.push(o);

				return a;
			}, [])
		;

		ordered = lodash.orderBy(ordered, ['priority', 'name'], ['desc', 'asc']);

		ordered = ordered.map(function (v)
		{
			return v.name;
		});

		//console.log(ordered);

		//continue;

		let ls = ordered
			.reduce((a, b) =>
			{
				let lib = require(path.join(cwd_src, name, b));

				if (lib.disable === true)
				{
					a.list_disable.push(b);

					return a;
				}
				else if (lib.disable)
				{
					a.list_lib.push(b);

					return a;
				}

				a.list.push(b);

				//a._lib.push(`require('./${b}');`);
				a._lib.push(`require('root/src/${name}/${b}');`);

				a.metadata.include = a.metadata.include.concat(lib.metadata.match);
				a.metadata.exclude = a.metadata.exclude.concat(lib.metadata.exclude);

				if (lib.script)
				{
					a.list_script.push(b);
				}

				return a;
			}, {

				list: [],
				_lib: [],

				list_disable: [],

				metadata: {
					include: [],
					exclude: [],
				},

				list_script: [],
				list_lib: [],
			});

		//console.debug(ls);

		let main = async function (list, options = {})
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

		let metadata = require(path.join(cwd_src, name, 'lib/metadata'));

		let text = `
module.exports.id = '${name}';

module.exports.name = '${metadata.name || name}';
module.exports.name_en = '${metadata.name_en || metadata.name || name}';

module.exports.desc = '${metadata.desc || ""}';
module.exports.desc_en = '${metadata.desc_en || metadata.desc || ""}';

module.exports.icon = '${metadata.icon || ""}';

module.exports.list = ${JSON.stringify(ls.list, null, "\t")};

module.exports.list_disable = ${JSON.stringify(ls.list_disable, null, "\t")};

// for webpack, don't use this method
module.exports._lib = () =>
{
	${ls._lib.join("\n\t")}
};

module.exports.metadata = {};
module.exports.metadata.include = ${JSON.stringify(ls.metadata.include, null, "\t")};
module.exports.metadata.exclude = ${JSON.stringify(ls.metadata.exclude, null, "\t")};

module.exports.main = ${main.toString()};

module.exports.list_script = ${JSON.stringify(ls.list_script, null, "\t")};

module.exports.current = [];

module.exports.default = module.exports;

`;

		await fs.writeFileAsync(path.join(cwd_src, name, 'index.js'), text);
	}

	//console.log(data);
});

gulp.task("gm_scripts:config", ["webpack"], async function (callback)
{
	const config_path = 'D:\\Users\\Documents\\The Project\\gm_scripts_repo\\gm_scripts\\config.xml';

	let _data = await fs.readFileAsync(config_path)

	const $ = cheerio.load(_data, {
		xmlMode: true,
		decodeEntities: false,
	});

	/*
	let ls = await globby(['*.user.js'], {
			cwd: cwd_src,
		})
		.then((ls) =>
		{
			return ls.reduce((a, b) =>
			{
				let name = path.basename(b, '.user.js')

				a.push(name);

				return a;
			}, []);
		})
	;
	*/

	let ls = await get_userscript_list();

	for (let name of ls)
	{
		let index = require(path.join(cwd_src, name, 'index.js'));

		let script = $(`Script[basedir="${index.name}"]`);

		if (!script.length)
		{
			continue;
		}

		console.log(name);

		script.find('Exclude, Include').remove();

		for (let row of index.metadata.exclude)
		{
			script.append(`<Exclude>${row}</Exclude>`);
		}

		for (let row of index.metadata.include)
		{
			script.append(`<Include>${row}</Include>`);
		}

	}

	let dump = $.html();

	dump = pd.xmlmin(dump);

	dump = prettifyXml(dump, {
		indent: 1,
		newline: '\n',
		indentWithTab: true,
	});

	//console.log(dump);
	await fs.writeFileAsync(config_path, dump);
});

gulp.task("webpack", ["webpack:before"], function (callback)
{
	const pkg = require('./package.json');

	return get_userscript_list()
		.then(async function (ls)
		{
			for (let k of ls)
			{
				//let k = v.match(/src\/(.+)\/index\.user\.js$/)[1];

				console.log(k);

				const index = require(path.join(cwd_src, k, 'index'));

				let banner = require(path.join(cwd_src, k, 'lib/metadata')).metadata;

				let s = gulp.src(`src/${k}/index.user.js`)
					.pipe(gulpWebpack(webpack_runtime({}, function (config, options, webpack_config)
					{

						config.entry = {};
						config.entry[`${k}.user`] = `./src/${k}/index.user.js`;

						config.module = config.module || {};
						config.module.rules = [];

						config.module.rules.push({
							test: /\.js$/,

							exclude: function (modulePath)
							{
								let file = path.relative(__dirname, modulePath);

								if (/^src/.test(file))
								{
									//console.log(file);

									if (/^lib/.test(file) || file.indexOf(`src\\${k}`) === 0)
									{
										//console.log(k, file, file.indexOf(`src\\${k}`));

										return false;
									}

									return true;
								}

								return false;
							},

						});

						config.module.noParse = function (modulePath)
						{
							let file = path.relative(__dirname, modulePath);

							if (/^src/.test(file))
							{
								//console.log(file);

								if (/^lib/.test(file) || file.indexOf(`src\\${k}\\`) === 0)
								{
									//console.log(k, file, file.indexOf(`src\\${k}`));

									return false;
								}

								return true;
							}

							return false;
						};

						config.plugins = [
							new webpack.ProvidePlugin({
								$: 'jquery',
								jQuery: 'jquery'
							}),

							new webpack.IgnorePlugin(/\.(txt|ts)$/),
						];

						let myIgnorePlugin = new webpack.IgnorePlugin(/\.\/dmm-plus-sc|\.js$/, /ux-tweak-sc[\/\\]+src/);

						myIgnorePlugin.checkResource = function (resource)
						{
							if (!this.resourceRegExp)
							{
								return false;
							}

							if (!/^\.\//.test(resource) || /^\.\/\.\./.test(resource) || ['.', './'].includes(resource) || /^\.\/[^\/]+\.js$/.test(resource))
							{
								//console.log(555, resource);

								return false;
							}

							let bool = !this.resourceRegExp.test(resource);

							//console[(0 && bool) ? 'error' : 'log'](666, resource, bool, this.resourceRegExp);

							return bool;
						};

						myIgnorePlugin.checkContext = function (context)
						{
							/*
							if (!this.contextRegExp)
							{
								return true;
							}
							*/

							let bool = context.indexOf(path.join(__dirname, 'src')) == 0 && context.indexOf(path.join(__dirname, 'src', k)) == -1;

							//console[(0 && bool) ? 'error' : 'log'](777, context, bool, this.contextRegExp);

							return bool;
						};

						myIgnorePlugin.resourceRegExp = new RegExp(`(\\.|src)\\/${k}`);
						config.plugins.push(myIgnorePlugin);

					}), webpack, function (err, stats)
					{
						/* Use stats to do more things if needed */

						//console.log(k, stats);

					}))
					.pipe(header(banner, {
						pkg: pkg,

						index: {
							id: index.id,

							name: index.name,
							name_en: index.name_en || index.name,

							icon: index.icon || 'https://wiki.greasespot.net/favicon.ico',

							desc: index.desc || '',
							desc_en: index.desc_en || index.desc || '',

							include: index.metadata.include.join("\n// @include		"),
							match: meta_match(index.metadata.include).join("\n// @match		"),

							exclude: index.metadata.exclude.join("\n// @exclude		"),
						},

						token: Date.now()
					}))
					.pipe(gulp.dest('dist/'))
				;

				await streamToPromise(s);

				//break;
			}

			return;
		})
		;
});

gulp.task("default", ["webpack", "gm_scripts:config"], function (callback)
{

});

function meta_match(matchs)
{
	return matchs.reduce(function (a, b)
	{
		if (b.match(/^(http)\*(.+)$/))
		{
			a.push(`${RegExp.$1}${RegExp.$2}`);
			a.push(`${RegExp.$1}s${RegExp.$2}`);
		}
		else
		{
			a.push(b);
		}

		return a;
	}, [])
}

function meta_inlude_match(includes, matchs)
{
	let a1 = [];
	let a2 = [];
}

let webpack_config = Object.assign({}, clone(require('./webpack.config'), true));

function webpack_runtime(options, cb)
{
	let config = Object.assign({}, webpack_config, options);

	if (cb)
	{
		let ret = cb(config, options, webpack_config);

		if (ret)
		{
			config = ret;
		}
	}

	//console.log(config);

	return config;
}

async function get_userscript_list()
{
	let ls = await globby([
			'src/*/index.user.js'
		], {
			cwd: __dirname,
		})
		.then(async function (ls)
		{
			return ls.map(function (v)
			{
				return v.match(/src\/(.+)\/index\.user\.js$/)[1];
			});
		})
	;

	//console.log(ls);

	return ls;
}
