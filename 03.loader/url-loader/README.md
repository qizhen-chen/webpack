## url-loader
> url-loader相当于是file-loader的加强版

```javascript
module.exports = {
  ...
  module:{
    rules:[
      {
        test:/\.(png|jpg|gif)$/,
        use: [
          {
            loader:'url-loader',
            options:{
              limit: 8192,
            }
          }
        ]
      }
    ]
  }
}
```
- 没图片大小没超过limit就会转成base64编码；
```html
  <img src="data:image/png;base64,iVBOR...uQmCC">

```
