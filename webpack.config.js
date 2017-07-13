/**
 * Created by user on 2017/7/13/013.
 */

var webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		"ux-tweak-sc.user": './src/ux-tweak-sc.user.js',
	},
	output: {
		pathinfo: true,

		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		sourceMapFilename: "[file].map",
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' }
		]
	},

	//devtool: "inline-source-map",
	devtool: "source-map",
};
