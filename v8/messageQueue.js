/*
 * :file description: 
 * :name: /v8/messageQueue.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-25 21:51:20
 * :last editor: 张德志
 * :date last edited: 2022-09-25 21:59:33
 */


class MessageQueue {
    constructor() {
        this.messages = [];
    }
    put(message) {
        this.messages.push(message)
    }
    get() {
        return this.messages.shift();
    }
}

exports.messageQueue = new MessageQueue();
