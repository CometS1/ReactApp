# ReactApp
An app using React.js
---
Created using the commands on the windows prompt:
> npm init
> npm i -S -react
> npm i -S -react-dom
> npm install --save-dev babel-core babel-loader babel-preset-react
> npm i -D --no-options webpack webpack-dev-server html-webpack-plugin
---
Created .babelrc and added {presets : ['react']} to it
---
Created webpack.config.js and added :
---
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};
---
Modified package.json and added underneath main:
---
"scripts": {
    "build": "webpack",
	  "start": "webpack-dev-server"
  },
---
Created app folder and added index.js and index.html
---
In app folder created component folder and added App.js
--
run using: 
> npm run build
> npm run start
---
