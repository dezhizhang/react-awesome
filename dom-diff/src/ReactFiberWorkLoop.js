/*
 * :file description: 
 * :name: /dom-diff/src/ReactFiberWorkLoop.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-18 11:18:00
 * :last editor: 张德志
 * :date last edited: 2022-09-22 07:32:33
 */

import { createWorkInProgress } from './ReactFilber';
import { beginWork } from './ReactFiberBeginWork';
import { completeWork } from './ReactFiberCompleteWork'
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


function completeUnitOfWork(unitOfWork) {
    // let completeWork = unitOfWork;
    do {
        const current = unitOfWork.alternate;
        const returnFiber = unitOfWork.return;
        completeWork(current,completeWork);
        collectEffectList(returnFiber,unitOfWork);

        const siblingFiber = completeWork.sibling;
        if(siblingFiber) {
            workInProgress = siblingFiber;
            return;
        }
        completeWork = returnFiber;
        workInProgress = unitOfWork;
        
    } while(unitOfWork)
}


function collectEffectList(returnFiber,completedWork) {
    if(!returnFiber.firstEffect) {
        returnFiber.firstEffect = completedWork.firstEffect;
    }
    
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