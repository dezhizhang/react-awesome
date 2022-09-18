/*
 * :file description: 
 * :name: /dom-diff/src/ReactUpdateQueue.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-13 06:44:16
 * :last editor: 张德志
 * :date last edited: 2022-09-18 11:26:39
 */


// 初始化更新队列
export function inititalizeUpdateQueue(fiber) {
    const updateQueue = {
        shared:{
            pending:null
        }
    }
    fiber.updateQueue = updateQueue;
}

export function createUpdate() {
    return {};
}

export function enqueueUpdate(fiber,update) {
    let updateQueue = fiber.updateQueue;
    const sharedQueue = updateQueue.shared;
    const pending = sharedQueue.pending;

    if(!pending) {
        update.next = update;
    }else {
        update.next = pending.next;
        pending.next = update;
    }
    sharedQueue.pending = update;
}