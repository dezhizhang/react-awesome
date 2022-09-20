/*
 * :file description: 
 * :name: /dom-diff/src/ReactFiberBeginWork.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-20 07:07:33
 * :last editor: 张德志
 * :date last edited: 2022-09-21 07:31:39
 */

import { HostRoot,HostComponent } from './ReactWorkTags';
import { shouldSetTextContent } from './ReactDOMHostConfig';

function reconcileChildren(current,workInProgress,nextChildren) {
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

function updateHostComponent(current,workInProgress) {
    const type = workInProgress.type;
    const nextProps = workInProgress.pendingProps;

    let nextChildren = nextProps.children;

    reconcileChildren(current,workInProgress,nextChildren);
    return workInProgress.child;
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