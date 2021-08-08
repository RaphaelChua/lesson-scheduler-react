const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
  const envCommon = common(env);

  return merge(envCommon, {
    devtool: "inline-source-map",
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // new BundleAnalyzerPlugin(),
    ],
    devServer: {
      contentBase: "./build",
      hot: true,
      disableHostCheck: true,
      historyApiFallback: true,
      host: "127.0.0.1",
      port: "3000",
      watchOptions: {
        poll: true,
        ignored: /node_modules/,
      },
      open: true,
      openPage: "sign-in",
    },
  });
};
