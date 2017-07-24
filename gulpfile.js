/**
 * Created by user on 2017/7/13/013.
 */

'use strict';

var gulp = require("gulp");

var gutil = require("gulp-util");
var concat = require('gulp-concat');
var header = require('gulp-header');
var sourcemaps = require('gulp-sourcemaps');

var webpack = require("webpack");
var gulpWebpack = require('webpack-stream');

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

		console.log(ls);

		let main = function (list, options = {})
		{
			console.time(module.exports.name);
			console.group(module.exports.name);
			list.every((name) =>
			{
				let ret = true;

				console.time(name);
				console.group(name);

				let lib = require('./' + name);

				let name_id = name;

				if (lib.name && lib.name != name_id)
				{
					name_id = `${lib.name} - ${name_id}`;
				}

				name_id = `[${name_id}]`;

				let test;

				if (lib.disable)
				{
					console.warn(name_id, 'disable, skip this');

					//ret = false;
				}
				else
				{
					test = lib.test(global._url_obj);

					console.info(name_id, test);

					if (test)
					{
						let ret_main = lib.main(global._url_obj);

						if (ret_main == true || ret_main === undefined)
						{
							ret_main = true;

							console.info(name_id, 'matched', ret_main, ret);
						}

						test = false;

						if (ret_main)
						{
							ret = false;

							if (test && test !== true)
							{
								test = true;
								ret = true;
							}
						}
					}
				}

				if (!ret || test)
				{
					module.exports.current.push({
						name: name,
						name_id: name_id,

						lib: lib,
					});
				}

				console.groupEnd(name);
				console.timeEnd(name);

				return ret;
			});
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
	var pkg = require('./package.json');
	var banner = `// ==UserScript==
// @name		<%= pkg.name %>
// @namespace	bluelovers
//
// @description	各種網站 UX 優化 與 搭配某些插件/行為時的簡化動作
//
// @version		<%= pkg.version %>
//
// @grant		GM_registerMenuCommand
// @grant		unsafeWindow
// grant		GM_addStyle
// grant		none
//
// @homepageURL	https://github.com/bluelovers/gm-user-scripts
// @supportURL	https://github.com/bluelovers/gm-user-scripts/issues
// @downloadURL	https://github.com/bluelovers/gm-user-scripts/raw/master/dist/ux-tweak-sc.user.js
//
// @include		<%= index.include %>
//
// @exclude		<%= index.exclude %>
//
// @require		https://code.jquery.com/jquery-3.2.1.js?<%= token %>
// require		https://code.jquery.com/jquery-migrate-3.0.0.js?<%= token %>
//
// require		https://raw.githubusercontent.com/bluelovers/jquery-color/develop/jquery.color.js?<%= token %>
//
// ==/UserScript==
`;

	const index = require(path.join(cwd_src, 'ux-tweak-sc', 'index'));

	return gulp.src('src/ux-tweak-sc.user.js')
	//		.pipe(sourcemaps.init())
		.pipe(gulpWebpack(require('./webpack.config.js'), webpack, function (err, stats)
		{
			/* Use stats to do more things if needed */
		}))
		//		.pipe(closureCompiler({
		//			compilation_level: 'SIMPLE',
		//			warning_level: 'VERBOSE',
		//			language_in: 'ECMASCRIPT6_STRICT',
		//			language_out: 'ECMASCRIPT5_STRICT',
		////			output_wrapper: '(function(){\n%output%\n}).call(this)',
		//			js_output_file: 'name.min.js'
		//		}))
		.pipe(header(banner, {
			pkg: pkg,

			index: {
				include: index.metadata.include.join("\n// @include		"),
				exclude: index.metadata.exclude.join("\n// @exclude		"),
			},

			token: Date.now()
		}))
		//		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest('dist/'));
});

gulp.task("default", ["webpack"], function (callback)
{

});
