/*
 * :file description: 
 * :name: /v8/index.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-25 20:30:38
 * :last editor: 张德志
 * :date last edited: 2022-09-25 22:49:16
 */

const fork = require('fork');

class XMLHttpRequest {
    constructor() {
        this.options = {};
    }
    open(method,url) {
        this.options.method = method;
        this.options.url = url;
    }
    send() {
        let network = fork('./network');
        network.on('message',(message) => {
           this.response  = message.data;
            
        });
        network.send({type:"send",options:this.options});
        
    }
}

(function ioThread() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','https://www.baidu.com');
    xhr.onload = function() {
        console.log(xhr.response);
    }
    xhr.send();
})();

