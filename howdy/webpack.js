'use strict';
const path                 = require('path');
const HtmlPlugin           = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/js/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'static/dist'),
    filename: 'main.bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.vue' ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
   new MiniCSSExtractPlugin({
     filename: 'css/[name].css',
     chunkFilename: "css/[id].css"
   })
 ],
 stats: {
    colors: true
  },
 devtool: 'source-map',
 //watch: true
};
