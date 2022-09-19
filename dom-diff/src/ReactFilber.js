/*
 * :file description: 
 * :name: /dom-diff/src/ReactFilber.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-13 06:28:28
 * :last editor: 张德志
 * :date last edited: 2022-09-20 06:51:37
 */
import { HostRoot } from './ReactWorkTags';
import { NoFlags } from './ReactFlags';

function FiberNode(tag,pendingProps,key) {
    this.tag = tag;
    this.pendingProps = pendingProps;
    this.key = key;
    
}

function createFiber(tag,pendingProps,key) {
    return new FiberNode(tag,pendingProps,key)
}

export function createHostRootFiber() {
    return createFiber(HostRoot);
}

export function createWorkInProgress(current,pendingProps) {
    let workInProgress = current.alternate;
    if(!workInProgress) {
        workInProgress = createFiber(current.tag,pendingProps,current.key);
        workInProgress.type = current.type;
        workInProgress.stateNode = current.stateNode;
        workInProgress.alternate = current;
        current.alternate = workInProgress;
    } else {
        workInProgress.pendingProps = pendingProps;
    }
    workInProgress.flags = NoFlags;
    workInProgress.child = null;
    workInProgress.sibling = null;
    workInProgress.updateQueue = current.updateQueue;
    workInProgress.firstEffect = workInProgress.lastEffect = workInProgress.nextEffect = null;
}