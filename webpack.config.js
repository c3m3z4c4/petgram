// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    output: {
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}