/*
 * :file description: 
 * :name: /react1/src/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 05:21:58
 * :last editor: 张德志
 * :date last edited: 2022-08-10 06:31:25
 */
// import React from "react"
// import ReactDOM from "react-dom"
import React from './react';
import ReactDOM from './react-dom';



function FunctionComponent(props) {
    return <h1 className='title' style={{color:'red'}}>{props.name}</h1>
}



let element = <FunctionComponent name="hello world" />
console.log('elem',element);
ReactDOM.render(element,document.getElementById('root'))
