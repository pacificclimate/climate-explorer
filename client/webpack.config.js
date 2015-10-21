'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'src', 'index.js')
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'file?name=images/[hash].[ext]'
            }, {
                test: /\.woff$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],

    postcss: function () {
        return [autoprefixer];
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
	colors: true
    }
};
