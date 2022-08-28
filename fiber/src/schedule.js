/*
 * :file description: 
 * :name: /fiber/src/schedule.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-08-29 06:50:30
 * :last editor: 张德志
 * :date last edited: 2022-08-29 07:18:03
 */

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
}

function beginWork() {
    
}
