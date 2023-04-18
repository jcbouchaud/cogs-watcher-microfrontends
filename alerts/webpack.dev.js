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
    uniqueName: "alerts",
    publicPath: "http://localhost:8081/"
    },
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: "/index.html"
        },
        
    },
  plugins: [
    new ModuleFederationPlugin({
        name: "alerts",
        filename: "remoteEntry.js",
        exposes: {
            "./AlertsApp": "./src/bootstrap"
        },
        shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
]
}

module.exports = merge(commonConfig, devConfig)