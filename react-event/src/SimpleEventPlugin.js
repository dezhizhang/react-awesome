/*
 * :file description: 
 * :name: /react-event/src/SimpleEventPlugin.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 06:15:27
 * :last editor: 张德志
 * :date last edited: 2022-09-13 04:28:58
 */


import { registerSimpleEvents, topLevelEventsToReactNames } from './DOMEventProperties';
import { IS_CAPTURE_PHASE } from './EventSystemFlags';
import { SyntheticMouseEvent } from './SyntheticEvent';
import { accumulateSinglePhaseListeners } from './DOMPluginEventSystem';

function extractEvents(
    dispatchQueue,
    domEventName,
    targetInst,
    nativeEvent,
    nativeEventTarget,
    eventSystemFlags,
    targetContainer
) {
    let reactName = topLevelEventsToReactNames.get(domEventName);
    let SyntheticEventCtor;
    let reactEventType = domEventName;
    switch(domEventName) {
        case 'click':
            SyntheticEventCtor = SyntheticMouseEvent;
            break;
            default:
                break;
                
    }
    let isCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !==0;
    const listeners = accumulateSinglePhaseListeners(
        targetInst,
        reactName,
        nativeEvent.type,
        isCapturePhase
    )

    if(listeners.length > 0) {
        const event = SyntheticEventCtor(
            reactName,
            reactEventType,
            targetInst,
            nativeEvent,
            nativeEventTarget
        )
        dispatchQueue.push({event,listeners});

    }
}

export { registerSimpleEvents as registerEvents,extractEvents };
 