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

const cheerio = require('cheerio');

const cwd_src = path.join(__dirname, 'src');
const cwd_dist = path.join(__dirname, 'dist');

const prettifyXml = require('prettify-xml');
const pd = require('pretty-data').pd;

const streamToPromise = require('stream-to-promise');
const clone = require('lodash.clone');
const lodash = require('lodash');

const addTasks = require('gulp-add-tasks2').init(gulp);

const gmMetadata = require('./lib/greasemonkey/metadata');

const webpackMerge = require('webpack-merge');

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
		let ls = await globby([
			'**/*.js',
			'**/*.ts',
			'!index.*',
			'!lib/*',
			'!index.user.*',
			'!**/*.d.ts',
		], {
			cwd: path.join(cwd_src, name),
		});

		//console.log(name, ls, path.join(cwd_src, name));

		data[name] = ls.reduce((a, b) =>
		{

			//console.log(name, b);

			b = b.replace(/\.(js|tsx?)$/, '');

			a[b] = require(path.join(cwd_src, name, b));

			return a;
		}, {});
	}

	for (let name in data)
	{

		let ordered = Object.keys(data[name])
			.reduce(function (a, b)
			{
				let o = data[name][b];

				o.priority = (typeof o.priority == 'undefined' || o.priority === null) ? 500 : o.priority;
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

				if (lib.disable === 2)
				{
					a.metadata.include = a.metadata.include.concat(lib.metadata.include || []);
					a.metadata.exclude = a.metadata.exclude.concat(lib.metadata.exclude || []);
					a.metadata.match = a.metadata.match.concat(lib.metadata.match || []);
					a.metadata.grant = a.metadata.grant.concat(lib.metadata.grant || []);

					return a;
				}
				else if (lib.disable === 1)
				{
					a.list_lib.push(b);

					return a;
				}
				else if (lib.disable)
				{
					a.list_disable.push(b);

					return a;
				}

				a.list.push(b);

				//a._lib.push(`require('./${b}');`);
				a._lib.push(`require('root/src/${name}/${b}');`);

				a.metadata.include = a.metadata.include.concat(lib.metadata.include || []);
				a.metadata.exclude = a.metadata.exclude.concat(lib.metadata.exclude || []);
				a.metadata.match = a.metadata.match.concat(lib.metadata.match || []);
				a.metadata.grant = a.metadata.grant.concat(lib.metadata.grant || []);

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
					match: [],
					grant: [],
				},

				list_script: [],
				list_lib: [],
			});

		//console.debug(ls);

		let metadata = require(path.join(cwd_src, name, 'lib/metadata'));

		ls.metadata.grant = ls.metadata.grant.concat(metadata.grant || []);
		ls.metadata = gmMetadata.lazyMetaFix(ls.metadata);

		let text = `
module.exports.id = '${name}';
module.exports.version = '${metadata.version || ''}';

module.exports.name = '${metadata.name || name}';
module.exports.name_en = '${metadata.name_en || metadata.name || name}';
module.exports.name_ja = '${metadata.name_ja || metadata.name || name}';

module.exports.desc = '${metadata.desc || ""}';
module.exports.desc_en = '${metadata.desc_en || metadata.desc || ""}';
module.exports.desc_ja = '${metadata.desc_ja || metadata.desc || ""}';

module.exports.namespace = '${metadata.namespace || ''}';
module.exports.author = '${metadata.author || ''}';

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
module.exports.metadata.match = ${JSON.stringify(ls.metadata.match, null, "\t")};
module.exports.metadata.exclude = ${JSON.stringify(ls.metadata.exclude, null, "\t")};
module.exports.metadata.grant = ${JSON.stringify(ls.metadata.grant, null, "\t")};

module.exports.list_script = ${JSON.stringify(ls.list_script, null, "\t")};

module.exports.current = [];

module.exports.default = module.exports;

`;

		//module.exports.main = ${main.toString()};

		await fs.writeFileAsync(path.join(cwd_src, name, 'index.js'), text);
	}

	//console.log(data);
});

