const path = require('path');

const config = {
  entry:path.resolve(__dirname, './main.js'),
  output:{
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        use:[{
          loader:'babel-loader',
          options:{
            presets:['latest','stage-2'],
            plugins: ['transform-runtime']
          }
        }],
        exclude: /node_modules/,
      }
    ]
  }
}

module.exports = config;
