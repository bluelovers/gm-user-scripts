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

const sortBy = require('lodash.sortby')

const cwd_src = path.join(__dirname, 'src');

//var closureCompiler = require('google-closure-compiler').gulp();

gulp.task("webpack:before", async function (callback)
{

	let ls = await globby(['*.user.js'], {
		cwd: cwd_src,
	});

	let data = ls.reduce((a, b) =>
	{
		let name = path.basename(b, '.user.js')

		a[name] = {};

		return a;
	}, {});

	for (let name in data)
	{
		let ls = await globby(['**/*.js', '!index.js', '!lib/*'], {
			cwd: path.join(cwd_src, name),
		});

		//console.log(name, ls, path.join(cwd_src, name));

		data[name] = ls.reduce((a, b) =>
		{
			a[b] = require(path.join(cwd_src, name, b));

			return a;
		}, {});
	}

	for (let name in data)
	{

		let ordered = sortBy(Object.keys(data[name]), [
				function (b)
				{
					let o = data[name][b];

					return typeof o.priority == 'undefined' ? 500 : o.priority;
				}
			])
		;

		ordered.reverse();

		let ls = ordered
			.reduce((a, b) =>
			{
				a.list.push(b);
				//a.push(`require('./${b}').main();`);

				a._lib.push(`require('./${b}');`);

				let lib = require(path.join(cwd_src, name, b));

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

				metadata: {
					include: [],
					exclude: [],
				},

				list_script: [],
			});

		console.debug(ls);

		let main = async function (list, options = {})
		{
			console.time(module.exports.name);
			console.group(module.exports.name);

			let _break;

			for (let name of list)
			{
				let lib = require('./' + name);

				let name_id = name;

				if (lib.name && lib.name != name_id)
				{
					name_id = `${lib.name} - ${name_id}`;
				}

				name_id = `[${name_id}]`;

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

		let text = `
module.exports.name = '${name}';

module.exports.list = ${JSON.stringify(ls.list, null, "\t")};

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

`;

		await fs.writeFileAsync(path.join(cwd_src, name, 'index.js'), text);
	}

	console.log(data);
});

gulp.task("webpack", ["webpack:before"], function (callback)
{
	const pkg = require('./package.json');

	return globby([
		'src/*.user.js'
	], {
		cwd: __dirname,
	})
		.then(function (ls)
		{
			ls = ls.map(function (v)
			{
				let k = v.match(/src\/(.+)\.user\.js$/)[1];

				const index = require(path.join(cwd_src, k, 'index'));

				let banner = require(path.join(cwd_src, k, 'lib/metadata')).metadata;

				return gulp.src(`src/${k}.user.js`)
					.pipe(gulpWebpack(require('./webpack.config.js'), webpack, function (err, stats)
					{
						/* Use stats to do more things if needed */
					}))
					.pipe(header(banner, {
						pkg: pkg,

						index: {
							include: index.metadata.include.join("\n// @include		"),
							match: meta_match(index.metadata.include).join("\n// @match		"),

							exclude: index.metadata.exclude.join("\n// @exclude		"),
						},

						token: Date.now()
					}))
					.pipe(gulp.dest('dist/'));
			});

			return Promise.all(ls);
		})
	;
});

gulp.task("default", ["webpack"], function (callback)
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
