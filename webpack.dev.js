const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',

    devServer: {
        historyApiFallback: true,
        port: 9000,
        compress: true,
        hot: true,
      }
})