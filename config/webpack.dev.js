const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const buildPath = path.resolve(__dirname, '../build');
const sourcePath = path.resolve(__dirname, '../src');

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m'
  }
};

module.exports = {
  mode: 'development',
  entry: {
    index: 'index.js'
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              url: false,
              sourceMap: false,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false,
              url: false,
              localIdentName: '[folder]-[name]-[local]-[hash:base64:5]',
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(sourcePath, 'index.html'),
      filename: path.resolve(buildPath, 'index.html'),
      inject: 'body',
      chunks: ['index']
    })
  ],
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.vue'],
    modules: [path.resolve(__dirname, '../', 'node_modules'), sourcePath],
    alias: {
      '@': path.resolve(__dirname, '../', 'src'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '../', 'build'),
    publicPath: '/',
    port: 8300,
    host: '0.0.0.0',
    hot: true,
    compress: false,
    stats,
    disableHostCheck: true,
    historyApiFallback: true
  }
}
