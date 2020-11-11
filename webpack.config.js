const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    port: 7777,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist')
  },
  watchOptions: {
    poll: 1000 // Check for changes every second
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.ttf', '.sass', '.png'],
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  },
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      { test: /\.ts|.tsx$/, exclude: /node_modules/, use: [{ loader: 'babel-loader' }, { loader: 'ts-loader', options: { transpileOnly: true }}]},
      { test: (mP) => { return mP.endsWith('.sass') && !mP.endsWith('.module.sass');}, use: ['style-loader', 'css-loader', 'sass-loader' ]},
      { test: /\.module.sass$/, use: [ 'style-loader', 'css-modules-typescript-loader', { loader: 'css-loader', options: { modules: true }}, 'sass-loader' ]},
      { test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'fonts/' }}]},
      { test: /\.(jpg|png)$/, use: { loader: 'file-loader', options: {}}}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
