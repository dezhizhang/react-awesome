/*
 * :file description: 
 * :name: /dom-diff/src/ReactFiberBeginWork.JS
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-20 07:07:33
 * :last editor: 张德志
 * :date last edited: 2022-09-20 07:28:00
 */

import { HostRoot,HostComponent } from './ReactWorkTags';


function reconcileChildren() {
    
}

function updateHostRoot(current,workInProgress) {
    const updateQueue = workInProgress.updateQueue;
    const nextChildren = updateQueue.shared.pending.playoad.element;
    reconcileChildren(current,workInProgress,nextChildren);
    return workInProgress.child
}

function reconcileChildFibers() {

}

function mountChildFibers() {
    
}

function updateHostComponent(current,workInProgress,nextChildren) {
    if(current) {
        workInProgress.child = reconcileChildFibers(
            workInProgress,
            current && current.child,
            nextChildren
        )
    }else {
        workInProgress.child = mountChildFibers(
            workInProgress,
            current && current.child,
            nextChildren
        ) 
    }
}

export function beginWork(current,workInProgress) {
    switch(workInProgress.tag) {
        case HostRoot:
            return updateHostRoot(current,workInProgress);
        case HostComponent:
            return updateHostComponent(current,workInProgress);
        default:
            break;
    }
}