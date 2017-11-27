/**
 * Created by user on 2017/7/13/013.
 */

const webpack = require('webpack');
const path = require('path');

//const ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = {
	entry: {
		"ux-tweak-sc.user": './src/ux-tweak-sc.user.js',
		"dmm-plus-sc.user": './src/dmm-plus-sc.user.js',
	},
	output: {
		pathinfo: true,

		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		sourceMapFilename: "[file].map",
	},

	resolve: {

		alias: {
			'root': __dirname,
		},

		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: [
			//'.ts',
			//'.tsx',
			'.js',
		]
	},

	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			//{ test: /\.tsx$/, loader: 'ts-loader' }
		]
	},

	//devtool: "inline-source-map",
	devtool: "eval",

	plugins: [
//		new ClosureCompilerPlugin({
//			compiler: {
//				language_in: 'ECMASCRIPT6',
//				language_out: 'ECMASCRIPT6',
//				compilation_level: 'ADVANCED'
//			},
//			concurrency: 3,
//		})

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			greasemonkey: 'root/lib/greasemonkey/uf',
		}),

		//new webpack.optimize.UglifyJsPlugin(),

	],

	//cache: false,

};
