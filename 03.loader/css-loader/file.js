
import style from './app.css';
import './app.css'
var oDiv = document.createElement('div');
oDiv.innerHTML = 'Webpack Loader';
oDiv.className = 'box';

oDiv.className = style.box; //如果css module为true 这一句起作用；如果为false上一句起作用
console.log(style);
// oDiv.style.cssText ="width:100px;height:100px;background:red"
document.body.appendChild(oDiv);
