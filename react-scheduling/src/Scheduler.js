/*
 * :file description: 
 * :name: /react-scheduling/src/Scheduler.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-27 05:53:20
 * :last editor: 张德志
 * :date last edited: 2022-09-27 06:21:19
 */

let taskIdCounter = 0;

let maxSinged318BitInt = 1073741823;


function scheduleCallback(priorityLevel,callback) {
    let currentTime = getCurrentTime();
    let startTime = currentTime;
    let timeout;
    switch(priorityLevel) {
        case 
    }
    let expirationTime = startTime + timeout;
    let newTask = {
        id:taskIdCounter++,
        callback,
        priorityLevel,
        expirationTime,
        startTime,
        sortIndex:-1,
    }
    newTask.sortIndex = expirationTime;

    requestHostCallback(flushWork)
}

function flushWork() {
    return workLoop();
}


function workLoop() {
    currentTask = peek(taskQueue);
    while(currentTask) {
        if(currentTask.expirationTime > currentTime &&  shouldYield()) {
            break
        }
        const callback = currentTask.callback;
        if(typeof callback === 'function') {
            currentTask.callback = null;
            const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
            const continuationCallback = callback(didUserCallbackTimeout);
            if(typeof continuationCallback === 'function') {
                currentTask.callback = continuationCallback;
            }else {
                pop(taskQueue);
            }
        }else {
            pop(taskQueue);
        }
    }
    return currentTask;
    
}