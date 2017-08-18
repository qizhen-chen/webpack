'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//presets-es2015转码

// import 'babel-polyfill'
var fun = function fun() {
  return console.log('babel');
};

var input = [1, 2, 3];
var sub = input.map(function (item) {
  return item + 1;
});

//babel-presets-es2015不编译Object.assign();
var obj = { a: 1, b: 2 };
var h = (0, _assign2.default)(obj, { c: 2 });
console.log(h);
