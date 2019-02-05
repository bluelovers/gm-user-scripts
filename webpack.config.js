/**
 * Created by user on 2017/7/13/013.
 */

const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

//const ClosureCompilerPlugin = require('webpack-closure-compiler');

let allowSourceMap = false;
//allowSourceMap = true;

module.exports = {
	entry: {
		//"ux-tweak-sc.user": './src/ux-tweak-sc.user.js',
		//"dmm-plus-sc.user": './src/dmm-plus-sc.user.js',
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
		rules: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			//{ test: /\.tsx$/, loader: 'ts-loader' }
//			{
//				test: /\.tsx?$/,
//				use: 'ts-loader',
//				exclude: /node_modules/
//			},
		],
	},

//	devtool: "inline-source-map",
//	devtool: "eval",
//	devtool: false,
//	devtool: "cheap-eval-source-map ",
	devtool: allowSourceMap ? 'source-map' : false,

	plugins: [
//		new ClosureCompilerPlugin({
//			compiler: {
//				language_in: 'ECMASCRIPT6',
//				language_out: 'ECMASCRIPT6',
//				compilation_level: 'ADVANCED'
//			},
//			concurrency: 3,
//		}),

		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja/),
		new webpack.IgnorePlugin(/zh[/\\]convert[/\\].*\.txt/, /cjk-conv/),

		new webpack.ProvidePlugin({
			//$: 'jquery/dist/jquery.min',
			//jQuery: 'jquery/dist/jquery.min',

			$: ['root/lib/jquery/global', 'default'],
			jQuery: ['root/lib/jquery/global', 'default'],

			greasemonkey: 'root/lib/greasemonkey/uf',
		}),

		new webpack.IgnorePlugin(/\.(txt|ts)$/),

		//new webpack.optimize.ModuleConcatenationPlugin(),
//		new webpack.optimize.UglifyJsPlugin({
////			comments: false,
////			minimize: true,
//		}),

	],

	optimization: {
		minimizer: [new TerserPlugin({
			sourceMap: allowSourceMap,

			parallel: true,

			//exclude: /regexp-cjk|regex/,

			terserOptions: {
				compress: {
					dead_code: false,
					global_defs: {},
					ecma: 8,
					inline: true,
					keep_classnames: true,
					keep_fnames: false,
					keep_infinity: true,
					passes: 2,
					pure_getters: false,
					unused: false,
					warnings: true,
				},
				sourceMap: !allowSourceMap ? undefined : {
					url: "includeSources",
					includeSources: true,
				},
				ecma: 8,
				output: {
					beautify: true,
					indent_level: 0,
					indent_start: 0,
					comments: false,
				},
				keep_classnames: true,
				keep_fnames: false,
			},
		})],
	},

//	optimization: {
////		//minimize: true,
////	},

	//cache: false,

};
