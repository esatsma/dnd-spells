const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");

const env = process.env.NODE_ENV || "development";
const debug = true;

module.exports = {
  mode: env,
  cache: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  entry: ["./src/shadow.tsx"],
  devtool: debug ? "cheap-module-source-map" : "hidden-source-map",
  output: {
    path: path.resolve("./dist"),
    filename: "js/main.js",
    libraryTarget: "umd",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
    new WebpackManifestPlugin(),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_API_BASE": JSON.stringify("development"),
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin({})],
    usedExports: true,
    sideEffects: true,
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
    runtimeChunk: false,
  },
  module: {
    rules: [
      {
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  resolve: {
    unsafeCache: true,
    extensions: [".js", ".vue", ".scss", ".css", ".ts", ".tsx"],
  },
};
