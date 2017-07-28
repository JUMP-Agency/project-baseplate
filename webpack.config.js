const webpack = require("webpack");
const path = require("path");

/* Modify the entry and output properties to point to your assets */
module.exports = {
  entry: "./js/index.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader",
        }, {
          loader: "sass-loader",
          options: {
            includePaths: ["./scss"],
          }
        }],
      },
    ],
  },
};
