// Webpack config file for task_1
const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'production',
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
    ]
};
