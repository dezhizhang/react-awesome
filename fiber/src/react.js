/*
 * :file description: 
 * :name: /fiber/src/react.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-29 06:10:03
 * :last editor: 张德志
 * :date last edited: 2022-08-29 06:13:45
 */

import { ELEMENT_TEXT } from './constants';

function createElement(type,config,...children) {
    return {
        type,
        props:{
            ...config,
            children:children.map(child => {
                return typeof child === 'object' ? child:{
                    type:ELEMENT_TEXT,
                    props:{text:child,children:[]}
                }
            })
        }
    }
}

const React = {
    createElement
}

export default React;


