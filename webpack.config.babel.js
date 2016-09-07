'use strict';

const webpack = require('webpack');
const path = require('path');
const { name } = require('./package.json');
const pascalCase = require('pascal-case');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';

console.log(`DEBUG: ${DEBUG}`);

const configs = {
  entry: {
    app: DEBUG === true ? [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/index',
    ] : [
      './src/index',
    ],
  },
  output: {
    path: `${__dirname}/bundle/`,
    filename: `${name}.js`,
    publichPath: './bundle/',
    library: pascalCase(name),
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: DEBUG === true ? ['react-hot', 'babel'] : ['babel'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
  devServer: DEBUG  === true ? {
    contentBase: 'release',
    noInfo: true,
    quiet: true,
  } : {},
};

switch (process.env.NODE_ENV) {
  case 'production':
    configs.plugins = [
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ];
    configs.devtool = '';
    break;

  default:
    configs.plugins = [
      new webpack.HotModuleReplacementPlugin(),
    ];
    configs.devtool = 'inline-source-map';
    break;
}

configs.plugins.push(new ExtractTextPlugin('bundle.css'));

module.exports = configs;
