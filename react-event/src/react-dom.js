/*
 * :file description: 
 * :name: /react-event/src/react-dom.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 05:16:45
 * :last editor: 张德志
 * :date last edited: 2022-09-06 05:08:42
 */
import { listenToAllSupportedEvents } from './DOMPluginEventSystem';
import { HostComponent } from './ReactWorkTags';
import { internalInstanceKey,internalPropsKey } from './ReactDOMComponentTree'
function render(vdom,container) {
    listenToAllSupportedEvents(container);
    mount(vdom,container);
}

function mount(vdom,container) {
    let newDOM = createDOM(vdom,container);
    container.appendChild(newDOM);
}

function createDOM(vdom,parentDOM) {
    let { type,props } = vdom;
    let dom;
    if(typeof vdom === 'string' || typeof vdom === 'number') {
        dom = document.createTextNode(vdom);
    }else {
        dom = document.createElement(type);
    }
    let returnFiber = parentDOM[internalInstanceKey] || null;
    let fiber = {tag:HostComponent,type,stateNode:dom,return:returnFiber}
    dom[internalInstanceKey] = fiber;
    dom[internalPropsKey] = props;
    if(props) {
        updateProps(dom,{},props);
        if(Array.isArray(props.children)) {
            reconcileChildren(props.children,dom)
        }else {
            mount(props.children,dom);
        }
    }
    return dom;
}

function updateProps(dom,oldProps,newProps) {

}

function reconcileChildren(children,parentDOM) {
    children.forEach(child => mount(child,parentDOM));
}


const ReactDOM = {
    render
}

export default ReactDOM;
