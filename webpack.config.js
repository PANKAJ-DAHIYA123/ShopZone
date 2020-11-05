const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const frontConfig = {
  target: "web",
  entry: {
    app: ["./public/news.js"],
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle-front.js",
  },
  devServer: {
    host: "0.0.0.0", // Required for docker
    publicPath: "/assets/",
    contentBase: path.resolve(__dirname, "./views"),
    watchContentBase: true,
    compress: true,
    port: 9001,
  },
  devtool: "inline-source-map",
};
const backConfig = {
  target: "node",
  entry: {
    app: ["./server.js"],
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle-back.js",
  },
  externals: [nodeExternals()],
};

module.exports = [frontConfig, backConfig];
