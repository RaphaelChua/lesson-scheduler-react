const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const buildPath = resolve(__dirname, "build");
const path = require("path");
const fs = require("fs");

module.exports = (env) => {
  // Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);

  // Create the fallback path (the production .env)
  const basePath = currentPath + "/.env";

  console.log(basePath);

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = currentPath + `/.${env.ENVIRONMENT}.env`;

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  console.log(envPath);

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
  return {
    entry: "./src/index.jsx",
    output: {
      path: buildPath,
      filename: "bundle.[hash].js",
      publicPath: "/",
    },
    resolve: {
      modules: [
        resolve("./src"),
        resolve("./node_modules"),
        // join(__dirname, "js/helpers"),
      ],
      extensions: [".js", ".jsx", ".json"],
    },
    node: {
      fs: "empty",
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ["build"],
      }),
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/images/favicon.ico",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            configFile: resolve("babel.config.js"),
          },
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2?|mp3)?$/,
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "./fonts/[name]/[name].[ext]",
            outputPath: "fonts/",
          },
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]?[hash]",
          },
        },
      ],
    },
  };
};
