const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { EnvironmentPlugin } = require('webpack')
const devConfig = {
    mode: "development",
    plugins: [
        new EnvironmentPlugin({
            API: "theAPIURL",
        })
    ]
};

module.exports = merge(commonConfig, devConfig);