gulp.task("gm_scripts:config", async function (callback)
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

	const pkg = require('./package.json');

	for (let name of ls)
	{
		let index = require(path.join(cwd_src, name, 'index.js'));

		let script = $(`Script[basedir="${index.name}"]`);

		if (!script.length)
		{
			continue;
		}

		console.log(name);

		script.attr('version', index.version || pkg.version);

		script.find('Exclude, Include, Match').remove();

		for (let row of index.metadata.exclude)
		{
			script.append(`<Exclude>${row}</Exclude>`);
		}

		for (let row of index.metadata.include)
		{
			script.append(`<Include>${row}</Include>`);
		}

		for (let row of index.metadata.match)
		{
			script.append(`<Match>${row}</Match>`);
		}

		{
			let s = await fs.readFileSync(path.join(cwd_dist, `${name}.user.js`));

			let meta = gmMetadata.parseMetadata(s.toString());

			meta = gmMetadata.lazyMetaFix(meta);

			//console.log(meta);

			script.find('Grant').remove();

			if (meta['grant'].length)
			{
				for (let row of meta['grant'])
				{
					if (!row)
					{
						continue;
					}

					script.append(`<Grant>${row}</Grant>`);
				}

				//console.log(meta['grant']);
			}
			else
			{
				let row = 'none';

				script.append(`<Grant>${row}</Grant>`);
			}

			script.attr('noframes', !!meta.noframes.length);
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
					.pipe(gulpWebpack(webpack_runtime({

					}, function (config, options, webpack_config)
					{
						config.entry = {};
						config.entry[`${k}.user`] = `./src/${k}/index.user`;

						config.module = config.module || {};
						config.module.rules = [];

						config.module.rules.push({
							test: /\.(js)|tsx?$/,

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

						if (0)
						{
							config.plugins = [
								new webpack.ProvidePlugin({
									$: 'jquery',
									jQuery: 'jquery',
									greasemonkey: 'root/lib/greasemonkey/uf',
								}),

								new webpack.IgnorePlugin(/\.(txt|ts)$/),

								/*
								new webpack.optimize.UglifyJsPlugin({
									//comments: false,
								}),
								*/
							];
						}

						//let myIgnorePlugin = new webpack.IgnorePlugin(/\.\/dmm-plus-sc|\.js$/, /ux-tweak-sc[\/\\]+src/);
						let myIgnorePlugin = new webpack.IgnorePlugin(new RegExp(`(\\.|src)\\/${k}`), /ux-tweak-sc[\/\\]+src/);

						myIgnorePlugin.checkResource = function (resource)
						{
							if (!this.resourceRegExp)
							{
								return false;
							}

							if (!/^\.\//.test(resource) || /^\.\/\.\./.test(resource) || ['.', './'].includes(resource) || /^\.\/[^\/]+\.(js|tsx?)$/.test(resource))
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

						//myIgnorePlugin.resourceRegExp = new RegExp(`(\\.|src)\\/${k}`);
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
							name_ja: index.name_ja || index.name,

							namespace: index.namespace || pkg.author || '',
							author: index.author || pkg.author || '',

							icon: index.icon || 'https://wiki.greasespot.net/favicon.ico',

							desc: index.desc || index.id + ' ' + pkg.description || '',
							desc_en: index.desc_en || index.desc || index.id + ' ' + pkg.description || '',
							desc_ja: index.desc_ja || index.desc || index.id + ' ' + pkg.description || '',

							include: gmMetadata.makeMetaRow('include', index.metadata.include || []),
							//match: meta_match(index.metadata.include).join("\n// @match		"),
							//match: gmMetadata.makeMetaRow('match', meta_match(index.metadata.include) || []),
							match: gmMetadata.makeMetaRow('match', index.metadata.match || []),

							exclude: gmMetadata.makeMetaRow('exclude', index.metadata.exclude || []),

							grant: gmMetadata.makeMetaRow('grant', index.metadata.grant),
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

addTasks({

	default: {

		deps: [
			'webpack',

		],

		tasks: [
			[
				'gm_scripts:config',
			],
		],

	}

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

//let webpack_config = Object.assign({}, clone(require('./webpack.config'), true));

function webpack_runtime(options, cb)
{
	let webpack_config = requireAgain('./webpack.config');

	//let config = Object.assign({}, webpack_config, options);
	let config = webpackMerge(webpack_config, options);

	//console.log(config);

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

function requireAgain(name)
{
	let path = require.resolve(name);

	if (path in require.cache)
	{
		delete require.cache[path];
	}

	return require(path);
}
