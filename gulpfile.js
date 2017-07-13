/**
 * Created by user on 2017/7/13/013.
 */

'use strict';

var gulp = require("gulp");

var gutil = require("gulp-util");
var concat = require('gulp-concat');
var header = require('gulp-header');

var webpack = require("webpack");
var gulpWebpack = require('webpack-stream');

gulp.task("webpack", function (callback)
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
//
// require		https://code.jquery.com/jquery-3.2.1.js?<%= token %>
// require		https://code.jquery.com/jquery-migrate-3.0.0.js?<%= token %>
//
// ==/UserScript==
`;

	return gulp.src('src/ux-tweak-sc.user.js')
		.pipe(gulpWebpack(require('./webpack.config.js'), webpack, function (err, stats)
		{
			/* Use stats to do more things if needed */
		}))
		.pipe(header(banner, {
			pkg: pkg ,
			token: Date.now()
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task("default", ["webpack"], function (callback)
{

});
