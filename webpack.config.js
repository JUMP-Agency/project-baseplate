const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require("./package.json");
const cssPath = pkg.paths.scss;
const jsPath = pkg.paths.js;


module.exports = {
  entry: [jsPath.input + jsPath.entry, cssPath.input + cssPath.entry],
  output: {
    path: __dirname,
    filename: jsPath.output,
  },
  plugins: [
    new ExtractTextPlugin({
      filename: cssPath.output,
      allChunks: true,
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"]),
      },
    ],
  },
};
