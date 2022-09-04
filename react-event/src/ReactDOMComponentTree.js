/*
 * :file description: 
 * :name: /react-event/src/ReactDOMComponentTree.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 10:26:31
 * :last editor: 张德志
 * :date last edited: 2022-09-04 10:34:08
 */
const randomKey = Math.random().toString(36).slice(2);

const internalEventHandlersKey = '_reactEvents$' + randomKey;


export function getEventListerSet(node) {
    let elementListenerSet = node[internalEventHandlersKey];
    if(!internalEventHandlersKey) {
        elementListenerSet = node[internalEventHandlersKey] =  new Set()
    }
    return elementListenerSet;
}
