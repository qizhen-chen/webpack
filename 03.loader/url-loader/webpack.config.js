const path = require('path');
module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
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
              // name:'[path][name].[ext]'
              name: '[name].min.[ext]'
            }
          },
          'image-webpack-loader', // 压缩图片
        ]
      }
    ]
  }
}
