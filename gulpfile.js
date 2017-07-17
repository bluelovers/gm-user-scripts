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
			a[b] = require(path.join(cwd_src, name, b))

			return a;
		}, {});
	}

	for (let name in data)
	{
		let ls = Object.keys(data[name]).reduce((a, b) =>
		{
			a.list.push(b);
			//a.push(`require('./${b}').main();`);

			a._lib.push(`require('./${b}');`);

			let lib = require(path.join(cwd_src, name, b));

			a.metadata.include = a.metadata.include.concat(lib.metadata.match);
			a.metadata.exclude = a.metadata.exclude.concat(lib.metadata.exclude);

			return a;
		}, {

			list: [],
			_lib: [],

			metadata: {
				include: [],
				exclude: [],
			},
		});

		console.log(ls);

		let main = function ()
		{
			console.time(module.exports.name);
			console.group(module.exports.name);
			module.exports.list.every((name) =>
			{
				let ret = true;

				console.time(name);
				//console.group(name);

				let lib = require('./' + name);

				let name_id = name;

				if (lib.name && lib.name != name_id)
				{
					name_id = `${lib.name} - ${name_id}`;
				}

				name_id = `[${name_id}]`;

				if (lib.disable)
				{
					console.warn(name_id, 'disable, skip this');

					ret = false;
				}
				else
				{
					let test = lib.test(global._url_obj);

					console.info(name_id, test);

					if (test)
					{
						let ret_main = lib.main(global._url_obj);

						if (ret_main == true || ret_main === undefined)
						{
							ret = false;

							console.info(name_id, 'matched', ret_main);
						}
					}
				}

				if (!ret)
				{
					module.exports.current = {
						name: name,
						name_id: name_id,

						lib: lib,
					};
				}

				//console.groupEnd();
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

`;

		await fs.writeFileAsync(path.join(cwd_src, name, 'index.js'), text);
	}

	console.log(data);
});

gulp.task("webpack", ["webpack:before"], function (callback)
{
	var pkg = require('./package.json');
	var banner = `// ==UserScript==
// @name		ux-tweak-sc
// @namespace	bluelovers
//
// @include		<%= index.include %>
//
// @exclude		<%= index.exclude %>
//
// @version		<%= pkg.version %>
//
// @grant		GM_registerMenuCommand
// @grant		unsafeWindow
// grant		GM_addStyle
// grant		none
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
