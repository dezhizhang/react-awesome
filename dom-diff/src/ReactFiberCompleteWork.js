/*
 * :file description: 
 * :name: /dom-diff/src/ReactFiberCompleteWork.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-22 05:48:59
 * :last editor: 张德志
 * :date last edited: 2022-09-22 06:14:34
 */

import { createInstance, finalizeInitialChildren } from "./ReactDOMHostConfig";
import { HostComponent } from "./ReactWorkTags";


export function completeWork(current,workInProgress) {
    const newProps = workInProgress.pendingProps;
    switch(workInProgress.tag) {
        case HostComponent:
            const type = workInProgress.type;
            const instance = createInstance(type,newProps);
            workInProgress.stateNode = instance;
            finalizeInitialChildren(instance,type,newProps);
            break;
            default:
            break;
    }
}