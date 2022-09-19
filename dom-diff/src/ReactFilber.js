/*
 * :file description: 
 * :name: /dom-diff/src/ReactFilber.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-13 06:28:28
 * :last editor: 张德志
 * :date last edited: 2022-09-20 06:12:55
 */
import { HostRoot } from './ReactWorkTags';

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

export function createWorkInProgress() {
    
}