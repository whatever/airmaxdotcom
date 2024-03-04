const webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: __dirname + '/docs',
    filename: "airmaxdotcom.js",
    libraryTarget: 'var',
    library: 'airmaxdotcom',
  },
  module: {
    rules: [
      {
        test: /\.gltf$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(frag|vert)?$/,
        loader: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  mode: "development",
};
