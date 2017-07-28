const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


/* Modify the entry and output properties to point to your assets */
module.exports = {
  entry: ["./js/index.js", "./scss/app.scss"],
  output: {
    path: __dirname,
    filename: "./dist/bundle.js",
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "dist/[name].bundle.css",
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
