/*
 * :file description: 
 * :name: /react1/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 05:21:58
 * :last editor: 张德志
 * :date last edited: 2022-08-10 05:23:33
 */
import React from './react';
import ReactDOM from './react-dom';

let element = <h1>hello <span>world</span></h1>;
console.log(element);

ReactDOM.render(element,document.getElementById('root'))
