// Webpack 2 configuration file for running tests in browser
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

const TEST_DIR = './test';
const ALIASES = require('../aliases');

const TEST_BROWSER_CONFIG = {
  mode: 'development',

  devServer: {
    stats: {
      warnings: false
    },
    progress: true
  },

  // Bundle the tests for running in the browser
  entry: {
    'test-browser': resolve(TEST_DIR, 'browser.js')
  },

  devtool: '#inline-source-maps',

  resolve: {
    alias: ALIASES
  },

  module: {
    rules: [
      {
        // Compile ES2015 using buble
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  plugins: [new HtmlWebpackPlugin()]
};

module.exports = TEST_BROWSER_CONFIG;
