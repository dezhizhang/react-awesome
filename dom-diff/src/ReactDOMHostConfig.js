/*
 * :file description: 
 * :name: /dom-diff/src/ReactDOMHostConfig.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-21 07:28:18
 * :last editor: 张德志
 * :date last edited: 2022-09-21 07:31:04
 */


export function shouldSetTextContent(type,props) {
    return typeof props.children === 'string' || typeof props.children === 'number';
}