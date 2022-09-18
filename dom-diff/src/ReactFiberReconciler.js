/*
 * :file description: 
 * :name: /dom-diff/src/ReactFiberReconciler.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-18 11:02:39
 * :last editor: 张德志
 * :date last edited: 2022-09-18 11:24:11
 */

import { createUpdate, enqueueUpdate } from './ReactUpdateQueue'
import { scheduleUpdateOnFiber } from './ReactFiberWorkLoop';

export function updateContainer(element,container) {
    const current = container.current;
    const update =  createUpdate();
    update.payload = { element };
    enqueueUpdate(current,update);
    scheduleUpdateOnFiber(current);
}