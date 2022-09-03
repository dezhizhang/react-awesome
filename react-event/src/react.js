/*
 * :file description: 
 * :name: /react-event/src/react.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 05:11:59
 * :last editor: 张德志
 * :date last edited: 2022-09-04 05:13:34
 */


function createElement(type,config,children) {
    let props = {...config};
    if(arguments.length > 3) {
        props.children = Array.prototype.slice.call(arguments,2);

    }else {
        props.children = children;
    }
    return {type,props};
}

const React = {
    createElement
}

export default React;
