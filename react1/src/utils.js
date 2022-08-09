/*
 * :file description: 
 * :name: /react1/src/utils.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-09 06:16:25
 * :last editor: 张德志
 * :date last edited: 2022-08-09 06:20:54
 */
import { REACT_TEXT } from './constants';

export function wrapToVdom(element) {
    return typeof element === 'string' || typeof element === 'number' ? {
        type:REACT_TEXT,
        props:element,
    }:element
}