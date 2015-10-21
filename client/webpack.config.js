'use strict';

var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

const AUTOPREFIXER_BROWSERS = [
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'Opera >= 12',
  'Safari >= 7.1'
];

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
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            }, {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=images/[hash].[ext]'
            }, {
                test: /\.woff$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('style.css', { allChunks: true }),
    ],

    postcss: function plugins(bundler) {
        return [
            require('postcss-import')({ addDependencyTo: bundler }),
            require('postcss-cssnext')({ autoprefixer: AUTOPREFIXER_BROWSERS })
        ];
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
	colors: true
    }
};
