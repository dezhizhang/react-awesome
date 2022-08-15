/*
 * :file description: 
 * :name: /react1/src/react-dom.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-10 05:23:40
 * :last editor: 张德志
 * :date last edited: 2022-08-16 05:58:16
 */

import { REACT_TEXT } from "./constants";
import { addEvent } from "./event";

function updateProps(dom, newProps) {
    for (let key in newProps) {
        if (key === 'children') {
            continue
        } else if (key === 'style') {
            let styleObj = newProps[key];
            for (let attr in styleObj) {
                dom.style[attr] = styleObj[attr]
            }
        } else if(/^on[A-Z].*/.test(key)) {
            debugger;
            addEvent(dom,key.toLocaleLowerCase(),newProps[key]);
        }else {
            dom[key] = newProps[key]
        }
    }
}


function mountFunctionComponent(vdom) {
    let {type:FunctionComponent,props} = vdom;
    let renderVdom = FunctionComponent(props);
    // 缓存上一次的dom
    vdom.oldRenderVdom = renderVdom;
    return createDOM(renderVdom);
    
}

function mountClassComponent(vdom){
    let {type:ClassComponent,props,ref} = vdom;
    let classInstance = new ClassComponent(props);
    vdom.classInstance = classInstance;
    if(ref) ref.current = classInstance;
    let renderVdom = classInstance.render();
    // 缓存上一次的dom
    classInstance.oldRenderVdom = vdom.oldRenderVdom =  renderVdom;
    let dom = createDOM(renderVdom);
    return dom;
}

function reconcileChildren(children,parentDOM) {
    for(let i=0;i < children.length;i++) {
        mount(children[i],parentDOM);
    }
}

function createDOM(vdom) {
    let { type, props,ref } = vdom;
    let dom;
    console.log(typeof type);
    if (type === REACT_TEXT) {
        dom = document.createTextNode(props);
    }else if(typeof type === 'function') {
        if(type.isReactComponent) {
            return mountClassComponent(vdom);
        }else {
            return mountFunctionComponent(vdom);
        }
    }else  {
        dom = document.createElement(type);
    }
    if (props) {
        //更新属性 dom老属性对像
        updateProps(dom,props);
        if(typeof props.children === 'object' && props.children.type) {
            mount(props.children,dom);
        }else if(Array.isArray(props.children)) {
            reconcileChildren(props.children,dom);
        }
    }
    // 在创建真实DOM的时候，把虚拟DOM和真实DOM进行关联
    vdom.dom = dom;
    if(ref) ref.current = dom;
    return dom;
}

function mount(vdom, container) {
    let newDOM = createDOM(vdom);
    container.appendChild(newDOM);
}


function render(vdom, container) {
    mount(vdom,container);
}

export function findDOM(vdom) {
    if(!vdom) return null;
    if(vdom.dom) {
        return vdom.dom;
    }else {
        let renderVdom = vdom.isReactComponent ? vdom.oldRenderVdom:vdom.oldRenderVdom;
        return findDOM(renderVdom);
    }
}

export function compareTwoVdom(parentDOM,oldVdom,newVdom) {
    // let oldDOM = findDOM(oldVdom);
    // let newDOM = createDOM(newVdom);
    
    // parentDOM.replaceChild(oldDOM,newDOM);

    if(!oldVdom && !newVdom) {
        return null
    }else if(oldVdom && !newVdom) {
        unmountVdom(oldVdom);
    }

}

function unmountVdom(vdom) {
    const { props,ref } = vdom;
    const currentDOM = findDOM(vdom);
    if(vdom.classInstance && vdom.classInstance.componentWillUnmount) {
        vdom.classInstance.componentWillUnmount();
    }
    if(ref) ref.current = null;
    if(props.children) {
        let children = Array.isArray(props.children) ? props.children:[props.children];
        children.forEach(unmountVdom);
    }
    if(currentDOM) currentDOM.remove();

}


const ReactDOM = {
    render,
}

export default ReactDOM;
