/*
 * :file description: 
 * :name: /react-event/src/EventRegistry.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 06:33:39
 * :last editor: 张德志
 * :date last edited: 2022-09-04 06:42:45
 */

export const allNativeEvents = new Set();



export function registerTwoPhaseEvent(registrationName,dependencies) {
    registerDirectEvent(registrationName,dependencies);
    registerDirectEvent(registrationName + 'Capture',dependencies);
}


export function registerDirectEvent(registrationName,dependencies) {
    for(let i=0;i < dependencies.length;i++) {
        allNativeEvents.add(dependencies[i]);
    }
}