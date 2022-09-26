/*
 * :file description: 
 * :name: /react-scheduling/src/Scheduler.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-27 05:53:20
 * :last editor: 张德志
 * :date last edited: 2022-09-27 06:00:46
 */

let taskIdCounter = 0;

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