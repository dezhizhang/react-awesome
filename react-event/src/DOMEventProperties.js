/*
 * :file description: 
 * :name: /react-event/src/DOMEventProperties.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 06:16:10
 * :last editor: 张德志
 * :date last edited: 2022-09-04 06:31:27
 */

const discreateEventPairsForSimpleEventPlugin = [
    'click','click',
    'dbclick','dbclick'
];

export const topLevelEventsToReactNames = new Map();


function registerTwoPhaseEvent() {
    
}

export function registerSimpleEvents() {
    for(let i=0;i < discreateEventPairsForSimpleEventPlugin.length;i++) {
        const topEvent = discreateEventPairsForSimpleEventPlugin[i];
        const event = discreateEventPairsForSimpleEventPlugin[i + 1];
        const capitalizedEvent = event[0].toUpperCase() + event.slice(1);
        const reactName = 'on' + capitalizedEvent;
        topLevelEventsToReactNames.set(topEvent,reactName);
        registerTwoPhaseEvent(reactName,[topEvent]);
    }
}

