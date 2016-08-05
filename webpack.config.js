'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

let path = require("path");
let sources = path.join(__dirname, 'frontend');

let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  context: sources,

  // entry: {
  //   main: "./main"
  // },

  entry: "./main",

  output: {
    path: path.join(__dirname, 'public'),
    // publicPath: 'js/',
    // filename: "js/[name].js"
    filename: "[name].js"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 1000
  },

  // devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: '"ru"'
      // LANG: JSON.stringify('ru');
    }),
    // new webpack.ProvidePlugin({
    //   _: 'lodash'
    // }),
    // new ExtractTextPlugin('css/main.css')
    new ExtractTextPlugin('main.css')
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
      // loader: ExtractTextPlugin.extract("style", "css!autoprefixer!stylus?resolve url")
      loader: ExtractTextPlugin.extract("style", "css!autoprefixer!stylus")
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: "file?name=img/[path][name].[ext]"
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
