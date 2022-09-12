/*
 * :file description: 
 * :name: /react-event/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-03 05:53:20
 * :last editor: 张德志
 * :date last edited: 2022-09-13 05:03:00
 */
import React from './react';
import ReactDOM from './react-dom';


const handleDivClick = () => {
  console.log('父元素冒泡')
}

const handleButtonClick = () => {
  console.log('子元素的冒泡');
}

let element = (
  <div  onClick={handleDivClick}>
    <button onClick={handleButtonClick}>按钮</button>
  </div>
  
)



ReactDOM.render(element,document.getElementById('root'))
