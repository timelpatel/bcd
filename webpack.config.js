const webpack = require('webpack')
const path = require('path')
const APP_DIR = path.resolve(__dirname, 'src/')
const BUILD_DIR = path.resolve(__dirname, 'public/')

const config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        include: APP_DIR,
        // exclude: /(node_modules)/,
        test: /\.jsx?/,
        use: 'babel-loader',
      },
      {
        test : /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // importLoaders: 1,
              localIdentName: '[sha1:hash:hex:4]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [{
      //       loader: 'file-loader',
      //       options: {
      //           name: '[name].[ext]',
      //           outputPath: 'public/asset/fonts/'
      //       }
      //   }]
      // },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss',
    ],
    mainFiles: [
      'index',
      'style',
    ],
  },
}

module.exports = config
