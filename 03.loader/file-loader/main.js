var url = require("file-loader!../../image/scenery.png");
console.log(url);
var  oImg = document.createElement('img');
oImg.src = url;

document.body.appendChild(oImg);
