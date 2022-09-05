/*
 * :file description: 
 * :name: /react-event/src/DOMPluginEventSystem.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 05:41:27
 * :last editor: 张德志
 * :date last edited: 2022-09-06 06:28:21
 */

import { allNativeEvents } from "./EventRegistry";
import * as SimpleEventPlugin from './SimpleEventPlugin';
import { getEventListerSet } from './ReactDOMComponentTree';
import { IS_CAPTURE_PHASE } from './EventSystemFlags';
import { dispatchEvent } from './ReactDOMEventListener';
import { addEventBubbleListener, addEventCaptureListener } from "./EventListener";

SimpleEventPlugin.registerEvents();

export const nonDelegatedEvent = new Set(['scroll']);

export function listenToAllSupportedEvents(container) {
    allNativeEvents.forEach(domEventName => {
        if(!nonDelegatedEvent.has(domEventName)) {
            listenToNativeEvent(domEventName,false,container);
        }
        listenToNativeEvent(domEventName,true,container);
    });
}

function listenToNativeEvent(domEventName,isCapturePhaseListener,rootContainerElement,eventSystemFlags = 0) {
    let listenerSet = getEventListerSet(rootContainerElement);
    let listenerSetKey = getEventListerSetKey(domEventName,isCapturePhaseListener);
    if(!listenerSet.has(listenerSetKey)) {
        if(isCapturePhaseListener) {
            eventSystemFlags |= IS_CAPTURE_PHASE;
        }
        addTrappedEventListener(
            rootContainerElement,
            domEventName,
            eventSystemFlags,
            isCapturePhaseListener,
        )
        listenerSet.add(listenerSetKey)    
    }
}

function addTrappedEventListener(rootContainerElement,domEventName,eventSystemFlags,isCapturePhaseListener) {
    let listener = dispatchEvent.bind(null,domEventName,eventSystemFlags,rootContainerElement);

    if(isCapturePhaseListener) {
        addEventCaptureListener(rootContainerElement,domEventName,listener);
    }else {
        addEventBubbleListener(rootContainerElement,domEventName,listener);
    }
}

function getEventListerSetKey(domEventName,isCapturePhaseListener) {
    return `${domEventName}__${isCapturePhaseListener ? 'capture':'bubble'}`
}

export function dispatchEventForPluginEventSystem(domEventName,eventSystemFlags,nativeEvent,targetInst,targetContainer) {
    
    
}


export function accumulateSinglePhaseListeners() {
    
}