# Webpack
## Learn Webpack
>webpack 2.0以后版本支持ES模块语法 导入(import)导出(export)

### 1. webpack常用命令
```bash
$ webpack --config webpack.min.js //另一份配置文件

$ webpack --display-error-details //显示异常信息

$ webpack --watch   //监听变动并自动打包

$ webpack -p    //压缩混淆脚本，这个非常非常重要！

$ webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了
```
### 2. Loader
1. css-loader  

```javascript
{

  rules:[
    {
      test:/\.css$/,
      use:[
        {loader: 'style-loader'},
        {
          loader: 'css-loader',
          options:{
            modules: false,//true为css模块化；false为非模块化；
          }
        }
      ]
    }
  ]
}
```
> css模块化为false直接注入css；css module为true；要以对象形式注入；
