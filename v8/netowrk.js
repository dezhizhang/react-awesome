/*
 * :file description: 
 * :name: /v8/netowrk.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-09-25 22:39:15
 * :last editor: 张德志
 * :date last edited: 2022-09-25 22:44:05
 */


const url = require('url');
const http = require('http');

process.on('message',(message) => {
    const { type,options } = message;
    if(type === 'send') {
        const urlObj = url.parse(options.url);
        const config = {
            hostname:urlObj.hostname,
            port:urlObj.port,
            path:urlObj.path,
            method:urlObj.method,
        }

        const req = http.request(config,(res) => {
            let chunks = [];
            res.on('data',(data) => {
                chunks.push(data);
            });
            res.on('end',() => {
                process.send({
                    type:'response',
                    data:JSON.parse(Buffer.concat(chunks).toString())
                })
            })
        });
        req.end();
        
    }
})