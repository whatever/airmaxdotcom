const webpack = require("webpack");


function liveHostUrl(mode) {
  if (mode === "production") {
    return "https://live.airmax.com/lmk/status";
  }
  return "http://localhost:8080/lmk/status";
}


function url(mode) {
  if (mode === "production") {
    return "https://live.airmax.com";
  }

  return "http://localhost:8080";
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
        "/lmk": {
          target: 'http://localhost:8181',
          // pathRewrite: {'^/lmk': ''},
        },
        '/socket.io': {
          target: 'http://localhost:8181',
          ws: true
        }
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        "AIRMAX_URL": JSON.stringify(liveHostUrl(mode)),
        "AIRMAX_SOCKETIO_URL": JSON.stringify(url(mode)),
      }),
    ],
  };
};
