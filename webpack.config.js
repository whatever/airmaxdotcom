const webpack = require("webpack");


function url(mode) {

  if (mode === "production") {
    return "http://localhost:8181";
  }

  return "http://localhost:8181";
}


module.exports = (env, {mode}) => {
  return {
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
    devServer: {
      proxy: {
        '/socket.io': {
          target: 'http://localhost:8181',
          ws: true
        }
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        "AIRMAX_SOCKETIO_URL": JSON.stringify(url(mode)),
      }),
    ],
  };
};
