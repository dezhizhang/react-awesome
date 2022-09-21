/*
 * :file description: 
 * :name: /dom-diff/src/ReactDOMHostConfig.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-21 07:28:18
 * :last editor: 张德志
 * :date last edited: 2022-09-22 06:07:54
 */

import { createElement,setInitialProperties } from "./ReactDOMComponent";


export function shouldSetTextContent(type,props) {
    return typeof props.children === 'string' || typeof props.children === 'number';
}

export function createInstance(type) {
    return createElement(type);
}

export function finalizeInitialChildren(domElement,type,props) {
    setInitialProperties(domElement,type,props);
}