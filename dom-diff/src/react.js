/*
 * :file description: 
 * :name: /dom-diff/src/react.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-13 05:24:29
 * :last editor: 张德志
 * :date last edited: 2022-09-13 05:35:10
 */

import { REACT_ELEMENT_TYPE } from './ReactSymbols';
const RESERVED_PROPS = {
    key:true,
    ref:true,
    _self:true,
    _source:true,
}

function createElement(type,config,children) {
    let propsName;
    let props = {};
    let key = null;
    let ref = null;
    if(config.key) {
        key = config.key;
    }
    if(config.ref) {
        ref = config.ref;
    }

    for(propsName in config) {
        if(!RESERVED_PROPS.hasOwnProperty(propsName)) {
            props[propsName] = config[propsName];
        }
    }

    const childrenLength = arguments.length - 2;
    if(childrenLength > 1) {
        const childrenArray = new Array(childrenLength);
        for(let i=0;i < childrenLength;i++) {
            childrenArray[i] = arguments[i + 2];
        }
        props.children = childrenArray;
    }else {
        props.children = children;
    }

    return {
        $$type:REACT_ELEMENT_TYPE,
        type,
        ref,
        key,
        props
    }
}

const React = {
    createElement
}

export default React;
