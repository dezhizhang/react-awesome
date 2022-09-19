/*
 * :file description: 
 * :name: /dom-diff/src/ReactFiberWorkLoop.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-18 11:18:00
 * :last editor: 张德志
 * :date last edited: 2022-09-20 07:08:36
 */

import { createWorkInProgress } from './ReactFilber';
import { beginWork } from './ReactFiberBeginWork';

let workInProgressRoot = null;
let workInProgress = null;





export function scheduleUpdateOnFiber(fiber) {
    const fiberRoot = markUpdateLaneFromFiberToRoot(fiber);
    performSyncWorkOnRoot(fiberRoot);
}


function performSyncWorkOnRoot(fiberRoot) {
    workInProgressRoot = fiberRoot;
    workInProgress = createWorkInProgress(workInProgressRoot.current);
    workLoopSync();
    console.log('fiberRoot',fiberRoot)
}

function workLoopSync() {
    while(workInProgress) {
        performUnitOfWork(workInProgress);
    }
}


function completeUnitOfWork() {
    
}

function performUnitOfWork(unitOfWork) {
    const current = unitOfWork.alternate;
    let next = beginWork(current,unitOfWork);
    if(next) {
        workInProgress = next;
    }else {
        completeUnitOfWork(unitOfWork);
    }
}

function markUpdateLaneFromFiberToRoot(sourceFiber) {
    let node = sourceFiber;
    let parent = node.return;
    while(parent) {
        node = parent;
        parent = parent.return;
    }

    return node.stateNode;
}