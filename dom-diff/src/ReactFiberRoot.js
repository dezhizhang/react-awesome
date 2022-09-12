/*
 * :file description: 
 * :name: /dom-diff/src/ReactFiberRoot.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-13 06:28:05
 * :last editor: 张德志
 * :date last edited: 2022-09-13 06:45:05
 */
import { createHostRootFiber } from './ReactFilber';
import { inititalizeUpdateQueue } from './ReactUpdateQueue'

export function createFiberRoot(containerInfo) {
    const fiberRoot = { containerInfo };
    const hostRootFiber = createHostRootFiber();
    fiberRoot.current = hostRootFiber;
    hostRootFiber.stateNode = fiberRoot;
    inititalizeUpdateQueue(hostRootFiber);
    return fiberRoot;
    
}
