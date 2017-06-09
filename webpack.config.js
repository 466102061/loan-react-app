var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');//生成html模板

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH,'build');
var APP_PATH = path.resolve(ROOT_PATH,'app');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH,'app.js') 
	},
	output: {
		path: BUILD_PATH,
		filename: '[name].bundle.js',
	},
	//dev source map
	devtool: 'eval-source-map',
	//dev server
	devServer: {
		hot: true,
		inline: true,
		//progress: true,
		port: 8080,
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules'
			}
		]
	},
	/*postcss: [
		require('autoprefixer')//调用autoprefixer插件
	],*/
	plugins: [
		new HtmlwebpackPlugin({
			title: 'app title'
			//template: APP_PATH + "index.tmpl.html"//有模板文件，则引入
		}),
		new webpack.HotModuleReplacementPlugin(),//热加载插件
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	]
}