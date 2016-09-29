const webpack = require('webpack');
const path = require('path');
const { name } = require('./package.json');
const pascalCase = require('pascal-case');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';

console.log(`DEBUG: ${DEBUG}`);

const configs = {
  entry: {
    app: DEBUG === true ? [
      'webpack-dev-server/client?http://localhost:8080',
      './src/index',
    ] : [
      './src/index',
    ],
  },
  output: {
    path: `${__dirname}/bundle/`,
    filename: `${name}.js`,
    publichPath: './bundle',
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
        loaders: DEBUG === true ? ['babel'] : ['babel'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
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
      new LiveReloadPlugin({
        appendScriptTag: true,
        ignore: null,
      }),
    ];
    configs.devtool = 'inline-source-map';
    break;
}

configs.plugins.push(new ExtractTextPlugin('bundle.css'));

module.exports = configs;
