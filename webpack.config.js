const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const webpackConfig = {
    entry: {
        app: resolve("./src/web/index.tsx")
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]

            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/web/index.html"
        }),
        new WebpackBuildNotifierPlugin({
            title: "My Webpack Project",
            suppressSuccess: true, // don't spam success notifications
          })
    ]
}

module.exports = merge(webpackConfig, _mergeConfig)

