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
		let ls = await globby(['**.js', '!index.js'], {
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
			a.push(`require('./${b}').main();`);

			return a;
		}, []).join("\n");

		await fs.writeFileAsync(path.join(cwd_src, name, 'index.js'), ls);
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
// @include		http*://www.dm5.com/*
//
// @version		<%= pkg.version %>
// @grant		GM_registerMenuCommand
// @grant		unsafeWindow
// @grant		GM_addStyle
//
// require		https://code.jquery.com/jquery-3.2.1.js?<%= token %>
// require		https://code.jquery.com/jquery-migrate-3.0.0.js?<%= token %>
//
// ==/UserScript==
`;

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
			pkg: pkg ,
			token: Date.now()
		}))
//		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest('dist/'));
});

gulp.task("default", ["webpack"], function (callback)
{

});
