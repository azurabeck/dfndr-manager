const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 8080,
    historyApiFallback: true
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'App'
    }),
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        AdminApp: 'AdminApp@http://localhost:9002/remoteEntry.js'
      }
    })
  ]
}