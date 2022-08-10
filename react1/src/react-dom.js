/*
 * :file description: 
 * :name: /react1/src/react-dom.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-10 05:23:40
 * :last editor: 张德志
 * :date last edited: 2022-08-10 06:32:34
 */

import { REACT_TEXT } from "./constants";

function updateProps(dom, newProps) {
    for (let key in newProps) {
        if (key === 'children') {
            continue
        } else if (key === 'style') {
            let styleObj = newProps[key];
            for (let attr in styleObj) {
                dom.style[attr] = styleObj[attr]
            }
        } else {
            dom[key] = newProps[key]
        }
    }
   
}

function reconcileChildren(children,parentDOM) {
    for(let i=0;i < children.length;i++) {
        mount(children[i],parentDOM);
    }
}

function createDOM(vdom) {
    let { type, props } = vdom;
    let dom;
    console.log(typeof type);
    if (type === REACT_TEXT) {
        dom = document.createTextNode(props);
    } else if(typeof type === 'function') {
        
    }else  {
        dom = document.createElement(type);
    }
    if (props) {
        updateProps(dom,props);
        if(typeof props.children === 'object' && props.children.type) {
            mount(props.children,dom);
        }else if(Array.isArray(props.children)) {
            reconcileChildren(props.children,dom);
        }
    }

    return dom;
}

function mount(vdom, container) {
    let newDOM = createDOM(vdom);
    container.appendChild(newDOM);
}


function render(vdom, container) {
    mount(vdom,container)
    // let newDOM = createDOM(vdom);
    // container.appendChild(newDOM);
}


const ReactDOM = {
    render,
}

export default ReactDOM;
