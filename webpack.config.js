/*
* @Author: 12574
* @Date:   2018-04-18 23:22:12
* @Last Modified by:   12574
* @Last Modified time: 2018-04-19 10:56:26
*/
var webpack = require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

//获取html-webpack-plugin参数的方法
 var getHtmlConfig = function(name){
 	return {
 			template: './src/view/' + name + '.html',
			filename: 'view/' + name + '.html',
			inject: true,
			hash: true,
			chunks: ['common',name],
 	}
 }


var config = {
	entry: {
		'common': ['./src/page/common/index.js'],
		'index': ['./src/page/index/index.js'],
		'login': ['./src/page/login/index.js'],
	},
	output: {
		path: './dist',
		publicPath : '/dist',
		filename: 'js/[name].js'
	},
	externals: {
		'jquery': 'window.jQuery'
	},
	module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            // { test: /\.string$/, loader: 'html-loader'}
        ]
    },

	plugins: [
		/*CommonsChunkPlugin 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，
		这个文件包括多个入口 chunk 的公共模块*/
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		}),
		//  单独打包css插件
		new ExtractTextPlugin("css/[name].css"),
		//html模板处理
		new HtmlWebpackPlugin(getHtmlConfig('index')),
		new HtmlWebpackPlugin(getHtmlConfig('login')),
	]
};

if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}

module.exports = config;