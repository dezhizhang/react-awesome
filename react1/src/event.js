/*
 * :file description: 
 * :name: /react1/src/event.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-14 09:12:37
 * :last editor: 张德志
 * :date last edited: 2022-08-14 09:44:36
 */

import { updateQueue } from "./component";


export function addEvent(dom,eventType,handler) {
    let store = dom.store || (dom.store = {});
    store[eventType] = handler;
    if(document[eventType]) document[eventType] = dispatchEvent
}

function dispatchEvent(event) {
    updateQueue.isBathingUpdate = true;
    let { target,type } = event;
    let { store } = target;
    let eventType = `on${type}`;
    let handler = store && store[eventType];
    handler && handler(event);
    updateQueue.batchUpdate();
    


}