const path = require('path');
const webpack = require('webpack');

const NODE_DEV_SERVER_URL = `http://localhost:${process.env.PORT}`;

module.exports = {
  entry: path.resolve(__dirname, 'client/index'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: `${__dirname}/client/dist`,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': NODE_DEV_SERVER_URL,
      '/static': NODE_DEV_SERVER_URL,
      '/purchase': NODE_DEV_SERVER_URL,
      '/businessapi': NODE_DEV_SERVER_URL,
    },
  },
};
