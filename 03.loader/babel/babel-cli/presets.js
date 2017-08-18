//presets-es2015转码

// import 'babel-polyfill'
let fun = () => console.log('babel')

let input = [1,2,3];
let sub = input.map(item => item + 1);

//babel-presets-es2015不编译Object.assign();
let obj = { a:1, b:2};
let h = Object.assign(obj, { c:2 });
console.log(h);
