/*
 * :file description: 
 * :name: /dom-diff/src/ReactDOMComponent.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-22 05:53:39
 * :last editor: 张德志
 * :date last edited: 2022-09-22 06:08:49
 */

export function createElement(type) {
    return document.createElement(type);
}

export function setInitialProperties(domElement,type,props) {
    for(let propKey in props) {
        const nextProps = props[propKey];
        if(propKey === 'children') {
            if(typeof nextProps === 'string' || typeof nextProps === 'number') {
                domElement.textContent = nextProps;
            }
        }else if(propKey === 'style') {
            for(let stylePropKey in nextProps) {
                domElement.style[stylePropKey] = nextProps[stylePropKey];
            }
        }else {
            domElement[propKey] = nextProps;

        }
    }
}
