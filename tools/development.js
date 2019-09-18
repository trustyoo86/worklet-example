'use strict';

const base = require('./base');
const merge = require('webpack-merge');

module.exports = merge(base, {
  mode: 'development',
  devtool: '#cheap-eval-source-map',
});