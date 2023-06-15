const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require("webpack");
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for .js or .jsx files
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/, //checks for .css files
        use: ["style-loader", "css-loader"],
      },
      {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Portfolio Sinval Gomes',
    template: path.resolve(__dirname, './src/index.html'), // template file
    filename: 'index.html', // output file
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    sourceMapFilename: "[name].[contenthash].js.map",
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
   splitChunks: {
     cacheGroups: {
       vendor: {
         test: /[\\/]node_modules[\\/]/,
         name: 'vendors',
         chunks: 'all',
       },
     },
   },
  },
};
