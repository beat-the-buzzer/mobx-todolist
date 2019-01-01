const path = require('path');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages'),
      source: path.resolve(__dirname, 'src/source')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react'],
            plugins: ['transform-decorators-legacy','transform-class-properties']
          }
        }
      },
      {
        test: /\.scss/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  },
  devtool: 'inline-source-map'
};

module.exports = config;