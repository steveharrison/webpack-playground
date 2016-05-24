var path = require('path');

module.exports = {
	entry: './src/entry.js', // @todo Should this be using path.resolve / path.join?
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: "style!css",
				test: /\.css$/
			},
			{
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, 'src') // @todo Is this the best way to resolve paths?
				],
				test: /\.js$/,
				query: {
					presets: ['es2015']
				}
			}
		]
	}
}