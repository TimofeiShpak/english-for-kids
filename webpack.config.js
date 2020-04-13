const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = (env, options) => {
  const isProduction = options.mode === "production";

  const config = {
    mode: isProduction ? "production" : "development",
    watch: !isProduction,
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "script.js",
    },

    plugins: [
      new CleanWebpackPlugin(),
    ],

  };

  return config;
};
