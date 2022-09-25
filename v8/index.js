/*
 * :file description: 
 * :name: /v8/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-25 20:30:38
 * :last editor: 张德志
 * :date last edited: 2022-09-25 21:59:01
 */

const { messageQueue } = require('./messageQueue');

(function mainThread() {
    setInterval(() => {
        let task = messageQueue.get();
        task && task();
    },1000)
})();

(function ioThread() {
    let count = 1;
    setInterval(() => {
        messageQueue.put(() => {
            console.log('task' + count++)
        })
    },1000)
})()