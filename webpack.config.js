const {
  resolve,
  join,
  relative,
  dirname
} = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'main.min.js',
    path: resolve(__dirname, 'public', 'dist'),
  },
  devServer: {
    contentBase: join(__dirname, 'public'),
    compress: true,
    open: true,
    port: 8080,
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => `${relative(dirname(resourcePath), context)}/`
            }
          },
          'css-loader?url=false',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.min.css',
    })
  ]
}