const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  },
};
