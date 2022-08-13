/*
 * :file description: 
 * :name: /react1/src/react.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 05:35:23
 * :last editor: 张德志
 * :date last edited: 2022-08-14 06:03:44
 */
import {
    REACT_ELEMENT,
} from './constants';
import { Component } from './component';
import { wrapToVdom } from './utils';

function createElement(type, config, children) {
    let ref;
    let key;
    if (config) {
        ref = config.ref;
        key = config.key;

    }
    let props = {
        ...config
    };
    if (arguments.length > 3) {
        props.children = Array.prototype.slice.call(arguments, 2).map((item) => wrapToVdom(item));
    } else {
        props.children = wrapToVdom(children);
    }

    return {
        $$typeof: REACT_ELEMENT,
        type,
        ref,
        key,
        props,

    }
}

const React = {
    createElement,
    Component,
}

export default React;
