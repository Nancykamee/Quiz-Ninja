const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin"); // Updated minification plugin
const path = require('path');
// const preset = require('babel-preset-babili');

module.exports = {
  context: path.resolve (__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.resolve (__dirname,  'dist'),
    filename: 'bundle.min.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']  // Updated preset
            // presets: ['env' ]
          }
        }
      }
    ]
  },
  plugins: [
    new TerserPlugin(),  // Replaced BabiliPlugin with MinifyPlugin
    // new BabiliPlugin(),
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  mode: 'production'  // Set mode to 'production' to enable optimizations like minification

};