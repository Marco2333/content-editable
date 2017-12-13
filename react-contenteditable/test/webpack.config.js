module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: __dirname + '/index.js',
	output: {
		path: __dirname + '/',
		filename: 'bundle.js'
	},
	module: {
		rules:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}
}