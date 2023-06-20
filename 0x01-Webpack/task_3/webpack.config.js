// Webpack config file for task_1
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
    ],
    entry: ['./header/header.js', './body/body.js', './footer/footer.js'],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        open: true,
        port: 8564,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            }
        ]
    },
};
