const path = require('path')
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

const devConfig = {
  mode: "development",
  output: {
    // https://github.com/webpack/webpack/issues/15582
    uniqueName: "listings",
    publicPath: "http://localhost:8082/"
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: "/index.html"
        },
        
    },
  plugins: [
    new ModuleFederationPlugin({
        name: "listings",
        filename: "remoteEntry.js",
        exposes: {
            "./ListingsApp": "./src/bootstrap"
        },
        shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
]
}

module.exports = merge(commonConfig, devConfig)