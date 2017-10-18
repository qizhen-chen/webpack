const path = require('path');

const config = {
  entry:{
    app: path.resolve(__dirname,'index.js'),
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              module: true,
            }
          },
          { loader: 'postcss-loader'}
        ]
      },
      {
        test:/\.js$/,
        use:[
          {loader:'babel-loader'}
        ]
      }
    ]
  }
}

module.exports = config;
