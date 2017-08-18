# babel说明
### 常用命令
```bash
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```
#### 一、在babel6里面，要转换ES2015的代码，需要自己设置插件。
比如：

```javascript
let fun = () => console.log('babel');
//要转码成
let fun = function() {
  console.log('babel');
}
```

###### 1. 第一步，下载插件
```bash
  //该插件只能转换箭头函数；es6的其他语法就转换不了
  npm install babel-plugin-transform-es2015-arrow-functions
```
###### 2. 第二步，在目录下创建一个.babelrc文件，用于配置babel，
```json
  {
    "plugins": [ "transform-es2015-arrow-functions" ]
  }
```

### 二、presets
> 基本上ES2015/ES7的的各种功能，babel都提供了相应的插件用于转换，但是我们要一个一个配置那就太恼人了。所以babel提供了一个方法：presets。我们不妨把 presets 理解为套餐，不同套餐有不同的插件组合，比如 ES2015 preset 里打包了所有用于转换 ES2015 代码的插件，React preset 则打包了转换 react.js jsx 语法的插件。

##### 1. 安装
```bash
  npm install babel-presets-es2015 --save-dev
```
##### 2. 配置.babelrc
```json
 {
  "presets": [ "es2015" ]
}
```

### 三、babel-polyfill && babel-runtime && babel-plugin-transform-runtime
> 前面所提到的ES6的转码；Babel 默认只转码 ES6 的新语法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign、Array.from）都不会转码。

>**说明:**说明时候用babel-polyfill,什么时候用babel-runtime呢？如果你不介意使用全局变量，放心
>大胆的使用babel-polyfill;而如果你在写模块；为了避免污染使用者的环境，没的选，只能用 babel-runtime + babel-plugin-transform-runtime。


##### 1. babel-polyfill
```javascript
//1.安装
npm install babel-polyfill --save-dev

//javasript
import 'babel-polyfill'; 或者 require('babel-polyfill');

//使用 webpack.config.js
{
	entry: [ 'src/main.js', 'babel-polyfill']
}


```

##### 2. babel-runtime && babel-plugin-transform-runtime
> 生产环境 babel-runtime  
> 开发环境 bebel-plugin-transform-runtime

```javascript
//安装
npm install babel-runtime --save //production
npm install babel-plugin-transform-runtime //development

babel-runtime是babel-plugin-transform-runtime的依赖；所以两个都需要安装！

//webpack.config.js
module.exports = {
  ...
  module:{
    rules: [
      {
        test: '/\.js/',
        use: 'babel-loader',
        include: path.join(__dirname, src),
        exclude: /node_modules/,
        query:{
          plugins: [ 'transform-runtime' ],
          presets: [
            'es2015',
            'stage-2'
          ]
        }
      }
    ]
  }
}

```

```json
//.babelrc
{
  "plugins": [ "transform-runtime",options ]
  
}
总结：主要有以下options选择。

helpers: boolean，默认true
使用babel的helper函数。

polyfill: boolean，默认true
使用babel的polyfill，但是不能完全取代babel-polyfill。

regenerator: boolean，默认true
使用babel的regenerator。

moduleName: string，默认babel-runtime
使用对应module处理。

这里的options一般不用自己设置，用默认的即可。这个插件最大的作用主要有几下几点：

解决编译中产生的重复的工具函数，减小代码体积
非实例方法的poly-fill，如Object.assign，但是实例方法不支持，如"foobar".includes("foo")，这时候需要单独引入babel-polyfill

```

### 四、babel-presets-stage babel的转换级别
> Babel的转换级别依据 ES7不同阶段的语法提案设置了4个阶段：stage-0 、stage-1、stage-2、stage-3，使用时选装一个。（0的级别最高，包含的转码插件最多，往后越来越少）

1. Stage 0 - Strawman: just an idea, possible Babel plugin.
2. Stage 1 - Proposal: this is worth working on.
3. Stage 2 - Draft: initial spec.
4. Stage 3 - Candidate: complete spec and initial browser implementations.
5. Stage 4 - Finished: will be added to the next yearly release. //已完成的提案，与年度发布的release有关，包含2015年到明年正式发布的内容。

### 五、presets和plugins编译书序
具体而言，plugins优先于presets进行编译。
plugins按照数组的index增序(从数组第一个到最后一个)进行编译。
presets按照数组的index倒序(从数组最后一个到第一个)进行编译。因为作者认为大部分会把presets写成["es2015", "stage-0"]。