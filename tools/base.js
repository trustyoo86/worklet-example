'use strict';

const { join, resolve } = require('path');

const rootPath = resolve(__dirname, '..');
const srcPath = resolve(__dirname, '..', 'src');

module.exports = {
  entry: {
    main: join(srcPath, 'main.js'),
  },
  output: {
    path: resolve(rootPath, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};