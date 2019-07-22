'use strict';

const helpers                   =       require('./helpers');
const VueLoaderPlugin           =       require('vue-loader/lib/plugin');
const MiniCSSExtractPlugin      =       require('mini-css-extract-plugin');
const FriendlyErrorsPlugin      =       require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    polyfill: '@babel/polyfill',
    main: helpers.root('howdy/theming', 'js/main.js'),
  },
  resolve: {
    extensions: [ '.js', '.vue' ],
    alias: {
      'vue$': 'vue/dist/vue.common.dev.js',
      '@': helpers.root('howdy/theming')
    }
  },
  output: {
    path: helpers.root('howdy/static/dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [ helpers.root('howdy/theming') ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ helpers.root('howdy/theming') ]
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
        test: /\.scss$/,
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
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new VueLoaderPlugin(),
    new MiniCSSExtractPlugin({
     filename: 'css/[name].css',
     chunkFilename: 'css/[id].css'
    })
  ]
};
