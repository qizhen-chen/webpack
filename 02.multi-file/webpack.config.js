module.exports = {
  context: __dirname,
  entry:{
    app:['./events.js','./home.js','./verdor.js'], //单个文件输出；

    //多个文件输出
    events: './events.js',
    home: './home.js',
    verdor: './verdor.js'

  },
  output:{
    path:__dirname+ '/dist',
    filename: '[name].bundle.js'
  }
}
