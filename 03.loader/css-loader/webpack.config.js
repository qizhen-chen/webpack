const path = require('path');

const config = {
  entry:{
    app: path.resolve(__dirname,'file.js'),
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
          }
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