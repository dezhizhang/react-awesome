/*
 * :file description: 
 * :name: /fiber/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-28 10:22:21
 * :last editor: 张德志
 * :date last edited: 2022-08-28 10:36:58
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

const element = (
  <div id='A1'>
    <div id='B1'>
      <div id='C1'></div>
      <div id='C2'></div>
    </div>
    <div id='B2'></div>
  </div>
)

console.log(element);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    hello
  </React.StrictMode>
);

