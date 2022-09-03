/*
 * :file description: 
 * :name: /react-event/src/DOMPluginEventSystem.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 05:41:27
 * :last editor: 张德志
 * :date last edited: 2022-09-04 06:44:11
 */

import { allNativeEvents } from "./EventRegistry";
import * as SimpleEventPlugin from './SimpleEventPlugin';

SimpleEventPlugin.registerEvents();


export function listenToAllSupportedEvents() {
    allNativeEvents.forEach(domEventName => {

    })
}