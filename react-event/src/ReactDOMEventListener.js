/*
 * :file description: 
 * :name: /react-event/src/ReactDOMEventListener.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-04 11:15:49
 * :last editor: 张德志
 * :date last edited: 2022-09-06 05:49:50
 */


import { getClosestInstanceFromNode, getFiberCurrentPropsFormNode } from "./ReactDOMComponentTree";
import { dispatchEventForPluginEventSystem } from './DOMPluginEventSystem';
import {SimpleEventPlugin} from './SimpleEventPlugin'

export function dispatchEvent(domEventName,eventSystemFlags,targetContainer,nativeEvent) {
    let nativeEventTarget = nativeEvent.target || nativeEvent.srcElement || window;
    let targetInst = getClosestInstanceFromNode(nativeEventTarget);
    let targetProps = getFiberCurrentPropsFormNode(nativeEventTarget);

    const dispatchQueue = [];
    dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        targetInst,
        targetContainer
    )

    SimpleEventPlugin.extractEvents(
        dispatchQueue,
        domEventName,
        targetInst,
        nativeEvent,
        nativeEventTarget,
        eventSystemFlags,
        targetContainer
    )


    console.log('targetInst',targetInst);
    console.log('targetProps',targetProps);
}