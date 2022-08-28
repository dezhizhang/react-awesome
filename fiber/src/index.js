/*
 * :file description: 
 * :name: /fiber/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-28 10:22:21
 * :last editor: 张德志
 * :date last edited: 2022-08-29 06:36:29
 */
import React from './react';
import ReactDOM from 'react-dom';

const style = {border:'3px solid red',margin:'5px'}

const element = (
  <div id='A1' style={style}>
    A1
    <div id='B1' style={style}>
      <div id='C1' style={style}>C1</div>
      <div id='C2' style={style}>C2</div>
    </div>
    <div id='B2'>B2</div>
  </div>
)


ReactDOM.render(element,document.getElementById('root'))

console.log(element);
