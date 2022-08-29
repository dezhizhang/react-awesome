/*
 * :file description: 
 * :name: /fiber/src/schedule.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-29 06:50:30
 * :last editor: 张德志
 * :date last edited: 2022-08-30 05:03:12
 */

import { ELEMENT_TEXT, TAG_HOST, TAG_ROOT, TAG_TEXT,PLACEMENT } from "./constants";

let nextUnitOfWork = null;
let workInProgressRoot = null;

export function scheduleRoot(rootFiber) {
    nextUnitOfWork = rootFiber;
    workInProgressRoot = rootFiber;

} 

function workLoop(deadline) {
    let shouldYield = false;

    while(nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitofWork(nextUnitOfWork);
        shouldYield = deadline.timeRemaining() < 1;
    }
    if(!nextUnitOfWork) {
       
    }
    requestIdleCallback(workLoop,{ timeout:500 });
}

requestIdleCallback(workLoop,{ timeout:500 });

function performUnitofWork(currentFiber) {
    beginWork(currentFiber);
    if(currentFiber.child) {
        return currentFiber.child;
    }
    
    while(currentFiber) {
        completeUnitOfWork(currentFiber);
        if(currentFiber.sibling) {
            return currentFiber.sibling;
        }
        currentFiber = currentFiber.return;
    }
}

function completeUnitOfWork() {
    
}

function beginWork(currentFiber) {
    if(currentFiber.tag === TAG_ROOT) {
        updateHostRoot(currentFiber);
    }
}

function updateHostRoot(currentFiber) {
    console.log('currentFiber',currentFiber);
    let newChildren =  currentFiber.props.children;
    reconcileChildren(currentFiber,newChildren);
}

function reconcileChildren(currentFiber,newChildren) {
    let newChildrenIndex = 0;
    let prevSibling;
    while(newChildrenIndex < newChildren.length) {
        let newChild = newChildren[newChildrenIndex];
        let tag;
        if(newChild.type === ELEMENT_TEXT) {
            tag = TAG_TEXT;
        }else if(typeof newChild.type === 'string') {
            tag = TAG_HOST;
        }
        let newFiber = {
            tag,
            type:newChild.type,
            props:newChild.props,
            stateNode:null,
            return:currentFiber,
            effectTag:PLACEMENT,
            nextEffect:null,
        }
        if(newChild) {
            if(newChildrenIndex ===0) {
                currentFiber.child = newFiber;
            }else {
                prevSibling.sibling = newFiber;
            }
            prevSibling = newFiber;
        }
        newChildrenIndex++;
    }
}
