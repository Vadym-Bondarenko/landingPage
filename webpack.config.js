const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtracPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtracPlugin({
      filename: 'styles.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtracPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        
        use: [MiniCssExtracPlugin.loader, "css-loader","sass-loader"],
      },
      
      {
        test: /\.m?js$/,
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
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4200,
  },
  optimization: {
    minimize: true,
    minimizer: [
    
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    
    ],
  },
  stats: {
    children: true,
  },
}