const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/* Change the constants to your asset paths */
const cssOutputPath = "./dist/css/";
const jsOutputPath = "./dist/js/";


module.exports = {
  entry: ["./js/index.js", "./scss/app.scss"],
  output: {
    path: __dirname,
    filename: path.join(jsOutputPath, "app.js"),
  },
  plugins: [
    new ExtractTextPlugin({
      filename: path.join(cssOutputPath, "styles.css"),
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
