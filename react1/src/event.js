/*
 * :file description: 
 * :name: /react1/src/event.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-14 09:12:37
 * :last editor: 张德志
 * :date last edited: 2022-08-15 04:23:02
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
    let syntheticEvent = createSyntheticEvent(event);
    let currentTarget = target;
    while(currentTarget) {
        let { store } = target;
        let eventType = `on${type}`;
        let handler = store && store[eventType];
        handler && handler(syntheticEvent);
        if(syntheticEvent.isPropagationStopped) {
            break;
        }
        currentTarget = currentTarget.parentNode;
    }
   
    updateQueue.batchUpdate();

}


function createSyntheticEvent(nativeEvent) {
    let syntheticEvent = {};
    for(let key in nativeEvent) {
        let value = nativeEvent[key];
        if(typeof value === 'function') value = value.bind(nativeEvent);
        syntheticEvent[key] = value;
    }
    syntheticEvent.nativeEvent = nativeEvent;
    syntheticEvent.isDefaultPrevented = false;
    syntheticEvent.preventDefault = preventDefault();
    syntheticEvent.isPropagationStopped = false;
    syntheticEvent.stopPropagation = stopPropagation;
    return syntheticEvent
}

function preventDefault() {
    this.isDefaultPrevented = true;
    const event = this.nativeEvent;
    if(event.preventDefault) {
        event.preventDefault();
    }else {
        event.returnValue = false;
    }
}

function stopPropagation() {
    this.isPropagationStopped = true;
    const event = this.nativeEvent;
    if(event.stopPropagation) {
        event.stopPropagation();
    }else {
        event.cancelBubble = true;
    }
}

