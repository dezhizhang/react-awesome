/*
 * :file description: 
 * :name: /react-event/src/EventListener.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 11:09:52
 * :last editor: 张德志
 * :date last edited: 2022-09-04 11:12:05
 */


export function addEventCaptureListener(target,eventType,listener) {
    target.addEventListener(eventType,listener,true);
}

export function addEventBubbleListener(target,eventType,listener) {
    target.addEventListener(eventType,listener,false);
}