
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry :'./package1/index.js',
  output: {
    path: path.resolve('./'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
