const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.babel.js');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: false,
  inline: true,
  progress: false,
  historyApiFallback: true,
  stats: { colors: true },
  contentBase: './',
});

server.listen(8080);

