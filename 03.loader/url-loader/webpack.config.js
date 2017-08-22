const path = require('path');
module.exports = {
  entry: './main.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: path.resolve(/dist/
  },
  module:{
    rules:[
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 8194,
              name:'[path][name].[ext]'
            }
          }
        ]

      }
    ]
  }
}
