'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

const sources = path.join(__dirname, 'frontend');

const autoprefixerOptions = {
  //  IE8+, Firefox 5+, Opera 15+, Chrome latest
  //  https://github.com/ai/browserslist
    browsers: [
      'Explorer >= 8',
      'Firefox >= 5',
      'Opera >= 15',
      'last 2 Chrome versions'
    ],
    cascade: false
  };

module.exports = {

  context: sources,

  entry: "./main",

  output: {
    path: path.join(__dirname, 'public'),
    filename: "[name].js"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 1000
  },

  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new ExtractTextPlugin('main.css'),
    new CopyWebpackPlugin([
      {from: 'static'}
    ])
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js']
  },

  module: {

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0']
      }
    }, {
      test: /\.jade$/,
      loader: "jade"
    }, {
      test: /\.css$/,
      loader: "style!css!autoprefixer"
    }, {
      test: /\.styl$/,
      // loader: "style!css!autoprefixer!stylus?resolve url"
      loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?'+ JSON.stringify(autoprefixerOptions) +'!stylus?resolve url')
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: "file?name=img/[path][name].[ext]"
    }, {
      test:/\.(ttf|eot|woff|woff2)$/,
      loader: "file?name=[path][name].[ext]"
    }]
  }

};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}
