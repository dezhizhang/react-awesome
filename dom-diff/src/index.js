/*
 * :file description: 
 * :name: /dom-diff/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-13 05:09:52
 * :last editor: 张德志
 * :date last edited: 2022-09-18 11:02:12
 */
import React from './react';
import ReactDOM from './react-dom';

const element = (
  <div id='title' key="title">title</div>
)

ReactDOM.render(element,document.getElementById('root'))
