/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  target: 'node',
  entry: [
    'babel-polyfill',
    './tests/index'
  ],
  output: {
    path: path.join(__dirname, 'tests'),
    filename: 'compiled.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets:['es2015'],
      }
    }]
  }
};
