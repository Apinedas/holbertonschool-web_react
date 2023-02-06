const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: ['./modules/header/header.js', './modules/body/body.js', './modules/footer/footer.js'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    contentBase: './public',
    compress: true,
    port: 8564,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: ["file-loader", "image-webpack-loader"]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: './public/index.html' //relative to root of the application
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
