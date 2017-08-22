module.exports = {
  entry: './main.js',
  output: {
    path: './dist',
    publicPath: './dist/',
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test:'/.(png|jpe?g|gif|svg)(\?.*)?$/',
        // use:[
        //   {
        //     loader: 'file-loader',
        //     options:{
        //       name: '[name].[ext]',
        //       outputPath: './dist/',
        //       publicPath: './dist/',
        //     }
        //
        //   }
        // ]
        use: "file-loader?name=images/[name].[ext]&publicPath=assets/foo/&outputPath=app/images/"
      }
    ]
  }
}
//感觉outputPath和publicPath没什么用！;直接在dist目录中生成了文件；
