const path = require('path')
const config = {
  //入口文件
  entry:{
    app: path.resolve(__dirname,'file.js'),
  },
  //输出文件路径；输出文件名
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'my-first-webpack.bundel.js'
  }
}

module.exports = config;
