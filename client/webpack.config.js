/* eslint-disable indent */
var webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src",
  ],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundel.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  externals: ["express"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    // directories where to look for modules
    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used
    alias: {
      Assets: path.resolve(__dirname, "src/assets/"),
      Components: path.resolve(__dirname, "src/components/"),
      Views: path.resolve(__dirname, "src/views/"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
